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

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.Utility
{
    [DisplayName("Missionary Utility Buttons")]
    [Category("org_rivervalley > Utility")]
    [Description("Will update missionary data")]
    [IntegerField("Group Id", "Group Id for the missionary or missionary organization to be added to.", false, 0)]
    [IntegerField("Group Id 2", "Group Id for the missionary to the Online Contribution Receipt for Missionary Group.", false, 0)]

    public partial class MissionaryUtilityButtons : Rock.Web.UI.RockBlock
    {
        #region Fields

        private Person cPerson = null;
        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private int familyId;
        private Person fPerson;
        private PersonAlias pAlias;
        private Group mGroup;
        //private GroupMember gmGroup;
        private FinancialAccount fAccount;
        private bool isMember;
        private int avId;
        private DateTime startDate = new DateTime(1900, 1, 1);
        private DateTime endDate = new DateTime(1900, 1, 1);

        #endregion

        #region Base Control Methods

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);            
        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);
            lOutputString.Text = "";
        }

        #endregion

        #region Events

        protected void btnDoNotMail_Click(object sender, EventArgs e)
        {
            string personId = PageParameter("PersonId");
            if (!string.IsNullOrWhiteSpace(personId))
            {
                var id = Int32.Parse(personId);
                var rockContext = new RockContext();
                cPerson = new PersonService(rockContext).Get(id);
                GetFamilyId();
                GetFamilyMembers();
                lOutputString.Text = "Do Not Mail Attributes Updated";
                lOutputString.Visible = true;
            }
            else
            {
                lOutputString.Text = "An error has occurred in processing your request";
                lOutputString.Visible = true;
            }
        }

        protected void btnAddMissionary_Click(object sender, EventArgs e)
        {
            string personId = PageParameter("PersonId");
            if (!string.IsNullOrWhiteSpace(personId))
            {
                var id = Int32.Parse(personId);
                var rockContext = new RockContext();
                cPerson = new PersonService(rockContext).Get(id);
                // get block variable for proper group id
                int groupId = Convert.ToInt32(GetAttributeValue("GroupId"));
                if(groupId > 0)
                {
                    mGroup = new GroupService(new RockContext()).Get(groupId);

                    isMember = false;
                    CheckMemberStatus(groupId, id);
                    if (isMember)
                    {
                        lOutputString.Text = cPerson.FullName + " already part of group " + mGroup.Name;
                        lOutputString.Visible = true;
                    }
                    else
                    {
                        var service = new GroupMemberService(rockContext);
                        var groupMember = new GroupMember();
                        service.Add(groupMember);
                        groupMember.GroupId = groupId;
                        groupMember.PersonId = id;
                        groupMember.GroupRoleId = 163;
                        rockContext.SaveChanges();

                        lOutputString.Text = cPerson.FullName + " was added to group " + mGroup.Name;
                        lOutputString.Visible = true;

                        // update missionary state to Approved status
                        cPerson.LoadAttributes(rockContext);
                        cPerson.SetAttributeValue("MissionaryState", "Approved");
                        cPerson.SaveAttributeValues();
                    }
                }
                else
                {
                    lOutputString.Text = "An error has occurred in processing your request. Add a block 'Group Id' attribute.";
                    lOutputString.Visible = true;
                }
            }
            else
            {
                lOutputString.Text = "An error has occurred in processing your request";
                lOutputString.Visible = true;
            }
        }

        protected void btnAddContribution_Click(object sender, EventArgs e)
        {
            string personId = PageParameter("PersonId");
            if (!string.IsNullOrWhiteSpace(personId))
            {
                var id = Int32.Parse(personId);
                var rockContext = new RockContext();
                cPerson = new PersonService(rockContext).Get(id);
                // get block variable for proper group id
                int groupId = Convert.ToInt32(GetAttributeValue("GroupId2"));
                if (groupId > 0)
                {
                    mGroup = new GroupService(new RockContext()).Get(groupId);

                    isMember = false;
                    CheckMemberStatus(groupId, id);
                    if (isMember)
                    {
                        lOutputString.Text = cPerson.FullName + " already part of group " + mGroup.Name;
                        lOutputString.Visible = true;
                    }
                    else
                    {
                        var service = new GroupMemberService(rockContext);
                        var groupMember = new GroupMember();
                        service.Add(groupMember);
                        groupMember.GroupId = groupId;
                        groupMember.PersonId = id;
                        groupMember.GroupRoleId = 34; //163;
                        rockContext.SaveChanges();

                        lOutputString.Text = cPerson.FullName + " was added to group " + mGroup.Name;
                        lOutputString.Visible = true;

                        
                    }
                }
                else
                {
                    lOutputString.Text = "An error has occurred in processing your request. Add a block 'Group Id' attribute.";
                    lOutputString.Visible = true;
                }
            }
            else
            {
                lOutputString.Text = "An error has occurred in processing your request";
                lOutputString.Visible = true;
            }
        }

        protected void btnFeatured_Click(object sender, EventArgs e)
        {
            string personId = PageParameter("PersonId");
            if (!string.IsNullOrWhiteSpace(personId))
            {
                var id = Int32.Parse(personId);
                int pAliasId;
                var rockContext = new RockContext();
                cPerson = new PersonService(rockContext).Get(id);
                pAliasId = cPerson.PrimaryAliasId ?? default(int);
                pAlias = new PersonAliasService(rockContext).Get(pAliasId);
                Guid guid;
                guid = pAlias.Guid;
                string paGuid = guid.ToString();
                avId = 0;
                EntityAttributes(3671, paGuid);
                if(avId > 0)
                {
                    hfFinancialAccountId.Value = avId.ToString();
                    fAccount = new FinancialAccountService(rockContext).Get(avId);
                    fAccount.LoadAttributes(rockContext);

                    if (fAccount.GetAttributeValue("FeatureStartDate") != "")
                    {
                        startDate = Convert.ToDateTime(fAccount.GetAttributeValue("FeatureStartDate"));
                        dpStartDate.Text = startDate.ToShortDateString();
                    }
                    if (fAccount.GetAttributeValue("FeatureStopDate") != "")
                    {
                        endDate = Convert.ToDateTime(fAccount.GetAttributeValue("FeatureStopDate"));
                        dpEndDate.Text = endDate.ToShortDateString();
                    }

                    lOutputStringFeatured.Text = "Prefilled dates reflect previously entered data.";
                    lOutputStringFeatured.Visible = true;

                    pnlButtons.Visible = false;
                    pnlFeatured.Visible = true;
                }
                else
                {
                    pnlButtons.Visible = true;
                    pnlFeatured.Visible = false;
                    lOutputString.Text = "This person does not have an account set up. Contact administrator.";
                    lOutputString.Visible = true;
                }
            }
            else
            {
                lOutputStringFeatured.Text = "An error has occurred in processing your request";
                lOutputStringFeatured.Visible = true;
            }
        }
        protected void btnFeaturedSave_Click(object sender, EventArgs e)
        {
            Boolean formError = false;
            avId = int.Parse(hfFinancialAccountId.Value);

            if (dpStartDate.SelectedDate.HasValue)
            {
                startDate = DateTime.Parse(dpStartDate.SelectedDate.ToString());
            }
            else
            {
                formError = true;
                lOutputStringFeatured.Text = "Start date is blank";
            }

            if (dpEndDate.SelectedDate.HasValue)
            {
                endDate = DateTime.Parse(dpEndDate.SelectedDate.ToString());
            }
            else
            {
                formError = true;
                lOutputStringFeatured.Text += "<br>End date is blank";
            }
            if (formError)
            {
                pnlFeatured.Visible = true;
                pnlButtons.Visible = false;
                lOutputStringFeatured.Visible = true;
            }
            else
            {
                string personId = PageParameter("PersonId");
                if (!string.IsNullOrWhiteSpace(personId))
                {
                    var id = Int32.Parse(personId);
                    var rockContext = new RockContext();
                    cPerson = new PersonService(rockContext).Get(id);
                    fAccount = new FinancialAccountService(rockContext).Get(avId);
                    fAccount.LoadAttributes(rockContext);

                    fAccount.SetAttributeValue("FeatureStartDate", startDate);
                    fAccount.SetAttributeValue("FeatureStopDate", endDate);
                    fAccount.SaveAttributeValues();

                    pnlButtons.Visible = true;
                    pnlFeatured.Visible = false;

                    lOutputString.Text = "Dates Saved";
                    lOutputString.Visible = true;
                }
                else
                {
                    lOutputStringFeatured.Text = "An error has occurred in processing your request";
                    lOutputStringFeatured.Visible = true;
                }
            }
        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            pnlButtons.Visible = true;
            pnlFeatured.Visible = false;
        }

        #endregion

        #region Methods

        protected void GetFamilyId()
        {
            string qryString = "";
            qryString = qryString += "SELECT g.Id ";
            qryString = qryString += "FROM[Group] g ";
            qryString = qryString += "INNER JOIN GroupMember gm ON gm.GroupId = g.Id ";
            qryString = qryString += "WHERE gm.PersonId = " + cPerson.Id + " ";
            qryString = qryString += "AND g.GroupTypeId = 10";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                familyId = rdr.GetInt32(0);
            }
            conn.Close();
        }
        protected void GetFamilyMembers()
        {
            string qryString = "";
            qryString = qryString += "SELECT PersonId ";
            qryString = qryString += "FROM GroupMember ";
            qryString = qryString += "WHERE GroupId = " + familyId;

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                var rockContext = new RockContext();
                fPerson = new PersonService(rockContext).Get(rdr.GetInt32(0));                
                fPerson.LoadAttributes(rockContext);                
                fPerson.SetAttributeValue("Arena-35-504", "true");
                fPerson.SaveAttributeValues();
            }
            conn.Close();
        }

        protected void GetAdultFamilyMembers()
        {
            string qryString = "";
            qryString = qryString += "SELECT PersonId ";
            qryString = qryString += "FROM GroupMember ";
            qryString = qryString += "WHERE GroupId = " + familyId;
            qryString = qryString += "AND GroupRoleId = 3";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                var rockContext = new RockContext();
                fPerson = new PersonService(rockContext).Get(rdr.GetInt32(0));
                fPerson.LoadAttributes(rockContext);
                fPerson.SetAttributeValue("Arena-35-504", "true");
                fPerson.SaveAttributeValues();
            }
            conn.Close();
        }

        protected void CheckMemberStatus(int grpId, int pId)
        {
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == grpId && row.PersonId == pId);

            foreach (var qRow in qry)
            {
                isMember = true;
            }
        }

        protected void EntityAttributes(int attr, string pGuid)
        {
            string qryString = "";
            qryString = qryString += "SELECT EntityId ";
            qryString = qryString += "FROM AttributeValue ";  
            qryString = qryString += "WHERE AttributeId = 3671 ";
            qryString = qryString += "AND Value LIKE '" + pGuid + "'";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                avId = rdr.GetInt32(0);
            }
            conn.Close();
        }


        #endregion
    }
}