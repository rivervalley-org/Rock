using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.Composition;
using System.Linq;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;
using System.Data.Entity;

using org.rivervalley.GlobalTripChecklists.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.Sandbox
{
    [DisplayName("Global Trip Item Duplicates")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Global Trip Item Duplicates ")]


    public partial class GlobalTripItemDuplicates : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private int tripId = 247020 ;
        private int counter;
        private string tripName;
        private int dupesFound = 0;

        #endregion

        #region Base Control Methods

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);

            

        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            LoadGlobalTripName(tripId);
            lOutputString1.Text = "<h4>" + tripName + " (" + tripId + ")";
            SQLRead();
            lOutputString2.Text = "<br>Duplicates Found:  " + dupesFound + "</h4>";
        }

        #endregion

        #region Events

        #endregion

        #region Methods

        protected void SQLRead()
        {
            string qryString = "";
            qryString = qryString + "SELECT p.Id, p.NickName + ' ' + p.LastName AS Text ";
            qryString = qryString + "FROM Person p ";
            qryString = qryString + "LEFT JOIN GroupMember gm on p.Id = gm.PersonId ";
            qryString = qryString + "WHERE gm.GroupId = " + tripId;

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                counter = 0;
                lOutputString3.Text += "<hr>Partcipant: " + rdr.GetString(1) + " (" + rdr.GetInt32(0) + ")";
                lOutputString3.Text += "<br>Alias Id's ";
                SQLRead2(rdr.GetInt32(0));
                lOutputString3.Text += "<br>Counter: " + counter;
                if(counter > 1)
                {
                    dupesFound++;
                }
            }
            conn.Close();

        }

        protected void SQLRead2(int personId)
        {
            string qryString = "";
            qryString = qryString + "SELECT Id ";
            qryString = qryString + "FROM PersonAlias ";
            qryString = qryString + "WHERE PersonId = " + personId;

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                lOutputString3.Text += " " + rdr.GetInt32(0);
                SQLRead3(rdr.GetInt32(0));
                
            }
            conn.Close();

        }

        protected void SQLRead3(int personId)
        {
            string qryString = "";
            qryString = qryString + "SELECT ItemStatus ";
            qryString = qryString + "FROM _org_rivervalley_GlobalTripItemStatus ";
            qryString = qryString + "WHERE TripGroupId = " + tripId;
            qryString = qryString + "AND TripItemId = 6831 ";
            qryString = qryString + "AND PersonAliasId = " + personId;

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                lOutputString3.Text += " " + rdr.GetBoolean(0);
                if(rdr.GetBoolean(0) == true)
                {
                    counter++;
                }
            }
            conn.Close();
        }

        private void LoadGlobalTripName(int tripId)
        {
            var qry = new GroupService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.Id == tripId);
            foreach (var qRow in qry)
            {
                tripName = qRow.Name;
            }
        }

        #endregion
    }
}