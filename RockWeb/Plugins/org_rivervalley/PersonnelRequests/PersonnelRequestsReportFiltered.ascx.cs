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
    [DisplayName("Personnel Requests Report Filtered")]
    [Category("org_rivervalley > PersonnelRequests")]
    [Description("Report on Requests but displays only permitted records based on current user ")]

    public partial class PersonnelRequestsReportFiltered : Rock.Web.UI.RockBlock
    {
        #region Fields

        private DateTime today = DateTime.Now;
        //private Person person;
        private Person currentPerson = null;
        private PersonnelRequest currentRequest = null;
        private int credentials = 0;
        private bool isREQ = false;
        private bool isDS = false;
        private bool isDLS = false;
        private bool isSLT = false;
        private bool isHR = false;

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
            currentPerson = CurrentPerson;
            var rockContext = new RockContext();
            currentPerson = new PersonService(rockContext).Get(104204); // Clinton Allen
            lDebugString.Text = currentPerson.FullName;
            GetRequestRecords();
        }


        #endregion

        #region Events

        #endregion

        #region Methods

        private void GetRequestRecords()
        {
            var dataContext = new RockContext();
            var prQry = new PersonnelRequestService(new RockContext()).Queryable();
            prQry = prQry.Where(row => row.Id > 0 );
            var piQrySorted = prQry.OrderBy(a => a.Id );
            foreach (var qRow in piQrySorted)
            {
                lDebugString.Text += "<hr>";
                ClearCells();
                currentRequest = new PersonnelRequestService(dataContext).Get(qRow.Id);                
                ClearCredentials();
                CheckCredentials();
                cellSix = "SHOW";
                if (credentials == -1)
                {
                    cellSix = "HIDE";
                }
                GetRequesterData(qRow.RequestingPersonAliasId);
                GetJobTitle(qRow.JobTitleValueId);
                cellThree = qRow.RequestDate.ToShortDateString();
                GetCampusName(qRow.RequestingCampusId);
                GetStatus(qRow.ApprovalStatus);
                string link = "/PersonnelRequestDataEdit?id=" + qRow.Guid;
                
                //cellSix = "<a href=" + link + "><i class='fa fa-edit'></i></a>";
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

        private void ClearCredentials()
        {
            credentials = 0;
            isREQ = false;
            isDS = false;
            isDLS = false;
            isSLT = false;
            isHR = false;
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

        protected void CheckCredentials()
        {
            int dsId = currentRequest.ApproverOnePersonAliasId;
            int dlsId = currentRequest.ApproverTwoPersonAliasId;
            int sltId = currentRequest.ApproverThreePersonAliasId;

            if (currentPerson.PrimaryAliasId == currentRequest.ApproverOnePersonAliasId)
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
            if (currentPerson.PrimaryAliasId == currentRequest.RequestingPersonAliasId)
            {
                isREQ = true;
            }

            if (isREQ == false && isDS == false && isDLS == false && isSLT == false && isHR == false)
            {
                credentials = -1;
            }
            lDebugString.Text += "Request: " + currentRequest.Id;
            lDebugString.Text += "<br>Is Requester: " + isREQ + " / " + currentPerson.Id + " alias " + currentPerson.PrimaryAliasId;
            lDebugString.Text += "<br>Is DS: " + isDS + " / " + dsId;
            lDebugString.Text += "<br>Is DLS :" + isDLS + " / " + dlsId;
            lDebugString.Text += "<br>Is SLT :" + isSLT + " / " + sltId;
            lDebugString.Text += "<br>Is HR: " + isHR;
        }

        #endregion
    }
}