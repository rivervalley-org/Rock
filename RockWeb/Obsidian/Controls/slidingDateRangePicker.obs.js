System.register(['vue', './rockFormField', './dropDownList', './datePicker.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/http', '@Obsidian/Utility/slidingDateRange'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, createSlots, withCtx, createVNode, withDirectives, createElementBlock, vModelText, createCommentVNode, Fragment, toDisplayString, RockFormField, DropDownList, DatePicker, toNumber, toNumberOrNull, useHttp, timeUnitOptions, rangeTypeOptions;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      createSlots = module.createSlots;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      withDirectives = module.withDirectives;
      createElementBlock = module.createElementBlock;
      vModelText = module.vModelText;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      toNumber = module.toNumber;
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      timeUnitOptions = module.timeUnitOptions;
      rangeTypeOptions = module.rangeTypeOptions;
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

      var _hoisted_1 = {
        class: "label label-info js-slidingdaterange-info slidingdaterange-info"
      };
      var _hoisted_2 = ["id"];
      var _hoisted_3 = {
        key: 0,
        class: "label label-info js-slidingdaterange-info slidingdaterange-info"
      };
      var _hoisted_4 = {
        key: 2,
        class: "picker-daterange slidingdaterange-daterange pull-left"
      };
      var _hoisted_5 = {
        class: "input-group input-group-lower input-width-md date"
      };
      var _hoisted_6 = createElementVNode("div", {
        class: "input-group form-control-static"
      }, "to", -1);
      var _hoisted_7 = {
        class: "input-group input-group-lower input-width-md date"
      };
      var script = exports('default', defineComponent({
        name: 'slidingDateRangePicker',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          enabledSlidingDateRangeUnits: {
            type: Array,
            default: null
          },
          enabledTimeUnits: {
            type: Array,
            default: null
          },
          previewLocation: {
            type: String,
            default: "Right"
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _internalValue$value$, _internalValue$value, _internalValue$value$2, _internalValue$value$3, _internalValue$value2, _internalValue$value3, _internalValue$value$4, _internalValue$value4, _internalValue$value5, _internalValue$value$5, _internalValue$value6, _internalValue$value$6, _internalValue$value7;
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref(props.modelValue);
          var http = useHttp();
          var rangeType = ref((_internalValue$value$ = (_internalValue$value = internalValue.value) === null || _internalValue$value === void 0 ? void 0 : (_internalValue$value$2 = _internalValue$value.rangeType) === null || _internalValue$value$2 === void 0 ? void 0 : _internalValue$value$2.toString()) !== null && _internalValue$value$ !== void 0 ? _internalValue$value$ : "");
          var timeValue = ref((_internalValue$value$3 = (_internalValue$value2 = internalValue.value) === null || _internalValue$value2 === void 0 ? void 0 : (_internalValue$value3 = _internalValue$value2.timeValue) === null || _internalValue$value3 === void 0 ? void 0 : _internalValue$value3.toString()) !== null && _internalValue$value$3 !== void 0 ? _internalValue$value$3 : "");
          var timeUnit = ref((_internalValue$value$4 = (_internalValue$value4 = internalValue.value) === null || _internalValue$value4 === void 0 ? void 0 : (_internalValue$value5 = _internalValue$value4.timeUnit) === null || _internalValue$value5 === void 0 ? void 0 : _internalValue$value5.toString()) !== null && _internalValue$value$4 !== void 0 ? _internalValue$value$4 : "0");
          var lowDate = ref((_internalValue$value$5 = (_internalValue$value6 = internalValue.value) === null || _internalValue$value6 === void 0 ? void 0 : _internalValue$value6.lowerDate) !== null && _internalValue$value$5 !== void 0 ? _internalValue$value$5 : "");
          var highDate = ref((_internalValue$value$6 = (_internalValue$value7 = internalValue.value) === null || _internalValue$value7 === void 0 ? void 0 : _internalValue$value7.upperDate) !== null && _internalValue$value$6 !== void 0 ? _internalValue$value$6 : "");
          var dateRangeText = ref("");
          var isDateRange = computed(() => {
            return rangeType.value === "2";
          });
          var isTimeUnit = computed(() => {
            return rangeType.value === "0" || rangeType.value === "1" || rangeType.value === "4" || rangeType.value === "8" || rangeType.value === "16";
          });
          var isNumberVisible = computed(() => {
            return rangeType.value === "0" || rangeType.value === "4" || rangeType.value === "8" || rangeType.value === "16";
          });
          var computedTimeUnitOptions = computed(() => {
            var units = timeUnitOptions.filter(tu => !props.enabledTimeUnits || props.enabledTimeUnits.includes(toNumber(tu.value)));
            if (!isNumberVisible.value || toNumber(timeValue.value) === 1) {
              return units;
            }
            return units.map(o => {
              return {
                value: o.value,
                text: "".concat(o.text, "s")
              };
            });
          });
          var enabledSlidingDateRangeUnits = computed(() => {
            var _props$enabledSliding;
            return (_props$enabledSliding = props.enabledSlidingDateRangeUnits) === null || _props$enabledSliding === void 0 ? void 0 : _props$enabledSliding.map(v => v.toString());
          });
          var computedRangeTypeOptions = computed(() => {
            if (!props.enabledSlidingDateRangeUnits || props.enabledSlidingDateRangeUnits.length < 1) {
              return rangeTypeOptions;
            }
            return rangeTypeOptions.filter(rt => {
              var _enabledSlidingDateRa;
              return (_enabledSlidingDateRa = enabledSlidingDateRangeUnits.value) === null || _enabledSlidingDateRa === void 0 ? void 0 : _enabledSlidingDateRa.includes(rt.value);
            });
          });
          var updateDateRangeText = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var parameters = {
                slidingDateRangeType: rangeType.value || "0",
                timeUnitType: timeUnit.value || "0",
                number: timeValue.value || "1"
              };
              if (lowDate.value && highDate.value) {
                parameters["startDate"] = lowDate.value;
                parameters["endDate"] = highDate.value;
              }
              var result = yield http.get("/api/Utility/CalculateSlidingDateRange", parameters);
              if (result.isSuccess && result.data) {
                dateRangeText.value = result.data;
              } else {
                dateRangeText.value = "";
              }
            });
            return function updateDateRangeText() {
              return _ref2.apply(this, arguments);
            };
          }();
          watch(rangeType, () => {
            if (["0", "1", "4", "8", "16"].includes(rangeType.value)) {
              var _ref3;
              timeUnit.value = ((_ref3 = toNumberOrNull(timeUnit.value)) !== null && _ref3 !== void 0 ? _ref3 : 0).toString();
            }
            if (["0", "4", "8", "16"].includes(rangeType.value) && internalValue.value) {
              var _toNumberOrNull$toStr, _toNumberOrNull;
              timeValue.value = (_toNumberOrNull$toStr = (_toNumberOrNull = toNumberOrNull(timeValue.value)) === null || _toNumberOrNull === void 0 ? void 0 : _toNumberOrNull.toString()) !== null && _toNumberOrNull$toStr !== void 0 ? _toNumberOrNull$toStr : "1";
            }
          });
          watch([rangeType, timeUnit, timeValue, lowDate, highDate], () => {
            updateDateRangeText();
            var internalRangeType = toNumberOrNull(rangeType.value);
            if (internalRangeType === null) {
              internalValue.value = null;
              return;
            }
            var newValue = {
              rangeType: internalRangeType
            };
            if (["0", "1", "4", "8", "16"].includes(rangeType.value)) {
              var _ref4;
              newValue.timeUnit = (_ref4 = toNumberOrNull(timeUnit.value)) !== null && _ref4 !== void 0 ? _ref4 : undefined;
            }
            if (["0", "4", "8", "16"].includes(rangeType.value)) {
              var _toNumberOrNull2;
              newValue.timeValue = (_toNumberOrNull2 = toNumberOrNull(timeValue.value)) !== null && _toNumberOrNull2 !== void 0 ? _toNumberOrNull2 : undefined;
            }
            if (rangeType.value == "2") {
              newValue.lowerDate = lowDate.value;
              newValue.upperDate = highDate.value;
            }
            internalValue.value = newValue;
          });
          watch(() => props.modelValue, () => {
            var _internalValue$value$7, _internalValue$value8, _internalValue$value9, _internalValue$value$8, _internalValue$value10, _internalValue$value11, _internalValue$value$9, _internalValue$value12, _internalValue$value13, _internalValue$value$10, _internalValue$value14, _internalValue$value$11, _internalValue$value15;
            internalValue.value = props.modelValue;
            rangeType.value = (_internalValue$value$7 = (_internalValue$value8 = internalValue.value) === null || _internalValue$value8 === void 0 ? void 0 : (_internalValue$value9 = _internalValue$value8.rangeType) === null || _internalValue$value9 === void 0 ? void 0 : _internalValue$value9.toString()) !== null && _internalValue$value$7 !== void 0 ? _internalValue$value$7 : "";
            timeValue.value = (_internalValue$value$8 = (_internalValue$value10 = internalValue.value) === null || _internalValue$value10 === void 0 ? void 0 : (_internalValue$value11 = _internalValue$value10.timeValue) === null || _internalValue$value11 === void 0 ? void 0 : _internalValue$value11.toString()) !== null && _internalValue$value$8 !== void 0 ? _internalValue$value$8 : "";
            timeUnit.value = (_internalValue$value$9 = (_internalValue$value12 = internalValue.value) === null || _internalValue$value12 === void 0 ? void 0 : (_internalValue$value13 = _internalValue$value12.timeUnit) === null || _internalValue$value13 === void 0 ? void 0 : _internalValue$value13.toString()) !== null && _internalValue$value$9 !== void 0 ? _internalValue$value$9 : "";
            lowDate.value = (_internalValue$value$10 = (_internalValue$value14 = internalValue.value) === null || _internalValue$value14 === void 0 ? void 0 : _internalValue$value14.lowerDate) !== null && _internalValue$value$10 !== void 0 ? _internalValue$value$10 : "";
            highDate.value = (_internalValue$value$11 = (_internalValue$value15 = internalValue.value) === null || _internalValue$value15 === void 0 ? void 0 : _internalValue$value15.upperDate) !== null && _internalValue$value$11 !== void 0 ? _internalValue$value$11 : "";
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          updateDateRangeText();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: internalValue.value,
              formGroupClasses: "slidingdaterange",
              name: "slidingdaterange"
            }, createSlots({
              default: withCtx(_ref5 => {
                var uniqueId = _ref5.uniqueId;
                return [createElementVNode("div", {
                  id: uniqueId,
                  class: "form-control-group"
                }, [createVNode(unref(DropDownList), {
                  modelValue: rangeType.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => rangeType.value = $event),
                  items: unref(computedRangeTypeOptions),
                  showBlankItem: "",
                  class: "input-width-md slidingdaterange-select"
                }, null, 8, ["modelValue", "items"]), unref(isNumberVisible) ? withDirectives((openBlock(), createElementBlock("input", {
                  key: 0,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => timeValue.value = $event),
                  class: "form-control input-width-sm slidingdaterange-number",
                  type: "text",
                  pattern: "[0-9]*",
                  inputmode: "numeric"
                }, null, 512)), [[vModelText, timeValue.value]]) : createCommentVNode("v-if", true), unref(isTimeUnit) ? (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [createVNode(unref(DropDownList), {
                  modelValue: timeUnit.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => timeUnit.value = $event),
                  items: unref(computedTimeUnitOptions),
                  class: "form-control input-width-md slidingdaterange-timeunits-plural",
                  showBlankItem: false
                }, null, 8, ["modelValue", "items"]), __props.previewLocation == 'Right' ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(dateRangeText.value), 1)) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true), unref(isDateRange) ? (openBlock(), createElementBlock("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(DatePicker), {
                  modelValue: lowDate.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => lowDate.value = $event)
                }, null, 8, ["modelValue"])]), _hoisted_6, createElementVNode("div", _hoisted_7, [createVNode(unref(DatePicker), {
                  modelValue: highDate.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => highDate.value = $event)
                }, null, 8, ["modelValue"])])])) : createCommentVNode("v-if", true)], 8, _hoisted_2)];
              }),
              _: 2
            }, [__props.previewLocation == 'Top' && unref(isTimeUnit) ? {
              name: "besideLabel",
              fn: withCtx(() => [createElementVNode("div", _hoisted_1, toDisplayString(dateRangeText.value), 1)])
            } : undefined]), 1032, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/slidingDateRangePicker.obs";

    })
  };
}));
//# sourceMappingURL=slidingDateRangePicker.obs.js.map
