﻿
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
    /// <summary>
    /// Template block for developers to use to start a new block.
    /// </summary>
    [DisplayName( "Engagement Category List" )]
    [Category( "RVC > Engagement" )]
    [Description( "A list of engagement categories." )]

    [LinkedPage( "Detail Page",
        Order = 0,
        Key = "DetailPage" )]
    public partial class EngagementCategoryList : RockBlock, ICustomGridColumns
    {
        #region Fields

        // used for private variables

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

            if ( !Page.IsPostBack )
            {
                BindGrid();
            }
        }

        #endregion

        #region Events

        /// <summary>
        /// Handles the BlockUpdated event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_BlockUpdated( object sender, EventArgs e )
        {

        }
        protected void gList_Add( object sender, EventArgs e )
        {
            NavigateToLinkedPage( "DetailPage", "CategoryId", 0 );
        }

        protected void gList_ShowEdit( object sender, RowEventArgs e )
        {
            NavigateToLinkedPage( "DetailPage", "CategoryId", e.RowKeyId );
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
            var engagementCategoryService = new EngagementCategoryService( rockContext );

            EngagementCategory value = engagementCategoryService.Get( e.RowKeyId );

            if ( value != null )
            {
                string errorMessage;
                if ( !engagementCategoryService.CanDelete( value, out errorMessage ) )
                {
                    mdGridWarningValues.Show( errorMessage, ModalAlertType.Information );
                    return;
                }

                engagementCategoryService.Delete( value );
                rockContext.SaveChanges();
            }

            BindGrid();
        }

        protected void gList_GridReorder( object sender, GridReorderEventArgs e )
        {
            var rockContext = new RockContext();
            var engagementCategoryService = new EngagementCategoryService( rockContext );
            var categories = engagementCategoryService.Queryable().OrderBy( a => a.Order );
            var changedIds = engagementCategoryService.Reorder( categories.ToList(), e.OldIndex, e.NewIndex );
            rockContext.SaveChanges();
            BindGrid();
        }

        protected void gList_RowSelected( object sender, RowEventArgs e )
        {
            NavigateToLinkedPage( "DetailPage", "CategoryId", e.RowKeyId );
        }

        #endregion

        #region Methods

        /// <summary>
        /// Binds the grid.
        /// </summary>
        private void BindGrid()
        {
            RockContext rockContext = new RockContext();
            EngagementCategoryService engagementCategoryService = new EngagementCategoryService( rockContext );

            var qry = engagementCategoryService.Queryable().AsNoTracking();

            qry = qry.OrderBy( a => a.Order );

            // set the datasource as a query. This allows the grid to only fetch the records that need to be shown based on the grid page and page size
            gList.SetLinqDataSource( qry );
            gList.DataBind();
        }

        #endregion
    }
}