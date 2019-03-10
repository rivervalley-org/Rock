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

namespace RockWeb.Plugins.org_rivervalley.MAP.Other
{
    [DisplayName( "MAP Conversion 2" )]
    [Category( "org_rivervalley > MAP" )]
    [Description( "MAP Table Conversion" )]

    public partial class MAPConversion2: Rock.Web.UI.RockBlock
    {
        #region Fields
        
        private Person cPerson = null;
        //private Person sPerson = null;
        //private int sPersonId;
        private int arenaPersonId;
        private int rockPersonId;
        private string rockName;
        private int convertedPersonId;
        //private int primaryPerson;
        //private int secondaryPerson;
        //private int active;
        //private int status;
        private int state;
        private int type;
        private int counter;
        //private Boolean spouse;

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
            string qryString = "select * from cust_rvc_map_profile_advocate where mpa_id=19";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                counter++;
                rockPersonId = 0;
                arenaPersonId = rdr.GetInt32(1);
                type = rdr.GetInt32(14);
                state = rdr.GetInt32(11);


                GetRockPersonDetail();
                if (rockPersonId > 0)
                {
                    var rockContext = new RockContext();
                    cPerson = new PersonService(rockContext).Get(rockPersonId);
                    cPerson.LoadAttributes(rockContext);                

                    lOutputString.Text += "<br>ARENA " + rdr.GetInt32(0) + "  (" + arenaPersonId + ") ==> ROCK " + rockName + " (" + rockPersonId + ")";
                    lOutputString.Text += " Type: " + type + " State: " + state;

                    cPerson.SetAttributeValue("MAPAdvocateApplicationStatus", "Active");
                    if (state == 0)
                    {
                        cPerson.SetAttributeValue("MAPAdvocateApplicationState", "InProcess");
                    }
                    if (state == 2)
                    {
                        cPerson.SetAttributeValue("MAPAdvocateApplicationState", "Approved");
                    }

                    //1 ^ Advocate,2 ^ Lead Advocate,3 ^ Administrator
                    if (type == 1)
                    {                        
                        cPerson.SetAttributeValue("MAPAdvocateType", "1");
                    }
                    if (type == 2)
                    {
                        cPerson.SetAttributeValue("MAPAdvocateType", "2");
                    }
                    if (type == 3)
                    {
                        cPerson.SetAttributeValue("MAPAdvocateType", "3");
                    }
                    cPerson.SaveAttributeValues();
                }
                else
                {
                    lOutputString.Text += "<br>ARENA " + rdr.GetInt32(0) + " (" + arenaPersonId + ") ==> ***ROCK Person Not Found ***";
                }
            }
            conn.Close();
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