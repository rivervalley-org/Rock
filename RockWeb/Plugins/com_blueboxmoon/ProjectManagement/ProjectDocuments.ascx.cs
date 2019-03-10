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
    [DisplayName( "Project Documents" )]
    [Category( "Blue Box Moon > Project Management" )]
    [Description( "Lists documents for a project." )]

    [ContextAware( typeof( Project ) )]
    public partial class ProjectDocuments : RockBlock, ISecondaryBlock
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
                    pnlDocumentList.Visible = true;
                }
            }
        }

        #endregion

        #region Core Methods

        /// <summary>
        /// Bind the repeater to the list of documents in the project.
        /// </summary>
        private void BindRepeater()
        {
            int? projectEntityTypeId = EntityTypeCache.GetId( typeof( Project ) );
            var project = ContextEntity<Project>();

            using ( var rockContext = new RockContext() )
            {
                var notes = new NoteService( rockContext ).Queryable()
                    .Where( n => n.NoteType.EntityTypeId == projectEntityTypeId.Value && n.EntityId == project.Id )
                    .OrderBy( n => n.CreatedDateTime )
                    .ToList();

                var documents = new AttachmentService( rockContext ).Queryable( "BinaryFile" )
                    .Where( a => a.ProjectId == project.Id )
                    .OrderBy( a => a.CreatedDateTime )
                    .ToList()
                    .Select( a => new
                    {
                        a.BinaryFileId,
                        a.BinaryFile.FileName,
                        NoteId = notes.Where( n => n.Text.Contains( String.Format( "/GetFile.ashx?Id={0}", a.BinaryFileId ) ) ).Select( n => ( int? ) n.Id ).FirstOrDefault(),
                        Url = string.Format( "/GetFile.ashx?id={0}", a.BinaryFile.Id )
                    } )
                    .Where( a => a.NoteId.HasValue || project.Description.Contains( String.Format( "/GetFile.ashx?Id={0}", a.BinaryFileId ) ) )
                    .ToList();

                rpDocument.DataSource = documents;
                rpDocument.DataBind();
            }
        }

        /// <summary>
        /// Sets the visibility of this block when requested by other blocks.
        /// </summary>
        /// <param name="visible">true if this block should be visible.</param>
        void ISecondaryBlock.SetVisible( bool visible )
        {
            pnlDocumentList.Visible = visible;
        }

        protected string GetCommentLink( int? noteId )
        {
            if ( !noteId.HasValue )
            {
                return "<i class=\"fa fa-fw\"></i>";
            }

            return string.Format( "<a href=\"#comment{0}\"><i class=\"fa fa-fw fa-comment\"></i>", noteId.Value );
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