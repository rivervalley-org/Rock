using Rock;
using Rock.Attribute;
using Rock.Web.Cache;
using System.ComponentModel;
using System.ComponentModel.Composition;
using Rock.Model;
using Rock.Web.UI;
using Rock.Badge;
using Rock.Badge.Component;
using Rock.Data;
using System.Data.Entity;
using System.Linq;
using System.Collections.Generic;

namespace org.rivervalley.Engagement.Model.Badge
{
    [Export( typeof( BadgeComponent ) )]
    [ExportMetadata( "ComponentName", "Engagement Index" )]

    [LavaField( "Template", "The lava template to be used. (Note: {0} will be replaced with the person's guid.) ", true,
        @"
        <script>
            Sys.Application.add_load(function () {{

                $.ajax({{
                        type: 'GET',
                        url: Rock.settings.get('baseUrl') + 'api/RiverValley/Badges/EngagementScore/{0}' ,
                        statusCode: {{
                            200: function (data, status, xhr) {{
                                    var chartHtml = '<ul class=\'attendance-chart list-unstyled\'>';
                                    $.each(data, function() {{                                       
                                        chartHtml += '<li title=\'' + monthNames[this.Month -1] + ' ' + this.Year +'\'><span style=\'height: ' + barHeight + '%\'></span></li>';
                                    }});
                                    chartHtml += '</ul>';

                                    $('.badge-attendance.badge-id-4365234').html(chartHtml);

                                }}
                        }},
                }});
            }});
        </script>"
        , "", 0 )]
    class EngagementIndexBadge : BadgeComponent
    {
        /// <summary>
        /// Determines of this badge component applies to the given type
        /// </summary>
        /// <param name="type">The type.</param>
        /// <returns></returns>
        public override bool DoesApplyToEntityType( string type )
        {
            return type.IsNullOrWhiteSpace() || typeof( Person ).FullName == type;
        }

        /// <summary>
        /// Renders the specified writer.
        /// </summary>
        /// <param name="badge">The badge.</param>
        /// <param name="writer">The writer.</param>
        public override void Render( BadgeCache badge, System.Web.UI.HtmlTextWriter writer )
        {
            if ( Person == null )
            {
                return;
            }

            string template = GetAttributeValue( badge, "Template" ) ?? string.Empty;

            writer.Write( string.Format( template, Person.Guid.ToString() ) );
        }
    }
}
