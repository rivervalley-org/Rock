System.register(['vue', '@Obsidian/Utility/numberUtils'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createElementBlock, createElementVNode, toDisplayString, unref, normalizeStyle, Fragment, createTextVNode, createCommentVNode, asFormattedString;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      unref = module.unref;
      normalizeStyle = module.normalizeStyle;
      Fragment = module.Fragment;
      createTextVNode = module.createTextVNode;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      asFormattedString = module.asFormattedString;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "debug-timestamp"
      };
      var _hoisted_2 = {
        key: 0
      };
      var _hoisted_3 = {
        key: 2,
        style: {
          "color": "#A4A4A4",
          "padding-left": "3px"
        }
      };
      var _hoisted_4 = {
        class: "debug-timestamp"
      };
      var _hoisted_5 = {
        class: "debug-waterfall"
      };
      var _hoisted_6 = ["title"];
      var script = exports('default', defineComponent({
        name: 'pageDebugTimingRow',
        props: {
          viewModel: {
            type: Object,
            required: true
          },
          startTimeMs: {
            type: Number,
            required: true
          },
          totalMs: {
            type: Number,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var indentStyle = computed(() => {
            if (!props.viewModel.indentLevel) {
              return "";
            }
            var pixels = props.viewModel.indentLevel * 24;
            return "padding-left: ".concat(pixels, "px");
          });
          var waterfallTitle = computed(() => {
            var timestampString = asFormattedString(props.viewModel.timestampMs, 2);
            var durationString = asFormattedString(props.viewModel.durationMs, 2);
            return "Started at ".concat(timestampString, " ms / Duration ").concat(durationString, " ms");
          });
          var waterfallStyle = computed(() => {
            var leftPercent = getPercentFromMs(props.viewModel.timestampMs);
            var widthPercent = getPercentFromMs(props.viewModel.durationMs);
            return "left: ".concat(leftPercent, "%; width: ").concat(widthPercent, "%;");
          });
          function getPercentFromMs(ms) {
            if (!props.totalMs) {
              return 0;
            }
            var msFromStart = ms - props.startTimeMs;
            return msFromStart / props.totalMs * 100;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("tr", null, [createElementVNode("td", _hoisted_1, toDisplayString(unref(asFormattedString)(__props.viewModel.timestampMs, 2)) + " ms", 1), createElementVNode("td", {
              style: normalizeStyle(unref(indentStyle))
            }, [__props.viewModel.isTitleBold ? (openBlock(), createElementBlock("strong", _hoisted_2, toDisplayString(__props.viewModel.title), 1)) : (openBlock(), createElementBlock(Fragment, {
              key: 1
            }, [createTextVNode(toDisplayString(__props.viewModel.title), 1)], 64)), __props.viewModel.subTitle ? (openBlock(), createElementBlock("small", _hoisted_3, toDisplayString(__props.viewModel.subTitle), 1)) : createCommentVNode("v-if", true)], 4), createElementVNode("td", _hoisted_4, toDisplayString(unref(asFormattedString)(__props.viewModel.durationMs, 2)) + " ms", 1), createElementVNode("td", _hoisted_5, [createElementVNode("span", {
              class: "debug-chart-bar",
              title: unref(waterfallTitle),
              style: normalizeStyle(unref(waterfallStyle))
            }, null, 12, _hoisted_6)])]);
          };
        }
      }));

      script.__file = "Framework/Controls/Internal/pageDebugTimingRow.obs";

    })
  };
}));
//# sourceMappingURL=pageDebugTimingRow.obs.js.map
