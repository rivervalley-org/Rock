System.register(['vue', './utils', '@Obsidian/Controls/groupTypePicker.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Utility/component', './fieldType'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, GroupTypePicker, DropDownList, defineAsyncComponent;
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
      GroupTypePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
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
        ConfigurationValueKey["GroupType"] = "groupTypeGuid";
        ConfigurationValueKey["GroupTypeLocations"] = "groupTypeLocations";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupLocationTypeFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupLocationTypeFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "GroupLocationTypeField.Edit",
        components: {
          DropDownList
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref({});
          var options = computed(() => {
            try {
              var groupType = JSON.parse(props.configurationValues[ConfigurationValueKey.GroupType] || "{}");
              var locationTypes = JSON.parse(props.configurationValues[ConfigurationValueKey.GroupTypeLocations] || "{}");
              if (groupType.value) {
                return JSON.parse(locationTypes[groupType.value] || "[]");
              } else {
                return [];
              }
            } catch (_unused) {
              return [];
            }
          });
          watch(() => props.modelValue, () => {
            internalValue.value = JSON.parse(props.modelValue || "{}");
          }, {
            immediate: true
          });
          watch(() => internalValue.value, () => {
            emit("update:modelValue", JSON.stringify(internalValue.value));
          }, {
            deep: true
          });
          return {
            internalValue,
            options
          };
        },
        template: "\n    <DropDownList label=\"Select\" v-model=\"internalValue.value\" :items=\"options\" :showBlankItem=\"true\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "GroupLocationTypeField.Configuration",
        components: {
          GroupTypePicker
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var groupType = ref({});
          var maybeUpdateModelValue = () => {
            var _groupType$value;
            var newValue = {};
            newValue[ConfigurationValueKey.GroupType] = JSON.stringify((_groupType$value = groupType.value) !== null && _groupType$value !== void 0 ? _groupType$value : "");
            newValue[ConfigurationValueKey.GroupTypeLocations] = props.modelValue[ConfigurationValueKey.GroupTypeLocations];
            var anyValueChanged = newValue[ConfigurationValueKey.GroupType] !== props.modelValue[ConfigurationValueKey.GroupType];
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
        template: "\n    <GroupTypePicker label=\"Group Type\" v-model=\"groupType\" />\n    "
      }));

    })
  };
}));
//# sourceMappingURL=groupLocationTypeFieldComponents.js.map
