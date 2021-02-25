'use strict';

angular.module('core')
.directive('routeLoadingIndicator', function ($rootScope, $route) {
    return {
        restrict: 'E',
        template: '', // pulled the spinner out into index.html, so it can be used for both route loading AND initial asset/JS loading
        //template: '<div class="sk-circle" ng-if="isRouteLoading"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>',
        link: function(scope, elem, attrs) {
            scope.isRouteLoading = false;

            $rootScope.$on('$routeChangeStart', function(){
                scope.isRouteLoading = true;
            });

            $rootScope.$on('$routeChangeSuccess', function(){
                scope.isRouteLoading = false;
            });
        }
    };
});