System.register(['@Obsidian/Utility/block', '@Obsidian/Utility/component', 'vue', '@Obsidian/Utility/treeItemProviders', './treeItemPicker.obs.js', './treeList.js', 'tslib', '@Obsidian/Utility/promiseUtils', './contentDropDownPicker.obs.js', './rockButton.js', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Controls/fullscreen'], (function (exports) {
    'use strict';
    var useSecurityGrantToken, updateRefValue, defineComponent, ref, watch, ReportTreeItemProvider, exportHelper;
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
            ReportTreeItemProvider = module.ReportTreeItemProvider;
        }, function (module) {
            exportHelper = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            var reportPicker = exports('default', defineComponent({
                name: "ReportPicker",
                components: {
                    TreeItemPicker: exportHelper
                },
                props: {
                    modelValue: {
                        type: Object,
                        required: false
                    },
                    categoryGuids: {
                        type: Array,
                        default: []
                    },
                    entityTypeGuid: {
                        type: String,
                        default: null
                    }
                },
                emits: {
                    "update:modelValue": (_value) => true
                },
                setup(props, { emit }) {
                    var _a;
                    const internalValue = ref((_a = props.modelValue) !== null && _a !== void 0 ? _a : null);
                    const securityGrantToken = useSecurityGrantToken();
                    const itemProvider = ref();
                    function refreshItemProvider() {
                        const provider = new ReportTreeItemProvider();
                        provider.includeCategoryGuids = props.categoryGuids;
                        provider.entityTypeGuid = props.entityTypeGuid;
                        provider.securityGrantToken = securityGrantToken.value;
                        itemProvider.value = provider;
                    }
                    refreshItemProvider();
                    watch(() => [props.categoryGuids, props.entityTypeGuid], refreshItemProvider);
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
                        itemProvider
                    };
                },
                template: `
<TreeItemPicker v-model="internalValue"
    formGroupClasses="category-picker"
    iconCssClass="fa fa-list-alt"
    :provider="itemProvider"
    :multiple="multiple"
    disableFolderSelection
/>
`
            }));

        })
    };
}));
