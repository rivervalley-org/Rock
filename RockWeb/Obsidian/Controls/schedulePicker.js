System.register(['@Obsidian/Utility/block', '@Obsidian/Utility/component', 'vue', '@Obsidian/Utility/treeItemProviders', './treeItemPicker.obs'], (function (exports) {
    'use strict';
    var useSecurityGrantToken, updateRefValue, defineComponent, ref, watch, ScheduleTreeItemProvider, TreeItemPicker;
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
            ScheduleTreeItemProvider = module.ScheduleTreeItemProvider;
        }, function (module) {
            TreeItemPicker = module["default"];
        }],
        execute: (function () {

            var schedulePicker = exports('default', defineComponent({
              name: "SchedulePicker",
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
                var includeInactive = ref(false);
                var securityGrantToken = useSecurityGrantToken();
                var itemProvider = ref();
                function refreshItemProvider() {
                  var provider = new ScheduleTreeItemProvider();
                  provider.includeInactive = includeInactive.value;
                  provider.securityGrantToken = securityGrantToken.value;
                  itemProvider.value = provider;
                }
                refreshItemProvider();
                watch(includeInactive, refreshItemProvider);
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
                  itemProvider,
                  includeInactive
                };
              },
              template: "\n<TreeItemPicker v-model=\"internalValue\"\n    formGroupClasses=\"category-picker\"\n    iconCssClass=\"fa fa-calendar\"\n    :provider=\"itemProvider\"\n    :multiple=\"multiple\"\n    disableFolderSelection\n>\n\n    <template #customPickerActions>\n        <label class=\"rock-checkbox-icon\">\n            <i :class=\"['fa', includeInactive ? 'fa-check-square-o' : 'fa-square-o']\"></i> Show Inactive\n            <span style=\"display:none\"><input type=\"checkbox\" v-model=\"includeInactive\"></span>\n        </label>\n    </template>\n</TreeItemPicker>\n"
            }));

        })
    };
}));
//# sourceMappingURL=schedulePicker.js.map
