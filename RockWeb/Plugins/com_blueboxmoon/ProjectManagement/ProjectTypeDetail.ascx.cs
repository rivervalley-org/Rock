using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web.UI.WebControls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Cache;
using com.blueboxmoon.ProjectManagement.Model;

using Newtonsoft.Json;

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
    [DisplayName( "Project Type Detail" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Displays the details for a project type." )]

    public partial class ProjectTypeDetail : RockBlock
    {
        #region Properties

        /// <summary>
        /// Gets or sets the state of the project attributes.
        /// </summary>
        private List<Rock.Model.Attribute> ProjectAttributesState { get; set; }

        /// <summary>
        /// Gets or sets the state of the list of attributes that will be on the entry form.
        /// </summary>
        private List<string> ProjectFormAttributesState { get; set; }

        /// <summary>
        /// The list of child project types that are currently defined for this project type.
        /// </summary>
        private List<int> ChildProjectTypesList { get; set; }

        /// <summary>
        /// Gets or sets the state of the add to project board.
        /// </summary>
        /// <value>
        /// The state of the add to project board.
        /// </value>
        private List<BoardTargetState> AddToProjectBoardState { get; set; }

        /// <summary>
        /// Gets or sets the state of the add to task board.
        /// </summary>
        /// <value>
        /// The state of the add to task board.
        /// </value>
        private List<BoardTargetState> AddToTaskBoardState { get; set; }

        #endregion

        #region Base Method Overrides

        /// <summary>
        /// Restores the view-state information from a previous user control request that was saved by the <see cref="M:System.Web.UI.UserControl.SaveViewState" /> method.
        /// </summary>
        /// <param name="savedState">An <see cref="T:System.Object" /> that represents the user control state to be restored.</param>
        protected override void LoadViewState( object savedState )
        {
            base.LoadViewState( savedState );

            ChildProjectTypesList = ViewState["ChildProjectTypeList"] as List<int> ?? new List<int>();
            ProjectFormAttributesState = ViewState["ProjectformAttributesState"] as List<string> ?? new List<string>();
            AddToProjectBoardState = ViewState["AddToProjectBoardState"] as List<BoardTargetState> ?? new List<BoardTargetState>();
            AddToTaskBoardState = ViewState["AddToTaskBoardState"] as List<BoardTargetState> ?? new List<BoardTargetState>();

            string json = ViewState["ProjectAttributesState"] as string;
            if ( string.IsNullOrWhiteSpace( json ) )
            {
                ProjectAttributesState = new List<Rock.Model.Attribute>();
            }
            else
            {
                ProjectAttributesState = JsonConvert.DeserializeObject<List<Rock.Model.Attribute>>( json );
            }
        }

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

            Utility.AddCommonCss( RockPage );

            gProjectAttributes.DataKeyNames = new string[] { "Guid" };
            gProjectAttributes.Actions.ShowAdd = true;
            gProjectAttributes.Actions.AddClick += gProjectAttributes_Add;
            gProjectAttributes.GridRebind += gProjectAttributes_GridRebind;
            gProjectAttributes.EmptyDataText = Server.HtmlEncode( None.Text );
            gProjectAttributes.GridReorder += gProjectAttributes_GridReorder;

            gChildProjectTypes.DataKeyNames = new string[] { "Id" };
            gChildProjectTypes.Actions.ShowAdd = true;
            gChildProjectTypes.Actions.AddClick += gChildProjectTypes_Add;
            gChildProjectTypes.HideDeleteButtonForIsSystem = false;
            gChildProjectTypes.GridRebind += gChildProjectTypes_GridRebind;
            gChildProjectTypes.EmptyDataText = Server.HtmlEncode( None.Text );

            gAddProjectsToBoard.DataKeyNames = new string[] { "Id" };
            gAddProjectsToBoard.Actions.ShowAdd = true;
            gAddProjectsToBoard.Actions.AddClick += gAddProjectsToBoard_Add;
            gAddProjectsToBoard.HideDeleteButtonForIsSystem = false;
            gAddProjectsToBoard.GridRebind += gAddProjectsToBoard_GridRebind;
            gAddProjectsToBoard.EmptyDataText = Server.HtmlEncode( None.Text );

            gAddTasksToBoard.DataKeyNames = new string[] { "Id" };
            gAddTasksToBoard.Actions.ShowAdd = true;
            gAddTasksToBoard.Actions.AddClick += gAddTasksToBoard_Add;
            gAddTasksToBoard.HideDeleteButtonForIsSystem = false;
            gAddTasksToBoard.GridRebind += gAddTasksToBoard_GridRebind;
            gAddTasksToBoard.EmptyDataText = Server.HtmlEncode( None.Text );

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
                ShowDetail( PageParameter( "ProjectTypeId" ).AsInteger() );
            }
            else
            {
                UpdateFormAttributesState();
                ShowDialog();
            }
        }

        /// <summary>
        /// Saves any user control view-state changes that have occurred since the last page postback.
        /// </summary>
        /// <returns>
        /// Returns the user control's current view state. If there is no view state associated with the control, it returns null.
        /// </returns>
        protected override object SaveViewState()
        {
            var jsonSetting = new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                ContractResolver = new Rock.Utility.IgnoreUrlEncodedKeyContractResolver()
            };

            ViewState["ProjectAttributesState"] = JsonConvert.SerializeObject( ProjectAttributesState, Formatting.None, jsonSetting );
            ViewState["ProjectFormAttributesState"] = ProjectFormAttributesState;
            ViewState["ChildProjectTypeList"] = ChildProjectTypesList;
            ViewState["AddToProjectBoardState"] = AddToProjectBoardState;
            ViewState["AddToTaskBoardState"] = AddToTaskBoardState;

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

            int? projectTypeId = PageParameter( pageReference, "ProjectTypeId" ).AsIntegerOrNull();
            if ( projectTypeId != null )
            {
                var projectType = new ProjectTypeService( new RockContext() ).Get( projectTypeId.Value );
                if ( projectType != null )
                {
                    breadCrumbs.Add( new BreadCrumb( projectType.Name, pageReference ) );
                }
                else
                {
                    breadCrumbs.Add( new BreadCrumb( "New Project Type", pageReference ) );
                }
            }
            else
            {
                // don't show a breadcrumb if we don't have a pageparam to work with
            }

            return breadCrumbs;
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Gets the project type.
        /// </summary>
        /// <param name="projectTypeId">The project type identifier.</param>
        /// <param name="rockContext">The rock context.</param>
        /// <returns></returns>
        private ProjectType GetProjectType( int projectTypeId, RockContext rockContext = null )
        {
            rockContext = rockContext ?? new RockContext();

            var projectType = new ProjectTypeService( rockContext )
                .Queryable()
                .Where( t => t.Id == projectTypeId )
                .FirstOrDefault();

            return projectType;
        }

        /// <summary>
        /// Shows the detail.
        /// </summary>
        /// <param name="projectTypeId">The project type identifier.</param>
        public void ShowDetail( int projectTypeId )
        {
            var rockContext = new RockContext();
            ProjectType projectType = null;

            if ( projectTypeId != 0 )
            {
                projectType = GetProjectType( projectTypeId );
                pdAuditDetails.SetEntity( projectType, ResolveRockUrl( "~" ) );
            }
            if ( projectType == null )
            {
                var binaryFileTypeService = new BinaryFileTypeService( rockContext );
                var systemCommunicationService = new SystemCommunicationService( rockContext );

                projectType = new ProjectType { Id = 0 };
                projectType.IsActive = true;
                projectType.BinaryFileTypeId = binaryFileTypeService.Get( com.blueboxmoon.ProjectManagement.SystemGuid.BinaryFileType.PROJECT_ATTACHMENT.AsGuid() ).Id;
                projectType.TaskAssignedCommunicationId = systemCommunicationService.Get( com.blueboxmoon.ProjectManagement.SystemGuid.SystemCommunication.TASK_ASSIGNED.AsGuid() ).Id;
                projectType.ProjectCommentCommunicationId = systemCommunicationService.Get( com.blueboxmoon.ProjectManagement.SystemGuid.SystemCommunication.PROJECT_COMMENT.AsGuid() ).Id;
                projectType.ProjectAssignedCommunicationId = systemCommunicationService.Get( com.blueboxmoon.ProjectManagement.SystemGuid.SystemCommunication.PROJECT_ASSIGNED.AsGuid() ).Id;
                projectType.ProjectCompletedCommunicationId = systemCommunicationService.Get( com.blueboxmoon.ProjectManagement.SystemGuid.SystemCommunication.PROJECT_COMPLETED.AsGuid() ).Id;

                // hide the panel drawer that show created and last modified dates
                pdAuditDetails.Visible = false;
            }

            //
            // Switch everything to read-only if user not allowed to administrate.
            //
            if ( !projectType.IsAuthorized( Authorization.ADMINISTRATE, CurrentPerson ) || !IsUserAuthorized( Authorization.EDIT ) )
            {
                tbName.Enabled = false;
                cbActive.Enabled = false;
                tbIconCssClass.Enabled = false;
                cbIsCategoryRequired.Enabled = false;
                tbDescription.Enabled = false;

                gChildProjectTypes.IsDeleteEnabled = false;
                gChildProjectTypes.Actions.ShowAdd = false;

                pAttachmentFileType.Enabled = false;

                ddlTaskAssignedCommunication.Enabled = false;
                ddlProjectCommentCommunication.Enabled = false;
                ddlProjectAssignedCommunication.Enabled = false;
                ddlProjectCompletedCommunication.Enabled = false;
                cbSaveCommunicationHistory.Enabled = false;

                gProjectAttributes.IsDeleteEnabled = false;
                gProjectAttributes.Actions.ShowAdd = false;

                nbEditModeMessage.Text = EditModeMessage.NotAuthorizedToEdit( ProjectType.FriendlyTypeName );
            }
            else if ( projectType.IsSystem )
            {
                tbName.Enabled = false;
                tbDescription.Enabled = false;

                nbEditModeMessage.Text = EditModeMessage.System( ProjectType.FriendlyTypeName );
            }

            string title = projectType.Id > 0 ?
                ActionTitle.Edit( ProjectType.FriendlyTypeName ) :
                ActionTitle.Add( ProjectType.FriendlyTypeName );
            lTitle.Text = title.FormatAsHtmlTitle();

            hfId.Value = projectType.Id.ToString();

            tbName.Text = projectType.Name;
            tbDescription.Text = projectType.Description;
            cbActive.Checked = projectType.IsActive;
            tbIconCssClass.Text = projectType.IconCssClass;
            cbIsCategoryRequired.Checked = projectType.IsCategoryRequired;
            pAttachmentFileType.SetValue( projectType.BinaryFileTypeId );

            ChildProjectTypesList = new List<int>();
            projectType.ChildProjectTypes.ToList().ForEach( a => ChildProjectTypesList.Add( a.Id ) );
            BindChildProjectTypesGrid();

            var config = projectType.ProjectBoardConfigurationJson
                .FromJsonOrNull<ProjectType.ProjectBoardConfiguration>();

            if ( config != null )
            {
                var boardService = new ProjectBoardService( rockContext );
                var projectBoardIds = config.Projects != null ? config.Projects.Select( t => t.BoardId ).ToList() : new List<int>();
                var taskBoardIds = config.Tasks != null ? config.Tasks.Select( t => t.BoardId ).ToList() : new List<int>();

                AddToProjectBoardState = boardService.Queryable()
                    .Where( b => projectBoardIds.Contains( b.Id ) )
                    .Select( b => new BoardTargetState
                    {
                        Id = b.Id,
                        Name = b.Name
                    } )
                    .ToList();

                AddToTaskBoardState = boardService.Queryable()
                    .Where( b => taskBoardIds.Contains( b.Id ) )
                    .Select( b => new BoardTargetState
                    {
                        Id = b.Id,
                        Name = b.Name
                    } )
                    .ToList();
            }
            else
            {
                AddToProjectBoardState = new List<BoardTargetState>();
                AddToTaskBoardState = new List<BoardTargetState>();
            }

            BindAddProjectsToBoardGrid();
            BindAddTasksToBoardGrid();

            //
            // Setup the email drop down lists.
            //
            PopulateSystemEmailDropDowns( rockContext );
            ddlTaskAssignedCommunication.SetValue( projectType.TaskAssignedCommunicationId );
            ddlProjectAssignedCommunication.SetValue( projectType.ProjectAssignedCommunicationId );
            ddlProjectCommentCommunication.SetValue( projectType.ProjectCommentCommunicationId );
            ddlProjectCompletedCommunication.SetValue( projectType.ProjectCompletedCommunicationId );
            cbSaveCommunicationHistory.Checked = projectType.SaveCommunicationHistory;

            //
            // Setup the formatted name templates.
            //
            ceFormattedProjectNameTemplate.Text = projectType.FormattedProjectNameTemplate;
            ceFormattedTaskNameTemplate.Text = projectType.FormattedTaskNameTemplate;

            //
            // Load attribute data
            //
            ProjectAttributesState = new List<Rock.Model.Attribute>();
            ProjectFormAttributesState = !string.IsNullOrWhiteSpace( projectType.FormAttributes ) ? projectType.FormAttributes.Split( ',' ).ToList() : new List<string>();
            AttributeService attributeService = new AttributeService( new RockContext() );
            string qualifierValue = projectType.Id.ToString();

            attributeService.GetByEntityTypeId( new Project().TypeId ).AsQueryable()
                .Where( a =>
                    a.EntityTypeQualifierColumn.Equals( "ProjectTypeId", StringComparison.OrdinalIgnoreCase ) &&
                    a.EntityTypeQualifierValue.Equals( qualifierValue ) )
                .ToList()
                .ForEach( a => ProjectAttributesState.Add( a ) );
            BindProjectAttributesGrid();
        }

        /// <summary>
        /// Saves the attributes.
        /// </summary>
        /// <param name="projectTypeId">The project type identifier.</param>
        /// <param name="entityTypeId">The entity type identifier.</param>
        /// <param name="attributes">The attributes.</param>
        /// <param name="rockContext">The rock context.</param>
        private void SaveAttributes( int projectTypeId, int entityTypeId, List<Rock.Model.Attribute> attributes, RockContext rockContext )
        {
            string qualifierColumn = "ProjectTypeId";
            string qualifierValue = projectTypeId.ToString();

            AttributeService attributeService = new AttributeService( rockContext );

            // Get the existing attributes for this entity type and qualifier value
            var existingAttributes = attributeService.Get( entityTypeId, qualifierColumn, qualifierValue );

            // Delete any of those attributes that were removed in the UI
            var selectedAttributeGuids = attributes.Select( a => a.Guid );
            foreach ( var attr in existingAttributes.Where( a => !selectedAttributeGuids.Contains( a.Guid ) ) )
            {
                Rock.Web.Cache.AttributeCache.Remove( attr.Id );
                attributeService.Delete( attr );
            }

            rockContext.SaveChanges();

            // Update the Attributes that were assigned in the UI
            foreach ( var attr in attributes )
            {
                Rock.Attribute.Helper.SaveAttributeEdits( attr, entityTypeId, qualifierColumn, qualifierValue, rockContext );
            }

            EntityTypeAttributesCache.Clear();
        }

        /// <summary>
        /// Shows the dialog.
        /// </summary>
        /// <param name="dialog">The dialog.</param>
        /// <param name="setValues">if set to <c>true</c> [set values].</param>
        private void ShowDialog( string dialog, bool setValues = false )
        {
            hfActiveDialog.Value = dialog.ToUpper().Trim();
            ShowDialog( setValues );
        }

        /// <summary>
        /// Shows the dialog.
        /// </summary>
        /// <param name="setValues">if set to <c>true</c> [set values].</param>
        private void ShowDialog( bool setValues = false )
        {
            switch ( hfActiveDialog.Value )
            {
                case "CHILDPROJECTTYPES":
                    {
                        dlgChildProjectType.Show();
                        break;
                    }

                case "PROJECTATTRIBUTES":
                    {
                        dlgProjectAttributes.Show();
                        break;
                    }

                case "ADDPROJECTSTOBOARD":
                    {
                        dlgAddProjectsToBoard.Show();
                        break;
                    }

                case "ADDTASKSTOBOARD":
                    {
                        dlgAddTasksToBoard.Show();
                        break;
                    }
            }
        }

        /// <summary>
        /// Hides the dialog.
        /// </summary>
        private void HideDialog()
        {
            switch ( hfActiveDialog.Value )
            {
                case "CHILDPROJECTTYPES":
                    {
                        dlgChildProjectType.Hide();
                        break;
                    }

                case "PROJECTATTRIBUTES":
                    {
                        dlgProjectAttributes.Hide();
                        break;
                    }

                case "ADDPROJECTSTOBOARD":
                    {
                        dlgAddProjectsToBoard.Hide();
                        break;
                    }

                case "ADDTASKSTOBOARD":
                    {
                        dlgAddTasksToBoard.Hide();
                        break;
                    }
            }

            hfActiveDialog.Value = string.Empty;
        }

        /// <summary>
        /// Populate all the system e-mail drop downs with the list of possible items.
        /// </summary>
        /// <param name="rockContext">The context to read the system e-mails from.</param>
        private void PopulateSystemEmailDropDowns( RockContext rockContext )
        {
            var systemCommunications = new SystemCommunicationService( rockContext ).Queryable()
                .Where( e => e.Category != null )
                .OrderBy( e => e.Category.Name )
                .ThenBy( e => e.Title );

            ddlTaskAssignedCommunication.Items.Clear();
            ddlProjectAssignedCommunication.Items.Clear();
            ddlProjectCommentCommunication.Items.Clear();
            ddlProjectCompletedCommunication.Items.Clear();
            ddlTaskAssignedCommunication.Items.Add( new ListItem() );
            ddlProjectAssignedCommunication.Items.Add( new ListItem() );
            ddlProjectCommentCommunication.Items.Add( new ListItem() );
            ddlProjectCompletedCommunication.Items.Add( new ListItem() );
            systemCommunications.ToList().ForEach( e =>
            {
                ddlTaskAssignedCommunication.Items.Add( new ListItem( string.Format( "{0} > {1}", e.Category.Name, e.Title ), e.Id.ToString() ) );
                ddlProjectAssignedCommunication.Items.Add( new ListItem( string.Format( "{0} > {1}", e.Category.Name, e.Title ), e.Id.ToString() ) );
                ddlProjectCommentCommunication.Items.Add( new ListItem( string.Format( "{0} > {1}", e.Category.Name, e.Title ), e.Id.ToString() ) );
                ddlProjectCompletedCommunication.Items.Add( new ListItem( string.Format( "{0} > {1}", e.Category.Name, e.Title ), e.Id.ToString() ) );
            } );
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
            ProjectType projectType;

            ProjectTypeService projectTypeService = new ProjectTypeService( rockContext );

            int projectTypeId = int.Parse( hfId.Value );

            if ( projectTypeId == 0 )
            {
                projectType = new ProjectType();
                projectTypeService.Add( projectType );
                projectType.CreatedByPersonAliasId = CurrentPersonAliasId;
                projectType.CreatedDateTime = RockDateTime.Now;
            }
            else
            {
                projectType = projectTypeService.Get( projectTypeId );
                projectType.ModifiedByPersonAliasId = CurrentPersonAliasId;
                projectType.ModifiedDateTime = RockDateTime.Now;
            }

            if ( projectType != null )
            {
                projectType.Name = tbName.Text;
                projectType.Description = tbDescription.Text;
                projectType.IsActive = cbActive.Checked;
                projectType.IconCssClass = tbIconCssClass.Text;
                projectType.IsCategoryRequired = cbIsCategoryRequired.Checked;
                projectType.BinaryFileTypeId = pAttachmentFileType.SelectedValueAsId();

                projectType.ChildProjectTypes = new List<ProjectType>();
                projectType.ChildProjectTypes.Clear();
                foreach ( var item in ChildProjectTypesList )
                {
                    var childProjectType = projectTypeService.Get( item );
                    if ( childProjectType != null )
                    {
                        projectType.ChildProjectTypes.Add( childProjectType );
                    }
                }

                projectType.TaskAssignedCommunicationId = ddlTaskAssignedCommunication.SelectedValueAsId();
                projectType.ProjectAssignedCommunicationId = ddlProjectAssignedCommunication.SelectedValueAsId();
                projectType.ProjectCommentCommunicationId = ddlProjectCommentCommunication.SelectedValueAsId();
                projectType.ProjectCompletedCommunicationId = ddlProjectCompletedCommunication.SelectedValueAsId();
                projectType.SaveCommunicationHistory = cbSaveCommunicationHistory.Checked;

                projectType.FormattedProjectNameTemplate = ceFormattedProjectNameTemplate.Text;
                projectType.FormattedTaskNameTemplate = ceFormattedTaskNameTemplate.Text;

                projectType.FormAttributes = string.Join( ",", ProjectFormAttributesState );

                var config = projectType.ProjectBoardConfigurationJson.FromJsonOrNull<ProjectType.ProjectBoardConfiguration>() ?? new ProjectType.ProjectBoardConfiguration();

                config.Projects = AddToProjectBoardState
                    .Select( s => new ProjectType.ProjectBoardTarget
                    {
                        BoardId = s.Id
                    } )
                    .ToList();

                config.Tasks = AddToTaskBoardState
                    .Select( s => new ProjectType.ProjectBoardTarget
                    {
                        BoardId = s.Id
                    } )
                    .ToList();

                projectType.ProjectBoardConfigurationJson = config.ToJson();

                if ( !Page.IsValid || !projectType.IsValid )
                {
                    // Controls will render the error messages                    
                    return;
                }

                rockContext.WrapTransaction( () =>
                {
                    rockContext.SaveChanges();

                    // get it back to make sure we have a good Id for it for the Attributes
                    projectType = projectTypeService.Get( projectType.Guid );

                    // Save the Project Attributes
                    int entityTypeId = EntityTypeCache.Get( typeof( Project ) ).Id;
                    SaveAttributes( projectType.Id, entityTypeId, ProjectAttributesState, rockContext );
                } );

                ProjectTypeCache.Clear();
                EntityTypeAttributesCache.Clear();

                NavigateToParentPage();
            }

        }

        /// <summary>
        /// Handles the Click event of the lbCancel control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void lbCancel_Click( object sender, EventArgs e )
        {
            NavigateToParentPage();
        }

        /// <summary>
        /// Handles the BlockUpdated event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_BlockUpdated( object sender, EventArgs e )
        {
            int projectTypeId = hfId.ValueAsInt();

            if ( projectTypeId != 0 )
            {
                ShowDetail( projectTypeId );
            }
        }

        #endregion

        #region Child ProjectType Grid and Picker

        /// <summary>
        /// Handles the Delete event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs" /> instance containing the event data.</param>
        protected void gChildProjectTypes_Delete( object sender, RowEventArgs e )
        {
            int childProjectTypeId = e.RowKeyId;
            ChildProjectTypesList.Remove( childProjectTypeId );
            BindChildProjectTypesGrid();
        }

        /// <summary>
        /// Handles the GridRebind event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="GridRebindEventArgs" /> instance containing the event data.</param>
        private void gChildProjectTypes_GridRebind( object sender, GridRebindEventArgs e )
        {
            BindChildProjectTypesGrid();
        }

        /// <summary>
        /// Handles the Add event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        private void gChildProjectTypes_Add( object sender, EventArgs e )
        {
            // populate dropdown with all grouptypes that aren't already childgroups
            var projectTypeList = new ProjectTypeService( new RockContext() )
                .Queryable()
                .Where( t => !ChildProjectTypesList.Contains( t.Id ) )
                .OrderBy( t => t.Name )
                .ToList();

            if ( projectTypeList.Count == 0 )
            {
                modalAlert.Show( "There are not any other project types that can be added", ModalAlertType.Warning );
            }
            else
            {
                ddlChildProjectType.DataSource = projectTypeList;
                ddlChildProjectType.DataBind();
                ShowDialog( "ChildProjectTypes" );
            }
        }

        /// <summary>
        /// Binds the child project types grid.
        /// </summary>
        private void BindChildProjectTypesGrid()
        {
            var projectTypeList = new ProjectTypeService( new RockContext() )
                .Queryable()
                .Where( t => ChildProjectTypesList.Contains( t.Id ) )
                .OrderBy( t => t.Name )
                .ToList();

            gChildProjectTypes.DataSource = projectTypeList;
            gChildProjectTypes.DataBind();
        }

        /// <summary>
        /// Handles the SaveClick event of the dlgChildProjectType control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void dlgChildProjectType_SaveClick( object sender, EventArgs e )
        {
            ChildProjectTypesList.Add( ddlChildProjectType.SelectedValueAsId() ?? 0 );
            BindChildProjectTypesGrid();
            HideDialog();
        }

        #endregion

        #region Add Projects to Board Grid

        /// <summary>
        /// Handles the Delete event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs" /> instance containing the event data.</param>
        protected void gAddProjectsToBoard_Delete( object sender, RowEventArgs e )
        {
            AddToProjectBoardState.RemoveAt( e.RowIndex );
            BindAddProjectsToBoardGrid();
        }

        /// <summary>
        /// Handles the GridRebind event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="GridRebindEventArgs" /> instance containing the event data.</param>
        private void gAddProjectsToBoard_GridRebind( object sender, GridRebindEventArgs e )
        {
            BindAddProjectsToBoardGrid();
        }

        /// <summary>
        /// Handles the Add event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        private void gAddProjectsToBoard_Add( object sender, EventArgs e )
        {
            var existingBoardIds = AddToProjectBoardState
                .Select( s => s.Id )
                .ToList();

            // populate dropdown with all boards that aren't already listed
            var boardList = new ProjectBoardService( new RockContext() )
                .Queryable()
                .Where( b => !existingBoardIds.Contains( b.Id ) )
                .OrderBy( b => b.Name )
                .ToList();

            if ( boardList.Count == 0 )
            {
                modalAlert.Show( "There are not any other boards that can be added", ModalAlertType.Warning );
            }
            else
            {
                ddlAddProjectsToBoard.DataSource = boardList;
                ddlAddProjectsToBoard.DataBind();
                ShowDialog( "AddProjectsToBoard" );
            }
        }

        /// <summary>
        /// Binds the add projects to board grid.
        /// </summary>
        private void BindAddProjectsToBoardGrid()
        {
            gAddProjectsToBoard.DataSource = AddToProjectBoardState;
            gAddProjectsToBoard.DataBind();
        }

        /// <summary>
        /// Handles the SaveClick event of the dlgChildProjectType control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void dlgAddProjectsToBoard_SaveClick( object sender, EventArgs e )
        {
            using ( var rockContext = new RockContext() )
            {
                var boardId = ddlAddProjectsToBoard.SelectedValueAsId() ?? 0;
                var board = new ProjectBoardService( rockContext ).Get( boardId );

                if ( board != null )
                {
                    AddToProjectBoardState.Add( new BoardTargetState
                    {
                        Id = board.Id,
                        Name = board.Name
                    } );
                }
            }

            BindAddProjectsToBoardGrid();
            HideDialog();
        }

        #endregion

        #region Add Tasks to Board Grid

        /// <summary>
        /// Handles the Delete event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs" /> instance containing the event data.</param>
        protected void gAddTasksToBoard_Delete( object sender, RowEventArgs e )
        {
            AddToTaskBoardState.RemoveAt( e.RowIndex );
            BindAddTasksToBoardGrid();
        }

        /// <summary>
        /// Handles the GridRebind event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="GridRebindEventArgs" /> instance containing the event data.</param>
        private void gAddTasksToBoard_GridRebind( object sender, GridRebindEventArgs e )
        {
            BindAddTasksToBoardGrid();
        }

        /// <summary>
        /// Handles the Add event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        private void gAddTasksToBoard_Add( object sender, EventArgs e )
        {
            var existingBoardIds = AddToTaskBoardState
                .Select( s => s.Id )
                .ToList();

            // populate dropdown with all boards that aren't already listed
            var boardList = new ProjectBoardService( new RockContext() )
                .Queryable()
                .Where( b => !existingBoardIds.Contains( b.Id ) )
                .OrderBy( b => b.Name )
                .ToList();

            if ( boardList.Count == 0 )
            {
                modalAlert.Show( "There are not any other boards that can be added", ModalAlertType.Warning );
            }
            else
            {
                ddlAddTasksToBoard.DataSource = boardList;
                ddlAddTasksToBoard.DataBind();
                ShowDialog( "AddTasksToBoard" );
            }
        }

        /// <summary>
        /// Binds the add projects to board grid.
        /// </summary>
        private void BindAddTasksToBoardGrid()
        {
            gAddTasksToBoard.DataSource = AddToTaskBoardState;
            gAddTasksToBoard.DataBind();
        }

        /// <summary>
        /// Handles the SaveClick event of the dlgChildProjectType control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void dlgAddTasksToBoard_SaveClick( object sender, EventArgs e )
        {
            using ( var rockContext = new RockContext() )
            {
                var boardId = ddlAddTasksToBoard.SelectedValueAsId() ?? 0;
                var board = new ProjectBoardService( rockContext ).Get( boardId );

                if ( board != null )
                {
                    AddToTaskBoardState.Add( new BoardTargetState
                    {
                        Id = board.Id,
                        Name = board.Name
                    } );
                }
            }

            BindAddTasksToBoardGrid();
            HideDialog();
        }

        #endregion

        #region Project Attributes

        /// <summary>
        /// Update the ProjectFormAttributeState with the current selections on the Grid.
        /// </summary>
        protected void UpdateFormAttributesState()
        {
            ProjectFormAttributesState = new List<string>();

            foreach ( GridViewRow row in gProjectAttributes.Rows.OfType<GridViewRow>() )
            {
                var key = gProjectAttributes.DataKeys[row.RowIndex].Value as Guid?;
                var attribute = ProjectAttributesState.Where( a => a.Guid == key ).FirstOrDefault();

                if ( attribute != null )
                {
                    foreach ( var fieldCell in row.Cells.OfType<DataControlFieldCell>() )
                    {
                        CheckBoxEditableField checkBoxTemplateField = fieldCell.ContainingField as CheckBoxEditableField;
                        if ( checkBoxTemplateField != null )
                        {
                            CheckBox checkBox = fieldCell.Controls[0] as CheckBox;
                            string dataField = checkBoxTemplateField.DataField;

                            if ( dataField == "IsFormField" && checkBox.Checked )
                            {
                                ProjectFormAttributesState.Add( attribute.Key );
                            }
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Handles the Add event of the gProjectAttributes control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void gProjectAttributes_Add( object sender, EventArgs e )
        {
            gProjectAttributes_ShowEdit( Guid.Empty );
        }

        /// <summary>
        /// Handles the Edit event of the gProjectAttributes control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs" /> instance containing the event data.</param>
        protected void gProjectAttributes_Edit( object sender, RowEventArgs e )
        {
            Guid attributeGuid = ( Guid ) e.RowKeyValue;

            gProjectAttributes_ShowEdit( attributeGuid );
        }

        /// <summary>
        /// Shows the edit dialog for the attribute.
        /// </summary>
        /// <param name="attributeGuid">The attribute guid.</param>
        protected void gProjectAttributes_ShowEdit( Guid attributeGuid )
        {
            Rock.Model.Attribute attribute;
            if ( attributeGuid.Equals( Guid.Empty ) )
            {
                attribute = new Rock.Model.Attribute();
                attribute.FieldTypeId = FieldTypeCache.Get( Rock.SystemGuid.FieldType.TEXT ).Id;
                edtProjectAttributes.ActionTitle = ActionTitle.Add( tbName.Text + " Project Attribute" );

            }
            else
            {
                attribute = ProjectAttributesState.First( a => a.Guid.Equals( attributeGuid ) );
                edtProjectAttributes.ActionTitle = ActionTitle.Edit( tbName.Text + " Project Attribute" );
            }

            edtProjectAttributes.ReservedKeyNames = ProjectAttributesState.Where( a => !a.Guid.Equals( attributeGuid ) ).Select( a => a.Key ).ToList();

            edtProjectAttributes.SetAttributeProperties( attribute, typeof( Project ) );

            ShowDialog( "ProjectAttributes", true );
        }

        /// <summary>
        /// Handles the GridReorder event of the gProjectAttributes control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="GridReorderEventArgs"/> instance containing the event data.</param>
        protected void gProjectAttributes_GridReorder( object sender, GridReorderEventArgs e )
        {
            var movedProject = ProjectAttributesState.Where( a => a.Order == e.OldIndex ).FirstOrDefault();
            if ( movedProject != null )
            {
                if ( e.NewIndex < e.OldIndex )
                {
                    // Moved up
                    foreach ( var otherProject in ProjectAttributesState.Where( a => a.Order < e.OldIndex && a.Order >= e.NewIndex ) )
                    {
                        otherProject.Order = otherProject.Order + 1;
                    }
                }
                else
                {
                    // Moved Down
                    foreach ( var otherProject in ProjectAttributesState.Where( a => a.Order > e.OldIndex && a.Order <= e.NewIndex ) )
                    {
                        otherProject.Order = otherProject.Order - 1;
                    }
                }

                movedProject.Order = e.NewIndex;
            }

            // Forcibly fix all the Order properties.
            int order = 0;
            foreach ( var attr in ProjectAttributesState.OrderBy( a => a.Order ).ThenBy( a => a.Name ) )
            {
                attr.Order = order++;
            }


            BindProjectAttributesGrid();
        }

        /// <summary>
        /// Handles the Delete event of the gProjectAttributes control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs" /> instance containing the event data.</param>
        /// <exception cref="System.NotImplementedException"></exception>
        protected void gProjectAttributes_Delete( object sender, RowEventArgs e )
        {
            Guid attributeGuid = ( Guid ) e.RowKeyValue;
            ProjectAttributesState.RemoveEntity( attributeGuid );

            BindProjectAttributesGrid();
        }

        /// <summary>
        /// Handles the GridRebind event of the gProjectAttributes control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void gProjectAttributes_GridRebind( object sender, EventArgs e )
        {
            BindProjectAttributesGrid();
        }

        /// <summary>
        /// Handles the SaveClick event of the dlgProjectAttributes control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void dlgProjectAttributes_SaveClick( object sender, EventArgs e )
        {
            Rock.Model.Attribute attribute = new Rock.Model.Attribute();
            edtProjectAttributes.GetAttributeProperties( attribute );

            // Controls will show warnings
            if ( !attribute.IsValid )
            {
                return;
            }

            if ( ProjectAttributesState.Any( a => a.Guid.Equals( attribute.Guid ) ) )
            {
                attribute.Order = ProjectAttributesState.Where( a => a.Guid.Equals( attribute.Guid ) ).FirstOrDefault().Order;
                ProjectAttributesState.RemoveEntity( attribute.Guid );
            }
            else
            {
                attribute.Order = ProjectAttributesState.Any() ? ProjectAttributesState.Max( a => a.Order ) + 1 : 0;
            }
            ProjectAttributesState.Add( attribute );

            BindProjectAttributesGrid();

            HideDialog();
        }

        /// <summary>
        /// Binds the project attribute type grid.
        /// </summary>
        private void BindProjectAttributesGrid()
        {
            gProjectAttributes.DataSource = ProjectAttributesState
                .Select( a => new
                {
                    Id = a.Id,
                    Guid = a.Guid,
                    Name = a.Name,
                    Description = a.Description,
                    IsRequired = a.IsRequired,
                    Order = a.Order,
                    IsFormField = ProjectFormAttributesState.Contains( a.Key )
                } )
                .OrderBy( a => a.Order )
                .ThenBy( a => a.Name )
                .ToList();
            gProjectAttributes.DataBind();
        }

        #endregion

        [Serializable]
        private class BoardTargetState
        {
            public int Id { get; set; }

            public string Name { get; set; }
        }
    }
}