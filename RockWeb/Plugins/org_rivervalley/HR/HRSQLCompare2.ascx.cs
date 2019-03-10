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

namespace RockWeb.Plugins.org_rivervalley.HR
{
    [DisplayName( "HR SQL Compare2" )]
    [Category( "org_rivervalley > HR" )]
    [Description( "HR Table compare for conversion efforts" )]

    public partial class HRSQLCompare2 : Rock.Web.UI.RockBlock
    {
        #region Fields

        private Person cPerson = null;
        

        #endregion

        private string connStringArena = ConfigurationManager.ConnectionStrings["ArenaContext"].ConnectionString;
        private string connStringRock = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;

        #region Base Control Methods

        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );
        }

        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );

            lOutputString.Text = "<h1>Arena HR DL_Mgr field</h1>";

            cPerson = CurrentPerson;
            var rockContext = new RockContext();
            cPerson.LoadAttributes(rockContext);
            
            lOutputString.Text += "<br>Employment Status: " + cPerson.GetAttributeValue("EmploymentStatus");
            var aGuid = new Guid( cPerson.GetAttributeValue("EmploymentStatus") );
            var qry = new DefinedValueService( new RockContext() ).Queryable();
            qry = qry.Where( row => row.Guid == aGuid );
            foreach ( var row in qry )
            {
                lOutputString.Text += "<br>" + row.Value ;
            }

            cPerson.SetAttributeValue("EmploymentStatus", "50D4FE04-CEB9-4B58-8B1D-0E57D640BE46");// guid 
            cPerson.SaveAttributeValues();

        }

        #endregion

        #region Methods

        #endregion

        #region Events

        #endregion

    }
}