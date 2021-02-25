<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Teams.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GlobalProject.TeamsBlock" %>

<link rel="stylesheet" href="<%= TemplateSourceDirectory %>/bower_components/magnific-popup/dist/magnific-popup.css" />
<link rel="stylesheet" href="<%= TemplateSourceDirectory %>/scripts/vendor/jquery.mThumbnailScroller/2.0.0/jquery.mThumbnailScroller.css">
<link rel="stylesheet" href="<%= TemplateSourceDirectory %>/styles/main.css">

<div ng-app="globalProjectApp">
	<!-- loading indicator -->
	<div class="sk-circle" ng-if="isRouteLoading">
		<div class="sk-circle1 sk-child"></div>
		<div class="sk-circle2 sk-child"></div>
		<div class="sk-circle3 sk-child"></div>
		<div class="sk-circle4 sk-child"></div>
		<div class="sk-circle5 sk-child"></div>
		<div class="sk-circle6 sk-child"></div>
		<div class="sk-circle7 sk-child"></div>
		<div class="sk-circle8 sk-child"></div>
		<div class="sk-circle9 sk-child"></div>
		<div class="sk-circle10 sk-child"></div>
		<div class="sk-circle11 sk-child"></div>
		<div class="sk-circle12 sk-child"></div>
	</div>
	<route-loading-indicator></route-loading-indicator>

	<div ng-view="" ng-if='!isRouteLoading'></div>
</div>

<script type="text/javascript">
  var appInsights=window.appInsights||function(config){
    function i(config){t[config]=function(){var i=arguments;t.queue.push(function(){t[config].apply(t,i)})}}var t={config:config},u=document,e=window,o="script",s="AuthenticatedUserContext",h="start",c="stop",l="Track",a=l+"Event",v=l+"Page",y=u.createElement(o),r,f;y.src=config.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js";u.getElementsByTagName(o)[0].parentNode.appendChild(y);try{t.cookie=u.cookie}catch(p){}for(t.queue=[],t.version="1.0",r=["Event","Exception","Metric","PageView","Trace","Dependency"];r.length;)i("track"+r.pop());return i("set"+s),i("clear"+s),i(h+a),i(c+a),i(h+v),i(c+v),i("flush"),config.disableExceptionTracking||(r="onerror",i("_"+r),f=e[r],e[r]=function(config,i,u,e,o){var s=f&&f(config,i,u,e,o);return s!==!0&&t["_"+r](config,i,u,e,o),s}),t
    }({
        instrumentationKey: "0f8f94cc-9a32-4edc-99c3-818c7d700eb0"
    });

    window.appInsights=appInsights;
    appInsights.trackPageView();
</script>

<script type="text/javascript">
	var RVC = RVC || {};
	RVC.GlobalProject = {
		resourcePath: '<%= TemplateSourceDirectory %>/',
		user: <%= UserJSON %>,
		unlistedMissionariesUrl: 'https://my.rivervalley.org/default.aspx?page=7455&mid=0'
	};
</script>

<script src="<%= TemplateSourceDirectory %>/bower_components/angular/angular.min.js"></script>
<script src="<%= TemplateSourceDirectory %>/bower_components/angular-resource/angular-resource.min.js"></script>
<script src="<%= TemplateSourceDirectory %>/bower_components/angular-cookies/angular-cookies.min.js"></script>
<script src="<%= TemplateSourceDirectory %>/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
<script src="<%= TemplateSourceDirectory %>/bower_components/angular-route/angular-route.min.js"></script>
<script src="<%= TemplateSourceDirectory %>/bower_components/moment/min/moment.min.js"></script>
<script src="<%= TemplateSourceDirectory %>/bower_components/twix/dist/twix.min.js"></script>
<script src="<%= TemplateSourceDirectory %>/bower_components/angular-touch/angular-touch.min.js"></script>
<script src="<%= TemplateSourceDirectory %>/bower_components/fastclick/lib/fastclick.js"></script>
<script src="<%= TemplateSourceDirectory %>/bower_components/magnific-popup/dist/jquery.magnific-popup.min.js"></script>
<script src="<%= TemplateSourceDirectory %>/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/vendor/jquery.mThumbnailScroller/2.0.0/jquery.mThumbnailScroller.min.js"></script>

<script src="<%= TemplateSourceDirectory %>/scripts/modules/dirPagination.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/core/core.module.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/core/directives/magnificPopup.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/core/directives/mThumbnailScroller.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/core/directives/ngEnter.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/core/directives/routeLoadingIndicator.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/core/services/mission-service.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/core/services/team-service.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/core/services/title-service.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/core/services/interest-list-service.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/teams/teams.module.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/teams/controllers/team.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/teams/controllers/teams.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/teams/controllers/teams-upcoming.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/app.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/controllers/missionaries.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/controllers/missionary.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/controllers/organizations.js"></script>
<script src="<%= TemplateSourceDirectory %>/scripts/controllers/organization.js"></script>