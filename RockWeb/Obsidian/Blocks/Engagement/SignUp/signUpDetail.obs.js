System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Enums/Controls/alertType', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, onMounted, openBlock, createElementBlock, Fragment, unref, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, NotificationBox, AlertType, useConfigurationValues, useReloadBlock, onConfigurationValuesChanged;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      unref = module.unref;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      AlertType = module.AlertType;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useReloadBlock = module.useReloadBlock;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'signUpDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var reloadBlock = useReloadBlock();
          var signUpDetailElement = ref(null);
          var blockErrorMessage = computed(() => {
            return config.errorMessage;
          });
          onConfigurationValuesChanged(reloadBlock);
          onMounted(() => {
            if (signUpDetailElement.value && config.signUpDetailHtml) {
              signUpDetailElement.value.innerHTML = config.signUpDetailHtml;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [unref(blockErrorMessage) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(blockErrorMessage)), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), !unref(blockErrorMessage) ? (openBlock(), createElementBlock("div", {
              key: 1,
              ref_key: "signUpDetailElement",
              ref: signUpDetailElement
            }, null, 512)) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Engagement/SignUp/signUpDetail.obs";

    })
  };
}));
//# sourceMappingURL=signUpDetail.obs.js.map
