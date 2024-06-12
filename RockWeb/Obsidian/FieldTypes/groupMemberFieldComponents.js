System.register(['vue', './utils', '@Obsidian/Controls/groupPicker.obs', '@Obsidian/Controls/groupMemberPicker.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Utility/guid'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, watch, computed, getFieldEditorProps, getFieldConfigurationProps, GroupPicker, GroupMemberPicker, CheckBox, asBoolean, asTrueFalseOrNull, defineAsyncComponent, toGuidOrNull;
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
      GroupPicker = module["default"];
    }, function (module) {
      GroupMemberPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      asBoolean = module.asBoolean;
      asTrueFalseOrNull = module.asTrueFalseOrNull;
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
        ConfigurationValueKey["AllowMultipleValues"] = "allowmultiple";
        ConfigurationValueKey["EnhanceForLongLists"] = "enhancedselection";
        ConfigurationValueKey["Group"] = "group";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupMemberFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupMemberFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "GroupMemberField.Edit",
        components: {
          GroupMemberPicker
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref({});
          watch(() => props.modelValue, () => {
            internalValue.value = JSON.parse(props.modelValue || "{}");
          }, {
            immediate: true
          });
          var groupGuid = computed(() => {
            var groupListItemBag = JSON.parse(props.configurationValues[ConfigurationValueKey.Group] || "{}");
            return toGuidOrNull(groupListItemBag === null || groupListItemBag === void 0 ? void 0 : groupListItemBag.value);
          });
          var allowMultipleValues = computed(() => {
            return asBoolean(props.configurationValues[ConfigurationValueKey.AllowMultipleValues]);
          });
          var enhanceForLongLists = computed(() => {
            return asBoolean(props.configurationValues[ConfigurationValueKey.EnhanceForLongLists]);
          });
          watch(() => internalValue.value, () => {
            emit("update:modelValue", JSON.stringify(internalValue.value));
          });
          return {
            internalValue,
            groupGuid,
            allowMultipleValues,
            enhanceForLongLists
          };
        },
        template: "\n    <GroupMemberPicker v-model=\"internalValue\"\n        :groupGuid=\"groupGuid\"\n        :multiple=\"allowMultipleValues\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        showBlankItem=\"true\"/>\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "GroupMemberField.Configuration",
        components: {
          CheckBox,
          GroupPicker
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var allowMultipleValues = ref(false);
          var enhanceForLongLists = ref(false);
          var group = ref({});
          var maybeUpdateModelValue = () => {
            var _asTrueFalseOrNull, _asTrueFalseOrNull2, _group$value, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3;
            var newValue = {};
            newValue[ConfigurationValueKey.AllowMultipleValues] = (_asTrueFalseOrNull = asTrueFalseOrNull(allowMultipleValues.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
            newValue[ConfigurationValueKey.EnhanceForLongLists] = (_asTrueFalseOrNull2 = asTrueFalseOrNull(enhanceForLongLists.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False";
            newValue[ConfigurationValueKey.Group] = JSON.stringify((_group$value = group.value) !== null && _group$value !== void 0 ? _group$value : "");
            var anyValueChanged = newValue[ConfigurationValueKey.AllowMultipleValues] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.AllowMultipleValues]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "False") || newValue[ConfigurationValueKey.EnhanceForLongLists] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.EnhanceForLongLists]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "False") || newValue[ConfigurationValueKey.Group] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.Group]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "");
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
            allowMultipleValues.value = asBoolean(props.modelValue[ConfigurationValueKey.AllowMultipleValues]);
            enhanceForLongLists.value = asBoolean(props.modelValue[ConfigurationValueKey.EnhanceForLongLists]);
            group.value = JSON.parse(props.modelValue[ConfigurationValueKey.Group] || "{}");
          }, {
            immediate: true
          });
          watch(allowMultipleValues, val => {
            var _asTrueFalseOrNull3;
            return maybeUpdateConfiguration(ConfigurationValueKey.AllowMultipleValues, (_asTrueFalseOrNull3 = asTrueFalseOrNull(val)) !== null && _asTrueFalseOrNull3 !== void 0 ? _asTrueFalseOrNull3 : "False");
          });
          watch(enhanceForLongLists, val => {
            var _asTrueFalseOrNull4;
            return maybeUpdateConfiguration(ConfigurationValueKey.EnhanceForLongLists, (_asTrueFalseOrNull4 = asTrueFalseOrNull(val)) !== null && _asTrueFalseOrNull4 !== void 0 ? _asTrueFalseOrNull4 : "False");
          });
          watch(group, val => maybeUpdateConfiguration(ConfigurationValueKey.Group, JSON.stringify(val !== null && val !== void 0 ? val : "")));
          return {
            allowMultipleValues,
            enhanceForLongLists,
            group
          };
        },
        template: "\n<div>\n    <GroupPicker v-model=\"group\" label=\"Group\" help=\"The group to select the member(s) from.\"/>\n    <CheckBox v-model=\"allowMultipleValues\" label=\"Allow Multiple Values\" text=\"Yes\" help=\"When set, allows multiple group members to be selected.\" />\n    <CheckBox v-model=\"enhanceForLongLists\" label=\"Enhance For Long Lists\" text=\"Yes\" help=\"When set, will render a searchable selection of options.\" />\n</div>\n    "
      }));

    })
  };
}));
//# sourceMappingURL=groupMemberFieldComponents.js.map
