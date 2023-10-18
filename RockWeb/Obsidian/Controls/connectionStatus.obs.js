System.register(['vue', '@Obsidian/Controls/transitionVerticalCollapse'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, createTextVNode, createElementVNode, defineComponent, openBlock, createBlock, unref, withCtx, createElementBlock, createCommentVNode, TransitionVerticalCollapse;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createTextVNode = module.createTextVNode;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementBlock = module.createElementBlock;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }],
    execute: (function () {

      var _withScopeId = n => (pushScopeId("data-v-4682aa18"), n = n(), popScopeId(), n);
      var _hoisted_1 = {
        key: 0
      };
      var _hoisted_2 = {
        key: 0,
        class: "connection-status connection-status-disconnected"
      };
      var _hoisted_3 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-fw fa-ban"
      }, null, -1));
      var _hoisted_4 = createTextVNode(" Disconnected ");
      var _hoisted_5 = [_hoisted_3, _hoisted_4];
      var _hoisted_6 = {
        key: 1,
        class: "connection-status connection-status-reconnecting"
      };
      var _hoisted_7 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-fw fa-spin fa-sync"
      }, null, -1));
      var _hoisted_8 = createTextVNode(" Reconnecting ");
      var _hoisted_9 = [_hoisted_7, _hoisted_8];
      var script = exports('default', defineComponent({
        name: 'connectionStatus',
        props: {
          isReconnecting: {
            type: Boolean,
            default: false
          },
          isDisconnected: {
            type: Boolean,
            default: false
          }
        },
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [__props.isReconnecting || __props.isDisconnected ? (openBlock(), createElementBlock("div", _hoisted_1, [__props.isDisconnected ? (openBlock(), createElementBlock("div", _hoisted_2, _hoisted_5)) : __props.isReconnecting ? (openBlock(), createElementBlock("div", _hoisted_6, _hoisted_9)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true)]),
              _: 1
            });
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

      var css_248z = ".connection-status[data-v-4682aa18]{padding:4px 24px;text-align:center}.connection-status-disconnected[data-v-4682aa18]{background-color:#fcf2f1;color:#e55235}.connection-status-reconnecting[data-v-4682aa18]{background-color:#fffae5;color:#8a6d3b}";
      styleInject(css_248z);

      script.__scopeId = "data-v-4682aa18";
      script.__file = "Framework/Controls/connectionStatus.obs";

    })
  };
}));
//# sourceMappingURL=connectionStatus.obs.js.map
