System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/loadingIndicator.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockFormFieldError.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/block', '@Obsidian/Controls/inlineCheckBox.obs', '@Obsidian/Directives/dragDrop', '@Obsidian/Utility/component', '@Obsidian/Utility/dialogs', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, openBlock, createElementBlock, withDirectives, Fragment, renderList, unref, createVNode, toDisplayString, createCommentVNode, withModifiers, createTextVNode, ref, computed, watch, createBlock, withCtx, NotificationBox, CheckBox, CheckBoxList, CodeEditor, DropDownList, LoadingIndicator, Modal, NumberBox, RockButton, RockFormFieldError, SectionHeader, TextBox, useInvokeBlockAction, getSecurityGrant, useReloadBlock, provideSecurityGrant, setCustomSettingsBoxValue, InlineCheckBox, useDragReorder, DragReorder, useVModelPassthrough, alert, areEqual;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      withDirectives = module.withDirectives;
      Fragment = module.Fragment;
      renderList = module.renderList;
      unref = module.unref;
      createVNode = module.createVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      withModifiers = module.withModifiers;
      createTextVNode = module.createTextVNode;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      LoadingIndicator = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockFormFieldError = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      getSecurityGrant = module.getSecurityGrant;
      useReloadBlock = module.useReloadBlock;
      provideSecurityGrant = module.provideSecurityGrant;
      setCustomSettingsBoxValue = module.setCustomSettingsBoxValue;
    }, function (module) {
      InlineCheckBox = module["default"];
    }, function (module) {
      useDragReorder = module.useDragReorder;
      DragReorder = module.DragReorder;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      alert = module.alert;
    }, function (module) {
      areEqual = module.areEqual;
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

      var _hoisted_1$1 = {
        class: "grid"
      };
      var _hoisted_2$1 = {
        class: "table-no-border"
      };
      var _hoisted_3$1 = {
        class: "grid-table table table-condensed table-light"
      };
      var _hoisted_4$1 = createElementVNode("thead", null, [createElementVNode("tr", {
        align: "left"
      }, [createElementVNode("th", {
        class: "grid-columncommand"
      }), createElementVNode("th", null, "Show"), createElementVNode("th", null, "Filter"), createElementVNode("th", null, "Filter Header Markup"), createElementVNode("th", {
        class: "grid-columncommand"
      })])], -1);
      var _hoisted_5$1 = createElementVNode("td", {
        class: "grid-columnreorder",
        align: "center"
      }, [createElementVNode("a", {
        class: "minimal reorder-handle",
        href: "#"
      }, [createElementVNode("i", {
        class: "fa fa-bars"
      })])], -1);
      var _hoisted_6$1 = {
        class: "grid-select-field",
        align: "center"
      };
      var _hoisted_7$1 = {
        class: "grid-bool-field",
        align: "center"
      };
      var _hoisted_8$1 = {
        key: 0,
        class: "fa fa-check"
      };
      var _hoisted_9$1 = {
        class: "grid-columncommand",
        align: "center"
      };
      var _hoisted_10$1 = ["onClick"];
      var _hoisted_11$1 = createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1);
      var _hoisted_12$1 = [_hoisted_11$1];
      var script$1 = defineComponent({
        name: 'filterGrid.partial',
        props: {
          modelValue: {
            type: Array,
            required: true
          }
        },
        emits: ["update:modelValue", "edit"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var filters = useVModelPassthrough(props, "modelValue", emit);
          var reorderDragOptions = useDragReorder(filters);
          function onEditClick(rowName) {
            emit("edit", rowName);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createElementVNode("table", _hoisted_3$1, [_hoisted_4$1, withDirectives((openBlock(), createElementBlock("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(filters), row => {
              return openBlock(), createElementBlock("tr", {
                key: row.name,
                align: "left"
              }, [_hoisted_5$1, createElementVNode("td", _hoisted_6$1, [createVNode(unref(InlineCheckBox), {
                modelValue: row.show,
                "onUpdate:modelValue": $event => row.show = $event,
                label: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])]), createElementVNode("td", null, toDisplayString(row.name), 1), createElementVNode("td", _hoisted_7$1, [row.headerMarkup ? (openBlock(), createElementBlock("i", _hoisted_8$1)) : createCommentVNode("v-if", true)]), createElementVNode("td", _hoisted_9$1, [createElementVNode("a", {
                class: "btn btn-default btn-sm",
                href: "#",
                onClick: withModifiers($event => onEditClick(row.name), ["prevent"])
              }, _hoisted_12$1, 8, _hoisted_10$1)])]);
            }), 128))])), [[unref(DragReorder), unref(reorderDragOptions)]])])])]);
          };
        }
      });

      script$1.__file = "src/Cms/ContentCollectionView/filterGrid.partial.obs";

      var SortOrdersKey = function (SortOrdersKey) {
        SortOrdersKey["Relevance"] = "relevance";
        SortOrdersKey["Newest"] = "newest";
        SortOrdersKey["Oldest"] = "oldest";
        SortOrdersKey["Trending"] = "trending";
        SortOrdersKey["Alphabetical"] = "alphabetical";
        return SortOrdersKey;
      }({});

      var _hoisted_1 = {
        key: 2
      };
      var _hoisted_2 = {
        class: "row"
      };
      var _hoisted_3 = {
        class: "col-md-6"
      };
      var _hoisted_4 = {
        class: "row"
      };
      var _hoisted_5 = {
        class: "col-md-4"
      };
      var _hoisted_6 = {
        class: "col-md-4"
      };
      var _hoisted_7 = {
        class: "col-md-4"
      };
      var _hoisted_8 = {
        class: "row"
      };
      var _hoisted_9 = {
        class: "col-md-4"
      };
      var _hoisted_10 = {
        class: "col-md-4"
      };
      var _hoisted_11 = {
        class: "col-md-4"
      };
      var _hoisted_12 = {
        class: "row"
      };
      var _hoisted_13 = {
        class: "col-md-6"
      };
      var _hoisted_14 = {
        key: 3
      };
      var _hoisted_15 = {
        key: 0,
        class: "margin-b-md"
      };
      var _hoisted_16 = {
        class: "title"
      };
      var _hoisted_17 = {
        class: "actions"
      };
      var _hoisted_18 = createTextVNode("Save");
      var _hoisted_19 = createTextVNode("Cancel");
      var _hoisted_20 = {
        class: "row"
      };
      var _hoisted_21 = {
        class: "col-md-4"
      };
      var _hoisted_22 = {
        class: "col-md-4"
      };
      var script = exports('default', defineComponent({
        name: 'contentCollectionViewCustomSettings',
        emits: ["close"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var enabledSortOrdersItems = [{
            value: SortOrdersKey.Relevance,
            text: "Relevance"
          }, {
            value: SortOrdersKey.Newest,
            text: "Newest"
          }, {
            value: SortOrdersKey.Oldest,
            text: "Oldest"
          }, {
            value: SortOrdersKey.Trending,
            text: "Trending"
          }, {
            value: SortOrdersKey.Alphabetical,
            text: "Alphabetical"
          }];
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(null);
          var reloadBlock = useReloadBlock();
          var errorMessage = ref("");
          var isLoading = ref(true);
          var isModalOpen = ref(true);
          var contentCollection = ref("");
          var contentCollectionItems = ref([]);
          var groupResultsBySource = ref(false);
          var siteType = ref("");
          var searchOnLoad = ref(false);
          var numberOfResults = ref(null);
          var showFiltersPanel = ref(false);
          var showFullTextSearch = ref(false);
          var showSort = ref(false);
          var enabledSortOrders = ref([]);
          var trendingTerm = ref("");
          var filters = ref([]);
          var resultsTemplate = ref("");
          var groupHeaderTemplate = ref("");
          var itemTemplate = ref("");
          var preSearchTemplate = ref("");
          var boostMatchingSegments = ref(false);
          var boostMatchingRequestFilters = ref(false);
          var segmentBoostAmount = ref(null);
          var requestFilterBoostAmount = ref(null);
          var editingFilter = ref(null);
          var editingFilterHeaderMarkup = ref("");
          var saveButtonText = computed(() => {
            return errorMessage.value || !isLoading.value ? "Save" : "";
          });
          var isTrendingSortEnabled = computed(() => {
            return enabledSortOrders.value.includes(SortOrdersKey.Trending);
          });
          var isMobileSiteType = computed(() => {
            return siteType.value === "mobile";
          });
          var isGroupBySourceEnabled = computed(() => {
            return groupResultsBySource.value;
          });
          function startLoading() {
            return _startLoading.apply(this, arguments);
          }
          function _startLoading() {
            _startLoading = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("GetCustomSettings");
              if (result.isSuccess && result.data && result.data.settings && result.data.options) {
                var _result$data$settings, _result$data$settings2, _result$data$settings3, _result$data$settings4, _result$data$settings5, _result$data$settings6, _result$data$settings7, _result$data$settings8, _result$data$settings9, _result$data$settings10, _result$data$settings11, _result$data$settings12, _result$data$options$;
                contentCollection.value = (_result$data$settings = result.data.settings.contentCollection) !== null && _result$data$settings !== void 0 ? _result$data$settings : "";
                showFiltersPanel.value = result.data.settings.showFiltersPanel;
                showFullTextSearch.value = result.data.settings.showFullTextSearch;
                showSort.value = result.data.settings.showSort;
                numberOfResults.value = (_result$data$settings2 = result.data.settings.numberOfResults) !== null && _result$data$settings2 !== void 0 ? _result$data$settings2 : null;
                searchOnLoad.value = result.data.settings.searchOnLoad;
                groupResultsBySource.value = result.data.settings.groupResultsBySource;
                enabledSortOrders.value = (_result$data$settings3 = result.data.settings.enabledSortOrders) !== null && _result$data$settings3 !== void 0 ? _result$data$settings3 : [];
                trendingTerm.value = (_result$data$settings4 = result.data.settings.trendingTerm) !== null && _result$data$settings4 !== void 0 ? _result$data$settings4 : "";
                filters.value = (_result$data$settings5 = result.data.settings.filters) !== null && _result$data$settings5 !== void 0 ? _result$data$settings5 : [];
                resultsTemplate.value = (_result$data$settings6 = result.data.settings.resultsTemplate) !== null && _result$data$settings6 !== void 0 ? _result$data$settings6 : "";
                itemTemplate.value = (_result$data$settings7 = result.data.settings.itemTemplate) !== null && _result$data$settings7 !== void 0 ? _result$data$settings7 : "";
                preSearchTemplate.value = (_result$data$settings8 = result.data.settings.preSearchTemplate) !== null && _result$data$settings8 !== void 0 ? _result$data$settings8 : "";
                boostMatchingSegments.value = result.data.settings.boostMatchingSegments;
                boostMatchingRequestFilters.value = result.data.settings.boostMatchingRequestFilters;
                segmentBoostAmount.value = (_result$data$settings9 = result.data.settings.segmentBoostAmount) !== null && _result$data$settings9 !== void 0 ? _result$data$settings9 : null;
                requestFilterBoostAmount.value = (_result$data$settings10 = result.data.settings.requestFilterBoostAmount) !== null && _result$data$settings10 !== void 0 ? _result$data$settings10 : null;
                siteType.value = (_result$data$settings11 = result.data.settings.siteType) !== null && _result$data$settings11 !== void 0 ? _result$data$settings11 : "web";
                groupHeaderTemplate.value = (_result$data$settings12 = result.data.settings.groupHeaderTemplate) !== null && _result$data$settings12 !== void 0 ? _result$data$settings12 : "";
                securityGrant.updateToken(result.data.securityGrantToken);
                contentCollectionItems.value = (_result$data$options$ = result.data.options.contentCollectionItems) !== null && _result$data$options$ !== void 0 ? _result$data$options$ : [];
              } else {
                errorMessage.value = result.errorMessage || "Unknown error while loading custom settings.";
              }
              isLoading.value = false;
            });
            return _startLoading.apply(this, arguments);
          }
          function onEditFilter(filterName) {
            var _filters$value$find, _editingFilter$value$, _editingFilter$value;
            editingFilter.value = (_filters$value$find = filters.value.find(f => f.name === filterName)) !== null && _filters$value$find !== void 0 ? _filters$value$find : null;
            editingFilterHeaderMarkup.value = (_editingFilter$value$ = (_editingFilter$value = editingFilter.value) === null || _editingFilter$value === void 0 ? void 0 : _editingFilter$value.headerMarkup) !== null && _editingFilter$value$ !== void 0 ? _editingFilter$value$ : "";
          }
          function onEditFilterCancel() {
            editingFilter.value = null;
            editingFilterHeaderMarkup.value = "";
          }
          function onEditFilterSave() {
            if (editingFilter.value) {
              editingFilter.value.headerMarkup = editingFilterHeaderMarkup.value;
              editingFilter.value = null;
            }
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              var box = {};
              setCustomSettingsBoxValue(box, "contentCollection", contentCollection.value);
              setCustomSettingsBoxValue(box, "showFiltersPanel", showFiltersPanel.value);
              setCustomSettingsBoxValue(box, "showFullTextSearch", showFullTextSearch.value);
              setCustomSettingsBoxValue(box, "showSort", showSort.value);
              setCustomSettingsBoxValue(box, "numberOfResults", numberOfResults.value);
              setCustomSettingsBoxValue(box, "searchOnLoad", searchOnLoad.value);
              setCustomSettingsBoxValue(box, "groupResultsBySource", groupResultsBySource.value);
              setCustomSettingsBoxValue(box, "enabledSortOrders", enabledSortOrders.value);
              setCustomSettingsBoxValue(box, "trendingTerm", trendingTerm.value);
              setCustomSettingsBoxValue(box, "filters", filters.value);
              setCustomSettingsBoxValue(box, "resultsTemplate", resultsTemplate.value);
              setCustomSettingsBoxValue(box, "itemTemplate", itemTemplate.value);
              setCustomSettingsBoxValue(box, "preSearchTemplate", preSearchTemplate.value);
              setCustomSettingsBoxValue(box, "boostMatchingSegments", boostMatchingSegments.value);
              setCustomSettingsBoxValue(box, "boostMatchingRequestFilters", boostMatchingRequestFilters.value);
              setCustomSettingsBoxValue(box, "segmentBoostAmount", segmentBoostAmount.value);
              setCustomSettingsBoxValue(box, "requestFilterBoostAmount", requestFilterBoostAmount.value);
              setCustomSettingsBoxValue(box, "groupHeaderTemplate", groupHeaderTemplate.value);
              var data = {
                box
              };
              var result = yield invokeBlockAction("SaveCustomSettings", data);
              if (result.isSuccess) {
                isModalOpen.value = false;
                reloadBlock();
              } else {
                alert(result.errorMessage || "Unable to save block settings.");
              }
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          watch(isModalOpen, () => {
            if (!isModalOpen.value) {
              emit("close");
            }
          });
          watch(contentCollection, () => {
            var _collection$filters;
            var collection = contentCollectionItems.value.find(l => areEqual(l.value, contentCollection.value));
            var newFilters = [...filters.value];
            if (!collection) {
              console.log("no selection");
              return;
            }
            var collectionFilters = (_collection$filters = collection.filters) !== null && _collection$filters !== void 0 ? _collection$filters : [];
            var _iterator = _createForOfIteratorHelper(collectionFilters),
              _step;
            try {
              var _loop2 = function _loop2() {
                var f = _step.value;
                if (!newFilters.some(a => a.sourceKey === f.value)) {
                  newFilters.push({
                    show: false,
                    sourceKey: f.value,
                    name: f.text,
                    headerMarkup: ""
                  });
                }
              };
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            var _loop = function _loop(_filterIndex) {
              if (!collectionFilters.some(f => f.value === newFilters[_filterIndex].sourceKey)) {
                newFilters.splice(_filterIndex, 1);
              } else {
                _filterIndex++;
              }
              filterIndex = _filterIndex;
            };
            for (var filterIndex = 0; filterIndex < newFilters.length;) {
              _loop(filterIndex);
            }
            filters.value = newFilters;
          });
          startLoading();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: isModalOpen.value,
              "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => isModalOpen.value = $event),
              title: "Content Collection View Settings",
              saveText: unref(saveButtonText),
              onSave: onSave
            }, {
              default: withCtx(() => [errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                textContent: toDisplayString(errorMessage.value),
                alertType: "warning"
              }, null, 8, ["textContent"])) : isLoading.value ? (openBlock(), createBlock(unref(LoadingIndicator), {
                key: 1,
                delay: 500
              })) : (openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [createVNode(unref(DropDownList), {
                modelValue: contentCollection.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => contentCollection.value = $event),
                label: "Content Collection",
                items: contentCollectionItems.value,
                rules: "required"
              }, null, 8, ["modelValue", "items"])])]), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(CheckBox), {
                modelValue: showFiltersPanel.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => showFiltersPanel.value = $event),
                label: "Show Filters Panel"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(CheckBox), {
                modelValue: showFullTextSearch.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => showFullTextSearch.value = $event),
                label: "Show Full-Text Search"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_7, [createVNode(unref(CheckBox), {
                modelValue: showSort.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => showSort.value = $event),
                label: "Show Sort"
              }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_8, [createElementVNode("div", _hoisted_9, [createVNode(unref(NumberBox), {
                modelValue: numberOfResults.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => numberOfResults.value = $event),
                rules: "gte:0",
                label: "Number of Results"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_10, [createVNode(unref(CheckBox), {
                modelValue: searchOnLoad.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => searchOnLoad.value = $event),
                label: "Search On Load",
                help: "Determines if initial content should be shown when the block is loaded."
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_11, [createVNode(unref(CheckBox), {
                modelValue: groupResultsBySource.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => groupResultsBySource.value = $event),
                label: "Group Results By Source",
                help: "This will group the results by the source. When enabled the number of results will be used for each source type."
              }, null, 8, ["modelValue"])])]), showSort.value ? (openBlock(), createBlock(unref(CheckBoxList), {
                key: 0,
                modelValue: enabledSortOrders.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => enabledSortOrders.value = $event),
                label: "Enabled Sort Orders",
                help: "Determines the sort options that should be made available.",
                horizontal: "",
                repeatColumns: 5,
                items: enabledSortOrdersItems
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_12, [createElementVNode("div", _hoisted_13, [unref(isTrendingSortEnabled) ? (openBlock(), createBlock(unref(TextBox), {
                key: 0,
                modelValue: trendingTerm.value,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => trendingTerm.value = $event),
                label: "Trending Term",
                rules: "required",
                help: "The term that should be used in the sort dropdown to describe popular/trending items."
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)])]), !unref(isMobileSiteType) ? (openBlock(), createBlock(unref(CodeEditor), {
                key: 1,
                modelValue: resultsTemplate.value,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => resultsTemplate.value = $event),
                label: "Results Template",
                mode: "lava",
                rules: "required"
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), createVNode(unref(CodeEditor), {
                modelValue: itemTemplate.value,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => itemTemplate.value = $event),
                label: "Item Template",
                mode: "lava",
                rules: "required"
              }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
                modelValue: preSearchTemplate.value,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => preSearchTemplate.value = $event),
                label: "Pre-Search Template",
                mode: "lava"
              }, null, 8, ["modelValue"]), unref(isMobileSiteType) && unref(isGroupBySourceEnabled) ? (openBlock(), createBlock(unref(CodeEditor), {
                key: 2,
                modelValue: groupHeaderTemplate.value,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => groupHeaderTemplate.value = $event),
                label: "Group Header Template",
                help: "The template to use for the header of each group of results.",
                mode: "lava"
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), showFiltersPanel.value ? (openBlock(), createElementBlock("div", _hoisted_14, [createVNode(unref(SectionHeader), {
                title: "Filters",
                description: "Determine which filters you would like to show in what order."
              }), editingFilter.value ? (openBlock(), createElementBlock("div", _hoisted_15, [createElementVNode("h3", _hoisted_16, toDisplayString(editingFilter.value.name) + " Filter", 1), createVNode(unref(CodeEditor), {
                modelValue: editingFilterHeaderMarkup.value,
                "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => editingFilterHeaderMarkup.value = $event),
                label: "Filter Header Markup",
                mode: "lava"
              }, null, 8, ["modelValue"]), createVNode(unref(RockFormFieldError), {
                label: "Filter",
                error: "You must finish editing the filter before proceeding."
              }), createElementVNode("div", _hoisted_17, [createVNode(unref(RockButton), {
                btnType: "primary",
                btnSize: "xs",
                onClick: onEditFilterSave
              }, {
                default: withCtx(() => [_hoisted_18]),
                _: 1
              }), createVNode(unref(RockButton), {
                btnType: "link",
                btnSize: "xs",
                onClick: onEditFilterCancel
              }, {
                default: withCtx(() => [_hoisted_19]),
                _: 1
              })])])) : (openBlock(), createBlock(unref(script$1), {
                key: 1,
                modelValue: filters.value,
                "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => filters.value = $event),
                onEdit: onEditFilter
              }, null, 8, ["modelValue"]))])) : createCommentVNode("v-if", true), createVNode(unref(SectionHeader), {
                title: "Personalization",
                description: "The settings below allow you to boost items based on personalization settings in Rock."
              }), createElementVNode("div", _hoisted_20, [createElementVNode("div", _hoisted_21, [createVNode(unref(CheckBox), {
                modelValue: boostMatchingSegments.value,
                "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => boostMatchingSegments.value = $event),
                label: "Boost Matching Segments",
                help: "Determines if the search should boost shared segments between the individual and the content results."
              }, null, 8, ["modelValue"]), boostMatchingSegments.value ? (openBlock(), createBlock(unref(NumberBox), {
                key: 0,
                modelValue: segmentBoostAmount.value,
                "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => segmentBoostAmount.value = $event),
                label: "Segment Boost Amount",
                help: "The amount of boost to apply to each shared segment. A value of 1 = no boost, a value of > 1 will increase the match score while a value of < 1 will reduce the match score."
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_22, [createVNode(unref(CheckBox), {
                modelValue: boostMatchingRequestFilters.value,
                "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => boostMatchingRequestFilters.value = $event),
                label: "Boost Matching Request Filters",
                help: "Determines if the search should boost shared segments current request and the content results."
              }, null, 8, ["modelValue"]), boostMatchingRequestFilters.value ? (openBlock(), createBlock(unref(NumberBox), {
                key: 0,
                modelValue: requestFilterBoostAmount.value,
                "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => requestFilterBoostAmount.value = $event),
                label: "Request Filter Boost Amount",
                help: "The amount of boost to apply to each shared request filter. A value of 1 = no boost, a value of > 1 will increase the match score while a value of < 1 will reduce the match score."
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)])])]))]),
              _: 1
            }, 8, ["modelValue", "saveText"]);
          };
        }
      }));

      script.__file = "src/Cms/contentCollectionViewCustomSettings.obs";

    })
  };
}));
//# sourceMappingURL=contentCollectionViewCustomSettings.obs.js.map
