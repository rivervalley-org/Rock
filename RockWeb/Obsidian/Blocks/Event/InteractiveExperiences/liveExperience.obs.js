System.register(['tslib', 'vue', '@Obsidian/Controls/alert.obs', '@Obsidian/Controls/rockButton', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Controls/radioButtonList', '@Obsidian/Utility/realTime', '@Obsidian/Utility/block'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, watch, createTextVNode, openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, withDirectives, vModelText, createBlock, withCtx, createCommentVNode, createVNode, resolveComponent, normalizeStyle, resolveDynamicComponent, Alert, RockButton, BtnType, RadioButtonList, getTopic, useConfigurationValues, onConfigurationValuesChanged, useReloadBlock;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            createTextVNode = module.createTextVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            normalizeClass = module.normalizeClass;
            createElementVNode = module.createElementVNode;
            toDisplayString = module.toDisplayString;
            withDirectives = module.withDirectives;
            vModelText = module.vModelText;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createCommentVNode = module.createCommentVNode;
            createVNode = module.createVNode;
            resolveComponent = module.resolveComponent;
            normalizeStyle = module.normalizeStyle;
            resolveDynamicComponent = module.resolveDynamicComponent;
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            BtnType = module.BtnType;
        }, function (module) {
            RadioButtonList = module["default"];
        }, function (module) {
            getTopic = module.getTopic;
        }, function (module) {
            useConfigurationValues = module.useConfigurationValues;
            onConfigurationValuesChanged = module.onConfigurationValuesChanged;
            useReloadBlock = module.useReloadBlock;
        }],
        execute: (function () {

            exports('render', render);

            const actionProps = {
                eventId: {
                    type: String,
                    required: true
                },
                actionId: {
                    type: String,
                    required: true
                },
                renderConfiguration: {
                    type: Object,
                    required: true
                },
                realTimeTopic: {
                    type: Object,
                    required: true
                }
            };

            const _sfc_main$2 = defineComponent({
                name: 'actionShortAnswer.partial',
                props: actionProps,
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const answerText = ref("");
                    const isAnswerSubmitted = ref(false);
                    const errorMessage = ref("");
                    const additionalActionClasses = computed(() => {
                        return `experience-action-${props.renderConfiguration.actionId}`;
                    });
                    const questionText = computed(() => {
                        var _a, _b;
                        return (_b = (_a = props.renderConfiguration.configurationValues) === null || _a === void 0 ? void 0 : _a["question"]) !== null && _b !== void 0 ? _b : "";
                    });
                    const isButtonDisabled = computed(() => {
                        return !answerText.value;
                    });
                    const isAnswerDisabled = computed(() => {
                        return isAnswerSubmitted.value && !props.renderConfiguration.isMultipleSubmissionAllowed;
                    });
                    function onSubmitClick() {
                        return __awaiter(this, void 0, void 0, function* () {
                            let result;
                            try {
                                result = yield props.realTimeTopic.server.postResponse(props.eventId, props.actionId, answerText.value);
                            }
                            catch (error) {
                                result = 400;
                                console.error(error);
                            }
                            if (result === 200) {
                                answerText.value = "";
                                errorMessage.value = "";
                                isAnswerSubmitted.value = true;
                            }
                            else if (result === 409) {
                                answerText.value = "";
                                errorMessage.value = "Multiple answers are not allowed and you have previously submitted an answer.";
                                isAnswerSubmitted.value = true;
                            }
                            else {
                                errorMessage.value = "Unable to submit your answer.";
                            }
                        });
                    }
                    watch(() => props.actionId, () => {
                        isAnswerSubmitted.value = false;
                        errorMessage.value = "";
                    });
                    const __returned__ = { props, answerText, isAnswerSubmitted, errorMessage, additionalActionClasses, questionText, isButtonDisabled, isAnswerDisabled, onSubmitClick, Alert, RockButton, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$2 = { class: "question" };
            const _hoisted_2$2 = { class: "answer" };
            const _hoisted_3$2 = { class: "form-group" };
            const _hoisted_4$2 = ["disabled"];
            const _hoisted_5$1 = { class: "submit" };
            const _hoisted_6$1 = createTextVNode(" Submit ");
            function render$2(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", {
                    class: normalizeClass(["experience-action experience-action-type-5ffe1f8f-5f0b-4b34-9c3f-1706d9093210", $setup.additionalActionClasses])
                }, [
                    createElementVNode("div", _hoisted_1$2, toDisplayString($setup.questionText), 1),
                    createElementVNode("div", _hoisted_2$2, [
                        createElementVNode("div", _hoisted_3$2, [
                            withDirectives(createElementVNode("input", {
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.answerText) = $event)),
                                class: "form-control",
                                type: "text",
                                disabled: $setup.isAnswerDisabled
                            }, null, 8, _hoisted_4$2), [
                                [vModelText, $setup.answerText]
                            ])
                        ])
                    ]),
                    ($setup.errorMessage)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 0,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.errorMessage), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    createElementVNode("div", _hoisted_5$1, [
                        createVNode($setup["RockButton"], {
                            btnType: $setup.BtnType.Primary,
                            disabled: $setup.isButtonDisabled,
                            onClick: $setup.onSubmitClick
                        }, {
                            default: withCtx(() => [
                                _hoisted_6$1
                            ]),
                            _: 1
                        }, 8, ["btnType", "disabled"])
                    ])
                ], 2));
            }
            const __sfc_style$2 = document.createElement("style");
            __sfc_style$2.textContent = `.experience-action-type-5ffe1f8f-5f0b-4b34-9c3f-1706d9093210 .question::before,
.experience-action-type-5ffe1f8f-5f0b-4b34-9c3f-1706d9093210 .answer::before {
    display: block;
    margin-bottom: 4px;
    font-size: 3em;
    font-weight: 700;
    line-height: 1.2;
    content: 'Q:';
}
.experience-action-type-5ffe1f8f-5f0b-4b34-9c3f-1706d9093210 .answer::before {
    content: 'A:';
}
.experience-action-type-5ffe1f8f-5f0b-4b34-9c3f-1706d9093210 .answer,
.experience-action-type-5ffe1f8f-5f0b-4b34-9c3f-1706d9093210 .submit {
    margin-top: 18px;
}`;
            document.head.appendChild(__sfc_style$2);
            const exportHelper$2 = _sfc_main$2;
            for (const [key, val] of [["render", render$2]]) {
                exportHelper$2[key] = val;
            }

            const _sfc_main$1 = defineComponent({
                name: 'actionPoll.partial',
                props: actionProps,
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const answerText = ref("");
                    const isAnswerSubmitted = ref(false);
                    const errorMessage = ref("");
                    const answerItems = computed(() => {
                        var _a, _b, _c;
                        const answers = (_c = JSON.parse((_b = (_a = props.renderConfiguration.configurationValues) === null || _a === void 0 ? void 0 : _a.answers) !== null && _b !== void 0 ? _b : "[]")) !== null && _c !== void 0 ? _c : [];
                        return answers.map(a => ({
                            value: a,
                            text: a,
                            category: isAnswerSubmitted.value && !props.renderConfiguration.isMultipleSubmissionAllowed ? "disabled" : undefined
                        }));
                    });
                    const additionalActionClasses = computed(() => {
                        return `experience-action-${props.renderConfiguration.actionId}`;
                    });
                    const questionText = computed(() => {
                        var _a, _b;
                        return (_b = (_a = props.renderConfiguration.configurationValues) === null || _a === void 0 ? void 0 : _a["question"]) !== null && _b !== void 0 ? _b : "";
                    });
                    const isButtonDisabled = computed(() => {
                        return !answerText.value;
                    });
                    function onSubmitClick() {
                        return __awaiter(this, void 0, void 0, function* () {
                            let result;
                            try {
                                result = yield props.realTimeTopic.server.postResponse(props.eventId, props.actionId, answerText.value);
                            }
                            catch (error) {
                                result = 400;
                                console.error(error);
                            }
                            if (result === 200) {
                                answerText.value = "";
                                errorMessage.value = "";
                                isAnswerSubmitted.value = true;
                            }
                            else if (result === 409) {
                                answerText.value = "";
                                errorMessage.value = "Multiple answers are not allowed and you have previously submitted an answer.";
                                isAnswerSubmitted.value = true;
                            }
                            else {
                                errorMessage.value = "Unable to submit your answer.";
                            }
                        });
                    }
                    watch(() => props.actionId, () => {
                        isAnswerSubmitted.value = false;
                        errorMessage.value = "";
                    });
                    const __returned__ = { props, answerText, isAnswerSubmitted, errorMessage, answerItems, additionalActionClasses, questionText, isButtonDisabled, onSubmitClick, RockButton, RadioButtonList, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$1 = { class: "question" };
            const _hoisted_2$1 = { class: "answers" };
            const _hoisted_3$1 = { class: "submit" };
            const _hoisted_4$1 = createTextVNode(" Submit ");
            function render$1(_ctx, _cache, $props, $setup, $data, $options) {
                const _component_Alert = resolveComponent("Alert");
                return (openBlock(), createElementBlock("div", {
                    class: normalizeClass(["experience-action experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e", $setup.additionalActionClasses])
                }, [
                    createElementVNode("div", _hoisted_1$1, toDisplayString($setup.questionText), 1),
                    createElementVNode("div", _hoisted_2$1, [
                        createVNode($setup["RadioButtonList"], {
                            modelValue: $setup.answerText,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.answerText) = $event)),
                            items: $setup.answerItems,
                            disabled: ""
                        }, null, 8, ["modelValue", "items"])
                    ]),
                    ($setup.errorMessage)
                        ? (openBlock(), createBlock(_component_Alert, {
                            key: 0,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.errorMessage), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    createElementVNode("div", _hoisted_3$1, [
                        createVNode($setup["RockButton"], {
                            btnType: $setup.BtnType.Primary,
                            disabled: $setup.isButtonDisabled,
                            onClick: $setup.onSubmitClick
                        }, {
                            default: withCtx(() => [
                                _hoisted_4$1
                            ]),
                            _: 1
                        }, 8, ["btnType", "disabled"])
                    ])
                ], 2));
            }
            const __sfc_style$1 = document.createElement("style");
            __sfc_style$1.textContent = `.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .question::before,
.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers::before {
    display: block;
    margin-bottom: 4px;
    font-size: 3em;
    font-weight: 700;
    line-height: 1.2;
    content: 'Q:';
}
.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers::before {
    content: 'A:';
}
.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers {
    margin-top: 18px;
}
.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers .radio {
    padding-left: 0;
    margin-bottom: 12px;
}
.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers .radio .label-text::before,
.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers .radio .label-text::after {
    display: none;
}
.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers label {
    display: block;
}
.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers input {
    display: none;
}
.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers .label-text {
    display: block;
    padding: 6px 12px;
    border: 2px solid var(--experience-action-secondary-btn-bg);
    border-radius: var(--border-radius-base, 4px);
    transition: background-color .25s ease-in-out, color .25s ease-in-out;
}
.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers input:checked + .label-text {
    color: var(--experience-action-secondary-btn-color);
    background-color: var(--experience-action-secondary-btn-bg);
}
.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .submit {
    margin-top: 18px;
}`;
            document.head.appendChild(__sfc_style$1);
            const exportHelper$1 = _sfc_main$1;
            for (const [key, val] of [["render", render$1]]) {
                exportHelper$1[key] = val;
            }

            const _sfc_main = defineComponent({
                name: 'liveExperience',
                setup(__props, { expose }) {
                    expose();
                    const config = useConfigurationValues();
                    const actionTypeLookup = {
                        "5ffe1f8f-5f0b-4b34-9c3f-1706d9093210": exportHelper$2,
                        "9256a5b7-480d-4ffa-86d1-03b8aefc254e": exportHelper$1
                    };
                    const eventId = ref(null);
                    const isReady = ref(false);
                    const realTimeTopic = ref(null);
                    const activeActionId = ref(null);
                    const activeActionComponent = ref(null);
                    const activeActionRenderConfiguration = ref(null);
                    const isExperienceInactive = ref(config.isExperienceInactive);
                    const isWelcomeState = ref(!isExperienceInactive.value);
                    const experienceStyles = getExperienceStyles();
                    const isWelcomeContentVisible = computed(() => {
                        return isReady.value && !isExperienceInactive.value && !!realTimeTopic.value && isWelcomeState.value;
                    });
                    const isNoActionContentVisible = computed(() => {
                        return isReady.value && !isExperienceInactive.value && !isWelcomeContentVisible.value && !activeActionComponent.value;
                    });
                    const welcomeHeaderImageUrl = computed(() => {
                        var _a, _b, _c;
                        return (_c = (_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.welcome) === null || _b === void 0 ? void 0 : _b.headerImage) !== null && _c !== void 0 ? _c : null;
                    });
                    const noActionHeaderImageUrl = computed(() => {
                        var _a, _b, _c;
                        return (_c = (_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.noAction) === null || _b === void 0 ? void 0 : _b.headerImage) !== null && _c !== void 0 ? _c : null;
                    });
                    function startRealTime(isReconnecting) {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            const experienceToken = config.experienceToken;
                            if (!experienceToken) {
                                throw new Error("Missing experience token from server.");
                            }
                            const topic = yield getTopic("Rock.RealTime.Topics.InteractiveExperienceParticipantTopic");
                            topic.onDisconnected(() => __awaiter(this, void 0, void 0, function* () {
                                yield startRealTime(true);
                            }));
                            const response = yield topic.server.joinExperience(experienceToken);
                            eventId.value = (_a = response.occurrenceIdKey) !== null && _a !== void 0 ? _a : null;
                            topic.on("showAction", onShowAction);
                            topic.on("clearActions", onClearActions);
                            realTimeTopic.value = topic;
                            isReady.value = true;
                            if (response.currentActionIdKey && response.currentActionConfiguration) {
                                setupActionComponent(response.currentActionIdKey, response.currentActionConfiguration);
                            }
                            if (!isReconnecting) {
                                setTimeout(onPingTimer, config.keepAliveInterval * 1000);
                            }
                        });
                    }
                    function setupActionComponent(actionId, renderConfiguration) {
                        if (!isReady.value || isExperienceInactive.value || !renderConfiguration.actionTypeGuid || !actionTypeLookup[renderConfiguration.actionTypeGuid]) {
                            activeActionComponent.value = null;
                            activeActionId.value = null;
                            activeActionRenderConfiguration.value = null;
                            isWelcomeState.value = false;
                            return;
                        }
                        activeActionComponent.value = actionTypeLookup[renderConfiguration.actionTypeGuid];
                        activeActionId.value = actionId;
                        activeActionRenderConfiguration.value = renderConfiguration;
                        isWelcomeState.value = false;
                    }
                    function getExperienceStyles() {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
                        const styles = {};
                        if ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.welcome) === null || _b === void 0 ? void 0 : _b.headerImage) {
                            styles["--welcome-header-image"] = `url('${config.style.welcome.headerImage}')`;
                        }
                        if ((_d = (_c = config.style) === null || _c === void 0 ? void 0 : _c.noAction) === null || _d === void 0 ? void 0 : _d.headerImage) {
                            styles["--no-action-header-image"] = `url('${config.style.noAction.headerImage}')`;
                        }
                        if ((_f = (_e = config.style) === null || _e === void 0 ? void 0 : _e.action) === null || _f === void 0 ? void 0 : _f.backgroundColor) {
                            styles["--experience-action-bg"] = config.style.action.backgroundColor;
                        }
                        if ((_h = (_g = config.style) === null || _g === void 0 ? void 0 : _g.action) === null || _h === void 0 ? void 0 : _h.backgroundImage) {
                            styles["--experience-action-bg-image"] = `url('${config.style.action.backgroundImage}')`;
                        }
                        if ((_k = (_j = config.style) === null || _j === void 0 ? void 0 : _j.action) === null || _k === void 0 ? void 0 : _k.primaryButtonColor) {
                            styles["--experience-action-primary-btn-bg"] = config.style.action.primaryButtonColor;
                        }
                        else {
                            styles["--experience-action-primary-btn-bg"] = "var(--brand-primary)";
                        }
                        if ((_m = (_l = config.style) === null || _l === void 0 ? void 0 : _l.action) === null || _m === void 0 ? void 0 : _m.primaryButtonTextColor) {
                            styles["--experience-action-primary-btn-color"] = config.style.action.primaryButtonTextColor;
                        }
                        else {
                            styles["--experience-action-primary-btn-color"] = "#fff";
                        }
                        if ((_p = (_o = config.style) === null || _o === void 0 ? void 0 : _o.action) === null || _p === void 0 ? void 0 : _p.secondaryButtonColor) {
                            styles["--experience-action-secondary-btn-bg"] = config.style.action.secondaryButtonColor;
                        }
                        else {
                            styles["--experience-action-secondary-btn-bg"] = "var(--brand-info)";
                        }
                        if ((_r = (_q = config.style) === null || _q === void 0 ? void 0 : _q.action) === null || _r === void 0 ? void 0 : _r.secondaryButtonTextColor) {
                            styles["--experience-action-secondary-btn-color"] = config.style.action.secondaryButtonTextColor;
                        }
                        else {
                            styles["--experience-action-secondary-btn-color"] = "#fff";
                        }
                        if ((_t = (_s = config.style) === null || _s === void 0 ? void 0 : _s.action) === null || _t === void 0 ? void 0 : _t.textColor) {
                            styles["--experience-action-color"] = config.style.action.textColor;
                        }
                        else {
                            styles["--experience-action-color"] = "var(--text-color)";
                        }
                        return styles;
                    }
                    function setupCustomStyles() {
                        var _a, _b;
                        if ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.action) === null || _b === void 0 ? void 0 : _b.customCss) {
                            const styleNode = document.createElement("style");
                            styleNode.textContent = config.style.action.customCss;
                            document.head.appendChild(styleNode);
                        }
                    }
                    function onShowAction(id, actionId, renderConfiguration) {
                        if (eventId.value === id) {
                            setupActionComponent(actionId, renderConfiguration);
                        }
                    }
                    function onClearActions(id) {
                        if (eventId.value === id) {
                            activeActionComponent.value = null;
                            activeActionId.value = null;
                            activeActionRenderConfiguration.value = null;
                        }
                    }
                    function onPingTimer() {
                        return __awaiter(this, void 0, void 0, function* () {
                            try {
                                if (realTimeTopic.value && eventId.value) {
                                    yield realTimeTopic.value.server.pingExperience(eventId.value);
                                }
                            }
                            catch (error) {
                                console.error(error instanceof Error ? error.message : error);
                            }
                            finally {
                                setTimeout(onPingTimer, config.keepAliveInterval * 1000);
                            }
                        });
                    }
                    if (document.querySelector("meta[name='viewport']") === null) {
                        const metaNode = document.createElement("meta");
                        metaNode.name = "viewport";
                        metaNode.content = "width=device-width, initial-scale=1";
                        document.head.appendChild(metaNode);
                    }
                    onConfigurationValuesChanged(useReloadBlock());
                    setupCustomStyles();
                    startRealTime(false);
                    const __returned__ = { config, actionTypeLookup, eventId, isReady, realTimeTopic, activeActionId, activeActionComponent, activeActionRenderConfiguration, isExperienceInactive, isWelcomeState, experienceStyles, isWelcomeContentVisible, isNoActionContentVisible, welcomeHeaderImageUrl, noActionHeaderImageUrl, startRealTime, setupActionComponent, getExperienceStyles, setupCustomStyles, onShowAction, onClearActions, onPingTimer, Alert };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "styled-scroll" };
            const _hoisted_2 = createTextVNode(" This experience has ended. ");
            const _hoisted_3 = {
                key: 1,
                class: "welcome"
            };
            const _hoisted_4 = { class: "welcome-header" };
            const _hoisted_5 = ["src"];
            const _hoisted_6 = {
                key: 1,
                class: "welcome-title"
            };
            const _hoisted_7 = { class: "welcome-message" };
            const _hoisted_8 = {
                key: 2,
                class: "no-action"
            };
            const _hoisted_9 = { class: "no-action-header" };
            const _hoisted_10 = ["src"];
            const _hoisted_11 = {
                key: 1,
                class: "no-action-title"
            };
            const _hoisted_12 = { class: "no-action-message" };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                return (openBlock(), createElementBlock("div", _hoisted_1, [
                    createElementVNode("div", {
                        class: "live-experience-body",
                        style: normalizeStyle($setup.experienceStyles)
                    }, [
                        ($setup.isExperienceInactive)
                            ? (openBlock(), createBlock($setup["Alert"], {
                                key: 0,
                                alertType: "warning"
                            }, {
                                default: withCtx(() => [
                                    _hoisted_2
                                ]),
                                _: 1
                            }))
                            : createCommentVNode("v-if", true),
                        ($setup.isWelcomeContentVisible)
                            ? (openBlock(), createElementBlock("div", _hoisted_3, [
                                createElementVNode("div", _hoisted_4, [
                                    ($setup.welcomeHeaderImageUrl)
                                        ? (openBlock(), createElementBlock("img", {
                                            key: 0,
                                            src: $setup.welcomeHeaderImageUrl,
                                            class: "header-image"
                                        }, null, 8, _hoisted_5))
                                        : createCommentVNode("v-if", true),
                                    ((_b = (_a = $setup.config.style) === null || _a === void 0 ? void 0 : _a.welcome) === null || _b === void 0 ? void 0 : _b.title)
                                        ? (openBlock(), createElementBlock("h1", _hoisted_6, toDisplayString($setup.config.style.welcome.title), 1))
                                        : createCommentVNode("v-if", true)
                                ]),
                                createElementVNode("div", _hoisted_7, toDisplayString((_d = (_c = $setup.config.style) === null || _c === void 0 ? void 0 : _c.welcome) === null || _d === void 0 ? void 0 : _d.message), 1)
                            ]))
                            : createCommentVNode("v-if", true),
                        ($setup.isNoActionContentVisible)
                            ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                createElementVNode("div", _hoisted_9, [
                                    ($setup.noActionHeaderImageUrl)
                                        ? (openBlock(), createElementBlock("img", {
                                            key: 0,
                                            src: $setup.noActionHeaderImageUrl,
                                            class: "header-image"
                                        }, null, 8, _hoisted_10))
                                        : createCommentVNode("v-if", true),
                                    ((_f = (_e = $setup.config.style) === null || _e === void 0 ? void 0 : _e.noAction) === null || _f === void 0 ? void 0 : _f.title)
                                        ? (openBlock(), createElementBlock("h1", _hoisted_11, toDisplayString($setup.config.style.noAction.title), 1))
                                        : createCommentVNode("v-if", true)
                                ]),
                                createElementVNode("div", _hoisted_12, toDisplayString((_h = (_g = $setup.config.style) === null || _g === void 0 ? void 0 : _g.noAction) === null || _h === void 0 ? void 0 : _h.message), 1)
                            ]))
                            : createCommentVNode("v-if", true),
                        ($setup.activeActionComponent)
                            ? (openBlock(), createBlock(resolveDynamicComponent($setup.activeActionComponent), {
                                key: 3,
                                eventId: $setup.eventId,
                                actionId: $setup.activeActionId,
                                renderConfiguration: $setup.activeActionRenderConfiguration,
                                realTimeTopic: $setup.realTimeTopic
                            }, null, 8, ["eventId", "actionId", "renderConfiguration", "realTimeTopic"]))
                            : createCommentVNode("v-if", true)
                    ], 4)
                ]));
            }
            const __sfc_style = document.createElement("style");
            __sfc_style.textContent = `body {
    touch-action: none;
}
.live-experience-body {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 18px;
    color: var(--experience-action-color, inherit);
    background-color: var(--experience-action-bg, inherit);
    background-image: var(--experience-action-bg-image, initial);
    background-size: cover;
    overflow: auto;
}
.live-experience-body .btn-primary,
.live-experience-body .btn-primary:hover,
.live-experience-body .btn-primary:focus {
    color: var(--experience-action-primary-btn-color);
    background-color: var(--experience-action-primary-btn-bg);
    border-color: var(--experience-action-primary-btn-bg);
    box-shadow: none;
}
.live-experience-body .btn-secondary,
.live-experience-body .btn-secondary:hover,
.live-experience-body .btn-secondary:focus {
    color: var(--experience-action-secondary-btn-color);
    background-color: var(--experience-action-secondary-btn-bg);
    border-color: var(--experience-action-secondary-btn-bg);
}
.live-experience-body .header-image {
    display: block;
    max-width: 100%;
    height: auto;
}`;
            document.head.appendChild(__sfc_style);
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
