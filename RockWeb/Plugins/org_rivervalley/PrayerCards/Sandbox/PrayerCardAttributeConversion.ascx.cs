using System.ComponentModel;
using System.ComponentModel.Composition;
using System.IO;
using System.Linq;
using System.Data.SqlClient;
using System.Configuration;

using org.rivervalley.PrayerDates.Data;
using org.rivervalley.PrayerDates.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Collections.Generic;
using System.Data;
using System;
using System.Diagnostics;
using Rock.Web.Cache;


namespace RockWeb.Plugins.org_rivervalley.PrayerCards
{
    [DisplayName("Prayer Card Attribute Conversion")]
    [Category("org_rivervalley > PrayerCards")]
    [Description("Prayer Card Attribute Conversion 2512,2513,2514,2515,2516,2517,2518,2519,2520, 2521 to 7431 - Family")]

    public partial class PrayerCardAttributeConversion : Rock.Web.UI.RockBlock
    {
        #region Fields

        private Person cPerson;
        private DateTime datePrayedFor;
        private DateTime datePrayedFor2521;
        private string selectedAttribute;
        //private bool recordExists;
        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private int counter;

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
                pnlDetail.Visible = false;
                pnlError.Visible = true;
                pnlComplete.Visible = false;
                nbWarningMessage.Text = "<br>This program is no longer functioning";
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
            lOutputString.Text = "";
            selectedAttribute = rblAttributes.SelectedValue;

            if (selectedAttribute == "")
            {
                pnlError.Visible = true;
                pnlDetail.Visible = true;
                pnlComplete.Visible = false;
                nbWarningMessage.Text = "<br>Please select one Attribute Campus";
            }
            else
            {
                pnlError.Visible = false;
                pnlDetail.Visible = false;
                pnlComplete.Visible = true;
                
                switch (selectedAttribute)
                {
                    case "2512":
                        lOutputString.Text += "<b>Selected Attribute:</b> Apple Valley (2512)<br>";
                        ConvertAttribute(2512, "Arena-34-581"); 
                        break;
                    case "2513":
                        lOutputString.Text += "<b>Selected Attribute:</b> Faribault (2513)<br>";
                        ConvertAttribute(2513, "Arena-34-582");
                        break;
                    case "2514":
                        lOutputString.Text += "<b>Selected Attribute:</b> Shakopee (2514)<br>";
                        ConvertAttribute(2514, "Arena-34-583");
                        break;
                    case "2515":
                        lOutputString.Text += "<b>Selected Attribute:</b> Minnetrista (2515)<br>";
                        ConvertAttribute(2515, "Arena-34-584");
                        break;
                    case "2516":
                        lOutputString.Text += "<b>Selected Attribute:</b> Burnsville (2516)<br>";
                        ConvertAttribute(2516, "Arena-34-585");
                        break;
                    case "2517":
                        lOutputString.Text += "<b>Selected Attribute:</b> Edina Area (2517)<br>";
                        ConvertAttribute(2517, "Arena-34-586");
                        break;
                    case "2518":
                        lOutputString.Text += "<b>Selected Attribute:</b> Egan (2518)<br>";
                        ConvertAttribute(2518, "Arena-34-5061");
                        break;
                    case "2519":
                        lOutputString.Text += "<b>Selected Attribute:</b> Woodbury (2519)<br>";
                        ConvertAttribute(2519, "Arena-34-5065");
                        break;
                    case "2520":
                        lOutputString.Text += "<b>Selected Attribute:</b> Minneapolis (2520)<br>";
                        ConvertAttribute(2520, "Arena-34-5137");
                        break;
                    case "All":
                        lOutputString.Text += "<b>Selected Attribute:</b> All Campuses<br>";
                        ConvertAttribute(2512, "Arena-34-581");
                        ConvertAttribute(2513, "Arena-34-582");
                        ConvertAttribute(2514, "Arena-34-583");
                        ConvertAttribute(2515, "Arena-34-584");
                        ConvertAttribute(2516, "Arena-34-585");
                        ConvertAttribute(2517, "Arena-34-586");
                        ConvertAttribute(2518, "Arena-34-5061");
                        ConvertAttribute(2519, "Arena-34-5065");
                        ConvertAttribute(2520, "Arena-34-5137");
                        break;
                }
                               
                lOutputString.Text += "<p><b>Count converted:</b> " + counter;

            }
        }

        #endregion

        #region Methods

        protected void ConvertAttribute(int attrId, string attrKey)
        {
            var rockContext = new RockContext();
            var avQry = new AttributeValueService(new RockContext()).Queryable();
            avQry = avQry.Where(row => row.AttributeId == attrId && row.Value != "").Take(1);  //.Take(1); to limit results
            int personId;
            foreach (var qRow in avQry)
            {
                
                personId = qRow.EntityId ?? default(int);
                
               
                cPerson = new PersonService(rockContext).Get(personId);
                cPerson.LoadAttributes(rockContext);
                datePrayedFor = Convert.ToDateTime(cPerson.GetAttributeValue(attrKey));

                //lOutputString.Text += "<br>(" + cPerson.Id + ") " + cPerson.FullName;
                if (cPerson.GetAttributeValue("Arena-34-306") != "")
                {
                    datePrayedFor2521 = Convert.ToDateTime(cPerson.GetAttributeValue("Arena-34-306"));
                    TimeSpan diff = datePrayedFor.Subtract(datePrayedFor2521);
                    if (diff.Days > 0)
                    {
                        //lOutputString.Text += "  | Deleted 2521 Record & Updated existing record";
                        Get2520AttrId(personId); // To delete the older record (2521)

                        SQLUpdate(qRow.Id); //Update existing record
                    }
                    else
                    {
                        //lOutputString.Text += "  | Deleted existing record";
                        SQLDelete(qRow.Id);
                        counter++;
                    }
                }
                else
                {
                    //lOutputString.Text += "  | Updated existing record";
                    Get2520AttrId(personId);
                    SQLUpdate(qRow.Id);
                }
            }
        }

        protected void SQLUpdate(int attrId)
        {
            string qryString = "UPDATE AttributeValue SET AttributeId = 2521 WHERE Id = " + attrId;
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            conn.Close();
            counter++;
        }

        protected void Get2520AttrId(int entityId)
        {
            var rockContext = new RockContext();
            var avQry = new AttributeValueService(new RockContext()).Queryable();
            avQry = avQry.Where(row => row.EntityId == entityId && row.AttributeId == 2521);
            foreach (var qRow in avQry)
            {                
                SQLDelete(qRow.Id);
            }
        }

        protected void SQLDelete(int attrId)
        {
            string qryString = "DELETE AttributeValue WHERE Id = " + attrId;
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            conn.Close();
        }

        protected void GetFamilyGroupId(int person)
        {
            string qryString = "SELECT g.Id FROM [Group] g INNER JOIN GroupMember gm ON gm.GroupId = g.Id WHERE gm.PersonId = " + person + " AND g.GroupTypeId = 10";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                lOutputString.Text += "<br>Family Group Id: " + rdr.GetInt32(0);
                Get7431AttrId(rdr.GetInt32(0));

            }
            conn.Close();
        }

        protected void Get7431AttrId(int entityId)
        {
            bool recordFound = false;
            var rockContext = new RockContext();
            var avQry = new AttributeValueService(new RockContext()).Queryable();
            avQry = avQry.Where(row => row.EntityId == entityId && row.AttributeId == 7431);
            foreach (var qRow in avQry)
            {
                recordFound = true; 
            }
            lOutputString.Text += "<br>Record Found: " + recordFound;
        }

        #endregion
    }
}