System.register(['vue', './utils', '@Obsidian/Controls/locationPicker.obs', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Utility/component', './fieldType'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, LocationPicker, CheckBoxList, RadioButtonList, defineAsyncComponent;
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
      LocationPicker = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
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
        ConfigurationValueKey["AllowedPickerModes"] = "allowedPickerModes";
        ConfigurationValueKey["CurrentPickerMode"] = "currentPickerMode";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./locationFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./locationFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "LocationField.Edit",
        components: {
          LocationPicker
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref(null);
          var selectedAsNumber = computed(() => {
            var _props$configurationV, _props$configurationV2;
            var allowedPickerModes = ((_props$configurationV = (_props$configurationV2 = props.configurationValues[ConfigurationValueKey.AllowedPickerModes]) === null || _props$configurationV2 === void 0 ? void 0 : _props$configurationV2.split(",")) !== null && _props$configurationV !== void 0 ? _props$configurationV : []).filter(s => s !== "");
            if (allowedPickerModes.length === 0) {
              return undefined;
            }
            return allowedPickerModes.reduce((total, option) => {
              return total + parseInt(option, 10);
            }, 0);
          });
          var currentPickerMode = computed(() => {
            return props.configurationValues[ConfigurationValueKey.CurrentPickerMode];
          });
          watch(() => props.modelValue, () => {
            try {
              internalValue.value = JSON.parse(props.modelValue || "null");
            } catch (_unused) {
              internalValue.value = null;
            }
          }, {
            immediate: true
          });
          watch(internalValue, () => {
            emit("update:modelValue", JSON.stringify(internalValue.value));
          });
          return {
            currentPickerMode,
            selectedAsNumber,
            internalValue
          };
        },
        template: "\n<LocationPicker v-model=\"internalValue\" label=\"Location\" v-model:currentPickerMode=\"currentPickerMode\" :allowedPickerModes=\"selectedAsNumber\"  />"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "LocationField.Configuration",
        components: {
          CheckBoxList,
          RadioButtonList
        },
        props: getFieldConfigurationProps(),
        emits: {
          "update:modelValue": _v => true,
          "updateConfigurationValue": (_key, _value) => true,
          "updateConfiguration": () => true
        },
        setup(props, _ref2) {
          var emit = _ref2.emit;
          console.debug("CONFIG", props.modelValue);
          var options = [{
            text: "Location",
            value: "2"
          }, {
            text: "Address",
            value: "1"
          }, {
            text: "Point",
            value: "4"
          }, {
            text: "Geo-fence",
            value: "8"
          }];
          var availableLocationTypes = ref([]);
          var currentPickerMode = ref("");
          var maybeUpdateModelValue = () => {
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.AllowedPickerModes] = availableLocationTypes.value.join(",");
            newValue[ConfigurationValueKey.CurrentPickerMode] = currentPickerMode.value;
            var anyValueChanged = newValue[ConfigurationValueKey.AllowedPickerModes] !== props.modelValue[ConfigurationValueKey.AllowedPickerModes] || newValue[ConfigurationValueKey.CurrentPickerMode] !== props.modelValue[ConfigurationValueKey.CurrentPickerMode];
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
            var _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3;
            availableLocationTypes.value = ((_props$modelValue$Con = (_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.AllowedPickerModes]) === null || _props$modelValue$Con2 === void 0 ? void 0 : _props$modelValue$Con2.split(",")) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : []).filter(s => s !== "");
            currentPickerMode.value = (_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.CurrentPickerMode]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "";
          }, {
            immediate: true
          });
          watch([availableLocationTypes, currentPickerMode], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(availableLocationTypes, () => maybeUpdateConfiguration(ConfigurationValueKey.AllowedPickerModes, availableLocationTypes.value.join(",")));
          watch(currentPickerMode, () => maybeUpdateConfiguration(ConfigurationValueKey.CurrentPickerMode, currentPickerMode.value));
          return {
            currentPickerMode,
            availableLocationTypes,
            options
          };
        },
        template: "\n    <CheckBoxList v-model=\"availableLocationTypes\"\n        label=\"Available Location Types\"\n        help=\"Select the location types that can be used by the Location Picker.\"\n        :items=\"options\"\n        horizontal />\n\n    <RadioButtonList v-model=\"currentPickerMode\"\n        label=\"Default Location Type\"\n        help=\"Select the location type that is initially displayed.\"\n        :items=\"options\"\n        horizontal />\n"
      }));

    })
  };
}));
//# sourceMappingURL=locationFieldComponents.js.map
