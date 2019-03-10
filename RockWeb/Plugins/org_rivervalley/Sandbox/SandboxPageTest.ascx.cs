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


namespace RockWeb.Plugins.org_rivervalley.Sandbox
{
    [DisplayName("Sandbox Page Test")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Sandbox Page Test")]

    public partial class SandboxPageTest : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string cellOne;
        private string cellTwo;
        private string cellThree;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);
            
            GetPageData();
        }


        #endregion

        #region Events

        #endregion

        #region Methods
        
        protected void GetPageData()
        {
            int pageId = RockPage.PageId;

            var qry = new PageService(new RockContext()).Queryable();
            qry = qry.Where(row => row.ParentPageId == pageId);

            foreach (var qRow in qry)
            {
                string link = "/page/" + qRow.Id;
                cellTwo = "<a href=" + link + "><i class='fa fa-mail-forward'></i></a>";
                WriteOutputString(qRow.Id.ToString(), cellTwo ,qRow.PageTitle);
            }
        }

        private void WriteOutputString(string cellOne, string cellTwo, string cellThree)
        {
            lOutputString.Text += "<tr>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellOne + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellTwo + "</td>";
            lOutputString.Text += "<td class='grid - select - cell' style='text - align: left; '>" + cellThree + "</td>";
            lOutputString.Text += "</tr>";

        }

        #endregion

    }
}