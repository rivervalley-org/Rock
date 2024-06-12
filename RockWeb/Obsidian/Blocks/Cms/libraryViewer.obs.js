System.register(['vue', '@Obsidian/Utility/rockDateTime', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/dropDownContent.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/slidingDateRangePicker.obs', '@Obsidian/Enums/Cms/contentLibraryItemExperienceLevel', '@Obsidian/SystemGuids/definedValue', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/slidingDateRange', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/dateTimePicker.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/rockFormField.obs', '@Obsidian/Controls/staticFormControl.obs', '@Obsidian/Enums/Cms/contentChannelItemStatus', '@Obsidian/Enums/Controls/alertType', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/guid', '@Obsidian/Controls/panel.obs'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createElementBlock, Fragment, renderList, normalizeClass, toDisplayString, pushScopeId, popScopeId, unref, createTextVNode, createElementVNode, createCommentVNode, createVNode, ref, computed, watch, onMounted, isRef, withCtx, createBlock, renderSlot, withDirectives, vModelCheckbox, RockDateTime, CheckBoxList, DropDownContent, DropDownList, RockButton, SlidingDateRangePicker, ContentLibraryItemExperienceLevel, ContentLibraryItemExperienceLevelDescription, DefinedValue, usePersonPreferences, useConfigurationValues, useInvokeBlockAction, useVModelPassthrough, parseSlidingDateRangeString, RangeType, slidingDateRangeToString, calculateSlidingDateRange, DatePicker, DateTimePicker, Modal, NotificationBox, RockFormField, StaticFormControl, ContentChannelItemStatus, AlertType, BtnType, emptyGuid, Panel;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      toDisplayString = module.toDisplayString;
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      unref = module.unref;
      createTextVNode = module.createTextVNode;
      createElementVNode = module.createElementVNode;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      onMounted = module.onMounted;
      isRef = module.isRef;
      withCtx = module.withCtx;
      createBlock = module.createBlock;
      renderSlot = module.renderSlot;
      withDirectives = module.withDirectives;
      vModelCheckbox = module.vModelCheckbox;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      DropDownContent = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      SlidingDateRangePicker = module["default"];
    }, function (module) {
      ContentLibraryItemExperienceLevel = module.ContentLibraryItemExperienceLevel;
      ContentLibraryItemExperienceLevelDescription = module.ContentLibraryItemExperienceLevelDescription;
    }, function (module) {
      DefinedValue = module.DefinedValue;
    }, function (module) {
      usePersonPreferences = module.usePersonPreferences;
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      parseSlidingDateRangeString = module.parseSlidingDateRangeString;
      RangeType = module.RangeType;
      slidingDateRangeToString = module.slidingDateRangeToString;
      calculateSlidingDateRange = module.calculateSlidingDateRange;
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      DateTimePicker = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      StaticFormControl = module["default"];
    }, function (module) {
      ContentChannelItemStatus = module.ContentChannelItemStatus;
    }, function (module) {
      AlertType = module.AlertType;
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      emptyGuid = module.emptyGuid;
    }, function (module) {
      Panel = module["default"];
    }],
    execute: (function () {

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }

      var _hoisted_1$8 = {
        class: "library-viewer-item-badge-list"
      };
      var script$9 = defineComponent({
        name: 'itemBadgeList.partial',
        props: {
          items: {
            type: Object,
            required: true
          },
          theme: {
            type: String,
            default: "light"
          }
        },
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("span", _hoisted_1$8, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, item => {
              return openBlock(), createElementBlock("span", {
                class: normalizeClass(['badge badge-default', __props.theme === 'medium' ? 'font-weight-medium' : ''])
              }, toDisplayString(item), 3);
            }), 256))]);
          };
        }
      });

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z$7 = ".library-viewer-item-badge-list[data-v-076e37ea]{display:flex;flex-wrap:wrap;gap:4px}";
      styleInject(css_248z$7);

      script$9.__scopeId = "data-v-076e37ea";
      script$9.__file = "src/Cms/LibraryViewer/itemBadgeList.partial.obs";

      var thousandsAbbreviationMap = {
        2: "K",
        3: "M",
        4: "B",
        5: "t",
        6: "q"
      };
      function abbreviateNumber(value) {
        var _thousandsAbbreviatio;
        if (typeof value === "undefined" || value === null) {
          return "" + value;
        }
        if (Number.isNaN(value) || !Number.isFinite(value)) {
          return value.toString();
        }
        var integer = value.toFixed(0);
        var negativeSymbol = "";
        if (integer.startsWith("-")) {
          negativeSymbol = "-";
          integer = integer.substring(1);
        }
        var thousandsChunks = splitIntoThousands(integer);
        var length = thousandsChunks.length;
        if (length === 1) {
          return integer;
        }
        var largestChunkNumber = thousandsChunks[0];
        var abbreviationCharacter = (_thousandsAbbreviatio = thousandsAbbreviationMap[length]) !== null && _thousandsAbbreviatio !== void 0 ? _thousandsAbbreviatio : "*";
        var suffix = "";
        for (var i = 1; i < length; i++) {
          if (thousandsChunks[i] !== "000") {
            suffix = "+";
            break;
          }
        }
        return "".concat(negativeSymbol).concat(largestChunkNumber).concat(abbreviationCharacter).concat(suffix);
      }
      function addThousandsSeparator(value) {
        if (typeof value === "undefined" || value === null) {
          return "" + value;
        }
        if (Number.isNaN(value) || !Number.isFinite(value)) {
          return value.toString();
        }
        var integer = value.toFixed(0);
        var negativeSymbol = "";
        if (integer.startsWith("-")) {
          negativeSymbol = "-";
          integer = integer.substring(1);
        }
        var thousandsChunks = splitIntoThousands(integer);
        return "".concat(negativeSymbol).concat(thousandsChunks.join(","));
      }
      function splitIntoThousands(integer) {
        var cleanValue = integer.replace(/[^\d]/, "");
        var pointer = cleanValue.length - 1;
        var chunks = [];
        while (pointer >= 0) {
          var _cleanValue, _cleanValue2, _cleanValue$pointer;
          chunks.unshift("".concat((_cleanValue = cleanValue[pointer - 2]) !== null && _cleanValue !== void 0 ? _cleanValue : "").concat((_cleanValue2 = cleanValue[pointer - 1]) !== null && _cleanValue2 !== void 0 ? _cleanValue2 : "").concat((_cleanValue$pointer = cleanValue[pointer]) !== null && _cleanValue$pointer !== void 0 ? _cleanValue$pointer : ""));
          pointer = pointer - 3;
        }
        return chunks;
      }
      function getItemCategories(item, topics) {
        var _topics$find, _item$experienceLevel;
        var categories = [];
        var topic = (_topics$find = topics.find(topic => {
          var _item$topic;
          return topic.value === ((_item$topic = item.topic) === null || _item$topic === void 0 ? void 0 : _item$topic.value);
        })) === null || _topics$find === void 0 ? void 0 : _topics$find.text;
        if ((_item$experienceLevel = item.experienceLevel) !== null && _item$experienceLevel !== void 0 && _item$experienceLevel.text) {
          categories.push(item.experienceLevel.text);
        }
        if (topic) {
          categories.push(topic);
        }
        return categories;
      }
      function compareDateStrings(value1, value2) {
        if (!value1 && !value2) {
          return 0;
        }
        if (!value1) {
          return -1;
        }
        if (!value2) {
          return 1;
        }
        var date1 = RockDateTime.parseISO(value1);
        var date2 = RockDateTime.parseISO(value2);
        return compareDates(date1, date2);
      }
      function compareDates(value1, value2) {
        if (!value1 && !value2) {
          return 0;
        }
        if (!value1) {
          return -1;
        }
        if (!value2) {
          return 1;
        }
        var ms1 = value1.toMilliseconds();
        var ms2 = value2.toMilliseconds();
        if (ms1 < ms2) {
          return -1;
        }
        if (ms1 > ms2) {
          return 1;
        }
        return 0;
      }
      function compareStrings(value1, value2) {
        if (!value1 && !value2) {
          return 0;
        }
        if (!value1) {
          return -1;
        }
        if (!value2) {
          return 1;
        }
        return value1.localeCompare(value2);
      }
      function compareNumbers(value1, value2) {
        if (!value1 && !value2) {
          return 0;
        }
        if (!value1) {
          return -1;
        }
        if (!value2) {
          return 1;
        }
        if (value1 < value2) {
          return -1;
        }
        if (value1 > value2) {
          return 1;
        }
        return 0;
      }
      function toDateString(date) {
        if (!date) {
          return date;
        }
        var d = RockDateTime.parseISO(date);
        if (!d) {
          return null;
        }
        return d.toASPString("M/d/yyyy");
      }
      function updateItemProperties(item, newProperties) {
        Object.assign(item, newProperties);
      }

      var _withScopeId$2 = n => (pushScopeId("data-v-0a48eb8a"), n = n(), popScopeId(), n);
      var _hoisted_1$7 = ["title"];
      var _hoisted_2$6 = _withScopeId$2(() => createElementVNode("i", {
        class: "fa fa-arrow-down"
      }, null, -1));
      var script$8 = defineComponent({
        name: 'itemDownloadsLabel.partial',
        props: {
          downloads: {
            type: Number,
            required: true
          }
        },
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("span", {
              class: "library-viewer-item-downloads-label text-muted",
              title: "".concat(unref(addThousandsSeparator)(__props.downloads), " ").concat(__props.downloads === 1 ? 'download' : 'downloads')
            }, [_hoisted_2$6, createTextVNode(" " + toDisplayString(unref(abbreviateNumber)(__props.downloads)), 1)], 8, _hoisted_1$7);
          };
        }
      });

      var css_248z$6 = ".library-viewer-item-downloads-label[data-v-0a48eb8a]{flex-shrink:0;font-size:12px}";
      styleInject(css_248z$6);

      script$8.__scopeId = "data-v-0a48eb8a";
      script$8.__file = "src/Cms/LibraryViewer/itemDownloadsLabel.partial.obs";

      var _withScopeId$1 = n => (pushScopeId("data-v-8f5bbfec"), n = n(), popScopeId(), n);
      var _hoisted_1$6 = {
        key: 0,
        class: "library-viewer-item-stamp-list"
      };
      var _hoisted_2$5 = {
        key: 0,
        class: "library-viewer-item-stamp stamp-popular text-warning",
        title: "Popular"
      };
      var _hoisted_3$4 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-star"
      }, null, -1));
      var _hoisted_4$3 = [_hoisted_3$4];
      var _hoisted_5$3 = {
        key: 1,
        class: "library-viewer-item-stamp stamp-popular label label-warning"
      };
      var _hoisted_6$2 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-star"
      }, null, -1));
      var _hoisted_7$2 = createTextVNode(" Popular ");
      var _hoisted_8$2 = [_hoisted_6$2, _hoisted_7$2];
      var _hoisted_9$2 = {
        key: 0,
        class: "library-viewer-item-stamp stamp-new text-info",
        title: "New"
      };
      var _hoisted_10$1 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-calendar-alt"
      }, null, -1));
      var _hoisted_11$1 = [_hoisted_10$1];
      var _hoisted_12$1 = {
        key: 1,
        class: "library-viewer-item-stamp stamp-new label label-info"
      };
      var _hoisted_13$1 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-calendar-alt"
      }, null, -1));
      var _hoisted_14$1 = createTextVNode(" New ");
      var _hoisted_15$1 = [_hoisted_13$1, _hoisted_14$1];
      var _hoisted_16$1 = {
        key: 0,
        class: "library-viewer-item-stamp stamp-trending text-primary",
        title: "Trending"
      };
      var _hoisted_17$1 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-fire-alt"
      }, null, -1));
      var _hoisted_18$1 = [_hoisted_17$1];
      var _hoisted_19$1 = {
        key: 1,
        class: "library-viewer-item-stamp stamp-trending label label-primary"
      };
      var _hoisted_20$1 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-fire-alt"
      }, null, -1));
      var _hoisted_21$1 = createTextVNode(" Trending ");
      var _hoisted_22$1 = [_hoisted_20$1, _hoisted_21$1];
      var _hoisted_23$1 = {
        key: 0,
        class: "library-viewer-item-stamp stamp-uploaded text-info",
        title: "Uploaded"
      };
      var _hoisted_24$1 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-upload"
      }, null, -1));
      var _hoisted_25$1 = [_hoisted_24$1];
      var _hoisted_26$1 = {
        key: 1,
        class: "library-viewer-item-stamp stamp-uploaded label label-info"
      };
      var _hoisted_27$1 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-upload"
      }, null, -1));
      var _hoisted_28$1 = createTextVNode(" Uploaded ");
      var _hoisted_29$1 = [_hoisted_27$1, _hoisted_28$1];
      var _hoisted_30$1 = {
        key: 0,
        title: "Downloaded",
        class: "library-viewer-item-stamp stamp-downloaded text-success"
      };
      var _hoisted_31$1 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-download"
      }, null, -1));
      var _hoisted_32$1 = [_hoisted_31$1];
      var _hoisted_33$1 = {
        key: 1,
        class: "library-viewer-item-stamp stamp-downloaded label label-success"
      };
      var _hoisted_34$1 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-download"
      }, null, -1));
      var _hoisted_35$1 = createTextVNode(" Downloaded ");
      var _hoisted_36$1 = [_hoisted_34$1, _hoisted_35$1];
      var script$7 = defineComponent({
        name: 'itemStampList.partial',
        props: {
          item: {
            type: Object,
            required: true
          },
          showLabelsForStamps: {
            type: Object,
            default: []
          }
        },
        setup(__props) {
          var props = __props;
          function isLabelShownForStamp(stampType) {
            return props.showLabelsForStamps.indexOf(stampType) !== -1;
          }
          return (_ctx, _cache) => {
            return __props.item.isPopular || __props.item.isNew || __props.item.isUploaded || __props.item.isDownloaded || __props.item.isTrending ? (openBlock(), createElementBlock("span", _hoisted_1$6, [__props.item.isPopular ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [!isLabelShownForStamp('popular') ? (openBlock(), createElementBlock("span", _hoisted_2$5, _hoisted_4$3)) : (openBlock(), createElementBlock("span", _hoisted_5$3, _hoisted_8$2))], 64)) : createCommentVNode("v-if", true), __props.item.isNew ? (openBlock(), createElementBlock(Fragment, {
              key: 1
            }, [!isLabelShownForStamp('new') ? (openBlock(), createElementBlock("span", _hoisted_9$2, _hoisted_11$1)) : (openBlock(), createElementBlock("span", _hoisted_12$1, _hoisted_15$1))], 64)) : createCommentVNode("v-if", true), __props.item.isTrending ? (openBlock(), createElementBlock(Fragment, {
              key: 2
            }, [!isLabelShownForStamp('trending') ? (openBlock(), createElementBlock("span", _hoisted_16$1, _hoisted_18$1)) : (openBlock(), createElementBlock("span", _hoisted_19$1, _hoisted_22$1))], 64)) : createCommentVNode("v-if", true), __props.item.isUploaded ? (openBlock(), createElementBlock(Fragment, {
              key: 3
            }, [!isLabelShownForStamp('uploaded') ? (openBlock(), createElementBlock("span", _hoisted_23$1, _hoisted_25$1)) : (openBlock(), createElementBlock("span", _hoisted_26$1, _hoisted_29$1))], 64)) : createCommentVNode("v-if", true), __props.item.isDownloaded ? (openBlock(), createElementBlock(Fragment, {
              key: 4
            }, [!isLabelShownForStamp('downloaded') ? (openBlock(), createElementBlock("span", _hoisted_30$1, _hoisted_32$1)) : (openBlock(), createElementBlock("span", _hoisted_33$1, _hoisted_36$1))], 64)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true);
          };
        }
      });

      var css_248z$5 = ".library-viewer-item-stamp-list[data-v-8f5bbfec]{display:flex;flex-shrink:0;gap:6px}";
      styleInject(css_248z$5);

      script$7.__scopeId = "data-v-8f5bbfec";
      script$7.__file = "src/Cms/LibraryViewer/itemStampList.partial.obs";

      var _hoisted_1$5 = {
        class: "library-viewer-item-list"
      };
      var _hoisted_2$4 = ["onClick"];
      var _hoisted_3$3 = {
        class: "library-viewer-list-item-header"
      };
      var _hoisted_4$2 = {
        class: "m-0"
      };
      var _hoisted_5$2 = {
        key: 0,
        class: "library-viewer-list-item-summary"
      };
      var _hoisted_6$1 = {
        class: "library-viewer-list-item-publish-info"
      };
      var _hoisted_7$1 = {
        key: 0,
        class: "library-viewer-list-item-published-date"
      };
      var _hoisted_8$1 = {
        key: 1,
        class: "library-viewer-list-item-published-by"
      };
      var _hoisted_9$1 = {
        class: "library-viewer-list-item-footer"
      };
      var script$6 = defineComponent({
        name: 'itemList.partial',
        props: {
          items: {
            type: Object,
            required: true
          },
          selectedItem: {
            type: Object
          }
        },
        emits: ["select"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          function getBadges(item) {
            return getItemCategories(item, props.items.filter(item => !!item.topic).map(item => item.topic));
          }
          function onClicked(item) {
            emit("select", item);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$5, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, item => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(['library-viewer-list-item', item === __props.selectedItem ? 'active' : '']),
                onClick: $event => onClicked(item)
              }, [createElementVNode("div", _hoisted_3$3, [createElementVNode("h4", _hoisted_4$2, toDisplayString(item.title), 1), createVNode(unref(script$7), {
                item: item
              }, null, 8, ["item"])]), item.summary ? (openBlock(), createElementBlock("div", _hoisted_5$2, toDisplayString(item.summary), 1)) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_6$1, [item.publishedDateTime ? (openBlock(), createElementBlock("span", _hoisted_7$1, "Published on " + toDisplayString(unref(toDateString)(item.publishedDateTime)), 1)) : createCommentVNode("v-if", true), item.sourcePublisherName ? (openBlock(), createElementBlock("span", _hoisted_8$1, toDisplayString(item.sourcePublisherName), 1)) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_9$1, [createVNode(unref(script$9), {
                items: getBadges(item)
              }, null, 8, ["items"]), createVNode(unref(script$8), {
                downloads: item.downloads
              }, null, 8, ["downloads"])])], 10, _hoisted_2$4);
            }), 256))]);
          };
        }
      });

      var css_248z$4 = ".library-viewer-item-list[data-v-d183d242]{border-right:1px solid var(--panel-border);flex-shrink:0;max-width:40%;overflow:auto;width:479px}.library-viewer-list-item[data-v-d183d242]{border-bottom:1px solid var(--panel-border);cursor:pointer;display:flex;flex-direction:column;flex-wrap:nowrap;gap:16px;padding:16px 24px}.library-viewer-list-item[data-v-d183d242]:hover{background:#fcfcfc}.library-viewer-list-item.active[data-v-d183d242],.library-viewer-list-item[data-v-d183d242]:active{background:#f5f5f5}.library-viewer-list-item-header[data-v-d183d242]{align-items:center;display:flex;flex-direction:row;gap:8px;justify-content:space-between}.library-viewer-list-item-header .stamps[data-v-d183d242]{align-self:flex-start}.library-viewer-list-item-summary[data-v-d183d242]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;flex:1;overflow:hidden;position:relative;text-overflow:ellipsis;white-space:normal}.library-viewer-list-item-publish-info[data-v-d183d242]{display:flex;flex-direction:row;flex-shrink:0;font-size:14px;justify-content:space-between}.library-viewer-list-item-footer[data-v-d183d242]{align-items:center;display:flex;flex-direction:row;flex-shrink:0;justify-content:space-between}";
      styleInject(css_248z$4);

      script$6.__scopeId = "data-v-d183d242";
      script$6.__file = "src/Cms/LibraryViewer/itemList.partial.obs";

      var PersonPreferenceKey = function (PersonPreferenceKey) {
        PersonPreferenceKey["FilterExperienceLevels"] = "filter-experience-levels-preference";
        PersonPreferenceKey["FilterLicenseTypes"] = "filter-license-types-preference";
        PersonPreferenceKey["FilterMustBeTrending"] = "filter-must-be-trending-preference";
        PersonPreferenceKey["FilterMustBePopular"] = "filter-must-be-popular-preference";
        PersonPreferenceKey["FilterOrganizations"] = "filter-organizations-preference";
        PersonPreferenceKey["FilterPublishedDate"] = "filter-published-date-preference";
        PersonPreferenceKey["FilterTopics"] = "filter-topics-preference";
        PersonPreferenceKey["Sort"] = "sort-preference";
        return PersonPreferenceKey;
      }({});

      var _hoisted_1$4 = {
        class: "library-viewer-item-list-filters"
      };
      var _hoisted_2$3 = createElementVNode("i", {
        class: "fa fa-filter"
      }, null, -1);
      var _hoisted_3$2 = {
        class: "library-viewer-item-list-filters-container p-3"
      };
      var _hoisted_4$1 = createTextVNode("Apply Filters");
      var _hoisted_5$1 = createTextVNode("Clear All");
      var DownloadItem = function (DownloadItem) {
        DownloadItem["Trending"] = "Trending";
        DownloadItem["Popular"] = "Popular";
        return DownloadItem;
      }(DownloadItem || {});
      var script$5 = defineComponent({
        name: 'itemListFilters.partial',
        props: {
          modelValue: {
            type: Boolean,
            default: false,
            required: false
          },
          items: {
            type: Object,
            required: true
          },
          areFiltersAppliedOnClose: {
            type: Boolean,
            default: true,
            required: false
          },
          contentChannelIdKey: {
            type: String,
            required: false
          }
        },
        emits: ["update:modelValue", "filteredItems"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var preferences = usePersonPreferences().blockPreferences;
          var downloadOptions = [{
            text: "Trending",
            value: DownloadItem.Trending
          }, {
            text: "Popular",
            value: DownloadItem.Popular
          }];
          var noFilterOptions = {
            filterButtonText: "Filter",
            filter: _ => true
          };
          var noFiltersBag = {
            mustBePopular: false,
            mustBeTrending: false
          };
          var internalIsOpen = useVModelPassthrough(props, "modelValue", emit);
          var pendingFiltersBag = ref(noFiltersBag);
          var appliedFilters = ref(noFilterOptions);
          var personPreferenceKeyResolver = computed(() => {
            if (props.contentChannelIdKey) {
              return key => "".concat(props.contentChannelIdKey, "-").concat(key);
            } else {
              return key => key;
            }
          });
          var licenseTypeOptions = computed(() => {
            var distinctLicenseTypes = {};
            var _iterator = _createForOfIteratorHelper(props.items.filter(item => !!item.licenseType).map(item => item.licenseType)),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var licenseType = _step.value;
                if (licenseType.value && !distinctLicenseTypes[licenseType.value]) {
                  distinctLicenseTypes[licenseType.value] = licenseType;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            var licenseTypePreferredOrder = [DefinedValue.LibraryLicenseTypeOpen.toLowerCase(), DefinedValue.LibraryLicenseTypeAuthorAttribution.toLowerCase(), DefinedValue.LibraryLicenseTypeOrganizationAttribution.toLowerCase()];
            return Object.values(distinctLicenseTypes).sort((licenseType1, licenseType2) => {
              var index1 = licenseTypePreferredOrder.indexOf(licenseType1.value);
              var index2 = licenseTypePreferredOrder.indexOf(licenseType2.value);
              if (index1 === -1 && index2 === -1) {
                return compareStrings(licenseType1.text, licenseType2.text);
              }
              if (index1 === -1) {
                return 1;
              }
              if (index2 === -1) {
                return -1;
              }
              if (index1 < index2) {
                return -1;
              } else if (index1 > index2) {
                return 1;
              } else {
                return 0;
              }
            });
          });
          var experienceLevelOptions = computed(() => {
            var distinctExperienceLevels = {};
            var _iterator2 = _createForOfIteratorHelper(props.items.filter(item => !!item.experienceLevel).map(item => item.experienceLevel)),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var experienceLevel = _step2.value;
                if (experienceLevel.value && !distinctExperienceLevels[experienceLevel.value]) {
                  distinctExperienceLevels[experienceLevel.value] = experienceLevel;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            return Object.values(distinctExperienceLevels).sort((a, b) => compareStrings(a.value, b.value));
          });
          var topicOptions = computed(() => {
            var distinctTopics = {};
            var _iterator3 = _createForOfIteratorHelper(props.items.filter(item => !!item.topic).map(item => item.topic)),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var topic = _step3.value;
                if (topic !== null && topic !== void 0 && topic.value && !distinctTopics[topic.value]) {
                  distinctTopics[topic.value] = topic;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            return Object.values(distinctTopics).sort((topic1, topic2) => compareStrings(topic1.text, topic2.text));
          });
          var organizationOptions = computed(() => {
            var distinctOrganizations = {};
            var _iterator4 = _createForOfIteratorHelper(props.items.filter(item => !!item.sourcePublisherName).map(item => item.sourcePublisherName)),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var organizationName = _step4.value;
                if (!distinctOrganizations[organizationName]) {
                  distinctOrganizations[organizationName] = {
                    text: organizationName,
                    value: organizationName
                  };
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            return Object.values(distinctOrganizations).sort((organization1, organization2) => compareStrings(organization1.text, organization2.text));
          });
          var pendingDownloads = computed({
            get() {
              var downloads = [];
              if (pendingFiltersBag.value.mustBeTrending) {
                downloads.push(DownloadItem.Trending);
              }
              if (pendingFiltersBag.value.mustBePopular) {
                downloads.push(DownloadItem.Popular);
              }
              return downloads;
            },
            set(newValue) {
              pendingFiltersBag.value.mustBePopular = newValue.some(v => v === DownloadItem.Popular);
              pendingFiltersBag.value.mustBeTrending = newValue.some(v => v === DownloadItem.Trending);
            }
          });
          var pendingOrganizations = computed({
            get() {
              var _pendingFiltersBag$va;
              return (_pendingFiltersBag$va = pendingFiltersBag.value.organizations) !== null && _pendingFiltersBag$va !== void 0 ? _pendingFiltersBag$va : [];
            },
            set(newValue) {
              pendingFiltersBag.value.organizations = newValue;
            }
          });
          var pendingPublishedDate = computed({
            get() {
              if (pendingFiltersBag.value.publishedDate) {
                var slidingDateRange = parseSlidingDateRangeString(pendingFiltersBag.value.publishedDate);
                if (slidingDateRange) {
                  return slidingDateRange;
                }
              }
              return {
                rangeType: RangeType.All
              };
            },
            set(newValue) {
              if (newValue) {
                pendingFiltersBag.value.publishedDate = slidingDateRangeToString(newValue);
              } else {
                pendingFiltersBag.value.publishedDate = null;
              }
            }
          });
          var pendingTopics = computed({
            get() {
              var _pendingFiltersBag$va2;
              return (_pendingFiltersBag$va2 = pendingFiltersBag.value.topics) !== null && _pendingFiltersBag$va2 !== void 0 ? _pendingFiltersBag$va2 : [];
            },
            set(newValue) {
              pendingFiltersBag.value.topics = newValue;
            }
          });
          var pendingLicenseTypes = computed({
            get() {
              var _pendingFiltersBag$va3;
              return (_pendingFiltersBag$va3 = pendingFiltersBag.value.licenseTypes) !== null && _pendingFiltersBag$va3 !== void 0 ? _pendingFiltersBag$va3 : [];
            },
            set(newValue) {
              pendingFiltersBag.value.licenseTypes = newValue;
            }
          });
          var pendingExperienceLevels = computed({
            get() {
              var _pendingFiltersBag$va4, _pendingFiltersBag$va5;
              return (_pendingFiltersBag$va4 = (_pendingFiltersBag$va5 = pendingFiltersBag.value.experienceLevels) === null || _pendingFiltersBag$va5 === void 0 ? void 0 : _pendingFiltersBag$va5.map(e => e.toString())) !== null && _pendingFiltersBag$va4 !== void 0 ? _pendingFiltersBag$va4 : [];
            },
            set(newValue) {
              pendingFiltersBag.value.experienceLevels = newValue.map(e => ContentLibraryItemExperienceLevel[ContentLibraryItemExperienceLevelDescription[Number(e)]]);
            }
          });
          function getTopicFilter(bag) {
            var topicGuids = bag.topics;
            if (!(topicGuids !== null && topicGuids !== void 0 && topicGuids.length)) {
              return null;
            }
            return {
              filterDescriptions: topicGuids.map(topicGuid => getTopicName(topicGuid)).filter(topicName => !!topicName),
              filter(item) {
                var _item$topic, _item$topic$value;
                var itemTopicGuid = (_item$topic = item.topic) === null || _item$topic === void 0 ? void 0 : (_item$topic$value = _item$topic.value) === null || _item$topic$value === void 0 ? void 0 : _item$topic$value.toLowerCase();
                return topicGuids.some(topicGuid => topicGuid.toLowerCase() === itemTopicGuid);
              }
            };
          }
          function getOrganizationFilter(bag) {
            var organizationNames = bag.organizations;
            if (!(organizationNames !== null && organizationNames !== void 0 && organizationNames.length)) {
              return null;
            }
            return {
              filterDescriptions: organizationNames,
              filter(item) {
                var _item$sourcePublisher;
                var itemSourcePublisherName = (_item$sourcePublisher = item.sourcePublisherName) === null || _item$sourcePublisher === void 0 ? void 0 : _item$sourcePublisher.toLowerCase();
                return organizationNames.some(organizationName => organizationName.toLowerCase() === itemSourcePublisherName);
              }
            };
          }
          function getTrendingFilter(bag) {
            if (!bag.mustBeTrending) {
              return null;
            }
            return {
              filterDescriptions: ["Trending"],
              filter(item) {
                return item.isTrending;
              }
            };
          }
          function getPopularFilter(bag) {
            if (!bag.mustBePopular) {
              return null;
            }
            return {
              filterDescriptions: ["Popular"],
              filter(item) {
                return item.isPopular;
              }
            };
          }
          function getLicenseTypeFilter(bag) {
            var licenseTypeGuids = bag.licenseTypes;
            if (!(licenseTypeGuids !== null && licenseTypeGuids !== void 0 && licenseTypeGuids.length)) {
              return null;
            }
            return {
              filterDescriptions: licenseTypeGuids.map(licenseTypeGuid => getLicenseTypeName(licenseTypeGuid)).filter(licenseTypeName => !!licenseTypeName),
              filter(item) {
                var _item$licenseType, _item$licenseType$val;
                var itemLicenseTypeGuid = (_item$licenseType = item.licenseType) === null || _item$licenseType === void 0 ? void 0 : (_item$licenseType$val = _item$licenseType.value) === null || _item$licenseType$val === void 0 ? void 0 : _item$licenseType$val.toLowerCase();
                return licenseTypeGuids.some(licenseTypeGuid => licenseTypeGuid.toLowerCase() === itemLicenseTypeGuid);
              }
            };
          }
          function getExperienceLevelFilter(bag) {
            var experienceLevels = bag.experienceLevels;
            if (!(experienceLevels !== null && experienceLevels !== void 0 && experienceLevels.length)) {
              return null;
            }
            return {
              filterDescriptions: experienceLevels.map(experienceLevel => ContentLibraryItemExperienceLevelDescription[experienceLevel]),
              filter(item) {
                var _item$experienceLevel;
                var itemExperienceLevel = ContentLibraryItemExperienceLevel[ContentLibraryItemExperienceLevelDescription[Number((_item$experienceLevel = item.experienceLevel) === null || _item$experienceLevel === void 0 ? void 0 : _item$experienceLevel.value)]];
                return experienceLevels.indexOf(itemExperienceLevel) !== -1;
              }
            };
          }
          function getPublishDateFilter(bag) {
            var publishedDate = bag.publishedDate;
            if (!publishedDate) {
              return null;
            }
            var slidingDateRange = parseSlidingDateRangeString(publishedDate);
            if (!slidingDateRange) {
              return null;
            }
            var dateRange = calculateSlidingDateRange(slidingDateRange);
            if (!dateRange.start && !dateRange.end) {
              return null;
            }
            return {
              filterDescriptions: ["Publish Date"],
              filter(item) {
                var _item$publishedDateTi;
                var itemPublishedDate = RockDateTime.parseISO((_item$publishedDateTi = item.publishedDateTime) !== null && _item$publishedDateTi !== void 0 ? _item$publishedDateTi : "");
                if (!itemPublishedDate) {
                  return false;
                }
                if (dateRange.start && itemPublishedDate.toMilliseconds() < dateRange.start.toMilliseconds()) {
                  return false;
                }
                if (dateRange.end && itemPublishedDate.toMilliseconds() >= dateRange.end.toMilliseconds()) {
                  return false;
                }
                return true;
              }
            };
          }
          function applyFilters(bag) {
            appliedFilters.value = createFilters(bag);
            emit("filteredItems", props.items.filter(appliedFilters.value.filter));
          }
          function saveFilterPersonPreferences(bag) {
            var keyResolver = personPreferenceKeyResolver.value;
            preferences.setValue(keyResolver(PersonPreferenceKey.FilterExperienceLevels), JSON.stringify(bag.experienceLevels));
            preferences.setValue(keyResolver(PersonPreferenceKey.FilterLicenseTypes), JSON.stringify(bag.licenseTypes));
            preferences.setValue(keyResolver(PersonPreferenceKey.FilterMustBePopular), JSON.stringify(bag.mustBePopular));
            preferences.setValue(keyResolver(PersonPreferenceKey.FilterMustBeTrending), JSON.stringify(bag.mustBeTrending));
            preferences.setValue(keyResolver(PersonPreferenceKey.FilterOrganizations), JSON.stringify(bag.organizations));
            preferences.setValue(keyResolver(PersonPreferenceKey.FilterPublishedDate), JSON.stringify(bag.publishedDate));
            preferences.setValue(keyResolver(PersonPreferenceKey.FilterTopics), JSON.stringify(bag.topics));
            preferences.save();
          }
          function createFilters(bag) {
            var filters = [getTopicFilter(bag), getOrganizationFilter(bag), getTrendingFilter(bag), getPopularFilter(bag), getLicenseTypeFilter(bag), getExperienceLevelFilter(bag), getPublishDateFilter(bag)].filter(f => !!f);
            if (filters.length === 0) {
              return noFilterOptions;
            }
            var combinedFilters = {
              filterDescriptions: filters.map(f => f.filterDescriptions).reduce((fd1, fd2) => fd1.concat(fd2), []),
              filter(item) {
                return filters.every(f => f.filter(item));
              }
            };
            return {
              filterButtonText: combinedFilters.filterDescriptions.length === 1 ? "Filter: ".concat(combinedFilters.filterDescriptions[0]) : "Filters Applied: ".concat(combinedFilters.filterDescriptions.length),
              filter: combinedFilters.filter
            };
          }
          function getFiltersPersonPreference() {
            try {
              var keyResolver = personPreferenceKeyResolver.value;
              var rawPreferences = {
                experienceLevels: preferences.getValue(keyResolver(PersonPreferenceKey.FilterExperienceLevels)),
                licenseTypes: preferences.getValue(keyResolver(PersonPreferenceKey.FilterLicenseTypes)),
                mustBePopular: preferences.getValue(keyResolver(PersonPreferenceKey.FilterMustBePopular)),
                mustBeTrending: preferences.getValue(keyResolver(PersonPreferenceKey.FilterMustBeTrending)),
                organizations: preferences.getValue(keyResolver(PersonPreferenceKey.FilterOrganizations)),
                publishedDate: preferences.getValue(keyResolver(PersonPreferenceKey.FilterPublishedDate)),
                topics: preferences.getValue(keyResolver(PersonPreferenceKey.FilterTopics))
              };
              return {
                experienceLevels: rawPreferences.experienceLevels ? JSON.parse(rawPreferences.experienceLevels) : null,
                licenseTypes: rawPreferences.licenseTypes ? JSON.parse(rawPreferences.licenseTypes) : null,
                mustBePopular: !!(rawPreferences.mustBePopular ? JSON.parse(rawPreferences.mustBePopular) : false),
                mustBeTrending: !!(rawPreferences.mustBeTrending ? JSON.parse(rawPreferences.mustBeTrending) : false),
                organizations: rawPreferences.organizations ? JSON.parse(rawPreferences.organizations) : null,
                publishedDate: rawPreferences.publishedDate ? JSON.parse(rawPreferences.publishedDate) : null,
                topics: rawPreferences.topics ? JSON.parse(rawPreferences.topics) : null
              };
            } catch (e) {
              return noFiltersBag;
            }
          }
          function getLicenseTypeName(licenseTypeGuid) {
            var _licenseTypeOptions$v;
            return (_licenseTypeOptions$v = licenseTypeOptions.value.find(o => {
              var _o$value;
              return ((_o$value = o.value) === null || _o$value === void 0 ? void 0 : _o$value.toLowerCase()) === (licenseTypeGuid === null || licenseTypeGuid === void 0 ? void 0 : licenseTypeGuid.toLowerCase());
            })) === null || _licenseTypeOptions$v === void 0 ? void 0 : _licenseTypeOptions$v.text;
          }
          function getTopicName(topicGuid) {
            var _topicOptions$value$f;
            return (_topicOptions$value$f = topicOptions.value.find(o => {
              var _o$value2;
              return ((_o$value2 = o.value) === null || _o$value2 === void 0 ? void 0 : _o$value2.toLowerCase()) === (topicGuid === null || topicGuid === void 0 ? void 0 : topicGuid.toLowerCase());
            })) === null || _topicOptions$value$f === void 0 ? void 0 : _topicOptions$value$f.text;
          }
          function onApplyClicked() {
            applyFilters(pendingFiltersBag.value);
            saveFilterPersonPreferences(pendingFiltersBag.value);
          }
          function onClearAllClicked() {
            pendingFiltersBag.value = {
              mustBePopular: false,
              mustBeTrending: false
            };
          }
          watch(() => [props.items], () => {
            applyFilters(pendingFiltersBag.value);
          });
          watch(() => internalIsOpen.value, (isOpen, wasOpen) => {
            if (!isOpen && wasOpen && props.areFiltersAppliedOnClose) {
              applyFilters(pendingFiltersBag.value);
              saveFilterPersonPreferences(pendingFiltersBag.value);
            }
          });
          onMounted(() => {
            pendingFiltersBag.value = getFiltersPersonPreference();
            applyFilters(pendingFiltersBag.value);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$4, [createVNode(unref(DropDownContent), {
              modelValue: unref(internalIsOpen),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(internalIsOpen) ? internalIsOpen.value = $event : null)
            }, {
              anchor: withCtx(() => [createVNode(unref(RockButton), {
                btnType: "tool",
                btnSize: "xs"
              }, {
                default: withCtx(() => [_hoisted_2$3, createTextVNode(" " + toDisplayString(appliedFilters.value.filterButtonText), 1)]),
                _: 1
              })]),
              default: withCtx(() => [createElementVNode("div", _hoisted_3$2, [createVNode(unref(DropDownList), {
                modelValue: unref(pendingTopics),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(pendingTopics) ? pendingTopics.value = $event : null),
                enhanceForLongLists: true,
                grouped: false,
                items: unref(topicOptions),
                label: "Topics",
                multiple: true,
                showBlankItem: true
              }, null, 8, ["modelValue", "items"]), createVNode(unref(DropDownList), {
                modelValue: unref(pendingOrganizations),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(pendingOrganizations) ? pendingOrganizations.value = $event : null),
                enhanceForLongLists: true,
                grouped: false,
                items: unref(organizationOptions),
                label: "Organizations",
                multiple: true,
                showBlankItem: true
              }, null, 8, ["modelValue", "items"]), createVNode(unref(CheckBoxList), {
                modelValue: unref(pendingDownloads),
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(pendingDownloads) ? pendingDownloads.value = $event : null),
                horizontal: true,
                items: downloadOptions,
                label: "Downloads"
              }, null, 8, ["modelValue"]), createVNode(unref(CheckBoxList), {
                modelValue: unref(pendingLicenseTypes),
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(pendingLicenseTypes) ? pendingLicenseTypes.value = $event : null),
                horizontal: true,
                items: unref(licenseTypeOptions),
                label: "License Type"
              }, null, 8, ["modelValue", "items"]), createVNode(unref(CheckBoxList), {
                modelValue: unref(pendingExperienceLevels),
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(pendingExperienceLevels) ? pendingExperienceLevels.value = $event : null),
                horizontal: true,
                items: unref(experienceLevelOptions),
                label: "Experience Level"
              }, null, 8, ["modelValue", "items"]), createVNode(unref(SlidingDateRangePicker), {
                modelValue: unref(pendingPublishedDate),
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(pendingPublishedDate) ? pendingPublishedDate.value = $event : null),
                label: "Publish Date",
                previewLocation: "Top"
              }, null, 8, ["modelValue"]), !__props.areFiltersAppliedOnClose ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                onClick: onApplyClicked,
                btnSize: "xs",
                class: "mr-1"
              }, {
                default: withCtx(() => [_hoisted_4$1]),
                _: 1
              })) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
                onClick: onClearAllClicked,
                btnSize: "xs"
              }, {
                default: withCtx(() => [_hoisted_5$1]),
                _: 1
              })])]),
              _: 1
            }, 8, ["modelValue"])]);
          };
        }
      });

      var css_248z$3 = ".library-viewer-item-list-filters-container{max-width:100%;overflow:hidden;width:410px}.library-viewer-item-list-filters-container .rc-virtual-list-holder{max-height:200px;overflow-y:hidden}.library-viewer-item-list-filters-container .ant-select-loading{display:none}.ant-select{position:relative!important}";
      styleInject(css_248z$3);

      script$5.__file = "src/Cms/LibraryViewer/itemListFilters.partial.obs";

      var script$4 = defineComponent({
        name: 'toolbarMenu.partial',
        props: {
          iconCssClass: {
            type: String,
            required: false
          },
          menuButtonCssClass: {
            type: String,
            required: false
          },
          title: {
            type: String,
            required: false
          },
          getTitle: {
            type: Object,
            required: false
          }
        },
        setup(__props) {
          var props = __props;
          var dropDownElement = ref();
          var internalTitle = computed(() => {
            var _props$title;
            if (props.getTitle) {
              return props.getTitle();
            }
            return (_props$title = props.title) !== null && _props$title !== void 0 ? _props$title : "";
          });
          return (_ctx, _cache) => {
            var _props$menuButtonCss;
            return openBlock(), createElementBlock("div", {
              class: "btn-group dropdown",
              ref_key: "dropDownElement",
              ref: dropDownElement
            }, [createElementVNode("button", {
              "aria-expanded": "false",
              "aria-haspopup": "true",
              class: normalizeClass(['btn btn-xs btn-tool dropdown-toggle', (_props$menuButtonCss = __props.menuButtonCssClass) !== null && _props$menuButtonCss !== void 0 ? _props$menuButtonCss : '']),
              "data-toggle": "dropdown",
              type: "button"
            }, [__props.iconCssClass ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass(__props.iconCssClass)
            }, null, 2)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(unref(internalTitle)), 1)], 2), renderSlot(_ctx.$slots, "default")], 512);
          };
        }
      });

      script$4.__file = "src/Cms/LibraryViewer/toolbarMenu.partial.obs";

      var _hoisted_1$3 = createTextVNode("   ");
      var _hoisted_2$2 = {
        class: "text-muted"
      };
      var script$3 = defineComponent({
        name: 'toolbarMenuButtons.partial',
        props: {
          modelValue: {
            type: Object
          },
          iconCssClass: {
            type: String,
            required: false
          },
          itemCssClass: {
            type: String,
            required: false
          },
          items: {
            type: Object,
            required: true
          },
          dropDownMenuAlignment: {
            type: String,
            default: "left"
          },
          title: {
            type: String,
            required: false
          },
          getTitle: {
            type: Object,
            required: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          function onItemClicked(item) {
            emit("update:modelValue", item);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("ul", {
              class: normalizeClass("dropdown-menu dropdown-menu-".concat(__props.dropDownMenuAlignment))
            }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, item => {
              return openBlock(), createElementBlock("li", null, [createVNode(unref(RockButton), {
                btnType: "link",
                class: normalizeClass(__props.itemCssClass),
                onClick: $event => onItemClicked(item)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(item.title) + " ", 1), item.subTitle ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [_hoisted_1$3, createElementVNode("small", _hoisted_2$2, toDisplayString(item.subTitle), 1)], 64)) : createCommentVNode("v-if", true)]),
                _: 2
              }, 1032, ["class", "onClick"])]);
            }), 256))], 2);
          };
        }
      });

      script$3.__file = "src/Cms/LibraryViewer/toolbarMenuButtons.partial.obs";

      var _hoisted_1$2 = {
        class: "library-viewer-item-list-sort"
      };
      var script$2 = defineComponent({
        name: 'itemListSort.partial',
        props: {
          items: {
            type: Object,
            required: true
          },
          contentChannelIdKey: {
            type: String,
            required: false
          }
        },
        emits: ["sortedItems"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var preferences = usePersonPreferences().blockPreferences;
          var defaultSortOption = {
            key: "default",
            sortButtonText: "Sort",
            sort(item1, item2) {
              return compareDateStrings(item1 === null || item1 === void 0 ? void 0 : item1.publishedDateTime, item2 === null || item2 === void 0 ? void 0 : item2.publishedDateTime) * -1;
            }
          };
          var sortOptions = [{
            key: "publish-date-descending",
            title: "Publish Date - Newest to Oldest",
            sortButtonText: "Sort: Publish Date",
            sort(item1, item2) {
              return compareDateStrings(item1 === null || item1 === void 0 ? void 0 : item1.publishedDateTime, item2 === null || item2 === void 0 ? void 0 : item2.publishedDateTime) * -1;
            }
          }, {
            key: "downloads-descending",
            title: "Downloads - Most to Fewest",
            sortButtonText: "Sort: Downloads",
            sort(item1, item2) {
              return compareNumbers(item1 === null || item1 === void 0 ? void 0 : item1.downloads, item2 === null || item2 === void 0 ? void 0 : item2.downloads) * -1;
            }
          }, {
            key: "organization-ascending",
            title: "Organization",
            sortButtonText: "Sort: Organization",
            sort(item1, item2) {
              return compareStrings(item1 === null || item1 === void 0 ? void 0 : item1.sourcePublisherName, item2 === null || item2 === void 0 ? void 0 : item2.sourcePublisherName);
            }
          }];
          var appliedSortOption = ref(defaultSortOption);
          var personPreferenceKeyResolver = computed(() => {
            if (props.contentChannelIdKey) {
              return key => "".concat(props.contentChannelIdKey, "-").concat(key);
            } else {
              return key => key;
            }
          });
          function applySort() {
            var sortedItems = [...props.items].sort(appliedSortOption.value.sort);
            emit("sortedItems", sortedItems);
          }
          function getSortPersonPreference() {
            var _sortOptions$find;
            var keyResolver = personPreferenceKeyResolver.value;
            var sortKey = preferences.getValue(keyResolver(PersonPreferenceKey.Sort));
            return (_sortOptions$find = sortOptions.find(sortOption => sortOption.key === sortKey)) !== null && _sortOptions$find !== void 0 ? _sortOptions$find : defaultSortOption;
          }
          function saveSortPersonPreference(sort) {
            var keyResolver = personPreferenceKeyResolver.value;
            preferences.setValue(keyResolver(PersonPreferenceKey.Sort), sort.key);
            preferences.save();
          }
          function getSortTitle() {
            if (appliedSortOption.value) {
              return appliedSortOption.value.sortButtonText;
            }
            return "Sort";
          }
          watch(() => props.items, () => {
            applySort();
          });
          watch(() => appliedSortOption.value, () => {
            saveSortPersonPreference(appliedSortOption.value);
            applySort();
          });
          onMounted(() => {
            appliedSortOption.value = getSortPersonPreference();
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$2, [createVNode(unref(script$4), {
              getTitle: getSortTitle,
              iconCssClass: "fa fa-sort",
              menuButtonCssClass: "library-viewer-toolbar-button"
            }, {
              default: withCtx(() => [createVNode(unref(script$3), {
                modelValue: appliedSortOption.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => appliedSortOption.value = $event),
                dropDownMenuAlignment: "right",
                itemClass: "library-viewer-item-list-sort-button",
                items: sortOptions
              }, null, 8, ["modelValue"])]),
              _: 1
            })]);
          };
        }
      });

      var css_248z$2 = ".library-viewer-item-list-sort-container[data-v-7e1032c6]{display:flex;flex-direction:column}.library-viewer-item-list-sort-button[data-v-7e1032c6]{border:none;text-align:left}";
      styleInject(css_248z$2);

      script$2.__scopeId = "data-v-7e1032c6";
      script$2.__file = "src/Cms/LibraryViewer/itemListSort.partial.obs";

      var _withScopeId = n => (pushScopeId("data-v-6c798b51"), n = n(), popScopeId(), n);
      var _hoisted_1$1 = {
        class: "library-viewer-item-preview"
      };
      var _hoisted_2$1 = {
        class: "library-viewer-item-preview-container"
      };
      var _hoisted_3$1 = {
        class: "library-viewer-item-preview-header"
      };
      var _hoisted_4 = {
        class: "summary"
      };
      var _hoisted_5 = {
        class: "library-viewer-item-preview-author-and-stamps"
      };
      var _hoisted_6 = {
        class: "author"
      };
      var _hoisted_7 = {
        class: "library-viewer-item-preview-meta-and-download"
      };
      var _hoisted_8 = {
        class: "library-viewer-item-preview-meta"
      };
      var _hoisted_9 = {
        key: 0,
        class: "published-date"
      };
      var _hoisted_10 = createTextVNode();
      var _hoisted_11 = {
        key: 1,
        class: "published-by"
      };
      var _hoisted_12 = {
        class: "library-viewer-item-preview-classification"
      };
      var _hoisted_13 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-arrow-down"
      }, null, -1));
      var _hoisted_14 = createTextVNode();
      var _hoisted_15 = {
        class: "library-viewer-item-preview-download-button-label"
      };
      var _hoisted_16 = ["src"];
      var _hoisted_17 = ["innerHTML"];
      var _hoisted_18 = {
        class: "row"
      };
      var _hoisted_19 = {
        class: "col-sm-6"
      };
      var _hoisted_20 = {
        class: "col-sm-6"
      };
      var _hoisted_21 = {
        key: 0,
        class: "row"
      };
      var _hoisted_22 = {
        class: "col-xs-6 col-sm-3"
      };
      var _hoisted_23 = {
        class: "col-xs-6 col-sm-3"
      };
      var _hoisted_24 = {
        class: "col-xs-12 col-sm-6"
      };
      var _hoisted_25 = {
        name: "statusButtonGroup",
        class: "btn-group btn-toggle"
      };
      var _hoisted_26 = createTextVNode("Pending");
      var _hoisted_27 = createTextVNode("Approved");
      var _hoisted_28 = createTextVNode("Denied");
      var _hoisted_29 = {
        key: 1,
        class: "row"
      };
      var _hoisted_30 = {
        class: "col-xs-12"
      };
      var _hoisted_31 = {
        key: 2,
        class: "row"
      };
      var _hoisted_32 = {
        class: "col-xs-12"
      };
      var _hoisted_33 = {
        class: "checkbox"
      };
      var _hoisted_34 = {
        title: ""
      };
      var _hoisted_35 = {
        class: "label-text"
      };
      var _hoisted_36 = createTextVNode("By downloading this work, you agree to comply with the terms of the ");
      var _hoisted_37 = ["href"];
      var _hoisted_38 = createTextVNode(" for the Spark Development Network Content Library.");
      var _hoisted_39 = createTextVNode("To comply with the attribution requirements of this item's license, the author information must be included. Please update the configuration of this content channel to include an attribute for storing the author information.");
      var script$1 = defineComponent({
        name: 'itemPreview.partial',
        props: {
          item: {
            type: Object,
            required: true
          },
          contentChannelIdKey: {
            type: String
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          errorMessage: {
            type: String,
            required: false
          },
          isLoadingDetails: {
            type: Boolean,
            required: false,
            default: false
          },
          isDownloadDateShown: {
            type: Boolean,
            required: false,
            default: false
          },
          isDownloadDateShownAsDateRange: {
            type: Boolean,
            required: false,
            default: false
          },
          isDownloadDateShownWithTime: {
            type: Boolean,
            required: false,
            default: false
          },
          isDownloadStatusShown: {
            type: Boolean,
            required: false,
            default: false
          },
          validationResults: {
            type: Object,
            required: false
          },
          warningMessage: {
            type: String,
            required: false
          }
        },
        emits: ["loadDetails", "downloadArticle"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var isDownloadModalShown = ref(false);
          var isRedownloadModalShown = ref(false);
          var isAttributionMisconfiguredModalShown = ref(false);
          var downloadedItemStartDateTime = ref(getDefaultDownloadStartDate());
          var downloadedItemEndDateTime = ref();
          var downloadedItemStatus = ref(getDefaultDownloadStatus());
          var isDownloadTermsAndConditionsChecked = ref(false);
          var authorLabelAndName = computed(() => {
            if (props.item.authorName) {
              return "By ".concat(props.item.authorName);
            } else {
              return "";
            }
          });
          var badges = computed(() => {
            return getItemCategories(props.item, props.item.topic ? [props.item.topic] : []);
          });
          var downloadArticleButtonText = computed(() => {
            if (props.item.isDownloaded) {
              return "Re-download and Refresh";
            } else {
              return "Download Article";
            }
          });
          var downloadStartDateLabel = computed(() => {
            if (props.isDownloadDateShownAsDateRange) {
              return "Start";
            } else {
              return "Active";
            }
          });
          var downloadNotes = computed(() => {
            var validationResults = props.validationResults;
            if (!validationResults) {
              return [];
            }
            var notes = [];
            var missingConfigurations = [];
            if (!validationResults.isAuthorAttributeMapped) {
              missingConfigurations.push("author");
            }
            if (!validationResults.isImageAttributeMapped) {
              missingConfigurations.push("image");
            }
            if (!validationResults.isSummaryAttributeMapped) {
              missingConfigurations.push("summary");
            }
            if (missingConfigurations.length) {
              var items = "";
              if (missingConfigurations.length === 1) {
                items = missingConfigurations[0];
              } else if (missingConfigurations.length === 2) {
                items = "".concat(missingConfigurations[0], " or ").concat(missingConfigurations[1]);
              } else {
                items = "".concat(missingConfigurations.slice(0, -1).join(", "), ", or ").concat(missingConfigurations[missingConfigurations.length - 1]);
              }
              notes.push({
                alertType: AlertType.Info,
                content: "Your content channel is currently not configured to download the ".concat(items, " of downloaded items. To include this data, please adjust the content channel configuration settings accordingly.")
              });
            }
            return notes;
          });
          function ensureDetailsLoaded() {
            var _props$item;
            if (!((_props$item = props.item) !== null && _props$item !== void 0 && _props$item.htmlContent)) {
              emit("loadDetails");
            }
          }
          function getButtonGroupButtonType(expectedValue, actualValue, successButtonType) {
            if (expectedValue === actualValue) {
              return successButtonType;
            } else {
              return BtnType.Default;
            }
          }
          function getButtonGroupActiveClass(expectedValue, actualValue) {
            if (expectedValue === actualValue) {
              return "active";
            } else {
              return "";
            }
          }
          function getDefaultDownloadStatus() {
            if (props.item.isDownloaded) {
              return null;
            } else {
              return ContentChannelItemStatus.Approved;
            }
          }
          function getDefaultDownloadStartDate() {
            if (props.item.isDownloaded) {
              return null;
            } else if (props.isDownloadDateShownWithTime) {
              return RockDateTime.now().toISOString();
            } else {
              return RockDateTime.now().date.toISOString();
            }
          }
          function resetItemDownloadModal() {
            downloadedItemStartDateTime.value = getDefaultDownloadStartDate();
            downloadedItemEndDateTime.value = undefined;
            downloadedItemStatus.value = getDefaultDownloadStatus();
            isDownloadTermsAndConditionsChecked.value = false;
          }
          function emitDownloadArticleEvent() {
            emit("downloadArticle", {
              contentLibraryItemGuid: props.item.guid || emptyGuid,
              startDate: downloadedItemStartDateTime.value,
              endDate: downloadedItemEndDateTime.value,
              status: downloadedItemStatus.value
            });
            isDownloadModalShown.value = false;
            isRedownloadModalShown.value = false;
          }
          function onDownloadArticleClicked() {
            var _props$item$licenseTy;
            var validationResults = props.validationResults;
            var itemLicenseTypeGuid = (_props$item$licenseTy = props.item.licenseType) === null || _props$item$licenseTy === void 0 ? void 0 : _props$item$licenseTy.value;
            if (validationResults && !validationResults.isAuthorAttributeMapped && itemLicenseTypeGuid) {
              var attributionLicenseTypeGuids = [DefinedValue.LibraryLicenseTypeAuthorAttribution, DefinedValue.LibraryLicenseTypeOrganizationAttribution];
              if (attributionLicenseTypeGuids.some(licenseTypeGuid => licenseTypeGuid.toLowerCase() === itemLicenseTypeGuid.toLocaleLowerCase())) {
                isAttributionMisconfiguredModalShown.value = true;
                return;
              }
            }
            if (props.item.isDownloaded) {
              isRedownloadModalShown.value = true;
            } else {
              isDownloadModalShown.value = true;
            }
          }
          watch(() => props.item, () => {
            ensureDetailsLoaded();
            resetItemDownloadModal();
          });
          watch([isDownloadModalShown, isRedownloadModalShown], () => {
            if (!isDownloadModalShown.value && !isRedownloadModalShown.value) {
              resetItemDownloadModal();
            }
          });
          onMounted(() => {
            ensureDetailsLoaded();
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$1, [__props.errorMessage ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.errorMessage), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), __props.warningMessage ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.warningMessage), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_2$1, [createElementVNode("div", _hoisted_3$1, [createElementVNode("h1", null, toDisplayString(__props.item.title), 1), createElementVNode("div", _hoisted_4, toDisplayString(__props.item.summary), 1), createElementVNode("div", _hoisted_5, [createElementVNode("div", _hoisted_6, toDisplayString(unref(authorLabelAndName)), 1), createVNode(unref(script$7), {
              item: __props.item,
              showLabelsForStamps: ['downloaded', 'uploaded']
            }, null, 8, ["item"])])]), createElementVNode("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [createElementVNode("div", null, [__props.item.publishedDateTime ? (openBlock(), createElementBlock("span", _hoisted_9, "Published: " + toDisplayString(unref(toDateString)(__props.item.publishedDateTime)), 1)) : createCommentVNode("v-if", true), _hoisted_10, __props.item.sourcePublisherName ? (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString(__props.item.sourcePublisherName), 1)) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_12, [createVNode(unref(script$9), {
              items: unref(badges),
              theme: "medium"
            }, null, 8, ["items"]), createVNode(unref(script$8), {
              downloads: __props.item.downloads,
              class: "library-viewer-item-preview-downloads d-inline-block"
            }, null, 8, ["downloads"])])]), __props.contentChannelIdKey && !__props.item.isUploaded ? (openBlock(), createBlock(unref(RockButton), {
              key: 0,
              btnSize: "sm",
              btnType: "primary",
              isLoading: __props.isLoadingDetails,
              disabled: __props.disabled,
              onClick: onDownloadArticleClicked
            }, {
              default: withCtx(() => [_hoisted_13, _hoisted_14, createElementVNode("span", _hoisted_15, toDisplayString(unref(downloadArticleButtonText)), 1)]),
              _: 1
            }, 8, ["isLoading", "disabled"])) : createCommentVNode("v-if", true)]), createElementVNode("div", null, [__props.item.imageDownloadUrl ? (openBlock(), createElementBlock("img", {
              key: 0,
              alt: "Library Item Image",
              class: "library-viewer-item-preview-image",
              src: __props.item.imageDownloadUrl
            }, null, 8, _hoisted_16)) : createCommentVNode("v-if", true)]), createElementVNode("div", {
              class: "library-viewer-item-preview-content",
              innerHTML: __props.item.htmlContent
            }, null, 8, _hoisted_17)]), createVNode(unref(Modal), {
              modelValue: isDownloadModalShown.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isDownloadModalShown.value = $event),
              isSaveButtonDisabled: !isDownloadTermsAndConditionsChecked.value,
              saveText: "Download",
              title: "Article Download",
              onSave: emitDownloadArticleEvent
            }, {
              default: withCtx(() => {
                var _props$item$title, _props$item$sourcePu, _props$item$licenseT;
                return [createElementVNode("div", _hoisted_18, [createElementVNode("div", _hoisted_19, [createVNode(unref(StaticFormControl), {
                  label: "Article",
                  modelValue: (_props$item$title = __props.item.title) !== null && _props$item$title !== void 0 ? _props$item$title : ''
                }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_20, [createVNode(unref(StaticFormControl), {
                  label: "Organization",
                  modelValue: (_props$item$sourcePu = __props.item.sourcePublisherName) !== null && _props$item$sourcePu !== void 0 ? _props$item$sourcePu : ''
                }, null, 8, ["modelValue"])])]), __props.isDownloadDateShown || __props.isDownloadStatusShown ? (openBlock(), createElementBlock("div", _hoisted_21, [createElementVNode("div", _hoisted_22, [__props.isDownloadDateShown ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [__props.isDownloadDateShownWithTime ? (openBlock(), createBlock(unref(DateTimePicker), {
                  key: 0,
                  label: unref(downloadStartDateLabel),
                  modelValue: downloadedItemStartDateTime.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => downloadedItemStartDateTime.value = $event)
                }, null, 8, ["label", "modelValue"])) : (openBlock(), createBlock(unref(DatePicker), {
                  key: 1,
                  label: unref(downloadStartDateLabel),
                  modelValue: downloadedItemStartDateTime.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => downloadedItemStartDateTime.value = $event)
                }, null, 8, ["label", "modelValue"]))], 64)) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_23, [__props.isDownloadDateShown && __props.isDownloadDateShownAsDateRange ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [__props.isDownloadDateShownWithTime ? (openBlock(), createBlock(unref(DateTimePicker), {
                  key: 0,
                  label: "Expire",
                  modelValue: downloadedItemEndDateTime.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => downloadedItemEndDateTime.value = $event)
                }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(DatePicker), {
                  key: 1,
                  label: "Expire",
                  modelValue: downloadedItemEndDateTime.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => downloadedItemEndDateTime.value = $event)
                }, null, 8, ["modelValue"]))], 64)) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_24, [__props.isDownloadStatusShown ? (openBlock(), createBlock(unref(RockFormField), {
                  key: 0,
                  label: "Status",
                  modelValue: downloadedItemStatus.value,
                  name: "statusButtonGroup"
                }, {
                  default: withCtx(() => [createElementVNode("div", null, [createElementVNode("div", _hoisted_25, [createVNode(unref(RockButton), {
                    btnSize: "xs",
                    btnType: getButtonGroupButtonType(unref(ContentChannelItemStatus).PendingApproval, downloadedItemStatus.value, unref(BtnType).Warning),
                    class: normalizeClass(getButtonGroupActiveClass(unref(ContentChannelItemStatus).PendingApproval, downloadedItemStatus.value)),
                    onClick: _cache[4] || (_cache[4] = $event => downloadedItemStatus.value = unref(ContentChannelItemStatus).PendingApproval)
                  }, {
                    default: withCtx(() => [_hoisted_26]),
                    _: 1
                  }, 8, ["btnType", "class"]), createVNode(unref(RockButton), {
                    btnSize: "xs",
                    btnType: getButtonGroupButtonType(unref(ContentChannelItemStatus).Approved, downloadedItemStatus.value, unref(BtnType).Success),
                    class: normalizeClass(getButtonGroupActiveClass(unref(ContentChannelItemStatus).Approved, downloadedItemStatus.value)),
                    onClick: _cache[5] || (_cache[5] = $event => downloadedItemStatus.value = unref(ContentChannelItemStatus).Approved)
                  }, {
                    default: withCtx(() => [_hoisted_27]),
                    _: 1
                  }, 8, ["btnType", "class"]), createVNode(unref(RockButton), {
                    btnSize: "xs",
                    btnType: getButtonGroupButtonType(unref(ContentChannelItemStatus).Denied, downloadedItemStatus.value, unref(BtnType).Danger),
                    class: normalizeClass(getButtonGroupActiveClass(unref(ContentChannelItemStatus).Denied, downloadedItemStatus.value)),
                    onClick: _cache[6] || (_cache[6] = $event => downloadedItemStatus.value = unref(ContentChannelItemStatus).Denied)
                  }, {
                    default: withCtx(() => [_hoisted_28]),
                    _: 1
                  }, 8, ["btnType", "class"])])])]),
                  _: 1
                }, 8, ["modelValue"])) : createCommentVNode("v-if", true)])])) : createCommentVNode("v-if", true), unref(downloadNotes).length ? (openBlock(), createElementBlock("div", _hoisted_29, [createElementVNode("div", _hoisted_30, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(downloadNotes), downloadNote => {
                  return openBlock(), createBlock(unref(NotificationBox), {
                    alertType: downloadNote.alertType,
                    heading: "Note: "
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(downloadNote.content), 1)]),
                    _: 2
                  }, 1032, ["alertType"]);
                }), 256))])])) : createCommentVNode("v-if", true), (_props$item$licenseT = __props.item.licenseType) !== null && _props$item$licenseT !== void 0 && _props$item$licenseT.text && __props.item.licenseType.value ? (openBlock(), createElementBlock("div", _hoisted_31, [createElementVNode("div", _hoisted_32, [createElementVNode("div", _hoisted_33, [createElementVNode("label", _hoisted_34, [withDirectives(createElementVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isDownloadTermsAndConditionsChecked.value = $event)
                }, null, 512), [[vModelCheckbox, isDownloadTermsAndConditionsChecked.value]]), createElementVNode("span", _hoisted_35, [_hoisted_36, createElementVNode("a", {
                  href: "https://www.rockrms.com/library/licenses?utm_source=rock-item-download",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, toDisplayString(__props.item.licenseType.text) + " License", 9, _hoisted_37), _hoisted_38])])])])])) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }, 8, ["modelValue", "isSaveButtonDisabled"]), createVNode(unref(Modal), {
              modelValue: isRedownloadModalShown.value,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRedownloadModalShown.value = $event),
              saveText: "Download",
              title: "Article Download",
              onSave: emitDownloadArticleEvent
            }, {
              default: withCtx(() => [createVNode(unref(NotificationBox), {
                alertType: "warning"
              }, {
                default: withCtx(() => [createTextVNode("The action you are about to perform will overwrite the existing content of the item \"" + toDisplayString(__props.item.title) + "\". Any changes will be lost. Are you sure you want to proceed with the update?", 1)]),
                _: 1
              })]),
              _: 1
            }, 8, ["modelValue"]), createVNode(unref(Modal), {
              modelValue: isAttributionMisconfiguredModalShown.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isAttributionMisconfiguredModalShown.value = $event),
              title: "Article Download"
            }, {
              default: withCtx(() => [createVNode(unref(NotificationBox), {
                alertType: "warning"
              }, {
                default: withCtx(() => [_hoisted_39]),
                _: 1
              })]),
              _: 1
            }, 8, ["modelValue"])]);
          };
        }
      });

      var css_248z$1 = ".library-viewer-item-preview[data-v-6c798b51]{min-width:0;overflow-x:hidden;padding:24px;width:100%}.library-viewer-item-preview-container[data-v-6c798b51]{display:flex;flex-direction:column;gap:24px;margin:0 auto;max-width:90ch;width:100%}.library-viewer-item-preview-header h1[data-v-6c798b51]{margin:0}.library-viewer-item-preview-header>*+[data-v-6c798b51]{margin-top:8px}.library-viewer-item-preview-author-and-stamps[data-v-6c798b51]{align-items:center;display:flex;flex-direction:row;font-size:14px;justify-content:space-between}.library-viewer-item-preview-meta-and-download[data-v-6c798b51]{align-items:flex-start;display:flex;flex-direction:column;gap:16px 8px;justify-content:space-between}@media screen and (min-width:992px){.library-viewer-item-preview-meta-and-download[data-v-6c798b51]{flex-direction:row}}.library-viewer-item-preview-image[data-v-6c798b51]{width:100%}.library-viewer-item-preview-meta[data-v-6c798b51]{display:flex;flex-direction:column;font-size:14px;gap:16px}.library-viewer-item-preview-meta>div[data-v-6c798b51]{align-items:center;display:flex;flex-wrap:wrap;gap:12px}.library-viewer-item-badge-list[data-v-6c798b51]{display:flex;flex-wrap:wrap;gap:8px}.library-viewer-item-preview-download-button-label[data-v-6c798b51]{margin-left:8px}";
      styleInject(css_248z$1);

      script$1.__scopeId = "data-v-6c798b51";
      script$1.__file = "src/Cms/LibraryViewer/itemPreview.partial.obs";

      var _hoisted_1 = {
        class: "library-viewer-container"
      };
      var _hoisted_2 = {
        class: "panel-toolbar justify-content-end"
      };
      var _hoisted_3 = {
        class: "library-viewer-body"
      };
      var script = exports('default', defineComponent({
        name: 'libraryViewer',
        setup(__props) {
          var _config$items;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var items = ref((_config$items = config.items) !== null && _config$items !== void 0 ? _config$items : []);
          var filteredItems = ref([]);
          var filteredAndSortedItems = ref([]);
          var selectedItem = ref();
          var isDownloading = ref(false);
          var isLoadingDetails = ref(false);
          var errorMessage = ref();
          var warningMessage = ref();
          function onSelected(item) {
            selectedItem.value = item;
          }
          function onLoadDetails(_x) {
            return _onLoadDetails.apply(this, arguments);
          }
          function _onLoadDetails() {
            _onLoadDetails = _asyncToGenerator(function* (item) {
              try {
                isLoadingDetails.value = true;
                errorMessage.value = undefined;
                warningMessage.value = undefined;
                if (!item) {
                  return;
                }
                var response = yield invokeBlockAction("GetItemDetails?contentLibraryItemId=".concat(item.guid));
                if (response.data) {
                  updateItemProperties(item, response.data);
                  if (response.data.warningMessage) {
                    warningMessage.value = response.data.warningMessage;
                  }
                }
                if (response.errorMessage) {
                  var _response$errorMessag;
                  errorMessage.value = (_response$errorMessag = response.errorMessage) !== null && _response$errorMessag !== void 0 ? _response$errorMessag : "An unexpected error occurred while loading the item.";
                }
              } finally {
                isLoadingDetails.value = false;
              }
            });
            return _onLoadDetails.apply(this, arguments);
          }
          function onDownloadItem(_x2) {
            return _onDownloadItem.apply(this, arguments);
          }
          function _onDownloadItem() {
            _onDownloadItem = _asyncToGenerator(function* (bag) {
              try {
                isDownloading.value = true;
                errorMessage.value = undefined;
                warningMessage.value = undefined;
                if (!bag) {
                  return;
                }
                var response = yield invokeBlockAction("DownloadItem", {
                  bag
                });
                if (response.data) {
                  var item = items.value.find(i => i.guid === bag.contentLibraryItemGuid);
                  if (item) {
                    updateItemProperties(item, response.data);
                  }
                  if (response.data.warningMessage) {
                    warningMessage.value = response.data.warningMessage;
                  }
                }
                if (response.errorMessage) {
                  var _response$errorMessag2;
                  errorMessage.value = (_response$errorMessag2 = response.errorMessage) !== null && _response$errorMessag2 !== void 0 ? _response$errorMessag2 : "An unexpected error occurred while downloading the item.";
                }
              } finally {
                isDownloading.value = false;
              }
            });
            return _onDownloadItem.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [unref(config).errorMessage ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(config).errorMessage), 1)]),
              _: 1
            })) : (openBlock(), createBlock(unref(Panel), {
              key: 1,
              type: "block",
              class: "styled-scroll",
              hasFullscreen: true,
              title: "Library Viewer"
            }, {
              preBody: withCtx(() => [createElementVNode("div", _hoisted_2, [createVNode(unref(script$2), {
                contentChannelIdKey: unref(config).contentChannelIdKey,
                items: filteredItems.value,
                onSortedItems: _cache[0] || (_cache[0] = i => filteredAndSortedItems.value = i)
              }, null, 8, ["contentChannelIdKey", "items"]), createVNode(unref(script$5), {
                areFiltersAppliedOnClose: true,
                contentChannelIdKey: unref(config).contentChannelIdKey,
                items: items.value,
                onFilteredItems: _cache[1] || (_cache[1] = i => filteredItems.value = i)
              }, null, 8, ["contentChannelIdKey", "items"])]), createElementVNode("div", _hoisted_3, [filteredAndSortedItems.value ? (openBlock(), createBlock(unref(script$6), {
                key: 0,
                items: filteredAndSortedItems.value,
                selectedItem: selectedItem.value,
                onSelect: onSelected
              }, null, 8, ["items", "selectedItem"])) : createCommentVNode("v-if", true), selectedItem.value ? (openBlock(), createBlock(unref(script$1), {
                key: 1,
                contentChannelIdKey: unref(config).contentChannelIdKey,
                disabled: isDownloading.value,
                errorMessage: errorMessage.value,
                isLoadingDetails: isLoadingDetails.value,
                isDownloadDateShown: unref(config).isDownloadDateShown,
                isDownloadDateShownAsDateRange: unref(config).isDownloadDateShownAsDateRange,
                isDownloadDateShownWithTime: unref(config).isDownloadDateShownWithTime,
                isDownloadStatusShown: unref(config).isDownloadStatusShown,
                item: selectedItem.value,
                validationResults: unref(config).validationResults,
                warningMessage: warningMessage.value,
                onDownloadArticle: onDownloadItem,
                onLoadDetails: _cache[2] || (_cache[2] = $event => onLoadDetails(selectedItem.value))
              }, null, 8, ["contentChannelIdKey", "disabled", "errorMessage", "isLoadingDetails", "isDownloadDateShown", "isDownloadDateShownAsDateRange", "isDownloadDateShownWithTime", "isDownloadStatusShown", "item", "validationResults", "warningMessage"])) : createCommentVNode("v-if", true)])]),
              _: 1
            }))]);
          };
        }
      }));

      var css_248z = ".library-viewer-container[data-v-de432c90] .panel-body{padding:0}.library-viewer-container[data-v-de432c90] .panel-toolbar{gap:4px}.library-viewer-body[data-v-de432c90]{display:flex;flex-direction:row;height:100%;overflow:hidden}[data-v-de432c90] .styled-scroll ::-webkit-scrollbar,[data-v-de432c90] .styled-scroll ::-webkit-scrollbar-thumb{visibility:visible}[data-v-de432c90] .styled-scroll :active::-webkit-scrollbar,[data-v-de432c90] .styled-scroll :active::-webkit-scrollbar-thumb,[data-v-de432c90] .styled-scroll :focus::-webkit-scrollbar,[data-v-de432c90] .styled-scroll :focus::-webkit-scrollbar-thumb,[data-v-de432c90] .styled-scroll :hover::-webkit-scrollbar,[data-v-de432c90] .styled-scroll :hover::-webkit-scrollbar-thumb{visibility:visible}";
      styleInject(css_248z);

      script.__scopeId = "data-v-de432c90";
      script.__file = "src/Cms/libraryViewer.obs";

    })
  };
}));
//# sourceMappingURL=libraryViewer.obs.js.map
