
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Web.UI;
using org.rivervalley.Engagement.Model;
using Rock;
using Rock.Constants;
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

namespace RockWeb.Plugins.org_rivervalley.Engagement
{
    /// <summary>
    /// Template block for developers to use to start a new block.
    /// </summary>
    [DisplayName( "Engagement Category Detail" )]
    [Category( "RVC > Engagement" )]
    [Description( "Shows the engagement category detail." )]

    public partial class EngagementCategoryDetail : Rock.Web.UI.RockBlock
    {
        #region Base Control Methods

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );

            btnDelete.Attributes["onclick"] = string.Format( "javascript: return Rock.dialogs.confirmDelete(event, '{0}');", DefinedType.FriendlyTypeName );
        }

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Load" /> event.
        /// </summary>
        /// <param name="e">The <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );

            if ( !Page.IsPostBack )
            {
                int? itemId = InitItemId();

                if ( itemId.HasValue )
                {
                    ShowDetail( itemId.Value );
                }
                else
                {
                    pnlDetails.Visible = false;
                }
            }
        }

        /// <summary>
        /// Determines which item to display based on either the configuration or the definedTypeId that was passed in.
        /// </summary>
        /// <returns>An <see cref="System.Int32"/> of the Id for a <see cref="Rock.Model.DefinedType"/> or null if it was not found.</returns>
        private int? InitItemId()
        {
            int? itemId = null;

            itemId = PageParameter( "CategoryId" ).AsIntegerOrNull();

            return itemId;
        }

        #endregion

        #region Events

        /// <summary>
        /// Handles the BlockUpdated event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_BlockUpdated( object sender, EventArgs e )
        {
            int? itemId = InitItemId();

            if ( itemId.HasValue )
            {
                ShowDetail( itemId.Value );
            }
            else
            {
                pnlDetails.Visible = false;
            }
        }

        /// <summary>
        /// Handles the Click event of the btnSaveType control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void btnSaveType_Click( object sender, EventArgs e )
        {
            var rockContext = new RockContext();

            EngagementCategory engagementCategory = null;
            EngagementCategoryService service = new EngagementCategoryService( rockContext );

            int categoryId = hfCategoryId.ValueAsInt();

            if ( categoryId == 0 )
            {
                engagementCategory = new EngagementCategory();
                engagementCategory.Order = 0;
                service.Add( engagementCategory );
            }
            else
            {
                engagementCategory = service.Get( categoryId );
            }

            engagementCategory.IsActive = cbIsActive.Checked;
            engagementCategory.Name = tbName.Text;
            engagementCategory.Description = tbDescription.Text;
            engagementCategory.Weight = nbWeight.Text.AsInteger();
            engagementCategory.HtmlColor = cpHtmlColor.Text;

            if ( !engagementCategory.IsValid )
            {
                // Controls will render the error messages                    
                return;
            }

            rockContext.SaveChanges();

            var qryParams = new Dictionary<string, string>();
            qryParams["CategoryId"] = engagementCategory.Id.ToString();
            NavigateToPage( RockPage.Guid, qryParams );
        }

        /// <summary>
        /// Handles the Click event of the btnDelete control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnDelete_Click( object sender, EventArgs e )
        {
            RockContext rockContext = new RockContext();
            EngagementCategoryService engagementCategoryService = new EngagementCategoryService( rockContext );
            EngagementCategory engagementCategory = engagementCategoryService.Get( int.Parse( hfCategoryId.Value ) );

            if ( engagementCategory != null )
            {
                if ( !engagementCategory.IsAuthorized( Authorization.EDIT, this.CurrentPerson ) )
                {
                    mdDeleteWarning.Show( "Sorry, You are not authorized to delete this Engagement Category.", ModalAlertType.Information );
                    return;
                }

                string errorMessage;
                if ( !engagementCategoryService.CanDelete( engagementCategory, out errorMessage ) )
                {
                    mdDeleteWarning.Show( errorMessage, ModalAlertType.Information );
                    return;
                }

                engagementCategoryService.Delete( engagementCategory );

                rockContext.SaveChanges();

            }

            NavigateToParentPage();
        }

        /// <summary>
        /// Handles the Click event of the btnCancelType control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void btnCancelType_Click( object sender, EventArgs e )
        {
            if ( hfCategoryId.IsZero() )
            {
                // Cancelling on Add.  Return to Grid
                NavigateToParentPage();
            }
            else
            {
                // Cancelling on Edit.  Return to Details
                EngagementCategoryService engagementCategoryService = new EngagementCategoryService( new RockContext() );
                EngagementCategory engagementCategory = engagementCategoryService.Get( hfCategoryId.ValueAsInt() );
                ShowReadonlyDetails( engagementCategory );
            }
        }

        /// <summary>
        /// Shows the readonly details.
        /// </summary>
        /// <param name="engagementCategory">Type of the defined.</param>
        private void ShowReadonlyDetails( EngagementCategory engagementCategory )
        {
            SetEditMode( false );

            hfCategoryId.SetValue( engagementCategory.Id );
            tbName.Text = engagementCategory.Name;

            lTitle.Text = engagementCategory.Name.FormatAsHtmlTitle();
            lDescription.Text = engagementCategory.Description.ConvertMarkdownToHtml();
        }

        /// <summary>
        /// Shows the edit details.
        /// </summary>
        /// <param name="engagementCategory">Type of the defined.</param>
        private void ShowEditDetails( EngagementCategory engagementCategory )
        {
            if ( engagementCategory.Id > 0 )
            {
                lTitle.Text = ActionTitle.Edit( EngagementCategory.FriendlyTypeName ).FormatAsHtmlTitle();
            }
            else
            {
                lTitle.Text = ActionTitle.Add( EngagementCategory.FriendlyTypeName ).FormatAsHtmlTitle();
            }

            SetEditMode( true );

            cbIsActive.Checked = engagementCategory.IsActive;
            tbName.Text = engagementCategory.Name;
            tbDescription.Text = engagementCategory.Description;
            nbWeight.Text = engagementCategory.Weight.ToString();
            cpHtmlColor.Text = engagementCategory.HtmlColor;

            hlInactive.Visible = !engagementCategory.IsActive;
        }

        /// <summary>
        /// Handles the Click event of the btnEdit control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void btnEdit_Click( object sender, EventArgs e )
        {
            EngagementCategoryService engagementCategoryService = new EngagementCategoryService( new RockContext() );
            EngagementCategory engagementCategory = engagementCategoryService.Get( hfCategoryId.ValueAsInt() );
            ShowEditDetails( engagementCategory );
        }

        /// <summary>
        /// Sets the edit mode.
        /// </summary>
        /// <param name="editable">if set to <c>true</c> [editable].</param>
        private void SetEditMode( bool editable )
        {
            pnlEditDetails.Visible = editable;
            vsDetails.Enabled = editable;
            fieldsetViewDetails.Visible = !editable;

            this.HideSecondaryBlocks( editable );
        }

        /// <summary>
        /// Shows the detail.
        /// </summary>
        /// <param name="categoryId">The defined type identifier.</param>
        public void ShowDetail( int categoryId )
        {
            pnlDetails.Visible = true;
            EngagementCategory category = null;

            if ( !categoryId.Equals( 0 ) )
            {
                category = new EngagementCategoryService( new RockContext() ).Get( categoryId );
                pdAuditDetails.SetEntity( category, ResolveRockUrl( "~" ) );
                hlInactive.Visible = !category.IsActive;
            }

            if ( category == null )
            {
                category = new EngagementCategory { Id = 0 };
                // hide the panel drawer that show created and last modified dates
                pdAuditDetails.Visible = false;
            }

            hfCategoryId.SetValue( category.Id );

            // render UI based on Authorized and IsSystem
            bool readOnly = false;

            nbEditModeMessage.Text = string.Empty;

            if ( !IsUserAuthorized( Authorization.EDIT ) )
            {
                readOnly = true;
                nbEditModeMessage.Text = EditModeMessage.ReadOnlyEditActionNotAllowed( EngagementCategory.FriendlyTypeName );
            }

            if ( readOnly )
            {
                btnEdit.Visible = false;
                btnDelete.Visible = false;
                ShowReadonlyDetails( category );
            }
            else
            {
                btnEdit.Visible = true;
                btnDelete.Visible = false;
                if ( category.Id > 0 )
                {
                    ShowReadonlyDetails( category );
                }
                else
                {
                    ShowEditDetails( category );
                }
            }
        }

        #endregion
    }
}