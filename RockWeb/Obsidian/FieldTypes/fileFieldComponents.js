System.register(['vue', './utils', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/fileUploader', '@Obsidian/Utility/component', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Utility/stringUtils', './fieldType'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, DropDownList, FileUploader, defineAsyncComponent, updateRefValue;
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
      DropDownList = module["default"];
    }, function (module) {
      FileUploader = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      updateRefValue = module.updateRefValue;
    }, function () {}, function () {}, function () {}],
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

      var ConfigurationPropertyKey = function (ConfigurationPropertyKey) {
        ConfigurationPropertyKey["BinaryFileTypes"] = "binaryFileTypes";
        return ConfigurationPropertyKey;
      }({});
      var ConfigurationValueKey = function (ConfigurationValueKey) {
        ConfigurationValueKey["BinaryFileType"] = "binaryFileType";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./fileFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./fileFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "FileField.Edit",
        components: {
          FileUploader
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref(null);
          var binaryFileType = computed(() => {
            var _props$configurationV;
            return (_props$configurationV = props.configurationValues[ConfigurationValueKey.BinaryFileType]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "";
          });
          watch(() => props.modelValue, () => {
            try {
              var _props$modelValue;
              updateRefValue(internalValue, JSON.parse((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : ""));
            } catch (_unused) {
              internalValue.value = null;
            }
          }, {
            immediate: true
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value ? JSON.stringify(internalValue.value) : "");
          });
          return {
            binaryFileType,
            internalValue
          };
        },
        template: "\n<FileUploader v-model=\"internalValue\" :binaryFileTypeGuid=\"binaryFileType\" uploadAsTemporary />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "FileField.Configuration",
        components: {
          DropDownList
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var fileType = ref("");
          var fileTypeOptions = computed(() => {
            try {
              var _props$configurationP;
              return JSON.parse((_props$configurationP = props.configurationProperties[ConfigurationPropertyKey.BinaryFileTypes]) !== null && _props$configurationP !== void 0 ? _props$configurationP : "[]");
            } catch (_unused2) {
              return [];
            }
          });
          var maybeUpdateModelValue = () => {
            var _fileType$value, _props$modelValue$Con;
            var newValue = {};
            newValue[ConfigurationValueKey.BinaryFileType] = (_fileType$value = fileType.value) !== null && _fileType$value !== void 0 ? _fileType$value : "";
            var anyValueChanged = newValue[ConfigurationValueKey.BinaryFileType] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.BinaryFileType]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "");
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
            fileType.value = props.modelValue[ConfigurationValueKey.BinaryFileType];
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(fileType, () => {
            var _fileType$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.BinaryFileType, (_fileType$value2 = fileType.value) !== null && _fileType$value2 !== void 0 ? _fileType$value2 : "");
          });
          return {
            fileType,
            fileTypeOptions
          };
        },
        template: "\n<div>\n    <DropDownList v-model=\"fileType\"\n        label=\"File Type\"\n        help=\"File type to use to store and retrieve the file. New file types can be configured under 'Admins Tools &gt; General Settings &gt; File Types'.\"\n        :items=\"fileTypeOptions\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=fileFieldComponents.js.map
