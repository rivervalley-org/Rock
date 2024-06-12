System.register(['vue', '@Obsidian/Core/Reporting/comparisonType', '@Obsidian/Core/Reporting/comparisonTypeOptions', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Core/Reporting/filterMode', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/fieldFilterContainer.obs', '@Obsidian/Utility/numberUtils'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, isSingleComparisonType, isCompareVisibleForComparisonFilter, binaryComparisonTypes, stringComparisonTypes, containsComparisonTypes, getFilteredComparisonTypeOptions, ComparisonType, FilterMode, DropDownList, FieldFilterContainer, toNumberOrNull;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
        }, function (module) {
            isSingleComparisonType = module.isSingleComparisonType;
            isCompareVisibleForComparisonFilter = module.isCompareVisibleForComparisonFilter;
            binaryComparisonTypes = module.binaryComparisonTypes;
            stringComparisonTypes = module.stringComparisonTypes;
            containsComparisonTypes = module.containsComparisonTypes;
        }, function (module) {
            getFilteredComparisonTypeOptions = module.getFilteredComparisonTypeOptions;
        }, function (module) {
            ComparisonType = module.ComparisonType;
        }, function (module) {
            FilterMode = module.FilterMode;
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            FieldFilterContainer = module["default"];
        }, function (module) {
            toNumberOrNull = module.toNumberOrNull;
        }],
        execute: (function () {

            exports({
                getFieldConfigurationProps: getFieldConfigurationProps,
                getFieldEditorProps: getFieldEditorProps,
                getStandardFilterComponent: getStandardFilterComponent
            });

            function getFieldEditorProps() {
              return {
                modelValue: {
                  type: String,
                  required: true
                },
                configurationValues: {
                  type: Object,
                  default: () => ({})
                },
                dataEntryMode: {
                  type: String
                }
              };
            }
            var fieldFilterProps = exports('fieldFilterProps', {
              modelValue: {
                type: Object,
                required: true
              },
              configurationValues: {
                type: Object,
                required: true
              },
              filterMode: {
                type: Number,
                required: true
              },
              required: {
                type: Boolean,
                required: true
              }
            });
            function getFieldConfigurationProps() {
              return {
                modelValue: {
                  type: Object,
                  required: true
                },
                configurationProperties: {
                  type: Object,
                  required: true
                }
              };
            }
            function getStandardFilterComponent(comparisonLabelOrTypes, valueComponent, options) {
              var comparisonTypes = typeof comparisonLabelOrTypes === "number" ? comparisonLabelOrTypes : null;
              var compareLabel = typeof comparisonLabelOrTypes === "string" ? comparisonLabelOrTypes : "";
              var comparisonTypeOptions = comparisonTypes !== null ? getFilteredComparisonTypeOptions(comparisonTypes) : [];
              if (options !== null && options !== void 0 && options.updateComparisonTypeNames) {
                comparisonTypeOptions = comparisonTypeOptions.map(o => {
                  return {
                    value: o.value,
                    text: o.text
                  };
                });
                options.updateComparisonTypeNames(comparisonTypeOptions);
              }
              return defineComponent({
                name: "StandardFilterComponent",
                components: {
                  DropDownList,
                  FieldFilterContainer,
                  ValueComponent: valueComponent
                },
                props: fieldFilterProps,
                emits: ["update:modelValue"],
                setup(props, _ref) {
                  var _props$modelValue$com, _props$modelValue$com2, _props$modelValue$com3;
                  var emit = _ref.emit;
                  var internalComparisonType = ref((_props$modelValue$com = (_props$modelValue$com2 = props.modelValue.comparisonType) === null || _props$modelValue$com2 === void 0 ? void 0 : _props$modelValue$com2.toString()) !== null && _props$modelValue$com !== void 0 ? _props$modelValue$com : "");
                  var comparisonType = ref((_props$modelValue$com3 = props.modelValue.comparisonType) !== null && _props$modelValue$com3 !== void 0 ? _props$modelValue$com3 : null);
                  var internalComparisonValue = ref(props.modelValue.value);
                  var hasCompareComponent = computed(() => {
                    return comparisonTypes !== null && props.filterMode !== FilterMode.Simple && !isSingleComparisonType(comparisonTypes) && isCompareVisibleForComparisonFilter(comparisonTypes, props.filterMode);
                  });
                  var hasValueComponent = computed(() => {
                    return internalComparisonType.value !== ComparisonType.IsBlank.toString() && internalComparisonType.value !== ComparisonType.IsNotBlank.toString();
                  });
                  var isTypeOptional = computed(() => !props.required);
                  var emitValueIfChanged = () => {
                    var type;
                    if (compareLabel || comparisonTypes === null) {
                      type = null;
                    } else if (isSingleComparisonType(comparisonTypes)) {
                      type = comparisonTypes;
                    } else {
                      if (props.filterMode === FilterMode.Simple) {
                        if (comparisonTypes === binaryComparisonTypes) {
                          type = ComparisonType.EqualTo;
                        } else if (comparisonTypes === stringComparisonTypes || comparisonTypes === containsComparisonTypes) {
                          type = ComparisonType.Contains;
                        } else {
                          type = null;
                        }
                      } else {
                        type = toNumberOrNull(internalComparisonType.value);
                      }
                    }
                    comparisonType.value = type;
                    var newValue = {
                      comparisonType: type,
                      value: internalComparisonValue.value
                    };
                    if (newValue.comparisonType !== props.modelValue.comparisonType || newValue.value !== props.modelValue.value) {
                      emit("update:modelValue", newValue);
                    }
                  };
                  watch(() => props.modelValue, () => {
                    var _props$modelValue$com4, _props$modelValue$com5, _props$modelValue$com6;
                    internalComparisonType.value = (_props$modelValue$com4 = (_props$modelValue$com5 = props.modelValue.comparisonType) === null || _props$modelValue$com5 === void 0 ? void 0 : _props$modelValue$com5.toString()) !== null && _props$modelValue$com4 !== void 0 ? _props$modelValue$com4 : "";
                    comparisonType.value = (_props$modelValue$com6 = props.modelValue.comparisonType) !== null && _props$modelValue$com6 !== void 0 ? _props$modelValue$com6 : null;
                    internalComparisonValue.value = props.modelValue.value;
                  });
                  watch([internalComparisonType, internalComparisonValue], () => {
                    emitValueIfChanged();
                  });
                  emitValueIfChanged();
                  return {
                    compareLabel,
                    comparisonType,
                    comparisonTypeOptions,
                    hasCompareComponent,
                    hasValueComponent,
                    internalComparisonType,
                    internalComparisonValue,
                    isTypeOptional
                  };
                },
                template: "\n<FieldFilterContainer :compareLabel=\"compareLabel\">\n    <template v-if=\"hasCompareComponent\" #compare>\n        <DropDownList v-model=\"internalComparisonType\" :items=\"comparisonTypeOptions\" :showBlankItem=\"isTypeOptional\" />\n    </template>\n\n    <ValueComponent v-if=\"hasValueComponent\" v-model=\"internalComparisonValue\" :configurationValues=\"configurationValues\" :comparisonType=\"comparisonType\" />\n</FieldFilterContainer>\n"
              });
            }

        })
    };
}));
//# sourceMappingURL=utils.js.map
