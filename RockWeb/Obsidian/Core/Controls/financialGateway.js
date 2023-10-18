System.register(['vue'], (function (exports) {
    'use strict';
    var provide, inject;
    return {
        setters: [function (module) {
            provide = module.provide;
            inject = module.inject;
        }],
        execute: (function () {

            var submitPaymentCallbackSymbol = Symbol("gateway-submit-payment-callback");
            var provideSubmitPayment = exports('provideSubmitPayment', () => {
              var container = {};
              provide(submitPaymentCallbackSymbol, container);
              return () => {
                if (container.callback) {
                  container.callback();
                } else {
                  throw "Submit payment callback has not been defined.";
                }
              };
            });
            var onSubmitPayment = exports('onSubmitPayment', callback => {
              var container = inject(submitPaymentCallbackSymbol);
              if (!container) {
                throw "Gateway control has not been properly initialized.";
              }
              container.callback = callback;
            });

        })
    };
}));
//# sourceMappingURL=financialGateway.js.map
