System.register(['vue', './utils', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/entityTypePicker.obs', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Utility/guid'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, watch, computed, getFieldEditorProps, getFieldConfigurationProps, CategoryPicker, TextBox, EntityTypePicker, defineAsyncComponent, toGuidOrNull;
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
      CategoryPicker = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      EntityTypePicker = module["default"];
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
        ConfigurationValueKey["EntityTypeName"] = "entityTypeName";
        ConfigurationValueKey["QualifierColumn"] = "qualifierColumn";
        ConfigurationValueKey["QualifierValue"] = "qualifierValue";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./categoryFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./categoryFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "CategoryField.Edit",
        components: {
          CategoryPicker
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
          watch(() => internalValue.value, () => {
            emit("update:modelValue", JSON.stringify(internalValue.value));
          });
          var entityTypeGuid = computed(() => {
            var _props$configurationV;
            var entityType = JSON.parse((_props$configurationV = props.configurationValues[ConfigurationValueKey.EntityTypeName]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "{}");
            return toGuidOrNull(entityType === null || entityType === void 0 ? void 0 : entityType.value);
          });
          return {
            internalValue,
            entityTypeGuid
          };
        },
        template: "\n    <CategoryPicker v-model=\"internalValue\" :entityTypeGuid=\"entityTypeGuid\" enhanceForLongLists showBlankItem/>\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "CategoryField.Configuration",
        components: {
          EntityTypePicker,
          TextBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var entityType = ref({});
          var qualifierColumn = ref("");
          var qualifierValue = ref("");
          var maybeUpdateModelValue = () => {
            var _entityType$value, _qualifierColumn$valu, _qualifierValue$value, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3;
            var newValue = {};
            newValue[ConfigurationValueKey.EntityTypeName] = JSON.stringify((_entityType$value = entityType.value) !== null && _entityType$value !== void 0 ? _entityType$value : "");
            newValue[ConfigurationValueKey.QualifierColumn] = (_qualifierColumn$valu = qualifierColumn.value) !== null && _qualifierColumn$valu !== void 0 ? _qualifierColumn$valu : "";
            newValue[ConfigurationValueKey.QualifierValue] = (_qualifierValue$value = qualifierValue.value) !== null && _qualifierValue$value !== void 0 ? _qualifierValue$value : "";
            var anyValueChanged = newValue[ConfigurationValueKey.EntityTypeName] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.EntityTypeName]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "") || newValue[ConfigurationValueKey.QualifierColumn] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.QualifierColumn]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "") || newValue[ConfigurationValueKey.QualifierValue] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.QualifierValue]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "");
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
            entityType.value = JSON.parse(props.modelValue[ConfigurationValueKey.EntityTypeName] || "{}");
            qualifierColumn.value = props.modelValue[ConfigurationValueKey.QualifierColumn] || "";
            qualifierValue.value = props.modelValue[ConfigurationValueKey.QualifierValue] || "";
          }, {
            immediate: true
          });
          watch(entityType, val => maybeUpdateConfiguration(ConfigurationValueKey.EntityTypeName, JSON.stringify(val !== null && val !== void 0 ? val : "")));
          watch(qualifierColumn, val => maybeUpdateConfiguration(ConfigurationValueKey.QualifierColumn, val !== null && val !== void 0 ? val : ""));
          watch(qualifierValue, val => maybeUpdateConfiguration(ConfigurationValueKey.QualifierValue, val !== null && val !== void 0 ? val : ""));
          return {
            qualifierColumn,
            qualifierValue,
            entityType
          };
        },
        template: "\n<div>\n    <EntityTypePicker label=\"Entity Type\" v-model=\"entityType\" help=\"The type of entity to display categories for.\" />\n    <TextBox v-model=\"qualifierColumn\" label=\"Qualifier Column\" help=\"Entity column qualifier.\"/>\n    <TextBox v-model=\"qualifierValue\" label=\"Qualifier Value\" text=\"Yes\" help=\"Entity column value.\" />\n</div>\n    "
      }));

    })
  };
}));
//# sourceMappingURL=categoryFieldComponents.js.map
