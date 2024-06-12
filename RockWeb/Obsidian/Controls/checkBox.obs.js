System.register(['vue', './rockFormField.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, withCtx, createElementVNode, withDirectives, mergeProps, vModelCheckbox, createTextVNode, toDisplayString, renderSlot, RockFormField;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      withDirectives = module.withDirectives;
      mergeProps = module.mergeProps;
      vModelCheckbox = module.vModelCheckbox;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      renderSlot = module.renderSlot;
    }, function (module) {
      RockFormField = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "checkbox"
      };
      var _hoisted_3 = {
        class: "rock-checkbox-icon"
      };
      var _hoisted_4 = ["id"];
      var _hoisted_5 = {
        class: "label-text"
      };
      var script = exports('default', defineComponent({
        name: 'checkBox',
        props: {
          modelValue: {
            type: Boolean,
            required: true
          },
          label: {
            type: String,
            required: true
          },
          rules: {
            type: String,
            default: ""
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
          var internalValue = ref(props.modelValue);
          watch(() => props.modelValue, () => {
            internalValue.value = props.modelValue;
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: __props.modelValue,
              label: __props.label,
              formGroupClasses: "rock-check-box",
              name: "checkbox"
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("label", _hoisted_3, [withDirectives(createElementVNode("input", mergeProps({
                  type: "checkbox"
                }, field, {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event),
                  id: uniqueId
                }), null, 16, _hoisted_4), [[vModelCheckbox, internalValue.value]]), createElementVNode("span", _hoisted_5, [createTextVNode(" " + toDisplayString(__props.text) + " ", 1), renderSlot(_ctx.$slots, "textAppend")])])])])];
              }),
              _: 3
            }, 8, ["modelValue", "label"]);
          };
        }
      }));

      script.__file = "Framework/Controls/checkBox.obs";

    })
  };
}));
//# sourceMappingURL=checkBox.obs.js.map
