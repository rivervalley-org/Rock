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
using com.blueboxmoon.ProjectManagement.Cache;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "My Projects" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Lists projects assigned to or requested by the current person." )]

    #region Block Attributes

    [LinkedPage( "Project Page", "The page that allows a person to view and edit projects.", true, "", order: 0 )]
    [IntegerField( "Page Size", "The number of items to display per page.", true, 10, order: 1 )]

    [CodeEditorField( "Project Name Template",
        description: "The lava template will be used for the project Name. Access the project via the 'Row' variable.",
        mode: Rock.Web.UI.Controls.CodeEditorMode.Lava,
        defaultValue: "{{ Row.FormattedName }} <small>({{ Row.InactiveTasks | Size }}/{{ Row.Tasks | Size }})</small>",
        required: true,
        key: AttributeKeys.ProjectNameTemplate,
        order: 2 )]

    [CustomCheckboxListField( "Project Types",
        Description = "The project types that will be used to filter projects. Leave blank to include all.",
        ListSource = "SELECT [Guid] AS [Value], [Name] AS [Text] FROM [_com_blueboxmoon_ProjectManagement_ProjectType]",
        Key = AttributeKeys.ProjectTypes,
        Order = 3 )]

    #endregion

    public partial class MyProjects : RockBlock
    {
        public static class AttributeKeys
        {
            public const string ProjectNameTemplate = "ProjectNameTemplate";

            public const string ProjectTypes = "ProjectTypes";
        }

        #region Private Fields

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
                if ( activeButton == "Requested" )
                {
                    liRequested.AddCssClass( "active" );
                }
                else if ( activeButton == "Following" )
                {
                    liFollowing.AddCssClass( "active" );
                }
                else
                {
                    liAssigned.AddCssClass( "active" );
                }

                hfDisplayCount.Value = _pageSize.ToString();

                BindRepeaters();
            }
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Bind the repeater to the list of projects in the project.
        /// </summary>
        private void BindRepeaters()
        {
            var rockContext = new RockContext();
            var projectService = new ProjectService( rockContext );
            bool assigned = liAssigned.Attributes["class"].ToStringSafe().Contains( "active" );
            bool requested = liRequested.Attributes["class"].ToStringSafe().Contains( "active" );
            bool followed = liFollowing.Attributes["class"].ToStringSafe().Contains( "active" );
            var projectTypeGuids = GetAttributeValue( AttributeKeys.ProjectTypes ).SplitDelimitedValues().AsGuidList();

            var projects = projectService.MyProjects( CurrentPerson, assigned, requested, followed );

            if ( projectTypeGuids.Any() )
            {
                var projectTypeIds = projectTypeGuids
                    .Select( guid => ProjectTypeCache.Get( guid ) )
                    .Where( ptc => ptc != null )
                    .Select( ptc => ptc.Id )
                    .ToList();

                projects = projects.Where( p => projectTypeIds.Contains( p.ProjectTypeId ) ).ToList();
            }

            _showMore = projects.Count > hfDisplayCount.ValueAsInt();
            rpProjects.DataSource = projects.Take( hfDisplayCount.ValueAsInt() ).ToList();
            rpProjects.DataBind();
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

        #endregion

        #region Event Handlers

        /// <summary>
        /// Handles the BlockUpdated event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_BlockUpdated( object sender, EventArgs e )
        {
            BindRepeaters();
        }

        /// <summary>
        /// Handles the ItemDataBound event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RepeaterItemEventArgs"/> instance containing the event data.</param>
        protected void rpProject_ItemDataBound( object sender, RepeaterItemEventArgs e )
        {
            if ( e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem )
            {
                var project = e.Item.DataItem as Project;
                var liProject = e.Item.FindControl( "liProject" ) as System.Web.UI.HtmlControls.HtmlGenericControl;
                var lbProjectName = e.Item.FindControl( "lbProjectName" ) as LinkButton;
                var lDueDate = e.Item.FindControl( "lDueDate" ) as Literal;
                var lBlockedBy = e.Item.FindControl( "lBlockedby" ) as Literal;
                var lDescription = e.Item.FindControl( "lDescription" ) as Literal;
                var lAssignedTo = e.Item.FindControl( "lAssignedto" ) as Literal;
                var lTags = e.Item.FindControl( "lTags" ) as Literal;

                var mergeFields = Rock.Lava.LavaHelper.GetCommonMergeFields( null, null, new Rock.Lava.CommonMergeFieldsOptions { GetLegacyGlobalMergeFields = false } );
                mergeFields.Add( "Row", project );
                lbProjectName.Text = GetAttributeValue( AttributeKeys.ProjectNameTemplate ).ResolveMergeFields( mergeFields );

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
                        if ( project.DueDate.Value.Date == RockDateTime.Now.Date )
                        {
                            liProject.AddCssClass( "pm-warning" );
                        }
                        else if ( project.DueDate.Value.Date < RockDateTime.Now.Date )
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

                    //
                    // Add all the tags.
                    //
                    foreach ( var tag in GetCurrentTags( project.Guid ) )
                    {
                        lTags.Text += string.Format( "<span class=\"label label-default\"><i class=\"fa fa-tag\"></i> {0}</span> ", tag.EncodeHtml() );
                    }
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
                NavigateToLinkedPage( "ProjectPage", queryParameters );

                return;
            }
            else if ( e.CommandName == "ShowMore" )
            {
                hfDisplayCount.Value = ( hfDisplayCount.ValueAsInt() + _pageSize ).ToString();
            }

            BindRepeaters();
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbAssigned_Click( object sender, EventArgs e )
        {
            liAssigned.AddCssClass( "active" );
            liRequested.RemoveCssClass( "active" );
            liFollowing.RemoveCssClass( "active" );

            SetBlockUserPreference( "ActiveButton", "Assigned" );

            BindRepeaters();
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbRequested_Click( object sender, EventArgs e )
        {
            liAssigned.RemoveCssClass( "active" );
            liRequested.AddCssClass( "active" );
            liFollowing.RemoveCssClass( "active" );

            SetBlockUserPreference( "ActiveButton", "Requested" );

            BindRepeaters();
        }

        /// <summary>
        /// Handles the Click event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbFollowing_Click( object sender, EventArgs e )
        {
            liAssigned.RemoveCssClass( "active" );
            liRequested.RemoveCssClass( "active" );
            liFollowing.AddCssClass( "active" );

            SetBlockUserPreference( "ActiveButton", "Following" );

            BindRepeaters();
        }

        #endregion
    }
}