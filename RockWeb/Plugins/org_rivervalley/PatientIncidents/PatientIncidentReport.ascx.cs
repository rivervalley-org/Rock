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
    [DisplayName("Patient Incident Report")]
    [Category("org_rivervalley > PatientIncidents")]
    [Description("First test read of new tables")]

    public partial class PatientIncidentReport : Rock.Web.UI.RockBlock
    {
        #region Fields

        DateTime today = DateTime.Now;
        string cellOne;
        string cellTwo;
        string cellThree;
        string cellFour;
        string cellFive;
        string cellSix;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            GetIncedentRecords();
        }


        #endregion

        #region Events

        protected void btnAdd_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/PatientIncidentsDataEntry");
        }

        #endregion

        #region Methods

        private void GetIncedentRecords()
        {            
            var piQry = new PatientIncidentService(new RockContext()).Queryable();
            piQry = piQry.Where(row => row.Active == true  );
            var piQrySorted = piQry.OrderBy(a => a.DateAdmitted );
            foreach (var qRow in piQrySorted)
            {
                ClearCells();
                cellTwo = qRow.Location;
                cellThree = qRow.DateAdmitted.ToString();
                string link = "/PatientIncidentsDataEntry?id=" + qRow.Guid;                
                cellSix = "<a href=" + link + "><i class='fa fa-edit'></i></a>";
                GetPatientData(qRow.PersonAliasId);
                GetLastContact(qRow.Id);
                WriteOutputString(cellOne, cellTwo, cellThree, cellFour);
            }
        }

        private void ClearCells()
        {
            cellOne = "";
            cellTwo = "";
            cellThree = "";
            cellFour = "";
            cellFive = "";
            cellSix = "";
        }

        private void WriteOutputString(string cellOne, string cellTwo, string cellThree, string cellFour)
        {
            lOutputString.Text += "<tr>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellOne + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellTwo + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellThree + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellFour + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellFive + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellSix + "</td>";
            lOutputString.Text += "</tr>";

        }

        private void GetPatientData(int id)
        {
            // PersonAliasId is used
            var rockContext = new RockContext();
            var personAliasService = new PersonAliasService(rockContext);
            var personAlias = personAliasService.Get(id);

            cellOne = personAlias.Person.FullName;
        }

        private void GetVisitorData(int id)
        {
            // PersonAliasId is used
            var rockContext = new RockContext();
            var personAliasService = new PersonAliasService(rockContext);
            var personAlias = personAliasService.Get(id);

            cellFour = personAlias.Person.FullName;
        }

        private void GetLastContact(int incidentId)
        {
            var pvQry = new PatientVisitService(new RockContext()).Queryable();
            pvQry = pvQry.Where(row => row.PatientIncidentId == incidentId);
            var qrySorted = pvQry.OrderByDescending(a => a.DateVisited).Take(1);
            foreach (var qRow in pvQry)
            {
                cellFive = qRow.DateVisited.ToString();
                GetVisitorData(qRow.VisitingPersonAliasId);
            }
        }

        #endregion
    }
}