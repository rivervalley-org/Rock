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

using org.rivervalley.JobOffers.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.JobOffers
{
    [DisplayName("Arena Job Offer Display")]
    [Category("org_rivervalley > JobOffers")]
    [Description("Arena Job Offer Display")]

    public partial class ArenaJobOfferDisplay : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private int jobOfferId;
        private bool isFullTime;
        private bool isHourly;
        private bool isSalary;
        //private bool isPastor; commented out because not used
        private decimal annualHours;
        private decimal newHourlySalary;
        private decimal currentHourlySalary;
        private decimal taxableSalary;
        private decimal totalSalary;
        private string vacationText;
        private string medicalText;
        private string dentalText;
        private string cellValueOne;
        private string cellValueTwo;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            GetId();
            if(jobOfferId == 0)
            {
                pnlJobOffer.Visible = false;
                pnlError.Visible = true;
                lErrorString.Text = "An error occurred in processing your request.";
            }
            else
            {
                GetDataRecord(jobOfferId);
            }
        }

        #endregion

        #region Events

        #endregion

        #region Methods

        protected void GetId()
        {
            int? id = PageParameter("id").AsIntegerOrNull();
            if (id.HasValue)
            {
                jobOfferId = id.Value;
            }
            else
            {
                jobOfferId = 0;
            }
        }

        protected void GetDataRecord(int id)
        {
            string qryString = "SELECT * FROM  _org_rivervalley_Arena_HR_Joboffer WHERE job_offer_id = " + id;
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                // need to set values first
                GetDefinedValueName(rdr.GetInt32(14), 1);
                GetPayrollStatus(rdr.GetBoolean(17), cellValueOne); // isPastor, isFullTime, isHourly, isSalary
                annualHours = rdr.GetDecimal(19) * 52;
                newHourlySalary = annualHours * rdr.GetDecimal(21);
                currentHourlySalary = annualHours * rdr.GetDecimal(18);
                // Personal Information ******************************************************************************************************
                WritePersonalInformationOutputString("Offer Title", rdr.GetString(1), "Offer Date", rdr.GetDateTime(15).ToShortDateString());
                GetDefinedValueName(rdr.GetInt32(53),2);
                WritePersonalInformationOutputString("Planned Start Date", rdr.GetDateTime(16).ToShortDateString(), "Offer Status", cellValueTwo);
                cellValueOne = rdr.GetString(3) + " " + rdr.GetString(4) + " " + rdr.GetString(5);
                WritePersonalInformationOutputString("Name", cellValueOne, "Phone", rdr.GetString(7));
                WritePersonalInformationOutputString("Email Address", rdr.GetString(8), "Birth Date", rdr.GetDateTime(9).ToShortDateString());
                GetDefinedValueName(rdr.GetInt32(10),1);
                GetCampus(rdr.GetInt32(13), 2);
                WritePersonalInformationOutputString("Marital Status", cellValueOne, "Campus", cellValueTwo);
                GetDefinedValueName(rdr.GetInt32(60), 1);
                GetDefinedValueName(rdr.GetInt32(11), 2);
                WritePersonalInformationOutputString("Department", cellValueOne, "Position", cellValueTwo);
                GetDefinedValueName(rdr.GetInt32(14), 1);
                if(rdr.GetBoolean(17))
                {
                    cellValueTwo = "Yes";
                }
                else
                {
                    cellValueTwo = "No";
                }
                WritePersonalInformationOutputString("Status", cellValueOne, "Is Pastor", cellValueTwo);
                WritePersonalInformationOutputString("Tenure Date", rdr.GetDateTime(66).ToShortDateString(),"","");
                WriteCommentOutputString(rdr.GetString(70));
                // Compensation **************************************************************************************************************
                WriteCompensationOutputString("Weekly Hours", rdr.GetDecimal(19).ToString(), "Annual Hours", annualHours.ToString("#,##0.00"));
                if (isSalary)
                {
                    WriteCompensationOutputString("New Base Salary", rdr.GetDecimal(22).ToString("C"), "Current Base Salary", rdr.GetDecimal(20).ToString("C"));
                    if(isHourly)
                    {
                        totalSalary = newHourlySalary + rdr.GetDecimal(24);
                        taxableSalary = newHourlySalary + rdr.GetDecimal(24) - rdr.GetDecimal(23);
                    }
                    else
                    {
                        totalSalary = rdr.GetDecimal(22) + rdr.GetDecimal(24);
                        taxableSalary = rdr.GetDecimal(22) + rdr.GetDecimal(24) - rdr.GetDecimal(23);
                    }
                }
                else
                {
                    WriteCompensationOutputString("New Hourly Rate", rdr.GetDecimal(21).ToString("C"), "New Hourly Salary", newHourlySalary.ToString("C"));
                    WriteCompensationOutputString("Current Rate", rdr.GetDecimal(18).ToString("C"), "Current Hourly Salary", currentHourlySalary.ToString("C"));
                    totalSalary = newHourlySalary + rdr.GetDecimal(24);
                    taxableSalary = newHourlySalary + rdr.GetDecimal(24) - rdr.GetDecimal(23);
                }
                WriteCompensationOutputString("Housing", rdr.GetDecimal(23).ToString("C"), "Social Security Gross Up", rdr.GetDecimal(24).ToString("C"));
                WriteCompensationOutputString("Taxable Salary", taxableSalary.ToString("C"), "Total Salary", totalSalary.ToString("C"));
                // Benefits **************************************************************************************************************

                vacationText = rdr.GetDecimal(50).ToString() + " <br>(Accrues " + rdr.GetDecimal(51).ToString("#,##0.000") + " days per month)";
                WriteBenefitsOutputString("Vacation Days", vacationText, "Sick Days", rdr.GetDecimal(52).ToString());
                GetDefinedValueName(rdr.GetInt32(25), 1);
                GetDefinedValueName(rdr.GetInt32(26), 2);
                medicalText = cellValueOne + " - " + rdr.GetDecimal(27).ToString("C");
                dentalText = cellValueTwo + " - " + rdr.GetDecimal(28).ToString("C");
                WriteBenefitsOutputString("Medical Insurance", medicalText, "Dental Insurance", dentalText);
                WriteBenefitsOutputString("Life Insurance", rdr.GetDecimal(29).ToString("C"), "Long Term Disablilty", rdr.GetDecimal(30).ToString("C"));
                WriteBenefitsOutputString("Medical Reimbursement", rdr.GetDecimal(31).ToString("C"), "HSA Contribution", rdr.GetDecimal(32).ToString("C"));
                WriteBenefitsOutputString("403b Contribution Percentage", rdr.GetDecimal(35).ToString("0%"), "403b Contribution Amount", rdr.GetDecimal(36).ToString("C"));
                WriteBenefitsOutputString("Mileage Reimbursement", rdr.GetDecimal(37).ToString("C"), "Car Allowance", rdr.GetDecimal(39).ToString("C"));
                WriteBenefitsOutputString("Cell Phone Reimbursement", rdr.GetDecimal(38).ToString("C"), "Wellness", rdr.GetDecimal(40).ToString("C"));
                WriteBenefitsOutputString("Christmas Bonus", rdr.GetDecimal(41).ToString("C"), "Continuing Education", rdr.GetDecimal(42).ToString("C"));
                WriteBenefitsOutputString("Other", rdr.GetDecimal(43).ToString("C"), "Worker's Compensation", rdr.GetDecimal(34).ToString("C"));
                WriteBenefitsOutputString("Employer Payroll Tax", rdr.GetDecimal(44).ToString("C"), "", "");
                // Allocations **************************************************************************************************************
                WriteAllocationsOutputString("Apple Valley", rdr.GetDecimal(45).ToString("0%"), "Shakopee" , rdr.GetDecimal(46).ToString("0%"));
                WriteAllocationsOutputString("Faribault", rdr.GetDecimal(47).ToString("0%"), "Egan", rdr.GetDecimal(48).ToString("0%"));
                WriteAllocationsOutputString("Crosstown", rdr.GetDecimal(49).ToString("0%"), "Central", rdr.GetDecimal(61).ToString("0%"));
                WriteAllocationsOutputString("Minnetrista", rdr.GetDecimal(62).ToString("0%"), "Minneapolis", rdr.GetDecimal(65).ToString("0%"));
                WriteAllocationsOutputString("Woodbury", rdr.GetDecimal(69).ToString("0%"), "", "");
            }
            conn.Close();
        }

        protected void GetDefinedValueName(int id, int pos)
        {
            if (id == 0) // no value
            {
                if (pos == 1)
                {
                    cellValueOne = "";
                }
                else
                {
                    cellValueTwo = "";
                }
            }
            else
            {
                var qry = new DefinedValueService(new RockContext()).Queryable();
                qry = qry.Where(row => row.ForeignId == id);

                foreach (var qRow in qry)
                {
                    if (pos == 1)
                    {
                        cellValueOne = qRow.Value;
                    }
                    else
                    {
                        cellValueTwo = qRow.Value;
                    }
                }
            }
        }

        protected void GetCampus(int id, int pos )
        {
            switch (id)
            {
                case 10563:
                    if (pos == 1)
                    {
                        cellValueOne = "Central";
                    }
                    else
                    {
                        cellValueTwo = "Central";
                    }

                    break;
                case 10564:
                    if (pos == 1)
                    {
                        cellValueOne = "Apple Valley";
                    }
                    else
                    {
                        cellValueTwo = "Apple Valley";
                    }

                    break;
                case 10565:
                    if (pos == 1)
                    {
                        cellValueOne = "Shakopee";
                    }
                    else
                    {
                        cellValueTwo = "Shakopee";
                    }

                    break;
                case 10566:
                    if (pos == 1)
                    {
                        cellValueOne = "Minnetrista";
                    }
                    else
                    {
                        cellValueTwo = "Minnetrista";
                    }

                    break;
                case 10569:
                    if (pos == 1)
                    {
                        cellValueOne = "Faribault";
                    }
                    else
                    {
                        cellValueTwo = "Faribault";
                    }

                    break;
                case 10878:
                    if (pos == 1)
                    {
                        cellValueOne = "Edina";
                    }
                    else
                    {
                        cellValueTwo = "Edina";
                    }

                    break;
                case 11089:
                    if (pos == 1)
                    {
                        cellValueOne = "Eagan";
                    }
                    else
                    {
                        cellValueTwo = "Eagan";
                    }

                    break;
                case 11465:
                    if (pos == 1)
                    {
                        cellValueOne = "Woodbury";
                    }
                    else
                    {
                        cellValueTwo = "Woodbury";
                    }

                    break;
                case 11466:
                    if (pos == 1)
                    {
                        cellValueOne = "Minneapolis";
                    }
                    else
                    {
                        cellValueTwo = "Minneapolis";
                    }

                    break;
            }
        }

        private void GetPayrollStatus(bool pastor, string status)
        {
            /*
            if (pastor)
            {
                isPastor = true;
            }
            else
            {
                isPastor = false;
            }
            */
            isFullTime = status.Contains("Full");
            isHourly = status.Contains("Hourly");
            isSalary = status.Contains("Salary");
        }

        private void WritePersonalInformationOutputString(string cellOne, string cellTwo, string cellThree, string cellFour)
        {
            lPersonalInformationString.Text += "<div class=\"row\">";
            lPersonalInformationString.Text += "<div class=\"col-md-3\"><b>" + cellOne + "</b></div>";
            lPersonalInformationString.Text += "<div class=\"col-md-3\">" + cellTwo + "</div>";
            lPersonalInformationString.Text += "<div class=\"col-md-3\"><b>" + cellThree + "</b></div>";
            lPersonalInformationString.Text += "<div class=\"col-md-3\">" + cellFour + "</div>";
            lPersonalInformationString.Text += "</div>";
        }

        private void WriteCompensationOutputString(string cellOne, string cellTwo, string cellThree, string cellFour)
        {
            lCompensationString.Text += "<div class=\"row\">";
            lCompensationString.Text += "<div class=\"col-md-3\"><b>" + cellOne + "</b></div>";
            lCompensationString.Text += "<div class=\"col-md-3\">" + cellTwo + "</div>";
            lCompensationString.Text += "<div class=\"col-md-3\"><b>" + cellThree + "</b></div>";
            lCompensationString.Text += "<div class=\"col-md-3\">" + cellFour + "</div>";
            lCompensationString.Text += "</div>";
        }

        private void WriteBenefitsOutputString(string cellOne, string cellTwo, string cellThree, string cellFour)
        {
            lBenefitsString.Text += "<div class=\"row\">";
            lBenefitsString.Text += "<div class=\"col-md-3\"><b>" + cellOne + "</b></div>";
            lBenefitsString.Text += "<div class=\"col-md-3\">" + cellTwo + "</div>";
            lBenefitsString.Text += "<div class=\"col-md-3\"><b>" + cellThree + "</b></div>";
            lBenefitsString.Text += "<div class=\"col-md-3\">" + cellFour + "</div>";
            lBenefitsString.Text += "</div>";
        }

        private void WriteAllocationsOutputString(string cellOne, string cellTwo, string cellThree, string cellFour)
        {
            lAllocationsString.Text += "<div class=\"row\">";
            lAllocationsString.Text += "<div class=\"col-md-3\"><b>" + cellOne + "</b></div>";
            lAllocationsString.Text += "<div class=\"col-md-3\">" + cellTwo + "</div>";
            lAllocationsString.Text += "<div class=\"col-md-3\"><b>" + cellThree + "</b></div>";
            lAllocationsString.Text += "<div class=\"col-md-3\">" + cellFour + "</div>";
            lAllocationsString.Text += "</div>";
        }

        private void WriteCommentOutputString(string cellOne)
        {
            lPersonalInformationString.Text += "<div class=\"row\">";
            lPersonalInformationString.Text += "<div class=\"col-md-3\"><b>Comments</b></div>";
            lPersonalInformationString.Text += "<div class=\"col-md-9\">" + cellOne + "</div>";
            lPersonalInformationString.Text += "</div>";
        }

        #endregion

    }
}