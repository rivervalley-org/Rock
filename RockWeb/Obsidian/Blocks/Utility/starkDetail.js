System.register(['@Obsidian/Utility/block', 'vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/rockButton', '@Obsidian/Templates/block'], (function (exports) {
  'use strict';
  var useInvokeBlockAction, useConfigurationValues, defineComponent, ref, NotificationBox, RockButton, Block;
  return {
    setters: [function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
    }, function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      Block = module["default"];
    }],
    execute: (function () {

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }

      var starkDetail = exports('default', defineComponent({
        name: "Utility.StarkDetailOptions",
        components: {
          Block,
          NotificationBox,
          RockButton
        },
        setup() {
          var _ref;
          var invokeBlockAction = useInvokeBlockAction();
          var configurationValues = useConfigurationValues();
          var configMessage = ref((_ref = configurationValues.message) !== null && _ref !== void 0 ? _ref : "");
          var blockActionMessage = ref("");
          var invokeBlockActionClick = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var response = yield invokeBlockAction("GetMessage", {
                paramFromClient: "This is a value sent to the server from the client."
              });
              if (response.data) {
                blockActionMessage.value = response.data.message;
              } else {
                blockActionMessage.value = response.errorMessage || "An error occurred";
              }
            });
            return function invokeBlockActionClick() {
              return _ref2.apply(this, arguments);
            };
          }();
          return {
            blockActionMessage,
            configMessage,
            invokeBlockActionClick
          };
        },
        template: "\n<Block title=\"Blank Detail Block\">\n    <template #headerActions>\n        <span class=\"action label label-info\">Vue</span>\n    </template>\n\n    <template #drawer>\n        An example block that uses Vue\n    </template>\n\n    <template #default>\n        <NotificationBox alertType=\"info\">\n            <h4>Stark Template Block</h4>\n            <p>This block serves as a starting point for creating new blocks. After copy/pasting it and renaming the resulting file be sure to make the following changes:</p>\n\n            <strong>Changes to the Codebehind (.cs) File</strong>\n            <ul>\n                <li>Update the namespace to match your directory</li>\n                <li>Update the class name</li>\n                <li>Fill in the DisplayName, Category and Description attributes</li>\n            </ul>\n\n            <strong>Changes to the Vue component (.ts/.js) File</strong>\n            <ul>\n                <li>Remove this text... unless you really like it...</li>\n            </ul>\n        </NotificationBox>\n\n        <div>\n            <h4>Value from Configuration</h4>\n            <p>\n                This value came from the C# file and was provided to the JavaScript before the Vue component was even mounted:\n            </p>\n\n            <pre>{{ configMessage }}</pre>\n\n            <h4>Value from Block Action</h4>\n            <p>\n                This value will come from the C# file using a \"Block Action\". Block Actions allow the Vue Component to communicate with the\n                C# code behind (much like a Web Forms Postback):\n            </p>\n\n            <pre>{{ blockActionMessage }}</pre>\n\n            <div class=\"actions\">\n                <RockButton btnType=\"primary\" btnSize=\"sm\" @click=\"invokeBlockActionClick\">Invoke Block Action</RockButton>\n            </div>\n        </div>\n    </template>\n</Block>"
      }));

    })
  };
}));
//# sourceMappingURL=starkDetail.js.map
