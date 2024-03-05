using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;

using org.rivervalley.PrayerDates.Data;
using org.rivervalley.PrayerDates.Model;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;
using System.Text;


namespace RockWeb.Plugins.org_rivervalley.PrayerCards
{
    [DisplayName("Prayer Cards Generator All Campuses")]
    [Category("org_rivervalley > PrayerCards")]
    [Description("Prayer Cards Generator for all campuses ")]

    [CampusesField( "Campuses", "Choose specific campuses to limit the prayer cards to just those campuses or leave this setting to blank and it will automatically choose all active campuese.", false, "", "", 0 )]

    public partial class PrayerCardsGeneratorAllCampuses : Rock.Web.UI.RockBlock
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
        private bool campusRecordsExist;
        private bool churchRecordsExist;
        private bool formError;
        //private string formErrorType;
        private bool nullCampus;
        private DateTime parameterDTValue;
        private List<int> campusIds = new List<int>();
        private bool dateNull;
        #endregion

        #region Base Control Methods
        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
        }
        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad( e );

            BuildCampusDescription();

            if ( !Page.IsPostBack )
            {
                pnlDateSelection.Visible = true;
                pnlError.Visible = false;
                pnlComplete.Visible = false;
            }
        }

        

        #endregion

        #region Events

        protected void btnDetailCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnDateSelection_Click(object sender, EventArgs e)
        {
            formError = false;
            pnlError.Visible = false;
            pnlDateSelection.Visible = false;
            pnlComplete.Visible = true;
            nbWarningMessage.Text = "";
            try // test for blank date
            {
                parameterDTValue = DateTime.Parse(dtPickerDate.SelectedDate.ToString());
                dateNull = false;
            }
            catch (FormatException)
            {
                dateNull = true;
            }
            if (dateNull == false)
            {
                datePrayedFor = Convert.ToDateTime(dtPickerDate.SelectedDate.ToString());
                DayOfWeek selectedDate = datePrayedFor.DayOfWeek;
                if (selectedDate != DayOfWeek.Tuesday)
                {
                    pnlDateSelection.Visible = true;
                    pnlError.Visible = true;
                    nbWarningMessage.Visible = true;
                    nbWarningMessage.Text += "Selected date must be a Tuesday";
                }
                else
                {
                    churchRecordsExist = false;
                    CheckForExistingPrayerDate();
                    if (churchRecordsExist == true)
                    {
                        formError = true;
                        nbWarningMessage.Visible = true;
                        nbWarningMessage.Text += "<br>Prayer Cards already exist for this date.";
                    }

                    if (formError == true)
                    {
                        pnlDateSelection.Visible = true;
                        pnlError.Visible = true;
                        pnlComplete.Visible = false;
                    }
                    else
                    {
                        GetCampuses();
                        ProcessRecords();
                    }
                }
            }
            else
            {
                pnlDateSelection.Visible = true;
                pnlError.Visible = true;
                pnlComplete.Visible = false;
                nbWarningMessage.Visible = true;
                nbWarningMessage.Text += "Selected a date";
            }
        }

        #endregion

        #region Methods

        protected void ProcessRecords()
        {            
            lOutputString.Text += "";
            SetSelectedCampus(1); // Using Apple Valley for Non Family purposes
            GetCampusEntityId();
            GetAttribute296Details(); // gets appropriate number of prayer records for each type prayer category                        
            BuildNonFamilyOutputString();

            ProcessNetworkChurches(networkChurchesCount);
            ProcessLocalChurches(localChurchesCount);
            ProcessMinistryLeaders(ministryLeaderCount);
            ProcessPoliticalLeaders(politicalLeadersCount);
            ProcessMissionaries(missionariesCount);
            ProcessGroups(deaconsCount, "deacons");
            ProcessGroups(staffCount, "staff");
            ProcessVirtues(virtuesCount);

            // Now process each selected campus

            foreach (int scItem in campusIds)
            {
                campusId = scItem;
                SetSelectedCampus(campusId);
                GetCampusEntityId();
                GetAttribute296Details(); // really only need this for the campus value...

                BuildFamilyOutputString();
                lOutputString.Text += "<br>";
                ProcessFamilies(familiesCount);
                lOutputString.Text += "<br>";
                ProcessLifeGroups(lifeGroupCount);                
            }
        }

        protected void BuildNonFamilyOutputString()
        {
            lOutputString.Text += "<b>Date Prayed For: " + datePrayedFor.ToString("d");
            lOutputString.Text += "<hr>Church records were created:</b>";
        }

        protected void BuildFamilyOutputString()
        {
            lOutputString.Text += "<hr><b>Campus records were created for Campus: " + campusName + "</b>";
        }

        private void SetSelectedCampus(int? campus)
        {
            var cQry = new CampusService(new RockContext()).Queryable();
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
                    if (rdr.GetInt32(3) == campusId) { campusRecordsExist = true; }
                }
                if (rdr.GetString(1) == "Political") { churchRecordsExist = true; }
            }
            conn.Close();
            var temp = campusRecordsExist; // added for complier warning
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
                var definedValueNC = new DefinedValueService(new RockContext()).Get(rdr.GetInt32(1));
                definedValueNC.LoadAttributes();
                definedValueNC.SetAttributeValue("DatePrayedFor", datePrayedFor);

                definedValueNC.SaveAttributeValues();

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
                var definedValueLC = new DefinedValueService(new RockContext()).Get(rdr.GetInt32(1));
                definedValueLC.LoadAttributes();
                definedValueLC.SetAttributeValue("DatePrayedFor", datePrayedFor);

                    definedValueLC.SaveAttributeValues();


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
                var definedValueML = new DefinedValueService(new RockContext()).Get(rdr.GetInt32(1));
                definedValueML.LoadAttributes();
                definedValueML.SetAttributeValue("DatePrayedFor", datePrayedFor);

                    definedValueML.SaveAttributeValues();

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
                var definedValuePL = new DefinedValueService(new RockContext()).Get(rdr.GetInt32(1));
                definedValuePL.LoadAttributes();
                definedValuePL.SetAttributeValue("DatePrayedFor", datePrayedFor);

                    definedValuePL.SaveAttributeValues();

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
                var definedValueMS = new DefinedValueService(new RockContext()).Get(rdr.GetInt32(1));
                definedValueMS.LoadAttributes();
                definedValueMS.SetAttributeValue("DatePrayedFor", datePrayedFor);

                    definedValueMS.SaveAttributeValues();

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

            lOutputString.Text += "<br>" + type + ": " + names;
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
                prayerCardNames = cPerson.NickName + " & " + sPerson.NickName + " " + cPerson.LastName + " | ";
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
                var definedValueVR = new DefinedValueService(new RockContext()).Get(rdr.GetInt32(1));
                GetVirtueName(rdr.GetInt32(1));
                definedValueVR.LoadAttributes();
                definedValueVR.SetAttributeValue("DatePrayedFor", datePrayedFor);

                    definedValueVR.SaveAttributeValues();

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
            }
            conn.Close();
        }

        private List<CampusCache> GetCampuses()
        {
            var campuses = new List<CampusCache>();

            // get campuses from block settings
            var campusGuids = GetAttributeValue( "Campuses" ).SplitDelimitedValues().AsGuidList();
            foreach ( var campusGuid in campusGuids )
            {
                var campus = CampusCache.Get( campusGuid );
                if ( campus != null )
                {
                    campuses.Add( campus );
                    campusIds.Add( campus.Id );
                }
            }

            // if the campus list is empty, get all active campuses
            if (!campuses.Any())
            {
                foreach ( var campus in CampusCache.All().Where( c => c.IsActive ?? false == true ).ToList() )
                {
                    campuses.Add( campus );
                    campusIds.Add( campus.Id );
                }
            }

            return campuses.OrderBy( c => c.Order ).ToList();
        }

        private void BuildCampusDescription()
        {
            var sb = new StringBuilder();
            foreach ( var campus in GetCampuses() )
            {
                if ( campus == GetCampuses().Last() )
                {
                    sb.AppendLine( campus.Name );
                }
                else
                {
                    sb.AppendLine( string.Format( "{0}, ", campus.Name ) );
                }
            }

            lCampuses.Text = sb.ToString();
        }

        #endregion
    }
}