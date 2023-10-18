System.register(['vue', '@Obsidian/ValidationRules', '@Obsidian/Utility/numberUtils', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, rulesPropType, normalizeRules, asFormattedString, toNumberOrNull, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            rulesPropType = module.rulesPropType;
            normalizeRules = module.normalizeRules;
        }, function (module) {
            asFormattedString = module.asFormattedString;
            toNumberOrNull = module.toNumberOrNull;
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            var numberRangeBox = exports('default', defineComponent({
              name: "NumberRangeBox",
              components: {
                RockFormField
              },
              props: {
                modelValue: {
                  type: Object,
                  default: {
                    lower: null,
                    upper: null
                  }
                },
                decimalCount: {
                  type: Number,
                  default: null
                },
                inputClasses: {
                  type: String,
                  default: ""
                },
                rules: rulesPropType
              },
              emits: ["update:modelValue"],
              data: function data() {
                return {
                  internalValue: {
                    lower: "",
                    upper: ""
                  }
                };
              },
              methods: {
                onChange() {
                  var _this$internalDecimal, _this$internalDecimal2;
                  this.internalValue = {
                    lower: asFormattedString(this.modelValue.lower, (_this$internalDecimal = this.internalDecimalCount) !== null && _this$internalDecimal !== void 0 ? _this$internalDecimal : undefined, {
                      useGrouping: false
                    }),
                    upper: asFormattedString(this.modelValue.upper, (_this$internalDecimal2 = this.internalDecimalCount) !== null && _this$internalDecimal2 !== void 0 ? _this$internalDecimal2 : undefined, {
                      useGrouping: false
                    })
                  };
                }
              },
              computed: {
                computedValue() {
                  return {
                    lower: toNumberOrNull(this.internalValue.lower),
                    upper: toNumberOrNull(this.internalValue.upper)
                  };
                },
                internalDecimalCount() {
                  return this.decimalCount;
                },
                internalStep() {
                  return this.internalDecimalCount === null ? "any" : (1 / Math.pow(10, this.internalDecimalCount)).toString();
                },
                computedRules() {
                  var rules = normalizeRules(this.rules);
                  return rules;
                },
                validationValue() {
                  var _this$internalValue$l, _this$internalValue$u;
                  return "".concat((_this$internalValue$l = this.internalValue.lower) !== null && _this$internalValue$l !== void 0 ? _this$internalValue$l : "", ",").concat((_this$internalValue$u = this.internalValue.upper) !== null && _this$internalValue$u !== void 0 ? _this$internalValue$u : "");
                }
              },
              watch: {
                computedValue() {
                  this.$emit("update:modelValue", this.computedValue);
                },
                internalStep() {
                  return this.decimalCount === null ? "any" : (1 / Math.pow(10, this.decimalCount)).toString();
                },
                modelValue: {
                  immediate: true,
                  handler() {
                    if (this.modelValue.lower !== toNumberOrNull(this.internalValue.lower) || this.modelValue.upper !== toNumberOrNull(this.internalValue.upper)) {
                      this.internalValue = {
                        lower: this.modelValue.lower != null ? this.modelValue.lower.toString() : "",
                        upper: this.modelValue.upper != null ? this.modelValue.upper.toString() : ""
                      };
                    }
                  }
                }
              },
              template: "\n<RockFormField\n    v-model=\"validationValue\"\n    formGroupClasses=\"number-range-editor\"\n    name=\"number-range-box\"\n    :rules=\"computedRules\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <div class=\"form-control-group\">\n                <input\n                    :id=\"uniqueId + '_lower'\"\n                    @change=\"onChange\"\n                    type=\"number\"\n                    class=\"input-width-md form-control\"\n                    :class=\"inputClasses\"\n                    v-model=\"internalValue.lower\"\n                    :step=\"internalStep\" />\n                <span class=\"to\">to</span>\n                <input\n                    :id=\"uniqueId + '_upper'\"\n                    @change=\"onChange\"\n                    type=\"number\"\n                    class=\"input-width-md form-control\"\n                    :class=\"inputClasses\"\n                    v-model=\"internalValue.upper\"\n                    :step=\"internalStep\" />\n            </div>\n        </div>\n    </template>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=numberRangeBox.js.map
