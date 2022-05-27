using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web.UI.WebControls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Model;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Web.UI;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project Calendar" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Views projects on a calendar." )]

    #region Block Attributes

    [LinkedPage( "Detail Page", "The page that allows the user to edit the details of a project type", true, "", order: 0 )]

    #endregion

    public partial class ProjectCalendar : RockBlock
    {
        public static class AttributeKeys
        {
            public const string DetailPage = "DetailPage";
        }

        #region Private Fields

        #endregion

        #region Base Method Overrides

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

            RockPage.AddScriptLink( "~/Scripts/moment.min.js" );

            RockPage.AddCSSLink( "~/Plugins/com_blueboxmoon/ProjectManagement/Styles/event-calendar.css" );
            RockPage.AddScriptLink( "~/Plugins/com_blueboxmoon/ProjectManagement/Scripts/event-calendar.js" );

            Utility.AddCommonCss( RockPage );

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );
        }

        /// <summary>
        /// Initialize basic information about the page structure and setup the default content.
        /// </summary>
        /// <param name="sender">Object that is generating this event.</param>
        /// <param name="e">Arguments that describe this event.</param>
        protected void Page_Load( object sender, EventArgs e )
        {
            if ( !IsPostBack )
            {
                SetupCalendar();
            }
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Setups the calendar.
        /// </summary>
        protected void SetupCalendar()
        {
            hfBlockGuid.Value = BlockCache.Guid.ToString();

            SetUrlTemplate();
            SetProjectTypes();
            SetUserPreferences();
        }

        /// <summary>
        /// Sets the URL template.
        /// </summary>
        protected void SetUrlTemplate()
        {
            var queryParameters = new Dictionary<string, string>
            {
                { "Id", "PROJECT_ID" }
            };

            hfUrlTemplate.Value = LinkedPageUrl( AttributeKeys.DetailPage, queryParameters );
        }

        /// <summary>
        /// Sets the project types.
        /// </summary>
        protected void SetProjectTypes()
        {
            var rockContext = new RockContext();
            var projectTypeService = new ProjectTypeService( rockContext );

            //
            // Get all the project types this user is authorized to view.
            //
            hfProjectTypes.Value = projectTypeService.Queryable()
                .Where( t => t.IsActive )
                .ToList()
                .Where( t => t.IsAuthorized( Authorization.VIEW, CurrentPerson ) )
                .OrderBy( t => t.Name )
                .Select( t => new
                {
                    t.Id,
                    t.Name
                } )
                .ToList()
                .ToJson();
        }

        /// <summary>
        /// Sets the user preferences.
        /// </summary>
        protected void SetUserPreferences()
        {
            hfFilter.Value = PersonService.GetUserPreference( CurrentPerson, string.Format( "block-{0}-filter", BlockId ) );
        }

        #endregion

        #region Event Handlers

        /// <summary>
        /// Handles the BlockUpdated event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_BlockUpdated( object sender, EventArgs e )
        {
            SetupCalendar();
        }

        #endregion
    }
}