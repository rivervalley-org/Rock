System.register(['@Obsidian/Utility/block', '@Obsidian/Utility/component', 'vue', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Enums/Controls/mergeTemplateOwnership', './treeItemPicker.obs.js', './treeList.js', 'tslib', '@Obsidian/Utility/promiseUtils', './contentDropDownPicker.obs.js', './rockButton.js', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Controls/fullscreen'], (function (exports) {
    'use strict';
    var useSecurityGrantToken, updateRefValue, defineComponent, ref, watch, MergeTemplateTreeItemProvider, MergeTemplateOwnership, exportHelper;
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
            exportHelper = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            var mergeTemplatePicker = exports('default', defineComponent({
                name: "MergeTemplatePicker",
                components: {
                    TreeItemPicker: exportHelper
                },
                props: {
                    modelValue: {
                        type: Object,
                        required: false
                    },
                    mergeTemplateOwnership: {
                        type: Number,
                        default: MergeTemplateOwnership.Global
                    },
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
                        const provider = new MergeTemplateTreeItemProvider();
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
    iconCssClass="fa fa-files-o"
    :provider="itemProvider"
    :multiple="multiple"
    disableFolderSelection
/>
`
            }));

        })
    };
}));
