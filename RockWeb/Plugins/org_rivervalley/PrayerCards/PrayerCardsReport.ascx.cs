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
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using System.Diagnostics;
using Rock.Web.Cache;


namespace RockWeb.Plugins.org_rivervalley.PrayerCards
{
    [DisplayName("Prayer Cards Report")]
    [Category("org_rivervalley > PrayerCards")]
    [Description("Prayer Cards Report ")]

    public partial class PrayerCardsReport : Rock.Web.UI.RockBlock
    {
        #region Fields

        private DateTime datePrayedFor;
        private string reportDate;
        private string linkDate;

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
            linkDate = datePrayedFor.ToString("yyyy'-'MM'-'dd");
            reportDate = datePrayedFor.ToString("MM'/'dd'/'yyyy");            
            string link = "<a href='/PrayerCardChurchPrint?ViewDocument=true&date=" + linkDate + "'>Printable Version</a> ";
            lReportHeader.Text = "<b>Weekly Prayer Focus - " + datePrayedFor.ToString("M'/'dd'/'yyyy") + "</b><br>" + link + "<br>&nbsp;<br>";
            GetDataRecords();
        }

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
            lVirtues.Text = "<b><u>Virtues</u></b>";
            foreach (var qRow in pdQry)
            {
                if (qRow.Type == "Elder/Deacon") { lElders.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Local Church") { lLocalChurch.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Ministry Leader") { lMinistry.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Missionary") { lMissionary.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Network Church") { lNetworkChurch.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Pastors/Staff") { lStaff.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Political") { lPolitical.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Virtues") { lVirtues.Text += "<br>" + qRow.Names; }
            }
        }

        #endregion

    }
}