'use strict';

var app = angular.module('core');

app.factory('Team', ['$resource',
  function($resource){
    return {
		getTeams: function(year, callback) {
			return $resource('https://apidev.rivervalley.org/globalproject/teams', {}, {
			  query: {method:'GET', params:{year:'year',format:'json'}, isArray:true, headers:{'Accept': 'application/json'}, withCredentials: true}
			}).query({year: !year ? 9999 : year}, callback);
		},
		getTeam: function(id, callback) {
			return $resource('https://apidev.rivervalley.org/globalproject/teams/:id', {}, {
			  get: {method:'GET', params:{format:'json'}, isArray:false, headers:{'Accept': 'application/json'}}
			}).get({id: id}, callback);
		},
		getAvailableYears: function(callback) {
			return $resource('https://apidev.rivervalley.org/globalproject/teams/availableyears', {}, {
			  get: {method:'GET', params:{format:'json'}, isArray:true, headers:{'Accept': 'application/json'}, cache: true}
			}).get({}, callback);
		},
		addPersonToInterestList: function(teamId, personId, callback) {
			return $resource('https://apidev.rivervalley.org/globalproject/teams/:id/interestlist/person/:personId/add',
			{id: teamId, personId: personId}, {
			  post: {method:'POST', params:{}, headers:{'Accept': 'application/json'}, withCredentials: true}
			}).post({}, callback);
		},
		removePersonFromInterestList: function(teamId, personId, callback) {
			return $resource('https://apidev.rivervalley.org/globalproject/teams/:id/interestlist/person/:personId/remove',
			{id: teamId, personId: personId}, {
			  post: {method:'POST', params:{}, headers:{'Accept': 'application/json'}, withCredentials: true}
			}).post({}, callback);
		}
	};
  }
]);