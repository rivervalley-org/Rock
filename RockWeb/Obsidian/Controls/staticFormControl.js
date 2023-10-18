System.register(['vue', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            var staticFormControl = exports('default', defineComponent({
              name: "StaticFormControl",
              components: {
                RockFormField
              },
              props: {
                modelValue: {
                  required: true
                }
              },
              template: "\n<RockFormField\n    :modelValue=\"modelValue\"\n    formGroupClasses=\"static-control\"\n    name=\"static-form-control\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <div class=\"form-control-static\">\n                {{ modelValue }}\n            </div>\n        </div>\n    </template>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=staticFormControl.js.map
