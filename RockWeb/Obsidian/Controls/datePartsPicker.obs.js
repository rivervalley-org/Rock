System.register(['vue', '@Obsidian/ValidationRules', '@Obsidian/Utility/dateKey', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/rockDateTime', './rockFormField.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, withDirectives, vModelSelect, createElementBlock, createCommentVNode, Fragment, renderList, toDisplayString, rulesPropType, normalizeRules, DateKey, toNumberOrNull, toNumber, RockDateTime, RockFormField;
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
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      vModelSelect = module.vModelSelect;
      createElementBlock = module.createElementBlock;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      rulesPropType = module.rulesPropType;
      normalizeRules = module.normalizeRules;
    }, function (module) {
      DateKey = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
      toNumber = module.toNumber;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      RockFormField = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "form-control-group"
      };
      var _hoisted_3 = ["id", "disabled"];
      var _hoisted_4 = createElementVNode("option", {
        value: "0"
      }, null, -1);
      var _hoisted_5 = createElementVNode("option", {
        value: "1"
      }, "Jan", -1);
      var _hoisted_6 = createElementVNode("option", {
        value: "2"
      }, "Feb", -1);
      var _hoisted_7 = createElementVNode("option", {
        value: "3"
      }, "Mar", -1);
      var _hoisted_8 = createElementVNode("option", {
        value: "4"
      }, "Apr", -1);
      var _hoisted_9 = createElementVNode("option", {
        value: "5"
      }, "May", -1);
      var _hoisted_10 = createElementVNode("option", {
        value: "6"
      }, "Jun", -1);
      var _hoisted_11 = createElementVNode("option", {
        value: "7"
      }, "Jul", -1);
      var _hoisted_12 = createElementVNode("option", {
        value: "8"
      }, "Aug", -1);
      var _hoisted_13 = createElementVNode("option", {
        value: "9"
      }, "Sep", -1);
      var _hoisted_14 = createElementVNode("option", {
        value: "10"
      }, "Oct", -1);
      var _hoisted_15 = createElementVNode("option", {
        value: "11"
      }, "Nov", -1);
      var _hoisted_16 = createElementVNode("option", {
        value: "12"
      }, "Dec", -1);
      var _hoisted_17 = [_hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, _hoisted_16];
      var _hoisted_18 = {
        key: 0,
        class: "separator"
      };
      var _hoisted_19 = ["id", "disabled"];
      var _hoisted_20 = createElementVNode("option", {
        value: "0"
      }, null, -1);
      var _hoisted_21 = ["value"];
      var _hoisted_22 = {
        key: 2,
        class: "separator"
      };
      var _hoisted_23 = ["id", "disabled"];
      var _hoisted_24 = createElementVNode("option", {
        value: "0"
      }, null, -1);
      var _hoisted_25 = ["value"];
      var script = exports('default', defineComponent({
        name: 'datePartsPicker',
        props: {
          rules: rulesPropType,
          modelValue: {
            type: Object,
            required: false
          },
          requireYear: {
            type: Boolean,
            default: true
          },
          showYear: {
            type: Boolean,
            default: true
          },
          hideDay: {
            type: Boolean,
            default: false
          },
          allowFutureDates: {
            type: Boolean,
            default: true
          },
          futureYearCount: {
            type: Number,
            default: 50
          },
          startYear: {
            type: Number,
            default: 1900
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
          var internalDay = ref("0");
          var internalMonth = ref("0");
          var internalYear = ref("0");
          var days = ref([]);
          function getValue() {
            var value = {
              day: toNumber(internalDay.value),
              month: toNumber(internalMonth.value),
              year: toNumber(internalYear.value)
            };
            if (value.day === 0 && value.month === 0 && value.year === 0) {
              return undefined;
            }
            return value;
          }
          function updateDays() {
            var dayCount = 31;
            var year = toNumber(internalYear.value);
            var month = toNumber(internalMonth.value);
            if (props.showYear && year > 0 && month > 0) {
              var _RockDateTime$fromPar, _RockDateTime$fromPar2, _RockDateTime$fromPar3, _RockDateTime$fromPar4;
              dayCount = (_RockDateTime$fromPar = (_RockDateTime$fromPar2 = RockDateTime.fromParts(year, month, 1)) === null || _RockDateTime$fromPar2 === void 0 ? void 0 : (_RockDateTime$fromPar3 = _RockDateTime$fromPar2.addMonths(1)) === null || _RockDateTime$fromPar3 === void 0 ? void 0 : (_RockDateTime$fromPar4 = _RockDateTime$fromPar3.addDays(-1)) === null || _RockDateTime$fromPar4 === void 0 ? void 0 : _RockDateTime$fromPar4.day) !== null && _RockDateTime$fromPar !== void 0 ? _RockDateTime$fromPar : 31;
            } else if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) !== -1) {
              dayCount = 31;
            } else if ([4, 6, 9, 11].indexOf(month) !== -1) {
              dayCount = 30;
            } else if (month === 2) {
              dayCount = 29;
            }
            var dayOptions = [];
            for (var day = 1; day <= dayCount; day++) {
              dayOptions.push(day.toString());
            }
            days.value = dayOptions;
          }
          var computedRequireYear = computed(() => {
            return props.showYear && props.requireYear;
          });
          var internalDateKey = computed(() => {
            var _props$modelValue$yea, _props$modelValue, _props$modelValue$yea2, _props$modelValue4, _props$modelValue$mon2, _props$modelValue5, _props$modelValue$day2, _props$modelValue6;
            if (((_props$modelValue$yea = !((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 && _props$modelValue.year)) !== null && _props$modelValue$yea !== void 0 ? _props$modelValue$yea : 0) && !computedRequireYear.value) {
              var _props$modelValue$mon, _props$modelValue2, _props$modelValue$day, _props$modelValue3;
              var _dateKey = DateKey.toNoYearDateKey((_props$modelValue$mon = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.month) !== null && _props$modelValue$mon !== void 0 ? _props$modelValue$mon : 0, (_props$modelValue$day = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.day) !== null && _props$modelValue$day !== void 0 ? _props$modelValue$day : 0);
              return _dateKey;
            }
            var dateKey = DateKey.toDateKey((_props$modelValue$yea2 = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.year) !== null && _props$modelValue$yea2 !== void 0 ? _props$modelValue$yea2 : 0, (_props$modelValue$mon2 = (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.month) !== null && _props$modelValue$mon2 !== void 0 ? _props$modelValue$mon2 : 0, (_props$modelValue$day2 = (_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.day) !== null && _props$modelValue$day2 !== void 0 ? _props$modelValue$day2 : 0);
            return dateKey;
          });
          var computedRules = computed(() => {
            var rules = normalizeRules(props.rules);
            if (rules.indexOf("required") !== -1 && rules.indexOf("datekey") === -1) {
              rules.push("datekey");
            }
            return rules;
          });
          var years = computed(() => {
            var years = [];
            var year = RockDateTime.now().year;
            if (props.futureYearCount > 0 && props.allowFutureDates) {
              year += props.futureYearCount;
            }
            while (year >= 1900) {
              years.push(year.toString());
              year--;
            }
            return years;
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$day3, _props$modelValue7, _props$modelValue$mon3, _props$modelValue8, _props$modelValue$yea3, _props$modelValue9;
            internalDay.value = (_props$modelValue$day3 = (_props$modelValue7 = props.modelValue) === null || _props$modelValue7 === void 0 ? void 0 : _props$modelValue7.day.toString()) !== null && _props$modelValue$day3 !== void 0 ? _props$modelValue$day3 : "0";
            internalMonth.value = (_props$modelValue$mon3 = (_props$modelValue8 = props.modelValue) === null || _props$modelValue8 === void 0 ? void 0 : _props$modelValue8.month.toString()) !== null && _props$modelValue$mon3 !== void 0 ? _props$modelValue$mon3 : "0";
            internalYear.value = (_props$modelValue$yea3 = (_props$modelValue9 = props.modelValue) === null || _props$modelValue9 === void 0 ? void 0 : _props$modelValue9.year.toString()) !== null && _props$modelValue$yea3 !== void 0 ? _props$modelValue$yea3 : "0";
            updateDays();
          }, {
            immediate: true
          });
          watch(() => props.showYear, () => {
            updateDays();
          }, {
            immediate: true
          });
          watch(internalDay, () => {
            emit("update:modelValue", getValue());
          });
          watch(internalMonth, () => {
            var day = toNumberOrNull(internalDay.value);
            updateDays();
            if (day != null && day >= days.value.length + 1) {
              internalDay.value = days.value.length.toString();
            } else {
              emit("update:modelValue", getValue());
            }
          });
          watch(internalYear, () => {
            var day = toNumberOrNull(internalDay.value);
            updateDays();
            if (day != null && day >= days.value.length + 1) {
              internalDay.value = days.value.length.toString();
            } else {
              emit("update:modelValue", getValue());
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: unref(internalDateKey),
              formGroupClasses: "birthday-picker",
              name: "birthday",
              rules: unref(computedRules)
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                  _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [withDirectives(createElementVNode("select", {
                  id: uniqueId + '-month',
                  class: "form-control input-width-sm",
                  disabled: __props.disabled,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalMonth.value = $event)
                }, _hoisted_17, 8, _hoisted_3), [[vModelSelect, internalMonth.value]]), !__props.hideDay ? (openBlock(), createElementBlock("span", _hoisted_18, "/")) : createCommentVNode("v-if", true), !__props.hideDay ? withDirectives((openBlock(), createElementBlock("select", {
                  key: 1,
                  id: uniqueId + '-day',
                  class: "form-control input-width-sm",
                  disabled: __props.disabled,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalDay.value = $event)
                }, [_hoisted_20, (openBlock(true), createElementBlock(Fragment, null, renderList(days.value, day => {
                  return openBlock(), createElementBlock("option", {
                    key: day,
                    value: day
                  }, toDisplayString(day), 9, _hoisted_21);
                }), 128))], 8, _hoisted_19)), [[vModelSelect, internalDay.value]]) : createCommentVNode("v-if", true), __props.showYear ? (openBlock(), createElementBlock("span", _hoisted_22, "/")) : createCommentVNode("v-if", true), __props.showYear ? withDirectives((openBlock(), createElementBlock("select", {
                  key: 3,
                  id: uniqueId + '-year',
                  class: "form-control input-width-sm",
                  disabled: __props.disabled,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => internalYear.value = $event)
                }, [_hoisted_24, (openBlock(true), createElementBlock(Fragment, null, renderList(unref(years), year => {
                  return openBlock(), createElementBlock("option", {
                    value: year
                  }, toDisplayString(year), 9, _hoisted_25);
                }), 256))], 8, _hoisted_23)), [[vModelSelect, internalYear.value]]) : createCommentVNode("v-if", true)])])];
              }),
              _: 1
            }, 8, ["modelValue", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/datePartsPicker.obs";

    })
  };
}));
//# sourceMappingURL=datePartsPicker.obs.js.map
