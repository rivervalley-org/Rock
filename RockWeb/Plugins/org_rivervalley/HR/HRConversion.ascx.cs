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
    [DisplayName( "HR Conversion" )]
    [Category( "org_rivervalley > HR" )]
    [Description( "HR Employee Table Conversion" )]

    public partial class HRConversion : Rock.Web.UI.RockBlock
    {
        #region Fields
        
        private Person cPerson = null;
        private int arenaPersonId;
        private int rockPersonId;
        private string rockName;
        private int convertedPersonId;
        private int arenaDR; // Arena DR
        private int rockDR; // Rock DR
        private string sltRaw; // SLT can have multiple values
        private bool twoSLTs;
        private int arenaSLT; // Arena SLT
        private int arenaSLT2;
        private int rockSLT; // Rock SLT
        private int rockSLT2;
        private int arenaLL;
        private int rockLL;
        private int arenaVT;
        private int rockVT;
        private int arenaDL;
        private int rockDL;
        private int emplStatusLUID;
        private decimal schedHours;
        private string jobTitleText;
        private int emplNo;
        private Boolean active;
        private DateTime emplStatusDate;
        private int prStatusLUID;
        private DateTime prStatusDate;
        private int payFreqLUID;
        private DateTime ptHireDate;
        private DateTime ftHireDate;
        private DateTime tenureDate;
        private DateTime entiteDate;
        private DateTime termDate;
        private Boolean approver;
        private int ftYears;
        private int ptYears;
        private int taxYear;
        private int tenureYrs;
        private Boolean admPerm;
        private Boolean deptHead;
        private int arenaR2;
        private int rockR2;
        private int campusLUID;
        private int secClassLUID;
        private int acctDeptLUID;
        private int deptLUID;
        private int jobTitleLUID;
        private int shiftCodeLUID;

        private int counter;

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
            string qryString = "SELECT cp.nick_name + ' ' + cp.last_name AS Name, che.* FROM cust_hr_employee che,core_person cp WHERE che.person_id = cp.person_id AND cp.person_id = 31157";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                counter++;
                rockPersonId = 0;
                arenaPersonId = rdr.IsDBNull(2) ? 0 : rdr.GetInt32(2);
                GetRockPersonDetail();
                if (rockPersonId > 0)
                {
                    var rockContext = new RockContext();
                    cPerson = new PersonService(rockContext).Get(rockPersonId);
                    cPerson.LoadAttributes(rockContext);

                    emplNo = rdr.IsDBNull(3) ? 0 : rdr.GetInt32(3);
                    arenaDR = rdr.IsDBNull(4) ? 0 : rdr.GetInt32(4);
                    emplStatusLUID = rdr.IsDBNull(5) ? 0 : rdr.GetInt32(5);
                    emplStatusDate = rdr.GetDateTime(6);
                    prStatusLUID = rdr.IsDBNull(7) ? 0 : rdr.GetInt32(7);
                    prStatusDate = rdr.GetDateTime(8);
                    payFreqLUID = rdr.IsDBNull(9) ? 0 : rdr.GetInt32(9);
                    schedHours = rdr.IsDBNull(10) ? 0 : rdr.GetDecimal(10);
                    shiftCodeLUID = rdr.IsDBNull(11) ? 0 : rdr.GetInt32(11);
                    secClassLUID = rdr.IsDBNull(12) ? 0 : rdr.GetInt32(12);
                    ptHireDate = rdr.GetDateTime(13);
                    ftHireDate = rdr.GetDateTime(14);
                    tenureDate = rdr.GetDateTime(15);
                    jobTitleLUID = rdr.IsDBNull(16) ? 0 : rdr.GetInt32(16);
                    jobTitleText = rdr.IsDBNull(17) ? "0" : rdr.GetString(17);
                    campusLUID = rdr.IsDBNull(18) ? 0 : rdr.GetInt32(18);
                    deptLUID = rdr.IsDBNull(19) ? 0 : rdr.GetInt32(19);
                    entiteDate = rdr.GetDateTime(20);
                    approver = rdr.IsDBNull(27) ? false : rdr.GetBoolean(27);
                    arenaR2 = rdr.IsDBNull(28) ? 0 : rdr.GetInt32(28);
                    termDate = rdr.GetDateTime(29);
                    acctDeptLUID = rdr.IsDBNull(30) ? 0 : rdr.GetInt32(30);
                    tenureYrs = rdr.IsDBNull(31) ? 0 : rdr.GetInt32(31);
                    ptYears = rdr.IsDBNull(32) ? 0 : rdr.GetInt32(32);
                    ftYears = rdr.IsDBNull(33) ? 0 : rdr.GetInt32(33);
                    taxYear = rdr.IsDBNull(34) ? 0 : rdr.GetInt32(34);
                    active = rdr.IsDBNull(35) ? false : rdr.GetBoolean(35);
                    arenaLL = rdr.IsDBNull(36) ? 0 : rdr.GetInt32(36);
                    arenaVT = rdr.IsDBNull(37) ? 0 : rdr.GetInt32(37);
                    arenaDL = rdr.IsDBNull(38) ? 0 : rdr.GetInt32(38);
                    sltRaw = rdr.IsDBNull(39) ? "0" : rdr.GetString(39);
                    admPerm = rdr.IsDBNull(40) ? false : rdr.GetBoolean(40);
                    deptHead = rdr.IsDBNull(41) ? false : rdr.GetBoolean(41);                    

                    lOutputString.Text += "<br>ARENA " + rdr.GetString(0) + " (" + arenaPersonId + ") ==> ROCK " + rockName + " (" + rockPersonId + ")";

                    /*
                    ProcessDirectReport();
                    ProcessSeniorLeadershipTeam();
                    ProcessLLManager();
                    ProcessVisionTeam();
                    ProcessDottedLine();
                    ProcessEmployeeStatusLUID();
                    ProcessScheduledHours();
                    ProcessJobTitleText();
                    ProcessEmployeeNumber();
                    ProcessActive();
                    ProcessEmployeeStatusDate();
                    ProcessPRStatusLUID();
                    ProcessPRStatusDate();
                    ProcessPayFreqLUID();
                    ProcessPartTimeHireDate();
                    ProcessFullTimeHireDate();
                    ProcessTenureDate();                    
                    ProcessEntitlementDate();
                    ProcessTerminationDate();
                    ProcessApprover();                    
                    ProcessFullTimeYears();
                    ProcessPartTimeYears();
                    ProcessTaxYear();
                    ProcessTenureYears();
                    ProcessAdminPermission();
                    ProcessDeptHead();
                    ProcessReportsToTwo();
                    ProcessCampusLUID();
                    ProcessSecurityClassLUID();
                    ProcessAcctDeptLUID();
                    ProcessDeptLUID();
                    ProcessJobTitleLUID();
                    ProcessShiftCodeLUID();                   
                    */
                }
                else
                {
                    lOutputString.Text += "<br>ARENA " + rdr.GetString(0) + " (" + arenaPersonId + ") ==> ***ROCK Person Not Found ***";
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
        
        protected void RockPersonAttributes(string attribute)
        {
            switch (attribute)
            {
                case "DR":
                    {
                        if (rockDR > 0)
                        {
                            cPerson.SetAttributeValue("DirectReport", rockDR);
                            cPerson.SaveAttributeValues();
                        }
                    }
                    break;
                case "SLT":
                    {
                        if (twoSLTs)
                        {
                            string combinedSLTs = rockSLT.ToString() + "," + rockSLT2.ToString();
                            cPerson.SetAttributeValue("SeniorLeadershipTeamRepresentative", combinedSLTs);
                            cPerson.SaveAttributeValues();
                        }
                        else
                        {
                            if (rockSLT > 0)
                            {
                                cPerson.SetAttributeValue("SeniorLeadershipTeamRepresentative", rockSLT);
                                cPerson.SaveAttributeValues();
                            }
                        }
                    }
                    break;
                case "LL":
                    {
                        if (rockLL > 0)
                        {
                            cPerson.SetAttributeValue("LLManager", rockLL);
                            cPerson.SaveAttributeValues();
                        }
                    }
                    break;

                case "VT":
                    {
                        if (rockVT > 0)
                        {
                            cPerson.SetAttributeValue("VTRepresentative", rockVT);
                            cPerson.SaveAttributeValues();
                        }
                    }
                    break;
                case "DL":
                    {
                        if (rockDL > 0)
                        {
                            cPerson.SetAttributeValue("DottedlineRepresentrative", rockDL);
                            cPerson.SaveAttributeValues();
                        }
                    }
                    break;
                case "R2":
                    {
                        if (rockR2 > 0)
                        {
                            cPerson.SetAttributeValue("ReportstoTwo", rockR2);
                            cPerson.SaveAttributeValues();
                        }
                    }
                    break;
            }                
        }

        protected void ProcessDirectReport()
        {
            if (arenaDR > 0)
            {
                rockDR = 0;
                ConvertArenaToRockPersonId(arenaDR);
                rockDR = convertedPersonId;
                if (rockDR > 0)
                {
                    RockPersonAttributes("DR"); 
                }
                else
                {
                    lOutputString.Text += " *** No Direct Report ID *** ";
                }                
            }
        }

        protected void ProcessVisionTeam()
        {
            if (arenaVT > 0)
            {
                rockVT = 0;
                ConvertArenaToRockPersonId(arenaVT);
                rockVT = convertedPersonId;
                if (rockVT > 0)
                {
                    RockPersonAttributes("VT");
                }
                else
                {
                    lOutputString.Text += " *** No Vision Team ID *** ";
                }
            }
        }

        protected void ProcessDottedLine()
        {
            if (arenaDL > 0)
            {
                rockDL = 0;
                ConvertArenaToRockPersonId(arenaDL);
                rockDL = convertedPersonId;
                if (rockDL > 0)
                {
                    RockPersonAttributes("DL");
                }
                else
                {
                    lOutputString.Text += " *** No Dotted Line ID *** ";
                }
            }
        }

        protected void ProcessSeniorLeadershipTeam()
        {
            twoSLTs = sltRaw.Contains(","); // check for two SLTs
            if (twoSLTs)
            {
                string[] splitSLT = sltRaw.ToString().Split(',');
                Int32.TryParse(splitSLT[0], out arenaSLT);
                Int32.TryParse(splitSLT[1], out arenaSLT2);

                rockSLT = 0;
                ConvertArenaToRockPersonId(arenaSLT);
                rockSLT = convertedPersonId;

                rockSLT2 = 0;
                ConvertArenaToRockPersonId(arenaSLT2);
                rockSLT2 = convertedPersonId;

                if (rockSLT > 0)
                {
                    RockPersonAttributes("SLT");
                }
                else
                {
                    lOutputString.Text += " *** ROCK SLT Not Found *** ";
                }
            }
            else
            {
                Int32.TryParse(sltRaw, out arenaSLT);
                if (arenaSLT > 0)
                {
                    rockSLT = 0;
                    ConvertArenaToRockPersonId(arenaSLT);
                    rockSLT = convertedPersonId;
                    if (rockSLT > 0)
                    {
                        RockPersonAttributes("SLT");
                    }
                    else
                    {
                        lOutputString.Text += " *** No SLT ID *** ";
                    }
                }
            }
        }

        protected void ProcessLLManager()
        {
            if (arenaLL > 0)
            {
                rockLL = 0;
                ConvertArenaToRockPersonId(arenaLL);
                rockLL = convertedPersonId;
                if (rockLL > 0)
                {
                    RockPersonAttributes("LL");
                }
                else
                {
                    lOutputString.Text += " *** No Lower Level ID *** ";
                }            
            }
        }

        protected void ProcessEmployeeStatusLUID()
        {
            if (emplStatusLUID > 0)
            {
                // cross reference arena luid to rock defined value
                switch (emplStatusLUID)
                {
                    case 10374: { cPerson.SetAttributeValue("EmploymentStatus", "C04E6F62-EBEA-4C90-B258-692324D9B2E6"); } break;
                    case 10375: { cPerson.SetAttributeValue("EmploymentStatus", "94E2-423C-9613-48A69BF98B36"); } break;
                    case 10378: { cPerson.SetAttributeValue("EmploymentStatus", "4A1BDA6D-C853-4CA0-B072-D84BBA1A3751"); } break;
                    case 10379: { cPerson.SetAttributeValue("EmploymentStatus", "326823B1-9F68-4FB3-8A12-EB6697389314"); } break;
                    case 11424: { cPerson.SetAttributeValue("EmploymentStatus", "73835A7A-7081-4465-828A-C33F2618066D"); } break;                    
                }
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessScheduledHours()
        {
            if (schedHours > 0)
            {
                decimal roundedHours = Math.Round(schedHours, 2);                
                cPerson.SetAttributeValue("ScheduledHours", roundedHours);
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessJobTitleText()
        {
            if (jobTitleText != "0")
            {
                cPerson.SetAttributeValue("JobTitleText", jobTitleText);
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessEmployeeNumber()
        {
            if (emplNo > 0)
            {
                cPerson.SetAttributeValue("EmployeeNumber", emplNo);
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessActive()
        {
            if (active)
            {
                cPerson.SetAttributeValue("Active", "True");
                cPerson.SaveAttributeValues();
            }
            else
            {
                cPerson.SetAttributeValue("Active", "False");
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessEmployeeStatusDate()
        {
            cPerson.SetAttributeValue("EmploymentStatusDate", emplStatusDate);
            cPerson.SaveAttributeValues();            
        }

        protected void ProcessPRStatusDate()
        {
            cPerson.SetAttributeValue("PayrollStatusDate", emplStatusDate);
            cPerson.SaveAttributeValues();
        }

        protected void ProcessPRStatusLUID()
        {
            if (prStatusLUID > 0)
            {
                // cross reference arena luid to rock defined value
                switch (prStatusLUID)
                {
                    case 10374: { cPerson.SetAttributeValue("PayrollStatus", "C04E6F62-EBEA-4C90-B258-692324D9B2E6"); } break;
                    case 10375: { cPerson.SetAttributeValue("PayrollStatus", "94E2-423C-9613-48A69BF98B36"); } break;
                    case 10378: { cPerson.SetAttributeValue("PayrollStatus", "4A1BDA6D-C853-4CA0-B072-D84BBA1A3751"); } break;
                    case 10379: { cPerson.SetAttributeValue("PayrollStatus", "326823B1-9F68-4FB3-8A12-EB6697389314"); } break;
                    case 11424: { cPerson.SetAttributeValue("PayrollStatus", "73835A7A-7081-4465-828A-C33F2618066D"); } break;
                }
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessPayFreqLUID()
        {
            if (payFreqLUID > 0)
            {
                // cross reference arena luid to rock defined value
                switch (payFreqLUID)
                {
                    case 11181: { cPerson.SetAttributeValue("PayFrequency", "1e2258e6-9309-4bf7-a120-7ab1e6229610"); } break;
                    case 11192: { cPerson.SetAttributeValue("PayFrequency", "ce03be16-1ef7-4e9c-a5ef-3def97e4520b"); } break;                    
                }
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessPartTimeHireDate()
        {
            cPerson.SetAttributeValue("PartTimeHireDate", ptHireDate);
            cPerson.SaveAttributeValues();
        }

        protected void ProcessFullTimeHireDate()
        {
            cPerson.SetAttributeValue("FullTimeHireDate", ftHireDate);
            cPerson.SaveAttributeValues();
        }

        protected void ProcessTenureDate()
        {
            cPerson.SetAttributeValue("TenureDate", tenureDate);
            cPerson.SaveAttributeValues();
        }

        protected void ProcessEntitlementDate()
        {
            cPerson.SetAttributeValue("EntitlementDate", entiteDate);
            cPerson.SaveAttributeValues();
        }

        protected void ProcessTerminationDate()
        {
            cPerson.SetAttributeValue("TerminationDate", termDate);
            cPerson.SaveAttributeValues();
        }

        protected void ProcessApprover()
        {
            if (approver)
            {
                cPerson.SetAttributeValue("Approver", "True");
                cPerson.SaveAttributeValues();
            }
            else
            {
                cPerson.SetAttributeValue("Approver", "False");
                cPerson.SaveAttributeValues();
            }
        }
        
        protected void ProcessFullTimeYears()
        {
            cPerson.SetAttributeValue("FullTimeYears", ftYears);
            cPerson.SaveAttributeValues();
            
        }

        protected void ProcessPartTimeYears()
        {
            cPerson.SetAttributeValue("PartTimeYears", ptYears);
            cPerson.SaveAttributeValues();
        }

        protected void ProcessTaxYear()
        {
            if (taxYear > 0)
            {
                cPerson.SetAttributeValue("TaxYear", taxYear);
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessTenureYears()
        {
            if (tenureYrs > 0)
            {
                cPerson.SetAttributeValue("TenorYears", tenureYrs);
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessAdminPermission()
        {
            if (admPerm)
            {
                cPerson.SetAttributeValue("AdminPermission", "True");
                cPerson.SaveAttributeValues();
            }
            else
            {
                cPerson.SetAttributeValue("AdminPermission", "False");
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessDeptHead()
        {
            if (deptHead)
            {
                cPerson.SetAttributeValue("DeptHead", "True");
                cPerson.SaveAttributeValues();
            }
            else
            {
                cPerson.SetAttributeValue("DeptHead", "False");
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessReportsToTwo()
        {
            if (arenaR2 > 0)
            {
                rockR2 = 0;
                ConvertArenaToRockPersonId(arenaR2);
                rockR2 = convertedPersonId;
                if (rockR2 > 0)
                {
                    RockPersonAttributes("R2");
                }
                else
                {
                    lOutputString.Text += " *** No Reports To Two ID *** ";
                }
            }
        }

        protected void ProcessCampusLUID()
        {
            if (campusLUID > 0)
            {
                // cross reference arena luid to rock defined value
                switch (campusLUID)
                {
                    case 10563: { cPerson.SetAttributeValue("WorkCampus", "586ad90d-6485-45f6-831f-988d04da059d"); } break;
                    case 10564: { cPerson.SetAttributeValue("WorkCampus", "30E9FC1D-253E-4BD8-A3E0-C90BBE07E86C"); } break;
                    case 10565: { cPerson.SetAttributeValue("WorkCampus", "8FE37EBE-A776-4341-A2C4-9D0A9EFB9B23"); } break;
                    case 10566: { cPerson.SetAttributeValue("WorkCampus", "4DDE4C11-5949-46FF-BD5B-2687BBC4F1D3"); } break;
                    case 10569: { cPerson.SetAttributeValue("WorkCampus", "AD67B708-4B58-4063-8060-9C775E79FFA0"); } break;
                    case 10877: { cPerson.SetAttributeValue("WorkCampus", "11D576C7-91C7-4046-8B85-C83237DD974B"); } break;
                    case 10878: { cPerson.SetAttributeValue("WorkCampus", "BB224EDD-29D9-4E42-83B4-E869669A95D9"); } break;
                    case 11089: { cPerson.SetAttributeValue("WorkCampus", "C5A0DBC7-3A61-4720-92C6-CCBBAF2B0699"); } break;
                    case 11465: { cPerson.SetAttributeValue("WorkCampus", "14CCDA3A-08FB-4821-B018-881DCD7D13FD"); } break;
                    case 11466: { cPerson.SetAttributeValue("WorkCampus", "F2759C9F-A691-4C8C-873F-B541BC65F50D"); } break;
                }
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessSecurityClassLUID()
        {
            if (secClassLUID > 0)
            {
                // cross reference arena luid to rock defined value
                switch (secClassLUID)
                {
                    case 9520: { cPerson.SetAttributeValue("SecurityClass", "53544EC1-8CF0-4443-B4A8-9068F8DF9846"); } break;
                    case 9521: { cPerson.SetAttributeValue("SecurityClass", "F48C250F-A81C-429B-A3A5-CF79FEFD1F49"); } break;
                    case 9555: { cPerson.SetAttributeValue("SecurityClass", "D714CF11-EA00-4888-8498-E565428D5444"); } break;
                    case 10570: { cPerson.SetAttributeValue("SecurityClass", "804BAD0B-BC53-433B-98F5-36F5C3AF5A87"); } break;
                    case 10944: { cPerson.SetAttributeValue("SecurityClass", "B162E88C-DCB5-4C1A-988A-2D6FE62BF016"); } break;
                    case 11669: { cPerson.SetAttributeValue("SecurityClass", "B20947FC-C1EC-451E-9268-595CD8B45753"); } break;
                    case 11670: { cPerson.SetAttributeValue("SecurityClass", "663AF1B4-E09E-46AE-AFAA-4960DA52426E"); } break;
                    case 11671: { cPerson.SetAttributeValue("SecurityClass", "DBB862F9-0600-47F3-B56D-98ACBBE72C7D"); } break;
                    case 11672: { cPerson.SetAttributeValue("SecurityClass", "5FB83598-E05D-4BD7-B3C6-32C4385497B7"); } break;                    
                }
                cPerson.SaveAttributeValues();
            }
        }
        
        protected void ProcessAcctDeptLUID()
        {
            if (acctDeptLUID > 0)
            {
                // cross reference arena luid to rock defined value
                switch (acctDeptLUID)
                {
                    case 10423: { cPerson.SetAttributeValue("AccountingDepartment", "A019F203-4C44-4FF0-B4CE-F5A5FC38FB97"); } break;
                    case 10424: { cPerson.SetAttributeValue("AccountingDepartment", "BFB3350B-741B-42F5-A19E-8160F93A631C"); } break;
                    case 10425: { cPerson.SetAttributeValue("AccountingDepartment", "9DCF4580-9B27-4F2F-894B-02EED3C55BEF"); } break;
                    case 10426: { cPerson.SetAttributeValue("AccountingDepartment", "5F47790C-AC65-495B-AA37-873257D6AA80"); } break;
                    case 10427: { cPerson.SetAttributeValue("AccountingDepartment", "8D9BCDDB-A4D1-4B9A-8BD9-422E8C498110"); } break;
                    case 10430: { cPerson.SetAttributeValue("AccountingDepartment", "5C5D4362-EC45-4A56-8D4C-3F6D5F13C811"); } break;
                    case 10431: { cPerson.SetAttributeValue("AccountingDepartment", "75C144E6-2C22-4560-8493-BFF5EDDCF2A3"); } break;
                    case 10432: { cPerson.SetAttributeValue("AccountingDepartment", "28950653-9F93-45C6-92A8-0FA9A2CC010A"); } break;
                    case 10433: { cPerson.SetAttributeValue("AccountingDepartment", "471431A8-19CF-4E1C-BA4A-1A116DC899CA"); } break;
                    case 10434: { cPerson.SetAttributeValue("AccountingDepartment", "49abd4c6-880d-4965-aaf8-171489bf3b31"); } break;
                    case 10435: { cPerson.SetAttributeValue("AccountingDepartment", "BDFD866F-AE9E-44D7-984A-4F4D696F9ED2"); } break;
                    case 10436: { cPerson.SetAttributeValue("AccountingDepartment", "F90821F9-A3C0-4F3B-AB83-3CB09EE5CF38"); } break;
                    case 10929: { cPerson.SetAttributeValue("AccountingDepartment", "008BB101-EA58-489D-9D14-A35E497722E4"); } break;
                    case 10952: { cPerson.SetAttributeValue("AccountingDepartment", "4F48CF8A-4C13-4734-AB97-7810D1A2D813"); } break;
                    case 11378: { cPerson.SetAttributeValue("AccountingDepartment", "46C31F4B-0AE2-496C-A1BF-1639A80031D5"); } break;
                    case 11379: { cPerson.SetAttributeValue("AccountingDepartment", "B7E31569-E6B2-42B3-ABA1-188189968214"); } break;
                    case 11380: { cPerson.SetAttributeValue("AccountingDepartment", "11EC7F5F-6299-4970-BCDC-5CC7F99BD7BB"); } break;
                    case 11381: { cPerson.SetAttributeValue("AccountingDepartment", "63360181-3305-4261-9F49-63A1CC87E0B4"); } break;
                    case 11382: { cPerson.SetAttributeValue("AccountingDepartment", "F7C4A0DB-C465-4636-A08C-6D82365BD94E"); } break;
                    case 11383: { cPerson.SetAttributeValue("AccountingDepartment", "2C6F20CF-FBAA-442E-9F97-6A8346B18942"); } break;
                    case 11384: { cPerson.SetAttributeValue("AccountingDepartment", "EA924693-DC20-49ED-B356-3F8F96F40D93"); } break;
                    case 11385: { cPerson.SetAttributeValue("AccountingDepartment", "4903F0E2-2384-4935-AF80-18E44ECDC2AF"); } break;
                    case 11386: { cPerson.SetAttributeValue("AccountingDepartment", "0691A92B-A64F-4670-8875-E5C6959DF711"); } break;
                    case 11426: { cPerson.SetAttributeValue("AccountingDepartment", "AC962549-0CF9-4A2B-9BB5-836F1EA134DE"); } break;
                    case 11759: { cPerson.SetAttributeValue("AccountingDepartment", "791195B0-AD35-4A0A-8FE0-A8147963D230"); } break;                    
                }
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessDeptLUID()
        {
            if (deptLUID > 0)
            {
                // cross reference arena luid to rock defined value
                switch (deptLUID)
                {
                    case 11179: { cPerson.SetAttributeValue("WorkDepartment", "5F47790C-AC65-495B-AA37-873257D6AA80"); } break; // mapped to 10426
                    case 11189: { cPerson.SetAttributeValue("WorkDepartment", "46C31F4B-0AE2-496C-A1BF-1639A80031D5"); } break; // mapped to 11378
                    case 11190: { cPerson.SetAttributeValue("WorkDepartment", "11EC7F5F-6299-4970-BCDC-5CC7F99BD7BB"); } break; // mapped to 11380
                    case 11271: { cPerson.SetAttributeValue("WorkDepartment", "471431A8-19CF-4E1C-BA4A-1A116DC899CA"); } break; // mapped to 10433
                    case 11272: { cPerson.SetAttributeValue("WorkDepartment", "AC962549-0CF9-4A2B-9BB5-836F1EA134DE"); } break; // mapped to 11426
                    case 11273: { cPerson.SetAttributeValue("WorkDepartment", "28950653-9F93-45C6-92A8-0FA9A2CC010A"); } break; // mapped to 10432
                    case 11387: { cPerson.SetAttributeValue("WorkDepartment", "AC962549-0CF9-4A2B-9BB5-836F1EA134DE"); } break; // mapped to 11426
                    case 11388: { cPerson.SetAttributeValue("WorkDepartment", "0691A92B-A64F-4670-8875-E5C6959DF711"); } break; // mapped to 11386
                    case 11389: { cPerson.SetAttributeValue("WorkDepartment", "9DCF4580-9B27-4F2F-894B-02EED3C55BEF"); } break; // mapped to 10425
                    case 11390: { cPerson.SetAttributeValue("WorkDepartment", "BFB3350B-741B-42F5-A19E-8160F93A631C"); } break; // mapped to 10424
                    case 11391: { cPerson.SetAttributeValue("WorkDepartment", "75C144E6-2C22-4560-8493-BFF5EDDCF2A3"); } break; // mapped to 10431
                    case 11392: { cPerson.SetAttributeValue("WorkDepartment", "BDFD866F-AE9E-44D7-984A-4F4D696F9ED2"); } break; // mapped to 10435
                    case 11393: { cPerson.SetAttributeValue("WorkDepartment", "A019F203-4C44-4FF0-B4CE-F5A5FC38FB97"); } break; // mapped to 10423
                    case 11394: { cPerson.SetAttributeValue("WorkDepartment", "AC962549-0CF9-4A2B-9BB5-836F1EA134DE"); } break; // mapped to 11426
                    case 11395: { cPerson.SetAttributeValue("WorkDepartment", "5C5D4362-EC45-4A56-8D4C-3F6D5F13C811"); } break; // mapped to 10430
                    case 11431: { cPerson.SetAttributeValue("WorkDepartment", "8D9BCDDB-A4D1-4B9A-8BD9-422E8C498110"); } break; // mapped to 10427
                    case 11755: { cPerson.SetAttributeValue("WorkDepartment", "49abd4c6-880d-4965-aaf8-171489bf3b31"); } break; // mapped to 10434
                    case 11756: { cPerson.SetAttributeValue("WorkDepartment", "F90821F9-A3C0-4F3B-AB83-3CB09EE5CF38"); } break; // mapped to 10436
                    
                }
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessJobTitleLUID()
        {
            if (jobTitleLUID > 0)
            {
                // cross reference arena luid to rock defined value
                switch (jobTitleLUID)
                {
                    case 11180: { cPerson.SetAttributeValue("JobTitle", "D67A8516-9992-4C05-A0BF-C9F1A332E77B"); } break;
                    case 11191: { cPerson.SetAttributeValue("JobTitle", "EC703B3D-6CAE-4490-A29F-89BC7BC8B64B"); } break;
                    case 11194: { cPerson.SetAttributeValue("JobTitle", "EA428F6D-9D2E-49DD-B685-746C667A4AC2"); } break;
                    case 11195: { cPerson.SetAttributeValue("JobTitle", "660CF304-2F7F-4E29-A643-C8D31ED0E5BA"); } break;
                    case 11196: { cPerson.SetAttributeValue("JobTitle", "08486F7D-B673-4C0E-9643-F0B9083ADFB3"); } break;
                    case 11197: { cPerson.SetAttributeValue("JobTitle", "4711F154-4905-4E9E-9628-8C037B0A9ECC"); } break;
                    case 11198: { cPerson.SetAttributeValue("JobTitle", "24572872-FCF6-48A7-B46A-AFA4873232DD"); } break;
                    case 11199: { cPerson.SetAttributeValue("JobTitle", "5905D474-04D9-4DA7-BEAE-DB6D95233E99"); } break;
                    case 11200: { cPerson.SetAttributeValue("JobTitle", "8A2C372D-F6CD-4599-BFEE-55FF28ADDAFF"); } break;
                    case 11201: { cPerson.SetAttributeValue("JobTitle", "5E337406-FCA0-4ACB-AC45-BF12A385D5F7"); } break;
                    case 11202: { cPerson.SetAttributeValue("JobTitle", "3C0DF64D-592A-48C9-9AAF-59E680E3E1FF"); } break;
                    case 11203: { cPerson.SetAttributeValue("JobTitle", "41CC0395-DB5C-4282-B013-5039AEA3A1F2"); } break;
                    case 11204: { cPerson.SetAttributeValue("JobTitle", "6E69A520-E48F-464D-AFA7-157E16664D92"); } break;
                    case 11205: { cPerson.SetAttributeValue("JobTitle", "4D6B3D91-4A21-4F4D-9CF6-7B80F92E7059"); } break;
                    case 11206: { cPerson.SetAttributeValue("JobTitle", "90D63C82-C885-411A-A686-3F3BC4427EB4"); } break;
                    case 11207: { cPerson.SetAttributeValue("JobTitle", "51F099D7-EFFE-4F02-A135-5DEADFCF354D"); } break;
                    case 11208: { cPerson.SetAttributeValue("JobTitle", "5EBB699B-4F5E-42B6-923E-9E7A9D9D1738"); } break;
                    case 11209: { cPerson.SetAttributeValue("JobTitle", "1B194E04-50DA-4D74-B4D2-A494A52ABF5A"); } break;
                    case 11210: { cPerson.SetAttributeValue("JobTitle", "2532663A-6149-4366-9DCA-DA265E937081"); } break;
                    case 11211: { cPerson.SetAttributeValue("JobTitle", "F46AE4FA-D41E-44A6-9914-33A2815DA645"); } break;
                    case 11212: { cPerson.SetAttributeValue("JobTitle", "A389DEA1-329D-4870-9BD3-4F2423100581"); } break;
                    case 11213: { cPerson.SetAttributeValue("JobTitle", "E2C69423-E075-4A2B-94CF-410331AADFE5"); } break;
                    case 11214: { cPerson.SetAttributeValue("JobTitle", "69832B6B-C447-46B2-B251-4432CC034264"); } break;
                    case 11215: { cPerson.SetAttributeValue("JobTitle", "EBF76FA0-0C93-4548-B58C-114556B0F044"); } break;
                    case 11216: { cPerson.SetAttributeValue("JobTitle", "A8CC705E-278C-4076-A6D8-D2D88A845C71"); } break;
                    case 11217: { cPerson.SetAttributeValue("JobTitle", "5623A340-C626-40B5-A7C0-195D482A908E"); } break;
                    case 11218: { cPerson.SetAttributeValue("JobTitle", "CF054BD0-1FB7-4851-BC4A-E8A46720D3A6"); } break;
                    case 11219: { cPerson.SetAttributeValue("JobTitle", "CA58A22E-C3A5-40CA-A5D1-027A91CE11C8"); } break;
                    case 11220: { cPerson.SetAttributeValue("JobTitle", "52A2DDD2-48D3-4C94-8AF8-CC49F9590F2C"); } break;
                    case 11221: { cPerson.SetAttributeValue("JobTitle", "EE83891B-62B7-4EB0-9DB1-5F68F5123962"); } break;
                    case 11222: { cPerson.SetAttributeValue("JobTitle", "7EBF2F81-3014-42FD-BEB7-9945117B229F"); } break;
                    case 11223: { cPerson.SetAttributeValue("JobTitle", "C250CCE2-8A2C-4C65-85B5-78F3EB6D3983"); } break;
                    case 11224: { cPerson.SetAttributeValue("JobTitle", "6BC741EE-40CD-451F-B500-EECC43E1E388"); } break;
                    case 11225: { cPerson.SetAttributeValue("JobTitle", "2D8B36CD-1289-41FE-8D87-DE7E7CB1C737"); } break;
                    case 11226: { cPerson.SetAttributeValue("JobTitle", "8DA2E1B2-2AB4-4E69-A753-FF3C9A2658C5"); } break;
                    case 11227: { cPerson.SetAttributeValue("JobTitle", "3064911A-5BB9-49AD-960A-AB802EDADEF6"); } break;
                    case 11228: { cPerson.SetAttributeValue("JobTitle", "0C6FFDB3-DCE7-4FB6-BF44-978E2857A608"); } break;
                    case 11229: { cPerson.SetAttributeValue("JobTitle", "4DBD3B39-FE4E-41D9-BDCD-E83568090AE1"); } break;
                    case 11230: { cPerson.SetAttributeValue("JobTitle", "600079BD-08A1-42E8-AED8-4FFAC4B1A9DC"); } break;
                    case 11231: { cPerson.SetAttributeValue("JobTitle", "207FF734-B83B-4A84-868A-BA379AE8FE29"); } break;
                    case 11232: { cPerson.SetAttributeValue("JobTitle", "1DBF592D-E7AF-49EF-923F-0D86876BCE42"); } break;
                    case 11233: { cPerson.SetAttributeValue("JobTitle", "36CCA820-E450-4610-9B07-445444C0F709"); } break;
                    case 11234: { cPerson.SetAttributeValue("JobTitle", "6FF5B1F3-AD05-49DE-98DD-1FF0239151AC"); } break;
                    case 11235: { cPerson.SetAttributeValue("JobTitle", "C65DA3F2-DD08-476C-85FF-A52516458509"); } break;
                    case 11236: { cPerson.SetAttributeValue("JobTitle", "E4538417-9590-4473-ADB4-8F5921FE47E9"); } break;
                    case 11237: { cPerson.SetAttributeValue("JobTitle", "A16828EE-7B6B-44EC-A778-447ECB33E9E2"); } break;
                    case 11238: { cPerson.SetAttributeValue("JobTitle", "39E6F4E0-F9C7-45CF-AEEE-F81C7575229C"); } break;
                    case 11239: { cPerson.SetAttributeValue("JobTitle", "98A19D47-E148-4935-804E-FB3F07AF784E"); } break;
                    case 11240: { cPerson.SetAttributeValue("JobTitle", "1A788ED6-37EF-4FBC-8FD7-CA4776456363"); } break;
                    case 11241: { cPerson.SetAttributeValue("JobTitle", "54496F40-FB5B-4193-9307-290885670618"); } break;
                    case 11242: { cPerson.SetAttributeValue("JobTitle", "404C667C-7BEF-464D-8F2F-31F43175EC83"); } break;
                    case 11243: { cPerson.SetAttributeValue("JobTitle", "8424AEDD-6EFD-4A3D-B9FB-6B37214873F4"); } break;
                    case 11244: { cPerson.SetAttributeValue("JobTitle", "5597950A-CC6B-4D50-AC69-F6DB91DC5BF3"); } break;
                    case 11245: { cPerson.SetAttributeValue("JobTitle", "64A479E4-EF14-4F46-9DB6-D1E79D145831"); } break;
                    case 11246: { cPerson.SetAttributeValue("JobTitle", "E0AC6295-0A55-44F1-95CF-784FB0158A75"); } break;
                    case 11247: { cPerson.SetAttributeValue("JobTitle", "07AC3E52-11DF-46F3-874B-43223DFFEAF3"); } break;
                    case 11248: { cPerson.SetAttributeValue("JobTitle", "03BB0532-45FE-4441-B6B4-FB2C2A943A73"); } break;
                    case 11249: { cPerson.SetAttributeValue("JobTitle", "77AF5005-B413-4FC1-9A23-64BB0A0DC49B"); } break;
                    case 11250: { cPerson.SetAttributeValue("JobTitle", "76533865-A593-4581-89B1-3D407A69675D"); } break;
                    case 11251: { cPerson.SetAttributeValue("JobTitle", "300B501B-6009-4D1D-8C83-76520AB93F4B"); } break;
                    case 11252: { cPerson.SetAttributeValue("JobTitle", "137CD991-C34B-488C-BCA5-0A151AB513BD"); } break;
                    case 11253: { cPerson.SetAttributeValue("JobTitle", "8C8D655C-F098-400B-AB1D-7A3422298A3D"); } break;
                    case 11254: { cPerson.SetAttributeValue("JobTitle", "69AACF19-65C0-4065-B4E4-32FF62D6298B"); } break;
                    case 11255: { cPerson.SetAttributeValue("JobTitle", "182BCEE4-AD9C-4646-8E0F-C8094696F1BB"); } break;
                    case 11256: { cPerson.SetAttributeValue("JobTitle", "1C14EE6B-793E-452C-A94B-F3D51A639136"); } break;
                    case 11257: { cPerson.SetAttributeValue("JobTitle", "525CCB9A-700B-46BE-92E0-A171CB0FD3FA"); } break;
                    case 11258: { cPerson.SetAttributeValue("JobTitle", "463AB7CF-F67A-4C84-8879-9F162E07DAB3"); } break;
                    case 11259: { cPerson.SetAttributeValue("JobTitle", "CF185E2A-3021-4A57-8FD9-D33EDCDF1572"); } break;
                    case 11260: { cPerson.SetAttributeValue("JobTitle", "7C7714D6-57CB-4876-91BF-2E938F94C30D"); } break;
                    case 11261: { cPerson.SetAttributeValue("JobTitle", "FA7181DF-4436-42CD-816C-5EB31887A3B7"); } break;
                    case 11262: { cPerson.SetAttributeValue("JobTitle", "0F947C9A-C2C9-4682-9CE6-4103D1EA77C0"); } break;
                    case 11263: { cPerson.SetAttributeValue("JobTitle", "753503FA-675F-4410-B50A-69A6F660E395"); } break;
                    case 11264: { cPerson.SetAttributeValue("JobTitle", "5109C6BE-1AA2-4F94-B678-83D8434F469E"); } break;
                    case 11265: { cPerson.SetAttributeValue("JobTitle", "B1356A22-D114-452B-864E-00437F2E9899"); } break;
                    case 11266: { cPerson.SetAttributeValue("JobTitle", "E83E9A92-42C1-4BFD-A0B9-CC51DBC8BE09"); } break;
                    case 11267: { cPerson.SetAttributeValue("JobTitle", "F998EEC4-3032-4492-ADCC-AFE68644A892"); } break;
                    case 11268: { cPerson.SetAttributeValue("JobTitle", "8FE2E1C8-AB47-46E3-8639-F4AD3FD7B417"); } break;
                    case 11269: { cPerson.SetAttributeValue("JobTitle", "6CFBE159-6F9D-4DC0-84A7-F33510E216AA"); } break;
                    case 11270: { cPerson.SetAttributeValue("JobTitle", "0D8D8AAE-8D54-4382-9FF1-7BE978D06522"); } break;
                    case 11631: { cPerson.SetAttributeValue("JobTitle", "CCA74C67-0D86-4396-8752-440227E33D3E"); } break;
                    case 11632: { cPerson.SetAttributeValue("JobTitle", "F89F4355-D42B-49BE-B14B-C88AEE60F61A"); } break;
                    case 11633: { cPerson.SetAttributeValue("JobTitle", "1D3070E8-D174-47DF-ADDA-A3D9593B7E10"); } break;
                    case 11634: { cPerson.SetAttributeValue("JobTitle", "FEA1B93F-2AA4-4D90-9DB1-CF06BD5B4D60"); } break;
                    case 11635: { cPerson.SetAttributeValue("JobTitle", "10FDA8F4-643B-42F1-8F6F-BEA4B5BC63DE"); } break;
                    case 11636: { cPerson.SetAttributeValue("JobTitle", "49CAD855-D55C-4755-8F9C-22863C65D121"); } break;
                    case 11637: { cPerson.SetAttributeValue("JobTitle", "CE8AC7BA-411F-453C-A7BE-74184244D124"); } break;
                    case 11638: { cPerson.SetAttributeValue("JobTitle", "8534160C-0C1A-4CA3-A3B0-4B51CB7E3980"); } break;
                    case 11639: { cPerson.SetAttributeValue("JobTitle", "47D10D78-52D5-4559-A610-782DEEAA5AFE"); } break;
                    case 11640: { cPerson.SetAttributeValue("JobTitle", "810CA263-3E3F-4494-875D-D485FF594C54"); } break;
                    case 11641: { cPerson.SetAttributeValue("JobTitle", "64C91BD1-F906-4E90-9B91-80669C25706C"); } break;
                    case 11642: { cPerson.SetAttributeValue("JobTitle", "3A65BD34-5AD5-441A-9FDF-E24B47C12B02"); } break;
                    case 11643: { cPerson.SetAttributeValue("JobTitle", "2205EFEC-2646-4CAA-B9A5-4A6D4A6E6877"); } break;
                    case 11644: { cPerson.SetAttributeValue("JobTitle", "34479A20-54D5-4DD1-B02E-4ED091C6813B"); } break;
                    case 11645: { cPerson.SetAttributeValue("JobTitle", "0F7CDB2A-0752-4ED9-B547-03649FA207E3"); } break;
                    case 11646: { cPerson.SetAttributeValue("JobTitle", "5420C8AC-1E34-42A4-853D-CDBF3B176AF2"); } break;
                    case 11647: { cPerson.SetAttributeValue("JobTitle", "5D6297B5-84EF-4B98-A0CD-9FA9BBC354B2"); } break;
                    case 11648: { cPerson.SetAttributeValue("JobTitle", "6DD6EE15-738E-48C5-BCC5-96C6ED7F414A"); } break;
                    case 11649: { cPerson.SetAttributeValue("JobTitle", "6B2382AE-839A-451F-8E4E-AC7FF8E4FE08"); } break;
                    case 11650: { cPerson.SetAttributeValue("JobTitle", "62F39510-ABB8-4622-AF20-4A5D384004E8"); } break;
                    case 11651: { cPerson.SetAttributeValue("JobTitle", "A893D6E1-580B-4365-989A-D841051A6268"); } break;
                    case 11652: { cPerson.SetAttributeValue("JobTitle", "CF136E97-6E40-4CF1-82AC-5656200ED611"); } break;
                    case 11653: { cPerson.SetAttributeValue("JobTitle", "A3300371-D262-4A27-BB34-20BD2F40EAAC"); } break;
                    case 11654: { cPerson.SetAttributeValue("JobTitle", "5AC21722-2207-44CC-9C08-D02F5AC9D118"); } break;
                    case 11655: { cPerson.SetAttributeValue("JobTitle", "8463134C-5239-4722-AFB6-DA9572E23C56"); } break;
                    case 11656: { cPerson.SetAttributeValue("JobTitle", "BF440B6B-7E26-48AC-AB11-D213882BB9B7"); } break;
                    case 11657: { cPerson.SetAttributeValue("JobTitle", "5ADA5A6A-6298-4991-B80C-35E23CA0566B"); } break;
                    case 11658: { cPerson.SetAttributeValue("JobTitle", "270CD5C5-DA75-465A-9A5E-FB231EE3C835"); } break;
                    case 11659: { cPerson.SetAttributeValue("JobTitle", "9993E0D1-B03F-481A-8A32-F7BA8BC0FF57"); } break;
                    case 11664: { cPerson.SetAttributeValue("JobTitle", "859DE022-86FF-497E-9D87-AAEE04A1AA8F"); } break;
                    case 11791: { cPerson.SetAttributeValue("JobTitle", "AEEAB0CB-F8BC-4F12-BDF6-464EAA1C1078"); } break;
                    case 11794: { cPerson.SetAttributeValue("JobTitle", "8AA2CAF4-3343-4D4C-94C4-EB46A10F7963"); } break;
                    case 11797: { cPerson.SetAttributeValue("JobTitle", "38EA9F9D-1936-4414-8AB8-B1D939D4DCA5"); } break;
                    case 11798: { cPerson.SetAttributeValue("JobTitle", "8EB14D20-6D11-4C28-B078-2B848CC0B4B6"); } break;
                    case 11799: { cPerson.SetAttributeValue("JobTitle", "8BEBA390-D2CD-4030-97BE-4EB0C8F0D7C5"); } break;
                    case 11800: { cPerson.SetAttributeValue("JobTitle", "8B8543F9-63A8-46F6-8B52-F4B9936F92AB"); } break;
                    case 11801: { cPerson.SetAttributeValue("JobTitle", "46D32C43-123B-4BFB-A4A5-DC09308A5819"); } break;
                    case 11802: { cPerson.SetAttributeValue("JobTitle", "B1CE0388-2A7F-43CE-AA22-2B4CD0ADA9C0"); } break;
                    case 11803: { cPerson.SetAttributeValue("JobTitle", "2AEF671C-0D4F-48CF-8081-F90CDD13CD16"); } break;
                    case 11805: { cPerson.SetAttributeValue("JobTitle", "041AB8E5-3F9D-4682-9012-14978B8FBB3C"); } break;
                    case 11813: { cPerson.SetAttributeValue("JobTitle", "35D5CE4D-80E5-4D50-A654-3D4DF95C0BF1"); } break;
                    case 11859: { cPerson.SetAttributeValue("JobTitle", "7B4D49FB-4952-46B6-9C7A-823A6C15CDAC"); } break;
                    case 11860: { cPerson.SetAttributeValue("JobTitle", "3FF52BA0-CEC5-4A94-B834-7AF690DAB19D"); } break;
                    case 11863: { cPerson.SetAttributeValue("JobTitle", "5FAFD85E-1CFF-4404-A045-A3E709CC6430"); } break;
                    case 11865: { cPerson.SetAttributeValue("JobTitle", "837B0A49-1037-41A1-A4F2-C2BFA07F87A6"); } break;
                    case 11866: { cPerson.SetAttributeValue("JobTitle", "2229C96F-55E5-4177-B865-8C6878ADDF71"); } break;
                    case 11867: { cPerson.SetAttributeValue("JobTitle", "8560DF5C-3E89-4843-B0D8-1953C2A617D9"); } break;
                    case 11868: { cPerson.SetAttributeValue("JobTitle", "9EED0E03-0A3C-474B-A051-9A616926A232"); } break;
                    case 11869: { cPerson.SetAttributeValue("JobTitle", "6991A2F6-58FA-49D4-BA2E-E7AFDF0E9A7E"); } break;
                    case 11870: { cPerson.SetAttributeValue("JobTitle", "F13751AF-6D74-4640-B71B-7B7CEC579CA5"); } break;
                    case 11871: { cPerson.SetAttributeValue("JobTitle", "B1F0F6DD-D992-44F9-BF0A-64F00AB7BEA7"); } break;
                    case 11874: { cPerson.SetAttributeValue("JobTitle", "C31B8E50-0278-4F80-87B5-9BB7CC6A71F8"); } break;
                    case 11875: { cPerson.SetAttributeValue("JobTitle", "B4D2E749-D331-4EA6-BBFD-7EE1A1116CAE"); } break;
                    case 11876: { cPerson.SetAttributeValue("JobTitle", "E4A3A847-5120-4948-B011-EA14C4E8E720"); } break;
                    case 11877: { cPerson.SetAttributeValue("JobTitle", "C7534E63-3349-47A8-929C-984A02C30BDC"); } break;
                    case 11878: { cPerson.SetAttributeValue("JobTitle", "4973D2A1-5408-40D4-8FA0-072E4F124E0A"); } break;
                    case 11879: { cPerson.SetAttributeValue("JobTitle", "1107EF64-9C36-4B5D-87DA-7CC05F92602E"); } break;
                    case 11884: { cPerson.SetAttributeValue("JobTitle", "F1561BB7-DFE3-47E1-BA54-EA6E682F2756"); } break;
                    case 11908: { cPerson.SetAttributeValue("JobTitle", "46B3D326-7266-4F3B-90A6-E7DD057935D5"); } break;
                }
                cPerson.SaveAttributeValues();
            }
        }

        protected void ProcessShiftCodeLUID()
        {
            if (shiftCodeLUID > 0)
            {
                // cross reference arena luid to rock defined value
                switch (shiftCodeLUID)
                {
                    case 11286: { cPerson.SetAttributeValue("ShiftCode", "ED2FE142-78B8-4390-99E1-8544CEE26B47"); } break;
                    case 11287: { cPerson.SetAttributeValue("ShiftCode", "9439CA90-D102-4460-B90C-D08F3729A443"); } break;
                    case 11446: { cPerson.SetAttributeValue("ShiftCode", "91198844-3E8A-43DB-B4BE-C9DB5A39A852"); } break;
                    case 11288: { cPerson.SetAttributeValue("ShiftCode", "763AB811-7806-4AE9-8A7A-C0141157C5C3"); } break;
                    case 11289: { cPerson.SetAttributeValue("ShiftCode", "74AD7172-D0B9-42AE-99C0-BA9D4FF72BDE"); } break;
                    case 11502: { cPerson.SetAttributeValue("ShiftCode", "28C36281-CAFA-4EBF-895E-0E6B2B15AC3D"); } break;
                    case 11507: { cPerson.SetAttributeValue("ShiftCode", "FF68CDEB-3D1C-4F67-80CE-26273FDEA578"); } break;
                    case 11557: { cPerson.SetAttributeValue("ShiftCode", "AB318417-ABD2-4DF1-9374-6B8F75410D79"); } break;
                    case 11485: { cPerson.SetAttributeValue("ShiftCode", "1816E305-D285-4A69-AFDB-B89C34F83508"); } break;
                    case 11904: { cPerson.SetAttributeValue("ShiftCode", "A0356954-CB67-4D7B-BAEC-9CFC197670A5"); } break;
                    case 11469: { cPerson.SetAttributeValue("ShiftCode", "B9E810EC-37C6-4AAB-8A04-A3D845134DC3"); } break;
                    case 11442: { cPerson.SetAttributeValue("ShiftCode", "1A1DF1FC-E9C4-44AC-BBC6-0D05EDF0F66D"); } break;
                    case 11661: { cPerson.SetAttributeValue("ShiftCode", "D9135E0F-4718-473B-81DB-A3C95C3B7B5E"); } break;
                    case 11484: { cPerson.SetAttributeValue("ShiftCode", "F990CC5A-E379-4862-9BD9-7FEA88C01F03"); } break;
                    case 11317: { cPerson.SetAttributeValue("ShiftCode", "EF163DDF-FF9D-467C-8BDB-D4E4603A62BF"); } break;
                    case 11903: { cPerson.SetAttributeValue("ShiftCode", "7564EBAC-134C-4276-B418-F81A13B00EB6"); } break;
                    case 11470: { cPerson.SetAttributeValue("ShiftCode", "47A70EDF-BD3F-42AF-805F-F6ADA1BB5441"); } break;
                    case 11482: { cPerson.SetAttributeValue("ShiftCode", "78D5D9AF-47CE-473A-803B-93FEBD412752"); } break;
                    case 11291: { cPerson.SetAttributeValue("ShiftCode", "267B3ED8-480D-4FFF-9D0E-981501B2CCBA"); } break;
                    case 11316: { cPerson.SetAttributeValue("ShiftCode", "A648B846-30AA-4698-B606-74DA96F9B9C2"); } break;
                    case 11290: { cPerson.SetAttributeValue("ShiftCode", "FF5C5CC6-9E90-4B46-9DC9-C1C429CB9863"); } break;
                    case 11275: { cPerson.SetAttributeValue("ShiftCode", "B6E2DF59-02F0-4DA2-AFF0-689F9EC95380"); } break;
                    case 11292: { cPerson.SetAttributeValue("ShiftCode", "08430B5C-6EF8-4858-B79F-BE4484830A00"); } break;
                    case 11504: { cPerson.SetAttributeValue("ShiftCode", "6FCD3E1E-05E1-4120-97F7-8DCA151D2CC9"); } break;
                    case 11293: { cPerson.SetAttributeValue("ShiftCode", "52EAD4E2-08AE-4CD9-A4E0-E266B3C6392F"); } break;
                    case 11294: { cPerson.SetAttributeValue("ShiftCode", "B6BE24C7-B9FD-4506-84AE-BBBB3A456F21"); } break;
                    case 11885: { cPerson.SetAttributeValue("ShiftCode", "EBD886F1-60BF-48AC-8CDD-3ACF845B41AF"); } break;
                    case 11556: { cPerson.SetAttributeValue("ShiftCode", "1A356260-863D-44A9-BA9C-10DFE97B479F"); } break;
                    case 11674: { cPerson.SetAttributeValue("ShiftCode", "B4EA732C-30E2-4DBC-B7C8-C911CEB7DDA3"); } break;
                    case 11281: { cPerson.SetAttributeValue("ShiftCode", "FE6F4594-D082-4CF8-B38D-391CC157726A"); } break;
                    case 11295: { cPerson.SetAttributeValue("ShiftCode", "88258A10-1335-497C-9352-80686EB80E6A"); } break;
                    case 11276: { cPerson.SetAttributeValue("ShiftCode", "260B7A15-4103-4DDE-8C23-05F387F56AC8"); } break;
                    case 11285: { cPerson.SetAttributeValue("ShiftCode", "01DE8F26-3F20-4834-9352-5D386EE57E10"); } break;
                    case 11474: { cPerson.SetAttributeValue("ShiftCode", "F1EF319B-2496-4426-BAE4-10A672F8AAAA"); } break;
                    case 11277: { cPerson.SetAttributeValue("ShiftCode", "DDFE2D15-CBD6-48E0-824B-095AEA7EB274"); } break;
                    case 11420: { cPerson.SetAttributeValue("ShiftCode", "62964951-3D79-4FDF-83DC-B41809223C48"); } break;
                    case 11314: { cPerson.SetAttributeValue("ShiftCode", "0FB933AA-23D1-43C6-8B6B-A200416A485A"); } break;
                    case 11278: { cPerson.SetAttributeValue("ShiftCode", "6B374BAA-3609-4367-9AED-41B5D82AC1AA"); } break;
                    case 11279: { cPerson.SetAttributeValue("ShiftCode", "8F9E8B6F-08AF-4880-93E0-7C2C4FAADED3"); } break;
                    case 11280: { cPerson.SetAttributeValue("ShiftCode", "DAF9C82D-5DBF-4883-9214-32037E2393F0"); } break;
                    case 11660: { cPerson.SetAttributeValue("ShiftCode", "54369A7C-FEFD-435E-8EE7-0A6A56DF9B9F"); } break;
                    case 11422: { cPerson.SetAttributeValue("ShiftCode", "C2825C23-5765-4DD1-8696-58EC5261FC7C"); } break;
                    case 11662: { cPerson.SetAttributeValue("ShiftCode", "71266539-2AC6-4065-B107-82BAE6E413DF"); } break;
                    case 11663: { cPerson.SetAttributeValue("ShiftCode", "5E104491-F45B-4581-9FD5-633DCF29DC37"); } break;
                    case 11282: { cPerson.SetAttributeValue("ShiftCode", "F9748C8E-9B57-4479-AF12-39009B8951E8"); } break;
                    case 11423: { cPerson.SetAttributeValue("ShiftCode", "D62A11DD-8DEB-4F9C-9422-C73BFFDEA84E"); } break;
                    case 11421: { cPerson.SetAttributeValue("ShiftCode", "793C56F2-E254-4105-B06E-7CDDC9EE3337"); } break;
                    case 11496: { cPerson.SetAttributeValue("ShiftCode", "B770854C-0655-42B8-96C8-5D573FC444C9"); } break;
                    case 11483: { cPerson.SetAttributeValue("ShiftCode", "AF7CB509-E792-4392-9A0C-B7AC8F45158F"); } break;
                    case 11665: { cPerson.SetAttributeValue("ShiftCode", "C37FCAF1-860F-4B67-A193-14BB857B4D86"); } break;
                    case 11808: { cPerson.SetAttributeValue("ShiftCode", "6A7469A0-EFF5-4887-9A4C-13C6D6591A2C"); } break;
                    case 11544: { cPerson.SetAttributeValue("ShiftCode", "A9A4D339-B024-44DF-BB35-0F049BCDD9FC"); } break;
                    case 11793: { cPerson.SetAttributeValue("ShiftCode", "7D2C6613-E4A3-4ECC-A48F-4AE86CC9FD7E"); } break;
                    case 11296: { cPerson.SetAttributeValue("ShiftCode", "1CA5846E-895F-47C1-BE87-E7B09D7360B1"); } break;
                    case 11297: { cPerson.SetAttributeValue("ShiftCode", "4BA57794-8B07-4B57-B861-6EE840839882"); } break;
                    case 11298: { cPerson.SetAttributeValue("ShiftCode", "2240EACF-21AB-4008-AB17-860972498788"); } break;
                    case 11299: { cPerson.SetAttributeValue("ShiftCode", "CF72EADC-A08A-4F26-BF16-818979ACA197"); } break;
                    case 11555: { cPerson.SetAttributeValue("ShiftCode", "26193B89-37A3-4C4A-898B-719F8F73A50E"); } break;
                    case 11300: { cPerson.SetAttributeValue("ShiftCode", "C770F70D-4F66-4E70-80E8-8FFD114D1EDB"); } break;
                    case 11497: { cPerson.SetAttributeValue("ShiftCode", "BBA0E71C-3DF1-4C9C-8D70-1188B5327DD8"); } break;
                    case 11315: { cPerson.SetAttributeValue("ShiftCode", "874195DD-D0E1-47D6-9A7A-BA38CFBFE100"); } break;
                    case 11301: { cPerson.SetAttributeValue("ShiftCode", "91C80315-682F-4518-98C1-994F143C9E37"); } break;
                    case 11666: { cPerson.SetAttributeValue("ShiftCode", "C63E62A9-9A9A-4465-8BD3-73FDD0916FA6"); } break;
                    case 11283: { cPerson.SetAttributeValue("ShiftCode", "3E4C6C7C-7DD9-434F-8DEF-F475DBE7AC96"); } break;
                    case 11284: { cPerson.SetAttributeValue("ShiftCode", "C7FDB183-01A0-4A6E-8588-542B4EEA089D"); } break;
                    case 11302: { cPerson.SetAttributeValue("ShiftCode", "6F7B9023-1CBA-466B-A4B8-87EB1F3C5429"); } break;
                }
                cPerson.SaveAttributeValues();
            }
        }

        #endregion

        #region Events

        #endregion

    }
}