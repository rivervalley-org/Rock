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
    [DisplayName("Global Trips Process Emails")]
    [Category("org_rivervalley > GlobalTripChecklists")]
    [Description("Global Trip Process Emails")]
    [TextField("GlobalTeamYears", "List the Parent Group Id's to process (up to three years) - seperate with a comma. For example: 1234,45653,548224")]

    public partial class GlobalTripProcessEmails : Rock.Web.UI.RockBlock
    {
        #region Fields

        private bool sendEmail = false;

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private DateTime today = DateTime.Now;
        private DateTime nullDate = new DateTime(1900, 1, 1);
        private DateTime p2Date = new DateTime();
        private DateTime p3Date = new DateTime();
        private DateTime p4Date = new DateTime();
        private DateTime departureDate;
        private DateTime p2reminderDate;
        private DateTime p2lateItemsDate;
        private DateTime p2finalDate;
        private DateTime p3reminderDate;
        private DateTime p3lateItemsDate;
        private DateTime p3finalDate;
        private DateTime p4reminderDate;
        private DateTime p4lateItemsDate;
        private DateTime p4finalDate;
        private int p2reminderDays;
        private int p2lateItemsDays;
        private int p2finalDays;
        private string p2reminderIsActive;
        private string p2lateIsActive;
        private string p2finalIsActive;
        private int p3reminderDays;
        private int p3lateItemsDays;
        private int p3finalDays;
        private string p3reminderIsActive;
        private string p3lateIsActive;
        private string p3finalIsActive;
        private int p4reminderDays;
        private int p4lateItemsDays;
        private int p4finalDays;
        private string p4reminderIsActive;
        private string p4lateIsActive;
        private string p4finalIsActive;
        private List<int> tripItemsId = new List<int>();
        private List<int> tripParticipantsId = new List<int>();
        //private Person tripPerson = null;
        private int tripId;
        private bool emailSent;
        private string emailFrom;
        private string emailFromAddress;
        private string emailReplyTo;
        private string emailSubject;
        private string emailBody;
        private string personalizedEmailBody;
        private string emailTo = "globalproject@rivervalley.org";
        private string missingRequirements;
        private string missingRequirementsOutput;
        private bool itemStatus;
        //private int itemId;
        private int counter;
        private GlobalTripItemEmailLog newLog = null;
        private List<int> personAliasList = new List<int>();
        private string aliasString;
        private List<int> globalTeamYears = new List<int>();
        private string blockYears;
        private string tripYears;
        private List<string> ccList = new List<string>();

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            pnlSendSelection.Visible = true;
            pnlEmailsSent.Visible = false;
            if (!Page.IsPostBack)
            {
                rbStatus.Text = 0.ToString();
            } 
        }

        #endregion

        #region Events

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnContinue_Click(object sender, EventArgs e)
        {
            pnlSendSelection.Visible = false;
            pnlEmailsSent.Visible = true;

            var status = Int32.Parse(rbStatus.Text);
            if(status == 1)
            {
                sendEmail = true;
                lStatusString.Text = " (Emails Sent)";
            }
            else
            {
                sendEmail = false;
                lStatusString.Text = " (Preview Only)";
            }
            
            GetTripYears();
            
            tripYears = "";
            int counter = 0;
            foreach (int item in globalTeamYears)
            {
                counter++;
                if (counter > 1)
                {
                    tripYears = tripYears + ",";
                }
                tripYears = tripYears + item;

            }
            
            ccList.Add("globalproject@rivervalley.org"); // could add more email addresses to this CC list if desired
            GetEmailDates();
            GetEmailActive();
            GetTrips();
            
        }

        #endregion

            #region Methods

        protected void GetTrips()
        {

            string qryString = "";
            qryString = qryString + "SELECT g.id,g.name,av1.Value AS Payment2,av2.Value AS Payment3,av3.Value AS Payment4, av4.value AS Active, av5.Value AS Departure ";
            qryString = qryString + "FROM[Group] g ";
            qryString = qryString + "LEFT OUTER JOIN AttributeValue av1 ON g.Id = av1.EntityId ";
            qryString = qryString + "LEFT OUTER JOIN AttributeValue av2 ON g.Id = av2.EntityId ";
            qryString = qryString + "LEFT OUTER JOIN AttributeValue av3 ON g.Id = av3.EntityId ";
            qryString = qryString + "LEFT OUTER JOIN AttributeValue av4 ON g.Id = av4.EntityId ";
            qryString = qryString + "LEFT OUTER JOIN AttributeValue av5 ON g.Id = av5.EntityId ";
            qryString = qryString + "WHERE ParentGroupId IN (" + tripYears + ")";
            qryString = qryString + "AND av1.AttributeId = 8919 ";
            qryString = qryString + "AND av2.AttributeId = 8921 ";
            qryString = qryString + "AND av3.AttributeId = 8920 ";
            qryString = qryString + "AND av4.AttributeId = 3841 ";
            qryString = qryString + "AND av4.Value LIKE'32CB2FC4-F46B-4150-AEFE-739FE7695B85' ";
            qryString = qryString + "AND av5.AttributeId = 3838 ";
            qryString = qryString + "AND CAST(av5.Value AS DATETIME2) >= Convert(datetime, Convert(int, GetDate())) ";
            qryString = qryString + "ORDER BY av5.Value";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                string departure = rdr.GetString(6);
                string p2String = rdr.GetString(2);
                string p3String = rdr.GetString(3);
                string p4String = rdr.GetString(4);

                tripId = rdr.GetInt32(0);

                if (string.IsNullOrEmpty(departure))
                {
                    departureDate = nullDate;
                }
                else
                {
                    departureDate = DateTime.Parse(rdr.GetString(6));
                }

                if (departureDate > today)
                {
                    //lOutputString.Text += "<hr><b>PROCESS " + rdr.GetString(1) + "</b>";
                    WriteTripString(rdr.GetString(1));

                    if (string.IsNullOrEmpty(p2String))
                    {
                        p2Date = nullDate;
                    }
                    else
                    {
                        p2Date = DateTime.Parse(rdr.GetString(2));
                    }
                    if (string.IsNullOrEmpty(p3String))
                    {
                        p3Date = nullDate;
                    }
                    else
                    {
                        p3Date = DateTime.Parse(rdr.GetString(3));
                    }
                    if (string.IsNullOrEmpty(p4String))
                    {
                        p4Date = nullDate;
                    }
                    else
                    {
                        p4Date = DateTime.Parse(rdr.GetString(4));
                    }

                    if (p2Date > nullDate)
                    {
                        p2reminderDate = p2Date.AddDays(p2reminderDays);
                        p2lateItemsDate = p2Date.AddDays(p2lateItemsDays);
                        p2finalDate = p2Date.AddDays(p2finalDays);
                    }
                    else
                    {
                        p2reminderDate = nullDate;
                        p2lateItemsDate = nullDate;
                        p2finalDate = nullDate;
                    }

                    if (p3Date > nullDate)
                    {
                        p3reminderDate = p3Date.AddDays(p3reminderDays);
                        p3lateItemsDate = p3Date.AddDays(p3lateItemsDays);
                        p3finalDate = p3Date.AddDays(p3finalDays);
                    }
                    else
                    {
                        p3reminderDate = nullDate;
                        p3lateItemsDate = nullDate;
                        p3finalDate = nullDate;
                    }
                    if (p4Date > nullDate)
                    {
                        p4reminderDate = p4Date.AddDays(p4reminderDays);
                        p4lateItemsDate = p4Date.AddDays(p4lateItemsDays);
                        p4finalDate = p4Date.AddDays(p4finalDays);
                    }
                    else
                    {
                        p4reminderDate = nullDate;
                        p4lateItemsDate = nullDate;
                        p4finalDate = nullDate;
                    }
                    // START OF DATE COMPARISSONS P2R,P2L,P2F,P3R,P3L,P3F,P4R,P4L,P4F
                    if (p2reminderIsActive == "True") // If P2R is off - don't process emails
                    {
                        emailSent = false;
                        if (p2reminderDate < today && today < p3Date) // process P2 Reminder Emails unless P3 date is here... do not need to process P2 after P3 date                    
                        {
                            if (p2reminderDate < today && today < p2lateItemsDate)
                            {
                                //lOutputString.Text += "<br><b>Second Payment Reminder</b>";

                                BuildTripChecklist(tripId, 2);

                                CheckPreviousEmailSent(tripId, "P2R");
                                if (emailSent == false)
                                {
                                    BuildEmailContent(6936); // Defined Type = Email Template 1 -  Defined Value = Reminder Email                       

                                    foreach (int pItem in tripParticipantsId)
                                    {
                                        // we need to process all participant alias ids for proper data handling
                                        aliasString = "";
                                        BuildParticipantAliasIds(pItem);

                                        counter = 0;
                                        missingRequirements = "";
                                        missingRequirementsOutput = "";
                                        foreach (int tItem in tripItemsId)
                                        {
                                            CheckItemFormStatusByAliasList(tripId, tItem, aliasString);
                                            if (itemStatus == false)
                                            {
                                                counter++;
                                                GetItemName(tItem);
                                            }
                                        }
                                        if (counter > 0) // send email
                                        {
                                            PersonalizeEmail(tripId, pItem, p2Date.ToShortDateString());
                                            WriteEmailLog(tripId, pItem, "P2R");
                                        }
                                    }
                                }
                            }
                        } // CLOSING BRACKET P2R
                    }
                    if (p2lateIsActive == "True") // If P2L is off - don't process emails
                    {
                        emailSent = false;
                        if (p2lateItemsDate < today && today < p3Date) // process P2 Late Emails
                        {
                            if (p2lateItemsDate < today && today < p2finalDate)
                            {
                                //lOutputString.Text += "<br>Second Payment Late Items</b>";
                                BuildTripChecklist(tripId, 2);
                                CheckPreviousEmailSent(tripId, "P2L");
                                if (emailSent == false)
                                {
                                    BuildEmailContent(6940); // Defined Type = Email Templates -  Defined Value = Late Items Email                        

                                    foreach (int pItem in tripParticipantsId)
                                    {
                                        counter = 0;
                                        missingRequirements = "";
                                        missingRequirementsOutput = "";

                                        // we need to process all participant alias ids for proper data handling
                                        aliasString = "";
                                        BuildParticipantAliasIds(pItem);

                                        foreach (int tItem in tripItemsId)
                                        {
                                            CheckItemFormStatusByAliasList(tripId, tItem, aliasString);
                                            if (itemStatus == false)
                                            {
                                                counter++;
                                                GetItemName(tItem);
                                            }
                                        }
                                        if (counter > 0) // send email
                                        {
                                            PersonalizeEmail(tripId, pItem, p2Date.ToShortDateString());
                                            WriteEmailLog(tripId, pItem, "P2L");
                                        }
                                    }
                                }
                            }
                        } // CLOSING BRACKET P2L    
                    }
                    if (p2finalIsActive == "True") // If P2F is off - don't process emails
                    {
                        emailSent = false;
                        if (p2finalDate < today && today < p3Date) // process P2 Final Emails
                        {
                            //lOutputString.Text += "<br><b>Second Payment Final Past Due</b>";
                            BuildTripChecklist(tripId, 2);
                            CheckPreviousEmailSent(tripId, "P2F");
                            if (emailSent == false)
                            {
                                BuildEmailContent(6941); // Defined Type = Email Templates -  Defined Value = Final Email                        

                                foreach (int pItem in tripParticipantsId)
                                {
                                    counter = 0;
                                    missingRequirements = "";
                                    missingRequirementsOutput = "";

                                    // we need to process all participant alias ids for proper data handling
                                    aliasString = "";
                                    BuildParticipantAliasIds(pItem);

                                    foreach (int tItem in tripItemsId)
                                    {
                                        CheckItemFormStatusByAliasList(tripId, tItem, aliasString);
                                        if (itemStatus == false)
                                        {
                                            counter++;
                                            GetItemName(tItem);
                                        }
                                    }
                                    if (counter > 0) // send email
                                    {
                                        PersonalizeEmail(tripId, pItem, p2Date.ToShortDateString());
                                        WriteEmailLog(tripId, pItem, "P2F");
                                    }
                                }
                            }
                        } // CLOSING BRACKET P2F
                    }
                    if (p3reminderIsActive == "True") // If P3R is off - don't process emails
                    {
                        emailSent = false;
                        if (p3reminderDate < today && today < p4Date) // process P3 Reminder Emails
                        {
                            if (p3reminderDate < today && today < p3lateItemsDate)
                            {
                                //lOutputString.Text += "<br><b>Third Payment Reminder</b>";
                                BuildTripChecklist(tripId, 3);

                                CheckPreviousEmailSent(tripId, "P3R");
                                if (emailSent == false)
                                {
                                    BuildEmailContent(6936); // Defined Type = Email Template 1 -  Defined Value = Reminder Email                        

                                    foreach (int pItem in tripParticipantsId)
                                    {
                                        counter = 0;
                                        missingRequirements = "";
                                        missingRequirementsOutput = "";

                                        // we need to process all participant alias ids for proper data handling
                                        aliasString = "";
                                        BuildParticipantAliasIds(pItem);

                                        foreach (int tItem in tripItemsId)
                                        {
                                            CheckItemFormStatusByAliasList(tripId, tItem, aliasString);
                                            if (itemStatus == false)
                                            {
                                                counter++;
                                                GetItemName(tItem);
                                            }
                                        }
                                        if (counter > 0) // send email
                                        {
                                            PersonalizeEmail(tripId, pItem, p3Date.ToShortDateString());
                                            WriteEmailLog(tripId, pItem, "P3R");
                                        }
                                    }
                                }
                            }
                        } // CLOSING BRACKET P3R
                    }
                    // Continue to Late Email Date
                    if (p3lateIsActive == "True") // If P3L is off - don't process emails
                    {
                        emailSent = false;
                        if (p3lateItemsDate < today && today < p4Date) // process P3 Late Emails
                        {
                            if (p3lateItemsDate < today && today < p3finalDate)
                            {
                                //lOutputString.Text += "<br><b>Third Payment Late Items</b>";

                                BuildTripChecklist(tripId, 3);
                                CheckPreviousEmailSent(tripId, "P3L");
                                if (emailSent == false)
                                {
                                    BuildEmailContent(6940); // Defined Type = Email Templates -  Defined Value = Late Items Email                        

                                    foreach (int pItem in tripParticipantsId)
                                    {
                                        counter = 0;
                                        missingRequirements = "";
                                        missingRequirementsOutput = "";

                                        // we need to process all participant alias ids for proper data handling
                                        aliasString = "";
                                        BuildParticipantAliasIds(pItem);

                                        foreach (int tItem in tripItemsId)
                                        {
                                            CheckItemFormStatusByAliasList(tripId, tItem, aliasString);
                                            if (itemStatus == false)
                                            {
                                                counter++;
                                                GetItemName(tItem);
                                            }
                                        }
                                        if (counter > 0) // send email
                                        {
                                            PersonalizeEmail(tripId, pItem, p3Date.ToShortDateString());
                                            WriteEmailLog(tripId, pItem, "P3L");
                                        }
                                    }
                                }
                            }
                        } // CLOSING BRACKET P3L
                    }
                    // Continue to Final Date
                    if (p3finalIsActive == "True") // If P3F is off - don't process emails
                    {
                        emailSent = false;
                        if (p3finalDate < today && today < p4Date) // process P3 Final Emails
                        {
                            //lOutputString.Text += "<br><b>Third Payment Final Past Due</b>";

                            BuildTripChecklist(tripId, 3);
                            CheckPreviousEmailSent(tripId, "P3F");
                            if (emailSent == false)
                            {
                                BuildEmailContent(6941); // Defined Type = Email Templates -  Defined Value = Final Email                        

                                foreach (int pItem in tripParticipantsId)
                                {
                                    counter = 0;
                                    missingRequirements = "";
                                    missingRequirementsOutput = "";

                                    // we need to process all participant alias ids for proper data handling
                                    aliasString = "";
                                    BuildParticipantAliasIds(pItem);

                                    foreach (int tItem in tripItemsId)
                                    {

                                        CheckItemFormStatusByAliasList(tripId, tItem, aliasString);
                                        if (itemStatus == false)
                                        {
                                            counter++;
                                            GetItemName(tItem);
                                        }
                                    }
                                    if (counter > 0) // send email
                                    {
                                        PersonalizeEmail(tripId, pItem, p3Date.ToShortDateString());
                                        WriteEmailLog(tripId, pItem, "P3F");
                                    }
                                }
                            }
                        } // CLOSING BRACKET P3F
                    }
                    if (p4reminderIsActive == "True") // If P4R is off - don't process emails
                    {
                        emailSent = false;
                        if (p4reminderDate < today && today < p4lateItemsDate) // process P4 Reminder Emails
                        {
                            //lOutputString.Text += "<br><b>Final Payment Reminder</b>";

                            BuildTripChecklist(tripId, 4);
                            CheckPreviousEmailSent(tripId, "P4R");
                            if (emailSent == false)
                            {
                                BuildEmailContent(6936); // Defined Type = Email Template 1 -  Defined Value = Reminder Email                        

                                foreach (int pItem in tripParticipantsId)
                                {
                                    counter = 0;
                                    missingRequirements = "";
                                    missingRequirementsOutput = "";

                                    // we need to process all participant alias ids for proper data handling
                                    aliasString = "";
                                    BuildParticipantAliasIds(pItem);

                                    foreach (int tItem in tripItemsId)
                                    {
                                        CheckItemFormStatusByAliasList(tripId, tItem, aliasString);
                                        if (itemStatus == false)
                                        {
                                            counter++;
                                            GetItemName(tItem);
                                        }
                                    }
                                    if (counter > 0) // send email
                                    {
                                        PersonalizeEmail(tripId, pItem, p4Date.ToShortDateString());
                                        WriteEmailLog(tripId, pItem, "P4R");
                                    }
                                }
                            }
                        } // CLOSING BRACKET P4R
                    }
                    // Continue to Late Email Date
                    if (p4lateIsActive == "True") // If P4L is off - don't process emails
                    {
                        emailSent = false;
                        if (p4lateItemsDate < today && today < p4finalDate) // process P4 Late Emails
                        {
                            //lOutputString.Text += "<br><b>Final Payment Late Items</b>";

                            BuildTripChecklist(tripId, 4);
                            CheckPreviousEmailSent(tripId, "P4L");
                            if (emailSent == false)
                            {
                                BuildEmailContent(6940); // Defined Type = Email Templates -  Defined Value = Late Items Email                        

                                foreach (int pItem in tripParticipantsId)
                                {
                                    counter = 0;
                                    missingRequirements = "";
                                    missingRequirementsOutput = "";

                                    // we need to process all participant alias ids for proper data handling
                                    aliasString = "";
                                    BuildParticipantAliasIds(pItem);

                                    foreach (int tItem in tripItemsId)
                                    {
                                        CheckItemFormStatusByAliasList(tripId, tItem, aliasString);
                                        if (itemStatus == false)
                                        {
                                            counter++;
                                            GetItemName(tItem);
                                        }

                                        if (counter > 0) // send email
                                        {
                                            PersonalizeEmail(tripId, pItem, p4Date.ToShortDateString());
                                            WriteEmailLog(tripId, pItem, "P4L");
                                        }
                                    }
                                }
                            }
                        } // CLOSING BRACKET P4L
                    }
                    // Continue to Final Date
                    if (p4finalIsActive == "True") // If P4F is off - don't process emails
                    {
                        emailSent = false;
                        if (p4finalDate > nullDate && p4finalDate < today) // process P4 Final Emails
                        {
                            //lOutputString.Text += "<br><b>Final Payment Final Past Due</b>";

                            BuildTripChecklist(tripId, 4);
                            CheckPreviousEmailSent(tripId, "P4F");
                            if (emailSent == false)
                            {
                                BuildEmailContent(6941); // Defined Type = Email Templates -  Defined Value = Final Email                        

                                foreach (int pItem in tripParticipantsId)
                                {
                                    counter = 0;
                                    missingRequirements = "";
                                    missingRequirementsOutput = "";

                                    // we need to process all participant alias ids for proper data handling
                                    aliasString = "";
                                    BuildParticipantAliasIds(pItem);

                                    foreach (int tItem in tripItemsId)
                                    {
                                        CheckItemFormStatusByAliasList(tripId, tItem, aliasString);
                                        if (itemStatus == false)
                                        {
                                            counter++;
                                            GetItemName(tItem);
                                        }
                                    }
                                    if (counter > 0) // send email
                                    {
                                        PersonalizeEmail(tripId, pItem, p4Date.ToShortDateString());
                                        WriteEmailLog(tripId, pItem, "P4F");
                                    }
                                }
                            }
                        } // CLOSING BRACKET P4F
                    }
                }
            }
            conn.Close();
        }

        private void GetEmailDates()
        {
            var avQry = new AttributeValueService(new RockContext()).Queryable();
            avQry = avQry.Where(row => row.AttributeId == 9191 || row.AttributeId == 9194 || row.AttributeId == 9197);

            foreach (var qRow in avQry)
            {
                switch (qRow.EntityId)
                {
                    case 6923:
                        Int32.TryParse(qRow.Value, out p2reminderDays);
                        break;
                    case 6924:
                        Int32.TryParse(qRow.Value, out p2lateItemsDays);
                        break;
                    case 6925:
                        Int32.TryParse(qRow.Value, out p2finalDays);
                        break;
                    case 6926:
                        Int32.TryParse(qRow.Value, out p3reminderDays);
                        break;
                    case 6927:
                        Int32.TryParse(qRow.Value, out p3lateItemsDays);
                        break;
                    case 6928:
                        Int32.TryParse(qRow.Value, out p3finalDays);
                        break;
                    case 6929:
                        Int32.TryParse(qRow.Value, out p4reminderDays);
                        break;
                    case 6930:
                        Int32.TryParse(qRow.Value, out p4lateItemsDays);
                        break;
                    case 6931:
                        Int32.TryParse(qRow.Value, out p4finalDays);
                        break;
                }
            }
        }

        private void GetEmailActive()
        {
            var avQry = new AttributeValueService(new RockContext()).Queryable();
            avQry = avQry.Where(row => row.AttributeId == 9192 || row.AttributeId == 9195 || row.AttributeId == 9198);

            foreach (var qRow in avQry)
            {
                switch (qRow.EntityId)
                {
                    case 6923:
                        p2reminderIsActive = qRow.Value;
                        break;
                    case 6924:
                        p2lateIsActive = qRow.Value;
                        break;
                    case 6925:
                        p2finalIsActive = qRow.Value;
                        break;
                    case 6926:
                        p3reminderIsActive = qRow.Value;
                        break;
                    case 6927:
                        p3lateIsActive = qRow.Value;
                        break;
                    case 6928:
                        p3finalIsActive = qRow.Value;
                        break;
                    case 6929:
                        p4reminderIsActive = qRow.Value;
                        break;
                    case 6930:
                        p4lateIsActive = qRow.Value;
                        break;
                    case 6931:
                        p4finalIsActive = qRow.Value;
                        break;
                }
            }
        }

        private void BuildAssignedItemList(int trip, int period)
        {
            string qryString = "";
            qryString = qryString + "SELECT ai.TripGroupId, ai.TripItemId, dv.Value  ";
            qryString = qryString + "FROM _org_rivervalley_GlobalTripAssignedItems ai ";
            qryString = qryString + "LEFT JOIN DefinedValue dv on ai.TripItemId = dv.Id ";
            qryString = qryString + "WHERE TripGroupId = " + trip + " ";
            qryString = qryString + "AND ai.DueDateGroupId = " + period;

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

        private void BuildParticipantList(int trip)
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
                // Changed to accomodate the potential change in person id when merged
                tripParticipantsId.Add(rdr.GetInt32(0));
            }
            conn.Close();
        }

        private void CheckPreviousEmailSent(int trip, string email)
        {
            emailSent = false;
            var qry = new GlobalTripItemEmailLogService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.TripGroupId == trip);

            foreach (var qRow in qry)
            {
                if (qRow.EmailSent == email)
                {
                    emailSent = true;
                }
            }
        }

        private void GetItemName(int item)
        {
            var definedValue = new DefinedValueService(new RockContext()).Get(item);
            missingRequirements += "<br>" + definedValue.Value;
            missingRequirementsOutput += " " + definedValue.Value;
        }

        private void BuildEmailContent(int dvId)
        {
            var definedValue = new DefinedValueService(new RockContext()).Get(dvId);
            definedValue.LoadAttributes();
            emailFrom = definedValue.GetAttributeValue("EmailFrom");
            emailFromAddress = definedValue.GetAttributeValue("EmailFromAddress");
            emailReplyTo = definedValue.GetAttributeValue("EmailReplyTo");
            emailSubject = definedValue.GetAttributeValue("EmailSubject");
            emailBody = definedValue.GetAttributeValue("EmailBody");
        }

        private void PersonalizeEmail(int trip, int person, string date)
        {
            personalizedEmailBody = emailBody;
            var rockContext = new RockContext();
            var personService = new PersonService(rockContext);
            var tripPerson = personService.Get(person);

            emailTo = tripPerson.Email;
            personalizedEmailBody = personalizedEmailBody.Replace("##NickName##", tripPerson.NickName);

            var groupService = new GroupService(rockContext);
            var globalTeam = groupService.Get(tripId);
            personalizedEmailBody = personalizedEmailBody.Replace("##TripName##", globalTeam.Name);

            personalizedEmailBody = personalizedEmailBody.Replace("##PaymentDueDate##", date);
            personalizedEmailBody = personalizedEmailBody.Replace("##OutstandingRequirements##", missingRequirements);

            //lDebugString.Text += "<br>" + tripPerson.FullName + "|" + date + "|" + emailTo + "|" + missingRequirements;

            WriteOutputString(tripPerson.FullName, date, emailTo, missingRequirementsOutput);

            SendEmail();
        }

        private void SendEmail()
        {
            var newEmail = new RockEmailMessage();
            newEmail.Subject = emailSubject;
            newEmail.FromEmail = emailFromAddress;
            newEmail.FromName = emailFrom;
            newEmail.Message = personalizedEmailBody;
            newEmail.SetRecipients(emailTo);
            newEmail.CCEmails = ccList;
            if (sendEmail == true)
            {
                newEmail.Send();
            }
        }

        private void WriteEmailLog(int trip, int person, string emailCode)
        {
            Person tPerson;
            var rockContext = new RockContext();
            var pService = new PersonService(rockContext);
            tPerson = new PersonService(rockContext).Get(person);
            int paId = tPerson.PrimaryAliasId ?? default(int);

            var dataContext = new RockContext();
            var service = new GlobalTripItemEmailLogService(dataContext);
            newLog = new GlobalTripItemEmailLog();
            service.Add(newLog);

            newLog.TripGroupId = trip;
            newLog.PersonAliasId = paId;
            newLog.EmailSent = emailCode;
            
            if (sendEmail == true)
            {
                dataContext.SaveChanges();
            }
        }

        private void BuildTripChecklist(int trip, int period)
        {
            tripParticipantsId.RemoveAll(item => item > 0); // Need to empty the list before adding new participants
            BuildParticipantList(trip);
            tripItemsId.RemoveAll(item => item > 0); // Need to empty the list before adding new items
            BuildAssignedItemList(tripId, period);
        }

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
            itemStatus = false;
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
                if (rdr.GetBoolean(0) == true)
                {
                    itemStatus = true;
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
        }

        private void WriteTripString(string outputText)
        {
            lOutputString.Text += "<tr>";
            lOutputString.Text += "<th colspan='4'>" + outputText + "</td>";
            lOutputString.Text += "</tr>";
        }

        private void WriteOutputString(string cellOne, string cellTwo, string cellThree, string cellFour)
        {
            lOutputString.Text += "<tr>";
            lOutputString.Text += "<td class='grid-select-cell' style='text-align: left; '>" + cellOne + "</td>";
            lOutputString.Text += "<td class='grid-select-cell' style='text-align: left; '>" + cellTwo + "</td>";
            lOutputString.Text += "<td class='grid-select-cell' style='text-align: left; '>" + cellThree + "</td>";
            lOutputString.Text += "<td class='grid-select-cell' style='text-align: left; '>" + cellFour + "</td>";
            lOutputString.Text += "</tr>";

        }

        #endregion

    }
}
