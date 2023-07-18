System.register(['tslib', 'vue', '@Obsidian/Controls/alert.obs', '@Obsidian/Controls/categoryPicker', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/codeEditor', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/groupTypePicker.obs', '@Obsidian/Controls/loadingIndicator', '@Obsidian/Controls/modal', '@Obsidian/Controls/pagePicker.obs', '@Obsidian/Controls/panelWidget', '@Obsidian/Controls/radioButtonList', '@Obsidian/Controls/textBox', '@Obsidian/SystemGuids/definedType', '@Obsidian/SystemGuids/entityType', '@Obsidian/Utility/block'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, watch, createTextVNode, createElementVNode, openBlock, createBlock, withCtx, createElementBlock, createVNode, createCommentVNode, Alert, CategoryPicker, CheckBox, CheckBoxList, CodeEditor, DefinedValuePicker, DropDownList, GroupTypePicker, LoadingIndicator, Modal, PagePicker, PanelWidget, RadioButtonList, TextBox, DefinedType, EntityType, useInvokeBlockAction, getSecurityGrant, useReloadBlock, provideSecurityGrant, setCustomSettingsBoxValue;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            createTextVNode = module.createTextVNode;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createElementBlock = module.createElementBlock;
            createVNode = module.createVNode;
            createCommentVNode = module.createCommentVNode;
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            CategoryPicker = module["default"];
        }, function (module) {
            CheckBox = module["default"];
        }, function (module) {
            CheckBoxList = module["default"];
        }, function (module) {
            CodeEditor = module["default"];
        }, function (module) {
            DefinedValuePicker = module["default"];
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            GroupTypePicker = module["default"];
        }, function (module) {
            LoadingIndicator = module["default"];
        }, function (module) {
            Modal = module["default"];
        }, function (module) {
            PagePicker = module["default"];
        }, function (module) {
            PanelWidget = module["default"];
        }, function (module) {
            RadioButtonList = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            DefinedType = module.DefinedType;
        }, function (module) {
            EntityType = module.EntityType;
        }, function (module) {
            useInvokeBlockAction = module.useInvokeBlockAction;
            getSecurityGrant = module.getSecurityGrant;
            useReloadBlock = module.useReloadBlock;
            provideSecurityGrant = module.provideSecurityGrant;
            setCustomSettingsBoxValue = module.setCustomSettingsBoxValue;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'signUpFinderCustomSettings',
                emits: ["close"],
                setup(__props, { expose, emit }) {
                    expose();
                    const invokeBlockAction = useInvokeBlockAction();
                    const securityGrant = getSecurityGrant(null);
                    const reloadBlock = useReloadBlock();
                    const displayProjectFiltersAsItems = [
                        {
                            value: "Checkboxes",
                            text: "Checkboxes",
                        },
                        {
                            value: "MultiSelectDropDown",
                            text: "Multi-Select Dropdown"
                        }
                    ];
                    const filterColumnsItems = [
                        {
                            value: "1",
                            text: "1"
                        },
                        {
                            value: "2",
                            text: "2"
                        },
                        {
                            value: "3",
                            text: "3"
                        },
                        {
                            value: "4",
                            text: "4"
                        }
                    ];
                    const errorMessage = ref("");
                    const isLoading = ref(true);
                    const isModalOpen = ref(true);
                    const hideOvercapacityProjects = ref(false);
                    const loadResultsOnInitialPageLoad = ref(false);
                    const displayProjectFiltersAs = ref("");
                    const filterColumns = ref("");
                    const projectTypes = ref([]);
                    const projectTypeFilterLabel = ref("");
                    const displayAttributeFilters = ref([]);
                    const displayCampusFilterSettings = ref(false);
                    const displayCampusFilter = ref(false);
                    const enableCampusContext = ref(false);
                    const campusTypes = ref([]);
                    const campusStatuses = ref([]);
                    const displayNamedScheduleFilter = ref(false);
                    const namedScheduleFilterLabel = ref("");
                    const rootScheduleCategory = ref(null);
                    const displayLocationSort = ref(false);
                    const locationSortLabel = ref("");
                    const displayLocationRangeFilter = ref(false);
                    const displayDateRange = ref(false);
                    const displaySlotsAvailableFilter = ref(false);
                    const resultsLavaTemplate = ref("");
                    const resultsHeaderLavaTemplate = ref("");
                    const projectDetailPage = ref(null);
                    const registrationPage = ref(null);
                    const availableProjectTypeGuids = ref([]);
                    const availableDisplayAttributeFilters = ref([]);
                    const saveButtonText = computed(() => {
                        return errorMessage.value || !isLoading.value ? "Save" : "";
                    });
                    const securityGrantToken = computed(() => {
                        return securityGrant.token.value;
                    });
                    function startLoading() {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
                        return __awaiter(this, void 0, void 0, function* () {
                            const result = yield invokeBlockAction("GetCustomSettings");
                            if (result.isSuccess && result.data && result.data.settings && result.data.options) {
                                hideOvercapacityProjects.value = result.data.settings.hideOvercapacityProjects;
                                loadResultsOnInitialPageLoad.value = result.data.settings.loadResultsOnInitialPageLoad;
                                displayProjectFiltersAs.value = (_a = result.data.settings.displayProjectFiltersAs) !== null && _a !== void 0 ? _a : "";
                                filterColumns.value = result.data.settings.filterColumns.toString();
                                projectTypes.value = (_b = result.data.settings.projectTypes) !== null && _b !== void 0 ? _b : [];
                                projectTypeFilterLabel.value = (_c = result.data.settings.projectTypeFilterLabel) !== null && _c !== void 0 ? _c : "";
                                displayAttributeFilters.value = (_d = result.data.settings.displayAttributeFilters) !== null && _d !== void 0 ? _d : [];
                                displayCampusFilterSettings.value = result.data.settings.displayCampusFilterSettings;
                                displayCampusFilter.value = result.data.settings.displayCampusFilter;
                                enableCampusContext.value = result.data.settings.enableCampusContext;
                                campusTypes.value = (_e = result.data.settings.campusTypes) !== null && _e !== void 0 ? _e : [];
                                campusStatuses.value = (_f = result.data.settings.campusStatuses) !== null && _f !== void 0 ? _f : [];
                                displayNamedScheduleFilter.value = result.data.settings.displayNamedScheduleFilter;
                                namedScheduleFilterLabel.value = (_g = result.data.settings.namedScheduleFilterLabel) !== null && _g !== void 0 ? _g : "";
                                rootScheduleCategory.value = (_h = result.data.settings.rootScheduleCategory) !== null && _h !== void 0 ? _h : null;
                                displayLocationSort.value = result.data.settings.displayLocationSort;
                                locationSortLabel.value = (_j = result.data.settings.locationSortLabel) !== null && _j !== void 0 ? _j : "";
                                displayLocationRangeFilter.value = result.data.settings.displayLocationRangeFilter;
                                displayDateRange.value = result.data.settings.displayDateRange;
                                displaySlotsAvailableFilter.value = result.data.settings.displaySlotsAvailableFilter;
                                resultsLavaTemplate.value = (_k = result.data.settings.resultsLavaTemplate) !== null && _k !== void 0 ? _k : "";
                                resultsHeaderLavaTemplate.value = (_l = result.data.settings.resultsHeaderLavaTemplate) !== null && _l !== void 0 ? _l : "";
                                projectDetailPage.value = (_m = result.data.settings.projectDetailPage) !== null && _m !== void 0 ? _m : null;
                                registrationPage.value = (_o = result.data.settings.registrationPage) !== null && _o !== void 0 ? _o : null;
                                securityGrant.updateToken(result.data.securityGrantToken);
                                availableProjectTypeGuids.value = (_p = result.data.options.availableProjectTypeGuids) !== null && _p !== void 0 ? _p : [];
                                availableDisplayAttributeFilters.value = (_q = result.data.options.availableDisplayAttributeFilters) !== null && _q !== void 0 ? _q : [];
                            }
                            else {
                                errorMessage.value = result.errorMessage || "Unknown error while loading custom settings.";
                            }
                            isLoading.value = false;
                        });
                    }
                    function onProjectTypesUpdated() {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, function* () {
                            const selectedProjectTypeGuidStrings = (_a = projectTypes.value.map(pt => pt.value)) !== null && _a !== void 0 ? _a : [];
                            const result = yield invokeBlockAction("GetUpdatedDisplayAttributeFilters", { selectedProjectTypeGuidStrings });
                            if (!result.isSuccess) {
                                errorMessage.value = result.errorMessage || "Unknown error when trying to load updated display attribute filters.";
                                return;
                            }
                            availableDisplayAttributeFilters.value = (_b = result.data) !== null && _b !== void 0 ? _b : [];
                            displayAttributeFilters.value = [
                                ...displayAttributeFilters.value.filter((selected) => availableDisplayAttributeFilters.value.some((available) => available.value === selected))
                            ];
                        });
                    }
                    function onSave() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const box = {};
                            setCustomSettingsBoxValue(box, "hideOvercapacityProjects", hideOvercapacityProjects.value);
                            setCustomSettingsBoxValue(box, "loadResultsOnInitialPageLoad", loadResultsOnInitialPageLoad.value);
                            setCustomSettingsBoxValue(box, "displayProjectFiltersAs", displayProjectFiltersAs.value);
                            setCustomSettingsBoxValue(box, "filterColumns", +filterColumns.value);
                            setCustomSettingsBoxValue(box, "projectTypes", projectTypes.value);
                            setCustomSettingsBoxValue(box, "projectTypeFilterLabel", projectTypeFilterLabel.value);
                            setCustomSettingsBoxValue(box, "displayAttributeFilters", displayAttributeFilters.value);
                            setCustomSettingsBoxValue(box, "displayCampusFilter", displayCampusFilter.value);
                            setCustomSettingsBoxValue(box, "enableCampusContext", enableCampusContext.value);
                            setCustomSettingsBoxValue(box, "campusTypes", campusTypes.value);
                            setCustomSettingsBoxValue(box, "campusStatuses", campusStatuses.value);
                            setCustomSettingsBoxValue(box, "displayNamedScheduleFilter", displayNamedScheduleFilter.value);
                            setCustomSettingsBoxValue(box, "namedScheduleFilterLabel", namedScheduleFilterLabel.value);
                            setCustomSettingsBoxValue(box, "rootScheduleCategory", rootScheduleCategory.value);
                            setCustomSettingsBoxValue(box, "displayLocationSort", displayLocationSort.value);
                            setCustomSettingsBoxValue(box, "locationSortLabel", locationSortLabel.value);
                            setCustomSettingsBoxValue(box, "displayLocationRangeFilter", displayLocationRangeFilter.value);
                            setCustomSettingsBoxValue(box, "displayDateRange", displayDateRange.value);
                            setCustomSettingsBoxValue(box, "displaySlotsAvailableFilter", displaySlotsAvailableFilter.value);
                            setCustomSettingsBoxValue(box, "resultsLavaTemplate", resultsLavaTemplate.value);
                            setCustomSettingsBoxValue(box, "resultsHeaderLavaTemplate", resultsHeaderLavaTemplate.value);
                            setCustomSettingsBoxValue(box, "projectDetailPage", projectDetailPage.value);
                            setCustomSettingsBoxValue(box, "registrationPage", registrationPage.value);
                            const data = {
                                box
                            };
                            const result = yield invokeBlockAction("SaveCustomSettings", data);
                            if (result.isSuccess) {
                                isModalOpen.value = false;
                                reloadBlock();
                            }
                            else {
                                alert(result.errorMessage || "Unable to save block settings.");
                            }
                        });
                    }
                    provideSecurityGrant(securityGrant);
                    watch(isModalOpen, () => {
                        if (!isModalOpen.value) {
                            emit("close");
                        }
                    });
                    startLoading();
                    const __returned__ = { invokeBlockAction, securityGrant, reloadBlock, emit, displayProjectFiltersAsItems, filterColumnsItems, errorMessage, isLoading, isModalOpen, hideOvercapacityProjects, loadResultsOnInitialPageLoad, displayProjectFiltersAs, filterColumns, projectTypes, projectTypeFilterLabel, displayAttributeFilters, displayCampusFilterSettings, displayCampusFilter, enableCampusContext, campusTypes, campusStatuses, displayNamedScheduleFilter, namedScheduleFilterLabel, rootScheduleCategory, displayLocationSort, locationSortLabel, displayLocationRangeFilter, displayDateRange, displaySlotsAvailableFilter, resultsLavaTemplate, resultsHeaderLavaTemplate, projectDetailPage, registrationPage, availableProjectTypeGuids, availableDisplayAttributeFilters, saveButtonText, securityGrantToken, startLoading, onProjectTypesUpdated, onSave, Alert, CategoryPicker, CheckBox, CheckBoxList, CodeEditor, DefinedValuePicker, DropDownList, GroupTypePicker, LoadingIndicator, Modal, PagePicker, PanelWidget, RadioButtonList, TextBox, DefinedType, EntityType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { key: 2 };
            const _hoisted_2 = createTextVNode("Layout / Initial Page Load");
            const _hoisted_3 = { class: "row" };
            const _hoisted_4 = { class: "col-md-6" };
            const _hoisted_5 = { class: "col-md-6" };
            const _hoisted_6 = createTextVNode("Project Filters");
            const _hoisted_7 = { class: "row" };
            const _hoisted_8 = { class: "col-md-6" };
            const _hoisted_9 = { class: "col-md-6" };
            const _hoisted_10 = createTextVNode("Campus Filters");
            const _hoisted_11 = { class: "row" };
            const _hoisted_12 = { class: "col-md-6" };
            const _hoisted_13 = { class: "col-md-6" };
            const _hoisted_14 = createTextVNode("Schedule Filters");
            const _hoisted_15 = { class: "row" };
            const _hoisted_16 = { class: "col-md-6" };
            const _hoisted_17 = { class: "col-md-6" };
            const _hoisted_18 = { class: "row" };
            const _hoisted_19 = createElementVNode("div", { class: "col-md-6" }, "   ", -1);
            const _hoisted_20 = { class: "col-md-6" };
            const _hoisted_21 = createTextVNode("Location Filters");
            const _hoisted_22 = { class: "row" };
            const _hoisted_23 = { class: "col-md-6" };
            const _hoisted_24 = { class: "col-md-6" };
            const _hoisted_25 = { class: "row" };
            const _hoisted_26 = { class: "col-md-6" };
            const _hoisted_27 = createElementVNode("div", { class: "col-md-6" }, "   ", -1);
            const _hoisted_28 = createTextVNode("Additional Filters");
            const _hoisted_29 = { class: "row" };
            const _hoisted_30 = { class: "col-md-6" };
            const _hoisted_31 = { class: "col-md-6" };
            const _hoisted_32 = createTextVNode("Lava");
            const _hoisted_33 = createTextVNode("Linked Pages");
            const _hoisted_34 = { class: "row" };
            const _hoisted_35 = { class: "col-md-6" };
            const _hoisted_36 = { class: "col-md-6" };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["Modal"], {
                    modelValue: $setup.isModalOpen,
                    "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($setup.isModalOpen) = $event)),
                    title: "Sign-Up Finder Settings",
                    saveText: $setup.saveButtonText,
                    onSave: $setup.onSave
                }, {
                    default: withCtx(() => [
                        ($setup.errorMessage)
                            ? (openBlock(), createBlock($setup["Alert"], {
                                key: 0,
                                alertType: "warning"
                            }))
                            : ($setup.isLoading)
                                ? (openBlock(), createBlock($setup["LoadingIndicator"], {
                                    key: 1,
                                    delay: 500
                                }))
                                : (openBlock(), createElementBlock("div", _hoisted_1, [
                                    createVNode($setup["PanelWidget"], { isDefaultOpen: true }, {
                                        header: withCtx(() => [
                                            _hoisted_2
                                        ]),
                                        default: withCtx(() => [
                                            createElementVNode("div", _hoisted_3, [
                                                createElementVNode("div", _hoisted_4, [
                                                    createVNode($setup["CheckBox"], {
                                                        modelValue: $setup.hideOvercapacityProjects,
                                                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.hideOvercapacityProjects) = $event)),
                                                        label: "Hide Overcapacity Projects",
                                                        help: "Determines if projects that are full should be shown."
                                                    }, null, 8, ["modelValue"]),
                                                    createVNode($setup["CheckBox"], {
                                                        modelValue: $setup.loadResultsOnInitialPageLoad,
                                                        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.loadResultsOnInitialPageLoad) = $event)),
                                                        label: "Load Results on Initial Page Load",
                                                        help: "When enabled the group finder will load with all configured groups (no filters enabled)."
                                                    }, null, 8, ["modelValue"])
                                                ]),
                                                createElementVNode("div", _hoisted_5, [
                                                    createVNode($setup["RadioButtonList"], {
                                                        modelValue: $setup.displayProjectFiltersAs,
                                                        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.displayProjectFiltersAs) = $event)),
                                                        label: "Display Project Filters As",
                                                        help: "Determines if the project filters should be show as checkboxes or multi-select dropdowns.",
                                                        items: $setup.displayProjectFiltersAsItems,
                                                        horizontal: true,
                                                        rules: "required"
                                                    }, null, 8, ["modelValue"]),
                                                    createVNode($setup["DropDownList"], {
                                                        modelValue: $setup.filterColumns,
                                                        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.filterColumns) = $event)),
                                                        label: "Filter Columns",
                                                        help: "The number of columns the filters should be displayed as.",
                                                        items: $setup.filterColumnsItems,
                                                        showBlankItem: false,
                                                        rules: "required"
                                                    }, null, 8, ["modelValue"])
                                                ])
                                            ])
                                        ]),
                                        _: 1
                                    }),
                                    createVNode($setup["PanelWidget"], { isDefaultOpen: true }, {
                                        header: withCtx(() => [
                                            _hoisted_6
                                        ]),
                                        default: withCtx(() => [
                                            createElementVNode("div", _hoisted_7, [
                                                createElementVNode("div", _hoisted_8, [
                                                    createVNode($setup["GroupTypePicker"], {
                                                        modelValue: $setup.projectTypes,
                                                        "onUpdate:modelValue": [
                                                            _cache[4] || (_cache[4] = $event => (($setup.projectTypes) = $event)),
                                                            $setup.onProjectTypesUpdated
                                                        ],
                                                        label: "Project Types",
                                                        help: "Select the sign-up project group types that should be considered for the search.",
                                                        groupTypes: [...$setup.availableProjectTypeGuids],
                                                        multiple: true,
                                                        rules: "required"
                                                    }, null, 8, ["modelValue", "groupTypes"]),
                                                    createVNode($setup["TextBox"], {
                                                        modelValue: $setup.projectTypeFilterLabel,
                                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.projectTypeFilterLabel) = $event)),
                                                        label: "Project Type Filter Label",
                                                        help: "The label to use for the project type filter.",
                                                        rules: "required"
                                                    }, null, 8, ["modelValue"])
                                                ]),
                                                createElementVNode("div", _hoisted_9, [
                                                    createVNode($setup["CheckBoxList"], {
                                                        modelValue: $setup.displayAttributeFilters,
                                                        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($setup.displayAttributeFilters) = $event)),
                                                        label: "Display Attribute Filters",
                                                        help: "The group attributes that should be available for an individual to filter the results by.",
                                                        items: $setup.availableDisplayAttributeFilters
                                                    }, null, 8, ["modelValue", "items"])
                                                ])
                                            ])
                                        ]),
                                        _: 1
                                    }),
                                    ($setup.displayCampusFilterSettings)
                                        ? (openBlock(), createBlock($setup["PanelWidget"], {
                                            key: 0,
                                            isDefaultOpen: false
                                        }, {
                                            header: withCtx(() => [
                                                _hoisted_10
                                            ]),
                                            default: withCtx(() => [
                                                createElementVNode("div", _hoisted_11, [
                                                    createElementVNode("div", _hoisted_12, [
                                                        createVNode($setup["CheckBox"], {
                                                            modelValue: $setup.displayCampusFilter,
                                                            "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($setup.displayCampusFilter) = $event)),
                                                            label: "Display Campus Filter",
                                                            help: "Determines if the campus filter should be shown."
                                                        }, null, 8, ["modelValue"]),
                                                        createVNode($setup["CheckBox"], {
                                                            modelValue: $setup.enableCampusContext,
                                                            "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($setup.enableCampusContext) = $event)),
                                                            label: "Enable Campus Context",
                                                            help: "If the page has a campus context, its value will be used as a filter."
                                                        }, null, 8, ["modelValue"])
                                                    ]),
                                                    createElementVNode("div", _hoisted_13, [
                                                        createVNode($setup["DefinedValuePicker"], {
                                                            modelValue: $setup.campusTypes,
                                                            "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($setup.campusTypes) = $event)),
                                                            label: "Campus Types",
                                                            help: "The types of campuses to include in the campus list.",
                                                            definedTypeGuid: $setup.DefinedType.CampusType,
                                                            multiple: true
                                                        }, null, 8, ["modelValue", "definedTypeGuid"]),
                                                        createVNode($setup["DefinedValuePicker"], {
                                                            modelValue: $setup.campusStatuses,
                                                            "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($setup.campusStatuses) = $event)),
                                                            label: "Campus Statuses",
                                                            help: "The statuses of the campuses to include in the campus list.",
                                                            definedTypeGuid: $setup.DefinedType.CampusStatus,
                                                            multiple: true
                                                        }, null, 8, ["modelValue", "definedTypeGuid"])
                                                    ])
                                                ])
                                            ]),
                                            _: 1
                                        }))
                                        : createCommentVNode("v-if", true),
                                    createVNode($setup["PanelWidget"], { isDefaultOpen: true }, {
                                        header: withCtx(() => [
                                            _hoisted_14
                                        ]),
                                        default: withCtx(() => [
                                            createElementVNode("div", _hoisted_15, [
                                                createElementVNode("div", _hoisted_16, [
                                                    createVNode($setup["CheckBox"], {
                                                        modelValue: $setup.displayNamedScheduleFilter,
                                                        "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($setup.displayNamedScheduleFilter) = $event)),
                                                        label: "Display Named Schedule Filter",
                                                        help: "When enabled a list of named schedules will be show as a filter."
                                                    }, null, 8, ["modelValue"])
                                                ]),
                                                createElementVNode("div", _hoisted_17, [
                                                    createVNode($setup["TextBox"], {
                                                        modelValue: $setup.namedScheduleFilterLabel,
                                                        "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => (($setup.namedScheduleFilterLabel) = $event)),
                                                        label: "Named Schedule Filter Label",
                                                        help: "The label to use for the named schedule filter.",
                                                        rules: "required"
                                                    }, null, 8, ["modelValue"])
                                                ])
                                            ]),
                                            createElementVNode("div", _hoisted_18, [
                                                _hoisted_19,
                                                createElementVNode("div", _hoisted_20, [
                                                    createVNode($setup["CategoryPicker"], {
                                                        modelValue: $setup.rootScheduleCategory,
                                                        "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($setup.rootScheduleCategory) = $event)),
                                                        label: "Root Schedule Category",
                                                        help: "When displaying the named schedule filter this will serve to filter which named schedules to show. Only direct descendants of this root schedule category will be displayed.",
                                                        entityTypeGuid: $setup.EntityType.Schedule,
                                                        securityGrantToken: $setup.securityGrantToken
                                                    }, null, 8, ["modelValue", "entityTypeGuid", "securityGrantToken"])
                                                ])
                                            ])
                                        ]),
                                        _: 1
                                    }),
                                    createVNode($setup["PanelWidget"], { isDefaultOpen: true }, {
                                        header: withCtx(() => [
                                            _hoisted_21
                                        ]),
                                        default: withCtx(() => [
                                            createElementVNode("div", _hoisted_22, [
                                                createElementVNode("div", _hoisted_23, [
                                                    createVNode($setup["CheckBox"], {
                                                        modelValue: $setup.displayLocationSort,
                                                        "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => (($setup.displayLocationSort) = $event)),
                                                        label: "Display Location Sort",
                                                        help: "Determines if the location sort field should be shown."
                                                    }, null, 8, ["modelValue"])
                                                ]),
                                                createElementVNode("div", _hoisted_24, [
                                                    createVNode($setup["TextBox"], {
                                                        modelValue: $setup.locationSortLabel,
                                                        "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($setup.locationSortLabel) = $event)),
                                                        label: "Location Sort Label",
                                                        help: "The label to use for the location sort filter.",
                                                        rules: "required"
                                                    }, null, 8, ["modelValue"])
                                                ])
                                            ]),
                                            createElementVNode("div", _hoisted_25, [
                                                createElementVNode("div", _hoisted_26, [
                                                    createVNode($setup["CheckBox"], {
                                                        modelValue: $setup.displayLocationRangeFilter,
                                                        "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => (($setup.displayLocationRangeFilter) = $event)),
                                                        label: "Display Location Range Filter",
                                                        help: "When enabled a filter will be shown to limit results to a specified number of miles from the location selected or their mailing address if logged in. If the Location Sort entry is not enabled to be shown and the individual is not logged in then this filter will not be shown, even if enabled, as we will not be able to honor the filter."
                                                    }, null, 8, ["modelValue"])
                                                ]),
                                                _hoisted_27
                                            ])
                                        ]),
                                        _: 1
                                    }),
                                    createVNode($setup["PanelWidget"], { isDefaultOpen: false }, {
                                        header: withCtx(() => [
                                            _hoisted_28
                                        ]),
                                        default: withCtx(() => [
                                            createElementVNode("div", _hoisted_29, [
                                                createElementVNode("div", _hoisted_30, [
                                                    createVNode($setup["CheckBox"], {
                                                        modelValue: $setup.displayDateRange,
                                                        "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($setup.displayDateRange) = $event)),
                                                        label: "Display Date Range",
                                                        help: "When enabled, individuals would be able to filter the results by projects occurring inside the provided date range."
                                                    }, null, 8, ["modelValue"])
                                                ]),
                                                createElementVNode("div", _hoisted_31, [
                                                    createVNode($setup["CheckBox"], {
                                                        modelValue: $setup.displaySlotsAvailableFilter,
                                                        "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => (($setup.displaySlotsAvailableFilter) = $event)),
                                                        label: "Display Slots Available Filter",
                                                        help: "When enabled allows the individual to find projects with \"at least\" or \"no more than\" the provided spots available."
                                                    }, null, 8, ["modelValue"])
                                                ])
                                            ])
                                        ]),
                                        _: 1
                                    }),
                                    createVNode($setup["PanelWidget"], { isDefaultOpen: true }, {
                                        header: withCtx(() => [
                                            _hoisted_32
                                        ]),
                                        default: withCtx(() => [
                                            createVNode($setup["CodeEditor"], {
                                                modelValue: $setup.resultsLavaTemplate,
                                                "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => (($setup.resultsLavaTemplate) = $event)),
                                                label: "Results Lava Template",
                                                help: "The Lava template to show with the results of the search.",
                                                mode: "lava",
                                                rules: "required"
                                            }, null, 8, ["modelValue"]),
                                            createVNode($setup["CodeEditor"], {
                                                modelValue: $setup.resultsHeaderLavaTemplate,
                                                "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => (($setup.resultsHeaderLavaTemplate) = $event)),
                                                label: "Results Header Lava Template",
                                                help: "The Lava Template to use to show the results header.",
                                                mode: "lava"
                                            }, null, 8, ["modelValue"])
                                        ]),
                                        _: 1
                                    }),
                                    createVNode($setup["PanelWidget"], { isDefaultOpen: true }, {
                                        header: withCtx(() => [
                                            _hoisted_33
                                        ]),
                                        default: withCtx(() => [
                                            createElementVNode("div", _hoisted_34, [
                                                createElementVNode("div", _hoisted_35, [
                                                    createVNode($setup["PagePicker"], {
                                                        modelValue: $setup.projectDetailPage,
                                                        "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($setup.projectDetailPage) = $event)),
                                                        label: "Project Detail Page",
                                                        help: "The page reference to pass to the Lava template for the details of the project.",
                                                        rules: "required",
                                                        promptForPageRoute: true,
                                                        securityGrantToken: $setup.securityGrantToken
                                                    }, null, 8, ["modelValue", "securityGrantToken"])
                                                ]),
                                                createElementVNode("div", _hoisted_36, [
                                                    createVNode($setup["PagePicker"], {
                                                        modelValue: $setup.registrationPage,
                                                        "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => (($setup.registrationPage) = $event)),
                                                        label: "Registration Page",
                                                        help: "The page reference to pass to the Lava template for the registration page.",
                                                        rules: "required",
                                                        promptForPageRoute: true,
                                                        securityGrantToken: $setup.securityGrantToken
                                                    }, null, 8, ["modelValue", "securityGrantToken"])
                                                ])
                                            ])
                                        ]),
                                        _: 1
                                    })
                                ]))
                    ]),
                    _: 1
                }, 8, ["modelValue", "saveText"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
