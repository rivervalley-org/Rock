using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;
using Rock;
using Rock.Data;

namespace RockWeb.Plugins.com_devobalGeneris.ChurchAnalyticsReport
{
    public partial class Plugins_DTIGenerisFinanceReport : Rock.Web.UI.RockBlock
    {
        private Rock.Web.Cache.PageCache _page = null;
        /// <summary>
        /// Allows you to pick a person, group, workflow instance, or registration entity and test your lava.
        /// </summary>
        [DisplayName("Church Analytics Report")]
        [Category("com_devobalGeneris > Finance")]
        [Description("Displays Transaction, Member and Family data in a helpful and combined table that can be used by Generis for consultation.")]
        public class FinanceReport
        {
            public int? donations_id { get; set; }
            public DateTime? donations_created_at { get; set; }
            public DateTime? donations_updated_at { get; set; }
            public string donations_transactions_type { get; set; }
            public decimal? donations_amount { get; set; }
            public int? members_id { get; set; }
            public string members_salutation { get; set; }
            public string members_first_name { get; set; }
            public string members_last_name { get; set; }
            public string members_family_role { get; set; }
            public string members_street_1 { get; set; }
            public string members_street_2 { get; set; }
            public string members_city { get; set; }
            public string members_state { get; set; }
            public string members_postal_code { get; set; }
            public string members_phone { get; set; }
            public string members_email { get; set; }
            public DateTime? members_dob { get; set; }
            public string members_head_of_household { get; set; }
            public DateTime? members_created_at { get; set; }
            public DateTime? members_updated_at { get; set; }
            public int? families_id { get; set; }
            public DateTime? families_created_at { get; set; }
            public DateTime? families_updated_at { get; set; }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                using (RockContext context1 = new RockContext())
                {
                    var Results = context1.Database.SqlQuery<FinanceReport>("exec sp_Generis_Financial_Report").ToList();
                    grd_person.DataSource = Results.ToList();
                    grd_person.DataBind();
                }

            }
            catch (Exception ex)
            {
                Response.Write(ex.ToString());
            }
        }
    }
}