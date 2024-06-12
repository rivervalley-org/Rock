System.register(['vue'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createElementBlock, renderSlot;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      renderSlot = module.renderSlot;
    }],
    execute: (function () {

      var _hoisted_1 = {
        href: "javascript:void(0);"
      };
      var script = exports('default', defineComponent({
        name: 'javaScriptAnchor',
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("a", _hoisted_1, [renderSlot(_ctx.$slots, "default")]);
          };
        }
      }));

      script.__file = "Framework/Controls/javaScriptAnchor.obs";

    })
  };
}));
//# sourceMappingURL=javaScriptAnchor.obs.js.map
