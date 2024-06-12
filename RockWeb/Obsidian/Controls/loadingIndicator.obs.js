System.register(['vue'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, openBlock, createElementBlock, normalizeClass, createCommentVNode;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      createCommentVNode = module.createCommentVNode;
    }],
    execute: (function () {

      var _hoisted_1 = createElementVNode("i", {
        class: "fas fa-spinner fa-pulse"
      }, null, -1);
      var _hoisted_2 = [_hoisted_1];
      var script = exports('default', defineComponent({
        name: 'loadingIndicator',
        props: {
          delay: {
            type: Number,
            default: 0
          },
          isSmall: {
            type: Boolean,
            default: false
          }
        },
        setup(__props) {
          var props = __props;
          var isShown = ref(!props.delay);
          if (props.delay) {
            setTimeout(() => isShown.value = true, props.delay);
          }
          return (_ctx, _cache) => {
            return isShown.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(['text-center', __props.isSmall ? '' : 'fa-2x'])
            }, _hoisted_2, 2)) : createCommentVNode("v-if", true);
          };
        }
      }));

      script.__file = "Framework/Controls/loadingIndicator.obs";

    })
  };
}));
//# sourceMappingURL=loadingIndicator.obs.js.map
