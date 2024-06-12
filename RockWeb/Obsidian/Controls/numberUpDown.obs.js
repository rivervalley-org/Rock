System.register(['vue', '@Obsidian/Utility/component', './rockFormField.obs', './numberUpDownBase.obs'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, createVNode, isRef, normalizeClass, standardRockFormFieldProps, useStandardRockFormFieldProps, useVModelPassthrough, RockFormField, NumberUpDownBase;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      isRef = module.isRef;
      normalizeClass = module.normalizeClass;
    }, function (module) {
      standardRockFormFieldProps = module.standardRockFormFieldProps;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      NumberUpDownBase = module["default"];
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
        name: 'numberUpDown',
        props: _objectSpread2(_objectSpread2({}, standardRockFormFieldProps), {}, {
          modelValue: {
            type: Number,
            required: true
          },
          min: {
            type: Number,
            default: 1
          },
          max: {
            type: Number,
            default: 10
          },
          numberIncrementClasses: {
            type: String,
            default: ""
          }
        }),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var formFieldProps = useStandardRockFormFieldProps(props);
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var additionalClasses = computed(() => {
            if (formFieldProps.label !== "") {
              return "margin-t-sm ".concat(props.numberIncrementClasses);
            } else {
              return props.numberIncrementClasses;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps(unref(formFieldProps), {
              modelValue: unref(internalValue),
              formGroupClasses: "number-up-down",
              name: "numberupdown"
            }), {
              default: withCtx(_ref2 => {
                _ref2.uniqueId;
                  _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createVNode(unref(NumberUpDownBase), {
                  modelValue: unref(internalValue),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  min: __props.min,
                  max: __props.max,
                  class: normalizeClass(unref(additionalClasses))
                }, null, 8, ["modelValue", "min", "max", "class"])])];
              }),
              _: 1
            }, 16, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/numberUpDown.obs";

    })
  };
}));
//# sourceMappingURL=numberUpDown.obs.js.map
