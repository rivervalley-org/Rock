System.register(['@Obsidian/Utility/component', '@Obsidian/Utility/http', 'vue', './baseAsyncPicker'], (function (exports) {
  'use strict';
  var useVModelPassthrough, useStandardAsyncPickerProps, standardAsyncPickerProps, useHttp, defineComponent, ref, computed, watch, BaseAsyncPicker;
  return {
    setters: [function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
      standardAsyncPickerProps = module.standardAsyncPickerProps;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      BaseAsyncPicker = module["default"];
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

      var financialGatewayPicker = exports('default', defineComponent({
        name: "FinancialGatewayPicker",
        components: {
          BaseAsyncPicker
        },
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          includeInactive: {
            type: Boolean,
            default: false
          },
          showAllGatewayComponents: {
            type: Boolean,
            default: false
          }
        }, standardAsyncPickerProps),
        emits: {
          "update:modelValue": _value => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var standardProps = useStandardAsyncPickerProps(props);
          var http = useHttp();
          var loadedItems = ref(null);
          var actualItems = computed(() => {
            return loadedItems.value || loadOptions;
          });
          var loadOptions = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var options = {
                includeInactive: props.includeInactive,
                showAllGatewayComponents: props.showAllGatewayComponents
              };
              var result = yield http.post("/api/v2/Controls/FinancialGatewayPickerGetFinancialGateways", undefined, options);
              if (result.isSuccess && result.data) {
                var items = result.data;
                if (internalValue.value && Array.isArray(internalValue.value)) {
                  items = internalValue.value.filter(gateway => !items.some(item => item.value === gateway.value)).concat(items);
                } else if (internalValue.value && !Array.isArray(internalValue.value) && internalValue.value.value && !items.some(item => item.value === internalValue.value.value)) {
                  items.unshift(internalValue.value);
                }
                loadedItems.value = items;
                return items;
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                loadedItems.value = [];
                return [];
              }
            });
            return function loadOptions() {
              return _ref2.apply(this, arguments);
            };
          }();
          watch(() => props.includeInactive, () => {
            loadedItems.value = null;
          });
          watch(() => props.showAllGatewayComponents, () => {
            loadedItems.value = null;
          });
          return {
            actualItems,
            internalValue,
            standardProps
          };
        },
        template: "\n<BaseAsyncPicker v-model=\"internalValue\"\n    v-bind=\"standardProps\"\n    :items=\"actualItems\" />\n"
      }));

    })
  };
}));
//# sourceMappingURL=financialGatewayPicker.js.map
