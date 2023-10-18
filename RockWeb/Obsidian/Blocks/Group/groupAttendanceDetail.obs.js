System.register(['vue', '@Obsidian/Utility/promiseUtils', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockFormField', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/component', '@Obsidian/Utility/util', '@Obsidian/Controls/campusPicker.obs', '@Obsidian/Utility/guid', '@Obsidian/Controls/baseAsyncPicker', '@Obsidian/Utility/block', '@Obsidian/Controls/textBox', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/inlineCheckBox', '@Obsidian/Controls/modal', '@Obsidian/Controls/panel', '@Obsidian/Controls/personPicker', '@Obsidian/Controls/radioButtonList', '@Obsidian/Controls/rockLabel', '@Obsidian/Controls/transitionVerticalCollapse', '@Obsidian/Enums/Blocks/Group/GroupAttendanceDetail/groupAttendanceDetailDateSelectionMode', '@Obsidian/Enums/Blocks/Group/GroupAttendanceDetail/groupAttendanceDetailLocationSelectionMode', '@Obsidian/Enums/Blocks/Group/GroupAttendanceDetail/groupAttendanceDetailScheduleSelectionMode', '@Obsidian/Enums/Event/attendanceStatus', '@Obsidian/Utility/rockDateTime', '@Obsidian/Utility/realTime'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, createVNode, unref, mergeProps, withCtx, createElementVNode, toDisplayString, pushScopeId, popScopeId, onMounted, onUnmounted, normalizeClass, createCommentVNode, Fragment, renderList, nextTick, createBlock, withDirectives, isRef, vModelCheckbox, renderSlot, createSlots, vShow, isPromise, PromiseCompletionSource, RockButton, RockFormField, BtnType, useStandardRockFormFieldProps, standardRockFormFieldProps, useVModelPassthrough, useStandardAsyncPickerProps, standardAsyncPickerProps, debounce, CampusPicker, areEqual, BaseAsyncPicker, useInvokeBlockAction, useConfigurationValues, onConfigurationValuesChanged, useReloadBlock, TextBox, NotificationBox, DatePicker, InlineCheckBox, Modal, Panel, PersonPicker, RadioButtonList, RockLabel, TransitionVerticalCollapse, GroupAttendanceDetailDateSelectionMode, GroupAttendanceDetailLocationSelectionMode, GroupAttendanceDetailScheduleSelectionMode, AttendanceStatus, RockDateTime, getTopic;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      onMounted = module.onMounted;
      onUnmounted = module.onUnmounted;
      normalizeClass = module.normalizeClass;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      nextTick = module.nextTick;
      createBlock = module.createBlock;
      withDirectives = module.withDirectives;
      isRef = module.isRef;
      vModelCheckbox = module.vModelCheckbox;
      renderSlot = module.renderSlot;
      createSlots = module.createSlots;
      vShow = module.vShow;
    }, function (module) {
      isPromise = module.isPromise;
      PromiseCompletionSource = module.PromiseCompletionSource;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
      useVModelPassthrough = module.useVModelPassthrough;
      useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
      standardAsyncPickerProps = module.standardAsyncPickerProps;
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      CampusPicker = module["default"];
    }, function (module) {
      areEqual = module.areEqual;
    }, function (module) {
      BaseAsyncPicker = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      InlineCheckBox = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      GroupAttendanceDetailDateSelectionMode = module.GroupAttendanceDetailDateSelectionMode;
    }, function (module) {
      GroupAttendanceDetailLocationSelectionMode = module.GroupAttendanceDetailLocationSelectionMode;
    }, function (module) {
      GroupAttendanceDetailScheduleSelectionMode = module.GroupAttendanceDetailScheduleSelectionMode;
    }, function (module) {
      AttendanceStatus = module.AttendanceStatus;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      getTopic = module.getTopic;
    }],
    execute: (function () {

      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
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
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
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
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

      function bindThis(attendanceFilter) {
        attendanceFilter.filter = attendanceFilter.filter.bind(attendanceFilter);
        attendanceFilter.hasFilter = attendanceFilter.hasFilter.bind(attendanceFilter);
        attendanceFilter.isFilter = attendanceFilter.isFilter.bind(attendanceFilter);
      }
      function createFilter(filter) {
        var attendanceFilter = {
          filter,
          hasFilter(filter) {
            return hasSameFilter(this, filter);
          },
          isFilter(filter) {
            return isSameFilter(this, filter);
          }
        };
        bindThis(attendanceFilter);
        return attendanceFilter;
      }
      function createAggregateFilter(filters, filter) {
        var aggregateAttendanceFilter = {
          hasFilter(filter) {
            return hasSameFilter(this, filter);
          },
          isFilter(filter) {
            return isSameFilter(this, filter);
          },
          filters: filters,
          filter(attendance) {
            return filter(this.filters, attendance);
          }
        };
        bindThis(aggregateAttendanceFilter);
        return aggregateAttendanceFilter;
      }
      var NoFilter = createFilter(_ => true);
      var DidAttendFilter = createFilter(attendance => !!attendance.didAttend);
      var lastNameStartsWithFilters = {};
      function getOrCreateLastNameStartsWithFilter(lastNameInitial) {
        var lastNameStartsWithFilter = lastNameStartsWithFilters[lastNameInitial];
        if (lastNameStartsWithFilter) {
          return lastNameStartsWithFilter;
        }
        lastNameStartsWithFilter = createFilter(attendance => {
          var _attendance$lastName;
          return ((_attendance$lastName = attendance.lastName) === null || _attendance$lastName === void 0 ? void 0 : _attendance$lastName.startsWith(lastNameInitial)) === true;
        });
        lastNameStartsWithFilters[lastNameInitial] = lastNameStartsWithFilter;
        return lastNameStartsWithFilter;
      }
      var firstNameStartsWithFilters = {};
      function getOrCreateFirstNameStartsWithFilter(firstNameInitial) {
        var firstNameStartsWithFilter = firstNameStartsWithFilters[firstNameInitial];
        if (firstNameStartsWithFilter) {
          return firstNameStartsWithFilter;
        }
        firstNameStartsWithFilter = createFilter(attendance => {
          var _attendance$nickName;
          return ((_attendance$nickName = attendance.nickName) === null || _attendance$nickName === void 0 ? void 0 : _attendance$nickName.startsWith(firstNameInitial)) === true;
        });
        firstNameStartsWithFilters[firstNameInitial] = firstNameStartsWithFilter;
        return firstNameStartsWithFilter;
      }
      function createSomeFilter() {
        for (var _len = arguments.length, attendanceFilters = new Array(_len), _key = 0; _key < _len; _key++) {
          attendanceFilters[_key] = arguments[_key];
        }
        return createAggregateFilter(attendanceFilters, (filters, attendance) => filters.some(filter => filter.filter(attendance)));
      }
      function createEveryFilter() {
        for (var _len2 = arguments.length, attendanceFilters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          attendanceFilters[_key2] = arguments[_key2];
        }
        return createAggregateFilter(attendanceFilters, (filters, attendance) => filters.every(filter => filter.filter(attendance)));
      }
      function isSameFilter(attendanceFilter1, attendanceFilter2) {
        return (attendanceFilter1 === null || attendanceFilter1 === void 0 ? void 0 : attendanceFilter1.filter) === (attendanceFilter2 === null || attendanceFilter2 === void 0 ? void 0 : attendanceFilter2.filter);
      }
      function hasSameFilter(attendanceFilter1, attendanceFilter2) {
        if ((attendanceFilter1 === null || attendanceFilter1 === void 0 ? void 0 : attendanceFilter1.filter) === (attendanceFilter2 === null || attendanceFilter2 === void 0 ? void 0 : attendanceFilter2.filter)) {
          return true;
        }
        if (isAggregateAttendanceFilter(attendanceFilter1)) {
          return attendanceFilter1.filters.some(f => isSameFilter(f, attendanceFilter2));
        }
        return false;
      }
      function isAggregateAttendanceFilter(attendanceFilter) {
        return !!(attendanceFilter !== null && attendanceFilter !== void 0 && attendanceFilter.filters);
      }
      function createSortBy(firstBy) {
        for (var _len3 = arguments.length, thenBys = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          thenBys[_key3 - 1] = arguments[_key3];
        }
        return (attendance1, attendance2) => {
          var comparison = firstBy(attendance1, attendance2);
          var thenByIndex = 0;
          var thenBy = thenBys ? thenBys[thenByIndex++] : null;
          while (comparison === 0 && thenBy) {
            comparison = thenBy(attendance1, attendance2);
            thenBy = thenBys[thenByIndex++];
          }
          return comparison;
        };
      }
      var sortByFirstName = (attendance1, attendance2) => {
        return compareStrings(attendance1.nickName, attendance2.nickName);
      };
      var sortByLastName = (attendance1, attendance2) => {
        return compareStrings(attendance1.lastName, attendance2.lastName);
      };
      function compareStrings(str1, str2) {
        return (str1 !== null && str1 !== void 0 ? str1 : "").localeCompare(str2 !== null && str2 !== void 0 ? str2 : "");
      }
      function createSwitch() {
        var position;
        var isDisabled;
        return {
          get isOn() {
            return !this.isDisabled && this.position === "on";
          },
          get isDisabled() {
            return isDisabled;
          },
          get position() {
            return position;
          },
          enable() {
            isDisabled = false;
          },
          disable() {
            isDisabled = true;
          },
          on() {
            if (position === "on") {
              return;
            }
            position = "on";
          },
          off() {
            if (position === "off") {
              return;
            }
            position = "off";
          },
          connectToFunc(func) {
            var _this = this;
            return function () {
              var _ref = _asyncToGenerator(function* (r) {
                if (!_this.isOn) {
                  return;
                }
                return yield func(r);
              });
              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }();
          }
        };
      }
      function createModalOptions(options) {
        var isOpen = true;
        var isCanceled = true;
        return {
          cancelText: options.cancelText,
          saveText: options.saveText,
          text: options.text,
          get isOpen() {
            return isOpen;
          },
          set isOpen(newIsOpen) {
            var wasOpen = isOpen;
            if (isCanceled && wasOpen && !newIsOpen) {
              if (options.onCancel) {
                var result = options.onCancel();
                if (isPromise(result)) {
                  result.then(() => {
                    isOpen = newIsOpen;
                  });
                } else {
                  isOpen = newIsOpen;
                }
                return;
              }
            }
            isOpen = newIsOpen;
          },
          onSave() {
            var _this2 = this;
            return _asyncToGenerator(function* () {
              isCanceled = false;
              if (options.onSave) {
                var result = options.onSave();
                if (isPromise(result)) {
                  yield result;
                }
              }
              _this2.isOpen = false;
            })();
          }
        };
      }
      function getAttendanceFullName(attendance) {
        return "".concat(attendance.nickName, " ").concat(attendance.lastName);
      }

      var _hoisted_1$5 = {
        class: "did-attend-filter form-group"
      };
      var _hoisted_2$4 = {
        class: "control-wrapper"
      };
      var _hoisted_3$4 = {
        class: "btn-group"
      };
      var _hoisted_4$3 = createTextVNode("All");
      var _hoisted_5$2 = createTextVNode("Present ");
      var _hoisted_6$2 = {
        class: "badge badge-primary"
      };
      var script$9 = defineComponent({
        name: 'didAttendFilter.partial',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: true
          },
          attendances: {
            type: Object,
            required: true
          },
          defaultFilter: {
            type: Object,
            default: NoFilter
          },
          unselectedBtnType: {
            type: String,
            default: BtnType.Default
          },
          selectedBtnType: {
            type: String,
            default: BtnType.Primary
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var didAttendFilterOrDefault = ref(props.modelValue.hasFilter(DidAttendFilter) ? DidAttendFilter : props.defaultFilter);
          var allFilters = computed({
            get() {
              return props.modelValue;
            },
            set(newValue) {
              emit("update:modelValue", newValue);
            }
          });
          var didAttendCount = computed(() => props.attendances.filter(attendance => attendance.didAttend).length);
          function getBtnType(isSelected) {
            if (isSelected) {
              return props.selectedBtnType;
            } else {
              return props.unselectedBtnType;
            }
          }
          function setDefaultOrDidAttendFilter(attendanceFilter) {
            didAttendFilterOrDefault.value = attendanceFilter;
            notifyFiltersUpdated();
          }
          function notifyFiltersUpdated() {
            allFilters.value = didAttendFilterOrDefault.value;
          }
          watch(() => props.modelValue, () => {
            if (props.modelValue.isFilter(NoFilter)) {
              didAttendFilterOrDefault.value = NoFilter;
              notifyFiltersUpdated();
            }
          });
          var standardFieldProps = useStandardRockFormFieldProps(props);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$5, [createVNode(unref(RockFormField), mergeProps(unref(standardFieldProps), {
              name: "didAttendFilter",
              modelValue: unref(allFilters)
            }), {
              default: withCtx(() => [createElementVNode("div", _hoisted_2$4, [createElementVNode("div", _hoisted_3$4, [createVNode(unref(RockButton), {
                btnType: getBtnType(didAttendFilterOrDefault.value.hasFilter(__props.defaultFilter)),
                onClick: _cache[0] || (_cache[0] = $event => setDefaultOrDidAttendFilter(__props.defaultFilter))
              }, {
                default: withCtx(() => [_hoisted_4$3]),
                _: 1
              }, 8, ["btnType"]), createVNode(unref(RockButton), {
                btnType: getBtnType(didAttendFilterOrDefault.value.hasFilter(unref(DidAttendFilter))),
                onClick: _cache[1] || (_cache[1] = $event => setDefaultOrDidAttendFilter(unref(DidAttendFilter)))
              }, {
                default: withCtx(() => [_hoisted_5$2, createElementVNode("span", _hoisted_6$2, toDisplayString(unref(didAttendCount)), 1)]),
                _: 1
              }, 8, ["btnType"])])])]),
              _: 1
            }, 16, ["modelValue"])]);
          };
        }
      });

      script$9.__file = "src/Group/GroupAttendanceDetail/didAttendFilter.partial.obs";

      var _withScopeId$1 = n => (pushScopeId("data-v-4d0d1b13"), n = n(), popScopeId(), n);
      var _hoisted_1$4 = {
        class: "initials-filter form-group"
      };
      var _hoisted_2$3 = {
        class: "control-wrapper"
      };
      var _hoisted_3$3 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-angle-left"
      }, null, -1));
      var _hoisted_4$2 = [_hoisted_3$3];
      var _hoisted_5$1 = ["onClick"];
      var _hoisted_6$1 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-angle-right"
      }, null, -1));
      var _hoisted_7$1 = [_hoisted_6$1];
      var script$8 = defineComponent({
        name: 'initialsFilter.partial',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: true
          },
          attendances: {
            type: Object,
            required: true
          },
          defaultFilter: {
            type: Object,
            default: NoFilter
          },
          isFilterByFirstNameInitial: {
            type: Boolean,
            required: true
          },
          unselectedBtnType: {
            type: String,
            default: BtnType.Default
          },
          selectedBtnType: {
            type: String,
            default: BtnType.Primary
          },
          isMultiselect: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var isScrollSupported = ref(false);
          var initialButtonsContainerElement = ref();
          var leftScrollButtonElement = ref();
          var rightScrollButtonElement = ref();
          var initialComponents = ref([]);
          var overflowingLeftInitialComponents = ref([]);
          var overflowingRightInitialComponents = ref([]);
          var didAttendFilterOrDefault = ref(props.modelValue.hasFilter(DidAttendFilter) ? DidAttendFilter : props.defaultFilter);
          var initialsFilters = ref(createSomeFilter());
          var isAnyInitialFilterOverflowingToLeft = computed(() => !!overflowingLeftInitialComponents.value.length);
          var isAnyInitialFilterOverflowingToRight = computed(() => !!overflowingRightInitialComponents.value.length);
          var isAnyActiveInitialFilterOverflowingToLeft = computed(() => overflowingLeftInitialComponents.value.map(c => c.initialFilter).some(f => initialsFilters.value.hasFilter(f)));
          var isAnyActiveInitialFilterOverflowingToRight = computed(() => overflowingRightInitialComponents.value.map(c => c.initialFilter).some(f => initialsFilters.value.hasFilter(f)));
          var allFilters = computed({
            get() {
              return props.modelValue;
            },
            set(newValue) {
              emit("update:modelValue", newValue);
            }
          });
          var initials = computed(() => props.isFilterByFirstNameInitial ? props.attendances.filter(a => !!a.nickName).map(a => a.nickName.charAt(0).toLocaleUpperCase()).filter((item, index, arr) => arr.indexOf(item) === index).sort() : props.attendances.filter(a => !!a.lastName).map(a => a.lastName.charAt(0).toLocaleUpperCase()).filter((item, index, arr) => arr.indexOf(item) === index).sort());
          function onInitialFilterClicked(attendanceFilter) {
            addOrRemoveInitialsFilter(attendanceFilter);
          }
          function onScrollLeftClicked() {
            var containerElement = initialButtonsContainerElement.value;
            if (containerElement) {
              containerElement.scrollBy({
                left: -(containerElement.offsetWidth / 5) * 2
              });
            }
          }
          function onScrollRightClicked() {
            var containerElement = initialButtonsContainerElement.value;
            if (containerElement) {
              containerElement.scrollBy({
                left: containerElement.offsetWidth / 5 * 2
              });
            }
          }
          function setInitialComponent(index, element, initial) {
            initialComponents.value[index] = {
              element: element,
              initial,
              initialFilter: getOrCreateInitialFilter(initial)
            };
          }
          function getOrCreateInitialFilter(initial) {
            return props.isFilterByFirstNameInitial ? getOrCreateFirstNameStartsWithFilter(initial) : getOrCreateLastNameStartsWithFilter(initial);
          }
          function getBtnType(isSelected) {
            if (isSelected) {
              return props.selectedBtnType;
            } else {
              return props.unselectedBtnType;
            }
          }
          function addOrRemoveInitialsFilter(attendanceFilter) {
            var hasNoLastNameStartsWithFilters = !initialsFilters.value.filters.length;
            if (hasNoLastNameStartsWithFilters) {
              initialsFilters.value.filters = [attendanceFilter];
            } else {
              var isFilterSelected = initialsFilters.value.hasFilter(attendanceFilter);
              if (!props.isMultiselect) {
                if (isFilterSelected) {
                  initialsFilters.value.filters = [];
                } else {
                  initialsFilters.value.filters = [attendanceFilter];
                }
              } else {
                if (isFilterSelected) {
                  initialsFilters.value.filters = initialsFilters.value.filters.filter(f => !f.isFilter(attendanceFilter));
                } else {
                  initialsFilters.value.filters.push(attendanceFilter);
                }
              }
            }
            notifyFiltersUpdated();
            checkIfInitialsFilterButtonsAreOverflowing();
          }
          function notifyFiltersUpdated() {
            if (!initialsFilters.value.filters.length) {
              allFilters.value = didAttendFilterOrDefault.value;
            } else {
              allFilters.value = createEveryFilter(didAttendFilterOrDefault.value, initialsFilters.value);
            }
          }
          function isElementLeftOfElement(element, targetElement, targetElementLeftOffset) {
            var _element$getBoundingC = element.getBoundingClientRect(),
              elementLeft = _element$getBoundingC.left;
            var _targetElement$getBou = targetElement.getBoundingClientRect(),
              parentLeft = _targetElement$getBou.left;
            return elementLeft + 1 < parentLeft + (targetElementLeftOffset || 0) - 1;
          }
          function isElementRightOfElement(element, targetElement, targetElementRightOffset) {
            var _element$getBoundingC2 = element.getBoundingClientRect(),
              elementRight = _element$getBoundingC2.right;
            var _targetElement$getBou2 = targetElement.getBoundingClientRect(),
              parentRight = _targetElement$getBou2.right;
            return elementRight - 1 > parentRight + (targetElementRightOffset || 0) + 1;
          }
          function checkIfInitialsFilterButtonsAreOverflowing() {
            nextTick(() => {
              checkIfInitialsFilterButtonsAreOverflowingToLeft();
              checkIfInitialsFilterButtonsAreOverflowingToRight();
            });
          }
          function checkIfInitialsFilterButtonsAreOverflowingToLeft() {
            var _leftScrollButtonElem;
            var parentElement = initialButtonsContainerElement.value;
            if (!parentElement) {
              return;
            }
            var components = initialComponents.value;
            if (!components.length) {
              return;
            }
            var leftOffset = (_leftScrollButtonElem = leftScrollButtonElement.value) === null || _leftScrollButtonElem === void 0 ? void 0 : _leftScrollButtonElem.offsetWidth;
            var overflowingComponents = components.filter(initialComponent => (initialComponent === null || initialComponent === void 0 ? void 0 : initialComponent.element) && isElementLeftOfElement(initialComponent.element, parentElement, leftOffset));
            var existingOverflowingComponents = overflowingLeftInitialComponents.value;
            if (overflowingComponents.length !== existingOverflowingComponents.length) {
              overflowingLeftInitialComponents.value = overflowingComponents;
              return;
            }
            if (overflowingComponents.length === 0) {
              return;
            }
            if (overflowingComponents.every(c => existingOverflowingComponents.indexOf(c) !== -1)) {
              return;
            }
            overflowingLeftInitialComponents.value = overflowingComponents;
          }
          function checkIfInitialsFilterButtonsAreOverflowingToRight() {
            var _rightScrollButtonEle, _rightScrollButtonEle2;
            var parentElement = initialButtonsContainerElement.value;
            if (!parentElement) {
              return;
            }
            var components = initialComponents.value;
            if (!components.length) {
              return;
            }
            var rightOffset = -((_rightScrollButtonEle = (_rightScrollButtonEle2 = rightScrollButtonElement.value) === null || _rightScrollButtonEle2 === void 0 ? void 0 : _rightScrollButtonEle2.offsetWidth) !== null && _rightScrollButtonEle !== void 0 ? _rightScrollButtonEle : 0);
            var overflowingComponents = components.filter(initialComponent => (initialComponent === null || initialComponent === void 0 ? void 0 : initialComponent.element) && isElementRightOfElement(initialComponent.element, parentElement, rightOffset));
            var existingOverflowingComponents = overflowingRightInitialComponents.value;
            if (overflowingComponents.length !== existingOverflowingComponents.length) {
              overflowingRightInitialComponents.value = overflowingComponents;
              return;
            }
            if (overflowingComponents.length === 0) {
              return;
            }
            if (overflowingComponents.every(c => existingOverflowingComponents.indexOf(c) !== -1)) {
              return;
            }
            overflowingRightInitialComponents.value = overflowingComponents;
          }
          watch(() => props.modelValue, () => {
            if (props.modelValue.isFilter(NoFilter)) {
              didAttendFilterOrDefault.value = NoFilter;
              initialsFilters.value.filters = [];
              notifyFiltersUpdated();
              checkIfInitialsFilterButtonsAreOverflowing();
            }
          });
          watch(() => props.isFilterByFirstNameInitial, () => {
            initialsFilters.value.filters = [];
            notifyFiltersUpdated();
          });
          var standardFieldProps = useStandardRockFormFieldProps(props);
          var debouncedScrollCheck = debounce(checkIfInitialsFilterButtonsAreOverflowing, 50);
          if (window.ResizeObserver) {
            isScrollSupported.value = true;
            var initialsFilterOverflowObserver = new ResizeObserver(entries => {
              entries.forEach(_ => {
                checkIfInitialsFilterButtonsAreOverflowing();
              });
            });
            onMounted(() => {
              checkIfInitialsFilterButtonsAreOverflowing();
              if (initialButtonsContainerElement.value) {
                initialsFilterOverflowObserver.observe(initialButtonsContainerElement.value);
              }
            });
            onUnmounted(() => {
              initialsFilterOverflowObserver.disconnect();
            });
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$4, [createVNode(unref(RockFormField), mergeProps(unref(standardFieldProps), {
              name: "initialsFilter",
              modelValue: unref(allFilters)
            }), {
              default: withCtx(() => [createElementVNode("div", _hoisted_2$3, [createElementVNode("div", {
                class: normalizeClass("initial-buttons btn-group d-flex ".concat(isScrollSupported.value ? 'overflow-hidden' : 'flex-wrap')),
                ref_key: "initialButtonsContainerElement",
                ref: initialButtonsContainerElement,
                onScroll: _cache[0] || (_cache[0] = function () {
                  return unref(debouncedScrollCheck) && unref(debouncedScrollCheck)(...arguments);
                })
              }, [isScrollSupported.value && (unref(isAnyInitialFilterOverflowingToLeft) || unref(isAnyInitialFilterOverflowingToRight)) ? (openBlock(), createElementBlock("button", {
                key: 0,
                class: normalizeClass("align-self-start left-scroll-button btn btn-lg btn-".concat(getBtnType(unref(isAnyActiveInitialFilterOverflowingToLeft)))),
                ref_key: "leftScrollButtonElement",
                ref: leftScrollButtonElement,
                type: "button",
                onClick: onScrollLeftClicked
              }, _hoisted_4$2, 2)) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(initials), (initial, index) => {
                return openBlock(), createElementBlock("button", {
                  class: normalizeClass("btn btn-lg btn-".concat(getBtnType(initialsFilters.value.hasFilter(getOrCreateInitialFilter(initial))))),
                  ref_for: true,
                  ref: element => setInitialComponent(index, element, initial),
                  type: "button",
                  onClick: $event => onInitialFilterClicked(getOrCreateInitialFilter(initial))
                }, toDisplayString(initial), 11, _hoisted_5$1);
              }), 256)), isScrollSupported.value && (unref(isAnyInitialFilterOverflowingToLeft) || unref(isAnyInitialFilterOverflowingToRight)) ? (openBlock(), createElementBlock("button", {
                key: 1,
                class: normalizeClass("align-self-end right-scroll-button btn btn-lg btn-".concat(getBtnType(unref(isAnyActiveInitialFilterOverflowingToRight)))),
                ref_key: "rightScrollButtonElement",
                ref: rightScrollButtonElement,
                type: "button",
                onClick: onScrollRightClicked
              }, _hoisted_7$1, 2)) : createCommentVNode("v-if", true)], 34)])]),
              _: 1
            }, 16, ["modelValue"])]);
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

      var css_248z$3 = ".initial-buttons[data-v-4d0d1b13]{padding:8px 0;scroll-behavior:smooth}.left-scroll-button[data-v-4d0d1b13]{box-shadow:-6px 0 #fff;left:0;order:-1;outline:none;position:sticky;z-index:3}.right-scroll-button[data-v-4d0d1b13]{box-shadow:6px 0 #fff;outline:none;position:sticky;right:0;z-index:3}";
      styleInject(css_248z$3);

      script$8.__scopeId = "data-v-4d0d1b13";
      script$8.__file = "src/Group/GroupAttendanceDetail/initialsFilter.partial.obs";

      var _hoisted_1$3 = ["disabled", "id"];
      var _hoisted_2$2 = ["for", "innerHTML"];
      var _hoisted_3$2 = ["for"];
      var script$7 = defineComponent({
        name: 'cardCheckBox.partial',
        props: {
          modelValue: {
            type: Boolean,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          },
          html: {
            type: String
          },
          formGroupClasses: {
            type: String,
            required: false
          },
          cardCheckBoxClasses: {
            type: String,
            required: false
          },
          controlWrapperClasses: {
            type: String,
            required: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var internalCardCheckBoxClasses = computed(() => "checkbox checkbox-card ".concat(internalValue.value ? "checked " : "", " ").concat(props.cardCheckBoxClasses || ""));
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: __props.modelValue,
              formGroupClasses: 'rock-check-box ' + __props.formGroupClasses,
              name: "checkbox"
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", {
                  class: normalizeClass('control-wrapper ' + __props.controlWrapperClasses)
                }, [createElementVNode("div", {
                  class: normalizeClass(unref(internalCardCheckBoxClasses))
                }, [withDirectives(createElementVNode("input", mergeProps(field, {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  disabled: __props.disabled,
                  id: uniqueId,
                  style: {
                    "display": "none"
                  },
                  type: "checkbox"
                }), null, 16, _hoisted_1$3), [[vModelCheckbox, unref(internalValue)]]), __props.html ? (openBlock(), createElementBlock("label", {
                  key: 0,
                  class: "checkbox-card-label",
                  for: uniqueId,
                  innerHTML: __props.html
                }, null, 8, _hoisted_2$2)) : (openBlock(), createElementBlock("label", {
                  key: 1,
                  class: "checkbox-card-label",
                  for: uniqueId
                }, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_3$2))], 2)], 2)];
              }),
              _: 3
            }, 8, ["modelValue", "formGroupClasses"]);
          };
        }
      });

      var css_248z$2 = ".checkbox-card{--checked-border-color:var(--color-primary,#ee7525);--checked-background-color:rgba(var(--color-base-primary),0.1);background-color:var(--background-color);border:1px solid var(--border-color,var(--input-border));border-radius:5px;height:100%;margin:0;padding:0}.checkbox-card.checked{--border-color:var(--checked-border-color);--background-color:var(--checked-background-color);outline:2px solid var(--checked-border-color);outline-offset:-2px}.checkbox-card-label{height:100%;padding:12px!important;width:100%}.checkbox-card-data{display:flex;flex:1 1 auto;flex-direction:column;height:100%;justify-content:center;position:relative}";
      styleInject(css_248z$2);

      script$7.__file = "src/Group/GroupAttendanceDetail/cardCheckBox.partial.obs";

      var _hoisted_1$2 = {
        class: "attendance-roster"
      };
      var _hoisted_2$1 = {
        key: 0
      };
      var _hoisted_3$1 = {
        key: 1
      };
      var _hoisted_4$1 = {
        class: "attendance-grid"
      };
      var script$6 = defineComponent({
        name: 'attendanceRoster.partial',
        props: {
          attendances: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          },
          filterBy: {
            type: Object,
            required: false,
            default: null
          },
          groupBy: {
            type: Object,
            required: false,
            default: null
          },
          sortBy: {
            type: Object,
            required: false,
            default: null
          },
          isLongListDisabled: {
            type: Boolean,
            required: false,
            default: false
          }
        },
        emits: ["attendanceChanged"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var controlWrapperClasses = "";
          var cardCheckBoxClasses = "";
          var sortedAttendances = computed(() => {
            var sortByDelegate = props.sortBy;
            var attendances = [...props.attendances];
            if (sortByDelegate) {
              attendances.sort(sortByDelegate);
            }
            return attendances;
          });
          var filteredAttendances = computed(() => {
            var filterByDelegate = props.filterBy;
            var attendances = sortedAttendances.value;
            if (!filterByDelegate) {
              return attendances;
            }
            return attendances.filter(filterByDelegate);
          });
          var attendanceGroups = computed(() => {
            var groupBy = props.groupBy;
            var attendances = filteredAttendances.value;
            var shouldGroup = groupBy && !props.isLongListDisabled;
            if (!shouldGroup) {
              return {
                "": attendances
              };
            }
            var dictionary = {};
            var keys = [];
            attendances.forEach(attendance => {
              var groupLabel = groupBy(attendance);
              if (!dictionary[groupLabel]) {
                dictionary[groupLabel] = [attendance];
                keys.push(groupLabel);
              } else {
                dictionary[groupLabel].push(attendance);
              }
            });
            keys.sort();
            var sortedDictionary = {};
            keys.forEach(key => sortedDictionary[key] = dictionary[key]);
            return sortedDictionary;
          });
          var hasMultipleGroups = computed(() => Object.keys(attendanceGroups.value).length > 1);
          function onInternalAttendanceChanged(didAttend, attendance) {
            var changed = attendance.didAttend !== didAttend;
            attendance.didAttend = didAttend;
            if (changed) {
              emit("attendanceChanged", attendance);
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(attendanceGroups), (groupedAttendances, groupLabel, index) => {
              return openBlock(), createElementBlock(Fragment, {
                key: groupLabel
              }, [groupedAttendances.length ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [unref(hasMultipleGroups) && index > 0 ? (openBlock(), createElementBlock("hr", _hoisted_2$1)) : createCommentVNode("v-if", true), groupLabel && unref(hasMultipleGroups) ? (openBlock(), createElementBlock("h2", _hoisted_3$1, toDisplayString(groupLabel), 1)) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_4$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(groupedAttendances, attendance => {
                return openBlock(), createElementBlock(Fragment, {
                  key: attendance.personGuid
                }, [attendance.itemTemplate ? (openBlock(), createBlock(unref(script$7), {
                  key: 0,
                  controlWrapperClasses: 'card-check-box ' + controlWrapperClasses,
                  cardCheckBoxClasses: cardCheckBoxClasses,
                  disabled: __props.disabled,
                  html: attendance.itemTemplate,
                  modelValue: attendance.didAttend,
                  "onUpdate:modelValue": $event => onInternalAttendanceChanged($event, attendance)
                }, null, 8, ["controlWrapperClasses", "disabled", "html", "modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(unref(script$7), {
                  key: 1,
                  controlWrapperClasses: 'card-check-box ' + controlWrapperClasses,
                  cardCheckBoxClasses: cardCheckBoxClasses,
                  disabled: __props.disabled,
                  modelValue: attendance.didAttend,
                  "onUpdate:modelValue": $event => onInternalAttendanceChanged($event, attendance)
                }, {
                  default: withCtx(() => [createElementVNode("div", null, toDisplayString(unref(getAttendanceFullName)(attendance)), 1)]),
                  _: 2
                }, 1032, ["controlWrapperClasses", "disabled", "modelValue", "onUpdate:modelValue"]))], 64);
              }), 128))])], 64)) : createCommentVNode("v-if", true)], 64);
            }), 128))]);
          };
        }
      });

      var css_248z$1 = ".attendance-grid{grid-gap:12px;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}.attendance-roster hr{border-radius:5px;border-top:5px solid #c8c8c8;margin:32px 0}";
      styleInject(css_248z$1);

      script$6.__file = "src/Group/GroupAttendanceDetail/attendanceRoster.partial.obs";

      var script$5 = defineComponent({
        name: 'campusFilter.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          campusGuid: {
            type: String,
            required: true
          }
        },
        emits: ["update:modelValue", "update:campusGuid"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var campusPickerValue = ref(props.campusGuid ? {
            text: null,
            value: props.campusGuid
          } : null);
          watch(campusPickerValue, () => {
            var _campusPickerValue$va;
            var filter = NoFilter;
            var campusGuid = (_campusPickerValue$va = campusPickerValue.value) === null || _campusPickerValue$va === void 0 ? void 0 : _campusPickerValue$va.value;
            if (campusGuid) {
              filter = createFilter(attendee => {
                return areEqual(attendee.campusGuid, campusGuid);
              });
            }
            emit("update:campusGuid", campusGuid);
            emit("update:modelValue", filter);
          });
          watch(() => props.modelValue, () => {
            if (props.modelValue.isFilter(NoFilter)) {
              campusPickerValue.value = null;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(CampusPicker), {
              modelValue: campusPickerValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => campusPickerValue.value = $event),
              blankValue: "All Campuses",
              includeInactive: true,
              multiple: false,
              showBlankItem: true
            }, null, 8, ["modelValue"]);
          };
        }
      });

      script$5.__file = "src/Group/GroupAttendanceDetail/campusFilter.partial.obs";

      var script$4 = defineComponent({
        name: 'groupLocationPicker.partial',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          groupGuid: {
            type: String,
            default: null
          },
          hideIfEmpty: {
            type: Boolean,
            default: false
          }
        }, standardAsyncPickerProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var standardProps = useStandardAsyncPickerProps(props);
          var loadedItems = ref(null);
          var actualItems = computed(() => {
            return loadedItems.value || loadOptions;
          });
          var isHidden = computed(() => props.hideIfEmpty && (!actualItems.value || !actualItems.value.length));
          var loadOptions = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var bag = {
                groupGuid: props.groupGuid
              };
              var result = yield invokeBlockAction("GetGroupLocations", {
                bag
              });
              if (result.isSuccess && result.data) {
                loadedItems.value = result.data;
                return result.data;
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                loadedItems.value = [];
                return [];
              }
            });
            return function loadOptions() {
              return _ref2.apply(this, arguments);
            };
          }();
          watch(() => [props.groupGuid], () => {
            loadedItems.value = null;
          });
          return (_ctx, _cache) => {
            return !unref(isHidden) ? (openBlock(), createBlock(unref(BaseAsyncPicker), mergeProps({
              key: 0,
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null)
            }, unref(standardProps), {
              items: unref(actualItems)
            }), null, 16, ["modelValue", "items"])) : createCommentVNode("v-if", true);
          };
        }
      });

      script$4.__file = "src/Group/GroupAttendanceDetail/groupLocationPicker.partial.obs";

      var script$3 = defineComponent({
        name: 'groupLocationScheduleDatePicker.partial',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          date: {
            type: Object,
            default: null
          },
          groupGuid: {
            type: String,
            default: null
          },
          locationGuid: {
            type: String,
            default: null
          },
          numberOfPreviousDaysToShow: {
            type: Number,
            default: null
          },
          shouldLogNotFoundError: {
            type: Boolean,
            default: false
          },
          shouldLoadItemsWhetherValuesAreSet: {
            type: Boolean,
            default: false
          }
        }, standardAsyncPickerProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var standardProps = useStandardAsyncPickerProps(props);
          var loadedItems = ref(null);
          var actualItems = computed(() => {
            return loadedItems.value || loadOptions;
          });
          var loadOptions = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var _props$date;
              var bag = {
                groupGuid: props.groupGuid,
                locationGuid: props.locationGuid,
                numberOfPreviousDaysToShow: props.numberOfPreviousDaysToShow,
                occurrenceDate: (_props$date = props.date) === null || _props$date === void 0 ? void 0 : _props$date.toISOString()
              };
              if (!props.shouldLoadItemsWhetherValuesAreSet && (!bag.groupGuid || !bag.locationGuid)) {
                loadedItems.value = [];
                return [];
              }
              var result = yield invokeBlockAction("GetGroupLocationScheduleDates", {
                bag
              });
              if (result.isSuccess && result.data) {
                loadedItems.value = result.data;
                return result.data;
              } else {
                if (props.shouldLogNotFoundError) {
                  var _result$errorMessage;
                  console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                }
                loadedItems.value = [];
                return [];
              }
            });
            return function loadOptions() {
              return _ref2.apply(this, arguments);
            };
          }();
          watch(() => [props.groupGuid, props.locationGuid], () => {
            loadedItems.value = null;
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(BaseAsyncPicker), mergeProps({
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null)
            }, unref(standardProps), {
              items: unref(actualItems)
            }), null, 16, ["modelValue", "items"]);
          };
        }
      });

      script$3.__file = "src/Group/GroupAttendanceDetail/groupLocationScheduleDatePicker.partial.obs";

      var script$2 = defineComponent({
        name: 'groupLocationSchedulePicker.partial',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          groupGuid: {
            type: String,
            default: null
          },
          hideIfEmpty: {
            type: Boolean,
            default: false
          },
          locationGuid: {
            type: String,
            default: null
          },
          isoDateString: {
            type: String,
            default: null
          },
          shouldLogNotFoundError: {
            type: Boolean,
            default: false
          },
          shouldLoadItemsWhetherValuesAreSet: {
            type: Boolean,
            default: false
          }
        }, standardAsyncPickerProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var standardProps = useStandardAsyncPickerProps(props);
          var loadedItems = ref(null);
          var actualItems = computed(() => {
            return loadedItems.value || loadOptions;
          });
          var isHidden = computed(() => props.hideIfEmpty && (!actualItems.value || !actualItems.value.length));
          var loadOptions = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var bag = {
                groupGuid: props.groupGuid,
                locationGuid: props.locationGuid,
                date: props.isoDateString
              };
              if (!props.shouldLoadItemsWhetherValuesAreSet && (!bag.groupGuid || !bag.locationGuid)) {
                loadedItems.value = [];
                return [];
              }
              var result = yield invokeBlockAction("GetGroupLocationSchedules", {
                bag
              });
              if (result.isSuccess && result.data) {
                loadedItems.value = result.data;
                return result.data;
              } else {
                if (props.shouldLogNotFoundError) {
                  var _result$errorMessage;
                  console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                }
                loadedItems.value = [];
                return [];
              }
            });
            return function loadOptions() {
              return _ref2.apply(this, arguments);
            };
          }();
          watch(() => [props.groupGuid, props.locationGuid, props.isoDateString], () => {
            loadedItems.value = null;
          });
          return (_ctx, _cache) => {
            return !unref(isHidden) ? (openBlock(), createBlock(unref(BaseAsyncPicker), mergeProps({
              key: 0,
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null)
            }, unref(standardProps), {
              items: unref(actualItems)
            }), null, 16, ["modelValue", "items"])) : createCommentVNode("v-if", true);
          };
        }
      });

      script$2.__file = "src/Group/GroupAttendanceDetail/groupLocationSchedulePicker.partial.obs";

      var _hoisted_1$1 = {
        class: "form-group search-filter"
      };
      var script$1 = defineComponent({
        name: 'searchFilter.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var isRegex = /\/(.+)\/(.*)/;
          var debouncedUpdateSearchFilter = debounce(updateSearchFilter, 250);
          var internalSearchText = ref("");
          var searchText = computed({
            get() {
              return internalSearchText.value;
            },
            set(newValue) {
              internalSearchText.value = newValue;
              debouncedUpdateSearchFilter();
            }
          });
          function createNameContainsFilter(text) {
            return createFilter(attendance => {
              return getAttendanceFullName(attendance).toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) >= 0;
            });
          }
          function createNameMatchesRegexFilter(regex) {
            return createFilter(attendance => {
              return regex.test(getAttendanceFullName(attendance));
            });
          }
          function updateSearchFilter() {
            var filter = NoFilter;
            var newValue = internalSearchText.value;
            if (newValue) {
              var match = newValue.match(isRegex);
              if (match && match.length) {
                try {
                  var regex = new RegExp(match[1], match[2]);
                  if (regex) {
                    filter = createNameMatchesRegexFilter(regex);
                  }
                } catch (_unused) {
                  filter = createNameContainsFilter(newValue);
                }
              } else {
                filter = createNameContainsFilter(newValue);
              }
            }
            return emit("update:modelValue", filter);
          }
          watch(() => props.modelValue, () => {
            if (props.modelValue.isFilter(NoFilter)) {
              internalSearchText.value = "";
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(TextBox), {
              modelValue: unref(searchText),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(searchText) ? searchText.value = $event : null),
              placeholder: "Search"
            }, null, 8, ["modelValue"])]);
          };
        }
      });

      script$1.__file = "src/Group/GroupAttendanceDetail/searchFilter.partial.obs";

      var _withScopeId = n => (pushScopeId("data-v-0f79ab3a"), n = n(), popScopeId(), n);
      var _hoisted_1 = _withScopeId(() => createElementVNode("strong", null, "Sorry", -1));
      var _hoisted_2 = _withScopeId(() => createElementVNode("p", null, "Group was not found or you're not authorized to update the attendance for the selected group.", -1));
      var _hoisted_3 = _withScopeId(() => createElementVNode("strong", null, "No Occurrences", -1));
      var _hoisted_4 = _withScopeId(() => createElementVNode("p", null, "There are currently not any active occurrences for selected group for which to take attendance.", -1));
      var _hoisted_5 = _withScopeId(() => createElementVNode("strong", null, "Sorry", -1));
      var _hoisted_6 = {
        key: 3
      };
      var _hoisted_7 = {
        class: "mr-2"
      };
      var _hoisted_8 = {
        class: "attendance-header"
      };
      var _hoisted_9 = {
        class: "row"
      };
      var _hoisted_10 = {
        class: "col-xs-12 col-sm-4"
      };
      var _hoisted_11 = {
        key: 1
      };
      var _hoisted_12 = createTextVNode("Attendance For");
      var _hoisted_13 = {
        class: "col-xs-12 col-sm-4"
      };
      var _hoisted_14 = {
        key: 1
      };
      var _hoisted_15 = createTextVNode("Location");
      var _hoisted_16 = {
        class: "col-xs-12 col-sm-4"
      };
      var _hoisted_17 = {
        key: 2
      };
      var _hoisted_18 = createTextVNode("Schedule");
      var _hoisted_19 = {
        class: "mt-5"
      };
      var _hoisted_20 = {
        class: "d-flex align-items-end"
      };
      var _hoisted_21 = {
        key: 2,
        class: "ml-auto d-flex align-items-end"
      };
      var _hoisted_22 = createTextVNode("Add Group Member");
      var _hoisted_23 = {
        class: "row"
      };
      var _hoisted_24 = {
        class: "col-xs-12 col-sm-8 d-sm-flex"
      };
      var _hoisted_25 = {
        class: "col-xs-12 col-sm-4 d-flex justify-content-end"
      };
      var _hoisted_26 = {
        class: "form-group mb-sm-0 btn-group"
      };
      var _hoisted_27 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-pencil-alt"
      }, null, -1));
      var _hoisted_28 = createTextVNode(" Add Note");
      var _hoisted_29 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-file-download"
      }, null, -1));
      var _hoisted_30 = createTextVNode(" Roster");
      var _hoisted_31 = createTextVNode("Back");
      var script = exports('default', defineComponent({
        name: 'groupAttendanceDetail',
        setup(__props) {
          var _ref, _config$value$selecte, _config$value$notes;
          var config = ref(useConfigurationValues());
          var invokeBlockAction = useInvokeBlockAction();
          var autoMarkAttendanceSwitch = createSwitch();
          var autoMarkAttendance = autoMarkAttendanceSwitch.connectToFunc(markAttendance);
          var autoUpdateDidNotOccurSwitch = createSwitch();
          var autoUpdateDidNotOccur = autoUpdateDidNotOccurSwitch.connectToFunc(updateDidNotOccur);
          var autoUpdateAttendanceOccurrenceTypeSwitch = createSwitch();
          var autoUpdateAttendanceOccurrenceType = autoUpdateAttendanceOccurrenceTypeSwitch.connectToFunc(updateAttendanceOccurrenceType);
          var autoUpdateNotesSwitch = createSwitch();
          var autoUpdateNotes = autoUpdateNotesSwitch.connectToFunc(debouncePromise(updateNotes, 1000));
          var isAutoSaveOn = ref(true);
          var modalOptions = ref(null);
          var isPrintingRoster = ref(false);
          var printRosterWarning = ref("");
          var errorMessage = ref("");
          var searchFilter = ref(NoFilter);
          var campusFilter = ref(NoFilter);
          var rosterFilter = ref(NoFilter);
          var didAttendFilter = ref(NoFilter);
          var attendanceOccurrenceGuid = ref(config.value.attendanceOccurrenceGuid);
          var attendanceForDate = ref((_ref = config.value.attendanceOccurrenceDate ? RockDateTime.parseISO(config.value.attendanceOccurrenceDate) : null) !== null && _ref !== void 0 ? _ref : RockDateTime.now());
          var attendanceOccurrenceTypeGuid = ref((_config$value$selecte = config.value.selectedAttendanceOccurrenceTypeValue) !== null && _config$value$selecte !== void 0 ? _config$value$selecte : undefined);
          var locationGuid = ref(config.value.locationGuid);
          var scheduleGuid = ref(config.value.scheduleGuid);
          var didNotOccur = ref(config.value.isDidNotMeetChecked);
          var isSavingDidNotOccur = ref(false);
          var campusGuid = ref();
          var notes = ref((_config$value$notes = config.value.notes) !== null && _config$value$notes !== void 0 ? _config$value$notes : "");
          var topic = ref();
          var isNotesShown = ref(false);
          var addPersonSelection = ref();
          var isDidNotMeetShown = computed(() => !config.value.isDidNotMeetDisabled || didNotOccur.value);
          var dateFormat = computed(() => config.value.attendanceOccurrenceDateSelectionMode === GroupAttendanceDetailDateSelectionMode.DatePicker ? "yyyy-MM-dd" : "dddd, MMMM d, yyyy");
          var attendanceForDateIsoString = computed(() => {
            var _attendanceForDate$va;
            return (_attendanceForDate$va = attendanceForDate.value) === null || _attendanceForDate$va === void 0 ? void 0 : _attendanceForDate$va.toISOString();
          });
          var attendanceForDateString = computed(() => attendanceForDate.value.toASPString(dateFormat.value));
          var addPersonAsLabel = computed(() => {
            if (config.value.addPersonAs) {
              return "Add Person As ".concat(config.value.addPersonAs);
            } else {
              return "Add Person";
            }
          });
          var panelTitle = computed(() => config.value.groupName ? "".concat(config.value.groupName, " Attendance") : "Group Attendance");
          var attendances = computed(() => {
            var _config$value$attenda, _config$value;
            return (_config$value$attenda = (_config$value = config.value) === null || _config$value === void 0 ? void 0 : _config$value.attendances) !== null && _config$value$attenda !== void 0 ? _config$value$attenda : [];
          });
          var attendanceSortByDelegate = ref(createSortBy(sortByLastName, sortByFirstName));
          var attendanceFilterByDelegate = computed(() => {
            var filtersToCheck = [campusFilter.value, searchFilter.value, rosterFilter.value, didAttendFilter.value];
            var filters = filtersToCheck.filter(filterToCheck => !filterToCheck.isFilter(NoFilter));
            if (filters.length === 0) {
              return null;
            } else if (filters.length === 1) {
              return filters[0].filter;
            } else {
              return createEveryFilter(...filters).filter;
            }
          });
          var attendanceGroupByDelegate = computed(() => {
            return attendance => {
              var _attendance$lastName;
              return ((_attendance$lastName = attendance.lastName) === null || _attendance$lastName === void 0 ? void 0 : _attendance$lastName.charAt(0)) || "?";
            };
          });
          var isBackButtonHidden = computed(() => config.value.isBackButtonHidden || !config.value.backPageUrl);
          var isLongListDisabled = computed(() => config.value.isLongListDisabled || attendances.value.length <= 50);
          function onAddPerson(_x) {
            return _onAddPerson.apply(this, arguments);
          }
          function _onAddPerson() {
            _onAddPerson = _asyncToGenerator(function* (personPickerSelection) {
              var personAliasGuid = personPickerSelection === null || personPickerSelection === void 0 ? void 0 : personPickerSelection.value;
              if (!personAliasGuid) {
                return;
              }
              var bag = {
                attendanceOccurrenceGuid: attendanceOccurrenceGuid.value,
                personAliasGuid: personAliasGuid
              };
              if (!attendanceOccurrenceGuid.value) {
                yield getOrCreateAttendanceOccurrence({
                  attendanceOccurrenceDate: attendanceForDateIsoString.value,
                  locationGuid: locationGuid.value,
                  scheduleGuid: scheduleGuid.value,
                  addedPersonAliasGuid: bag.personAliasGuid
                });
              } else {
                var _result$data;
                var result = yield invokeBlockAction("AddPerson", {
                  bag
                });
                if (result !== null && result !== void 0 && (_result$data = result.data) !== null && _result$data !== void 0 && _result$data.attendance) {
                  var _result$data2;
                  addToAttendancesArray(result === null || result === void 0 ? void 0 : (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.attendance);
                }
              }
              addPersonSelection.value = undefined;
            });
            return _onAddPerson.apply(this, arguments);
          }
          function onAddGroupMemberClicked() {
            if (config.value.addGroupMemberPageUrl) {
              location.href = config.value.addGroupMemberPageUrl;
            }
          }
          function onAttendanceChanged(_x2) {
            return _onAttendanceChanged.apply(this, arguments);
          }
          function _onAttendanceChanged() {
            _onAttendanceChanged = _asyncToGenerator(function* (attendance) {
              yield autoMarkAttendance({
                attendanceOccurrenceGuid: attendanceOccurrenceGuid.value,
                personAliasId: attendance.personAliasId,
                didAttend: attendance.didAttend
              });
            });
            return _onAttendanceChanged.apply(this, arguments);
          }
          function onAttendanceForDateUpdated(_x3) {
            return _onAttendanceForDateUpdated.apply(this, arguments);
          }
          function _onAttendanceForDateUpdated() {
            _onAttendanceForDateUpdated = _asyncToGenerator(function* (dateString) {
              var _ref3;
              var newDate = (_ref3 = dateString ? RockDateTime.parseISO(dateString) : null) !== null && _ref3 !== void 0 ? _ref3 : RockDateTime.now();
              if (attendanceForDate.value.date.isEqualTo(newDate.date)) {
                return;
              }
              attendanceForDate.value = newDate.date;
              yield getAttendanceOccurrence({
                attendanceOccurrenceDate: attendanceForDateIsoString.value,
                locationGuid: locationGuid.value,
                scheduleGuid: scheduleGuid.value
              });
            });
            return _onAttendanceForDateUpdated.apply(this, arguments);
          }
          function onAttendanceOccurrenceTypeChanged(_x4) {
            return _onAttendanceOccurrenceTypeChanged.apply(this, arguments);
          }
          function _onAttendanceOccurrenceTypeChanged() {
            _onAttendanceOccurrenceTypeChanged = _asyncToGenerator(function* (newAttendanceOccurrenceType) {
              attendanceOccurrenceTypeGuid.value = newAttendanceOccurrenceType;
              yield autoUpdateAttendanceOccurrenceType({
                attendanceOccurrenceGuid: attendanceOccurrenceGuid.value,
                attendanceOccurrenceTypeGuid: newAttendanceOccurrenceType
              });
            });
            return _onAttendanceOccurrenceTypeChanged.apply(this, arguments);
          }
          function onBackClicked() {
            if (config.value.backPageUrl) {
              window.location.href = config.value.backPageUrl;
            }
          }
          function onDidNotOccurChanged(_x5) {
            return _onDidNotOccurChanged.apply(this, arguments);
          }
          function _onDidNotOccurChanged() {
            _onDidNotOccurChanged = _asyncToGenerator(function* (newDidNotOccur) {
              if (config.value.isDidNotMeetDisabled) {
                return;
              }
              if (didNotOccur.value === newDidNotOccur) {
                return;
              }
              if (newDidNotOccur && attendances.value.some(DidAttendFilter.filter)) {
                modalOptions.value = createModalOptions({
                  saveText: "Yes",
                  cancelText: "No",
                  text: "Attendance has already been taken for this occurrence. Continue?",
                  onCancel() {
                    didNotOccur.value = true;
                    nextTick(() => didNotOccur.value = false);
                  },
                  onSave() {
                    return _asyncToGenerator(function* () {
                      didNotOccur.value = newDidNotOccur;
                      var _iterator = _createForOfIteratorHelper(attendances.value),
                        _step;
                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          var attendance = _step.value;
                          if ((attendance === null || attendance === void 0 ? void 0 : attendance.didAttend) === true) {
                            attendance.didAttend = null;
                          }
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                      yield autoUpdateDidNotOccur({
                        attendanceOccurrenceGuid: attendanceOccurrenceGuid.value,
                        didNotOccur: newDidNotOccur
                      });
                    })();
                  }
                });
              } else {
                didNotOccur.value = newDidNotOccur;
                autoUpdateDidNotOccur({
                  attendanceOccurrenceGuid: attendanceOccurrenceGuid.value,
                  didNotOccur: newDidNotOccur
                }).then(() => {});
              }
            });
            return _onDidNotOccurChanged.apply(this, arguments);
          }
          function onConfigChanged() {
            var _config$value$selecte2, _config$value$notes2;
            attendanceForDate.value = config.value.attendanceOccurrenceDate && RockDateTime.parseISO(config.value.attendanceOccurrenceDate) || RockDateTime.now();
            locationGuid.value = config.value.locationGuid;
            scheduleGuid.value = config.value.scheduleGuid;
            attendanceOccurrenceGuid.value = config.value.attendanceOccurrenceGuid;
            attendanceOccurrenceTypeGuid.value = (_config$value$selecte2 = config.value.selectedAttendanceOccurrenceTypeValue) !== null && _config$value$selecte2 !== void 0 ? _config$value$selecte2 : undefined;
            didNotOccur.value = config.value.isDidNotMeetChecked;
            notes.value = (_config$value$notes2 = config.value.notes) !== null && _config$value$notes2 !== void 0 ? _config$value$notes2 : "";
            startRealTime();
          }
          function onGroupLocationPickerChanged(_x6) {
            return _onGroupLocationPickerChanged.apply(this, arguments);
          }
          function _onGroupLocationPickerChanged() {
            _onGroupLocationPickerChanged = _asyncToGenerator(function* (locationPickerSelection) {
              locationGuid.value = locationPickerSelection === null || locationPickerSelection === void 0 ? void 0 : locationPickerSelection.value;
              scheduleGuid.value = null;
              if (config.value.attendanceOccurrenceDateSelectionMode === GroupAttendanceDetailDateSelectionMode.ScheduledDatePicker) {
                attendanceForDate.value = RockDateTime.now();
              }
              yield getAttendanceOccurrence({
                attendanceOccurrenceDate: attendanceForDateIsoString.value,
                locationGuid: locationGuid.value,
                scheduleGuid: scheduleGuid.value
              });
            });
            return _onGroupLocationPickerChanged.apply(this, arguments);
          }
          function onGroupLocationScheduleDatePickerChanged(_x7) {
            return _onGroupLocationScheduleDatePickerChanged.apply(this, arguments);
          }
          function _onGroupLocationScheduleDatePickerChanged() {
            _onGroupLocationScheduleDatePickerChanged = _asyncToGenerator(function* (scheduleDatePickerSelection) {
              var selectedValue = scheduleDatePickerSelection === null || scheduleDatePickerSelection === void 0 ? void 0 : scheduleDatePickerSelection.value;
              if (selectedValue) {
                var _RockDateTime$parseIS;
                var _selectedValue$split = selectedValue.split("|"),
                  _selectedValue$split2 = _slicedToArray(_selectedValue$split, 2),
                  date = _selectedValue$split2[0],
                  guid = _selectedValue$split2[1];
                attendanceForDate.value = (_RockDateTime$parseIS = RockDateTime.parseISO(date)) !== null && _RockDateTime$parseIS !== void 0 ? _RockDateTime$parseIS : RockDateTime.now();
                scheduleGuid.value = guid;
              }
              yield getAttendanceOccurrence({
                attendanceOccurrenceDate: attendanceForDateIsoString.value,
                locationGuid: locationGuid.value,
                scheduleGuid: scheduleGuid.value
              });
            });
            return _onGroupLocationScheduleDatePickerChanged.apply(this, arguments);
          }
          function onGroupLocationSchedulePickerChanged(_x8) {
            return _onGroupLocationSchedulePickerChanged.apply(this, arguments);
          }
          function _onGroupLocationSchedulePickerChanged() {
            _onGroupLocationSchedulePickerChanged = _asyncToGenerator(function* (schedulePickerSelection) {
              scheduleGuid.value = schedulePickerSelection === null || schedulePickerSelection === void 0 ? void 0 : schedulePickerSelection.value;
              yield getAttendanceOccurrence({
                attendanceOccurrenceDate: attendanceForDateIsoString.value,
                locationGuid: locationGuid.value,
                scheduleGuid: scheduleGuid.value
              });
            });
            return _onGroupLocationSchedulePickerChanged.apply(this, arguments);
          }
          function onModalSave() {
            return _onModalSave.apply(this, arguments);
          }
          function _onModalSave() {
            _onModalSave = _asyncToGenerator(function* () {
              if (modalOptions.value) {
                var result = modalOptions.value.onSave();
                if (isPromise(result)) {
                  yield result;
                }
              }
            });
            return _onModalSave.apply(this, arguments);
          }
          function onShowNotesClicked() {
            isNotesShown.value = !isNotesShown.value;
          }
          function onPrintAttendanceRosterClicked() {
            return _onPrintAttendanceRosterClicked.apply(this, arguments);
          }
          function _onPrintAttendanceRosterClicked() {
            _onPrintAttendanceRosterClicked = _asyncToGenerator(function* () {
              yield printAttendanceRoster();
            });
            return _onPrintAttendanceRosterClicked.apply(this, arguments);
          }
          function onAttendanceUpdatedFromServer(message) {
            if (message.occurrenceGuid !== attendanceOccurrenceGuid.value) {
              return;
            }
            var attendance = attendances.value.find(attendance => areEqual(attendance.personGuid, message.personGuid));
            if (attendance) {
              attendance.didAttend = message.status === AttendanceStatus.DidAttend;
            } else {
              var bag = {
                attendanceGuid: message.attendanceGuid
              };
              invokeBlockAction("GetAttendance", {
                bag
              }).then(result => result === null || result === void 0 ? void 0 : result.data).then(attendance => {
                addToAttendancesArray(attendance);
              });
            }
          }
          function addToAttendancesArray(attendance) {
            if (!attendance) {
              return;
            }
            var existingAttendance = attendances.value.find(a => areEqual(a.personGuid, attendance.personGuid));
            if (existingAttendance) {
              existingAttendance.didAttend = attendance.didAttend;
              existingAttendance.itemTemplate = attendance.itemTemplate;
            } else {
              var _config$value$attenda2;
              config.value.attendances = [...((_config$value$attenda2 = config.value.attendances) !== null && _config$value$attenda2 !== void 0 ? _config$value$attenda2 : []), attendance];
            }
          }
          function onAttendanceOccurrenceUpdatedFromServer(message) {
            if (message.occurrenceGuid !== attendanceOccurrenceGuid.value) {
              return;
            }
            if (message.didNotOccur !== didNotOccur.value) {
              autoUpdateDidNotOccurSwitch.off();
              didNotOccur.value = !!message.didNotOccur;
              nextTick(() => autoUpdateDidNotOccurSwitch.on());
              if (!message.didNotOccur) {
                nextTick(() => autoMarkAttendanceSwitch.on());
              }
            }
            if (message.attendanceOccurrenceTypeGuid !== attendanceOccurrenceTypeGuid.value) {
              var _message$attendanceOc;
              autoUpdateAttendanceOccurrenceTypeSwitch.off();
              attendanceOccurrenceTypeGuid.value = (_message$attendanceOc = message.attendanceOccurrenceTypeGuid) !== null && _message$attendanceOc !== void 0 ? _message$attendanceOc : undefined;
              nextTick(() => autoUpdateAttendanceOccurrenceTypeSwitch.on());
            }
          }
          function getGroupAttendanceTopic(_x9, _x10) {
            return _getGroupAttendanceTopic.apply(this, arguments);
          }
          function _getGroupAttendanceTopic() {
            _getGroupAttendanceTopic = _asyncToGenerator(function* (groupGuid, attendanceOccurrenceGuid) {
              var topic = yield getTopic("Rock.RealTime.Topics.EntityUpdatedTopic");
              yield invokeBlockAction("SubscribeToRealTime", {
                connectionId: topic.connectionId,
                groupGuid
              });
              Object.defineProperty(topic, "attendanceOccurrenceGuid", {
                value: attendanceOccurrenceGuid,
                writable: false
              });
              Object.defineProperty(topic, "groupGuid", {
                value: groupGuid,
                writable: false
              });
              return topic;
            });
            return _getGroupAttendanceTopic.apply(this, arguments);
          }
          function getAttendanceOccurrence(_x11) {
            return _getAttendanceOccurrence.apply(this, arguments);
          }
          function _getAttendanceOccurrence() {
            _getAttendanceOccurrence = _asyncToGenerator(function* (bag) {
              autoSaveOff();
              errorMessage.value = "";
              var response = yield invokeBlockAction("Get", {
                bag
              });
              if (response !== null && response !== void 0 && response.data) {
                config.value = response.data;
                onConfigChanged();
              } else if (config) {
                config.value.errorMessage = (response === null || response === void 0 ? void 0 : response.errorMessage) || "An unexpected error occurred.";
              }
              nextTick(() => autoSaveOn());
            });
            return _getAttendanceOccurrence.apply(this, arguments);
          }
          function getOrCreateAttendanceOccurrence(_x12) {
            return _getOrCreateAttendanceOccurrence.apply(this, arguments);
          }
          function _getOrCreateAttendanceOccurrence() {
            _getOrCreateAttendanceOccurrence = _asyncToGenerator(function* (bag) {
              autoSaveOff();
              errorMessage.value = "";
              var response = yield invokeBlockAction("GetOrCreate", {
                bag
              });
              if (response !== null && response !== void 0 && response.data) {
                config.value = response.data;
                onConfigChanged();
              } else if (config) {
                config.value.errorMessage = (response === null || response === void 0 ? void 0 : response.errorMessage) || "An unexpected error occurred.";
              }
              nextTick(() => autoSaveOn());
            });
            return _getOrCreateAttendanceOccurrence.apply(this, arguments);
          }
          function markAttendance(_x13) {
            return _markAttendance.apply(this, arguments);
          }
          function _markAttendance() {
            _markAttendance = _asyncToGenerator(function* (bag) {
              if (!attendanceOccurrenceGuid.value) {
                yield getOrCreateAttendanceOccurrence({
                  attendanceOccurrenceDate: attendanceForDateIsoString.value,
                  locationGuid: locationGuid.value,
                  scheduleGuid: scheduleGuid.value,
                  updatedAttendances: attendances.value
                });
              } else if (attendances.value.some(a => {
                var _a$didAttend;
                return ((_a$didAttend = a.didAttend) !== null && _a$didAttend !== void 0 ? _a$didAttend : null) === null;
              })) {
                yield getOrCreateAttendanceOccurrence({
                  attendanceOccurrenceDate: attendanceForDateIsoString.value,
                  locationGuid: locationGuid.value,
                  scheduleGuid: scheduleGuid.value,
                  updatedAttendances: attendances.value.filter(attendance => {
                    var _attendance$didAttend;
                    return attendance.personAliasId === bag.personAliasId || ((_attendance$didAttend = attendance.didAttend) !== null && _attendance$didAttend !== void 0 ? _attendance$didAttend : null) === null;
                  })
                });
              } else {
                yield invokeBlockAction("MarkAttendance", {
                  bag
                });
              }
            });
            return _markAttendance.apply(this, arguments);
          }
          function printAttendanceRoster() {
            return _printAttendanceRoster.apply(this, arguments);
          }
          function _printAttendanceRoster() {
            _printAttendanceRoster = _asyncToGenerator(function* () {
              try {
                var _result$data3;
                isPrintingRoster.value = true;
                if (!attendanceOccurrenceGuid.value) {
                  yield getOrCreateAttendanceOccurrence({
                    attendanceOccurrenceDate: attendanceForDateIsoString.value,
                    attendanceOccurrenceGuid: attendanceOccurrenceGuid.value,
                    locationGuid: locationGuid.value,
                    scheduleGuid: scheduleGuid.value
                  });
                }
                var bag = {
                  attendanceOccurrenceDate: attendanceForDateIsoString.value,
                  attendanceOccurrenceGuid: attendanceOccurrenceGuid.value,
                  locationGuid: locationGuid.value,
                  scheduleGuid: scheduleGuid.value
                };
                var result = yield invokeBlockAction("PrintRoster", {
                  bag
                });
                if (result !== null && result !== void 0 && result.errorMessage) {
                  printRosterWarning.value = result.errorMessage;
                } else if (result !== null && result !== void 0 && (_result$data3 = result.data) !== null && _result$data3 !== void 0 && _result$data3.redirectUrl) {
                  window.location.href = result.data.redirectUrl;
                }
              } finally {
                isPrintingRoster.value = false;
              }
            });
            return _printAttendanceRoster.apply(this, arguments);
          }
          function updateAttendanceOccurrenceType(_x14) {
            return _updateAttendanceOccurrenceType.apply(this, arguments);
          }
          function _updateAttendanceOccurrenceType() {
            _updateAttendanceOccurrenceType = _asyncToGenerator(function* (bag) {
              if (!attendanceOccurrenceGuid.value) {
                yield getOrCreateAttendanceOccurrence({
                  attendanceOccurrenceDate: attendanceForDateIsoString.value,
                  locationGuid: locationGuid.value,
                  scheduleGuid: scheduleGuid.value,
                  updatedAttendanceOccurrenceTypeGuid: bag.attendanceOccurrenceTypeGuid
                });
              } else {
                yield invokeBlockAction("UpdateAttendanceOccurrenceType", {
                  bag
                });
              }
            });
            return _updateAttendanceOccurrenceType.apply(this, arguments);
          }
          function updateDidNotOccur(_x15) {
            return _updateDidNotOccur.apply(this, arguments);
          }
          function _updateDidNotOccur() {
            _updateDidNotOccur = _asyncToGenerator(function* (bag) {
              if (isSavingDidNotOccur.value) {
                return;
              }
              if (bag.didNotOccur) {
                autoMarkAttendanceSwitch.off();
              }
              try {
                isSavingDidNotOccur.value = true;
                if (!attendanceOccurrenceGuid.value) {
                  yield getOrCreateAttendanceOccurrence({
                    attendanceOccurrenceDate: attendanceForDateIsoString.value,
                    locationGuid: locationGuid.value,
                    scheduleGuid: scheduleGuid.value,
                    updatedDidNotOccur: bag.didNotOccur
                  });
                } else {
                  yield invokeBlockAction("UpdateDidNotOccur", {
                    bag
                  });
                }
              } finally {
                isSavingDidNotOccur.value = false;
              }
              if (!bag.didNotOccur) {
                autoMarkAttendanceSwitch.on();
              }
            });
            return _updateDidNotOccur.apply(this, arguments);
          }
          function updateNotes() {
            return _updateNotes.apply(this, arguments);
          }
          function _updateNotes() {
            _updateNotes = _asyncToGenerator(function* () {
              var bag = {
                attendanceOccurrenceGuid: attendanceOccurrenceGuid.value,
                notes: notes.value
              };
              if (!attendanceOccurrenceGuid.value) {
                yield getOrCreateAttendanceOccurrence({
                  attendanceOccurrenceDate: attendanceForDateIsoString.value,
                  locationGuid: locationGuid.value,
                  scheduleGuid: scheduleGuid.value,
                  updatedNotes: bag.notes
                });
              } else {
                yield invokeBlockAction("UpdateNotes", {
                  bag
                });
              }
            });
            return _updateNotes.apply(this, arguments);
          }
          function startRealTime() {
            return _startRealTime.apply(this, arguments);
          }
          function _startRealTime() {
            _startRealTime = _asyncToGenerator(function* () {
              var groupGuid = config.value.groupGuid;
              var occurrenceGuid = attendanceOccurrenceGuid.value;
              if (topic.value && areEqual(topic.value.groupGuid, groupGuid) && areEqual(topic.value.attendanceOccurrenceGuid, occurrenceGuid)) {
                return;
              }
              if (!config.value.groupGuid) {
                throw "Unable to start real-time";
              }
              if (!attendanceOccurrenceGuid.value) {
                return;
              }
              var groupAttendanceTopic = yield getGroupAttendanceTopic(config.value.groupGuid, attendanceOccurrenceGuid.value);
              groupAttendanceTopic.onDisconnected(_asyncToGenerator(function* () {
                yield startRealTime();
              }));
              groupAttendanceTopic.on("attendanceUpdated", onAttendanceUpdatedFromServer);
              groupAttendanceTopic.on("attendanceOccurrenceUpdated", onAttendanceOccurrenceUpdatedFromServer);
              return;
            });
            return _startRealTime.apply(this, arguments);
          }
          function autoSaveOff() {
            autoMarkAttendanceSwitch.off();
            autoUpdateDidNotOccurSwitch.off();
            autoUpdateAttendanceOccurrenceTypeSwitch.off();
            autoUpdateNotesSwitch.off();
            isAutoSaveOn.value = false;
          }
          function autoSaveOn() {
            autoMarkAttendanceSwitch.on();
            autoUpdateDidNotOccurSwitch.on();
            autoUpdateAttendanceOccurrenceTypeSwitch.on();
            autoUpdateNotesSwitch.on();
            isAutoSaveOn.value = true;
          }
          function debouncePromise(func, delayMs) {
            var promise = new PromiseCompletionSource();
            var internalDebounce = debounce(() => func().then(() => promise.resolve()), delayMs);
            return _asyncToGenerator(function* () {
              internalDebounce();
              yield promise.promise;
            });
          }
          autoSaveOn();
          if (config.value.attendanceOccurrenceGuid) {
            startRealTime();
          }
          onConfigurationValuesChanged(useReloadBlock());
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [config.value.isAuthorizedGroupNotFoundError ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "danger"
            }, {
              default: withCtx(() => [_hoisted_1, _hoisted_2]),
              _: 1
            })) : createCommentVNode("v-if", true), config.value.isNoAttendanceOccurrencesError ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger"
            }, {
              default: withCtx(() => [_hoisted_3, _hoisted_4]),
              _: 1
            })) : createCommentVNode("v-if", true), config.value.errorMessage ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 2,
              alertType: "danger"
            }, {
              default: withCtx(() => [_hoisted_5, createElementVNode("p", null, toDisplayString(config.value.errorMessage), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), !config.value.isConfigError ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(unref(Panel), {
              title: unref(panelTitle)
            }, createSlots({
              preBody: withCtx(() => [createElementVNode("div", _hoisted_8, [createElementVNode("div", _hoisted_9, [createElementVNode("div", _hoisted_10, [config.value.attendanceOccurrenceDateSelectionMode === unref(GroupAttendanceDetailDateSelectionMode).DatePicker ? (openBlock(), createBlock(unref(DatePicker), {
                key: 0,
                modelValue: unref(attendanceForDateString),
                "onUpdate:modelValue": onAttendanceForDateUpdated,
                disabled: !isAutoSaveOn.value,
                displayCurrentOption: false,
                isCurrentDateOffset: false,
                disableForceParse: false,
                disableShowOnFocus: false,
                disableHighlightToday: false,
                disallowFutureDateSelection: config.value.isFutureOccurrenceDateSelectionRestricted,
                disallowPastDateSelection: false,
                label: "Attendance For"
              }, null, 8, ["modelValue", "disabled", "disallowFutureDateSelection"])) : config.value.attendanceOccurrenceDateSelectionMode === unref(GroupAttendanceDetailDateSelectionMode).Readonly ? (openBlock(), createElementBlock("div", _hoisted_11, [createVNode(unref(RockLabel), null, {
                default: withCtx(() => [_hoisted_12]),
                _: 1
              }), createElementVNode("div", null, toDisplayString(unref(attendanceForDateString)), 1)])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_13, [config.value.locationSelectionMode === unref(GroupAttendanceDetailLocationSelectionMode).GroupLocationPicker ? (openBlock(), createBlock(unref(script$4), {
                key: 0,
                disabled: !isAutoSaveOn.value,
                groupGuid: config.value.groupGuid,
                label: "Location",
                showBlankItem: true,
                "onUpdate:modelValue": onGroupLocationPickerChanged
              }, null, 8, ["disabled", "groupGuid"])) : config.value.locationSelectionMode === unref(GroupAttendanceDetailLocationSelectionMode).Readonly ? (openBlock(), createElementBlock("div", _hoisted_14, [createVNode(unref(RockLabel), null, {
                default: withCtx(() => [_hoisted_15]),
                _: 1
              }), createElementVNode("div", null, toDisplayString(config.value.locationLabel), 1)])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_16, [locationGuid.value || !config.value.isLocationRequired ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [config.value.attendanceOccurrenceDateSelectionMode === unref(GroupAttendanceDetailDateSelectionMode).ScheduledDatePicker ? (openBlock(), createBlock(unref(script$3), {
                key: 0,
                "onUpdate:modelValue": onGroupLocationScheduleDatePickerChanged,
                date: config.value.isDateIncludedInPickFromSchedule ? unref(RockDateTime).parseISO(config.value.attendanceOccurrenceDate || '') : null,
                disabled: !isAutoSaveOn.value,
                groupGuid: config.value.groupGuid,
                label: "Attendance For",
                locationGuid: locationGuid.value,
                numberOfPreviousDaysToShow: config.value.numberOfPreviousDaysToShow,
                showBlankItem: true
              }, null, 8, ["date", "disabled", "groupGuid", "locationGuid", "numberOfPreviousDaysToShow"])) : config.value.scheduleSelectionMode === unref(GroupAttendanceDetailScheduleSelectionMode).GroupLocationSchedulePicker && locationGuid.value ? (openBlock(), createBlock(unref(script$2), {
                key: 1,
                "onUpdate:modelValue": onGroupLocationSchedulePickerChanged,
                disabled: !isAutoSaveOn.value,
                groupGuid: config.value.groupGuid,
                label: "Schedule",
                locationGuid: locationGuid.value,
                isoDateString: unref(attendanceForDateIsoString),
                showBlankItem: true
              }, null, 8, ["disabled", "groupGuid", "locationGuid", "isoDateString"])) : config.value.scheduleSelectionMode === unref(GroupAttendanceDetailScheduleSelectionMode).Readonly ? (openBlock(), createElementBlock("div", _hoisted_17, [createVNode(unref(RockLabel), null, {
                default: withCtx(() => [_hoisted_18]),
                _: 1
              }), createElementVNode("div", null, toDisplayString(config.value.scheduleLabel), 1)])) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true)])]), createVNode(unref(TransitionVerticalCollapse), {
                speed: "fast"
              }, {
                default: withCtx(() => [createElementVNode("div", _hoisted_19, [createElementVNode("div", _hoisted_20, [unref(isDidNotMeetShown) ? (openBlock(), createBlock(unref(InlineCheckBox), {
                  key: 0,
                  class: "mb-0",
                  modelValue: didNotOccur.value,
                  disabled: isSavingDidNotOccur.value || config.value.isDidNotMeetDisabled || !isAutoSaveOn.value,
                  label: "We Did Not Meet",
                  "onUpdate:modelValue": onDidNotOccurChanged
                }, null, 8, ["modelValue", "disabled"])) : createCommentVNode("v-if", true), config.value.attendanceOccurrenceTypes && config.value.isAttendanceOccurrenceTypesSectionShown ? (openBlock(), createBlock(unref(RadioButtonList), {
                  key: 1,
                  disabled: !isAutoSaveOn.value,
                  formGroupClasses: 'mb-0' + (unref(isDidNotMeetShown) ? ' ml-3' : ''),
                  horizontal: true,
                  items: config.value.attendanceOccurrenceTypes,
                  label: config.value.attendanceOccurrenceTypesSectionLabel,
                  modelValue: attendanceOccurrenceTypeGuid.value,
                  "onUpdate:modelValue": onAttendanceOccurrenceTypeChanged
                }, null, 8, ["disabled", "formGroupClasses", "items", "label", "modelValue"])) : createCommentVNode("v-if", true), !didNotOccur.value ? (openBlock(), createElementBlock("div", _hoisted_21, [config.value.isNewAttendeeAdditionAllowed ? (openBlock(), createBlock(unref(PersonPicker), {
                  key: 0,
                  disabled: !isAutoSaveOn.value,
                  formGroupClasses: "mb-0",
                  label: unref(addPersonAsLabel),
                  modelValue: addPersonSelection.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => onAddPerson($event))
                }, null, 8, ["disabled", "label", "modelValue"])) : createCommentVNode("v-if", true), config.value.addGroupMemberPageUrl ? (openBlock(), createBlock(unref(RockButton), {
                  key: 1,
                  btnType: "default",
                  disabled: !isAutoSaveOn.value,
                  onClick: onAddGroupMemberClicked
                }, {
                  default: withCtx(() => [_hoisted_22]),
                  _: 1
                }, 8, ["disabled"])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true)])])]),
                _: 1
              })])]),
              default: withCtx(() => [errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: "danger"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
                _: 1
              })) : createCommentVNode("v-if", true), !isPrintingRoster.value && printRosterWarning.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 1,
                alertType: "warning"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(printRosterWarning.value), 1)]),
                _: 1
              })) : createCommentVNode("v-if", true), createVNode(unref(TransitionVerticalCollapse), {
                speed: "fast"
              }, {
                default: withCtx(() => [createElementVNode("div", null, [createVNode(unref(TransitionVerticalCollapse), {
                  speed: "fast"
                }, {
                  default: withCtx(() => [withDirectives(createElementVNode("div", null, [createElementVNode("div", _hoisted_23, [createElementVNode("div", _hoisted_24, [createVNode(unref(script$9), {
                    modelValue: didAttendFilter.value,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => didAttendFilter.value = $event),
                    attendances: unref(attendances)
                  }, null, 8, ["modelValue", "attendances"]), createVNode(unref(script$1), {
                    modelValue: searchFilter.value,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => searchFilter.value = $event),
                    class: "flex-grow-1 mt-2 mt-sm-0 ml-sm-2"
                  }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_25, [createElementVNode("div", _hoisted_26, [!config.value.isNotesSectionHidden ? (openBlock(), createBlock(unref(RockButton), {
                    key: 0,
                    btnSize: "sm",
                    btnType: isNotesShown.value ? 'primary' : 'default',
                    disabled: !isAutoSaveOn.value,
                    onClick: _cache[5] || (_cache[5] = $event => onShowNotesClicked())
                  }, {
                    default: withCtx(() => [_hoisted_27, _hoisted_28]),
                    _: 1
                  }, 8, ["btnType", "disabled"])) : createCommentVNode("v-if", true), config.value.isRosterDownloadShown ? (openBlock(), createBlock(unref(RockButton), {
                    key: 1,
                    btnType: "default",
                    btnSize: "sm",
                    disabled: !isAutoSaveOn.value,
                    onClick: _cache[6] || (_cache[6] = $event => onPrintAttendanceRosterClicked())
                  }, {
                    default: withCtx(() => [_hoisted_29, _hoisted_30]),
                    _: 1
                  }, 8, ["disabled"])) : createCommentVNode("v-if", true)])])]), !config.value.isNotesSectionHidden ? (openBlock(), createBlock(unref(TransitionVerticalCollapse), {
                    key: 0,
                    speed: "fast"
                  }, {
                    default: withCtx(() => [withDirectives(createElementVNode("div", null, [createVNode(unref(TextBox), {
                      modelValue: notes.value,
                      "onUpdate:modelValue": [_cache[7] || (_cache[7] = $event => notes.value = $event), unref(autoUpdateNotes)],
                      disabled: !isAutoSaveOn.value,
                      label: config.value.notesSectionLabel || 'Notes',
                      rows: 3,
                      textMode: "multiline"
                    }, null, 8, ["modelValue", "disabled", "label", "onUpdate:modelValue"])], 512), [[vShow, isNotesShown.value]])]),
                    _: 1
                  })) : createCommentVNode("v-if", true), !unref(isLongListDisabled) ? (openBlock(), createBlock(unref(script$8), {
                    key: 1,
                    modelValue: rosterFilter.value,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => rosterFilter.value = $event),
                    attendances: unref(attendances),
                    isFilterByFirstNameInitial: false,
                    isMultiselect: false
                  }, null, 8, ["modelValue", "attendances"])) : createCommentVNode("v-if", true), createVNode(unref(script$6), {
                    attendances: unref(attendances),
                    class: "form-group",
                    disabled: !isAutoSaveOn.value,
                    filterBy: unref(attendanceFilterByDelegate),
                    groupBy: unref(attendanceGroupByDelegate),
                    isLongListDisabled: unref(isLongListDisabled),
                    sortBy: attendanceSortByDelegate.value,
                    onAttendanceChanged: _cache[9] || (_cache[9] = $event => onAttendanceChanged($event))
                  }, null, 8, ["attendances", "disabled", "filterBy", "groupBy", "isLongListDisabled", "sortBy"])], 512), [[vShow, !didNotOccur.value]])]),
                  _: 1
                })])]),
                _: 1
              })]),
              footerActions: withCtx(() => [!unref(isBackButtonHidden) ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                onClick: _cache[10] || (_cache[10] = $event => onBackClicked())
              }, {
                default: withCtx(() => [_hoisted_31]),
                _: 1
              })) : createCommentVNode("v-if", true)]),
              _: 2
            }, [config.value.isCampusFilteringAllowed ? {
              name: "headerActions",
              fn: withCtx(() => [createElementVNode("div", _hoisted_7, [createVNode(unref(script$5), {
                modelValue: campusFilter.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => campusFilter.value = $event),
                campusGuid: campusGuid.value,
                "onUpdate:campusGuid": _cache[1] || (_cache[1] = $event => campusGuid.value = $event)
              }, null, 8, ["modelValue", "campusGuid"])])])
            } : undefined]), 1032, ["title"])])) : createCommentVNode("v-if", true), modalOptions.value ? (openBlock(), createBlock(unref(Modal), {
              key: 4,
              modelValue: modalOptions.value.isOpen,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => modalOptions.value.isOpen = $event),
              cancelText: modalOptions.value.cancelText,
              saveText: modalOptions.value.saveText,
              onSave: onModalSave
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(modalOptions.value.text), 1)]),
              _: 1
            }, 8, ["modelValue", "cancelText", "saveText"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      var css_248z = ".attendance-header[data-v-0f79ab3a]{background-color:#fbfbfb;border-bottom:1px solid #dfe0e1;padding:15px}.attendance-footer[data-v-0f79ab3a]{border-top:1px solid #dfe0e1;margin-left:-15px;margin-right:-15px}";
      styleInject(css_248z);

      script.__scopeId = "data-v-0f79ab3a";
      script.__file = "src/Group/groupAttendanceDetail.obs";

    })
  };
}));
//# sourceMappingURL=groupAttendanceDetail.obs.js.map
