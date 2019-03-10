'use strict';

angular.module('core')
.directive('magnific', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
			var isGallery = attrs.magnific === "gallery";
		
            jQuery(element).magnificPopup({
				delegate: isGallery ? 'a' : undefined,
				type: 'image',
				closeOnContentClick: true,
				zoom: { enabled: true },
				gallery: isGallery ? {
					enabled: true,
					navigateByImgClick: true
				} : undefined,
				image: {
					titleSrc: 'title'
				}
			});
        }
    };
});