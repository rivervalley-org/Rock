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
    [DisplayName("Global Trips Emails Sent Report renamed")]
    [Category("org_rivervalley > GlobalTripChecklists")]
    [Description("Global Trips Emails Sent Report")]

    public partial class GlobalTripSentEmailReport : Rock.Web.UI.RockBlock
    {
        #region Fields

        DateTime today = DateTime.Now;
        private DateTime startDTValue;
        private DateTime endDTValue;
        private DateTime endDTValuePlus;
        private string tripName;
        private int tripId;
        private string cellOne;
        private string cellTwo;
        private string cellThree;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                pnlError.Visible = false;
                pnlDateSelection.Visible = true;
                pnlReport.Visible = false;
                dtPickerStartDate.Text = today.ToShortDateString();
                dtPickerEndDate.Text = today.ToShortDateString();
                LoadGlobalTripDropDownValues();
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
            pnlError.Visible = false;
            pnlDateSelection.Visible = false;
            pnlReport.Visible = true;
            
            tripId = int.Parse(ddGlobalTrips.Text);
            startDTValue = DateTime.Parse(dtPickerStartDate.SelectedDate.ToString());
            endDTValue = DateTime.Parse(dtPickerEndDate.SelectedDate.ToString());
            endDTValuePlus = endDTValue.AddDays(1);
            


            lDebugString.Text = "Trip id: " + tripId;
            lDebugString.Text += "<br>Start " + startDTValue;
            lDebugString.Text += "<br>End " + endDTValue;
            lDebugString.Text += "<br>End+ " + endDTValuePlus;

            GetSentEmails();
        }
        
        #endregion

            #region Methods

        private void GetSentEmails()
        {
            int firstTrip = 0;
            int nextTrip = 0;
            var eQry = new GlobalTripItemEmailLogService(new RockContext()).Queryable();
            if (tripId == 0)
            {
                lDateString.Text = " - " + startDTValue.ToShortDateString() + " - " + endDTValue.ToShortDateString();
                eQry = eQry                    
                    .Where(row => row.CreatedDateTime > startDTValue)
                    .Where(row => row.CreatedDateTime < endDTValuePlus)
                    .OrderBy(s1 => s1.TripGroupId)
                    .ThenBy(s2 => s2.CreatedDateTime)
                    .ThenBy(s3 => s3.PersonAliasId);
            }
            else
            {
                lDateString.Text = "";
                eQry = eQry
                    .Where(row => row.TripGroupId == tripId)
                    .OrderBy(s1 => s1.CreatedDateTime)
                    .ThenBy(s2 => s2.PersonAliasId);
            }

            foreach (var qRow in eQry)
            {
                nextTrip = qRow.TripGroupId;
                ClearCells();
                if(firstTrip != nextTrip)
                {
                    WriteTripString(qRow.TripGroupId);
                }
                cellOne = GetPersonName(qRow.PersonAliasId);
                cellTwo = GetEmailType(qRow.EmailSent);
                cellThree = qRow.CreatedDateTime.ToString();                
                lDebugString.Text += "<br>ID: " + qRow.PersonAliasId;

                WriteOutputString(cellOne, cellTwo, cellThree);
                firstTrip = qRow.TripGroupId;
            }     
        }

        private void LoadGlobalTripDropDownValues()
        {
            var qry = new GroupService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.ParentGroupId == 84978 || row.ParentGroupId == 263418 || row.ParentGroupId == 268569);
            var qrySorted = qry.OrderBy(a => a.Name);
            ddGlobalTrips.Items.Add(new ListItem("All Teams", "0"));

            foreach (var qRow in qrySorted)
            {
                ddGlobalTrips.Items.Add(new ListItem(qRow.Name, qRow.Id.ToString()));
            }
        }

        private void ClearCells()
        {
            cellOne = "";
            cellTwo = "";
            cellThree = "";
            
        }

        private void WriteTripString(int tripId)
        {
            LoadGlobalTripName(tripId);
            lOutputString.Text += "<tr>";
            lOutputString.Text += "<th colspan='3'>" + tripName + "</td>";
            lOutputString.Text += "</tr>";

        }

        private void WriteOutputString(string cellOne, string cellTwo, string cellThree)
        {
            lOutputString.Text += "<tr>";
            lOutputString.Text += "<td class='grid-select-cell' style='text-align: left; '>" + cellOne + "</td>";
            lOutputString.Text += "<td class='grid-select-cell' style='text-align: left; '>" + cellTwo + "</td>";
            lOutputString.Text += "<td class='grid-select-cell' style='text-align: left; '>" + cellThree + "</td>";
            lOutputString.Text += "</tr>";

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

        private string GetPersonName(int id)
        {
            string pName = "";

            var rockContext = new RockContext();
            var personAliasService = new PersonAliasService(rockContext);
            var personAlias = personAliasService.Get(id);
            pName = personAlias.Person.FullName;
            lDebugString.Text += "<br>PaID: " + personAlias.Id;
            lDebugString.Text += "<br>PID: " + personAlias.Person.Id;
            return pName;
        }

        private string GetEmailType(string type)
        {
            string emailType = "";

            // P2R,P2L,P2F,P3R,P3L,P3F,P4R,P4L,P4F

            switch (type)
            {
                case "P2R":
                    emailType = "Second Payment Reminder";
                    break;
                case "P2L":
                    emailType = "Second Payment Late Items";
                    break;
                case "P2F":
                    emailType = "Second Payment Past Due";
                    break;
                case "P3R":
                    emailType = "Third Payment Reminder";
                    break;
                case "P3L":
                    emailType = "Third Payment Late Items";
                    break;
                case "P3F":
                    emailType = "Third Payment Past Due";
                    break;
                case "P4R":
                    emailType = "Final Payment Reminder";
                    break;
                case "P4L":
                    emailType = "Final Payment Late Items";
                    break;
                case "P4F":
                    emailType = "Final Payment Past Due";
                    break;
            }

            return emailType;
        }



        #endregion
    }
}