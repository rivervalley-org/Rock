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
using System.IO;

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
    [DisplayName("Sandbox File Uploader")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Sandbox File Uploader")]


    public partial class SandboxFileUploader : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string fileName;
        private int testId;
        //private string eFileName = "TestUploadFile.txt";
        //private string totalPath = "C:\\\\inetpub/wwwroot/Content/InternalSite/HR/PRF_Job_Descriptions/MAP 2016 version 2.1 for Justin's approval.doc";
        //private string totalPath2 = "C:\\\\inetpub/wwwroot/App_Data/UploadedFiles/Certification of Monument Data Sheet.pdf";
        //private string fileTest = "C:\\inetpub/wwwroot/Content/InternalSite/HR/PRF_JobDescriptions/MAP 2016 version 2.1 for Justin's approval.doc";


        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                
                hfTestId.Value = 999.ToString();
                /*
                if (File.Exists(@totalPath))
                {
                    lDebugString.Text += "<br>file found";
                    lDebugString.Text += "<br>" + totalPath;                    
                }
                else
                {
                    lDebugString.Text += "<br>file not found";
                    lDebugString.Text += "<br>" + totalPath;
                }
                if (File.Exists(@totalPath2))
                {
                    lDebugString.Text += "<br>file found";
                    lDebugString.Text += "<br>" + totalPath2;
                }
                else
                {
                    lDebugString.Text += "<br>file not found";
                    lDebugString.Text += "<br>" + totalPath2;
                }
                */
            }            
        }

        #endregion

        #region Events
        
        protected void btnSave_Click(object sender, EventArgs e)
        {
            testId = int.Parse(hfTestId.Value);
            lDebugString.Text += "<br>File Saved: " + fileName;
            lDebugString.Text += "<br>Hidden Variable: " + testId;
        }

        protected void btnDelete_Click(object sender, EventArgs e)
        {
            lDebugString.Text = "";
            string totalPath = "C:\\\\inetpub/wwwroot/Content/InternalSite/HR/PRF_Job_Descriptions/MAP 2016 version 2.1 for Justin's approval.doc";
            string totalPath2 = "C:\\\\inetpub/wwwroot/App_Data/UploadedFiles/Certification of Monument Data Sheet.pdf";

            File.Delete(@totalPath);
            File.Delete(totalPath2);


        }

        protected void fuJobDescription_UpLoad(object sender, EventArgs e)
        {
            testId = int.Parse(hfTestId.Value);
            lDebugString.Text = "File Path: " + fuJobDescription.UploadedContentFilePath;
            int counter = 0;
            string path = fuJobDescription.UploadedContentFilePath;

            string[] parts = path.Split('/');
            foreach (string part in parts)
            {
                counter++;
                if (counter == 4)
                {
                    fileName = part;
                }
            }

            lUploadStatus.Text = fileName + " was uploaded<br>&nbsp;";
            lUploadStatus.Visible = true;
            fuJobDescription.Visible = false;


        }
        protected void fuJobDescription_Removed(object sender, EventArgs e)
        {
            testId = int.Parse(hfTestId.Value);

        }

        #endregion

        #region Methods

        #endregion
    }
}