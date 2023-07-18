System.register(['tslib', 'vue', '@Obsidian/Controls/alert.vue', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/kpi.vue', '@Obsidian/Utility/component', '@Obsidian/Controls/inlineCheckBox', '@Obsidian/Controls/rockLabel', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/Controls/campusPicker.vue', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/panel', '@Obsidian/Utility/realTime'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, openBlock, createElementBlock, Fragment, renderList, normalizeClass, withModifiers, createElementVNode, toDisplayString, ref, computed, watch, createTextVNode, pushScopeId, popScopeId, createVNode, createBlock, withCtx, createCommentVNode, reactive, provide, createSlots, withDirectives, vShow, Alert, DropDownList, Kpi, useVModelPassthrough, InlineCheckBox, RockLabel, useInvokeBlockAction, useConfigurationValues, onConfigurationValuesChanged, useReloadBlock, areEqual, CampusPicker, alert, confirm, CheckBoxList, Panel, getTopic;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            renderList = module.renderList;
            normalizeClass = module.normalizeClass;
            withModifiers = module.withModifiers;
            createElementVNode = module.createElementVNode;
            toDisplayString = module.toDisplayString;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            createTextVNode = module.createTextVNode;
            pushScopeId = module.pushScopeId;
            popScopeId = module.popScopeId;
            createVNode = module.createVNode;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createCommentVNode = module.createCommentVNode;
            reactive = module.reactive;
            provide = module.provide;
            createSlots = module.createSlots;
            withDirectives = module.withDirectives;
            vShow = module.vShow;
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            Kpi = module["default"];
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            InlineCheckBox = module["default"];
        }, function (module) {
            RockLabel = module["default"];
        }, function (module) {
            useInvokeBlockAction = module.useInvokeBlockAction;
            useConfigurationValues = module.useConfigurationValues;
            onConfigurationValuesChanged = module.onConfigurationValuesChanged;
            useReloadBlock = module.useReloadBlock;
        }, function (module) {
            areEqual = module.areEqual;
        }, function (module) {
            CampusPicker = module["default"];
        }, function (module) {
            alert = module.alert;
            confirm = module.confirm;
        }, function (module) {
            CheckBoxList = module["default"];
        }, function (module) {
            Panel = module["default"];
        }, function (module) {
            getTopic = module.getTopic;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main$5 = defineComponent({
                name: 'experienceActionButtons.partial',
                props: {
                    modelValue: {
                        type: String,
                        default: null
                    },
                    actions: {
                        type: Array,
                        default: []
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = useVModelPassthrough(props, "modelValue", emit);
                    function getActionItemClass(action) {
                        return action.value === internalValue.value ? "selected" : "";
                    }
                    function getActionSelectedIconClass(action) {
                        return action.value === internalValue.value ? "fa fa-check-circle" : "fa fa-check-circle-o";
                    }
                    function onActionClick(action) {
                        var _a;
                        if (internalValue.value === action.value) {
                            internalValue.value = null;
                        }
                        else {
                            internalValue.value = (_a = action.value) !== null && _a !== void 0 ? _a : null;
                        }
                    }
                    const __returned__ = { props, emit, internalValue, getActionItemClass, getActionSelectedIconClass, onActionClick };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$4 = ["onClick"];
            const _hoisted_2$4 = { class: "action-item-icon" };
            const _hoisted_3$4 = { class: "icon" };
            const _hoisted_4$4 = { class: "action-item-content" };
            const _hoisted_5$3 = { class: "action-item-selected-icon" };
            function render$5(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(true), createElementBlock(Fragment, null, renderList($props.actions, (action, index) => {
                    return (openBlock(), createElementBlock("div", {
                        class: normalizeClass(["action-item", $setup.getActionItemClass(action)]),
                        href: "#",
                        onClick: withModifiers($event => ($setup.onActionClick(action)), ["prevent"])
                    }, [
                        createElementVNode("div", _hoisted_2$4, [
                            createElementVNode("span", null, toDisplayString(index + 1), 1),
                            createElementVNode("span", _hoisted_3$4, [
                                createElementVNode("i", {
                                    class: normalizeClass(action.category)
                                }, null, 2)
                            ])
                        ]),
                        createElementVNode("div", _hoisted_4$4, toDisplayString(action.text), 1),
                        createElementVNode("div", _hoisted_5$3, [
                            createElementVNode("i", {
                                class: normalizeClass($setup.getActionSelectedIconClass(action))
                            }, null, 2)
                        ])
                    ], 10, _hoisted_1$4));
                }), 256));
            }
            const __sfc_style$2 = document.createElement("style");
            __sfc_style$2.textContent = `.action-item[data-v-hbzy2pabiflevh9qn09brszi] {
    display: flex;
    align-items: stretch;
    margin-bottom: 12px;
    cursor: pointer;
}
.action-item > *[data-v-hbzy2pabiflevh9qn09brszi] {
    display: flex;
    align-items: center;
    align-self: stretch;
    padding: 12px;
    color: var(--text-color);
    background-color: #fff;
    border-top: 1px solid #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
    transition: background-color .25s ease-in-out, border-color .25s ease-in-out;
}
.action-item > *[data-v-hbzy2pabiflevh9qn09brszi]:first-child {
    justify-content: center;
    min-width: 64px;
    padding-right: 8px;
    padding-left: 8px;
    border-right: 1px solid #c4c4c4;
    border-left: 1px solid #c4c4c4;
    border-radius: 8px 0 0 8px;
}
.action-item > *[data-v-hbzy2pabiflevh9qn09brszi]:last-child {
    padding-right: 16px;
    border-right: 1px solid #c4c4c4;
    border-radius: 0 8px 8px 0;
}
.action-item > .action-item-icon[data-v-hbzy2pabiflevh9qn09brszi],
.action-item > .action-item-selected-icon[data-v-hbzy2pabiflevh9qn09brszi] {
    color: #777;
}
.action-item > .action-item-icon > .icon[data-v-hbzy2pabiflevh9qn09brszi] {
    margin-left: 8px;
}
.action-item > .action-item-content[data-v-hbzy2pabiflevh9qn09brszi] {
    flex: 1 0;
}
.action-item:hover > *[data-v-hbzy2pabiflevh9qn09brszi] {
    background-color: rgba(85, 150, 230, .1);
}
.action-item.selected > *[data-v-hbzy2pabiflevh9qn09brszi] {
    color: #0079b0;
    background-color: #d9f2fe;
    border-color: #009ce3;
}
.action-item.selected > .action-item-selected-icon[data-v-hbzy2pabiflevh9qn09brszi] {
    color: #009ce3;
}`;
            document.head.appendChild(__sfc_style$2);
            const exportHelper$5 = _sfc_main$5;
            for (const [key, val] of [["render", render$5], ["__scopeId", "data-v-hbzy2pabiflevh9qn09brszi"]]) {
                exportHelper$5[key] = val;
            }

            const _sfc_main$4 = defineComponent({
                name: 'liveEventTab.partial',
                props: {
                    occurrenceIdKey: {
                        type: String,
                        default: null
                    },
                    realTimeTopic: {
                        type: Object,
                        default: null
                    },
                    configuration: {
                        type: Object,
                        required: true
                    },
                    initialActionIdKey: {
                        type: String,
                        required: true
                    },
                    initialVisualizerActionIdKey: {
                        type: String,
                        required: true
                    }
                },
                setup(__props, { expose }) {
                    var _a, _b, _c;
                    expose();
                    const props = __props;
                    const isNotificationsEnabled = ref(false);
                    const activeAction = ref((_a = props.initialActionIdKey) !== null && _a !== void 0 ? _a : null);
                    const participantCount = ref(props.configuration.participantCount);
                    const isExperienceInactive = ref(props.configuration.isExperienceInactive);
                    const experienceActions = (_b = props.configuration.actions) !== null && _b !== void 0 ? _b : [];
                    const isNotificationAvailable = props.configuration.isNotificationAvailable;
                    const activeVisualizer = ref((_c = props.initialVisualizerActionIdKey) !== null && _c !== void 0 ? _c : "");
                    const isVisualizerAutomatic = ref(true);
                    const notificationStateClass = computed(() => {
                        return isNotificationsEnabled.value ? "btn btn-info btn-xs" : "btn btn-default btn-xs";
                    });
                    const notificationStateIconClass = computed(() => {
                        return isNotificationsEnabled.value ? "fa fa-fw fa-bell" : "fa fa-fw fa-bell-slash";
                    });
                    const previewPageUrl = computed(() => {
                        var _a, _b;
                        return (_b = (_a = props.configuration.navigationUrls) === null || _a === void 0 ? void 0 : _a["LiveExperiencePage"]) !== null && _b !== void 0 ? _b : "";
                    });
                    const visualizerItems = computed(() => {
                        var _a;
                        return ((_a = props.configuration.actions) !== null && _a !== void 0 ? _a : []).map((a, idx) => ({
                            value: a.value,
                            text: `${idx + 1}. ${a.text}`
                        }));
                    });
                    function onNotificationStateClick(ev) {
                        isNotificationsEnabled.value = !isNotificationsEnabled.value;
                        if (ev.target instanceof HTMLElement) {
                            ev.target.blur();
                        }
                    }
                    function onPreviewLoad(ev) {
                        var _a;
                        if (ev.target instanceof HTMLIFrameElement) {
                            const adminFooter = (_a = ev.target.contentDocument) === null || _a === void 0 ? void 0 : _a.querySelector("#cms-admin-footer");
                            if (adminFooter) {
                                adminFooter.style.display = "none";
                            }
                            ev.target.classList.remove("invisible");
                        }
                    }
                    function onUpdateActiveAction(value) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (activeAction.value === value || !props.realTimeTopic || !props.occurrenceIdKey) {
                                return;
                            }
                            activeAction.value = value;
                            if (activeAction.value) {
                                yield props.realTimeTopic.server.showAction(props.occurrenceIdKey, activeAction.value, isNotificationsEnabled.value);
                                if (isVisualizerAutomatic.value) {
                                    yield props.realTimeTopic.server.showVisualizer(props.occurrenceIdKey, activeAction.value);
                                }
                            }
                            else {
                                yield props.realTimeTopic.server.clearActions(props.occurrenceIdKey);
                                if (isVisualizerAutomatic.value) {
                                    yield props.realTimeTopic.server.clearVisualizer(props.occurrenceIdKey);
                                }
                            }
                        });
                    }
                    function onShowAction(idKey, actionIdKey) {
                        if (idKey === props.occurrenceIdKey) {
                            activeAction.value = actionIdKey;
                        }
                    }
                    function onClearActions(idKey) {
                        if (idKey === props.occurrenceIdKey) {
                            activeAction.value = null;
                        }
                    }
                    function onShowVisualizer(idKey, actionIdKey) {
                        if (idKey === props.occurrenceIdKey) {
                            activeVisualizer.value = actionIdKey;
                        }
                    }
                    function onClearVisualizer(idKey) {
                        if (idKey === props.occurrenceIdKey) {
                            activeVisualizer.value = "";
                        }
                    }
                    function onUpdateActiveVisualizer(value) {
                        return __awaiter(this, void 0, void 0, function* () {
                            const newValue = typeof value === "string" ? value : "";
                            if (activeVisualizer.value === newValue) {
                                return;
                            }
                            activeVisualizer.value = newValue;
                            if (props.realTimeTopic && props.occurrenceIdKey) {
                                if (activeVisualizer.value) {
                                    yield props.realTimeTopic.server.showVisualizer(props.occurrenceIdKey, activeVisualizer.value);
                                }
                                else {
                                    yield props.realTimeTopic.server.clearVisualizer(props.occurrenceIdKey);
                                }
                            }
                        });
                    }
                    function onUpdateParticipantCountTimer() {
                        return __awaiter(this, void 0, void 0, function* () {
                            try {
                                if (props.realTimeTopic && props.occurrenceIdKey) {
                                    participantCount.value = yield props.realTimeTopic.server.getParticipantCount(props.occurrenceIdKey);
                                }
                            }
                            finally {
                                setTimeout(onUpdateParticipantCountTimer, props.configuration.participantCountUpdateInterval * 1000);
                            }
                        });
                    }
                    watch(() => props.realTimeTopic, () => {
                        if (props.realTimeTopic) {
                            props.realTimeTopic.on("showAction", onShowAction);
                            props.realTimeTopic.on("clearActions", onClearActions);
                            props.realTimeTopic.on("showVisualizer", onShowVisualizer);
                            props.realTimeTopic.on("clearVisualizer", onClearVisualizer);
                        }
                    });
                    watch(() => props.initialActionIdKey, () => {
                        activeAction.value = props.initialActionIdKey;
                    });
                    watch(() => props.initialVisualizerActionIdKey, () => {
                        var _a;
                        activeVisualizer.value = (_a = props.initialVisualizerActionIdKey) !== null && _a !== void 0 ? _a : "";
                    });
                    setTimeout(onUpdateParticipantCountTimer, props.configuration.participantCountUpdateInterval * 1000);
                    const __returned__ = { props, isNotificationsEnabled, activeAction, participantCount, isExperienceInactive, experienceActions, isNotificationAvailable, activeVisualizer, isVisualizerAutomatic, notificationStateClass, notificationStateIconClass, previewPageUrl, visualizerItems, onNotificationStateClick, onPreviewLoad, onUpdateActiveAction, onShowAction, onClearActions, onShowVisualizer, onClearVisualizer, onUpdateActiveVisualizer, onUpdateParticipantCountTimer, Alert, DropDownList, Kpi, ExperienceActionButtons: exportHelper$5, InlineCheckBox, RockLabel };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _withScopeId = n => (pushScopeId("data-v-bdzcxgyyp02l0immli1psyf7"), n = n(), popScopeId(), n);
            const _hoisted_1$3 = { class: "live-event" };
            const _hoisted_2$3 = { class: "row" };
            const _hoisted_3$3 = { class: "col-xs-12 col-md-4 col-lg-3 col-md-4" };
            const _hoisted_4$3 = createTextVNode(" This experience event has ended. ");
            const _hoisted_5$2 = { class: "col-xs-12 col-md-6 col-lg-7 mb-3 mb-md-0" };
            const _hoisted_6$2 = { class: "experience-actions-panel panel panel-section h-100 mb-sm-0" };
            const _hoisted_7$2 = { class: "panel-heading" };
            const _hoisted_8$2 = _withScopeId(() => createElementVNode("h4", { class: "panel-title" }, "Experience Actions", -1));
            const _hoisted_9$2 = ["onClick"];
            const _hoisted_10$2 = { class: "panel-body" };
            const _hoisted_11$1 = { class: "col-xs-12 col-md-6 col-lg-5" };
            const _hoisted_12$1 = { class: "preview-panel" };
            const _hoisted_13$1 = ["src"];
            const _hoisted_14$1 = createTextVNode(" Live experience preview has not been configured. ");
            const _hoisted_15$1 = createTextVNode("Visualizer");
            const _hoisted_16$1 = { class: "d-flex" };
            const _hoisted_17$1 = { class: "mr-3" };
            const _hoisted_18$1 = { class: "flex-grow-1 overflow-hidden" };
            function render$4(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", _hoisted_1$3, [
                    createElementVNode("div", _hoisted_2$3, [
                        createElementVNode("div", _hoisted_3$3, [
                            createVNode($setup["Kpi"], {
                                class: "ml-0",
                                color: "blue",
                                colorShade: 600,
                                value: $setup.participantCount,
                                label: "Current Participants",
                                iconCssClass: "fa fa-user",
                                isCard: "",
                                tooltip: "The number of individuals that are currently participating in the experience."
                            }, null, 8, ["value"])
                        ])
                    ]),
                    ($setup.isExperienceInactive)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 0,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                _hoisted_4$3
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    createElementVNode("div", {
                        class: normalizeClass(["experience-body row d-flex flex-wrap", { inactive: $setup.isExperienceInactive }])
                    }, [
                        createElementVNode("div", _hoisted_5$2, [
                            createElementVNode("div", _hoisted_6$2, [
                                createElementVNode("div", _hoisted_7$2, [
                                    _hoisted_8$2,
                                    ($setup.isNotificationAvailable)
                                        ? (openBlock(), createElementBlock("a", {
                                            key: 0,
                                            href: "#",
                                            class: normalizeClass($setup.notificationStateClass),
                                            onClick: withModifiers($setup.onNotificationStateClick, ["prevent"])
                                        }, [
                                            createElementVNode("i", {
                                                class: normalizeClass($setup.notificationStateIconClass)
                                            }, null, 2)
                                        ], 10, _hoisted_9$2))
                                        : createCommentVNode("v-if", true)
                                ]),
                                createElementVNode("div", _hoisted_10$2, [
                                    createVNode($setup["ExperienceActionButtons"], {
                                        modelValue: $setup.activeAction,
                                        actions: $setup.experienceActions,
                                        "onUpdate:modelValue": $setup.onUpdateActiveAction
                                    }, null, 8, ["modelValue", "actions"])
                                ])
                            ])
                        ]),
                        createElementVNode("div", _hoisted_11$1, [
                            createElementVNode("div", _hoisted_12$1, [
                                ($setup.previewPageUrl)
                                    ? (openBlock(), createElementBlock("iframe", {
                                        key: 0,
                                        class: "invisible",
                                        src: $setup.previewPageUrl,
                                        onLoad: $setup.onPreviewLoad
                                    }, null, 40, _hoisted_13$1))
                                    : (openBlock(), createBlock($setup["Alert"], {
                                        key: 1,
                                        alertType: "info"
                                    }, {
                                        default: withCtx(() => [
                                            _hoisted_14$1
                                        ]),
                                        _: 1
                                    })),
                                createElementVNode("div", null, [
                                    createVNode($setup["RockLabel"], null, {
                                        default: withCtx(() => [
                                            _hoisted_15$1
                                        ]),
                                        _: 1
                                    }),
                                    createElementVNode("div", _hoisted_16$1, [
                                        createElementVNode("div", _hoisted_17$1, [
                                            createVNode($setup["InlineCheckBox"], {
                                                modelValue: $setup.isVisualizerAutomatic,
                                                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.isVisualizerAutomatic) = $event)),
                                                label: "Automatic"
                                            }, null, 8, ["modelValue"])
                                        ]),
                                        createElementVNode("div", _hoisted_18$1, [
                                            createVNode($setup["DropDownList"], {
                                                modelValue: $setup.activeVisualizer,
                                                "onUpdate:modelValue": $setup.onUpdateActiveVisualizer,
                                                items: $setup.visualizerItems,
                                                showBlankItem: "",
                                                disabled: $setup.isVisualizerAutomatic
                                            }, null, 8, ["modelValue", "items", "disabled"])
                                        ])
                                    ])
                                ])
                            ])
                        ])
                    ], 2)
                ]));
            }
            const __sfc_style$1 = document.createElement("style");
            __sfc_style$1.textContent = `.experience-body.inactive[data-v-bdzcxgyyp02l0immli1psyf7] {
    cursor: not-allowed;
    opacity: .5;
    pointer-events: none;
}
.experience-actions-panel[data-v-bdzcxgyyp02l0immli1psyf7] {
    background-color: var(--panel-heading-bg);
}
.preview-panel[data-v-bdzcxgyyp02l0immli1psyf7] {
    display: flex;
    flex-direction: column;
    min-height: 480px;
}
.preview-panel iframe[data-v-bdzcxgyyp02l0immli1psyf7] {
    flex-grow: 1;
    overflow: hidden;
    border: 1px solid #dfe0e1;
    border-radius: 4px;
}`;
            document.head.appendChild(__sfc_style$1);
            const exportHelper$4 = _sfc_main$4;
            for (const [key, val] of [["render", render$4], ["__scopeId", "data-v-bdzcxgyyp02l0immli1psyf7"]]) {
                exportHelper$4[key] = val;
            }

            const _sfc_main$3 = defineComponent({
                name: 'liveQuestionsTab.partial',
                props: {
                    occurrenceIdKey: {
                        type: String,
                        default: null
                    },
                    realTimeTopic: {
                        type: Object,
                        default: null
                    },
                    configuration: {
                        type: Object,
                        required: true
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const invokeBlockAction = useInvokeBlockAction();
                    const occurrenceAnswers = reactive([]);
                    const selectedAction = ref("");
                    const selectedCampus = ref(null);
                    const filteredAnswers = computed(() => {
                        return occurrenceAnswers
                            .filter(a => a.status === 1)
                            .filter(a => selectedAction.value === a.actionIdKey)
                            .filter(a => !selectedCampus.value || areEqual(selectedCampus.value.value, a.campusGuid))
                            .reverse();
                    });
                    const actionItems = computed(() => {
                        var _a;
                        return ((_a = props.configuration.actions) !== null && _a !== void 0 ? _a : []).map((a, idx) => ({
                            value: a.value,
                            text: `${idx + 1}. ${a.text}`
                        }));
                    });
                    function setupTopicListeners() {
                        if (props.realTimeTopic) {
                            props.realTimeTopic.on("answerSubmitted", onAnswerSubmitted);
                            props.realTimeTopic.on("answerUpdated", onAnswerUpdated);
                            props.realTimeTopic.on("answerRemoved", onAnswerRemoved);
                        }
                    }
                    function updateAnswer(answer) {
                        const answerIndex = occurrenceAnswers.findIndex(a => a.idKey === answer.idKey);
                        const actionAnswer = Object.assign({}, answer);
                        if (answerIndex !== -1) {
                            occurrenceAnswers.splice(answerIndex, 1);
                        }
                        occurrenceAnswers.push(actionAnswer);
                    }
                    function removeAnswer(answerIdKey) {
                        const answerIndex = occurrenceAnswers.findIndex(a => a.idKey === answerIdKey);
                        if (answerIndex !== -1) {
                            occurrenceAnswers.splice(answerIndex, 1);
                        }
                    }
                    function getAllAnswers() {
                        return __awaiter(this, void 0, void 0, function* () {
                            occurrenceAnswers.slice();
                            const response = yield invokeBlockAction("GetExperienceAnswers", { occurrenceKey: props.configuration.occurrenceIdKey });
                            if (response.isSuccess && response.data) {
                                for (const answer of response.data) {
                                    updateAnswer(answer);
                                }
                            }
                        });
                    }
                    function onAnswerSubmitted(idKey, answer) {
                        if (idKey !== props.occurrenceIdKey) {
                            return;
                        }
                        updateAnswer(answer);
                    }
                    function onAnswerUpdated(idKey, answer) {
                        if (idKey !== props.occurrenceIdKey) {
                            return;
                        }
                        updateAnswer(answer);
                    }
                    function onAnswerRemoved(idKey, answerIdKey) {
                        if (idKey !== props.occurrenceIdKey) {
                            return;
                        }
                        removeAnswer(answerIdKey);
                    }
                    getAllAnswers();
                    setupTopicListeners();
                    watch(() => props.realTimeTopic, () => setupTopicListeners());
                    if (actionItems.value.length > 0 && actionItems.value[0].value) {
                        selectedAction.value = actionItems.value[0].value;
                    }
                    const __returned__ = { props, invokeBlockAction, occurrenceAnswers, selectedAction, selectedCampus, filteredAnswers, actionItems, setupTopicListeners, updateAnswer, removeAnswer, getAllAnswers, onAnswerSubmitted, onAnswerUpdated, onAnswerRemoved, DropDownList, CampusPicker };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$2 = { class: "live-questions" };
            const _hoisted_2$2 = { class: "row d-flex flex-wrap" };
            const _hoisted_3$2 = { class: "col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-2" };
            const _hoisted_4$2 = { class: "col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-2 ml-md-auto" };
            const _hoisted_5$1 = { class: "table-responsive" };
            const _hoisted_6$1 = { class: "grid-table table table-condensed table-light" };
            const _hoisted_7$1 = createElementVNode("thead", null, [
                createElementVNode("tr", null, [
                    createElementVNode("th", null, "Name"),
                    createElementVNode("th", null, "Campus"),
                    createElementVNode("th", null, "Response")
                ])
            ], -1);
            const _hoisted_8$1 = { key: 0 };
            const _hoisted_9$1 = createElementVNode("td", { colspan: "3" }, "No matching responses.", -1);
            const _hoisted_10$1 = [
                _hoisted_9$1
            ];
            function render$3(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", _hoisted_1$2, [
                    createElementVNode("div", _hoisted_2$2, [
                        createElementVNode("div", _hoisted_3$2, [
                            createVNode($setup["DropDownList"], {
                                modelValue: $setup.selectedAction,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.selectedAction) = $event)),
                                showBlankItem: false,
                                items: $setup.actionItems
                            }, null, 8, ["modelValue", "items"])
                        ]),
                        createElementVNode("div", _hoisted_4$2, [
                            createVNode($setup["CampusPicker"], {
                                modelValue: $setup.selectedCampus,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.selectedCampus) = $event)),
                                forceVisible: "",
                                showBlankItem: "",
                                displayStyle: "condensed"
                            }, null, 8, ["modelValue"])
                        ])
                    ]),
                    createElementVNode("div", _hoisted_5$1, [
                        createElementVNode("table", _hoisted_6$1, [
                            _hoisted_7$1,
                            createElementVNode("tbody", null, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.filteredAnswers, (row) => {
                                    return (openBlock(), createElementBlock("tr", null, [
                                        createElementVNode("td", null, toDisplayString(row.submitterName), 1),
                                        createElementVNode("td", null, toDisplayString(row.campusName), 1),
                                        createElementVNode("td", null, toDisplayString(row.response), 1)
                                    ]));
                                }), 256)),
                                (!$setup.filteredAnswers.length)
                                    ? (openBlock(), createElementBlock("tr", _hoisted_8$1, _hoisted_10$1))
                                    : createCommentVNode("v-if", true)
                            ])
                        ])
                    ])
                ]));
            }
            const exportHelper$3 = _sfc_main$3;
            for (const [key, val] of [["render", render$3]]) {
                exportHelper$3[key] = val;
            }

            const _sfc_main$2 = defineComponent({
                name: 'moderationTab.partial',
                props: {
                    occurrenceIdKey: {
                        type: String,
                        default: null
                    },
                    realTimeTopic: {
                        type: Object,
                        default: null
                    },
                    configuration: {
                        type: Object,
                        required: true
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const invokeBlockAction = useInvokeBlockAction();
                    const occurrenceAnswers = reactive([]);
                    const filterAction = ref("");
                    const filterCampus = ref([]);
                    const filterStatus = ref([]);
                    const approvedStatus = 1;
                    const rejectedStatus = 2;
                    const filterStatusItems = [
                        {
                            value: 0..toString(),
                            text: "Pending"
                        },
                        {
                            value: 1..toString(),
                            text: "Approved"
                        },
                        {
                            value: 2..toString(),
                            text: "Rejected"
                        }
                    ];
                    const filteredAnswers = computed(() => {
                        return occurrenceAnswers
                            .filter(a => !filterAction.value || filterAction.value === a.actionIdKey)
                            .filter(a => !filterCampus.value.length || filterCampus.value.some(c => areEqual(c.value, a.campusGuid)))
                            .filter(a => !filterStatus.value.length || filterStatus.value.some(s => a.status.toString() === s));
                    });
                    const filterActionItems = computed(() => {
                        var _a;
                        return ((_a = props.configuration.actions) !== null && _a !== void 0 ? _a : []).map((a, idx) => ({
                            value: a.value,
                            text: `${idx + 1}. ${a.text}`
                        }));
                    });
                    function setupTopicListeners() {
                        if (props.realTimeTopic) {
                            props.realTimeTopic.on("answerSubmitted", onAnswerSubmitted);
                            props.realTimeTopic.on("answerUpdated", onAnswerUpdated);
                            props.realTimeTopic.on("answerRemoved", onAnswerRemoved);
                        }
                    }
                    function getActionIndex(actionId) {
                        var _a;
                        if (!actionId) {
                            return 0;
                        }
                        const index = ((_a = props.configuration.actions) !== null && _a !== void 0 ? _a : []).findIndex(a => a.value === actionId);
                        return index < 0 ? 0 : index + 1;
                    }
                    function getStatusLabelHtml(status) {
                        if (status === 1) {
                            return `<span class="label label-success">Approved</span>`;
                        }
                        else if (status === 2) {
                            return `<span class="label label-danger">Rejected</span>`;
                        }
                        else {
                            return `<span class="label label-default">Pending</span>`;
                        }
                    }
                    function updateAnswer(answer) {
                        const answerIndex = occurrenceAnswers.findIndex(a => a.idKey === answer.idKey);
                        const actionAnswer = Object.assign({ actionIndex: getActionIndex(answer.actionIdKey) }, answer);
                        if (answerIndex !== -1) {
                            occurrenceAnswers.splice(answerIndex, 1, actionAnswer);
                        }
                        else {
                            occurrenceAnswers.push(actionAnswer);
                        }
                    }
                    function removeAnswer(answerIdKey) {
                        const answerIndex = occurrenceAnswers.findIndex(a => a.idKey === answerIdKey);
                        if (answerIndex !== -1) {
                            occurrenceAnswers.splice(answerIndex, 1);
                        }
                    }
                    function getAllAnswers() {
                        return __awaiter(this, void 0, void 0, function* () {
                            occurrenceAnswers.slice();
                            const response = yield invokeBlockAction("GetExperienceAnswers", { occurrenceKey: props.configuration.occurrenceIdKey });
                            if (response.isSuccess && response.data) {
                                for (const answer of response.data) {
                                    updateAnswer(answer);
                                }
                            }
                        });
                    }
                    function updateAnswerStatus(answerIdKey, status) {
                        return __awaiter(this, void 0, void 0, function* () {
                            const response = yield invokeBlockAction("UpdateExperienceAnswerStatus", { key: answerIdKey, status: status });
                            if (response.isError) {
                                yield alert(response.errorMessage || "Response could not be updated.");
                            }
                        });
                    }
                    function onAnswerSubmitted(idKey, answer) {
                        if (idKey !== props.occurrenceIdKey) {
                            return;
                        }
                        updateAnswer(answer);
                    }
                    function onAnswerUpdated(idKey, answer) {
                        if (idKey !== props.occurrenceIdKey) {
                            return;
                        }
                        updateAnswer(answer);
                    }
                    function onAnswerRemoved(idKey, answerIdKey) {
                        if (idKey !== props.occurrenceIdKey) {
                            return;
                        }
                        removeAnswer(answerIdKey);
                    }
                    function onApproveAnswer(answer) {
                        if (answer.idKey) {
                            updateAnswerStatus(answer.idKey, 1);
                        }
                    }
                    function onRejectAnswer(answer) {
                        if (answer.idKey) {
                            updateAnswerStatus(answer.idKey, 2);
                        }
                    }
                    function onDeleteAnswer(answer) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!answer.idKey) {
                                return;
                            }
                            const confirmed = yield confirm(`Do you wish to delete< this response?\n\n${answer.response}`);
                            if (!confirmed) {
                                return;
                            }
                            const response = yield invokeBlockAction("DeleteExperienceAnswer", { key: answer.idKey });
                            if (response.isError) {
                                yield alert(response.errorMessage || "Response could not be deleted.");
                            }
                        });
                    }
                    getAllAnswers();
                    setupTopicListeners();
                    watch(() => props.realTimeTopic, () => setupTopicListeners());
                    const __returned__ = { props, invokeBlockAction, occurrenceAnswers, filterAction, filterCampus, filterStatus, approvedStatus, rejectedStatus, filterStatusItems, filteredAnswers, filterActionItems, setupTopicListeners, getActionIndex, getStatusLabelHtml, updateAnswer, removeAnswer, getAllAnswers, updateAnswerStatus, onAnswerSubmitted, onAnswerUpdated, onAnswerRemoved, onApproveAnswer, onRejectAnswer, onDeleteAnswer, CampusPicker, CheckBoxList, DropDownList };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$1 = { class: "moderation" };
            const _hoisted_2$1 = { class: "well" };
            const _hoisted_3$1 = { class: "row" };
            const _hoisted_4$1 = { class: "col-md-6" };
            const _hoisted_5 = { class: "col-md-6" };
            const _hoisted_6 = { class: "row" };
            const _hoisted_7 = { class: "col-md-6" };
            const _hoisted_8 = { class: "table-responsive" };
            const _hoisted_9 = { class: "grid-table table table-condensed table-light table-hover" };
            const _hoisted_10 = createElementVNode("thead", null, [
                createElementVNode("tr", null, [
                    createElementVNode("th"),
                    createElementVNode("th", null, "Response"),
                    createElementVNode("th", null, "Campus"),
                    createElementVNode("th", null, "Status"),
                    createElementVNode("th", { class: "grid-columncommand" }, "Approve"),
                    createElementVNode("th", { class: "grid-columncommand" }, "Reject"),
                    createElementVNode("th", { class: "grid-columncommand" })
                ])
            ], -1);
            const _hoisted_11 = { style: { "width": "1px" } };
            const _hoisted_12 = { class: "badge badge-default" };
            const _hoisted_13 = ["innerHTML"];
            const _hoisted_14 = {
                class: "grid-columncommand",
                align: "center"
            };
            const _hoisted_15 = ["onClick"];
            const _hoisted_16 = createElementVNode("i", { class: "fa fa-thumbs-up" }, null, -1);
            const _hoisted_17 = [
                _hoisted_16
            ];
            const _hoisted_18 = {
                class: "grid-columncommand",
                align: "center"
            };
            const _hoisted_19 = ["onClick"];
            const _hoisted_20 = createElementVNode("i", { class: "fa fa-thumbs-down" }, null, -1);
            const _hoisted_21 = [
                _hoisted_20
            ];
            const _hoisted_22 = {
                class: "grid-columncommand",
                align: "center"
            };
            const _hoisted_23 = ["onClick"];
            const _hoisted_24 = createElementVNode("i", { class: "fa fa-times" }, null, -1);
            const _hoisted_25 = [
                _hoisted_24
            ];
            const _hoisted_26 = {
                key: 0,
                align: "left"
            };
            const _hoisted_27 = createElementVNode("td", { colspan: "7" }, "No matching responses.", -1);
            const _hoisted_28 = [
                _hoisted_27
            ];
            function render$2(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", _hoisted_1$1, [
                    createElementVNode("div", _hoisted_2$1, [
                        createElementVNode("div", _hoisted_3$1, [
                            createElementVNode("div", _hoisted_4$1, [
                                createVNode($setup["DropDownList"], {
                                    modelValue: $setup.filterAction,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.filterAction) = $event)),
                                    label: "Action",
                                    items: $setup.filterActionItems
                                }, null, 8, ["modelValue", "items"])
                            ]),
                            createElementVNode("div", _hoisted_5, [
                                createVNode($setup["CampusPicker"], {
                                    modelValue: $setup.filterCampus,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.filterCampus) = $event)),
                                    label: "Campus",
                                    displayStyle: "condensed",
                                    forceVisible: "",
                                    multiple: ""
                                }, null, 8, ["modelValue"])
                            ])
                        ]),
                        createElementVNode("div", _hoisted_6, [
                            createElementVNode("div", _hoisted_7, [
                                createVNode($setup["CheckBoxList"], {
                                    modelValue: $setup.filterStatus,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.filterStatus) = $event)),
                                    label: "Statuses",
                                    horizontal: "",
                                    items: $setup.filterStatusItems
                                }, null, 8, ["modelValue"])
                            ])
                        ])
                    ]),
                    createElementVNode("div", _hoisted_8, [
                        createElementVNode("table", _hoisted_9, [
                            _hoisted_10,
                            createElementVNode("tbody", null, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.filteredAnswers, (row) => {
                                    return (openBlock(), createElementBlock("tr", null, [
                                        createElementVNode("td", _hoisted_11, [
                                            createElementVNode("span", _hoisted_12, toDisplayString(row.actionIndex), 1)
                                        ]),
                                        createElementVNode("td", null, toDisplayString(row.response), 1),
                                        createElementVNode("td", null, toDisplayString(row.campusName), 1),
                                        createElementVNode("td", {
                                            innerHTML: $setup.getStatusLabelHtml(row.status)
                                        }, null, 8, _hoisted_13),
                                        createElementVNode("td", _hoisted_14, [
                                            (row.status !== $setup.approvedStatus)
                                                ? (openBlock(), createElementBlock("a", {
                                                    key: 0,
                                                    class: "btn btn-success btn-sm btn-square grid-approve-button",
                                                    onClick: withModifiers($event => ($setup.onApproveAnswer(row)), ["prevent"])
                                                }, _hoisted_17, 8, _hoisted_15))
                                                : createCommentVNode("v-if", true)
                                        ]),
                                        createElementVNode("td", _hoisted_18, [
                                            (row.status !== $setup.rejectedStatus)
                                                ? (openBlock(), createElementBlock("a", {
                                                    key: 0,
                                                    class: "btn btn-danger btn-sm btn-square grid-reject-button",
                                                    onClick: withModifiers($event => ($setup.onRejectAnswer(row)), ["prevent"])
                                                }, _hoisted_21, 8, _hoisted_19))
                                                : createCommentVNode("v-if", true)
                                        ]),
                                        createElementVNode("td", _hoisted_22, [
                                            createElementVNode("a", {
                                                class: "btn btn-danger btn-sm btn-square grid-delete-button",
                                                onClick: withModifiers($event => ($setup.onDeleteAnswer(row)), ["prevent"])
                                            }, _hoisted_25, 8, _hoisted_23)
                                        ])
                                    ]));
                                }), 256)),
                                (!$setup.filteredAnswers.length)
                                    ? (openBlock(), createElementBlock("tr", _hoisted_26, _hoisted_28))
                                    : createCommentVNode("v-if", true)
                            ])
                        ])
                    ])
                ]));
            }
            const exportHelper$2 = _sfc_main$2;
            for (const [key, val] of [["render", render$2]]) {
                exportHelper$2[key] = val;
            }

            const _sfc_main$1 = defineComponent({
                name: 'panelNavigationBar.partial',
                props: {
                    modelValue: {
                        type: String,
                        required: false
                    },
                    items: {
                        type: Array,
                        default: []
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = useVModelPassthrough(props, "modelValue", emit);
                    function getItemClass(item) {
                        if (internalValue.value === item.value) {
                            return "active";
                        }
                        return "";
                    }
                    function onItemClicked(item) {
                        internalValue.value = item.value;
                    }
                    const __returned__ = { props, emit, internalValue, getItemClass, onItemClicked };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "panel-navigation-bar" };
            const _hoisted_2 = { class: "panel-toolbar panel-toolbar-shadow" };
            const _hoisted_3 = { class: "nav nav-pills nav-sm" };
            const _hoisted_4 = ["onClick"];
            function render$1(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", _hoisted_1, [
                    createElementVNode("div", _hoisted_2, [
                        createElementVNode("ul", _hoisted_3, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item) => {
                                return (openBlock(), createElementBlock("li", {
                                    role: "presentation",
                                    class: normalizeClass($setup.getItemClass(item))
                                }, [
                                    createElementVNode("a", {
                                        href: "#",
                                        onClick: withModifiers($event => ($setup.onItemClicked(item)), ["prevent"])
                                    }, toDisplayString(item.text), 9, _hoisted_4)
                                ], 2));
                            }), 256))
                        ])
                    ])
                ]));
            }
            const __sfc_style = document.createElement("style");
            __sfc_style.textContent = `.panel-navigation-bar[data-v-haq281fpx9w32x0eskvstpc7] {
    overflow-x: clip;
    background-color: var(--panel-bg);
}`;
            document.head.appendChild(__sfc_style);
            const exportHelper$1 = _sfc_main$1;
            for (const [key, val] of [["render", render$1], ["__scopeId", "data-v-haq281fpx9w32x0eskvstpc7"]]) {
                exportHelper$1[key] = val;
            }

            const _sfc_main = defineComponent({
                name: 'experienceManager',
                setup(__props, { expose }) {
                    var _a;
                    expose();
                    const config = useConfigurationValues();
                    const availableTabs = ((_a = config.tabsToShow) !== null && _a !== void 0 ? _a : ["Live Event", "Moderation", "Live Questions"]);
                    const isTabBarVisible = availableTabs.length > 1;
                    const navigationTabs = (availableTabs !== null && availableTabs !== void 0 ? availableTabs : []).map(s => ({ value: s, text: s }));
                    const selectedTab = ref(availableTabs[0]);
                    const realTimeTopic = ref(null);
                    const occurrenceIdKey = ref(null);
                    const initialActionIdKey = ref(null);
                    const initialVisualizerActionIdKey = ref(null);
                    const panelTitle = computed(() => {
                        return `${config.experienceName}`;
                    });
                    const isLiveEventTab = computed(() => {
                        return selectedTab.value === "Live Event";
                    });
                    const isModerationTab = computed(() => {
                        return selectedTab.value === "Moderation";
                    });
                    const isLiveQuestionsTab = computed(() => {
                        return selectedTab.value === "Live Questions";
                    });
                    function startRealTime() {
                        var _a, _b, _c;
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!config.experienceToken) {
                                throw new Error("Missing experience token from server.");
                            }
                            var topic = yield getTopic("Rock.RealTime.Topics.InteractiveExperienceParticipantTopic");
                            topic.onReconnect((server) => __awaiter(this, void 0, void 0, function* () {
                                var _d;
                                if (config.experienceToken) {
                                    const response = yield server.joinExperience(config.experienceToken);
                                    occurrenceIdKey.value = (_d = response.occurrenceIdKey) !== null && _d !== void 0 ? _d : null;
                                }
                            }));
                            const response = yield topic.server.joinExperience(config.experienceToken);
                            occurrenceIdKey.value = (_a = response.occurrenceIdKey) !== null && _a !== void 0 ? _a : null;
                            initialActionIdKey.value = (_b = response.currentActionIdKey) !== null && _b !== void 0 ? _b : null;
                            initialVisualizerActionIdKey.value = (_c = response.currentVisualizerActionIdKey) !== null && _c !== void 0 ? _c : null;
                            realTimeTopic.value = topic;
                        });
                    }
                    onConfigurationValuesChanged(useReloadBlock());
                    startRealTime();
                    provide("ExperienceManagerRealTimeTopic", realTimeTopic);
                    const __returned__ = { config, availableTabs, isTabBarVisible, navigationTabs, selectedTab, realTimeTopic, occurrenceIdKey, initialActionIdKey, initialVisualizerActionIdKey, panelTitle, isLiveEventTab, isModerationTab, isLiveQuestionsTab, startRealTime, Alert, LiveEventTab: exportHelper$4, LiveQuestionsTab: exportHelper$3, ModerationTab: exportHelper$2, Panel, PanelNavigationBar: exportHelper$1 };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return ($setup.config.errorMessage)
                    ? (openBlock(), createBlock($setup["Alert"], {
                        key: 0,
                        alertType: "warning"
                    }, {
                        default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.config.errorMessage), 1)
                        ]),
                        _: 1
                    }))
                    : (openBlock(), createBlock($setup["Panel"], {
                        key: 1,
                        type: "block",
                        title: $setup.panelTitle,
                        hasFullscreen: ""
                    }, createSlots({
                        default: withCtx(() => [
                            withDirectives(createVNode($setup["LiveEventTab"], {
                                configuration: $setup.config,
                                occurrenceIdKey: $setup.occurrenceIdKey,
                                realTimeTopic: $setup.realTimeTopic,
                                initialActionIdKey: $setup.initialActionIdKey,
                                initialVisualizerActionIdKey: $setup.initialVisualizerActionIdKey
                            }, null, 8, ["configuration", "occurrenceIdKey", "realTimeTopic", "initialActionIdKey", "initialVisualizerActionIdKey"]), [
                                [vShow, $setup.isLiveEventTab]
                            ]),
                            withDirectives(createVNode($setup["ModerationTab"], {
                                configuration: $setup.config,
                                occurrenceIdKey: $setup.occurrenceIdKey,
                                realTimeTopic: $setup.realTimeTopic
                            }, null, 8, ["configuration", "occurrenceIdKey", "realTimeTopic"]), [
                                [vShow, $setup.isModerationTab]
                            ]),
                            withDirectives(createVNode($setup["LiveQuestionsTab"], {
                                configuration: $setup.config,
                                occurrenceIdKey: $setup.occurrenceIdKey,
                                realTimeTopic: $setup.realTimeTopic
                            }, null, 8, ["configuration", "occurrenceIdKey", "realTimeTopic"]), [
                                [vShow, $setup.isLiveQuestionsTab]
                            ]),
                            withDirectives(createElementVNode("div", null, null, 512), [
                                [vShow, $setup.isLiveQuestionsTab]
                            ])
                        ]),
                        _: 2
                    }, [
                        ($setup.isTabBarVisible)
                            ? {
                                name: "preBody",
                                fn: withCtx(() => [
                                    createVNode($setup["PanelNavigationBar"], {
                                        modelValue: $setup.selectedTab,
                                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.selectedTab) = $event)),
                                        items: $setup.navigationTabs
                                    }, null, 8, ["modelValue", "items"])
                                ])
                            }
                            : undefined
                    ]), 1032, ["title"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
