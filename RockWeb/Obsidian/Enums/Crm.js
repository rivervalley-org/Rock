System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var AgeBracket = {
              Unknown: 0,
              ZeroToTwelve: 1,
              ThirteenToSeventeen: 2,
              EighteenToTwentyFour: 3,
              TwentyFiveToThirtyFour: 4,
              ThirtyFiveToFortyFour: 5,
              FortyFiveToFiftyFour: 6,
              FiftyFiveToSixtyFour: 7,
              SixtyFiveOrOlder: 8
            };
            var AgeBracketDescription = {
              0: "Unknown",
              1: "Zero To Twelve",
              2: "Thirteen To Seventeen",
              3: "Eighteen To Twenty Four",
              4: "Twenty Five To Thirty Four",
              5: "Thirty Five To Forty Four",
              6: "Forty Five To Fifty Four",
              7: "Fifty Five To Sixty Four",
              8: "Sixty Five Or Older"
            };

            var ageBracket = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AgeBracket: AgeBracket,
                AgeBracketDescription: AgeBracketDescription
            });
            exports('ageBracket', ageBracket);

            var AgeClassification = {
              Unknown: 0,
              Adult: 1,
              Child: 2
            };
            var AgeClassificationDescription = {
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

            var AssessmentRequestStatus = {
              Pending: 0,
              Complete: 1
            };
            var AssessmentRequestStatusDescription = {
              0: "Pending",
              1: "Complete"
            };

            var assessmentRequestStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AssessmentRequestStatus: AssessmentRequestStatus,
                AssessmentRequestStatusDescription: AssessmentRequestStatusDescription
            });
            exports('assessmentRequestStatus', assessmentRequestStatus);

            var AuthenticationServiceType = {
              Internal: 0,
              External: 1
            };
            var AuthenticationServiceTypeDescription = {
              0: "Internal",
              1: "External"
            };

            var authenticationServiceType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AuthenticationServiceType: AuthenticationServiceType,
                AuthenticationServiceTypeDescription: AuthenticationServiceTypeDescription
            });
            exports('authenticationServiceType', authenticationServiceType);

            var EmailPreference = {
              EmailAllowed: 0,
              NoMassEmails: 1,
              DoNotEmail: 2
            };
            var EmailPreferenceDescription = {
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

            var Gender = {
              Unknown: 0,
              Male: 1,
              Female: 2
            };
            var GenderDescription = {
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

            var PersonalizationType = {
              Segment: 0,
              RequestFilter: 1
            };
            var PersonalizationTypeDescription = {
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
//# sourceMappingURL=Crm.js.map
