System.register(['@Obsidian/Utility/block', '@Obsidian/Utility/component', 'vue', '@Obsidian/Utility/treeItemProviders', './treeItemPicker.obs.js', './treeList.js', 'tslib', '@Obsidian/Utility/promiseUtils', './contentDropDownPicker.obs.js', './rockButton.js', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Controls/fullscreen'], (function (exports) {
    'use strict';
    var useSecurityGrantToken, updateRefValue, defineComponent, ref, watch, ScheduleTreeItemProvider, exportHelper;
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
            exportHelper = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            var schedulePicker = exports('default', defineComponent({
                name: "SchedulePicker",
                components: {
                    TreeItemPicker: exportHelper
                },
                props: {
                    modelValue: {
                        type: Object,
                        required: false
                    },
                },
                emits: {
                    "update:modelValue": (_value) => true
                },
                setup(props, { emit }) {
                    var _a;
                    const internalValue = ref((_a = props.modelValue) !== null && _a !== void 0 ? _a : null);
                    const includeInactive = ref(false);
                    const securityGrantToken = useSecurityGrantToken();
                    const itemProvider = ref();
                    function refreshItemProvider() {
                        const provider = new ScheduleTreeItemProvider();
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
                    return {
                        internalValue,
                        itemProvider,
                        includeInactive
                    };
                },
                template: `
<TreeItemPicker v-model="internalValue"
    formGroupClasses="category-picker"
    iconCssClass="fa fa-calendar"
    :provider="itemProvider"
    :multiple="multiple"
    disableFolderSelection
>

    <template #customPickerActions>
        <label class="rock-checkbox-icon">
            <i :class="['fa', includeInactive ? 'fa-check-square-o' : 'fa-square-o']"></i> Show Inactive
            <span style="display:none"><input type="checkbox" v-model="includeInactive"></span>
        </label>
    </template>
</TreeItemPicker>
`
            }));

        })
    };
}));
