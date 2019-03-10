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
    [DisplayName("Prayer Card Report By Campus Printable")]
    [Category("org_rivervalley > PrayerCards")]
    [Description("Printable version of Prayer Cards by Campus ")]

    public partial class PrayerCardByCampusPrintable : Rock.Web.UI.RockBlock
    {
        #region Fields

        //private PrayerDatesDetail prayerDatesDetail = null;
        private int campusId;
        private string campusName;
        private string qsDate;
        private string reportDate;
        private string printDate;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!String.IsNullOrEmpty(Request.QueryString["campus"]))
            {
                campusId = Convert.ToInt32(Request.QueryString["campus"]);
                SetSelectedCampus(campusId);
            }
            if (!String.IsNullOrEmpty(Request.QueryString["date"]))
            {
                qsDate = Request.QueryString["date"];
                string[] subStrings = qsDate.Split('-');
                int counter = 0;
                reportDate = "";
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
            if (campusId > 0 && reportDate != "")
            {
                lOutputString.Text = "<b>Weekly Prayer Focus - " + campusName  +  " - " + printDate + " <br>";
                lOutputString.Text += "<br><u>Families</u></b><br>";
                GetDataRecords();
            }
            else
            {
                lOutputString.Text += "There has been an error with your request";
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
            pdQry = pdQry.Where(row => row.DatePrayedFor == parameterDTValue && row.CampusId == campusId);            
            foreach (var qRow in pdQry)
            {
                lOutputString.Text += qRow.Names + "<br>";
            }
        }

        private void SetSelectedCampus(int? campus)
        {
            var cQry = new CampusService(new RockContext()).Queryable();
            cQry = cQry.Where(row => row.Id == campus);
            foreach (var qRow in cQry)
            {
                campusName = qRow.Name;
            }
        }

        #endregion
    }
}