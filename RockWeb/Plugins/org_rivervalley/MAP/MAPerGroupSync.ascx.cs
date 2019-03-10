using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.ComponentModel.Composition;
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
using Rock.Communication;


namespace RockWeb.Plugins.org_rivervalley.MAP
{
    [DisplayName("MAPer Group Sync")]
    [Category("org_rivervalley > MAP")]
    [Description("MAPer Group Sync - MAPer and Advocates")]

    public partial class MAPerGroupSync : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private int maperGroupId = 304885;
        private int advocateGroupId = 304886;
        private int mapersAdded = 0;
        private int mapersDeleted = 0;
        private int advocatesAdded = 0;
        private int advocatesDeleted = 0;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);
            pnlButtons.Visible = true;
            pnlComplete.Visible = false;
        }


        #endregion

        #region Events

        protected void btnGroupSync_Click(object sender, EventArgs e)
        {
            pnlButtons.Visible = false;
            pnlComplete.Visible = true;
            lDebugString.Text += "<br>MAPers<br> " ;
            GetActiveMAPers();
            GetGroupMembers(maperGroupId);
            lDebugString.Text += "<br>Advocates<br> ";
            GetActiveAdvocates();
            GetGroupMembers(advocateGroupId);
            lResultsString.Text = "Sync completed";
            lResultsString.Text += "<br>MAPers added to the group: " + mapersAdded;
            lResultsString.Text += "<br>MAPers deleted from the group: " + mapersDeleted;
            lResultsString.Text += "<br>Advocates added to the group: " + advocatesAdded;
            lResultsString.Text += "<br>Advocates deleted from the group: " + advocatesDeleted;
        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        #endregion

        #region Methods

        protected void GetActiveMAPers()
        {
            string qryString = " ";
            qryString += "SELECT p.Id,av.Value,p.LastName + ', ' + p.NickName ";
            qryString += "FROM Person p ";
            qryString += "LEFT OUTER JOIN AttributeValue av on p.Id = av.EntityId ";
            qryString += "WHERE p.Id = av.EntityId ";
            qryString += "AND av.AttributeId = 3834 ";
            qryString += "AND av.Value = 'Active' ";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            int counter = 0;
            bool gmCheck;
            while (rdr.Read())
            {
                counter++;
                gmCheck = CheckGroupStatus(maperGroupId, rdr.GetInt32(0));
                lDebugString.Text += "<br> " + rdr.GetString(2) + " " + rdr.GetInt32(0) + " | gmCheck= " + gmCheck;
                if (gmCheck == false)
                {
                    UpdateGroupMemberAdd(maperGroupId, rdr.GetInt32(0));
                }
            }
            conn.Close();
            lDebugString.Text += "<br>MAPer Count: " + counter;
        }

        protected void GetActiveAdvocates()
        {
            string qryString = " ";
            qryString += "SELECT p.Id,av.Value,p.LastName + ', ' + p.NickName ";
            qryString += "FROM Person p ";
            qryString += "LEFT OUTER JOIN AttributeValue av on p.Id = av.EntityId ";
            qryString += "WHERE p.Id = av.EntityId ";
            qryString += "AND av.AttributeId = 3884 ";
            qryString += "AND av.Value = 'Active' ";
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            int counter = 0;
            bool gmCheck;
            while (rdr.Read())
            {
                counter++;
                gmCheck = CheckGroupStatus(advocateGroupId, rdr.GetInt32(0));
                lDebugString.Text += "<br> " + rdr.GetString(2) + " " + rdr.GetInt32(0) + " | gmCheck= " + gmCheck;
                if (gmCheck == false)
                {
                    UpdateGroupMemberAdd(advocateGroupId, rdr.GetInt32(0));
                }
            }
            conn.Close();
            lDebugString.Text += "<br> " + counter;
        }

        protected bool CheckGroupStatus(int groupId, int gmId)
        {
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == groupId && row.PersonId == gmId);
            bool gmFound = false;
            foreach (var qRow in qry)
            {
                gmFound = true;
            }
            return gmFound;
        }

        protected void UpdateGroupMemberAdd(int groupId, int personId)
        {
            var rockContext = new RockContext();
            var service = new GroupMemberService(rockContext);
            var groupMember = new GroupMember();
            service.Add(groupMember);
            groupMember.GroupId = groupId;
            groupMember.PersonId = personId;
            groupMember.GroupRoleId = 163;
            rockContext.SaveChanges();
            if (groupId == maperGroupId)
            {
                mapersAdded++;
            }
            if (groupId == advocateGroupId)
            {
                advocatesAdded++;
            }

        }

        protected void GetGroupMembers(int groupId)
        {
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == groupId);

            bool maperFound = false;
            bool advocateFound = false;
            foreach (var qRow in qry)
            {
                if (groupId == maperGroupId)
                {
                    maperFound = CheckMAPerStatus(qRow.PersonId);
                    lDebugString.Text += "<br> " + qRow.PersonId + " | " + maperFound;
                    if (maperFound == false)
                    {
                        DeleteGroupMember(groupId, qRow.PersonId);
                    }
                }
                if (groupId == advocateGroupId)
                {
                    advocateFound = CheckAdvocateStatus(qRow.PersonId);
                    lDebugString.Text += "<br> " + qRow.PersonId + " | " + advocateFound;
                    if (advocateFound == false)
                    {
                        DeleteGroupMember(groupId, qRow.PersonId);
                    }
                }                               
            }
        }

        protected bool CheckMAPerStatus(int personId)
        {
            string qryString = " ";
            qryString += "SELECT p.Id ";
            qryString += "FROM Person p ";
            qryString += "LEFT OUTER JOIN AttributeValue av on p.Id = av.EntityId ";
            qryString += "WHERE p.Id = av.EntityId ";
            qryString += "AND av.AttributeId = " + 3834;
            qryString += "AND av.Value = 'Active' ";
            qryString += "AND p.Id = " + personId ;
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
                        
            bool maperCheck = false;
            while (rdr.Read())
            {
                maperCheck = true;    
            }
            conn.Close();
            return maperCheck;
        }

        protected bool CheckAdvocateStatus(int personId)
        {
            string qryString = " ";
            qryString += "SELECT p.Id ";
            qryString += "FROM Person p ";
            qryString += "LEFT OUTER JOIN AttributeValue av on p.Id = av.EntityId ";
            qryString += "WHERE p.Id = av.EntityId ";
            qryString += "AND av.AttributeId = " + 3884;
            qryString += "AND av.Value = 'Active' ";
            qryString += "AND p.Id = " + personId;
            SqlConnection conn = new SqlConnection(connString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            bool advocateCheck = false;
            while (rdr.Read())
            {
                advocateCheck = true;
            }
            conn.Close();
            return advocateCheck;
        }

        protected void DeleteGroupMember(int groupId, int personId)
        {
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == groupId && row.PersonId == personId);
            int id = 0;
            foreach (var qRow in qry)
            {
                id = qRow.Id;
            }

            GroupMember grpMember = null;
            var dataContext = new RockContext();
            var GroupMemberService = new GroupMemberService(dataContext);
            grpMember = GroupMemberService.Get(id);
            GroupMemberService.Delete(grpMember);
            dataContext.SaveChanges();
            if (groupId == maperGroupId)
            {
                mapersDeleted++;
            }
            if (groupId == advocateGroupId)
            {
                advocatesDeleted++;
            }
        }

        #endregion
    }
}