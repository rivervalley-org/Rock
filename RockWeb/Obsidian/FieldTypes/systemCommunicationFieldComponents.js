System.register(['vue', './utils', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Utility/component', '@Obsidian/Enums/Reporting/comparisonType', './fieldType', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Utility/booleanUtils'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, DropDownList, defineAsyncComponent, CheckBox, asBoolean, asTrueFalseOrNull;
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
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function () {}, function (module) {
      CheckBox = module["default"];
    }, function (module) {
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
        ConfigurationValueKey["ClientValues"] = "values";
        ConfigurationValueKey["IncludeInactive"] = "includeInactive";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./systemCommunicationFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./systemCommunicationFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "SystemCommunication.Edit",
        components: {
          DropDownList
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref("");
          var options = computed(() => {
            var options = JSON.parse(props.configurationValues[ConfigurationValueKey.ClientValues] || "[]");
            return options;
          });
          watch(() => props.modelValue, () => {
            internalValue.value = props.modelValue;
          }, {
            immediate: true
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          return {
            internalValue,
            options
          };
        },
        template: "\n    <DropDownList v-model=\"internalValue\" :items=\"options\" :showBlankItem=\"true\" :enhanceForLongLists=\"true\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "SystemCommunicationField.Configuration",
        components: {
          CheckBox
        },
        props: getFieldConfigurationProps(),
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var includeInactive = ref(false);
          var maybeUpdateModelValue = () => {
            var _asTrueFalseOrNull;
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.IncludeInactive] = (_asTrueFalseOrNull = asTrueFalseOrNull(includeInactive.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
            var anyValueChanged = newValue[ConfigurationValueKey.IncludeInactive] !== props.modelValue[ConfigurationValueKey.IncludeInactive];
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
            includeInactive.value = asBoolean(props.modelValue[ConfigurationValueKey.IncludeInactive]);
          }, {
            immediate: true
          });
          watch([includeInactive], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(includeInactive, () => {
            var _asTrueFalseOrNull2;
            return maybeUpdateConfiguration(ConfigurationValueKey.IncludeInactive, (_asTrueFalseOrNull2 = asTrueFalseOrNull(includeInactive.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False");
          });
          return {
            includeInactive
          };
        },
        template: "\n    <div>\n    <CheckBox v-model=\"includeInactive\"\n        label=\"Include Inactive\"\n        help=\"When set, inactive system communications will be included in the list.\" />\n</div>\n    "
      }));

    })
  };
}));
//# sourceMappingURL=systemCommunicationFieldComponents.js.map
