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

using org.rivervalley.PastorOnCall.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.PastorOnCall
{
    [DisplayName("Pastor On Call Data Entry")]
    [Category("org_rivervalley > PastorOnCall")]
    [Description("Pastor On Call Data Entry")]


    public partial class POCDataEntry : Rock.Web.UI.RockBlock
    {
        #region Fields

        private int groupId;
        private int campusId;
        private int personId;
        private DateTime scheduleDate;
        private DateTime parameterDTValue;
        private DateTime today = DateTime.Now;
        private bool dateNull;
        private bool formError;
        private PastorOnCallSchedule newScheduledItem = null;
        private bool recordFound;
        private string smsValue;
        private int smsId;
        private string smsAttributeValue;

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
                pnlCampusSelection.Visible = true;
                pnlPastorSelection.Visible = false;
                pnlError.Visible = false;
                pnlComplete.Visible = false;
                LoadPOCGroups();
            }
        }


        #endregion

        #region Events

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnSchedule_Click(object sender, EventArgs e)
        {
            string link = "~/POCScheduler";
            Response.Redirect(link);
        }

        protected void btnCampusSelection_Click(object sender, EventArgs e)
        {
            lErrorString.Text = "";
            pnlCampusSelection.Visible = false;
            pnlPastorSelection.Visible = true;
            pnlError.Visible = false;
            pnlComplete.Visible = false;
            groupId = int.Parse(ddCampusGroups.Text);
            if(groupId == 0)
            {
                pnlCampusSelection.Visible = true;
                pnlPastorSelection.Visible = false;
                pnlError.Visible = true;
                pnlComplete.Visible = false;
                lErrorString.Text += "Select a Campus";
            }
            else
            {
                LoadPastorDropDownValues(groupId);
                LoadCampusInfo(groupId);
                hfCampusGroup.Value = groupId.ToString();
            }
            
        }

        protected void btnPastorSave_Click(object sender, EventArgs e)
        {
            lErrorString.Text = "";
            lDebugString.Text = "";
            formError = false;
            groupId = int.Parse(hfCampusGroup.Value);
            campusId = int.Parse(hfCampusId.Value);
            personId = int.Parse(ddPastors.Text);
            pnlCampusSelection.Visible = false;
            pnlPastorSelection.Visible = false;
            pnlError.Visible = false;
            pnlComplete.Visible = true;

            if (personId == 0)
            {
                formError = true;
                pnlPastorSelection.Visible = true;
                pnlError.Visible = true;
                pnlComplete.Visible = false;
                lErrorString.Text += "Select a pastor";
            }

            try // test for blank date
            {
                parameterDTValue = DateTime.Parse(dpScheduleDate.SelectedDate.ToString());
                dateNull = false;
            }
            catch (FormatException)
            {
                dateNull = true;
            }
            if (dateNull == false)
            {
                scheduleDate = DateTime.Parse(dpScheduleDate.SelectedDate.ToString());
                DayOfWeek selectedDate = scheduleDate.DayOfWeek;
                if (selectedDate != DayOfWeek.Monday)
                {
                    formError = true;
                    pnlPastorSelection.Visible = true;
                    pnlError.Visible = true;
                    pnlComplete.Visible = false;
                    lErrorString.Text += "<br>Selected date must be a Monday";
                }
                if (scheduleDate < today)
                {
                    formError = true;
                    pnlPastorSelection.Visible = true;
                    pnlError.Visible = true;
                    pnlComplete.Visible = false;
                    lErrorString.Text += "<br>Select a future date";
                }
            }
            else
            {
                formError = true;               
                pnlPastorSelection.Visible = true;
                pnlError.Visible = true;
                pnlComplete.Visible = false;
                lErrorString.Text += "<br>Selected a date";
             }
            
            if(formError == false)
            {
                CheckPOCSchedule(campusId, scheduleDate);
                if (recordFound)
                {
                    pnlPastorSelection.Visible = true;
                    pnlError.Visible = true;
                    pnlComplete.Visible = false;
                    lErrorString.Text += "<br>The date/campus you selected is already scheduled.";
                }
                else
                {
                    var rockContext = new RockContext();
                    Person sPerson;
                    int alias;
                    string sms = "";

                    sPerson = new PersonService(rockContext).Get(personId);                    
                    alias = sPerson.PrimaryAliasId ?? default(int);
                    
                    sPerson.LoadAttributes(rockContext);
                    sms = sPerson.GetAttributeValue("Arena-83-5042");
                    Guid? smsGuid = sms.AsGuidOrNull();
                    GetSMSProvider(smsGuid);
                    GetSMSAttributeValue(smsId);
                    
                    var phoneNumber = sPerson.PhoneNumbers.FirstOrDefault(n => n.NumberTypeValueId == 12);
                    string smsString = phoneNumber.ToString();
                    smsString = smsString.Replace("(", "");
                    smsString = smsString.Replace(")", "");
                    smsString = smsString.Replace("-", "");
                    smsString = smsString.Replace(" ", "");                    
                    //smsString = smsString + "@txt." + smsValue + ".net";  This was the original way it was done...
                    smsString = smsString + smsAttributeValue;
                    
                    if(smsValue == "")
                    {
                        pnlPastorSelection.Visible = true;
                        pnlError.Visible = true;
                        pnlComplete.Visible = false;
                        lErrorString.Text += "<br>The selected pastor (" + sPerson.FullName + ") must have a wireless service provider entry in their record before we can process this request.";
                    }
                    else
                    {
                        WriteNewScheduledItem(groupId, personId, alias, smsString, scheduleDate, campusId);
                    }                    
                }
            }            
        }

        #endregion

        #region Methods
                
        private void LoadPOCGroups()
        {
            var qry = new GroupService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.ParentGroupId == 262637);
            var qrySorted = qry.OrderBy(a => a.Name);
            ddCampusGroups.Items.Add(new ListItem("", "0"));
            foreach (var qRow in qrySorted)
            {
                ddCampusGroups.Items.Add(new ListItem(qRow.Name, qRow.Id.ToString()));
            }
        }

        private void LoadPastorDropDownValues(int groupId)
        {
            var rockContext = new RockContext();
            var qry = new GroupMemberService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.GroupId == groupId);
            ddPastors.Items.Add(new ListItem("", "0"));
            foreach (var qRow in qry)
            {
                Person pPerson;
                pPerson = new PersonService(rockContext).Get(qRow.PersonId);

                ddPastors.Items.Add(new ListItem(pPerson.FullName, qRow.PersonId.ToString()));
            }
        }

        private void LoadCampusInfo(int groupId)
        {
            var qry = new GroupService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.Id == groupId);
            foreach (var qRow in qry)
            {
                lCampusName.Text = qRow.Name;
                hfCampusId.Value = qRow.CampusId.ToString();
                
            }
        }

        private void WriteNewScheduledItem(int group, int person, int alias, string sms, DateTime sDate, int campus)
        {
            var dataContext = new RockContext();
            var service = new PastorOnCallScheduleService(dataContext);
            newScheduledItem = new PastorOnCallSchedule();
            service.Add(newScheduledItem);

            newScheduledItem.GroupId = group;
            newScheduledItem.PersonId = person;
            newScheduledItem.PersonAliasId = alias;
            newScheduledItem.SMSNumber = sms;
            newScheduledItem.DateScheduled = sDate;
            newScheduledItem.CampusId = campus;

            dataContext.SaveChanges();
        }

        private void CheckPOCSchedule(int campus, DateTime sDate)
        {
            recordFound = false;
            var qry = new PastorOnCallScheduleService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.CampusId == campus && row.DateScheduled == sDate);
            foreach (var qRow in qry)
            {
                recordFound = true;
            }
        }

        private void GetSMSProvider(Guid? smsGuid)
        {
            smsValue = "";
            smsId = 0;
            var qry = new DefinedValueService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.Guid == smsGuid);
            foreach (var qRow in qry)
            {
                smsValue = qRow.Value.ToLower();
                smsId = qRow.Id;
            }
            
        }

        private void GetSMSAttributeValue(int id)
        {
            var qry = new AttributeValueService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.AttributeId == 2210 && row.EntityId == id);
            foreach (var qRow in qry)
            {
                smsAttributeValue = qRow.Value.ToLower();
            }
        }

        #endregion
    }
}