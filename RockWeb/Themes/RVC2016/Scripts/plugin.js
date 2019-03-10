var FriendlySubscriptionsPlugin = {
  init: function(){
    var that = this;
    jQuery('.confirm').on('click',function(){
      return that.handleConfirmation();
    })
  },
  handleConfirmation: function(){
    return confirm('Are you sure you want to do this?');
  }
}

jQuery(function(){
    FriendlySubscriptionsPlugin.init();
});