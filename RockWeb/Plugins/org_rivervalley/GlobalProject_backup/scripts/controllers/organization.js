'use strict';

angular.module('globalProjectApp')
  .controller('OrganizationCtrl', function ($scope, $routeParams, $uibModal, organization) {
	jQuery(window).scrollTop(0);
  
	$scope.org = organization;
	
	// might move this to the server side at some point, especially if this logic is ever needed on the search page too
	if($scope.org.CountryName && $scope.org.City) {
		$scope.org.Location = $scope.org.City + ', ' + $scope.org.CountryName;
	} else if($scope.org.City) {
		$scope.org.Location = $scope.org.City;
	} else if($scope.org.CountryName) {
		$scope.org.Location = $scope.org.CountryName;
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
