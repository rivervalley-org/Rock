System.register(['vue', '@Obsidian/ValidationRules', './basicTimePicker', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, rulesPropType, normalizeRules, BasicTimePicker, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            rulesPropType = module.rulesPropType;
            normalizeRules = module.normalizeRules;
        }, function (module) {
            BasicTimePicker = module["default"];
            exports('TimePickerValue', module.BasicTimePickerValue);
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            var timePicker = exports('default', defineComponent({
              name: "TimePicker",
              components: {
                RockFormField,
                BasicTimePicker
              },
              props: {
                rules: rulesPropType,
                modelValue: {
                  type: Object,
                  default: {}
                }
              },
              data() {
                return {
                  internalValue: {}
                };
              },
              methods: {},
              computed: {
                computedRules() {
                  var rules = normalizeRules(this.rules);
                  return rules;
                }
              },
              watch: {
                modelValue: {
                  immediate: true,
                  handler() {
                    this.internalValue = this.modelValue;
                  }
                },
                internalValue() {
                  this.$emit("update:modelValue", this.internalValue);
                }
              },
              template: "\n<RockFormField\n    :modelValue=\"internalValue\"\n    formGroupClasses=\"timepicker-input\"\n    name=\"time-picker\"\n    :rules=\"computedRules\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <div class=\"timepicker-input\">\n                <BasicTimePicker v-model=\"internalValue\" />\n            </div>\n        </div>\n    </template>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=timePicker.js.map
