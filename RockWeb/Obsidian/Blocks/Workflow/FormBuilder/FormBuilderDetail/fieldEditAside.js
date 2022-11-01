System.register(["vue", "../../../../Controls/fieldFilterEditor", "../../../../Controls/fieldTypeEditor", "../../../../Elements/alert", "../../../../Controls/modal", "../../../../Controls/panel", "../../../../Controls/rockForm", "../../../../Elements/loadingIndicator", "../../../../Elements/numberBox", "../../../../Elements/rockButton", "../../../../Elements/slider", "../../../../Elements/switch", "../../../../Elements/textBox", "../../../../Util/block", "../../../../Util/guid", "../../../../Util/linq", "./utils"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var vue_1, fieldFilterEditor_1, fieldTypeEditor_1, alert_1, modal_1, panel_1, rockForm_1, loadingIndicator_1, numberBox_1, rockButton_1, slider_1, switch_1, textBox_1, block_1, guid_1, linq_1, utils_1;
    var __moduleName = context_1 && context_1.id;
    function shallowStrictEqual(a, b) {
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        }
        for (const key of aKeys) {
            if (!bKeys.includes(key)) {
                return false;
            }
            if (a[key] !== b[key]) {
                return false;
            }
        }
        return true;
    }
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (fieldFilterEditor_1_1) {
                fieldFilterEditor_1 = fieldFilterEditor_1_1;
            },
            function (fieldTypeEditor_1_1) {
                fieldTypeEditor_1 = fieldTypeEditor_1_1;
            },
            function (alert_1_1) {
                alert_1 = alert_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (panel_1_1) {
                panel_1 = panel_1_1;
            },
            function (rockForm_1_1) {
                rockForm_1 = rockForm_1_1;
            },
            function (loadingIndicator_1_1) {
                loadingIndicator_1 = loadingIndicator_1_1;
            },
            function (numberBox_1_1) {
                numberBox_1 = numberBox_1_1;
            },
            function (rockButton_1_1) {
                rockButton_1 = rockButton_1_1;
            },
            function (slider_1_1) {
                slider_1 = slider_1_1;
            },
            function (switch_1_1) {
                switch_1 = switch_1_1;
            },
            function (textBox_1_1) {
                textBox_1 = textBox_1_1;
            },
            function (block_1_1) {
                block_1 = block_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (linq_1_1) {
                linq_1 = linq_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_1.defineComponent({
                name: "Workflow.FormBuilderDetail.FieldEditAside",
                components: {
                    Panel: panel_1.default,
                    FieldFilterEditor: fieldFilterEditor_1.default,
                    FieldTypeEditor: fieldTypeEditor_1.default,
                    InlineSwitch: switch_1.default,
                    LoadingIndicator: loadingIndicator_1.default,
                    Modal: modal_1.default,
                    NumberBox: numberBox_1.default,
                    RockButton: rockButton_1.default,
                    RockForm: rockForm_1.default,
                    Slider: slider_1.default,
                    TextBox: textBox_1.default,
                    Alert: alert_1.default
                },
                props: {
                    modelValue: {
                        type: Object,
                        required: true
                    },
                    formFields: {
                        type: Array,
                        required: true
                    }
                },
                emits: [
                    "update:modelValue",
                    "close",
                    "validationChanged"
                ],
                methods: {
                    isSafeToClose() {
                        this.formSubmit = true;
                        const result = this.validationErrors.length === 0;
                        if (!result && this.scrollableElement) {
                            this.scrollableElement.scroll({
                                behavior: "smooth",
                                top: 0
                            });
                        }
                        return result;
                    }
                },
                setup(props, { emit }) {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    const invokeBlockAction = block_1.useInvokeBlockAction();
                    const fieldTypes = (_a = utils_1.useFormSources().fieldTypes) !== null && _a !== void 0 ? _a : [];
                    let conditionalSourcesLoadAttempted = false;
                    const fieldName = vue_1.ref(props.modelValue.name);
                    const fieldDescription = vue_1.ref((_b = props.modelValue.description) !== null && _b !== void 0 ? _b : "");
                    const fieldKey = vue_1.ref(props.modelValue.key);
                    const fieldSize = vue_1.ref(props.modelValue.size);
                    const isFieldRequired = vue_1.ref((_c = props.modelValue.isRequired) !== null && _c !== void 0 ? _c : false);
                    const isFieldLabelHidden = vue_1.ref((_d = props.modelValue.isHideLabel) !== null && _d !== void 0 ? _d : false);
                    const isShowOnGrid = vue_1.ref((_e = props.modelValue.isShowOnGrid) !== null && _e !== void 0 ? _e : false);
                    const visibilityRule = vue_1.ref((_f = props.modelValue.visibilityRule) !== null && _f !== void 0 ? _f : null);
                    const fieldTypeValue = vue_1.ref({
                        fieldTypeGuid: props.modelValue.fieldTypeGuid,
                        configurationValues: (_g = props.modelValue.configurationValues) !== null && _g !== void 0 ? _g : {},
                        defaultValue: (_h = props.modelValue.defaultValue) !== null && _h !== void 0 ? _h : ""
                    });
                    const validationErrors = vue_1.ref([]);
                    const formSubmit = vue_1.ref(false);
                    const scrollableElement = vue_1.ref(null);
                    const conditionalModel = vue_1.ref(null);
                    const conditionalSources = vue_1.ref(null);
                    const conditionalPanelOpen = vue_1.ref(false);
                    const conditionalModalOpen = vue_1.ref(false);
                    const fieldTypeEditorKey = vue_1.computed(() => `fieldTypeEditor_${props.modelValue.guid}`);
                    const fieldType = vue_1.computed(() => {
                        var _a;
                        return (_a = new linq_1.List(fieldTypes).firstOrUndefined(f => guid_1.areEqual(f.guid, props.modelValue.fieldTypeGuid))) !== null && _a !== void 0 ? _a : null;
                    });
                    const asideIconSvg = vue_1.computed(() => { var _a, _b; return (_b = (_a = fieldType.value) === null || _a === void 0 ? void 0 : _a.svg) !== null && _b !== void 0 ? _b : ""; });
                    const fieldKeyRules = vue_1.computed(() => {
                        const rules = ["required"];
                        const keys = props.formFields
                            .filter(f => !guid_1.areEqual(f.guid, props.modelValue.guid))
                            .map(f => f.key);
                        rules.push((value) => {
                            const valueString = value;
                            if (keys.includes(valueString)) {
                                return "must be unique";
                            }
                            return "";
                        });
                        return rules;
                    });
                    const hasConditions = vue_1.computed(() => {
                        var _a;
                        return !!((_a = visibilityRule.value) === null || _a === void 0 ? void 0 : _a.rules) && visibilityRule.value.rules.length > 0;
                    });
                    const conditionalTitle = vue_1.computed(() => {
                        return visibilityRule.value
                            ? utils_1.getFilterGroupTitle(visibilityRule.value)
                            : "";
                    });
                    const conditionalRules = vue_1.computed(() => {
                        var _a, _b;
                        return (_b = (_a = visibilityRule.value) === null || _a === void 0 ? void 0 : _a.rules) !== null && _b !== void 0 ? _b : [];
                    });
                    const isConditionalsLoading = vue_1.computed(() => !conditionalSources.value);
                    const getRuleDescription = (rule) => {
                        var _a;
                        return utils_1.getFilterRuleDescription(rule, (_a = conditionalSources.value) !== null && _a !== void 0 ? _a : [], props.formFields);
                    };
                    const loadConditionalSources = () => __awaiter(this, void 0, void 0, function* () {
                        const fields = props.formFields.filter(f => !guid_1.areEqual(f.guid, props.modelValue.guid));
                        const getFilterSources = invokeBlockAction("GetFilterSources", {
                            formFields: fields
                        });
                        const result = yield Promise.race([getFilterSources, utils_1.timeoutAsync(2000)]);
                        if (!result || !result.isSuccess || !result.data) {
                            return;
                        }
                        conditionalSources.value = result.data;
                    });
                    const onBackClick = () => emit("close");
                    const onFieldTypeModelValueUpdate = (value) => {
                        emit("update:modelValue", Object.assign(Object.assign({}, props.modelValue), { configurationValues: value.configurationValues, defaultValue: value.defaultValue }));
                    };
                    const onValidationChanged = (errors) => {
                        validationErrors.value = errors;
                        emit("validationChanged", errors);
                    };
                    const onConditionalEditClick = () => __awaiter(this, void 0, void 0, function* () {
                        conditionalModel.value = visibilityRule.value;
                        conditionalModalOpen.value = true;
                    });
                    const onConditionalSave = () => {
                        visibilityRule.value = conditionalModel.value;
                        conditionalModalOpen.value = false;
                    };
                    vue_1.watch(fieldName, (newValue, oldValue) => {
                        const oldValueAsKey = oldValue.replace(/[^a-zA-Z0-9_\-.]/g, "");
                        if (oldValueAsKey === fieldKey.value) {
                            fieldKey.value = newValue.replace(/[^a-zA-Z0-9_\-.]/g, "");
                        }
                    });
                    vue_1.watch(conditionalPanelOpen, () => {
                        if (!conditionalPanelOpen.value || conditionalSources.value !== null || conditionalSourcesLoadAttempted) {
                            return;
                        }
                        conditionalSourcesLoadAttempted = true;
                        loadConditionalSources();
                    });
                    vue_1.watch([fieldName, fieldDescription, fieldKey, fieldSize, isFieldRequired, isFieldLabelHidden, isShowOnGrid, visibilityRule], () => {
                        const newValue = Object.assign(Object.assign({}, props.modelValue), { name: fieldName.value, description: fieldDescription.value, key: fieldKey.value, size: fieldSize.value, isRequired: isFieldRequired.value, isHideLabel: isFieldLabelHidden.value, isShowOnGrid: isShowOnGrid.value, visibilityRule: visibilityRule.value });
                        emit("update:modelValue", newValue);
                    });
                    vue_1.watch(() => props.modelValue, () => {
                        var _a, _b, _c, _d, _e, _f, _g, _h;
                        fieldName.value = props.modelValue.name;
                        fieldDescription.value = (_a = props.modelValue.description) !== null && _a !== void 0 ? _a : "";
                        fieldKey.value = props.modelValue.key;
                        fieldSize.value = props.modelValue.size;
                        isFieldRequired.value = (_b = props.modelValue.isRequired) !== null && _b !== void 0 ? _b : false;
                        isFieldLabelHidden.value = (_c = props.modelValue.isHideLabel) !== null && _c !== void 0 ? _c : false;
                        isShowOnGrid.value = (_d = props.modelValue.isShowOnGrid) !== null && _d !== void 0 ? _d : false;
                        visibilityRule.value = (_e = props.modelValue.visibilityRule) !== null && _e !== void 0 ? _e : null;
                        const isConfigChanged = fieldTypeValue.value.fieldTypeGuid !== props.modelValue.fieldTypeGuid
                            || !shallowStrictEqual(fieldTypeValue.value.configurationValues, (_f = props.modelValue.configurationValues) !== null && _f !== void 0 ? _f : {})
                            || fieldTypeValue.value.defaultValue !== props.modelValue.defaultValue;
                        if (isConfigChanged) {
                            fieldTypeValue.value = {
                                fieldTypeGuid: props.modelValue.fieldTypeGuid,
                                configurationValues: (_g = props.modelValue.configurationValues) !== null && _g !== void 0 ? _g : {},
                                defaultValue: (_h = props.modelValue.defaultValue) !== null && _h !== void 0 ? _h : ""
                            };
                        }
                    });
                    return {
                        asideIconSvg,
                        conditionalTitle,
                        conditionalModalOpen,
                        conditionalModel,
                        conditionalPanelOpen,
                        conditionalRules,
                        conditionalSources,
                        fieldDescription,
                        fieldKey,
                        fieldKeyRules,
                        fieldName,
                        fieldSize,
                        fieldTypeEditorKey,
                        fieldTypeValue,
                        formSubmit,
                        getRuleDescription,
                        hasConditions,
                        isConditionalsLoading,
                        isFieldLabelHidden,
                        isFieldRequired,
                        isShowOnGrid,
                        onBackClick,
                        onConditionalEditClick,
                        onConditionalSave,
                        onFieldTypeModelValueUpdate,
                        onValidationChanged,
                        scrollableElement,
                        validationErrors,
                        AlertType: alert_1.AlertType
                    };
                },
                template: `
    <div class="form-sidebar">
    <div class="sidebar-header">
        <div class="sidebar-back" @click="onBackClick">
            <i class="fa fa-chevron-left"></i>
        </div>

        <div class="title">
            <span v-if="asideIconSvg" class="inline-svg icon" v-html="asideIconSvg"></span>
            {{ fieldName }}
        </div>
    </div>

    <div ref="scrollableElement" class="sidebar-body">
        <RockForm v-model:submit="formSubmit" @validationChanged="onValidationChanged" class="sidebar-panels sidebar-field-edit field-edit-aside">
            <Panel :modelValue="true" title="Field Type" :hasCollapse="true">
                <TextBox v-model="fieldName"
                    rules="required"
                    label="Name" />
                <TextBox v-model="fieldDescription"
                    label="Description"
                    textMode="multiline" />
                <FieldTypeEditor :modelValue="fieldTypeValue" :key="fieldTypeEditorKey" @update:modelValue="onFieldTypeModelValueUpdate" isFieldTypeReadOnly />
            </Panel>

            <Panel title="Conditionals" v-model="conditionalPanelOpen" :hasCollapse="true">
                <LoadingIndicator v-if="isConditionalsLoading" />

                <div v-else-if="conditionalSources.length < 1">
                    <Alert :alertType="AlertType.Warning">No source fields available.</Alert>

                    <div class="d-flex justify-content-end">
                        <RockButton btnType="default" btnSize="sm" disabled><i class="fa fa-pencil"></i></RockButton>
                    </div>
                </div>

                <div v-else>
                    <div v-if="hasConditions">
                        <div v-html="conditionalTitle"></div>
                        <ul>
                            <li v-for="rule in conditionalRules" :key="rule.guid">{{ getRuleDescription(rule) }}</li>
                        </ul>
                    </div>

                    <div class="d-flex justify-content-end">
                        <RockButton btnType="default" btnSize="sm" @click="onConditionalEditClick"><i class="fa fa-pencil"></i></RockButton>
                    </div>
                </div>
            </Panel>

            <Panel title="Format" :hasCollapse="true">
                <Slider v-model="fieldSize" label="Column Span" :min="1" :max="12" isIntegerOnly showValueBar/>
                <InlineSwitch v-model="isFieldRequired" text="Required" />
                <InlineSwitch v-model="isFieldLabelHidden" text="Hide Label" />
            </Panel>

            <Panel title="Advanced" :hasCollapse="true">
                <TextBox v-model="fieldKey"
                    :rules="fieldKeyRules"
                    label="Field Key" />
                <InlineSwitch v-model="isShowOnGrid" text="Show on Results Grid" />
            </Panel>
        </RockForm>
    </div>

    <Modal v-model="conditionalModalOpen" title="Conditional Settings" saveText="Save" @save="onConditionalSave">
        <FieldFilterEditor v-model="conditionalModel" :title="fieldName" :sources="conditionalSources" />
    </Modal>
    </div>
`
            }));
        }
    };
});
//# sourceMappingURL=fieldEditAside.js.map