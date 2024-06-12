System.register(['vue', '@Obsidian/Controls/rockFormField.obs', '@Obsidian/Utility/http', '@Obsidian/ValidationRules', '@Obsidian/Utility/component', '@Obsidian/Utility/page', '@Obsidian/Utility/guid', '@Obsidian/Utility/promiseUtils'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, onMounted, onUnmounted, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, RockFormField, useHttp, normalizeRules, containsRequiredRule, useStandardRockFormFieldProps, standardRockFormFieldProps, loadJavaScriptAsync, newGuid, PromiseCompletionSource;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      onMounted = module.onMounted;
      onUnmounted = module.onUnmounted;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      normalizeRules = module.normalizeRules;
      containsRequiredRule = module.containsRequiredRule;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      loadJavaScriptAsync = module.loadJavaScriptAsync;
    }, function (module) {
      newGuid = module.newGuid;
    }, function (module) {
      PromiseCompletionSource = module.PromiseCompletionSource;
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

      var script = exports('default', defineComponent({
        name: 'captcha',
        props: _objectSpread2({
          performValidation: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["tokenValidated"],
        setup(__props, _ref) {
          var expose = _ref.expose,
            emit = _ref.emit;
          var props = __props;
          expose({
            getToken,
            refreshToken
          });
          var fieldProps = useStandardRockFormFieldProps(props);
          var internalValue = ref("");
          var http = useHttp();
          var widgetId = ref("");
          var turnstileBoxId = "turnstile-box-".concat(newGuid());
          var turnstile;
          var captchaPromiseSource = new PromiseCompletionSource();
          var computedRules = computed(() => {
            var rules = normalizeRules(props.rules);
            if (containsRequiredRule(rules)) {
              rules.push(requiredValidator);
            }
            return rules;
          });
          function getConfiguration() {
            return _getConfiguration.apply(this, arguments);
          }
          function _getConfiguration() {
            _getConfiguration = _asyncToGenerator(function* () {
              try {
                var result = yield http.post("/api/v2/Controls/CaptchaControlGetConfiguration");
                if (result.isSuccess && result.data) {
                  return result.data;
                } else {
                  var _result$errorMessage;
                  console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading captcha configuration.");
                }
              } catch (error) {
                console.error("Unknown error while loading captcha configuration.");
              }
            });
            return _getConfiguration.apply(this, arguments);
          }
          function validateToken(_x) {
            return _validateToken.apply(this, arguments);
          }
          function _validateToken() {
            _validateToken = _asyncToGenerator(function* (token) {
              var options = {
                token: token
              };
              try {
                var result = yield http.post("/api/v2/Controls/CaptchaControlValidateToken", undefined, options);
                if (result.isSuccess && result.data) {
                  return result.data;
                } else {
                  var _result$errorMessage2;
                  console.error((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while validating token.");
                }
              } catch (error) {
                console.error("Unknown error while validating token.");
              }
            });
            return _validateToken.apply(this, arguments);
          }
          function getToken() {
            return captchaPromiseSource.promise;
          }
          function refreshToken() {
            if (widgetId.value && turnstile) {
              captchaPromiseSource.resolve(undefined);
              captchaPromiseSource = new PromiseCompletionSource();
              internalValue.value = "";
              turnstile.reset(widgetId.value);
            }
          }
          function renderCaptchaControl(siteKey) {
            if (turnstile) {
              widgetId.value = turnstile.render("#".concat(turnstileBoxId), {
                sitekey: siteKey,
                "callback": callback,
                "error-callback": errorCallback,
                "expired-callback": expiredCallback
              });
            }
          }
          function callback(_x2) {
            return _callback.apply(this, arguments);
          }
          function _callback() {
            _callback = _asyncToGenerator(function* (response) {
              if (props.performValidation) {
                var _result$isTokenValid;
                var result = yield validateToken(response);
                emit("tokenValidated", (_result$isTokenValid = result === null || result === void 0 ? void 0 : result.isTokenValid) !== null && _result$isTokenValid !== void 0 ? _result$isTokenValid : false);
                internalValue.value = result !== null && result !== void 0 && result.isTokenValid ? response : "";
              } else {
                captchaPromiseSource.resolve(response);
                internalValue.value = response;
              }
            });
            return _callback.apply(this, arguments);
          }
          function errorCallback(error) {
            console.error("Captcha challenge failed.", error);
            internalValue.value = "";
            captchaPromiseSource.reject("Captcha challenge failed.");
          }
          function expiredCallback() {
            refreshToken();
          }
          function requiredValidator(value) {
            var invalidMessage = "is required";
            if (!value) {
              return invalidMessage;
            }
            return true;
          }
          onMounted(_asyncToGenerator(function* () {
            var config = yield getConfiguration();
            if (config !== null && config !== void 0 && config.siteKey) {
              yield loadJavaScriptAsync("https://challenges.cloudflare.com/turnstile/v0/api.js", () => !!window["turnstile"]);
              turnstile = window["turnstile"];
              renderCaptchaControl(config.siteKey);
            } else {
              captchaPromiseSource.resolve("");
            }
          }));
          onUnmounted(() => {
            if (widgetId.value && turnstile) {
              turnstile.remove(widgetId.value);
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps(unref(fieldProps), {
              rules: unref(computedRules),
              name: "captchaContent",
              modelValue: internalValue.value
            }), {
              default: withCtx(() => [createElementVNode("div", {
                class: "control-wrapper"
              }, [createElementVNode("div", {
                id: turnstileBoxId
              })])]),
              _: 1
            }, 16, ["rules", "modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/captcha.obs";

    })
  };
}));
//# sourceMappingURL=captcha.obs.js.map
