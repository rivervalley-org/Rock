System.register(['vue', './helpBlock.obs'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createElementBlock, renderSlot, createBlock, unref, createCommentVNode, HelpBlock;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      renderSlot = module.renderSlot;
      createBlock = module.createBlock;
      unref = module.unref;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      HelpBlock = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-label"
      };
      var script = exports('default', defineComponent({
        name: 'rockLabel',
        props: {
          help: {
            type: String,
            default: ""
          }
        },
        setup(__props) {
          var props = __props;
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("label", _hoisted_1, [renderSlot(_ctx.$slots, "default"), props.help ? (openBlock(), createBlock(unref(HelpBlock), {
              key: 0,
              text: props.help
            }, null, 8, ["text"])) : createCommentVNode("v-if", true)]);
          };
        }
      }));

      script.__file = "Framework/Controls/rockLabel.obs";

    })
  };
}));
//# sourceMappingURL=rockLabel.obs.js.map
