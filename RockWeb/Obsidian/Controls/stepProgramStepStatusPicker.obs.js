System.register(['vue', '@Obsidian/Utility/component', './stepProgramPicker.obs', './stepStatusPicker.obs', './rockFormField.obs', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, computed, watch, openBlock, createBlock, unref, withCtx, isRef, createCommentVNode, useVModelPassthrough, StepProgramPicker, StepStatusPicker, RockFormField, PickerDisplayStyle, toGuidOrNull;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      isRef = module.isRef;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      StepProgramPicker = module["default"];
    }, function (module) {
      StepStatusPicker = module["default"];
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      PickerDisplayStyle = module.PickerDisplayStyle;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'stepProgramStepStatusPicker',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          stepProgram: {
            type: Object,
            required: false
          },
          defaultStepProgramGuid: {
            type: String,
            default: null
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue", "update:stepProgram"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var internalProgramValue = useVModelPassthrough(props, "stepProgram", emit);
          var stepProgramGuid = computed(() => {
            var _toGuidOrNull, _internalProgramValue;
            return (_toGuidOrNull = toGuidOrNull(props.defaultStepProgramGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : toGuidOrNull((_internalProgramValue = internalProgramValue.value) === null || _internalProgramValue === void 0 ? void 0 : _internalProgramValue.value);
          });
          watch(() => props.defaultStepProgramGuid, newVal => {
            if (newVal) {
              internalProgramValue.value = {
                value: newVal
              };
            }
          });
          watch(internalProgramValue, newVal => {
            if (!newVal) {
              internalValue.value = null;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: unref(internalValue),
              name: "step-program-step-type-picker"
            }, {
              default: withCtx(() => [!__props.defaultStepProgramGuid ? (openBlock(), createBlock(unref(StepProgramPicker), {
                key: 0,
                modelValue: unref(internalProgramValue),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalProgramValue) ? internalProgramValue.value = $event : null),
                label: "Step Program",
                multiple: false,
                disabled: __props.disabled,
                showBlankItem: "",
                formGroupClasses: "mt-0",
                displayStyle: unref(PickerDisplayStyle).Condensed
              }, null, 8, ["modelValue", "disabled", "displayStyle"])) : createCommentVNode("v-if", true), unref(stepProgramGuid) ? (openBlock(), createBlock(unref(StepStatusPicker), {
                key: 1,
                modelValue: unref(internalValue),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                label: "Step Status",
                stepProgramGuid: unref(stepProgramGuid),
                multiple: false,
                disabled: __props.disabled,
                showBlankItem: "",
                displayStyle: unref(PickerDisplayStyle).Condensed
              }, null, 8, ["modelValue", "stepProgramGuid", "disabled", "displayStyle"])) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/stepProgramStepStatusPicker.obs";

    })
  };
}));
//# sourceMappingURL=stepProgramStepStatusPicker.obs.js.map
