System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            const AppliesToAgeClassification = {
                All: 0,
                Adults: 1,
                Children: 2
            };
            const AppliesToAgeClassificationDescription = {
                0: "All",
                1: "Adults",
                2: "Children"
            };

            var appliesToAgeClassification = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AppliesToAgeClassification: AppliesToAgeClassification,
                AppliesToAgeClassificationDescription: AppliesToAgeClassificationDescription
            });
            exports('appliesToAgeClassification', appliesToAgeClassification);

            const AttendanceRecordRequiredForCheckIn = {
                ScheduleNotRequired: 0,
                PreSelect: 1,
                ScheduleRequired: 2
            };
            const AttendanceRecordRequiredForCheckInDescription = {
                0: "Schedule Not Required",
                1: "Pre-select Group if Scheduled",
                2: "Schedule Required"
            };

            var attendanceRecordRequiredForCheckIn = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AttendanceRecordRequiredForCheckIn: AttendanceRecordRequiredForCheckIn,
                AttendanceRecordRequiredForCheckInDescription: AttendanceRecordRequiredForCheckInDescription
            });
            exports('attendanceRecordRequiredForCheckIn', attendanceRecordRequiredForCheckIn);

            const AttendanceRule = {
                None: 0,
                AddOnCheckIn: 1,
                AlreadyBelongs: 2
            };
            const AttendanceRuleDescription = {
                0: "None",
                1: "Add On Check In",
                2: "Already Belongs"
            };

            var attendanceRule = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AttendanceRule: AttendanceRule,
                AttendanceRuleDescription: AttendanceRuleDescription
            });
            exports('attendanceRule', attendanceRule);

            const DueDateType = {
                Immediate: 0,
                ConfiguredDate: 1,
                GroupAttribute: 2,
                DaysAfterJoining: 3
            };
            const DueDateTypeDescription = {
                0: "Immediate",
                1: "Configured Date",
                2: "Group Attribute",
                3: "Days After Joining"
            };

            var dueDateType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                DueDateType: DueDateType,
                DueDateTypeDescription: DueDateTypeDescription
            });
            exports('dueDateType', dueDateType);

            const GroupCapacityRule = {
                None: 0,
                Hard: 1,
                Soft: 2
            };
            const GroupCapacityRuleDescription = {
                0: "None",
                1: "Hard",
                2: "Soft"
            };

            var groupCapacityRule = /*#__PURE__*/Object.freeze({
                __proto__: null,
                GroupCapacityRule: GroupCapacityRule,
                GroupCapacityRuleDescription: GroupCapacityRuleDescription
            });
            exports('groupCapacityRule', groupCapacityRule);

            const GroupMemberStatus = {
                Inactive: 0,
                Active: 1,
                Pending: 2
            };
            const GroupMemberStatusDescription = {
                0: "Inactive",
                1: "Active",
                2: "Pending"
            };

            var groupMemberStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                GroupMemberStatus: GroupMemberStatus,
                GroupMemberStatusDescription: GroupMemberStatusDescription
            });
            exports('groupMemberStatus', groupMemberStatus);

            const MeetsGroupRequirement = {
                Meets: 0,
                NotMet: 1,
                MeetsWithWarning: 2,
                NotApplicable: 3,
                Error: 4
            };
            const MeetsGroupRequirementDescription = {
                0: "Meets",
                1: "Not Met",
                2: "Meets With Warning",
                3: "Not Applicable",
                4: "Error"
            };

            var meetsGroupRequirement = /*#__PURE__*/Object.freeze({
                __proto__: null,
                MeetsGroupRequirement: MeetsGroupRequirement,
                MeetsGroupRequirementDescription: MeetsGroupRequirementDescription
            });
            exports('meetsGroupRequirement', meetsGroupRequirement);

            const ParticipationType = {
                Individual: 1,
                Family: 2
            };
            const ParticipationTypeDescription = {
                1: "Individual",
                2: "Family"
            };

            var participationType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ParticipationType: ParticipationType,
                ParticipationTypeDescription: ParticipationTypeDescription
            });
            exports('participationType', participationType);

            const RequirementCheckType = {
                Sql: 0,
                Dataview: 1,
                Manual: 2
            };
            const RequirementCheckTypeDescription = {
                0: "Sql",
                1: "Dataview",
                2: "Manual"
            };

            var requirementCheckType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RequirementCheckType: RequirementCheckType,
                RequirementCheckTypeDescription: RequirementCheckTypeDescription
            });
            exports('requirementCheckType', requirementCheckType);

            const ScheduleConfirmationLogic = {
                Ask: 0,
                AutoAccept: 1
            };
            const ScheduleConfirmationLogicDescription = {
                0: "Ask",
                1: "Auto Accept"
            };

            var scheduleConfirmationLogic = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ScheduleConfirmationLogic: ScheduleConfirmationLogic,
                ScheduleConfirmationLogicDescription: ScheduleConfirmationLogicDescription
            });
            exports('scheduleConfirmationLogic', scheduleConfirmationLogic);

        })
    };
}));
