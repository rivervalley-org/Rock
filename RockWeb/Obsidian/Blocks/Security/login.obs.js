System.register(['vue', '@Obsidian/Utility/guid', '@Obsidian/Controls/inlineCheckBox.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Blocks/Security/Login/loginMethod', '@Obsidian/Utility/component', '@Obsidian/Controls/rockValidation.obs', '@Obsidian/Utility/email', '@Obsidian/Utility/phone', '@Obsidian/ValidationRules', './codeBox.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Enums/Blocks/Security/Login/passwordlessLoginStep', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/url'], (function (exports) {
  'use strict';
  var provide, inject, defineComponent, ref, computed, onMounted, onBeforeUnmount, openBlock, createElementBlock, Fragment, renderSlot, createElementVNode, normalizeClass, unref, watch, createCommentVNode, createTextVNode, createBlock, withCtx, createVNode, toDisplayString, pushScopeId, popScopeId, renderList, isRef, onUnmounted, newGuid, InlineCheckBox, RockButton, RockForm, TextBox, BtnType, LoginMethod, useVModelPassthrough, RockValidation, isEmail, formatPhoneNumber, stripPhoneNumber, getPhoneNumberConfiguration, validateValue, CodeBox, RadioButtonList, PasswordlessLoginStep, NotificationBox, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock, removeCurrentUrlQueryParams;
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
      watch = module.watch;
      createCommentVNode = module.createCommentVNode;
      createTextVNode = module.createTextVNode;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      toDisplayString = module.toDisplayString;
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      renderList = module.renderList;
      isRef = module.isRef;
      onUnmounted = module.onUnmounted;
    }, function (module) {
      newGuid = module.newGuid;
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
      useVModelPassthrough = module.useVModelPassthrough;
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
      function _toArray(arr) {
        return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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

      var script$9 = defineComponent({
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

      script$9.__file = "src/Security/breakpointObserver.partial.obs";

      var _hoisted_1$7 = ["id"];
      var script$8 = defineComponent({
        name: 'htmlRenderer.partial',
        props: {
          html: {
            type: String
          }
        },
        setup(__props) {
          var props = __props;
          var id = newGuid();
          var mountPoint = ref();
          var mountedWrapper = ref();
          var mountedNodes = ref([]);
          function mountHtml() {
            var mountedWrapperElement = mountedWrapper.value;
            var mountPointElement = mountPoint.value;
            if (!mountedWrapperElement || !mountPointElement) {
              return;
            }
            var parentElement = mountPointElement.parentElement;
            if (!parentElement) {
              return;
            }
            if (mountedWrapperElement.childNodes.length === 0) {
              return;
            }
            mountedNodes.value = [];
            for (var i = 0; i < mountedWrapperElement.childNodes.length; i++) {
              var childNode = mountedWrapperElement.childNodes[i];
              parentElement.insertBefore(childNode, mountPointElement);
              mountedNodes.value.push(childNode);
            }
            parentElement.removeChild(mountPointElement);
          }
          function unmountHtml() {
            var nodesToRemove = mountedNodes.value;
            if (nodesToRemove.length === 0) {
              return;
            }
            var mountPointElement = mountPoint.value;
            if (!mountPointElement) {
              return;
            }
            var parentElement = nodesToRemove[0].parentElement;
            if (!parentElement) {
              return;
            }
            parentElement.insertBefore(mountPointElement, nodesToRemove[0]);
            var _iterator = _createForOfIteratorHelper(nodesToRemove),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var node = _step.value;
                parentElement.removeChild(node);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          watch([() => props.html, mountPoint], (_ref, _ref2) => {
            var _ref3 = _slicedToArray(_ref, 2),
              newHtml = _ref3[0],
              newMount = _ref3[1];
            var _ref4 = _slicedToArray(_ref2, 2),
              oldHtml = _ref4[0];
              _ref4[1];
            unmountHtml();
            if (newHtml !== oldHtml) {
              mountedWrapper.value = undefined;
            }
            if (!mountedWrapper.value && newHtml) {
              var tempDiv = document.createElement("div");
              tempDiv.innerHTML = newHtml;
              mountedWrapper.value = tempDiv;
            }
            if (newMount) {
              mountHtml();
            }
          });
          onMounted(() => {
            var _div$parentElement;
            var div = document.getElementById(id);
            mountPoint.value = document.createComment("");
            div === null || div === void 0 ? void 0 : (_div$parentElement = div.parentElement) === null || _div$parentElement === void 0 ? void 0 : _div$parentElement.insertBefore(mountPoint.value, div);
            div === null || div === void 0 ? void 0 : div.remove();
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              id: unref(id),
              style: {
                "display": "none"
              }
            }, [createCommentVNode(" This will be removed once the component is mounted. ")], 8, _hoisted_1$7);
          };
        }
      });

      script$8.__file = "src/Security/Login/htmlRenderer.partial.obs";

      var _hoisted_1$6 = createTextVNode("Log In");
      var _hoisted_2$5 = createTextVNode("Forgot Account");
      var script$7 = defineComponent({
        name: 'credentialLogin.partial',
        props: {
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
          isNewAccountHidden: {
            type: Boolean,
            required: false,
            default: false
          },
          isRememberMeHidden: {
            type: Boolean,
            required: false,
            default: false
          },
          newAccountButtonText: {
            type: String,
            required: false
          },
          promptMessage: {
            type: String,
            required: false
          },
          usernameFieldLabel: {
            type: String,
            required: false
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
          var usernameFieldLabel = computed(() => props.usernameFieldLabel || "Username");
          var newAccountButtonText = computed(() => props.newAccountButtonText || "Register");
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
              default: withCtx(() => [__props.promptMessage ? (openBlock(), createBlock(unref(script$8), {
                key: 0,
                html: __props.promptMessage
              }, null, 8, ["html"])) : createCommentVNode("v-if", true), createVNode(unref(TextBox), {
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
              }, null, 8, ["modelValue", "disabled"]), !__props.isRememberMeHidden ? (openBlock(), createBlock(unref(InlineCheckBox), {
                key: 1,
                modelValue: rememberMe.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => rememberMe.value = $event),
                disabled: __props.disabled,
                label: "Keep me logged in"
              }, null, 8, ["modelValue", "disabled"])) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
                autoDisable: "",
                btnType: unref(BtnType).Primary,
                class: normalizeClass(unref(isMobile) ? 'btn-block' : 'd-inline-block'),
                disabled: __props.disabled,
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_1$6]),
                _: 1
              }, 8, ["btnType", "class", "disabled"]), !__props.isNewAccountHidden ? (openBlock(), createBlock(unref(RockButton), {
                key: 2,
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
                default: withCtx(() => [_hoisted_2$5]),
                _: 1
              }, 8, ["btnType", "class", "disabled"])]),
              _: 1
            });
          };
        }
      });

      script$7.__file = "src/Security/Login/credentialLogin.partial.obs";

      var _withScopeId = n => (pushScopeId("data-v-6419958a"), n = n(), popScopeId(), n);
      var _hoisted_1$5 = _withScopeId(() => createElementVNode("div", {
        class: "rock-divider-line"
      }, null, -1));
      var _hoisted_2$4 = ["innerHTML"];
      var _hoisted_3$1 = {
        key: 1,
        class: "rock-divider-line"
      };
      var script$6 = defineComponent({
        name: 'divider.partial',
        props: {
          isVertical: {
            type: Object,
            required: false,
            default: () => false
          },
          content: {
            type: Object,
            required: false,
            default: () => null
          }
        },
        setup(__props) {
          var props = __props;
          var isContentVisible = computed(() => !!props.content);
          var dividerClassRef = computed(() => "rock-divider".concat(props.isVertical ? " rock-divider-vertical" : ""));
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(unref(dividerClassRef))
            }, [_hoisted_1$5, unref(isContentVisible) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "rock-divider-content",
              innerHTML: __props.content
            }, null, 8, _hoisted_2$4)) : createCommentVNode("v-if", true), unref(isContentVisible) ? (openBlock(), createElementBlock("div", _hoisted_3$1)) : createCommentVNode("v-if", true)], 2);
          };
        }
      });

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z = "[data-v-6419958a]{--var-divider-color:#a4a4a4}.rock-divider[data-v-6419958a]{align-items:center;display:flex;flex-direction:row;margin:2rem 0}.rock-divider-line[data-v-6419958a]{border-top:1px solid var(--var-divider-color);flex:1}.rock-divider-content[data-v-6419958a]{color:var(--var-divider-color);padding:0 1rem}.rock-divider-vertical[data-v-6419958a]{flex-direction:column;margin:0}.rock-divider-vertical .rock-divider-line[data-v-6419958a]{border:0;border-left:1px solid var(--var-divider-color)}";
      styleInject(css_248z);

      script$6.__scopeId = "data-v-6419958a";
      script$6.__file = "src/Security/Login/divider.partial.obs";

      var _hoisted_1$4 = ["innerHTML"];
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
            return openBlock(), createElementBlock(Fragment, null, [unref(hasExternalLogins) && unref(isCaptionNotEmpty) ? (openBlock(), createElementBlock("p", {
              key: 0,
              innerHTML: __props.caption
            }, null, 8, _hoisted_1$4)) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(externalLogins), login => {
              return openBlock(), createBlock(unref(RockButton), {
                btnType: unref(BtnType).Authentication,
                class: normalizeClass(login.cssClass + ' btn-authentication-v2'),
                disabled: __props.disabled,
                onClick: $event => onExternalLoginClick(login)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(login.text), 1)]),
                _: 2
              }, 1032, ["btnType", "class", "disabled", "onClick"]);
            }), 256))], 64);
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
          var internalLoginMethod = useVModelPassthrough(props, "modelValue", emit);
          function onSignInWithAccountClicked() {
            internalLoginMethod.value = LoginMethod.InternalDatabase;
          }
          function onSignInWithEmailOrPhoneClicked() {
            internalLoginMethod.value = LoginMethod.Passwordless;
          }
          return (_ctx, _cache) => {
            return __props.isCredentialLoginSupported && unref(internalLoginMethod) !== unref(LoginMethod).InternalDatabase ? (openBlock(), createBlock(unref(RockButton), {
              key: 0,
              btnType: unref(BtnType).Default,
              class: "btn-block",
              disabled: __props.disabled,
              type: "button",
              onClick: _cache[0] || (_cache[0] = $event => onSignInWithAccountClicked())
            }, {
              default: withCtx(() => [_hoisted_1$3]),
              _: 1
            }, 8, ["btnType", "disabled"])) : __props.isPasswordlessLoginSupported && unref(internalLoginMethod) !== unref(LoginMethod).Passwordless ? (openBlock(), createBlock(unref(RockButton), {
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
        key: 1
      };
      var _hoisted_3 = {
        key: 2,
        class: "login-block"
      };
      var _hoisted_4 = createElementVNode("legend", null, "Log In", -1);
      var _hoisted_5 = {
        key: 1,
        class: "row"
      };
      var _hoisted_6 = ["innerHTML"];
      var _hoisted_7 = ["innerHTML"];
      var script = exports('default', defineComponent({
        name: 'login',
        setup(__props) {
          var _config$passwordlessA, _config$passwordlessA2, _config$twoFactorEmai, _config$twoFactorEmai2, _config$twoFactorLogi, _config$twoFactorLogi2, _config$twoFactorNotS;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var breakpoint = ref("unknown");
          var isMobileForced = !!document.getElementById("splash");
          var isAuthenticating = ref(config.shouldRedirect);
          var completedCaption = ref(null);
          var errorMessage = ref(config.errorMessage || null);
          var criticalErrorMessage = ref(null);
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
          var mfa = ref();
          var twoFactorEmailPhoneNotAvailableMessage = ref((_config$twoFactorEmai = config.twoFactorEmailPhoneNotAvailableMessage) !== null && _config$twoFactorEmai !== void 0 ? _config$twoFactorEmai : "");
          var twoFactorEmailPhoneRequiredMessage = ref((_config$twoFactorEmai2 = config.twoFactorEmailPhoneRequiredMessage) !== null && _config$twoFactorEmai2 !== void 0 ? _config$twoFactorEmai2 : "");
          var twoFactorLoginNotAvailableMessage = ref((_config$twoFactorLogi = config.twoFactorLoginNotAvailableMessage) !== null && _config$twoFactorLogi !== void 0 ? _config$twoFactorLogi : "");
          var twoFactorLoginRequiredMessage = ref((_config$twoFactorLogi2 = config.twoFactorLoginRequiredMessage) !== null && _config$twoFactorLogi2 !== void 0 ? _config$twoFactorLogi2 : "");
          var twoFactorNotSupportedByAuthenticationMethodMessage = ref((_config$twoFactorNotS = config.twoFactorNotSupportedByAuthenticationMethodMessage) !== null && _config$twoFactorNotS !== void 0 ? _config$twoFactorNotS : "");
          var areBothInternalAuthProvidersVisible = computed(() => config.isInternalDatabaseLoginSupported && config.isPasswordlessLoginSupported);
          var isAnyExternalAuthProviderVisible = computed(() => {
            var _config$externalAuthP;
            return !!((_config$externalAuthP = config.externalAuthProviderButtons) !== null && _config$externalAuthP !== void 0 && _config$externalAuthP.length);
          });
          var areSecondaryAndPrimaryAuthVisible = computed(() => {
            var isAnyInternalAuthProviderVisible = config.isInternalDatabaseLoginSupported || config.isPasswordlessLoginSupported;
            return isAnyExternalAuthProviderVisible.value && isAnyInternalAuthProviderVisible || areBothInternalAuthProvidersVisible.value;
          });
          var loginMethod = ref();
          var isMobile = computed(() => isMobileForced || breakpoint.value === "xs");
          var mfaMessage = computed(() => {
            var _mfa$value$passwordle, _mfa$value$credential;
            if (!mfa.value) {
              return null;
            } else if (mfa.value.passwordless && !mfa.value.passwordless.isError) {
              return twoFactorEmailPhoneRequiredMessage.value;
            } else if ((_mfa$value$passwordle = mfa.value.passwordless) !== null && _mfa$value$passwordle !== void 0 && _mfa$value$passwordle.isEmailAndMobilePhoneMissing) {
              return twoFactorEmailPhoneNotAvailableMessage.value;
            } else if (mfa.value.credentialLogin && !mfa.value.credentialLogin.isError) {
              return twoFactorLoginRequiredMessage.value;
            } else if ((_mfa$value$credential = mfa.value.credentialLogin) !== null && _mfa$value$credential !== void 0 && _mfa$value$credential.isUsernameAndPasswordMissing) {
              return twoFactorLoginNotAvailableMessage.value;
            } else if (mfa.value.is2FANotSupportedForAuthenticationFactor) {
              return twoFactorNotSupportedByAuthenticationMethodMessage.value;
            } else {
              return null;
            }
          });
          var currentMfaFactor = computed(() => {
            var mfaDetails = mfa.value;
            if (!mfaDetails) {
              return null;
            }
            if (mfaDetails.credentialLogin) {
              return LoginMethod.InternalDatabase;
            }
            if (mfaDetails.passwordless) {
              return LoginMethod.Passwordless;
            }
            console.error("Unknown MFA factor");
            return null;
          });
          function onCredentialLogin(_x) {
            return _onCredentialLogin.apply(this, arguments);
          }
          function _onCredentialLogin() {
            _onCredentialLogin = _asyncToGenerator(function* (bag) {
              isAuthenticating.value = true;
              try {
                var _mfa$value5;
                bag.mfaTicket = (_mfa$value5 = mfa.value) === null || _mfa$value5 === void 0 ? void 0 : _mfa$value5.ticket;
                var response = yield invokeBlockAction("CredentialLogin", {
                  bag
                });
                var responseBag = response === null || response === void 0 ? void 0 : response.data;
                if (!(response !== null && response !== void 0 && response.isSuccess) || !responseBag) {
                  uiState.error({
                    errorMessage: (response === null || response === void 0 ? void 0 : response.errorMessage) || "Something went wrong. Please try again."
                  });
                  return;
                }
                if (responseBag.isLockedOut) {
                  var _responseBag$errorMes;
                  uiState.criticalError({
                    errorMessage: (_responseBag$errorMes = responseBag.errorMessage) !== null && _responseBag$errorMes !== void 0 ? _responseBag$errorMes : null
                  });
                  return;
                }
                if (responseBag.isAuthenticated) {
                  uiState.valid();
                  yield navigate(responseBag.redirectUrl || "/");
                  return;
                }
                if (responseBag.isConfirmationRequired) {
                  uiState.confirmationRequired({
                    caption: responseBag.errorMessage || response.errorMessage
                  });
                  return;
                }
                if (responseBag.mfa) {
                  var _responseBag$mfa$tick;
                  uiState.initMfaFactor({
                    mfa: {
                      passwordless: responseBag.mfa,
                      ticket: (_responseBag$mfa$tick = responseBag.mfa.ticket) !== null && _responseBag$mfa$tick !== void 0 ? _responseBag$mfa$tick : null
                    },
                    loginMethod: LoginMethod.Passwordless
                  });
                  return;
                }
                uiState.error({
                  errorMessage: responseBag.errorMessage || "Authentication failed. Please try again."
                });
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
                authenticationType: externalLogin.authenticationType,
                route: location.pathname
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
                uiState.error({
                  errorMessage: response === null || response === void 0 ? void 0 : response.errorMessage
                });
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
          function onLoginMethodPickerChanged(value) {
            if (typeof value !== "undefined") {
              uiState.init({
                loginMethod: value
              });
            }
          }
          function onPasswordlessLoginStart(_x3) {
            return _onPasswordlessLoginStart.apply(this, arguments);
          }
          function _onPasswordlessLoginStart() {
            _onPasswordlessLoginStart = _asyncToGenerator(function* (bag) {
              isAuthenticating.value = true;
              uiState.valid();
              try {
                var _mfa$value6, _response$data2;
                bag.mfaTicket = (_mfa$value6 = mfa.value) === null || _mfa$value6 === void 0 ? void 0 : _mfa$value6.ticket;
                var response = yield invokeBlockAction("PasswordlessLoginStart", {
                  bag
                });
                if (!(response !== null && response !== void 0 && response.isSuccess) || !response.data) {
                  uiState.error({
                    errorMessage: (response === null || response === void 0 ? void 0 : response.errorMessage) || "Something went wrong. Please try again."
                  });
                  return;
                }
                if (response.data.isSuccessful) {
                  passwordlessLoginOptions.value = _objectSpread2(_objectSpread2({}, passwordlessLoginOptions.value), {}, {
                    state: response.data.state || "",
                    step: PasswordlessLoginStep.Verify
                  });
                  loginMethod.value = LoginMethod.Passwordless;
                  return;
                }
                passwordlessLoginOptions.value = _objectSpread2(_objectSpread2({}, passwordlessLoginOptions.value), {}, {
                  step: PasswordlessLoginStep.Start
                });
                loginMethod.value = LoginMethod.Passwordless;
                uiState.error({
                  errorMessage: (response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.errorMessage) || (response === null || response === void 0 ? void 0 : response.errorMessage) || "An unknown error occurred. Please submit email or phone number again."
                });
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
              uiState.valid();
              try {
                var _mfa$value7, _response$data$errorM;
                bag.mfaTicket = (_mfa$value7 = mfa.value) === null || _mfa$value7 === void 0 ? void 0 : _mfa$value7.ticket;
                var response = yield invokeBlockAction("PasswordlessLoginVerify", {
                  bag
                });
                if (!response || !response.isSuccess || !response.data) {
                  uiState.error({
                    errorMessage: "Something went wrong. Please try again."
                  });
                  return;
                }
                if (response.data.isAuthenticated) {
                  uiState.valid();
                  yield navigate(config.redirectUrl || "/");
                  return;
                }
                if (response.data.mfa) {
                  var _response$data$mfa$ti;
                  uiState.initMfaFactor({
                    mfa: {
                      credentialLogin: response.data.mfa,
                      ticket: (_response$data$mfa$ti = response.data.mfa.ticket) !== null && _response$data$mfa$ti !== void 0 ? _response$data$mfa$ti : null
                    },
                    loginMethod: LoginMethod.InternalDatabase
                  });
                  return;
                }
                if (response.data.isRegistrationRequired) {
                  if (!response.data.registrationUrl) {
                    uiState.error({
                      errorMessage: "Redirecting to default registration page"
                    });
                  }
                  yield navigate(response.data.registrationUrl || "/NewAccount");
                  return;
                }
                if (response.data.isPersonSelectionRequired) {
                  passwordlessLoginOptions.value = _objectSpread2(_objectSpread2({}, passwordlessLoginOptions.value), {}, {
                    isPersonSelectionRequired: true,
                    matchingPeople: response.data.matchingPeople || []
                  });
                  loginMethod.value = LoginMethod.Passwordless;
                  return;
                }
                uiState.error({
                  errorMessage: (_response$data$errorM = response.data.errorMessage) !== null && _response$data$errorM !== void 0 ? _response$data$errorM : "Authentication failed. Please try again."
                });
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
          function getInitialLoginMethod() {
            var configuredDefaultLoginMethod = config.defaultLoginMethod;
            if (config.passwordlessAutoVerifyOptions) {
              return LoginMethod.Passwordless;
            }
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
          function getErrorOrDefault(error) {
            return error || "An unknown error occurred";
          }
          var uiState = {
            init(state) {
              errorMessage.value = null;
              loginMethod.value = state.loginMethod;
              mfa.value = null;
            },
            initMfaFactor(state) {
              errorMessage.value = null;
              loginMethod.value = state.loginMethod;
              mfa.value = state.mfa;
            },
            criticalError(state) {
              criticalErrorMessage.value = state.errorMessage;
            },
            error(state) {
              errorMessage.value = getErrorOrDefault(state.errorMessage);
            },
            valid() {
              errorMessage.value = null;
            },
            confirmationRequired(state) {
              errorMessage.value = null;
              mfa.value = null;
              showCompleted(state.caption);
            },
            passwordlessCodeSent() {
              errorMessage.value = null;
            },
            passwordlessResendCode() {
              errorMessage.value = null;
            },
            unsupportedMfaFactor() {
              errorMessage.value = null;
              mfa.value = {
                is2FANotSupportedForAuthenticationFactor: true,
                ticket: null,
                credentialLogin: null,
                passwordless: null
              };
            }
          };
          onMounted(() => {
            if (config.shouldRedirect) {
              navigate(config.redirectUrl ? config.redirectUrl : "/");
              return;
            }
            if (mfaParameter) {
              uiState.initMfaFactor({
                mfa: {
                  credentialLogin: null,
                  passwordless: {
                    isEmailAndMobilePhoneMissing: false,
                    isError: false
                  },
                  ticket: mfaParameter
                },
                loginMethod: LoginMethod.Passwordless
              });
            } else if (config.is2FANotSupportedForAuthenticationFactor) {
              uiState.unsupportedMfaFactor();
            } else {
              uiState.init({
                loginMethod: getInitialLoginMethod()
              });
            }
          });
          var _removeCurrentUrlQuer = removeCurrentUrlQueryParams("Mfa", "State", "Code", "IsPasswordless", "state", "code", "scope", "authuser", "prompt"),
            _removeCurrentUrlQuer2 = _toArray(_removeCurrentUrlQuer),
            mfaParameter = _removeCurrentUrlQuer2[0];
            _removeCurrentUrlQuer2.slice(1);
          onConfigurationValuesChanged(useReloadBlock());
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$9), {
              onBreakpoint: _cache[7] || (_cache[7] = value => breakpoint.value = value)
            }, {
              default: withCtx(() => {
                var _unref$configurationE, _unref$remoteAuthoriz, _mfa$value, _mfa$value2, _mfa$value2$credentia, _mfa$value3, _mfa$value4, _mfa$value4$passwordl;
                return [createElementVNode("div", null, [criticalErrorMessage.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(NotificationBox), {
                  alertType: "danger",
                  innerHTML: criticalErrorMessage.value
                }, null, 8, ["innerHTML"])])) : isCompleted.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(NotificationBox), {
                  alertType: "warning",
                  innerHTML: completedCaption.value
                }, null, 8, ["innerHTML"])])) : (openBlock(), createElementBlock("div", _hoisted_3, [createElementVNode("fieldset", null, [_hoisted_4, (_unref$configurationE = unref(config).configurationErrors) !== null && _unref$configurationE !== void 0 && _unref$configurationE.length ? (openBlock(true), createElementBlock(Fragment, {
                  key: 0
                }, renderList(unref(config).configurationErrors, configError => {
                  return openBlock(), createBlock(unref(NotificationBox), {
                    alertType: "warning",
                    textContent: toDisplayString(configError)
                  }, null, 8, ["textContent"]);
                }), 256)) : createCommentVNode("v-if", true), unref(config).errorMessage ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(NotificationBox), {
                  alertType: "danger",
                  class: "col-sm-12",
                  innerHTML: unref(config).errorMessage
                }, null, 8, ["innerHTML"])])) : createCommentVNode("v-if", true), createElementVNode("div", {
                  class: normalizeClass(['row', unref(isMobile) ? 'mobile-layout' : 'd-flex'])
                }, [unref(isAnyExternalAuthProviderVisible) || unref(areBothInternalAuthProvidersVisible) ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(['login-methods', isMobileForced ? 'col-sm-12' : 'col-sm-5', 'remote-logins'])
                }, [unref(isAnyExternalAuthProviderVisible) ? (openBlock(), createBlock(unref(script$5), {
                  key: 0,
                  modelValue: unref(config).externalAuthProviderButtons || [],
                  caption: (_unref$remoteAuthoriz = unref(config).remoteAuthorizationPromptMessage) !== null && _unref$remoteAuthoriz !== void 0 ? _unref$remoteAuthoriz : '',
                  disabled: isAuthenticating.value || isNavigating.value,
                  onLogin: _cache[0] || (_cache[0] = $event => onExternalLogin($event))
                }, null, 8, ["modelValue", "caption", "disabled"])) : createCommentVNode("v-if", true), unref(areBothInternalAuthProvidersVisible) ? (openBlock(), createBlock(unref(script$4), {
                  key: 1,
                  modelValue: loginMethod.value,
                  disabled: isAuthenticating.value || isNavigating.value,
                  isCredentialLoginSupported: unref(config).isInternalDatabaseLoginSupported,
                  isPasswordlessLoginSupported: unref(config).isPasswordlessLoginSupported,
                  "onUpdate:modelValue": onLoginMethodPickerChanged
                }, null, 8, ["modelValue", "disabled", "isCredentialLoginSupported", "isPasswordlessLoginSupported"])) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true), unref(areSecondaryAndPrimaryAuthVisible) ? (openBlock(), createBlock(unref(script$6), {
                  key: 1,
                  class: normalizeClass(isMobileForced ? 'col-sm-12' : 'col-sm-1'),
                  content: "or",
                  isVertical: !unref(isMobile)
                }, null, 8, ["class", "isVertical"])) : createCommentVNode("v-if", true), createElementVNode("div", {
                  class: normalizeClass(['login-entry', isMobileForced || !unref(isAnyExternalAuthProviderVisible) && !unref(areBothInternalAuthProvidersVisible) ? 'col-sm-12' : 'col-sm-6'])
                }, [unref(mfaMessage) ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  innerHTML: unref(mfaMessage)
                }, null, 8, _hoisted_6)) : createCommentVNode("v-if", true), loginMethod.value === unref(LoginMethod).InternalDatabase && (unref(config).isInternalDatabaseLoginSupported && !((_mfa$value = mfa.value) !== null && _mfa$value !== void 0 && _mfa$value.credentialLogin) || ((_mfa$value2 = mfa.value) === null || _mfa$value2 === void 0 ? void 0 : (_mfa$value2$credentia = _mfa$value2.credentialLogin) === null || _mfa$value2$credentia === void 0 ? void 0 : _mfa$value2$credentia.isError) === false) ? (openBlock(), createBlock(unref(script$7), {
                  key: 1,
                  disabled: isAuthenticating.value || isNavigating.value,
                  isMobileForced: isMobileForced,
                  isNewAccountHidden: unref(currentMfaFactor) === unref(LoginMethod).InternalDatabase || unref(config).hideNewAccountOption,
                  isRememberMeHidden: unref(currentMfaFactor) === unref(LoginMethod).InternalDatabase,
                  newAccountButtonText: unref(config).newAccountButtonText,
                  promptMessage: unref(config).promptMessage,
                  usernameFieldLabel: unref(config).usernameFieldLabel,
                  onForgotAccount: _cache[1] || (_cache[1] = $event => onForgotAccount()),
                  onLogin: _cache[2] || (_cache[2] = $event => onCredentialLogin($event)),
                  onRegister: _cache[3] || (_cache[3] = $event => onRegister())
                }, null, 8, ["disabled", "isNewAccountHidden", "isRememberMeHidden", "newAccountButtonText", "promptMessage", "usernameFieldLabel"])) : loginMethod.value !== unref(LoginMethod).InternalDatabase && (unref(config).isPasswordlessLoginSupported && !((_mfa$value3 = mfa.value) !== null && _mfa$value3 !== void 0 && _mfa$value3.passwordless) || ((_mfa$value4 = mfa.value) === null || _mfa$value4 === void 0 ? void 0 : (_mfa$value4$passwordl = _mfa$value4.passwordless) === null || _mfa$value4$passwordl === void 0 ? void 0 : _mfa$value4$passwordl.isError) === false) ? (openBlock(), createBlock(unref(script$1), {
                  key: 2,
                  modelValue: passwordlessLoginOptions.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => passwordlessLoginOptions.value = $event),
                  config: unref(config),
                  disabled: isAuthenticating.value || isNavigating.value,
                  isMobileForced: isMobileForced,
                  onStart: _cache[5] || (_cache[5] = $event => onPasswordlessLoginStart($event)),
                  onVerify: _cache[6] || (_cache[6] = $event => onPasswordlessLoginVerify($event))
                }, null, 8, ["modelValue", "config", "disabled"])) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 3,
                  alertType: "warning",
                  class: "block-message margin-t-md",
                  innerHTML: errorMessage.value
                }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true)], 2)], 2)]), unref(config).contentText ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "mt-3",
                  innerHTML: unref(config).contentText
                }, null, 8, _hoisted_7)) : createCommentVNode("v-if", true)]))])];
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
