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
    [DisplayName("Defined Type Location Add")]
    [Category("org_rivervalley > Utility")]
    [Description("Will add a new Location to the Patient Incident Location List")]

    public partial class DefinedTypeLocationAdd : Rock.Web.UI.RockBlock
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

        protected void btnSave_Click(object sender, EventArgs e)
        {
            DefinedValue newValue;
            var dataContext = new RockContext();
            var service = new DefinedValueService(dataContext);

            newValue = new DefinedValue();
            service.Add(newValue);
            newValue.IsSystem = false;
            newValue.DefinedTypeId = 304;
            newValue.Value = tbLocation.Text;

            dataContext.SaveChanges();
            NavigateToParentPage();
        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        #endregion

        #region Methods

        #endregion
    }
}