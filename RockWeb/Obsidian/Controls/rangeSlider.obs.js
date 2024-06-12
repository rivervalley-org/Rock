System.register(['vue', '@Obsidian/Utility/component', './inlineRangeSlider.obs', './rockFormField.obs'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, createVNode, isRef, useVModelPassthrough, useStandardRockFormFieldProps, standardRockFormFieldProps, InlineRangeSlider, RockFormField;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      isRef = module.isRef;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      InlineRangeSlider = module["default"];
    }, function (module) {
      RockFormField = module["default"];
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

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var script = exports('default', defineComponent({
        name: 'rangeSlider',
        props: _objectSpread2({
          modelValue: {
            type: Number,
            required: true
          },
          step: {
            type: Number,
            default: 1
          },
          min: {
            type: Number,
            default: 0
          },
          max: {
            type: Number,
            default: 100
          },
          showValueBar: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var fieldProps = useStandardRockFormFieldProps(props);
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: unref(internalValue)
            }, unref(fieldProps), {
              formGroupClasses: 'rock-range-slider ' + unref(fieldProps).formGroupClasses,
              name: "range-slider"
            }), {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createVNode(unref(InlineRangeSlider), mergeProps({
                  modelValue: unref(internalValue),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  uniqueId: uniqueId
                }, field, {
                  step: __props.step,
                  min: __props.min,
                  max: __props.max,
                  showValueBar: __props.showValueBar
                }), null, 16, ["modelValue", "uniqueId", "step", "min", "max", "showValueBar"])])];
              }),
              _: 1
            }, 16, ["modelValue", "formGroupClasses"]);
          };
        }
      }));

      script.__file = "Framework/Controls/rangeSlider.obs";

    })
  };
}));
//# sourceMappingURL=rangeSlider.obs.js.map
