System.register(['vue', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/numberUtils'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, mergeProps, DropDownList, standardRockFormFieldProps, useStandardRockFormFieldProps, toNumber;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      standardRockFormFieldProps = module.standardRockFormFieldProps;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
    }, function (module) {
      toNumber = module.toNumber;
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
        name: 'standardFilterDaysBack',
        props: _objectSpread2(_objectSpread2({}, standardRockFormFieldProps), {}, {
          modelValue: {
            type: Number,
            required: true
          }
        }),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var validValues = [30, 60, 90, 180];
          var valueItems = [{
            value: "30",
            text: "Last 30 days"
          }, {
            value: "60",
            text: "Last 60 days"
          }, {
            value: "90",
            text: "Last 90 days"
          }, {
            value: "180",
            text: "Last 6 months"
          }, {
            value: "0",
            text: "All"
          }];
          var standardProps = useStandardRockFormFieldProps(props);
          var internalValue = ref(validatedValue(props.modelValue));
          function validatedValue(value) {
            if (value <= 0) {
              return "0";
            }
            if (validValues.indexOf(value) !== -1) {
              return value.toString();
            }
            return "180";
          }
          watch(internalValue, () => {
            var value = toNumber(internalValue.value);
            if (value !== props.modelValue) {
              emit("update:modelValue", value);
            }
          });
          watch(() => props.modelValue, () => {
            internalValue.value = validatedValue(props.modelValue);
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(DropDownList), mergeProps({
              modelValue: internalValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event),
              items: valueItems
            }, unref(standardProps), {
              showBlankItem: false
            }), null, 16, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/standardFilterDaysBack.obs";

    })
  };
}));
//# sourceMappingURL=standardFilterDaysBack.obs.js.map
