System.register(['vue', '@Obsidian/Controls/loadingIndicator.obs', '@Obsidian/Utility/guid', '@Obsidian/Core/Controls/financialGateway', '@Obsidian/Enums/Controls/gatewayEmitStrings'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, computed, ref, onMounted, openBlock, createElementBlock, createVNode, unref, createCommentVNode, withDirectives, normalizeClass, withModifiers, vShow, toDisplayString, LoadingIndicator, newGuid, onSubmitPayment, GatewayEmitStrings;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      createCommentVNode = module.createCommentVNode;
      withDirectives = module.withDirectives;
      normalizeClass = module.normalizeClass;
      withModifiers = module.withModifiers;
      vShow = module.vShow;
      toDisplayString = module.toDisplayString;
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

      var _hoisted_1 = {
        key: 0,
        class: "text-center"
      };
      var _hoisted_2 = {
        style: {
          "max-width": "600px"
        }
      };
      var _hoisted_3 = {
        key: 0,
        class: "gateway-type-selector btn-group btn-group-xs",
        role: "group"
      };
      var _hoisted_4 = ["onClick"];
      var _hoisted_5 = ["onClick"];
      var _hoisted_6 = {
        key: 0,
        class: "gateway-creditcard-container gateway-payment-container"
      };
      var _hoisted_7 = createElementVNode("div", {
        class: "iframe-input credit-card-input js-credit-card-input"
      }, null, -1);
      var _hoisted_8 = createElementVNode("div", {
        class: "break"
      }, null, -1);
      var _hoisted_9 = createElementVNode("div", {
        class: "iframe-input credit-card-exp-input js-credit-card-exp-input"
      }, null, -1);
      var _hoisted_10 = createElementVNode("div", {
        class: "iframe-input credit-card-cvv-input js-credit-card-cvv-input"
      }, null, -1);
      var _hoisted_11 = [_hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10];
      var _hoisted_12 = {
        key: 1,
        class: "gateway-ach-container gateway-payment-container"
      };
      var _hoisted_13 = createElementVNode("div", {
        class: "iframe-input check-account-number-input js-check-account-number-input"
      }, null, -1);
      var _hoisted_14 = createElementVNode("div", {
        class: "iframe-input check-routing-number-input js-check-routing-number-input"
      }, null, -1);
      var _hoisted_15 = createElementVNode("div", {
        class: "iframe-input check-fullname-input js-check-fullname-input"
      }, null, -1);
      var _hoisted_16 = [_hoisted_13, _hoisted_14, _hoisted_15];
      var _hoisted_17 = createElementVNode("button", {
        type: "button",
        style: {
          "display": "none"
        },
        class: "payment-button js-payment-button"
      }, null, -1);
      var _hoisted_18 = {
        class: "form-group has-error",
        style: {
          "display": "none"
        }
      };
      var NMIPaymentType = function (NMIPaymentType) {
        NMIPaymentType[NMIPaymentType["Card"] = 0] = "Card";
        NMIPaymentType[NMIPaymentType["BankAccount"] = 1] = "BankAccount";
        return NMIPaymentType;
      }(NMIPaymentType || {});
      var script = exports('default', defineComponent({
        name: 'nmiGatewayControl',
        props: {
          settings: {
            type: Object,
            required: true
          }
        },
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var standardStyling = "\n.nmi-payment-inputs .iframe-input {\n  position: relative;\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n  height: 42px;\n  height: calc(var(--input-height-base) + 5px);\n  margin-bottom: 10px;\n  padding: 0 3px;\n  overflow: hidden;\n}\n.nmi-payment-inputs .iframe-input::before {\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  width: calc(100% - 6px);\n  height: 38px;\n  height: var(--input-height-base);\n  padding: 6px 12px;\n  padding: var(--input-padding);\n  margin: 0;\n  content: \" \";\n  background: #f3f3f3;\n  background: var(--input-bg-disabled);\n  border: 1px solid #d8d8d8;\n  border-color: var(--input-border);\n  border-radius: var(--input-border-radius);\n}\n.nmi-payment-inputs .iframe-input .CollectJSInlineIframe {\n  height: calc(var(--input-height-base) + 5px) !important;\n  height: 42px !important;\n}\n.nmi-payment-inputs .break {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n}\n.nmi-payment-inputs .gateway-payment-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin: 0 -3px;\n  overflow-x: hidden;\n}\n.nmi-payment-inputs .credit-card-input {\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0;\n  flex: 1 1 0;\n  min-width: 200px;\n}\n.nmi-payment-inputs .check-account-number-input,\n.nmi-payment-inputs .check-routing-number-input {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.nmi-payment-inputs .credit-card-exp-input,\n.nmi-payment-inputs .credit-card-cvv-input {\n  -ms-flex: 1 1 50%;\n  flex: 1 1 50%;\n  min-width: 50px;\n}\n@media (min-width: 500px) {\n  .nmi-payment-inputs .break {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 0%;\n    flex: 0 0 0%;\n  }\n  .nmi-payment-inputs .check-account-number-input,\n  .nmi-payment-inputs .check-routing-number-input {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .nmi-payment-inputs .credit-card-exp-input,\n  .nmi-payment-inputs .credit-card-cvv-input {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    max-width: 100px;\n  }\n}\n";
          function loadCollectJSAsync(_x) {
            return _loadCollectJSAsync.apply(this, arguments);
          }
          function _loadCollectJSAsync() {
            _loadCollectJSAsync = _asyncToGenerator(function* (tokenizationKey) {
              if (typeof CollectJS === "undefined") {
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
              return typeof CollectJS !== "undefined";
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
          function validateInputs() {
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
          }
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
              emit(GatewayEmitStrings.Validation, [{
                name: "Payment Timeout",
                text: "Response from gateway timed out. This could be do to poor connectivity or invalid payment values."
              }]);
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
            var _tokenResponse$token;
            hasReceivedToken = true;
            emit(GatewayEmitStrings.Success, (_tokenResponse$token = tokenResponse.token) !== null && _tokenResponse$token !== void 0 ? _tokenResponse$token : "");
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
              var _options = getCollectJSOptions(controlId, inputStyleHook.value, inputInvalidStyleHook.value);
              _options.timeoutCallback = timeoutCallback;
              _options.validationCallback = validationCallback;
              _options.callback = handleTokenResponse;
              _options.fieldsAvailableCallback = () => {
                loading.value = false;
              };
              (_CollectJS6 = CollectJS) === null || _CollectJS6 === void 0 ? void 0 : _CollectJS6.configure(_options);
            } catch (_unused) {
              failedToLoad.value = true;
              emit(GatewayEmitStrings.Error, "Error configuring hosted gateway. This could be due to an invalid or missing Tokenization Key. Please verify that Tokenization Key is configured correctly in gateway settings.");
              return;
            }
          }));
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [loading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(LoadingIndicator))])) : createCommentVNode("v-if", true), withDirectives(createElementVNode("div", _hoisted_2, [unref(hasMultiplePaymentTypes) ? (openBlock(), createElementBlock("div", _hoisted_3, [createElementVNode("a", {
              class: normalizeClass(unref(creditCardButtonClasses)),
              onClick: withModifiers(activateCreditCard, ["prevent"])
            }, "Card", 10, _hoisted_4), createElementVNode("a", {
              class: normalizeClass(unref(bankAccountButtonClasses)),
              onClick: withModifiers(activateBankAccount, ["prevent"])
            }, "Bank Account", 10, _hoisted_5)])) : createCommentVNode("v-if", true), createElementVNode("div", {
              id: controlId,
              class: "nmi-payment-inputs",
              ref_key: "paymentInputs",
              ref: paymentInputs
            }, [unref(hasCreditCardPaymentType) ? withDirectives((openBlock(), createElementBlock("div", _hoisted_6, _hoisted_11, 512)), [[vShow, unref(isCreditCardPaymentTypeActive)]]) : createCommentVNode("v-if", true), unref(hasBankAccountPaymentType) ? withDirectives((openBlock(), createElementBlock("div", _hoisted_12, _hoisted_16, 512)), [[vShow, unref(isBankAccountPaymentTypeActive)]]) : createCommentVNode("v-if", true), _hoisted_17], 512), withDirectives(createElementVNode("div", {
              class: "alert alert-validation"
            }, toDisplayString(validationMessage.value), 513), [[vShow, validationMessage.value]])], 512), [[vShow, !loading.value && !failedToLoad.value]]), createElementVNode("input", {
              ref_key: "inputStyleHook",
              ref: inputStyleHook,
              class: "form-control nmi-input-style-hook form-group",
              style: {
                "display": "none"
              }
            }, null, 512), createElementVNode("div", _hoisted_18, [createElementVNode("input", {
              ref_key: "inputInvalidStyleHook",
              ref: inputInvalidStyleHook,
              type: "text",
              class: "form-control"
            }, null, 512)])]);
          };
        }
      }));

      script.__file = "Framework/Controls/Internal/nmiGatewayControl.obs";

    })
  };
}));
//# sourceMappingURL=nmiGatewayControl.obs.js.map
