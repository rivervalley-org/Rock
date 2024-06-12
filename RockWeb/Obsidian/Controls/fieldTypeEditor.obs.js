System.register(['vue', './rockField.obs', './notificationBox.obs', './dropDownList.obs', './staticFormControl.obs', '@Obsidian/Utility/fieldTypes', '@Obsidian/Utility/http', '@Obsidian/Utility/guid', '@Obsidian/Utility/component', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, Fragment, createBlock, unref, isRef, createCommentVNode, withCtx, createTextVNode, toDisplayString, resolveDynamicComponent, RockField, NotificationBox, DropDownList, StaticFormControl, getFieldType, useHttp, areEqual, emptyGuid, newGuid, toGuidOrNull, updateRefValue, deepEqual;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
      createCommentVNode = module.createCommentVNode;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      resolveDynamicComponent = module.resolveDynamicComponent;
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
      emptyGuid = module.emptyGuid;
      newGuid = module.newGuid;
      toGuidOrNull = module.toGuidOrNull;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      deepEqual = module.deepEqual;
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'fieldTypeEditor',
        props: {
          modelValue: {
            type: Object,
            default: null
          },
          isFieldTypeReadOnly: {
            type: Boolean,
            default: false
          },
          showConfigOnly: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue$fie, _props$modelValue, _props$modelValue$con, _props$modelValue2;
          var emit = _ref.emit;
          var props = __props;
          var http = useHttp();
          var internalValue = ref(props.modelValue);
          var fieldTypeValueGuidOrEmptyString = ref((_props$modelValue$fie = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.fieldTypeGuid) !== null && _props$modelValue$fie !== void 0 ? _props$modelValue$fie : "");
          var resetToDefaultsTimer = null;
          var defaultValue = ref("");
          var configurationProperties = ref({});
          var configurationValues = ref((_props$modelValue$con = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.configurationValues) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : {});
          var editConfigurationValues = ref({});
          var fieldType = computed(() => {
            if (!fieldTypeValueGuidOrEmptyString.value) {
              return null;
            }
            var option = fieldTypeOptions.value.find(o => areEqual(o.value, fieldTypeValueGuidOrEmptyString.value) || areEqual(o.category, fieldTypeValueGuidOrEmptyString.value));
            if (!option || !option.value && !option.category) {
              return null;
            }
            return getFieldType(option.category || option.value || "");
          });
          var hasDefaultValue = computed(() => {
            var _fieldType$value$hasD, _fieldType$value;
            if (!showConfigurationComponent.value || defaultValue.value === null) {
              return false;
            }
            return (_fieldType$value$hasD = (_fieldType$value = fieldType.value) === null || _fieldType$value === void 0 ? void 0 : _fieldType$value.hasDefaultComponent(configurationValues.value)) !== null && _fieldType$value$hasD !== void 0 ? _fieldType$value$hasD : false;
          });
          var isFieldTypesReady = ref(false);
          var isConfigurationReady = ref(false);
          var isReady = computed(() => isFieldTypesReady.value && isConfigurationReady.value);
          var fieldErrorMessage = ref("");
          var fieldTypeOptions = ref([]);
          var configurationComponent = computed(() => {
            if (fieldType.value) {
              return fieldType.value.getConfigurationComponent();
            }
            return null;
          });
          var showConfigurationComponent = computed(() => {
            return configurationComponent.value !== null && isReady.value;
          });
          var fieldTypeName = computed(() => {
            var _option$text;
            if (!fieldTypeValueGuidOrEmptyString.value) {
              return "";
            }
            var option = fieldTypeOptions.value.find(o => areEqual(o.value, fieldTypeValueGuidOrEmptyString.value) || areEqual(o.category, fieldTypeValueGuidOrEmptyString.value));
            return (_option$text = option === null || option === void 0 ? void 0 : option.text) !== null && _option$text !== void 0 ? _option$text : "";
          });
          var defaultValueAttribute = computed(() => {
            var option = fieldTypeOptions.value.find(o => areEqual(o.value, fieldTypeValueGuidOrEmptyString.value) || areEqual(o.category, fieldTypeValueGuidOrEmptyString.value));
            return {
              fieldTypeGuid: (option === null || option === void 0 ? void 0 : option.category) || fieldTypeValueGuidOrEmptyString.value || emptyGuid,
              attributeGuid: newGuid(),
              configurationValues: editConfigurationValues.value,
              name: "Default Value",
              key: "DefaultValue",
              description: "",
              isRequired: false,
              order: 0,
              categories: []
            };
          });
          var isInternalUpdate = false;
          function updateModelValue() {
            var _defaultValue$value;
            if (isInternalUpdate) {
              return;
            }
            var newValue = {
              fieldTypeGuid: fieldTypeValueGuidOrEmptyString.value || emptyGuid,
              configurationValues: configurationValues.value,
              defaultValue: (_defaultValue$value = defaultValue.value) !== null && _defaultValue$value !== void 0 ? _defaultValue$value : ""
            };
            updateRefValue(internalValue, newValue);
          }
          function resetToDefaults() {
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
          }
          function updateFieldConfiguration(currentDefaultValue) {
            var fieldTypeGuid = toGuidOrNull(fieldTypeValueGuidOrEmptyString.value);
            if (!fieldTypeGuid || areEqual(fieldTypeGuid, emptyGuid)) {
              resetToDefaults();
              return;
            }
            var update = {
              fieldTypeGuid,
              configurationValues: configurationValues.value,
              defaultValue: currentDefaultValue
            };
            http.post("/api/v2/Controls/FieldTypeEditorUpdateAttributeConfiguration", null, update).then(result => {
              resetToDefaults();
              if (result.isSuccess && result.data && result.data.configurationProperties && result.data.adminConfigurationValues && result.data.editConfigurationValues) {
                var _result$data$defaultV;
                fieldErrorMessage.value = "";
                isConfigurationReady.value = true;
                isInternalUpdate = true;
                configurationProperties.value = result.data.configurationProperties;
                configurationValues.value = result.data.adminConfigurationValues;
                editConfigurationValues.value = result.data.editConfigurationValues;
                defaultValue.value = (_result$data$defaultV = result.data.defaultValue) !== null && _result$data$defaultV !== void 0 ? _result$data$defaultV : "";
                isInternalUpdate = false;
                updateModelValue();
              } else {
                var _result$errorMessage;
                fieldErrorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Encountered unknown error communicating with server.";
              }
            });
          }
          function onDefaultValueUpdate(value) {
            defaultValue.value = value;
            updateModelValue();
          }
          function onUpdateConfiguration() {
            var _defaultValue$value2;
            updateFieldConfiguration((_defaultValue$value2 = defaultValue.value) !== null && _defaultValue$value2 !== void 0 ? _defaultValue$value2 : "");
          }
          function onUpdateConfigurationValue(_key, _value) {
            updateModelValue();
          }
          watch(fieldTypeValueGuidOrEmptyString, () => {
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
          var options = {};
          http.post("/api/v2/Controls/FieldTypeEditorGetAvailableFieldTypes", undefined, options).then(result => {
            if (result.isSuccess && result.data) {
              fieldTypeOptions.value = result.data;
              isFieldTypesReady.value = true;
              if (fieldTypeValueGuidOrEmptyString.value !== "") {
                var _props$modelValue$def, _props$modelValue3;
                updateFieldConfiguration((_props$modelValue$def = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.defaultValue) !== null && _props$modelValue$def !== void 0 ? _props$modelValue$def : "");
              }
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [isFieldTypesReady.value && !__props.showConfigOnly ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [__props.isFieldTypeReadOnly ? (openBlock(), createBlock(unref(StaticFormControl), {
              key: 0,
              label: "Field Type",
              modelValue: unref(fieldTypeName),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(fieldTypeName) ? fieldTypeName.value = $event : null)
            }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(DropDownList), {
              key: 1,
              label: "Field Type",
              modelValue: fieldTypeValueGuidOrEmptyString.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => fieldTypeValueGuidOrEmptyString.value = $event),
              items: fieldTypeOptions.value,
              rules: "required",
              enhanceForLongLists: ""
            }, null, 8, ["modelValue", "items"]))], 64)) : createCommentVNode("v-if", true), fieldErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(fieldErrorMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), unref(showConfigurationComponent) ? (openBlock(), createBlock(resolveDynamicComponent(unref(configurationComponent)), {
              key: 2,
              modelValue: configurationValues.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => configurationValues.value = $event),
              configurationProperties: configurationProperties.value,
              onUpdateConfiguration: onUpdateConfiguration,
              onUpdateConfigurationValue: onUpdateConfigurationValue
            }, null, 40, ["modelValue", "configurationProperties"])) : createCommentVNode("v-if", true), unref(hasDefaultValue) && !__props.showConfigOnly ? (openBlock(), createBlock(unref(RockField), {
              key: 3,
              modelValue: defaultValue.value,
              attribute: unref(defaultValueAttribute),
              "onUpdate:modelValue": onDefaultValueUpdate,
              isEditMode: "",
              dataEntryMode: "defaultValue"
            }, null, 8, ["modelValue", "attribute"])) : createCommentVNode("v-if", true)]);
          };
        }
      }));

      script.__file = "Framework/Controls/fieldTypeEditor.obs";

    })
  };
}));
//# sourceMappingURL=fieldTypeEditor.obs.js.map
