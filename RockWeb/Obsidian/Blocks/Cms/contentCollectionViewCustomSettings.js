System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/codeEditor', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/inlineCheckBox', '@Obsidian/Controls/loadingIndicator', '@Obsidian/Controls/modal', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockFormFieldError', '@Obsidian/Controls/sectionHeader', '@Obsidian/Controls/textBox', '@Obsidian/Utility/block', '@Obsidian/Directives/dragDrop', '@Obsidian/Utility/component', '@Obsidian/Utility/dialogs', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, NotificationBox, CheckBox, CheckBoxList, CodeEditor, DropDownList, InlineCheckBox, LoadingIndicator, Modal, NumberBox, RockButton, RockFormFieldError, SectionHeader, TextBox, useInvokeBlockAction, getSecurityGrant, useReloadBlock, provideSecurityGrant, setCustomSettingsBoxValue, DragReorder, useDragReorder, useVModelPassthrough, alert, areEqual;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
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
      InlineCheckBox = module["default"];
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
      DragReorder = module.DragReorder;
      useDragReorder = module.useDragReorder;
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

      var FilterGrid = defineComponent({
        name: "Cms.ContentCollectionView.CustomSettings.FilterGrid",
        components: {
          InlineCheckBox
        },
        directives: {
          DragReorder
        },
        props: {
          modelValue: {
            type: Array,
            required: true
          }
        },
        emits: {
          "update:modelValue": _value => true,
          "edit": _value => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var filters = useVModelPassthrough(props, "modelValue", emit);
          var reorderDragOptions = useDragReorder(filters);
          var onEditClick = rowName => {
            emit("edit", rowName);
          };
          return {
            filters,
            onEditClick,
            reorderDragOptions
          };
        },
        template: "\n<div class=\"grid\">\n    <div class=\"table-no-border\">\n        <table class=\"grid-table table table-condensed table-light\">\n            <thead>\n                <tr align=\"left\">\n                    <th class=\"grid-columncommand\"></th>\n                    <th>Show</th>\n                    <th>Filter</th>\n                    <th>Filter Header Markup</th>\n                    <th class=\"grid-columncommand\"></th>\n                </tr>\n            </thead>\n\n            <tbody v-drag-reorder=\"reorderDragOptions\">\n                <tr v-for=\"row in filters\" :key=\"row.name\" align=\"left\">\n                    <td class=\"grid-columnreorder\" align=\"center\">\n                        <a class=\"minimal reorder-handle\" href=\"#\">\n                            <i class=\"fa fa-bars\"></i>\n                        </a>\n                    </td>\n                    \n                    <td class=\"grid-select-field\" align=\"center\">\n                        <InlineCheckBox v-model=\"row.show\" />\n                    </td>\n                    <td>{{ row.name }}</td>\n                    \n                    <td class=\"grid-bool-field\" align=\"center\">\n                        <i v-if=\"row.headerMarkup\" class=\"fa fa-check\"></i>\n                    </td>\n                    \n                    <td class=\"grid-columncommand\" align=\"center\">\n                        <a class=\"btn btn-default btn-sm\" href=\"#\" @click.prevent=\"onEditClick(row.name)\">\n                            <i class=\"fa fa-pencil\"></i>\n                        </a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n"
      });

      var SortOrdersKey = function (SortOrdersKey) {
        SortOrdersKey["Relevance"] = "relevance";
        SortOrdersKey["Newest"] = "newest";
        SortOrdersKey["Oldest"] = "oldest";
        SortOrdersKey["Trending"] = "trending";
        SortOrdersKey["Alphabetical"] = "alphabetical";
        return SortOrdersKey;
      }({});

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
      var contentCollectionViewCustomSettings = exports('default', defineComponent({
        name: "Cms.ContentCollectionView.CustomSettings",
        components: {
          NotificationBox,
          CheckBox,
          CheckBoxList,
          CodeEditor,
          DropDownList,
          FilterGrid,
          InlineCheckBox,
          LoadingIndicator,
          Modal,
          NumberBox,
          RockButton,
          RockFormFieldError,
          SectionHeader,
          TextBox
        },
        emits: {
          "close": () => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(null);
          var reloadBlock = useReloadBlock();
          var errorMessage = ref("");
          var isLoading = ref(true);
          var isModalOpen = ref(true);
          var contentCollection = ref("");
          var contentCollectionItems = ref([]);
          var groupResultsBySource = ref(false);
          var searchOnLoad = ref(false);
          var numberOfResults = ref(null);
          var showFiltersPanel = ref(false);
          var showFullTextSearch = ref(false);
          var showSort = ref(false);
          var enabledSortOrders = ref([]);
          var trendingTerm = ref("");
          var filters = ref([]);
          var resultsTemplate = ref("");
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
          var startLoading = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("GetCustomSettings");
              if (result.isSuccess && result.data && result.data.settings && result.data.options) {
                var _result$data$settings, _result$data$settings2, _result$data$settings3, _result$data$settings4, _result$data$settings5, _result$data$settings6, _result$data$settings7, _result$data$settings8, _result$data$settings9, _result$data$settings10, _result$data$options$;
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
                securityGrant.updateToken(result.data.securityGrantToken);
                contentCollectionItems.value = (_result$data$options$ = result.data.options.contentCollectionItems) !== null && _result$data$options$ !== void 0 ? _result$data$options$ : [];
              } else {
                errorMessage.value = result.errorMessage || "Unknown error while loading custom settings.";
              }
              isLoading.value = false;
            });
            return function startLoading() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onEditFilter = filterName => {
            var _filters$value$find, _editingFilter$value$, _editingFilter$value;
            editingFilter.value = (_filters$value$find = filters.value.find(f => f.name === filterName)) !== null && _filters$value$find !== void 0 ? _filters$value$find : null;
            editingFilterHeaderMarkup.value = (_editingFilter$value$ = (_editingFilter$value = editingFilter.value) === null || _editingFilter$value === void 0 ? void 0 : _editingFilter$value.headerMarkup) !== null && _editingFilter$value$ !== void 0 ? _editingFilter$value$ : "";
          };
          var onEditFilterCancel = () => {
            editingFilter.value = null;
            editingFilterHeaderMarkup.value = "";
          };
          var onEditFilterSave = () => {
            if (editingFilter.value) {
              editingFilter.value.headerMarkup = editingFilterHeaderMarkup.value;
              editingFilter.value = null;
            }
          };
          var onSave = function () {
            var _ref3 = _asyncToGenerator(function* () {
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
            return function onSave() {
              return _ref3.apply(this, arguments);
            };
          }();
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
          return {
            boostMatchingRequestFilters,
            boostMatchingSegments,
            contentCollection,
            contentCollectionItems,
            editingFilter,
            editingFilterHeaderMarkup,
            enabledSortOrders,
            enabledSortOrdersItems,
            errorMessage,
            filters,
            groupResultsBySource,
            isLoading,
            isModalOpen,
            isTrendingSortEnabled,
            itemTemplate,
            numberOfResults,
            onEditFilter,
            onEditFilterCancel,
            onEditFilterSave,
            onSave,
            preSearchTemplate,
            requestFilterBoostAmount,
            saveButtonText,
            searchOnLoad,
            segmentBoostAmount,
            showFiltersPanel,
            showFullTextSearch,
            showSort,
            resultsTemplate,
            trendingTerm
          };
        },
        template: "\n<Modal v-model=\"isModalOpen\"\n    title=\"Content Collection View Settings\"\n    :saveText=\"saveButtonText\"\n    @save=\"onSave\">\n\n    <NotificationBox v-if=\"errorMessage\"\n        v-text=\"errorMessage\"\n        alertType=\"warning\" />\n\n    <LoadingIndicator v-else-if=\"isLoading\" :delay=\"500\" />\n\n    <div v-else>\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <DropDownList v-model=\"contentCollection\"\n                    label=\"Content Collection\"\n                    :items=\"contentCollectionItems\"\n                    rules=\"required\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"showFiltersPanel\"\n                    label=\"Show Filters Panel\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"showFullTextSearch\"\n                    label=\"Show Full-Text Search\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"showSort\"\n                    label=\"Show Sort\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <NumberBox v-model=\"numberOfResults\"\n                    rules=\"gte:0\"\n                    label=\"Number of Results\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"searchOnLoad\"\n                    label=\"Search On Load\"\n                    help=\"Determines if initial content should be shown when the block is loaded.\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"groupResultsBySource\"\n                    label=\"Group Results By Source\"\n                    help=\"This will group the results by the source. When enabled the number of results will be used for each source type.\" />\n            </div>\n        </div>\n\n        <CheckBoxList v-if=\"showSort\"\n            v-model=\"enabledSortOrders\"\n            label=\"Enabled Sort Orders\"\n            help=\"Determines the sort options that should be made available.\"\n            horizontal\n            :repeatColumns=\"5\"\n            :items=\"enabledSortOrdersItems\" />\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <TextBox v-if=\"isTrendingSortEnabled\"\n                    v-model=\"trendingTerm\"\n                    label=\"Trending Term\"\n                    rules=\"required\"\n                    help=\"The term that should be used in the sort dropdown to describe popular/trending items.\" />\n            </div>\n        </div>\n\n        <CodeEditor v-model=\"resultsTemplate\"\n            label=\"Results Template\"\n            mode=\"lava\"\n            rules=\"required\" />\n\n        <CodeEditor v-model=\"itemTemplate\"\n            label=\"Item Template\"\n            mode=\"lava\"\n            rules=\"required\" />\n\n        <CodeEditor v-model=\"preSearchTemplate\"\n            label=\"Pre-Search Template\"\n            mode=\"lava\" />\n\n        <div v-if=\"showFiltersPanel\">\n            <SectionHeader title=\"Filters\"\n                description=\"Determine which filters you would like to show in what order.\" />\n\n            <div v-if=\"editingFilter\" class=\"margin-b-md\">\n                <h3 class=\"title\">{{ editingFilter.name }} Filter</h3>\n\n                <CodeEditor v-model=\"editingFilterHeaderMarkup\"\n                    label=\"Filter Header Markup\"\n                    mode=\"lava\" />\n\n                <RockFormFieldError label=\"Filter\" error=\"You must finish editing the filter before proceeding.\" />\n\n                <div class=\"actions\">\n                    <RockButton btnType=\"primary\" btnSize=\"xs\" @click=\"onEditFilterSave\">Save</RockButton>\n                    <RockButton btnType=\"link\" btnSize=\"xs\" @click=\"onEditFilterCancel\">Cancel</RockButton>\n                </div>\n            </div>\n\n            <FilterGrid v-else v-model=\"filters\" @edit=\"onEditFilter\" />\n        </div>\n\n        <SectionHeader title=\"Personalization\"\n            description=\"The settings below allow you to boost items based on personalization settings in Rock.\" />\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"boostMatchingSegments\"\n                    label=\"Boost Matching Segments\"\n                    help=\"Determines if the search should boost shared segments between the individual and the content results.\" />\n\n                <NumberBox v-if=\"boostMatchingSegments\"\n                    v-model=\"segmentBoostAmount\"\n                    label=\"Segment Boost Amount\"\n                    help=\"The amount of boost to apply to each shared segment. A value of 1 = no boost, a value of > 1 will increase the match score while a value of < 1 will reduce the match score.\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"boostMatchingRequestFilters\"\n                    label=\"Boost Matching Request Filters\"\n                    help=\"Determines if the search should boost shared segments current request and the content results.\" />\n\n                <NumberBox v-if=\"boostMatchingRequestFilters\"\n                    v-model=\"requestFilterBoostAmount\"\n                    label=\"Request Filter Boost Amount\"\n                    help=\"The amount of boost to apply to each shared request filter. A value of 1 = no boost, a value of > 1 will increase the match score while a value of < 1 will reduce the match score.\" />\n            </div>\n        </div>\n\n    </div>\n\n</Modal>\n"
      }));

    })
  };
}));
//# sourceMappingURL=contentCollectionViewCustomSettings.js.map
