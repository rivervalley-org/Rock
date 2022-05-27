using System;
using System.ComponentModel;
using System.Linq;
using System.Web.UI.WebControls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Hub;
using com.blueboxmoon.ProjectManagement.Model;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Security;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project Board List" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Lists project boards in the system." )]

    [LinkedPage( "Detail Page", "The page that allows the user to edit the details of a project board.", true, "", "", 0 )]
    public partial class ProjectBoardList : RockBlock
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

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );

            bool canAddEditDelete = IsUserAuthorized( Authorization.EDIT );

            gProjectBoard.DataKeyNames = new string[] { "Id" };
            gProjectBoard.Actions.AddClick += gProjectBoard_Add;
            gProjectBoard.GridRebind += gProjectBoard_GridRebind;
            gProjectBoard.Actions.ShowAdd = canAddEditDelete;
            gProjectBoard.IsDeleteEnabled = canAddEditDelete;

            var securityField = gProjectBoard.Columns.OfType<SecurityField>().FirstOrDefault();
            if ( securityField != null )
            {
                securityField.EntityTypeId = EntityTypeCache.Get( typeof( ProjectBoard ) ).Id;
            }
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
                BindGrid();
            }
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Bind the data grid to the list of project types in the system.
        /// </summary>
        private void BindGrid()
        {
            var projectBoardService = new ProjectBoardService( new RockContext() );
            var sortProperty = gProjectBoard.SortProperty;

            var types = projectBoardService.Queryable()
                .Select( t => new
                {
                    t.Id,
                    t.Name
                } )
                .ToList();

            if ( sortProperty != null )
            {
                types = types.AsQueryable().Sort( sortProperty ).ToList();
            }
            else
            {
                types = types.OrderBy( t => t.Name ).ToList();
            }

            gProjectBoard.EntityTypeId = EntityTypeCache.Get<ProjectBoard>().Id;
            gProjectBoard.DataSource = types;
            gProjectBoard.DataBind();
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
            BindGrid();
        }

        /// <summary>
        /// Handles the RowSelected event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs"/> instance containing the event data.</param>
        protected void gProjectBoard_RowSelected( object sender, Rock.Web.UI.Controls.RowEventArgs e )
        {
            NavigateToLinkedPage( "DetailPage", "ProjectBoardId", e.RowKeyId );
        }

        /// <summary>
        /// Handles the Delete event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs"/> instance containing the event data.</param>
        protected void gProjectBoard_Delete( object sender, Rock.Web.UI.Controls.RowEventArgs e )
        {
            var rockContext = new RockContext();
            var projectBoardService = new ProjectBoardService( rockContext );
            var projectColumnService = new ProjectBoardColumnService( rockContext );
            var projectCardService = new ProjectBoardCardService( rockContext );
            var projectBoard = projectBoardService.Get( e.RowKeyId );

            if ( projectBoard != null )
            {
                if ( !projectBoard.IsAuthorized( Authorization.ADMINISTRATE, CurrentPerson ) )
                {
                    mdGridWarning.Show( "Sorry, you're not authorized to delete this project type.", ModalAlertType.Alert );
                    return;
                }

                var columns = projectColumnService.Queryable()
                    .Where( c => c.ProjectBoardId == projectBoard.Id )
                    .ToList();

                var cards = projectCardService.Queryable()
                    .Where( c => c.ProjectBoardColumn.ProjectBoardId == projectBoard.Id )
                    .ToList();

                projectCardService.DeleteRange( cards );
                projectColumnService.DeleteRange( columns );
                projectBoardService.Delete( projectBoard );
                rockContext.SaveChanges();

                ProjectMessageHub.BoardModified( projectBoard.Guid );
            }

            BindGrid();
        }

        /// <summary>
        /// Handles the GridRebind event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="GridRebindEventArgs"/> instance containing the event data.</param>
        protected void gProjectBoard_GridRebind( object sender, Rock.Web.UI.Controls.GridRebindEventArgs e )
        {
            BindGrid();
        }

        /// <summary>
        /// Handles the Add event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void gProjectBoard_Add( object sender, EventArgs e )
        {
            NavigateToLinkedPage( "DetailPage", "ProjectBoardId", 0 );
        }

        #endregion
    }
}
