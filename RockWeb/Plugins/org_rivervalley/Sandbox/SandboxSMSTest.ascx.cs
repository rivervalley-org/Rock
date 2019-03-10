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
    [DisplayName("Sandbox SMS Test")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Sandbox SMS Test")]

    public partial class SandboxSMSTest : Rock.Web.UI.RockBlock
    {
        #region Fields


        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);                

        }


        #endregion

        #region Events

        #endregion

        #region Methods
        

        #endregion

    }
}