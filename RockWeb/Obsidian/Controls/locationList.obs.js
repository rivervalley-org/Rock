System.register(['tslib', 'vue', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/http', './baseAsyncPicker.js', './rockLabel.js', './rockForm.js', './attributeValuesContainer.js', './textBox.js', './rockButton.js', './loading.js', './alert.obs.js', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Enums/Controls/btnType', './addressControl.obs.js', '@Obsidian/Utility/address', './rockValidation.js', '@Obsidian/Utility/promiseUtils', '@Obsidian/Utility/suspense', '@Obsidian/Enums/Controls/controlLazyMode', './checkBoxList.js', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Utility/stringUtils', './dropDownList.js', 'ant-design-vue', '@Obsidian/Utility/util', './radioButtonList.js', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/Enums/Controls/alertType', './rockSuspense.js', './loadingIndicator.js', '@Obsidian/Utility/linq', './tabbedContent.js', './rockField.js', '@Obsidian/Utility/fieldTypes', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Enums/Controls/requirementLevel'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, watch, computed, createTextVNode, createElementVNode, openBlock, createElementBlock, Fragment, createVNode, withCtx, toDisplayString, createBlock, createCommentVNode, mergeProps, createSlots, useSecurityGrantToken, standardAsyncPickerProps, useStandardAsyncPickerProps, useVModelPassthrough, useHttp, BaseAsyncPicker, RockLabel, RockForm, AttributeValuesContainer, TextBox, RockButton, Loading, exportHelper$1, BtnSize, BtnType, exportHelper$2, validateAddress, RockValidation;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
            computed = module.computed;
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
            BtnSize = module.BtnSize;
        }, function (module) {
            BtnType = module.BtnType;
        }, function (module) {
            exportHelper$2 = module["default"];
        }, function (module) {
            validateAddress = module.validateAddress;
        }, function (module) {
            RockValidation = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'locationList',
                props: Object.assign({ modelValue: {
                        type: Object,
                        required: false
                    }, allowAdd: {
                        type: Boolean,
                        default: false
                    }, locationTypeValueGuid: {
                        type: String,
                        default: ""
                    }, parentLocationGuid: {
                        type: String,
                        default: ""
                    }, showCityState: {
                        type: Boolean,
                        default: false
                    }, isAddressRequired: {
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
                                showCityState: props.showCityState,
                                securityGrantToken: securityGrantToken.value
                            };
                            if (props.parentLocationGuid) {
                                options.parentLocationGuid = props.parentLocationGuid;
                            }
                            if (props.locationTypeValueGuid) {
                                options.locationTypeValueGuid = props.locationTypeValueGuid;
                            }
                            const url = "/api/v2/Controls/LocationListGetLocations";
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
                    watch(() => [props.locationTypeValueGuid, props.parentLocationGuid, props.showCityState], fetchValues);
                    fetchValues();
                    const isShowingAddForm = ref(false);
                    const isLoading = ref(false);
                    const isValidating = ref(false);
                    const fetchError = ref(false);
                    const saveError = ref(false);
                    const validationErrors = ref([]);
                    function showAddForm() {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!props.allowAdd)
                                return;
                            isShowingAddForm.value = true;
                            if (attributes.value == null) {
                                isLoading.value = true;
                                fetchError.value = false;
                                saveError.value = false;
                                const url = "/api/v2/Controls/LocationListGetAttributes";
                                const result = yield http.post(url);
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
                        var _a, _b, _c;
                        return __awaiter(this, void 0, void 0, function* () {
                            saveError.value = false;
                            if (newLocationAddress.value.street1 || props.isAddressRequired) {
                                isValidating.value = true;
                                const response = yield validateAddress(Object.assign({}, newLocationAddress.value));
                                if (response.isSuccess && response.data) {
                                    if (response.data.isValid) {
                                        validationErrors.value = [];
                                        newLocationAddress.value = Object.assign({}, response.data.address);
                                    }
                                    else {
                                        validationErrors.value = [{ name: "Invalid", text: (_a = response.data.errorMessage) !== null && _a !== void 0 ? _a : "Please enter a valid address." }];
                                        isValidating.value = false;
                                        return;
                                    }
                                }
                                else {
                                    console.error((_b = response.errorMessage) !== null && _b !== void 0 ? _b : "Unknown error while validating address.");
                                    validationErrors.value = [{ name: "Server", text: (_c = response.errorMessage) !== null && _c !== void 0 ? _c : "An unknown error occurred. Please try again." }];
                                    isValidating.value = false;
                                    return;
                                }
                            }
                            isValidating.value = false;
                            isLoading.value = true;
                            const options = {
                                securityGrantToken: securityGrantToken.value,
                                name: newLocationName.value,
                                showCityState: props.showCityState,
                                attributeValues: attributeValues.value
                            };
                            if (newLocationAddress.value.street1 || props.isAddressRequired) {
                                options.address = newLocationAddress.value;
                            }
                            if (props.parentLocationGuid) {
                                options.parentLocationGuid = props.parentLocationGuid;
                            }
                            if (props.locationTypeValueGuid) {
                                options.locationTypeValueGuid = props.locationTypeValueGuid;
                            }
                            const url = "/api/v2/Controls/LocationListSaveNewLocation";
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
                                newLocationName.value = "";
                                newLocationAddress.value = {};
                                attributeValues.value = {};
                            }
                            else {
                                saveError.value = "Unable to save new Location.";
                            }
                            isLoading.value = false;
                        });
                    }
                    const attributes = ref(null);
                    const attributeValues = ref({});
                    const newLocationName = ref("");
                    const newLocationAddress = ref({});
                    const addressRules = computed(() => {
                        return props.isAddressRequired ? "required" : "";
                    });
                    const __returned__ = { props, emit, http, standardProps, securityGrantToken, internalValue, itemsSource, loadItems, fetchValues, isShowingAddForm, isLoading, isValidating, fetchError, saveError, validationErrors, showAddForm, hideAddForm, saveNewValue, attributes, attributeValues, newLocationName, newLocationAddress, addressRules, BaseAsyncPicker, RockLabel, RockForm, AttributeValuesContainer, TextBox, RockButton, Loading, Alert: exportHelper$1, BtnSize, BtnType, AddressControl: exportHelper$2, RockValidation };
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
                                                createVNode($setup["RockValidation"], { errors: $setup.validationErrors }, null, 8, ["errors"]),
                                                createVNode($setup["TextBox"], {
                                                    label: "Location Name",
                                                    modelValue: $setup.newLocationName,
                                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.newLocationName) = $event))
                                                }, null, 8, ["modelValue"]),
                                                createVNode($setup["AddressControl"], {
                                                    label: "Address",
                                                    modelValue: $setup.newLocationAddress,
                                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.newLocationAddress) = $event)),
                                                    rules: $setup.addressRules,
                                                    disableFrontEndValidation: ""
                                                }, null, 8, ["modelValue", "rules"]),
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
                                                    btnSize: $setup.BtnSize.ExtraSmall,
                                                    disabled: $setup.isValidating
                                                }, {
                                                    default: withCtx(() => [
                                                        createVNode($setup["Loading"], { isLoading: $setup.isValidating }, {
                                                            default: withCtx(() => [
                                                                _hoisted_1
                                                            ]),
                                                            _: 1
                                                        }, 8, ["isLoading"])
                                                    ]),
                                                    _: 1
                                                }, 8, ["btnType", "btnSize", "disabled"]),
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
