System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/skeleton.obs', '@Obsidian/Core/Controls/grid', '@Obsidian/Utility/component', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/promiseUtils', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/stringUtils', '@Obsidian/Directives/dragDrop', '@Obsidian/Utility/block', '@Obsidian/Utility/url', '@Obsidian/SystemGuids/entityType', '@Obsidian/Utility/dialogs', '@Obsidian/Utility/rockDateTime', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Enums/Core/Grid/pickExistingFilterMethod', '@Obsidian/Utility/util', '@Obsidian/Core/Utilities/rockColor', '@Obsidian/Enums/Core/Grid/booleanFilterMethod', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Enums/Core/Grid/dateFilterMethod', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Enums/Core/Grid/numberFilterMethod', '@Obsidian/Enums/Core/Grid/textFilterMethod'], (function (exports, module) {
  'use strict';
  var defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, Fragment, renderList, createElementVNode, ref, watch, nextTick, withModifiers, toDisplayString, onMounted, onBeforeUnmount, createVNode, isRef, withDirectives, vModelSelect, useSlots, shallowRef, onUnmounted, renderSlot, createTextVNode, NotificationBox, Skeleton, getColumnStyles, getColumnDefinitions, GridActionUrlKey, getEntitySetBag, GridState, standardFilterProps, standardSkeletonCellProps, pickExistingFilterMatches, standardCellProps, standardColumnProps, standardHeaderCellProps, booleanFilterMatches, dateFilterMatches, numberFilterMatches, textFilterMatches, useVModelPassthrough, TextBox, isPromise, asFormattedString, toCurrencyOrNull, pluralize, DragSource, DragTarget, useDragReorder, useInvokeBlockAction, usePersonPreferences, makeUrlRedirectSafe, EntityType, alert, confirmDelete, showSecurity, RockDateTime, DropDownList, PickExistingFilterMethod, PickExistingFilterMethodDescription, deepEqual, RockColor, BooleanFilterMethod, BooleanFilterMethodDescription, DatePicker, DateFilterMethod, DateFilterMethodDescription, NumberBox, NumberFilterMethod, NumberFilterMethodDescription, TextFilterMethod, TextFilterMethodDescription;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      normalizeStyle = module.normalizeStyle;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      resolveDynamicComponent = module.resolveDynamicComponent;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createElementVNode = module.createElementVNode;
      ref = module.ref;
      watch = module.watch;
      nextTick = module.nextTick;
      withModifiers = module.withModifiers;
      toDisplayString = module.toDisplayString;
      onMounted = module.onMounted;
      onBeforeUnmount = module.onBeforeUnmount;
      createVNode = module.createVNode;
      isRef = module.isRef;
      withDirectives = module.withDirectives;
      vModelSelect = module.vModelSelect;
      useSlots = module.useSlots;
      shallowRef = module.shallowRef;
      onUnmounted = module.onUnmounted;
      renderSlot = module.renderSlot;
      createTextVNode = module.createTextVNode;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      Skeleton = module["default"];
    }, function (module) {
      getColumnStyles = module.getColumnStyles;
      getColumnDefinitions = module.getColumnDefinitions;
      GridActionUrlKey = module.GridActionUrlKey;
      getEntitySetBag = module.getEntitySetBag;
      GridState = module.GridState;
      standardFilterProps = module.standardFilterProps;
      standardSkeletonCellProps = module.standardSkeletonCellProps;
      pickExistingFilterMatches = module.pickExistingFilterMatches;
      standardCellProps = module.standardCellProps;
      standardColumnProps = module.standardColumnProps;
      standardHeaderCellProps = module.standardHeaderCellProps;
      booleanFilterMatches = module.booleanFilterMatches;
      dateFilterMatches = module.dateFilterMatches;
      numberFilterMatches = module.numberFilterMatches;
      textFilterMatches = module.textFilterMatches;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      isPromise = module.isPromise;
    }, function (module) {
      asFormattedString = module.asFormattedString;
      toCurrencyOrNull = module.toCurrencyOrNull;
    }, function (module) {
      pluralize = module.pluralize;
    }, function (module) {
      DragSource = module.DragSource;
      DragTarget = module.DragTarget;
      useDragReorder = module.useDragReorder;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      usePersonPreferences = module.usePersonPreferences;
    }, function (module) {
      makeUrlRedirectSafe = module.makeUrlRedirectSafe;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      alert = module.alert;
      confirmDelete = module.confirmDelete;
      showSecurity = module.showSecurity;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      PickExistingFilterMethod = module.PickExistingFilterMethod;
      PickExistingFilterMethodDescription = module.PickExistingFilterMethodDescription;
    }, function (module) {
      deepEqual = module.deepEqual;
    }, function (module) {
      RockColor = module.RockColor;
    }, function (module) {
      BooleanFilterMethod = module.BooleanFilterMethod;
      BooleanFilterMethodDescription = module.BooleanFilterMethodDescription;
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      DateFilterMethod = module.DateFilterMethod;
      DateFilterMethodDescription = module.DateFilterMethodDescription;
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      NumberFilterMethod = module.NumberFilterMethod;
      NumberFilterMethodDescription = module.NumberFilterMethodDescription;
    }, function (module) {
      TextFilterMethod = module.TextFilterMethod;
      TextFilterMethodDescription = module.TextFilterMethodDescription;
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

      var script$J = defineComponent({
        name: 'skeletonCell.partial',
        props: {
          column: {
            type: Object,
            required: true
          },
          grid: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var additionalItemClass = computed(() => {
            var _props$column$itemCla;
            var classes = (_props$column$itemCla = props.column.itemClass) !== null && _props$column$itemCla !== void 0 ? _props$column$itemCla : "";
            if (["sm", "md", "lg", "xl"].includes(props.column.visiblePriority)) {
              if (props.column.visiblePriority === "xl") {
                classes += " d-none d-lg-flex";
              } else {
                classes += " d-none d-".concat(props.column.visiblePriority, "-flex");
              }
            }
            return classes.trim();
          });
          var additionalCellStyles = computed(() => {
            var styles = _objectSpread2({}, getColumnStyles(props.column));
            return styles;
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["grid-cell", unref(additionalItemClass)]),
              style: normalizeStyle(unref(additionalCellStyles))
            }, [props.column.skeletonComponent ? (openBlock(), createBlock(unref(Skeleton), {
              key: 0
            }, {
              default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(props.column.skeletonComponent), {
                column: props.column,
                grid: props.grid
              }, null, 8, ["column", "grid"]))]),
              _: 1
            })) : createCommentVNode("v-if", true)], 6);
          };
        }
      });

      script$J.__file = "Framework/Controls/Grid/skeletonCell.partial.obs";

      var script$I = defineComponent({
        name: 'skeletonRow.partial',
        props: {
          columns: {
            type: Array,
            required: true
          },
          grid: {
            type: Object,
            required: true
          },
          isEven: {
            type: Boolean,
            default: false
          }
        },
        setup(__props) {
          var props = __props;
          var additionalRowClasses = computed(() => {
            return props.isEven ? "grid-row-even" : "grid-row-odd";
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["grid-row", unref(additionalRowClasses)])
            }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.columns, column => {
              return openBlock(), createBlock(unref(script$J), {
                column: column,
                grid: props.grid
              }, null, 8, ["column", "grid"]);
            }), 256))], 2);
          };
        }
      });

      script$I.__file = "Framework/Controls/Grid/skeletonRow.partial.obs";

      var script$H = defineComponent({
        name: 'skeletonRows.partial',
        props: {
          columns: {
            type: Array,
            required: true
          },
          grid: {
            type: Object,
            required: true
          },
          count: {
            type: Number,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var items = computed(() => {
            return new Array(props.count);
          });
          return (_ctx, _cache) => {
            return openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (_, index) => {
              return openBlock(), createBlock(unref(script$I), {
                columns: props.columns,
                grid: props.grid,
                isEven: (index + 1) % 2 === 0
              }, null, 8, ["columns", "grid", "isEven"]);
            }), 256);
          };
        }
      });

      script$H.__file = "Framework/Controls/Grid/skeletonRows.partial.obs";

      var _hoisted_1$v = ["onClick"];
      var _hoisted_2$f = createElementVNode("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 14 21"
      }, [createElementVNode("path", {
        fill: "var(--color-info)",
        d: "M9.95 9.36H3.1a.53.53 0 0 1-.37-.9l3.42-3.43c.2-.2.55-.2.75 0l3.43 3.43c.33.33.1.9-.38.9Z"
      }), createElementVNode("path", {
        fill: "currentColor",
        style: {
          "opacity": ".4"
        },
        d: "M3.1 12.49h6.85c.47 0 .7.57.37.9L6.9 16.82c-.2.2-.54.2-.75 0l-3.42-3.43a.53.53 0 0 1 .37-.9Z"
      })], -1);
      var _hoisted_3$b = [_hoisted_2$f];
      var _hoisted_4$8 = ["onClick"];
      var _hoisted_5$3 = createElementVNode("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 13 12"
      }, [createElementVNode("path", {
        fill: "currentColor",
        d: "M4.22 11.26c0 .27.21.48.48.48h3.93c.27 0 .48-.21.48-.48V8.32H4.22v2.94ZM12.2 1H1.14c-.36 0-.6.4-.4.72l3.31 5.64h5.23l3.32-5.64A.48.48 0 0 0 12.2 1Z"
      })], -1);
      var _hoisted_6$3 = [_hoisted_5$3];
      var _hoisted_7$2 = {
        class: "grid-filter-popup-content"
      };
      var _hoisted_8$2 = {
        class: "actions"
      };
      var _hoisted_9$1 = ["onClick"];
      var _hoisted_10 = ["onClick"];
      var script$G = defineComponent({
        name: 'columnHeaderCell.partial',
        props: {
          filterValue: {
            type: Object,
            required: false
          },
          sortDirection: {
            type: Number,
            default: 0
          },
          column: {
            type: Object,
            required: true
          },
          grid: {
            type: Object,
            required: true
          },
          light: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:filterValue", "update:sortDirection"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalFilterValue = ref(props.filterValue);
          var sortDirection = useVModelPassthrough(props, "sortDirection", emit);
          var isFilterOpen = ref(false);
          var filterElement = ref(null);
          var filterButtonElement = ref(null);
          var columnHeaderElement = ref(null);
          var isFilterVisible = computed(() => {
            return !props.light && props.column.filter !== undefined;
          });
          var isSortingEnabled = computed(() => {
            return !props.light && !props.column.name.startsWith("__");
          });
          var filterButtonCssClass = computed(() => {
            return internalFilterValue.value !== undefined ? "btn-grid-column-filter active" : "btn-grid-column-filter";
          });
          var isSorted = computed(() => {
            return sortDirection.value !== 0 && isSortingEnabled.value;
          });
          var additionalSortClass = computed(() => {
            var classValue = "";
            if (sortDirection.value < 0) {
              classValue += "sort-desc";
            } else if (sortDirection.value > 0) {
              classValue += "sort-asc";
            }
            return classValue;
          });
          var additionalHeaderClass = computed(() => {
            var _props$column$headerC;
            var classes = (_props$column$headerC = props.column.headerClass) !== null && _props$column$headerC !== void 0 ? _props$column$headerC : "";
            if (["sm", "md", "lg", "xl"].includes(props.column.visiblePriority)) {
              if (props.column.visiblePriority === "xl") {
                classes += " d-none d-lg-flex";
              } else {
                classes += " d-none d-".concat(props.column.visiblePriority, "-flex");
              }
            }
            if (isSortingEnabled.value && props.column.title !== undefined) {
              classes += " sortable";
            }
            return classes.trim();
          });
          var additionalHeaderStyle = computed(() => {
            var styles = _objectSpread2({}, getColumnStyles(props.column));
            return styles;
          });
          var titleClass = computed(() => {
            var classValue = "grid-column-title";
            if (isSortingEnabled.value) {
              classValue += " stretched-link";
            }
            return classValue;
          });
          var onMouseDownEvent = ev => {
            if (ev.target && ev.target instanceof HTMLElement) {
              if (filterElement.value && filterElement.value.contains(ev.target)) {
                return;
              }
              if (filterButtonElement.value && filterButtonElement.value.contains(ev.target)) {
                return;
              }
            }
            isFilterOpen.value = false;
            internalFilterValue.value = props.filterValue;
          };
          var onFilterClick = () => {
            isFilterOpen.value = !isFilterOpen.value;
          };
          var onFilterClearClick = () => {
            isFilterOpen.value = false;
            internalFilterValue.value = undefined;
            emit("update:filterValue", internalFilterValue.value);
          };
          var onFilterApplyClick = () => {
            isFilterOpen.value = false;
            emit("update:filterValue", internalFilterValue.value);
          };
          var onSortClick = () => {
            if (!isSortingEnabled.value) {
              return;
            }
            if (sortDirection.value === 0) {
              sortDirection.value = 1;
            } else if (sortDirection.value === 1) {
              sortDirection.value = -1;
            } else {
              sortDirection.value = 0;
            }
          };
          watch(isFilterOpen, () => {
            if (isFilterOpen.value) {
              document.addEventListener("mousedown", onMouseDownEvent);
              nextTick(() => {
                var _filterElement$value, _filterElement$value$;
                (_filterElement$value = filterElement.value) === null || _filterElement$value === void 0 ? void 0 : (_filterElement$value$ = _filterElement$value.querySelector("input")) === null || _filterElement$value$ === void 0 ? void 0 : _filterElement$value$.focus();
              });
            } else {
              document.removeEventListener("mousedown", onMouseDownEvent);
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              ref_key: "columnHeaderElement",
              ref: columnHeaderElement,
              class: normalizeClass(["grid-column-header", unref(additionalHeaderClass)]),
              style: normalizeStyle(unref(additionalHeaderStyle))
            }, [__props.column.headerComponent ? (openBlock(), createBlock(resolveDynamicComponent(__props.column.headerComponent), {
              key: 0,
              column: __props.column,
              grid: __props.grid
            }, null, 8, ["column", "grid"])) : __props.column.title ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(titleClass)),
              onClick: withModifiers(onSortClick, ["prevent"])
            }, toDisplayString(__props.column.title), 11, _hoisted_1$v)) : createCommentVNode("v-if", true), unref(isSorted) ? (openBlock(), createElementBlock("span", {
              key: 2,
              class: normalizeClass(["grid-sort-direction", unref(additionalSortClass)])
            }, _hoisted_3$b, 2)) : createCommentVNode("v-if", true), unref(isFilterVisible) ? (openBlock(), createElementBlock("button", {
              key: 3,
              ref_key: "filterButtonElement",
              ref: filterButtonElement,
              type: "button",
              class: normalizeClass(unref(filterButtonCssClass)),
              onClick: withModifiers(onFilterClick, ["prevent"])
            }, _hoisted_6$3, 10, _hoisted_4$8)) : createCommentVNode("v-if", true), isFilterOpen.value ? (openBlock(), createElementBlock("div", {
              key: 4,
              ref_key: "filterElement",
              ref: filterElement,
              class: "grid-filter-popup"
            }, [createElementVNode("div", _hoisted_7$2, [__props.column.filterPrependComponent ? (openBlock(), createBlock(resolveDynamicComponent(__props.column.filterPrependComponent), {
              key: 0,
              column: __props.column,
              grid: __props.grid
            }, null, 8, ["column", "grid"])) : createCommentVNode("v-if", true), (openBlock(), createBlock(resolveDynamicComponent(__props.column.filter.component), {
              modelValue: internalFilterValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalFilterValue.value = $event),
              column: __props.column,
              grid: __props.grid
            }, null, 8, ["modelValue", "column", "grid"]))]), createElementVNode("div", _hoisted_8$2, [createElementVNode("button", {
              class: "btn btn-primary btn-xs",
              onClick: withModifiers(onFilterApplyClick, ["prevent"])
            }, "Apply", 8, _hoisted_9$1), createElementVNode("button", {
              class: "btn btn-link btn-xs",
              onClick: withModifiers(onFilterClearClick, ["prevent"])
            }, "Clear", 8, _hoisted_10)])], 512)) : createCommentVNode("v-if", true)], 6);
          };
        }
      });

      script$G.__file = "Framework/Controls/Grid/columnHeaderCell.partial.obs";

      var _hoisted_1$u = {
        key: 0,
        class: "grid-column-heading"
      };
      var script$F = defineComponent({
        name: 'columnHeaderRow.partial',
        props: {
          columns: {
            type: Array,
            default: []
          },
          columnFilters: {
            type: Object,
            default: {}
          },
          columnSort: {
            type: Object,
            required: false
          },
          grid: {
            type: Object,
            required: true
          },
          light: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:columnFilters", "update:columnSort"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var columnFilters = useVModelPassthrough(props, "columnFilters", emit);
          var columnSort = useVModelPassthrough(props, "columnSort", emit);
          var columnSortLookup = ref({});
          var isVisible = computed(() => {
            return props.columns.some(c => c.title);
          });
          var updateSortLookup = () => {
            var lookup = {};
            var _iterator = _createForOfIteratorHelper(props.columns),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var column = _step.value;
                if (columnSort.value && columnSort.value.column === column.name) {
                  lookup[column.name] = columnSort.value.isDescending ? -1 : 1;
                } else {
                  lookup[column.name] = 0;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            columnSortLookup.value = lookup;
          };
          var _onUpdateFilterValue = (columnName, filterValue) => {
            var newFilters = _objectSpread2({}, columnFilters.value);
            newFilters[columnName] = filterValue;
            columnFilters.value = newFilters;
          };
          var _onUpdateSortDirection = (columnName, direction) => {
            if (direction !== 0) {
              columnSort.value = {
                column: columnName,
                isDescending: direction < 0
              };
              updateSortLookup();
            } else {
              columnSort.value = undefined;
              updateSortLookup();
            }
          };
          updateSortLookup();
          return (_ctx, _cache) => {
            return unref(isVisible) ? (openBlock(), createElementBlock("div", _hoisted_1$u, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, column => {
              return openBlock(), createBlock(unref(script$G), {
                column: column,
                filterValue: unref(columnFilters)[column.name],
                sortDirection: columnSortLookup.value[column.name],
                grid: __props.grid,
                light: __props.light,
                "onUpdate:filterValue": $event => _onUpdateFilterValue(column.name, $event),
                "onUpdate:sortDirection": $event => _onUpdateSortDirection(column.name, $event)
              }, null, 8, ["column", "filterValue", "sortDirection", "grid", "light", "onUpdate:filterValue", "onUpdate:sortDirection"]);
            }), 256))])) : createCommentVNode("v-if", true);
          };
        }
      });

      script$F.__file = "Framework/Controls/Grid/columnHeaderRow.partial.obs";

      var script$E = defineComponent({
        name: 'dataCell.partial',
        props: {
          column: {
            type: Object,
            required: true
          },
          row: {
            type: Object,
            required: true
          },
          grid: {
            type: Object,
            required: true
          },
          isSelectable: {
            type: Boolean,
            default: false
          }
        },
        emits: ["click"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var additionalItemClass = computed(() => {
            var _props$column$itemCla;
            var classes = (_props$column$itemCla = props.column.itemClass) !== null && _props$column$itemCla !== void 0 ? _props$column$itemCla : "";
            if (["sm", "md", "lg", "xl"].includes(props.column.visiblePriority)) {
              if (props.column.visiblePriority === "xl") {
                classes += " d-none d-lg-flex";
              } else {
                classes += " d-none d-".concat(props.column.visiblePriority, "-flex");
              }
            }
            if (isSelectable.value) {
              classes += " grid-select-cell";
            }
            return classes.trim();
          });
          var additionalCellStyles = computed(() => {
            var styles = _objectSpread2({}, getColumnStyles(props.column));
            return styles;
          });
          var isSelectable = computed(() => {
            return props.isSelectable && !props.column.name.startsWith("__");
          });
          function onClick(ev) {
            if (!isSelectable.value) {
              return;
            }
            ev.stopPropagation();
            if (props.isSelectable) {
              emit("click");
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["grid-cell", unref(additionalItemClass)]),
              style: normalizeStyle(unref(additionalCellStyles)),
              onClick: onClick,
              role: "gridcell"
            }, [(openBlock(), createBlock(resolveDynamicComponent(props.column.formatComponent), {
              row: props.row,
              column: props.column,
              grid: props.grid
            }, null, 8, ["row", "column", "grid"]))], 6);
          };
        }
      });

      script$E.__file = "Framework/Controls/Grid/dataCell.partial.obs";

      var _hoisted_1$t = ["title"];
      var script$D = defineComponent({
        name: 'dataRow.partial',
        props: {
          columns: {
            type: Array,
            required: true
          },
          row: {
            type: Object,
            required: true
          },
          grid: {
            type: Object,
            required: true
          },
          tooltipField: {
            type: String,
            required: false
          },
          isSelectable: {
            type: Boolean,
            default: false
          },
          isEven: {
            type: Boolean,
            default: false
          },
          monitorHeight: {
            type: Boolean,
            default: false
          },
          markInactiveRows: {
            type: Boolean,
            default: false
          }
        },
        emits: ["click", "resize"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var element = ref();
          var resizeObserver;
          var additionalRowClasses = computed(() => {
            var classValue = props.isEven ? "grid-row-even" : "grid-row-odd";
            if (props.isSelectable) {
              classValue += " grid-row-selectable";
            }
            if (props.markInactiveRows && props.row.isActive === false) {
              classValue += " is-inactive";
            }
            return classValue;
          });
          var tooltipText = computed(() => {
            if (!props.tooltipField) {
              return undefined;
            }
            var fieldValue = props.row[props.tooltipField];
            if (typeof fieldValue === "string") {
              return fieldValue || undefined;
            } else if (typeof fieldValue === "number") {
              return fieldValue.toString();
            } else if (fieldValue) {
              return String(fieldValue);
            } else {
              return undefined;
            }
          });
          function onCellClick() {
            var rowKey = props.grid.getRowKey(props.row);
            if (rowKey) {
              emit("click", rowKey);
            }
          }
          onMounted(() => {
            if (typeof ResizeObserver !== "undefined" && element.value) {
              resizeObserver = new ResizeObserver(() => {
                var rowKey = props.grid.getRowKey(props.row);
                if (rowKey && element.value) {
                  emit("resize", rowKey, element.value.offsetHeight);
                }
              });
              resizeObserver.observe(element.value);
            }
          });
          onBeforeUnmount(() => {
            if (resizeObserver) {
              resizeObserver.disconnect();
              resizeObserver = undefined;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              ref_key: "element",
              ref: element,
              title: unref(tooltipText),
              class: normalizeClass(["grid-row", unref(additionalRowClasses)])
            }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.columns, column => {
              return openBlock(), createBlock(unref(script$E), {
                column: column,
                row: props.row,
                grid: props.grid,
                isSelectable: __props.isSelectable,
                onClick: onCellClick
              }, null, 8, ["column", "row", "grid", "isSelectable"]);
            }), 256))], 10, _hoisted_1$t);
          };
        }
      });

      script$D.__file = "Framework/Controls/Grid/dataRow.partial.obs";

      var script$C = defineComponent({
        name: 'dataRows.partial',
        props: {
          columns: {
            type: Array,
            required: true
          },
          rows: {
            type: Array,
            required: true
          },
          grid: {
            type: Object,
            required: true
          },
          tooltipField: {
            type: String,
            required: false
          },
          isSelectable: {
            type: Boolean,
            default: false
          },
          markInactiveRows: {
            type: Boolean,
            default: false
          },
          rowClass: {
            type: [String, Function],
            default: undefined
          }
        },
        emits: ["click"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          function onRowClick(key) {
            emit("click", key);
          }
          function getRowClass(row) {
            if (typeof props.rowClass == "string") {
              return props.rowClass;
            }
            if (typeof props.rowClass == "function") {
              return props.rowClass(row);
            }
            return undefined;
          }
          return (_ctx, _cache) => {
            return openBlock(true), createElementBlock(Fragment, null, renderList(props.rows, (row, index) => {
              return openBlock(), createBlock(unref(script$D), {
                key: props.grid.getRowKey(row),
                columns: props.columns,
                row: row,
                grid: props.grid,
                tooltipField: props.tooltipField,
                isSelectable: __props.isSelectable,
                isEven: (index + 1) % 2 === 0,
                markInactiveRows: __props.markInactiveRows,
                class: normalizeClass(getRowClass(row)),
                onClick: onRowClick
              }, null, 8, ["columns", "row", "grid", "tooltipField", "isSelectable", "isEven", "markInactiveRows", "class"]);
            }), 128);
          };
        }
      });

      script$C.__file = "Framework/Controls/Grid/dataRows.partial.obs";

      var _hoisted_1$s = ["title", "onClick"];
      var script$B = defineComponent({
        name: 'actionButton.partial',
        props: {
          action: {
            type: Object,
            required: true
          },
          grid: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var isExecuting = ref(false);
          var actionTooltip = computed(() => {
            return props.action.tooltip;
          });
          var buttonCssClass = computed(() => {
            var classes = "btn btn-grid-action";
            if (props.action.buttonCssClass) {
              classes += " ".concat(props.action.buttonCssClass);
            }
            if (isExecuting.value || props.action.disabled || !props.action.handler) {
              classes += " disabled";
            }
            return classes;
          });
          var iconCssClass = computed(() => {
            return "".concat(props.action.iconCssClass || "fa fa-square", " fa-fw");
          });
          var onActionClick = function () {
            var _ref = _asyncToGenerator(function* () {
              if (!props.action.handler || props.action.disabled || isExecuting.value) {
                return;
              }
              isExecuting.value = true;
              try {
                var result = props.action.handler(props.grid);
                if (isPromise(result)) {
                  yield result;
                }
              } finally {
                isExecuting.value = false;
              }
            });
            return function onActionClick() {
              return _ref.apply(this, arguments);
            };
          }();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("button", {
              type: "button",
              class: normalizeClass(unref(buttonCssClass)),
              title: unref(actionTooltip),
              onClick: withModifiers(onActionClick, ["prevent", "stop"])
            }, [createElementVNode("i", {
              class: normalizeClass(unref(iconCssClass))
            }, null, 2)], 10, _hoisted_1$s);
          };
        }
      });

      script$B.__file = "Framework/Controls/Grid/actionButton.partial.obs";

      var _hoisted_1$r = {
        class: "grid-actions"
      };
      var script$A = defineComponent({
        name: 'actionGroup.partial',
        props: {
          gridActions: {
            type: Array,
            default: []
          },
          grid: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var gridActions = computed(() => {
            return [...props.gridActions].reverse();
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$r, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(gridActions), action => {
              return openBlock(), createBlock(unref(script$B), {
                action: action,
                grid: __props.grid
              }, null, 8, ["action", "grid"]);
            }), 256))]);
          };
        }
      });

      script$A.__file = "Framework/Controls/Grid/actionGroup.partial.obs";

      var _hoisted_1$q = ["onClick"];
      var _hoisted_2$e = {
        class: "ml-2 action-title flex-grow-1"
      };
      var _hoisted_3$a = {
        key: 0,
        class: "ml-2"
      };
      var _hoisted_4$7 = ["title"];
      var script$z = defineComponent({
        name: 'popupActionButton.partial',
        props: {
          action: {
            type: Object,
            required: true
          },
          grid: {
            type: Object,
            required: true
          }
        },
        emits: ["click"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var isExecuting = ref(false);
          var actionItemClass = computed(() => {
            return props.action.disabled || isExecuting.value || !props.action.handler ? "disabled" : "";
          });
          var actionButtonClass = computed(() => {
            var _props$action$buttonC;
            return (_props$action$buttonC = props.action.buttonCssClass) !== null && _props$action$buttonC !== void 0 ? _props$action$buttonC : "";
          });
          var actionIconClass = computed(() => {
            if (props.action.iconCssClass) {
              var iconClass = props.action.iconCssClass;
              return "".concat(iconClass, " fa-fw");
            } else {
              return "fa fa-fw";
            }
          });
          var actionTooltip = computed(() => {
            if (props.action.tooltip && props.action.tooltip !== props.action.title) {
              return props.action.tooltip;
            } else {
              return undefined;
            }
          });
          function onActionClick() {
            return _onActionClick.apply(this, arguments);
          }
          function _onActionClick() {
            _onActionClick = _asyncToGenerator(function* () {
              if (!props.action.handler || props.action.disabled || isExecuting.value) {
                return;
              }
              emit("click");
              isExecuting.value = true;
              try {
                var result = props.action.handler(props.grid);
                if (isPromise(result)) {
                  yield result;
                }
              } finally {
                isExecuting.value = false;
              }
            });
            return _onActionClick.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("li", {
              class: normalizeClass(unref(actionItemClass))
            }, [createElementVNode("a", {
              href: "#",
              class: normalizeClass(["d-flex align-items-center", unref(actionButtonClass)]),
              onClick: withModifiers(onActionClick, ["prevent", "stop"])
            }, [createElementVNode("i", {
              class: normalizeClass(unref(actionIconClass))
            }, null, 2), createElementVNode("span", _hoisted_2$e, toDisplayString(__props.action.title), 1), unref(actionTooltip) ? (openBlock(), createElementBlock("span", _hoisted_3$a, [createElementVNode("i", {
              class: "fa fa-info-circle",
              title: unref(actionTooltip)
            }, null, 8, _hoisted_4$7)])) : createCommentVNode("v-if", true)], 10, _hoisted_1$q)], 2);
          };
        }
      });

      script$z.__file = "Framework/Controls/Grid/popupActionButton.partial.obs";

      var _hoisted_1$p = {
        class: "grid-actions btn-group"
      };
      var _hoisted_2$d = createElementVNode("button", {
        type: "button",
        class: "btn btn-grid-action",
        style: {
          "position": "relative"
        },
        "data-toggle": "dropdown"
      }, [createElementVNode("i", {
        class: "fa fa-ellipsis-v fa-fw"
      })], -1);
      var script$y = defineComponent({
        name: 'popupActionGroup.partial',
        props: {
          gridActions: {
            type: Array,
            required: true
          },
          grid: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var secondaryActionMenu = ref();
          function onActionClick() {
            if (secondaryActionMenu.value) {
              $(secondaryActionMenu.value).dropdown("toggle");
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$p, [_hoisted_2$d, createElementVNode("ul", {
              class: "dropdown-menu dropdown-menu-right",
              ref_key: "secondaryActionMenu",
              ref: secondaryActionMenu
            }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.gridActions, action => {
              return openBlock(), createBlock(unref(script$z), {
                action: action,
                grid: __props.grid,
                onClick: onActionClick
              }, null, 8, ["action", "grid"]);
            }), 256))], 512)]);
          };
        }
      });

      script$y.__file = "Framework/Controls/Grid/popupActionGroup.partial.obs";

      var _hoisted_1$o = {
        class: "grid-title-heading"
      };
      var _hoisted_2$c = {
        class: "grid-title"
      };
      var _hoisted_3$9 = {
        class: "grid-badges mr-3"
      };
      var _hoisted_4$6 = {
        key: 0,
        class: "label label-default"
      };
      var _hoisted_5$2 = createElementVNode("div", {
        style: {
          "height": "0",
          "border-bottom": "1px solid #dfe0e1",
          "flex-basis": "100%"
        },
        class: "d-md-none grid-header-separator"
      }, null, -1);
      var _hoisted_6$2 = createElementVNode("div", {
        class: "flex-grow-1 d-md-none grid-header-fill",
        style: {
          "min-width": "1px"
        }
      }, null, -1);
      var _hoisted_7$1 = ["onClick"];
      var _hoisted_8$1 = createElementVNode("i", {
        class: "fa fa-search fa-fw"
      }, null, -1);
      var _hoisted_9 = [_hoisted_8$1];
      var script$x = defineComponent({
        name: 'filterHeaderRow.partial',
        props: {
          quickFilterValue: {
            type: String,
            default: ""
          },
          gridActions: {
            type: Array,
            default: []
          },
          grid: {
            type: Object,
            required: true
          },
          visibleColumnCount: {
            type: Number,
            default: 0
          },
          countMessage: {
            type: String,
            required: false
          },
          isCountMessageVisible: {
            type: Boolean,
            default: true
          },
          isSearchVisible: {
            type: Boolean,
            default: true
          }
        },
        emits: ["update:quickFilterValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var quickFilterContainerElement = ref();
          var isSearchExpanded = ref(false);
          var quickFilterValue = useVModelPassthrough(props, "quickFilterValue", emit);
          var primaryGridActions = computed(() => {
            return props.gridActions.filter(a => a.isPrimary === true);
          });
          var secondaryGridActions = computed(() => {
            return props.gridActions.filter(a => a.isPrimary !== true);
          });
          var hasSecondaryActions = computed(() => {
            return secondaryGridActions.value.length > 0;
          });
          function isTreeFocusable(element) {
            while (element != null) {
              if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
                return true;
              }
              if (element.isContentEditable) {
                return true;
              }
              element = element.parentElement;
            }
            return false;
          }
          function onSearchClick() {
            if (isSearchExpanded.value && quickFilterValue.value) {
              return;
            }
            isSearchExpanded.value = !isSearchExpanded.value;
            if (isSearchExpanded.value) {
              nextTick(() => {
                var _quickFilterContainer;
                var searchBox = (_quickFilterContainer = quickFilterContainerElement.value) === null || _quickFilterContainer === void 0 ? void 0 : _quickFilterContainer.querySelector(".grid-quick-filter-search input");
                searchBox === null || searchBox === void 0 ? void 0 : searchBox.focus();
              });
            }
          }
          function onDocumentKeyDown(event) {
            var _quickFilterContainer2;
            if (!(event.target instanceof HTMLElement)) {
              return;
            }
            if ((_quickFilterContainer2 = quickFilterContainerElement.value) !== null && _quickFilterContainer2 !== void 0 && _quickFilterContainer2.contains(event.target)) {
              if (event.key === "Escape") {
                if (quickFilterValue.value === "") {
                  var _quickFilterContainer3;
                  var searchBox = (_quickFilterContainer3 = quickFilterContainerElement.value) === null || _quickFilterContainer3 === void 0 ? void 0 : _quickFilterContainer3.querySelector(".grid-quick-filter-search input");
                  searchBox === null || searchBox === void 0 ? void 0 : searchBox.blur();
                  isSearchExpanded.value = false;
                } else {
                  quickFilterValue.value = "";
                }
              }
            }
            if (!isTreeFocusable(event.target)) {
              if (event.key === "F" && event.ctrlKey && event.shiftKey) {
                isSearchExpanded.value = true;
                nextTick(() => {
                  var _quickFilterContainer4;
                  var searchBox = (_quickFilterContainer4 = quickFilterContainerElement.value) === null || _quickFilterContainer4 === void 0 ? void 0 : _quickFilterContainer4.querySelector(".grid-quick-filter-search input");
                  searchBox === null || searchBox === void 0 ? void 0 : searchBox.focus();
                });
              }
            }
          }
          onMounted(() => {
            document.addEventListener("keydown", onDocumentKeyDown);
          });
          onBeforeUnmount(() => {
            document.removeEventListener("keydown", onDocumentKeyDown);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$o, [createElementVNode("div", _hoisted_2$c, toDisplayString(props.grid.itemTerm) + " List ", 1), createElementVNode("div", _hoisted_3$9, [__props.countMessage && __props.isCountMessageVisible ? (openBlock(), createElementBlock("span", _hoisted_4$6, toDisplayString(__props.countMessage), 1)) : createCommentVNode("v-if", true)]), createCommentVNode(" This causes a break on extra small and small devices. "), _hoisted_5$2, _hoisted_6$2, __props.isSearchVisible ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["grid-quick-filter grid-actions", {
                'active': isSearchExpanded.value
              }])
            }, [createElementVNode("button", {
              type: "button",
              class: "btn btn-grid-action",
              title: "Search",
              onClick: withModifiers(onSearchClick, ["stop", "prevent"])
            }, _hoisted_9, 8, _hoisted_7$1), createElementVNode("div", {
              ref_key: "quickFilterContainerElement",
              ref: quickFilterContainerElement,
              class: normalizeClass(["grid-quick-filter-search", {
                'open': isSearchExpanded.value
              }])
            }, [createVNode(unref(TextBox), {
              modelValue: unref(quickFilterValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(quickFilterValue) ? quickFilterValue.value = $event : null),
              placeholder: "Search"
            }, null, 8, ["modelValue"])], 2)], 2)) : createCommentVNode("v-if", true), createVNode(unref(script$A), {
              gridActions: unref(primaryGridActions),
              grid: __props.grid
            }, null, 8, ["gridActions", "grid"]), unref(hasSecondaryActions) ? (openBlock(), createBlock(unref(script$y), {
              key: 1,
              gridActions: unref(secondaryGridActions),
              grid: __props.grid
            }, null, 8, ["gridActions", "grid"])) : createCommentVNode("v-if", true)]);
          };
        }
      });

      script$x.__file = "Framework/Controls/Grid/filterHeaderRow.partial.obs";

      var _hoisted_1$n = {
        class: "d-flex grid-light-action-row"
      };
      var script$w = defineComponent({
        name: 'lightFooterRow.partial',
        props: {
          grid: {
            type: Object,
            required: true
          },
          gridActions: {
            type: Array,
            default: []
          }
        },
        setup(__props) {
          var props = __props;
          var primaryGridActions = computed(() => {
            return props.gridActions.filter(a => a.isPrimary === true);
          });
          var secondaryGridActions = computed(() => {
            return props.gridActions.filter(a => a.isPrimary !== true);
          });
          var hasSecondaryActions = computed(() => {
            return secondaryGridActions.value.length > 0;
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$n, [createVNode(unref(script$A), {
              gridActions: unref(primaryGridActions),
              grid: __props.grid
            }, null, 8, ["gridActions", "grid"]), unref(hasSecondaryActions) ? (openBlock(), createBlock(unref(script$y), {
              key: 0,
              gridActions: unref(secondaryGridActions),
              grid: __props.grid
            }, null, 8, ["gridActions", "grid"])) : createCommentVNode("v-if", true)]);
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

      var css_248z$1 = ".grid-light-action-row{justify-content:flex-end}.grid-light-action-row .grid-actions{background-color:inherit;padding:calc(var(--table-cell-padding-y)*.25) 0}.grid-light-action-row .grid-actions:last-child{padding-right:var(--table-cell-padding-x)}";
      styleInject(css_248z$1);

      script$w.__file = "Framework/Controls/Grid/lightFooterRow.partial.obs";

      var _hoisted_1$m = {
        key: 0,
        class: "grid-page-picker"
      };
      var _hoisted_2$b = ["onClick"];
      var _hoisted_3$8 = createElementVNode("i", {
        class: "fa fa-chevron-left"
      }, null, -1);
      var _hoisted_4$5 = [_hoisted_3$8];
      var _hoisted_5$1 = ["onClick"];
      var _hoisted_6$1 = ["onClick"];
      var _hoisted_7 = createElementVNode("i", {
        class: "fa fa-chevron-right"
      }, null, -1);
      var _hoisted_8 = [_hoisted_7];
      var script$v = defineComponent({
        name: 'pagePicker.partial',
        props: {
          modelValue: {
            type: Number,
            required: true
          },
          pageCount: {
            type: Number,
            default: 1
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var currentPage = useVModelPassthrough(props, "modelValue", emit);
          var pageButtons = computed(() => {
            var firstNumber = Math.max(1, currentPage.value - 3);
            var lastNumber = Math.min(props.pageCount, currentPage.value + 3);
            var values = [];
            for (var i = firstNumber; i <= lastNumber; i++) {
              values.push(i);
            }
            return values;
          });
          var prevButtonCssClass = computed(() => {
            return currentPage.value > 1 ? "prev" : "prev disabled";
          });
          var nextButtonCssClass = computed(() => {
            return currentPage.value < props.pageCount ? "next" : "next disabled";
          });
          var hasMultiplePages = computed(() => {
            return props.pageCount > 1;
          });
          function getPageButtonCssClass(pageButton) {
            return pageButton === currentPage.value ? "page-num active" : "page-num";
          }
          function onPageButtonClick(pageButton) {
            currentPage.value = pageButton;
          }
          function onPrevButtonClick() {
            currentPage.value = Math.max(1, currentPage.value - 1);
          }
          function onNextButtonClick() {
            currentPage.value = Math.min(props.pageCount, currentPage.value + 1);
          }
          return (_ctx, _cache) => {
            return unref(hasMultiplePages) ? (openBlock(), createElementBlock("div", _hoisted_1$m, [createElementVNode("button", {
              class: normalizeClass(unref(prevButtonCssClass)),
              onClick: withModifiers(onPrevButtonClick, ["prevent"])
            }, _hoisted_4$5, 10, _hoisted_2$b), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pageButtons), pageButton => {
              return openBlock(), createElementBlock("button", {
                class: normalizeClass(getPageButtonCssClass(pageButton)),
                onClick: withModifiers($event => onPageButtonClick(pageButton), ["prevent"])
              }, toDisplayString(pageButton), 11, _hoisted_5$1);
            }), 256)), createElementVNode("button", {
              class: normalizeClass(unref(nextButtonCssClass)),
              onClick: withModifiers(onNextButtonClick, ["prevent"])
            }, _hoisted_8, 10, _hoisted_6$1)])) : createCommentVNode("v-if", true);
          };
        }
      });

      script$v.__file = "Framework/Controls/Grid/pagePicker.partial.obs";

      var _hoisted_1$l = ["value"];
      var script$u = defineComponent({
        name: 'pageSizePicker.partial',
        props: {
          modelValue: {
            type: Number,
            required: true
          },
          pageSizes: {
            type: Array,
            default: []
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var pageSize = useVModelPassthrough(props, "modelValue", emit);
          return (_ctx, _cache) => {
            return __props.pageSizes ? withDirectives((openBlock(), createElementBlock("select", {
              key: 0,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(pageSize) ? pageSize.value = $event : null),
              class: "form-control input-sm"
            }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.pageSizes, size => {
              return openBlock(), createElementBlock("option", {
                key: size,
                value: size
              }, toDisplayString(size), 9, _hoisted_1$l);
            }), 128))], 512)), [[vModelSelect, unref(pageSize)]]) : createCommentVNode("v-if", true);
          };
        }
      });

      script$u.__file = "Framework/Controls/Grid/pageSizePicker.partial.obs";

      var _hoisted_1$k = {
        class: "grid-paging-footer"
      };
      var _hoisted_2$a = {
        class: "grid-page-sizes"
      };
      var script$t = defineComponent({
        name: 'pagerRow.partial',
        props: {
          pageSize: {
            type: Number,
            required: true
          },
          pageSizes: {
            type: Array,
            default: []
          },
          currentPage: {
            type: Number,
            default: 1
          },
          pageCount: {
            type: Number,
            default: 1
          },
          visibleColumnCount: {
            type: Number,
            default: 0
          }
        },
        emits: ["update:pageSize", "update:currentPage"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var pageSize = useVModelPassthrough(props, "pageSize", emit);
          var currentPage = useVModelPassthrough(props, "currentPage", emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$k, [createElementVNode("div", _hoisted_2$a, [createVNode(unref(script$u), {
              modelValue: unref(pageSize),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(pageSize) ? pageSize.value = $event : null),
              pageSizes: __props.pageSizes
            }, null, 8, ["modelValue", "pageSizes"])]), createVNode(unref(script$v), {
              modelValue: unref(currentPage),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(currentPage) ? currentPage.value = $event : null),
              pageCount: __props.pageCount
            }, null, 8, ["modelValue", "pageCount"])]);
          };
        }
      });

      script$t.__file = "Framework/Controls/Grid/pagerRow.partial.obs";

      var CalcType = function (CalcType) {
        CalcType["Init"] = "init";
        CalcType["Fixed"] = "fixed";
        CalcType["Dynamic"] = "dynamic";
        return CalcType;
      }(CalcType || {});
      class VirtualScroller {
        constructor(options, rangeUpdated) {
          _defineProperty(this, "heights", new Map());
          _defineProperty(this, "firstRangeTotalHeight", 0);
          _defineProperty(this, "firstRangeAverageHeight", 0);
          _defineProperty(this, "highestCalculatedIndex", 0);
          _defineProperty(this, "calcType", CalcType.Init);
          _defineProperty(this, "fixedHeightValue", 0);
          _defineProperty(this, "offset", 0);
          _defineProperty(this, "range", {
            startIndex: 0,
            endIndex: 0,
            padBefore: 0,
            padAfter: 0
          });
          this.options = _objectSpread2({}, options);
          this.rangeUpdated = rangeUpdated;
          this.checkRange(0, options.visibleCount - 1);
        }
        destroy() {
          this.heights.clear();
        }
        getRange() {
          return _objectSpread2({}, this.range);
        }
        dataSourceChanged(uniqueIds) {
          this.heights.forEach((v, key) => {
            if (!uniqueIds.includes(key)) {
              this.heights.delete(key);
            }
          });
          this.options.uniqueIds = uniqueIds;
          this.handleScroll(this.offset);
        }
        updateHeight(id, height) {
          this.heights.set(id, height);
          if (this.calcType === CalcType.Init) {
            this.fixedHeightValue = height;
            this.calcType = CalcType.Fixed;
          } else if (this.calcType === CalcType.Fixed && this.fixedHeightValue !== height) {
            this.calcType = CalcType.Dynamic;
            this.fixedHeightValue = undefined;
          }
          if (this.calcType !== CalcType.Fixed && this.firstRangeTotalHeight !== undefined) {
            if (this.heights.size < Math.min(this.options.visibleCount, this.options.uniqueIds.length)) {
              this.firstRangeTotalHeight = [...this.heights.values()].reduce((acc, val) => acc + val, 0);
              this.firstRangeAverageHeight = Math.round(this.firstRangeTotalHeight / this.heights.size);
            } else {
              this.firstRangeTotalHeight = undefined;
            }
          }
        }
        handleScroll(offset) {
          this.offset = offset;
          var firstVisibleIndex = this.getFirstVisibleIndex();
          var lastVisibleIndex = firstVisibleIndex + this.options.visibleCount;
          var start = this.range.startIndex;
          var end = this.range.endIndex;
          if (firstVisibleIndex - start < this.options.bufferCount) {
            start = Math.max(firstVisibleIndex - this.options.bufferCount * 2, 0);
            if (end - lastVisibleIndex > this.options.bufferCount * 3) {
              end = Math.min(lastVisibleIndex + this.options.bufferCount * 2, this.getLastIndex());
            }
          }
          if (end - lastVisibleIndex < this.options.bufferCount) {
            end = Math.min(lastVisibleIndex + this.options.bufferCount * 2, this.getLastIndex());
            if (start === this.range.startIndex && firstVisibleIndex - start > this.options.bufferCount * 3) {
              start = Math.max(firstVisibleIndex - this.options.bufferCount * 2, 0);
            }
          }
          this.checkRange(start, end);
        }
        getFirstVisibleIndex() {
          if (this.offset <= 0) {
            return 0;
          }
          if (this.isFixedType() && this.fixedHeightValue !== undefined) {
            return Math.floor(this.offset / this.fixedHeightValue);
          }
          var low = 0;
          var middle = 0;
          var high = this.options.uniqueIds.length;
          while (low <= high) {
            middle = low + Math.floor((high - low) / 2);
            var middleOffset = this.getIndexOffset(middle);
            if (middleOffset === this.offset) {
              return middle;
            } else if (middleOffset < this.offset) {
              low = middle + 1;
            } else if (middleOffset > this.offset) {
              high = middle - 1;
            }
          }
          return low > 0 ? --low : 0;
        }
        getIndexOffset(givenIndex) {
          if (givenIndex === 0) {
            return 0;
          }
          var offset = 0;
          for (var index = 0; index < givenIndex; index++) {
            var indexSize = this.heights.get(this.options.uniqueIds[index]);
            offset = offset + (typeof indexSize === "number" ? indexSize : this.getEstimatedItemHeight());
          }
          this.highestCalculatedIndex = Math.max(this.highestCalculatedIndex, givenIndex - 1);
          this.highestCalculatedIndex = Math.min(this.highestCalculatedIndex, this.getLastIndex());
          return offset;
        }
        isFixedType() {
          return this.calcType === CalcType.Fixed;
        }
        getLastIndex() {
          return this.options.uniqueIds.length - 1;
        }
        checkRange(start, end) {
          var total = this.options.uniqueIds.length;
          if (total <= this.options.visibleCount + this.options.bufferCount + this.options.bufferCount) {
            start = 0;
            end = this.getLastIndex();
          }
          if (this.range.startIndex !== start || this.range.endIndex !== end) {
            this.updateRange(start, end);
          }
        }
        updateRange(start, end) {
          this.range.startIndex = start;
          this.range.endIndex = end;
          this.range.padBefore = this.getPadBefore();
          this.range.padAfter = this.getPadAfter();
          this.rangeUpdated(this.getRange());
        }
        getPadBefore() {
          if (this.isFixedType()) {
            var _this$fixedHeightValu;
            return ((_this$fixedHeightValu = this.fixedHeightValue) !== null && _this$fixedHeightValu !== void 0 ? _this$fixedHeightValu : 0) * this.range.startIndex;
          } else {
            return this.getIndexOffset(this.range.startIndex);
          }
        }
        getPadAfter() {
          var end = this.range.endIndex;
          var lastIndex = this.getLastIndex();
          if (this.isFixedType()) {
            var _this$fixedHeightValu2;
            return (lastIndex - end) * ((_this$fixedHeightValu2 = this.fixedHeightValue) !== null && _this$fixedHeightValu2 !== void 0 ? _this$fixedHeightValu2 : 0);
          }
          if (this.highestCalculatedIndex === lastIndex) {
            return this.getIndexOffset(lastIndex) - this.getIndexOffset(end);
          } else {
            return (lastIndex - end) * this.getEstimatedItemHeight();
          }
        }
        getEstimatedItemHeight() {
          var _this$fixedHeightValu3;
          return this.isFixedType() ? (_this$fixedHeightValu3 = this.fixedHeightValue) !== null && _this$fixedHeightValu3 !== void 0 ? _this$fixedHeightValu3 : 0 : this.firstRangeAverageHeight || this.options.estimatedHeight;
        }
      }

      var script$s = defineComponent({
        name: 'virtualDataRows.partial',
        props: {
          columns: {
            type: Array,
            required: true
          },
          rows: {
            type: Array,
            required: true
          },
          grid: {
            type: Object,
            required: true
          },
          tooltipField: {
            type: String,
            required: false
          },
          isSelectable: {
            type: Boolean,
            default: false
          },
          markInactiveRows: {
            type: Boolean,
            default: false
          },
          rowClass: {
            type: [String, Function],
            default: undefined
          }
        },
        emits: ["click"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var element = ref();
          var range = ref({
            startIndex: 0,
            endIndex: 0,
            padBefore: 0,
            padAfter: 0
          });
          var virtualScroller;
          var virtualRows = computed(() => {
            var isInvalidRange = !range.value || range.value.startIndex >= props.rows.length || range.value.endIndex >= props.rows.length;
            if (isInvalidRange) {
              return [];
            }
            return props.rows.slice(range.value.startIndex, range.value.endIndex + 1);
          });
          var beforePadStyle = computed(() => {
            return {
              height: "".concat(range.value.padBefore, "px")
            };
          });
          var afterPadStyle = computed(() => {
            return {
              height: "".concat(range.value.padAfter, "px")
            };
          });
          function getScrollOffset() {
            return document.documentElement.scrollTop || document.body.scrollTop;
          }
          function getClientHeight() {
            return document.documentElement.clientHeight || document.body.clientHeight;
          }
          function getScrollHeight() {
            return document.documentElement.scrollHeight || document.body.scrollHeight;
          }
          function createVirtualScroller() {
            var estimatedHeight = 58;
            var largestEdge = Math.max(window.screen.width, window.screen.height);
            var visibleCount = Math.floor(largestEdge / estimatedHeight);
            return new VirtualScroller({
              visibleCount,
              bufferCount: Math.round(visibleCount / 3),
              estimatedHeight,
              uniqueIds: props.rows.map(r => props.grid.getRowKey(r)).filter(r => r !== undefined)
            }, range => onRangeChanged(range));
          }
          function getRowClass(row) {
            if (typeof props.rowClass == "string") {
              return props.rowClass;
            }
            if (typeof props.rowClass == "function") {
              return props.rowClass(row);
            }
            return undefined;
          }
          function onRowClick(key) {
            emit("click", key);
          }
          function onRangeChanged(r) {
            range.value = r;
          }
          function onScroll() {
            var _virtualScroller;
            var offset = getScrollOffset();
            var clientSize = getClientHeight();
            var scrollSize = getScrollHeight();
            if (offset < 0 || offset + clientSize > scrollSize + 1 || !scrollSize) {
              return;
            }
            var scrollableOffset = element.value ? element.value.getBoundingClientRect().top + window.scrollY : 0;
            (_virtualScroller = virtualScroller) === null || _virtualScroller === void 0 ? void 0 : _virtualScroller.handleScroll(Math.floor(Math.max(0, offset - scrollableOffset)));
          }
          function onRowResize(key, height) {
            var _virtualScroller2;
            (_virtualScroller2 = virtualScroller) === null || _virtualScroller2 === void 0 ? void 0 : _virtualScroller2.updateHeight(key, height);
          }
          watch(() => props.rows, () => {
            var _virtualScroller3;
            (_virtualScroller3 = virtualScroller) === null || _virtualScroller3 === void 0 ? void 0 : _virtualScroller3.dataSourceChanged(props.rows.map(r => props.grid.getRowKey(r)).filter(r => r !== undefined));
          });
          onBeforeUnmount(() => {
            document.removeEventListener("scroll", onScroll);
            if (virtualScroller) {
              virtualScroller.destroy();
              virtualScroller = undefined;
            }
          });
          onMounted(() => {
            virtualScroller = createVirtualScroller();
            if (getScrollOffset() > 0) {
              onScroll();
            }
            document.addEventListener("scroll", onScroll, {
              passive: false
            });
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: "grid-body",
              ref_key: "element",
              ref: element
            }, [createElementVNode("div", {
              style: normalizeStyle(unref(beforePadStyle))
            }, null, 4), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(virtualRows), (row, index) => {
              return openBlock(), createBlock(unref(script$D), {
                key: props.grid.getRowKey(row),
                columns: props.columns,
                row: row,
                grid: props.grid,
                tooltipField: props.tooltipField,
                isSelectable: __props.isSelectable,
                isEven: (range.value.startIndex + index + 1) % 2 === 0,
                monitorHeight: "",
                markInactiveRows: __props.markInactiveRows,
                class: normalizeClass(getRowClass(row)),
                onResize: onRowResize,
                onClick: onRowClick
              }, null, 8, ["columns", "row", "grid", "tooltipField", "isSelectable", "isEven", "markInactiveRows", "class"]);
            }), 128)), createElementVNode("div", {
              style: normalizeStyle(unref(afterPadStyle))
            }, null, 4)], 512);
          };
        }
      });

      script$s.__file = "Framework/Controls/Grid/virtualDataRows.partial.obs";

      var _hoisted_1$j = {
        class: "grid-heading"
      };
      var _hoisted_2$9 = {
        key: 0,
        class: "grid-body"
      };
      var _hoisted_3$7 = {
        key: 1,
        class: "grid-body"
      };
      var _hoisted_4$4 = {
        key: 2,
        class: "grid-body"
      };
      var _hoisted_5 = {
        key: 3,
        class: "grid-body"
      };
      var _hoisted_6 = {
        class: "grid-footing"
      };
      var PreferenceKey = function (PreferenceKey) {
        PreferenceKey["ColumnFilterValues"] = "column-filter-values";
        PreferenceKey["SortDirection"] = "sort-direction";
        return PreferenceKey;
      }(PreferenceKey || {});
      var script$r = exports('default', defineComponent({
        name: 'grid.partial',
        props: {
          data: {
            type: Object
          },
          definition: {
            type: Object,
            required: false
          },
          keyField: {
            type: String,
            required: false
          },
          personKeyField: {
            type: String,
            required: false
          },
          communicationRecipientPersonKeyFields: {
            type: Array,
            required: false
          },
          tooltipField: {
            type: String,
            required: false
          },
          light: {
            type: Boolean,
            default: false
          },
          liveUpdates: {
            type: Boolean,
            required: false
          },
          stickyHeader: {
            type: Boolean,
            default: false
          },
          itemTerm: {
            type: String,
            required: false
          },
          entityTypeGuid: {
            type: String,
            required: false
          },
          exportTitle: {
            type: String,
            required: false
          },
          personAsBusiness: {
            type: Boolean,
            default: false
          },
          mergeTemplateAsPerson: {
            type: Boolean,
            default: false
          },
          showBulkUpdate: {
            type: Boolean,
            default: undefined
          },
          showPersonMerge: {
            type: Boolean,
            default: undefined
          },
          showLaunchWorkflow: {
            type: Boolean,
            default: undefined
          },
          showCommunicate: {
            type: Boolean,
            default: undefined
          },
          showMergeTemplate: {
            type: Boolean,
            default: undefined
          },
          showExport: {
            type: Boolean,
            default: undefined
          },
          markInactiveRows: {
            type: Boolean,
            default: false
          },
          rowClass: {
            type: [String, Function],
            default: undefined
          },
          communicationMergeFields: {
            type: Array,
            required: false
          },
          expectedRowCount: {
            type: Number,
            required: false
          },
          customActions: {
            type: Array,
            required: false
          },
          preferencePrefix: {
            type: String,
            required: false
          },
          disablePreferences: {
            type: Boolean,
            default: false
          },
          gridSettings: {
            type: Boolean,
            default: false
          },
          gridSettingsActive: {
            type: Boolean,
            default: false
          },
          onAddItem: {
            type: Function,
            required: false
          },
          onSelectItem: {
            type: Function,
            required: false
          },
          isCountMessageVisible: {
            type: Boolean,
            default: true
          },
          isSearchVisible: {
            type: Boolean,
            default: true
          }
        },
        emits: ["gridSettingsClick", "filteredRowsChanged", "selectedKeysChanged"],
        setup(__props, _ref) {
          var expose = _ref.expose,
            emit = _ref.emit;
          var props = __props;
          expose({
            deleteRow,
            rowUpdated,
            rowsUpdated
          });
          var slots = useSlots();
          var invokeBlockAction = useInvokeBlockAction();
          var currentPage = ref(1);
          var pageSize = ref(50);
          var pageSizes = [50, 500, 5000];
          var quickFilterValue = ref("");
          var loadingData = ref(false);
          var gridErrorMessage = ref("");
          var columnFilterValues = ref({});
          var columnSortDirection = ref();
          var visibleRows = ref([]);
          var pageCount = ref(0);
          var countMessage = ref("");
          var visibleColumnDefinitions = shallowRef([]);
          var dragOptions = ref();
          var isRowSelectionInProgress = ref(false);
          var rootPreferences = usePersonPreferences().blockPreferences;
          var gridPreferences = getPrefixedPreferences();
          var preferencesAreDirty = false;
          var preferencesAreSaving = false;
          var columnDefinitions = computed(() => {
            var _slots$default, _slots$default2;
            return getColumnDefinitions((_slots$default = (_slots$default2 = slots["default"]) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots)) !== null && _slots$default !== void 0 ? _slots$default : []);
          });
          var visibleColumnCount = computed(() => {
            return visibleColumnDefinitions.value.length;
          });
          var skeletonRowCount = computed(() => {
            var _props$expectedRowCou;
            return Math.min(50, (_props$expectedRowCou = props.expectedRowCount) !== null && _props$expectedRowCou !== void 0 ? _props$expectedRowCou : 50);
          });
          var isMergeTemplateVisible = computed(() => {
            var _props$definition, _props$definition$act;
            if (!((_props$definition = props.definition) !== null && _props$definition !== void 0 && (_props$definition$act = _props$definition.actionUrls) !== null && _props$definition$act !== void 0 && _props$definition$act[GridActionUrlKey.MergeTemplate])) {
              return false;
            }
            return props.showMergeTemplate !== false;
          });
          var isExportVisible = computed(() => {
            if (props.showExport === undefined) {
              return !props.light;
            }
            return props.showExport;
          });
          var isLaunchWorkflowVisible = computed(() => {
            var _props$definition2, _props$definition2$ac, _props$definition3;
            if (!((_props$definition2 = props.definition) !== null && _props$definition2 !== void 0 && (_props$definition2$ac = _props$definition2.actionUrls) !== null && _props$definition2$ac !== void 0 && _props$definition2$ac[GridActionUrlKey.LaunchWorkflow])) {
              return false;
            }
            if (props.showLaunchWorkflow === true || props.showLaunchWorkflow === false) {
              return props.showLaunchWorkflow;
            } else if (((_props$definition3 = props.definition) === null || _props$definition3 === void 0 ? void 0 : _props$definition3.enableLaunchWorkflow) !== undefined) {
              return props.definition.enableLaunchWorkflow;
            } else {
              return !!props.keyField && !!props.entityTypeGuid;
            }
          });
          var isBulkUpdateVisible = computed(() => {
            var _props$definition4, _props$definition4$ac;
            if (!((_props$definition4 = props.definition) !== null && _props$definition4 !== void 0 && (_props$definition4$ac = _props$definition4.actionUrls) !== null && _props$definition4$ac !== void 0 && _props$definition4$ac[GridActionUrlKey.BulkUpdate])) {
              return false;
            }
            if (props.showBulkUpdate === true || props.showBulkUpdate === false) {
              return props.showBulkUpdate;
            } else {
              return !!props.personKeyField && !!props.entityTypeGuid;
            }
          });
          var isMergePersonVisible = computed(() => {
            var _props$definition5, _props$definition5$ac;
            if (!((_props$definition5 = props.definition) !== null && _props$definition5 !== void 0 && (_props$definition5$ac = _props$definition5.actionUrls) !== null && _props$definition5$ac !== void 0 && _props$definition5$ac[GridActionUrlKey.MergePerson])) {
              return false;
            }
            if (props.personAsBusiness) {
              return false;
            }
            if (props.showPersonMerge === true || props.showPersonMerge === false) {
              return props.showPersonMerge;
            } else {
              return !!props.personKeyField;
            }
          });
          var isMergeBusinessVisible = computed(() => {
            var _props$definition6, _props$definition6$ac;
            if (!((_props$definition6 = props.definition) !== null && _props$definition6 !== void 0 && (_props$definition6$ac = _props$definition6.actionUrls) !== null && _props$definition6$ac !== void 0 && _props$definition6$ac[GridActionUrlKey.MergeBusiness])) {
              return false;
            }
            if (!props.personAsBusiness) {
              return false;
            }
            if (props.showPersonMerge === true || props.showPersonMerge === false) {
              return props.showPersonMerge;
            } else {
              return !!props.personKeyField;
            }
          });
          var isCommunicateVisible = computed(() => {
            var _props$definition7, _props$definition7$ac;
            if (!((_props$definition7 = props.definition) !== null && _props$definition7 !== void 0 && (_props$definition7$ac = _props$definition7.actionUrls) !== null && _props$definition7$ac !== void 0 && _props$definition7$ac[GridActionUrlKey.Communicate])) {
              return false;
            }
            if (props.showCommunicate === true || props.showCommunicate === false) {
              return props.showCommunicate;
            } else {
              var _props$communicationR;
              return !!props.personKeyField || ((_props$communicationR = props.communicationRecipientPersonKeyFields) !== null && _props$communicationR !== void 0 ? _props$communicationR : []).length > 0;
            }
          });
          var gridActions = computed(() => {
            var _props$definition8;
            var actions = [];
            if (props.onAddItem) {
              actions.push({
                buttonCssClass: "btn-add",
                handler: props.onAddItem,
                iconCssClass: "fa fa-plus-square",
                isPrimary: true,
                title: "Add item",
                tooltip: "Add a new item."
              });
            }
            if (props.gridSettings) {
              actions.push({
                buttonCssClass: props.gridSettingsActive ? "active" : "",
                handler: () => {
                  emit("gridSettingsClick");
                },
                iconCssClass: "fa fa-sliders-h",
                isPrimary: true,
                title: "Settings",
                tooltip: "Adjust list settings."
              });
            }
            if (isMergeTemplateVisible.value) {
              actions.push({
                handler: onMergeTemplate,
                iconCssClass: "fa fa-files-o",
                title: "Merge Template",
                tooltip: "Merge Records into Merge Template"
              });
            }
            if (isExportVisible.value) {
              actions.push({
                handler: onExportToExcel,
                iconCssClass: "fa fa-file-excel",
                title: "Export to Excel",
                tooltip: "Export to Excel"
              });
            }
            if (isExportVisible.value) {
              actions.push({
                handler: onExportToCsv,
                iconCssClass: "fa fa-file-csv",
                title: "Export to CSV",
                tooltip: "Export to CSV"
              });
            }
            if (isLaunchWorkflowVisible.value) {
              actions.push({
                handler: onLaunchWorkflow,
                iconCssClass: "fa fa-cog",
                title: "Launch Workflow",
                tooltip: "Launch Workflow"
              });
            }
            if (isBulkUpdateVisible.value) {
              actions.push({
                handler: onBulkUpdate,
                iconCssClass: "fa fa-truck",
                title: "Bulk Update",
                tooltip: "Bulk Update"
              });
            }
            if (isMergePersonVisible.value) {
              actions.push({
                handler: onPersonMerge,
                iconCssClass: "fa fa-users",
                title: "Merge Person Records",
                tooltip: "Merge Person Records"
              });
            }
            if (isMergeBusinessVisible.value) {
              actions.push({
                handler: onPersonMerge,
                iconCssClass: "fa fa-sign-in-alt",
                title: "Merge Business Records",
                tooltip: "Merge Business Records"
              });
            }
            if (isCommunicateVisible.value) {
              actions.push({
                handler: onCommunicate,
                iconCssClass: "fa fa-comment",
                title: "Communicate",
                tooltip: "Communicate"
              });
            }
            if ((_props$definition8 = props.definition) !== null && _props$definition8 !== void 0 && _props$definition8.customActions) {
              var _iterator = _createForOfIteratorHelper(props.definition.customActions),
                _step;
              try {
                var _loop = function _loop() {
                  var _action$description;
                  var action = _step.value;
                  if (!action.iconCssClass || !action.route) {
                    return "continue";
                  }
                  actions.push({
                    handler: () => {
                      var _action$route;
                      return onCustomRoute((_action$route = action.route) !== null && _action$route !== void 0 ? _action$route : "");
                    },
                    iconCssClass: action.iconCssClass,
                    title: action.name || "Custom Action",
                    tooltip: (_action$description = action.description) !== null && _action$description !== void 0 ? _action$description : undefined
                  });
                };
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _ret = _loop();
                  if (_ret === "continue") continue;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            if (props.customActions && props.customActions.length > 0) {
              actions.push(...props.customActions);
            }
            return actions;
          });
          var isStickyHeader = computed(() => {
            var _props$definition9;
            return props.stickyHeader || ((_props$definition9 = props.definition) === null || _props$definition9 === void 0 ? void 0 : _props$definition9.enableStickyHeader) === true;
          });
          var isSelectionEnabled = computed(() => {
            return !!props.onSelectItem;
          });
          function createGridState() {
            var _props$liveUpdates;
            var state = new GridState(columnDefinitions.value, props.definition, (_props$liveUpdates = props.liveUpdates) !== null && _props$liveUpdates !== void 0 ? _props$liveUpdates : false, props.itemTerm || "item", props.entityTypeGuid);
            state.setItemKey(props.keyField);
            return state;
          }
          function updateVisibleRows() {
            var startIndex = (currentPage.value - 1) * pageSize.value;
            visibleRows.value = gridState.sortedRows.slice(startIndex, startIndex + pageSize.value);
          }
          function updatePageCount() {
            pageCount.value = Math.ceil(gridState.filteredRows.length / pageSize.value);
          }
          function updateCountMessage() {
            if (loadingData.value) {
              countMessage.value = "0 ".concat(pluralize(gridState.itemTerm));
            } else if (gridState.filteredRows.length === gridState.rows.length) {
              countMessage.value = "".concat(asFormattedString(gridState.filteredRows.length), " ").concat(pluralize(gridState.itemTerm, gridState.filteredRows.length));
            } else {
              countMessage.value = "".concat(asFormattedString(gridState.filteredRows.length), " of ").concat(asFormattedString(gridState.rows.length), " ").concat(pluralize(gridState.itemTerm, gridState.rows.length));
            }
          }
          function autoFitExportColumns(worksheet, rowData) {
            var _iterator2 = _createForOfIteratorHelper(worksheet.columns),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _column$header;
                var column = _step2.value;
                if (!column.key) {
                  continue;
                }
                var maxLength = ((_column$header = column.header) !== null && _column$header !== void 0 ? _column$header : "").length + 3;
                var _iterator3 = _createForOfIteratorHelper(rowData),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var _row = _step3.value;
                    var value = _row[column.key];
                    if (typeof value === "string") {
                      maxLength = Math.max(maxLength, value.length + 1);
                    } else if (typeof value === "boolean") {
                      maxLength = Math.max(maxLength, 6);
                    } else if (value instanceof Date) {
                      maxLength = Math.max(maxLength, 11);
                    } else {
                      maxLength = Math.max(maxLength, String(value).length + 1);
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
                column.width = Math.min(80, Math.max(4, maxLength));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          function getExportWorkbook() {
            return _getExportWorkbook.apply(this, arguments);
          }
          function _getExportWorkbook() {
            _getExportWorkbook = _asyncToGenerator(function* () {
              var _entitySet$items;
              var mergeColumns = {};
              var dataColumns = gridState.columns.filter(c => !c.name.startsWith("__") && !c.excludeFromExport);
              var _iterator4 = _createForOfIteratorHelper(dataColumns),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var column = _step4.value;
                  mergeColumns[column.name] = "".concat(column.name[0].toUpperCase()).concat(column.name.substring(1));
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              var options = {
                mergeColumns,
                purpose: "export"
              };
              var entitySet = yield getEntitySetBag(gridState, [], options);
              var exceljs = yield module.import('@Obsidian/Libs/exceljs');
              var title = props.exportTitle || pluralize(gridState.itemTerm);
              var workbook = new exceljs.Workbook();
              workbook.created = new Date();
              workbook.modified = new Date();
              var worksheet = workbook.addWorksheet(title);
              var columns = [];
              var _loop3 = function* _loop3() {
                var _column$title;
                var key = _Object$keys[_i2];
                var column = gridState.columns.find(c => c.name === key);
                columns.push({
                  header: (_column$title = column === null || column === void 0 ? void 0 : column.title) !== null && _column$title !== void 0 ? _column$title : key,
                  key: key
                });
              };
              for (var _i2 = 0, _Object$keys = Object.keys(mergeColumns); _i2 < _Object$keys.length; _i2++) {
                yield* _loop3();
              }
              worksheet.columns = columns;
              var rowData = [];
              var _iterator5 = _createForOfIteratorHelper((_entitySet$items = entitySet.items) !== null && _entitySet$items !== void 0 ? _entitySet$items : []),
                _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var item = _step5.value;
                  var _row2 = {};
                  for (var _i3 = 0, _Object$keys2 = Object.keys(mergeColumns); _i3 < _Object$keys2.length; _i3++) {
                    var _item$additionalMerge;
                    var _key = _Object$keys2[_i3];
                    var value = (_item$additionalMerge = item.additionalMergeValues) === null || _item$additionalMerge === void 0 ? void 0 : _item$additionalMerge[mergeColumns[_key]];
                    if (value instanceof RockDateTime) {
                      value = new Date(Date.UTC(value.year, value.month - 1, value.day, value.hour, value.minute, value.second));
                    }
                    _row2[_key] = value;
                  }
                  rowData.push(_row2);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              worksheet.addRows(rowData);
              return {
                workbook,
                rowData
              };
            });
            return _getExportWorkbook.apply(this, arguments);
          }
          function downloadWorkbook(_x, _x2, _x3) {
            return _downloadWorkbook.apply(this, arguments);
          }
          function _downloadWorkbook() {
            _downloadWorkbook = _asyncToGenerator(function* (workbook, title, format) {
              var buffer = format === "xlsx" ? yield workbook.xlsx.writeBuffer() : yield workbook.csv.writeBuffer();
              var url = URL.createObjectURL(new Blob([buffer], {
                type: "application/octet-stream"
              }));
              var element = document.createElement("a");
              element.innerText = "Download";
              element.style.position = "absolute";
              element.style.top = "-100px";
              element.style.left = "0";
              element.href = url;
              element.download = "".concat(title.replace(/[^a-zA-Z0-9\-_]/g, ""), ".").concat(format);
              document.body.appendChild(element);
              element.click();
              document.body.removeChild(element);
              setTimeout(() => URL.revokeObjectURL(url), 100);
            });
            return _downloadWorkbook.apply(this, arguments);
          }
          function updateGridData() {
            return _updateGridData.apply(this, arguments);
          }
          function _updateGridData() {
            _updateGridData = _asyncToGenerator(function* () {
              loadingData.value = true;
              updateCountMessage();
              if (!props.data) {
                gridState.setDataRows([]);
              } else if (isPromise(props.data)) {
                try {
                  var _data$rows;
                  var data = yield props.data;
                  gridState.setDataRows((_data$rows = data.rows) !== null && _data$rows !== void 0 ? _data$rows : []);
                  gridErrorMessage.value = "";
                } catch (error) {
                  gridErrorMessage.value = error instanceof Error ? error.message : new String(error).toString();
                }
              } else {
                var _props$data$rows;
                gridState.setDataRows((_props$data$rows = props.data.rows) !== null && _props$data$rows !== void 0 ? _props$data$rows : []);
                gridErrorMessage.value = "";
              }
              if (!gridErrorMessage.value) {
                setupManualOrdering();
              }
              loadingData.value = false;
              updateCountMessage();
            });
            return _updateGridData.apply(this, arguments);
          }
          function setupManualOrdering() {
            var reorderColumn = columnDefinitions.value.find(c => c.name === "__reorder");
            if (!reorderColumn) {
              dragOptions.value = undefined;
              return;
            }
            if (!props.keyField) {
              throw new Error("Re-ordering rows requires each row has a unique key.");
            }
            var dropOperationInProgress = ref(false);
            reorderColumn.data.dropOperationInProgress = dropOperationInProgress;
            dragOptions.value = useDragReorder(visibleRows, function () {
              var _ref2 = _asyncToGenerator(function* (item, beforeItem) {
                if (typeof reorderColumn.props.onOrderChanged !== "function") {
                  return true;
                }
                var fn = reorderColumn.props.onOrderChanged;
                dropOperationInProgress.value = true;
                try {
                  var result = fn(item, beforeItem);
                  if (isPromise(result)) {
                    result = yield result;
                  }
                  return result !== false;
                } finally {
                  dropOperationInProgress.value = false;
                }
              });
              return function (_x4, _x5) {
                return _ref2.apply(this, arguments);
              };
            }());
          }
          function createCommunicationAndRedirect(_x6, _x7) {
            return _createCommunicationAndRedirect.apply(this, arguments);
          }
          function _createCommunicationAndRedirect() {
            _createCommunicationAndRedirect = _asyncToGenerator(function* (communicationBag, url) {
              var args = {
                communication: communicationBag
              };
              var result = yield invokeBlockAction("CreateGridCommunication", args);
              if (!result.isSuccess || !result.data) {
                return yield alert(result.errorMessage || "Unable to create communication.");
              }
              var finalUrl = makeUrlRedirectSafe(url.replace("{CommunicationId}", "".concat(result.data)));
              window.location.href = finalUrl;
            });
            return _createCommunicationAndRedirect.apply(this, arguments);
          }
          function createEntitySetAndRedirect(_x8, _x9, _x10) {
            return _createEntitySetAndRedirect.apply(this, arguments);
          }
          function _createEntitySetAndRedirect() {
            _createEntitySetAndRedirect = _asyncToGenerator(function* (keyFields, url, options) {
              var args = {
                entitySet: yield getEntitySetBag(gridState, keyFields, options)
              };
              var result = yield invokeBlockAction("CreateGridEntitySet", args);
              if (!result.isSuccess || !result.data) {
                return yield alert(result.errorMessage || "Unable to create entity set.");
              }
              var finalUrl = makeUrlRedirectSafe(url.replace("{EntitySetId}", "".concat(result.data)));
              window.location.href = finalUrl;
            });
            return _createEntitySetAndRedirect.apply(this, arguments);
          }
          function deleteRow(keyOrIndex) {
            gridState.deleteRow(keyOrIndex);
          }
          function rowUpdated(keyOrIndex) {
            gridState.rowUpdated(keyOrIndex);
          }
          function rowsUpdated(keysOrIndexes) {
            gridState.rowsUpdated(keysOrIndexes);
          }
          function getPrefixedPreferences() {
            var prefix = !props.preferencePrefix ? "grid-" : "grid-".concat(props.preferencePrefix, "-");
            return rootPreferences.withPrefix(prefix);
          }
          function setFilterFromPreferences() {
            var filterValues = gridPreferences.getValue(PreferenceKey.ColumnFilterValues);
            if (filterValues) {
              try {
                var value = JSON.parse(filterValues);
                if (typeof value === "object") {
                  var keys = Object.keys(value);
                  var _loop2 = function _loop2() {
                    var key = _keys[_i];
                    if (!gridState.columns.some(c => c.name === key)) {
                      delete value[key];
                    }
                  };
                  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
                    _loop2();
                  }
                  columnFilterValues.value = value;
                }
              } catch (_unused) {}
            }
          }
          function setSortFromPreferences() {
            var sortDirection = gridPreferences.getValue(PreferenceKey.SortDirection);
            if (sortDirection) {
              try {
                var value = JSON.parse(sortDirection);
                if (typeof value === "object") {
                  columnSortDirection.value = value;
                }
              } catch (_unused2) {}
            }
          }
          function saveFilterPreferences() {
            if (props.disablePreferences) {
              return;
            }
            var hasValues = Object.values(columnFilterValues.value).some(v => v !== undefined);
            if (hasValues) {
              gridPreferences.setValue(PreferenceKey.ColumnFilterValues, JSON.stringify(columnFilterValues.value));
            } else {
              gridPreferences.setValue(PreferenceKey.ColumnFilterValues, "");
            }
            savePreferences();
          }
          function saveSortPreferences() {
            if (props.disablePreferences) {
              return;
            }
            if (columnSortDirection.value) {
              gridPreferences.setValue(PreferenceKey.SortDirection, JSON.stringify(columnSortDirection.value));
            } else {
              gridPreferences.setValue(PreferenceKey.SortDirection, "");
            }
            savePreferences();
          }
          function savePreferences() {
            return _savePreferences.apply(this, arguments);
          }
          function _savePreferences() {
            _savePreferences = _asyncToGenerator(function* () {
              preferencesAreDirty = true;
              if (preferencesAreSaving) {
                return;
              }
              preferencesAreSaving = true;
              preferencesAreDirty = false;
              try {
                yield gridPreferences.save();
              } finally {
                preferencesAreSaving = false;
              }
              if (preferencesAreDirty) {
                window.setTimeout(() => savePreferences(), 0);
              }
            });
            return _savePreferences.apply(this, arguments);
          }
          function onBulkUpdate() {
            return _onBulkUpdate.apply(this, arguments);
          }
          function _onBulkUpdate() {
            _onBulkUpdate = _asyncToGenerator(function* () {
              var _props$definition10, _props$definition10$a;
              var url = (_props$definition10 = props.definition) === null || _props$definition10 === void 0 ? void 0 : (_props$definition10$a = _props$definition10.actionUrls) === null || _props$definition10$a === void 0 ? void 0 : _props$definition10$a[GridActionUrlKey.BulkUpdate];
              if (!props.personKeyField || !url) {
                return;
              }
              var options = {
                entityTypeGuid: EntityType.Person
              };
              yield createEntitySetAndRedirect([props.personKeyField], url, options);
            });
            return _onBulkUpdate.apply(this, arguments);
          }
          function onPersonMerge() {
            return _onPersonMerge.apply(this, arguments);
          }
          function _onPersonMerge() {
            _onPersonMerge = _asyncToGenerator(function* () {
              var url;
              if (props.personAsBusiness) {
                var _props$definition11, _props$definition11$a;
                url = (_props$definition11 = props.definition) === null || _props$definition11 === void 0 ? void 0 : (_props$definition11$a = _props$definition11.actionUrls) === null || _props$definition11$a === void 0 ? void 0 : _props$definition11$a[GridActionUrlKey.MergeBusiness];
              } else {
                var _props$definition12, _props$definition12$a;
                url = (_props$definition12 = props.definition) === null || _props$definition12 === void 0 ? void 0 : (_props$definition12$a = _props$definition12.actionUrls) === null || _props$definition12$a === void 0 ? void 0 : _props$definition12$a[GridActionUrlKey.MergePerson];
              }
              if (!props.personKeyField || !url) {
                return;
              }
              yield createEntitySetAndRedirect([props.personKeyField], url, undefined);
            });
            return _onPersonMerge.apply(this, arguments);
          }
          function onMergeTemplate() {
            return _onMergeTemplate.apply(this, arguments);
          }
          function _onMergeTemplate() {
            _onMergeTemplate = _asyncToGenerator(function* () {
              var _props$definition13, _props$definition13$a;
              var url = (_props$definition13 = props.definition) === null || _props$definition13 === void 0 ? void 0 : (_props$definition13$a = _props$definition13.actionUrls) === null || _props$definition13$a === void 0 ? void 0 : _props$definition13$a[GridActionUrlKey.MergeTemplate];
              if (!props.keyField || !url) {
                return;
              }
              if (props.mergeTemplateAsPerson && props.personKeyField) {
                yield createEntitySetAndRedirect([props.personKeyField], url, undefined);
              } else if (props.entityTypeGuid) {
                yield createEntitySetAndRedirect([props.keyField], url, undefined);
              } else {
                var mergeColumns = {};
                var dataColumns = gridState.columns.filter(c => !c.name.startsWith("__"));
                var _iterator6 = _createForOfIteratorHelper(dataColumns),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var column = _step6.value;
                    mergeColumns[column.name] = "".concat(column.name[0].toUpperCase()).concat(column.name.substring(1));
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
                var options = {
                  mergeColumns
                };
                yield createEntitySetAndRedirect([props.keyField], url, options);
              }
            });
            return _onMergeTemplate.apply(this, arguments);
          }
          function onExportToExcel() {
            return _onExportToExcel.apply(this, arguments);
          }
          function _onExportToExcel() {
            _onExportToExcel = _asyncToGenerator(function* () {
              var _worksheet$getRows;
              var _yield$getExportWorkb = yield getExportWorkbook(),
                workbook = _yield$getExportWorkb.workbook,
                rowData = _yield$getExportWorkb.rowData;
              var worksheet = workbook.getWorksheet(1);
              var title = props.exportTitle || pluralize(gridState.itemTerm);
              worksheet.views = [{
                state: "frozen",
                ySplit: 3
              }];
              autoFitExportColumns(worksheet, rowData);
              worksheet.insertRows(1, [{}, {}]);
              worksheet.getCell(1, 1).value = title;
              worksheet.getCell(2, 1).value = "Exported on ".concat(RockDateTime.now().toASPString("G"));
              worksheet.getCell(1, 1).font = {
                size: 18
              };
              (_worksheet$getRows = worksheet.getRows(1, 3)) === null || _worksheet$getRows === void 0 ? void 0 : _worksheet$getRows.forEach(row => {
                row.eachCell(cell => {
                  var _cell$font;
                  cell.fill = {
                    type: "pattern",
                    pattern: "solid",
                    fgColor: {
                      argb: "ffdedede"
                    }
                  };
                  cell.font = (_cell$font = cell.font) !== null && _cell$font !== void 0 ? _cell$font : {};
                  cell.font.bold = true;
                });
              });
              worksheet.mergeCells(1, 1, 1, worksheet.columns.length);
              worksheet.mergeCells(2, 1, 2, worksheet.columns.length);
              worksheet.autoFilter = {
                from: {
                  row: 3,
                  column: 1
                },
                to: {
                  row: rowData.length + 3,
                  column: worksheet.columns.length
                }
              };
              yield downloadWorkbook(workbook, title, "xlsx");
            });
            return _onExportToExcel.apply(this, arguments);
          }
          function onExportToCsv() {
            return _onExportToCsv.apply(this, arguments);
          }
          function _onExportToCsv() {
            _onExportToCsv = _asyncToGenerator(function* () {
              var _yield$getExportWorkb2 = yield getExportWorkbook(),
                workbook = _yield$getExportWorkb2.workbook;
              var title = props.exportTitle || pluralize(gridState.itemTerm);
              yield downloadWorkbook(workbook, title, "csv");
            });
            return _onExportToCsv.apply(this, arguments);
          }
          function onLaunchWorkflow() {
            return _onLaunchWorkflow.apply(this, arguments);
          }
          function _onLaunchWorkflow() {
            _onLaunchWorkflow = _asyncToGenerator(function* () {
              var _props$definition14, _props$definition14$a;
              var url = (_props$definition14 = props.definition) === null || _props$definition14 === void 0 ? void 0 : (_props$definition14$a = _props$definition14.actionUrls) === null || _props$definition14$a === void 0 ? void 0 : _props$definition14$a[GridActionUrlKey.LaunchWorkflow];
              if (!props.keyField || !url) {
                return;
              }
              yield createEntitySetAndRedirect([props.keyField], url, undefined);
            });
            return _onLaunchWorkflow.apply(this, arguments);
          }
          function onCommunicate() {
            return _onCommunicate.apply(this, arguments);
          }
          function _onCommunicate() {
            _onCommunicate = _asyncToGenerator(function* () {
              var _props$definition15, _props$definition15$a;
              var url = (_props$definition15 = props.definition) === null || _props$definition15 === void 0 ? void 0 : (_props$definition15$a = _props$definition15.actionUrls) === null || _props$definition15$a === void 0 ? void 0 : _props$definition15$a[GridActionUrlKey.Communicate];
              var keyFields = [];
              if (props.communicationRecipientPersonKeyFields) {
                keyFields = props.communicationRecipientPersonKeyFields;
              } else if (props.personKeyField) {
                keyFields = [props.personKeyField];
              }
              if (keyFields.length === 0 || !url) {
                return;
              }
              var options = {
                additionalMergeFieldsFactory: undefined,
                purpose: "communication"
              };
              options.mergeColumns = {};
              options.mergeFields = {};
              var mergeFields = [];
              if (props.communicationMergeFields) {
                var _iterator7 = _createForOfIteratorHelper(props.communicationMergeFields),
                  _step7;
                try {
                  var _loop4 = function* _loop4() {
                    var mf = _step7.value;
                    var parts = mf.split("|").map(f => f.replace(/\./g, "_")).filter(f => f !== "");
                    if (gridState.columns.some(c => c.name === parts[0])) {
                      options.mergeColumns[parts[0]] = parts.length >= 2 ? parts[1] : parts[0];
                    } else {
                      options.mergeFields[parts[0]] = parts.length >= 2 ? parts[1] : parts[0];
                    }
                    mergeFields.push(parts.length >= 2 ? parts[1] : parts[0]);
                  };
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    yield* _loop4();
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }
              var entitySet = yield getEntitySetBag(gridState, keyFields, options);
              var communicationBag = {
                recipients: entitySet.items,
                fromUrl: window.location.href
              };
              if (props.communicationRecipientPersonKeyFields) {
                communicationBag.mergeFields = ["AdditionalMergeFields|".concat(mergeFields.join("^"))];
              } else {
                communicationBag.mergeFields = mergeFields;
              }
              yield createCommunicationAndRedirect(communicationBag, url);
            });
            return _onCommunicate.apply(this, arguments);
          }
          function onCustomRoute(_x11) {
            return _onCustomRoute.apply(this, arguments);
          }
          function _onCustomRoute() {
            _onCustomRoute = _asyncToGenerator(function* (url) {
              if (!props.keyField || !url) {
                return;
              }
              var options = {
                entityTypeGuid: props.entityTypeGuid
              };
              var fixedUrl;
              if (url.includes("{0}")) {
                fixedUrl = url.replace(/\{0\}/g, "{EntitySetId}");
              } else {
                fixedUrl = url.includes("?") ? "".concat(url, "&EntitySetId={EntitySetId}") : "".concat(url, "?EntitySetId={EntitySetId}");
              }
              yield createEntitySetAndRedirect([props.keyField], fixedUrl, options);
            });
            return _onCustomRoute.apply(this, arguments);
          }
          function onSortedRowsChanged() {
            updateVisibleRows();
            updatePageCount();
            updateCountMessage();
          }
          function onRowClick(_x12) {
            return _onRowClick.apply(this, arguments);
          }
          function _onRowClick() {
            _onRowClick = _asyncToGenerator(function* (key) {
              if (!props.onSelectItem || isRowSelectionInProgress.value) {
                return;
              }
              isRowSelectionInProgress.value = true;
              try {
                var returnValue = props.onSelectItem(key);
                if (isPromise(returnValue)) {
                  yield returnValue;
                }
              } finally {
                isRowSelectionInProgress.value = false;
              }
            });
            return _onRowClick.apply(this, arguments);
          }
          var gridState = createGridState();
          if (!props.disablePreferences) {
            setFilterFromPreferences();
            setSortFromPreferences();
          }
          gridState.setFilters(quickFilterValue.value, columnFilterValues.value);
          gridState.setSort(columnSortDirection.value);
          visibleColumnDefinitions.value = gridState.visibleColumns;
          watch(quickFilterValue, () => {
            currentPage.value = 1;
            gridState.setFilters(quickFilterValue.value, columnFilterValues.value);
          });
          watch(columnFilterValues, () => {
            currentPage.value = 1;
            gridState.setFilters(quickFilterValue.value, columnFilterValues.value);
            saveFilterPreferences();
          });
          watch(columnSortDirection, () => {
            gridState.setSort(columnSortDirection.value);
            saveSortPreferences();
          });
          watch([currentPage, pageSize], () => {
            updateVisibleRows();
          });
          watch(() => props.keyField, () => {
            gridState.setItemKey(props.keyField);
          });
          watch(() => props.data, () => {
            updateGridData();
          });
          watch(columnDefinitions, () => {
            gridState.setColumns(columnDefinitions.value);
          });
          gridState.on("sortedRowsChanged", onSortedRowsChanged);
          gridState.on("visibleColumnsChanged", () => visibleColumnDefinitions.value = gridState.visibleColumns);
          gridState.on("filteredRowsChanged", () => emit("filteredRowsChanged", gridState));
          gridState.on("selectedKeysChanged", () => emit("selectedKeysChanged", gridState));
          onUnmounted(() => {
            gridState.off("sortedRowsChanged", onSortedRowsChanged);
            gridState.dispose();
          });
          updateGridData();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["grid-obsidian", {
                'grid-sticky': unref(isStickyHeader),
                'grid-light': __props.light,
                'grid-bordered': !__props.light,
                'grid-striped': !__props.light,
                'grid-hover': !__props.light
              }])
            }, [createElementVNode("div", _hoisted_1$j, [!__props.light ? (openBlock(), createBlock(unref(script$x), {
              key: 0,
              quickFilterValue: quickFilterValue.value,
              "onUpdate:quickFilterValue": _cache[0] || (_cache[0] = $event => quickFilterValue.value = $event),
              grid: unref(gridState),
              gridActions: unref(gridActions),
              visibleColumnCount: unref(visibleColumnCount),
              countMessage: countMessage.value,
              isCountMessageVisible: __props.isCountMessageVisible,
              isSearchVisible: __props.isSearchVisible
            }, null, 8, ["quickFilterValue", "grid", "gridActions", "visibleColumnCount", "countMessage", "isCountMessageVisible", "isSearchVisible"])) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "gridHeaderPrepend"), createVNode(unref(script$F), {
              columns: unref(visibleColumnDefinitions),
              columnFilters: columnFilterValues.value,
              "onUpdate:columnFilters": _cache[1] || (_cache[1] = $event => columnFilterValues.value = $event),
              columnSort: columnSortDirection.value,
              "onUpdate:columnSort": _cache[2] || (_cache[2] = $event => columnSortDirection.value = $event),
              grid: unref(gridState),
              light: __props.light
            }, null, 8, ["columns", "columnFilters", "columnSort", "grid", "light"]), renderSlot(_ctx.$slots, "gridHeaderAppend")]), loadingData.value ? (openBlock(), createElementBlock("div", _hoisted_2$9, [createVNode(unref(script$H), {
              columns: unref(visibleColumnDefinitions),
              grid: unref(gridState),
              count: unref(skeletonRowCount)
            }, null, 8, ["columns", "grid", "count"])])) : gridErrorMessage.value ? (openBlock(), createElementBlock("div", _hoisted_3$7, [createVNode(unref(NotificationBox), {
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(gridErrorMessage.value), 1)]),
              _: 1
            })])) : dragOptions.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_4$4, [createVNode(unref(script$C), {
              columns: unref(visibleColumnDefinitions),
              rows: visibleRows.value,
              grid: unref(gridState),
              tooltipField: __props.tooltipField,
              isSelectable: unref(isSelectionEnabled),
              markInactiveRows: __props.markInactiveRows,
              rowClass: __props.rowClass,
              onClick: onRowClick
            }, null, 8, ["columns", "rows", "grid", "tooltipField", "isSelectable", "markInactiveRows", "rowClass"])])), [[unref(DragSource), dragOptions.value], [unref(DragTarget), dragOptions.value]]) : !__props.keyField || __props.light ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(script$C), {
              columns: unref(visibleColumnDefinitions),
              rows: visibleRows.value,
              grid: unref(gridState),
              tooltipField: __props.tooltipField,
              isSelectable: unref(isSelectionEnabled),
              markInactiveRows: __props.markInactiveRows,
              rowClass: __props.rowClass,
              onClick: onRowClick
            }, null, 8, ["columns", "rows", "grid", "tooltipField", "isSelectable", "markInactiveRows", "rowClass"])])) : (openBlock(), createBlock(unref(script$s), {
              key: 4,
              columns: unref(visibleColumnDefinitions),
              rows: visibleRows.value,
              grid: unref(gridState),
              tooltipField: __props.tooltipField,
              isSelectable: unref(isSelectionEnabled),
              markInactiveRows: __props.markInactiveRows,
              rowClass: __props.rowClass,
              onClick: onRowClick
            }, null, 8, ["columns", "rows", "grid", "tooltipField", "isSelectable", "markInactiveRows", "rowClass"])), createElementVNode("div", _hoisted_6, [renderSlot(_ctx.$slots, "gridFooterPrepend"), !__props.light ? (openBlock(), createBlock(unref(script$t), {
              key: 0,
              pageSize: pageSize.value,
              "onUpdate:pageSize": _cache[3] || (_cache[3] = $event => pageSize.value = $event),
              currentPage: currentPage.value,
              "onUpdate:currentPage": _cache[4] || (_cache[4] = $event => currentPage.value = $event),
              pageCount: pageCount.value,
              pageSizes: pageSizes,
              visibleColumnCount: unref(visibleColumnCount)
            }, null, 8, ["pageSize", "currentPage", "pageCount", "visibleColumnCount"])) : (openBlock(), createBlock(unref(script$w), {
              key: 1,
              grid: unref(gridState),
              gridActions: unref(gridActions)
            }, null, 8, ["grid", "gridActions"])), renderSlot(_ctx.$slots, "gridFooterAppend")])], 2);
          };
        }
      }));

      var css_248z = ".grid-obsidian{--table-cell-padding-x:16px;--table-cell-padding-y:16px;color:var(--theme-darkest)}.grid-obsidian.grid-bordered{border:1px solid var(--theme-light);border-radius:4px;box-shadow:0 0 1px 0 rgba(0,0,0,.03),0 1px 3px 0 rgba(0,0,0,.08)}.grid-heading{background:var(--theme-white);border-radius:4px 4px 0 0}.grid-obsidian.grid-sticky>.grid-heading{position:sticky;top:var(--sticky-element-offset);z-index:10}.grid-obsidian>.grid-heading>.grid-title-heading{align-items:center;border-bottom:1px solid var(--theme-light);display:flex;flex-wrap:wrap;font-size:18px}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-title{flex-grow:1;font-size:22px;font-weight:500;line-height:1;padding-left:24px}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-badges{align-items:center;display:flex;height:56px}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-actions{background-color:initial;text-align:initial}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-actions .btn-grid-action{border-radius:0;height:56px;margin:0;width:56px}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-actions .btn-grid-action.active{background-color:var(--theme-light);color:var(--theme-medium)}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-actions .btn-grid-action.btn-add{color:var(--color-info);font-size:115%}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-actions .btn-grid-action.btn-add:hover{color:var(--color-info)}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-actions .btn-grid-action:hover{background-color:var(--theme-light)}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-quick-filter{display:flex}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-quick-filter>.grid-quick-filter-search{align-items:stretch;display:inline-flex;overflow:hidden;transition:width .3s ease;width:0}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-quick-filter.active>.grid-quick-filter-search{width:240px}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-quick-filter.active>.btn-grid-action{background-color:var(--theme-light);color:var(--theme-medium)}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-quick-filter>.grid-quick-filter-search>.control-wrapper{height:100%;width:100%}.grid-quick-filter-search>.control-wrapper>div{align-items:center;display:flex;height:100%;padding:0;width:100%}.grid-obsidian>.grid-heading>.grid-title-heading>.grid-quick-filter>.grid-quick-filter-search>.control-wrapper .form-control{border-radius:0;height:100%;width:100%}.grid-column-heading{border-bottom:1px solid var(--theme-light);color:var(--theme-dark);display:flex;font-weight:500}.grid-column-header{align-items:center;display:flex;font-size:14px;padding:var(--table-cell-padding-y) var(--table-cell-padding-x);position:relative}.grid-bordered .grid-column-header{background-color:var(--theme-lightest)}.grid-column-header.sortable{cursor:pointer}.grid-column-header.sortable:hover{background-color:var(--theme-light)}.grid-column-title{flex:1 1 auto}.grid-sort-direction{accent-color:var(--color-info);align-items:center;display:flex;transition:transform .11s cubic-bezier(.2,0,.38,.9)}.grid-sort-direction svg{height:21px;width:14px}.grid-sort-direction.sort-desc{transform:rotate(180deg);transform-origin:center}.grid-column-header.grid-select-field .checkbox label{margin:0}.grid-column-header>.btn-grid-column-filter{background-color:transparent;border:0;border-radius:4px;color:var(--theme-medium);height:24px;margin-left:4px;opacity:0;text-align:center;transition:opacity .25s,color .25s;width:26px;z-index:10}.grid-column-heading:hover .btn-grid-column-filter{opacity:.5}.grid-column-header>.btn-grid-column-filter:hover{background-color:var(--theme-white);opacity:1}.grid-column-header>.btn-grid-column-filter svg{height:14px;width:14px}.grid-column-header>.btn-grid-column-filter.active{color:var(--color-info);opacity:1}.grid-column-header>.grid-filter-popup{background-color:var(--theme-white);border:1px solid var(--theme-light);border-radius:0;border-bottom-left-radius:6px;border-bottom-right-radius:6px;bottom:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.1);cursor:auto;display:flex;flex-direction:column;font-weight:400;margin-top:6px;max-height:400px;max-width:320px;min-width:240px;position:absolute;transform:translateY(100%);z-index:10}.grid-column-header>.grid-filter-popup>.grid-filter-popup-content{flex-grow:1;overflow-y:auto}.grid-column-header>.grid-filter-popup>.grid-filter-popup-content>.grid-filter-popup-body{margin:10px;overflow-x:clip;padding:2px}.grid-column-header>.grid-filter-popup>.actions{background-color:#fcfcfc;border-top:1px solid var(--theme-light);display:flex;gap:8px;padding:8px}.grid-row{background-color:#fff;border-bottom:1px solid var(--theme-light);display:flex;transition:background-color 70ms cubic-bezier(0,0,.38,.9)}.grid-row.grid-row-selectable{cursor:pointer}.grid-striped .grid-row.grid-row-even{background-color:var(--theme-lightest)}.grid-hover .grid-row:hover{background-color:#eef4fc}.grid-cell{align-items:flex-start;display:flex;overflow-x:hidden;padding:var(--table-cell-padding-y) var(--table-cell-padding-x)}.grid-select-field:first-child{align-items:center;flex:0 0 calc(var(--table-cell-padding-x) + 20px)!important;padding-right:calc(var(--table-cell-padding-x)/2)}.grid-columncommand{--table-cell-padding-y:0;align-items:center;padding:0}.grid-columncommand .btn{opacity:.4}.grid-columncommand .btn:hover{opacity:1}.grid-columnreorder{align-items:center}.grid-footing{background-color:var(--theme-white);border-radius:0 0 4px 4px;color:var(--theme-darkest);overflow:hidden}.grid-paging-footer{align-items:center;display:flex;padding:8px var(--table-cell-padding-x)}.grid-obsidian>.grid-footing>.grid-paging-footer>.grid-page-sizes{align-items:center;display:flex;flex:1 1 auto;font-size:14px;gap:8px;justify-content:start;line-height:16px}.grid-obsidian>.grid-footing>.grid-paging-footer>.grid-page-sizes .form-control{flex:0 0 80px}.grid-page-size-picker .btn{font-weight:400}.grid-obsidian>.grid-footing>.grid-paging-footer>.grid-page-picker{align-items:stretch;color:var(--theme-darker);display:inline-flex;justify-content:center;line-height:1}.grid-obsidian>.grid-footing>.grid-paging-footer>.grid-page-picker>button{background-color:transparent;border:1px solid var(--theme-light);display:inline-flex;font-size:14px;justify-content:center;line-height:16px;min-width:2.75em;padding:8px 12px}.grid-obsidian>.grid-footing>.grid-paging-footer>.grid-page-picker>button:hover{background-color:var(--theme-lightest)}.grid-obsidian>.grid-footing>.grid-paging-footer>.grid-page-picker>button~button{margin-left:-1px}.grid-obsidian>.grid-footing>.grid-paging-footer>.grid-page-picker .prev{border-radius:4px 0 0 4px}.grid-obsidian>.grid-footing>.grid-paging-footer>.grid-page-picker .next{border-radius:0 4px 4px 0}.grid-obsidian>.grid-footing>.grid-paging-footer>.grid-page-picker>button.disabled{color:var(--theme-medium);pointer-events:none}.grid-obsidian>.grid-footing>.grid-paging-footer>.grid-page-picker>button.active{background-color:var(--theme-light)}@media (max-width:767px){.grid-obsidian>.grid-footing>.grid-paging-footer>.grid-page-picker>.page-num{display:none}}";
      styleInject(css_248z);

      script$r.__file = "Framework/Controls/Grid/grid.partial.obs";

      var _hoisted_1$i = {
        class: "grid-filter-popup-body"
      };
      var _hoisted_2$8 = {
        class: "checkbox"
      };
      var _hoisted_3$6 = ["checked", "onChange"];
      var _hoisted_4$3 = {
        class: "label-text"
      };
      var script$q = exports('PickExistingFilter', defineComponent({
        name: 'pickExistingFilter.partial',
        props: standardFilterProps,
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var distinctValues = getDistinctValues();
          var searchMethod = ref(PickExistingFilterMethod.Any.toString());
          var searchValue = ref("");
          var searchTypeItems = Object.keys(PickExistingFilterMethodDescription).map(n => {
            return {
              value: n,
              text: PickExistingFilterMethodDescription[n]
            };
          });
          var displayedValues = computed(() => {
            var values = distinctValues;
            if (searchValue.value) {
              var lowerSearchValue = searchValue.value.toLowerCase();
              values = values.filter(v => v.quickFilterValue.includes(lowerSearchValue));
            }
            return values.slice(0, 50);
          });
          function getDistinctValues() {
            var valueRows = new Map();
            var field = props.column.field;
            var rows = props.grid.rows;
            if (!field) {
              return [];
            }
            for (var i = 0; i < rows.length; i++) {
              var _props$column$quickFi, _props$column$sortVal, _props$column$sortVal2, _props$column;
              var quickFilterValue = (_props$column$quickFi = props.column.quickFilterValue(rows[i], props.column, props.grid)) !== null && _props$column$quickFi !== void 0 ? _props$column$quickFi : "";
              var filterValue = props.column.filterValue(rows[i], props.column, props.grid);
              if (filterValue === undefined || valueRows.has(filterValue)) {
                continue;
              }
              valueRows.set(filterValue, {
                row: rows[i],
                selected: false,
                sortValue: (_props$column$sortVal = (_props$column$sortVal2 = (_props$column = props.column).sortValue) === null || _props$column$sortVal2 === void 0 ? void 0 : _props$column$sortVal2.call(_props$column, rows[i], props.column, props.grid)) !== null && _props$column$sortVal !== void 0 ? _props$column$sortVal : "",
                quickFilterValue: quickFilterValue.toLowerCase(),
                filterValue
              });
            }
            return [...valueRows.values()].sort((a, b) => {
              if (a.sortValue === undefined && b.sortValue === undefined) {
                return 0;
              } else if (a.sortValue === undefined) {
                return -1;
              } else if (b.sortValue === undefined) {
                return 1;
              }
              if (a.sortValue < b.sortValue) {
                return -1;
              } else if (a.sortValue > b.sortValue) {
                return 1;
              } else {
                return 0;
              }
            });
          }
          function updateModelValue() {
            var values = distinctValues.filter(v => v.selected).map(v => v.filterValue);
            var searchBag = {
              method: Number(searchMethod.value),
              value: values
            };
            emit("update:modelValue", values.length > 0 ? searchBag : undefined);
          }
          function updateSearchValues() {
            if (props.modelValue && typeof props.modelValue === "object") {
              var modelSearchBag = props.modelValue;
              if (!Array.isArray(modelSearchBag.value) || !props.column.field) {
                var _iterator = _createForOfIteratorHelper(distinctValues),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _value = _step.value;
                    _value.selected = false;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                return;
              }
              if (modelSearchBag.method !== undefined) {
                searchMethod.value = modelSearchBag.method.toString();
                var _iterator2 = _createForOfIteratorHelper(distinctValues),
                  _step2;
                try {
                  var _loop = function _loop() {
                    var value = _step2.value;
                    value.selected = modelSearchBag.value.some(mv => deepEqual(mv, value.filterValue, true));
                  };
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    _loop();
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                return;
              }
            }
            searchMethod.value = PickExistingFilterMethod.Any.toString();
            var _iterator3 = _createForOfIteratorHelper(distinctValues),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _value2 = _step3.value;
                _value2.selected = false;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          function onSelected(value, event) {
            var selected = event.target.checked;
            if (value.selected !== selected) {
              value.selected = selected;
              updateModelValue();
            }
          }
          watch(() => props.modelValue, () => updateSearchValues());
          watch([searchMethod, searchValue], () => updateModelValue());
          updateSearchValues();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$i, [createVNode(unref(DropDownList), {
              modelValue: searchMethod.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => searchMethod.value = $event),
              inputClasses: "mb-2",
              showBlankItem: false,
              items: unref(searchTypeItems)
            }, null, 8, ["modelValue", "items"]), createVNode(unref(TextBox), {
              label: "Search",
              modelValue: searchValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => searchValue.value = $event)
            }, null, 8, ["modelValue"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(displayedValues), value => {
              return openBlock(), createElementBlock("div", _hoisted_2$8, [createElementVNode("label", null, [createElementVNode("input", {
                type: "checkbox",
                checked: value.selected,
                onChange: $event => onSelected(value, $event)
              }, null, 40, _hoisted_3$6), createElementVNode("span", _hoisted_4$3, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.column.condensedComponent), {
                row: value.row,
                column: _ctx.column
              }, null, 8, ["row", "column"]))])])]);
            }), 256))]);
          };
        }
      }));

      script$q.__file = "Framework/Controls/Grid/Filters/pickExistingFilter.partial.obs";

      var _hoisted_1$h = {
        class: "skeleton skeleton-text skeleton-rounded"
      };
      var script$p = defineComponent({
        name: 'textSkeletonCell.partial',
        props: standardSkeletonCellProps,
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$h);
          };
        }
      });

      script$p.__file = "Framework/Controls/Grid/Cells/textSkeletonCell.partial.obs";

      var attributeColumns_partial = exports('AttributeColumns', defineComponent({
        props: {
          attributes: {
            type: Array,
            default: []
          },
          __attributeColumns: {
            type: Boolean,
            default: true
          },
          filter: {
            type: Object,
            default: {
              component: script$q,
              matches: pickExistingFilterMatches
            }
          },
          skeletonComponent: {
            type: Object,
            default: script$p
          }
        }
      }));

      var _hoisted_1$g = {
        key: 0,
        class: "fa fa-check"
      };
      var script$o = exports('BooleanCell', defineComponent({
        name: 'booleanCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var isTrue = computed(() => {
            if (props.column.field) {
              return props.row[props.column.field] === true;
            } else {
              return false;
            }
          });
          return (_ctx, _cache) => {
            return unref(isTrue) ? (openBlock(), createElementBlock("i", _hoisted_1$g)) : createCommentVNode("v-if", true);
          };
        }
      }));

      script$o.__file = "Framework/Controls/Grid/Cells/booleanCell.partial.obs";

      function getExportValue$6(row, column) {
        if (!column.field) {
          return undefined;
        }
        return row[column.field] === true;
      }
      var booleanColumn_partial = exports('BooleanColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          formatComponent: {
            type: Object,
            default: script$o
          },
          exportValue: {
            type: Function,
            default: getExportValue$6
          }
        })
      }));

      var column_partial = exports('Column', defineComponent({
        props: _objectSpread2({}, standardColumnProps)
      }));

      var script$n = exports('CurrencyCell', defineComponent({
        name: 'currencyCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var formattedValue = computed(() => {
            var _toCurrencyOrNull;
            if (!props.column.field) {
              return "";
            }
            var value = props.row[props.column.field];
            if (typeof value !== "number") {
              return "";
            }
            return (_toCurrencyOrNull = toCurrencyOrNull(value)) !== null && _toCurrencyOrNull !== void 0 ? _toCurrencyOrNull : "";
          });
          return (_ctx, _cache) => {
            return toDisplayString(unref(formattedValue));
          };
        }
      }));

      script$n.__file = "Framework/Controls/Grid/Cells/currencyCell.partial.obs";

      var _hoisted_1$f = {
        style: {
          "max-width": "60px"
        },
        class: "skeleton skeleton-text skeleton-rounded skeleton-sm"
      };
      var script$m = defineComponent({
        name: 'currencySkeletonCell.partial',
        props: standardSkeletonCellProps,
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$f);
          };
        }
      });

      script$m.__file = "Framework/Controls/Grid/Cells/currencySkeletonCell.partial.obs";

      function getExportValue$5(row, column) {
        if (!column.field) {
          return undefined;
        }
        var value = row[column.field];
        if (typeof value !== "number") {
          return undefined;
        }
        return value;
      }
      var currencyColumn_partial = exports('CurrencyColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          formatComponent: {
            type: Object,
            default: script$n
          },
          skeletonComponent: {
            type: Object,
            default: script$m
          },
          exportValue: {
            type: Function,
            default: getExportValue$5
          }
        })
      }));

      var script$l = exports('DateCell', defineComponent({
        name: 'dateCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var formattedValue = computed(() => {
            if (props.column.field) {
              var _RockDateTime$parseIS, _RockDateTime$parseIS2;
              return (_RockDateTime$parseIS = (_RockDateTime$parseIS2 = RockDateTime.parseISO(props.row[props.column.field])) === null || _RockDateTime$parseIS2 === void 0 ? void 0 : _RockDateTime$parseIS2.toASPString("d")) !== null && _RockDateTime$parseIS !== void 0 ? _RockDateTime$parseIS : "";
            } else {
              return "";
            }
          });
          return (_ctx, _cache) => {
            return toDisplayString(unref(formattedValue));
          };
        }
      }));

      script$l.__file = "Framework/Controls/Grid/Cells/dateCell.partial.obs";

      var _hoisted_1$e = {
        style: {
          "max-width": "80px"
        },
        class: "skeleton skeleton-text skeleton-rounded skeleton-sm"
      };
      var script$k = defineComponent({
        name: 'dateSkeletonCell.partial',
        props: standardSkeletonCellProps,
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$e);
          };
        }
      });

      script$k.__file = "Framework/Controls/Grid/Cells/dateSkeletonCell.partial.obs";

      function getExportValue$4(row, column) {
        var _RockDateTime$parseIS;
        if (!column.field) {
          return undefined;
        }
        var value = row[column.field];
        if (typeof value !== "string") {
          return undefined;
        }
        return (_RockDateTime$parseIS = RockDateTime.parseISO(value)) !== null && _RockDateTime$parseIS !== void 0 ? _RockDateTime$parseIS : undefined;
      }
      function getQuickFilterValue$1(row, column) {
        var _RockDateTime$parseIS2;
        if (!column.field) {
          return undefined;
        }
        var value = row[column.field];
        if (typeof value !== "string") {
          return undefined;
        }
        return (_RockDateTime$parseIS2 = RockDateTime.parseISO(value)) === null || _RockDateTime$parseIS2 === void 0 ? void 0 : _RockDateTime$parseIS2.toASPString("d");
      }
      var dateColumn_partial = exports('DateColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          formatComponent: {
            type: Object,
            default: script$l
          },
          skeletonComponent: {
            type: Object,
            default: script$k
          },
          quickFilterValue: {
            type: Object,
            default: getQuickFilterValue$1
          },
          exportValue: {
            type: Function,
            default: getExportValue$4
          }
        })
      }));

      var script$j = exports('DateTimeCell', defineComponent({
        name: 'dateTimeCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var formattedValue = computed(() => {
            if (props.column.field) {
              var _RockDateTime$parseIS, _RockDateTime$parseIS2;
              return (_RockDateTime$parseIS = (_RockDateTime$parseIS2 = RockDateTime.parseISO(props.row[props.column.field])) === null || _RockDateTime$parseIS2 === void 0 ? void 0 : _RockDateTime$parseIS2.toASPString("g")) !== null && _RockDateTime$parseIS !== void 0 ? _RockDateTime$parseIS : "";
            } else {
              return "";
            }
          });
          return (_ctx, _cache) => {
            return toDisplayString(unref(formattedValue));
          };
        }
      }));

      script$j.__file = "Framework/Controls/Grid/Cells/dateTimeCell.partial.obs";

      var _hoisted_1$d = {
        style: {
          "max-width": "144px"
        },
        class: "skeleton skeleton-text skeleton-rounded skeleton-sm"
      };
      var script$i = defineComponent({
        name: 'dateTimeSkeletonCell.partial',
        props: standardSkeletonCellProps,
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$d);
          };
        }
      });

      script$i.__file = "Framework/Controls/Grid/Cells/dateTimeSkeletonCell.partial.obs";

      function getExportValue$3(row, column) {
        var _RockDateTime$parseIS;
        if (!column.field) {
          return undefined;
        }
        var value = row[column.field];
        if (typeof value !== "string") {
          return undefined;
        }
        return (_RockDateTime$parseIS = RockDateTime.parseISO(value)) !== null && _RockDateTime$parseIS !== void 0 ? _RockDateTime$parseIS : undefined;
      }
      function getQuickFilterValue(row, column) {
        var _RockDateTime$parseIS2;
        if (!column.field) {
          return undefined;
        }
        var value = row[column.field];
        if (typeof value !== "string") {
          return undefined;
        }
        return (_RockDateTime$parseIS2 = RockDateTime.parseISO(value)) === null || _RockDateTime$parseIS2 === void 0 ? void 0 : _RockDateTime$parseIS2.toASPString("g");
      }
      var dateTimeColumn_partial = exports('DateTimeColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          formatComponent: {
            type: Object,
            default: script$j
          },
          skeletonComponent: {
            type: Object,
            default: script$i
          },
          quickFilterValue: {
            type: Object,
            default: getQuickFilterValue
          },
          exportValue: {
            type: Function,
            default: getExportValue$3
          }
        })
      }));

      var _hoisted_1$c = ["disabled", "onClick"];
      var _hoisted_2$7 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_3$5 = [_hoisted_2$7];
      var script$h = exports('DeleteCell', defineComponent({
        name: 'deleteCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var isDeleting = ref(false);
          var isDisabled = computed(() => {
            if (isDeleting.value) {
              return true;
            }
            if (props.row["isSystem"] === true) {
              return true;
            }
            if (typeof props.column.props.rowDisabled === "function") {
              if (props.column.props.rowDisabled(props.row, props.grid)) {
                return true;
              }
            }
            return false;
          });
          function onClick(_x) {
            return _onClick.apply(this, arguments);
          }
          function _onClick() {
            _onClick = _asyncToGenerator(function* (event) {
              var key = props.grid.getRowKey(props.row);
              if (event.target instanceof HTMLElement) {
                event.target.blur();
              }
              if (!key || typeof props.column.props.onClick !== "function") {
                return;
              }
              isDeleting.value = true;
              try {
                if (props.column.props.disableConfirmation !== true) {
                  var _result = yield confirmDelete(props.grid.itemTerm);
                  if (!_result) {
                    return;
                  }
                }
                var result = props.column.props.onClick(key, props.grid);
                if (isPromise(result)) {
                  yield result;
                }
              } finally {
                isDeleting.value = false;
              }
            });
            return _onClick.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("button", {
              class: "btn btn-danger btn-sm",
              title: "Delete",
              disabled: unref(isDisabled),
              onClick: withModifiers(onClick, ["prevent"])
            }, _hoisted_3$5, 8, _hoisted_1$c);
          };
        }
      }));

      script$h.__file = "Framework/Controls/Grid/Cells/deleteCell.partial.obs";

      var deleteColumn_partial = exports('DeleteColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          name: {
            type: String,
            default: "__delete"
          },
          formatComponent: {
            type: Object,
            default: script$h
          },
          headerClass: {
            type: String,
            default: "grid-columncommand"
          },
          itemClass: {
            type: String,
            default: "grid-columncommand"
          },
          width: {
            type: String,
            default: "52px"
          },
          disableConfirmation: {
            type: Boolean,
            default: false
          },
          rowDisabled: {
            type: Function,
            required: false
          },
          onClick: {
            type: Function,
            required: false
          }
        })
      }));

      var _hoisted_1$b = ["disabled", "onClick"];
      var _hoisted_2$6 = createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1);
      var _hoisted_3$4 = [_hoisted_2$6];
      var script$g = exports('EditCell', defineComponent({
        name: 'editCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var isDisabled = ref(false);
          function onClick(_x) {
            return _onClick.apply(this, arguments);
          }
          function _onClick() {
            _onClick = _asyncToGenerator(function* (event) {
              var key = props.grid.getRowKey(props.row);
              if (event.target instanceof HTMLElement) {
                event.target.blur();
              }
              if (!key || typeof props.column.props.onClick !== "function") {
                return;
              }
              isDisabled.value = true;
              try {
                var result = props.column.props.onClick(key);
                if (isPromise(result)) {
                  yield result;
                }
              } finally {
                isDisabled.value = false;
              }
            });
            return _onClick.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("button", {
              class: "btn btn-default btn-sm",
              title: "Edit",
              disabled: isDisabled.value,
              onClick: withModifiers(onClick, ["prevent"])
            }, _hoisted_3$4, 8, _hoisted_1$b);
          };
        }
      }));

      script$g.__file = "Framework/Controls/Grid/Cells/editCell.partial.obs";

      var editColumn_partial = exports('EditColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          name: {
            type: String,
            default: "__edit"
          },
          formatComponent: {
            type: Object,
            default: script$g
          },
          headerClass: {
            type: String,
            default: "grid-columncommand"
          },
          itemClass: {
            type: String,
            default: "grid-columncommand"
          },
          width: {
            type: String,
            default: "52px"
          },
          onClick: {
            type: Function,
            required: false
          }
        })
      }));

      var script$f = exports('LabelCell', defineComponent({
        name: 'labelCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var text = computed(() => {
            if (!props.column.field) {
              return "";
            }
            var value = props.row[props.column.field];
            if (typeof value === "object") {
              if (value === null || value["text"] === null || value["text"] === undefined) {
                return "";
              }
              return "".concat(value.text);
            } else if (typeof value === "number" || typeof value === "string") {
              var textSource = props.column.props["textSource"];
              if (textSource && value in textSource) {
                return textSource[value];
              }
            }
            return "".concat(value);
          });
          var labelClass = computed(() => {
            var classSource = props.column.props["classSource"];
            if (classSource && text.value in classSource) {
              return "label label-".concat(classSource[text.value]);
            } else {
              return "label label-default";
            }
          });
          var labelStyle = computed(() => {
            var colorSource = props.column.props["colorSource"];
            if (props.column.field && props.row[props.column.field] && props.row[props.column.field].value) {
              var _value;
              var baseColor = (_value = props.row[props.column.field].value) !== null && _value !== void 0 ? _value : "gray";
              var pair = RockColor.calculateColorPair(new RockColor(baseColor));
              return {
                "backgroundColor": pair.backgroundColor.toRgba(),
                "color": pair.foregroundColor.toRgba()
              };
            } else if (colorSource && text.value in colorSource) {
              var _baseColor = colorSource[text.value];
              var _pair = RockColor.calculateColorPair(new RockColor(_baseColor));
              return {
                "backgroundColor": _pair.backgroundColor.toRgba(),
                "color": _pair.foregroundColor.toRgba()
              };
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("span", {
              class: normalizeClass(unref(labelClass)),
              style: normalizeStyle(unref(labelStyle))
            }, toDisplayString(unref(text)), 7);
          };
        }
      }));

      script$f.__file = "Framework/Controls/Grid/Cells/labelCell.partial.obs";

      var _hoisted_1$a = {
        style: {
          "max-width": "60px"
        },
        class: "skeleton skeleton-text skeleton-rounded skeleton-sm"
      };
      var script$e = defineComponent({
        name: 'labelSkeletonCell.partial',
        props: standardSkeletonCellProps,
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$a);
          };
        }
      });

      script$e.__file = "Framework/Controls/Grid/Cells/labelSkeletonCell.partial.obs";

      function getTextValue(row, column) {
        if (!column.field) {
          return undefined;
        }
        var value = row[column.field];
        if (typeof value === "object") {
          if (value === null || value["text"] === null || value["text"] === undefined) {
            return "";
          }
          return "".concat(value.text);
        } else if (typeof value === "number" || typeof value === "string") {
          var textSource = column.props["textSource"];
          if (textSource && value in textSource) {
            return textSource[value];
          }
        }
        return "".concat(value);
      }
      var labelColumn_partial = exports('LabelColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          formatComponent: {
            type: Object,
            default: script$f
          },
          skeletonComponent: {
            type: Object,
            default: script$e
          },
          quickFilterValue: {
            type: Object,
            default: getTextValue
          },
          filterValue: {
            type: Object,
            default: getTextValue
          },
          sortValue: {
            type: Function,
            default: getTextValue
          },
          exportValue: {
            type: Function,
            default: getTextValue
          },
          textSource: {
            type: Object,
            required: false
          },
          classSource: {
            type: Object,
            required: false
          },
          colorSource: {
            type: Object,
            required: false
          }
        })
      }));

      var script$d = exports('NumberBadgeCell', defineComponent({
        name: 'numberBadgeCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var minimumValue = -2147483648;
          var maximumValue = 2147483647;
          var numberValue = computed(() => {
            if (!props.column.field) {
              return undefined;
            }
            var value = props.row[props.column.field];
            if (typeof value !== "number") {
              return undefined;
            }
            return value;
          });
          var isHidden = computed(() => {
            var count = numberValue.value;
            if (count === undefined) {
              return true;
            }
            var ranges = getRanges();
            return count >= ranges.hideMinimum && count <= ranges.hideMaximum;
          });
          var badgeClasses = computed(() => {
            var classes = "badge";
            var count = numberValue.value;
            if (count === undefined) {
              return classes;
            }
            var ranges = getRanges();
            if (count >= ranges.dangerMinimum && count <= ranges.dangerMaximum) {
              classes += " badge-danger";
            } else if (count >= ranges.warningMinimum && count <= ranges.warningMaximum) {
              classes += " badge-warning";
            } else if (count >= ranges.successMinimum && count <= ranges.successMaximum) {
              classes += " badge-success";
            } else if (count >= ranges.infoMinimum && count <= ranges.infoMaximum) {
              classes += " badge-info";
            }
            return classes;
          });
          var formattedValue = computed(() => {
            if (numberValue.value === undefined) {
              return "";
            }
            return numberValue.value.toLocaleString();
          });
          function getRanges() {
            if (props.column.data["ranges"] !== undefined) {
              return props.column.data["ranges"];
            }
            var ranges = {
              hideMinimum: getMinimumValue("hide"),
              hideMaximum: getMaximumValue("hide"),
              infoMinimum: getMinimumValue("info"),
              infoMaximum: getMaximumValue("info"),
              successMinimum: getMinimumValue("success"),
              successMaximum: getMaximumValue("success"),
              warningMinimum: getMinimumValue("warning"),
              warningMaximum: getMaximumValue("warning"),
              dangerMinimum: getMinimumValue("danger"),
              dangerMaximum: getMaximumValue("danger")
            };
            props.column.data["ranges"] = ranges;
            return ranges;
          }
          function getMinimumValue(valueType) {
            var minValue = props.column.props["".concat(valueType, "Minimum")];
            var maxValue = props.column.props["".concat(valueType, "Maximum")];
            if (typeof minValue === "number") {
              return minValue;
            }
            return typeof maxValue === "number" ? minimumValue : maximumValue;
          }
          function getMaximumValue(valueType) {
            var minValue = props.column.props["".concat(valueType, "Minimum")];
            var maxValue = props.column.props["".concat(valueType, "Maximum")];
            if (typeof maxValue === "number") {
              return maxValue;
            }
            return typeof minValue === "number" ? maximumValue : minimumValue;
          }
          return (_ctx, _cache) => {
            return !unref(isHidden) ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(badgeClasses))
            }, toDisplayString(unref(formattedValue)), 3)) : createCommentVNode("v-if", true);
          };
        }
      }));

      script$d.__file = "Framework/Controls/Grid/Cells/numberBadgeCell.partial.obs";

      var _hoisted_1$9 = {
        style: {
          "max-width": "60px"
        },
        class: "skeleton skeleton-text skeleton-rounded skeleton-sm"
      };
      var script$c = defineComponent({
        name: 'numberBadgeSkeletonCell.partial',
        props: standardSkeletonCellProps,
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$9);
          };
        }
      });

      script$c.__file = "Framework/Controls/Grid/Cells/numberBadgeSkeletonCell.partial.obs";

      function getExportValue$2(row, column) {
        if (!column.field) {
          return undefined;
        }
        var value = row[column.field];
        if (typeof value !== "number") {
          return undefined;
        }
        return value;
      }
      var numberBadgeColumn_partial = exports('NumberBadgeColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          formatComponent: {
            type: Object,
            default: script$d
          },
          skeletonComponent: {
            type: Object,
            default: script$c
          },
          exportValue: {
            type: Function,
            default: getExportValue$2
          },
          hideMinimum: {
            type: Number,
            required: false
          },
          hideMaximum: {
            type: Number,
            required: false
          },
          infoMinimum: {
            type: Number,
            required: false
          },
          infoMaximum: {
            type: Number,
            required: false
          },
          successMinimum: {
            type: Number,
            required: false
          },
          successMaximum: {
            type: Number,
            required: false
          },
          warningMinimum: {
            type: Number,
            required: false
          },
          warningMaximum: {
            type: Number,
            required: false
          },
          dangerMinimum: {
            type: Number,
            required: false
          },
          dangerMaximum: {
            type: Number,
            required: false
          }
        })
      }));

      var script$b = exports('NumberCell', defineComponent({
        name: 'numberCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var formattedValue = computed(() => {
            if (!props.column.field) {
              return "";
            }
            var value = props.row[props.column.field];
            if (typeof value !== "number") {
              return "";
            }
            return value.toLocaleString();
          });
          return (_ctx, _cache) => {
            return toDisplayString(unref(formattedValue));
          };
        }
      }));

      script$b.__file = "Framework/Controls/Grid/Cells/numberCell.partial.obs";

      var _hoisted_1$8 = {
        style: {
          "max-width": "60px"
        },
        class: "skeleton skeleton-text skeleton-rounded skeleton-sm"
      };
      var script$a = defineComponent({
        name: 'numberSkeletonCell.partial',
        props: standardSkeletonCellProps,
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$8);
          };
        }
      });

      script$a.__file = "Framework/Controls/Grid/Cells/numberSkeletonCell.partial.obs";

      function getExportValue$1(row, column) {
        if (!column.field) {
          return undefined;
        }
        var value = row[column.field];
        if (typeof value !== "number") {
          return undefined;
        }
        return value;
      }
      var numberColumn_partial = exports('NumberColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          formatComponent: {
            type: Object,
            default: script$b
          },
          skeletonComponent: {
            type: Object,
            default: script$a
          },
          exportValue: {
            type: Function,
            default: getExportValue$1
          }
        })
      }));

      var _hoisted_1$7 = {
        class: "d-flex flex-fill align-items-center"
      };
      var _hoisted_2$5 = {
        class: "flex-grow-1"
      };
      var script$9 = exports('PersonCell', defineComponent({
        name: 'personCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var photoUrl = computed(() => {
            var _value$photoUrl;
            if (!props.column.field) {
              return "";
            }
            var value = props.row[props.column.field];
            if (!value || typeof value !== "object") {
              return "";
            }
            return (_value$photoUrl = value.photoUrl) !== null && _value$photoUrl !== void 0 ? _value$photoUrl : "";
          });
          var formattedName = computed(() => {
            var _value$nickName2, _value$lastName2;
            if (!props.column.field) {
              return "";
            }
            var value = props.row[props.column.field];
            if (!value || typeof value !== "object") {
              return "";
            }
            if (props.column.props.showLastNameFirst === true) {
              var _value$lastName, _value$nickName;
              return "".concat((_value$lastName = value.lastName) !== null && _value$lastName !== void 0 ? _value$lastName : "", ", ").concat((_value$nickName = value.nickName) !== null && _value$nickName !== void 0 ? _value$nickName : "");
            }
            return "".concat((_value$nickName2 = value.nickName) !== null && _value$nickName2 !== void 0 ? _value$nickName2 : "", " ").concat((_value$lastName2 = value.lastName) !== null && _value$lastName2 !== void 0 ? _value$lastName2 : "");
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$7, [createElementVNode("div", {
              class: "mr-2 flex-shrink-0",
              style: normalizeStyle({
                'width': '24px',
                'height': '24px',
                'border-radius': '12px',
                'background-image': "url('".concat(unref(photoUrl), "')"),
                'background-size': 'cover'
              })
            }, null, 4), createElementVNode("div", _hoisted_2$5, toDisplayString(unref(formattedName)), 1)]);
          };
        }
      }));

      script$9.__file = "Framework/Controls/Grid/Cells/personCell.partial.obs";

      var _hoisted_1$6 = {
        class: "d-flex flex-fill align-items-center"
      };
      var _hoisted_2$4 = createElementVNode("div", {
        class: "mr-2 flex-shrink-0 skeleton skeleton-xs",
        style: {
          "width": "24px",
          "height": "24px",
          "border-radius": "12px"
        }
      }, null, -1);
      var _hoisted_3$3 = createElementVNode("div", {
        class: "skeleton skeleton-text skeleton-sm skeleton-rounded flex-grow-1"
      }, null, -1);
      var _hoisted_4$2 = [_hoisted_2$4, _hoisted_3$3];
      var script$8 = defineComponent({
        name: 'personSkeletonCell.partial',
        props: standardSkeletonCellProps,
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$6, _hoisted_4$2);
          };
        }
      });

      script$8.__file = "Framework/Controls/Grid/Cells/personSkeletonCell.partial.obs";

      function getDisplayedValue(row, column) {
        var _value$nickName2, _value$lastName2;
        if (!column.field) {
          return undefined;
        }
        var value = row[column.field];
        if (!value || typeof value !== "object") {
          return undefined;
        }
        if (column.props.showLastNameFirst === true) {
          var _value$lastName, _value$nickName;
          return "".concat((_value$lastName = value.lastName) !== null && _value$lastName !== void 0 ? _value$lastName : "", ", ").concat((_value$nickName = value.nickName) !== null && _value$nickName !== void 0 ? _value$nickName : "");
        }
        return "".concat((_value$nickName2 = value.nickName) !== null && _value$nickName2 !== void 0 ? _value$nickName2 : "", " ").concat((_value$lastName2 = value.lastName) !== null && _value$lastName2 !== void 0 ? _value$lastName2 : "");
      }
      var personColumn_partial = exports('PersonColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          formatComponent: {
            type: Object,
            default: script$9
          },
          skeletonComponent: {
            type: Object,
            default: script$8
          },
          quickFilterValue: {
            type: Function,
            default: getDisplayedValue
          },
          exportValue: {
            type: Function,
            default: getDisplayedValue
          },
          sortValue: {
            type: Function,
            default: getDisplayedValue
          },
          hideAvatar: {
            type: Boolean,
            default: false
          },
          showLastNameFirst: {
            type: Boolean,
            default: false
          }
        })
      }));

      var script$7 = exports('ReorderCell', defineComponent({
        name: 'reorderCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var isFiltered = ref(props.grid.isFiltered);
          var isSorted = ref(props.grid.isSorted);
          var dropOperationInProgress = props.column.data.dropOperationInProgress;
          var iconStyle = computed(() => {
            var disabled = dropOperationInProgress.value || isFiltered.value || isSorted.value;
            return {
              cursor: disabled ? "not-allowed" : "grab",
              opacity: disabled ? "0.25" : "1"
            };
          });
          function onIsFilteredChanged(grid) {
            isFiltered.value = grid.isFiltered;
          }
          function onIsSortedChanged(grid) {
            isSorted.value = grid.isSorted;
          }
          onBeforeUnmount(() => {
            props.grid.off("isFilteredChanged", onIsFilteredChanged);
            props.grid.off("isSortedChanged", onIsSortedChanged);
          });
          props.grid.on("isFilteredChanged", onIsFilteredChanged);
          props.grid.on("isSortedChanged", onIsSortedChanged);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("i", {
              class: "fa fa-bars reorder-handle",
              style: normalizeStyle(unref(iconStyle))
            }, null, 4);
          };
        }
      }));

      script$7.__file = "Framework/Controls/Grid/Cells/reorderCell.partial.obs";

      var reorderColumn_partial = exports('ReorderColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          name: {
            type: String,
            default: "__reorder"
          },
          formatComponent: {
            type: Object,
            default: script$7
          },
          headerClass: {
            type: String,
            default: "grid-columnreorder"
          },
          itemClass: {
            type: String,
            default: "grid-columnreorder"
          },
          width: {
            type: String,
            default: "52px"
          },
          onOrderChanged: {
            type: Function,
            required: false
          }
        })
      }));

      var _hoisted_1$5 = ["disabled", "onClick"];
      var _hoisted_2$3 = createElementVNode("i", {
        class: "fa fa-lock"
      }, null, -1);
      var _hoisted_3$2 = [_hoisted_2$3];
      var script$6 = exports('SecurityCell', defineComponent({
        name: 'securityCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var itemTitle = computed(() => {
            var itemTitleProp = props.column.props.itemTitle;
            if (!itemTitleProp) {
              return "";
            } else if (typeof itemTitleProp === "string") {
              var titleValue = props.row[itemTitleProp];
              return typeof titleValue === "string" ? titleValue : "";
            } else {
              return itemTitleProp(props.row, props.grid);
            }
          });
          var isDisabled = computed(() => {
            var field = props.column.props.disabledField;
            if (typeof field === "string" && props.row[field] === true) {
              return true;
            }
            return false;
          });
          function onClick(_x) {
            return _onClick.apply(this, arguments);
          }
          function _onClick() {
            _onClick = _asyncToGenerator(function* (event) {
              var key = props.grid.getRowKey(props.row);
              if (event.target instanceof HTMLElement) {
                event.target.blur();
              }
              if (!key || !props.grid.entityTypeGuid) {
                return;
              }
              showSecurity(props.grid.entityTypeGuid, key, itemTitle.value);
            });
            return _onClick.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("button", {
              class: "btn btn-security btn-sm",
              title: "Secure",
              disabled: unref(isDisabled),
              onClick: withModifiers(onClick, ["prevent"])
            }, _hoisted_3$2, 8, _hoisted_1$5);
          };
        }
      }));

      script$6.__file = "Framework/Controls/Grid/Cells/securityCell.partial.obs";

      var securityColumn_partial = exports('SecurityColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          name: {
            type: String,
            default: "__security"
          },
          formatComponent: {
            type: Object,
            default: script$6
          },
          headerClass: {
            type: String,
            default: "grid-columncommand"
          },
          itemClass: {
            type: String,
            default: "grid-columncommand"
          },
          width: {
            type: String,
            default: "52px"
          },
          itemTitle: {
            type: [Function, String],
            required: false
          },
          disabledField: {
            type: String,
            default: "isSecurityDisabled"
          }
        })
      }));

      var _hoisted_1$4 = {
        class: "checkbox"
      };
      var _hoisted_2$2 = {
        title: ""
      };
      var _hoisted_3$1 = ["checked"];
      var _hoisted_4$1 = createElementVNode("span", {
        class: "label-text"
      }, " ", -1);
      var script$5 = exports('SelectCell', defineComponent({
        name: 'selectCell.partial',
        props: standardCellProps,
        setup(__props) {
          var props = __props;
          var isChecked = ref(false);
          var rowKey = computed(() => {
            return props.grid.getRowKey(props.row);
          });
          function onValueChange() {
            if (rowKey.value === undefined) {
              return;
            }
            var index = props.grid.selectedKeys.indexOf(rowKey.value);
            if (index !== -1) {
              props.grid.selectedKeys = props.grid.selectedKeys.filter(k => k !== rowKey.value);
            } else {
              props.grid.selectedKeys = [rowKey.value, ...props.grid.selectedKeys];
            }
          }
          function onSelectedKeysChanged() {
            isChecked.value = rowKey.value ? props.grid.selectedKeys.includes(rowKey.value) : false;
          }
          onBeforeUnmount(() => {
            props.grid.off("selectedKeysChanged", onSelectedKeysChanged);
          });
          props.grid.on("selectedKeysChanged", onSelectedKeysChanged);
          isChecked.value = rowKey.value ? props.grid.selectedKeys.includes(rowKey.value) : false;
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$4, [createElementVNode("label", _hoisted_2$2, [createElementVNode("input", {
              type: "checkbox",
              checked: isChecked.value,
              onChange: onValueChange
            }, null, 40, _hoisted_3$1), _hoisted_4$1])]);
          };
        }
      }));

      script$5.__file = "Framework/Controls/Grid/Cells/selectCell.partial.obs";

      var _hoisted_1$3 = {
        class: "checkbox"
      };
      var _hoisted_2$1 = {
        title: ""
      };
      var _hoisted_3 = ["checked"];
      var _hoisted_4 = createElementVNode("span", {
        class: "label-text"
      }, " ", -1);
      var script$4 = exports('SelectHeaderCell', defineComponent({
        name: 'selectHeaderCell.partial',
        props: standardHeaderCellProps,
        setup(__props) {
          var props = __props;
          var isChecked = ref(false);
          function onValueChange() {
            isChecked.value = !isChecked.value;
            if (!isChecked.value) {
              props.grid.selectedKeys = [];
            } else {
              props.grid.selectedKeys = props.grid.rows.map(r => props.grid.getRowKey(r)).filter(k => k !== undefined);
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$3, [createElementVNode("label", _hoisted_2$1, [createElementVNode("input", {
              type: "checkbox",
              class: "select-all",
              checked: isChecked.value,
              onChange: onValueChange
            }, null, 40, _hoisted_3), _hoisted_4])]);
          };
        }
      }));

      script$4.__file = "Framework/Controls/Grid/Cells/selectHeaderCell.partial.obs";

      var selectColumn_partial = exports('SelectColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          name: {
            type: String,
            default: "__select"
          },
          formatComponent: {
            type: Object,
            default: script$5
          },
          headerComponent: {
            type: Object,
            default: script$4
          },
          headerClass: {
            type: String,
            default: "grid-select-field"
          },
          itemClass: {
            type: String,
            default: "grid-select-field"
          },
          width: {
            type: String,
            default: "56px"
          }
        })
      }));

      var TextCell = exports('TextCell', defineComponent({
        props: _objectSpread2({}, standardCellProps),
        setup(props) {
          return () => props.column.field ? props.row[props.column.field] : "";
        }
      }));

      function getExportValue(row, column) {
        if (!column.field) {
          return undefined;
        }
        var value = row[column.field];
        if (typeof value !== "string") {
          return undefined;
        }
        return value;
      }
      var textColumn_partial = exports('TextColumn', defineComponent({
        props: _objectSpread2(_objectSpread2({}, standardColumnProps), {}, {
          formatComponent: {
            type: Object,
            default: TextCell
          },
          skeletonComponent: {
            type: Object,
            default: script$p
          },
          exportValue: {
            type: Function,
            default: getExportValue
          }
        })
      }));

      var script$3 = defineComponent({
        name: 'booleanFilter.partial',
        props: standardFilterProps,
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var searchMethod = ref(BooleanFilterMethod.All.toString());
          var filterBodyElement = ref(null);
          var searchTypeItems = Object.keys(BooleanFilterMethodDescription).map(n => {
            return {
              value: n,
              text: BooleanFilterMethodDescription[n]
            };
          });
          function updateModelValue() {
            if (Number(searchMethod.value) === BooleanFilterMethod.All) {
              return emit("update:modelValue", undefined);
            }
            var searchBag = {
              method: Number(searchMethod.value)
            };
            emit("update:modelValue", searchBag);
          }
          function updateSearchValues() {
            if (props.modelValue && typeof props.modelValue === "object") {
              var modelSearchBag = props.modelValue;
              if (modelSearchBag.method !== undefined) {
                searchMethod.value = modelSearchBag.method.toString();
                return;
              }
            }
            searchMethod.value = BooleanFilterMethod.All.toString();
          }
          watch(() => props.modelValue, () => updateSearchValues());
          watch([searchMethod], () => updateModelValue());
          updateSearchValues();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              ref_key: "filterBodyElement",
              ref: filterBodyElement,
              class: "grid-filter-popup-body"
            }, [createVNode(unref(DropDownList), {
              modelValue: searchMethod.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => searchMethod.value = $event),
              inputClasses: "mb-2",
              showBlankItem: false,
              items: unref(searchTypeItems)
            }, null, 8, ["modelValue", "items"])], 512);
          };
        }
      });

      script$3.__file = "Framework/Controls/Grid/Filters/booleanFilter.partial.obs";

      var _hoisted_1$2 = {
        key: 0,
        class: "mb-2"
      };
      var _hoisted_2 = {
        key: 1,
        class: "mb-2"
      };
      var script$2 = exports('DateFilter', defineComponent({
        name: 'dateFilter.partial',
        props: standardFilterProps,
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var searchMethod = ref(DateFilterMethod.Equals.toString());
          var searchValue = ref(null);
          var secondSearchValue = ref(null);
          var filterBodyElement = ref(null);
          var searchTypeItems = Object.keys(DateFilterMethodDescription).map(n => {
            return {
              value: n,
              text: DateFilterMethodDescription[n]
            };
          });
          var popupContainerElement = computed(() => {
            var _filterBodyElement$va, _filterBodyElement$va2;
            return (_filterBodyElement$va = (_filterBodyElement$va2 = filterBodyElement.value) === null || _filterBodyElement$va2 === void 0 ? void 0 : _filterBodyElement$va2.closest(".grid-filter-popup")) !== null && _filterBodyElement$va !== void 0 ? _filterBodyElement$va : null;
          });
          var isFirstValueVisible = computed(() => {
            return searchMethod.value === DateFilterMethod.Equals.toString() || searchMethod.value === DateFilterMethod.DoesNotEqual.toString() || searchMethod.value === DateFilterMethod.Before.toString() || searchMethod.value === DateFilterMethod.After.toString() || searchMethod.value === DateFilterMethod.Between.toString();
          });
          var isSecondValueVisible = computed(() => {
            return searchMethod.value === DateFilterMethod.Between.toString();
          });
          function updateModelValue() {
            var _searchValue$value, _secondSearchValue$va;
            if (searchValue.value === null && isFirstValueVisible.value) {
              emit("update:modelValue", undefined);
              return;
            }
            var searchBag = {
              method: Number(searchMethod.value),
              value: (_searchValue$value = searchValue.value) !== null && _searchValue$value !== void 0 ? _searchValue$value : undefined,
              secondValue: (_secondSearchValue$va = secondSearchValue.value) !== null && _secondSearchValue$va !== void 0 ? _secondSearchValue$va : undefined
            };
            emit("update:modelValue", searchBag);
          }
          function updateSearchValues() {
            if (props.modelValue && typeof props.modelValue === "object") {
              var modelSearchBag = props.modelValue;
              if (modelSearchBag.method !== undefined) {
                var _modelSearchBag$value, _modelSearchBag$secon;
                searchMethod.value = modelSearchBag.method.toString();
                searchValue.value = (_modelSearchBag$value = modelSearchBag.value) !== null && _modelSearchBag$value !== void 0 ? _modelSearchBag$value : null;
                secondSearchValue.value = (_modelSearchBag$secon = modelSearchBag.secondValue) !== null && _modelSearchBag$secon !== void 0 ? _modelSearchBag$secon : null;
                return;
              }
            }
            searchMethod.value = DateFilterMethod.Equals.toString();
            searchValue.value = null;
          }
          watch(() => props.modelValue, () => updateSearchValues());
          watch([searchMethod, searchValue, secondSearchValue], () => updateModelValue());
          updateSearchValues();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              ref_key: "filterBodyElement",
              ref: filterBodyElement,
              class: "grid-filter-popup-body"
            }, [createVNode(unref(DropDownList), {
              modelValue: searchMethod.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => searchMethod.value = $event),
              inputClasses: "mb-2",
              showBlankItem: false,
              items: unref(searchTypeItems)
            }, null, 8, ["modelValue", "items"]), unref(isFirstValueVisible) ? (openBlock(), createElementBlock("div", _hoisted_1$2, [createVNode(unref(DatePicker), {
              modelValue: searchValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => searchValue.value = $event),
              container: unref(popupContainerElement),
              horizontalOrientation: "left"
            }, null, 8, ["modelValue", "container"])])) : createCommentVNode("v-if", true), unref(isSecondValueVisible) ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(DatePicker), {
              modelValue: secondSearchValue.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => secondSearchValue.value = $event),
              container: unref(popupContainerElement),
              horizontalOrientation: "left"
            }, null, 8, ["modelValue", "container"])])) : createCommentVNode("v-if", true)], 512);
          };
        }
      }));

      script$2.__file = "Framework/Controls/Grid/Filters/dateFilter.partial.obs";

      var _hoisted_1$1 = {
        class: "grid-filter-popup-body"
      };
      var script$1 = exports('NumberFilter', defineComponent({
        name: 'numberFilter.partial',
        props: standardFilterProps,
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var searchMethod = ref(NumberFilterMethod.Equals.toString());
          var searchValue = ref(null);
          var secondSearchValue = ref(null);
          var searchTypeItems = Object.keys(NumberFilterMethodDescription).map(n => {
            return {
              value: n,
              text: NumberFilterMethodDescription[n]
            };
          });
          var isFirstValueVisible = computed(() => {
            return searchMethod.value === NumberFilterMethod.Equals.toString() || searchMethod.value === NumberFilterMethod.DoesNotEqual.toString() || searchMethod.value === NumberFilterMethod.GreaterThan.toString() || searchMethod.value === NumberFilterMethod.GreaterThanOrEqual.toString() || searchMethod.value === NumberFilterMethod.LessThan.toString() || searchMethod.value === NumberFilterMethod.LessThanOrEqual.toString() || searchMethod.value === NumberFilterMethod.Between.toString() || searchMethod.value === NumberFilterMethod.TopN.toString();
          });
          var isSecondValueVisible = computed(() => {
            return searchMethod.value === NumberFilterMethod.Between.toString();
          });
          var firstValuePlaceholder = computed(() => {
            return searchMethod.value === NumberFilterMethod.Between.toString() ? "from" : "value";
          });
          function updateModelValue() {
            var _searchValue$value, _secondSearchValue$va;
            if (searchValue.value === null && isFirstValueVisible.value) {
              emit("update:modelValue", undefined);
              return;
            }
            var searchBag = {
              method: Number(searchMethod.value),
              value: (_searchValue$value = searchValue.value) !== null && _searchValue$value !== void 0 ? _searchValue$value : undefined,
              secondValue: (_secondSearchValue$va = secondSearchValue.value) !== null && _secondSearchValue$va !== void 0 ? _secondSearchValue$va : undefined
            };
            emit("update:modelValue", searchBag);
          }
          function updateSearchValues() {
            if (props.modelValue && typeof props.modelValue === "object") {
              var modelSearchBag = props.modelValue;
              if (modelSearchBag.method !== undefined) {
                var _modelSearchBag$value, _modelSearchBag$secon;
                searchMethod.value = modelSearchBag.method.toString();
                searchValue.value = (_modelSearchBag$value = modelSearchBag.value) !== null && _modelSearchBag$value !== void 0 ? _modelSearchBag$value : null;
                secondSearchValue.value = (_modelSearchBag$secon = modelSearchBag.secondValue) !== null && _modelSearchBag$secon !== void 0 ? _modelSearchBag$secon : null;
                return;
              }
            }
            searchMethod.value = NumberFilterMethod.Equals.toString();
            searchValue.value = null;
          }
          watch(() => props.modelValue, () => updateSearchValues());
          watch([searchMethod, searchValue, secondSearchValue], () => updateModelValue());
          updateSearchValues();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(DropDownList), {
              modelValue: searchMethod.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => searchMethod.value = $event),
              inputClasses: "mb-2",
              showBlankItem: false,
              items: unref(searchTypeItems)
            }, null, 8, ["modelValue", "items"]), unref(isFirstValueVisible) ? (openBlock(), createBlock(unref(NumberBox), {
              key: 0,
              inputClasses: "mb-2",
              modelValue: searchValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => searchValue.value = $event),
              placeholder: unref(firstValuePlaceholder)
            }, null, 8, ["modelValue", "placeholder"])) : createCommentVNode("v-if", true), unref(isSecondValueVisible) ? (openBlock(), createBlock(unref(NumberBox), {
              key: 1,
              inputClasses: "mb-2",
              modelValue: secondSearchValue.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => secondSearchValue.value = $event),
              placeholder: "to"
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)]);
          };
        }
      }));

      script$1.__file = "Framework/Controls/Grid/Filters/numberFilter.partial.obs";

      var _hoisted_1 = {
        class: "grid-filter-popup-body"
      };
      var script = exports('TextFilter', defineComponent({
        name: 'textFilter.partial',
        props: standardFilterProps,
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var searchMethod = ref(TextFilterMethod.Equals.toString());
          var searchValue = ref(typeof props.modelValue === "string" ? props.modelValue : "");
          var searchTypeItems = Object.keys(TextFilterMethodDescription).map(n => {
            return {
              value: n,
              text: TextFilterMethodDescription[n]
            };
          });
          function updateModelValue() {
            if (!searchValue.value === null) {
              emit("update:modelValue", undefined);
              return;
            }
            var searchBag = {
              method: Number(searchMethod.value),
              value: searchValue.value
            };
            emit("update:modelValue", searchBag);
          }
          function updateSearchValues() {
            if (props.modelValue && typeof props.modelValue === "object") {
              var modelSearchBag = props.modelValue;
              if (modelSearchBag.method !== undefined) {
                var _modelSearchBag$value;
                searchMethod.value = modelSearchBag.method.toString();
                searchValue.value = (_modelSearchBag$value = modelSearchBag.value) !== null && _modelSearchBag$value !== void 0 ? _modelSearchBag$value : "";
                return;
              }
            }
            searchMethod.value = TextFilterMethod.Equals.toString();
            searchValue.value = "";
          }
          watch(() => props.modelValue, () => updateSearchValues());
          watch([searchMethod, searchValue], () => updateModelValue());
          updateSearchValues();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(DropDownList), {
              modelValue: searchMethod.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => searchMethod.value = $event),
              inputClasses: "mb-2",
              showBlankItem: false,
              items: unref(searchTypeItems)
            }, null, 8, ["modelValue", "items"]), createVNode(unref(TextBox), {
              modelValue: searchValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => searchValue.value = $event)
            }, null, 8, ["modelValue"])]);
          };
        }
      }));

      script.__file = "Framework/Controls/Grid/Filters/textFilter.partial.obs";

      var booleanValueFilter = exports('booleanValueFilter', {
        component: script$3,
        matches: booleanFilterMatches
      });
      var dateValueFilter = exports('dateValueFilter', {
        component: script$2,
        matches: dateFilterMatches
      });
      var numberValueFilter = exports('numberValueFilter', {
        component: script$1,
        matches: numberFilterMatches
      });
      var textValueFilter = exports('textValueFilter', {
        component: script,
        matches: textFilterMatches
      });
      var pickExistingValueFilter = exports('pickExistingValueFilter', {
        component: script$q,
        matches: pickExistingFilterMatches
      });

    })
  };
}));
//# sourceMappingURL=grid.js.map
