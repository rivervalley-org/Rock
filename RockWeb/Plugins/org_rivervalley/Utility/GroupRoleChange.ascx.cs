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
    [DisplayName("Update Group Member Role")]
    [Category("org_rivervalley > Utility")]
    [Description("Will update group roles")]
    
    public partial class GroupRoleChange : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private int groupId;
        private int groupMember;
        private int groupRole;
        private Group pageGroup = null;
        private GroupMember grpMember = null;

        #endregion

        #region Base Control Methods

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
            
        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                GetId();
                if (groupId > 0)
                {   
                    pnlButton.Visible = true;
                    pnlSelection.Visible = false;                    
                }
                else
                {
                    lOutputString.Visible = true;
                    lOutputString.Text = "There has been an error processing your request: Invalid Group Id";
                    btnRoleUpdate.Visible = false;
                }
            }
        }

        #endregion

        #region Events

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            groupId = int.Parse(hfGroupId.Value);
            string link = "~/page/1701?GroupId=" + groupId;
            Response.Redirect(link);        
        }

        protected void btnRoleUpdate_Click(object sender, EventArgs e)
        {
            groupId = int.Parse(hfGroupId.Value);
            LoadGroupMembersDropDownValues(groupId);
            LoadGroupRoleDropDownValues();
            pnlButton.Visible = false;
            pnlSelection.Visible = true;
        }

        protected void btnSelectionSave_Click(object sender, EventArgs e)
        {
            pnlButton.Visible = false;
            pnlSelection.Visible = false;
            pnlComplete.Visible = true;

            groupId = int.Parse(hfGroupId.Value);
            groupMember = int.Parse(ddGroupMember.Text);
            groupRole = int.Parse(ddRole.Text);

            var dataContext = new RockContext();
            var qry = new GroupMemberService(new RockContext()).Queryable();
            qry = qry.Where(row => row.GroupId == groupId && row.PersonId == groupMember);

            int gmId = 0;
            foreach (var qRow in qry)
            {
                 gmId = qRow.Id;
            }
                        
            var GroupMemberService = new GroupMemberService(dataContext);
            grpMember = GroupMemberService.Get(gmId);

            grpMember.GroupRoleId = groupRole;

            dataContext.SaveChanges();

            string link = "~/page/1701?GroupId=" + groupId;
            Response.Redirect(link);
        }
        #endregion

        #region Methods

        protected void GetId()
        {
            int? id = PageParameter("GroupId").AsIntegerOrNull();
            if (id.HasValue)
            {
                if (id.Value == 0)
                {
                    groupId = 0;
                }
                else
                {
                    pageGroup =  pageGroup?? new GroupService(new RockContext()).Get(id.Value);
                    if (pageGroup != null)
                    {
                        groupId = id ?? default(int);
                        hfGroupId.Value = groupId.ToString();
                    }
                    else
                    {
                        groupId = -1;
                    }
                }
            }
            else
            {
                groupId = -1;
            }

        }

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

                textString = rdr.IsDBNull(1) ? "Corporate Name Missing " : rdr.GetString(1);
                textString = textString + gmStatus;

                ddGroupMember.Items.Add(new ListItem(textString, rdr.GetInt32(0).ToString()));
            }
            conn.Close();
        }

        private void LoadGroupRoleDropDownValues()
        {
            ddRole.Items.Add(new ListItem("Reference Check - IN PROCESS", "174"));
            ddRole.Items.Add(new ListItem("Reference Check - COMPLETE", "175"));
        }

        #endregion

    }
}