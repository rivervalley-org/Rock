System.register(['@Obsidian/SystemGuids/fieldType', '@Obsidian/Utility/fieldTypes', './utils', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/guid', '@Obsidian/Core/Reporting/comparisonType', 'vue', '@Obsidian/Core/Utilities/rockColor', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/slidingDateRange', '@Obsidian/Utility/rockDateTime', '@Obsidian/Enums/Controls/dayOfWeek', '@Obsidian/Utility/linq', '@Obsidian/Utility/phone'], (function (exports, module) {
  'use strict';
  var FieldType, registerFieldType, getStandardFilterComponent, defineAsyncComponent, FieldTypeBase, ComparisonType, asBooleanOrNull, asBoolean, areEqual, guid, containsComparisonTypes, numericComparisonTypes, dateComparisonTypes, stringComparisonTypes, binaryComparisonTypes, nextTick, RockColor, escapeHtml, padLeft, toCurrencyOrNull, toNumber, toNumberOrNull, parseSlidingDateRangeString, getRangeTypeText, getTimeUnitText, TimeUnit, RangeType, calculateSlidingDateRange, RockDateTime, DateTimeFormat, DayOfWeek, List, formatPhoneNumber;
  return {
    setters: [function (module) {
      FieldType = module.FieldType;
    }, function (module) {
      registerFieldType = module.registerFieldType;
    }, function (module) {
      getStandardFilterComponent = module.getStandardFilterComponent;
      exports({ ConfigurationValues: module.ConfigurationValues, getFieldEditorProps: module.getFieldEditorProps });
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function (module) {
      FieldTypeBase = module.FieldTypeBase;
    }, function (module) {
      ComparisonType = module.ComparisonType;
    }, function (module) {
      asBooleanOrNull = module.asBooleanOrNull;
      asBoolean = module.asBoolean;
    }, function (module) {
      areEqual = module.areEqual;
      guid = module["default"];
    }, function (module) {
      containsComparisonTypes = module.containsComparisonTypes;
      numericComparisonTypes = module.numericComparisonTypes;
      dateComparisonTypes = module.dateComparisonTypes;
      stringComparisonTypes = module.stringComparisonTypes;
      binaryComparisonTypes = module.binaryComparisonTypes;
    }, function (module) {
      nextTick = module.nextTick;
    }, function (module) {
      RockColor = module.RockColor;
    }, function (module) {
      escapeHtml = module.escapeHtml;
      padLeft = module.padLeft;
    }, function (module) {
      toCurrencyOrNull = module.toCurrencyOrNull;
      toNumber = module.toNumber;
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      parseSlidingDateRangeString = module.parseSlidingDateRangeString;
      getRangeTypeText = module.getRangeTypeText;
      getTimeUnitText = module.getTimeUnitText;
      TimeUnit = module.TimeUnit;
      RangeType = module.RangeType;
      calculateSlidingDateRange = module.calculateSlidingDateRange;
    }, function (module) {
      RockDateTime = module.RockDateTime;
      DateTimeFormat = module.DateTimeFormat;
    }, function (module) {
      DayOfWeek = module.DayOfWeek;
    }, function (module) {
      List = module.List;
    }, function (module) {
      formatPhoneNumber = module.formatPhoneNumber;
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
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }

      var editComponent$18 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./addressFieldComponents')).EditComponent;
      }));
      var configurationComponent$18 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./addressFieldComponents')).ConfigurationComponent;
      }));
      class AddressFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          try {
            var _addressValue$street, _addressValue$street2, _addressValue$city, _addressValue$state, _addressValue$postalC;
            var addressValue = JSON.parse(value || "{}");
            var textValue = "".concat((_addressValue$street = addressValue.street1) !== null && _addressValue$street !== void 0 ? _addressValue$street : "", " ").concat((_addressValue$street2 = addressValue.street2) !== null && _addressValue$street2 !== void 0 ? _addressValue$street2 : "", " ").concat((_addressValue$city = addressValue.city) !== null && _addressValue$city !== void 0 ? _addressValue$city : "", ", ").concat((_addressValue$state = addressValue.state) !== null && _addressValue$state !== void 0 ? _addressValue$state : "", " ").concat((_addressValue$postalC = addressValue.postalCode) !== null && _addressValue$postalC !== void 0 ? _addressValue$postalC : "");
            textValue = textValue.replace(/  +/, " ");
            textValue = textValue.replace(/^ +/, "");
            textValue = textValue.replace(/ +$/, "");
            return textValue === "," ? "" : textValue;
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$18;
        }
        getConfigurationComponent() {
          return configurationComponent$18;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["BinaryFileType"] = "binaryFileType";
        return ConfigurationValueKey;
      })({});
      var editComponent$17 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./backgroundCheckFieldComponents')).EditComponent;
      }));
      var configurationComponent$17 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./backgroundCheckFieldComponents')).ConfigurationComponent;
      }));
      class BackgroundCheckFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$17;
        }
        getConfigurationComponent() {
          return configurationComponent$17;
        }
        isFilterable() {
          return false;
        }
      }

      var ConfigurationValueKey$q = function (ConfigurationValueKey) {
        ConfigurationValueKey["BooleanControlType"] = "BooleanControlType";
        ConfigurationValueKey["FalseText"] = "falsetext";
        ConfigurationValueKey["TrueText"] = "truetext";
        return ConfigurationValueKey;
      }({});
      var editComponent$16 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./booleanFieldComponents')).EditComponent;
      }));
      var configurationComponent$16 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./booleanFieldComponents')).ConfigurationComponent;
      }));
      var filterComponent$d = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./booleanFieldComponents')).FilterComponent;
      }));
      class BooleanFieldType extends FieldTypeBase {
        getCondensedTextValue(value, _configurationValues) {
          var boolValue = asBooleanOrNull(value);
          if (boolValue === null) {
            return "";
          } else if (boolValue === true) {
            return "Y";
          } else {
            return "N";
          }
        }
        getTextValue(value, configurationValues) {
          var boolValue = asBooleanOrNull(value);
          if (boolValue === null) {
            return "";
          } else if (boolValue === true) {
            return configurationValues[ConfigurationValueKey$q.TrueText] || "Yes";
          } else {
            return configurationValues[ConfigurationValueKey$q.FalseText] || "No";
          }
        }
        getEditComponent() {
          return editComponent$16;
        }
        getConfigurationComponent() {
          return configurationComponent$16;
        }
        getSupportedComparisonTypes() {
          return ComparisonType.EqualTo | ComparisonType.NotEqualTo;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$d);
        }
      }

      var ConfigurationValueKey$p = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["IncludeInactive"] = "includeInactive";
        ConfigurationValueKey["FilterCampusTypes"] = "filterCampusTypes";
        ConfigurationValueKey["FilterCampusStatus"] = "filterCampusStatus";
        ConfigurationValueKey["ForceVisible"] = "forceVisible";
        ConfigurationValueKey["SelectableCampuses"] = "selectableCampuses";
        return ConfigurationValueKey;
      }({});
      (function (ConfigurationPropertyKey) {
        ConfigurationPropertyKey["Campuses"] = "campuses";
        ConfigurationPropertyKey["CampusTypes"] = "campusTypes";
        ConfigurationPropertyKey["CampusStatuses"] = "campusStatuses";
        return ConfigurationPropertyKey;
      })({});
      var editComponent$15 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusFieldComponents')).EditComponent;
      }));
      var filterComponent$c = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusFieldComponents')).FilterComponent;
      }));
      var configurationComponent$15 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusFieldComponents')).ConfigurationComponent;
      }));
      class CampusFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === undefined || value === null || value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$p.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var selectedValues = values.filter(o => o.value === value);
            return selectedValues.map(o => o.text).join(", ");
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$15;
        }
        getConfigurationComponent() {
          return configurationComponent$15;
        }
        getSupportedComparisonTypes() {
          return ComparisonType.None;
        }
        getFilterValueText(value, configurationValues) {
          if (!value.value) {
            return "";
          }
          try {
            var _configurationValues$2;
            var rawValues = value.value.split(",");
            var values = JSON.parse((_configurationValues$2 = configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues[ConfigurationValueKey$p.Values]) !== null && _configurationValues$2 !== void 0 ? _configurationValues$2 : "[]");
            var selectedValues = values.filter(o => rawValues.filter(v => areEqual(v, o.value)).length > 0);
            return "'".concat(selectedValues.map(o => o.text).join("' OR '"), "'");
          } catch (_unused2) {
            return "'".concat(value.value, "'");
          }
        }
        getFilterComponent() {
          return getStandardFilterComponent("Is", filterComponent$c);
        }
        doesValueMatchFilter(value, filterValue, _configurationValues) {
          var _filterValue$value;
          var selectedValues = ((_filterValue$value = filterValue.value) !== null && _filterValue$value !== void 0 ? _filterValue$value : "").split(",").filter(v => v !== "").map(v => v.toLowerCase());
          var comparisonType = filterValue.comparisonType;
          if (comparisonType === ComparisonType.EqualTo) {
            comparisonType = ComparisonType.Contains;
          } else if (comparisonType === ComparisonType.NotEqualTo) {
            comparisonType = ComparisonType.DoesNotContain;
          }
          if (comparisonType === ComparisonType.IsBlank) {
            return value === "";
          } else if (comparisonType === ComparisonType.IsNotBlank) {
            return value !== "";
          }
          if (selectedValues.length > 0) {
            var matched = selectedValues.includes((value !== null && value !== void 0 ? value : "").toLowerCase());
            if (comparisonType === ComparisonType.DoesNotContain) {
              matched = !matched;
            }
            return matched;
          }
          return false;
        }
      }

      var ConfigurationValueKey$o = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["EnhancedSelection"] = "enhancedselection";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["IncludeInactive"] = "includeInactive";
        ConfigurationValueKey["FilterCampusTypes"] = "filterCampusTypes";
        ConfigurationValueKey["FilterCampusStatus"] = "filterCampusStatus";
        ConfigurationValueKey["SelectableCampuses"] = "selectableCampuses";
        return ConfigurationValueKey;
      }({});
      (function (ConfigurationPropertyKey) {
        ConfigurationPropertyKey["Campuses"] = "campuses";
        ConfigurationPropertyKey["CampusTypes"] = "campusTypes";
        ConfigurationPropertyKey["CampusStatuses"] = "campusStatuses";
        return ConfigurationPropertyKey;
      })({});
      var editComponent$14 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusesFieldComponents')).EditComponent;
      }));
      var configurationComponent$14 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusesFieldComponents')).ConfigurationComponent;
      }));
      class CampusesFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === undefined || value === null || value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$o.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var userValues = value.split(",");
            var selectedValues = values.filter(o => {
              var _o$value;
              return userValues.includes((_o$value = o.value) !== null && _o$value !== void 0 ? _o$value : "");
            });
            return selectedValues.map(o => o.text).join(", ");
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$14;
        }
        getConfigurationComponent() {
          return configurationComponent$14;
        }
        doesValueMatchFilter(value, filterValue, _configurationValues) {
          var _filterValue$value;
          var selectedValues = ((_filterValue$value = filterValue.value) !== null && _filterValue$value !== void 0 ? _filterValue$value : "").split(",").filter(v => v !== "").map(v => v.toLowerCase());
          var comparisonType = filterValue.comparisonType;
          if (comparisonType === ComparisonType.EqualTo) {
            comparisonType = ComparisonType.Contains;
          } else if (comparisonType === ComparisonType.NotEqualTo) {
            comparisonType = ComparisonType.DoesNotContain;
          }
          if (comparisonType === ComparisonType.IsBlank) {
            return value === "";
          } else if (comparisonType === ComparisonType.IsNotBlank) {
            return value !== "";
          }
          if (selectedValues.length > 0) {
            var matched = selectedValues.includes(value.toLowerCase());
            if (comparisonType === ComparisonType.DoesNotContain) {
              matched = !matched;
            }
            return matched;
          }
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["EntityTypeName"] = "entityTypeName";
        ConfigurationValueKey["QualifierColumn"] = "qualifierColumn";
        ConfigurationValueKey["QualifierValue"] = "qualifierValue";
        return ConfigurationValueKey;
      })({});
      var editComponent$13 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./categoriesFieldComponents')).EditComponent;
      }));
      var configurationComponent$13 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./categoriesFieldComponents')).ConfigurationComponent;
      }));
      class CategoriesFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$13;
        }
        getConfigurationComponent() {
          return configurationComponent$13;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["EntityTypeName"] = "entityTypeName";
        ConfigurationValueKey["QualifierColumn"] = "qualifierColumn";
        ConfigurationValueKey["QualifierValue"] = "qualifierValue";
        return ConfigurationValueKey;
      })({});
      var editComponent$12 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./categoryFieldComponents')).EditComponent;
      }));
      var configurationComponent$12 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./categoryFieldComponents')).ConfigurationComponent;
      }));
      class CategoryFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$12;
        }
        getConfigurationComponent() {
          return configurationComponent$12;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["DefinedType"] = "DefinedType";
        ConfigurationValueKey["DefinedTypes"] = "DefinedTypes";
        ConfigurationValueKey["DefinedTypeValues"] = "DefinedTypeValues";
        ConfigurationValueKey["SelectableDefinedValues"] = "SelectableDefinedValues";
        ConfigurationValueKey["ConfigurationMode"] = "ConfigurationMode";
        return ConfigurationValueKey;
      })({});
      var editComponent$11 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./categorizedDefinedValueFieldComponents')).EditComponent;
      }));
      var configurationComponent$11 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./categorizedDefinedValueFieldComponents')).ConfigurationComponent;
      }));
      class CategorizedDefinedValueField extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$11;
        }
        getConfigurationComponent() {
          return configurationComponent$11;
        }
        isFilterable() {
          return false;
        }
      }

      var ConfigurationValueKey$n = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["ListItems"] = "listItems";
        return ConfigurationValueKey;
      }({});
      var editComponent$10 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./checkListFieldComponents')).EditComponent;
      }));
      var filterComponent$b = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./checkListFieldComponents')).FilterComponent;
      }));
      var configurationComponent$10 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./checkListFieldComponents')).ConfigurationComponent;
      }));
      class CheckListFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$n.ListItems]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var userValues = value.split(",");
            var selectedValues = values.filter(v => {
              var _v$key;
              return userValues.includes((_v$key = v.key) !== null && _v$key !== void 0 ? _v$key : "");
            });
            return selectedValues.map(v => v.value).join(", ");
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$10;
        }
        getConfigurationComponent() {
          return configurationComponent$10;
        }
        getSupportedComparisonTypes() {
          return containsComparisonTypes;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$b);
        }
        getFilterValueText(value, configurationValues) {
          if (value.value === "") {
            return "";
          }
          try {
            var _configurationValues$2;
            var rawValues = value.value.split(",");
            var values = JSON.parse((_configurationValues$2 = configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues[ConfigurationValueKey$n.Values]) !== null && _configurationValues$2 !== void 0 ? _configurationValues$2 : "[]");
            var selectedValues = values.filter(v => {
              var _v$value;
              return rawValues.includes((_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "");
            });
            if (selectedValues.length >= 1) {
              return "'".concat(selectedValues.map(v => v.value).join("' OR '"), "'");
            } else {
              return "";
            }
          } catch (_unused2) {
            return value.value;
          }
        }
        doesValueMatchFilter(value, filterValue, _configurationValues) {
          var _filterValue$value;
          var selectedValues = ((_filterValue$value = filterValue.value) !== null && _filterValue$value !== void 0 ? _filterValue$value : "").split(",").filter(v => v !== "").map(v => v.toLowerCase());
          var comparisonType = filterValue.comparisonType;
          if (comparisonType === ComparisonType.EqualTo) {
            comparisonType = ComparisonType.Contains;
          } else if (comparisonType === ComparisonType.NotEqualTo) {
            comparisonType = ComparisonType.DoesNotContain;
          }
          if (comparisonType === ComparisonType.IsBlank) {
            return value === "";
          } else if (comparisonType === ComparisonType.IsNotBlank) {
            return value !== "";
          }
          if (selectedValues.length > 0) {
            var _value$split$filter$m;
            var userValues = (_value$split$filter$m = value === null || value === void 0 ? void 0 : value.split(",").filter(v => v !== "").map(v => v.toLowerCase())) !== null && _value$split$filter$m !== void 0 ? _value$split$filter$m : [];
            if (comparisonType === ComparisonType.Contains) {
              var matchedCount = 0;
              var _iterator = _createForOfIteratorHelper(userValues),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var userValue = _step.value;
                  if (selectedValues.includes(userValue)) {
                    matchedCount += 1;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              return matchedCount > 0;
            } else {
              var _matchedCount = 0;
              var _iterator2 = _createForOfIteratorHelper(userValues),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _userValue = _step2.value;
                  if (selectedValues.includes(_userValue)) {
                    _matchedCount += 1;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              return _matchedCount !== selectedValues.length;
            }
          }
          return false;
        }
      }

      var editComponent$$ = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./colorFieldComponents')).EditComponent;
      }));
      var configurationComponent$$ = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./colorFieldComponents')).ConfigurationComponent;
      }));
      class ColorFieldType extends FieldTypeBase {
        getEditComponent() {
          return editComponent$$;
        }
        getConfigurationComponent() {
          return configurationComponent$$;
        }
      }

      var ConfigurationValueKey$m = function (ConfigurationValueKey) {
        ConfigurationValueKey["Colors"] = "colors";
        ConfigurationValueKey["AllowMultiple"] = "allowMultiple";
        return ConfigurationValueKey;
      }({});

      var valueDelimiter = "|";
      function deserializeColors(value) {
        return value.split(valueDelimiter);
      }
      function deserializeValue(value) {
        return value.split(valueDelimiter);
      }
      function getSelectedColors(colors, values) {
        return colors.filter(color => values.some(value => value.toLowerCase() === color.toLowerCase()));
      }
      function setCamouflagedClass(element, ancestorElement) {
        if (!ancestorElement) {
          ancestorElement = element.parentElement;
          if (!ancestorElement) {
            return;
          }
        }
        var elementColor = getBackgroundColor(element);
        var ancestorElementColor = getBackgroundColor(ancestorElement);
        if (elementColor.isSimilarTo(ancestorElementColor)) {
          element.classList.add(elementColor.luma > 0.5 ? "camouflaged-light" : "camouflaged-dark");
        } else {
          element.classList.remove("camouflaged-light");
          element.classList.remove("camouflaged-dark");
        }
      }
      function getBackgroundColor(element) {
        function getComputedBackgroundColor(element) {
          return window.getComputedStyle(element).getPropertyValue("background-color");
        }
        var defaultColor = new RockColor(getComputedBackgroundColor(document.body));
        var elementsToProcess = [element];
        while (elementsToProcess.length) {
          var elementToProcess = elementsToProcess.shift();
          if (!elementToProcess) {
            continue;
          }
          var backgroundColor = new RockColor(getComputedBackgroundColor(elementToProcess));
          if (backgroundColor.alpha !== 0 && backgroundColor.compareTo(defaultColor) !== 0) {
            return backgroundColor;
          } else if (elementToProcess.parentElement) {
            elementsToProcess.push(elementToProcess.parentElement);
          }
        }
        return defaultColor;
      }

      var editComponent$_ = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./colorSelectorComponents')).EditComponent;
      }));
      var configurationComponent$_ = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./colorSelectorComponents')).ConfigurationComponent;
      }));
      class ColorSelectorFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          try {
            var values = deserializeValue(value).map(clientKey => clientKey === null || clientKey === void 0 ? void 0 : clientKey.toLowerCase());
            var colors = deserializeColors(configurationValues[ConfigurationValueKey$m.Colors]);
            return getSelectedColors(colors, values).join(",");
          } catch (_unused) {
            return "";
          }
        }
        getHtmlValue(value, configurationValues) {
          var isEscaped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var htmlStringBuilder = [];
          var selectorsToProcess = [];
          var colors = deserializeColors(configurationValues[ConfigurationValueKey$m.Colors]);
          var values = deserializeValue(value);
          htmlStringBuilder.push("<div class='color-selector-items'>");
          var selectedColors = getSelectedColors(colors, values);
          var _iterator = _createForOfIteratorHelper(selectedColors),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var color = _step.value;
              var itemGuid = guid.newGuid();
              var containerId = "color-selector-item-container-".concat(itemGuid);
              var itemId = "color-selector-item-".concat(itemGuid);
              htmlStringBuilder.push("<div id=\"".concat(containerId, "\" class=\"color-selector-item-container\">"));
              htmlStringBuilder.push("<div id=\"".concat(itemId, "\" class=\"color-selector-item readonly\" style=\"background-color: ").concat(color, ";\">"));
              htmlStringBuilder.push("</div>");
              htmlStringBuilder.push("</div>");
              selectorsToProcess.push("#".concat(itemId));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          htmlStringBuilder.push("</div>");
          this.processSelectors(selectorsToProcess);
          var html = htmlStringBuilder.join("\n");
          if (isEscaped) {
            return escapeHtml(html);
          }
          return html;
        }
        getEditComponent() {
          return editComponent$_;
        }
        getConfigurationComponent() {
          return configurationComponent$_;
        }
        processSelectors(selectorsToProcess) {
          var maxAttempts = 5;
          var attemptCount = 0;
          function internalProcessSelectors() {
            if (!selectorsToProcess.length || attemptCount >= maxAttempts) {
              return;
            }
            nextTick(() => {
              attemptCount++;
              var failedSelectors = [];
              while (selectorsToProcess.length) {
                var selector = selectorsToProcess.shift();
                if (!selector) {
                  continue;
                }
                var element = document.querySelector(selector);
                if (!element) {
                  failedSelectors.push(selector);
                } else {
                  setCamouflagedClass(element);
                }
              }
              selectorsToProcess.push(...failedSelectors);
              if (selectorsToProcess.length) {
                internalProcessSelectors();
              }
            });
          }
          internalProcessSelectors();
        }
      }

      var ConfigurationValueKey$l = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        return ConfigurationValueKey;
      }({});
      var editComponent$Z = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./connectionTypeFieldComponents')).EditComponent;
      }));
      var configurationComponent$Z = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./connectionTypeFieldComponents')).ConfigurationComponent;
      }));
      class ConnectionTypeField extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$l.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var userValues = value.split(",");
            var selectedValues = values.filter(v => {
              var _v$value;
              return userValues.includes((_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "");
            });
            return selectedValues.map(v => v.text).map(v => v === null || v === void 0 ? void 0 : v.split(":").pop()).join(", ");
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$Z;
        }
        getConfigurationComponent() {
          return configurationComponent$Z;
        }
      }

      var ConfigurationValueKey$k = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        return ConfigurationValueKey;
      }({});
      var editComponent$Y = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./connectionTypesFieldComponents')).EditComponent;
      }));
      var configurationComponent$Y = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./connectionTypesFieldComponents')).ConfigurationComponent;
      }));
      class ConnectionTypesField extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$k.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var userValues = value.split(",");
            var selectedValues = values.filter(v => {
              var _v$value;
              return userValues.includes((_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "");
            });
            return selectedValues.map(v => v.text).map(v => v === null || v === void 0 ? void 0 : v.split(":").pop()).join(", ");
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$Y;
        }
        getConfigurationComponent() {
          return configurationComponent$Y;
        }
      }

      var ConfigurationValueKey$j = function (ConfigurationValueKey) {
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["Options"] = "options";
        return ConfigurationValueKey;
      }({});
      var editComponent$X = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./communicationPreferenceFieldComponents')).EditComponent;
      }));
      var configurationComponent$X = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./communicationPreferenceFieldComponents')).ConfigurationComponent;
      }));
      class CommunicationPreferenceField extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          var _configurationValues$, _ref3, _publicValue$text;
          var options = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$j.Options]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
          var publicValue = options.find(x => x.value === value);
          return (_ref3 = (_publicValue$text = publicValue === null || publicValue === void 0 ? void 0 : publicValue.text) !== null && _publicValue$text !== void 0 ? _publicValue$text : value) !== null && _ref3 !== void 0 ? _ref3 : "";
        }
        getEditComponent() {
          return editComponent$X;
        }
        getConfigurationComponent() {
          return configurationComponent$X;
        }
        isFilterable() {
          return false;
        }
      }

      var ConfigurationValueKey$i = function (ConfigurationValueKey) {
        ConfigurationValueKey["ClientValues"] = "clientValues";
        ConfigurationValueKey["IncludeInactive"] = "includeInactive";
        return ConfigurationValueKey;
      }({});
      var editComponent$W = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./communicationTemplateFieldComponents')).EditComponent;
      }));
      var configurationComponent$W = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./communicationTemplateFieldComponents')).ConfigurationComponent;
      }));
      class CommunicationTemplateFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === undefined || value === null || value === "") {
            return "";
          }
          try {
            var _configurationValues$, _selectedValue$text;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$i.ClientValues]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var selectedValue = values.find(o => o.value === value);
            return (_selectedValue$text = selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.text) !== null && _selectedValue$text !== void 0 ? _selectedValue$text : value;
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$W;
        }
        getConfigurationComponent() {
          return configurationComponent$W;
        }
      }

      var editComponent$V = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./currencyFieldComponents')).EditComponent;
      }));
      var configurationComponent$V = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./currencyFieldComponents')).ConfigurationComponent;
      }));
      class CurrencyFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var _toCurrencyOrNull;
          return (_toCurrencyOrNull = toCurrencyOrNull(value)) !== null && _toCurrencyOrNull !== void 0 ? _toCurrencyOrNull : "";
        }
        getEditComponent() {
          return editComponent$V;
        }
        getConfigurationComponent() {
          return configurationComponent$V;
        }
        getSupportedComparisonTypes() {
          return numericComparisonTypes;
        }
      }

      var ConfigurationValueKey$h = function (ConfigurationValueKey) {
        ConfigurationValueKey["Format"] = "format";
        ConfigurationValueKey["DisplayDiff"] = "displayDiff";
        ConfigurationValueKey["DisplayCurrentOption"] = "displayCurrentOption";
        ConfigurationValueKey["DatePickerControlType"] = "datePickerControlType";
        ConfigurationValueKey["FutureYearCount"] = "futureYearCount";
        return ConfigurationValueKey;
      }({});
      var editComponent$U = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateFieldComponents')).EditComponent;
      }));
      var configurationComponent$U = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateFieldComponents')).ConfigurationComponent;
      }));
      var filterComponent$a = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateFieldComponents')).FilterComponent;
      }));
      class DateFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (this.isCurrentDateValue(value)) {
            return this.getCurrentDateText(value);
          } else if (value) {
            var dateValue = RockDateTime.parseISO(value);
            var dateFormatTemplate = configurationValues[ConfigurationValueKey$h.Format] || "MM/dd/yyy";
            if (dateValue !== null) {
              var textValue = dateValue.toASPString(dateFormatTemplate);
              var displayDiff = asBoolean(configurationValues[ConfigurationValueKey$h.DisplayDiff]);
              if (displayDiff === true) {
                textValue = "".concat(textValue, " ").concat(dateValue.toElapsedString());
              }
              return textValue;
            } else {
              return "";
            }
          } else {
            return "";
          }
        }
        getEditComponent() {
          return editComponent$U;
        }
        getConfigurationComponent() {
          return configurationComponent$U;
        }
        getSupportedComparisonTypes() {
          return dateComparisonTypes;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$a, {
            updateComparisonTypeNames: options => {
              options.filter(o => o.value === ComparisonType.Between.toString()).forEach(o => o.text = "Range");
            }
          });
        }
        getFilterValueDescription(value, configurationValues) {
          if (value.comparisonType === ComparisonType.Between) {
            return "During '".concat(this.getFilterValueText(value, configurationValues), "'");
          }
          return super.getFilterValueDescription(value, configurationValues);
        }
        getFilterValueText(value, _configurationValues) {
          var filterValues = value.value.split("\t");
          if (value.comparisonType === ComparisonType.Between && filterValues.length > 1) {
            var _range$timeValue, _range$timeUnit;
            var range = parseSlidingDateRangeString(filterValues[1]);
            if (range === null) {
              return filterValues[1];
            }
            var rangeTypeText = getRangeTypeText(range.rangeType);
            var timeUnitValue = (_range$timeValue = range.timeValue) !== null && _range$timeValue !== void 0 ? _range$timeValue : 1;
            var timeUnitText = getTimeUnitText((_range$timeUnit = range.timeUnit) !== null && _range$timeUnit !== void 0 ? _range$timeUnit : TimeUnit.Hour) + (timeUnitValue !== 1 ? "s" : "");
            if (range.rangeType === RangeType.Current) {
              return "".concat(rangeTypeText, " ").concat(timeUnitText);
            } else if ([RangeType.Last, RangeType.Previous, RangeType.Next, RangeType.Upcoming].includes(range.rangeType)) {
              return "".concat(rangeTypeText, " ").concat(timeUnitValue, " ").concat(timeUnitText);
            } else {
              if (range.lowerDate && range.upperDate) {
                return "".concat(range.lowerDate, " to ").concat(range.upperDate);
              } else if (range.lowerDate) {
                return "from ".concat(range.lowerDate);
              } else if (range.upperDate) {
                return "through ".concat(range.upperDate);
              } else {
                return "";
              }
            }
          } else {
            if (this.isCurrentDateValue(filterValues[0])) {
              return "'".concat(this.getCurrentDateText(filterValues[0]), "'");
            }
            return filterValues[0] ? "'".concat(filterValues[0], "'") : "";
          }
        }
        doesValueMatchFilter(value, filterValue, configurationValues) {
          if (!filterValue.comparisonType) {
            return false;
          }
          var filterValueValues = filterValue.value.split("\t");
          var valueDate = RockDateTime.parseISO(value !== null && value !== void 0 ? value : "");
          if (filterValue.comparisonType === ComparisonType.IsBlank) {
            return valueDate === null;
          } else if (filterValue.comparisonType === ComparisonType.IsNotBlank) {
            return valueDate !== null;
          } else if (valueDate === null) {
            return false;
          }
          if (filterValue.comparisonType === ComparisonType.Between && filterValueValues.length > 1) {
            var slidingRange = parseSlidingDateRangeString(filterValueValues[1]);
            if (!slidingRange) {
              return false;
            }
            var dateRange = calculateSlidingDateRange(slidingRange);
            if (!dateRange.start || valueDate.toMilliseconds() < dateRange.start.toMilliseconds()) {
              return false;
            }
            if (dateRange.end && valueDate.toMilliseconds() >= dateRange.end.toMilliseconds()) {
              return false;
            }
            return true;
          }
          var filterDate = this.getRelativeOrAbsoluteDate(filterValueValues[0]);
          if (filterDate === null) {
            return false;
          }
          var newFilterValue = {
            comparisonType: filterValue.comparisonType,
            value: filterDate.toASPString("yyyyMMdd")
          };
          return super.doesValueMatchFilter(valueDate.toASPString("yyyyMMdd"), newFilterValue, configurationValues);
        }
        isCurrentDateValue(value) {
          return value.indexOf("CURRENT") === 0;
        }
        getCurrentDateText(value) {
          var parts = (value !== null && value !== void 0 ? value : "").split(":");
          var diff = parts.length === 2 ? toNumber(parts[1]) : 0;
          if (diff === 1) {
            return "Current Date plus 1 day";
          } else if (diff > 0) {
            return "Current Date plus ".concat(diff, " days");
          } else if (diff === -1) {
            return "Current Date minus 1 day";
          } else if (diff < 0) {
            return "Current Date minus ".concat(Math.abs(diff), " days");
          } else {
            return "Current Date";
          }
        }
        getRelativeOrAbsoluteDate(value) {
          if (!this.isCurrentDateValue(value)) {
            return RockDateTime.parseISO(value);
          }
          var today = RockDateTime.now().date;
          var valueParts = value.split(":");
          if (valueParts.length > 1) {
            return today.addDays(toNumber(valueParts[1]));
          }
          return today;
        }
      }

      var editComponent$T = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateRangeFieldComponents')).EditComponent;
      }));
      var configurationComponent$T = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateRangeFieldComponents')).ConfigurationComponent;
      }));
      class DateRangeFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var dateParts = (value !== null && value !== void 0 ? value : "").split(",");
          if (dateParts.length !== 2) {
            return "";
          }
          var lowerDateParts = /^(\d+)-(\d+)-(\d+)/.exec(dateParts[0]);
          var upperDateParts = /^(\d+)-(\d+)-(\d+)/.exec(dateParts[1]);
          var lowerDate = lowerDateParts !== null ? RockDateTime.fromParts(toNumber(lowerDateParts[1]), toNumber(lowerDateParts[2]), toNumber(lowerDateParts[3])) : null;
          var upperDate = upperDateParts !== null ? RockDateTime.fromParts(toNumber(upperDateParts[1]), toNumber(upperDateParts[2]), toNumber(upperDateParts[3])) : null;
          if (lowerDate !== null && upperDate !== null) {
            return "".concat(lowerDate.toLocaleString(DateTimeFormat.DateShort), " to ").concat(upperDate.toLocaleString(DateTimeFormat.DateShort));
          } else if (lowerDate !== null) {
            return "from ".concat(lowerDate.toLocaleString(DateTimeFormat.DateShort));
          } else if (upperDate !== null) {
            return "through ".concat(upperDate.toLocaleString(DateTimeFormat.DateShort));
          } else {
            return "";
          }
        }
        getEditComponent() {
          return editComponent$T;
        }
        getConfigurationComponent() {
          return configurationComponent$T;
        }
        isFilterable() {
          return false;
        }
      }

      var ConfigurationValueKey$g = function (ConfigurationValueKey) {
        ConfigurationValueKey["Format"] = "format";
        ConfigurationValueKey["DisplayAsElapsedTime"] = "displayDiff";
        ConfigurationValueKey["DisplayCurrentOption"] = "displayCurrentOption";
        return ConfigurationValueKey;
      }({});
      var editComponent$S = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateTimeFieldComponents')).EditComponent;
      }));
      var configurationComponent$S = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateTimeFieldComponents')).ConfigurationComponent;
      }));
      var filterComponent$9 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateTimeFieldComponents')).FilterComponent;
      }));
      class DateTimeFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (this.isCurrentDateValue(value)) {
            return this.getCurrentDateText(value);
          } else if (value) {
            var dateValue = RockDateTime.parseISO(value);
            var dateFormatTemplate = configurationValues[ConfigurationValueKey$g.Format] || "MM/dd/yyy";
            if (dateValue !== null) {
              var textValue = dateValue.toASPString(dateFormatTemplate);
              var displayDiff = asBoolean(configurationValues[ConfigurationValueKey$g.DisplayAsElapsedTime]);
              if (displayDiff === true) {
                textValue = "".concat(textValue, " ").concat(dateValue.toElapsedString());
              }
              return textValue;
            } else {
              return "";
            }
          } else {
            return "";
          }
        }
        getEditComponent() {
          return editComponent$S;
        }
        getConfigurationComponent() {
          return configurationComponent$S;
        }
        getSupportedComparisonTypes() {
          return dateComparisonTypes;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$9, {
            updateComparisonTypeNames: options => {
              options.filter(o => o.value === ComparisonType.Between.toString()).forEach(o => o.text = "Range");
            }
          });
        }
        getFilterValueDescription(value, configurationValues) {
          if (value.comparisonType === ComparisonType.Between) {
            return "During '".concat(this.getFilterValueText(value, configurationValues), "'");
          }
          return super.getFilterValueDescription(value, configurationValues);
        }
        getFilterValueText(value, _configurationValues) {
          var filterValues = value.value.split("\t");
          if (value.comparisonType === ComparisonType.Between && filterValues.length > 1) {
            var _range$timeValue, _range$timeUnit;
            var range = parseSlidingDateRangeString(filterValues[1]);
            if (range === null) {
              return filterValues[1];
            }
            var rangeTypeText = getRangeTypeText(range.rangeType);
            var timeUnitValue = (_range$timeValue = range.timeValue) !== null && _range$timeValue !== void 0 ? _range$timeValue : 1;
            var timeUnitText = getTimeUnitText((_range$timeUnit = range.timeUnit) !== null && _range$timeUnit !== void 0 ? _range$timeUnit : TimeUnit.Hour) + (timeUnitValue !== 1 ? "s" : "");
            if (range.rangeType === RangeType.Current) {
              return "".concat(rangeTypeText, " ").concat(timeUnitText);
            } else if ([RangeType.Last, RangeType.Previous, RangeType.Next, RangeType.Upcoming].includes(range.rangeType)) {
              return "".concat(rangeTypeText, " ").concat(timeUnitValue, " ").concat(timeUnitText);
            } else {
              if (range.lowerDate && range.upperDate) {
                return "".concat(range.lowerDate, " to ").concat(range.upperDate);
              } else if (range.lowerDate) {
                return "from ".concat(range.lowerDate);
              } else if (range.upperDate) {
                return "through ".concat(range.upperDate);
              } else {
                return "";
              }
            }
          } else {
            if (this.isCurrentDateValue(filterValues[0])) {
              return "'".concat(this.getCurrentDateText(filterValues[0]), "'");
            }
            return filterValues[0] ? "'".concat(filterValues[0], "'") : "";
          }
        }
        isCurrentDateValue(value) {
          return value.indexOf("CURRENT") === 0;
        }
        getCurrentDateText(value) {
          var parts = value.split(":");
          var diff = parts.length === 2 ? toNumber(parts[1]) : 0;
          if (diff === 1) {
            return "Current Time plus 1 minute";
          } else if (diff > 0) {
            return "Current Time plus ".concat(diff, " minutes");
          } else if (diff === -1) {
            return "Current Time minus 1 minute";
          } else if (diff < 0) {
            return "Current Time minus ".concat(Math.abs(diff), " minutes");
          } else {
            return "Current Time";
          }
        }
      }

      var editComponent$R = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dayOfWeekFieldComponents')).EditComponent;
      }));
      var filterComponent$8 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dayOfWeekFieldComponents')).FilterComponent;
      }));
      var configurationComponent$R = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dayOfWeekFieldComponents')).ConfigurationComponent;
      }));
      class DayOfWeekFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var dayValue = toNumberOrNull(value);
          if (dayValue === null) {
            return "";
          } else {
            switch (dayValue) {
              case DayOfWeek.Sunday:
                return "Sunday";
              case DayOfWeek.Monday:
                return "Monday";
              case DayOfWeek.Tuesday:
                return "Tuesday";
              case DayOfWeek.Wednesday:
                return "Wednesday";
              case DayOfWeek.Thursday:
                return "Thursday";
              case DayOfWeek.Friday:
                return "Friday";
              case DayOfWeek.Saturday:
                return "Saturday";
              default:
                return "";
            }
          }
        }
        getEditComponent() {
          return editComponent$R;
        }
        getConfigurationComponent() {
          return configurationComponent$R;
        }
        getFilterComponent() {
          return getStandardFilterComponent("Is", filterComponent$8);
        }
      }

      var editComponent$Q = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./daysOfWeekFieldComponents')).EditComponent;
      }));
      var configurationComponent$Q = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./daysOfWeekFieldComponents')).ConfigurationComponent;
      }));
      class DaysOfWeekFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          if (value === null || value === undefined || value === "") {
            return "";
          }
          return value.split(",").map(v => {
            var dayValue = toNumberOrNull(v);
            if (dayValue === null) {
              return "";
            } else {
              switch (dayValue) {
                case DayOfWeek.Sunday:
                  return "Sunday";
                case DayOfWeek.Monday:
                  return "Monday";
                case DayOfWeek.Tuesday:
                  return "Tuesday";
                case DayOfWeek.Wednesday:
                  return "Wednesday";
                case DayOfWeek.Thursday:
                  return "Thursday";
                case DayOfWeek.Friday:
                  return "Friday";
                case DayOfWeek.Saturday:
                  return "Saturday";
                default:
                  return "";
              }
            }
          }).filter(v => v != "").join(", ");
        }
        getEditComponent() {
          return editComponent$Q;
        }
        getConfigurationComponent() {
          return configurationComponent$Q;
        }
        getSupportedComparisonTypes() {
          return containsComparisonTypes;
        }
      }

      var editComponent$P = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./decimalFieldComponents')).EditComponent;
      }));
      var configurationComponent$P = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./decimalFieldComponents')).ConfigurationComponent;
      }));
      class DecimalFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var _toNumberOrNull$toStr, _toNumberOrNull;
          return (_toNumberOrNull$toStr = (_toNumberOrNull = toNumberOrNull(value)) === null || _toNumberOrNull === void 0 ? void 0 : _toNumberOrNull.toString()) !== null && _toNumberOrNull$toStr !== void 0 ? _toNumberOrNull$toStr : "";
        }
        getEditComponent() {
          return editComponent$P;
        }
        getConfigurationComponent() {
          return configurationComponent$P;
        }
        getSupportedComparisonTypes() {
          return numericComparisonTypes;
        }
      }

      var editComponent$O = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./decimalRangeFieldComponents')).EditComponent;
      }));
      var configurationComponent$O = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./decimalRangeFieldComponents')).ConfigurationComponent;
      }));
      class DecimalRangeFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          if (value === null || value === undefined || value === "" || value === ",") {
            return "";
          }
          var numbers = value.split(",").map(v => toNumberOrNull(v));
          if (numbers.length !== 2 || numbers[0] === null && numbers[1] === null) {
            return "";
          }
          if (numbers[0] === null) {
            return "through ".concat(numbers[1]);
          } else if (numbers[1] === null) {
            return "from ".concat(numbers[0]);
          } else {
            return "".concat(numbers[0], " to ").concat(numbers[1]);
          }
        }
        getEditComponent() {
          return editComponent$O;
        }
        getConfigurationComponent() {
          return configurationComponent$O;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationPropertyKey) {
        ConfigurationPropertyKey["DefinedTypes"] = "definedTypes";
        ConfigurationPropertyKey["DefinedValues"] = "definedValues";
        return ConfigurationPropertyKey;
      })({});
      var ConfigurationValueKey$f = function (ConfigurationValueKey) {
        ConfigurationValueKey["DefinedType"] = "definedtype";
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["AllowMultiple"] = "allowmultiple";
        ConfigurationValueKey["DisplayDescription"] = "displaydescription";
        ConfigurationValueKey["EnhancedSelection"] = "enhancedselection";
        ConfigurationValueKey["IncludeInactive"] = "includeInactive";
        ConfigurationValueKey["SelectableValues"] = "selectableValues";
        ConfigurationValueKey["AllowAddingNewValues"] = "AllowAddingNewValues";
        ConfigurationValueKey["RepeatColumns"] = "RepeatColumns";
        return ConfigurationValueKey;
      }({});
      var editComponent$N = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./definedValueFieldComponents')).EditComponent;
      }));
      var configurationComponent$N = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./definedValueFieldComponents')).ConfigurationComponent;
      }));
      var filterComponent$7 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./definedValueFieldComponents')).FilterComponent;
      }));
      class DefinedValueFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          try {
            var clientValue = JSON.parse(value !== null && value !== void 0 ? value : "");
            try {
              var _configurationValues$;
              var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$f.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
              var displayDescription = asBoolean(configurationValues[ConfigurationValueKey$f.DisplayDescription]);
              var rawValues = clientValue.value.split(",");
              return values.filter(v => rawValues.includes(v.value)).map(v => displayDescription && v.description ? v.description : v.text).join(", ");
            } catch (_unused) {
              var _clientValue$value;
              return (_clientValue$value = clientValue.value) !== null && _clientValue$value !== void 0 ? _clientValue$value : "";
            }
          } catch (_unused2) {
            return "";
          }
        }
        getEditComponent() {
          return editComponent$N;
        }
        getConfigurationComponent() {
          return configurationComponent$N;
        }
        getSupportedComparisonTypes() {
          return containsComparisonTypes;
        }
        getFilterValueText(value, configurationValues) {
          try {
            var _value$value, _configurationValues$2;
            var clientValue = JSON.parse((_value$value = value.value) !== null && _value$value !== void 0 ? _value$value : "");
            var values = JSON.parse((_configurationValues$2 = configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues[ConfigurationValueKey$f.Values]) !== null && _configurationValues$2 !== void 0 ? _configurationValues$2 : "[]");
            var useDescription = asBoolean(configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues[ConfigurationValueKey$f.DisplayDescription]);
            var rawValues = clientValue.value.split(",");
            var text = values.filter(v => rawValues.includes(v.value)).map(v => useDescription ? v.description : v.text).join("' OR '");
            return text ? "'".concat(text, "'") : "";
          } catch (_unused3) {
            return "";
          }
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$7);
        }
        doesValueMatchFilter(value, filterValue, _configurationValues) {
          var _filterValue$value;
          var clientValue = JSON.parse(value || "{}");
          var selectedValues = ((_filterValue$value = filterValue.value) !== null && _filterValue$value !== void 0 ? _filterValue$value : "").split(",").filter(v => v !== "").map(v => v.toLowerCase());
          var comparisonType = filterValue.comparisonType;
          if (comparisonType === ComparisonType.EqualTo) {
            comparisonType = ComparisonType.Contains;
          } else if (comparisonType === ComparisonType.NotEqualTo) {
            comparisonType = ComparisonType.DoesNotContain;
          }
          if (comparisonType === ComparisonType.IsBlank) {
            var _clientValue$value2;
            return ((_clientValue$value2 = clientValue.value) !== null && _clientValue$value2 !== void 0 ? _clientValue$value2 : "") === "";
          } else if (comparisonType === ComparisonType.IsNotBlank) {
            var _clientValue$value3;
            return ((_clientValue$value3 = clientValue.value) !== null && _clientValue$value3 !== void 0 ? _clientValue$value3 : "") !== "";
          }
          if (selectedValues.length > 0) {
            var _clientValue$value4;
            var userValues = ((_clientValue$value4 = clientValue.value) !== null && _clientValue$value4 !== void 0 ? _clientValue$value4 : "").toLowerCase().split(",").filter(v => v !== "");
            if (comparisonType === ComparisonType.Contains) {
              var matchedCount = 0;
              var _iterator = _createForOfIteratorHelper(userValues),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var userValue = _step.value;
                  if (selectedValues.includes(userValue)) {
                    matchedCount += 1;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              return matchedCount > 0;
            } else {
              var _matchedCount = 0;
              var _iterator2 = _createForOfIteratorHelper(userValues),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _userValue = _step2.value;
                  if (selectedValues.includes(_userValue)) {
                    _matchedCount += 1;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              return _matchedCount !== selectedValues.length;
            }
          }
          return false;
        }
      }

      var ConfigurationValueKey$e = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["DisplayDescription"] = "displaydescription";
        return ConfigurationValueKey;
      }({});
      var editComponent$M = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./definedValueRangeFieldComponents')).EditComponent;
      }));
      class DefinedValueRangeFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          try {
            var clientValue = JSON.parse(value);
            try {
              var _configurationValues$, _clientValue$value;
              var values = new List(JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$e.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]"));
              var displayDescription = asBoolean(configurationValues[ConfigurationValueKey$e.DisplayDescription]);
              var rawValues = ((_clientValue$value = clientValue.value) !== null && _clientValue$value !== void 0 ? _clientValue$value : "").split(",");
              if (rawValues.length !== 2) {
                return value;
              }
              var lowerValue = values.firstOrUndefined(v => (v === null || v === void 0 ? void 0 : v.value) === rawValues[0]);
              var upperValue = values.firstOrUndefined(v => (v === null || v === void 0 ? void 0 : v.value) === rawValues[1]);
              if (lowerValue === undefined && upperValue === undefined) {
                return "";
              }
              if (displayDescription) {
                var _lowerValue$descripti, _upperValue$descripti;
                return "".concat((_lowerValue$descripti = lowerValue === null || lowerValue === void 0 ? void 0 : lowerValue.description) !== null && _lowerValue$descripti !== void 0 ? _lowerValue$descripti : "", " to ").concat((_upperValue$descripti = upperValue === null || upperValue === void 0 ? void 0 : upperValue.description) !== null && _upperValue$descripti !== void 0 ? _upperValue$descripti : "");
              } else {
                var _lowerValue$text, _upperValue$text;
                return "".concat((_lowerValue$text = lowerValue === null || lowerValue === void 0 ? void 0 : lowerValue.text) !== null && _lowerValue$text !== void 0 ? _lowerValue$text : "", " to ").concat((_upperValue$text = upperValue === null || upperValue === void 0 ? void 0 : upperValue.text) !== null && _upperValue$text !== void 0 ? _upperValue$text : "");
              }
            } catch (_unused) {
              var _clientValue$value2;
              return (_clientValue$value2 = clientValue.value) !== null && _clientValue$value2 !== void 0 ? _clientValue$value2 : "";
            }
          } catch (_unused2) {
            return value;
          }
        }
        getCondensedTextValue(value, _configurationValues) {
          try {
            var _clientValue$text;
            var clientValue = JSON.parse(value !== null && value !== void 0 ? value : "");
            return (_clientValue$text = clientValue.text) !== null && _clientValue$text !== void 0 ? _clientValue$text : "";
          } catch (_unused3) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$M;
        }
        isFilterable() {
          return false;
        }
      }

      var editComponent$L = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./emailFieldComponents')).EditComponent;
      }));
      var filterComponent$6 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./emailFieldComponents')).FilterComponent;
      }));
      var configurationComponent$M = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./emailFieldComponents')).ConfigurationComponent;
      }));
      class EmailFieldType extends FieldTypeBase {
        getHtmlValue(value, configurationValues) {
          var isEscaped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var textValue = this.getTextValue(value, configurationValues);
          var html = textValue ? "<a href=\"mailto:".concat(textValue, "\">").concat(textValue, "</a>") : "";
          if (isEscaped) {
            escapeHtml(html);
          }
          return html;
        }
        getEditComponent() {
          return editComponent$L;
        }
        getConfigurationComponent() {
          return configurationComponent$M;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$6);
        }
        getSupportedComparisonTypes() {
          return stringComparisonTypes;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["DisplayPublicName"] = "displaypublicname";
        ConfigurationValueKey["DisplayChildItemCounts"] = "displaychilditemcounts";
        ConfigurationValueKey["DisplayActiveItemsOnly"] = "displayactiveitemsonly";
        ConfigurationValueKey["EnhancedForLongLists"] = "enhancedforlonglists";
        return ConfigurationValueKey;
      })({});
      var editComponent$K = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./financialAccountFieldComponents')).EditComponent;
      }));
      var configurationComponent$L = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./financialAccountFieldComponents')).ConfigurationComponent;
      }));
      class FinancialAccountFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$K;
        }
        getConfigurationComponent() {
          return configurationComponent$L;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["DisplayPublicName"] = "displaypublicname";
        ConfigurationValueKey["DisplayChildItemCounts"] = "displaychilditemcounts";
        ConfigurationValueKey["DisplayActiveItemsOnly"] = "displayactiveitemsonly";
        ConfigurationValueKey["EnhancedForLongLists"] = "enhancedforlonglists";
        return ConfigurationValueKey;
      })({});
      var editComponent$J = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./financialAccountsFieldComponents')).EditComponent;
      }));
      var configurationComponent$K = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./financialAccountsFieldComponents')).ConfigurationComponent;
      }));
      class FinancialAccountsFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$J;
        }
        getConfigurationComponent() {
          return configurationComponent$K;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationPropertyKey) {
        ConfigurationPropertyKey["BinaryFileTypes"] = "binaryFileTypes";
        return ConfigurationPropertyKey;
      })({});
      (function (ConfigurationValueKey) {
        ConfigurationValueKey["BinaryFileType"] = "binaryFileType";
        return ConfigurationValueKey;
      })({});
      var editComponent$I = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./fileFieldComponents')).EditComponent;
      }));
      var configurationComponent$J = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./fileFieldComponents')).ConfigurationComponent;
      }));
      class FileFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          try {
            var _realValue$text;
            var realValue = JSON.parse(value);
            return (_realValue$text = realValue.text) !== null && _realValue$text !== void 0 ? _realValue$text : "";
          } catch (_unused) {
            return value;
          }
        }
        getHtmlValue(value, _configurationValues) {
          var isEscaped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          try {
            var _realValue$text2;
            var realValue = JSON.parse(value !== null && value !== void 0 ? value : "");
            var html = "<a href=\"/GetFile.ashx?guid=".concat(realValue.value, "\" title=\"").concat(escapeHtml((_realValue$text2 = realValue.text) !== null && _realValue$text2 !== void 0 ? _realValue$text2 : ""), "\" class=\"btn btn-xs btn-default\">View</a>");
            if (isEscaped) {
              escapeHtml(html);
            }
            return html;
          } catch (_unused2) {
            if (isEscaped) {
              escapeHtml(value !== null && value !== void 0 ? value : "");
            }
            return value !== null && value !== void 0 ? value : "";
          }
        }
        getEditComponent() {
          return editComponent$I;
        }
        getConfigurationComponent() {
          return configurationComponent$J;
        }
        getSupportedComparisonTypes() {
          return ComparisonType.IsBlank | ComparisonType.IsNotBlank;
        }
      }

      var editComponent$H = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./genderFieldComponents')).EditComponent;
      }));
      var configurationComponent$I = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./genderFieldComponents')).ConfigurationComponent;
      }));
      class GenderFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var numberValue = toNumberOrNull(value);
          if (numberValue === 0) {
            return "Unknown";
          } else if (numberValue === 1) {
            return "Male";
          } else if (numberValue === 2) {
            return "Female";
          } else {
            return "";
          }
        }
        getEditComponent() {
          return editComponent$H;
        }
        getConfigurationComponent() {
          return configurationComponent$I;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["GroupRolePickerLabel"] = "groupAndRolePickerLabel";
        return ConfigurationValueKey;
      })({});
      var editComponent$G = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupAndRoleFieldComponents')).EditComponent;
      }));
      var configurationComponent$H = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupAndRoleFieldComponents')).ConfigurationComponent;
      }));
      class GroupAndRoleFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$G;
        }
        getConfigurationComponent() {
          return configurationComponent$H;
        }
        isFilterable() {
          return false;
        }
      }

      var editComponent$F = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupFieldComponents')).EditComponent;
      }));
      var configurationComponent$G = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupFieldComponents')).ConfigurationComponent;
      }));
      class GroupFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$F;
        }
        getConfigurationComponent() {
          return configurationComponent$G;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["GroupType"] = "groupTypeGuid";
        ConfigurationValueKey["GroupTypeLocations"] = "groupTypeLocations";
        return ConfigurationValueKey;
      })({});
      var editComponent$E = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupLocationTypeFieldComponents')).EditComponent;
      }));
      var configurationComponent$F = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupLocationTypeFieldComponents')).ConfigurationComponent;
      }));
      class GroupLocationTypeFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$E;
        }
        getConfigurationComponent() {
          return configurationComponent$F;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["GroupType"] = "grouptype";
        return ConfigurationValueKey;
      })({});
      var editComponent$D = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupRoleFieldComponents')).EditComponent;
      }));
      var configurationComponent$E = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupRoleFieldComponents')).ConfigurationComponent;
      }));
      class GroupRoleFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$D;
        }
        getConfigurationComponent() {
          return configurationComponent$E;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["AllowMultipleValues"] = "allowmultiple";
        ConfigurationValueKey["EnhanceForLongLists"] = "enhancedselection";
        ConfigurationValueKey["Group"] = "group";
        return ConfigurationValueKey;
      })({});
      var editComponent$C = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupMemberFieldComponents')).EditComponent;
      }));
      var configurationComponent$D = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupMemberFieldComponents')).ConfigurationComponent;
      }));
      class GroupMemberFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$C;
        }
        getConfigurationComponent() {
          return configurationComponent$D;
        }
        isFilterable() {
          return false;
        }
      }

      var ConfigurationValueKey$d = function (ConfigurationValueKey) {
        ConfigurationValueKey["GroupTypePurposeValueGuid"] = "groupTypePurposeValueGuid";
        ConfigurationValueKey["GroupTypePurposes"] = "groupTypePurposes";
        ConfigurationValueKey["Values"] = "values";
        return ConfigurationValueKey;
      }({});
      var editComponent$B = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupTypeFieldComponents')).EditComponent;
      }));
      var configurationComponent$C = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupTypeFieldComponents')).ConfigurationComponent;
      }));
      class GroupTypeField extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === undefined || value === null || value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$d.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var selectedValues = values.filter(o => o.value === value);
            return selectedValues.map(o => o.text).join(", ");
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$B;
        }
        getConfigurationComponent() {
          return configurationComponent$C;
        }
      }

      var ConfigurationValueKey$c = function (ConfigurationValueKey) {
        ConfigurationValueKey["EnhancedSelection"] = "enhancedselection";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["Values"] = "values";
        return ConfigurationValueKey;
      }({});
      var editComponent$A = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupTypesFieldComponents')).EditComponent;
      }));
      var configurationComponent$B = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./groupTypesFieldComponents')).ConfigurationComponent;
      }));
      class GroupTypesFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === undefined || value === null || value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$c.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var userValues = value.split(",");
            var selectedValues = values.filter(o => {
              var _o$value;
              return userValues.includes((_o$value = o.value) !== null && _o$value !== void 0 ? _o$value : "");
            });
            return selectedValues.map(o => o.text).join(", ");
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$A;
        }
        getConfigurationComponent() {
          return configurationComponent$B;
        }
      }

      (function (ConfigurationPropertyKey) {
        ConfigurationPropertyKey["BinaryFileTypes"] = "binaryFileTypes";
        return ConfigurationPropertyKey;
      })({});
      (function (ConfigurationValueKey) {
        ConfigurationValueKey["BinaryFileType"] = "binaryFileType";
        ConfigurationValueKey["FormatAsLink"] = "formatAsLink";
        return ConfigurationValueKey;
      })({});
      var editComponent$z = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./imageFieldComponents')).EditComponent;
      }));
      var configurationComponent$A = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./imageFieldComponents')).ConfigurationComponent;
      }));
      class ImageFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          try {
            var _realValue$text;
            var realValue = JSON.parse(value !== null && value !== void 0 ? value : "");
            if (!realValue.value) {
              return "";
            }
            return (_realValue$text = realValue.text) !== null && _realValue$text !== void 0 ? _realValue$text : "";
          } catch (_unused) {
            return value;
          }
        }
        getHtmlValue(value, _configurationValues) {
          var isEscaped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          try {
            var realValue = JSON.parse(value !== null && value !== void 0 ? value : "");
            if (!realValue.value) {
              return "";
            }
            var html = "<img src=\"/GetImage.ashx?guid=".concat(realValue.value, "\" class=\"img-responsive\" />");
            if (isEscaped) {
              escapeHtml(html);
            }
            return html;
          } catch (_unused2) {
            if (isEscaped) {
              escapeHtml(value !== null && value !== void 0 ? value : "");
            }
            return value !== null && value !== void 0 ? value : "";
          }
        }
        getCondensedHtmlValue(value, _configurationValues) {
          var isEscaped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          try {
            var realValue = JSON.parse(value !== null && value !== void 0 ? value : "");
            if (!realValue.value) {
              return "";
            }
            var html = "<img src=\"/GetImage.ashx?guid=".concat(realValue.value, "&width=120\" class=\"img-responsive\" />");
            if (isEscaped) {
              return escapeHtml(html);
            }
            return html;
          } catch (_unused3) {
            if (isEscaped) {
              escapeHtml(value !== null && value !== void 0 ? value : "");
            }
            return value !== null && value !== void 0 ? value : "";
          }
        }
        getEditComponent() {
          return editComponent$z;
        }
        getConfigurationComponent() {
          return configurationComponent$A;
        }
        getSupportedComparisonTypes() {
          return ComparisonType.IsBlank | ComparisonType.IsNotBlank;
        }
      }

      var editComponent$y = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./integerFieldComponents')).EditComponent;
      }));
      var configurationComponent$z = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./integerFieldComponents')).ConfigurationComponent;
      }));
      class IntegerFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var _toNumberOrNull$toStr, _toNumberOrNull;
          return (_toNumberOrNull$toStr = (_toNumberOrNull = toNumberOrNull(value)) === null || _toNumberOrNull === void 0 ? void 0 : _toNumberOrNull.toString()) !== null && _toNumberOrNull$toStr !== void 0 ? _toNumberOrNull$toStr : "";
        }
        getEditComponent() {
          return editComponent$y;
        }
        getConfigurationComponent() {
          return configurationComponent$z;
        }
        getSupportedComparisonTypes() {
          return numericComparisonTypes;
        }
      }

      var editComponent$x = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./integerRangeFieldComponents')).EditComponent;
      }));
      var configurationComponent$y = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./integerRangeFieldComponents')).ConfigurationComponent;
      }));
      class IntegerRangeFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          if (value === "" || value === ",") {
            return "";
          }
          var numbers = value.split(",").map(v => toNumberOrNull(v));
          if (numbers.length !== 2 || numbers[0] === null && numbers[1] === null) {
            return "";
          }
          if (numbers[0] === null) {
            return "through ".concat(numbers[1]);
          } else if (numbers[1] === null) {
            return "from ".concat(numbers[0]);
          } else {
            return "".concat(numbers[0], " to ").concat(numbers[1]);
          }
        }
        getEditComponent() {
          return editComponent$x;
        }
        getConfigurationComponent() {
          return configurationComponent$y;
        }
        isFilterable() {
          return false;
        }
      }

      var ConfigurationValueKey$b = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["KeyPrompt"] = "keyprompt";
        ConfigurationValueKey["ValuePrompt"] = "valueprompt";
        ConfigurationValueKey["DisplayValueFirst"] = "displayvaluefirst";
        ConfigurationValueKey["AllowHtml"] = "allowhtml";
        ConfigurationValueKey["CustomValues"] = "customvalues";
        ConfigurationValueKey["DefinedType"] = "definedtype";
        return ConfigurationValueKey;
      }({});
      (function (ConfigurationPropertyKey) {
        ConfigurationPropertyKey["DefinedTypes"] = "definedTypes";
        return ConfigurationPropertyKey;
      })({});
      var editComponent$w = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./keyValueListFieldComponents')).EditComponent;
      }));
      var configurationComponent$x = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./keyValueListFieldComponents')).ConfigurationComponent;
      }));
      class KeyValueListFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          try {
            var _configurationValues$;
            var clientValues = JSON.parse(value !== null && value !== void 0 ? value : "[]");
            var configuredValues = new List(JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$b.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]"));
            var values = [];
            var _iterator = _createForOfIteratorHelper(clientValues),
              _step;
            try {
              var _loop = function _loop() {
                var clientValue = _step.value;
                var configuredValue = configuredValues.firstOrUndefined(v => v.value === clientValue.value);
                if (configuredValue !== undefined) {
                  values.push("".concat(clientValue.key, ": ").concat(configuredValue.text));
                } else {
                  values.push("".concat(clientValue.key, ": ").concat(clientValue.value));
                }
              };
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return values.join(", ");
          } catch (_unused) {
            return "";
          }
        }
        getEditComponent() {
          return editComponent$w;
        }
        getConfigurationComponent() {
          return configurationComponent$x;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["AllowedPickerModes"] = "allowedPickerModes";
        ConfigurationValueKey["CurrentPickerMode"] = "currentPickerMode";
        return ConfigurationValueKey;
      })({});
      var editComponent$v = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./locationFieldComponents')).EditComponent;
      }));
      var configurationComponent$w = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./locationFieldComponents')).ConfigurationComponent;
      }));
      class LocationFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          try {
            var _locationItemBag$text;
            var locationItemBag = JSON.parse(value);
            return (_locationItemBag$text = locationItemBag.text) !== null && _locationItemBag$text !== void 0 ? _locationItemBag$text : "";
          } catch (_unused) {
            return value !== null && value !== void 0 ? value : "";
          }
        }
        getEditComponent() {
          return editComponent$v;
        }
        getConfigurationComponent() {
          return configurationComponent$w;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["LocationType"] = "LocationType";
        ConfigurationValueKey["ParentLocation"] = "ParentLocation";
        ConfigurationValueKey["AllowAddingNewLocations"] = "AllowAddingNewLocations";
        ConfigurationValueKey["ShowCityState"] = "ShowCityState";
        ConfigurationValueKey["AddressRequired"] = "AddressRequired";
        return ConfigurationValueKey;
      })({});
      var editComponent$u = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./locationListFieldComponents')).EditComponent;
      }));
      var configurationComponent$v = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./locationListFieldComponents')).ConfigurationComponent;
      }));
      class LocationListFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          try {
            var _locationItemBag$text;
            var locationItemBag = JSON.parse(value);
            return (_locationItemBag$text = locationItemBag.text) !== null && _locationItemBag$text !== void 0 ? _locationItemBag$text : "";
          } catch (_unused) {
            return value !== null && value !== void 0 ? value : "";
          }
        }
        getEditComponent() {
          return editComponent$u;
        }
        getConfigurationComponent() {
          return configurationComponent$v;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["NumberOfRows"] = "numberofrows";
        ConfigurationValueKey["AllowHtml"] = "allowhtml";
        ConfigurationValueKey["MaxCharacters"] = "maxcharacters";
        ConfigurationValueKey["ShowCountDown"] = "showcountdown";
        return ConfigurationValueKey;
      })({});
      var editComponent$t = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./memoFieldComponents')).EditComponent;
      }));
      var filterComponent$5 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./memoFieldComponents')).FilterComponent;
      }));
      var configurationComponent$u = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./memoFieldComponents')).ConfigurationComponent;
      }));
      class MemoFieldType extends FieldTypeBase {
        getEditComponent() {
          return editComponent$t;
        }
        getConfigurationComponent() {
          return configurationComponent$u;
        }
        getSupportedComparisonTypes() {
          return stringComparisonTypes;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$5);
        }
      }

      var editComponent$s = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./monthDayFieldComponents')).EditComponent;
      }));
      var configurationComponent$t = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./monthDayFieldComponents')).ConfigurationComponent;
      }));
      class MonthDayFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var components = value.split("/");
          if (components.length !== 2) {
            return "";
          }
          var month = toNumber(components[0]);
          var day = toNumber(components[1]);
          if (month >= 1 && day >= 1 && month <= 12 && day <= 31) {
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return "".concat(months[month - 1], " ").concat(day);
          } else {
            return "";
          }
        }
        getEditComponent() {
          return editComponent$s;
        }
        getConfigurationComponent() {
          return configurationComponent$t;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["MediaItems"] = "mediaitems";
        ConfigurationValueKey["Mode"] = "modetype";
        ConfigurationValueKey["ItemWidth"] = "itemwidth";
        return ConfigurationValueKey;
      })({});
      var editComponent$r = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./mediaSelectorFieldComponents')).EditComponent;
      }));
      var configurationComponent$s = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./mediaSelectorFieldComponents')).ConfigurationComponent;
      }));
      class MediaSelectorFieldType extends FieldTypeBase {
        getEditComponent() {
          return editComponent$r;
        }
        getConfigurationComponent() {
          return configurationComponent$s;
        }
      }

      var ConfigurationValueKey$a = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["RepeatDirection"] = "repeatDirection";
        ConfigurationValueKey["EnhancedSelection"] = "enhancedselection";
        ConfigurationValueKey["CustomValues"] = "customValues";
        return ConfigurationValueKey;
      }({});
      var editComponent$q = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./multiSelectFieldComponents')).EditComponent;
      }));
      var filterComponent$4 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./multiSelectFieldComponents')).FilterComponent;
      }));
      var configurationComponent$r = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./multiSelectFieldComponents')).ConfigurationComponent;
      }));
      class MultiSelectFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$a.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var userValues = value.split(",");
            var selectedValues = values.filter(v => {
              var _v$value;
              return userValues.includes((_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "");
            });
            return selectedValues.map(v => v.text).join(", ");
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$q;
        }
        getConfigurationComponent() {
          return configurationComponent$r;
        }
        getSupportedComparisonTypes() {
          return containsComparisonTypes;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$4);
        }
        getFilterValueText(value, configurationValues) {
          if (value.value === "") {
            return "";
          }
          try {
            var _configurationValues$2;
            var rawValues = value.value.split(",");
            var values = JSON.parse((_configurationValues$2 = configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues[ConfigurationValueKey$a.Values]) !== null && _configurationValues$2 !== void 0 ? _configurationValues$2 : "[]");
            var selectedValues = values.filter(v => {
              var _v$value2;
              return rawValues.includes((_v$value2 = v.value) !== null && _v$value2 !== void 0 ? _v$value2 : "");
            });
            if (selectedValues.length >= 1) {
              return "'".concat(selectedValues.map(v => v.value).join("' OR '"), "'");
            } else {
              return "";
            }
          } catch (_unused2) {
            return value.value;
          }
        }
        doesValueMatchFilter(value, filterValue, _configurationValues) {
          var _filterValue$value;
          var selectedValues = ((_filterValue$value = filterValue.value) !== null && _filterValue$value !== void 0 ? _filterValue$value : "").split(",").filter(v => v !== "").map(v => v.toLowerCase());
          var comparisonType = filterValue.comparisonType;
          if (comparisonType === ComparisonType.EqualTo) {
            comparisonType = ComparisonType.Contains;
          } else if (comparisonType === ComparisonType.NotEqualTo) {
            comparisonType = ComparisonType.DoesNotContain;
          }
          if (comparisonType === ComparisonType.IsBlank) {
            return value === "";
          } else if (comparisonType === ComparisonType.IsNotBlank) {
            return value !== "";
          }
          if (selectedValues.length > 0) {
            var _value$split$filter$m;
            var userValues = (_value$split$filter$m = value === null || value === void 0 ? void 0 : value.split(",").filter(v => v !== "").map(v => v.toLowerCase())) !== null && _value$split$filter$m !== void 0 ? _value$split$filter$m : [];
            if (comparisonType === ComparisonType.Contains) {
              var matchedCount = 0;
              var _iterator = _createForOfIteratorHelper(userValues),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var userValue = _step.value;
                  if (selectedValues.includes(userValue)) {
                    matchedCount += 1;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              return matchedCount > 0;
            } else {
              var _matchedCount = 0;
              var _iterator2 = _createForOfIteratorHelper(userValues),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _userValue = _step2.value;
                  if (selectedValues.includes(_userValue)) {
                    _matchedCount += 1;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              return _matchedCount !== selectedValues.length;
            }
          }
          return false;
        }
      }

      var ConfigurationValueKey$9 = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["EntityTypeName"] = "entityTypeName";
        ConfigurationValueKey["QualifierColumn"] = "qualifierColumn";
        ConfigurationValueKey["QualifierValue"] = "qualifierValue";
        ConfigurationValueKey["EntityTypes"] = "entityTypes";
        return ConfigurationValueKey;
      }({});
      var editComponent$p = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./noteTypeFieldComponents')).EditComponent;
      }));
      var configurationComponent$q = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./noteTypeFieldComponents')).ConfigurationComponent;
      }));
      class NoteTypeField extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$9.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var userValues = value.split(",");
            var selectedValues = values.filter(v => {
              var _v$value;
              return userValues.includes((_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "");
            });
            return selectedValues.map(v => v.text).map(v => v === null || v === void 0 ? void 0 : v.split(":").pop()).join(", ");
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$p;
        }
        getConfigurationComponent() {
          return configurationComponent$q;
        }
      }

      var ConfigurationValueKey$8 = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["EntityTypeName"] = "entityTypeName";
        ConfigurationValueKey["QualifierColumn"] = "qualifierColumn";
        ConfigurationValueKey["QualifierValue"] = "qualifierValue";
        ConfigurationValueKey["EntityTypes"] = "entityTypes";
        return ConfigurationValueKey;
      }({});
      var editComponent$o = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./noteTypesFieldComponents')).EditComponent;
      }));
      var configurationComponent$p = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./noteTypesFieldComponents')).ConfigurationComponent;
      }));
      class NoteTypesField extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$8.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var userValues = value.split(",");
            var selectedValues = values.filter(v => {
              var _v$value;
              return userValues.includes((_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "");
            });
            return selectedValues.map(v => v.text).map(v => v === null || v === void 0 ? void 0 : v.split(":").pop()).join(", ");
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$o;
        }
        getConfigurationComponent() {
          return configurationComponent$p;
        }
      }

      var editComponent$n = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./phoneNumberFieldComponents')).EditComponent;
      }));
      var configurationComponent$o = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./phoneNumberFieldComponents')).ConfigurationComponent;
      }));
      class PhoneNumberFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return formatPhoneNumber(value || "");
        }
        getEditComponent() {
          return editComponent$n;
        }
        getConfigurationComponent() {
          return configurationComponent$o;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["EnableSelfSelection"] = "EnableSelfSelection";
        ConfigurationValueKey["IncludeBusinesses"] = "includeBusinesses";
        return ConfigurationValueKey;
      })({});
      var editComponent$m = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./personFieldComponents')).EditComponent;
      }));
      var configurationComponent$n = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./personFieldComponents')).ConfigurationComponent;
      }));
      class PersonFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var _personValue$text;
          var personValue = JSON.parse(value || "{}");
          return (_personValue$text = personValue.text) !== null && _personValue$text !== void 0 ? _personValue$text : "";
        }
        getEditComponent() {
          return editComponent$m;
        }
        getConfigurationComponent() {
          return configurationComponent$n;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["MinValue"] = "minValue";
        ConfigurationValueKey["MaxValue"] = "maxValue";
        return ConfigurationValueKey;
      })({});
      var editComponent$l = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./rangeSliderFieldComponents')).EditComponent;
      }));
      var configurationComponent$m = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./rangeSliderFieldComponents')).ConfigurationComponent;
      }));
      class RangeSliderFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var _toNumberOrNull$toStr, _toNumberOrNull;
          return (_toNumberOrNull$toStr = (_toNumberOrNull = toNumberOrNull(value)) === null || _toNumberOrNull === void 0 ? void 0 : _toNumberOrNull.toString()) !== null && _toNumberOrNull$toStr !== void 0 ? _toNumberOrNull$toStr : "";
        }
        getEditComponent() {
          return editComponent$l;
        }
        getConfigurationComponent() {
          return configurationComponent$m;
        }
        getSupportedComparisonTypes() {
          return numericComparisonTypes;
        }
      }

      var ConfigurationValueKey$7 = function (ConfigurationValueKey) {
        ConfigurationValueKey["MaxRating"] = "max";
        return ConfigurationValueKey;
      }({});
      var editComponent$k = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./ratingFieldComponents')).EditComponent;
      }));
      var configurationComponent$l = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./ratingFieldComponents')).ConfigurationComponent;
      }));
      class RatingFieldType extends FieldTypeBase {
        getHtmlValue(value, configurationValues) {
          var _ratingValue$value, _ratingValue, _toNumberOrNull;
          var isEscaped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var ratingValue;
          try {
            ratingValue = JSON.parse(value !== null && value !== void 0 ? value : "");
          } catch (_unused) {
            ratingValue = null;
          }
          var rating = (_ratingValue$value = (_ratingValue = ratingValue) === null || _ratingValue === void 0 ? void 0 : _ratingValue.value) !== null && _ratingValue$value !== void 0 ? _ratingValue$value : 0;
          var maxRating = (_toNumberOrNull = toNumberOrNull(configurationValues[ConfigurationValueKey$7.MaxRating])) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : 5;
          var html = "";
          for (var i = 0; i < rating && i < maxRating; i++) {
            html += "<i class=\"fa fa-rating-selected\"></i>";
          }
          for (var _i = rating; _i < maxRating; _i++) {
            html += "<i class=\"fa fa-rating-unselected\"></i>";
          }
          if (isEscaped) {
            return escapeHtml(html);
          }
          return html;
        }
        getCondensedHtmlValue(value, configurationValues, isEscaped) {
          return this.getHtmlValue(value, configurationValues, isEscaped);
        }
        getEditComponent() {
          return editComponent$k;
        }
        getConfigurationComponent() {
          return configurationComponent$l;
        }
        getSupportedComparisonTypes() {
          return numericComparisonTypes;
        }
        doesValueMatchFilter(value, filterValue, configurationValues) {
          var _ratingValue$value2, _ratingValue2;
          var ratingValue;
          try {
            ratingValue = JSON.parse(value);
          } catch (_unused2) {
            ratingValue = null;
          }
          var rating = (_ratingValue$value2 = (_ratingValue2 = ratingValue) === null || _ratingValue2 === void 0 ? void 0 : _ratingValue2.value) !== null && _ratingValue$value2 !== void 0 ? _ratingValue$value2 : 0;
          if (filterValue.comparisonType === ComparisonType.IsBlank) {
            return rating === 0;
          } else if (filterValue.comparisonType === ComparisonType.IsNotBlank) {
            return rating !== 0;
          } else {
            return super.doesValueMatchFilter(rating.toString(), filterValue, configurationValues);
          }
        }
      }

      var editComponent$j = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./registryEntryFieldComponents')).EditComponent;
      }));
      var configurationComponent$k = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./registryEntryFieldComponents')).ConfigurationComponent;
      }));
      class RegistryEntryFieldType extends FieldTypeBase {
        getEditComponent() {
          return editComponent$j;
        }
        getConfigurationComponent() {
          return configurationComponent$k;
        }
        isFilterable() {
          return false;
        }
      }

      var ConfigurationValueKey$6 = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        return ConfigurationValueKey;
      }({});
      var editComponent$i = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./reminderTypeFieldComponents')).EditComponent;
      }));
      var configurationComponent$j = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./reminderTypeFieldComponents')).ConfigurationComponent;
      }));
      class ReminderTypeFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === undefined || value === null || value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$6.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var selectedValues = values.filter(o => o.guid.toLowerCase() === value.toLowerCase());
            return selectedValues[0].name;
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$i;
        }
        getConfigurationComponent() {
          return configurationComponent$j;
        }
      }

      var ConfigurationValueKey$5 = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["EnhancedSelection"] = "enhancedselection";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        return ConfigurationValueKey;
      }({});
      var editComponent$h = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./reminderTypesFieldComponents')).EditComponent;
      }));
      var configurationComponent$i = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./reminderTypesFieldComponents')).ConfigurationComponent;
      }));
      class ReminderTypesFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === undefined || value === null || value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$5.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var userValues = value.split(",");
            var selectedValues = values.filter(o => {
              var _o$value;
              return userValues.includes((_o$value = o.value) !== null && _o$value !== void 0 ? _o$value : "");
            });
            return selectedValues.map(o => o.text).join(", ");
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$h;
        }
        getConfigurationComponent() {
          return configurationComponent$i;
        }
        getSupportedComparisonTypes() {
          return binaryComparisonTypes | containsComparisonTypes;
        }
      }

      var editComponent$g = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./scheduleFieldComponents')).EditComponent;
      }));
      var configurationComponent$h = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./scheduleFieldComponents')).ConfigurationComponent;
      }));
      class ScheduleFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$g;
        }
        getConfigurationComponent() {
          return configurationComponent$h;
        }
        isFilterable() {
          return false;
        }
      }

      var editComponent$f = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./schedulesFieldComponents')).EditComponent;
      }));
      var configurationComponent$g = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./schedulesFieldComponents')).ConfigurationComponent;
      }));
      class SchedulesFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$f;
        }
        getConfigurationComponent() {
          return configurationComponent$g;
        }
        isFilterable() {
          return false;
        }
      }

      var ConfigurationValueKey$4 = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["FieldType"] = "fieldtype";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["CustomValues"] = "customValues";
        return ConfigurationValueKey;
      }({});
      var editComponent$e = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./singleSelectFieldComponents')).EditComponent;
      }));
      var filterComponent$3 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./singleSelectFieldComponents')).FilterComponent;
      }));
      var configurationComponent$f = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./singleSelectFieldComponents')).ConfigurationComponent;
      }));
      class SingleSelectFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$4.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var selectedValues = values.filter(v => v.value === value);
            if (selectedValues.length >= 1) {
              var _selectedValues$0$tex;
              return (_selectedValues$0$tex = selectedValues[0].text) !== null && _selectedValues$0$tex !== void 0 ? _selectedValues$0$tex : "";
            } else {
              return "";
            }
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$e;
        }
        getConfigurationComponent() {
          return configurationComponent$f;
        }
        getFilterComponent() {
          return getStandardFilterComponent("Is", filterComponent$3);
        }
        getFilterValueText(value, configurationValues) {
          if (value.value === "") {
            return "";
          }
          try {
            var _configurationValues$2;
            var rawValues = value.value.split(",");
            var values = JSON.parse((_configurationValues$2 = configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues[ConfigurationValueKey$4.Values]) !== null && _configurationValues$2 !== void 0 ? _configurationValues$2 : "[]");
            var selectedValues = values.filter(v => {
              var _v$value;
              return rawValues.includes((_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "");
            });
            if (selectedValues.length >= 1) {
              return "'".concat(selectedValues.map(v => v.value).join("' OR '"), "'");
            } else {
              return "";
            }
          } catch (_unused2) {
            return value.value;
          }
        }
        doesValueMatchFilter(value, filterValue, _configurationValues) {
          var _filterValue$value;
          var selectedValues = ((_filterValue$value = filterValue.value) !== null && _filterValue$value !== void 0 ? _filterValue$value : "").split(",").filter(v => v !== "").map(v => v.toLowerCase());
          var comparisonType = filterValue.comparisonType;
          if (comparisonType === ComparisonType.EqualTo) {
            comparisonType = ComparisonType.Contains;
          } else if (comparisonType === ComparisonType.NotEqualTo) {
            comparisonType = ComparisonType.DoesNotContain;
          }
          if (comparisonType === ComparisonType.IsBlank) {
            return value === "";
          } else if (comparisonType === ComparisonType.IsNotBlank) {
            return value !== "";
          }
          if (selectedValues.length > 0) {
            var matched = selectedValues.includes(value.toLowerCase());
            if (comparisonType === ComparisonType.DoesNotContain) {
              matched = !matched;
            }
            return matched;
          }
          return false;
        }
      }

      var ConfigurationValueKey$3 = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        return ConfigurationValueKey;
      }({});
      var editComponent$d = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./securityRoleFieldComponents')).EditComponent;
      }));
      var configurationComponent$e = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./securityRoleFieldComponents')).ConfigurationComponent;
      }));
      class SecurityRoleFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$3.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var userValues = value.split(",");
            var selectedValues = values.filter(v => {
              var _v$value;
              return userValues.includes((_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "");
            });
            return selectedValues.map(v => v.text).map(v => v === null || v === void 0 ? void 0 : v.split(":").pop()).join(", ");
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$d;
        }
        getConfigurationComponent() {
          return configurationComponent$e;
        }
      }

      var editComponent$c = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./structureContentEditorFieldComponents')).EditComponent;
      }));
      var configurationComponent$d = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./structureContentEditorFieldComponents')).ConfigurationComponent;
      }));
      class StructureContentEditorFieldType extends FieldTypeBase {
        getEditComponent() {
          return editComponent$c;
        }
        getConfigurationComponent() {
          return configurationComponent$d;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["EnabledSlidingDateRangeTypes"] = "enabledSlidingDateRangeTypes";
        ConfigurationValueKey["EnabledSlidingDateRangeUnits"] = "enabledSlidingDateRangeUnits";
        ConfigurationValueKey["TimeUnitTypes"] = "timeUnitTypes";
        ConfigurationValueKey["SlidingDateRangeTypes"] = "slidingDateRangeTypes";
        return ConfigurationValueKey;
      })({});
      var editComponent$b = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./slidingDateRangeFieldComponents')).EditComponent;
      }));
      var configurationComponent$c = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./slidingDateRangeFieldComponents')).ConfigurationComponent;
      }));
      class SlidingDateRangeFieldType extends FieldTypeBase {
        getEditComponent() {
          return editComponent$b;
        }
        getConfigurationComponent() {
          return configurationComponent$c;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["Name"] = "name";
        ConfigurationValueKey["IconCssClass"] = "iconcssclass";
        ConfigurationValueKey["Color"] = "color";
        ConfigurationValueKey["TextTemplate"] = "texttemplate";
        ConfigurationValueKey["BaseUrl"] = "baseurl";
        ConfigurationValueKey["BaseUrlAliases"] = "baseurlaliases";
        return ConfigurationValueKey;
      })({});
      var editComponent$a = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./socialMediaAccountFieldComponents')).EditComponent;
      }));
      var configurationComponent$b = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./socialMediaAccountFieldComponents')).ConfigurationComponent;
      }));
      class SocialMediaAccountFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$a;
        }
        getConfigurationComponent() {
          return configurationComponent$b;
        }
        isFilterable() {
          return false;
        }
      }

      var editComponent$9 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./ssnFieldComponents')).EditComponent;
      }));
      var configurationComponent$a = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./ssnFieldComponents')).ConfigurationComponent;
      }));
      class SSNFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var strippedValue = value.replace(/[^0-9]/g, "");
          if (strippedValue.length !== 9) {
            return "";
          }
          return "xxx-xx-".concat(value.substr(5, 4));
        }
        getEditComponent() {
          return editComponent$9;
        }
        getConfigurationComponent() {
          return configurationComponent$a;
        }
        isFilterable() {
          return false;
        }
      }

      var ConfigurationValueKey$2 = function (ConfigurationValueKey) {
        ConfigurationValueKey["ClientValues"] = "values";
        ConfigurationValueKey["IncludeInactive"] = "includeInactive";
        return ConfigurationValueKey;
      }({});
      var editComponent$8 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./systemCommunicationFieldComponents')).EditComponent;
      }));
      var configurationComponent$9 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./systemCommunicationFieldComponents')).ConfigurationComponent;
      }));
      class SystemCommunicationFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === undefined || value === null || value === "") {
            return "";
          }
          try {
            var _configurationValues$, _selectedValue$text;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$2.ClientValues]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var selectedValue = values.find(o => o.value === value);
            return (_selectedValue$text = selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.text) !== null && _selectedValue$text !== void 0 ? _selectedValue$text : value;
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$8;
        }
        getConfigurationComponent() {
          return configurationComponent$9;
        }
        getSupportedComparisonTypes() {
          return ComparisonType.IsBlank | ComparisonType.IsNotBlank;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["IsPassword"] = "ispassword";
        ConfigurationValueKey["MaxCharacters"] = "maxcharacters";
        ConfigurationValueKey["ShowCountdown"] = "showcountdown";
        return ConfigurationValueKey;
      })({});
      var configurationComponent$8 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./textFieldComponents')).ConfigurationComponent;
      }));
      class TextFieldType extends FieldTypeBase {
        getConfigurationComponent() {
          return configurationComponent$8;
        }
        getSupportedComparisonTypes() {
          return stringComparisonTypes;
        }
      }

      var editComponent$7 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./timeFieldComponents')).EditComponent;
      }));
      var configurationComponent$7 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./timeFieldComponents')).ConfigurationComponent;
      }));
      class TimeFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var values = /^(\d+):(\d+)/.exec(value !== null && value !== void 0 ? value : "");
          if (values === null || values.length < 3) {
            return "";
          }
          var hour = toNumber(values[1]);
          var minute = toNumber(values[2]);
          var meridiem = hour >= 12 ? "PM" : "AM";
          if (hour > 12) {
            hour -= 12;
          }
          return "".concat(hour, ":").concat(padLeft(minute.toString(), 2, "0"), " ").concat(meridiem);
        }
        getEditComponent() {
          return editComponent$7;
        }
        getConfigurationComponent() {
          return configurationComponent$7;
        }
        getSupportedComparisonTypes() {
          return dateComparisonTypes;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["TimeZones"] = "timezones";
        return ConfigurationValueKey;
      })({});
      var editComponent$6 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./timeZoneFieldComponents')).EditComponent;
      }));
      var configurationComponent$6 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./timeZoneFieldComponents')).ConfigurationComponent;
      }));
      class TimeZoneFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent$6;
        }
        getConfigurationComponent() {
          return configurationComponent$6;
        }
        isFilterable() {
          return false;
        }
      }

      var editComponent$5 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./universalItemPickerFieldComponents')).EditComponent;
      }));
      var filterComponent$2 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./universalItemPickerFieldComponents')).FilterComponent;
      }));
      var configurationComponent$5 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./universalItemFieldComponents')).ConfigurationComponent;
      }));
      class UniversalItemPickerFieldType extends FieldTypeBase {
        getTextValue(value) {
          try {
            var values = JSON.parse(value);
            if (Array.isArray(values)) {
              return values.map(v => {
                var _v$text;
                return (_v$text = v.text) !== null && _v$text !== void 0 ? _v$text : "";
              }).join(", ");
            } else {
              var _values$text;
              return (_values$text = values.text) !== null && _values$text !== void 0 ? _values$text : "";
            }
          } catch (_unused) {
            return "";
          }
        }
        getEditComponent() {
          return editComponent$5;
        }
        getFilterComponent(configurationValues) {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(configurationValues), filterComponent$2);
        }
        getConfigurationComponent() {
          return configurationComponent$5;
        }
        getSupportedComparisonTypes(configurationValues) {
          if (asBoolean(configurationValues["isMultiple"])) {
            return ComparisonType.Contains | ComparisonType.DoesNotContain | ComparisonType.IsBlank;
          } else {
            return ComparisonType.EqualTo | ComparisonType.NotEqualTo;
          }
        }
        getFilterValueText(value) {
          try {
            var values = JSON.parse(value.value);
            if (Array.isArray(values)) {
              return values.map(v => {
                var _v$text2;
                return "'".concat((_v$text2 = v.text) !== null && _v$text2 !== void 0 ? _v$text2 : "", "'");
              }).join(" OR ");
            } else {
              var _values$text2;
              return "'".concat((_values$text2 = values.text) !== null && _values$text2 !== void 0 ? _values$text2 : "", "'");
            }
          } catch (_unused2) {
            return "";
          }
        }
      }

      var editComponent$4 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./universalItemSearchPickerFieldComponents')).EditComponent;
      }));
      var filterComponent$1 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./universalItemSearchPickerFieldComponents')).FilterComponent;
      }));
      var configurationComponent$4 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./universalItemFieldComponents')).ConfigurationComponent;
      }));
      class UniversalItemSearchPickerFieldType extends FieldTypeBase {
        getTextValue(value) {
          try {
            var _bag$text;
            var bag = JSON.parse(value);
            return (_bag$text = bag.text) !== null && _bag$text !== void 0 ? _bag$text : "";
          } catch (_unused) {
            return "";
          }
        }
        getEditComponent() {
          return editComponent$4;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$1);
        }
        getConfigurationComponent() {
          return configurationComponent$4;
        }
        getSupportedComparisonTypes() {
          return ComparisonType.EqualTo | ComparisonType.NotEqualTo;
        }
      }

      var editComponent$3 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./universalItemTreePickerFieldComponents')).EditComponent;
      }));
      var filterComponent = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./universalItemTreePickerFieldComponents')).FilterComponent;
      }));
      var configurationComponent$3 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./universalItemFieldComponents')).ConfigurationComponent;
      }));
      class UniversalItemTreePickerFieldType extends FieldTypeBase {
        getTextValue(value) {
          try {
            var values = JSON.parse(value);
            if (Array.isArray(values)) {
              return values.map(v => {
                var _v$text;
                return (_v$text = v.text) !== null && _v$text !== void 0 ? _v$text : "";
              }).join(", ");
            } else {
              var _values$text;
              return (_values$text = values.text) !== null && _values$text !== void 0 ? _values$text : "";
            }
          } catch (_unused) {
            return "";
          }
        }
        getEditComponent() {
          return editComponent$3;
        }
        getFilterComponent(configurationValues) {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(configurationValues), filterComponent);
        }
        getConfigurationComponent() {
          return configurationComponent$3;
        }
        getSupportedComparisonTypes(configurationValues) {
          if (asBoolean(configurationValues["isMultiple"]) === true) {
            return ComparisonType.Contains | ComparisonType.DoesNotContain | ComparisonType.IsBlank;
          } else {
            return ComparisonType.EqualTo | ComparisonType.NotEqualTo;
          }
        }
        getFilterValueText(value) {
          try {
            var values = JSON.parse(value.value);
            if (Array.isArray(values)) {
              return values.map(v => {
                var _v$text2;
                return "'".concat((_v$text2 = v.text) !== null && _v$text2 !== void 0 ? _v$text2 : "", "'");
              }).join(" OR ");
            } else {
              var _values$text2;
              return "'".concat((_values$text2 = values.text) !== null && _values$text2 !== void 0 ? _values$text2 : "", "'");
            }
          } catch (_unused2) {
            return "";
          }
        }
      }

      var ConfigurationValueKey$1 = function (ConfigurationValueKey) {
        ConfigurationValueKey["ShouldRequireTrailingForwardSlash"] = "ShouldRequireTrailingForwardSlash";
        ConfigurationValueKey["ShouldAlwaysShowCondensed"] = "ShouldAlwaysShowCondensed";
        return ConfigurationValueKey;
      }({});
      var editComponent$2 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./urlLinkFieldComponents')).EditComponent;
      }));
      var configurationComponent$2 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./urlLinkFieldComponents')).ConfigurationComponent;
      }));
      class UrlLinkFieldType extends FieldTypeBase {
        getHtmlValue(value, configurationValues) {
          var isEscaped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var shouldAlwaysShowCondensed = asBoolean(configurationValues[ConfigurationValueKey$1.ShouldAlwaysShowCondensed]);
          var textValue = this.getTextValue(value, configurationValues);
          var htmlValue = "";
          if (textValue) {
            if (!shouldAlwaysShowCondensed) {
              htmlValue = "<a href=\"".concat(textValue, "\">").concat(textValue, "</a>");
            } else {
              htmlValue = textValue;
            }
          }
          if (isEscaped) {
            return escapeHtml(htmlValue);
          }
          return htmlValue;
        }
        getTextValue(value, configurationValues) {
          var shouldAlwaysShowCondensed = asBoolean(configurationValues[ConfigurationValueKey$1.ShouldAlwaysShowCondensed]);
          if (shouldAlwaysShowCondensed) {
            return "<a href=\"".concat(value, "\">").concat(value, "</a>");
          }
          return value;
        }
        getEditComponent() {
          return editComponent$2;
        }
        getConfigurationComponent() {
          return configurationComponent$2;
        }
        getSupportedComparisonTypes() {
          return stringComparisonTypes;
        }
      }

      var ConfigurationValueKey = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["ValuePrompt"] = "valueprompt";
        ConfigurationValueKey["AllowHtml"] = "allowhtml";
        ConfigurationValueKey["CustomValues"] = "customvalues";
        ConfigurationValueKey["DefinedType"] = "definedtype";
        return ConfigurationValueKey;
      }({});
      (function (ConfigurationPropertyKey) {
        ConfigurationPropertyKey["DefinedTypes"] = "definedTypes";
        return ConfigurationPropertyKey;
      })({});
      var editComponent$1 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./valueListFieldComponents')).EditComponent;
      }));
      var configurationComponent$1 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./valueListFieldComponents')).ConfigurationComponent;
      }));
      class ValueListFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          try {
            var _configurationValues$;
            var clientValues = JSON.parse(value !== null && value !== void 0 ? value : "[]");
            var configuredValues = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var values = [];
            var _iterator = _createForOfIteratorHelper(clientValues),
              _step;
            try {
              var _loop = function _loop() {
                var clientValue = _step.value;
                if (configuredValues.length > 0) {
                  var configuredValue = configuredValues.find(v => v.value === clientValue);
                  if (configuredValue) {
                    var _configuredValue$text;
                    values.push((_configuredValue$text = configuredValue.text) !== null && _configuredValue$text !== void 0 ? _configuredValue$text : "");
                  }
                } else {
                  values.push(clientValue);
                }
              };
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return values.join(", ");
          } catch (_unused) {
            return "";
          }
        }
        getEditComponent() {
          return editComponent$1;
        }
        getConfigurationComponent() {
          return configurationComponent$1;
        }
        isFilterable() {
          return false;
        }
      }

      var editComponent = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./workflowTypeFieldComponents')).EditComponent;
      }));
      var configurationComponent = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./workflowTypeFieldComponents')).ConfigurationComponent;
      }));
      class WorkflowTypeFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return value !== null && value !== void 0 ? value : "";
        }
        getEditComponent() {
          return editComponent;
        }
        getConfigurationComponent() {
          return configurationComponent;
        }
        isFilterable() {
          return false;
        }
      }

      registerFieldType(FieldType.Address, new AddressFieldType());
      registerFieldType(FieldType.Backgroundcheck, new BackgroundCheckFieldType());
      registerFieldType(FieldType.Boolean, new BooleanFieldType());
      registerFieldType(FieldType.Campus, new CampusFieldType());
      registerFieldType(FieldType.Campuses, new CampusesFieldType());
      registerFieldType(FieldType.Categories, new CategoriesFieldType());
      registerFieldType(FieldType.Category, new CategoryFieldType());
      registerFieldType(FieldType.DefinedValueCategorized, new CategorizedDefinedValueField());
      registerFieldType(FieldType.CheckList, new CheckListFieldType());
      registerFieldType(FieldType.Color, new ColorFieldType());
      registerFieldType(FieldType.ColorSelector, new ColorSelectorFieldType());
      registerFieldType(FieldType.ConnectionType, new ConnectionTypeField());
      registerFieldType(FieldType.ConnectionTypes, new ConnectionTypesField());
      registerFieldType(FieldType.CommunicationPreferenceType, new CommunicationPreferenceField());
      registerFieldType(FieldType.CommunicationTemplate, new CommunicationTemplateFieldType());
      registerFieldType(FieldType.Currency, new CurrencyFieldType());
      registerFieldType(FieldType.Date, new DateFieldType());
      registerFieldType(FieldType.DateRange, new DateRangeFieldType());
      registerFieldType(FieldType.DateTime, new DateTimeFieldType());
      registerFieldType(FieldType.DayOfWeek, new DayOfWeekFieldType());
      registerFieldType(FieldType.DaysOfWeek, new DaysOfWeekFieldType());
      registerFieldType(FieldType.Decimal, new DecimalFieldType());
      registerFieldType(FieldType.DecimalRange, new DecimalRangeFieldType());
      registerFieldType(FieldType.DefinedValue, new DefinedValueFieldType());
      registerFieldType(FieldType.DefinedValueRange, new DefinedValueRangeFieldType());
      registerFieldType(FieldType.Email, new EmailFieldType());
      registerFieldType(FieldType.FinancialAccount, new FinancialAccountFieldType());
      registerFieldType(FieldType.FinancialAccounts, new FinancialAccountsFieldType());
      registerFieldType(FieldType.File, new FileFieldType());
      registerFieldType(FieldType.Gender, new GenderFieldType());
      registerFieldType(FieldType.GroupAndRole, new GroupAndRoleFieldType());
      registerFieldType(FieldType.Group, new GroupFieldType());
      registerFieldType(FieldType.GroupLocationType, new GroupLocationTypeFieldType());
      registerFieldType(FieldType.GroupRole, new GroupRoleFieldType());
      registerFieldType(FieldType.GroupMember, new GroupMemberFieldType());
      registerFieldType(FieldType.GroupType, new GroupTypeField());
      registerFieldType(FieldType.GroupTypes, new GroupTypesFieldType());
      registerFieldType(FieldType.Image, new ImageFieldType());
      registerFieldType(FieldType.Integer, new IntegerFieldType());
      registerFieldType(FieldType.IntegerRange, new IntegerRangeFieldType());
      registerFieldType(FieldType.KeyValueList, new KeyValueListFieldType());
      registerFieldType(FieldType.Location, new LocationFieldType());
      registerFieldType(FieldType.LocationList, new LocationListFieldType());
      registerFieldType(FieldType.Memo, new MemoFieldType());
      registerFieldType(FieldType.MonthDay, new MonthDayFieldType());
      registerFieldType(FieldType.MediaSelector, new MediaSelectorFieldType());
      registerFieldType(FieldType.MultiSelect, new MultiSelectFieldType());
      registerFieldType(FieldType.NoteType, new NoteTypeField());
      registerFieldType(FieldType.NoteTypes, new NoteTypesField());
      registerFieldType(FieldType.PhoneNumber, new PhoneNumberFieldType());
      registerFieldType(FieldType.Person, new PersonFieldType());
      registerFieldType(FieldType.RangeSlider, new RangeSliderFieldType());
      registerFieldType(FieldType.Rating, new RatingFieldType());
      registerFieldType(FieldType.RegistryEntry, new RegistryEntryFieldType());
      registerFieldType(FieldType.ReminderType, new ReminderTypeFieldType());
      registerFieldType(FieldType.ReminderTypes, new ReminderTypesFieldType());
      registerFieldType(FieldType.Schedule, new ScheduleFieldType());
      registerFieldType(FieldType.Schedules, new SchedulesFieldType());
      registerFieldType(FieldType.SingleSelect, new SingleSelectFieldType());
      registerFieldType(FieldType.SecurityRole, new SecurityRoleFieldType());
      registerFieldType(FieldType.StructureContentEditor, new StructureContentEditorFieldType());
      registerFieldType(FieldType.SlidingDateRange, new SlidingDateRangeFieldType());
      registerFieldType(FieldType.SocialMediaAccount, new SocialMediaAccountFieldType());
      registerFieldType(FieldType.Ssn, new SSNFieldType());
      registerFieldType(FieldType.SystemCommunication, new SystemCommunicationFieldType());
      registerFieldType(FieldType.Text, new TextFieldType());
      registerFieldType(FieldType.Time, new TimeFieldType());
      registerFieldType(FieldType.TimeZone, new TimeZoneFieldType());
      registerFieldType("b69b5a61-6fcd-4e3b-bb45-5f6802514953", new UniversalItemPickerFieldType());
      registerFieldType("c5b32713-fb46-41c0-8bbc-9bd4142f841a", new UniversalItemSearchPickerFieldType());
      registerFieldType("c7485f3f-0c10-4db6-9574-c10b195617e4", new UniversalItemTreePickerFieldType());
      registerFieldType(FieldType.UrlLink, new UrlLinkFieldType());
      registerFieldType(FieldType.ValueList, new ValueListFieldType());
      registerFieldType(FieldType.WorkflowType, new WorkflowTypeFieldType());

    })
  };
}));
//# sourceMappingURL=index.js.map
