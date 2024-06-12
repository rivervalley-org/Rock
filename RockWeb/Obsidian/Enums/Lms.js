System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var AssignTo = {
              Facilitator: 1,
              Student: 2
            };
            var AssignToDescription = {
              1: "Facilitator",
              2: "Student"
            };

            var assignTo = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AssignTo: AssignTo,
                AssignToDescription: AssignToDescription
            });
            exports('assignTo', assignTo);

            var AvailableDateCalculationMethod = {
              Specific: 1,
              ClassStartOffset: 2,
              EnrollmentOffset: 3,
              NoDate: 4,
              AlwaysAvailable: 5
            };
            var AvailableDateCalculationMethodDescription = {
              1: "Specific",
              2: "Class Start Offset",
              3: "Enrollment Offset",
              4: "No Date",
              5: "Always Available"
            };

            var availableDateCalculationMethod = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AvailableDateCalculationMethod: AvailableDateCalculationMethod,
                AvailableDateCalculationMethodDescription: AvailableDateCalculationMethodDescription
            });
            exports('availableDateCalculationMethod', availableDateCalculationMethod);

            var CompletionStatus = {
              Pending: 1,
              Completed: 2,
              Expired: 3
            };
            var CompletionStatusDescription = {
              1: "Pending",
              2: "Completed",
              3: "Expired"
            };

            var completionStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                CompletionStatus: CompletionStatus,
                CompletionStatusDescription: CompletionStatusDescription
            });
            exports('completionStatus', completionStatus);

            var ConfigurationMode = {
              AcademicCalendar: 1,
              OnDemandLearning: 2
            };
            var ConfigurationModeDescription = {
              1: "Academic Calendar",
              2: "On Demand Learning"
            };

            var configurationMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ConfigurationMode: ConfigurationMode,
                ConfigurationModeDescription: ConfigurationModeDescription
            });
            exports('configurationMode', configurationMode);

            var DueDateCalculationMethod = {
              Specific: 1,
              ClassStartOffset: 2,
              EnrollmentOffset: 3,
              NoDate: 4
            };
            var DueDateCalculationMethodDescription = {
              1: "Specific",
              2: "Class Start Offset",
              3: "Enrollment Offset",
              4: "No Date"
            };

            var dueDateCalculationMethod = /*#__PURE__*/Object.freeze({
                __proto__: null,
                DueDateCalculationMethod: DueDateCalculationMethod,
                DueDateCalculationMethodDescription: DueDateCalculationMethodDescription
            });
            exports('dueDateCalculationMethod', dueDateCalculationMethod);

            var LearningCompletionStatus = {
              Incomplete: 1,
              Fail: 2,
              Pass: 3
            };
            var LearningCompletionStatusDescription = {
              1: "Incomplete",
              2: "Fail",
              3: "Pass"
            };

            var learningCompletionStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                LearningCompletionStatus: LearningCompletionStatus,
                LearningCompletionStatusDescription: LearningCompletionStatusDescription
            });
            exports('learningCompletionStatus', learningCompletionStatus);

            var RequirementType = {
              Prerequisite: 1,
              Corequisite: 2,
              Equivalent: 3
            };
            var RequirementTypeDescription = {
              1: "Prerequisite",
              2: "Corequisite",
              3: "Equivalent"
            };

            var requirementType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RequirementType: RequirementType,
                RequirementTypeDescription: RequirementTypeDescription
            });
            exports('requirementType', requirementType);

        })
    };
}));
//# sourceMappingURL=Lms.js.map
