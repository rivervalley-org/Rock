System.register(['vue', './utils', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/rangeSlider.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Utility/component', '@Obsidian/Core/Reporting/comparisonType', './fieldType'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, watch, getFieldEditorProps, getFieldConfigurationProps, toNumberOrNull, RangeSlider, NumberBox, defineAsyncComponent;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
      getFieldConfigurationProps = module.getFieldConfigurationProps;
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      RangeSlider = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
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
        ConfigurationValueKey["MinValue"] = "minValue";
        ConfigurationValueKey["MaxValue"] = "maxValue";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./rangeSliderFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./rangeSliderFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "RangeSliderField.Edit",
        components: {
          RangeSlider
        },
        props: getFieldEditorProps(),
        data() {
          return {
            internalValue: null
          };
        },
        computed: {
          minValue() {
            var minValueConfig = this.configurationValues[ConfigurationValueKey.MinValue];
            return toNumberOrNull(minValueConfig) || 0;
          },
          maxValue() {
            var maxValueConfig = this.configurationValues[ConfigurationValueKey.MaxValue];
            return toNumberOrNull(maxValueConfig) || 100;
          }
        },
        watch: {
          internalValue() {
            this.$emit("update:modelValue", this.internalValue !== null ? this.internalValue.toString() : "");
          },
          modelValue: {
            immediate: true,
            handler() {
              this.internalValue = toNumberOrNull(this.modelValue || "");
            }
          }
        },
        template: "\n<RangeSlider v-model=\"internalValue\" rules=\"integer\" :min=\"minValue\" :max=\"maxValue\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "RangeSliderField.Configuration",
        components: {
          NumberBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var minValue = ref(null);
          var maxValue = ref(null);
          var maybeUpdateModelValue = () => {
            var _minValue$value$toStr, _minValue$value, _maxValue$value$toStr, _maxValue$value, _props$modelValue$Con, _props$modelValue$Con2;
            var newValue = {};
            newValue[ConfigurationValueKey.MinValue] = (_minValue$value$toStr = (_minValue$value = minValue.value) === null || _minValue$value === void 0 ? void 0 : _minValue$value.toString()) !== null && _minValue$value$toStr !== void 0 ? _minValue$value$toStr : "";
            newValue[ConfigurationValueKey.MaxValue] = (_maxValue$value$toStr = (_maxValue$value = maxValue.value) === null || _maxValue$value === void 0 ? void 0 : _maxValue$value.toString()) !== null && _maxValue$value$toStr !== void 0 ? _maxValue$value$toStr : "";
            var anyValueChanged = newValue[ConfigurationValueKey.MinValue] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.MinValue]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "") || newValue[ConfigurationValueKey.MaxValue] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.MaxValue]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "");
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
            minValue.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.MinValue]);
            maxValue.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.MaxValue]);
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(minValue, () => {
            var _minValue$value$toStr2, _minValue$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.MinValue, (_minValue$value$toStr2 = (_minValue$value2 = minValue.value) === null || _minValue$value2 === void 0 ? void 0 : _minValue$value2.toString()) !== null && _minValue$value$toStr2 !== void 0 ? _minValue$value$toStr2 : "");
          });
          watch(maxValue, () => {
            var _maxValue$value$toStr2, _maxValue$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.MaxValue, (_maxValue$value$toStr2 = (_maxValue$value2 = maxValue.value) === null || _maxValue$value2 === void 0 ? void 0 : _maxValue$value2.toString()) !== null && _maxValue$value$toStr2 !== void 0 ? _maxValue$value$toStr2 : "");
          });
          return {
            minValue,
            maxValue
          };
        },
        template: "\n<div>\n    <NumberBox v-model=\"minValue\" label=\"Min Value\" help=\"The minimum value allowed for the slider range.\" />\n    <NumberBox v-model=\"maxValue\" label=\"Max Value\" help=\"The maximum value allowed for the slider range.\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=rangeSliderFieldComponents.js.map
