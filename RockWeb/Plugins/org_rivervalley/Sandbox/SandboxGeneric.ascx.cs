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
using System.Text.RegularExpressions;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.Sandbox
{
    [DisplayName("Sandbox Generic")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Sandbox Generic Test")]

    public partial class SandboxGeneric : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private Guid emailRecipient;
        private int ePerson;
        private string qsGuid;
        private Person sPerson;
        private Rock.Model.Group fGroup;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            //ProcessLifeGroups(1);
            //ProcessDefinedValue();
            //GetPerson();
            //GetAliasPerson();
            //QSRead();
            //SQLRead();            
            //EntityAttributes(7601,26);
            //TestAttributeSave();
            //SetSelectedCampus("Minneapolis"); 
            //GetGroup100246();
            //arenaSQL();
            //GetCampusEmailPerson(9);
            //AddTag();        
            //LoadGroupMembersDropDownValues(271277);            
            PersonAliasTest();
        }

        #endregion

        #region Events

        #endregion

        #region Methods

        private void LoadGroupMembersDropDownValues(int groupId)
        {
            string qryString = "";
            qryString = qryString + "SELECT p.Id, p.NickName + ' ' + p.LastName AS Text, gm.GroupMemberStatus ";
            qryString = qryString + "FROM GroupMember gm ";
            qryString = qryString + "LEFT JOIN Person p ON p.Id = gm.PersonId ";
            qryString = qryString + "WHERE gm.GroupId = " + groupId;

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                string textString;
                string gmStatus = "";
                if (rdr.GetInt32(2) == 0)
                {
                    gmStatus = " (Inactive)";
                }
                if (rdr.GetInt32(2) == 1)
                {
                    gmStatus = " (Active)";
                }
                if (rdr.GetInt32(2) == 2)
                {
                    gmStatus = " (Pending)";
                }

                textString = rdr.IsDBNull(1) ? " No Name " : rdr.GetString(1);
                textString = textString + gmStatus;
                lOutputString.Text += "<br> " + rdr.GetInt32(0) + " | " + textString;
            }
            conn.Close();
        }

        protected void TestAttributeSave()
        {
            DateTime today = DateTime.Now;

            AttributeValue transactions;
            var dataContext = new RockContext();
            var service = new AttributeValueService(dataContext);

            transactions = new AttributeValue();

            service.Add(transactions);
            transactions.AttributeId = 7603;
            transactions.EntityId = 26;
            transactions.Value = "myValueTwo26";
            transactions.CreatedDateTime = today;
            transactions.ModifiedDateTime = today;
            transactions.CreatedByPersonAliasId = 58951;
            transactions.ModifiedByPersonAliasId = 58591;
            dataContext.SaveChanges();
            lOutputString.Text = "Record Saved? ";
        }

        protected void EntityAttributes(int attr, int entity)
        {
            var avQry = new AttributeValueService(new RockContext()).Queryable();
            avQry = avQry.Where(row => row.AttributeId == attr && row.EntityId == entity);

            foreach (var qRow in avQry)
            {
                lOutputString.Text = "<br> " + qRow.Value;
            }
        }

        private void ProcessDefinedValue()
        {
            int id = 6148;
            var definedValue = new DefinedValueService(new RockContext()).Get(id);
            definedValue.LoadAttributes();
            //definedValue.SetAttributeValue("DatePrayedFor", datePrayedFor);
            //definedValue.SaveAttributeValues();
            lOutputString.Text += "Attribute 7932 " + definedValue.GetAttributeValue("DatePrayedFor");
            GetVirtueName(id);
        }

        protected void GetVirtueName(int id)
        {
            var qry = new DefinedValueService(new RockContext()).Queryable();
            qry = qry.Where(row => row.Id == id);

            foreach (var qRow in qry)
            {
                lOutputString.Text += "Name " + qRow.Value;
            }
        }

        protected void GetGroup100246()
        {
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == 100246);

            foreach (var qRow in qry)
            {
                lOutputString.Text += "<br>Name " + qRow.PersonId;
            }
        }

        protected void SQLRead()
        {
            string qryString = "SELECT TOP 100 * FROM PersonAlias WHERE PersonId = 94315 ORDER BY PersonId";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            int personId;
            int aliasId;
            int counter = 0;
            while (rdr.Read())
            {
                personId = rdr.GetInt32(2);
                aliasId = rdr.GetInt32(3);

                if (personId != aliasId)
                {
                    lOutputString.Text += "<br>" + rdr.GetInt32(0) + " | " + rdr.GetInt32(2) + " | " + rdr.GetInt32(3);
                    counter++;
                }
            }
            conn.Close();
            lOutputString.Text += "<br>counter: " + counter;
        }

        protected void QSRead()
        {
            qsGuid = Request.QueryString["Id"];

            if (qsGuid != null)
            {
                string qryString;

                var rockContext = new RockContext();
                qryString = "SELECT PersonId FROM PersonAlias WHERE AliasPersonGuid LIKE '" + qsGuid + "'";
                SqlConnection conn = new SqlConnection(connString);
                conn.Open();
                SqlCommand cmd = new SqlCommand(qryString, conn);
                cmd.CommandType = System.Data.CommandType.Text;
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    sPerson = new PersonService(rockContext).Get(rdr.GetInt32(0));
                }
                conn.Close();
                lOutputString.Text = sPerson.FullName;
            }
        }

        private void SetSelectedCampus(string selectedValue)
        {
            var cQry = new CampusService(new RockContext()).Queryable().AsNoTracking();
            cQry = cQry.Where(row => row.Name == selectedValue);
            foreach (var qRow in cQry)
            {
                lOutputString.Text += "ID: " + qRow.Id;
            }
        }

        private void GetPerson()
        {
            var rockContext = new RockContext();
            var service = new PersonService(rockContext);
            sPerson = new PersonService(rockContext).Get(16206);

            sPerson.LoadAttributes(rockContext);
            lOutputString.Text = "Person: " + sPerson.FullName;
            lOutputString.Text += "<br>Record Status: " + sPerson.RecordStatusValue;
            lOutputString.Text += "<br>Connection Status: " + sPerson.ConnectionStatusValue;
            lOutputString.Text += "<br>Attribute Active - HR : " + sPerson.GetAttributeValue("Active");
            lOutputString.Text += "<br>Attribute Church Employee : ";
            Guid aGuid = new Guid(sPerson.GetAttributeValue("Arena-67-88"));
            GetDefinedValue(aGuid);
            lOutputString.Text += "<br>Attribute Security Class : ";
            Guid scGuid = new Guid(sPerson.GetAttributeValue("SecurityClass"));
            GetDefinedValue(scGuid);
            var campus = new PersonService(new RockContext()).Get(sPerson.Id).GetCampus();
            lOutputString.Text += "<br>Campus " + campus;
            lOutputString.Text += "<br>Campus ID " + campus.Id;
            lOutputString.Text += "<br>Person " + sPerson.FullName;
            lOutputString.Text += "<br>Person Alias " + sPerson.PrimaryAliasId;

        }

        private void GetAliasPerson()
        {
            int paId = 94325;
            var rockContext = new RockContext();
            var personAliasService = new PersonAliasService(rockContext);
            var personAlias = personAliasService.Get(paId);
            lOutputString.Text += "<hr><br> Get PersonAlias - PersonAliasId " + personAlias.Id;
            lOutputString.Text += "<br> Get PersonAlias - PersonId " + personAlias.PersonId;
            lOutputString.Text += "<br>PersonName " + personAlias.Person;

            /*
            var qry = new PersonAliasService(new RockContext()).Queryable();
            qry = qry.Where(row => row.Id == paId);

            foreach (var qRow in qry)
            {
                lOutputString.Text += "<hr><br>qRow Id " + qRow.PersonId;
                var service = new PersonService(rockContext);
                sPerson = new PersonService(rockContext).Get(qRow.PersonId);
                lOutputString.Text += "<hr><br>name " + sPerson.FullName;
            }
            */

        }

        private void GetDefinedValue(Guid aGuid)
        {
            var qry = new DefinedValueService(new RockContext()).Queryable();
            qry = qry.Where(row => row.Guid == aGuid);

            foreach (var qRow in qry)
            {
                lOutputString.Text += qRow.Value;
            }
        }

        private void ProcessLifeGroups(int count)
        {
            int campusId = 1;

            //String prayerCardType = "Life Groups";
            var rockContext = new RockContext();
            string qryString = "SELECT TOP 1 * FROM _org_rivervalley_vPrayerLifeGroup WHERE CampusId = " + campusId + " ORDER BY DateLastPrayedFor, GroupId";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                fGroup = new GroupService(rockContext).Get(65153);
                //fGroup = new GroupService(rockContext).Get(rdr.GetInt32(0));
                //BuildPersonPrayerCardNames(cPerson.Id);

                fGroup.LoadAttributes(rockContext);
                lOutputString.Text += "<br>Group Id " + fGroup.Id;
                lOutputString.Text += "<br>Group Desc " + fGroup.Description;
                lOutputString.Text += "<br>Group Name from View  " + rdr.GetString(1);
                lOutputString.Text += "<br>Group LPF " + fGroup.GetAttributeValue("DateLastPrayedFor-GRP");

                //fGroup.SetAttributeValue("DateLastPrayedfor", datePrayedFor);
                //fGroup.SaveAttributeValues();
                //BuildPrayerDateRecord(0, 0, prayerCardType, prayerCardNames, datePrayedFor, campusId);
            }
            conn.Close();
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
                ePerson = qRow.PersonId;
            }

            sPerson = new PersonService(rockContext).Get(ePerson);
            lOutputString.Text += "EPerson " + sPerson.FullName;

        }

        private void AddTag()
        {
            var rockContext = new RockContext();
            sPerson = new PersonService(rockContext).Get(58942);
            var personAliasService = new PersonAliasService(rockContext);
            int id = sPerson.PrimaryAliasId ?? default(int);
            var personAlias = personAliasService.Get(id);
            string myGuid = personAlias.AliasPersonGuid.ToString();

            Guid paGuid = Guid.Empty;
            try
            {
                paGuid = Guid.Parse(myGuid);
            }
            catch (Exception)
            {

            }

            // check if person has tag
            string qryString = "";
            qryString = qryString + "SELECT * ";
            qryString = qryString + "FROM TaggedItem ";
            qryString = qryString + "WHERE EntityGuid LIKE '" + personAlias.AliasPersonGuid + "'";

            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            int counter = 0;
            while (rdr.Read())
            {
                counter++;
            }
            conn.Close();

            if (counter > 0)
            {
                lOutputString.Text += "<br>Already in the tag";
            }
            else
            {
                TagService tagService = new TagService(rockContext);
                Tag orgTag = tagService.Queryable().Where(t => t.Name == "Intern" && t.EntityTypeId == 15).FirstOrDefault();

                TaggedItem taggedPerson = new TaggedItem();
                taggedPerson.Tag = orgTag;
                taggedPerson.EntityTypeId = 15;
                taggedPerson.EntityGuid = paGuid;
                orgTag.TaggedItems.Add(taggedPerson);
                rockContext.SaveChanges();

                lOutputString.Text += "<br>" + orgTag.Id;

            }

            lOutputString.Text += "<br>" + sPerson.FullName;
            lOutputString.Text += "<br>" + sPerson.PrimaryAliasId;
            lOutputString.Text += "<br>" + paGuid;
        }

        protected void PersonAliasTest()
        {
            // use the PersonAliasService
            var rockContext = new RockContext();
            var personAliasService = new PersonAliasService(rockContext);

            // get the PersonAlias record using one of their known aliasIds
            var personAlias = personAliasService.GetByAliasId(78496);

            // the person's Person record
            var person = personAlias.Person;
            lOutputString.Text += "<br>" + person.FullName;

            lOutputString.Text += "<br>Person Alias Id: " + personAlias.Id + "<br>Person Alias Person Id: " + personAlias.PersonId + "<br>Person Alias PersonAliasId: " + personAlias.AliasPersonId;

            // Get data with alias Id:            
            var pAlias = personAliasService.Get(78505);
            lOutputString.Text += "<br> Get data with alias Id: " + pAlias.Person.FullName;
        }


        #endregion
    }
}