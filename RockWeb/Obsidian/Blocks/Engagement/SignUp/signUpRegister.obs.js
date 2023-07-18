System.register(['tslib', 'vue', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/emailBox', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/textBox', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockLabel', '@Obsidian/Controls/alert.obs', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/radioButtonList', '@Obsidian/Controls/loading', '@Obsidian/Controls/rockForm', '@Obsidian/Enums/Blocks/Engagement/SignUp/registerMode', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/block'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, computed, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString, createVNode, createTextVNode, renderList, createBlock, withCtx, createCommentVNode, ref, CheckBox, EmailBox, PhoneNumberBox, TextBox, RockButton, RockLabel, Alert, CheckBoxList, RadioButtonList, Loading, RockForm, RegisterMode, BtnType, useConfigurationValues, useInvokeBlockAction, useReloadBlock, onConfigurationValuesChanged;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            createElementVNode = module.createElementVNode;
            toDisplayString = module.toDisplayString;
            createVNode = module.createVNode;
            createTextVNode = module.createTextVNode;
            renderList = module.renderList;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createCommentVNode = module.createCommentVNode;
            ref = module.ref;
        }, function (module) {
            CheckBox = module["default"];
        }, function (module) {
            EmailBox = module["default"];
        }, function (module) {
            PhoneNumberBox = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            RockLabel = module["default"];
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            CheckBoxList = module["default"];
        }, function (module) {
            RadioButtonList = module["default"];
        }, function (module) {
            Loading = module["default"];
        }, function (module) {
            RockForm = module["default"];
        }, function (module) {
            RegisterMode = module.RegisterMode;
        }, function (module) {
            BtnType = module.BtnType;
        }, function (module) {
            useConfigurationValues = module.useConfigurationValues;
            useInvokeBlockAction = module.useInvokeBlockAction;
            useReloadBlock = module.useReloadBlock;
            onConfigurationValuesChanged = module.onConfigurationValuesChanged;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main$5 = defineComponent({
                name: 'registerIndividual.partial',
                props: {
                    registrant: {
                        type: Object,
                        required: true
                    },
                    title: {
                        type: String,
                        required: true
                    },
                    requireEmail: {
                        type: Boolean,
                        required: true
                    },
                    requireMobilePhone: {
                        type: Boolean,
                        required: true
                    },
                    disabled: {
                        type: Boolean,
                        default: false
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const firstName = computed({
                        get() {
                            var _a;
                            return (_a = props.registrant.firstName) !== null && _a !== void 0 ? _a : "";
                        },
                        set(newValue) {
                            props.registrant.firstName = newValue;
                        }
                    });
                    const lastName = computed({
                        get() {
                            var _a;
                            return (_a = props.registrant.lastName) !== null && _a !== void 0 ? _a : "";
                        },
                        set(newValue) {
                            props.registrant.lastName = newValue;
                        }
                    });
                    const nameRules = computed(() => {
                        return props.registrant.firstName || props.registrant.lastName
                            ? "required"
                            : "";
                    });
                    const email = computed({
                        get() {
                            var _a;
                            return (_a = props.registrant.email) !== null && _a !== void 0 ? _a : "";
                        },
                        set(newValue) {
                            props.registrant.email = newValue;
                        }
                    });
                    const emailRules = computed(() => {
                        return props.requireEmail ? "required" : "";
                    });
                    const mobilePhoneNumber = computed({
                        get() {
                            var _a;
                            return (_a = props.registrant.mobilePhoneNumber) !== null && _a !== void 0 ? _a : undefined;
                        },
                        set(newValue) {
                            props.registrant.mobilePhoneNumber = newValue;
                            props.registrant.allowSms = !!newValue;
                        }
                    });
                    const mobilePhoneCountryCode = computed({
                        get() {
                            var _a;
                            return (_a = props.registrant.mobilePhoneCountryCode) !== null && _a !== void 0 ? _a : undefined;
                        },
                        set(newValue) {
                            props.registrant.mobilePhoneCountryCode = newValue;
                        }
                    });
                    const mobilePhoneRules = computed(() => {
                        return props.requireMobilePhone ? "required" : "";
                    });
                    const __returned__ = { props, firstName, lastName, nameRules, email, emailRules, mobilePhoneNumber, mobilePhoneCountryCode, mobilePhoneRules, CheckBox, EmailBox, PhoneNumberBox, TextBox };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$5 = { class: "row" };
            const _hoisted_2$4 = { class: "col-md-6" };
            const _hoisted_3$4 = { class: "col-md-6" };
            const _hoisted_4$4 = { class: "row" };
            const _hoisted_5$4 = { class: "col-md-6" };
            const _hoisted_6$3 = { class: "col-md-6" };
            function render$5(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    createElementVNode("h4", null, toDisplayString($props.title), 1),
                    createElementVNode("div", _hoisted_1$5, [
                        createElementVNode("div", _hoisted_2$4, [
                            createVNode($setup["TextBox"], {
                                modelValue: $setup.firstName,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.firstName) = $event)),
                                label: "First Name",
                                rules: $setup.nameRules,
                                disabled: $props.disabled
                            }, null, 8, ["modelValue", "rules", "disabled"])
                        ]),
                        createElementVNode("div", _hoisted_3$4, [
                            createVNode($setup["TextBox"], {
                                modelValue: $setup.lastName,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.lastName) = $event)),
                                label: "Last Name",
                                rules: $setup.nameRules,
                                disabled: $props.disabled
                            }, null, 8, ["modelValue", "rules", "disabled"])
                        ])
                    ]),
                    createElementVNode("div", _hoisted_4$4, [
                        createElementVNode("div", _hoisted_5$4, [
                            createVNode($setup["EmailBox"], {
                                modelValue: $setup.email,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.email) = $event)),
                                label: "Email",
                                rules: $setup.emailRules,
                                disabled: $props.disabled
                            }, null, 8, ["modelValue", "rules", "disabled"])
                        ]),
                        createElementVNode("div", _hoisted_6$3, [
                            createVNode($setup["PhoneNumberBox"], {
                                modelValue: $setup.mobilePhoneNumber,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.mobilePhoneNumber) = $event)),
                                countryCode: $setup.mobilePhoneCountryCode,
                                "onUpdate:countryCode": _cache[4] || (_cache[4] = $event => (($setup.mobilePhoneCountryCode) = $event)),
                                label: "Mobile Phone",
                                rules: $setup.mobilePhoneRules,
                                disabled: $props.disabled
                            }, null, 8, ["modelValue", "countryCode", "rules", "disabled"]),
                            createVNode($setup["CheckBox"], {
                                modelValue: $props.registrant.allowSms,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($props.registrant.allowSms) = $event)),
                                label: "",
                                text: "Allow SMS Messages",
                                disabled: $props.disabled || !$setup.mobilePhoneNumber
                            }, null, 8, ["modelValue", "disabled"])
                        ])
                    ])
                ], 64));
            }
            const exportHelper$5 = _sfc_main$5;
            for (const [key, val] of [["render", render$5]]) {
                exportHelper$5[key] = val;
            }

            const _sfc_main$4 = defineComponent({
                name: 'registerAnonymous.partial',
                props: {
                    isRegistering: {
                        type: Boolean,
                        required: true
                    },
                    registrants: {
                        type: Array,
                        required: true
                    },
                    projectHasRequiredGroupRequirements: {
                        type: Boolean,
                        required: true
                    },
                    requireEmail: {
                        type: Boolean,
                        required: true
                    },
                    requireMobilePhone: {
                        type: Boolean,
                        required: true
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const registrarUnmetRequirements = computed(() => {
                        var _a, _b;
                        return (_b = (_a = props.registrants
                            .find((r) => r === null || r === void 0 ? void 0 : r.isRegistrar)) === null || _a === void 0 ? void 0 : _a.unmetGroupRequirements) !== null && _b !== void 0 ? _b : [];
                    });
                    const allowAddRegistrants = computed(() => {
                        return !props.projectHasRequiredGroupRequirements && !props.isRegistering;
                    });
                    function ensureAtLeastOneRegistrant() {
                        if (!props.registrants.length) {
                            addRegistrant();
                        }
                    }
                    function addRegistrant() {
                        props.registrants.push({
                            allowSms: false,
                            communicationPreference: 0,
                            email: null,
                            firstName: null,
                            fullName: null,
                            isChild: false,
                            isRegistrar: true,
                            lastName: null,
                            mobilePhoneCountryCode: null,
                            mobilePhoneNumber: null,
                            mobilePhoneNumberFormatted: null,
                            personIdKey: null,
                            unmetGroupRequirements: null,
                            willAttend: true
                        });
                    }
                    function onAddClick() {
                        addRegistrant();
                    }
                    ensureAtLeastOneRegistrant();
                    const __returned__ = { props, registrarUnmetRequirements, allowAddRegistrants, ensureAtLeastOneRegistrant, addRegistrant, onAddClick, RegisterIndividual: exportHelper$5, RockButton };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$4 = { key: 0 };
            const _hoisted_2$3 = createTextVNode(" We are unable to register you for this project as you don't currently meet the requirement(s) below: ");
            const _hoisted_3$3 = { key: `requirement-{i}` };
            const _hoisted_4$3 = { key: `registrant-{i}` };
            const _hoisted_5$3 = createElementVNode("hr", null, null, -1);
            const _hoisted_6$2 = createElementVNode("i", { class: "fa fa-plus" }, null, -1);
            function render$4(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($setup.registrarUnmetRequirements.length)
                        ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
                            _hoisted_2$3,
                            createElementVNode("ul", null, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.registrarUnmetRequirements, (requirement, i) => {
                                    return (openBlock(), createElementBlock("li", _hoisted_3$3, toDisplayString(requirement), 1));
                                }), 128))
                            ])
                        ]))
                        : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($props.registrants, (registrant, i) => {
                            return (openBlock(), createElementBlock("div", _hoisted_4$3, [
                                createVNode($setup["RegisterIndividual"], {
                                    registrant: registrant,
                                    title: `Registrant #${i + 1}`,
                                    requireEmail: $props.requireEmail,
                                    requireMobilePhone: $props.requireMobilePhone,
                                    disabled: $props.isRegistering
                                }, null, 8, ["registrant", "title", "requireEmail", "requireMobilePhone", "disabled"]),
                                _hoisted_5$3
                            ]));
                        }), 128)),
                    ($setup.allowAddRegistrants)
                        ? (openBlock(), createBlock($setup["RockButton"], {
                            key: 2,
                            type: "button",
                            onClick: $setup.onAddClick
                        }, {
                            default: withCtx(() => [
                                _hoisted_6$2
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true)
                ], 64));
            }
            const exportHelper$4 = _sfc_main$4;
            for (const [key, val] of [["render", render$4]]) {
                exportHelper$4[key] = val;
            }

            const _sfc_main$3 = defineComponent({
                name: 'listUnmetRequirements.partial',
                props: {
                    registrants: {
                        type: Array,
                        required: true
                    },
                    groupTerm: {
                        type: String,
                        default: "group"
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const label = computed(() => {
                        return `The following ${props.groupTerm || "group"} member(s) do not meet the project requirements`;
                    });
                    const registrantsWithUnmetRequirements = computed(() => {
                        var _a;
                        return (_a = props.registrants) === null || _a === void 0 ? void 0 : _a.filter((r) => {
                            var _a;
                            return (r === null || r === void 0 ? void 0 : r.personIdKey)
                                && (r === null || r === void 0 ? void 0 : r.fullName)
                                && ((_a = r === null || r === void 0 ? void 0 : r.unmetGroupRequirements) === null || _a === void 0 ? void 0 : _a.length);
                        }).map((r) => {
                            var _a, _b, _c, _d;
                            return ({
                                key: (_a = r.personIdKey) !== null && _a !== void 0 ? _a : "",
                                fullName: (_b = r.fullName) !== null && _b !== void 0 ? _b : "",
                                unmetRequirements: (_d = (_c = r.unmetGroupRequirements) === null || _c === void 0 ? void 0 : _c.join(", ")) !== null && _d !== void 0 ? _d : ""
                            });
                        });
                    });
                    const __returned__ = { props, label, registrantsWithUnmetRequirements, RockLabel };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$3 = { key: 0 };
            function render$3(_ctx, _cache, $props, $setup, $data, $options) {
                return (Object.keys($setup.registrantsWithUnmetRequirements).length)
                    ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
                        createVNode($setup["RockLabel"], null, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.label), 1)
                            ]),
                            _: 1
                        }),
                        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.registrantsWithUnmetRequirements, (r) => {
                            return (openBlock(), createElementBlock("div", {
                                key: r.key
                            }, toDisplayString(r.fullName) + " - " + toDisplayString(r.unmetRequirements), 1));
                        }), 128))
                    ]))
                    : createCommentVNode("v-if", true);
            }
            const exportHelper$3 = _sfc_main$3;
            for (const [key, val] of [["render", render$3]]) {
                exportHelper$3[key] = val;
            }

            const _sfc_main$2 = defineComponent({
                name: 'registerFamily.partial',
                props: {
                    isRegistering: {
                        type: Boolean,
                        required: true
                    },
                    registrants: {
                        type: Array,
                        required: true
                    },
                    anyEligibleRegistrants: {
                        type: Boolean,
                        required: true
                    },
                    communicationPreferenceItems: {
                        type: Array,
                        required: true
                    },
                    title: {
                        type: String,
                        default: ""
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const unableToRegisterMsgPrefix = "We are unable to register you for this project";
                    const registrar = computed(() => {
                        var _a;
                        return (_a = props.registrants) === null || _a === void 0 ? void 0 : _a.find((r) => r.isRegistrar);
                    });
                    const registrarUnmetRequirements = computed(() => {
                        var _a, _b;
                        return (_b = (_a = registrar.value) === null || _a === void 0 ? void 0 : _a.unmetGroupRequirements) !== null && _b !== void 0 ? _b : [];
                    });
                    const registrarCommunicationPreference = computed({
                        get() {
                            var _a, _b, _c;
                            return (_c = (_b = (_a = registrar.value) === null || _a === void 0 ? void 0 : _a.communicationPreference) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : undefined;
                        },
                        set(newValue) {
                            if (registrar.value && newValue) {
                                if (newValue) {
                                    registrar.value.communicationPreference = +newValue;
                                }
                                else {
                                    registrar.value.communicationPreference = 0;
                                }
                            }
                        }
                    });
                    const communicationPreferenceIsSms = computed(() => {
                        return registrarCommunicationPreference.value == "2";
                    });
                    const communicationPreferenceIsEmail = computed(() => {
                        return registrarCommunicationPreference.value == "1";
                    });
                    const registrarMobilePhoneNumber = computed({
                        get() {
                            var _a, _b;
                            return (_b = (_a = registrar.value) === null || _a === void 0 ? void 0 : _a.mobilePhoneNumber) !== null && _b !== void 0 ? _b : undefined;
                        },
                        set(newValue) {
                            if (registrar.value) {
                                registrar.value.mobilePhoneNumber = newValue;
                                registrar.value.allowSms = !!newValue;
                            }
                        }
                    });
                    const registrarMobilePhoneCountryCode = computed({
                        get() {
                            var _a, _b;
                            return (_b = (_a = registrar.value) === null || _a === void 0 ? void 0 : _a.mobilePhoneCountryCode) !== null && _b !== void 0 ? _b : undefined;
                        },
                        set(newValue) {
                            if (registrar.value) {
                                registrar.value.mobilePhoneCountryCode = newValue;
                            }
                        }
                    });
                    const registrarEmail = computed({
                        get() {
                            var _a, _b;
                            return (_b = (_a = registrar.value) === null || _a === void 0 ? void 0 : _a.email) !== null && _b !== void 0 ? _b : "";
                        },
                        set(newValue) {
                            if (registrar.value) {
                                registrar.value.email = newValue;
                            }
                        }
                    });
                    const nonRegistrarRegistrants = computed(() => {
                        var _a, _b;
                        return (_b = (_a = props.registrants) === null || _a === void 0 ? void 0 : _a.filter((r) => (r === null || r === void 0 ? void 0 : r.isRegistrar) === false
                            && (r === null || r === void 0 ? void 0 : r.personIdKey)
                            && (r === null || r === void 0 ? void 0 : r.fullName))) !== null && _b !== void 0 ? _b : [];
                    });
                    const eligibleFamilyMembers = computed(() => {
                        return nonRegistrarRegistrants.value
                            .filter((r) => { var _a; return !((_a = r.unmetGroupRequirements) === null || _a === void 0 ? void 0 : _a.length); })
                            .map((r) => ({
                            value: r.personIdKey,
                            text: r.fullName
                        }));
                    });
                    const registeredFamilyMembers = computed({
                        get() {
                            return nonRegistrarRegistrants.value
                                .filter((r) => r.willAttend)
                                .map((r) => { var _a; return (_a = r.personIdKey) !== null && _a !== void 0 ? _a : ""; });
                        },
                        set(newValue) {
                            nonRegistrarRegistrants.value
                                .forEach((r) => {
                                r.willAttend = newValue.some((personIdKey) => personIdKey === r.personIdKey);
                            });
                        }
                    });
                    const ineligibleFamilyMembers = computed(() => {
                        return nonRegistrarRegistrants.value
                            .filter((r) => { var _a; return (_a = r.unmetGroupRequirements) === null || _a === void 0 ? void 0 : _a.length; });
                    });
                    const registerFamilyMembersLabel = computed(() => {
                        var _a;
                        const registrarIsEligibleAndWillAttend = !registrarUnmetRequirements.value.length && ((_a = registrar.value) === null || _a === void 0 ? void 0 : _a.willAttend);
                        return `Please ${registrarIsEligibleAndWillAttend ? "also " : ""}sign-up the following family members`;
                    });
                    function onRegisteredFamilyMembersChanged() {
                        var _a;
                        (_a = props.registrants) === null || _a === void 0 ? void 0 : _a.filter((r) => (r === null || r === void 0 ? void 0 : r.isRegistrar) === false).forEach((r) => {
                            r.willAttend = registeredFamilyMembers.value.some((personIdKey) => personIdKey === r.personIdKey);
                        });
                    }
                    const __returned__ = { props, unableToRegisterMsgPrefix, registrar, registrarUnmetRequirements, registrarCommunicationPreference, communicationPreferenceIsSms, communicationPreferenceIsEmail, registrarMobilePhoneNumber, registrarMobilePhoneCountryCode, registrarEmail, nonRegistrarRegistrants, eligibleFamilyMembers, registeredFamilyMembers, ineligibleFamilyMembers, registerFamilyMembersLabel, onRegisteredFamilyMembersChanged, ListUnmetRequirements: exportHelper$3, Alert, CheckBox, CheckBoxList, EmailBox, PhoneNumberBox, RadioButtonList };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$2 = { key: 1 };
            const _hoisted_2$2 = { key: 0 };
            const _hoisted_3$2 = { key: 1 };
            const _hoisted_4$2 = { key: 2 };
            const _hoisted_5$2 = {
                key: 3,
                class: "mt-3"
            };
            const _hoisted_6$1 = { key: `requirement-{i}` };
            const _hoisted_7$1 = {
                key: 4,
                class: "mt-3"
            };
            const _hoisted_8$1 = {
                key: 5,
                class: "mt-3"
            };
            const _hoisted_9$1 = {
                key: 0,
                class: "mt-3"
            };
            const _hoisted_10$1 = createElementVNode("div", { class: "mt-1 text-muted" }, " The number provided will be updated on your personal profile with permissions to allow us to send SMS messages. ", -1);
            const _hoisted_11 = {
                key: 1,
                class: "mt-3"
            };
            const _hoisted_12 = createElementVNode("div", { class: "mt-1 text-muted" }, " The email provided will be updated on your personal profile. ", -1);
            const _hoisted_13 = {
                key: 6,
                class: "mt-3"
            };
            const _hoisted_14 = {
                key: 7,
                class: "mt-3"
            };
            function render$2(_ctx, _cache, $props, $setup, $data, $options) {
                var _a, _b, _c;
                return (!$setup.registrar)
                    ? (openBlock(), createBlock($setup["Alert"], {
                        key: 0,
                        alertType: "warning"
                    }, {
                        default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.unableToRegisterMsgPrefix) + ". ")
                        ]),
                        _: 1
                    }))
                    : (openBlock(), createElementBlock("div", _hoisted_1$2, [
                        ($setup.props.title)
                            ? (openBlock(), createElementBlock("h3", _hoisted_2$2, toDisplayString($setup.props.title), 1))
                            : createCommentVNode("v-if", true),
                        ((_a = $setup.registrar) === null || _a === void 0 ? void 0 : _a.mobilePhoneNumberFormatted)
                            ? (openBlock(), createElementBlock("div", _hoisted_3$2, " Mobile Phone: " + toDisplayString($setup.registrar.mobilePhoneNumberFormatted), 1))
                            : createCommentVNode("v-if", true),
                        ((_b = $setup.registrar) === null || _b === void 0 ? void 0 : _b.email)
                            ? (openBlock(), createElementBlock("div", _hoisted_4$2, " Email: " + toDisplayString((_c = $setup.registrar) === null || _c === void 0 ? void 0 : _c.email), 1))
                            : createCommentVNode("v-if", true),
                        ($setup.registrarUnmetRequirements.length)
                            ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
                                createTextVNode(toDisplayString($setup.unableToRegisterMsgPrefix) + " as you don't currently meet the requirement(s) below: "),
                                createElementVNode("ul", null, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.registrarUnmetRequirements, (requirement, i) => {
                                        return (openBlock(), createElementBlock("li", _hoisted_6$1, toDisplayString(requirement), 1));
                                    }), 128))
                                ])
                            ]))
                            : (openBlock(), createElementBlock("div", _hoisted_7$1, [
                                createVNode($setup["CheckBox"], {
                                    modelValue: $setup.registrar.willAttend,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.registrar.willAttend) = $event)),
                                    label: "",
                                    text: "I will attend",
                                    disabled: $props.isRegistering
                                }, null, 8, ["modelValue", "disabled"])
                            ])),
                        ($props.anyEligibleRegistrants && $setup.props.communicationPreferenceItems.length)
                            ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                                createVNode($setup["RadioButtonList"], {
                                    modelValue: $setup.registrarCommunicationPreference,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.registrarCommunicationPreference) = $event)),
                                    label: "Please send reminder using",
                                    items: $setup.props.communicationPreferenceItems,
                                    horizontal: true,
                                    disabled: $props.isRegistering
                                }, null, 8, ["modelValue", "items", "disabled"]),
                                ($setup.communicationPreferenceIsSms)
                                    ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
                                        createVNode($setup["PhoneNumberBox"], {
                                            modelValue: $setup.registrarMobilePhoneNumber,
                                            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.registrarMobilePhoneNumber) = $event)),
                                            countryCode: $setup.registrarMobilePhoneCountryCode,
                                            "onUpdate:countryCode": _cache[3] || (_cache[3] = $event => (($setup.registrarMobilePhoneCountryCode) = $event)),
                                            label: "Mobile Phone",
                                            class: "input-max-w-xl",
                                            disabled: $props.isRegistering
                                        }, null, 8, ["modelValue", "countryCode", "disabled"]),
                                        _hoisted_10$1
                                    ]))
                                    : createCommentVNode("v-if", true),
                                ($setup.communicationPreferenceIsEmail)
                                    ? (openBlock(), createElementBlock("div", _hoisted_11, [
                                        createVNode($setup["EmailBox"], {
                                            modelValue: $setup.registrarEmail,
                                            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.registrarEmail) = $event)),
                                            label: "Email",
                                            class: "input-max-w-xl",
                                            disabled: $props.isRegistering
                                        }, null, 8, ["modelValue", "disabled"]),
                                        _hoisted_12
                                    ]))
                                    : createCommentVNode("v-if", true)
                            ]))
                            : createCommentVNode("v-if", true),
                        ($setup.eligibleFamilyMembers.length)
                            ? (openBlock(), createElementBlock("div", _hoisted_13, [
                                createVNode($setup["CheckBoxList"], {
                                    modelValue: $setup.registeredFamilyMembers,
                                    "onUpdate:modelValue": [
                                        _cache[5] || (_cache[5] = $event => (($setup.registeredFamilyMembers) = $event)),
                                        $setup.onRegisteredFamilyMembersChanged
                                    ],
                                    label: $setup.registerFamilyMembersLabel,
                                    items: $setup.eligibleFamilyMembers,
                                    disabled: $props.isRegistering
                                }, null, 8, ["modelValue", "label", "items", "disabled"])
                            ]))
                            : createCommentVNode("v-if", true),
                        ($setup.ineligibleFamilyMembers.length)
                            ? (openBlock(), createElementBlock("div", _hoisted_14, [
                                createVNode($setup["ListUnmetRequirements"], {
                                    registrants: $setup.ineligibleFamilyMembers,
                                    groupTerm: "family"
                                }, null, 8, ["registrants"])
                            ]))
                            : createCommentVNode("v-if", true)
                    ]));
            }
            const exportHelper$2 = _sfc_main$2;
            for (const [key, val] of [["render", render$2]]) {
                exportHelper$2[key] = val;
            }

            const _sfc_main$1 = defineComponent({
                name: 'registerGroup.partial',
                props: {
                    isRegistering: {
                        type: Boolean,
                        required: true
                    },
                    registrants: {
                        type: Array,
                        required: true
                    },
                    title: {
                        type: String,
                        default: ""
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const identifiableGroupMembers = computed(() => {
                        var _a, _b;
                        return (_b = (_a = props.registrants) === null || _a === void 0 ? void 0 : _a.filter((r) => (r === null || r === void 0 ? void 0 : r.personIdKey)
                            && (r === null || r === void 0 ? void 0 : r.fullName))) !== null && _b !== void 0 ? _b : [];
                    });
                    const eligibleGroupMembers = computed(() => {
                        return identifiableGroupMembers.value
                            .filter((r) => { var _a; return !((_a = r.unmetGroupRequirements) === null || _a === void 0 ? void 0 : _a.length); })
                            .map((r) => ({
                            value: r.personIdKey,
                            text: r.fullName
                        }));
                    });
                    const registeredGroupMembers = computed({
                        get() {
                            return identifiableGroupMembers.value
                                .filter((r) => r.willAttend)
                                .map((r) => { var _a; return (_a = r.personIdKey) !== null && _a !== void 0 ? _a : ""; });
                        },
                        set(newValue) {
                            identifiableGroupMembers.value
                                .forEach((r) => {
                                r.willAttend = newValue.some((personIdKey) => personIdKey === r.personIdKey);
                            });
                        }
                    });
                    const ineligibleGroupMembers = computed(() => {
                        return identifiableGroupMembers.value
                            .filter((r) => { var _a; return (_a = r.unmetGroupRequirements) === null || _a === void 0 ? void 0 : _a.length; });
                    });
                    function onRegisteredGroupMembersChanged() {
                        var _a;
                        (_a = props.registrants) === null || _a === void 0 ? void 0 : _a.filter((r) => (r === null || r === void 0 ? void 0 : r.isRegistrar) === false).forEach((r) => {
                            r.willAttend = registeredGroupMembers.value.some((personIdKey) => personIdKey === r.personIdKey);
                        });
                    }
                    const __returned__ = { props, identifiableGroupMembers, eligibleGroupMembers, registeredGroupMembers, ineligibleGroupMembers, onRegisteredGroupMembersChanged, ListUnmetRequirements: exportHelper$3, Alert, CheckBoxList };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$1 = createTextVNode(" No group members found to register for this project. ");
            const _hoisted_2$1 = { key: 1 };
            const _hoisted_3$1 = { key: 0 };
            const _hoisted_4$1 = {
                key: 1,
                class: "mt-3"
            };
            const _hoisted_5$1 = {
                key: 2,
                class: "mt-3"
            };
            function render$1(_ctx, _cache, $props, $setup, $data, $options) {
                return (!$setup.identifiableGroupMembers.length)
                    ? (openBlock(), createBlock($setup["Alert"], {
                        key: 0,
                        alertType: "warning"
                    }, {
                        default: withCtx(() => [
                            _hoisted_1$1
                        ]),
                        _: 1
                    }))
                    : (openBlock(), createElementBlock("div", _hoisted_2$1, [
                        ($setup.props.title)
                            ? (openBlock(), createElementBlock("h3", _hoisted_3$1, toDisplayString($setup.props.title), 1))
                            : createCommentVNode("v-if", true),
                        ($setup.eligibleGroupMembers.length)
                            ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
                                createVNode($setup["CheckBoxList"], {
                                    modelValue: $setup.registeredGroupMembers,
                                    "onUpdate:modelValue": [
                                        _cache[0] || (_cache[0] = $event => (($setup.registeredGroupMembers) = $event)),
                                        $setup.onRegisteredGroupMembersChanged
                                    ],
                                    label: "",
                                    items: $setup.eligibleGroupMembers,
                                    disabled: $props.isRegistering
                                }, null, 8, ["modelValue", "items", "disabled"])
                            ]))
                            : createCommentVNode("v-if", true),
                        ($setup.ineligibleGroupMembers.length)
                            ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                                createVNode($setup["ListUnmetRequirements"], { registrants: $setup.ineligibleGroupMembers }, null, 8, ["registrants"])
                            ]))
                            : createCommentVNode("v-if", true)
                    ]));
            }
            const exportHelper$1 = _sfc_main$1;
            for (const [key, val] of [["render", render$1]]) {
                exportHelper$1[key] = val;
            }

            const _sfc_main = defineComponent({
                name: 'signUpRegister',
                setup(__props, { expose }) {
                    var _a, _b, _c;
                    expose();
                    const config = useConfigurationValues();
                    const invokeBlockAction = useInvokeBlockAction();
                    const reloadBlock = useReloadBlock();
                    const registerMode = ref((_a = config.mode) !== null && _a !== void 0 ? _a : RegisterMode.Anonymous);
                    const communicationPreferenceItems = ref((_b = config.communicationPreferenceItems) !== null && _b !== void 0 ? _b : []);
                    const registrants = ref((_c = config.registrants) !== null && _c !== void 0 ? _c : []);
                    const isRegistering = ref(false);
                    const errorMessage = ref("");
                    const registeredRegistrantNames = ref([]);
                    const unregisteredRegistrantNames = ref([]);
                    const unsuccessfulRegistrantNames = ref([]);
                    const submitButtonText = ref(getSubmitButtonText(config.registrants));
                    const blockErrorMessage = computed(() => {
                        return config.errorMessage;
                    });
                    const anyEligibleRegistrants = computed(() => {
                        return registrants.value.some((r) => { var _a; return r && !((_a = r.unmetGroupRequirements) === null || _a === void 0 ? void 0 : _a.length); });
                    });
                    function getSubmitButtonText(registrants) {
                        return (registrants === null || registrants === void 0 ? void 0 : registrants.some((r) => (r === null || r === void 0 ? void 0 : r.willAttend) && (r === null || r === void 0 ? void 0 : r.personIdKey)))
                            ? "Update Registration"
                            : "Register";
                    }
                    function onSubmit() {
                        var _a, _b, _c, _d, _e, _f, _g;
                        return __awaiter(this, void 0, void 0, function* () {
                            isRegistering.value = true;
                            errorMessage.value = "";
                            registeredRegistrantNames.value = [];
                            unregisteredRegistrantNames.value = [];
                            unsuccessfulRegistrantNames.value = [];
                            const bag = {
                                registrants: registrants.value
                            };
                            const result = yield invokeBlockAction("Register", { bag });
                            isRegistering.value = false;
                            if (!result.isSuccess) {
                                errorMessage.value = (_a = result.errorMessage) !== null && _a !== void 0 ? _a : "Unknown error when trying to register for this project.";
                                return;
                            }
                            registeredRegistrantNames.value = (_c = (_b = result.data) === null || _b === void 0 ? void 0 : _b.registeredRegistrantNames) !== null && _c !== void 0 ? _c : [];
                            unregisteredRegistrantNames.value = (_e = (_d = result.data) === null || _d === void 0 ? void 0 : _d.unregisteredRegistrantNames) !== null && _e !== void 0 ? _e : [];
                            unsuccessfulRegistrantNames.value = (_g = (_f = result.data) === null || _f === void 0 ? void 0 : _f.unsuccessfulRegistrantNames) !== null && _g !== void 0 ? _g : [];
                            submitButtonText.value = getSubmitButtonText(registrants.value);
                        });
                    }
                    onConfigurationValuesChanged(reloadBlock);
                    const __returned__ = { config, invokeBlockAction, reloadBlock, registerMode, communicationPreferenceItems, registrants, isRegistering, errorMessage, registeredRegistrantNames, unregisteredRegistrantNames, unsuccessfulRegistrantNames, submitButtonText, blockErrorMessage, anyEligibleRegistrants, getSubmitButtonText, onSubmit, RegisterAnonymous: exportHelper$4, RegisterFamily: exportHelper$2, RegisterGroup: exportHelper$1, Alert, Loading, RockButton, RockForm, RegisterMode, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { key: 0 };
            const _hoisted_2 = createElementVNode("p", null, "Successfully registered individual(s):", -1);
            const _hoisted_3 = { key: `registered-{i}` };
            const _hoisted_4 = { key: 1 };
            const _hoisted_5 = createElementVNode("p", null, "Successfully unregistered individual(s):", -1);
            const _hoisted_6 = { key: `unregistered-{i}` };
            const _hoisted_7 = createElementVNode("p", null, "Unable to register individual(s):", -1);
            const _hoisted_8 = { key: `registered-{i}` };
            const _hoisted_9 = { key: 4 };
            const _hoisted_10 = {
                key: 3,
                class: "mt-5"
            };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                var _a, _b, _c;
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($setup.blockErrorMessage)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 0,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.blockErrorMessage), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    ($setup.errorMessage)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 1,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.errorMessage), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    (((_a = $setup.registeredRegistrantNames) === null || _a === void 0 ? void 0 : _a.length) || ((_b = $setup.unregisteredRegistrantNames) === null || _b === void 0 ? void 0 : _b.length))
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 2,
                            alertType: "success"
                        }, {
                            default: withCtx(() => {
                                var _a, _b;
                                return [
                                    ((_a = $setup.registeredRegistrantNames) === null || _a === void 0 ? void 0 : _a.length)
                                        ? (openBlock(), createElementBlock("div", _hoisted_1, [
                                            _hoisted_2,
                                            createElementVNode("ul", null, [
                                                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.registeredRegistrantNames, (name, i) => {
                                                    return (openBlock(), createElementBlock("li", _hoisted_3, toDisplayString(name), 1));
                                                }), 128))
                                            ])
                                        ]))
                                        : createCommentVNode("v-if", true),
                                    ((_b = $setup.unregisteredRegistrantNames) === null || _b === void 0 ? void 0 : _b.length)
                                        ? (openBlock(), createElementBlock("div", _hoisted_4, [
                                            _hoisted_5,
                                            createElementVNode("ul", null, [
                                                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.unregisteredRegistrantNames, (name, i) => {
                                                    return (openBlock(), createElementBlock("li", _hoisted_6, toDisplayString(name), 1));
                                                }), 128))
                                            ])
                                        ]))
                                        : createCommentVNode("v-if", true)
                                ];
                            }),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    ((_c = $setup.unsuccessfulRegistrantNames) === null || _c === void 0 ? void 0 : _c.length)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 3,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createElementVNode("div", null, [
                                    _hoisted_7,
                                    createElementVNode("ul", null, [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.unsuccessfulRegistrantNames, (name, i) => {
                                            return (openBlock(), createElementBlock("li", _hoisted_8, toDisplayString(name), 1));
                                        }), 128))
                                    ])
                                ])
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    (!$setup.blockErrorMessage)
                        ? (openBlock(), createElementBlock("div", _hoisted_9, [
                            createVNode($setup["RockForm"], { onSubmit: $setup.onSubmit }, {
                                default: withCtx(() => [
                                    ($setup.registerMode == $setup.RegisterMode.Anonymous)
                                        ? (openBlock(), createBlock($setup["RegisterAnonymous"], {
                                            key: 0,
                                            isRegistering: $setup.isRegistering,
                                            registrants: $setup.registrants,
                                            projectHasRequiredGroupRequirements: $setup.config.projectHasRequiredGroupRequirements,
                                            requireEmail: $setup.config.requireEmail,
                                            requireMobilePhone: $setup.config.requireMobilePhone
                                        }, null, 8, ["isRegistering", "registrants", "projectHasRequiredGroupRequirements", "requireEmail", "requireMobilePhone"]))
                                        : createCommentVNode("v-if", true),
                                    ($setup.registerMode == $setup.RegisterMode.Family)
                                        ? (openBlock(), createBlock($setup["RegisterFamily"], {
                                            key: 1,
                                            isRegistering: $setup.isRegistering,
                                            registrants: $setup.registrants,
                                            anyEligibleRegistrants: $setup.anyEligibleRegistrants,
                                            communicationPreferenceItems: $setup.communicationPreferenceItems,
                                            title: $setup.config.title
                                        }, null, 8, ["isRegistering", "registrants", "anyEligibleRegistrants", "communicationPreferenceItems", "title"]))
                                        : createCommentVNode("v-if", true),
                                    ($setup.registerMode == $setup.RegisterMode.Group)
                                        ? (openBlock(), createBlock($setup["RegisterGroup"], {
                                            key: 2,
                                            isRegistering: $setup.isRegistering,
                                            registrants: $setup.registrants,
                                            title: $setup.config.title
                                        }, null, 8, ["isRegistering", "registrants", "title"]))
                                        : createCommentVNode("v-if", true),
                                    ($setup.anyEligibleRegistrants)
                                        ? (openBlock(), createElementBlock("div", _hoisted_10, [
                                            createVNode($setup["Loading"], { isLoading: $setup.isRegistering }, {
                                                default: withCtx(() => [
                                                    createVNode($setup["RockButton"], {
                                                        type: "submit",
                                                        btnType: $setup.BtnType.Warning,
                                                        disabled: $setup.isRegistering
                                                    }, {
                                                        default: withCtx(() => [
                                                            createTextVNode(toDisplayString($setup.submitButtonText), 1)
                                                        ]),
                                                        _: 1
                                                    }, 8, ["btnType", "disabled"])
                                                ]),
                                                _: 1
                                            }, 8, ["isLoading"])
                                        ]))
                                        : createCommentVNode("v-if", true)
                                ]),
                                _: 1
                            })
                        ]))
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
