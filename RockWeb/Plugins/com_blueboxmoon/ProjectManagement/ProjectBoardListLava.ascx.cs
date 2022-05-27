using System;
using System.ComponentModel;
using System.Linq;
using System.Web.UI.WebControls;

using com.blueboxmoon.ProjectManagement.Model;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Lava;
using Rock.Model;
using Rock.Security;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project Board List Lava" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Displays the available project boards in the system." )]

    [LinkedPage( "Project Board Page",
        Description = "The page that will display the project boards.",
        IsRequired = true,
        Order = 0,
        Key = AttributeKeys.ProjectBoardPage )]

    [CodeEditorField( "Lava Template",
        Description = "The Lava template to use when rendering the available project boards.",
        EditorMode = CodeEditorMode.Lava,
        DefaultValue = "{% include '~/Plugins/com_blueboxmoon/ProjectManagement/Assets/Lava/ProjectBoardList.lava' %}",
        Order = 1,
        Key = AttributeKeys.LavaTemplate )]
    public partial class ProjectBoardListLava : RockBlock
    {
        public static class AttributeKeys
        {
            /// <summary>
            /// The project board page attribute key.
            /// </summary>
            public const string ProjectBoardPage = "ProjectBoardPage";

            /// <summary>
            /// The lava template attribute key.
            /// </summary>
            public const string LavaTemplate = "LavaTemplate";
        }

        #region Base Method Overrides

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

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
                ShowProjectBoards();
            }
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Shows the list of project boards that can be viewed.
        /// </summary>
        public void ShowProjectBoards()
        {
            using ( var rockContext = new RockContext() )
            {
                var boards = new ProjectBoardService( rockContext ).Queryable()
                    .OrderBy( a => a.Name )
                    .ToList()
                    .Where( a => a.IsAuthorized( Authorization.VIEW, CurrentPerson ) )
                    .ToList();

                var url = this.LinkedPageRoute( AttributeKeys.ProjectBoardPage );

                var mergeFields = LavaHelper.GetCommonMergeFields( RockPage, CurrentPerson );
                mergeFields.Add( "Boards", boards );
                mergeFields.Add( "BoardPageUrl", url );

                ltContent.Text = GetAttributeValue( AttributeKeys.LavaTemplate ).ResolveMergeFields( mergeFields );
            }
        }

        #endregion
    }
}
