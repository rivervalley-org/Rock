System.register(['vue', '@Obsidian/ValidationRules', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, rulesPropType, normalizeRules, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            rulesPropType = module.rulesPropType;
            normalizeRules = module.normalizeRules;
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            var emailBox = exports('default', defineComponent({
              name: "EmailBox",
              components: {
                RockFormField
              },
              props: {
                modelValue: {
                  type: String,
                  required: true
                },
                allowLava: {
                  type: Boolean,
                  default: false
                },
                allowMultiple: {
                  type: Boolean,
                  default: false
                },
                rules: rulesPropType
              },
              emits: ["update:modelValue"],
              data: function data() {
                return {
                  internalValue: this.modelValue
                };
              },
              computed: {
                computedRules() {
                  var rules = normalizeRules(this.rules);
                  if (rules.indexOf("email") === -1 && !this.allowLava && !this.allowMultiple) {
                    rules.push("email");
                  }
                  return rules;
                },
                computedType() {
                  return this.allowLava || this.allowMultiple ? "text" : "email";
                }
              },
              watch: {
                internalValue() {
                  this.$emit("update:modelValue", this.internalValue);
                },
                modelValue() {
                  this.internalValue = this.modelValue;
                }
              },
              template: "\n<RockFormField\n    v-model=\"internalValue\"\n    formGroupClasses=\"rock-text-box\"\n    name=\"textbox\"\n    :rules=\"computedRules\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                    <i class=\"fa fa-envelope\"></i>\n                </span>\n                <input v-model=\"internalValue\" :id=\"uniqueId\" class=\"form-control\" v-bind=\"field\" :type=\"computedType\" />\n            </div>\n        </div>\n    </template>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=emailBox.js.map
