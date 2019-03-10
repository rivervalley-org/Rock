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
    [DisplayName("Global Trip Assigned Item Selection")]
    [Category("org_rivervalley > GlobalTripChecklists")]
    [Description("Global Trip Assigned Item Selection")]
    [TextField("GlobalTeamYears", "List the Parent Group Id's to process (up to three years) - seperate with a comma. For example: 1234,45653,548224")]


    public partial class GlobalTripAssignedItemSelection : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private GlobalTripAssignedItem newItem = null;
        private int tripId;
        private int itemId;
        private int counter;
        private List<int> globalTeamYears = new List<int>();
        private string blockYears;
        //private string tripYears;
        private int yearOne = 0;
        private int yearTwo = 0;
        private int yearThree = 0;

        private List<int> tripItemsId = new List<int>();

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            pnlTripSelection.Visible = true;
            pnlReport.Visible = false;
            pnlAddItem.Visible = false;
            pnlComplete.Visible = false;
            GetTripYears();
            LoadGlobalTripDropDownValues();

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
            hfGlobalTripId.Value = tripId.ToString();

            pnlTripSelection.Visible = false;
            pnlReport.Visible = true;
            pnlAddItem.Visible = false;

            LoadGlobalTripName(tripId);
            BuildTripItems(tripId);            
        }

        protected void btnItemAdd_Click(object sender, EventArgs e)
        {
            tripId = int.Parse(ddGlobalTrips.Text);

            pnlTripSelection.Visible = false;
            pnlReport.Visible = false;
            pnlAddItem.Visible = true;
            pnlComplete.Visible = false;

            LoadGlobalTripName(tripId);

            BuildExistingItemsList(tripId); // so we can exclude items already selected

            rblPeriods.Text = 2.ToString();
            BuildItemsDropDownValues();                        
        }

        protected void btnItemSaved_Click(object sender, EventArgs e)
        {
            tripId = int.Parse(ddGlobalTrips.Text);

            pnlTripSelection.Visible = false;
            pnlReport.Visible = false;
            pnlAddItem.Visible = false;
            pnlComplete.Visible = true;

            itemId = int.Parse(ddItems.Text);

            int period;            
            period = Int32.Parse(rblPeriods.Text);

            AddAssignedItem(tripId, itemId, period);            
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
                lTripName2.Text = qRow.Name;
            }
        }

        private void BuildExistingItemsList(int trip)
        {
            var qry = new GlobalTripAssignedItemService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.TripGroupId == trip);
            foreach (var qRow in qry)
            {
                tripItemsId.Add(qRow.TripItemId);
            }
        }

        private void AddAssignedItem(int trip, int item, int period)
        {
            var dataContext = new RockContext();
            var service = new GlobalTripAssignedItemService(dataContext);
            newItem = new GlobalTripAssignedItem();
            service.Add(newItem);

            newItem.TripGroupId = trip;
            newItem.TripItemId = item;
            newItem.DueDateGroupId = period;

            dataContext.SaveChanges();
        }

        private void BuildTripItems(int trip)
        {
            string qryString = "";
            qryString = qryString + "SELECT ai.Id, ai.TripGroupId, ai.TripItemId, ai.DueDateGroupId, dv.Value  ";
            qryString = qryString + "FROM _org_rivervalley_GlobalTripAssignedItems ai ";
            qryString = qryString + "LEFT JOIN DefinedValue dv on ai.TripItemId = dv.Id ";
            qryString = qryString + "WHERE TripGroupId = " + trip + " ";
            qryString = qryString + "ORDER BY dv.Value";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                string eLink = "/GlobalTeamsAssignedItemEdit?id=" + rdr.GetInt32(0);
                string editLink = "<a href=" + eLink + "&type=edit><i class='fa fa-edit'></i></a>";
                string dLink = "/GlobalTeamsAssignedItemEdit?id=" + rdr.GetInt32(0);
                string deleteLink = "<a href=" + dLink + "&type=delete><i class='fa fa-trash'></i></a>";
                WriteOutputString(rdr.GetString(4),rdr.GetInt32(3).ToString(), editLink, deleteLink);
;            }
            conn.Close();
        }

        private void BuildItemsDropDownValues()
        {
            counter = 0;
            var qry = new DefinedValueService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.DefinedTypeId == 319);
            var qrySorted = qry.OrderBy(a => a.Value);
            var items = ddItems.Items;
            string isActive = "False"; 
            foreach (var qRow in qrySorted)
            {

                if (tripItemsId.Contains(qRow.Id))
                {
                    //skip
                }
                else
                {                    
                    var definedValue = new DefinedValueService(new RockContext()).Get(qRow.Id);
                    definedValue.LoadAttributes();
                    isActive = definedValue.GetAttributeValue("Active");
                    if (isActive == "True")
                    {
                        ddItems.Items.Add(new ListItem(qRow.Value, qRow.Id.ToString()));
                        counter++;
                    }
                    
                }
            }           
        }


        private void WriteOutputString(string cellOne, string cellTwo, string cellThree, string cellFour)
        {
            lOutputString.Text += "<tr>";
            lOutputString.Text += "<td class='grid-select-cell' style='text - align: left; '>" + cellOne + "</td>";
            lOutputString.Text += "<td class='grid-select-cell' style='text - align: left; '>" + cellTwo + "</td>";
            lOutputString.Text += "<td class='grid-select-cell' style='text - align: left; '>" + cellThree + "</td>";
            lOutputString.Text += "<td class='grid-select-cell' style='text - align: left; '>" + cellFour + "</td>";
            lOutputString.Text += "</tr>";
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