System.register(['vue'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, openBlock, createElementBlock, toDisplayString, createCommentVNode;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "progress-step progress-tracker-priority"
      };
      var _hoisted_2 = {
        key: 0,
        class: "progress-step-link"
      };
      var _hoisted_3 = createElementVNode("div", {
        class: "progress-tracker-icon"
      }, [createElementVNode("i", {
        class: "fas fa-check"
      })], -1);
      var _hoisted_4 = {
        class: "progress-tracker-details"
      };
      var _hoisted_5 = {
        class: "progress-tracker-title text-truncate"
      };
      var _hoisted_6 = {
        class: "progress-tracker-subtitle text-truncate"
      };
      var _hoisted_7 = {
        key: 1,
        class: "progress-step-link"
      };
      var _hoisted_8 = createElementVNode("div", {
        class: "progress-tracker-icon current"
      }, null, -1);
      var _hoisted_9 = {
        class: "progress-tracker-details"
      };
      var _hoisted_10 = {
        class: "progress-tracker-title text-truncate"
      };
      var _hoisted_11 = {
        class: "progress-tracker-subtitle text-truncate"
      };
      var _hoisted_12 = {
        key: 2,
        class: "progress-step-link"
      };
      var _hoisted_13 = createElementVNode("div", {
        class: "progress-tracker-icon upcoming"
      }, null, -1);
      var _hoisted_14 = {
        class: "progress-tracker-details"
      };
      var _hoisted_15 = {
        class: "progress-tracker-title text-truncate"
      };
      var _hoisted_16 = {
        class: "progress-tracker-subtitle text-truncate"
      };
      var _hoisted_17 = {
        key: 3,
        class: "progress-tracker-arrow"
      };
      var _hoisted_18 = createElementVNode("svg", {
        viewBox: "0 0 22 80",
        fill: "none",
        preserveAspectRatio: "none"
      }, [createElementVNode("path", {
        d: "M0 -2L20 40L0 82",
        "vector-effect": "non-scaling-stroke",
        stroke: "currentcolor",
        "stroke-linejoin": "round"
      })], -1);
      var _hoisted_19 = [_hoisted_18];
      var script = exports('default', defineComponent({
        name: 'progressTrackerSegment',
        props: {
          isPast: {
            type: Boolean,
            required: true
          },
          isPresent: {
            type: Boolean,
            required: true
          },
          isFuture: {
            type: Boolean,
            required: true
          },
          isLast: {
            type: Boolean,
            required: true
          },
          item: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("li", _hoisted_1, [props.isPast ? (openBlock(), createElementBlock("div", _hoisted_2, [_hoisted_3, createElementVNode("div", _hoisted_4, [createElementVNode("span", _hoisted_5, toDisplayString(props.item.title), 1), createElementVNode("p", _hoisted_6, toDisplayString(props.item.subtitle), 1)])])) : props.isPresent ? (openBlock(), createElementBlock("div", _hoisted_7, [_hoisted_8, createElementVNode("div", _hoisted_9, [createElementVNode("span", _hoisted_10, toDisplayString(props.item.title), 1), createElementVNode("p", _hoisted_11, toDisplayString(props.item.subtitle), 1)])])) : props.isFuture ? (openBlock(), createElementBlock("div", _hoisted_12, [_hoisted_13, createElementVNode("div", _hoisted_14, [createElementVNode("span", _hoisted_15, toDisplayString(props.item.title), 1), createElementVNode("p", _hoisted_16, toDisplayString(props.item.subtitle), 1)])])) : createCommentVNode("v-if", true), !props.isLast ? (openBlock(), createElementBlock("div", _hoisted_17, _hoisted_19)) : createCommentVNode("v-if", true)]);
          };
        }
      }));

      script.__file = "Framework/Controls/progressTrackerSegment.obs";

    })
  };
}));
//# sourceMappingURL=progressTrackerSegment.obs.js.map
