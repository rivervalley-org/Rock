System.register(['vue', '@Obsidian/ValidationRules', './dropDownList.obs', '@Obsidian/Enums/Crm/gender', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createBlock, unref, isRef, rulesPropType, normalizeRules, DropDownList, Gender, useVModelPassthrough;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
    }, function (module) {
      rulesPropType = module.rulesPropType;
      normalizeRules = module.normalizeRules;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Gender = module.Gender;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'genderDropDownList',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          rules: rulesPropType
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var options = [{
            text: " ",
            value: Gender.Unknown.toString()
          }, {
            text: "Male",
            value: Gender.Male.toString()
          }, {
            text: "Female",
            value: Gender.Female.toString()
          }];
          var computedRules = computed(() => {
            var rules = normalizeRules(props.rules);
            var notEqualRule = "notequal:".concat(Gender.Unknown);
            if (rules.includes("required") && !rules.includes(notEqualRule)) {
              rules.push(notEqualRule);
            }
            return rules;
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(DropDownList), {
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              label: "Gender",
              items: options,
              showBlankItem: false,
              rules: unref(computedRules)
            }, null, 8, ["modelValue", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/genderDropDownList.obs";

    })
  };
}));
//# sourceMappingURL=genderDropDownList.obs.js.map
