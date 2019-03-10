'use strict';

angular.module('rvcTeams')
	.controller('UpcomingTeamsCtrl', function ($scope, $location, $routeParams, $uibModal, Team, teams) {

		// show teams from beginning of year
		var fromDate = moment().startOf('year');

		$scope.teams = [];
		for(var i=0; i<teams.length; i++) {

			var teamDate = moment(teams[i].StartDate);

			if(teamDate.isBefore(fromDate)) {
				continue;
			}

			// put the team year on a separate field, for display purposes
			teams[i].DateYear = teamDate.year();

			// convert ASP.Net date strings to momentjs objects
			if(teams[i].RegistrationStart) {
				teams[i].RegistrationStart = moment(teams[i].RegistrationStart);
			}

			$scope.teams.push(teams[i]);
		}
	
	});