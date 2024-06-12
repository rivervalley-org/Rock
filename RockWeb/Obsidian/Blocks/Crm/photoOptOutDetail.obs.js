System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var defineComponent, ref, openBlock, createElementBlock, Fragment, createBlock, unref, withCtx, createTextVNode, toDisplayString, createCommentVNode, NotificationBox, useConfigurationValues;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'photoOptOutDetail',
        setup(__props) {
          var _config$successMessag, _config$alertType;
          var config = useConfigurationValues();
          var errorMessage = ref("");
          var successMessage = ref((_config$successMessag = config === null || config === void 0 ? void 0 : config.successMessage) !== null && _config$successMessag !== void 0 ? _config$successMessag : "You've been opted out and should no longer receive photo requests from us.");
          var alertType = ref((_config$alertType = config === null || config === void 0 ? void 0 : config.alertType) !== null && _config$alertType !== void 0 ? _config$alertType : "danger");
          if (config.errorMessage) {
            errorMessage.value = config.errorMessage;
          } else if (!config) {
            errorMessage.value = "We could not find your record in our system. Please contact our office at the number below.";
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: alertType.value
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), unref(config).isOptOutSuccessful ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "success"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(successMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Crm/photoOptOutDetail.obs";

    })
  };
}));
//# sourceMappingURL=photoOptOutDetail.obs.js.map
