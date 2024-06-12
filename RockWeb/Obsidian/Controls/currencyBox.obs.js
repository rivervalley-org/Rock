System.register(['vue', './numberBox.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/http', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createBlock, unref, isRef, withCtx, createElementVNode, toDisplayString, NumberBox, useVModelPassthrough, useHttp, toGuidOrNull, emptyGuid;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
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
        class: "input-group-addon"
      };
      var script = exports('default', defineComponent({
        name: 'currencyBox',
        props: {
          modelValue: {
            type: Number,
            default: null
          },
          minimumValue: {
            type: Number
          },
          maximumValue: {
            type: Number
          },
          currencyCodeDefinedValueGuid: {
            type: String
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var decimalPlaces = ref(2);
          var symbol = ref("$");
          var http = useHttp();
          var placeholder = computed(() => {
            return 0 .toLocaleString("en-US", {
              minimumFractionDigits: decimalPlaces.value,
              maximumFractionDigits: decimalPlaces.value
            });
          });
          function loadOptions() {
            return _loadOptions.apply(this, arguments);
          }
          function _loadOptions() {
            _loadOptions = _asyncToGenerator(function* () {
              var _toGuidOrNull;
              var options = {
                currencyCodeGuid: (_toGuidOrNull = toGuidOrNull(props.currencyCodeDefinedValueGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid
              };
              var result = yield http.post("/api/v2/Controls/CurrencyBoxGetCurrencyInfo", undefined, options);
              if (result.isSuccess && result.data) {
                var _result$data$symbol, _result$data$decimalP;
                symbol.value = (_result$data$symbol = result.data.symbol) !== null && _result$data$symbol !== void 0 ? _result$data$symbol : "$";
                decimalPlaces.value = (_result$data$decimalP = result.data.decimalPlaces) !== null && _result$data$decimalP !== void 0 ? _result$data$decimalP : 2;
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
              }
            });
            return _loadOptions.apply(this, arguments);
          }
          watch(() => props.currencyCodeDefinedValueGuid, loadOptions, {
            immediate: true
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(NumberBox), {
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              placeholder: unref(placeholder),
              minimumValue: __props.minimumValue,
              maximumValue: __props.maximumValue,
              decimalCount: decimalPlaces.value,
              rules: "decimal"
            }, {
              inputGroupPrepend: withCtx(() => [createElementVNode("span", _hoisted_1, toDisplayString(symbol.value), 1)]),
              _: 1
            }, 8, ["modelValue", "placeholder", "minimumValue", "maximumValue", "decimalCount"]);
          };
        }
      }));

      script.__file = "Framework/Controls/currencyBox.obs";

    })
  };
}));
//# sourceMappingURL=currencyBox.obs.js.map
