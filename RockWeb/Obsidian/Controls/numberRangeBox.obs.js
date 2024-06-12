System.register(['vue', '@Obsidian/ValidationRules', '@Obsidian/Utility/numberUtils', './rockFormField.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, isRef, withCtx, withDirectives, normalizeClass, vModelText, rulesPropType, normalizeRules, toNumberOrNull, asFormattedString, RockFormField;
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
      isRef = module.isRef;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      normalizeClass = module.normalizeClass;
      vModelText = module.vModelText;
    }, function (module) {
      rulesPropType = module.rulesPropType;
      normalizeRules = module.normalizeRules;
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
      asFormattedString = module.asFormattedString;
    }, function (module) {
      RockFormField = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "form-control-group"
      };
      var _hoisted_3 = ["id", "step"];
      var _hoisted_4 = createElementVNode("span", {
        class: "to"
      }, "to", -1);
      var _hoisted_5 = ["id", "step"];
      var script = exports('default', defineComponent({
        name: 'numberRangeBox',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          decimalCount: {
            type: Number,
            default: null
          },
          inputClasses: {
            type: String,
            default: ""
          },
          rules: rulesPropType
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref({
            lower: null,
            upper: null
          });
          var computedValue = computed(() => {
            var value = {
              lower: toNumberOrNull(internalValue.value.lower),
              upper: toNumberOrNull(internalValue.value.upper)
            };
            return value.lower !== null || value.upper !== null ? value : undefined;
          });
          var internalStep = computed(() => {
            return props.decimalCount === null ? "any" : (1 / Math.pow(10, props.decimalCount)).toString();
          });
          var computedRules = computed(() => {
            var rules = normalizeRules(props.rules);
            return rules;
          });
          var validationValue = computed(() => {
            var _internalValue$value$, _internalValue$value, _internalValue$value$2, _internalValue$value2;
            var value = "".concat((_internalValue$value$ = (_internalValue$value = internalValue.value) === null || _internalValue$value === void 0 ? void 0 : _internalValue$value.lower) !== null && _internalValue$value$ !== void 0 ? _internalValue$value$ : "", ",").concat((_internalValue$value$2 = (_internalValue$value2 = internalValue.value) === null || _internalValue$value2 === void 0 ? void 0 : _internalValue$value2.upper) !== null && _internalValue$value$2 !== void 0 ? _internalValue$value$2 : "");
            return value !== "," ? value : "";
          });
          function onChange() {
            var _props$modelValue$low, _props$modelValue, _props$decimalCount, _props$modelValue$upp, _props$modelValue2, _props$decimalCount2;
            internalValue.value = {
              lower: asFormattedString((_props$modelValue$low = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.lower) !== null && _props$modelValue$low !== void 0 ? _props$modelValue$low : null, (_props$decimalCount = props.decimalCount) !== null && _props$decimalCount !== void 0 ? _props$decimalCount : undefined, {
                useGrouping: false
              }),
              upper: asFormattedString((_props$modelValue$upp = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.upper) !== null && _props$modelValue$upp !== void 0 ? _props$modelValue$upp : null, (_props$decimalCount2 = props.decimalCount) !== null && _props$decimalCount2 !== void 0 ? _props$decimalCount2 : undefined, {
                useGrouping: false
              })
            };
          }
          watch(computedValue, () => {
            emit("update:modelValue", computedValue.value);
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$low2, _props$modelValue3, _props$modelValue$upp2, _props$modelValue4;
            if (((_props$modelValue$low2 = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.lower) !== null && _props$modelValue$low2 !== void 0 ? _props$modelValue$low2 : null) !== toNumberOrNull(internalValue.value.lower) || ((_props$modelValue$upp2 = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.upper) !== null && _props$modelValue$upp2 !== void 0 ? _props$modelValue$upp2 : null) !== toNumberOrNull(internalValue.value.upper)) {
              internalValue.value = {
                lower: props.modelValue && props.modelValue.lower != null ? props.modelValue.lower.toString() : "",
                upper: props.modelValue && props.modelValue.upper != null ? props.modelValue.upper.toString() : ""
              };
            }
          }, {
            immediate: true
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: unref(validationValue),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(validationValue) ? validationValue.value = $event : null),
              formGroupClasses: "number-range-editor",
              name: "number-range-box",
              rules: unref(computedRules)
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                  _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [withDirectives(createElementVNode("input", {
                  id: uniqueId + '_lower',
                  onChange: onChange,
                  type: "number",
                  class: normalizeClass(["input-width-md form-control", __props.inputClasses]),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value.lower = $event),
                  step: unref(internalStep)
                }, null, 42, _hoisted_3), [[vModelText, internalValue.value.lower]]), _hoisted_4, withDirectives(createElementVNode("input", {
                  id: uniqueId + '_upper',
                  onChange: onChange,
                  type: "number",
                  class: normalizeClass(["input-width-md form-control", __props.inputClasses]),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalValue.value.upper = $event),
                  step: unref(internalStep)
                }, null, 42, _hoisted_5), [[vModelText, internalValue.value.upper]])])])];
              }),
              _: 1
            }, 8, ["modelValue", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/numberRangeBox.obs";

    })
  };
}));
//# sourceMappingURL=numberRangeBox.obs.js.map
