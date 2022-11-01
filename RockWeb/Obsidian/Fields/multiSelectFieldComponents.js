System.register(["vue", "../Elements/checkBoxList", "../Elements/dropDownList", "../Elements/listBox", "../Elements/numberBox", "../Elements/textBox", "../Services/boolean", "../Services/number", "../Util/util", "./utils"], function (exports_1, context_1) {
    "use strict";
    var vue_1, checkBoxList_1, dropDownList_1, listBox_1, numberBox_1, textBox_1, boolean_1, number_1, util_1, utils_1, EditComponent, FilterComponent, repeatDirectionOptions, ConfigurationComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (checkBoxList_1_1) {
                checkBoxList_1 = checkBoxList_1_1;
            },
            function (dropDownList_1_1) {
                dropDownList_1 = dropDownList_1_1;
            },
            function (listBox_1_1) {
                listBox_1 = listBox_1_1;
            },
            function (numberBox_1_1) {
                numberBox_1 = numberBox_1_1;
            },
            function (textBox_1_1) {
                textBox_1 = textBox_1_1;
            },
            function (boolean_1_1) {
                boolean_1 = boolean_1_1;
            },
            function (number_1_1) {
                number_1 = number_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            exports_1("EditComponent", EditComponent = vue_1.defineComponent({
                name: "MultiSelectField.Edit",
                components: {
                    ListBox: listBox_1.default,
                    CheckBoxList: checkBoxList_1.default
                },
                props: utils_1.getFieldEditorProps(),
                setup() {
                    return {
                        isRequired: vue_1.inject("isRequired")
                    };
                },
                data() {
                    return {
                        internalValue: []
                    };
                },
                computed: {
                    options() {
                        var _a;
                        try {
                            const valuesConfig = JSON.parse((_a = this.configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                            return valuesConfig.map(v => {
                                return {
                                    text: v.text,
                                    value: v.value
                                };
                            });
                        }
                        catch (_b) {
                            return [];
                        }
                    },
                    listBoxConfigAttributes() {
                        const attributes = {};
                        const enhancedSelection = this.configurationValues["enhancedselection"];
                        if (boolean_1.asBoolean(enhancedSelection)) {
                            attributes.enhanceForLongLists = true;
                        }
                        return attributes;
                    },
                    checkBoxListConfigAttributes() {
                        const attributes = {};
                        const repeatColumnsConfig = this.configurationValues["repeatColumns"];
                        const repeatDirection = this.configurationValues["repeatDirection"];
                        if (repeatColumnsConfig) {
                            attributes["repeatColumns"] = number_1.toNumberOrNull(repeatColumnsConfig) || 0;
                        }
                        if (repeatDirection !== "1") {
                            attributes["horizontal"] = true;
                        }
                        return attributes;
                    },
                    isListBox() {
                        const enhancedSelection = this.configurationValues["enhancedselection"];
                        return boolean_1.asBoolean(enhancedSelection);
                    }
                },
                watch: {
                    internalValue() {
                        this.$emit("update:modelValue", this.internalValue.join(","));
                    },
                    modelValue: {
                        immediate: true,
                        handler() {
                            const value = this.modelValue || "";
                            this.internalValue = value !== "" ? value.split(",") : [];
                        }
                    }
                },
                template: `
<ListBox v-if="isListBox" v-model="internalValue" v-bind="listBoxConfigAttributes" :options="options" />
<CheckBoxList v-else v-model="internalValue" v-bind="checkBoxListConfigAttributes" :options="options" />
`
            }));
            exports_1("FilterComponent", FilterComponent = vue_1.defineComponent({
                name: "MultiSelectField.Filter",
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
            repeatDirectionOptions = [
                {
                    value: "0",
                    text: "Horizontal"
                },
                {
                    value: "1",
                    text: "Vertical"
                }
            ];
            exports_1("ConfigurationComponent", ConfigurationComponent = vue_1.defineComponent({
                name: "MultiSelectField.Configuration",
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
                    const enhanceForLongLists = vue_1.ref(false);
                    const repeatColumns = vue_1.ref(null);
                    const repeatDirection = vue_1.ref("");
                    const onBlur = () => {
                        internalRawValues.value = rawValues.value;
                    };
                    const maybeUpdateModelValue = () => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                        const newValue = Object.assign({}, props.modelValue);
                        newValue["customValues"] = (_a = internalRawValues.value) !== null && _a !== void 0 ? _a : "";
                        newValue["enhancedselection"] = (_b = boolean_1.asTrueFalseOrNull(enhanceForLongLists.value)) !== null && _b !== void 0 ? _b : "False";
                        newValue["repeatColumns"] = (_d = (_c = repeatColumns.value) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : "";
                        newValue["repeatDirection"] = (_e = repeatDirection.value) !== null && _e !== void 0 ? _e : "0";
                        const anyValueChanged = newValue["customValues"] !== ((_f = props.modelValue["customValues"]) !== null && _f !== void 0 ? _f : "")
                            || newValue["enhancedselection"] !== ((_g = props.modelValue["enhancedselection"]) !== null && _g !== void 0 ? _g : "False")
                            || newValue["repeatColumns"] !== ((_h = props.modelValue["repeatColumns"]) !== null && _h !== void 0 ? _h : "")
                            || newValue["repeatDirection"] !== ((_j = props.modelValue["repeatDirection"]) !== null && _j !== void 0 ? _j : "0");
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
                        var _a, _b, _c;
                        rawValues.value = (_a = props.modelValue["customValues"]) !== null && _a !== void 0 ? _a : "";
                        internalRawValues.value = rawValues.value;
                        enhanceForLongLists.value = (_b = boolean_1.asBooleanOrNull(props.modelValue["enhancedselection"])) !== null && _b !== void 0 ? _b : false;
                        repeatColumns.value = number_1.toNumberOrNull(props.modelValue["repeatColumns"]);
                        repeatDirection.value = (_c = props.modelValue["repeatDirection"]) !== null && _c !== void 0 ? _c : "0";
                    }, {
                        immediate: true
                    });
                    vue_1.watch([internalRawValues], () => {
                        if (maybeUpdateModelValue()) {
                            emit("updateConfiguration");
                        }
                    });
                    vue_1.watch(enhanceForLongLists, () => { var _a; return maybeUpdateConfiguration("enhancedselection", (_a = boolean_1.asTrueFalseOrNull(enhanceForLongLists.value)) !== null && _a !== void 0 ? _a : "False"); });
                    vue_1.watch(repeatColumns, () => { var _a, _b; return maybeUpdateConfiguration("repeatColumns", (_b = (_a = repeatColumns.value) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""); });
                    vue_1.watch(repeatDirection, () => { var _a; return maybeUpdateConfiguration("repeatDirection", (_a = repeatDirection.value) !== null && _a !== void 0 ? _a : "0"); });
                    return {
                        enhanceForLongLists,
                        onBlur,
                        rawValues,
                        repeatColumns,
                        repeatDirection,
                        repeatDirectionOptions
                    };
                },
                template: `
<div>
    <TextBox v-model="rawValues"
        label="Values"
        help="The source of the values to display in a list. Format is either 'value1,value2,value3,...', 'value1^text1,value2^text2,value3^text3,...', or a SQL Select statement that returns a result set with a 'Value' and 'Text' column <span class='tip tip-lava'></span>."
        textMode="multiline"
        @blur="onBlur" />

    <CheckBox v-model="enhanceForLongLists"
        label="Enhance For Long Lists"
        help="When set, will render a searchable selection of options." />

    <NumberBox
        v-model="repeatColumns"
        label="Columns"
        help="Select how many columns the list should use before going to the next row. If blank or 0 then 4 columns will be displayed. There is no enforced upper limit however the block this control is used in might add contraints due to available space." />

    <DropDownList v-model="repeatDirection"
        label="Repeat Direction"
        help="The direction that the list options will be displayed."
        :options="repeatDirectionOptions"
        :showBlankItem="false" />
</div>
`
            }));
        }
    };
});
//# sourceMappingURL=multiSelectFieldComponents.js.map