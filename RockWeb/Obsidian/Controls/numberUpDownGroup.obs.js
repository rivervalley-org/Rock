System.register(['vue', './numberUpDownBase.obs', './rockFormField.obs', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, createElementVNode, createElementBlock, Fragment, renderList, toDisplayString, createCommentVNode, createVNode, NumberUpDownBase, RockFormField, updateRefValue;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
    }, function (module) {
      NumberUpDownBase = module["default"];
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      updateRefValue = module.updateRefValue;
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
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
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
        key: 0,
        class: "margin-b-sm"
      };
      var script = exports('default', defineComponent({
        name: 'numberUpDownGroup',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          options: {
            type: Array,
            required: true
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref(_objectSpread2({}, props.modelValue));
          var total = computed(() => {
            var total = 0;
            var _iterator = _createForOfIteratorHelper(props.options),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var option = _step.value;
                total += internalValue.value[option.key] || 0;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return total;
          });
          function setValue(key, value) {
            var newValue = {};
            var _iterator2 = _createForOfIteratorHelper(props.options),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _internalValue$value$;
                var option = _step2.value;
                newValue[option.key] = key === option.key ? value : (_internalValue$value$ = internalValue.value[option.key]) !== null && _internalValue$value$ !== void 0 ? _internalValue$value$ : 0;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            internalValue.value = newValue;
          }
          watch(() => props.modelValue, () => {
            updateRefValue(internalValue, props.modelValue);
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: unref(total),
              formGroupClasses: "margin-b-md number-up-down-group",
              name: "numberupdowngroup"
            }, {
              default: withCtx(_ref2 => {
                _ref2.uniqueId;
                  _ref2.field;
                return [createElementVNode("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, option => {
                  var _internalValue$value$2;
                  return openBlock(), createElementBlock("div", {
                    key: option.key,
                    class: "margin-l-sm margin-b-sm"
                  }, [option.label ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(option.label), 1)) : createCommentVNode("v-if", true), createVNode(unref(NumberUpDownBase), {
                    modelValue: (_internalValue$value$2 = internalValue.value[option.key]) !== null && _internalValue$value$2 !== void 0 ? _internalValue$value$2 : 0,
                    "onUpdate:modelValue": $event => setValue(option.key, $event),
                    min: option.min,
                    max: option.max,
                    class: "margin-t-sm"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "max"])]);
                }), 128))])];
              }),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/numberUpDownGroup.obs";

    })
  };
}));
//# sourceMappingURL=numberUpDownGroup.obs.js.map
