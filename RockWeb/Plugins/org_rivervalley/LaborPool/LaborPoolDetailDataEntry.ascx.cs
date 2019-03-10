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

using org.rivervalley.LaborPool.Data;
using org.rivervalley.LaborPool.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.LaborPool
{
    [DisplayName("Labor Pool Detail Data Entry")]
    [Category("org_rivervalley > LaborPool")]
    [Description("Labor Pool Detail Data Entry")]

    public partial class LaborPoolDetailDataEntry : Rock.Web.UI.RockBlock
    {
        #region Fields

        private LaborPoolTransactions currentTransaction = null;
        private int tranId;
        private string type;
        private DateTime today = DateTime.Now;
        private Person tranPerson = null;
        private decimal debit;
        private decimal credit;
        private int account;
        private int project;
        private int fund;


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
                var rockContext = new RockContext();
                GetId();
                if(type == "delete")
                {
                    pnlDataEntry.Visible = false;
                    pnlComplete.Visible = false;
                    pnlDelete.Visible = true;
                    pnlError.Visible = false;

                    var personAliasService = new PersonAliasService(rockContext);
                    var personAlias = personAliasService.Get(currentTransaction.PersonAliasId);

                    lDeleteString.Text = "Are you sure you want to delete transaction " + tranId + " ?";
                    lDeleteString.Text += "<br>" + personAlias.Person.FullName +" - " + currentTransaction.TransactionDate.ToShortDateString();
                    lDeleteString.Text += "<br>Debit: " + currentTransaction.Debit + " - Credit: " + currentTransaction.Credit;
                }
                else
                {
                    if (tranId >= 0)
                    {
                        pnlDataEntry.Visible = true;
                        pnlComplete.Visible = false;
                        pnlDelete.Visible = false;
                        pnlError.Visible = false;

                        if (tranId == 0)
                        {
                            hfTransactionId.Value = 0.ToString();
                            dpDate.Text = today.ToShortDateString();
                        }
                        else
                        {
                            // Load Values
                            var personAliasService = new PersonAliasService(rockContext);
                            var personAlias = personAliasService.Get(currentTransaction.PersonAliasId);
                            ppPerson.SetValue(personAlias.Person);
                            dpDate.Text = currentTransaction.TransactionDate.ToShortDateString();
                            tbDescription.Text = currentTransaction.Description;
                            tbDebit.Text = currentTransaction.Debit.ToString();
                            tbCredit.Text = currentTransaction.Credit.ToString();
                            tbAccount.Text = currentTransaction.Glinfo.ToString();
                            tbProject.Text = currentTransaction.Projcode.ToString();
                            rbFund.Text = currentTransaction.FundId.ToString();
                        }
                    }
                    else
                    {
                        pnlDataEntry.Visible = false;
                        pnlComplete.Visible = false;
                        pnlDelete.Visible = false;
                        pnlError.Visible = true;
                        lErrorString.Text = "An error occurred in processing your request. Please check with the administrator";
                    }
                }
                                
            }
        }

        #endregion

        #region Events

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            string link = "~/LaborPoolReports";
            Response.Redirect(link);
        }

        protected void btnDelete_Click(object sender, EventArgs e)
        {
            pnlDataEntry.Visible = false;
            pnlComplete.Visible = true;
            pnlDelete.Visible = false;
            pnlError.Visible = false;


            tranId = int.Parse(hfTransactionId.Value);

            var dataContext = new LaborPoolContext();
            var service = new LaborPoolTransactionsService(dataContext);
            currentTransaction = service.Get(tranId);
            service.Delete(currentTransaction);
            dataContext.SaveChanges();
                        
            lOutputString.Text = "Record deleted.";
        }

        //LaborPoolTransactions transactions;
        


        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            pnlDataEntry.Visible = false;
            pnlComplete.Visible = true;
            pnlError.Visible = false;
                        
            var rockContext = new RockContext();
            tranId = int.Parse(hfTransactionId.Value);

            DateTime transDate = DateTime.Parse(dpDate.Text);
            int person = ppPerson.SelectedValue ?? default(int);
            if (person > 0)
            {
                tranPerson = new PersonService(rockContext).Get(person);
                int alias = tranPerson.PrimaryAliasId ?? default(int);

                if (tbDebit.Text != "")
                {
                    debit = decimal.Parse(tbDebit.Text); 
                }
                else
                {
                    debit = 0;
                }
                if (tbCredit.Text != "")
                {
                    credit = decimal.Parse(tbCredit.Text);
                }
                else
                {
                    credit = 0;
                }
                if (tbAccount.Text != "")
                {
                    account = Int32.Parse(tbAccount.Text);
                }
                else
                {
                    account = 0;
                }
                if (tbProject.Text != "")
                {
                    project = Int32.Parse(tbProject.Text);
                }
                else
                {
                    project = 0;
                }
                if (rbFund.Text != "")
                {
                    fund = Int32.Parse(rbFund.Text);
                }
                else
                {
                    fund = 0;
                }

                tranId = int.Parse(hfTransactionId.Value);

                LaborPoolTransactions transactions;
                var dataContext = new LaborPoolContext();
                var service = new LaborPoolTransactionsService(dataContext);

                if (tranId == 0)
                {
                    transactions = new LaborPoolTransactions();
                    service.Add(transactions);
                }
                else
                {
                    transactions = service.Get(tranId);                    
                }
                
                transactions.PersonAliasId = alias;
                transactions.Debit = debit;
                transactions.Credit = credit;
                transactions.Description = tbDescription.Text;
                transactions.TransactionDate = transDate;
                transactions.Glinfo = account;
                transactions.Projcode = project;
                transactions.FundId = fund;

                dataContext.SaveChanges();

                lOutputString.Text = "Transaction Saved";
            }
            else
            {
                pnlDataEntry.Visible = true;
                pnlComplete.Visible = false;
                pnlError.Visible = true;
                lErrorString.Text += "Select a person";
            }
        }

        #endregion

        #region Methods

        protected void GetId()
        {
            type = PageParameter("type");
            int? id = PageParameter("id").AsIntegerOrNull();
            if (id.HasValue)
            {
                if (id.Value == 0)
                {
                    tranId = 0;
                }
                else
                {
                    var dataContext = new LaborPoolContext();
                    currentTransaction = currentTransaction ?? new LaborPoolTransactionsService(dataContext).Get(id.Value);
                    
                    if (currentTransaction != null)
                    {
                        tranId = id ?? default(int);
                        hfTransactionId.Value = currentTransaction.Id.ToString();
                    }
                    else
                    {
                        tranId = -1;
                    }
                }
            }
            else
            {
                tranId = -1;
            }

        }


        #endregion
    }
}