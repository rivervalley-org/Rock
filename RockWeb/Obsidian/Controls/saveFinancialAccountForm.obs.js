System.register(['vue', './notificationBox.obs', './inlineCheckBox.obs', './rockButton.obs', './textBox.obs', './rockForm.obs', '@Obsidian/PageState', '@Obsidian/Utility/http', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, computed, openBlock, createElementBlock, createBlock, unref, withCtx, toDisplayString, createCommentVNode, Fragment, renderSlot, createVNode, NotificationBox, InlineCheckBox, RockButton, TextBox, RockForm, useStore, useHttp, toGuidOrNull, emptyGuid;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      renderSlot = module.renderSlot;
      createVNode = module.createVNode;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      InlineCheckBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      useStore = module.useStore;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
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
        key: 0
      };
      var _hoisted_2 = createElementVNode("h3", null, "Make Giving Even Easier", -1);
      var _hoisted_3 = {
        key: 0
      };
      var _hoisted_4 = createElementVNode("strong", null, "Note:", -1);
      var _hoisted_5 = createTextVNode(" For security purposes you will need to login to use your saved account information. To create a login account please provide a user name and password below. You will be sent an email with the account information above as a reminder. ");
      var _hoisted_6 = createTextVNode("Save Account");
      var script = exports('default', defineComponent({
        name: 'saveFinancialAccountForm',
        props: {
          gatewayGuid: {
            type: String,
            required: true
          },
          transactionCode: {
            type: String,
            required: true
          },
          gatewayPersonIdentifier: {
            type: String,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var store = useStore();
          var http = useHttp();
          var doSave = ref(false);
          var username = ref("");
          var password = ref("");
          var confirmPassword = ref("");
          var savedAccountName = ref("");
          var isLoading = ref(false);
          var successTitle = ref("");
          var successMessage = ref("");
          var errorTitle = ref("");
          var errorMessage = ref("");
          var currentPerson = computed(() => {
            return store.state.currentPerson;
          });
          var isLoginCreationNeeded = computed(() => {
            return !currentPerson.value;
          });
          function onSubmit() {
            return _onSubmit.apply(this, arguments);
          }
          function _onSubmit() {
            _onSubmit = _asyncToGenerator(function* () {
              var _toGuidOrNull, _result$data;
              errorTitle.value = "";
              errorMessage.value = "";
              if (password.value !== confirmPassword.value) {
                errorTitle.value = "Password";
                errorMessage.value = "The password fields do not match.";
                return;
              }
              isLoading.value = true;
              var options = {
                gatewayGuid: (_toGuidOrNull = toGuidOrNull(props.gatewayGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                password: password.value,
                savedAccountName: savedAccountName.value,
                transactionCode: props.transactionCode,
                username: username.value,
                gatewayPersonIdentifier: props.gatewayPersonIdentifier
              };
              var result = yield http.post("/api/v2/Controls/SaveFinancialAccountFormSaveAccount", null, options);
              if (result.isSuccess && (_result$data = result.data) !== null && _result$data !== void 0 && _result$data.isSuccess) {
                successTitle.value = result.data.title || "";
                successMessage.value = result.data.detail || "Success";
              } else {
                var _result$data2, _result$data3;
                errorTitle.value = ((_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.title) || "";
                errorMessage.value = ((_result$data3 = result.data) === null || _result$data3 === void 0 ? void 0 : _result$data3.detail) || "Error";
              }
              isLoading.value = false;
            });
            return _onSubmit.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [successMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "success",
              class: "m-0"
            }, {
              default: withCtx(() => [successTitle.value ? (openBlock(), createElementBlock("strong", _hoisted_1, toDisplayString(successTitle.value) + ":", 1)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(successMessage.value), 1)]),
              _: 1
            })) : (openBlock(), createElementBlock(Fragment, {
              key: 1
            }, [renderSlot(_ctx.$slots, "header", {}, () => [_hoisted_2]), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "danger"
            }, {
              default: withCtx(() => [errorTitle.value ? (openBlock(), createElementBlock("strong", _hoisted_3, toDisplayString(errorTitle.value) + ":", 1)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(errorMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(InlineCheckBox), {
              label: "Save account information for future gifts",
              modelValue: doSave.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => doSave.value = $event)
            }, null, 8, ["modelValue"]), doSave.value ? (openBlock(), createBlock(unref(RockForm), {
              key: 1,
              onSubmit: onSubmit
            }, {
              default: withCtx(() => [createVNode(unref(TextBox), {
                label: "Name for the account",
                rules: "required",
                modelValue: savedAccountName.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => savedAccountName.value = $event)
              }, null, 8, ["modelValue"]), unref(isLoginCreationNeeded) ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createVNode(unref(NotificationBox), {
                alertType: "info"
              }, {
                default: withCtx(() => [_hoisted_4, _hoisted_5]),
                _: 1
              }), createVNode(unref(TextBox), {
                label: "Username",
                modelValue: username.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => username.value = $event),
                rules: "required"
              }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                label: "Password",
                modelValue: password.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => password.value = $event),
                type: "password",
                rules: "required"
              }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                label: "Confirm Password",
                modelValue: confirmPassword.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => confirmPassword.value = $event),
                type: "password",
                rules: "required"
              }, null, 8, ["modelValue"])], 64)) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
                isLoading: isLoading.value,
                btnType: "primary",
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_6]),
                _: 1
              }, 8, ["isLoading"])]),
              _: 1
            })) : createCommentVNode("v-if", true)], 64))]);
          };
        }
      }));

      script.__file = "Framework/Controls/saveFinancialAccountForm.obs";

    })
  };
}));
//# sourceMappingURL=saveFinancialAccountForm.obs.js.map
