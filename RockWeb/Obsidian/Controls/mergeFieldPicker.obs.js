System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Utility/treeItemProviders', './treeItemPicker.obs.js', '@Obsidian/Utility/guid', '@Obsidian/Utility/block', './treeList.js', 'tslib', '@Obsidian/Utility/promiseUtils', './contentDropDownPicker.obs.js', './rockButton.js', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Controls/fullscreen'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, openBlock, createBlock, mergeProps, standardRockFormFieldProps, useStandardRockFormFieldProps, useVModelPassthroughWithPropUpdateCheck, MergeFieldTreeItemProvider, exportHelper$1, emptyGuid, useSecurityGrantToken;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
        }, function (module) {
            standardRockFormFieldProps = module.standardRockFormFieldProps;
            useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
            useVModelPassthroughWithPropUpdateCheck = module.useVModelPassthroughWithPropUpdateCheck;
        }, function (module) {
            MergeFieldTreeItemProvider = module.MergeFieldTreeItemProvider;
        }, function (module) {
            exportHelper$1 = module["default"];
        }, function (module) {
            emptyGuid = module.emptyGuid;
        }, function (module) {
            useSecurityGrantToken = module.useSecurityGrantToken;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'mergeFieldPicker',
                props: Object.assign({ modelValue: {
                        type: Object,
                        required: false
                    }, additionalFields: {
                        type: String,
                        required: true
                    }, multiple: {
                        type: Boolean,
                        default: false
                    } }, standardRockFormFieldProps),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const standardFieldProps = useStandardRockFormFieldProps(props);
                    const [internalValue, watchModelProp] = useVModelPassthroughWithPropUpdateCheck(props, "modelValue", emit);
                    const securityGrantToken = useSecurityGrantToken();
                    const itemProvider = ref(newItemProvider());
                    function newItemProvider() {
                        var _a;
                        const prov = new MergeFieldTreeItemProvider();
                        prov.securityGrantToken = securityGrantToken.value;
                        prov.additionalFields = props.additionalFields;
                        if (internalValue.value) {
                            if (Array.isArray(internalValue.value)) {
                                prov.selectedIds = internalValue.value.map(p => { var _a; return (_a = p === null || p === void 0 ? void 0 : p.value) !== null && _a !== void 0 ? _a : emptyGuid; });
                            }
                            else {
                                prov.selectedIds = [(_a = internalValue.value.value) !== null && _a !== void 0 ? _a : emptyGuid];
                            }
                        }
                        return prov;
                    }
                    watch(() => props.additionalFields, () => {
                        itemProvider.value = newItemProvider();
                    });
                    watchModelProp(() => {
                        itemProvider.value = newItemProvider();
                    });
                    const __returned__ = { props, emit, standardFieldProps, internalValue, watchModelProp, securityGrantToken, itemProvider, newItemProvider, TreeItemPicker: exportHelper$1 };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["TreeItemPicker"], mergeProps($setup.standardFieldProps, {
                    modelValue: $setup.internalValue,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalValue) = $event)),
                    formGroupClasses: "location-item-picker",
                    iconCssClass: "fa fa-file",
                    provider: $setup.itemProvider,
                    multiple: $props.multiple,
                    autoExpand: true
                }), null, 16, ["modelValue", "provider", "multiple"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
