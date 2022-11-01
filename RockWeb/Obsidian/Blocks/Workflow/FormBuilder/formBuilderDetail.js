System.register(["vue", "../../../Elements/alert", "../../../Controls/panel", "../../../Elements/rockButton", "../../../Util/block", "../../../Util/guid", "./FormBuilderDetail/communicationsTab", "./FormBuilderDetail/formBuilderTab", "./FormBuilderDetail/settingsTab", "./FormBuilderDetail/utils"], function (exports_1, context_1) {
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
    var vue_1, vue_2, alert_1, panel_1, rockButton_1, block_1, guid_1, communicationsTab_1, formBuilderTab_1, settingsTab_1, utils_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
                vue_2 = vue_1_1;
            },
            function (alert_1_1) {
                alert_1 = alert_1_1;
            },
            function (panel_1_1) {
                panel_1 = panel_1_1;
            },
            function (rockButton_1_1) {
                rockButton_1 = rockButton_1_1;
            },
            function (block_1_1) {
                block_1 = block_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (communicationsTab_1_1) {
                communicationsTab_1 = communicationsTab_1_1;
            },
            function (formBuilderTab_1_1) {
                formBuilderTab_1 = formBuilderTab_1_1;
            },
            function (settingsTab_1_1) {
                settingsTab_1 = settingsTab_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_2.defineComponent({
                name: "WorkFlow.FormBuilderDetail",
                components: {
                    Alert: alert_1.default,
                    CommunicationsTab: communicationsTab_1.default,
                    FormBuilderTab: formBuilderTab_1.default,
                    Panel: panel_1.default,
                    RockButton: rockButton_1.default,
                    SettingsTab: settingsTab_1.default
                },
                setup() {
                    var _a, _b, _c, _d, _e, _f;
                    const config = block_1.useConfigurationValues();
                    const invokeBlockAction = block_1.useInvokeBlockAction();
                    const form = (_a = config.form) !== null && _a !== void 0 ? _a : {};
                    const isFormDirty = vue_2.ref(false);
                    const selectedTab = vue_2.ref(0);
                    const recipientOptions = vue_2.ref([]);
                    const communicationsViewModel = vue_2.ref({
                        confirmationEmail: (_b = form.confirmationEmail) !== null && _b !== void 0 ? _b : {},
                        notificationEmail: (_c = form.notificationEmail) !== null && _c !== void 0 ? _c : {}
                    });
                    const generalViewModel = vue_2.ref((_d = form.general) !== null && _d !== void 0 ? _d : {});
                    const blockTitle = vue_2.computed(() => {
                        var _a, _b;
                        return (_b = ((_a = generalViewModel.value) === null || _a === void 0 ? void 0 : _a.name) + " Form") !== null && _b !== void 0 ? _b : "Workflow Form Builder";
                    });
                    const completionViewModel = vue_2.ref((_e = form.completion) !== null && _e !== void 0 ? _e : {});
                    const builderViewModel = vue_2.ref({
                        allowPersonEntry: form.allowPersonEntry,
                        campusSetFrom: form.campusSetFrom,
                        footerContent: form.footerContent,
                        headerContent: form.headerContent,
                        personEntry: form.personEntry,
                        sections: form.sections
                    });
                    const blockError = vue_2.ref("");
                    const formSubmit = vue_2.ref(false);
                    const communicationsValidationErrors = vue_2.ref([]);
                    const formBuilderValidationErrors = vue_2.ref([]);
                    const settingsValidationErrors = vue_2.ref([]);
                    const isFormBuilderTabSelected = vue_2.computed(() => selectedTab.value === 0);
                    const isCommunicationsTabSelected = vue_2.computed(() => selectedTab.value === 1);
                    const isSettingsTabSelected = vue_2.computed(() => selectedTab.value === 2);
                    const formBuilderContainerStyle = vue_2.computed(() => {
                        return {
                            display: isFormBuilderTabSelected.value ? "flex" : "none"
                        };
                    });
                    const communicationsContainerStyle = vue_2.computed(() => {
                        return {
                            display: isCommunicationsTabSelected.value ? "flex" : "none"
                        };
                    });
                    const settingsContainerStyle = vue_2.computed(() => {
                        return {
                            display: isSettingsTabSelected.value ? "flex" : "none"
                        };
                    });
                    const selectedTemplate = vue_2.computed(() => {
                        var _a, _b;
                        const matches = (_b = (_a = config.sources) === null || _a === void 0 ? void 0 : _a.formTemplateOptions) === null || _b === void 0 ? void 0 : _b.filter(t => { var _a; return guid_1.areEqual(t.value, (_a = form.general) === null || _a === void 0 ? void 0 : _a.template); });
                        return matches && matches.length > 0 ? matches[0] : null;
                    });
                    const onFormBuilderTabClick = () => {
                        selectedTab.value = 0;
                    };
                    const onCommunicationsTabClick = () => {
                        selectedTab.value = 1;
                    };
                    const onSettingsTabClick = () => {
                        selectedTab.value = 2;
                    };
                    const onSaveClick = () => __awaiter(this, void 0, void 0, function* () {
                        var _g;
                        formSubmit.value = true;
                        vue_1.nextTick(() => formSubmit.value = false);
                        if (formBuilderValidationErrors.value.length > 0) {
                            onFormBuilderTabClick();
                            return;
                        }
                        if (communicationsValidationErrors.value.length > 0) {
                            onCommunicationsTabClick();
                            return;
                        }
                        if (settingsValidationErrors.value.length > 0) {
                            onSettingsTabClick();
                            return;
                        }
                        const result = yield invokeBlockAction("SaveForm", {
                            formGuid: config.formGuid,
                            formSettings: form
                        });
                        if (!result.isSuccess) {
                            alert((_g = result.errorMessage) !== null && _g !== void 0 ? _g : "Failed to save.");
                        }
                        else {
                            isFormDirty.value = false;
                        }
                    });
                    const updateRecipientOptions = () => {
                        const options = [];
                        if (config.otherAttributes) {
                            for (const attribute of config.otherAttributes) {
                                if (!attribute.guid || !attribute.fieldTypeGuid || !attribute.name) {
                                    continue;
                                }
                                if (guid_1.areEqual(attribute.fieldTypeGuid, "E4EAB7B2-0B76-429B-AFE4-AD86D7428C70") || guid_1.areEqual(attribute.fieldTypeGuid, "3D045CAE-EA72-4A04-B7BE-7FD1D6214217")) {
                                    options.push({
                                        value: attribute.guid,
                                        text: attribute.name
                                    });
                                }
                            }
                        }
                        if (form.sections) {
                            for (const section of form.sections) {
                                if (!section.fields) {
                                    continue;
                                }
                                for (const field of section.fields) {
                                    if (guid_1.areEqual(field.fieldTypeGuid, "E4EAB7B2-0B76-429B-AFE4-AD86D7428C70") || guid_1.areEqual(field.fieldTypeGuid, "3D045CAE-EA72-4A04-B7BE-7FD1D6214217")) {
                                        options.push({
                                            value: field.guid,
                                            text: field.name
                                        });
                                    }
                                }
                            }
                        }
                        options.sort((a, b) => {
                            if (a.text < b.text) {
                                return -1;
                            }
                            else if (a.text > b.text) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        });
                        recipientOptions.value = options;
                    };
                    const onBeforeUnload = (event) => {
                        event.preventDefault();
                        event.returnValue = "";
                    };
                    const onCommunicationsValidationChanged = (errors) => {
                        communicationsValidationErrors.value = errors;
                    };
                    const onFormBuilderValidationChanged = (errors) => {
                        formBuilderValidationErrors.value = errors;
                    };
                    const onSettingsValidationChanged = (errors) => {
                        settingsValidationErrors.value = errors;
                    };
                    vue_2.watch([builderViewModel, communicationsViewModel, generalViewModel, completionViewModel], () => {
                        form.allowPersonEntry = builderViewModel.value.allowPersonEntry;
                        form.campusSetFrom = builderViewModel.value.campusSetFrom;
                        form.footerContent = builderViewModel.value.footerContent;
                        form.headerContent = builderViewModel.value.headerContent;
                        form.personEntry = builderViewModel.value.personEntry;
                        form.sections = builderViewModel.value.sections;
                        form.general = generalViewModel.value;
                        form.completion = completionViewModel.value;
                        form.confirmationEmail = communicationsViewModel.value.confirmationEmail;
                        form.notificationEmail = communicationsViewModel.value.notificationEmail;
                        updateRecipientOptions();
                        isFormDirty.value = true;
                    });
                    vue_2.watch(isFormDirty, () => {
                        window.removeEventListener("beforeunload", onBeforeUnload);
                        if (isFormDirty.value) {
                            window.addEventListener("beforeunload", onBeforeUnload);
                        }
                    });
                    utils_1.provideFormSources((_f = config.sources) !== null && _f !== void 0 ? _f : {});
                    updateRecipientOptions();
                    if (!config.formGuid || !config.form) {
                        blockError.value = "That form does not exist or it can't be edited.";
                    }
                    const queryString = new URLSearchParams(window.location.search.toLowerCase());
                    if (queryString.has("tab")) {
                        const tab = queryString.get("tab");
                        if (tab === "communications") {
                            selectedTab.value = 1;
                        }
                        else if (tab === "settings") {
                            selectedTab.value = 2;
                        }
                    }
                    return {
                        analyticsPageUrl: config.analyticsPageUrl,
                        blockError,
                        builderViewModel,
                        communicationsContainerStyle,
                        communicationsValidationErrors,
                        communicationsViewModel,
                        completionViewModel,
                        formBuilderContainerStyle,
                        formSubmit,
                        isCommunicationsTabSelected,
                        isFormBuilderTabSelected,
                        isFormDirty,
                        isSettingsTabSelected,
                        settingsContainerStyle,
                        generalViewModel,
                        blockTitle,
                        submissionsPageUrl: config.submissionsPageUrl,
                        onCommunicationsTabClick,
                        onCommunicationsValidationChanged,
                        onFormBuilderTabClick,
                        onFormBuilderValidationChanged,
                        onSaveClick,
                        onSettingsTabClick,
                        onSettingsValidationChanged,
                        recipientOptions,
                        selectedTemplate
                    };
                },
                template: `
<Alert v-if="blockError" alertType="warning">
    {{ blockError }}
</Alert>

<Panel v-else type="block" hasFullscreen :title="blockTitle" titleIconClass="fa fa-poll-h">
    <template #default>

        <div ref="bodyElement" class="panel-flex-fill-body styled-scroll">
            <div class="panel-toolbar panel-toolbar-shadow">
                <ul class="nav nav-pills nav-sm">
                    <li role="presentation"><a :href="submissionsPageUrl">Submissions</a></li>
                    <li :class="{ active: isFormBuilderTabSelected }" role="presentation"><a href="#" @click.prevent="onFormBuilderTabClick">Form Builder</a></li>
                    <li :class="{ active: isCommunicationsTabSelected }" role="presentation"><a href="#" @click.prevent="onCommunicationsTabClick">Communications</a></li>
                    <li :class="{ active: isSettingsTabSelected }" role="presentation"><a href="#" @click.prevent="onSettingsTabClick">Settings</a></li>
                    <li role="presentation"><a :href="analyticsPageUrl">Analytics</a></li>
                </ul>

                <RockButton btnType="primary" btnSize="sm" :disabled="!isFormDirty" @click="onSaveClick">Save</RockButton>
            </div>

            <div class="form-builder-container form-builder-grow" :style="formBuilderContainerStyle">
                <FormBuilderTab v-model="builderViewModel"
                    :templateOverrides="selectedTemplate"
                    :submit="formSubmit"
                    @validationChanged="onFormBuilderValidationChanged" />
            </div>

            <div class="communications-container form-builder-grow" :style="communicationsContainerStyle">
                <CommunicationsTab v-model="communicationsViewModel"
                    :recipientOptions="recipientOptions"
                    :templateOverrides="selectedTemplate"
                    :submit="formSubmit"
                    @validationChanged="onCommunicationsValidationChanged" />
            </div>

            <div class="settings-container form-builder-grow" :style="settingsContainerStyle">
                <SettingsTab v-model="generalViewModel"
                    v-model:completion="completionViewModel"
                    :templateOverrides="selectedTemplate"
                    :submit="formSubmit"
                    @validationChanged="onSettingsValidationChanged" />
            </div>
        </div>
    </template>
</Panel>
`
            }));
        }
    };
});
//# sourceMappingURL=formBuilderDetail.js.map