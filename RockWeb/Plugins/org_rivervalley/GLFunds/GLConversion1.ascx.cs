using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

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
    [DisplayName( "GLFunds Conversion" )]
    [Category( "org_rivervalley > GLFunds" )]
    [Description( "General Ledger Conversion" )]

    public partial class GLConversion1: Rock.Web.UI.RockBlock
    {
        #region Fields
        int rockFundId;
        int arenaFundId;
        int counter;

        #endregion

        private string connString = ConfigurationManager.ConnectionStrings["ArenaContext"].ConnectionString;

        #region Base Control Methods

        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );
        }

        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );
            lOutputString.Text = "";
            //arenaSQL();
            lOutputString.Text += "Count: " + counter; 
        }

        #endregion

        #region Methods

        protected void arenaSQL()
        {
            arenaFundId = 0;
            
            string qryString = "SELECT * FROM ctrb_fund";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                counter++;
                arenaFundId = rdr.GetInt32(0);

                if (arenaFundId != 0)
                {
                    rockFundId = 0;
                    FinancialAccountDetail(rdr.GetInt32(0));
                }                
                if (rockFundId != 0)
                {
                    rockDetail(arenaFundId, rockFundId, rdr.GetString(16), rdr.GetString(17), rdr.GetString(18), rdr.GetString(19), rdr.GetString(20), rdr.GetString(21));
                }
            }
            conn.Close();
        }

        protected void FinancialAccountDetail(int arenaAccount)
        {
            // get FinancialAccount ID based on Foreign Key 

            var rockContext = new RockContext();
            var qry = new FinancialAccountService(rockContext).Queryable();
            qry = qry.Where(a => a.ForeignId == arenaAccount);
            foreach (var row in qry)
            {
                rockFundId = row.Id;
            }
        }
        
        protected void rockDetail(int arenaFund, int rockFund, string company, string fund, string bank, string revAcct, string revDept, string project)
        {
            ExtendedFunds extendedFund;
            var dataContext = new GLFundsContext();
            var service = new ExtendedFundsService(dataContext);

            extendedFund = new ExtendedFunds();
            service.Add(extendedFund);
            extendedFund.FinancialAccountId = rockFund;
            extendedFund.Company = company.Trim();
            extendedFund.Fund = fund.Trim();
            extendedFund.BankAccount = bank.Trim();
            extendedFund.RevenueAccount = revAcct.Trim();
            extendedFund.RevenueDepartment = revDept.Trim();
            extendedFund.ProjectCode = project.Trim();           

            //dataContext.SaveChanges();
        }

        #endregion

        #region Events

        #endregion

    }
}