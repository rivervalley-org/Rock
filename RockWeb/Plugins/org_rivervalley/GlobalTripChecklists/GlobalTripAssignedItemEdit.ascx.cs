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

using org.rivervalley.GlobalTripChecklists.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.GlobalTripChecklists
{
    [DisplayName("Global Trip Assigned Item Edit")]
    [Category("org_rivervalley > GlobalTripChecklists")]
    [Description("Global Trip Assigned Item Edit")]


    public partial class GlobalTripAssignedItemEdit : Rock.Web.UI.RockBlock
    {
        #region Fields

        private GlobalTripAssignedItem currentItem = null;
        private int assignedItemId;
        private string type;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                type = "";
                GetId();
                if (assignedItemId > 0)
                {
                    if(type == "edit")
                    {
                        pnlError.Visible = false;
                        pnlEditItem.Visible = true;
                        pnlComplete.Visible = false;
                        pnlDelete.Visible = false;

                        hfEditItemId.Value = assignedItemId.ToString();
                        LoadGlobalTripName(currentItem.TripGroupId);
                        var definedValue = new DefinedValueService(new RockContext()).Get(currentItem.TripItemId);
                        lItemName.Text = definedValue.Value;
                        rblPeriods.Text = currentItem.DueDateGroupId.ToString();
                    }
                    if (type == "delete")
                    {
                        pnlError.Visible = false;
                        pnlDelete.Visible = true;
                        pnlEditItem.Visible = false;
                        pnlComplete.Visible = false;

                        hfDeleteItemId.Value = assignedItemId.ToString();
                        var definedValue = new DefinedValueService(new RockContext()).Get(currentItem.TripItemId);

                        lDeleteString.Text = "Are you sure you want to delete item " + definedValue.Value + " ?";
                    }


                    
                }
                else
                {
                    pnlError.Visible = true;
                    lErrorString.Text = "An error occurred in processing your request.";
                }
            }

        }

        #endregion

        #region Events
        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnItemSaved_Click(object sender, EventArgs e)
        {
            pnlError.Visible = false;
            pnlDelete.Visible = false;
            pnlEditItem.Visible = false;
            pnlComplete.Visible = true;

            assignedItemId = int.Parse(hfEditItemId.Value);
            int period;
            period = Int32.Parse(rblPeriods.Text);

            var dataContext = new RockContext();
            var service = new GlobalTripAssignedItemService(dataContext);
            currentItem = service.Get(assignedItemId);

            currentItem.DueDateGroupId = period;            
            dataContext.SaveChanges();
            
        }

        protected void btnDelete_Click(object sender, EventArgs e)
        {
            pnlError.Visible = false;
            pnlDelete.Visible = false;
            pnlEditItem.Visible = false;
            pnlComplete.Visible = true;

            assignedItemId = int.Parse(hfDeleteItemId.Value);
            var dataContext = new RockContext();
            var service = new GlobalTripAssignedItemService(dataContext);
            currentItem = service.Get(assignedItemId);

            service.Delete(currentItem);
            dataContext.SaveChanges();
            
        }

        #endregion

        #region Methods

        protected void GetId()
        {
            int? id = PageParameter("id").AsIntegerOrNull();
            type = PageParameter("type");

            if (id.HasValue)
            {
                if (id.Value == 0)
                {
                    assignedItemId = 0;
                }
                else
                {
                    currentItem = currentItem ?? new GlobalTripAssignedItemService(new RockContext()).Get(id.Value);
                    if (currentItem != null)
                    {
                        assignedItemId = id ?? default(int);
                        
                    }
                    else
                    {
                        assignedItemId = -1;
                    }
                }
            }
            else
            {
                assignedItemId = -1;
            }
        }

        private void LoadGlobalTripName(int tripId)
        {
            var qry = new GroupService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.Id == tripId);
            foreach (var qRow in qry)
            {
                lTripName.Text = qRow.Name;
            }
        }

        #endregion

    }
}