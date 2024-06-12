System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var WorkflowActionFormPersonEntryOption = {
              Hidden: 0,
              Optional: 1,
              Required: 2
            };
            var WorkflowActionFormPersonEntryOptionDescription = {
              0: "Hide",
              1: "Optional",
              2: "Required"
            };

            var workflowActionFormPersonEntryOption = /*#__PURE__*/Object.freeze({
                __proto__: null,
                WorkflowActionFormPersonEntryOption: WorkflowActionFormPersonEntryOption,
                WorkflowActionFormPersonEntryOptionDescription: WorkflowActionFormPersonEntryOptionDescription
            });
            exports('workflowActionFormPersonEntryOption', workflowActionFormPersonEntryOption);

            var WorkflowActionFormShowHideOption = {
              Hide: 0,
              Show: 1
            };
            var WorkflowActionFormShowHideOptionDescription = {
              0: "Hide",
              1: "Show"
            };

            var workflowActionFormShowHideOption = /*#__PURE__*/Object.freeze({
                __proto__: null,
                WorkflowActionFormShowHideOption: WorkflowActionFormShowHideOption,
                WorkflowActionFormShowHideOptionDescription: WorkflowActionFormShowHideOptionDescription
            });
            exports('workflowActionFormShowHideOption', workflowActionFormShowHideOption);

            var WorkflowLoggingLevel = {
              None: 0,
              Workflow: 1,
              Activity: 2,
              Action: 3
            };
            var WorkflowLoggingLevelDescription = {
              0: "None",
              1: "Workflow",
              2: "Activity",
              3: "Action"
            };

            var workflowLoggingLevel = /*#__PURE__*/Object.freeze({
                __proto__: null,
                WorkflowLoggingLevel: WorkflowLoggingLevel,
                WorkflowLoggingLevelDescription: WorkflowLoggingLevelDescription
            });
            exports('workflowLoggingLevel', workflowLoggingLevel);

            var WorkflowTriggerType = {
              PreSave: 0,
              PostSave: 1,
              PreDelete: 2,
              PostDelete: 3,
              ImmediatePostSave: 4,
              PostAdd: 5
            };
            var WorkflowTriggerTypeDescription = {
              0: "Pre Save",
              1: "Post Save",
              2: "Pre Delete",
              3: "Post Delete",
              4: "Immediate Post Save",
              5: "Post Add"
            };

            var workflowTriggerType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                WorkflowTriggerType: WorkflowTriggerType,
                WorkflowTriggerTypeDescription: WorkflowTriggerTypeDescription
            });
            exports('workflowTriggerType', workflowTriggerType);

            var WorkflowTriggerValueChangeType = {
              ChangeFromTo: 0,
              ValueEqual: 1
            };
            var WorkflowTriggerValueChangeTypeDescription = {
              0: "Change From To",
              1: "Value Equal"
            };

            var workflowTriggerValueChangeType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                WorkflowTriggerValueChangeType: WorkflowTriggerValueChangeType,
                WorkflowTriggerValueChangeTypeDescription: WorkflowTriggerValueChangeTypeDescription
            });
            exports('workflowTriggerValueChangeType', workflowTriggerValueChangeType);

        })
    };
}));
//# sourceMappingURL=Workflow.js.map
