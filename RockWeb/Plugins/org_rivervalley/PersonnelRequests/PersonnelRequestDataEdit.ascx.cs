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
using System.IO;

using org.rivervalley.PersonnelRequests.Model;
using org.rivervalley.JobOffers.Model;

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
    [DisplayName("Personnel Request Data Edit")]
    [Category("org_rivervalley > PersonnelRequests")]
    [Description("Data Edit for Personnel Request")]

    public partial class PersonnelRequestDataEdit : Rock.Web.UI.RockBlock
    {
        #region Fields

        DateTime today = DateTime.Now;
        DateTime nullDate = new DateTime(1900, 1, 1);
        DateTime dt = new DateTime(1970, 1, 1);
        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private string qryString;
        private int personnelRequestId;
        private int newPersonnelRequestId;
        private Person currentPerson = null;
        private PersonnelRequest currentRequest = null;
        private JobOfferDetail currentOffer = null;
        private int credentials = 0;
        private string allocStatus;
        //private int counter;
        private string link = "~/PersonnelRequestReport";
        private bool isREQ = false;
        private bool isDS = false;
        private bool isDLS = false;
        private bool isSLT = false;
        private bool isHR = false;
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
            var rockContext = new RockContext();
            //currentPerson = new PersonService(rockContext).Get(28);

            if (!Page.IsPostBack)
            {
                ClearPanels();
                GetGuidId();
                CheckCredentials();
                if (credentials == -1)
                {
                    pnlError.Visible = true;
                    lErrorString.Text = "This is a restricted page, contact the HR administrator for more information";
                }
                else
                {
                    if (personnelRequestId > 0)
                    {
                        hfPersonnelRequestId.Value = personnelRequestId.ToString();
                        pnlReview.Visible = true;
                        if (isHR)
                        {
                            btnReviewAllocations.Visible = true;
                            btnReviewHRTasks.Visible = true;
                        }
                        BuildReviewPanel();
                    }
                    else
                    {
                        pnlError.Visible = true;
                        lErrorString.Text = "An error occurred in processing your request.";
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

        protected void btnReviewEdit_Click(object sender, EventArgs e)
        {
            OpenPanel();
            pnlDataEdit.Visible = true;

            var dataContext = new RockContext();
            currentRequest = new PersonnelRequestService(dataContext).Get(personnelRequestId);
            ddReplacement.Items.Add(new ListItem("", "0"));
            LoadEmployeeDropDown(2);
            ddCurrentSupervisor.Items.Add(new ListItem("", "0"));
            LoadEmployeeDropDown(3);
            LoadEmployeeDropDown(4);
            LoadJobTitleDropDownValues();
            LoadDepartmentDropDownValues();
            LoadEditData();

            if (currentRequest.JobTitleFile != null && currentRequest.JobTitleFile != "deleted")
            {
                fuJobDescription.Visible = false;
                lUploadStatus.Visible = true;
                lUploadStatus.Text = "Uploaded File: " + currentRequest.JobTitleFile;
                btnFileDelete.Visible = true;
            }
            else
            {
                fuJobDescription.Visible = true;
                lUploadStatus.Visible = false;
                btnFileDelete.Visible = false;
            }
            

        }

        protected void btnDataEdit_Click(object sender, EventArgs e)
        {
            OpenPanel();

            var dataContext = new RockContext();
            var service = new PersonnelRequestService(dataContext);
            currentRequest = service.Get(personnelRequestId);
                        
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

            var proposedSupervisor = Int32.Parse(ddProposedSupervisor.Text);            
            Person psPerson;
            psPerson = new PersonService(new RockContext()).Get(proposedSupervisor);
            int psAliasId = psPerson.PrimaryAliasId ?? default(int);
            
            currentRequest.ProposedSupervisorPersonAliasId = psAliasId;
            currentRequest.ApproverOnePersonAliasId = psAliasId;

            if (tbCandidate.Text != "")
            {
                currentRequest.CandidateName = tbCandidate.Text;
            }
            if (tbJobTitle.Text != "")
            {
                currentRequest.JobTitleName = tbJobTitle.Text;
            }
            if (tbHours.Text != "")
            {
                decimal hours = 0;
                decimal.TryParse(tbHours.Text.Trim(), out hours);
                currentRequest.Hours = hours;
            }
            if (tbSalaryRange.Text != "")
            {
                currentRequest.SalaryRange = tbSalaryRange.Text;
            }
            if (tbSpecialNotes.Text != "")
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
            if (ddCurrentSupervisor.Text != "")
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

            currentRequest.ApprovalStatus = 1;
            
            dataContext.SaveChanges();

            // reset and rebuild the data to reflect new changes            
            RebuildReviewPanel(); 
        }

        protected void btnReviewAllocations_Click(object sender, EventArgs e)
        {
            OpenPanel();            
            pnlAllocations.Visible = true;
            ddCampusAllocOne.Items.Add(new ListItem("", "0"));
            ddCampusAllocTwo.Items.Add(new ListItem("", "0"));
            ddCampusAllocThree.Items.Add(new ListItem("", "0"));
            LoadCampusDropDownValues();

            string allocStatus = "new";
            int counter = 0;
            var aQry = new PersonnelRequestAllocationService(new RockContext()).Queryable().AsNoTracking();
            aQry = aQry.Where(row => row.PersonnelRequestId == personnelRequestId);            

            foreach (var qRow in aQry)
            {
                counter++;
                allocStatus = "exists";
                if(counter == 1)
                {
                    ddCampusAllocOne.Text = qRow.CampusId.ToString();
                    tbAllocOneValue.Text = qRow.Allocation.ToString();                    
                }
                if (counter == 2)
                {
                    ddCampusAllocTwo.Text = qRow.CampusId.ToString();
                    tbAllocTwoValue.Text = qRow.Allocation.ToString();                    
                }
                if (counter == 3)
                {
                    ddCampusAllocThree.Text = qRow.CampusId.ToString();
                    tbAllocThreeValue.Text = qRow.Allocation.ToString();
                }
            }
            
            hfAllocationsStatus.Value = allocStatus;
        }

        protected void btnAllocations_Click(object sender, EventArgs e)
        {
            OpenPanel();
            allocStatus = hfAllocationsStatus.Value;
            
            bool allocError = false;
            nbAllocationsWarning.Text = "";                        
            decimal aOne = 0;
            decimal aTwo = 0;
            decimal aThree = 0;
            var campusOne = 0;
            var campusTwo = 0;
            var campusThree = 0;

            var dataContext = new RockContext();
                        
            campusOne = Int32.Parse(ddCampusAllocOne.Text);
            campusTwo = Int32.Parse(ddCampusAllocTwo.Text);
            campusThree  = Int32.Parse(ddCampusAllocThree.Text);
            
            if (tbAllocOneValue.Text != "")
            {
                decimal.TryParse(tbAllocOneValue.Text.Trim(), out aOne);
            }
            if (tbAllocTwoValue.Text != "")
            {
                decimal.TryParse(tbAllocTwoValue.Text.Trim(), out aTwo);
            }            
            if(tbAllocThreeValue.Text != "")
            {
                decimal.TryParse(tbAllocThreeValue.Text.Trim(), out aThree);
            }
            
            decimal totalAllocations = aOne + aTwo + aThree;

            // Error checking the form data

            if (totalAllocations != 100)
            {
                allocError = true;
                nbAllocationsWarning.Text += "<br>Allocations do not equal 100%";                                
            }
            if (campusOne == 0 && aOne != 0) 
            {
                allocError = true;
                nbAllocationsWarning.Text = "Check First Campus/Allocation entries";
            }
            if (campusOne > 0 && aOne == 0)
            {
                allocError = true;
                nbAllocationsWarning.Text = "Check First Campus/Allocation entries";
            }
            if (campusTwo == 0 && aTwo != 0)
            {
                allocError = true;
                nbAllocationsWarning.Text = "Check Second Campus/Allocation entries";
            }
            if (campusTwo > 0 && aTwo == 0)
            {
                allocError = true;
                nbAllocationsWarning.Text = "Check Second Campus/Allocation entries";
            }
            if (campusThree == 0 && aThree != 0)
            {
                allocError = true;
                nbAllocationsWarning.Text = "Check Third Campus/Allocation entries";
            }
            if (campusThree > 0 && aThree == 0)
            {
                allocError = true;
                nbAllocationsWarning.Text = "Check Third Campus/Allocation entries";
            }
            if (campusOne == campusTwo || campusOne == campusThree)
            {
                allocError = true;
                nbAllocationsWarning.Text = "Campus may only be allocated once";
            }
            if (campusTwo == campusThree && campusTwo != 0)
            {
                allocError = true;
                nbAllocationsWarning.Text = "Campus may only be allocated once";
            }
            if (allocError)
            {                
                nbAllocationsWarning.Visible = true;
                pnlAllocations.Visible = true;
            }
            else
            {
                if (allocStatus == "exists")
                {
                    // Since there are many variations of changes that could be made, the existing allocations will be deleted first, then the new values added as new allocations

                    var aQry = new PersonnelRequestAllocationService(new RockContext()).Queryable().AsNoTracking();
                    aQry = aQry.Where(row => row.PersonnelRequestId == personnelRequestId);

                    foreach (var qRow in aQry)
                    {
                        DeleteAllocation(qRow.Id);
                    }
                }
                if (campusOne > 0)
                {
                    PersonnelRequestAllocation firstAllocation;
                    var allocOne = new PersonnelRequestAllocationService(dataContext);
                    firstAllocation = new PersonnelRequestAllocation();
                    allocOne.Add(firstAllocation);

                    firstAllocation.PersonnelRequestId = personnelRequestId;
                    firstAllocation.CampusId = campusOne;
                    firstAllocation.Allocation = aOne;

                    dataContext.SaveChanges();
                }
                if (campusTwo > 0)
                {
                    PersonnelRequestAllocation secondAllocation;
                    var allocTwo = new PersonnelRequestAllocationService(dataContext);
                    secondAllocation = new PersonnelRequestAllocation();
                    allocTwo.Add(secondAllocation);

                    secondAllocation.PersonnelRequestId = personnelRequestId;
                    secondAllocation.CampusId = campusTwo;
                    secondAllocation.Allocation = aTwo;

                    dataContext.SaveChanges();
                }
                if (campusThree > 0)
                {
                    PersonnelRequestAllocation thirdAllocation;
                    var allocThree = new PersonnelRequestAllocationService(dataContext);
                    thirdAllocation = new PersonnelRequestAllocation();
                    allocThree.Add(thirdAllocation);

                    thirdAllocation.PersonnelRequestId = personnelRequestId;
                    thirdAllocation.CampusId = campusThree;
                    thirdAllocation.Allocation = aThree;

                    dataContext.SaveChanges();
                }

                // reset and rebuild the data to reflect new changes                
                RebuildReviewPanel();
            }            
        }

        protected void btnReviewREQApproval_Click(object sender, EventArgs e)
        {
            OpenPanel();
            pnlApprovalRQ.Visible = true;
            GetJobTitle(1);
        }

        protected void btnReviewDSApproval_Click(object sender, EventArgs e)
        {
            OpenPanel();
            pnlApprovalDS.Visible = true;
            GetJobTitle(2);
        }

        protected void btnReviewDLSApproval_Click(object sender, EventArgs e)
        {
            OpenPanel();
            pnlApprovalDLS.Visible = true;
            GetJobTitle(3);
        }

        protected void btnReviewSLTApproval_Click(object sender, EventArgs e)
        {
            OpenPanel();
            pnlApprovalSLT.Visible = true;
            GetJobTitle(4);
        }

        protected void btnReviewHRTasks_Click(object sender, EventArgs e)
        {
            OpenPanel();
            pnlHRTasks.Visible = true;
            var dataContext = new RockContext();
            var service = new PersonnelRequestService(dataContext);
            currentRequest = service.Get(personnelRequestId);
            if (currentRequest.ApproverTwoSignature == null || currentRequest.ApproverTwoSignature == "voided")
            {
                btnHRAssignDLS.Visible = true; // This would mean the DLS has either not signed off or the project was sent back and approvals were cleared
            }
            if (currentRequest.ApproverThreeSignature == null || currentRequest.ApproverThreeSignature == "voided")
            {
                btnHRAssignSLT.Visible = true; // This would mean the DLS has either not signed off or the project was sent back and approvals were cleared
            }
            GetJobTitle(5);
        }
        protected void btnApprovalRQ_Click(object sender, EventArgs e)
        {
            OpenPanel();

            var dataContext = new RockContext();
            var service = new PersonnelRequestService(dataContext);
            currentRequest = service.Get(personnelRequestId);

            currentRequest.RequestorSignature = tbApprovalRQ.Text;
            currentRequest.RequestorSignedDate = today;
            currentRequest.ApprovalStatus = 2;

            dataContext.SaveChanges();

            // reset and rebuild the data to reflect new changes                
            RebuildReviewPanel();

            // Send email to HR Group
            emailMessage = "Personnel Request " + personnelRequestId + " has been signed by the requester";
            emailSubject = "Personnel Request signed by Requester";
            SendEmailGroup100246(emailMessage, emailSubject);

            // send email to direct supervisor      
            var rockContext = new RockContext();
            var a1PersonAliasService = new PersonAliasService(rockContext);
            var a1PersonAlias = a1PersonAliasService.Get(currentRequest.ApproverOnePersonAliasId);
            string emailTo = a1PersonAlias.Person.Email;
            //SendEmail(emailSubject, emailMessage, emailTo);
        }

        protected void btnApprovalDS_Click(object sender, EventArgs e)
        {
            OpenPanel();

            var dataContext = new RockContext();
            var service = new PersonnelRequestService(dataContext);
            currentRequest = service.Get(personnelRequestId);

            currentRequest.ApproverOneSignature = tbApprovalDS.Text;
            currentRequest.ApproverOneSignedDate = today;
            currentRequest.ApprovalStatus = 3;

            dataContext.SaveChanges();

            // reset and rebuild the data to reflect new changes                
            RebuildReviewPanel();

            // send email to HR Group
            emailMessage = "Personnel Request " + personnelRequestId + " has been signed by the direct supervisor";
            emailSubject = "Personnel Request signed by Direct Supervisor";
            //SendEmailGroup100246(emailMessage, emailSubject);

            // send email to requester
            var rockContext = new RockContext();
            var rPersonAliasService = new PersonAliasService(rockContext);
            var rPersonAlias = rPersonAliasService.Get(currentRequest.RequestingPersonAliasId);

            string emailTo = rPersonAlias.Person.Email;                        
            //SendEmail(emailSubject, emailMessage, emailTo);
        }

        protected void btnApprovalSelectionDLS_Click(object sender, EventArgs e)
        {
            OpenPanel();

            var dataContext = new RockContext();
            var service = new PersonnelRequestService(dataContext);
            currentRequest = service.Get(personnelRequestId);

            var DLSId = Int32.Parse(ddApproverDLS.Text);                        
            Person a2Person;
            a2Person = new PersonService(new RockContext()).Get(DLSId);
            int a2AliasId = a2Person.PrimaryAliasId ?? default(int);
            currentRequest.ApproverTwoPersonAliasId = a2AliasId;
            currentRequest.ApprovalStatus = 4;

            dataContext.SaveChanges();

            // reset and rebuild the data to reflect new changes                
            RebuildReviewPanel();

            // Prepare Emails
            var rockContext = new RockContext();
            var a2PersonAliasService = new PersonAliasService(rockContext);
            var a2PersonAlias = a2PersonAliasService.Get(currentRequest.ApproverTwoPersonAliasId);
            
            string dlsName = a2PersonAlias.Person.FullName;

            emailSubject = "Personnel Request Dotted Line Supervisor Assigned";
            emailMessage = "Personnel Request " + personnelRequestId + " Dotted Line Supervisor has been assigned to " + dlsName;

            // send email to dotted line supervisor                        
            string emailTo = a2PersonAlias.Person.Email;
            //SendEmail(emailSubject, emailMessage, emailTo);

            // send email to HR Group
            //SendEmailGroup100246(emailMessage, emailSubject);

            // send email to requester
            var rPersonAliasService = new PersonAliasService(rockContext);
            var rPersonAlias = rPersonAliasService.Get(currentRequest.RequestingPersonAliasId);

            emailTo = rPersonAlias.Person.Email;
            //SendEmail(emailSubject, emailMessage, emailTo);
        }

        protected void btnApprovalDLS_Click(object sender, EventArgs e)
        {
            OpenPanel();
            var dataContext = new RockContext();

            currentRequest = new PersonnelRequestService(new RockContext()).Get(personnelRequestId);
            int version = currentRequest.RequestVersion;
            version++;
            
            var service = new PersonnelRequestService(dataContext);
            currentRequest = service.Get(personnelRequestId);

            if (rbDLSApproval.Text == "approve")
            {
                currentRequest.ApproverTwoSignature = tbApprovalDLS.Text;
                currentRequest.ApproverTwoSignedDate = today;
                currentRequest.ApprovalStatus = 5;               
                
                dataContext.SaveChanges();

                // reset and rebuild the data to reflect new changes                
                RebuildReviewPanel();

                // send email to HR Group
                emailMessage = "Personnel Request " + personnelRequestId + " has been approved by the Dotted Line Supervisor";
                emailSubject = "Personnel Request signed by Dotted Line Supervisor";
                //SendEmailGroup100246(emailMessage, emailSubject);

                // send email to requester
                var rockContext = new RockContext();
                var rPersonAliasService = new PersonAliasService(rockContext);
                var rPersonAlias = rPersonAliasService.Get(currentRequest.RequestingPersonAliasId);

                string emailTo = rPersonAlias.Person.Email;
                //SendEmail(emailSubject, emailMessage, emailTo);
            }
            else
            {
                // void existing signature
                currentRequest.RequestorSignature = "voided";
                currentRequest.ApproverOneSignature = "voided";
                currentRequest.ApprovalStatus = 9;
                currentRequest.RequestVersion = version;

                dataContext.SaveChanges();

                currentRequest = new PersonnelRequestService(dataContext).Get(personnelRequestId);

                // Prepare Emails

                emailSubject = "Personnel Request Not Approved ";
                emailMessage = "Personnel Request " + personnelRequestId + " has been marked as Not Approved by the Dotted Line Supervisor";

                // send email to direct supervisor      
                var rockContext = new RockContext();
                var a1PersonAliasService = new PersonAliasService(rockContext);
                var a1PersonAlias = a1PersonAliasService.Get(currentRequest.ApproverOnePersonAliasId);
                string emailTo = a1PersonAlias.Person.Email;
                //SendEmail(emailSubject, emailMessage, emailTo);

                // send email to HR Group
                //SendEmailGroup100246(emailMessage, emailSubject);

                // send email to requester
                var rPersonAliasService = new PersonAliasService(rockContext);
                var rPersonAlias = rPersonAliasService.Get(currentRequest.RequestingPersonAliasId);

                emailTo = rPersonAlias.Person.Email;
                //SendEmail(emailSubject, emailMessage, emailTo);

                Response.Redirect(link);
            }
        }

        protected void btnApprovalSelectionSLT_Click(object sender, EventArgs e)
        {
            OpenPanel();
            var rockContext = new RockContext();
            var dataContext = new RockContext();
            var service = new PersonnelRequestService(dataContext);
            currentRequest = service.Get(personnelRequestId);

            var SLTId = Int32.Parse(ddApproverSLT.Text);

            Person a3Person;
            a3Person = new PersonService(new RockContext()).Get(SLTId);
            int a3AliasId = a3Person.PrimaryAliasId ?? default(int);

            currentRequest.ApproverThreePersonAliasId = a3AliasId;
            currentRequest.ApprovalStatus = 6;            

            dataContext.SaveChanges();

            // reset and rebuild the data to reflect new changes                
            RebuildReviewPanel();

            // Prepare Emails
            Person a3Assigned;
            a3Assigned = new PersonService(new RockContext()).Get(currentRequest.ApproverThreePersonAliasId);

            var a3PersonAliasService = new PersonAliasService(rockContext);
            var a3PersonAlias = a3PersonAliasService.Get(currentRequest.ApproverThreePersonAliasId);

            string a3Name = a3PersonAlias.Person.FullName;
            emailSubject = "Personnel Request Senior Leadership Team Approver Assigned";
            emailMessage = "Personnel Request " + personnelRequestId + " Senior Leadership Team Approver has been assigned to " + a3Name;

            // send email to SLT line supervisor                        
            string emailTo = a3Assigned.Email;
            //SendEmail(emailSubject, emailMessage, emailTo);

            // send email to HR Group
            //SendEmailGroup100246(emailMessage, emailSubject);

            // send email to requester
            
            var rPersonAliasService = new PersonAliasService(rockContext);
            var rPersonAlias = rPersonAliasService.Get(currentRequest.RequestingPersonAliasId);

            emailTo = rPersonAlias.Person.Email;
            //SendEmail(emailSubject, emailMessage, emailTo);
        }

        protected void btnApprovalSLT_Click(object sender, EventArgs e)
        {
            OpenPanel();

            var dataContext = new RockContext();

            currentRequest = new PersonnelRequestService(new RockContext()).Get(personnelRequestId);
            int version = currentRequest.RequestVersion;
            version++;

            var service = new PersonnelRequestService(dataContext);
            currentRequest = service.Get(personnelRequestId);

            if (rbSLTApproval.Text == "approve")
            {
                currentRequest.ApproverThreeSignature = tbApprovalSLT.Text;
                currentRequest.ApproverThreeSignedDate = today;
                currentRequest.ApprovalStatus = 7;

                dataContext.SaveChanges();

                // send email to HR Group
                emailMessage = "Personnel Request " + personnelRequestId + " has been approved by the assigned Senior Leadership Team";
                emailSubject = "Personnel Request signed by Senior Leadership Team";
                //SendEmailGroup100246(emailMessage, emailSubject);

                // send email to requester
                var rockContext = new RockContext();
                var rPersonAliasService = new PersonAliasService(rockContext);
                var rPersonAlias = rPersonAliasService.Get(currentRequest.RequestingPersonAliasId);

                string emailTo = rPersonAlias.Person.Email;
                //SendEmail(emailSubject, emailMessage, emailTo);

            }
            else
            {
                // void existing signatures
                currentRequest.RequestorSignature = "voided";
                currentRequest.ApproverOneSignature = "voided";
                currentRequest.ApproverTwoSignature = "voided";
                currentRequest.ApprovalStatus = 9;
                currentRequest.RequestVersion = version;

                dataContext.SaveChanges();

                currentRequest = new PersonnelRequestService(dataContext).Get(personnelRequestId);

                // Prepare Emails

                emailSubject = "Personnel Request Not Approved ";
                emailMessage = "Personnel Request " + personnelRequestId + " has been marked as Not Approved by the Senior Leadership Team";

                // send email to direct supervisor      
                var rockContext = new RockContext();
                var a1PersonAliasService = new PersonAliasService(rockContext);
                var a1PersonAlias = a1PersonAliasService.Get(currentRequest.ApproverOnePersonAliasId);
                string emailTo = a1PersonAlias.Person.Email;
                
                //SendEmail(emailSubject, emailMessage, emailTo);

                // send email to HR Group
                //SendEmailGroup100246(emailMessage, emailSubject);

                // send email to requester
                var rPersonAliasService = new PersonAliasService(rockContext);
                var rPersonAlias = rPersonAliasService.Get(currentRequest.RequestingPersonAliasId);

                emailTo = rPersonAlias.Person.Email;
                //SendEmail(emailSubject, emailMessage, emailTo);
            }

            Response.Redirect(link);
        }

        protected void btnHRAssignDLS_Click(object sender, EventArgs e)
        {
            OpenPanel();

            pnlApprovalSelectionDLS.Visible = true;
            ddApproverDLS.Items.Add(new ListItem("Jim Garvey", "46051"));
            ddApproverDLS.Items.Add(new ListItem("Mark Baker", "58942"));
                        
            LoadEmployeeDropDown(5);
            GetJobTitle(6);
            
        }

        protected void btnHRAssignSLT_Click(object sender, EventArgs e)
        {
            OpenPanel();

            pnlApprovalSelectionSLT.Visible = true;

            ddApproverSLT.Items.Add(new ListItem("Jim Garvey", "46051"));
            ddApproverSLT.Items.Add(new ListItem("Mark Baker", "58942"));

            LoadEmployeeDropDown(6);
            GetJobTitle(7);
        }

        protected void btnHRTasksSave_Click(object sender, EventArgs e)
        {
            OpenPanel();
            var dataContext = new RockContext();

            currentRequest = new PersonnelRequestService(new RockContext()).Get(personnelRequestId);
            int version = currentRequest.RequestVersion;
            bool isConverted = currentRequest.ConvertedToJobOffer;
            if (isConverted == true && rbHRActions.Text == "convert")
            {
                pnlError.Visible = true;
                lErrorString.Text = "This personnel request has already been converted.";
                pnlHRTasks.Visible = true;
            }
            else
            {
                var service = new PersonnelRequestService(dataContext);
                currentRequest = service.Get(personnelRequestId);
                version++;

                switch (rbHRActions.Text)
                {
                    case "complete":
                        currentRequest.ApprovalStatus = 8;
                        dataContext.SaveChanges();
                        break;
                    case "convert":
                        CreateJobOfferRecord();
                        currentRequest.ApprovalStatus = 10;
                        currentRequest.ConvertedToJobOffer = true;
                        dataContext.SaveChanges();
                        break;
                    case "deny":
                        currentRequest.RequestorSignature = "voided";
                        currentRequest.ApproverOneSignature = "voided";
                        currentRequest.ApproverTwoSignature = "voided";
                        currentRequest.ApproverThreeSignature = "voided";
                        currentRequest.ApprovalStatus = 9;
                        currentRequest.RequestVersion = version;
                        dataContext.SaveChanges();
                        break;
                    case "inactive":
                        currentRequest.ApprovalStatus = 99;
                        dataContext.SaveChanges();
                        break;
                    case "active":
                        currentRequest.RequestorSignature = "voided";
                        currentRequest.ApproverOneSignature = "voided";
                        currentRequest.ApproverTwoSignature = "voided";
                        currentRequest.ApproverThreeSignature = "voided";
                        currentRequest.ApprovalStatus = 1;
                        currentRequest.RequestVersion = version;
                        dataContext.SaveChanges();
                        break;
                }

                Response.Redirect(link);
            }
        }

        protected void btnNoteAdd_Click(object sender, EventArgs e)
        {
            OpenPanel();

            var dataContext = new RockContext();
            currentRequest = new PersonnelRequestService(dataContext).Get(personnelRequestId);

            string link = "~/PersonnelRequestNoteEntry?id=" + currentRequest.Guid;
            Response.Redirect(link);
        }

        protected void fuJobDescription_UpLoad(object sender, EventArgs e)
        {
            string fileName = ""; ;
            personnelRequestId = int.Parse(hfPersonnelRequestId.Value);
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

        protected void btnFileDelete_Click(object sender, EventArgs e)
        {
            string filePath = "C:\\\\inetpub/wwwroot/Content/InternalSite/HR/PRF_Job_Descriptions/";
            string fileName;
            personnelRequestId = int.Parse(hfPersonnelRequestId.Value);

            var dataContext = new RockContext();
            currentRequest = new PersonnelRequestService(new RockContext()).Get(personnelRequestId);
            fileName = currentRequest.JobTitleFile;

            string fileDelete = filePath + fileName;
            lDebugString.Text += "<br>*" + fileDelete + "*";
            
            if (File.Exists(@fileDelete))
            {
                File.Delete(@fileDelete);
                lUploadStatus.Text = "File Deleted";

                var service = new PersonnelRequestService(dataContext);
                currentRequest = service.Get(personnelRequestId);
                currentRequest.JobTitleFile = "deleted";
                dataContext.SaveChanges();

                fuJobDescription.Visible = false;
                lUploadStatus.Visible = true;
                btnFileDelete.Visible = false;
                lUploadStatus.Text = "The file: " + fileName + " has been deleted ";

            }
            else
            {
                lUploadStatus.Text = "File not found, not deleted";
            }
            
        }

        #endregion

        #region Methods


        protected void CheckCredentials()
        {
            int dsId = currentRequest.ApproverOnePersonAliasId;
            int dlsId = currentRequest.ApproverTwoPersonAliasId;
            int sltId = currentRequest.ApproverThreePersonAliasId;

            if(currentPerson.PrimaryAliasId == currentRequest.ApproverOnePersonAliasId)
            {
                isDS = true;
            }
            if (currentPerson.PrimaryAliasId == currentRequest.ApproverTwoPersonAliasId)
            {
                isDLS = true;
            }
            if (currentPerson.PrimaryAliasId == currentRequest.ApproverThreePersonAliasId)
            {
                isSLT = true;
            }
            // Check for HR group 
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == 100246);

            foreach (var qRow in qry)
            {
                if (currentPerson.Id == qRow.PersonId)
                {
                    isHR = true;
                } 
            }
            if(currentPerson.PrimaryAliasId == currentRequest.RequestingPersonAliasId)
            {
                isREQ = true;
            }

            if (isREQ == false && isDS == false && isDLS == false && isSLT == false && isHR == false )
            {
                credentials = -1;
            }
            lDebugString.Text = "Is Requester:" + isREQ + " / " + currentPerson.Id;
            lDebugString.Text += "<br>Is DS:" + isDS + " / " + dsId;
            lDebugString.Text += "<br>Is DLS:" + isDLS + " / " + dlsId;
            lDebugString.Text += "<br>Is SLT:" + isSLT + " / " + sltId;
            lDebugString.Text += "<br>Is HR:" + isHR;
        }
        protected void OpenPanel()
        {
            personnelRequestId = int.Parse(hfPersonnelRequestId.Value);
            ClearPanels();
        }

        protected void GetGuidId()
        {
            string id = PageParameter("id");

            Guid? qsGuid = PageParameter("id").AsGuidOrNull();
            if (qsGuid.HasValue)
            {
                // check to see if Guid is valid request
                var prQry = new PersonnelRequestService(new RockContext()).Queryable();
                prQry = prQry.Where(row => row.Guid == qsGuid);
                foreach (var qRow in prQry)
                {
                    currentRequest = new PersonnelRequestService(new RockContext()).Get(qRow.Id);
                    personnelRequestId = currentRequest.Id;
                }
                if (currentRequest == null)
                {
                    personnelRequestId = -1;
                }
            }
            else
            {
                personnelRequestId = -1;
            }
        }

        protected void DeleteAllocation(int id)
        {
            string qryString = "DELETE _org_rivervalley_PersonnelRequestAllocations WHERE Id = " + id;
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            conn.Close();
        }

        protected void GetJobTitle(int type)
        {
            var dataContext = new RockContext();
            string jobTitle = "";
            currentRequest = new PersonnelRequestService(dataContext).Get(personnelRequestId);
            if (currentRequest.JobTitleValueId > 0)
            {
                var jtQry = new DefinedValueService(new RockContext()).Queryable();
                jtQry = jtQry.Where(row => row.Id == currentRequest.JobTitleValueId);
                foreach (var qRow in jtQry)
                {
                    jobTitle = qRow.Value;
                }
            }
            else
            {
                jobTitle = currentRequest.JobTitleName;
            }

            switch (type)
            {
                case 1:
                    lJobTitleRQ.Text = jobTitle;
                    break;
                case 2:
                    lJobTitleDS.Text = jobTitle;
                    break;
                case 3:
                    lJobTitleDLS.Text = jobTitle;
                    break;
                case 4:
                    lJobTitleSLT.Text = jobTitle;
                    break;
                case 5:
                    lJobTitleHR.Text = jobTitle;
                    break;
                case 6:
                    lJobTitleSelectionDLS.Text = jobTitle;
                    break;
                case 7:
                    lJobTitleSelectionSLT.Text = jobTitle;
                    break;
            }
        }

        protected void RebuildReviewPanel()
        {
            // reset and rebuild the data to reflect new changes
            var dataContext = new RockContext();                        
            currentRequest = new PersonnelRequestService(dataContext).Get(personnelRequestId);

            ClearPanels();
            CheckCredentials();
            lReviewDisplayString.Text = "";
            lNotesString.Text = "";
            BuildReviewPanel();
            pnlReview.Visible = true;
        }

        private void LoadCampusDropDownValues()
        {
            var cQry = new CampusService(new RockContext()).Queryable().AsNoTracking();
            cQry = cQry.Where(row => row.Id != 5 && row.Id != 7 && row.Id != 8 && row.Id != 10);
            var cQrySorted = cQry.OrderBy(a => a.Name);
            foreach (var qRow in cQrySorted)
            {
                ddCampusAllocOne.Items.Add(new ListItem(qRow.Name, qRow.Id.ToString()));
                ddCampusAllocTwo.Items.Add(new ListItem(qRow.Name, qRow.Id.ToString()));
                ddCampusAllocThree.Items.Add(new ListItem(qRow.Name, qRow.Id.ToString()));
            }
        }

        private void LoadEmployeeDropDown(int type)
        {
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
                case 5:
                    qryString = "SELECT p.Id, p.NickName + ' ' + p.LastName AS Name FROM GroupMember gm, Person p WHERE gm.PersonId = p.Id AND  GroupId = 77458 ORDER BY p.LastName, p.FirstName";
                    break;
                case 6:
                    qryString = "SELECT p.Id, p.NickName + ' ' + p.LastName AS Name FROM GroupMember gm, Person p WHERE gm.PersonId = p.Id AND  GroupId = 77456 ORDER BY p.LastName, p.FirstName";
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
                        // not used
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
                    case 5:
                        ddApproverDLS.Items.Add(new ListItem(rdr.GetString(1), rdr.GetInt32(0).ToString()));
                        break;
                    case 6:
                        ddApproverSLT.Items.Add(new ListItem(rdr.GetString(1), rdr.GetInt32(0).ToString()));
                        break;
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
            pnlDataEdit.Visible = false; 
            pnlReview.Visible = false;
            pnlApprovalRQ.Visible = false;
            pnlApprovalDS.Visible = false;
            pnlApprovalDLS.Visible = false;
            pnlApprovalSLT.Visible = false;
            pnlApprovalSelectionDLS.Visible = false;
            pnlApprovalSelectionSLT.Visible = false;
            pnlAllocations.Visible = false;
            pnlHRTasks.Visible = false;
        }

        private void LoadEditData()
        {
            var rockContext = new RockContext();
            var rPersonAliasService = new PersonAliasService(rockContext);
            var rPersonAlias = rPersonAliasService.Get(currentRequest.RequestingPersonAliasId);

            lReqester.Text = rPersonAlias.Person.FullName;
            lRequestDate.Text = currentRequest.RequestDate.ToShortDateString();

            var cQry = new CampusService(new RockContext()).Queryable();
            cQry = cQry.Where(row => row.Id == currentRequest.RequestingCampusId);
            foreach (var qRow in cQry)
            {
                lCampus.Text = qRow.Name;
            }
            
            rbType.Text = currentRequest.RequestType.ToString();
            rbState.Text = currentRequest.EmploymentType.ToString();
            rbStatus.Text = currentRequest.EmploymentStatus.ToString();
            if(currentRequest.CandidatePersonAliasId > 0)
            {                
                var cPersonAliasService = new PersonAliasService(rockContext);
                var cPersonAlias = cPersonAliasService.Get(currentRequest.CandidatePersonAliasId);
                
                ppCandidate.SetValue(cPersonAlias.Person);
            }
            tbCandidate.Text = currentRequest.CandidateName;
            ddJobTitle.Text = currentRequest.JobTitleValueId.ToString();
            tbJobTitle.Text = currentRequest.JobTitleName;

            var psPersonAliasService = new PersonAliasService(rockContext);
            var psPersonAlias = psPersonAliasService.Get(currentRequest.ProposedSupervisorPersonAliasId);            
            ddProposedSupervisor.Text = psPersonAlias.PersonId.ToString();

            ddDepartment.Text = currentRequest.DepartmentId.ToString();
            if (currentRequest.StartDate > dt.Date)
            {
                dpStartDate.Text = currentRequest.StartDate.ToShortDateString();
            }
            if (currentRequest.TenureDate > dt.Date)
            {
                dpTenureDate.Text = currentRequest.TenureDate.ToShortDateString();
            }
            if (currentRequest.EndDate > dt.Date)
            {
                dpEndDate.Text = currentRequest.EndDate.ToShortDateString();
            }
           if(currentRequest.ReplacementForPersonAliasId > 0)
            {
                var rfPersonAliasService = new PersonAliasService(rockContext);
                var rfPersonAlias = rfPersonAliasService.Get(currentRequest.ReplacementForPersonAliasId);
                ddReplacement.Text = rfPersonAlias.PersonId.ToString();
            }
           if(currentRequest.CurrentSupervisorPersonAliasId > 0)
            {
                var csPersonAliasService = new PersonAliasService(rockContext);
                var csPersonAlias = csPersonAliasService.Get(currentRequest.CurrentSupervisorPersonAliasId);

                ddCurrentSupervisor.Text = csPersonAlias.PersonId.ToString();
            }

            tbHours.Text = currentRequest.Hours.ToString();
            tbSalaryRange.Text = currentRequest.SalaryRange;
            tbSpecialNotes.Text = currentRequest.SpecialNotes;
            tbJobDescription.Text = currentRequest.Responsibilities;
            tbSundayHours.Text = currentRequest.SundayHours.ToString();
            tbMondayHours.Text = currentRequest.MondayHours.ToString();
            tbTuesdayHours.Text = currentRequest.TuesdayHours.ToString();
            tbWednesdayHours.Text = currentRequest.WednesdayHours.ToString();
            tbThursdayHours.Text = currentRequest.ThursdayHours.ToString();
            tbFridayHours.Text = currentRequest.FridayHours.ToString();
            tbSaturdayHours.Text = currentRequest.SaturdayHours.ToString();
        }

        private void BuildReviewPanel()
        {
            var rockContext = new RockContext();
            var rPersonAliasService = new PersonAliasService(rockContext);
            var rPersonAlias = rPersonAliasService.Get(currentRequest.RequestingPersonAliasId);

            btnReviewEdit.Visible = false;
            btnReviewAllocations.Visible = false;
            btnReviewREQApproval.Visible = false;
            btnReviewDSApproval.Visible = false;
            btnReviewDLSApproval.Visible = false;
            btnReviewSLTApproval.Visible = false;

            if (isREQ)
            {
                if (currentRequest.RequestorSignature == null || currentRequest.RequestorSignature == "voided")
                {
                    if(currentRequest.ApprovalStatus < 3)
                    {
                        btnReviewEdit.Visible = true;
                        btnReviewREQApproval.Visible = true; // This would mean the requester has either not signed off or the project was sent back and approvals were cleared
                    }                    
                }
            }
            if (isDS)
            {
                if (currentRequest.ApproverOneSignature == null || currentRequest.ApproverOneSignature == "voided")
                {
                    btnReviewDSApproval.Visible = true; // This would mean the DS has either not signed off or the project was sent back and approvals were cleared
                }
            }
            if (isDLS)
            {
                if (currentRequest.ApproverTwoSignature == null || currentRequest.ApproverTwoSignature == "voided")
                {
                    btnReviewAllocations.Visible = true;
                    btnReviewDLSApproval.Visible = true; // This would mean the DLS has either not signed off or the project was sent back and approvals were cleared
                }
            }
            if (isSLT)
            {
                if (currentRequest.ApproverThreeSignature == null || currentRequest.ApproverThreeSignature == "voided")
                {
                    btnReviewAllocations.Visible = true;
                    btnReviewSLTApproval.Visible = true; // This would mean the SLT has either not signed off or the project was sent back and approvals were cleared
                }
            }
            if (currentRequest.ConvertedToJobOffer)
            {
                WriteOutputStringTwoCells("", "<b><font color='red'>*** This request has been converted to the Job Offer application ***</b></font><br>&nbsp;");
            }
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
                    department = qRow.Value;
                }
            }
            string startDate = "";            
            if (currentRequest.StartDate > dt.Date)
            {
                startDate = currentRequest.StartDate.ToShortDateString();
            }
            WriteOutputStringFourCells("Department", department, "Start Date", startDate);

            //Person cPerson;
            string candidate = "";
            if (currentRequest.CandidatePersonAliasId > 0)
            {
                var cPersonAliasService = new PersonAliasService(rockContext);
                var cPersonAlias = cPersonAliasService.Get(currentRequest.CandidatePersonAliasId);
                candidate = cPersonAlias.Person.FullName;
            }
            WriteOutputStringFourCells("Candidate", candidate, "Candidate (Manual)", currentRequest.CandidateName);

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

            string reqSignDate = "";
            if (currentRequest.RequestorSignedDate > dt.Date)
            {
                reqSignDate = currentRequest.RequestorSignedDate.ToShortDateString();
            }
            WriteOutputStringFourCells("Requester Signature", currentRequest.RequestorSignature, "Date", reqSignDate);

            string appovOneDate = "";
            string dsName = "DS Signature";
            if(currentRequest.ApproverOnePersonAliasId > 0)
            {
                var a1PersonAliasService = new PersonAliasService(rockContext);
                var a1PersonAlias = a1PersonAliasService.Get(currentRequest.ApproverOnePersonAliasId);
                
                dsName = dsName + "<br>(" + a1PersonAlias.Person.FullName + ")";
            }
            if (currentRequest.ApproverOneSignedDate > dt.Date)
            {
                appovOneDate = currentRequest.ApproverOneSignedDate.ToShortDateString();                
            }
            WriteOutputStringFourCells(dsName, currentRequest.ApproverOneSignature, "Date", appovOneDate);

            string appovTwoDate = "";
            string dlsName = "DLS Signature";
            if (currentRequest.ApproverTwoPersonAliasId > 0)
            {                
                var a2PersonAliasService = new PersonAliasService(rockContext);
                var a2PersonAlias = a2PersonAliasService.Get(currentRequest.ApproverTwoPersonAliasId);

                dlsName = dlsName + "<br>(" + a2PersonAlias.Person.FullName + ")";
            }
                if (currentRequest.ApproverTwoSignedDate > dt.Date)
            {                
                appovTwoDate = currentRequest.ApproverTwoSignedDate.ToShortDateString();                
            }
            WriteOutputStringFourCells(dlsName, currentRequest.ApproverTwoSignature, "Date", appovTwoDate);

            string appovThreeDate = "";
            string sltName = "SLT Signature";
            if (currentRequest.ApproverThreePersonAliasId > 0)
            {               
                var a3PersonAliasService = new PersonAliasService(rockContext);
                var a3PersonAlias = a3PersonAliasService.Get(currentRequest.ApproverThreePersonAliasId);
                sltName = sltName + "<br>(" + a3PersonAlias.Person.FullName + ")";
            }
                if (currentRequest.ApproverThreeSignedDate > dt.Date)
            {
                appovThreeDate = currentRequest.ApproverThreeSignedDate.ToShortDateString();                
            }
            WriteOutputStringFourCells(sltName, currentRequest.ApproverThreeSignature, "Date", appovThreeDate);
            if(currentRequest.JobTitleFile == "deleted")
            {
                WriteOutputStringTwoCells("Uploaded File", "");
            }
            else
            {
                WriteOutputStringTwoCells("Uploaded File", currentRequest.JobTitleFile);
            }

            GetAllocations(personnelRequestId);
            WriteOutputStringTwoCells("Request Version", currentRequest.RequestVersion.ToString());
            WriteNotes(personnelRequestId);
        }

        private void WriteOutputStringFourCells(string cellOne, string cellTwo, string cellThree, string cellFour)
        {
            lReviewDisplayString.Text += "<div class=\"row\">";
            lReviewDisplayString.Text += "<div class=\"col-md-2\"><b>" + cellOne + "</b></div>";
            lReviewDisplayString.Text += "<div class=\"col-md-3\">" + cellTwo + "</div>";
            lReviewDisplayString.Text += "<div class=\"col-md-2\"><b>" + cellThree + "</b></div>";
            lReviewDisplayString.Text += "<div class=\"col-md-3\">" + cellFour + "</div>";
            lReviewDisplayString.Text += "</div>";            
        }

        private void WriteOutputStringTwoCells(string cellOne, string cellTwo)
        {
            lReviewDisplayString.Text += "<div class=\"row\">";
            lReviewDisplayString.Text += "<div class=\"col-md-2\"><b>" + cellOne + "</b></div>";
            lReviewDisplayString.Text += "<div class=\"col-md-7\">" + cellTwo + "</div>";            
            lReviewDisplayString.Text += "</div>";
        }

        private void WriteOutputStringThreeCells(string cellOne, string cellTwo, string cellThree)
        {
            lNotesString.Text += "<div class=\"row\">";
            lNotesString.Text += "<div class=\"col-md-2\"><b>" + cellOne + "</b></div>";
            lNotesString.Text += "<div class=\"col-md-2\">" + cellTwo + "</div>";
            lNotesString.Text += "<div class=\"col-md-7\">" + cellThree + "</div>";
            lNotesString.Text += "</div>";
        }

        private void WriteNotes(int id)
        {
            var nQry = new PersonnelRequestNoteService(new RockContext()).Queryable();
            nQry = nQry.Where(row => row.PersonnelRequestId == id);
            var rockContext = new RockContext();
            foreach (var qRow in nQry)
            {
                var personAliasService = new PersonAliasService(rockContext);
                var personAlias = personAliasService.Get(qRow.PersonAliasId);

                WriteOutputStringThreeCells(qRow.CreatedDateTime.ToString(), personAlias.Person.FullName, qRow.Note);
            }
        }

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
                SendEmail(subject, emailMessage, emailTo);
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

        private void CreateJobOfferRecord()
        {
            var dataContext = new RockContext();
            var service = new JobOfferDetailService(dataContext);
            currentOffer = new JobOfferDetail();
            service.Add(currentOffer);

            currentOffer.Title = "Transfered PRF - no title";
            currentOffer.OfferDate = today;
            currentOffer.EffectiveDate = currentRequest.StartDate;
            currentOffer.TenureDate = currentRequest.TenureDate;
            if(currentRequest.CandidatePersonAliasId > 0)
            {
                currentOffer.PersonAliasId = currentRequest.CandidatePersonAliasId;
            }
            if (currentRequest.JobTitleValueId > 0)
            {
                currentOffer.JobTitleValueId = currentRequest.JobTitleValueId;
            }
            currentOffer.JobOfferStatusValueId = 2759;
            currentOffer.EmploymentStatusValueId = 6830;
            currentOffer.DepartmentValueId = currentRequest.DepartmentId;
            currentOffer.CampusId = currentRequest.RequestingCampusId;
            currentOffer.PersonnelRequestId = personnelRequestId;

            dataContext.SaveChanges();
        }

        private void GetAllocations(int id)
        {
            string qryString = "";
            qryString = qryString + "SELECT c.Name, pra.Allocation ";
            qryString = qryString + "FROM _org_rivervalley_PersonnelRequestAllocations pra ";
            qryString = qryString + "LEFT JOIN Campus c ON c.id = pra.CampusId ";
            qryString = qryString + "WHERE pra.PersonnelRequestId = " + id;

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            int alloc = 0;
            string allocations = "";
            while (rdr.Read())
            {
                alloc++;
                if (alloc == 1)
                {
                    allocations = rdr.GetString(0) + " - " + rdr.GetDecimal(1).ToString("#0.00") + "%" ;
                }
                if (alloc == 2)
                {
                    allocations = allocations + "<br>" + rdr.GetString(0) + " - " + rdr.GetDecimal(1).ToString("#0.00") + "%"; ;
                }
                if (alloc == 3)
                {
                    allocations = allocations + "<br>" + rdr.GetString(0) + " - " + rdr.GetDecimal(1).ToString("#0.00") + "%"; ;
                }
            }
            conn.Close();
            WriteOutputStringTwoCells("Allocations", allocations);
        }

        #endregion
    }
}