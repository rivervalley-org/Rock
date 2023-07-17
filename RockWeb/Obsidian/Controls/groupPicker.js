System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Utility/component', './treeItemPicker.js', './inlineCheckBox.js', './rockButton.js', 'tslib', '@Obsidian/Utility/promiseUtils', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', './treeList.js'], (function (exports) {
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
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
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
                    },
                },
                emits: {
                    "update:modelValue": (_value) => true
                },
                setup(props, { emit }) {
                    var _a;
                    const internalValue = ref((_a = props.modelValue) !== null && _a !== void 0 ? _a : null);
                    const securityGrantToken = useSecurityGrantToken();
                    const includeInactiveGroups = ref(false);
                    const itemProvider = ref();
                    function refreshItemProvider() {
                        const provider = new GroupTreeItemProvider();
                        provider.rootGroupGuid = props.rootGroupGuid;
                        provider.includedGroupTypeGuids = props.includedGroupTypeGuids;
                        provider.includeInactiveGroups = includeInactiveGroups.value;
                        provider.limitToSchedulingEnabled = props.limitToSchedulingEnabled;
                        provider.limitToRSVPEnabled = props.limitToRSVPEnabled;
                        provider.securityGrantToken = securityGrantToken.value;
                        itemProvider.value = provider;
                    }
                    refreshItemProvider();
                    watch(() => [
                        props.rootGroupGuid,
                        includeInactiveGroups.value,
                        props.includedGroupTypeGuids,
                        props.limitToRSVPEnabled,
                        props.limitToSchedulingEnabled
                    ], refreshItemProvider);
                    watch(securityGrantToken, () => {
                        if (itemProvider.value) {
                            itemProvider.value.securityGrantToken = securityGrantToken.value;
                        }
                    });
                    watch(internalValue, () => {
                        emit("update:modelValue", internalValue.value);
                    });
                    watch(() => props.modelValue, () => {
                        var _a;
                        updateRefValue(internalValue, (_a = props.modelValue) !== null && _a !== void 0 ? _a : null);
                    });
                    return {
                        internalValue,
                        includeInactiveGroups,
                        itemProvider
                    };
                },
                template: `
<TreeItemPicker v-model="internalValue"
    formGroupClasses="group-item-picker"
    iconCssClass="fa fa-home"
    :provider="itemProvider"
    :multiple="multiple">

    <template #customPickerActions>
        <label class="rock-checkbox-icon">
            <i :class="['fa', includeInactiveGroups ? 'fa-check-square-o' : 'fa-square-o']"></i> Show Inactive
            <span style="display:none"><input type="checkbox" v-model="includeInactiveGroups"></span>
        </label>
    </template>
</TreeItemPicker>
`
            }));

        })
    };
}));
