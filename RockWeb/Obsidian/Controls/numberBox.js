System.register(['vue', '@Obsidian/ValidationRules', '@Obsidian/Utility/numberUtils', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, rulesPropType, normalizeRules, asFormattedString, toNumberOrNull, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
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

            var numberBox = exports('default', defineComponent({
              name: "NumberBox",
              components: {
                RockFormField
              },
              props: {
                modelValue: {
                  type: Number,
                  default: null
                },
                placeholder: {
                  type: String,
                  default: ""
                },
                minimumValue: {
                  type: Number
                },
                maximumValue: {
                  type: Number
                },
                decimalCount: {
                  type: Number,
                  default: null
                },
                inputClasses: {
                  type: String,
                  default: ""
                },
                inputGroupClasses: {
                  type: String,
                  default: ""
                },
                rules: rulesPropType
              },
              emits: {
                "update:modelValue": _value => true
              },
              setup(props, ctx) {
                var _props$decimalCount;
                var internalValue = ref(asFormattedString(props.modelValue, (_props$decimalCount = props.decimalCount) !== null && _props$decimalCount !== void 0 ? _props$decimalCount : undefined, {
                  useGrouping: false
                }));
                var internalNumberValue = computed(() => {
                  return toNumberOrNull(internalValue.value);
                });
                var internalStep = computed(() => {
                  return props.decimalCount === null ? "any" : (1 / Math.pow(10, props.decimalCount)).toString();
                });
                var isInputGroup = computed(() => {
                  return !!ctx.slots.inputGroupPrepend || !!ctx.slots.inputGroupAppend;
                });
                var controlContainerClass = computed(() => {
                  return isInputGroup.value ? "input-group ".concat(props.inputGroupClasses) : "";
                });
                var computedRules = computed(() => {
                  var rules = normalizeRules(props.rules);
                  if (props.maximumValue !== null && props.maximumValue !== undefined) {
                    rules.push("lte:".concat(props.maximumValue));
                  }
                  if (props.minimumValue !== null && props.minimumValue !== undefined) {
                    rules.push("gte:".concat(props.minimumValue));
                  }
                  return rules;
                });
                watch(() => props.modelValue, () => {
                  if (props.modelValue !== internalNumberValue.value) {
                    var _props$decimalCount2;
                    internalValue.value = asFormattedString(props.modelValue, (_props$decimalCount2 = props.decimalCount) !== null && _props$decimalCount2 !== void 0 ? _props$decimalCount2 : undefined, {
                      useGrouping: false
                    });
                  }
                });
                watch(internalNumberValue, () => {
                  ctx.emit("update:modelValue", internalNumberValue.value);
                });
                return {
                  computedRules,
                  controlContainerClass,
                  internalStep,
                  internalValue
                };
              },
              template: "\n<RockFormField\n    :modelValue=\"internalValue\"\n    formGroupClasses=\"rock-number-box\"\n    name=\"numberbox\"\n    :rules=\"computedRules\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <slot name=\"prepend\" />\n            <div :class=\"controlContainerClass\">\n                <slot name=\"inputGroupPrepend\" :isInputGroupSupported=\"true\" />\n                <input\n                    v-model=\"internalValue\"\n                    :id=\"uniqueId\"\n                    type=\"number\"\n                    class=\"form-control\"\n                    :class=\"inputClasses\"\n                    v-bind=\"field\"\n                    :placeholder=\"placeholder\"\n                    :step=\"internalStep\"\n                    :min=\"minimumValue\"\n                    :max=\"maximumValue\" />\n                <slot name=\"inputGroupAppend\" :isInputGroupSupported=\"true\" />\n            </div>\n            <slot name=\"append\" />\n        </div>\n    </template>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=numberBox.js.map
