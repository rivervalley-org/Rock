System.register(['vue', '@Obsidian/Utility/component', './rockFormField.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, onMounted, openBlock, createBlock, unref, isRef, withCtx, withDirectives, mergeProps, vModelText, useVModelPassthrough, RockFormField;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      mergeProps = module.mergeProps;
      vModelText = module.vModelText;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      RockFormField = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = ["id", "placeholder"];
      var _hoisted_3 = createElementVNode("span", {
        class: "input-group-addon"
      }, [createElementVNode("i")], -1);
      var script = exports('default', defineComponent({
        name: 'colorPicker',
        props: {
          modelValue: {
            type: String,
            required: true
          },
          placeholder: {
            type: String,
            default: ""
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var colorPicker = ref();
          onMounted(() => {
            var $colorPicker = window["$"](colorPicker.value);
            $colorPicker.colorpicker();
            $colorPicker.find("> input").on("change", () => {
              internalValue.value = $colorPicker.find("> input").val();
            });
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              formGroupClasses: "rock-color-picker",
              name: "colorpicker"
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", {
                  ref_key: "colorPicker",
                  ref: colorPicker,
                  class: "input-group input-width-lg"
                }, [withDirectives(createElementVNode("input", mergeProps({
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  id: uniqueId,
                  type: "text",
                  class: "form-control"
                }, field, {
                  placeholder: __props.placeholder
                }), null, 16, _hoisted_2), [[vModelText, unref(internalValue)]]), _hoisted_3], 512)])];
              }),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/colorPicker.obs";

    })
  };
}));
//# sourceMappingURL=colorPicker.obs.js.map
