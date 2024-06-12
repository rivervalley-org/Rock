System.register(['vue', './utils', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/numberRangeBox.obs'], (function (exports) {
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
              name: "IntegerRangeField.Edit",
              components: {
                NumberRangeBox
              },
              props: getFieldEditorProps(),
              data() {
                return {
                  internalValue: undefined
                };
              },
              watch: {
                internalValue() {
                  var _this$internalValue$l, _this$internalValue, _this$internalValue$u, _this$internalValue2;
                  var value = "".concat((_this$internalValue$l = (_this$internalValue = this.internalValue) === null || _this$internalValue === void 0 ? void 0 : _this$internalValue.lower) !== null && _this$internalValue$l !== void 0 ? _this$internalValue$l : "", ",").concat((_this$internalValue$u = (_this$internalValue2 = this.internalValue) === null || _this$internalValue2 === void 0 ? void 0 : _this$internalValue2.upper) !== null && _this$internalValue$u !== void 0 ? _this$internalValue$u : "");
                  this.$emit("update:modelValue", value !== "," ? value : "");
                },
                modelValue: {
                  immediate: true,
                  handler() {
                    var _this$modelValue, _this$internalValue$l2, _this$internalValue3, _this$internalValue$u2, _this$internalValue4;
                    var values = ((_this$modelValue = this.modelValue) !== null && _this$modelValue !== void 0 ? _this$modelValue : "").split(",");
                    var lower = toNumberOrNull(values[0]);
                    var upper = values.length >= 2 ? toNumberOrNull(values[1]) : null;
                    if (lower === null && upper === null) {
                      this.internalValue = undefined;
                    } else if (lower !== ((_this$internalValue$l2 = (_this$internalValue3 = this.internalValue) === null || _this$internalValue3 === void 0 ? void 0 : _this$internalValue3.lower) !== null && _this$internalValue$l2 !== void 0 ? _this$internalValue$l2 : null) || upper !== ((_this$internalValue$u2 = (_this$internalValue4 = this.internalValue) === null || _this$internalValue4 === void 0 ? void 0 : _this$internalValue4.upper) !== null && _this$internalValue$u2 !== void 0 ? _this$internalValue$u2 : null)) {
                      this.internalValue = {
                        lower: lower,
                        upper: upper
                      };
                    }
                  }
                }
              },
              template: "\n<NumberRangeBox v-model=\"internalValue\" :decimal-count=\"0\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "IntegerRangeField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=integerRangeFieldComponents.js.map
