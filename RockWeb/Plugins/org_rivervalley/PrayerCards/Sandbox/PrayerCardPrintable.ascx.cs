using System.ComponentModel;
using System.ComponentModel.Composition;
using System.IO;
using System.Linq;

using org.rivervalley.PrayerDates.Data;
using org.rivervalley.PrayerDates.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Collections.Generic;
using System.Data;
using System;
using System.Diagnostics;
using Rock.Web.Cache;


namespace RockWeb.Plugins.org_rivervalley.PrayerCards
{
    [DisplayName("Prayer Card Report Printable")]
    [Category("org_rivervalley > PrayerCards")]
    [Description("Printable version of Prayer Cards ")]

    public partial class PrayerCardPrintable : Rock.Web.UI.RockBlock
    {
        #region Fields

        //private PrayerDatesDetail prayerDatesDetail = null;
        private string qsDate;
        private string reportDate;
        private string printDate;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            reportDate = "";

            if (!String.IsNullOrEmpty(Request.QueryString["date"]))
            {
                qsDate = Request.QueryString["date"];
                string[] subStrings = qsDate.Split('-');
                int counter = 0;
                
                foreach (string str in subStrings)
                {
                    counter++;
                    if (counter == 1)
                    {
                        reportDate = str + "/";
                        printDate = str + "/";
                    }
                    if (counter == 2)
                    {
                        reportDate = reportDate + str + "/";
                        printDate = printDate + str + "/";
                    }
                    if (counter == 3)
                    {
                        reportDate = reportDate + str + " 00:00:00.000";
                        printDate = printDate + str;
                    }
                }                
            }
            if (reportDate != "")
            {
                lReportHeader.Text = "<b>Weekly Prayer Focus - " + printDate + "<br>";                
                GetDataRecords();
            }
            else
            {
                lReportHeader.Text += "There has been an error with your request";
            }
            
        }

        #endregion

        #region Events

        #endregion

        #region Methods
        private void GetDataRecords()
        {
            DateTime parameterDTValue;
            try
            {
                parameterDTValue = DateTime.Parse(reportDate);
            }
            catch (FormatException)
            {
                parameterDTValue = DateTime.Now;
            }
            var pdQry = new PrayerDatesDetailService(new PrayerDatesContext()).Queryable();
            pdQry = pdQry.Where(row => row.DatePrayedFor == parameterDTValue && row.CampusId == null);
            lElders.Text = "<b><u>Elder/Deacon</u></b>";
            lLocalChurch.Text = "<b><u>Local Church</u></b>";
            lMinistry.Text = "<b><u>Ministry Leader</u></b>";
            lMissionary.Text = "<b><u>Missionary</u></b>";
            lNetworkChurch.Text = "<b><u>Network Church</u></b>";
            lStaff.Text = "<b><u>Pastor/Staff</u></b>";
            lPolitical.Text = "<b><u>Political</u></b>";
            foreach (var qRow in pdQry)
            {
                if (qRow.Type == "Elder/Deacon") { lElders.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Local Church") { lLocalChurch.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Ministry Leader") { lMinistry.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Missionary") { lMissionary.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Network Church") { lNetworkChurch.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Pastors/Staff") { lStaff.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Political") { lPolitical.Text += "<br>" + qRow.Names; }
            }
        }

        #endregion
    }
}