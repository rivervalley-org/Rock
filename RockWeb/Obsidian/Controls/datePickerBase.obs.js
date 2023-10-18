System.register(['vue', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, onMounted, openBlock, createElementBlock, withDirectives, unref, vModelText, newGuid;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      withDirectives = module.withDirectives;
      unref = module.unref;
      vModelText = module.vModelText;
    }, function (module) {
      newGuid = module.newGuid;
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
        class: "input-group input-width-md js-date-picker date"
      };
      var _hoisted_2 = ["id", "disabled"];
      var _hoisted_3 = createElementVNode("span", {
        class: "input-group-addon"
      }, [createElementVNode("i", {
        class: "fa fa-calendar"
      })], -1);
      var StartViewOption = exports('StartViewOption', function (StartViewOption) {
        StartViewOption[StartViewOption["Month"] = 0] = "Month";
        StartViewOption[StartViewOption["Year"] = 1] = "Year";
        StartViewOption[StartViewOption["Decade"] = 2] = "Decade";
        return StartViewOption;
      }({}));
      var script = exports('default', defineComponent({
        name: 'datePickerBase',
        props: {
          modelValue: {
            type: String,
            default: null
          },
          id: {
            type: String,
            default: ""
          },
          disabled: {
            type: Boolean,
            default: false
          },
          disableForceParse: {
            type: Boolean,
            default: false
          },
          disableShowOnFocus: {
            type: Boolean,
            default: false
          },
          disableHighlightToday: {
            type: Boolean,
            default: false
          },
          disallowFutureDateSelection: {
            type: Boolean,
            default: false
          },
          disallowPastDateSelection: {
            type: Boolean,
            default: false
          },
          startView: {
            type: Number,
            default: 0
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref(null);
          var defaultId = "datepicker-".concat(newGuid());
          var inputEl = ref(null);
          var computedId = computed(() => {
            return props.id || defaultId;
          });
          var asRockDateOrNull = computed(() => {
            var _internalValue$value;
            var match = /^(\d+)\/(\d+)\/(\d+)/.exec((_internalValue$value = internalValue.value) !== null && _internalValue$value !== void 0 ? _internalValue$value : "");
            if (match !== null) {
              return "".concat(match[3], "-").concat(match[1], "-").concat(match[2]);
            } else {
              return null;
            }
          });
          var dateLimiterOptions = computed(() => {
            var options = {};
            if (props.disallowFutureDateSelection) {
              options.endDate = new Date();
            }
            if (props.disallowPastDateSelection) {
              options.startDate = new Date();
            }
            return options;
          });
          watch(() => props.modelValue, () => {
            if (!props.modelValue) {
              internalValue.value = null;
              return;
            }
            var match = /^(\d+)-(\d+)-(\d+)/.exec(props.modelValue);
            if (match !== null) {
              internalValue.value = "".concat(match[2], "/").concat(match[3], "/").concat(match[1]);
            } else {
              internalValue.value = null;
            }
          }, {
            immediate: true
          });
          watch(asRockDateOrNull, () => {
            emit("update:modelValue", asRockDateOrNull.value);
          });
          onMounted(() => {
            var input = inputEl.value;
            window.Rock.controls.datePicker.initialize(_objectSpread2(_objectSpread2({}, dateLimiterOptions.value), {}, {
              id: input.id,
              startView: props.startView,
              showOnFocus: !props.disableShowOnFocus,
              format: "mm/dd/yyyy",
              todayHighlight: !props.disableHighlightToday,
              forceParse: !props.disableForceParse,
              onChangeScript: () => {
                internalValue.value = input.value;
              }
            }));
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [withDirectives(createElementVNode("input", {
              ref_key: "inputEl",
              ref: inputEl,
              type: "text",
              id: unref(computedId),
              class: "form-control",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event),
              disabled: __props.disabled
            }, null, 8, _hoisted_2), [[vModelText, internalValue.value, void 0, {
              lazy: true
            }]]), _hoisted_3]);
          };
        }
      }));

      script.__file = "Framework/Controls/datePickerBase.obs";

    })
  };
}));
//# sourceMappingURL=datePickerBase.obs.js.map
