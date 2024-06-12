System.register(['vue', './utils', '@Obsidian/Controls/locationList.obs', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/locationItemPicker.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/SystemGuids/definedType', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/listItemBag', '@Obsidian/Utility/guid'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, watch, getFieldEditorProps, LocationList, DefinedValuePicker, LocationItemPicker, CheckBox, DefinedType, defineAsyncComponent, asBoolean, asTrueOrFalseString, asListItemBagOrNull, toGuidOrNull;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
    }, function (module) {
      LocationList = module["default"];
    }, function (module) {
      DefinedValuePicker = module["default"];
    }, function (module) {
      LocationItemPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      DefinedType = module.DefinedType;
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function (module) {
      asBoolean = module.asBoolean;
      asTrueOrFalseString = module.asTrueOrFalseString;
    }, function (module) {
      asListItemBagOrNull = module.asListItemBagOrNull;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
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
        ConfigurationValueKey["LocationType"] = "LocationType";
        ConfigurationValueKey["ParentLocation"] = "ParentLocation";
        ConfigurationValueKey["AllowAddingNewLocations"] = "AllowAddingNewLocations";
        ConfigurationValueKey["ShowCityState"] = "ShowCityState";
        ConfigurationValueKey["AddressRequired"] = "AddressRequired";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./locationListFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./locationListFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "LocationListField.Edit",
        components: {
          LocationList
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref(null);
          var locationTypeGuid = ref(null);
          var parentGuid = ref(null);
          var allowAdd = ref(false);
          var showCityState = ref(false);
          var addressRequired = ref(false);
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
          watch(() => props.configurationValues, () => {
            var _asListItemBagOrNull, _asListItemBagOrNull2;
            locationTypeGuid.value = toGuidOrNull((_asListItemBagOrNull = asListItemBagOrNull(props.configurationValues[ConfigurationValueKey.LocationType])) === null || _asListItemBagOrNull === void 0 ? void 0 : _asListItemBagOrNull.value);
            parentGuid.value = toGuidOrNull((_asListItemBagOrNull2 = asListItemBagOrNull(props.configurationValues[ConfigurationValueKey.ParentLocation])) === null || _asListItemBagOrNull2 === void 0 ? void 0 : _asListItemBagOrNull2.value);
            allowAdd.value = asBoolean(props.configurationValues[ConfigurationValueKey.AllowAddingNewLocations]);
            showCityState.value = asBoolean(props.configurationValues[ConfigurationValueKey.ShowCityState]);
            addressRequired.value = asBoolean(props.configurationValues[ConfigurationValueKey.AddressRequired]);
          }, {
            immediate: true
          });
          return {
            internalValue,
            locationTypeGuid,
            parentGuid,
            allowAdd,
            showCityState,
            addressRequired
          };
        },
        template: "\n<LocationList v-model=\"internalValue\" :allowAdd=\"allowAdd\" :locationTypeValueGuid=\"locationTypeGuid\" :parentLocationGuid=\"parentGuid\" :showCityState=\"showCityState\" :isAddressRequired=\"addressRequired\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "LocationListField.Configuration",
        components: {
          DefinedValuePicker,
          LocationItemPicker,
          CheckBox
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: {
          "update:modelValue": _v => true,
          "updateConfigurationValue": (_key, _value) => true,
          "updateConfiguration": () => true
        },
        setup(props, _ref2) {
          var emit = _ref2.emit;
          console.debug("CONFIG", props.modelValue);
          var locationTypeGuid = DefinedType.LocationType;
          var locationType = ref(null);
          var parentLocation = ref(null);
          var allowAdding = ref(false);
          var showCityState = ref(false);
          var addressRequired = ref(false);
          var maybeUpdateModelValue = () => {
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.LocationType] = locationType.value ? JSON.stringify(locationType.value) : "";
            newValue[ConfigurationValueKey.ParentLocation] = parentLocation.value ? JSON.stringify(parentLocation.value) : "";
            newValue[ConfigurationValueKey.AllowAddingNewLocations] = asTrueOrFalseString(allowAdding.value);
            newValue[ConfigurationValueKey.ShowCityState] = asTrueOrFalseString(showCityState.value);
            newValue[ConfigurationValueKey.AddressRequired] = asTrueOrFalseString(addressRequired.value);
            var anyValueChanged = newValue[ConfigurationValueKey.LocationType] !== props.modelValue[ConfigurationValueKey.LocationType] || newValue[ConfigurationValueKey.ParentLocation] !== props.modelValue[ConfigurationValueKey.ParentLocation] || newValue[ConfigurationValueKey.AllowAddingNewLocations] !== props.modelValue[ConfigurationValueKey.AllowAddingNewLocations] || newValue[ConfigurationValueKey.ShowCityState] !== props.modelValue[ConfigurationValueKey.ShowCityState] || newValue[ConfigurationValueKey.AddressRequired] !== props.modelValue[ConfigurationValueKey.AddressRequired];
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
          watch(() => props.modelValue, () => {
            locationType.value = asListItemBagOrNull(props.modelValue[ConfigurationValueKey.LocationType]);
            parentLocation.value = asListItemBagOrNull(props.modelValue[ConfigurationValueKey.ParentLocation]);
            allowAdding.value = asBoolean(props.modelValue[ConfigurationValueKey.AllowAddingNewLocations]);
            showCityState.value = asBoolean(props.modelValue[ConfigurationValueKey.ShowCityState]);
            addressRequired.value = asBoolean(props.modelValue[ConfigurationValueKey.AddressRequired]);
          }, {
            immediate: true
          });
          watch(locationType, () => maybeUpdateConfiguration(ConfigurationValueKey.LocationType, JSON.stringify(locationType.value)));
          watch(parentLocation, () => maybeUpdateConfiguration(ConfigurationValueKey.ParentLocation, JSON.stringify(parentLocation.value)));
          watch(allowAdding, () => maybeUpdateConfiguration(ConfigurationValueKey.AllowAddingNewLocations, asTrueOrFalseString(allowAdding.value)));
          watch(showCityState, () => maybeUpdateConfiguration(ConfigurationValueKey.ShowCityState, asTrueOrFalseString(showCityState.value)));
          watch(addressRequired, () => maybeUpdateConfiguration(ConfigurationValueKey.AddressRequired, asTrueOrFalseString(addressRequired.value)));
          return {
            locationTypeGuid,
            locationType,
            parentLocation,
            allowAdding,
            showCityState,
            addressRequired
          };
        },
        template: "\n<DefinedValuePicker v-model=\"locationType\" label=\"Location Type\" :definedTypeGuid=\"locationTypeGuid\" showBlankItem />\n<LocationItemPicker v-model=\"parentLocation\" label=\"Parent Location\" :multiple=\"multiple\" rules=\"required\" />\n<CheckBox v-model=\"allowAdding\" label=\"Allow Adding New Locations\" />\n<CheckBox v-model=\"showCityState\" label=\"Show City / State\" />\n<CheckBox v-model=\"addressRequired\" label=\"Address Required\" />\n"
      }));

    })
  };
}));
//# sourceMappingURL=locationListFieldComponents.js.map
