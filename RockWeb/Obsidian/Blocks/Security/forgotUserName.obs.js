System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/captcha.obs', '@Obsidian/Enums/Blocks/Security/ForgotUserName/sendInstructionsResultType', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, openBlock, createBlock, unref, createElementBlock, Fragment, withCtx, toDisplayString, createCommentVNode, createVNode, NotificationBox, EmailBox, RockButton, RockForm, Captcha, SendInstructionsResultType, BtnType, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      withCtx = module.withCtx;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      Captcha = module["default"];
    }, function (module) {
      SendInstructionsResultType = module.SendInstructionsResultType;
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
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

      var _hoisted_1 = ["innerHTML"];
      var _hoisted_2 = createElementVNode("p", null, "We were able to find the following accounts for this email, but none of them are able to be reset from this website.", -1);
      var _hoisted_3 = createTextVNode("Accounts:");
      var _hoisted_4 = createElementVNode("br", null, null, -1);
      var _hoisted_5 = createTextVNode("To create a new account with a username and password please see our ");
      var _hoisted_6 = ["href"];
      var _hoisted_7 = createTextVNode(" page.");
      var _hoisted_8 = ["innerHTML"];
      var _hoisted_9 = {
        class: "actions"
      };
      var _hoisted_10 = createTextVNode("Email me reset instructions");
      var Step = function (Step) {
        Step[Step["EmailEntry"] = 0] = "EmailEntry";
        Step[Step["Success"] = 1] = "Success";
        return Step;
      }(Step || {});
      var script = exports('default', defineComponent({
        name: 'forgotUserName',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var captchaElement = ref();
          var step = ref(Step.EmailEntry);
          var email = ref("");
          var isErrorShown = ref(false);
          var errorMessage = ref(null);
          var isWarningShown = ref(false);
          var warningMessage = ref(null);
          var changePasswordNotSupportedWarningOptions = ref(null);
          var isProcessing = ref(false);
          var disableCaptchaSupport = ref(config.disableCaptchaSupport);
          function onSubmitted() {
            return _onSubmitted.apply(this, arguments);
          }
          function _onSubmitted() {
            _onSubmitted = _asyncToGenerator(function* () {
              try {
                isProcessing.value = true;
                hideError();
                hideWarning();
                var result = yield send({
                  email: email.value
                });
                processResult(result);
              } finally {
                isProcessing.value = false;
              }
            });
            return _onSubmitted.apply(this, arguments);
          }
          function clearWarning() {
            warningMessage.value = null;
            changePasswordNotSupportedWarningOptions.value = null;
          }
          function hideError() {
            isErrorShown.value = false;
          }
          function hideWarning() {
            isWarningShown.value = false;
          }
          function processResult(result) {
            if (result.isError) {
              showError(result.errorMessage || "Invalid request.");
              return;
            }
            if (!result.data) {
              showError("Invalid request.");
              return;
            }
            switch (result.data.resultType) {
              case SendInstructionsResultType.InstructionsSent:
                {
                  step.value = Step.Success;
                  break;
                }
              case SendInstructionsResultType.ChangePasswordNotSupported:
                {
                  var _result$data$changePa, _result$data$changePa2, _result$data$changePa3, _result$data$changePa4;
                  showChangePasswordNotSupportedWarning({
                    accountTypes: (_result$data$changePa = (_result$data$changePa2 = result.data.changePasswordNotSupportedResult) === null || _result$data$changePa2 === void 0 ? void 0 : (_result$data$changePa3 = _result$data$changePa2.accountTypes) === null || _result$data$changePa3 === void 0 ? void 0 : _result$data$changePa3.join(",")) !== null && _result$data$changePa !== void 0 ? _result$data$changePa : "",
                    newAccountUrl: ((_result$data$changePa4 = result.data.changePasswordNotSupportedResult) === null || _result$data$changePa4 === void 0 ? void 0 : _result$data$changePa4.newAccountUrl) || "/NewAccount"
                  });
                  break;
                }
              case SendInstructionsResultType.EmailInvalid:
                {
                  var _config$captions;
                  showWarning(((_config$captions = config.captions) === null || _config$captions === void 0 ? void 0 : _config$captions.invalidEmailCaption) || "Sorry, we didn't recognize that email address. Want to try another?");
                  break;
                }
              case SendInstructionsResultType.CaptchaInvalid:
                {
                  showWarning("There was an issue processing your request. Please try again. If the issue persists please contact us.");
                  break;
                }
            }
          }
          function send(_x) {
            return _send.apply(this, arguments);
          }
          function _send() {
            _send = _asyncToGenerator(function* (bag) {
              var actionContext = {};
              if (captchaElement.value) {
                actionContext.captcha = yield captchaElement.value.getToken();
                captchaElement.value.refreshToken();
              }
              return yield invokeBlockAction("SendInstructions", {
                bag
              }, actionContext);
            });
            return _send.apply(this, arguments);
          }
          function showChangePasswordNotSupportedWarning(options) {
            clearWarning();
            changePasswordNotSupportedWarningOptions.value = options;
            isWarningShown.value = true;
          }
          function showError(message) {
            errorMessage.value = message;
            isErrorShown.value = true;
          }
          function showWarning(message) {
            clearWarning();
            warningMessage.value = message;
            isWarningShown.value = true;
          }
          onConfigurationValuesChanged(useReloadBlock());
          return (_ctx, _cache) => {
            var _unref$captions, _unref$captions2;
            return step.value === Step.Success ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "success",
              innerHTML: (_unref$captions = unref(config).captions) === null || _unref$captions === void 0 ? void 0 : _unref$captions.successCaption
            }, null, 8, ["innerHTML"])) : step.value === Step.EmailEntry ? (openBlock(), createElementBlock(Fragment, {
              key: 1
            }, [createElementVNode("div", {
              innerHTML: (_unref$captions2 = unref(config).captions) === null || _unref$captions2 === void 0 ? void 0 : _unref$captions2.headingCaption
            }, null, 8, _hoisted_1), isErrorShown.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), isWarningShown.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "validation"
            }, {
              default: withCtx(() => [changePasswordNotSupportedWarningOptions.value ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [_hoisted_2, createElementVNode("p", null, [_hoisted_3, _hoisted_4, createTextVNode(" " + toDisplayString(changePasswordNotSupportedWarningOptions.value.accountTypes), 1)]), createElementVNode("p", null, [_hoisted_5, createElementVNode("a", {
                href: changePasswordNotSupportedWarningOptions.value.newAccountUrl
              }, "New Account", 8, _hoisted_6), _hoisted_7])], 64)) : (openBlock(), createElementBlock("div", {
                key: 1,
                innerHTML: warningMessage.value
              }, null, 8, _hoisted_8))]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(RockForm), {
              onSubmit: onSubmitted,
              hideErrors: true
            }, {
              default: withCtx(() => [createVNode(unref(EmailBox), {
                modelValue: email.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => email.value = $event),
                disabled: isProcessing.value,
                isRequiredIndicatorHidden: true,
                label: "Enter your email address",
                rules: "required"
              }, null, 8, ["modelValue", "disabled"]), !disableCaptchaSupport.value ? (openBlock(), createBlock(unref(Captcha), {
                key: 0,
                ref_key: "captchaElement",
                ref: captchaElement
              }, null, 512)) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_9, [createVNode(unref(RockButton), {
                autoDisable: true,
                btnType: unref(BtnType).Primary,
                disabled: isProcessing.value,
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_10]),
                _: 1
              }, 8, ["btnType", "disabled"])])]),
              _: 1
            })], 64)) : createCommentVNode("v-if", true);
          };
        }
      }));

      script.__file = "src/Security/forgotUserName.obs";

    })
  };
}));
//# sourceMappingURL=forgotUserName.obs.js.map
