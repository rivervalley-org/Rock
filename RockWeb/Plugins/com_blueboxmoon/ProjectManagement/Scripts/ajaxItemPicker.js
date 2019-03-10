(function ($)
{
  'use strict';
  window.Rock = window.Rock || {};
  Rock.controls = Rock.controls || {};
  Rock.controls.blueboxmoon = Rock.controls.blueboxmoon || {};

  Rock.controls.blueboxmoon.ajaxItemPicker = (function ()
  {
    var AjaxItemPicker = function (options)
    {
      this.controlId = options.controlId;
      this.restUrl = options.restUrl;
      this.restDetailUrl = options.restDetailUrl;
      this.defaultText = options.defaultText || '';
    };

    AjaxItemPicker.prototype.initializeEventHandlers = function ()
    {
      var controlId = this.controlId,
          restUrl = this.restUrl,
          restDetailUrl = this.restDetailUrl,
          defaultText = this.defaultText;

      var promise = null;
      var lastSelectedItemId = null;

      $('#' + controlId + '_ajaxItemPicker').autocomplete({
          source: function (request, response) {
              // abort any searches that haven't returned yet, so that we don't get a pile of results in random order
              if (promise && promise.state() === 'pending') {
                  promise.abort();
              }

              var extraOptions = '';
              if ($('#' + controlId + '_includeInactive').is(':checked')) {
                  extraOptions += '&includeInactive=true';
              }

              promise = $.ajax({
                  url: restUrl + "?name=" + encodeURIComponent(request.term) + extraOptions,
                  dataType: 'json'
              });

              promise.done(function (data) {
                  $('#' + controlId + '_ajaxItemPickerItems').first().html('');
                  response($.map(data, function (item) {
                      return item;
                  }));

                  exports.ajaxItemPickers[controlId].updateScrollbar();
              });

              promise.fail(function (xhr, status, error) {
                  console.log(status + ' [' + error + ']: ' + xhr.responseText);
                  var errorCode = xhr.status;
                  if (errorCode == 401) {
                      $('#' + controlId + '_ajaxItemPickerItems').first().html("<li class='text-danger'>Sorry, you're not authorized to search.</li>");
                  }
              });
          },
          minLength: 3,
          html: true,
          appendTo: '#' + controlId + '_ajaxItemPickerItems',
          pickerControlId: controlId,
          messages: {
              noResults: function () { },
              results: function () { }
          }
      }).data('ui-autocomplete')._renderItem = function ($ul, item) {
        if (this.options.html) {
          // override jQueryUI autocomplete's _renderItem so that we can do Html for the listitems
          // derived from http://github.com/scottgonzalez/jquery-ui-extensions

          var $div = $('<div/>').attr('class', 'radio'),

              $label = $('<label/>')
                  .html(item.Name + ' <i class="fa fa-refresh fa-spin margin-l-md loading-notification" style="display: none; opacity: .4;"></i>')
                  .prependTo($div),

              $radio = $('<input type="radio" name="item-id" />')
                  .attr('id', item.Id)
                  .attr('value', item.Id)
                  .prependTo($label),

              $li = $('<li/>')
                  .addClass('picker-select-item')
                  .attr('data-item-id', item.Id)
                  .html($div),

              $resultSection = $(this.options.appendTo);

          if (item.PickerItemDetailsHtml) {
            $(item.PickerItemDetailsHtml).appendTo($li);
          }
          else {
            var $itemDetailsDiv = $('<div/>')
                .addClass('picker-select-item-details clearfix')
                .attr('data-has-details', false)
                .hide();

            $itemDetailsDiv.appendTo($li);
          }

          if (!item.IsActive) {
            $li.addClass('is-inactive');
          }

          return $resultSection.append($li);
        }
        else {
          return $('<li></li>')
              .data('item.autocomplete', item)
              .append($('<a></a>').text(item.label))
              .appendTo($ul);
        }
      };

      $('#' + controlId + '_includeInactive').change(function ()
      {
        $('#' + controlId + '_ajaxItemPicker').autocomplete('search');
      });

      $('#' + controlId + ' a.picker-label').click(function (e)
      {
        e.preventDefault();
        $('#' + controlId).find('.picker-menu').first().slideToggle(function ()
        {
          exports.ajaxItemPickers[controlId].updateScrollbar(true);
          $(this).find('.picker-search').focus();
        });
      });

      $('#' + controlId + ' .picker-select').on('click', '.picker-select-item :input', function (e)
      {
        e.stopPropagation();
        var $selectedItem = $(this).closest('.picker-select-item');
        var $itemDetails = $selectedItem.find('.picker-select-item-details');

        var selectedItemId = $selectedItem.attr('data-item-id');
        var alreadySelected = $selectedItem.find('.picker-select-item-details').is(':visible');
        if (alreadySelected) {
            $('#' + controlId + '_btnSelect').get(0).click();
        }

        // hide other open details
        $('#' + controlId + ' .picker-select-item-details').each(function () {
            var $el = $(this),
                currentItemId = $el.closest('.picker-select-item').attr('data-item-id');

            if (currentItemId != selectedItemId) {
                $el.slideUp();
            }
        });

        var $itemDetails = $selectedItem.find('.picker-select-item-details');

        if ($itemDetails.attr('data-has-details') == 'false') {
            // add a spinner in case we have to wait on the server for a little bit
            var $spinner = $selectedItem.find('.loading-notification');
            $spinner.fadeIn(800);

            // fetch the search details from the server
            $.get(restDetailUrl + '?Id=' + selectedItemId, function (responseText, textStatus, jqXHR) {
                $itemDetails.attr('data-has-details', true);

                // hide then set the html so that we can get the slideDown effect
                $itemDetails.stop().hide().html(responseText);
                $itemDetails.slideDown(function () {
                    exports.ajaxItemPickers[controlId].updateScrollbar();
                });

                $spinner.stop().fadeOut(200);
            });
        } else {
            $selectedItem.find('.picker-select-item-details:hidden').slideDown(function () {
                exports.ajaxItemPickers[controlId].updateScrollbar();
            });
        }
      });

      $('#' + controlId).hover(
          function ()
          {

            // only show the X if there there is something picked
            if ($('#' + controlId + '_hfItemId').val() || '0' !== '0')
            {
              $('#' + controlId + '_btnSelectNone').stop().show();
            }
          },
          function ()
          {
            $('#' + controlId + '_btnSelectNone').fadeOut(500);
          });

      $('#' + controlId + '_btnCancel').click(function ()
      {
        $(this).closest('.picker-menu').slideUp(function ()
        {
          exports.ajaxItemPickers[controlId].updateScrollbar(true);
        });
      });

      $('#' + controlId + '_btnSelectNone').click(function (e)
      {

        var selectedValue = '0',
            selectedText = defaultText,
            $selectedItemLabel = $('#' + controlId + '_selectedItemLabel'),
            $hiddenItemId = $('#' + controlId + '_hfItemId'),
            $hiddenItemName = $('#' + controlId + '_hfItemName');

        $hiddenItemId.val(selectedValue);
        $hiddenItemName.val(selectedText);
        $selectedItemLabel.val(selectedValue);
        $selectedItemLabel.text(selectedText);
      });

      var setSelectedItem = function (selectedValue, selectedText)
      {
        var selectedItemLabel = $('#' + controlId + '_selectedItemLabel'),
            hiddenItemId = $('#' + controlId + '_hfItemId'),
            hiddenItemName = $('#' + controlId + '_hfItemName');

        hiddenItemId.val(selectedValue);
        hiddenItemName.val(selectedText);

        selectedItemLabel.val(selectedValue);
        selectedItemLabel.text(selectedText);

        $('#' + controlId).find('.picker-menu').slideUp();
      }

      $('#' + controlId + '_btnSelect').click(function ()
      {
        var radInput = $('#' + controlId).find('input:checked'),
            selectedValue = radInput.val(),
            selectedText = radInput.closest('.picker-select-item').find('label').text();

        setSelectedItem(selectedValue, selectedText);
      });
    };

    AjaxItemPicker.prototype.updateScrollbar = function (modal)
    {
      // first, update this control's scrollbar, then the modal's
      var $container = $('#' + this.controlId).find('.scroll-container')

      if ($container.is(':visible'))
      {
        $container.tinyscrollbar_update('relative');
      }

      // update the outer modal scrollbar
      if (modal)
      {
        Rock.dialogs.updateModalScrollBar(this.controlId);
      }
    }

    AjaxItemPicker.prototype.initialize = function ()
    {
      this.initializeEventHandlers();
    };

    var exports = {
      ajaxItemPickers: {},
      findControl: function (controlId)
      {
        return exports.ajaxItemPickers[controlId];
      },
      initialize: function (options)
      {
        if (!options.controlId) throw '`controlId` is required.';
        if (!options.restUrl) throw '`restUrl` is required.';

        var ajaxItemPicker = new AjaxItemPicker(options);
        exports.ajaxItemPickers[options.controlId] = ajaxItemPicker;
        ajaxItemPicker.initialize();
      }
    };

    return exports;
  }());
}(jQuery));