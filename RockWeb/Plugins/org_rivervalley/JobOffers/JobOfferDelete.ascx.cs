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

using org.rivervalley.JobOffers.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.JobOffers
{
    [DisplayName("Job Offer Delete")]
    [Category("org_rivervalley > JobOffers")]
    [Description("Job Offer Delete")]

    public partial class JobOfferDelete : Rock.Web.UI.RockBlock
    {
        #region Fields

        private JobOfferDetail currentOffer = null;
        private int jobOfferId;
        
        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                GetId();
                if (jobOfferId > 0)
                {
                    currentOffer = new JobOfferDetailService(new RockContext()).Get(jobOfferId);
                    lDeleteString.Text = "Are you sure you want to delete offer " + jobOfferId + " - " + currentOffer.Title + " ?";
                    pnlError.Visible = false;
                    pnlDelete.Visible = true;
                }
                else
                {
                    pnlError.Visible = true;
                    pnlDelete.Visible = false;
                } 
            }
        }

        #endregion

        #region Events

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            string link = "~/JobOffersListing";
            Response.Redirect(link);
        }

        protected void btnDelete_Click(object sender, EventArgs e)
        {
            pnlDelete.Visible = true;
            pnlError.Visible = false;

            jobOfferId = int.Parse(hfJobOfferId.Value);

            var dataContext = new RockContext();
            var service = new JobOfferDetailService(dataContext);
            currentOffer = service.Get(jobOfferId);
            service.Delete(currentOffer);
            dataContext.SaveChanges();

            string link = "~/JobOffersListing";
            Response.Redirect(link);
        }


        #endregion

        #region Methods

        protected void GetId()
        {
            int? id = PageParameter("id").AsIntegerOrNull();
            if (id.HasValue)
            {
                if(id.Value > 0)
                {
                    currentOffer = currentOffer ?? new JobOfferDetailService(new RockContext()).Get(id.Value);
                    if (currentOffer != null)
                    {
                        jobOfferId = id ?? default(int);
                        hfJobOfferId.Value = jobOfferId.ToString();
                    }
                    else
                    {
                        jobOfferId = -1;
                    }
                }
            }
            else
            {
                jobOfferId = -1;
            }            
        }
        
        #endregion

    }
}