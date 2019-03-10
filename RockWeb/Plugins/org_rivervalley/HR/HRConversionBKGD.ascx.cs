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

namespace RockWeb.Plugins.org_rivervalley.HR
{
    [DisplayName("HR Conversion Background Check")]
    [Category("org_rivervalley > HR")]
    [Description("HR Background Elements Conversion")]

    public partial class HRConversionBKGD : Rock.Web.UI.RockBlock
    {
        #region Fields

        private Person cPerson = null;
        private int arenaPersonId;
        private int rockPersonId;
        private string rockName;
        private int convertedPersonId;
        
        private int counter;

        #endregion

        private string connString = ConfigurationManager.ConnectionStrings["ArenaContext"].ConnectionString;

        #region Base Control Methods

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);
            lOutputString.Text = "";
            //arenaSQL();
            lOutputString.Text += "<br>Count: " + counter;
        }

        #endregion

        #region Methods

        protected void arenaSQL()
        {
            string qryString = "SELECT top 1 * FROM ssnTemp3";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                counter++;
                rockPersonId = 0;
                arenaPersonId = rdr.GetInt32(0);
                GetRockPersonDetail();
                if (rockPersonId > 0)
                {
                    var rockContext = new RockContext();
                    cPerson = new PersonService(rockContext).Get(rockPersonId);
                    cPerson.LoadAttributes(rockContext);
                    lOutputString.Text += "<br>ARENA " + arenaPersonId + " ==> ROCK " + rockName + " (" + rockPersonId + ")";
                    ProcessSSN(rdr.GetString(1));
                }
                else
                {
                    lOutputString.Text += "<br>ARENA " + arenaPersonId + " (" + arenaPersonId + ") ==> ***ROCK Person Not Found ***";
                }
            }
            conn.Close();
        }

        protected void ProcessSSN(string ssn)
        {
            cPerson.SetAttributeValue("SSNumber", Rock.Security.Encryption.EncryptString(ssn));
            //cPerson.SaveAttributeValues();
            
        }

        protected void ConvertArenaToRockPersonId(int personId)
        {
            // get Person data based on Foreign Key 

            var rockContext = new RockContext();
            var qry = new PersonService(rockContext).Queryable();
            qry = qry.Where(a => a.ForeignId == personId);
            foreach (var row in qry)
            {
                convertedPersonId = row.Id;
            }
        }

        protected void GetRockPersonDetail()
        {
            // get Person data based on Foreign Key 

            var rockContext = new RockContext();
            var qry = new PersonService(rockContext).Queryable();
            qry = qry.Where(a => a.ForeignId == arenaPersonId);
            foreach (var row in qry)
            {
                rockPersonId = row.Id;
                rockName = row.FullName;
            }
        }

        #endregion

        #region Events
        
        #endregion
    }
}