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

namespace RockWeb.Plugins.org_rivervalley.GlobalTripChecklists
{
    [DisplayName("Global Trip Dashboard Modified")]
    [Category("org_rivervalley > GlobalTripChecklists")]
    [Description("Global Trip Dashboard Modified for testing")]
    [TextField("GlobalTeamYears", "List the Parent Group Id's to process (up to three years) - seperate with a comma. For example: 1234,45653,548224")]


    public partial class GlobalTripDashboardModified : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private int tripId;
        
        private bool itemStatus;
        private string itemValue;
        private Person tripPerson = null;
        private List<string> tripItemsText = new List<string>();
        private List<int> tripItemsNumber = new List<int>();
        private List<int> tripParticipants = new List<int>();
        private List<int> personAliasList = new List<int>();
        private string aliasString;
        private List<int> globalTeamYears = new List<int>();
        private string blockYears;
        
        private int yearOne = 0;
        private int yearTwo = 0;
        private int yearThree = 0;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                pnlTripSelection.Visible = true;
                pnlReport.Visible = false;
                GetTripYears();
                LoadGlobalTripDropDownValues();
            }
        }

        #endregion

        #region Events

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnTripSelection_Click(object sender, EventArgs e)
        {
            tripId = int.Parse(ddGlobalTrips.Text);
            pnlTripSelection.Visible = false;
            pnlReport.Visible = true;
            LoadGlobalTripName(tripId);            
            BuildTripItems(tripId);
            GetParticipants(tripId);
            lOutputString.Text += "<tr><td><b>Participants</b></td>";
            foreach (string item in tripItemsText)
            {
                lOutputString.Text += "<td><b>" + item + "</b></td>";
            }
            lOutputString.Text += "<td><b>Notes</b></td>";
            lOutputString.Text += "</tr>";

            // cycle through each participant
            foreach (int pAliasId in tripParticipants)
            {
                itemValue = "";
                // PersonAliasId is used
                var rockContext = new RockContext();
                var personAliasService = new PersonAliasService(rockContext);
                var personAlias = personAliasService.Get(pAliasId);
                lOutputString.Text += "<tr><td>" + personAlias.Person.FullName + "</td>";
                // we need to process all participant alias ids for proper data handling
                aliasString = "";
                BuildParticipantAliasIds(personAlias.PersonId);
                lDebugString.Text += "<br> Participant: " + personAlias.PersonId + " aliasList: " + aliasString;

                foreach (int item in tripItemsNumber)
                {
                    itemStatus = false;
                    //GetItemStatus(pAliasId, tripId, item);
                    CheckItemFormStatusByAliasList(tripId, item, aliasString);
                    if (itemStatus)
                    {
                        lOutputString.Text += "<td class=\"true\"><font color=#009900><i class=\"fas fa-check\"></i></font></td>";
                    }
                    else
                    {
                        lOutputString.Text += "<td class=\"false\"><font color=#CC0000><i class=\"fas fa-times\"></font></td>";
                    }                    
                }
                //GetItemStatus(pAliasId, tripId, 6896);
                CheckItemFormStatusByAliasList(tripId, 6896, aliasString);
                lOutputString.Text += "<td>" + itemValue + "</td>";
            }
        }

        #endregion

        #region Methods

        private void LoadGlobalTripDropDownValues()
        {
            var qry = new GroupService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.ParentGroupId == yearOne || row.ParentGroupId == yearTwo || row.ParentGroupId == yearThree);
            var qrySorted = qry.OrderBy(a => a.Name);
            ddGlobalTrips.Items.Add(new ListItem("", "0"));
            foreach (var qRow in qrySorted)
            {
                ddGlobalTrips.Items.Add(new ListItem(qRow.Name, qRow.Id.ToString()));
            }
        }

        private void LoadGlobalTripName(int tripId)
        {
            var qry = new GroupService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.Id == tripId);
            foreach (var qRow in qry)
            {
                lTripName.Text = qRow.Name;
            }
        }

        private void BuildTripItems(int trip)
        {
            string qryString = "";
            qryString = qryString + "SELECT ai.TripGroupId, ai.TripItemId, dv.Value, av.Value  ";
            qryString = qryString + "FROM _org_rivervalley_GlobalTripAssignedItems ai ";
            qryString = qryString + "LEFT JOIN DefinedValue dv on ai.TripItemId = dv.Id ";
            qryString = qryString + "LEFT JOIN AttributeValue av ON av.EntityId = ai.TripItemId ";
            qryString = qryString + "WHERE TripGroupId = " + trip + " ";
            qryString = qryString + "AND av.AttributeId = 9166 ";
            qryString = qryString + "ORDER BY dv.Value";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                tripItemsNumber.Add(rdr.GetInt32(1));
                tripItemsText.Add(rdr.GetString(3));
            }
            conn.Close();            
        }

        private void GetParticipants(int trip)
        {
            string qryString = "";
            qryString = qryString + "SELECT p.Id, p.NickName + ' ' + p.LastName AS Text ";
            qryString = qryString + "FROM Person p ";
            qryString = qryString + "LEFT JOIN GroupMember gm on p.Id = gm.PersonId ";
            qryString = qryString + "WHERE gm.GroupId = " + trip;

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                var rockContext = new RockContext();
                tripPerson = new PersonService(rockContext).Get(rdr.GetInt32(0));
                int aliasId = tripPerson.PrimaryAliasId ?? default(int);                
                tripParticipants.Add(aliasId);
            }
            conn.Close();
        }

        //private void GetItemStatus(int alias, int trip, int item)
        //{
        //    var qry = new GlobalTripItemStatusService(new RockContext()).Queryable().AsNoTracking();
        //    qry = qry.Where(row => row.PersonAliasId == alias && row.TripGroupId == trip && row.TripItemId == item);
        //    foreach (var qRow in qry)
        //    {
        //        if (qRow.ItemStatus)
        //        {
        //            itemStatus = qRow.ItemStatus;
        //        }
        //        if (item == 6896)
        //        {
        //            itemValue = qRow.ItemValue;
        //        }
        //    }
        //}

        protected void BuildParticipantAliasIds(int personId)
        {
            personAliasList.Clear();
            var paQry = new PersonAliasService(new RockContext()).Queryable();
            paQry = paQry
                .Where(row => row.PersonId == personId)
                .OrderBy(row => row.Id);

            foreach (var qRow in paQry)
            {
                personAliasList.Add(qRow.Id);
            }
            aliasString = "";
            var itemCount = personAliasList.Count;
            var counter = 0;
            foreach (int item in personAliasList)
            {
                // build alias string for SQL statement
                counter++;
                aliasString = aliasString + item;
                if (counter < itemCount)
                {
                    aliasString = aliasString + ",";
                }
            }
        }

        private void CheckItemFormStatusByAliasList(int trip, int item, string paList)
        {
            string qryString = "";
            qryString = qryString + "SELECT TOP 1 ItemStatus, ItemValue  ";
            qryString = qryString + "FROM _org_rivervalley_GlobalTripItemStatus ";
            qryString = qryString + "WHERE TripGroupId = " + trip;
            qryString = qryString + "AND TripItemId = " + item;
            qryString = qryString + "AND PersonAliasId IN (" + paList + ")";
            qryString = qryString + "ORDER BY ID DESC";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                lDebugString.Text += "<br>item  " + item + " | " + rdr.GetBoolean(0);
                if (rdr.GetBoolean(0) == true)
                {
                    itemStatus = true;
                }
                else
                {
                    itemStatus = false;
                }

                if (item == 6896)
                {
                    if (rdr["ItemValue"] != DBNull.Value)
                    {
                        itemValue = rdr.GetString(1);
                    }
                }
            }
            conn.Close();
        }

        protected void GetTripYears()
        {
            // get ids from block list
            blockYears = GetAttributeValue("GlobalTeamYears");
            string[] ids = blockYears.Split(',');
            foreach (var item in ids)
            {
                if (item != "")
                {
                    var id = Int32.Parse(item);
                    globalTeamYears.Add(id);
                }
                else
                {
                    globalTeamYears.Add(00000);
                }
            }
            
            int counter = 0;
            foreach (int item in globalTeamYears)
            {
                counter++;
                if (counter == 1)
                {
                    yearOne = item;
                }
                if (counter == 2)
                {
                    yearTwo = item;
                }
                if (counter == 3)
                {
                    yearThree = item;
                }
            }
        }

        #endregion
    }
}