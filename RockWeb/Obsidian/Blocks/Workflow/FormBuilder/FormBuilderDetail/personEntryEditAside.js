System.register(["vue", "../../../../Controls/panel", "../../../../Controls/rockForm", "../../../../Util/component", "../Shared/personEntrySettings", "./utils"], function (exports_1, context_1) {
    "use strict";
    var vue_1, panel_1, rockForm_1, component_1, personEntrySettings_1, utils_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (panel_1_1) {
                panel_1 = panel_1_1;
            },
            function (rockForm_1_1) {
                rockForm_1 = rockForm_1_1;
            },
            function (component_1_1) {
                component_1 = component_1_1;
            },
            function (personEntrySettings_1_1) {
                personEntrySettings_1 = personEntrySettings_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_1.defineComponent({
                name: "Workflow.FormBuilderDetail.PersonEntryEditAside",
                components: {
                    Panel: panel_1.default,
                    PersonEntrySettings: personEntrySettings_1.default,
                    RockForm: rockForm_1.default
                },
                props: {
                    modelValue: {
                        type: Object,
                        default: {}
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
                    var _a, _b, _c, _d, _e;
                    const internalValue = component_1.useVModelPassthrough(props, "modelValue", emit);
                    const validationErrors = vue_1.ref([]);
                    const scrollableElement = vue_1.ref(null);
                    const formSubmit = vue_1.ref(false);
                    const onBackClick = () => emit("close");
                    const onValidationChanged = (errors) => {
                        validationErrors.value = errors;
                        emit("validationChanged", errors);
                    };
                    const options = utils_1.useFormSources();
                    return {
                        addressTypeOptions: (_a = options.addressTypeOptions) !== null && _a !== void 0 ? _a : [],
                        campusStatusOptions: (_b = options.campusStatusOptions) !== null && _b !== void 0 ? _b : [],
                        campusTypeOptions: (_c = options.campusTypeOptions) !== null && _c !== void 0 ? _c : [],
                        connectionStatusOptions: (_d = options.connectionStatusOptions) !== null && _d !== void 0 ? _d : [],
                        recordStatusOptions: (_e = options.recordStatusOptions) !== null && _e !== void 0 ? _e : [],
                        formSubmit,
                        internalValue,
                        onBackClick,
                        onValidationChanged,
                        scrollableElement,
                        validationErrors
                    };
                },
                template: `
<div class="form-sidebar">
    <div class="sidebar-header">
        <div class="sidebar-back" @click="onBackClick">
            <i class="fa fa-chevron-left"></i>
        </div>

        <span class="title">
            <i class="fa fa-fw fa-user icon"></i>
            Person Entry
        </span>
    </div>

    <div ref="scrollableElement" class="sidebar-body">
        <RockForm v-model:submit="formSubmit" @validationChanged="onValidationChanged" class="sidebar-panels">
            <div class="panel-body">
                <PersonEntrySettings v-model="internalValue"
                    isVertical
                    :recordStatusOptions="recordStatusOptions"
                    :connectionStatusOptions="connectionStatusOptions"
                    :campusTypeOptions="campusTypeOptions"
                    :campusStatusOptions="campusStatusOptions"
                    :addressTypeOptions="addressTypeOptions" />
            </div>
        </RockForm>
    </div>
</div>
`
            }));
        }
    };
});
//# sourceMappingURL=personEntryEditAside.js.map