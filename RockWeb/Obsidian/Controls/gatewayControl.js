System.register(['vue', './javaScriptAnchor', './componentFromUrl', '@Obsidian/Enums/Controls/gatewayEmitStrings'], (function (exports) {
    'use strict';
    var defineComponent, computed, JavaScriptAnchor, ComponentFromUrl, GatewayEmitStrings;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }, function (module) {
            JavaScriptAnchor = module["default"];
        }, function (module) {
            ComponentFromUrl = module["default"];
        }, function (module) {
            GatewayEmitStrings = module.GatewayEmitStrings;
        }],
        execute: (function () {

            var gatewayControl = exports('default', defineComponent({
              name: "GatewayControl",
              components: {
                ComponentFromUrl,
                JavaScriptAnchor
              },
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
              setup(props, _ref) {
                var emit = _ref.emit;
                var url = computed(() => {
                  var _props$gatewayControl;
                  return (_props$gatewayControl = props.gatewayControlModel.fileUrl) !== null && _props$gatewayControl !== void 0 ? _props$gatewayControl : "";
                });
                var settings = computed(() => props.gatewayControlModel.settings);
                var amountToPay = computed(() => props.amountToPay);
                var onSuccess = token => {
                  emit(GatewayEmitStrings.Success, token);
                };
                var onValidation = validationErrors => {
                  emit(GatewayEmitStrings.Validation, validationErrors);
                };
                var onError = message => {
                  emit(GatewayEmitStrings.Error, message);
                };
                return {
                  url,
                  settings,
                  amountToPay,
                  returnUrl: props.returnUrl,
                  onSuccess,
                  onValidation,
                  onError
                };
              },
              methods: {},
              template: "\n<div>\n    <ComponentFromUrl :url=\"url\"\n        :settings=\"settings\"\n        :amount=\"amountToPay\"\n        :returnUrl=\"returnUrl\"\n        @validation=\"onValidation\"\n        @success=\"onSuccess\"\n        @error=\"onError\" />\n</div>\n"
            }));

        })
    };
}));
//# sourceMappingURL=gatewayControl.js.map
