System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var CommunicationMessageFilter = {
              ShowUnreadReplies: 0,
              ShowAllReplies: 1,
              ShowAllMessages: 2
            };
            var CommunicationMessageFilterDescription = {
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

            var CommunicationRecipientStatus = {
              Pending: 0,
              Delivered: 1,
              Failed: 2,
              Cancelled: 3,
              Opened: 4,
              Sending: 5
            };
            var CommunicationRecipientStatusDescription = {
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

            var CommunicationStatus = {
              Transient: 0,
              Draft: 1,
              PendingApproval: 2,
              Approved: 3,
              Denied: 4
            };
            var CommunicationStatusDescription = {
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

            var NotificationClassification = {
              Success: 0,
              Info: 1,
              Warning: 2,
              Danger: 3
            };
            var NotificationClassificationDescription = {
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

            var SegmentCriteria = {
              All: 0,
              Any: 1
            };
            var SegmentCriteriaDescription = {
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
//# sourceMappingURL=Communication.js.map
