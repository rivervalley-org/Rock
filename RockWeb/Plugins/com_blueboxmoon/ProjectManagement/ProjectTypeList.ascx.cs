using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web.UI.WebControls;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Security;
using Rock.Web;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Cache;
using com.blueboxmoon.ProjectManagement.Model;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project Type List" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Lists project types in the system." )]

    [LinkedPage( "Detail Page", "The page that allows the user to edit the details of a project type.", true, "", "", 0 )]
    [LinkedPage( "Project List Page", "The page that allows the user to view all projects of a project type.", true, "", "", 1 )]
    public partial class ProjectTypeList : RockBlock
    {
        #region Base Method Overrides

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

            Utility.AddCommonCss( RockPage );

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );

            bool canAddEditDelete = IsUserAuthorized( Authorization.EDIT );

            gProjectType.DataKeyNames = new string[] { "Id" };
            gProjectType.Actions.AddClick += gProjectType_Add;
            gProjectType.GridRebind += gProjectType_GridRebind;
            gProjectType.Actions.ShowAdd = canAddEditDelete;
            gProjectType.IsDeleteEnabled = canAddEditDelete;

            var securityField = gProjectType.Columns.OfType<SecurityField>().FirstOrDefault();
            if ( securityField != null )
            {
                securityField.EntityTypeId = EntityTypeCache.Get( typeof( ProjectType ) ).Id;
            }
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
                BindGrid();
            }
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Bind the data grid to the list of project types in the system.
        /// </summary>
        private void BindGrid()
        {
            var projectTypeService = new ProjectTypeService( new RockContext() );
            var sortProperty = gProjectType.SortProperty;

            var types = projectTypeService.Queryable( "Projects" )
                .Select( t => new
                {
                    t.Id,
                    t.Name,
                    t.IsSystem,
                    Projects = t.Projects.Count()
                } )
                .ToList();

            if ( sortProperty != null )
            {
                types = types.AsQueryable().Sort( sortProperty ).ToList();
            }
            else
            {
                types = types.OrderBy( t => t.Name ).ToList();
            }

            gProjectType.EntityTypeId = EntityTypeCache.Get<ProjectType>().Id;
            gProjectType.DataSource = types;
            gProjectType.DataBind();
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
            BindGrid();
        }

        /// <summary>
        /// Handles the RowSelected event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs"/> instance containing the event data.</param>
        protected void gProjectType_RowSelected( object sender, Rock.Web.UI.Controls.RowEventArgs e )
        {
            NavigateToLinkedPage( "DetailPage", "ProjectTypeId", e.RowKeyId );
        }

        /// <summary>
        /// Handles the Delete event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs"/> instance containing the event data.</param>
        protected void gProjectType_Delete( object sender, Rock.Web.UI.Controls.RowEventArgs e )
        {
            var rockContext = new RockContext();
            var projectTypeService = new ProjectTypeService( rockContext );
            var projectType = projectTypeService.Get( e.RowKeyId );

            if ( projectType != null )
            {
                int projectTypeId = projectType.Id;

                if ( !projectType.IsAuthorized( Authorization.ADMINISTRATE, CurrentPerson ) )
                {
                    mdGridWarning.Show( "Sorry, you're not authorized to delete this project type.", ModalAlertType.Alert );
                    return;
                }

                string errorMessage;
                if ( !projectTypeService.CanDelete( projectType, out errorMessage ) )
                {
                    mdGridWarning.Show( errorMessage, ModalAlertType.Information );
                    return;
                }

                projectType.ParentProjectTypes.Clear();
                projectType.ChildProjectTypes.Clear();

                projectTypeService.Delete( projectType );
                rockContext.SaveChanges();

                ProjectTypeCache.Remove( projectTypeId );
            }

            BindGrid();
        }

        /// <summary>
        /// Handles the GridRebind event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="GridRebindEventArgs"/> instance containing the event data.</param>
        protected void gProjectType_GridRebind( object sender, Rock.Web.UI.Controls.GridRebindEventArgs e )
        {
            BindGrid();
        }

        /// <summary>
        /// Handles the Add event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void gProjectType_Add( object sender, EventArgs e )
        {
            NavigateToLinkedPage( "DetailPage", "ProjectTypeId", 0 );
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void gProjectType_ViewProjects( object sender, EventArgs e )
        {
            GridViewRow row = ( GridViewRow ) ( ( LinkButton ) sender ).Parent.Parent;
            RowEventArgs args = new RowEventArgs( row );

            NavigateToLinkedPage( "ProjectListPage", "ProjectTypeId", args.RowKeyId );
        }

        #endregion
    }
}