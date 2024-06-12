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

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Model;
using com.blueboxmoon.ProjectManagement.Cache;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "My Tasks" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Lists tasks assigned to or the current person." )]

    #region Block Attributes

    [LinkedPage( "Project Page", "The page that allows a person to view and edit projects.", true, "", order: 0 )]
    [IntegerField( "Page Size", "The number of items to display per page.", true, 10, order: 1 )]

    [CodeEditorField( "Task Name Template",
        description: "The lava template will be used for the task Name. Access the task via the 'Row' variable.",
        mode: Rock.Web.UI.Controls.CodeEditorMode.Lava,
        defaultValue: "{{ Row.FormattedName }}",
        required: true,
        key: AttributeKeys.TaskNameTemplate,
        order: 2 )]

    [CustomCheckboxListField( "Project Types",
        Description = "The project types that will be used to filter tasks. Leave blank to include all.",
        ListSource = "SELECT [Guid] AS [Value], [Name] AS [Text] FROM [_com_blueboxmoon_ProjectManagement_ProjectType]",
        Key = AttributeKeys.ProjectTypes,
        Order = 3 )]

    #endregion

    public partial class MyTasks : RockBlock
    {
        public static class AttributeKeys
        {
            public const string TaskNameTemplate = "TaskNameTemplate";

            public const string ProjectTypes = "ProjectTypes";
        }

        #region Private Fields

        bool _canAddEditDelete = false;
        bool _showMore = false;
        int _pageSize;

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

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );

            _pageSize = GetAttributeValue( "PageSize" ).AsIntegerOrNull() ?? 10;
            _pageSize = _pageSize > 0 ? _pageSize : 10;

            _canAddEditDelete = IsUserAuthorized( Authorization.EDIT );
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
                //
                // Set the default selected view mode.
                //
                var activeButton = GetBlockUserPreference( "ActiveButton" );
                if ( activeButton == "Following" )
                {
                    liFollowing.AddCssClass( "active" );
                }
                else
                {
                    liAssigned.AddCssClass( "active" );
                }

                hfDisplayCount.Value = _pageSize.ToString();

                BindRepeater();
            }
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Bind the repeater to the list of tasks.
        /// </summary>
        private void BindRepeater()
        {
            var rockContext = new RockContext();
            var taskService = new TaskService( rockContext );
            bool assigned = liAssigned.Attributes["class"].ToStringSafe().Contains( "active" );
            bool followed = liFollowing.Attributes["class"].ToStringSafe().Contains( "active" );
            var projectTypeGuids = GetAttributeValue( AttributeKeys.ProjectTypes ).SplitDelimitedValues().AsGuidList();
            var tasks = taskService.MyTasks( CurrentPerson, assigned, followed );

            if ( projectTypeGuids.Any() )
            {
                var projectTypeIds = projectTypeGuids
                    .Select( guid => ProjectTypeCache.Get( guid ) )
                    .Where( ptc => ptc != null )
                    .Select( ptc => ptc.Id )
                    .ToList();

                tasks = tasks.Where( t => projectTypeIds.Contains( t.Project.ProjectTypeId ) ).ToList();
            }

            _showMore = tasks.Count > hfDisplayCount.ValueAsInt();
            rpTasks.DataSource = tasks.Take( hfDisplayCount.ValueAsInt() ).ToList();
            rpTasks.DataBind();
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
        /// Handles the ItemDataBound event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RepeaterItemEventArgs"/> instance containing the event data.</param>
        protected void rpTask_ItemDataBound( object sender, RepeaterItemEventArgs e )
        {
            if ( e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem )
            {
                var task = e.Item.DataItem as Task;
                var liTask = e.Item.FindControl( "liTask" ) as System.Web.UI.HtmlControls.HtmlGenericControl;
                var lbTaskToggle = e.Item.FindControl( "lbTaskToggle" ) as LinkButton;
                var iTaskState = e.Item.FindControl( "iTaskState" ) as System.Web.UI.HtmlControls.HtmlGenericControl;
                var lFollow = e.Item.FindControl( "lFollow" ) as Label;
                var lTaskName = e.Item.FindControl( "lTaskName" ) as Literal;
                var lDueDate = e.Item.FindControl( "lDueDate" ) as Literal;
                var lBlockedBy = e.Item.FindControl( "lBlockedBy" ) as Literal;
                var lDescription = e.Item.FindControl( "lDescription" ) as Literal;
                var lAssignedTo = e.Item.FindControl( "lAssignedTo" ) as Literal;
                var lTags = e.Item.FindControl( "lTags" ) as Literal;
                bool isMyTask = task.AssignedToPersonAlias != null && task.AssignedToPersonAlias.PersonId == CurrentPersonId;

                liTask.Attributes.Add( "data-key", task.Guid.ToString() );
                iTaskState.AddCssClass( task.CompletedDateTime.HasValue ? "fa-check-square-o" : "fa-square-o" );

                if ( CurrentPerson != null )
                {
                    Utility.SetFollowing( task, lFollow, CurrentPerson );
                }
                else
                {
                    lFollow.Visible = false;
                }

                var mergeFields = Rock.Lava.LavaHelper.GetCommonMergeFields( null, null, new Rock.Lava.CommonMergeFieldsOptions { GetLegacyGlobalMergeFields = false } );
                mergeFields.Add( "Row", task );
                lTaskName.Text = GetAttributeValue( AttributeKeys.TaskNameTemplate ).ResolveMergeFields( mergeFields );

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
                        if ( task.DueDate.Value.Date == RockDateTime.Now.Date )
                        {
                            liTask.AddCssClass( "pm-warning" );
                        }
                        else if ( task.DueDate.Value.Date < RockDateTime.Now.Date )
                        {
                            liTask.AddCssClass( "pm-danger" );
                        }

                        lDueDate.Text = string.Format( "<span class=\"pm-due-date\" title=\"{1}\" data-toggle=\"tooltip\" data-delay=\"200\"><i class=\"fa fa-calendar\"></i> {0}</span>",
                            Utility.RelativeDateText( task.DueDate.Value, false ),
                            task.DueDate.Value.ToLongDateString() );
                    }

                    //
                    // Set the "blocked by" icon.
                    //
                    if ( task.IsBlocked )
                    {
                        var blockingTasks = task.BlockingTasks.Where( t => !t.CompletedDateTime.HasValue && !t.CancelledDateTime.HasValue ).ToList();
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
            else if ( e.Item.ItemType == ListItemType.Footer )
            {
                e.Item.Visible = _showMore;
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
            // User wants to show one of the tasks.
            //
            if ( e.CommandName == "ShowTask" )
            {
                var queryParameters = new Dictionary<string, string>();

                queryParameters.Add( "Id", new TaskService( new RockContext() ).Get( taskId ).ProjectId.ToString() );
                NavigateToLinkedPage( "ProjectPage", queryParameters );

                return;
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
            }

            //
            // User wants to show more.
            //
            else if ( e.CommandName == "ShowMore" )
            {
                hfDisplayCount.Value = ( hfDisplayCount.ValueAsInt() + _pageSize ).ToString();
            }

            BindRepeater();
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbAssigned_Click( object sender, EventArgs e )
        {
            liAssigned.AddCssClass( "active" );
            liFollowing.RemoveCssClass( "active" );

            SetBlockUserPreference( "ActiveButton", "Assigned" );

            BindRepeater();
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbFollowing_Click( object sender, EventArgs e )
        {
            liAssigned.RemoveCssClass( "active" );
            liFollowing.AddCssClass( "active" );

            SetBlockUserPreference( "ActiveButton", "Following" );

            BindRepeater();
        }

        #endregion
    }
}