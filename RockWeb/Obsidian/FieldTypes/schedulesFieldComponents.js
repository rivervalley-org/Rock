System.register(['vue', './utils', '@Obsidian/Controls/schedulePicker.obs'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, getFieldEditorProps, SchedulePicker;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            SchedulePicker = module["default"];
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "SchedulesField.Edit",
              components: {
                SchedulePicker
              },
              props: getFieldEditorProps(),
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = ref({});
                watch(() => props.modelValue, () => {
                  internalValue.value = JSON.parse(props.modelValue || "{}");
                }, {
                  immediate: true
                });
                watch(() => internalValue.value, () => {
                  emit("update:modelValue", JSON.stringify(internalValue.value));
                });
                return {
                  internalValue
                };
              },
              template: "\n<SchedulePicker v-model=\"internalValue\" multiple=\"true\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "SchedulesField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=schedulesFieldComponents.js.map
