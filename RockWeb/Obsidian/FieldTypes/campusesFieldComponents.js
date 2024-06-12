System.register(['vue', './utils', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Utility/guid', '@Obsidian/Utility/booleanUtils'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldEditorProps, getFieldConfigurationProps, CheckBox, CheckBoxList, NumberBox, DropDownList, toNumberOrNull, defineAsyncComponent, updateRefValue, areEqual, asBoolean, asTrueFalseOrNull;
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
      NumberBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      updateRefValue = module.updateRefValue;
    }, function () {}, function () {}, function (module) {
      areEqual = module.areEqual;
    }, function (module) {
      asBoolean = module.asBoolean;
      asTrueFalseOrNull = module.asTrueFalseOrNull;
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
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["EnhancedSelection"] = "enhancedselection";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
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
        return (yield module.import('./campusesFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusesFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "CampusesField.Edit",
        components: {
          CheckBoxList,
          DropDownList
        },
        props: getFieldEditorProps(),
        setup(props, context) {
          var internalValue = ref(props.modelValue ? props.modelValue.split(",") : []);
          var options = computed(() => {
            try {
              var _props$configurationV;
              return JSON.parse((_props$configurationV = props.configurationValues[ConfigurationValueKey.Values]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "[]");
            } catch (_unused) {
              return [];
            }
          });
          var enhance = computed(() => {
            return props.configurationValues[ConfigurationValueKey.EnhancedSelection] == "True";
          });
          var repeatColumns = computed(() => {
            var _toNumberOrNull;
            var repeatColumnsConfig = props.configurationValues[ConfigurationValueKey.RepeatColumns];
            return (_toNumberOrNull = toNumberOrNull(repeatColumnsConfig)) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : 4;
          });
          watch(() => props.modelValue, () => {
            updateRefValue(internalValue, props.modelValue ? props.modelValue.split(",") : []);
          });
          watch(internalValue, () => {
            context.emit("update:modelValue", internalValue.value.join(","));
          });
          return {
            internalValue,
            options,
            repeatColumns,
            enhance
          };
        },
        template: "\n<DropDownList v-if=\"enhance\" v-model=\"internalValue\" enhanceForLongLists multiple :items=\"options\" />\n<CheckBoxList v-else v-model=\"internalValue\" horizontal :items=\"options\" :repeatColumns=\"repeatColumns\" />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "CampusesField.Configuration",
        components: {
          CheckBox,
          CheckBoxList,
          NumberBox
        },
        props: getFieldConfigurationProps(),
        emit: {
          "update:modelValue": _v => true,
          "updateConfigurationValue": (_k, _v) => true,
          "updateConfiguration": () => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var enhancedSelection = ref(false);
          var numberOfColumns = ref(null);
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
            var _asTrueFalseOrNull, _numberOfColumns$valu, _numberOfColumns$valu2, _asTrueFalseOrNull2, _props$modelValue$Con, _props$modelValue$Con2, _props$modelValue$Con3, _props$modelValue$Con4, _props$modelValue$Con5, _props$modelValue$Con6, _props$modelValue$Con7;
            var newValue = {};
            newValue[ConfigurationValueKey.EnhancedSelection] = (_asTrueFalseOrNull = asTrueFalseOrNull(enhancedSelection.value)) !== null && _asTrueFalseOrNull !== void 0 ? _asTrueFalseOrNull : "False";
            newValue[ConfigurationValueKey.RepeatColumns] = (_numberOfColumns$valu = (_numberOfColumns$valu2 = numberOfColumns.value) === null || _numberOfColumns$valu2 === void 0 ? void 0 : _numberOfColumns$valu2.toString()) !== null && _numberOfColumns$valu !== void 0 ? _numberOfColumns$valu : "";
            newValue[ConfigurationValueKey.IncludeInactive] = (_asTrueFalseOrNull2 = asTrueFalseOrNull(includeInactive.value)) !== null && _asTrueFalseOrNull2 !== void 0 ? _asTrueFalseOrNull2 : "False";
            newValue[ConfigurationValueKey.FilterCampusTypes] = filterCampusTypes.value.join(",");
            newValue[ConfigurationValueKey.FilterCampusStatus] = filterCampusStatus.value.join(",");
            newValue[ConfigurationValueKey.SelectableCampuses] = selectableCampuses.value.join(",");
            newValue[ConfigurationValueKey.Values] = JSON.stringify(campusOptions.value);
            var anyValueChanged = newValue[ConfigurationValueKey.EnhancedSelection] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.EnhancedSelection]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "False") || newValue[ConfigurationValueKey.RepeatColumns] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.RepeatColumns]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "") || newValue[ConfigurationValueKey.IncludeInactive] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.IncludeInactive]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "False") || newValue[ConfigurationValueKey.FilterCampusTypes] !== ((_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.FilterCampusTypes]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "") || newValue[ConfigurationValueKey.FilterCampusStatus] !== ((_props$modelValue$Con5 = props.modelValue[ConfigurationValueKey.FilterCampusStatus]) !== null && _props$modelValue$Con5 !== void 0 ? _props$modelValue$Con5 : "") || newValue[ConfigurationValueKey.SelectableCampuses] !== ((_props$modelValue$Con6 = props.modelValue[ConfigurationValueKey.SelectableCampuses]) !== null && _props$modelValue$Con6 !== void 0 ? _props$modelValue$Con6 : "") || newValue[ConfigurationValueKey.Values] !== ((_props$modelValue$Con7 = props.modelValue[ConfigurationValueKey.Values]) !== null && _props$modelValue$Con7 !== void 0 ? _props$modelValue$Con7 : "");
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
            var _props$modelValue$Con8, _props$modelValue$Con9, _props$modelValue$Con10, _props$modelValue$Con11, _props$modelValue$Con12, _props$modelValue$Con13;
            var campuses = props.configurationProperties[ConfigurationPropertyKey.Campuses];
            var campusTypes = props.configurationProperties[ConfigurationPropertyKey.CampusTypes];
            var campusStatuses = props.configurationProperties[ConfigurationPropertyKey.CampusStatuses];
            allCampusItems.value = campuses ? JSON.parse(campuses) : [];
            campusTypeOptions.value = campusTypes ? JSON.parse(campusTypes) : [];
            campusStatusOptions.value = campusStatuses ? JSON.parse(campusStatuses) : [];
            enhancedSelection.value = asBoolean(props.modelValue[ConfigurationValueKey.EnhancedSelection]);
            numberOfColumns.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.RepeatColumns]);
            includeInactive.value = asBoolean(props.modelValue[ConfigurationValueKey.IncludeInactive]);
            filterCampusTypes.value = ((_props$modelValue$Con8 = (_props$modelValue$Con9 = props.modelValue[ConfigurationValueKey.FilterCampusTypes]) === null || _props$modelValue$Con9 === void 0 ? void 0 : _props$modelValue$Con9.split(",")) !== null && _props$modelValue$Con8 !== void 0 ? _props$modelValue$Con8 : []).filter(s => s !== "");
            filterCampusStatus.value = ((_props$modelValue$Con10 = (_props$modelValue$Con11 = props.modelValue[ConfigurationValueKey.FilterCampusStatus]) === null || _props$modelValue$Con11 === void 0 ? void 0 : _props$modelValue$Con11.split(",")) !== null && _props$modelValue$Con10 !== void 0 ? _props$modelValue$Con10 : []).filter(s => s !== "");
            selectableCampuses.value = ((_props$modelValue$Con12 = (_props$modelValue$Con13 = props.modelValue[ConfigurationValueKey.SelectableCampuses]) === null || _props$modelValue$Con13 === void 0 ? void 0 : _props$modelValue$Con13.split(",")) !== null && _props$modelValue$Con12 !== void 0 ? _props$modelValue$Con12 : []).filter(s => s !== "");
          }, {
            immediate: true
          });
          watch([], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(enhancedSelection, () => {
            var _asTrueFalseOrNull3;
            return maybeUpdateConfiguration(ConfigurationValueKey.EnhancedSelection, (_asTrueFalseOrNull3 = asTrueFalseOrNull(enhancedSelection.value)) !== null && _asTrueFalseOrNull3 !== void 0 ? _asTrueFalseOrNull3 : "False");
          });
          watch(numberOfColumns, () => {
            var _numberOfColumns$valu3, _numberOfColumns$valu4;
            return maybeUpdateConfiguration(ConfigurationValueKey.RepeatColumns, (_numberOfColumns$valu3 = (_numberOfColumns$valu4 = numberOfColumns.value) === null || _numberOfColumns$valu4 === void 0 ? void 0 : _numberOfColumns$valu4.toString()) !== null && _numberOfColumns$valu3 !== void 0 ? _numberOfColumns$valu3 : "");
          });
          watch(includeInactive, () => {
            var _asTrueFalseOrNull4;
            return maybeUpdateConfiguration(ConfigurationValueKey.IncludeInactive, (_asTrueFalseOrNull4 = asTrueFalseOrNull(includeInactive.value)) !== null && _asTrueFalseOrNull4 !== void 0 ? _asTrueFalseOrNull4 : "False");
          });
          watch(filterCampusTypes, () => maybeUpdateConfiguration(ConfigurationValueKey.FilterCampusTypes, filterCampusTypes.value.join(",")));
          watch(filterCampusStatus, () => maybeUpdateConfiguration(ConfigurationValueKey.FilterCampusStatus, filterCampusStatus.value.join(",")));
          watch(selectableCampuses, () => maybeUpdateConfiguration(ConfigurationValueKey.SelectableCampuses, selectableCampuses.value.join(",")));
          watch(campusOptions, () => maybeUpdateConfiguration(ConfigurationValueKey.Values, JSON.stringify(campusOptions.value)));
          return {
            allCampusOptions,
            campusStatusOptions,
            campusTypeOptions,
            enhancedSelection,
            filterCampusStatus,
            filterCampusTypes,
            includeInactive,
            numberOfColumns,
            selectableCampuses
          };
        },
        template: "\n<div>\n    <CheckBox v-model=\"enhancedSelection\"\n        label=\"Enhanced For Long Lists\"\n        help=\"When set, will render a searchable selection of options.\" />\n\n    <NumberBox v-if=\"!enhancedSelection\"\n        v-model=\"numberOfColumns\"\n        label=\"Number of Columns\"\n        help=\"Select how many columns the list should use before going to the next row. If blank or 0 then 4 columns will be displayed. There is no upper limit enforced here however the block this is used in might add contraints due to available space.\" />\n\n    <CheckBox v-model=\"includeInactive\"\n        label=\"Include Inactive\"\n        help=\"When set, inactive campuses will be included in the list.\" />\n\n    <CheckBoxList v-model=\"filterCampusTypes\"\n        label=\"Filter Campus Types\"\n        help=\"When set this will filter the campuses displayed in the list to the selected Types. Setting a filter will cause the campus picker to display even if 0 campuses are in the list.\"\n        :items=\"campusTypeOptions\"\n        horizontal />\n\n    <CheckBoxList v-model=\"filterCampusStatus\"\n        label=\"Filter Campus Status\"\n        help=\"When set this will filter the campuses displayed in the list to the selected Status. Setting a filter will cause the campus picker to display even if 0 campuses are in the list.\"\n        :items=\"campusStatusOptions\"\n        horizontal />\n\n    <CheckBoxList v-model=\"selectableCampuses\"\n        label=\"Selectable Campuses\"\n        :items=\"allCampusOptions\"\n        horizontal />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=campusesFieldComponents.js.map
