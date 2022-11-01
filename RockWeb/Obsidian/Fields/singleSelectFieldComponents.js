System.register(["vue", "./utils", "../Elements/checkBoxList", "../Elements/dropDownList", "../Elements/numberBox", "../Elements/radioButtonList", "../Elements/textBox", "../Services/number", "../Util/util"], function (exports_1, context_1) {
    "use strict";
    var vue_1, utils_1, checkBoxList_1, dropDownList_1, numberBox_1, radioButtonList_1, textBox_1, number_1, util_1, EditComponent, FilterComponent, controlTypeOptions, ConfigurationComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (checkBoxList_1_1) {
                checkBoxList_1 = checkBoxList_1_1;
            },
            function (dropDownList_1_1) {
                dropDownList_1 = dropDownList_1_1;
            },
            function (numberBox_1_1) {
                numberBox_1 = numberBox_1_1;
            },
            function (radioButtonList_1_1) {
                radioButtonList_1 = radioButtonList_1_1;
            },
            function (textBox_1_1) {
                textBox_1 = textBox_1_1;
            },
            function (number_1_1) {
                number_1 = number_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }
        ],
        execute: function () {
            exports_1("EditComponent", EditComponent = vue_1.defineComponent({
                name: "SingleSelectField.Edit",
                components: {
                    DropDownList: dropDownList_1.default,
                    RadioButtonList: radioButtonList_1.default
                },
                props: utils_1.getFieldEditorProps(),
                setup() {
                    return {
                        isRequired: vue_1.inject("isRequired")
                    };
                },
                data() {
                    return {
                        internalValue: ""
                    };
                },
                computed: {
                    options() {
                        var _a;
                        try {
                            const providedOptions = JSON.parse((_a = this.configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                            if (this.isRadioButtons && !this.isRequired) {
                                providedOptions.unshift({
                                    text: "None",
                                    value: ""
                                });
                            }
                            return providedOptions;
                        }
                        catch (_b) {
                            return [];
                        }
                    },
                    ddlConfigAttributes() {
                        const attributes = {};
                        const fieldTypeConfig = this.configurationValues["fieldtype"];
                        if (fieldTypeConfig === "ddl_enhanced") {
                            attributes.enhanceForLongLists = true;
                        }
                        return attributes;
                    },
                    rbConfigAttributes() {
                        const attributes = {};
                        const repeatColumnsConfig = this.configurationValues["repeatColumns"];
                        if (repeatColumnsConfig) {
                            attributes["repeatColumns"] = number_1.toNumberOrNull(repeatColumnsConfig) || 0;
                        }
                        return attributes;
                    },
                    isRadioButtons() {
                        const fieldTypeConfig = this.configurationValues["fieldtype"];
                        return fieldTypeConfig === "rb";
                    }
                },
                watch: {
                    internalValue() {
                        this.$emit("update:modelValue", this.internalValue);
                    },
                    modelValue: {
                        immediate: true,
                        handler() {
                            this.internalValue = this.modelValue || "";
                        }
                    }
                },
                template: `
<RadioButtonList v-if="isRadioButtons" v-model="internalValue" v-bind="rbConfigAttributes" :options="options" horizontal />
<DropDownList v-else v-model="internalValue" v-bind="ddlConfigAttributes" :options="options" />
`
            }));
            exports_1("FilterComponent", FilterComponent = vue_1.defineComponent({
                name: "SingleSelectField.Filter",
                components: {
                    CheckBoxList: checkBoxList_1.default
                },
                props: utils_1.getFieldEditorProps(),
                setup(props, { emit }) {
                    const internalValue = vue_1.ref(props.modelValue.split(",").filter(v => v !== ""));
                    const options = vue_1.computed(() => {
                        var _a;
                        try {
                            const providedOptions = JSON.parse((_a = props.configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                            return providedOptions;
                        }
                        catch (_b) {
                            return [];
                        }
                    });
                    vue_1.watch(() => props.modelValue, () => {
                        util_1.updateRefValue(internalValue, props.modelValue.split(",").filter(v => v !== ""));
                    });
                    vue_1.watch(internalValue, () => {
                        emit("update:modelValue", internalValue.value.join(","));
                    });
                    return {
                        internalValue,
                        options
                    };
                },
                template: `
<CheckBoxList v-model="internalValue" :options="options" horizontal />
`
            }));
            controlTypeOptions = [
                {
                    value: "ddl",
                    text: "Drop Down List"
                },
                {
                    value: "ddl_enhanced",
                    text: "Drop Down List (Enhanced for Long Lists)"
                },
                {
                    value: "rb",
                    text: "Radio Buttons"
                }
            ];
            exports_1("ConfigurationComponent", ConfigurationComponent = vue_1.defineComponent({
                name: "SingleSelectField.Configuration",
                components: {
                    DropDownList: dropDownList_1.default,
                    TextBox: textBox_1.default,
                    NumberBox: numberBox_1.default
                },
                props: utils_1.getFieldConfigurationProps(),
                emits: [
                    "update:modelValue",
                    "updateConfiguration",
                    "updateConfigurationValue"
                ],
                setup(props, { emit }) {
                    const rawValues = vue_1.ref("");
                    const internalRawValues = vue_1.ref("");
                    const controlType = vue_1.ref("");
                    const repeatColumns = vue_1.ref(null);
                    const isRadioList = vue_1.computed(() => {
                        return controlType.value === "rb";
                    });
                    const onBlur = () => {
                        internalRawValues.value = rawValues.value;
                    };
                    const maybeUpdateModelValue = () => {
                        var _a, _b, _c, _d, _e, _f, _g;
                        const newValue = Object.assign({}, props.modelValue);
                        newValue["customValues"] = (_a = internalRawValues.value) !== null && _a !== void 0 ? _a : "";
                        newValue["fieldtype"] = (_b = controlType.value) !== null && _b !== void 0 ? _b : "";
                        newValue["repeatColumns"] = (_d = (_c = repeatColumns.value) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : "";
                        const anyValueChanged = newValue["customValues"] !== ((_e = props.modelValue["customValues"]) !== null && _e !== void 0 ? _e : "")
                            || newValue["fieldtype"] !== ((_f = props.modelValue["fieldtype"]) !== null && _f !== void 0 ? _f : "")
                            || newValue["repeatColumns"] !== ((_g = props.modelValue["repeatColumns"]) !== null && _g !== void 0 ? _g : "");
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
                        var _a, _b;
                        rawValues.value = (_a = props.modelValue["customValues"]) !== null && _a !== void 0 ? _a : "";
                        internalRawValues.value = rawValues.value;
                        controlType.value = (_b = props.modelValue["fieldtype"]) !== null && _b !== void 0 ? _b : "ddl";
                        repeatColumns.value = number_1.toNumberOrNull(props.modelValue["repeatColumns"]);
                    }, {
                        immediate: true
                    });
                    vue_1.watch([internalRawValues], () => {
                        if (maybeUpdateModelValue()) {
                            emit("updateConfiguration");
                        }
                    });
                    vue_1.watch(controlType, () => { var _a; return maybeUpdateConfiguration("fieldtype", (_a = controlType.value) !== null && _a !== void 0 ? _a : "ddl"); });
                    vue_1.watch(repeatColumns, () => { var _a, _b; return maybeUpdateConfiguration("repeatColumns", (_b = (_a = repeatColumns.value) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""); });
                    return {
                        controlType,
                        controlTypeOptions,
                        isRadioList,
                        onBlur,
                        rawValues,
                        repeatColumns
                    };
                },
                template: `
<div>
    <TextBox v-model="rawValues"
        label="Values"
        help="The source of the values to display in a list.  Format is either 'value1,value2,value3,...', 'value1^text1,value2^text2,value3^text3,...', or a SQL Select statement that returns a result set with a 'Value' and 'Text' column <span class='tip tip-lava'></span>."
        textMode="multiline"
        @blur="onBlur" />

    <DropDownList v-model="controlType"
        label="Control Type"
        help="The type of control to use for selecting a single value from the list."
        :options="controlTypeOptions"
        :showBlankItem="false" />

    <NumberBox v-if="isRadioList"
        v-model="repeatColumns"
        label="Columns"
        help="Select how many columns the list should use before going to the next row. If blank or 0 then 4 columns will be displayed. There is no enforced upper limit however the block this control is used in might add contraints due to available space." />
</div>
`
            }));
        }
    };
});
//# sourceMappingURL=singleSelectFieldComponents.js.map