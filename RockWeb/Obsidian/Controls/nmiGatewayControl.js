System.register(['vue', './loadingIndicator', '@Obsidian/Utility/guid', '@Obsidian/Core/Controls/financialGateway', '@Obsidian/Enums/Controls/gatewayEmitStrings'], (function (exports) {
  'use strict';
  var defineComponent, computed, ref, onMounted, LoadingIndicator, newGuid, onSubmitPayment, GatewayEmitStrings;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      onMounted = module.onMounted;
    }, function (module) {
      LoadingIndicator = module["default"];
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

      var NMIPaymentType = function (NMIPaymentType) {
        NMIPaymentType[NMIPaymentType["Card"] = 0] = "Card";
        NMIPaymentType[NMIPaymentType["BankAccount"] = 1] = "BankAccount";
        return NMIPaymentType;
      }(NMIPaymentType || {});
      var standardStyling = "\n.nmi-payment-inputs .iframe-input {\n  position: relative;\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n  height: 42px;\n  height: calc(var(--input-height-base) + 5px);\n  margin-bottom: 10px;\n  padding: 0 3px;\n  overflow: hidden;\n}\n.nmi-payment-inputs .iframe-input::before {\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  width: calc(100% - 6px);\n  height: 38px;\n  height: var(--input-height-base);\n  padding: 6px 12px;\n  padding: var(--input-padding);\n  margin: 0;\n  content: \" \";\n  background: #f3f3f3;\n  background: var(--input-bg-disabled);\n  border: 1px solid #d8d8d8;\n  border-color: var(--input-border);\n  border-radius: var(--input-border-radius);\n}\n.nmi-payment-inputs .iframe-input .CollectJSInlineIframe {\n  height: calc(var(--input-height-base) + 5px) !important;\n  height: 42px !important;\n}\n.nmi-payment-inputs .break {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n}\n.nmi-payment-inputs .gateway-payment-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin: 0 -3px;\n  overflow-x: hidden;\n}\n.nmi-payment-inputs .credit-card-input {\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0;\n  flex: 1 1 0;\n  min-width: 200px;\n}\n.nmi-payment-inputs .check-account-number-input,\n.nmi-payment-inputs .check-routing-number-input {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.nmi-payment-inputs .credit-card-exp-input,\n.nmi-payment-inputs .credit-card-cvv-input {\n  -ms-flex: 1 1 50%;\n  flex: 1 1 50%;\n  min-width: 50px;\n}\n@media (min-width: 500px) {\n  .nmi-payment-inputs .break {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 0%;\n    flex: 0 0 0%;\n  }\n  .nmi-payment-inputs .check-account-number-input,\n  .nmi-payment-inputs .check-routing-number-input {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .nmi-payment-inputs .credit-card-exp-input,\n  .nmi-payment-inputs .credit-card-cvv-input {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    max-width: 100px;\n  }\n}\n";
      function loadCollectJSAsync(_x) {
        return _loadCollectJSAsync.apply(this, arguments);
      }
      function _loadCollectJSAsync() {
        _loadCollectJSAsync = _asyncToGenerator(function* (tokenizationKey) {
          if (window.CollectJS === undefined) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://secure.nmi.com/token/Collect.js";
            script.setAttribute("data-tokenization-key", tokenizationKey);
            script.setAttribute("data-variant", "inline");
            document.getElementsByTagName("head")[0].appendChild(script);
            try {
              yield new Promise((resolve, reject) => {
                script.addEventListener("load", () => resolve());
                script.addEventListener("error", () => reject());
              });
            } catch (_unused2) {
              return false;
            }
          }
          return window.CollectJS !== undefined;
        });
        return _loadCollectJSAsync.apply(this, arguments);
      }
      function loadStandardStyleTagAsync() {
        return _loadStandardStyleTagAsync.apply(this, arguments);
      }
      function _loadStandardStyleTagAsync() {
        _loadStandardStyleTagAsync = _asyncToGenerator(function* () {
          var style = document.createElement("style");
          style.type = "text/css";
          style.innerText = standardStyling;
          yield new Promise((resolve, reject) => {
            style.addEventListener("load", () => resolve());
            style.addEventListener("error", () => reject());
            document.getElementsByTagName("head")[0].appendChild(style);
          });
        });
        return _loadStandardStyleTagAsync.apply(this, arguments);
      }
      function getCollectJSOptions(controlId, inputStyleHook, inputInvalidStyleHook) {
        var customCss = {
          "margin-bottom": "5px",
          "margin-top": "0"
        };
        if (inputStyleHook) {
          var inputStyles = getComputedStyle(inputStyleHook);
          customCss["color"] = inputStyles.color;
          customCss["border-bottom-color"] = inputStyles.borderBottomColor;
          customCss["border-bottom-left-radius"] = inputStyles.borderBottomLeftRadius;
          customCss["border-bottom-right-radius"] = inputStyles.borderBottomRightRadius;
          customCss["border-bottom-style"] = inputStyles.borderBottomStyle;
          customCss["border-bottom-width"] = inputStyles.borderBottomWidth;
          customCss["border-left-color"] = inputStyles.borderLeftColor;
          customCss["border-left-style"] = inputStyles.borderLeftStyle;
          customCss["border-left-width"] = inputStyles.borderLeftWidth;
          customCss["border-right-color"] = inputStyles.borderRightColor;
          customCss["border-right-style"] = inputStyles.borderRightStyle;
          customCss["border-right-width"] = inputStyles.borderRightWidth;
          customCss["border-top-color"] = inputStyles.borderTopColor;
          customCss["border-top-left-radius"] = inputStyles.borderTopLeftRadius;
          customCss["border-top-right-radius"] = inputStyles.borderTopRightRadius;
          customCss["border-top-style"] = inputStyles.borderTopStyle;
          customCss["border-top-width"] = inputStyles.borderTopWidth;
          customCss["border-width"] = inputStyles.borderWidth;
          customCss["border-style"] = inputStyles.borderStyle;
          customCss["border-radius"] = inputStyles.borderRadius;
          customCss["border-color"] = inputStyles.borderColor;
          customCss["background-color"] = inputStyles.backgroundColor;
          customCss["box-shadow"] = inputStyles.boxShadow;
          customCss["padding"] = inputStyles.padding;
          customCss["font-size"] = inputStyles.fontSize;
          customCss["height"] = inputStyles.height;
          customCss["font-family"] = inputStyles.fontFamily;
        }
        var focusCss = {
          "border-color": getComputedStyle(document.documentElement).getPropertyValue("--focus-state-border-color"),
          "outline-style": "none"
        };
        var invalidCss = {};
        if (inputInvalidStyleHook) {
          invalidCss["border-color"] = getComputedStyle(inputInvalidStyleHook).borderColor;
        }
        var placeholderCss = {
          "color": getComputedStyle(document.documentElement).getPropertyValue("--input-placeholder")
        };
        var options = {
          paymentSelector: "".concat(controlId, " .js-payment-button"),
          variant: "inline",
          fields: {
            ccnumber: {
              selector: "#".concat(controlId, " .js-credit-card-input"),
              title: "Card Number",
              placeholder: "0000 0000 0000 0000"
            },
            ccexp: {
              selector: "#".concat(controlId, " .js-credit-card-exp-input"),
              title: "Card Expiration",
              placeholder: "MM / YY"
            },
            cvv: {
              display: "show",
              selector: "#".concat(controlId, " .js-credit-card-cvv-input"),
              title: "CVV Code",
              placeholder: "CVV"
            },
            checkaccount: {
              selector: "#".concat(controlId, " .js-check-account-number-input"),
              title: "Account Number",
              placeholder: "Account Number"
            },
            checkaba: {
              selector: "#".concat(controlId, " .js-check-routing-number-input"),
              title: "Routing Number",
              placeholder: "Routing Number"
            },
            checkname: {
              selector: "#".concat(controlId, " .js-check-fullname-input"),
              title: "Name on Checking Account",
              placeholder: "Name on Account"
            }
          },
          styleSniffer: false,
          customCss,
          focusCss,
          invalidCss,
          placeholderCss,
          timeoutDuration: 10000,
          callback: () => {}
        };
        return options;
      }
      function getFieldFriendlyName(field) {
        if (field === "ccnumber") {
          return "Card Number";
        } else if (field === "ccexp") {
          return "Expiration Date";
        } else if (field === "cvv") {
          return "CVV";
        } else if (field === "checkaccount") {
          return "Account Number";
        } else if (field === "checkaba") {
          return "Routing Number";
        } else if (field === "checkname") {
          return "Account Owner's Name";
        } else {
          return "Payment Information";
        }
      }
      var nmiGatewayControl = exports('default', defineComponent({
        name: "NMIGatewayControl",
        components: {
          LoadingIndicator
        },
        props: {
          settings: {
            type: Object,
            required: true
          }
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var hasAttemptedSubmit = false;
          var hasReceivedToken = false;
          var hasCreditCardPaymentType = computed(() => {
            var _props$settings$enabl, _props$settings$enabl2;
            return (_props$settings$enabl = (_props$settings$enabl2 = props.settings.enabledPaymentTypes) === null || _props$settings$enabl2 === void 0 ? void 0 : _props$settings$enabl2.includes(NMIPaymentType.Card)) !== null && _props$settings$enabl !== void 0 ? _props$settings$enabl : false;
          });
          var hasBankAccountPaymentType = computed(() => {
            var _props$settings$enabl3, _props$settings$enabl4;
            return (_props$settings$enabl3 = (_props$settings$enabl4 = props.settings.enabledPaymentTypes) === null || _props$settings$enabl4 === void 0 ? void 0 : _props$settings$enabl4.includes(NMIPaymentType.BankAccount)) !== null && _props$settings$enabl3 !== void 0 ? _props$settings$enabl3 : false;
          });
          var hasMultiplePaymentTypes = computed(() => {
            return hasCreditCardPaymentType.value && hasBankAccountPaymentType.value;
          });
          var activePaymentType = ref(props.settings.enabledPaymentTypes != null && props.settings.enabledPaymentTypes.length > 0 ? props.settings.enabledPaymentTypes[0] : null);
          var isCreditCardPaymentTypeActive = computed(() => {
            return activePaymentType.value === NMIPaymentType.Card;
          });
          var isBankAccountPaymentTypeActive = computed(() => {
            return activePaymentType.value === NMIPaymentType.BankAccount;
          });
          var creditCardButtonClasses = computed(() => {
            return isCreditCardPaymentTypeActive.value ? ["btn", "btn-default", "active", "payment-creditcard"] : ["btn", "btn-default", "payment-creditcard"];
          });
          var bankAccountButtonClasses = computed(() => {
            return isBankAccountPaymentTypeActive.value ? ["btn", "btn-default", "active", "payment-ach"] : ["btn", "btn-default", "payment-ach"];
          });
          var loading = ref(true);
          var failedToLoad = ref(false);
          var validationMessage = ref("");
          var activateCreditCard = () => {
            var _CollectJS;
            (_CollectJS = CollectJS) === null || _CollectJS === void 0 ? void 0 : _CollectJS.clearInputs();
            activePaymentType.value = NMIPaymentType.Card;
          };
          var activateBankAccount = () => {
            var _CollectJS2;
            (_CollectJS2 = CollectJS) === null || _CollectJS2 === void 0 ? void 0 : _CollectJS2.clearInputs();
            activePaymentType.value = NMIPaymentType.BankAccount;
          };
          var tokenResponseSent = ref(false);
          var controlId = "nmi_".concat(newGuid());
          var inputStyleHook = ref(null);
          var inputInvalidStyleHook = ref(null);
          var paymentInputs = ref(null);
          var validationFieldStatus = {
            ccnumber: {
              field: getFieldFriendlyName("ccnumber"),
              status: false,
              message: "is required"
            },
            ccexp: {
              field: getFieldFriendlyName("ccexp"),
              status: false,
              message: "is required"
            },
            cvv: {
              field: getFieldFriendlyName("cvv"),
              status: false,
              message: "is required"
            },
            checkaccount: {
              field: getFieldFriendlyName("checkaccount"),
              status: false,
              message: "is required"
            },
            checkaba: {
              field: getFieldFriendlyName("checkaba"),
              status: false,
              message: "is required"
            },
            checkname: {
              field: getFieldFriendlyName("checkname"),
              status: false,
              message: "is required"
            }
          };
          var validateInputs = function validateInputs() {
            var errors = [];
            for (var validationFieldKey in validationFieldStatus) {
              var _CollectJS$config$fie, _CollectJS3, _CollectJS3$config$fi, _inputField$offsetWid, _inputField$offsetHei;
              var validationField = validationFieldStatus[validationFieldKey];
              var inputField = document.querySelector((_CollectJS$config$fie = (_CollectJS3 = CollectJS) === null || _CollectJS3 === void 0 ? void 0 : (_CollectJS3$config$fi = _CollectJS3.config.fields[validationFieldKey]) === null || _CollectJS3$config$fi === void 0 ? void 0 : _CollectJS3$config$fi.selector) !== null && _CollectJS$config$fie !== void 0 ? _CollectJS$config$fie : "");
              var fieldVisible = ((_inputField$offsetWid = inputField === null || inputField === void 0 ? void 0 : inputField.offsetWidth) !== null && _inputField$offsetWid !== void 0 ? _inputField$offsetWid : 0) !== 0 || ((_inputField$offsetHei = inputField === null || inputField === void 0 ? void 0 : inputField.offsetHeight) !== null && _inputField$offsetHei !== void 0 ? _inputField$offsetHei : 0) !== 0;
              if (fieldVisible && !validationField.status) {
                var validationFieldTitle = getFieldFriendlyName(validationFieldKey);
                errors.push({
                  name: validationFieldTitle,
                  text: validationField.message || "unknown validation error"
                });
              }
            }
            return errors;
          };
          var timeoutCallback = () => {
            if (tokenResponseSent.value) {
              return;
            }
            console.log("The tokenization didn't respond in the expected timeframe. This could be due to an invalid or incomplete field or poor connectivity - " + Date());
            var validationErrors = validateInputs();
            if (validationErrors.length > 0) {
              emit(GatewayEmitStrings.Validation, validationErrors);
            } else {
              console.log("Timeout happened for unknown reason, probably poor connectivity since we already validated inputs.");
              emit(GatewayEmitStrings.Validation, {
                "Payment Timeout": "Response from gateway timed out. This could be do to poor connectivity or invalid payment values."
              });
            }
          };
          var validationCallback = (field, validated, message) => {
            var _CollectJS$inSubmissi, _CollectJS4;
            if (message === "Field is empty") {
              message = "is required";
            }
            validationFieldStatus[field] = {
              field: field,
              status: validated,
              message: message
            };
            var validationErrors = validateInputs();
            if (hasAttemptedSubmit && !((_CollectJS$inSubmissi = (_CollectJS4 = CollectJS) === null || _CollectJS4 === void 0 ? void 0 : _CollectJS4.inSubmission) !== null && _CollectJS$inSubmissi !== void 0 ? _CollectJS$inSubmissi : false) && !hasReceivedToken) {
              emit(GatewayEmitStrings.Validation, validationErrors);
            }
          };
          onSubmitPayment(() => {
            if (loading.value || failedToLoad.value) {
              return;
            }
            tokenResponseSent.value = false;
            setTimeout(() => {
              var validationErrors = validateInputs();
              hasAttemptedSubmit = true;
              if (validationErrors.length === 0) {
                var _CollectJS5;
                (_CollectJS5 = CollectJS) === null || _CollectJS5 === void 0 ? void 0 : _CollectJS5.startPaymentRequest();
              } else {
                emit(GatewayEmitStrings.Validation, validationErrors);
              }
            }, 0);
          });
          var handleTokenResponse = tokenResponse => {
            hasReceivedToken = true;
            emit(GatewayEmitStrings.Success, tokenResponse.token);
          };
          onMounted(_asyncToGenerator(function* () {
            var _props$settings$token;
            yield loadStandardStyleTagAsync();
            if (!(yield loadCollectJSAsync((_props$settings$token = props.settings.tokenizationKey) !== null && _props$settings$token !== void 0 ? _props$settings$token : ""))) {
              emit(GatewayEmitStrings.Error, "Error configuring hosted gateway. This could be due to an invalid or missing Tokenization Key. Please verify that Tokenization Key is configured correctly in gateway settings.");
              return;
            }
            if (paymentInputs.value) {
              paymentInputs.value.querySelectorAll(".iframe-input").forEach(el => {
                el.innerHTML = "";
              });
            }
            try {
              var _CollectJS6;
              var options = getCollectJSOptions(controlId, inputStyleHook.value, inputInvalidStyleHook.value);
              options.timeoutCallback = timeoutCallback;
              options.validationCallback = validationCallback;
              options.callback = handleTokenResponse;
              options.fieldsAvailableCallback = () => {
                loading.value = false;
              };
              (_CollectJS6 = CollectJS) === null || _CollectJS6 === void 0 ? void 0 : _CollectJS6.configure(options);
            } catch (_unused) {
              failedToLoad.value = true;
              emit(GatewayEmitStrings.Error, "Error configuring hosted gateway. This could be due to an invalid or missing Tokenization Key. Please verify that Tokenization Key is configured correctly in gateway settings.");
              return;
            }
          }));
          return {
            controlId,
            loading,
            failedToLoad,
            hasMultiplePaymentTypes,
            hasCreditCardPaymentType,
            hasBankAccountPaymentType,
            isCreditCardPaymentTypeActive,
            isBankAccountPaymentTypeActive,
            creditCardButtonClasses,
            bankAccountButtonClasses,
            validationMessage,
            activateCreditCard,
            activateBankAccount,
            inputStyleHook,
            inputInvalidStyleHook,
            paymentInputs
          };
        },
        template: "\n<div>\n    <div v-if=\"loading\" class=\"text-center\">\n        <LoadingIndicator />\n    </div>\n\n    <div v-show=\"!loading && !failedToLoad\" style=\"max-width: 600px;\">\n        <div v-if=\"hasMultiplePaymentTypes\" class=\"gateway-type-selector btn-group btn-group-xs\" role=\"group\">\n            <a :class=\"creditCardButtonClasses\" @click.prevent=\"activateCreditCard\">Card</a>\n            <a :class=\"bankAccountButtonClasses\" @click.prevent=\"activateBankAccount\">Bank Account</a>\n        </div>\n\n        <div :id=\"controlId\" class=\"nmi-payment-inputs\" ref=\"paymentInputs\">\n            <div v-if=\"hasCreditCardPaymentType\" v-show=\"isCreditCardPaymentTypeActive\" class=\"gateway-creditcard-container gateway-payment-container\">\n                <div class=\"iframe-input credit-card-input js-credit-card-input\"></div>\n                <div class=\"break\"></div>\n                <div class=\"iframe-input credit-card-exp-input js-credit-card-exp-input\"></div>\n                <div class=\"iframe-input credit-card-cvv-input js-credit-card-cvv-input\"></div>\n            </div>\n\n            <div v-if=\"hasBankAccountPaymentType\" v-show=\"isBankAccountPaymentTypeActive\" class=\"gateway-ach-container gateway-payment-container\">\n                <div class=\"iframe-input check-account-number-input js-check-account-number-input\"></div>\n                <div class=\"iframe-input check-routing-number-input js-check-routing-number-input\"></div>\n                <div class=\"iframe-input check-fullname-input js-check-fullname-input\"></div>\n            </div>\n\n            <button type=\"button\" style=\"display: none;\" class=\"payment-button js-payment-button\"></button>\n        </div>\n\n        <div v-show=\"validationMessage\" class=\"alert alert-validation\">\n            {{ validationMessage }}\n        </div>\n    </div>\n\n    <input ref=\"inputStyleHook\" class=\"form-control nmi-input-style-hook form-group\" style=\"display: none;\">\n\n    <div class=\"form-group has-error\" style=\"display: none;\">\n        <input ref=\"inputInvalidStyleHook\" type=\"text\" class=\"form-control\">\n    </div>\n</div>"
      }));

    })
  };
}));
//# sourceMappingURL=nmiGatewayControl.js.map
