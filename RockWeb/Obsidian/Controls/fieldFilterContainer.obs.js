System.register(['vue'], (function (exports) {
  'use strict';
  var defineComponent, useSlots, computed, openBlock, createElementBlock, unref, normalizeClass, toDisplayString, renderSlot, createCommentVNode, createElementVNode;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      useSlots = module.useSlots;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      unref = module.unref;
      normalizeClass = module.normalizeClass;
      toDisplayString = module.toDisplayString;
      renderSlot = module.renderSlot;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "row form-row field-criteria"
      };
      var _hoisted_2 = {
        key: 0,
        class: "data-view-filter-label"
      };
      var script = exports('default', defineComponent({
        name: 'fieldFilterContainer',
        props: {
          compareLabel: {
            type: String
          }
        },
        setup(__props) {
          var props = __props;
          var slots = useSlots();
          var hasCompareColumn = computed(() => !!slots.compare || !!props.compareLabel);
          var hasCompareLabel = computed(() => !!props.compareLabel);
          var compareColumnClass = computed(() => {
            if (slots.compare) {
              return "col-xs-12 col-md-4";
            } else if (props.compareLabel) {
              return "col-xs-12 col-md-2";
            } else {
              return "";
            }
          });
          var valueColumnClass = computed(() => {
            if (slots.compare) {
              return "col-xs-12 col-md-8";
            } else if (props.compareLabel) {
              return "col-xs-12 col-md-10";
            } else {
              return "col-xs-12 col-md-12";
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [unref(hasCompareColumn) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(compareColumnClass))
            }, [unref(hasCompareLabel) ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(__props.compareLabel), 1)) : renderSlot(_ctx.$slots, "compare", {
              key: 1
            })], 2)) : createCommentVNode("v-if", true), createElementVNode("div", {
              class: normalizeClass(unref(valueColumnClass))
            }, [renderSlot(_ctx.$slots, "default")], 2)]);
          };
        }
      }));

      script.__file = "Framework/Controls/fieldFilterContainer.obs";

    })
  };
}));
//# sourceMappingURL=fieldFilterContainer.obs.js.map
