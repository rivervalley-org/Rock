System.register(["vue", "../Elements/checkBox", "../Elements/dropDownList", "../Elements/rockFormField", "../Elements/textBox", "../Services/boolean", "./utils"], function (exports_1, context_1) {
    "use strict";
    var vue_1, checkBox_1, dropDownList_1, rockFormField_1, textBox_1, boolean_1, utils_1, EditComponent, ConfigurationComponent;
    var __moduleName = context_1 && context_1.id;
    function parseModelValue(modelValue) {
        try {
            return JSON.parse(modelValue !== null && modelValue !== void 0 ? modelValue : "[]");
        }
        catch (_a) {
            return [];
        }
    }
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (checkBox_1_1) {
                checkBox_1 = checkBox_1_1;
            },
            function (dropDownList_1_1) {
                dropDownList_1 = dropDownList_1_1;
            },
            function (rockFormField_1_1) {
                rockFormField_1 = rockFormField_1_1;
            },
            function (textBox_1_1) {
                textBox_1 = textBox_1_1;
            },
            function (boolean_1_1) {
                boolean_1 = boolean_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            exports_1("EditComponent", EditComponent = vue_1.defineComponent({
                name: "KeyValueListField.Edit",
                components: {
                    RockFormField: rockFormField_1.default,
                    DropDownList: dropDownList_1.default,
                    TextBox: textBox_1.default
                },
                props: utils_1.getFieldEditorProps(),
                setup(props, { emit }) {
                    const internalValues = vue_1.ref(parseModelValue(props.modelValue));
                    const valueOptions = vue_1.computed(() => {
                        var _a;
                        try {
                            return JSON.parse((_a = props.configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                        }
                        catch (_b) {
                            return [];
                        }
                    });
                    const options = vue_1.computed(() => {
                        const providedOptions = valueOptions.value.map(v => {
                            return {
                                text: v.text,
                                value: v.value
                            };
                        });
                        return providedOptions;
                    });
                    const hasValues = vue_1.computed(() => valueOptions.value.length > 0);
                    const keyPlaceholder = vue_1.computed(() => {
                        var _a;
                        return (_a = props.configurationValues["keyprompt"]) !== null && _a !== void 0 ? _a : "";
                    });
                    const valuePlaceholder = vue_1.computed(() => {
                        var _a;
                        return (_a = props.configurationValues["valueprompt"]) !== null && _a !== void 0 ? _a : "";
                    });
                    const displayValueFirst = vue_1.computed(() => {
                        var _a;
                        return boolean_1.asBoolean((_a = props.configurationValues["displayvaluefirst"]) !== null && _a !== void 0 ? _a : "");
                    });
                    vue_1.watch(() => props.modelValue, () => {
                        internalValues.value = parseModelValue(props.modelValue);
                    });
                    vue_1.watch(() => internalValues.value, () => {
                        emit("update:modelValue", JSON.stringify(internalValues.value));
                    }, {
                        deep: true
                    });
                    const onAddClick = () => {
                        let defaultValue = "";
                        if (hasValues.value) {
                            defaultValue = valueOptions.value[0].value;
                        }
                        internalValues.value.push({ key: "", value: defaultValue });
                    };
                    const onRemoveClick = (index) => {
                        internalValues.value.splice(index, 1);
                    };
                    return {
                        internalValues,
                        hasValues,
                        displayValueFirst,
                        options,
                        keyPlaceholder,
                        valuePlaceholder,
                        onAddClick,
                        onRemoveClick
                    };
                },
                template: `
<RockFormField
    :modelValue="internalValues"
    formGroupClasses="key-value-list"
    name="key-value-list">
    <template #default="{uniqueId}">
        <div class="control-wrapper">
<span :id="uniqueId" class="key-value-list">
    <span class="key-value-rows">
        <div v-for="(value, valueIndex) in internalValues" class="controls controls-row form-control-group">
            <template v-if="!displayValueFirst">
                <input v-model="value.key" class="key-value-key form-control input-width-md" type="text" :placeholder="keyPlaceholder">

                <select v-if="hasValues" v-model="value.value" class="form-control input-width-lg">
                    <option v-for="option in options" :value="option.value" :key="option.value">{{ option.text }}</option>
                </select>
                <input v-else v-model="value.value" class="key-value-value form-control input-width-md" type="text" :placeholder="valuePlaceholder">
            </template>
            <template v-else>
                <select v-if="hasValues" v-model="value.value" class="form-control input-width-lg">
                    <option v-for="option in options" :value="option.value" :key="option.value">{{ option.text }}</option>
                </select>
                <input v-else v-model="value.value" class="key-value-value form-control input-width-md" type="text" :placeholder="valuePlaceholder">

                <input v-model="value.key" class="key-value-key form-control input-width-md" type="text" :placeholder="keyPlaceholder">
            </template>

            <a href="#" @click.prevent="onRemoveClick(valueIndex)" class="btn btn-sm btn-danger"><i class="fa fa-times"></i></a>
        </div>
    </span>
    <div class="control-actions">
        <a class="btn btn-action btn-square btn-xs" href="#" @click.prevent="onAddClick"><i class="fa fa-plus-circle"></i></a>
    </div>
</span>
        </div>
    </template>
</RockFormField>
`
            }));
            exports_1("ConfigurationComponent", ConfigurationComponent = vue_1.defineComponent({
                name: "KeyValueListField.Configuration",
                components: {
                    CheckBox: checkBox_1.default,
                    DropDownList: dropDownList_1.default,
                    TextBox: textBox_1.default
                },
                props: utils_1.getFieldConfigurationProps(),
                emits: [
                    "update:modelValue",
                    "updateConfiguration",
                    "updateConfigurationValue"
                ],
                setup(props, { emit }) {
                    const customValues = vue_1.ref("");
                    const internalCustomValues = vue_1.ref("");
                    const keyPrompt = vue_1.ref("");
                    const labelPrompt = vue_1.ref("");
                    const definedType = vue_1.ref("");
                    const allowHtml = vue_1.ref(false);
                    const displayValueFirst = vue_1.ref(false);
                    const definedTypeOptions = vue_1.computed(() => {
                        var _a;
                        try {
                            return JSON.parse((_a = props.configurationProperties["definedTypes"]) !== null && _a !== void 0 ? _a : "[]");
                        }
                        catch (_b) {
                            return [];
                        }
                    });
                    const onBlur = () => {
                        internalCustomValues.value = customValues.value;
                    };
                    const maybeUpdateModelValue = () => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                        const newValue = {};
                        newValue["keyprompt"] = (_a = keyPrompt.value) !== null && _a !== void 0 ? _a : "";
                        newValue["valueprompt"] = (_b = labelPrompt.value) !== null && _b !== void 0 ? _b : "";
                        newValue["definedtype"] = (_c = definedType.value) !== null && _c !== void 0 ? _c : "";
                        newValue["customvalues"] = (_d = internalCustomValues.value) !== null && _d !== void 0 ? _d : "";
                        newValue["allowhtml"] = (_e = boolean_1.asTrueFalseOrNull(allowHtml.value)) !== null && _e !== void 0 ? _e : "False";
                        newValue["displayvaluefirst"] = (_f = boolean_1.asTrueFalseOrNull(displayValueFirst.value)) !== null && _f !== void 0 ? _f : "False";
                        const anyValueChanged = newValue["keyprompt"] !== ((_g = props.modelValue["keyprompt"]) !== null && _g !== void 0 ? _g : "")
                            || newValue["valueprompt"] !== ((_h = props.modelValue["valueprompt"]) !== null && _h !== void 0 ? _h : "")
                            || newValue["definedtype"] !== ((_j = props.modelValue["definedtype"]) !== null && _j !== void 0 ? _j : "")
                            || newValue["customvalues"] !== ((_k = props.modelValue["customvalues"]) !== null && _k !== void 0 ? _k : "")
                            || newValue["allowhtml"] !== ((_l = props.modelValue["allowhtml"]) !== null && _l !== void 0 ? _l : "False")
                            || newValue["displayvaluefirst"] !== ((_m = props.modelValue["displayvaluefirst"]) !== null && _m !== void 0 ? _m : "False");
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
                        keyPrompt.value = (_a = props.modelValue["keyprompt"]) !== null && _a !== void 0 ? _a : "";
                        labelPrompt.value = (_b = props.modelValue["valueprompt"]) !== null && _b !== void 0 ? _b : "";
                        definedType.value = (_c = props.modelValue["definedtype"]) !== null && _c !== void 0 ? _c : "";
                        customValues.value = (_d = props.modelValue["customvalues"]) !== null && _d !== void 0 ? _d : "";
                        internalCustomValues.value = customValues.value;
                        allowHtml.value = (_e = boolean_1.asBooleanOrNull(props.modelValue["allowhtml"])) !== null && _e !== void 0 ? _e : false;
                        displayValueFirst.value = (_f = boolean_1.asBooleanOrNull(props.modelValue["displayvaluefirst"])) !== null && _f !== void 0 ? _f : false;
                    }, {
                        immediate: true
                    });
                    vue_1.watch([definedType, internalCustomValues], () => {
                        if (maybeUpdateModelValue()) {
                            emit("updateConfiguration");
                        }
                    });
                    vue_1.watch(keyPrompt, () => { var _a; return maybeUpdateConfiguration("keyprompt", (_a = keyPrompt.value) !== null && _a !== void 0 ? _a : ""); });
                    vue_1.watch(labelPrompt, () => { var _a; return maybeUpdateConfiguration("valueprompt", (_a = labelPrompt.value) !== null && _a !== void 0 ? _a : ""); });
                    vue_1.watch(allowHtml, () => { var _a; return maybeUpdateConfiguration("allowhtml", (_a = boolean_1.asTrueFalseOrNull(allowHtml.value)) !== null && _a !== void 0 ? _a : "False"); });
                    vue_1.watch(displayValueFirst, () => { var _a; return maybeUpdateConfiguration("displayvaluefirst", (_a = boolean_1.asTrueFalseOrNull(displayValueFirst.value)) !== null && _a !== void 0 ? _a : "False"); });
                    return {
                        allowHtml,
                        definedType,
                        definedTypeOptions,
                        displayValueFirst,
                        keyPrompt,
                        labelPrompt,
                        onBlur,
                        customValues
                    };
                },
                template: `
<div>
    <TextBox v-model="keyPrompt"
        label="Key Prompt"
        help="The text to display as a prompt in the key textbox." />

    <TextBox v-model="labelPrompt"
        label="Label Prompt"
        help="The text to display as a prompt in the label textbox." />

    <DropDownList v-model="definedType"
        label="Defined Type"
        help="Optional Defined Type to select values from, otherwise values will be free-form text fields."
        :options="definedTypeOptions" />

    <TextBox v-model="customValues"
        label="Custom Values"
        help="Optional list of options to use for the values.  Format is either 'value1,value2,value3,...', or 'value1^text1,value2^text2,value3^text3,...'."
        textMode="multiline"
        @blur="onBlur" />

    <CheckBox v-model="allowHtml"
        label="Allow HTML"
        help="Allow HTML content in values." />

    <CheckBox v-model="displayValueFirst"
        label="Display Value First"
        help="Reverses the display order of the key and the value." />
</div>
`
            }));
        }
    };
});
//# sourceMappingURL=keyValueListFieldComponents.js.map