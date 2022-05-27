using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web.UI.WebControls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Hub;
using com.blueboxmoon.ProjectManagement.Model;

using Newtonsoft.Json;

using Rock;
using Rock.Constants;
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Web;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project Board Detail" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Displays the details for a project board." )]

    public partial class ProjectBoardDetail : RockBlock
    {
        #region Properties

        /// <summary>
        /// Gets or sets the state of the project attributes.
        /// </summary>
        private List<ColumnState> BoardColumnState { get; set; }

        #endregion

        #region Base Method Overrides

        /// <summary>
        /// Restores the view-state information from a previous user control request that was saved by the <see cref="M:System.Web.UI.UserControl.SaveViewState" /> method.
        /// </summary>
        /// <param name="savedState">An <see cref="T:System.Object" /> that represents the user control state to be restored.</param>
        protected override void LoadViewState( object savedState )
        {
            base.LoadViewState( savedState );

            string json = ViewState["BoardColumnState"] as string;
            if ( string.IsNullOrWhiteSpace( json ) )
            {
                BoardColumnState = new List<ColumnState>();
            }
            else
            {
                BoardColumnState = JsonConvert.DeserializeObject<List<ColumnState>>( json );
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

            gColumns.DataKeyNames = new string[] { "Guid" };
            gColumns.Actions.ShowAdd = true;
            gColumns.Actions.AddClick += gColumns_Add;
            gColumns.GridRebind += gColumns_GridRebind;
            gColumns.EmptyDataText = Server.HtmlEncode( None.Text );
            gColumns.GridReorder += gColumns_GridReorder;

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
                ShowDetail( PageParameter( "ProjectBoardId" ).AsInteger() );
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

            ViewState["BoardColumnState"] = JsonConvert.SerializeObject( BoardColumnState, Formatting.None, jsonSetting );

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

            int? projectBoardId = PageParameter( pageReference, "ProjectBoardId" ).AsIntegerOrNull();
            if ( projectBoardId != null )
            {
                var projectBoard = new ProjectBoardService( new RockContext() ).Get( projectBoardId.Value );
                if ( projectBoard != null )
                {
                    breadCrumbs.Add( new BreadCrumb( projectBoard.Name, pageReference ) );
                }
                else
                {
                    breadCrumbs.Add( new BreadCrumb( "New Project Board", pageReference ) );
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
        /// Shows the detail.
        /// </summary>
        /// <param name="projectBoardId">The project board identifier.</param>
        public void ShowDetail( int projectBoardId )
        {
            var rockContext = new RockContext();
            ProjectBoard projectBoard = null;

            if ( projectBoardId != 0 )
            {
                projectBoard = new ProjectBoardService( rockContext ).Get( projectBoardId );
                pdAuditDetails.SetEntity( projectBoard, ResolveRockUrl( "~" ) );
            }
            if ( projectBoard == null )
            {
                projectBoard = new ProjectBoard
                {
                    LavaTemplate = "{% include '~/Plugins/com_blueboxmoon/ProjectManagement/Assets/Lava/ProjectBoardCard.lava' %}",
                    RemoveInactiveCardsAfterDays = 30
                };

                // hide the panel drawer that show created and last modified dates
                pdAuditDetails.Visible = false;
            }

            //
            // Switch everything to read-only if user not allowed to administrate.
            //
            if ( !projectBoard.IsAuthorized( Authorization.ADMINISTRATE, CurrentPerson ) || !IsUserAuthorized( Authorization.EDIT ) )
            {
                tbName.Enabled = false;
                tbIconCssClass.Enabled = false;
                tbRemoveInactiveDays.Enabled = false;
                ceTemplate.Enabled = false;

                gColumns.IsDeleteEnabled = false;
                gColumns.Actions.ShowAdd = false;

                nbEditModeMessage.Text = EditModeMessage.NotAuthorizedToEdit( ProjectBoard.FriendlyTypeName );
            }

            string title = projectBoard.Id > 0 ?
                ActionTitle.Edit( ProjectBoard.FriendlyTypeName ) :
                ActionTitle.Add( ProjectBoard.FriendlyTypeName );
            lTitle.Text = title.FormatAsHtmlTitle();

            hfId.Value = projectBoard.Id.ToString();

            tbName.Text = projectBoard.Name;
            tbIconCssClass.Text = projectBoard.IconCssClass;
            tbRemoveInactiveDays.Text = projectBoard.RemoveInactiveCardsAfterDays.HasValue ? projectBoard.RemoveInactiveCardsAfterDays.ToString() : string.Empty;
            ceTemplate.Text = projectBoard.LavaTemplate;

            BoardColumnState = new List<ColumnState>();
            projectBoard.Columns
                .OrderBy( a => a.Order )
                .ToList()
                .ForEach( a => BoardColumnState.Add( new ColumnState
                {
                    Guid = a.Guid,
                    Name = a.Name
                } ) );
            BindColumnsGrid();
        }

        /// <summary>
        /// Saves the columns.
        /// </summary>
        /// <param name="projectBoardId">The project board identifier.</param>
        /// <param name="columns">The attributes.</param>
        /// <param name="rockContext">The rock context.</param>
        private void SaveColumns( int projectBoardId, List<ColumnState> columns, RockContext rockContext )
        {
            var columnService = new ProjectBoardColumnService( rockContext );
            var cardService = new ProjectBoardCardService( rockContext );

            // Get the existing columns
            var existingColumns = columnService.Queryable()
                .Where( a => a.ProjectBoardId == projectBoardId );

            var selectedColumnGuids = columns.Select( a => a.Guid );

            // Delete any of those columns that were removed in the UI
            foreach ( var column in existingColumns.Where( a => !selectedColumnGuids.Contains( a.Guid ) ) )
            {
                cardService.DeleteRange( column.Cards );
                columnService.Delete( column );
            }

            // Update or add new columns.
            for ( int i = 0; i < columns.Count; i++ )
            {
                var columnState = columns[i];
                var existingColumn = existingColumns.SingleOrDefault( a => a.Guid == columnState.Guid );

                if ( existingColumn == null )
                {
                    columnService.Add( new ProjectBoardColumn
                    {
                        Name = columnState.Name,
                        Guid = columnState.Guid,
                        ProjectBoardId = projectBoardId,
                        Order = i
                    } );
                }
                else
                {
                    existingColumn.Name = columnState.Name;
                    existingColumn.Order = i;
                }
            }

            rockContext.SaveChanges();
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
            var projectBoardService = new ProjectBoardService( rockContext );
            ProjectBoard projectBoard;

            int projectBoardId = int.Parse( hfId.Value );

            if ( projectBoardId == 0 )
            {
                projectBoard = new ProjectBoard();
                projectBoardService.Add( projectBoard );
            }
            else
            {
                projectBoard = projectBoardService.Get( projectBoardId );

                if ( projectBoard == null )
                {
                    return;
                }
            }

            projectBoard.Name = tbName.Text;
            projectBoard.IconCssClass = tbIconCssClass.Text;
            projectBoard.RemoveInactiveCardsAfterDays = tbRemoveInactiveDays.Text.AsIntegerOrNull();
            projectBoard.LavaTemplate = ceTemplate.Text;

            if ( !Page.IsValid || !projectBoard.IsValid )
            {
                // Controls will render the error messages                    
                return;
            }

            rockContext.WrapTransaction( () =>
            {
                rockContext.SaveChanges();

                // Save the Project Board Columns
                SaveColumns( projectBoard.Id, BoardColumnState, rockContext );
            } );

            ProjectMessageHub.BoardModified( projectBoard.Guid );

            NavigateToParentPage();
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
            int projectBoardId = hfId.ValueAsInt();

            if ( projectBoardId != 0 )
            {
                ShowDetail( projectBoardId );
            }
        }

        #endregion

        #region Project Columns

        /// <summary>
        /// Handles the Add event of the gColumns control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void gColumns_Add( object sender, EventArgs e )
        {
            hfColumnId.Value = string.Empty;
            tbColumnName.Text = string.Empty;

            dlgColumn.Show();
        }

        /// <summary>
        /// Handles the Edit event of the gColumns control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs" /> instance containing the event data.</param>
        protected void gColumns_Edit( object sender, RowEventArgs e )
        {
            var columnGuid = ( Guid ) e.RowKeyValue;
            var column = BoardColumnState.Single( a => a.Guid == columnGuid );

            hfColumnId.Value = column.Guid.ToString();
            tbColumnName.Text = column.Name;

            dlgColumn.Show();
        }

        /// <summary>
        /// Handles the GridReorder event of the gColumns control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="GridReorderEventArgs"/> instance containing the event data.</param>
        protected void gColumns_GridReorder( object sender, GridReorderEventArgs e )
        {
            var movedColumn = BoardColumnState.Skip( e.OldIndex ).First();
            if ( movedColumn != null )
            {
                BoardColumnState.Remove( movedColumn );
                BoardColumnState.Insert( e.NewIndex, movedColumn );
            }

            BindColumnsGrid();
        }

        /// <summary>
        /// Handles the Delete event of the gColumns control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs" /> instance containing the event data.</param>
        /// <exception cref="System.NotImplementedException"></exception>
        protected void gColumns_Delete( object sender, RowEventArgs e )
        {
            var guid = ( Guid ) e.RowKeyValue;

            BoardColumnState.RemoveAll( a => a.Guid == guid );

            BindColumnsGrid();
        }

        /// <summary>
        /// Handles the GridRebind event of the gColumns control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void gColumns_GridRebind( object sender, EventArgs e )
        {
            BindColumnsGrid();
        }

        /// <summary>
        /// Handles the SaveClick event of the dlgColumn control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void dlgColumn_SaveClick( object sender, EventArgs e )
        {
            var guid = hfColumnId.Value.AsGuidOrNull();

            if ( guid == null )
            {
                BoardColumnState.Add( new ColumnState
                {
                    Guid = Guid.NewGuid(),
                    Name = tbColumnName.Text
                } );
            }
            else
            {
                var column = BoardColumnState.Single( a => a.Guid == guid.Value );
                column.Name = tbColumnName.Text;
            }

            BindColumnsGrid();

            dlgColumn.Hide();
        }

        /// <summary>
        /// Binds the board column grid.
        /// </summary>
        private void BindColumnsGrid()
        {
            gColumns.DataSource = BoardColumnState
                .Select( a => new
                {
                    Guid = a.Guid,
                    Name = a.Name
                } )
                .ToList();

            gColumns.DataBind();
        }

        #endregion

        #region Support Classes

        /// <summary>
        /// The state that can be serialized in the view state.
        /// </summary>
        private class ColumnState
        {
            /// <summary>
            /// Gets or sets the unique identifier.
            /// </summary>
            /// <value>
            /// The unique identifier.
            /// </value>
            public Guid Guid { get; set; }

            /// <summary>
            /// Gets or sets the name.
            /// </summary>
            /// <value>
            /// The name.
            /// </value>
            public string Name { get; set; }
        }

        #endregion
    }
}
