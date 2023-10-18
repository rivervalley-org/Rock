System.register(['vue', './checkBoxList', './datePickerBase.obs', './datePicker.obs', './dateRangePicker', './dateTimePicker', './dropDownList', './modal', './numberBox', './radioButtonList', './rockFormField', './transitionVerticalCollapse', '@Obsidian/Utility/internetCalendar', '@Obsidian/ValidationRules', '@Obsidian/Utility/rockDateTime', '@Obsidian/Utility/component', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, createTextVNode, createElementVNode, defineComponent, ref, shallowRef, computed, watch, openBlock, createElementBlock, Fragment, createVNode, unref, mergeProps, withCtx, withModifiers, isRef, renderList, toDisplayString, createCommentVNode, withDirectives, vModelRadio, CheckBoxList, DatePickerBase, DatePicker, DateRangePicker, DateTimePicker, DropDownList, Modal, NumberBox, RadioButtonList, RockFormField, TransitionVerticalCollapse, Calendar, Event, RecurrenceRule, containsRequiredRule, DayOfWeek, RockDateTime, useStandardRockFormFieldProps, standardRockFormFieldProps, updateRefValue, newGuid;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createTextVNode = module.createTextVNode;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      shallowRef = module.shallowRef;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createVNode = module.createVNode;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      withModifiers = module.withModifiers;
      isRef = module.isRef;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      withDirectives = module.withDirectives;
      vModelRadio = module.vModelRadio;
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      DatePickerBase = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      DateRangePicker = module["default"];
    }, function (module) {
      DateTimePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      Calendar = module.Calendar;
      Event = module.Event;
      RecurrenceRule = module.RecurrenceRule;
    }, function (module) {
      containsRequiredRule = module.containsRequiredRule;
    }, function (module) {
      DayOfWeek = module.DayOfWeek;
      RockDateTime = module.RockDateTime;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      newGuid = module.newGuid;
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

      var _withScopeId = n => (pushScopeId("data-v-c509cb38"), n = n(), popScopeId(), n);
      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "picker"
      };
      var _hoisted_3 = ["title", "onClick"];
      var _hoisted_4 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-calendar"
      }, null, -1));
      var _hoisted_5 = createTextVNode(" Edit Schedule ");
      var _hoisted_6 = [_hoisted_4, _hoisted_5];
      var _hoisted_7 = {
        class: "form-control-group"
      };
      var _hoisted_8 = _withScopeId(() => createElementVNode("span", {
        class: "input-group-addon"
      }, "hrs", -1));
      var _hoisted_9 = _withScopeId(() => createElementVNode("span", {
        class: "input-group-addon"
      }, "mins", -1));
      var _hoisted_10 = {
        key: 0,
        class: "mt-3"
      };
      var _hoisted_11 = _withScopeId(() => createElementVNode("legend", {
        class: "legend-small"
      }, "Recurrence", -1));
      var _hoisted_12 = {
        key: 0,
        class: "recurrence-pattern-type control-group controls recurrence-pattern-specific-date"
      };
      var _hoisted_13 = createTextVNode("  ");
      var _hoisted_14 = ["onClick"];
      var _hoisted_15 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1));
      var _hoisted_16 = [_hoisted_15];
      var _hoisted_17 = {
        key: 0
      };
      var _hoisted_18 = ["onClick"];
      var _hoisted_19 = _withScopeId(() => createElementVNode("span", null, "OK", -1));
      var _hoisted_20 = [_hoisted_19];
      var _hoisted_21 = ["onClick"];
      var _hoisted_22 = _withScopeId(() => createElementVNode("span", null, "Cancel", -1));
      var _hoisted_23 = [_hoisted_22];
      var _hoisted_24 = ["onClick"];
      var _hoisted_25 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-plus"
      }, null, -1));
      var _hoisted_26 = _withScopeId(() => createElementVNode("span", null, " Add Date", -1));
      var _hoisted_27 = [_hoisted_25, _hoisted_26];
      var _hoisted_28 = {
        key: 1,
        class: "recurrence-pattern-type recurrence-pattern-daily"
      };
      var _hoisted_29 = {
        class: "form-control-group"
      };
      var _hoisted_30 = {
        class: "radio-inline"
      };
      var _hoisted_31 = ["id", "name"];
      var _hoisted_32 = _withScopeId(() => createElementVNode("span", {
        class: "label-text"
      }, "Every", -1));
      var _hoisted_33 = _withScopeId(() => createElementVNode("span", {
        class: "input-group-addon"
      }, "days", -1));
      var _hoisted_34 = {
        class: "form-control-group"
      };
      var _hoisted_35 = {
        class: "radio-inline"
      };
      var _hoisted_36 = ["id", "name"];
      var _hoisted_37 = _withScopeId(() => createElementVNode("span", {
        class: "label-text"
      }, "Every weekday", -1));
      var _hoisted_38 = {
        class: "form-control-group"
      };
      var _hoisted_39 = {
        class: "radio-inline"
      };
      var _hoisted_40 = ["id", "name"];
      var _hoisted_41 = _withScopeId(() => createElementVNode("span", {
        class: "label-text"
      }, "Every weekend", -1));
      var _hoisted_42 = {
        key: 2,
        class: "recurrence-pattern-type recurrence-pattern-weekly"
      };
      var _hoisted_43 = {
        class: "form-control-group"
      };
      var _hoisted_44 = _withScopeId(() => createElementVNode("span", null, "Every ", -1));
      var _hoisted_45 = _withScopeId(() => createElementVNode("span", {
        class: "input-group-addon"
      }, "week(s)", -1));
      var _hoisted_46 = _withScopeId(() => createElementVNode("span", null, " on", -1));
      var _hoisted_47 = {
        class: "week-days"
      };
      var _hoisted_48 = {
        key: 3,
        class: "recurrence-pattern-type recurrence-pattern-monthly"
      };
      var _hoisted_49 = {
        class: "form-group controls"
      };
      var _hoisted_50 = {
        class: "form-control-group"
      };
      var _hoisted_51 = {
        class: "radio-inline"
      };
      var _hoisted_52 = ["id", "name"];
      var _hoisted_53 = _withScopeId(() => createElementVNode("span", {
        class: "label-text"
      }, "Day", -1));
      var _hoisted_54 = _withScopeId(() => createElementVNode("span", null, " of every ", -1));
      var _hoisted_55 = _withScopeId(() => createElementVNode("span", null, " months ", -1));
      var _hoisted_56 = {
        class: "form-control-group"
      };
      var _hoisted_57 = {
        class: "radio-inline"
      };
      var _hoisted_58 = ["id", "name"];
      var _hoisted_59 = _withScopeId(() => createElementVNode("span", {
        class: "label-text"
      }, "The", -1));
      var _hoisted_60 = {
        class: "input-group input-width-xl"
      };
      var _hoisted_61 = {
        class: "input-group input-width-xl"
      };
      var _hoisted_62 = {
        key: 4,
        class: "continue-until"
      };
      var _hoisted_63 = _withScopeId(() => createElementVNode("div", {
        class: "controls"
      }, [createElementVNode("hr")], -1));
      var _hoisted_64 = _withScopeId(() => createElementVNode("label", {
        class: "control-label"
      }, "Continue Until", -1));
      var _hoisted_65 = {
        class: "controls"
      };
      var _hoisted_66 = {
        class: "form-control-group"
      };
      var _hoisted_67 = {
        class: "radio-inline"
      };
      var _hoisted_68 = ["id", "name"];
      var _hoisted_69 = _withScopeId(() => createElementVNode("span", {
        class: "label-text"
      }, "No end", -1));
      var _hoisted_70 = {
        class: "form-control-group"
      };
      var _hoisted_71 = {
        class: "radio-inline"
      };
      var _hoisted_72 = ["id", "name"];
      var _hoisted_73 = _withScopeId(() => createElementVNode("span", {
        class: "label-text"
      }, "End by", -1));
      var _hoisted_74 = {
        class: "form-control-group"
      };
      var _hoisted_75 = {
        class: "radio-inline"
      };
      var _hoisted_76 = ["id", "name"];
      var _hoisted_77 = _withScopeId(() => createElementVNode("span", {
        class: "label-text"
      }, "End after", -1));
      var _hoisted_78 = _withScopeId(() => createElementVNode("span", {
        class: "input-group-addon"
      }, "occurrences", -1));
      var _hoisted_79 = {
        key: 5,
        class: "exclusions"
      };
      var _hoisted_80 = _withScopeId(() => createElementVNode("hr", null, null, -1));
      var _hoisted_81 = _withScopeId(() => createElementVNode("label", {
        class: "control-labe"
      }, "Exclusions", -1));
      var _hoisted_82 = {
        class: "form-group controls"
      };
      var _hoisted_83 = createTextVNode("  ");
      var _hoisted_84 = ["onClick"];
      var _hoisted_85 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1));
      var _hoisted_86 = [_hoisted_85];
      var _hoisted_87 = {
        key: 0
      };
      var _hoisted_88 = ["onClick"];
      var _hoisted_89 = _withScopeId(() => createElementVNode("span", null, "OK", -1));
      var _hoisted_90 = [_hoisted_89];
      var _hoisted_91 = ["onClick"];
      var _hoisted_92 = _withScopeId(() => createElementVNode("span", null, "Cancel", -1));
      var _hoisted_93 = [_hoisted_92];
      var _hoisted_94 = ["onClick"];
      var _hoisted_95 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-plus"
      }, null, -1));
      var _hoisted_96 = _withScopeId(() => createElementVNode("span", null, " Add Date Range", -1));
      var _hoisted_97 = [_hoisted_95, _hoisted_96];
      var script = exports('default', defineComponent({
        name: 'scheduleBuilder',
        props: _objectSpread2({
          modelValue: {
            type: String,
            default: ""
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref(props.modelValue);
          var dailyRadioId = newGuid().toString();
          var monthlyRadioId = newGuid().toString();
          var continueUntilRadioId = newGuid().toString();
          var standardProps = useStandardRockFormFieldProps(props);
          var scheduleSummary = ref("");
          var isModalVisible = ref(false);
          var startDateTime = ref(null);
          var duration = ref(null);
          var scheduleType = ref("oneTime");
          var occurrencePattern = ref("specificDates");
          var specificDates = shallowRef([]);
          var isAddSpecificDateVisible = ref(false);
          var addSpecificDateValue = ref("");
          var recurringDailyType = ref("everyDay");
          var recurringDailyDays = ref(1);
          var recurringWeeklyWeeks = ref(null);
          var recurringWeeklyDays = ref([]);
          var recurringMonthlyType = ref("day");
          var recurringMonthlyDayOfMonth = ref(null);
          var recurringMonthlyMonths = ref(null);
          var recurringMonthlyRate = ref([]);
          var recurringMonthlyWeekday = ref("");
          var recurringContinueUntilType = ref("noEnd");
          var recurringContinueUntilDate = ref("");
          var recurringContinueUntilCount = ref(null);
          var recurringExclusionDates = shallowRef([]);
          var isAddExclusionDateRangeVisible = ref(false);
          var addExclusionDateRangeValue = ref(undefined);
          var scheduleTypeItems = [{
            value: "oneTime",
            text: "One Time"
          }, {
            value: "recurring",
            text: "Recurring"
          }];
          var occurrencePatternItems = [{
            value: "specificDates",
            text: "Specific Dates"
          }, {
            value: "daily",
            text: "Daily"
          }, {
            value: "weekly",
            text: "Weekly"
          }, {
            value: "monthly",
            text: "Monthly"
          }];
          var recurringWeeklyDaysItems = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(d => ({
            value: d,
            text: d.substring(0, 3)
          }));
          var recurringMonthlyRateItems = ["First", "Second", "Third", "Fourth", "Last"].map(i => ({
            value: i,
            text: i
          }));
          var recurringMonthlyWeekdayItems = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(d => ({
            value: d,
            text: d
          }));
          var requiredRules = computed(() => {
            if (containsRequiredRule(props.rules)) {
              return ["required"];
            } else {
              return [];
            }
          });
          var durationInHours = computed({
            get() {
              return duration.value ? Math.floor(duration.value / 60) : null;
            },
            set(value) {
              var _durationInMinutes$va;
              var newDuration = (value !== null && value !== void 0 ? value : 0) * 60 + ((_durationInMinutes$va = durationInMinutes.value) !== null && _durationInMinutes$va !== void 0 ? _durationInMinutes$va : 0);
              if (newDuration <= 0) {
                duration.value = null;
              } else {
                duration.value = newDuration;
              }
            }
          });
          var durationInMinutes = computed({
            get() {
              return duration.value ? Math.floor(duration.value % 60) : null;
            },
            set(value) {
              var _durationInHours$valu;
              var newDuration = ((_durationInHours$valu = durationInHours.value) !== null && _durationInHours$valu !== void 0 ? _durationInHours$valu : 0) * 60 + (value !== null && value !== void 0 ? value : 0);
              if (newDuration <= 0) {
                duration.value = null;
              } else {
                duration.value = newDuration;
              }
            }
          });
          var isRecurringSchedule = computed(() => {
            return scheduleType.value == "recurring";
          });
          var isRecurringSpecificDates = computed(() => {
            return occurrencePattern.value === "specificDates";
          });
          var isRecurringDaily = computed(() => {
            return occurrencePattern.value === "daily";
          });
          var isRecurringWeekly = computed(() => {
            return occurrencePattern.value === "weekly";
          });
          var isRecurringMonthly = computed(() => {
            return occurrencePattern.value === "monthly";
          });
          var isRecurringUntil = computed(() => {
            return isRecurringDaily.value || isRecurringWeekly.value || isRecurringMonthly.value;
          });
          var isRecurringExclusions = computed(() => {
            return isRecurringDaily.value || isRecurringWeekly.value || isRecurringMonthly.value;
          });
          var exclusionDateRanges = computed(() => {
            var dates = [...recurringExclusionDates.value];
            dates.sort((a, b) => a.toMilliseconds() - b.toMilliseconds());
            var ranges = [];
            var range = {};
            for (var _i = 0, _dates = dates; _i < _dates.length; _i++) {
              var date = _dates[_i];
              if (!range.lower || !range.upper) {
                range.lower = date.date;
                range.upper = date.date;
              } else if (range.upper.addDays(1).toMilliseconds() === date.date.toMilliseconds()) {
                range.upper = date.date;
              } else {
                ranges.push({
                  lowerValue: range.lower.toISOString(),
                  upperValue: range.upper.toISOString()
                });
                range.lower = date.date;
                range.upper = date.date;
              }
            }
            if (range.lower && range.upper) {
              ranges.push({
                lowerValue: range.lower.toISOString(),
                upperValue: range.upper.toISOString()
              });
            }
            return ranges;
          });
          function updateValuesFromModel() {
            var _event$toFriendlyText, _event$startDateTime$, _event$startDateTime;
            var calendar = getCalendarFromString(props.modelValue);
            var event = calendar !== null && calendar !== void 0 && calendar.events && calendar.events.length > 0 ? calendar.events[0] : null;
            var rrule = event !== null && event !== void 0 && event.recurrenceRules && event.recurrenceRules.length > 0 ? event.recurrenceRules[0] : null;
            scheduleSummary.value = (_event$toFriendlyText = event === null || event === void 0 ? void 0 : event.toFriendlyText()) !== null && _event$toFriendlyText !== void 0 ? _event$toFriendlyText : "No Schedule";
            startDateTime.value = (_event$startDateTime$ = event === null || event === void 0 ? void 0 : (_event$startDateTime = event.startDateTime) === null || _event$startDateTime === void 0 ? void 0 : _event$startDateTime.toISOString()) !== null && _event$startDateTime$ !== void 0 ? _event$startDateTime$ : null;
            duration.value = getEventDuration(event);
            scheduleType.value = rrule ? "recurring" : "oneTime";
            occurrencePattern.value = getEventOccurrencePattern(event);
            recurringDailyType.value = "everyDay";
            recurringDailyDays.value = 1;
            recurringWeeklyWeeks.value = null;
            recurringWeeklyDays.value = [];
            recurringMonthlyType.value = "day";
            recurringMonthlyDayOfMonth.value = null;
            recurringMonthlyMonths.value = null;
            recurringMonthlyRate.value = [];
            recurringMonthlyWeekday.value = "";
            recurringContinueUntilType.value = "noEnd";
            recurringContinueUntilDate.value = "";
            recurringContinueUntilCount.value = null;
            recurringExclusionDates.value = [];
            isAddSpecificDateVisible.value = false;
            isAddExclusionDateRangeVisible.value = false;
            if (event !== null && event !== void 0 && event.recurrenceDates && event.recurrenceDates.length > 0) {
              scheduleType.value = "recurring";
              occurrencePattern.value = "specificDates";
              specificDates.value = event.recurrenceDates;
            } else if (rrule) {
              var isDailyWeekday = rrule.frequency === "WEEKLY" && rrule.byDay.length === 5 && rrule.byDay.some(bd => bd.day === DayOfWeek.Monday) && rrule.byDay.some(bd => bd.day === DayOfWeek.Tuesday) && rrule.byDay.some(bd => bd.day === DayOfWeek.Wednesday) && rrule.byDay.some(bd => bd.day === DayOfWeek.Thursday) && rrule.byDay.some(bd => bd.day === DayOfWeek.Friday) && rrule.interval === 1;
              var isDailyWeekend = rrule.frequency === "WEEKLY" && rrule.byDay.length === 2 && rrule.byDay.some(bd => bd.day === DayOfWeek.Sunday) && rrule.byDay.some(bd => bd.day === DayOfWeek.Saturday) && rrule.interval === 1;
              if (isDailyWeekday) {
                occurrencePattern.value = "daily";
                recurringDailyType.value = "everyWeekday";
              } else if (isDailyWeekend) {
                occurrencePattern.value = "daily";
                recurringDailyType.value = "everyWeekend";
              } else if (rrule.frequency === "DAILY") {
                occurrencePattern.value = "daily";
                recurringDailyType.value = "everyDay";
                recurringDailyDays.value = rrule.interval;
              } else if (rrule.frequency === "WEEKLY") {
                occurrencePattern.value = "weekly";
                recurringWeeklyWeeks.value = rrule.interval;
                recurringWeeklyDays.value = rrule.byDay.map(bd => getDayNameFromDayOfWeek(bd.day));
              } else if (rrule.frequency === "MONTHLY") {
                if (rrule.byMonthDay.length > 0) {
                  occurrencePattern.value = "monthly";
                  recurringMonthlyType.value = "day";
                  recurringMonthlyDayOfMonth.value = rrule.byMonthDay[0];
                  recurringMonthlyMonths.value = rrule.interval;
                } else if (rrule.byDay.length > 0) {
                  occurrencePattern.value = "monthly";
                  recurringMonthlyType.value = "nth";
                  recurringMonthlyRate.value = getMonthlyRates(rrule.byDay.map(bd => bd.value));
                  recurringMonthlyWeekday.value = getDayNameFromDayOfWeek(rrule.byDay[0].day);
                }
              }
              if (rrule.count !== undefined) {
                recurringContinueUntilType.value = "endAfter";
                recurringContinueUntilCount.value = rrule.count;
              } else if (rrule.endDate) {
                recurringContinueUntilType.value = "endBy";
                recurringContinueUntilDate.value = rrule.endDate.toISOString();
              }
            }
          }
          function getCalendarString() {
            var _RockDateTime$parseIS, _startDateTime$value, _event$startDateTime2, _duration$value;
            var event = new Event();
            event.startDateTime = (_RockDateTime$parseIS = RockDateTime.parseISO((_startDateTime$value = startDateTime.value) !== null && _startDateTime$value !== void 0 ? _startDateTime$value : "")) !== null && _RockDateTime$parseIS !== void 0 ? _RockDateTime$parseIS : undefined;
            event.endDateTime = (_event$startDateTime2 = event.startDateTime) === null || _event$startDateTime2 === void 0 ? void 0 : _event$startDateTime2.addMinutes((_duration$value = duration.value) !== null && _duration$value !== void 0 ? _duration$value : 0);
            if (scheduleType.value === "recurring") {
              if (occurrencePattern.value === "specificDates") {
                event.recurrenceDates = specificDates.value;
              } else {
                var rrule = new RecurrenceRule();
                event.excludedDates = recurringExclusionDates.value;
                if (recurringContinueUntilType.value === "endBy" && recurringContinueUntilDate.value) {
                  var _RockDateTime$parseIS2;
                  rrule.endDate = (_RockDateTime$parseIS2 = RockDateTime.parseISO(recurringContinueUntilDate.value)) !== null && _RockDateTime$parseIS2 !== void 0 ? _RockDateTime$parseIS2 : undefined;
                } else if (recurringContinueUntilType.value === "endAfter" && recurringContinueUntilCount.value) {
                  rrule.count = recurringContinueUntilCount.value;
                }
                if (occurrencePattern.value === "daily") {
                  if (recurringDailyType.value === "everyDay") {
                    rrule.frequency = "DAILY";
                    rrule.interval = recurringDailyDays.value || 1;
                  } else if (recurringDailyType.value === "everyWeekday") {
                    rrule.frequency = "WEEKLY";
                    rrule.byDay = [{
                      value: 1,
                      day: DayOfWeek.Monday
                    }, {
                      value: 1,
                      day: DayOfWeek.Tuesday
                    }, {
                      value: 1,
                      day: DayOfWeek.Wednesday
                    }, {
                      value: 1,
                      day: DayOfWeek.Thursday
                    }, {
                      value: 1,
                      day: DayOfWeek.Friday
                    }];
                  } else if (recurringDailyType.value === "everyWeekend") {
                    rrule.frequency = "WEEKLY";
                    rrule.byDay = [{
                      value: 1,
                      day: DayOfWeek.Sunday
                    }, {
                      value: 1,
                      day: DayOfWeek.Saturday
                    }];
                  }
                  event.recurrenceRules.push(rrule);
                } else if (occurrencePattern.value === "weekly") {
                  var _recurringWeeklyWeeks;
                  rrule.frequency = "WEEKLY";
                  rrule.interval = (_recurringWeeklyWeeks = recurringWeeklyWeeks.value) !== null && _recurringWeeklyWeeks !== void 0 ? _recurringWeeklyWeeks : 1;
                  rrule.byDay = recurringWeeklyDays.value.map(d => ({
                    value: 1,
                    day: getDayOfWeekFromDayName(d)
                  }));
                  event.recurrenceRules.push(rrule);
                } else if (occurrencePattern.value === "monthly") {
                  rrule.frequency = "MONTHLY";
                  if (recurringMonthlyType.value === "day") {
                    var _recurringMonthlyMont;
                    rrule.interval = (_recurringMonthlyMont = recurringMonthlyMonths.value) !== null && _recurringMonthlyMont !== void 0 ? _recurringMonthlyMont : 1;
                    rrule.byMonthDay = [recurringMonthlyDayOfMonth.value || 1];
                    event.recurrenceRules.push(rrule);
                  } else if (recurringMonthlyType.value === "nth") {
                    var weekday = recurringMonthlyWeekday.value || "Sunday";
                    rrule.interval = 1;
                    rrule.byDay = recurringMonthlyRate.value.map(r => ({
                      value: getMonthlyIndexFromRate(r),
                      day: getDayOfWeekFromDayName(weekday)
                    }));
                    event.recurrenceRules.push(rrule);
                  }
                }
              }
            }
            if (event.startDateTime && event.endDateTime && duration.value !== null && duration.value > 0) {
              var _calendar$build;
              var calendar = new Calendar();
              calendar.events.push(event);
              return (_calendar$build = calendar.build()) !== null && _calendar$build !== void 0 ? _calendar$build : "";
            } else {
              return "";
            }
          }
          function getCalendarFromString(ical) {
            if (!ical) {
              return null;
            }
            try {
              return new Calendar(ical);
            } catch (_unused) {
              return null;
            }
          }
          function getEventDuration(event) {
            if (!event || !event.startDateTime || !event.endDateTime) {
              return null;
            }
            var totalDurationInMinutes = (event.endDateTime.toMilliseconds() - event.startDateTime.toMilliseconds()) / 1000 / 60;
            if (totalDurationInMinutes <= 0) {
              return null;
            }
            return Math.floor(totalDurationInMinutes);
          }
          function getEventOccurrencePattern(event) {
            if (!event || !event.recurrenceRules.length) {
              return "specificDates";
            }
            var rrule = event.recurrenceRules[0];
            if (rrule.frequency === "DAILY") {
              return "daily";
            } else if (rrule.frequency === "WEEKLY") {
              return "weekly";
            } else if (rrule.frequency === "MONTHLY") {
              return "monthly";
            } else {
              return "specificDates";
            }
          }
          function getShortDateText(date) {
            return date.toLocaleString({
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            });
          }
          function getShortDateRangeText(range) {
            if (!range.lowerValue || !range.upperValue) {
              return "";
            }
            var lowerDate = RockDateTime.parseISO(range.lowerValue);
            var upperDate = RockDateTime.parseISO(range.upperValue);
            if (!lowerDate || !upperDate) {
              return "";
            }
            var lowerDateText = lowerDate.toLocaleString({
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            });
            var upperDateText = upperDate.toLocaleString({
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            });
            return "".concat(lowerDateText, " - ").concat(upperDateText);
          }
          function getDayNameFromDayOfWeek(day) {
            if (day === DayOfWeek.Sunday) {
              return "Sunday";
            } else if (day === DayOfWeek.Monday) {
              return "Monday";
            } else if (day === DayOfWeek.Tuesday) {
              return "Tuesday";
            } else if (day === DayOfWeek.Wednesday) {
              return "Wednesday";
            } else if (day === DayOfWeek.Thursday) {
              return "Thursday";
            } else if (day === DayOfWeek.Friday) {
              return "Friday";
            } else if (day === DayOfWeek.Saturday) {
              return "Saturday";
            }
            return "Sunday";
          }
          function getDayOfWeekFromDayName(day) {
            if (day === "Sunday") {
              return DayOfWeek.Sunday;
            } else if (day === "Monday") {
              return DayOfWeek.Monday;
            } else if (day === "Tuesday") {
              return DayOfWeek.Tuesday;
            } else if (day === "Wednesday") {
              return DayOfWeek.Wednesday;
            } else if (day === "Thursday") {
              return DayOfWeek.Thursday;
            } else if (day === "Friday") {
              return DayOfWeek.Friday;
            } else if (day === "Saturday") {
              return DayOfWeek.Saturday;
            }
            return DayOfWeek.Sunday;
          }
          function getMonthlyRates(indexes) {
            var rateMap = {
              [1]: "First",
              [2]: "Second",
              [3]: "Third",
              [4]: "Fourth",
              [-1]: "Last"
            };
            var rates = [];
            var _iterator = _createForOfIteratorHelper(indexes),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var index = _step.value;
                var rate = rateMap[index];
                if (rate !== undefined && !rates.includes(rate)) {
                  rates.push(rate);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return rates;
          }
          function getMonthlyIndexFromRate(rate) {
            if (rate === "Last") {
              return -1;
            } else if (rate === "Fourth") {
              return 4;
            } else if (rate === "Third") {
              return 3;
            } else if (rate === "Second") {
              return 2;
            } else {
              return 1;
            }
          }
          function onEditSchedule() {
            isModalVisible.value = true;
          }
          function onSaveSchedule() {
            internalValue.value = getCalendarString();
            emit("update:modelValue", internalValue.value);
            isModalVisible.value = false;
          }
          function onAddSpecificDate() {
            addSpecificDateValue.value = "";
            isAddSpecificDateVisible.value = true;
          }
          function onRemoveSpecificDate(date) {
            var newSpecificDates = specificDates.value.filter(d => d.toMilliseconds() !== date.toMilliseconds());
            updateRefValue(specificDates, newSpecificDates);
          }
          function onAddSpecificDateOk() {
            var date = RockDateTime.parseISO(addSpecificDateValue.value);
            if (date !== null && !specificDates.value.some(d => d.toMilliseconds() === date.toMilliseconds())) {
              var newSpecificDates = [date, ...specificDates.value];
              newSpecificDates.sort((a, b) => a.toMilliseconds() - b.toMilliseconds());
              updateRefValue(specificDates, newSpecificDates);
            }
            isAddSpecificDateVisible.value = false;
          }
          function onAddSpecificDateCancel() {
            isAddSpecificDateVisible.value = false;
          }
          function onAddExclusionDateRange() {
            addExclusionDateRangeValue.value = {};
            isAddExclusionDateRangeVisible.value = true;
          }
          function onRemoveExclusionDateRange(range) {
            var _range$lowerValue, _range$upperValue;
            var lowerDate = RockDateTime.parseISO((_range$lowerValue = range.lowerValue) !== null && _range$lowerValue !== void 0 ? _range$lowerValue : "");
            var upperDate = RockDateTime.parseISO((_range$upperValue = range.upperValue) !== null && _range$upperValue !== void 0 ? _range$upperValue : "");
            if (!lowerDate || !upperDate) {
              return;
            }
            var newExclusionDates = [...recurringExclusionDates.value];
            var _loop = function _loop(date) {
              newExclusionDates = newExclusionDates.filter(d => d.toMilliseconds() !== date.toMilliseconds());
            };
            for (var date = lowerDate; date.toMilliseconds() <= upperDate.toMilliseconds(); date = date.addDays(1)) {
              _loop(date);
            }
            updateRefValue(recurringExclusionDates, newExclusionDates);
          }
          function onAddExclusionDateRangeOk() {
            var _addExclusionDateRang, _addExclusionDateRang2, _addExclusionDateRang3, _addExclusionDateRang4;
            var lowerDate = RockDateTime.parseISO((_addExclusionDateRang = (_addExclusionDateRang2 = addExclusionDateRangeValue.value) === null || _addExclusionDateRang2 === void 0 ? void 0 : _addExclusionDateRang2.lowerValue) !== null && _addExclusionDateRang !== void 0 ? _addExclusionDateRang : "");
            var upperDate = RockDateTime.parseISO((_addExclusionDateRang3 = (_addExclusionDateRang4 = addExclusionDateRangeValue.value) === null || _addExclusionDateRang4 === void 0 ? void 0 : _addExclusionDateRang4.upperValue) !== null && _addExclusionDateRang3 !== void 0 ? _addExclusionDateRang3 : "");
            if (lowerDate && upperDate) {
              if (upperDate.toMilliseconds() < lowerDate.toMilliseconds()) {
                var swapDate = lowerDate;
                lowerDate = upperDate;
                upperDate = swapDate;
              }
              var newExclusionDates = [...recurringExclusionDates.value];
              var _loop2 = function _loop2(date) {
                if (!newExclusionDates.some(d => d.toMilliseconds() === date.toMilliseconds())) {
                  newExclusionDates.push(date);
                }
              };
              for (var date = lowerDate; date.toMilliseconds() <= upperDate.toMilliseconds(); date = date.addDays(1)) {
                _loop2(date);
              }
              newExclusionDates.sort((a, b) => a.toMilliseconds() - b.toMilliseconds());
              updateRefValue(recurringExclusionDates, newExclusionDates);
            }
            isAddExclusionDateRangeVisible.value = false;
          }
          function onAddExclusionDateRangeCancel() {
            isAddExclusionDateRangeVisible.value = false;
          }
          watch(() => props.modelValue, () => {
            internalValue.value = props.modelValue;
            updateValuesFromModel();
          });
          updateValuesFromModel();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(RockFormField), mergeProps({
              modelValue: internalValue.value
            }, unref(standardProps), {
              name: "schedule-builder"
            }), {
              default: withCtx(() => [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("a", {
                class: "picker-label",
                href: "#",
                title: scheduleSummary.value,
                onClick: withModifiers(onEditSchedule, ["prevent"])
              }, _hoisted_6, 8, _hoisted_3)])])]),
              _: 1
            }, 16, ["modelValue"]), createVNode(unref(Modal), {
              modelValue: isModalVisible.value,
              "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => isModalVisible.value = $event),
              title: "Schedule Builder",
              saveText: "OK",
              onSave: onSaveSchedule
            }, {
              default: withCtx(() => [createVNode(unref(DateTimePicker), {
                modelValue: startDateTime.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => startDateTime.value = $event),
                label: "Start Date / Time",
                help: "",
                rules: unref(requiredRules)
              }, null, 8, ["modelValue", "rules"]), createVNode(unref(RockFormField), {
                modelValue: duration.value,
                label: "Duration",
                name: "duration",
                rules: unref(requiredRules)
              }, {
                default: withCtx(() => [createElementVNode("div", _hoisted_7, [createVNode(unref(NumberBox), {
                  modelValue: unref(durationInHours),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(durationInHours) ? durationInHours.value = $event : null),
                  inputGroupClasses: "input-width-md"
                }, {
                  inputGroupAppend: withCtx(() => [_hoisted_8]),
                  _: 1
                }, 8, ["modelValue"]), createVNode(unref(NumberBox), {
                  modelValue: unref(durationInMinutes),
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(durationInMinutes) ? durationInMinutes.value = $event : null),
                  inputGroupClasses: "input-width-md"
                }, {
                  inputGroupAppend: withCtx(() => [_hoisted_9]),
                  _: 1
                }, 8, ["modelValue"])])]),
                _: 1
              }, 8, ["modelValue", "rules"]), createVNode(unref(RadioButtonList), {
                modelValue: scheduleType.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => scheduleType.value = $event),
                items: scheduleTypeItems,
                horizontal: ""
              }, null, 8, ["modelValue"]), createVNode(unref(TransitionVerticalCollapse), null, {
                default: withCtx(() => [unref(isRecurringSchedule) ? (openBlock(), createElementBlock("div", _hoisted_10, [_hoisted_11, createVNode(unref(RadioButtonList), {
                  modelValue: occurrencePattern.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => occurrencePattern.value = $event),
                  label: "Occurrence Pattern",
                  items: occurrencePatternItems,
                  horizontal: ""
                }, null, 8, ["modelValue"]), unref(isRecurringSpecificDates) ? (openBlock(), createElementBlock("div", _hoisted_12, [createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(specificDates), date => {
                  return openBlock(), createElementBlock("li", null, [createElementVNode("span", null, toDisplayString(getShortDateText(date)), 1), _hoisted_13, createElementVNode("a", {
                    href: "#",
                    class: "text-danger",
                    onClick: withModifiers($event => onRemoveSpecificDate(date), ["prevent"])
                  }, _hoisted_16, 8, _hoisted_14)]);
                }), 256))]), isAddSpecificDateVisible.value ? (openBlock(), createElementBlock("div", _hoisted_17, [createElementVNode("table", null, [createElementVNode("tr", null, [createElementVNode("td", null, [createVNode(unref(DatePicker), {
                  modelValue: addSpecificDateValue.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => addSpecificDateValue.value = $event)
                }, null, 8, ["modelValue"])]), createElementVNode("td", null, [createElementVNode("a", {
                  class: "btn btn-primary btn-xs add-specific-date-ok ml-3",
                  onClick: withModifiers(onAddSpecificDateOk, ["prevent"])
                }, _hoisted_20, 8, _hoisted_18), createElementVNode("a", {
                  class: "btn btn-link btn-xs add-specific-date-cancel",
                  onClick: withModifiers(onAddSpecificDateCancel, ["prevent"])
                }, _hoisted_23, 8, _hoisted_21)])])])])) : (openBlock(), createElementBlock("a", {
                  key: 1,
                  class: "btn btn-action btn-sm add-specific-date",
                  onClick: withModifiers(onAddSpecificDate, ["prevent"])
                }, _hoisted_27, 8, _hoisted_24))])) : createCommentVNode("v-if", true), unref(isRecurringDaily) ? (openBlock(), createElementBlock("div", _hoisted_28, [createElementVNode("div", _hoisted_29, [createElementVNode("label", _hoisted_30, [withDirectives(createElementVNode("input", {
                  id: unref(dailyRadioId),
                  name: unref(dailyRadioId),
                  type: "radio",
                  value: "everyDay",
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => recurringDailyType.value = $event)
                }, null, 8, _hoisted_31), [[vModelRadio, recurringDailyType.value]]), _hoisted_32]), createVNode(unref(NumberBox), {
                  modelValue: recurringDailyDays.value,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => recurringDailyDays.value = $event),
                  inputGroupClasses: "input-width-md"
                }, {
                  inputGroupAppend: withCtx(() => [_hoisted_33]),
                  _: 1
                }, 8, ["modelValue"])]), createElementVNode("div", _hoisted_34, [createElementVNode("label", _hoisted_35, [withDirectives(createElementVNode("input", {
                  id: unref(dailyRadioId),
                  name: unref(dailyRadioId),
                  type: "radio",
                  value: "everyWeekday",
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => recurringDailyType.value = $event)
                }, null, 8, _hoisted_36), [[vModelRadio, recurringDailyType.value]]), _hoisted_37])]), createElementVNode("div", _hoisted_38, [createElementVNode("label", _hoisted_39, [withDirectives(createElementVNode("input", {
                  id: unref(dailyRadioId),
                  name: unref(dailyRadioId),
                  type: "radio",
                  value: "everyWeekend",
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => recurringDailyType.value = $event)
                }, null, 8, _hoisted_40), [[vModelRadio, recurringDailyType.value]]), _hoisted_41])])])) : createCommentVNode("v-if", true), unref(isRecurringWeekly) ? (openBlock(), createElementBlock("div", _hoisted_42, [createElementVNode("div", _hoisted_43, [_hoisted_44, createVNode(unref(NumberBox), {
                  modelValue: recurringWeeklyWeeks.value,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => recurringWeeklyWeeks.value = $event),
                  inputGroupClasses: "input-width-md"
                }, {
                  inputGroupAppend: withCtx(() => [_hoisted_45]),
                  _: 1
                }, 8, ["modelValue"]), _hoisted_46]), createElementVNode("div", _hoisted_47, [createVNode(unref(CheckBoxList), {
                  modelValue: recurringWeeklyDays.value,
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => recurringWeeklyDays.value = $event),
                  items: unref(recurringWeeklyDaysItems),
                  horizontal: ""
                }, null, 8, ["modelValue", "items"])])])) : createCommentVNode("v-if", true), unref(isRecurringMonthly) ? (openBlock(), createElementBlock("div", _hoisted_48, [createElementVNode("div", _hoisted_49, [createElementVNode("div", _hoisted_50, [createElementVNode("label", _hoisted_51, [withDirectives(createElementVNode("input", {
                  id: unref(monthlyRadioId),
                  name: unref(monthlyRadioId),
                  type: "radio",
                  value: "day",
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => recurringMonthlyType.value = $event)
                }, null, 8, _hoisted_52), [[vModelRadio, recurringMonthlyType.value]]), _hoisted_53]), createVNode(unref(NumberBox), {
                  modelValue: recurringMonthlyDayOfMonth.value,
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => recurringMonthlyDayOfMonth.value = $event),
                  class: "input-width-sm",
                  minimumValue: 1,
                  maximumValue: 31
                }, null, 8, ["modelValue"]), _hoisted_54, createVNode(unref(NumberBox), {
                  modelValue: recurringMonthlyMonths.value,
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => recurringMonthlyMonths.value = $event),
                  class: "input-width-sm"
                }, null, 8, ["modelValue"]), _hoisted_55]), createElementVNode("div", _hoisted_56, [createElementVNode("label", _hoisted_57, [withDirectives(createElementVNode("input", {
                  id: unref(monthlyRadioId),
                  name: unref(monthlyRadioId),
                  type: "radio",
                  value: "nth",
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => recurringMonthlyType.value = $event)
                }, null, 8, _hoisted_58), [[vModelRadio, recurringMonthlyType.value]]), _hoisted_59]), createElementVNode("div", _hoisted_60, [createVNode(unref(DropDownList), {
                  modelValue: recurringMonthlyRate.value,
                  "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => recurringMonthlyRate.value = $event),
                  items: unref(recurringMonthlyRateItems),
                  multiple: ""
                }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_61, [createVNode(unref(DropDownList), {
                  modelValue: recurringMonthlyWeekday.value,
                  "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => recurringMonthlyWeekday.value = $event),
                  items: unref(recurringMonthlyWeekdayItems)
                }, null, 8, ["modelValue", "items"])])])])])) : createCommentVNode("v-if", true), unref(isRecurringUntil) ? (openBlock(), createElementBlock("div", _hoisted_62, [_hoisted_63, _hoisted_64, createElementVNode("div", _hoisted_65, [createElementVNode("div", _hoisted_66, [createElementVNode("label", _hoisted_67, [withDirectives(createElementVNode("input", {
                  id: unref(continueUntilRadioId),
                  name: unref(continueUntilRadioId),
                  type: "radio",
                  value: "noEnd",
                  "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => recurringContinueUntilType.value = $event)
                }, null, 8, _hoisted_68), [[vModelRadio, recurringContinueUntilType.value]]), _hoisted_69])]), createElementVNode("div", _hoisted_70, [createElementVNode("label", _hoisted_71, [withDirectives(createElementVNode("input", {
                  id: unref(continueUntilRadioId),
                  name: unref(continueUntilRadioId),
                  type: "radio",
                  value: "endBy",
                  "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => recurringContinueUntilType.value = $event)
                }, null, 8, _hoisted_72), [[vModelRadio, recurringContinueUntilType.value]]), _hoisted_73]), createVNode(unref(DatePickerBase), {
                  modelValue: recurringContinueUntilDate.value,
                  "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => recurringContinueUntilDate.value = $event)
                }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_74, [createElementVNode("label", _hoisted_75, [withDirectives(createElementVNode("input", {
                  id: unref(continueUntilRadioId),
                  name: unref(continueUntilRadioId),
                  type: "radio",
                  value: "endAfter",
                  "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => recurringContinueUntilType.value = $event)
                }, null, 8, _hoisted_76), [[vModelRadio, recurringContinueUntilType.value]]), _hoisted_77]), createVNode(unref(NumberBox), {
                  modelValue: recurringContinueUntilCount.value,
                  "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => recurringContinueUntilCount.value = $event),
                  inputGroupClasses: "input-width-lg"
                }, {
                  inputGroupAppend: withCtx(() => [_hoisted_78]),
                  _: 1
                }, 8, ["modelValue"])])])])) : createCommentVNode("v-if", true), unref(isRecurringExclusions) ? (openBlock(), createElementBlock("div", _hoisted_79, [_hoisted_80, _hoisted_81, createElementVNode("div", _hoisted_82, [createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(exclusionDateRanges), range => {
                  return openBlock(), createElementBlock("li", null, [createElementVNode("span", null, toDisplayString(getShortDateRangeText(range)), 1), _hoisted_83, createElementVNode("a", {
                    href: "#",
                    class: "text-danger",
                    onClick: withModifiers($event => onRemoveExclusionDateRange(range), ["prevent"])
                  }, _hoisted_86, 8, _hoisted_84)]);
                }), 256))]), isAddExclusionDateRangeVisible.value ? (openBlock(), createElementBlock("div", _hoisted_87, [createElementVNode("table", null, [createElementVNode("tr", null, [createElementVNode("td", null, [createVNode(unref(DateRangePicker), {
                  modelValue: addExclusionDateRangeValue.value,
                  "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => addExclusionDateRangeValue.value = $event)
                }, null, 8, ["modelValue"])]), createElementVNode("td", null, [createElementVNode("a", {
                  class: "btn btn-primary btn-xs add-exclusion-daterange-ok ml-3",
                  onClick: withModifiers(onAddExclusionDateRangeOk, ["prevent"])
                }, _hoisted_90, 8, _hoisted_88), createElementVNode("a", {
                  class: "btn btn-link btn-xs add-exclusion-daterange-cancel",
                  onClick: withModifiers(onAddExclusionDateRangeCancel, ["prevent"])
                }, _hoisted_93, 8, _hoisted_91)])])])])) : (openBlock(), createElementBlock("a", {
                  key: 1,
                  class: "btn btn-action btn-sm add-exclusion-daterange",
                  onClick: withModifiers(onAddExclusionDateRange, ["prevent"])
                }, _hoisted_97, 8, _hoisted_94))])])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true)]),
                _: 1
              })]),
              _: 1
            }, 8, ["modelValue"])], 64);
          };
        }
      }));

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

      var css_248z = ".recurrence-pattern-specific-date>ul>li>a[data-v-c509cb38]{display:none}.recurrence-pattern-specific-date>ul:hover>li>a[data-v-c509cb38]{display:initial}";
      styleInject(css_248z);

      script.__scopeId = "data-v-c509cb38";
      script.__file = "Framework/Controls/scheduleBuilder.obs";

    })
  };
}));
//# sourceMappingURL=scheduleBuilder.obs.js.map
