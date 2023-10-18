System.register(['vue', './utils', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Core/Reporting/comparisonType', '@Obsidian/Utility/slidingDateRange', '@Obsidian/Utility/rockDateTime', './fieldType', '@Obsidian/Controls/slidingDateRangePicker.obs', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/datePartsPicker', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/textBox', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/checkBox'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, asBoolean, asTrueFalseOrNull, toNumber, toNumberOrNull, defineAsyncComponent, updateRefValue, ComparisonType, parseSlidingDateRangeString, slidingDateRangeToString, RockDateTime, SlidingDateRangePicker, DatePicker, DatePartsPicker, getDefaultDatePartsPickerModel, DropDownList, TextBox, NumberBox, CheckBox;
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
      toNumber = module.toNumber;
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      ComparisonType = module.ComparisonType;
    }, function () {}, function (module) {
      parseSlidingDateRangeString = module.parseSlidingDateRangeString;
      slidingDateRangeToString = module.slidingDateRangeToString;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function () {}, function (module) {
      SlidingDateRangePicker = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      DatePartsPicker = module["default"];
      getDefaultDatePartsPickerModel = module.getDefaultDatePartsPickerModel;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
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
        ConfigurationValueKey["DisplayDiff"] = "displayDiff";
        ConfigurationValueKey["DisplayCurrentOption"] = "displayCurrentOption";
        ConfigurationValueKey["DatePickerControlType"] = "datePickerControlType";
        ConfigurationValueKey["FutureYearCount"] = "futureYearCount";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateFieldComponents')).ConfigurationComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateFieldComponents')).FilterComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "DateField.Edit",
        components: {
          DatePicker,
          DatePartsPicker
        },
        props: getFieldEditorProps(),
        data() {
          return {
            internalValue: "",
            internalDateParts: getDefaultDatePartsPickerModel(),
            formattedString: ""
          };
        },
        setup() {
          return {};
        },
        computed: {
          datePartsAsDate() {
            var _this$internalDatePar;
            if (!((_this$internalDatePar = this.internalDateParts) !== null && _this$internalDatePar !== void 0 && _this$internalDatePar.day) || !this.internalDateParts.month || !this.internalDateParts.year) {
              return null;
            }
            return RockDateTime.fromParts(this.internalDateParts.year, this.internalDateParts.month, this.internalDateParts.day) || null;
          },
          isDatePartsPicker() {
            var config = this.configurationValues[ConfigurationValueKey.DatePickerControlType];
            return (config === null || config === void 0 ? void 0 : config.toLowerCase()) === "date parts picker";
          },
          configAttributes() {
            var attributes = {};
            var displayCurrentConfig = this.configurationValues[ConfigurationValueKey.DisplayCurrentOption];
            var displayCurrent = asBoolean(displayCurrentConfig);
            attributes.displayCurrentOption = displayCurrent;
            attributes.isCurrentDateOffset = displayCurrent;
            var futureYearConfig = this.configurationValues[ConfigurationValueKey.FutureYearCount];
            var futureYears = toNumber(futureYearConfig);
            if (futureYears > 0) {
              attributes.futureYearCount = futureYears;
            }
            return attributes;
          }
        },
        methods: {
          syncModelValue() {
            var _this$modelValue, _this$modelValue2;
            this.internalValue = (_this$modelValue = this.modelValue) !== null && _this$modelValue !== void 0 ? _this$modelValue : "";
            var dateParts = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec((_this$modelValue2 = this.modelValue) !== null && _this$modelValue2 !== void 0 ? _this$modelValue2 : "");
            if (dateParts != null) {
              this.internalDateParts.year = toNumber(dateParts[1]);
              this.internalDateParts.month = toNumber(dateParts[2]);
              this.internalDateParts.day = toNumber(dateParts[3]);
            } else {
              this.internalDateParts.year = 0;
              this.internalDateParts.month = 0;
              this.internalDateParts.day = 0;
            }
          }
        },
        watch: {
          datePartsAsDate() {
            if (this.isDatePartsPicker) {
              var _this$modelValue3;
              var d1 = this.datePartsAsDate;
              var d2 = RockDateTime.parseISO((_this$modelValue3 = this.modelValue) !== null && _this$modelValue3 !== void 0 ? _this$modelValue3 : "");
              if (d1 === null || d2 === null || !d1.isEqualTo(d2)) {
                this.$emit("update:modelValue", d1 !== null ? d1.toISOString().split("T")[0] : "");
              }
            }
          },
          internalValue() {
            if (!this.isDatePartsPicker) {
              var _this$modelValue4;
              var d1 = RockDateTime.parseISO(this.internalValue);
              var d2 = RockDateTime.parseISO((_this$modelValue4 = this.modelValue) !== null && _this$modelValue4 !== void 0 ? _this$modelValue4 : "");
              if (d1 === null || d2 === null || !d1.isEqualTo(d2)) {
                this.$emit("update:modelValue", this.internalValue);
              }
            }
          },
          modelValue: {
            immediate: true,
            handler() {
              var _this = this;
              return _asyncToGenerator(function* () {
                yield _this.syncModelValue();
              })();
            }
          }
        },
        template: "\n<DatePartsPicker v-if=\"isDatePartsPicker\" v-model=\"internalDateParts\" v-bind=\"configAttributes\" />\n<DatePicker v-else v-model=\"internalValue\" v-bind=\"configAttributes\" />\n"
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
        [ConfigurationValueKey.DisplayDiff]: "False",
        [ConfigurationValueKey.DisplayCurrentOption]: "False",
        [ConfigurationValueKey.DatePickerControlType]: "Date Picker",
        [ConfigurationValueKey.FutureYearCount]: ""
      };
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "DateField.Configuration",
        components: {
          TextBox,
          CheckBox,
          DropDownList,
          NumberBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var format = ref("");
          var displayDiff = ref(false);
          var displayCurrentOption = ref(false);
          var pickerControlType = ref("Date Picker");
          var futureYears = ref(null);
          var pickerControlTypeOptions = [{
            text: "Date Picker",
            value: "Date Picker"
          }, {
            text: "Date Parts Picker",
            value: "Date Parts Picker"
          }];
          var maybeUpdateModelValue = () => {
            var _format$value, _asTrueFalseOrNull, _asTrueFalseOrNull2, _pickerControlType$va, _futureYears$value$to, _futureYears$value, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3, _props$modelValue$Con4, _props$modelValue$Con5;
            var newValue = {};
            newValue[ConfigurationValueKey.Format] = (_format$value = format.value) !== null && _format$value !== void 0 ? _format$value : defaults[ConfigurationValueKey.Format];
            newValue[ConfigurationValueKey.DisplayDiff] = (_asTrueFalseOrNull = asTrueFalseOrNull(displayDiff.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : defaults[ConfigurationValueKey.DisplayDiff];
            newValue[ConfigurationValueKey.DisplayCurrentOption] = (_asTrueFalseOrNull2 = asTrueFalseOrNull(displayCurrentOption.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : defaults[ConfigurationValueKey.DisplayCurrentOption];
            newValue[ConfigurationValueKey.DatePickerControlType] = (_pickerControlType$va = pickerControlType.value) !== null && _pickerControlType$va !== void 0 ? _pickerControlType$va : defaults[ConfigurationValueKey.DatePickerControlType];
            newValue[ConfigurationValueKey.FutureYearCount] = (_futureYears$value$to = (_futureYears$value = futureYears.value) === null || _futureYears$value === void 0 ? void 0 : _futureYears$value.toString()) !== null && _futureYears$value$to !== void 0 ? _futureYears$value$to : defaults[ConfigurationValueKey.FutureYearCount];
            var anyValueChanged = newValue[ConfigurationValueKey.Format] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.Format]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : defaults[ConfigurationValueKey.Format]) || newValue[ConfigurationValueKey.DisplayDiff] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.DisplayDiff]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : defaults[ConfigurationValueKey.DisplayDiff]) || newValue[ConfigurationValueKey.DisplayCurrentOption] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.DisplayCurrentOption]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : defaults[ConfigurationValueKey.DisplayCurrentOption]) || newValue[ConfigurationValueKey.DatePickerControlType] !== ((_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.DatePickerControlType]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : defaults[ConfigurationValueKey.DatePickerControlType]) || newValue[ConfigurationValueKey.FutureYearCount] !== ((_props$modelValue$Con5 = props.modelValue[ConfigurationValueKey.FutureYearCount]) !== null && _props$modelValue$Con5 !== void 0 ? _props$modelValue$Con5 : defaults[ConfigurationValueKey.FutureYearCount]);
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
            var _props$modelValue$Con6, _props$modelValue$Con7;
            format.value = (_props$modelValue$Con6 = props.modelValue[ConfigurationValueKey.Format]) !== null && _props$modelValue$Con6 !== void 0 ? _props$modelValue$Con6 : "";
            displayDiff.value = asBoolean(props.modelValue[ConfigurationValueKey.DisplayDiff]);
            displayCurrentOption.value = asBoolean(props.modelValue[ConfigurationValueKey.DisplayCurrentOption]);
            pickerControlType.value = (_props$modelValue$Con7 = props.modelValue[ConfigurationValueKey.DatePickerControlType]) !== null && _props$modelValue$Con7 !== void 0 ? _props$modelValue$Con7 : "Date Picker";
            futureYears.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.FutureYearCount]);
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(format, val => maybeUpdateConfiguration(ConfigurationValueKey.Format, val !== null && val !== void 0 ? val : defaults[ConfigurationValueKey.Format]));
          watch(displayDiff, val => {
            var _asTrueFalseOrNull3;
            return maybeUpdateConfiguration(ConfigurationValueKey.DisplayDiff, (_asTrueFalseOrNull3 = asTrueFalseOrNull(val)) !== null && _asTrueFalseOrNull3 !== void 0 ? _asTrueFalseOrNull3 : defaults[ConfigurationValueKey.DisplayDiff]);
          });
          watch(displayCurrentOption, val => {
            var _asTrueFalseOrNull4;
            return maybeUpdateConfiguration(ConfigurationValueKey.DisplayCurrentOption, (_asTrueFalseOrNull4 = asTrueFalseOrNull(val)) !== null && _asTrueFalseOrNull4 !== void 0 ? _asTrueFalseOrNull4 : defaults[ConfigurationValueKey.DisplayCurrentOption]);
          });
          watch(pickerControlType, val => maybeUpdateConfiguration(ConfigurationValueKey.DatePickerControlType, val || defaults[ConfigurationValueKey.DatePickerControlType]));
          watch(futureYears, val => {
            var _val$toString;
            return maybeUpdateConfiguration(ConfigurationValueKey.FutureYearCount, (_val$toString = val === null || val === void 0 ? void 0 : val.toString()) !== null && _val$toString !== void 0 ? _val$toString : defaults[ConfigurationValueKey.FutureYearCount]);
          });
          return {
            format,
            displayDiff,
            displayCurrentOption,
            pickerControlType,
            futureYears,
            pickerControlTypeOptions
          };
        },
        template: "\n<div>\n    <TextBox v-model=\"format\" label=\"Date Format\" help=\"The format string to use for date (default is system short date)\" />\n    <CheckBox v-model=\"displayDiff\" label=\"Display as Elapsed Time\" text=\"Yes\" help=\"Display value as an elapsed time\" />\n    <DropDownList v-model=\"pickerControlType\" :items=\"pickerControlTypeOptions\" :show-blank-item=\"false\" label=\"Control Type\" help=\"Select 'Date Picker' to use a Date Picker, or 'Date Parts Picker' to select Month, Day, and Year individually\" />\n    <CheckBox v-if=\"pickerControlType == 'Date Picker'\" v-model=\"displayCurrentOption\" label=\"Display Current Option\" text=\"Yes\" help=\"Include option to specify value as the current date\" />\n    <NumberBox v-else v-model=\"futureYears\"  label=\"Future Years\" help=\"The number of years  in the future to include in the year picker. Set to 0 to limit to current year. Leaving it blank will default to 50.\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=dateFieldComponents.js.map
