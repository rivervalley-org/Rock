using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web.UI.WebControls;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Web;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Model;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Sub Project List" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Lists sub-projects for a project." )]

    [ContextAware( typeof( Project ) )]
    public partial class SubProjectList : RockBlock, ISecondaryBlock
    {
        #region Private Fields

        private bool _canAddEditDelete;

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

            //
            // Verify that the user is allowed to make edits to the project in question.
            //
            _canAddEditDelete = IsUserAuthorized( Authorization.EDIT );
            if ( _canAddEditDelete && ContextEntity<Project>() != null )
            {
                var project = ContextEntity<Project>();

                if ( project != null )
                {
                    _canAddEditDelete = project.IsAuthorized( Authorization.EDIT, CurrentPerson );
                }
            }

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );
            EventHelper.GetHelper().ProjectChanged += SubProjectList_ProjectChanged;
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
                cbShowInactive.Checked = GetUserPreference( "ShowInactive" ).AsBoolean( false );

                var project = ContextEntity<Project>();
                if ( project != null && project.IsAuthorized( Authorization.VIEW, CurrentPerson ) )
                {
                    lbAdd.Visible = _canAddEditDelete;
                    pnlProjectList.Visible = true;
                    ltHtmlIcon.Text = !string.IsNullOrWhiteSpace( project.ProjectType.IconCssClass ) ? string.Format( "<i class=\"{0}\"></i>", project.ProjectType.IconCssClass ) : string.Empty;
                    BindRepeater();
                }
            }
            else
            {
                //
                // Hide or show the options panel depending on their last selection.
                //
                if ( hfOptionsVisible.Value == "1" )
                {
                    pnlOptions.AddCssClass( "in" );
                }
                else
                {
                    pnlOptions.RemoveCssClass( "in" );
                }
            }
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Bind the repeater to the list of projects in the project.
        /// </summary>
        private void BindRepeater()
        {
            var queryable = GetFilteredProjects();

            queryable = queryable.OrderByDescending( p => p.DueDate.HasValue )
                .ThenBy( p => p.DueDate );

            rpProject.DataSource = queryable.ToList();
            rpProject.DataBind();
        }

        /// <summary>
        /// Get the filtered projects. This is the list of projects that will be
        /// displayed to the user.
        /// </summary>
        /// <param name="rockContext">The RockContext to use or null to use a temporary one.</param>
        /// <returns>An IEnumerable of Project items to display to the user.</returns>
        protected IEnumerable<Project> GetFilteredProjects( RockContext rockContext = null )
        {
            var project = ContextEntity<Project>();
            rockContext = rockContext ?? new RockContext();

            var queryable = new ProjectService( rockContext ).Queryable()
                .Where( p => p.ParentProjectId == project.Id );

            if ( !cbShowInactive.Checked )
            {
                queryable = queryable.Where( p => !p.CompletedDateTime.HasValue && !p.CancelledDateTime.HasValue );
            }

            return queryable;
        }

        /// <summary>
        /// Sets the visibility of this block when requested by other blocks.
        /// </summary>
        /// <param name="visible">true if this block should be visible.</param>
        void ISecondaryBlock.SetVisible( bool visible )
        {
            pnlProjectList.Visible = visible;
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
            BindRepeater();
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbAdd_Click( object sender, EventArgs e )
        {
            var project = ContextEntity<Project>();

            if ( project != null && _canAddEditDelete )
            {
                var queryParameters = new Dictionary<string, string>();

                queryParameters.Add( "Id", "0" );
                queryParameters.Add( "ParentProjectId", project.Id.ToString() );
                NavigateToCurrentPage( queryParameters );
            }
        }

        /// <summary>
        /// Handles the ItemDataBound event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RepeaterItemEventArgs"/> instance containing the event data.</param>
        protected void rpProject_ItemDataBound( object sender, RepeaterItemEventArgs e )
        {
            var project = e.Item.DataItem as Project;
            var liProject = e.Item.FindControl( "liProject" ) as System.Web.UI.HtmlControls.HtmlGenericControl;
            var lbProjectName = e.Item.FindControl( "lbProjectName" ) as LinkButton;
            var lDueDate = e.Item.FindControl( "lDueDate" ) as Literal;
            var lBlockedBy = e.Item.FindControl( "lBlockedby" ) as Literal;
            var lDescription = e.Item.FindControl( "lDescription" ) as Literal;
            var lAssignedTo = e.Item.FindControl( "lAssignedto" ) as Literal;

            int taskCount = project.Tasks.Count;
            int inactiveTaskCount = project.Tasks.Where( t => !t.IsActive ).Count();
            lbProjectName.Text = string.Format( "{0} <small>({1}/{2})</small>", project.Name, inactiveTaskCount, taskCount );

            liProject.Attributes.Add( "data-key", project.Guid.ToString() );

            //
            // If the project is not in an active or completed state then mark it with
            // the inactive state.
            //
            if ( !project.IsActive )
            {
                liProject.AddCssClass( "pm-inactive" );
            }

            //
            // If the project is cancelled set the CSS and then hide the button, otherwise
            // hide the non-clickable text title.
            //
            if ( project.CancelledDateTime.HasValue )
            {
                liProject.AddCssClass( "pm-cancelled" );
            }
            else
            {
                //
                // Set the due date text and icon.
                //
                if ( project.DueDate.HasValue )
                {
                    if ( project.DueDate.Value.Date == DateTime.Now.Date )
                    {
                        liProject.AddCssClass( "pm-warning" );
                    }
                    else if ( project.DueDate.Value.Date < DateTime.Now.Date )
                    {
                        liProject.AddCssClass( "pm-danger" );
                    }

                    lDueDate.Text = string.Format( "<span class=\"pm-due-date\" title=\"{1}\" data-toggle=\"tooltip\" data-delay=\"200\"><i class=\"fa fa-calendar\"></i> {0}</span>",
                        Utility.RelativeDateText( project.DueDate.Value, false ),
                        project.DueDate.Value.ToLongDateString() );
                }

                //
                // Set the "blocked by" icon.
                //
                if ( project.IsBlocked )
                {
                    var blockingProjects = project.BlockingProjects.Where( p => p.IsActive ).ToList();
                    var blockedBy = blockingProjects.Select( p => p.Name ).ToList();

                    liProject.AddCssClass( "pm-inactive" );
                    lBlockedBy.Text = string.Format( "<i class=\"fa fa-exclamation-triangle\" title=\"Blocked by {0}\" data-toggle=\"tooltip\" data-delay=\"200\"></i>",
                        string.Join( ", ", blockedBy ).EncodeHtml() );
                }

                //
                // Set the description icon.
                //
                if ( !string.IsNullOrWhiteSpace( project.Description ) )
                {
                    lDescription.Text = string.Format( "<i class=\"fa fa-info-circle\" title=\"{0}\" data-toggle=\"tooltip\" data-delay=\"200\"></i>",
                        project.Description.Truncate( 200 ).EncodeHtml() );
                }

                //
                // Add all the assigned to labels.
                //
                foreach ( var personAlias in project.Assignees )
                {
                    if ( CurrentPerson != null && CurrentPerson.Id == personAlias.PersonId )
                    {
                        lAssignedTo.Text += "<span class=\"label label-success\"><i class=\"fa fa-user\"></i> You</span> ";
                    }
                    else
                    {
                        lAssignedTo.Text += string.Format( "<span class=\"label label-info\"><i class=\"fa fa-user\" title=\"{1}\" data-toggle=\"tooltip\" data-delay=\"200\"></i> {0}</span> ",
                            personAlias.Person.NickName,
                            personAlias.Person.FullName );
                    }
                }
            }
        }

        /// <summary>
        /// Handles the ItemCommand event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void rpProject_ItemCommand( object source, RepeaterCommandEventArgs e )
        {
            int projectId = e.CommandArgument.ToString().AsInteger();

            //
            // User wants to show one of the projects.
            //
            if ( e.CommandName == "ShowProject" )
            {
                var queryParameters = new Dictionary<string, string>();

                queryParameters.Add( "Id", projectId.ToString() );
                NavigateToCurrentPage( queryParameters );

                return;
            }

            BindRepeater();
        }

        /// <summary>
        /// Handles the CheckedChanged event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void cbShowInactive_CheckedChanged( object sender, EventArgs e )
        {
            SetUserPreference( "ShowInactive", cbShowInactive.Checked.ToString(), true );
            BindRepeater();
        }

        /// <summary>
        /// Notification handler for a project being changed. We need to reload the
        /// project list because our projects may have been modified as well.
        /// </summary>
        /// <param name="sender">Object that is generating this event.</param>
        /// <param name="e">Arguments that describe this event.</param>
        private void SubProjectList_ProjectChanged( object sender, ProjectEventArgs e )
        {
            var project = ContextEntity<Project>();

            if ( pnlProjectList.Visible && e.ProjectId.HasValue && project != null && e.ProjectId == project.Id )
            {
                BindRepeater();
            }
        }

        #endregion
    }
}