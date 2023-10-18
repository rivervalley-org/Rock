System.register(['vue', './utils', '@Obsidian/Controls/dayOfWeekPicker.obs', '@Obsidian/Utility/component'], (function (exports) {
    'use strict';
    var defineComponent, getFieldEditorProps, DayOfWeekPicker, useVModelPassthrough;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            DayOfWeekPicker = module["default"];
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "DayOfWeekField.Edit",
              components: {
                DayOfWeekPicker
              },
              props: getFieldEditorProps(),
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = useVModelPassthrough(props, "modelValue", emit);
                return {
                  internalValue
                };
              },
              template: "\n<DayOfWeekPicker v-model=\"internalValue\" />\n"
            }));
            var FilterComponent = exports('FilterComponent', defineComponent({
              name: "DayOfWeekField.Filter",
              components: {
                DayOfWeekPicker
              },
              props: getFieldEditorProps(),
              setup(props, _ref2) {
                var emit = _ref2.emit;
                var internalValue = useVModelPassthrough(props, "modelValue", emit);
                return {
                  internalValue
                };
              },
              template: "\n<DayOfWeekPicker v-model=\"internalValue\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "DayOfWeekField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=dayOfWeekFieldComponents.js.map
