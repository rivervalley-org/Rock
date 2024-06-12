System.register(['vue', './rockFormField.obs', './datePickerBase.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, isRef, withCtx, createVNode, mergeProps, RockFormField, DatePickerBase;
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
      createVNode = module.createVNode;
      mergeProps = module.mergeProps;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      DatePickerBase = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "picker-daterange"
      };
      var _hoisted_3 = {
        class: "form-control-group"
      };
      var _hoisted_4 = createElementVNode("div", {
        class: "input-group form-control-static"
      }, " to ", -1);
      var script = exports('default', defineComponent({
        name: 'dateRangePicker',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          disallowPastDateSelection: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue$low, _props$modelValue, _props$modelValue$upp, _props$modelValue2;
          var emit = _ref.emit;
          var props = __props;
          var lowerValue = ref((_props$modelValue$low = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.lowerValue) !== null && _props$modelValue$low !== void 0 ? _props$modelValue$low : "");
          var upperValue = ref((_props$modelValue$upp = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.upperValue) !== null && _props$modelValue$upp !== void 0 ? _props$modelValue$upp : "");
          var internalValue = computed(() => {
            if (lowerValue.value === "" && upperValue.value === "") {
              return "";
            }
            return "{lowerValue.value},{upperValue.value}";
          });
          var basePickerProps = computed(() => {
            return {
              disallowPastDateSelection: props.disallowPastDateSelection
            };
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$low2, _props$modelValue3, _props$modelValue$upp2, _props$modelValue4;
            lowerValue.value = (_props$modelValue$low2 = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.lowerValue) !== null && _props$modelValue$low2 !== void 0 ? _props$modelValue$low2 : "";
            upperValue.value = (_props$modelValue$upp2 = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.upperValue) !== null && _props$modelValue$upp2 !== void 0 ? _props$modelValue$upp2 : "";
          });
          watch(() => [lowerValue.value, upperValue.value], () => {
            if (!lowerValue.value && !upperValue.value) {
              emit("update:modelValue", undefined);
            } else {
              emit("update:modelValue", {
                lowerValue: lowerValue.value,
                upperValue: upperValue.value
              });
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              formGroupClasses: "date-range-picker",
              name: "daterangepicker",
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              modelModifiers: {
                lazy: true
              }
            }, {
              default: withCtx(_ref2 => {
                _ref2.uniqueId;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [createVNode(unref(DatePickerBase), mergeProps({
                  modelValue: lowerValue.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => lowerValue.value = $event)
                }, unref(basePickerProps)), null, 16, ["modelValue"]), _hoisted_4, createVNode(unref(DatePickerBase), {
                  modelValue: upperValue.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => upperValue.value = $event)
                }, null, 8, ["modelValue"])])])])];
              }),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/dateRangePicker.obs";

    })
  };
}));
//# sourceMappingURL=dateRangePicker.obs.js.map
