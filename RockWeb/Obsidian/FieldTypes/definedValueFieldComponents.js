System.register(['vue', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/numberBox', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Core/Reporting/comparisonType', './fieldType', './utils'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, inject, CheckBox, CheckBoxList, DropDownList, NumberBox, asBoolean, asTrueFalseOrNull, toNumber, toNumberOrNull, defineAsyncComponent, useVModelPassthrough, getFieldEditorProps;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      inject = module.inject;
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      asBoolean = module.asBoolean;
      asTrueFalseOrNull = module.asTrueFalseOrNull;
    }, function (module) {
      toNumber = module.toNumber;
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      useVModelPassthrough = module.useVModelPassthrough;
    }, function () {}, function () {}, function () {}, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
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
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
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

      var ConfigurationPropertyKey = function (ConfigurationPropertyKey) {
        ConfigurationPropertyKey["DefinedTypes"] = "definedTypes";
        ConfigurationPropertyKey["DefinedValues"] = "definedValues";
        return ConfigurationPropertyKey;
      }({});
      var ConfigurationValueKey = function (ConfigurationValueKey) {
        ConfigurationValueKey["DefinedType"] = "definedtype";
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["AllowMultiple"] = "allowmultiple";
        ConfigurationValueKey["DisplayDescription"] = "displaydescription";
        ConfigurationValueKey["EnhancedSelection"] = "enhancedselection";
        ConfigurationValueKey["IncludeInactive"] = "includeInactive";
        ConfigurationValueKey["SelectableValues"] = "selectableValues";
        ConfigurationValueKey["AllowAddingNewValues"] = "AllowAddingNewValues";
        ConfigurationValueKey["RepeatColumns"] = "RepeatColumns";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./definedValueFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./definedValueFieldComponents')).ConfigurationComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./definedValueFieldComponents')).FilterComponent;
      }));

      function parseModelValue(modelValue) {
        try {
          var clientValue = JSON.parse(modelValue !== null && modelValue !== void 0 ? modelValue : "");
          return clientValue.value;
        } catch (_unused) {
          return "";
        }
      }
      function getClientValue(value, valueOptions) {
        var values = Array.isArray(value) ? value : [value];
        var selectedValues = valueOptions.filter(v => values.includes(v.value));
        if (selectedValues.length >= 1) {
          return {
            value: selectedValues.map(v => v.value).join(","),
            text: selectedValues.map(v => v.text).join(", "),
            description: selectedValues.map(v => v.description).join(", ")
          };
        } else {
          return {
            value: "",
            text: "",
            description: ""
          };
        }
      }
      var EditComponent = exports('EditComponent', defineComponent({
        name: "DefinedValueField.Edit",
        components: {
          DropDownList,
          CheckBoxList
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref(parseModelValue(props.modelValue));
          var internalValues = ref(parseModelValue(props.modelValue).split(",").filter(v => v !== ""));
          var valueOptions = computed(() => {
            try {
              var _props$configurationV;
              return JSON.parse((_props$configurationV = props.configurationValues[ConfigurationValueKey.Values]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "[]");
            } catch (_unused2) {
              return [];
            }
          });
          var displayDescription = computed(() => asBoolean(props.configurationValues[ConfigurationValueKey.DisplayDescription]));
          var options = computed(() => {
            return valueOptions.value.map(v => {
              return {
                text: displayDescription.value ? v.description || v.text : v.text,
                value: v.value
              };
            });
          });
          var isMultiple = computed(() => asBoolean(props.configurationValues[ConfigurationValueKey.AllowMultiple]));
          var configAttributes = computed(() => {
            var attributes = {};
            var enhancedConfig = props.configurationValues[ConfigurationValueKey.EnhancedSelection];
            if (enhancedConfig) {
              attributes.enhanceForLongLists = asBoolean(enhancedConfig);
            }
            return attributes;
          });
          var repeatColumns = computed(() => toNumber(props.configurationValues[ConfigurationValueKey.RepeatColumns]));
          watch(() => props.modelValue, () => {
            internalValue.value = parseModelValue(props.modelValue);
            internalValues.value = parseModelValue(props.modelValue).split(",").filter(v => v !== "");
          });
          watch(() => internalValue.value, () => {
            if (!isMultiple.value) {
              var clientValue = getClientValue(internalValue.value, valueOptions.value);
              emit("update:modelValue", JSON.stringify(clientValue));
            }
          });
          watch(() => internalValues.value, () => {
            if (isMultiple.value) {
              var clientValue = getClientValue(internalValues.value, valueOptions.value);
              emit("update:modelValue", JSON.stringify(clientValue));
            }
          });
          return {
            configAttributes,
            internalValue,
            internalValues,
            isMultiple,
            isRequired: inject("isRequired"),
            options,
            repeatColumns
          };
        },
        template: "\n<DropDownList v-if=\"!isMultiple || configAttributes.enhanceForLongLists\" v-model=\"internalValue\" v-bind=\"configAttributes\" :items=\"options\" :showBlankItem=\"!isRequired\" />\n<CheckBoxList v-else v-model=\"internalValues\" :items=\"options\" horizontal :repeatColumns=\"repeatColumns\" />\n"
      }));
      var FilterComponent = exports('FilterComponent', defineComponent({
        name: "DefinedValueField.Filter",
        components: {
          EditComponent
        },
        props: getFieldEditorProps(),
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var configurationValues = ref(_objectSpread2({}, props.configurationValues));
          configurationValues.value[ConfigurationValueKey.AllowMultiple] = "True";
          watch(() => props.configurationValues, () => {
            configurationValues.value = _objectSpread2({}, props.configurationValues);
            configurationValues.value[ConfigurationValueKey.AllowMultiple] = "True";
          });
          return {
            internalValue,
            configurationValues
          };
        },
        template: "\n<EditComponent v-model=\"internalValue\" :configurationValues=\"configurationValues\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "DefinedValueField.Configuration",
        components: {
          DropDownList,
          CheckBoxList,
          CheckBox,
          NumberBox
        },
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
        setup(props, _ref3) {
          var emit = _ref3.emit;
          var definedTypeValue = ref("");
          var allowMultipleValues = ref(false);
          var displayDescriptions = ref(false);
          var enhanceForLongLists = ref(false);
          var includeInactive = ref(false);
          var repeatColumns = ref(null);
          var selectableValues = ref([]);
          var definedTypeItems = ref([]);
          var definedValueItems = ref([]);
          var definedTypeOptions = computed(() => {
            return definedTypeItems.value;
          });
          var definedValueOptions = computed(() => definedValueItems.value);
          var hasValues = computed(() => {
            return definedValueItems.value.length > 0;
          });
          var maybeUpdateModelValue = () => {
            var _asTrueFalseOrNull, _asTrueFalseOrNull2, _asTrueFalseOrNull3, _asTrueFalseOrNull4, _repeatColumns$value$, _repeatColumns$value, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3, _props$modelValue$Con4, _props$modelValue$Con5, _props$modelValue$Con6;
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.DefinedType] = definedTypeValue.value;
            newValue[ConfigurationValueKey.SelectableValues] = selectableValues.value.join(",");
            newValue[ConfigurationValueKey.AllowMultiple] = (_asTrueFalseOrNull = asTrueFalseOrNull(allowMultipleValues.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
            newValue[ConfigurationValueKey.DisplayDescription] = (_asTrueFalseOrNull2 = asTrueFalseOrNull(displayDescriptions.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False";
            newValue[ConfigurationValueKey.EnhancedSelection] = (_asTrueFalseOrNull3 = asTrueFalseOrNull(enhanceForLongLists.value)) !== null && _asTrueFalseOrNull3 !== void 0 ? _asTrueFalseOrNull3 : "False";
            newValue[ConfigurationValueKey.IncludeInactive] = (_asTrueFalseOrNull4 = asTrueFalseOrNull(includeInactive.value)) !== null && _asTrueFalseOrNull4 !== void 0 ? _asTrueFalseOrNull4 : "False";
            newValue[ConfigurationValueKey.RepeatColumns] = (_repeatColumns$value$ = (_repeatColumns$value = repeatColumns.value) === null || _repeatColumns$value === void 0 ? void 0 : _repeatColumns$value.toString()) !== null && _repeatColumns$value$ !== void 0 ? _repeatColumns$value$ : "";
            var anyValueChanged = newValue[ConfigurationValueKey.DefinedType] !== props.modelValue[ConfigurationValueKey.DefinedType] || newValue[ConfigurationValueKey.SelectableValues] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.SelectableValues]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "") || newValue[ConfigurationValueKey.AllowMultiple] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.AllowMultiple]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "False") || newValue[ConfigurationValueKey.DisplayDescription] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.DisplayDescription]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "False") || newValue[ConfigurationValueKey.EnhancedSelection] !== ((_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.EnhancedSelection]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "False") || newValue[ConfigurationValueKey.IncludeInactive] !== ((_props$modelValue$Con5 = props.modelValue[ConfigurationValueKey.IncludeInactive]) !== null && _props$modelValue$Con5 !== void 0 ? _props$modelValue$Con5 : "False") || newValue[ConfigurationValueKey.RepeatColumns] !== ((_props$modelValue$Con6 = props.modelValue[ConfigurationValueKey.RepeatColumns]) !== null && _props$modelValue$Con6 !== void 0 ? _props$modelValue$Con6 : "");
            if (anyValueChanged) {
              emit("update:modelValue", newValue);
              return true;
            } else {
              return false;
            }
          };
          var maybeUpdateConfiguration = (key, value) => {
            if (maybeUpdateModelValue()) {
              emit("updateConfigurationValue", key, value);
            }
          };
          watch(() => [props.modelValue, props.configurationProperties], () => {
            var _props$modelValue$Con7, _props$modelValue$Con8;
            var definedTypes = props.configurationProperties[ConfigurationPropertyKey.DefinedTypes];
            var definedValues = props.configurationProperties[ConfigurationPropertyKey.DefinedValues];
            definedTypeItems.value = definedTypes ? JSON.parse(props.configurationProperties.definedTypes) : [];
            definedValueItems.value = definedValues ? JSON.parse(props.configurationProperties.definedValues) : [];
            definedTypeValue.value = props.modelValue.definedtype;
            allowMultipleValues.value = asBoolean(props.modelValue[ConfigurationValueKey.AllowMultiple]);
            displayDescriptions.value = asBoolean(props.modelValue[ConfigurationValueKey.DisplayDescription]);
            enhanceForLongLists.value = asBoolean(props.modelValue[ConfigurationValueKey.EnhancedSelection]);
            includeInactive.value = asBoolean(props.modelValue[ConfigurationValueKey.IncludeInactive]);
            repeatColumns.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.RepeatColumns]);
            selectableValues.value = ((_props$modelValue$Con7 = (_props$modelValue$Con8 = props.modelValue[ConfigurationValueKey.SelectableValues]) === null || _props$modelValue$Con8 === void 0 ? void 0 : _props$modelValue$Con8.split(",")) !== null && _props$modelValue$Con7 !== void 0 ? _props$modelValue$Con7 : []).filter(s => s !== "");
          }, {
            immediate: true
          });
          watch([definedTypeValue, selectableValues, displayDescriptions, includeInactive], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(allowMultipleValues, () => {
            var _asTrueFalseOrNull5;
            return maybeUpdateConfiguration(ConfigurationValueKey.AllowMultiple, (_asTrueFalseOrNull5 = asTrueFalseOrNull(allowMultipleValues.value)) !== null && _asTrueFalseOrNull5 !== void 0 ? _asTrueFalseOrNull5 : "False");
          });
          watch(enhanceForLongLists, () => {
            var _asTrueFalseOrNull6;
            return maybeUpdateConfiguration(ConfigurationValueKey.EnhancedSelection, (_asTrueFalseOrNull6 = asTrueFalseOrNull(enhanceForLongLists.value)) !== null && _asTrueFalseOrNull6 !== void 0 ? _asTrueFalseOrNull6 : "False");
          });
          watch(repeatColumns, () => {
            var _repeatColumns$value$2, _repeatColumns$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.RepeatColumns, (_repeatColumns$value$2 = (_repeatColumns$value2 = repeatColumns.value) === null || _repeatColumns$value2 === void 0 ? void 0 : _repeatColumns$value2.toString()) !== null && _repeatColumns$value$2 !== void 0 ? _repeatColumns$value$2 : "");
          });
          return {
            allowMultipleValues,
            definedTypeValue,
            definedTypeOptions,
            definedTypeItems,
            definedValueOptions,
            displayDescriptions,
            enhanceForLongLists,
            hasValues,
            includeInactive,
            repeatColumns,
            selectableValues
          };
        },
        template: "\n<div>\n    <DropDownList v-model=\"definedTypeValue\" label=\"Defined Type\" :items=\"definedTypeOptions\" :showBlankItem=\"false\" />\n    <CheckBox v-model=\"allowMultipleValues\" label=\"Allow Multiple Values\" text=\"Yes\" help=\"When set, allows multiple defined type values to be selected.\" />\n    <CheckBox v-model=\"displayDescriptions\" label=\"Display Descriptions\" text=\"Yes\" help=\"When set, the defined value descriptions will be displayed instead of the values.\" />\n    <CheckBox v-model=\"enhanceForLongLists\" label=\"Enhance For Long Lists\" text=\"Yes\" />\n    <CheckBox v-model=\"includeInactive\" label=\"Include Inactive\" text=\"Yes\" />\n    <NumberBox v-model=\"repeatColumns\" label=\"Repeat Columns\" />\n    <CheckBoxList v-if=\"hasValues\" v-model=\"selectableValues\" label=\"Selectable Values\" :items=\"definedValueOptions\" :horizontal=\"true\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=definedValueFieldComponents.js.map
