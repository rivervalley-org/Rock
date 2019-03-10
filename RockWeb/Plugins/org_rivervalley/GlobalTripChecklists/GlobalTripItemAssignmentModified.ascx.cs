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
    [DisplayName("Global Trip Item Status Modified")]
    [Category("org_rivervalley > GlobalTripChecklists")]
    [Description("Global Trip Item Status Modified")]
    [TextField("GlobalTeamYears", "List the Parent Group Id's to process (up to three years) - seperate with a comma. For example: 1234,45653,548224")]

    public partial class GlobalTripItemAssignmentModified : Rock.Web.UI.RockBlock
    {
        #region Fields
        private int tripId;
        private int itemId;
        private int participantId;
        //private bool recordsExist;
        private bool itemFormStatus;
        private int existingItemStatusId;
        private bool existingItemStatus;
        private string existingItemValue;
        private string tripName;
        //private GlobalTripAssignedItem assignedItems = null;
        private GlobalTripItemStatus itemStatus = null;
        private GlobalTripItemStatusLog sLog;
        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private List<int> personAliasList = new List<int>();
        private string aliasString;
        private List<int> globalTeamYears = new List<int>();
        private string blockYears;
        //private string tripYears;
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
                pnlParticipantSelection.Visible = false;
                pnlAssignment.Visible = false;
                pnlComplete.Visible = false;
                pnlItemLog.Visible = false;
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

            pnlTripSelection.Visible = false;
            pnlParticipantSelection.Visible = true;
            pnlAssignment.Visible = false;
            pnlComplete.Visible = false;
            pnlItemLog.Visible = false;

            BuildParticipantDropDownValues(tripId);
        }
        protected void btnParticipantSelection_Click(object sender, EventArgs e)
        {
            participantId = int.Parse(ddParticipants.Text);
            tripId = int.Parse(hfGlobalTripId.Value);
            hfParticipantId.Value = participantId.ToString();

            LoadGlobalTripName(tripId);

            Person tPerson;
            var rockContext = new RockContext();
            tPerson = new PersonService(rockContext).Get(participantId);
            int aliasId = tPerson.PrimaryAliasId ?? default(int);

            lTripHeader.Text = "<b>" + tripName + " - " + tPerson.FullName + "</b>";

            lDebugString.Text += "<br>aliad Id " + aliasId;
            lDebugString.Text += "<br>participant id " + participantId;

            // we need to process all participant alias ids for proper data handling
            BuildParticipantAliasIds(participantId);            

            lDebugString.Text += "<br>Alias string " + aliasString ;

            pnlTripSelection.Visible = false;
            pnlParticipantSelection.Visible = false;
            pnlAssignment.Visible = true;
            pnlComplete.Visible = false;
            pnlItemLog.Visible = true;

            BuildCheckboxList(tripId);
            ReadCBList();
            //GetNotes(tripId, 6896, participantId);
            GetNotesFromAliasList(tripId, 6896, aliasString);
            //GetLogRecords(tripId, aliasId);
            GetLogRecordsAliasList(tripId, aliasString);
        }

        protected void btnAssignmentSave_Click(object sender, EventArgs e)
        {
            participantId = int.Parse(hfParticipantId.Value);
            tripId = int.Parse(hfGlobalTripId.Value);

            pnlTripSelection.Visible = false;
            pnlParticipantSelection.Visible = false;
            pnlAssignment.Visible = false;
            pnlComplete.Visible = true;
            pnlItemLog.Visible = false;


            // determine if this person on this trip has any items records yet.
            //recordsExist = false;
            Person tPerson;
            var rockContext = new RockContext();
            tPerson = new PersonService(rockContext).Get(participantId);
            int aliasId = tPerson.PrimaryAliasId ?? default(int);

            // we need to process all participant alias ids for proper data handling
            BuildParticipantAliasIds(participantId);

            var dataContext = new RockContext();

            foreach (ListItem item in cbList.Items)
            {
                itemId = 0;
                GetCheckboxListId(item.Value);
                existingItemStatusId = 0;
                existingItemStatus = false;
                //GetExistingItemStatus(tripId, itemId, aliasId);
                GetExistingItemStatusAliasList(tripId, itemId, aliasString);

                var service = new GlobalTripItemStatusService(dataContext);                

                if (existingItemStatusId > 0)
                {
                    // edit existing record
                    itemStatus = service.Get(existingItemStatusId);                
                }
                else
                {
                    // item record has not been created yet
                    itemStatus = new GlobalTripItemStatus();
                    service.Add(itemStatus);
                    itemStatus.TripGroupId = tripId;
                    itemStatus.PersonAliasId = aliasId;
                    itemStatus.TripItemId = itemId;
                }

                if (item.Selected)
                {
                    if(!existingItemStatus)
                    {
                        itemStatus.ItemStatus = true;
                        dataContext.SaveChanges();
                        // write log record
                        WriteLogRecord(tripId, itemId, aliasId, item.Value, "Status checked True");
                    }                    
                }
                else
                {
                    if (existingItemStatus)
                    {
                        itemStatus.ItemStatus = false;
                        dataContext.SaveChanges();
                        // write log record
                        WriteLogRecord(tripId, itemId, aliasId, item.Value, "Status checked False");
                    }                    
                }
            }

            // Process Note
            existingItemStatusId = 0;
            existingItemValue = "";
            //GetExistingItemStatus(tripId, 6896, aliasId);
            GetExistingItemStatusAliasList(tripId, 6896, aliasString);

            var serviceNotes = new GlobalTripItemStatusService(dataContext);

            if (existingItemStatusId > 0)
            {
                itemStatus = serviceNotes.Get(existingItemStatusId);
                if(tbNotes.Text != existingItemValue)
                {
                    itemStatus.ItemValue = tbNotes.Text;
                    dataContext.SaveChanges();
                    // write log
                    WriteLogRecord(tripId, itemId, aliasId, "Note changed", tbNotes.Text);
                }                
            }
            else
            {
                serviceNotes.Add(itemStatus);
                itemStatus.TripGroupId = tripId;
                itemStatus.PersonAliasId = aliasId;
                itemStatus.TripItemId = 6896;
                itemStatus.ItemValue = tbNotes.Text;
                dataContext.SaveChanges();
                // write log
                WriteLogRecord(tripId, itemId, aliasId, "Note added", tbNotes.Text);
            }

        }

        protected void btnAssignAnother_Click(object sender, EventArgs e)
        {
            tripId = int.Parse(ddGlobalTrips.Text);
            hfGlobalTripId.Value = tripId.ToString();

            pnlTripSelection.Visible = false;
            pnlParticipantSelection.Visible = true;
            pnlAssignment.Visible = false;
            pnlComplete.Visible = false;

            BuildParticipantDropDownValues(tripId);
            lOutputString.Text = "";
            tbNotes.Text = "";
        }

        #endregion

        #region Methods
        private void BuildCheckboxList(int trip)
        {
            cbList.Items.Clear();
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
            var items = cbList.Items;
            while (rdr.Read())
            {               
                items.Add(rdr.GetString(2));
            }
            conn.Close();
        }

        private void GetCheckboxListId(string value)
        {
            var qry = new DefinedValueService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.Value == value && row.DefinedTypeId == 319);
            var items = cbList.Items;
            foreach (var qRow in qry)
            {
                itemId = qRow.Id;
            }
        }

        //private void GetExistingItemStatus(int trip,int item, int alias)
        //{            
        //    var qry = new GlobalTripItemStatusService(new RockContext()).Queryable().AsNoTracking();
        //    qry = qry.Where(row => row.TripGroupId == trip && row.TripItemId == item && row.PersonAliasId == alias );
        //    foreach (var qRow in qry)
        //    {
        //        existingItemStatusId = qRow.Id;
        //        existingItemStatus = qRow.ItemStatus;
        //        existingItemValue = qRow.ItemValue;
        //    }
        //}

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

        private void BuildParticipantDropDownValues(int trip)
        {
            ddParticipants.Items.Clear();
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
                ddParticipants.Items.Add(new ListItem(rdr.GetString(1),rdr.GetInt32(0).ToString()));
            }
            conn.Close();
        }

        private void CheckFormItemFormStatus(int trip, int item, int alias )
        {
            var qry = new GlobalTripItemStatusService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.PersonAliasId == alias && row.TripGroupId == trip && row.TripItemId == item);
            foreach (var qRow in qry)
            {
                if(qRow.ItemStatus)
                {
                    itemFormStatus = true;
                }
            }
        }

        //private void GetNotes(int trip, int item, int person)
        //{            
        //    Person cbPerson;
        //    var rockContext = new RockContext();
        //    cbPerson = new PersonService(rockContext).Get(person);
        //    int aliasId = cbPerson.PrimaryAliasId ?? default(int);
        //    var qry = new GlobalTripItemStatusService(new RockContext()).Queryable().AsNoTracking();
        //    qry = qry.Where(row => row.PersonAliasId == aliasId && row.TripGroupId == trip && row.TripItemId == item);
        //    foreach (var qRow in qry)
        //    {
        //        tbNotes.Text = qRow.ItemValue;
        //    }
        //}

        private void ReadCBList()
        {
            foreach (ListItem item in cbList.Items)
            {                
                itemFormStatus = false;
                GetCheckboxListId(item.Value);

                Person cbPerson;
                var rockContext = new RockContext();
                cbPerson = new PersonService(rockContext).Get(participantId);
                int aliasId = cbPerson.PrimaryAliasId ?? default(int);
                
                //CheckFormItemFormStatus(tripId, itemId, aliasId);
                CheckItemFormStatusByAliasList(tripId, itemId, aliasString);

                if (itemFormStatus)
                {
                    item.Selected = true;
                }                
            }
        }

        private void WriteLogRecord(int trip, int item, int alias, string description, string status)
        {
            
            var dataContext = new RockContext();
            var serviceLog = new GlobalTripItemStatusLogService(dataContext);

            sLog = new GlobalTripItemStatusLog();
            serviceLog.Add(sLog);

            sLog.TripGroupId = trip;
            sLog.TripItemId = item;
            sLog.PersonAliasId = alias;
            sLog.ItemStatus = status;
            sLog.ItemDescription = description;

            dataContext.SaveChanges();
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

        //private void GetLogRecords(int trip, int alias)
        //{
        //    string dateStringOne = "";
        //    string dateStringTwo = "";
        //    string headerString = "";
        //    var qry = new GlobalTripItemStatusLogService(new RockContext()).Queryable();
        //    qry = qry.Where(row => row.TripGroupId == trip && row.PersonAliasId == alias);
        //    var qrySorted = qry.OrderBy(a => a.ModifiedDateTime);
        //    foreach (var qRow in qrySorted)
        //    {
        //        dateStringOne = qRow.ModifiedDateTime.ToString();
        //        if (dateStringOne != dateStringTwo)
        //        {
        //            headerString = qRow.ModifiedByPersonName + " on " + qRow.ModifiedDateTime.ToString();
        //            WriteOutputStringHeader(headerString);
        //        }
        //        WriteOutputStringDetail(qRow.ItemDescription, qRow.ItemStatus);
        //        dateStringTwo = qRow.ModifiedDateTime.ToString();
        //    }
        //}

        private void WriteOutputStringDetail(string cellOne, string cellTwo)
        {
            lOutputString.Text += "<div class=\"row\">";
            lOutputString.Text += "<div class=\"col-md-1\">&nbsp;</div>";
            lOutputString.Text += "<div class=\"col-md-4\">" + cellOne + "</div>";
            lOutputString.Text += "<div class=\"col-md-3\">" + cellTwo + "</div>";
            lOutputString.Text += "</div>";

        }
        private void WriteOutputStringHeader(string cellOne)
        {
            lOutputString.Text += "<div class=\"row\">";
            lOutputString.Text += "<div class=\"col-md-12\">" + cellOne + "</div>";
            lOutputString.Text += "</div>";

        }

        protected void BuildParticipantAliasIds(int personId)
        {
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

        private void CheckItemFormStatusByAliasList(int trip, int item, string paList )
        {            
            string qryString = "";
            qryString = qryString + "SELECT TOP 1 ItemStatus ";
            qryString = qryString + "FROM _org_rivervalley_GlobalTripItemStatus ";
            qryString = qryString + "WHERE TripGroupId = " + trip;
            qryString = qryString + "AND TripItemId = " + item;
            qryString = qryString + "AND PersonAliasId IN (" + paList + ") ";
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
                    itemFormStatus = true;
                }
                else
                {
                    itemFormStatus = false;
                }                
            }
            conn.Close();
        }

        private void GetNotesFromAliasList(int trip, int item, string paList)
        {
            string qryString = "";
            qryString = qryString + "SELECT TOP 1 ItemValue ";
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
                tbNotes.Text = rdr.GetString(0);
            }
            conn.Close();
        }

        private void GetLogRecordsAliasList(int trip, string paList)
        {
            string dateStringOne = "";
            string dateStringTwo = "";
            string headerString = "";
            string logName;

            string qryString = "";
            qryString = qryString + "SELECT ModifiedDateTime,ModifiedByPersonAliasId,ItemDescription,ItemStatus ";
            qryString = qryString + "FROM _org_rivervalley_GlobalTripItemStatusLog ";
            qryString = qryString + "WHERE TripGroupId = " + trip;
            qryString = qryString + "AND PersonAliasId IN (" + paList + ")";
            qryString = qryString + "ORDER BY ID";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                dateStringOne = rdr.GetDateTime(0) .ToString();
                if (dateStringOne != dateStringTwo)
                {
                    logName = GetNameByPersonAlias(rdr.GetInt32(1));
                    headerString = logName + " on " + rdr.GetDateTime(0).ToString();
                    WriteOutputStringHeader(headerString);
                }
                WriteOutputStringDetail(rdr.GetString(2), rdr.GetString(3));
                dateStringTwo = rdr.GetDateTime(0).ToString();
            }
            conn.Close();
        }

        protected string GetNameByPersonAlias(int aliasId)
        {
            string aName = "";
            var rockContext = new RockContext();
            var personAliasService = new PersonAliasService(rockContext);
                        
            // Get data with alias Id:            
            var pAlias = personAliasService.Get(aliasId);
            aName = pAlias.Person.FullName;
            return aName;
        }

        private void GetExistingItemStatusAliasList(int trip, int item, string paList)
        {
            string qryString = "";
            qryString = qryString + "SELECT TOP 1 Id, ItemStatus, ItemValue ";
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
                existingItemStatusId = rdr.GetInt32(0);
                existingItemStatus = rdr.GetBoolean(1);
                if (rdr["ItemValue"] != DBNull.Value)
                {
                    existingItemValue = rdr.GetString(2);
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