System.register(['vue', './componentFromUrl.obs', '@Obsidian/Enums/Controls/gatewayEmitStrings'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createElementBlock, createVNode, unref, ComponentFromUrl, GatewayEmitStrings;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
    }, function (module) {
      ComponentFromUrl = module["default"];
    }, function (module) {
      GatewayEmitStrings = module.GatewayEmitStrings;
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'gatewayControl',
        props: {
          gatewayControlModel: {
            type: Object,
            required: true
          },
          amountToPay: {
            type: Number,
            required: true
          },
          returnUrl: {
            type: String,
            required: false
          }
        },
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var url = computed(() => {
            var _props$gatewayControl;
            return (_props$gatewayControl = props.gatewayControlModel.fileUrl) !== null && _props$gatewayControl !== void 0 ? _props$gatewayControl : "";
          });
          var settings = computed(() => props.gatewayControlModel.settings);
          var amountToPay = computed(() => props.amountToPay);
          function onSuccess(token) {
            emit(GatewayEmitStrings.Success, token);
          }
          function onValidation(validationErrors) {
            emit(GatewayEmitStrings.Validation, validationErrors);
          }
          function onError(message) {
            emit(GatewayEmitStrings.Error, message);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [createVNode(unref(ComponentFromUrl), {
              url: unref(url),
              settings: unref(settings),
              amount: unref(amountToPay),
              returnUrl: __props.returnUrl,
              onValidation: onValidation,
              onSuccess: onSuccess,
              onError: onError
            }, null, 8, ["url", "settings", "amount", "returnUrl"])]);
          };
        }
      }));

      script.__file = "Framework/Controls/gatewayControl.obs";

    })
  };
}));
//# sourceMappingURL=gatewayControl.obs.js.map
