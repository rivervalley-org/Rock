using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web.UI.WebControls;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Security;
using Rock.Web;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Model;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project Type List Lava" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Allows the user to customize the list of project types in the system with lava." )]

    [LinkedPage( "Project List Page", "The page that lists the projects of the selected type.", false, "", "", 0 )]
    [CodeEditorField( "Template", "The lava template to use when displaying the project types.", CodeEditorMode.Lava, height: 300, order: 1, defaultValue: @"
<div class=""panel panel-block"">
    <div class=""panel-heading""><h3 class=""panel-title""><i class=""fa fa-tasks""></i> Project Types</h3></div>
    <ul class=""list-group"">
    {% for type in ProjectTypes %}
        <li class=""list-group-item clickable"">
            <a href=""{{ ProjectListPage }}?ProjectTypeId={{ type.Id }}"">
                {% if type.IconCssClass != """" %}<i class=""{{ type.IconCssClass }}""></i>{% endif %}
                {{ type.Name }}
            </a>
            {% assign canEdit = type | HasRightsTo:'Edit' %}
            {% if canEdit %}
                <a href=""{{ ProjectBaseRoute }}/0?ProjectTypeId={{ type.Id }}"" class=""pull-right""><i class=""fa fa-plus""></i></a>
            {% endif %}
        </li>
    {% endfor %}
    </ul>
</div>")]
    public partial class ProjectTypeListLava : RockBlock
    {
        #region Base Method Overrides

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

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
                Display();
            }
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Displays the project types on the page.
        /// </summary>
        private void Display()
        {
            var projectTypeService = new ProjectTypeService( new RockContext() );
            var template = GetAttributeValue( "Template" );

            if ( string.IsNullOrWhiteSpace( template ) )
            {
                nbWarning.Text = "Block has not been configured.";
            }
            else
            {
                nbWarning.Text = string.Empty;

                var projectTypes = projectTypeService.Queryable().ToList()
                    .Where( t => t.IsAuthorized( Authorization.VIEW, CurrentPerson ) )
                    .OrderBy( t => t.Name )
                    .ToList();

                var mergeFields = Rock.Lava.LavaHelper.GetCommonMergeFields( RockPage );
                mergeFields.Add( "ProjectListPage", LinkedPageRoute( "ProjectListPage" ) );
                mergeFields.Add( "ProjectTypes", projectTypes );
                mergeFields.Add( "ProjectBaseRoute", "/" + Utility.BaseRoute );

                ltContent.Text = template.ResolveMergeFields( mergeFields );
            }
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
            Display();
        }

        #endregion
    }
}