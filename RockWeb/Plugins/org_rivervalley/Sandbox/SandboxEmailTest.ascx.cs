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
    [DisplayName("Sandbox Email Test")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Sandbox Email Test")]

    public partial class SandboxEmailTest : Rock.Web.UI.RockBlock
    {
        #region Fields

        //private Person adminPerson = null;
        //private int emailType;
        private List<string> ccList = new List<string>();
        //private string emailFrom;
        //private string emailFromAddress;
        //private string emailReplyTo;
        //private string emailSubject;
        //private string emailBody;
        //private string personalizedEmailBody;
        //private string emailTo = "globalproject@rivervalley.org";

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);                
                
                //ccList.Add("mbaker.sec@comcast.net");
                //NewEmail();
        }


        #endregion

        #region Events

        #endregion

        #region Methods
        
       
        private void NewEmail()
        {
            var newEmail = new RockEmailMessage();
            newEmail.Subject = "My Subject for today";
            newEmail.FromEmail = "info@rivervalley.org";
            newEmail.FromName = "HR Dept";
            newEmail.Message = "Email message for testing purposes - updated for new email";
            newEmail.SetRecipients("mbaker.bus@comcast.net");
            newEmail.CCEmails = ccList;
            newEmail.Send();
        }

        private void SendSMS()
        {
            /*
            var smsMessage = new RockSMSMessage();
            smsMessage.SetRecipients("6128102372");
            smsMessage.FromNumber = "6122601760";
            smsMessage.Message = "message";
            smsMessage.Send();
            */
        }
        #endregion

    }
}