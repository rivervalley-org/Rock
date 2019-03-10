'use strict';

var app = angular.module('core');

app.factory('Mission', ['$resource',
  function($resource){
    return {
		getMissionaries: function(searchStr, callback) {
			return $resource('https://apidev.rivervalley.org/globalproject/missionaries', {}, {
			  query: {method:'GET', params:{format:'json'}, isArray:true, headers:{'Accept': 'application/json'}}
			}).query({searchStr: searchStr}, callback);
		},
		getMissionary: function(id, callback) {
			return $resource('https://apidev.rivervalley.org/globalproject/missionaries/:id', {}, {
			  get: {method:'GET', params:{format:'json'}, isArray:false, headers:{'Accept': 'application/json'}}
			}).get({id: id}, callback);
		},
		getMissionOrganizations: function(searchStr, callback) {
			return $resource('https://apidev.rivervalley.org/globalproject/missionorganizations', {}, {
			  query: {method:'GET', params:{format:'json'}, isArray:true, headers:{'Accept': 'application/json'}}
			}).query({searchStr: searchStr}, callback);
		},
		getMissionOrganization: function(id, callback) {
			return $resource('https://apidev.rivervalley.org/globalproject/missionorganizations/:id', {}, {
			  get: {method:'GET', params:{format:'json'}, isArray:false, headers:{'Accept': 'application/json'}}
			}).get({id: id}, callback);
		},
		getRegions: function(callback) {
			return $resource('https://apidev.rivervalley.org/globalproject/regions', {}, {
			  get: {method:'GET', params:{format:'json'}, isArray:true, headers:{'Accept': 'application/json'}, cache: true}
			}).get({}, callback);
		}
	};
  }
]);