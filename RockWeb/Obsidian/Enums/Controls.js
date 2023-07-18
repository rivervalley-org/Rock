System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            const AlertType = {
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

            const BtnSize = {
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

            const BtnType = {
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

            const ControlLazyMode = {
                Lazy: "lazy",
                Eager: "eager",
                OnDemand: "onDemand"
            };

            var controlLazyMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ControlLazyMode: ControlLazyMode
            });
            exports('controlLazyMode', controlLazyMode);

            const DayOfWeek = {
                Sunday: 0,
                Monday: 1,
                Tuesday: 2,
                Wednesday: 3,
                Thursday: 4,
                Friday: 5,
                Saturday: 6
            };
            const DayOfWeekDescription = {
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

            const DetailPanelMode = {
                View: 0,
                Edit: 1,
                Add: 2
            };
            const DetailPanelModeDescription = {
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

            const GatewayEmitStrings = {
                Success: "success",
                Validation: "validation",
                Error: "error"
            };

            var gatewayEmitStrings = /*#__PURE__*/Object.freeze({
                __proto__: null,
                GatewayEmitStrings: GatewayEmitStrings
            });
            exports('gatewayEmitStrings', gatewayEmitStrings);

            const MergeTemplateOwnership = {
                Global: 0,
                Personal: 1,
                PersonalAndGlobal: 2
            };
            const MergeTemplateOwnershipDescription = {
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

            const PickerDisplayStyle = {
                Auto: "auto",
                List: "list",
                Condensed: "condensed"
            };

            var pickerDisplayStyle = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PickerDisplayStyle: PickerDisplayStyle
            });
            exports('pickerDisplayStyle', pickerDisplayStyle);

            const RequirementLevel = {
                Unspecified: 0,
                Optional: 1,
                Required: 2,
                Unavailable: 3
            };
            const RequirementLevelDescription = {
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

            var RockCacheabilityType;
            (function (RockCacheabilityType) {
                RockCacheabilityType[RockCacheabilityType["Public"] = 0] = "Public";
                RockCacheabilityType[RockCacheabilityType["Private"] = 1] = "Private";
                RockCacheabilityType[RockCacheabilityType["NoCache"] = 2] = "NoCache";
                RockCacheabilityType[RockCacheabilityType["NoStore"] = 3] = "NoStore";
            })(RockCacheabilityType || (RockCacheabilityType = {}));

            var rockCacheabilityType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                get RockCacheabilityType () { return RockCacheabilityType; }
            });
            exports('rockCacheabilityType', rockCacheabilityType);

            const SlidingDateRangeType = {
                All: -1,
                Last: 0,
                Current: 1,
                DateRange: 2,
                Previous: 4,
                Next: 8,
                Upcoming: 16
            };
            const SlidingDateRangeTypeDescription = {
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

            const TimeUnitType = {
                Hour: 0,
                Day: 1,
                Week: 2,
                Month: 3,
                Year: 4
            };
            const TimeUnitTypeDescription = {
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
