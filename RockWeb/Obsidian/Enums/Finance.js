System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            const AlertType = {
                Gratitude: 0,
                FollowUp: 1
            };
            const AlertTypeDescription = {
                0: "Gratitude",
                1: "Follow-up"
            };

            var alertType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                AlertType: AlertType,
                AlertTypeDescription: AlertTypeDescription
            });
            exports('alertType', alertType);

            const BatchStatus = {
                Pending: 0,
                Open: 1,
                Closed: 2
            };
            const BatchStatusDescription = {
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

            const BenevolenceWorkflowTriggerType = {
                RequestStarted: 0,
                StatusChanged: 1,
                CaseworkerAssigned: 2,
                Manual: 3
            };
            const BenevolenceWorkflowTriggerTypeDescription = {
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

            const FinancialScheduledTransactionStatus = {
                Active: 0,
                Completed: 1,
                Paused: 2,
                Canceled: 3,
                Failed: 4,
                PastDue: 5
            };
            const FinancialScheduledTransactionStatusDescription = {
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

            const MICRStatus = {
                Success: 0,
                Fail: 1
            };
            const MICRStatusDescription = {
                0: "Success",
                1: "Fail"
            };

            var mICRStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                MICRStatus: MICRStatus,
                MICRStatusDescription: MICRStatusDescription
            });
            exports('mICRStatus', mICRStatus);

            const TransactionGraphBy = {
                Total: 0,
                FinancialAccount: 1,
                Campus: 2
            };
            const TransactionGraphByDescription = {
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
