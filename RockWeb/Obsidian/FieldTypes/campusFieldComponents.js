System.register(['vue', './utils', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/dropDownList', '@Obsidian/Utility/component', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Utility/guid', './fieldType', '@Obsidian/Utility/booleanUtils'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, CheckBox, CheckBoxList, DropDownList, defineAsyncComponent, areEqual, asBoolean, asTrueFalseOrNull;
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
      CheckBoxList = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function (module) {
      areEqual = module.areEqual;
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
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["IncludeInactive"] = "includeInactive";
        ConfigurationValueKey["FilterCampusTypes"] = "filterCampusTypes";
        ConfigurationValueKey["FilterCampusStatus"] = "filterCampusStatus";
        ConfigurationValueKey["SelectableCampuses"] = "selectableCampuses";
        return ConfigurationValueKey;
      }({});
      var ConfigurationPropertyKey = function (ConfigurationPropertyKey) {
        ConfigurationPropertyKey["Campuses"] = "campuses";
        ConfigurationPropertyKey["CampusTypes"] = "campusTypes";
        ConfigurationPropertyKey["CampusStatuses"] = "campusStatuses";
        return ConfigurationPropertyKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusFieldComponents')).FilterComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "CampusField.Edit",
        components: {
          DropDownList
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var _props$modelValue;
          var emit = _ref.emit;
          var internalValue = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : "");
          var options = computed(() => {
            try {
              var _props$configurationV;
              return JSON.parse((_props$configurationV = props.configurationValues[ConfigurationValueKey.Values]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "[]");
            } catch (_unused) {
              return [];
            }
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue2;
            return internalValue.value = (_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : "";
          });
          watch(internalValue, () => emit("update:modelValue", internalValue.value));
          return {
            internalValue,
            options
          };
        },
        template: "\n<DropDownList v-model=\"internalValue\" :items=\"options\" />\n"
      }));
      var FilterComponent = exports('FilterComponent', defineComponent({
        name: "CampusField.Filter",
        components: {
          CheckBoxList
        },
        props: getFieldEditorProps(),
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var internalValue = ref(props.modelValue.split(",").filter(s => s !== ""));
          var options = computed(() => {
            try {
              var _props$configurationV2;
              return JSON.parse((_props$configurationV2 = props.configurationValues[ConfigurationValueKey.Values]) !== null && _props$configurationV2 !== void 0 ? _props$configurationV2 : "[]");
            } catch (_unused2) {
              return [];
            }
          });
          watch(() => props.modelValue, () => internalValue.value = props.modelValue.split(",").filter(s => s !== ""));
          watch(internalValue, () => emit("update:modelValue", internalValue.value.join(",")));
          return {
            internalValue,
            options
          };
        },
        template: "\n<CheckBoxList v-model=\"internalValue\" :items=\"options\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "CampusField.Configuration",
        components: {
          CheckBoxList,
          CheckBox
        },
        props: getFieldConfigurationProps(),
        setup(props, _ref3) {
          var emit = _ref3.emit;
          var includeInactive = ref(false);
          var filterCampusTypes = ref([]);
          var filterCampusStatus = ref([]);
          var selectableCampuses = ref([]);
          var campusTypeOptions = ref([]);
          var campusStatusOptions = ref([]);
          var allCampusItems = ref([]);
          var allCampusOptions = computed(() => {
            return allCampusItems.value.map(c => {
              return {
                value: c.guid,
                text: c.name
              };
            });
          });
          var campusOptions = computed(() => {
            return allCampusItems.value.filter(c => {
              if (!includeInactive.value && !c.isActive) {
                return false;
              }
              if (filterCampusTypes.value.length) {
                if (filterCampusTypes.value.filter(o => areEqual(o, c.type)).length === 0) {
                  return false;
                }
              }
              if (filterCampusStatus.value.length) {
                if (filterCampusStatus.value.filter(o => areEqual(o, c.status)).length === 0) {
                  return false;
                }
              }
              if (selectableCampuses.value.length) {
                if (selectableCampuses.value.filter(o => areEqual(o, c.guid)).length === 0) {
                  return false;
                }
              }
              return true;
            }).map(c => {
              return {
                value: c.guid,
                text: c.name
              };
            });
          });
          var maybeUpdateModelValue = () => {
            var _asTrueFalseOrNull, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3, _props$modelValue$Con4, _props$modelValue$Con5;
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.IncludeInactive] = (_asTrueFalseOrNull = asTrueFalseOrNull(includeInactive.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
            newValue[ConfigurationValueKey.FilterCampusTypes] = filterCampusTypes.value.join(",");
            newValue[ConfigurationValueKey.FilterCampusStatus] = filterCampusStatus.value.join(",");
            newValue[ConfigurationValueKey.SelectableCampuses] = selectableCampuses.value.join(",");
            newValue[ConfigurationValueKey.Values] = JSON.stringify(campusOptions.value);
            var anyValueChanged = newValue[ConfigurationValueKey.IncludeInactive] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.IncludeInactive]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "False") || newValue[ConfigurationValueKey.FilterCampusTypes] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.FilterCampusTypes]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "") || newValue[ConfigurationValueKey.FilterCampusStatus] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.FilterCampusStatus]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "") || newValue[ConfigurationValueKey.SelectableCampuses] !== ((_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.SelectableCampuses]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "") || newValue[ConfigurationValueKey.Values] !== ((_props$modelValue$Con5 = props.modelValue[ConfigurationValueKey.Values]) !== null && _props$modelValue$Con5 !== void 0 ? _props$modelValue$Con5 : "[]");
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
            var _props$modelValue$Con6, _props$modelValue$Con7, _props$modelValue$Con8, _props$modelValue$Con9, _props$modelValue$Con10, _props$modelValue$Con11;
            var campuses = props.configurationProperties[ConfigurationPropertyKey.Campuses];
            var campusTypes = props.configurationProperties[ConfigurationPropertyKey.CampusTypes];
            var campusStatuses = props.configurationProperties[ConfigurationPropertyKey.CampusStatuses];
            allCampusItems.value = campuses ? JSON.parse(campuses) : [];
            campusTypeOptions.value = campusTypes ? JSON.parse(campusTypes) : [];
            campusStatusOptions.value = campusStatuses ? JSON.parse(campusStatuses) : [];
            includeInactive.value = asBoolean(props.modelValue[ConfigurationValueKey.IncludeInactive]);
            filterCampusTypes.value = ((_props$modelValue$Con6 = (_props$modelValue$Con7 = props.modelValue[ConfigurationValueKey.FilterCampusTypes]) === null || _props$modelValue$Con7 === void 0 ? void 0 : _props$modelValue$Con7.split(",")) !== null && _props$modelValue$Con6 !== void 0 ? _props$modelValue$Con6 : []).filter(s => s !== "");
            filterCampusStatus.value = ((_props$modelValue$Con8 = (_props$modelValue$Con9 = props.modelValue[ConfigurationValueKey.FilterCampusStatus]) === null || _props$modelValue$Con9 === void 0 ? void 0 : _props$modelValue$Con9.split(",")) !== null && _props$modelValue$Con8 !== void 0 ? _props$modelValue$Con8 : []).filter(s => s !== "");
            selectableCampuses.value = ((_props$modelValue$Con10 = (_props$modelValue$Con11 = props.modelValue[ConfigurationValueKey.SelectableCampuses]) === null || _props$modelValue$Con11 === void 0 ? void 0 : _props$modelValue$Con11.split(",")) !== null && _props$modelValue$Con10 !== void 0 ? _props$modelValue$Con10 : []).filter(s => s !== "");
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(includeInactive, () => {
            var _asTrueFalseOrNull2;
            return maybeUpdateConfiguration(ConfigurationValueKey.IncludeInactive, (_asTrueFalseOrNull2 = asTrueFalseOrNull(includeInactive.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False");
          });
          watch(filterCampusTypes, () => maybeUpdateConfiguration(ConfigurationValueKey.FilterCampusTypes, filterCampusTypes.value.join(",")));
          watch(filterCampusStatus, () => maybeUpdateConfiguration(ConfigurationValueKey.FilterCampusStatus, filterCampusStatus.value.join(",")));
          watch(selectableCampuses, () => maybeUpdateConfiguration(ConfigurationValueKey.SelectableCampuses, selectableCampuses.value.join(",")));
          watch(campusOptions, () => emit("updateConfigurationValue", ConfigurationValueKey.Values, JSON.stringify(campusOptions.value)));
          return {
            allCampusOptions,
            campusStatusOptions,
            campusTypeOptions,
            filterCampusStatus,
            filterCampusTypes,
            includeInactive,
            selectableCampuses
          };
        },
        template: "\n<div>\n    <CheckBox v-model=\"includeInactive\"\n        label=\"Include Inactive\"\n        help=\"When set, inactive campuses will be included in the list.\" />\n\n    <CheckBoxList v-model=\"filterCampusTypes\"\n        label=\"Filter Campus Types\"\n        help=\"When set this will filter the campuses displayed in the list to the selected Types. Setting a filter will cause the campus picker to display even if 0 campuses are in the list.\"\n        :items=\"campusTypeOptions\"\n        horizontal />\n\n    <CheckBoxList v-model=\"filterCampusStatus\"\n        label=\"Filter Campus Status\"\n        help=\"When set this will filter the campuses displayed in the list to the selected Status. Setting a filter will cause the campus picker to display even if 0 campuses are in the list.\"\n        :items=\"campusStatusOptions\"\n        horizontal />\n\n    <CheckBoxList v-model=\"selectableCampuses\"\n        label=\"Selectable Campuses\"\n        :items=\"allCampusOptions\"\n        horizontal />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=campusFieldComponents.js.map
