System.register(['vue'], (function (exports) {
    'use strict';
    var provide, inject;
    return {
        setters: [function (module) {
            provide = module.provide;
            inject = module.inject;
        }],
        execute: (function () {

            const submitPaymentCallbackSymbol = Symbol("gateway-submit-payment-callback");
            const provideSubmitPayment = exports('provideSubmitPayment', () => {
                const container = {};
                provide(submitPaymentCallbackSymbol, container);
                return () => {
                    if (container.callback) {
                        container.callback();
                    }
                    else {
                        throw "Submit payment callback has not been defined.";
                    }
                };
            });
            const onSubmitPayment = exports('onSubmitPayment', (callback) => {
                const container = inject(submitPaymentCallbackSymbol);
                if (!container) {
                    throw "Gateway control has not been properly initialized.";
                }
                container.callback = callback;
            });

        })
    };
}));
