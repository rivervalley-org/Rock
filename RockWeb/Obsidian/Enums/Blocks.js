System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var SearchOrder = {
              Relevance: 0,
              Newest: 1,
              Oldest: 2,
              Trending: 3,
              Alphabetical: 4
            };
            var SearchOrderDescription = {
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

            var virtualIndex$d = /*#__PURE__*/Object.freeze({
                __proto__: null,
                searchOrder: searchOrder
            });

            var virtualIndex$c = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ContentCollectionView: virtualIndex$d
            });
            exports('Cms', virtualIndex$c);

            var CommunicationPreference = {
              None: 0,
              Email: 1,
              SMS: 2,
              PushNotification: 3
            };
            var CommunicationPreferenceDescription = {
              0: "None",
              1: "Email",
              2: "SMS",
              3: "Push Notification"
            };

            var communicationPreference = /*#__PURE__*/Object.freeze({
                __proto__: null,
                CommunicationPreference: CommunicationPreference,
                CommunicationPreferenceDescription: CommunicationPreferenceDescription
            });

            var virtualIndex$b = /*#__PURE__*/Object.freeze({
                __proto__: null,
                communicationPreference: communicationPreference
            });

            var FamilyPreRegistrationCommunicationPreference = {
              None: 0,
              Email: 1,
              SMS: 2,
              PushNotification: 3
            };
            var FamilyPreRegistrationCommunicationPreferenceDescription = {
              0: "None",
              1: "Email",
              2: "SMS",
              3: "Push Notification"
            };

            var familyPreRegistrationCommunicationPreference = /*#__PURE__*/Object.freeze({
                __proto__: null,
                FamilyPreRegistrationCommunicationPreference: FamilyPreRegistrationCommunicationPreference,
                FamilyPreRegistrationCommunicationPreferenceDescription: FamilyPreRegistrationCommunicationPreferenceDescription
            });

            var virtualIndex$a = /*#__PURE__*/Object.freeze({
                __proto__: null,
                FamilyPreRegistration: virtualIndex$b,
                familyPreRegistrationCommunicationPreference: familyPreRegistrationCommunicationPreference
            });
            exports('Crm', virtualIndex$a);

            var RegisterMode = {
              Family: 0,
              Anonymous: 1,
              Group: 2
            };
            var RegisterModeDescription = {
              0: "Family",
              1: "Anonymous",
              2: "Group"
            };

            var registerMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                RegisterMode: RegisterMode,
                RegisterModeDescription: RegisterModeDescription
            });

            var virtualIndex$9 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                registerMode: registerMode
            });

            var virtualIndex$8 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SignUp: virtualIndex$9
            });
            exports('Engagement', virtualIndex$8);

            var GroupAttendanceDetailDateSelectionMode = {
              None: 0,
              Readonly: 1,
              DatePicker: 2,
              ScheduledDatePicker: 3
            };
            var GroupAttendanceDetailDateSelectionModeDescription = {
              0: "None",
              1: "Readonly",
              2: "Date Picker",
              3: "Scheduled Date Picker"
            };

            var groupAttendanceDetailDateSelectionMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                GroupAttendanceDetailDateSelectionMode: GroupAttendanceDetailDateSelectionMode,
                GroupAttendanceDetailDateSelectionModeDescription: GroupAttendanceDetailDateSelectionModeDescription
            });

            var GroupAttendanceDetailLocationSelectionMode = {
              None: 0,
              Readonly: 1,
              GroupLocationPicker: 2
            };
            var GroupAttendanceDetailLocationSelectionModeDescription = {
              0: "None",
              1: "Readonly",
              2: "Group Location Picker"
            };

            var groupAttendanceDetailLocationSelectionMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                GroupAttendanceDetailLocationSelectionMode: GroupAttendanceDetailLocationSelectionMode,
                GroupAttendanceDetailLocationSelectionModeDescription: GroupAttendanceDetailLocationSelectionModeDescription
            });

            var GroupAttendanceDetailScheduleSelectionMode = {
              None: 0,
              Readonly: 1,
              GroupLocationSchedulePicker: 2
            };
            var GroupAttendanceDetailScheduleSelectionModeDescription = {
              0: "None",
              1: "Readonly",
              2: "Group Location Schedule Picker"
            };

            var groupAttendanceDetailScheduleSelectionMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                GroupAttendanceDetailScheduleSelectionMode: GroupAttendanceDetailScheduleSelectionMode,
                GroupAttendanceDetailScheduleSelectionModeDescription: GroupAttendanceDetailScheduleSelectionModeDescription
            });

            var virtualIndex$7 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                groupAttendanceDetailDateSelectionMode: groupAttendanceDetailDateSelectionMode,
                groupAttendanceDetailLocationSelectionMode: groupAttendanceDetailLocationSelectionMode,
                groupAttendanceDetailScheduleSelectionMode: groupAttendanceDetailScheduleSelectionMode
            });

            var ResourceListSourceType = {
              GroupMembers: 0,
              GroupMatchingPreference: 1,
              AlternateGroup: 2,
              ParentGroup: 3,
              DataView: 4,
              GroupMatchingAssignment: 5
            };
            var ResourceListSourceTypeDescription = {
              0: "All Group Members",
              1: "Matching Week",
              2: "Alternate Group",
              3: "Parent Group",
              4: "Data View",
              5: "Matching Assignment"
            };

            var resourceListSourceType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ResourceListSourceType: ResourceListSourceType,
                ResourceListSourceTypeDescription: ResourceListSourceTypeDescription
            });

            var ToolboxActionType = {
              ViewCurrent: 0,
              UpdatePreferences: 1,
              SignUp: 2
            };
            var ToolboxActionTypeDescription = {
              0: "View Current",
              1: "Update Preferences",
              2: "Sign Up"
            };

            var toolboxActionType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ToolboxActionType: ToolboxActionType,
                ToolboxActionTypeDescription: ToolboxActionTypeDescription
            });

            var ToolboxScheduleRowActionType = {
              Accept: 0,
              Decline: 1,
              Cancel: 2,
              Delete: 3
            };
            var ToolboxScheduleRowActionTypeDescription = {
              0: "Accept",
              1: "Decline",
              2: "Cancel",
              3: "Delete"
            };

            var toolboxScheduleRowActionType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ToolboxScheduleRowActionType: ToolboxScheduleRowActionType,
                ToolboxScheduleRowActionTypeDescription: ToolboxScheduleRowActionTypeDescription
            });

            var ToolboxScheduleRowConfirmationStatus = {
              Pending: 0,
              Confirmed: 1,
              Declined: 2,
              Unavailable: 3
            };
            var ToolboxScheduleRowConfirmationStatusDescription = {
              0: "Pending",
              1: "Confirmed",
              2: "Declined",
              3: "Unavailable"
            };

            var toolboxScheduleRowConfirmationStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ToolboxScheduleRowConfirmationStatus: ToolboxScheduleRowConfirmationStatus,
                ToolboxScheduleRowConfirmationStatusDescription: ToolboxScheduleRowConfirmationStatusDescription
            });

            var UpdateSchedulePreferenceMode = {
              ReplacePreference: 0,
              AddToPreference: 1
            };
            var UpdateSchedulePreferenceModeDescription = {
              0: "Replace Preference",
              1: "Add To Preference"
            };

            var updateSchedulePreferenceMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                UpdateSchedulePreferenceMode: UpdateSchedulePreferenceMode,
                UpdateSchedulePreferenceModeDescription: UpdateSchedulePreferenceModeDescription
            });

            var virtualIndex$6 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                resourceListSourceType: resourceListSourceType,
                toolboxActionType: toolboxActionType,
                toolboxScheduleRowActionType: toolboxScheduleRowActionType,
                toolboxScheduleRowConfirmationStatus: toolboxScheduleRowConfirmationStatus,
                updateSchedulePreferenceMode: updateSchedulePreferenceMode
            });

            var virtualIndex$5 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                GroupAttendanceDetail: virtualIndex$7,
                Scheduling: virtualIndex$6
            });
            exports('Group', virtualIndex$5);

            var AccountEntryStep = {
              Registration: 0,
              DuplicatePersonSelection: 1,
              ExistingAccount: 2,
              ConfirmationSent: 3,
              Completed: 4,
              PasswordlessConfirmationSent: 5
            };
            var AccountEntryStepDescription = {
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

            var virtualIndex$4 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                accountEntryStep: accountEntryStep
            });

            var ConfirmAccountViewType = {
              AccountConfirmation: 0,
              Alert: 1,
              DeleteConfirmation: 2,
              ChangePassword: 3,
              Content: 4
            };
            var ConfirmAccountViewTypeDescription = {
              0: "Account Confirmation",
              1: "Alert",
              2: "Delete Confirmation",
              3: "Change Password",
              4: "Content"
            };

            var confirmAccountViewType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ConfirmAccountViewType: ConfirmAccountViewType,
                ConfirmAccountViewTypeDescription: ConfirmAccountViewTypeDescription
            });

            var virtualIndex$3 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                confirmAccountViewType: confirmAccountViewType
            });

            var SendInstructionsResultType = {
              InstructionsSent: 0,
              EmailInvalid: 1,
              ChangePasswordNotSupported: 2,
              CaptchaInvalid: 3
            };
            var SendInstructionsResultTypeDescription = {
              0: "Instructions Sent",
              1: "Email Invalid",
              2: "Change Password Not Supported",
              3: "Captcha Invalid"
            };

            var sendInstructionsResultType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SendInstructionsResultType: SendInstructionsResultType,
                SendInstructionsResultTypeDescription: SendInstructionsResultTypeDescription
            });

            var virtualIndex$2 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                sendInstructionsResultType: sendInstructionsResultType
            });

            var LoginMethod = {
              InternalDatabase: 0,
              Passwordless: 1
            };
            var LoginMethodDescription = {
              0: "Internal Database",
              1: "Passwordless"
            };

            var loginMethod = /*#__PURE__*/Object.freeze({
                __proto__: null,
                LoginMethod: LoginMethod,
                LoginMethodDescription: LoginMethodDescription
            });

            var PasswordlessLoginStep = {
              Start: 0,
              Verify: 1
            };
            var PasswordlessLoginStepDescription = {
              0: "Start",
              1: "Verify"
            };

            var passwordlessLoginStep = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PasswordlessLoginStep: PasswordlessLoginStep,
                PasswordlessLoginStepDescription: PasswordlessLoginStepDescription
            });

            var virtualIndex$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                loginMethod: loginMethod,
                passwordlessLoginStep: passwordlessLoginStep
            });

            var virtualIndex = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AccountEntry: virtualIndex$4,
                ConfirmAccount: virtualIndex$3,
                ForgotUserName: virtualIndex$2,
                Login: virtualIndex$1
            });
            exports('Security', virtualIndex);

        })
    };
}));
//# sourceMappingURL=Blocks.js.map
