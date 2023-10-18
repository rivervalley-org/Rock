System.register(['vue', './utils', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/radioButtonList', '@Obsidian/Controls/textBox', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Enums/Reporting/comparisonType'], (function (exports, module) {
  'use strict';
  var defineComponent, inject, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, CheckBoxList, DropDownList, NumberBox, RadioButtonList, TextBox, toNumberOrNull, defineAsyncComponent, updateRefValue;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      inject = module.inject;
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
      NumberBox = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      updateRefValue = module.updateRefValue;
    }, function () {}, function () {}],
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
        ConfigurationValueKey["FieldType"] = "fieldtype";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["CustomValues"] = "customValues";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./singleSelectFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./singleSelectFieldComponents')).FilterComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./singleSelectFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "SingleSelectField.Edit",
        components: {
          DropDownList,
          RadioButtonList
        },
        props: getFieldEditorProps(),
        setup() {
          return {
            isRequired: inject("isRequired")
          };
        },
        data() {
          return {
            internalValue: ""
          };
        },
        computed: {
          options() {
            try {
              var _this$configurationVa;
              var providedOptions = JSON.parse((_this$configurationVa = this.configurationValues[ConfigurationValueKey.Values]) !== null && _this$configurationVa !== void 0 ? _this$configurationVa : "[]");
              if (this.isRadioButtons && !this.isRequired) {
                providedOptions.unshift({
                  text: "None",
                  value: ""
                });
              }
              return providedOptions;
            } catch (_unused) {
              return [];
            }
          },
          ddlConfigAttributes() {
            var attributes = {};
            var fieldTypeConfig = this.configurationValues[ConfigurationValueKey.FieldType];
            if (fieldTypeConfig === "ddl_enhanced") {
              attributes.enhanceForLongLists = true;
            }
            return attributes;
          },
          rbConfigAttributes() {
            var attributes = {};
            var repeatColumnsConfig = this.configurationValues[ConfigurationValueKey.RepeatColumns];
            if (repeatColumnsConfig) {
              attributes["repeatColumns"] = toNumberOrNull(repeatColumnsConfig) || 0;
            }
            return attributes;
          },
          isRadioButtons() {
            var fieldTypeConfig = this.configurationValues[ConfigurationValueKey.FieldType];
            return fieldTypeConfig === "rb";
          }
        },
        watch: {
          internalValue() {
            this.$emit("update:modelValue", this.internalValue);
          },
          modelValue: {
            immediate: true,
            handler() {
              this.internalValue = this.modelValue || "";
            }
          }
        },
        template: "\n<RadioButtonList v-if=\"isRadioButtons\" v-model=\"internalValue\" v-bind=\"rbConfigAttributes\" :items=\"options\" horizontal />\n<DropDownList v-else v-model=\"internalValue\" v-bind=\"ddlConfigAttributes\" :items=\"options\" />\n"
      }));
      var FilterComponent = exports('FilterComponent', defineComponent({
        name: "SingleSelectField.Filter",
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
      var controlTypeOptions = [{
        value: "ddl",
        text: "Drop Down List"
      }, {
        value: "ddl_enhanced",
        text: "Drop Down List (Enhanced for Long Lists)"
      }, {
        value: "rb",
        text: "Radio Buttons"
      }];
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "SingleSelectField.Configuration",
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
          var controlType = ref("");
          var repeatColumns = ref(null);
          var isRadioList = computed(() => {
            return controlType.value === "rb";
          });
          var onBlur = () => {
            internalRawValues.value = rawValues.value;
          };
          var maybeUpdateModelValue = () => {
            var _internalRawValues$va, _controlType$value, _repeatColumns$value$, _repeatColumns$value, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3;
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.CustomValues] = (_internalRawValues$va = internalRawValues.value) !== null && _internalRawValues$va !== void 0 ? _internalRawValues$va : "";
            newValue[ConfigurationValueKey.FieldType] = (_controlType$value = controlType.value) !== null && _controlType$value !== void 0 ? _controlType$value : "";
            newValue[ConfigurationValueKey.RepeatColumns] = (_repeatColumns$value$ = (_repeatColumns$value = repeatColumns.value) === null || _repeatColumns$value === void 0 ? void 0 : _repeatColumns$value.toString()) !== null && _repeatColumns$value$ !== void 0 ? _repeatColumns$value$ : "";
            var anyValueChanged = newValue[ConfigurationValueKey.CustomValues] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.CustomValues]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "") || newValue[ConfigurationValueKey.FieldType] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.FieldType]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "") || newValue[ConfigurationValueKey.RepeatColumns] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.RepeatColumns]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "");
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
            var _props$modelValue$Con4, _props$modelValue$Con5;
            rawValues.value = (_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.CustomValues]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "";
            internalRawValues.value = rawValues.value;
            controlType.value = (_props$modelValue$Con5 = props.modelValue[ConfigurationValueKey.FieldType]) !== null && _props$modelValue$Con5 !== void 0 ? _props$modelValue$Con5 : "ddl";
            repeatColumns.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.RepeatColumns]);
          }, {
            immediate: true
          });
          watch([internalRawValues], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(controlType, () => {
            var _controlType$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.FieldType, (_controlType$value2 = controlType.value) !== null && _controlType$value2 !== void 0 ? _controlType$value2 : "ddl");
          });
          watch(repeatColumns, () => {
            var _repeatColumns$value$2, _repeatColumns$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.RepeatColumns, (_repeatColumns$value$2 = (_repeatColumns$value2 = repeatColumns.value) === null || _repeatColumns$value2 === void 0 ? void 0 : _repeatColumns$value2.toString()) !== null && _repeatColumns$value$2 !== void 0 ? _repeatColumns$value$2 : "");
          });
          return {
            controlType,
            controlTypeOptions,
            isRadioList,
            onBlur,
            rawValues,
            repeatColumns
          };
        },
        template: "\n<div>\n    <TextBox v-model=\"rawValues\"\n        label=\"Values\"\n        help=\"The source of the values to display in a list.  Format is either 'value1,value2,value3,...', 'value1^text1,value2^text2,value3^text3,...', or a SQL Select statement that returns a result set with a 'Value' and 'Text' column <span class='tip tip-lava'></span>.\"\n        textMode=\"multiline\"\n        @blur=\"onBlur\" />\n\n    <DropDownList v-model=\"controlType\"\n        label=\"Control Type\"\n        help=\"The type of control to use for selecting a single value from the list.\"\n        :items=\"controlTypeOptions\"\n        :showBlankItem=\"false\" />\n\n    <NumberBox v-if=\"isRadioList\"\n        v-model=\"repeatColumns\"\n        label=\"Columns\"\n        help=\"Select how many columns the list should use before going to the next row. If blank or 0 then 4 columns will be displayed. There is no enforced upper limit however the block this control is used in might add contraints due to available space.\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=singleSelectFieldComponents.js.map
