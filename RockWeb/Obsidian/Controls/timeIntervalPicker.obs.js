System.register(['vue', '@Obsidian/Controls/rockFormField', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/dropDownList', '@Obsidian/Utility/numberUtils', '@Obsidian/Enums/Core/timeIntervalUnit', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, createVNode, isRef, RockFormField, NumberBox, DropDownList, toNumber, TimeIntervalUnit, useStandardRockFormFieldProps, standardRockFormFieldProps;
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
      RockFormField = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      TimeIntervalUnit = module.TimeIntervalUnit;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
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
        class: "input-group d-flex"
      };
      var script = exports('default', defineComponent({
        name: 'timeIntervalPicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: true
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
          var value = computed({
            get() {
              return internalValue.value.value;
            },
            set(newValue) {
              internalValue.value = {
                unit: internalValue.value.unit,
                value: newValue
              };
            }
          });
          var unit = computed({
            get() {
              var _internalValue$value$;
              return "".concat((_internalValue$value$ = internalValue.value.unit) !== null && _internalValue$value$ !== void 0 ? _internalValue$value$ : TimeIntervalUnit.Minutes);
            },
            set(newValue) {
              internalValue.value = {
                unit: toNumber(newValue),
                value: internalValue.value.value
              };
            }
          });
          var options = [{
            text: "Secs",
            value: TimeIntervalUnit.Seconds.toString()
          }, {
            text: "Mins",
            value: TimeIntervalUnit.Minutes.toString()
          }, {
            text: "Hours",
            value: TimeIntervalUnit.Hours.toString()
          }, {
            text: "Days",
            value: TimeIntervalUnit.Days.toString()
          }];
          var standardFieldProps = useStandardRockFormFieldProps(props);
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps(unref(standardFieldProps), {
              name: "maxAge",
              modelValue: unref(internalValue)
            }), {
              default: withCtx(() => [createElementVNode("div", _hoisted_1, [createVNode(unref(NumberBox), {
                modelValue: unref(value),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(value) ? value.value = $event : null),
                inputClasses: "input-width-md min-w-0 border-right-0 rounded-left"
              }, null, 8, ["modelValue"]), createVNode(unref(DropDownList), {
                modelValue: unref(unit),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(unit) ? unit.value = $event : null),
                items: options,
                inputClasses: "rounded-0 rounded-right input-width-sm",
                showBlankItem: false
              }, null, 8, ["modelValue"])])]),
              _: 1
            }, 16, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/timeIntervalPicker.obs";

    })
  };
}));
//# sourceMappingURL=timeIntervalPicker.obs.js.map
