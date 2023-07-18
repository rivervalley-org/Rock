System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            const SearchOrder = {
                Relevance: 0,
                Newest: 1,
                Oldest: 2,
                Trending: 3,
                Alphabetical: 4
            };
            const SearchOrderDescription = {
                0: "Relevance",
                1: "Newest",
                2: "Oldest",
                3: "Trending",
                4: "Alphabetical"
            };

            var searchOrder = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SearchOrder: SearchOrder,
                SearchOrderDescription: SearchOrderDescription
            });

            var fakeGeneratedIndex$6 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                searchOrder: searchOrder
            });

            var fakeGeneratedIndex$5 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ContentCollectionView: fakeGeneratedIndex$6
            });
            exports('Cms', fakeGeneratedIndex$5);

            const RegisterMode = {
                Family: 0,
                Anonymous: 1,
                Group: 2
            };
            const RegisterModeDescription = {
                0: "Family",
                1: "Anonymous",
                2: "Group"
            };

            var registerMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RegisterMode: RegisterMode,
                RegisterModeDescription: RegisterModeDescription
            });

            var fakeGeneratedIndex$4 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                registerMode: registerMode
            });

            var fakeGeneratedIndex$3 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SignUp: fakeGeneratedIndex$4
            });
            exports('Engagement', fakeGeneratedIndex$3);

            const AccountEntryStep = {
                Registration: 0,
                DuplicatePersonSelection: 1,
                ExistingAccount: 2,
                ConfirmationSent: 3,
                Completed: 4,
                PasswordlessConfirmationSent: 5
            };
            const AccountEntryStepDescription = {
                0: "Registration",
                1: "Duplicate Person Selection",
                2: "Existing Account",
                3: "Confirmation Sent",
                4: "Completed",
                5: "Passwordless Confirmation Sent"
            };

            var accountEntryStep = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AccountEntryStep: AccountEntryStep,
                AccountEntryStepDescription: AccountEntryStepDescription
            });

            var fakeGeneratedIndex$2 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                accountEntryStep: accountEntryStep
            });

            const LoginMethod = {
                InternalDatabase: 0,
                Passwordless: 1
            };
            const LoginMethodDescription = {
                0: "Internal Database",
                1: "Passwordless"
            };

            var loginMethod = /*#__PURE__*/Object.freeze({
                __proto__: null,
                LoginMethod: LoginMethod,
                LoginMethodDescription: LoginMethodDescription
            });

            const PasswordlessLoginStep = {
                Start: 0,
                Verify: 1
            };
            const PasswordlessLoginStepDescription = {
                0: "Start",
                1: "Verify"
            };

            var passwordlessLoginStep = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PasswordlessLoginStep: PasswordlessLoginStep,
                PasswordlessLoginStepDescription: PasswordlessLoginStepDescription
            });

            var fakeGeneratedIndex$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                loginMethod: loginMethod,
                passwordlessLoginStep: passwordlessLoginStep
            });

            var fakeGeneratedIndex = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AccountEntry: fakeGeneratedIndex$2,
                Login: fakeGeneratedIndex$1
            });
            exports('Security', fakeGeneratedIndex);

        })
    };
}));
