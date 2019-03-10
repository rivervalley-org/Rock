using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web.UI.WebControls;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Web;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

using com.blueboxmoon.ProjectManagement;
using com.blueboxmoon.ProjectManagement.Model;

namespace RockWeb.Plugins.com_blueboxmoon.ProjectManagement
{
    [DisplayName( "Project Participants" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Lists participants for a project." )]

    [ContextAware( typeof( Project ) )]
    public partial class ProjectParticipants : RockBlock, ISecondaryBlock
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
                var project = ContextEntity() as Project;

                if ( project != null && project.IsAuthorized( Authorization.VIEW, CurrentPerson ) )
                {
                    BindRepeater();
                    pnlParticipantList.Visible = true;
                }
            }
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Bind the repeater to the list of participants in the project.
        /// </summary>
        private void BindRepeater()
        {
            var entityTypeId = EntityTypeCache.Get( typeof( Project ) ).Id;
            var project = ContextEntity<Project>();
            List<Person> participants = new List<Person>();

            var commenters = new NoteService( new RockContext() ).Queryable()
                .Where( n => n.NoteType.EntityTypeId == entityTypeId && n.EntityId == project.Id && n.CreatedByPersonAlias != null )
                .Select( n => n.CreatedByPersonAlias.Person );

            if ( project.RequestedByPersonAlias != null )
            {
                participants.Add( project.RequestedByPersonAlias.Person );
            }
            participants.AddRange( project.Tasks.Where( t => t.AssignedToPersonAlias != null ).Select( t => t.AssignedToPersonAlias.Person ) );
            participants.AddRange( project.Assignees.Select( a => a.Person ) );
            participants.AddRange( commenters );

            participants = participants
                .DistinctBy( p => p.Id )
                .OrderBy( p => p.FirstName )
                .ThenBy( p => p.LastName )
                .ToList();

            rpParticipant.DataSource = participants;
            rpParticipant.DataBind();
        }

        /// <summary>
        /// Sets the visibility of this block when requested by other blocks.
        /// </summary>
        /// <param name="visible">true if this block should be visible.</param>
        void ISecondaryBlock.SetVisible( bool visible )
        {
            pnlParticipantList.Visible = visible;
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
            BindRepeater();
        }

        #endregion
    }
}