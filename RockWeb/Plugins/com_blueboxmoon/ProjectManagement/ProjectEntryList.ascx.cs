using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;

using Rock;
using Rock.Attribute;
using Rock.Constants;
using Rock.Data;
using Rock.Lava;
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
    [DisplayName( "Project Entry List" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Creates a list of buttons for the user to pick from to begin entering a new project." )]

    [LinkedPage( "Project Entry Page", "The page that will display the entry form.", true, category: "CustomSetting", order: 0 )]
    [TextField( "Projects", "The list of categories and projects the user will have available.", true, category: "CustomSetting", order: 1 )]
    [CodeEditorField( "Lava Template", "The Lava template to use when rendering the available projects.", CodeEditorMode.Lava, defaultValue: "{% include '~/Plugins/com_blueboxmoon/ProjectManagement/Assets/Lava/ProjectEntryList.lava' %}", category: "CustomSetting", order: 2 )]
    public partial class ProjectEntryList : RockBlockCustomSettings
    {
        #region Private Fields

        #endregion

        #region Properties

        /// <summary>
        /// The current list of project descriptions while we are in block settings.
        /// </summary>
        protected List<ProjectDescription> SettingsProjects{ get; set; }

        #endregion

        #region Base Method Overrides

        /// <summary>
        /// Load the view state data from the provided state.
        /// </summary>
        /// <param name="savedState">The data returned from a previous call to SaveViewState.</param>
        protected override void LoadViewState( object savedState )
        {
            base.LoadViewState( savedState );

            SettingsProjects = GetConfiguredProjects( ( string ) ViewState["SettingsProjects"] );
        }

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

            gSettingsAvailableProjects.Actions.ShowAdd = true;
            gSettingsAvailableProjects.Actions.ShowExcelExport = false;
            gSettingsAvailableProjects.Actions.ShowMergeTemplate = false;
            gSettingsAvailableProjects.Actions.AddClick += gSettingsAvailableProjects_AddClick;

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
                ShowProjects();
            }
        }

        /// <summary>
        /// Save the view state so that we can later restore it.
        /// </summary>
        /// <returns>The data that will be saved and later passed to the LoadViewState method.</returns>
        protected override object SaveViewState()
        {
            if ( SettingsProjects != null )
            {
                ViewState["SettingsProjects"] = string.Join( "^", SettingsProjects.Select( p => p.ToString() ) );
            }

            return base.SaveViewState();
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Shows the list of projects that can be activated.
        /// </summary>
        public void ShowProjects()
        {
            nbNotConfigured.Visible = false;
            nbNothingAvailable.Visible = false;
            ltContent.Text = string.Empty;

            if ( string.IsNullOrWhiteSpace( GetAttributeValue( "Projects" ) ) )
            {
                nbNotConfigured.Visible = true;
                return;
            }

            var projects = GetAvailableProjects();
            if ( projects.Count == 0 )
            {
                nbNothingAvailable.Visible = true;
                return;
            }

            foreach ( var project in projects )
            {
                var parameters = new Dictionary<string, string>
                {
                    { "Title", project.Title },
                    { "CategoryId", project.CategoryId.ToStringSafe() },
                    { "ProjectTypeId", project.ProjectTypeId.ToString() }
                };

                if ( project.AssignToPersonAliasId.HasValue )
                {
                    parameters.Add( "PersonAliasId", project.AssignToPersonAliasId.Value.ToString() );
                }

                if ( project.AssignToGroupId.HasValue )
                {
                    parameters.Add( "GroupId", project.AssignToGroupId.Value.ToString() );
                }

                project.Url = new PageReference( GetAttributeValue( "ProjectEntryPage" ), parameters ).BuildUrl();
            }

            var mergeFields = LavaHelper.GetCommonMergeFields( RockPage, CurrentPerson );
            mergeFields.Add( "Projects", projects );

            ltContent.Text = GetAttributeValue( "LavaTemplate" ).ResolveMergeFields( mergeFields );
        }

        /// <summary>
        /// Get all the configured projects.
        /// </summary>
        /// <returns>A list of ProjectDescriptions to identify the projects.</returns>
        protected List<ProjectDescription> GetConfiguredProjects( string projectText )
        {
            return projectText
                .Split( new char[] { '^' }, StringSplitOptions.RemoveEmptyEntries )
                .Select( p => ProjectDescription.FromText( p ) )
                .Where( p => p != null && p.ProjectType != null && p.Category != null )
                .ToList();
        }

        /// <summary>
        /// Get all projects available to the current user.
        /// </summary>
        /// <returns>A list of ProjectDescriptions to identify the projects.</returns>
        protected List<ProjectDescription> GetAvailableProjects()
        {
            return GetConfiguredProjects( GetAttributeValue( "Projects" ) )
                .Where( p => p.ProjectType.IsAuthorized( Authorization.VIEW, CurrentPerson ) )
                .Where( p => p.Category.IsAuthorized( Authorization.VIEW, CurrentPerson ) )
                .ToList();
        }

        /// <summary>
        /// Bind the projects repeater so the admin can pick which projects they want to use.
        /// </summary>
        private void BindSettingsProjects()
        {
            gSettingsAvailableProjects.DataSource = SettingsProjects;
            gSettingsAvailableProjects.DataBind();
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
            ShowProjects();
        }

        /// <summary>
        /// Handles the user command to show custom settings.
        /// </summary>
        protected override void ShowSettings()
        {
            var page = new PageService( new RockContext() ).Get( GetAttributeValue( "ProjectEntryPage" ).AsGuid() );

            ppSettingsProjectEntryPage.SetValue( page != null ? ( int? ) page.Id : null );
            ceSettingsLavaTemplate.Text = GetAttributeValue( "LavaTemplate" );

            SettingsProjects = GetConfiguredProjects( GetAttributeValue( "Projects" ) );
            BindSettingsProjects();

            mdlSettings.Show();
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void mdlSettings_SaveClick( object sender, EventArgs e )
        {
            if ( pnlSettingsEntry.Visible )
            {
                ProjectDescription project;

                if ( string.IsNullOrWhiteSpace( hfSettingsEntryRow.Value ) )
                {
                    project = new ProjectDescription();
                    SettingsProjects.Add( project );
                }
                else
                {
                    project = SettingsProjects[hfSettingsEntryRow.Value.AsInteger()];
                }

                project.Title = tbSettingsTitle.Text;
                project.IconCssClass = tbSettingsIconCssClass.Text;
                project.CategoryId = cpSettingsCategory.SelectedValueAsInt().Value;
                project.Category = CategoryCache.Get( project.CategoryId.Value );
                project.ProjectTypeId = ptpSettingsProjectType.SelectedValueAsInt().Value;
                project.ProjectType = ProjectTypeCache.Get( project.ProjectTypeId.Value );
                project.AssignToPersonAliasId = ppSettingsAssignToPerson.PersonAliasId;
                project.AssignToGroupId = gpSettingsAssignToGroup.SelectedValueAsId();

                BindSettingsProjects();

                pnlSettingsEntry.Visible = false;
                pnlSettingsBasic.Visible = true;

                mdlSettings.OnCancelScript = string.Empty;
                mdlSettings.ValidationGroup = ppSettingsProjectEntryPage.ValidationGroup;
                mdlSettings.Title = "Settings";

                return;
            }

            var projectText = string.Join( "^", SettingsProjects.Select( p => p.ToString() ) );

            var page = PageCache.Get( ppSettingsProjectEntryPage.SelectedValueAsId().Value );
            SetAttributeValue( "ProjectEntryPage", page.Guid.ToString() );
            SetAttributeValue( "LavaTemplate", ceSettingsLavaTemplate.Text );
            SetAttributeValue( "Projects", projectText );

            SaveAttributeValues();

            mdlSettings.Hide();

            ShowProjects();
        }

        /// <summary>
        /// Handles the AddClick event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void gSettingsAvailableProjects_AddClick( object sender, EventArgs e )
        {
            hfSettingsEntryRow.Value = string.Empty;
            tbSettingsTitle.Text = string.Empty;
            tbSettingsIconCssClass.Text = string.Empty;
            cpSettingsCategory.SetValue( null );
            ptpSettingsProjectType.SetValue( null );
            ppSettingsAssignToPerson.SetValue( null );
            gpSettingsAssignToGroup.SetValue( null );

            pnlSettingsBasic.Visible = false;
            pnlSettingsEntry.Visible = true;

            mdlSettings.OnCancelScript = string.Format( "document.getElementById('{0}').click(); return false;", lbSettingsEntryCancel.ClientID );
            mdlSettings.ValidationGroup = tbSettingsTitle.ValidationGroup;
            mdlSettings.Title = "Add Entry Item";
        }

        /// <summary>
        /// Handles the ItemCommand event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RepeaterCommandEventArgs"/> instance containing the event data.</param>
        protected void rpSettingsAvailableProjects_ItemCommand( object source, RepeaterCommandEventArgs e )
        {
            if ( e.CommandName == "RemoveEntry" )
            {
                int index = e.CommandArgument.ToString().AsInteger();

                SettingsProjects.RemoveAt( index );
            }

            BindSettingsProjects();
        }

        /// <summary>
        /// Handles the ItemDataBound event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RepeaterItemEventArgs"/> instance containing the event data.</param>
        protected void rpSettingsAvailableProjects_ItemDataBound( object sender, RepeaterItemEventArgs e )
        {
            if ( e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem )
            {
                var project = ( ProjectDescription ) e.Item.DataItem;
                var tbSettingsTitle = e.Item.FindControl( "tbSettingsTitle" ) as RockTextBox;
                var ptpSettingsProjectType = e.Item.FindControl( "ptpSettingsProjectType" ) as ProjectTypePicker;
                var cpSettingsCategory = e.Item.FindControl( "cpSettingsCategory" ) as CategoryPicker;
                var btnRemoveEntry = e.Item.FindControl( "btnRemoveEntry" ) as LinkButton;

                tbSettingsTitle.Text = project.Title;
                ptpSettingsProjectType.SetValue( project.ProjectTypeId );
                cpSettingsCategory.SetValue( project.CategoryId );
                btnRemoveEntry.CommandArgument = e.Item.ItemIndex.ToString();
            }
        }

        /// <summary>
        /// Handles the GridRebind event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="GridRebindEventArgs"/> instance containing the event data.</param>
        protected void gSettingsAvailableProjects_GridRebind( object sender, GridRebindEventArgs e )
        {
            BindSettingsProjects();
        }

        /// <summary>
        /// Handles the RowDelete event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs"/> instance containing the event data.</param>
        protected void gSettingsDelete_Click( object sender, RowEventArgs e )
        {
            SettingsProjects.RemoveAt( e.RowIndex );
            BindSettingsProjects();
        }

        /// <summary>
        /// Handles the GridReorder event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="GridReorderEventArgs"/> instance containing the event data.</param>
        protected void gSettingsAvailableProjects_GridReorder( object sender, GridReorderEventArgs e )
        {
            var project = SettingsProjects[e.OldIndex];
            SettingsProjects.RemoveAt( e.OldIndex );
            SettingsProjects.Insert( e.NewIndex, project );

            BindSettingsProjects();
        }

        /// <summary>
        /// Handles the RowSelected event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs"/> instance containing the event data.</param>
        protected void gSettingsAvailableProjects_RowSelected( object sender, RowEventArgs e )
        {
            var rockContext = new RockContext();

            hfSettingsEntryRow.Value = e.RowIndex.ToString();
            tbSettingsTitle.Text = SettingsProjects[e.RowIndex].Title;
            tbSettingsIconCssClass.Text = SettingsProjects[e.RowIndex].IconCssClass;
            cpSettingsCategory.SetValue( SettingsProjects[e.RowIndex].CategoryId );
            ptpSettingsProjectType.SetValue( SettingsProjects[e.RowIndex].ProjectTypeId );

            PersonAlias personAlias = null;
            if ( SettingsProjects[e.RowIndex].AssignToPersonAliasId.HasValue )
            {
                personAlias = new PersonAliasService( rockContext ).Get( SettingsProjects[e.RowIndex].AssignToPersonAliasId.Value );
            }
            ppSettingsAssignToPerson.SetValue( personAlias != null ? personAlias.Person : null );

            Group group = null;
            if ( SettingsProjects[e.RowIndex].AssignToGroupId.HasValue )
            {
                group = new GroupService( rockContext ).Get( SettingsProjects[e.RowIndex].AssignToGroupId.Value );
            }
            gpSettingsAssignToGroup.SetValue( group );

            pnlSettingsBasic.Visible = false;
            pnlSettingsEntry.Visible = true;

            mdlSettings.OnCancelScript = string.Format( "document.getElementById('{0}').click(); return false;", lbSettingsEntryCancel.ClientID );
            mdlSettings.ValidationGroup = tbSettingsTitle.ValidationGroup;
            mdlSettings.Title = "Edit Entry Item";
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbSettingsEntryCancel_Click( object sender, EventArgs e )
        {
            pnlSettingsEntry.Visible = false;
            pnlSettingsBasic.Visible = true;

            mdlSettings.OnCancelScript = string.Empty;
            mdlSettings.ValidationGroup = ppSettingsProjectEntryPage.ValidationGroup;
            mdlSettings.Title = "Settings";
        }

        #endregion

        #region Support Classes

        public class ProjectDescription : ILiquidizable
        {
            public object this[object key]
            {
                get
                {
                    return ( ( Dictionary<string, object> ) ToLiquid() )[key.ToStringSafe()];
                }
            }

            public string Title { get; set; }

            public string IconCssClass { get; set; }

            public int? CategoryId { get; set; }

            public int? ProjectTypeId { get; set; }

            public int? AssignToPersonAliasId { get; set; }

            public int? AssignToGroupId { get; set; }

            public CategoryCache Category { get; set; }

            public ProjectTypeCache ProjectType { get; set; }

            public string Url { get; set; }

            public List<string> AvailableKeys
            {
                get
                {
                    return new List<string> { "Title", "CategoryId", "ProjectTypeId", "Category", "ProjectType", "Url", "IconCssClass" };
                }
            }

            static public ProjectDescription FromText( string text )
            {
                var o = text.Split( new char[] { '|' } );
                if ( o.Length < 3 )
                {
                    return null;
                }

                var project = new ProjectDescription
                {
                    Title = HttpUtility.UrlDecode( o[0] ),
                    CategoryId = o[1].AsInteger(),
                    ProjectTypeId = o[2].AsInteger(),
                    Category = CategoryCache.Get( o[1].AsInteger() ),
                    ProjectType = ProjectTypeCache.Get( o[2].AsInteger() )
                };

                if ( o.Length > 3 )
                {
                    project.IconCssClass = HttpUtility.UrlDecode( o[3] );
                }

                if ( o.Length > 5 )
                {
                    project.AssignToPersonAliasId = o[4].AsIntegerOrNull();
                    project.AssignToGroupId = o[5].AsIntegerOrNull();
                }

                return project;
            }

            public bool ContainsKey( object key )
            {
                return AvailableKeys.Contains( key );
            }

            public object ToLiquid()
            {
                return new Dictionary<string, object>
                {
                    { "Title", Title },
                    { "CategoryId", CategoryId },
                    { "ProjectTypeId", "ProjectTypeId" },
                    { "Category", Category },
                    { "ProjectType", ProjectType },
                    { "Url", Url },
                    { "IconCssClass", IconCssClass }
                };
            }

            public override string ToString()
            {
                return string.Format( "{0}|{1}|{2}|{3}|{4}|{5}",
                    HttpUtility.UrlEncode( Title ),
                    CategoryId,
                    ProjectTypeId,
                    HttpUtility.UrlEncode( IconCssClass ),
                    AssignToPersonAliasId.HasValue ? AssignToPersonAliasId.Value.ToString() : string.Empty,
                    AssignToGroupId.HasValue ? AssignToGroupId.Value.ToString() : string.Empty );
            }
        }

        #endregion
    }
}
