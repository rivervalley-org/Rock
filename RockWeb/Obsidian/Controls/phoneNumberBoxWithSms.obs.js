System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/ValidationRules', '@Obsidian/Utility/phone', './rockFormField.obs', './inputGroupDropDown.obs', '@Obsidian/Controls/checkBox.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, mergeProps, withCtx, normalizeClass, createElementBlock, withDirectives, vModelText, createVNode, createCommentVNode, useStandardRockFormFieldProps, standardRockFormFieldProps, normalizeRules, formatPhoneNumber, stripPhoneNumber, getPhoneNumberAndSmsConfiguration, RockFormField, InputGroupDropDown, CheckBox;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      normalizeClass = module.normalizeClass;
      createElementBlock = module.createElementBlock;
      withDirectives = module.withDirectives;
      vModelText = module.vModelText;
      createVNode = module.createVNode;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      normalizeRules = module.normalizeRules;
    }, function (module) {
      formatPhoneNumber = module.formatPhoneNumber;
      stripPhoneNumber = module.stripPhoneNumber;
      getPhoneNumberAndSmsConfiguration = module.getPhoneNumberAndSmsConfiguration;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      InputGroupDropDown = module["default"];
    }, function (module) {
      CheckBox = module["default"];
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

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        key: 0,
        class: "input-group-addon"
      };
      var _hoisted_3 = createElementVNode("i", {
        class: "fa fa-phone-square"
      }, null, -1);
      var _hoisted_4 = [_hoisted_3];
      var _hoisted_5 = ["id"];
      var _hoisted_6 = {
        key: 0
      };
      var script = exports('default', defineComponent({
        name: 'phoneNumberBoxWithSms',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          inputGroupClasses: {
            type: String,
            default: ""
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue$num, _props$modelValue, _props$modelValue$num2, _props$modelValue$cou, _props$modelValue2, _props$modelValue2$co, _props$modelValue$isM, _props$modelValue3;
          var emit = _ref.emit;
          var props = __props;
          var formFieldProps = useStandardRockFormFieldProps(props);
          var configuration = ref(null);
          var number = ref(formatPhoneNumber((_props$modelValue$num = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : (_props$modelValue$num2 = _props$modelValue.number) === null || _props$modelValue$num2 === void 0 ? void 0 : _props$modelValue$num2.toString()) !== null && _props$modelValue$num !== void 0 ? _props$modelValue$num : ""));
          var countryCode = ref((_props$modelValue$cou = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : (_props$modelValue2$co = _props$modelValue2.countryCode) === null || _props$modelValue2$co === void 0 ? void 0 : _props$modelValue2$co.toString()) !== null && _props$modelValue$cou !== void 0 ? _props$modelValue$cou : "");
          var isMessagingEnabled = ref((_props$modelValue$isM = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.isMessagingEnabled) !== null && _props$modelValue$isM !== void 0 ? _props$modelValue$isM : false);
          var autoSyncModelValue = true;
          var rules = computed(() => {
            var rules = normalizeRules(props.rules);
            rules.push(validatePhoneNumber);
            return rules;
          });
          var availableCountryCodes = computed(() => {
            var _configuration$value$, _configuration$value;
            return Object.keys((_configuration$value$ = (_configuration$value = configuration.value) === null || _configuration$value === void 0 ? void 0 : _configuration$value.rules) !== null && _configuration$value$ !== void 0 ? _configuration$value$ : {});
          });
          var availableCountryCodeOptions = computed(() => {
            if (availableCountryCodes.value.length == 0) {
              return [{
                value: "1",
                text: "1"
              }];
            }
            return availableCountryCodes.value.map(val => ({
              value: val,
              text: val
            }));
          });
          var smsOptInText = computed(() => {
            var _configuration$value$2, _configuration$value2;
            return (_configuration$value$2 = (_configuration$value2 = configuration.value) === null || _configuration$value2 === void 0 ? void 0 : _configuration$value2.smsOptInText) !== null && _configuration$value$2 !== void 0 ? _configuration$value$2 : "";
          });
          var showSmsOptIn = computed(() => {
            return smsOptInText.value.length > 0;
          });
          function validatePhoneNumber(value) {
            var rules = getConfiguredRules();
            if (!value || typeof value !== "string" || rules.length == 0) {
              return true;
            }
            for (var _i = 0, _rules = rules; _i < _rules.length; _i++) {
              var _rule$match;
              var rule = _rules[_i];
              var regex = new RegExp((_rule$match = rule.match) !== null && _rule$match !== void 0 ? _rule$match : "");
              var unformattedPhoneNumberToValidate = stripPhoneNumber(value);
              if (regex.test(unformattedPhoneNumberToValidate)) {
                return true;
              }
            }
            return "The phone number '".concat(value, "' is not a valid phone number.");
          }
          function loadConfiguration() {
            return _loadConfiguration.apply(this, arguments);
          }
          function _loadConfiguration() {
            _loadConfiguration = _asyncToGenerator(function* () {
              try {
                var result = yield getPhoneNumberAndSmsConfiguration();
                if (result) {
                  var _result$defaultCountr;
                  configuration.value = result;
                  countryCode.value || (countryCode.value = (_result$defaultCountr = result.defaultCountryCode) !== null && _result$defaultCountr !== void 0 ? _result$defaultCountr : "");
                } else {
                  console.error("Unknown error while loading phone number configuration.");
                }
              } catch (e) {
                console.error(e !== null && e !== void 0 ? e : "Unknown error while loading phone number configuration.");
              }
            });
            return _loadConfiguration.apply(this, arguments);
          }
          function getConfiguredRules() {
            var _configuration$value$3, _configuration$value3, _configuration$value4;
            var temp = (_configuration$value$3 = (_configuration$value3 = configuration.value) === null || _configuration$value3 === void 0 ? void 0 : (_configuration$value4 = _configuration$value3.rules) === null || _configuration$value4 === void 0 ? void 0 : _configuration$value4[countryCode.value]) !== null && _configuration$value$3 !== void 0 ? _configuration$value$3 : [];
            return temp;
          }
          function onChange() {
            number.value = formatPhoneNumber(number.value);
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$cou2, _props$modelValue4, _props$modelValue4$co, _props$modelValue$num3, _props$modelValue5, _props$modelValue5$nu, _props$modelValue$isM2, _props$modelValue6;
            console.log("watch() props.modelValue");
            autoSyncModelValue = false;
            countryCode.value = (_props$modelValue$cou2 = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : (_props$modelValue4$co = _props$modelValue4.countryCode) === null || _props$modelValue4$co === void 0 ? void 0 : _props$modelValue4$co.toString()) !== null && _props$modelValue$cou2 !== void 0 ? _props$modelValue$cou2 : "";
            number.value = formatPhoneNumber((_props$modelValue$num3 = (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : (_props$modelValue5$nu = _props$modelValue5.number) === null || _props$modelValue5$nu === void 0 ? void 0 : _props$modelValue5$nu.toString()) !== null && _props$modelValue$num3 !== void 0 ? _props$modelValue$num3 : "");
            isMessagingEnabled.value = (_props$modelValue$isM2 = (_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.isMessagingEnabled) !== null && _props$modelValue$isM2 !== void 0 ? _props$modelValue$isM2 : false;
            autoSyncModelValue = true;
          });
          watch([countryCode, number, isMessagingEnabled], () => {
            var _countryCode$value, _number$value;
            console.log("watch([countryCode, number, isMessagingEnabled]");
            if (!autoSyncModelValue) {
              return;
            }
            var value = {
              countryCode: (_countryCode$value = countryCode.value) !== null && _countryCode$value !== void 0 ? _countryCode$value : undefined,
              number: (_number$value = number.value) !== null && _number$value !== void 0 ? _number$value : undefined,
              isMessagingEnabled: isMessagingEnabled.value
            };
            emit("update:modelValue", value);
          });
          loadConfiguration();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: number.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => number.value = $event)
            }, unref(formFieldProps), {
              onChange: onChange,
              formGroupClasses: "rock-phonenumber-box",
              rules: unref(rules),
              name: "phonenumberbox"
            }), {
              default: withCtx(_ref2 => {
                var _unref2, _unref3;
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", {
                  class: normalizeClass(["input-group phone-number-box", __props.inputGroupClasses])
                }, [unref(availableCountryCodeOptions).length < 2 ? (openBlock(), createElementBlock("span", _hoisted_2, _hoisted_4)) : (openBlock(), createBlock(unref(InputGroupDropDown), {
                  key: 1,
                  items: unref(availableCountryCodeOptions),
                  modelValue: countryCode.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => countryCode.value = $event),
                  inputGroupClasses: "input-group-addon"
                }, null, 8, ["items", "modelValue"])), withDirectives(createElementVNode("input", mergeProps({
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => number.value = $event),
                  id: uniqueId,
                  type: "text",
                  class: "form-control"
                }, field), null, 16, _hoisted_5), [[vModelText, number.value]])], 2), ((_unref2 = unref(showSmsOptIn)) !== null && _unref2 !== void 0 ? _unref2 : false) ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(unref(CheckBox), {
                  modelValue: isMessagingEnabled.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isMessagingEnabled.value = $event),
                  label: "",
                  text: (_unref3 = unref(smsOptInText)) !== null && _unref3 !== void 0 ? _unref3 : ''
                }, null, 8, ["modelValue", "text"])])) : createCommentVNode("v-if", true)])];
              }),
              _: 1
            }, 16, ["modelValue", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/phoneNumberBoxWithSms.obs";

    })
  };
}));
//# sourceMappingURL=phoneNumberBoxWithSms.obs.js.map
