System.register(['vue', './utils', '@Obsidian/Utility/booleanUtils', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/toggle', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/textBox', '@Obsidian/Utility/numberUtils'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, asBoolean, asTrueFalseOrNull, defineAsyncComponent, DropDownList, Toggle, CheckBox, TextBox, toNumberOrNull;
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
      asBoolean = module.asBoolean;
      asTrueFalseOrNull = module.asTrueFalseOrNull;
    }, function () {}, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Toggle = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
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
        ConfigurationValueKey["BooleanControlType"] = "BooleanControlType";
        ConfigurationValueKey["FalseText"] = "falsetext";
        ConfigurationValueKey["TrueText"] = "truetext";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./booleanFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./booleanFieldComponents')).ConfigurationComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./booleanFieldComponents')).FilterComponent;
      }));

      var BooleanControlType = function (BooleanControlType) {
        BooleanControlType[BooleanControlType["DropDown"] = 0] = "DropDown";
        BooleanControlType[BooleanControlType["Checkbox"] = 1] = "Checkbox";
        BooleanControlType[BooleanControlType["Toggle"] = 2] = "Toggle";
        return BooleanControlType;
      }(BooleanControlType || {});
      var EditComponent = exports('EditComponent', defineComponent({
        name: "BooleanField.Edit",
        components: {
          DropDownList,
          Toggle,
          CheckBox
        },
        props: getFieldEditorProps(),
        emits: ["update:modelValue"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalBooleanValue = ref(asBoolean(props.modelValue));
          var internalValue = ref(asTrueFalseOrNull(props.modelValue) || "");
          var booleanControlType = computed(() => {
            var controlType = props.configurationValues[ConfigurationValueKey.BooleanControlType];
            switch (controlType) {
              case "1":
                return BooleanControlType.Checkbox;
              case "2":
                return BooleanControlType.Toggle;
              default:
                return BooleanControlType.DropDown;
            }
          });
          var isToggle = computed(() => booleanControlType.value === BooleanControlType.Toggle);
          var isCheckBox = computed(() => booleanControlType.value === BooleanControlType.Checkbox);
          var trueText = computed(() => {
            var trueText = "Yes";
            var trueConfig = props.configurationValues[ConfigurationValueKey.TrueText];
            if (trueConfig) {
              trueText = trueConfig;
            }
            return trueText || "Yes";
          });
          var falseText = computed(() => {
            var falseText = "No";
            var falseConfig = props.configurationValues[ConfigurationValueKey.FalseText];
            if (falseConfig) {
              falseText = falseConfig;
            }
            return falseText || "No";
          });
          var toggleOptions = computed(() => ({
            trueText: trueText.value,
            falseText: falseText.value
          }));
          var dropDownListOptions = computed(() => {
            var trueVal = asTrueFalseOrNull(true);
            var falseVal = asTrueFalseOrNull(false);
            return [{
              text: falseText.value,
              value: falseVal
            }, {
              text: trueText.value,
              value: trueVal
            }];
          });
          watch(internalValue, () => {
            if (booleanControlType.value === BooleanControlType.DropDown) {
              emit("update:modelValue", internalValue.value);
            }
          });
          watch(internalBooleanValue, () => {
            if (booleanControlType.value !== BooleanControlType.DropDown) {
              emit("update:modelValue", asTrueFalseOrNull(internalBooleanValue.value) || "");
            }
          });
          watch(() => props.modelValue, () => {
            internalValue.value = asTrueFalseOrNull(props.modelValue) || "";
            internalBooleanValue.value = asBoolean(props.modelValue);
          });
          return {
            internalBooleanValue,
            internalValue,
            booleanControlType,
            isToggle,
            isCheckBox,
            toggleOptions,
            dropDownListOptions
          };
        },
        template: "\n<Toggle v-if=\"isToggle\" v-model=\"internalBooleanValue\" v-bind=\"toggleOptions\" />\n<CheckBox v-else-if=\"isCheckBox\" v-model=\"internalBooleanValue\" />\n<DropDownList v-else v-model=\"internalValue\" :items=\"dropDownListOptions\" />\n"
      }));
      var FilterComponent = exports('FilterComponent', defineComponent({
        name: "BooleanField.Filter",
        components: {
          DropDownList
        },
        props: getFieldEditorProps(),
        emits: ["update:modelValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var internalValue = ref(asTrueFalseOrNull(props.modelValue) || "");
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          watch(() => props.modelValue, () => {
            internalValue.value = asTrueFalseOrNull(props.modelValue) || "";
          });
          var trueText = computed(() => {
            var trueConfig = props.configurationValues[ConfigurationValueKey.TrueText];
            return trueConfig || "Yes";
          });
          var falseText = computed(() => {
            var falseConfig = props.configurationValues[ConfigurationValueKey.FalseText];
            return falseConfig || "No";
          });
          var dropDownListOptions = computed(() => {
            var trueVal = asTrueFalseOrNull(true);
            var falseVal = asTrueFalseOrNull(false);
            return [{
              text: falseText.value,
              value: falseVal
            }, {
              text: trueText.value,
              value: trueVal
            }];
          });
          return {
            internalValue,
            dropDownListOptions
          };
        },
        template: "\n<DropDownList v-model=\"internalValue\" :items=\"dropDownListOptions\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "BooleanField.Configuration",
        components: {
          TextBox,
          DropDownList
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref3) {
          var emit = _ref3.emit;
          var trueText = ref("Yes");
          var falseText = ref("No");
          var controlType = ref(BooleanControlType.DropDown);
          var maybeUpdateModelValue = () => {
            var _trueText$value, _falseText$value, _controlType$value$to, _controlType$value, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3;
            var newValue = {};
            newValue[ConfigurationValueKey.TrueText] = (_trueText$value = trueText.value) !== null && _trueText$value !== void 0 ? _trueText$value : "Yes";
            newValue[ConfigurationValueKey.FalseText] = (_falseText$value = falseText.value) !== null && _falseText$value !== void 0 ? _falseText$value : "No";
            newValue[ConfigurationValueKey.BooleanControlType] = (_controlType$value$to = (_controlType$value = controlType.value) === null || _controlType$value === void 0 ? void 0 : _controlType$value.toString()) !== null && _controlType$value$to !== void 0 ? _controlType$value$to : BooleanControlType.DropDown.toString();
            var anyValueChanged = newValue[ConfigurationValueKey.TrueText] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.TrueText]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "Yes") || newValue[ConfigurationValueKey.FalseText] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.FalseText]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "No") || newValue[ConfigurationValueKey.BooleanControlType] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.BooleanControlType]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : BooleanControlType.DropDown);
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
            var _props$modelValue$Con4, _props$modelValue$Con5, _toNumberOrNull;
            trueText.value = (_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.TrueText]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "Yes";
            falseText.value = (_props$modelValue$Con5 = props.modelValue[ConfigurationValueKey.FalseText]) !== null && _props$modelValue$Con5 !== void 0 ? _props$modelValue$Con5 : "No";
            controlType.value = (_toNumberOrNull = toNumberOrNull(props.modelValue[ConfigurationValueKey.BooleanControlType])) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : 0;
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(trueText, () => {
            var _trueText$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.TrueText, (_trueText$value2 = trueText.value) !== null && _trueText$value2 !== void 0 ? _trueText$value2 : "Yes");
          });
          watch(falseText, () => {
            var _falseText$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.FalseText, (_falseText$value2 = falseText.value) !== null && _falseText$value2 !== void 0 ? _falseText$value2 : "No");
          });
          watch(controlType, () => {
            var _controlType$value$to2, _controlType$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.BooleanControlType, (_controlType$value$to2 = (_controlType$value2 = controlType.value) === null || _controlType$value2 === void 0 ? void 0 : _controlType$value2.toString()) !== null && _controlType$value$to2 !== void 0 ? _controlType$value$to2 : "0");
          });
          var controlTypeOptions = [{
            text: "Drop Down",
            value: BooleanControlType.DropDown
          }, {
            text: "Checkbox",
            value: BooleanControlType.Checkbox
          }, {
            text: "Toggle",
            value: BooleanControlType.Toggle
          }];
          return {
            controlTypeOptions,
            trueText,
            falseText,
            controlType
          };
        },
        template: "\n<div>\n    <TextBox v-model=\"trueText\" label=\"True Text\" help=\"The text to display when value is true\" />\n    <TextBox v-model=\"falseText\" label=\"False Text\" help=\"The text to display when value is false\" />\n    <DropDownList v-model=\"controlType\" label=\"Control Type\" help=\"The type of control to use when editing the value\" :items=\"controlTypeOptions\" :show-blank-item=\"false\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=booleanFieldComponents.js.map
