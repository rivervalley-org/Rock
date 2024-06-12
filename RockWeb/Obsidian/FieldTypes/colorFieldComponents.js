System.register(['vue', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/colorPicker.obs', './utils', '@Obsidian/Utility/component'], (function (exports) {
    'use strict';
    var defineComponent, computed, ref, watch, DropDownList, ColorPicker, getFieldEditorProps, getFieldConfigurationProps, useVModelPassthrough;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            ColorPicker = module["default"];
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
            getFieldConfigurationProps = module.getFieldConfigurationProps;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }],
        execute: (function () {

            var ConfigurationValueKey = function (ConfigurationValueKey) {
              ConfigurationValueKey["ColorControlType"] = "selectiontype";
              ConfigurationValueKey["ColorPicker"] = "Color Picker";
              ConfigurationValueKey["NamedColor"] = "Named Color";
              return ConfigurationValueKey;
            }(ConfigurationValueKey || {});
            var namedColors = ["Transparent", "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenrod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "Firebrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "Goldenrod", "Gray", "Green", "GreenYellow", "Honeydew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenrodYellow", "LightGreen", "LightGray", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquamarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenrod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
            var EditComponent = exports('EditComponent', defineComponent({
              name: "ColorField.Edit",
              components: {
                DropDownList,
                ColorPicker
              },
              props: getFieldEditorProps(),
              emits: ["update:modelValue"],
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = useVModelPassthrough(props, "modelValue", emit);
                var dropDownListOptions = namedColors.map(v => {
                  return {
                    text: v,
                    value: v
                  };
                });
                var isNamedPicker = computed(() => {
                  return props.configurationValues[ConfigurationValueKey.ColorControlType] === ConfigurationValueKey.NamedColor;
                });
                return {
                  internalValue,
                  dropDownListOptions,
                  isNamedPicker
                };
              },
              template: "\n<DropDownList v-if=\"isNamedPicker\" v-model=\"internalValue\" :items=\"dropDownListOptions\" />\n<ColorPicker v-else v-model=\"internalValue\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "ColorField.Configuration",
              components: {
                DropDownList
              },
              props: getFieldConfigurationProps(),
              emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
              setup(props, _ref2) {
                var emit = _ref2.emit;
                var colorControlType = ref("");
                var typeList = [{
                  text: ConfigurationValueKey.ColorPicker,
                  value: ConfigurationValueKey.ColorPicker
                }, {
                  text: ConfigurationValueKey.NamedColor,
                  value: ConfigurationValueKey.NamedColor
                }];
                var maybeUpdateModelValue = () => {
                  var _colorControlType$val, _props$modelValue$Con;
                  var newValue = {};
                  newValue[ConfigurationValueKey.ColorControlType] = (_colorControlType$val = colorControlType.value) !== null && _colorControlType$val !== void 0 ? _colorControlType$val : ConfigurationValueKey.ColorPicker;
                  var anyValueChanged = newValue[ConfigurationValueKey.ColorControlType] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.ColorControlType]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : ConfigurationValueKey.ColorPicker);
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
                  var _props$modelValue$Con2;
                  colorControlType.value = (_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.ColorControlType]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : ConfigurationValueKey.ColorPicker;
                }, {
                  immediate: true
                });
                watch([], () => {
                  if (maybeUpdateModelValue()) {
                    emit("updateConfiguration");
                  }
                });
                watch(colorControlType, () => maybeUpdateConfiguration(ConfigurationValueKey.ColorControlType, colorControlType.value || ConfigurationValueKey.ColorPicker));
                return {
                  colorControlType,
                  typeList
                };
              },
              template: "\n<div>\n    <DropDownList v-model=\"colorControlType\" :items=\"typeList\" :show-blank-item=\"false\" label=\"Selection Type\" help=\"The type of control to select color\" />\n</div>\n"
            }));

        })
    };
}));
//# sourceMappingURL=colorFieldComponents.js.map
