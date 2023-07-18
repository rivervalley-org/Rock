System.register(['tslib', 'vue', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/http', './baseAsyncPicker.js', './rockLabel.js', './rockForm.js', './attributeValuesContainer.js', './textBox.js', './rockButton.js', './loading.js', './alert.obs.js', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/promiseUtils', '@Obsidian/Utility/suspense', '@Obsidian/Enums/Controls/controlLazyMode', './checkBoxList.js', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Utility/stringUtils', './dropDownList.js', 'ant-design-vue', '@Obsidian/Utility/util', './radioButtonList.js', '@Obsidian/Enums/Controls/pickerDisplayStyle', './rockValidation.js', './rockSuspense.js', './loadingIndicator.js', '@Obsidian/Utility/linq', './tabbedContent.js', './rockField.js', '@Obsidian/Utility/fieldTypes', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Enums/Controls/alertType'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, watch, createTextVNode, createElementVNode, openBlock, createElementBlock, Fragment, createVNode, withCtx, toDisplayString, createBlock, createCommentVNode, mergeProps, createSlots, useSecurityGrantToken, standardAsyncPickerProps, useStandardAsyncPickerProps, useVModelPassthrough, useHttp, BaseAsyncPicker, RockLabel, RockForm, AttributeValuesContainer, TextBox, RockButton, Loading, exportHelper$1, BtnType, BtnSize;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
            createTextVNode = module.createTextVNode;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            createVNode = module.createVNode;
            withCtx = module.withCtx;
            toDisplayString = module.toDisplayString;
            createBlock = module.createBlock;
            createCommentVNode = module.createCommentVNode;
            mergeProps = module.mergeProps;
            createSlots = module.createSlots;
        }, function (module) {
            useSecurityGrantToken = module.useSecurityGrantToken;
        }, function (module) {
            standardAsyncPickerProps = module.standardAsyncPickerProps;
            useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            useHttp = module.useHttp;
        }, function (module) {
            BaseAsyncPicker = module["default"];
        }, function (module) {
            RockLabel = module["default"];
        }, function (module) {
            RockForm = module["default"];
        }, function (module) {
            AttributeValuesContainer = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            Loading = module["default"];
        }, function (module) {
            exportHelper$1 = module["default"];
        }, function (module) {
            BtnType = module.BtnType;
        }, function (module) {
            BtnSize = module.BtnSize;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'definedValuePicker',
                props: Object.assign({ modelValue: {
                        type: Object,
                        required: false
                    }, definedTypeGuid: {
                        type: String,
                        required: false
                    }, allowAdd: {
                        type: Boolean,
                        default: false
                    } }, standardAsyncPickerProps),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const http = useHttp();
                    const standardProps = useStandardAsyncPickerProps(props);
                    const securityGrantToken = useSecurityGrantToken();
                    const internalValue = useVModelPassthrough(props, "modelValue", emit);
                    const itemsSource = ref(null);
                    function loadItems() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            const options = {
                                definedTypeGuid: props.definedTypeGuid,
                                securityGrantToken: securityGrantToken.value
                            };
                            const url = "/api/v2/Controls/DefinedValuePickerGetDefinedValues";
                            const result = yield http.post(url, undefined, options);
                            if (result.isSuccess && result.data) {
                                return result.data;
                            }
                            else {
                                console.error((_a = result.errorMessage) !== null && _a !== void 0 ? _a : "Unknown error while loading data.");
                                return [];
                            }
                        });
                    }
                    function fetchValues() {
                        itemsSource.value = () => loadItems();
                    }
                    watch(() => props.definedTypeGuid, fetchValues);
                    fetchValues();
                    const isShowingAddForm = ref(false);
                    const isLoading = ref(false);
                    const fetchError = ref(false);
                    const saveError = ref(false);
                    function showAddForm() {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!props.allowAdd)
                                return;
                            isShowingAddForm.value = true;
                            if (attributes.value == null) {
                                isLoading.value = true;
                                fetchError.value = false;
                                saveError.value = false;
                                const options = {
                                    definedTypeGuid: props.definedTypeGuid,
                                    securityGrantToken: securityGrantToken.value
                                };
                                const url = "/api/v2/Controls/DefinedValuePickerGetAttributes";
                                const result = yield http.post(url, undefined, options);
                                if (result.isSuccess && result.data) {
                                    attributes.value = result.data.reduce(function (acc, val) {
                                        acc[val.key] = val;
                                        return acc;
                                    }, {});
                                }
                                else {
                                    attributes.value = null;
                                    fetchError.value = "Unable to fetch attribute data.";
                                }
                                isLoading.value = false;
                            }
                        });
                    }
                    function hideAddForm() {
                        isShowingAddForm.value = false;
                        fetchError.value = false;
                        saveError.value = false;
                    }
                    function saveNewValue() {
                        return __awaiter(this, void 0, void 0, function* () {
                            isLoading.value = true;
                            saveError.value = false;
                            const options = {
                                definedTypeGuid: props.definedTypeGuid,
                                securityGrantToken: securityGrantToken.value,
                                value: newValue.value,
                                description: newDescription.value,
                                attributeValues: attributeValues.value
                            };
                            const url = "/api/v2/Controls/DefinedValuePickerSaveNewValue";
                            const result = yield http.post(url, undefined, options);
                            if (result.isSuccess && result.data) {
                                fetchValues();
                                if (props.multiple) {
                                    if (Array.isArray(internalValue.value)) {
                                        internalValue.value.push(result.data);
                                    }
                                    else {
                                        internalValue.value = [result.data];
                                    }
                                }
                                else {
                                    internalValue.value = result.data;
                                }
                                hideAddForm();
                                newValue.value = "";
                                newDescription.value = "";
                                attributeValues.value = {};
                            }
                            else {
                                saveError.value = "Unable to save new Defined Value.";
                            }
                            isLoading.value = false;
                        });
                    }
                    const attributes = ref(null);
                    const attributeValues = ref({});
                    const newValue = ref("");
                    const newDescription = ref("");
                    const __returned__ = { props, emit, http, standardProps, securityGrantToken, internalValue, itemsSource, loadItems, fetchValues, isShowingAddForm, isLoading, fetchError, saveError, showAddForm, hideAddForm, saveNewValue, attributes, attributeValues, newValue, newDescription, BaseAsyncPicker, RockLabel, RockForm, AttributeValuesContainer, TextBox, RockButton, Loading, Alert: exportHelper$1, BtnType, BtnSize };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = createTextVNode("Add");
            const _hoisted_2 = createTextVNode("Cancel");
            const _hoisted_3 = createTextVNode("Cancel");
            const _hoisted_4 = { class: "input-group-btn" };
            const _hoisted_5 = createElementVNode("i", {
                class: "fa fa-plus",
                "aria-hidden": ""
            }, null, -1);
            const _hoisted_6 = createTextVNode("Add Item");
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return ($props.allowAdd && $setup.isShowingAddForm)
                    ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createVNode($setup["RockLabel"], { help: _ctx.help }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.label), 1)
                            ]),
                            _: 1
                        }, 8, ["help"]),
                        createVNode($setup["Loading"], {
                            isLoading: $setup.isLoading,
                            class: "well"
                        }, {
                            default: withCtx(() => [
                                ($setup.fetchError)
                                    ? (openBlock(), createBlock($setup["Alert"], {
                                        key: 0,
                                        alertType: "danger"
                                    }, {
                                        default: withCtx(() => [
                                            createTextVNode("Error: " + toDisplayString($setup.fetchError), 1)
                                        ]),
                                        _: 1
                                    }))
                                    : ($setup.saveError)
                                        ? (openBlock(), createBlock($setup["Alert"], {
                                            key: 1,
                                            alertType: "danger"
                                        }, {
                                            default: withCtx(() => [
                                                createTextVNode("Error: " + toDisplayString($setup.saveError), 1)
                                            ]),
                                            _: 1
                                        }))
                                        : (openBlock(), createBlock($setup["RockForm"], {
                                            key: 2,
                                            onSubmit: $setup.saveNewValue
                                        }, {
                                            default: withCtx(() => [
                                                createVNode($setup["TextBox"], {
                                                    label: "Value",
                                                    modelValue: $setup.newValue,
                                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.newValue) = $event)),
                                                    rules: "required"
                                                }, null, 8, ["modelValue"]),
                                                createVNode($setup["TextBox"], {
                                                    label: "Description",
                                                    modelValue: $setup.newDescription,
                                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.newDescription) = $event)),
                                                    textMode: "multiline"
                                                }, null, 8, ["modelValue"]),
                                                ($setup.attributes != null)
                                                    ? (openBlock(), createBlock($setup["AttributeValuesContainer"], {
                                                        key: 0,
                                                        modelValue: $setup.attributeValues,
                                                        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.attributeValues) = $event)),
                                                        attributes: $setup.attributes,
                                                        isEditMode: "",
                                                        showCategoryLabel: false
                                                    }, null, 8, ["modelValue", "attributes"]))
                                                    : createCommentVNode("v-if", true),
                                                createVNode($setup["RockButton"], {
                                                    type: "submit",
                                                    btnType: $setup.BtnType.Primary,
                                                    btnSize: $setup.BtnSize.ExtraSmall
                                                }, {
                                                    default: withCtx(() => [
                                                        _hoisted_1
                                                    ]),
                                                    _: 1
                                                }, 8, ["btnType", "btnSize"]),
                                                createVNode($setup["RockButton"], {
                                                    btnType: $setup.BtnType.Link,
                                                    btnSize: $setup.BtnSize.ExtraSmall,
                                                    onClick: $setup.hideAddForm
                                                }, {
                                                    default: withCtx(() => [
                                                        _hoisted_2
                                                    ]),
                                                    _: 1
                                                }, 8, ["btnType", "btnSize"])
                                            ]),
                                            _: 1
                                        })),
                                ($setup.fetchError || $setup.saveError)
                                    ? (openBlock(), createBlock($setup["RockButton"], {
                                        key: 3,
                                        btnType: $setup.BtnType.Link,
                                        btnSize: $setup.BtnSize.ExtraSmall,
                                        onClick: $setup.hideAddForm
                                    }, {
                                        default: withCtx(() => [
                                            _hoisted_3
                                        ]),
                                        _: 1
                                    }, 8, ["btnType", "btnSize"]))
                                    : createCommentVNode("v-if", true)
                            ]),
                            _: 1
                        }, 8, ["isLoading"])
                    ], 64))
                    : (openBlock(), createBlock($setup["BaseAsyncPicker"], mergeProps({
                        key: 1,
                        modelValue: $setup.internalValue,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.internalValue) = $event))
                    }, $setup.standardProps, { items: $setup.itemsSource }), createSlots({ _: 2 }, [
                        ($props.allowAdd)
                            ? {
                                name: "inputGroupAppend",
                                fn: withCtx(() => [
                                    createElementVNode("span", _hoisted_4, [
                                        createVNode($setup["RockButton"], {
                                            onClick: $setup.showAddForm,
                                            btnType: $setup.BtnType.Default,
                                            "aria-label": "Add Item"
                                        }, {
                                            default: withCtx(() => [
                                                _hoisted_5
                                            ]),
                                            _: 1
                                        }, 8, ["btnType"])
                                    ])
                                ])
                            }
                            : undefined,
                        ($props.allowAdd)
                            ? {
                                name: "append",
                                fn: withCtx(({ isInputGroupSupported }) => [
                                    (!isInputGroupSupported)
                                        ? (openBlock(), createBlock($setup["RockButton"], {
                                            key: 0,
                                            onClick: $setup.showAddForm,
                                            btnType: $setup.BtnType.Link
                                        }, {
                                            default: withCtx(() => [
                                                _hoisted_6
                                            ]),
                                            _: 1
                                        }, 8, ["btnType"]))
                                        : createCommentVNode("v-if", true)
                                ])
                            }
                            : undefined
                    ]), 1040, ["modelValue", "items"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
