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

using org.rivervalley.PersonnelRequests.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.PersonnelRequests
{
    [DisplayName("Personnel Request Data Entry")]
    [Category("org_rivervalley > PersonnelRequests")]
    [Description("Data Entry for Personnel Request")]

    public partial class PersonnelRequestDataEntry : Rock.Web.UI.RockBlock
    {
        #region Fields

        DateTime today = DateTime.Now;
        DateTime nullDate = new DateTime(1900, 1, 1);
        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private string qryString;
        private int personnelRequestId;
        private int newPersonnelRequestId;
        private Person currentPerson = null;
        private PersonnelRequest currentRequest = null;
        //private int counter;
        private string emailFrom = "info@rivervalley.org";
        private string emailFromName = "HR Dept";
        private string emailMessage;
        private string emailSubject;
        
        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            currentPerson = CurrentPerson;
            
            if (!Page.IsPostBack)
            {
                ClearPanels();
                pnlDataPartOne.Visible = true;
                dpRequestDate.Text = today.ToShortDateString();

                ddRequester.Items.Add(new ListItem("Jim Garvey", "46051"));
                ddRequester.Items.Add(new ListItem("Mark Baker", "58942"));
                ddProposedSupervisor.Items.Add(new ListItem("Jim Garvey", "46051"));
                ddProposedSupervisor.Items.Add(new ListItem("Mark Baker", "58942"));


                LoadEmployeeDropDown(1);
                LoadEmployeeDropDown(4);
                LoadCampusDropDownValues();
                LoadJobTitleDropDownValues();
                LoadDepartmentDropDownValues();                                
            }
        }

        #endregion

        #region Events
        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnDataPartOne_Click(object sender, EventArgs e)
        {
            var dataContext = new RockContext();
            var service = new PersonnelRequestService(dataContext);
            currentRequest = new PersonnelRequest();
            service.Add(currentRequest);
            
            var reqCampus = Int32.Parse(ddCampus.Text);
            currentRequest.RequestingCampusId = reqCampus;

            var type = Int32.Parse(rbType.Text);
            currentRequest.RequestType = type;

            var state = Int32.Parse(rbState.Text);            
            currentRequest.EmploymentType = state;

            var status = Int32.Parse(rbStatus.Text);
            currentRequest.EmploymentStatus = status;
            
            string selectedCandidate = ppCandidate.SelectedValue.ToString();
            if (selectedCandidate != "")
            {
                int candidateId = Int32.Parse(selectedCandidate);
                Person cPerson;
                cPerson = new PersonService(new RockContext()).Get(candidateId);
                int cAliasId = cPerson.PrimaryAliasId ?? default(int);
                currentRequest.CandidatePersonAliasId = cAliasId;
                // get attending campus id
                var attendingCampus = new PersonService(new RockContext()).Get(candidateId).GetCampus();
                currentRequest.AttendingCampusId = attendingCampus.Id;
            }
            var jobTitle = Int32.Parse(ddJobTitle.Text);
            if (jobTitle > 0)
            {
                currentRequest.JobTitleValueId = jobTitle;
            }

            var department = Int32.Parse(ddDepartment.Text);
            currentRequest.DepartmentId = department;

            if (dpStartDate.SelectedDate.HasValue)
            {
                currentRequest.StartDate = dpStartDate.SelectedDate.Value;
            }
            else
            {
                currentRequest.StartDate = nullDate;
            }
            if (dpTenureDate.SelectedDate.HasValue)
            {
                currentRequest.TenureDate = dpTenureDate.SelectedDate.Value;
            }
            else
            {
                currentRequest.TenureDate = nullDate;
            }
                        
            int psPersonId = Int32.Parse(ddProposedSupervisor.Text);
            Person psPerson;
            psPerson = new PersonService(new RockContext()).Get(psPersonId);
            int psAliasId = psPerson.PrimaryAliasId ?? default(int);

            currentRequest.ProposedSupervisorPersonAliasId = psAliasId;
            currentRequest.ApproverOnePersonAliasId = psAliasId;

            int rPersonId = Int32.Parse(ddRequester.Text);
            Person rPerson;
            rPerson = new PersonService(new RockContext()).Get(rPersonId);
            int rAliasId = rPerson.PrimaryAliasId ?? default(int);
            currentRequest.RequestingPersonAliasId = rAliasId;
            currentRequest.RequestDate = dpRequestDate.SelectedDate.Value;
            currentRequest.EndDate = nullDate;
            currentRequest.RequestorSignedDate = nullDate;
            currentRequest.ApproverOneSignedDate = nullDate;
            currentRequest.ApproverTwoSignedDate = nullDate;
            currentRequest.ApproverThreeSignedDate = nullDate;
            currentRequest.SundayHours = 0;
            currentRequest.MondayHours = 0;
            currentRequest.TuesdayHours = 0;
            currentRequest.WednesdayHours = 0;
            currentRequest.ThursdayHours = 0;
            currentRequest.FridayHours = 0;
            currentRequest.SaturdayHours = 0;
            currentRequest.ConvertedToJobOffer = false;
            
            dataContext.SaveChanges();

            // Send email to HR Group
            emailMessage = "A new personnel request has been started by " + currentPerson.FullName;
            emailSubject = "New Personnel Request Initiated";
            SendEmailGroup100246(emailMessage, emailSubject);            

            // Get newly created record id
            GetNewRequest();
            personnelRequestId = newPersonnelRequestId ;                
            // reload new record
            currentRequest = new PersonnelRequestService(new RockContext()).Get(personnelRequestId);
            personnelRequestId = currentRequest.Id;                
            
            // prepare the second form data

            ClearPanels();
            pnlDataPartTwo.Visible = true;

            fuJobDescription.Visible = true;
            lUploadStatus.Visible = false;

            hfRequestIdDataPartTwo.Value = personnelRequestId.ToString();
            
            if (ppCandidate.SelectedValue == null)
            {
                tbCandidate.Visible = true;
            }
            else
            {
                int id = ppCandidate.SelectedValue ?? default(int);
                Person cPerson;
                cPerson = new PersonService(new RockContext()).Get(id);
                lCandidate.Text = cPerson.FullName;
                lCandidate.Visible = true;
            }
            var position = Int32.Parse(ddJobTitle.Text);
            if (position == 0)
            {
                tbJobTitle.Visible = true;
            }
            else
            {
                var jobTitleSelected = new DefinedValueService(new RockContext()).Get(position);
                lJobTitle.Text = jobTitleSelected.Value;
                lJobTitle.Visible = true;
            }
            if (rbState.Text == "2")
            {
                dpEndDate.Visible = true;
            }
            if (rbType.Text == "2")
            {                
                LoadEmployeeDropDown(2);
                LoadEmployeeDropDown(3);
                ddReplacement.Visible = true;
                ddCurrentSupervisor.Visible = true;
            }
            if (rbType.Text == "new")
            {
                tbJobDescription.Visible = true;
                fuJobDescription.Visible = true;                
            }            
        }

        protected void btnDataPartTwo_Click(object sender, EventArgs e)
        {
            personnelRequestId = int.Parse(hfRequestIdDataPartTwo.Value);
            hfRequestIdSchedule.Value = personnelRequestId.ToString();
            
            ClearPanels();            
            pnlSchedule.Visible = true;

            var dataContext = new RockContext();
            var service = new PersonnelRequestService(dataContext);
            currentRequest = service.Get(personnelRequestId);
            if(tbCandidate.Text != "")
            {
                currentRequest.CandidateName = tbCandidate.Text;
            }
            if(tbJobTitle.Text != "")
            {
                currentRequest.JobTitleName = tbJobTitle.Text;
            }
            if (tbHours.Text != "")
            {
                decimal hours = 0;
                decimal.TryParse(tbHours.Text.Trim(), out hours);
                currentRequest.Hours = hours;
            }
            if(tbSalaryRange.Text != "")
            {
                currentRequest.SalaryRange = tbSalaryRange.Text;
            }
            if(tbSpecialNotes.Text != "")
            {
                
            }
            if (dpEndDate.SelectedDate.HasValue)
            {
                DateTime endDate = new DateTime(1900, 1, 1);
                endDate = DateTime.Parse(dpEndDate.Text);
                currentRequest.EndDate = endDate;
            }
            if (tbJobDescription.Text != "")
            {
                currentRequest.Responsibilities = tbJobDescription.Text;
            }

            if (ddReplacement.Text != "")
            {
                var replacement = Int32.Parse(ddReplacement.Text);
                if (replacement > 0)
                {
                    // PersonAliasId is used
                    Person rfPerson;
                    rfPerson = new PersonService(new RockContext()).Get(replacement);
                    int rfAliasId = rfPerson.PrimaryAliasId ?? default(int);
                    currentRequest.ReplacementForPersonAliasId = rfAliasId;
                }
            }

            if(ddCurrentSupervisor.Text != "")
            {
                var currentSupervisor = Int32.Parse(ddCurrentSupervisor.Text);
                if (currentSupervisor > 0)
                {
                    // PersonAliasId is used
                    Person csPerson;
                    csPerson = new PersonService(new RockContext()).Get(currentSupervisor);
                    int csAliasId = csPerson.PrimaryAliasId ?? default(int);
                    
                    currentRequest.CurrentSupervisorPersonAliasId = csAliasId;
                }
            }
            currentRequest.SpecialNotes = tbSpecialNotes.Text;
            currentRequest.RequestVersion = 1;
            currentRequest.ApprovalStatus = 1;
            
            dataContext.SaveChanges();
        }

        protected void btnSchedule_Click(object sender, EventArgs e)
        {
            personnelRequestId = int.Parse(hfRequestIdSchedule.Value);
            hfRequestIdApprovalRQ.Value = personnelRequestId.ToString();

            ClearPanels();
            pnlReview.Visible = true;
            pnlApprovalRQ.Visible = true;

            var dataContext = new RockContext();
            var service = new PersonnelRequestService(dataContext);
            currentRequest = service.Get(personnelRequestId);            

            if (tbSundayHours.Text != "")
            {
                decimal sunHours = 0;
                decimal.TryParse(tbSundayHours.Text.Trim(), out sunHours);
                currentRequest.SundayHours = sunHours;
            }
            if (tbMondayHours.Text != "")
            {
                decimal monHours = 0;
                decimal.TryParse(tbMondayHours.Text.Trim(), out monHours);
                currentRequest.MondayHours = monHours;
            }
            if (tbTuesdayHours.Text != "")
            {
                decimal tuesHours = 0;
                decimal.TryParse(tbTuesdayHours.Text.Trim(), out tuesHours);
                currentRequest.TuesdayHours = tuesHours;
            }

            if (tbWednesdayHours.Text != "")
            {
                decimal wedsHours = 0;
                decimal.TryParse(tbWednesdayHours.Text.Trim(), out wedsHours);
                currentRequest.WednesdayHours = wedsHours;
            }
            if (tbThursdayHours.Text != "")
            {
                decimal thurHours = 0;
                decimal.TryParse(tbThursdayHours.Text.Trim(), out thurHours);
                currentRequest.ThursdayHours = thurHours;
            }
            if (tbFridayHours.Text != "")
            {
                decimal friHours = 0;
                decimal.TryParse(tbFridayHours.Text.Trim(), out friHours);
                currentRequest.FridayHours = friHours;
            }
            if (tbSaturdayHours.Text != "")
            {
                decimal satHours = 0;
                decimal.TryParse(tbSaturdayHours.Text.Trim(), out satHours);
                currentRequest.SaturdayHours = satHours;
            }
            
            dataContext.SaveChanges();

            // Rebuild currentRequest to have Schedule data just saved
            currentRequest = new PersonnelRequestService(new RockContext()).Get(personnelRequestId);            
            BuildReviewPanel();
        }

        protected void btnApprovalRQ_Click(object sender, EventArgs e)
        {
            personnelRequestId = int.Parse(hfRequestIdApprovalRQ.Value);
            
            ClearPanels();
            
            var dataContext = new RockContext();
            var service = new PersonnelRequestService(dataContext);
            currentRequest = service.Get(personnelRequestId);

            currentRequest.RequestorSignature = tbApprovalRQ.Text;
            currentRequest.RequestorSignedDate = today;
            currentRequest.ApprovalStatus = 2;

            dataContext.SaveChanges();

            // refresh current request for email to direct supervisor
            currentRequest = new PersonnelRequestService(new RockContext()).Get(personnelRequestId);

            var rockContext = new RockContext();
            var a1PersonAliasService = new PersonAliasService(rockContext);
            var a1PersonAlias = a1PersonAliasService.Get(currentRequest.ApproverOnePersonAliasId);
            string emailTo = a1PersonAlias.Person.Email;

            // Send email to HR Group
            emailMessage = "Personnel Request " + personnelRequestId + " has been signed by the requester";
            emailSubject = "Personnel Request signed by Requester";
            //SendEmailGroup100246(emailMessage, emailSubject);
            emailTo = "mark.baker@rivervalley.org";
            // send email to direct supervisor           
            //SendEmail(emailSubject, emailMessage, emailTo);

            NavigateToParentPage();
        }

        protected void fuJobDescription_UpLoad(object sender, EventArgs e)
        {
            string fileName = ""; ;
            personnelRequestId = int.Parse(hfRequestIdDataPartTwo.Value);
            lDebugString.Text = "File Path: " + fuJobDescription.UploadedContentFilePath;
            int counter = 0;
            string path = fuJobDescription.UploadedContentFilePath;

            string[] parts = path.Split('/');
            foreach (string part in parts)
            {
                counter++;
                if (counter == 6)
                {
                    fileName = part;
                }
            }            

            var dataContext = new RockContext();
            var service = new PersonnelRequestService(dataContext);
            currentRequest = service.Get(personnelRequestId);
            currentRequest.JobTitleFile = fileName;
            dataContext.SaveChanges();

            fuJobDescription.Visible = false;
            lUploadStatus.Visible = true;
            lUploadStatus.Text = "The file: " + fileName + " has been uploaded ";
        }

        #endregion

        #region Methods
        protected void SendEmailGroup100246(string emailMessage, string subject)
        {
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == 100246);

            foreach (var qRow in qry)
            {
                string emailTo;
                Person recipient;
                recipient = new PersonService(new RockContext()).Get(qRow.PersonId);
                emailTo = recipient.Email;
                SendEmail(subject,emailMessage,emailTo);                
            }
        }

        private void SendEmail(string subject, string emailMessage, string recipient)
        {
            var newEmail = new RockEmailMessage();
            newEmail.Subject = subject;
            newEmail.FromEmail = emailFrom;
            newEmail.FromName = emailFromName;
            newEmail.Message = emailMessage;
            newEmail.SetRecipients(recipient);
            newEmail.Send();
        }

        private void LoadCampusDropDownValues()
        {
            var cQry = new CampusService(new RockContext()).Queryable().AsNoTracking();
            cQry = cQry.Where(row => row.Id != 5 && row.Id != 7 && row.Id != 8 && row.Id != 10);
            var cQrySorted = cQry.OrderBy(a => a.Name);
            foreach (var qRow in cQrySorted)
            {
                ddCampus.Items.Add(new ListItem(qRow.Name, qRow.Id.ToString()));
            }
        }

        private void LoadEmployeeDropDown(int type)
        {
            bool isFound = false;
            //qryString = "SELECT ev.PersonId, p.FirstName + ' ' + p.LastName AS Name FROM _org_rivervalley_vGroupEmployeeActive ev INNER JOIN Person p ON p.Id = ev.PersonId ORDER BY p.LastName, p.FirstName";
            switch (type)
            {
                case 1:
                    qryString = "SELECT gm.personid, p.NickName + ' ' + p.LastName AS Name FROM groupmember gm JOIN person p ON p.id=gm.personid WHERE groupid=92375 ORDER BY p.lastname, p.FirstName";
                    break;
                case 2:
                    qryString = "SELECT gm.personid, p.NickName + ' ' + p.LastName AS Name FROM groupmember gm JOIN person p ON p.id=gm.personid WHERE groupid=92375 ORDER BY p.lastname, p.FirstName";
                    break;
                case 3:
                    qryString = "SELECT p.Id, p.NickName + ' ' + p.LastName AS Name FROM AttributeValue av, Person p WHERE p.Id = av.EntityId AND av.AttributeId = 3281 AND av.Value = 'True' ORDER BY p.LastName, p.FirstName";
                    break;
                case 4:
                    qryString = "SELECT gm.personid, p.NickName + ' ' + p.LastName AS Name FROM groupmember gm JOIN person p ON p.id=gm.personid WHERE groupid=98327 ORDER BY p.lastname, p.FirstName";
                    break;                
            }
            var rockContext = new RockContext();
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                switch (type)
                {
                    case 1:                        
                        ddRequester.Items.Add(new ListItem(rdr.GetString(1), rdr.GetInt32(0).ToString()));
                        if (currentPerson.Id == rdr.GetInt32(0))
                        { isFound = true; }                        
                        break;
                    case 2:
                        ddReplacement.Items.Add(new ListItem(rdr.GetString(1), rdr.GetInt32(0).ToString()));
                        break;
                    case 3:
                        ddCurrentSupervisor.Items.Add(new ListItem(rdr.GetString(1), rdr.GetInt32(0).ToString()));
                        break;
                    case 4:
                        ddProposedSupervisor.Items.Add(new ListItem(rdr.GetString(1), rdr.GetInt32(0).ToString()));
                        break;                    
                }
                if (isFound)
                {
                    ddRequester.SelectedValue = currentPerson.Id.ToString();
                }
            }
            conn.Close();   
        }

        private void LoadJobTitleDropDownValues()
        {
            var pQry = new DefinedValueService(new RockContext()).Queryable().AsNoTracking();
            pQry = pQry.Where(row => row.DefinedTypeId == 139);
            var pQrySorted = pQry.OrderBy(a => a.Value);
            ddJobTitle.Items.Add(new ListItem("", "0"));
            foreach (var qRow in pQrySorted)
            {
                ddJobTitle.Items.Add(new ListItem(qRow.Value, qRow.Id.ToString()));
            }
        }

        private void LoadDepartmentDropDownValues()
        {
            var dQry = new DefinedValueService(new RockContext()).Queryable().AsNoTracking();
            dQry = dQry.Where(row => row.DefinedTypeId == 127);
            var dQrySorted = dQry.OrderBy(a => a.Value);
            foreach (var qRow in dQrySorted)
            {
                ddDepartment.Items.Add(new ListItem(qRow.Value, qRow.Id.ToString()));
            }
        }

        private void GetNewRequest()
        {
            int counter = 0;
            var qry = new PersonnelRequestService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.Id > 0);
            var qrySorted = qry.OrderByDescending(a => a.Id);
            foreach (var qRow in qrySorted)
            {
                counter++;
                if (counter == 1)
                {
                    newPersonnelRequestId = qRow.Id;
                }
            }
        }

        private void ClearPanels()
        {
            pnlError.Visible = false;
            pnlDataPartOne.Visible = false;
            pnlDataPartTwo.Visible = false;
            pnlSchedule.Visible = false;
            pnlReview.Visible = false;
            pnlApprovalRQ.Visible = false;
        }

        private void BuildReviewPanel()
        {
            DateTime dt = new DateTime(1970, 1, 1);

            var rockContext = new RockContext();
            var rPersonAliasService = new PersonAliasService(rockContext);
            var rPersonAlias = rPersonAliasService.Get(currentRequest.RequestingPersonAliasId);
            WriteOutputStringFourCells("Requester", rPersonAlias.Person.FullName, "Request Date", currentRequest.RequestDate.ToShortDateString());

            string jTitle = "";
            if (currentRequest.JobTitleValueId > 0)
            {
                var jtQry = new DefinedValueService(new RockContext()).Queryable();
                jtQry = jtQry.Where(row => row.Id == currentRequest.JobTitleValueId);
                foreach (var qRow in jtQry)
                {
                    jTitle = qRow.Value; ;
                }
            }            
            WriteOutputStringFourCells("Job Title", jTitle, "Job Title (Manual)", currentRequest.JobTitleName);

            string campusName = "";
            var cQry = new CampusService(new RockContext()).Queryable();
            cQry = cQry.Where(row => row.Id == currentRequest.RequestingCampusId);
            foreach (var qRow in cQry)
            {
                campusName = qRow.Name;
            }
                  
            var psPersonAliasService = new PersonAliasService(rockContext);
            var psPersonAlias = psPersonAliasService.Get(currentRequest.ProposedSupervisorPersonAliasId);

            WriteOutputStringFourCells("Campus", campusName, "Proposed Supervisor", psPersonAlias.Person.FullName);

            string department = "";
            if (currentRequest.DepartmentId > 0)
            {
                var dQry = new DefinedValueService(new RockContext()).Queryable();
                dQry = dQry.Where(row => row.Id == currentRequest.DepartmentId);
                foreach (var qRow in dQry)
                {
                    department = qRow.Value; ;
                }
            }
            string startDate = "";            
            if (currentRequest.StartDate > dt.Date)
            {
                startDate = currentRequest.StartDate.ToShortDateString();
            }
            WriteOutputStringFourCells("Department", department, "Start Date", startDate);

            string candidate = "";
            if (currentRequest.CandidatePersonAliasId > 0)
            {
                var cPersonAliasService = new PersonAliasService(rockContext);
                var cPersonAlias = cPersonAliasService.Get(currentRequest.CandidatePersonAliasId);                
                candidate = cPersonAlias.Person.FullName;
            }
            WriteOutputStringFourCells("Candidate", candidate, "Candidate (Manual)", currentRequest.CandidateName);
                        
            //Person cSupervisor;
            string replacement = "";
            string cSupervisor = "";
            if (currentRequest.RequestType == 2)
            {
                var rfPersonAliasService = new PersonAliasService(rockContext);
                var rfPersonAlias = rfPersonAliasService.Get(currentRequest.ReplacementForPersonAliasId);
                replacement = rfPersonAlias.Person.FullName;

                var csPersonAliasService = new PersonAliasService(rockContext);
                var csPersonAlias = csPersonAliasService.Get(currentRequest.CurrentSupervisorPersonAliasId);

                cSupervisor = csPersonAlias.Person.FullName;
            }
            WriteOutputStringFourCells("Replacement For", replacement, "Current Supervisor", cSupervisor);

            string eStatus;
            string eType;            
                        
            if (currentRequest.EmploymentStatus == 1)
            {
                eStatus = "Full Time";
            }
            else
            {
                eStatus = "Part Time";
            }
            if (currentRequest.RequestType == 1)
            {
                eType = "New Hire";
            }
            else
            {
                eType = "Replacement";
            }
            WriteOutputStringFourCells("Type", eType, "Status", eStatus);

            string eState;
            if (currentRequest.EmploymentType == 1)
            {
                eState = "Permanent";
            }
            else
            {
                eState = "Temporary";
            }

            string endDate = "";
            if (currentRequest.EndDate > dt.Date)
            {
                endDate = currentRequest.EndDate.ToShortDateString();
            }

            WriteOutputStringFourCells("State", eState ,"End Date", endDate);

            WriteOutputStringFourCells("Hours", currentRequest.Hours.ToString(), "Salary Range", currentRequest.SalaryRange);

            string tenureDate = "";
            if (currentRequest.TenureDate > dt.Date)
            {
                tenureDate = currentRequest.TenureDate.ToShortDateString();
            }
            WriteOutputStringTwoCells("Tenure Date", tenureDate);

            string hoursDisplay;
            hoursDisplay = "<b>SUN - </b>" + currentRequest.SundayHours + " <b>| MON - </b>" + currentRequest.MondayHours + " <b>| TUES - </b>" + currentRequest.TuesdayHours + " <b>| WED - </b>" + currentRequest.WednesdayHours + " <b>| THUR - </b>" + currentRequest.ThursdayHours + " <b>| FRI - </b>" + currentRequest.FridayHours + " <b>| SAT -</b> " + currentRequest.SaturdayHours;
            WriteOutputStringTwoCells("Hours", hoursDisplay);

            WriteOutputStringTwoCells("Main Responsibilities", currentRequest.Responsibilities);
            
            WriteOutputStringTwoCells("Special Notes", currentRequest.SpecialNotes);
        }

        private void WriteOutputStringFourCells(string cellOne, string cellTwo, string cellThree, string cellFour)
        {
            lReviewDisplayString.Text += "<div class=\"row\">";
            lReviewDisplayString.Text += "<div class=\"col-md-1\">&nbsp;</div>";
            lReviewDisplayString.Text += "<div class=\"col-md-2\"><b>" + cellOne + "</b></div>";
            lReviewDisplayString.Text += "<div class=\"col-md-2\">" + cellTwo + "</div>";
            lReviewDisplayString.Text += "<div class=\"col-md-2\"><b>" + cellThree + "</b></div>";
            lReviewDisplayString.Text += "<div class=\"col-md-2\">" + cellFour + "</div>";
            lReviewDisplayString.Text += "</div>";            
        }

        private void WriteOutputStringTwoCells(string cellOne, string cellTwo)
        {
            lReviewDisplayString.Text += "<div class=\"row\">";
            lReviewDisplayString.Text += "<div class=\"col-md-1\">&nbsp;</div>";
            lReviewDisplayString.Text += "<div class=\"col-md-2\"><b>" + cellOne + "</b></div>";
            lReviewDisplayString.Text += "<div class=\"col-md-7\">" + cellTwo + "</div>";
            
            lReviewDisplayString.Text += "</div>";
        }

        #endregion
    }
}