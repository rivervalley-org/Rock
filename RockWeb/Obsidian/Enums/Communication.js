System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            const CommunicationMessageFilter = {
                ShowUnreadReplies: 0,
                ShowAllReplies: 1,
                ShowAllMessages: 2
            };
            const CommunicationMessageFilterDescription = {
                0: "Show Unread Replies",
                1: "Show All Replies",
                2: "Show All Messages"
            };

            var communicationMessageFilter = /*#__PURE__*/Object.freeze({
                __proto__: null,
                CommunicationMessageFilter: CommunicationMessageFilter,
                CommunicationMessageFilterDescription: CommunicationMessageFilterDescription
            });
            exports('communicationMessageFilter', communicationMessageFilter);

            const CommunicationRecipientStatus = {
                Pending: 0,
                Delivered: 1,
                Failed: 2,
                Cancelled: 3,
                Opened: 4,
                Sending: 5
            };
            const CommunicationRecipientStatusDescription = {
                0: "Pending",
                1: "Delivered",
                2: "Failed",
                3: "Cancelled",
                4: "Opened",
                5: "Sending"
            };

            var communicationRecipientStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                CommunicationRecipientStatus: CommunicationRecipientStatus,
                CommunicationRecipientStatusDescription: CommunicationRecipientStatusDescription
            });
            exports('communicationRecipientStatus', communicationRecipientStatus);

            const CommunicationStatus = {
                Transient: 0,
                Draft: 1,
                PendingApproval: 2,
                Approved: 3,
                Denied: 4
            };
            const CommunicationStatusDescription = {
                0: "Transient",
                1: "Draft",
                2: "Pending Approval",
                3: "Approved",
                4: "Denied"
            };

            var communicationStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                CommunicationStatus: CommunicationStatus,
                CommunicationStatusDescription: CommunicationStatusDescription
            });
            exports('communicationStatus', communicationStatus);

            const NotificationClassification = {
                Success: 0,
                Info: 1,
                Warning: 2,
                Danger: 3
            };
            const NotificationClassificationDescription = {
                0: "Success",
                1: "Info",
                2: "Warning",
                3: "Danger"
            };

            var notificationClassification = /*#__PURE__*/Object.freeze({
                __proto__: null,
                NotificationClassification: NotificationClassification,
                NotificationClassificationDescription: NotificationClassificationDescription
            });
            exports('notificationClassification', notificationClassification);

            const SegmentCriteria = {
                All: 0,
                Any: 1
            };
            const SegmentCriteriaDescription = {
                0: "All",
                1: "Any"
            };

            var segmentCriteria = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SegmentCriteria: SegmentCriteria,
                SegmentCriteriaDescription: SegmentCriteriaDescription
            });
            exports('segmentCriteria', segmentCriteria);

        })
    };
}));
