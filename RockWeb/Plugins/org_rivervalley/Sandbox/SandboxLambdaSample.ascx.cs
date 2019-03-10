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
    [DisplayName("Sandbox Lanbda Sample")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Sandbox Lambda Sample Query")]


    public partial class SandboxLambdaSample : Rock.Web.UI.RockBlock
    {
        #region Fields

        private Person cPerson = null;
        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;

        #endregion

        #region Base Control Methods

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);

            cPerson = CurrentPerson;            
        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            lOutputString.Text = "CP: " + cPerson.FullName;
            //LambdaGet();
            LambdaGetTwo();


        }


        #endregion

        #region Events

        #endregion

        #region Methods

        private void LambdaGet()
        {
            using (var rockContext = new RockContext())
            {
                var service = new PersonService(rockContext);

                var people = service.Queryable()
                    .AsNoTracking()
                    .Where(p => p.LastName == "Baker")
                    .Where(p => p.NickName == "Mark")
                    .Select(p => p.Id);

                foreach (int personId in people)
                {
                    lOutputString.Text += "<br>Id: " + personId;
                }
            }
        }

        protected void LambdaGetTwo()
        {
            var aQry = new AttributeService(new RockContext()).Queryable();
            aQry = aQry
                .Where(row => row.EntityTypeId == 16)
                .Where(row => row.EntityTypeQualifierValue.Contains("73"))
                .Where(RowEventArgs => RowEventArgs.Id < 5000)
                .OrderBy(x => x.FieldTypeId);

            foreach (var qRow in aQry)
            {
                lOutputString.Text += "<br> " + qRow.Id + " | " + qRow.FieldTypeId;
            }
        }

        #endregion
    }
}