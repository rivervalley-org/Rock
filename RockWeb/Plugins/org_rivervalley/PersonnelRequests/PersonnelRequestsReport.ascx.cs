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
    [DisplayName("Personnel Requests Report")]
    [Category("org_rivervalley > PersonnelRequests")]
    [Description("REport on Requests")]

    public partial class PersonnelRequestsReport : Rock.Web.UI.RockBlock
    {
        #region Fields

        private DateTime today = DateTime.Now;
        //private Person person;
        private string cellOne;
        private string cellTwo;
        private string cellThree;
        private string cellFour;
        private string cellFive;
        private string cellSix;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            GetRequestRecords();
        }


        #endregion

        #region Events

        #endregion

        #region Methods

        private void GetRequestRecords()
        {            
            var prQry = new PersonnelRequestService(new RockContext()).Queryable();
            prQry = prQry.Where(row => row.Id > 0 );
            var piQrySorted = prQry.OrderBy(a => a.Id );
            foreach (var qRow in piQrySorted)
            {
                ClearCells();
                GetRequesterData(qRow.RequestingPersonAliasId);                
                GetJobTitle(qRow.JobTitleValueId);
                cellThree = qRow.RequestDate.ToShortDateString();
                GetCampusName(qRow.RequestingCampusId);
                GetStatus(qRow.ApprovalStatus);
                string link = "/PersonnelRequestDataEdit?id=" + qRow.Guid;                
                cellSix = "<a href=" + link + "><i class='fa fa-edit'></i></a>";
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

        private void GetStatus(int type)
        {
            switch (type)
            {
                case 0:
                    cellFive = "Just Initiated";
                    break;
                case 1:
                    cellFive = "In Process";
                    break;
                case 2:
                    cellFive = "Requester Signed Off";
                    break;
                case 3:
                    cellFive = "DS Signed Off";
                    break;                
                case 4:
                    cellFive = "DLS Assigned";
                    break;
                case 5:
                    cellFive = "DLS Signed Off";
                    break;
                case 6:
                    cellFive = "SLT Assigned";
                    break;
                case 7:
                    cellFive = "SLT Signed Off";
                    break;
                case 8:
                    cellFive = "Completed";
                    break;
                case 9:
                    cellFive = "Not Approved";
                    break;
                case 10:
                    cellFive = "Converted to Job Offer";
                    break;
                case 99:
                    cellFive = "Inactive";
                    break;
            }
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

        private void GetRequesterData(int id)
        {
            // PersonAliasId is used
            var rockContext = new RockContext();
            var personAliasService = new PersonAliasService(rockContext);
            var personAlias = personAliasService.Get(id);

            cellOne = personAlias.Person.FullName;
        }

        private void GetJobTitle(int id)
        {
            var jtQry = new DefinedValueService(new RockContext()).Queryable();
            jtQry = jtQry.Where(row => row.Id == id);
            foreach (var qRow in jtQry)
            {
                cellTwo = qRow.Value; ;
            }
        }

        private void GetCampusName(int id)
        {
            var cQry = new CampusService(new RockContext()).Queryable();
            cQry = cQry.Where(row => row.Id == id);
            foreach (var qRow in cQry)
            {
                cellFour = qRow.Name;
            }
        }

        
        #endregion
    }
}