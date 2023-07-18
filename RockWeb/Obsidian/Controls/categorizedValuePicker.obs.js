System.register(['tslib', 'vue', './categorizedValuePickerDropDownLevel.obs.js', './rockFormField.js', '@Obsidian/Utility/http', '@Obsidian/Utility/component', './alert.obs.js', '@Obsidian/Enums/Controls/alertType', './rockButton.js', './dropDownList.js', '@Obsidian/Utility/guid', '@Obsidian/Utility/form', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Utility/promiseUtils', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', 'ant-design-vue', '@Obsidian/Utility/util', '@Obsidian/Utility/stringUtils'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, watch, createTextVNode, openBlock, createBlock, mergeProps, withCtx, createVNode, exportHelper$1, RockFormField, useHttp, standardRockFormFieldProps, useVModelPassthrough, useStandardRockFormFieldProps, exportHelper$2, AlertType, RockButton, DropDownList;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
            createTextVNode = module.createTextVNode;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
            withCtx = module.withCtx;
            createVNode = module.createVNode;
        }, function (module) {
            exportHelper$1 = module["default"];
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            useHttp = module.useHttp;
        }, function (module) {
            standardRockFormFieldProps = module.standardRockFormFieldProps;
            useVModelPassthrough = module.useVModelPassthrough;
            useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
        }, function (module) {
            exportHelper$2 = module["default"];
        }, function (module) {
            AlertType = module.AlertType;
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            DropDownList = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'categorizedValuePicker',
                props: Object.assign({ modelValue: {
                        type: String,
                        default: ""
                    }, definedTypeGuid: {
                        type: String,
                        required: true
                    }, onlyIncludeGuids: {
                        type: Array,
                        default: null
                    } }, standardRockFormFieldProps),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const http = useHttp();
                    const loadedItems = ref(null);
                    const error = ref(false);
                    const definedTypeName = ref("");
                    const internalValue = useVModelPassthrough(props, "modelValue", emit);
                    const formFieldProps = useStandardRockFormFieldProps(props);
                    function loadTree() {
                        var _a, _b, _c;
                        return __awaiter(this, void 0, void 0, function* () {
                            error.value = false;
                            const options = {
                                definedTypeGuid: props.definedTypeGuid,
                                onlyIncludeGuids: props.onlyIncludeGuids
                            };
                            const result = yield http.post("/api/v2/Controls/CategorizedValuePickerGetTree", undefined, options);
                            if (result.isSuccess && result.data) {
                                loadedItems.value = (_a = result.data.tree) !== null && _a !== void 0 ? _a : null;
                                definedTypeName.value = (_b = result.data.definedType) !== null && _b !== void 0 ? _b : "";
                                return;
                            }
                            console.error((_c = result.errorMessage) !== null && _c !== void 0 ? _c : "Unknown error while loading data.");
                            error.value = true;
                            loadedItems.value = null;
                            definedTypeName.value = "";
                        });
                    }
                    watch(() => props.definedTypeGuid, loadTree, { immediate: true });
                    const __returned__ = { props, emit, http, loadedItems, error, definedTypeName, internalValue, formFieldProps, loadTree, CategorizedValuePickerDropDownLevel: exportHelper$1, RockFormField, Alert: exportHelper$2, AlertType, RockButton, DropDownList };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = createTextVNode(" An error occurred while fetching category tree. ");
            const _hoisted_2 = createTextVNode("Retry");
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                var _a, _b;
                return ($setup.error)
                    ? (openBlock(), createBlock($setup["RockFormField"], mergeProps({ key: 0 }, $setup.formFieldProps, {
                        modelValue: $setup.internalValue,
                        name: "cat-val-picker"
                    }), {
                        default: withCtx(() => [
                            createVNode($setup["Alert"], {
                                alertType: $setup.AlertType.Danger
                            }, {
                                default: withCtx(() => [
                                    _hoisted_1,
                                    createVNode($setup["RockButton"], { onClick: $setup.loadTree }, {
                                        default: withCtx(() => [
                                            _hoisted_2
                                        ]),
                                        _: 1
                                    })
                                ]),
                                _: 1
                            }, 8, ["alertType"])
                        ]),
                        _: 1
                    }, 16, ["modelValue"]))
                    : ($setup.loadedItems)
                        ? (openBlock(), createBlock($setup["RockFormField"], mergeProps({ key: 1 }, $setup.formFieldProps, {
                            modelValue: $setup.internalValue,
                            name: "cat-val-picker"
                        }), {
                            default: withCtx(() => [
                                createVNode($setup["CategorizedValuePickerDropDownLevel"], mergeProps($setup.formFieldProps, {
                                    root: $setup.loadedItems,
                                    modelValue: $setup.internalValue,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalValue) = $event)),
                                    definedTypeName: $setup.definedTypeName,
                                    key: "root-cat-val-picker"
                                }), null, 16, ["root", "modelValue", "definedTypeName"])
                            ]),
                            _: 1
                        }, 16, ["modelValue"]))
                        : (openBlock(), createBlock($setup["DropDownList"], mergeProps({ key: 2 }, $setup.formFieldProps, {
                            loading: "",
                            modelValue: (_b = (_a = $setup.internalValue) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : ''
                        }), null, 16, ["modelValue"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
