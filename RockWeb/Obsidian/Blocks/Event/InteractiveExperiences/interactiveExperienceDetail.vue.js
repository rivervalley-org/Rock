System.register(['tslib', 'vue', '@Obsidian/Controls/alert.vue', '@Obsidian/Templates/detailBlock', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/modal', '@Obsidian/Controls/panel', '@Obsidian/Controls/sectionHeader', '@Obsidian/Directives/dragDrop', '@Obsidian/Utility/component', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/campusPicker.vue', '@Obsidian/Controls/codeEditor', '@Obsidian/Controls/colorPicker', '@Obsidian/Controls/dataViewPicker', '@Obsidian/Controls/imageUploader', '@Obsidian/Controls/groupPicker', '@Obsidian/Controls/radioButtonList', '@Obsidian/Controls/scheduleBuilder.vue', '@Obsidian/Controls/sectionContainer', '@Obsidian/Controls/textBox', '@Obsidian/Controls/transitionVerticalCollapse', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/internetCalendar', '@Obsidian/Controls/valueDetailList', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/util'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, watch, pushScopeId, popScopeId, createElementVNode, openBlock, createElementBlock, Fragment, createVNode, withCtx, withModifiers, withDirectives, renderList, toDisplayString, normalizeClass, createBlock, createTextVNode, createCommentVNode, shallowRef, Alert, DetailBlock, AttributeValuesContainer, CheckBox, DropDownList, Modal, Panel, SectionHeader, useDragReorder, DragSource, DragTarget, useVModelPassthrough, propertyRef, updateRefValue, useInvokeBlockAction, setPropertiesBoxValue, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, areEqual, newGuid, alert, confirmDelete, CampusPicker, CodeEditor, ColorPicker, DataViewPicker, ImageUploader, GroupPicker, RadioButtonList, ScheduleBuilder, SectionContainer, TextBox, TransitionVerticalCollapse, toNumber, Calendar, ValueDetailList, ValueDetailListItemBuilder, escapeHtml, debounce;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            pushScopeId = module.pushScopeId;
            popScopeId = module.popScopeId;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            createVNode = module.createVNode;
            withCtx = module.withCtx;
            withModifiers = module.withModifiers;
            withDirectives = module.withDirectives;
            renderList = module.renderList;
            toDisplayString = module.toDisplayString;
            normalizeClass = module.normalizeClass;
            createBlock = module.createBlock;
            createTextVNode = module.createTextVNode;
            createCommentVNode = module.createCommentVNode;
            shallowRef = module.shallowRef;
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            DetailBlock = module["default"];
        }, function (module) {
            AttributeValuesContainer = module["default"];
        }, function (module) {
            CheckBox = module["default"];
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            Modal = module["default"];
        }, function (module) {
            Panel = module["default"];
        }, function (module) {
            SectionHeader = module["default"];
        }, function (module) {
            useDragReorder = module.useDragReorder;
            DragSource = module.DragSource;
            DragTarget = module.DragTarget;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
            propertyRef = module.propertyRef;
            updateRefValue = module.updateRefValue;
        }, function (module) {
            useInvokeBlockAction = module.useInvokeBlockAction;
            setPropertiesBoxValue = module.setPropertiesBoxValue;
            watchPropertyChanges = module.watchPropertyChanges;
            useConfigurationValues = module.useConfigurationValues;
            getSecurityGrant = module.getSecurityGrant;
            refreshDetailAttributes = module.refreshDetailAttributes;
            provideSecurityGrant = module.provideSecurityGrant;
        }, function (module) {
            areEqual = module.areEqual;
            newGuid = module.newGuid;
        }, function (module) {
            alert = module.alert;
            confirmDelete = module.confirmDelete;
        }, function (module) {
            CampusPicker = module["default"];
        }, function (module) {
            CodeEditor = module["default"];
        }, function (module) {
            ColorPicker = module["default"];
        }, function (module) {
            DataViewPicker = module["default"];
        }, function (module) {
            ImageUploader = module["default"];
        }, function (module) {
            GroupPicker = module["default"];
        }, function (module) {
            RadioButtonList = module["default"];
        }, function (module) {
            ScheduleBuilder = module["default"];
        }, function (module) {
            SectionContainer = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            TransitionVerticalCollapse = module["default"];
        }, function (module) {
            toNumber = module.toNumber;
        }, function (module) {
            Calendar = module.Calendar;
        }, function (module) {
            ValueDetailList = module["default"];
        }, function (module) {
            ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
        }, function (module) {
            escapeHtml = module.escapeHtml;
        }, function (module) {
            debounce = module.debounce;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main$3 = defineComponent({
                name: 'actionsPanel.partial',
                props: {
                    modelValue: {
                        type: Array,
                        required: true
                    },
                    name: {
                        type: String,
                        required: true
                    },
                    interactiveExperienceIdKey: {
                        type: String,
                        required: true
                    },
                    actionTypes: {
                        type: Array,
                        default: []
                    },
                    visualizerTypes: {
                        type: Array,
                        default: []
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const invokeBlockAction = useInvokeBlockAction();
                    const internalValue = useVModelPassthrough(props, "modelValue", emit);
                    const isModalVisible = ref(false);
                    const modalTitle = ref("");
                    const modalErrorMessage = ref("");
                    const existingActionGuid = ref(null);
                    const actionType = ref("");
                    const requiresModeration = ref(false);
                    const allowMultipleSubmissions = ref(false);
                    const anonymousResponses = ref(false);
                    const responseVisual = ref("");
                    const attributeValues = ref({});
                    const actionHeaderTitle = computed(() => {
                        return `Actions for ${props.name}`;
                    });
                    const actionHeaderDescription = computed(() => {
                        return `The actions below are configured for the ${props.name} experience.`;
                    });
                    const actionTypeItems = computed(() => {
                        return props.actionTypes.map(at => ({
                            value: at.value,
                            text: at.text
                        }));
                    });
                    const responseVisualItems = computed(() => {
                        return props.visualizerTypes;
                    });
                    const selectedActionType = computed(() => {
                        var _a;
                        return (_a = props.actionTypes.find(at => areEqual(at.value, actionType.value))) !== null && _a !== void 0 ? _a : null;
                    });
                    const actionAttributes = computed(() => {
                        var _a, _b;
                        return (_b = (_a = selectedActionType.value) === null || _a === void 0 ? void 0 : _a.attributes) !== null && _b !== void 0 ? _b : {};
                    });
                    const selectedVisualizerType = computed(() => {
                        var _a;
                        return (_a = props.visualizerTypes.find(at => areEqual(at.value, responseVisual.value))) !== null && _a !== void 0 ? _a : null;
                    });
                    const visualizerAttributes = computed(() => {
                        var _a, _b;
                        return (_b = (_a = selectedVisualizerType.value) === null || _a === void 0 ? void 0 : _a.attributes) !== null && _b !== void 0 ? _b : {};
                    });
                    const isRequiresModerationVisible = computed(() => {
                        var _a;
                        return ((_a = selectedActionType.value) === null || _a === void 0 ? void 0 : _a.isModerationSupported) === true;
                    });
                    const isMultipleSubmissionsVisible = computed(() => {
                        var _a;
                        return ((_a = selectedActionType.value) === null || _a === void 0 ? void 0 : _a.isMultipleSubmissionSupported) === true;
                    });
                    function getActionTypeName(action) {
                        var _a, _b;
                        return (_b = (_a = props.actionTypes.find(at => { var _a; return areEqual(at.value, (_a = action.actionType) === null || _a === void 0 ? void 0 : _a.value); })) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : "";
                    }
                    function getActionTypeIconClass(action) {
                        var _a, _b;
                        return (_b = (_a = props.actionTypes.find(at => { var _a; return areEqual(at.value, (_a = action.actionType) === null || _a === void 0 ? void 0 : _a.value); })) === null || _a === void 0 ? void 0 : _a.iconCssClass) !== null && _b !== void 0 ? _b : "";
                    }
                    function updateDefaultAttributeValues() {
                        const newValues = Object.assign({}, attributeValues.value);
                        let isChanged = false;
                        if (selectedActionType.value && selectedActionType.value.defaultAttributeValues) {
                            for (const key in selectedActionType.value.defaultAttributeValues) {
                                if (!newValues[key]) {
                                    newValues[key] = selectedActionType.value.defaultAttributeValues[key];
                                    isChanged = true;
                                }
                            }
                        }
                        if (selectedVisualizerType.value && selectedVisualizerType.value.defaultAttributeValues) {
                            for (const key in selectedVisualizerType.value.defaultAttributeValues) {
                                if (!newValues[key]) {
                                    newValues[key] = selectedVisualizerType.value.defaultAttributeValues[key];
                                    isChanged = true;
                                }
                            }
                        }
                        if (isChanged) {
                            attributeValues.value = newValues;
                        }
                    }
                    function onAddActionClick() {
                        actionType.value = "";
                        requiresModeration.value = false;
                        allowMultipleSubmissions.value = false;
                        anonymousResponses.value = false;
                        responseVisual.value = "";
                        attributeValues.value = {};
                        existingActionGuid.value = null;
                        modalTitle.value = "Add Action";
                        isModalVisible.value = true;
                    }
                    function onEditActionClick(action) {
                        var _a, _b, _c, _d, _e, _f;
                        actionType.value = (_b = (_a = action.actionType) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "";
                        requiresModeration.value = action.isModerationRequired;
                        allowMultipleSubmissions.value = action.isMultipleSubmissionsAllowed;
                        anonymousResponses.value = action.isResponseAnonymous;
                        responseVisual.value = (_d = (_c = action.responseVisualizer) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : "";
                        attributeValues.value = (_e = action.attributeValues) !== null && _e !== void 0 ? _e : {};
                        existingActionGuid.value = (_f = action.guid) !== null && _f !== void 0 ? _f : null;
                        modalTitle.value = "Edit Action";
                        isModalVisible.value = true;
                    }
                    function onActionSave() {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, function* () {
                            modalErrorMessage.value = "";
                            const box = {};
                            setPropertiesBoxValue(box, "guid", (_a = existingActionGuid.value) !== null && _a !== void 0 ? _a : newGuid());
                            setPropertiesBoxValue(box, "actionType", { value: actionType.value });
                            setPropertiesBoxValue(box, "isModerationRequired", requiresModeration.value);
                            setPropertiesBoxValue(box, "isMultipleSubmissionsAllowed", allowMultipleSubmissions.value);
                            setPropertiesBoxValue(box, "isResponseAnonymous", anonymousResponses.value);
                            setPropertiesBoxValue(box, "attributeValues", attributeValues.value);
                            setPropertiesBoxValue(box, "responseVisualizer", responseVisual.value ? { value: responseVisual.value } : null);
                            const result = yield invokeBlockAction("SaveAction", {
                                idKey: props.interactiveExperienceIdKey,
                                box: box
                            });
                            if (!result.isSuccess || !result.data) {
                                modalErrorMessage.value = (_b = result.errorMessage) !== null && _b !== void 0 ? _b : "Unknown error while trying to save action.";
                                return;
                            }
                            const action = result.data;
                            const existingActionIndex = internalValue.value.findIndex(a => areEqual(a.guid, action.guid));
                            if (existingActionIndex !== -1) {
                                const newValue = [...internalValue.value];
                                newValue.splice(existingActionIndex, 1, action);
                                internalValue.value = newValue;
                            }
                            else {
                                internalValue.value = [...internalValue.value, action];
                            }
                            isModalVisible.value = false;
                        });
                    }
                    function onActionRemoveClick(action) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!(yield confirmDelete("Action"))) {
                                return;
                            }
                            const result = yield invokeBlockAction("DeleteAction", {
                                idKey: props.interactiveExperienceIdKey,
                                actionGuid: action.guid
                            });
                            if (!result.isSuccess) {
                                alert(result.errorMessage || "Unable to delete the action.");
                            }
                            else {
                                const index = internalValue.value.findIndex(a => areEqual(a.guid, action.guid));
                                if (index !== -1) {
                                    const newValue = [...internalValue.value];
                                    newValue.splice(index, 1);
                                    internalValue.value = newValue;
                                }
                            }
                        });
                    }
                    function onActionReorder(action, beforeAction) {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            internalValue.value = [...internalValue.value];
                            const result = yield invokeBlockAction("ReorderAction", {
                                idKey: props.interactiveExperienceIdKey,
                                actionGuid: action.guid,
                                beforeActionGuid: (_a = beforeAction === null || beforeAction === void 0 ? void 0 : beforeAction.guid) !== null && _a !== void 0 ? _a : null
                            });
                            if (!result.isSuccess) {
                                alert(result.errorMessage || "Unable to re-order actions, you might need to reload the page.");
                                return;
                            }
                        });
                    }
                    watch([actionType, responseVisual], () => {
                        updateDefaultAttributeValues();
                    });
                    const dragOptions = useDragReorder(internalValue, onActionReorder);
                    updateDefaultAttributeValues();
                    const __returned__ = { props, emit, invokeBlockAction, internalValue, isModalVisible, modalTitle, modalErrorMessage, existingActionGuid, actionType, requiresModeration, allowMultipleSubmissions, anonymousResponses, responseVisual, attributeValues, actionHeaderTitle, actionHeaderDescription, actionTypeItems, responseVisualItems, selectedActionType, actionAttributes, selectedVisualizerType, visualizerAttributes, isRequiresModerationVisible, isMultipleSubmissionsVisible, getActionTypeName, getActionTypeIconClass, updateDefaultAttributeValues, onAddActionClick, onEditActionClick, onActionSave, onActionRemoveClick, onActionReorder, dragOptions, Alert, AttributeValuesContainer, CheckBox, DropDownList, Modal, Panel, SectionHeader, vDragSource: DragSource, vDragTarget: DragTarget };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _withScopeId = n => (pushScopeId("data-v-okip8sxdbn0xps52tx0bt48z"), n = n(), popScopeId(), n);
            const _hoisted_1$2 = ["onClick"];
            const _hoisted_2$2 = _withScopeId(() => createElementVNode("i", { class: "fa fa-plus" }, null, -1));
            const _hoisted_3$2 = [
                _hoisted_2$2
            ];
            const _hoisted_4$1 = { class: "actions-list" };
            const _hoisted_5$1 = { class: "action-item-count" };
            const _hoisted_6$1 = { class: "action-item-body" };
            const _hoisted_7$1 = _withScopeId(() => createElementVNode("span", { class: "reorder-handle" }, [
                createElementVNode("i", { class: "fa fa-bars" })
            ], -1));
            const _hoisted_8$1 = { class: "action-item-icon" };
            const _hoisted_9$1 = { class: "action-item-content" };
            const _hoisted_10$1 = { class: "title text-lg" };
            const _hoisted_11$1 = { class: "subtitle text-sm text-muted" };
            const _hoisted_12$1 = { class: "action-columncommand" };
            const _hoisted_13$1 = ["onClick"];
            const _hoisted_14$1 = _withScopeId(() => createElementVNode("i", { class: "fa fa-pencil" }, null, -1));
            const _hoisted_15$1 = [
                _hoisted_14$1
            ];
            const _hoisted_16$1 = ["onClick"];
            const _hoisted_17$1 = _withScopeId(() => createElementVNode("i", { class: "fa fa-times" }, null, -1));
            const _hoisted_18$1 = [
                _hoisted_17$1
            ];
            const _hoisted_19$1 = { class: "row" };
            const _hoisted_20$1 = {
                key: 0,
                class: "col-md-4"
            };
            const _hoisted_21$1 = {
                key: 1,
                class: "col-md-4"
            };
            const _hoisted_22$1 = { class: "col-md-4" };
            function render$3(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    createVNode($setup["Panel"], { title: "Actions" }, {
                        default: withCtx(() => [
                            createVNode($setup["SectionHeader"], {
                                title: $setup.actionHeaderTitle,
                                description: $setup.actionHeaderDescription
                            }, {
                                actions: withCtx(() => [
                                    createElementVNode("a", {
                                        class: "btn btn-default btn-sm btn-square",
                                        href: "#",
                                        onClick: withModifiers($setup.onAddActionClick, ["prevent"])
                                    }, _hoisted_3$2, 8, _hoisted_1$2)
                                ]),
                                _: 1
                            }, 8, ["title", "description"]),
                            withDirectives((openBlock(), createElementBlock("div", _hoisted_4$1, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.internalValue, (action, index) => {
                                    return (openBlock(), createElementBlock("div", {
                                        class: "action-item",
                                        key: action.guid
                                    }, [
                                        createElementVNode("div", _hoisted_5$1, toDisplayString(index + 1), 1),
                                        createElementVNode("div", _hoisted_6$1, [
                                            _hoisted_7$1,
                                            createElementVNode("div", _hoisted_8$1, [
                                                createElementVNode("i", {
                                                    class: normalizeClass($setup.getActionTypeIconClass(action))
                                                }, null, 2)
                                            ]),
                                            createElementVNode("div", _hoisted_9$1, [
                                                createElementVNode("div", _hoisted_10$1, toDisplayString(action.title), 1),
                                                createElementVNode("div", _hoisted_11$1, toDisplayString($setup.getActionTypeName(action)), 1)
                                            ]),
                                            createElementVNode("div", _hoisted_12$1, [
                                                createElementVNode("a", {
                                                    href: "#",
                                                    class: "btn btn-default btn-sm btn-square mr-2",
                                                    onClick: withModifiers($event => ($setup.onEditActionClick(action)), ["prevent"])
                                                }, _hoisted_15$1, 8, _hoisted_13$1),
                                                createElementVNode("a", {
                                                    href: "#",
                                                    class: "btn btn-danger btn-sm btn-square",
                                                    onClick: withModifiers($event => ($setup.onActionRemoveClick(action)), ["prevent"])
                                                }, _hoisted_18$1, 8, _hoisted_16$1)
                                            ])
                                        ])
                                    ]));
                                }), 128))
                            ])), [
                                [$setup["vDragSource"], $setup.dragOptions],
                                [$setup["vDragTarget"], $setup.dragOptions]
                            ])
                        ]),
                        _: 1
                    }),
                    createVNode($setup["Modal"], {
                        modelValue: $setup.isModalVisible,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($setup.isModalVisible) = $event)),
                        title: $setup.modalTitle,
                        saveText: "Save",
                        onSave: $setup.onActionSave
                    }, {
                        default: withCtx(() => [
                            ($setup.modalErrorMessage)
                                ? (openBlock(), createBlock($setup["Alert"], {
                                    key: 0,
                                    alertType: "warning"
                                }, {
                                    default: withCtx(() => [
                                        createTextVNode(toDisplayString($setup.modalErrorMessage), 1)
                                    ]),
                                    _: 1
                                }))
                                : createCommentVNode("v-if", true),
                            createVNode($setup["DropDownList"], {
                                modelValue: $setup.actionType,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.actionType) = $event)),
                                label: "Action Type",
                                rules: "required",
                                items: $setup.actionTypeItems
                            }, null, 8, ["modelValue", "items"]),
                            createVNode($setup["AttributeValuesContainer"], {
                                modelValue: $setup.attributeValues,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.attributeValues) = $event)),
                                attributes: $setup.actionAttributes,
                                isEditMode: "",
                                showCategoryLabel: false
                            }, null, 8, ["modelValue", "attributes"]),
                            createElementVNode("div", _hoisted_19$1, [
                                ($setup.isRequiresModerationVisible)
                                    ? (openBlock(), createElementBlock("div", _hoisted_20$1, [
                                        createVNode($setup["CheckBox"], {
                                            modelValue: $setup.requiresModeration,
                                            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.requiresModeration) = $event)),
                                            label: "Requires Moderation"
                                        }, null, 8, ["modelValue"])
                                    ]))
                                    : createCommentVNode("v-if", true),
                                ($setup.isMultipleSubmissionsVisible)
                                    ? (openBlock(), createElementBlock("div", _hoisted_21$1, [
                                        createVNode($setup["CheckBox"], {
                                            modelValue: $setup.allowMultipleSubmissions,
                                            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.allowMultipleSubmissions) = $event)),
                                            label: "Allow Multiple Submissions"
                                        }, null, 8, ["modelValue"])
                                    ]))
                                    : createCommentVNode("v-if", true),
                                createElementVNode("div", _hoisted_22$1, [
                                    createVNode($setup["CheckBox"], {
                                        modelValue: $setup.anonymousResponses,
                                        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.anonymousResponses) = $event)),
                                        label: "Anonymous Responses"
                                    }, null, 8, ["modelValue"])
                                ])
                            ]),
                            createVNode($setup["DropDownList"], {
                                modelValue: $setup.responseVisual,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.responseVisual) = $event)),
                                label: "Response Visual",
                                items: $setup.responseVisualItems
                            }, null, 8, ["modelValue", "items"]),
                            createVNode($setup["AttributeValuesContainer"], {
                                modelValue: $setup.attributeValues,
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($setup.attributeValues) = $event)),
                                attributes: $setup.visualizerAttributes,
                                isEditMode: "",
                                showCategoryLabel: false
                            }, null, 8, ["modelValue", "attributes"])
                        ]),
                        _: 1
                    }, 8, ["modelValue", "title"])
                ], 64));
            }
            const __sfc_style = document.createElement("style");
            __sfc_style.textContent = `.action-item[data-v-okip8sxdbn0xps52tx0bt48z] {
    display: flex;
    align-items: stretch;
    margin-bottom: 12px;
    overflow: hidden;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
}
.action-item-count[data-v-okip8sxdbn0xps52tx0bt48z] {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 35px;
    padding: 8px 0;
    color: #fff;
    background-color: var(--brand-info);
}
.action-item-body[data-v-okip8sxdbn0xps52tx0bt48z] {
    display: flex;
    flex: 1 0 0;
    align-items: center;
    padding: 8px 0;
}
.action-item-body > *[data-v-okip8sxdbn0xps52tx0bt48z] {
    display: flex;
    align-items: center;
    padding: 0 12px;
}
.action-item-body > *[data-v-okip8sxdbn0xps52tx0bt48z]:last-child {
    display: block;
    padding-right: 16px;
}
.action-item .action-item-icon[data-v-okip8sxdbn0xps52tx0bt48z] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    color: #fff;
    background-color: var(--brand-info);
    border-radius: 50%;
}
.action-item .action-item-content[data-v-okip8sxdbn0xps52tx0bt48z] {
    flex: 1 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.action-item .reorder-handle[data-v-okip8sxdbn0xps52tx0bt48z] {
    cursor: grab;
}
.action-item .action-columncommand[data-v-okip8sxdbn0xps52tx0bt48z] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .2s ease-in-out;
}
.action-item .title[data-v-okip8sxdbn0xps52tx0bt48z] {
    font-weight: 600;
}
.action-item:hover .action-columncommand[data-v-okip8sxdbn0xps52tx0bt48z] {
    visibility: visible;
    opacity: 1;
}`;
            document.head.appendChild(__sfc_style);
            const exportHelper$3 = _sfc_main$3;
            for (const [key, val] of [["render", render$3], ["__scopeId", "data-v-okip8sxdbn0xps52tx0bt48z"]]) {
                exportHelper$3[key] = val;
            }

            const _sfc_main$2 = defineComponent({
                name: 'editPanel.partial',
                props: {
                    modelValue: {
                        type: Object,
                        required: true
                    },
                    options: {
                        type: Object,
                        required: true
                    }
                },
                emits: ["update:modelValue", "propertyChanged"],
                setup(__props, { expose, emit }) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;
                    expose();
                    const props = __props;
                    const attributes = ref((_a = props.modelValue.attributes) !== null && _a !== void 0 ? _a : {});
                    const attributeValues = ref((_b = props.modelValue.attributeValues) !== null && _b !== void 0 ? _b : {});
                    const campusBehavior = ref(props.modelValue.campusBehavior.toString());
                    const defaultCampus = ref(props.modelValue.defaultCampus);
                    const description = propertyRef((_c = props.modelValue.description) !== null && _c !== void 0 ? _c : "", "Description");
                    const isActive = propertyRef((_d = props.modelValue.isActive) !== null && _d !== void 0 ? _d : false, "IsActive");
                    const name = propertyRef((_e = props.modelValue.name) !== null && _e !== void 0 ? _e : "", "Name");
                    const publicLabel = propertyRef((_f = props.modelValue.publicLabel) !== null && _f !== void 0 ? _f : "", "PublicLabel");
                    const experiencePhoto = propertyRef((_g = props.modelValue.photoBinaryFile) !== null && _g !== void 0 ? _g : null, "PhotoBinaryFileId");
                    const pushNotificationConfiguration = propertyRef(props.modelValue.pushNotificationType.toString(), "PushNotificationType");
                    const pushNotificationTitle = propertyRef((_h = props.modelValue.pushNotificationTitle) !== null && _h !== void 0 ? _h : "", "PushNotificationTitle");
                    const pushNotificationDetail = propertyRef((_j = props.modelValue.pushNotificationDetail) !== null && _j !== void 0 ? _j : "", "PushNotificationDetail");
                    const schedules = ref((_k = props.modelValue.schedules) !== null && _k !== void 0 ? _k : []);
                    const welcomeTitle = propertyRef((_l = props.modelValue.welcomeTitle) !== null && _l !== void 0 ? _l : "", "WelcomeTitle");
                    const welcomeMessage = propertyRef((_m = props.modelValue.welcomeMessage) !== null && _m !== void 0 ? _m : "", "WelcomeMessage");
                    const welcomeHeaderImage = propertyRef((_o = props.modelValue.welcomeHeaderImageBinaryFile) !== null && _o !== void 0 ? _o : null, "WelcomeHeaderImageBinaryFileId");
                    const noActionsTitle = propertyRef((_p = props.modelValue.noActionTitle) !== null && _p !== void 0 ? _p : "", "NoActionTitle");
                    const noActionsMessage = propertyRef((_q = props.modelValue.noActionMessage) !== null && _q !== void 0 ? _q : "", "NoActionMessage");
                    const noActionsHeaderImage = propertyRef((_r = props.modelValue.noActionHeaderImageBinaryFile) !== null && _r !== void 0 ? _r : null, "NoActionHeaderImageBinaryFileId");
                    const actionBackgroundColor = propertyRef((_s = props.modelValue.actionBackgroundColor) !== null && _s !== void 0 ? _s : "", "ActionBackgroundColor");
                    const actionTextColor = propertyRef((_t = props.modelValue.actionTextColor) !== null && _t !== void 0 ? _t : "", "ActionTextColor");
                    const actionPrimaryButtonColor = propertyRef((_u = props.modelValue.actionPrimaryButtonColor) !== null && _u !== void 0 ? _u : "", "ActionPrimaryButtonColor");
                    const actionPrimaryButtonTextColor = propertyRef((_v = props.modelValue.actionPrimaryButtonTextColor) !== null && _v !== void 0 ? _v : "", "ActionPrimaryButtonTextColor");
                    const actionSecondaryButtonColor = propertyRef((_w = props.modelValue.actionSecondaryButtonColor) !== null && _w !== void 0 ? _w : "", "ActionSecondaryButtonColor");
                    const actionSecondaryButtonTextColor = propertyRef((_x = props.modelValue.actionSecondaryButtonTextColor) !== null && _x !== void 0 ? _x : "", "ActionSecondaryButtonTextColor");
                    const actionBackgroundImage = propertyRef((_y = props.modelValue.actionBackgroundImageBinaryFile) !== null && _y !== void 0 ? _y : null, "ActionBackgroundImageBinaryFileId");
                    const actionCustomCss = propertyRef((_z = props.modelValue.actionCustomCss) !== null && _z !== void 0 ? _z : "", "ActionCustomCss");
                    const audienceBackgroundColor = propertyRef((_0 = props.modelValue.audienceBackgroundColor) !== null && _0 !== void 0 ? _0 : "", "ActionBackgroundColor");
                    const audienceTextColor = propertyRef((_1 = props.modelValue.audienceTextColor) !== null && _1 !== void 0 ? _1 : "", "ActionTextColor");
                    const audiencePrimaryColor = propertyRef((_2 = props.modelValue.audiencePrimaryColor) !== null && _2 !== void 0 ? _2 : "", "AudiencePrimaryColor");
                    const audienceSecondaryColor = propertyRef((_3 = props.modelValue.audienceSecondaryColor) !== null && _3 !== void 0 ? _3 : "", "AudienceSecondaryColor");
                    const audienceAccentColor = propertyRef((_4 = props.modelValue.audienceAccentColor) !== null && _4 !== void 0 ? _4 : "", "AudienceAccentColor");
                    const audienceBackgroundImage = propertyRef((_5 = props.modelValue.audienceBackgroundImageBinaryFile) !== null && _5 !== void 0 ? _5 : null, "AudienceBackgroundImageBinaryFileId");
                    const audienceCustomCss = propertyRef((_6 = props.modelValue.audienceCustomCss) !== null && _6 !== void 0 ? _6 : "", "AudienceCustomCss");
                    const isScheduleModalVisible = ref(false);
                    let editingSchedule = null;
                    const scheduleModalTitle = ref("");
                    const scheduleContent = ref("");
                    const scheduleCampuses = shallowRef([]);
                    const scheduleDataView = shallowRef(null);
                    const scheduleGroup = shallowRef(null);
                    const propRefs = [description,
                        isActive,
                        name,
                        publicLabel,
                        experiencePhoto,
                        pushNotificationConfiguration,
                        pushNotificationTitle,
                        pushNotificationDetail,
                        welcomeTitle,
                        welcomeMessage,
                        welcomeHeaderImage,
                        noActionsTitle,
                        noActionsMessage,
                        noActionsHeaderImage,
                        actionBackgroundColor,
                        actionTextColor,
                        actionPrimaryButtonColor,
                        actionPrimaryButtonTextColor,
                        actionSecondaryButtonColor,
                        actionSecondaryButtonTextColor,
                        actionBackgroundImage,
                        actionCustomCss,
                        audienceBackgroundColor,
                        audienceTextColor,
                        audiencePrimaryColor,
                        audienceSecondaryColor,
                        audienceAccentColor,
                        audienceBackgroundImage,
                        audienceCustomCss];
                    const binaryFileTypeGuid = "C1142570-8CD6-4A20-83B1-ACB47C1CD377";
                    const isActionAdvancedOptionsVisible = ref(false);
                    const isAudienceAdvancedOptionsVisible = ref(false);
                    const pushNotificationConfigurationItems = [
                        {
                            value: 0..toString(),
                            text: "Never"
                        },
                        {
                            value: 1..toString(),
                            text: "Every Action"
                        },
                        {
                            value: 2..toString(),
                            text: "Specific Actions"
                        }
                    ];
                    const campusBehaviorItems = [
                        {
                            value: 0..toString(),
                            text: "Filter Schedules by Campus Geofences"
                        },
                        {
                            value: 1..toString(),
                            text: "Determine Campus from Geofence",
                        },
                        {
                            value: 2..toString(),
                            text: "Use Individual's Campus"
                        }
                    ];
                    const isPushActive = computed(() => {
                        return pushNotificationConfiguration.value === 1..toString()
                            || pushNotificationConfiguration.value === 2..toString();
                    });
                    const isDefaultCampusVisible = computed(() => {
                        return campusBehavior.value === 1..toString()
                            || campusBehavior.value === 2..toString();
                    });
                    function getScheduleCampusNames(schedule) {
                        if (schedule.campuses && schedule.campuses.length) {
                            return schedule.campuses.map(c => { var _a; return (_a = c.text) !== null && _a !== void 0 ? _a : ""; }).join(", ");
                        }
                        else {
                            return "";
                        }
                    }
                    function onAddScheduleClick() {
                        scheduleModalTitle.value = "Add Schedule";
                        editingSchedule = null;
                        scheduleContent.value = "";
                        scheduleCampuses.value = [];
                        scheduleDataView.value = null;
                        scheduleGroup.value = null;
                        isScheduleModalVisible.value = true;
                    }
                    function onEditScheduleClick(schedule) {
                        var _a, _b, _c, _d, _e;
                        scheduleModalTitle.value = "Edit Schedule";
                        editingSchedule = schedule;
                        scheduleContent.value = (_b = (_a = schedule.schedule) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "";
                        scheduleCampuses.value = (_c = schedule.campuses) !== null && _c !== void 0 ? _c : [];
                        scheduleDataView.value = (_d = schedule.dataView) !== null && _d !== void 0 ? _d : null;
                        scheduleGroup.value = (_e = schedule.group) !== null && _e !== void 0 ? _e : null;
                        isScheduleModalVisible.value = true;
                    }
                    function onDeleteScheduleClick(schedule) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!(yield confirmDelete("Schedule"))) {
                                return;
                            }
                            const index = schedules.value.findIndex(s => areEqual(s.guid, schedule.guid));
                            if (index >= 0) {
                                schedules.value.splice(index, 1);
                            }
                        });
                    }
                    function onSaveSchedule() {
                        const calendar = new Calendar(scheduleContent.value);
                        let schedule = editingSchedule !== null && editingSchedule !== void 0 ? editingSchedule : {
                            guid: newGuid()
                        };
                        schedule.schedule = {
                            value: scheduleContent.value,
                            text: calendar.events[0].toFriendlyText()
                        };
                        schedule.campuses = scheduleCampuses.value;
                        schedule.dataView = scheduleDataView.value;
                        schedule.group = scheduleGroup.value;
                        if (!editingSchedule) {
                            schedules.value.push(schedule);
                        }
                        isScheduleModalVisible.value = false;
                    }
                    function onActionAdvancedOptionsClick() {
                        isActionAdvancedOptionsVisible.value = !isActionAdvancedOptionsVisible.value;
                    }
                    function onAudienceAdvancedOptionsClick() {
                        isAudienceAdvancedOptionsVisible.value = !isAudienceAdvancedOptionsVisible.value;
                    }
                    watch(() => props.modelValue, () => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
                        updateRefValue(attributes, (_a = props.modelValue.attributes) !== null && _a !== void 0 ? _a : {});
                        updateRefValue(attributeValues, (_b = props.modelValue.attributeValues) !== null && _b !== void 0 ? _b : {});
                        updateRefValue(campusBehavior, props.modelValue.campusBehavior.toString());
                        updateRefValue(defaultCampus, props.modelValue.defaultCampus);
                        updateRefValue(description, (_c = props.modelValue.description) !== null && _c !== void 0 ? _c : "");
                        updateRefValue(isActive, (_d = props.modelValue.isActive) !== null && _d !== void 0 ? _d : false);
                        updateRefValue(name, (_e = props.modelValue.name) !== null && _e !== void 0 ? _e : "");
                        updateRefValue(publicLabel, (_f = props.modelValue.publicLabel) !== null && _f !== void 0 ? _f : "");
                        updateRefValue(experiencePhoto, (_g = props.modelValue.photoBinaryFile) !== null && _g !== void 0 ? _g : null);
                        updateRefValue(pushNotificationConfiguration, props.modelValue.pushNotificationType.toString());
                        updateRefValue(pushNotificationTitle, (_h = props.modelValue.pushNotificationTitle) !== null && _h !== void 0 ? _h : "");
                        updateRefValue(pushNotificationDetail, (_j = props.modelValue.pushNotificationDetail) !== null && _j !== void 0 ? _j : "");
                        updateRefValue(welcomeTitle, (_k = props.modelValue.welcomeTitle) !== null && _k !== void 0 ? _k : "");
                        updateRefValue(welcomeMessage, (_l = props.modelValue.welcomeMessage) !== null && _l !== void 0 ? _l : "");
                        updateRefValue(welcomeHeaderImage, (_m = props.modelValue.welcomeHeaderImageBinaryFile) !== null && _m !== void 0 ? _m : null);
                        updateRefValue(noActionsTitle, (_o = props.modelValue.noActionTitle) !== null && _o !== void 0 ? _o : "");
                        updateRefValue(noActionsMessage, (_p = props.modelValue.noActionMessage) !== null && _p !== void 0 ? _p : "");
                        updateRefValue(noActionsHeaderImage, (_q = props.modelValue.noActionHeaderImageBinaryFile) !== null && _q !== void 0 ? _q : null);
                        updateRefValue(actionBackgroundColor, (_r = props.modelValue.actionBackgroundColor) !== null && _r !== void 0 ? _r : "");
                        updateRefValue(actionTextColor, (_s = props.modelValue.actionTextColor) !== null && _s !== void 0 ? _s : "");
                        updateRefValue(actionPrimaryButtonColor, (_t = props.modelValue.actionPrimaryButtonColor) !== null && _t !== void 0 ? _t : "");
                        updateRefValue(actionPrimaryButtonTextColor, (_u = props.modelValue.actionPrimaryButtonTextColor) !== null && _u !== void 0 ? _u : "");
                        updateRefValue(actionSecondaryButtonColor, (_v = props.modelValue.actionSecondaryButtonColor) !== null && _v !== void 0 ? _v : "");
                        updateRefValue(actionSecondaryButtonTextColor, (_w = props.modelValue.actionSecondaryButtonTextColor) !== null && _w !== void 0 ? _w : "");
                        updateRefValue(actionBackgroundImage, (_x = props.modelValue.actionBackgroundImageBinaryFile) !== null && _x !== void 0 ? _x : null);
                        updateRefValue(actionCustomCss, (_y = props.modelValue.actionCustomCss) !== null && _y !== void 0 ? _y : "");
                        updateRefValue(audienceBackgroundColor, (_z = props.modelValue.audienceBackgroundColor) !== null && _z !== void 0 ? _z : "");
                        updateRefValue(audienceTextColor, (_0 = props.modelValue.audienceTextColor) !== null && _0 !== void 0 ? _0 : "");
                        updateRefValue(audiencePrimaryColor, (_1 = props.modelValue.audiencePrimaryColor) !== null && _1 !== void 0 ? _1 : "");
                        updateRefValue(audienceSecondaryColor, (_2 = props.modelValue.audienceSecondaryColor) !== null && _2 !== void 0 ? _2 : "");
                        updateRefValue(audienceAccentColor, (_3 = props.modelValue.audienceAccentColor) !== null && _3 !== void 0 ? _3 : "");
                        updateRefValue(audienceBackgroundImage, (_4 = props.modelValue.audienceBackgroundImageBinaryFile) !== null && _4 !== void 0 ? _4 : null);
                        updateRefValue(audienceCustomCss, (_5 = props.modelValue.audienceCustomCss) !== null && _5 !== void 0 ? _5 : "");
                    });
                    watch([attributeValues, campusBehavior, defaultCampus, schedules, ...propRefs], () => {
                        const newValue = Object.assign(Object.assign({}, props.modelValue), { attributeValues: attributeValues.value, campusBehavior: toNumber(campusBehavior.value), defaultCampus: defaultCampus.value, description: description.value, isActive: isActive.value, name: name.value, publicLabel: publicLabel.value, photoBinaryFile: experiencePhoto.value, pushNotificationType: toNumber(pushNotificationConfiguration.value), pushNotificationTitle: pushNotificationTitle.value, pushNotificationDetail: pushNotificationDetail.value, welcomeTitle: welcomeTitle.value, welcomeMessage: welcomeMessage.value, welcomeHeaderImageBinaryFile: welcomeHeaderImage.value, noActionTitle: noActionsTitle.value, noActionMessage: noActionsMessage.value, noActionHeaderImageBinaryFile: noActionsHeaderImage.value, actionBackgroundColor: actionBackgroundColor.value, actionTextColor: actionTextColor.value, actionPrimaryButtonColor: actionPrimaryButtonColor.value, actionPrimaryButtonTextColor: actionPrimaryButtonTextColor.value, actionSecondaryButtonColor: actionSecondaryButtonColor.value, actionSecondaryButtonTextColor: actionSecondaryButtonTextColor.value, actionBackgroundImageBinaryFile: actionBackgroundImage.value, actionCustomCss: actionCustomCss.value, audienceBackgroundColor: audienceBackgroundColor.value, audienceTextColor: audienceTextColor.value, audiencePrimaryColor: audiencePrimaryColor.value, audienceSecondaryColor: audienceSecondaryColor.value, audienceAccentColor: audienceAccentColor.value, audienceBackgroundImageBinaryFile: audienceBackgroundImage.value, audienceCustomCss: audienceCustomCss.value });
                        emit("update:modelValue", newValue);
                    });
                    watchPropertyChanges(propRefs, emit);
                    watch(name, (newValue, oldValue) => {
                        if (oldValue === publicLabel.value) {
                            publicLabel.value = newValue;
                        }
                    });
                    const __returned__ = { props, emit, attributes, attributeValues, campusBehavior, defaultCampus, description, isActive, name, publicLabel, experiencePhoto, pushNotificationConfiguration, pushNotificationTitle, pushNotificationDetail, schedules, welcomeTitle, welcomeMessage, welcomeHeaderImage, noActionsTitle, noActionsMessage, noActionsHeaderImage, actionBackgroundColor, actionTextColor, actionPrimaryButtonColor, actionPrimaryButtonTextColor, actionSecondaryButtonColor, actionSecondaryButtonTextColor, actionBackgroundImage, actionCustomCss, audienceBackgroundColor, audienceTextColor, audiencePrimaryColor, audienceSecondaryColor, audienceAccentColor, audienceBackgroundImage, audienceCustomCss, isScheduleModalVisible, editingSchedule, scheduleModalTitle, scheduleContent, scheduleCampuses, scheduleDataView, scheduleGroup, propRefs, binaryFileTypeGuid, isActionAdvancedOptionsVisible, isAudienceAdvancedOptionsVisible, pushNotificationConfigurationItems, campusBehaviorItems, isPushActive, isDefaultCampusVisible, getScheduleCampusNames, onAddScheduleClick, onEditScheduleClick, onDeleteScheduleClick, onSaveSchedule, onActionAdvancedOptionsClick, onAudienceAdvancedOptionsClick, AttributeValuesContainer, CampusPicker, CheckBox, CodeEditor, ColorPicker, DataViewPicker, ImageUploader, GroupPicker, Modal, RadioButtonList, ScheduleBuilder, SectionContainer, SectionHeader, TextBox, TransitionVerticalCollapse };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$1 = { class: "row" };
            const _hoisted_2$1 = { class: "col-md-6" };
            const _hoisted_3$1 = { class: "col-md-6" };
            const _hoisted_4 = { class: "row" };
            const _hoisted_5 = { class: "col-md-6" };
            const _hoisted_6 = { class: "col-md-6" };
            const _hoisted_7 = { class: "mb-5" };
            const _hoisted_8 = {
                key: 0,
                class: "row"
            };
            const _hoisted_9 = { class: "col-md-6" };
            const _hoisted_10 = { class: "col-md-6" };
            const _hoisted_11 = {
                key: 0,
                class: "row"
            };
            const _hoisted_12 = { class: "col-md-6" };
            const _hoisted_13 = { class: "grid-table table table-condensed table-light" };
            const _hoisted_14 = createElementVNode("thead", null, [
                createElementVNode("tr", null, [
                    createElementVNode("th", null, "Schedule"),
                    createElementVNode("th", null, "Campus"),
                    createElementVNode("th", null, "Data View"),
                    createElementVNode("th", null, "Group"),
                    createElementVNode("th", { class: "grid-columncommand" }),
                    createElementVNode("th", { class: "grid-columncommand" })
                ])
            ], -1);
            const _hoisted_15 = {
                class: "grid-columncommand",
                align: "center"
            };
            const _hoisted_16 = ["onClick"];
            const _hoisted_17 = createElementVNode("i", { class: "fa fa-pencil" }, null, -1);
            const _hoisted_18 = [
                _hoisted_17
            ];
            const _hoisted_19 = {
                class: "grid-columncommand",
                align: "center"
            };
            const _hoisted_20 = ["onClick"];
            const _hoisted_21 = createElementVNode("i", { class: "fa fa-times" }, null, -1);
            const _hoisted_22 = [
                _hoisted_21
            ];
            const _hoisted_23 = { key: 0 };
            const _hoisted_24 = createElementVNode("td", { colspan: "6" }, "No schedules defined.", -1);
            const _hoisted_25 = [
                _hoisted_24
            ];
            const _hoisted_26 = {
                class: "grid-actions",
                colspan: "6"
            };
            const _hoisted_27 = ["onClick"];
            const _hoisted_28 = createElementVNode("i", { class: "fa fa-plus-circle fa-fw" }, null, -1);
            const _hoisted_29 = [
                _hoisted_28
            ];
            const _hoisted_30 = { class: "row" };
            const _hoisted_31 = { class: "col-md-6" };
            const _hoisted_32 = { class: "col-md-6" };
            const _hoisted_33 = { class: "row" };
            const _hoisted_34 = { class: "col-md-6" };
            const _hoisted_35 = { class: "col-md-6" };
            const _hoisted_36 = { class: "row" };
            const _hoisted_37 = { class: "col-lg-3 col-sm-6" };
            const _hoisted_38 = { class: "col-lg-3 col-sm-6" };
            const _hoisted_39 = { class: "col-lg-3 col-sm-6" };
            const _hoisted_40 = { class: "col-lg-3 col-sm-6" };
            const _hoisted_41 = { class: "row" };
            const _hoisted_42 = createElementVNode("div", { class: "col-sm-6" }, null, -1);
            const _hoisted_43 = { class: "col-lg-3 col-sm-6" };
            const _hoisted_44 = { class: "col-lg-3 col-sm-6" };
            const _hoisted_45 = { class: "mt-2 text-right" };
            const _hoisted_46 = ["onClick"];
            const _hoisted_47 = createTextVNode(" Advanced Options ");
            const _hoisted_48 = {
                key: 0,
                class: "fa fa-angle-up"
            };
            const _hoisted_49 = {
                key: 1,
                class: "fa fa-angle-down"
            };
            const _hoisted_50 = { key: 0 };
            const _hoisted_51 = { class: "row" };
            const _hoisted_52 = { class: "col-lg-3 col-sm-6" };
            const _hoisted_53 = { class: "col-lg-3 col-sm-6" };
            const _hoisted_54 = { class: "row" };
            const _hoisted_55 = { class: "col-lg-3 col-sm-6" };
            const _hoisted_56 = { class: "col-lg-3 col-sm-6" };
            const _hoisted_57 = { class: "col-lg-3 col-sm-6" };
            const _hoisted_58 = { class: "mt-2 text-right" };
            const _hoisted_59 = ["onClick"];
            const _hoisted_60 = createTextVNode(" Advanced Options ");
            const _hoisted_61 = {
                key: 0,
                class: "fa fa-angle-up"
            };
            const _hoisted_62 = {
                key: 1,
                class: "fa fa-angle-down"
            };
            const _hoisted_63 = { key: 0 };
            function render$2(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    createElementVNode("fieldset", null, [
                        createElementVNode("div", _hoisted_1$1, [
                            createElementVNode("div", _hoisted_2$1, [
                                createVNode($setup["TextBox"], {
                                    modelValue: $setup.name,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.name) = $event)),
                                    label: "Name",
                                    rules: "required"
                                }, null, 8, ["modelValue"])
                            ]),
                            createElementVNode("div", _hoisted_3$1, [
                                createVNode($setup["CheckBox"], {
                                    modelValue: $setup.isActive,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.isActive) = $event)),
                                    label: "Active"
                                }, null, 8, ["modelValue"])
                            ])
                        ]),
                        createVNode($setup["TextBox"], {
                            modelValue: $setup.description,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.description) = $event)),
                            label: "Description",
                            textMode: "multiline"
                        }, null, 8, ["modelValue"]),
                        createElementVNode("div", _hoisted_4, [
                            createElementVNode("div", _hoisted_5, [
                                createVNode($setup["TextBox"], {
                                    modelValue: $setup.publicLabel,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.publicLabel) = $event)),
                                    label: "Public Label",
                                    rules: "required",
                                    help: "The experience name that will be shown publicly."
                                }, null, 8, ["modelValue"])
                            ]),
                            createElementVNode("div", _hoisted_6, [
                                createVNode($setup["ImageUploader"], {
                                    modelValue: $setup.experiencePhoto,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.experiencePhoto) = $event)),
                                    label: "Experience Photo",
                                    help: "An optional photo to be used when displaying information about the experience.",
                                    binaryFileTypeGuid: $setup.binaryFileTypeGuid
                                }, null, 8, ["modelValue", "binaryFileTypeGuid"])
                            ])
                        ]),
                        createElementVNode("div", _hoisted_7, [
                            createVNode($setup["RadioButtonList"], {
                                modelValue: $setup.pushNotificationConfiguration,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.pushNotificationConfiguration) = $event)),
                                label: "Push Notification Configuration",
                                help: "Detemines when push notifications should be sent when launching actions.",
                                items: $setup.pushNotificationConfigurationItems,
                                horizontal: ""
                            }, null, 8, ["modelValue"]),
                            createVNode($setup["TransitionVerticalCollapse"], null, {
                                default: withCtx(() => [
                                    ($setup.isPushActive)
                                        ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                            createElementVNode("div", _hoisted_9, [
                                                createVNode($setup["TextBox"], {
                                                    modelValue: $setup.pushNotificationTitle,
                                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($setup.pushNotificationTitle) = $event)),
                                                    label: "Push Notification Title",
                                                    help: "The title to use on any push notifications when actions are posted.",
                                                    rules: "required",
                                                    maxLength: 200
                                                }, null, 8, ["modelValue"])
                                            ]),
                                            createElementVNode("div", _hoisted_10, [
                                                createVNode($setup["TextBox"], {
                                                    modelValue: $setup.pushNotificationDetail,
                                                    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($setup.pushNotificationDetail) = $event)),
                                                    label: "Push Notification Detail",
                                                    help: "The detail message to use on any push notifications when actions are posted.",
                                                    rules: "required",
                                                    maxLength: 1000
                                                }, null, 8, ["modelValue"])
                                            ])
                                        ]))
                                        : createCommentVNode("v-if", true)
                                ]),
                                _: 1
                            }),
                            createVNode($setup["AttributeValuesContainer"], {
                                modelValue: $setup.attributeValues,
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($setup.attributeValues) = $event)),
                                attributes: $setup.attributes,
                                isEditMode: "",
                                numberOfColumns: 2
                            }, null, 8, ["modelValue", "attributes"])
                        ]),
                        createVNode($setup["SectionContainer"], {
                            title: "Schedules",
                            description: "Schedules determine when and where the experience occurs. You can also configure filters to determine who should be allowed to view an experience. These filters require that the individual is logged in."
                        }, {
                            default: withCtx(() => [
                                createVNode($setup["RadioButtonList"], {
                                    modelValue: $setup.campusBehavior,
                                    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($setup.campusBehavior) = $event)),
                                    label: "Campus Behavior",
                                    items: $setup.campusBehaviorItems,
                                    rules: "required",
                                    horizontal: "",
                                    help: "<p>Determines the role of campus with the experience.</p><p>Filter Schedules will only show the schedules that match the individual's location using the geofence of the campuses. It will also use the geofence to determine which campus to use for the individual's interactions.</p><p>Dermine Campus will use the campus geofence to determine which campus to use for the individual's interactions.</p><p>Use Individual's Campus will not consider campus geofences and simply use the campus set on the individual.</p>"
                                }, null, 8, ["modelValue"]),
                                createVNode($setup["TransitionVerticalCollapse"], null, {
                                    default: withCtx(() => [
                                        ($setup.isDefaultCampusVisible)
                                            ? (openBlock(), createElementBlock("div", _hoisted_11, [
                                                createElementVNode("div", _hoisted_12, [
                                                    createVNode($setup["CampusPicker"], {
                                                        modelValue: $setup.defaultCampus,
                                                        "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($setup.defaultCampus) = $event)),
                                                        label: "Default Campus",
                                                        forceVisible: "",
                                                        showBlankItem: "",
                                                        help: "The campus to use if no campus can be determined."
                                                    }, null, 8, ["modelValue"])
                                                ])
                                            ]))
                                            : createCommentVNode("v-if", true)
                                    ]),
                                    _: 1
                                }),
                                createElementVNode("table", _hoisted_13, [
                                    _hoisted_14,
                                    createElementVNode("tbody", null, [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.schedules, (row) => {
                                            var _a, _b, _c;
                                            return (openBlock(), createElementBlock("tr", null, [
                                                createElementVNode("td", null, toDisplayString((_a = row.schedule) === null || _a === void 0 ? void 0 : _a.text), 1),
                                                createElementVNode("td", null, toDisplayString($setup.getScheduleCampusNames(row)), 1),
                                                createElementVNode("td", null, toDisplayString((_b = row.dataView) === null || _b === void 0 ? void 0 : _b.text), 1),
                                                createElementVNode("td", null, toDisplayString((_c = row.group) === null || _c === void 0 ? void 0 : _c.text), 1),
                                                createElementVNode("td", _hoisted_15, [
                                                    createElementVNode("a", {
                                                        class: "btn btn-sm grid-edit-button",
                                                        onClick: withModifiers($event => ($setup.onEditScheduleClick(row)), ["prevent"])
                                                    }, _hoisted_18, 8, _hoisted_16)
                                                ]),
                                                createElementVNode("td", _hoisted_19, [
                                                    createElementVNode("a", {
                                                        class: "btn btn-danger btn-sm grid-delete-button",
                                                        onClick: withModifiers($event => ($setup.onDeleteScheduleClick(row)), ["prevent"])
                                                    }, _hoisted_22, 8, _hoisted_20)
                                                ])
                                            ]));
                                        }), 256)),
                                        (!$setup.schedules.length)
                                            ? (openBlock(), createElementBlock("tr", _hoisted_23, _hoisted_25))
                                            : createCommentVNode("v-if", true)
                                    ]),
                                    createElementVNode("tfoot", null, [
                                        createElementVNode("tr", null, [
                                            createElementVNode("td", _hoisted_26, [
                                                createElementVNode("a", {
                                                    class: "btn btn-grid-action btn-add btn-default btn-sm",
                                                    accesskey: "n",
                                                    title: "Alt+N",
                                                    href: "#",
                                                    onClick: withModifiers($setup.onAddScheduleClick, ["prevent"])
                                                }, _hoisted_29, 8, _hoisted_27)
                                            ])
                                        ])
                                    ])
                                ])
                            ]),
                            _: 1
                        }),
                        createVNode($setup["SectionContainer"], {
                            title: "Welcome Content",
                            description: "This optional content will be shown before the first action is displayed. It allows you to welcome your guest to the environment and let them know what to expect."
                        }, {
                            default: withCtx(() => [
                                createElementVNode("div", _hoisted_30, [
                                    createElementVNode("div", _hoisted_31, [
                                        createVNode($setup["TextBox"], {
                                            modelValue: $setup.welcomeTitle,
                                            "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($setup.welcomeTitle) = $event)),
                                            label: "Title"
                                        }, null, 8, ["modelValue"]),
                                        createVNode($setup["TextBox"], {
                                            modelValue: $setup.welcomeMessage,
                                            "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => (($setup.welcomeMessage) = $event)),
                                            label: "Message",
                                            textMode: "multiline"
                                        }, null, 8, ["modelValue"])
                                    ]),
                                    createElementVNode("div", _hoisted_32, [
                                        createVNode($setup["ImageUploader"], {
                                            modelValue: $setup.welcomeHeaderImage,
                                            "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($setup.welcomeHeaderImage) = $event)),
                                            label: "Header Image",
                                            binaryFileTypeGuid: $setup.binaryFileTypeGuid
                                        }, null, 8, ["modelValue", "binaryFileTypeGuid"])
                                    ])
                                ])
                            ]),
                            _: 1
                        }),
                        createVNode($setup["SectionContainer"], {
                            title: "No Actions Content",
                            description: "This optional content will be shown when there are no active actions being displayed."
                        }, {
                            default: withCtx(() => [
                                createElementVNode("div", _hoisted_33, [
                                    createElementVNode("div", _hoisted_34, [
                                        createVNode($setup["TextBox"], {
                                            modelValue: $setup.noActionsTitle,
                                            "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => (($setup.noActionsTitle) = $event)),
                                            label: "Title"
                                        }, null, 8, ["modelValue"]),
                                        createVNode($setup["TextBox"], {
                                            modelValue: $setup.noActionsMessage,
                                            "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($setup.noActionsMessage) = $event)),
                                            label: "Message",
                                            textMode: "multiline"
                                        }, null, 8, ["modelValue"])
                                    ]),
                                    createElementVNode("div", _hoisted_35, [
                                        createVNode($setup["ImageUploader"], {
                                            modelValue: $setup.noActionsHeaderImage,
                                            "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => (($setup.noActionsHeaderImage) = $event)),
                                            label: "Header Image",
                                            binaryFileTypeGuid: $setup.binaryFileTypeGuid
                                        }, null, 8, ["modelValue", "binaryFileTypeGuid"])
                                    ])
                                ])
                            ]),
                            _: 1
                        }),
                        createVNode($setup["SectionContainer"], {
                            title: "Action Appearance",
                            description: "The settings below can help override the default appearance on the individual devices to provide a custom theme for the experience."
                        }, {
                            default: withCtx(() => [
                                createElementVNode("div", _hoisted_36, [
                                    createElementVNode("div", _hoisted_37, [
                                        createVNode($setup["ColorPicker"], {
                                            modelValue: $setup.actionBackgroundColor,
                                            "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($setup.actionBackgroundColor) = $event)),
                                            label: "Background Color"
                                        }, null, 8, ["modelValue"])
                                    ]),
                                    createElementVNode("div", _hoisted_38, [
                                        createVNode($setup["ColorPicker"], {
                                            modelValue: $setup.actionTextColor,
                                            "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => (($setup.actionTextColor) = $event)),
                                            label: "Text Color"
                                        }, null, 8, ["modelValue"])
                                    ]),
                                    createElementVNode("div", _hoisted_39, [
                                        createVNode($setup["ColorPicker"], {
                                            modelValue: $setup.actionPrimaryButtonColor,
                                            "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => (($setup.actionPrimaryButtonColor) = $event)),
                                            label: "Primary Button Background Color"
                                        }, null, 8, ["modelValue"])
                                    ]),
                                    createElementVNode("div", _hoisted_40, [
                                        createVNode($setup["ColorPicker"], {
                                            modelValue: $setup.actionPrimaryButtonTextColor,
                                            "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => (($setup.actionPrimaryButtonTextColor) = $event)),
                                            label: "Primary Button Text Color"
                                        }, null, 8, ["modelValue"])
                                    ])
                                ]),
                                createElementVNode("div", _hoisted_41, [
                                    _hoisted_42,
                                    createElementVNode("div", _hoisted_43, [
                                        createVNode($setup["ColorPicker"], {
                                            modelValue: $setup.actionSecondaryButtonColor,
                                            "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($setup.actionSecondaryButtonColor) = $event)),
                                            label: "Secondary Button Background Color"
                                        }, null, 8, ["modelValue"])
                                    ]),
                                    createElementVNode("div", _hoisted_44, [
                                        createVNode($setup["ColorPicker"], {
                                            modelValue: $setup.actionSecondaryButtonTextColor,
                                            "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => (($setup.actionSecondaryButtonTextColor) = $event)),
                                            label: "Secondary Button Text Color"
                                        }, null, 8, ["modelValue"])
                                    ])
                                ]),
                                createVNode($setup["ImageUploader"], {
                                    modelValue: $setup.actionBackgroundImage,
                                    "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($setup.actionBackgroundImage) = $event)),
                                    label: "Background Image",
                                    binaryFileTypeGuid: $setup.binaryFileTypeGuid
                                }, null, 8, ["modelValue", "binaryFileTypeGuid"]),
                                createElementVNode("div", _hoisted_45, [
                                    createElementVNode("a", {
                                        href: "#",
                                        class: "text-xs",
                                        onClick: withModifiers($setup.onActionAdvancedOptionsClick, ["prevent"])
                                    }, [
                                        _hoisted_47,
                                        ($setup.isActionAdvancedOptionsVisible)
                                            ? (openBlock(), createElementBlock("i", _hoisted_48))
                                            : (openBlock(), createElementBlock("i", _hoisted_49))
                                    ], 8, _hoisted_46)
                                ]),
                                createVNode($setup["TransitionVerticalCollapse"], null, {
                                    default: withCtx(() => [
                                        ($setup.isActionAdvancedOptionsVisible)
                                            ? (openBlock(), createElementBlock("div", _hoisted_50, [
                                                createVNode($setup["CodeEditor"], {
                                                    modelValue: $setup.actionCustomCss,
                                                    "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => (($setup.actionCustomCss) = $event)),
                                                    label: "Custom CSS",
                                                    mode: "css"
                                                }, null, 8, ["modelValue"])
                                            ]))
                                            : createCommentVNode("v-if", true)
                                    ]),
                                    _: 1
                                })
                            ]),
                            _: 1
                        }),
                        createVNode($setup["SectionContainer"], {
                            title: "Audience Appearance",
                            description: "The settings below can help override the default appearance on the audience visuals to provide a custom theme for the experience."
                        }, {
                            default: withCtx(() => [
                                createElementVNode("div", _hoisted_51, [
                                    createElementVNode("div", _hoisted_52, [
                                        createVNode($setup["ColorPicker"], {
                                            modelValue: $setup.audienceBackgroundColor,
                                            "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => (($setup.audienceBackgroundColor) = $event)),
                                            label: "Background Color"
                                        }, null, 8, ["modelValue"])
                                    ]),
                                    createElementVNode("div", _hoisted_53, [
                                        createVNode($setup["ColorPicker"], {
                                            modelValue: $setup.audienceTextColor,
                                            "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => (($setup.audienceTextColor) = $event)),
                                            label: "Text Color"
                                        }, null, 8, ["modelValue"])
                                    ])
                                ]),
                                createElementVNode("div", _hoisted_54, [
                                    createElementVNode("div", _hoisted_55, [
                                        createVNode($setup["ColorPicker"], {
                                            modelValue: $setup.audiencePrimaryColor,
                                            "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => (($setup.audiencePrimaryColor) = $event)),
                                            label: "Primary Color"
                                        }, null, 8, ["modelValue"])
                                    ]),
                                    createElementVNode("div", _hoisted_56, [
                                        createVNode($setup["ColorPicker"], {
                                            modelValue: $setup.audienceSecondaryColor,
                                            "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => (($setup.audienceSecondaryColor) = $event)),
                                            label: "Secondary Color"
                                        }, null, 8, ["modelValue"])
                                    ]),
                                    createElementVNode("div", _hoisted_57, [
                                        createVNode($setup["ColorPicker"], {
                                            modelValue: $setup.audienceAccentColor,
                                            "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => (($setup.audienceAccentColor) = $event)),
                                            label: "Accent Color"
                                        }, null, 8, ["modelValue"])
                                    ])
                                ]),
                                createVNode($setup["ImageUploader"], {
                                    modelValue: $setup.audienceBackgroundImage,
                                    "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => (($setup.audienceBackgroundImage) = $event)),
                                    label: "Background Image",
                                    binaryFileTypeGuid: $setup.binaryFileTypeGuid
                                }, null, 8, ["modelValue", "binaryFileTypeGuid"]),
                                createElementVNode("div", _hoisted_58, [
                                    createElementVNode("a", {
                                        href: "#",
                                        class: "text-xs",
                                        onClick: withModifiers($setup.onAudienceAdvancedOptionsClick, ["prevent"])
                                    }, [
                                        _hoisted_60,
                                        ($setup.isAudienceAdvancedOptionsVisible)
                                            ? (openBlock(), createElementBlock("i", _hoisted_61))
                                            : (openBlock(), createElementBlock("i", _hoisted_62))
                                    ], 8, _hoisted_59)
                                ]),
                                createVNode($setup["TransitionVerticalCollapse"], null, {
                                    default: withCtx(() => [
                                        ($setup.isAudienceAdvancedOptionsVisible)
                                            ? (openBlock(), createElementBlock("div", _hoisted_63, [
                                                createVNode($setup["CodeEditor"], {
                                                    modelValue: $setup.audienceCustomCss,
                                                    "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => (($setup.audienceCustomCss) = $event)),
                                                    label: "Custom CSS",
                                                    mode: "css"
                                                }, null, 8, ["modelValue"])
                                            ]))
                                            : createCommentVNode("v-if", true)
                                    ]),
                                    _: 1
                                })
                            ]),
                            _: 1
                        })
                    ]),
                    createVNode($setup["Modal"], {
                        modelValue: $setup.isScheduleModalVisible,
                        "onUpdate:modelValue": _cache[36] || (_cache[36] = $event => (($setup.isScheduleModalVisible) = $event)),
                        title: $setup.scheduleModalTitle,
                        saveText: "OK",
                        onSave: $setup.onSaveSchedule
                    }, {
                        default: withCtx(() => [
                            createVNode($setup["ScheduleBuilder"], {
                                modelValue: $setup.scheduleContent,
                                "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => (($setup.scheduleContent) = $event)),
                                label: "Schedule",
                                help: "The schedule of when the experience is active.",
                                rules: "required"
                            }, null, 8, ["modelValue"]),
                            createVNode($setup["SectionHeader"], {
                                title: "Filters",
                                description: "Filters help to limit who will see experiences on the list those that are available."
                            }),
                            createVNode($setup["CampusPicker"], {
                                modelValue: $setup.scheduleCampuses,
                                "onUpdate:modelValue": _cache[33] || (_cache[33] = $event => (($setup.scheduleCampuses) = $event)),
                                label: "Campus",
                                help: "Which campuses the experience is for. Leave blank to show for all campuses.",
                                forceVisible: "",
                                multiple: ""
                            }, null, 8, ["modelValue"]),
                            createVNode($setup["DataViewPicker"], {
                                modelValue: $setup.scheduleDataView,
                                "onUpdate:modelValue": _cache[34] || (_cache[34] = $event => (($setup.scheduleDataView) = $event)),
                                label: "Data View",
                                help: "A data view that the individual must be in to see the environment. It is highly encouraged that this data view be persisted for performance."
                            }, null, 8, ["modelValue"]),
                            createVNode($setup["GroupPicker"], {
                                modelValue: $setup.scheduleGroup,
                                "onUpdate:modelValue": _cache[35] || (_cache[35] = $event => (($setup.scheduleGroup) = $event)),
                                label: "Group",
                                help: "A group that the individual must be in to see the environment."
                            }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                    }, 8, ["modelValue", "title"])
                ], 64));
            }
            const exportHelper$2 = _sfc_main$2;
            for (const [key, val] of [["render", render$2]]) {
                exportHelper$2[key] = val;
            }

            const _sfc_main$1 = defineComponent({
                name: 'viewPanel.partial',
                props: {
                    modelValue: {
                        type: Object,
                        required: false
                    },
                    options: {
                        type: Object,
                        required: true
                    }
                },
                setup(__props, { expose }) {
                    var _a, _b, _c, _d;
                    expose();
                    const props = __props;
                    const attributes = ref((_b = (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.attributes) !== null && _b !== void 0 ? _b : {});
                    const attributeValues = ref((_d = (_c = props.modelValue) === null || _c === void 0 ? void 0 : _c.attributeValues) !== null && _d !== void 0 ? _d : {});
                    const topValues = computed(() => {
                        const valueBuilder = new ValueDetailListItemBuilder();
                        if (!props.modelValue) {
                            return valueBuilder.build();
                        }
                        if (props.modelValue.description) {
                            valueBuilder.addTextValue("Description", props.modelValue.description);
                        }
                        return valueBuilder.build();
                    });
                    const leftSideValues = computed(() => {
                        var _a;
                        const valueBuilder = new ValueDetailListItemBuilder();
                        if (!props.modelValue) {
                            return valueBuilder.build();
                        }
                        valueBuilder.addHtmlValue("Schedules", getSchedulesHtml((_a = props.modelValue.schedules) !== null && _a !== void 0 ? _a : []));
                        return valueBuilder.build();
                    });
                    const rightSideValues = computed(() => {
                        const valueBuilder = new ValueDetailListItemBuilder();
                        if (!props.modelValue) {
                            return valueBuilder.build();
                        }
                        return valueBuilder.build();
                    });
                    function getSchedulesHtml(schedules) {
                        if (schedules.length === 0) {
                            return "";
                        }
                        return `<ul>${schedules.map(s => getScheduleHtml(s)).join("")}</ul>`;
                    }
                    function getScheduleHtml(schedule) {
                        var _a;
                        let html = ((_a = schedule.schedule) === null || _a === void 0 ? void 0 : _a.text) || "No Schedule";
                        if (schedule.campuses && schedule.campuses.length > 0) {
                            const campusNames = schedule.campuses.map(c => { var _a; return escapeHtml((_a = c.text) !== null && _a !== void 0 ? _a : ""); }).join(", ");
                            html += `<br /><span class="text-muted">${campusNames}</span>`;
                        }
                        if (schedule.dataView && schedule.dataView.text) {
                            html += `<br /><span class="text-muted">Data View: ${escapeHtml(schedule.dataView.text)}</span>`;
                        }
                        if (schedule.group && schedule.group.text) {
                            html += `<br /><span class="text-muted">Group: ${escapeHtml(schedule.group.text)}</span>`;
                        }
                        return `<li>${html}</li>`;
                    }
                    const __returned__ = { props, attributes, attributeValues, topValues, leftSideValues, rightSideValues, getSchedulesHtml, getScheduleHtml, AttributeValuesContainer, ValueDetailList };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "row" };
            const _hoisted_2 = { class: "col-md-6" };
            const _hoisted_3 = { class: "col-md-6" };
            function render$1(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("fieldset", null, [
                    createVNode($setup["ValueDetailList"], { modelValue: $setup.topValues }, null, 8, ["modelValue"]),
                    createElementVNode("div", _hoisted_1, [
                        createElementVNode("div", _hoisted_2, [
                            createVNode($setup["ValueDetailList"], { modelValue: $setup.leftSideValues }, null, 8, ["modelValue"])
                        ]),
                        createElementVNode("div", _hoisted_3, [
                            createVNode($setup["ValueDetailList"], { modelValue: $setup.rightSideValues }, null, 8, ["modelValue"])
                        ])
                    ]),
                    createVNode($setup["AttributeValuesContainer"], {
                        modelValue: $setup.attributeValues,
                        attributes: $setup.attributes,
                        numberOfColumns: 2
                    }, null, 8, ["modelValue", "attributes"])
                ]));
            }
            const exportHelper$1 = _sfc_main$1;
            for (const [key, val] of [["render", render$1]]) {
                exportHelper$1[key] = val;
            }

            const _sfc_main = defineComponent({
                name: 'interactiveExperienceDetail',
                setup(__props, { expose }) {
                    var _a, _b;
                    expose();
                    const config = useConfigurationValues();
                    const invokeBlockAction = useInvokeBlockAction();
                    const securityGrant = getSecurityGrant(config.securityGrantToken);
                    const blockError = ref("");
                    const errorMessage = ref("");
                    const interactiveExperienceViewBag = ref(config.entity);
                    const interactiveExperienceEditBag = ref({});
                    const interactiveExperienceActions = ref((_b = (_a = interactiveExperienceViewBag.value) === null || _a === void 0 ? void 0 : _a.actions) !== null && _b !== void 0 ? _b : []);
                    const entityTypeGuid = "3D90E693-476E-4DFC-B958-A28D1DD370BF";
                    const panelMode = ref(0);
                    const validProperties = [
                        "attributeValues",
                        "campusBehavior",
                        "defaultCampus",
                        "actionBackgroundColor",
                        "actionBackgroundImageBinaryFile",
                        "actionCustomCss",
                        "actionPrimaryButtonColor",
                        "actionPrimaryButtonTextColor",
                        "actionSecondaryButtonColor",
                        "actionSecondaryButtonTextColor",
                        "actionTextColor",
                        "audienceAccentColor",
                        "audienceBackgroundColor",
                        "audienceBackgroundImageBinaryFile",
                        "audienceCustomCss",
                        "audiencePrimaryColor",
                        "audienceSecondaryColor",
                        "audienceTextColor",
                        "description",
                        "isActive",
                        "name",
                        "noActionHeaderImageBinaryFile",
                        "noActionMessage",
                        "noActionTitle",
                        "photoBinaryFile",
                        "publicLabel",
                        "pushNotificationType",
                        "pushNotificationTitle",
                        "pushNotificationDetail",
                        "schedules",
                        "welcomeHeaderImageBinaryFile",
                        "welcomeMessage",
                        "welcomeTitle"
                    ];
                    const refreshAttributesDebounce = debounce(() => refreshDetailAttributes(interactiveExperienceEditBag, validProperties, invokeBlockAction), undefined, true);
                    const panelName = computed(() => {
                        var _a, _b;
                        return (_b = (_a = interactiveExperienceViewBag.value) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "";
                    });
                    const entityKey = computed(() => {
                        var _a, _b;
                        return (_b = (_a = interactiveExperienceViewBag.value) === null || _a === void 0 ? void 0 : _a.idKey) !== null && _b !== void 0 ? _b : "";
                    });
                    const blockLabels = computed(() => {
                        var _a;
                        const labels = [];
                        if (panelMode.value !== 0) {
                            return undefined;
                        }
                        if (((_a = interactiveExperienceViewBag.value) === null || _a === void 0 ? void 0 : _a.isActive) === true) {
                            labels.push({
                                iconCssClass: "fa fa-lightbulb",
                                title: "Active",
                                type: "success"
                            });
                        }
                        else {
                            labels.push({
                                iconCssClass: "far fa-lightbulb",
                                title: "Inactive",
                                type: "danger"
                            });
                        }
                        return labels;
                    });
                    const isEditable = computed(() => {
                        return config.isEditable === true;
                    });
                    const options = computed(() => {
                        var _a;
                        return (_a = config.options) !== null && _a !== void 0 ? _a : {};
                    });
                    const isActionListVisible = computed(() => {
                        return !blockError.value && panelMode.value === 0 && !!interactiveExperienceViewBag.value;
                    });
                    const actionTypes = computed(() => {
                        var _a, _b;
                        return (_b = (_a = config.options) === null || _a === void 0 ? void 0 : _a.actionTypes) !== null && _b !== void 0 ? _b : [];
                    });
                    const visualizerTypes = computed(() => {
                        var _a, _b;
                        return (_b = (_a = config.options) === null || _a === void 0 ? void 0 : _a.visualizerTypes) !== null && _b !== void 0 ? _b : [];
                    });
                    function onCancelEdit() {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!((_a = interactiveExperienceEditBag.value) === null || _a === void 0 ? void 0 : _a.idKey)) {
                                if ((_b = config.navigationUrls) === null || _b === void 0 ? void 0 : _b["ParentPage"]) {
                                    return config.navigationUrls["ParentPage"];
                                }
                                return false;
                            }
                            return true;
                        });
                    }
                    function onDelete() {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, function* () {
                            errorMessage.value = "";
                            const result = yield invokeBlockAction("Delete", {
                                key: (_a = interactiveExperienceViewBag.value) === null || _a === void 0 ? void 0 : _a.idKey
                            });
                            if (result.isSuccess && result.data) {
                                return result.data;
                            }
                            else {
                                errorMessage.value = (_b = result.errorMessage) !== null && _b !== void 0 ? _b : "Unknown error while trying to delete interactive experience.";
                                return false;
                            }
                        });
                    }
                    function onEdit() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            const result = yield invokeBlockAction("Edit", {
                                key: (_a = interactiveExperienceViewBag.value) === null || _a === void 0 ? void 0 : _a.idKey
                            });
                            if (result.isSuccess && result.data && result.data.entity) {
                                interactiveExperienceEditBag.value = result.data.entity;
                                return true;
                            }
                            else {
                                return false;
                            }
                        });
                    }
                    function onPropertyChanged(propertyName) {
                        if (!config.qualifiedAttributeProperties || !config.qualifiedAttributeProperties.some(n => n.toLowerCase() === propertyName.toLowerCase())) {
                            return;
                        }
                        refreshAttributesDebounce();
                    }
                    function onSave() {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, function* () {
                            errorMessage.value = "";
                            const data = {
                                entity: interactiveExperienceEditBag.value,
                                isEditable: true,
                                validProperties: validProperties
                            };
                            const result = yield invokeBlockAction("Save", {
                                box: data
                            });
                            if (result.isSuccess && result.data) {
                                if (result.statusCode === 200 && typeof result.data === "object") {
                                    interactiveExperienceViewBag.value = result.data;
                                    interactiveExperienceActions.value = (_a = interactiveExperienceViewBag.value.actions) !== null && _a !== void 0 ? _a : [];
                                    return true;
                                }
                                else if (result.statusCode === 201 && typeof result.data === "string") {
                                    return result.data;
                                }
                            }
                            errorMessage.value = (_b = result.errorMessage) !== null && _b !== void 0 ? _b : "Unknown error while trying to save interactive experience.";
                            return false;
                        });
                    }
                    provideSecurityGrant(securityGrant);
                    if (config.errorMessage) {
                        blockError.value = config.errorMessage;
                    }
                    else if (!config.entity) {
                        blockError.value = "The specified interactive experience could not be viewed.";
                    }
                    else if (!config.entity.idKey) {
                        interactiveExperienceEditBag.value = config.entity;
                        panelMode.value = 2;
                    }
                    const __returned__ = { config, invokeBlockAction, securityGrant, blockError, errorMessage, interactiveExperienceViewBag, interactiveExperienceEditBag, interactiveExperienceActions, entityTypeGuid, panelMode, validProperties, refreshAttributesDebounce, panelName, entityKey, blockLabels, isEditable, options, isActionListVisible, actionTypes, visualizerTypes, onCancelEdit, onDelete, onEdit, onPropertyChanged, onSave, Alert, DetailBlock, ActionsPanel: exportHelper$3, EditPanel: exportHelper$2, ViewPanel: exportHelper$1 };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($setup.blockError)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 0,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.blockError), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    ($setup.errorMessage)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 1,
                            alertType: "danger"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.errorMessage), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    (!$setup.blockError)
                        ? (openBlock(), createBlock($setup["DetailBlock"], {
                            key: 2,
                            mode: $setup.panelMode,
                            "onUpdate:mode": _cache[1] || (_cache[1] = $event => (($setup.panelMode) = $event)),
                            name: $setup.panelName,
                            labels: $setup.blockLabels,
                            entityKey: $setup.entityKey,
                            entityTypeGuid: $setup.entityTypeGuid,
                            entityTypeName: "InteractiveExperience",
                            isAuditHidden: false,
                            isBadgesVisible: true,
                            isDeleteVisible: $setup.isEditable,
                            isEditVisible: $setup.isEditable,
                            isFollowVisible: false,
                            isSecurityHidden: true,
                            onCancelEdit: $setup.onCancelEdit,
                            onDelete: $setup.onDelete,
                            onEdit: $setup.onEdit,
                            onSave: $setup.onSave
                        }, {
                            view: withCtx(() => [
                                createVNode($setup["ViewPanel"], {
                                    modelValue: $setup.interactiveExperienceViewBag,
                                    options: $setup.options
                                }, null, 8, ["modelValue", "options"])
                            ]),
                            edit: withCtx(() => [
                                createVNode($setup["EditPanel"], {
                                    modelValue: $setup.interactiveExperienceEditBag,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.interactiveExperienceEditBag) = $event)),
                                    options: $setup.options,
                                    onPropertyChanged: $setup.onPropertyChanged
                                }, null, 8, ["modelValue", "options"])
                            ]),
                            _: 1
                        }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"]))
                        : createCommentVNode("v-if", true),
                    ($setup.isActionListVisible)
                        ? (openBlock(), createBlock($setup["ActionsPanel"], {
                            key: 3,
                            modelValue: $setup.interactiveExperienceActions,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.interactiveExperienceActions) = $event)),
                            name: $setup.interactiveExperienceViewBag.name,
                            interactiveExperienceIdKey: $setup.interactiveExperienceViewBag.idKey,
                            actionTypes: $setup.actionTypes,
                            visualizerTypes: $setup.visualizerTypes
                        }, null, 8, ["modelValue", "name", "interactiveExperienceIdKey", "actionTypes", "visualizerTypes"]))
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
