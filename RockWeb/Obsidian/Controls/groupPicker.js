System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Utility/component', './treeItemPicker.obs', './inlineCheckBox'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, useSecurityGrantToken, GroupTreeItemProvider, updateRefValue, TreeItemPicker, InlineCheckBox;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            useSecurityGrantToken = module.useSecurityGrantToken;
        }, function (module) {
            GroupTreeItemProvider = module.GroupTreeItemProvider;
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function (module) {
            TreeItemPicker = module["default"];
        }, function (module) {
            InlineCheckBox = module["default"];
        }],
        execute: (function () {

            var groupPicker = exports('default', defineComponent({
              name: "GroupPicker",
              components: {
                TreeItemPicker,
                InlineCheckBox
              },
              props: {
                modelValue: {
                  type: Object,
                  required: false
                },
                multiple: {
                  type: Boolean,
                  default: false
                },
                rootGroupGuid: {
                  type: Object,
                  default: null
                },
                includedGroupTypeGuids: {
                  type: Object,
                  default: []
                },
                limitToSchedulingEnabled: {
                  type: Object,
                  default: false
                },
                limitToRSVPEnabled: {
                  type: Object,
                  default: false
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
                var includeInactiveGroups = ref(false);
                var itemProvider = ref();
                function refreshItemProvider() {
                  var provider = new GroupTreeItemProvider();
                  provider.rootGroupGuid = props.rootGroupGuid;
                  provider.includedGroupTypeGuids = props.includedGroupTypeGuids;
                  provider.includeInactiveGroups = includeInactiveGroups.value;
                  provider.limitToSchedulingEnabled = props.limitToSchedulingEnabled;
                  provider.limitToRSVPEnabled = props.limitToRSVPEnabled;
                  provider.securityGrantToken = securityGrantToken.value;
                  itemProvider.value = provider;
                }
                refreshItemProvider();
                watch(() => [props.rootGroupGuid, includeInactiveGroups.value, props.includedGroupTypeGuids, props.limitToRSVPEnabled, props.limitToSchedulingEnabled], refreshItemProvider);
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
                  includeInactiveGroups,
                  itemProvider
                };
              },
              template: "\n<TreeItemPicker v-model=\"internalValue\"\n    formGroupClasses=\"group-item-picker\"\n    iconCssClass=\"fa fa-home\"\n    :provider=\"itemProvider\"\n    :multiple=\"multiple\">\n\n    <template #customPickerActions>\n        <label class=\"rock-checkbox-icon\">\n            <i :class=\"['fa', includeInactiveGroups ? 'fa-check-square-o' : 'fa-square-o']\"></i> Show Inactive\n            <span style=\"display:none\"><input type=\"checkbox\" v-model=\"includeInactiveGroups\"></span>\n        </label>\n    </template>\n</TreeItemPicker>\n"
            }));

        })
    };
}));
//# sourceMappingURL=groupPicker.js.map
