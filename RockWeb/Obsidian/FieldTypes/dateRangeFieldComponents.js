System.register(['vue', './utils', '@Obsidian/Controls/dateRangePicker.obs'], (function (exports) {
    'use strict';
    var defineComponent, getFieldEditorProps, DateRangePicker;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            DateRangePicker = module["default"];
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "DateRangeField.Edit",
              components: {
                DateRangePicker
              },
              props: getFieldEditorProps(),
              data() {
                return {
                  internalValue: undefined
                };
              },
              setup() {
                return {};
              },
              watch: {
                internalValue() {
                  var _this$internalValue, _this$internalValue2;
                  if (!((_this$internalValue = this.internalValue) !== null && _this$internalValue !== void 0 && _this$internalValue.lowerValue) && !((_this$internalValue2 = this.internalValue) !== null && _this$internalValue2 !== void 0 && _this$internalValue2.upperValue)) {
                    this.$emit("update:modelValue", "");
                  } else {
                    var _this$internalValue$l, _this$internalValue$u;
                    this.$emit("update:modelValue", "".concat((_this$internalValue$l = this.internalValue.lowerValue) !== null && _this$internalValue$l !== void 0 ? _this$internalValue$l : "", ",").concat((_this$internalValue$u = this.internalValue.upperValue) !== null && _this$internalValue$u !== void 0 ? _this$internalValue$u : ""));
                  }
                },
                modelValue: {
                  immediate: true,
                  handler() {
                    var _this$modelValue;
                    var components = ((_this$modelValue = this.modelValue) !== null && _this$modelValue !== void 0 ? _this$modelValue : "").split(",");
                    if (components.length === 2) {
                      this.internalValue = {
                        lowerValue: components[0],
                        upperValue: components[1]
                      };
                    } else {
                      this.internalValue = {};
                    }
                  }
                }
              },
              template: "\n<DateRangePicker v-model=\"internalValue\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "DateRangeField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=dateRangeFieldComponents.js.map
