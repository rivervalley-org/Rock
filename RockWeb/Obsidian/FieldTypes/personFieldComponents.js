System.register(['vue', './utils', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/personPicker.obs', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Utility/booleanUtils'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, CheckBox, PersonPicker, defineAsyncComponent, asBoolean, asTrueFalseOrNull;
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
      PersonPicker = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function (module) {
      asBoolean = module.asBoolean;
      asTrueFalseOrNull = module.asTrueFalseOrNull;
    }],
    execute: (function () {

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
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
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }

      var ConfigurationValueKey = function (ConfigurationValueKey) {
        ConfigurationValueKey["EnableSelfSelection"] = "EnableSelfSelection";
        ConfigurationValueKey["IncludeBusinesses"] = "includeBusinesses";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./personFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./personFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "Person.Edit",
        components: {
          PersonPicker
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref({});
          var includeBusinesses = computed(() => {
            var _props$configurationV;
            return asBoolean((_props$configurationV = props.configurationValues[ConfigurationValueKey.IncludeBusinesses]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "");
          });
          var enableSelfSelection = computed(() => asTrueFalseOrNull(props.configurationValues[ConfigurationValueKey.EnableSelfSelection]));
          watch(() => props.modelValue, () => {
            internalValue.value = JSON.parse(props.modelValue || "{}");
          }, {
            immediate: true
          });
          watch(() => internalValue.value, () => {
            emit("update:modelValue", JSON.stringify(internalValue.value));
          });
          return {
            internalValue,
            includeBusinesses,
            enableSelfSelection
          };
        },
        template: "\n<PersonPicker v-model=\"internalValue\" :includeBusinesses=\"includeBusinesses\" :enableSelfSelection=\"enableSelfSelection\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "Person.Configuration",
        components: {
          CheckBox
        },
        props: getFieldConfigurationProps(),
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var enableSelfSelection = ref(false);
          var includeBusinesses = ref(false);
          var maybeUpdateModelValue = () => {
            var _asTrueFalseOrNull, _asTrueFalseOrNull2, _props$modelValue$Con, _props$modelValue$Con2;
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.EnableSelfSelection] = (_asTrueFalseOrNull = asTrueFalseOrNull(enableSelfSelection.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
            newValue[ConfigurationValueKey.IncludeBusinesses] = (_asTrueFalseOrNull2 = asTrueFalseOrNull(includeBusinesses.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False";
            var anyValueChanged = newValue[ConfigurationValueKey.EnableSelfSelection] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.EnableSelfSelection]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "False") || newValue[ConfigurationValueKey.IncludeBusinesses] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.IncludeBusinesses]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "False");
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
            enableSelfSelection.value = asBoolean(props.modelValue[ConfigurationValueKey.EnableSelfSelection]);
            includeBusinesses.value = asBoolean(props.modelValue[ConfigurationValueKey.IncludeBusinesses]);
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(enableSelfSelection, () => {
            var _asTrueFalseOrNull3;
            return maybeUpdateConfiguration(ConfigurationValueKey.EnableSelfSelection, (_asTrueFalseOrNull3 = asTrueFalseOrNull(enableSelfSelection.value)) !== null && _asTrueFalseOrNull3 !== void 0 ? _asTrueFalseOrNull3 : "False");
          });
          watch(includeBusinesses, () => {
            var _asTrueFalseOrNull4;
            return maybeUpdateConfiguration(ConfigurationValueKey.IncludeBusinesses, (_asTrueFalseOrNull4 = asTrueFalseOrNull(includeBusinesses.value)) !== null && _asTrueFalseOrNull4 !== void 0 ? _asTrueFalseOrNull4 : "False");
          });
          return {
            enableSelfSelection,
            includeBusinesses
          };
        },
        template: "\n<div>\n    <CheckBox v-model=\"enableSelfSelection\" label=\"Enable Self Selection\"\n        help=\"When using Person Picker, show the self selection option\" />\n\n    <CheckBox v-model=\"includeBusinesses\" label=\"Include Businesses\"\n        help=\"When using Person Picker, include businesses in the search results\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=personFieldComponents.js.map
