System.register(['vue', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/rockFormField', '@Obsidian/Controls/textBox', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/component', '@Obsidian/Utility/linq', './fieldType', './utils'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, CheckBox, DropDownList, RockFormField, TextBox, asBoolean, asBooleanOrNull, asTrueFalseOrNull, defineAsyncComponent, getFieldEditorProps, getFieldConfigurationProps;
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
      asBoolean = module.asBoolean;
      asBooleanOrNull = module.asBooleanOrNull;
      asTrueFalseOrNull = module.asTrueFalseOrNull;
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function () {}, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
      getFieldConfigurationProps = module.getFieldConfigurationProps;
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
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["KeyPrompt"] = "keyprompt";
        ConfigurationValueKey["ValuePrompt"] = "valueprompt";
        ConfigurationValueKey["DisplayValueFirst"] = "displayvaluefirst";
        ConfigurationValueKey["AllowHtml"] = "allowhtml";
        ConfigurationValueKey["CustomValues"] = "customvalues";
        ConfigurationValueKey["DefinedType"] = "definedtype";
        return ConfigurationValueKey;
      }({});
      var ConfigurationPropertyKey = function (ConfigurationPropertyKey) {
        ConfigurationPropertyKey["DefinedTypes"] = "definedTypes";
        return ConfigurationPropertyKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./keyValueListFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./keyValueListFieldComponents')).ConfigurationComponent;
      }));

      function parseModelValue(modelValue) {
        try {
          return JSON.parse(modelValue !== null && modelValue !== void 0 ? modelValue : "[]");
        } catch (_unused) {
          return [];
        }
      }
      var EditComponent = exports('EditComponent', defineComponent({
        name: "KeyValueListField.Edit",
        components: {
          RockFormField,
          DropDownList,
          TextBox
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValues = ref(parseModelValue(props.modelValue));
          var valueOptions = computed(() => {
            try {
              var _props$configurationV;
              return JSON.parse((_props$configurationV = props.configurationValues[ConfigurationValueKey.Values]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "[]");
            } catch (_unused2) {
              return [];
            }
          });
          var options = computed(() => {
            var providedOptions = valueOptions.value.map(v => {
              return {
                text: v.text,
                value: v.value
              };
            });
            return providedOptions;
          });
          var hasValues = computed(() => valueOptions.value.length > 0);
          var keyPlaceholder = computed(() => {
            var _props$configurationV2;
            return (_props$configurationV2 = props.configurationValues[ConfigurationValueKey.KeyPrompt]) !== null && _props$configurationV2 !== void 0 ? _props$configurationV2 : "";
          });
          var valuePlaceholder = computed(() => {
            var _props$configurationV3;
            return (_props$configurationV3 = props.configurationValues[ConfigurationValueKey.ValuePrompt]) !== null && _props$configurationV3 !== void 0 ? _props$configurationV3 : "";
          });
          var displayValueFirst = computed(() => {
            var _props$configurationV4;
            return asBoolean((_props$configurationV4 = props.configurationValues[ConfigurationValueKey.DisplayValueFirst]) !== null && _props$configurationV4 !== void 0 ? _props$configurationV4 : "");
          });
          watch(() => props.modelValue, () => {
            internalValues.value = parseModelValue(props.modelValue);
          });
          watch(() => internalValues.value, () => {
            emit("update:modelValue", JSON.stringify(internalValues.value));
          }, {
            deep: true
          });
          var onAddClick = () => {
            var defaultValue = "";
            if (hasValues.value) {
              defaultValue = valueOptions.value[0].value;
            }
            internalValues.value.push({
              key: "",
              value: defaultValue
            });
          };
          var onRemoveClick = index => {
            internalValues.value.splice(index, 1);
          };
          return {
            internalValues,
            hasValues,
            displayValueFirst,
            options,
            keyPlaceholder,
            valuePlaceholder,
            onAddClick,
            onRemoveClick
          };
        },
        template: "\n<RockFormField\n    :modelValue=\"internalValues\"\n    formGroupClasses=\"key-value-list\"\n    name=\"key-value-list\">\n    <template #default=\"{uniqueId}\">\n        <div class=\"control-wrapper\">\n<span :id=\"uniqueId\" class=\"key-value-list\">\n    <span class=\"key-value-rows\">\n        <div v-for=\"(value, valueIndex) in internalValues\" class=\"controls controls-row form-control-group\">\n            <template v-if=\"!displayValueFirst\">\n                <input v-model=\"value.key\" class=\"key-value-key form-control input-width-md\" type=\"text\" :placeholder=\"keyPlaceholder\">\n\n                <select v-if=\"hasValues\" v-model=\"value.value\" class=\"form-control input-width-lg\">\n                    <option v-for=\"option in options\" :value=\"option.value\" :key=\"option.value\">{{ option.text }}</option>\n                </select>\n                <input v-else v-model=\"value.value\" class=\"key-value-value form-control input-width-md\" type=\"text\" :placeholder=\"valuePlaceholder\">\n            </template>\n            <template v-else>\n                <select v-if=\"hasValues\" v-model=\"value.value\" class=\"form-control input-width-lg\">\n                    <option v-for=\"option in options\" :value=\"option.value\" :key=\"option.value\">{{ option.text }}</option>\n                </select>\n                <input v-else v-model=\"value.value\" class=\"key-value-value form-control input-width-md\" type=\"text\" :placeholder=\"valuePlaceholder\">\n\n                <input v-model=\"value.key\" class=\"key-value-key form-control input-width-md\" type=\"text\" :placeholder=\"keyPlaceholder\">\n            </template>\n\n            <a href=\"#\" @click.prevent=\"onRemoveClick(valueIndex)\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-times\"></i></a>\n        </div>\n    </span>\n    <div class=\"control-actions\">\n        <a class=\"btn btn-action btn-square btn-xs\" href=\"#\" @click.prevent=\"onAddClick\"><i class=\"fa fa-plus-circle\"></i></a>\n    </div>\n</span>\n        </div>\n    </template>\n</RockFormField>\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "KeyValueListField.Configuration",
        components: {
          CheckBox,
          DropDownList,
          TextBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var customValues = ref("");
          var internalCustomValues = ref("");
          var keyPrompt = ref("");
          var labelPrompt = ref("");
          var definedType = ref("");
          var allowHtml = ref(false);
          var displayValueFirst = ref(false);
          var definedTypeOptions = computed(() => {
            try {
              var _props$configurationP;
              return JSON.parse((_props$configurationP = props.configurationProperties[ConfigurationPropertyKey.DefinedTypes]) !== null && _props$configurationP !== void 0 ? _props$configurationP : "[]");
            } catch (_unused3) {
              return [];
            }
          });
          var onBlur = () => {
            internalCustomValues.value = customValues.value;
          };
          var maybeUpdateModelValue = () => {
            var _keyPrompt$value, _labelPrompt$value, _definedType$value, _internalCustomValues, _asTrueFalseOrNull, _asTrueFalseOrNull2, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3, _props$modelValue$Con4, _props$modelValue$Con5, _props$modelValue$Con6;
            var newValue = {};
            newValue[ConfigurationValueKey.KeyPrompt] = (_keyPrompt$value = keyPrompt.value) !== null && _keyPrompt$value !== void 0 ? _keyPrompt$value : "";
            newValue[ConfigurationValueKey.ValuePrompt] = (_labelPrompt$value = labelPrompt.value) !== null && _labelPrompt$value !== void 0 ? _labelPrompt$value : "";
            newValue[ConfigurationValueKey.DefinedType] = (_definedType$value = definedType.value) !== null && _definedType$value !== void 0 ? _definedType$value : "";
            newValue[ConfigurationValueKey.CustomValues] = (_internalCustomValues = internalCustomValues.value) !== null && _internalCustomValues !== void 0 ? _internalCustomValues : "";
            newValue[ConfigurationValueKey.AllowHtml] = (_asTrueFalseOrNull = asTrueFalseOrNull(allowHtml.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
            newValue[ConfigurationValueKey.DisplayValueFirst] = (_asTrueFalseOrNull2 = asTrueFalseOrNull(displayValueFirst.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False";
            var anyValueChanged = newValue[ConfigurationValueKey.KeyPrompt] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.KeyPrompt]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "") || newValue[ConfigurationValueKey.ValuePrompt] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.ValuePrompt]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "") || newValue[ConfigurationValueKey.DefinedType] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.DefinedType]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "") || newValue[ConfigurationValueKey.CustomValues] !== ((_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.CustomValues]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "") || newValue[ConfigurationValueKey.AllowHtml] !== ((_props$modelValue$Con5 = props.modelValue[ConfigurationValueKey.AllowHtml]) !== null && _props$modelValue$Con5 !== void 0 ? _props$modelValue$Con5 : "False") || newValue[ConfigurationValueKey.DisplayValueFirst] !== ((_props$modelValue$Con6 = props.modelValue[ConfigurationValueKey.DisplayValueFirst]) !== null && _props$modelValue$Con6 !== void 0 ? _props$modelValue$Con6 : "False");
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
            var _props$modelValue$Con7, _props$modelValue$Con8, _props$modelValue$Con9, _props$modelValue$Con10, _asBooleanOrNull, _asBooleanOrNull2;
            keyPrompt.value = (_props$modelValue$Con7 = props.modelValue[ConfigurationValueKey.KeyPrompt]) !== null && _props$modelValue$Con7 !== void 0 ? _props$modelValue$Con7 : "";
            labelPrompt.value = (_props$modelValue$Con8 = props.modelValue[ConfigurationValueKey.ValuePrompt]) !== null && _props$modelValue$Con8 !== void 0 ? _props$modelValue$Con8 : "";
            definedType.value = (_props$modelValue$Con9 = props.modelValue[ConfigurationValueKey.DefinedType]) !== null && _props$modelValue$Con9 !== void 0 ? _props$modelValue$Con9 : "";
            customValues.value = (_props$modelValue$Con10 = props.modelValue[ConfigurationValueKey.CustomValues]) !== null && _props$modelValue$Con10 !== void 0 ? _props$modelValue$Con10 : "";
            internalCustomValues.value = customValues.value;
            allowHtml.value = (_asBooleanOrNull = asBooleanOrNull(props.modelValue[ConfigurationValueKey.AllowHtml])) !== null && _asBooleanOrNull !== void 0 ? _asBooleanOrNull : false;
            displayValueFirst.value = (_asBooleanOrNull2 = asBooleanOrNull(props.modelValue[ConfigurationValueKey.DisplayValueFirst])) !== null && _asBooleanOrNull2 !== void 0 ? _asBooleanOrNull2 : false;
          }, {
            immediate: true
          });
          watch([definedType, internalCustomValues], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(keyPrompt, () => {
            var _keyPrompt$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.KeyPrompt, (_keyPrompt$value2 = keyPrompt.value) !== null && _keyPrompt$value2 !== void 0 ? _keyPrompt$value2 : "");
          });
          watch(labelPrompt, () => {
            var _labelPrompt$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.ValuePrompt, (_labelPrompt$value2 = labelPrompt.value) !== null && _labelPrompt$value2 !== void 0 ? _labelPrompt$value2 : "");
          });
          watch(allowHtml, () => {
            var _asTrueFalseOrNull3;
            return maybeUpdateConfiguration(ConfigurationValueKey.AllowHtml, (_asTrueFalseOrNull3 = asTrueFalseOrNull(allowHtml.value)) !== null && _asTrueFalseOrNull3 !== void 0 ? _asTrueFalseOrNull3 : "False");
          });
          watch(displayValueFirst, () => {
            var _asTrueFalseOrNull4;
            return maybeUpdateConfiguration(ConfigurationValueKey.DisplayValueFirst, (_asTrueFalseOrNull4 = asTrueFalseOrNull(displayValueFirst.value)) !== null && _asTrueFalseOrNull4 !== void 0 ? _asTrueFalseOrNull4 : "False");
          });
          return {
            allowHtml,
            definedType,
            definedTypeOptions,
            displayValueFirst,
            keyPrompt,
            labelPrompt,
            onBlur,
            customValues
          };
        },
        template: "\n<div>\n    <TextBox v-model=\"keyPrompt\"\n        label=\"Key Prompt\"\n        help=\"The text to display as a prompt in the key textbox.\" />\n\n    <TextBox v-model=\"labelPrompt\"\n        label=\"Label Prompt\"\n        help=\"The text to display as a prompt in the label textbox.\" />\n\n    <DropDownList v-model=\"definedType\"\n        label=\"Defined Type\"\n        help=\"Optional Defined Type to select values from, otherwise values will be free-form text fields.\"\n        :items=\"definedTypeOptions\" />\n\n    <TextBox v-model=\"customValues\"\n        label=\"Custom Values\"\n        help=\"Optional list of options to use for the values.  Format is either 'value1,value2,value3,...', or 'value1^text1,value2^text2,value3^text3,...'.\"\n        textMode=\"multiline\"\n        @blur=\"onBlur\" />\n\n    <CheckBox v-model=\"allowHtml\"\n        label=\"Allow HTML\"\n        help=\"Allow HTML content in values.\" />\n\n    <CheckBox v-model=\"displayValueFirst\"\n        label=\"Display Value First\"\n        help=\"Reverses the display order of the key and the value.\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=keyValueListFieldComponents.js.map
