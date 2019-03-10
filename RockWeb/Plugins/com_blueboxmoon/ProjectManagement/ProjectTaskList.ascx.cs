using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Web.UI.WebControls;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Utility;
using Rock.Web;
using Rock.Web.Cache;
using Rock.Web.UI;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Model;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project Task List" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Lists tasks for a project." )]

    [ContextAware( typeof( Project ) )]
    public partial class ProjectTaskList : RockBlock, ISecondaryBlock
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
            EventHelper.GetHelper().ProjectChanged += ProjectTaskList_ProjectChanged;
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
                var project = ContextEntity() as Project;

                cbShowInactive.Checked = GetUserPreference( "ShowInactive" ).AsBoolean( false );
                rbOrdering.SetValue( GetUserPreference( "ManualOrdering" ), "0" );
                lbPaste.Visible = _canAddEditDelete;
                lbAdd.Visible = _canAddEditDelete;

                if ( project != null && project.IsAuthorized( Authorization.VIEW, CurrentPerson ) )
                {
                    BindRepeater();
                    pnlTaskList.Visible = true;
                }
            }
            else
            {
                SetFollowingOnPostback();

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

                //
                // Process custom postback events.
                //
                string postbackArgs = Request.Params["__EVENTARGUMENT"];
                if ( !string.IsNullOrWhiteSpace( postbackArgs ) )
                {
                    string[] nameValue = postbackArgs.Split( new char[] { ':' } );
                    if ( nameValue.Length == 2 )
                    {
                        string[] values = nameValue[1].Split( new char[] { ';' } );
                        if ( values.Length == 2 )
                        {
                            Guid guid = values[0].AsGuid();
                            int newIndex = values[1].AsInteger();

                            SortTasks( guid, newIndex );
                        }
                    }
                }
            }
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Bind the repeater to the list of tasks in the project.
        /// </summary>
        private void BindRepeater()
        {
            var queryable = GetFilteredTasks();

            if ( rbOrdering.SelectedValue == "1" )
            {
                queryable = queryable.OrderByDescending( t => t.DueDate.HasValue )
                    .ThenBy( t => t.DueDate )
                    .ThenBy( t => t.Order );
            }
            else
            {
                queryable = queryable.OrderBy( t => t.Order );
            }

            rpTask.DataSource = queryable.ToList();
            rpTask.DataBind();
        }

        /// <summary>
        /// Get the filtered tasks. This is the list of tasks that will be
        /// displayed to the user.
        /// </summary>
        /// <param name="rockContext">The RockContext to use or null to use a temporary one.</param>
        /// <returns>An IEnumerable of Task items to display to the user.</returns>
        protected IEnumerable<Task> GetFilteredTasks( RockContext rockContext = null )
        {
            var project = ContextEntity<Project>();
            rockContext = rockContext ?? new RockContext();

            var queryable = new TaskService( rockContext ).Queryable()
                .Where( t => t.ProjectId == project.Id );

            if ( !cbShowInactive.Checked )
            {
                queryable = queryable.Where( t => !t.CancelledDateTime.HasValue && !t.CompletedDateTime.HasValue );
            }

            return queryable;
        }

        /// <summary>
        /// Show the view task dialog with the given task Id.
        /// </summary>
        /// <param name="taskId">The task id to view.</param>
        protected void ShowViewDialog( int taskId )
        {
            var task = new TaskService( new RockContext() ).Get( taskId );
            var project = ContextEntity<Project>();
            var details = new StringBuilder();

            if ( task == null )
            {
                return;
            }

            details.Append( "<dl>" );
            details.AppendFormat( "<dt>Name</dt><dd>{0}</dd>", task.Name.EncodeHtml() );

            if ( !string.IsNullOrWhiteSpace( task.Description ) )
            {
                details.AppendFormat( "<dt>Description</dt><dd>{0}</dd>", task.Description.EncodeHtml() );
            }

            if ( task.DueDate.HasValue )
            {
                details.AppendFormat( "<dt>Due Date</dt><dd>{0}</dd>", task.DueDate.Value.ToShortDateString() );
            }

            if ( task.AssignedToPersonAlias != null )
            {
                details.AppendFormat( "<dt>Assigned To</dt><dd>{0}</dd>", task.AssignedToPersonAlias.Person.FullName.EncodeHtml() );
            }

            if ( task.CompletedDateTime.HasValue )
            {
                details.Append( "<dt>Status</dt><dd>Completed</dd>" );
            }
            else if ( task.CancelledDateTime.HasValue )
            {
                details.Append( "<dt>Status</dt><dd>Cancelled</dd>" );
            }
            else
            {
                details.Append( "<dt>Status</dt><dd>Active</dd>" );
            }

            var blockedBy = new List<string>();
            foreach ( var blocker in task.BlockingTasks )
            {
                bool active = !blocker.CompletedDateTime.HasValue && !blocker.CancelledDateTime.HasValue;

                if ( active )
                {
                    blockedBy.Add( blocker.Name );
                }
                else
                {
                    blockedBy.Add( string.Format( "<del>{0}</del>", blocker.Name.EncodeHtml() ) );
                }
            }

            if ( blockedBy.Any() )
            {
                details.AppendFormat( "<dt>Blocked By</dt><dd>{0}</dd>", string.Join( "<br>", blockedBy ) );
            }

            details.Append( "</dl>" );

            ltViewTaskDetails.Text = details.ToString();

            //
            // Add all the tags.
            //
            foreach ( var tag in GetCurrentTags( task.Guid ) )
            {
                ltViewTaskTags.Text += string.Format( "<span class=\"label label-default\"><i class=\"fa fa-tag\"></i> {0}</span> ", tag.EncodeHtml() );
            }

            mdlTaskView.Show();
        }

        /// <summary>
        /// Show the edit task dialog with the given task Id.
        /// </summary>
        /// <param name="taskId">The task id to edit or 0 to create a new task.</param>
        protected void ShowEditDialog( int taskId )
        {
            var task = new TaskService( new RockContext() ).Get( taskId );
            var project = ContextEntity<Project>();

            if ( task == null )
            {
                task = new Task { Id = 0 };
                mdlTaskDetail.Title = "Add Task";
            }
            else
            {
                mdlTaskDetail.Title = "Edit Task";
            }

            cblBlockedBy.Items.Clear();
            project.Tasks.Where( t => t.Id != task.Id ).ToList()
                .ForEach( t => cblBlockedBy.Items.Add( new ListItem( t.Name, t.Id.ToString() ) ) );
            ddlState.Items.Clear();
            ddlState.Items.Add( new ListItem() );
            ddlState.Items.Add( "Active" );
            ddlState.Items.Add( "Completed" );
            ddlState.Items.Add( "Cancelled" );

            hfTaskId.Value = task.Id.ToString();
            tbName.Text = task.Name;
            tbDescription.Text = task.Description;
            dpDueDate.SelectedDate = task.DueDate;
            ppAssignedTo.SetValue( task.AssignedToPersonAlias != null ? task.AssignedToPersonAlias.Person : null );

            if ( task.CompletedDateTime.HasValue )
            {
                ddlState.SelectedValue = "Completed";
            }
            else if ( task.CancelledDateTime.HasValue )
            {
                ddlState.SelectedValue = "Cancelled";
            }
            else
            {
                ddlState.SelectedValue = "Active";
            }

            foreach ( var blocker in task.BlockingTasks )
            {
                var item = cblBlockedBy.Items.FindByValue( blocker.Id.ToString() );
                if ( item != null )
                {
                    item.Selected = true;
                }
            }

            //
            // Configure the recurring options.
            //
            if ( task.RecurringSchedule != null )
            {
                cbRecurring.Checked = true;
                sbRecurringSchedule.iCalendarContent = task.RecurringSchedule.iCalendarContent;
            }
            else
            {
                cbRecurring.Checked = false;
                sbRecurringSchedule.iCalendarContent = string.Empty;
            }
            nbRecurDaysBefore.Text = task.RecurDaysBefore.HasValue ? task.RecurDaysBefore.ToString() : "0";
            sbRecurringSchedule.Visible = cbRecurring.Checked;
            nbRecurDaysBefore.Visible = cbRecurring.Checked;
            UpdateScheduleHelpText();

            cblBlockedBy.Visible = cblBlockedBy.Items.Count > 0;
            lbConvertTask.Visible = task.Id != 0;
            lbDeleteTask.Visible = task.Id != 0;
            pnlEditTags.Visible = task.Id != 0;

            tlTaskEdit.EntityTypeId = EntityTypeCache.GetId( "com.blueboxmoon.ProjectManagement.Model.Task" ).Value;
            tlTaskEdit.EntityGuid = task.Guid;
            tlTaskEdit.GetTagValues( CurrentPersonId );
            var rockVersion = RockSemanticVersion.Parse( Rock.VersionInfo.VersionInfo.GetRockSemanticVersionNumber() );
            if ( rockVersion >= RockSemanticVersion.Parse( "1.7.0" ) )
            {
                tlTaskEdit.DelaySave = true;
            }

            mdlTaskDetail.Show();
        }

        /// <summary>
        /// Sort the task list based on the task item specified being at the new index.
        /// </summary>
        /// <param name="guid">The identifier of the Task that has moved.</param>
        /// <param name="newIndex">The new index position of the Task.</param>
        protected void SortTasks( Guid guid, int newIndex )
        {
            var rockContext = new RockContext();
            var project = new ProjectService( rockContext ).Get( ( ( Project ) ContextEntity() ).Id );
            var tasks = GetFilteredTasks( rockContext );
            var task = tasks.Where( t => t.Guid == guid ).FirstOrDefault();

            if ( task != null )
            {
                var taskOrders = tasks.OrderBy( t => t.Order ).Select( t => t.Order ).ToList();
                var taskList = tasks
                    .Where( t => t.Guid != task.Guid )
                    .OrderBy( t => t.Order )
                    .ToList();

                if ( newIndex >= taskList.Count )
                {
                    taskList.Add( task );
                }
                else
                {
                    taskList.Insert( newIndex, task );
                }

                //
                // If we are not filtering then re-build the order numbers from scratch.
                //
                if ( taskList.Count == project.Tasks.Count )
                {
                    taskOrders = new List<int>();
                    for ( int i = 0; i < taskList.Count; i++ )
                    {
                        taskOrders.Add( i );
                    }
                }

                //
                // Re-order the tasks.
                //
                int index = 0;
                taskList.ForEach( t => t.Order = taskOrders[index++] );

                rockContext.SaveChanges();
            }

            BindRepeater();
        }

        /// <summary>
        /// Sets the visibility of this block when requested by other blocks.
        /// </summary>
        /// <param name="visible">true if this block should be visible.</param>
        void ISecondaryBlock.SetVisible( bool visible )
        {
            pnlTaskList.Visible = visible;
        }

        /// <summary>
        /// Sets the following on postback.
        /// </summary>
        private void SetFollowingOnPostback()
        {
            var taskService = new TaskService( new RockContext() );

            foreach ( RepeaterItem rpItem in rpTask.Items )
            {
                var liTask = rpItem.FindControl( "liTask" ) as System.Web.UI.HtmlControls.HtmlGenericControl;
                var lFollow = rpItem.FindControl( "lFollow" ) as Label;
                var task = taskService.Get( liTask.Attributes["data-key"].AsGuid() );

                if ( task != null )
                {
                    Utility.SetFollowing( task, lFollow, CurrentPerson );
                }
            }
        }

        /// <summary>
        /// Get the current tags for the given task.
        /// </summary>
        /// <param name="guid">The task's Guid.</param>
        /// <returns>A collection of tag names</returns>
        private List<string> GetCurrentTags( Guid guid )
        {
            var tagList = new List<string>();

            using ( var rockContext = new RockContext() )
            {
                var service = new TaggedItemService( rockContext );
                var qry = service.Get(
                    EntityTypeCache.Get( "com.blueboxmoon.ProjectManagement.Model.Task" ).Id,
                    string.Empty, string.Empty, CurrentPersonId, guid );

                var items = qry
                    .Select( a => a.Tag )
                    .OrderBy( a => a.Name );

                foreach ( var item in items )
                {
                    if ( item.IsAuthorized( Rock.Security.Authorization.VIEW, CurrentPerson ) )
                    {
                        tagList.Add( item.Name );
                    }
                }
            }

            return tagList;
        }

        private void UpdateScheduleHelpText()
        {
            sbRecurringSchedule.ToolTip = "No Schedule";

            var fakeSchedule = new Schedule
            {
                iCalendarContent = sbRecurringSchedule.iCalendarContent
            };

            if ( fakeSchedule.HasSchedule() )
            {
                sbRecurringSchedule.ToolTip = fakeSchedule.ToFriendlyScheduleText( true );
            }
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
            ShowEditDialog( 0 );
        }

        /// <summary>
        /// Handles the SaveClick event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void mdlTaskDetail_SaveClick( object sender, EventArgs e )
        {
            var rockContext = new RockContext();
            var taskService = new TaskService( rockContext );
            var scheduleService = new ScheduleService( rockContext );
            var task = taskService.Get( hfTaskId.ValueAsInt() );
            var project = ContextEntity<Project>();

            if ( task == null )
            {
                task = new Task { Id = 0 };
                taskService.Add( task );
                task.ProjectId = project.Id;
                task.Project = new ProjectService( rockContext ).Get( project.Id );
                task.Order = project.Tasks.Select( t => t.Order ).DefaultIfEmpty( -1 ).Max() + 1;
            }

            var oldAssignedToPersonAliasId = task.AssignedToPersonAliasId;
            bool stateChanged = false;

            task.Name = tbName.Text;
            task.Description = tbDescription.Text;
            task.DueDate = dpDueDate.SelectedDate;
            task.AssignedToPersonAliasId = ppAssignedTo.PersonAliasId;

            if ( ddlState.SelectedValue == "Completed" )
            {
                task.CancelledDateTime = null;
                if ( !task.CompletedDateTime.HasValue )
                {
                    task.CompletedDateTime = RockDateTime.Now;
                    stateChanged = true;
                }
            }
            else if ( ddlState.SelectedValue == "Cancelled" )
            {
                task.CompletedDateTime = null;
                if ( !task.CancelledDateTime.HasValue )
                {
                    task.CancelledDateTime = RockDateTime.Now;
                    stateChanged = true;
                }
            }
            else
            {
                stateChanged = task.CompletedDateTime.HasValue || task.CancelledDateTime.HasValue;
                task.CompletedDateTime = null;
                task.CancelledDateTime = null;
            }

            //
            // Update the list of tasks that are blocking this task.
            //
            var selectedTaskIds = cblBlockedBy.SelectedValuesAsInt;
            var tasksToRemove = task.BlockingTasks.Where( t => !selectedTaskIds.Contains( t.Id ) );
            var taskIdsToAdd = selectedTaskIds.Where( id => !task.BlockingTasks.Where( t => t.Id == id ).Any() );
            tasksToRemove.ToList().ForEach( t => task.BlockingTasks.Remove( t ) );
            taskIdsToAdd.ToList().ForEach( id => task.BlockingTasks.Add( taskService.Get( id ) ) );

            bool isBlocked = task.BlockingTasks.Any( t => t.IsActive ) || task.Project.IsBlocked;
            if ( isBlocked && !task.BlockedDateTime.HasValue )
            {
                task.BlockedDateTime = RockDateTime.Now;
            }
            else if ( !isBlocked && task.BlockedDateTime.HasValue )
            {
                task.BlockedDateTime = null;
            }

            //
            // Update the tasks that were blocked by this task if our state has changed.
            //
            if ( stateChanged )
            {
                task.UpdateBlockedTaskStates();
                new NoteService( rockContext ).Add( task.NoteForStateChange( CurrentPersonAliasId.Value ) );
            }

            //
            // Update the recurring information.
            //
            var fakeSchedule = new Schedule
            {
                iCalendarContent = sbRecurringSchedule.iCalendarContent
            };
            if ( cbRecurring.Checked && fakeSchedule.HasSchedule() )
            {
                if ( task.RecurringSchedule == null )
                {
                    task.RecurringSchedule = new Schedule();
                }

                task.RecurringSchedule.iCalendarContent = sbRecurringSchedule.iCalendarContent;
                task.RecurDaysBefore = nbRecurDaysBefore.Text.AsIntegerOrNull();
            }
            else
            {
                if ( task.RecurringSchedule != null )
                {
                    scheduleService.Delete( task.RecurringSchedule );
                }

                task.RecurringScheduleId = null;
                task.RecurDaysBefore = null;
            }

            rockContext.SaveChanges();

            var rockVersion = RockSemanticVersion.Parse( Rock.VersionInfo.VersionInfo.GetRockSemanticVersionNumber() );
            if ( rockVersion >= RockSemanticVersion.Parse( "1.7.0" ) )
            {
                tlTaskEdit.SaveTagValues( CurrentPersonAlias );
            }

            //
            // Send notification if the assignment changed.
            //
            if ( task.AssignedToPersonAliasId.HasValue && ( !oldAssignedToPersonAliasId.HasValue || task.AssignedToPersonAliasId.Value != oldAssignedToPersonAliasId.Value ) )
            {
                Task.SendAssignedNotification( task.Id, CurrentPersonAliasId, task.AssignedToPersonAliasId.Value );
            }

            mdlTaskDetail.Hide();
            BindRepeater();
        }

        /// <summary>
        /// Handles the ItemDataBound event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RepeaterItemEventArgs"/> instance containing the event data.</param>
        protected void rpTask_ItemDataBound( object sender, RepeaterItemEventArgs e )
        {
            var task = e.Item.DataItem as Task;
            var liTask = e.Item.FindControl( "liTask" ) as System.Web.UI.HtmlControls.HtmlGenericControl;
            var lbTaskToggle = e.Item.FindControl( "lbTaskToggle" ) as LinkButton;
            var aReorder = e.Item.FindControl( "aReorder" ) as System.Web.UI.HtmlControls.HtmlAnchor;
            var iTaskState = e.Item.FindControl( "iTaskState" ) as System.Web.UI.HtmlControls.HtmlGenericControl;
            var lFollow = e.Item.FindControl( "lFollow" ) as Label;
            var lDueDate = e.Item.FindControl( "lDueDate" ) as Literal;
            var lRecurringTask = e.Item.FindControl( "lRecurringTask" ) as Literal;
            var lBlockedBy = e.Item.FindControl( "lBlockedby" ) as Literal;
            var lDescription = e.Item.FindControl( "lDescription" ) as Literal;
            var lAssignedTo = e.Item.FindControl( "lAssignedTo" ) as Literal;
            var lTags = e.Item.FindControl( "lTags" ) as Literal;
            bool isMyTask = task.AssignedToPersonAlias != null && task.AssignedToPersonAlias.PersonId == CurrentPersonId;

            //
            // Setup some of the generic states.
            //
            liTask.Attributes.Add( "data-key", task.Guid.ToString() );
            iTaskState.AddCssClass( task.CompletedDateTime.HasValue ? "fa-check-square-o" : "fa-square-o" );
            aReorder.Visible = rbOrdering.SelectedValue == "0" && _canAddEditDelete;

            //
            // Only show the following icon if the user is logged in.
            //
            if ( CurrentPerson != null )
            {
                Utility.SetFollowing( task, lFollow, CurrentPerson );
            }
            else
            {
                lFollow.Visible = false;
            }

            //
            // If the task is not in an active or completed state then mark it with
            // the inactive state.
            //
            if ( !task.IsActive )
            {
                liTask.AddCssClass( "pm-inactive" );
            }

            //
            // If the task is cancelled set the CSS and then hide the button, otherwise
            // hide the non-clickable text title.
            //
            if ( task.CancelledDateTime.HasValue )
            {
                liTask.AddCssClass( "pm-cancelled" );
                lbTaskToggle.Enabled = false;
            }
            else
            {
                //
                // Set the due date text and icon.
                //
                if ( task.DueDate.HasValue )
                {
                    if ( task.DueDate.Value.Date == DateTime.Now.Date )
                    {
                        liTask.AddCssClass( "pm-warning" );
                    }
                    else if ( task.DueDate.Value.Date < DateTime.Now.Date )
                    {
                        liTask.AddCssClass( "pm-danger" );
                    }

                    lDueDate.Text = string.Format( "<span class=\"pm-due-date\" title=\"{1}\" data-toggle=\"tooltip\" data-delay=\"200\"><i class=\"fa fa-calendar\"></i> {0}</span>",
                        Utility.RelativeDateText( task.DueDate.Value, false ),
                        task.DueDate.Value.ToLongDateString() );
                }

                //
                // Check if this is a recurring task.
                //
                if ( task.RecurringSchedule != null )
                {
                    var fakeSchedule = new Schedule
                    {
                        iCalendarContent = task.RecurringSchedule.iCalendarContent
                    };

                    lRecurringTask.Text = string.Format( "<i class=\"fa fa-recycle\" title=\"{0}\" data-toggle=\"tooltip\" data-delay=\"200\"></i> ", fakeSchedule.ToFriendlyScheduleText( true ) );
                }

                //
                // Set the "blocked by" icon.
                //
                if ( task.IsBlocked )
                {
                    var blockingTasks = task.BlockingTasks.Where( t => t.IsActive ).ToList();
                    var blockedBy = blockingTasks.Select( t => t.Name ).ToList();

                    if ( task.Project.IsBlocked )
                    {
                        blockedBy.Insert( 0, "Project" );
                    }

                    liTask.AddCssClass( "pm-inactive" );
                    lBlockedBy.Text = string.Format( "<i class=\"fa fa-exclamation-triangle\" title=\"Blocked by {0}\" data-toggle=\"tooltip\" data-delay=\"200\"></i>",
                        string.Join( ", ", blockedBy ).EncodeHtml() );
                }

                //
                // Set the description icon.
                //
                if ( !string.IsNullOrWhiteSpace( task.Description ) )
                {
                    lDescription.Text = string.Format( "<i class=\"fa fa-info-circle\" title=\"{0}\" data-toggle=\"tooltip\" data-delay=\"200\"></i>",
                        task.Description.Truncate( 200 ).EncodeHtml() );
                }

                //
                // Add all the assigned to labels.
                //
                if ( task.AssignedToPersonAlias != null )
                {
                    if ( CurrentPerson != null && CurrentPerson.Id == task.AssignedToPersonAlias.PersonId )
                    {
                        lAssignedTo.Text += "<span class=\"label label-success\"><i class=\"fa fa-user\"></i> You</span> ";
                    }
                    else
                    {
                        lAssignedTo.Text += string.Format( "<span class=\"label label-info\"><i class=\"fa fa-user\" title=\"{1}\" data-toggle=\"tooltip\" data-delay=\"200\"></i> {0}</span> ",
                            task.AssignedToPersonAlias.Person.NickName,
                            task.AssignedToPersonAlias.Person.FullName );
                    }
                }

                //
                // Add all the tags.
                //
                foreach ( var tag in GetCurrentTags( task.Guid ) )
                {
                    lTags.Text += string.Format( "<span class=\"label label-default\"><i class=\"fa fa-tag\"></i> {0}</span> ", tag.EncodeHtml() );
                }
            }

            //
            // Users can complete tasks if they have edit permissions OR if the task is assigned to them.
            //
            if ( lbTaskToggle.Enabled )
            {
                lbTaskToggle.Enabled = _canAddEditDelete || isMyTask;
            }
        }

        /// <summary>
        /// Handles the ItemCommand event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void rpTask_ItemCommand( object source, RepeaterCommandEventArgs e )
        {
            int taskId = e.CommandArgument.ToString().AsInteger();

            //
            // User wants to edit one of the tasks.
            //
            if ( e.CommandName == "EditTask" )
            {
                if ( _canAddEditDelete )
                {
                    ShowEditDialog( taskId );
                }
                else
                {
                    ShowViewDialog( taskId );
                }
            }

            //
            // User wants to toggle the completed state of one of the tasks.
            //
            else if ( e.CommandName == "ToggleTask" )
            {
                var rockContext = new RockContext();
                var task = new TaskService( rockContext ).Get( taskId );
                bool isMyTask = task.AssignedToPersonAlias != null && task.AssignedToPersonAlias.PersonId == CurrentPersonId;

                //
                // Deny the operation if they don't have edit permissions and the task is
                // not assigned to them.
                //
                if ( !_canAddEditDelete && !isMyTask )
                {
                    return;
                }

                if ( task.IsActive )
                {
                    task.CompletedDateTime = RockDateTime.Now;
                    task.UpdateBlockedTaskStates();
                }
                else if ( task.CompletedDateTime.HasValue )
                {
                    task.CompletedDateTime = null;
                    task.UpdateBlockedTaskStates();
                }

                new NoteService( rockContext ).Add( task.NoteForStateChange( CurrentPersonAliasId.Value ) );

                rockContext.SaveChanges();

                EventHelper.GetHelper().PostProjectCommentsChanged( this, task.Project.Id );

                BindRepeater();
            }
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
        /// Handles the SelectedIndexChanged event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void rbOrdering_SelectedIndexChanged( object sender, EventArgs e )
        {
            SetUserPreference( "ManualOrdering", rbOrdering.SelectedValue, true );
            BindRepeater();
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbDeleteTask_Click( object sender, EventArgs e )
        {
            if ( !_canAddEditDelete )
            {
                return;
            }

            using ( var rockContext = new RockContext() )
            {
                var noteService = new NoteService( rockContext );
                var taskService = new TaskService( rockContext );
                var projectService = new ProjectService( rockContext );
                var task = taskService.Get( hfTaskId.Value.AsInteger() );

                //
                // Add a new note to the database.
                //
                var note = new Note { Id = 0 };
                noteService.Add( note );
                note.NoteTypeId = NoteTypeCache.Get( com.blueboxmoon.ProjectManagement.SystemGuid.NoteType.TASK_CHANGES.AsGuid() ).Id;
                note.EntityId = task.Project.Id;
                note.Text = string.Format( "deleted task <span class=\"pm-comment-reference-task\" rel=\"{0}\">{1}</span>",
                    task.Id, task.Name );
                note.CreatedByPersonAliasId = CurrentPersonAliasId;

                //
                // Cancel this task and then update all blocked tasks.
                //
                task.CancelledDateTime = RockDateTime.Now;
                task.UpdateBlockedTaskStates();

                //
                // Clear linkages to other tasks.
                //
                task.BlockedTasks.Clear();
                task.BlockingTasks.Clear();

                taskService.Delete( task );

                rockContext.SaveChanges();

                EventHelper.GetHelper().PostProjectCommentsChanged( this, task.ProjectId );
            }

            mdlTaskDetail.Hide();
            BindRepeater();
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbConvertTask_Click( object sender, EventArgs e )
        {
            var queryParams = new Dictionary<string, string>
            {
                { "Id", "0" },
                { "ParentProjectId", ( (Project)ContextEntity() ).Id.ToString() },
                { "TaskId", hfTaskId.Value }
            };

            NavigateToCurrentPage( queryParams );
        }

        /// <summary>
        /// Notification handler for a project being changed. We need to reload the
        /// task list because our tasks may have been modified as well.
        /// </summary>
        /// <param name="sender">Object that is generating this event.</param>
        /// <param name="e">Arguments that describe this event.</param>
        private void ProjectTaskList_ProjectChanged( object sender, ProjectEventArgs e )
        {
            var project = ContextEntity<Project>();

            if ( pnlTaskList.Visible && e.ProjectId.HasValue && project != null && e.ProjectId == project.Id )
            {
                BindRepeater();
            }
        }

        /// <summary>
        /// Handles the Click event of the lbPaste control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbPaste_Click( object sender, EventArgs e )
        {
            tbTaskPasteContent.Text = string.Empty;
            mdlTaskPaste.Show();
        }

        /// <summary>
        /// Handles the SaveClick event of the mdlTaskPaste control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void mdlTaskPaste_SaveClick( object sender, EventArgs e )
        {
            var items = tbTaskPasteContent.Text.Split( new char[] { '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries );

            using ( var rockContext = new RockContext() )
            {
                var taskService = new TaskService( rockContext );
                var project = ContextEntity<Project>();
                int order = project.Tasks.Select( t => t.Order ).DefaultIfEmpty( -1 ).Max() + 1;

                foreach ( string item in items )
                {
                    var task = new Task()
                    {
                        ProjectId = project.Id,
                        Order = order++,
                        Name = item
                    };

                    taskService.Add( task );
                }

                rockContext.SaveChanges();
            }

            mdlTaskPaste.Hide();
            BindRepeater();
        }

        #endregion

        /// <summary>
        /// Handles the PreRender event of the sbRecurringSchedule control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void sbRecurringSchedule_PreRender( object sender, EventArgs e )
        {
            //
            // Inject some JavaScript into the cancel link so we can re-show our own dialog.
            //
            var modal = sbRecurringSchedule.ControlsOfTypeRecursive<Rock.Web.UI.Controls.ModalDialog>().FirstOrDefault();
            modal.OnCancelScript = string.Format( "$('#{0}')[0].click(); return false;", lbRecurringScheduleCancel.ClientID );
        }

        /// <summary>
        /// Handles the Click event of the lbRecurringScheduleCancel control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbRecurringScheduleCancel_Click( object sender, EventArgs e )
        {
            var modal = sbRecurringSchedule.ControlsOfTypeRecursive<Rock.Web.UI.Controls.ModalDialog>().FirstOrDefault();

            modal.Hide();
            mdlTaskDetail.Show();
        }

        /// <summary>
        /// Handles the SaveSchedule event of the sbRecurringSchedule control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void sbRecurringSchedule_SaveSchedule( object sender, EventArgs e )
        {
            UpdateScheduleHelpText();
            mdlTaskDetail.Show();
        }

        /// <summary>
        /// Handles the CheckedChanged event of the cbRecurring control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void cbRecurring_CheckedChanged( object sender, EventArgs e )
        {
            sbRecurringSchedule.Visible = cbRecurring.Checked;
            nbRecurDaysBefore.Visible = cbRecurring.Checked;
            UpdateScheduleHelpText();
        }
    }
}