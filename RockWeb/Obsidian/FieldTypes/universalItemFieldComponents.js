System.register(['vue', './utils', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, getFieldConfigurationProps, AttributeValuesContainer, deepEqual;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      getFieldConfigurationProps = module.getFieldConfigurationProps;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      deepEqual = module.deepEqual;
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

      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "UniversalItemField.Configuration",
        components: {
          AttributeValuesContainer
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref(props.modelValue);
          var attributes = computed(() => {
            var attrs = {};
            try {
              var _props$configurationP;
              var bags = JSON.parse((_props$configurationP = props.configurationProperties["Attributes"]) !== null && _props$configurationP !== void 0 ? _props$configurationP : "[]");
              var _iterator = _createForOfIteratorHelper(bags),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var bag = _step.value;
                  if (bag.key) {
                    attrs[bag.key] = bag;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } catch (_unused) {
              return {};
            }
            return attrs;
          });
          var maybeUpdateModelValue = () => {
            var isChanged = !deepEqual(Object.keys(internalValue.value), Object.keys(props.modelValue), true);
            if (!isChanged) {
              for (var _i = 0, _Object$keys = Object.keys(internalValue.value); _i < _Object$keys.length; _i++) {
                var _props$modelValue$key;
                var key = _Object$keys[_i];
                if (internalValue.value[key] !== ((_props$modelValue$key = props.modelValue[key]) !== null && _props$modelValue$key !== void 0 ? _props$modelValue$key : "")) {
                  isChanged = true;
                  break;
                }
              }
            }
            if (isChanged) {
              emit("update:modelValue", internalValue.value);
              return true;
            } else {
              return false;
            }
          };
          watch(props.modelValue, () => {
            internalValue.value = _objectSpread2({}, props.modelValue);
          }, {
            immediate: true
          });
          watch(internalValue, (newValue, oldValue) => {
            if (maybeUpdateModelValue()) {
              for (var _i2 = 0, _Object$keys2 = Object.keys(newValue); _i2 < _Object$keys2.length; _i2++) {
                var key = _Object$keys2[_i2];
                if (oldValue[key] === newValue[key]) {
                  continue;
                }
                emit("updateConfiguration");
              }
            }
          });
          return {
            attributes,
            internalValue
          };
        },
        template: "\n<div>\n    <AttributeValuesContainer v-model=\"internalValue\"\n                              :attributes=\"attributes\"\n                              isEditMode />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=universalItemFieldComponents.js.map
