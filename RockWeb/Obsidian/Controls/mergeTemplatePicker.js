System.register(['@Obsidian/Utility/block', '@Obsidian/Utility/component', 'vue', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Enums/Controls/mergeTemplateOwnership', './treeItemPicker.obs'], (function (exports) {
    'use strict';
    var useSecurityGrantToken, updateRefValue, defineComponent, ref, watch, MergeTemplateTreeItemProvider, MergeTemplateOwnership, TreeItemPicker;
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
            MergeTemplateTreeItemProvider = module.MergeTemplateTreeItemProvider;
        }, function (module) {
            MergeTemplateOwnership = module.MergeTemplateOwnership;
        }, function (module) {
            TreeItemPicker = module["default"];
        }],
        execute: (function () {

            var mergeTemplatePicker = exports('default', defineComponent({
              name: "MergeTemplatePicker",
              components: {
                TreeItemPicker
              },
              props: {
                modelValue: {
                  type: Object,
                  required: false
                },
                mergeTemplateOwnership: {
                  type: Number,
                  default: MergeTemplateOwnership.Global
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
                var itemProvider = ref();
                function refreshItemProvider() {
                  var provider = new MergeTemplateTreeItemProvider();
                  provider.mergeTemplateOwnership = props.mergeTemplateOwnership;
                  provider.securityGrantToken = securityGrantToken.value;
                  itemProvider.value = provider;
                }
                refreshItemProvider();
                watch(() => [props.mergeTemplateOwnership], refreshItemProvider);
                watch(securityGrantToken, () => {
                  if (itemProvider.value) {
                    itemProvider.value.securityGrantToken = securityGrantToken.value;
                  }
                });
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
              template: "\n<TreeItemPicker v-model=\"internalValue\"\n    formGroupClasses=\"category-picker\"\n    iconCssClass=\"fa fa-files-o\"\n    :provider=\"itemProvider\"\n    :multiple=\"multiple\"\n    disableFolderSelection\n/>\n"
            }));

        })
    };
}));
//# sourceMappingURL=mergeTemplatePicker.js.map
