System.register(['vue', './utils', '@Obsidian/Controls/groupPicker.obs'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, getFieldEditorProps, GroupPicker;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            GroupPicker = module["default"];
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "GroupField.Edit",
              components: {
                GroupPicker
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
              template: "\n<GroupPicker v-model=\"internalValue\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "GroupField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=groupFieldComponents.js.map
