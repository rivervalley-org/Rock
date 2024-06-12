System.register(['vue', './utils', '@Obsidian/Controls/binaryFileTypePicker.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/fileUploader.obs', '@Obsidian/Controls/componentPicker.obs', '@Obsidian/Utility/component', './fieldType', '@Obsidian/SystemGuids/entityType'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, BinaryFileTypePicker, TextBox, FileUploader, ComponentPicker, defineAsyncComponent, EntityType;
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
      BinaryFileTypePicker = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      FileUploader = module["default"];
    }, function (module) {
      ComponentPicker = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function (module) {
      EntityType = module.EntityType;
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
        ConfigurationValueKey["BinaryFileType"] = "binaryFileType";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./backgroundCheckFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./backgroundCheckFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "BackgroundCheckField.Edit",
        components: {
          TextBox,
          FileUploader,
          ComponentPicker
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var fileValue = ref({});
          var entityType = ref({});
          var textValue = ref("");
          var isFile = computed(() => {
            var entityTypeValue = entityType.value.value;
            return (entityTypeValue === null || entityTypeValue === void 0 ? void 0 : entityTypeValue.toLowerCase()) == EntityType.ProtectMyMinistryProvider.toLowerCase();
          });
          watch(() => props.modelValue, () => {
            var splitValues = props.modelValue.split(",");
            entityType.value = {
              text: splitValues[1],
              value: splitValues[0]
            };
            if (isFile.value) {
              fileValue.value = {
                text: splitValues[3],
                value: splitValues[2]
              };
            } else {
              textValue.value = splitValues[2];
            }
          }, {
            immediate: true
          });
          watch(() => fileValue.value, () => {
            var _fileValue$value$valu, _fileValue$value, _fileValue$value$text, _fileValue$value2;
            emit("update:modelValue", "".concat(entityType.value.value, ",").concat(entityType.value.text, ",").concat((_fileValue$value$valu = (_fileValue$value = fileValue.value) === null || _fileValue$value === void 0 ? void 0 : _fileValue$value.value) !== null && _fileValue$value$valu !== void 0 ? _fileValue$value$valu : "", ",").concat((_fileValue$value$text = (_fileValue$value2 = fileValue.value) === null || _fileValue$value2 === void 0 ? void 0 : _fileValue$value2.text) !== null && _fileValue$value$text !== void 0 ? _fileValue$value$text : ""));
          }, {
            deep: true
          });
          watch(() => textValue.value, () => {
            var _textValue$value;
            emit("update:modelValue", "".concat(entityType.value.value, ",").concat(entityType.value.text, ",").concat((_textValue$value = textValue.value) !== null && _textValue$value !== void 0 ? _textValue$value : ""));
          });
          watch(() => entityType.value, () => {
            var _entityType$value, _entityType$value$val;
            if (((_entityType$value = entityType.value) === null || _entityType$value === void 0 ? void 0 : (_entityType$value$val = _entityType$value.value) === null || _entityType$value$val === void 0 ? void 0 : _entityType$value$val.toLowerCase()) == EntityType.ProtectMyMinistryProvider.toLowerCase()) {
              var _fileValue$value$valu2, _fileValue$value3, _fileValue$value$text2, _fileValue$value4;
              emit("update:modelValue", "".concat(entityType.value.value, ",").concat(entityType.value.text, ",").concat((_fileValue$value$valu2 = (_fileValue$value3 = fileValue.value) === null || _fileValue$value3 === void 0 ? void 0 : _fileValue$value3.value) !== null && _fileValue$value$valu2 !== void 0 ? _fileValue$value$valu2 : "", ",").concat((_fileValue$value$text2 = (_fileValue$value4 = fileValue.value) === null || _fileValue$value4 === void 0 ? void 0 : _fileValue$value4.text) !== null && _fileValue$value$text2 !== void 0 ? _fileValue$value$text2 : ""));
            } else {
              var _textValue$value2;
              emit("update:modelValue", "".concat(entityType.value.value, ",").concat(entityType.value.text, ",").concat((_textValue$value2 = textValue.value) !== null && _textValue$value2 !== void 0 ? _textValue$value2 : ""));
            }
          });
          return {
            fileValue,
            entityType,
            isFile,
            textValue
          };
        },
        template: "\n    <ComponentPicker label=\"Component\" v-model=\"entityType\" containerType=\"Rock.Security.BackgroundCheckContainer\" showBlankItem />\n    <div v-if=\"entityType?.value\">\n        <FileUploader v-if=\"isFile\"\n            v-model=\"fileValue\"\n            uploadAsTemporary=\"true\"\n            uploadButtonText=\"Upload\"\n            showDeleteButton=\"true\" />\n        <TextBox v-else\n            v-model=\"textValue\"\n            label=\"RecordKey\"\n            help=\"Unique key for the background check report.\"\n            textMode=\"MultiLine\" />\n    </div>\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "BackgroundCheckField.Configuration",
        components: {
          BinaryFileTypePicker
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var binaryFileType = ref({});
          var maybeUpdateModelValue = () => {
            var _binaryFileType$value, _props$modelValue$Con;
            var newValue = {};
            newValue[ConfigurationValueKey.BinaryFileType] = JSON.stringify((_binaryFileType$value = binaryFileType.value) !== null && _binaryFileType$value !== void 0 ? _binaryFileType$value : "");
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
            binaryFileType.value = JSON.parse(props.modelValue[ConfigurationValueKey.BinaryFileType] || "{}");
          }, {
            immediate: true
          });
          watch(binaryFileType, val => maybeUpdateConfiguration(ConfigurationValueKey.BinaryFileType, JSON.stringify(val !== null && val !== void 0 ? val : "")));
          return {
            binaryFileType
          };
        },
        template: "\n    <BinaryFileTypePicker label=\"File Type\" v-model=\"binaryFileType\" help=\"File type to use to store and retrieve the file. New file types can be configured under 'Admin Tools > General Settings > File Types'\" />\n    "
      }));

    })
  };
}));
//# sourceMappingURL=backgroundCheckFieldComponents.js.map
