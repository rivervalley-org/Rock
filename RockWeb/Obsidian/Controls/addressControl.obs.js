System.register(['tslib', 'vue', './rockFormField.js', './dropDownList.js', './textBox.js', '@Obsidian/Enums/Controls/requirementLevel', '@Obsidian/Utility/http', './loading.js', '@Obsidian/Utility/component', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', 'ant-design-vue', '@Obsidian/Utility/util', '@Obsidian/Utility/stringUtils', './loadingIndicator.js'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, reactive, watch, ref, openBlock, createBlock, withCtx, createElementVNode, createVNode, createElementBlock, createCommentVNode, normalizeClass, RockFormField, DropDownList, TextBox, RequirementLevel, post, Loading;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            reactive = module.reactive;
            watch = module.watch;
            ref = module.ref;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createElementVNode = module.createElementVNode;
            createVNode = module.createVNode;
            createElementBlock = module.createElementBlock;
            createCommentVNode = module.createCommentVNode;
            normalizeClass = module.normalizeClass;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            RequirementLevel = module.RequirementLevel;
        }, function (module) {
            post = module.post;
        }, function (module) {
            Loading = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'addressControl',
                props: {
                    modelValue: {
                        type: Object,
                        default: {}
                    },
                    disabled: {
                        type: Boolean,
                        default: false
                    },
                    id: {
                        type: String,
                        default: ""
                    },
                    showCounty: {
                        type: Boolean,
                        default: false
                    },
                    showAddressLine2: {
                        type: Boolean,
                        default: true
                    },
                    useCountryAbbreviation: {
                        type: Boolean,
                        default: false
                    },
                    disableFrontEndValidation: {
                        type: Boolean,
                        default: false
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    var _a, _b, _c, _d, _e, _f, _g;
                    expose();
                    const props = __props;
                    const internalValue = reactive({
                        city: (_a = props.modelValue.city) !== null && _a !== void 0 ? _a : "",
                        country: (_b = props.modelValue.country) !== null && _b !== void 0 ? _b : "",
                        postalCode: (_c = props.modelValue.postalCode) !== null && _c !== void 0 ? _c : "",
                        state: (_d = props.modelValue.state) !== null && _d !== void 0 ? _d : "",
                        street1: (_e = props.modelValue.street1) !== null && _e !== void 0 ? _e : "",
                        street2: (_f = props.modelValue.street2) !== null && _f !== void 0 ? _f : "",
                        locality: (_g = props.modelValue.locality) !== null && _g !== void 0 ? _g : ""
                    });
                    watch(internalValue, () => {
                        emit("update:modelValue", internalValue);
                    });
                    watch(() => props.modelValue, () => {
                        Object.entries(props.modelValue).forEach(([key, val]) => {
                            if (val === null || val === undefined) {
                                internalValue[key] = "";
                            }
                            else if (val !== internalValue[key]) {
                                internalValue[key] = val;
                            }
                        });
                    });
                    const isLoading = ref(false);
                    const country = reactive({
                        isVisible: true,
                        label: "Country",
                        rules: ""
                    });
                    const address1 = reactive({
                        isVisible: true,
                        label: "Address Line 1",
                        rules: ""
                    });
                    const address2 = reactive({
                        isVisible: true,
                        label: "Address Line 2",
                        rules: ""
                    });
                    const city = reactive({
                        isVisible: true,
                        label: "City",
                        rules: ""
                    });
                    const county = reactive({
                        isVisible: true,
                        label: "County",
                        rules: ""
                    });
                    const state = reactive({
                        isVisible: true,
                        label: "State",
                        rules: ""
                    });
                    const zip = reactive({
                        isVisible: true,
                        label: "Zip",
                        rules: ""
                    });
                    const countryOptions = ref([]);
                    const stateOptions = ref([]);
                    const hasStateList = ref(false);
                    function getConfiguration() {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                        return __awaiter(this, void 0, void 0, function* () {
                            isLoading.value = true;
                            const options = {
                                useCountryAbbreviation: props.useCountryAbbreviation,
                                countryCode: props.modelValue.country
                            };
                            const result = yield post("/api/v2/Controls/AddressControlGetConfiguration", undefined, options);
                            if (result.isSuccess && result.data) {
                                const data = result.data;
                                country.isVisible = data.showCountrySelection;
                                address1.isVisible = data.addressLine1Requirement != RequirementLevel.Unavailable;
                                address1.rules = getRules(data.addressLine1Requirement);
                                address2.isVisible = data.addressLine2Requirement == RequirementLevel.Required || (props.showAddressLine2 && data.addressLine2Requirement != RequirementLevel.Unavailable);
                                address2.rules = getRules(data.addressLine2Requirement);
                                city.isVisible = data.cityRequirement != RequirementLevel.Unavailable;
                                city.rules = getRules(data.cityRequirement);
                                city.label = (_a = data.cityLabel) !== null && _a !== void 0 ? _a : city.label;
                                county.isVisible = data.localityRequirement == RequirementLevel.Required || (props.showCounty && data.localityRequirement != RequirementLevel.Unavailable);
                                county.rules = getRules(data.localityRequirement);
                                county.label = (_b = data.localityLabel) !== null && _b !== void 0 ? _b : county.label;
                                state.isVisible = data.stateRequirement != RequirementLevel.Unavailable;
                                state.rules = getRules(data.stateRequirement);
                                state.label = (_c = data.stateLabel) !== null && _c !== void 0 ? _c : state.label;
                                zip.isVisible = data.postalCodeRequirement != RequirementLevel.Unavailable;
                                zip.rules = getRules(data.postalCodeRequirement);
                                zip.label = (_d = data.postalCodeLabel) !== null && _d !== void 0 ? _d : zip.label;
                                countryOptions.value = (_e = data.countries) !== null && _e !== void 0 ? _e : [];
                                stateOptions.value = (_f = data.states) !== null && _f !== void 0 ? _f : [];
                                hasStateList.value = data.hasStateList;
                                const countryValue = (_g = (data.selectedCountry || data.defaultCountry)) !== null && _g !== void 0 ? _g : "";
                                const stateValue = (_h = data.defaultState) !== null && _h !== void 0 ? _h : "";
                                if (!internalValue.country && countryValue) {
                                    internalValue.country = countryValue;
                                }
                                if (!internalValue.state && stateValue) {
                                    internalValue.state = stateValue;
                                }
                            }
                            else {
                                console.error((_j = result.errorMessage) !== null && _j !== void 0 ? _j : "Unknown error while loading data.");
                            }
                            isLoading.value = false;
                        });
                    }
                    function getRules(reqLvl) {
                        return reqLvl == RequirementLevel.Required && !props.disableFrontEndValidation ? "required" : "";
                    }
                    watch(() => internalValue.country, (currentVal, oldVal) => {
                        if (currentVal != oldVal) {
                            getConfiguration();
                        }
                    }, { deep: true });
                    getConfiguration();
                    const __returned__ = { props, emit, internalValue, isLoading, country, address1, address2, city, county, state, zip, countryOptions, stateOptions, hasStateList, getConfiguration, getRules, RockFormField, DropDownList, TextBox, Loading };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "control-wrapper" };
            const _hoisted_2 = {
                key: 0,
                class: "form-row"
            };
            const _hoisted_3 = { class: "form-group col-sm-6" };
            const _hoisted_4 = {
                key: 1,
                class: "form-group"
            };
            const _hoisted_5 = {
                key: 2,
                class: "form-group"
            };
            const _hoisted_6 = { class: "form-row" };
            const _hoisted_7 = {
                key: 1,
                class: "form-group col-sm-3"
            };
            const _hoisted_8 = {
                key: 2,
                class: "form-group col-sm-3"
            };
            const _hoisted_9 = {
                key: 3,
                class: "form-group col-sm-3"
            };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["RockFormField"], {
                    formGroupClasses: "address-control",
                    name: "addresscontrol",
                    modelValue: $setup.internalValue,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($setup.internalValue) = $event)),
                    modelModifiers: { lazy: true }
                }, {
                    default: withCtx(({ uniqueId, field }) => [
                        createElementVNode("div", _hoisted_1, [
                            createVNode($setup["Loading"], {
                                id: $props.id || uniqueId,
                                isLoading: $setup.isLoading
                            }, {
                                default: withCtx(() => [
                                    ($setup.country.isVisible)
                                        ? (openBlock(), createElementBlock("div", _hoisted_2, [
                                            createElementVNode("div", _hoisted_3, [
                                                createVNode($setup["DropDownList"], {
                                                    modelValue: $setup.internalValue.country,
                                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalValue.country) = $event)),
                                                    items: $setup.countryOptions,
                                                    validationTitle: $setup.country.label,
                                                    rules: $setup.country.rules,
                                                    disabled: $props.disabled
                                                }, null, 8, ["modelValue", "items", "validationTitle", "rules", "disabled"])
                                            ])
                                        ]))
                                        : createCommentVNode("v-if", true),
                                    ($setup.address1.isVisible)
                                        ? (openBlock(), createElementBlock("div", _hoisted_4, [
                                            createVNode($setup["TextBox"], {
                                                modelValue: $setup.internalValue.street1,
                                                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.internalValue.street1) = $event)),
                                                placeholder: $setup.address1.label,
                                                validationTitle: $setup.address1.label,
                                                rules: $setup.address1.rules,
                                                disabled: $props.disabled
                                            }, null, 8, ["modelValue", "placeholder", "validationTitle", "rules", "disabled"])
                                        ]))
                                        : createCommentVNode("v-if", true),
                                    ($setup.address2.isVisible)
                                        ? (openBlock(), createElementBlock("div", _hoisted_5, [
                                            createVNode($setup["TextBox"], {
                                                modelValue: $setup.internalValue.street2,
                                                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.internalValue.street2) = $event)),
                                                placeholder: $setup.address2.label,
                                                validationTitle: $setup.address2.label,
                                                rules: $setup.address2.rules,
                                                disabled: $props.disabled
                                            }, null, 8, ["modelValue", "placeholder", "validationTitle", "rules", "disabled"])
                                        ]))
                                        : createCommentVNode("v-if", true),
                                    createElementVNode("div", _hoisted_6, [
                                        ($setup.city.isVisible)
                                            ? (openBlock(), createElementBlock("div", {
                                                key: 0,
                                                class: normalizeClass(["form-group", $setup.county.isVisible ? 'col-sm-3' : 'col-sm-6'])
                                            }, [
                                                createVNode($setup["TextBox"], {
                                                    modelValue: $setup.internalValue.city,
                                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.internalValue.city) = $event)),
                                                    placeholder: $setup.city.label,
                                                    validationTitle: $setup.city.label,
                                                    rules: $setup.city.rules,
                                                    disabled: $props.disabled
                                                }, null, 8, ["modelValue", "placeholder", "validationTitle", "rules", "disabled"])
                                            ], 2))
                                            : createCommentVNode("v-if", true),
                                        ($setup.county.isVisible)
                                            ? (openBlock(), createElementBlock("div", _hoisted_7, [
                                                createVNode($setup["TextBox"], {
                                                    modelValue: $setup.internalValue.locality,
                                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.internalValue.locality) = $event)),
                                                    placeholder: $setup.county.label,
                                                    validationTitle: $setup.county.label,
                                                    rules: $setup.county.rules,
                                                    disabled: $props.disabled
                                                }, null, 8, ["modelValue", "placeholder", "validationTitle", "rules", "disabled"])
                                            ]))
                                            : createCommentVNode("v-if", true),
                                        ($setup.state.isVisible)
                                            ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                                ($setup.hasStateList)
                                                    ? (openBlock(), createBlock($setup["DropDownList"], {
                                                        key: 0,
                                                        showBlankItem: false,
                                                        modelValue: $setup.internalValue.state,
                                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.internalValue.state) = $event)),
                                                        items: $setup.stateOptions,
                                                        validationTitle: $setup.state.label,
                                                        rules: $setup.state.rules,
                                                        disabled: $props.disabled
                                                    }, null, 8, ["modelValue", "items", "validationTitle", "rules", "disabled"]))
                                                    : (openBlock(), createBlock($setup["TextBox"], {
                                                        key: 1,
                                                        modelValue: $setup.internalValue.state,
                                                        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($setup.internalValue.state) = $event)),
                                                        placeholder: $setup.state.label,
                                                        validationTitle: $setup.state.label,
                                                        rules: $setup.state.rules,
                                                        disabled: $props.disabled
                                                    }, null, 8, ["modelValue", "placeholder", "validationTitle", "rules", "disabled"]))
                                            ]))
                                            : createCommentVNode("v-if", true),
                                        ($setup.zip.isVisible)
                                            ? (openBlock(), createElementBlock("div", _hoisted_9, [
                                                createVNode($setup["TextBox"], {
                                                    modelValue: $setup.internalValue.postalCode,
                                                    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($setup.internalValue.postalCode) = $event)),
                                                    placeholder: $setup.zip.label,
                                                    validationTitle: $setup.zip.label,
                                                    rules: $setup.zip.rules,
                                                    inputmode: "numeric",
                                                    disabled: $props.disabled
                                                }, null, 8, ["modelValue", "placeholder", "validationTitle", "rules", "disabled"])
                                            ]))
                                            : createCommentVNode("v-if", true)
                                    ])
                                ]),
                                _: 2
                            }, 1032, ["id", "isLoading"])
                        ])
                    ]),
                    _: 1
                }, 8, ["modelValue"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
