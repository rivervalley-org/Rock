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
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;


namespace RockWeb.Plugins.org_rivervalley.PrayerCards
{
    [DisplayName("Prayer Cards TestOne")]
    [Category("org_rivervalley > PrayerCards")]
    [Description("Prayer Cards Example for reading records ")]

    public partial class PrayerCardsTestOne : Rock.Web.UI.RockBlock
    {
        #region Fields

        private Person cPerson = null;
        private Person fPerson = null;

        private bool resetValues = false;

        private int aliasId;
        private Group fGroup;

        #endregion

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            var rockContext = new RockContext();
            cPerson = new PersonService(rockContext).Get(24985); ;
            cPerson.LoadAttributes(rockContext);
            lOutputString.Text = "Person " + cPerson.FullName +  " | Last Prayed For; " + cPerson.GetAttributeValue("Arena-34-306");
            DateTime lpfDate = new DateTime(1900,01,01);
            cPerson.SetAttributeValue("Arena-34-306", lpfDate);
            if (resetValues)
            {
                cPerson.SaveAttributeValues();
            }

            fPerson = new PersonService(rockContext).Get(51004);
            aliasId = cPerson.PrimaryAliasId ?? default(int);
            fGroup = new GroupService(rockContext).Get(42707);
            fGroup.LoadAttributes(rockContext);

            //lOutputString.Text += "<br>Person " + fPerson.FullName + " | Last Prayed For; " + fPerson.GetAttributeValue("Arena-34-306");
            //lOutputString.Text += "<br>FamilyId " + fGroup.Id + " | Last Prayed For; " + fGroup.GetAttributeValue("DateLastPrayedfor");

            lpfDate = new DateTime(1900,01,01);
            fGroup.SetAttributeValue("DateLastPrayedfor", lpfDate);
            if (resetValues)
            {
                //fGroup.SaveAttributeValues();
            }


        }

        #region Events
        protected void btnDetail_Click(object sender, EventArgs e)
        {
         
        }
        #endregion

        #region Methods

        #endregion
    }
}