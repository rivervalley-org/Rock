using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;

using org.rivervalley.GLFunds.Data;
using org.rivervalley.GLFunds.Model;

using Rock;
using Rock.Constants;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;
using Rock.Attribute;

namespace RockWeb.Plugins.org_rivervalley.GLFunds
{
    [DisplayName( "GLFunds Detail List Page" )]
    [Category( "org_rivervalley > GLFunds" )]
    [Description( "General Ledger Fund Extender List" )]


    public partial class FundsDetailList : Rock.Web.UI.RockBlock
    {
        #region Fields

        public int? phaseSort = 0;

        #endregion

        #region Base Control Methods

        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

            bool canEdit = IsUserAuthorized( Rock.Security.Authorization.EDIT );

            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );

            gFunds.RowItemText = "ID";
            gFunds.DataKeyNames = new string[] { "id" };
            gFunds.GridRebind += gFunds_GridRebind;

        }

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

        protected void Block_BlockUpdated( object sender, EventArgs e )
        {

        }

        protected void gFunds_GridRebind( object sender, EventArgs e )
        {
            BindGrid();
        }

        private void BindGrid()
        {
            var service = new ExtendedFundsService( new GLFundsContext() );
            SortProperty sortProperty = gFunds.SortProperty;
            var qry = service.Queryable("FinancialAccount");

            // Sort results
            if ( sortProperty != null )
            {
                gFunds.DataSource = qry.Sort( sortProperty ).ToList();
            }
            else
            {
                gFunds.DataSource = qry.OrderBy( x => x.FinancialAccountId ).ToList();
            }

            

            gFunds.DataBind();
        }

        

        #endregion

    }
}