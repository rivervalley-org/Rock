using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

using Rock;
using Rock.Constants;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;
using Rock.Attribute;

namespace RockWeb.Plugins.org_rivervalley.MAP.Reports
{

    [DisplayName("Assigned Advocate Report")]
    [Category("org_rivervalley > MAP")]
    [Description("This report lists Advocates and their assigned Candidates")]

    public partial class AssignedAdvocateReport : Rock.Web.UI.RockBlock
    {
        #region Fields

        private Person advPerson = null;
        private Person candPerson = null;
        private int personId;
        //private int candidateId;
        private int currentAdvocate;
        private int pastAdvocate;
        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;

        #endregion

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                BindGrid();
            }
        }

        private void BindGrid()
        {
            var dataContext = new RockContext();
            var qry = new AttributeValueService(new RockContext()).Queryable();
            qry = qry.Where(row => row.AttributeId == 3953);
            var qrySorted = qry.OrderBy(a => a.Value);
            int counter = 0;
            pastAdvocate = 0;
            foreach (var qRow in qrySorted)
            {
                counter++;
                bool tryId = Int32.TryParse(qRow.Value, out personId);
                currentAdvocate = personId;
                if (personId > 0)
                {
                    if (currentAdvocate != pastAdvocate)
                    {
                        GetAdvocateData(personId);
                        if (qRow.EntityId != null)
                        {
                            int candId = qRow.EntityId ?? default(int);
                            GetCandidateData(candId);
                        }
                        pastAdvocate = currentAdvocate;
                    }
                    else
                    {
                        int candId = qRow.EntityId ?? default(int);
                        GetCandidateData(candId);
                    }
                }
                
            }
        }

        private void GetAdvocateData(int person)
        {
            var rockContext = new RockContext();
            advPerson = new PersonService(rockContext).Get(person);
            advPerson.LoadAttributes(rockContext);
            lOutputString.Text += "<tr>";
            lOutputString.Text += "<td class='grid-select-cell' style='text-align: left; '>" + advPerson.LastName + ", " + advPerson.NickName + "</td>";
            GetCampus(person);
            lOutputString.Text += "<td class='grid-select-cell' style='text - align: left; '>" + advPerson.GetAttributeValue("Arena-97-5138") + "</td>";
            lOutputString.Text += "<td class='grid-select-cell' style='text - align: left; '>" + advPerson.GetAttributeValue("MAPAdvocateMentorPreferences") + "</td>";            
            lOutputString.Text += "</tr>";
        }

        private void GetCandidateData(int person)
        {
            var rockContext = new RockContext();
            candPerson = new PersonService(rockContext).Get(person);
            lOutputString.Text += "<tr>";
            lOutputString.Text += "<td class='grid-select-cell' style='text-align: left; '></td>";
            lOutputString.Text += "<td colspan=3 class='grid-select-cell' style='text-align: left; '>" + candPerson.FullName + "</td>";
            lOutputString.Text += "</tr>";
        }

        private void GetCampus(int person)
        {
            string qryString = "SELECT c.Name FROM GroupMember gm LEFT OUTER JOIN[Group] on gm.GroupId = [Group].Id LEFT OUTER JOIN Campus c on c.Id = [Group].CampusId WHERE gm.PersonId =" + person + "AND[Group].GroupTypeId = 10 ";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                lOutputString.Text += "<td class='grid-select-cell' style='text-align: left; '>" + rdr.GetString(0) + "</td>";
            }
            conn.Close();
                
        }
    }
}