System.register(['tslib', 'vue', '@Obsidian/Controls/alert.obs', '@Obsidian/Controls/rockButton', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/component', './codeBox.obs', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/emailBox', '@Obsidian/Controls/textBox', '@Obsidian/Controls/inlineCheckBox', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/addressControl.obs', '@Obsidian/Controls/birthdayPicker', '@Obsidian/Controls/campusPicker.obs', '@Obsidian/Controls/datePartsPicker', '@Obsidian/Controls/genderDropDownList', '@Obsidian/Utility/rockDateTime', '@Obsidian/Enums/Blocks/Security/AccountEntry/accountEntryStep', '@Obsidian/Utility/block', '@Obsidian/Utility/http', '@Obsidian/Utility/url'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, onMounted, createTextVNode, openBlock, createElementBlock, Fragment, toDisplayString, createBlock, withCtx, createCommentVNode, computed, createElementVNode, renderSlot, renderList, createVNode, withDirectives, vModelRadio, ref, Alert, RockButton, BtnType, splitCamelCase, toTitleCase, useVModelPassthrough, CodeBox, RockForm, EmailBox, TextBox, InlineCheckBox, PhoneNumberBox, AddressControl, BirthdayPicker, CampusPicker, getDefaultDatePartsPickerModel, GenderDropDownList, RockDateTime, AccountEntryStep, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock, useHttp, removeCurrentUrlQueryParams;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            onMounted = module.onMounted;
            createTextVNode = module.createTextVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            toDisplayString = module.toDisplayString;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createCommentVNode = module.createCommentVNode;
            computed = module.computed;
            createElementVNode = module.createElementVNode;
            renderSlot = module.renderSlot;
            renderList = module.renderList;
            createVNode = module.createVNode;
            withDirectives = module.withDirectives;
            vModelRadio = module.vModelRadio;
            ref = module.ref;
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            BtnType = module.BtnType;
        }, function (module) {
            splitCamelCase = module.splitCamelCase;
            toTitleCase = module.toTitleCase;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            CodeBox = module["default"];
        }, function (module) {
            RockForm = module["default"];
        }, function (module) {
            EmailBox = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            InlineCheckBox = module["default"];
        }, function (module) {
            PhoneNumberBox = module["default"];
        }, function (module) {
            AddressControl = module["default"];
        }, function (module) {
            BirthdayPicker = module["default"];
        }, function (module) {
            CampusPicker = module["default"];
        }, function (module) {
            getDefaultDatePartsPickerModel = module.getDefaultDatePartsPickerModel;
        }, function (module) {
            GenderDropDownList = module["default"];
        }, function (module) {
            RockDateTime = module.RockDateTime;
        }, function (module) {
            AccountEntryStep = module.AccountEntryStep;
        }, function (module) {
            useConfigurationValues = module.useConfigurationValues;
            useInvokeBlockAction = module.useInvokeBlockAction;
            onConfigurationValuesChanged = module.onConfigurationValuesChanged;
            useReloadBlock = module.useReloadBlock;
        }, function (module) {
            useHttp = module.useHttp;
        }, function (module) {
            removeCurrentUrlQueryParams = module.removeCurrentUrlQueryParams;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main$a = defineComponent({
                name: 'completedStep.partial',
                props: {
                    disabled: {
                        type: Boolean,
                        required: false,
                        default: false
                    },
                    options: {
                        type: Object,
                        required: true
                    }
                },
                emits: ["navigate"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    function onContinueClicked() {
                        tryNavigate(props.options.redirectUrl);
                    }
                    function tryNavigate(url) {
                        if (url) {
                            emit("navigate", url);
                        }
                    }
                    onMounted(() => {
                        if (props.options.isRedirectAutomatic) {
                            tryNavigate(props.options.redirectUrl);
                        }
                    });
                    const __returned__ = { props, emit, onContinueClicked, tryNavigate, Alert, RockButton, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$7 = { key: 0 };
            const _hoisted_2$5 = createTextVNode("Continue");
            function render$a(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($props.options.isPlainCaption && $props.options.caption)
                        ? (openBlock(), createElementBlock("div", _hoisted_1$7, toDisplayString($props.options.caption), 1))
                        : ($props.options.caption)
                            ? (openBlock(), createBlock($setup["Alert"], {
                                key: 1,
                                alertType: "success"
                            }, {
                                default: withCtx(() => [
                                    createTextVNode(toDisplayString($props.options.caption), 1)
                                ]),
                                _: 1
                            }))
                            : createCommentVNode("v-if", true),
                    ($props.options.redirectUrl)
                        ? (openBlock(), createBlock($setup["RockButton"], {
                            key: 2,
                            btnType: $setup.BtnType.Primary,
                            disabled: $props.disabled,
                            onClick: $setup.onContinueClicked
                        }, {
                            default: withCtx(() => [
                                _hoisted_2$5
                            ]),
                            _: 1
                        }, 8, ["btnType", "disabled"]))
                        : createCommentVNode("v-if", true)
                ], 64));
            }
            const exportHelper$a = _sfc_main$a;
            for (const [key, val] of [["render", render$a]]) {
                exportHelper$a[key] = val;
            }

            const _sfc_main$9 = defineComponent({
                name: 'confirmationSentStep.partial',
                props: {
                    options: {
                        type: Object,
                        required: true
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const __returned__ = { props, Alert };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render$9(_ctx, _cache, $props, $setup, $data, $options) {
                return ($props.options.caption)
                    ? (openBlock(), createBlock($setup["Alert"], {
                        key: 0,
                        alertType: "warning"
                    }, {
                        default: withCtx(() => [
                            createTextVNode(toDisplayString($props.options.caption), 1)
                        ]),
                        _: 1
                    }))
                    : createCommentVNode("v-if", true);
            }
            const exportHelper$9 = _sfc_main$9;
            for (const [key, val] of [["render", render$9]]) {
                exportHelper$9[key] = val;
            }

            const _sfc_main$8 = defineComponent({
                name: 'simpleGrid.partial',
                props: {
                    items: {
                        type: Array,
                        required: false,
                        default: []
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const propertyNames = computed(() => {
                        var _a;
                        if (!((_a = props.items) === null || _a === void 0 ? void 0 : _a.length)) {
                            return [];
                        }
                        const firstTruthyItem = props.items.find(item => !!item && typeof item === "object");
                        return getPropertyNames(firstTruthyItem);
                    });
                    function getColumnSlotName(columnId) {
                        return `column-${columnId}`;
                    }
                    function getHeaderSlotName(columnId) {
                        return `header-${columnId}`;
                    }
                    function getProperties(item) {
                        if (!item) {
                            return [];
                        }
                        return Object.entries(item);
                    }
                    function getPropertyNames(item) {
                        const properties = getProperties(item);
                        if (!properties.length) {
                            return [];
                        }
                        return properties.map(([name, _value]) => name);
                    }
                    const __returned__ = { props, propertyNames, getColumnSlotName, getHeaderSlotName, getProperties, getPropertyNames, splitCamelCase, toTitleCase };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$6 = { class: "grid-table table table-bordered table-striped table-hover" };
            function render$8(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("table", _hoisted_1$6, [
                    createElementVNode("thead", null, [
                        createCommentVNode(" Implement <template v-slot=\"header\"></template> in parent to override the header template. "),
                        renderSlot(_ctx.$slots, "header", {}, () => [
                            createElementVNode("tr", null, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.propertyNames, (propertyName) => {
                                    return (openBlock(), createElementBlock(Fragment, null, [
                                        createCommentVNode(" Implement <template v-slot=\"header-<propertyName>\"></template> in parent to override the individual header cell templates. "),
                                        renderSlot(_ctx.$slots, $setup.getHeaderSlotName(propertyName), { propertyName: propertyName }, () => [
                                            createElementVNode("th", null, toDisplayString($setup.toTitleCase($setup.splitCamelCase(propertyName))), 1)
                                        ])
                                    ], 64));
                                }), 256))
                            ])
                        ])
                    ]),
                    createElementVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item) => {
                            return (openBlock(), createElementBlock(Fragment, null, [
                                createCommentVNode(" Implement <template v-slot=\"row\"></template> in parent to override the row template. "),
                                renderSlot(_ctx.$slots, "row", { item: item }, () => [
                                    createElementVNode("tr", null, [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.propertyNames, (propertyName) => {
                                            return (openBlock(), createElementBlock(Fragment, null, [
                                                createCommentVNode(" Implement <template v-slot=\"column-<propertyName>\"></template> in parent to override the individual row cell templates. "),
                                                renderSlot(_ctx.$slots, $setup.getColumnSlotName(propertyName), {
                                                    item: item,
                                                    propertyName: propertyName
                                                }, () => [
                                                    createElementVNode("td", null, toDisplayString(item[propertyName]), 1)
                                                ])
                                            ], 64));
                                        }), 256))
                                    ])
                                ])
                            ], 64));
                        }), 256))
                    ]),
                    createElementVNode("tfoot", null, [
                        createCommentVNode(" Implement <template v-slot=\"footer\"></template> in parent to override the footer template. "),
                        renderSlot(_ctx.$slots, "footer")
                    ])
                ]));
            }
            const exportHelper$8 = _sfc_main$8;
            for (const [key, val] of [["render", render$8]]) {
                exportHelper$8[key] = val;
            }

            const _sfc_main$7 = defineComponent({
                name: 'duplicatePersonSelectionStep.partial',
                props: {
                    modelValue: {
                        type: Object,
                        required: false,
                        default: null
                    },
                    disabled: {
                        type: Boolean,
                        required: false,
                        default: false
                    },
                    options: {
                        type: Object,
                        required: true
                    }
                },
                emits: ["update:modelValue", "movePrevious", "personSelected", "noPersonSelected"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalModelValue = useVModelPassthrough(props, "modelValue", emit);
                    function onNextClicked() {
                        if (internalModelValue.value) {
                            emit("personSelected");
                        }
                        else {
                            emit("noPersonSelected");
                        }
                    }
                    function onPreviousClicked() {
                        emit("movePrevious");
                    }
                    const __returned__ = { props, emit, internalModelValue, onNextClicked, onPreviousClicked, SimpleGrid: exportHelper$8, Alert, RockButton, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$5 = createElementVNode("tr", null, [
                createElementVNode("th", null, "You?"),
                createElementVNode("th", null, "Name")
            ], -1);
            const _hoisted_2$4 = ["disabled", "value"];
            const _hoisted_3$4 = { class: "radio" };
            const _hoisted_4$3 = ["disabled"];
            const _hoisted_5$1 = createElementVNode("span", { class: "label-text" }, [
                createElementVNode("strong", null, "None of these are me")
            ], -1);
            const _hoisted_6 = { class: "actions" };
            const _hoisted_7 = createTextVNode("Previous");
            const _hoisted_8 = createTextVNode("Next");
            function render$7(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($props.options.caption)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 0,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($props.options.caption), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    createVNode($setup["SimpleGrid"], {
                        items: $props.options.duplicatePeople
                    }, {
                        header: withCtx(() => [
                            _hoisted_1$5
                        ]),
                        row: withCtx(({ item }) => [
                            createElementVNode("tr", null, [
                                createElementVNode("td", null, [
                                    withDirectives(createElementVNode("input", {
                                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalModelValue) = $event)),
                                        disabled: $props.disabled,
                                        name: "DuplicatePerson",
                                        type: "radio",
                                        value: item
                                    }, null, 8, _hoisted_2$4), [
                                        [vModelRadio, $setup.internalModelValue]
                                    ])
                                ]),
                                createElementVNode("td", null, toDisplayString(item.fullName), 1)
                            ])
                        ]),
                        _: 1
                    }, 8, ["items"]),
                    createElementVNode("div", _hoisted_3$4, [
                        createElementVNode("label", null, [
                            withDirectives(createElementVNode("input", {
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.internalModelValue) = $event)),
                                disabled: $props.disabled,
                                name: "DuplicatePerson",
                                type: "radio",
                                value: null
                            }, null, 8, _hoisted_4$3), [
                                [vModelRadio, $setup.internalModelValue]
                            ]),
                            _hoisted_5$1
                        ])
                    ]),
                    createElementVNode("div", _hoisted_6, [
                        createVNode($setup["RockButton"], {
                            btnType: $setup.BtnType.Link,
                            disabled: $props.disabled,
                            onClick: $setup.onPreviousClicked
                        }, {
                            default: withCtx(() => [
                                _hoisted_7
                            ]),
                            _: 1
                        }, 8, ["btnType", "disabled"]),
                        createVNode($setup["RockButton"], {
                            btnType: $setup.BtnType.Primary,
                            disabled: $props.disabled,
                            onClick: $setup.onNextClicked
                        }, {
                            default: withCtx(() => [
                                _hoisted_8
                            ]),
                            _: 1
                        }, 8, ["btnType", "disabled"])
                    ])
                ], 64));
            }
            const exportHelper$7 = _sfc_main$7;
            for (const [key, val] of [["render", render$7]]) {
                exportHelper$7[key] = val;
            }

            const _sfc_main$6 = defineComponent({
                name: 'existingAccountStep.partial',
                props: {
                    disabled: {
                        type: Boolean,
                        required: false,
                        default: false
                    },
                    options: {
                        type: Object,
                        required: true
                    }
                },
                emits: ["movePrevious", "emailUsername", "sendToLogin"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    function onEmailUsernameClicked() {
                        emit("emailUsername");
                    }
                    function onPreviousClicked() {
                        emit("movePrevious");
                    }
                    function onSendToLoginClicked() {
                        emit("sendToLogin");
                    }
                    const __returned__ = { props, emit, onEmailUsernameClicked, onPreviousClicked, onSendToLoginClicked, Alert, RockButton, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$4 = { class: "actions" };
            const _hoisted_2$3 = createTextVNode("Previous");
            const _hoisted_3$3 = createTextVNode("Yes, send it");
            const _hoisted_4$2 = createTextVNode("No, just let me log in");
            function render$6(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($props.options.caption)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 0,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($props.options.caption), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    createElementVNode("div", _hoisted_1$4, [
                        createVNode($setup["RockButton"], {
                            btnType: $setup.BtnType.Link,
                            disabled: $props.disabled,
                            onClick: $setup.onPreviousClicked
                        }, {
                            default: withCtx(() => [
                                _hoisted_2$3
                            ]),
                            _: 1
                        }, 8, ["btnType", "disabled"]),
                        createVNode($setup["RockButton"], {
                            btnType: $setup.BtnType.Primary,
                            class: "ml-1",
                            disabled: $props.disabled,
                            onClick: $setup.onEmailUsernameClicked
                        }, {
                            default: withCtx(() => [
                                _hoisted_3$3
                            ]),
                            _: 1
                        }, 8, ["btnType", "disabled"]),
                        createVNode($setup["RockButton"], {
                            btnType: $setup.BtnType.Primary,
                            class: "ml-1",
                            disabled: $props.disabled,
                            onClick: $setup.onSendToLoginClicked
                        }, {
                            default: withCtx(() => [
                                _hoisted_4$2
                            ]),
                            _: 1
                        }, 8, ["btnType", "disabled"])
                    ])
                ], 64));
            }
            const exportHelper$6 = _sfc_main$6;
            for (const [key, val] of [["render", render$6]]) {
                exportHelper$6[key] = val;
            }

            const _sfc_main$5 = defineComponent({
                name: 'passwordlessConfirmationSentStep.partial',
                props: {
                    modelValue: {
                        type: String,
                        required: true
                    },
                    disabled: {
                        type: Boolean,
                        required: false,
                        default: false
                    },
                    options: {
                        type: Object,
                        required: true
                    }
                },
                emits: ["movePrevious", "submit", "update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = useVModelPassthrough(props, "modelValue", emit);
                    function onPreviousClicked() {
                        emit("movePrevious");
                    }
                    function onFormSubmitted() {
                        emit("submit");
                    }
                    const __returned__ = { props, emit, internalValue, onPreviousClicked, onFormSubmitted, CodeBox, Alert, RockButton, RockForm, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$3 = { class: "actions" };
            const _hoisted_2$2 = createTextVNode("Previous");
            const _hoisted_3$2 = createTextVNode("Complete Sign In");
            function render$5(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($props.options.caption)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 0,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($props.options.caption), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    createVNode($setup["RockForm"], { onSubmit: $setup.onFormSubmitted }, {
                        default: withCtx(() => [
                            createVNode($setup["CodeBox"], {
                                modelValue: $setup.internalValue,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalValue) = $event)),
                                modelModifiers: { capitalize: true },
                                disabled: $props.disabled,
                                maxLength: 6,
                                rules: "required"
                            }, null, 8, ["modelValue", "disabled"]),
                            createElementVNode("div", _hoisted_1$3, [
                                createVNode($setup["RockButton"], {
                                    btnType: $setup.BtnType.Link,
                                    disabled: $props.disabled,
                                    type: "button",
                                    onClick: $setup.onPreviousClicked
                                }, {
                                    default: withCtx(() => [
                                        _hoisted_2$2
                                    ]),
                                    _: 1
                                }, 8, ["btnType", "disabled"]),
                                createVNode($setup["RockButton"], {
                                    btnType: $setup.BtnType.Primary,
                                    disabled: $props.disabled,
                                    type: "submit"
                                }, {
                                    default: withCtx(() => [
                                        _hoisted_3$2
                                    ]),
                                    _: 1
                                }, 8, ["btnType", "disabled"])
                            ])
                        ]),
                        _: 1
                    })
                ], 64));
            }
            const exportHelper$5 = _sfc_main$5;
            for (const [key, val] of [["render", render$5]]) {
                exportHelper$5[key] = val;
            }

            const _sfc_main$4 = defineComponent({
                name: 'registrationStepAccountInfo.partial',
                props: {
                    modelValue: {
                        type: Object,
                        required: true
                    },
                    config: {
                        type: Object,
                        required: true
                    },
                    disabled: {
                        type: Boolean,
                        required: false,
                        default: false
                    },
                    isUsernameAvailable: {
                        type: Object,
                        required: false,
                        default: null
                    }
                },
                emits: ["checkUsernameAvailability", "update:isUsernameAvailable", "update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const usernameValidators = [
                        "required",
                        (value, _params) => {
                            if (typeof value !== "string" || !(value === null || value === void 0 ? void 0 : value.trim())) {
                                return `${usernameFieldLabel.value} is required.`;
                            }
                            if (validateUsernameRegex.value && !validateUsernameRegex.value.test(value)) {
                                return `${usernameFieldLabel.value} is invalid. ${props.config.usernameRegexDescription}`;
                            }
                            return true;
                        }
                    ];
                    const usernameValidationError = ref(null);
                    const isUsernameError = computed(() => !!usernameValidationError.value);
                    const isEmailRequiredForUsername = computed(() => props.config.isEmailRequiredForUsername);
                    const usernameFieldLabel = computed(() => props.config.usernameFieldLabel || "Username");
                    const validateUsernameRegex = computed((() => props.config.usernameRegex ? new RegExp(props.config.usernameRegex) : null));
                    const internalUsername = computed({
                        get() {
                            var _a, _b;
                            return (_b = (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.username) !== null && _b !== void 0 ? _b : "";
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { username: newValue }));
                        }
                    });
                    const internalPassword = computed({
                        get() {
                            var _a, _b;
                            return (_b = (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.password) !== null && _b !== void 0 ? _b : "";
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { password: newValue }));
                        }
                    });
                    const internalConfirmPassword = computed({
                        get() {
                            var _a, _b;
                            return (_b = (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.confirmPassword) !== null && _b !== void 0 ? _b : "";
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { confirmPassword: newValue }));
                        }
                    });
                    const confirmPasswordRules = computed(() => {
                        return `required|equalsfield:must match Password,${internalPassword.value}`;
                    });
                    const usernameValidationCaption = computed(() => {
                        if (usernameValidationError.value) {
                            return usernameValidationError.value;
                        }
                        else if (props.isUsernameAvailable) {
                            return `The ${usernameFieldLabel.value.toLowerCase()} you selected is available.`;
                        }
                        else if (props.isUsernameAvailable === false) {
                            return `The ${usernameFieldLabel.value.toLowerCase()} you selected is already in use.`;
                        }
                        else {
                            return "";
                        }
                    });
                    function onUsernameChanged() {
                        var _a;
                        if (!((_a = internalUsername.value) === null || _a === void 0 ? void 0 : _a.trim())) {
                            usernameValidationError.value = `${usernameFieldLabel.value} is required.`;
                            emit("update:isUsernameAvailable", null);
                        }
                        else if (validateUsernameRegex.value && !validateUsernameRegex.value.test(internalUsername.value)) {
                            usernameValidationError.value = `${usernameFieldLabel.value} is invalid. ${props.config.usernameRegexDescription}`;
                            emit("update:isUsernameAvailable", null);
                        }
                        else {
                            usernameValidationError.value = null;
                            if (!props.config.isUsernameAvailabilityCheckDisabled) {
                                emit("checkUsernameAvailability", internalUsername.value);
                            }
                        }
                    }
                    const __returned__ = { props, emit, usernameValidators, usernameValidationError, isUsernameError, isEmailRequiredForUsername, usernameFieldLabel, validateUsernameRegex, internalUsername, internalPassword, internalConfirmPassword, confirmPasswordRules, usernameValidationCaption, onUsernameChanged, Alert, EmailBox, TextBox };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$2 = createElementVNode("legend", null, "New Account", -1);
            function render$4(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("fieldset", null, [
                    _hoisted_1$2,
                    (!$setup.isEmailRequiredForUsername)
                        ? (openBlock(), createBlock($setup["TextBox"], {
                            key: 0,
                            modelValue: $setup.internalUsername,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalUsername) = $event)),
                            disabled: $props.disabled,
                            label: $setup.usernameFieldLabel,
                            rules: $setup.usernameValidators,
                            onChange: $setup.onUsernameChanged
                        }, null, 8, ["modelValue", "disabled", "label"]))
                        : (openBlock(), createBlock($setup["EmailBox"], {
                            key: 1,
                            modelValue: $setup.internalUsername,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.internalUsername) = $event)),
                            disabled: $props.disabled,
                            label: "Email",
                            rules: "required"
                        }, null, 8, ["modelValue", "disabled"])),
                    ($setup.usernameValidationCaption)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 2,
                            alertType: !$props.isUsernameAvailable || $setup.isUsernameError ? 'warning' : 'success'
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.usernameValidationCaption), 1)
                            ]),
                            _: 1
                        }, 8, ["alertType"]))
                        : createCommentVNode("v-if", true),
                    createVNode($setup["TextBox"], {
                        modelValue: $setup.internalPassword,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.internalPassword) = $event)),
                        disabled: $props.disabled,
                        label: "Password",
                        rules: "required",
                        type: "password"
                    }, null, 8, ["modelValue", "disabled"]),
                    createVNode($setup["TextBox"], {
                        modelValue: $setup.internalConfirmPassword,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.internalConfirmPassword) = $event)),
                        disabled: $props.disabled,
                        label: "Confirm Password",
                        rules: $setup.confirmPasswordRules,
                        type: "password"
                    }, null, 8, ["modelValue", "disabled", "rules"])
                ]));
            }
            const exportHelper$4 = _sfc_main$4;
            for (const [key, val] of [["render", render$4]]) {
                exportHelper$4[key] = val;
            }

            const _sfc_main$3 = defineComponent({
                name: 'phoneNumberDetails.partial',
                props: {
                    modelValue: {
                        type: Object,
                        required: true
                    },
                    disabled: {
                        type: Boolean,
                        required: false,
                        default: false
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalPhoneNumber = computed({
                        get() {
                            var _a;
                            return (_a = props.modelValue.phoneNumber) !== null && _a !== void 0 ? _a : "";
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { phoneNumber: newValue }));
                        }
                    });
                    const internalCountryCode = computed({
                        get() {
                            var _a;
                            return (_a = props.modelValue.countryCode) !== null && _a !== void 0 ? _a : "";
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { countryCode: newValue }));
                        }
                    });
                    const internalIsSmsEnabled = computed({
                        get() {
                            return props.modelValue.isSmsEnabled;
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { isSmsEnabled: newValue }));
                        }
                    });
                    const internalIsUnlisted = computed({
                        get() {
                            return props.modelValue.isUnlisted;
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { isUnlisted: newValue }));
                        }
                    });
                    const phoneNumberRules = computed(() => props.modelValue.isRequired ? "required" : "");
                    const __returned__ = { props, emit, internalPhoneNumber, internalCountryCode, internalIsSmsEnabled, internalIsUnlisted, phoneNumberRules, InlineCheckBox, PhoneNumberBox };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render$3(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    createVNode($setup["PhoneNumberBox"], {
                        modelValue: $setup.internalPhoneNumber,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalPhoneNumber) = $event)),
                        countryCode: $setup.internalCountryCode,
                        "onUpdate:countryCode": _cache[1] || (_cache[1] = $event => (($setup.internalCountryCode) = $event)),
                        disabled: $props.disabled,
                        label: $props.modelValue.label,
                        rules: $setup.phoneNumberRules
                    }, null, 8, ["modelValue", "countryCode", "disabled", "label", "rules"]),
                    createVNode($setup["InlineCheckBox"], {
                        disabled: $props.disabled,
                        label: "SMS",
                        modelValue: $setup.internalIsSmsEnabled,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.internalIsSmsEnabled) = $event))
                    }, null, 8, ["disabled", "modelValue"]),
                    createVNode($setup["InlineCheckBox"], {
                        disabled: $props.disabled,
                        label: "Unlisted",
                        modelValue: $setup.internalIsUnlisted,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.internalIsUnlisted) = $event))
                    }, null, 8, ["disabled", "modelValue"])
                ], 64));
            }
            const exportHelper$3 = _sfc_main$3;
            for (const [key, val] of [["render", render$3]]) {
                exportHelper$3[key] = val;
            }

            const _sfc_main$2 = defineComponent({
                name: 'registrationStepPersonInfo.partial',
                props: {
                    modelValue: {
                        type: Object,
                        required: true
                    },
                    config: {
                        type: Object,
                        required: true
                    },
                    disabled: {
                        type: Boolean,
                        required: false,
                        default: false
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const arePhoneNumbersShown = computed(() => props.config.arePhoneNumbersShown);
                    const campusPickerLabel = computed(() => props.config.campusPickerLabel || "Campus");
                    const isAddressShown = computed(() => props.config.isAddressShown);
                    const isAddressRequired = computed(() => props.config.isAddressRequired);
                    const isCampusPickerShown = computed(() => props.config.isCampusPickerShown);
                    const isEmailHidden = computed(() => props.config.isEmailHidden);
                    const internalFirstName = computed({
                        get() {
                            var _a, _b;
                            return (_b = (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.firstName) !== null && _b !== void 0 ? _b : "";
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { firstName: newValue }));
                        }
                    });
                    const internalLastName = computed({
                        get() {
                            var _a, _b;
                            return (_b = (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.lastName) !== null && _b !== void 0 ? _b : "";
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { lastName: newValue }));
                        }
                    });
                    const internalEmail = computed({
                        get() {
                            var _a, _b;
                            return (_b = (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.email) !== null && _b !== void 0 ? _b : "";
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { email: newValue }));
                        }
                    });
                    const internalGender = computed({
                        get() {
                            var _a, _b;
                            return (_b = (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.gender) !== null && _b !== void 0 ? _b : 0;
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { gender: newValue }));
                        }
                    });
                    const internalBirthday = computed({
                        get() {
                            var _a, _b;
                            return (_b = (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.birthday) !== null && _b !== void 0 ? _b : getDefaultDatePartsPickerModel();
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { birthday: newValue }));
                        }
                    });
                    const internalPhoneNumbers = computed({
                        get() {
                            var _a, _b;
                            return (_b = (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.phoneNumbers) !== null && _b !== void 0 ? _b : [];
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { phoneNumbers: newValue }));
                        }
                    });
                    const internalAddress = computed({
                        get() {
                            var _a;
                            return ((_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.address) || {};
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { address: newValue }));
                        }
                    });
                    const addressRules = computed(() => isAddressRequired.value ? "required" : "");
                    const internalArePhoneNumbersShown = computed(() => arePhoneNumbersShown.value && internalPhoneNumbers.value.some(p => !p.isHidden));
                    function isListItemBag(object) {
                        return !!object && typeof object === "object" && "value" in object;
                    }
                    function onCampusChanged(value) {
                        if (isListItemBag(value)) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { campus: value.value }));
                        }
                        else {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { campus: null }));
                        }
                    }
                    const __returned__ = { props, emit, arePhoneNumbersShown, campusPickerLabel, isAddressShown, isAddressRequired, isCampusPickerShown, isEmailHidden, internalFirstName, internalLastName, internalEmail, internalGender, internalBirthday, internalPhoneNumbers, internalAddress, addressRules, internalArePhoneNumbersShown, isListItemBag, onCampusChanged, PhoneNumberDetails: exportHelper$3, Address: AddressControl, BirthdayPicker, CampusPicker, EmailBox, GenderDropDownList, TextBox };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$1 = createElementVNode("legend", null, "Your Information", -1);
            const _hoisted_2$1 = { key: 0 };
            const _hoisted_3$1 = { key: 0 };
            const _hoisted_4$1 = { key: 1 };
            const _hoisted_5 = createElementVNode("legend", null, "Address", -1);
            function render$2(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", null, [
                    createElementVNode("fieldset", null, [
                        _hoisted_1$1,
                        createVNode($setup["TextBox"], {
                            modelValue: $setup.internalFirstName,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalFirstName) = $event)),
                            disabled: $props.disabled,
                            label: "First Name",
                            rules: "required"
                        }, null, 8, ["modelValue", "disabled"]),
                        createVNode($setup["TextBox"], {
                            modelValue: $setup.internalLastName,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.internalLastName) = $event)),
                            disabled: $props.disabled,
                            label: "Last Name",
                            rules: "required"
                        }, null, 8, ["modelValue", "disabled"]),
                        (!$setup.isEmailHidden)
                            ? (openBlock(), createBlock($setup["EmailBox"], {
                                key: 0,
                                modelValue: $setup.internalEmail,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.internalEmail) = $event)),
                                disabled: $props.disabled,
                                label: "Email",
                                rules: "required"
                            }, null, 8, ["modelValue", "disabled"]))
                            : createCommentVNode("v-if", true),
                        createVNode($setup["GenderDropDownList"], {
                            modelValue: $setup.internalGender,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.internalGender) = $event)),
                            disabled: $props.disabled
                        }, null, 8, ["modelValue", "disabled"]),
                        createVNode($setup["BirthdayPicker"], {
                            modelValue: $setup.internalBirthday,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.internalBirthday) = $event)),
                            disabled: $props.disabled,
                            label: "Birthday",
                            rules: "required"
                        }, null, 8, ["modelValue", "disabled"])
                    ]),
                    ($setup.internalArePhoneNumbersShown)
                        ? (openBlock(), createElementBlock("fieldset", _hoisted_2$1, [
                            ($setup.internalPhoneNumbers.length > 1)
                                ? (openBlock(), createElementBlock("legend", _hoisted_3$1, "Phone Numbers"))
                                : createCommentVNode("v-if", true),
                            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.internalPhoneNumbers, (value, key) => {
                                return (openBlock(), createElementBlock(Fragment, null, [
                                    (!value.isHidden)
                                        ? (openBlock(), createBlock($setup["PhoneNumberDetails"], {
                                            key: 0,
                                            modelValue: $setup.internalPhoneNumbers[key],
                                            "onUpdate:modelValue": $event => (($setup.internalPhoneNumbers[key]) = $event),
                                            disabled: $props.disabled
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]))
                                        : createCommentVNode("v-if", true)
                                ], 64));
                            }), 256))
                        ]))
                        : createCommentVNode("v-if", true),
                    ($setup.isAddressShown)
                        ? (openBlock(), createElementBlock("fieldset", _hoisted_4$1, [
                            _hoisted_5,
                            createVNode($setup["Address"], {
                                modelValue: $setup.internalAddress,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.internalAddress) = $event)),
                                disabled: $props.disabled,
                                rules: $setup.addressRules
                            }, null, 8, ["modelValue", "disabled", "rules"])
                        ]))
                        : createCommentVNode("v-if", true),
                    ($setup.isCampusPickerShown)
                        ? (openBlock(), createBlock($setup["CampusPicker"], {
                            key: 2,
                            disabled: $props.disabled,
                            label: $setup.campusPickerLabel,
                            "onUpdate:modelValue": $setup.onCampusChanged
                        }, null, 8, ["disabled", "label"]))
                        : createCommentVNode("v-if", true)
                ]));
            }
            const exportHelper$2 = _sfc_main$2;
            for (const [key, val] of [["render", render$2]]) {
                exportHelper$2[key] = val;
            }

            var ValidationErrorMessages;
            (function (ValidationErrorMessages) {
                ValidationErrorMessages["MinimumAge"] = "We are sorry, you must be at least {0} years old to create an account.";
            })(ValidationErrorMessages || (ValidationErrorMessages = {}));
            const _sfc_main$1 = defineComponent({
                name: 'registrationStep.partial',
                props: {
                    config: {
                        type: Object,
                        required: true
                    },
                    disabled: {
                        type: Boolean,
                        required: false,
                        default: false
                    },
                    isUsernameAvailable: {
                        type: Object,
                        required: false,
                        default: null
                    },
                    modelValue: {
                        type: Object,
                        required: true
                    }
                },
                emits: ["checkUsernameAvailability", "error", "register", "update:isUsernameAvailable", "update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const fullName = ref("");
                    const shouldUsernameUpdateSetPersonInfoEmail = computed(() => props.config.isEmailRequiredForUsername);
                    const internalIsUsernameAvailable = useVModelPassthrough(props, "isUsernameAvailable", emit);
                    const internalAccountInfo = computed({
                        get() {
                            return props.modelValue.accountInfo;
                        },
                        set(newValue) {
                            var _a;
                            let modelValue;
                            if (shouldUsernameUpdateSetPersonInfoEmail.value && ((_a = props.modelValue.personInfo) === null || _a === void 0 ? void 0 : _a.email) !== (newValue === null || newValue === void 0 ? void 0 : newValue.username)) {
                                modelValue = Object.assign(Object.assign({}, props.modelValue), { accountInfo: newValue, personInfo: Object.assign(Object.assign({}, props.modelValue.personInfo), { email: newValue === null || newValue === void 0 ? void 0 : newValue.username }) });
                            }
                            else {
                                modelValue = Object.assign(Object.assign({}, props.modelValue), { accountInfo: newValue });
                            }
                            emit("update:modelValue", modelValue);
                        }
                    });
                    const internalPersonInfo = computed({
                        get() {
                            return props.modelValue.personInfo;
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { personInfo: newValue }));
                        }
                    });
                    function onCheckUsernameAvailability(username) {
                        if (!props.config.isUsernameAvailabilityCheckDisabled) {
                            emit("checkUsernameAvailability", username);
                        }
                    }
                    function onFormSubmit() {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (isPersonInfoValid()) {
                                emit("register");
                            }
                        });
                    }
                    function isOldEnough() {
                        var _a;
                        if (props.config.minimumAge <= 0) {
                            return true;
                        }
                        const birthday = (_a = internalPersonInfo.value) === null || _a === void 0 ? void 0 : _a.birthday;
                        if (!birthday) {
                            emit("error", "Birthday is required");
                            return false;
                        }
                        const threshold = RockDateTime.now().addYears(-props.config.minimumAge);
                        const birthdate = RockDateTime.fromParts(birthday.year, birthday.month, birthday.day);
                        if (!birthdate || birthdate.isLaterThan(threshold)) {
                            emit("error", ValidationErrorMessages.MinimumAge.replace("{0}", props.config.minimumAge.toString()));
                            return false;
                        }
                        return true;
                    }
                    function isPersonInfoValid() {
                        return isOldEnough();
                    }
                    const __returned__ = { props, emit, ValidationErrorMessages, fullName, shouldUsernameUpdateSetPersonInfoEmail, internalIsUsernameAvailable, internalAccountInfo, internalPersonInfo, onCheckUsernameAvailability, onFormSubmit, isOldEnough, isPersonInfoValid, AccountInfo: exportHelper$4, PersonInfo: exportHelper$2, RockButton, RockForm, TextBox, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "row" };
            const _hoisted_2 = { class: "row" };
            const _hoisted_3 = { class: "col-md-12" };
            const _hoisted_4 = createTextVNode("Next");
            function render$1(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["RockForm"], { onSubmit: $setup.onFormSubmit }, {
                    default: withCtx(() => [
                        createVNode($setup["TextBox"], {
                            modelValue: $setup.fullName,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.fullName) = $event)),
                            class: "rock-fullname",
                            disabled: $props.disabled,
                            name: "name",
                            placeholder: "Please enter name (Required)"
                        }, null, 8, ["modelValue", "disabled"]),
                        createElementVNode("div", _hoisted_1, [
                            (!$props.config.isAccountInfoHidden)
                                ? (openBlock(), createBlock($setup["AccountInfo"], {
                                    key: 0,
                                    modelValue: $setup.internalAccountInfo,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.internalAccountInfo) = $event)),
                                    isUsernameAvailable: $setup.internalIsUsernameAvailable,
                                    "onUpdate:isUsernameAvailable": _cache[2] || (_cache[2] = $event => (($setup.internalIsUsernameAvailable) = $event)),
                                    class: "col-md-6",
                                    config: $props.config,
                                    disabled: $props.disabled,
                                    onCheckUsernameAvailability: $setup.onCheckUsernameAvailability
                                }, null, 8, ["modelValue", "isUsernameAvailable", "config", "disabled"]))
                                : createCommentVNode("v-if", true),
                            createVNode($setup["PersonInfo"], {
                                modelValue: $setup.internalPersonInfo,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.internalPersonInfo) = $event)),
                                class: "col-md-6",
                                config: $props.config,
                                disabled: $props.disabled
                            }, null, 8, ["modelValue", "config", "disabled"])
                        ]),
                        createElementVNode("div", _hoisted_2, [
                            createElementVNode("div", _hoisted_3, [
                                createVNode($setup["RockButton"], {
                                    btnType: $setup.BtnType.Primary,
                                    disabled: $props.disabled,
                                    type: "submit"
                                }, {
                                    default: withCtx(() => [
                                        _hoisted_4
                                    ]),
                                    _: 1
                                }, 8, ["btnType", "disabled"])
                            ])
                        ])
                    ]),
                    _: 1
                }));
            }
            const exportHelper$1 = _sfc_main$1;
            for (const [key, val] of [["render", render$1]]) {
                exportHelper$1[key] = val;
            }

            const _sfc_main = defineComponent({
                name: 'accountEntry',
                setup(__props, { expose }) {
                    var _a;
                    expose();
                    const config = useConfigurationValues();
                    const invokeBlockAction = useInvokeBlockAction();
                    const http = useHttp();
                    removeCurrentUrlQueryParams("State");
                    const errorMessage = ref();
                    const stepStack = ref([]);
                    const accountEntryStep = computed(() => stepStack.value.length ? stepStack.value[stepStack.value.length - 1] : null);
                    const registrationInfo = ref({
                        accountInfo: {
                            password: "",
                            username: ""
                        },
                        personInfo: {
                            birthday: {
                                year: 0,
                                month: 0,
                                day: 0
                            },
                            email: config.email || "",
                            firstName: "",
                            gender: 0,
                            lastName: "",
                            phoneNumbers: [...(_a = config.phoneNumbers) !== null && _a !== void 0 ? _a : []]
                        },
                        fullName: null,
                        selectedPersonId: null,
                        state: config.state
                    });
                    const isUsernameAvailable = ref(null);
                    const duplicatePersonSelectionStepOptions = ref({});
                    const internalSelectedDuplicatePerson = ref(null);
                    const selectedDuplicatePerson = computed({
                        get() {
                            return internalSelectedDuplicatePerson.value;
                        },
                        set(newValue) {
                            internalSelectedDuplicatePerson.value = newValue;
                            registrationInfo.value.selectedPersonId = newValue === null || newValue === void 0 ? void 0 : newValue.id;
                        }
                    });
                    const passwordlessConfirmationSentStepOptions = ref({});
                    const passwordlessConfirmationCode = ref("");
                    const existingAccountStepOptions = ref({});
                    const confirmationSentStepOptions = ref({});
                    const completedStepOptions = ref({
                        isPlainCaption: false,
                        isRedirectAutomatic: false
                    });
                    const isNavigating = ref(false);
                    const isRegistering = ref(false);
                    const isSendingForgotUsername = ref(false);
                    const step = computed(() => ({
                        isCompleted: accountEntryStep.value === AccountEntryStep.Completed,
                        isConfirmationSent: accountEntryStep.value === AccountEntryStep.ConfirmationSent,
                        isDuplicatePersonSelection: accountEntryStep.value === AccountEntryStep.DuplicatePersonSelection,
                        isExistingAccount: accountEntryStep.value === AccountEntryStep.ExistingAccount,
                        isRegistration: accountEntryStep.value === AccountEntryStep.Registration,
                        isPasswordlessConfirmationSent: accountEntryStep.value === AccountEntryStep.PasswordlessConfirmationSent
                    }));
                    const sentLoginCaption = computed(() => {
                        return config.sentLoginCaption || "Your username has been emailed to you. If you've forgotten your password, the email includes a link to reset your password.";
                    });
                    function onCheckUsernameAvailability(username) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (config.isUsernameAvailabilityCheckDisabled) {
                                isUsernameAvailable.value = null;
                            }
                            else {
                                const response = yield http.get("/api/userlogins/available", { username: username });
                                isUsernameAvailable.value = response.data;
                            }
                        });
                    }
                    function onDuplicatePersonSelected() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            registrationInfo.value.selectedPersonId = (_a = selectedDuplicatePerson.value) === null || _a === void 0 ? void 0 : _a.id;
                            yield register();
                        });
                    }
                    function onDuplicatePersonSelectionStepMovePrevious() {
                        selectedDuplicatePerson.value = null;
                        onMovePrevious();
                    }
                    function onEmailUsername() {
                        var _a, _b, _c;
                        return __awaiter(this, void 0, void 0, function* () {
                            try {
                                isSendingForgotUsername.value = true;
                                const bag = {
                                    personId: (_a = registrationInfo.value.selectedPersonId) !== null && _a !== void 0 ? _a : 0,
                                    email: (_b = registrationInfo.value.personInfo) === null || _b === void 0 ? void 0 : _b.email,
                                    lastName: (_c = registrationInfo.value.personInfo) === null || _c === void 0 ? void 0 : _c.lastName
                                };
                                const result = yield invokeBlockAction("ForgotUsername", { bag });
                                if (!(result === null || result === void 0 ? void 0 : result.isSuccess)) {
                                    showError((result === null || result === void 0 ? void 0 : result.errorMessage) || "An unexpected error occurred.");
                                    return;
                                }
                                showCompletedStepNext({
                                    isPlainCaption: true,
                                    caption: sentLoginCaption.value,
                                    isRedirectAutomatic: false
                                });
                            }
                            finally {
                                isSendingForgotUsername.value = false;
                            }
                        });
                    }
                    function onMovePrevious() {
                        movePrevious();
                    }
                    function onNavigate(url) {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield navigate(url);
                        });
                    }
                    function onNoDuplicatePersonSelected() {
                        return __awaiter(this, void 0, void 0, function* () {
                            registrationInfo.value.selectedPersonId = 0;
                            yield register();
                        });
                    }
                    function onPasswordlessConfirmationSentStepMovePrevious() {
                        passwordlessConfirmationCode.value = "";
                        registrationInfo.value.code = "";
                        movePrevious();
                    }
                    function onPasswordlessConfirmationSubmitted() {
                        return __awaiter(this, void 0, void 0, function* () {
                            registrationInfo.value.code = passwordlessConfirmationCode.value;
                            yield register();
                        });
                    }
                    function onRegister() {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield register();
                        });
                    }
                    function onSendToLogin() {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield navigate(config.loginPageUrl || "/Login");
                        });
                    }
                    function clearError() {
                        errorMessage.value = null;
                    }
                    function movePrevious() {
                        if (stepStack.value.length) {
                            stepStack.value.splice(stepStack.value.length - 1);
                        }
                        else {
                            showRegistrationStepNext();
                        }
                    }
                    function navigate(url) {
                        return __awaiter(this, void 0, void 0, function* () {
                            isNavigating.value = true;
                            window.location.href = url;
                            return new Promise((_resolve, _reject) => {
                            });
                        });
                    }
                    function register() {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, function* () {
                            try {
                                isRegistering.value = true;
                                clearError();
                                isUsernameAvailable.value = null;
                                const response = yield invokeBlockAction("Register", { box: registrationInfo.value });
                                if (((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.step) || ((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.step) === AccountEntryStep.Registration) {
                                    switch (response.data.step) {
                                        case AccountEntryStep.Completed: {
                                            showCompletedStepNext(response.data.completedStepBag);
                                            break;
                                        }
                                        case AccountEntryStep.ConfirmationSent: {
                                            showConfirmationSentStepNext(response.data.confirmationSentStepBag);
                                            break;
                                        }
                                        case AccountEntryStep.DuplicatePersonSelection: {
                                            showDuplicatePersonSelectionStepNext(response.data.duplicatePersonSelectionStepBag);
                                            break;
                                        }
                                        case AccountEntryStep.PasswordlessConfirmationSent: {
                                            showPasswordlessConfirmationSentStepNext(response.data.passwordlessConfirmationSentStepBag);
                                            break;
                                        }
                                        case AccountEntryStep.ExistingAccount: {
                                            showExistingAccountStepNext(response.data.existingAccountStepBag);
                                            break;
                                        }
                                        case AccountEntryStep.Registration: {
                                            showRegistrationStepNext();
                                            break;
                                        }
                                    }
                                }
                                else {
                                    showError((response === null || response === void 0 ? void 0 : response.errorMessage) || "An unexpected error occurred");
                                }
                            }
                            finally {
                                isRegistering.value = false;
                            }
                        });
                    }
                    function showCompletedStepNext(options) {
                        if (options) {
                            completedStepOptions.value = options;
                        }
                        stepStack.value.push(AccountEntryStep.Completed);
                    }
                    function showConfirmationSentStepNext(options) {
                        if (options) {
                            confirmationSentStepOptions.value = options;
                        }
                        stepStack.value.push(AccountEntryStep.ConfirmationSent);
                    }
                    function showDuplicatePersonSelectionStepNext(options) {
                        if (options) {
                            duplicatePersonSelectionStepOptions.value = options;
                            selectedDuplicatePerson.value = null;
                        }
                        stepStack.value.push(AccountEntryStep.DuplicatePersonSelection);
                    }
                    function showPasswordlessConfirmationSentStepNext(options) {
                        if (options) {
                            passwordlessConfirmationSentStepOptions.value = options;
                            passwordlessConfirmationCode.value = "";
                            registrationInfo.value.state = options.state;
                        }
                        stepStack.value.push(AccountEntryStep.PasswordlessConfirmationSent);
                    }
                    function showExistingAccountStepNext(options) {
                        if (options) {
                            existingAccountStepOptions.value = options;
                        }
                        stepStack.value.push(AccountEntryStep.ExistingAccount);
                    }
                    function showError(error) {
                        errorMessage.value = error;
                    }
                    function showRegistrationStepNext() {
                        selectedDuplicatePerson.value = null;
                        duplicatePersonSelectionStepOptions.value = {};
                        stepStack.value.push(AccountEntryStep.Registration);
                    }
                    showRegistrationStepNext();
                    onConfigurationValuesChanged(useReloadBlock());
                    const __returned__ = { config, invokeBlockAction, http, errorMessage, stepStack, accountEntryStep, registrationInfo, isUsernameAvailable, duplicatePersonSelectionStepOptions, internalSelectedDuplicatePerson, selectedDuplicatePerson, passwordlessConfirmationSentStepOptions, passwordlessConfirmationCode, existingAccountStepOptions, confirmationSentStepOptions, completedStepOptions, isNavigating, isRegistering, isSendingForgotUsername, step, sentLoginCaption, onCheckUsernameAvailability, onDuplicatePersonSelected, onDuplicatePersonSelectionStepMovePrevious, onEmailUsername, onMovePrevious, onNavigate, onNoDuplicatePersonSelected, onPasswordlessConfirmationSentStepMovePrevious, onPasswordlessConfirmationSubmitted, onRegister, onSendToLogin, clearError, movePrevious, navigate, register, showCompletedStepNext, showConfirmationSentStepNext, showDuplicatePersonSelectionStepNext, showPasswordlessConfirmationSentStepNext, showExistingAccountStepNext, showError, showRegistrationStepNext, CompletedStep: exportHelper$a, ConfirmationSentStep: exportHelper$9, DuplicatePersonSelectionStep: exportHelper$7, ExistingAccountStep: exportHelper$6, PasswordlessConfirmationSentStep: exportHelper$5, RegistrationStep: exportHelper$1, Alert };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($setup.errorMessage)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 0,
                            alertType: "validation",
                            innerHTML: $setup.errorMessage
                        }, null, 8, ["innerHTML"]))
                        : createCommentVNode("v-if", true),
                    ($setup.step.isRegistration)
                        ? (openBlock(), createBlock($setup["RegistrationStep"], {
                            key: 1,
                            modelValue: $setup.registrationInfo,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.registrationInfo) = $event)),
                            isUsernameAvailable: $setup.isUsernameAvailable,
                            "onUpdate:isUsernameAvailable": _cache[1] || (_cache[1] = $event => (($setup.isUsernameAvailable) = $event)),
                            config: $setup.config,
                            disabled: $setup.isRegistering || $setup.isNavigating,
                            onCheckUsernameAvailability: $setup.onCheckUsernameAvailability,
                            onError: $setup.showError,
                            onRegister: $setup.onRegister
                        }, null, 8, ["modelValue", "isUsernameAvailable", "config", "disabled"]))
                        : ($setup.step.isDuplicatePersonSelection)
                            ? (openBlock(), createBlock($setup["DuplicatePersonSelectionStep"], {
                                key: 2,
                                modelValue: $setup.selectedDuplicatePerson,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.selectedDuplicatePerson) = $event)),
                                disabled: $setup.isRegistering || $setup.isNavigating,
                                options: $setup.duplicatePersonSelectionStepOptions,
                                onMovePrevious: _cache[3] || (_cache[3] = $event => ($setup.onDuplicatePersonSelectionStepMovePrevious())),
                                onPersonSelected: $setup.onDuplicatePersonSelected,
                                onNoPersonSelected: $setup.onNoDuplicatePersonSelected
                            }, null, 8, ["modelValue", "disabled", "options"]))
                            : ($setup.step.isPasswordlessConfirmationSent)
                                ? (openBlock(), createBlock($setup["PasswordlessConfirmationSentStep"], {
                                    key: 3,
                                    modelValue: $setup.passwordlessConfirmationCode,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.passwordlessConfirmationCode) = $event)),
                                    disabled: $setup.isRegistering || $setup.isNavigating,
                                    options: $setup.passwordlessConfirmationSentStepOptions,
                                    onMovePrevious: _cache[5] || (_cache[5] = $event => ($setup.onPasswordlessConfirmationSentStepMovePrevious())),
                                    onSubmit: $setup.onPasswordlessConfirmationSubmitted
                                }, null, 8, ["modelValue", "disabled", "options"]))
                                : ($setup.step.isExistingAccount)
                                    ? (openBlock(), createBlock($setup["ExistingAccountStep"], {
                                        key: 4,
                                        disabled: $setup.isSendingForgotUsername || $setup.isRegistering || $setup.isNavigating,
                                        options: $setup.existingAccountStepOptions,
                                        onMovePrevious: _cache[6] || (_cache[6] = $event => ($setup.onMovePrevious())),
                                        onEmailUsername: $setup.onEmailUsername,
                                        onSendToLogin: $setup.onSendToLogin
                                    }, null, 8, ["disabled", "options"]))
                                    : ($setup.step.isConfirmationSent)
                                        ? (openBlock(), createBlock($setup["ConfirmationSentStep"], {
                                            key: 5,
                                            options: $setup.confirmationSentStepOptions
                                        }, null, 8, ["options"]))
                                        : ($setup.step.isCompleted)
                                            ? (openBlock(), createBlock($setup["CompletedStep"], {
                                                key: 6,
                                                disabled: $setup.isRegistering || $setup.isNavigating,
                                                options: $setup.completedStepOptions,
                                                onNavigate: _cache[7] || (_cache[7] = $event => ($setup.onNavigate($event)))
                                            }, null, 8, ["disabled", "options"]))
                                            : createCommentVNode("v-if", true)
                ], 64));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
