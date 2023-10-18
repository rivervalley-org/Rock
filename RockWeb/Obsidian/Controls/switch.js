System.register(['vue', '@Obsidian/Utility/component', './inlineSwitch', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, useVModelPassthrough, InlineSwitch, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            InlineSwitch = module["default"];
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            var _switch = exports('default', defineComponent({
              name: "Switch",
              components: {
                InlineSwitch,
                RockFormField
              },
              props: {
                modelValue: {
                  type: Boolean,
                  required: true
                },
                text: {
                  type: String,
                  default: ""
                }
              },
              emits: ["update:modelValue"],
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = useVModelPassthrough(props, "modelValue", emit);
                return {
                  internalValue
                };
              },
              template: "\n<RockFormField\n    :modelValue=\"internalValue\"\n    formGroupClasses=\"rock-switch\"\n    name=\"switch\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <InlineSwitch v-model=\"internalValue\" :label=\"text\" :uniqueId=\"uniqueId\" v-bind=\"field\" />\n        </div>\n    </template>\n</RockFormField>\n"
            }));

        })
    };
}));
//# sourceMappingURL=switch.js.map
