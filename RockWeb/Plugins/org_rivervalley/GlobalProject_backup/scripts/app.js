'use strict';

angular
  .module('globalProjectApp', [
	  'core',
	  'rvcTeams',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
	'ui.bootstrap',
	'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/teams', {
        templateUrl: RVC.GlobalProject.resourcePath + 'views/teams.html',
		title: '\'Teams\'',
        controller: 'TeamsCtrl',
		resolve: {
			teams: ['$route', 'Team', function ($route, Team) {
				return Team.getTeams($route.current.params.year).$promise;
			}],
			availableYears: ['$route', 'Team', function ($route, Team) {
				return Team.getAvailableYears().$promise;
			}],
			interestLists: ['$route', 'InterestList', function ($route, InterestList) {
				return RVC.GlobalProject.user ? InterestList.find('team').$promise : [];
			}]
		}
      })
      .when('/teams/:id', {
        templateUrl: RVC.GlobalProject.resourcePath + 'views/team.html',
		title: 'team.FullName',
        controller: 'TeamCtrl',
		resolve: {
			team: ['$route', 'Team', function ($route, Team) {
				return Team.getTeam($route.current.params.id).$promise;
			}]
		}
      })
      .when('/upcoming-teams', {
        templateUrl: RVC.GlobalProject.resourcePath + 'views/teams-upcoming.html',
		title: '\'Upcoming Teams\'',
        controller: 'UpcomingTeamsCtrl',
		resolve: {
			teams: ['$route', 'Team', function ($route, Team) {
				jQuery(window).scrollTop(0);
				return Team.getTeams().$promise;
			}]
		}
      })
      .when('/missionaries', {
        templateUrl: RVC.GlobalProject.resourcePath + 'views/missionaries.html',
		title: '\'Missionaries\'',
        controller: 'MissionariesCtrl',
		resolve: {
			missionaries: ['$route', 'Mission', function ($route, Mission) {
				return Mission.getMissionaries('').$promise;
			}],
			regions: ['$route', 'Mission', function ($route, Mission) {
				return Mission.getRegions().$promise;
			}]
		}
      })
	  .when('/missionaries/:id', {
        templateUrl: RVC.GlobalProject.resourcePath + 'views/missionary.html',
		title: 'missionary.Name',
		controller: 'MissionaryCtrl',
		resolve: {
			missionary: ['$route', 'Mission', function ($route, Mission) {
				return Mission.getMissionary($route.current.params.id).$promise;
			}]
		}
      })
      .when('/organizations', {
        templateUrl: RVC.GlobalProject.resourcePath + 'views/organizations.html',
		title: '\'Organizations\'',
        controller: 'OrganizationsCtrl',
		resolve: {
			organizations: ['$route', 'Mission', function ($route, Mission) {
				return Mission.getMissionOrganizations('').$promise;
			}],
			regions: ['$route', 'Mission', function ($route, Mission) {
				return Mission.getRegions().$promise;
			}]
		}
      })
	  .when('/organizations/:id', {
        templateUrl: RVC.GlobalProject.resourcePath + 'views/organization.html',
		title: 'organization.Name',
		controller: 'OrganizationCtrl',
		resolve: {
			organization: ['$route', 'Mission', function ($route, Mission) {
				return Mission.getMissionOrganization($route.current.params.id).$promise;
			}]
		}
      })
      .otherwise({
        redirectTo: '/teams'
      });
	  
	  $locationProvider
	  	// only use HTML 5 mode if the HTML page has a base element
	  	.html5Mode(document.getElementsByTagName('base').length > 0)
	  	.hashPrefix('!');
  })
  .run(['$rootScope', 'titleService', function ($rootScope, titleService) {
  
    $rootScope.RVC = RVC; // config object embedded on main HTML page
  
	// this code takes care of automatically changing the page's title based on the route
	titleService.setSuffix(' | River Valley Church');
	$rootScope.$on('$routeChangeSuccess', function(event, currentRoute) {
		if(currentRoute.title) {
			titleService.setTitle($rootScope.$eval(currentRoute.title, currentRoute.locals));
		}
	});
  }]);

// enable FastClick for better mobile responsiveness
$(function() {
    FastClick.attach(document.body);
});
  
// helper functions
function confirmCorsSupport() {
	if (!('withCredentials' in new XMLHttpRequest())) {
		alert('Unfortunately your web browser is too old to support this feature. Please update your browser or switch to a different one and try again.');
		return false;
	}
	return true;
}

