System.register(['vue', './inlineSwitch.obs', './transitionVerticalCollapse.obs', '@Obsidian/Utility/component', './sectionHeader.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, computed, openBlock, createElementBlock, createVNode, unref, withCtx, renderSlot, isRef, createCommentVNode, InlineSwitch, TransitionVerticalCollapse, useVModelPassthrough, SectionHeader;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      renderSlot = module.renderSlot;
      isRef = module.isRef;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      InlineSwitch = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      SectionHeader = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "section-container well"
      };
      var _hoisted_2 = {
        class: "section-header"
      };
      var _hoisted_3 = {
        class: "section-header-content"
      };
      var _hoisted_4 = {
        key: 0,
        class: "section-header-toggle align-self-end"
      };
      var _hoisted_5 = {
        key: 0
      };
      var _hoisted_6 = createElementVNode("hr", {
        class: "section-header-hr"
      }, null, -1);
      var script = exports('default', defineComponent({
        name: 'sectionContainer',
        props: {
          modelValue: {
            type: Boolean,
            default: false
          },
          toggleText: {
            type: String,
            default: ""
          },
          title: {
            type: String,
            default: ""
          },
          description: {
            type: String,
            default: ""
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var enabled = useVModelPassthrough(props, "modelValue", emit);
          var showContent = computed(() => enabled.value || !props.toggleText);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [createVNode(unref(SectionHeader), {
              title: __props.title,
              description: __props.description,
              isSeparatorHidden: true
            }, {
              actions: withCtx(() => [renderSlot(_ctx.$slots, "actions")]),
              _: 3
            }, 8, ["title", "description"])]), __props.toggleText ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(unref(InlineSwitch), {
              modelValue: unref(enabled),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(enabled) ? enabled.value = $event : null),
              label: __props.toggleText
            }, null, 8, ["modelValue", "label"])])) : createCommentVNode("v-if", true)]), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [unref(showContent) ? (openBlock(), createElementBlock("div", _hoisted_5, [_hoisted_6, renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true)]),
              _: 3
            })]);
          };
        }
      }));

      script.__file = "Framework/Controls/sectionContainer.obs";

    })
  };
}));
//# sourceMappingURL=sectionContainer.obs.js.map
