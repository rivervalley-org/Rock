using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web.UI.WebControls;

using Rock;
using Rock.Attribute;
using Rock.Constants;
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Web;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Cache;
using com.blueboxmoon.ProjectManagement.Model;
using com.blueboxmoon.ProjectManagement.UI;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project Entry" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Provides a simplified form for entering new Projects." )]

    [LinkedPage( "Detail Page", "The page that will display the details of the project once it has been created.", true, order: 0 )]
    [BooleanField( "Show Due Date", "If true then the user can select a due date of their own choosing.", false, order: 1 )]
    public partial class ProjectEntry : RockBlock
    {
        #region Private Fields

        #endregion

        #region Properties

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
            RockPage.AddCSSLink( "~/Plugins/com_blueboxmoon/ProjectManagement/Styles/bootstrap-markdown-editor.css" );
            RockPage.AddScriptLink( "~/Scripts/ace/ace.js" );
            RockPage.AddScriptLink( "~/Plugins/com_blueboxmoon/ProjectManagement/Scripts/bootstrap-markdown-editor.js" );

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
                //
                // Verify that the user is allowed to make edits to the project in question.
                //
                var rockContext = new RockContext();
                bool authorized = true;

                var category = CategoryCache.Get( PageParameter( "CategoryId" ).AsInteger() );
                var projectType = ProjectTypeCache.Get( PageParameter( "ProjectTypeId" ).AsInteger() );
                if ( category != null )
                {
                    authorized = category.IsAuthorized( Authorization.VIEW, CurrentPerson );
                }

                if ( authorized && projectType != null )
                {
                    authorized = projectType.IsAuthorized( Authorization.VIEW, CurrentPerson );
                }

                if ( !authorized )
                {
                    nbUnauthorized.Text = EditModeMessage.NotAuthorizedToView( Project.FriendlyTypeName );
                    return;
                }

                if ( projectType == null )
                {
                    ddlProjectType.Visible = true;

                    ddlProjectType.Items.Clear();
                    ddlProjectType.Items.Add( new ListItem() );

                    new ProjectTypeService( new RockContext() ).Queryable()
                        .Where( p => p.IsActive )
                        .OrderBy( p => p.Name )
                        .ToList()
                        .Where( p => p.IsAuthorized( Authorization.EDIT, CurrentPerson ) )
                        .ToList()
                        .ForEach( p => ddlProjectType.Items.Add( new ListItem( p.Name, p.Id.ToString() ) ) );
                }
                else
                {
                    hfProjectTypeId.Value = projectType.Id.ToString();
                }

                meDescription.PublicApplicationRoot = GlobalAttributesCache.Value( "PublicApplicationRoot" );
                hfCategoryId.Value = category != null ? category.Id.ToString() : string.Empty;

                if ( PageParameter( "PersonAliasId" ).AsIntegerOrNull() != null )
                {
                    hfAssigneePersonAlias.Value = PageParameter( "PersonAliasId" );
                }

                if ( PageParameter( "GroupId" ).AsIntegerOrNull() != null )
                {
                    hfAssigneeGroup.Value = PageParameter( "GroupId" );
                }

                ShowEdit();
            }
            else
            {
                if ( pnlEdit.Visible )
                {
                    //
                    // Add the attribute controls.
                    //
                    var projectType = ProjectTypeCache.Get( ddlProjectType.Visible ? ddlProjectType.SelectedValue.AsInteger() : hfProjectTypeId.Value.AsInteger() );
                    phEditAttributes.Controls.Clear();

                    if ( projectType != null )
                    {
                        var project = new Project { Id = 0, ProjectTypeId = projectType.Id };

                        project.LoadAttributes();
                        var formKeys = !string.IsNullOrWhiteSpace( projectType.FormAttributes ) ? projectType.FormAttributes.Split( ',' ).ToList() : new List<string>();
                        var excludeList = project.Attributes
                            .Values
                            .ToList()
                            .Where( a => !formKeys.Contains( a.Key ) )
                            .Select( a => a.Name )
                            .ToList();

                        Rock.Attribute.Helper.AddEditControls( project, phEditAttributes, false, BlockValidationGroup, excludeList );
                    }
                }
            }
        }

        /// <summary>
        /// Returns breadcrumbs specific to the block that should be added to navigation
        /// based on the current page reference.  This function is called during the page's
        /// oninit to load any initial breadcrumbs
        /// </summary>
        /// <param name="pageReference">The page reference.</param>
        /// <returns></returns>
        public override List<BreadCrumb> GetBreadCrumbs( PageReference pageReference )
        {
            var crumbs = new List<BreadCrumb>();

            var title = PageParameter( "Title" );
            crumbs.Add( new BreadCrumb( !string.IsNullOrWhiteSpace( title ) ? title : RockPage.BrowserTitle, pageReference ) );

            return crumbs;
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Shows the edit panel.
        /// </summary>
        public void ShowEdit()
        {
            var rockContext = new RockContext();

            pnlEdit.Visible = true;
            HideSecondaryBlocks( true );

            lEditTitle.Text = ActionTitle.Add( Project.FriendlyTypeName ).FormatAsHtmlTitle();

            var projectType = new ProjectTypeService( rockContext ).Get( ddlProjectType.Visible ? ddlProjectType.SelectedValue.AsInteger() : hfProjectTypeId.ValueAsInt() );
            meDescription.BinaryFileTypeGuid = projectType != null && projectType.BinaryFileType != null ? projectType.BinaryFileType.Guid : ( Guid? ) null;

            dpDueDate.Visible = GetAttributeValue( "ShowDueDate" ).AsBoolean( false );

            //
            // Add the attribute controls.
            //
            phEditAttributes.Controls.Clear();

            if ( projectType != null )
            {
                var project = new Project { Id = 0 };
                project.ProjectTypeId = projectType.Id;
                project.LoadAttributes( rockContext );

                var formKeys = !string.IsNullOrWhiteSpace( projectType.FormAttributes ) ? projectType.FormAttributes.Split( ',' ).ToList() : new List<string>();
                var excludeList = project.Attributes
                    .Values
                    .ToList()
                    .Where( a => !formKeys.Contains( a.Key ) )
                    .Select( a => a.Name )
                    .ToList();

                Rock.Attribute.Helper.AddEditControls( project, phEditAttributes, true, BlockValidationGroup, excludeList );
            }
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
            ProjectService projectService = new ProjectService( rockContext );
            var newAssignees = new List<int>();

            var project = new Project();
            projectService.Add( project );

            project.CreatedByPersonAliasId = CurrentPersonAliasId;
            project.CreatedDateTime = RockDateTime.Now;
            project.RequestedByPersonAliasId = CurrentPersonAliasId;
            project.ProjectTypeId = ddlProjectType.Visible ? ddlProjectType.SelectedValueAsInt().Value : hfProjectTypeId.ValueAsInt();
            project.CategoryId = hfCategoryId.Value.AsIntegerOrNull();
            project.ModifiedByPersonAliasId = CurrentPersonAliasId;
            project.ModifiedDateTime = RockDateTime.Now;

            project.Name = tbName.Text;
            project.Description = meDescription.Text;
            project.RequestedByPersonAliasId = CurrentPersonAliasId;
            project.RequestDate = RockDateTime.Now;

            if ( dpDueDate.Visible )
            {
                project.DueDate = dpDueDate.SelectedDate;
            }

            //
            // Check if category is required.
            //
            var projectTypeCache = ProjectTypeCache.Get( project.ProjectTypeId );
            if ( projectTypeCache.IsCategoryRequired && !project.CategoryId.HasValue )
            {
                nbMissingCategory.Visible = true;
                return;
            }
            nbMissingCategory.Visible = false;

            //
            // Add the default assignees if we need to.
            //
            if ( !string.IsNullOrWhiteSpace( hfAssigneePersonAlias.Value ) )
            {
                var personAlias = new PersonAliasService( rockContext ).Get( hfAssigneePersonAlias.Value.AsInteger() );
                if ( personAlias != null )
                {
                    project.Assignees.Add( personAlias );
                    newAssignees.Add( personAlias.Id );
                }
            }

            if ( !string.IsNullOrWhiteSpace( hfAssigneeGroup.Value ) )
            {
                int groupId = hfAssigneeGroup.Value.AsInteger();

                var members = new GroupMemberService( rockContext ).Queryable()
                    .Where( m => m.GroupId == groupId && m.GroupMemberStatus == GroupMemberStatus.Active );

                foreach ( var member in members )
                {
                    if ( !project.Assignees.Any( a => a.Person.Id == member.Person.Id ) )
                    {
                        project.Assignees.Add( member.Person.PrimaryAlias );
                        newAssignees.Add( member.Person.PrimaryAliasId.Value );
                    }
                }
            }

            //
            // Store the attribute values.
            //
            project.LoadAttributes( rockContext );
            Rock.Attribute.Helper.GetEditValues( phEditAttributes, project );

            if ( !Page.IsValid || !project.IsValid )
            {
                // Controls will render the error messages                    
                return;
            }

            //
            // Check each file they uploaded while writing this note. If it is referenced in the
            // note text then attach it to the project and mark the binary file as permanent.
            //
            var binaryFileService = new BinaryFileService( rockContext );
            foreach ( var hfId in meDescription.UploadedFileIds )
            {
                var binaryFile = binaryFileService.Get( hfId );

                if ( binaryFile != null && meDescription.Text.Contains( string.Format( "/GetFile.ashx?Id={0})", hfId ) ) )
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

                if ( project.RequestedByPersonAliasId.HasValue )
                {
                    Project.WatchProject( project.Id, project.RequestedByPersonAliasId.Value, true, rockContext, false );
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
            } );

            //
            // Remove anybody from the mention list that is assigned to the task so they don't get
            // two notifications.
            //
            mentions = mentions.Where( p => !newAssignees.Any( a => p.Aliases.Select( b => b.Id ).Contains( a ) ) ).ToList();
            Project.SendCommentNotification( project.Id, CurrentPersonAliasId, null, mentions );

            if ( newAssignees.Any() )
            {
                Project.SendAssignedNotification( project.Id, CurrentPersonAliasId, newAssignees );
            }

            NavigateToLinkedPage( "DetailPage", new Dictionary<string, string>() { { "Id", project.Id.ToString() } } );
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
        /// Handles the SelectedIndexChanged event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void ddlProjectType_SelectedIndexChanged( object sender, EventArgs e )
        {
            ShowEdit();
        }

        /// <summary>
        /// Handles the BlockUpdated event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_BlockUpdated( object sender, EventArgs e )
        {
            ShowEdit();
        }

        #endregion
    }
}