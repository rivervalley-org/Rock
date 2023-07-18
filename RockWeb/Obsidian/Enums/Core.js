System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            const AddressInvalidReason = {
                None: 0,
                NotFound: 1,
                Vacant: 2
            };
            const AddressInvalidReasonDescription = {
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

            const AuditType = {
                Add: 0,
                Modify: 1,
                Delete: 2
            };
            const AuditTypeDescription = {
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

            const CameraBarcodeConfiguration = {
                Off: 0,
                Available: 1,
                AlwaysOn: 2,
                Passive: 3
            };
            const CameraBarcodeConfigurationDescription = {
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

            const ChangeType = {
                Add: 0,
                Modify: 1,
                Delete: 2
            };
            const ChangeTypeDescription = {
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

            const ColorDepth = {
                Undefined: -1,
                BlackWhite: 0,
                Grayscale8bit: 1,
                Grayscale24bit: 2,
                Color8bit: 3,
                Color24bit: 4
            };
            const ColorDepthDescription = {
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

            const FollowingSuggestedStatus = {
                PendingNotification: 0,
                Suggested: 1,
                Ignored: 2
            };
            const FollowingSuggestedStatusDescription = {
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

            const Format = {
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
            const FormatDescription = {
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

            const JobNotificationStatus = {
                All: 1,
                Success: 2,
                Error: 3,
                None: 4
            };
            const JobNotificationStatusDescription = {
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

            const KioskType = {
                IPad: 0,
                WindowsApp: 1,
                Browser: 2
            };
            const KioskTypeDescription = {
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

            const MatchFlag = {
                None: 0,
                Moved: 1,
                POBoxClosed: 2,
                MovedNoForwarding: 3,
                MovedToForeignCountry: 4
            };
            const MatchFlagDescription = {
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

            const MoveType = {
                None: 0,
                Family: 1,
                Individual: 2,
                Business: 3
            };
            const MoveTypeDescription = {
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

            const NcoaType = {
                None: 0,
                NoMove: 1,
                Month48Move: 2,
                Move: 3
            };
            const NcoaTypeDescription = {
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

            const NoteApprovalStatus = {
                PendingApproval: 0,
                Approved: 1,
                Denied: 2
            };
            const NoteApprovalStatusDescription = {
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

            const NotificationMessageActionType = {
                Invalid: 0,
                ShowMessage: 1,
                LinkToPage: 2
            };
            const NotificationMessageActionTypeDescription = {
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

            const PrintFrom = {
                Client: 0,
                Server: 1
            };
            const PrintFromDescription = {
                0: "Client",
                1: "Server"
            };

            var printFrom = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PrintFrom: PrintFrom,
                PrintFromDescription: PrintFromDescription
            });
            exports('printFrom', printFrom);

            const PrintTo = {
                Default: 0,
                Kiosk: 1,
                Location: 2
            };
            const PrintToDescription = {
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

            const Processed = {
                NotProcessed: 0,
                Complete: 1,
                ManualUpdateRequired: 2,
                ManualUpdateRequiredOrNotProcessed: 3,
                All: 4
            };
            const ProcessedDescription = {
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

            const Resolution = {
                Undefined: -1,
                DPI72: 0,
                DPI150: 1,
                DPI300: 2,
                DPI600: 3
            };
            const ResolutionDescription = {
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

            const SignatureDocumentStatus = {
                None: 0,
                Sent: 1,
                Signed: 2,
                Cancelled: 3,
                Expired: 4
            };
            const SignatureDocumentStatusDescription = {
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

            const SignatureType = {
                Typed: 0,
                Drawn: 1
            };
            const SignatureTypeDescription = {
                0: "Typed",
                1: "Drawn"
            };

            var signatureType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SignatureType: SignatureType,
                SignatureTypeDescription: SignatureTypeDescription
            });
            exports('signatureType', signatureType);

            const SpecialRole = {
                None: 0,
                AllUsers: 1,
                AllAuthenticatedUsers: 2,
                AllUnAuthenticatedUsers: 3
            };
            const SpecialRoleDescription = {
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

            const TimeIntervalUnit = {
                Seconds: 0,
                Minutes: 1,
                Hours: 2,
                Days: 3,
                Months: 4,
                Years: 5
            };
            const TimeIntervalUnitDescription = {
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

            const UpdatedAddressType = {
                None: 0,
                Residential: 1,
                Business: 2
            };
            const UpdatedAddressTypeDescription = {
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
