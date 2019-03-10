'use strict';

angular.module('globalProjectApp')
  .controller('MissionaryCtrl', function ($scope, $routeParams, $uibModal, missionary) {
	jQuery(window).scrollTop(0);
  
	$scope.missionary = missionary;
	
	// might move this to the server side at some point, especially if this logic is ever needed on the search page too
	if($scope.missionary.CountryName && $scope.missionary.City) {
		$scope.missionary.Location = $scope.missionary.City + ', ' + $scope.missionary.CountryName;
	} else if($scope.missionary.City) {
		$scope.missionary.Location = $scope.missionary.City;
	} else if($scope.missionary.CountryName) {
		$scope.missionary.Location = $scope.missionary.CountryName;
	}
	
	// moment-ize birth dates and calculate age
	if($scope.missionary.FamilyMembers) {
		for(var i=0; i<$scope.missionary.FamilyMembers.length; i++) {
			if($scope.missionary.FamilyMembers[i].BirthDate) {
				$scope.missionary.FamilyMembers[i].BirthDate = moment($scope.missionary.FamilyMembers[i].BirthDate);
				$scope.missionary.FamilyMembers[i].Age = moment().diff($scope.missionary.FamilyMembers[i].BirthDate, 'years');
			}
		}
	}
	
	$scope.showCommunicationModal = function() {
		$uibModal.open({
			templateUrl: 'modal-communication.html'
		});
	};
	
	$scope.showPrayerModal = function() {
		$uibModal.open({
			templateUrl: 'modal-prayer.html'
		});
	};
	
  });
