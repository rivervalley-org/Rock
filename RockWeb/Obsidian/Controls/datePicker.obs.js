System.register(['vue', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', './rockFormField.obs', './textBox.obs', './datePickerBase.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, mergeProps, withCtx, createElementBlock, createVNode, withDirectives, vModelCheckbox, createCommentVNode, toNumber, useStandardRockFormFieldProps, standardRockFormFieldProps, RockFormField, TextBox, DatePickerBase;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      withDirectives = module.withDirectives;
      vModelCheckbox = module.vModelCheckbox;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      DatePickerBase = module["default"];
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
        key: 0,
        class: "form-control-group"
      };
      var _hoisted_3 = {
        class: "form-row"
      };
      var _hoisted_4 = {
        key: 0,
        class: "input-group"
      };
      var _hoisted_5 = {
        class: "checkbox"
      };
      var _hoisted_6 = {
        title: ""
      };
      var _hoisted_7 = createElementVNode("span", {
        class: "label-text"
      }, "Current Date", -1);
      var _hoisted_8 = {
        key: 0,
        class: "form-row"
      };
      var script = exports('default', defineComponent({
        name: 'datePicker',
        props: _objectSpread2({
          modelValue: {
            type: String,
            default: null
          },
          displayCurrentOption: {
            type: Boolean,
            default: false
          },
          isCurrentDateOffset: {
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
          },
          container: {
            type: HTMLElement,
            required: false
          },
          horizontalOrientation: {
            type: String,
            required: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref(null);
          var isCurrent = ref(false);
          var currentDiff = ref("0");
          var fieldProps = useStandardRockFormFieldProps(props);
          var asCurrentDateValue = computed(() => {
            var plusMinus = "".concat(toNumber(currentDiff.value));
            return "CURRENT:".concat(plusMinus);
          });
          var valueToEmit = computed(() => {
            if (isCurrent.value) {
              return asCurrentDateValue.value;
            }
            return internalValue.value;
          });
          var basePickerProps = computed(() => {
            return {
              disableForceParse: props.disableForceParse,
              disableShowOnFocus: props.disableShowOnFocus,
              disableHighlightToday: props.disableHighlightToday,
              disallowFutureDateSelection: props.disallowFutureDateSelection,
              disallowPastDateSelection: props.disallowPastDateSelection,
              startView: props.startView,
              container: props.container,
              horizontalOrientation: props.horizontalOrientation
            };
          });
          watch(() => props.isCurrentDateOffset, () => {
            if (!props.isCurrentDateOffset) {
              currentDiff.value = "0";
            }
          }, {
            immediate: true
          });
          watch(isCurrent, () => {
            if (isCurrent.value) {
              internalValue.value = "Current";
            } else {
              internalValue.value = null;
            }
          }, {
            immediate: true
          });
          watch(valueToEmit, () => {
            emit("update:modelValue", valueToEmit.value);
          });
          watch(() => props.modelValue, () => {
            if (!props.modelValue) {
              internalValue.value = null;
              isCurrent.value = false;
              currentDiff.value = "0";
              return;
            }
            if (props.modelValue.indexOf("CURRENT") === 0) {
              isCurrent.value = true;
              var parts = props.modelValue.split(":");
              if (parts.length === 2) {
                currentDiff.value = "".concat(toNumber(parts[1]));
              }
              return;
            }
            internalValue.value = props.modelValue;
          }, {
            immediate: true
          });
          watch(() => props.displayCurrentOption, () => {
            if (!props.displayCurrentOption && isCurrent.value) {
              internalValue.value = null;
              isCurrent.value = false;
              currentDiff.value = "0";
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps(unref(fieldProps), {
              formGroupClasses: 'date-picker ' + unref(fieldProps).formGroupClasses,
              name: "datepicker",
              modelValue: internalValue.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => internalValue.value = $event),
              modelModifiers: {
                lazy: true
              }
            }), {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [__props.displayCurrentOption ? (openBlock(), createElementBlock("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [createVNode(unref(DatePickerBase), mergeProps({
                  modelValue: internalValue.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event),
                  modelModifiers: {
                    lazy: true
                  },
                  id: uniqueId
                }, field, {
                  disabled: isCurrent.value || field.disabled
                }), null, 16, ["modelValue", "id", "disabled"]), __props.displayCurrentOption || isCurrent.value ? (openBlock(), createElementBlock("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createElementVNode("label", _hoisted_6, [withDirectives(createElementVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isCurrent.value = $event)
                }, null, 512), [[vModelCheckbox, isCurrent.value]]), _hoisted_7])])])) : createCommentVNode("v-if", true)]), isCurrent.value && __props.isCurrentDateOffset ? (openBlock(), createElementBlock("div", _hoisted_8, [createVNode(unref(TextBox), {
                  label: "+- Days",
                  modelValue: currentDiff.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => currentDiff.value = $event),
                  inputClasses: "input-width-md",
                  help: "Enter the number of days after the current date to use as the date. Use a negative number to specify days before."
                }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true)])) : (openBlock(), createBlock(unref(DatePickerBase), mergeProps({
                  key: 1,
                  modelValue: internalValue.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => internalValue.value = $event),
                  modelModifiers: {
                    lazy: true
                  },
                  id: uniqueId
                }, _objectSpread2(_objectSpread2({}, field), unref(basePickerProps)), {
                  disabled: isCurrent.value || field.disabled
                }), null, 16, ["modelValue", "id", "disabled"]))])];
              }),
              _: 1
            }, 16, ["formGroupClasses", "modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/datePicker.obs";

    })
  };
}));
//# sourceMappingURL=datePicker.obs.js.map
