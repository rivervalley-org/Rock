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
    [DisplayName("Patient Visit Data Entry")]
    [Category("org_rivervalley > PatientIncidents")]
    [Description("Add/Edit of the Patient visit data")]

    public partial class PatientVisitDataEntry : Rock.Web.UI.RockBlock
    {
        #region Fields

        DateTime today = DateTime.Now;
        private int patientVisitId = 0;
        private PatientVisit currentVisit = null;
        private PatientIncident currentIncident = null;
        //private Person visitPerson = null;
        private int patientIncidentId = 0;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                GetId();
                if (patientIncidentId > 0)
                {
                    NewVisit();
                    ldebugString.Text = "Id " + patientIncidentId;
                }
                else
                {
                    if(patientVisitId > 0)
                    {
                        LoadVisitDetails();
                    }
                    else
                    {
                        pnlError.Visible = true;
                        pnlVisit.Visible = false;
                    }                    
                }
            }
        }

        #endregion

        #region Events

        protected void btnSave_Click(object sender, EventArgs e)
        {
            patientVisitId = int.Parse(hfCurrentVisitId.Value);
            patientIncidentId = int.Parse(hfPatientIncidentId.Value);

            var dataContext = new RockContext();
            var service = new PatientVisitService(dataContext);

            if (patientVisitId == 0)
            {
                currentVisit = new PatientVisit();
                service.Add(currentVisit);
            }
            else
            {
                currentVisit = service.Get(patientVisitId);
            }

            SetVisitDetail();

            dataContext.SaveChanges();
            Response.Redirect("~/PatientIncidentsShortReport");
        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/PatientIncidentsShortReport");
        }

        #endregion

        #region Methods

        protected void GetId()
        {
            Guid? id = PageParameter("id").AsGuidOrNull();
            if (id.HasValue)
            {
                // check to see if Guid is valid incident, then this is a new visit record
                var piQry = new PatientIncidentService(new RockContext()).Queryable();
                piQry = piQry.Where(row => row.Guid == id);
                foreach (var qRow in piQry)
                {
                    currentIncident = new PatientIncidentService(new RockContext()).Get(qRow.Id);
                    patientIncidentId = currentIncident.Id;
                    hfPatientIncidentId.Value = patientIncidentId.ToString();
                    hfCurrentVisitId.Value = 0.ToString();
                    // PersonAliasId is used
                    var rockContext = new RockContext();
                    var personAliasService = new PersonAliasService(rockContext);
                    var personAlias = personAliasService.Get(qRow.PersonAliasId);
                    lPatientName.Text = "<b>Patient: " + personAlias.Person.FullName + "</b>";
                }
                if (currentIncident == null)
                {
                    // check to see if Guid is valid visit, then this is an exsisting visit record
                    var pvQry = new PatientVisitService(new RockContext()).Queryable();
                    pvQry = pvQry.Where(row => row.Guid == id);
                    foreach (var qRow in pvQry)
                    {
                        currentVisit = new PatientVisitService(new RockContext()).Get(qRow.Id);
                        patientVisitId = currentVisit.Id;
                        hfCurrentVisitId.Value = patientVisitId.ToString();
                        hfPatientIncidentId.Value = currentVisit.PatientIncidentId.ToString();
                        currentIncident = new PatientIncidentService(new RockContext()).Get(qRow.PatientIncidentId);
                        // PersonAliasId is used
                        var rockContext = new RockContext();
                        var personAliasService = new PersonAliasService(rockContext);
                        var personAlias = personAliasService.Get(currentIncident.PersonAliasId);
                        lPatientName.Text = "<b>Patient: " +personAlias.Person.FullName + "</b>";
                    }
                }
            }
            else
            {
                patientVisitId = -1;
            }
        }

        private void NewVisit()
        {
            pnlVisit.Visible = true;
            pnlError.Visible = false;

            hfCurrentVisitId.Value = 0.ToString();
        }

        private void LoadVisitDetails()
        {
            // Load all variables for display
            pnlVisit.Visible = true;
            pnlError.Visible = false;

            tbNote.Text = currentVisit.Note;
            dpDateVisited.SelectedDateTime = currentVisit.DateVisited;
            tbLength.Text = currentVisit.Length.ToString();
            if (currentVisit.VisitingPersonAliasId > 0)
            {
                var rockContext = new RockContext();
                var personAliasService = new PersonAliasService(rockContext);
                var personAlias = personAliasService.Get(currentVisit.VisitingPersonAliasId);
               
                ppPerson.SetValue(personAlias.Person);
            }

        }

        private void SetVisitDetail()
        {
            int aliasId;
            string selectedPerson = ppPerson.SelectedValue.ToString();
            if (selectedPerson != "")
            {
                int personId = Int32.Parse(selectedPerson);
                Person currentPerson;
                var rockContext = new RockContext();
                currentPerson = new PersonService(rockContext).Get(personId);
                // capturing the PersonAliasId instead of the PersonId
                aliasId = currentPerson.PrimaryAliasId ?? default(int);

                currentVisit.VisitingPersonAliasId = aliasId;
            }

            currentVisit.PatientIncidentId = patientIncidentId;
            currentVisit.DateVisited = dpDateVisited.SelectedDateTime.Value;
            currentVisit.Note = tbNote.Text;
            currentVisit.Length = Int32.Parse(tbLength.Text);
        }

        #endregion
    }
}