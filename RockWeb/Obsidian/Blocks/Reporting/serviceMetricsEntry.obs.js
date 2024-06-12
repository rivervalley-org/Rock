System.register(['vue', '@Obsidian/Controls/numberBox.obs', './ServiceMetricsEntry/metricItemTree.obs', '@Obsidian/Controls/loading.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Utility/rockDateTime', '@Obsidian/Controls/buttonDropDownList.obs', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/block', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createElementBlock, createVNode, unref, ref, computed, watch, onMounted, createElementVNode, toDisplayString, withCtx, Fragment, renderList, createBlock, createTextVNode, createCommentVNode, isRef, NumberBox, MetricItemTree, Loading, RockButton, RockDateTime, ButtonDropDownList, NotificationBox, RockForm, Panel, TextBox, BtnType, useConfigurationValues, useInvokeBlockAction, useReloadBlock, onConfigurationValuesChanged, toGuidOrNull;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      onMounted = module.onMounted;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      withCtx = module.withCtx;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createBlock = module.createBlock;
      createTextVNode = module.createTextVNode;
      createCommentVNode = module.createCommentVNode;
      isRef = module.isRef;
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      MetricItemTree = module["default"];
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      ButtonDropDownList = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      useReloadBlock = module.useReloadBlock;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
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

      var script$2 = defineComponent({
        name: 'metricItem.partial',
        props: {
          item: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false,
            required: false
          }
        },
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [createVNode(unref(NumberBox), {
              modelValue: __props.item.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => __props.item.value = $event),
              disabled: __props.disabled,
              label: __props.item.name
            }, null, 8, ["modelValue", "disabled", "label"])]);
          };
        }
      });

      script$2.__file = "src/Reporting/ServiceMetricsEntry/metricItem.partial.obs";

      var _hoisted_1$1 = {
        key: 0
      };
      var _hoisted_2$1 = {
        class: "mt-0"
      };
      var StepType = function (StepType) {
        StepType["Begin"] = "Begin";
        StepType["Location"] = "Location";
        StepType["WeekOf"] = "Week of";
        StepType["ServiceTime"] = "Service Time";
        StepType["End"] = "End";
        return StepType;
      }(StepType || {});
      var script$1 = defineComponent({
        name: 'metricParametersStepper.partial',
        props: {
          campusGuid: {
            type: String
          },
          weekendDate: {
            type: String
          },
          scheduleGuid: {
            type: String
          },
          campuses: {
            type: Object
          },
          weekendDates: {
            type: Object
          },
          serviceTimes: {
            type: Object
          }
        },
        emits: ["update:campusGuid", "update:weekendDate", "update:scheduleGuid", "loadCampuses", "loadWeekendDates", "loadServiceTimes", "ready", "complete"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var loadingIndicatorDelayMs = 500;
          var beginStep = ref({
            type: StepType.Begin,
            options: computed(() => []),
            setValue: _value => {},
            showStep() {
              currentStep.value = beginStep.value;
            },
            moveNext() {
              campusStep.value.showStep();
            },
            isLoading: computed(() => false)
          });
          var campusStep = ref({
            type: StepType.Location,
            options: computed(() => {
              var _props$campuses;
              return (_props$campuses = props.campuses) !== null && _props$campuses !== void 0 ? _props$campuses : [];
            }),
            setValue: value => {
              emit("update:campusGuid", value);
            },
            showStep() {
              loadCampuses();
              currentStep.value = campusStep.value;
            },
            moveNext() {
              weekendDateStep.value.showStep();
            },
            isLoading: computed(() => isLoadingCampuses.value)
          });
          var weekendDateStep = ref({
            type: StepType.WeekOf,
            options: computed(() => {
              var _props$weekendDates;
              return (_props$weekendDates = props.weekendDates) !== null && _props$weekendDates !== void 0 ? _props$weekendDates : [];
            }),
            setValue: value => {
              emit("update:weekendDate", value);
            },
            showStep() {
              loadWeekendDates();
              currentStep.value = weekendDateStep.value;
            },
            moveNext() {
              scheduleStep.value.showStep();
            },
            isLoading: computed(() => isLoadingWeekendDates.value)
          });
          var scheduleStep = ref({
            type: StepType.ServiceTime,
            options: computed(() => {
              var _props$serviceTimes;
              return (_props$serviceTimes = props.serviceTimes) !== null && _props$serviceTimes !== void 0 ? _props$serviceTimes : [];
            }),
            setValue: value => {
              emit("update:scheduleGuid", value);
            },
            showStep() {
              loadServiceTimes();
              currentStep.value = scheduleStep.value;
            },
            moveNext() {
              endStep.value.showStep();
            },
            isLoading: computed(() => isLoadingServiceTimes.value)
          });
          var endStep = ref({
            type: StepType.End,
            options: computed(() => []),
            setValue: _value => {},
            showStep: () => {
              currentStep.value = endStep.value;
              emit("complete");
              return Promise.resolve();
            },
            moveNext() {},
            isLoading: computed(() => false)
          });
          var currentStep = ref(beginStep.value);
          var isLoadingCampuses = ref(false);
          var isLoadingWeekendDates = ref(false);
          var isLoadingServiceTimes = ref(false);
          function loadCampuses() {
            emit("loadCampuses");
            debounceIfUnchanged(() => props.campuses, () => isLoadingCampuses.value = true, loadingIndicatorDelayMs);
          }
          function loadWeekendDates() {
            emit("loadWeekendDates");
            debounceIfUnchanged(() => props.weekendDates, () => isLoadingWeekendDates.value = true, loadingIndicatorDelayMs);
          }
          function loadServiceTimes() {
            emit("loadServiceTimes");
            debounceIfUnchanged(() => props.serviceTimes, () => isLoadingServiceTimes.value = true, loadingIndicatorDelayMs);
          }
          function debounceIfUnchanged(callbackReturningValueToCheck, callbackToExecuteIfValueUnchanged, delay) {
            var oldValue = callbackReturningValueToCheck();
            setTimeout(() => {
              var newValue = callbackReturningValueToCheck();
              if (newValue === oldValue) {
                callbackToExecuteIfValueUnchanged();
              }
            }, delay);
          }
          function onSelectionChanged(_x) {
            return _onSelectionChanged.apply(this, arguments);
          }
          function _onSelectionChanged() {
            _onSelectionChanged = _asyncToGenerator(function* (value) {
              currentStep.value.setValue(value);
              yield currentStep.value.moveNext();
            });
            return _onSelectionChanged.apply(this, arguments);
          }
          watch(() => props.campuses, _asyncToGenerator(function* () {
            isLoadingCampuses.value = false;
            if (props.campuses && currentStep.value.type === StepType.Location) {
              if (props.campuses.length === 1) {
                yield onSelectionChanged(props.campuses[0].value);
                return;
              }
              var selected = props.campuses.find(c => c.value === props.campusGuid);
              if (selected) {
                yield onSelectionChanged(selected.value);
              }
            }
          }));
          watch(() => props.weekendDates, _asyncToGenerator(function* () {
            isLoadingWeekendDates.value = false;
            if (props.weekendDates && currentStep.value.type === StepType.WeekOf) {
              if (props.weekendDates.length === 1) {
                yield onSelectionChanged(props.weekendDates[0].value);
              }
              if (props.weekendDate) {
                var weekendDateIso = RockDateTime.parseISO(props.weekendDate);
                if (weekendDateIso) {
                  var selected = props.weekendDates.find(c => {
                    if (!c.value) {
                      return false;
                    }
                    var valueIso = RockDateTime.parseISO(c.value);
                    if (!valueIso) {
                      return false;
                    }
                    return weekendDateIso.isEqualTo(valueIso);
                  });
                  if (selected) {
                    yield onSelectionChanged(selected.value);
                  }
                }
              }
            }
          }));
          watch(() => props.serviceTimes, _asyncToGenerator(function* () {
            isLoadingServiceTimes.value = false;
            if (props.serviceTimes && currentStep.value.type === StepType.ServiceTime) {
              if (props.serviceTimes.length <= 1) {
                var _props$serviceTimes$;
                yield onSelectionChanged((_props$serviceTimes$ = props.serviceTimes[0]) === null || _props$serviceTimes$ === void 0 ? void 0 : _props$serviceTimes$.value);
              }
              var selected = props.serviceTimes.find(c => c.value === props.scheduleGuid);
              if (selected) {
                yield onSelectionChanged(selected.value);
              }
            }
          }));
          onMounted(() => {
            emit("ready", {
              start: () => beginStep.value.moveNext()
            });
          });
          return (_ctx, _cache) => {
            return currentStep.value.type !== StepType.Begin && currentStep.value.type !== StepType.End ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createElementVNode("h3", _hoisted_2$1, "Select " + toDisplayString(currentStep.value.type) + ":", 1), createVNode(unref(Loading), {
              isLoading: currentStep.value.isLoading
            }, {
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(currentStep.value.options, option => {
                return openBlock(), createBlock(unref(RockButton), {
                  btnType: "default",
                  class: "btn-block",
                  onClick: $event => onSelectionChanged(option.value)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(option.text), 1)]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 256))]),
              _: 1
            }, 8, ["isLoading"])])) : createCommentVNode("v-if", true);
          };
        }
      });

      script$1.__file = "src/Reporting/ServiceMetricsEntry/metricParametersStepper.partial.obs";

      var _hoisted_1 = {
        key: 0
      };
      var _hoisted_2 = createTextVNode("There are no campuses available based on the campus filter settings.");
      var _hoisted_3 = {
        key: 2
      };
      var _hoisted_4 = {
        class: "panel-settings-group mb-3"
      };
      var _hoisted_5 = {
        key: 0,
        class: "btn"
      };
      var _hoisted_6 = createTextVNode("No services exist for the selected campus and date. Change the date or campus to find the desired service.");
      var _hoisted_7 = {
        key: 2
      };
      var _hoisted_8 = {
        class: "form-horizontal label-xl"
      };
      var _hoisted_9 = {
        class: "actions"
      };
      var _hoisted_10 = createTextVNode("Save");
      var script = exports('default', defineComponent({
        name: 'serviceMetricsEntry',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var reloadBlock = useReloadBlock();
          var blockError = ref(config.errorMessage);
          var errorMessage = ref("");
          var campusGuid = ref(toGuidOrNull(config.campusGuid));
          var weekendDate = ref(config.weekendDate);
          var scheduleGuid = ref(toGuidOrNull(config.scheduleGuid));
          var stepperController = ref();
          var areMetricParametersSet = ref(false);
          var campuses = ref([]);
          var areCampusesLoaded = ref(false);
          var weekendDates = ref([]);
          var serviceTimes = ref([]);
          var areServiceTimesLoaded = ref(false);
          var isSaving = ref(false);
          var isSavedMessage = ref();
          var metricItems = ref();
          var metricCategories = ref();
          var areServiceMetricsLoaded = ref(false);
          var isGettingServiceMetrics = ref(false);
          var notes = ref();
          var isLoadingCampuses = ref();
          var isLoadingWeekendDates = ref();
          var isLoadingServiceTimes = ref();
          var campusGuidOrEmptyString = computed({
            get() {
              var _campusGuid$value;
              return (_campusGuid$value = campusGuid.value) !== null && _campusGuid$value !== void 0 ? _campusGuid$value : "";
            },
            set(newValue) {
              campusGuid.value = toGuidOrNull(newValue);
            }
          });
          var weekendDateOrEmptyString = computed({
            get() {
              var _weekendDate$value;
              return (_weekendDate$value = weekendDate.value) !== null && _weekendDate$value !== void 0 ? _weekendDate$value : "";
            },
            set(newValue) {
              weekendDate.value = newValue;
            }
          });
          var scheduleGuidOrEmptyString = computed({
            get() {
              var _scheduleGuid$value;
              return (_scheduleGuid$value = scheduleGuid.value) !== null && _scheduleGuid$value !== void 0 ? _scheduleGuid$value : "";
            },
            set(newValue) {
              scheduleGuid.value = toGuidOrNull(newValue);
            }
          });
          var notesOrEmptyString = computed({
            get() {
              var _notes$value;
              return (_notes$value = notes.value) !== null && _notes$value !== void 0 ? _notes$value : "";
            },
            set(newValue) {
              notes.value = newValue;
            }
          });
          var hasNoCampuses = computed(() => {
            var _campuses$value;
            return areCampusesLoaded.value && !((_campuses$value = campuses.value) !== null && _campuses$value !== void 0 && _campuses$value.length);
          });
          var areNoServiceTimesLoaded = computed(() => {
            var _serviceTimes$value;
            return areServiceTimesLoaded.value && !((_serviceTimes$value = serviceTimes.value) !== null && _serviceTimes$value !== void 0 && _serviceTimes$value.length);
          });
          function onLoadCampuses() {
            return _onLoadCampuses.apply(this, arguments);
          }
          function _onLoadCampuses() {
            _onLoadCampuses = _asyncToGenerator(function* () {
              try {
                isLoadingCampuses.value = true;
                var result = yield invokeBlockAction("GetCampuses");
                if (result !== null && result !== void 0 && result.isSuccess) {
                  var _result$data;
                  campuses.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : [];
                } else {
                  errorMessage.value = (result === null || result === void 0 ? void 0 : result.errorMessage) || "Unable to retrieve campuses.";
                  campuses.value = [];
                }
                areCampusesLoaded.value = true;
              } finally {
                isLoadingCampuses.value = false;
              }
            });
            return _onLoadCampuses.apply(this, arguments);
          }
          function onLoadWeekendDates() {
            return _onLoadWeekendDates.apply(this, arguments);
          }
          function _onLoadWeekendDates() {
            _onLoadWeekendDates = _asyncToGenerator(function* () {
              try {
                isLoadingWeekendDates.value = true;
                var bag = {
                  weeksAhead: config.weeksAhead,
                  weeksBack: config.weeksBack
                };
                var result = yield invokeBlockAction("GetWeekendDates", {
                  bag
                });
                if (result !== null && result !== void 0 && result.isSuccess) {
                  var _result$data2;
                  weekendDates.value = (_result$data2 = result.data) !== null && _result$data2 !== void 0 ? _result$data2 : [];
                } else {
                  errorMessage.value = (result === null || result === void 0 ? void 0 : result.errorMessage) || "Unable to retrieve weekend dates.";
                  weekendDates.value = [];
                }
              } finally {
                isLoadingWeekendDates.value = false;
              }
            });
            return _onLoadWeekendDates.apply(this, arguments);
          }
          function onLoadServiceTimes() {
            return _onLoadServiceTimes.apply(this, arguments);
          }
          function _onLoadServiceTimes() {
            _onLoadServiceTimes = _asyncToGenerator(function* () {
              try {
                isLoadingServiceTimes.value = true;
                var bag = {
                  campusGuid: toGuidOrNull(campusGuid.value),
                  weekendDate: weekendDate.value
                };
                var result = yield invokeBlockAction("GetServiceTimes", {
                  bag
                });
                if (result !== null && result !== void 0 && result.isSuccess) {
                  var _result$data3;
                  serviceTimes.value = (_result$data3 = result.data) !== null && _result$data3 !== void 0 ? _result$data3 : [];
                } else {
                  errorMessage.value = (result === null || result === void 0 ? void 0 : result.errorMessage) || "Unable to retrieve service times.";
                  serviceTimes.value = [];
                }
                areServiceTimesLoaded.value = true;
              } finally {
                isLoadingServiceTimes.value = false;
              }
            });
            return _onLoadServiceTimes.apply(this, arguments);
          }
          function onStepperReady(_x) {
            return _onStepperReady.apply(this, arguments);
          }
          function _onStepperReady() {
            _onStepperReady = _asyncToGenerator(function* (controller) {
              stepperController.value = controller;
            });
            return _onStepperReady.apply(this, arguments);
          }
          function onStepperComplete() {
            return _onStepperComplete.apply(this, arguments);
          }
          function _onStepperComplete() {
            _onStepperComplete = _asyncToGenerator(function* () {
              areMetricParametersSet.value = true;
              yield getServiceMetrics();
            });
            return _onStepperComplete.apply(this, arguments);
          }
          function onSubmit() {
            return _onSubmit.apply(this, arguments);
          }
          function _onSubmit() {
            _onSubmit = _asyncToGenerator(function* () {
              try {
                isSaving.value = true;
                isSavedMessage.value = null;
                errorMessage.value = "";
                var bag = {
                  campusGuid: toGuidOrNull(campusGuid.value),
                  note: notes.value,
                  scheduleGuid: toGuidOrNull(scheduleGuid.value),
                  weekendDate: weekendDate.value,
                  items: metricItems.value
                };
                var result = yield invokeBlockAction("Save", {
                  bag
                });
                if (result !== null && result !== void 0 && result.isSuccess) {
                  var _serviceTimes$value2, _serviceTimes$value2$, _weekendDates$value, _weekendDates$value$f, _campuses$value2, _campuses$value2$find;
                  var service = (_serviceTimes$value2 = serviceTimes.value) === null || _serviceTimes$value2 === void 0 ? void 0 : (_serviceTimes$value2$ = _serviceTimes$value2.find(s => s.value === scheduleGuid.value)) === null || _serviceTimes$value2$ === void 0 ? void 0 : _serviceTimes$value2$.text;
                  var weekend = (_weekendDates$value = weekendDates.value) === null || _weekendDates$value === void 0 ? void 0 : (_weekendDates$value$f = _weekendDates$value.find(w => w.value === weekendDate.value)) === null || _weekendDates$value$f === void 0 ? void 0 : _weekendDates$value$f.text;
                  var campus = (_campuses$value2 = campuses.value) === null || _campuses$value2 === void 0 ? void 0 : (_campuses$value2$find = _campuses$value2.find(c => c.value === campusGuid.value)) === null || _campuses$value2$find === void 0 ? void 0 : _campuses$value2$find.text;
                  isSavedMessage.value = service && weekend && campus ? "Your metrics for the ".concat(service, " service on ").concat(weekend, " at the ").concat(campus, " Campus have been saved.") : "Metric Values Have Been Updated";
                } else {
                  errorMessage.value = (result === null || result === void 0 ? void 0 : result.errorMessage) || "An unexpected error occurred while saving.";
                }
              } finally {
                isSaving.value = false;
              }
            });
            return _onSubmit.apply(this, arguments);
          }
          function onCampusUpdated() {
            return _onCampusUpdated.apply(this, arguments);
          }
          function _onCampusUpdated() {
            _onCampusUpdated = _asyncToGenerator(function* () {
              yield getSchedules();
              yield getServiceMetrics();
            });
            return _onCampusUpdated.apply(this, arguments);
          }
          function onWeekendDateUpdated() {
            return _onWeekendDateUpdated.apply(this, arguments);
          }
          function _onWeekendDateUpdated() {
            _onWeekendDateUpdated = _asyncToGenerator(function* () {
              yield getSchedules();
              yield getServiceMetrics();
            });
            return _onWeekendDateUpdated.apply(this, arguments);
          }
          function onScheduleUpdated() {
            return _onScheduleUpdated.apply(this, arguments);
          }
          function _onScheduleUpdated() {
            _onScheduleUpdated = _asyncToGenerator(function* () {
              yield getServiceMetrics();
            });
            return _onScheduleUpdated.apply(this, arguments);
          }
          function getSchedules() {
            return _getSchedules.apply(this, arguments);
          }
          function _getSchedules() {
            _getSchedules = _asyncToGenerator(function* () {
              yield onLoadServiceTimes();
              var oldScheduleGuid = scheduleGuid.value;
              var currentServiceTimes = serviceTimes.value;
              if (!currentServiceTimes || currentServiceTimes.every(s => s.value != oldScheduleGuid)) {
                scheduleGuid.value = null;
              }
            });
            return _getSchedules.apply(this, arguments);
          }
          function getServiceMetrics() {
            return _getServiceMetrics.apply(this, arguments);
          }
          function _getServiceMetrics() {
            _getServiceMetrics = _asyncToGenerator(function* () {
              try {
                isSavedMessage.value = null;
                isGettingServiceMetrics.value = true;
                errorMessage.value = "";
                var bag = {
                  campusGuid: toGuidOrNull(campusGuid.value),
                  scheduleGuid: toGuidOrNull(scheduleGuid.value),
                  weekendDate: weekendDate.value
                };
                var result = yield invokeBlockAction("GetMetrics", {
                  bag
                });
                if (result !== null && result !== void 0 && result.isSuccess && result.data) {
                  var _result$data$metricIt, _result$data$metricCa;
                  metricItems.value = (_result$data$metricIt = result.data.metricItems) !== null && _result$data$metricIt !== void 0 ? _result$data$metricIt : [];
                  metricCategories.value = (_result$data$metricCa = result.data.metricCategories) !== null && _result$data$metricCa !== void 0 ? _result$data$metricCa : [];
                  notes.value = result.data.notes;
                  areServiceMetricsLoaded.value = true;
                } else {
                  metricItems.value = undefined;
                  metricCategories.value = undefined;
                  notes.value = null;
                  errorMessage.value = (result === null || result === void 0 ? void 0 : result.errorMessage) || "An error occurred while getting service metrics.";
                }
              } finally {
                isGettingServiceMetrics.value = false;
              }
            });
            return _getServiceMetrics.apply(this, arguments);
          }
          onConfigurationValuesChanged(reloadBlock);
          onMounted(() => {
            var stepper = stepperController.value;
            if (stepper) {
              stepper.start();
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(blockError.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(Panel), {
              title: "Metric Entry",
              "title-icon-css-class": "fa fa-signal",
              type: "block"
            }, {
              default: withCtx(() => [unref(hasNoCampuses) ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(NotificationBox), {
                alertType: "warning",
                heading: "No Campuses Available "
              }, {
                default: withCtx(() => [_hoisted_2]),
                _: 1
              })])) : !areMetricParametersSet.value ? (openBlock(), createBlock(unref(script$1), {
                key: 1,
                campusGuid: campusGuid.value,
                "onUpdate:campusGuid": _cache[0] || (_cache[0] = $event => campusGuid.value = $event),
                scheduleGuid: scheduleGuid.value,
                "onUpdate:scheduleGuid": _cache[1] || (_cache[1] = $event => scheduleGuid.value = $event),
                weekendDate: weekendDate.value,
                "onUpdate:weekendDate": _cache[2] || (_cache[2] = $event => weekendDate.value = $event),
                campuses: campuses.value,
                serviceTimes: serviceTimes.value,
                weekendDates: weekendDates.value,
                onReady: onStepperReady,
                onComplete: onStepperComplete,
                onLoadCampuses: onLoadCampuses,
                onLoadServiceTimes: onLoadServiceTimes,
                onLoadWeekendDates: onLoadWeekendDates
              }, null, 8, ["campusGuid", "scheduleGuid", "weekendDate", "campuses", "serviceTimes", "weekendDates"])) : (openBlock(), createElementBlock("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [createVNode(unref(ButtonDropDownList), {
                modelValue: unref(campusGuidOrEmptyString),
                "onUpdate:modelValue": [_cache[3] || (_cache[3] = $event => isRef(campusGuidOrEmptyString) ? campusGuidOrEmptyString.value = $event : null), onCampusUpdated],
                disabled: isLoadingCampuses.value,
                items: campuses.value,
                label: "Campus"
              }, null, 8, ["modelValue", "disabled", "items"]), createVNode(unref(ButtonDropDownList), {
                modelValue: unref(weekendDateOrEmptyString),
                "onUpdate:modelValue": [_cache[4] || (_cache[4] = $event => isRef(weekendDateOrEmptyString) ? weekendDateOrEmptyString.value = $event : null), onWeekendDateUpdated],
                disabled: isLoadingWeekendDates.value,
                items: weekendDates.value,
                label: "Week of"
              }, null, 8, ["modelValue", "disabled", "items"]), unref(areNoServiceTimesLoaded) ? (openBlock(), createElementBlock("div", _hoisted_5, "No Services Available")) : (openBlock(), createBlock(unref(ButtonDropDownList), {
                key: 1,
                modelValue: unref(scheduleGuidOrEmptyString),
                "onUpdate:modelValue": [_cache[5] || (_cache[5] = $event => isRef(scheduleGuidOrEmptyString) ? scheduleGuidOrEmptyString.value = $event : null), onScheduleUpdated],
                disabled: isLoadingServiceTimes.value,
                items: serviceTimes.value,
                label: "Service"
              }, null, 8, ["modelValue", "disabled", "items"]))]), createVNode(unref(RockForm), {
                onSubmit: onSubmit
              }, {
                default: withCtx(() => [isSavedMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 0,
                  alertType: "success"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(isSavedMessage.value), 1)]),
                  _: 1
                })) : createCommentVNode("v-if", true), unref(areNoServiceTimesLoaded) ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 1,
                  alertType: "warning"
                }, {
                  default: withCtx(() => [_hoisted_6]),
                  _: 1
                })) : (openBlock(), createElementBlock("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [unref(config).showMetricCategorySubtotals ? (openBlock(true), createElementBlock(Fragment, {
                  key: 0
                }, renderList(metricCategories.value, category => {
                  var _metricItems$value;
                  return openBlock(), createBlock(unref(MetricItemTree), {
                    areDuplicateMetricsIncludedInCategorySubtotals: unref(config).areDuplicateMetricsIncludedInCategorySubtotals,
                    category: category,
                    items: (_metricItems$value = metricItems.value) !== null && _metricItems$value !== void 0 ? _metricItems$value : []
                  }, null, 8, ["areDuplicateMetricsIncludedInCategorySubtotals", "category", "items"]);
                }), 256)) : (openBlock(true), createElementBlock(Fragment, {
                  key: 1
                }, renderList(metricItems.value, item => {
                  return openBlock(), createBlock(unref(script$2), {
                    disabled: isGettingServiceMetrics.value || isSaving.value,
                    item: item
                  }, null, 8, ["disabled", "item"]);
                }), 256))]), createVNode(unref(TextBox), {
                  modelValue: unref(notesOrEmptyString),
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(notesOrEmptyString) ? notesOrEmptyString.value = $event : null),
                  disabled: isGettingServiceMetrics.value || isSaving.value,
                  label: "Note",
                  rows: 4,
                  textMode: "multiline"
                }, null, 8, ["modelValue", "disabled"]), createElementVNode("div", _hoisted_9, [createVNode(unref(RockButton), {
                  btnType: unref(BtnType).Primary,
                  disabled: isGettingServiceMetrics.value || isSaving.value,
                  type: "submit"
                }, {
                  default: withCtx(() => [_hoisted_10]),
                  _: 1
                }, 8, ["btnType", "disabled"])])]))]),
                _: 1
              })]))]),
              _: 1
            })]);
          };
        }
      }));

      script.__file = "src/Reporting/serviceMetricsEntry.obs";

    })
  };
}));
//# sourceMappingURL=serviceMetricsEntry.obs.js.map
