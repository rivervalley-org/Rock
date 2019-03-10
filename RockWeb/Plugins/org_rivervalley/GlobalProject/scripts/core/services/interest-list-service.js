'use strict';

var app = angular.module('core');

app.factory('InterestList', ['$resource',
  function($resource){
    return {
		find: function(type, callback) {
			return $resource('https://apidev.rivervalley.org/globalproject/interestlists', {}, {
			  query: {method:'GET', params:{format:'json'}, isArray:true, headers:{'Accept': 'application/json'}, withCredentials: true}
			}).query({type: type, personId: RVC.GlobalProject.user.id}, callback);
		}
	};
  }
]);