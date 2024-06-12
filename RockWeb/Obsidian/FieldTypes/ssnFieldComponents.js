System.register(['vue', './utils', '@Obsidian/Controls/socialSecurityNumberBox.obs'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, getFieldEditorProps, SocialSecurityNumberBox;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            SocialSecurityNumberBox = module["default"];
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "SSNField.Edit",
              components: {
                SocialSecurityNumberBox
              },
              props: getFieldEditorProps(),
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = ref(props.modelValue);
                watch(() => props.modelValue, () => {
                  var _props$modelValue;
                  return internalValue.value = (_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : "";
                });
                watch(internalValue, () => emit("update:modelValue", internalValue.value));
                return {
                  internalValue
                };
              },
              template: "\n<SocialSecurityNumberBox v-model=\"internalValue\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "SSNField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=ssnFieldComponents.js.map
