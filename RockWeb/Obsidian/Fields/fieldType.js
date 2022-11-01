System.register(["vue", "../Reporting/comparisonType", "../Services/string", "./textFieldComponents", "./utils"], function (exports_1, context_1) {
    "use strict";
    var vue_1, comparisonType_1, string_1, textFieldComponents_1, utils_1, unsupportedFieldTypeConfigurationComponent, FieldTypeBase;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (comparisonType_1_1) {
                comparisonType_1 = comparisonType_1_1;
            },
            function (string_1_1) {
                string_1 = string_1_1;
            },
            function (textFieldComponents_1_1) {
                textFieldComponents_1 = textFieldComponents_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            unsupportedFieldTypeConfigurationComponent = vue_1.defineComponent({
                props: {
                    modelValue: {
                        type: Object,
                        required: true
                    },
                    configurationProperties: {
                        type: Object,
                        required: true
                    }
                },
                setup() {
                    return {};
                },
                template: `
<div class="alert alert-warning">
    Configuration of this field type is not supported.
</div>
`
            });
            FieldTypeBase = class FieldTypeBase {
                getTextValue(value, _configurationValues) {
                    return value !== null && value !== void 0 ? value : "";
                }
                getHtmlValue(value, configurationValues) {
                    return `${string_1.escapeHtml(this.getTextValue(value, configurationValues))}`;
                }
                getCondensedTextValue(value, configurationValues) {
                    return string_1.truncate(this.getTextValue(value, configurationValues), 100);
                }
                getCondensedHtmlValue(value, configurationValues) {
                    return `${string_1.escapeHtml(this.getCondensedTextValue(value, configurationValues))}`;
                }
                getFormattedComponent() {
                    return vue_1.defineComponent({
                        name: "FieldType.Formatted",
                        props: utils_1.getFieldEditorProps(),
                        setup: (props) => {
                            return {
                                content: vue_1.computed(() => { var _a; return this.getHtmlValue((_a = props.modelValue) !== null && _a !== void 0 ? _a : "", props.configurationValues); })
                            };
                        },
                        template: `<div v-html="content"></div>`
                    });
                }
                getCondensedFormattedComponent() {
                    return vue_1.defineComponent({
                        name: "FieldType.CondensedFormatted",
                        props: utils_1.getFieldEditorProps(),
                        setup: (props) => {
                            return {
                                content: vue_1.computed(() => { var _a; return this.getCondensedHtmlValue((_a = props.modelValue) !== null && _a !== void 0 ? _a : "", props.configurationValues); })
                            };
                        },
                        template: `<span v-html="content"></span>`
                    });
                }
                getEditComponent() {
                    return textFieldComponents_1.EditComponent;
                }
                getConfigurationComponent() {
                    return unsupportedFieldTypeConfigurationComponent;
                }
                hasDefaultComponent() {
                    return true;
                }
                isFilterable() {
                    return true;
                }
                getSupportedComparisonTypes() {
                    return 1 | 2;
                }
                getFilterComponent() {
                    return utils_1.getStandardFilterComponent(this.getSupportedComparisonTypes(), this.getEditComponent());
                }
                getFilterValueDescription(value, configurationValues) {
                    const valueText = this.getFilterValueText(value, configurationValues);
                    if (!value.comparisonType) {
                        return valueText ? `Is ${valueText}` : "";
                    }
                    if (value.comparisonType === 32 || value.comparisonType === 64) {
                        return comparisonType_1.getComparisonName(value.comparisonType);
                    }
                    if (valueText === "") {
                        if (this.getSupportedComparisonTypes() & 32 && (value.comparisonType === 1 || value.comparisonType === 2)) {
                            return `${comparisonType_1.getComparisonName(value.comparisonType)} ''`;
                        }
                        return "";
                    }
                    return `${comparisonType_1.getComparisonName(value.comparisonType)} ${valueText}`;
                }
                getFilterValueText(value, configurationValues) {
                    var _a;
                    const text = (_a = this.getTextValue(value.value, configurationValues !== null && configurationValues !== void 0 ? configurationValues : {})) !== null && _a !== void 0 ? _a : "";
                    return text ? `'${text}'` : text;
                }
            };
            exports_1("FieldTypeBase", FieldTypeBase);
        }
    };
});
//# sourceMappingURL=fieldType.js.map