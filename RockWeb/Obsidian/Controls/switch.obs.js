System.register(['vue', '@Obsidian/Utility/component', './inlineSwitch.obs', './rockFormField.obs'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createBlock, unref, withCtx, createElementVNode, createVNode, mergeProps, isRef, useVModelPassthrough, InlineSwitch, RockFormField;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      mergeProps = module.mergeProps;
      isRef = module.isRef;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      InlineSwitch = module["default"];
    }, function (module) {
      RockFormField = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var script = exports('default', defineComponent({
        name: 'switch',
        props: {
          modelValue: {
            type: Boolean,
            required: true
          },
          text: {
            type: String,
            default: ""
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: unref(internalValue),
              formGroupClasses: "rock-switch",
              name: "switch"
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createVNode(unref(InlineSwitch), mergeProps({
                  modelValue: unref(internalValue),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  label: __props.text,
                  uniqueId: uniqueId
                }, field), null, 16, ["modelValue", "label", "uniqueId"])])];
              }),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/switch.obs";

    })
  };
}));
//# sourceMappingURL=switch.obs.js.map
