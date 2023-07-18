System.register(['tslib', 'vue', '@Obsidian/Utility/component', '@Obsidian/Utility/http', './baseAsyncPicker.js', '@Obsidian/Utility/promiseUtils', '@Obsidian/Utility/suspense', '@Obsidian/Enums/Controls/controlLazyMode', './checkBoxList.js', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Utility/stringUtils', './dropDownList.js', 'ant-design-vue', '@Obsidian/Utility/util', './radioButtonList.js', '@Obsidian/Enums/Controls/pickerDisplayStyle'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, openBlock, createBlock, mergeProps, standardAsyncPickerProps, useVModelPassthrough, useStandardAsyncPickerProps, useHttp, BaseAsyncPicker;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
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
                name: 'ethnicityPicker',
                props: Object.assign({ modelValue: {
                        type: Object,
                        required: false
                    } }, standardAsyncPickerProps),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = useVModelPassthrough(props, "modelValue", emit);
                    const standardProps = useStandardAsyncPickerProps(props);
                    const http = useHttp();
                    const loadedItems = ref(null);
                    const label = ref("Ethnicity");
                    const actualItems = computed(() => {
                        return loadedItems.value || loadOptions;
                    });
                    function loadOptions() {
                        var _a, _b, _c, _d;
                        return __awaiter(this, void 0, void 0, function* () {
                            const result = yield http.post("/api/v2/Controls/EthnicityPickerGetEthnicities");
                            if (result.isSuccess && result.data) {
                                loadedItems.value = (_a = result.data.ethnicities) !== null && _a !== void 0 ? _a : null;
                                label.value = (_b = result.data.label) !== null && _b !== void 0 ? _b : "Ethnicity";
                                return (_c = loadedItems.value) !== null && _c !== void 0 ? _c : [];
                            }
                            else {
                                console.error((_d = result.errorMessage) !== null && _d !== void 0 ? _d : "Unknown error while loading data.");
                                loadedItems.value = [];
                                return [];
                            }
                        });
                    }
                    loadOptions();
                    const __returned__ = { props, emit, internalValue, standardProps, http, loadedItems, label, actualItems, loadOptions, BaseAsyncPicker };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["BaseAsyncPicker"], mergeProps({
                    modelValue: $setup.internalValue,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalValue) = $event))
                }, $setup.standardProps, {
                    label: $setup.label,
                    displayStyle: _ctx.displayStyle,
                    items: $setup.actualItems
                }), null, 16, ["modelValue", "label", "displayStyle", "items"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
