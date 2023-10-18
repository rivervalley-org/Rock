System.register(['vue', './utils', '@Obsidian/Controls/textBox', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/checkBox', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', '@Obsidian/Core/Reporting/comparisonType', './fieldType'], (function (exports, module) {
  'use strict';
  var defineComponent, computed, ref, watch, getFieldEditorProps, getFieldConfigurationProps, TextBox, NumberBox, CheckBox, asBooleanOrNull, asBoolean, asTrueFalseOrNull, toNumber, toNumberOrNull, defineAsyncComponent, useVModelPassthrough;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
      getFieldConfigurationProps = module.getFieldConfigurationProps;
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      asBooleanOrNull = module.asBooleanOrNull;
      asBoolean = module.asBoolean;
      asTrueFalseOrNull = module.asTrueFalseOrNull;
    }, function (module) {
      toNumber = module.toNumber;
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      useVModelPassthrough = module.useVModelPassthrough;
    }, function () {}, function () {}],
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
        ConfigurationValueKey["NumberOfRows"] = "numberofrows";
        ConfigurationValueKey["AllowHtml"] = "allowhtml";
        ConfigurationValueKey["MaxCharacters"] = "maxcharacters";
        ConfigurationValueKey["ShowCountDown"] = "showcountdown";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./memoFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./memoFieldComponents')).FilterComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./memoFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "MemoField.Edit",
        components: {
          TextBox
        },
        props: getFieldEditorProps(),
        emits: ["update:modelValue"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var configAttributes = computed(() => {
            var attributes = {};
            var maxCharsConfig = props.configurationValues[ConfigurationValueKey.MaxCharacters];
            var maxCharsValue = toNumber(maxCharsConfig);
            if (maxCharsValue) {
              attributes.maxLength = maxCharsValue;
            }
            var showCountDownConfig = props.configurationValues[ConfigurationValueKey.ShowCountDown];
            var showCountDownValue = asBooleanOrNull(showCountDownConfig) || false;
            if (showCountDownValue) {
              attributes.showCountDown = showCountDownValue;
            }
            var rowsConfig = props.configurationValues[ConfigurationValueKey.NumberOfRows];
            var rows = toNumber(rowsConfig || null) || 3;
            if (rows > 0) {
              attributes.rows = rows;
            }
            return attributes;
          });
          return {
            internalValue,
            configAttributes
          };
        },
        template: "\n<TextBox v-model=\"internalValue\" v-bind=\"configAttributes\" textMode=\"MultiLine\" />\n"
      }));
      var FilterComponent = exports('FilterComponent', defineComponent({
        name: "MemoField.Filter",
        components: {
          TextBox
        },
        props: getFieldEditorProps(),
        emits: ["update:modelValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          return {
            internalValue
          };
        },
        template: "\n<TextBox v-model=\"internalValue\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "MemoField.Configuration",
        components: {
          CheckBox,
          NumberBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref3) {
          var emit = _ref3.emit;
          var numberOfRows = ref(null);
          var allowHtml = ref(false);
          var maxCharacters = ref(null);
          var showCountdown = ref(false);
          var maybeUpdateModelValue = () => {
            var _numberOfRows$value$t, _numberOfRows$value, _asTrueFalseOrNull, _maxCharacters$value$, _maxCharacters$value, _asTrueFalseOrNull2, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3, _props$modelValue$Con4;
            var newValue = {};
            newValue[ConfigurationValueKey.NumberOfRows] = (_numberOfRows$value$t = (_numberOfRows$value = numberOfRows.value) === null || _numberOfRows$value === void 0 ? void 0 : _numberOfRows$value.toString()) !== null && _numberOfRows$value$t !== void 0 ? _numberOfRows$value$t : "";
            newValue[ConfigurationValueKey.AllowHtml] = (_asTrueFalseOrNull = asTrueFalseOrNull(allowHtml.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
            newValue[ConfigurationValueKey.MaxCharacters] = (_maxCharacters$value$ = (_maxCharacters$value = maxCharacters.value) === null || _maxCharacters$value === void 0 ? void 0 : _maxCharacters$value.toString()) !== null && _maxCharacters$value$ !== void 0 ? _maxCharacters$value$ : "";
            newValue[ConfigurationValueKey.ShowCountDown] = (_asTrueFalseOrNull2 = asTrueFalseOrNull(showCountdown.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False";
            var anyValueChanged = newValue[ConfigurationValueKey.NumberOfRows] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.NumberOfRows]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "") || newValue[ConfigurationValueKey.AllowHtml] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.AllowHtml]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "False") || newValue[ConfigurationValueKey.MaxCharacters] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.MaxCharacters]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "") || newValue[ConfigurationValueKey.ShowCountDown] !== ((_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.ShowCountDown]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "False");
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
            numberOfRows.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.NumberOfRows]);
            allowHtml.value = asBoolean(props.modelValue[ConfigurationValueKey.AllowHtml]);
            maxCharacters.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.MaxCharacters]);
            showCountdown.value = asBoolean(props.modelValue[ConfigurationValueKey.ShowCountDown]);
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(numberOfRows, val => {
            var _val$toString;
            return maybeUpdateConfiguration(ConfigurationValueKey.NumberOfRows, (_val$toString = val === null || val === void 0 ? void 0 : val.toString()) !== null && _val$toString !== void 0 ? _val$toString : "");
          });
          watch(allowHtml, val => {
            var _asTrueFalseOrNull3;
            return maybeUpdateConfiguration(ConfigurationValueKey.AllowHtml, (_asTrueFalseOrNull3 = asTrueFalseOrNull(val)) !== null && _asTrueFalseOrNull3 !== void 0 ? _asTrueFalseOrNull3 : "False");
          });
          watch(maxCharacters, val => {
            var _val$toString2;
            return maybeUpdateConfiguration(ConfigurationValueKey.MaxCharacters, (_val$toString2 = val === null || val === void 0 ? void 0 : val.toString()) !== null && _val$toString2 !== void 0 ? _val$toString2 : "");
          });
          watch(showCountdown, val => {
            var _asTrueFalseOrNull4;
            return maybeUpdateConfiguration(ConfigurationValueKey.ShowCountDown, (_asTrueFalseOrNull4 = asTrueFalseOrNull(val)) !== null && _asTrueFalseOrNull4 !== void 0 ? _asTrueFalseOrNull4 : "False");
          });
          return {
            numberOfRows,
            maxCharacters,
            allowHtml,
            showCountdown
          };
        },
        template: "\n<div>\n    <NumberBox v-model=\"numberOfRows\" label=\"Rows\" help=\"The number of rows to display (default is 3)\" />\n    <CheckBox v-model=\"allowHtml\" label=\"Allow HTML\" text=\"Yes\" help=\"Controls whether server should prevent HTML from being entered in this field or not\" />\n    <NumberBox v-model=\"maxCharacters\" label=\"Max Characters\" help=\"The maximum number of characters to allow. Leave this field empty to allow for an unlimited amount of text\" />\n    <CheckBox v-model=\"showCountdown\" label=\"Show Character Limit Countdown\" text=\"Yes\" help=\"When set, displays a countdown showing how many characters remain (for the Max Characters setting)\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=memoFieldComponents.js.map
