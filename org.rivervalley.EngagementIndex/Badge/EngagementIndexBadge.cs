using System.Collections.Generic;
using System.ComponentModel.Composition;
using Rock;
using Rock.Attribute;
using Rock.Badge;
using Rock.Model;
using Rock.Web.Cache;

namespace org.rivervalley.Engagement.Model.Badge
{
    [Export( typeof( BadgeComponent ) )]
    [ExportMetadata( "ComponentName", "Engagement Index" )]

    #region Attributes

    [LavaField( "Template", "The lava template to be used.", true,
        @"
                {% comment %}I'm manually including the easypie JS library here because the javascript lava tag is not working when using the lava short code inside a lava badge.{% endcomment %}
<script src='https://cdnjs.cloudflare.com/ajax/libs/easy-pie-chart/2.1.6/jquery.easypiechart.min.js'></script>


    <style>
        {% for category in EngagementResult.CategoryResults %}
            .{{ 'Progress bar ' | Append:category.Name | ToCssClass }} {
                width: {{ category.Total }}%;
                background-color: {{ category.HtmlColor }};
            }
        {% endfor %}
        
        .progress {
            margin-bottom: 4px;
            height: 20px;
            background-color: #a2a2a2;
        }
        
        .progress-bar {
            line-height: 21px;
        }
        
        .popover {
            width: 250px;
            z-index: 900;
        }
        
        .engagement-title {
            width: 90px;
        }
        
        .engagement-hr {
            margin-top: 1px;
            margin-bottom: 5px;
        }
        
        .progress {
            position: relative;
        }
        
        .progress span {
            position: absolute;
            display: block;
            width: 100%;
            color: white;
        }
         
        {% comment %}I'm manually including the easypie CSS here because the CSS lava tag is not working when using the lava short code inside a lava badge.{% endcomment %}
        .easy-pie-chart {
			position: relative;
			display: -webkit-inline-box;
			display: -ms-inline-flexbox;
			display: inline-flex;
			-ms-flex-align: center;
			-ms-flex-pack: center;
			align-items: center;
			justify-content: center;
			-webkit-box-pack: center;
			-webkit-box-align: center;
			text-align: center;
        }
            
        .easy-pie-contents {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-align: center;
			-ms-flex-direction: column;
			flex-direction: column;
			-ms-flex-pack: center;
			align-items: center;
			justify-content: center;
			line-height: 1.2;
			-webkit-box-align: center;
			-webkit-box-pack: center;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
         }
    </style>
    {% capture tooltip %}
        <strong>Engagement Index</strong><span class='pull-right'>{{ EngagementResult.TotalEngagementIndex }}</span><br/>
        <hr class='engagement-hr'/>
    
        {% for category in EngagementResult.CategoryResults %}
        <span class='engagement-title pull-left margin-r-sm'>{{ category.Name }}</span>
        <div class='progress'>
            <div class='progress-bar {{ 'Progress bar ' | Append:category.Name | ToCssClass }}' role='progressbar' aria-valuenow='{{ category.Total }}' aria-valuemin='0' aria-valuemax='100'>
            <span>{{ category.Total }}%</span>
            </div>
        </div>
        {% endfor %}
    {% endcapture %}
    
    <div id='engagement-index' class='badge badge-default engagement-badge' data-toggle='tooltip' data-placement='top' data-original-title='Click for details.' >
        {[ easypie value:'{{ EngagementResult.TotalEngagementIndex }}'  showpercent:'true' primarycolor:'#16c98d' chartwidth:'48' scalelinelength:'0']} {[ endeasypie ]}
        
    </div>


<script>
    // create content for popover
    var popoverContent = ""{{ tooltip | StripNewlines }}"";

    // disable the anchor tag
    $( '.engagement-badge' ).on( 'click', function( e ) {
        e.preventDefault();
    });

    $('.engagement-badge').attr('data-toggle', 'tooltip');
    $('.engagement-badge').attr('data-container', 'body');
    $('.engagement-badge').attr('data-content', popoverContent);
    
    $('.engagement-badge').attr('data-original-title', 'Click for details.');

    var popoverIsOpen = false;

    $('.engagement-badge').popover({
        html: true,
        placement: 'top',
        trigger: 'manual'
    });
    
    // fancy pants to allow the tooltip and popover to work on the same control
    $('.engagement-badge').on('click', function ()
    {
        if ( popoverIsOpen )
        {
            $( '.engagement-badge' ).popover( 'hide' );
            popoverIsOpen = false;
            $('.engagement-badge').attr('data-original-title', 'Click for details.');
            $( '.engagement-badge' ).tooltip( 'show' );
        }
        else {
            $( '.engagement-badge' ).attr( 'data-original-title', '' );
            $( '.engagement-badge' ).popover( 'show' );
            popoverIsOpen = true;
            $( '.engagement-badge' ).tooltip( 'hide' );
        }
    });
    
    {% comment %}I'm manually including the easypie JS here because the javascript lava tag is not working when using the lava short code inside a lava badge.{% endcomment %}
    $( document ).ready(function() {
        $('.js-easy-pie-chart').each(function() {
            var e = $(this)
              , t = e.data('color') || e.css('color')
              , a = e.data('trackcolor') || 'rgba(0,0,0,0.04)'
              , n = parseInt(e.data('piesize')) || 50
              , i = e.data('scalecolor')
              , r = parseInt(e.data('scalelinelength')) || 0
              , o = parseInt(e.data('trackwidth')) || parseInt(n / 8.5)
              , s = e.data('linecap') || 'butt'
              , x = e.data('animateduration') || 1500;
            e.easyPieChart({
                size: n,
                barColor: t,
                trackColor: a,
                scaleColor: i,
                scaleLength: r,
                lineCap: s,
                lineWidth: o,
                animate: {
                    duration: x,
                    enabled: !0
                },
                onStep: function(e, t, a) {
                    $(this.el).find('.js-percent').text(Math.round(a))
                }
            }),
            e = null
        })
    });
</script>

"
        , "", 0 )]

    #endregion

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

            var mergeObjects = new Dictionary<string, object>();

            string template = GetAttributeValue( badge, "Template" ) ?? string.Empty;
            mergeObjects.Add( "EngagementResult", EngagementIndexService.GetCurrentEngagementResult( Person.Id ) );

            writer.Write( template.ResolveMergeFields( mergeObjects ) );
        }
    }
}
