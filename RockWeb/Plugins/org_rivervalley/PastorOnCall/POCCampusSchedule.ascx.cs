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

using org.rivervalley.PastorOnCall.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.PastorOnCall
{
    [DisplayName("Pastor On Call Campus Schedule")]
    [Category("org_rivervalley > PastorOnCall")]
    [Description("Pastor On Call Campus Schedule")]


    public partial class POCCampusSchedule : Rock.Web.UI.RockBlock
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

            lOutputString.Text = "POC Report";
            LoadPOCGroups();
            
        }


        #endregion

        #region Events

        #endregion

        #region Methods

        private void LoadPOCGroups()
        {
            var qry = new GroupService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.ParentGroupId == 262637);
            foreach (var qRow in qry)
            {
                lOutputString.Text +=  "<br>Goup: " + qRow.Name;
                CheckPOCSchedule(qRow.Id);
            }
        }

        private void CheckPOCSchedule(int id)
        {
            var qry = new PastorOnCallScheduleService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.GroupId == id);
            foreach (var qRow in qry)
            {
                lOutputString.Text += "<br>ID: " + qRow.SMSNumber;
            }
        }


        #endregion
    }
}