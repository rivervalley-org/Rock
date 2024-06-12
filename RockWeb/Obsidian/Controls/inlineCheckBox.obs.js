System.register(['vue'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createElementBlock, createElementVNode, withDirectives, mergeProps, vModelCheckbox, toDisplayString;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      withDirectives = module.withDirectives;
      mergeProps = module.mergeProps;
      vModelCheckbox = module.vModelCheckbox;
      toDisplayString = module.toDisplayString;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "checkbox"
      };
      var _hoisted_2 = {
        title: ""
      };
      var _hoisted_3 = {
        class: "label-text"
      };
      var script = exports('default', defineComponent({
        name: 'inlineCheckBox',
        props: {
          modelValue: {
            type: Boolean,
            required: true
          },
          label: {
            type: String,
            required: true
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref(props.modelValue);
          watch(() => props.modelValue, () => {
            internalValue.value = props.modelValue;
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("label", _hoisted_2, [withDirectives(createElementVNode("input", mergeProps({
              type: "checkbox",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event)
            }, _ctx.$attrs), null, 16), [[vModelCheckbox, internalValue.value]]), createElementVNode("span", _hoisted_3, toDisplayString(__props.label), 1)])]);
          };
        }
      }));

      script.__file = "Framework/Controls/inlineCheckBox.obs";

    })
  };
}));
//# sourceMappingURL=inlineCheckBox.obs.js.map
