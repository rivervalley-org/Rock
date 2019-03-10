using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

using org.rivervalley.GLFunds.Data;
using org.rivervalley.GLFunds.Model;

using Rock;
using Rock.Constants;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;
using Rock.Attribute;
using System.Text.RegularExpressions;

namespace RockWeb.Plugins.org_rivervalley.GLFunds
{
    [DisplayName("GL Export")]
    [Category("org_rivervalley > GLFunds")]
    [Description("General Ledger Export")]
    [LinkedPage("GL Export")]

    public partial class GLExport : Rock.Web.UI.RockBlock
    {
        #region Fields
        private int batchID;
        private string textOutput = "";
        private string glString;
        private string bankString;
        private string revenueString;
        private string period;
        private string accountName = "Contributions";
        private string journalType;
        private string tDate;
        private string amount;
        private decimal dAmount;
        private string batchDesc;

        private string divRowOpen = "<div class='row'>";
        private string divCellOpen = "<div class='col-sm-1'>";        
        private string divClose = "</div>";

        //protected string glPath = @"C:\";        
        protected string glPath = @"\\rvcshelby\SNF_Import_Files\";
        protected string glFile = @"\gltrn2000.txt";
        protected string emptyString = "";
        
        
        #endregion

        private string connString = ConfigurationManager.ConnectionStrings["ArenaContext"].ConnectionString;

        #region Base Control Methods

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);

            gBatches.RowItemText = "ID";
            gBatches.DataKeyNames = new string[] { "id" };
            
        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            File.WriteAllText(glPath + glFile, emptyString + Environment.NewLine);

            if (!Page.IsPostBack)
            {
                GetBatchId();
                if (batchID > 0)
                {
                    hfBatchId.Value = batchID.ToString();
                    lBatchId.Text = batchID.ToString();
                    pnlBatchEntry.Visible = true;
                    pnlPreview.Visible = true;
                    BuildJournalTypeDD();
                    ddlJournalType.Text = "CN";

                    lPreviewString.Text += divRowOpen;
                    lPreviewString.Text += divCellOpen + "Company" + divClose;
                    lPreviewString.Text += divCellOpen + "Fund" + divClose;
                    lPreviewString.Text += divCellOpen + "Account" + divClose;
                    lPreviewString.Text += divCellOpen + "Revenue" + divClose;
                    lPreviewString.Text += divCellOpen + "Department" + divClose;
                    lPreviewString.Text += divCellOpen + "Project" + divClose;
                    lPreviewString.Text += divCellOpen + "Amount" + divClose;
                    lPreviewString.Text += divClose;
                    FinancialTransactions(batchID);
                }
                else
                {
                    pnlBatchList.Visible = true;
                    BindGrid();
                }               
            }
            
        }
        #endregion

        #region Methods

        private void BindGrid()
        {
            var rockContext = new RockContext();
            var qry = new FinancialBatchService(rockContext).Queryable();
            //gBatches.DataSource = qry.Where(a => a.Id > 26200).OrderBy(x => x.Id).ToList();
            gBatches.DataSource = qry.Where(a => a.Status == BatchStatus.Open).OrderBy(x => x.Id).ToList();

            gBatches.DataBind();
        }

        protected void FinancialBatch(int batchId)
        {
            // get Financial Batch 

            var rockContext = new RockContext();
            var qry = new FinancialBatchService(rockContext).Queryable();
            qry = qry.Where(a => a.Id == batchId);
            foreach (var row in qry)
            {
                batchDesc = row.Name;
            }
            if (batchDesc.Contains("ACH")) { accountName = "Contributions_ACH"; }
            if (batchDesc.Contains("Visa_M")) { accountName = "Contributions_VMC"; }
            if (batchDesc.Contains("Discov")) { accountName = "Contributions_DSV"; }
            if (batchDesc.Contains("Americ")) { accountName = "Contributions_AMX"; }
        }

        protected void FinancialTransactions(int batchId)
        {
            // get Financial Batch Detail

            var rockContext = new RockContext();
            var qry = new FinancialTransactionService(rockContext).Queryable();
            qry = qry.Where(a => a.BatchId == batchId);
            foreach (var row in qry)
            {
                DateTime transactionDate = Convert.ToDateTime(row.TransactionDateTime);
                tDate = transactionDate.ToString("MMddyy");
                FinancialTransactionDetail(row.Id);
            }
        }

        protected void FinancialTransactionDetail(int id)
        {
            // get Transaction Detail

            var rockContext = new RockContext();
            var qry = new FinancialTransactionDetailService(rockContext).Queryable();
            qry = qry.Where(a => a.TransactionId == id);
            foreach (var row in qry)
            {
                dAmount = row.Amount;
                string[] splitAmount = row.Amount.ToString().Split('.');
                string leftAmount = splitAmount[0];
                string rightAmount = splitAmount[1];
                amount = leftAmount + "" + rightAmount;
				FinancialAccount(row.AccountId);                
            }
        }

        protected void FinancialAccount(int account)
        {
            // get Account

            var rockContext = new RockContext();
            var qry = new FinancialAccountService(rockContext).Queryable();
            qry = qry.Where(a => a.Id == account);
            foreach (var row in qry)
            {
                ExtendedFunds(account);
            }
        }

        protected void ExtendedFunds(int account)
        {
            // get Extended Funds

            var dataContext = new GLFundsContext();
            var qry = new ExtendedFundsService(dataContext).Queryable();
            qry = qry.Where(a => a.FinancialAccountId == account);
            foreach (var row in qry)
            {
                glString = "\"00000\",\"0" + row.Company + "00" + row.Fund + period + journalType + "00000\",\"000\",\"" + tDate + "\",\"" + accountName + "\",\"\",";
                bankString = "\"0000000" + row.BankAccount + "\",\"" + amount + "\",\"\"";
                revenueString = "\"" + row.RevenueDepartment + "0000" + row.RevenueAccount + "\",\"-" + amount + "\",\"" + row.ProjectCode + "\"";
                textOutput = glString + bankString;
                File.AppendAllText(glPath + glFile, textOutput + Environment.NewLine);
                textOutput = glString + revenueString;
                File.AppendAllText(glPath + glFile, textOutput + Environment.NewLine);

                lPreviewString.Text += divRowOpen;
                lPreviewString.Text += divCellOpen + row.Company + divClose;
                lPreviewString.Text += divCellOpen + row.Fund + divClose;
                lPreviewString.Text += divCellOpen + row.BankAccount + divClose;
                lPreviewString.Text += divCellOpen + "" + divClose;
                lPreviewString.Text += divCellOpen + "" + divClose;
                lPreviewString.Text += divCellOpen + "" + divClose;
                lPreviewString.Text += divCellOpen + dAmount + divClose;
                lPreviewString.Text += divClose;

                lPreviewString.Text += divRowOpen;
                lPreviewString.Text += divCellOpen + row.Company + divClose;
                lPreviewString.Text += divCellOpen + row.Fund + divClose;
                lPreviewString.Text += divCellOpen + "" + divClose;
                lPreviewString.Text += divCellOpen + row.RevenueAccount + divClose;
                lPreviewString.Text += divCellOpen + row.RevenueDepartment + divClose;
                lPreviewString.Text += divCellOpen + row.ProjectCode + divClose;
                lPreviewString.Text += divCellOpen + "-" + dAmount + divClose;
                lPreviewString.Text += divClose;
            }
        }

        protected void BuildJournalTypeDD()
        {
            var rockContext = new RockContext();
            var qry = new DefinedValueService(rockContext).Queryable();
            qry = qry.Where(a => a.DefinedTypeId == 117);
            foreach (var row in qry)
            {
                GetAttributeValue(row.Id);
                ddlJournalType.Items.Add(new ListItem( row.Value, journalType ));                
            }
        }

        protected void GetAttributeValue(int id)
        {
            var qry = new AttributeValueService(new RockContext()).Queryable();
            qry = qry.Where(row => row.AttributeId == 2124 && row.EntityId == id);
            foreach (var row in qry)
            {
                journalType = row.Value;
            }
        }

        protected void GetBatchId()
        {
            int? batchId = PageParameter("batchId").AsIntegerOrNull();
            if (batchId.HasValue) { batchID = batchId.Value; } else { batchID = 0; }
        }

        #endregion

        #region Events

        protected void gBatchList_Select(object sender, RowEventArgs e)
        {
            NavigateToLinkedPage("GLExport", "batchId", e.RowKeyId);
        }

        protected void btnBatchEntry_Click(object sender, EventArgs e)
        {
            pnlBatchEntry.Visible = false;
            pnlBatchList.Visible = false;
            pnlPreview.Visible = false;
            
            if (tbPeriod.Text == "")
            {
                pnlBatchEntry.Visible = true;
                pnlError.Visible = true;
                nbWarningMessage.Text = string.Empty;
                nbWarningMessage.Text = "Please enter an Accounting Period.";               
            }
            else
            {
                pnlError.Visible = false;
                bool tryHF = Int32.TryParse(hfBatchId.Value, out batchID);
                period = tbPeriod.Text;
                journalType = ddlJournalType.SelectedValue;
                FinancialBatch(batchID);
                FinancialTransactions(batchID);
				pnlComplete.Visible = true;
				lCompleteString.Text = "GLTRN2000.txt file complete.";
            }            
        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnCancelList_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

    }
    #endregion

}