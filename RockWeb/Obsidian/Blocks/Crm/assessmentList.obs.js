System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, openBlock, createElementBlock, Fragment, createBlock, unref, withCtx, createTextVNode, toDisplayString, createCommentVNode, NotificationBox, useConfigurationValues;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
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

      var _hoisted_1 = ["innerHTML"];
      var script = exports('default', defineComponent({
        name: 'assessmentList',
        setup(__props) {
          var config = useConfigurationValues();
          var blockError = ref("");
          var errorMessage = ref("");
          var assessmentList = computed(() => {
            var _config$assessmentLis;
            return (_config$assessmentLis = config.assessmentList) !== null && _config$assessmentLis !== void 0 ? _config$assessmentLis : "";
          });
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(blockError.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), unref(config).hasContent ? (openBlock(), createElementBlock("div", {
              key: 2,
              innerHTML: unref(assessmentList)
            }, null, 8, _hoisted_1)) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Crm/assessmentList.obs";

    })
  };
}));
//# sourceMappingURL=assessmentList.obs.js.map
