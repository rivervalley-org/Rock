
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using org.rivervalley.Engagement.Model;
using Rock;
using Rock.Attribute;
using Rock.Constants;
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Web.UI;

namespace RockWeb.Plugins.org_rivervalley.Engagement
{
    /// <summary>
    /// Template block for developers to use to start a new block.
    /// </summary>
    [DisplayName( "Engagement Index Detail" )]
    [Category( "RVC > Engagement" )]
    [Description( "Shows the engagement index detail." )]

    public partial class EngagementIndexDetail : Rock.Web.UI.RockBlock, IDetailBlock
    {
        #region Fields

        int _categoryId;

        #endregion

        #region Control Methods

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
        }

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Load" /> event.
        /// </summary>
        /// <param name="e">The <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );

            nbDuplicateDevice.Visible = false;

            _categoryId = PageParameter( "CategoryId" ).AsInteger();

            if ( !Page.IsPostBack )
            {
                ShowDetail( PageParameter( "IndexId" ).AsInteger() );
            }
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
        }

        /// <summary>
        /// Handles the Click event of the btnSave control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void btnSave_Click( object sender, EventArgs e )
        {
            Page.Validate();
            org.rivervalley.Engagement.Model.EngagementIndex index = null;

            var rockContext = new RockContext();
            var indexService = new EngagementIndexService( rockContext );

            int indexId = hfIndexId.Value.AsInteger();

            if ( indexId != 0 )
            {
                index = indexService.Get( indexId );
            }

            if ( index == null )
            {
                index = new org.rivervalley.Engagement.Model.EngagementIndex();
                indexService.Add( index );
            }

            if ( index != null )
            {
                index.IsActive = cbIsActive.Checked;
                index.Name = tbName.Text;
                index.Description = tbDescription.Text;
                index.CategoryId = ddlCategory.SelectedItem.Value.AsInteger();
                index.ScoreWeight = nbScoreWeight.SelectedValue.Value;
                index.AllowMultipleCompletions = cbAllowMultiple.Checked;

                // set query type
                if ( !tglQueryType.Checked ) // is SQL
                {
                    index.SqlQuery = tbSQL.Text;
                    index.DataViewId = null;
                }
                else
                {
                    index.DataViewId = dvpDataView.SelectedValueAsId();
                    index.SqlQuery = string.Empty;
                }

                if ( !index.IsValid || !Page.IsValid || index.CategoryId == 0 )
                {
                    // Controls will render the error messages
                    return;
                }

                rockContext.SaveChanges();

                var pageParams = new Dictionary<string, string>();
                pageParams.Add( "CategoryId", _categoryId.ToString() );
                NavigateToParentPage( pageParams );
            }
        }

        /// <summary>
        /// Handles the Click event of the btnCancel control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        protected void btnCancel_Click( object sender, EventArgs e )
        {
            var pageParams = new Dictionary<string, string>();
            pageParams.Add( "CategoryId", _categoryId.ToString() );
            NavigateToParentPage( pageParams );
        }

        protected void tglQueryType_CheckedChanged( object sender, EventArgs e )
        {
            SetPanels( tglQueryType.Checked );
        }

        #endregion

        #region Methods

        /// <summary>
        /// Shows the edit.
        /// </summary>
        /// <param name="indexId">The device identifier.</param>
        public void ShowDetail( int indexId )
        {
            LoadDropDowns();

            pnlView.Visible = true;
            org.rivervalley.Engagement.Model.EngagementIndex index = null;

            var rockContext = new RockContext();

            if ( !indexId.Equals( 0 ) )
            {
                index = new EngagementIndexService( rockContext ).Get( indexId );
                lActionTitle.Text = ActionTitle.Edit( org.rivervalley.Engagement.Model.EngagementIndex.FriendlyTypeName ).FormatAsHtmlTitle();
                pdAuditDetails.SetEntity( index, ResolveRockUrl( "~" ) );
            }

            if ( index == null )
            {
                index = new org.rivervalley.Engagement.Model.EngagementIndex { Id = 0 };
                lActionTitle.Text = ActionTitle.Add( org.rivervalley.Engagement.Model.EngagementIndex.FriendlyTypeName ).FormatAsHtmlTitle();

                // hide the panel drawer that show created and last modified dates
                pdAuditDetails.Visible = false;

                ddlCategory.SetValue( _categoryId );
            }
            else
            {
                ddlCategory.SetValue( index.CategoryId );
            }

            hfIndexId.Value = index.Id.ToString();

            cbIsActive.Checked = index.IsActive;
            tbName.Text = index.Name;
            tbDescription.Text = index.Description;
            nbScoreWeight.SelectedValue = index.ScoreWeight;
            dvpDataView.SetValue( index.DataViewId );
            tbSQL.Text = index.SqlQuery;
            cbAllowMultiple.Checked = index.AllowMultipleCompletions;

            // set query type panel
            tglQueryType.Checked = !index.IsSQL();
            SetPanels( !index.IsSQL() );

            nbEditModeMessage.Text = string.Empty;
        }

        /// <summary>
        /// Sets the panels.
        /// </summary>
        /// <param name="isDataView">if set to <c>true</c> [is data view].</param>
        public void SetPanels( bool isDataView )
        {
            divSQL.Visible = !isDataView;
            divDataView.Visible = isDataView;
        }

        /// <summary>
        /// Loads the drop downs.
        /// </summary>
        private void LoadDropDowns()
        {

            ddlCategory.Items.Clear();
            new EngagementCategoryService( new RockContext() )
                .Queryable().AsNoTracking()
                .OrderBy( c => c.Order )
                .ToList()
                .ForEach( c => ddlCategory.Items.Add( new ListItem( c.Name, c.Id.ToString() ) ) );

            ddlCategory.DataBind();
        }

        #endregion
    }
}