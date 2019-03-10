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

namespace RockWeb.Plugins.org_rivervalley.Utility
{
    [DisplayName("Attribute Values Bulk Delete")]
    [Category("org_rivervalley > Utility")]
    [Description("Will delete all existing values in specific attributes")]
    [TextField("AttributeIds", "List the Attribute Id;s to delete - seperate with a comma. For example: 2997,3030,3000")]

    public partial class AttributeValuesBulkDelete : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private List<int> attributeIds = new List<int>();

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
                
            }
        }

        #endregion

        #region Events

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnInitiateDeletion_Click(object sender, EventArgs e)
        {
            pnlButton.Visible = false;
            pnlConfirmation.Visible = true;
            pnlComplete.Visible = false;

            // get ids from block list
            var attributeIds = GetAttributeValue("AttributeIds");
            string[] attributeItems = attributeIds.Split(',');

            lOutputString.Text = "Do you really want to DELETE all current Values from: ";
            lOutputString.Text += "<ul>";
            foreach (var item in attributeItems)
            {
                int attrItem = int.Parse(item);
                string attrName;
                int attrCount;
                attrName = GetAttributeName(attrItem);
                attrCount = GetAttributeCount(attrItem);

                lOutputString.Text += "<li>" + attrName + " (" + attrCount + " records)</li>";
            }
            lOutputString.Text += "</ul>";           

        }

        protected void btnDeletionVerified_Click(object sender, EventArgs e)
        {
            pnlButton.Visible = false;
            pnlConfirmation.Visible = false;
            pnlComplete.Visible = true;

            // get ids from block list
            var attributeIds = GetAttributeValue("AttributeIds");
            string[] attributeItems = attributeIds.Split(',');
            
            foreach (var item in attributeItems)
            {
                int attrItem = int.Parse(item);
                string attrName;
                attrName = GetAttributeName(attrItem);


                int countUpdated = UpdateAttributeValues(attrItem);
                countUpdated = countUpdated / 2;
                lCompleteString.Text = "<br>" + attrName + ": " + countUpdated + " Records updated";                
            }
            
        }
        #endregion

        #region Methods

        private string GetAttributeName(int attrId)
        {
            string aName = "";
            var qry = new AttributeService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.Id == attrId);
            foreach (var qRow in qry)
            {
                aName = qRow.Name;
            }
            return aName;
        }

        private int GetAttributeCount(int attrId)
        {
            int aCount = 0;
            string qryString = "";
            qryString = qryString + "SELECT COUNT(*) ";
            qryString = qryString + "FROM AttributeValue ";
            qryString = qryString + "WHERE AttributeId = " + attrId + " ";
            qryString = qryString + "AND Value <> ''";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                aCount = rdr.GetInt32(0);
            }
            conn.Close();
            return aCount;
        }

        protected int UpdateAttributeValues(int attrId)
        {
            string qryString = "";
            qryString = qryString + "UPDATE AttributeValue ";
            qryString = qryString + "SET Value = '' ";
            qryString = qryString + "WHERE AttributeId = " + attrId + " "; 
            qryString = qryString + "AND Value <> ''";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            int rowsAffected = cmd.ExecuteNonQuery();
            conn.Close();
            return rowsAffected;
        }

        #endregion

    }
}