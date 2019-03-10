using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;

using org.rivervalley.LaborPool.Data;
using org.rivervalley.LaborPool.Model;

using Rock;
using Rock.Constants;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;
using Rock.Attribute;

namespace RockWeb.Plugins.org_rivervalley.LaborPool
{
    [DisplayName("Labor Pool Transactions Detail")]
    [Category("org_rivervalley > LaborPool")]
    [Description("Labor Pool Transactions Detail")]
    [DateField("Start Date", "The beginning date for the range.", key: "DefaultStartDate")]

    public partial class LaborPoolTransactionDetails : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;

        private DateTime today = DateTime.Now;
        private DateTime parameterStartDTValue;
        private DateTime parameterEndDTValue;
        private DateTime parameterEndDTValuePlus;
        private DateTime formStartDate;
        private bool startDateNull;
        private bool endDateNull;
        //private bool dateError;
        //private int fundTotal;
        //private int glTotal;
        //private int projectTotal;

        private string cellOne;
        private string cellTwo;
        private string cellThree;
        private string cellFour;
        private string cellFive;
        private string cellSix;
        private string cellSeven;
        private string cellEight;

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
                pnlDateSelection.Visible = true;
                pnlDetails.Visible = false;
                pnlTotals.Visible = false;
                pnlError.Visible = false;
                var blockStartDate = GetAttributeValue("DefaultStartDate");
                try // test for block start date
                {
                    formStartDate = DateTime.Parse(blockStartDate);                    
                }
                catch (FormatException)
                {
                    formStartDate = new DateTime(2018, 1, 1);
                }

                dtPickerStartDate.Text = formStartDate.ToShortDateString();                
                dtPickerEndDate.Text = today.ToShortDateString();
            }
        }

        #endregion

        #region Events

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }
        protected void btnPrint_Click(object sender, EventArgs e)
        {
            string link = "~/LPTransactionsDetailPrint";
            link = link + "?sDate=" + hfStartDate.Value + "&eDate=" + hfEndDate.Value + "&ViewDocument=true";
            Response.Redirect(link);
        }
        protected void btnContinue_Click(object sender, EventArgs e)
        {
            pnlDateSelection.Visible = false;
            pnlDetails.Visible = true;
            pnlTotals.Visible = true;
            pnlError.Visible = false;

            try // test for blank dates
            {
                parameterStartDTValue = DateTime.Parse(dtPickerStartDate.SelectedDate.ToString());
                startDateNull = false;
            }
            catch (FormatException)
            {
                startDateNull = true;
            }
            try // test for blank dates
            {
                parameterEndDTValue = DateTime.Parse(dtPickerEndDate.SelectedDate.ToString());
                endDateNull = false;
            }
            catch (FormatException)
            {
                endDateNull = true;
            }

            if (startDateNull == true || endDateNull == true)
            {
                pnlDateSelection.Visible = true;
                pnlDetails.Visible = false;
                pnlTotals.Visible = false;
                pnlError.Visible = true;
                nbWarningMessage.Visible = true;
                nbWarningMessage.Text = "Selected Start and End Date";
            }
            else
            {
                lDateStringTotals.Text = parameterStartDTValue.ToShortDateString() + " - " + parameterEndDTValue.ToShortDateString();
                lDateStringDetails.Text = parameterStartDTValue.ToShortDateString() + " - " + parameterEndDTValue.ToShortDateString();
                parameterEndDTValuePlus = parameterEndDTValue.AddDays(1);             

                hfStartDate.Value = String.Format("{0:yyyyMMdd}", parameterStartDTValue);
                hfEndDate.Value = String.Format("{0:yyyyMMdd}", parameterEndDTValue);
                GetSQLTransactions();
                GetSQLTotals();
            }
                    
        }

        #endregion

        #region Methods

        protected void GetSQLTransactions()
        {
            string qryString = "";
            qryString = qryString + "SELECT * ";
            qryString = qryString + "FROM _org_rivervalley_LaborPool_Transactions ";
            qryString = qryString + "WHERE TransactionDate >= '" + parameterStartDTValue + "'";
            qryString = qryString + "AND TransactionDate <= '" + parameterEndDTValuePlus + "' ";
            qryString = qryString + "ORDER BY Glinfo,FundId,Projcode,TransactionDate";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                ClearCells();
                cellOne = rdr.GetInt32(0).ToString();
                cellTwo = rdr.GetString(4);

                cellThree = rdr.IsDBNull(2) ? "$0.00" : rdr.GetDecimal(2).ToString("C");
                //cellThree = rdr.GetDecimal(2).ToString("C");
                cellFour = rdr.IsDBNull(3) ? "$0.00" : rdr.GetDecimal(3).ToString("C");
                //cellFour = rdr.GetDecimal(3).ToString("C");

                cellFive = rdr.GetDateTime(5).ToShortDateString();
                cellSix = rdr.IsDBNull(8) ? "0" : rdr.GetInt32(8).ToString();
                cellSeven = rdr.IsDBNull(6) ? "0" : rdr.GetInt32(6).ToString();
                cellEight = rdr.IsDBNull(7) ? "0" : rdr.GetInt32(7).ToString();
                
                WriteDetailOutputString(cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight);

            }
            conn.Close();
        }

        protected void GetSQLTotals()
        {
            string qryString = "";
            qryString = qryString + "SELECT FundId, Glinfo, Projcode, ";
            qryString = qryString + "(SUM(ISNULL(Debit, 0))) AS Debit, ";
            qryString = qryString + "(SUM(ISNULL(Credit, 0))) AS Credit, ";
            qryString = qryString + "(SUM(ISNULL(Debit, 0) + ISNULL(Credit, 0))) AS Balance ";
            qryString = qryString + "FROM _org_rivervalley_LaborPool_Transactions ";
            qryString = qryString + "WHERE TransactionDate >= '" + parameterStartDTValue + "'";
            qryString = qryString + "AND TransactionDate <= '" + parameterEndDTValuePlus + "'";
            qryString = qryString + "GROUP BY FundId, Glinfo, Projcode ";
            qryString = qryString + "ORDER BY FundId,Glinfo,Projcode";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                ClearCells();
                cellOne = rdr.GetInt32(0).ToString();
                cellTwo = rdr.IsDBNull(1) ? "0" : rdr.GetInt32(1).ToString();
                cellThree = rdr.GetInt32(2).ToString();
                cellFour = rdr.GetDecimal(3).ToString("C");
                cellFive = rdr.GetDecimal(4).ToString("C");
                cellSix = rdr.GetDecimal(5).ToString("C");

                WriteReportOutputString(cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix);

            }
            conn.Close();
        }

    private void ClearCells()
        {
            cellOne = "";
            cellTwo = "";
            cellThree = "";
            cellFour = "";
            cellFive = "";
            cellSix = "";
            cellSeven = "";
            cellEight = "";
        }

        private void WriteDetailOutputString(string cellOne, string cellTwo, string cellThree, string cellFour, string cellFive, string cellSix, string cellSeven, string cellEight)
        {
            lOutputString.Text += "<tr>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellOne + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellTwo + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellThree + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellFour + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellFive + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellSix + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellSeven + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellEight + "</td>";
            lOutputString.Text += "</tr>";

        }

        private void WriteReportOutputString(string cellOne, string cellTwo, string cellThree, string cellFour, string cellFive, string cellSix)
        {
            lReportString.Text += "<tr>";
            lReportString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellOne + "</td>";
            lReportString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellTwo + "</td>";
            lReportString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellThree + "</td>";
            lReportString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellFour + "</td>";
            lReportString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellFive + "</td>";
            lReportString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellSix + "</td>";
            lReportString.Text += "</tr>";

        }

        #endregion

    }
}
