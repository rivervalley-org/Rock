System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/util', '@Obsidian/Enums/Blocks/Cms/ContentCollectionView/searchOrder', '@Obsidian/Utility/component', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Enums/Cms/contentCollectionFilterControl', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, createBlock, createElementVNode, Fragment, renderList, createTextVNode, shallowRef, onMounted, toDisplayString, createVNode, withCtx, NotificationBox, DropDownList, TextBox, useConfigurationValues, useInvokeBlockAction, useBlockGuid, getSecurityGrant, provideSecurityGrant, dispatchBlockEvent, debounce, SearchOrder, updateRefValue, CheckBoxList, RadioButtonList, ContentCollectionFilterControl, toNumber, emptyGuid, toGuidOrNull;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      createCommentVNode = module.createCommentVNode;
      createBlock = module.createBlock;
      createElementVNode = module.createElementVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createTextVNode = module.createTextVNode;
      shallowRef = module.shallowRef;
      onMounted = module.onMounted;
      toDisplayString = module.toDisplayString;
      createVNode = module.createVNode;
      withCtx = module.withCtx;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      useBlockGuid = module.useBlockGuid;
      getSecurityGrant = module.getSecurityGrant;
      provideSecurityGrant = module.provideSecurityGrant;
      dispatchBlockEvent = module.dispatchBlockEvent;
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      SearchOrder = module.SearchOrder;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      ContentCollectionFilterControl = module.ContentCollectionFilterControl;
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      emptyGuid = module.emptyGuid;
      toGuidOrNull = module.toGuidOrNull;
    }],
    execute: (function () {

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
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
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
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
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }

      var _hoisted_1$2 = ["innerHTML"];
      var script$2 = defineComponent({
        name: 'filter.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          filter: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var singleValue = ref(props.modelValue);
          var multipleValue = ref(props.modelValue.split(","));
          var filterClass = computed(() => {
            var _props$filter$label$r, _props$filter$label;
            var filterSlugName = (_props$filter$label$r = (_props$filter$label = props.filter.label) === null || _props$filter$label === void 0 ? void 0 : _props$filter$label.replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, "-").toLowerCase()) !== null && _props$filter$label$r !== void 0 ? _props$filter$label$r : "";
            return "filter filter-".concat(filterSlugName);
          });
          var headerMarkup = computed(() => {
            var _props$filter$headerM;
            return (_props$filter$headerM = props.filter.headerMarkup) !== null && _props$filter$headerM !== void 0 ? _props$filter$headerM : "";
          });
          var items = computed(() => {
            var _props$filter$items2;
            if (isPills.value && !isMultiSelect.value) {
              var _props$filter$items;
              var radioItems = [...((_props$filter$items = props.filter.items) !== null && _props$filter$items !== void 0 ? _props$filter$items : [])];
              radioItems.splice(0, 0, {
                value: "",
                text: "All"
              });
              return radioItems;
            }
            return (_props$filter$items2 = props.filter.items) !== null && _props$filter$items2 !== void 0 ? _props$filter$items2 : [];
          });
          var isMultiSelect = computed(() => {
            return props.filter.isMultipleSelection;
          });
          var isDropDownList = computed(() => {
            return props.filter.control === ContentCollectionFilterControl.Dropdown;
          });
          var isPills = computed(() => {
            return props.filter.control === ContentCollectionFilterControl.Pills;
          });
          var label = computed(() => {
            var _props$filter$label2;
            return (_props$filter$label2 = props.filter.label) !== null && _props$filter$label2 !== void 0 ? _props$filter$label2 : "";
          });
          watch(() => props.modelValue, () => {
            singleValue.value = props.modelValue;
            multipleValue.value = props.modelValue.split(",");
          });
          watch(singleValue, () => {
            if (props.modelValue !== singleValue.value) {
              emit("update:modelValue", singleValue.value);
            }
          });
          watch(multipleValue, () => {
            if (props.modelValue !== multipleValue.value.join(",")) {
              emit("update:modelValue", multipleValue.value.join(","));
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(unref(filterClass))
            }, [unref(headerMarkup) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "filter-header",
              innerHTML: unref(headerMarkup)
            }, null, 8, _hoisted_1$2)) : createCommentVNode("v-if", true), unref(isPills) && unref(isMultiSelect) ? (openBlock(), createBlock(unref(CheckBoxList), {
              key: 1,
              label: unref(label),
              modelValue: multipleValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => multipleValue.value = $event),
              items: unref(items),
              horizontal: ""
            }, null, 8, ["label", "modelValue", "items"])) : createCommentVNode("v-if", true), unref(isPills) && !unref(isMultiSelect) ? (openBlock(), createBlock(unref(RadioButtonList), {
              key: 2,
              label: unref(label),
              modelValue: singleValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => singleValue.value = $event),
              items: unref(items),
              horizontal: ""
            }, null, 8, ["label", "modelValue", "items"])) : createCommentVNode("v-if", true), unref(isDropDownList) && unref(isMultiSelect) ? (openBlock(), createBlock(unref(DropDownList), {
              key: 3,
              label: unref(label),
              modelValue: multipleValue.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => multipleValue.value = $event),
              items: unref(items),
              multiple: ""
            }, null, 8, ["label", "modelValue", "items"])) : createCommentVNode("v-if", true), unref(isDropDownList) && !unref(isMultiSelect) ? (openBlock(), createBlock(unref(DropDownList), {
              key: 4,
              label: unref(label),
              modelValue: singleValue.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => singleValue.value = $event),
              items: unref(items)
            }, null, 8, ["label", "modelValue", "items"])) : createCommentVNode("v-if", true)], 2);
          };
        }
      });

      script$2.__file = "src/Cms/ContentCollectionView/filter.partial.obs";

      var _hoisted_1$1 = {
        class: "collectionsearch-filters"
      };
      var _hoisted_2$1 = createElementVNode("h4", {
        class: "title"
      }, "Filter By", -1);
      var script$1 = defineComponent({
        name: 'filtersContainer.partial',
        props: {
          filters: {
            type: Array,
            required: true
          },
          filterValues: {
            type: Object,
            required: true
          }
        },
        emits: ["update:filterValues"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var filterValues = ref(props.filterValues);
          var getFilterValue = filter => {
            var _filterValues$value$t, _filter$label;
            return (_filterValues$value$t = filterValues.value[((_filter$label = filter.label) !== null && _filter$label !== void 0 ? _filter$label : "").toLowerCase()]) !== null && _filterValues$value$t !== void 0 ? _filterValues$value$t : "";
          };
          var setFilterValue = (filter, value) => {
            var _filter$label2;
            var newValues = _objectSpread2({}, filterValues.value);
            newValues[((_filter$label2 = filter.label) !== null && _filter$label2 !== void 0 ? _filter$label2 : "").toLowerCase()] = value;
            filterValues.value = newValues;
            emit("update:filterValues", newValues);
          };
          watch(() => props.filterValues, () => {
            updateRefValue(filterValues, props.filterValues);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$1, [_hoisted_2$1, (openBlock(true), createElementBlock(Fragment, null, renderList(__props.filters, item => {
              return openBlock(), createBlock(unref(script$2), {
                modelValue: getFilterValue(item),
                "onUpdate:modelValue": $event => setFilterValue(item, $event),
                filter: item
              }, null, 8, ["modelValue", "onUpdate:modelValue", "filter"]);
            }), 256))]);
          };
        }
      });

      script$1.__file = "src/Cms/ContentCollectionView/filtersContainer.partial.obs";

      var SortOrdersKey = function (SortOrdersKey) {
        SortOrdersKey["Relevance"] = "relevance";
        SortOrdersKey["Newest"] = "newest";
        SortOrdersKey["Oldest"] = "oldest";
        SortOrdersKey["Trending"] = "trending";
        SortOrdersKey["Alphabetical"] = "alphabetical";
        return SortOrdersKey;
      }({});

      var _hoisted_1 = {
        key: 1,
        class: "collectionsearch"
      };
      var _hoisted_2 = {
        key: 0,
        class: "collectionsearch-fulltext"
      };
      var _hoisted_3 = {
        class: "search-fulltext"
      };
      var _hoisted_4 = createElementVNode("div", {
        class: "input-group-addon"
      }, [createElementVNode("i", {
        class: "fa fa-search"
      })], -1);
      var _hoisted_5 = {
        key: 0,
        class: "input-group-addon"
      };
      var _hoisted_6 = {
        class: "collectionsearch-results"
      };
      var _hoisted_7 = {
        class: "results-header"
      };
      var _hoisted_8 = {
        class: "results-count"
      };
      var _hoisted_9 = createTextVNode(" Results ");
      var _hoisted_10 = {
        class: "results-count-number"
      };
      var _hoisted_11 = {
        key: 0,
        class: "results-order"
      };
      var script = exports('default', defineComponent({
        name: 'contentCollectionView',
        setup(__props) {
          var _useBlockGuid, _config$filters, _config$enabledSortOr, _config$trendingTerm, _config$initialResult, _config$initialResult2;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var blockGuid = (_useBlockGuid = useBlockGuid()) !== null && _useBlockGuid !== void 0 ? _useBlockGuid : emptyGuid;
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var urlSearchParams = new URLSearchParams(window.location.search);
          var blockError = ref(config.errorMessage);
          var filters = (_config$filters = config.filters) !== null && _config$filters !== void 0 ? _config$filters : [];
          var searchContainerElement = shallowRef(null);
          var searchResultContainerElement = shallowRef(null);
          var query = ref(urlSearchParams.get("q") || urlSearchParams.get("Q") || "");
          var filterValues = ref(getQueryStringFilterValues(filters.map(f => {
            var _f$label;
            return (_f$label = f.label) !== null && _f$label !== void 0 ? _f$label : "";
          })));
          var sortOrder = ref(urlSearchParams.get("s") || urlSearchParams.get("S") || SearchOrder.Relevance.toString());
          var sortOrderItems = getSortOrderItems((_config$enabledSortOr = config.enabledSortOrders) !== null && _config$enabledSortOr !== void 0 ? _config$enabledSortOr : [], (_config$trendingTerm = config.trendingTerm) !== null && _config$trendingTerm !== void 0 ? _config$trendingTerm : "Trending");
          var totalResultsCount = ref((_config$initialResult = (_config$initialResult2 = config.initialResults) === null || _config$initialResult2 === void 0 ? void 0 : _config$initialResult2.totalResultCount) !== null && _config$initialResult !== void 0 ? _config$initialResult : 0);
          var showSort = ref(config.showSort);
          var showFiltersPanel = ref(config.showFiltersPanel);
          var showFullTextSearch = ref(config.showFullTextSearch);
          function getQueryStringFilterValues(filterNames) {
            var params = {};
            var _iterator = _createForOfIteratorHelper(new URLSearchParams(window.location.search).entries()),
              _step;
            try {
              var _loop = function _loop() {
                var entry = _step.value;
                if (filterNames.some(n => n.toLowerCase() === entry[0].toLowerCase()) && entry[1] !== "") {
                  params[entry[0].toLowerCase()] = entry[1];
                }
              };
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return params;
          }
          function updateUrl(query, sortOrder, filterValues, filterNames) {
            var qs = [];
            if (query) {
              qs.push(["q", query]);
            }
            if (sortOrder != SearchOrder.Relevance.toString()) {
              qs.push(["s", sortOrder.toString()]);
            }
            for (var key in filterValues) {
              if (filterValues[key]) {
                qs.push([key, filterValues[key]]);
              }
            }
            var _iterator2 = _createForOfIteratorHelper(new URLSearchParams(window.location.search).entries()),
              _step2;
            try {
              var _loop2 = function _loop2() {
                var entry = _step2.value;
                var entryName = entry[0].toLowerCase();
                if (entryName === "q" || entryName === "s") {
                  return "continue";
                }
                if (!filterNames.some(n => n.toLowerCase() === entryName)) {
                  qs.push([entry[0].toLowerCase(), entry[1]]);
                }
              };
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _ret = _loop2();
                if (_ret === "continue") continue;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            if (qs.length > 0) {
              var querystring = qs.map(q => "".concat(q[0], "=").concat(q[1])).join("&");
              window.history.replaceState(null, "", "".concat(window.location.pathname, "?").concat(querystring));
            } else {
              window.history.replaceState(null, "", window.location.pathname);
            }
          }
          function updateResults(resultsContainerElement, results, seeMore) {
            var _results$resultSource;
            var _iterator3 = _createForOfIteratorHelper((_results$resultSource = results.resultSources) !== null && _results$resultSource !== void 0 ? _results$resultSource : []),
              _step3;
            try {
              var _loop3 = function _loop3() {
                var _resultSource$results;
                var resultSource = _step3.value;
                var sourceGuid = toGuidOrNull(resultSource.sourceGuid);
                if (!sourceGuid) {
                  return "continue";
                }
                var sourceContainerElement = resultsContainerElement.querySelector(".result-source-".concat(sourceGuid.toLowerCase()));
                if (!sourceContainerElement) {
                  var _resultSource$templat;
                  sourceContainerElement = document.createElement("div");
                  sourceContainerElement.classList.add("results", "result-source-".concat(sourceGuid.toLowerCase()));
                  sourceContainerElement.innerHTML = (_resultSource$templat = resultSource.template) !== null && _resultSource$templat !== void 0 ? _resultSource$templat : "";
                  var newSeeMoreElement = sourceContainerElement.querySelector(".js-more");
                  if (newSeeMoreElement) {
                    newSeeMoreElement.addEventListener("click", e => {
                      e.preventDefault();
                      seeMore(sourceGuid);
                    });
                  }
                  resultsContainerElement.append(sourceContainerElement);
                }
                var resultItemsElement = sourceContainerElement.querySelector(".result-items");
                if (!resultItemsElement) {
                  return "continue";
                }
                var _iterator4 = _createForOfIteratorHelper((_resultSource$results = resultSource.results) !== null && _resultSource$results !== void 0 ? _resultSource$results : []),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var item = _step4.value;
                    var itemElement = document.createElement("div");
                    itemElement.innerHTML = item;
                    for (var _i = 0, _Array$from = Array.from(itemElement.children); _i < _Array$from.length; _i++) {
                      var innerElement = _Array$from[_i];
                      innerElement.remove();
                      resultItemsElement.append(innerElement);
                    }
                    var resultItemCount = toNumber(sourceContainerElement.dataset["resultItemCount"]) + 1;
                    sourceContainerElement.dataset["resultItemCount"] = resultItemCount.toString();
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
                var seeMoreElement = sourceContainerElement.querySelector(".js-more");
                if (seeMoreElement && !resultSource.hasMore) {
                  seeMoreElement.classList.add("hidden");
                }
                if (!toNumber(sourceContainerElement.dataset["resultItemCount"])) {
                  sourceContainerElement.classList.add("no-results");
                }
              };
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _ret2 = _loop3();
                if (_ret2 === "continue") continue;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          function getSortOrderItems(allowed, trendingTerm) {
            var sortOrderItems = [];
            if (allowed.includes(SortOrdersKey.Relevance)) {
              sortOrderItems.push({
                value: SearchOrder.Relevance.toString(),
                text: "Relevance"
              });
            }
            if (allowed.includes(SortOrdersKey.Newest)) {
              sortOrderItems.push({
                value: SearchOrder.Newest.toString(),
                text: "Newest"
              });
            }
            if (allowed.includes(SortOrdersKey.Oldest)) {
              sortOrderItems.push({
                value: SearchOrder.Oldest.toString(),
                text: "Oldest"
              });
            }
            if (allowed.includes(SortOrdersKey.Trending)) {
              sortOrderItems.push({
                value: SearchOrder.Trending.toString(),
                text: trendingTerm
              });
            }
            if (allowed.includes(SortOrdersKey.Alphabetical)) {
              sortOrderItems.push({
                value: SearchOrder.Alphabetical.toString(),
                text: "Alphabetical"
              });
            }
            return sortOrderItems;
          }
          var performSearch = function () {
            var _ref = _asyncToGenerator(function* (sourceGuid, offset) {
              var _toGuidOrNull;
              updateUrl(query.value, sortOrder.value, filterValues.value, filters.map(f => {
                var _f$label2;
                return (_f$label2 = f.label) !== null && _f$label2 !== void 0 ? _f$label2 : "";
              }));
              sourceGuid = (_toGuidOrNull = toGuidOrNull(sourceGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : undefined;
              var queryBag = {
                text: query.value,
                filters: filterValues.value,
                sourceGuid,
                offset,
                order: toNumber(sortOrder.value)
              };
              var data = {
                query: queryBag
              };
              var result = yield invokeBlockAction("Search", data);
              if (result.isSuccess && result.data != null) {
                totalResultsCount.value = result.data.totalResultCount;
                processResults(result.data, !offset, sourceGuid);
              } else {
                console.error(result.errorMessage || "Unable to complete the search request.");
              }
            });
            return function performSearch(_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }();
          var processResults = (data, initialResults, sourceGuid) => {
            if (!searchResultContainerElement.value) {
              return;
            }
            if (initialResults) {
              searchResultContainerElement.value.innerHTML = "";
            }
            updateResults(searchResultContainerElement.value, data, onLoadMore);
            if (initialResults) {
              dispatchBlockEvent("content-collection-view-full-search", blockGuid);
            } else if (sourceGuid) {
              dispatchBlockEvent("content-collection-view-results-updated", blockGuid, {
                sourceGuid
              });
            }
          };
          var onLoadMore = function () {
            var _ref2 = _asyncToGenerator(function* (sourceGuid) {
              if (!searchResultContainerElement.value) {
                return;
              }
              var sourceContainerElement = searchResultContainerElement.value.querySelector(".result-source-".concat(sourceGuid.toLowerCase()));
              if (!sourceContainerElement) {
                return;
              }
              var itemCount = toNumber(sourceContainerElement.dataset["resultItemCount"]);
              yield performSearch(sourceGuid, itemCount);
            });
            return function onLoadMore(_x3) {
              return _ref2.apply(this, arguments);
            };
          }();
          function onClearClick() {
            var _searchContainerEleme;
            query.value = "";
            var inputElement = (_searchContainerEleme = searchContainerElement.value) === null || _searchContainerEleme === void 0 ? void 0 : _searchContainerEleme.querySelector("input");
            if (inputElement) {
              inputElement.focus();
            }
          }
          provideSecurityGrant(securityGrant);
          var debounceSearch = debounce(performSearch, 450);
          watch(query, () => {
            debounceSearch();
          });
          watch([filterValues, sortOrder], () => {
            performSearch();
          });
          onMounted(() => {
            var _searchContainerEleme2;
            var inputElement = (_searchContainerEleme2 = searchContainerElement.value) === null || _searchContainerEleme2 === void 0 ? void 0 : _searchContainerEleme2.querySelector("input");
            if (inputElement) {
              inputElement.focus();
            }
            if (searchResultContainerElement.value) {
              if (config.initialResults) {
                processResults(config.initialResults, true);
              } else if (config.preSearchContent) {
                searchResultContainerElement.value.innerHTML = config.preSearchContent;
              }
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning",
              textContent: toDisplayString(blockError.value)
            }, null, 8, ["textContent"])) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createElementBlock("div", _hoisted_1, [showFullTextSearch.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createElementVNode("div", {
              ref_key: "searchContainerElement",
              ref: searchContainerElement,
              class: "content"
            }, [createElementVNode("div", _hoisted_3, [createVNode(unref(TextBox), {
              modelValue: query.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => query.value = $event),
              placeholder: "What can we help you find?"
            }, {
              inputGroupPrepend: withCtx(() => [_hoisted_4]),
              inputGroupAppend: withCtx(() => [query.value ? (openBlock(), createElementBlock("div", _hoisted_5, [createElementVNode("i", {
                class: "fa fa-times clickable",
                onClick: onClearClick
              })])) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["modelValue"])])], 512)])) : createCommentVNode("v-if", true), showFiltersPanel.value ? (openBlock(), createBlock(unref(script$1), {
              key: 1,
              filters: unref(filters),
              filterValues: filterValues.value,
              "onUpdate:filterValues": _cache[1] || (_cache[1] = $event => filterValues.value = $event)
            }, null, 8, ["filters", "filterValues"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_6, [createElementVNode("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [_hoisted_9, createElementVNode("span", _hoisted_10, toDisplayString(totalResultsCount.value), 1)]), showSort.value ? (openBlock(), createElementBlock("div", _hoisted_11, [createVNode(unref(DropDownList), {
              modelValue: sortOrder.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => sortOrder.value = $event),
              items: unref(sortOrderItems),
              showBlankItem: false
            }, null, 8, ["modelValue", "items"])])) : createCommentVNode("v-if", true)]), createElementVNode("div", {
              ref_key: "searchResultContainerElement",
              ref: searchResultContainerElement
            }, null, 512)])])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Cms/contentCollectionView.obs";

    })
  };
}));
//# sourceMappingURL=contentCollectionView.obs.js.map
