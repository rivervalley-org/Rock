System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Utility/http', './baseAsyncPicker'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, openBlock, createBlock, unref, mergeProps, isRef, useVModelPassthrough, useStandardAsyncPickerProps, standardAsyncPickerProps, useHttp, BaseAsyncPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      isRef = module.isRef;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
      standardAsyncPickerProps = module.standardAsyncPickerProps;
    }, function (module) {
      useHttp = module.useHttp;
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

      var script = exports('default', defineComponent({
        name: 'racePicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          }
        }, standardAsyncPickerProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var standardProps = useStandardAsyncPickerProps(props);
          var http = useHttp();
          var loadedItems = ref(null);
          var label = ref("Race");
          var actualItems = computed(() => {
            return loadedItems.value || loadOptions;
          });
          function loadOptions() {
            return _loadOptions.apply(this, arguments);
          }
          function _loadOptions() {
            _loadOptions = _asyncToGenerator(function* () {
              var result = yield http.post("/api/v2/Controls/RacePickerGetRaces");
              if (result.isSuccess && result.data) {
                var _result$data$races, _result$data$label, _loadedItems$value;
                loadedItems.value = (_result$data$races = result.data.races) !== null && _result$data$races !== void 0 ? _result$data$races : null;
                label.value = (_result$data$label = result.data.label) !== null && _result$data$label !== void 0 ? _result$data$label : "Race";
                return (_loadedItems$value = loadedItems.value) !== null && _loadedItems$value !== void 0 ? _loadedItems$value : [];
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                loadedItems.value = [];
                return [];
              }
            });
            return _loadOptions.apply(this, arguments);
          }
          loadOptions();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(BaseAsyncPicker), mergeProps({
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null)
            }, unref(standardProps), {
              label: label.value,
              displayStyle: _ctx.displayStyle,
              items: unref(actualItems)
            }), null, 16, ["modelValue", "label", "displayStyle", "items"]);
          };
        }
      }));

      script.__file = "Framework/Controls/racePicker.obs";

    })
  };
}));
//# sourceMappingURL=racePicker.obs.js.map