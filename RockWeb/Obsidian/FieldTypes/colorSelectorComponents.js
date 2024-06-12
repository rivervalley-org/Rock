System.register(['vue', '@Obsidian/Core/Utilities/rockColor', './utils', '@Obsidian/Controls/colorSelector.obs', '@Obsidian/Controls/valueList.obs', '@Obsidian/Utility/component'], (function (exports) {
    'use strict';
    var defineComponent, computed, ref, watch, getFieldConfigurationProps, getFieldEditorProps, ColorSelector, ValueList, useVModelPassthrough;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            ref = module.ref;
            watch = module.watch;
        }, function () {}, function (module) {
            getFieldConfigurationProps = module.getFieldConfigurationProps;
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            ColorSelector = module["default"];
        }, function (module) {
            ValueList = module["default"];
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }],
        execute: (function () {

            var ConfigurationValueKey = function (ConfigurationValueKey) {
              ConfigurationValueKey["Colors"] = "colors";
              ConfigurationValueKey["AllowMultiple"] = "allowMultiple";
              return ConfigurationValueKey;
            }({});

            var valueDelimiter = "|";
            function deserializeColors(value) {
              return value.split(valueDelimiter);
            }
            function serializeColors(values) {
              return values.join(valueDelimiter);
            }
            function deserializeValue(value) {
              return value.split(valueDelimiter);
            }
            function serializeValue(values) {
              return values.join(valueDelimiter);
            }
            function deserializeAllowMultiple(value) {
              return (value === null || value === void 0 ? void 0 : value.toLowerCase()) === "true";
            }
            function serializeAllowMultiple(allowMultiple) {
              return allowMultiple.toString();
            }

            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              components: {
                ColorSelector,
                ValueList
              },
              name: "ColorSelector.Configuration",
              props: getFieldConfigurationProps(),
              emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
              setup(props, _ref) {
                var emit = _ref.emit;
                var configColors = computed(() => {
                  return deserializeColors(props.modelValue[ConfigurationValueKey.Colors]);
                });
                var configAllowMultiple = computed(() => {
                  return deserializeAllowMultiple(props.modelValue[ConfigurationValueKey.AllowMultiple]);
                });
                var colors = ref(configColors.value);
                var allowMultiple = ref(configAllowMultiple.value);
                function maybeUpdateModelValue() {
                  var newValue = {};
                  newValue[ConfigurationValueKey.Colors] = serializeColors(colors.value);
                  newValue[ConfigurationValueKey.AllowMultiple] = serializeAllowMultiple(allowMultiple.value);
                  var anyValueChanged = newValue[ConfigurationValueKey.Colors] !== props.modelValue[ConfigurationValueKey.Colors] || newValue[ConfigurationValueKey.AllowMultiple] !== props.modelValue[ConfigurationValueKey.AllowMultiple];
                  if (anyValueChanged) {
                    emit("update:modelValue", newValue);
                    return true;
                  } else {
                    return false;
                  }
                }
                function maybeUpdateConfiguration(key, value) {
                  if (maybeUpdateModelValue()) {
                    emit("updateConfigurationValue", key, value);
                  }
                }
                watch(() => [props.modelValue, props.configurationProperties], () => {
                  colors.value = deserializeColors(props.modelValue[ConfigurationValueKey.Colors]);
                  allowMultiple.value = deserializeAllowMultiple(props.modelValue[ConfigurationValueKey.AllowMultiple]);
                }, {
                  immediate: true
                });
                watch(colors, () => {
                  maybeUpdateConfiguration(ConfigurationValueKey.Colors, serializeColors(colors.value) || "");
                });
                watch(allowMultiple, () => {
                  maybeUpdateConfiguration(ConfigurationValueKey.AllowMultiple, serializeAllowMultiple(allowMultiple.value));
                });
                return {
                  allowMultiple,
                  colors
                };
              },
              template: "\n<div>\n    <ValueList v-model=\"colors\"\n               help=\"The hex colors to select from.\"\n               label=\"Colors\"\n               valuePrompt=\"#FFFFFF\" />\n</div>\n"
            }));
            var EditComponent = exports('EditComponent', defineComponent({
              name: "ColorSelector.Edit",
              components: {
                ColorSelector
              },
              props: getFieldEditorProps(),
              emits: ["update:modelValue"],
              setup(props, _ref2) {
                var emit = _ref2.emit;
                var items = computed(() => {
                  return deserializeColors(props.configurationValues[ConfigurationValueKey.Colors]);
                });
                var allowMultiple = computed(() => {
                  return deserializeAllowMultiple(props.configurationValues[ConfigurationValueKey.AllowMultiple]);
                });
                var internalValue = useVModelPassthrough(props, "modelValue", emit);
                var selectedColors = computed({
                  get() {
                    return deserializeValue(internalValue.value);
                  },
                  set(newValue) {
                    internalValue.value = serializeValue(newValue);
                  }
                });
                return {
                  allowMultiple,
                  selectedColors,
                  items
                };
              },
              template: "\n<ColorSelector v-model=\"selectedColors\"\n               :allowMultiple=\"allowMultiple\"\n               :items=\"items\"\n               label=\"Colors\" />\n"
            }));

        })
    };
}));
//# sourceMappingURL=colorSelectorComponents.js.map
