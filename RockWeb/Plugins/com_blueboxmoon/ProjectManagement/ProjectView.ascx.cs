﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web.UI.WebControls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Model;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Security;
using Rock.Web.UI;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project View" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "View projects grouped by their project type." )]
    [LinkedPage( "Detail Page", "The page that allows the user to view the details of a project.", true, "", "", 0 )]
    public partial class ProjectView : RockBlock
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

            plProjects.AdditionalQueryFilter += plProjects_AdditionalQueryFilter;
            tlTasks.AdditionalQueryFilter += tlTasks_AdditionalQueryFilter;
        }

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Load" /> event.
        /// </summary>
        /// <param name="e">The <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );

            if ( !IsPostBack )
            {
                lbProjectFilter.SelectedValue = GetBlockUserPreference( "ProjectFilter" );
                lbTaskFilter.SelectedValue = GetBlockUserPreference( "TaskFilter" );
                lbViewType.SelectedValue = string.IsNullOrWhiteSpace( GetBlockUserPreference( "ViewType" ) ) ? "Projects" : GetBlockUserPreference( "ViewType" );
                cbHideEmptyTypes.Checked = GetBlockUserPreference( "HideEmptyProjectTypes" ).AsBoolean();

                BindRepeater();

                UpdateListSettings();
            }
        }

        protected override void OnPreRender( EventArgs e )
        {
            base.OnPreRender( e );

            pnlConfigureHeader.Attributes["style"] = hfConfigureVisible.Value.AsBoolean() ? string.Empty : "display: none;";
        }

        #endregion

        #region Methods

        /// <summary>
        /// Binds the repeater to the list of project types.
        /// </summary>
        protected void BindRepeater()
        {
            var rockContext = new RockContext();
            var projectTypeService = new ProjectTypeService( rockContext );
            var projectService = new ProjectService( rockContext );
            var taskService = new TaskService( rockContext );
            var projectTypeId = GetBlockUserPreference( "ProjectTypeId" ).AsInteger();
            var now = RockDateTime.Now;

            //
            // Get all the project types this user is authorized to view.
            //
            var projectTypes = projectTypeService.Queryable()
                .Where( t => t.IsActive )
                .ToList()
                .Where( t => t.IsAuthorized( Authorization.VIEW, CurrentPerson ) )
                .ToList();
            var projectTypeIds = projectTypes.Select( t => t.Id ).ToList();

            var activeCounts = new Dictionary<int, string>();
            var overdueCounts = new Dictionary<int, string>();

            if ( lbViewType.SelectedValue == "Projects" )
            {
                //
                // Prepare the basic project query.
                //
                var projectQuery = projectService.Queryable()
                    .Where( p => projectTypeIds.Contains( p.ProjectTypeId ) && p.IsActive );

                projectQuery = ModifyProjectQuery( projectQuery );

                //
                // Get all the active projects for these project types.
                //
                activeCounts = projectQuery
                    .GroupBy( p => p.ProjectTypeId )
                    .ToDictionary( p => p.Key, p => p.Count() )
                    .ToDictionary( x => x.Key, x => x.Value > 0 ? x.Value.ToString() : string.Empty );

                //
                // Get all the overdue projects for these project types.
                //
                overdueCounts = projectQuery
                    .Where( p => p.DueDate.HasValue && p.DueDate < now )
                    .GroupBy( p => p.ProjectTypeId )
                    .ToDictionary( p => p.Key, p => p.Count() )
                    .ToDictionary( x => x.Key, x => x.Value > 0 ? x.Value.ToString() : string.Empty );
            }
            else
            {
                //
                // Prepare the basic task query.
                //
                var taskQuery = taskService.Queryable( "Project" )
                    .Where( t => projectTypeIds.Contains( t.Project.ProjectTypeId ) && t.IsActive );

                taskQuery = ModifyTaskQuery( taskQuery, false );

                //
                // Get all the active projects for these project types.
                //
                activeCounts = taskQuery
                    .GroupBy( t => t.Project.ProjectTypeId )
                    .ToDictionary( t => t.Key, t => t.Count() )
                    .ToDictionary( x => x.Key, x => x.Value > 0 ? x.Value.ToString() : string.Empty );

                //
                // Get all the overdue projects for these project types.
                //
                overdueCounts = taskQuery
                    .Where( t => t.DueDate.HasValue && t.DueDate < now )
                    .GroupBy( t => t.Project.ProjectTypeId )
                    .ToDictionary( p => p.Key, p => p.Count() )
                    .ToDictionary( x => x.Key, x => x.Value > 0 ? x.Value.ToString() : string.Empty );
            }

            //
            // Filter out empty project types if that has been requested.
            //
            if ( cbHideEmptyTypes.Checked )
            {
                projectTypes = projectTypes
                    .Where( t => activeCounts.GetValueOrNull( t.Id ).AsInteger() > 0 )
                    .ToList();
            }

            //
            // Get the final data item list.
            //
            var dataList = projectTypes
                .Select( t => new
                {
                    ProjectType = t,
                    ActiveCount = activeCounts.GetValueOrNull( t.Id ) ?? string.Empty,
                    WarningCount = string.Empty,
                    DangerCount = overdueCounts.GetValueOrNull( t.Id ) ?? string.Empty,
                    Class = t.Id == projectTypeId ? "active" : string.Empty
                } );

            rptProjectTypes.DataSource = dataList;
            rptProjectTypes.DataBind();
        }

        /// <summary>
        /// Modifies the project query to match current user selections.
        /// </summary>
        /// <param name="qry">The original query.</param>
        /// <returns>The new query to be used.</returns>
        protected IQueryable<Project> ModifyProjectQuery( IQueryable<Project> qry )
        {
            if ( !string.IsNullOrWhiteSpace( GetBlockUserPreference( "ProjectFilter" ) ) )
            {
                if ( GetBlockUserPreference( "ProjectFilter" ) == "Requested By Me" )
                {
                    qry = qry.Where( p => p.RequestedByPersonAlias.PersonId == CurrentPersonId );
                }
                else if ( GetBlockUserPreference( "ProjectFilter" ) == "Assigned To Me" )
                {
                    qry = qry.Where( p => p.Assignees.Any( a => a.PersonId == CurrentPersonId ) );
                }
            }

            return qry;
        }

        /// <summary>
        /// Modifies the task query to match current user selections.
        /// </summary>
        /// <param name="qry">The original query.</param>
        /// <returns>The new query to be used.</returns>
        protected IQueryable<Task> ModifyTaskQuery( IQueryable<Task> qry, bool filterProjectType = true )
        {
            int? projectTypeId = GetBlockUserPreference( "ProjectTypeId" ).AsIntegerOrNull();

            if ( projectTypeId.HasValue && filterProjectType )
            {
                qry = qry.Where( t => t.Project.ProjectTypeId == projectTypeId );
            }

            if ( !string.IsNullOrWhiteSpace( GetBlockUserPreference( "TaskFilter" ) ) )
            {
                if ( GetBlockUserPreference( "TaskFilter" ) == "Assigned To Me" )
                {
                    qry = qry.Where( t => t.AssignedToPersonAlias.PersonId == CurrentPersonId );
                }
            }

            return qry;
        }

        /// <summary>
        /// Updates the project list settings.
        /// </summary>
        protected void UpdateListSettings()
        {
            var projectTypeId = GetBlockUserPreference( "ProjectTypeId" ).AsIntegerOrNull();

            if ( lbViewType.SelectedValue == "Projects" )
            {
                plProjects.ProjectTypeId = projectTypeId;
                plProjects.HideAssignedToFilter = GetBlockUserPreference( "ProjectFilter" ) == "Assigned To Me";
                plProjects.HideRequestedByFilter = GetBlockUserPreference( "ProjectFilter" ) == "Requested By Me";

                pnlProjects.Visible = plProjects.ProjectTypeId.HasValue;
                lbProjectFilter.Visible = true;

                pnlTasks.Visible = false;
                lbTaskFilter.Visible = false;

                plProjects.SetFilter();
                plProjects.BindGrid();
            }
            else
            {
                tlTasks.HideAssignedToFilter = GetBlockUserPreference( "TaskFilter" ) == "Assigned To Me";
                tlTasks.FilterSettingsBase = string.Format( "p{0}", projectTypeId ?? 0 );

                pnlProjects.Visible = false;
                lbProjectFilter.Visible = false;

                pnlTasks.Visible = true;
                lbTaskFilter.Visible = true;

                tlTasks.SetFilter();
                tlTasks.BindGrid();
            }
        }

        #endregion

        #region Event Handlers

        /// <summary>
        /// Handles the ItemCommand event of the rptProjectTypes control.
        /// </summary>
        /// <param name="source">The source of the event.</param>
        /// <param name="e">The <see cref="RepeaterCommandEventArgs"/> instance containing the event data.</param>
        protected void rptProjectTypes_ItemCommand( object source, RepeaterCommandEventArgs e )
        {
            if ( e.CommandName == "Select" )
            {
                SetBlockUserPreference( "ProjectTypeId", e.CommandArgument.ToString() );

                BindRepeater();

                UpdateListSettings();
            }
        }

        /// <summary>
        /// Handles the SelectionChanged event of the lbProjectFilter control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="System.EventArgs" /> instance containing the event data.</param>
        protected void lbProjectFilter_SelectionChanged( object sender, EventArgs e )
        {
            SetBlockUserPreference( "ProjectFilter", lbProjectFilter.SelectedValue );

            BindRepeater();

            UpdateListSettings();
        }

        /// <summary>
        /// Handles the SelectionChanged event of the lbTaskFilter control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="System.EventArgs" /> instance containing the event data.</param>
        protected void lbTaskFilter_SelectionChanged( object sender, EventArgs e )
        {
            SetBlockUserPreference( "TaskFilter", lbTaskFilter.SelectedValue );

            BindRepeater();

            UpdateListSettings();
        }

        /// <summary>
        /// Handles the ProjectSelected event of the plProjects control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="Rock.Web.UI.Controls.RowEventArgs"/> instance containing the event data.</param>
        protected void plProjects_ProjectSelected( object sender, Rock.Web.UI.Controls.RowEventArgs e )
        {
            NavigateToLinkedPage( "DetailPage", "Id", e.RowKeyId );
        }

        /// <summary>
        /// Handles the AddProject event of the plProjects control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void plProjects_AddProject( object sender, EventArgs e )
        {
            var parameters = new Dictionary<string, string>();
            var projectTypeId = GetBlockUserPreference( "ProjectTypeId" ).AsIntegerOrNull();

            if ( projectTypeId.HasValue )
            {
                parameters.Add( "ProjectTypeId", projectTypeId.Value.ToString() );
            }

            NavigateToLinkedPage( "DetailPage", parameters );
        }

        /// <summary>
        /// Handles the AdditionalQueryFilter event for the plProjects control.
        /// </summary>
        /// <param name="qry">The query to be modified.</param>
        /// <returns>An updated query to be used instead of the original.</returns>
        protected IQueryable<Project> plProjects_AdditionalQueryFilter( IQueryable<Project> qry )
        {
            return ModifyProjectQuery( qry );
        }

        /// <summary>
        /// Handles the TaskSelected event of the tlTasks control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="Rock.Web.UI.Controls.RowEventArgs"/> instance containing the event data.</param>
        protected void tlTasks_TaskSelected( object sender, Rock.Web.UI.Controls.RowEventArgs e )
        {
            int? projectId = null;

            using ( var rockContext = new RockContext() )
            {
                var task = new TaskService( rockContext ).Get( e.RowKeyId );

                if ( task != null )
                {
                    projectId = task.ProjectId;
                }
            }

            if ( projectId.HasValue )
            {
                NavigateToLinkedPage( "DetailPage", "Id", projectId.Value );
            }
        }

        /// <summary>
        /// Handles the AdditionalQueryFilter event for the tlTasks control.
        /// </summary>
        /// <param name="qry">The query to be modified.</param>
        /// <returns>An updated query to be used instead of the original.</returns>
        protected IQueryable<Task> tlTasks_AdditionalQueryFilter( IQueryable<Task> qry )
        {
            return ModifyTaskQuery( qry );
        }

        /// <summary>
        /// Handles the SelectionChanged event of the lbViewType control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbViewType_SelectionChanged( object sender, EventArgs e )
        {
            SetBlockUserPreference( "ViewType", lbViewType.SelectedValue );

            BindRepeater();
            UpdateListSettings();
        }

        /// <summary>
        /// Handles the CheckedChanged event of the cbHideEmptyTypes control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void cbHideEmptyTypes_CheckedChanged( object sender, EventArgs e )
        {
            SetBlockUserPreference( "HideEmptyProjectTypes", cbHideEmptyTypes.Checked.ToString() );

            BindRepeater();

            UpdateListSettings();
        }

        #endregion
    }
}
