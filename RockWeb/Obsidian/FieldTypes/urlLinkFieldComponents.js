System.register(['vue', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Utility/component', '@Obsidian/Controls/urlLinkBox.obs', '@Obsidian/Utility/booleanUtils', '@Obsidian/Core/Reporting/comparisonType', './fieldType', '@Obsidian/Utility/stringUtils', './utils'], (function (exports, module) {
  'use strict';
  var defineComponent, computed, ref, watch, CheckBox, defineAsyncComponent, useVModelPassthrough, UrlLinkBox, asBooleanOrNull, asBoolean, asTrueFalseOrNull, getFieldEditorProps, getFieldConfigurationProps;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      UrlLinkBox = module["default"];
    }, function (module) {
      asBooleanOrNull = module.asBooleanOrNull;
      asBoolean = module.asBoolean;
      asTrueFalseOrNull = module.asTrueFalseOrNull;
    }, function () {}, function () {}, function () {}, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
      getFieldConfigurationProps = module.getFieldConfigurationProps;
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
        ConfigurationValueKey["ShouldRequireTrailingForwardSlash"] = "ShouldRequireTrailingForwardSlash";
        ConfigurationValueKey["ShouldAlwaysShowCondensed"] = "ShouldAlwaysShowCondensed";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./urlLinkFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./urlLinkFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "UrlLinkField.Edit",
        components: {
          UrlLinkBox
        },
        props: getFieldEditorProps(),
        emits: ["update:modelValue"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var value = useVModelPassthrough(props, "modelValue", emit);
          var requiresTrailingSlash = computed(() => {
            var _asBooleanOrNull;
            return (_asBooleanOrNull = asBooleanOrNull(props.configurationValues.ShouldRequireTrailingForwardSlash)) !== null && _asBooleanOrNull !== void 0 ? _asBooleanOrNull : false;
          });
          return {
            value,
            requiresTrailingSlash
          };
        },
        template: "\n<UrlLinkBox v-model=\"value\" :requires-trailing-slash=\"requiresTrailingSlash\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "UrlLinkField.Configuration",
        components: {
          CheckBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var shouldRequireTrailingForwardSlash = ref(false);
          var shouldAlwaysShowCondensed = ref(false);
          var maybeUpdateModelValue = () => {
            var _asTrueFalseOrNull, _asTrueFalseOrNull2, _props$modelValue$Con, _props$modelValue$Con2;
            var newValue = {};
            newValue[ConfigurationValueKey.ShouldAlwaysShowCondensed] = (_asTrueFalseOrNull = asTrueFalseOrNull(shouldAlwaysShowCondensed.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
            newValue[ConfigurationValueKey.ShouldRequireTrailingForwardSlash] = (_asTrueFalseOrNull2 = asTrueFalseOrNull(shouldRequireTrailingForwardSlash.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False";
            var anyValueChanged = newValue[ConfigurationValueKey.ShouldAlwaysShowCondensed] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.ShouldAlwaysShowCondensed]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "False") || newValue[ConfigurationValueKey.ShouldRequireTrailingForwardSlash] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.ShouldRequireTrailingForwardSlash]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "False");
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
            shouldRequireTrailingForwardSlash.value = asBoolean(props.modelValue[ConfigurationValueKey.ShouldRequireTrailingForwardSlash]);
            shouldAlwaysShowCondensed.value = asBoolean(props.modelValue[ConfigurationValueKey.ShouldAlwaysShowCondensed]);
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(shouldRequireTrailingForwardSlash, () => {
            var _asTrueFalseOrNull3;
            return maybeUpdateConfiguration(ConfigurationValueKey.ShouldRequireTrailingForwardSlash, (_asTrueFalseOrNull3 = asTrueFalseOrNull(shouldRequireTrailingForwardSlash.value)) !== null && _asTrueFalseOrNull3 !== void 0 ? _asTrueFalseOrNull3 : "False");
          });
          watch(shouldAlwaysShowCondensed, () => {
            var _asTrueFalseOrNull4;
            return maybeUpdateConfiguration(ConfigurationValueKey.ShouldAlwaysShowCondensed, (_asTrueFalseOrNull4 = asTrueFalseOrNull(shouldAlwaysShowCondensed.value)) !== null && _asTrueFalseOrNull4 !== void 0 ? _asTrueFalseOrNull4 : "False");
          });
          return {
            shouldRequireTrailingForwardSlash,
            shouldAlwaysShowCondensed
          };
        },
        template: "\n<div>\n    <CheckBox v-model=\"shouldRequireTrailingForwardSlash\" label=\"Ensure Trailing Forward Slash\" text=\"Yes\" help=\"When set, the URL must end with a forward slash (/) to be valid.\" />\n    <CheckBox v-model=\"shouldAlwaysShowCondensed\" label=\"Should always Show Condensed\" text=\"Yes\" help=\"When set, the URL will always be returned as a raw value.\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=urlLinkFieldComponents.js.map
