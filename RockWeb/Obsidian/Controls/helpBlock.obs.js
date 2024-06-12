System.register(['vue'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, onMounted, openBlock, createElementBlock;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
    }],
    execute: (function () {

      var _hoisted_1 = ["data-original-title"];
      var _hoisted_2 = createElementVNode("i", {
        class: "fa fa-info-circle"
      }, null, -1);
      var _hoisted_3 = [_hoisted_2];
      var script = exports('default', defineComponent({
        name: 'helpBlock',
        props: {
          text: {
            type: String,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var helpElement = ref();
          onMounted(() => {
            var jquery = window["$"];
            jquery === null || jquery === void 0 ? void 0 : jquery(helpElement.value).tooltip();
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("a", {
              href: "javascript:void(0);",
              ref_key: "helpElement",
              ref: helpElement,
              class: "help",
              tabindex: "-1",
              "data-toggle": "tooltip",
              "data-placement": "auto",
              "data-container": "body",
              "data-html": "true",
              title: "",
              "data-original-title": props.text
            }, _hoisted_3, 8, _hoisted_1);
          };
        }
      }));

      script.__file = "Framework/Controls/helpBlock.obs";

    })
  };
}));
//# sourceMappingURL=helpBlock.obs.js.map
