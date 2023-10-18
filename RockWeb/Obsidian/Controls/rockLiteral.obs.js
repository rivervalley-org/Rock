System.register(['vue', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot, createTextVNode, toDisplayString, newGuid;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      normalizeClass = module.normalizeClass;
      renderSlot = module.renderSlot;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      newGuid = module.newGuid;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "form-group static-control"
      };
      var _hoisted_2 = {
        class: "control-wrapper"
      };
      var script = exports('default', defineComponent({
        name: 'rockLiteral',
        props: {
          label: {
            type: String,
            default: ""
          },
          labelCssClass: {
            type: String,
            default: ""
          }
        },
        setup(__props) {
          var id = "literal-" + newGuid();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("label", {
              class: normalizeClass(['control-label', __props.labelCssClass]),
              for: id
            }, [renderSlot(_ctx.$slots, "label", {}, () => [createTextVNode(toDisplayString(__props.label), 1)])], 2), createElementVNode("div", _hoisted_2, [createElementVNode("div", {
              class: "form-control-static",
              id: id
            }, [renderSlot(_ctx.$slots, "default")])])]);
          };
        }
      }));

      script.__file = "Framework/Controls/rockLiteral.obs";

    })
  };
}));
//# sourceMappingURL=rockLiteral.obs.js.map
