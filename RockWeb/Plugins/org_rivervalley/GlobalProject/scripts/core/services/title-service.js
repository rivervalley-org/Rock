'use strict';
// from https://github.com/ngbp/ngbp/blob/e84c2469b3eb696b04c5be8601dda46fa48393e2/src/common/titleService/titleService.js

angular.module('core')

.factory( 'titleService', function ( $document ) {
  var suffix, title;
  
  var titleService = {
    setSuffix: function setSuffix ( s ) {
      suffix = s;
    },
    getSuffix: function getSuffix () {
      return suffix;
    },
    setTitle: function setTitle ( t ) {
      if ( angular.isDefined( suffix ) ) {
        title = t + suffix;
      } else {
        title = t;
      }

      $document.prop( 'title', title );
    },
    getTitle: function getTitle () {
      return $document.prop( 'title' );
    }
  };

  return titleService;
});