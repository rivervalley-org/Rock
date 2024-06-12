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
        class: "skeleton-container"
      };
      var script = exports('default', defineComponent({
        name: 'skeleton',
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, "default")]);
          };
        }
      }));

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z$1 = ".table-obsidian>tbody>tr>td .skeleton-text{margin-bottom:.25em;margin-top:.25em}";
      styleInject(css_248z$1);

      var css_248z = ".skeleton-container[data-v-99fe3b5e]{display:flex;flex:1 1 auto}.skeleton-container[data-v-99fe3b5e] .skeleton{animation:skeleton-99fe3b5e 2s ease-in infinite;background:#ddd;background:linear-gradient(90deg,#ddd,#f0f0f0 8%,#ddd 16%);background-position-x:100%;background-size:200% 100%}.skeleton-container[data-v-99fe3b5e] .skeleton-rounded{border-radius:4px}.skeleton-container[data-v-99fe3b5e] .skeleton-text{flex:1 1 auto;height:1em}.skeleton-container[data-v-99fe3b5e] .skeleton-xs{background:linear-gradient(90deg,#ddd,#f0f0f0 12%,#ddd 24%);background-position-x:100%;background-size:200% 100%}.skeleton-container[data-v-99fe3b5e] .skeleton-sm{background:linear-gradient(90deg,#ddd,#f0f0f0 14%,#ddd 28%);background-position-x:100%;background-size:200% 100%}.skeleton-container[data-v-99fe3b5e] .skeleton-md{background:linear-gradient(90deg,#ddd,#f0f0f0 8%,#ddd 16%);background-position-x:100%;background-size:200% 100%}.skeleton-container[data-v-99fe3b5e] .skeleton-lg{background:linear-gradient(90deg,#ddd,#f0f0f0 5%,#ddd 10%);background-position-x:100%;background-size:200% 100%}@keyframes skeleton-99fe3b5e{to{background-position-x:-100%}}";
      styleInject(css_248z);

      script.__scopeId = "data-v-99fe3b5e";
      script.__file = "Framework/Controls/skeleton.obs";

    })
  };
}));
//# sourceMappingURL=skeleton.obs.js.map
