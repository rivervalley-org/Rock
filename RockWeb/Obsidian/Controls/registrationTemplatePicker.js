System.register(['@Obsidian/Utility/block', '@Obsidian/Utility/component', 'vue', '@Obsidian/Utility/treeItemProviders', './treeItemPicker.obs'], (function (exports) {
    'use strict';
    var useSecurityGrantToken, updateRefValue, defineComponent, ref, watch, RegistrationTemplateTreeItemProvider, TreeItemPicker;
    return {
        setters: [function (module) {
            useSecurityGrantToken = module.useSecurityGrantToken;
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            RegistrationTemplateTreeItemProvider = module.RegistrationTemplateTreeItemProvider;
        }, function (module) {
            TreeItemPicker = module["default"];
        }],
        execute: (function () {

            var registrationTemplatePicker = exports('default', defineComponent({
              name: "RegistrationTemplatePicker",
              components: {
                TreeItemPicker
              },
              props: {
                modelValue: {
                  type: Object,
                  required: false
                }
              },
              emits: {
                "update:modelValue": _value => true
              },
              setup(props, _ref) {
                var _props$modelValue;
                var emit = _ref.emit;
                var internalValue = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : null);
                var securityGrantToken = useSecurityGrantToken();
                var itemProvider = new RegistrationTemplateTreeItemProvider();
                itemProvider.securityGrantToken = securityGrantToken.value;
                watch(internalValue, () => {
                  emit("update:modelValue", internalValue.value);
                });
                watch(() => props.modelValue, () => {
                  var _props$modelValue2;
                  updateRefValue(internalValue, (_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : null);
                });
                return {
                  internalValue,
                  itemProvider
                };
              },
              template: "\n<TreeItemPicker v-model=\"internalValue\"\n    formGroupClasses=\"category-picker\"\n    iconCssClass=\"fa fa-calendar\"\n    :provider=\"itemProvider\"\n    :multiple=\"multiple\"\n    disableFolderSelection\n/>\n"
            }));

        })
    };
}));
//# sourceMappingURL=registrationTemplatePicker.js.map
