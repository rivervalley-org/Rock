System.register(['@Obsidian/ValidationRules', '@Obsidian/Utility/component', 'vue', './rockFormField'], (function (exports) {
    'use strict';
    var rulesPropType, normalizeRules, useVModelPassthrough, defineComponent, computed, RockFormField;
    return {
        setters: [function (module) {
            rulesPropType = module.rulesPropType;
            normalizeRules = module.normalizeRules;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            var urlLinkBox = exports('default', defineComponent({
              name: "UrlLinkBox",
              components: {
                RockFormField
              },
              props: {
                modelValue: {
                  type: String,
                  required: true
                },
                rules: rulesPropType,
                requiresTrailingSlash: {
                  type: Boolean,
                  default: false
                }
              },
              emits: ["update:modelValue"],
              setup(props, _ref) {
                var emit = _ref.emit;
                var value = useVModelPassthrough(props, "modelValue", emit);
                var computedRules = computed(() => {
                  var rules = normalizeRules(props.rules);
                  if (rules.indexOf("url") === -1) {
                    rules.push("url");
                  }
                  if (props.requiresTrailingSlash) {
                    rules.push({
                      name: "endswith",
                      params: ["/"]
                    });
                  }
                  return rules;
                });
                return {
                  computedRules,
                  value
                };
              },
              template: "\n<RockFormField\n    :modelValue=\"value\"\n    formGroupClasses=\"url-link-box\"\n    name=\"urlbox\"\n    :rules=\"computedRules\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                    <i class=\"fa fa-link\"></i>\n                </span>\n                <input v-model=\"value\" :id=\"uniqueId\" class=\"form-control\" v-bind=\"field\" type=\"url\" />\n            </div>\n        </div>\n    </template>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=urlLinkBox.js.map
