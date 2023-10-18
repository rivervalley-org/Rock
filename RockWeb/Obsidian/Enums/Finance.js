System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var AlertType = {
              Gratitude: 0,
              FollowUp: 1
            };
            var AlertTypeDescription = {
              0: "Gratitude",
              1: "Follow-up"
            };

            var alertType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AlertType: AlertType,
                AlertTypeDescription: AlertTypeDescription
            });
            exports('alertType', alertType);

            var BatchStatus = {
              Pending: 0,
              Open: 1,
              Closed: 2
            };
            var BatchStatusDescription = {
              0: "Pending",
              1: "Open",
              2: "Closed"
            };

            var batchStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                BatchStatus: BatchStatus,
                BatchStatusDescription: BatchStatusDescription
            });
            exports('batchStatus', batchStatus);

            var BenevolenceWorkflowTriggerType = {
              RequestStarted: 0,
              StatusChanged: 1,
              CaseworkerAssigned: 2,
              Manual: 3
            };
            var BenevolenceWorkflowTriggerTypeDescription = {
              0: "Request Started",
              1: "Status Changed",
              2: "Caseworker Assigned",
              3: "Manual"
            };

            var benevolenceWorkflowTriggerType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                BenevolenceWorkflowTriggerType: BenevolenceWorkflowTriggerType,
                BenevolenceWorkflowTriggerTypeDescription: BenevolenceWorkflowTriggerTypeDescription
            });
            exports('benevolenceWorkflowTriggerType', benevolenceWorkflowTriggerType);

            var FinancialScheduledTransactionStatus = {
              Active: 0,
              Completed: 1,
              Paused: 2,
              Canceled: 3,
              Failed: 4,
              PastDue: 5
            };
            var FinancialScheduledTransactionStatusDescription = {
              0: "Active",
              1: "Completed",
              2: "Paused",
              3: "Canceled",
              4: "Failed",
              5: "Past Due"
            };

            var financialScheduledTransactionStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                FinancialScheduledTransactionStatus: FinancialScheduledTransactionStatus,
                FinancialScheduledTransactionStatusDescription: FinancialScheduledTransactionStatusDescription
            });
            exports('financialScheduledTransactionStatus', financialScheduledTransactionStatus);

            var MICRStatus = {
              Success: 0,
              Fail: 1
            };
            var MICRStatusDescription = {
              0: "Success",
              1: "Fail"
            };

            var mICRStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                MICRStatus: MICRStatus,
                MICRStatusDescription: MICRStatusDescription
            });
            exports('mICRStatus', mICRStatus);

            var TransactionGraphBy = {
              Total: 0,
              FinancialAccount: 1,
              Campus: 2
            };
            var TransactionGraphByDescription = {
              0: "Total",
              1: "Financial Account",
              2: "Campus"
            };

            var transactionGraphBy = /*#__PURE__*/Object.freeze({
                __proto__: null,
                TransactionGraphBy: TransactionGraphBy,
                TransactionGraphByDescription: TransactionGraphByDescription
            });
            exports('transactionGraphBy', transactionGraphBy);

        })
    };
}));
//# sourceMappingURL=Finance.js.map
