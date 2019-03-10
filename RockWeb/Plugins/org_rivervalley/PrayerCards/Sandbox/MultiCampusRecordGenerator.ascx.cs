using System;
using System.ComponentModel;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;
using System.Data.Entity;
using System.Collections.Generic;

using org.rivervalley.PrayerDates.Data;
using org.rivervalley.PrayerDates.Model;

using Rock;
using Rock.Model;
using Rock.Data;
using System.Data;

namespace RockWeb.Plugins.org_rivervalley.PrayerCards
{
    [DisplayName("Prayer Cards Multiple Campus Record Generator")]
    [Category("org_rivervalley > PrayerCards")]
    [Description("Prayer Cards for multiple campuses ")]

    public partial class MultiCampusRecordGenerator : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private Person cPerson;
        private int campusId;
        private string campusName;
        private int? campusEntityId;
        private Guid pcGuid;
        private int ministryLeaderCount;
        private int familiesCount;
        private int politicalLeadersCount;
        private int localChurchesCount;
        private int networkChurchesCount;
        private int staffCount;
        private int deaconsCount;
        private int missionariesCount;
        private int virtuesCount;
        private int lifeGroupCount;
        private string prayerCardType;
        private string prayerCardNames;
        private DateTime datePrayedFor;
        private int aliasId;
        private Group fGroup;
        private Group lifeGroup;
        private string qryString;        
        private bool familyRecordsExist;
        private bool nonfamilyRecordsExist;
        private bool formError;
        private bool nullCampus;

        #endregion

        #region Base Control Methods
        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                pnlDetail.Visible = true;
                pnlError.Visible = false;
                pnlComplete.Visible = false;
                BuildCampusCheckboxes();
            }
        }

        #endregion

        #region Events

        protected void btnDetailCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnDetail_Click(object sender, EventArgs e)
        {
            pnlError.Visible = false;
            pnlDetail.Visible = false;
            pnlComplete.Visible = true;
            datePrayedFor = Convert.ToDateTime(dtPicker.SelectedDate.ToString());
            lOutputString.Text = "";
            nbWarningMessage.Text = "";
            DayOfWeek selectedDate = datePrayedFor.DayOfWeek;
            if (selectedDate != DayOfWeek.Tuesday)
            {
                pnlDetail.Visible = true;
                pnlError.Visible = true;
                pnlComplete.Visible = false;
                nbWarningMessage.Visible = true;
                nbWarningMessage.Text += "Selected date must be a Tuesday";
            }
            else
            {
                CheckForExistingPrayerDate();
                if (nonfamilyRecordsExist == true)
                {
                    formError = true;
                    nbWarningMessage.Visible = true;
                    nbWarningMessage.Text += "<br>Records for the Church related aready exist for this date. No new records were created";
                }
                else
                {
                    SetSelectedCampus(1); // Using Apple Valley for Non Family purposes as we don't know the selected campus yet
                    GetCampusEntityId();
                    GetAttribute296Details(); // gets appropriate number of prayer records for each type prayer category
                    lOutputString.Text += "<b>Church related records were created per this schedule:</b>";
                    BuildNonFamilyOutputString();
                    ProcessNetworkChurches(networkChurchesCount);
                    ProcessLocalChurches(localChurchesCount);
                    ProcessMinistryLeaders(ministryLeaderCount);
                    ProcessPoliticalLeaders(politicalLeadersCount);
                    ProcessMissionaries(missionariesCount);
                    ProcessGroups(deaconsCount, "deacons");
                    ProcessGroups(staffCount, "staff");                    
                    ProcessVirtues(virtuesCount);
                    lOutputString.Text += "<hr>";                 
                }
                // Now process each selected campus
                foreach (ListItem item in cblCampuses.Items)
                {
                    if (item.Selected)
                    {
                        GetSelectedCampusId(item.Value);
                        SetSelectedCampus(campusId);
                        GetCampusEntityId();
                        GetAttribute296Details(); // really only need this for the campus value...
                        familyRecordsExist = false; // reset for each campus
                        CheckForExistingPrayerDate();
                        if (familyRecordsExist == true)
                        {
                            formError = true;
                            nbWarningMessage.Visible = true;
                            nbWarningMessage.Text += "<br>Campus related records for " + campusName + " aready exist for this date. No new records were created";
                        }
                        else
                        {
                            BuildFamilyOutputString();
                            lOutputString.Text += "<hr>";
                            ProcessFamilies(familiesCount);
                            lOutputString.Text += "<hr>";
                            ProcessLifeGroups(lifeGroupCount);                            
                        }                            
                    }
                }

                if (formError == true )
                {
                    pnlDetail.Visible = false;
                    pnlError.Visible = true;
                    pnlComplete.Visible = true;
                }
            }            
        }

        #endregion

        #region Methods

        protected void BuildNonFamilyOutputString()
        {
            lOutputString.Text += "<br>Date Prayed For: " + datePrayedFor.ToString("d");
            lOutputString.Text += "<br>Ministry Leader: " + ministryLeaderCount;
            lOutputString.Text += "<br>Political Leader: " + politicalLeadersCount;
            lOutputString.Text += "<br>Local Church: " + localChurchesCount;
            lOutputString.Text += "<br>Network Church: " + networkChurchesCount;
            lOutputString.Text += "<br>Staff: " + staffCount;
            lOutputString.Text += "<br>Deacon/Elder: " + deaconsCount;
            lOutputString.Text += "<br>Missionaries: " + missionariesCount;            
            lOutputString.Text += "<br>Virtures: " + virtuesCount;
        }

        protected void BuildFamilyOutputString()
        {
            lOutputString.Text += "<br>Date: " + datePrayedFor.ToString("d");
            lOutputString.Text += "<br>Campus: " + campusName;
            lOutputString.Text += "<br>Families: " + familiesCount;
            lOutputString.Text += "<br>Life Groups: " + lifeGroupCount;
        }

        protected void BuildCampusCheckboxes()
        {
            var items = cblCampuses.Items;
            var rockContext = new RockContext();
            qryString = "SELECT Name FROM Campus WHERE Id IN (1,2,3,4,9,11,12,13)";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                items.Add(rdr.GetString(0));
            }
            conn.Close();
        }

        protected void GetSelectedCampusId(string selectedValue)
        {
            var cQry = new CampusService(new RockContext()).Queryable().AsNoTracking();
            cQry = cQry.Where(row => row.Name == selectedValue);
            foreach (var qRow in cQry)
            {
                campusId = qRow.Id;
            }
        }

        private void SetSelectedCampus(int? campus)
        {
            var cQry = new CampusService(new RockContext()).Queryable().AsNoTracking();
            cQry = cQry.Where(row => row.Id == campus);
            foreach (var qRow in cQry)
            {
                campusName = qRow.Name;
                pcGuid = qRow.Guid;
            }
        }

        private void GetCampusEntityId()
        {
            string cGuid = pcGuid.ToString();
            var pcQry = new AttributeValueService(new RockContext()).Queryable();
            pcQry = pcQry.Where(row => row.AttributeId == 6227 && row.Value == cGuid);

            foreach (var qRow in pcQry)
            {
                campusEntityId = qRow.EntityId;
            }
        }

        private void GetAttribute296Details()
        {
            var aQry = new AttributeService(new RockContext()).Queryable();
            aQry = aQry.Where(row => row.EntityTypeId == 31 && row.EntityTypeQualifierValue == "296");

            foreach (var qRow in aQry)
            {
                if (qRow.Id != 6227) // Don't need campus
                {
                    GetAttributeValue296(qRow.Id);
                }
            }
        }

        private void GetAttributeValue296(int AttrId)
        {
            var avQry = new AttributeValueService(new RockContext()).Queryable();
            avQry = avQry.Where(row => row.AttributeId == AttrId && row.EntityId == campusEntityId);
            foreach (var qRow in avQry)
            {
                switch (AttrId)
                {
                    case 6219:
                        Int32.TryParse(qRow.Value, out ministryLeaderCount);
                        break;
                    case 6220:
                        Int32.TryParse(qRow.Value, out familiesCount);
                        break;
                    case 6221:
                        Int32.TryParse(qRow.Value, out politicalLeadersCount);
                        break;
                    case 6222:
                        Int32.TryParse(qRow.Value, out localChurchesCount);
                        break;
                    case 6223:
                        Int32.TryParse(qRow.Value, out networkChurchesCount);
                        break;
                    case 6224:
                        Int32.TryParse(qRow.Value, out staffCount);
                        break;
                    case 6225:
                        Int32.TryParse(qRow.Value, out deaconsCount);
                        break;
                    case 6226:
                        Int32.TryParse(qRow.Value, out missionariesCount);
                        break;
                    case 7930:
                        Int32.TryParse(qRow.Value, out virtuesCount);
                        break;
                    case 7931:
                        Int32.TryParse(qRow.Value, out lifeGroupCount);
                        break;
                }
            }
        }
        private void CheckForExistingPrayerDate()
        {
            DateTime parameterDTValue;
            try
            {
                parameterDTValue = DateTime.Parse(dtPicker.SelectedDate.ToString());
            }
            catch (FormatException)
            {
                parameterDTValue = DateTime.Now;
            }
            var rockContext = new RockContext();
            qryString = "SELECT ID,Type,DatePrayedFor,CampusId FROM _org_rivervalley_PrayerDates_Detail WHERE  DatePrayedFor ='" + parameterDTValue + "'";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                if (rdr["CampusId"] != DBNull.Value)
                {
                    if (rdr.GetInt32(3) == campusId) { familyRecordsExist = true; }                    
                }
                if (rdr.GetString(1) == "Political") { nonfamilyRecordsExist = true; }
            }
            conn.Close();
        }

        private void ProcessNetworkChurches(int count)
        {
            prayerCardType = "Network Church";
            string church;
            string location;
            string denomination;
            string pastor;
            nullCampus = true;
            var rockContext = new RockContext();
            qryString = "SELECT TOP " + count + " * FROM _org_rivervalley_vDTPrayerNetworkChurches ORDER BY DatePrayedfor";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                church = (rdr["Value"] as string) ?? string.Empty;
                location = (rdr["Location"] as string) ?? string.Empty;
                denomination = (rdr["Denomination"] as string) ?? string.Empty;
                pastor = (rdr["LeadPastor"] as string) ?? string.Empty;
                prayerCardNames = church + " in " + location + " | " + denomination + " | " + pastor;
                var definedValue = new DefinedValueService(new RockContext()).Get(rdr.GetInt32(1));
                definedValue.LoadAttributes();
                definedValue.SetAttributeValue("DatePrayedFor", datePrayedFor);
                definedValue.SaveAttributeValues();
                BuildPrayerDateRecord(0, 0, prayerCardType, prayerCardNames, datePrayedFor, campusId);
            }
            conn.Close();
        }

        private void ProcessLocalChurches(int count)
        {
            prayerCardType = "Local Church";
            string church;
            string location;
            string denomination;
            string pastor;
            string campus;
            nullCampus = true;
            var rockContext = new RockContext();
            qryString = "SELECT TOP " + count + " * FROM _org_rivervalley_vDTPrayerLocalChurch ORDER BY DatePrayedfor";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                church = (rdr["Value"] as string) ?? string.Empty;
                location = (rdr["Location"] as string) ?? string.Empty;
                denomination = (rdr["Denomination"] as string) ?? string.Empty;
                pastor = (rdr["LeadPastor"] as string) ?? string.Empty;
                campus = (rdr["Campusid_Name"] as string) ?? string.Empty;
                prayerCardNames = church + " in " + location + " | " + denomination + " | " + pastor + " (" + campus + ")";
                var definedValue = new DefinedValueService(new RockContext()).Get(rdr.GetInt32(1));
                definedValue.LoadAttributes();
                definedValue.SetAttributeValue("DatePrayedFor", datePrayedFor);
                definedValue.SaveAttributeValues();
                BuildPrayerDateRecord(0, 0, prayerCardType, prayerCardNames, datePrayedFor, campusId);
            }
            conn.Close();
        }

        private void ProcessMinistryLeaders(int count)
        {
            prayerCardType = "Ministry Leader";
            string fName;
            string lName;
            string title;
            nullCampus = true;
            var rockContext = new RockContext();
            qryString = "SELECT TOP " + count + " * FROM _org_rivervalley_vDTPrayerMinistryLeader ORDER BY DatePrayedfor";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                fName = (rdr["FirstName"] as string) ?? string.Empty;
                lName = (rdr["Value"] as string) ?? string.Empty;
                title = (rdr["Title"] as string) ?? string.Empty;
                prayerCardNames = fName + " " + lName + ", " + title;
                var definedValue = new DefinedValueService(new RockContext()).Get(rdr.GetInt32(1));
                definedValue.LoadAttributes();
                definedValue.SetAttributeValue("DatePrayedFor", datePrayedFor);
                definedValue.SaveAttributeValues();
                BuildPrayerDateRecord(0, 0, prayerCardType, prayerCardNames, datePrayedFor, campusId);
            }
            conn.Close();
        }

        private void ProcessPoliticalLeaders(int count)
        {
            prayerCardType = "Political";
            string fName;
            string lName;
            string organization;
            string campus;
            nullCampus = true;
            var rockContext = new RockContext();
            qryString = "SELECT TOP " + count + " * FROM _org_rivervalley_vDTPrayerPolitical ORDER BY DatePrayedfor";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                lName = (rdr["Value"] as string) ?? string.Empty;
                fName = (rdr["FirstName"] as string) ?? string.Empty;
                organization = (rdr["Organization"] as string) ?? string.Empty;
                campus = (rdr["Campus_Name"] as string) ?? string.Empty;
                prayerCardNames = fName + " " + lName + ", " + organization + " (" + campus + ")";
                var definedValue = new DefinedValueService(new RockContext()).Get(rdr.GetInt32(1));
                definedValue.LoadAttributes();
                definedValue.SetAttributeValue("DatePrayedFor", datePrayedFor);
                definedValue.SaveAttributeValues();
                BuildPrayerDateRecord(0, 0, prayerCardType, prayerCardNames, datePrayedFor, campusId);
            }
            conn.Close();
        }

        private void ProcessMissionaries(int count)
        {
            prayerCardType = "Missionary";
            string fName;
            string lName;
            string country;
            nullCampus = true;
            var rockContext = new RockContext();
            qryString = "SELECT TOP " + count + " * FROM _org_rivervalley_vDTPrayerMissions ORDER BY DatePrayedfor";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                fName = (rdr["FirstName"] as string) ?? string.Empty;
                lName = (rdr["Value"] as string) ?? string.Empty;
                country = (rdr["Country"] as string) ?? string.Empty;
                prayerCardNames = fName + " " + lName + ", " + country;
                var definedValue = new DefinedValueService(new RockContext()).Get(rdr.GetInt32(1));
                definedValue.LoadAttributes();
                definedValue.SetAttributeValue("DatePrayedFor", datePrayedFor);
                definedValue.SaveAttributeValues();
                BuildPrayerDateRecord(0, 0, prayerCardType, prayerCardNames, datePrayedFor, campusId);
            }
            conn.Close();
        }

        private void ProcessGroups(int count, string type)
        {
            nullCampus = true;
            if (type == "deacons")
            {
                prayerCardType = "Elder/Deacon";
                qryString = "SELECT TOP " + count + " * FROM _org_rivervalley_vGroupDeaconElderActive ORDER BY DateLastPrayedFor";
            }
            if (type == "staff")
            {
                prayerCardType = "Pastors/Staff";
                qryString = "SELECT TOP " + count + " * FROM _org_rivervalley_vGroupEmployeeActive ORDER BY DateLastPrayedFor";
            }

            var rockContext = new RockContext();
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                cPerson = new PersonService(rockContext).Get(rdr.GetInt32(0));
                aliasId = cPerson.PrimaryAliasId ?? default(int);
                BuildPersonPrayerCardNames(cPerson.Id, "staff");
                cPerson.LoadAttributes(rockContext);
                cPerson.SetAttributeValue("Arena-34-306", datePrayedFor);
                cPerson.SaveAttributeValues();
                BuildPrayerDateRecord(cPerson.Id, aliasId, prayerCardType, prayerCardNames, datePrayedFor, campusId);
            }
            conn.Close();
        }

        private void ProcessFamilies(int count)
        {
            nullCampus = false;
            prayerCardType = "Families";
            var rockContext = new RockContext();
            qryString = "SELECT TOP " + count + " * FROM _org_rivervalley_vPrayerFamily WHERE CampusId = " + campusId + " ORDER BY DateLastPrayedFor,FamilyGroupId";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                cPerson = new PersonService(rockContext).Get(rdr.GetInt32(1));
                aliasId = cPerson.PrimaryAliasId ?? default(int);
                BuildPersonPrayerCardNames(cPerson.Id, "families");
                fGroup = new GroupService(rockContext).Get(rdr.GetInt32(0));
                fGroup.LoadAttributes(rockContext);
                fGroup.SetAttributeValue("DateLastPrayedfor", datePrayedFor);
                fGroup.SaveAttributeValues();
                BuildPrayerDateRecord(cPerson.Id, aliasId, prayerCardType, prayerCardNames, datePrayedFor, campusId);
            }
            conn.Close();
        }

        protected void BuildPrayerDateRecord(int personId, int aliasId, string type, string names, DateTime datePrayed, int? campus)
        {
            PrayerDatesDetail recordDetail;
            var rockContext = new PrayerDatesContext();
            var service = new PrayerDatesDetailService(rockContext);

            recordDetail = new PrayerDatesDetail();
            service.Add(recordDetail);
            recordDetail.PersonId = personId;
            recordDetail.PersonAliasId = aliasId;
            recordDetail.Type = type;
            recordDetail.Names = names;
            recordDetail.DatePrayedFor = datePrayed;
            if (nullCampus == false)
            {
                recordDetail.CampusId = campus;
            }
            else
            {
                recordDetail.CampusId = null;
            }
            rockContext.SaveChanges();
            lOutputString.Text += "<br>" + names + " | " + type;
        }

        protected void BuildPersonPrayerCardNames(int personId, string type)
        {
            prayerCardNames = "";
            var rockContext = new RockContext();
            cPerson = new PersonService(rockContext).Get(personId);
            int? married = cPerson.MaritalStatusValueId;
            int? grpId = cPerson.GivingGroupId;
            var sPerson = new PersonService(rockContext).GetSpouse(cPerson);

            if (sPerson != null)
            {
                if (type == "staff")
                {
                    prayerCardNames = "<b>" + cPerson.NickName + " </b>& " + sPerson.NickName + " " + cPerson.LastName + " | ";
                }
                else
                {
                    prayerCardNames = cPerson.NickName + " & " + sPerson.NickName + " " + cPerson.LastName + " | ";
                }
            }
            else
            {
                prayerCardNames = cPerson.FullName + " | ";
            }

            var gmQry = new GroupMemberService(new RockContext()).Queryable();
            gmQry = gmQry.Where(row => row.GroupId == grpId && row.GroupRoleId == 4);

            foreach (var qRow in gmQry)
            {
                GetChildrenNames(qRow.PersonId);
            }

            prayerCardNames += " (" + cPerson.GetCampus() + ")";
        }

        protected void GetChildrenNames(int personId)
        {
            var rockContext = new RockContext();
            var chPerson = new PersonService(rockContext).Get(personId);
            prayerCardNames += " " + chPerson.NickName + " (" + chPerson.Age + ")";
        }

        protected void ProcessVirtues(int count)
        {
            prayerCardType = "Virtues";
            nullCampus = true;
            var rockContext = new RockContext();
            qryString = "SELECT TOP " + count + " * FROM _org_rivervalley_vDTPrayerRiverValleyVirtues ORDER BY DatePrayedFor, EntityId";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                prayerCardNames = rdr.GetString(0) + rdr.GetString(2);
                var definedValue = new DefinedValueService(new RockContext()).Get(rdr.GetInt32(1));
                GetVirtueName(rdr.GetInt32(1));
                definedValue.LoadAttributes();
                definedValue.SetAttributeValue("DatePrayedFor", datePrayedFor);
                definedValue.SaveAttributeValues();
                BuildPrayerDateRecord(0, 0, prayerCardType, prayerCardNames, datePrayedFor, campusId);
            }
            conn.Close();
        }

        protected void GetVirtueName(int id)
        {
            var qry = new DefinedValueService(new RockContext()).Queryable();
            qry = qry.Where(row => row.Id == id);

            foreach (var qRow in qry)
            {
                prayerCardNames = qRow.Value + qRow.Description;
            }
        }

        private void ProcessLifeGroups(int count)
        {
            nullCampus = false;
            prayerCardType = "Life Groups";
            var rockContext = new RockContext();
            qryString = "SELECT TOP " + count + " * FROM _org_rivervalley_vPrayerLifeGroup WHERE CampusId = " + campusId + " ORDER BY DateLastPrayedFor, GroupId";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                lifeGroup = new GroupService(rockContext).Get(rdr.GetInt32(0));
                prayerCardNames = rdr.GetString(1);
                lifeGroup.LoadAttributes(rockContext);
                lifeGroup.SetAttributeValue("DateLastPrayedFor-GRP", datePrayedFor);
                lifeGroup.SaveAttributeValues();
                BuildPrayerDateRecord(0, 0, prayerCardType, prayerCardNames, datePrayedFor, campusId);
                rockContext.SaveChanges();
            }
            conn.Close();
        }



        #endregion

    }
}