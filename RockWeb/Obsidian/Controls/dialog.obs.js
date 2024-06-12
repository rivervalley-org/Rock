System.register(['vue', '@Obsidian/Utility/page'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, useSlots, ref, computed, watch, openBlock, createBlock, Teleport, withModifiers, normalizeClass, unref, createElementBlock, createCommentVNode, renderSlot, nextTick, trackModalState;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      useSlots = module.useSlots;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      Teleport = module.Teleport;
      withModifiers = module.withModifiers;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      createElementBlock = module.createElementBlock;
      createCommentVNode = module.createCommentVNode;
      renderSlot = module.renderSlot;
      nextTick = module.nextTick;
    }, function (module) {
      trackModalState = module.trackModalState;
    }],
    execute: (function () {

      var _hoisted_1 = createElementVNode("div", {
        class: "modal-backdrop fade in",
        style: {
          "z-index": "1060"
        }
      }, null, -1);
      var _hoisted_2 = {
        class: "modal-dialog"
      };
      var _hoisted_3 = {
        class: "modal-content"
      };
      var _hoisted_4 = {
        key: 0,
        class: "modal-header"
      };
      var _hoisted_5 = {
        class: "modal-body"
      };
      var _hoisted_6 = {
        key: 1,
        class: "modal-footer"
      };
      var script = exports('default', defineComponent({
        name: 'dialog',
        props: {
          modelValue: {
            type: Boolean,
            required: true
          },
          dismissible: {
            type: Boolean,
            default: true
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var slots = useSlots();
          var doShake = ref(false);
          var modalDiv = ref(null);
          var hasHeader = computed(() => !!slots.header);
          var close = () => {
            emit("update:modelValue", false);
          };
          var shake = () => {
            if (!doShake.value) {
              doShake.value = true;
              setTimeout(() => doShake.value = false, 1000);
            }
          };
          var centerOnScreen = () => {
            nextTick(() => {
              if (!modalDiv.value) {
                return;
              }
              var height = modalDiv.value.offsetHeight;
              var margin = height / 2;
              modalDiv.value.style.marginTop = "-".concat(margin, "px");
            });
          };
          if (props.modelValue) {
            trackModalState(true);
          }
          watch(() => props.modelValue, () => {
            trackModalState(props.modelValue);
            if (props.modelValue) {
              centerOnScreen();
            }
          });
          return (_ctx, _cache) => {
            return __props.modelValue ? (openBlock(), createBlock(Teleport, {
              key: 0,
              to: "body"
            }, [_hoisted_1, createElementVNode("div", {
              onClick: shake,
              class: "modal-scrollable",
              style: {
                "z-index": "1060"
              }
            }, [createElementVNode("div", {
              onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
              ref_key: "modalDiv",
              ref: modalDiv,
              class: normalizeClass(["modal fade in", {
                'animated shake': doShake.value
              }]),
              tabindex: "-1",
              role: "dialog",
              style: {
                "display": "block"
              }
            }, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [unref(hasHeader) ? (openBlock(), createElementBlock("div", _hoisted_4, [__props.dismissible ? (openBlock(), createElementBlock("button", {
              key: 0,
              onClick: close,
              type: "button",
              class: "close",
              style: {
                "margin-top": "-10px"
              }
            }, "×")) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "header")])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_5, [!unref(hasHeader) && __props.dismissible ? (openBlock(), createElementBlock("button", {
              key: 0,
              onClick: close,
              type: "button",
              class: "close",
              style: {
                "margin-top": "-10px"
              }
            }, "×")) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")]), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_6, [renderSlot(_ctx.$slots, "footer")])) : createCommentVNode("v-if", true)])])], 2)])])) : createCommentVNode("v-if", true);
          };
        }
      }));

      script.__file = "Framework/Controls/dialog.obs";

    })
  };
}));
//# sourceMappingURL=dialog.obs.js.map
