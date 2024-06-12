System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/treeItemProviders', './treeItemPicker.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, useSecurityGrantToken, updateRefValue, RegistrationTemplateTreeItemProvider, TreeItemPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      RegistrationTemplateTreeItemProvider = module.RegistrationTemplateTreeItemProvider;
    }, function (module) {
      TreeItemPicker = module["default"];
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'registrationTemplatePicker',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          multiple: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue;
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : null);
          var securityGrantToken = useSecurityGrantToken();
          var itemProvider = new RegistrationTemplateTreeItemProvider();
          itemProvider.securityGrantToken = securityGrantToken.value;
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue2;
            updateRefValue(internalValue, (_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : null);
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(TreeItemPicker), {
              modelValue: internalValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event),
              formGroupClasses: "category-picker",
              iconCssClass: "fa fa-calendar",
              provider: unref(itemProvider),
              multiple: __props.multiple,
              disableFolderSelection: ""
            }, null, 8, ["modelValue", "provider", "multiple"]);
          };
        }
      }));

      script.__file = "Framework/Controls/registrationTemplatePicker.obs";

    })
  };
}));
//# sourceMappingURL=registrationTemplatePicker.obs.js.map
