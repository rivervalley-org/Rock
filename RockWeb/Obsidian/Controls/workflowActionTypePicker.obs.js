System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/treeItemProviders', './treeItemPicker.obs.js', './treeList.js', 'tslib', '@Obsidian/Utility/promiseUtils', './contentDropDownPicker.obs.js', './rockButton.js', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Controls/fullscreen'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, openBlock, createBlock, useSecurityGrantToken, updateRefValue, WorkflowActionTypeTreeItemProvider, exportHelper$1;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
        }, function (module) {
            useSecurityGrantToken = module.useSecurityGrantToken;
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function (module) {
            WorkflowActionTypeTreeItemProvider = module.WorkflowActionTypeTreeItemProvider;
        }, function (module) {
            exportHelper$1 = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'workflowActionTypePicker',
                props: {
                    modelValue: {
                        type: Object,
                        required: false
                    },
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    var _a;
                    expose();
                    const props = __props;
                    const internalValue = ref((_a = props.modelValue) !== null && _a !== void 0 ? _a : null);
                    const includeInactive = ref(false);
                    const securityGrantToken = useSecurityGrantToken();
                    const itemProvider = ref();
                    function refreshItemProvider() {
                        const provider = new WorkflowActionTypeTreeItemProvider();
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
                        var _a;
                        updateRefValue(internalValue, (_a = props.modelValue) !== null && _a !== void 0 ? _a : null);
                    });
                    const __returned__ = { props, emit, internalValue, includeInactive, securityGrantToken, itemProvider, refreshItemProvider, TreeItemPicker: exportHelper$1 };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["TreeItemPicker"], {
                    modelValue: $setup.internalValue,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalValue) = $event)),
                    formGroupClasses: "workflow-action-type-picker",
                    iconCssClass: "fa fa-folder",
                    provider: $setup.itemProvider,
                    disableFolderSelection: ""
                }, null, 8, ["modelValue", "provider"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
