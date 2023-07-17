System.register(['vue', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/rockFormField', '@Obsidian/Controls/textBox', '@Obsidian/Utility/booleanUtils', './utils.js', '@Obsidian/Core/Reporting/comparisonType', '@Obsidian/Core/Reporting/comparisonTypeOptions', '@Obsidian/Controls/fieldFilterContainer', '@Obsidian/Utility/numberUtils'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, CheckBox, DropDownList, RockFormField, TextBox, asBooleanOrNull, asTrueFalseOrNull, getFieldEditorProps, getFieldConfigurationProps;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
        }, function (module) {
            CheckBox = module["default"];
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            asBooleanOrNull = module.asBooleanOrNull;
            asTrueFalseOrNull = module.asTrueFalseOrNull;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
            getFieldConfigurationProps = module.getFieldConfigurationProps;
        }, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            function parseModelValue(modelValue) {
                try {
                    return JSON.parse(modelValue !== null && modelValue !== void 0 ? modelValue : "[]").map(s => ({ value: s }));
                }
                catch (_a) {
                    return [];
                }
            }
            const EditComponent = exports('EditComponent', defineComponent({
                name: "ValueListField.Edit",
                components: {
                    RockFormField,
                    DropDownList,
                    TextBox
                },
                props: getFieldEditorProps(),
                setup(props, { emit }) {
                    const internalValues = ref(parseModelValue(props.modelValue));
                    const valueOptions = computed(() => {
                        var _a;
                        try {
                            return JSON.parse((_a = props.configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                        }
                        catch (_b) {
                            return [];
                        }
                    });
                    const options = computed(() => {
                        const providedOptions = valueOptions.value.map(v => {
                            return {
                                text: v.text,
                                value: v.value
                            };
                        });
                        return providedOptions;
                    });
                    const hasValues = computed(() => valueOptions.value !== null && valueOptions.value.length > 0);
                    const valuePlaceholder = computed(() => {
                        var _a;
                        return (_a = props.configurationValues["valueprompt"]) !== null && _a !== void 0 ? _a : "";
                    });
                    watch(() => props.modelValue, () => {
                        internalValues.value = parseModelValue(props.modelValue);
                    });
                    watch(() => internalValues.value, () => {
                        emit("update:modelValue", JSON.stringify(internalValues.value.map(v => v.value)));
                    }, {
                        deep: true
                    });
                    const onAddClick = () => {
                        var _a;
                        let defaultValue = "";
                        if (hasValues.value) {
                            defaultValue = (_a = valueOptions.value[0].value) !== null && _a !== void 0 ? _a : "";
                        }
                        internalValues.value.push({ value: defaultValue });
                    };
                    const onRemoveClick = (index) => {
                        internalValues.value.splice(index, 1);
                    };
                    return {
                        internalValues,
                        hasValues,
                        options,
                        valuePlaceholder,
                        onAddClick,
                        onRemoveClick
                    };
                },
                template: `
<RockFormField
    :modelValue="internalValues"
    formGroupClasses="value-list"
    name="value-list">
    <template #default="{uniqueId}">
        <div class="control-wrapper">
            <span :id="uniqueId" class="value-list">
                <span class="value-list-rows">
                    <div v-for="(value, valueIndex) in internalValues" class="controls controls-row form-control-group">
                        <select v-if="hasValues" v-model="value.value" class="form-control input-width-lg">
                            <option v-for="option in options" :value="option.value" :key="option.value">{{ option.text }}</option>
                        </select>
                        <input v-else v-model="value.value" class="key-value-value form-control input-width-lg" type="text" :placeholder="valuePlaceholder">

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
            const ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
                name: "ValueListField.Configuration",
                components: {
                    CheckBox,
                    DropDownList,
                    TextBox
                },
                props: getFieldConfigurationProps(),
                emits: [
                    "update:modelValue",
                    "updateConfiguration",
                    "updateConfigurationValue"
                ],
                setup(props, { emit }) {
                    const customValues = ref("");
                    const internalCustomValues = ref("");
                    const labelPrompt = ref("");
                    const definedType = ref("");
                    const allowHtml = ref(false);
                    const definedTypeOptions = computed(() => {
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
                        var _a, _b, _c, _d, _e, _f, _g, _h;
                        const newValue = {};
                        newValue["valueprompt"] = (_a = labelPrompt.value) !== null && _a !== void 0 ? _a : "";
                        newValue["definedtype"] = (_b = definedType.value) !== null && _b !== void 0 ? _b : "";
                        newValue["customvalues"] = (_c = internalCustomValues.value) !== null && _c !== void 0 ? _c : "";
                        newValue["allowhtml"] = (_d = asTrueFalseOrNull(allowHtml.value)) !== null && _d !== void 0 ? _d : "False";
                        const anyValueChanged = newValue["valueprompt"] !== ((_e = props.modelValue["valueprompt"]) !== null && _e !== void 0 ? _e : "")
                            || newValue["definedtype"] !== ((_f = props.modelValue["definedtype"]) !== null && _f !== void 0 ? _f : "")
                            || newValue["customvalues"] !== ((_g = props.modelValue["customvalues"]) !== null && _g !== void 0 ? _g : "")
                            || newValue["allowhtml"] !== ((_h = props.modelValue["allowhtml"]) !== null && _h !== void 0 ? _h : "False");
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
                    watch(() => [props.modelValue, props.configurationProperties], () => {
                        var _a, _b, _c, _d;
                        labelPrompt.value = (_a = props.modelValue["valueprompt"]) !== null && _a !== void 0 ? _a : "";
                        definedType.value = (_b = props.modelValue["definedtype"]) !== null && _b !== void 0 ? _b : "";
                        customValues.value = (_c = props.modelValue["customvalues"]) !== null && _c !== void 0 ? _c : "";
                        internalCustomValues.value = customValues.value;
                        allowHtml.value = (_d = asBooleanOrNull(props.modelValue["allowhtml"])) !== null && _d !== void 0 ? _d : false;
                    }, {
                        immediate: true
                    });
                    watch([definedType, internalCustomValues], () => {
                        if (maybeUpdateModelValue()) {
                            emit("updateConfiguration");
                        }
                    });
                    watch(labelPrompt, () => { var _a; return maybeUpdateConfiguration("valueprompt", (_a = labelPrompt.value) !== null && _a !== void 0 ? _a : ""); });
                    watch(allowHtml, () => { var _a; return maybeUpdateConfiguration("allowhtml", (_a = asTrueFalseOrNull(allowHtml.value)) !== null && _a !== void 0 ? _a : "False"); });
                    return {
                        allowHtml,
                        definedType,
                        definedTypeOptions,
                        labelPrompt,
                        onBlur,
                        customValues
                    };
                },
                template: `
<div>
    <TextBox v-model="labelPrompt"
        label="Label Prompt"
        help="The text to display as a prompt in the label textbox." />

    <DropDownList v-model="definedType"
        label="Defined Type"
        help="Optional Defined Type to select values from, otherwise values will be free-form text fields."
        :items="definedTypeOptions" />

    <TextBox v-model="customValues"
        label="Custom Values"
        help="Optional list of options to use for the values.  Format is either 'value1,value2,value3,...', or 'value1^text1,value2^text2,value3^text3,...'."
        textMode="multiline"
        @blur="onBlur" />

    <CheckBox v-model="allowHtml"
        label="Allow HTML"
        help="Allow HTML content in values." />
</div>
`
            }));

        })
    };
}));
