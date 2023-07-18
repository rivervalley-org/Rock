System.register(['tslib', 'vue', '@Obsidian/Controls/alert.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/textBox', '@Obsidian/Controls/toggle', '@Obsidian/Controls/personPicker', '@Obsidian/Controls/categoryPicker', '@Obsidian/Controls/codeEditor', '@Obsidian/Controls/transitionVerticalCollapse', '@Obsidian/Controls/rockLabel', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, watch, createTextVNode, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createCommentVNode, createBlock, Fragment, Alert, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, Toggle, PersonPicker, CategoryPicker, CodeEditor, TransitionVerticalCollapse, RockLabel, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
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
            createElementVNode = module.createElementVNode;
            createVNode = module.createVNode;
            withCtx = module.withCtx;
            createCommentVNode = module.createCommentVNode;
            createBlock = module.createBlock;
            Fragment = module.Fragment;
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
            Toggle = module["default"];
        }, function (module) {
            PersonPicker = module["default"];
        }, function (module) {
            CategoryPicker = module["default"];
        }, function (module) {
            CodeEditor = module["default"];
        }, function (module) {
            TransitionVerticalCollapse = module["default"];
        }, function (module) {
            RockLabel = module["default"];
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
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                    expose();
                    const props = __props;
                    const attributes = ref((_a = props.modelValue.attributes) !== null && _a !== void 0 ? _a : {});
                    const attributeValues = ref((_b = props.modelValue.attributeValues) !== null && _b !== void 0 ? _b : {});
                    const description = propertyRef((_c = props.modelValue.description) !== null && _c !== void 0 ? _c : "", "Description");
                    const isActive = propertyRef((_d = props.modelValue.isActive) !== null && _d !== void 0 ? _d : false, "IsActive");
                    const content = propertyRef((_e = props.modelValue.content) !== null && _e !== void 0 ? _e : "", "Content");
                    const name = propertyRef((_f = props.modelValue.name) !== null && _f !== void 0 ? _f : "", "Name");
                    const isShared = ref(props.modelValue.ownerPersonAlias == null);
                    const isLava = ref((_h = (_g = props.modelValue.content) === null || _g === void 0 ? void 0 : _g.includes("{")) !== null && _h !== void 0 ? _h : false);
                    const isAuthorizedToEdit = ref(props.options.isAuthorizedToEdit);
                    const isPersonalAllowed = ref(props.options.isPersonalAllowed);
                    const ownerPersonAlias = propertyRef((_j = props.modelValue.ownerPersonAlias) !== null && _j !== void 0 ? _j : undefined, "OwnerPersonAlias");
                    const category = propertyRef((_k = props.modelValue.category) !== null && _k !== void 0 ? _k : null, "Category");
                    const entityTypeGuid = EntityType.Snippet;
                    console.log(ownerPersonAlias);
                    const propRefs = [description, isActive, content, name, ownerPersonAlias, category];
                    const ownerHelpText = computed(() => {
                        const helpText = "When an owner is provided only this person will be able to see the snippet.";
                        return isAuthorizedToEdit ? helpText : helpText + "To make the snippet public you will need edit access to the SMS snippet type.";
                    });
                    watch(() => props.modelValue, () => {
                        var _a, _b, _c, _d, _e, _f, _g, _h;
                        updateRefValue(attributes, (_a = props.modelValue.attributes) !== null && _a !== void 0 ? _a : {});
                        updateRefValue(attributeValues, (_b = props.modelValue.attributeValues) !== null && _b !== void 0 ? _b : {});
                        updateRefValue(description, (_c = props.modelValue.description) !== null && _c !== void 0 ? _c : "");
                        updateRefValue(isActive, (_d = props.modelValue.isActive) !== null && _d !== void 0 ? _d : false);
                        updateRefValue(content, (_e = props.modelValue.content) !== null && _e !== void 0 ? _e : "");
                        updateRefValue(name, (_f = props.modelValue.name) !== null && _f !== void 0 ? _f : "");
                        updateRefValue(ownerPersonAlias, (_g = props.modelValue.ownerPersonAlias) !== null && _g !== void 0 ? _g : undefined);
                        updateRefValue(category, (_h = props.modelValue.category) !== null && _h !== void 0 ? _h : null);
                    });
                    watch([attributeValues, ...propRefs], () => {
                        const newValue = Object.assign(Object.assign({}, props.modelValue), { attributeValues: attributeValues.value, description: description.value, isActive: isActive.value, content: content.value, name: name.value, ownerPersonAlias: ownerPersonAlias.value, category: category.value });
                        emit("update:modelValue", newValue);
                    });
                    watchPropertyChanges(propRefs, emit);
                    const __returned__ = { props, emit, attributes, attributeValues, description, isActive, content, name, isShared, isLava, isAuthorizedToEdit, isPersonalAllowed, ownerPersonAlias, category, entityTypeGuid, propRefs, ownerHelpText, AttributeValuesContainer, CheckBox, TextBox, Toggle, PersonPicker, CategoryPicker, CodeEditor, TransitionVerticalCollapse, RockLabel };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$1 = { class: "row" };
            const _hoisted_2$1 = { class: "col-md-6" };
            const _hoisted_3$1 = { class: "col-md-6" };
            const _hoisted_4 = { class: "row" };
            const _hoisted_5 = {
                key: 0,
                class: "col-md-6"
            };
            const _hoisted_6 = {
                key: 0,
                class: "col-md-6 mt-4"
            };
            const _hoisted_7 = createTextVNode(" Shared ");
            const _hoisted_8 = createTextVNode(" Personal ");
            const _hoisted_9 = { class: "col-md-6" };
            const _hoisted_10 = { class: "col-md-3" };
            const _hoisted_11 = { class: "pull-right" };
            const _hoisted_12 = createTextVNode(" Lava ");
            const _hoisted_13 = createTextVNode(" Text ");
            const _hoisted_14 = { class: "mt-5" };
            const _hoisted_15 = createTextVNode("Snippet");
            const _hoisted_16 = { key: 0 };
            const _hoisted_17 = { key: 1 };
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
                        ($setup.isPersonalAllowed)
                            ? (openBlock(), createElementBlock("div", _hoisted_5, [
                                ($setup.isAuthorizedToEdit)
                                    ? (openBlock(), createElementBlock("div", _hoisted_6, [
                                        createVNode($setup["Toggle"], {
                                            modelValue: $setup.isShared,
                                            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.isShared) = $event)),
                                            trueText: "On",
                                            falseText: "Off"
                                        }, {
                                            on: withCtx(() => [
                                                _hoisted_7
                                            ]),
                                            off: withCtx(() => [
                                                _hoisted_8
                                            ]),
                                            _: 1
                                        }, 8, ["modelValue"])
                                    ]))
                                    : createCommentVNode("v-if", true),
                                createElementVNode("div", _hoisted_9, [
                                    (!$setup.isShared)
                                        ? (openBlock(), createBlock($setup["PersonPicker"], {
                                            key: 0,
                                            modelValue: $setup.ownerPersonAlias,
                                            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.ownerPersonAlias) = $event)),
                                            label: "Owner",
                                            help: $setup.ownerHelpText,
                                            rules: "required"
                                        }, null, 8, ["modelValue", "help"]))
                                        : createCommentVNode("v-if", true)
                                ])
                            ]))
                            : createCommentVNode("v-if", true),
                        createElementVNode("div", _hoisted_10, [
                            createVNode($setup["CategoryPicker"], {
                                label: "Category",
                                modelValue: $setup.category,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.category) = $event)),
                                multiple: false,
                                entityTypeGuid: $setup.entityTypeGuid
                            }, null, 8, ["modelValue", "entityTypeGuid"])
                        ])
                    ]),
                    createElementVNode("div", _hoisted_11, [
                        createVNode($setup["Toggle"], {
                            label: "",
                            modelValue: $setup.isLava,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($setup.isLava) = $event)),
                            trueText: "On",
                            btnSize: "xs"
                        }, {
                            on: withCtx(() => [
                                _hoisted_12
                            ]),
                            off: withCtx(() => [
                                _hoisted_13
                            ]),
                            _: 1
                        }, 8, ["modelValue"])
                    ]),
                    createElementVNode("div", _hoisted_14, [
                        createVNode($setup["RockLabel"], null, {
                            default: withCtx(() => [
                                _hoisted_15
                            ]),
                            _: 1
                        }),
                        createVNode($setup["TransitionVerticalCollapse"], null, {
                            default: withCtx(() => [
                                (!$setup.isLava)
                                    ? (openBlock(), createElementBlock("div", _hoisted_16, [
                                        createVNode($setup["TextBox"], {
                                            modelValue: $setup.content,
                                            "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($setup.content) = $event)),
                                            textMode: "multiline",
                                            rows: 10
                                        }, null, 8, ["modelValue"])
                                    ]))
                                    : (openBlock(), createElementBlock("div", _hoisted_17, [
                                        createVNode($setup["CodeEditor"], {
                                            modelValue: $setup.content,
                                            "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($setup.content) = $event)),
                                            theme: "rock",
                                            mode: "text",
                                            editorHeight: 200
                                        }, null, 8, ["modelValue"])
                                    ]))
                            ]),
                            _: 1
                        })
                    ]),
                    createVNode($setup["AttributeValuesContainer"], {
                        modelValue: $setup.attributeValues,
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($setup.attributeValues) = $event)),
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
                name: 'snippetDetail',
                setup(__props, { expose }) {
                    expose();
                    const config = useConfigurationValues();
                    const invokeBlockAction = useInvokeBlockAction();
                    const securityGrant = getSecurityGrant(config.securityGrantToken);
                    const blockError = ref("");
                    const errorMessage = ref("");
                    const snippetViewBag = ref(config.entity);
                    const snippetEditBag = ref({});
                    const entityTypeGuid = EntityType.Snippet;
                    const panelMode = ref(DetailPanelMode.View);
                    const validProperties = [
                        "attributeValues",
                        "category",
                        "description",
                        "isActive",
                        "content",
                        "name",
                        "order",
                        "ownerPersonAlias"
                    ];
                    const refreshAttributesDebounce = debounce(() => refreshDetailAttributes(snippetEditBag, validProperties, invokeBlockAction), undefined, true);
                    const panelName = computed(() => {
                        var _a, _b;
                        return (_b = (_a = snippetViewBag.value) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "";
                    });
                    const entityTypeName = computed(() => {
                        var _a, _b;
                        return (_b = (_a = snippetViewBag.value) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "New Snippet";
                    });
                    const entityKey = computed(() => {
                        var _a, _b;
                        return (_b = (_a = snippetViewBag.value) === null || _a === void 0 ? void 0 : _a.idKey) !== null && _b !== void 0 ? _b : "";
                    });
                    const blockLabels = computed(() => {
                        var _a;
                        const labels = [];
                        if (panelMode.value !== DetailPanelMode.View) {
                            return undefined;
                        }
                        if (((_a = snippetViewBag.value) === null || _a === void 0 ? void 0 : _a.isActive) === true) {
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
                        return (_a = config.options) !== null && _a !== void 0 ? _a : { isAuthorizedToEdit: false, isPersonalAllowed: false };
                    });
                    function onCancelEdit() {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!((_a = snippetEditBag.value) === null || _a === void 0 ? void 0 : _a.idKey)) {
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
                                key: (_a = snippetViewBag.value) === null || _a === void 0 ? void 0 : _a.idKey
                            });
                            if (result.isSuccess && result.data) {
                                return result.data;
                            }
                            else {
                                errorMessage.value = (_b = result.errorMessage) !== null && _b !== void 0 ? _b : "Unknown error while trying to delete snippet.";
                                return false;
                            }
                        });
                    }
                    function onEdit() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            const result = yield invokeBlockAction("Edit", {
                                key: (_a = snippetViewBag.value) === null || _a === void 0 ? void 0 : _a.idKey
                            });
                            if (result.isSuccess && result.data && result.data.entity) {
                                snippetEditBag.value = result.data.entity;
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
                                entity: snippetEditBag.value,
                                isEditable: true,
                                validProperties: validProperties
                            };
                            const result = yield invokeBlockAction("Save", {
                                box: data
                            });
                            if (result.isSuccess && result.data) {
                                if (result.statusCode === 200 && typeof result.data === "object") {
                                    snippetViewBag.value = result.data;
                                    return true;
                                }
                                else if (result.statusCode === 201 && typeof result.data === "string") {
                                    return result.data;
                                }
                            }
                            errorMessage.value = (_a = result.errorMessage) !== null && _a !== void 0 ? _a : "Unknown error while trying to save snippet.";
                            return false;
                        });
                    }
                    provideSecurityGrant(securityGrant);
                    if (config.errorMessage) {
                        blockError.value = config.errorMessage;
                    }
                    else if (!config.entity) {
                        blockError.value = "The specified snippet could not be viewed.";
                    }
                    else if (!config.entity.idKey) {
                        snippetEditBag.value = config.entity;
                        panelMode.value = DetailPanelMode.Add;
                    }
                    const __returned__ = { config, invokeBlockAction, securityGrant, blockError, errorMessage, snippetViewBag, snippetEditBag, entityTypeGuid, panelMode, validProperties, refreshAttributesDebounce, panelName, entityTypeName, entityKey, blockLabels, isEditable, options, onCancelEdit, onDelete, onEdit, onPropertyChanged, onSave, Alert, DetailBlock, EditPanel: exportHelper$2, ViewPanel: exportHelper$1 };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($setup.blockError)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 0,
                            alertType: "warning",
                            innerHTML: $setup.blockError
                        }, null, 8, ["innerHTML"]))
                        : createCommentVNode("v-if", true),
                    ($setup.errorMessage)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 1,
                            alertType: "danger",
                            innerHTML: $setup.errorMessage
                        }, null, 8, ["innerHTML"]))
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
                                    modelValue: $setup.snippetViewBag,
                                    options: $setup.options
                                }, null, 8, ["modelValue", "options"])
                            ]),
                            edit: withCtx(() => [
                                createVNode($setup["EditPanel"], {
                                    modelValue: $setup.snippetEditBag,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.snippetEditBag) = $event)),
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
