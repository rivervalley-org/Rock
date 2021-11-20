
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Data.Entity;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;

using Rock;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI.Controls;
using Rock.Attribute;
using Rock.Web.UI;
using org.rivervalley.Engagement.Model;

namespace RockWeb.Plugins.org_rivervalley.Engagement
{
    [DisplayName( "Engagement Index List" )]
    [Category( "RVC > Engagement" )]
    [Description( "Shows the engagement index list." )]

    [LinkedPage( "Detail Page",
        Order = 0,
        Key = "DetailPage" )]

    public partial class EngagementIndexList : RockBlock, ICustomGridColumns
    {
        #region Fields

        int? _categoryId;

        #endregion

        #region Properties

        // used for public / protected properties

        #endregion

        #region Base Control Methods

        //  overrides of the base RockBlock methods (i.e. OnInit, OnLoad)

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );
            gList.GridRebind += gList_GridRebind;

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );

            gList.DataKeyNames = new string[] { "Id" };
            gList.Actions.ShowAdd = true;
            gList.Actions.AddClick += gList_Add;
            gList.GridRebind += gList_GridRebind;
            gList.GridReorder += gList_GridReorder;

            var deleteField = new DeleteField();
            gList.Columns.Add( deleteField );
            deleteField.Click += gList_Delete;
        }

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Load" /> event.
        /// </summary>
        /// <param name="e">The <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );

            _categoryId = PageParameter( "CategoryId" ).AsIntegerOrNull();

            if ( !Page.IsPostBack )
            {
                BindGrid();
            }
        }

        #endregion

        #region Events

        // handlers called by the controls on your block

        /// <summary>
        /// Handles the BlockUpdated event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_BlockUpdated( object sender, EventArgs e )
        {

        }

        /// <summary>
        /// Handles the Add event of the gList control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void gList_Add( object sender, EventArgs e )
        {
            var pageParams = new Dictionary<string, string>();
            pageParams.Add( "CategoryId", _categoryId.ToString() );
            pageParams.Add( "IndexId", "0" );

            NavigateToLinkedPage( "DetailPage", pageParams );
        }

        /// <summary>
        /// Handles the ShowEdit event of the gList control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs"/> instance containing the event data.</param>
        protected void gList_ShowEdit( object sender, RowEventArgs e )
        {
            var pageParams = new Dictionary<string, string>();
            pageParams.Add( "CategoryId", _categoryId.ToString() );
            pageParams.Add( "IndexId", e.RowKeyId.ToString() );

            NavigateToLinkedPage( "DetailPage", pageParams );
        }

        /// <summary>
        /// Handles the GridRebind event of the gPledges control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void gList_GridRebind( object sender, EventArgs e )
        {
            BindGrid();
        }

        /// <summary>
        /// Handles the Delete event of the gDefinedValues control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs" /> instance containing the event data.</param>
        protected void gList_Delete( object sender, RowEventArgs e )
        {
            var rockContext = new RockContext();
            var engagementIndexService = new EngagementIndexService( rockContext );

            var value = engagementIndexService.Get( e.RowKeyId );

            if ( value != null )
            {
                string errorMessage;
                if ( !engagementIndexService.CanDelete( value, out errorMessage ) )
                {
                    mdGridWarningValues.Show( errorMessage, ModalAlertType.Information );
                    return;
                }

                engagementIndexService.Delete( value );
                rockContext.SaveChanges();
            }

            BindGrid();
        }

        /// <summary>
        /// Handles the GridReorder event of the gList control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="GridReorderEventArgs"/> instance containing the event data.</param>
        protected void gList_GridReorder( object sender, GridReorderEventArgs e )
        {
            var rockContext = new RockContext();
            var engagementIndexService = new EngagementIndexService( rockContext );
            var categories = engagementIndexService.Queryable().OrderBy( a => a.Order );
            var changedIds = engagementIndexService.Reorder( categories.ToList(), e.OldIndex, e.NewIndex );
            rockContext.SaveChanges();
            BindGrid();
        }

        /// <summary>
        /// Handles the RowSelected event of the gList control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RowEventArgs"/> instance containing the event data.</param>
        protected void gList_RowSelected( object sender, RowEventArgs e )
        {
            var pageParams = new Dictionary<string, string>();
            pageParams.Add( "CategoryId", _categoryId.ToString() );
            pageParams.Add( "IndexId", e.RowKeyId.ToString() );            

            NavigateToLinkedPage( "DetailPage", pageParams );
        }

        #endregion

        #region Methods

        /// <summary>
        /// Binds the grid.
        /// </summary>
        private void BindGrid( )
        {
            RockContext rockContext = new RockContext();
            EngagementIndexService engagementIndexService = new EngagementIndexService( rockContext );

            var qry = engagementIndexService.Queryable().AsNoTracking().Where( i => i.CategoryId == _categoryId );

            qry = qry.OrderBy( a => a.Order );

            // set the datasource as a query. This allows the grid to only fetch the records that need to be shown based on the grid page and page size
            gList.SetLinqDataSource( qry );
            gList.DataBind();
        }

        #endregion
    }
}