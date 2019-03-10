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
    [DisplayName( "GLFunds Conversion Missionaries" )]
    [Category( "org_rivervalley > GLFunds" )]
    [Description( "General Ledger Conversion" )]

    public partial class GLConversion2 : Rock.Web.UI.RockBlock
    {
        #region Fields
        int rockFundId;
        int arenaFundId;
        int rockPersonId;
        int counter;
        Guid mPersonGuid;

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
            arenaSQL();
            lOutputString.Text += "<br>Count: " + counter; 
        }

        #endregion

        #region Methods

        protected void arenaSQL()
        {
            var rockContext = new RockContext();

            arenaFundId = 0;

            string qryString = "SELECT top 1 * FROM cust_RVC_Fund_Sort_Table";
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
                    //lOutputString.Text += "<br>rock fund " + rockFundId;
                    int moId = rdr.IsDBNull(4) ? -1 : rdr.GetInt32(4);
                    int mPersonId = rdr.IsDBNull(5) ? 0 : rdr.GetInt32(5);
                    int uList = rdr.IsDBNull(6) ? -1 : rdr.GetInt32(6);
                    int restricted = rdr.IsDBNull(3) ? -1 : rdr.GetInt32(3);
                    DateTime? sDate = rdr[7] as DateTime?;
                    DateTime? eDate = rdr[8] as DateTime?;
                    if (mPersonId > 0)
                    {
                        rockPersonId = 0;
                        PersonDetail(mPersonId);
                        //lOutputString.Text += "<br>rock person " + rockPersonId;
                        PersonAliasService personAliasService = new PersonAliasService(new RockContext());
                        var misPerson = personAliasService.Queryable().FirstOrDefault(p => p.PersonId == rockPersonId);
                        if (misPerson != null)
                        {
                            mPersonGuid = misPerson.Guid;
                        }                           
                    }
                        
                    FinancialAccount account = null;
                    account = new FinancialAccountService(new RockContext()).Get(rockFundId);                    
                    account.LoadAttributes();

                    /*
                    if (moId > -1) { account.SetAttributeValue("MissionsOrgID", moId); }
                    if (mPersonGuid != Guid.Empty) { account.SetAttributeValue("MissionaryName", mPersonGuid); }
                    if (uList > -1) { account.SetAttributeValue("Unlisted", uList); }
                    if (sDate.HasValue) { account.SetAttributeValue("FeatureStartDate", sDate); }
                    if (sDate.HasValue) { account.SetAttributeValue("FeatureStopDate", eDate); }
                    */

                    if (restricted > 0) { account.SetAttributeValue("Restricted", restricted); }
                    //lOutputString.Text += "restricted:" + restricted;
                    //account.SaveAttributeValues(rockContext);

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

        protected void PersonDetail(int mPersonId)
        {
            // get Person ID based on Foreign Key 

            var rockContext = new RockContext();
            var qry = new PersonService(rockContext).Queryable();
            qry = qry.Where(a => a.ForeignId == mPersonId);
            foreach (var row in qry)
            {
                rockPersonId = row.Id;               
            }
        }

        #endregion

        #region Events

        #endregion

    }
}