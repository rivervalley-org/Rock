System.register(['@Obsidian/SystemGuids/fieldType', '@Obsidian/Utility/fieldTypes', './utils', '@Obsidian/Utility/component', './fieldType', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/guid', '@Obsidian/Core/Reporting/comparisonType', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/slidingDateRange', '@Obsidian/Utility/rockDateTime', '@Obsidian/Enums/Controls/dayOfWeek', '@Obsidian/Utility/linq', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/phone'], (function (exports, module) {
  'use strict';
  var FieldType, registerFieldType, getStandardFilterComponent, defineAsyncComponent, FieldTypeBase, ComparisonType, asBooleanOrNull, asBoolean, areEqual, numericComparisonTypes, dateComparisonTypes, containsComparisonTypes, stringComparisonTypes, binaryComparisonTypes, toCurrencyOrNull, toNumber, toNumberOrNull, parseSlidingDateRangeString, getRangeTypeText, getTimeUnitText, TimeUnit, RangeType, calculateSlidingDateRange, RockDateTime, DateTimeFormat, DayOfWeek, List, escapeHtml, padLeft, formatPhoneNumber;
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
    }, function (module) {
      numericComparisonTypes = module.numericComparisonTypes;
      dateComparisonTypes = module.dateComparisonTypes;
      containsComparisonTypes = module.containsComparisonTypes;
      stringComparisonTypes = module.stringComparisonTypes;
      binaryComparisonTypes = module.binaryComparisonTypes;
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
      escapeHtml = module.escapeHtml;
      padLeft = module.padLeft;
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

      var editComponent$y = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./addressFieldComponents')).EditComponent;
      }));
      var configurationComponent$x = defineAsyncComponent(_asyncToGenerator(function* () {
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
          return editComponent$y;
        }
        getConfigurationComponent() {
          return configurationComponent$x;
        }
        isFilterable() {
          return false;
        }
      }

      var ConfigurationValueKey$e = function (ConfigurationValueKey) {
        ConfigurationValueKey["BooleanControlType"] = "BooleanControlType";
        ConfigurationValueKey["FalseText"] = "falsetext";
        ConfigurationValueKey["TrueText"] = "truetext";
        return ConfigurationValueKey;
      }({});
      var editComponent$x = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./booleanFieldComponents')).EditComponent;
      }));
      var configurationComponent$w = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./booleanFieldComponents')).ConfigurationComponent;
      }));
      var filterComponent$9 = defineAsyncComponent(_asyncToGenerator(function* () {
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
            return configurationValues[ConfigurationValueKey$e.TrueText] || "Yes";
          } else {
            return configurationValues[ConfigurationValueKey$e.FalseText] || "No";
          }
        }
        getEditComponent() {
          return editComponent$x;
        }
        getConfigurationComponent() {
          return configurationComponent$w;
        }
        getSupportedComparisonTypes() {
          return ComparisonType.EqualTo | ComparisonType.NotEqualTo;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$9);
        }
      }

      var ConfigurationValueKey$d = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
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
      var editComponent$w = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusFieldComponents')).EditComponent;
      }));
      var filterComponent$8 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusFieldComponents')).FilterComponent;
      }));
      var configurationComponent$v = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusFieldComponents')).ConfigurationComponent;
      }));
      class CampusFieldType extends FieldTypeBase {
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
          return editComponent$w;
        }
        getConfigurationComponent() {
          return configurationComponent$v;
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
            var values = JSON.parse((_configurationValues$2 = configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues[ConfigurationValueKey$d.Values]) !== null && _configurationValues$2 !== void 0 ? _configurationValues$2 : "[]");
            var selectedValues = values.filter(o => rawValues.filter(v => areEqual(v, o.value)).length > 0);
            return "'".concat(selectedValues.map(o => o.text).join("' OR '"), "'");
          } catch (_unused2) {
            return "'".concat(value.value, "'");
          }
        }
        getFilterComponent() {
          return getStandardFilterComponent("Is", filterComponent$8);
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

      var ConfigurationValueKey$c = function (ConfigurationValueKey) {
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
      var editComponent$v = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusesFieldComponents')).EditComponent;
      }));
      var configurationComponent$u = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./campusesFieldComponents')).ConfigurationComponent;
      }));
      class CampusesFieldType extends FieldTypeBase {
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
          return editComponent$v;
        }
        getConfigurationComponent() {
          return configurationComponent$u;
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

      var editComponent$u = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./colorFieldComponents')).EditComponent;
      }));
      var configurationComponent$t = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./colorFieldComponents')).ConfigurationComponent;
      }));
      class ColorFieldType extends FieldTypeBase {
        getEditComponent() {
          return editComponent$u;
        }
        getConfigurationComponent() {
          return configurationComponent$t;
        }
      }

      var ConfigurationValueKey$b = function (ConfigurationValueKey) {
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["Options"] = "options";
        return ConfigurationValueKey;
      }({});
      var editComponent$t = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./communicationPreferenceFieldComponents')).EditComponent;
      }));
      var configurationComponent$s = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./communicationPreferenceFieldComponents')).ConfigurationComponent;
      }));
      class CommunicationPreferenceField extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          var _configurationValues$, _ref3, _publicValue$text;
          var options = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$b.Options]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
          var publicValue = options.find(x => x.value === value);
          return (_ref3 = (_publicValue$text = publicValue === null || publicValue === void 0 ? void 0 : publicValue.text) !== null && _publicValue$text !== void 0 ? _publicValue$text : value) !== null && _ref3 !== void 0 ? _ref3 : "";
        }
        getEditComponent() {
          return editComponent$t;
        }
        getConfigurationComponent() {
          return configurationComponent$s;
        }
        isFilterable() {
          return false;
        }
      }

      var editComponent$s = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./currencyFieldComponents')).EditComponent;
      }));
      var configurationComponent$r = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./currencyFieldComponents')).ConfigurationComponent;
      }));
      class CurrencyFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var _toCurrencyOrNull;
          return (_toCurrencyOrNull = toCurrencyOrNull(value)) !== null && _toCurrencyOrNull !== void 0 ? _toCurrencyOrNull : "";
        }
        getEditComponent() {
          return editComponent$s;
        }
        getConfigurationComponent() {
          return configurationComponent$r;
        }
        getSupportedComparisonTypes() {
          return numericComparisonTypes;
        }
      }

      var ConfigurationValueKey$a = function (ConfigurationValueKey) {
        ConfigurationValueKey["Format"] = "format";
        ConfigurationValueKey["DisplayDiff"] = "displayDiff";
        ConfigurationValueKey["DisplayCurrentOption"] = "displayCurrentOption";
        ConfigurationValueKey["DatePickerControlType"] = "datePickerControlType";
        ConfigurationValueKey["FutureYearCount"] = "futureYearCount";
        return ConfigurationValueKey;
      }({});
      var editComponent$r = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateFieldComponents')).EditComponent;
      }));
      var configurationComponent$q = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateFieldComponents')).ConfigurationComponent;
      }));
      var filterComponent$7 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateFieldComponents')).FilterComponent;
      }));
      class DateFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (this.isCurrentDateValue(value)) {
            return this.getCurrentDateText(value);
          } else if (value) {
            var dateValue = RockDateTime.parseISO(value);
            var dateFormatTemplate = configurationValues[ConfigurationValueKey$a.Format] || "MM/dd/yyy";
            if (dateValue !== null) {
              var textValue = dateValue.toASPString(dateFormatTemplate);
              var displayDiff = asBoolean(configurationValues[ConfigurationValueKey$a.DisplayDiff]);
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
          return editComponent$r;
        }
        getConfigurationComponent() {
          return configurationComponent$q;
        }
        getSupportedComparisonTypes() {
          return dateComparisonTypes;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$7, {
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

      var editComponent$q = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateRangeFieldComponents')).EditComponent;
      }));
      var configurationComponent$p = defineAsyncComponent(_asyncToGenerator(function* () {
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
          return editComponent$q;
        }
        getConfigurationComponent() {
          return configurationComponent$p;
        }
        isFilterable() {
          return false;
        }
      }

      var ConfigurationValueKey$9 = function (ConfigurationValueKey) {
        ConfigurationValueKey["Format"] = "format";
        ConfigurationValueKey["DisplayAsElapsedTime"] = "displayDiff";
        ConfigurationValueKey["DisplayCurrentOption"] = "displayCurrentOption";
        return ConfigurationValueKey;
      }({});
      var editComponent$p = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateTimeFieldComponents')).EditComponent;
      }));
      var configurationComponent$o = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateTimeFieldComponents')).ConfigurationComponent;
      }));
      var filterComponent$6 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dateTimeFieldComponents')).FilterComponent;
      }));
      class DateTimeFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (this.isCurrentDateValue(value)) {
            return this.getCurrentDateText(value);
          } else if (value) {
            var dateValue = RockDateTime.parseISO(value);
            var dateFormatTemplate = configurationValues[ConfigurationValueKey$9.Format] || "MM/dd/yyy";
            if (dateValue !== null) {
              var textValue = dateValue.toASPString(dateFormatTemplate);
              var displayDiff = asBoolean(configurationValues[ConfigurationValueKey$9.DisplayAsElapsedTime]);
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
          return editComponent$p;
        }
        getConfigurationComponent() {
          return configurationComponent$o;
        }
        getSupportedComparisonTypes() {
          return dateComparisonTypes;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$6, {
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

      var editComponent$o = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dayOfWeekFieldComponents')).EditComponent;
      }));
      var filterComponent$5 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./dayOfWeekFieldComponents')).FilterComponent;
      }));
      var configurationComponent$n = defineAsyncComponent(_asyncToGenerator(function* () {
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
          return editComponent$o;
        }
        getConfigurationComponent() {
          return configurationComponent$n;
        }
        getFilterComponent() {
          return getStandardFilterComponent("Is", filterComponent$5);
        }
      }

      var editComponent$n = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./daysOfWeekFieldComponents')).EditComponent;
      }));
      var configurationComponent$m = defineAsyncComponent(_asyncToGenerator(function* () {
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
          return editComponent$n;
        }
        getConfigurationComponent() {
          return configurationComponent$m;
        }
        getSupportedComparisonTypes() {
          return containsComparisonTypes;
        }
      }

      var editComponent$m = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./decimalFieldComponents')).EditComponent;
      }));
      var configurationComponent$l = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./decimalFieldComponents')).ConfigurationComponent;
      }));
      class DecimalFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var _toNumberOrNull$toStr, _toNumberOrNull;
          return (_toNumberOrNull$toStr = (_toNumberOrNull = toNumberOrNull(value)) === null || _toNumberOrNull === void 0 ? void 0 : _toNumberOrNull.toString()) !== null && _toNumberOrNull$toStr !== void 0 ? _toNumberOrNull$toStr : "";
        }
        getEditComponent() {
          return editComponent$m;
        }
        getConfigurationComponent() {
          return configurationComponent$l;
        }
        getSupportedComparisonTypes() {
          return numericComparisonTypes;
        }
      }

      var editComponent$l = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./decimalRangeFieldComponents')).EditComponent;
      }));
      var configurationComponent$k = defineAsyncComponent(_asyncToGenerator(function* () {
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
          return editComponent$l;
        }
        getConfigurationComponent() {
          return configurationComponent$k;
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
      var ConfigurationValueKey$8 = function (ConfigurationValueKey) {
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
      var editComponent$k = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./definedValueFieldComponents')).EditComponent;
      }));
      var configurationComponent$j = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./definedValueFieldComponents')).ConfigurationComponent;
      }));
      var filterComponent$4 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./definedValueFieldComponents')).FilterComponent;
      }));
      class DefinedValueFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          try {
            var clientValue = JSON.parse(value !== null && value !== void 0 ? value : "");
            try {
              var _configurationValues$;
              var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$8.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
              var displayDescription = asBoolean(configurationValues[ConfigurationValueKey$8.DisplayDescription]);
              var rawValues = clientValue.value.split(",");
              return values.filter(v => rawValues.includes(v.value)).map(v => displayDescription && v.description ? v.description : v.text).join(", ");
            } catch (_unused) {
              return clientValue.value;
            }
          } catch (_unused2) {
            return "";
          }
        }
        getEditComponent() {
          return editComponent$k;
        }
        getConfigurationComponent() {
          return configurationComponent$j;
        }
        getSupportedComparisonTypes() {
          return containsComparisonTypes;
        }
        getFilterValueText(value, configurationValues) {
          try {
            var _value$value, _configurationValues$2;
            var clientValue = JSON.parse((_value$value = value.value) !== null && _value$value !== void 0 ? _value$value : "");
            var values = JSON.parse((_configurationValues$2 = configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues[ConfigurationValueKey$8.Values]) !== null && _configurationValues$2 !== void 0 ? _configurationValues$2 : "[]");
            var useDescription = asBoolean(configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues[ConfigurationValueKey$8.DisplayDescription]);
            var rawValues = clientValue.value.split(",");
            var text = values.filter(v => rawValues.includes(v.value)).map(v => useDescription ? v.description : v.text).join("' OR '");
            return text ? "'".concat(text, "'") : "";
          } catch (_unused3) {
            return "";
          }
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$4);
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
            var _clientValue$value;
            return ((_clientValue$value = clientValue.value) !== null && _clientValue$value !== void 0 ? _clientValue$value : "") === "";
          } else if (comparisonType === ComparisonType.IsNotBlank) {
            var _clientValue$value2;
            return ((_clientValue$value2 = clientValue.value) !== null && _clientValue$value2 !== void 0 ? _clientValue$value2 : "") !== "";
          }
          if (selectedValues.length > 0) {
            var _clientValue$value3;
            var userValues = ((_clientValue$value3 = clientValue.value) !== null && _clientValue$value3 !== void 0 ? _clientValue$value3 : "").toLowerCase().split(",").filter(v => v !== "");
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

      var ConfigurationValueKey$7 = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["DisplayDescription"] = "displaydescription";
        return ConfigurationValueKey;
      }({});
      var editComponent$j = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./definedValueRangeFieldComponents')).EditComponent;
      }));
      class DefinedValueRangeFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          try {
            var clientValue = JSON.parse(value);
            try {
              var _configurationValues$, _clientValue$value;
              var values = new List(JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$7.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]"));
              var displayDescription = asBoolean(configurationValues[ConfigurationValueKey$7.DisplayDescription]);
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
          return editComponent$j;
        }
        isFilterable() {
          return false;
        }
      }

      var editComponent$i = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./emailFieldComponents')).EditComponent;
      }));
      var filterComponent$3 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./emailFieldComponents')).FilterComponent;
      }));
      var configurationComponent$i = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./emailFieldComponents')).ConfigurationComponent;
      }));
      class EmailFieldType extends FieldTypeBase {
        getHtmlValue(value, configurationValues) {
          var textValue = this.getTextValue(value, configurationValues);
          return textValue ? "<a href=\"mailto:".concat(textValue, "\">").concat(textValue, "</a>") : "";
        }
        getEditComponent() {
          return editComponent$i;
        }
        getConfigurationComponent() {
          return configurationComponent$i;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$3);
        }
        getSupportedComparisonTypes() {
          return stringComparisonTypes;
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
      var editComponent$h = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./fileFieldComponents')).EditComponent;
      }));
      var configurationComponent$h = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./fileFieldComponents')).ConfigurationComponent;
      }));
      class FileFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          try {
            var _realValue$text;
            var realValue = JSON.parse(value);
            return (_realValue$text = realValue.text) !== null && _realValue$text !== void 0 ? _realValue$text : "";
          } catch (_unused) {
            return value;
          }
        }
        getHtmlValue(value, _configurationValues) {
          try {
            var _realValue$text2;
            var realValue = JSON.parse(value !== null && value !== void 0 ? value : "");
            return "<a href=\"/GetFile.ashx?guid=".concat(realValue.value, "\" title=\"").concat(escapeHtml((_realValue$text2 = realValue.text) !== null && _realValue$text2 !== void 0 ? _realValue$text2 : ""), "\" class=\"btn btn-xs btn-default\">View</a>");
          } catch (_unused2) {
            return value !== null && value !== void 0 ? value : "";
          }
        }
        getEditComponent() {
          return editComponent$h;
        }
        getConfigurationComponent() {
          return configurationComponent$h;
        }
        getSupportedComparisonTypes() {
          return ComparisonType.IsBlank | ComparisonType.IsNotBlank;
        }
      }

      var editComponent$g = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./genderFieldComponents')).EditComponent;
      }));
      var configurationComponent$g = defineAsyncComponent(_asyncToGenerator(function* () {
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
          return editComponent$g;
        }
        getConfigurationComponent() {
          return configurationComponent$g;
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
      var editComponent$f = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./imageFieldComponents')).EditComponent;
      }));
      var configurationComponent$f = defineAsyncComponent(_asyncToGenerator(function* () {
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
          try {
            var realValue = JSON.parse(value !== null && value !== void 0 ? value : "");
            if (!realValue.value) {
              return "";
            }
            return "<img src=\"/GetImage.ashx?guid=".concat(realValue.value, "\" class=\"img-responsive\" />");
          } catch (_unused2) {
            return value !== null && value !== void 0 ? value : "";
          }
        }
        getCondensedHtmlValue(value, _configurationValues) {
          try {
            var realValue = JSON.parse(value !== null && value !== void 0 ? value : "");
            if (!realValue.value) {
              return "";
            }
            return "<img src=\"/GetImage.ashx?guid=".concat(realValue.value, "&width=120\" class=\"img-responsive\" />");
          } catch (_unused3) {
            return value !== null && value !== void 0 ? value : "";
          }
        }
        getEditComponent() {
          return editComponent$f;
        }
        getConfigurationComponent() {
          return configurationComponent$f;
        }
        getSupportedComparisonTypes() {
          return ComparisonType.IsBlank | ComparisonType.IsNotBlank;
        }
      }

      var editComponent$e = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./integerFieldComponents')).EditComponent;
      }));
      var configurationComponent$e = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./integerFieldComponents')).ConfigurationComponent;
      }));
      class IntegerFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          var _toNumberOrNull$toStr, _toNumberOrNull;
          return (_toNumberOrNull$toStr = (_toNumberOrNull = toNumberOrNull(value)) === null || _toNumberOrNull === void 0 ? void 0 : _toNumberOrNull.toString()) !== null && _toNumberOrNull$toStr !== void 0 ? _toNumberOrNull$toStr : "";
        }
        getEditComponent() {
          return editComponent$e;
        }
        getConfigurationComponent() {
          return configurationComponent$e;
        }
        getSupportedComparisonTypes() {
          return numericComparisonTypes;
        }
      }

      var editComponent$d = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./integerRangeFieldComponents')).EditComponent;
      }));
      var configurationComponent$d = defineAsyncComponent(_asyncToGenerator(function* () {
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
          return editComponent$d;
        }
        getConfigurationComponent() {
          return configurationComponent$d;
        }
        isFilterable() {
          return false;
        }
      }

      var ConfigurationValueKey$6 = function (ConfigurationValueKey) {
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
      var editComponent$c = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./keyValueListFieldComponents')).EditComponent;
      }));
      var configurationComponent$c = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./keyValueListFieldComponents')).ConfigurationComponent;
      }));
      class KeyValueListFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          try {
            var _configurationValues$;
            var clientValues = JSON.parse(value !== null && value !== void 0 ? value : "[]");
            var configuredValues = new List(JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$6.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]"));
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
          return editComponent$c;
        }
        getConfigurationComponent() {
          return configurationComponent$c;
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
      var editComponent$b = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./memoFieldComponents')).EditComponent;
      }));
      var filterComponent$2 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./memoFieldComponents')).FilterComponent;
      }));
      var configurationComponent$b = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./memoFieldComponents')).ConfigurationComponent;
      }));
      class MemoFieldType extends FieldTypeBase {
        getEditComponent() {
          return editComponent$b;
        }
        getConfigurationComponent() {
          return configurationComponent$b;
        }
        getSupportedComparisonTypes() {
          return stringComparisonTypes;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$2);
        }
      }

      var editComponent$a = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./monthDayFieldComponents')).EditComponent;
      }));
      var configurationComponent$a = defineAsyncComponent(_asyncToGenerator(function* () {
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
          return editComponent$a;
        }
        getConfigurationComponent() {
          return configurationComponent$a;
        }
      }

      var ConfigurationValueKey$5 = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["RepeatDirection"] = "repeatDirection";
        ConfigurationValueKey["EnhancedSelection"] = "enhancedselection";
        ConfigurationValueKey["CustomValues"] = "customValues";
        return ConfigurationValueKey;
      }({});
      var editComponent$9 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./multiSelectFieldComponents')).EditComponent;
      }));
      var filterComponent$1 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./multiSelectFieldComponents')).FilterComponent;
      }));
      var configurationComponent$9 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./multiSelectFieldComponents')).ConfigurationComponent;
      }));
      class MultiSelectFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$5.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
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
          return editComponent$9;
        }
        getConfigurationComponent() {
          return configurationComponent$9;
        }
        getSupportedComparisonTypes() {
          return containsComparisonTypes;
        }
        getFilterComponent() {
          return getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent$1);
        }
        getFilterValueText(value, configurationValues) {
          if (value.value === "") {
            return "";
          }
          try {
            var _configurationValues$2;
            var rawValues = value.value.split(",");
            var values = JSON.parse((_configurationValues$2 = configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues[ConfigurationValueKey$5.Values]) !== null && _configurationValues$2 !== void 0 ? _configurationValues$2 : "[]");
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

      var editComponent$8 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./phoneNumberFieldComponents')).EditComponent;
      }));
      var configurationComponent$8 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./phoneNumberFieldComponents')).ConfigurationComponent;
      }));
      class PhoneNumberFieldType extends FieldTypeBase {
        getTextValue(value, _configurationValues) {
          return formatPhoneNumber(value || "");
        }
        getEditComponent() {
          return editComponent$8;
        }
        getConfigurationComponent() {
          return configurationComponent$8;
        }
      }

      var ConfigurationValueKey$4 = function (ConfigurationValueKey) {
        ConfigurationValueKey["MaxRating"] = "max";
        return ConfigurationValueKey;
      }({});
      var editComponent$7 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./ratingFieldComponents')).EditComponent;
      }));
      var configurationComponent$7 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./ratingFieldComponents')).ConfigurationComponent;
      }));
      class RatingFieldType extends FieldTypeBase {
        getHtmlValue(value, configurationValues) {
          var _ratingValue$value, _ratingValue, _toNumberOrNull;
          var ratingValue;
          try {
            ratingValue = JSON.parse(value !== null && value !== void 0 ? value : "");
          } catch (_unused) {
            ratingValue = null;
          }
          var rating = (_ratingValue$value = (_ratingValue = ratingValue) === null || _ratingValue === void 0 ? void 0 : _ratingValue.value) !== null && _ratingValue$value !== void 0 ? _ratingValue$value : 0;
          var maxRating = (_toNumberOrNull = toNumberOrNull(configurationValues[ConfigurationValueKey$4.MaxRating])) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : 5;
          var html = "";
          for (var i = 0; i < rating && i < maxRating; i++) {
            html += "<i class=\"fa fa-rating-selected\"></i>";
          }
          for (var _i = rating; _i < maxRating; _i++) {
            html += "<i class=\"fa fa-rating-unselected\"></i>";
          }
          return html;
        }
        getEditComponent() {
          return editComponent$7;
        }
        getConfigurationComponent() {
          return configurationComponent$7;
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

      var ConfigurationValueKey$3 = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        return ConfigurationValueKey;
      }({});
      var editComponent$6 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./reminderTypeFieldComponents')).EditComponent;
      }));
      var configurationComponent$6 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./reminderTypeFieldComponents')).ConfigurationComponent;
      }));
      class ReminderTypeFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === undefined || value === null || value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$3.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
            var selectedValues = values.filter(o => o.guid.toLowerCase() === value.toLowerCase());
            return selectedValues[0].name;
          } catch (_unused) {
            return value;
          }
        }
        getEditComponent() {
          return editComponent$6;
        }
        getConfigurationComponent() {
          return configurationComponent$6;
        }
      }

      var ConfigurationValueKey$2 = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["EnhancedSelection"] = "enhancedselection";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        return ConfigurationValueKey;
      }({});
      var editComponent$5 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./reminderTypesFieldComponents')).EditComponent;
      }));
      var configurationComponent$5 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./reminderTypesFieldComponents')).ConfigurationComponent;
      }));
      class ReminderTypesFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === undefined || value === null || value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$2.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
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
          return editComponent$5;
        }
        getConfigurationComponent() {
          return configurationComponent$5;
        }
        getSupportedComparisonTypes() {
          return binaryComparisonTypes | containsComparisonTypes;
        }
      }

      var ConfigurationValueKey$1 = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["FieldType"] = "fieldtype";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["CustomValues"] = "customValues";
        return ConfigurationValueKey;
      }({});
      var editComponent$4 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./singleSelectFieldComponents')).EditComponent;
      }));
      var filterComponent = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./singleSelectFieldComponents')).FilterComponent;
      }));
      var configurationComponent$4 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./singleSelectFieldComponents')).ConfigurationComponent;
      }));
      class SingleSelectFieldType extends FieldTypeBase {
        getTextValue(value, configurationValues) {
          if (value === "") {
            return "";
          }
          try {
            var _configurationValues$;
            var values = JSON.parse((_configurationValues$ = configurationValues[ConfigurationValueKey$1.Values]) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : "[]");
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
          return editComponent$4;
        }
        getConfigurationComponent() {
          return configurationComponent$4;
        }
        getFilterComponent() {
          return getStandardFilterComponent("Is", filterComponent);
        }
        getFilterValueText(value, configurationValues) {
          if (value.value === "") {
            return "";
          }
          try {
            var _configurationValues$2;
            var rawValues = value.value.split(",");
            var values = JSON.parse((_configurationValues$2 = configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues[ConfigurationValueKey$1.Values]) !== null && _configurationValues$2 !== void 0 ? _configurationValues$2 : "[]");
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

      var editComponent$3 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./ssnFieldComponents')).EditComponent;
      }));
      var configurationComponent$3 = defineAsyncComponent(_asyncToGenerator(function* () {
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
          return editComponent$3;
        }
        getConfigurationComponent() {
          return configurationComponent$3;
        }
        isFilterable() {
          return false;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["IsPassword"] = "ispassword";
        ConfigurationValueKey["MaxCharacters"] = "maxcharacters";
        ConfigurationValueKey["ShowCountdown"] = "showcountdown";
        return ConfigurationValueKey;
      })({});
      var configurationComponent$2 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./textFieldComponents')).ConfigurationComponent;
      }));
      class TextFieldType extends FieldTypeBase {
        getConfigurationComponent() {
          return configurationComponent$2;
        }
        getSupportedComparisonTypes() {
          return stringComparisonTypes;
        }
      }

      var editComponent$2 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./timeFieldComponents')).EditComponent;
      }));
      var configurationComponent$1 = defineAsyncComponent(_asyncToGenerator(function* () {
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
          return editComponent$2;
        }
        getConfigurationComponent() {
          return configurationComponent$1;
        }
        getSupportedComparisonTypes() {
          return dateComparisonTypes;
        }
      }

      (function (ConfigurationValueKey) {
        ConfigurationValueKey["ShouldRequireTrailingForwardSlash"] = "ShouldRequireTrailingForwardSlash";
        ConfigurationValueKey["ShouldAlwaysShowCondensed"] = "ShouldAlwaysShowCondensed";
        return ConfigurationValueKey;
      })({});
      var editComponent$1 = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./urlLinkFieldComponents')).EditComponent;
      }));
      class UrlLinkFieldType extends FieldTypeBase {
        getHtmlValue(value, configurationValues) {
          var textValue = this.getTextValue(value, configurationValues);
          return textValue ? "<a href=\"".concat(textValue, "\">").concat(textValue, "</a>") : "";
        }
        getEditComponent() {
          return editComponent$1;
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
      var editComponent = defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./valueListFieldComponents')).EditComponent;
      }));
      var configurationComponent = defineAsyncComponent(_asyncToGenerator(function* () {
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
      registerFieldType(FieldType.Boolean, new BooleanFieldType());
      registerFieldType(FieldType.Campus, new CampusFieldType());
      registerFieldType(FieldType.Campuses, new CampusesFieldType());
      registerFieldType(FieldType.Color, new ColorFieldType());
      registerFieldType(FieldType.CommunicationPreferenceType, new CommunicationPreferenceField());
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
      registerFieldType(FieldType.File, new FileFieldType());
      registerFieldType(FieldType.Gender, new GenderFieldType());
      registerFieldType(FieldType.Image, new ImageFieldType());
      registerFieldType(FieldType.Integer, new IntegerFieldType());
      registerFieldType(FieldType.IntegerRange, new IntegerRangeFieldType());
      registerFieldType(FieldType.KeyValueList, new KeyValueListFieldType());
      registerFieldType(FieldType.Memo, new MemoFieldType());
      registerFieldType(FieldType.MonthDay, new MonthDayFieldType());
      registerFieldType(FieldType.MultiSelect, new MultiSelectFieldType());
      registerFieldType(FieldType.PhoneNumber, new PhoneNumberFieldType());
      registerFieldType(FieldType.Rating, new RatingFieldType());
      registerFieldType(FieldType.ReminderType, new ReminderTypeFieldType());
      registerFieldType(FieldType.ReminderTypes, new ReminderTypesFieldType());
      registerFieldType(FieldType.SingleSelect, new SingleSelectFieldType());
      registerFieldType(FieldType.Ssn, new SSNFieldType());
      registerFieldType(FieldType.Text, new TextFieldType());
      registerFieldType(FieldType.Time, new TimeFieldType());
      registerFieldType(FieldType.UrlLink, new UrlLinkFieldType());
      registerFieldType(FieldType.ValueList, new ValueListFieldType());

    })
  };
}));
//# sourceMappingURL=index.js.map
