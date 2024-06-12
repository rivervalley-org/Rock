System.register(['vue', './utils', '@Obsidian/Controls/timePicker.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/stringUtils'], (function (exports) {
    'use strict';
    var defineComponent, getFieldEditorProps, TimePicker, toNumber, padLeft;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            TimePicker = module["default"];
        }, function (module) {
            toNumber = module.toNumber;
        }, function (module) {
            padLeft = module.padLeft;
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "TimeField.Edit",
              components: {
                TimePicker
              },
              props: getFieldEditorProps(),
              data() {
                return {
                  internalTimeValue: {},
                  internalValue: ""
                };
              },
              computed: {
                displayValue() {
                  if (this.internalTimeValue.hour === undefined || this.internalTimeValue.minute === undefined) {
                    return "";
                  }
                  var hour = this.internalTimeValue.hour;
                  var minute = this.internalTimeValue.minute;
                  var meridiem = hour >= 12 ? "PM" : "AM";
                  if (hour > 12) {
                    hour -= 12;
                  }
                  return "".concat(hour, ":").concat(padLeft(minute.toString(), 2, "0"), " ").concat(meridiem);
                }
              },
              watch: {
                internalValue() {
                  this.$emit("update:modelValue", this.internalValue);
                },
                internalTimeValue() {
                  if (this.internalTimeValue.hour === undefined || this.internalTimeValue.minute === undefined) {
                    this.internalValue = "";
                  } else {
                    this.internalValue = "".concat(this.internalTimeValue.hour, ":").concat(padLeft(this.internalTimeValue.minute.toString(), 2, "0"), ":00");
                  }
                },
                modelValue: {
                  immediate: true,
                  handler() {
                    var _this$modelValue;
                    var values = /^(\d+):(\d+)/.exec((_this$modelValue = this.modelValue) !== null && _this$modelValue !== void 0 ? _this$modelValue : "");
                    if (values !== null) {
                      this.internalTimeValue = {
                        hour: toNumber(values[1]),
                        minute: toNumber(values[2])
                      };
                    } else {
                      this.internalTimeValue = {};
                    }
                  }
                }
              },
              template: "\n<TimePicker v-model=\"internalTimeValue\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "TimeField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=timeFieldComponents.js.map
