'use strict';

angular
	.module('rvcTeams', [
		'core',
		'ngCookies',
		'ngSanitize',
		'ngRoute',
		'ui.bootstrap',
		'angularUtils.directives.dirPagination'
	])
	.config(function ($routeProvider, $locationProvider) {
		/*
		$routeProvider
			.when('/', {
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
			.when('/:id', {
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
      });

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		}).hashPrefix('!');
		*/
	})
	.run(['$rootScope', function ($rootScope) {

		$rootScope.RVC = RVC; // config object embedded on main HTML page

	}]);