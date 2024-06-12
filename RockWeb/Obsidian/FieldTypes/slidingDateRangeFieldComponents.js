System.register(['vue', './utils', '@Obsidian/Controls/slidingDateRangePicker.obs', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Utility/slidingDateRange', '@Obsidian/Utility/numberUtils'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, SlidingDateRangePicker, CheckBoxList, defineAsyncComponent, updateRefValue, parseSlidingDateRangeString, slidingDateRangeToString, toNumber;
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
      SlidingDateRangePicker = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      updateRefValue = module.updateRefValue;
    }, function () {}, function (module) {
      parseSlidingDateRangeString = module.parseSlidingDateRangeString;
      slidingDateRangeToString = module.slidingDateRangeToString;
    }, function (module) {
      toNumber = module.toNumber;
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
        ConfigurationValueKey["EnabledSlidingDateRangeTypes"] = "enabledSlidingDateRangeTypes";
        ConfigurationValueKey["EnabledSlidingDateRangeUnits"] = "enabledSlidingDateRangeUnits";
        ConfigurationValueKey["TimeUnitTypes"] = "timeUnitTypes";
        ConfigurationValueKey["SlidingDateRangeTypes"] = "slidingDateRangeTypes";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./slidingDateRangeFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./slidingDateRangeFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "SlidingDateRangeField.Edit",
        components: {
          SlidingDateRangePicker
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref(parseSlidingDateRangeString(props.modelValue || ""));
          var enabledSlidingDateRangeTypes = computed(() => {
            try {
              var _props$configurationV;
              return (_props$configurationV = props.configurationValues[ConfigurationValueKey.EnabledSlidingDateRangeTypes]) === null || _props$configurationV === void 0 ? void 0 : _props$configurationV.split(",");
            } catch (_unused) {
              return [];
            }
          });
          var enabledSlidingDateRangeUnits = computed(() => {
            try {
              var _props$configurationV2;
              return (_props$configurationV2 = props.configurationValues[ConfigurationValueKey.EnabledSlidingDateRangeUnits]) === null || _props$configurationV2 === void 0 ? void 0 : _props$configurationV2.split(",").filter(v => v !== "").map(a => toNumber(a));
            } catch (_unused2) {
              return [];
            }
          });
          watch(() => props.modelValue, () => {
            updateRefValue(internalValue, parseSlidingDateRangeString(props.modelValue || ""));
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value ? slidingDateRangeToString(internalValue.value) : "");
          });
          return {
            internalValue,
            enabledSlidingDateRangeUnits,
            enabledSlidingDateRangeTypes
          };
        },
        template: "\n<SlidingDateRangePicker v-model=\"internalValue\" label=\"Sliding Date Range\" :enabledTimeUnits=\"enabledSlidingDateRangeUnits\" :enabledSlidingDateRangeUnits=\"enabledSlidingDateRangeTypes\" previewLocation=\"Right\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "SlidingDateRangeField.Configuration",
        components: {
          CheckBoxList
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var enabledSlidingDateRangeTypes = ref([]);
          var enabledSlidingDateRangeUnits = ref([]);
          var slidingDateRangeTypeOptions = computed(() => {
            try {
              var _props$configurationP;
              return JSON.parse((_props$configurationP = props.configurationProperties[ConfigurationValueKey.SlidingDateRangeTypes]) !== null && _props$configurationP !== void 0 ? _props$configurationP : "[]");
            } catch (_unused3) {
              return [];
            }
          });
          var slidingDateRangeUnitOptions = computed(() => {
            try {
              var _props$configurationP2;
              return JSON.parse((_props$configurationP2 = props.configurationProperties[ConfigurationValueKey.TimeUnitTypes]) !== null && _props$configurationP2 !== void 0 ? _props$configurationP2 : "[]");
            } catch (_unused4) {
              return [];
            }
          });
          var maybeUpdateModelValue = () => {
            var _props$modelValue$Con, _props$modelValue$Con2;
            var newValue = {};
            newValue[ConfigurationValueKey.EnabledSlidingDateRangeTypes] = enabledSlidingDateRangeTypes.value.join(",");
            newValue[ConfigurationValueKey.EnabledSlidingDateRangeUnits] = enabledSlidingDateRangeUnits.value.join(",");
            var anyValueChanged = newValue[ConfigurationValueKey.EnabledSlidingDateRangeTypes] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.EnabledSlidingDateRangeTypes]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "") || newValue[ConfigurationValueKey.EnabledSlidingDateRangeUnits] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.EnabledSlidingDateRangeUnits]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "");
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
            var _props$modelValue$Con3, _props$modelValue$Con4, _props$modelValue$Con5, _props$modelValue$Con6;
            enabledSlidingDateRangeTypes.value = ((_props$modelValue$Con3 = (_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.EnabledSlidingDateRangeTypes]) === null || _props$modelValue$Con4 === void 0 ? void 0 : _props$modelValue$Con4.split(",")) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : []).filter(s => s !== "");
            enabledSlidingDateRangeUnits.value = ((_props$modelValue$Con5 = (_props$modelValue$Con6 = props.modelValue[ConfigurationValueKey.EnabledSlidingDateRangeUnits]) === null || _props$modelValue$Con6 === void 0 ? void 0 : _props$modelValue$Con6.split(",")) !== null && _props$modelValue$Con5 !== void 0 ? _props$modelValue$Con5 : []).filter(s => s !== "");
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(enabledSlidingDateRangeTypes, () => maybeUpdateConfiguration(ConfigurationValueKey.EnabledSlidingDateRangeTypes, enabledSlidingDateRangeTypes.value.join(",")));
          watch(enabledSlidingDateRangeUnits, () => maybeUpdateConfiguration(ConfigurationValueKey.EnabledSlidingDateRangeUnits, enabledSlidingDateRangeUnits.value.join(",")));
          return {
            enabledSlidingDateRangeTypes,
            enabledSlidingDateRangeUnits,
            slidingDateRangeTypeOptions,
            slidingDateRangeUnitOptions
          };
        },
        template: "\n<div>\n<CheckBoxList v-model=\"enabledSlidingDateRangeTypes\"\n    label=\"Enabled Sliding Date Range Types\"\n    help=\"Select specific types or leave all blank to use all of them.\"\n    :items=\"slidingDateRangeTypeOptions\"\n    horizontal />\n<CheckBoxList v-model=\"enabledSlidingDateRangeUnits\"\n    label=\"Enabled Sliding Date Range Units\"\n    help=\"Select specific units or leave all blank to use all of them.\"\n    :items=\"slidingDateRangeUnitOptions\"\n    horizontal />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=slidingDateRangeFieldComponents.js.map
