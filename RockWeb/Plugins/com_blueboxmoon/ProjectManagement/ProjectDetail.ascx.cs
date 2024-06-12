using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web.UI.WebControls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Cache;
using com.blueboxmoon.ProjectManagement.Model;

using Rock;
using Rock.Constants;
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Web;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project Detail" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Displays the details for a project." )]

    public partial class ProjectDetail : RockBlock
    {
        #region Private Fields

        private bool _canAddEditDelete = false;

        #endregion

        #region Properties

        private List<NameValueEntity> AssignedToListState { get; set; }

        private List<NameValueEntity> BlockedByListState { get; set; }

        #endregion

        #region Base Method Overrides

        /// <summary>
        /// Restores the view-state information from a previous user control request that was saved by the <see cref="M:System.Web.UI.UserControl.SaveViewState" /> method.
        /// </summary>
        /// <param name="savedState">An <see cref="T:System.Object" /> that represents the user control state to be restored.</param>
        protected override void LoadViewState( object savedState )
        {
            base.LoadViewState( savedState );

            AssignedToListState = ViewState["AssignedToList"] as List<NameValueEntity>;
            BlockedByListState = ViewState["BlockedByList"] as List<NameValueEntity>;
        }

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

            Utility.AddCommonCss( RockPage );
            RockPage.AddCSSLink( "~/Plugins/com_blueboxmoon/ProjectManagement/Styles/bootstrap-markdown-editor.css" );
            RockPage.AddScriptLink( "~/Scripts/ace/ace.js" );
            RockPage.AddScriptLink( "~/Plugins/com_blueboxmoon/ProjectManagement/Scripts/bootstrap-markdown-editor.js" );

            var rockContext = new RockContext();
            var project = new ProjectService( rockContext ).Get( PageParameter( "Id" ).AsInteger() );

            //
            // Verify that the user is allowed to make edits to the project in question.
            //
            _canAddEditDelete = IsUserAuthorized( Authorization.EDIT );
            if ( _canAddEditDelete  )
            {
                if ( project != null )
                {
                    _canAddEditDelete = project.IsAuthorized( Authorization.EDIT, CurrentPerson );
                }
                else
                {
                    var projectType = ProjectTypeCache.Get( PageParameter( "ProjectTypeId" ).AsInteger() );
                    if ( projectType != null )
                    {
                        _canAddEditDelete = projectType.IsAuthorized( Authorization.EDIT, CurrentPerson );
                    }
                    else
                    {
                        var parentProject = new ProjectService( rockContext ).Get( PageParameter( "ParentProjectId" ).AsInteger() );
                        if ( parentProject != null )
                        {
                            _canAddEditDelete = parentProject.IsAuthorized( Authorization.EDIT, CurrentPerson );
                        }
                    }
                }
            }

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );
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
                meDescription.PublicApplicationRoot = GlobalAttributesCache.Value( "PublicApplicationRoot" );

                int? parentProjectId = PageParameter( "ParentProjectId" ).AsIntegerOrNull();
                int? projectTypeId = PageParameter( "ProjectTypeId" ).AsIntegerOrNull();
                int? categoryId = PageParameter( "CategoryId" ).AsIntegerOrNull();

                if ( !parentProjectId.HasValue && PageParameter( "Id" ).AsInteger() != 0 )
                {
                    var project = GetProject( PageParameter( "Id" ).AsInteger() );

                    if ( project != null )
                    {
                        parentProjectId = project.ParentProjectId;
                    }
                }

                UpdateProjectTypesForParent( parentProjectId );

                if ( projectTypeId.HasValue )
                {
                    ddlProjectType.SetValue( projectTypeId );
                    ddlProjectType.Enabled = false;
                }

                cpCategory.SetValue( categoryId );
                cpCategory.Enabled = !categoryId.HasValue;

                if ( PageParameter( "Id" ).AsInteger() == 0 )
                {
                    ShowEdit( 0 );
                }
                else
                {
                    ShowDetail( PageParameter( "Id" ).AsInteger() );
                }
            }
            else
            {
                if ( pnlEdit.Visible )
                {
                    //
                    // Add the attribute controls.
                    //
                    var project = GetProject( PageParameter( "Id" ).AsInteger() );
                    if ( project == null )
                    {
                        project = new Project { Id = 0 };
                        project.ProjectTypeId = ddlProjectType.SelectedValue.AsInteger();
                    }

                    project.LoadAttributes();
                    phEditAttributes.Controls.Clear();
                    Rock.Attribute.Helper.AddEditControls( project, phEditAttributes, false, BlockValidationGroup );
                }
                else if ( pnlDetails.Visible )
                {
                    var project = new ProjectService( new RockContext() ).Get( PageParameter( "Id" ).AsInteger() );

                    project.LoadAttributes();
                    phAttributes.Controls.Clear();
                    Rock.Attribute.Helper.AddDisplayControls( project, phAttributes, null, false, false );
                }
            }
        }

        /// <summary>
        /// All postback events have been processed. We are about to render the page
        /// but allowed to make final changes.
        /// </summary>
        /// <param name="e">Arguments that describe this event.</param>
        protected override void OnPreRender( EventArgs e )
        {
            if ( pnlDetails.Visible )
            {
                var project = new ProjectService( new RockContext() ).Get( PageParameter( "Id" ).AsInteger() );

                if ( project != null )
                {
                    Utility.SetFollowing( project, pnlFollowing, CurrentPerson );
                    com.blueboxmoon.ProjectManagement.UI.WatchingHelper.SetWatching( project, pnlWatching, CurrentPerson );
                }
            }

            base.OnPreRender( e );
        }

        /// <summary>
        /// Saves any user control view-state changes that have occurred since the last page postback.
        /// </summary>
        /// <returns>
        /// Returns the user control's current view state. If there is no view state associated with the control, it returns null.
        /// </returns>
        protected override object SaveViewState()
        {
            ViewState["AssignedToList"] = AssignedToListState;
            ViewState["BlockedByList"] = BlockedByListState;

            return base.SaveViewState();
        }

        /// <summary>
        /// Gets the bread crumbs.
        /// </summary>
        /// <param name="pageReference">The page reference.</param>
        /// <returns></returns>
        public override List<BreadCrumb> GetBreadCrumbs( PageReference pageReference )
        {
            var breadCrumbs = new List<BreadCrumb>();
            var rockContext = new RockContext();
            int projectId = PageParameter( pageReference, "Id" ).AsInteger();
            var project = new ProjectService( rockContext ).Get( projectId );
            Project parentProject = null;
            var projectIds = new List<int>();

            if ( project != null )
            {
                projectIds.Add( project.Id );
                parentProject = project.ParentProject;
            }
            else if ( PageParameter( pageReference, "ParentProjectId" ).AsIntegerOrNull().HasValue )
            {
                parentProject = new ProjectService( rockContext ).Get( PageParameter( pageReference, "ParentProjectId" ).AsInteger() );
            }

            while ( parentProject != null )
            {
                if ( projectIds.Contains( parentProject.Id ) )
                {
                    throw new Exception( string.Format( "Detected recursive loop in project parents: {0}", string.Join( " > ", projectIds ) ) );
                }

                projectIds.Add( parentProject.Id );

                var pageRef = new PageReference( pageReference.PageId, pageReference.RouteId );
                pageRef.Parameters.Add( "Id", parentProject.Id.ToString() );

                breadCrumbs.Insert( 0, new BreadCrumb( parentProject.Name, pageRef ) );

                parentProject = parentProject.ParentProject;
            }

            if ( project != null )
            {
                breadCrumbs.Add( new BreadCrumb( project.Name, pageReference ) );
            }
            else
            {
                breadCrumbs.Add( new BreadCrumb( "New Project", pageReference ) );
            }

            return breadCrumbs;
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Gets the project.
        /// </summary>
        /// <param name="projectId">The project identifier.</param>
        /// <param name="rockContext">The rock context.</param>
        /// <returns></returns>
        private Project GetProject( int projectId, RockContext rockContext = null )
        {
            rockContext = rockContext ?? new RockContext();

            var project = new ProjectService( rockContext )
                .Queryable()
                .Where( t => t.Id == projectId )
                .FirstOrDefault();

            return project;
        }

        /// <summary>
        /// Get the current tags for the given project.
        /// </summary>
        /// <param name="guid">The project's Guid.</param>
        /// <returns>A collection of tag names</returns>
        private List<string> GetCurrentTags( Guid guid )
        {
            var tagList = new List<string>();

            using ( var rockContext = new RockContext() )
            {
                var service = new TaggedItemService( rockContext );
                var qry = service.Get(
                    EntityTypeCache.Get( "com.blueboxmoon.ProjectManagement.Model.Project" ).Id,
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

        /// <summary>
        /// Updates the project types for parent.
        /// </summary>
        /// <param name="parentProjectId">The parent project identifier.</param>
        private void UpdateProjectTypesForParent( int? parentProjectId )
        {
            var currentSelection = ddlProjectType.SelectedValue;

            ddlProjectType.Items.Clear();
            ddlProjectType.Items.Add( new ListItem() );

            //
            // Populate the list project types that are valid for this project.
            //
            if ( parentProjectId.HasValue )
            {
                new ProjectService( new RockContext() ).Queryable( "ProjectType" )
                    .Where( p => p.Id == parentProjectId.Value )
                    .SelectMany( p => p.ProjectType.ChildProjectTypes )
                    .Where( p => p.IsActive )
                    .OrderBy( p => p.Name )
                    .ToList()
                    .Where( p => p.IsAuthorized( Authorization.EDIT, CurrentPerson ) )
                    .ToList()
                    .ForEach( p => ddlProjectType.Items.Add( new ListItem( p.Name, p.Id.ToString() ) ) );
            }
            else
            {
                new ProjectTypeService( new RockContext() ).Queryable()
                    .Where( p => p.IsActive )
                    .OrderBy( p => p.Name )
                    .ToList()
                    .Where( p => p.IsAuthorized( Authorization.EDIT, CurrentPerson ) )
                    .ToList()
                    .ForEach( p => ddlProjectType.Items.Add( new ListItem( p.Name, p.Id.ToString() ) ) );
            }

            ddlProjectType.SetValue( currentSelection );

            if ( currentSelection != ddlProjectType.SelectedValue )
            {
                ddlProjectType_SelectedIndexChanged( ddlProjectType, EventArgs.Empty );
            }
        }

        /// <summary>
        /// Shows the detail.
        /// </summary>
        /// <param name="projectId">The project identifier.</param>
        public void ShowDetail( int projectId )
        {
            var rockContext = new RockContext();
            Project project = null;

            pnlDetails.Visible = true;
            pnlEdit.Visible = false;
            HideSecondaryBlocks( false );

            if ( projectId != 0 )
            {
                project = GetProject( projectId );
            }

            //
            // Ensure the user is allowed to view this project.
            //
            if ( project == null || !project.IsAuthorized( Authorization.VIEW, CurrentPerson ) )
            {
                HideSecondaryBlocks( true );
                nbUnauthorized.Text = EditModeMessage.NotAuthorizedToView( Project.FriendlyTypeName );
                pnlDetails.Visible = false;
                return;
            }

            //
            // Set all the simple field values.
            //
            lTitle.Text = project.Name;
            lIconHtml.Text = !string.IsNullOrWhiteSpace( project.ProjectType.IconCssClass ) ? string.Format( "<i class=\"{0}\"></i>", project.ProjectType.IconCssClass ) : string.Empty;
            lDetails.Text = Utility.ConvertMarkdownToHtml( project.Description );
            hlId.Text = string.Format( "#{0} - {1}", project.Id, project.ProjectType.Name );
            hlState.Text = project.State;
            hlState.LabelType = project.IsActive ? LabelType.Success : LabelType.Default;
            lRequestedBy.Text = project.RequestedByPersonAlias != null ? Utility.GetPersonDisplayHtml( project.RequestedByPersonAlias.Person, CurrentPerson, true ) : string.Empty;
            lRequestDate.Text = project.RequestDate.ToShortDateString();
            lDueDate.Text = project.DueDate.HasValue ? project.DueDate.Value.ToShortDateString() : string.Empty;

            //
            // Update the state tooltip text.
            //
            if ( !project.IsActive )
            {
                if ( project.CancelledDateTime.HasValue )
                {
                    hlState.ToolTip = string.Format( "Cancelled on {0}", project.CancelledDateTime.Value.ToShortDateString() );
                }
                else if ( project.CompletedDateTime.HasValue )
                {
                    hlState.ToolTip = string.Format( "Completed on {0}", project.CompletedDateTime.Value.ToShortDateString() );
                }
            }
            else
            {
                hlState.ToolTip = string.Empty;
            }

            //
            // Set the "blocked by" icon.
            //
            sBlocked.Visible = project.IsBlocked;
            if ( project.IsBlocked )
            {
                var blockingProjects = project.BlockingProjects.Where( t => t.IsActive ).ToList();
                var blockedBy = blockingProjects.Select( t => t.Name ).ToList();

                sBlocked.Attributes["title"] = string.Join( ", ", blockedBy ).EncodeHtml();
            }
            else
            {
                sBlocked.Attributes.Remove( "title" );
            }

            //
            // Show a link to the parent project if there is one.
            //
            lbParentProject.Text = project.ParentProject != null ? project.ParentProject.Name : string.Empty;

            //
            // Show the category if we have one.
            //
            lCategory.Text = project.Category != null ? project.Category.Name : string.Empty;

            //
            // Display a list of all people assigned to the project.
            //
            if ( project.Assignees.Any() )
            {
                lAssignedTo.Text = string.Join( "", project.Assignees.Select( a => Utility.GetPersonDisplayHtml( a.Person, CurrentPerson, true ) ).OrderBy( n => n ).ToArray() );
            }

            //
            // Display a list of all projects that are blocking this project.
            //
            if ( project.BlockingProjects.Any() )
            {
                lBlockedBy.Text = string.Join( "<br />", project.BlockingProjects.Select( a => a.Name ).OrderBy( n => n ).ToArray() );
            }
            phBlockedBy.Visible = project.BlockingProjects.Any();

            //
            // Add all the tags.
            //
            ltCurrentTags.Text = string.Empty;
            foreach ( var tag in GetCurrentTags( project.Guid ) )
            {
                ltCurrentTags.Text += string.Format( "<span class=\"label label-default\"><i class=\"fa fa-tag\"></i> {0}</span> ", tag.EncodeHtml() );
            }

            //
            // Add the attribute controls.
            //
            project.LoadAttributes();
            phAttributes.Controls.Clear();
            Rock.Attribute.Helper.AddDisplayControls( project, phAttributes, null, false, false );

            //
            // Set button states.
            //
            lbComplete.Visible = _canAddEditDelete && project.IsActive;
            lbEdit.Visible = _canAddEditDelete;
            lbDelete.Visible = _canAddEditDelete;
        }

        /// <summary>
        /// Shows the edit panel.
        /// </summary>
        /// <param name="projectId">The project identifier.</param>
        public void ShowEdit( int projectId )
        {
            var rockContext = new RockContext();
            Project project = null;

            pnlDetails.Visible = false;
            pnlEdit.Visible = true;
            HideSecondaryBlocks( true );

            if ( projectId != 0 )
            {
                project = GetProject( projectId );
                pdAuditDetails.SetEntity( project, ResolveRockUrl( "~" ) );
            }

            if ( !_canAddEditDelete )
            {
                HideSecondaryBlocks( true );
                nbUnauthorized.Text = EditModeMessage.NotAuthorizedToEdit( Project.FriendlyTypeName );
                pnlEdit.Visible = false;
                return;
            }

            if ( project == null )
            {
                Project parentProject = null;
                Task originalTask = null;

                if ( !string.IsNullOrWhiteSpace( PageParameter( "TaskId" ) ) )
                {
                    originalTask = new TaskService( rockContext ).Get( PageParameter( "TaskId" ).AsInteger() );
                    parentProject = originalTask != null ? originalTask.Project : null;
                }
                else if ( !string.IsNullOrWhiteSpace( PageParameter( "ParentProjectId" ) ) )
                {
                    parentProject = new ProjectService( rockContext ).Get( PageParameter( "ParentProjectId" ).AsInteger() );
                }

                project = new Project { Id = 0 };
                project.ProjectTypeId = ddlProjectType.SelectedValue.AsInteger();
                project.ProjectType = new ProjectTypeService( rockContext ).Get( project.ProjectTypeId );
                project.RequestDate = RockDateTime.Now;

                if ( originalTask != null )
                {
                    project.Name = originalTask.Name;
                    project.Description = originalTask.Description;
                    project.DueDate = originalTask.DueDate;
                    project.RequestDate = originalTask.CreatedDateTime ?? project.RequestDate;
                }

                project.CategoryId = cpCategory.SelectedValueAsId();

                if ( parentProject != null )
                {
                    project.ParentProject = parentProject;
                    project.ParentProjectId = parentProject.Id;
                    project.RequestedByPersonAlias = parentProject.RequestedByPersonAlias;
                    ppParentProject.Enabled = false;
                }
                else if ( CurrentPerson != null )
                {
                    project.RequestedByPersonAlias = CurrentPerson.PrimaryAlias;
                }

                // hide the panel drawer that show created and last modified dates
                pdAuditDetails.Visible = false;
            }

            string title = project.Id > 0 ?
                ActionTitle.Edit( Project.FriendlyTypeName ) :
                ActionTitle.Add( Project.FriendlyTypeName );
            lEditTitle.Text = title.FormatAsHtmlTitle();

            if ( project.ProjectType != null )
            {
                meDescription.BinaryFileTypeGuid = project.ProjectType.BinaryFileType != null ? project.ProjectType.BinaryFileType.Guid : ( Guid? ) null;
            }

            hfId.Value = project.Id.ToString();
            ddlState.Items.Clear();
            ddlState.Items.Add( new ListItem() );
            ddlState.Items.Add( "Active" );
            ddlState.Items.Add( "Completed" );
            ddlState.Items.Add( "Cancelled" );

            tbName.Text = project.Name;
            meDescription.Text = project.Description;
            dpRequestDate.SelectedDate = project.RequestDate;
            dpDueDate.SelectedDate = project.DueDate;

            if ( project.CompletedDateTime.HasValue )
            {
                ddlState.SelectedValue = "Completed";
            }
            else if ( project.CancelledDateTime.HasValue )
            {
                ddlState.SelectedValue = "Cancelled";
            }
            else
            {
                ddlState.SelectedValue = "Active";
            }

            ppRequestedBy.SetValue( project.RequestedByPersonAlias != null ? project.RequestedByPersonAlias.Person : null );

            //
            // Try to select the current project type. If that fails and there
            // is only one valid project type then pre-select that one project type.
            //
            ddlProjectType.SetValue( project.ProjectTypeId );
            if ( ddlProjectType.SelectedIndex == 0 && ddlProjectType.Items.Count == 2 )
            {
                ddlProjectType.SelectedIndex = 1;
                project.ProjectTypeId = ddlProjectType.SelectedValue.AsInteger();
            }

            ppParentProject.SetValue( project.ParentProject );

            cpCategory.SetValue( project.CategoryId );
            cpCategory.Required = project.ProjectType != null ? project.ProjectType.IsCategoryRequired : false;

            //
            // Setup the list of assigned to people.
            //
            AssignedToListState = project.Assignees
                .Select( a => new NameValueEntity( a.Id, a.Person.FullName ) )
                .OrderBy( n => n.Name )
                .ToList();
            BindAssignedToRepeater();

            //
            // Setup the list of blocking projects.
            //
            BlockedByListState = project.BlockingProjects
                .Select( p => new NameValueEntity( p.Id, p.Name ) )
                .OrderBy( n => n.Name )
                .ToList();
            BindBlockedByRepeater();

            //
            // Add the attribute controls.
            //
            project.LoadAttributes();
            phEditAttributes.Controls.Clear();
            Rock.Attribute.Helper.AddEditControls( project, phEditAttributes, true, BlockValidationGroup );

            //
            // Configure the tag control.
            //
            pnlEditTags.Visible = project.Id != 0;
            tlProjectTags.EntityTypeId = EntityTypeCache.GetId( "com.blueboxmoon.ProjectManagement.Model.Project" ).Value;
            tlProjectTags.EntityGuid = project.Guid;
            tlProjectTags.GetTagValues( CurrentPersonId );
            tlProjectTags.DelaySave = true;
        }

        #endregion

        #region Event Handlers

        /// <summary>
        /// Handles the Click event of the lbSave control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void lbSave_Click( object sender, EventArgs e )
        {
            var rockContext = new RockContext();
            Project project;
            Task originalTask = null;
            bool isNew = false;

            ProjectService projectService = new ProjectService( rockContext );

            int projectId = int.Parse( hfId.Value );

            if ( projectId == 0 )
            {
                Project parentProject = null;

                if ( !string.IsNullOrWhiteSpace( PageParameter( "TaskId" ) ) )
                {
                    originalTask = new TaskService( rockContext ).Get( PageParameter( "TaskId" ).AsInteger() );
                    if ( originalTask != null )
                    {
                        parentProject = originalTask.Project;
                        originalTask.CompletedDateTime = null;
                        originalTask.CancelledDateTime = RockDateTime.Now;
                    }
                }
                else if ( !string.IsNullOrWhiteSpace( PageParameter( "ParentProjectId" ) ) )
                {
                    parentProject = new ProjectService( rockContext ).Get( PageParameter( "ParentProjectId" ).AsInteger() );
                }

                isNew = true;
                project = new Project();
                projectService.Add( project );
                project.CreatedByPersonAliasId = CurrentPersonAliasId;
                project.CreatedDateTime = RockDateTime.Now;

                if ( parentProject != null )
                {
                    project.ParentProjectId = parentProject.Id;
                }
            }
            else
            {
                project = projectService.Get( projectId );
            }

            if ( project != null )
            {
                var completedProjectIds = new List<int>();
                bool stateChanged = false;

                project.ProjectTypeId = ddlProjectType.SelectedValue.AsInteger();
                project.ParentProjectId = ppParentProject.SelectedValue;
                project.Name = tbName.Text;
                project.Description = meDescription.Text;
                project.RequestedByPersonAliasId = ppRequestedBy.PersonAliasId;
                project.RequestDate = dpRequestDate.SelectedDate.Value;
                project.DueDate = dpDueDate.SelectedDate;
                project.ModifiedByPersonAliasId = CurrentPersonAliasId;
                project.ModifiedDateTime = RockDateTime.Now;

                project.CategoryId = cpCategory.SelectedValueAsId();

                if ( ddlState.SelectedValue == "Completed" )
                {
                    project.CancelledDateTime = null;
                    if ( !project.CompletedDateTime.HasValue )
                    {
                        var noteService = new NoteService( rockContext );

                        Action<Project> projectCompleted = ( p ) =>
                        {
                            noteService.Add( p.NoteForStateChange( CurrentPersonAliasId.Value ) );
                            completedProjectIds.Add( p.Id );
                        };

                        Action<Task> taskCompleted = ( t ) =>
                        {
                            noteService.Add( t.NoteForStateChange( CurrentPersonAliasId.Value ) );
                        };

                        project.RecursivelyMarkAsComplete( RockDateTime.Now, projectCompleted, taskCompleted );

                        stateChanged = true;
                    }
                }
                else if ( ddlState.SelectedValue == "Cancelled" )
                {
                    project.CompletedDateTime = null;
                    if ( !project.CancelledDateTime.HasValue )
                    {
                        project.CancelledDateTime = RockDateTime.Now;
                        stateChanged = true;
                    }
                }
                else
                {
                    stateChanged = project.CompletedDateTime.HasValue || project.CancelledDateTime.HasValue;
                    project.CompletedDateTime = null;
                    project.CancelledDateTime = null;
                }

                //
                // Update the list of people assigned to this project and save a list of
                // new PersonIds for notification later.
                //
                var oldAssignees = project.Assignees.Select( a => a.Id ).ToList();
                project.Assignees.Clear();
                var personAliasService = new PersonAliasService( rockContext );
                AssignedToListState.ForEach( a => project.Assignees.Add( personAliasService.Get( a.Id ) ) );

                var newAssignees = project.Assignees.Where( a => !oldAssignees.Contains( a.Id ) ).Select( a => a.Id ).ToList();

                //
                // Update the list of projects that are blocking this project.
                //
                var oldProjects = project.BlockingProjects.Select( a => a.Id ).ToList();
                project.BlockingProjects.Clear();
                BlockedByListState.ForEach( a => project.BlockingProjects.Add( projectService.Get( a.Id ) ) );

                bool isBlocked = project.BlockingProjects.Any( p => p.IsActive );
                if ( isBlocked && !project.BlockedDateTime.HasValue )
                {
                    project.BlockedDateTime = RockDateTime.Now;
                }
                else if ( !isBlocked && project.BlockedDateTime.HasValue )
                {
                    project.BlockedDateTime = null;
                }

                //
                // Store the attribute values.
                //
                project.LoadAttributes( rockContext );
                Rock.Attribute.Helper.GetEditValues( phEditAttributes, project );

                if ( !Page.IsValid )
                {
                    // Controls will render the error messages                    
                    return;
                }

                if ( !project.IsValid )
                {
                    nbErrorMessage.Text = "<ul><li>" + string.Join( "</li><li>", project.ValidationResults.Select( v => v.ErrorMessage ) ) + "</ul>";
                    return;
                }

                //
                // Update other project's blocked state.
                //
                if ( stateChanged )
                {
                    new NoteService( rockContext ).Add( project.NoteForStateChange( CurrentPersonAliasId.Value ) );
                    project.UpdateBlockedProjectStates();
                }

                //
                // Check each file they uploaded while writing this note. If it is referenced in the
                // note text then attach it to the project and mark the binary file as permanent.
                //
                var binaryFileService = new BinaryFileService( rockContext );
                foreach ( var ufId in meDescription.UploadedFileIds )
                {
                    var binaryFile = binaryFileService.Get( ufId );

                    if ( binaryFile != null && meDescription.Text.Contains( string.Format( "/GetFile.ashx?Id={0})", ufId ) ) )
                    {
                        binaryFile.IsTemporary = false;

                        var attachment = new Attachment { Id = 0 };
                        project.Attachments.Add( attachment );
                        attachment.CreatedByPersonAliasId = CurrentPersonAliasId;
                        attachment.CreatedDateTime = RockDateTime.Now;
                        attachment.BinaryFileId = binaryFile.Id;
                    }
                }

                var mentions = Utility.FindPersonMentions( project.Description );

                rockContext.WrapTransaction( () =>
                {
                    rockContext.SaveChanges();
                    project.SaveAttributeValues( rockContext );

                    if ( isNew && ppRequestedBy.PersonAliasId.HasValue )
                    {
                        Project.WatchProject( project.Id, ppRequestedBy.PersonAliasId.Value, true, rockContext, false );
                    }

                    foreach ( var assignee in newAssignees )
                    {
                        Project.WatchProject( project.Id, assignee, true, rockContext, false );
                    }

                    foreach ( var p in mentions )
                    {
                        Project.WatchProject( project.Id, p.PrimaryAliasId.Value, true, rockContext, false );
                    }

                    rockContext.SaveChanges();

                    tlProjectTags.SaveTagValues( CurrentPersonAlias );
                } );

                if ( isNew )
                {
                    //
                    // Remove anybody from the mention list that is assigned to the task so they don't get
                    // two notifications.
                    //
                    mentions = mentions.Where( p => !newAssignees.Any( a => p.Aliases.Select( b => b.Id ).Contains( a ) ) ).ToList();
                    Project.SendCommentNotification( project.Id, CurrentPersonAliasId, null, mentions );
                }

                if ( newAssignees.Any() )
                {
                    Project.SendAssignedNotification( project.Id, CurrentPersonAliasId, newAssignees );
                }

                if ( completedProjectIds.Any() )
                {
                    completedProjectIds.ForEach( id => Project.SendCompletedNotification( id, CurrentPersonAliasId.Value ) );
                }

                if ( projectId == 0 )
                {
                    NavigateToCurrentPage( new Dictionary<string, string>() { { "Id", project.Id.ToString() } } );
                }
                else
                {
                    EventHelper.GetHelper().PostProjectChanged( this, projectId );
                    EventHelper.GetHelper().PostProjectCommentsChanged( this, projectId );

                    ShowDetail( projectId );
                }
            }
        }

        /// <summary>
        /// Handles the Click event of the lbCancel control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void lbCancel_Click( object sender, EventArgs e )
        {
            if ( PageParameter( "Id" ).AsInteger() == 0 )
            {
                if ( !string.IsNullOrWhiteSpace( PageParameter( "ParentProjectId" ) ) )
                {
                    var queryParams = new Dictionary<string, string>
                    {
                        { "Id", PageParameter( "ParentProjectId" ) }
                    };

                    NavigateToCurrentPage( queryParams );
                }
                else
                {
                    NavigateToParentPage();
                }
            }
            else
            {
                ShowDetail( PageParameter( "Id" ).AsInteger() );
            }
        }

        /// <summary>
        /// Handles the BlockUpdated event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_BlockUpdated( object sender, EventArgs e )
        {
            int projectId = hfId.ValueAsInt();

            if ( projectId != 0 )
            {
                ShowDetail( projectId );
            }
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbEdit_Click( object sender, EventArgs e )
        {
            ShowEdit( PageParameter( "Id" ).AsInteger() );
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbDelete_Click( object sender, EventArgs e )
        {
            var rockContext = new RockContext();
            var projectService = new ProjectService( rockContext );
            var project = projectService.Get( PageParameter( "Id" ).AsInteger() );

            if ( project != null )
            {
                if ( !project.IsAuthorized( Authorization.EDIT, CurrentPerson ) )
                {
                    mdDeleteWarning.Show( "You are not authorized to delete this project.", ModalAlertType.Information );
                    return;
                }

                string errorMessage;
                if ( !projectService.DeleteProjectRecursive( project, out errorMessage ) )
                {
                    mdDeleteWarning.Show( errorMessage, ModalAlertType.Information );
                    return;
                }

                rockContext.SaveChanges();

                NavigateToParentPage();
            }
            else
            {
                ShowDetail( PageParameter( "Id" ).AsInteger() );
            }
        }

        /// <summary>
        /// Handles the SelectedIndexChanged event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void ddlProjectType_SelectedIndexChanged( object sender, EventArgs e )
        {
            var project = new Project
            {
                Id = PageParameter( "Id" ).AsInteger(),
                ProjectTypeId = ddlProjectType.SelectedValueAsId() ?? 0
            };

            meDescription.BinaryFileTypeGuid = null;
            cpCategory.Required = false;
            if ( project.ProjectTypeId != 0 )
            {
                var projectType = ProjectTypeCache.Get( project.ProjectTypeId );

                if ( projectType != null && projectType.BinaryFileTypeId.HasValue )
                {
                    var binaryFileType = new BinaryFileTypeService( new RockContext() ).Get( projectType.BinaryFileTypeId.Value );

                    meDescription.BinaryFileTypeGuid = binaryFileType.Guid;
                }

                cpCategory.Required = projectType != null && projectType.IsCategoryRequired;
            }

            //
            // Add the attribute controls.
            //
            project.LoadAttributes();
            phEditAttributes.Controls.Clear();
            Rock.Attribute.Helper.AddEditControls( project, phEditAttributes, true, BlockValidationGroup );
        }

        /// <summary>
        /// Handles the SelectItem event of the ppParentProject control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void ppParentProject_SelectItem( object sender, EventArgs e )
        {
            int? parentProjectId = ppParentProject.SelectedValue;

            UpdateProjectTypesForParent( parentProjectId );
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbParentProject_Click( object sender, EventArgs e )
        {
            NavigateToCurrentPage( new Dictionary<string, string>() { { "Id", GetProject( PageParameter( "Id" ).AsInteger() ).ParentProjectId.ToString() } } );
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbComplete_Click( object sender, EventArgs e )
        {
            var rockContext = new RockContext();
            int projectId = PageParameter( "Id" ).AsInteger();
            var project = GetProject( projectId, rockContext );

            if ( project.HasActiveDescendants() )
            {
                mdlConfirmComplete.Show();
            }
            else
            {
                project.CompletedDateTime = RockDateTime.Now;
                project.UpdateBlockedProjectStates();
                new NoteService( rockContext ).Add( project.NoteForStateChange( CurrentPersonAliasId.Value ) );

                rockContext.SaveChanges();

                EventHelper.GetHelper().PostProjectChanged( this, projectId );
                EventHelper.GetHelper().PostProjectCommentsChanged( this, projectId );

                Project.SendCompletedNotification( project.Id, CurrentPersonAliasId );
            }


            ShowDetail( projectId );
        }

        /// <summary>
        /// Handles the SaveClick event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void mdlConfirmComplete_SaveClick( object sender, EventArgs e )
        {
            var rockContext = new RockContext();
            var noteService = new NoteService( rockContext );
            int projectId = PageParameter( "Id" ).AsInteger();
            var project = GetProject( projectId, rockContext );
            var completedProjectIds = new List<int>();

            Action<Project> projectCompleted = ( p ) =>
            {
                noteService.Add( p.NoteForStateChange( CurrentPersonAliasId.Value ) );
                completedProjectIds.Add( p.Id );
            };

            Action<Task> taskCompleted = ( t ) =>
            {
                noteService.Add( t.NoteForStateChange( CurrentPersonAliasId.Value ) );
            };

            project.RecursivelyMarkAsComplete( RockDateTime.Now, projectCompleted, taskCompleted );

            rockContext.SaveChanges();

            EventHelper.GetHelper().PostProjectChanged( this, projectId );
            EventHelper.GetHelper().PostProjectCommentsChanged( this, projectId );

            completedProjectIds.ForEach( id => Project.SendCompletedNotification( id, CurrentPersonAliasId ) );

            mdlConfirmComplete.Hide();
            ShowDetail( projectId );
        }

        #endregion

        #region Assigned To and Blocked By Repeaters

        /// <summary>
        /// Handles the ItemCommand event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void rpAssignedTo_ItemCommand( object source, RepeaterCommandEventArgs e )
        {
            int personId = e.CommandArgument.ToString().AsInteger();

            if ( e.CommandName == "Delete" )
            {
                var nve = AssignedToListState.Where( a => a.Id == personId ).FirstOrDefault();

                if ( nve != null )
                {
                    AssignedToListState.Remove( nve );
                    BindAssignedToRepeater();
                }
            }
        }

        /// <summary>
        /// Handles the SelectPerson event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void ppAssignTo_SelectPerson( object sender, EventArgs e )
        {
            if ( ppAssignTo.PersonAliasId.HasValue && !AssignedToListState.Where( a => a.Id == ppAssignTo.PersonAliasId.Value ).Any() )
            {
                AssignedToListState.Add( new NameValueEntity( ppAssignTo.PersonAliasId.Value, ppAssignTo.PersonName ) );
            }

            ppAssignTo.SetValue( null );
            BindAssignedToRepeater();
        }

        /// <summary>
        /// Binds the assigned to repeater.
        /// </summary>
        private void BindAssignedToRepeater()
        {
            rpAssignedTo.DataSource = AssignedToListState;
            rpAssignedTo.DataBind();
        }

        /// <summary>
        /// Handles the ItemCommand event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void rpBlockedBy_ItemCommand( object source, RepeaterCommandEventArgs e )
        {
            int projectId = e.CommandArgument.ToString().AsInteger();

            if ( e.CommandName == "Delete" )
            {
                var nve = BlockedByListState.Where( a => a.Id == projectId ).FirstOrDefault();

                if ( nve != null )
                {
                    BlockedByListState.Remove( nve );
                    BindBlockedByRepeater();
                }
            }
        }

        /// <summary>
        /// Handles the SelectedIndexChanged event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void ppBlockedBy_SelectItem( object sender, EventArgs e )
        {
            if ( ppBlockedBy.SelectedValue.HasValue )
            {
                var project = new ProjectService( new RockContext() ).Get( ppBlockedBy.SelectedValue.Value );
                var currentId = PageParameter( "Id" ).AsInteger();

                if ( project != null && !BlockedByListState.Any( b => b.Id == project.Id ) && currentId != project.Id )
                {
                    BlockedByListState.Add( new NameValueEntity( project.Id, project.Name ) );
                }
            }

            ppBlockedBy.SetValue( null );
            BindBlockedByRepeater();
        }

        /// <summary>
        /// Binds the assigned to repeater.
        /// </summary>
        private void BindBlockedByRepeater()
        {
            rpBlockedBy.DataSource = BlockedByListState;
            rpBlockedBy.DataBind();
        }

        #endregion

        #region Private Classes

        [Serializable]
        private class NameValueEntity
        {
            public int Id { get; set; }

            public string Name { get; set; }

            public NameValueEntity( int id, string name )
            {
                Id = id;
                Name = name;
            }
        }

        #endregion
    }
}