System.register(['vue', './divider.obs', '@Obsidian/Controls/inlineCheckBox', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/textBox', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Blocks/Security/Login/loginMethod', '@Obsidian/Controls/rockValidation', '@Obsidian/Utility/email', '@Obsidian/Utility/phone', '@Obsidian/ValidationRules', './codeBox.obs', '@Obsidian/Controls/radioButtonList', '@Obsidian/Utility/component', '@Obsidian/Enums/Blocks/Security/Login/passwordlessLoginStep', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/url'], (function (exports) {
  'use strict';
  var provide, inject, defineComponent, ref, computed, onMounted, onBeforeUnmount, openBlock, createElementBlock, Fragment, renderSlot, createElementVNode, normalizeClass, unref, createTextVNode, createBlock, withCtx, createCommentVNode, createVNode, toDisplayString, renderList, isRef, watch, onUnmounted, Divider, InlineCheckBox, RockButton, RockForm, TextBox, BtnType, LoginMethod, RockValidation, isEmail, formatPhoneNumber, stripPhoneNumber, getPhoneNumberConfiguration, validateValue, CodeBox, RadioButtonList, useVModelPassthrough, PasswordlessLoginStep, NotificationBox, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock, removeCurrentUrlQueryParams;
  return {
    setters: [function (module) {
      provide = module.provide;
      inject = module.inject;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      onMounted = module.onMounted;
      onBeforeUnmount = module.onBeforeUnmount;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderSlot = module.renderSlot;
      createElementVNode = module.createElementVNode;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      createTextVNode = module.createTextVNode;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      toDisplayString = module.toDisplayString;
      renderList = module.renderList;
      isRef = module.isRef;
      watch = module.watch;
      onUnmounted = module.onUnmounted;
    }, function (module) {
      Divider = module["default"];
    }, function (module) {
      InlineCheckBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      LoginMethod = module.LoginMethod;
    }, function (module) {
      RockValidation = module["default"];
    }, function (module) {
      isEmail = module.isEmail;
    }, function (module) {
      formatPhoneNumber = module.formatPhoneNumber;
      stripPhoneNumber = module.stripPhoneNumber;
      getPhoneNumberConfiguration = module.getPhoneNumberConfiguration;
    }, function (module) {
      validateValue = module.validateValue;
    }, function (module) {
      CodeBox = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      PasswordlessLoginStep = module.PasswordlessLoginStep;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      removeCurrentUrlQueryParams = module.removeCurrentUrlQueryParams;
    }],
    execute: (function () {

      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
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
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
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

      var bootstrapBreakpointInjectionKey = Symbol("bootstrap-breakpoint");
      function provideBreakpoint(breakpoint) {
        provide(bootstrapBreakpointInjectionKey, breakpoint);
      }
      function useBreakpoint() {
        var breakpoint = inject(bootstrapBreakpointInjectionKey);
        if (!breakpoint) {
          throw "provideBreakpoint must be invoked before useBreakpoint can be used. If useBreakpoint is in a component where <BreakpointObserver> is used in the template, then use the @breakpoint output binding to get the breakpoint.";
        }
        return breakpoint;
      }

      var script$7 = defineComponent({
        name: 'breakpointObserver.partial',
        emits: ["breakpoint"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var breakpointDisplays = {
            "xs": "none",
            "sm": "inline",
            "md": "inline-block",
            "lg": "block",
            "xl": "table"
          };
          var displayBreakpoints = Object.entries(breakpointDisplays).reduce((swapped, _ref2) => {
            var _ref3 = _slicedToArray(_ref2, 2),
              key = _ref3[0],
              value = _ref3[1];
            return _objectSpread2(_objectSpread2({}, swapped), {}, {
              [value]: key
            });
          }, {});
          var classes = Object.keys(breakpointDisplays).map(breakpoint => breakpoint).map(breakpoint => breakpoint === "xs" ? "d-".concat(breakpointDisplays[breakpoint]) : "d-".concat(breakpoint, "-").concat(breakpointDisplays[breakpoint]));
          var breakpointHelperDiv = ref();
          var breakpoint = ref("unknown");
          var internalBreakpoint = computed({
            get() {
              return breakpoint.value;
            },
            set(newValue) {
              breakpoint.value = newValue;
              emit("breakpoint", breakpoint.value);
            }
          });
          function checkBreakpoint() {
            var _displayBreakpoints$d;
            if (!breakpointHelperDiv.value) {
              return;
            }
            var display = getComputedStyle(breakpointHelperDiv.value).display;
            var newBreakpoint = (_displayBreakpoints$d = displayBreakpoints[display]) !== null && _displayBreakpoints$d !== void 0 ? _displayBreakpoints$d : "unknown";
            internalBreakpoint.value = newBreakpoint;
          }
          function onWindowResized() {
            checkBreakpoint();
          }
          provideBreakpoint(breakpoint);
          onMounted(() => {
            checkBreakpoint();
            addEventListener("resize", onWindowResized);
          });
          onBeforeUnmount(() => {
            removeEventListener("resize", onWindowResized);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [renderSlot(_ctx.$slots, "default"), createElementVNode("div", {
              ref_key: "breakpointHelperDiv",
              ref: breakpointHelperDiv,
              style: {
                "visibility": "collapse !important"
              },
              class: normalizeClass(unref(classes))
            }, null, 2)], 64);
          };
        }
      });

      script$7.__file = "src/Security/breakpointObserver.partial.obs";

      var _hoisted_1$5 = ["innerHTML"];
      var _hoisted_2$5 = createTextVNode("Log In");
      var _hoisted_3$1 = createTextVNode("Forgot Account");
      var script$6 = defineComponent({
        name: 'credentialLogin.partial',
        props: {
          config: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          isMobileForced: {
            type: Boolean,
            required: false,
            default: false
          }
        },
        emits: ["forgotAccount", "login", "register"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var breakpoint = useBreakpoint();
          var username = ref("");
          var password = ref("");
          var rememberMe = ref(false);
          var usernameFieldLabel = computed(() => props.config.usernameFieldLabel || "Username");
          var newAccountButtonText = computed(() => props.config.newAccountButtonText || "Register");
          var isMobile = computed(() => props.isMobileForced || breakpoint.value === "xs");
          function onCredentialLoginSubmitted() {
            emit("login", {
              username: username.value,
              password: password.value,
              rememberMe: rememberMe.value
            });
          }
          function onForgotAccountClicked() {
            emit("forgotAccount");
          }
          function onRegisterClicked() {
            emit("register");
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockForm), {
              onSubmit: onCredentialLoginSubmitted
            }, {
              default: withCtx(() => [__props.config.promptMessage ? (openBlock(), createElementBlock("div", {
                key: 0,
                innerHTML: __props.config.promptMessage
              }, null, 8, _hoisted_1$5)) : createCommentVNode("v-if", true), createVNode(unref(TextBox), {
                modelValue: username.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => username.value = $event),
                disabled: __props.disabled,
                isRequiredIndicatorHidden: true,
                label: unref(usernameFieldLabel),
                rules: "required",
                type: "text"
              }, null, 8, ["modelValue", "disabled", "label"]), createVNode(unref(TextBox), {
                modelValue: password.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => password.value = $event),
                disabled: __props.disabled,
                isRequiredIndicatorHidden: true,
                label: "Password",
                rules: "required",
                type: "password"
              }, null, 8, ["modelValue", "disabled"]), createVNode(unref(InlineCheckBox), {
                modelValue: rememberMe.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => rememberMe.value = $event),
                disabled: __props.disabled,
                label: "Keep me logged in"
              }, null, 8, ["modelValue", "disabled"]), createVNode(unref(RockButton), {
                autoDisable: "",
                btnType: unref(BtnType).Primary,
                class: normalizeClass(unref(isMobile) ? 'btn-block' : 'd-inline-block'),
                disabled: __props.disabled,
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_2$5]),
                _: 1
              }, 8, ["btnType", "class", "disabled"]), !__props.config.hideNewAccountOption ? (openBlock(), createBlock(unref(RockButton), {
                key: 1,
                autoDisable: "",
                btnType: unref(BtnType).Action,
                class: normalizeClass(unref(isMobile) ? 'btn-block mt-2' : 'ml-1 d-inline-block'),
                disabled: __props.disabled,
                type: "button",
                onClick: onRegisterClicked
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(newAccountButtonText)), 1)]),
                _: 1
              }, 8, ["btnType", "class", "disabled"])) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
                autoDisable: "",
                btnType: unref(BtnType).Link,
                class: normalizeClass(unref(isMobile) ? 'btn-block mt-2' : 'ml-1 d-inline-block'),
                disabled: __props.disabled,
                type: "button",
                onClick: onForgotAccountClicked
              }, {
                default: withCtx(() => [_hoisted_3$1]),
                _: 1
              }, 8, ["btnType", "class", "disabled"])]),
              _: 1
            });
          };
        }
      });

      script$6.__file = "src/Security/Login/credentialLogin.partial.obs";

      var _hoisted_1$4 = {
        class: "external-logins"
      };
      var _hoisted_2$4 = ["innerHTML"];
      var script$5 = defineComponent({
        name: 'externalLogin.partial',
        props: {
          modelValue: {
            type: Array,
            required: true,
            default: []
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          caption: {
            type: String,
            required: false,
            default: ""
          }
        },
        emits: ["login"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var externalLogins = computed(() => {
            var _props$modelValue$fil, _props$modelValue;
            return (_props$modelValue$fil = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.filter(l => !!l.authenticationType)) !== null && _props$modelValue$fil !== void 0 ? _props$modelValue$fil : [];
          });
          var hasExternalLogins = computed(() => !!externalLogins.value.length);
          var isCaptionNotEmpty = computed(() => !!props.caption);
          function onExternalLoginClick(externalLogin) {
            emit("login", externalLogin);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$4, [unref(hasExternalLogins) && unref(isCaptionNotEmpty) ? (openBlock(), createElementBlock("div", {
              key: 0,
              innerHTML: __props.caption
            }, null, 8, _hoisted_2$4)) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(externalLogins), login => {
              return openBlock(), createBlock(unref(RockButton), {
                btnType: unref(BtnType).Authentication,
                class: normalizeClass(login.cssClass + ' btn-authentication-v2'),
                disabled: __props.disabled,
                onClick: $event => onExternalLoginClick(login)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(login.text), 1)]),
                _: 2
              }, 1032, ["btnType", "class", "disabled", "onClick"]);
            }), 256))]);
          };
        }
      });

      script$5.__file = "src/Security/Login/externalLogin.partial.obs";

      var _hoisted_1$3 = createTextVNode("Sign in with Account");
      var _hoisted_2$3 = createTextVNode("Sign in with Email or Phone");
      var script$4 = defineComponent({
        name: 'loginMethodPicker.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          isCredentialLoginSupported: {
            type: Boolean,
            required: true
          },
          isPasswordlessLoginSupported: {
            type: Boolean,
            required: true
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var loginMethodWrapper = computed(() => ({
            isCredential: internalLoginMethod.value === LoginMethod.InternalDatabase,
            isPasswordless: internalLoginMethod.value === LoginMethod.Passwordless
          }));
          var internalLoginMethod = computed({
            get() {
              return props.modelValue;
            },
            set(newValue) {
              emit("update:modelValue", newValue);
            }
          });
          function onSignInWithAccountClicked() {
            internalLoginMethod.value = LoginMethod.InternalDatabase;
          }
          function onSignInWithEmailOrPhoneClicked() {
            internalLoginMethod.value = LoginMethod.Passwordless;
          }
          return (_ctx, _cache) => {
            return __props.isCredentialLoginSupported && !unref(loginMethodWrapper).isCredential ? (openBlock(), createBlock(unref(RockButton), {
              key: 0,
              btnType: unref(BtnType).Default,
              class: "btn-block",
              disabled: __props.disabled,
              type: "button",
              onClick: _cache[0] || (_cache[0] = $event => onSignInWithAccountClicked())
            }, {
              default: withCtx(() => [_hoisted_1$3]),
              _: 1
            }, 8, ["btnType", "disabled"])) : __props.isPasswordlessLoginSupported && !unref(loginMethodWrapper).isPasswordless ? (openBlock(), createBlock(unref(RockButton), {
              key: 1,
              btnType: unref(BtnType).Default,
              class: "btn-block",
              disabled: __props.disabled,
              type: "button",
              onClick: _cache[1] || (_cache[1] = $event => onSignInWithEmailOrPhoneClicked())
            }, {
              default: withCtx(() => [_hoisted_2$3]),
              _: 1
            }, 8, ["btnType", "disabled"])) : createCommentVNode("v-if", true);
          };
        }
      });

      script$4.__file = "src/Security/Login/loginMethodPicker.partial.obs";

      var _hoisted_1$2 = createTextVNode("Continue");
      var _hoisted_2$2 = createTextVNode("Continue");
      var script$3 = defineComponent({
        name: 'passwordlessLoginStartStep.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          isMobileForced: {
            type: Boolean,
            required: false,
            default: false
          }
        },
        emits: ["start", "update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var label = "Email or Phone";
          var validationErrors = ref([]);
          var phoneNumberConfig = ref();
          var emailOrPhoneNumberRaw = ref("");
          var emailOrPhoneNumber = computed({
            get() {
              return emailOrPhoneNumberRaw.value;
            },
            set(newValue) {
              emailOrPhoneNumberRaw.value = newValue;
              validateEmailOrPhoneNumber(newValue);
            }
          });
          function onPasswordlessLoginStartSubmitted() {
            validateForm();
            if (validationErrors.value.length === 0) {
              emit("start");
            }
          }
          function getConfiguredRules() {
            var _phoneNumberConfig$va;
            var rules = (_phoneNumberConfig$va = phoneNumberConfig.value) === null || _phoneNumberConfig$va === void 0 ? void 0 : _phoneNumberConfig$va.rules;
            var configuredRules = [];
            if (rules) {
              for (var key in rules) {
                var bag = rules[key];
                configuredRules.push(...bag);
              }
            }
            return configuredRules;
          }
          function loadPhoneNumberConfig() {
            return _loadPhoneNumberConfig.apply(this, arguments);
          }
          function _loadPhoneNumberConfig() {
            _loadPhoneNumberConfig = _asyncToGenerator(function* () {
              phoneNumberConfig.value = yield getPhoneNumberConfiguration();
            });
            return _loadPhoneNumberConfig.apply(this, arguments);
          }
          function validateForm() {
            var errorMessages = validateValue(emailOrPhoneNumber.value, validateEmailOrPhoneNumber);
            if (errorMessages && errorMessages.length) {
              validationErrors.value = errorMessages.map(errorMessage => ({
                name: label,
                text: errorMessage
              }));
            } else {
              validationErrors.value = [];
            }
          }
          function validateEmailOrPhoneNumber(value) {
            if (!value) {
              return true;
            }
            var errors = validateEmail(value);
            if (errors === "") {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                email: value,
                phoneNumber: null,
                shouldSendEmailCode: true,
                shouldSendEmailLink: true,
                shouldSendSmsCode: false
              }));
              return true;
            }
            var formattedNumber = formatPhoneNumber(stripPhoneNumber(value));
            if (formattedNumber) {
              errors = validatePhoneNumber(stripPhoneNumber(formattedNumber));
              if (errors === "") {
                emailOrPhoneNumberRaw.value = formattedNumber;
                emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                  email: null,
                  phoneNumber: formattedNumber,
                  shouldSendEmailCode: false,
                  shouldSendEmailLink: false,
                  shouldSendSmsCode: true
                }));
                return true;
              }
            }
            emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              email: null,
              phoneNumber: null,
              shouldSendEmailCode: false,
              shouldSendEmailLink: false,
              shouldSendSmsCode: false
            }));
            return "must be a valid email or phone number";
          }
          function validateEmail(value) {
            if (!value) {
              return "";
            }
            if (isEmail(value)) {
              return "";
            }
            return "Email must be a valid email address.";
          }
          function validatePhoneNumber(value) {
            var rules = getConfiguredRules();
            if (!value) {
              return "";
            }
            if (rules.length === 0) {
              return "";
            }
            var _iterator = _createForOfIteratorHelper(rules),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _rule$match;
                var rule = _step.value;
                var regex = new RegExp((_rule$match = rule.match) !== null && _rule$match !== void 0 ? _rule$match : "");
                if (regex.test(value)) {
                  return "";
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return "Phone number '".concat(value, "' must be a valid phone number.");
          }
          loadPhoneNumberConfig();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(RockValidation), {
              errors: validationErrors.value
            }, null, 8, ["errors"]), createVNode(unref(RockForm), {
              onSubmit: onPasswordlessLoginStartSubmitted
            }, {
              default: withCtx(() => [createVNode(unref(TextBox), {
                modelValue: unref(emailOrPhoneNumber),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(emailOrPhoneNumber) ? emailOrPhoneNumber.value = $event : null),
                disabled: __props.disabled,
                isRequiredIndicatorHidden: true,
                label: label,
                rules: ['required']
              }, null, 8, ["modelValue", "disabled"]), createVNode(unref(RockButton), {
                btnType: unref(BtnType).Primary,
                class: normalizeClass(__props.isMobileForced ? 'btn-block' : 'btn-block d-sm-none'),
                disabled: __props.disabled,
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_1$2]),
                _: 1
              }, 8, ["btnType", "class", "disabled"]), !__props.isMobileForced ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                btnType: unref(BtnType).Primary,
                class: "d-none d-sm-inline-block",
                disabled: __props.disabled,
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_2$2]),
                _: 1
              }, 8, ["btnType", "disabled"])) : createCommentVNode("v-if", true)]),
              _: 1
            })], 64);
          };
        }
      });

      script$3.__file = "src/Security/Login/passwordlessLoginStartStep.partial.obs";

      var _hoisted_1$1 = createTextVNode("Complete Sign In");
      var _hoisted_2$1 = createTextVNode("Resend code");
      var script$2 = defineComponent({
        name: 'passwordlessLoginVerifyStep.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          communicationType: {
            type: String,
            required: false,
            default: "data"
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          isMobileForced: {
            type: Boolean,
            required: false,
            default: false
          },
          submitPasswordlessLoginVerification: {
            type: Boolean,
            required: false,
            default: false
          }
        },
        emits: ["resendCode", "update:submitPasswordlessLoginVerification", "update:modelValue", "verify"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalSubmitPasswordlessLoginVerification = useVModelPassthrough(props, "submitPasswordlessLoginVerification", emit);
          var instructionsDiv = ref();
          var breakpoint = useBreakpoint();
          var internalCode = computed({
            get() {
              return props.modelValue.code || "";
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                code: newValue
              }));
            }
          });
          var internalCommunicationType = computed(() => props.communicationType || "data");
          var internalMatchingPeople = computed({
            get() {
              var _props$modelValue$mat;
              return (_props$modelValue$mat = props.modelValue.matchingPeople) !== null && _props$modelValue$mat !== void 0 ? _props$modelValue$mat : [];
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                matchingPeople: newValue
              }));
            }
          });
          var internalMatchingPersonValue = computed({
            get() {
              return props.modelValue.matchingPersonValue || "";
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                matchingPersonValue: newValue
              }));
            }
          });
          var isMobile = computed(() => props.isMobileForced || breakpoint.value === "xs");
          function onPasswordlessLoginVerifySubmitted() {
            emit("verify");
          }
          function onResendCodeClicked() {
            internalCode.value = "";
            internalMatchingPersonValue.value = "";
            internalMatchingPeople.value = [];
            emit("resendCode");
          }
          function onCodeCompleted() {
            var _instructionsDiv$valu, _instructionsDiv$valu2;
            var signInButton = (_instructionsDiv$valu = instructionsDiv.value) === null || _instructionsDiv$valu === void 0 ? void 0 : (_instructionsDiv$valu2 = _instructionsDiv$valu.parentElement) === null || _instructionsDiv$valu2 === void 0 ? void 0 : _instructionsDiv$valu2.querySelector("button.complete-sign-in-btn");
            if (signInButton) {
              signInButton.focus();
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockForm), {
              submit: unref(internalSubmitPasswordlessLoginVerification),
              "onUpdate:submit": _cache[3] || (_cache[3] = $event => isRef(internalSubmitPasswordlessLoginVerification) ? internalSubmitPasswordlessLoginVerification.value = $event : null),
              onSubmit: onPasswordlessLoginVerifySubmitted
            }, {
              default: withCtx(() => [createElementVNode("div", {
                class: "mb-2",
                ref_key: "instructionsDiv",
                ref: instructionsDiv
              }, "Please enter your confirmation code below.", 512), createVNode(unref(CodeBox), {
                modelValue: unref(internalCode),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalCode) ? internalCode.value = $event : null),
                modelModifiers: {
                  capitalize: true
                },
                disabled: __props.disabled,
                maxLength: 6,
                rules: "required",
                validationTitle: "Code",
                onComplete: onCodeCompleted
              }, null, 8, ["modelValue", "disabled"]), __props.modelValue.isPersonSelectionRequired ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createElementVNode("p", null, "The " + toDisplayString(unref(internalCommunicationType)) + " you provided is matched to several different individuals. Please select the one that is you.", 1), createVNode(unref(RadioButtonList), {
                modelValue: unref(internalMatchingPersonValue),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(internalMatchingPersonValue) ? internalMatchingPersonValue.value = $event : null),
                items: unref(internalMatchingPeople),
                "onUpdate:items": _cache[2] || (_cache[2] = $event => isRef(internalMatchingPeople) ? internalMatchingPeople.value = $event : null)
              }, null, 8, ["modelValue", "items"])], 64)) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
                btnType: unref(BtnType).Primary,
                class: normalizeClass(['complete-sign-in-btn', unref(isMobile) ? 'btn-block' : '']),
                disabled: __props.disabled,
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_1$1]),
                _: 1
              }, 8, ["btnType", "class", "disabled"]), createVNode(unref(RockButton), {
                autoDisable: "",
                btnType: unref(BtnType).Action,
                class: normalizeClass(unref(isMobile) ? 'btn-block mt-2' : 'ml-1'),
                disabled: __props.disabled,
                type: "button",
                onClick: onResendCodeClicked
              }, {
                default: withCtx(() => [_hoisted_2$1]),
                _: 1
              }, 8, ["btnType", "class", "disabled"])]),
              _: 1
            }, 8, ["submit"]);
          };
        }
      });

      script$2.__file = "src/Security/Login/passwordlessLoginVerifyStep.partial.obs";

      var script$1 = defineComponent({
        name: 'passwordlessLogin.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          config: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          isMobileForced: {
            type: Boolean,
            required: false,
            default: false
          }
        },
        emits: ["start", "update:modelValue", "verify"],
        setup(__props, _ref) {
          var _props$modelValue, _props$modelValue2, _props$modelValue3, _props$modelValue4;
          var emit = _ref.emit;
          var props = __props;
          var passwordlessLoginStartRequest = ref({
            shouldSendEmailCode: false,
            shouldSendEmailLink: false,
            shouldSendSmsCode: false,
            email: null,
            phoneNumber: null
          });
          var passwordlessLoginVerifyOptions = ref({
            code: (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.code,
            isPersonSelectionRequired: (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.isPersonSelectionRequired,
            matchingPeople: (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.matchingPeople,
            matchingPersonValue: null,
            state: (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.state
          });
          var submitPasswordlessLoginVerification = ref(false);
          var passwordlessLoginStep = computed(() => ({
            isStart: internalStep.value === PasswordlessLoginStep.Start,
            isVerify: internalStep.value === PasswordlessLoginStep.Verify
          }));
          var internalCode = computed({
            get() {
              var _props$modelValue$cod;
              return (_props$modelValue$cod = props.modelValue.code) !== null && _props$modelValue$cod !== void 0 ? _props$modelValue$cod : "";
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                code: newValue
              }));
            }
          });
          var internalState = computed({
            get() {
              var _props$modelValue$sta;
              return (_props$modelValue$sta = props.modelValue.state) !== null && _props$modelValue$sta !== void 0 ? _props$modelValue$sta : "";
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                state: newValue
              }));
            }
          });
          var internalStep = computed({
            get() {
              return props.modelValue.step;
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                step: newValue
              }));
            }
          });
          var communicationType = computed(() => passwordlessLoginStartRequest.value.email ? "email" : passwordlessLoginStartRequest.value.phoneNumber ? "phone number" : "data");
          function onResendCode() {
            internalCode.value = "";
            passwordlessLoginVerifyOptions.value.code = "";
            internalStep.value = PasswordlessLoginStep.Start;
          }
          function onStartPasswordlessLogin() {
            internalCode.value = "";
            passwordlessLoginVerifyOptions.value.code = "";
            internalState.value = "";
            emit("start", passwordlessLoginStartRequest.value);
          }
          function onVerifyPasswordlessLogin() {
            return _onVerifyPasswordlessLogin.apply(this, arguments);
          }
          function _onVerifyPasswordlessLogin() {
            _onVerifyPasswordlessLogin = _asyncToGenerator(function* () {
              emit("verify", {
                code: passwordlessLoginVerifyOptions.value.code,
                matchingPersonValue: passwordlessLoginVerifyOptions.value.matchingPersonValue,
                state: passwordlessLoginVerifyOptions.value.state
              });
            });
            return _onVerifyPasswordlessLogin.apply(this, arguments);
          }
          watch(() => props.modelValue, (newPasswordlessLoginOptions, oldPasswordlessLoginOptions) => {
            if (newPasswordlessLoginOptions.code !== oldPasswordlessLoginOptions.code) {
              passwordlessLoginVerifyOptions.value.code = newPasswordlessLoginOptions.code;
            }
            if (newPasswordlessLoginOptions.isPersonSelectionRequired !== oldPasswordlessLoginOptions.isPersonSelectionRequired) {
              passwordlessLoginVerifyOptions.value.isPersonSelectionRequired = newPasswordlessLoginOptions.isPersonSelectionRequired;
            }
            if (newPasswordlessLoginOptions.matchingPeople !== oldPasswordlessLoginOptions.matchingPeople) {
              passwordlessLoginVerifyOptions.value.matchingPeople = newPasswordlessLoginOptions.matchingPeople;
            }
            if (newPasswordlessLoginOptions.state !== oldPasswordlessLoginOptions.state) {
              passwordlessLoginVerifyOptions.value.state = newPasswordlessLoginOptions.state;
            }
          });
          onMounted(() => {
            if (props.modelValue.isAutomaticVerificationRequired) {
              submitPasswordlessLoginVerification.value = true;
            }
          });
          onUnmounted(() => {
            internalStep.value = PasswordlessLoginStep.Start;
          });
          return (_ctx, _cache) => {
            return unref(passwordlessLoginStep).isStart ? (openBlock(), createBlock(unref(script$3), {
              key: 0,
              modelValue: passwordlessLoginStartRequest.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => passwordlessLoginStartRequest.value = $event),
              disabled: __props.disabled,
              isMobileForced: __props.isMobileForced,
              onStart: onStartPasswordlessLogin
            }, null, 8, ["modelValue", "disabled", "isMobileForced"])) : unref(passwordlessLoginStep).isVerify ? (openBlock(), createBlock(unref(script$2), {
              key: 1,
              modelValue: passwordlessLoginVerifyOptions.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => passwordlessLoginVerifyOptions.value = $event),
              submitPasswordlessLoginVerification: submitPasswordlessLoginVerification.value,
              "onUpdate:submitPasswordlessLoginVerification": _cache[2] || (_cache[2] = $event => submitPasswordlessLoginVerification.value = $event),
              communicationType: unref(communicationType),
              disabled: __props.disabled,
              isMobileForced: __props.isMobileForced,
              onResendCode: onResendCode,
              onVerify: onVerifyPasswordlessLogin
            }, null, 8, ["modelValue", "submitPasswordlessLoginVerification", "communicationType", "disabled", "isMobileForced"])) : createCommentVNode("v-if", true);
          };
        }
      });

      script$1.__file = "src/Security/Login/passwordlessLogin.partial.obs";

      var _hoisted_1 = {
        key: 0
      };
      var _hoisted_2 = {
        key: 1,
        class: "login-block"
      };
      var _hoisted_3 = createElementVNode("fieldset", null, [createElementVNode("legend", null, "Log In")], -1);
      var _hoisted_4 = {
        key: 0,
        class: "login-methods col"
      };
      var _hoisted_5 = {
        class: "login-entry col"
      };
      var _hoisted_6 = {
        key: 2,
        class: "mt-3"
      };
      var _hoisted_7 = ["innerHTML"];
      var script = exports('default', defineComponent({
        name: 'login',
        setup(__props) {
          var _config$passwordlessA, _config$passwordlessA2;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var breakpoint = ref("unknown");
          var isMobileForced = !!document.getElementById("splash");
          var isAuthenticating = ref(config.shouldRedirect);
          var completedCaption = ref(null);
          var errorMessage = ref(config.errorMessage || null);
          var isNavigating = ref(false);
          var passwordlessLoginOptions = ref({
            code: (_config$passwordlessA = config.passwordlessAutoVerifyOptions) === null || _config$passwordlessA === void 0 ? void 0 : _config$passwordlessA.code,
            state: (_config$passwordlessA2 = config.passwordlessAutoVerifyOptions) === null || _config$passwordlessA2 === void 0 ? void 0 : _config$passwordlessA2.state,
            isAutomaticVerificationRequired: !!config.passwordlessAutoVerifyOptions,
            isPersonSelectionRequired: false,
            matchingPeople: null,
            step: config.passwordlessAutoVerifyOptions ? PasswordlessLoginStep.Verify : PasswordlessLoginStep.Start
          });
          var isCompleted = ref(false);
          var areBothInternalAuthProvidersVisible = computed(() => config.isInternalDatabaseLoginSupported && config.isPasswordlessLoginSupported);
          var isAnyExternalAuthProviderVisible = computed(() => {
            var _config$externalAuthP;
            return !!((_config$externalAuthP = config.externalAuthProviderButtons) !== null && _config$externalAuthP !== void 0 && _config$externalAuthP.length);
          });
          var areSecondaryAndPrimaryAuthVisible = computed(() => {
            var isAnyInternalAuthProviderVisible = config.isInternalDatabaseLoginSupported || config.isPasswordlessLoginSupported;
            return isAnyExternalAuthProviderVisible.value && isAnyInternalAuthProviderVisible || areBothInternalAuthProvidersVisible.value;
          });
          var loginMethod = ref(getInitialLoginMethod());
          var internalLoginMethod = computed({
            get() {
              return passwordlessLoginOptions.value.isAutomaticVerificationRequired ? LoginMethod.Passwordless : loginMethod.value;
            },
            set(newValue) {
              loginMethod.value = newValue;
            }
          });
          var loginMethodWrapper = computed(() => ({
            isCredential: internalLoginMethod.value === LoginMethod.InternalDatabase,
            isPasswordless: internalLoginMethod.value === LoginMethod.Passwordless
          }));
          var isMobile = computed(() => isMobileForced || breakpoint.value === "xs");
          function onCredentialLogin(_x) {
            return _onCredentialLogin.apply(this, arguments);
          }
          function _onCredentialLogin() {
            _onCredentialLogin = _asyncToGenerator(function* (bag) {
              isAuthenticating.value = true;
              try {
                var response = yield invokeBlockAction("CredentialLogin", {
                  bag
                });
                if (!(response !== null && response !== void 0 && response.isSuccess) || !response.data) {
                  showError((response === null || response === void 0 ? void 0 : response.errorMessage) || "Something went wrong. Please try again.");
                  return;
                }
                if (response.data.isAuthenticated) {
                  yield navigate(response.data.redirectUrl || "/");
                  return;
                }
                if (response.data.isConfirmationRequired) {
                  showCompleted(response.data.errorMessage || response.errorMessage);
                  return;
                }
                showError(response.data.errorMessage || "Authentication failed. Please try again.");
              } finally {
                isAuthenticating.value = false;
              }
            });
            return _onCredentialLogin.apply(this, arguments);
          }
          function onExternalLogin(_x2) {
            return _onExternalLogin.apply(this, arguments);
          }
          function _onExternalLogin() {
            _onExternalLogin = _asyncToGenerator(function* (externalLogin) {
              isAuthenticating.value = true;
              var bag = {
                authenticationType: externalLogin.authenticationType
              };
              try {
                var _response$data;
                var response = yield invokeBlockAction("RemoteLoginStart", {
                  bag
                });
                if (response !== null && response !== void 0 && response.isSuccess && response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.redirectUrl) {
                  yield navigate(response.data.redirectUrl);
                  return;
                }
                showError(response === null || response === void 0 ? void 0 : response.errorMessage);
                return;
              } finally {
                isAuthenticating.value = false;
              }
            });
            return _onExternalLogin.apply(this, arguments);
          }
          function onForgotAccount() {
            return _onForgotAccount.apply(this, arguments);
          }
          function _onForgotAccount() {
            _onForgotAccount = _asyncToGenerator(function* () {
              var _config$helpPageUrl;
              yield navigate((_config$helpPageUrl = config.helpPageUrl) !== null && _config$helpPageUrl !== void 0 ? _config$helpPageUrl : "/");
            });
            return _onForgotAccount.apply(this, arguments);
          }
          function onPasswordlessLoginStart(_x3) {
            return _onPasswordlessLoginStart.apply(this, arguments);
          }
          function _onPasswordlessLoginStart() {
            _onPasswordlessLoginStart = _asyncToGenerator(function* (bag) {
              isAuthenticating.value = true;
              clearError();
              try {
                var _response$data2;
                var response = yield invokeBlockAction("PasswordlessLoginStart", {
                  bag
                });
                if (!(response !== null && response !== void 0 && response.isSuccess) || !response.data) {
                  showError((response === null || response === void 0 ? void 0 : response.errorMessage) || "Something went wrong. Please try again.");
                  return;
                }
                if (response.data.isSuccessful) {
                  passwordlessLoginOptions.value = _objectSpread2(_objectSpread2({}, passwordlessLoginOptions.value), {}, {
                    state: response.data.state || "",
                    step: PasswordlessLoginStep.Verify
                  });
                  return;
                }
                passwordlessLoginOptions.value = _objectSpread2(_objectSpread2({}, passwordlessLoginOptions.value), {}, {
                  step: PasswordlessLoginStep.Start
                });
                showError((response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.errorMessage) || (response === null || response === void 0 ? void 0 : response.errorMessage) || "An unknown error occurred. Please submit email or phone number again.");
                return;
              } finally {
                isAuthenticating.value = false;
              }
            });
            return _onPasswordlessLoginStart.apply(this, arguments);
          }
          function onPasswordlessLoginVerify(_x4) {
            return _onPasswordlessLoginVerify.apply(this, arguments);
          }
          function _onPasswordlessLoginVerify() {
            _onPasswordlessLoginVerify = _asyncToGenerator(function* (bag) {
              isAuthenticating.value = true;
              clearError();
              try {
                var _response$data$errorM;
                var response = yield invokeBlockAction("PasswordlessLoginVerify", {
                  bag
                });
                if (!response || !response.isSuccess || !response.data) {
                  showError("Something went wrong. Please try again.");
                  return;
                }
                if (response.data.isAuthenticated) {
                  yield navigate(config.redirectUrl || "/");
                  return;
                }
                if (response.data.isRegistrationRequired) {
                  if (!response.data.registrationUrl) {
                    showError("Redirecting to default registration page");
                  }
                  yield navigate(response.data.registrationUrl || "/NewAccount");
                  return;
                }
                if (response.data.isPersonSelectionRequired) {
                  passwordlessLoginOptions.value = _objectSpread2(_objectSpread2({}, passwordlessLoginOptions.value), {}, {
                    isPersonSelectionRequired: true,
                    matchingPeople: response.data.matchingPeople || []
                  });
                  return;
                }
                showError((_response$data$errorM = response.data.errorMessage) !== null && _response$data$errorM !== void 0 ? _response$data$errorM : "Authentication failed. Please try again.");
              } finally {
                isAuthenticating.value = false;
              }
            });
            return _onPasswordlessLoginVerify.apply(this, arguments);
          }
          function onRegister() {
            return _onRegister.apply(this, arguments);
          }
          function _onRegister() {
            _onRegister = _asyncToGenerator(function* () {
              var _config$newAccountPag;
              yield navigate((_config$newAccountPag = config.newAccountPageUrl) !== null && _config$newAccountPag !== void 0 ? _config$newAccountPag : "/");
            });
            return _onRegister.apply(this, arguments);
          }
          function clearError() {
            errorMessage.value = null;
          }
          function getInitialLoginMethod() {
            var configuredDefaultLoginMethod = config.defaultLoginMethod;
            switch (configuredDefaultLoginMethod) {
              case LoginMethod.InternalDatabase:
                {
                  if (!config.isInternalDatabaseLoginSupported && config.isPasswordlessLoginSupported) {
                    return LoginMethod.Passwordless;
                  }
                  break;
                }
              case LoginMethod.Passwordless:
                {
                  if (!config.isPasswordlessLoginSupported && config.isInternalDatabaseLoginSupported) {
                    return LoginMethod.InternalDatabase;
                  }
                  break;
                }
            }
            return configuredDefaultLoginMethod;
          }
          function navigate(_x5) {
            return _navigate.apply(this, arguments);
          }
          function _navigate() {
            _navigate = _asyncToGenerator(function* (url) {
              isNavigating.value = true;
              window.location.href = url;
              return new Promise((_resolve, _reject) => {});
            });
            return _navigate.apply(this, arguments);
          }
          function showCompleted(caption) {
            completedCaption.value = caption || "An unknown error occurred";
            isCompleted.value = true;
          }
          function showError(error) {
            errorMessage.value = error || "An unknown error occurred";
          }
          onMounted(() => {
            if (config.shouldRedirect) {
              navigate(config.redirectUrl ? config.redirectUrl : "/");
            }
          });
          removeCurrentUrlQueryParams("State", "Code", "IsPasswordless", "state", "code", "scope", "authuser", "prompt");
          onConfigurationValuesChanged(useReloadBlock());
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$7), {
              onBreakpoint: _cache[8] || (_cache[8] = value => breakpoint.value = value)
            }, {
              default: withCtx(() => {
                var _unref$configurationE, _unref$remoteAuthoriz;
                return [isCompleted.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(NotificationBox), {
                  alertType: "warning",
                  innerHTML: completedCaption.value
                }, null, 8, ["innerHTML"])])) : (openBlock(), createElementBlock("div", _hoisted_2, [_hoisted_3, (_unref$configurationE = unref(config).configurationErrors) !== null && _unref$configurationE !== void 0 && _unref$configurationE.length ? (openBlock(true), createElementBlock(Fragment, {
                  key: 0
                }, renderList(unref(config).configurationErrors, configError => {
                  return openBlock(), createBlock(unref(NotificationBox), {
                    alertType: "warning",
                    textContent: toDisplayString(configError)
                  }, null, 8, ["textContent"]);
                }), 256)) : createCommentVNode("v-if", true), createElementVNode("div", {
                  class: normalizeClass(['row', unref(isMobile) ? 'mobile-layout' : 'd-flex'])
                }, [unref(isAnyExternalAuthProviderVisible) || unref(areBothInternalAuthProvidersVisible) ? (openBlock(), createElementBlock("div", _hoisted_4, [unref(isAnyExternalAuthProviderVisible) ? (openBlock(), createBlock(unref(script$5), {
                  key: 0,
                  modelValue: unref(config).externalAuthProviderButtons || [],
                  caption: (_unref$remoteAuthoriz = unref(config).remoteAuthorizationPromptMessage) !== null && _unref$remoteAuthoriz !== void 0 ? _unref$remoteAuthoriz : '',
                  disabled: isAuthenticating.value || isNavigating.value,
                  onLogin: _cache[0] || (_cache[0] = $event => onExternalLogin($event))
                }, null, 8, ["modelValue", "caption", "disabled"])) : createCommentVNode("v-if", true), unref(areBothInternalAuthProvidersVisible) ? (openBlock(), createBlock(unref(script$4), {
                  key: 1,
                  modelValue: unref(internalLoginMethod),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(internalLoginMethod) ? internalLoginMethod.value = $event : null),
                  disabled: isAuthenticating.value || isNavigating.value,
                  isCredentialLoginSupported: unref(config).isInternalDatabaseLoginSupported,
                  isPasswordlessLoginSupported: unref(config).isPasswordlessLoginSupported
                }, null, 8, ["modelValue", "disabled", "isCredentialLoginSupported", "isPasswordlessLoginSupported"])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), unref(areSecondaryAndPrimaryAuthVisible) ? (openBlock(), createBlock(unref(Divider), {
                  key: 1,
                  class: normalizeClass(unref(isMobile) ? 'col' : 'd-flex col-1'),
                  content: "or",
                  isVertical: !unref(isMobile)
                }, null, 8, ["class", "isVertical"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_5, [unref(config).isInternalDatabaseLoginSupported && unref(loginMethodWrapper).isCredential ? (openBlock(), createBlock(unref(script$6), {
                  key: 0,
                  config: unref(config),
                  disabled: isAuthenticating.value || isNavigating.value,
                  isMobileForced: isMobileForced,
                  onForgotAccount: _cache[2] || (_cache[2] = $event => onForgotAccount()),
                  onLogin: _cache[3] || (_cache[3] = $event => onCredentialLogin($event)),
                  onRegister: _cache[4] || (_cache[4] = $event => onRegister())
                }, null, 8, ["config", "disabled"])) : unref(config).isPasswordlessLoginSupported && unref(loginMethodWrapper).isPasswordless ? (openBlock(), createBlock(unref(script$1), {
                  key: 1,
                  modelValue: passwordlessLoginOptions.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => passwordlessLoginOptions.value = $event),
                  config: unref(config),
                  disabled: isAuthenticating.value || isNavigating.value,
                  isMobileForced: isMobileForced,
                  onStart: _cache[6] || (_cache[6] = $event => onPasswordlessLoginStart($event)),
                  onVerify: _cache[7] || (_cache[7] = $event => onPasswordlessLoginVerify($event))
                }, null, 8, ["modelValue", "config", "disabled"])) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(unref(NotificationBox), {
                  alertType: "warning",
                  innerHTML: errorMessage.value
                }, null, 8, ["innerHTML"])])) : createCommentVNode("v-if", true)])], 2), unref(config).contentText ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: "mt-3",
                  innerHTML: unref(config).contentText
                }, null, 8, _hoisted_7)) : createCommentVNode("v-if", true)]))];
              }),
              _: 1
            });
          };
        }
      }));

      script.__file = "src/Security/login.obs";

    })
  };
}));
//# sourceMappingURL=login.obs.js.map
