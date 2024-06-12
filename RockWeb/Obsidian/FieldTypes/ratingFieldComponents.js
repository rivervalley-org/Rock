System.register(['vue', './utils', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/rating.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Utility/component', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Core/Reporting/comparisonType', './fieldType', '@Obsidian/Utility/stringUtils'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, watch, getFieldEditorProps, getFieldConfigurationProps, toNumberOrNull, Rating, NumberBox, defineAsyncComponent;
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
      Rating = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function () {}, function () {}, function () {}],
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
        ConfigurationValueKey["MaxRating"] = "max";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./ratingFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./ratingFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "RatingField.Edit",
        components: {
          Rating
        },
        props: getFieldEditorProps(),
        data() {
          return {
            internalValue: 0
          };
        },
        computed: {
          maxRating() {
            var maxRatingConfig = this.configurationValues[ConfigurationValueKey.MaxRating];
            return toNumberOrNull(maxRatingConfig) || 5;
          }
        },
        watch: {
          internalValue() {
            var ratingValue = {
              value: this.internalValue,
              maxValue: this.maxRating
            };
            this.$emit("update:modelValue", JSON.stringify(ratingValue));
          },
          modelValue: {
            immediate: true,
            handler() {
              try {
                var _this$modelValue, _ratingValue$value;
                var ratingValue = JSON.parse((_this$modelValue = this.modelValue) !== null && _this$modelValue !== void 0 ? _this$modelValue : "");
                this.internalValue = (_ratingValue$value = ratingValue.value) !== null && _ratingValue$value !== void 0 ? _ratingValue$value : 0;
              } catch (_unused) {
                this.internalValue = 0;
              }
            }
          }
        },
        template: "\n<Rating v-model=\"internalValue\" :maxRating=\"maxRating\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "TextField.Configuration",
        components: {
          NumberBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var maxRating = ref(null);
          var maybeUpdateModelValue = () => {
            var _maxRating$value$toSt, _maxRating$value, _props$modelValue$Con;
            var newValue = {};
            newValue[ConfigurationValueKey.MaxRating] = (_maxRating$value$toSt = (_maxRating$value = maxRating.value) === null || _maxRating$value === void 0 ? void 0 : _maxRating$value.toString()) !== null && _maxRating$value$toSt !== void 0 ? _maxRating$value$toSt : "";
            var anyValueChanged = newValue[ConfigurationValueKey.MaxRating] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.MaxRating]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "");
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
            maxRating.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.MaxRating]);
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(maxRating, () => {
            var _maxRating$value$toSt2, _maxRating$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.MaxRating, (_maxRating$value$toSt2 = (_maxRating$value2 = maxRating.value) === null || _maxRating$value2 === void 0 ? void 0 : _maxRating$value2.toString()) !== null && _maxRating$value$toSt2 !== void 0 ? _maxRating$value$toSt2 : "");
          });
          return {
            maxRating
          };
        },
        template: "\n<div>\n    <NumberBox v-model=\"maxRating\" label=\"Max Rating\" help=\"The number of stars (max rating) that should be displayed\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=ratingFieldComponents.js.map
