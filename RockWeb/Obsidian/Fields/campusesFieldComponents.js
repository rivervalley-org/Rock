System.register(["vue", "./utils", "../Elements/checkBox", "../Elements/checkBoxList", "../Elements/numberBox", "../Services/number", "../Util/guid", "../Services/boolean", "../Util/util"], function (exports_1, context_1) {
    "use strict";
    var vue_1, utils_1, checkBox_1, checkBoxList_1, numberBox_1, number_1, guid_1, boolean_1, util_1, EditComponent, ConfigurationComponent;
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
            function (numberBox_1_1) {
                numberBox_1 = numberBox_1_1;
            },
            function (number_1_1) {
                number_1 = number_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (boolean_1_1) {
                boolean_1 = boolean_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }
        ],
        execute: function () {
            exports_1("EditComponent", EditComponent = vue_1.defineComponent({
                name: "CampusesField.Edit",
                components: {
                    CheckBoxList: checkBoxList_1.default
                },
                props: utils_1.getFieldEditorProps(),
                setup(props, context) {
                    const internalValue = vue_1.ref(props.modelValue ? props.modelValue.split(",") : []);
                    const options = vue_1.computed(() => {
                        var _a;
                        try {
                            return JSON.parse((_a = props.configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                        }
                        catch (_b) {
                            return [];
                        }
                    });
                    const repeatColumns = vue_1.computed(() => {
                        var _a;
                        const repeatColumnsConfig = props.configurationValues["repeatColumns"];
                        return (_a = number_1.toNumberOrNull(repeatColumnsConfig)) !== null && _a !== void 0 ? _a : 4;
                    });
                    vue_1.watch(() => props.modelValue, () => {
                        util_1.updateRefValue(internalValue, props.modelValue ? props.modelValue.split(",") : []);
                    });
                    vue_1.watch(internalValue, () => {
                        context.emit("update:modelValue", internalValue.value.join(","));
                    });
                    return {
                        internalValue,
                        options,
                        repeatColumns
                    };
                },
                template: `
<CheckBoxList v-model="internalValue" horizontal :options="options" :repeatColumns="repeatColumns" />
`
            }));
            exports_1("ConfigurationComponent", ConfigurationComponent = vue_1.defineComponent({
                name: "CampusesField.Configuration",
                components: {
                    CheckBox: checkBox_1.default,
                    CheckBoxList: checkBoxList_1.default,
                    NumberBox: numberBox_1.default
                },
                props: utils_1.getFieldConfigurationProps(),
                setup(props, { emit }) {
                    const enhancedSelection = vue_1.ref(false);
                    const numberOfColumns = vue_1.ref(null);
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
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                        const newValue = {};
                        newValue["enhancedselection"] = (_a = boolean_1.asTrueFalseOrNull(enhancedSelection.value)) !== null && _a !== void 0 ? _a : "False";
                        newValue["repeatColumns"] = (_c = (_b = numberOfColumns.value) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : "";
                        newValue["includeInactive"] = (_d = boolean_1.asTrueFalseOrNull(includeInactive.value)) !== null && _d !== void 0 ? _d : "False";
                        newValue["filterCampusTypes"] = filterCampusTypes.value.join(",");
                        newValue["filterCampusStatus"] = filterCampusStatus.value.join(",");
                        newValue["selectableCampuses"] = selectableCampuses.value.join(",");
                        newValue["values"] = JSON.stringify(campusOptions.value);
                        const anyValueChanged = newValue["enhancedselection"] !== ((_e = props.modelValue["enhancedselection"]) !== null && _e !== void 0 ? _e : "False")
                            || newValue["repeatColumns"] !== ((_f = props.modelValue["repeatColumns"]) !== null && _f !== void 0 ? _f : "")
                            || newValue["includeInactive"] !== ((_g = props.modelValue["includeInactive"]) !== null && _g !== void 0 ? _g : "False")
                            || newValue["filterCampusTypes"] !== ((_h = props.modelValue["filterCampusTypes"]) !== null && _h !== void 0 ? _h : "")
                            || newValue["filterCampusStatus"] !== ((_j = props.modelValue["filterCampusStatus"]) !== null && _j !== void 0 ? _j : "")
                            || newValue["selectableCampuses"] !== ((_k = props.modelValue["selectableCampuses"]) !== null && _k !== void 0 ? _k : "")
                            || newValue["values"] !== ((_l = props.modelValue["values"]) !== null && _l !== void 0 ? _l : "");
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
                        enhancedSelection.value = boolean_1.asBoolean(props.modelValue["enhancedselection"]);
                        numberOfColumns.value = number_1.toNumberOrNull(props.modelValue["repeatColumns"]);
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
                    vue_1.watch(enhancedSelection, () => { var _a; return maybeUpdateConfiguration("enhancedselection", (_a = boolean_1.asTrueFalseOrNull(enhancedSelection.value)) !== null && _a !== void 0 ? _a : "False"); });
                    vue_1.watch(numberOfColumns, () => { var _a, _b; return maybeUpdateConfiguration("repeatColumns", (_b = (_a = numberOfColumns.value) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""); });
                    vue_1.watch(includeInactive, () => { var _a; return maybeUpdateConfiguration("includeInactive", (_a = boolean_1.asTrueFalseOrNull(includeInactive.value)) !== null && _a !== void 0 ? _a : "False"); });
                    vue_1.watch(filterCampusTypes, () => maybeUpdateConfiguration("filterCampusTypes", filterCampusTypes.value.join(",")));
                    vue_1.watch(filterCampusStatus, () => maybeUpdateConfiguration("filterCampusStatus", filterCampusStatus.value.join(",")));
                    vue_1.watch(selectableCampuses, () => maybeUpdateConfiguration("selectableCampuses", selectableCampuses.value.join(",")));
                    vue_1.watch(campusOptions, () => maybeUpdateConfiguration("values", JSON.stringify(campusOptions.value)));
                    return {
                        allCampusOptions,
                        campusStatusOptions,
                        campusTypeOptions,
                        enhancedSelection,
                        filterCampusStatus,
                        filterCampusTypes,
                        includeInactive,
                        numberOfColumns,
                        selectableCampuses
                    };
                },
                template: `
<div>
    <CheckBox v-model="enhancedSelection"
        label="Enhanced For Long Lists"
        help="When set, will render a searchable selection of options." />

    <NumberBox v-if="!enhancedSelection"
        v-model="numberOfColumns"
        label="Number of Columns"
        help="Select how many columns the list should use before going to the next row. If blank or 0 then 4 columns will be displayed. There is no upper limit enforced here however the block this is used in might add contraints due to available space." />

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
//# sourceMappingURL=campusesFieldComponents.js.map