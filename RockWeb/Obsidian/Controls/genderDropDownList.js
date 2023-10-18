System.register(['vue', '@Obsidian/ValidationRules', './dropDownList', '@Obsidian/Enums/Crm/gender'], (function (exports) {
    'use strict';
    var defineComponent, computed, rulesPropType, normalizeRules, DropDownList, Gender;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }, function (module) {
            rulesPropType = module.rulesPropType;
            normalizeRules = module.normalizeRules;
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            Gender = module.Gender;
        }],
        execute: (function () {

            var genderDropDownList = exports('default', defineComponent({
              name: "GenderDropDownList",
              components: {
                DropDownList
              },
              props: {
                rules: rulesPropType
              },
              setup(props) {
                var options = [{
                  text: " ",
                  value: Gender.Unknown.toString()
                }, {
                  text: "Male",
                  value: Gender.Male.toString()
                }, {
                  text: "Female",
                  value: Gender.Female.toString()
                }];
                var computedRules = computed(() => {
                  var rules = normalizeRules(props.rules);
                  var notEqualRule = "notequal:".concat(Gender.Unknown);
                  if (rules.includes("required") && !rules.includes(notEqualRule)) {
                    rules.push(notEqualRule);
                  }
                  return rules;
                });
                return {
                  computedRules,
                  options
                };
              },
              template: "\n<DropDownList label=\"Gender\" :items=\"options\" :showBlankItem=\"false\" :rules=\"computedRules\" />\n"
            }));

        })
    };
}));
//# sourceMappingURL=genderDropDownList.js.map
