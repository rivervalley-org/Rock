System.register(["vue", "./utils", "../Elements/checkBox", "../Elements/checkBoxList", "../Elements/dropDownList", "../Services/boolean", "../Util/guid"], function (exports_1, context_1) {
    "use strict";
    var vue_1, utils_1, checkBox_1, checkBoxList_1, dropDownList_1, boolean_1, guid_1, EditComponent, FilterComponent, ConfigurationComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (checkBox_1_1) {
                checkBox_1 = checkBox_1_1;
            },
            function (checkBoxList_1_1) {
                checkBoxList_1 = checkBoxList_1_1;
            },
            function (dropDownList_1_1) {
                dropDownList_1 = dropDownList_1_1;
            },
            function (boolean_1_1) {
                boolean_1 = boolean_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            }
        ],
        execute: function () {
            exports_1("EditComponent", EditComponent = vue_1.defineComponent({
                name: "CampusField.Edit",
                components: {
                    DropDownList: dropDownList_1.default
                },
                props: utils_1.getFieldEditorProps(),
                setup(props, { emit }) {
                    var _a;
                    const internalValue = vue_1.ref((_a = props.modelValue) !== null && _a !== void 0 ? _a : "");
                    const options = vue_1.computed(() => {
                        var _a;
                        try {
                            return JSON.parse((_a = props.configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                        }
                        catch (_b) {
                            return [];
                        }
                    });
                    vue_1.watch(() => props.modelValue, () => { var _a; return internalValue.value = (_a = props.modelValue) !== null && _a !== void 0 ? _a : ""; });
                    vue_1.watch(internalValue, () => emit("update:modelValue", internalValue.value));
                    return {
                        internalValue,
                        options
                    };
                },
                template: `
<DropDownList v-model="internalValue" :options="options" />
`
            }));
            exports_1("FilterComponent", FilterComponent = vue_1.defineComponent({
                name: "CampusField.Filter",
                components: {
                    CheckBoxList: checkBoxList_1.default
                },
                props: utils_1.getFieldEditorProps(),
                setup(props, { emit }) {
                    const internalValue = vue_1.ref(props.modelValue.split(",").filter(s => s !== ""));
                    const options = vue_1.computed(() => {
                        var _a;
                        try {
                            return JSON.parse((_a = props.configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                        }
                        catch (_b) {
                            return [];
                        }
                    });
                    vue_1.watch(() => props.modelValue, () => internalValue.value = props.modelValue.split(",").filter(s => s !== ""));
                    vue_1.watch(internalValue, () => emit("update:modelValue", internalValue.value.join(",")));
                    return {
                        internalValue,
                        options
                    };
                },
                template: `
<CheckBoxList v-model="internalValue" :options="options" />
`
            }));
            exports_1("ConfigurationComponent", ConfigurationComponent = vue_1.defineComponent({
                name: "CampusField.Configuration",
                components: {
                    CheckBoxList: checkBoxList_1.default,
                    CheckBox: checkBox_1.default
                },
                props: utils_1.getFieldConfigurationProps(),
                setup(props, { emit }) {
                    const includeInactive = vue_1.ref(false);
                    const filterCampusTypes = vue_1.ref([]);
                    const filterCampusStatus = vue_1.ref([]);
                    const selectableCampuses = vue_1.ref([]);
                    const campusTypeOptions = vue_1.ref([]);
                    const campusStatusOptions = vue_1.ref([]);
                    const allCampusItems = vue_1.ref([]);
                    const allCampusOptions = vue_1.computed(() => {
                        return allCampusItems.value.map((c) => {
                            return {
                                value: c.guid,
                                text: c.name
                            };
                        });
                    });
                    const campusOptions = vue_1.computed(() => {
                        return allCampusItems.value.filter(c => {
                            if (!includeInactive.value && !c.isActive) {
                                return false;
                            }
                            if (filterCampusTypes.value.length) {
                                if (filterCampusTypes.value.filter(o => guid_1.areEqual(o, c.type)).length === 0) {
                                    return false;
                                }
                            }
                            if (filterCampusStatus.value.length) {
                                if (filterCampusStatus.value.filter(o => guid_1.areEqual(o, c.status)).length === 0) {
                                    return false;
                                }
                            }
                            if (selectableCampuses.value.length) {
                                if (selectableCampuses.value.filter(o => guid_1.areEqual(o, c.guid)).length === 0) {
                                    return false;
                                }
                            }
                            return true;
                        }).map(c => {
                            return {
                                value: c.guid,
                                text: c.name
                            };
                        });
                    });
                    const maybeUpdateModelValue = () => {
                        var _a, _b, _c, _d, _e;
                        const newValue = {};
                        newValue["includeInactive"] = (_a = boolean_1.asTrueFalseOrNull(includeInactive.value)) !== null && _a !== void 0 ? _a : "False";
                        newValue["filterCampusTypes"] = filterCampusTypes.value.join(",");
                        newValue["filterCampusStatus"] = filterCampusStatus.value.join(",");
                        newValue["selectableCampuses"] = selectableCampuses.value.join(",");
                        const anyValueChanged = newValue["includeInactive"] !== ((_b = props.modelValue["includeInactive"]) !== null && _b !== void 0 ? _b : "False")
                            || newValue["filterCampusTypes"] !== ((_c = props.modelValue["filterCampusTypes"]) !== null && _c !== void 0 ? _c : "")
                            || newValue["filterCampusStatus"] !== ((_d = props.modelValue["filterCampusStatus"]) !== null && _d !== void 0 ? _d : "")
                            || newValue["selectableCampuses"] !== ((_e = props.modelValue["selectableCampuses"]) !== null && _e !== void 0 ? _e : "");
                        if (anyValueChanged) {
                            emit("update:modelValue", newValue);
                            return true;
                        }
                        else {
                            return false;
                        }
                    };
                    const maybeUpdateConfiguration = (key, value) => {
                        if (maybeUpdateModelValue()) {
                            emit("updateConfigurationValue", key, value);
                        }
                    };
                    vue_1.watch(() => [props.modelValue, props.configurationProperties], () => {
                        var _a, _b, _c, _d, _e, _f;
                        const campuses = props.configurationProperties["campuses"];
                        const campusTypes = props.configurationProperties["campusTypes"];
                        const campusStatuses = props.configurationProperties["campusStatuses"];
                        allCampusItems.value = campuses ? JSON.parse(campuses) : [];
                        campusTypeOptions.value = campusTypes ? JSON.parse(campusTypes) : [];
                        campusStatusOptions.value = campusStatuses ? JSON.parse(campusStatuses) : [];
                        includeInactive.value = boolean_1.asBoolean(props.modelValue["includeInactive"]);
                        filterCampusTypes.value = ((_b = (_a = props.modelValue["filterCampusTypes"]) === null || _a === void 0 ? void 0 : _a.split(",")) !== null && _b !== void 0 ? _b : []).filter(s => s !== "");
                        filterCampusStatus.value = ((_d = (_c = props.modelValue["filterCampusStatus"]) === null || _c === void 0 ? void 0 : _c.split(",")) !== null && _d !== void 0 ? _d : []).filter(s => s !== "");
                        selectableCampuses.value = ((_f = (_e = props.modelValue["selectableCampuses"]) === null || _e === void 0 ? void 0 : _e.split(",")) !== null && _f !== void 0 ? _f : []).filter(s => s !== "");
                    }, {
                        immediate: true
                    });
                    vue_1.watch([], () => {
                        if (maybeUpdateModelValue()) {
                            emit("updateConfiguration");
                        }
                    });
                    vue_1.watch(includeInactive, () => { var _a; return maybeUpdateConfiguration("includeInactive", (_a = boolean_1.asTrueFalseOrNull(includeInactive.value)) !== null && _a !== void 0 ? _a : "False"); });
                    vue_1.watch(filterCampusTypes, () => maybeUpdateConfiguration("filterCampusTypes", filterCampusTypes.value.join(",")));
                    vue_1.watch(filterCampusStatus, () => maybeUpdateConfiguration("filterCampusStatus", filterCampusStatus.value.join(",")));
                    vue_1.watch(selectableCampuses, () => maybeUpdateConfiguration("selectableCampuses", selectableCampuses.value.join(",")));
                    vue_1.watch(campusOptions, () => emit("updateConfigurationValue", "values", JSON.stringify(campusOptions.value)));
                    return {
                        allCampusOptions,
                        campusStatusOptions,
                        campusTypeOptions,
                        filterCampusStatus,
                        filterCampusTypes,
                        includeInactive,
                        selectableCampuses
                    };
                },
                template: `
<div>
    <CheckBox v-model="includeInactive"
        label="Include Inactive"
        help="When set, inactive campuses will be included in the list." />

    <CheckBoxList v-model="filterCampusTypes"
        label="Filter Campus Types"
        help="When set this will filter the campuses displayed in the list to the selected Types. Setting a filter will cause the campus picker to display even if 0 campuses are in the list."
        :options="campusTypeOptions"
        horizontal />

    <CheckBoxList v-model="filterCampusStatus"
        label="Filter Campus Status"
        help="When set this will filter the campuses displayed in the list to the selected Status. Setting a filter will cause the campus picker to display even if 0 campuses are in the list."
        :options="campusStatusOptions"
        horizontal />

    <CheckBoxList v-model="selectableCampuses"
        label="Selectable Campuses"
        :options="allCampusOptions"
        horizontal />
</div>
`
            }));
        }
    };
});
//# sourceMappingURL=campusFieldComponents.js.map