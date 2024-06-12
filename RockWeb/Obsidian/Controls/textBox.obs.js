System.register(['vue', '@Obsidian/Utility/component', './rockFormField.obs', '@Obsidian/ValidationRules'], (function (exports) {
  'use strict';
  var defineComponent, useSlots, computed, openBlock, createBlock, unref, mergeProps, isRef, withCtx, createElementBlock, normalizeClass, toDisplayString, createCommentVNode, createElementVNode, renderSlot, withDirectives, vModelText, vModelDynamic, useVModelPassthrough, useStandardRockFormFieldProps, standardRockFormFieldProps, RockFormField, normalizeRules;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      useSlots = module.useSlots;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      isRef = module.isRef;
      withCtx = module.withCtx;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
      renderSlot = module.renderSlot;
      withDirectives = module.withDirectives;
      vModelText = module.vModelText;
      vModelDynamic = module.vModelDynamic;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      normalizeRules = module.normalizeRules;
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
      var _hoisted_2 = ["rows", "maxlength", "id"];
      var _hoisted_3 = ["id", "type", "maxlength", "placeholder"];
      var script = exports('default', defineComponent({
        name: 'textBox',
        props: _objectSpread2({
          modelValue: {
            type: String,
            required: true
          },
          type: {
            type: String,
            default: "text"
          },
          maxLength: {
            type: Number,
            default: 524288
          },
          showCountDown: {
            type: Boolean,
            default: false
          },
          placeholder: {
            type: String,
            default: ""
          },
          inputClasses: {
            type: String,
            default: ""
          },
          rows: {
            type: Number,
            default: 3
          },
          textMode: {
            type: String,
            default: ""
          },
          size: {
            type: String,
            default: "medium"
          },
          allowHtml: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var slots = useSlots();
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var fieldProps = useStandardRockFormFieldProps(props);
          var isTextarea = computed(() => {
            var _props$textMode;
            return ((_props$textMode = props.textMode) === null || _props$textMode === void 0 ? void 0 : _props$textMode.toLowerCase()) === "multiline";
          });
          var charsRemaining = computed(() => {
            return props.maxLength - internalValue.value.length;
          });
          var countdownClass = computed(() => {
            if (charsRemaining.value >= 10) {
              return "badge-default";
            }
            if (charsRemaining.value >= 0) {
              return "badge-warning";
            }
            return "badge-danger";
          });
          var isInputGroup = computed(() => {
            return !!slots.inputGroupPrepend || !!slots.inputGroupAppend;
          });
          var controlContainerClass = computed(() => {
            return {
              "input-group col-xs-12": isInputGroup.value,
              "input-group-sm": isInputGroup.value && props.size == "small",
              "input-group-lg": isInputGroup.value && props.size == "large"
            };
          });
          var formControlClass = computed(() => {
            return {
              "form-control": true,
              [props.inputClasses]: true,
              "input-sm": props.size == "small",
              "input-lg": props.size == "large"
            };
          });
          var augmentedRules = computed(() => {
            var rules = normalizeRules(props.rules);
            if (!props.allowHtml) {
              rules.push("nohtml");
            }
            return rules;
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              name: "textbox"
            }, unref(fieldProps), {
              rules: unref(augmentedRules),
              formGroupClasses: 'rock-text-box ' + _ctx.formGroupClasses
            }), {
              pre: withCtx(() => [__props.showCountDown ? (openBlock(), createElementBlock("em", {
                key: 0,
                class: normalizeClass(["pull-right badge", unref(countdownClass)])
              }, toDisplayString(unref(charsRemaining)), 3)) : createCommentVNode("v-if", true)]),
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: true
                }), createElementVNode("div", {
                  class: normalizeClass(unref(controlContainerClass))
                }, [renderSlot(_ctx.$slots, "inputGroupPrepend", {
                  isInputGroupSupported: true
                }), unref(isTextarea) ? withDirectives((openBlock(), createElementBlock("textarea", mergeProps({
                  key: 0,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  rows: __props.rows,
                  cols: "20",
                  maxlength: __props.maxLength,
                  id: uniqueId,
                  class: "form-control"
                }, field), null, 16, _hoisted_2)), [[vModelText, unref(internalValue)]]) : withDirectives((openBlock(), createElementBlock("input", mergeProps({
                  key: 1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  id: uniqueId,
                  type: __props.type,
                  class: unref(formControlClass)
                }, field, {
                  maxlength: __props.maxLength,
                  placeholder: __props.placeholder
                }), null, 16, _hoisted_3)), [[vModelDynamic, unref(internalValue)]]), renderSlot(_ctx.$slots, "inputGroupAppend", {
                  isInputGroupSupported: true
                })], 2), renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: true
                })])];
              }),
              _: 3
            }, 16, ["modelValue", "rules", "formGroupClasses"]);
          };
        }
      }));

      script.__file = "Framework/Controls/textBox.obs";

    })
  };
}));
//# sourceMappingURL=textBox.obs.js.map
