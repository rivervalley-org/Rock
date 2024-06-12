System.register(['vue', './utils', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Utility/component', './fieldType'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, watch, computed, getFieldEditorProps, getFieldConfigurationProps, TextBox, RadioButtonList, defineAsyncComponent;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      computed = module.computed;
    }, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
      getFieldConfigurationProps = module.getFieldConfigurationProps;
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}],
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
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["Options"] = "options";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./communicationPreferenceFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./communicationPreferenceFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "CommunicationPreferenceField.Edit",
        components: {
          RadioButtonList
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref("");
          watch(() => props.modelValue, () => {
            internalValue.value = props.modelValue;
          }, {
            immediate: true
          });
          watch(() => internalValue.value, () => {
            emit("update:modelValue", internalValue.value);
          });
          var options = computed(() => {
            var _props$configurationV;
            return JSON.parse((_props$configurationV = props.configurationValues[ConfigurationValueKey.Options]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "[]");
          });
          var repeatColumns = computed(() => {
            return props.configurationValues[ConfigurationValueKey.RepeatColumns];
          });
          return {
            internalValue,
            options,
            repeatColumns
          };
        },
        template: "\n    <RadioButtonList v-model=\"internalValue\" :items=\"options\" horizontal :repeatColumns=\"repeatColumns\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "CommunicationPreferenceField.Configuration",
        components: {
          TextBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var columns = ref("");
          var options = ref("");
          var maybeUpdateModelValue = () => {
            var _props$modelValue$Con;
            var newValue = {};
            newValue[ConfigurationValueKey.RepeatColumns] = columns.value;
            newValue[ConfigurationValueKey.Options] = options.value;
            var anyValueChanged = newValue[ConfigurationValueKey.RepeatColumns] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.RepeatColumns]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "");
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
            columns.value = props.modelValue[ConfigurationValueKey.RepeatColumns];
            options.value = props.modelValue[ConfigurationValueKey.Options];
          }, {
            immediate: true
          });
          watch(columns, val => maybeUpdateConfiguration(ConfigurationValueKey.RepeatColumns, val !== null && val !== void 0 ? val : ""));
          return {
            columns
          };
        },
        template: "\n    <TextBox v-model=\"columns\" label=\"Columns\" help=\"Select how many columns the list should use before going to the next row. If blank or 0 then 4 columns will be displayed. There is no upper limit enforced here however the block this is used in might add contraints due to available space.\" />\n"
      }));

    })
  };
}));
//# sourceMappingURL=communicationPreferenceFieldComponents.js.map
