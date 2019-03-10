using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
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
    [DisplayName("Sandbox Person Attribute")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Sandbox Person Attribute Data Entry test")]

    public partial class SandboxPersonAttribute : Rock.Web.UI.RockBlock
    {
        #region Fields

        private Person cPerson = null;

        #endregion

        #region Base Control Methods

        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );
            
            cPerson = CurrentPerson;

            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );

        }

        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );
            

            if ( !Page.IsPostBack )
            {
                var rockContext = new RockContext();
                cPerson.LoadAttributes( rockContext );

                tbPreviousChurch.Text = cPerson.GetAttributeValue( "PreviousChurch" );
                tbPreviousChurch.Label = "New Label_1";
                tbAllergy.Text = cPerson.GetAttributeValue( "Allergy" );
                tbAllergy.Label = "New Label Two";
                
                ShowDetail();
            }
        }

        public override List<BreadCrumb> GetBreadCrumbs( Rock.Web.PageReference pageReference )
        {
            var breadCrumbs = new List<BreadCrumb>();
            return breadCrumbs;
        }

        #endregion

        #region Events

        protected void Block_BlockUpdated( object sender, EventArgs e )
        {

        }



        protected void btnCancel_Click( object sender, EventArgs e )
        {
            NavigateToParentPage();
        }

        protected void btnSave_Click( object sender, EventArgs e )
        {
            
            var rockContext = new RockContext();
            cPerson.LoadAttributes( rockContext );
            //cPerson.SetAttributeValue( "PreviousChurch", tbPreviousChurch.Text );
            var attribute = AttributeCache.Get(716); // Previous Church
            string originalValue = cPerson.GetAttributeValue("PreviousChurch");
            string newValue = tbPreviousChurch.Text;
            Rock.Attribute.Helper.SaveAttributeValue(cPerson, attribute, newValue, rockContext);
            if ((originalValue ?? string.Empty).Trim() != (newValue ?? string.Empty).Trim())
            {
                string formattedOriginalValue = string.Empty;
                if (!string.IsNullOrWhiteSpace(originalValue))
                {
                    //formattedOriginalValue = attribute.FieldType.Field.FormatValue(null, originalValue, newValue, false);
                }

                string formattedNewValue = string.Empty;
                if (!string.IsNullOrWhiteSpace(newValue))
                {
                   // formattedNewValue = attribute.FieldType.Field.FormatValue(null, newValue, attribute.QualifierValues, false);
                }


                //History.EvaluateChange(null, attribute.Name, originalValue, newValue, false);
            }



            cPerson.SetAttributeValue( "Allergy", tbAllergy.Text );
            //cPerson.SaveAttributeValues();
                     

            //NavigateToParentPage();
        }

        #endregion

        #region Methods

        private void ShowDetail()
        {
            pnlDetails.Visible = true;
            
        }

        
        #endregion
    }
}