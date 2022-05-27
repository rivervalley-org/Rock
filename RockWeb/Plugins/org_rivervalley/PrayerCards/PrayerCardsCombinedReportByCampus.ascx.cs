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
    [DisplayName("Prayer Cards Combined Report By Campus")]
    [Category("org_rivervalley > PrayerCards")]
    [Description("Prayer Cards Combined Report By Campus ")]

    public partial class PrayerCardsCombinedReportByCampus : Rock.Web.UI.RockBlock
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
            lReportHeader.Text = "<b>Weekly Prayer Focus - " + datePrayedFor.ToString("M'/'dd'/'yyyy") + "<br>" + campusName + "</b><br>&nbsp;<br>";
            GetNonFamilyDataRecords();
            GetFamilyDataRecords();
        }

        #endregion

        #region Methods
                
        protected void BuildCampusDropDown()
        {
            // Build campus drop down
            ddlList.DataSource = new CampusService(new RockContext()).Queryable()
                .Where( x => x.IsActive == true ) 
				//.Where(x => x.Id == 1 || x.Id == 2 || x.Id == 3 || x.Id == 4 || x.Id == 9 || x.Id == 11 || x.Id == 12 || x.Id == 13 || x.Id == 14 || x.Id == 17)
                .OrderBy(a => a.Name).ToList();
            ddlList.DataValueField = "Id";
            ddlList.DataTextField = "Name";
            ddlList.DataBind();
            ddlList.SelectedValue = "1";
        }

        private void GetFamilyDataRecords()
        {
            lFamilies.Text = "<b><u>Families</u></b>";
            lLifeGroups.Text = "<b><u>Life Groups</u></b>";
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

        private void GetNonFamilyDataRecords()
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