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

using org.rivervalley.PatientIncidents.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.PatientIncidents
{
    [DisplayName("Patient Incident Data Entry")]
    [Category("org_rivervalley > PatientIncidents")]
    [Description("Add/Edit of the Patient Incident data")]

    public partial class PatientIncedentDataEntry : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        Person currentPerson;
        DateTime today = DateTime.Now;
        private int patientIncidentId;
        private PatientIncident currentIncident = null;
        //private Person incidentPerson = null;
        private Guid emailRecipient;
        private int ePersonId;
        private Person ePerson;
        private string emailFrom = "info@rivervalley.org";
        private string emailFromName = "System Administrator";
        private string emailMessage;
        private string emailSubject = "Patient Incident Alert";
        //private string emailTo;
        private int emailCampusId;
        string cellOne;
        string cellTwo;
        string cellThree;
        string cellFour;
        string cellFive;
        //string cellSix;

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

            if (!Page.IsPostBack)
            {
                GetGuidId();
                if (patientIncidentId >= 0)
                {
                    if (patientIncidentId == 0)
                    {
                        NewPatientIncident();
                    }
                    else
                    {
                        LoadIncidentDetails();
                        GetVisitRecords(patientIncidentId);
                    }
                }
                else
                {
                    pnlError.Visible = true;
                    pnlIncident.Visible = false;
                    pnlReleased.Visible = false;
                    pnlVisits.Visible = false;
                    pnlLocation.Visible = false;
                }
            }
        }


        #endregion

        #region Events

        protected void btnSave_Click(object sender, EventArgs e)
        {
            patientIncidentId = int.Parse(hfCurrentIncidentId.Value);
            hfCurrentIncidentId.Value = patientIncidentId.ToString();
            bool error = false;
            string pError = "";
            string dError = "";
            if(ppPerson.SelectedValue == null)
            {
                error = true;
                pError = "<br>Select a Patient";
            }
            if(dpDateAdmitted.SelectedDateTime == null)
            {
                error = true;
                dError = "<br>Enter a Date Admitted";
            }
            if (error == true)
            {
                nbWarningMessage.Text = "Please Correct the Following:" + pError + " " + dError;
                nbWarningMessage.Visible = true;
                pnlIncident.Visible = true;
                pnlError.Visible = false;
                pnlVisits.Visible = true;
                pnlReleased.Visible = false;
                btnReleaseUpdate.Visible = true;
                pnlLocation.Visible = false;
            }
            else
            {
                var dataContext = new RockContext();
                var service = new PatientIncidentService(dataContext);

                if (patientIncidentId == 0)
                {
                    currentIncident = new PatientIncident();
                    service.Add(currentIncident);
                    emailMessage = "New Patient Incident";
                }
                else
                {
                    currentIncident = service.Get(patientIncidentId);
                    emailMessage = "Update to a previous Patient Incident";
                }
                
                SetIncidentDetail();

                dataContext.SaveChanges();

                GetCampusEmailPerson(emailCampusId);

                SendEmail(emailMessage, ePerson.Email);

                string link = "~/PatientIncidentsShortReport";
                Response.Redirect(link);                
            }
        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            string link = "~/PatientIncidentsShortReport";
            Response.Redirect(link);
        }

        protected void btnLocation_Click(object sender, EventArgs e)
        {
            patientIncidentId = int.Parse(hfCurrentIncidentId.Value);
            hfCurrentIncidentId.Value = patientIncidentId.ToString();
            pnlIncident.Visible = false;
            pnlError.Visible = false;
            pnlVisits.Visible = false;
            pnlReleased.Visible = false;
            pnlLocation.Visible = true;

        }

        protected void btnLocationSave_Click(object sender, EventArgs e)
        {
            patientIncidentId = int.Parse(hfCurrentIncidentId.Value);
            hfCurrentIncidentId.Value = patientIncidentId.ToString();

            DefinedValue newLocation;
            var dataContext = new RockContext();
            var service = new DefinedValueService(dataContext);

            newLocation = new DefinedValue();
            service.Add(newLocation);
            newLocation.IsSystem = false;
            newLocation.DefinedTypeId = 304;
            newLocation.Value = tbLocation.Text;

            dataContext.SaveChanges();

            // Reload page to refresh the new location
            if (patientIncidentId == 0)
            {
                string link = "~/PatientIncidentsDataEntry";
                Response.Redirect(link);
                
            }
            else
            {
                currentIncident = new PatientIncidentService(new RockContext()).Get(patientIncidentId);
                string link = "~/PatientIncidentsDataEntry?id=" + currentIncident.Guid;
                Response.Redirect(link);
            }            
        }

        protected void btnReleaseUpdate_Click(object sender, EventArgs e)
        {
            patientIncidentId = int.Parse(hfCurrentIncidentId.Value);
            hfCurrentIncidentId.Value = patientIncidentId.ToString();

            pnlIncident.Visible = false;
            pnlError.Visible = false;
            pnlVisits.Visible = false;
            pnlReleased.Visible = true;
            pnlLocation.Visible = false;
        }

        protected void btnReleasedSave_Click(object sender, EventArgs e)
        {
            patientIncidentId = int.Parse(hfCurrentIncidentId.Value);
            var dataContext = new RockContext();
            var service = new PatientIncidentService(dataContext);
            currentIncident = service.Get(patientIncidentId);
            currentIncident.DateReleased = dpDateReleased.SelectedDateTime.Value;
            currentIncident.ReleaseNote = tbReleasedNote.Text;
            currentIncident.Active = false;

            dataContext.SaveChanges();

            string link = "~/PatientIncidentsShortReport";
            Response.Redirect(link);
        }

        protected void btnAdd_Click(object sender, EventArgs e)
        {
            string link = "~/PatientIncidentsDataEntry";
            Response.Redirect(link);
        }
        protected void btnNewVisit_Click(object sender, EventArgs e)
        {
            string link = "~/PatientVisitDataEntry?id=" + hfCurrentIncidentGuid.Value;
            Response.Redirect(link);
            
        }
        #endregion

        #region Methods

        protected void GetGuidId()
        {
            string id = PageParameter("id");
            if (id == "")
            {
                patientIncidentId = 0; // New record
            }
            else
            {
                Guid? qsGuid = PageParameter("id").AsGuidOrNull();
                if (qsGuid.HasValue)
                {
                    // check to see if Guid is valid request
                    var prQry = new PatientIncidentService(new RockContext()).Queryable();
                    prQry = prQry.Where(row => row.Guid == qsGuid);
                    foreach (var qRow in prQry)
                    {
                        currentIncident = new PatientIncidentService(new RockContext()).Get(qRow.Id);
                        patientIncidentId = currentIncident.Id;
                        hfCurrentIncidentId.Value = patientIncidentId.ToString();
                        hfCurrentIncidentGuid.Value = qsGuid.ToString();
                    }
                    if (currentIncident == null)
                    {
                        patientIncidentId = -1;
                    }
                }
                else
                {
                    patientIncidentId = -1;
                }
            }
        }


        private void NewPatientIncident()
        {
            pnlIncident.Visible = true;
            pnlError.Visible = false;
            pnlVisits.Visible = false;
            pnlReleased.Visible = false;
            pnlLocation.Visible = false;

            hfCurrentIncidentId.Value = 0.ToString();
            LoadCampusDropDownValues();
            LoadLocationDropDown();
        }

        private void LoadIncidentDetails()
        {
            // Load all variables for display
            pnlIncident.Visible = true;
            pnlError.Visible = false;
            pnlVisits.Visible = true;
            pnlReleased.Visible = false;
            btnReleaseUpdate.Visible = true;
            pnlLocation.Visible = false;

            LoadCampusDropDownValues();
            LoadLocationDropDown();
            ddLocation.Text = currentIncident.Location;
            tbRoom.Text = currentIncident.Room;
            tbPhone.Text = currentIncident.Phone;
            tbReason.Text = currentIncident.Reason;
            tbNote.Text = currentIncident.Note;
            dpDateAdmitted.SelectedDateTime = currentIncident.DateAdmitted;
            ddCampus.Text = currentIncident.PatientCampusId.ToString();
                        
            if (currentIncident.PersonAliasId > 0)
            {
                // PersonAliasId is used
                var rockContext = new RockContext();
                var personAliasService = new PersonAliasService(rockContext);
                var personAlias = personAliasService.Get(currentIncident.PersonAliasId);

                ppPerson.SetValue(personAlias.Person);
            }                
        }

        private void SetIncidentDetail()
        {
            string selectedPerson = ppPerson.SelectedValue.ToString();
            if (selectedPerson != "")
            {
                int personId = Int32.Parse(selectedPerson);
                Person patientPerson;
                patientPerson = new PersonService(new RockContext()).Get(personId);
                int aliasId = patientPerson.PrimaryAliasId ?? default(int);
                currentIncident.PersonAliasId = aliasId;
                // get attending campus id
                var attendingCampus = new PersonService(new RockContext()).Get(personId).GetCampus();
                currentIncident.AttendingCampusId = attendingCampus.Id;
                emailCampusId = attendingCampus.Id; // set in case no campus was selected
                
                // Continuing email message
                emailMessage += "<br>Patient: " + patientPerson.FullName;
            }

            var campus = Int32.Parse(ddCampus.Text);
            if (campus == 0)
            {
                currentIncident.PatientCampusId = null;
            }
            else
            {
                currentIncident.PatientCampusId = campus;
            }

            DateTime rDate = new DateTime(1900, 1, 1);
            
            currentIncident.Location = ddLocation.Text;            
            currentIncident.DateAdmitted = dpDateAdmitted.SelectedDateTime.Value;
            currentIncident.DateReleased = rDate;            
            currentIncident.Room = tbRoom.Text;
            currentIncident.Phone = tbPhone.Text;
            currentIncident.Reason = tbReason.Text;
            currentIncident.Note = tbNote.Text;
            currentIncident.Active = true;
            if(campus > 0)
            {
                emailCampusId = campus;
            }
            
            // continue email message
            emailMessage += "<br>Location: " + ddLocation.Text;
            emailMessage += "<br>Date Admitted: " + dpDateAdmitted.SelectedDateTime.Value;
            emailMessage += "<br>Reason: " + tbReason.Text;
            emailMessage += "<br>Note: " + tbNote.Text;
            emailMessage += "<br>Entered by : " + currentPerson.FullName;
        }

        private void LoadLocationDropDown()
        {
            var osQry = new DefinedValueService(new RockContext()).Queryable().AsNoTracking();
            osQry = osQry.Where(row => row.DefinedTypeId == 304);
            var osQrySorted = osQry.OrderBy(a => a.Value);
            ddLocation.Items.Add(new ListItem("", ""));
            foreach (var qRow in osQrySorted)
            {
                ddLocation.Items.Add(new ListItem(qRow.Value, qRow.Value));
            }
        }

        private void LoadCampusDropDownValues()
        {
            var cQry = new CampusService(new RockContext()).Queryable().AsNoTracking();
            cQry = cQry.Where(row => row.Id != 5 && row.Id != 7 && row.Id != 8 && row.Id != 10);
            var cQrySorted = cQry.OrderBy(a => a.Name);
            ddCampus.Items.Add(new ListItem("", "0"));
            foreach (var qRow in cQrySorted)
            {
                ddCampus.Items.Add(new ListItem(qRow.Name, qRow.Id.ToString()));
            }
        }

        private void GetVisitRecords(int id)
        {
            var pvQry = new PatientVisitService(new RockContext()).Queryable();
            pvQry = pvQry.Where(row => row.PatientIncidentId == id);

            foreach (var qRow in pvQry)
            {
                cellOne = qRow.DateVisited.ToString();
                cellThree = qRow.Length.ToString();
                cellFour = qRow.Note;
                string link = "~/PatientVisitDataEntry?id=" + qRow.Guid;
                cellFive = "<a href=" + link + "><i class='fa fa-edit'></i></a>";
                GetVisitorData(qRow.VisitingPersonAliasId);                
                WriteOutputString(cellOne, cellTwo, cellThree, cellFour);
            }
        }

        private void GetVisitorData(int id)
        {
            //PersonAlias Used 
            var rockContext = new RockContext();
            var personAliasService = new PersonAliasService(rockContext);
            var personAlias = personAliasService.Get(id);
            
            cellTwo = personAlias.Person.FullName;
        }

        private void ClearCells()
        {
            cellOne = "";
            cellTwo = "";
            cellThree = "";
            cellFour = "";
            cellFive = "";
        }

        private void WriteOutputString(string cellOne, string cellTwo, string cellThree, string cellFour)
        {
            lVisitsString.Text += "<tr>";
            lVisitsString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellOne + "</td>";
            lVisitsString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellTwo + "</td>";
            lVisitsString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellThree + "</td>";
            lVisitsString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellFour + "</td>";
            lVisitsString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellFive + "</td>";
            lVisitsString.Text += "</tr>";

        }

        private void GetCampusEmailPerson(int campusId)
        {
            string qryString = "";
            qryString = qryString + "SELECT Guid FROM PersonAlias WHERE[Guid] LIKE  ";
            qryString = qryString + "(";
            qryString = qryString + "SELECT Value FROM AttributeValue WHERE AttributeId = 7435 AND EntityId = ";
            qryString = qryString + "(";
            qryString = qryString + "SELECT EntityId FROM AttributeValue WHERE Value LIKE ";
            qryString = qryString + "(";
            qryString = qryString + "SELECT[GUID] FROM Campus WHERE Id = " + campusId + " ";
            qryString = qryString + ") ";
            qryString = qryString + "AND AttributeId = 7436";
            qryString = qryString + ")";
            qryString = qryString + ")";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                emailRecipient = rdr.GetGuid(0);
            }
            conn.Close();

            var rockContext = new RockContext();
            var qry = new PersonAliasService(new RockContext()).Queryable();
            qry = qry.Where(row => row.Guid == emailRecipient);

            foreach (var qRow in qry)
            {
                ePersonId = qRow.PersonId;
            }

            ePerson = new PersonService(rockContext).Get(ePersonId);
        }

        private void SendEmail(string emailMessage, string recipient)
        {
            var newEmail = new RockEmailMessage();
            newEmail.Subject = emailSubject;
            newEmail.FromEmail = emailFrom;
            newEmail.FromName = emailFromName;
            newEmail.Message = emailMessage;
            newEmail.SetRecipients(recipient);
            newEmail.Send();
        }

        #endregion
    }
}