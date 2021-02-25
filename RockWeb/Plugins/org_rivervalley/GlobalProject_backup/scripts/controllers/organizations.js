'use strict';

angular.module('globalProjectApp')
  .controller('OrganizationsCtrl', function ($scope, $window, $timeout, $routeParams, Mission, organizations, regions, paginationService) {

	$scope.paginationService = paginationService;
	$scope.filteredOrganizations = organizations;
	$scope.regions = regions;
	$scope.selectedRegion = null;
	$scope.searchStr = '';
	
	calculateRegionCounts();
	
	$scope.regionChanged = function() {
		filterOrganizations();
	};
	
	$scope.$watch('searchStr', function(newValue, oldValue) {
		if(newValue !== oldValue) {
			$scope.searchBoxStr = $scope.searchStr;
			filterOrganizations();
		}
	});
	
	function filterOrganizations() {
		$scope.filteredOrganizations = getFilteredOrganizations();
		
		calculateRegionCounts();
	}
	
	function getFilteredOrganizations(excludeRegionFilter) {
		var filteredItems = [];
		
		for(var i=0; i<organizations.length; i++) {
			var org = organizations[i];
			var matched = true;
		
			if($scope.searchStr) {
				matched = org.Name && org.Name.toLowerCase().indexOf($scope.searchStr.toLowerCase()) >= 0
					|| org.CountryName && org.CountryName.toLowerCase().indexOf($scope.searchStr.toLowerCase()) >= 0;
			}
			if($scope.selectedRegion && !excludeRegionFilter) {
				matched = matched && org.Region === $scope.selectedRegion.Key;
			}
			
			if(matched) {
				filteredItems.push(org);
			}
		}
		
		return filteredItems;
	}
	
	function calculateRegionCounts() {
		for(var i=0; i<$scope.regions.length; i++) {
			$scope.regions[i].Count = 0;
		}
		
		var mostlyFilteredOrgs = getFilteredOrganizations(true);
		
		for(i=0; i<mostlyFilteredOrgs.length; i++) {
			for(var j=0; j<$scope.regions.length; j++) {
				if($scope.regions[j].Key === mostlyFilteredOrgs[i].Region) {
					$scope.regions[j].Count++;
					break;
				}
			}
		}
	}
	
  });
