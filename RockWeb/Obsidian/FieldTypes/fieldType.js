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

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }

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
        getHtmlValue(value, configurationValues, _isEscaped) {
          return "".concat(escapeHtml(this.getTextValue(value, configurationValues)));
        }
        getCondensedTextValue(value, configurationValues) {
          return truncate(this.getTextValue(value, configurationValues), 100);
        }
        getCondensedHtmlValue(value, configurationValues, _isEscaped) {
          return "".concat(escapeHtml(this.getCondensedTextValue(value, configurationValues)));
        }
        getFormattedComponent(_configurationValues) {
          return defineComponent({
            name: "FieldType.Formatted",
            props: _objectSpread2(_objectSpread2({}, getFieldEditorProps()), {}, {
              isEscaped: Boolean
            }),
            setup: props => {
              return {
                content: computed(() => {
                  var _props$modelValue;
                  return this.getHtmlValue((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : "", props.configurationValues, props.isEscaped);
                })
              };
            },
            template: "<div v-html=\"content\"></div>"
          });
        }
        getCondensedFormattedComponent(_configurationValues) {
          return defineComponent({
            name: "FieldType.CondensedFormatted",
            props: _objectSpread2(_objectSpread2({}, getFieldEditorProps()), {}, {
              isEscaped: Boolean
            }),
            setup: props => {
              return {
                content: computed(() => {
                  var _props$modelValue2;
                  return this.getCondensedHtmlValue((_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : "", props.configurationValues, props.isEscaped);
                })
              };
            },
            template: "<span v-html=\"content\"></span>"
          });
        }
        getEditComponent(_configurationValues) {
          return EditComponent;
        }
        getConfigurationComponent() {
          return unsupportedFieldTypeConfigurationComponent;
        }
        hasDefaultComponent(_configurationValues) {
          return true;
        }
        isFilterable(_configurationValues) {
          return true;
        }
        getSupportedComparisonTypes(_configurationValues) {
          return ComparisonType.EqualTo | ComparisonType.NotEqualTo;
        }
        getFilterComponent(configurationValues) {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(configurationValues), this.getEditComponent(configurationValues));
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
            if (this.getSupportedComparisonTypes(configurationValues) & ComparisonType.IsBlank && (value.comparisonType === ComparisonType.EqualTo || value.comparisonType === ComparisonType.NotEqualTo)) {
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
        doesValueMatchFilter(value, filterValue, configurationValues) {
          if (!filterValue.comparisonType) {
            return false;
          }
          if (!filterValue.value) {
            if (filterValue.comparisonType === ComparisonType.IsBlank) {
              return (value !== null && value !== void 0 ? value : "") === "";
            } else if (filterValue.comparisonType === ComparisonType.IsNotBlank) {
              return (value !== null && value !== void 0 ? value : "") !== "";
            } else if (this.getSupportedComparisonTypes(configurationValues) & ComparisonType.IsBlank) {
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
