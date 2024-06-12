System.register(['vue', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/guid', '@Obsidian/Core/Controls/financialGateway', '@Obsidian/Enums/Controls/gatewayEmitStrings'], (function (exports) {
  'use strict';
  var defineComponent, ref, openBlock, createElementBlock, createVNode, unref, TextBox, newGuid, onSubmitPayment, GatewayEmitStrings;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      newGuid = module.newGuid;
    }, function (module) {
      onSubmitPayment = module.onSubmitPayment;
    }, function (module) {
      GatewayEmitStrings = module.GatewayEmitStrings;
    }],
    execute: (function () {

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }

      var _hoisted_1 = {
        style: {
          "max-width": "600px",
          "margin-left": "auto",
          "margin-right": "auto"
        }
      };
      var script = exports('default', defineComponent({
        name: 'testGatewayControl',
        props: {
          settings: {
            type: Object,
            required: true
          }
        },
        setup(__props, _ref) {
          var emit = _ref.emit;
          var cardNumber = ref("");
          var submit = function () {
            var _ref2 = _asyncToGenerator(function* () {
              yield new Promise(resolve => setTimeout(resolve, 500));
              if (cardNumber.value === "0000") {
                emit(GatewayEmitStrings.Error, "This is a serious problem with the gateway.");
                return;
              }
              if (cardNumber.value.length <= 10) {
                emit(GatewayEmitStrings.Validation, [{
                  name: "Card Number",
                  text: "Card number is invalid."
                }]);
                return;
              }
              var token = newGuid().replace(/-/g, "");
              emit(GatewayEmitStrings.Success, token);
            });
            return function submit() {
              return _ref2.apply(this, arguments);
            };
          }();
          onSubmitPayment(submit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(TextBox), {
              label: "Credit Card",
              modelValue: cardNumber.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => cardNumber.value = $event)
            }, null, 8, ["modelValue"])]);
          };
        }
      }));

      script.__file = "Framework/Controls/Internal/testGatewayControl.obs";

    })
  };
}));
//# sourceMappingURL=testGatewayControl.obs.js.map
