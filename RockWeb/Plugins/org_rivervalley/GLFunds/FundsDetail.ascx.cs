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
    [DisplayName( "GLFunds Detail Page" )]
    [Category( "org_rivervalley > GLFunds" )]
    [Description( "General Ledger Fund Extender for exporting data" )]

    public partial class FundsDetail : Rock.Web.UI.RockBlock
    {
        #region Fields
        private int glFundId;        

        #endregion

        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );
        }

        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );
            pnlDetail.Visible = true;
            if ( !Page.IsPostBack )
            {
                BuildDetailPanel();
            }
        }

        #region Events

        protected void btnDetailCancel_Click( object sender, EventArgs e )
        {
            NavigateToParentPage();
        }

        protected void btnDetail_Click( object sender, EventArgs e )
        {
            int accountId; // Financial Account ID
            int extFundId; // GLFunds Id
            bool tryHF = Int32.TryParse( hfAccountId.Value, out accountId );
            bool tryHF2 = Int32.TryParse( hfExtendedFundId.Value, out extFundId );
          
            ExtendedFunds extendedFund;
            var dataContext = new GLFundsContext();
            var service = new ExtendedFundsService( dataContext );
            
            if (extFundId == 0)
            {
                extendedFund = new ExtendedFunds();
                service.Add( extendedFund );
                extendedFund.FinancialAccountId = accountId;
            }
            else
            {
                extendedFund = service.Get( extFundId );
            }

            extendedFund.Company = tbCompany.Text;
            extendedFund.Fund = tbFund.Text;
            extendedFund.BankAccount = tbBankAccount.Text;
            extendedFund.RevenueAccount = tbRevenueAccount.Text;
            extendedFund.RevenueDepartment = tbRevenueDepartment.Text;
            extendedFund.ProjectCode = tbProjectCode.Text;

            dataContext.SaveChanges();

            NavigateToParentPage();
            
        }

        #endregion

        #region Methods
        
        protected void BuildDetailPanel()
        {
            int? accountId = PageParameter( "accountId" ).AsIntegerOrNull();
            if ( accountId.HasValue ) { glFundId = accountId.Value; } else { glFundId = 0; }
            
            if (glFundId != 0)
            {
                hfAccountId.Value = glFundId.ToString();
                var rockContext = new RockContext();
                ExtendedFundsService extendedFundsService = new ExtendedFundsService(new GLFundsContext() ) ;
                var extendedFunds = extendedFundsService.Queryable().FirstOrDefault( f => f.FinancialAccountId == glFundId );
                if ( extendedFunds != null )
                {
                    hfExtendedFundId.Value = extendedFunds.Id.ToString();
                    tbCompany.Text = extendedFunds.Company;
                    tbFund.Text = extendedFunds.Fund;
                    tbBankAccount.Text = extendedFunds.BankAccount;
                    tbRevenueAccount.Text = extendedFunds.RevenueAccount;
                    tbRevenueDepartment.Text = extendedFunds.RevenueDepartment;
                    tbProjectCode.Text = extendedFunds.ProjectCode;
                }
                else
                {
                    // no existing GLFunds record exists
                    hfExtendedFundId.Value = 0.ToString();
                }                              
            }
            else
            {
                // we can't assign a extended fund record until after the GL account is established
                pnlDetail.Visible = false;
                pnlError.Visible = true;
                nbWarningMessage.Text = string.Empty;
                nbWarningMessage.Text = "The GL account must be set up first before a Extended GL funds numbers can be assigned. After adding a new GL account, return to add the Extended GL fund numbers .";

            }            
        }

        #endregion
    }
}
