System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var AttendanceGraphBy = {
              Total: 0,
              Group: 1,
              Campus: 2,
              Schedule: 3,
              Location: 4
            };
            var AttendanceGraphByDescription = {
              0: "Total",
              1: "Group",
              2: "Campus",
              3: "Schedule",
              4: "Location"
            };

            var attendanceGraphBy = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AttendanceGraphBy: AttendanceGraphBy,
                AttendanceGraphByDescription: AttendanceGraphByDescription
            });
            exports('attendanceGraphBy', attendanceGraphBy);

            var AttendanceStatus = {
              DidNotAttend: 0,
              DidAttend: 1,
              IsPresent: 2
            };
            var AttendanceStatusDescription = {
              0: "Did Not Attend",
              1: "Did Attend",
              2: "Is Present"
            };

            var attendanceStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AttendanceStatus: AttendanceStatus,
                AttendanceStatusDescription: AttendanceStatusDescription
            });
            exports('attendanceStatus', attendanceStatus);

            var CheckInStatus = {
              Unknown: 0,
              Pending: 1,
              NotPresent: 2,
              Present: 3,
              CheckedOut: 4
            };
            var CheckInStatusDescription = {
              0: "Unknown",
              1: "Pending",
              2: "Not Present",
              3: "Present",
              4: "Checked Out"
            };

            var checkInStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                CheckInStatus: CheckInStatus,
                CheckInStatusDescription: CheckInStatusDescription
            });
            exports('checkInStatus', checkInStatus);

            var InteractiveExperienceApprovalStatus = {
              Pending: 0,
              Approved: 1,
              Rejected: 2
            };
            var InteractiveExperienceApprovalStatusDescription = {
              0: "Pending",
              1: "Approved",
              2: "Rejected"
            };

            var interactiveExperienceApprovalStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                InteractiveExperienceApprovalStatus: InteractiveExperienceApprovalStatus,
                InteractiveExperienceApprovalStatusDescription: InteractiveExperienceApprovalStatusDescription
            });
            exports('interactiveExperienceApprovalStatus', interactiveExperienceApprovalStatus);

            var InteractiveExperienceCampusBehavior = {
              FilterSchedulesByCampusGeofences: 0,
              DetermineCampusFromGeofence: 1,
              UseIndividualsCampus: 2
            };
            var InteractiveExperienceCampusBehaviorDescription = {
              0: "Filter Schedules By Campus Geofences",
              1: "Determine Campus From Geofence",
              2: "Use Individuals Campus"
            };

            var interactiveExperienceCampusBehavior = /*#__PURE__*/Object.freeze({
                __proto__: null,
                InteractiveExperienceCampusBehavior: InteractiveExperienceCampusBehavior,
                InteractiveExperienceCampusBehaviorDescription: InteractiveExperienceCampusBehaviorDescription
            });
            exports('interactiveExperienceCampusBehavior', interactiveExperienceCampusBehavior);

            var InteractiveExperiencePushNotificationType = {
              Never: 0,
              EveryAction: 1,
              SpecificActions: 2
            };
            var InteractiveExperiencePushNotificationTypeDescription = {
              0: "Never",
              1: "Every Action",
              2: "Specific Actions"
            };

            var interactiveExperiencePushNotificationType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                InteractiveExperiencePushNotificationType: InteractiveExperiencePushNotificationType,
                InteractiveExperiencePushNotificationTypeDescription: InteractiveExperiencePushNotificationTypeDescription
            });
            exports('interactiveExperiencePushNotificationType', interactiveExperiencePushNotificationType);

            var RegistrantsSameFamily = {
              No: 0,
              Yes: 1,
              Ask: 2
            };
            var RegistrantsSameFamilyDescription = {
              0: "No",
              1: "Yes",
              2: "Ask"
            };

            var registrantsSameFamily = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RegistrantsSameFamily: RegistrantsSameFamily,
                RegistrantsSameFamilyDescription: RegistrantsSameFamilyDescription
            });
            exports('registrantsSameFamily', registrantsSameFamily);

            var RegistrarOption = {
              PromptForRegistrar: 0,
              PrefillFirstRegistrant: 1,
              UseFirstRegistrant: 2,
              UseLoggedInPerson: 3
            };
            var RegistrarOptionDescription = {
              0: "Prompt For Registrar",
              1: "Prefill First Registrant",
              2: "Use First Registrant",
              3: "Use Logged In Person"
            };

            var registrarOption = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RegistrarOption: RegistrarOption,
                RegistrarOptionDescription: RegistrarOptionDescription
            });
            exports('registrarOption', registrarOption);

            var RegistrationCostSummaryType = {
              Cost: 0,
              Fee: 1,
              Discount: 2,
              Total: 3
            };
            var RegistrationCostSummaryTypeDescription = {
              0: "Cost",
              1: "Fee",
              2: "Discount",
              3: "Total"
            };

            var registrationCostSummaryType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RegistrationCostSummaryType: RegistrationCostSummaryType,
                RegistrationCostSummaryTypeDescription: RegistrationCostSummaryTypeDescription
            });
            exports('registrationCostSummaryType', registrationCostSummaryType);

            var RegistrationFeeType = {
              Single: 0,
              Multiple: 1
            };
            var RegistrationFeeTypeDescription = {
              0: "Single",
              1: "Multiple"
            };

            var registrationFeeType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RegistrationFeeType: RegistrationFeeType,
                RegistrationFeeTypeDescription: RegistrationFeeTypeDescription
            });
            exports('registrationFeeType', registrationFeeType);

            var RegistrationFieldSource = {
              PersonField: 0,
              PersonAttribute: 1,
              GroupMemberAttribute: 2,
              RegistrantAttribute: 4
            };
            var RegistrationFieldSourceDescription = {
              0: "Person Field",
              1: "Person Attribute",
              2: "Group Member Attribute",
              4: "Registrant Attribute"
            };

            var registrationFieldSource = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RegistrationFieldSource: RegistrationFieldSource,
                RegistrationFieldSourceDescription: RegistrationFieldSourceDescription
            });
            exports('registrationFieldSource', registrationFieldSource);

            var RegistrationPersonFieldType = {
              FirstName: 0,
              LastName: 1,
              Campus: 2,
              Address: 3,
              Email: 4,
              Birthdate: 5,
              Gender: 6,
              MaritalStatus: 7,
              MobilePhone: 8,
              HomePhone: 9,
              WorkPhone: 10,
              Grade: 11,
              ConnectionStatus: 12,
              MiddleName: 13,
              AnniversaryDate: 14,
              Race: 15,
              Ethnicity: 16
            };
            var RegistrationPersonFieldTypeDescription = {
              0: "First Name",
              1: "Last Name",
              2: "Campus",
              3: "Address",
              4: "Email",
              5: "Birthdate",
              6: "Gender",
              7: "Marital Status",
              8: "Mobile Phone",
              9: "Home Phone",
              10: "Work Phone",
              11: "Grade",
              12: "Connection Status",
              13: "Middle Name",
              14: "Anniversary Date",
              15: "Race",
              16: "Ethnicity"
            };

            var registrationPersonFieldType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RegistrationPersonFieldType: RegistrationPersonFieldType,
                RegistrationPersonFieldTypeDescription: RegistrationPersonFieldTypeDescription
            });
            exports('registrationPersonFieldType', registrationPersonFieldType);

            var RSVP = {
              No: 0,
              Yes: 1,
              Maybe: 2,
              Unknown: 3
            };
            var RSVPDescription = {
              0: "No",
              1: "Yes",
              2: "Maybe",
              3: "Unknown"
            };

            var rsvp = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RSVP: RSVP,
                RSVPDescription: RSVPDescription
            });
            exports('rsvp', rsvp);

            var ScheduledAttendanceItemMatchesPreference = {
              MatchesPreference: 0,
              NotMatchesPreference: 1,
              NoPreference: 2
            };
            var ScheduledAttendanceItemMatchesPreferenceDescription = {
              0: "Matches Preference",
              1: "Not Matches Preference",
              2: "No Preference"
            };

            var scheduledAttendanceItemMatchesPreference = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ScheduledAttendanceItemMatchesPreference: ScheduledAttendanceItemMatchesPreference,
                ScheduledAttendanceItemMatchesPreferenceDescription: ScheduledAttendanceItemMatchesPreferenceDescription
            });
            exports('scheduledAttendanceItemMatchesPreference', scheduledAttendanceItemMatchesPreference);

            var ScheduledAttendanceItemStatus = {
              Pending: 0,
              Confirmed: 1,
              Declined: 2,
              Unscheduled: 3
            };
            var ScheduledAttendanceItemStatusDescription = {
              0: "Pending",
              1: "Confirmed",
              2: "Declined",
              3: "Unscheduled"
            };

            var scheduledAttendanceItemStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ScheduledAttendanceItemStatus: ScheduledAttendanceItemStatus,
                ScheduledAttendanceItemStatusDescription: ScheduledAttendanceItemStatusDescription
            });
            exports('scheduledAttendanceItemStatus', scheduledAttendanceItemStatus);

            var SchedulerResourceGroupMemberFilterType = {
              ShowMatchingPreference: 0,
              ShowAllGroupMembers: 1
            };
            var SchedulerResourceGroupMemberFilterTypeDescription = {
              0: "Show Matching Preference",
              1: "Show All Group Members"
            };

            var schedulerResourceGroupMemberFilterType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SchedulerResourceGroupMemberFilterType: SchedulerResourceGroupMemberFilterType,
                SchedulerResourceGroupMemberFilterTypeDescription: SchedulerResourceGroupMemberFilterTypeDescription
            });
            exports('schedulerResourceGroupMemberFilterType', schedulerResourceGroupMemberFilterType);

            var SessionStatus = {
              Transient: 0,
              PaymentPending: 1,
              Completed: 2
            };
            var SessionStatusDescription = {
              0: "Transient",
              1: "Payment Pending",
              2: "Completed"
            };

            var sessionStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SessionStatus: SessionStatus,
                SessionStatusDescription: SessionStatusDescription
            });
            exports('sessionStatus', sessionStatus);

            var SignatureDocumentAction = {
              Email: 0,
              Embed: 1
            };
            var SignatureDocumentActionDescription = {
              0: "Email",
              1: "Embed"
            };

            var signatureDocumentAction = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SignatureDocumentAction: SignatureDocumentAction,
                SignatureDocumentActionDescription: SignatureDocumentActionDescription
            });
            exports('signatureDocumentAction', signatureDocumentAction);

        })
    };
}));
//# sourceMappingURL=Event.js.map
