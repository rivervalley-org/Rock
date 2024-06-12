System.register(['vue', './utils', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/numberUtils'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, TextBox, CheckBox, NumberBox, asBooleanOrNull, asBoolean, asTrueFalseOrNull, toNumberOrNull;
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
            TextBox = module["default"];
        }, function (module) {
            CheckBox = module["default"];
        }, function (module) {
            NumberBox = module["default"];
        }, function (module) {
            asBooleanOrNull = module.asBooleanOrNull;
            asBoolean = module.asBoolean;
            asTrueFalseOrNull = module.asTrueFalseOrNull;
        }, function (module) {
            toNumberOrNull = module.toNumberOrNull;
        }],
        execute: (function () {

            var ConfigurationValueKey = exports('ConfigurationValueKey', function (ConfigurationValueKey) {
              ConfigurationValueKey["IsPassword"] = "ispassword";
              ConfigurationValueKey["MaxCharacters"] = "maxcharacters";
              ConfigurationValueKey["ShowCountdown"] = "showcountdown";
              return ConfigurationValueKey;
            }({}));
            var EditComponent = exports('EditComponent', defineComponent({
              name: "TextField.Edit",
              components: {
                TextBox
              },
              props: getFieldEditorProps(),
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = ref("");
                var configAttributes = computed(() => {
                  var attributes = {};
                  var maxCharsConfig = props.configurationValues[ConfigurationValueKey.MaxCharacters];
                  if (maxCharsConfig) {
                    var maxCharsValue = Number(maxCharsConfig);
                    if (maxCharsValue) {
                      attributes.maxLength = maxCharsValue;
                    }
                  }
                  var showCountDownConfig = props.configurationValues[ConfigurationValueKey.ShowCountdown];
                  if (showCountDownConfig && showCountDownConfig) {
                    var showCountDownValue = asBooleanOrNull(showCountDownConfig) || false;
                    if (showCountDownValue) {
                      attributes.showCountDown = showCountDownValue;
                    }
                  }
                  return attributes;
                });
                var textType = computed(() => {
                  var _asBooleanOrNull;
                  var isPasswordConfig = props.configurationValues[ConfigurationValueKey.IsPassword];
                  var isPassword = (_asBooleanOrNull = asBooleanOrNull(isPasswordConfig)) !== null && _asBooleanOrNull !== void 0 ? _asBooleanOrNull : false;
                  return isPassword ? "password" : "";
                });
                watch(() => props.modelValue, () => {
                  internalValue.value = props.modelValue;
                }, {
                  immediate: true
                });
                watch(internalValue, () => {
                  emit("update:modelValue", internalValue.value);
                });
                return {
                  configAttributes,
                  internalValue,
                  textType
                };
              },
              template: "\n<TextBox v-model=\"internalValue\" v-bind=\"configAttributes\" :type=\"textType\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "TextField.Configuration",
              components: {
                CheckBox,
                NumberBox
              },
              props: getFieldConfigurationProps(),
              emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
              setup(props, _ref2) {
                var emit = _ref2.emit;
                var passwordField = ref(false);
                var maxCharacters = ref(null);
                var showCountdown = ref(false);
                var maybeUpdateModelValue = () => {
                  var _asTrueFalseOrNull, _maxCharacters$value$, _maxCharacters$value, _asTrueFalseOrNull2, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3;
                  var newValue = {};
                  newValue[ConfigurationValueKey.IsPassword] = (_asTrueFalseOrNull = asTrueFalseOrNull(passwordField.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
                  newValue[ConfigurationValueKey.MaxCharacters] = (_maxCharacters$value$ = (_maxCharacters$value = maxCharacters.value) === null || _maxCharacters$value === void 0 ? void 0 : _maxCharacters$value.toString()) !== null && _maxCharacters$value$ !== void 0 ? _maxCharacters$value$ : "";
                  newValue[ConfigurationValueKey.ShowCountdown] = (_asTrueFalseOrNull2 = asTrueFalseOrNull(showCountdown.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False";
                  var anyValueChanged = newValue[ConfigurationValueKey.IsPassword] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.IsPassword]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "False") || newValue[ConfigurationValueKey.MaxCharacters] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.MaxCharacters]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "") || newValue[ConfigurationValueKey.ShowCountdown] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.ShowCountdown]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "False");
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
                  passwordField.value = asBoolean(props.modelValue[ConfigurationValueKey.IsPassword]);
                  maxCharacters.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.MaxCharacters]);
                  showCountdown.value = asBoolean(props.modelValue[ConfigurationValueKey.ShowCountdown]);
                }, {
                  immediate: true
                });
                watch([], () => {
                  if (maybeUpdateModelValue()) {
                    emit("updateConfiguration");
                  }
                });
                watch(passwordField, () => {
                  var _asTrueFalseOrNull3;
                  return maybeUpdateConfiguration(ConfigurationValueKey.IsPassword, (_asTrueFalseOrNull3 = asTrueFalseOrNull(passwordField.value)) !== null && _asTrueFalseOrNull3 !== void 0 ? _asTrueFalseOrNull3 : "False");
                });
                watch(maxCharacters, () => {
                  var _maxCharacters$value$2, _maxCharacters$value2;
                  return maybeUpdateConfiguration(ConfigurationValueKey.MaxCharacters, (_maxCharacters$value$2 = (_maxCharacters$value2 = maxCharacters.value) === null || _maxCharacters$value2 === void 0 ? void 0 : _maxCharacters$value2.toString()) !== null && _maxCharacters$value$2 !== void 0 ? _maxCharacters$value$2 : "");
                });
                watch(showCountdown, () => {
                  var _asTrueFalseOrNull4;
                  return maybeUpdateConfiguration(ConfigurationValueKey.ShowCountdown, (_asTrueFalseOrNull4 = asTrueFalseOrNull(showCountdown.value)) !== null && _asTrueFalseOrNull4 !== void 0 ? _asTrueFalseOrNull4 : "False");
                });
                return {
                  maxCharacters,
                  passwordField,
                  showCountdown
                };
              },
              template: "\n<div>\n    <CheckBox v-model=\"passwordField\" label=\"Password Field\" text=\"Yes\" help=\"When set, edit field will be masked.\" />\n    <NumberBox v-model=\"maxCharacters\" label=\"Max Characters\" help=\"The maximum number of characters to allow. Leave this field empty to allow for an unlimited amount of text.\" />\n    <CheckBox v-model=\"showCountdown\" label=\"Show Character Limit Countdown\" text=\"Yes\" help=\"When set, displays a countdown showing how many characters remain (for the Max Characters setting).\" />\n</div>\n"
            }));

        })
    };
}));
//# sourceMappingURL=textFieldComponents.js.map
