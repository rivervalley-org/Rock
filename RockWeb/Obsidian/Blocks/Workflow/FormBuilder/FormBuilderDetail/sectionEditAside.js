System.register(["vue", "./configurableZone", "../../../../Controls/rockField", "../../../../Elements/dropDownList", "../../../../Controls/fieldFilterEditor", "../../../../Elements/loadingIndicator", "../../../../Controls/modal", "../../../../Controls/panel", "../../../../Elements/rockButton", "../../../../Controls/rockForm", "../../../../Elements/switch", "../../../../Elements/textBox", "./utils", "../../../../Util/block"], function (exports_1, context_1) {
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
    var vue_1, configurableZone_1, rockField_1, dropDownList_1, fieldFilterEditor_1, loadingIndicator_1, modal_1, panel_1, rockButton_1, rockForm_1, switch_1, textBox_1, utils_1, block_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (configurableZone_1_1) {
                configurableZone_1 = configurableZone_1_1;
            },
            function (rockField_1_1) {
                rockField_1 = rockField_1_1;
            },
            function (dropDownList_1_1) {
                dropDownList_1 = dropDownList_1_1;
            },
            function (fieldFilterEditor_1_1) {
                fieldFilterEditor_1 = fieldFilterEditor_1_1;
            },
            function (loadingIndicator_1_1) {
                loadingIndicator_1 = loadingIndicator_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (panel_1_1) {
                panel_1 = panel_1_1;
            },
            function (rockButton_1_1) {
                rockButton_1 = rockButton_1_1;
            },
            function (rockForm_1_1) {
                rockForm_1 = rockForm_1_1;
            },
            function (switch_1_1) {
                switch_1 = switch_1_1;
            },
            function (textBox_1_1) {
                textBox_1 = textBox_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (block_1_1) {
                block_1 = block_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_1.defineComponent({
                name: "Workflow.FormBuilderDetail.SectionEditAside",
                components: {
                    ConfigurableZone: configurableZone_1.default,
                    DropDownList: dropDownList_1.default,
                    FieldFilterEditor: fieldFilterEditor_1.default,
                    LoadingIndicator: loadingIndicator_1.default,
                    Modal: modal_1.default,
                    Panel: panel_1.default,
                    RockButton: rockButton_1.default,
                    RockField: rockField_1.default,
                    RockForm: rockForm_1.default,
                    Switch: switch_1.default,
                    TextBox: textBox_1.default
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
                    "close",
                    "update:modelValue",
                    "validationChanged"
                ],
                methods: {
                    isSafeToClose() {
                        this.formSubmit = true;
                        return this.validationErrors.length === 0;
                    }
                },
                setup(props, { emit }) {
                    var _a, _b, _c;
                    const invokeBlockAction = block_1.useInvokeBlockAction();
                    let conditionalSourcesLoadAttempted = false;
                    const title = vue_1.ref(props.modelValue.title);
                    const description = vue_1.ref(props.modelValue.description);
                    const showHeadingSeparator = vue_1.ref(props.modelValue.showHeadingSeparator);
                    const sectionType = vue_1.ref((_a = props.modelValue.type) !== null && _a !== void 0 ? _a : "");
                    const visibilityRule = vue_1.ref((_b = props.modelValue.visibilityRule) !== null && _b !== void 0 ? _b : null);
                    const validationErrors = vue_1.ref([]);
                    const formSubmit = vue_1.ref(false);
                    let autoSyncModelValue = true;
                    const sectionTypeOptions = (_c = utils_1.useFormSources().sectionTypeOptions) !== null && _c !== void 0 ? _c : [];
                    const conditionalModel = vue_1.ref(null);
                    const conditionalSources = vue_1.ref(null);
                    const conditionalPanelOpen = vue_1.ref(false);
                    const conditionalModalOpen = vue_1.ref(false);
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
                        const getFilterSources = invokeBlockAction("GetFilterSources", {
                            formFields: props.formFields
                        });
                        const result = yield Promise.race([getFilterSources, utils_1.timeoutAsync(2000)]);
                        if (!result || !result.isSuccess || !result.data) {
                            return;
                        }
                        conditionalSources.value = result.data;
                    });
                    const onValidationChanged = (errors) => {
                        validationErrors.value = errors;
                        emit("validationChanged", errors);
                    };
                    const onBackClick = () => emit("close");
                    const onConditionalEditClick = () => __awaiter(this, void 0, void 0, function* () {
                        conditionalModel.value = visibilityRule.value;
                        conditionalModalOpen.value = true;
                    });
                    const onConditionalSave = () => {
                        visibilityRule.value = conditionalModel.value;
                        conditionalModalOpen.value = false;
                    };
                    vue_1.watch(conditionalPanelOpen, () => {
                        if (!conditionalPanelOpen.value || conditionalSources.value !== null || conditionalSourcesLoadAttempted) {
                            return;
                        }
                        conditionalSourcesLoadAttempted = true;
                        loadConditionalSources();
                    });
                    vue_1.watch(() => props.modelValue, () => {
                        var _a, _b;
                        autoSyncModelValue = false;
                        title.value = props.modelValue.title;
                        description.value = props.modelValue.description;
                        showHeadingSeparator.value = props.modelValue.showHeadingSeparator;
                        sectionType.value = (_a = props.modelValue.type) !== null && _a !== void 0 ? _a : "";
                        visibilityRule.value = (_b = props.modelValue.visibilityRule) !== null && _b !== void 0 ? _b : null;
                        autoSyncModelValue = true;
                    });
                    vue_1.watch([title, description, showHeadingSeparator, sectionType, visibilityRule], () => {
                        if (!autoSyncModelValue) {
                            return;
                        }
                        const value = Object.assign(Object.assign({}, props.modelValue), { title: title.value, description: description.value, showHeadingSeparator: showHeadingSeparator.value, type: sectionType.value === "" ? null : sectionType.value, visibilityRule: visibilityRule.value });
                        emit("update:modelValue", value);
                    });
                    return {
                        conditionalTitle,
                        conditionalModalOpen,
                        conditionalModel,
                        conditionalPanelOpen,
                        conditionalRules,
                        conditionalSources,
                        description,
                        formSubmit,
                        getRuleDescription,
                        hasConditions,
                        isConditionalsLoading,
                        onBackClick,
                        title,
                        onConditionalEditClick,
                        onConditionalSave,
                        onValidationChanged,
                        sectionType,
                        sectionTypeOptions,
                        showHeadingSeparator,
                        validationErrors
                    };
                },
                template: `
<div class="form-sidebar">
    <div class="sidebar-header">
        <div class="sidebar-back" @click="onBackClick">
            <i class="fa fa-chevron-left"></i>
        </div>

        <div class="title">
            Section
        </div>
    </div>

    <RockForm v-model:submit="formSubmit" @validationChanged="onValidationChanged" class="sidebar-body">
        <div class="sidebar-panels">
            <div></div>
            <Panel :modelValue="true" title="Section Configuration" hasCollapse>
                <TextBox v-model="title"
                    label="Title" />
                <TextBox v-model="description"
                    label="Description"
                    textMode="multiline" />
                <Switch v-model="showHeadingSeparator"
                    label="Show Heading Separator" />
                <DropDownList v-model="sectionType"
                    label="Type"
                    :options="sectionTypeOptions"
                    :showBlankItem="false" />
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
        </div>
    </RockForm>

    <Modal v-model="conditionalModalOpen" title="Conditional Settings" saveText="Save" @save="onConditionalSave">
        <FieldFilterEditor v-model="conditionalModel" :title="fieldName" :sources="conditionalSources" />
    </Modal>
</div>
`
            }));
        }
    };
});
//# sourceMappingURL=sectionEditAside.js.map