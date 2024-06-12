System.register(['vue', '@Obsidian/Controls/rockFormField.obs', '@Obsidian/Controls/rangeSlider.obs', '@Obsidian/Controls/buttonGroup.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Enums/Core/timeIntervalUnit', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var defineComponent, computed, watch, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, createVNode, isRef, RockFormField, RangeSlider, ButtonGroup, toNumber, TimeIntervalUnit, BtnType, BtnSize, useStandardRockFormFieldProps, standardRockFormFieldProps;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      watch = module.watch;
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
      RangeSlider = module["default"];
    }, function (module) {
      ButtonGroup = module["default"];
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      TimeIntervalUnit = module.TimeIntervalUnit;
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
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
        class: "form-group range-slider"
      };
      var _hoisted_2 = {
        class: "text-right margin-b-md"
      };
      var script = exports('default', defineComponent({
        name: 'intervalPicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: true
          },
          unselectedBtnType: {
            type: String,
            default: BtnType.Default
          },
          selectedBtnType: {
            type: String,
            default: BtnType.Primary
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          function defaultValue() {
            return {
              unit: TimeIntervalUnit.Minutes,
              value: 1
            };
          }
          var internalValue = computed({
            get() {
              var _props$modelValue;
              return (_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : defaultValue();
            },
            set(newValue) {
              emit("update:modelValue", newValue);
            }
          });
          if (props.modelValue == null) {
            internalValue.value = defaultValue();
          }
          var value = computed({
            get() {
              var _internalValue$value$;
              return (_internalValue$value$ = internalValue.value.value) !== null && _internalValue$value$ !== void 0 ? _internalValue$value$ : 1;
            },
            set(newValue) {
              internalValue.value = {
                unit: internalValue.value.unit,
                value: newValue !== null && newValue !== void 0 ? newValue : 1
              };
            }
          });
          var unit = computed({
            get() {
              var _internalValue$value$2;
              return "".concat((_internalValue$value$2 = internalValue.value.unit) !== null && _internalValue$value$2 !== void 0 ? _internalValue$value$2 : TimeIntervalUnit.Minutes);
            },
            set(newValue) {
              internalValue.value = {
                unit: toNumber(newValue),
                value: internalValue.value.value
              };
            }
          });
          var options = [{
            text: "Mins",
            value: TimeIntervalUnit.Minutes.toString()
          }, {
            text: "Hours",
            value: TimeIntervalUnit.Hours.toString()
          }, {
            text: "Days",
            value: TimeIntervalUnit.Days.toString()
          }];
          var maxValue = computed(() => {
            if (unit.value == TimeIntervalUnit.Minutes.toString()) {
              return 59;
            }
            if (unit.value == TimeIntervalUnit.Hours.toString()) {
              return 23;
            }
            return 31;
          });
          watch(maxValue, () => {
            if (value.value > maxValue.value) {
              value.value = maxValue.value;
            }
          });
          var standardFieldProps = useStandardRockFormFieldProps(props);
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps(unref(standardFieldProps), {
              name: "maxAge",
              modelValue: unref(internalValue)
            }), {
              default: withCtx(() => [createElementVNode("div", _hoisted_1, [createVNode(unref(RangeSlider), {
                modelValue: unref(value),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(value) ? value.value = $event : null),
                max: unref(maxValue),
                showValueBar: "",
                step: 1
              }, null, 8, ["modelValue", "max"])]), createElementVNode("div", _hoisted_2, [createVNode(unref(ButtonGroup), {
                modelValue: unref(unit),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(unit) ? unit.value = $event : null),
                items: options,
                btnSize: unref(BtnSize).ExtraSmall,
                unselectedBtnType: __props.unselectedBtnType,
                selectedBtnType: __props.selectedBtnType
              }, null, 8, ["modelValue", "btnSize", "unselectedBtnType", "selectedBtnType"])])]),
              _: 1
            }, 16, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/intervalPicker.obs";

    })
  };
}));
//# sourceMappingURL=intervalPicker.obs.js.map
