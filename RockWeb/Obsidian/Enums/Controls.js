System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var AlertType = {
              Default: "default",
              Success: "success",
              Info: "info",
              Danger: "danger",
              Warning: "warning",
              Primary: "primary",
              Validation: "validation"
            };

            var alertType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AlertType: AlertType
            });
            exports('alertType', alertType);

            var BtnSize = {
              Default: "",
              ExtraSmall: "xs",
              Small: "sm",
              Large: "lg"
            };

            var btnSize = /*#__PURE__*/Object.freeze({
                __proto__: null,
                BtnSize: BtnSize
            });
            exports('btnSize', btnSize);

            var BtnType = {
              Default: "default",
              Primary: "primary",
              Danger: "danger",
              Warning: "warning",
              Success: "success",
              Info: "info",
              Link: "link",
              Authentication: "authentication",
              Action: "action",
              Tool: "tool"
            };

            var btnType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                BtnType: BtnType
            });
            exports('btnType', btnType);

            var ControlLazyMode = {
              Lazy: "lazy",
              Eager: "eager",
              OnDemand: "onDemand"
            };

            var controlLazyMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ControlLazyMode: ControlLazyMode
            });
            exports('controlLazyMode', controlLazyMode);

            var DayOfWeek = {
              Sunday: 0,
              Monday: 1,
              Tuesday: 2,
              Wednesday: 3,
              Thursday: 4,
              Friday: 5,
              Saturday: 6
            };
            var DayOfWeekDescription = {
              0: "Sunday",
              1: "Monday",
              2: "Tuesday",
              3: "Wednesday",
              4: "Thursday",
              5: "Friday",
              6: "Saturday"
            };

            var dayOfWeek = /*#__PURE__*/Object.freeze({
                __proto__: null,
                DayOfWeek: DayOfWeek,
                DayOfWeekDescription: DayOfWeekDescription
            });
            exports('dayOfWeek', dayOfWeek);

            var DetailPanelMode = {
              View: 0,
              Edit: 1,
              Add: 2
            };
            var DetailPanelModeDescription = {
              0: "View",
              1: "Edit",
              2: "Add"
            };

            var detailPanelMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                DetailPanelMode: DetailPanelMode,
                DetailPanelModeDescription: DetailPanelModeDescription
            });
            exports('detailPanelMode', detailPanelMode);

            var GatewayEmitStrings = {
              Success: "success",
              Validation: "validation",
              Error: "error"
            };

            var gatewayEmitStrings = /*#__PURE__*/Object.freeze({
                __proto__: null,
                GatewayEmitStrings: GatewayEmitStrings
            });
            exports('gatewayEmitStrings', gatewayEmitStrings);

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

            var SingleLocationPickerMode = {
              Address: 1,
              Named: 2,
              Point: 4,
              Polygon: 8
            };
            var LocationPickerMode = _objectSpread2(_objectSpread2({}, SingleLocationPickerMode), {}, {
              None: 0,
              All: 15
            });

            var locationPickerMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SingleLocationPickerMode: SingleLocationPickerMode,
                LocationPickerMode: LocationPickerMode
            });
            exports('locationPickerMode', locationPickerMode);

            var MediaSelectorMode = {
              Image: 0,
              Audio: 1
            };
            var MediaSelectorModeDescription = {
              0: "Image",
              1: "Audio"
            };

            var mediaSelectorMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                MediaSelectorMode: MediaSelectorMode,
                MediaSelectorModeDescription: MediaSelectorModeDescription
            });
            exports('mediaSelectorMode', mediaSelectorMode);

            var MergeTemplateOwnership = {
              Global: 0,
              Personal: 1,
              PersonalAndGlobal: 2
            };
            var MergeTemplateOwnershipDescription = {
              0: "Global",
              1: "Personal",
              2: "Personal And Global"
            };

            var mergeTemplateOwnership = /*#__PURE__*/Object.freeze({
                __proto__: null,
                MergeTemplateOwnership: MergeTemplateOwnership,
                MergeTemplateOwnershipDescription: MergeTemplateOwnershipDescription
            });
            exports('mergeTemplateOwnership', mergeTemplateOwnership);

            var ModalAlertType = {
              Alert: "Alert",
              Information: "Information",
              Warning: "Warning",
              None: "None"
            };

            var modalAlertType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ModalAlertType: ModalAlertType
            });
            exports('modalAlertType', modalAlertType);

            var PickerDisplayStyle = {
              Auto: "auto",
              List: "list",
              Condensed: "condensed"
            };

            var pickerDisplayStyle = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PickerDisplayStyle: PickerDisplayStyle
            });
            exports('pickerDisplayStyle', pickerDisplayStyle);

            var RequirementLevel = {
              Unspecified: 0,
              Optional: 1,
              Required: 2,
              Unavailable: 3
            };
            var RequirementLevelDescription = {
              0: "Unspecified",
              1: "Optional",
              2: "Required",
              3: "Unavailable"
            };

            var requirementLevel = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RequirementLevel: RequirementLevel,
                RequirementLevelDescription: RequirementLevelDescription
            });
            exports('requirementLevel', requirementLevel);

            var RockCacheabilityType = {
              Public: 0,
              Private: 1,
              NoCache: 2,
              NoStore: 3
            };
            var RockCacheabilityTypeDescription = {
              0: "Public",
              1: "Private",
              2: "No-Cache",
              3: "No-Store"
            };

            var rockCacheabilityType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RockCacheabilityType: RockCacheabilityType,
                RockCacheabilityTypeDescription: RockCacheabilityTypeDescription
            });
            exports('rockCacheabilityType', rockCacheabilityType);

            var SlidingDateRangeType = {
              All: -1,
              Last: 0,
              Current: 1,
              DateRange: 2,
              Previous: 4,
              Next: 8,
              Upcoming: 16
            };
            var SlidingDateRangeTypeDescription = {
              [-1]: "All",
              0: "Last",
              1: "Current",
              2: "Date Range",
              4: "Previous",
              8: "Next",
              16: "Upcoming"
            };

            var slidingDateRangeType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SlidingDateRangeType: SlidingDateRangeType,
                SlidingDateRangeTypeDescription: SlidingDateRangeTypeDescription
            });
            exports('slidingDateRangeType', slidingDateRangeType);

            var TimeUnitType = {
              Hour: 0,
              Day: 1,
              Week: 2,
              Month: 3,
              Year: 4
            };
            var TimeUnitTypeDescription = {
              0: "Hour",
              1: "Day",
              2: "Week",
              3: "Month",
              4: "Year"
            };

            var timeUnitType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                TimeUnitType: TimeUnitType,
                TimeUnitTypeDescription: TimeUnitTypeDescription
            });
            exports('timeUnitType', timeUnitType);

            var UniversalItemValuePickerDisplayStyle = {
              Auto: 0,
              List: 1,
              Condensed: 2
            };
            var UniversalItemValuePickerDisplayStyleDescription = {
              0: "Auto",
              1: "List",
              2: "Condensed"
            };

            var universalItemValuePickerDisplayStyle = /*#__PURE__*/Object.freeze({
                __proto__: null,
                UniversalItemValuePickerDisplayStyle: UniversalItemValuePickerDisplayStyle,
                UniversalItemValuePickerDisplayStyleDescription: UniversalItemValuePickerDisplayStyleDescription
            });
            exports('universalItemValuePickerDisplayStyle', universalItemValuePickerDisplayStyle);

        })
    };
}));
//# sourceMappingURL=Controls.js.map
