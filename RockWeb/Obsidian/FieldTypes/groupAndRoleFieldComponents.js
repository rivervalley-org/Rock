System.register(['vue', './utils', '@Obsidian/Utility/http', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/groupTypeGroupPicker.obs', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Utility/guid'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, watch, getFieldEditorProps, getFieldConfigurationProps, useHttp, DropDownList, GroupTypeGroupPicker, RockLabel, TextBox, defineAsyncComponent, toGuidOrNull, areEqual, emptyGuid;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
      getFieldConfigurationProps = module.getFieldConfigurationProps;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      GroupTypeGroupPicker = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
      emptyGuid = module.emptyGuid;
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
        ConfigurationValueKey["GroupRolePickerLabel"] = "groupAndRolePickerLabel";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupAndRoleFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupAndRoleFieldComponents')).ConfigurationComponent;
      }));

      var http = useHttp();
      var EditComponent = exports('EditComponent', defineComponent({
        name: "GroupAndRoleField.Edit",
        components: {
          DropDownList,
          RockLabel,
          GroupTypeGroupPicker
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref({});
          var group = ref({});
          var groupType = ref({});
          var groupRoleValue = ref("");
          var roleOptions = ref([]);
          var groupLabel = ref("");
          watch(() => props.modelValue, () => {
            var _props$configurationV;
            if (props.modelValue) {
              var _internalValue$value$, _internalValue$value$2;
              internalValue.value = JSON.parse(props.modelValue || "{}");
              group.value = internalValue.value.group;
              groupType.value = internalValue.value.groupType;
              groupRoleValue.value = (_internalValue$value$ = (_internalValue$value$2 = internalValue.value.groupRole) === null || _internalValue$value$2 === void 0 ? void 0 : _internalValue$value$2.value) !== null && _internalValue$value$ !== void 0 ? _internalValue$value$ : "";
              roleOptions.value = internalValue.value.groupTypeRoles;
            }
            groupLabel.value = (_props$configurationV = props.configurationValues[ConfigurationValueKey.GroupRolePickerLabel]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "Group";
          }, {
            immediate: true
          });
          watch(() => [group.value, groupType.value, groupRoleValue], () => {
            var newValue = {
              groupType: groupType.value,
              group: group.value,
              groupRole: {
                value: groupRoleValue.value
              },
              groupTypeRoles: roleOptions.value
            };
            emit("update:modelValue", JSON.stringify(newValue));
          }, {
            deep: true
          });
          watch(() => groupType.value, _asyncToGenerator(function* () {
            var _groupType$value;
            var groupTypeGuid = toGuidOrNull((_groupType$value = groupType.value) === null || _groupType$value === void 0 ? void 0 : _groupType$value.value);
            if (groupTypeGuid && !areEqual(groupTypeGuid, emptyGuid)) {
              var options = {
                groupTypeGuid
              };
              var result = yield http.post("/api/v2/Controls/GroupRolePickerGetGroupRoles", null, options);
              if (result.isSuccess && result.data) {
                var _result$data;
                roleOptions.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : [];
              } else {
                roleOptions.value = [];
              }
            } else {
              roleOptions.value = [];
            }
          }));
          return {
            group,
            groupType,
            groupRoleValue,
            roleOptions,
            groupLabel
          };
        },
        template: "\n    <div>\n        <RockLabel>Default Value</RockLabel>\n        <GroupTypeGroupPicker :groupLabel=\"groupLabel\" v-model=\"group\" v-model:groupType=\"groupType\" />\n        <DropDownList v-model=\"groupRoleValue\" label=\"Role\" :items=\"roleOptions\" :multiple=\"false\" />\n    </div>\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "GroupAndRoleField.Configuration",
        components: {
          TextBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfigurationValue"],
        setup(props, _ref3) {
          var emit = _ref3.emit;
          var groupAndRolePickerLabel = ref("");
          var maybeUpdateModelValue = () => {
            var _groupAndRolePickerLa;
            var newValue = {};
            newValue[ConfigurationValueKey.GroupRolePickerLabel] = (_groupAndRolePickerLa = groupAndRolePickerLabel.value) !== null && _groupAndRolePickerLa !== void 0 ? _groupAndRolePickerLa : "";
            var anyValueChanged = newValue[ConfigurationValueKey.GroupRolePickerLabel] !== props.modelValue[ConfigurationValueKey.GroupRolePickerLabel];
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
            var _props$modelValue$Con;
            groupAndRolePickerLabel.value = (_props$modelValue$Con = props.modelValue[ConfigurationValueKey.GroupRolePickerLabel]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "";
          }, {
            immediate: true
          });
          watch(groupAndRolePickerLabel, val => maybeUpdateConfiguration(ConfigurationValueKey.GroupRolePickerLabel, val !== null && val !== void 0 ? val : ""));
          return {
            groupAndRolePickerLabel
          };
        },
        template: "\n    <TextBox label=\"Group/Role Picker Label\" v-model=\"groupAndRolePickerLabel\" help=\"The label for the group/role picker.\" />\n    "
      }));

    })
  };
}));
//# sourceMappingURL=groupAndRoleFieldComponents.js.map
