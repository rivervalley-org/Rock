System.register(['vue', './utils', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/dropDownList', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', '@Obsidian/Core/Reporting/comparisonType', './fieldType', '@Obsidian/Utility/booleanUtils'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, CheckBox, NumberBox, CheckBoxList, DropDownList, toNumberOrNull, defineAsyncComponent, updateRefValue, asBoolean, asTrueFalseOrNull;
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
      CheckBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      updateRefValue = module.updateRefValue;
    }, function () {}, function () {}, function (module) {
      asBoolean = module.asBoolean;
      asTrueFalseOrNull = module.asTrueFalseOrNull;
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
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["EnhancedSelection"] = "enhancedselection";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./reminderTypesFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./reminderTypesFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "ReminderTypesField.Edit",
        components: {
          CheckBoxList,
          DropDownList
        },
        props: getFieldEditorProps(),
        setup(props, context) {
          var internalValue = ref(props.modelValue ? props.modelValue.split(",") : []);
          var options = computed(() => {
            try {
              var _props$configurationV;
              return JSON.parse((_props$configurationV = props.configurationValues[ConfigurationValueKey.Values]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "[]");
            } catch (_unused) {
              return [];
            }
          });
          var enhance = computed(() => {
            return props.configurationValues[ConfigurationValueKey.EnhancedSelection] == "True";
          });
          var repeatColumns = computed(() => {
            var _toNumberOrNull;
            var repeatColumnsConfig = props.configurationValues[ConfigurationValueKey.RepeatColumns];
            return (_toNumberOrNull = toNumberOrNull(repeatColumnsConfig)) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : 4;
          });
          watch(() => props.modelValue, () => {
            updateRefValue(internalValue, props.modelValue ? props.modelValue.split(",") : []);
          });
          watch(internalValue, () => {
            context.emit("update:modelValue", internalValue.value.join(","));
          });
          return {
            internalValue,
            options,
            repeatColumns,
            enhance
          };
        },
        template: "\n<DropDownList v-if=\"enhance\" v-model=\"internalValue\" enhanceForLongLists multiple :items=\"options\" />\n<CheckBoxList v-else v-model=\"internalValue\" horizontal :items=\"options\" :repeatColumns=\"repeatColumns\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "ReminderTypesField.Configuration",
        components: {
          CheckBox,
          NumberBox
        },
        props: getFieldConfigurationProps(),
        emit: {
          "update:modelValue": _v => true,
          "updateConfigurationValue": (_k, _v) => true,
          "updateConfiguration": () => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var enhancedSelection = ref(false);
          var numberOfColumns = ref(null);
          var maybeUpdateModelValue = () => {
            var _asTrueFalseOrNull, _numberOfColumns$valu, _numberOfColumns$valu2, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3;
            var newValue = {};
            newValue[ConfigurationValueKey.EnhancedSelection] = (_asTrueFalseOrNull = asTrueFalseOrNull(enhancedSelection.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
            newValue[ConfigurationValueKey.RepeatColumns] = (_numberOfColumns$valu = (_numberOfColumns$valu2 = numberOfColumns.value) === null || _numberOfColumns$valu2 === void 0 ? void 0 : _numberOfColumns$valu2.toString()) !== null && _numberOfColumns$valu !== void 0 ? _numberOfColumns$valu : "";
            newValue[ConfigurationValueKey.Values] = (_props$modelValue$Con = props.modelValue[ConfigurationValueKey.Values]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "";
            var anyValueChanged = newValue[ConfigurationValueKey.EnhancedSelection] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.EnhancedSelection]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "False") || newValue[ConfigurationValueKey.RepeatColumns] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.RepeatColumns]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "");
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
            enhancedSelection.value = asBoolean(props.modelValue[ConfigurationValueKey.EnhancedSelection]);
            numberOfColumns.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.RepeatColumns]);
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(enhancedSelection, () => {
            var _asTrueFalseOrNull2;
            return maybeUpdateConfiguration(ConfigurationValueKey.EnhancedSelection, (_asTrueFalseOrNull2 = asTrueFalseOrNull(enhancedSelection.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False");
          });
          watch(numberOfColumns, () => {
            var _numberOfColumns$valu3, _numberOfColumns$valu4;
            return maybeUpdateConfiguration(ConfigurationValueKey.RepeatColumns, (_numberOfColumns$valu3 = (_numberOfColumns$valu4 = numberOfColumns.value) === null || _numberOfColumns$valu4 === void 0 ? void 0 : _numberOfColumns$valu4.toString()) !== null && _numberOfColumns$valu3 !== void 0 ? _numberOfColumns$valu3 : "");
          });
          return {
            enhancedSelection,
            numberOfColumns
          };
        },
        template: "\n<div>\n    <CheckBox v-model=\"enhancedSelection\"\n        label=\"Enhanced For Long Lists\"\n        help=\"When set, will render a searchable selection of options.\" />\n\n    <NumberBox v-if=\"!enhancedSelection\"\n        v-model=\"numberOfColumns\"\n        label=\"Number of Columns\"\n        help=\"Select how many columns the list should use before going to the next row. If blank or 0 then 4 columns will be displayed. There is no upper limit enforced here however the block this is used in might add contraints due to available space.\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=reminderTypesFieldComponents.js.map
