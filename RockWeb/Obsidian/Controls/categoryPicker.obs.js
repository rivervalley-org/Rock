System.register(['vue', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Utility/component', './treeItemPicker.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, CategoryTreeItemProvider, updateRefValue, TreeItemPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
    }, function (module) {
      CategoryTreeItemProvider = module.CategoryTreeItemProvider;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      TreeItemPicker = module["default"];
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'categoryPicker',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          rootCategoryGuid: {
            type: String
          },
          entityTypeGuid: {
            type: String
          },
          entityTypeQualifierColumn: {
            type: String
          },
          entityTypeQualifierValue: {
            type: String
          },
          securityGrantToken: {
            type: String,
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
          var itemProvider = ref(new CategoryTreeItemProvider());
          itemProvider.value.rootCategoryGuid = props.rootCategoryGuid;
          itemProvider.value.entityTypeGuid = props.entityTypeGuid;
          itemProvider.value.entityTypeQualifierColumn = props.entityTypeQualifierColumn;
          itemProvider.value.entityTypeQualifierValue = props.entityTypeQualifierValue;
          itemProvider.value.securityGrantToken = props.securityGrantToken;
          watch(() => props.securityGrantToken, () => {
            itemProvider.value.securityGrantToken = props.securityGrantToken;
          });
          watch(() => props.entityTypeGuid, () => {
            var oldProvider = itemProvider.value;
            var newProvider = new CategoryTreeItemProvider();
            newProvider.rootCategoryGuid = oldProvider.rootCategoryGuid;
            newProvider.entityTypeQualifierColumn = oldProvider.entityTypeQualifierColumn;
            newProvider.entityTypeQualifierValue = oldProvider.entityTypeQualifierValue;
            newProvider.securityGrantToken = oldProvider.securityGrantToken;
            newProvider.entityTypeGuid = props.entityTypeGuid;
            itemProvider.value = newProvider;
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
              iconCssClass: "fa fa-folder-open",
              provider: itemProvider.value,
              multiple: __props.multiple
            }, null, 8, ["modelValue", "provider", "multiple"]);
          };
        }
      }));

      script.__file = "Framework/Controls/categoryPicker.obs";

    })
  };
}));
//# sourceMappingURL=categoryPicker.obs.js.map
