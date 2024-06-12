System.register(['vue', './utils', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/categorizedValuePicker.obs', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Utility/guid'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, CheckBoxList, DropDownList, CategorizedValuePicker, RockLabel, defineAsyncComponent, toGuidOrNull, emptyGuid;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
      getFieldConfigurationProps = module.getFieldConfigurationProps;
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      CategorizedValuePicker = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
    }],
    execute: (function () {

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

      var ConfigurationValueKey = function (ConfigurationValueKey) {
        ConfigurationValueKey["DefinedType"] = "DefinedType";
        ConfigurationValueKey["DefinedTypes"] = "DefinedTypes";
        ConfigurationValueKey["DefinedTypeValues"] = "DefinedTypeValues";
        ConfigurationValueKey["SelectableDefinedValues"] = "SelectableDefinedValues";
        ConfigurationValueKey["ConfigurationMode"] = "ConfigurationMode";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./categorizedDefinedValueFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./categorizedDefinedValueFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "CategorizedDefinedValueField.Edit",
        components: {
          CategorizedValuePicker,
          RockLabel
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref({});
          var definedTypeValue = computed(() => {
            var _toGuidOrNull;
            var definedType = JSON.parse(props.configurationValues[ConfigurationValueKey.DefinedType] || "{}");
            return (_toGuidOrNull = toGuidOrNull(definedType.value)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid;
          });
          var selectableValues = computed(() => {
            try {
              return JSON.parse(props.configurationValues[ConfigurationValueKey.SelectableDefinedValues] || "[]");
            } catch (_unused) {
              return [];
            }
          });
          var isEditMode = computed(() => {
            return props.configurationValues[ConfigurationValueKey.ConfigurationMode] === "Edit";
          });
          watch(() => props.modelValue, () => {
            internalValue.value = JSON.parse(props.modelValue || "{}");
          }, {
            immediate: true
          });
          watch(() => internalValue.value, () => {
            emit("update:modelValue", JSON.stringify(internalValue.value));
          }, {
            deep: true
          });
          return {
            internalValue,
            definedTypeValue,
            selectableValues,
            isEditMode
          };
        },
        template: "\n    <CategorizedValuePicker v-if=\"isEditMode\" label=\"Categorized Defined Value\" v-model=\"internalValue\" :definedTypeGuid=\"definedTypeValue\" :onlyIncludeGuids=\"selectableValues\" />\n    "
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "CategorizedDefinedValueField.Configuration",
        components: {
          DropDownList,
          CheckBoxList
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var definedType = ref({});
          var selectableDefinedValues = ref([]);
          var definedTypes = computed(() => {
            return JSON.parse(props.modelValue[ConfigurationValueKey.DefinedTypes] || "[]");
          });
          var options = computed(() => {
            try {
              var definedTypeValue = definedType.value;
              if (definedTypeValue.value) {
                var definedTypeValues = JSON.parse(props.modelValue[ConfigurationValueKey.DefinedTypeValues] || "{}");
                return JSON.parse(definedTypeValues[definedTypeValue.value] || "[]");
              } else {
                return [];
              }
            } catch (_unused2) {
              return [];
            }
          });
          var maybeUpdateModelValue = () => {
            var _definedType$value, _selectableDefinedVal, _props$modelValue$Con, _props$modelValue$Con2;
            var newValue = {};
            newValue[ConfigurationValueKey.DefinedType] = JSON.stringify((_definedType$value = definedType.value) !== null && _definedType$value !== void 0 ? _definedType$value : "");
            newValue[ConfigurationValueKey.SelectableDefinedValues] = JSON.stringify((_selectableDefinedVal = selectableDefinedValues.value) !== null && _selectableDefinedVal !== void 0 ? _selectableDefinedVal : "");
            newValue[ConfigurationValueKey.DefinedTypeValues] = props.modelValue[ConfigurationValueKey.DefinedTypeValues];
            newValue[ConfigurationValueKey.DefinedTypes] = props.modelValue[ConfigurationValueKey.DefinedTypes];
            newValue[ConfigurationValueKey.ConfigurationMode] = props.modelValue[ConfigurationValueKey.ConfigurationMode];
            var anyValueChanged = newValue[ConfigurationValueKey.DefinedType] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.DefinedType]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "") || newValue[ConfigurationValueKey.SelectableDefinedValues] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.SelectableDefinedValues]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "");
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
            definedType.value = JSON.parse(props.modelValue[ConfigurationValueKey.DefinedType] || "{}");
            selectableDefinedValues.value = JSON.parse(props.modelValue[ConfigurationValueKey.SelectableDefinedValues] || "[]");
          }, {
            immediate: true
          });
          watch(definedType, val => maybeUpdateConfiguration(ConfigurationValueKey.DefinedType, JSON.stringify(val !== null && val !== void 0 ? val : "")));
          watch(selectableDefinedValues, val => maybeUpdateConfiguration(ConfigurationValueKey.SelectableDefinedValues, JSON.stringify(val !== null && val !== void 0 ? val : "")));
          return {
            definedType,
            definedTypes,
            selectableDefinedValues,
            options
          };
        },
        template: "\n    <DropDownList label=\"Defined Type\" v-model=\"definedType.value\" :items=\"definedTypes\" help=\"A Defined Type that is configured to support categorized values.\" :showBlankItem=\"true\" :enhanceForLongLists=\"true\" />\n    <CheckBoxList v-if=\"definedType.value\" label=\"Selectable Values\" v-model=\"selectableDefinedValues\" :items=\"options\" horizontal repeatColumns=\"4\" />\n    "
      }));

    })
  };
}));
//# sourceMappingURL=categorizedDefinedValueFieldComponents.js.map
