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

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.Sandbox
{
    [DisplayName("Sandbox Generic JO")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Sandbox Generic Job Offer Test")]


    public partial class SandboxGenericForm : Rock.Web.UI.RockBlock
    {
        #region Fields

        private DateTime today = DateTime.Now;

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
                pnlForm.Visible = true;
                pnlComplete.Visible = false;

                // Load values into form
                LoadDropDownValues();
                dtPicker.Text = today.ToShortDateString();
                var items = cblFruit.Items;
                items.Add("Apples");
                items.Add("Oranges");
                items.Add("Grapes");
            }

        }


        #endregion

        #region Events

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnLink_Click(object sender, EventArgs e)
        {
            string link = "~/JOPrint?id=184&ViewDocument=true";
            Response.Redirect(link);
            
        }

        protected void btnContinue_Click(object sender, EventArgs e)
        {
            pnlForm.Visible = false;
            pnlComplete.Visible = true;
            lOutputString.Text = "";

            var campus = Int32.Parse(ddCampus.Text);
            DateTime sDate = DateTime.Parse(dtPicker.Text);
            var status = Int32.Parse(rbStatus.Text);
            string fruits = "";
            foreach (ListItem item in cblFruit.Items)
            {
                if (item.Selected)
                {
                    fruits = fruits + item.Value + ", ";
                }
            }
            var selectedPerson = ppPerson.SelectedValue;

            lOutputString.Text += "<br>Campus: " + campus;
            lOutputString.Text += "<br>Date: " + sDate;
            lOutputString.Text += "<br>RB Status: " + status;
            lOutputString.Text += "<br>Fruits: " + fruits;
            lOutputString.Text += "<br>Comments: " + tbComment.Text;
            lOutputString.Text += "<br>Person: " + selectedPerson;
        }

        #endregion

        #region Methods

        private void LoadDropDownValues()
        {
            var cQry = new CampusService(new RockContext()).Queryable().AsNoTracking();
            cQry = cQry.Where(row => row.Id != 7 && row.Id != 8 && row.Id != 10);
            var cQrySorted = cQry.OrderBy(a => a.Name);
            ddCampus.Items.Add(new ListItem("", "0"));
            foreach (var qRow in cQrySorted)
            {
                ddCampus.Items.Add(new ListItem(qRow.Name, qRow.Id.ToString()));
            }
        }

        #endregion
    }
}