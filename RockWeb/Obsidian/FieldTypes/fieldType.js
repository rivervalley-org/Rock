System.register(['vue', '@Obsidian/Core/Reporting/comparisonType', '@Obsidian/Utility/stringUtils', './textFieldComponents', './utils', '@Obsidian/Enums/Reporting/comparisonType'], (function (exports) {
    'use strict';
    var defineComponent, computed, getComparisonName, escapeHtml, truncate, EditComponent, getFieldEditorProps, getStandardFilterComponent, ComparisonType;
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
        }, function (module) {
            ComparisonType = module.ComparisonType;
        }],
        execute: (function () {

            var unsupportedFieldTypeConfigurationComponent = defineComponent({
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
              template: "\n<div class=\"alert alert-warning\">\n    Configuration of this field type is not supported.\n</div>\n"
            });
            class FieldTypeBase {
              getTextValue(value, _configurationValues) {
                return value !== null && value !== void 0 ? value : "";
              }
              getHtmlValue(value, configurationValues) {
                return "".concat(escapeHtml(this.getTextValue(value, configurationValues)));
              }
              getCondensedTextValue(value, configurationValues) {
                return truncate(this.getTextValue(value, configurationValues), 100);
              }
              getCondensedHtmlValue(value, configurationValues) {
                return "".concat(escapeHtml(this.getCondensedTextValue(value, configurationValues)));
              }
              getFormattedComponent() {
                return defineComponent({
                  name: "FieldType.Formatted",
                  props: getFieldEditorProps(),
                  setup: props => {
                    return {
                      content: computed(() => {
                        var _props$modelValue;
                        return this.getHtmlValue((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : "", props.configurationValues);
                      })
                    };
                  },
                  template: "<div v-html=\"content\"></div>"
                });
              }
              getCondensedFormattedComponent() {
                return defineComponent({
                  name: "FieldType.CondensedFormatted",
                  props: getFieldEditorProps(),
                  setup: props => {
                    return {
                      content: computed(() => {
                        var _props$modelValue2;
                        return this.getCondensedHtmlValue((_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : "", props.configurationValues);
                      })
                    };
                  },
                  template: "<span v-html=\"content\"></span>"
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
                return ComparisonType.EqualTo | ComparisonType.NotEqualTo;
              }
              getFilterComponent() {
                return getStandardFilterComponent(this.getSupportedComparisonTypes(), this.getEditComponent());
              }
              getFilterValueDescription(value, configurationValues) {
                var valueText = this.getFilterValueText(value, configurationValues);
                if (!value.comparisonType) {
                  return valueText ? "Is ".concat(valueText) : "";
                }
                if (value.comparisonType === ComparisonType.IsBlank || value.comparisonType === ComparisonType.IsNotBlank) {
                  return getComparisonName(value.comparisonType);
                }
                if (valueText === "") {
                  if (this.getSupportedComparisonTypes() & ComparisonType.IsBlank && (value.comparisonType === ComparisonType.EqualTo || value.comparisonType === ComparisonType.NotEqualTo)) {
                    return "".concat(getComparisonName(value.comparisonType), " ''");
                  }
                  return "";
                }
                return "".concat(getComparisonName(value.comparisonType), " ").concat(valueText);
              }
              getFilterValueText(value, configurationValues) {
                var _this$getTextValue;
                var text = (_this$getTextValue = this.getTextValue(value.value, configurationValues !== null && configurationValues !== void 0 ? configurationValues : {})) !== null && _this$getTextValue !== void 0 ? _this$getTextValue : "";
                return text ? "'".concat(text, "'") : text;
              }
              doesValueMatchFilter(value, filterValue, _configurationValues) {
                if (!filterValue.comparisonType) {
                  return false;
                }
                if (!filterValue.value) {
                  if (filterValue.comparisonType === ComparisonType.IsBlank) {
                    return (value !== null && value !== void 0 ? value : "") === "";
                  } else if (filterValue.comparisonType === ComparisonType.IsNotBlank) {
                    return (value !== null && value !== void 0 ? value : "") !== "";
                  } else if (this.getSupportedComparisonTypes() & ComparisonType.IsBlank) {
                    if (filterValue.comparisonType === ComparisonType.EqualTo) {
                      return (value !== null && value !== void 0 ? value : "") === "";
                    } else if (filterValue.comparisonType === ComparisonType.NotEqualTo) {
                      return (value !== null && value !== void 0 ? value : "") !== "";
                    }
                  }
                  return false;
                }
                var numericFilterValue = parseFloat(filterValue.value);
                var numericValue = parseFloat(value !== null && value !== void 0 ? value : "");
                var isNumericComparison = !Number.isNaN(numericFilterValue) && !Number.isNaN(numericValue);
                if (filterValue.comparisonType === ComparisonType.Contains) {
                  return (value !== null && value !== void 0 ? value : "").toLowerCase().includes(filterValue.value.toLowerCase());
                } else if (filterValue.comparisonType === ComparisonType.DoesNotContain) {
                  return !(value !== null && value !== void 0 ? value : "").toLowerCase().includes(filterValue.value.toLowerCase());
                } else if (filterValue.comparisonType === ComparisonType.StartsWith) {
                  return (value !== null && value !== void 0 ? value : "").toLowerCase().startsWith(filterValue.value.toLowerCase());
                } else if (filterValue.comparisonType === ComparisonType.EndsWith) {
                  return (value !== null && value !== void 0 ? value : "").toLowerCase().endsWith(filterValue.value.toLowerCase());
                } else if (filterValue.comparisonType === ComparisonType.EqualTo) {
                  return (value !== null && value !== void 0 ? value : "").toLowerCase() === filterValue.value.toLowerCase();
                } else if (filterValue.comparisonType === ComparisonType.NotEqualTo) {
                  return (value !== null && value !== void 0 ? value : "").toLowerCase() !== filterValue.value.toLowerCase();
                } else if (filterValue.comparisonType === ComparisonType.IsBlank) {
                  return (value !== null && value !== void 0 ? value : "").toLowerCase().trim() === "";
                } else if (filterValue.comparisonType === ComparisonType.IsNotBlank) {
                  return (value !== null && value !== void 0 ? value : "").toLowerCase().trim() !== "";
                } else if (filterValue.comparisonType === ComparisonType.LessThan) {
                  return isNumericComparison ? numericValue < numericFilterValue : (value !== null && value !== void 0 ? value : "").toLowerCase() < filterValue.value.toLowerCase();
                } else if (filterValue.comparisonType === ComparisonType.LessThanOrEqualTo) {
                  return isNumericComparison ? numericValue <= numericFilterValue : (value !== null && value !== void 0 ? value : "").toLowerCase() <= filterValue.value.toLowerCase();
                } else if (filterValue.comparisonType === ComparisonType.GreaterThan) {
                  return isNumericComparison ? numericValue > numericFilterValue : (value !== null && value !== void 0 ? value : "").toLowerCase() > filterValue.value.toLowerCase();
                } else if (filterValue.comparisonType === ComparisonType.GreaterThanOrEqualTo) {
                  return isNumericComparison ? numericValue >= numericFilterValue : (value !== null && value !== void 0 ? value : "").toLowerCase() >= filterValue.value.toLowerCase();
                }
                return false;
              }
            } exports('FieldTypeBase', FieldTypeBase);

        })
    };
}));
//# sourceMappingURL=fieldType.js.map
