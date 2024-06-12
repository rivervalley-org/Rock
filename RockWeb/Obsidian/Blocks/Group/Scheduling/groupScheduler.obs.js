System.register(['vue', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Enums/Controls/alertType', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/tooltip', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Enums/Blocks/Group/Scheduling/updateSchedulePreferenceMode', '@Obsidian/Directives/dragScroll', '@Obsidian/Utility/http', '@Obsidian/Controls/rockFormField.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/buttonGroup.obs', '@Obsidian/Controls/dataViewPicker.obs', '@Obsidian/Controls/groupPicker.obs', '@Obsidian/Controls/loading.obs', '@Obsidian/Enums/Blocks/Group/Scheduling/resourceListSourceType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/SystemGuids/entityType', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/guid', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Enums/Event/scheduledAttendanceItemStatus', '@Obsidian/Controls/loadingIndicator.obs', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/rockDateTime', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Controls/slidingDateRangePicker.obs', '@Obsidian/Controls/modalAlert.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Enums/Controls/modalAlertType'], (function (exports) {
  'use strict';
  var createTextVNode, createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, isRef, withCtx, createVNode, toDisplayString, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, nextTick, Fragment, renderList, withDirectives, vModelCheckbox, inject, provide, onUnmounted, DropDownList, Modal, NotificationBox, AlertType, useInvokeBlockAction, useConfigurationValues, getSecurityGrant, useReloadBlock, provideSecurityGrant, onConfigurationValuesChanged, useVModelPassthrough, tooltip, DatePicker, RadioButtonList, UpdateSchedulePreferenceMode, UpdateSchedulePreferenceModeDescription, NoDragScroll, DragScroll, useHttp, RockFormField, TextBox, ButtonGroup, DataViewPicker, GroupPicker, Loading, ResourceListSourceType, ResourceListSourceTypeDescription, BtnSize, EntityType, toNumber, toNumberOrNull, toOrdinalSuffix, toGuidOrNull, newGuid, RockButton, ScheduledAttendanceItemStatusDescription, ScheduledAttendanceItemStatus, LoadingIndicator, pluralize, pluralConditional, RockDateTime, RockLabel, SlidingDateRangePicker, ModalAlert, Panel, ModalAlertType;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      toDisplayString = module.toDisplayString;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      normalizeStyle = module.normalizeStyle;
      createCommentVNode = module.createCommentVNode;
      nextTick = module.nextTick;
      Fragment = module.Fragment;
      renderList = module.renderList;
      withDirectives = module.withDirectives;
      vModelCheckbox = module.vModelCheckbox;
      inject = module.inject;
      provide = module.provide;
      onUnmounted = module.onUnmounted;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      AlertType = module.AlertType;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      useReloadBlock = module.useReloadBlock;
      provideSecurityGrant = module.provideSecurityGrant;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      tooltip = module.tooltip;
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      UpdateSchedulePreferenceMode = module.UpdateSchedulePreferenceMode;
      UpdateSchedulePreferenceModeDescription = module.UpdateSchedulePreferenceModeDescription;
    }, function (module) {
      NoDragScroll = module.NoDragScroll;
      DragScroll = module.DragScroll;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      ButtonGroup = module["default"];
    }, function (module) {
      DataViewPicker = module["default"];
    }, function (module) {
      GroupPicker = module["default"];
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      ResourceListSourceType = module.ResourceListSourceType;
      ResourceListSourceTypeDescription = module.ResourceListSourceTypeDescription;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      toNumber = module.toNumber;
      toNumberOrNull = module.toNumberOrNull;
      toOrdinalSuffix = module.toOrdinalSuffix;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      newGuid = module.newGuid;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      ScheduledAttendanceItemStatusDescription = module.ScheduledAttendanceItemStatusDescription;
      ScheduledAttendanceItemStatus = module.ScheduledAttendanceItemStatus;
    }, function (module) {
      LoadingIndicator = module["default"];
    }, function (module) {
      pluralize = module.pluralize;
      pluralConditional = module.pluralConditional;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      SlidingDateRangePicker = module["default"];
    }, function (module) {
      ModalAlert = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      ModalAlertType = module.ModalAlertType;
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

      var _hoisted_1$e = createTextVNode(" Configure the settings below to clone schedules for a different week. ");
      var _hoisted_2$c = {
        key: 1,
        class: "row"
      };
      var _hoisted_3$a = {
        class: "col-md-6"
      };
      var _hoisted_4$8 = createElementVNode("h3", null, "Source Settings", -1);
      var _hoisted_5$8 = {
        class: "col-md-6"
      };
      var _hoisted_6$7 = createElementVNode("h3", null, "Destination Settings", -1);
      var script$e = defineComponent({
        name: 'cloneSchedules.partial',
        props: {
          isVisible: {
            type: Boolean,
            required: true
          },
          filters: {
            type: Object,
            required: true
          }
        },
        emits: ["update:isVisible", "cloneSchedules"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var isVisible = useVModelPassthrough(props, "isVisible", emit);
          var isLoadingCloneSettings = ref(false);
          var loadCloneSettingsErrorMessage = ref("");
          var cloneSettings = ref(null);
          var selectedSourceDate = ref("");
          var selectedDestinationDate = ref("");
          var selectedGroups = ref([]);
          var selectedLocations = ref([]);
          var selectedSchedules = ref([]);
          var isBusy = computed(() => {
            return isLoadingCloneSettings.value;
          });
          var isCloningDisabled = computed(() => {
            return isBusy.value || !cloneSettings.value || !!loadCloneSettingsErrorMessage.value;
          });
          var availableSourceDates = computed(() => {
            var _cloneSettings$value$, _cloneSettings$value;
            return (_cloneSettings$value$ = (_cloneSettings$value = cloneSettings.value) === null || _cloneSettings$value === void 0 ? void 0 : _cloneSettings$value.availableSourceDates) !== null && _cloneSettings$value$ !== void 0 ? _cloneSettings$value$ : [];
          });
          var availableDestinationDates = computed(() => {
            var _cloneSettings$value$2, _cloneSettings$value2;
            return (_cloneSettings$value$2 = (_cloneSettings$value2 = cloneSettings.value) === null || _cloneSettings$value2 === void 0 ? void 0 : _cloneSettings$value2.availableDestinationDates) !== null && _cloneSettings$value$2 !== void 0 ? _cloneSettings$value$2 : [];
          });
          var availableGroups = computed(() => {
            var _cloneSettings$value$3, _cloneSettings$value3;
            return (_cloneSettings$value$3 = (_cloneSettings$value3 = cloneSettings.value) === null || _cloneSettings$value3 === void 0 ? void 0 : _cloneSettings$value3.availableGroups) !== null && _cloneSettings$value$3 !== void 0 ? _cloneSettings$value$3 : [];
          });
          var availableLocations = computed(() => {
            var _cloneSettings$value$4, _cloneSettings$value4;
            return (_cloneSettings$value$4 = (_cloneSettings$value4 = cloneSettings.value) === null || _cloneSettings$value4 === void 0 ? void 0 : _cloneSettings$value4.availableLocations) !== null && _cloneSettings$value$4 !== void 0 ? _cloneSettings$value$4 : [];
          });
          var availableSchedules = computed(() => {
            var _cloneSettings$value$5, _cloneSettings$value5;
            return (_cloneSettings$value$5 = (_cloneSettings$value5 = cloneSettings.value) === null || _cloneSettings$value5 === void 0 ? void 0 : _cloneSettings$value5.availableSchedules) !== null && _cloneSettings$value$5 !== void 0 ? _cloneSettings$value$5 : [];
          });
          function getCloneSettings() {
            return _getCloneSettings.apply(this, arguments);
          }
          function _getCloneSettings() {
            _getCloneSettings = _asyncToGenerator(function* () {
              var _cloneSettings$value$6, _cloneSettings$value6, _cloneSettings$value$7, _cloneSettings$value7, _cloneSettings$value$8, _cloneSettings$value8, _cloneSettings$value$9, _cloneSettings$value9, _cloneSettings$value$10, _cloneSettings$value10;
              if (isLoadingCloneSettings.value) {
                return;
              }
              isLoadingCloneSettings.value = true;
              loadCloneSettingsErrorMessage.value = "";
              var result = yield invokeBlockAction("GetCloneSettings", {
                bag: props.filters
              });
              isLoadingCloneSettings.value = false;
              if (!result.isSuccess) {
                loadCloneSettingsErrorMessage.value = result.errorMessage || "Unknown error while trying to load clone settings.";
                return;
              }
              cloneSettings.value = result.data;
              selectedSourceDate.value = (_cloneSettings$value$6 = (_cloneSettings$value6 = cloneSettings.value) === null || _cloneSettings$value6 === void 0 ? void 0 : _cloneSettings$value6.selectedSourceDate) !== null && _cloneSettings$value$6 !== void 0 ? _cloneSettings$value$6 : "";
              selectedDestinationDate.value = (_cloneSettings$value$7 = (_cloneSettings$value7 = cloneSettings.value) === null || _cloneSettings$value7 === void 0 ? void 0 : _cloneSettings$value7.selectedDestinationDate) !== null && _cloneSettings$value$7 !== void 0 ? _cloneSettings$value$7 : "";
              selectedGroups.value = (_cloneSettings$value$8 = (_cloneSettings$value8 = cloneSettings.value) === null || _cloneSettings$value8 === void 0 ? void 0 : _cloneSettings$value8.selectedGroups) !== null && _cloneSettings$value$8 !== void 0 ? _cloneSettings$value$8 : [];
              selectedLocations.value = (_cloneSettings$value$9 = (_cloneSettings$value9 = cloneSettings.value) === null || _cloneSettings$value9 === void 0 ? void 0 : _cloneSettings$value9.selectedLocations) !== null && _cloneSettings$value$9 !== void 0 ? _cloneSettings$value$9 : [];
              selectedSchedules.value = (_cloneSettings$value$10 = (_cloneSettings$value10 = cloneSettings.value) === null || _cloneSettings$value10 === void 0 ? void 0 : _cloneSettings$value10.selectedSchedules) !== null && _cloneSettings$value$10 !== void 0 ? _cloneSettings$value$10 : [];
            });
            return _getCloneSettings.apply(this, arguments);
          }
          function onSave() {
            emit("cloneSchedules", {
              availableSourceDates: availableSourceDates.value,
              selectedSourceDate: selectedSourceDate.value,
              availableDestinationDates: availableDestinationDates.value,
              selectedDestinationDate: selectedDestinationDate.value,
              availableGroups: availableGroups.value,
              selectedGroups: selectedGroups.value,
              availableLocations: availableLocations.value,
              selectedLocations: selectedLocations.value,
              availableSchedules: availableSchedules.value,
              selectedSchedules: selectedSchedules.value
            });
            isVisible.value = false;
          }
          watch(isVisible, () => {
            if (isVisible.value) {
              getCloneSettings();
            } else {
              isLoadingCloneSettings.value = false;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(isVisible) ? isVisible.value = $event : null),
              title: "Clone Schedules",
              saveText: "Clone",
              isSaveButtonDisabled: unref(isCloningDisabled),
              onSave: onSave
            }, {
              default: withCtx(() => [createVNode(unref(NotificationBox), {
                alertType: unref(AlertType).Info
              }, {
                default: withCtx(() => [_hoisted_1$e]),
                _: 1
              }, 8, ["alertType"]), loadCloneSettingsErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: unref(AlertType).Warning
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(loadCloneSettingsErrorMessage.value), 1)]),
                _: 1
              }, 8, ["alertType"])) : (openBlock(), createElementBlock("div", _hoisted_2$c, [createElementVNode("div", _hoisted_3$a, [_hoisted_4$8, createVNode(unref(DropDownList), {
                modelValue: selectedSourceDate.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => selectedSourceDate.value = $event),
                label: "Source Week Of",
                rules: "required",
                items: unref(availableSourceDates),
                loading: unref(isBusy)
              }, null, 8, ["modelValue", "items", "loading"]), createVNode(unref(DropDownList), {
                modelValue: selectedGroups.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => selectedGroups.value = $event),
                label: "Groups",
                items: unref(availableGroups),
                multiple: true,
                loading: unref(isBusy)
              }, null, 8, ["modelValue", "items", "loading"]), createVNode(unref(DropDownList), {
                modelValue: selectedLocations.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => selectedLocations.value = $event),
                label: "Locations",
                items: unref(availableLocations),
                multiple: true,
                loading: unref(isBusy)
              }, null, 8, ["modelValue", "items", "loading"]), createVNode(unref(DropDownList), {
                modelValue: selectedSchedules.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => selectedSchedules.value = $event),
                label: "Schedules",
                items: unref(availableSchedules),
                multiple: true,
                loading: unref(isBusy)
              }, null, 8, ["modelValue", "items", "loading"])]), createElementVNode("div", _hoisted_5$8, [_hoisted_6$7, createVNode(unref(DropDownList), {
                modelValue: selectedDestinationDate.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => selectedDestinationDate.value = $event),
                label: "Destination Week Of",
                rules: "required",
                items: unref(availableDestinationDates),
                loading: unref(isBusy)
              }, null, 8, ["modelValue", "items", "loading"])])]))]),
              _: 1
            }, 8, ["modelValue", "isSaveButtonDisabled"]);
          };
        }
      });

      script$e.__file = "src/Group/Scheduling/GroupScheduler/cloneSchedules.partial.obs";

      var UnassignedResourceCounts = Symbol("unassigned-resource-counts");
      var ReportAssignedResources = Symbol("report-assigned-resources");
      var OccurrenceDate = Symbol("occurrence-date");
      var OccurrenceDateTitle = Symbol("occurrence-date-title");
      var ScheduleId = Symbol("schedule-id");
      var ReloadAllOccurrences = Symbol("reload-all-occurrences");
      var ReloadScheduleOccurrences = Symbol("reload-schedule-occurrences");
      var ReloadOccurrencesContainingResource = Symbol("reload-occurrences-containing-resource");
      var ProgressState = {
        danger: "danger",
        critical: "critical",
        warning: "warning",
        success: "success"
      };
      var Preference = {
        matches: "matches-preference",
        notMatches: "not-matches-preference",
        none: "no-preference"
      };
      var ResourceAction = function (ResourceAction) {
        ResourceAction[ResourceAction["MarkConfirmed"] = 0] = "MarkConfirmed";
        ResourceAction[ResourceAction["MarkPending"] = 1] = "MarkPending";
        ResourceAction[ResourceAction["MarkDeclined"] = 2] = "MarkDeclined";
        ResourceAction[ResourceAction["ResendConfirmation"] = 3] = "ResendConfirmation";
        ResourceAction[ResourceAction["UpdatePreference"] = 4] = "UpdatePreference";
        ResourceAction[ResourceAction["Remove"] = 5] = "Remove";
        return ResourceAction;
      }({});
      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["CopyLink"] = "CopyLink";
        NavigationUrlKey["RosterPage"] = "RosterPage";
        return NavigationUrlKey;
      }({});

      var _hoisted_1$d = ["data-original-title"];
      var script$d = defineComponent({
        name: 'progressBar.partial',
        props: {
          progress: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var progressBarElement = ref(null);
          var progressBarTooltip = computed(() => {
            return "\n<div class='progress-bar-tooltip'>\n    <div class='progress-bar-tooltip-configured'>\n        <span class=\"progress-bar-tooltip-label\">Configured</span>\n        <div class='progress-bar-tooltip-counts'>\n            <span>\n                <i class='far fa-minus-square'></i>\n                ".concat(minimumCapacity.value === 0 ? "-" : minimumCapacity.value, "\n            </span>\n            <span>\n                <i class='far fa-star'></i>\n                ").concat(desiredCapacity.value === 0 ? "-" : desiredCapacity.value, "\n            </span>\n            <span>\n                <i class='far fa-plus-square'></i>\n                ").concat(maximumCapacity.value === 0 ? "-" : maximumCapacity.value, "\n            </span>\n        </div>\n    </div>\n    <div class='progress-bar-tooltip-responses'>\n        <span class=\"progress-bar-tooltip-label\">Responses</span>\n        <div class='progress-bar-tooltip-counts'>\n            <span><i class='far fa-calendar-check'></i> ").concat(confirmedCount.value, "</span>\n            <span><i class='fa fa-question'></i> ").concat(pendingCount.value, "</span>\n            <span><i class='far fa-calendar-times'></i> ").concat(declinedCount.value, "</span>\n        </div>\n    </div>\n</div>");
          });
          var minimumCapacity = computed(() => {
            var _props$progress$minim, _props$progress;
            return (_props$progress$minim = (_props$progress = props.progress) === null || _props$progress === void 0 ? void 0 : _props$progress.minimumCapacity) !== null && _props$progress$minim !== void 0 ? _props$progress$minim : 0;
          });
          var minimumPercentage = computed(() => {
            return getPercentageOfWhole(minimumCapacity.value);
          });
          var showMinimumThreshold = computed(() => {
            return minimumPercentage.value > 0 && minimumPercentage.value < 100;
          });
          var desiredCapacity = computed(() => {
            var _props$progress$desir, _props$progress2;
            return (_props$progress$desir = (_props$progress2 = props.progress) === null || _props$progress2 === void 0 ? void 0 : _props$progress2.desiredCapacity) !== null && _props$progress$desir !== void 0 ? _props$progress$desir : 0;
          });
          var desiredPercentage = computed(() => {
            return getPercentageOfWhole(desiredCapacity.value);
          });
          var showDesiredThreshold = computed(() => {
            return desiredPercentage.value > 0 && desiredPercentage.value < 100;
          });
          var maximumCapacity = computed(() => {
            var _props$progress$maxim, _props$progress3;
            return (_props$progress$maxim = (_props$progress3 = props.progress) === null || _props$progress3 === void 0 ? void 0 : _props$progress3.maximumCapacity) !== null && _props$progress$maxim !== void 0 ? _props$progress$maxim : 0;
          });
          var maximumPercentage = computed(() => {
            return getPercentageOfWhole(maximumCapacity.value);
          });
          var showMaximumThreshold = computed(() => {
            return maximumPercentage.value > 0 && maximumPercentage.value < 100 && totalCount.value > maximumCapacity.value;
          });
          var confirmedCount = computed(() => {
            var _props$progress$confi, _props$progress4;
            return (_props$progress$confi = (_props$progress4 = props.progress) === null || _props$progress4 === void 0 ? void 0 : _props$progress4.confirmedCount) !== null && _props$progress$confi !== void 0 ? _props$progress$confi : 0;
          });
          var confirmedPercentage = computed(() => {
            return getPercentageOfWhole(confirmedCount.value);
          });
          var pendingCount = computed(() => {
            var _props$progress$pendi, _props$progress5;
            return (_props$progress$pendi = (_props$progress5 = props.progress) === null || _props$progress5 === void 0 ? void 0 : _props$progress5.pendingCount) !== null && _props$progress$pendi !== void 0 ? _props$progress$pendi : 0;
          });
          var pendingPercentage = computed(() => {
            var pendingCountForPercentage = pendingCount.value + confirmedCount.value;
            return getPercentageOfWhole(pendingCountForPercentage);
          });
          var declinedCount = computed(() => {
            var _props$progress$decli, _props$progress6;
            return (_props$progress$decli = (_props$progress6 = props.progress) === null || _props$progress6 === void 0 ? void 0 : _props$progress6.declinedCount) !== null && _props$progress$decli !== void 0 ? _props$progress$decli : 0;
          });
          var totalCount = computed(() => {
            return confirmedCount.value + pendingCount.value;
          });
          var state = computed(() => {
            var min = minimumCapacity.value;
            var desired = desiredCapacity.value;
            var max = maximumCapacity.value;
            var confirmed = confirmedCount.value;
            var progressState = ProgressState.danger;
            if (confirmed > 0) {
              progressState = ProgressState.success;
              if (max > 0 && confirmed > max) {
                progressState = ProgressState.critical;
              } else if (confirmed < min) {
                progressState = ProgressState.danger;
              } else if (confirmed < desired) {
                progressState = ProgressState.warning;
              }
            }
            return progressState;
          });
          var whole = computed(() => {
            var min = minimumCapacity.value;
            var desired = desiredCapacity.value;
            var max = maximumCapacity.value;
            var filled = totalCount.value;
            var whole = 0;
            if (max > 0) {
              whole = max;
            } else if (desired > 0) {
              whole = desired;
            } else if (min > 0) {
              whole = min;
            }
            if (filled > whole) {
              whole = filled;
            }
            return whole;
          });
          function getPercentageOfWhole(part) {
            if (whole.value > 0) {
              var percentage = Math.floor(part / whole.value * 100);
              return percentage > 100 ? 100 : percentage;
            }
            return 0;
          }
          function configureTooltip() {
            nextTick(() => {
              if (progressBarElement.value) {
                tooltip(progressBarElement.value, {
                  html: true
                });
              }
            });
          }
          watch([minimumCapacity, desiredCapacity, maximumCapacity, confirmedCount, pendingCount, declinedCount], () => {
            configureTooltip();
          });
          configureTooltip();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              ref_key: "progressBarElement",
              ref: progressBarElement,
              class: normalizeClass("progress text-".concat(unref(state), " m-0 flex-fill")),
              role: "progressbar",
              "aria-label": "Group Scheduler Progress",
              "data-toggle": "tooltip",
              "data-original-title": unref(progressBarTooltip)
            }, [createElementVNode("div", {
              class: normalizeClass("progress-bar bg-".concat(unref(state))),
              style: normalizeStyle("width:".concat(unref(confirmedPercentage), "%"))
            }, null, 6), createElementVNode("div", {
              class: normalizeClass("progress-bar bg-".concat(unref(state), " o-50")),
              style: normalizeStyle("width:".concat(unref(pendingPercentage), "%"))
            }, null, 6), unref(showMinimumThreshold) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "indicator",
              style: normalizeStyle("left:".concat(unref(minimumPercentage), "%;"))
            }, null, 4)) : createCommentVNode("v-if", true), unref(showDesiredThreshold) ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "indicator",
              style: normalizeStyle("left:".concat(unref(desiredPercentage), "%;"))
            }, null, 4)) : createCommentVNode("v-if", true), unref(showMaximumThreshold) ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "indicator",
              style: normalizeStyle("left:".concat(unref(maximumPercentage), "%;"))
            }, null, 4)) : createCommentVNode("v-if", true)], 10, _hoisted_1$d);
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

      var css_248z$2 = ".group-scheduler-v2 .progress-bar-tooltip{min-width:130px}.group-scheduler-v2 .progress-bar-tooltip-label{font-weight:700}.group-scheduler-v2 .progress-bar-tooltip-responses{margin-top:12px}.group-scheduler-v2 .progress-bar-tooltip-counts{align-items:center;display:flex;justify-content:space-around;margin-top:4px}.group-scheduler-v2 .progress-bar-tooltip-counts>span{align-items:center;display:flex;gap:6px}";
      styleInject(css_248z$2);

      script$d.__file = "src/Group/Scheduling/GroupScheduler/progressBar.partial.obs";

      var _hoisted_1$c = {
        class: "form-group"
      };
      var _hoisted_2$b = createElementVNode("span", {
        class: "control-label"
      }, "These other preferences will be removed and replaced.", -1);
      var script$c = defineComponent({
        name: 'updatePreference.partial',
        props: {
          isVisible: {
            type: Boolean,
            required: true
          },
          occurrence: {
            type: Object,
            required: true
          },
          resource: {
            type: Object,
            required: true
          }
        },
        emits: ["update:isVisible", "preferenceUpdated"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var noScheduleTemplateValue = "0";
          var availableUpdateModes = [{
            value: UpdateSchedulePreferenceMode.ReplacePreference.toString(),
            text: UpdateSchedulePreferenceModeDescription[UpdateSchedulePreferenceMode.ReplacePreference]
          }, {
            value: UpdateSchedulePreferenceMode.AddToPreference.toString(),
            text: UpdateSchedulePreferenceModeDescription[UpdateSchedulePreferenceMode.AddToPreference]
          }];
          var isVisible = useVModelPassthrough(props, "isVisible", emit);
          var isLoadingPreferences = ref(false);
          var loadPreferencesErrorMessage = ref("");
          var isUpdatingPreference = ref(false);
          var updatePreferenceErrorMessage = ref("");
          var scheduleTemplate = ref("");
          var scheduleStartDate = ref("");
          var otherPreferences = ref([]);
          var availableScheduleTemplates = ref([]);
          var warningMessage = ref("");
          var updateMode = ref(UpdateSchedulePreferenceMode.ReplacePreference.toString());
          var subtitle = computed(() => {
            var o = props.occurrence;
            var r = props.resource;
            var titleParts = [];
            if (o !== null && o !== void 0 && o.scheduleName) {
              titleParts.push(o.scheduleName);
            }
            if (o !== null && o !== void 0 && o.locationName) {
              titleParts.push(o.locationName);
            }
            var personName = r !== null && r !== void 0 && r.PersonName ? "".concat(r.PersonName, ", ") : "";
            return titleParts.length ? "".concat(personName).concat(titleParts.join(" - ")) : "";
          });
          var attendanceId = computed(() => {
            var _props$resource$Atten, _props$resource;
            return (_props$resource$Atten = (_props$resource = props.resource) === null || _props$resource === void 0 ? void 0 : _props$resource.AttendanceId) !== null && _props$resource$Atten !== void 0 ? _props$resource$Atten : 0;
          });
          var groupMemberId = computed(() => {
            var _props$resource$Group, _props$resource2;
            return (_props$resource$Group = (_props$resource2 = props.resource) === null || _props$resource2 === void 0 ? void 0 : _props$resource2.GroupMemberId) !== null && _props$resource$Group !== void 0 ? _props$resource$Group : 0;
          });
          var showScheduleStartDate = computed(() => {
            return !!scheduleTemplate.value && scheduleTemplate.value !== noScheduleTemplateValue;
          });
          var showOtherPreferences = computed(() => {
            var _otherPreferences$val;
            return !!((_otherPreferences$val = otherPreferences.value) !== null && _otherPreferences$val !== void 0 && _otherPreferences$val.length) && updateMode.value === UpdateSchedulePreferenceMode.ReplacePreference.toString();
          });
          var isBusy = computed(() => {
            return isLoadingPreferences.value || isUpdatingPreference.value;
          });
          var isUpdatingDisabled = computed(() => {
            return isBusy.value || !!loadPreferencesErrorMessage.value;
          });
          function getPreferences() {
            return _getPreferences.apply(this, arguments);
          }
          function _getPreferences() {
            _getPreferences = _asyncToGenerator(function* () {
              var _preferences$schedule, _preferences$schedule2, _preferences$schedule3, _preferences$schedule4, _preferences$otherPre, _preferences$availabl, _preferences$warningM;
              if (isLoadingPreferences.value) {
                return;
              }
              isLoadingPreferences.value = true;
              loadPreferencesErrorMessage.value = "";
              var bag = {
                attendanceId: attendanceId.value,
                groupMemberId: groupMemberId.value
              };
              var result = yield invokeBlockAction("GetPreferences", {
                bag
              });
              isLoadingPreferences.value = false;
              if (!result.isSuccess) {
                loadPreferencesErrorMessage.value = result.errorMessage || "Unknown error while trying to load preferences.";
                return;
              }
              var preferences = result.data;
              if (preferences !== null && preferences !== void 0 && preferences.errorMessage) {
                loadPreferencesErrorMessage.value = "".concat(preferences.errorMessage, " Unable to update preferences for this individual.");
                return;
              }
              scheduleTemplate.value = (_preferences$schedule = preferences === null || preferences === void 0 ? void 0 : (_preferences$schedule2 = preferences.schedulePreference) === null || _preferences$schedule2 === void 0 ? void 0 : _preferences$schedule2.scheduleTemplate) !== null && _preferences$schedule !== void 0 ? _preferences$schedule : "";
              scheduleStartDate.value = (_preferences$schedule3 = preferences === null || preferences === void 0 ? void 0 : (_preferences$schedule4 = preferences.schedulePreference) === null || _preferences$schedule4 === void 0 ? void 0 : _preferences$schedule4.scheduleStartDate) !== null && _preferences$schedule3 !== void 0 ? _preferences$schedule3 : "";
              otherPreferences.value = (_preferences$otherPre = preferences === null || preferences === void 0 ? void 0 : preferences.otherPreferencesForGroup) !== null && _preferences$otherPre !== void 0 ? _preferences$otherPre : [];
              availableScheduleTemplates.value = (_preferences$availabl = preferences === null || preferences === void 0 ? void 0 : preferences.availableScheduleTemplates) !== null && _preferences$availabl !== void 0 ? _preferences$availabl : [];
              warningMessage.value = (_preferences$warningM = preferences === null || preferences === void 0 ? void 0 : preferences.warningMessage) !== null && _preferences$warningM !== void 0 ? _preferences$warningM : "";
            });
            return _getPreferences.apply(this, arguments);
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              if (isUpdatingPreference.value) {
                return;
              }
              isUpdatingPreference.value = true;
              updatePreferenceErrorMessage.value = "";
              var bag = {
                attendanceId: attendanceId.value,
                groupMemberId: groupMemberId.value,
                schedulePreference: {
                  scheduleStartDate: showScheduleStartDate.value ? scheduleStartDate.value : undefined,
                  scheduleTemplate: scheduleTemplate.value
                },
                updateMode: +updateMode.value
              };
              var result = yield invokeBlockAction("UpdatePreference", {
                bag
              });
              isUpdatingPreference.value = false;
              if (!result.isSuccess) {
                updatePreferenceErrorMessage.value = result.errorMessage || "Unknown error while trying to update preference.";
                return;
              }
              emit("preferenceUpdated");
              isVisible.value = false;
            });
            return _onSave.apply(this, arguments);
          }
          watch(isVisible, () => {
            if (isVisible.value) {
              getPreferences();
            } else {
              isLoadingPreferences.value = false;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(isVisible) ? isVisible.value = $event : null),
              title: "Update Preference",
              saveText: "Save",
              subtitle: unref(subtitle),
              isSaveButtonDisabled: unref(isUpdatingDisabled),
              onSave: onSave
            }, {
              default: withCtx(() => [loadPreferencesErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: unref(AlertType).Warning
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(loadPreferencesErrorMessage.value), 1)]),
                _: 1
              }, 8, ["alertType"])) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [updatePreferenceErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: unref(AlertType).Warning
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(updatePreferenceErrorMessage.value), 1)]),
                _: 1
              }, 8, ["alertType"])) : createCommentVNode("v-if", true), warningMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 1,
                alertType: unref(AlertType).Warning
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(warningMessage.value), 1)]),
                _: 1
              }, 8, ["alertType"])) : createCommentVNode("v-if", true), createVNode(unref(DropDownList), {
                modelValue: scheduleTemplate.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => scheduleTemplate.value = $event),
                label: "Schedule",
                items: availableScheduleTemplates.value,
                loading: unref(isBusy),
                showBlankItem: false
              }, null, 8, ["modelValue", "items", "loading"]), unref(showScheduleStartDate) ? (openBlock(), createBlock(unref(DatePicker), {
                key: 2,
                modelValue: scheduleStartDate.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => scheduleStartDate.value = $event),
                label: "Starting On",
                isLoading: unref(isBusy)
              }, null, 8, ["modelValue", "isLoading"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_1$c, [createVNode(unref(RadioButtonList), {
                modelValue: updateMode.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => updateMode.value = $event),
                items: availableUpdateModes,
                horizontal: true
              }, null, 8, ["modelValue"])]), unref(showOtherPreferences) ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 3,
                alertType: unref(AlertType).Info
              }, {
                default: withCtx(() => [_hoisted_2$b, createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(otherPreferences.value, otherPreference => {
                  return openBlock(), createElementBlock("li", null, toDisplayString(otherPreference), 1);
                }), 256))])]),
                _: 1
              }, 8, ["alertType"])) : createCommentVNode("v-if", true)], 64))]),
              _: 1
            }, 8, ["modelValue", "subtitle", "isSaveButtonDisabled"]);
          };
        }
      });

      script$c.__file = "src/Group/Scheduling/GroupScheduler/updatePreference.partial.obs";

      var _hoisted_1$b = ["src"];
      var _hoisted_2$a = ["data-original-title"];
      var _hoisted_3$9 = {
        key: 0,
        class: "fa fa-exclamation-triangle"
      };
      var _hoisted_4$7 = {
        key: 1,
        class: "fa fa-minus-circle"
      };
      var _hoisted_5$7 = {
        class: "resource-role"
      };
      var _hoisted_6$6 = {
        class: "dropdown"
      };
      var _hoisted_7$5 = ["disabled"];
      var _hoisted_8$4 = createElementVNode("i", {
        class: "fa fa-ellipsis-v"
      }, null, -1);
      var _hoisted_9$3 = [_hoisted_8$4];
      var _hoisted_10$2 = {
        class: "dropdown-menu dropdown-menu-right"
      };
      var _hoisted_11$2 = ["disabled"];
      var _hoisted_12$2 = ["disabled"];
      var _hoisted_13$1 = ["disabled"];
      var _hoisted_14$1 = ["disabled"];
      var _hoisted_15$1 = {
        key: 0
      };
      var _hoisted_16$1 = ["disabled"];
      var _hoisted_17$1 = ["disabled"];
      var script$b = defineComponent({
        name: 'scheduledResource.partial',
        props: {
          occurrence: {
            type: Object,
            required: true
          },
          resource: {
            type: Object,
            required: true
          },
          updateResourceWarningMessage: {
            type: String,
            default: ""
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["resourceUpdated", "preferenceUpdated", "update:updateResourceWarningMessage"],
        setup(__props, _ref) {
          var _props$resource$Perso, _props$resource, _props$resource$Perso2, _props$resource2;
          var emit = _ref.emit;
          var props = __props;
          var http = useHttp();
          var updateResourceWarningMessage = useVModelPassthrough(props, "updateResourceWarningMessage", emit);
          var isUpdatingResource = ref(false);
          var isUpdatingPreference = ref(false);
          var imgSrc = ref((_props$resource$Perso = (_props$resource = props.resource) === null || _props$resource === void 0 ? void 0 : _props$resource.PersonPhotoUrl) !== null && _props$resource$Perso !== void 0 ? _props$resource$Perso : "");
          var personName = ref((_props$resource$Perso2 = (_props$resource2 = props.resource) === null || _props$resource2 === void 0 ? void 0 : _props$resource2.PersonName) !== null && _props$resource$Perso2 !== void 0 ? _props$resource$Perso2 : "");
          var resourceNameElement = ref(null);
          var status = computed(() => {
            var _props$resource$Confi, _props$resource3;
            return (_props$resource$Confi = (_props$resource3 = props.resource) === null || _props$resource3 === void 0 ? void 0 : _props$resource3.ConfirmationStatus) !== null && _props$resource$Confi !== void 0 ? _props$resource$Confi : "";
          });
          var statusCssClass = computed(() => {
            return "status-".concat(status.value ? "".concat(status.value.toLowerCase()) : "unknown");
          });
          var resourceCssClass = computed(() => {
            return "list-group-item text-sm ".concat(statusCssClass.value);
          });
          var attendanceId = computed(() => {
            var _props$resource$Atten, _props$resource4;
            return (_props$resource$Atten = (_props$resource4 = props.resource) === null || _props$resource4 === void 0 ? void 0 : _props$resource4.AttendanceId) !== null && _props$resource$Atten !== void 0 ? _props$resource$Atten : 0;
          });
          var groupMemberId = computed(() => {
            var _props$resource$Group, _props$resource5;
            return (_props$resource$Group = (_props$resource5 = props.resource) === null || _props$resource5 === void 0 ? void 0 : _props$resource5.GroupMemberId) !== null && _props$resource$Group !== void 0 ? _props$resource$Group : 0;
          });
          var isSchedulingDisabled = computed(() => {
            return props.disabled || isUpdatingResource.value;
          });
          var declinedReasonTooltip = computed(() => {
            var _props$resource6;
            var reason = (_props$resource6 = props.resource) === null || _props$resource6 === void 0 ? void 0 : _props$resource6.DeclinedReason;
            return reason ? wrapTooltipSection("<div class='font-weight-semibold'>Declined Reason</div><div>".concat(reason, "</div>")) : "";
          });
          var preferenceList = computed(() => {
            var _props$resource$Resou, _props$resource7, _props$resource7$Reso;
            return (_props$resource$Resou = (_props$resource7 = props.resource) === null || _props$resource7 === void 0 ? void 0 : (_props$resource7$Reso = _props$resource7.ResourcePreferenceList) === null || _props$resource7$Reso === void 0 ? void 0 : _props$resource7$Reso.filter(a => a.ScheduleName)) !== null && _props$resource$Resou !== void 0 ? _props$resource$Resou : [];
          });
          var preferenceTooltip = computed(() => {
            var _props$resource8;
            var tooltip = "";
            if (((_props$resource8 = props.resource) === null || _props$resource8 === void 0 ? void 0 : _props$resource8.MatchesPreference) === Preference.notMatches && preferenceList.value.length) {
              tooltip += "<div class='font-weight-semibold'>Preference</div>";
              preferenceList.value.forEach(preference => {
                var locationName = preference.LocationName ? " - ".concat(preference.LocationName) : "";
                tooltip += "<div>".concat(preference.ScheduleName).concat(locationName, "</div>");
              });
            }
            return tooltip ? wrapTooltipSection(tooltip) : "";
          });
          var schedulingConflictList = computed(() => {
            var _props$resource$Sched, _props$resource9, _props$resource9$Sche;
            return (_props$resource$Sched = (_props$resource9 = props.resource) === null || _props$resource9 === void 0 ? void 0 : (_props$resource9$Sche = _props$resource9.SchedulingConflicts) === null || _props$resource9$Sche === void 0 ? void 0 : _props$resource9$Sche.filter(a => a.ScheduleName)) !== null && _props$resource$Sched !== void 0 ? _props$resource$Sched : [];
          });
          var conflictTooltip = computed(() => {
            var _schedulingConflictLi, _props$resource10, _props$resource11;
            var tooltip = "";
            if ((_schedulingConflictLi = schedulingConflictList.value) !== null && _schedulingConflictLi !== void 0 && _schedulingConflictLi.length) {
              schedulingConflictList.value.forEach(conflict => {
                var locationName = conflict.LocationName ? " - ".concat(conflict.LocationName) : "";
                tooltip += "<div>".concat(conflict.ScheduleName).concat(locationName, "</div>");
              });
            }
            if ((_props$resource10 = props.resource) !== null && _props$resource10 !== void 0 && _props$resource10.HasBlackoutConflict) {
              tooltip += "<div>Cannot be scheduled due to a blackout.</div>";
            }
            if ((_props$resource11 = props.resource) !== null && _props$resource11 !== void 0 && _props$resource11.HasGroupRequirementsConflict) {
              tooltip += "<div>Does not meet the requirements for this group.</div>";
            }
            if (tooltip) {
              tooltip = "<div class='font-weight-semibold'>Scheduling Conflicts</div>".concat(tooltip);
            }
            return tooltip ? wrapTooltipSection(tooltip) : "";
          });
          var resourceTooltip = computed(() => {
            return "".concat(declinedReasonTooltip.value).concat(preferenceTooltip.value).concat(conflictTooltip.value);
          });
          function getFriendlyAction(action) {
            switch (action) {
              case ResourceAction.MarkConfirmed:
                return "marking ".concat(personName.value, " as confirmed");
              case ResourceAction.MarkPending:
                return "marking ".concat(personName.value, " as pending");
              case ResourceAction.MarkDeclined:
                return "marking ".concat(personName.value, " as declined");
              case ResourceAction.ResendConfirmation:
                return "resending confirmation to ".concat(personName.value);
              case ResourceAction.UpdatePreference:
                return "updating preferences for ".concat(personName.value);
              case ResourceAction.Remove:
                return "removing ".concat(personName.value);
              default:
                return "updating ".concat(personName.value);
            }
          }
          function wrapTooltipSection(tooltipSection) {
            return "<div class=\"tooltip-section\">".concat(tooltipSection, "</div>");
          }
          function configureTooltip() {
            if (resourceNameElement.value) {
              tooltip(resourceNameElement.value, {
                html: true
              });
            }
          }
          function onUpdateResource(_x) {
            return _onUpdateResource.apply(this, arguments);
          }
          function _onUpdateResource() {
            _onUpdateResource = _asyncToGenerator(function* (action) {
              isUpdatingResource.value = true;
              updateResourceWarningMessage.value = "";
              var warningMessage = "There was an error while ".concat(getFriendlyAction(action));
              var endpoint = "";
              switch (action) {
                case ResourceAction.MarkConfirmed:
                  endpoint = "ScheduledPersonConfirm";
                  break;
                case ResourceAction.MarkPending:
                  endpoint = "ScheduledPersonPending";
                  break;
                case ResourceAction.MarkDeclined:
                  endpoint = "ScheduledPersonDecline";
                  break;
                case ResourceAction.ResendConfirmation:
                  endpoint = "ScheduledPersonSendConfirmationCommunication";
                  break;
                case ResourceAction.Remove:
                  endpoint = "ScheduledPersonRemove";
                  break;
                case ResourceAction.UpdatePreference:
                  isUpdatingPreference.value = true;
                  return;
                default:
                  updateResourceWarningMessage.value = warningMessage;
                  isUpdatingResource.value = false;
                  return;
              }
              var result = yield http.doApiCall("PUT", "/api/Attendances/".concat(endpoint, "?attendanceId=").concat(attendanceId.value));
              isUpdatingResource.value = false;
              if (!result.isSuccess) {
                updateResourceWarningMessage.value = warningMessage;
                return;
              }
              emit("resourceUpdated", action);
            });
            return _onUpdateResource.apply(this, arguments);
          }
          watch([resourceNameElement, resourceTooltip], () => {
            configureTooltip();
          });
          watch(isUpdatingPreference, () => {
            if (!isUpdatingPreference.value) {
              isUpdatingResource.value = false;
            }
          });
          return (_ctx, _cache) => {
            var _props$resource12;
            return openBlock(), createElementBlock(Fragment, null, [__props.resource ? (openBlock(), createElementBlock("li", {
              key: 0,
              class: normalizeClass(unref(resourceCssClass))
            }, [createElementVNode("img", {
              src: imgSrc.value,
              class: "avatar",
              draggable: "false"
            }, null, 8, _hoisted_1$b), createElementVNode("span", {
              ref_key: "resourceNameElement",
              ref: resourceNameElement,
              class: "resource-name",
              "data-toggle": "tooltip",
              "data-original-title": unref(resourceTooltip)
            }, [createTextVNode(toDisplayString(personName.value) + " ", 1), unref(conflictTooltip) ? (openBlock(), createElementBlock("i", _hoisted_3$9)) : createCommentVNode("v-if", true), unref(preferenceTooltip) ? (openBlock(), createElementBlock("i", _hoisted_4$7)) : createCommentVNode("v-if", true)], 8, _hoisted_2$a), createElementVNode("span", _hoisted_5$7, toDisplayString((_props$resource12 = __props.resource) === null || _props$resource12 === void 0 ? void 0 : _props$resource12.GroupRoleName), 1), withDirectives((openBlock(), createElementBlock("div", _hoisted_6$6, [createElementVNode("button", {
              type: "button",
              class: "btn btn-link btn-overflow",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              disabled: unref(isSchedulingDisabled)
            }, _hoisted_9$3, 8, _hoisted_7$5), createElementVNode("ul", _hoisted_10$2, [createElementVNode("li", null, [createElementVNode("button", {
              type: "button",
              class: "dropdown-item btn-link",
              disabled: unref(isSchedulingDisabled),
              onClick: _cache[0] || (_cache[0] = $event => onUpdateResource(unref(ResourceAction).MarkConfirmed))
            }, " Mark Confirmed ", 8, _hoisted_11$2)]), createElementVNode("li", null, [createElementVNode("button", {
              type: "button",
              class: "dropdown-item btn-link",
              disabled: unref(isSchedulingDisabled),
              onClick: _cache[1] || (_cache[1] = $event => onUpdateResource(unref(ResourceAction).MarkPending))
            }, " Mark Pending ", 8, _hoisted_12$2)]), createElementVNode("li", null, [createElementVNode("button", {
              type: "button",
              class: "dropdown-item btn-link",
              disabled: unref(isSchedulingDisabled),
              onClick: _cache[2] || (_cache[2] = $event => onUpdateResource(unref(ResourceAction).MarkDeclined))
            }, " Mark Declined ", 8, _hoisted_13$1)]), createElementVNode("li", null, [createElementVNode("button", {
              type: "button",
              class: "dropdown-item btn-link",
              disabled: unref(isSchedulingDisabled),
              onClick: _cache[3] || (_cache[3] = $event => onUpdateResource(unref(ResourceAction).ResendConfirmation))
            }, " Resend Confirmation ", 8, _hoisted_14$1)]), unref(groupMemberId) ? (openBlock(), createElementBlock("li", _hoisted_15$1, [createElementVNode("button", {
              type: "button",
              class: "dropdown-item btn-link",
              disabled: unref(isSchedulingDisabled),
              onClick: _cache[4] || (_cache[4] = $event => onUpdateResource(unref(ResourceAction).UpdatePreference))
            }, " Update Preference ", 8, _hoisted_16$1)])) : createCommentVNode("v-if", true), createElementVNode("li", null, [createElementVNode("button", {
              type: "button",
              class: "dropdown-item dropdown-item-danger btn-link",
              disabled: unref(isSchedulingDisabled),
              onClick: _cache[5] || (_cache[5] = $event => onUpdateResource(unref(ResourceAction).Remove))
            }, " Remove ", 8, _hoisted_17$1)])])])), [[unref(NoDragScroll)]])], 2)) : createCommentVNode("v-if", true), createVNode(unref(script$c), {
              isVisible: isUpdatingPreference.value,
              "onUpdate:isVisible": _cache[6] || (_cache[6] = $event => isUpdatingPreference.value = $event),
              occurrence: __props.occurrence,
              resource: __props.resource,
              onPreferenceUpdated: _cache[7] || (_cache[7] = $event => _ctx.$emit('preferenceUpdated'))
            }, null, 8, ["isVisible", "occurrence", "resource"])], 64);
          };
        }
      });

      script$b.__file = "src/Group/Scheduling/GroupScheduler/scheduledResource.partial.obs";

      var _hoisted_1$a = {
        key: 0,
        class: "resource-notes-section"
      };
      var _hoisted_2$9 = {
        key: 1,
        class: "resource-notes-section"
      };
      var _hoisted_3$8 = {
        key: 2,
        class: "resource-notes-section text-danger"
      };
      var _hoisted_4$6 = createElementVNode("div", {
        class: "resource-notes-header"
      }, "Conflicts", -1);
      var _hoisted_5$6 = {
        key: 3,
        class: "resource-notes-section"
      };
      var _hoisted_6$5 = createElementVNode("div", {
        class: "resource-notes-header"
      }, "Preference", -1);
      var _hoisted_7$4 = {
        key: 4,
        class: "resource-notes-section"
      };
      var _hoisted_8$3 = createElementVNode("div", {
        class: "resource-notes-header"
      }, "Assignments", -1);
      var _hoisted_9$2 = {
        key: 5,
        class: "resource-notes-section"
      };
      var script$a = defineComponent({
        name: 'resourceNotes.partial',
        props: {
          resource: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var cssClass = computed(() => {
            return "resource-notes".concat(props.disabled ? " resource-disabled" : "");
          });
          var preferenceList = computed(() => {
            var _props$resource$Resou, _props$resource, _props$resource$Resou2;
            return (_props$resource$Resou = (_props$resource = props.resource) === null || _props$resource === void 0 ? void 0 : (_props$resource$Resou2 = _props$resource.ResourcePreferenceList) === null || _props$resource$Resou2 === void 0 ? void 0 : _props$resource$Resou2.filter(a => a.ScheduleName)) !== null && _props$resource$Resou !== void 0 ? _props$resource$Resou : [];
          });
          var scheduledList = computed(() => {
            var _props$resource$Resou3, _props$resource2, _props$resource2$Reso;
            return (_props$resource$Resou3 = (_props$resource2 = props.resource) === null || _props$resource2 === void 0 ? void 0 : (_props$resource2$Reso = _props$resource2.ResourceScheduledList) === null || _props$resource2$Reso === void 0 ? void 0 : _props$resource2$Reso.filter(a => a.ScheduleName)) !== null && _props$resource$Resou3 !== void 0 ? _props$resource$Resou3 : [];
          });
          var hasBlackoutConflict = computed(() => {
            var _props$resource3;
            return (_props$resource3 = props.resource) === null || _props$resource3 === void 0 ? void 0 : _props$resource3.HasBlackoutConflict;
          });
          var hasGroupRequirementsConflict = computed(() => {
            var _props$resource4;
            return (_props$resource4 = props.resource) === null || _props$resource4 === void 0 ? void 0 : _props$resource4.HasGroupRequirementsConflict;
          });
          var schedulingConflictList = computed(() => {
            var _props$resource$Sched, _props$resource5, _props$resource5$Sche;
            return (_props$resource$Sched = (_props$resource5 = props.resource) === null || _props$resource5 === void 0 ? void 0 : (_props$resource5$Sche = _props$resource5.SchedulingConflicts) === null || _props$resource5$Sche === void 0 ? void 0 : _props$resource5$Sche.filter(a => a.ScheduleName)) !== null && _props$resource$Sched !== void 0 ? _props$resource$Sched : [];
          });
          var hasNote = computed(() => {
            var _props$resource6;
            return !!((_props$resource6 = props.resource) !== null && _props$resource6 !== void 0 && _props$resource6.Note);
          });
          var shouldShow = computed(() => {
            var _preferenceList$value, _scheduledList$value, _schedulingConflictLi;
            return !!((_preferenceList$value = preferenceList.value) !== null && _preferenceList$value !== void 0 && _preferenceList$value.length || (_scheduledList$value = scheduledList.value) !== null && _scheduledList$value !== void 0 && _scheduledList$value.length || hasBlackoutConflict.value || hasGroupRequirementsConflict.value || (_schedulingConflictLi = schedulingConflictList.value) !== null && _schedulingConflictLi !== void 0 && _schedulingConflictLi.length || hasNote);
          });
          return (_ctx, _cache) => {
            return unref(shouldShow) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(cssClass))
            }, [unref(hasBlackoutConflict) ? (openBlock(), createElementBlock("div", _hoisted_1$a, " Cannot be scheduled due to a blackout. ")) : createCommentVNode("v-if", true), unref(hasGroupRequirementsConflict) ? (openBlock(), createElementBlock("div", _hoisted_2$9, " Does not meet the requirements for this group. ")) : createCommentVNode("v-if", true), unref(schedulingConflictList).length ? (openBlock(), createElementBlock("div", _hoisted_3$8, [_hoisted_4$6, (openBlock(true), createElementBlock(Fragment, null, renderList(unref(schedulingConflictList), conflict => {
              return openBlock(), createElementBlock("div", {
                key: "conflict-".concat(conflict.ScheduleId, "-").concat(conflict.LocationId),
                class: "resource-schedule-conflict"
              }, [createTextVNode(toDisplayString(conflict.ScheduleName) + " ", 1), conflict.LocationName ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createTextVNode(" - " + toDisplayString(conflict.LocationName), 1)], 64)) : createCommentVNode("v-if", true)]);
            }), 128))])) : createCommentVNode("v-if", true), unref(preferenceList).length ? (openBlock(), createElementBlock("div", _hoisted_5$6, [_hoisted_6$5, (openBlock(true), createElementBlock(Fragment, null, renderList(unref(preferenceList), preference => {
              return openBlock(), createElementBlock("div", {
                key: "preference-".concat(preference.ScheduleId, "-").concat(preference.LocationId),
                class: "resource-preference"
              }, [createTextVNode(toDisplayString(preference.ScheduleName) + " ", 1), preference.LocationName ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createTextVNode(" - " + toDisplayString(preference.LocationName), 1)], 64)) : createCommentVNode("v-if", true)]);
            }), 128))])) : createCommentVNode("v-if", true), unref(scheduledList).length ? (openBlock(), createElementBlock("div", _hoisted_7$4, [_hoisted_8$3, (openBlock(true), createElementBlock(Fragment, null, renderList(unref(scheduledList), scheduled => {
              return openBlock(), createElementBlock("div", {
                key: "scheduled-".concat(scheduled.ScheduleId, "-").concat(scheduled.LocationId),
                class: "resource-scheduled"
              }, [createTextVNode(toDisplayString(scheduled.ScheduleName) + " ", 1), scheduled.LocationName ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createTextVNode(" - " + toDisplayString(scheduled.LocationName), 1)], 64)) : createCommentVNode("v-if", true)]);
            }), 128))])) : createCommentVNode("v-if", true), unref(hasNote) ? (openBlock(), createElementBlock("div", _hoisted_9$2, toDisplayString(__props.resource.Note), 1)) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true);
          };
        }
      });

      script$a.__file = "src/Group/Scheduling/GroupScheduler/resourceNotes.partial.obs";

      var _hoisted_1$9 = {
        class: "control-wrapper"
      };
      var _hoisted_2$8 = {
        class: "controls rockcheckboxlist rockcheckboxlist-vertical input-group"
      };
      var _hoisted_3$7 = ["for"];
      var _hoisted_4$5 = ["id", "name", "value", "disabled"];
      var _hoisted_5$5 = {
        class: "label-text resource-name"
      };
      var _hoisted_6$4 = {
        key: 0,
        class: "small text-muted"
      };
      var script$9 = defineComponent({
        name: 'availableResources.partial',
        props: {
          modelValue: {
            type: Array,
            required: true
          },
          resources: {
            type: Array,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var selectedResources = useVModelPassthrough(props, "modelValue", emit);
          function getIsDisabled(resource) {
            return resource.HasBlackoutConflict || resource.HasGroupRequirementsConflict;
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: unref(selectedResources),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(selectedResources) ? selectedResources.value = $event : null),
              formGroupClasses: "check-box-list",
              name: "check-box-list"
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_1$9, [createElementVNode("div", _hoisted_2$8, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.resources, resource => {
                var _resource$GroupRole;
                return openBlock(), createElementBlock("div", {
                  key: resource.PersonId,
                  class: "checkbox resource"
                }, [createElementVNode("label", {
                  for: resource.PersonId.toString()
                }, [withDirectives(createElementVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(selectedResources) ? selectedResources.value = $event : null),
                  id: resource.PersonId.toString(),
                  name: resource.PersonId.toString(),
                  value: resource.PersonId,
                  disabled: __props.disabled || getIsDisabled(resource)
                }, null, 8, _hoisted_4$5), [[vModelCheckbox, unref(selectedResources)]]), createElementVNode("span", _hoisted_5$5, [createTextVNode(toDisplayString(resource.PersonName) + " ", 1), (_resource$GroupRole = resource.GroupRole) !== null && _resource$GroupRole !== void 0 && _resource$GroupRole.Name ? (openBlock(), createElementBlock("span", _hoisted_6$4, toDisplayString(resource.GroupRole.Name), 1)) : createCommentVNode("v-if", true)])], 8, _hoisted_3$7), createVNode(unref(script$a), {
                  resource: resource,
                  disabled: getIsDisabled(resource)
                }, null, 8, ["resource", "disabled"])]);
              }), 128))])])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$9.__file = "src/Group/Scheduling/GroupScheduler/availableResources.partial.obs";

      var _hoisted_1$8 = createElementVNode("div", {
        class: "input-group-addon"
      }, [createElementVNode("i", {
        class: "fa fa-search"
      })], -1);
      var script$8 = defineComponent({
        name: 'resourceFilterByName.partial',
        props: {
          modelValue: {
            type: String,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var nameFilter = useVModelPassthrough(props, "modelValue", emit);
          var isDisabled = computed(() => {
            return props.disabled;
          });
          var hasFilter = computed(() => {
            return !!nameFilter.value;
          });
          var clearButtonCssClass = computed(() => {
            return {
              "input-group-addon": true,
              "clickable": !isDisabled.value && hasFilter.value
            };
          });
          var clearIconCssClass = computed(() => {
            return {
              "fa fa-times": true,
              "text-muted": isDisabled.value || !hasFilter.value
            };
          });
          function onClearClick() {
            if (isDisabled.value) {
              return;
            }
            nameFilter.value = "";
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(TextBox), {
              modelValue: unref(nameFilter),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(nameFilter) ? nameFilter.value = $event : null),
              placeholder: "Search",
              size: "small",
              disabled: __props.disabled
            }, {
              inputGroupPrepend: withCtx(() => [_hoisted_1$8]),
              inputGroupAppend: withCtx(() => [createElementVNode("div", {
                class: normalizeClass(unref(clearButtonCssClass)),
                onClick: onClearClick
              }, [createElementVNode("i", {
                class: normalizeClass(unref(clearIconCssClass))
              }, null, 2)], 2)]),
              _: 1
            }, 8, ["modelValue", "disabled"]);
          };
        }
      });

      script$8.__file = "src/Group/Scheduling/GroupScheduler/resourceFilterByName.partial.obs";

      var _hoisted_1$7 = {
        class: "d-md-flex justify-content-md-between"
      };
      var _hoisted_2$7 = {
        class: "resource-sources"
      };
      var _hoisted_3$6 = {
        class: "d-none d-md-block form-group"
      };
      var _hoisted_4$4 = {
        class: "d-md-none form-group"
      };
      var _hoisted_5$4 = {
        key: 1,
        class: "form-group"
      };
      var _hoisted_6$3 = {
        key: 2,
        class: "form-group"
      };
      var _hoisted_7$3 = {
        key: 3
      };
      var _hoisted_8$2 = {
        class: "d-none d-md-block form-group"
      };
      var _hoisted_9$1 = {
        class: "d-md-none form-group"
      };
      var _hoisted_10$1 = {
        key: 0,
        class: "mb-0 mb-md-2"
      };
      var _hoisted_11$1 = createTextVNode(" Some assignments were unsuccessful. ");
      var _hoisted_12$1 = {
        key: 2
      };
      var script$7 = defineComponent({
        name: 'selectIndividuals.partial',
        props: {
          isVisible: {
            type: Boolean,
            required: true
          },
          occurrence: {
            type: Object,
            required: true
          },
          spotsFilledCount: {
            type: Number,
            required: true
          }
        },
        emits: ["update:isVisible", "partialAssignmentSuccess"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var http = useHttp();
          var baseApiUrl = "/api/Attendances";
          var primarySourceTypeGroupValue = "group";
          var primarySourceTypes = [ResourceListSourceType.AlternateGroup, ResourceListSourceType.ParentGroup, ResourceListSourceType.DataView];
          var secondarySourceTypes = [ResourceListSourceType.GroupMembers, ResourceListSourceType.GroupMatchingPreference, ResourceListSourceType.GroupMatchingAssignment];
          var isVisible = useVModelPassthrough(props, "isVisible", emit);
          var occurrenceDateTitle = inject(OccurrenceDateTitle, ref(""));
          var isLoadingResourceSettings = ref(false);
          var loadResourceSettingsErrorMessage = ref("");
          var isLoadingResources = ref(false);
          var loadResourcesInfoMessage = ref("");
          var loadResourcesErrorMessage = ref("");
          var isAssigningResources = ref(false);
          var unsuccessfulAssignmentPersonIds = ref([]);
          var unsuccessfulAssignmentMessages = ref([]);
          var resourceSettings = ref(null);
          var selectedPrimarySourceType = ref("");
          var selectedSecondarySourceType = ref("");
          var selectedAlternateGroup = ref(null);
          var selectedDataView = ref(null);
          var availableResources = ref([]);
          var selectedPersonIds = ref([]);
          var resourceNameFilter = ref("");
          var occurrenceTitle = computed(() => {
            var o = props.occurrence;
            var titleParts = [];
            if (o !== null && o !== void 0 && o.groupName) {
              titleParts.push(o.groupName);
            }
            if (o !== null && o !== void 0 && o.locationName) {
              titleParts.push(o.locationName);
            }
            if (o !== null && o !== void 0 && o.scheduleName) {
              titleParts.push(o.scheduleName);
            }
            var friendlyOccurrenceDate = occurrenceDateTitle.value ? " (".concat(occurrenceDateTitle.value, ")") : "";
            return titleParts.length ? "".concat(titleParts.join(" - ")).concat(friendlyOccurrenceDate) : "";
          });
          var enabledSourceTypes = computed(() => {
            var _resourceSettings$val, _resourceSettings$val2;
            return (_resourceSettings$val = (_resourceSettings$val2 = resourceSettings.value) === null || _resourceSettings$val2 === void 0 ? void 0 : _resourceSettings$val2.enabledResourceListSourceTypes) !== null && _resourceSettings$val !== void 0 ? _resourceSettings$val : [];
          });
          var secondarySourceTypeItems = computed(() => {
            return enabledSourceTypes.value.filter(value => secondarySourceTypes.some(secondary => value === secondary)).map(value => ({
              text: ResourceListSourceTypeDescription[value],
              value: value.toString()
            }));
          });
          var primarySourceTypeItems = computed(() => {
            var items = enabledSourceTypes.value.filter(value => primarySourceTypes.some(primary => value === primary)).map(value => ({
              text: ResourceListSourceTypeDescription[value],
              value: value.toString()
            }));
            if (secondarySourceTypeItems.value.length) {
              items.unshift({
                text: "Group",
                value: primarySourceTypeGroupValue
              });
            }
            return items;
          });
          var selectedSourceType = computed(() => {
            if (!selectedPrimarySourceType.value) {
              return;
            }
            if (selectedPrimarySourceType.value === primarySourceTypeGroupValue) {
              return toNumber(selectedSecondarySourceType.value);
            }
            return toNumber(selectedPrimarySourceType.value);
          });
          var selectedSourceTypeIsGroup = computed(() => {
            return selectedPrimarySourceType.value === primarySourceTypeGroupValue;
          });
          var selectedSourceTypeIsAlternateGroup = computed(() => {
            return selectedSourceType.value === ResourceListSourceType.AlternateGroup;
          });
          var selectedSourceTypeIsParentGroup = computed(() => {
            return selectedSourceType.value === ResourceListSourceType.ParentGroup;
          });
          var selectedSourceTypeIsDataView = computed(() => {
            return selectedSourceType.value === ResourceListSourceType.DataView;
          });
          var groupName = computed(() => {
            if (selectedSourceTypeIsGroup.value) {
              var _props$occurrence;
              return (_props$occurrence = props.occurrence) === null || _props$occurrence === void 0 ? void 0 : _props$occurrence.groupName;
            } else if (selectedSourceTypeIsParentGroup.value) {
              var _props$occurrence2;
              return (_props$occurrence2 = props.occurrence) === null || _props$occurrence2 === void 0 ? void 0 : _props$occurrence2.parentGroupName;
            }
          });
          var remainingResourceSpots = computed(() => {
            var _props$occurrence$min, _props$occurrence3, _props$occurrence$des, _props$occurrence4, _props$occurrence$max, _props$occurrence5, _ref2, _selectedPersonIds$va;
            var label;
            var state;
            var min = (_props$occurrence$min = (_props$occurrence3 = props.occurrence) === null || _props$occurrence3 === void 0 ? void 0 : _props$occurrence3.minimumCapacity) !== null && _props$occurrence$min !== void 0 ? _props$occurrence$min : 0;
            var desired = (_props$occurrence$des = (_props$occurrence4 = props.occurrence) === null || _props$occurrence4 === void 0 ? void 0 : _props$occurrence4.desiredCapacity) !== null && _props$occurrence$des !== void 0 ? _props$occurrence$des : 0;
            var max = (_props$occurrence$max = (_props$occurrence5 = props.occurrence) === null || _props$occurrence5 === void 0 ? void 0 : _props$occurrence5.maximumCapacity) !== null && _props$occurrence$max !== void 0 ? _props$occurrence$max : 0;
            var filled = (_ref2 = props.spotsFilledCount + ((_selectedPersonIds$va = selectedPersonIds.value) === null || _selectedPersonIds$va === void 0 ? void 0 : _selectedPersonIds$va.length)) !== null && _ref2 !== void 0 ? _ref2 : 0;
            if (min > 0 && filled < min) {
              label = "Required for Minimum Capacity: ".concat(min - filled);
              state = "warning";
            } else if (desired > 0 && filled < desired) {
              label = "Required for Desired Capacity: ".concat(desired - filled);
              state = "info";
            } else if (max > 0) {
              label = "Available for Max Capacity: ".concat(filled > max ? 0 : max - filled);
              state = "warning";
            }
            if (label && state) {
              return {
                label,
                cssClass: "label label-".concat(state, " align-self-md-start")
              };
            }
          });
          var remainingSpotsAndNameFilterCssClass = computed(() => {
            var justifyClass = remainingResourceSpots.value ? "justify-content-between" : "justify-content-end";
            return "d-flex flex-column-reverse flex-md-column ".concat(justifyClass, " align-items-start align-items-md-end form-group");
          });
          var groupId = computed(() => {
            var _props$occurrence$gro, _props$occurrence6;
            return (_props$occurrence$gro = (_props$occurrence6 = props.occurrence) === null || _props$occurrence6 === void 0 ? void 0 : _props$occurrence6.groupId) !== null && _props$occurrence$gro !== void 0 ? _props$occurrence$gro : 0;
          });
          var parentGroupId = computed(() => {
            var _props$occurrence7;
            return (_props$occurrence7 = props.occurrence) === null || _props$occurrence7 === void 0 ? void 0 : _props$occurrence7.parentGroupId;
          });
          var locationIds = computed(() => {
            return props.occurrence ? [props.occurrence.locationId] : [];
          });
          var scheduleIds = computed(() => {
            return props.occurrence ? [props.occurrence.scheduleId] : [];
          });
          var sundayDate = computed(() => {
            var _props$occurrence$sun, _props$occurrence8;
            return (_props$occurrence$sun = (_props$occurrence8 = props.occurrence) === null || _props$occurrence8 === void 0 ? void 0 : _props$occurrence8.sundayDate) !== null && _props$occurrence$sun !== void 0 ? _props$occurrence$sun : "";
          });
          var groupMemberFilterType = computed(() => {
            var _resourceSettings$val3, _resourceSettings$val4;
            return (_resourceSettings$val3 = (_resourceSettings$val4 = resourceSettings.value) === null || _resourceSettings$val4 === void 0 ? void 0 : _resourceSettings$val4.resourceGroupMemberFilterType) !== null && _resourceSettings$val3 !== void 0 ? _resourceSettings$val3 : 1;
          });
          var filteredResources = computed(() => {
            var _resourceNameFilter$v;
            var filter = (_resourceNameFilter$v = resourceNameFilter.value) === null || _resourceNameFilter$v === void 0 ? void 0 : _resourceNameFilter$v.trim().replace(/\s+/g, " ");
            if (!filter || filter.length < 2) {
              return availableResources.value;
            }
            var filterParts;
            var lastNameFilter;
            var firstNameFilter;
            var useOrComparison = false;
            if (filter.includes(",")) {
              filterParts = filter.split(",");
              lastNameFilter = filterParts[0].trim();
              firstNameFilter = filterParts[1].trim();
            } else if (filter.includes(" ")) {
              filterParts = filter.split(" ");
              lastNameFilter = filterParts[1];
              firstNameFilter = filterParts[0];
            } else {
              lastNameFilter = filter;
              firstNameFilter = filter;
              useOrComparison = true;
            }
            lastNameFilter = lastNameFilter.toUpperCase();
            firstNameFilter = firstNameFilter.toUpperCase();
            return availableResources.value.filter(resource => {
              if (useOrComparison) {
                var _resource$PersonNickN, _resource$PersonLastN;
                return !!((_resource$PersonNickN = resource.PersonNickName) !== null && _resource$PersonNickN !== void 0 && _resource$PersonNickN.toUpperCase().startsWith(firstNameFilter)) || !!((_resource$PersonLastN = resource.PersonLastName) !== null && _resource$PersonLastN !== void 0 && _resource$PersonLastN.toUpperCase().startsWith(lastNameFilter));
              } else {
                var _resource$PersonNickN2, _resource$PersonLastN2;
                return !!((_resource$PersonNickN2 = resource.PersonNickName) !== null && _resource$PersonNickN2 !== void 0 && _resource$PersonNickN2.toUpperCase().startsWith(firstNameFilter)) && !!((_resource$PersonLastN2 = resource.PersonLastName) !== null && _resource$PersonLastN2 !== void 0 && _resource$PersonLastN2.toUpperCase().startsWith(lastNameFilter));
              }
            });
          });
          var noResourcesMessage = computed(() => {
            if (loadResourcesInfoMessage.value) {
              return loadResourcesInfoMessage.value;
            }
            return filteredResources.value.length ? "" : "No individuals available for selection.";
          });
          var isBusy = computed(() => {
            return isLoadingResourceSettings.value || isLoadingResources.value || isAssigningResources.value;
          });
          var isNameFilterDisabled = computed(() => {
            return isBusy.value || !availableResources.value.length;
          });
          var isSaveButtonDisabled = computed(() => {
            var _selectedPersonIds$va2;
            return isBusy.value || selectedSourceType.value === undefined || !((_selectedPersonIds$va2 = selectedPersonIds.value) !== null && _selectedPersonIds$va2 !== void 0 && _selectedPersonIds$va2.length);
          });
          function getResourceSettings() {
            return _getResourceSettings.apply(this, arguments);
          }
          function _getResourceSettings() {
            _getResourceSettings = _asyncToGenerator(function* () {
              if (isLoadingResourceSettings.value) {
                return;
              }
              isLoadingResourceSettings.value = true;
              loadResourceSettingsErrorMessage.value = "";
              var result = yield invokeBlockAction("GetResourceSettings", {
                groupId: groupId.value
              });
              if (!result.isSuccess) {
                isLoadingResourceSettings.value = false;
                loadResourceSettingsErrorMessage.value = result.errorMessage || "Unknown error while trying to load settings.";
                return;
              }
              resourceSettings.value = result.data;
              nextTick(() => {
                isLoadingResourceSettings.value = false;
              });
            });
            return _getResourceSettings.apply(this, arguments);
          }
          function updateSettingsValues() {
            var _resourceSettings$val5, _resourceSettings$val6, _resourceSettings$val7, _resourceSettings$val8, _resourceSettings$val9;
            var sourceType = (_resourceSettings$val5 = resourceSettings.value) === null || _resourceSettings$val5 === void 0 ? void 0 : _resourceSettings$val5.resourceListSourceType;
            if (sourceType !== undefined) {
              if (secondarySourceTypes.some(secondary => secondary === sourceType)) {
                selectedPrimarySourceType.value = primarySourceTypeGroupValue;
                selectedSecondarySourceType.value = sourceType.toString();
              } else {
                selectedPrimarySourceType.value = sourceType.toString();
              }
            }
            selectedAlternateGroup.value = (_resourceSettings$val6 = (_resourceSettings$val7 = resourceSettings.value) === null || _resourceSettings$val7 === void 0 ? void 0 : _resourceSettings$val7.resourceAlternateGroup) !== null && _resourceSettings$val6 !== void 0 ? _resourceSettings$val6 : null;
            selectedDataView.value = (_resourceSettings$val8 = (_resourceSettings$val9 = resourceSettings.value) === null || _resourceSettings$val9 === void 0 ? void 0 : _resourceSettings$val9.resourceDataView) !== null && _resourceSettings$val8 !== void 0 ? _resourceSettings$val8 : null;
            getResources();
          }
          function getResources() {
            return _getResources.apply(this, arguments);
          }
          function _getResources() {
            _getResources = _asyncToGenerator(function* () {
              var _result$data;
              if (isLoadingResources.value) {
                return;
              }
              var sourceType = selectedSourceType.value;
              if (sourceType === undefined) {
                return;
              }
              var parameters = {
                AttendanceOccurrenceGroupId: groupId.value,
                AttendanceOccurrenceScheduleIds: scheduleIds.value,
                AttendanceOccurrenceLocationIds: locationIds.value,
                AttendanceOccurrenceSundayDate: sundayDate.value,
                GroupMemberFilterType: groupMemberFilterType.value,
                ResourceListSourceType: selectedSourceType.value
              };
              if (selectedSourceTypeIsGroup.value) {
                parameters.ResourceGroupId = groupId.value;
              } else if (selectedSourceTypeIsAlternateGroup.value) {
                if (!selectedAlternateGroup.value) {
                  availableResources.value = [];
                  loadResourcesInfoMessage.value = "Select an alternate group to continue.";
                  return;
                }
                parameters.ResourceGroupGuid = toGuidOrNull(selectedAlternateGroup.value.value);
              } else if (selectedSourceTypeIsParentGroup.value) {
                if (!parentGroupId.value) {
                  availableResources.value = [];
                  loadResourcesErrorMessage.value = "No parent group available.";
                  return;
                }
                parameters.ResourceGroupId = parentGroupId.value;
              } else if (selectedSourceTypeIsDataView.value) {
                if (!selectedDataView.value) {
                  availableResources.value = [];
                  loadResourcesInfoMessage.value = "Select a data view to continue.";
                  return;
                }
                parameters.ResourceDataViewGuid = toGuidOrNull(selectedDataView.value.value);
              }
              isLoadingResources.value = true;
              loadResourcesInfoMessage.value = "";
              loadResourcesErrorMessage.value = "";
              var result = yield http.post("".concat(baseApiUrl, "/GetSchedulerResources"), null, parameters);
              isLoadingResources.value = false;
              if (!result.isSuccess) {
                var _result$errorMessage;
                loadResourcesErrorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to load available individuals.";
                return;
              }
              availableResources.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : [];
            });
            return _getResources.apply(this, arguments);
          }
          function onSettingsSelectionChanged() {
            return _onSettingsSelectionChanged.apply(this, arguments);
          }
          function _onSettingsSelectionChanged() {
            _onSettingsSelectionChanged = _asyncToGenerator(function* () {
              var _selectedAlternateGro, _selectedDataView$val;
              if (isLoadingResourceSettings.value || selectedSourceType.value === undefined) {
                return;
              }
              isLoadingResourceSettings.value = true;
              loadResourceSettingsErrorMessage.value = "";
              var bag = {
                groupId: groupId.value,
                resourceListSourceType: selectedSourceType.value,
                resourceAlternateGroupGuid: toGuidOrNull((_selectedAlternateGro = selectedAlternateGroup.value) === null || _selectedAlternateGro === void 0 ? void 0 : _selectedAlternateGro.value),
                resourceDataViewGuid: toGuidOrNull((_selectedDataView$val = selectedDataView.value) === null || _selectedDataView$val === void 0 ? void 0 : _selectedDataView$val.value)
              };
              var result = yield invokeBlockAction("ApplyResourceSettings", {
                bag
              });
              if (!result.isSuccess) {
                isLoadingResourceSettings.value = false;
                loadResourceSettingsErrorMessage.value = result.errorMessage || "Unknown error while trying to apply settings.";
                return;
              }
              resourceSettings.value = result.data;
              nextTick(() => {
                isLoadingResourceSettings.value = false;
              });
            });
            return _onSettingsSelectionChanged.apply(this, arguments);
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              var _selectedPersonIds$va3, _props$occurrence$att, _props$occurrence9;
              if (isAssigningResources.value || !((_selectedPersonIds$va3 = selectedPersonIds.value) !== null && _selectedPersonIds$va3 !== void 0 && _selectedPersonIds$va3.length)) {
                return;
              }
              isAssigningResources.value = true;
              unsuccessfulAssignmentPersonIds.value = [];
              unsuccessfulAssignmentMessages.value = [];
              var attendanceOccurrenceId = (_props$occurrence$att = (_props$occurrence9 = props.occurrence) === null || _props$occurrence9 === void 0 ? void 0 : _props$occurrence9.attendanceOccurrenceId) !== null && _props$occurrence$att !== void 0 ? _props$occurrence$att : 0;
              var resourcesWereAssigned = false;
              yield Promise.all(selectedPersonIds.value.map(function () {
                var _ref3 = _asyncToGenerator(function* (personId) {
                  var params = {
                    personId,
                    attendanceOccurrenceId
                  };
                  var result = yield http.doApiCall("PUT", "".concat(baseApiUrl, "/ScheduledPersonAddPending"), params);
                  if (!result.isSuccess) {
                    unsuccessfulAssignmentPersonIds.value.push(personId);
                  } else {
                    resourcesWereAssigned = true;
                  }
                });
                return function (_x) {
                  return _ref3.apply(this, arguments);
                };
              }()));
              if (unsuccessfulAssignmentPersonIds.value.length) {
                isAssigningResources.value = false;
                selectedPersonIds.value = [...unsuccessfulAssignmentPersonIds.value];
                getResources();
                if (resourcesWereAssigned) {
                  emit("partialAssignmentSuccess");
                }
              } else {
                isVisible.value = false;
              }
            });
            return _onSave.apply(this, arguments);
          }
          watch(isVisible, () => {
            if (isVisible.value) {
              getResourceSettings();
              resourceNameFilter.value = "";
            } else {
              isLoadingResourceSettings.value = false;
              isLoadingResources.value = false;
              isAssigningResources.value = false;
              availableResources.value = [];
              selectedPersonIds.value = [];
              unsuccessfulAssignmentPersonIds.value = [];
              unsuccessfulAssignmentMessages.value = [];
            }
          });
          watch(resourceSettings, () => {
            updateSettingsValues();
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(isVisible) ? isVisible.value = $event : null),
              title: "Select Individuals",
              saveText: "Assign",
              subtitle: unref(occurrenceTitle),
              isSaveButtonDisabled: unref(isSaveButtonDisabled),
              onSave: onSave
            }, {
              default: withCtx(() => [loadResourceSettingsErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: unref(AlertType).Warning
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(loadResourceSettingsErrorMessage.value), 1)]),
                _: 1
              }, 8, ["alertType"])) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [createElementVNode("div", _hoisted_1$7, [createElementVNode("div", _hoisted_2$7, [unref(primarySourceTypeItems).length > 1 ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createCommentVNode(" Desktop "), createElementVNode("div", _hoisted_3$6, [createVNode(unref(ButtonGroup), {
                modelValue: selectedPrimarySourceType.value,
                "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => selectedPrimarySourceType.value = $event), onSettingsSelectionChanged],
                items: unref(primarySourceTypeItems),
                disabled: unref(isBusy)
              }, null, 8, ["modelValue", "items", "disabled"])]), createCommentVNode(" Mobile "), createElementVNode("div", _hoisted_4$4, [createVNode(unref(DropDownList), {
                modelValue: selectedPrimarySourceType.value,
                "onUpdate:modelValue": [_cache[1] || (_cache[1] = $event => selectedPrimarySourceType.value = $event), onSettingsSelectionChanged],
                items: unref(primarySourceTypeItems),
                showBlankItem: false,
                disabled: unref(isBusy)
              }, null, 8, ["modelValue", "items", "disabled"])])], 64)) : createCommentVNode("v-if", true), unref(selectedSourceTypeIsAlternateGroup) ? (openBlock(), createElementBlock("div", _hoisted_5$4, [createVNode(unref(GroupPicker), {
                modelValue: selectedAlternateGroup.value,
                "onUpdate:modelValue": [_cache[2] || (_cache[2] = $event => selectedAlternateGroup.value = $event), onSettingsSelectionChanged],
                disabled: unref(isBusy)
              }, null, 8, ["modelValue", "disabled"])])) : createCommentVNode("v-if", true), unref(selectedSourceTypeIsDataView) ? (openBlock(), createElementBlock("div", _hoisted_6$3, [createVNode(unref(DataViewPicker), {
                modelValue: selectedDataView.value,
                "onUpdate:modelValue": [_cache[3] || (_cache[3] = $event => selectedDataView.value = $event), onSettingsSelectionChanged],
                entityTypeGuid: unref(EntityType).Person,
                disabled: unref(isBusy)
              }, null, 8, ["modelValue", "entityTypeGuid", "disabled"])])) : createCommentVNode("v-if", true), unref(groupName) ? (openBlock(), createElementBlock("h4", _hoisted_7$3, toDisplayString(unref(groupName)), 1)) : createCommentVNode("v-if", true), unref(selectedSourceTypeIsGroup) ? (openBlock(), createElementBlock(Fragment, {
                key: 4
              }, [createCommentVNode(" Desktop "), createElementVNode("div", _hoisted_8$2, [createVNode(unref(ButtonGroup), {
                modelValue: selectedSecondarySourceType.value,
                "onUpdate:modelValue": [_cache[4] || (_cache[4] = $event => selectedSecondarySourceType.value = $event), onSettingsSelectionChanged],
                items: unref(secondarySourceTypeItems),
                btnSize: unref(BtnSize).ExtraSmall,
                disabled: unref(isBusy)
              }, null, 8, ["modelValue", "items", "btnSize", "disabled"])]), createCommentVNode(" Mobile "), createElementVNode("div", _hoisted_9$1, [createVNode(unref(DropDownList), {
                modelValue: selectedSecondarySourceType.value,
                "onUpdate:modelValue": [_cache[5] || (_cache[5] = $event => selectedSecondarySourceType.value = $event), onSettingsSelectionChanged],
                items: unref(secondarySourceTypeItems),
                showBlankItem: false,
                disabled: unref(isBusy)
              }, null, 8, ["modelValue", "items", "disabled"])])], 64)) : createCommentVNode("v-if", true)]), createElementVNode("div", {
                class: normalizeClass(unref(remainingSpotsAndNameFilterCssClass))
              }, [unref(remainingResourceSpots) ? (openBlock(), createElementBlock("div", _hoisted_10$1, [createElementVNode("span", {
                class: normalizeClass(unref(remainingResourceSpots).cssClass)
              }, toDisplayString(unref(remainingResourceSpots).label), 3)])) : createCommentVNode("v-if", true), createElementVNode("div", {
                class: normalizeClass({
                  'mb-2 mb-md-0': unref(remainingResourceSpots)
                })
              }, [createVNode(unref(script$8), {
                modelValue: resourceNameFilter.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => resourceNameFilter.value = $event),
                disabled: unref(isNameFilterDisabled)
              }, null, 8, ["modelValue", "disabled"])], 2)], 2)]), createVNode(unref(Loading), {
                isLoading: unref(isBusy)
              }, {
                default: withCtx(() => [unsuccessfulAssignmentPersonIds.value.length ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 0,
                  alertType: unref(AlertType).Warning
                }, {
                  default: withCtx(() => [!unsuccessfulAssignmentMessages.value.length ? (openBlock(), createElementBlock(Fragment, {
                    key: 0
                  }, [_hoisted_11$1], 64)) : unsuccessfulAssignmentMessages.value.length === 1 ? (openBlock(), createElementBlock(Fragment, {
                    key: 1
                  }, [createTextVNode(toDisplayString(unsuccessfulAssignmentMessages.value[0]), 1)], 64)) : (openBlock(), createElementBlock("ul", _hoisted_12$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unsuccessfulAssignmentMessages.value, (message, index) => {
                    return openBlock(), createElementBlock("li", {
                      key: index
                    }, toDisplayString(message), 1);
                  }), 128))]))]),
                  _: 1
                }, 8, ["alertType"])) : createCommentVNode("v-if", true), loadResourcesErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 1,
                  alertType: unref(AlertType).Warning
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(loadResourcesErrorMessage.value), 1)]),
                  _: 1
                }, 8, ["alertType"])) : unref(noResourcesMessage) ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 2,
                  alertType: unref(AlertType).Info
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(noResourcesMessage)), 1)]),
                  _: 1
                }, 8, ["alertType"])) : (openBlock(), createBlock(unref(script$9), {
                  key: 3,
                  modelValue: selectedPersonIds.value,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => selectedPersonIds.value = $event),
                  resources: unref(filteredResources),
                  disabled: unref(isBusy)
                }, null, 8, ["modelValue", "resources", "disabled"]))]),
                _: 1
              }, 8, ["isLoading"])], 64))]),
              _: 1
            }, 8, ["modelValue", "subtitle", "isSaveButtonDisabled"]);
          };
        }
      });

      script$7.__file = "src/Group/Scheduling/GroupScheduler/selectIndividuals.partial.obs";

      var _hoisted_1$6 = createTextVNode(" Unable to schedule this occurrence. ");
      var _hoisted_2$6 = {
        key: 1,
        class: "location js-schedule-location"
      };
      var _hoisted_3$5 = {
        class: "d-flex"
      };
      var _hoisted_4$3 = {
        class: "d-block text-sm"
      };
      var _hoisted_5$3 = {
        key: 2,
        class: "list-group list-group-sched"
      };
      var _hoisted_6$2 = {
        class: "list-group-item d-flex align-items-center"
      };
      var _hoisted_7$2 = createElementVNode("i", {
        class: "fa fa-plus"
      }, null, -1);
      var script$6 = defineComponent({
        name: 'occurrence.partial',
        props: {
          occurrence: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["resourceListUpdated", "preferenceUpdated"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var http = useHttp();
          var isSelectingIndividuals = ref(false);
          var isLoadingResources = ref(true);
          var getResourcesWarningMessage = ref("");
          var updateResourceWarningMessage = ref("");
          var resources = ref([]);
          var reloadAllOccurrences = inject(ReloadAllOccurrences, ref(false));
          var reloadScheduleOccurrences = inject(ReloadScheduleOccurrences, ref(null));
          var reloadOccurrencesContainingResource = inject(ReloadOccurrencesContainingResource, ref(null));
          var title = computed(() => {
            var _props$occurrence;
            return ((_props$occurrence = props.occurrence) === null || _props$occurrence === void 0 ? void 0 : _props$occurrence.locationName) || "Location";
          });
          var attendanceOccurrenceId = computed(() => {
            var _props$occurrence$att, _props$occurrence2;
            return (_props$occurrence$att = (_props$occurrence2 = props.occurrence) === null || _props$occurrence2 === void 0 ? void 0 : _props$occurrence2.attendanceOccurrenceId) !== null && _props$occurrence$att !== void 0 ? _props$occurrence$att : 0;
          });
          var isValidAttendanceOccurrence = computed(() => {
            return attendanceOccurrenceId.value > 0;
          });
          var confirmedCount = computed(() => {
            var confirmed = ScheduledAttendanceItemStatusDescription[ScheduledAttendanceItemStatus.Confirmed].toLowerCase();
            return resources.value.filter(r => r.ConfirmationStatus === confirmed).length;
          });
          var pendingCount = computed(() => {
            var pending = ScheduledAttendanceItemStatusDescription[ScheduledAttendanceItemStatus.Pending].toLowerCase();
            return resources.value.filter(r => r.ConfirmationStatus === pending).length;
          });
          var declinedCount = computed(() => {
            var declined = ScheduledAttendanceItemStatusDescription[ScheduledAttendanceItemStatus.Declined].toLowerCase();
            return resources.value.filter(r => r.ConfirmationStatus === declined).length;
          });
          var totalCount = computed(() => {
            return confirmedCount.value + pendingCount.value;
          });
          var scheduleProgress = computed(() => {
            var minimumCapacity;
            var desiredCapacity;
            var maximumCapacity;
            if (props.occurrence) {
              minimumCapacity = props.occurrence.minimumCapacity;
              desiredCapacity = props.occurrence.desiredCapacity;
              maximumCapacity = props.occurrence.maximumCapacity;
            }
            var progress = {
              minimumCapacity,
              desiredCapacity,
              maximumCapacity,
              confirmedCount: confirmedCount.value,
              pendingCount: pendingCount.value,
              declinedCount: declinedCount.value
            };
            return progress;
          });
          var schedulingDisabled = computed(() => {
            return props.disabled || isLoadingResources.value || !props.occurrence.isSchedulingEnabled;
          });
          function getCurrentResources() {
            return _getCurrentResources.apply(this, arguments);
          }
          function _getCurrentResources() {
            _getCurrentResources = _asyncToGenerator(function* () {
              var _result$data;
              isLoadingResources.value = true;
              getResourcesWarningMessage.value = "";
              updateResourceWarningMessage.value = "";
              var result = yield http.get("/api/Attendances/GetAttendingSchedulerResources?attendanceOccurrenceId=".concat(attendanceOccurrenceId.value));
              isLoadingResources.value = false;
              if (!result.isSuccess) {
                var _result$errorMessage;
                getResourcesWarningMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error when trying to get current resources.";
                return;
              }
              resources.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : [];
            });
            return _getCurrentResources.apply(this, arguments);
          }
          function onResourceUpdated(action) {
            getCurrentResources();
            if (action === ResourceAction.Remove) {
              emit("resourceListUpdated", attendanceOccurrenceId.value);
            }
          }
          function onSelectIndividualsClick() {
            isSelectingIndividuals.value = true;
          }
          getCurrentResources();
          watch(() => props.occurrence, () => {
            getCurrentResources();
          });
          watch(isSelectingIndividuals, () => {
            if (!isSelectingIndividuals.value) {
              getCurrentResources();
              emit("resourceListUpdated", attendanceOccurrenceId.value);
            }
          });
          watch(reloadAllOccurrences, () => {
            if (reloadAllOccurrences.value) {
              getCurrentResources();
            }
          });
          watch(reloadScheduleOccurrences, triggeredById => {
            if (triggeredById && triggeredById !== attendanceOccurrenceId.value) {
              getCurrentResources();
            }
          });
          watch(reloadOccurrencesContainingResource, personId => {
            var _resources$value;
            if (personId && (_resources$value = resources.value) !== null && _resources$value !== void 0 && _resources$value.some(r => (r === null || r === void 0 ? void 0 : r.PersonId) === personId)) {
              getCurrentResources();
            }
          });
          return (_ctx, _cache) => {
            return !unref(isValidAttendanceOccurrence) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [_hoisted_1$6]),
              _: 1
            }, 8, ["alertType"])) : (openBlock(), createElementBlock("div", _hoisted_2$6, [createElementVNode("div", _hoisted_3$5, [createElementVNode("span", _hoisted_4$3, toDisplayString(unref(title)), 1)]), updateResourceWarningMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(updateResourceWarningMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), getResourcesWarningMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(getResourcesWarningMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : (openBlock(), createElementBlock("ul", _hoisted_5$3, [(openBlock(true), createElementBlock(Fragment, null, renderList(resources.value, resource => {
              return openBlock(), createBlock(unref(script$b), {
                key: resource.AttendanceId,
                occurrence: __props.occurrence,
                resource: resource,
                updateResourceWarningMessage: updateResourceWarningMessage.value,
                "onUpdate:updateResourceWarningMessage": _cache[0] || (_cache[0] = $event => updateResourceWarningMessage.value = $event),
                disabled: unref(schedulingDisabled),
                onResourceUpdated: onResourceUpdated,
                onPreferenceUpdated: $event => _ctx.$emit('preferenceUpdated', resource.PersonId)
              }, null, 8, ["occurrence", "resource", "updateResourceWarningMessage", "disabled", "onPreferenceUpdated"]);
            }), 128)), createElementVNode("li", _hoisted_6$2, [createVNode(unref(script$d), {
              progress: unref(scheduleProgress)
            }, null, 8, ["progress"]), withDirectives((openBlock(), createElementBlock("div", null, [createVNode(unref(RockButton), {
              type: "button",
              class: "circle-plus",
              disabled: unref(schedulingDisabled),
              onClick: onSelectIndividualsClick
            }, {
              default: withCtx(() => [createVNode(unref(Loading), {
                isLoading: isLoadingResources.value,
                isSmall: true
              }, {
                default: withCtx(() => [_hoisted_7$2]),
                _: 1
              }, 8, ["isLoading"])]),
              _: 1
            }, 8, ["disabled"])])), [[unref(NoDragScroll)]])])])), createVNode(unref(script$7), {
              isVisible: isSelectingIndividuals.value,
              "onUpdate:isVisible": _cache[1] || (_cache[1] = $event => isSelectingIndividuals.value = $event),
              occurrence: __props.occurrence,
              spotsFilledCount: unref(totalCount),
              onPartialAssignmentSuccess: getCurrentResources
            }, null, 8, ["isVisible", "occurrence", "spotsFilledCount"])]));
          };
        }
      });

      script$6.__file = "src/Group/Scheduling/GroupScheduler/occurrence.partial.obs";

      var _hoisted_1$5 = {
        class: "sched-group-provide-location-resource"
      };
      var _hoisted_2$5 = {
        class: "sched-group-provide-location-resource-name"
      };
      var script$5 = defineComponent({
        name: 'provideLocations.partial',
        props: {
          isVisible: {
            type: Boolean,
            required: true
          },
          unassignedResourceCount: {
            type: Object,
            required: true
          },
          availableOccurrences: {
            type: Array,
            required: true
          }
        },
        emits: ["update:isVisible", "resourceListUpdated"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var http = useHttp();
          var baseApiUrl = "/api/Attendances";
          var missingDataErrorMessage = "Unable to get unassigned resources.";
          var isVisible = useVModelPassthrough(props, "isVisible", emit);
          var blockActionErrorMessage = ref("");
          var isLoadingResources = ref(false);
          var resources = ref([]);
          var locationIdByPersonIds = ref({});
          var isAssigningResources = ref(false);
          var reportAssignedResources = inject(ReportAssignedResources);
          var title = computed(() => {
            var _props$unassignedReso, _props$unassignedReso2;
            return "Provide ".concat(pluralize("Location", (_props$unassignedReso = (_props$unassignedReso2 = props.unassignedResourceCount) === null || _props$unassignedReso2 === void 0 ? void 0 : _props$unassignedReso2.resourceCount) !== null && _props$unassignedReso !== void 0 ? _props$unassignedReso : 0));
          });
          var unassignedResourceCountGuid = computed(() => {
            var _props$unassignedReso3;
            return toGuidOrNull((_props$unassignedReso3 = props.unassignedResourceCount) === null || _props$unassignedReso3 === void 0 ? void 0 : _props$unassignedReso3.guid);
          });
          var occurrenceDate = computed(() => {
            var _props$unassignedReso4, _props$unassignedReso5;
            return (_props$unassignedReso4 = (_props$unassignedReso5 = props.unassignedResourceCount) === null || _props$unassignedReso5 === void 0 ? void 0 : _props$unassignedReso5.occurrenceDate) !== null && _props$unassignedReso4 !== void 0 ? _props$unassignedReso4 : "";
          });
          var scheduleId = computed(() => {
            var _props$unassignedReso6, _props$unassignedReso7;
            return (_props$unassignedReso6 = (_props$unassignedReso7 = props.unassignedResourceCount) === null || _props$unassignedReso7 === void 0 ? void 0 : _props$unassignedReso7.scheduleId) !== null && _props$unassignedReso6 !== void 0 ? _props$unassignedReso6 : 0;
          });
          var groupId = computed(() => {
            var _props$unassignedReso8, _props$unassignedReso9;
            return (_props$unassignedReso8 = (_props$unassignedReso9 = props.unassignedResourceCount) === null || _props$unassignedReso9 === void 0 ? void 0 : _props$unassignedReso9.groupId) !== null && _props$unassignedReso8 !== void 0 ? _props$unassignedReso8 : 0;
          });
          var attendanceOccurrenceId = computed(() => {
            var _props$unassignedReso10, _props$unassignedReso11;
            return (_props$unassignedReso10 = (_props$unassignedReso11 = props.unassignedResourceCount) === null || _props$unassignedReso11 === void 0 ? void 0 : _props$unassignedReso11.attendanceOccurrenceId) !== null && _props$unassignedReso10 !== void 0 ? _props$unassignedReso10 : 0;
          });
          var locations = computed(() => {
            var _props$availableOccur, _props$availableOccur2;
            return (_props$availableOccur = (_props$availableOccur2 = props.availableOccurrences) === null || _props$availableOccur2 === void 0 ? void 0 : _props$availableOccur2.filter(o => (o === null || o === void 0 ? void 0 : o.locationId) && o.locationName).map(o => ({
              text: o.locationName,
              value: o.locationId.toString()
            }))) !== null && _props$availableOccur !== void 0 ? _props$availableOccur : [];
          });
          var isDataMissing = computed(() => {
            return !unassignedResourceCountGuid || !occurrenceDate || !scheduleId || !groupId || !attendanceOccurrenceId || !locations.value.length;
          });
          var isBusy = computed(() => {
            return isLoadingResources.value || isAssigningResources.value;
          });
          var areAnyLocationsSelected = computed(() => {
            return Object.entries(locationIdByPersonIds.value).some(_ref2 => {
              var _ref3 = _slicedToArray(_ref2, 2);
                _ref3[0];
                var value = _ref3[1];
              return !!value;
            });
          });
          var isSaveButtonDisabled = computed(() => {
            return isDataMissing.value || isBusy.value || !areAnyLocationsSelected.value;
          });
          function getUnassignedResources() {
            return _getUnassignedResources.apply(this, arguments);
          }
          function _getUnassignedResources() {
            _getUnassignedResources = _asyncToGenerator(function* () {
              var _result$data;
              if (isBusy.value || isDataMissing.value) {
                return;
              }
              isLoadingResources.value = true;
              blockActionErrorMessage.value = "";
              var result = yield http.get("".concat(baseApiUrl, "/GetAttendingSchedulerResources?attendanceOccurrenceId=").concat(attendanceOccurrenceId.value));
              isLoadingResources.value = false;
              if (!result.isSuccess) {
                blockActionErrorMessage.value = result.errorMessage || "Unknown error while trying to get unassigned resources.";
                return;
              }
              resources.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : [];
              if (!resources.value.length) {
                blockActionErrorMessage.value = missingDataErrorMessage;
                return;
              }
              var locationIdByPersonIds = {};
              resources.value.forEach(r => {
                locationIdByPersonIds[r.PersonId] = "";
              });
            });
            return _getUnassignedResources.apply(this, arguments);
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              if (isSaveButtonDisabled.value) {
                return;
              }
              isAssigningResources.value = true;
              blockActionErrorMessage.value = "";
              var successfullyAssignedPersonIds = [];
              var unsuccessfullyAssignedPersonIds = [];
              yield Promise.all(resources.value.map(function () {
                var _ref4 = _asyncToGenerator(function* (resource) {
                  var _props$availableOccur3, _props$availableOccur4;
                  var personId = resource.PersonId;
                  var locationId = toNumberOrNull(locationIdByPersonIds.value[personId]);
                  if (!locationId) {
                    return;
                  }
                  var assignToAttendanceOccurrenceId = (_props$availableOccur3 = props.availableOccurrences) === null || _props$availableOccur3 === void 0 ? void 0 : (_props$availableOccur4 = _props$availableOccur3.find(o => (o === null || o === void 0 ? void 0 : o.locationId) === locationId)) === null || _props$availableOccur4 === void 0 ? void 0 : _props$availableOccur4.attendanceOccurrenceId;
                  if (!assignToAttendanceOccurrenceId) {
                    unsuccessfullyAssignedPersonIds.push(personId);
                    return;
                  }
                  var attendanceId = resource.AttendanceId;
                  var result = yield http.doApiCall("PUT", "".concat(baseApiUrl, "/ScheduledPersonRemove?attendanceId=").concat(attendanceId));
                  if (!result.isSuccess) {
                    unsuccessfullyAssignedPersonIds.push(personId);
                    return;
                  }
                  var params = {
                    personId,
                    attendanceOccurrenceId: assignToAttendanceOccurrenceId
                  };
                  result = yield http.doApiCall("PUT", "".concat(baseApiUrl, "/ScheduledPersonAddConfirmed"), params);
                  if (!result.isSuccess) {
                    unsuccessfullyAssignedPersonIds.push(personId);
                  } else {
                    successfullyAssignedPersonIds.push(personId);
                  }
                });
                return function (_x) {
                  return _ref4.apply(this, arguments);
                };
              }()));
              if (successfullyAssignedPersonIds.length) {
                emit("resourceListUpdated", attendanceOccurrenceId.value);
                reportAssignedResources === null || reportAssignedResources === void 0 ? void 0 : reportAssignedResources(unassignedResourceCountGuid.value, successfullyAssignedPersonIds.length);
                resources.value = resources.value.filter(resource => !successfullyAssignedPersonIds.some(id => resource.PersonId === id));
                successfullyAssignedPersonIds.forEach(id => delete locationIdByPersonIds.value[id]);
              }
              if (unsuccessfullyAssignedPersonIds.length) {
                var count = unsuccessfullyAssignedPersonIds.length;
                blockActionErrorMessage.value = "The following ".concat(pluralize("assignment", count), " ").concat(pluralize("was", count), " unsuccessful.");
              } else {
                isVisible.value = false;
              }
              isAssigningResources.value = false;
            });
            return _onSave.apply(this, arguments);
          }
          getUnassignedResources();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(isVisible) ? isVisible.value = $event : null),
              modalWrapperClasses: "group-scheduler-v2 provide-location-modal",
              saveText: "Save",
              title: unref(title),
              isSaveButtonDisabled: unref(isSaveButtonDisabled),
              onSave: onSave
            }, {
              default: withCtx(() => [unref(isDataMissing) ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: unref(AlertType).Warning
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(missingDataErrorMessage))]),
                _: 1
              }, 8, ["alertType"])) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [blockActionErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: unref(AlertType).Warning
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(blockActionErrorMessage.value), 1)]),
                _: 1
              }, 8, ["alertType"])) : createCommentVNode("v-if", true), isLoadingResources.value ? (openBlock(), createBlock(unref(LoadingIndicator), {
                key: 1,
                delay: 500
              })) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(resources.value, resource => {
                return openBlock(), createElementBlock("div", _hoisted_1$5, [createElementVNode("div", _hoisted_2$5, toDisplayString(resource.PersonName), 1), createVNode(unref(DropDownList), {
                  modelValue: locationIdByPersonIds.value[resource.PersonId],
                  "onUpdate:modelValue": $event => locationIdByPersonIds.value[resource.PersonId] = $event,
                  items: unref(locations),
                  validationTitle: "Location for ".concat(resource.PersonName),
                  inputClasses: "input-width-lg",
                  disabled: unref(isBusy)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "validationTitle", "disabled"])]);
              }), 256))], 64))]),
              _: 1
            }, 8, ["modelValue", "title", "isSaveButtonDisabled"]);
          };
        }
      });

      var css_248z$1 = ".group-scheduler-v2{@media (min-width:576px){&.provide-location-modal{.modal-scrollable{display:flex;justify-content:center}.modal.container{left:auto;margin-left:auto;margin-right:auto;min-width:480px;right:auto;width:auto}}}.sched-group-provide-location-resource{align-items:center;display:flex;gap:12px;justify-content:space-between;&:not(:first-of-type){margin-top:12px}}}";
      styleInject(css_248z$1);

      script$5.__file = "src/Group/Scheduling/GroupScheduler/provideLocations.partial.obs";

      var _hoisted_1$4 = {
        class: "card card-sched js-schedule-group"
      };
      var _hoisted_2$4 = {
        class: "card-body"
      };
      var _hoisted_3$4 = {
        class: "d-block font-weight-bold text-sm"
      };
      var _hoisted_4$2 = createTextVNode(" No locations available. ");
      var _hoisted_5$2 = {
        class: "group-sched-unassigned-resources-text"
      };
      var script$4 = defineComponent({
        name: 'group.partial',
        props: {
          occurrences: {
            type: Array,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["resourceListUpdated", "preferenceUpdated"],
        setup(__props) {
          var props = __props;
          var occurrenceDate = inject(OccurrenceDate, ref(""));
          var scheduleId = inject(ScheduleId, ref(0));
          var unassignedResourceCounts = inject(UnassignedResourceCounts, ref([]));
          var isProvideLocationsModalVisible = ref(false);
          var groupId = computed(() => {
            var _props$occurrences$0$, _props$occurrences, _props$occurrences$;
            return (_props$occurrences$0$ = (_props$occurrences = props.occurrences) === null || _props$occurrences === void 0 ? void 0 : (_props$occurrences$ = _props$occurrences[0]) === null || _props$occurrences$ === void 0 ? void 0 : _props$occurrences$.groupId) !== null && _props$occurrences$0$ !== void 0 ? _props$occurrences$0$ : 0;
          });
          var title = computed(() => {
            var _props$occurrences2, _props$occurrences2$;
            return ((_props$occurrences2 = props.occurrences) === null || _props$occurrences2 === void 0 ? void 0 : (_props$occurrences2$ = _props$occurrences2[0]) === null || _props$occurrences2$ === void 0 ? void 0 : _props$occurrences2$.groupName) || "Group";
          });
          var anyLocations = computed(() => {
            var _props$occurrences3;
            return !!((_props$occurrences3 = props.occurrences) !== null && _props$occurrences3 !== void 0 && _props$occurrences3.length);
          });
          var unassignedResourceCount = computed(() => {
            var _unassignedResourceCo;
            if (!occurrenceDate.value || !scheduleId.value || !groupId.value || !((_unassignedResourceCo = unassignedResourceCounts.value) !== null && _unassignedResourceCo !== void 0 && _unassignedResourceCo.length)) {
              return;
            }
            return unassignedResourceCounts.value.find(bag => bag.occurrenceDate === occurrenceDate.value && bag.scheduleId === scheduleId.value && bag.groupId === groupId.value);
          });
          var unassignedResourceText = computed(() => {
            var _unassignedResourceCo2, _unassignedResourceCo3;
            var count = (_unassignedResourceCo2 = (_unassignedResourceCo3 = unassignedResourceCount.value) === null || _unassignedResourceCo3 === void 0 ? void 0 : _unassignedResourceCo3.resourceCount) !== null && _unassignedResourceCo2 !== void 0 ? _unassignedResourceCo2 : 0;
            return count ? "Missing ".concat(pluralize("location", count), " for ").concat(count, " ").concat(pluralize("individual", count), ".") : "";
          });
          var provideLocationText = computed(() => {
            var _unassignedResourceCo4, _unassignedResourceCo5;
            var count = (_unassignedResourceCo4 = (_unassignedResourceCo5 = unassignedResourceCount.value) === null || _unassignedResourceCo5 === void 0 ? void 0 : _unassignedResourceCo5.resourceCount) !== null && _unassignedResourceCo4 !== void 0 ? _unassignedResourceCo4 : 0;
            return count ? "Provide ".concat(pluralize("Location", count)) : "";
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createElementVNode("div", _hoisted_1$4, [createElementVNode("div", _hoisted_2$4, [createElementVNode("span", _hoisted_3$4, toDisplayString(unref(title)), 1), !unref(anyLocations) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Info
            }, {
              default: withCtx(() => [_hoisted_4$2]),
              _: 1
            }, 8, ["alertType"])) : (openBlock(), createElementBlock(Fragment, {
              key: 1
            }, [unref(unassignedResourceCount) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning,
              class: "group-sched-unassigned-resources small"
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_5$2, toDisplayString(unref(unassignedResourceText)), 1), withDirectives((openBlock(), createElementBlock("div", {
                class: "group-sched-provide-locations",
                onClick: _cache[0] || (_cache[0] = $event => isProvideLocationsModalVisible.value = true)
              }, [createTextVNode(toDisplayString(unref(provideLocationText)), 1)])), [[unref(NoDragScroll)]])]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.occurrences, occurrence => {
              return openBlock(), createBlock(unref(script$6), {
                key: occurrence.locationId,
                occurrence: occurrence,
                disabled: __props.disabled,
                onResourceListUpdated: _cache[1] || (_cache[1] = $event => _ctx.$emit('resourceListUpdated', $event)),
                onPreferenceUpdated: _cache[2] || (_cache[2] = $event => _ctx.$emit('preferenceUpdated', $event))
              }, null, 8, ["occurrence", "disabled"]);
            }), 128))], 64))])]), unref(unassignedResourceCount) ? (openBlock(), createBlock(unref(script$5), {
              key: 0,
              isVisible: isProvideLocationsModalVisible.value,
              "onUpdate:isVisible": _cache[3] || (_cache[3] = $event => isProvideLocationsModalVisible.value = $event),
              unassignedResourceCount: unref(unassignedResourceCount),
              availableOccurrences: __props.occurrences,
              onResourceListUpdated: _cache[4] || (_cache[4] = $event => _ctx.$emit('resourceListUpdated', $event))
            }, null, 8, ["isVisible", "unassignedResourceCount", "availableOccurrences"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      });

      var css_248z = ".group-sched-unassigned-resources[data-v-766b08ca]{margin:8px 0}.group-sched-provide-locations[data-v-766b08ca]{cursor:pointer;text-decoration:underline}";
      styleInject(css_248z);

      script$4.__scopeId = "data-v-766b08ca";
      script$4.__file = "src/Group/Scheduling/GroupScheduler/group.partial.obs";

      var _hoisted_1$3 = {
        class: "schedule-column js-schedule-column"
      };
      var _hoisted_2$3 = {
        class: "schedule-header"
      };
      var _hoisted_3$3 = createElementVNode("i", {
        class: "fa fa-chevron-left"
      }, null, -1);
      var _hoisted_4$1 = [_hoisted_3$3];
      var _hoisted_5$1 = {
        class: "text-center text-sm-left"
      };
      var _hoisted_6$1 = createElementVNode("i", {
        class: "fa fa-chevron-right"
      }, null, -1);
      var _hoisted_7$1 = [_hoisted_6$1];
      var _hoisted_8$1 = createTextVNode(" No groups available. ");
      var script$3 = defineComponent({
        name: 'schedule.partial',
        props: {
          occurrences: {
            type: Array,
            required: true
          },
          showPrevNextButtons: {
            type: Boolean,
            default: false
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["goPrevious", "goNext", "preferenceUpdated"],
        setup(__props) {
          var props = __props;
          var reloadScheduleOccurrences = ref(null);
          var scheduleId = computed(() => {
            var _props$occurrences$0$, _props$occurrences, _props$occurrences$;
            return (_props$occurrences$0$ = (_props$occurrences = props.occurrences) === null || _props$occurrences === void 0 ? void 0 : (_props$occurrences$ = _props$occurrences[0]) === null || _props$occurrences$ === void 0 ? void 0 : _props$occurrences$.scheduleId) !== null && _props$occurrences$0$ !== void 0 ? _props$occurrences$0$ : 0;
          });
          var title = computed(() => {
            var _props$occurrences2, _props$occurrences2$;
            return ((_props$occurrences2 = props.occurrences) === null || _props$occurrences2 === void 0 ? void 0 : (_props$occurrences2$ = _props$occurrences2[0]) === null || _props$occurrences2$ === void 0 ? void 0 : _props$occurrences2$.scheduleName) || "Schedule";
          });
          var sortedOccurrencesByGroup = computed(() => {
            var _props$occurrences3;
            if (!((_props$occurrences3 = props.occurrences) !== null && _props$occurrences3 !== void 0 && _props$occurrences3.length)) {
              return [];
            }
            var groupedOccurrences = new Map();
            props.occurrences.filter(o => o.groupId).forEach(o => {
              var groupId = o.groupId || 0;
              var groupOccurrences = groupedOccurrences.get(groupId);
              if (!groupOccurrences) {
                groupOccurrences = [];
                groupedOccurrences.set(groupId, groupOccurrences);
              }
              groupOccurrences.push(o);
            });
            var sortedGroupOccurrences = [];
            groupedOccurrences.forEach(occurrences => sortedGroupOccurrences.push(occurrences));
            return sortedGroupOccurrences;
          });
          var anyGroups = computed(() => {
            return !!sortedOccurrencesByGroup.value.length;
          });
          function getGroupIdKey(occurrences) {
            var _occurrences$0$groupI, _occurrences$;
            return (_occurrences$0$groupI = occurrences === null || occurrences === void 0 ? void 0 : (_occurrences$ = occurrences[0]) === null || _occurrences$ === void 0 ? void 0 : _occurrences$.groupId) !== null && _occurrences$0$groupI !== void 0 ? _occurrences$0$groupI : 0;
          }
          function onResourceListUpdated(triggeredByAttendanceOccurrenceId) {
            reloadScheduleOccurrences.value = triggeredByAttendanceOccurrenceId;
            nextTick(() => {
              reloadScheduleOccurrences.value = null;
            });
          }
          provide(ScheduleId, scheduleId);
          provide(ReloadScheduleOccurrences, reloadScheduleOccurrences);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$3, [createElementVNode("div", _hoisted_2$3, [__props.showPrevNextButtons ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "page prev clickable",
              onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('goPrevious'))
            }, _hoisted_4$1)) : createCommentVNode("v-if", true), createElementVNode("span", _hoisted_5$1, toDisplayString(unref(title)), 1), __props.showPrevNextButtons ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: "page next clickable",
              onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('goNext'))
            }, _hoisted_7$1)) : createCommentVNode("v-if", true)]), !unref(anyGroups) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Info
            }, {
              default: withCtx(() => [_hoisted_8$1]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sortedOccurrencesByGroup), occurrences => {
              return openBlock(), createBlock(unref(script$4), {
                key: getGroupIdKey(occurrences),
                occurrences: occurrences,
                disabled: __props.disabled,
                onResourceListUpdated: onResourceListUpdated,
                onPreferenceUpdated: _cache[2] || (_cache[2] = $event => _ctx.$emit('preferenceUpdated', $event))
              }, null, 8, ["occurrences", "disabled"]);
            }), 128))]);
          };
        }
      });

      script$3.__file = "src/Group/Scheduling/GroupScheduler/schedule.partial.obs";

      function formatSchedulerDate(dateString) {
        var formattedDate;
        var rockDateTime = RockDateTime.parseISO(dateString);
        if (rockDateTime) {
          formattedDate = rockDateTime.toASPString("dddd, MMM d");
          if (formattedDate) {
            var dateParts = formattedDate.split(" ");
            if (dateParts.length === 3) {
              var ordinalDate = toOrdinalSuffix(+dateParts[2]);
              formattedDate = [dateParts[0], dateParts[1], ordinalDate !== null && ordinalDate !== void 0 ? ordinalDate : dateParts[2]].join(" ");
            }
          }
        }
        return formattedDate || "No Date Provided";
      }

      var _hoisted_1$2 = {
        class: "occurrence-date-title"
      };
      var _hoisted_2$2 = createTextVNode(" No schedules available. ");
      var _hoisted_3$2 = {
        key: 1,
        class: "schedules"
      };
      var script$2 = defineComponent({
        name: 'occurrenceDate.partial',
        props: {
          occurrences: {
            type: Array,
            required: true
          },
          showPrevNextButtons: {
            type: Boolean,
            default: false
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["scheduleComponentsCreated", "goPrevious", "goNext", "preferenceUpdated"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var locationsResizeObserver;
          var occurrenceDateElement = ref(null);
          var scheduleComponents = ref([]);
          var occurrenceDate = computed(() => {
            var _props$occurrences$0$, _props$occurrences, _props$occurrences$;
            return (_props$occurrences$0$ = (_props$occurrences = props.occurrences) === null || _props$occurrences === void 0 ? void 0 : (_props$occurrences$ = _props$occurrences[0]) === null || _props$occurrences$ === void 0 ? void 0 : _props$occurrences$.occurrenceDate) !== null && _props$occurrences$0$ !== void 0 ? _props$occurrences$0$ : "";
          });
          var title = computed(() => {
            return formatSchedulerDate(occurrenceDate.value);
          });
          var sortedOccurrencesBySchedule = computed(() => {
            var _props$occurrences2;
            if (!((_props$occurrences2 = props.occurrences) !== null && _props$occurrences2 !== void 0 && _props$occurrences2.length)) {
              return [];
            }
            var groupedOccurrences = new Map();
            props.occurrences.filter(o => o.scheduleId).forEach(o => {
              var scheduleId = o.scheduleId || 0;
              var scheduleOccurrences = groupedOccurrences.get(scheduleId);
              if (!scheduleOccurrences) {
                scheduleOccurrences = [];
                groupedOccurrences.set(scheduleId, scheduleOccurrences);
              }
              scheduleOccurrences.push(o);
            });
            var sortedScheduleOccurrences = [];
            groupedOccurrences.forEach(occurrences => sortedScheduleOccurrences.push(occurrences));
            return sortedScheduleOccurrences;
          });
          var scheduleCount = computed(() => {
            return sortedOccurrencesBySchedule.value.length;
          });
          var anySchedules = computed(() => {
            return !!scheduleCount.value;
          });
          var inlineStyle = computed(() => {
            return "--schedule-count:".concat(scheduleCount.value);
          });
          function getScheduleIdKey(occurrences) {
            var _occurrences$0$schedu, _occurrences$;
            return (_occurrences$0$schedu = occurrences === null || occurrences === void 0 ? void 0 : (_occurrences$ = occurrences[0]) === null || _occurrences$ === void 0 ? void 0 : _occurrences$.scheduleId) !== null && _occurrences$0$schedu !== void 0 ? _occurrences$0$schedu : 0;
          }
          function addScheduleComponent(component, index) {
            if (!component) {
              return;
            }
            scheduleComponents.value[index] = component;
            if (scheduleComponents.value.length === scheduleCount.value) {
              emit("scheduleComponentsCreated", scheduleComponents.value);
              observeLocationSizes();
            }
          }
          function observeLocationSizes() {
            if (!window.ResizeObserver || !occurrenceDateElement.value) {
              return;
            }
            if (locationsResizeObserver) {
              locationsResizeObserver.disconnect();
            } else {
              locationsResizeObserver = new ResizeObserver(_ => {
                setEqualGroupHeights();
              });
            }
            occurrenceDateElement.value.querySelectorAll(".js-schedule-location").forEach(location => {
              var _locationsResizeObser;
              (_locationsResizeObser = locationsResizeObserver) === null || _locationsResizeObser === void 0 ? void 0 : _locationsResizeObser.observe(location);
            });
          }
          function setEqualGroupHeights() {
            if (!occurrenceDateElement.value) {
              return;
            }
            var schedules = occurrenceDateElement.value.querySelectorAll(".js-schedule-column");
            schedules.forEach(schedule => {
              schedule.querySelectorAll(".js-schedule-group").forEach(group => {
                group.style.minHeight = "auto";
              });
            });
            if (window.innerWidth > 768) {
              nextTick(() => {
                var groupHeights = [];
                schedules.forEach(schedule => {
                  schedule.querySelectorAll(".js-schedule-group").forEach((group, i) => {
                    if (!groupHeights[i] || groupHeights[i] < group.offsetHeight) {
                      groupHeights[i] = group.offsetHeight;
                    }
                  });
                });
                schedules.forEach(schedule => {
                  schedule.querySelectorAll(".js-schedule-group").forEach((group, i) => {
                    group.style.minHeight = "".concat(groupHeights[i], "px");
                  });
                });
              });
            }
          }
          provide(OccurrenceDate, occurrenceDate);
          provide(OccurrenceDateTitle, title);
          watch(() => props.occurrences, () => {
            scheduleComponents.value = [];
          });
          onUnmounted(() => {
            if (locationsResizeObserver) {
              locationsResizeObserver.disconnect();
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              ref_key: "occurrenceDateElement",
              ref: occurrenceDateElement,
              class: "occurrence-date js-occurrence-date",
              style: normalizeStyle(unref(inlineStyle))
            }, [createElementVNode("h2", _hoisted_1$2, toDisplayString(unref(title)), 1), !unref(anySchedules) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Info
            }, {
              default: withCtx(() => [_hoisted_2$2]),
              _: 1
            }, 8, ["alertType"])) : (openBlock(), createElementBlock("div", _hoisted_3$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(sortedOccurrencesBySchedule), (occurrences, index) => {
              return openBlock(), createBlock(unref(script$3), {
                key: getScheduleIdKey(occurrences),
                occurrences: occurrences,
                showPrevNextButtons: __props.showPrevNextButtons,
                ref_for: true,
                ref: comp => addScheduleComponent(comp, index),
                disabled: __props.disabled,
                onGoPrevious: $event => _ctx.$emit('goPrevious', index),
                onGoNext: $event => _ctx.$emit('goNext', index),
                onPreferenceUpdated: _cache[0] || (_cache[0] = $event => _ctx.$emit('preferenceUpdated', $event))
              }, null, 8, ["occurrences", "showPrevNextButtons", "disabled", "onGoPrevious", "onGoNext"]);
            }), 128))]))], 4);
          };
        }
      });

      script$2.__file = "src/Group/Scheduling/GroupScheduler/occurrenceDate.partial.obs";

      var _hoisted_1$1 = {
        class: "group-scheduler-v2"
      };
      var _hoisted_2$1 = createTextVNode(" Select the filter options below to limit what is shown on the group scheduler. ");
      var _hoisted_3$1 = {
        key: 1,
        class: "form-group"
      };
      var script$1 = defineComponent({
        name: 'selectFilters.partial',
        props: {
          isVisible: {
            type: Boolean,
            required: true
          },
          filters: {
            type: Object,
            required: true
          },
          disallowGroupSelection: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:isVisible", "filtersApplied"],
        setup(__props, _ref) {
          var _props$filters$groups, _props$filters, _props$filters$locati, _props$filters2, _props$filters2$locat, _props$filters$locati2, _props$filters3, _props$filters3$locat, _props$filters$schedu, _props$filters4, _props$filters4$sched, _props$filters$schedu2, _props$filters5, _props$filters5$sched, _props$filters6, _props$filters7, _props$filters8, _props$filters9;
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var isVisible = useVModelPassthrough(props, "isVisible", emit);
          var isRefiningFilters = ref(false);
          var isApplyingFilters = ref(false);
          var warningMessage = ref("");
          var isCanceled = ref(true);
          var originalValue = ref(props.filters);
          var selectedGroups = ref((_props$filters$groups = (_props$filters = props.filters) === null || _props$filters === void 0 ? void 0 : _props$filters.groups) !== null && _props$filters$groups !== void 0 ? _props$filters$groups : []);
          var availableLocations = ref((_props$filters$locati = (_props$filters2 = props.filters) === null || _props$filters2 === void 0 ? void 0 : (_props$filters2$locat = _props$filters2.locations) === null || _props$filters2$locat === void 0 ? void 0 : _props$filters2$locat.availableLocations) !== null && _props$filters$locati !== void 0 ? _props$filters$locati : []);
          var selectedLocations = ref((_props$filters$locati2 = (_props$filters3 = props.filters) === null || _props$filters3 === void 0 ? void 0 : (_props$filters3$locat = _props$filters3.locations) === null || _props$filters3$locat === void 0 ? void 0 : _props$filters3$locat.selectedLocations) !== null && _props$filters$locati2 !== void 0 ? _props$filters$locati2 : []);
          var availableSchedules = ref((_props$filters$schedu = (_props$filters4 = props.filters) === null || _props$filters4 === void 0 ? void 0 : (_props$filters4$sched = _props$filters4.schedules) === null || _props$filters4$sched === void 0 ? void 0 : _props$filters4$sched.availableSchedules) !== null && _props$filters$schedu !== void 0 ? _props$filters$schedu : []);
          var selectedSchedules = ref((_props$filters$schedu2 = (_props$filters5 = props.filters) === null || _props$filters5 === void 0 ? void 0 : (_props$filters5$sched = _props$filters5.schedules) === null || _props$filters5$sched === void 0 ? void 0 : _props$filters5$sched.selectedSchedules) !== null && _props$filters$schedu2 !== void 0 ? _props$filters$schedu2 : []);
          var selectedDateRange = ref(getSlidingDateRange((_props$filters6 = props.filters) === null || _props$filters6 === void 0 ? void 0 : _props$filters6.dateRange));
          var firstEndOfWeekDate = ref((_props$filters7 = props.filters) === null || _props$filters7 === void 0 ? void 0 : _props$filters7.firstEndOfWeekDate);
          var lastEndOfWeekdDate = ref((_props$filters8 = props.filters) === null || _props$filters8 === void 0 ? void 0 : _props$filters8.lastEndOfWeekDate);
          var friendlyDateRange = ref((_props$filters9 = props.filters) === null || _props$filters9 === void 0 ? void 0 : _props$filters9.friendlyDateRange);
          var groupsTextLabel = computed(() => {
            return pluralConditional(selectedGroups.value.length, "Group", "Groups");
          });
          var groupsText = computed(() => {
            return selectedGroups.value.length ? selectedGroups.value.map(g => g.text).join(", ") : "No groups selected";
          });
          var selectedLocationValues = computed({
            get() {
              var _selectedLocations$va, _selectedLocations$va2, _selectedLocations$va3;
              return (_selectedLocations$va = (_selectedLocations$va2 = selectedLocations.value) === null || _selectedLocations$va2 === void 0 ? void 0 : (_selectedLocations$va3 = _selectedLocations$va2.filter(item => item === null || item === void 0 ? void 0 : item.value)) === null || _selectedLocations$va3 === void 0 ? void 0 : _selectedLocations$va3.map(item => {
                var _item$value;
                return (_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : "";
              })) !== null && _selectedLocations$va !== void 0 ? _selectedLocations$va : [];
            },
            set(newValue) {
              selectedLocations.value = newValue.map(value => ({
                value
              }));
            }
          });
          var selectedScheduleValues = computed({
            get() {
              var _selectedSchedules$va, _selectedSchedules$va2, _selectedSchedules$va3;
              return (_selectedSchedules$va = (_selectedSchedules$va2 = selectedSchedules.value) === null || _selectedSchedules$va2 === void 0 ? void 0 : (_selectedSchedules$va3 = _selectedSchedules$va2.filter(item => item === null || item === void 0 ? void 0 : item.value)) === null || _selectedSchedules$va3 === void 0 ? void 0 : _selectedSchedules$va3.map(item => {
                var _item$value2;
                return (_item$value2 = item.value) !== null && _item$value2 !== void 0 ? _item$value2 : "";
              })) !== null && _selectedSchedules$va !== void 0 ? _selectedSchedules$va : [];
            },
            set(newValue) {
              selectedSchedules.value = newValue.map(value => ({
                value
              }));
            }
          });
          var isBusy = computed(() => {
            return isRefiningFilters.value || isApplyingFilters.value;
          });
          function getSlidingDateRange(bag) {
            return bag ? bag : null;
          }
          function getCurrentFilters() {
            var dateRange = selectedDateRange.value ? selectedDateRange.value : null;
            return {
              groups: selectedGroups.value,
              locations: {
                availableLocations: availableLocations.value,
                selectedLocations: selectedLocations.value
              },
              schedules: {
                availableSchedules: availableSchedules.value,
                selectedSchedules: selectedSchedules.value
              },
              dateRange,
              firstEndOfWeekDate: firstEndOfWeekDate.value,
              lastEndOfWeekDate: lastEndOfWeekdDate.value,
              friendlyDateRange: friendlyDateRange.value
            };
          }
          function setCurrentFilters(filters) {
            var _filters$groups, _filters$locations$av, _filters$locations, _filters$locations$se, _filters$locations2, _filters$schedules$av, _filters$schedules, _filters$schedules$se, _filters$schedules2;
            selectedGroups.value = (_filters$groups = filters === null || filters === void 0 ? void 0 : filters.groups) !== null && _filters$groups !== void 0 ? _filters$groups : [];
            availableLocations.value = (_filters$locations$av = filters === null || filters === void 0 ? void 0 : (_filters$locations = filters.locations) === null || _filters$locations === void 0 ? void 0 : _filters$locations.availableLocations) !== null && _filters$locations$av !== void 0 ? _filters$locations$av : [];
            selectedLocations.value = (_filters$locations$se = filters === null || filters === void 0 ? void 0 : (_filters$locations2 = filters.locations) === null || _filters$locations2 === void 0 ? void 0 : _filters$locations2.selectedLocations) !== null && _filters$locations$se !== void 0 ? _filters$locations$se : [];
            availableSchedules.value = (_filters$schedules$av = filters === null || filters === void 0 ? void 0 : (_filters$schedules = filters.schedules) === null || _filters$schedules === void 0 ? void 0 : _filters$schedules.availableSchedules) !== null && _filters$schedules$av !== void 0 ? _filters$schedules$av : [];
            selectedSchedules.value = (_filters$schedules$se = filters === null || filters === void 0 ? void 0 : (_filters$schedules2 = filters.schedules) === null || _filters$schedules2 === void 0 ? void 0 : _filters$schedules2.selectedSchedules) !== null && _filters$schedules$se !== void 0 ? _filters$schedules$se : [];
            selectedDateRange.value = getSlidingDateRange(filters === null || filters === void 0 ? void 0 : filters.dateRange);
            firstEndOfWeekDate.value = filters === null || filters === void 0 ? void 0 : filters.firstEndOfWeekDate;
            lastEndOfWeekdDate.value = filters === null || filters === void 0 ? void 0 : filters.lastEndOfWeekDate;
            friendlyDateRange.value = filters === null || filters === void 0 ? void 0 : filters.friendlyDateRange;
          }
          function onFiltersChanged() {
            return _onFiltersChanged.apply(this, arguments);
          }
          function _onFiltersChanged() {
            _onFiltersChanged = _asyncToGenerator(function* () {
              if (isRefiningFilters.value) {
                return;
              }
              isRefiningFilters.value = true;
              warningMessage.value = "";
              var result = yield invokeBlockAction("RefineFilters", {
                bag: getCurrentFilters()
              });
              isRefiningFilters.value = false;
              if (!result.isSuccess) {
                warningMessage.value = result.errorMessage || "Unknown error while trying to update available filters.";
                return;
              }
              setCurrentFilters(result.data);
            });
            return _onFiltersChanged.apply(this, arguments);
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              if (isApplyingFilters.value) {
                return;
              }
              isApplyingFilters.value = true;
              warningMessage.value = "";
              var result = yield invokeBlockAction("ApplyFilters", {
                bag: getCurrentFilters()
              });
              isApplyingFilters.value = false;
              if (!result.isSuccess) {
                warningMessage.value = result.errorMessage || "Unknown issue while trying to apply filters.";
                return;
              }
              emit("filtersApplied", result.data);
              isCanceled.value = false;
              isVisible.value = false;
            });
            return _onSave.apply(this, arguments);
          }
          watch(() => props.filters, () => {
            originalValue.value = props.filters;
            setCurrentFilters(props.filters);
          });
          watch(isVisible, () => {
            if (isVisible.value) {
              isCanceled.value = true;
            } else {
              if (isCanceled.value) {
                setCurrentFilters(originalValue.value);
              }
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(isVisible) ? isVisible.value = $event : null),
              title: "Filters",
              saveText: "Apply",
              isSaveButtonDisabled: unref(isBusy),
              onSave: onSave
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_1$1, [createVNode(unref(NotificationBox), {
                alertType: unref(AlertType).Info
              }, {
                default: withCtx(() => [_hoisted_2$1]),
                _: 1
              }, 8, ["alertType"]), warningMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: unref(AlertType).Warning
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(warningMessage.value), 1)]),
                _: 1
              }, 8, ["alertType"])) : createCommentVNode("v-if", true), __props.disallowGroupSelection ? (openBlock(), createElementBlock("div", _hoisted_3$1, [createVNode(unref(RockLabel), null, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(groupsTextLabel)), 1)]),
                _: 1
              }), createElementVNode("div", null, toDisplayString(unref(groupsText)), 1)])) : (openBlock(), createBlock(unref(GroupPicker), {
                key: 2,
                modelValue: selectedGroups.value,
                "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => selectedGroups.value = $event), onFiltersChanged],
                label: "Groups",
                multiple: true,
                limitToSchedulingEnabled: true,
                autoExpand: true,
                disabled: unref(isBusy),
                rules: "required"
              }, null, 8, ["modelValue", "disabled"])), createCommentVNode(" This control's @update:modelValue fires too often to post to the server on every update. "), createCommentVNode(" Instead, the date range will be validated and applied when the other controls trigger a POST and/or when the filters are saved. "), createVNode(unref(SlidingDateRangePicker), {
                modelValue: selectedDateRange.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => selectedDateRange.value = $event),
                label: "Dates",
                previewLocation: "Top",
                disabled: unref(isBusy)
              }, null, 8, ["modelValue", "disabled"]), createVNode(unref(DropDownList), {
                modelValue: unref(selectedLocationValues),
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(selectedLocationValues) ? selectedLocationValues.value = $event : null),
                label: "Locations",
                items: availableLocations.value,
                multiple: true,
                loading: isRefiningFilters.value,
                disabled: isApplyingFilters.value,
                onOpen: onFiltersChanged
              }, null, 8, ["modelValue", "items", "loading", "disabled"]), createVNode(unref(DropDownList), {
                modelValue: unref(selectedScheduleValues),
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(selectedScheduleValues) ? selectedScheduleValues.value = $event : null),
                label: "Schedules",
                items: availableSchedules.value,
                multiple: true,
                loading: isRefiningFilters.value,
                disabled: isApplyingFilters.value,
                onOpen: onFiltersChanged
              }, null, 8, ["modelValue", "items", "loading", "disabled"])])]),
              _: 1
            }, 8, ["modelValue", "isSaveButtonDisabled"]);
          };
        }
      });

      script$1.__file = "src/Group/Scheduling/GroupScheduler/selectFilters.partial.obs";

      var _hoisted_1 = {
        class: "group-scheduler-v2"
      };
      var _hoisted_2 = createElementVNode("div", {
        class: "p-3 bg-white"
      }, [createElementVNode("div", null, [createElementVNode("h5", {
        class: "mt-0 mb-4"
      }, "Group Scheduler Help"), createElementVNode("p", null, [createElementVNode("strong", null, "Scheduling Basics")]), createElementVNode("p", null, "This screen allows you to schedule individuals into groups. Individuals can be added to a schedule by clicking the ‘Plus’ icon in the lower right corner of each location.")]), createElementVNode("div", {
        class: "row mt-4"
      }, [createElementVNode("div", {
        class: "col-md-6"
      }, [createElementVNode("p", null, [createElementVNode("strong", null, "Scheduled Individual Legend")]), createElementVNode("p", null, "Each scheduled individual has one of three invite statuses:"), createElementVNode("ul", null, [createElementVNode("li", null, [createElementVNode("i", {
        class: "fa fa-circle text-success"
      }), createTextVNode(" Accepted Invite")]), createElementVNode("li", null, [createElementVNode("i", {
        class: "fa fa-circle text-muted"
      }), createTextVNode(" Pending Invite")]), createElementVNode("li", null, [createElementVNode("i", {
        class: "fa fa-circle text-danger"
      }), createTextVNode(" Declined Invite")])]), createElementVNode("p", null, "The invite status is shown by a border around the individual's avatar."), createElementVNode("p", null, "Some scheduled individuals may also have notification icons that alert you to issues with their schedule."), createElementVNode("ul", null, [createElementVNode("li", null, [createElementVNode("i", {
        class: "fa fa-exclamation-triangle"
      }), createTextVNode(" Indicates a conflict; which can happen if an individual is unavailable due to a blackout, they do not meet the group requirements, or because they have a scheduling conflict.")]), createElementVNode("li", null, [createElementVNode("i", {
        class: "fa fa-minus-circle"
      }), createTextVNode(" Indicates that the schedule does not match this person's scheduling preference.")])]), createElementVNode("p", null, "For both notification icon types, additional details can be viewed by hovering over the icon.")]), createElementVNode("div", {
        class: "col-md-6"
      }, [createElementVNode("p", null, [createElementVNode("strong", null, "Group Location Schedule Status")]), createElementVNode("p", null, "Each group location has a status bar at the bottom that shows the overall status of the schedule."), createElementVNode("ul", null, [createElementVNode("li", null, [createElementVNode("i", {
        class: "fa fa-square text-danger"
      }), createTextVNode(" A red bar means there are not enough accepted invites to reach the minimum number of individuals needed.")]), createElementVNode("li", null, [createElementVNode("i", {
        class: "fa fa-square text-warning"
      }), createTextVNode(" A yellow bar means there are enough accepted invites to reach the minimum number, but not the desired number.")]), createElementVNode("li", null, [createElementVNode("i", {
        class: "fa fa-square text-success"
      }), createTextVNode(" A green bar means there are enough accepted invites to reach or exceed the desired number.")]), createElementVNode("li", null, [createElementVNode("i", {
        class: "fa fa-square text-critical"
      }), createTextVNode(" An orange bar means there are too many accepted invites and the maximum number is exceeded.")])]), createElementVNode("p", null, "Each status bar will show a solid bar representing the accepted invites, and a semi-transparent bar representing pending invites."), createElementVNode("p", null, "Bars include ticks, that mark the thresholds (minimum, desired and maximum) for each schedule. You can hover over each tick to see a tooltip with the threshold and the number of individuals required.")])])], -1);
      var _hoisted_3 = {
        class: "panel-collapsable"
      };
      var _hoisted_4 = {
        class: "panel-toolbar d-none d-md-flex flex-wrap flex-sm-nowrap justify-content-between"
      };
      var _hoisted_5 = ["disabled"];
      var _hoisted_6 = createElementVNode("i", {
        class: "fa fa-sliders-h"
      }, null, -1);
      var _hoisted_7 = {
        class: "d-block flex-shrink-0"
      };
      var _hoisted_8 = createElementVNode("i", {
        class: "fa fa-clone"
      }, null, -1);
      var _hoisted_9 = createTextVNode(" Clone Schedules ");
      var _hoisted_10 = createElementVNode("i", {
        class: "fa fa-calendar-check"
      }, null, -1);
      var _hoisted_11 = createTextVNode(" Rosters ");
      var _hoisted_12 = createElementVNode("i", {
        class: "fa fa-magic"
      }, null, -1);
      var _hoisted_13 = createTextVNode(" Auto Schedule ");
      var _hoisted_14 = createElementVNode("i", {
        class: "fa fa-envelope-o"
      }, null, -1);
      var _hoisted_15 = createTextVNode(" Send Now ");
      var _hoisted_16 = {
        class: "panel-toolbar panel-toolbar-mobile d-flex d-md-none justify-content-between"
      };
      var _hoisted_17 = createElementVNode("i", {
        class: "fa fa-sliders-h"
      }, null, -1);
      var _hoisted_18 = createTextVNode(" Filters");
      var _hoisted_19 = {
        class: "d-flex"
      };
      var _hoisted_20 = {
        class: "dropdown"
      };
      var _hoisted_21 = ["disabled"];
      var _hoisted_22 = createElementVNode("i", {
        class: "fa fa-ellipsis-v"
      }, null, -1);
      var _hoisted_23 = {
        class: "dropdown-menu dropdown-menu-right"
      };
      var _hoisted_24 = ["disabled"];
      var _hoisted_25 = createElementVNode("i", {
        class: "fa fa-envelope-o"
      }, null, -1);
      var _hoisted_26 = createTextVNode(" Send Now ");
      var _hoisted_27 = [_hoisted_25, _hoisted_26];
      var _hoisted_28 = ["disabled"];
      var _hoisted_29 = createElementVNode("i", {
        class: "fa fa-clone"
      }, null, -1);
      var _hoisted_30 = createTextVNode(" Clone Schedules ");
      var _hoisted_31 = [_hoisted_29, _hoisted_30];
      var _hoisted_32 = ["disabled"];
      var _hoisted_33 = createElementVNode("i", {
        class: "fa fa-calendar-check"
      }, null, -1);
      var _hoisted_34 = createTextVNode(" Rosters ");
      var _hoisted_35 = [_hoisted_33, _hoisted_34];
      var _hoisted_36 = ["disabled"];
      var _hoisted_37 = createElementVNode("i", {
        class: "fa fa-magic"
      }, null, -1);
      var _hoisted_38 = createTextVNode(" Auto Schedule ");
      var _hoisted_39 = [_hoisted_37, _hoisted_38];
      var _hoisted_40 = {
        key: 0,
        class: "panel-body-alert"
      };
      var _hoisted_41 = createTextVNode(" Please select at least one group. ");
      var _hoisted_42 = createTextVNode(" No schedule occurrences match the selected filters. ");
      var _hoisted_43 = {
        key: 0
      };
      var _hoisted_44 = {
        key: 1
      };
      var _hoisted_45 = createElementVNode("strong", null, "Source: ", -1);
      var _hoisted_46 = createElementVNode("br", null, null, -1);
      var _hoisted_47 = createElementVNode("strong", null, "Destination: ", -1);
      var _hoisted_48 = {
        key: 2
      };
      var _hoisted_49 = {
        key: 0
      };
      var _hoisted_50 = createTextVNode(" One or more errors occurred when sending confirmations: ");
      var _hoisted_51 = {
        key: 1
      };
      var _hoisted_52 = createTextVNode(" One or more warnings occurred when sending confirmations: ");
      var _hoisted_53 = ["innerHTML"];
      var ScrollDirection = function (ScrollDirection) {
        ScrollDirection[ScrollDirection["Previous"] = 0] = "Previous";
        ScrollDirection[ScrollDirection["Next"] = 1] = "Next";
        return ScrollDirection;
      }(ScrollDirection || {});
      var script = exports('default', defineComponent({
        name: 'groupScheduler',
        setup(__props) {
          var _config$appliedFilter, _config$appliedFilter2, _config$appliedFilter3, _config$appliedFilter4, _config$appliedFilter5;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var reloadBlock = useReloadBlock();
          var schedulesResizeObserver;
          var blockActionErrorMessage = ref("");
          var snapContainerElement = ref(null);
          var occurrenceDateComponents = ref([]);
          var scheduleComponentsByOccurrenceDate = ref({});
          var filters = ref((_config$appliedFilter = config.appliedFilters) === null || _config$appliedFilter === void 0 ? void 0 : _config$appliedFilter.filters);
          var scheduleOccurrences = ref((_config$appliedFilter2 = config.appliedFilters) === null || _config$appliedFilter2 === void 0 ? void 0 : _config$appliedFilter2.scheduleOccurrences);
          var unassignedResourceCounts = ref((_config$appliedFilter3 = (_config$appliedFilter4 = config.appliedFilters) === null || _config$appliedFilter4 === void 0 ? void 0 : _config$appliedFilter4.unassignedResourceCounts) !== null && _config$appliedFilter3 !== void 0 ? _config$appliedFilter3 : []);
          var navigationUrls = ref((_config$appliedFilter5 = config.appliedFilters) === null || _config$appliedFilter5 === void 0 ? void 0 : _config$appliedFilter5.navigationUrls);
          var disallowGroupSelection = ref(config.disallowGroupSelection);
          var isSelectingFilters = ref(false);
          var isSelectingCloneSettings = ref(false);
          var isCloningSchedules = ref(false);
          var cloneSchedulesResponse = ref(null);
          var isCloneSchedulesModalVisible = ref(false);
          var isAutoScheduling = ref(false);
          var isSendingNow = ref(false);
          var sendNowResponse = ref(null);
          var isSendNowModalVisible = ref(false);
          var reloadAllOccurrences = ref(false);
          var reloadOccurrencesContainingResource = ref(null);
          var blockErrorMessage = computed(() => {
            return config.errorMessage;
          });
          var anyGroupsSelected = computed(() => {
            var _filters$value, _filters$value$groups;
            return !!((_filters$value = filters.value) !== null && _filters$value !== void 0 && (_filters$value$groups = _filters$value.groups) !== null && _filters$value$groups !== void 0 && _filters$value$groups.length);
          });
          var copyLinkUrl = computed(() => {
            var _navigationUrls$value, _navigationUrls$value2;
            return (_navigationUrls$value = (_navigationUrls$value2 = navigationUrls.value) === null || _navigationUrls$value2 === void 0 ? void 0 : _navigationUrls$value2[NavigationUrlKey.CopyLink]) !== null && _navigationUrls$value !== void 0 ? _navigationUrls$value : "hello";
          });
          var secondaryActions = computed(() => {
            var actions = [];
            if (copyLinkUrl.value) {
              actions.push({
                title: "Copy Link to Clipboard",
                iconCssClass: "fa fa-clipboard",
                type: "default",
                handler: onCopyToClipboardClick,
                disabled: isBusy.value || !anyGroupsSelected.value
              });
            }
            return actions;
          });
          var filtersText = computed(() => {
            var _currentFilters$group, _currentFilters$locat, _currentFilters$sched;
            var currentFilters = filters.value;
            function getSingleItemOrCount(items, label) {
              if (items !== null && items !== void 0 && items.length) {
                if (items.length === 1 && items[0]) {
                  return items[0].text || "";
                }
                label = items.length === 1 ? label : "".concat(label, "s");
                return "".concat(items.length, " ").concat(label);
              }
              return "All ".concat(label, "s");
            }
            var filtersTextSegements = [currentFilters !== null && currentFilters !== void 0 && (_currentFilters$group = currentFilters.groups) !== null && _currentFilters$group !== void 0 && _currentFilters$group.length ? currentFilters.groups.map(g => g.text).join(", ") : "", currentFilters !== null && currentFilters !== void 0 && currentFilters.friendlyDateRange ? "Weeks: ".concat(currentFilters === null || currentFilters === void 0 ? void 0 : currentFilters.friendlyDateRange) : "", getSingleItemOrCount(currentFilters === null || currentFilters === void 0 ? void 0 : (_currentFilters$locat = currentFilters.locations) === null || _currentFilters$locat === void 0 ? void 0 : _currentFilters$locat.selectedLocations, "Location"), getSingleItemOrCount(currentFilters === null || currentFilters === void 0 ? void 0 : (_currentFilters$sched = currentFilters.schedules) === null || _currentFilters$sched === void 0 ? void 0 : _currentFilters$sched.selectedSchedules, "Schedule")];
            return " Filters: ".concat(filtersTextSegements.filter(s => s).join(" | "));
          });
          var filtersCssClass = computed(() => {
            return "d-block text-muted".concat(isBusy.value ? "" : " clickable", " text-truncate");
          });
          var sortedOccurrencesByDate = computed(() => {
            var _scheduleOccurrences$;
            if (!((_scheduleOccurrences$ = scheduleOccurrences.value) !== null && _scheduleOccurrences$ !== void 0 && _scheduleOccurrences$.length)) {
              return [];
            }
            var groupedOccurrences = new Map();
            scheduleOccurrences.value.filter(o => o.occurrenceDate).forEach(o => {
              var date = o.occurrenceDate || "";
              var dateOccurrences = groupedOccurrences.get(date);
              if (!dateOccurrences) {
                dateOccurrences = [];
                groupedOccurrences.set(date, dateOccurrences);
              }
              dateOccurrences.push(o);
            });
            var sortedDateOccurrences = [];
            groupedOccurrences.forEach(occurrences => sortedDateOccurrences.push(occurrences));
            return sortedDateOccurrences;
          });
          var occurrenceDateCount = computed(() => {
            return sortedOccurrencesByDate.value.length;
          });
          var anyOccurrences = computed(() => {
            return !!occurrenceDateCount.value;
          });
          var showPrevNextButtons = computed(() => {
            var _sortedOccurrencesByD;
            if (!anyOccurrences.value) {
              return false;
            }
            if (occurrenceDateCount.value > 1) {
              return true;
            }
            var uniqueScheduleIds = [];
            (_sortedOccurrencesByD = sortedOccurrencesByDate[0]) === null || _sortedOccurrencesByD === void 0 ? void 0 : _sortedOccurrencesByD.forEach(o => {
              if (!uniqueScheduleIds.some(id => id === o.scheduleId)) {
                uniqueScheduleIds.push(o.scheduleId);
              }
            });
            return uniqueScheduleIds.length > 0;
          });
          var clonedSchedulesMessage = computed(() => {
            var _cloneSchedulesRespon;
            var occurrencesClonedCount = (_cloneSchedulesRespon = cloneSchedulesResponse.value) === null || _cloneSchedulesRespon === void 0 ? void 0 : _cloneSchedulesRespon.occurrencesClonedCount;
            if (!occurrencesClonedCount) {
              return "No schedules were cloned.";
            }
            var scheduleLabel = "schedule".concat(occurrencesClonedCount > 1 ? "s" : "");
            return "Successfully cloned ".concat(occurrencesClonedCount, " ").concat(scheduleLabel, ".");
          });
          var clonedSchedulesSourceDateRange = computed(() => {
            var _cloneSchedulesRespon2;
            return (_cloneSchedulesRespon2 = cloneSchedulesResponse.value) === null || _cloneSchedulesRespon2 === void 0 ? void 0 : _cloneSchedulesRespon2.sourceDateRange;
          });
          var clonedSchedulesDestinationDateRange = computed(() => {
            var _cloneSchedulesRespon3;
            return (_cloneSchedulesRespon3 = cloneSchedulesResponse.value) === null || _cloneSchedulesRespon3 === void 0 ? void 0 : _cloneSchedulesRespon3.destinationDateRange;
          });
          var rosterUrl = computed(() => {
            var _navigationUrls$value3, _navigationUrls$value4;
            return (_navigationUrls$value3 = (_navigationUrls$value4 = navigationUrls.value) === null || _navigationUrls$value4 === void 0 ? void 0 : _navigationUrls$value4[NavigationUrlKey.RosterPage]) !== null && _navigationUrls$value3 !== void 0 ? _navigationUrls$value3 : null;
          });
          var sentCount = computed(() => {
            var _sendNowResponse$valu, _sendNowResponse$valu2;
            return (_sendNowResponse$valu = (_sendNowResponse$valu2 = sendNowResponse.value) === null || _sendNowResponse$valu2 === void 0 ? void 0 : _sendNowResponse$valu2.communicationsSentCount) !== null && _sendNowResponse$valu !== void 0 ? _sendNowResponse$valu : 0;
          });
          var anySendErrors = computed(() => {
            var _sendNowResponse$valu3, _sendNowResponse$valu4;
            return !!((_sendNowResponse$valu3 = sendNowResponse.value) !== null && _sendNowResponse$valu3 !== void 0 && (_sendNowResponse$valu4 = _sendNowResponse$valu3.errors) !== null && _sendNowResponse$valu4 !== void 0 && _sendNowResponse$valu4.length);
          });
          var anySendWarnings = computed(() => {
            var _sendNowResponse$valu5, _sendNowResponse$valu6;
            return !!((_sendNowResponse$valu5 = sendNowResponse.value) !== null && _sendNowResponse$valu5 !== void 0 && (_sendNowResponse$valu6 = _sendNowResponse$valu5.warnings) !== null && _sendNowResponse$valu6 !== void 0 && _sendNowResponse$valu6.length);
          });
          var anyCommunicationsToSend = computed(() => {
            var _sendNowResponse$valu7;
            return !!((_sendNowResponse$valu7 = sendNowResponse.value) !== null && _sendNowResponse$valu7 !== void 0 && _sendNowResponse$valu7.anyCommunicationsToSend);
          });
          var sendNowModalAlertType = computed(() => {
            if (anySendErrors.value) {
              return ModalAlertType.Alert;
            } else if (anySendWarnings.value) {
              return ModalAlertType.Warning;
            }
            return ModalAlertType.Information;
          });
          var sendNowOutcomeMessage = computed(() => {
            var message = "";
            if (sentCount.value > 0) {
              message = "<p>Successfully sent ".concat(sentCount.value, " ").concat(pluralize("confirmation", sentCount.value), ".</p>");
            } else if (!anySendErrors.value && !anySendWarnings.value && !anyCommunicationsToSend.value) {
              message = "<p>Everybody has already been sent a confirmation. No additional confirmations sent.</p>";
            }
            return message;
          });
          var isBusy = computed(() => {
            return isSelectingFilters.value || isSelectingCloneSettings.value || isCloningSchedules.value || isAutoScheduling.value || isSendingNow.value;
          });
          var isSchedulingDisabled = computed(() => {
            return isBusy.value || !anyGroupsSelected.value || !anyOccurrences.value;
          });
          function getOccurrenceDateKey(occurrences) {
            var _occurrences$0$occurr, _occurrences$;
            return (_occurrences$0$occurr = occurrences === null || occurrences === void 0 ? void 0 : (_occurrences$ = occurrences[0]) === null || _occurrences$ === void 0 ? void 0 : _occurrences$.occurrenceDate) !== null && _occurrences$0$occurr !== void 0 ? _occurrences$0$occurr : "unknown";
          }
          function addOccurrenceDateComponent(component, index) {
            if (!component) {
              return;
            }
            occurrenceDateComponents.value[index] = component;
            if (occurrenceDateComponents.value.length === occurrenceDateCount.value) {
              observeScheduleSizes();
            }
          }
          function observeScheduleSizes() {
            if (!window.ResizeObserver || !snapContainerElement.value) {
              return;
            }
            if (schedulesResizeObserver) {
              schedulesResizeObserver.disconnect();
            } else {
              schedulesResizeObserver = new ResizeObserver(_ => {
                setEqualOccurrenceDateHeights();
              });
            }
            snapContainerElement.value.querySelectorAll(".js-schedule-column").forEach(schedule => {
              var _schedulesResizeObser;
              (_schedulesResizeObser = schedulesResizeObserver) === null || _schedulesResizeObser === void 0 ? void 0 : _schedulesResizeObser.observe(schedule);
            });
          }
          function setEqualOccurrenceDateHeights() {
            if (!snapContainerElement.value) {
              return;
            }
            var occurrenceDates = snapContainerElement.value.querySelectorAll(".js-occurrence-date");
            occurrenceDates.forEach(occurrenceDate => {
              occurrenceDate.style.minHeight = "auto";
            });
            nextTick(() => {
              var maxHeight = 0;
              occurrenceDates.forEach(occurrenceDate => {
                if (maxHeight < occurrenceDate.offsetHeight) {
                  maxHeight = occurrenceDate.offsetHeight;
                }
              });
              occurrenceDates.forEach(occurrenceDate => {
                occurrenceDate.style.minHeight = "".concat(maxHeight, "px");
              });
            });
          }
          function scrollToSchedule(currentDateIndex, currentScheduleIndex, direction) {
            var targetSchedules = scheduleComponentsByOccurrenceDate.value[currentDateIndex];
            var targetScheduleIndex = direction == ScrollDirection.Previous ? currentScheduleIndex - 1 : currentScheduleIndex + 1;
            if (direction == ScrollDirection.Previous) {
              if (targetScheduleIndex < 0) {
                var _targetSchedules;
                if (occurrenceDateCount.value > 1) {
                  targetSchedules = scheduleComponentsByOccurrenceDate.value[currentDateIndex === 0 ? occurrenceDateCount.value - 1 : currentDateIndex - 1];
                }
                if ((_targetSchedules = targetSchedules) !== null && _targetSchedules !== void 0 && _targetSchedules.length) {
                  scrollTo(targetSchedules[targetSchedules.length - 1]);
                }
              } else {
                var _targetSchedules$leng, _targetSchedules2;
                if ((_targetSchedules$leng = (_targetSchedules2 = targetSchedules) === null || _targetSchedules2 === void 0 ? void 0 : _targetSchedules2.length) !== null && _targetSchedules$leng !== void 0 ? _targetSchedules$leng : 0 > targetScheduleIndex) {
                  scrollTo(targetSchedules[targetScheduleIndex]);
                }
              }
            } else if (direction == ScrollDirection.Next) {
              if (!targetSchedules) {
                return;
              }
              if (targetScheduleIndex > targetSchedules.length - 1) {
                var _targetSchedules3;
                if (occurrenceDateCount.value > 1) {
                  targetSchedules = scheduleComponentsByOccurrenceDate.value[currentDateIndex === occurrenceDateCount.value - 1 ? 0 : currentDateIndex + 1];
                }
                if ((_targetSchedules3 = targetSchedules) !== null && _targetSchedules3 !== void 0 && _targetSchedules3.length) {
                  scrollTo(targetSchedules[0]);
                }
              } else {
                var _targetSchedules$leng2, _targetSchedules4;
                if ((_targetSchedules$leng2 = (_targetSchedules4 = targetSchedules) === null || _targetSchedules4 === void 0 ? void 0 : _targetSchedules4.length) !== null && _targetSchedules$leng2 !== void 0 ? _targetSchedules$leng2 : 0 > targetScheduleIndex) {
                  scrollTo(targetSchedules[targetScheduleIndex]);
                }
              }
            }
          }
          function scrollTo(component) {
            var _component$$el$getBou, _component$$el$getBou2, _snapContainerElement, _snapContainerElement2;
            if (!(component !== null && component !== void 0 && component.$el) || !snapContainerElement.value) {
              return;
            }
            var elementLeft = (_component$$el$getBou = (_component$$el$getBou2 = component.$el.getBoundingClientRect()) === null || _component$$el$getBou2 === void 0 ? void 0 : _component$$el$getBou2.left) !== null && _component$$el$getBou !== void 0 ? _component$$el$getBou : 0;
            var snapContainerScrollLeft = (_snapContainerElement = (_snapContainerElement2 = snapContainerElement.value) === null || _snapContainerElement2 === void 0 ? void 0 : _snapContainerElement2.scrollLeft) !== null && _snapContainerElement !== void 0 ? _snapContainerElement : 0;
            snapContainerElement.value.scrollTo({
              left: elementLeft + snapContainerScrollLeft,
              behavior: "smooth"
            });
          }
          function reloadAllScheduleOccurrences() {
            reloadAllOccurrences.value = true;
            nextTick(() => {
              reloadAllOccurrences.value = false;
            });
          }
          function reportAssignedResources(unassignedResourceCountGuid, assignedCount) {
            var _unassignedResourceCo, _unassignedResourceCo2;
            if (!unassignedResourceCountGuid || assignedCount <= 0 || !((_unassignedResourceCo = unassignedResourceCounts.value) !== null && _unassignedResourceCo !== void 0 && _unassignedResourceCo.length)) {
              return;
            }
            unassignedResourceCounts.value = (_unassignedResourceCo2 = unassignedResourceCounts.value.filter(c => c.guid !== unassignedResourceCountGuid || c.resourceCount - assignedCount > 0).map(c => {
              if (c.guid !== unassignedResourceCountGuid) {
                return c;
              } else {
                return _objectSpread2(_objectSpread2({}, c), {}, {
                  resourceCount: c.resourceCount - assignedCount
                });
              }
            })) !== null && _unassignedResourceCo2 !== void 0 ? _unassignedResourceCo2 : [];
          }
          function onCopyToClipboardClick() {
            return _onCopyToClipboardClick.apply(this, arguments);
          }
          function _onCopyToClipboardClick() {
            _onCopyToClipboardClick = _asyncToGenerator(function* () {
              var _copyLinkUrl$value;
              yield navigator.clipboard.writeText((_copyLinkUrl$value = copyLinkUrl.value) !== null && _copyLinkUrl$value !== void 0 ? _copyLinkUrl$value : "");
            });
            return _onCopyToClipboardClick.apply(this, arguments);
          }
          function onSelectFiltersClick() {
            if (isBusy.value) {
              return;
            }
            isSelectingFilters.value = true;
          }
          function onCloneSchedulesClick() {
            if (isSchedulingDisabled.value) {
              return;
            }
            isSelectingCloneSettings.value = true;
          }
          function onCloneSchedules(_x) {
            return _onCloneSchedules.apply(this, arguments);
          }
          function _onCloneSchedules() {
            _onCloneSchedules = _asyncToGenerator(function* (cloneSettings) {
              var _result$data;
              if (isCloningSchedules.value) {
                return;
              }
              isCloningSchedules.value = true;
              blockActionErrorMessage.value = "";
              var result = yield invokeBlockAction("CloneSchedules", {
                bag: cloneSettings
              });
              isCloningSchedules.value = false;
              if (!result.isSuccess) {
                blockActionErrorMessage.value = result.errorMessage || "Unknown error while trying to clone schedules.";
                return;
              }
              cloneSchedulesResponse.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : null;
              isCloneSchedulesModalVisible.value = true;
              reloadAllScheduleOccurrences();
            });
            return _onCloneSchedules.apply(this, arguments);
          }
          function onRosterClick() {
            if (!rosterUrl.value) {
              return;
            }
            window.location.href = rosterUrl.value;
          }
          function onAutoScheduleClick() {
            return _onAutoScheduleClick.apply(this, arguments);
          }
          function _onAutoScheduleClick() {
            _onAutoScheduleClick = _asyncToGenerator(function* () {
              var _result$data2, _result$data3, _result$data$unassign, _result$data4, _result$data5;
              if (isAutoScheduling.value) {
                return;
              }
              isAutoScheduling.value = true;
              blockActionErrorMessage.value = "";
              var result = yield invokeBlockAction("AutoSchedule", {
                bag: filters.value
              });
              isAutoScheduling.value = false;
              if (!result.isSuccess) {
                blockActionErrorMessage.value = result.errorMessage || "Unknown error while auto-scheduling.";
                return;
              }
              filters.value = (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.filters;
              scheduleOccurrences.value = (_result$data3 = result.data) === null || _result$data3 === void 0 ? void 0 : _result$data3.scheduleOccurrences;
              unassignedResourceCounts.value = (_result$data$unassign = (_result$data4 = result.data) === null || _result$data4 === void 0 ? void 0 : _result$data4.unassignedResourceCounts) !== null && _result$data$unassign !== void 0 ? _result$data$unassign : [];
              navigationUrls.value = (_result$data5 = result.data) === null || _result$data5 === void 0 ? void 0 : _result$data5.navigationUrls;
              reloadAllScheduleOccurrences();
            });
            return _onAutoScheduleClick.apply(this, arguments);
          }
          function onSendNowClick() {
            return _onSendNowClick.apply(this, arguments);
          }
          function _onSendNowClick() {
            _onSendNowClick = _asyncToGenerator(function* () {
              if (isSendingNow.value) {
                return;
              }
              isSendingNow.value = true;
              sendNowResponse.value = null;
              blockActionErrorMessage.value = "";
              var result = yield invokeBlockAction("SendNow", {
                bag: filters.value
              });
              isSendingNow.value = false;
              if (!result.isSuccess) {
                blockActionErrorMessage.value = result.errorMessage || "Unknown error while sending confirmations.";
                return;
              }
              sendNowResponse.value = result.data;
              isSendNowModalVisible.value = true;
            });
            return _onSendNowClick.apply(this, arguments);
          }
          function onFiltersApplied(appliedFilters) {
            var _appliedFilters$unass;
            occurrenceDateComponents.value = [];
            scheduleComponentsByOccurrenceDate.value = {};
            filters.value = appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.filters;
            scheduleOccurrences.value = appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.scheduleOccurrences;
            unassignedResourceCounts.value = (_appliedFilters$unass = appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.unassignedResourceCounts) !== null && _appliedFilters$unass !== void 0 ? _appliedFilters$unass : [];
            navigationUrls.value = appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.navigationUrls;
            nextTick(() => {
              if (snapContainerElement.value) {
                snapContainerElement.value.scrollTo({
                  left: 0,
                  behavior: "smooth"
                });
              }
            });
          }
          function _onScheduleComponentsCreated(dateIndex, scheduleComponents) {
            scheduleComponentsByOccurrenceDate.value[dateIndex] = scheduleComponents;
          }
          function _onGoPrevious(dateIndex, currentIndex) {
            scrollToSchedule(dateIndex, currentIndex, ScrollDirection.Previous);
          }
          function _onGoNext(dateIndex, currentIndex) {
            scrollToSchedule(dateIndex, currentIndex, ScrollDirection.Next);
          }
          function onPreferenceUpdated(personId) {
            reloadOccurrencesContainingResource.value = personId;
            nextTick(() => {
              reloadOccurrencesContainingResource.value = null;
            });
          }
          provide(UnassignedResourceCounts, unassignedResourceCounts);
          provide(ReportAssignedResources, reportAssignedResources);
          provide(ReloadAllOccurrences, reloadAllOccurrences);
          provide(ReloadOccurrencesContainingResource, reloadOccurrencesContainingResource);
          provideSecurityGrant(securityGrant);
          onConfigurationValuesChanged(reloadBlock);
          onUnmounted(() => {
            if (schedulesResizeObserver) {
              schedulesResizeObserver.disconnect();
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [unref(blockErrorMessage) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(blockErrorMessage)), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_1, [!unref(blockErrorMessage) ? (openBlock(), createBlock(unref(Panel), {
              key: 0,
              type: "block",
              title: "Group Scheduler",
              class: "styled-scroll",
              hasZoom: true,
              hasFullscreen: true,
              headerSecondaryActions: unref(secondaryActions)
            }, {
              helpContent: withCtx(() => [_hoisted_2]),
              preBody: withCtx(() => [createElementVNode("div", _hoisted_3, [createCommentVNode(" Toolbar: Desktop "), createElementVNode("div", _hoisted_4, [createElementVNode("div", {
                class: normalizeClass(unref(filtersCssClass)),
                disabled: unref(isBusy),
                onClick: onSelectFiltersClick
              }, [_hoisted_6, createTextVNode(" " + toDisplayString(unref(filtersText)), 1)], 10, _hoisted_5), createElementVNode("div", _hoisted_7, [createVNode(unref(RockButton), {
                btnSize: unref(BtnSize).ExtraSmall,
                disabled: unref(isSchedulingDisabled),
                onClick: onCloneSchedulesClick
              }, {
                default: withCtx(() => [_hoisted_8, _hoisted_9, createVNode(unref(Loading), {
                  isLoading: isCloningSchedules.value,
                  isSmall: true,
                  class: "d-inline-block"
                }, null, 8, ["isLoading"])]),
                _: 1
              }, 8, ["btnSize", "disabled"]), unref(rosterUrl) ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                btnSize: unref(BtnSize).ExtraSmall,
                disabled: unref(isSchedulingDisabled),
                class: "ml-1",
                onClick: onRosterClick
              }, {
                default: withCtx(() => [_hoisted_10, _hoisted_11]),
                _: 1
              }, 8, ["btnSize", "disabled"])) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
                btnSize: unref(BtnSize).ExtraSmall,
                disabled: unref(isSchedulingDisabled),
                class: "ml-1",
                onClick: onAutoScheduleClick
              }, {
                default: withCtx(() => [_hoisted_12, _hoisted_13, createVNode(unref(Loading), {
                  isLoading: isAutoScheduling.value,
                  isSmall: true,
                  class: "d-inline-block"
                }, null, 8, ["isLoading"])]),
                _: 1
              }, 8, ["btnSize", "disabled"]), createVNode(unref(RockButton), {
                btnSize: unref(BtnSize).ExtraSmall,
                disabled: unref(isSchedulingDisabled),
                class: "ml-1",
                onClick: onSendNowClick
              }, {
                default: withCtx(() => [_hoisted_14, _hoisted_15, createVNode(unref(Loading), {
                  isLoading: isSendingNow.value,
                  isSmall: true,
                  class: "d-inline-block"
                }, null, 8, ["isLoading"])]),
                _: 1
              }, 8, ["btnSize", "disabled"])])]), createCommentVNode(" Toolbar: Mobile "), createElementVNode("div", _hoisted_16, [createVNode(unref(RockButton), {
                btnSize: unref(BtnSize).Small,
                disabled: unref(isBusy),
                onClick: onSelectFiltersClick
              }, {
                default: withCtx(() => [_hoisted_17, _hoisted_18]),
                _: 1
              }, 8, ["btnSize", "disabled"]), createElementVNode("div", _hoisted_19, [createElementVNode("div", _hoisted_20, [createElementVNode("button", {
                type: "button",
                class: "btn btn-default btn-square btn-sm",
                "data-toggle": "dropdown",
                "aria-haspopup": "true",
                "aria-expanded": "false",
                disabled: unref(isSchedulingDisabled)
              }, [createVNode(unref(Loading), {
                isLoading: isCloningSchedules.value || isAutoScheduling.value || isSendingNow.value,
                isSmall: true
              }, {
                default: withCtx(() => [_hoisted_22]),
                _: 1
              }, 8, ["isLoading"])], 8, _hoisted_21), createElementVNode("ul", _hoisted_23, [createElementVNode("li", null, [createElementVNode("button", {
                type: "button",
                class: "dropdown-item btn-link text-nowrap",
                disabled: unref(isSchedulingDisabled),
                onClick: onSendNowClick
              }, _hoisted_27, 8, _hoisted_24)]), createElementVNode("li", null, [createElementVNode("button", {
                type: "button",
                class: "dropdown-item btn-link text-nowrap",
                disabled: unref(isSchedulingDisabled),
                onClick: onCloneSchedulesClick
              }, _hoisted_31, 8, _hoisted_28)]), createElementVNode("li", null, [unref(rosterUrl) ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                class: "dropdown-item btn-link text-nowrap",
                disabled: unref(isSchedulingDisabled),
                onClick: onRosterClick
              }, _hoisted_35, 8, _hoisted_32)) : createCommentVNode("v-if", true)]), createElementVNode("li", null, [createElementVNode("button", {
                type: "button",
                class: "dropdown-item btn-link text-nowrap",
                disabled: unref(isSchedulingDisabled),
                onClick: onAutoScheduleClick
              }, _hoisted_39, 8, _hoisted_36)])])])])])])]),
              default: withCtx(() => [!unref(anyOccurrences) ? (openBlock(), createElementBlock("div", _hoisted_40, [!unref(anyGroupsSelected) ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: unref(AlertType).Info
              }, {
                default: withCtx(() => [_hoisted_41]),
                _: 1
              }, 8, ["alertType"])) : (openBlock(), createBlock(unref(NotificationBox), {
                key: 1,
                alertType: unref(AlertType).Info
              }, {
                default: withCtx(() => [_hoisted_42]),
                _: 1
              }, 8, ["alertType"]))])) : withDirectives((openBlock(), createElementBlock("div", {
                key: 1,
                ref_key: "snapContainerElement",
                ref: snapContainerElement,
                class: "snap-container"
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(sortedOccurrencesByDate), (occurrences, index) => {
                return openBlock(), createBlock(unref(script$2), {
                  key: getOccurrenceDateKey(occurrences),
                  occurrences: occurrences,
                  showPrevNextButtons: unref(showPrevNextButtons),
                  ref_for: true,
                  ref: comp => addOccurrenceDateComponent(comp, index),
                  disabled: unref(isSchedulingDisabled),
                  onScheduleComponentsCreated: $event => _onScheduleComponentsCreated(index, $event),
                  onGoPrevious: $event => _onGoPrevious(index, $event),
                  onGoNext: $event => _onGoNext(index, $event),
                  onPreferenceUpdated: onPreferenceUpdated
                }, null, 8, ["occurrences", "showPrevNextButtons", "disabled", "onScheduleComponentsCreated", "onGoPrevious", "onGoNext"]);
              }), 128))])), [[unref(DragScroll), {
                id: unref(newGuid)()
              }, void 0, {
                left: true
              }]]), createVNode(unref(script$1), {
                isVisible: isSelectingFilters.value,
                "onUpdate:isVisible": _cache[0] || (_cache[0] = $event => isSelectingFilters.value = $event),
                filters: filters.value,
                disallowGroupSelection: disallowGroupSelection.value,
                onFiltersApplied: onFiltersApplied
              }, null, 8, ["isVisible", "filters", "disallowGroupSelection"]), createVNode(unref(script$e), {
                isVisible: isSelectingCloneSettings.value,
                "onUpdate:isVisible": _cache[1] || (_cache[1] = $event => isSelectingCloneSettings.value = $event),
                filters: filters.value,
                onCloneSchedules: onCloneSchedules
              }, null, 8, ["isVisible", "filters"]), createVNode(unref(ModalAlert), {
                modelValue: isCloneSchedulesModalVisible.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isCloneSchedulesModalVisible.value = $event),
                type: unref(ModalAlertType).Information
              }, {
                default: withCtx(() => {
                  var _cloneSchedulesRespon4, _cloneSchedulesRespon5;
                  return [((_cloneSchedulesRespon4 = cloneSchedulesResponse.value) === null || _cloneSchedulesRespon4 === void 0 ? void 0 : _cloneSchedulesRespon4.anyOccurrencesToClone) === false ? (openBlock(), createElementBlock("p", _hoisted_43, " No schedules were cloned. ")) : unref(clonedSchedulesMessage) ? (openBlock(), createElementBlock("p", _hoisted_44, toDisplayString(unref(clonedSchedulesMessage)), 1)) : createCommentVNode("v-if", true), createElementVNode("p", null, [_hoisted_45, createTextVNode("Week of " + toDisplayString(unref(clonedSchedulesSourceDateRange)) + " ", 1), _hoisted_46, _hoisted_47, createTextVNode("Week of " + toDisplayString(unref(clonedSchedulesDestinationDateRange)), 1)]), (_cloneSchedulesRespon5 = cloneSchedulesResponse.value) !== null && _cloneSchedulesRespon5 !== void 0 && _cloneSchedulesRespon5.skippedIndividualsExplanation ? (openBlock(), createElementBlock("p", _hoisted_48, toDisplayString(cloneSchedulesResponse.value.skippedIndividualsExplanation), 1)) : createCommentVNode("v-if", true)];
                }),
                _: 1
              }, 8, ["modelValue", "type"]), createVNode(unref(ModalAlert), {
                modelValue: isSendNowModalVisible.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isSendNowModalVisible.value = $event),
                type: unref(sendNowModalAlertType)
              }, {
                default: withCtx(() => [unref(anySendErrors) ? (openBlock(), createElementBlock("div", _hoisted_49, [_hoisted_50, createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(sendNowResponse.value.errors, error => {
                  return openBlock(), createElementBlock("li", null, toDisplayString(error), 1);
                }), 256))])])) : createCommentVNode("v-if", true), unref(anySendWarnings) ? (openBlock(), createElementBlock("div", _hoisted_51, [_hoisted_52, createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(sendNowResponse.value.warnings, warning => {
                  return openBlock(), createElementBlock("li", null, toDisplayString(warning), 1);
                }), 256))])])) : createCommentVNode("v-if", true), unref(sendNowOutcomeMessage) ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  innerHTML: unref(sendNowOutcomeMessage)
                }, null, 8, _hoisted_53)) : createCommentVNode("v-if", true)]),
                _: 1
              }, 8, ["modelValue", "type"])]),
              _: 1
            }, 8, ["headerSecondaryActions"])) : createCommentVNode("v-if", true)])], 64);
          };
        }
      }));

      script.__file = "src/Group/Scheduling/groupScheduler.obs";

    })
  };
}));
//# sourceMappingURL=groupScheduler.obs.js.map
