using System;
using System.ComponentModel;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Hub;
using com.blueboxmoon.ProjectManagement.Model;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Web.UI;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project Board View" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Views projects on a kanban style board to organize projects and tasks." )]

    #region Block Attributes

    [CustomDropdownListField( "Project Board",
        Description = "Locks this block to display a specific project board.",
        IsRequired = false,
        ListSource = "SELECT [Name] AS [Text], [Guid] AS [Value] FROM [_com_blueboxmoon_ProjectManagement_ProjectBoard]",
        Order = 0,
        Key = AttributeKeys.ProjectBoard )]

    [BooleanField( "Set Page Title",
        Description = "Sets the page title to the name of the project board.",
        ControlType = Rock.Field.Types.BooleanFieldType.BooleanControlType.Toggle,
        IsRequired = false,
        DefaultBooleanValue = true,
        Order = 1,
        Key = AttributeKeys.SetPageTitle )]

    #endregion

    public partial class ProjectBoardView : RockBlock
    {
        public static class AttributeKeys
        {
            /// <summary>
            /// The project board attribute key.
            /// </summary>
            public const string ProjectBoard = "ProjectBoard";

            /// <summary>
            /// The set page title attribute key.
            /// </summary>
            public const string SetPageTitle = "SetPageTitle";
        }

        public static class PageParameterKeys
        {
            public const string BoardId = "BoardId";
        }

        #region Private Fields

        private string _initScript = null;

        #endregion

        #region Base Method Overrides

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

            AddConfigurationUpdateTrigger( upnlContent );

            RockPage.AddCSSLink( "~/Plugins/com_blueboxmoon/ProjectManagement/Styles/project-board.css" );
            RockPage.AddScriptLink( "~/Plugins/com_blueboxmoon/ProjectManagement/Scripts/project-board.js" );

            Utility.AddCommonCss( RockPage );
        }

        /// <summary>
        /// Initialize basic information about the page structure and setup the default content.
        /// </summary>
        /// <param name="sender">Object that is generating this event.</param>
        /// <param name="e">Arguments that describe this event.</param>
        protected void Page_Load( object sender, EventArgs e )
        {
            SetupBoard();
        }

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.PreRender" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnPreRender( EventArgs e )
        {
            if ( _initScript.IsNotNullOrWhiteSpace() )
            {
                ScriptManager.RegisterStartupScript( upnlContent, GetType(), "initialize", _initScript, true );
            }

            base.OnPreRender( e );
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Setups the project board.
        /// </summary>
        protected void SetupBoard()
        {
            var rockContext = new RockContext();
            com.blueboxmoon.ProjectManagement.Model.ProjectBoard board = null;

            var boardGuid = GetAttributeValue( AttributeKeys.ProjectBoard ).AsGuidOrNull();

            if ( boardGuid.HasValue )
            {
                board = new ProjectBoardService( rockContext ).Get( boardGuid.Value );
            }
            else
            {
                var boardId = PageParameter( PageParameterKeys.BoardId ).AsInteger();

                if ( boardId != 0 )
                {
                    board = new ProjectBoardService( rockContext ).Get( boardId );
                }
            }

            if ( board == null )
            {
                nbNotFound.Visible = true;
                nbNotAuthorized.Visible = false;
                pnlBoard.Visible = false;
                _initScript = null;

                return;
            }

            if ( !board.IsAuthorized( Authorization.VIEW, CurrentPerson ) )
            {
                nbNotFound.Visible = false;
                nbNotAuthorized.Visible = true;
                pnlBoard.Visible = false;
                _initScript = null;

                return;
            }

            hfBoardId.Value = board.Id.ToString();
            nbNotFound.Visible = false;
            nbNotAuthorized.Visible = false;
            pnlBoard.Visible = true;

            if ( GetAttributeValue( AttributeKeys.SetPageTitle ).AsBoolean( true ) )
            {
                RockPage.Title = board.Name;
            }

            _initScript = string.Format( @"
(function () {{
    new BlueBoxMoon.ProjectManagement.ProjectBoard({{
        boardId: ""{5}"",
        elementSelector: ""#{0}"",
        onAddProject: (columnId) => {{
            $(""#{1}"").val(columnId);
            $(""#{2}"")[0].click();
        }},
        onAddTask: (columnId) => {{
            $(""#{3}"").val(columnId);
            $(""#{4}"")[0].click();
        }}
    }});
}})();
",
                pnlBoard.ClientID, // {0}
                hfAddProjectToColumn.ClientID, // {1}
                lbAddProject.ClientID, // {2}
                hfAddTaskToColumn.ClientID, // {3}
                lbAddTask.ClientID, // {4}
                board.Guid // {5}
                );
        }

        #endregion

        #region Event Handlers

        /// <summary>
        /// Handles the Click event of the AddProject control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void AddProject_Click( object sender, EventArgs e )
        {
            pProject.SetValue( null );
            nbAddProjectError.Text = null;

            mdAddProject.Show();
        }

        /// <summary>
        /// Handles the Click event of the AddProjectSave control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void AddProjectSave_Click( object sender, EventArgs e )
        {
            var boardId = hfBoardId.Value.AsInteger();
            var projectId = pProject.ItemId ?? 0;
            var columnGuid = hfAddProjectToColumn.Value.AsGuid();

            using ( var rockContext = new RockContext() )
            {
                var columnService = new ProjectBoardColumnService( rockContext );

                var columnId = columnService.Queryable()
                    .Where( a => a.Guid == columnGuid )
                    .Select( a => a.Id )
                    .SingleOrDefault();

                try
                {
                    var card = ProjectBoardCardService.InsertProjectCardAndSort( projectId, boardId, columnId );

                    if ( card == null )
                    {
                        nbAddProjectError.Text = "Project already exists in this board.";
                        return;
                    }
                }
                catch ( Exception ex )
                {
                    ExceptionLogService.LogException( ex );
                    nbAddProjectError.Text = "Unknown error while trying to add project.";

                    return;
                }
            }

            mdAddProject.Hide();
        }

        /// <summary>
        /// Handles the Click event of the AddTask control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void AddTask_Click( object sender, EventArgs e )
        {
            pTask.SetValue( null );
            nbAddTaskError.Text = null;

            mdAddTask.Show();
        }

        /// <summary>
        /// Handles the Click event of the AddTaskSave control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void AddTaskSave_Click( object sender, EventArgs e )
        {
            var boardId = hfBoardId.Value.AsInteger();
            var taskId = pTask.TaskId ?? 0;
            var columnGuid = hfAddTaskToColumn.Value.AsGuid();

            using ( var rockContext = new RockContext() )
            {
                var columnService = new ProjectBoardColumnService( rockContext );

                var columnId = columnService.Queryable()
                    .Where( a => a.Guid == columnGuid )
                    .Select( a => a.Id )
                    .SingleOrDefault();

                try
                {
                    var card = ProjectBoardCardService.InsertTaskCardAndSort( taskId, boardId, columnId );

                    if ( card == null )
                    {
                        nbAddProjectError.Text = "Task already exists in this board.";
                        return;
                    }
                }
                catch ( Exception ex )
                {
                    ExceptionLogService.LogException( ex );
                    nbAddProjectError.Text = "Unknown error while trying to add task.";

                    return;
                }
            }

            mdAddTask.Hide();
        }

        #endregion
    }
}