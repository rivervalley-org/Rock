System.register(['vue', './notificationBox.obs'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, computed, withDirectives, openBlock, createBlock, unref, withCtx, createElementVNode, createElementBlock, Fragment, renderList, toDisplayString, vShow, NotificationBox;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      computed = module.computed;
      withDirectives = module.withDirectives;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      vShow = module.vShow;
    }, function (module) {
      NotificationBox = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = createTextVNode(" Please correct the following: ");
      var script = exports('default', defineComponent({
        name: 'rockValidation',
        props: {
          errors: {
            type: Array,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var hasErrors = computed(() => props.errors.length > 0);
          return (_ctx, _cache) => {
            return withDirectives((openBlock(), createBlock(unref(NotificationBox), {
              alertType: "validation"
            }, {
              default: withCtx(() => [_hoisted_1, createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.errors, error => {
                return openBlock(), createElementBlock("li", null, [createElementVNode("strong", null, toDisplayString(error.name), 1), createTextVNode(" " + toDisplayString(error.text), 1)]);
              }), 256))])]),
              _: 1
            }, 512)), [[vShow, unref(hasErrors)]]);
          };
        }
      }));

      script.__file = "Framework/Controls/rockValidation.obs";

    })
  };
}));
//# sourceMappingURL=rockValidation.obs.js.map
