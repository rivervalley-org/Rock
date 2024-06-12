System.register(['vue', '@Obsidian/ValidationRules', './basicTimePicker.obs', '@Obsidian/Utility/component', './rockFormField.obs'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, createVNode, isRef, normalizeRules, BasicTimePicker, useStandardRockFormFieldProps, standardRockFormFieldProps, RockFormField;
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
    }, function (module) {
      normalizeRules = module.normalizeRules;
    }, function (module) {
      BasicTimePicker = module["default"];
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
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
      var _hoisted_2 = {
        class: "timepicker-input"
      };
      var script = exports('default', defineComponent({
        name: 'timePicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            default: {}
          },
          disabled: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = computed({
            get() {
              return props.modelValue;
            },
            set(newValue) {
              emit("update:modelValue", newValue);
            }
          });
          var computedRules = computed(() => {
            var rules = normalizeRules(props.rules);
            return rules;
          });
          var computedFormGroupClasses = computed(() => {
            return props.formGroupClasses + " timepicker-input";
          });
          var standardFieldProps = useStandardRockFormFieldProps(props);
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: unref(internalValue)
            }, unref(standardFieldProps), {
              formGroupClasses: unref(computedFormGroupClasses),
              name: "time-picker",
              rules: unref(computedRules)
            }), {
              default: withCtx(_ref2 => {
                _ref2.uniqueId;
                  _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(BasicTimePicker), {
                  modelValue: unref(internalValue),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  disabled: __props.disabled
                }, null, 8, ["modelValue", "disabled"])])])];
              }),
              _: 1
            }, 16, ["modelValue", "formGroupClasses", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/timePicker.obs";

    })
  };
}));
//# sourceMappingURL=timePicker.obs.js.map
