System.register(['vue', './utils', '@Obsidian/Controls/accountPicker.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Utility/booleanUtils'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, AccountPicker, CheckBox, defineAsyncComponent, asBoolean, asTrueFalseOrNull;
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
      AccountPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
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
        ConfigurationValueKey["DisplayPublicName"] = "displaypublicname";
        ConfigurationValueKey["DisplayChildItemCounts"] = "displaychilditemcounts";
        ConfigurationValueKey["DisplayActiveItemsOnly"] = "displayactiveitemsonly";
        ConfigurationValueKey["EnhancedForLongLists"] = "enhancedforlonglists";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./financialAccountFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./financialAccountFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "FinancialAccountsField.Edit",
        components: {
          AccountPicker
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref({});
          var displayPublicName = computed(() => asBoolean(props.configurationValues[ConfigurationValueKey.DisplayPublicName]));
          var displayChildItemCounts = computed(() => asBoolean(props.configurationValues[ConfigurationValueKey.DisplayChildItemCounts]));
          var displayActiveItemsOnly = computed(() => asBoolean(props.configurationValues[ConfigurationValueKey.DisplayActiveItemsOnly]));
          var enhancedForLongLists = computed(() => asBoolean(props.configurationValues[ConfigurationValueKey.EnhancedForLongLists]));
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
            displayPublicName,
            displayChildItemCounts,
            displayActiveItemsOnly,
            enhancedForLongLists
          };
        },
        template: "\n<AccountPicker v-model=\"internalValue\" multiple=\"true\" :displayPublicName=\"displayPublicName\" :activeOnly=\"displayActiveItemsOnly\" :displayChildItemCountLabel=\"displayChildItemCounts\" :enhanceForLongLists=\"enhancedForLongLists\"  />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "FinancialAccountField.Configuration",
        components: {
          CheckBox
        },
        props: getFieldConfigurationProps(),
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var displayPublicName = ref(true);
          var displayChildItemCounts = ref(false);
          var displayActiveItemsOnly = ref(false);
          var enhanceForLongLists = ref(true);
          var maybeUpdateModelValue = () => {
            var _asTrueFalseOrNull, _asTrueFalseOrNull2, _asTrueFalseOrNull3, _asTrueFalseOrNull4, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3, _props$modelValue$Con4;
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.DisplayPublicName] = (_asTrueFalseOrNull = asTrueFalseOrNull(displayPublicName.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "True";
            newValue[ConfigurationValueKey.DisplayChildItemCounts] = (_asTrueFalseOrNull2 = asTrueFalseOrNull(displayChildItemCounts.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False";
            newValue[ConfigurationValueKey.DisplayActiveItemsOnly] = (_asTrueFalseOrNull3 = asTrueFalseOrNull(displayActiveItemsOnly.value)) !== null && _asTrueFalseOrNull3 !== void 0 ? _asTrueFalseOrNull3 : "False";
            newValue[ConfigurationValueKey.EnhancedForLongLists] = (_asTrueFalseOrNull4 = asTrueFalseOrNull(enhanceForLongLists.value)) !== null && _asTrueFalseOrNull4 !== void 0 ? _asTrueFalseOrNull4 : "True";
            var anyValueChanged = newValue[ConfigurationValueKey.DisplayPublicName] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.DisplayPublicName]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "True") || newValue[ConfigurationValueKey.DisplayChildItemCounts] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.DisplayChildItemCounts]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "False") || newValue[ConfigurationValueKey.DisplayActiveItemsOnly] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.DisplayActiveItemsOnly]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "False") || newValue[ConfigurationValueKey.EnhancedForLongLists] !== ((_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.EnhancedForLongLists]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "True");
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
            displayPublicName.value = asBoolean(props.modelValue[ConfigurationValueKey.DisplayPublicName]);
            displayChildItemCounts.value = asBoolean(props.modelValue[ConfigurationValueKey.DisplayChildItemCounts]);
            displayActiveItemsOnly.value = asBoolean(props.modelValue[ConfigurationValueKey.DisplayActiveItemsOnly]);
            enhanceForLongLists.value = asBoolean(props.modelValue[ConfigurationValueKey.EnhancedForLongLists]);
          }, {
            immediate: true
          });
          watch([displayPublicName, displayChildItemCounts, displayActiveItemsOnly, enhanceForLongLists], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(displayPublicName, () => {
            var _asTrueFalseOrNull5;
            return maybeUpdateConfiguration(ConfigurationValueKey.DisplayPublicName, (_asTrueFalseOrNull5 = asTrueFalseOrNull(displayPublicName.value)) !== null && _asTrueFalseOrNull5 !== void 0 ? _asTrueFalseOrNull5 : "True");
          });
          watch(displayChildItemCounts, () => {
            var _asTrueFalseOrNull6;
            return maybeUpdateConfiguration(ConfigurationValueKey.DisplayChildItemCounts, (_asTrueFalseOrNull6 = asTrueFalseOrNull(displayChildItemCounts.value)) !== null && _asTrueFalseOrNull6 !== void 0 ? _asTrueFalseOrNull6 : "False");
          });
          watch(displayActiveItemsOnly, () => {
            var _asTrueFalseOrNull7;
            return maybeUpdateConfiguration(ConfigurationValueKey.DisplayActiveItemsOnly, (_asTrueFalseOrNull7 = asTrueFalseOrNull(displayActiveItemsOnly.value)) !== null && _asTrueFalseOrNull7 !== void 0 ? _asTrueFalseOrNull7 : "False");
          });
          watch(enhanceForLongLists, () => {
            var _asTrueFalseOrNull8;
            return maybeUpdateConfiguration(ConfigurationValueKey.EnhancedForLongLists, (_asTrueFalseOrNull8 = asTrueFalseOrNull(enhanceForLongLists.value)) !== null && _asTrueFalseOrNull8 !== void 0 ? _asTrueFalseOrNull8 : "True");
          });
          return {
            displayPublicName,
            displayChildItemCounts,
            displayActiveItemsOnly,
            enhanceForLongLists
          };
        },
        template: "\n<div>\n    <CheckBox v-model=\"displayPublicName\" label=\"Display Public Name\" text=\"Yes\" help=\"When set, public name will be displayed.\" />\n    <CheckBox v-model=\"displayChildItemCounts\" label=\"Display Child Item Counts\" text=\"Yes\" help=\"When set, child item counts will be displayed.\" />\n    <CheckBox v-model=\"displayActiveItemsOnly\" label=\"Display Active Items Only\" text=\"Yes\" help=\"When set, only active item will be displayed.\" />\n    <CheckBox v-model=\"enhanceForLongLists\" label=\"Enhance For Long Lists\" text=\"Yes\" help=\"When set, allows a searching for items.\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=financialAccountsFieldComponents.js.map
