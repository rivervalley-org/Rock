System.register(['tslib', 'vue', '@Obsidian/Controls/alert.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/textBox', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, watch, openBlock, createElementBlock, createElementVNode, createVNode, computed, Fragment, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, Alert, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            createElementVNode = module.createElementVNode;
            createVNode = module.createVNode;
            computed = module.computed;
            Fragment = module.Fragment;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createTextVNode = module.createTextVNode;
            toDisplayString = module.toDisplayString;
            createCommentVNode = module.createCommentVNode;
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            EntityType = module.EntityType;
        }, function (module) {
            DetailBlock = module["default"];
        }, function (module) {
            DetailPanelMode = module.DetailPanelMode;
        }, function (module) {
            AttributeValuesContainer = module["default"];
        }, function (module) {
            CheckBox = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            watchPropertyChanges = module.watchPropertyChanges;
            useConfigurationValues = module.useConfigurationValues;
            useInvokeBlockAction = module.useInvokeBlockAction;
            getSecurityGrant = module.getSecurityGrant;
            refreshDetailAttributes = module.refreshDetailAttributes;
            provideSecurityGrant = module.provideSecurityGrant;
        }, function (module) {
            propertyRef = module.propertyRef;
            updateRefValue = module.updateRefValue;
        }, function (module) {
            ValueDetailList = module["default"];
        }, function (module) {
            ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
        }, function (module) {
            debounce = module.debounce;
        }],
        execute: (function () {

            exports('render', render);

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
                    var _a, _b, _c, _d, _e;
                    expose();
                    const props = __props;
                    const attributes = ref((_a = props.modelValue.attributes) !== null && _a !== void 0 ? _a : {});
                    const attributeValues = ref((_b = props.modelValue.attributeValues) !== null && _b !== void 0 ? _b : {});
                    const description = propertyRef((_c = props.modelValue.description) !== null && _c !== void 0 ? _c : "", "Description");
                    const name = propertyRef((_d = props.modelValue.name) !== null && _d !== void 0 ? _d : "", "Name");
                    const helpText = propertyRef((_e = props.modelValue.helpText) !== null && _e !== void 0 ? _e : "", "HelpText");
                    const isPersonalAllowed = propertyRef(props.modelValue.isPersonalAllowed, "IsPersonalAllowed");
                    const isSharedAllowed = propertyRef(props.modelValue.isSharedAllowed, "IsSharedAllowed");
                    const propRefs = [description, name, helpText, isPersonalAllowed, isSharedAllowed];
                    watch(() => props.modelValue, () => {
                        var _a, _b, _c, _d, _e;
                        updateRefValue(attributes, (_a = props.modelValue.attributes) !== null && _a !== void 0 ? _a : {});
                        updateRefValue(attributeValues, (_b = props.modelValue.attributeValues) !== null && _b !== void 0 ? _b : {});
                        updateRefValue(description, (_c = props.modelValue.description) !== null && _c !== void 0 ? _c : "");
                        updateRefValue(name, (_d = props.modelValue.name) !== null && _d !== void 0 ? _d : "");
                        updateRefValue(helpText, (_e = props.modelValue.helpText) !== null && _e !== void 0 ? _e : "");
                        updateRefValue(isPersonalAllowed, props.modelValue.isPersonalAllowed);
                        updateRefValue(isSharedAllowed, props.modelValue.isSharedAllowed);
                    });
                    watch([attributeValues, ...propRefs], () => {
                        const newValue = Object.assign(Object.assign({}, props.modelValue), { attributeValues: attributeValues.value, description: description.value, name: name.value, helpText: helpText.value, isPersonalAllowed: isPersonalAllowed.value, isSharedAllowed: isSharedAllowed.value });
                        emit("update:modelValue", newValue);
                    });
                    watchPropertyChanges(propRefs, emit);
                    const __returned__ = { props, emit, attributes, attributeValues, description, name, helpText, isPersonalAllowed, isSharedAllowed, propRefs, AttributeValuesContainer, CheckBox, TextBox };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$1 = { class: "row" };
            const _hoisted_2$1 = { class: "col-md-6" };
            const _hoisted_3$1 = { class: "col-md-3" };
            const _hoisted_4 = { class: "col-md-3" };
            function render$2(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("fieldset", null, [
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
                                modelValue: $setup.isPersonalAllowed,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.isPersonalAllowed) = $event)),
                                label: "Is Personal Allowed"
                            }, null, 8, ["modelValue"])
                        ]),
                        createElementVNode("div", _hoisted_4, [
                            createVNode($setup["CheckBox"], {
                                modelValue: $setup.isSharedAllowed,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.isSharedAllowed) = $event)),
                                label: "Is Shared Allowed"
                            }, null, 8, ["modelValue"])
                        ])
                    ]),
                    createVNode($setup["TextBox"], {
                        modelValue: $setup.description,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.description) = $event)),
                        label: "Description",
                        textMode: "multiline"
                    }, null, 8, ["modelValue"]),
                    createVNode($setup["TextBox"], {
                        modelValue: $setup.helpText,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.helpText) = $event)),
                        label: "Help Text",
                        textMode: "multiline"
                    }, null, 8, ["modelValue"]),
                    createVNode($setup["AttributeValuesContainer"], {
                        modelValue: $setup.attributeValues,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.attributeValues) = $event)),
                        attributes: $setup.attributes,
                        isEditMode: "",
                        numberOfColumns: 2
                    }, null, 8, ["modelValue", "attributes"])
                ]));
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
                        const valueBuilder = new ValueDetailListItemBuilder();
                        if (!props.modelValue) {
                            return valueBuilder.build();
                        }
                        return valueBuilder.build();
                    });
                    const rightSideValues = computed(() => {
                        const valueBuilder = new ValueDetailListItemBuilder();
                        if (!props.modelValue) {
                            return valueBuilder.build();
                        }
                        return valueBuilder.build();
                    });
                    const __returned__ = { props, attributes, attributeValues, topValues, leftSideValues, rightSideValues, AttributeValuesContainer, ValueDetailList };
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
                name: 'snippetTypeDetail',
                setup(__props, { expose }) {
                    expose();
                    const config = useConfigurationValues();
                    const invokeBlockAction = useInvokeBlockAction();
                    const securityGrant = getSecurityGrant(config.securityGrantToken);
                    const blockError = ref("");
                    const errorMessage = ref("");
                    const snippetTypeViewBag = ref(config.entity);
                    const snippetTypeEditBag = ref({});
                    const entityTypeGuid = EntityType.SnippetType;
                    const panelMode = ref(DetailPanelMode.View);
                    const validProperties = [
                        "attributeValues",
                        "description",
                        "helpText",
                        "isPersonalAllowed",
                        "isSharedAllowed",
                        "name"
                    ];
                    const refreshAttributesDebounce = debounce(() => refreshDetailAttributes(snippetTypeEditBag, validProperties, invokeBlockAction), undefined, true);
                    const panelName = computed(() => {
                        var _a, _b;
                        return (_b = (_a = snippetTypeViewBag.value) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "";
                    });
                    const entityTypeName = computed(() => {
                        var _a, _b;
                        return (_b = (_a = snippetTypeViewBag.value) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "New Snippet Type";
                    });
                    const entityKey = computed(() => {
                        var _a, _b;
                        return (_b = (_a = snippetTypeViewBag.value) === null || _a === void 0 ? void 0 : _a.idKey) !== null && _b !== void 0 ? _b : "";
                    });
                    const blockLabels = computed(() => {
                        const labels = [];
                        if (panelMode.value !== DetailPanelMode.View) {
                            return undefined;
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
                    function onCancelEdit() {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!((_a = snippetTypeEditBag.value) === null || _a === void 0 ? void 0 : _a.idKey)) {
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
                                key: (_a = snippetTypeViewBag.value) === null || _a === void 0 ? void 0 : _a.idKey
                            });
                            if (result.isSuccess && result.data) {
                                return result.data;
                            }
                            else {
                                errorMessage.value = (_b = result.errorMessage) !== null && _b !== void 0 ? _b : "Unknown error while trying to delete snippet type.";
                                return false;
                            }
                        });
                    }
                    function onEdit() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            const result = yield invokeBlockAction("Edit", {
                                key: (_a = snippetTypeViewBag.value) === null || _a === void 0 ? void 0 : _a.idKey
                            });
                            if (result.isSuccess && result.data && result.data.entity) {
                                snippetTypeEditBag.value = result.data.entity;
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
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            errorMessage.value = "";
                            const data = {
                                entity: snippetTypeEditBag.value,
                                isEditable: true,
                                validProperties: validProperties
                            };
                            const result = yield invokeBlockAction("Save", {
                                box: data
                            });
                            if (result.isSuccess && result.data) {
                                if (result.statusCode === 200 && typeof result.data === "object") {
                                    snippetTypeViewBag.value = result.data;
                                    return true;
                                }
                                else if (result.statusCode === 201 && typeof result.data === "string") {
                                    return result.data;
                                }
                            }
                            errorMessage.value = (_a = result.errorMessage) !== null && _a !== void 0 ? _a : "Unknown error while trying to save snippet type.";
                            return false;
                        });
                    }
                    provideSecurityGrant(securityGrant);
                    if (config.errorMessage) {
                        blockError.value = config.errorMessage;
                    }
                    else if (!config.entity) {
                        blockError.value = "The specified snippet type could not be viewed.";
                    }
                    else if (!config.entity.idKey) {
                        snippetTypeEditBag.value = config.entity;
                        panelMode.value = DetailPanelMode.Add;
                    }
                    const __returned__ = { config, invokeBlockAction, securityGrant, blockError, errorMessage, snippetTypeViewBag, snippetTypeEditBag, entityTypeGuid, panelMode, validProperties, refreshAttributesDebounce, panelName, entityTypeName, entityKey, blockLabels, isEditable, options, onCancelEdit, onDelete, onEdit, onPropertyChanged, onSave, Alert, DetailBlock, EditPanel: exportHelper$2, ViewPanel: exportHelper$1 };
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
                            entityTypeName: $setup.entityTypeName,
                            isAuditHidden: false,
                            isBadgesVisible: true,
                            isDeleteVisible: $setup.isEditable,
                            isEditVisible: $setup.isEditable,
                            isFollowVisible: false,
                            isSecurityHidden: false,
                            onCancelEdit: $setup.onCancelEdit,
                            onDelete: $setup.onDelete,
                            onEdit: $setup.onEdit,
                            onSave: $setup.onSave
                        }, {
                            view: withCtx(() => [
                                createVNode($setup["ViewPanel"], {
                                    modelValue: $setup.snippetTypeViewBag,
                                    options: $setup.options
                                }, null, 8, ["modelValue", "options"])
                            ]),
                            edit: withCtx(() => [
                                createVNode($setup["EditPanel"], {
                                    modelValue: $setup.snippetTypeEditBag,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.snippetTypeEditBag) = $event)),
                                    options: $setup.options,
                                    onPropertyChanged: $setup.onPropertyChanged
                                }, null, 8, ["modelValue", "options"])
                            ]),
                            _: 1
                        }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "entityTypeName", "isDeleteVisible", "isEditVisible"]))
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
