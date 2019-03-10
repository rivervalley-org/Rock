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
    [DisplayName("Sandbox LINQ Sample")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Sandbox LINQ Sample Query")]


    public partial class SandboxLINQSample : Rock.Web.UI.RockBlock
    {
        #region Fields
                
        #endregion

        #region Base Control Methods

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);            
        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            lOutputString.Text = "LINQ Sample ";
            GetLINQ(15281);
        }


        #endregion

        #region Events

        #endregion

        #region Methods

        protected void GetLINQ(int id)
        {
            var dataContext = new RockContext();

            var service = new GroupMemberService(dataContext);
            foreach (var groupMember in service.GetByGroupId(id).ToList())
            {
                lOutputString.Text += "<br>" + groupMember.PersonId;
            }

        }



        #endregion
    }
}