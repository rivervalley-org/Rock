System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/component', '@Obsidian/Enums/Controls/alertType', '@Obsidian/Utility/stringUtils', '@Obsidian/Enums/Blocks/Security/ConfirmAccount/confirmAccountViewType', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, computed, openBlock, createElementBlock, createBlock, unref, createCommentVNode, createVNode, withCtx, isRef, toDisplayString, Fragment, NotificationBox, RockButton, RockForm, TextBox, BtnType, useVModelPassthrough, AlertType, toTitleCase, ConfirmAccountViewType, ConfirmAccountViewTypeDescription, useConfigurationValues, useInvokeBlockAction;
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
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      withCtx = module.withCtx;
      isRef = module.isRef;
      toDisplayString = module.toDisplayString;
      Fragment = module.Fragment;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      AlertType = module.AlertType;
    }, function (module) {
      toTitleCase = module.toTitleCase;
    }, function (module) {
      ConfirmAccountViewType = module.ConfirmAccountViewType;
      ConfirmAccountViewTypeDescription = module.ConfirmAccountViewTypeDescription;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
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

      var _hoisted_1$3 = createElementVNode("legend", null, "Enter Code", -1);
      var _hoisted_2$2 = {
        class: "actions"
      };
      var _hoisted_3$2 = createTextVNode("Confirm Account");
      var _hoisted_4$1 = createTextVNode("Change Password");
      var _hoisted_5 = createTextVNode("Delete Account");
      var script$4 = defineComponent({
        name: 'accountConfirmation.partial',
        props: {
          options: {
            type: Object,
            required: true
          },
          code: {
            type: String,
            default: "",
            required: false
          },
          disabled: {
            type: Boolean,
            default: false,
            required: false
          }
        },
        emits: ["confirmAccount", "showChangePasswordView", "showDeleteConfirmationView", "update:code"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var formErrors = ref([]);
          var internalCode = useVModelPassthrough(props, "code", emit);
          var isFormValid = computed(() => formErrors.value.length === 0);
          function onConfirmAccountClicked() {
            if (isFormValid.value) {
              emit("confirmAccount", {
                code: internalCode.value
              });
            }
          }
          function onChangePasswordClicked() {
            if (isFormValid.value) {
              emit("showChangePasswordView", {
                code: internalCode.value
              });
            }
          }
          function onDeleteAccountClicked() {
            if (isFormValid.value) {
              emit("showDeleteConfirmationView", {
                code: internalCode.value
              });
            }
          }
          function onFormValidationChanged(errors) {
            formErrors.value = errors;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [__props.options.errorCaption ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "danger",
              innerHTML: __props.options.errorCaption
            }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), createVNode(unref(RockForm), {
              hideErrors: true,
              onValidationChanged: onFormValidationChanged
            }, {
              default: withCtx(() => [createElementVNode("fieldset", null, [_hoisted_1$3, createVNode(unref(TextBox), {
                modelValue: unref(internalCode),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalCode) ? internalCode.value = $event : null),
                disabled: __props.disabled,
                label: "Code",
                rules: "required"
              }, null, 8, ["modelValue", "disabled"])]), createElementVNode("div", _hoisted_2$2, [createVNode(unref(RockButton), {
                btnType: unref(BtnType).Primary,
                disabled: __props.disabled,
                type: "submit",
                onClick: onConfirmAccountClicked
              }, {
                default: withCtx(() => [_hoisted_3$2]),
                _: 1
              }, 8, ["btnType", "disabled"]), createCommentVNode(" This \"submit\" button should be first so pressing [Enter] triggers this click event handler. "), createVNode(unref(RockButton), {
                btnType: unref(BtnType).Link,
                disabled: __props.disabled,
                type: "submit",
                onClick: onChangePasswordClicked
              }, {
                default: withCtx(() => [_hoisted_4$1]),
                _: 1
              }, 8, ["btnType", "disabled"]), createCommentVNode(" The button type is \"submit\" to trigger form validation when it is clicked. "), createVNode(unref(RockButton), {
                btnType: unref(BtnType).Link,
                disabled: __props.disabled,
                type: "submit",
                onClick: onDeleteAccountClicked
              }, {
                default: withCtx(() => [_hoisted_5]),
                _: 1
              }, 8, ["btnType", "disabled"]), createCommentVNode(" The button type is \"submit\" to trigger form validation when it is clicked. ")])]),
              _: 1
            })]);
          };
        }
      });

      script$4.__file = "src/Security/ConfirmAccount/accountConfirmation.partial.obs";

      var _hoisted_1$2 = ["innerHTML"];
      var _hoisted_2$1 = createElementVNode("legend", null, "Enter New Password", -1);
      var _hoisted_3$1 = {
        class: "actions"
      };
      var _hoisted_4 = createTextVNode("Change Password");
      var script$3 = defineComponent({
        name: 'changePassword.partial',
        props: {
          options: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false,
            required: false
          }
        },
        emits: ["changePassword"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var newPasswordLabel = "New Password";
          var password = ref("");
          var passwordConfirm = ref("");
          function onChangePasswordSubmitted() {
            emit("changePassword", {
              code: props.options.code || "",
              password: password.value
            });
          }
          function passwordMatchRule(value, _params) {
            if (value === password.value) {
              return true;
            }
            return "and ".concat(newPasswordLabel, " do not match");
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [__props.options.errorCaption ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.options.errorCaption), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("div", {
              innerHTML: __props.options.viewCaption
            }, null, 8, _hoisted_1$2), createVNode(unref(RockForm), {
              hideErrors: true,
              onSubmit: onChangePasswordSubmitted
            }, {
              default: withCtx(() => [createElementVNode("fieldset", null, [_hoisted_2$1, createVNode(unref(TextBox), {
                modelValue: password.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => password.value = $event),
                disabled: __props.disabled,
                label: newPasswordLabel,
                rules: "required",
                type: "password"
              }, null, 8, ["modelValue", "disabled"]), createVNode(unref(TextBox), {
                modelValue: passwordConfirm.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => passwordConfirm.value = $event),
                disabled: __props.disabled,
                label: "Confirm Password",
                rules: ['required', passwordMatchRule],
                type: "password"
              }, null, 8, ["modelValue", "disabled", "rules"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(RockButton), {
                btnType: unref(BtnType).Primary,
                disabled: __props.disabled,
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_4]),
                _: 1
              }, 8, ["btnType", "disabled"])])]),
              _: 1
            })]);
          };
        }
      });

      script$3.__file = "src/Security/ConfirmAccount/changePassword.partial.obs";

      var script$2 = defineComponent({
        name: 'confirmAccountAlert.partial',
        props: {
          alert: {
            type: Object,
            default: null,
            required: false
          }
        },
        setup(__props) {
          var props = __props;
          function getAlertType() {
            var _props$alert, _AlertType$toTitleCas;
            if (!((_props$alert = props.alert) !== null && _props$alert !== void 0 && _props$alert.type)) {
              return AlertType.Default;
            }
            return (_AlertType$toTitleCas = AlertType[toTitleCase(props.alert.type)]) !== null && _AlertType$toTitleCas !== void 0 ? _AlertType$toTitleCas : AlertType.Default;
          }
          return (_ctx, _cache) => {
            return __props.alert ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [__props.alert.isHtml ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: getAlertType(),
              innerHTML: __props.alert.content
            }, null, 8, ["alertType", "innerHTML"])) : (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: getAlertType()
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.alert.content), 1)]),
              _: 1
            }, 8, ["alertType"]))], 64)) : createCommentVNode("v-if", true);
          };
        }
      });

      script$2.__file = "src/Security/ConfirmAccount/confirmAccountAlert.partial.obs";

      var _hoisted_1$1 = ["innerHTML"];
      var _hoisted_2 = {
        class: "actions"
      };
      var _hoisted_3 = createTextVNode("Yes, Delete the Account");
      var script$1 = defineComponent({
        name: 'deleteConfirmation.partial',
        props: {
          options: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false,
            required: false
          }
        },
        emits: ["deleteAccount"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          function onDeleteAccountSubmitted() {
            emit("deleteAccount", {
              code: props.options.code || ""
            });
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [createElementVNode("div", {
              innerHTML: __props.options.viewCaption
            }, null, 8, _hoisted_1$1), createVNode(unref(RockForm), {
              onSubmit: onDeleteAccountSubmitted
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_2, [createVNode(unref(RockButton), {
                btnType: unref(BtnType).Primary,
                disabled: __props.disabled,
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_3]),
                _: 1
              }, 8, ["btnType", "disabled"])])]),
              _: 1
            })]);
          };
        }
      });

      script$1.__file = "src/Security/ConfirmAccount/deleteConfirmation.partial.obs";

      var _hoisted_1 = ["innerHTML"];
      var script = exports('default', defineComponent({
        name: 'confirmAccount',
        setup(__props) {
          var _config$view;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var isProcessing = ref(false);
          var viewBox = ref((_config$view = config.view) !== null && _config$view !== void 0 ? _config$view : getDefaultViewBox());
          var code = ref("");
          var view = computed(() => getView(viewBox.value));
          function onChangePassword(_ref) {
            var code = _ref.code,
              password = _ref.password;
            return processBlockActionAndUpdateView(() => {
              var _config$actionNames;
              return invokeConfirmAccountBlockAction((_config$actionNames = config.actionNames) === null || _config$actionNames === void 0 ? void 0 : _config$actionNames.changePassword, {
                code,
                password
              });
            });
          }
          function onConfirmAccount(_ref2) {
            var code = _ref2.code;
            return processBlockActionAndUpdateView(_asyncToGenerator(function* () {
              var _config$actionNames2;
              clearErrors();
              return yield invokeConfirmAccountBlockAction((_config$actionNames2 = config.actionNames) === null || _config$actionNames2 === void 0 ? void 0 : _config$actionNames2.confirmAccount, {
                code
              });
            }));
          }
          function onDeleteAccount(_ref4) {
            var code = _ref4.code;
            return processBlockActionAndUpdateView(() => {
              var _config$actionNames3;
              return invokeConfirmAccountBlockAction((_config$actionNames3 = config.actionNames) === null || _config$actionNames3 === void 0 ? void 0 : _config$actionNames3.deleteAccount, {
                code
              });
            });
          }
          function onShowChangePasswordView(_ref5) {
            var code = _ref5.code;
            return processBlockActionAndUpdateView(_asyncToGenerator(function* () {
              var _config$actionNames4;
              clearErrors();
              return yield invokeConfirmAccountBlockAction((_config$actionNames4 = config.actionNames) === null || _config$actionNames4 === void 0 ? void 0 : _config$actionNames4.showChangePasswordView, {
                code
              });
            }));
          }
          function onShowDeleteConfirmationView(_ref7) {
            var code = _ref7.code;
            return processBlockActionAndUpdateView(_asyncToGenerator(function* () {
              var _config$actionNames5;
              clearErrors();
              return yield invokeConfirmAccountBlockAction((_config$actionNames5 = config.actionNames) === null || _config$actionNames5 === void 0 ? void 0 : _config$actionNames5.showDeleteConfirmationView, {
                code
              });
            }));
          }
          function clearErrors() {
            if (view.value.type === ConfirmAccountViewType.AccountConfirmation) {
              view.value.options.errorCaption = null;
            }
          }
          function getDefaultView() {
            return {
              type: ConfirmAccountViewType.AccountConfirmation,
              options: {
                errorCaption: null
              }
            };
          }
          function getDefaultViewBox(errorCaption) {
            return {
              viewType: ConfirmAccountViewType.AccountConfirmation,
              accountConfirmationViewOptions: {
                errorCaption
              }
            };
          }
          function getView(viewBox) {
            if (viewBox.viewType === ConfirmAccountViewType.AccountConfirmation) {
              var _viewBox$accountConfi;
              return {
                type: viewBox.viewType,
                options: (_viewBox$accountConfi = viewBox.accountConfirmationViewOptions) !== null && _viewBox$accountConfi !== void 0 ? _viewBox$accountConfi : {}
              };
            } else if (viewBox.viewType === ConfirmAccountViewType.Alert) {
              var _viewBox$alertViewOpt;
              return {
                type: viewBox.viewType,
                options: (_viewBox$alertViewOpt = viewBox.alertViewOptions) !== null && _viewBox$alertViewOpt !== void 0 ? _viewBox$alertViewOpt : {}
              };
            } else if (viewBox.viewType === ConfirmAccountViewType.DeleteConfirmation) {
              var _viewBox$deleteConfir;
              return {
                type: viewBox.viewType,
                options: (_viewBox$deleteConfir = viewBox.deleteConfirmationViewOptions) !== null && _viewBox$deleteConfir !== void 0 ? _viewBox$deleteConfir : {}
              };
            } else if (viewBox.viewType === ConfirmAccountViewType.ChangePassword) {
              var _viewBox$changePasswo;
              return {
                type: viewBox.viewType,
                options: (_viewBox$changePasswo = viewBox.changePasswordViewOptions) !== null && _viewBox$changePasswo !== void 0 ? _viewBox$changePasswo : {}
              };
            } else if (viewBox.viewType === ConfirmAccountViewType.Content) {
              var _viewBox$contentViewO;
              return {
                type: viewBox.viewType,
                options: (_viewBox$contentViewO = viewBox.contentViewOptions) !== null && _viewBox$contentViewO !== void 0 ? _viewBox$contentViewO : {}
              };
            } else {
              console.error("Returning default view as \"".concat(ConfirmAccountViewTypeDescription[viewBox.viewType], "\" is unknown."));
              return getDefaultView();
            }
          }
          function invokeConfirmAccountBlockAction(actionName, bag) {
            if (!actionName) {
              throw "The action name is not configured properly.";
            }
            return invokeBlockAction(actionName, {
              bag
            });
          }
          function processBlockActionAndUpdateView(_x) {
            return _processBlockActionAndUpdateView.apply(this, arguments);
          }
          function _processBlockActionAndUpdateView() {
            _processBlockActionAndUpdateView = _asyncToGenerator(function* (processRequest) {
              try {
                isProcessing.value = true;
                var result = yield processRequest();
                if (result.isSuccess && result.data) {
                  viewBox.value = result.data;
                } else {
                  var fallbackViewBox = getDefaultViewBox(result.errorMessage || "An unexpected error occurred. Please try your request again.");
                  viewBox.value = fallbackViewBox;
                }
              } finally {
                isProcessing.value = false;
              }
            });
            return _processBlockActionAndUpdateView.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return unref(view).type === unref(ConfirmAccountViewType).AccountConfirmation ? (openBlock(), createBlock(unref(script$4), {
              key: 0,
              code: code.value,
              "onUpdate:code": _cache[0] || (_cache[0] = $event => code.value = $event),
              disabled: isProcessing.value,
              options: unref(view).options,
              onConfirmAccount: onConfirmAccount,
              onShowChangePasswordView: onShowChangePasswordView,
              onShowDeleteConfirmationView: onShowDeleteConfirmationView
            }, null, 8, ["code", "disabled", "options"])) : unref(view).type === unref(ConfirmAccountViewType).ChangePassword ? (openBlock(), createBlock(unref(script$3), {
              key: 1,
              disabled: isProcessing.value,
              options: unref(view).options,
              onChangePassword: onChangePassword
            }, null, 8, ["disabled", "options"])) : unref(view).type === unref(ConfirmAccountViewType).DeleteConfirmation ? (openBlock(), createBlock(unref(script$1), {
              key: 2,
              disabled: isProcessing.value,
              options: unref(view).options,
              onDeleteAccount: onDeleteAccount
            }, null, 8, ["disabled", "options"])) : unref(view).type === unref(ConfirmAccountViewType).Alert ? (openBlock(), createBlock(unref(script$2), {
              key: 3,
              alert: unref(view).options.alert
            }, null, 8, ["alert"])) : unref(view).type === unref(ConfirmAccountViewType).Content ? (openBlock(), createElementBlock("div", {
              key: 4,
              innerHTML: unref(view).options.content
            }, null, 8, _hoisted_1)) : createCommentVNode("v-if", true);
          };
        }
      }));

      script.__file = "src/Security/confirmAccount.obs";

    })
  };
}));
//# sourceMappingURL=confirmAccount.obs.js.map
