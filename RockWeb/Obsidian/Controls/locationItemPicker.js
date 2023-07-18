System.register(['vue', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Utility/component', './treeItemPicker.obs.js', './treeList.js', 'tslib', '@Obsidian/Utility/promiseUtils', './contentDropDownPicker.obs.js', './rockButton.js', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Controls/fullscreen'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, LocationTreeItemProvider, updateRefValue, exportHelper;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            LocationTreeItemProvider = module.LocationTreeItemProvider;
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function (module) {
            exportHelper = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            var LocationItemPicker = exports('default', defineComponent({
                name: "LocationPicker",
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
                    const itemProvider = new LocationTreeItemProvider();
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
    formGroupClasses="location-item-picker"
    iconCssClass="fa fa-home"
    :provider="itemProvider"
    :multiple="multiple">

    <template #pickerContentSuperHeader v-if="$slots.pickerContentSuperHeader">
        <slot name="pickerContentSuperHeader" />
    </template>
    <template #prepend="{ isInputGroupSupported }" v-if="$slots.prepend">
        <slot name="prepend" :isInputGroupSupported="isInputGroupSupported" />
    </template>
    <template #inputGroupPrepend="{ isInputGroupSupported }" v-if="$slots.inputGroupPrepend">
        <slot name="inputGroupPrepend" :isInputGroupSupported="isInputGroupSupported" />
    </template>
    <template #append="{ isInputGroupSupported }" v-if="$slots.append">
        <slot name="append" :isInputGroupSupported="isInputGroupSupported" />
    </template>
</TreeItemPicker>
`
            }));

        })
    };
}));
