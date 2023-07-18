System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            const StreakOccurrenceFrequency = {
                Daily: 0,
                Weekly: 1,
                Monthly: 2,
                Yearly: 3
            };
            const StreakOccurrenceFrequencyDescription = {
                0: "Daily",
                1: "Weekly",
                2: "Monthly",
                3: "Yearly"
            };

            var streakOccurrenceFrequency = /*#__PURE__*/Object.freeze({
                __proto__: null,
                StreakOccurrenceFrequency: StreakOccurrenceFrequency,
                StreakOccurrenceFrequencyDescription: StreakOccurrenceFrequencyDescription
            });
            exports('streakOccurrenceFrequency', streakOccurrenceFrequency);

            const StreakStructureType = {
                AnyAttendance: 0,
                Group: 1,
                GroupType: 2,
                GroupTypePurpose: 3,
                CheckInConfig: 4,
                InteractionChannel: 5,
                InteractionComponent: 6,
                InteractionMedium: 7,
                FinancialTransaction: 8
            };
            const StreakStructureTypeDescription = {
                0: "Attendance: Any",
                1: "Attendance: Group",
                2: "Attendance: Group Type",
                3: "Attendance: Group Type Purpose",
                4: "Attendance: Check-In Configuration",
                5: "Interaction: Channel",
                6: "Interaction: Component",
                7: "Interaction: Medium",
                8: "Financial Transaction"
            };

            var streakStructureType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                StreakStructureType: StreakStructureType,
                StreakStructureTypeDescription: StreakStructureTypeDescription
            });
            exports('streakStructureType', streakStructureType);

        })
    };
}));
