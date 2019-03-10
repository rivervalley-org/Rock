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
    [DisplayName("Global Trip Email Review Send Email")]
    [Category("org_rivervalley > GlobalTripChecklists")]
    [Description("Global Trip Email Review Send Email")]

    public partial class GlobalTripEmailReviewSend : Rock.Web.UI.RockBlock
    {
        #region Fields

        private int tripId;
        //private int emailType;
        private List<string> ccList = new List<string>();
        private string emailFrom;
        private string emailFromAddress;
        private string emailReplyTo;
        private string emailSubject;
        private string emailBody;
        private string personalizedEmailBody;
        private string emailTo = "globalproject@rivervalley.org";

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                pnlForm.Visible = true;
                pnlComplete.Visible = false;

                LoadGlobalTripDropDownValues();
            }
        }


        #endregion

        #region Events

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnContinue_Click(object sender, EventArgs e)
        {
            pnlForm.Visible = false;
            pnlComplete.Visible = true;
            lOutputString.Text = "";

            var template = Int32.Parse(rbTemplate.Text);
            tripId = int.Parse(ddGlobalTrips.Text);

            BuildEmailContent(template);
            PersonalizeEmail();
        }

        #endregion

        #region Methods

        private void BuildEmailContent(int dvId) // from Process Global Teams Program
        {
            var definedValue = new DefinedValueService(new RockContext()).Get(dvId);
            definedValue.LoadAttributes();
            emailFrom = definedValue.GetAttributeValue("EmailFrom");
            emailFromAddress = definedValue.GetAttributeValue("EmailFromAddress");
            emailReplyTo = definedValue.GetAttributeValue("EmailReplyTo");
            emailSubject = definedValue.GetAttributeValue("EmailSubject");
            emailBody = definedValue.GetAttributeValue("EmailBody");
        }

        private void PersonalizeEmail()  // from Process Global Teams Program
        {
            DateTime date = DateTime.Now;
            personalizedEmailBody = emailBody;
            var rockContext = new RockContext();
            var personService = new PersonService(rockContext);
            var tripPerson = personService.Get(106787);

            emailTo = tripPerson.Email;
            //emailTo = "mbaker.sec@comcast.net";

            personalizedEmailBody = personalizedEmailBody.Replace("##NickName##", tripPerson.NickName);

            var groupService = new GroupService(rockContext);
            var globalTeam = groupService.Get(tripId);
            personalizedEmailBody = personalizedEmailBody.Replace("##TripName##", globalTeam.Name);

            personalizedEmailBody = personalizedEmailBody.Replace("##PaymentDueDate##", date.ToShortDateString());
            personalizedEmailBody = personalizedEmailBody.Replace("##OutstandingRequirements##", "Payment 3 (Third)");

            lOutputString.Text += "Email Sent";

            
            var newEmail = new RockEmailMessage();
            newEmail.Subject = emailSubject;
            newEmail.FromEmail = emailFromAddress;
            newEmail.FromName = emailFrom;
            newEmail.Message = personalizedEmailBody;
            newEmail.SetRecipients(emailTo);
            newEmail.CCEmails = ccList;
            newEmail.Send();
        }

        private void LoadGlobalTripDropDownValues()
        {
            var qry = new GroupService(new RockContext()).Queryable().AsNoTracking();
            qry = qry.Where(row => row.ParentGroupId == 84978 || row.ParentGroupId == 263418 || row.ParentGroupId == 268569);
            var qrySorted = qry.OrderBy(a => a.Name);
            foreach (var qRow in qrySorted)
            {
                ddGlobalTrips.Items.Add(new ListItem(qRow.Name, qRow.Id.ToString()));
            }
        }

        #endregion

    }
}