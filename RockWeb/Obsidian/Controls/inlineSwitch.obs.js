System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, computed, openBlock, createElementBlock, withDirectives, createElementVNode, isRef, unref, vModelCheckbox, normalizeClass, Fragment, toDisplayString, useVModelPassthrough, newGuid;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      withDirectives = module.withDirectives;
      createElementVNode = module.createElementVNode;
      isRef = module.isRef;
      unref = module.unref;
      vModelCheckbox = module.vModelCheckbox;
      normalizeClass = module.normalizeClass;
      Fragment = module.Fragment;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      newGuid = module.newGuid;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "custom-control custom-switch"
      };
      var _hoisted_2 = ["id"];
      var _hoisted_3 = ["for"];
      var _hoisted_4 = createTextVNode(" ");
      var script = exports('default', defineComponent({
        name: 'inlineSwitch',
        props: {
          modelValue: {
            type: Boolean,
            required: true
          },
          label: {
            type: String,
            required: true
          },
          isBold: {
            type: Boolean,
            default: false
          },
          uniqueId: {
            type: String,
            default: ""
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var internalUniqueId = "inline-switch-".concat(newGuid());
          var uniqueId = computed(() => props.uniqueId || internalUniqueId);
          var labelClass = computed(() => {
            var classes = ["custom-control-label"];
            if (props.isBold) {
              classes.push("custom-control-label-bold");
            }
            return classes;
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [withDirectives(createElementVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              id: unref(uniqueId),
              class: "custom-control-input",
              type: "checkbox"
            }, null, 8, _hoisted_2), [[vModelCheckbox, unref(internalValue)]]), createElementVNode("label", {
              class: normalizeClass(unref(labelClass)),
              for: unref(uniqueId)
            }, [__props.label ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [createTextVNode(toDisplayString(__props.label), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
              key: 1
            }, [_hoisted_4], 64))], 10, _hoisted_3)]);
          };
        }
      }));

      script.__file = "Framework/Controls/inlineSwitch.obs";

    })
  };
}));
//# sourceMappingURL=inlineSwitch.obs.js.map
