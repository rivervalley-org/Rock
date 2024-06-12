System.register(['vue', './utils', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/component', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Core/Reporting/comparisonType', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/slidingDateRange', '@Obsidian/Utility/rockDateTime', './fieldType', '@Obsidian/Controls/slidingDateRangePicker.obs', '@Obsidian/Controls/dateTimePicker.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/checkBox.obs'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, asBoolean, asTrueFalseOrNull, defineAsyncComponent, updateRefValue, ComparisonType, parseSlidingDateRangeString, slidingDateRangeToString, SlidingDateRangePicker, DateTimePicker, TextBox, CheckBox;
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
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      ComparisonType = module.ComparisonType;
    }, function () {}, function () {}, function (module) {
      parseSlidingDateRangeString = module.parseSlidingDateRangeString;
      slidingDateRangeToString = module.slidingDateRangeToString;
    }, function () {}, function () {}, function (module) {
      SlidingDateRangePicker = module["default"];
    }, function (module) {
      DateTimePicker = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      CheckBox = module["default"];
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
        ConfigurationValueKey["Format"] = "format";
        ConfigurationValueKey["DisplayAsElapsedTime"] = "displayDiff";
        ConfigurationValueKey["DisplayCurrentOption"] = "displayCurrentOption";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateTimeFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateTimeFieldComponents')).ConfigurationComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateTimeFieldComponents')).FilterComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "DateTimeField.Edit",
        components: {
          DateTimePicker
        },
        props: getFieldEditorProps(),
        setup() {
          return {};
        },
        data() {
          return {
            internalValue: "",
            formattedString: ""
          };
        },
        methods: {
          syncModelValue() {
            var _this = this;
            return _asyncToGenerator(function* () {
              var _this$modelValue;
              _this.internalValue = (_this$modelValue = _this.modelValue) !== null && _this$modelValue !== void 0 ? _this$modelValue : "";
            })();
          }
        },
        computed: {
          dateFormatTemplate() {
            var formatConfig = this.configurationValues[ConfigurationValueKey.Format];
            return formatConfig || "MM/dd/yyyy";
          },
          configAttributes() {
            var attributes = {};
            var displayCurrentConfig = this.configurationValues[ConfigurationValueKey.DisplayCurrentOption];
            var displayCurrent = asBoolean(displayCurrentConfig);
            attributes.displayCurrentOption = displayCurrent;
            attributes.isCurrentDateOffset = displayCurrent;
            return attributes;
          }
        },
        watch: {
          internalValue() {
            if (this.internalValue !== this.modelValue) {
              var _this$modelValue2;
              var d1 = Date.parse(this.internalValue);
              var d2 = Date.parse((_this$modelValue2 = this.modelValue) !== null && _this$modelValue2 !== void 0 ? _this$modelValue2 : "");
              if (isNaN(d1) || isNaN(d2) || d1 !== d2) {
                this.$emit("update:modelValue", this.internalValue);
              }
            }
          },
          modelValue: {
            immediate: true,
            handler() {
              var _this2 = this;
              return _asyncToGenerator(function* () {
                yield _this2.syncModelValue();
              })();
            }
          }
        },
        template: "\n<DateTimePicker v-model=\"internalValue\" v-bind=\"configAttributes\" />\n"
      }));
      var FilterComponent = exports('FilterComponent', defineComponent({
        name: "DateField.Filter",
        components: {
          EditComponent,
          SlidingDateRangePicker
        },
        props: _objectSpread2(_objectSpread2({}, getFieldEditorProps()), {}, {
          comparisonType: {
            type: Number,
            required: true
          }
        }),
        emits: ["update:modelValue"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref(props.modelValue);
          var internalValueSegments = internalValue.value.split("\t");
          var dateValue = ref(internalValueSegments[0]);
          var rangeValue = ref(parseSlidingDateRangeString(internalValueSegments.length > 1 ? internalValueSegments[1] : ""));
          var configurationValues = ref(_objectSpread2({}, props.configurationValues));
          configurationValues.value[ConfigurationValueKey.DisplayCurrentOption] = "True";
          var isComparisonTypeBetween = computed(() => props.comparisonType === ComparisonType.Between);
          watch(() => props.configurationValues, () => {
            configurationValues.value = _objectSpread2({}, props.configurationValues);
            configurationValues.value[ConfigurationValueKey.DisplayCurrentOption] = "True";
          });
          watch(dateValue, () => {
            if (props.comparisonType !== ComparisonType.Between) {
              internalValue.value = "".concat(dateValue.value, "\t");
            }
          });
          watch(rangeValue, () => {
            if (props.comparisonType === ComparisonType.Between) {
              internalValue.value = "\t".concat(rangeValue.value ? slidingDateRangeToString(rangeValue.value) : "");
            }
          });
          watch(() => props.modelValue, () => {
            internalValue.value = props.modelValue;
            var segments = internalValue.value.split("\t");
            dateValue.value = segments[0];
            updateRefValue(rangeValue, parseSlidingDateRangeString(segments.length > 1 ? segments[1] : ""));
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          return {
            configurationValues,
            dateValue,
            isComparisonTypeBetween,
            rangeValue
          };
        },
        template: "\n<SlidingDateRangePicker v-if=\"isComparisonTypeBetween\" v-model=\"rangeValue\" />\n<EditComponent v-else v-model=\"dateValue\" :configurationValues=\"configurationValues\" />\n"
      }));
      var defaults = {
        [ConfigurationValueKey.Format]: "",
        [ConfigurationValueKey.DisplayAsElapsedTime]: "False",
        [ConfigurationValueKey.DisplayCurrentOption]: "False"
      };
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "DateTimeField.Configuration",
        components: {
          TextBox,
          CheckBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var format = ref("");
          var displayAsElapsedTime = ref(false);
          var displayCurrentOption = ref(false);
          var maybeUpdateModelValue = () => {
            var _format$value, _asTrueFalseOrNull, _asTrueFalseOrNull2, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3;
            var newValue = {};
            newValue[ConfigurationValueKey.Format] = (_format$value = format.value) !== null && _format$value !== void 0 ? _format$value : defaults[ConfigurationValueKey.Format];
            newValue[ConfigurationValueKey.DisplayAsElapsedTime] = (_asTrueFalseOrNull = asTrueFalseOrNull(displayAsElapsedTime.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : defaults[ConfigurationValueKey.DisplayAsElapsedTime];
            newValue[ConfigurationValueKey.DisplayCurrentOption] = (_asTrueFalseOrNull2 = asTrueFalseOrNull(displayCurrentOption.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : defaults[ConfigurationValueKey.DisplayCurrentOption];
            var anyValueChanged = newValue[ConfigurationValueKey.Format] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.Format]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : defaults[ConfigurationValueKey.Format]) || newValue[ConfigurationValueKey.DisplayAsElapsedTime] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.DisplayAsElapsedTime]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : defaults[ConfigurationValueKey.DisplayAsElapsedTime]) || newValue[ConfigurationValueKey.DisplayCurrentOption] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.DisplayCurrentOption]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : defaults[ConfigurationValueKey.DisplayCurrentOption]);
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
            var _props$modelValue$Con4;
            format.value = (_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.Format]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "";
            displayAsElapsedTime.value = asBoolean(props.modelValue[ConfigurationValueKey.DisplayAsElapsedTime]);
            displayCurrentOption.value = asBoolean(props.modelValue[ConfigurationValueKey.DisplayCurrentOption]);
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(format, val => maybeUpdateConfiguration(ConfigurationValueKey.Format, val !== null && val !== void 0 ? val : defaults[ConfigurationValueKey.Format]));
          watch(displayAsElapsedTime, val => {
            var _asTrueFalseOrNull3;
            return maybeUpdateConfiguration(ConfigurationValueKey.DisplayAsElapsedTime, (_asTrueFalseOrNull3 = asTrueFalseOrNull(val)) !== null && _asTrueFalseOrNull3 !== void 0 ? _asTrueFalseOrNull3 : defaults[ConfigurationValueKey.DisplayAsElapsedTime]);
          });
          watch(displayCurrentOption, val => {
            var _asTrueFalseOrNull4;
            return maybeUpdateConfiguration(ConfigurationValueKey.DisplayCurrentOption, (_asTrueFalseOrNull4 = asTrueFalseOrNull(val)) !== null && _asTrueFalseOrNull4 !== void 0 ? _asTrueFalseOrNull4 : defaults[ConfigurationValueKey.DisplayCurrentOption]);
          });
          return {
            format,
            displayAsElapsedTime,
            displayCurrentOption
          };
        },
        template: "\n<div>\n    <TextBox v-model=\"format\" label=\"Date Time Format\" help=\"The format string to use for date (default is system short date and time)\" />\n    <CheckBox v-model=\"displayAsElapsedTime\" label=\"Display as Elapsed Time\" text=\"Yes\" help=\"Display value as an elapsed time\" />\n    <CheckBox v-model=\"displayCurrentOption\" label=\"Display Current Option\" text=\"Yes\" help=\"Include option to specify value as the current time\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=dateTimeFieldComponents.js.map
