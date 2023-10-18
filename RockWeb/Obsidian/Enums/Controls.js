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
              Action: "action"
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

            var RockCacheabilityType = function (RockCacheabilityType) {
              RockCacheabilityType[RockCacheabilityType["Public"] = 0] = "Public";
              RockCacheabilityType[RockCacheabilityType["Private"] = 1] = "Private";
              RockCacheabilityType[RockCacheabilityType["NoCache"] = 2] = "NoCache";
              RockCacheabilityType[RockCacheabilityType["NoStore"] = 3] = "NoStore";
              return RockCacheabilityType;
            }({});

            var rockCacheabilityType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RockCacheabilityType: RockCacheabilityType
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

        })
    };
}));
//# sourceMappingURL=Controls.js.map
