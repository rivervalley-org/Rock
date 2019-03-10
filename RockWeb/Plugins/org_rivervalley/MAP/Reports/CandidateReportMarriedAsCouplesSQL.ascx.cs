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

    [DisplayName("MAPer Report - Married As Couples (SQL)")]
    [Category("org_rivervalley > MAP")]
    [Description("This report lists Advocates and their assigned MAPers")]

    public partial class CandidateReportMarriedAsCouplesSQL : Rock.Web.UI.RockBlock
    {
        #region Fields

        private Person cPerson = null;
        private Person sPerson = null;
        private int personId;
        private int primaryId;
        private int secondaryId;
        private string CandidateName;
        //private string candidateState;
        //private string candidateStatus;
        private string candidateType;

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;

        #endregion

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                GetData();
            }
        }

        private void GetData()
        {
            // Using SQL rather than LINQ for joining tables and sorting...
            string qryString = "SELECT av.EntityId,av.Value FROM Person p LEFT OUTER JOIN AttributeValue av on p.Id = av.EntityId WHERE p.Id = av.EntityId AND av.AttributeId = 3777 AND av.Value != '' ORDER BY p.LastName";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                personId = rdr.GetInt32(0);
                candidateType = rdr.GetString(1);
                var rockContext = new RockContext();
                cPerson = new PersonService(rockContext).Get(personId);
                cPerson.LoadAttributes(rockContext);
                string primaryGuid = cPerson.GetAttributeValue("MAPPrimaryApplicant");
                string state = cPerson.GetAttributeValue("MAPCandidateApplicationState");
                string status = cPerson.GetAttributeValue("MAPCandidateApplicationStatus");
                // MAP Primary/Secondary Applicant are guid's, so need to turn that into a PersonId
                var paGuid = new Guid(primaryGuid);
                GetGuidApplicant(paGuid, "P");

                if (candidateType == "Married")
                {
                    string secondaryGuid = cPerson.GetAttributeValue("MAPSecondaryApplicant");
                    if (secondaryGuid != null)
                    {
                        var saGuid = new Guid(secondaryGuid);
                        GetGuidApplicant(saGuid, "S");
                        // Will not write out secondary record
                        if (primaryId == personId)
                        {
                            sPerson = new PersonService(rockContext).Get(secondaryId);
                            CandidateName = cPerson.LastName + ", " + cPerson.NickName + " & " + sPerson.NickName;
                            WriteOutputString(CandidateName, candidateType, status, state);
                        }
                    }
                }
                else
                {
                    CandidateName = cPerson.LastName + ", " + cPerson.NickName;
                    WriteOutputString(CandidateName, candidateType, status, state);
                }
                    
            }
            conn.Close();
        }

        private void GetGuidApplicant(Guid guidString, string type)
        {            
            var qry = new PersonAliasService(new RockContext()).Queryable();
            qry = qry.Where(row => row.Guid == guidString);
            foreach (var qRow in qry)
            {
                if (type == "P")
                {
                    primaryId = qRow.PersonId;
                }
                if (type == "S")
                {
                    secondaryId = qRow.PersonId;
                }

            }
        }

        private void WriteOutputString(string cellOne, string cellTwo, string cellThree, string cellFour)
        {
            lOutputString.Text += "<tr>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellOne + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellTwo + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellThree + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellFour + "</td>";
            lOutputString.Text += "</tr>";

        }




    }
}