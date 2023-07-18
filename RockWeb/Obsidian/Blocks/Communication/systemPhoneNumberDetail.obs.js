System.register(['tslib', 'vue', '@Obsidian/Controls/alert.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/groupPicker', '@Obsidian/Controls/personPicker', '@Obsidian/Controls/textBox', '@Obsidian/Controls/workflowTypePicker', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, watch, createElementVNode, openBlock, createElementBlock, createVNode, computed, Fragment, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, Alert, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, DropDownList, GroupPicker, PersonPicker, TextBox, WorkflowTypePicker, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
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
            DropDownList = module["default"];
        }, function (module) {
            GroupPicker = module["default"];
        }, function (module) {
            PersonPicker = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            WorkflowTypePicker = module["default"];
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
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                    expose();
                    const props = __props;
                    const attributes = ref((_a = props.modelValue.attributes) !== null && _a !== void 0 ? _a : {});
                    const attributeValues = ref((_b = props.modelValue.attributeValues) !== null && _b !== void 0 ? _b : {});
                    const description = propertyRef((_c = props.modelValue.description) !== null && _c !== void 0 ? _c : "", "Description");
                    const isActive = propertyRef((_d = props.modelValue.isActive) !== null && _d !== void 0 ? _d : false, "IsActive");
                    const name = propertyRef((_e = props.modelValue.name) !== null && _e !== void 0 ? _e : "", "Name");
                    const phoneNumber = propertyRef((_f = props.modelValue.number) !== null && _f !== void 0 ? _f : "", "Number");
                    const assignedToPersonAlias = propertyRef((_g = props.modelValue.assignedToPersonAlias) !== null && _g !== void 0 ? _g : undefined, "AssignedToPersonAliasId");
                    const isSmsEnabled = propertyRef((_h = props.modelValue.isSmsEnabled) !== null && _h !== void 0 ? _h : false, "IsSmsEnabled");
                    const isSmsForwardingEnabled = propertyRef((_j = props.modelValue.isSmsForwardingEnabled) !== null && _j !== void 0 ? _j : false, "IsSmsForwardingEnabled");
                    const smsReceivedWorkflowType = propertyRef((_k = props.modelValue.smsReceivedWorkflowType) !== null && _k !== void 0 ? _k : undefined, "SmsReceivedWorkflowTypeId");
                    const smsNotificationGroup = propertyRef((_l = props.modelValue.smsNotificationGroup) !== null && _l !== void 0 ? _l : undefined, "SmsNotificationGroupId");
                    const mobileApplication = propertyRef((_o = (_m = props.modelValue.mobileApplicationSite) === null || _m === void 0 ? void 0 : _m.value) !== null && _o !== void 0 ? _o : "", "MobileApplicationSiteId");
                    const propRefs = [description, isActive, name, phoneNumber, assignedToPersonAlias, isSmsEnabled, isSmsForwardingEnabled, smsReceivedWorkflowType, smsNotificationGroup, mobileApplication];
                    watch(() => props.modelValue, () => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                        updateRefValue(attributes, (_a = props.modelValue.attributes) !== null && _a !== void 0 ? _a : {});
                        updateRefValue(attributeValues, (_b = props.modelValue.attributeValues) !== null && _b !== void 0 ? _b : {});
                        updateRefValue(description, (_c = props.modelValue.description) !== null && _c !== void 0 ? _c : "");
                        updateRefValue(isActive, (_d = props.modelValue.isActive) !== null && _d !== void 0 ? _d : false);
                        updateRefValue(name, (_e = props.modelValue.name) !== null && _e !== void 0 ? _e : "");
                        updateRefValue(phoneNumber, (_f = props.modelValue.number) !== null && _f !== void 0 ? _f : "");
                        updateRefValue(assignedToPersonAlias, (_g = props.modelValue.assignedToPersonAlias) !== null && _g !== void 0 ? _g : undefined);
                        updateRefValue(isSmsEnabled, (_h = props.modelValue.isSmsEnabled) !== null && _h !== void 0 ? _h : false);
                        updateRefValue(isSmsForwardingEnabled, (_j = props.modelValue.isSmsForwardingEnabled) !== null && _j !== void 0 ? _j : false);
                        updateRefValue(smsReceivedWorkflowType, (_k = props.modelValue.smsReceivedWorkflowType) !== null && _k !== void 0 ? _k : undefined);
                        updateRefValue(smsNotificationGroup, (_l = props.modelValue.smsNotificationGroup) !== null && _l !== void 0 ? _l : undefined);
                        updateRefValue(mobileApplication, (_o = (_m = props.modelValue.mobileApplicationSite) === null || _m === void 0 ? void 0 : _m.value) !== null && _o !== void 0 ? _o : "");
                    });
                    watch([attributeValues, ...propRefs], () => {
                        const newValue = Object.assign(Object.assign({}, props.modelValue), { attributeValues: attributeValues.value, description: description.value, isActive: isActive.value, name: name.value, number: phoneNumber.value, assignedToPersonAlias: assignedToPersonAlias.value, isSmsEnabled: isSmsEnabled.value, isSmsForwardingEnabled: isSmsForwardingEnabled.value, smsReceivedWorkflowType: smsReceivedWorkflowType.value, smsNotificationGroup: smsNotificationGroup.value, mobileApplicationSite: mobileApplication.value ? { value: mobileApplication.value } : null });
                        emit("update:modelValue", newValue);
                    });
                    watchPropertyChanges(propRefs, emit);
                    const __returned__ = { props, emit, attributes, attributeValues, description, isActive, name, phoneNumber, assignedToPersonAlias, isSmsEnabled, isSmsForwardingEnabled, smsReceivedWorkflowType, smsNotificationGroup, mobileApplication, propRefs, AttributeValuesContainer, CheckBox, DropDownList, GroupPicker, PersonPicker, TextBox, WorkflowTypePicker };
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
            const _hoisted_7 = { class: "row" };
            const _hoisted_8 = { class: "col-md-6" };
            const _hoisted_9 = { class: "col-md-6" };
            const _hoisted_10 = { class: "row" };
            const _hoisted_11 = { class: "col-md-6" };
            const _hoisted_12 = { class: "col-md-6" };
            const _hoisted_13 = { class: "row" };
            const _hoisted_14 = { class: "col-md-6" };
            const _hoisted_15 = createElementVNode("div", { class: "col-md-6" }, null, -1);
            function render$2(_ctx, _cache, $props, $setup, $data, $options) {
                var _a;
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
                        createElementVNode("div", _hoisted_5, [
                            createVNode($setup["TextBox"], {
                                modelValue: $setup.phoneNumber,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.phoneNumber) = $event)),
                                label: "Phone Number",
                                rules: "required",
                                help: "The phone number in the format of +16235553324."
                            }, null, 8, ["modelValue"])
                        ]),
                        createElementVNode("div", _hoisted_6, [
                            createVNode($setup["PersonPicker"], {
                                modelValue: $setup.assignedToPersonAlias,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.assignedToPersonAlias) = $event)),
                                label: "Assigned to Person",
                                help: "The person who should receive responses to the SMS number. This person must have a phone number with SMS enabled or no response will be sent."
                            }, null, 8, ["modelValue"])
                        ])
                    ]),
                    createElementVNode("div", _hoisted_7, [
                        createElementVNode("div", _hoisted_8, [
                            createVNode($setup["CheckBox"], {
                                modelValue: $setup.isSmsEnabled,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.isSmsEnabled) = $event)),
                                label: "SMS Enabled",
                                help: "Determines if SMS features should be enabled for this phone number."
                            }, null, 8, ["modelValue"])
                        ]),
                        createElementVNode("div", _hoisted_9, [
                            createVNode($setup["CheckBox"], {
                                modelValue: $setup.isSmsForwardingEnabled,
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($setup.isSmsForwardingEnabled) = $event)),
                                label: "SMS Forwarding",
                                help: "Determines if messages received on this number should be forwarded to the assigned person."
                            }, null, 8, ["modelValue"])
                        ])
                    ]),
                    createElementVNode("div", _hoisted_10, [
                        createElementVNode("div", _hoisted_11, [
                            createVNode($setup["WorkflowTypePicker"], {
                                modelValue: $setup.smsReceivedWorkflowType,
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($setup.smsReceivedWorkflowType) = $event)),
                                label: "SMS Received Workflow",
                                help: "The workflow type to launch when a response is received. Additionally if the workflow type has any of the following attribute keys defined, those attribute values will also be set: FromPhone, Message, SMSFromDefinedValue, FromPerson, ToPerson."
                            }, null, 8, ["modelValue"])
                        ]),
                        createElementVNode("div", _hoisted_12, [
                            createVNode($setup["GroupPicker"], {
                                modelValue: $setup.smsNotificationGroup,
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($setup.smsNotificationGroup) = $event)),
                                label: "SMS Notification Group",
                                help: "Active members of this group will recieve notifications when new SMS messages are received."
                            }, null, 8, ["modelValue"])
                        ])
                    ]),
                    createElementVNode("div", _hoisted_13, [
                        createElementVNode("div", _hoisted_14, [
                            createVNode($setup["DropDownList"], {
                                modelValue: $setup.mobileApplication,
                                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($setup.mobileApplication) = $event)),
                                label: "Mobile Application",
                                help: "Determines which mobile application to use when sending notifications.",
                                items: (_a = $props.options.mobileSites) !== null && _a !== void 0 ? _a : []
                            }, null, 8, ["modelValue", "items"])
                        ]),
                        _hoisted_15
                    ]),
                    createVNode($setup["AttributeValuesContainer"], {
                        modelValue: $setup.attributeValues,
                        "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($setup.attributeValues) = $event)),
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
                        var _a, _b, _c;
                        const valueBuilder = new ValueDetailListItemBuilder();
                        if (!props.modelValue) {
                            return valueBuilder.build();
                        }
                        valueBuilder.addTextValue("Number", (_a = props.modelValue.number) !== null && _a !== void 0 ? _a : "");
                        if (props.modelValue.isSmsEnabled) {
                            valueBuilder.addHtmlValue("SMS Enabled", `<i class="fa fa-check"></i>`);
                        }
                        if ((_b = props.modelValue.smsReceivedWorkflowType) === null || _b === void 0 ? void 0 : _b.text) {
                            valueBuilder.addTextValue("SMS Received Workflow", props.modelValue.smsReceivedWorkflowType.text);
                        }
                        if ((_c = props.modelValue.mobileApplicationSite) === null || _c === void 0 ? void 0 : _c.text) {
                            valueBuilder.addTextValue("Mobile Application", props.modelValue.mobileApplicationSite.text);
                        }
                        return valueBuilder.build();
                    });
                    const rightSideValues = computed(() => {
                        var _a, _b, _c;
                        const valueBuilder = new ValueDetailListItemBuilder();
                        if (!props.modelValue) {
                            return valueBuilder.build();
                        }
                        if ((_a = props.modelValue.assignedToPersonAlias) === null || _a === void 0 ? void 0 : _a.text) {
                            valueBuilder.addTextValue("Assigned To", props.modelValue.assignedToPersonAlias.text);
                        }
                        if (props.modelValue.isSmsForwardingEnabled) {
                            valueBuilder.addHtmlValue("SMS Forwarding", `<i class="fa fa-check"></i>`);
                        }
                        if ((_b = props.modelValue.smsNotificationGroup) === null || _b === void 0 ? void 0 : _b.text) {
                            valueBuilder.addTextValue("SMS Notification Group", (_c = props.modelValue) === null || _c === void 0 ? void 0 : _c.smsNotificationGroup.text);
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
                name: 'systemPhoneNumberDetail',
                setup(__props, { expose }) {
                    expose();
                    const config = useConfigurationValues();
                    const invokeBlockAction = useInvokeBlockAction();
                    const securityGrant = getSecurityGrant(config.securityGrantToken);
                    const blockError = ref("");
                    const errorMessage = ref("");
                    const systemPhoneNumberViewBag = ref(config.entity);
                    const systemPhoneNumberEditBag = ref({});
                    const entityTypeGuid = EntityType.SystemPhoneNumber;
                    const panelMode = ref(DetailPanelMode.View);
                    const validProperties = [
                        "attributeValues",
                        "assignedToPersonAlias",
                        "description",
                        "isActive",
                        "isSmsEnabled",
                        "isSmsForwardingEnabled",
                        "name",
                        "number",
                        "mobileApplicationSite",
                        "smsNotificationGroup",
                        "smsReceivedWorkflowType"
                    ];
                    const refreshAttributesDebounce = debounce(() => refreshDetailAttributes(systemPhoneNumberEditBag, validProperties, invokeBlockAction), undefined, true);
                    const panelName = computed(() => {
                        var _a, _b;
                        return (_b = (_a = systemPhoneNumberViewBag.value) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "";
                    });
                    const entityKey = computed(() => {
                        var _a, _b;
                        return (_b = (_a = systemPhoneNumberViewBag.value) === null || _a === void 0 ? void 0 : _a.idKey) !== null && _b !== void 0 ? _b : "";
                    });
                    const blockLabels = computed(() => {
                        var _a;
                        const labels = [];
                        if (panelMode.value !== DetailPanelMode.View) {
                            return undefined;
                        }
                        if (((_a = systemPhoneNumberViewBag.value) === null || _a === void 0 ? void 0 : _a.isActive) === true) {
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
                    function onCancelEdit() {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!((_a = systemPhoneNumberEditBag.value) === null || _a === void 0 ? void 0 : _a.idKey)) {
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
                                key: (_a = systemPhoneNumberViewBag.value) === null || _a === void 0 ? void 0 : _a.idKey
                            });
                            if (result.isSuccess && result.data) {
                                return result.data;
                            }
                            else {
                                errorMessage.value = (_b = result.errorMessage) !== null && _b !== void 0 ? _b : "Unknown error while trying to delete system phone number.";
                                return false;
                            }
                        });
                    }
                    function onEdit() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            const result = yield invokeBlockAction("Edit", {
                                key: (_a = systemPhoneNumberViewBag.value) === null || _a === void 0 ? void 0 : _a.idKey
                            });
                            if (result.isSuccess && result.data && result.data.entity) {
                                systemPhoneNumberEditBag.value = result.data.entity;
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
                                entity: systemPhoneNumberEditBag.value,
                                isEditable: true,
                                validProperties: validProperties
                            };
                            const result = yield invokeBlockAction("Save", {
                                box: data
                            });
                            if (result.isSuccess && result.data) {
                                if (result.statusCode === 200 && typeof result.data === "object") {
                                    systemPhoneNumberViewBag.value = result.data;
                                    return true;
                                }
                                else if (result.statusCode === 201 && typeof result.data === "string") {
                                    return result.data;
                                }
                            }
                            errorMessage.value = (_a = result.errorMessage) !== null && _a !== void 0 ? _a : "Unknown error while trying to save system phone number.";
                            return false;
                        });
                    }
                    provideSecurityGrant(securityGrant);
                    if (config.errorMessage) {
                        blockError.value = config.errorMessage;
                    }
                    else if (!config.entity) {
                        blockError.value = "The specified system phone number could not be viewed.";
                    }
                    else if (!config.entity.idKey) {
                        systemPhoneNumberEditBag.value = config.entity;
                        panelMode.value = DetailPanelMode.Add;
                    }
                    const __returned__ = { config, invokeBlockAction, securityGrant, blockError, errorMessage, systemPhoneNumberViewBag, systemPhoneNumberEditBag, entityTypeGuid, panelMode, validProperties, refreshAttributesDebounce, panelName, entityKey, blockLabels, isEditable, options, onCancelEdit, onDelete, onEdit, onPropertyChanged, onSave, Alert, DetailBlock, EditPanel: exportHelper$2, ViewPanel: exportHelper$1 };
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
                            entityTypeName: "SystemPhoneNumber",
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
                                    modelValue: $setup.systemPhoneNumberViewBag,
                                    options: $setup.options
                                }, null, 8, ["modelValue", "options"])
                            ]),
                            edit: withCtx(() => [
                                createVNode($setup["EditPanel"], {
                                    modelValue: $setup.systemPhoneNumberEditBag,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.systemPhoneNumberEditBag) = $event)),
                                    options: $setup.options,
                                    onPropertyChanged: $setup.onPropertyChanged
                                }, null, 8, ["modelValue", "options"])
                            ]),
                            _: 1
                        }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"]))
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
