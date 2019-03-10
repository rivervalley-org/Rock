'use strict';

angular.module('rvcTeams')
  .controller('TeamCtrl', function ($scope, $routeParams, team) {
	jQuery(window).scrollTop(0);
  
	$scope.team = team;
	
	// convert ASP.Net date strings to momentjs objects
	$scope.team.StartDate = moment($scope.team.StartDate);
	$scope.team.EndDate = moment($scope.team.EndDate);
	$scope.team.RegistrationEnd = moment($scope.team.RegistrationEnd);
	if($scope.team.PassportRequiredDate) {
		$scope.team.PassportRequiredDate = moment($scope.team.PassportRequiredDate);
	}
	for(var i=0; i<$scope.team.Payments.length; i++) {
		if($scope.team.Payments[i].Date) {
			$scope.team.Payments[i].Date = moment($scope.team.Payments[i].Date);
		}
	}
	for(i=0; i<$scope.team.TeamMeetingDates.length; i++) {
		if($scope.team.TeamMeetingDates[i]) {
			$scope.team.TeamMeetingDates[i] = moment($scope.team.TeamMeetingDates[i]);
		}
	}
	
	$scope.teamDateRange = $scope.team.StartDate.twix(
		$scope.team.EndDate,
		{allDay: true}
	).format({
		monthFormat: 'MMMM',
		implicitYear: false
	});

	// from http://ecommerce.shopify.com/c/ecommerce-design/t/ordinal-number-in-javascript-1st-2nd-3rd-4th-29259
	$scope.getOrdinal = function(n) {
		var s=['th','st','nd','rd'], v=n%100;
		return n+(s[(v-20)%10]||s[v]||s[0]);
	};
  });
