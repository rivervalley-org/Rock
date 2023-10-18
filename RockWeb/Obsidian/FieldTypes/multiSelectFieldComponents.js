System.register(['vue', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/listBox', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/textBox', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Core/Reporting/comparisonType', './fieldType', './utils'], (function (exports, module) {
  'use strict';
  var defineComponent, inject, ref, computed, watch, CheckBoxList, DropDownList, ListBox, NumberBox, TextBox, asBoolean, asBooleanOrNull, asTrueFalseOrNull, toNumberOrNull, defineAsyncComponent, updateRefValue, getFieldEditorProps, getFieldConfigurationProps;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      inject = module.inject;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      ListBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      asBoolean = module.asBoolean;
      asBooleanOrNull = module.asBooleanOrNull;
      asTrueFalseOrNull = module.asTrueFalseOrNull;
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      updateRefValue = module.updateRefValue;
    }, function () {}, function () {}, function () {}, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
      getFieldConfigurationProps = module.getFieldConfigurationProps;
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

      var ConfigurationValueKey = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["RepeatDirection"] = "repeatDirection";
        ConfigurationValueKey["EnhancedSelection"] = "enhancedselection";
        ConfigurationValueKey["CustomValues"] = "customValues";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./multiSelectFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./multiSelectFieldComponents')).FilterComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./multiSelectFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "MultiSelectField.Edit",
        components: {
          ListBox,
          CheckBoxList
        },
        props: getFieldEditorProps(),
        setup() {
          return {
            isRequired: inject("isRequired")
          };
        },
        data() {
          return {
            internalValue: []
          };
        },
        computed: {
          options() {
            try {
              var _this$configurationVa;
              var valuesConfig = JSON.parse((_this$configurationVa = this.configurationValues[ConfigurationValueKey.Values]) !== null && _this$configurationVa !== void 0 ? _this$configurationVa : "[]");
              return valuesConfig.map(v => {
                return {
                  text: v.text,
                  value: v.value
                };
              });
            } catch (_unused) {
              return [];
            }
          },
          listBoxConfigAttributes() {
            var attributes = {};
            var enhancedSelection = this.configurationValues[ConfigurationValueKey.EnhancedSelection];
            if (asBoolean(enhancedSelection)) {
              attributes.enhanceForLongLists = true;
            }
            return attributes;
          },
          checkBoxListConfigAttributes() {
            var attributes = {};
            var repeatColumnsConfig = this.configurationValues[ConfigurationValueKey.RepeatColumns];
            var repeatDirection = this.configurationValues[ConfigurationValueKey.RepeatDirection];
            if (repeatColumnsConfig) {
              attributes["repeatColumns"] = toNumberOrNull(repeatColumnsConfig) || 0;
            }
            if (repeatDirection !== "1") {
              attributes["horizontal"] = true;
            }
            return attributes;
          },
          isListBox() {
            var enhancedSelection = this.configurationValues[ConfigurationValueKey.EnhancedSelection];
            return asBoolean(enhancedSelection);
          }
        },
        watch: {
          internalValue() {
            this.$emit("update:modelValue", this.internalValue.join(","));
          },
          modelValue: {
            immediate: true,
            handler() {
              var value = this.modelValue || "";
              this.internalValue = value !== "" ? value.split(",") : [];
            }
          }
        },
        template: "\n<ListBox v-if=\"isListBox\" v-model=\"internalValue\" v-bind=\"listBoxConfigAttributes\" :items=\"options\" />\n<CheckBoxList v-else v-model=\"internalValue\" v-bind=\"checkBoxListConfigAttributes\" :items=\"options\" />\n"
      }));
      var FilterComponent = exports('FilterComponent', defineComponent({
        name: "MultiSelectField.Filter",
        components: {
          CheckBoxList
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref(props.modelValue.split(",").filter(v => v !== ""));
          var options = computed(() => {
            try {
              var _props$configurationV;
              var providedOptions = JSON.parse((_props$configurationV = props.configurationValues[ConfigurationValueKey.Values]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "[]");
              return providedOptions;
            } catch (_unused2) {
              return [];
            }
          });
          watch(() => props.modelValue, () => {
            updateRefValue(internalValue, props.modelValue.split(",").filter(v => v !== ""));
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value.join(","));
          });
          return {
            internalValue,
            options
          };
        },
        template: "\n<CheckBoxList v-model=\"internalValue\" :items=\"options\" horizontal />\n"
      }));
      var repeatDirectionOptions = [{
        value: "0",
        text: "Horizontal"
      }, {
        value: "1",
        text: "Vertical"
      }];
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "MultiSelectField.Configuration",
        components: {
          DropDownList,
          TextBox,
          NumberBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var rawValues = ref("");
          var internalRawValues = ref("");
          var enhanceForLongLists = ref(false);
          var repeatColumns = ref(null);
          var repeatDirection = ref("");
          var onBlur = () => {
            internalRawValues.value = rawValues.value;
          };
          var maybeUpdateModelValue = () => {
            var _internalRawValues$va, _asTrueFalseOrNull, _repeatColumns$value$, _repeatColumns$value, _repeatDirection$valu, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3, _props$modelValue$Con4;
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.CustomValues] = (_internalRawValues$va = internalRawValues.value) !== null && _internalRawValues$va !== void 0 ? _internalRawValues$va : "";
            newValue[ConfigurationValueKey.EnhancedSelection] = (_asTrueFalseOrNull = asTrueFalseOrNull(enhanceForLongLists.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
            newValue[ConfigurationValueKey.RepeatColumns] = (_repeatColumns$value$ = (_repeatColumns$value = repeatColumns.value) === null || _repeatColumns$value === void 0 ? void 0 : _repeatColumns$value.toString()) !== null && _repeatColumns$value$ !== void 0 ? _repeatColumns$value$ : "";
            newValue[ConfigurationValueKey.RepeatDirection] = (_repeatDirection$valu = repeatDirection.value) !== null && _repeatDirection$valu !== void 0 ? _repeatDirection$valu : "0";
            var anyValueChanged = newValue[ConfigurationValueKey.CustomValues] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.CustomValues]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "") || newValue[ConfigurationValueKey.EnhancedSelection] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.EnhancedSelection]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "False") || newValue[ConfigurationValueKey.RepeatColumns] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.RepeatColumns]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "") || newValue[ConfigurationValueKey.RepeatDirection] !== ((_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.RepeatDirection]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "0");
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
            var _props$modelValue$Con5, _asBooleanOrNull, _props$modelValue$Con6;
            rawValues.value = (_props$modelValue$Con5 = props.modelValue[ConfigurationValueKey.CustomValues]) !== null && _props$modelValue$Con5 !== void 0 ? _props$modelValue$Con5 : "";
            internalRawValues.value = rawValues.value;
            enhanceForLongLists.value = (_asBooleanOrNull = asBooleanOrNull(props.modelValue[ConfigurationValueKey.EnhancedSelection])) !== null && _asBooleanOrNull !== void 0 ? _asBooleanOrNull : false;
            repeatColumns.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.RepeatColumns]);
            repeatDirection.value = (_props$modelValue$Con6 = props.modelValue[ConfigurationValueKey.RepeatDirection]) !== null && _props$modelValue$Con6 !== void 0 ? _props$modelValue$Con6 : "0";
          }, {
            immediate: true
          });
          watch([internalRawValues], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(enhanceForLongLists, () => {
            var _asTrueFalseOrNull2;
            return maybeUpdateConfiguration(ConfigurationValueKey.EnhancedSelection, (_asTrueFalseOrNull2 = asTrueFalseOrNull(enhanceForLongLists.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False");
          });
          watch(repeatColumns, () => {
            var _repeatColumns$value$2, _repeatColumns$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.RepeatColumns, (_repeatColumns$value$2 = (_repeatColumns$value2 = repeatColumns.value) === null || _repeatColumns$value2 === void 0 ? void 0 : _repeatColumns$value2.toString()) !== null && _repeatColumns$value$2 !== void 0 ? _repeatColumns$value$2 : "");
          });
          watch(repeatDirection, () => {
            var _repeatDirection$valu2;
            return maybeUpdateConfiguration(ConfigurationValueKey.RepeatDirection, (_repeatDirection$valu2 = repeatDirection.value) !== null && _repeatDirection$valu2 !== void 0 ? _repeatDirection$valu2 : "0");
          });
          return {
            enhanceForLongLists,
            onBlur,
            rawValues,
            repeatColumns,
            repeatDirection,
            repeatDirectionOptions
          };
        },
        template: "\n<div>\n    <TextBox v-model=\"rawValues\"\n        label=\"Values\"\n        help=\"The source of the values to display in a list. Format is either 'value1,value2,value3,...', 'value1^text1,value2^text2,value3^text3,...', or a SQL Select statement that returns a result set with a 'Value' and 'Text' column <span class='tip tip-lava'></span>.\"\n        textMode=\"multiline\"\n        @blur=\"onBlur\" />\n\n    <CheckBox v-model=\"enhanceForLongLists\"\n        label=\"Enhance For Long Lists\"\n        help=\"When set, will render a searchable selection of options.\" />\n\n    <NumberBox\n        v-model=\"repeatColumns\"\n        label=\"Columns\"\n        help=\"Select how many columns the list should use before going to the next row. If blank or 0 then 4 columns will be displayed. There is no enforced upper limit however the block this control is used in might add contraints due to available space.\" />\n\n    <DropDownList v-model=\"repeatDirection\"\n        label=\"Repeat Direction\"\n        help=\"The direction that the list options will be displayed.\"\n        :items=\"repeatDirectionOptions\"\n        :showBlankItem=\"false\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=multiSelectFieldComponents.js.map
