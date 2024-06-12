System.register(['vue', './utils', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Utility/booleanUtils'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, getFieldEditorProps, getFieldConfigurationProps, DropDownList, CheckBox, asBoolean, asTrueFalseOrNull;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
            getFieldConfigurationProps = module.getFieldConfigurationProps;
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            CheckBox = module["default"];
        }, function (module) {
            asBoolean = module.asBoolean;
            asTrueFalseOrNull = module.asTrueFalseOrNull;
        }],
        execute: (function () {

            var ConfigurationValueKey = function (ConfigurationValueKey) {
              ConfigurationValueKey["HideUnknownGender"] = "hideUnknownGender";
              return ConfigurationValueKey;
            }(ConfigurationValueKey || {});
            var EditComponent = exports('EditComponent', defineComponent({
              name: "GenderField.Edit",
              components: {
                DropDownList
              },
              props: getFieldEditorProps(),
              data() {
                return {
                  internalValue: ""
                };
              },
              computed: {
                dropDownListOptions() {
                  var hideUnknownGenderConfig = this.configurationValues[ConfigurationValueKey.HideUnknownGender];
                  var hideUnknownGender = (hideUnknownGenderConfig === null || hideUnknownGenderConfig === void 0 ? void 0 : hideUnknownGenderConfig.toLowerCase()) === "true";
                  if (hideUnknownGender === false) {
                    return [{
                      text: "Unknown",
                      value: "0"
                    }, {
                      text: "Male",
                      value: "1"
                    }, {
                      text: "Female",
                      value: "2"
                    }];
                  } else {
                    return [{
                      text: "Male",
                      value: "1"
                    }, {
                      text: "Female",
                      value: "2"
                    }];
                  }
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
              template: "\n<DropDownList v-model=\"internalValue\" :items=\"dropDownListOptions\" formControlClasses=\"input-width-md\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "GenderField.Configuration",
              components: {
                CheckBox
              },
              props: getFieldConfigurationProps(),
              emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
              setup(props, _ref) {
                var emit = _ref.emit;
                var hideUnknownGender = ref(false);
                var maybeUpdateModelValue = () => {
                  var _asTrueFalseOrNull, _props$modelValue$Con;
                  var newValue = {};
                  newValue[ConfigurationValueKey.HideUnknownGender] = (_asTrueFalseOrNull = asTrueFalseOrNull(hideUnknownGender.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
                  var anyValueChanged = newValue[ConfigurationValueKey.HideUnknownGender] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.HideUnknownGender]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "False");
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
                  hideUnknownGender.value = asBoolean(props.modelValue[ConfigurationValueKey.HideUnknownGender]);
                }, {
                  immediate: true
                });
                watch([], () => {
                  if (maybeUpdateModelValue()) {
                    emit("updateConfiguration");
                  }
                });
                watch(hideUnknownGender, () => {
                  var _asTrueFalseOrNull2;
                  return maybeUpdateConfiguration(ConfigurationValueKey.HideUnknownGender, (_asTrueFalseOrNull2 = asTrueFalseOrNull(hideUnknownGender.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False");
                });
                return {
                  hideUnknownGender
                };
              },
              template: "\n<div>\n    <CheckBox v-model=\"hideUnknownGender\" label=\"Hide Unknown Gender\" help=\"When set, the 'Unknown' Option will not appear in the list of genders.\" text=\"Yes\" />\n</div>\n"
            }));

        })
    };
}));
//# sourceMappingURL=genderFieldComponents.js.map
