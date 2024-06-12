System.register(['vue'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createBlock, Transition, withCtx, renderSlot;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      Transition = module.Transition;
      withCtx = module.withCtx;
      renderSlot = module.renderSlot;
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'transitionVerticalCollapse',
        props: {
          speed: {
            type: String,
            default: "normal"
          }
        },
        setup(__props) {
          var props = __props;
          function beforeEnter(element) {
            if (!(element instanceof HTMLElement)) {
              return;
            }
            var state = {
              display: element.style.display,
              computedPaddingTop: getComputedStyle(element).paddingTop,
              computedPaddingBottom: getComputedStyle(element).paddingBottom
            };
            element.dataset.transitionCollapseState = JSON.stringify(state);
            if (!element.style.height) {
              element.style.height = "0px";
            }
            if (!element.style.paddingTop) {
              element.style.paddingTop = "0px";
            }
            if (!element.style.paddingBottom) {
              element.style.paddingBottom = "0px";
            }
            element.style.display = "";
            element.style.setProperty("--transition-speed", speed.value);
          }
          function enter(element) {
            if (!(element instanceof HTMLElement)) {
              return;
            }
            requestAnimationFrame(() => {
              var _element$dataset$tran;
              var state = JSON.parse((_element$dataset$tran = element.dataset.transitionCollapseState) !== null && _element$dataset$tran !== void 0 ? _element$dataset$tran : "");
              var verticalPadding = (parseInt(state.computedPaddingTop) || 0) + (parseInt(state.computedPaddingBottom) || 0);
              element.style.height = "".concat(element.scrollHeight + verticalPadding, "px");
              element.style.paddingTop = state.computedPaddingTop;
              element.style.paddingBottom = state.computedPaddingBottom;
            });
          }
          function afterEnter(element) {
            var _element$dataset$tran2;
            if (!(element instanceof HTMLElement)) {
              return;
            }
            var state = JSON.parse((_element$dataset$tran2 = element.dataset.transitionCollapseState) !== null && _element$dataset$tran2 !== void 0 ? _element$dataset$tran2 : "");
            element.style.height = "";
            element.style.paddingTop = "";
            element.style.paddingBottom = "";
            element.style.display = state.display !== "none" ? state.display : "";
            element.style.removeProperty("--transition-speed");
            delete element.dataset.transitionCollapseState;
          }
          function beforeLeave(element) {
            if (!(element instanceof HTMLElement)) {
              return;
            }
            element.style.height = "".concat(element.offsetHeight, "px");
            element.style.setProperty("--transition-speed", speed.value);
          }
          function leave(element) {
            if (!(element instanceof HTMLElement)) {
              return;
            }
            requestAnimationFrame(() => {
              element.style.height = "0px";
              element.style.paddingTop = "0px";
              element.style.paddingBottom = "0px";
            });
          }
          function afterLeave(element) {
            if (!(element instanceof HTMLElement)) {
              return;
            }
            element.style.height = "";
            element.style.paddingTop = "";
            element.style.paddingBottom = "";
            element.style.removeProperty("--transition-speed");
          }
          var speed = computed(() => props.speed == "fast" ? "0.2s" : props.speed == "slow" ? "0.6s" : "0.35s");
          return (_ctx, _cache) => {
            return openBlock(), createBlock(Transition, {
              "enter-active-class": "vertical-collapse-enter-active",
              "leave-active-class": "vertical-collapse-leave-active",
              onBeforeEnter: beforeEnter,
              onEnter: enter,
              onAfterEnter: afterEnter,
              onBeforeLeave: beforeLeave,
              onLeave: leave,
              onAfterLeave: afterLeave
            }, {
              default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
              _: 3
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

      var css_248z = ".vertical-collapse-enter-active[data-v-2f2144bc],.vertical-collapse-leave-active[data-v-2f2144bc]{overflow:hidden;transition-duration:var(--transition-speed);transition-property:height,padding-top,padding-bottom;transition-timing-function:ease-in-out}";
      styleInject(css_248z);

      script.__scopeId = "data-v-2f2144bc";
      script.__file = "Framework/Controls/transitionVerticalCollapse.obs";

    })
  };
}));
//# sourceMappingURL=transitionVerticalCollapse.obs.js.map
