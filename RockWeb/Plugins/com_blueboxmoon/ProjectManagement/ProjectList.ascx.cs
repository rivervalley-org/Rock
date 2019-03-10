using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;

using Rock;
using Rock.Attribute;
using Rock.Constants;
using Rock.Model;
using Rock.Security;
using Rock.Web;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Cache;
using com.blueboxmoon.ProjectManagement.Model;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project List" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Lists projects in the system." )]

    [LinkedPage( "Detail Page", "The page that allows the user to view the details of a project.", true, "", "", 0 )]
    [LinkedPage( "Project Entry Page", "If set, this page will be used when adding a new project, otherwise the project detail page is used.", false, order: 1 )]
    public partial class ProjectList : RockBlock
    {
        #region Private Fields

        private bool _canView = false;
        private bool _canAddEditDelete = false;
        private int? _projectTypeId;
        private int? _categoryId;

        #endregion

        #region Base Method Overrides

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

            Utility.AddCommonCss( RockPage );

            _categoryId = PageParameter( "CategoryId" ).AsIntegerOrNull();
            _projectTypeId = PageParameter( "ProjectTypeId" ).AsIntegerOrNull();

            ProjectTypeCache projectType = null;
            if ( _projectTypeId.HasValue )
            {
                projectType = ProjectTypeCache.Get( _projectTypeId.Value );
            }

            //
            // Verify that the user is allowed to make edits to the project type in question.
            //
            _canView = projectType != null ? projectType.IsAuthorized( Authorization.VIEW, CurrentPerson ) : true;
            _canAddEditDelete = IsUserAuthorized( Authorization.EDIT );
            if ( _canAddEditDelete && projectType != null )
            {
                _canAddEditDelete = projectType.IsAuthorized( Authorization.EDIT, CurrentPerson );
            }

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );

            plProjects.AdditionalQueryFilter += plProjects_AdditionalQueryFilter;
        }

        /// <summary>
        /// Initialize basic information about the page structure and setup the default content.
        /// </summary>
        /// <param name="sender">Object that is generating this event.</param>
        /// <param name="e">Arguments that describe this event.</param>
        protected void Page_Load( object sender, EventArgs e )
        {
            if ( !IsPostBack )
            {
                if ( !_canView )
                {
                    nbUnauthorizedMessage.Text = EditModeMessage.NotAuthorizedToView( ProjectType.FriendlyTypeName );
                    pnlProjectList.Visible = false;

                    return;
                }

                //
                // We are probably on a category list page and no category has been selected yet.
                //
                if ( !_categoryId.HasValue && !_projectTypeId.HasValue )
                {
                    pnlProjectList.Visible = false;
                    return;
                }

                if ( _categoryId.HasValue )
                {
                    plProjects.FilterSettingsBase = string.Format( "c{0}", _categoryId.Value );
                }

                plProjects.ProjectTypeId = _projectTypeId;
                plProjects.ShowAddButton = _canAddEditDelete;
                plProjects.ShowDeleteButton = _canAddEditDelete;
                plProjects.SetFilter();
                plProjects.BindGrid();
            }
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Get the breadcrumbs to display for this block.
        /// </summary>
        /// <param name="pageReference">The page this block is on.</param>
        /// <returns>A list of additional breadcrumbs to add.</returns>
        public override List<BreadCrumb> GetBreadCrumbs( PageReference pageReference )
        {
            var breadcrumbs = new List<BreadCrumb>();
            var projectType = ProjectTypeCache.Get( PageParameter( "ProjectTypeId" ).AsInteger() );

            if ( projectType != null )
            {
                breadcrumbs.Add( new BreadCrumb( projectType.Name, pageReference ) );
            }

            return breadcrumbs;
        }

        #endregion

        #region Event Handlers

        /// <summary>
        /// Handles the BlockUpdated event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_BlockUpdated( object sender, EventArgs e )
        {
            nbDangerMessage.Text = string.Empty;

            plProjects.SetFilter();
            plProjects.BindGrid();
        }

        /// <summary>
        /// Handles the ProjectSelected event of the plProjects control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="Rock.Web.UI.Controls.RowEventArgs"/> instance containing the event data.</param>
        protected void plProjects_ProjectSelected( object sender, RowEventArgs e )
        {
            if ( _canAddEditDelete )
            {
                NavigateToLinkedPage( "DetailPage", "Id", e.RowKeyId );
            }
        }

        /// <summary>
        /// Handles the AddProject event of the plProjects control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void plProjects_AddProject( object sender, EventArgs e )
        {
            var parameters = new Dictionary<string, string>();

            if ( _categoryId.HasValue )
            {
                parameters.Add( "CategoryId", _categoryId.Value.ToString() );
            }

            if ( _projectTypeId.HasValue )
            {
                parameters.Add( "ProjectTypeId", _projectTypeId.Value.ToString() );
            }


            if ( !string.IsNullOrWhiteSpace( GetAttributeValue( "ProjectEntryPage" ) ) )
            {
                NavigateToLinkedPage( "ProjectEntryPage", parameters );
            }
            else
            {
                NavigateToLinkedPage( "DetailPage", parameters );
            }
        }

        /// <summary>
        /// Handles the AdditionalQueryFilter event for the plProjects control.
        /// </summary>
        /// <param name="qry">The query to be modified.</param>
        /// <returns>An updated query to be used instead of the original.</returns>
        private IQueryable<Project> plProjects_AdditionalQueryFilter( IQueryable<Project> qry )
        {
            if ( _categoryId.HasValue )
            {
                qry = qry.Where( p => p.CategoryId == _categoryId );
            }

            return qry;
        }

        #endregion
    }
}