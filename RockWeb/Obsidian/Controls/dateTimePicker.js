System.register(['vue', '@Obsidian/Utility/numberUtils', './rockFormField', './textBox', './basicTimePicker', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/rockDateTime'], (function (exports) {
    'use strict';
    var defineComponent, toNumber, RockFormField, TextBox, BasicTimePicker, padLeft, RockDateTime;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            toNumber = module.toNumber;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            BasicTimePicker = module["default"];
        }, function (module) {
            padLeft = module.padLeft;
        }, function (module) {
            RockDateTime = module.RockDateTime;
        }],
        execute: (function () {

            var dateTimePicker = exports('default', defineComponent({
              name: "DateTimePicker",
              components: {
                RockFormField,
                BasicTimePicker,
                TextBox
              },
              props: {
                modelValue: {
                  type: String,
                  default: null
                },
                displayCurrentOption: {
                  type: Boolean,
                  default: false
                },
                isCurrentDateOffset: {
                  type: Boolean,
                  default: false
                }
              },
              emits: ["update:modelValue"],
              data: function data() {
                return {
                  internalDateValue: null,
                  internalTimeValue: {},
                  isCurrent: false,
                  currentDiff: "0",
                  validationValue: "",
                  skipEmit: false
                };
              },
              computed: {
                asRockDateTimeOrNull() {
                  if (this.internalDateValue) {
                    var _this$internalDateVal;
                    var dateMatch = /^(\d+)\/(\d+)\/(\d+)/.exec((_this$internalDateVal = this.internalDateValue) !== null && _this$internalDateVal !== void 0 ? _this$internalDateVal : "");
                    if (dateMatch === null) {
                      return null;
                    }
                    var date = RockDateTime.fromParts(toNumber(dateMatch[3]), toNumber(dateMatch[1]), toNumber(dateMatch[2]));
                    if (date === null) {
                      return null;
                    }
                    if (this.internalTimeValue.hour !== undefined && this.internalTimeValue.minute !== undefined) {
                      var _date;
                      date = (_date = date) === null || _date === void 0 ? void 0 : _date.addHours(this.internalTimeValue.hour).addMinutes(this.internalTimeValue.minute);
                    }
                    var year = date.year.toString();
                    var month = padLeft(date.month.toString(), 2, "0");
                    var day = padLeft(date.day.toString(), 2, "0");
                    var hour = padLeft(date.hour.toString(), 2, "0");
                    var minute = padLeft(date.minute.toString(), 2, "0");
                    var second = padLeft(date.second.toString(), 2, "0");
                    var millisecond = padLeft(date.millisecond.toString(), 3, "0");
                    return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second, ".").concat(millisecond);
                  } else {
                    return null;
                  }
                },
                asCurrentDateValue() {
                  var plusMinus = "".concat(toNumber(this.currentDiff));
                  return "CURRENT:".concat(plusMinus);
                },
                valueToEmit() {
                  var _this$asRockDateTimeO;
                  if (this.isCurrent) {
                    return this.asCurrentDateValue;
                  }
                  return (_this$asRockDateTimeO = this.asRockDateTimeOrNull) !== null && _this$asRockDateTimeO !== void 0 ? _this$asRockDateTimeO : "";
                }
              },
              watch: {
                isCurrentDateOffset: {
                  immediate: true,
                  handler() {
                    if (!this.isCurrentDateOffset) {
                      this.currentDiff = "0";
                    }
                  }
                },
                valueToEmit() {
                  if (!this.skipEmit) {
                    this.$emit("update:modelValue", this.valueToEmit);
                  }
                },
                modelValue: {
                  immediate: true,
                  handler() {
                    if (!this.modelValue) {
                      this.internalDateValue = null;
                      this.internalTimeValue = {};
                      this.isCurrent = false;
                      this.currentDiff = "0";
                      return;
                    }
                    if (this.modelValue.indexOf("CURRENT") === 0) {
                      var parts = this.modelValue.split(":");
                      if (parts.length === 2) {
                        this.currentDiff = "".concat(toNumber(parts[1]));
                      }
                      this.isCurrent = true;
                      return;
                    }
                    var date = RockDateTime.parseISO(this.modelValue);
                    this.skipEmit = true;
                    if (date === null) {
                      this.internalDateValue = null;
                      this.internalTimeValue = {};
                    } else {
                      this.internalDateValue = "".concat(date.month, "/").concat(date.day, "/").concat(date.year);
                      this.internalTimeValue = {
                        hour: date.hour,
                        minute: date.minute
                      };
                    }
                    this.skipEmit = false;
                  }
                },
                displayCurrentOption() {
                  if (!this.displayCurrentOption && this.isCurrent) {
                    this.internalDateValue = null;
                    this.internalTimeValue = {};
                    this.isCurrent = false;
                    this.currentDiff = "0";
                  }
                }
              },
              mounted() {
                var input = this.$refs["input"];
                var inputId = input.id;
                window.Rock.controls.datePicker.initialize({
                  id: inputId,
                  startView: 0,
                  showOnFocus: true,
                  format: "mm/dd/yyyy",
                  todayHighlight: true,
                  forceParse: true,
                  onChangeScript: () => {
                    if (!this.isCurrent) {
                      this.internalDateValue = input.value;
                    }
                  }
                });
              },
              template: "\n<RockFormField formGroupClasses=\"date-picker\" #default=\"{uniqueId}\" name=\"datepicker\" v-model.lazy=\"internalDateValue\">\n    <div class=\"control-wrapper\">\n        <div class=\"form-control-group\">\n            <div class=\"form-row\">\n                <div class=\"input-group input-width-md js-date-picker date\">\n                    <input ref=\"input\" type=\"text\" :id=\"uniqueId\" class=\"form-control\" v-model.lazy=\"internalDateValue\" :disabled=\"isCurrent\" />\n                    <span class=\"input-group-addon\">\n                        <i class=\"fa fa-calendar\"></i>\n                    </span>\n                </div>\n                <BasicTimePicker v-model=\"internalTimeValue\" :disabled=\"isCurrent\" />\n                <div v-if=\"displayCurrentOption\" class=\"input-group\">\n                    <div class=\"checkbox\">\n                        <label title=\"\">\n                        <input type=\"checkbox\" v-model=\"isCurrent\" />\n                        <span class=\"label-text\">Current Time</span></label>\n                    </div>\n                </div>\n            </div>\n            <div v-if=\"isCurrent && isCurrentDateOffset\" class=\"form-row\">\n                <TextBox label=\"+- Minutes\" v-model=\"currentDiff\" inputClasses=\"input-width-md\" help=\"Enter the number of minutes after the current time to use as the date. Use a negative number to specify minutes before.\" />\n            </div>\n        </div>\n    </div>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=dateTimePicker.js.map
