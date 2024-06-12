System.register(['vue', '@Obsidian/Controls/rockFormField.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString, RockFormField, RockButton, BtnType, BtnSize, useStandardRockFormFieldProps, standardRockFormFieldProps;
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
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      RockButton = module["default"];
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
        class: "btn-group"
      };
      var script = exports('default', defineComponent({
        name: 'buttonGroup',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: true
          },
          items: {
            type: Array,
            default: () => []
          },
          unselectedBtnType: {
            type: String,
            default: BtnType.Default
          },
          selectedBtnType: {
            type: String,
            default: BtnType.Primary
          },
          btnSize: {
            type: String,
            default: BtnSize.Default
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
          function itemButtonType(item) {
            return item.value == internalValue.value ? props.selectedBtnType : props.unselectedBtnType;
          }
          var standardFieldProps = useStandardRockFormFieldProps(props);
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps(unref(standardFieldProps), {
              name: "maxAge",
              modelValue: unref(internalValue)
            }), {
              default: withCtx(() => [createElementVNode("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index) => {
                return openBlock(), createBlock(unref(RockButton), {
                  onClick: $event => internalValue.value = item.value,
                  btnSize: __props.btnSize,
                  btnType: itemButtonType(item),
                  disabled: __props.disabled
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(item.text), 1)]),
                  _: 2
                }, 1032, ["onClick", "btnSize", "btnType", "disabled"]);
              }), 256))])]),
              _: 1
            }, 16, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/buttonGroup.obs";

    })
  };
}));
//# sourceMappingURL=buttonGroup.obs.js.map
