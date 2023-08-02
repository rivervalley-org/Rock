using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.IO;
using Rock;
using Rock.Attribute;
using Rock.Badge;
using Rock.Data;
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
        public override void Render( BadgeCache badge, IEntity entity, TextWriter writer )
        {
            if ( !( entity is Person person ) )
            {
                return;
            }

            var mergeObjects = new Dictionary<string, object>();

            string template = GetAttributeValue( badge, "Template" ) ?? string.Empty;
            mergeObjects.Add( "EngagementResult", EngagementIndexService.GetCurrentEngagementResult( person.Id ) );

            writer.Write( template.ResolveMergeFields( mergeObjects ) );
        }

        protected override string GetJavaScript( BadgeCache badge, IEntity entity )
        {
            if ( !( entity is Person person ) )
            {
                return null;
            }

            var mergeObjects = new Dictionary<string, object>();

            mergeObjects.Add( "EngagementResult", EngagementIndexService.GetCurrentEngagementResult( person.Id ) );
            mergeObjects.Add( "Person", person );

            string template = @"

    //I'm manually including the easypie JS library here because the javascript lava tag is not working when using the lava short code inside a lava badge.
    /**!
     * easyPieChart
     * Lightweight plugin to render simple, animated and retina optimized pie charts
     *
     * @license 
     * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
     * @version 2.1.6
     **/
    !function(a,b){""object""==typeof exports?module.exports=b(require(""jquery"")):""function""==typeof define&&define.amd?define([""jquery""],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement(""canvas"");a.appendChild(d),""undefined""!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext(""2d"");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,""px""].join(""""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d=""function""==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:""#ef1e25"",trackColor:""#f9f9f9"",scaleColor:""#dfe0e0"",scaleLength:5,lineCap:""round"",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}};if(""undefined""!=typeof b)d.renderer=b;else{if(""undefined""==typeof SVGRenderer)throw new Error(""Please load either the SVG- or the CanvasRenderer"");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&""undefined""!=typeof c[b]?c[b]:d[b],""function""==typeof e[b]&&(e[b]=e[b].bind(this)));e.easing=""string""==typeof e.easing&&""undefined""!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?jQuery.easing[e.easing]:d.easing,""number""==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),""boolean""!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute(""data-percent"")&&this.update(parseFloat(a.getAttribute(""data-percent"")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,""easyPieChart"")||(d=a.extend({},b,a(this).data()),a.data(this,""easyPieChart"",new c(this,d)))})}});

    // tooltip 
    {% capture tooltip %}
        <strong>Engagement Index</strong><span class='pull-right'>{{ EngagementResult.TotalEngagementIndex | Format:'#,##00.00' }}</span><br/>
        <hr class='engagement-hr'/>

        {% for category in EngagementResult.CategoryResults %}
        <span class='engagement-title pull-left margin-r-sm'>{{ category.Name }}</span>
        <div class='progress'>
            <div class='progress-bar {{ 'Progress bar ' | Append:category.Name | ToCssClass }}' role='progressbar' aria-valuenow='{{ category.Total | Format:'#,##00.00' }}' aria-valuemin='0' aria-valuemax='100'>
            <span>{{ category.Total | Format:'#,##00.00' }}%</span>
            </div>
        </div>
        {% endfor %}
    
        <hr class='engagement-hr'/>
        <a href='/Person/{{Person.Id}}/EngagementIndex'>See Details</a>
    {% endcapture %}


    // create content for popover
    var popoverContent = ""{{ tooltip | StripNewlines }}"";

    // disable the anchor tag
    $( '.engagement-badge' ).on( 'click', function( e ) {
        e.preventDefault();
    });

    $('.engagement-badge').attr('data-toggle', 'tooltip');
    $('.engagement-badge').attr('data-container', 'body');
    $('.engagement-badge').attr('data-content', popoverContent);
    $('.engagement-badge').attr('data-placement', 'bottom');
    
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
    });";

            return template.ResolveMergeFields( mergeObjects );
        }
    }
}
