System.register(['vue', '@Obsidian/ValidationRules', '@Obsidian/Utility/dateKey', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/rockDateTime', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, rulesPropType, normalizeRules, DateKey, toNumber, toNumberOrNull, RockDateTime, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            rulesPropType = module.rulesPropType;
            normalizeRules = module.normalizeRules;
        }, function (module) {
            DateKey = module["default"];
        }, function (module) {
            toNumber = module.toNumber;
            toNumberOrNull = module.toNumberOrNull;
        }, function (module) {
            RockDateTime = module.RockDateTime;
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            exports('getDefaultDatePartsPickerModel', getDefaultDatePartsPickerModel);

            function getDefaultDatePartsPickerModel() {
              return {
                year: 0,
                month: 0,
                day: 0
              };
            }
            var datePartsPicker = exports('default', defineComponent({
              name: "DatePartsPicker",
              components: {
                RockFormField
              },
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
                  type: String
                }
              },
              data() {
                return {
                  internalDay: "0",
                  internalMonth: "0",
                  internalYear: "0",
                  days: []
                };
              },
              methods: {
                getValue() {
                  return {
                    day: toNumber(this.internalDay),
                    month: toNumber(this.internalMonth),
                    year: toNumber(this.internalYear)
                  };
                },
                updateDays() {
                  var dayCount = 31;
                  var year = toNumber(this.internalYear);
                  var month = toNumber(this.internalMonth);
                  if (this.showYear && year > 0 && month > 0) {
                    var _RockDateTime$fromPar, _RockDateTime$fromPar2, _RockDateTime$fromPar3, _RockDateTime$fromPar4;
                    dayCount = (_RockDateTime$fromPar = (_RockDateTime$fromPar2 = RockDateTime.fromParts(year, month, 1)) === null || _RockDateTime$fromPar2 === void 0 ? void 0 : (_RockDateTime$fromPar3 = _RockDateTime$fromPar2.addMonths(1)) === null || _RockDateTime$fromPar3 === void 0 ? void 0 : (_RockDateTime$fromPar4 = _RockDateTime$fromPar3.addDays(-1)) === null || _RockDateTime$fromPar4 === void 0 ? void 0 : _RockDateTime$fromPar4.day) !== null && _RockDateTime$fromPar !== void 0 ? _RockDateTime$fromPar : 31;
                  } else if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) !== -1) {
                    dayCount = 31;
                  } else if ([4, 6, 9, 11].indexOf(month) !== -1) {
                    dayCount = 30;
                  } else if (month === 2) {
                    dayCount = 29;
                  }
                  var days = [];
                  for (var day = 1; day <= dayCount; day++) {
                    days.push(day.toString());
                  }
                  this.days = days;
                }
              },
              computed: {
                computedRequireYear() {
                  return this.showYear && this.requireYear;
                },
                internalDateKey() {
                  var _this$modelValue$year, _this$modelValue, _this$modelValue$year2, _this$modelValue4, _this$modelValue$mont2, _this$modelValue5, _this$modelValue$day2, _this$modelValue6;
                  if (((_this$modelValue$year = !((_this$modelValue = this.modelValue) !== null && _this$modelValue !== void 0 && _this$modelValue.year)) !== null && _this$modelValue$year !== void 0 ? _this$modelValue$year : 0) && !this.computedRequireYear) {
                    var _this$modelValue$mont, _this$modelValue2, _this$modelValue$day, _this$modelValue3;
                    var _dateKey = DateKey.toNoYearDateKey((_this$modelValue$mont = (_this$modelValue2 = this.modelValue) === null || _this$modelValue2 === void 0 ? void 0 : _this$modelValue2.month) !== null && _this$modelValue$mont !== void 0 ? _this$modelValue$mont : 0, (_this$modelValue$day = (_this$modelValue3 = this.modelValue) === null || _this$modelValue3 === void 0 ? void 0 : _this$modelValue3.day) !== null && _this$modelValue$day !== void 0 ? _this$modelValue$day : 0);
                    return _dateKey;
                  }
                  var dateKey = DateKey.toDateKey((_this$modelValue$year2 = (_this$modelValue4 = this.modelValue) === null || _this$modelValue4 === void 0 ? void 0 : _this$modelValue4.year) !== null && _this$modelValue$year2 !== void 0 ? _this$modelValue$year2 : 0, (_this$modelValue$mont2 = (_this$modelValue5 = this.modelValue) === null || _this$modelValue5 === void 0 ? void 0 : _this$modelValue5.month) !== null && _this$modelValue$mont2 !== void 0 ? _this$modelValue$mont2 : 0, (_this$modelValue$day2 = (_this$modelValue6 = this.modelValue) === null || _this$modelValue6 === void 0 ? void 0 : _this$modelValue6.day) !== null && _this$modelValue$day2 !== void 0 ? _this$modelValue$day2 : 0);
                  return dateKey;
                },
                computedRules() {
                  var rules = normalizeRules(this.rules);
                  if (rules.indexOf("required") !== -1 && rules.indexOf("datekey") === -1) {
                    rules.push("datekey");
                  }
                  return rules;
                },
                years() {
                  var years = [];
                  var year = RockDateTime.now().year;
                  if (this.futureYearCount > 0 && this.allowFutureDates) {
                    year += this.futureYearCount;
                  }
                  while (year >= 1900) {
                    years.push(year.toString());
                    year--;
                  }
                  return years;
                }
              },
              watch: {
                modelValue: {
                  immediate: true,
                  handler() {
                    var _this$modelValue$day$, _this$modelValue7, _this$modelValue$mont3, _this$modelValue8, _this$modelValue$year3, _this$modelValue9;
                    this.internalDay = (_this$modelValue$day$ = (_this$modelValue7 = this.modelValue) === null || _this$modelValue7 === void 0 ? void 0 : _this$modelValue7.day.toString()) !== null && _this$modelValue$day$ !== void 0 ? _this$modelValue$day$ : "0";
                    this.internalMonth = (_this$modelValue$mont3 = (_this$modelValue8 = this.modelValue) === null || _this$modelValue8 === void 0 ? void 0 : _this$modelValue8.month.toString()) !== null && _this$modelValue$mont3 !== void 0 ? _this$modelValue$mont3 : "0";
                    this.internalYear = (_this$modelValue$year3 = (_this$modelValue9 = this.modelValue) === null || _this$modelValue9 === void 0 ? void 0 : _this$modelValue9.year.toString()) !== null && _this$modelValue$year3 !== void 0 ? _this$modelValue$year3 : "0";
                    this.updateDays();
                  }
                },
                showYear: {
                  immediate: true,
                  handler() {
                    this.updateDays();
                  }
                },
                internalDay() {
                  this.$emit("update:modelValue", this.getValue());
                },
                internalMonth() {
                  var day = toNumberOrNull(this.internalDay);
                  this.updateDays();
                  if (day != null && day >= this.days.length + 1) {
                    this.internalDay = this.days.length.toString();
                  } else {
                    this.$emit("update:modelValue", this.getValue());
                  }
                },
                internalYear() {
                  var day = toNumberOrNull(this.internalDay);
                  this.updateDays();
                  if (day != null && day >= this.days.length + 1) {
                    this.internalDay = this.days.length.toString();
                  } else {
                    this.$emit("update:modelValue", this.getValue());
                  }
                }
              },
              template: "\n<RockFormField\n    :modelValue=\"internalDateKey\"\n    formGroupClasses=\"birthday-picker\"\n    name=\"birthday\"\n    :rules=\"computedRules\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <div class=\"form-control-group\">\n                <select :id=\"uniqueId + '-month'\" class=\"form-control input-width-sm\" :disabled=\"disabled\" v-model=\"internalMonth\">\n                    <option value=\"0\"></option>\n                    <option value=\"1\">Jan</option>\n                    <option value=\"2\">Feb</option>\n                    <option value=\"3\">Mar</option>\n                    <option value=\"4\">Apr</option>\n                    <option value=\"5\">May</option>\n                    <option value=\"6\">Jun</option>\n                    <option value=\"7\">Jul</option>\n                    <option value=\"8\">Aug</option>\n                    <option value=\"9\">Sep</option>\n                    <option value=\"10\">Oct</option>\n                    <option value=\"11\">Nov</option>\n                    <option value=\"12\">Dec</option>\n                </select>\n                <span v-if=\"!hideDay\" class=\"separator\">/</span>\n                <select v-if=\"!hideDay\" :id=\"uniqueId + '-day'\" class=\"form-control input-width-sm\" :disabled=\"disabled\" v-model=\"internalDay\">\n                    <option value=\"0\"></option>\n                    <option v-for=\"day in days\" :key=\"day\" :value=\"day\">{{day}}</option>\n                </select>\n                <span v-if=\"showYear\" class=\"separator\">/</span>\n                <select v-if=\"showYear\" :id=\"uniqueId + '-year'\" class=\"form-control input-width-sm\" :disabled=\"disabled\" v-model=\"internalYear\">\n                    <option value=\"0\"></option>\n                    <option v-for=\"year in years\" :value=\"year\">{{year}}</option>\n                </select>\n            </div>\n        </div>\n    </template>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=datePartsPicker.js.map
