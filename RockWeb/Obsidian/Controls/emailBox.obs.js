System.register(['vue', '@Obsidian/ValidationRules', './rockFormField.obs', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, computed, openBlock, createBlock, unref, isRef, withCtx, withDirectives, mergeProps, vModelDynamic, rulesPropType, normalizeRules, RockFormField, useVModelPassthrough;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      mergeProps = module.mergeProps;
      vModelDynamic = module.vModelDynamic;
    }, function (module) {
      rulesPropType = module.rulesPropType;
      normalizeRules = module.normalizeRules;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "input-group"
      };
      var _hoisted_3 = createElementVNode("span", {
        class: "input-group-addon"
      }, [createElementVNode("i", {
        class: "fa fa-envelope"
      })], -1);
      var _hoisted_4 = ["id", "type"];
      var script = exports('default', defineComponent({
        name: 'emailBox',
        props: {
          modelValue: {
            type: String,
            required: true
          },
          allowLava: {
            type: Boolean,
            default: false
          },
          allowMultiple: {
            type: Boolean,
            default: false
          },
          rules: rulesPropType
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var computedRules = computed(() => {
            var rules = normalizeRules(props.rules);
            if (rules.indexOf("email") === -1 && !props.allowLava && !props.allowMultiple) {
              rules.push("email");
            }
            return rules;
          });
          var computedType = computed(() => {
            return props.allowLava || props.allowMultiple ? "text" : "email";
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              formGroupClasses: "rock-text-box",
              name: "textbox",
              rules: unref(computedRules)
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [_hoisted_3, withDirectives(createElementVNode("input", mergeProps({
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  id: uniqueId,
                  class: "form-control"
                }, field, {
                  type: unref(computedType)
                }), null, 16, _hoisted_4), [[vModelDynamic, unref(internalValue)]])])])];
              }),
              _: 1
            }, 8, ["modelValue", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/emailBox.obs";

    })
  };
}));
//# sourceMappingURL=emailBox.obs.js.map
