System.register(['tslib', 'vue', '@Obsidian/Utility/component', '@Obsidian/Utility/http', './baseAsyncPicker.js', '@Obsidian/Utility/promiseUtils', '@Obsidian/Utility/suspense', '@Obsidian/Enums/Controls/controlLazyMode', './checkBoxList.js', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Utility/stringUtils', './dropDownList.js', 'ant-design-vue', '@Obsidian/Utility/util', './radioButtonList.js', '@Obsidian/Enums/Controls/pickerDisplayStyle'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, watch, openBlock, createBlock, mergeProps, standardAsyncPickerProps, useVModelPassthrough, useStandardAsyncPickerProps, useHttp, BaseAsyncPicker;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
        }, function (module) {
            standardAsyncPickerProps = module.standardAsyncPickerProps;
            useVModelPassthrough = module.useVModelPassthrough;
            useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
        }, function (module) {
            useHttp = module.useHttp;
        }, function (module) {
            BaseAsyncPicker = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'groupTypePicker',
                props: Object.assign({ modelValue: {
                        type: Object,
                        required: false
                    }, groupTypes: {
                        type: Array,
                        default: []
                    }, isSortedByName: {
                        type: Boolean,
                        default: false
                    } }, standardAsyncPickerProps),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = useVModelPassthrough(props, "modelValue", emit);
                    const standardProps = useStandardAsyncPickerProps(props);
                    const http = useHttp();
                    const loadedItems = ref(null);
                    const actualItems = computed(() => {
                        return loadedItems.value || loadOptions;
                    });
                    const loadOptions = () => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        const options = {
                            groupTypes: props.groupTypes,
                            isSortedByName: props.isSortedByName
                        };
                        const result = yield http.post("/api/v2/Controls/GroupTypePickerGetGroupTypes", undefined, options);
                        if (result.isSuccess && result.data) {
                            loadedItems.value = result.data;
                            return result.data;
                        }
                        else {
                            console.error((_a = result.errorMessage) !== null && _a !== void 0 ? _a : "Unknown error while loading data.");
                            loadedItems.value = [];
                            return [];
                        }
                    });
                    watch(() => [props.groupTypes, props.isSortedByName], () => {
                        loadedItems.value = null;
                    });
                    const __returned__ = { props, emit, internalValue, standardProps, http, loadedItems, actualItems, loadOptions, BaseAsyncPicker };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["BaseAsyncPicker"], mergeProps({
                    modelValue: $setup.internalValue,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalValue) = $event))
                }, $setup.standardProps, { items: $setup.actualItems }), null, 16, ["modelValue", "items"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
