using System.ComponentModel;
using System.ComponentModel.Composition;
using System.IO;
using System.Linq;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Collections.Generic;
using System.Data;
using System;
using System.Diagnostics;
using Rock.Web.Cache;

namespace com.centralaz.SpiritualGifts.PersonProfile.Badge
{
    /// <summary>
    /// Spiritual Gift Badge as implemented from http://positivepublications.com/ assessment template.
    /// </summary>
    [Description( "Bade that displays a person's spiritual gift results" )]
    [Export( typeof( Rock.PersonProfile.BadgeComponent ) )]
    [ExportMetadata( "ComponentName", "SpiritualGift" )]

    [LinkedPage( "Spiritual Gift Result Detail", "Page to show the details of the Spiritual Gift assessment results. If blank no link is created.", false )]
    public class SpiritualGift : Rock.PersonProfile.BadgeComponent
    {
        /// <summary>
        /// Renders the specified writer.
        /// </summary>
        /// <param name="badge">The badge.</param>
        /// <param name="writer">The writer.</param>
        public override void Render( PersonBadgeCache badge, System.Web.UI.HtmlTextWriter writer )
        {

            // Find the Spiritual Gift Personality Type / Strength
            String description = string.Empty;
            string gifting = Person.GetAttributeValue( "Gifting" );
            DefinedValueCache giftingValue = null;
            if ( !string.IsNullOrEmpty( gifting ) )
            {
                giftingValue = DefinedTypeCache.Read( com.centralaz.SpiritualGifts.SystemGuid.DefinedType.SPRITUAL_GIFTS_DEFINED_TYPE.AsGuid() ).DefinedValues.Where( v => v.Value == gifting ).FirstOrDefault();
                if ( giftingValue != null )
                {
                    description = giftingValue.Description;
                }
            }

            // create url for link to details if configured
            string detailPageUrl = string.Empty;
            if ( !String.IsNullOrEmpty( GetAttributeValue( badge, "SpiritualGiftResultDetail" ) ) )
            {
                int pageId = Rock.Web.Cache.PageCache.Read( Guid.Parse( GetAttributeValue( badge, "SpiritualGiftResultDetail" ) ) ).Id;
                detailPageUrl = System.Web.VirtualPathUtility.ToAbsolute( String.Format( "~/page/{0}?Person={1}", pageId, Person.UrlEncodedKey ) );
                writer.Write( "<a href='{0}'>", detailPageUrl );
            }

            //Determine icon

            // NOTE:
            // badge-icon-rvc is a custom CSS to better align the icon with other badges --- CSS code add to the badge block as pre-HTML code
            // <style> .badge-icon-rvc { font - size:37px; vertical - align: middle; } </ style >

            string iconClass = string.Empty;
            if (giftingValue != null)
            {
                switch (giftingValue.Value)
                {
                    case "Administration":
                        iconClass = "badge-icon-rvc fa fa-stack-overflow";
                        break;
                    case "Craftsmanship":
                        iconClass = "badge-icon-rvc fa fa-hand-paper-o";
                        break;
                    case "CreativeCommunication":
                        iconClass = "badge-icon-rvc fa fa-newspaper-o";
                        break;
                    case "EncouragementExhortation":
                        iconClass = "badge-icon-rvc fa fa-thumbs-o-up";
                        break;
                    case "Evangelism":
                        iconClass = "badge-icon-rvc fa fa-fire";
                        break;
                    case "HelpsService":
                        iconClass = "badge-icon-rvc fa fa-bullhorn";
                        break;
                    case "Hospitality":
                        iconClass = "badge-icon-rvc fa fa-lifesaver";
                        break;
                    case "Intercession":
                        iconClass = "badge-icon-rvc fa fa-ambulance";
                        break;
                    case "Leadership":
                        iconClass = "badge-icon-rvc fa fa-anchor";
                        break;
                    case "Mercy":
                        iconClass = "badge-icon-rvc fa fa-handshake-o";
                        break;
                    case "Pastoring":
                        iconClass = "badge-icon-rvc fa fa-cloud-download";
                        break;
                    case "Teaching":
                        iconClass = "badge-icon-rvc fa fa-book";
                        break;
                }
                //Badge HTML
                writer.Write(String.Format("<i class='{0}' data-toggle='tooltip' title='{1}'></i>", iconClass, giftingValue.Value));

                if (!String.IsNullOrEmpty(detailPageUrl))
                {
                    writer.Write("</a>");
                }
            }
        }

    }
}
