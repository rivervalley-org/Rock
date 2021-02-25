'use strict';

angular.module('rvcTeams')
  .controller('TeamsCtrl', function ($scope, $location, $routeParams, $uibModal, Team, teams, availableYears, interestLists) {

	// constants
	$scope.oneWeekFromNow = moment().add(7, 'days');
  
	$scope.selectedYear = $routeParams.year;
	$scope.teams = teams;
	$scope.availableYears = availableYears;

	// convert ASP.Net date strings to momentjs objects
	for(var i=0; i<$scope.teams.length; i++) {
		if($scope.teams[i].RegistrationStart) {
			$scope.teams[i].RegistrationStart = moment($scope.teams[i].RegistrationStart);
		}
	}
	
	$scope.$watch('selectedYear', function(newValue, oldValue) {
		if(newValue !== oldValue) {
			$location.search({year: newValue});
		}
	});
	
	$scope.isInterestedIn = function(team) {
		if(!team.InterestList) {
			return false;
		}
	
		for(var i=0; i<interestLists.length; i++) {
			if(interestLists[i].id === team.InterestList.id) {
				return true;
			}
		}
	
		return false;
	};
	
	$scope.addToInterestList = function(team) {
		//if(!confirmCorsSupport()) return;
	
		if(RVC.GlobalProject.user) {
			Team.addPersonToInterestList(team.ID, RVC.GlobalProject.user.id, function(interestList) {
				team.InterestList = interestList;
				
				var found = false;
				for(var i=0; i<interestLists.length; i++) {
					if(interestLists[i].id === team.InterestList.id) {
						found = true;
						break;
					}
				}
				if(!found) {
					interestLists.push(interestList);
				}
			
				$uibModal.open({
					templateUrl: RVC.GlobalProject.resourcePath + 'views/modals/interested-in-team.html',
					controller: function($scope) {
						$scope.team = team;
					}
				});
			});
		} else {
			$uibModal.open({
				templateUrl: RVC.GlobalProject.resourcePath + 'views/modals/login-required.html'
			});
		}
	};
	
	$scope.removeFromInterestList = function(team) {
		//if(!confirmCorsSupport()) return;
	
		Team.removePersonFromInterestList(team.ID, RVC.GlobalProject.user.id, function() {
			team.InterestList = null;
		});
	};
	
  });
