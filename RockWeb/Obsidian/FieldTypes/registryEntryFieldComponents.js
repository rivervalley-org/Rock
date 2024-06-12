System.register(['vue', './utils', '@Obsidian/Controls/registryEntry.obs', '@Obsidian/Utility/component'], (function (exports) {
    'use strict';
    var defineComponent, getFieldEditorProps, RegistryEntry, useVModelPassthrough;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            RegistryEntry = module["default"];
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "RegistryEntryField.Edit",
              components: {
                RegistryEntry
              },
              props: getFieldEditorProps(),
              emits: ["update:modelValue"],
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = useVModelPassthrough(props, "modelValue", emit);
                return {
                  internalValue
                };
              },
              template: "\n<RegistryEntry v-model=\"internalValue\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "RegistryEntryField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=registryEntryFieldComponents.js.map
