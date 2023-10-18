System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var AddressInvalidReason = {
              None: 0,
              NotFound: 1,
              Vacant: 2
            };
            var AddressInvalidReasonDescription = {
              0: "None",
              1: "Not Found",
              2: "Vacant"
            };

            var addressInvalidReason = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AddressInvalidReason: AddressInvalidReason,
                AddressInvalidReasonDescription: AddressInvalidReasonDescription
            });
            exports('addressInvalidReason', addressInvalidReason);

            var AuditType = {
              Add: 0,
              Modify: 1,
              Delete: 2
            };
            var AuditTypeDescription = {
              0: "Add",
              1: "Modify",
              2: "Delete"
            };

            var auditType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AuditType: AuditType,
                AuditTypeDescription: AuditTypeDescription
            });
            exports('auditType', auditType);

            var CameraBarcodeConfiguration = {
              Off: 0,
              Available: 1,
              AlwaysOn: 2,
              Passive: 3
            };
            var CameraBarcodeConfigurationDescription = {
              0: "Off",
              1: "Available",
              2: "Always On",
              3: "Passive"
            };

            var cameraBarcodeConfiguration = /*#__PURE__*/Object.freeze({
                __proto__: null,
                CameraBarcodeConfiguration: CameraBarcodeConfiguration,
                CameraBarcodeConfigurationDescription: CameraBarcodeConfigurationDescription
            });
            exports('cameraBarcodeConfiguration', cameraBarcodeConfiguration);

            var ChangeType = {
              Add: 0,
              Modify: 1,
              Delete: 2
            };
            var ChangeTypeDescription = {
              0: "Add",
              1: "Modify",
              2: "Delete"
            };

            var changeType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ChangeType: ChangeType,
                ChangeTypeDescription: ChangeTypeDescription
            });
            exports('changeType', changeType);

            var ColorDepth = {
              Undefined: -1,
              BlackWhite: 0,
              Grayscale8bit: 1,
              Grayscale24bit: 2,
              Color8bit: 3,
              Color24bit: 4
            };
            var ColorDepthDescription = {
              [-1]: "Undefined",
              0: "Black White",
              1: "Grayscale 8bit",
              2: "Grayscale 2 4bit",
              3: "Color 8bit",
              4: "Color 2 4bit"
            };

            var colorDepth = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ColorDepth: ColorDepth,
                ColorDepthDescription: ColorDepthDescription
            });
            exports('colorDepth', colorDepth);

            var ColorRecipe = {
              Primary: 0,
              Darkest: 1,
              Dark: 2,
              Medium: 3,
              Light: 4,
              Lightest: 5
            };
            var ColorRecipeDescription = {
              0: "Primary",
              1: "Darkest",
              2: "Dark",
              3: "Medium",
              4: "Light",
              5: "Lightest"
            };

            var colorRecipe = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ColorRecipe: ColorRecipe,
                ColorRecipeDescription: ColorRecipeDescription
            });
            exports('colorRecipe', colorRecipe);

            var ColorScheme = {
              Light: 0,
              Dark: 1
            };
            var ColorSchemeDescription = {
              0: "Light",
              1: "Dark"
            };

            var colorScheme = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ColorScheme: ColorScheme,
                ColorSchemeDescription: ColorSchemeDescription
            });
            exports('colorScheme', colorScheme);

            var FollowingSuggestedStatus = {
              PendingNotification: 0,
              Suggested: 1,
              Ignored: 2
            };
            var FollowingSuggestedStatusDescription = {
              0: "Pending Notification",
              1: "Suggested",
              2: "Ignored"
            };

            var followingSuggestedStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                FollowingSuggestedStatus: FollowingSuggestedStatus,
                FollowingSuggestedStatusDescription: FollowingSuggestedStatusDescription
            });
            exports('followingSuggestedStatus', followingSuggestedStatus);

            var Format = {
              Undefined: -1,
              JPG: 0,
              GIF: 1,
              PNG: 2,
              PDF: 3,
              Word: 4,
              Excel: 5,
              Text: 6,
              HTML: 7
            };
            var FormatDescription = {
              [-1]: "Undefined",
              0: "JPG",
              1: "GIF",
              2: "PNG",
              3: "PDF",
              4: "Word",
              5: "Excel",
              6: "Text",
              7: "HTML"
            };

            var format = /*#__PURE__*/Object.freeze({
                __proto__: null,
                Format: Format,
                FormatDescription: FormatDescription
            });
            exports('format', format);

            var JobNotificationStatus = {
              All: 1,
              Success: 2,
              Error: 3,
              None: 4
            };
            var JobNotificationStatusDescription = {
              1: "All",
              2: "Success",
              3: "Error",
              4: "None"
            };

            var jobNotificationStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                JobNotificationStatus: JobNotificationStatus,
                JobNotificationStatusDescription: JobNotificationStatusDescription
            });
            exports('jobNotificationStatus', jobNotificationStatus);

            var KioskType = {
              IPad: 0,
              WindowsApp: 1,
              Browser: 2
            };
            var KioskTypeDescription = {
              0: "iPad",
              1: "Windows App",
              2: "Browser"
            };

            var kioskType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                KioskType: KioskType,
                KioskTypeDescription: KioskTypeDescription
            });
            exports('kioskType', kioskType);

            var MatchFlag = {
              None: 0,
              Moved: 1,
              POBoxClosed: 2,
              MovedNoForwarding: 3,
              MovedToForeignCountry: 4
            };
            var MatchFlagDescription = {
              0: "None",
              1: "Moved",
              2: "PO Box Closed",
              3: "Moved No Forwarding",
              4: "Moved To Foreign Country"
            };

            var matchFlag = /*#__PURE__*/Object.freeze({
                __proto__: null,
                MatchFlag: MatchFlag,
                MatchFlagDescription: MatchFlagDescription
            });
            exports('matchFlag', matchFlag);

            var MoveType = {
              None: 0,
              Family: 1,
              Individual: 2,
              Business: 3
            };
            var MoveTypeDescription = {
              0: "None",
              1: "Family",
              2: "Individual",
              3: "Business"
            };

            var moveType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                MoveType: MoveType,
                MoveTypeDescription: MoveTypeDescription
            });
            exports('moveType', moveType);

            var NcoaType = {
              None: 0,
              NoMove: 1,
              Month48Move: 2,
              Move: 3
            };
            var NcoaTypeDescription = {
              0: "None",
              1: "No Move",
              2: "Month 48 Move",
              3: "Move"
            };

            var ncoaType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                NcoaType: NcoaType,
                NcoaTypeDescription: NcoaTypeDescription
            });
            exports('ncoaType', ncoaType);

            var NoteApprovalStatus = {
              PendingApproval: 0,
              Approved: 1,
              Denied: 2
            };
            var NoteApprovalStatusDescription = {
              0: "Pending Approval",
              1: "Approved",
              2: "Denied"
            };

            var noteApprovalStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                NoteApprovalStatus: NoteApprovalStatus,
                NoteApprovalStatusDescription: NoteApprovalStatusDescription
            });
            exports('noteApprovalStatus', noteApprovalStatus);

            var NotificationMessageActionType = {
              Invalid: 0,
              ShowMessage: 1,
              LinkToPage: 2
            };
            var NotificationMessageActionTypeDescription = {
              0: "Invalid",
              1: "Show Message",
              2: "Link To Page"
            };

            var notificationMessageActionType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                NotificationMessageActionType: NotificationMessageActionType,
                NotificationMessageActionTypeDescription: NotificationMessageActionTypeDescription
            });
            exports('notificationMessageActionType', notificationMessageActionType);

            var PrintFrom = {
              Client: 0,
              Server: 1
            };
            var PrintFromDescription = {
              0: "Client",
              1: "Server"
            };

            var printFrom = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PrintFrom: PrintFrom,
                PrintFromDescription: PrintFromDescription
            });
            exports('printFrom', printFrom);

            var PrintTo = {
              Default: 0,
              Kiosk: 1,
              Location: 2
            };
            var PrintToDescription = {
              0: "Default",
              1: "Kiosk",
              2: "Location"
            };

            var printTo = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PrintTo: PrintTo,
                PrintToDescription: PrintToDescription
            });
            exports('printTo', printTo);

            var Processed = {
              NotProcessed: 0,
              Complete: 1,
              ManualUpdateRequired: 2,
              ManualUpdateRequiredOrNotProcessed: 3,
              All: 4
            };
            var ProcessedDescription = {
              0: "Not Processed",
              1: "Complete",
              2: "Manual Update Required",
              3: "Manual Update Required Or Not Processed",
              4: "All"
            };

            var processed = /*#__PURE__*/Object.freeze({
                __proto__: null,
                Processed: Processed,
                ProcessedDescription: ProcessedDescription
            });
            exports('processed', processed);

            var Resolution = {
              Undefined: -1,
              DPI72: 0,
              DPI150: 1,
              DPI300: 2,
              DPI600: 3
            };
            var ResolutionDescription = {
              [-1]: "Undefined",
              0: "DPI72",
              1: "DPI150",
              2: "DPI300",
              3: "DPI600"
            };

            var resolution = /*#__PURE__*/Object.freeze({
                __proto__: null,
                Resolution: Resolution,
                ResolutionDescription: ResolutionDescription
            });
            exports('resolution', resolution);

            var SignatureDocumentStatus = {
              None: 0,
              Sent: 1,
              Signed: 2,
              Cancelled: 3,
              Expired: 4
            };
            var SignatureDocumentStatusDescription = {
              0: "None",
              1: "Sent",
              2: "Signed",
              3: "Cancelled",
              4: "Expired"
            };

            var signatureDocumentStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SignatureDocumentStatus: SignatureDocumentStatus,
                SignatureDocumentStatusDescription: SignatureDocumentStatusDescription
            });
            exports('signatureDocumentStatus', signatureDocumentStatus);

            var SignatureType = {
              Typed: 0,
              Drawn: 1
            };
            var SignatureTypeDescription = {
              0: "Typed",
              1: "Drawn"
            };

            var signatureType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SignatureType: SignatureType,
                SignatureTypeDescription: SignatureTypeDescription
            });
            exports('signatureType', signatureType);

            var SpecialRole = {
              None: 0,
              AllUsers: 1,
              AllAuthenticatedUsers: 2,
              AllUnAuthenticatedUsers: 3
            };
            var SpecialRoleDescription = {
              0: "None",
              1: "All Users",
              2: "All Authenticated Users",
              3: "All Un Authenticated Users"
            };

            var specialRole = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SpecialRole: SpecialRole,
                SpecialRoleDescription: SpecialRoleDescription
            });
            exports('specialRole', specialRole);

            var TimeIntervalUnit = {
              Seconds: 0,
              Minutes: 1,
              Hours: 2,
              Days: 3,
              Months: 4,
              Years: 5
            };
            var TimeIntervalUnitDescription = {
              0: "Seconds",
              1: "Minutes",
              2: "Hours",
              3: "Days",
              4: "Months",
              5: "Years"
            };

            var timeIntervalUnit = /*#__PURE__*/Object.freeze({
                __proto__: null,
                TimeIntervalUnit: TimeIntervalUnit,
                TimeIntervalUnitDescription: TimeIntervalUnitDescription
            });
            exports('timeIntervalUnit', timeIntervalUnit);

            var UpdatedAddressType = {
              None: 0,
              Residential: 1,
              Business: 2
            };
            var UpdatedAddressTypeDescription = {
              0: "None",
              1: "Residential",
              2: "Business"
            };

            var updatedAddressType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                UpdatedAddressType: UpdatedAddressType,
                UpdatedAddressTypeDescription: UpdatedAddressTypeDescription
            });
            exports('updatedAddressType', updatedAddressType);

        })
    };
}));
//# sourceMappingURL=Core.js.map