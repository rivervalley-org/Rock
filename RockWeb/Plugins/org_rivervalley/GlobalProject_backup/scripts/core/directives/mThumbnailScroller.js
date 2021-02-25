'use strict';

angular.module('core')
	.directive('mThumbnailScroller', function() {
		return {
			restrict: 'A',
			scope: {
				mThumbnailScroller: '=mThumbnailScroller'
			},
			link: function(scope, element, attrs) {
				jQuery(element).mThumbnailScroller({
					axis: attrs.mtsVertical === 'true' ? 'y' : 'x',
					//type: 'click-80',
					advanced:{
						updateOnContentResize: false,
						updateOnImageLoad: false
					}
				});
				
				// this code notifies the plugin to adjust its size once all the li/img elements have been created
				var ulEl = element.children().children()[0];
				scope.$watch(
					function () {
						return ulEl.childNodes.length; // watch the number of images loaded
					},
					function (newValue, oldValue) {
						//$(element).mThumbnailScroller('update');
						
						setTimeout(function() {
							jQuery(element).mThumbnailScroller('update');
						}, 1000);
					}
				);
			}
		};
	});