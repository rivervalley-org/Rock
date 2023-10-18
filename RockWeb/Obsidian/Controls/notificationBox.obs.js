System.register(['vue', '@Obsidian/Enums/Controls/alertType', './transitionVerticalCollapse'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, computed, ref, openBlock, createElementBlock, normalizeClass, unref, withModifiers, createCommentVNode, toDisplayString, renderSlot, createBlock, withCtx, AlertType, TransitionVerticalCollapse;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      withModifiers = module.withModifiers;
      createCommentVNode = module.createCommentVNode;
      toDisplayString = module.toDisplayString;
      renderSlot = module.renderSlot;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
    }, function (module) {
      AlertType = module.AlertType;
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = ["onClick"];
      var _hoisted_2 = createElementVNode("i", {
        class: "fa fa-times",
        "aria-hidden": "true"
      }, null, -1);
      var _hoisted_3 = [_hoisted_2];
      var _hoisted_4 = {
        key: 1
      };
      var _hoisted_5 = {
        key: 2,
        class: "margin-l-sm"
      };
      var _hoisted_6 = {
        key: 0,
        class: "margin-t-sm js-notification-details"
      };
      var script = exports('default', defineComponent({
        name: 'notificationBox',
        props: {
          dismissible: {
            type: Boolean,
            default: false
          },
          alertType: {
            type: String,
            default: AlertType.Default
          },
          heading: {
            type: String,
            default: null
          }
        },
        emits: ["dismiss"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          function dismiss() {
            emit("dismiss");
          }
          var typeClass = computed(() => "alert alert-".concat(props.alertType));
          var showDetails = ref(false);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(unref(typeClass))
            }, [__props.dismissible ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: "close",
              "aria-label": "Hide This Alert",
              onClick: withModifiers(dismiss, ["prevent"])
            }, _hoisted_3, 8, _hoisted_1)) : createCommentVNode("v-if", true), __props.heading ? (openBlock(), createElementBlock("strong", _hoisted_4, toDisplayString(__props.heading), 1)) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default"), _ctx.$slots.details ? (openBlock(), createElementBlock("small", _hoisted_5, [createElementVNode("a", {
              href: "#",
              onClick: _cache[0] || (_cache[0] = withModifiers($event => showDetails.value = !showDetails.value, ["prevent"]))
            }, "Show Details")])) : createCommentVNode("v-if", true), _ctx.$slots.details ? (openBlock(), createBlock(unref(TransitionVerticalCollapse), {
              key: 3
            }, {
              default: withCtx(() => [showDetails.value ? (openBlock(), createElementBlock("p", _hoisted_6, [renderSlot(_ctx.$slots, "details")])) : createCommentVNode("v-if", true)]),
              _: 3
            })) : createCommentVNode("v-if", true)], 2);
          };
        }
      }));

      script.__file = "Framework/Controls/notificationBox.obs";

    })
  };
}));
//# sourceMappingURL=notificationBox.obs.js.map
