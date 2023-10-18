System.register(['vue', './utils', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/imageUploader', '@Obsidian/Utility/component', '@Obsidian/Enums/Reporting/comparisonType', './fieldType', '@Obsidian/Utility/booleanUtils'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, CheckBox, DropDownList, ImageUploader, defineAsyncComponent, updateRefValue, asBooleanOrNull, asTrueFalseOrNull;
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
      DropDownList = module["default"];
    }, function (module) {
      ImageUploader = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      updateRefValue = module.updateRefValue;
    }, function () {}, function () {}, function (module) {
      asBooleanOrNull = module.asBooleanOrNull;
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

      var ConfigurationPropertyKey = function (ConfigurationPropertyKey) {
        ConfigurationPropertyKey["BinaryFileTypes"] = "binaryFileTypes";
        return ConfigurationPropertyKey;
      }({});
      var ConfigurationValueKey = function (ConfigurationValueKey) {
        ConfigurationValueKey["BinaryFileType"] = "binaryFileType";
        ConfigurationValueKey["FormatAsLink"] = "formatAsLink";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./imageFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./imageFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "ImageField.Edit",
        components: {
          ImageUploader
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
        template: "\n<ImageUploader v-model=\"internalValue\" :binaryFileTypeGuid=\"binaryFileType\" uploadAsTemporary />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "ImageField.Configuration",
        components: {
          CheckBox,
          DropDownList
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var fileType = ref("");
          var formatAsLink = ref(false);
          var fileTypeOptions = computed(() => {
            try {
              var _props$configurationP;
              return JSON.parse((_props$configurationP = props.configurationProperties[ConfigurationPropertyKey.BinaryFileTypes]) !== null && _props$configurationP !== void 0 ? _props$configurationP : "[]");
            } catch (_unused2) {
              return [];
            }
          });
          var maybeUpdateModelValue = () => {
            var _fileType$value, _asTrueFalseOrNull, _props$modelValue$Con, _props$modelValue$Con2;
            var newValue = {};
            newValue[ConfigurationValueKey.BinaryFileType] = (_fileType$value = fileType.value) !== null && _fileType$value !== void 0 ? _fileType$value : "";
            newValue[ConfigurationValueKey.FormatAsLink] = (_asTrueFalseOrNull = asTrueFalseOrNull(formatAsLink.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
            var anyValueChanged = newValue[ConfigurationValueKey.BinaryFileType] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.BinaryFileType]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "") || newValue[ConfigurationValueKey.FormatAsLink] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.FormatAsLink]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "False");
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
            var _asBooleanOrNull;
            fileType.value = props.modelValue[ConfigurationValueKey.BinaryFileType];
            formatAsLink.value = (_asBooleanOrNull = asBooleanOrNull(props.modelValue[ConfigurationValueKey.FormatAsLink])) !== null && _asBooleanOrNull !== void 0 ? _asBooleanOrNull : false;
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
          watch(formatAsLink, () => {
            var _asTrueFalseOrNull2;
            return maybeUpdateConfiguration(ConfigurationValueKey.FormatAsLink, (_asTrueFalseOrNull2 = asTrueFalseOrNull(formatAsLink.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False");
          });
          return {
            fileType,
            fileTypeOptions,
            formatAsLink
          };
        },
        template: "\n<div>\n    <DropDownList v-model=\"fileType\"\n        label=\"File Type\"\n        help=\"File type to use to store and retrieve the file. New file types can be configured under 'Admins Tools &gt; General Settings &gt; File Types'.\"\n        :items=\"fileTypeOptions\" />\n\n    <CheckBox v-model=\"formatAsLink\"\n        label=\"Format as Link\"\n        help=\"Enable this to navigate to a full size image when the image is clicked.\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=imageFieldComponents.js.map
