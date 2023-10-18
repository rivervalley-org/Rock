System.register(['vue', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/tooltip'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, nextTick, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, toDisplayString, asFormattedString, tooltip;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      nextTick = module.nextTick;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      createCommentVNode = module.createCommentVNode;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      asFormattedString = module.asFormattedString;
    }, function (module) {
      tooltip = module.tooltip;
    }],
    execute: (function () {

      var _hoisted_1 = ["title"];
      var _hoisted_2 = {
        key: 0,
        class: "kpi-icon"
      };
      var _hoisted_3 = createElementVNode("img", {
        class: "svg-placeholder",
        src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'></svg>",
        style: {}
      }, null, -1);
      var _hoisted_4 = {
        class: "kpi-content"
      };
      var _hoisted_5 = {
        class: "kpi-stat"
      };
      var _hoisted_6 = {
        class: "kpi-value text-color"
      };
      var _hoisted_7 = {
        class: "kpi-label"
      };
      var script = exports('default', defineComponent({
        name: 'kpi',
        props: {
          value: {
            type: [String, Number],
            required: false
          },
          label: {
            type: String,
            required: false
          },
          tooltip: {
            type: String,
            required: false
          },
          iconCssClass: {
            type: String,
            required: false
          },
          color: {
            type: String,
            default: "blue"
          },
          colorShade: {
            type: Number,
            default: 500
          },
          isCard: {
            type: Boolean,
            default: false
          }
        },
        setup(__props) {
          var props = __props;
          var kpiElement = ref(null);
          var kpiClass = computed(() => {
            var classes = ["kpi", "has-icon-bg"];
            if (props.isCard) {
              classes.push("kpi-card");
            }
            classes.push("text-".concat(props.color, "-").concat(props.colorShade));
            if (props.colorShade < 300) {
              classes.push("border-".concat(props.color, "-").concat(props.colorShade));
            } else {
              classes.push("border-".concat(props.color, "-").concat(props.colorShade - 200));
            }
            return classes.join(" ");
          });
          var calculatedValue = computed(() => {
            if (typeof props.value === "number") {
              return asFormattedString(props.value);
            } else if (typeof props.value === "string") {
              return props.value;
            } else {
              return "";
            }
          });
          watch([kpiElement], () => {
            if (kpiElement.value) {
              tooltip(kpiElement.value);
            }
          });
          watch(() => props.tooltip, () => {
            nextTick(() => {
              if (kpiElement.value) {
                tooltip(kpiElement.value);
              }
            });
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              ref_key: "kpiElement",
              ref: kpiElement,
              class: normalizeClass(unref(kpiClass)),
              title: props.tooltip
            }, [__props.iconCssClass ? (openBlock(), createElementBlock("div", _hoisted_2, [_hoisted_3, createElementVNode("div", _hoisted_4, [createElementVNode("i", {
              class: normalizeClass(__props.iconCssClass)
            }, null, 2)])])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_5, [createElementVNode("span", _hoisted_6, toDisplayString(unref(calculatedValue)), 1), createElementVNode("span", _hoisted_7, toDisplayString(__props.label), 1)])], 10, _hoisted_1);
          };
        }
      }));

      script.__file = "Framework/Controls/kpi.obs";

    })
  };
}));
//# sourceMappingURL=kpi.obs.js.map
