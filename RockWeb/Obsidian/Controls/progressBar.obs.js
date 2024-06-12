System.register(['vue'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createElementBlock, createElementVNode, unref, normalizeStyle, toDisplayString;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      unref = module.unref;
      normalizeStyle = module.normalizeStyle;
      toDisplayString = module.toDisplayString;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "progress"
      };
      var _hoisted_2 = ["aria-valuenow"];
      var _hoisted_3 = {
        class: "sr-only"
      };
      var script = exports('default', defineComponent({
        name: 'progressBar',
        props: {
          percent: {
            type: Number,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var boundedPercent = computed(() => {
            if (props.percent < 0) {
              return 0;
            }
            if (props.percent > 100) {
              return 100;
            }
            return props.percent;
          });
          var roundedBoundedPercent = computed(() => {
            return Math.round(boundedPercent.value);
          });
          var style = computed(() => {
            return "width: ".concat(boundedPercent.value, "%;");
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", {
              class: "progress-bar",
              role: "progressbar",
              "aria-valuenow": unref(roundedBoundedPercent),
              "aria-valuemin": "0",
              "aria-valuemax": "100",
              style: normalizeStyle(unref(style))
            }, [createElementVNode("span", _hoisted_3, toDisplayString(unref(roundedBoundedPercent)) + "% Complete", 1)], 12, _hoisted_2)]);
          };
        }
      }));

      script.__file = "Framework/Controls/progressBar.obs";

    })
  };
}));
//# sourceMappingURL=progressBar.obs.js.map
