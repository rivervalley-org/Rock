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
    [DisplayName("Prayer Cards Report By Campus")]
    [Category("org_rivervalley > PrayerCards")]
    [Description("Prayer Cards Report By Campus ")]

    public partial class PrayerCardsReportByCampus : Rock.Web.UI.RockBlock
    {
        #region Fields

        private int campusId;
        private string campusName;
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
                BuildCampusDropDown();
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

            campusId = ddlList.SelectedValueAsInt() ?? default(int); // this converts a int? field to an int
            SetSelectedCampus(campusId);
            datePrayedFor = Convert.ToDateTime(dtPicker.SelectedDate.ToString());
            linkDate = datePrayedFor.ToString("MM'-'dd'-'yyyy");
            reportDate = datePrayedFor.ToString("MM'/'dd'/'yyyy");
            string link = "<a href='/PrayerCardCampusPDF?ViewDocument=true&date=" + linkDate + "&campus=" + campusId + "'>Printable Version</a> ";
            lReportHeader.Text = "Weekly Prayer Focus - " + campusName  +  " - " + datePrayedFor.ToString("M'/'dd'/'yyyy") + "<br>" + link + "<br>&nbsp;<br>";
            GetDataRecords();
        }

        #endregion

        #region Methods
                
        protected void BuildCampusDropDown()
        {
            // Build campus drop down
            ddlList.DataSource = new CampusService(new RockContext()).Queryable()
                .Where(x => x.Id == 1 || x.Id == 2 || x.Id == 3 || x.Id == 4 || x.Id == 9 || x.Id == 11 || x.Id == 12 || x.Id == 13 || x.Id == 14)
                .OrderBy(a => a.Name).ToList();
            ddlList.DataValueField = "Id";
            ddlList.DataTextField = "Name";
            ddlList.DataBind();
            ddlList.SelectedValue = "1";
        }

        private void GetDataRecords()
        {
            lFamilies.Text = "<b><u>Families</u></b>";
            lLifeGroups.Text = "<b><u>LifeGroups</u></b>";
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
                if (qRow.Type == "Families") { lFamilies.Text += "<br>" + qRow.Names; }
                if (qRow.Type == "Life Groups") { lLifeGroups.Text += "<br>" + qRow.Names; }
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