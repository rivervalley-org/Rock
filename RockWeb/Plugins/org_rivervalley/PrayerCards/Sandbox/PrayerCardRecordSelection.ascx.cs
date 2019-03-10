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
    [DisplayName("Prayer Cards Record Selection")]
    [Category("org_rivervalley > PrayerCards")]
    [Description("Selection of Date and Campuses")]

    public partial class PrayerCardRecordSelection : Rock.Web.UI.RockBlock
    {
        #region Fields

       
        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private int campusId;
        private DateTime datePrayedFor;
        private bool churchRecordsExist;
        private bool formError;        
        private DateTime parameterDTValue;
        private bool dateNull;
        private string qryString;
        private string link = "~/page/1287";
        private string linkVariables;

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
                pnlMultiCampusDetail.Visible = true;
                pnlError.Visible = false;
                BuildCampusCheckboxes();
            }
        }

        #endregion

        #region Events

        protected void btnDetailCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnMultiCampusDetail_Click(object sender, EventArgs e)
        {
            formError = false;
            pnlError.Visible = false;
            pnlMultiCampusDetail.Visible = false;           
            nbWarningMessage.Text = "";
            try // test for blank date
            {
                parameterDTValue = DateTime.Parse(dtPickerMulti.SelectedDate.ToString());
                dateNull = false;
            }
            catch (FormatException)
            {
                dateNull = true;
            }
            if (dateNull == false)
            {
                datePrayedFor = Convert.ToDateTime(dtPickerMulti.SelectedDate.ToString());
                DayOfWeek selectedDate = datePrayedFor.DayOfWeek;
                if (selectedDate != DayOfWeek.Tuesday)
                {
                    pnlMultiCampusDetail.Visible = true;
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
                        nbWarningMessage.Text += "<br>Church records already exist for this date.";
                    }
                    else
                    {
                        linkVariables = "?date=" + datePrayedFor.ToShortDateString() + "&campusIds=";
                        
                        // Now process each selected campus
                        foreach (ListItem item in cblCampuses.Items)
                        {
                            if (item.Selected)
                            {
                                GetSelectedCampusId(item.Value);
                                linkVariables = linkVariables + campusId + ",";
                            }
                        }
                    }
                    
                    if (formError == true)
                    {
                        pnlMultiCampusDetail.Visible = true;
                        pnlError.Visible = true;
                    }
                    else
                    {
                        link = link + linkVariables;
                        Response.Redirect(link);
                    }
                }
            }
            else
            {
                pnlMultiCampusDetail.Visible = true;
                pnlError.Visible = true;
                nbWarningMessage.Visible = true;
                nbWarningMessage.Text += "Selected a date";
            }
        }

        #endregion

        #region Methods
        
        protected void BuildCampusCheckboxes()
        {
            var items = cblCampuses.Items;
            var rockContext = new RockContext();
            qryString = "SELECT Name FROM Campus WHERE Id IN (1,2,3,4,9,11,12,13,14)";
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
                if (rdr.GetString(1) == "Political") { churchRecordsExist = true; }
            }
            conn.Close();
        }

        #endregion

    }
}