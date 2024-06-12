System.register(['vue', './utils', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Utility/component', './fieldType'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, DefinedValuePicker, DropDownList, defineAsyncComponent;
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
      DefinedValuePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}],
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
        ConfigurationValueKey["GroupTypePurposeValueGuid"] = "groupTypePurposeValueGuid";
        ConfigurationValueKey["GroupTypePurposes"] = "groupTypePurposes";
        ConfigurationValueKey["Values"] = "values";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupTypeFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupTypeFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "GroupTypeField.Edit",
        components: {
          DropDownList
        },
        props: getFieldEditorProps(),
        data() {
          var _this$modelValue;
          return {
            internalValue: (_this$modelValue = this.modelValue) !== null && _this$modelValue !== void 0 ? _this$modelValue : ""
          };
        },
        computed: {
          options() {
            try {
              var _this$configurationVa;
              return JSON.parse((_this$configurationVa = this.configurationValues[ConfigurationValueKey.Values]) !== null && _this$configurationVa !== void 0 ? _this$configurationVa : "[]");
            } catch (_unused) {
              return [];
            }
          }
        },
        watch: {
          internalValue() {
            this.$emit("update:modelValue", this.internalValue);
          }
        },
        template: "\n<DropDownList v-model=\"internalValue\" :items=\"options\" enhanceForLongLists />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "GroupTypeField.Configuration",
        components: {
          DefinedValuePicker,
          DropDownList
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var groupTypePurposeValueGuid = ref(props.modelValue[ConfigurationValueKey.GroupTypePurposeValueGuid]);
          var maybeUpdateModelValue = () => {
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.GroupTypePurposeValueGuid] = groupTypePurposeValueGuid.value;
            var anyValueChanged = newValue[ConfigurationValueKey.GroupTypePurposeValueGuid] !== props.modelValue[ConfigurationValueKey.GroupTypePurposeValueGuid];
            if (anyValueChanged) {
              emit("update:modelValue", newValue);
              return true;
            } else {
              return false;
            }
          };
          var options = computed(() => {
            try {
              var _props$modelValue$Con;
              return JSON.parse((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.GroupTypePurposes]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "[]");
            } catch (_unused2) {
              return [];
            }
          });
          var internalValue = computed(() => props.modelValue.value);
          var maybeUpdateConfiguration = (key, value) => {
            if (maybeUpdateModelValue()) {
              emit("updateConfigurationValue", key, value);
              emit("updateConfiguration");
            }
          };
          watch(groupTypePurposeValueGuid, () => maybeUpdateConfiguration(ConfigurationValueKey.GroupTypePurposeValueGuid, groupTypePurposeValueGuid.value));
          return {
            groupTypePurposeValueGuid,
            options,
            internalValue
          };
        },
        template: "\n<div>\n    <DropDownList v-model=\"groupTypePurposeValueGuid\" label=\"Purpose\" :items=\"options\" help=\"An optional setting to limit the selection of group types to those that have the selected purpose.\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=groupTypeFieldComponents.js.map
