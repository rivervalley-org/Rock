using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

using org.rivervalley.GLFunds.Data;
using org.rivervalley.GLFunds.Model;

using Rock;
using Rock.Constants;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;
using Rock.Attribute;

namespace RockWeb.Plugins.org_rivervalley.MAP.Other
{
    [DisplayName( "MAP Conversion" )]
    [Category( "org_rivervalley > MAP" )]
    [Description( "MAP Table Conversion" )]

    public partial class MAPConversion : Rock.Web.UI.RockBlock
    {
        #region Fields

        private int personId;
        private bool isMember;
        private string personName;
        private Person groupMember;
        private Person spouse;
        private string lastName;
        private string nickName;

        #endregion


        #region Base Control Methods

        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );
        }

        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );
            lOutputString.Text = "";
            //ProcessGroupAddTo(267607);         
            //ProcessGroupMAP(291959); 
            //ProcessGroupAdvocates(292625);
            CheckMAPDuplicates(292625);
        }

        #endregion

        #region Events

        #endregion

        #region Methods

        protected void ProcessGroupAddTo(int groupId)
        {
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == groupId);

            foreach (var qRow in qry)
            {
                GetRockPersonDetail(qRow.PersonId);
                isMember = false;
                CheckMemberStatus(personId);
                lOutputString.Text += "<br>" + personId + " | " + personName + " | " + isMember;
                if (isMember == false)
                {
                    AddToGroup(personId);
                }                
            }
        }

        protected void ProcessGroupAdvocates(int groupId)
        {
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == groupId);

            foreach (var qRow in qry)
            {
                GetRockPersonDetail(qRow.PersonId);
                lOutputString.Text += "<br>" + personId + " | " + personName;

                var rockContext = new RockContext();
                groupMember = new PersonService(rockContext).Get(personId);
                groupMember.LoadAttributes(rockContext);
                groupMember.SetAttributeValue("MAPAdvocateType", "1");
                groupMember.SetAttributeValue("MAPAdvocateApplicationStatus", "Active");
                groupMember.SetAttributeValue("MAPAdvocateApplicationState", "Approved");
                //groupMember.SaveAttributeValues();
                
            }
        }

        protected void CheckMAPDuplicates(int groupId)
        {
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == groupId);

            foreach (var qRow in qry)
            {
                GetRockPersonDetail(qRow.PersonId);
                lOutputString.Text += "<br><b>" + personId + " | " + personName + "</b>";

                var pQry = new PersonService(new RockContext()).Queryable();
                pQry = pQry
                    .Where(a => a.LastName.Contains(lastName) )
                    .Where(a => a.NickName.StartsWith(nickName))
                    .OrderBy(x => x.FirstName); ;
                foreach (var row in pQry)
                {
                    lOutputString.Text += "<br>----------- " + row.FullName;
                }
                
            }
        }

        protected void ProcessGroupMAP(int groupId)
        {            
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == groupId);

            foreach (var qRow in qry)
            {               
                GetRockPersonDetail(qRow.PersonId);                                               
                
                var rockContext = new RockContext();
                groupMember = new PersonService(rockContext).Get(personId);
                groupMember.LoadAttributes(rockContext);
                int? married = groupMember.MaritalStatusValueId;
                lOutputString.Text += " MS " + married;
                /*
                if (married == 144) // single
                {
                    //lOutputString.Text += "<br>" + personId + " | " + personName;
                    PersonAliasService personAliasService = new PersonAliasService(new RockContext());
                    var priPerson = personAliasService.Queryable().FirstOrDefault(p => p.PersonId == personId);
                    groupMember.SetAttributeValue("MAPPrimaryApplicant", priPerson.Guid);
                    groupMember.SetAttributeValue("MAPCandidateType", "Single");
                    groupMember.SetAttributeValue("MAPCandidateApplicationStatus", "Active");
                    groupMember.SetAttributeValue("MAPCandidateApplicationState", "InProcess");
                    //groupMember.SaveAttributeValues();
                }
                */
                if (married == 143)
                {                    
                    spouse = groupMember.GetSpouse(rockContext);
                    if (spouse != null)
                    {
                        lOutputString.Text += "<br>" + personId + " | " + personName;
                        lOutputString.Text += " Married " + spouse.Id + " " + spouse.FullName ;
                        PersonAliasService personAliasService = new PersonAliasService(new RockContext());
                        int sPersonId = spouse.Id;
                        var priPerson = personAliasService.Queryable().FirstOrDefault(p => p.PersonId == personId);
                        var secPerson = personAliasService.Queryable().FirstOrDefault(p => p.PersonId == sPersonId);
                        groupMember.SetAttributeValue("MAPPrimaryApplicant", priPerson.Guid);
                        groupMember.SetAttributeValue("MAPSecondaryApplicant", secPerson.Guid);                        
                        groupMember.SetAttributeValue("MAPCandidateType", "Married");
                        groupMember.SetAttributeValue("MAPCandidateApplicationStatus", "Active");
                        groupMember.SetAttributeValue("MAPCandidateApplicationState", "InProcess");
                        //groupMember.SaveAttributeValues();

                        // need to set all variables for spouse
                        spouse = new PersonService(rockContext).Get(sPersonId);
                        spouse.LoadAttributes(rockContext);
                        spouse.SetAttributeValue("MAPPrimaryApplicant", priPerson.Guid);
                        spouse.SetAttributeValue("MAPSecondaryApplicant", secPerson.Guid);
                        spouse.SetAttributeValue("MAPCandidateType", "Married");
                        spouse.SetAttributeValue("MAPCandidateApplicationStatus", "Active");
                        spouse.SetAttributeValue("MAPCandidateApplicationState", "InProcess");
                        //spouse.SaveAttributeValues();


                    }
                }              

            }
        }

        protected void GetRockPersonDetail(int id)
        {            

            var rockContext = new RockContext();
            var qry = new PersonService(rockContext).Queryable();
            qry = qry.Where(a => a.Id == id);
            foreach (var row in qry)
            {
                personId = row.Id;
                personName = row.FullName;
                lastName = row.LastName;
                string nName = row.NickName;
                nickName = nName.Substring(0, 1);
            }
        }

        protected void AddToGroup(int personId)
        {
            var rockContext = new RockContext();
            var service = new GroupMemberService(rockContext);
            var groupMember = new GroupMember();
            service.Add(groupMember);
            groupMember.GroupId = 292625;
            groupMember.PersonId = personId;
            groupMember.GroupRoleId = 163;
            rockContext.SaveChanges();
        }

        protected void CheckMemberStatus(int pId)
        {
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == 291959 && row.PersonId == pId);

            foreach (var qRow in qry)
            {
                isMember = true;
            }
        }

        protected void CheckMarriedStatus()
        {

        }

        #endregion
    }
}