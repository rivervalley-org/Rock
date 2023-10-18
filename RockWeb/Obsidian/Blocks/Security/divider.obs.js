System.register(['vue'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, createElementVNode;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
    }],
    execute: (function () {

      var _withScopeId = n => (pushScopeId("data-v-1532d1bd"), n = n(), popScopeId(), n);
      var _hoisted_1 = _withScopeId(() => createElementVNode("div", {
        class: "rock-divider-line"
      }, null, -1));
      var _hoisted_2 = ["innerHTML"];
      var _hoisted_3 = {
        key: 1,
        class: "rock-divider-line"
      };
      var script = exports('default', defineComponent({
        name: 'divider',
        props: {
          isVertical: {
            type: Object,
            required: false,
            default: () => false
          },
          content: {
            type: Object,
            required: false,
            default: () => null
          }
        },
        setup(__props) {
          var props = __props;
          var isContentVisible = computed(() => !!props.content);
          var dividerClassRef = computed(() => "rock-divider".concat(props.isVertical ? " rock-divider-vertical" : ""));
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(unref(dividerClassRef))
            }, [_hoisted_1, unref(isContentVisible) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "rock-divider-content",
              innerHTML: __props.content
            }, null, 8, _hoisted_2)) : createCommentVNode("v-if", true), unref(isContentVisible) ? (openBlock(), createElementBlock("div", _hoisted_3)) : createCommentVNode("v-if", true)], 2);
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

      var css_248z = "[data-v-1532d1bd]{--var-divider-color:#a4a4a4}.rock-divider[data-v-1532d1bd]{align-items:center;display:flex;flex-direction:row;margin:2rem 0}.rock-divider-line[data-v-1532d1bd]{border-top:1px solid var(--var-divider-color);flex:1}.rock-divider-content[data-v-1532d1bd]{color:var(--var-divider-color);padding:0 1rem}.rock-divider-vertical[data-v-1532d1bd]{flex-direction:column;margin:0}.rock-divider-vertical .rock-divider-line[data-v-1532d1bd]{border:0;border-left:1px solid var(--var-divider-color)}";
      styleInject(css_248z);

      script.__scopeId = "data-v-1532d1bd";
      script.__file = "src/Security/divider.obs";

    })
  };
}));
//# sourceMappingURL=divider.obs.js.map
