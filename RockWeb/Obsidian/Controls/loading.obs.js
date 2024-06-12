System.register(['vue', './loadingIndicator.obs'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createElementBlock, renderSlot, createBlock, unref, LoadingIndicator;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      renderSlot = module.renderSlot;
      createBlock = module.createBlock;
      unref = module.unref;
    }, function (module) {
      LoadingIndicator = module["default"];
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'loading',
        props: {
          isLoading: {
            type: Boolean,
            required: true
          },
          isSmall: {
            type: Boolean,
            default: false
          }
        },
        setup(__props) {
          var props = __props;
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [!__props.isLoading ? renderSlot(_ctx.$slots, "default", {
              key: 0
            }) : (openBlock(), createBlock(unref(LoadingIndicator), {
              key: 1,
              isSmall: props.isSmall
            }, null, 8, ["isSmall"]))]);
          };
        }
      }));

      script.__file = "Framework/Controls/loading.obs";

    })
  };
}));
//# sourceMappingURL=loading.obs.js.map
