System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Enums/Controls/mergeTemplateOwnership', './treeItemPicker.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, useSecurityGrantToken, updateRefValue, MergeTemplateTreeItemProvider, MergeTemplateOwnership, TreeItemPicker;
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
      MergeTemplateTreeItemProvider = module.MergeTemplateTreeItemProvider;
    }, function (module) {
      MergeTemplateOwnership = module.MergeTemplateOwnership;
    }, function (module) {
      TreeItemPicker = module["default"];
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'mergeTemplatePicker',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          mergeTemplateOwnership: {
            type: Number,
            default: MergeTemplateOwnership.Global
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
          var itemProvider = ref();
          function refreshItemProvider() {
            var provider = new MergeTemplateTreeItemProvider();
            provider.mergeTemplateOwnership = props.mergeTemplateOwnership;
            provider.securityGrantToken = securityGrantToken.value;
            itemProvider.value = provider;
          }
          refreshItemProvider();
          watch(() => [props.mergeTemplateOwnership], refreshItemProvider);
          watch(securityGrantToken, () => {
            if (itemProvider.value) {
              itemProvider.value.securityGrantToken = securityGrantToken.value;
            }
          });
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
              iconCssClass: "fa fa-files-o",
              provider: itemProvider.value,
              multiple: __props.multiple,
              disableFolderSelection: ""
            }, null, 8, ["modelValue", "provider", "multiple"]);
          };
        }
      }));

      script.__file = "Framework/Controls/mergeTemplatePicker.obs";

    })
  };
}));
//# sourceMappingURL=mergeTemplatePicker.obs.js.map