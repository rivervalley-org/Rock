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

namespace RockWeb.Plugins.org_rivervalley.Sandbox
{
    [DisplayName("Sandbox Dynamic Form")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Sandbox Dynamic Form")]


    public partial class SandboxDynamicForm : Rock.Web.UI.RockBlock
    {
        #region Fields


        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {   
                GetDefinedValue();
                Group100246();
            }

        }


        #endregion

        #region Events
        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnSave_Click(object sender, EventArgs e)
        {
            lDebugString.Text = "";
            foreach (ListItem item in cbList.Items)
            {
                if (item.Selected)
                {                   
                    GetDefinedValueId(item.Value);
                }
            }
        }

        #endregion

        #region Methods
        private void GetDefinedValue()
        {
            var qry = new DefinedValueService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.DefinedTypeId == 319);
            var qrySorted = qry.OrderBy(a => a.Value);
            var items = cbList.Items;
            foreach (var qRow in qrySorted)
            {
                items.Add(qRow.Value);
            }
        }
        private void GetDefinedValueId(string value)
        {
            var qry = new DefinedValueService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.Value == value && row.DefinedTypeId == 319);
            var items = cbList.Items;
            foreach (var qRow in qry)
            {
                lDebugString.Text += "<br> " + qRow.Id + " | " + qRow.Value; ;
            }
        }

        protected void Group100246()
        {
            var qry = new GroupMemberService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.GroupId == 84978);

            foreach (var qRow in qry)
            {
                lDebugString.Text += "<br> " + qRow.Id + " | " + qRow.Group;
            }
        }

        #endregion
    }
}