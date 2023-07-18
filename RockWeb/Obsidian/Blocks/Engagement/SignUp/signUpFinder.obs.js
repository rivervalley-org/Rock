System.register(['tslib', 'vue', './SignUpFinder/signUpFilterType.js', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/dropDownList', '@Obsidian/Utility/component', '@Obsidian/Controls/alert.obs', '@Obsidian/Controls/dateRangePicker', '@Obsidian/Controls/inputGroupDropDown.obs', '@Obsidian/Controls/loading', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/rockAttributeFilter', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockLabel', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/textBox', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/block'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, computed, openBlock, createElementBlock, Fragment, createBlock, createCommentVNode, ref, nextTick, createElementVNode, createTextVNode, withCtx, toDisplayString, createVNode, normalizeClass, renderList, SignUpFilterType, CheckBoxList, DropDownList, useVModelPassthrough, Alert, DateRangePicker, InputGroupDropDown, Loading, NumberBox, RockAttributeFilter, RockButton, RockLabel, RockForm, TextBox, BtnSize, BtnType, useConfigurationValues, useInvokeBlockAction, useReloadBlock, onConfigurationValuesChanged;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            createBlock = module.createBlock;
            createCommentVNode = module.createCommentVNode;
            ref = module.ref;
            nextTick = module.nextTick;
            createElementVNode = module.createElementVNode;
            createTextVNode = module.createTextVNode;
            withCtx = module.withCtx;
            toDisplayString = module.toDisplayString;
            createVNode = module.createVNode;
            normalizeClass = module.normalizeClass;
            renderList = module.renderList;
        }, function (module) {
            SignUpFilterType = module.SignUpFilterType;
        }, function (module) {
            CheckBoxList = module["default"];
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            DateRangePicker = module["default"];
        }, function (module) {
            InputGroupDropDown = module["default"];
        }, function (module) {
            Loading = module["default"];
        }, function (module) {
            NumberBox = module["default"];
        }, function (module) {
            RockAttributeFilter = module["default"];
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            RockLabel = module["default"];
        }, function (module) {
            RockForm = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            BtnSize = module.BtnSize;
        }, function (module) {
            BtnType = module.BtnType;
        }, function (module) {
            useConfigurationValues = module.useConfigurationValues;
            useInvokeBlockAction = module.useInvokeBlockAction;
            useReloadBlock = module.useReloadBlock;
            onConfigurationValuesChanged = module.onConfigurationValuesChanged;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main$1 = defineComponent({
                name: 'signUpFilter.partial',
                props: {
                    modelValue: {
                        type: Object,
                        required: true
                    },
                    items: {
                        type: Array,
                        required: true
                    },
                    label: {
                        type: String,
                        required: true
                    },
                    displayAs: {
                        type: String,
                        default: SignUpFilterType.Checkboxes
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    useVModelPassthrough(props, "modelValue", emit);
                    const displayAsDropDown = computed(() => {
                        return props.displayAs === SignUpFilterType.MultiSelectDropDown;
                    });
                    const __returned__ = { props, emit, displayAsDropDown, CheckBoxList, DropLownList: DropDownList };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render$1(_ctx, _cache, $props, $setup, $data, $options) {
                var _a;
                return (openBlock(), createElementBlock(Fragment, null, [
                    (!$setup.displayAsDropDown)
                        ? (openBlock(), createBlock($setup["CheckBoxList"], {
                            key: 0,
                            modelValue: $setup.props.modelValue,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.props.modelValue) = $event)),
                            label: $setup.props.label,
                            items: $setup.props.items,
                            horizontal: true,
                            repeatColumns: 4
                        }, null, 8, ["modelValue", "label", "items"]))
                        : createCommentVNode("v-if", true),
                    ($setup.displayAsDropDown)
                        ? (openBlock(), createBlock($setup["DropLownList"], {
                            key: 1,
                            modelValue: $setup.props.modelValue,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.props.modelValue) = $event)),
                            label: (_a = $setup.props.label) !== null && _a !== void 0 ? _a : '',
                            items: $setup.props.items,
                            multiple: true
                        }, null, 8, ["modelValue", "label", "items"]))
                        : createCommentVNode("v-if", true)
                ], 64));
            }
            const exportHelper$1 = _sfc_main$1;
            for (const [key, val] of [["render", render$1]]) {
                exportHelper$1[key] = val;
            }

            const _sfc_main = defineComponent({
                name: 'signUpFinder',
                setup(__props, { expose }) {
                    var _a, _b, _c, _d, _e;
                    expose();
                    const config = useConfigurationValues();
                    const invokeBlockAction = useInvokeBlockAction();
                    const reloadBlock = useReloadBlock();
                    const slotsAvailableComparisonTypes = [
                        {
                            value: "AtLeast",
                            text: "At Least"
                        },
                        {
                            value: "NoMoreThan",
                            text: "No More Than"
                        }
                    ];
                    const errorMessage = ref("");
                    const isSearching = ref(config.loadResultsOnInitialPageLoad);
                    const projectTypes = ref((_a = config.projectTypes) !== null && _a !== void 0 ? _a : []);
                    const campuses = ref((_b = config.campuses) !== null && _b !== void 0 ? _b : []);
                    const namedSchedules = ref((_c = config.namedSchedules) !== null && _c !== void 0 ? _c : []);
                    const attributesByProjectType = ref((_d = config.attributesByProjectType) !== null && _d !== void 0 ? _d : {});
                    const attributeGuidsByProjectType = {};
                    const comparisonValuesByAttributeGuid = {};
                    const selectedProjectTypes = ref([]);
                    const selectedCampuses = ref(((_e = config.pageCampusContext) === null || _e === void 0 ? void 0 : _e.value) ? [...config.pageCampusContext.value] : []);
                    const selectedNamedSchedules = ref([]);
                    const selectedDateRange = ref({});
                    const selectedLocationSort = ref("");
                    const selectedLocationRange = ref(null);
                    const selectedSlotsAvailableComparisonType = ref("AtLeast");
                    const selectedSlotsAvailable = ref(null);
                    const resultsHeaderElement = ref(null);
                    const resultsElement = ref(null);
                    const blockErrorMessage = computed(() => {
                        return config.errorMessage;
                    });
                    const columnClass = computed(() => {
                        let colWidth;
                        switch (config.filterColumns) {
                            case 4:
                                colWidth = 3;
                                break;
                            case 3:
                                colWidth = 4;
                                break;
                            case 2:
                                colWidth = 6;
                                break;
                            default:
                                colWidth = 12;
                        }
                        return `col-md-${colWidth} mb-3`;
                    });
                    const displayAs = computed(() => {
                        return config.displayProjectFiltersAs === SignUpFilterType.MultiSelectDropDown
                            ? SignUpFilterType.MultiSelectDropDown
                            : SignUpFilterType.Checkboxes;
                    });
                    const attributeFilters = computed(() => {
                        const filters = [];
                        Object.keys(attributesByProjectType.value).forEach((projectTypeGuid) => {
                            const attributes = attributesByProjectType.value[projectTypeGuid];
                            if (!attributes) {
                                return;
                            }
                            var projectTypeAttributeGuids = attributeGuidsByProjectType[projectTypeGuid];
                            if (!projectTypeAttributeGuids) {
                                projectTypeAttributeGuids = [];
                                attributeGuidsByProjectType[projectTypeGuid] = projectTypeAttributeGuids;
                            }
                            Object.keys(attributes).forEach((attributeKey) => {
                                const attribute = attributes[attributeKey];
                                const attributeGuid = attribute === null || attribute === void 0 ? void 0 : attribute.attributeGuid;
                                if (!attributeGuid) {
                                    return;
                                }
                                if (!projectTypeAttributeGuids.includes(attributeGuid)) {
                                    projectTypeAttributeGuids.push(attributeGuid);
                                }
                                let comparisonValue = comparisonValuesByAttributeGuid[attributeGuid];
                                if (!comparisonValue) {
                                    comparisonValue = { value: "" };
                                    comparisonValuesByAttributeGuid[attributeGuid] = comparisonValue;
                                }
                                filters.push({
                                    key: attributeGuid,
                                    attribute,
                                    comparisonValue
                                });
                            });
                        });
                        return filters;
                    });
                    function tryLoadResultsOnInitialPageLoad() {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (config.loadResultsOnInitialPageLoad) {
                                yield onSearch();
                            }
                        });
                    }
                    function getActiveAttributeFiltersByProjectType() {
                        var active = {};
                        Object.keys(attributeGuidsByProjectType).forEach((projectTypeGuid) => {
                            if (selectedProjectTypes.value.length && !selectedProjectTypes.value.includes(projectTypeGuid)) {
                                return;
                            }
                            const comparisonValues = {};
                            attributeGuidsByProjectType[projectTypeGuid].forEach((attributeGuid) => {
                                comparisonValues[attributeGuid] = comparisonValuesByAttributeGuid[attributeGuid];
                            });
                            active[projectTypeGuid] = comparisonValues;
                        });
                        return active;
                    }
                    function onProjectTypesUpdated() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            errorMessage.value = "";
                            const selectedProjectTypeGuidStrings = selectedProjectTypes.value;
                            const result = yield invokeBlockAction("GetUpdatedAttributes", { selectedProjectTypeGuidStrings });
                            if (!result.isSuccess) {
                                errorMessage.value = result.errorMessage || "Unknown error when trying to load updated filters.";
                                return;
                            }
                            attributesByProjectType.value = (_a = result.data) !== null && _a !== void 0 ? _a : {};
                        });
                    }
                    function onSearch() {
                        return __awaiter(this, void 0, void 0, function* () {
                            isSearching.value = true;
                            errorMessage.value = "";
                            const bag = {
                                projectTypes: selectedProjectTypes.value,
                                campuses: selectedCampuses.value,
                                namedSchedules: selectedNamedSchedules.value,
                                attributeFiltersByProjectType: getActiveAttributeFiltersByProjectType(),
                                startDate: selectedDateRange.value.lowerValue,
                                endDate: selectedDateRange.value.upperValue,
                                locationSort: selectedLocationSort.value,
                                locationRange: selectedLocationRange.value,
                                slotsAvailableComparisonType: selectedSlotsAvailableComparisonType.value,
                                slotsAvailable: selectedSlotsAvailable.value
                            };
                            const result = yield invokeBlockAction("GetFilteredProjects", { bag });
                            isSearching.value = false;
                            if (!result.isSuccess) {
                                errorMessage.value = result.errorMessage || "Unknown error while trying to load projects.";
                                return;
                            }
                            nextTick(() => {
                                var _a, _b;
                                if (resultsHeaderElement.value && ((_a = result.data) === null || _a === void 0 ? void 0 : _a.resultsHeaderHtml)) {
                                    resultsHeaderElement.value.innerHTML = result.data.resultsHeaderHtml;
                                }
                                if (resultsElement.value && ((_b = result.data) === null || _b === void 0 ? void 0 : _b.resultsHtml)) {
                                    resultsElement.value.innerHTML = result.data.resultsHtml;
                                }
                            });
                        });
                    }
                    function onClearBtnClick() {
                        selectedProjectTypes.value = [];
                        selectedCampuses.value = [];
                        selectedNamedSchedules.value = [];
                        selectedDateRange.value = {};
                        selectedLocationSort.value = "";
                        selectedLocationRange.value = null;
                        selectedSlotsAvailableComparisonType.value = "AtLeast";
                        selectedSlotsAvailable.value = null;
                        Object.keys(comparisonValuesByAttributeGuid).forEach((key) => {
                            comparisonValuesByAttributeGuid[key] = { value: "" };
                        });
                        onSearch();
                    }
                    onConfigurationValuesChanged(reloadBlock);
                    tryLoadResultsOnInitialPageLoad();
                    const __returned__ = { config, invokeBlockAction, reloadBlock, slotsAvailableComparisonTypes, errorMessage, isSearching, projectTypes, campuses, namedSchedules, attributesByProjectType, attributeGuidsByProjectType, comparisonValuesByAttributeGuid, selectedProjectTypes, selectedCampuses, selectedNamedSchedules, selectedDateRange, selectedLocationSort, selectedLocationRange, selectedSlotsAvailableComparisonType, selectedSlotsAvailable, resultsHeaderElement, resultsElement, blockErrorMessage, columnClass, displayAs, attributeFilters, tryLoadResultsOnInitialPageLoad, getActiveAttributeFiltersByProjectType, onProjectTypesUpdated, onSearch, onClearBtnClick, SignUpFilter: exportHelper$1, Alert, DateRangePicker, InputGroupDropDown, Loading, NumberBox, RockAttributeFilter, RockButton, RockLabel, RockForm, TextBox, BtnSize, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { key: 2 };
            const _hoisted_2 = { class: "row mb-3" };
            const _hoisted_3 = { class: "d-flex flex-wrap" };
            const _hoisted_4 = createElementVNode("span", { class: "align-self-center mt-1 ml-2 text-semibold" }, "miles", -1);
            const _hoisted_5 = createTextVNode("Spots Available");
            const _hoisted_6 = { class: "input-group" };
            const _hoisted_7 = { class: "row" };
            const _hoisted_8 = { class: "col-md-12" };
            const _hoisted_9 = createTextVNode("Search");
            const _hoisted_10 = createTextVNode("Clear");
            const _hoisted_11 = { class: "mt-5" };
            const _hoisted_12 = { ref: "resultsHeaderElement" };
            const _hoisted_13 = { ref: "resultsElement" };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($setup.blockErrorMessage)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 0,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.blockErrorMessage), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    ($setup.errorMessage)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 1,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.errorMessage), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    (!$setup.blockErrorMessage)
                        ? (openBlock(), createElementBlock("div", _hoisted_1, [
                            createVNode($setup["RockForm"], { onSubmit: $setup.onSearch }, {
                                default: withCtx(() => [
                                    createElementVNode("div", _hoisted_2, [
                                        ($setup.projectTypes.length)
                                            ? (openBlock(), createElementBlock("div", {
                                                key: 0,
                                                class: normalizeClass($setup.columnClass)
                                            }, [
                                                createVNode($setup["SignUpFilter"], {
                                                    modelValue: $setup.selectedProjectTypes,
                                                    "onUpdate:modelValue": [
                                                        _cache[0] || (_cache[0] = $event => (($setup.selectedProjectTypes) = $event)),
                                                        $setup.onProjectTypesUpdated
                                                    ],
                                                    label: $setup.config.projectTypeFilterLabel,
                                                    items: $setup.projectTypes,
                                                    displayAs: $setup.displayAs
                                                }, null, 8, ["modelValue", "label", "items", "displayAs"])
                                            ], 2))
                                            : createCommentVNode("v-if", true),
                                        ($setup.campuses.length)
                                            ? (openBlock(), createElementBlock("div", {
                                                key: 1,
                                                class: normalizeClass($setup.columnClass)
                                            }, [
                                                createVNode($setup["SignUpFilter"], {
                                                    modelValue: $setup.selectedCampuses,
                                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.selectedCampuses) = $event)),
                                                    label: "Campus",
                                                    items: $setup.campuses,
                                                    displayAs: $setup.displayAs
                                                }, null, 8, ["modelValue", "items", "displayAs"])
                                            ], 2))
                                            : createCommentVNode("v-if", true),
                                        ($setup.namedSchedules.length)
                                            ? (openBlock(), createElementBlock("div", {
                                                key: 2,
                                                class: normalizeClass($setup.columnClass)
                                            }, [
                                                createVNode($setup["SignUpFilter"], {
                                                    modelValue: $setup.selectedNamedSchedules,
                                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.selectedNamedSchedules) = $event)),
                                                    label: $setup.config.namedScheduleFilterLabel,
                                                    items: $setup.namedSchedules,
                                                    displayAs: $setup.displayAs
                                                }, null, 8, ["modelValue", "label", "items", "displayAs"])
                                            ], 2))
                                            : createCommentVNode("v-if", true),
                                        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.attributeFilters, (a) => {
                                            return (openBlock(), createElementBlock("div", {
                                                key: a.key,
                                                class: normalizeClass($setup.columnClass)
                                            }, [
                                                createVNode($setup["RockLabel"], null, {
                                                    default: withCtx(() => [
                                                        createTextVNode(toDisplayString(a.attribute.name), 1)
                                                    ]),
                                                    _: 2
                                                }, 1024),
                                                createVNode($setup["RockAttributeFilter"], {
                                                    modelValue: $setup.comparisonValuesByAttributeGuid[a.key],
                                                    "onUpdate:modelValue": $event => (($setup.comparisonValuesByAttributeGuid[a.key]) = $event),
                                                    attribute: a.attribute
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "attribute"])
                                            ], 2));
                                        }), 128)),
                                        ($setup.config.displayDateRange)
                                            ? (openBlock(), createElementBlock("div", {
                                                key: 3,
                                                class: normalizeClass($setup.columnClass)
                                            }, [
                                                createVNode($setup["DateRangePicker"], {
                                                    modelValue: $setup.selectedDateRange,
                                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.selectedDateRange) = $event)),
                                                    label: "Date Range",
                                                    disallowPastDateSelection: true
                                                }, null, 8, ["modelValue"])
                                            ], 2))
                                            : createCommentVNode("v-if", true),
                                        ($setup.config.displayLocationSort)
                                            ? (openBlock(), createElementBlock("div", {
                                                key: 4,
                                                class: normalizeClass($setup.columnClass)
                                            }, [
                                                createVNode($setup["TextBox"], {
                                                    modelValue: $setup.selectedLocationSort,
                                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.selectedLocationSort) = $event)),
                                                    label: $setup.config.locationSortLabel,
                                                    class: "input-max-w-xl"
                                                }, null, 8, ["modelValue", "label"])
                                            ], 2))
                                            : createCommentVNode("v-if", true),
                                        ($setup.config.displayLocationRangeFilter)
                                            ? (openBlock(), createElementBlock("div", {
                                                key: 5,
                                                class: normalizeClass($setup.columnClass)
                                            }, [
                                                createElementVNode("div", _hoisted_3, [
                                                    createVNode($setup["NumberBox"], {
                                                        modelValue: $setup.selectedLocationRange,
                                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.selectedLocationRange) = $event)),
                                                        label: "Within",
                                                        class: "input-max-w-md"
                                                    }, null, 8, ["modelValue"]),
                                                    _hoisted_4
                                                ])
                                            ], 2))
                                            : createCommentVNode("v-if", true),
                                        ($setup.config.displaySlotsAvailableFilter)
                                            ? (openBlock(), createElementBlock("div", {
                                                key: 6,
                                                class: normalizeClass($setup.columnClass)
                                            }, [
                                                createVNode($setup["RockLabel"], null, {
                                                    default: withCtx(() => [
                                                        _hoisted_5
                                                    ]),
                                                    _: 1
                                                }),
                                                createElementVNode("div", _hoisted_6, [
                                                    createVNode($setup["InputGroupDropDown"], {
                                                        items: $setup.slotsAvailableComparisonTypes,
                                                        modelValue: $setup.selectedSlotsAvailableComparisonType,
                                                        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($setup.selectedSlotsAvailableComparisonType) = $event))
                                                    }, null, 8, ["modelValue"]),
                                                    createVNode($setup["NumberBox"], {
                                                        modelValue: $setup.selectedSlotsAvailable,
                                                        "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($setup.selectedSlotsAvailable) = $event)),
                                                        class: "input-max-w-md"
                                                    }, null, 8, ["modelValue"])
                                                ])
                                            ], 2))
                                            : createCommentVNode("v-if", true)
                                    ]),
                                    createElementVNode("div", _hoisted_7, [
                                        createElementVNode("div", _hoisted_8, [
                                            createVNode($setup["RockButton"], {
                                                type: "submit",
                                                btnType: $setup.BtnType.Warning,
                                                btnSize: $setup.BtnSize.ExtraSmall,
                                                class: "mr-3",
                                                disabled: $setup.isSearching
                                            }, {
                                                default: withCtx(() => [
                                                    _hoisted_9
                                                ]),
                                                _: 1
                                            }, 8, ["btnType", "btnSize", "disabled"]),
                                            createVNode($setup["RockButton"], {
                                                type: "button",
                                                btnType: $setup.BtnType.Link,
                                                btnSize: $setup.BtnSize.ExtraSmall,
                                                disabled: $setup.isSearching,
                                                onClick: $setup.onClearBtnClick
                                            }, {
                                                default: withCtx(() => [
                                                    _hoisted_10
                                                ]),
                                                _: 1
                                            }, 8, ["btnType", "btnSize", "disabled"])
                                        ])
                                    ])
                                ]),
                                _: 1
                            }),
                            createElementVNode("div", _hoisted_11, [
                                createVNode($setup["Loading"], { isLoading: $setup.isSearching }, {
                                    default: withCtx(() => [
                                        createElementVNode("div", _hoisted_12, null, 512),
                                        createElementVNode("div", _hoisted_13, null, 512)
                                    ]),
                                    _: 1
                                }, 8, ["isLoading"])
                            ])
                        ]))
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
