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
    [DisplayName("Global Trip Assignment")]
    [Category("org_rivervalley > GlobalTripChecklists")]
    [Description("Global Trip Assignment")]
    [TextField("GlobalTeamYears", "List the Parent Group Id's to process (up to three years) - seperate with a comma. For example: 1234,45653,548224")]


    public partial class GlobalTripAssignment : Rock.Web.UI.RockBlock
    {
        #region Fields
        private int tripId;
        private int itemId;
        private bool tripItemsExist;
        private string tripName;
        private GlobalTripAssignedItem newItem = null;
        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private List<int> tripItemsId = new List<int>();
        private int item1 = 0;
        private int item2 = 0;
        private int item3 = 0;
        private int item4 = 0;
        private int item5 = 0;
        private int item6 = 0;
        private int item7 = 0;
        private int item8 = 0;
        private int item9 = 0;
        private int item10 = 0;
        private int item11 = 0;
        private int item12 = 0;
        private string itemName;
        private string itemDueDatePeriod;
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
                pnlAssignment.Visible = false;
                pnlAssignmentDates.Visible = false;
                pnlComplete.Visible = false;
                pnlComplete.Visible = false;
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
            hfGlobalTripId.Value = tripId.ToString();

            tripItemsExist = false;
            CheckTripSelection(tripId);
            if(tripItemsExist)
            {
                pnlError.Visible = true;
                pnlTripSelection.Visible = true;
                pnlAssignment.Visible = false;
                pnlAssignmentDates.Visible = false;
                pnlComplete.Visible = false;
                GetTripYears();
                LoadGlobalTripDropDownValues();
                LoadGlobalTripName(tripId);
                lErrorString.Text = "The selected team (" + tripName + ") has assigned items already.";
                lErrorString.Text += "<br>Use the Edit Team Assigned Items option to edit this team.";
            }
            else
            {
                pnlError.Visible = false;
                pnlTripSelection.Visible = false;
                pnlAssignment.Visible = true;
                pnlAssignmentDates.Visible = false;
                pnlComplete.Visible = false;
                LoadGlobalTripName(tripId);
                BuildCheckboxList();
            }            
        }

        protected void btnAssignment_Click(object sender, EventArgs e)
        {
            tripId = int.Parse(hfGlobalTripId.Value);
            lDebugString.Text = "Trip " + tripId;

            pnlError.Visible = false;
            pnlTripSelection.Visible = false;
            pnlAssignment.Visible = false;
            pnlAssignmentDates.Visible = true;
            pnlComplete.Visible = false;

            foreach (ListItem item in cbList.Items)
            {
                if (item.Selected)
                {
                    itemId = 0;
                    BuildCheckboxListId(item.Value);
                    if(itemId > 0)
                    {
                        GetItemInfo(itemId);
                        int period = int.Parse(itemDueDatePeriod);
                        AddAssignedItem(itemId,tripId, period);
                    }
                }
            }

            pnlError.Visible = false;
            pnlTripSelection.Visible = false;
            pnlAssignment.Visible = false;
            pnlAssignmentDates.Visible = true;
            pnlComplete.Visible = false;

            LoadGlobalTripName(tripId);
            BuildAssignedItemList(tripId);
            int counter = 0;
            foreach (int tItem in tripItemsId)
            {
                counter++;
                switch (counter)
                {
                    case 1:
                        GetItemInfo(tItem);
                        lItem1.Text = "<b>" + itemName + "</b><br>";
                        lItem1.Visible = true;
                        rblPeriods1.Visible = true;
                        rblPeriods1.Text = itemDueDatePeriod;
                        break;
                    case 2:
                        GetItemInfo(tItem);
                        lItem2.Text = "<b>" + itemName + "</b><br>";
                        lItem2.Visible = true;
                        rblPeriods2.Visible = true;
                        rblPeriods2.Text = itemDueDatePeriod;
                        break;
                    case 3:
                        GetItemInfo(tItem);
                        lItem3.Text = "<b>" + itemName + "</b><br>";
                        lItem3.Visible = true;
                        rblPeriods3.Visible = true;
                        rblPeriods3.Text = itemDueDatePeriod;
                        break;
                    case 4:
                        GetItemInfo(tItem);
                        lItem4.Text = "<b>" + itemName + "</b><br>";
                        lItem4.Visible = true;
                        rblPeriods4.Visible = true;
                        rblPeriods4.Text = itemDueDatePeriod;
                        break;
                    case 5:
                        GetItemInfo(tItem);
                        lItem5.Text = "<b>" + itemName + "</b><br>";
                        lItem5.Visible = true;
                        rblPeriods5.Visible = true;
                        rblPeriods5.Text = itemDueDatePeriod;
                        break;
                    case 6:
                        GetItemInfo(tItem);
                        lItem6.Text = "<b>" + itemName + "</b><br>";
                        lItem6.Visible = true;
                        rblPeriods6.Visible = true;
                        rblPeriods6.Text = itemDueDatePeriod;
                        break;
                    case 7:
                        GetItemInfo(tItem);
                        lItem7.Text = "<b>" + itemName + "</b><br>";
                        lItem7.Visible = true;
                        rblPeriods7.Visible = true;
                        rblPeriods7.Text = itemDueDatePeriod;
                        break;
                    case 8:
                        GetItemInfo(tItem);
                        lItem8.Text = "<b>" + itemName + "</b><br>";
                        lItem8.Visible = true;
                        rblPeriods8.Visible = true;
                        rblPeriods8.Text = itemDueDatePeriod;
                        break;
                    case 9:
                        GetItemInfo(tItem);
                        lItem9.Text = "<b>" + itemName + "</b><br>";
                        lItem9.Visible = true;
                        rblPeriods9.Visible = true;
                        rblPeriods9.Text = itemDueDatePeriod;
                        break;
                    case 10:
                        GetItemInfo(tItem);
                        lItem10.Text = "<b>" + itemName + "</b><br>";
                        lItem10.Visible = true;
                        rblPeriods10.Visible = true;
                        rblPeriods10.Text = itemDueDatePeriod;
                        break;
                    case 11:
                        GetItemInfo(tItem);
                        lItem11.Text = "<b>" + itemName + "</b><br>";
                        lItem11.Visible = true;
                        rblPeriods11.Visible = true;
                        rblPeriods11.Text = itemDueDatePeriod;
                        break;
                    case 12:
                        GetItemInfo(tItem);
                        lItem12.Text = "<b>" + itemName + "</b><br>";
                        lItem12.Visible = true;
                        rblPeriods12.Visible = true;
                        rblPeriods12.Text = itemDueDatePeriod;
                        break;
                }
            }
        }

        protected void btnAssignmentDates_Click(object sender, EventArgs e)
        {
            tripId = int.Parse(hfGlobalTripId.Value);            

            pnlError.Visible = false;
            pnlTripSelection.Visible = false;
            pnlAssignment.Visible = false;
            pnlAssignmentDates.Visible = false;
            pnlComplete.Visible = true;

            BuildAssignedItemList(tripId);
            int counter = 0;
            foreach (int tItem in tripItemsId)
            {
                counter++;                
                switch (counter)
                {
                    case 1:
                        if (rblPeriods1.Text != "")
                        {
                            item1 = Int32.Parse(rblPeriods1.Text);
                            UpdateAssignedItem(tripId, tItem, item1);
                        }
                        break;
                    case 2:
                        if (rblPeriods2.Text != "")
                        {
                            item2 = Int32.Parse(rblPeriods2.Text);
                            UpdateAssignedItem(tripId, tItem, item2);
                        }
                        break;
                    case 3:
                        if (rblPeriods3.Text != "")
                        {
                            item3 = Int32.Parse(rblPeriods3.Text);
                            UpdateAssignedItem(tripId, tItem, item3);
                        }
                        break;
                    case 4:
                        if (rblPeriods4.Text != "")
                        {
                            item4 = Int32.Parse(rblPeriods4.Text);
                            UpdateAssignedItem(tripId, tItem, item4);
                        }
                        break;
                    case 5:
                        if (rblPeriods5.Text != "")
                        {
                            item5 = Int32.Parse(rblPeriods5.Text);
                            UpdateAssignedItem(tripId, tItem, item5);
                        }
                        break;
                    case 6:
                        if (rblPeriods6.Text != "")
                        {
                            item6 = Int32.Parse(rblPeriods6.Text);
                            UpdateAssignedItem(tripId, tItem, item6);
                        }
                        break;
                    case 7:
                        if (rblPeriods7.Text != "")
                        {
                            item7 = Int32.Parse(rblPeriods7.Text);
                            UpdateAssignedItem(tripId, tItem, item7);
                        }
                        break;
                    case 8:
                        if (rblPeriods8.Text != "")
                        {
                            item8 = Int32.Parse(rblPeriods8.Text);
                            UpdateAssignedItem(tripId, tItem, item8);
                        }
                        break;
                    case 9:
                        if (rblPeriods9.Text != "")
                        {
                            item9 = Int32.Parse(rblPeriods9.Text);
                            UpdateAssignedItem(tripId, tItem, item9);
                        }
                        break;
                    case 10:
                        if (rblPeriods10.Text != "")
                        {
                            item10 = Int32.Parse(rblPeriods10.Text);
                            UpdateAssignedItem(tripId, tItem, item10);
                        }
                        break;
                    case 11:
                        if (rblPeriods11.Text != "")
                        {
                            item11 = Int32.Parse(rblPeriods11.Text);
                            UpdateAssignedItem(tripId, tItem, item11);
                        }
                        break;
                    case 12:
                        if (rblPeriods12.Text != "")
                        {
                            item12 = Int32.Parse(rblPeriods12.Text);
                            UpdateAssignedItem(tripId, tItem, item12);
                        }
                        break;
                }
            }
        }

        #endregion

        #region Methods
        private void BuildCheckboxList()
        {
            var qry = new DefinedValueService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.DefinedTypeId == 319);
            var qrySorted = qry.OrderBy(a => a.Value);
            var items = cbList.Items;
            string isActive = "False";
            foreach (var qRow in qrySorted)
            {
                var definedValue = new DefinedValueService(new RockContext()).Get(qRow.Id);
                definedValue.LoadAttributes();
                isActive = definedValue.GetAttributeValue("Active");
                
                if (isActive == "True")
                {
                    items.Add(qRow.Value);
                }
            }
        }
        private void BuildCheckboxListId(string value)
        {
            var qry = new DefinedValueService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.Value == value && row.DefinedTypeId == 319);
            var items = cbList.Items;
            foreach (var qRow in qry)
            {
                itemId = qRow.Id;
            }
        }

        private void CheckTripSelection(int trip)
        {
            var qry = new GlobalTripAssignedItemService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.TripGroupId == trip);
            foreach (var qRow in qry)
            {
                tripItemsExist = true; 
            }
        }

        private void AddAssignedItem(int item, int trip, int period)
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

        private void LoadGlobalTripName(int tripId)
        {
            var qry = new GroupService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.Id == tripId);
            foreach (var qRow in qry)
            {
                lTripName.Text = qRow.Name;
                lTripNameDates.Text = qRow.Name;
                tripName = qRow.Name;
            }
        }

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

        private void BuildAssignedItemList(int trip)
        {
            string qryString = "";
            qryString = qryString + "SELECT ai.TripGroupId, ai.TripItemId, dv.Value  ";
            qryString = qryString + "FROM _org_rivervalley_GlobalTripAssignedItems ai ";
            qryString = qryString + "LEFT JOIN DefinedValue dv on ai.TripItemId = dv.Id ";
            qryString = qryString + "WHERE TripGroupId = " + trip;

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                tripItemsId.Add(rdr.GetInt32(1));
            }
            conn.Close();
        }

        private void GetItemInfo(int item)
        {
            var definedValue = new DefinedValueService(new RockContext()).Get(item);
            itemName = definedValue.Value;
            definedValue.LoadAttributes();
            itemDueDatePeriod = definedValue.GetAttributeValue("DefaultDueDatePeriod");
        }

        private void UpdateAssignedItem(int trip, int item, int period)
        {
            string qryString = "";
            qryString = qryString + "UPDATE _org_rivervalley_GlobalTripAssignedItems  ";
            qryString = qryString + "SET DueDateGroupId = " + period;
            qryString = qryString + "WHERE TripGroupId = " + trip;
            qryString = qryString + "AND TripItemId = " + item;

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            
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