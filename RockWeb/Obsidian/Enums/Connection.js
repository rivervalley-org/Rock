System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var ConnectionRequestViewModelSortProperty = {
              Requestor: 0,
              RequestorDesc: 1,
              Connector: 2,
              ConnectorDesc: 3,
              DateAdded: 4,
              DateAddedDesc: 5,
              LastActivity: 6,
              LastActivityDesc: 7,
              Order: 8,
              Campus: 9,
              CampusDesc: 10,
              Group: 11,
              GroupDesc: 12,
              Status: 13,
              StatusDesc: 14,
              State: 15,
              StateDesc: 16
            };
            var ConnectionRequestViewModelSortPropertyDescription = {
              0: "Requestor",
              1: "Requestor Desc",
              2: "Connector",
              3: "Connector Desc",
              4: "Date Added",
              5: "Date Added Desc",
              6: "Last Activity",
              7: "Last Activity Desc",
              8: "Order",
              9: "Campus",
              10: "Campus Desc",
              11: "Group",
              12: "Group Desc",
              13: "Status",
              14: "Status Desc",
              15: "State",
              16: "State Desc"
            };

            var connectionRequestViewModelSortProperty = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ConnectionRequestViewModelSortProperty: ConnectionRequestViewModelSortProperty,
                ConnectionRequestViewModelSortPropertyDescription: ConnectionRequestViewModelSortPropertyDescription
            });
            exports('connectionRequestViewModelSortProperty', connectionRequestViewModelSortProperty);

            var ConnectionTypeViewMode = {
              List: 0,
              Board: 1
            };
            var ConnectionTypeViewModeDescription = {
              0: "List",
              1: "Board"
            };

            var connectionTypeViewMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ConnectionTypeViewMode: ConnectionTypeViewMode,
                ConnectionTypeViewModeDescription: ConnectionTypeViewModeDescription
            });
            exports('connectionTypeViewMode', connectionTypeViewMode);

            var ConnectionWorkflowTriggerType = {
              RequestStarted: 0,
              RequestConnected: 1,
              StatusChanged: 2,
              StateChanged: 3,
              ActivityAdded: 4,
              PlacementGroupAssigned: 5,
              Manual: 6,
              RequestTransferred: 7,
              RequestAssigned: 8,
              FutureFollowupDateReached: 9
            };
            var ConnectionWorkflowTriggerTypeDescription = {
              0: "Request Started",
              1: "Request Connected",
              2: "Status Changed",
              3: "State Changed",
              4: "Activity Added",
              5: "Placement Group Assigned",
              6: "Manual",
              7: "Request Transferred",
              8: "Request Assigned",
              9: "Future Followup Date Reached"
            };

            var connectionWorkflowTriggerType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ConnectionWorkflowTriggerType: ConnectionWorkflowTriggerType,
                ConnectionWorkflowTriggerTypeDescription: ConnectionWorkflowTriggerTypeDescription
            });
            exports('connectionWorkflowTriggerType', connectionWorkflowTriggerType);

            var GroupRequirementsFilter = {
              Ignore: 0,
              MustMeet: 1,
              DoesNotMeet: 2
            };
            var GroupRequirementsFilterDescription = {
              0: "Ignore",
              1: "Must Meet",
              2: "Does Not Meet"
            };

            var groupRequirementsFilter = /*#__PURE__*/Object.freeze({
                __proto__: null,
                GroupRequirementsFilter: GroupRequirementsFilter,
                GroupRequirementsFilterDescription: GroupRequirementsFilterDescription
            });
            exports('groupRequirementsFilter', groupRequirementsFilter);

        })
    };
}));
//# sourceMappingURL=Connection.js.map
