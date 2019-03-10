'use strict';

angular.module('globalProjectApp')
  .controller('MissionariesCtrl', function ($scope, $window, $timeout, $routeParams, Mission, missionaries, regions, paginationService) {

	$scope.paginationService = paginationService;
	$scope.filteredMissionaries = missionaries;
	$scope.regions = regions;
	$scope.selectedRegion = null;
	$scope.searchStr = '';
	
	// add Unlisted Missionaries to list of regions
	$scope.regions.push({ Key: 'unlisted', Description: 'Unlisted Missionaries' });
	
	calculateRegionCounts();
	
	$scope.regionChanged = function() {
		if($scope.selectedRegion && $scope.selectedRegion.Key === 'unlisted') {
			$window.open(RVC.GlobalProject.unlistedMissionariesUrl, '_blank');
			
			// revert back to previous region -- has to be done in a separate operation to make it take effect
			$timeout(function () {
				$scope.selectedRegion = $scope.prevSelectedRegion;
			});
			
			return;
		}
		
		filterMissionaries();
		
		$scope.prevSelectedRegion = $scope.selectedRegion;
	};
	
	$scope.$watch('searchStr', function(newValue, oldValue) {
		if(newValue !== oldValue) {
			$scope.searchBoxStr = $scope.searchStr;
			filterMissionaries();
		}
	});
	
	function filterMissionaries() {
		$scope.filteredMissionaries = getFilteredMissionaries();
		
		calculateRegionCounts();
	}
	
	function getFilteredMissionaries(excludeRegionFilter) {
		var filteredItems = [];
		
		for(var i=0; i<missionaries.length; i++) {
			var missionary = missionaries[i];
			var matched = true;
		
			if($scope.searchStr) {
				matched = missionary.Name && missionary.Name.toLowerCase().indexOf($scope.searchStr.toLowerCase()) >= 0
					|| missionary.CountryName && missionary.CountryName.toLowerCase().indexOf($scope.searchStr.toLowerCase()) >= 0;
			}
			if($scope.selectedRegion && !excludeRegionFilter) {
				matched = matched && missionary.Region === $scope.selectedRegion.Key;
			}
			
			if(matched) {
				filteredItems.push(missionary);
			}
		}
		
		return filteredItems;
	}
	
	function calculateRegionCounts() {
		for(var i=0; i<$scope.regions.length; i++) {
			$scope.regions[i].Count = 0;
		}
		
		var mostlyFilteredMissionaries = getFilteredMissionaries(true);
		
		for(i=0; i<mostlyFilteredMissionaries.length; i++) {
			for(var j=0; j<$scope.regions.length; j++) {
				if($scope.regions[j].Key === mostlyFilteredMissionaries[i].Region) {
					$scope.regions[j].Count++;
					break;
				}
			}
		}
	}
	
  });
