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
    [DisplayName("New Employee Membership Update")]
    [Category("org_rivervalley > Utility")]
    [Description("Will update membership data")]
    
    public partial class NewEmployeeUpdate : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private DateTime today = DateTime.Now;
        private DateTime nullDate = new DateTime(1900, 1, 1);
        private Person currentPerson = null;
        private Person ePerson;
        private int eConnectionStatus;
        private string eIsMember;
        private DateTime eFTHireDate = new DateTime(1900, 1, 1);
        private DateTime ePTHireDate = new DateTime(1900, 1, 1);
        private DateTime eMembershipDate = new DateTime(1900, 1, 1);
        private Person sPerson;
        private int sConnectionStatus;
        private string sIsMember;
        private DateTime sMembershipDate = new DateTime(1900, 1, 1);
        private int changeCounter;

        #endregion

        #region Base Control Methods

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
            currentPerson = CurrentPerson;
        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);
            lOutputString.Text = "";
        }

        #endregion

        #region Events

        protected void btnMembershipUpdate_Click(object sender, EventArgs e)
        {
            string personId = PageParameter("PersonId");
            if (!string.IsNullOrWhiteSpace(personId))
            {
                changeCounter = 0;
                var id = Int32.Parse(personId);
                var rockContext = new RockContext();
                // Employee Data
                ePerson = new PersonService(rockContext).Get(id);
                eConnectionStatus = ePerson.ConnectionStatusValueId ?? default(int);

                ePerson.LoadAttributes(rockContext);
                eIsMember = ePerson.GetAttributeValue("Arena-11-93");
                if (ePerson.GetAttributeValue("MembershipDate") != "")
                {
                    eMembershipDate = Convert.ToDateTime(ePerson.GetAttributeValue("MembershipDate"));
                }
                if (ePerson.GetAttributeValue("FullTimeHireDate") != "")
                {
                    eFTHireDate = Convert.ToDateTime(ePerson.GetAttributeValue("FullTimeHireDate"));
                }
                if (ePerson.GetAttributeValue("PartTimeHireDate") != "")
                {
                    ePTHireDate = Convert.ToDateTime(ePerson.GetAttributeValue("PartTimeHireDate"));
                }
                
                // Spouse Data
                sPerson = new PersonService(rockContext).GetSpouse(ePerson);
                sConnectionStatus = sPerson.ConnectionStatusValueId ?? default(int);
                sPerson.LoadAttributes(rockContext);
                if (sPerson.GetAttributeValue("Arena-11-93") != "")
                {
                    sIsMember = sPerson.GetAttributeValue("Arena-11-93");
                }
                if (sPerson.GetAttributeValue("MembershipDate") != "")
                {
                    sMembershipDate = Convert.ToDateTime(sPerson.GetAttributeValue("MembershipDate"));
                }
                
                if (eConnectionStatus != 65)
                {
                    Person empl;
                    lOutputString.Text += "<br> Employee Connection Status Updated";
                    var service = new PersonService(rockContext);
                    empl = service.Get(ePerson.Id);
                    empl.ConnectionStatusValueId = 65;
                    rockContext.SaveChanges();
                }
                if (sConnectionStatus != 65)
                {
                    changeCounter++;
                    Person sEmpl;
                    lOutputString.Text += "<br> Spouse Connection Status Updated";
                    var service = new PersonService(rockContext);
                    sEmpl = service.Get(sPerson.Id);
                    sEmpl.ConnectionStatusValueId = 65;
                    rockContext.SaveChanges();
                }
                if(eIsMember != "True")
                {
                    changeCounter++;
                    lOutputString.Text += "<br> Employee Membership Status Updated";
                    ePerson.SetAttributeValue("Arena-11-93", "True");
                    ePerson.SaveAttributeValues();
                }
                if (sIsMember != "True")
                {
                    changeCounter++;
                    lOutputString.Text += "<br> Spouse Membership Status Updated";
                    sPerson.SetAttributeValue("Arena-11-93", "True");
                    sPerson.SaveAttributeValues();
                }
                if(eMembershipDate == nullDate)
                {
                    if(eFTHireDate > nullDate)
                    {
                        changeCounter++;
                        lOutputString.Text += "<br> Employee Membership Date Updated";
                        ePerson.SetAttributeValue("MembershipDate", eFTHireDate);
                        ePerson.SaveAttributeValues();
                    }
                    else
                    {
                        if (ePTHireDate > nullDate)
                        {
                            changeCounter++;
                            lOutputString.Text += "<br> Employee Membership Date Updated";
                            ePerson.SetAttributeValue("MembershipDate", ePTHireDate);
                            ePerson.SaveAttributeValues();
                        }
                        else
                        {
                            changeCounter++;
                            lOutputString.Text += "<br> Employee Membership Date Updated";
                            ePerson.SetAttributeValue("MembershipDate", today);
                            ePerson.SaveAttributeValues();                            
                        }
                    }                   
                }
                if (sMembershipDate == nullDate)
                {
                    changeCounter++;
                    lOutputString.Text += "<br> Spouse Membership Date Updated";
                    sPerson.SetAttributeValue("MembershipDate", today);
                    sPerson.SaveAttributeValues();
                }
                if (changeCounter == 0)
                {
                    lOutputString.Text = "No changes were required.";
                }
            }
            else
            {
                lOutputString.Text = "An error has occurred in processing your request";
                lOutputString.Visible = true;
            }
        }

       

        #endregion

        #region Methods
                

        #endregion
    }
}