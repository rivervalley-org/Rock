System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/addressControl.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/block', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Controls/panel.obs', '@Obsidian/Utility/url'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, unref, createBlock, withCtx, createCommentVNode, createElementVNode, createVNode, createSlots, toDisplayString, NotificationBox, TextBox, PhoneNumberBox, AddressControl, CheckBox, EmailBox, updateRefValue, useConfigurationValues, useInvokeBlockAction, RockButton, BtnType, BtnSize, Panel, makeUrlRedirectSafe;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      unref = module.unref;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      createSlots = module.createSlots;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      PhoneNumberBox = module["default"];
    }, function (module) {
      AddressControl = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      makeUrlRedirectSafe = module.makeUrlRedirectSafe;
    }],
    execute: (function () {

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
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
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }

      var _hoisted_1$1 = createTextVNode("This group is near its capacity. Only one individual can register.");
      var _hoisted_2$1 = ["innerHTML"];
      var _hoisted_3 = {
        key: 1
      };
      var _hoisted_4 = {
        class: "row"
      };
      var _hoisted_5 = {
        class: "col-md-6"
      };
      var _hoisted_6 = {
        class: "col-md-6"
      };
      var _hoisted_7 = {
        key: 2
      };
      var script$1 = defineComponent({
        name: 'editPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          options: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$fir, _props$modelValue$las, _props$modelValue$ema, _props$modelValue$hom, _props$modelValue$mob, _props$options$phoneL, _props$modelValue$add, _props$modelValue$spo, _props$modelValue$spo2, _props$modelValue$spo3, _props$modelValue$spo4, _props$options$lavaOv;
          var emit = _ref.emit;
          var props = __props;
          var firstName = ref((_props$modelValue$fir = props.modelValue.firstName) !== null && _props$modelValue$fir !== void 0 ? _props$modelValue$fir : "");
          var lastName = ref((_props$modelValue$las = props.modelValue.lastName) !== null && _props$modelValue$las !== void 0 ? _props$modelValue$las : "");
          var email = ref((_props$modelValue$ema = props.modelValue.email) !== null && _props$modelValue$ema !== void 0 ? _props$modelValue$ema : "");
          var homePhone = ref((_props$modelValue$hom = props.modelValue.homePhone) !== null && _props$modelValue$hom !== void 0 ? _props$modelValue$hom : "");
          var mobilePhone = ref((_props$modelValue$mob = props.modelValue.mobilePhone) !== null && _props$modelValue$mob !== void 0 ? _props$modelValue$mob : "");
          var mobilePhoneLabel = ref((_props$options$phoneL = props.options.phoneLabel) !== null && _props$options$phoneL !== void 0 ? _props$options$phoneL : "");
          var isMessagingEnabled = ref(props.modelValue.isMessagingEnabled);
          var address = ref((_props$modelValue$add = props.modelValue.address) !== null && _props$modelValue$add !== void 0 ? _props$modelValue$add : {});
          var spouseFirstName = ref((_props$modelValue$spo = props.modelValue.spouseFirstName) !== null && _props$modelValue$spo !== void 0 ? _props$modelValue$spo : "");
          var spouseLastName = ref((_props$modelValue$spo2 = props.modelValue.spouseLastName) !== null && _props$modelValue$spo2 !== void 0 ? _props$modelValue$spo2 : "");
          var spouseMobilePhone = ref((_props$modelValue$spo3 = props.modelValue.spouseMobilePhone) !== null && _props$modelValue$spo3 !== void 0 ? _props$modelValue$spo3 : "");
          var spouseIsMessagingEnabled = ref(props.modelValue.spouseIsMessagingEnabled);
          var spouseEmail = ref((_props$modelValue$spo4 = props.modelValue.spouseEmail) !== null && _props$modelValue$spo4 !== void 0 ? _props$modelValue$spo4 : "");
          var lavaOverview = ref((_props$options$lavaOv = props.options.lavaOverview) !== null && _props$options$lavaOv !== void 0 ? _props$options$lavaOv : "");
          var spouseMobilePhoneLabel = computed(() => "Spouse ".concat(mobilePhoneLabel.value));
          var isFullMode = computed(() => props.options.mode === "Full");
          var isFullWithSpouse = computed(() => props.options.mode === "FullSpouse");
          var isAtNearCapacity = computed(() => props.options.openSpots === 1);
          var emailValidationRule = computed(() => props.options.isEmailRequired ? "required" : "");
          var mobilePhoneValidationRule = computed(() => props.options.isMobilePhoneRequired ? "required" : "");
          watch(() => props.modelValue, () => {
            var _props$modelValue$fir2, _props$modelValue$las2, _props$modelValue$hom2, _props$modelValue$mob2, _props$modelValue$ema2, _props$modelValue$add2, _props$modelValue$spo5, _props$modelValue$spo6, _props$modelValue$spo7, _props$modelValue$spo8, _props$options$lavaOv2;
            updateRefValue(firstName, (_props$modelValue$fir2 = props.modelValue.firstName) !== null && _props$modelValue$fir2 !== void 0 ? _props$modelValue$fir2 : "");
            updateRefValue(lastName, (_props$modelValue$las2 = props.modelValue.lastName) !== null && _props$modelValue$las2 !== void 0 ? _props$modelValue$las2 : "");
            updateRefValue(homePhone, (_props$modelValue$hom2 = props.modelValue.homePhone) !== null && _props$modelValue$hom2 !== void 0 ? _props$modelValue$hom2 : "");
            updateRefValue(mobilePhone, (_props$modelValue$mob2 = props.modelValue.mobilePhone) !== null && _props$modelValue$mob2 !== void 0 ? _props$modelValue$mob2 : "");
            updateRefValue(isMessagingEnabled, props.modelValue.isMessagingEnabled);
            updateRefValue(email, (_props$modelValue$ema2 = props.modelValue.email) !== null && _props$modelValue$ema2 !== void 0 ? _props$modelValue$ema2 : "");
            updateRefValue(address, (_props$modelValue$add2 = props.modelValue.address) !== null && _props$modelValue$add2 !== void 0 ? _props$modelValue$add2 : {});
            updateRefValue(spouseFirstName, (_props$modelValue$spo5 = props.modelValue.spouseFirstName) !== null && _props$modelValue$spo5 !== void 0 ? _props$modelValue$spo5 : "");
            updateRefValue(spouseLastName, (_props$modelValue$spo6 = props.modelValue.spouseLastName) !== null && _props$modelValue$spo6 !== void 0 ? _props$modelValue$spo6 : "");
            updateRefValue(spouseMobilePhone, (_props$modelValue$spo7 = props.modelValue.spouseMobilePhone) !== null && _props$modelValue$spo7 !== void 0 ? _props$modelValue$spo7 : "");
            updateRefValue(spouseIsMessagingEnabled, props.modelValue.spouseIsMessagingEnabled);
            updateRefValue(spouseEmail, (_props$modelValue$spo8 = props.modelValue.spouseEmail) !== null && _props$modelValue$spo8 !== void 0 ? _props$modelValue$spo8 : "");
            updateRefValue(lavaOverview, (_props$options$lavaOv2 = props.options.lavaOverview) !== null && _props$options$lavaOv2 !== void 0 ? _props$options$lavaOv2 : "");
          });
          watch([firstName, lastName, homePhone, mobilePhone, isMessagingEnabled, email, address, spouseFirstName, spouseLastName, spouseMobilePhone, spouseIsMessagingEnabled, spouseEmail], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              firstName: firstName.value,
              lastName: lastName.value,
              homePhone: homePhone.value,
              mobilePhone: mobilePhone.value,
              isMessagingEnabled: isMessagingEnabled.value,
              email: email.value,
              address: address.value,
              spouseFirstName: spouseFirstName.value,
              spouseLastName: spouseLastName.value,
              spouseMobilePhone: spouseMobilePhone.value,
              spouseIsMessagingEnabled: spouseIsMessagingEnabled.value,
              spouseEmail: spouseEmail.value
            });
            emit("update:modelValue", newValue);
          });
          return (_ctx, _cache) => {
            var _props$options$smsOp, _props$options$smsOp2, _props$options$smsOp3;
            return openBlock(), createElementBlock("fieldset", null, [unref(isAtNearCapacity) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              dismissable: false,
              alertType: "warning"
            }, {
              default: withCtx(() => [_hoisted_1$1]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("div", {
              innerHTML: lavaOverview.value
            }, null, 8, _hoisted_2$1), unref(isFullWithSpouse) ? (openBlock(), createElementBlock("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(TextBox), {
              modelValue: firstName.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => firstName.value = $event),
              label: "First Name",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: lastName.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => lastName.value = $event),
              label: "Last Name",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(PhoneNumberBox), {
              label: mobilePhoneLabel.value,
              modelValue: mobilePhone.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => mobilePhone.value = $event),
              rules: unref(mobilePhoneValidationRule)
            }, null, 8, ["label", "modelValue", "rules"]), __props.options.smsIsShowFirstAdult ? (openBlock(), createBlock(unref(CheckBox), {
              key: 0,
              label: "",
              modelValue: isMessagingEnabled.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isMessagingEnabled.value = $event),
              text: (_props$options$smsOp = __props.options.smsOptInDisplayText) !== null && _props$options$smsOp !== void 0 ? _props$options$smsOp : ''
            }, null, 8, ["modelValue", "text"])) : createCommentVNode("v-if", true), createVNode(unref(EmailBox), {
              label: "Email",
              modelValue: email.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => email.value = $event),
              rules: unref(emailValidationRule)
            }, null, 8, ["modelValue", "rules"]), createVNode(unref(PhoneNumberBox), {
              label: "Home Phone",
              modelValue: homePhone.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => homePhone.value = $event)
            }, null, 8, ["modelValue"]), createVNode(unref(AddressControl), {
              label: "Address",
              modelValue: address.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => address.value = $event)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(TextBox), {
              modelValue: spouseFirstName.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => spouseFirstName.value = $event),
              disabled: unref(isAtNearCapacity),
              label: "Spouse First Name"
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(TextBox), {
              modelValue: spouseLastName.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => spouseLastName.value = $event),
              disabled: unref(isAtNearCapacity),
              label: "Spouse Last Name"
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(PhoneNumberBox), {
              label: unref(spouseMobilePhoneLabel),
              disabled: unref(isAtNearCapacity),
              modelValue: spouseMobilePhone.value,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => spouseMobilePhone.value = $event)
            }, null, 8, ["label", "disabled", "modelValue"]), __props.options.smsIsShowAllAdults ? (openBlock(), createBlock(unref(CheckBox), {
              key: 0,
              label: "",
              disabled: unref(isAtNearCapacity),
              modelValue: spouseIsMessagingEnabled.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => spouseIsMessagingEnabled.value = $event),
              text: (_props$options$smsOp2 = __props.options.smsOptInDisplayText) !== null && _props$options$smsOp2 !== void 0 ? _props$options$smsOp2 : ''
            }, null, 8, ["disabled", "modelValue", "text"])) : createCommentVNode("v-if", true), createVNode(unref(EmailBox), {
              label: "Spouse Email",
              disabled: unref(isAtNearCapacity),
              modelValue: spouseEmail.value,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => spouseEmail.value = $event)
            }, null, 8, ["disabled", "modelValue"])])])])) : (openBlock(), createElementBlock("div", _hoisted_7, [createVNode(unref(TextBox), {
              modelValue: firstName.value,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => firstName.value = $event),
              label: "First Name",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: lastName.value,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => lastName.value = $event),
              label: "Last Name",
              rules: "required"
            }, null, 8, ["modelValue"]), unref(isFullMode) ? (openBlock(), createBlock(unref(PhoneNumberBox), {
              key: 0,
              label: mobilePhoneLabel.value,
              modelValue: mobilePhone.value,
              "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => mobilePhone.value = $event),
              rules: unref(mobilePhoneValidationRule)
            }, null, 8, ["label", "modelValue", "rules"])) : createCommentVNode("v-if", true), unref(isFullMode) && !__props.options.smsIsHidden ? (openBlock(), createBlock(unref(CheckBox), {
              key: 1,
              label: "",
              modelValue: isMessagingEnabled.value,
              "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => isMessagingEnabled.value = $event),
              text: (_props$options$smsOp3 = __props.options.smsOptInDisplayText) !== null && _props$options$smsOp3 !== void 0 ? _props$options$smsOp3 : ''
            }, null, 8, ["modelValue", "text"])) : createCommentVNode("v-if", true), createVNode(unref(EmailBox), {
              label: "Email",
              modelValue: email.value,
              "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => email.value = $event),
              rules: unref(emailValidationRule)
            }, null, 8, ["modelValue", "rules"]), unref(isFullMode) ? (openBlock(), createBlock(unref(PhoneNumberBox), {
              key: 2,
              label: "Home Phone",
              modelValue: homePhone.value,
              "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => homePhone.value = $event)
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), unref(isFullMode) ? (openBlock(), createBlock(unref(AddressControl), {
              key: 3,
              label: "Address",
              modelValue: address.value,
              "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => address.value = $event)
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)]))]);
          };
        }
      });

      script$1.__file = "src/Group/GroupRegistration/editPanel.partial.obs";

      var _hoisted_1 = {
        key: 2
      };
      var _hoisted_2 = ["innerHTML"];
      var script = exports('default', defineComponent({
        name: 'groupRegistration',
        setup(__props) {
          var _config$registerButto;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var blockError = ref("");
          var errorMessage = ref("");
          var groupRegistrationBag = ref({
            isMessagingEnabled: false,
            spouseIsMessagingEnabled: false
          });
          var resultLavaTemplate = ref("");
          var buttonText = ref((_config$registerButto = config.registerButtonAltText) !== null && _config$registerButto !== void 0 ? _config$registerButto : "Register");
          var isRegistering = ref(false);
          computed(() => {
            return "Group Registration";
          });
          var options = computed(() => {
            return config !== null && config !== void 0 ? config : {
              autoFill: true,
              isEmailRequired: true,
              isMobilePhoneRequired: false,
              openSpots: 2
            };
          });
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              errorMessage.value = "";
              isRegistering.value = true;
              var result = yield invokeBlockAction("Save", {
                groupRegistrationBag: groupRegistrationBag.value
              });
              isRegistering.value = false;
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "string") {
                  resultLavaTemplate.value = result.data;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  window.location.href = makeUrlRedirectSafe(result.data);
                }
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to save group.";
              }
            });
            return _onSave.apply(this, arguments);
          }
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified group could not be viewed.";
          } else {
            groupRegistrationBag.value = config.entity;
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Panel), {
              type: "block"
            }, createSlots({
              default: withCtx(() => [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: "warning"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(blockError.value), 1)]),
                _: 1
              })) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 1,
                alertType: "danger"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
                _: 1
              })) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createElementBlock("div", _hoisted_1, [resultLavaTemplate.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                innerHTML: resultLavaTemplate.value
              }, null, 8, _hoisted_2)) : (openBlock(), createBlock(unref(script$1), {
                key: 1,
                modelValue: groupRegistrationBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => groupRegistrationBag.value = $event),
                options: unref(options)
              }, null, 8, ["modelValue", "options"]))])) : createCommentVNode("v-if", true)]),
              _: 2
            }, [!resultLavaTemplate.value && !blockError.value ? {
              name: "footerActions",
              fn: withCtx(() => [createVNode(unref(RockButton), {
                btnSize: unref(BtnSize).Default,
                btnType: unref(BtnType).Primary,
                disabled: isRegistering.value,
                onClick: onSave
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(buttonText.value), 1)]),
                _: 1
              }, 8, ["btnSize", "btnType", "disabled"])])
            } : undefined]), 1024);
          };
        }
      }));

      script.__file = "src/Group/groupRegistration.obs";

    })
  };
}));
//# sourceMappingURL=groupRegistration.obs.js.map
