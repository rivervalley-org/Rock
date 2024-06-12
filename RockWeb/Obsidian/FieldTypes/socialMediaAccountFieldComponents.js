System.register(['vue', './utils', '@Obsidian/Controls/urlLinkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/colorPicker.obs', '@Obsidian/Utility/component', './fieldType'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, watch, getFieldEditorProps, getFieldConfigurationProps, UrlLinkBox, TextBox, CodeEditor, ColorPicker, defineAsyncComponent;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
      getFieldConfigurationProps = module.getFieldConfigurationProps;
    }, function (module) {
      UrlLinkBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      ColorPicker = module["default"];
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
        ConfigurationValueKey["Name"] = "name";
        ConfigurationValueKey["IconCssClass"] = "iconcssclass";
        ConfigurationValueKey["Color"] = "color";
        ConfigurationValueKey["TextTemplate"] = "texttemplate";
        ConfigurationValueKey["BaseUrl"] = "baseurl";
        ConfigurationValueKey["BaseUrlAliases"] = "baseurlaliases";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./socialMediaAccountFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./socialMediaAccountFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "SocialMediaAccountField.Edit",
        components: {
          UrlLinkBox
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref("");
          watch(() => props.modelValue, () => {
            internalValue.value = props.modelValue || "";
          }, {
            immediate: true
          });
          watch(() => internalValue.value, () => {
            emit("update:modelValue", internalValue.value);
          });
          return {
            internalValue
          };
        },
        template: "\n    <UrlLinkBox label=\"URL\" v-model=\"internalValue\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "SocialMediaAccountField.Configuration",
        components: {
          TextBox,
          ColorPicker,
          CodeEditor,
          UrlLinkBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var name = ref("");
          var iconCssClass = ref("");
          var color = ref("");
          var textTemplate = ref("");
          var baseUrl = ref("");
          var baseUrlAliases = ref("");
          var maybeUpdateModelValue = () => {
            var _name$value, _iconCssClass$value, _color$value, _textTemplate$value, _baseUrl$value, _baseUrlAliases$value;
            var newValue = {};
            newValue[ConfigurationValueKey.Name] = (_name$value = name.value) !== null && _name$value !== void 0 ? _name$value : "";
            newValue[ConfigurationValueKey.IconCssClass] = (_iconCssClass$value = iconCssClass.value) !== null && _iconCssClass$value !== void 0 ? _iconCssClass$value : "";
            newValue[ConfigurationValueKey.Color] = (_color$value = color.value) !== null && _color$value !== void 0 ? _color$value : "";
            newValue[ConfigurationValueKey.TextTemplate] = (_textTemplate$value = textTemplate.value) !== null && _textTemplate$value !== void 0 ? _textTemplate$value : "";
            newValue[ConfigurationValueKey.BaseUrl] = (_baseUrl$value = baseUrl.value) !== null && _baseUrl$value !== void 0 ? _baseUrl$value : "";
            newValue[ConfigurationValueKey.BaseUrlAliases] = (_baseUrlAliases$value = baseUrlAliases.value) !== null && _baseUrlAliases$value !== void 0 ? _baseUrlAliases$value : "";
            var anyValueChanged = newValue[ConfigurationValueKey.Name] !== props.modelValue[ConfigurationValueKey.Name] || newValue[ConfigurationValueKey.IconCssClass] !== props.modelValue[ConfigurationValueKey.IconCssClass] || newValue[ConfigurationValueKey.Color] !== props.modelValue[ConfigurationValueKey.Color] || newValue[ConfigurationValueKey.TextTemplate] !== props.modelValue[ConfigurationValueKey.TextTemplate] || newValue[ConfigurationValueKey.BaseUrl] !== props.modelValue[ConfigurationValueKey.BaseUrl] || newValue[ConfigurationValueKey.BaseUrlAliases] !== props.modelValue[ConfigurationValueKey.BaseUrlAliases];
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
            var _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3, _props$modelValue$Con4, _props$modelValue$Con5, _props$modelValue$Con6;
            name.value = (_props$modelValue$Con = props.modelValue[ConfigurationValueKey.Name]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "";
            iconCssClass.value = (_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.IconCssClass]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "";
            color.value = (_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.Color]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "";
            textTemplate.value = (_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.TextTemplate]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "";
            baseUrl.value = (_props$modelValue$Con5 = props.modelValue[ConfigurationValueKey.BaseUrl]) !== null && _props$modelValue$Con5 !== void 0 ? _props$modelValue$Con5 : "";
            baseUrlAliases.value = (_props$modelValue$Con6 = props.modelValue[ConfigurationValueKey.BaseUrlAliases]) !== null && _props$modelValue$Con6 !== void 0 ? _props$modelValue$Con6 : "";
          }, {
            immediate: true
          });
          watch(name, val => maybeUpdateConfiguration(ConfigurationValueKey.Name, val !== null && val !== void 0 ? val : ""));
          watch(iconCssClass, val => maybeUpdateConfiguration(ConfigurationValueKey.IconCssClass, val !== null && val !== void 0 ? val : ""));
          watch(color, val => maybeUpdateConfiguration(ConfigurationValueKey.Color, val !== null && val !== void 0 ? val : ""));
          watch(textTemplate, val => maybeUpdateConfiguration(ConfigurationValueKey.TextTemplate, val !== null && val !== void 0 ? val : ""));
          watch(baseUrl, val => maybeUpdateConfiguration(ConfigurationValueKey.BaseUrl, val !== null && val !== void 0 ? val : ""));
          watch(baseUrlAliases, val => maybeUpdateConfiguration(ConfigurationValueKey.BaseUrlAliases, val !== null && val !== void 0 ? val : ""));
          return {
            name,
            iconCssClass,
            color,
            textTemplate,
            baseUrl,
            baseUrlAliases
          };
        },
        template: "\n    <TextBox label=\"Name\" v-model=\"name\" help=\"The name of the social media network.\" />\n    <TextBox label=\"Icon CSS Class\" v-model=\"iconCssClass\" help=\"The icon that represents the social media network.\" />\n    <ColorPicker label=\"Color\" v-model=\"color\" help=\"The color to use for making buttons for the social media network.\" />\n    <CodeEditor label=\"Text Template\" v-model=\"textTemplate\" theme=\"rock\" mode=\"text\" :editorHeight=\"200\" help=\"Lava template to use to create a formatted version for the link. Primarily used for making the link text.\" />\n    <UrlLinkBox label=\"Base URL\" v-model=\"baseUrl\" help=\"The base URL for the social media network. If the entry does not have a URL in it this base URL will be prepended to the entered string.\" />\n    <TextBox label=\"Base URL Aliases\" v-model=\"baseUrlAliases\" help=\"A comma-delimited list of URL prefixes that are considered valid aliases for the Base URL. If any of these values are detected in the input, they will be replaced by the Base URL.\" />\n    "
      }));

    })
  };
}));
//# sourceMappingURL=socialMediaAccountFieldComponents.js.map
