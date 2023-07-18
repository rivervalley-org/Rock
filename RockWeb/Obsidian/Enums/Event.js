System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            const AttendanceGraphBy = {
                Total: 0,
                Group: 1,
                Campus: 2,
                Schedule: 3,
                Location: 4
            };
            const AttendanceGraphByDescription = {
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

            const AttendanceStatus = {
                DidNotAttend: 0,
                DidAttend: 1,
                IsPresent: 2
            };
            const AttendanceStatusDescription = {
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

            const InteractiveExperienceApprovalStatus = {
                Pending: 0,
                Approved: 1,
                Rejected: 2
            };
            const InteractiveExperienceApprovalStatusDescription = {
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

            const InteractiveExperienceCampusBehavior = {
                FilterSchedulesByCampusGeofences: 0,
                DetermineCampusFromGeofence: 1,
                UseIndividualsCampus: 2
            };
            const InteractiveExperienceCampusBehaviorDescription = {
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

            const InteractiveExperiencePushNotificationType = {
                Never: 0,
                EveryAction: 1,
                SpecificActions: 2
            };
            const InteractiveExperiencePushNotificationTypeDescription = {
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

            const RegistrantsSameFamily = {
                No: 0,
                Yes: 1,
                Ask: 2
            };
            const RegistrantsSameFamilyDescription = {
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

            const RegistrarOption = {
                PromptForRegistrar: 0,
                PrefillFirstRegistrant: 1,
                UseFirstRegistrant: 2,
                UseLoggedInPerson: 3
            };
            const RegistrarOptionDescription = {
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

            const RegistrationCostSummaryType = {
                Cost: 0,
                Fee: 1,
                Discount: 2,
                Total: 3
            };
            const RegistrationCostSummaryTypeDescription = {
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

            const RegistrationFeeType = {
                Single: 0,
                Multiple: 1
            };
            const RegistrationFeeTypeDescription = {
                0: "Single",
                1: "Multiple"
            };

            var registrationFeeType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RegistrationFeeType: RegistrationFeeType,
                RegistrationFeeTypeDescription: RegistrationFeeTypeDescription
            });
            exports('registrationFeeType', registrationFeeType);

            const RegistrationFieldSource = {
                PersonField: 0,
                PersonAttribute: 1,
                GroupMemberAttribute: 2,
                RegistrantAttribute: 4
            };
            const RegistrationFieldSourceDescription = {
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

            const RegistrationPersonFieldType = {
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
            const RegistrationPersonFieldTypeDescription = {
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

            const RSVP = {
                No: 0,
                Yes: 1,
                Maybe: 2,
                Unknown: 3
            };
            const RSVPDescription = {
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

            const SessionStatus = {
                Transient: 0,
                PaymentPending: 1,
                Completed: 2
            };
            const SessionStatusDescription = {
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

            const SignatureDocumentAction = {
                Email: 0,
                Embed: 1
            };
            const SignatureDocumentActionDescription = {
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
