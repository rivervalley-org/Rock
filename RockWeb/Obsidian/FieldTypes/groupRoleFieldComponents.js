System.register(['vue', './utils', '@Obsidian/Controls/groupRolePicker.obs', '@Obsidian/Controls/groupTypePicker.obs', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Utility/guid'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, GroupRolePicker, GroupTypePicker, defineAsyncComponent, toGuidOrNull;
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
      GroupRolePicker = module["default"];
    }, function (module) {
      GroupTypePicker = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function (module) {
      toGuidOrNull = module.toGuidOrNull;
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
        ConfigurationValueKey["GroupType"] = "grouptype";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupRoleFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupRoleFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "GroupRoleField.Edit",
        components: {
          GroupRolePicker
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref({});
          var groupTypeValue = ref({});
          var groupTypeGuid = computed(() => {
            var _groupTypeValue$value;
            return toGuidOrNull((_groupTypeValue$value = groupTypeValue.value) === null || _groupTypeValue$value === void 0 ? void 0 : _groupTypeValue$value.value);
          });
          watch(() => props.modelValue, () => {
            internalValue.value = JSON.parse(props.modelValue || "{}");
          }, {
            immediate: true
          });
          watch(() => props.configurationValues, () => {
            groupTypeValue.value = JSON.parse(props.configurationValues[ConfigurationValueKey.GroupType] || "{}");
          }, {
            immediate: true
          });
          watch(() => internalValue.value, () => {
            emit("update:modelValue", JSON.stringify(internalValue.value));
          });
          return {
            internalValue,
            groupTypeValue,
            groupTypeGuid
          };
        },
        template: "\n<GroupRolePicker v-model=\"internalValue\" :groupTypeGuid=\"groupTypeGuid\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "GroupRoleField.Configuration",
        components: {
          GroupTypePicker
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var groupType = ref({});
          var maybeUpdateModelValue = () => {
            var _groupType$value, _props$modelValue$Con;
            var newValue = {};
            newValue[ConfigurationValueKey.GroupType] = JSON.stringify((_groupType$value = groupType.value) !== null && _groupType$value !== void 0 ? _groupType$value : "");
            var anyValueChanged = newValue[ConfigurationValueKey.GroupType] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.GroupType]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "");
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
            groupType.value = JSON.parse(props.modelValue[ConfigurationValueKey.GroupType] || "{}");
          }, {
            immediate: true
          });
          watch(groupType, val => maybeUpdateConfiguration(ConfigurationValueKey.GroupType, JSON.stringify(val !== null && val !== void 0 ? val : "")));
          return {
            groupType
          };
        },
        template: "\n<GroupTypePicker v-model=\"groupType\"\n    label=\"Group Type\" help=\"Type of group to select roles from, if left blank any group type's role can be selected.\"\n    showBlankItem=\"true\" />\n    "
      }));

    })
  };
}));
//# sourceMappingURL=groupRoleFieldComponents.js.map
