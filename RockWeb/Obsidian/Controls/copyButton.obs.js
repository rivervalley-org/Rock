System.register(['vue', './rockButton.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, onMounted, openBlock, createBlock, unref, withCtx, RockButton;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
    }, function (module) {
      RockButton = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = createElementVNode("i", {
        class: "fa fa-clipboard"
      }, null, -1);
      var script = exports('default', defineComponent({
        name: 'copyButton',
        props: {
          value: {
            type: String,
            required: true
          },
          tooltip: {
            type: String,
            default: "Copy"
          },
          tooltipPlacement: {
            type: String,
            default: "auto"
          }
        },
        setup(__props) {
          var props = __props;
          var el = ref(null);
          var jEl;
          function copy(e) {
            e.preventDefault();
            navigator.clipboard.writeText(props.value);
            jEl.attr("data-original-title", "Copied").tooltip("show").attr("data-original-title", props.tooltip);
          }
          onMounted(() => {
            var _el$value;
            if (!el.value) {
              return;
            }
            var jquery = window["$"];
            jEl = jquery((_el$value = el.value) === null || _el$value === void 0 ? void 0 : _el$value.$el).tooltip();
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockButton), {
              class: "btn-copy-to-clipboard",
              isSquare: "",
              onClick: copy,
              "data-toggle": "tooltip",
              "data-placement": __props.tooltipPlacement,
              "data-container": "body",
              "data-original-title": __props.tooltip,
              ref_key: "el",
              ref: el
            }, {
              default: withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["data-placement", "data-original-title"]);
          };
        }
      }));

      script.__file = "Framework/Controls/copyButton.obs";

    })
  };
}));
//# sourceMappingURL=copyButton.obs.js.map
