System.register(['vue', './rockFormField', '@Obsidian/Utility/component', '@Obsidian/ValidationRules', '@Obsidian/Utility/phone', './inputGroupDropDown.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, mergeProps, isRef, withCtx, normalizeClass, createElementBlock, withDirectives, vModelText, RockFormField, useVModelPassthrough, useStandardRockFormFieldProps, standardRockFormFieldProps, normalizeRules, stripPhoneNumber, formatPhoneNumber, getPhoneNumberConfiguration, InputGroupDropDown;
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
      isRef = module.isRef;
      withCtx = module.withCtx;
      normalizeClass = module.normalizeClass;
      createElementBlock = module.createElementBlock;
      withDirectives = module.withDirectives;
      vModelText = module.vModelText;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      normalizeRules = module.normalizeRules;
    }, function (module) {
      stripPhoneNumber = module.stripPhoneNumber;
      formatPhoneNumber = module.formatPhoneNumber;
      getPhoneNumberConfiguration = module.getPhoneNumberConfiguration;
    }, function (module) {
      InputGroupDropDown = module["default"];
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
      var script = exports('default', defineComponent({
        name: 'phoneNumberBox',
        props: _objectSpread2({
          modelValue: {
            type: String,
            default: ""
          },
          countryCode: {
            type: String,
            default: ""
          },
          inputGroupClasses: {
            type: String,
            default: ""
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue", "update:countryCode"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var countryCode = useVModelPassthrough(props, "countryCode", emit);
          var formFieldProps = useStandardRockFormFieldProps(props);
          var configuration = ref(null);
          var strippedValue = computed(() => {
            return stripPhoneNumber(internalValue.value);
          });
          var formattedValue = computed(() => {
            return formatPhoneNumber(strippedValue.value, getConfiguredRules());
          });
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
          function validatePhoneNumber(value) {
            var rules = getConfiguredRules();
            if (!value) {
              return true;
            }
            if (rules.length == 0) {
              return true;
            }
            for (var _i = 0, _rules = rules; _i < _rules.length; _i++) {
              var _rule$match;
              var rule = _rules[_i];
              var regex = new RegExp((_rule$match = rule.match) !== null && _rule$match !== void 0 ? _rule$match : "");
              if (regex.test(strippedValue.value)) {
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
                var result = yield getPhoneNumberConfiguration();
                if (result) {
                  configuration.value = result;
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
            var _configuration$value$2, _configuration$value2, _configuration$value3;
            return (_configuration$value$2 = (_configuration$value2 = configuration.value) === null || _configuration$value2 === void 0 ? void 0 : (_configuration$value3 = _configuration$value2.rules) === null || _configuration$value3 === void 0 ? void 0 : _configuration$value3[countryCode.value]) !== null && _configuration$value$2 !== void 0 ? _configuration$value$2 : [];
          }
          function onChange() {
            internalValue.value = formattedValue.value;
          }
          watch(formattedValue, () => {
            emit("update:modelValue", formattedValue.value);
          }, {
            immediate: true
          });
          watch(() => props.modelValue, () => {
            internalValue.value = formattedValue.value;
          }, {
            immediate: true
          });
          watch([configuration, availableCountryCodes], () => {
            if (configuration.value == null || availableCountryCodes.value.length == 0) return;
            if (countryCode.value == null || !availableCountryCodes.value.includes(countryCode.value)) {
              countryCode.value = availableCountryCodes.value[0];
            }
          });
          loadConfiguration();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(internalValue) ? internalValue.value = $event : null)
            }, unref(formFieldProps), {
              onChange: onChange,
              formGroupClasses: "rock-phonenumber-box",
              rules: unref(rules),
              name: "phonenumberbox"
            }), {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", {
                  class: normalizeClass(["input-group phone-number-box", __props.inputGroupClasses])
                }, [unref(availableCountryCodeOptions).length < 2 ? (openBlock(), createElementBlock("span", _hoisted_2, _hoisted_4)) : (openBlock(), createBlock(unref(InputGroupDropDown), {
                  key: 1,
                  items: unref(availableCountryCodeOptions),
                  modelValue: unref(countryCode),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(countryCode) ? countryCode.value = $event : null),
                  inputGroupClasses: "input-group-addon"
                }, null, 8, ["items", "modelValue"])), withDirectives(createElementVNode("input", mergeProps({
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  id: uniqueId,
                  type: "text",
                  class: "form-control"
                }, field), null, 16, _hoisted_5), [[vModelText, unref(internalValue)]])], 2)])];
              }),
              _: 1
            }, 16, ["modelValue", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/phoneNumberBox.obs";

    })
  };
}));
//# sourceMappingURL=phoneNumberBox.obs.js.map
