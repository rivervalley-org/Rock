System.register(['vue', '@Obsidian/ValidationRules', '@Obsidian/Utility/numberUtils', './rockFormField.obs'], (function (exports) {
  'use strict';
  var defineComponent, useSlots, ref, computed, watch, openBlock, createBlock, unref, withCtx, createElementVNode, renderSlot, normalizeClass, withDirectives, mergeProps, vModelText, rulesPropType, normalizeRules, asFormattedString, toNumberOrNull, RockFormField;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      useSlots = module.useSlots;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      renderSlot = module.renderSlot;
      normalizeClass = module.normalizeClass;
      withDirectives = module.withDirectives;
      mergeProps = module.mergeProps;
      vModelText = module.vModelText;
    }, function (module) {
      rulesPropType = module.rulesPropType;
      normalizeRules = module.normalizeRules;
    }, function (module) {
      asFormattedString = module.asFormattedString;
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      RockFormField = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = ["id", "placeholder", "step", "min", "max"];
      var script = exports('default', defineComponent({
        name: 'numberBox',
        props: {
          modelValue: {
            type: Number,
            default: null
          },
          placeholder: {
            type: String,
            default: ""
          },
          minimumValue: {
            type: Number
          },
          maximumValue: {
            type: Number
          },
          decimalCount: {
            type: Number,
            default: null
          },
          inputClasses: {
            type: String,
            default: ""
          },
          inputGroupClasses: {
            type: String,
            default: ""
          },
          rules: rulesPropType
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var slots = useSlots();
          var internalValue = ref(formatNumber(props.modelValue));
          var internalNumberValue = computed(() => {
            return toNumberOrNull(internalValue.value);
          });
          var internalStep = computed(() => {
            return props.decimalCount === null ? "any" : (1 / Math.pow(10, props.decimalCount)).toString();
          });
          var isInputGroup = computed(() => {
            return !!slots.inputGroupPrepend || !!slots.inputGroupAppend;
          });
          var controlContainerClass = computed(() => {
            return isInputGroup.value ? "input-group ".concat(props.inputGroupClasses) : "";
          });
          var computedRules = computed(() => {
            var rules = normalizeRules(props.rules);
            if (props.maximumValue != null) {
              rules.push("lte:".concat(props.maximumValue));
            }
            if (props.minimumValue != null) {
              rules.push("gte:".concat(props.minimumValue));
            }
            return rules;
          });
          function formatNumber(num) {
            var _props$decimalCount;
            return asFormattedString(num, (_props$decimalCount = props.decimalCount) !== null && _props$decimalCount !== void 0 ? _props$decimalCount : undefined, {
              useGrouping: false
            });
          }
          function formatInternalValue() {
            internalValue.value = formatNumber(internalNumberValue.value);
          }
          watch(() => props.modelValue, () => {
            if (props.modelValue !== internalNumberValue.value) {
              internalValue.value = formatNumber(props.modelValue);
            }
          });
          watch(internalNumberValue, () => {
            emit("update:modelValue", internalNumberValue.value);
          });
          watch(() => props.decimalCount, () => {
            formatInternalValue();
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: internalValue.value,
              formGroupClasses: "rock-number-box",
              name: "numberbox",
              rules: unref(computedRules)
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [renderSlot(_ctx.$slots, "prepend"), createElementVNode("div", {
                  class: normalizeClass(unref(controlContainerClass))
                }, [renderSlot(_ctx.$slots, "inputGroupPrepend", {
                  isInputGroupSupported: true
                }), withDirectives(createElementVNode("input", mergeProps({
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event),
                  id: uniqueId,
                  type: "number",
                  class: ["form-control", __props.inputClasses]
                }, field, {
                  inputmode: "decimal",
                  placeholder: __props.placeholder,
                  step: unref(internalStep),
                  min: __props.minimumValue,
                  max: __props.maximumValue,
                  onChange: formatInternalValue,
                  onBlur: formatInternalValue
                }), null, 16, _hoisted_2), [[vModelText, internalValue.value]]), renderSlot(_ctx.$slots, "inputGroupAppend", {
                  isInputGroupSupported: true
                })], 2), renderSlot(_ctx.$slots, "append")])];
              }),
              _: 3
            }, 8, ["modelValue", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/numberBox.obs";

    })
  };
}));
//# sourceMappingURL=numberBox.obs.js.map
