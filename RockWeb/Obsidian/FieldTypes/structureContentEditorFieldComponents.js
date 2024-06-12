System.register(['vue', './utils', '@Obsidian/Controls/structuredContentEditor.obs'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, getFieldEditorProps, StructuredContentEditor;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            StructuredContentEditor = module["default"];
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "StructuredContentEditorField.Edit",
              components: {
                StructuredContentEditor
              },
              props: getFieldEditorProps(),
              setup(props, _ref) {
                var _ref2;
                var emit = _ref.emit;
                var internalValue = (_ref2 = ref(props.modelValue)) !== null && _ref2 !== void 0 ? _ref2 : "{}";
                watch(() => props.modelValue, () => {
                  var _props$modelValue;
                  return internalValue.value = (_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : "{}";
                });
                watch(internalValue, () => emit("update:modelValue", internalValue.value));
                return {
                  internalValue
                };
              },
              template: "\n<StructuredContentEditor v-model=\"internalValue\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "StructuredContentEditorField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=structureContentEditorFieldComponents.js.map
