System.register(['vue', './utils', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/numberRangeBox'], (function (exports) {
    'use strict';
    var defineComponent, getFieldEditorProps, toNumberOrNull, NumberRangeBox;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            toNumberOrNull = module.toNumberOrNull;
        }, function (module) {
            NumberRangeBox = module["default"];
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "DecimalRangeField.Edit",
              components: {
                NumberRangeBox
              },
              props: getFieldEditorProps(),
              data() {
                return {
                  internalValue: {}
                };
              },
              watch: {
                internalValue() {
                  var _this$internalValue$l, _this$internalValue$u;
                  var value = "".concat((_this$internalValue$l = this.internalValue.lower) !== null && _this$internalValue$l !== void 0 ? _this$internalValue$l : "", ",").concat((_this$internalValue$u = this.internalValue.upper) !== null && _this$internalValue$u !== void 0 ? _this$internalValue$u : "");
                  this.$emit("update:modelValue", value !== "," ? value : "");
                },
                modelValue: {
                  immediate: true,
                  handler() {
                    var _this$modelValue;
                    var values = ((_this$modelValue = this.modelValue) !== null && _this$modelValue !== void 0 ? _this$modelValue : "").split(",");
                    var lower = toNumberOrNull(values[0]);
                    var upper = values.length >= 2 ? toNumberOrNull(values[1]) : null;
                    if (lower !== this.internalValue.lower || upper !== this.internalValue.upper) {
                      this.internalValue = {
                        lower: lower,
                        upper: upper
                      };
                    }
                  }
                }
              },
              template: "\n<NumberRangeBox v-model=\"internalValue\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "DecimalRangeField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=decimalRangeFieldComponents.js.map
