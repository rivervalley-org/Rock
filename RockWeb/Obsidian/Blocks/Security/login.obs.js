System.register(['tslib', 'vue', '@Obsidian/Controls/inlineCheckBox', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/textBox', '@Obsidian/Enums/Controls/btnType', './divider.obs.js', '@Obsidian/Enums/Blocks/Security/Login/loginMethod', '@Obsidian/Controls/rockValidation', '@Obsidian/Utility/email', '@Obsidian/Utility/phone', '@Obsidian/ValidationRules', './codeBox.obs', '@Obsidian/Controls/radioButtonList', '@Obsidian/Utility/component', '@Obsidian/Enums/Blocks/Security/Login/passwordlessLoginStep', '@Obsidian/Controls/alert.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/url'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, createTextVNode, openBlock, createBlock, withCtx, createElementBlock, createCommentVNode, createVNode, normalizeClass, toDisplayString, Fragment, renderList, createElementVNode, watch, onMounted, InlineCheckBox, RockButton, RockForm, TextBox, BtnType, exportHelper$7, LoginMethod, RockValidation, isEmail, formatPhoneNumber, stripPhoneNumber, getPhoneNumberConfiguration, validateValue, CodeBox, RadioButtonList, useVModelPassthrough, PasswordlessLoginStep, Alert, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock, removeCurrentUrlQueryParams;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            createTextVNode = module.createTextVNode;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createElementBlock = module.createElementBlock;
            createCommentVNode = module.createCommentVNode;
            createVNode = module.createVNode;
            normalizeClass = module.normalizeClass;
            toDisplayString = module.toDisplayString;
            Fragment = module.Fragment;
            renderList = module.renderList;
            createElementVNode = module.createElementVNode;
            watch = module.watch;
            onMounted = module.onMounted;
        }, function (module) {
            InlineCheckBox = module["default"];
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            RockForm = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            BtnType = module.BtnType;
        }, function (module) {
            exportHelper$7 = module["default"];
        }, function (module) {
            LoginMethod = module.LoginMethod;
        }, function (module) {
            RockValidation = module["default"];
        }, function (module) {
            isEmail = module.isEmail;
        }, function (module) {
            formatPhoneNumber = module.formatPhoneNumber;
            stripPhoneNumber = module.stripPhoneNumber;
            getPhoneNumberConfiguration = module.getPhoneNumberConfiguration;
        }, function (module) {
            validateValue = module.validateValue;
        }, function (module) {
            CodeBox = module["default"];
        }, function (module) {
            RadioButtonList = module["default"];
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            PasswordlessLoginStep = module.PasswordlessLoginStep;
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            useConfigurationValues = module.useConfigurationValues;
            useInvokeBlockAction = module.useInvokeBlockAction;
            onConfigurationValuesChanged = module.onConfigurationValuesChanged;
            useReloadBlock = module.useReloadBlock;
        }, function (module) {
            removeCurrentUrlQueryParams = module.removeCurrentUrlQueryParams;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main$6 = defineComponent({
                name: 'credentialLogin.partial',
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
                    isMobileForced: {
                        type: Boolean,
                        required: false,
                        default: false
                    }
                },
                emits: ["forgotAccount", "login", "register"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const username = ref("");
                    const password = ref("");
                    const rememberMe = ref(false);
                    const usernameFieldLabel = computed(() => props.config.usernameFieldLabel || "Username");
                    const newAccountButtonText = computed(() => props.config.newAccountButtonText || "Register");
                    function onCredentialLoginSubmitted() {
                        emit("login", {
                            username: username.value,
                            password: password.value,
                            rememberMe: rememberMe.value
                        });
                    }
                    function onForgotAccountClicked() {
                        emit("forgotAccount");
                    }
                    function onRegisterClicked() {
                        emit("register");
                    }
                    const __returned__ = { props, emit, username, password, rememberMe, usernameFieldLabel, newAccountButtonText, onCredentialLoginSubmitted, onForgotAccountClicked, onRegisterClicked, InlineCheckBox, RockButton, RockForm, TextBox, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$5 = ["innerHTML"];
            const _hoisted_2$4 = createTextVNode("Log In");
            const _hoisted_3$2 = createTextVNode("Log In");
            const _hoisted_4$2 = createTextVNode("Forgot Account");
            const _hoisted_5$2 = createTextVNode("Forgot Account");
            function render$6(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["RockForm"], { onSubmit: $setup.onCredentialLoginSubmitted }, {
                    default: withCtx(() => [
                        ($props.config.promptMessage)
                            ? (openBlock(), createElementBlock("div", {
                                key: 0,
                                innerHTML: $props.config.promptMessage
                            }, null, 8, _hoisted_1$5))
                            : createCommentVNode("v-if", true),
                        createVNode($setup["TextBox"], {
                            modelValue: $setup.username,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.username) = $event)),
                            disabled: $props.disabled,
                            isRequiredIndicatorHidden: true,
                            label: $setup.usernameFieldLabel,
                            rules: "required",
                            type: "text"
                        }, null, 8, ["modelValue", "disabled", "label"]),
                        createVNode($setup["TextBox"], {
                            modelValue: $setup.password,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.password) = $event)),
                            disabled: $props.disabled,
                            isRequiredIndicatorHidden: true,
                            label: "Password",
                            rules: "required",
                            type: "password"
                        }, null, 8, ["modelValue", "disabled"]),
                        createVNode($setup["InlineCheckBox"], {
                            modelValue: $setup.rememberMe,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.rememberMe) = $event)),
                            disabled: $props.disabled,
                            label: "Keep me logged in"
                        }, null, 8, ["modelValue", "disabled"]),
                        createVNode($setup["RockButton"], {
                            autoDisable: "",
                            btnType: $setup.BtnType.Primary,
                            class: normalizeClass($props.isMobileForced ? 'w-100' : 'w-100 d-sm-none'),
                            disabled: $props.disabled,
                            type: "submit"
                        }, {
                            default: withCtx(() => [
                                _hoisted_2$4
                            ]),
                            _: 1
                        }, 8, ["btnType", "class", "disabled"]),
                        (!$props.isMobileForced)
                            ? (openBlock(), createBlock($setup["RockButton"], {
                                key: 1,
                                autoDisable: "",
                                btnType: $setup.BtnType.Primary,
                                class: "d-none d-sm-inline-block",
                                disabled: $props.disabled,
                                type: "submit"
                            }, {
                                default: withCtx(() => [
                                    _hoisted_3$2
                                ]),
                                _: 1
                            }, 8, ["btnType", "disabled"]))
                            : createCommentVNode("v-if", true),
                        (!$props.config.hideNewAccountOption)
                            ? (openBlock(), createBlock($setup["RockButton"], {
                                key: 2,
                                autoDisable: "",
                                btnType: $setup.BtnType.Action,
                                class: normalizeClass($props.isMobileForced ? 'w-100 mt-2' : 'w-100 mt-2 d-sm-none'),
                                disabled: $props.disabled,
                                type: "button",
                                onClick: $setup.onRegisterClicked
                            }, {
                                default: withCtx(() => [
                                    createTextVNode(toDisplayString($setup.newAccountButtonText), 1)
                                ]),
                                _: 1
                            }, 8, ["btnType", "class", "disabled"]))
                            : createCommentVNode("v-if", true),
                        (!$props.isMobileForced && !$props.config.hideNewAccountOption)
                            ? (openBlock(), createBlock($setup["RockButton"], {
                                key: 3,
                                autoDisable: "",
                                btnType: $setup.BtnType.Action,
                                class: "ml-1 d-none d-sm-inline-block",
                                disabled: $props.disabled,
                                type: "button",
                                onClick: $setup.onRegisterClicked
                            }, {
                                default: withCtx(() => [
                                    createTextVNode(toDisplayString($setup.newAccountButtonText), 1)
                                ]),
                                _: 1
                            }, 8, ["btnType", "disabled"]))
                            : createCommentVNode("v-if", true),
                        createVNode($setup["RockButton"], {
                            autoDisable: "",
                            btnType: $setup.BtnType.Link,
                            class: normalizeClass($props.isMobileForced ? 'w-100 mt-2' : 'w-100 mt-2 d-sm-none'),
                            disabled: $props.disabled,
                            type: "button",
                            onClick: $setup.onForgotAccountClicked
                        }, {
                            default: withCtx(() => [
                                _hoisted_4$2
                            ]),
                            _: 1
                        }, 8, ["btnType", "class", "disabled"]),
                        (!$props.isMobileForced)
                            ? (openBlock(), createBlock($setup["RockButton"], {
                                key: 4,
                                autoDisable: "",
                                btnType: $setup.BtnType.Link,
                                class: "d-none d-sm-inline-block ml-1",
                                disabled: $props.disabled,
                                type: "button",
                                onClick: $setup.onForgotAccountClicked
                            }, {
                                default: withCtx(() => [
                                    _hoisted_5$2
                                ]),
                                _: 1
                            }, 8, ["btnType", "disabled"]))
                            : createCommentVNode("v-if", true)
                    ]),
                    _: 1
                }));
            }
            const exportHelper$6 = _sfc_main$6;
            for (const [key, val] of [["render", render$6]]) {
                exportHelper$6[key] = val;
            }

            const _sfc_main$5 = defineComponent({
                name: 'externalLogin.partial',
                props: {
                    modelValue: {
                        type: Array,
                        required: true,
                        default: []
                    },
                    disabled: {
                        type: Boolean,
                        required: false,
                        default: false
                    },
                    caption: {
                        type: String,
                        required: false,
                        default: "Log in with social account"
                    }
                },
                emits: ["login"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const externalLogins = computed(() => {
                        var _a, _b;
                        return (_b = (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.filter(l => !!l.authenticationType)) !== null && _b !== void 0 ? _b : [];
                    });
                    const hasExternalLogins = computed(() => !!externalLogins.value.length);
                    function onExternalLoginClick(externalLogin) {
                        emit("login", externalLogin);
                    }
                    const __returned__ = { props, emit, externalLogins, hasExternalLogins, onExternalLoginClick, RockButton, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$4 = ["innerHTML"];
            function render$5(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", null, [
                    ($setup.hasExternalLogins)
                        ? (openBlock(), createElementBlock("div", {
                            key: 0,
                            innerHTML: $props.caption
                        }, null, 8, _hoisted_1$4))
                        : createCommentVNode("v-if", true),
                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.externalLogins, (login) => {
                        return (openBlock(), createBlock($setup["RockButton"], {
                            btnType: $setup.BtnType.Authentication,
                            class: normalizeClass(login.cssClass || ''),
                            disabled: $props.disabled,
                            onClick: $event => ($setup.onExternalLoginClick(login))
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString(login.text), 1)
                            ]),
                            _: 2
                        }, 1032, ["btnType", "class", "disabled", "onClick"]));
                    }), 256))
                ]));
            }
            const exportHelper$5 = _sfc_main$5;
            for (const [key, val] of [["render", render$5]]) {
                exportHelper$5[key] = val;
            }

            const _sfc_main$4 = defineComponent({
                name: 'loginMethodPicker.partial',
                props: {
                    modelValue: {
                        type: Object,
                        required: true
                    },
                    isCredentialLoginSupported: {
                        type: Boolean,
                        required: true
                    },
                    isPasswordlessLoginSupported: {
                        type: Boolean,
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
                    const loginMethodWrapper = computed(() => ({
                        isCredential: internalLoginMethod.value === LoginMethod.InternalDatabase,
                        isPasswordless: internalLoginMethod.value === LoginMethod.Passwordless
                    }));
                    const internalLoginMethod = computed({
                        get() {
                            return props.modelValue;
                        },
                        set(newValue) {
                            emit("update:modelValue", newValue);
                        }
                    });
                    function onSignInWithAccountClicked() {
                        internalLoginMethod.value = LoginMethod.InternalDatabase;
                    }
                    function onSignInWithEmailOrPhoneClicked() {
                        internalLoginMethod.value = LoginMethod.Passwordless;
                    }
                    const __returned__ = { props, emit, loginMethodWrapper, internalLoginMethod, onSignInWithAccountClicked, onSignInWithEmailOrPhoneClicked, RockButton, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$3 = createTextVNode("Sign in with Account");
            const _hoisted_2$3 = createTextVNode("Sign in with Email or Phone");
            function render$4(_ctx, _cache, $props, $setup, $data, $options) {
                return ($props.isCredentialLoginSupported && !$setup.loginMethodWrapper.isCredential)
                    ? (openBlock(), createBlock($setup["RockButton"], {
                        key: 0,
                        btnType: $setup.BtnType.Default,
                        class: "w-100",
                        disabled: $props.disabled,
                        type: "button",
                        onClick: _cache[0] || (_cache[0] = $event => ($setup.onSignInWithAccountClicked()))
                    }, {
                        default: withCtx(() => [
                            _hoisted_1$3
                        ]),
                        _: 1
                    }, 8, ["btnType", "disabled"]))
                    : ($props.isPasswordlessLoginSupported && !$setup.loginMethodWrapper.isPasswordless)
                        ? (openBlock(), createBlock($setup["RockButton"], {
                            key: 1,
                            btnType: $setup.BtnType.Default,
                            class: "w-100",
                            disabled: $props.disabled,
                            type: "button",
                            onClick: _cache[1] || (_cache[1] = $event => ($setup.onSignInWithEmailOrPhoneClicked()))
                        }, {
                            default: withCtx(() => [
                                _hoisted_2$3
                            ]),
                            _: 1
                        }, 8, ["btnType", "disabled"]))
                        : createCommentVNode("v-if", true);
            }
            const exportHelper$4 = _sfc_main$4;
            for (const [key, val] of [["render", render$4]]) {
                exportHelper$4[key] = val;
            }

            const _sfc_main$3 = defineComponent({
                name: 'passwordlessLoginStartStep.partial',
                props: {
                    modelValue: {
                        type: Object,
                        required: true
                    },
                    disabled: {
                        type: Boolean,
                        required: false,
                        default: false
                    },
                    isMobileForced: {
                        type: Boolean,
                        required: false,
                        default: false
                    }
                },
                emits: ["start", "update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const label = "Email or Phone";
                    const validationErrors = ref([]);
                    const phoneNumberConfig = ref();
                    const emailOrPhoneNumberRaw = ref("");
                    const emailOrPhoneNumber = computed({
                        get() {
                            return emailOrPhoneNumberRaw.value;
                        },
                        set(newValue) {
                            emailOrPhoneNumberRaw.value = newValue;
                            validateEmailOrPhoneNumber(newValue);
                        }
                    });
                    function onPasswordlessLoginStartSubmitted() {
                        validateForm();
                        if (validationErrors.value.length === 0) {
                            emit("start");
                        }
                    }
                    function getConfiguredRules() {
                        var _a;
                        const rules = (_a = phoneNumberConfig.value) === null || _a === void 0 ? void 0 : _a.rules;
                        const configuredRules = [];
                        if (rules) {
                            for (const key in rules) {
                                const bag = rules[key];
                                configuredRules.push(...bag);
                            }
                        }
                        return configuredRules;
                    }
                    function loadPhoneNumberConfig() {
                        return __awaiter(this, void 0, void 0, function* () {
                            phoneNumberConfig.value = yield getPhoneNumberConfiguration();
                        });
                    }
                    function validateForm() {
                        const errorMessages = validateValue(emailOrPhoneNumber.value, validateEmailOrPhoneNumber);
                        if (errorMessages && errorMessages.length) {
                            validationErrors.value = errorMessages.map(errorMessage => ({
                                name: label,
                                text: errorMessage
                            }));
                        }
                        else {
                            validationErrors.value = [];
                        }
                    }
                    function validateEmailOrPhoneNumber(value) {
                        if (!value) {
                            return true;
                        }
                        let errors = validateEmail(value);
                        if (errors === "") {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { email: value, phoneNumber: null, shouldSendEmailCode: true, shouldSendEmailLink: true, shouldSendSmsCode: false }));
                            return true;
                        }
                        const formattedNumber = formatPhoneNumber(stripPhoneNumber(value));
                        if (formattedNumber) {
                            errors = validatePhoneNumber(stripPhoneNumber(formattedNumber));
                            if (errors === "") {
                                emailOrPhoneNumberRaw.value = formattedNumber;
                                emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { email: null, phoneNumber: formattedNumber, shouldSendEmailCode: false, shouldSendEmailLink: false, shouldSendSmsCode: true }));
                                return true;
                            }
                        }
                        emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { email: null, phoneNumber: null, shouldSendEmailCode: false, shouldSendEmailLink: false, shouldSendSmsCode: false }));
                        return "must be a valid email or phone number";
                    }
                    function validateEmail(value) {
                        if (!value) {
                            return "";
                        }
                        if (isEmail(value)) {
                            return "";
                        }
                        return "Email must be a valid email address.";
                    }
                    function validatePhoneNumber(value) {
                        var _a;
                        const rules = getConfiguredRules();
                        if (!value) {
                            return "";
                        }
                        if (rules.length === 0) {
                            return "";
                        }
                        for (let rule of rules) {
                            const regex = new RegExp((_a = rule.match) !== null && _a !== void 0 ? _a : "");
                            if (regex.test(value)) {
                                return "";
                            }
                        }
                        return `Phone number '${value}' must be a valid phone number.`;
                    }
                    loadPhoneNumberConfig();
                    const __returned__ = { props, emit, label, validationErrors, phoneNumberConfig, emailOrPhoneNumberRaw, emailOrPhoneNumber, onPasswordlessLoginStartSubmitted, getConfiguredRules, loadPhoneNumberConfig, validateForm, validateEmailOrPhoneNumber, validateEmail, validatePhoneNumber, RockValidation, RockButton, RockForm, TextBox, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$2 = createTextVNode("Continue");
            const _hoisted_2$2 = createTextVNode("Continue");
            function render$3(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    createVNode($setup["RockValidation"], { errors: $setup.validationErrors }, null, 8, ["errors"]),
                    createVNode($setup["RockForm"], { onSubmit: $setup.onPasswordlessLoginStartSubmitted }, {
                        default: withCtx(() => [
                            createVNode($setup["TextBox"], {
                                modelValue: $setup.emailOrPhoneNumber,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.emailOrPhoneNumber) = $event)),
                                disabled: $props.disabled,
                                isRequiredIndicatorHidden: true,
                                label: $setup.label,
                                rules: ['required']
                            }, null, 8, ["modelValue", "disabled"]),
                            createVNode($setup["RockButton"], {
                                btnType: $setup.BtnType.Primary,
                                class: normalizeClass($props.isMobileForced ? 'w-100' : 'w-100 d-sm-none'),
                                disabled: $props.disabled,
                                type: "submit"
                            }, {
                                default: withCtx(() => [
                                    _hoisted_1$2
                                ]),
                                _: 1
                            }, 8, ["btnType", "class", "disabled"]),
                            (!$props.isMobileForced)
                                ? (openBlock(), createBlock($setup["RockButton"], {
                                    key: 0,
                                    btnType: $setup.BtnType.Primary,
                                    class: "d-none d-sm-inline-block",
                                    disabled: $props.disabled,
                                    type: "submit"
                                }, {
                                    default: withCtx(() => [
                                        _hoisted_2$2
                                    ]),
                                    _: 1
                                }, 8, ["btnType", "disabled"]))
                                : createCommentVNode("v-if", true)
                        ]),
                        _: 1
                    })
                ], 64));
            }
            const exportHelper$3 = _sfc_main$3;
            for (const [key, val] of [["render", render$3]]) {
                exportHelper$3[key] = val;
            }

            const _sfc_main$2 = defineComponent({
                name: 'passwordlessLoginVerifyStep.partial',
                props: {
                    modelValue: {
                        type: Object,
                        required: true
                    },
                    communicationType: {
                        type: String,
                        required: false,
                        default: "data"
                    },
                    disabled: {
                        type: Boolean,
                        required: false,
                        default: false
                    },
                    isMobileForced: {
                        type: Boolean,
                        required: false,
                        default: false
                    },
                    submitPasswordlessLoginVerification: {
                        type: Boolean,
                        required: false,
                        default: false
                    }
                },
                emits: ["resendCode", "update:submitPasswordlessLoginVerification", "update:modelValue", "verify"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalSubmitPasswordlessLoginVerification = useVModelPassthrough(props, "submitPasswordlessLoginVerification", emit);
                    const internalCode = computed({
                        get() {
                            return props.modelValue.code || "";
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { code: newValue }));
                        }
                    });
                    const internalCommunicationType = computed(() => props.communicationType || "data");
                    const internalMatchingPeople = computed({
                        get() {
                            var _a;
                            return (_a = props.modelValue.matchingPeople) !== null && _a !== void 0 ? _a : [];
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { matchingPeople: newValue }));
                        }
                    });
                    const internalMatchingPersonValue = computed({
                        get() {
                            return props.modelValue.matchingPersonValue || "";
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { matchingPersonValue: newValue }));
                        }
                    });
                    function onPasswordlessLoginVerifySubmitted() {
                        emit("verify");
                    }
                    function onResendCodeClicked() {
                        internalCode.value = "";
                        internalMatchingPersonValue.value = "";
                        internalMatchingPeople.value = [];
                        emit("resendCode");
                    }
                    const __returned__ = { props, emit, internalSubmitPasswordlessLoginVerification, internalCode, internalCommunicationType, internalMatchingPeople, internalMatchingPersonValue, onPasswordlessLoginVerifySubmitted, onResendCodeClicked, CodeBox, RadioButtonList, RockButton, RockForm, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$1 = createElementVNode("div", { class: "mb-2" }, "Please enter your confirmation code below.", -1);
            const _hoisted_2$1 = createTextVNode("Complete Sign In");
            const _hoisted_3$1 = createTextVNode("Complete Sign In");
            const _hoisted_4$1 = createTextVNode("Resend code");
            const _hoisted_5$1 = createTextVNode("Resend code");
            function render$2(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["RockForm"], {
                    submit: $setup.internalSubmitPasswordlessLoginVerification,
                    "onUpdate:submit": _cache[3] || (_cache[3] = $event => (($setup.internalSubmitPasswordlessLoginVerification) = $event)),
                    onSubmit: $setup.onPasswordlessLoginVerifySubmitted
                }, {
                    default: withCtx(() => [
                        _hoisted_1$1,
                        createVNode($setup["CodeBox"], {
                            modelValue: $setup.internalCode,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalCode) = $event)),
                            modelModifiers: { capitalize: true },
                            disabled: $props.disabled,
                            maxLength: 6,
                            rules: "required",
                            validationTitle: "Code"
                        }, null, 8, ["modelValue", "disabled"]),
                        ($props.modelValue.isPersonSelectionRequired)
                            ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                createElementVNode("p", null, "The " + toDisplayString($setup.internalCommunicationType) + " you provided is matched to several different individuals. Please select the one that is you.", 1),
                                createVNode($setup["RadioButtonList"], {
                                    modelValue: $setup.internalMatchingPersonValue,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.internalMatchingPersonValue) = $event)),
                                    items: $setup.internalMatchingPeople,
                                    "onUpdate:items": _cache[2] || (_cache[2] = $event => (($setup.internalMatchingPeople) = $event))
                                }, null, 8, ["modelValue", "items"])
                            ], 64))
                            : createCommentVNode("v-if", true),
                        createVNode($setup["RockButton"], {
                            btnType: $setup.BtnType.Primary,
                            class: normalizeClass($props.isMobileForced ? 'w-100' : 'w-100 d-sm-none'),
                            disabled: $props.disabled,
                            type: "submit"
                        }, {
                            default: withCtx(() => [
                                _hoisted_2$1
                            ]),
                            _: 1
                        }, 8, ["btnType", "class", "disabled"]),
                        (!$props.isMobileForced)
                            ? (openBlock(), createBlock($setup["RockButton"], {
                                key: 1,
                                btnType: $setup.BtnType.Primary,
                                class: "d-none d-sm-inline-block",
                                disabled: $props.disabled,
                                type: "submit"
                            }, {
                                default: withCtx(() => [
                                    _hoisted_3$1
                                ]),
                                _: 1
                            }, 8, ["btnType", "disabled"]))
                            : createCommentVNode("v-if", true),
                        createVNode($setup["RockButton"], {
                            autoDisable: "",
                            btnType: $setup.BtnType.Action,
                            class: normalizeClass($props.isMobileForced ? 'w-100 mt-2' : 'w-100 mt-2 d-sm-none'),
                            disabled: $props.disabled,
                            type: "button",
                            onClick: $setup.onResendCodeClicked
                        }, {
                            default: withCtx(() => [
                                _hoisted_4$1
                            ]),
                            _: 1
                        }, 8, ["btnType", "class", "disabled"]),
                        (!$props.isMobileForced)
                            ? (openBlock(), createBlock($setup["RockButton"], {
                                key: 2,
                                autoDisable: "",
                                btnType: $setup.BtnType.Action,
                                class: "d-none d-sm-inline-block ml-1",
                                disabled: $props.disabled,
                                type: "button",
                                onClick: $setup.onResendCodeClicked
                            }, {
                                default: withCtx(() => [
                                    _hoisted_5$1
                                ]),
                                _: 1
                            }, 8, ["btnType", "disabled"]))
                            : createCommentVNode("v-if", true)
                    ]),
                    _: 1
                }, 8, ["submit"]));
            }
            const exportHelper$2 = _sfc_main$2;
            for (const [key, val] of [["render", render$2]]) {
                exportHelper$2[key] = val;
            }

            const _sfc_main$1 = defineComponent({
                name: 'passwordlessLogin.partial',
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
                    isMobileForced: {
                        type: Boolean,
                        required: false,
                        default: false
                    }
                },
                emits: ["start", "update:modelValue", "verify"],
                setup(__props, { expose, emit }) {
                    var _a, _b, _c, _d;
                    expose();
                    const props = __props;
                    const passwordlessLoginStartRequest = ref({
                        shouldSendEmailCode: false,
                        shouldSendEmailLink: false,
                        shouldSendSmsCode: false,
                        email: null,
                        phoneNumber: null
                    });
                    const passwordlessLoginVerifyOptions = ref({
                        code: (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.code,
                        isPersonSelectionRequired: (_b = props.modelValue) === null || _b === void 0 ? void 0 : _b.isPersonSelectionRequired,
                        matchingPeople: (_c = props.modelValue) === null || _c === void 0 ? void 0 : _c.matchingPeople,
                        matchingPersonValue: null,
                        state: (_d = props.modelValue) === null || _d === void 0 ? void 0 : _d.state
                    });
                    const submitPasswordlessLoginVerification = ref(false);
                    const passwordlessLoginStep = computed(() => ({
                        isStart: internalStep.value === PasswordlessLoginStep.Start,
                        isVerify: internalStep.value === PasswordlessLoginStep.Verify
                    }));
                    const internalCode = computed({
                        get() {
                            var _a;
                            return (_a = props.modelValue.code) !== null && _a !== void 0 ? _a : "";
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { code: newValue }));
                        }
                    });
                    const internalState = computed({
                        get() {
                            var _a;
                            return (_a = props.modelValue.state) !== null && _a !== void 0 ? _a : "";
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { state: newValue }));
                        }
                    });
                    const internalStep = computed({
                        get() {
                            return props.modelValue.step;
                        },
                        set(newValue) {
                            emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { step: newValue }));
                        }
                    });
                    const communicationType = computed(() => passwordlessLoginStartRequest.value.email ? "email" : passwordlessLoginStartRequest.value.phoneNumber ? "phone number" : "data");
                    function onResendCode() {
                        internalCode.value = "";
                        passwordlessLoginVerifyOptions.value.code = "";
                        internalStep.value = PasswordlessLoginStep.Start;
                    }
                    function onStartPasswordlessLogin() {
                        internalCode.value = "";
                        passwordlessLoginVerifyOptions.value.code = "";
                        internalState.value = "";
                        emit("start", passwordlessLoginStartRequest.value);
                    }
                    function onVerifyPasswordlessLogin() {
                        return __awaiter(this, void 0, void 0, function* () {
                            emit("verify", {
                                code: passwordlessLoginVerifyOptions.value.code,
                                matchingPersonValue: passwordlessLoginVerifyOptions.value.matchingPersonValue,
                                state: passwordlessLoginVerifyOptions.value.state,
                            });
                        });
                    }
                    watch(() => props.modelValue, (newPasswordlessLoginOptions, oldPasswordlessLoginOptions) => {
                        if (newPasswordlessLoginOptions.code !== oldPasswordlessLoginOptions.code) {
                            passwordlessLoginVerifyOptions.value.code = newPasswordlessLoginOptions.code;
                        }
                        if (newPasswordlessLoginOptions.isPersonSelectionRequired !== oldPasswordlessLoginOptions.isPersonSelectionRequired) {
                            passwordlessLoginVerifyOptions.value.isPersonSelectionRequired = newPasswordlessLoginOptions.isPersonSelectionRequired;
                        }
                        if (newPasswordlessLoginOptions.matchingPeople !== oldPasswordlessLoginOptions.matchingPeople) {
                            passwordlessLoginVerifyOptions.value.matchingPeople = newPasswordlessLoginOptions.matchingPeople;
                        }
                        if (newPasswordlessLoginOptions.state !== oldPasswordlessLoginOptions.state) {
                            passwordlessLoginVerifyOptions.value.state = newPasswordlessLoginOptions.state;
                        }
                    });
                    onMounted(() => {
                        if (props.modelValue.isAutomaticVerificationRequired) {
                            submitPasswordlessLoginVerification.value = true;
                        }
                    });
                    const __returned__ = { props, emit, passwordlessLoginStartRequest, passwordlessLoginVerifyOptions, submitPasswordlessLoginVerification, passwordlessLoginStep, internalCode, internalState, internalStep, communicationType, onResendCode, onStartPasswordlessLogin, onVerifyPasswordlessLogin, PasswordlessLoginStartStep: exportHelper$3, PasswordlessLoginVerifyStep: exportHelper$2 };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render$1(_ctx, _cache, $props, $setup, $data, $options) {
                return ($setup.passwordlessLoginStep.isStart)
                    ? (openBlock(), createBlock($setup["PasswordlessLoginStartStep"], {
                        key: 0,
                        modelValue: $setup.passwordlessLoginStartRequest,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.passwordlessLoginStartRequest) = $event)),
                        disabled: $props.disabled,
                        isMobileForced: $props.isMobileForced,
                        onStart: $setup.onStartPasswordlessLogin
                    }, null, 8, ["modelValue", "disabled", "isMobileForced"]))
                    : ($setup.passwordlessLoginStep.isVerify)
                        ? (openBlock(), createBlock($setup["PasswordlessLoginVerifyStep"], {
                            key: 1,
                            modelValue: $setup.passwordlessLoginVerifyOptions,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.passwordlessLoginVerifyOptions) = $event)),
                            submitPasswordlessLoginVerification: $setup.submitPasswordlessLoginVerification,
                            "onUpdate:submitPasswordlessLoginVerification": _cache[2] || (_cache[2] = $event => (($setup.submitPasswordlessLoginVerification) = $event)),
                            communicationType: $setup.communicationType,
                            disabled: $props.disabled,
                            isMobileForced: $props.isMobileForced,
                            onResendCode: $setup.onResendCode,
                            onVerify: $setup.onVerifyPasswordlessLogin
                        }, null, 8, ["modelValue", "submitPasswordlessLoginVerification", "communicationType", "disabled", "isMobileForced"]))
                        : createCommentVNode("v-if", true);
            }
            const exportHelper$1 = _sfc_main$1;
            for (const [key, val] of [["render", render$1]]) {
                exportHelper$1[key] = val;
            }

            const _sfc_main = defineComponent({
                name: 'login',
                setup(__props, { expose }) {
                    var _a, _b;
                    expose();
                    const config = useConfigurationValues();
                    const invokeBlockAction = useInvokeBlockAction();
                    const isMobileForced = !!document.getElementById("splash");
                    const isAuthenticating = ref(config.shouldRedirect);
                    const completedCaption = ref(null);
                    const errorMessage = ref(config.errorMessage || null);
                    const isNavigating = ref(false);
                    const passwordlessLoginOptions = ref({
                        code: (_a = config.passwordlessAutoVerifyOptions) === null || _a === void 0 ? void 0 : _a.code,
                        state: (_b = config.passwordlessAutoVerifyOptions) === null || _b === void 0 ? void 0 : _b.state,
                        isAutomaticVerificationRequired: !!config.passwordlessAutoVerifyOptions,
                        isPersonSelectionRequired: false,
                        matchingPeople: null,
                        step: config.passwordlessAutoVerifyOptions ? PasswordlessLoginStep.Verify : PasswordlessLoginStep.Start
                    });
                    const isCompleted = ref(false);
                    const areBothInternalAuthProvidersVisible = computed(() => config.isInternalDatabaseLoginSupported && config.isPasswordlessLoginSupported);
                    const isAnyExternalAuthProviderVisible = computed(() => { var _a; return !!((_a = config.externalAuthProviderButtons) === null || _a === void 0 ? void 0 : _a.length); });
                    const areSecondaryAndPrimaryAuthVisible = computed(() => {
                        const isAnyInternalAuthProviderVisible = config.isInternalDatabaseLoginSupported || config.isPasswordlessLoginSupported;
                        return (isAnyExternalAuthProviderVisible.value && isAnyInternalAuthProviderVisible) || areBothInternalAuthProvidersVisible.value;
                    });
                    const loginMethod = ref(getInitialLoginMethod());
                    const internalLoginMethod = computed({
                        get() {
                            return passwordlessLoginOptions.value.isAutomaticVerificationRequired ? LoginMethod.Passwordless : loginMethod.value;
                        },
                        set(newValue) {
                            loginMethod.value = newValue;
                        }
                    });
                    const loginMethodWrapper = computed(() => ({
                        isCredential: internalLoginMethod.value === LoginMethod.InternalDatabase,
                        isPasswordless: internalLoginMethod.value === LoginMethod.Passwordless
                    }));
                    function onCredentialLogin(bag) {
                        return __awaiter(this, void 0, void 0, function* () {
                            isAuthenticating.value = true;
                            try {
                                const response = yield invokeBlockAction("CredentialLogin", { bag });
                                if (!(response === null || response === void 0 ? void 0 : response.isSuccess) || !response.data) {
                                    showError((response === null || response === void 0 ? void 0 : response.errorMessage) || "Something went wrong. Please try again.");
                                    return;
                                }
                                if (response.data.isAuthenticated) {
                                    yield navigate(response.data.redirectUrl || "/");
                                    return;
                                }
                                if (response.data.isConfirmationRequired) {
                                    showCompleted(response.data.errorMessage || response.errorMessage);
                                    return;
                                }
                                showError(response.data.errorMessage || "Authentication failed. Please try again.");
                            }
                            finally {
                                isAuthenticating.value = false;
                            }
                        });
                    }
                    function onExternalLogin(externalLogin) {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            isAuthenticating.value = true;
                            const bag = {
                                authenticationType: externalLogin.authenticationType
                            };
                            try {
                                const response = yield invokeBlockAction("RemoteLoginStart", { bag });
                                if ((response === null || response === void 0 ? void 0 : response.isSuccess) && ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.redirectUrl)) {
                                    yield navigate(response.data.redirectUrl);
                                    return;
                                }
                                showError(response === null || response === void 0 ? void 0 : response.errorMessage);
                                return;
                            }
                            finally {
                                isAuthenticating.value = false;
                            }
                        });
                    }
                    function onForgotAccount() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            yield navigate((_a = config.helpPageUrl) !== null && _a !== void 0 ? _a : "/");
                        });
                    }
                    function onPasswordlessLoginStart(bag) {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            isAuthenticating.value = true;
                            clearError();
                            try {
                                const response = yield invokeBlockAction("PasswordlessLoginStart", { bag });
                                if (!(response === null || response === void 0 ? void 0 : response.isSuccess) || !response.data) {
                                    showError((response === null || response === void 0 ? void 0 : response.errorMessage) || "Something went wrong. Please try again.");
                                    return;
                                }
                                if (response.data.isSuccessful) {
                                    passwordlessLoginOptions.value = Object.assign(Object.assign({}, passwordlessLoginOptions.value), { state: response.data.state || "", step: PasswordlessLoginStep.Verify });
                                    return;
                                }
                                passwordlessLoginOptions.value = Object.assign(Object.assign({}, passwordlessLoginOptions.value), { step: PasswordlessLoginStep.Start });
                                showError(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.errorMessage) || (response === null || response === void 0 ? void 0 : response.errorMessage) || "An unknown error occurred. Please submit email or phone number again.");
                                return;
                            }
                            finally {
                                isAuthenticating.value = false;
                            }
                        });
                    }
                    function onPasswordlessLoginVerify(bag) {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            isAuthenticating.value = true;
                            clearError();
                            try {
                                var response = yield invokeBlockAction("PasswordlessLoginVerify", { bag });
                                if (!response || !response.isSuccess || !response.data) {
                                    showError("Something went wrong. Please try again.");
                                    return;
                                }
                                if (response.data.isAuthenticated) {
                                    yield navigate(config.redirectUrl || "/");
                                    return;
                                }
                                if (response.data.isRegistrationRequired) {
                                    if (!response.data.registrationUrl) {
                                        showError("Redirecting to default registration page");
                                    }
                                    yield navigate(response.data.registrationUrl || "/NewAccount");
                                    return;
                                }
                                if (response.data.isPersonSelectionRequired) {
                                    passwordlessLoginOptions.value = Object.assign(Object.assign({}, passwordlessLoginOptions.value), { isPersonSelectionRequired: true, matchingPeople: response.data.matchingPeople || [] });
                                    return;
                                }
                                showError((_a = response.data.errorMessage) !== null && _a !== void 0 ? _a : "Authentication failed. Please try again.");
                            }
                            finally {
                                isAuthenticating.value = false;
                            }
                        });
                    }
                    function onRegister() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            yield navigate((_a = config.newAccountPageUrl) !== null && _a !== void 0 ? _a : "/");
                        });
                    }
                    function clearError() {
                        errorMessage.value = null;
                    }
                    function getInitialLoginMethod() {
                        const configuredDefaultLoginMethod = config.defaultLoginMethod;
                        switch (configuredDefaultLoginMethod) {
                            case LoginMethod.InternalDatabase: {
                                if (!config.isInternalDatabaseLoginSupported && config.isPasswordlessLoginSupported) {
                                    return LoginMethod.Passwordless;
                                }
                                break;
                            }
                            case LoginMethod.Passwordless: {
                                if (!config.isPasswordlessLoginSupported && config.isInternalDatabaseLoginSupported) {
                                    return LoginMethod.InternalDatabase;
                                }
                                break;
                            }
                        }
                        return configuredDefaultLoginMethod;
                    }
                    function navigate(url) {
                        return __awaiter(this, void 0, void 0, function* () {
                            isNavigating.value = true;
                            window.location.href = url;
                            return new Promise((_resolve, _reject) => {
                            });
                        });
                    }
                    function showCompleted(caption) {
                        completedCaption.value = caption || "An unknown error occurred";
                        isCompleted.value = true;
                    }
                    function showError(error) {
                        errorMessage.value = error || "An unknown error occurred";
                    }
                    onMounted(() => {
                        if (config.shouldRedirect && config.redirectUrl) {
                            navigate(config.redirectUrl);
                        }
                    });
                    removeCurrentUrlQueryParams("State", "Code", "IsPasswordless");
                    onConfigurationValuesChanged(useReloadBlock());
                    const __returned__ = { config, invokeBlockAction, isMobileForced, isAuthenticating, completedCaption, errorMessage, isNavigating, passwordlessLoginOptions, isCompleted, areBothInternalAuthProvidersVisible, isAnyExternalAuthProviderVisible, areSecondaryAndPrimaryAuthVisible, loginMethod, internalLoginMethod, loginMethodWrapper, onCredentialLogin, onExternalLogin, onForgotAccount, onPasswordlessLoginStart, onPasswordlessLoginVerify, onRegister, clearError, getInitialLoginMethod, navigate, showCompleted, showError, CredentialLogin: exportHelper$6, Divider: exportHelper$7, ExternalLogin: exportHelper$5, LoginMethodPicker: exportHelper$4, PasswordlessLogin: exportHelper$1, Alert };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { key: 0 };
            const _hoisted_2 = {
                key: 1,
                class: "login-block"
            };
            const _hoisted_3 = createElementVNode("fieldset", null, [
                createElementVNode("legend", null, "Log In")
            ], -1);
            const _hoisted_4 = {
                key: 2,
                class: "mt-3"
            };
            const _hoisted_5 = ["innerHTML"];
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                var _a, _b;
                return ($setup.isCompleted)
                    ? (openBlock(), createElementBlock("div", _hoisted_1, [
                        createVNode($setup["Alert"], {
                            alertType: "warning",
                            innerHTML: $setup.completedCaption
                        }, null, 8, ["innerHTML"])
                    ]))
                    : (openBlock(), createElementBlock("div", _hoisted_2, [
                        _hoisted_3,
                        ((_a = $setup.config.configurationErrors) === null || _a === void 0 ? void 0 : _a.length)
                            ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($setup.config.configurationErrors, (configError) => {
                                return (openBlock(), createBlock($setup["Alert"], {
                                    alertType: "warning",
                                    textContent: toDisplayString(configError)
                                }, null, 8, ["textContent"]));
                            }), 256))
                            : createCommentVNode("v-if", true),
                        createElementVNode("div", {
                            class: normalizeClass($setup.isMobileForced ? 'row' : 'row d-sm-flex')
                        }, [
                            ($setup.isAnyExternalAuthProviderVisible || $setup.areBothInternalAuthProvidersVisible)
                                ? (openBlock(), createElementBlock("div", {
                                    key: 0,
                                    class: normalizeClass($setup.isMobileForced ? '' : 'col-sm-5')
                                }, [
                                    ($setup.isAnyExternalAuthProviderVisible)
                                        ? (openBlock(), createBlock($setup["ExternalLogin"], {
                                            key: 0,
                                            modelValue: $setup.config.externalAuthProviderButtons || [],
                                            caption: (_b = $setup.config.remoteAuthorizationPromptMessage) !== null && _b !== void 0 ? _b : '',
                                            disabled: $setup.isAuthenticating || $setup.isNavigating,
                                            onLogin: _cache[0] || (_cache[0] = $event => ($setup.onExternalLogin($event)))
                                        }, null, 8, ["modelValue", "caption", "disabled"]))
                                        : createCommentVNode("v-if", true),
                                    ($setup.areBothInternalAuthProvidersVisible)
                                        ? (openBlock(), createBlock($setup["LoginMethodPicker"], {
                                            key: 1,
                                            modelValue: $setup.internalLoginMethod,
                                            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.internalLoginMethod) = $event)),
                                            disabled: $setup.isAuthenticating || $setup.isNavigating,
                                            isCredentialLoginSupported: $setup.config.isInternalDatabaseLoginSupported,
                                            isPasswordlessLoginSupported: $setup.config.isPasswordlessLoginSupported
                                        }, null, 8, ["modelValue", "disabled", "isCredentialLoginSupported", "isPasswordlessLoginSupported"]))
                                        : createCommentVNode("v-if", true)
                                ], 2))
                                : createCommentVNode("v-if", true),
                            ($setup.areSecondaryAndPrimaryAuthVisible)
                                ? (openBlock(), createBlock($setup["Divider"], {
                                    key: 1,
                                    class: normalizeClass($setup.isMobileForced ? 'd-flex' : 'd-flex d-sm-none col-sm-1'),
                                    content: "or"
                                }, null, 8, ["class"]))
                                : createCommentVNode("v-if", true),
                            (!$setup.isMobileForced && $setup.areSecondaryAndPrimaryAuthVisible)
                                ? (openBlock(), createBlock($setup["Divider"], {
                                    key: 2,
                                    class: "d-none d-sm-flex col-sm-1",
                                    content: "or",
                                    isVertical: true
                                }))
                                : createCommentVNode("v-if", true),
                            createElementVNode("div", {
                                class: normalizeClass($setup.isMobileForced ? '' : $setup.areSecondaryAndPrimaryAuthVisible ? 'col-sm-6' : 'col-sm-12')
                            }, [
                                ($setup.config.isInternalDatabaseLoginSupported && $setup.loginMethodWrapper.isCredential)
                                    ? (openBlock(), createBlock($setup["CredentialLogin"], {
                                        key: 0,
                                        config: $setup.config,
                                        disabled: $setup.isAuthenticating || $setup.isNavigating,
                                        isMobileForced: $setup.isMobileForced,
                                        onForgotAccount: _cache[2] || (_cache[2] = $event => ($setup.onForgotAccount())),
                                        onLogin: _cache[3] || (_cache[3] = $event => ($setup.onCredentialLogin($event))),
                                        onRegister: _cache[4] || (_cache[4] = $event => ($setup.onRegister()))
                                    }, null, 8, ["config", "disabled"]))
                                    : ($setup.config.isPasswordlessLoginSupported && $setup.loginMethodWrapper.isPasswordless)
                                        ? (openBlock(), createBlock($setup["PasswordlessLogin"], {
                                            key: 1,
                                            modelValue: $setup.passwordlessLoginOptions,
                                            "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.passwordlessLoginOptions) = $event)),
                                            config: $setup.config,
                                            disabled: $setup.isAuthenticating || $setup.isNavigating,
                                            isMobileForced: $setup.isMobileForced,
                                            onStart: _cache[6] || (_cache[6] = $event => ($setup.onPasswordlessLoginStart($event))),
                                            onVerify: _cache[7] || (_cache[7] = $event => ($setup.onPasswordlessLoginVerify($event)))
                                        }, null, 8, ["modelValue", "config", "disabled"]))
                                        : createCommentVNode("v-if", true),
                                ($setup.errorMessage)
                                    ? (openBlock(), createElementBlock("div", _hoisted_4, [
                                        createVNode($setup["Alert"], {
                                            alertType: "warning",
                                            innerHTML: $setup.errorMessage
                                        }, null, 8, ["innerHTML"])
                                    ]))
                                    : createCommentVNode("v-if", true)
                            ], 2)
                        ], 2),
                        ($setup.config.contentText)
                            ? (openBlock(), createElementBlock("div", {
                                key: 1,
                                class: "mt-3 row col-sm-12",
                                innerHTML: $setup.config.contentText
                            }, null, 8, _hoisted_5))
                            : createCommentVNode("v-if", true)
                    ]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
