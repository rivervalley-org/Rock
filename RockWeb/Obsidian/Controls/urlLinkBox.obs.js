System.register(['vue', '@Obsidian/ValidationRules', '@Obsidian/Utility/component', './rockFormField.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, computed, openBlock, createBlock, unref, withCtx, withDirectives, mergeProps, isRef, vModelText, rulesPropType, normalizeRules, useVModelPassthrough, RockFormField;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      mergeProps = module.mergeProps;
      isRef = module.isRef;
      vModelText = module.vModelText;
    }, function (module) {
      rulesPropType = module.rulesPropType;
      normalizeRules = module.normalizeRules;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      RockFormField = module["default"];
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
        class: "fa fa-link"
      })], -1);
      var _hoisted_4 = ["id"];
      var script = exports('default', defineComponent({
        name: 'urlLinkBox',
        props: {
          modelValue: {
            type: String,
            required: true
          },
          rules: rulesPropType,
          requiresTrailingSlash: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var value = useVModelPassthrough(props, "modelValue", emit);
          var computedRules = computed(() => {
            var rules = normalizeRules(props.rules);
            if (rules.indexOf("url") === -1) {
              rules.push("url");
            }
            if (props.requiresTrailingSlash) {
              rules.push({
                name: "endswith",
                params: ["/"]
              });
            }
            return rules;
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: unref(value),
              formGroupClasses: "url-link-box",
              name: "urlbox",
              rules: unref(computedRules)
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [_hoisted_3, withDirectives(createElementVNode("input", mergeProps({
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(value) ? value.value = $event : null),
                  id: uniqueId,
                  class: "form-control"
                }, field, {
                  type: "url"
                }), null, 16, _hoisted_4), [[vModelText, unref(value)]])])])];
              }),
              _: 1
            }, 8, ["modelValue", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/urlLinkBox.obs";

    })
  };
}));
//# sourceMappingURL=urlLinkBox.obs.js.map
