System.register(['vue'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode, renderSlot;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      renderSlot = module.renderSlot;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "rock-header"
      };
      var _hoisted_2 = {
        class: "d-flex flex-wrap justify-content-between"
      };
      var _hoisted_3 = {
        key: 0,
        class: "title"
      };
      var _hoisted_4 = {
        key: 1,
        class: "description"
      };
      var _hoisted_5 = {
        key: 0,
        class: "section-header-actions align-self-end"
      };
      var _hoisted_6 = {
        key: 0,
        class: "section-header-hr"
      };
      var script = exports('default', defineComponent({
        name: 'sectionHeader',
        props: {
          title: {
            type: String,
            default: ""
          },
          description: {
            type: String,
            default: ""
          },
          isSeparatorHidden: {
            type: Boolean,
            default: false
          }
        },
        setup(__props) {
          var props = __props;
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", null, [props.title ? (openBlock(), createElementBlock("h3", _hoisted_3, toDisplayString(props.title), 1)) : createCommentVNode("v-if", true), __props.description ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(__props.description), 1)) : createCommentVNode("v-if", true)]), _ctx.$slots.actions ? (openBlock(), createElementBlock("div", _hoisted_5, [renderSlot(_ctx.$slots, "actions")])) : createCommentVNode("v-if", true)]), !__props.isSeparatorHidden ? (openBlock(), createElementBlock("hr", _hoisted_6)) : createCommentVNode("v-if", true)]);
          };
        }
      }));

      script.__file = "Framework/Controls/sectionHeader.obs";

    })
  };
}));
//# sourceMappingURL=sectionHeader.obs.js.map
