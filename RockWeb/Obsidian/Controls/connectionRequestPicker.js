System.register(['vue', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Utility/component', './treeItemPicker.obs.js', './treeList.js', 'tslib', '@Obsidian/Utility/promiseUtils', './contentDropDownPicker.obs.js', './rockButton.js', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Controls/fullscreen'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, ConnectionRequestTreeItemProvider, updateRefValue, exportHelper;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            ConnectionRequestTreeItemProvider = module.ConnectionRequestTreeItemProvider;
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function (module) {
            exportHelper = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            var connectionRequestPicker = exports('default', defineComponent({
                name: "ConnectionRequestPicker",
                components: {
                    TreeItemPicker: exportHelper
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
                    securityGrantToken: {
                        type: String,
                        required: false
                    }
                },
                emits: {
                    "update:modelValue": (_value) => true
                },
                setup(props, { emit }) {
                    var _a;
                    const internalValue = ref((_a = props.modelValue) !== null && _a !== void 0 ? _a : null);
                    const itemProvider = new ConnectionRequestTreeItemProvider();
                    itemProvider.securityGrantToken = props.securityGrantToken;
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
    formGroupClasses="connection-request-item-picker"
    iconCssClass="fa fa-plug"
    :provider="itemProvider"
    :multiple="multiple"
/>
`
            }));

        })
    };
}));
