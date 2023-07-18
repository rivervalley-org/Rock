System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            const AgeClassification = {
                Unknown: 0,
                Adult: 1,
                Child: 2
            };
            const AgeClassificationDescription = {
                0: "Unknown",
                1: "Adult",
                2: "Child"
            };

            var ageClassification = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AgeClassification: AgeClassification,
                AgeClassificationDescription: AgeClassificationDescription
            });
            exports('ageClassification', ageClassification);

            const AssessmentRequestStatus = {
                Pending: 0,
                Complete: 1
            };
            const AssessmentRequestStatusDescription = {
                0: "Pending",
                1: "Complete"
            };

            var assessmentRequestStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AssessmentRequestStatus: AssessmentRequestStatus,
                AssessmentRequestStatusDescription: AssessmentRequestStatusDescription
            });
            exports('assessmentRequestStatus', assessmentRequestStatus);

            const AuthenticationServiceType = {
                Internal: 0,
                External: 1
            };
            const AuthenticationServiceTypeDescription = {
                0: "Internal",
                1: "External"
            };

            var authenticationServiceType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AuthenticationServiceType: AuthenticationServiceType,
                AuthenticationServiceTypeDescription: AuthenticationServiceTypeDescription
            });
            exports('authenticationServiceType', authenticationServiceType);

            const EmailPreference = {
                EmailAllowed: 0,
                NoMassEmails: 1,
                DoNotEmail: 2
            };
            const EmailPreferenceDescription = {
                0: "Email Allowed",
                1: "No Mass Emails",
                2: "Do Not Email"
            };

            var emailPreference = /*#__PURE__*/Object.freeze({
                __proto__: null,
                EmailPreference: EmailPreference,
                EmailPreferenceDescription: EmailPreferenceDescription
            });
            exports('emailPreference', emailPreference);

            const Gender = {
                Unknown: 0,
                Male: 1,
                Female: 2
            };
            const GenderDescription = {
                0: "Unknown",
                1: "Male",
                2: "Female"
            };

            var gender = /*#__PURE__*/Object.freeze({
                __proto__: null,
                Gender: Gender,
                GenderDescription: GenderDescription
            });
            exports('gender', gender);

            const PersonalizationType = {
                Segment: 0,
                RequestFilter: 1
            };
            const PersonalizationTypeDescription = {
                0: "Segment",
                1: "Request Filter"
            };

            var personalizationType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PersonalizationType: PersonalizationType,
                PersonalizationTypeDescription: PersonalizationTypeDescription
            });
            exports('personalizationType', personalizationType);

        })
    };
}));
