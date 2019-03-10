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

using org.rivervalley.GlobalTripChecklists.Model;

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
    [DisplayName("Sandbox Dynamic Form Two")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Sandbox Dynamic Form Two")]


    public partial class SandboxDynamicFormTwo : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private List<int> tripItemsId = new List<int>();
        private int var1 = 0;
        private int var2 = 0;
        private int var3 = 0;
        private int var4 = 0;
        private int var5 = 0;
        private string itemName;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                BuildAssignedItemList(84985);
                int counter = 0;
                foreach (int tItem in tripItemsId)
                {
                    counter++;
                    if(counter == 1)
                    {
                        GetItemName(tItem);
                        lItem1.Text = "<b>" + itemName + "</b><br>";
                        lItem1.Visible = true;                        
                        rbl1.Visible = true;
                        rbl1.Text = 2.ToString();
                    }
                    if (counter == 2)
                    {
                        GetItemName(tItem);
                        lItem2.Text = "<b>" + itemName + "</b><br>";
                        lItem2.Visible = true;
                        rbl2.Visible = true;
                        rbl2.Text = 2.ToString();
                    }
                    if (counter == 3)
                    {
                        GetItemName(tItem);
                        lItem3.Text = "<b>" + itemName + "</b><br>";
                        lItem3.Visible = true;
                        rbl3.Visible = true;
                        rbl3.Text = 2.ToString();
                    }
                    if (counter == 4)
                    {
                        GetItemName(tItem);
                        lItem4.Text = "<b>" + itemName + "</b><br>";
                        lItem4.Visible = true;
                        rbl4.Visible = true;
                        rbl4.Text = 2.ToString();
                    }
                    if (counter == 5)
                    {
                        GetItemName(tItem);
                        lItem5.Text = "<b>" + itemName + "</b><br>";
                        lItem5.Visible = true;
                        rbl5.Visible = true;
                        rbl5.Text = 2.ToString();
                    }
                }
            }
        }


        #endregion

        #region Events
        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnSave_Click(object sender, EventArgs e)
        {
            if (rbl1.Text != "")
            {
                var1 = Int32.Parse(rbl1.Text);
            }
            if (rbl2.Text != "")
            {
                var2 = Int32.Parse(rbl2.Text);
            }
            if (rbl3.Text != "")
            {
                var3 = Int32.Parse(rbl3.Text);
            }
            if (rbl4.Text != "")
            {
                var4 = Int32.Parse(rbl4.Text);
            }
            if (rbl5.Text != "")
            {
                var5 = Int32.Parse(rbl5.Text);
            }

            lDebugString.Text = "var1 " + var1;
            lDebugString.Text += "<br>var2 " + var2;
            lDebugString.Text += "<br>var3 " + var3;
            lDebugString.Text += "<br>var4 " + var4;
            lDebugString.Text += "<br>var5 " + var5;
        }

        #endregion

        #region Methods

        private void BuildAssignedItemList(int trip)
        {
            string qryString = "";
            qryString = qryString + "SELECT ai.TripGroupId, ai.TripItemId, dv.Value  ";
            qryString = qryString + "FROM _org_rivervalley_GlobalTripAssignedItems ai ";
            qryString = qryString + "LEFT JOIN DefinedValue dv on ai.TripItemId = dv.Id ";
            qryString = qryString + "WHERE TripGroupId = " + trip;

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                tripItemsId.Add(rdr.GetInt32(1));
            }
            conn.Close();
        }

        private void GetItemName(int item)
        {
            var definedValue = new DefinedValueService(new RockContext()).Get(item);
            itemName = definedValue.Value;
        }

        #endregion
    }
}