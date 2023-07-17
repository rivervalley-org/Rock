System.register(['vue', '@Obsidian/Core/Reporting/comparisonType', '@Obsidian/Utility/stringUtils', './textFieldComponents.js', './utils.js', '@Obsidian/Controls/textBox', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/numberBox', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/numberUtils', '@Obsidian/Core/Reporting/comparisonTypeOptions', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/fieldFilterContainer'], (function (exports) {
    'use strict';
    var defineComponent, computed, getComparisonName, escapeHtml, truncate, EditComponent, getFieldEditorProps, getStandardFilterComponent;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }, function (module) {
            getComparisonName = module.getComparisonName;
        }, function (module) {
            escapeHtml = module.escapeHtml;
            truncate = module.truncate;
        }, function (module) {
            EditComponent = module.EditComponent;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
            getStandardFilterComponent = module.getStandardFilterComponent;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            const unsupportedFieldTypeConfigurationComponent = defineComponent({
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
            class FieldTypeBase {
                getTextValue(value, _configurationValues) {
                    return value !== null && value !== void 0 ? value : "";
                }
                getHtmlValue(value, configurationValues) {
                    return `${escapeHtml(this.getTextValue(value, configurationValues))}`;
                }
                getCondensedTextValue(value, configurationValues) {
                    return truncate(this.getTextValue(value, configurationValues), 100);
                }
                getCondensedHtmlValue(value, configurationValues) {
                    return `${escapeHtml(this.getCondensedTextValue(value, configurationValues))}`;
                }
                getFormattedComponent() {
                    return defineComponent({
                        name: "FieldType.Formatted",
                        props: getFieldEditorProps(),
                        setup: (props) => {
                            return {
                                content: computed(() => { var _a; return this.getHtmlValue((_a = props.modelValue) !== null && _a !== void 0 ? _a : "", props.configurationValues); })
                            };
                        },
                        template: `<div v-html="content"></div>`
                    });
                }
                getCondensedFormattedComponent() {
                    return defineComponent({
                        name: "FieldType.CondensedFormatted",
                        props: getFieldEditorProps(),
                        setup: (props) => {
                            return {
                                content: computed(() => { var _a; return this.getCondensedHtmlValue((_a = props.modelValue) !== null && _a !== void 0 ? _a : "", props.configurationValues); })
                            };
                        },
                        template: `<span v-html="content"></span>`
                    });
                }
                getEditComponent() {
                    return EditComponent;
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
                    return getStandardFilterComponent(this.getSupportedComparisonTypes(), this.getEditComponent());
                }
                getFilterValueDescription(value, configurationValues) {
                    const valueText = this.getFilterValueText(value, configurationValues);
                    if (!value.comparisonType) {
                        return valueText ? `Is ${valueText}` : "";
                    }
                    if (value.comparisonType === 32 || value.comparisonType === 64) {
                        return getComparisonName(value.comparisonType);
                    }
                    if (valueText === "") {
                        if (this.getSupportedComparisonTypes() & 32 && (value.comparisonType === 1 || value.comparisonType === 2)) {
                            return `${getComparisonName(value.comparisonType)} ''`;
                        }
                        return "";
                    }
                    return `${getComparisonName(value.comparisonType)} ${valueText}`;
                }
                getFilterValueText(value, configurationValues) {
                    var _a;
                    const text = (_a = this.getTextValue(value.value, configurationValues !== null && configurationValues !== void 0 ? configurationValues : {})) !== null && _a !== void 0 ? _a : "";
                    return text ? `'${text}'` : text;
                }
                doesValueMatchFilter(value, filterValue, _configurationValues) {
                    if (!filterValue.comparisonType) {
                        return false;
                    }
                    if (!filterValue.value) {
                        if (filterValue.comparisonType === 32) {
                            return (value !== null && value !== void 0 ? value : "") === "";
                        }
                        else if (filterValue.comparisonType === 64) {
                            return (value !== null && value !== void 0 ? value : "") !== "";
                        }
                        else if (this.getSupportedComparisonTypes() & 32) {
                            if (filterValue.comparisonType === 1) {
                                return (value !== null && value !== void 0 ? value : "") === "";
                            }
                            else if (filterValue.comparisonType === 2) {
                                return (value !== null && value !== void 0 ? value : "") !== "";
                            }
                        }
                        return false;
                    }
                    const numericFilterValue = parseFloat(filterValue.value);
                    const numericValue = parseFloat(value !== null && value !== void 0 ? value : "");
                    const isNumericComparison = !Number.isNaN(numericFilterValue) && !Number.isNaN(numericValue);
                    if (filterValue.comparisonType === 8) {
                        return (value !== null && value !== void 0 ? value : "").toLowerCase().includes(filterValue.value.toLowerCase());
                    }
                    else if (filterValue.comparisonType === 16) {
                        return !(value !== null && value !== void 0 ? value : "").toLowerCase().includes(filterValue.value.toLowerCase());
                    }
                    else if (filterValue.comparisonType === 4) {
                        return (value !== null && value !== void 0 ? value : "").toLowerCase().startsWith(filterValue.value.toLowerCase());
                    }
                    else if (filterValue.comparisonType === 2048) {
                        return (value !== null && value !== void 0 ? value : "").toLowerCase().endsWith(filterValue.value.toLowerCase());
                    }
                    else if (filterValue.comparisonType === 1) {
                        return (value !== null && value !== void 0 ? value : "").toLowerCase() === filterValue.value.toLowerCase();
                    }
                    else if (filterValue.comparisonType === 2) {
                        return (value !== null && value !== void 0 ? value : "").toLowerCase() !== filterValue.value.toLowerCase();
                    }
                    else if (filterValue.comparisonType === 32) {
                        return (value !== null && value !== void 0 ? value : "").toLowerCase().trim() === "";
                    }
                    else if (filterValue.comparisonType === 64) {
                        return (value !== null && value !== void 0 ? value : "").toLowerCase().trim() !== "";
                    }
                    else if (filterValue.comparisonType === 512) {
                        return isNumericComparison
                            ? numericValue < numericFilterValue
                            : (value !== null && value !== void 0 ? value : "").toLowerCase() < filterValue.value.toLowerCase();
                    }
                    else if (filterValue.comparisonType === 1024) {
                        return isNumericComparison
                            ? numericValue <= numericFilterValue
                            : (value !== null && value !== void 0 ? value : "").toLowerCase() <= filterValue.value.toLowerCase();
                    }
                    else if (filterValue.comparisonType === 128) {
                        return isNumericComparison
                            ? numericValue > numericFilterValue
                            : (value !== null && value !== void 0 ? value : "").toLowerCase() > filterValue.value.toLowerCase();
                    }
                    else if (filterValue.comparisonType === 256) {
                        return isNumericComparison
                            ? numericValue >= numericFilterValue
                            : (value !== null && value !== void 0 ? value : "").toLowerCase() >= filterValue.value.toLowerCase();
                    }
                    return false;
                }
            } exports('FieldTypeBase', FieldTypeBase);

        })
    };
}));
