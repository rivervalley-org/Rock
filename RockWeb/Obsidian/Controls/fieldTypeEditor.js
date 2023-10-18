System.register(['vue', './rockField', './notificationBox.obs', './dropDownList', './staticFormControl', '@Obsidian/Utility/fieldTypes', '@Obsidian/Utility/http', '@Obsidian/Utility/guid', '@Obsidian/Utility/component', '@Obsidian/Utility/util'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, RockField, NotificationBox, DropDownList, StaticFormControl, getFieldType, useHttp, areEqual, newGuid, updateRefValue, deepEqual;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
        }, function (module) {
            RockField = module["default"];
        }, function (module) {
            NotificationBox = module["default"];
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            StaticFormControl = module["default"];
        }, function (module) {
            getFieldType = module.getFieldType;
        }, function (module) {
            useHttp = module.useHttp;
        }, function (module) {
            areEqual = module.areEqual;
            newGuid = module.newGuid;
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function (module) {
            deepEqual = module.deepEqual;
        }],
        execute: (function () {

            var fieldTypeEditor = exports('default', defineComponent({
              name: "FieldTypeEditor",
              components: {
                NotificationBox,
                DropDownList,
                RockField,
                StaticFormControl
              },
              props: {
                modelValue: {
                  type: Object,
                  default: null
                },
                isFieldTypeReadOnly: {
                  type: Boolean,
                  default: false
                }
              },
              emits: ["update:modelValue"],
              setup(props, _ref) {
                var _props$modelValue$fie, _props$modelValue, _props$modelValue$con, _props$modelValue2;
                var emit = _ref.emit;
                var http = useHttp();
                var internalValue = ref(props.modelValue);
                var fieldTypeValue = ref((_props$modelValue$fie = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.fieldTypeGuid) !== null && _props$modelValue$fie !== void 0 ? _props$modelValue$fie : "");
                var resetToDefaultsTimer = null;
                var defaultValue = ref("");
                var configurationProperties = ref({});
                var configurationValues = ref((_props$modelValue$con = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.configurationValues) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : {});
                var hasDefaultValue = computed(() => {
                  var _fieldType$hasDefault;
                  if (!showConfigurationComponent.value || defaultValue.value === null) {
                    return false;
                  }
                  var fieldType = getFieldType(fieldTypeValue.value);
                  return (_fieldType$hasDefault = fieldType === null || fieldType === void 0 ? void 0 : fieldType.hasDefaultComponent()) !== null && _fieldType$hasDefault !== void 0 ? _fieldType$hasDefault : false;
                });
                var isFieldTypesReady = ref(false);
                var isConfigurationReady = ref(false);
                var isReady = computed(() => isFieldTypesReady.value && isConfigurationReady.value);
                var fieldErrorMessage = ref("");
                var fieldTypeOptions = ref([]);
                var configurationComponent = computed(() => {
                  var fieldType = getFieldType(fieldTypeValue.value);
                  if (fieldType) {
                    return fieldType.getConfigurationComponent();
                  }
                  return null;
                });
                var showConfigurationComponent = computed(() => {
                  return configurationComponent.value !== null && isReady.value;
                });
                var fieldTypeName = computed(() => {
                  var _matches$0$text;
                  var matches = fieldTypeOptions.value.filter(v => areEqual(v.value, fieldTypeValue.value));
                  return matches.length >= 1 ? (_matches$0$text = matches[0].text) !== null && _matches$0$text !== void 0 ? _matches$0$text : "" : "";
                });
                var defaultValueAttribute = computed(() => {
                  return {
                    fieldTypeGuid: fieldTypeValue.value,
                    attributeGuid: newGuid(),
                    configurationValues: configurationValues.value,
                    name: "Default Value",
                    key: "DefaultValue",
                    description: "",
                    isRequired: false,
                    order: 0,
                    categories: []
                  };
                });
                var isInternalUpdate = false;
                var updateModelValue = () => {
                  var _defaultValue$value;
                  if (isInternalUpdate) {
                    return;
                  }
                  var newValue = {
                    fieldTypeGuid: fieldTypeValue.value,
                    configurationValues: configurationValues.value,
                    defaultValue: (_defaultValue$value = defaultValue.value) !== null && _defaultValue$value !== void 0 ? _defaultValue$value : ""
                  };
                  updateRefValue(internalValue, newValue);
                };
                var resetToDefaults = () => {
                  if (resetToDefaultsTimer !== null) {
                    clearTimeout(resetToDefaultsTimer);
                    resetToDefaultsTimer = null;
                  }
                  isConfigurationReady.value = false;
                  isInternalUpdate = true;
                  configurationProperties.value = {};
                  configurationValues.value = {};
                  defaultValue.value = "";
                  isInternalUpdate = false;
                  updateModelValue();
                };
                var updateFieldConfiguration = currentDefaultValue => {
                  if (fieldTypeValue.value === "") {
                    resetToDefaults();
                    return;
                  }
                  var update = {
                    fieldTypeGuid: fieldTypeValue.value,
                    configurationValues: configurationValues.value,
                    defaultValue: currentDefaultValue
                  };
                  http.post("/api/v2/Controls/FieldTypeEditorUpdateAttributeConfiguration", null, update).then(result => {
                    resetToDefaults();
                    console.debug("got configuration", result.data);
                    if (result.isSuccess && result.data && result.data.configurationProperties && result.data.configurationValues) {
                      var _result$data$defaultV;
                      fieldErrorMessage.value = "";
                      isConfigurationReady.value = true;
                      isInternalUpdate = true;
                      configurationProperties.value = result.data.configurationProperties;
                      configurationValues.value = result.data.configurationValues;
                      defaultValue.value = (_result$data$defaultV = result.data.defaultValue) !== null && _result$data$defaultV !== void 0 ? _result$data$defaultV : "";
                      isInternalUpdate = false;
                      updateModelValue();
                    } else {
                      var _result$errorMessage;
                      fieldErrorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Encountered unknown error communicating with server.";
                    }
                  });
                };
                var onDefaultValueUpdate = value => {
                  console.debug("default value updated");
                  defaultValue.value = value;
                  updateModelValue();
                };
                var onUpdateConfiguration = () => {
                  var _defaultValue$value2;
                  console.debug("onUpdateConfiguration");
                  updateFieldConfiguration((_defaultValue$value2 = defaultValue.value) !== null && _defaultValue$value2 !== void 0 ? _defaultValue$value2 : "");
                };
                var onUpdateConfigurationValue = (_key, _value) => {
                  updateModelValue();
                };
                watch(fieldTypeValue, () => {
                  if (resetToDefaultsTimer === null) {
                    resetToDefaultsTimer = window.setTimeout(resetToDefaults, 250);
                  }
                  updateFieldConfiguration("");
                });
                watch(internalValue, () => {
                  if (!deepEqual(internalValue.value, props.modelValue, true)) {
                    emit("update:modelValue", internalValue.value);
                  }
                });
                http.post("/api/v2/Controls/FieldTypeEditorGetAvailableFieldTypes", undefined, {}).then(result => {
                  if (result.isSuccess && result.data) {
                    fieldTypeOptions.value = result.data;
                    isFieldTypesReady.value = true;
                    if (fieldTypeValue.value !== "") {
                      var _props$modelValue$def, _props$modelValue3;
                      updateFieldConfiguration((_props$modelValue$def = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.defaultValue) !== null && _props$modelValue$def !== void 0 ? _props$modelValue$def : "");
                    }
                  }
                });
                return {
                  configurationComponent,
                  configurationValues,
                  configurationProperties,
                  defaultValue,
                  defaultValueAttribute,
                  hasDefaultValue,
                  fieldErrorMessage,
                  fieldTypeName,
                  fieldTypeOptions,
                  fieldTypeValue,
                  isFieldTypesReady,
                  onDefaultValueUpdate,
                  onUpdateConfiguration,
                  onUpdateConfigurationValue,
                  showConfigurationComponent
                };
              },
              template: "\n<div>\n    <template v-if=\"isFieldTypesReady\">\n        <StaticFormControl v-if=\"isFieldTypeReadOnly\" label=\"Field Type\" v-model=\"fieldTypeName\" />\n        <DropDownList v-else label=\"Field Type\" v-model=\"fieldTypeValue\" :items=\"fieldTypeOptions\" rules=\"required\" enhanceForLongLists />\n    </template>\n    <NotificationBox v-if=\"fieldErrorMessage\" alertType=\"warning\">\n        {{ fieldErrorMessage }}\n    </NotificationBox>\n    <component v-if=\"showConfigurationComponent\" :is=\"configurationComponent\" v-model=\"configurationValues\" :configurationProperties=\"configurationProperties\" @updateConfiguration=\"onUpdateConfiguration\" @updateConfigurationValue=\"onUpdateConfigurationValue\" />\n    <RockField v-if=\"hasDefaultValue\" :modelValue=\"defaultValue\" :attribute=\"defaultValueAttribute\" @update:modelValue=\"onDefaultValueUpdate\" isEditMode />\n</div>\n"
            }));

        })
    };
}));
//# sourceMappingURL=fieldTypeEditor.js.map
