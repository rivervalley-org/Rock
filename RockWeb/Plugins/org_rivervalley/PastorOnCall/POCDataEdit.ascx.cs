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
    [DisplayName("Pastor On Call Data Edit")]
    [Category("org_rivervalley > PastorOnCall")]
    [Description("Pastor On Call Data Edit and Delete")]


    public partial class POCDataEdit : Rock.Web.UI.RockBlock
    {
        #region Fields

        //private int groupId;
        private int campusId;
        private int personId;
        private DateTime scheduleDate;
        private DateTime parameterDTValue;
        private DateTime today = DateTime.Now;
        private bool dateNull;
        private bool formError;
        private PastorOnCallSchedule scheduledItem = null;
        private bool recordFound;
        private string smsValue;
        private string type;
        private int editId;
        private string campusName;
        private DateTime existingScheduledDate;
        private int existingPastor;
        //private string editChanges;
        private int newAlias;
        private string newSMS;
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
                pnlPastorSelection.Visible = false;
                pnlError.Visible = false;
                pnlComplete.Visible = false;
                pnlDelete.Visible = false;

                var rockContext = new RockContext();
                type = "";
                GetId();
                if (editId > 0)
                {
                    if (type == "edit")
                    {
                        pnlPastorSelection.Visible = true;
                        hfEditId.Value = editId.ToString();                        
                        LoadCampusInfo(scheduledItem.GroupId);
                        LoadPastorDropDownValues(scheduledItem.GroupId);
                        ddPastors.Text = scheduledItem.PersonId.ToString();
                        dpScheduleDate.Text = scheduledItem.DateScheduled.ToShortDateString();
                    }
                    if (type == "delete")
                    {
                        pnlDelete.Visible = true;
                        hfDeleteId.Value = editId.ToString();
                        LoadCampusInfo(scheduledItem.GroupId);
                        Person pPerson;
                        pPerson = new PersonService(rockContext).Get(scheduledItem.PersonId);
                        lDeleteString.Text = "Are you sure you want to delete scheduled Pastor On Call (" + pPerson.FullName + ") for " + campusName + " dated " + scheduledItem.DateScheduled.ToShortDateString() + " ?";
                    }
                }
                else
                {
                    pnlPastorSelection.Visible = false;
                    pnlError.Visible = true;
                    pnlComplete.Visible = false;
                    lErrorString.Text = "An error occurred in processing your request.";
                }
            }           
        }

        #endregion

        #region Events

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnDelete_Click(object sender, EventArgs e)
        {
            pnlPastorSelection.Visible = false;
            pnlError.Visible = false;
            pnlComplete.Visible = true;
            pnlDelete.Visible = false;

            editId = int.Parse(hfDeleteId.Value);
            var dataContext = new RockContext();
            var service = new PastorOnCallScheduleService(dataContext);
            scheduledItem = service.Get(editId);
            service.Delete(scheduledItem);
            dataContext.SaveChanges();
        }

        protected void btnPastorSave_Click(object sender, EventArgs e)
        {
            pnlPastorSelection.Visible = false;
            pnlError.Visible = false;
            pnlComplete.Visible = true;
            pnlDelete.Visible = false;
            lErrorString.Text = "";
            editId = int.Parse(hfEditId.Value);
            campusId = int.Parse(hfCampusId.Value);
            personId = int.Parse(ddPastors.Text);
                       
            formError = false;
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
                var dataContext = new RockContext();
                var service = new PastorOnCallScheduleService(dataContext);
                scheduledItem = service.Get(editId);
                existingScheduledDate = scheduledItem.DateScheduled;
                existingPastor = scheduledItem.PersonId;
                
                if (scheduleDate != existingScheduledDate && personId != existingPastor)
                {
                    // both values changed
                    formError = false;
                    ProcessNewPastor();
                    if (formError == false)
                    {
                        CheckPOCSchedule(campusId, scheduleDate);
                        if (recordFound == true)
                        {
                            pnlPastorSelection.Visible = true;
                            pnlError.Visible = true;
                            pnlComplete.Visible = false;
                            lErrorString.Text += "<br>The date/campus you selected is already scheduled.";
                        }
                        else
                        {
                            // update valid
                            scheduledItem.PersonId = personId;
                            scheduledItem.PersonAliasId = newAlias;
                            scheduledItem.SMSNumber = newSMS;
                            scheduledItem.DateScheduled = scheduleDate;

                            dataContext.SaveChanges();
                        }
                    }
                }
                if (scheduleDate != existingScheduledDate && personId == existingPastor)
                {
                    // only date value changed
                    CheckPOCSchedule(campusId, scheduleDate);
                    if (recordFound == true)
                    {
                        pnlPastorSelection.Visible = true;
                        pnlError.Visible = true;
                        pnlComplete.Visible = false;
                        lErrorString.Text += "<br>The date/campus you selected is already scheduled.";
                    }
                    else
                    {
                        // update valid
                        scheduledItem.DateScheduled = scheduleDate;

                        dataContext.SaveChanges();
                    }
                }
                if (scheduleDate == existingScheduledDate && personId != existingPastor)
                {
                    // only pastor value changed
                    formError = false;
                    ProcessNewPastor();
                    if (formError == false)
                    {
                        // update valid
                        scheduledItem.PersonId = personId;
                        scheduledItem.PersonAliasId = newAlias;
                        scheduledItem.SMSNumber = newSMS;
                        dataContext.SaveChanges();
                    }
                }
            }
        }

        #endregion

        #region Methods

        protected void GetId()
        {
            int? id = PageParameter("id").AsIntegerOrNull();
            type = PageParameter("type");

            if (id.HasValue)
            {
                if (id.Value == 0)
                {
                    editId = 0;
                }
                else
                {
                    scheduledItem = scheduledItem ?? new PastorOnCallScheduleService(new RockContext()).Get(id.Value);
                    if (scheduledItem != null)
                    {
                        editId = id ?? default(int);
                    }
                    else
                    {
                        editId = -1;
                    }
                }
            }
            else
            {
                editId = -1;
            }
        }

        private void LoadPastorDropDownValues(int groupId)
        {
            var rockContext = new RockContext();
            var qry = new GroupMemberService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.GroupId == groupId);            
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
                campusName = qRow.Name;
                hfCampusId.Value = qRow.CampusId.ToString();
            }
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
            var qry = new DefinedValueService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.Guid == smsGuid);
            foreach (var qRow in qry)
            {
                smsValue = qRow.Value.ToLower();
                smsId = qRow.Id;
            }
        }

        private void ProcessNewPastor()
        {
            var dataContext = new RockContext();

            Person sPerson;
            string sms;
            int alias;
            sPerson = new PersonService(dataContext).Get(personId);
            alias = sPerson.PrimaryAliasId ?? default(int);

            sPerson.LoadAttributes(dataContext);
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
            smsString = smsString + smsAttributeValue;
            //smsString = smsString + "@txt." + smsValue + ".net";  This was the original way to do it

            if (smsValue == "")
            {
                formError = true;
                pnlPastorSelection.Visible = true;
                pnlError.Visible = true;
                pnlComplete.Visible = false;
                lErrorString.Text += "<br>The selected pastor (" + sPerson.FullName + ") must have a wireless service provider entry in their record before we can process this request.";
            }
            else
            {                
                newAlias = alias;
                newSMS = smsString;
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