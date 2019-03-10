var RiverValley = {
  init: function(){
    RiverValley.Slider.init();
    RiverValley.Video.init();
    RiverValley.Map.init();
    RiverValley.ServeOpportunities.init();
    RiverValley.Social.init();
    RiverValley.LoadMore.init();
    RiverValley.Menu.init();
    RiverValley.Dropdowns.init();
  }
}

var RiverValleyNetwork = {
  init: function(){
    RiverValleyNetwork.Login.init();
  }
}

RiverValley.Slider = {
  init: function(){
      if (jQuery('.slider .slide').length>1){
          unslider = jQuery('.slider').unslider({fluid: true, fade:true});
          jQuery('.slider .slides').addClass('slider-init');
          jQuery('.arrow').click(function() {
              unslider.data('unslider')[jQuery(this).data('direction')]();
          });
      }
  }
}

RiverValley.Video = {
  init: function(){
    jQuery('.video, .video-with-copy').fitVids();
  }
}

RiverValley.Map = {
  styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
  init: function(){
    jQuery('.map').each(function(){
      var attrs = {};
      attrs.div = jQuery(this)[0];
      attrs.lat = -12.043333;
      attrs.lng = -77.028333;
      if (jQuery(this).data('zoom')!= undefined){
        attrs.zoom = jQuery(this).data('zoom');
      }
      if (jQuery(this).data('lat')!= undefined){
        attrs.lat = jQuery(this).data('lat');
        attrs.lng = jQuery(this).data('lng');
      }
      window.tempMap = new GMaps(attrs);
      window.tempMap.addStyle({
          styledMapName:"Ultra Light",
          styles: RiverValley.Map.styles,
          mapTypeId: "ultra-light"
      });
      window.tempMap.setStyle("ultra-light");
      if (jQuery(this).data('lat')!= undefined){
        tempMap.addMarker({
          lat: jQuery(this).data('lat'),
          lng: jQuery(this).data('lng'),
          icon: '/wp-content/themes/river-valley/img/mapicon.png'
        });
      }
      if (typeof markers != 'undefined'){
        var bounds = [];
        jQuery(markers).each(function(key,marker){
          bounds.push(new google.maps.LatLng(marker.lat, marker.lng));
          tempMap.addMarker({
            lat: marker.lat,
            lng: marker.lng,
             icon: '/wp-content/themes/river-valley/img/mapicon.png'
          });
        });
        tempMap.fitLatLngBounds(bounds);
      }
    });
  }
}

RiverValley.ServeOpportunities = {
  init: function(){
    jQuery('select[name="campuses"]').minimalect({
      afterinit: function(){
        jQuery('.minict_wrapper span').removeAttr('contenteditable');
      },
      onchange: function(){
        jQuery('select[name="opportunities"] option').remove();
        jQuery('.select-team').removeClass('disabled');
        jQuery('.opportunity-trigger').removeClass('active');
        opportunities = jQuery('select[name="campuses"] option:selected').data('opportunities');
        jQuery('select[name="opportunities"]').append(jQuery('<option></option>'));
        jQuery.each(opportunities,function(key,opportunity){
          jQuery('select[name="opportunities"]').append(jQuery('<option></option>').val(opportunity.url).html(opportunity.title.replace(/\\'/g,"'")));
        });
      },
      placeholder: 'Select a Campus',
      searchable: false
    });
    jQuery('select[name="opportunities"]').minimalect({
      onchange: function(){
        var url = jQuery('select[name="opportunities"] option:selected').val();
        if (url!=''){
          jQuery('a.opportunity-trigger').addClass('active').attr('href',jQuery('select[name="opportunities"] option:selected').val());
        } else {
          jQuery('a.opportunity-trigger').removeClass('active');
        }
      },
      placeholder: 'Select a Team',
      searchable: false
    });
  }
}

RiverValley.Dropdowns = {
    init: function(){
        jQuery('form:not(.pay-form) select').each(function(){
            if (jQuery(this).closest('.ginput_complex').length==0){
                jQuery(this).minimalect({
                  searchable: false,
                  remove_empty_option: false,
                  placeholder: ''
                });
            }
        });
    }
}

RiverValley.LoadMore = {
  btnClass: '.load-more',
  btnContainer: '.load-more-button-container',
  container: '.load-more-items',
  currentPage: 1,
  init: function(){
    var that = this;

    jQuery(that.btnClass).on('click',function(e){
      e.preventDefault();
      that.currentPage++;
      jQuery.get('?load-more-page=' + that.currentPage,function(response){
        var items = jQuery(response).find(that.container).html();
        jQuery(that.container).append(items);
        if (jQuery(response).find(that.btnClass).length==0){
          jQuery(that.btnClass).remove();
          jQuery(that.btnContainer).addClass('inactive');
        }
      });
    });
  }
}

RiverValley.Social = {
  init: function(){
    jQuery('.social').on('click',function(){
      jQuery('.social-drop').addClass('active');
    });
  }
}

RiverValley.Parallax = {
  init: function(){
    var s = skrollr.init({forceHeight: false});
    if (s.isMobile()) {
        s.destroy();
    }
  }
}

RiverValley.Menu = {
  init: function(){
    jQuery('.menu-item-has-children').on('click',function(){
      jQuery(this).toggleClass('open');
    });
  }
}

RiverValleyNetwork.Login = {
  init: function(){
    jQuery('.inline-popup-link,.inline-popup-link-li a').magnificPopup({
      type:'inline',
      midClick: true
    });
  }
}


jQuery(function(){
  RiverValley.init();
  RiverValleyNetwork.init();
})

jQuery(window).load(function(){
  RiverValley.Parallax.init();
});
