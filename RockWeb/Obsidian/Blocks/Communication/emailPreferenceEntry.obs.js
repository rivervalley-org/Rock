System.register(['vue', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/transitionVerticalCollapse.obs', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/switch.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, watch, openBlock, createBlock, unref, withCtx, createElementBlock, Fragment, toDisplayString, createVNode, createCommentVNode, withDirectives, vModelRadio, Panel, TransitionVerticalCollapse, EmailBox, DropDownList, Switch, TextBox, RockLabel, RockButton, NotificationBox, CheckBoxList, BtnType, BtnSize, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      toDisplayString = module.toDisplayString;
      createVNode = module.createVNode;
      createCommentVNode = module.createCommentVNode;
      withDirectives = module.withDirectives;
      vModelRadio = module.vModelRadio;
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Switch = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
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

      var _hoisted_1 = createElementVNode("h2", null, "Unsubscribe Successful", -1);
      var _hoisted_2 = createTextVNode("Other Actions");
      var _hoisted_3 = {
        key: 2,
        class: "radio"
      };
      var _hoisted_4 = {
        class: "label-text"
      };
      var _hoisted_5 = {
        key: 3,
        class: "radio"
      };
      var _hoisted_6 = {
        class: "label-text"
      };
      var _hoisted_7 = {
        class: "radio"
      };
      var _hoisted_8 = {
        class: "label-text"
      };
      var _hoisted_9 = {
        key: 0,
        class: "margin-l-lg margin-t-sm"
      };
      var _hoisted_10 = {
        class: "radio"
      };
      var _hoisted_11 = {
        class: "label-text"
      };
      var _hoisted_12 = {
        key: 0
      };
      var _hoisted_13 = {
        key: 6,
        class: "radio"
      };
      var _hoisted_14 = {
        class: "label-text"
      };
      var _hoisted_15 = {
        class: "radio"
      };
      var _hoisted_16 = {
        class: "label-text"
      };
      var _hoisted_17 = {
        key: 0,
        class: "row"
      };
      var _hoisted_18 = {
        class: "col-md-6"
      };
      var _hoisted_19 = {
        key: 0
      };
      var _hoisted_20 = createTextVNode("Inactivate all individuals in my family");
      var _hoisted_21 = createTextVNode(" Submit ");
      var _hoisted_22 = {
        class: "mt-4"
      };
      var script = exports('default', defineComponent({
        name: 'emailPreferenceEntry',
        setup(__props) {
          var _config$emailPreferen, _config$email, _config$inActiveReaso, _config$unsubscribeFr, _config$unsubscribeTe, _config$updateEmailAd, _config$emailsAllowed, _config$noMassEmailsT, _config$noEmailsText, _config$notInvolvedTe;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var unsubscribe = "Unsubscribe";
          var updateEmailAddress = "Update Email Address";
          var emailsAllowed = "Emails Allowed";
          var noMassEmails = "No Mass Emails";
          var noEmails = "No Emails";
          var notInvolved = "Not Involved";
          var isSaving = ref(false);
          var inactivateAllFamily = ref(false);
          var submitForm = ref(false);
          var allowInactivatingFamily = ref(config.allowInactivatingFamily);
          var emailPreferenceUpdateAlertType = ref((_config$emailPreferen = config.emailPreferenceUpdateAlertType) !== null && _config$emailPreferen !== void 0 ? _config$emailPreferen : "success");
          var hideSubmitButton = ref(emailPreferenceUpdateAlertType.value == "danger");
          var emailPreference = ref(config.emailPreference);
          var email = ref((_config$email = config.email) !== null && _config$email !== void 0 ? _config$email : "");
          var inactiveReasons = ref((_config$inActiveReaso = config.inActiveReasons) !== null && _config$inActiveReaso !== void 0 ? _config$inActiveReaso : []);
          var unsubscribeFromListOptions = ref((_config$unsubscribeFr = config.unsubscribeFromListOptions) !== null && _config$unsubscribeFr !== void 0 ? _config$unsubscribeFr : []);
          var unsubscribeFromList = ref([]);
          var unsubscribeText = ref((_config$unsubscribeTe = config.unsubscribeText) !== null && _config$unsubscribeTe !== void 0 ? _config$unsubscribeTe : "");
          var updateEmailAddressText = ref((_config$updateEmailAd = config.updateEmailAddressText) !== null && _config$updateEmailAd !== void 0 ? _config$updateEmailAd : "");
          var emailsAllowedText = ref((_config$emailsAllowed = config.emailsAllowedText) !== null && _config$emailsAllowed !== void 0 ? _config$emailsAllowed : "");
          var noMassEmailsText = ref((_config$noMassEmailsT = config.noMassEmailsText) !== null && _config$noMassEmailsT !== void 0 ? _config$noMassEmailsT : "");
          var noEmailsText = ref((_config$noEmailsText = config.noEmailsText) !== null && _config$noEmailsText !== void 0 ? _config$noEmailsText : "");
          var notInvolvedText = ref((_config$notInvolvedTe = config.notInvolvedText) !== null && _config$notInvolvedTe !== void 0 ? _config$notInvolvedTe : "");
          var emailPreferenceUpdateMessage = ref(config.emailPreferenceUpdateMessage);
          var inactiveReason = ref("");
          var inactiveNote = ref("");
          var errorMessage = ref("");
          var showUnsubscribeList = ref(config.emailPreference === unsubscribe);
          var showUpdateEmailInput = ref(config.emailPreference === updateEmailAddress);
          var showNotInvolvedDetails = ref(config.emailPreference === notInvolved);
          var onStartSubmitForm = () => {
            errorMessage.value = "";
            if (emailPreference.value === updateEmailAddress) {
              if (!email.value) {
                errorMessage.value = "Email is required.";
              } else {
                submitForm.value = true;
              }
            } else {
              submitForm.value = true;
            }
          };
          watch(() => submitForm.value, _asyncToGenerator(function* () {
            if (submitForm.value === true) {
              try {
                isSaving.value = true;
                var bag = {
                  email: email.value,
                  inActivateFamily: inactivateAllFamily.value,
                  emailPreference: emailPreference.value,
                  inaActiveReason: inactiveReason.value,
                  inActiveReasonNote: inactiveNote.value,
                  unsubscribeFromList: unsubscribeFromList.value
                };
                var result = yield invokeBlockAction("Save", {
                  bag
                });
                if (!result.isSuccess || !result.data) {
                  errorMessage.value = result.errorMessage || "An unexpected error occurred.";
                } else if (result.data.errorMessage) {
                  var _result$data$alertTyp;
                  emailPreferenceUpdateMessage.value = result.data.errorMessage;
                  emailPreferenceUpdateAlertType.value = (_result$data$alertTyp = result.data.alertType) !== null && _result$data$alertTyp !== void 0 ? _result$data$alertTyp : "danger";
                } else {
                  var _result$data$alertTyp2;
                  emailPreferenceUpdateMessage.value = result.data.successMessage;
                  emailPreferenceUpdateAlertType.value = (_result$data$alertTyp2 = result.data.alertType) !== null && _result$data$alertTyp2 !== void 0 ? _result$data$alertTyp2 : "success";
                }
              } finally {
                isSaving.value = false;
                submitForm.value = false;
              }
            }
          }));
          watch(() => emailPreference.value, () => {
            showUpdateEmailInput.value = emailPreference.value == updateEmailAddress;
            showNotInvolvedDetails.value = emailPreference.value == notInvolved;
            showUnsubscribeList.value = emailPreference.value == unsubscribe;
          });
          onConfigurationValuesChanged(useReloadBlock());
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Panel), {
              title: "Email Preference",
              type: "block"
            }, {
              default: withCtx(() => [createElementVNode("fieldset", null, [unref(config).successfullyUnsubscribedText ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [_hoisted_1, createElementVNode("p", null, toDisplayString(unref(config).successfullyUnsubscribedText), 1), createVNode(unref(RockLabel), null, {
                default: withCtx(() => [_hoisted_2]),
                _: 1
              })], 64)) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 1,
                alertType: "danger",
                innerHTML: errorMessage.value
              }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), noMassEmailsText.value ? (openBlock(), createElementBlock("div", _hoisted_3, [createElementVNode("label", {
                for: noMassEmails
              }, [withDirectives(createElementVNode("input", {
                id: noMassEmails,
                name: noMassEmails,
                type: "radio",
                value: noMassEmails,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => emailPreference.value = $event)
              }, null, 512), [[vModelRadio, emailPreference.value]]), createElementVNode("span", _hoisted_4, toDisplayString(noMassEmailsText.value), 1)])])) : createCommentVNode("v-if", true), emailsAllowedText.value ? (openBlock(), createElementBlock("div", _hoisted_5, [createElementVNode("label", {
                for: emailsAllowed
              }, [withDirectives(createElementVNode("input", {
                id: emailsAllowed,
                name: emailsAllowed,
                type: "radio",
                value: emailsAllowed,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => emailPreference.value = $event)
              }, null, 512), [[vModelRadio, emailPreference.value]]), createElementVNode("span", _hoisted_6, toDisplayString(emailsAllowedText.value), 1)])])) : createCommentVNode("v-if", true), unsubscribeFromListOptions.value.length > 0 ? (openBlock(), createElementBlock(Fragment, {
                key: 4
              }, [createElementVNode("div", _hoisted_7, [createElementVNode("label", {
                for: unsubscribe
              }, [withDirectives(createElementVNode("input", {
                id: unsubscribe,
                name: unsubscribe,
                type: "radio",
                value: unsubscribe,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => emailPreference.value = $event)
              }, null, 512), [[vModelRadio, emailPreference.value]]), createElementVNode("span", _hoisted_8, toDisplayString(unsubscribeText.value), 1)])]), createVNode(unref(TransitionVerticalCollapse), null, {
                default: withCtx(() => [showUnsubscribeList.value ? (openBlock(), createElementBlock("div", _hoisted_9, [createVNode(unref(CheckBoxList), {
                  modelValue: unsubscribeFromList.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => unsubscribeFromList.value = $event),
                  items: unsubscribeFromListOptions.value,
                  horizontal: false
                }, null, 8, ["modelValue", "items"])])) : createCommentVNode("v-if", true)]),
                _: 1
              })], 64)) : createCommentVNode("v-if", true), updateEmailAddressText.value ? (openBlock(), createElementBlock(Fragment, {
                key: 5
              }, [createElementVNode("div", _hoisted_10, [createElementVNode("label", {
                for: updateEmailAddress
              }, [withDirectives(createElementVNode("input", {
                id: updateEmailAddress,
                name: updateEmailAddress,
                type: "radio",
                value: updateEmailAddress,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => emailPreference.value = $event)
              }, null, 512), [[vModelRadio, emailPreference.value]]), createElementVNode("span", _hoisted_11, toDisplayString(updateEmailAddressText.value), 1)])]), createVNode(unref(TransitionVerticalCollapse), null, {
                default: withCtx(() => [showUpdateEmailInput.value ? (openBlock(), createElementBlock("div", _hoisted_12, [createVNode(unref(EmailBox), {
                  label: "Email",
                  modelValue: email.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => email.value = $event),
                  class: "input-width-xxl"
                }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true)]),
                _: 1
              })], 64)) : createCommentVNode("v-if", true), noEmailsText.value ? (openBlock(), createElementBlock("div", _hoisted_13, [createElementVNode("label", {
                for: noEmails
              }, [withDirectives(createElementVNode("input", {
                id: noEmails,
                name: noEmails,
                type: "radio",
                value: noEmails,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => emailPreference.value = $event)
              }, null, 512), [[vModelRadio, emailPreference.value]]), createElementVNode("span", _hoisted_14, toDisplayString(noEmailsText.value), 1)])])) : createCommentVNode("v-if", true), notInvolvedText.value ? (openBlock(), createElementBlock(Fragment, {
                key: 7
              }, [createElementVNode("div", _hoisted_15, [createElementVNode("label", {
                for: notInvolved
              }, [withDirectives(createElementVNode("input", {
                id: notInvolved,
                name: notInvolved,
                type: "radio",
                value: notInvolved,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => emailPreference.value = $event)
              }, null, 512), [[vModelRadio, emailPreference.value]]), createElementVNode("span", _hoisted_16, toDisplayString(notInvolvedText.value), 1)])]), createVNode(unref(TransitionVerticalCollapse), null, {
                default: withCtx(() => [notInvolvedText.value && showNotInvolvedDetails.value ? (openBlock(), createElementBlock("div", _hoisted_17, [createElementVNode("div", _hoisted_18, [createVNode(unref(DropDownList), {
                  label: "Reason",
                  modelValue: inactiveReason.value,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => inactiveReason.value = $event),
                  items: inactiveReasons.value,
                  showBlankItem: false
                }, null, 8, ["modelValue", "items"]), allowInactivatingFamily.value ? (openBlock(), createElementBlock("div", _hoisted_19, [createVNode(unref(RockLabel), null, {
                  default: withCtx(() => [_hoisted_20]),
                  _: 1
                }), createVNode(unref(Switch), {
                  modelValue: inactivateAllFamily.value,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => inactivateAllFamily.value = $event)
                }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true), createVNode(unref(TextBox), {
                  label: "More Info (optional)",
                  modelValue: inactiveNote.value,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => inactiveNote.value = $event),
                  textMode: "MultiLine",
                  rows: 5,
                  maxLength: 100
                }, null, 8, ["modelValue"])])])) : createCommentVNode("v-if", true)]),
                _: 1
              })], 64)) : createCommentVNode("v-if", true)]), !hideSubmitButton.value ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                btnSize: unref(BtnSize).Default,
                btnType: unref(BtnType).Primary,
                disabled: isSaving.value,
                onClick: onStartSubmitForm
              }, {
                default: withCtx(() => [_hoisted_21]),
                _: 1
              }, 8, ["btnSize", "btnType", "disabled"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_22, [emailPreferenceUpdateMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: emailPreferenceUpdateAlertType.value,
                innerHTML: emailPreferenceUpdateMessage.value
              }, null, 8, ["alertType", "innerHTML"])) : createCommentVNode("v-if", true)])]),
              _: 1
            });
          };
        }
      }));

      script.__file = "src/Communication/emailPreferenceEntry.obs";

    })
  };
}));
//# sourceMappingURL=emailPreferenceEntry.obs.js.map
