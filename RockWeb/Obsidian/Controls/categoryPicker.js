System.register(['vue', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Utility/component', './treeItemPicker.obs'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, CategoryTreeItemProvider, updateRefValue, TreeItemPicker;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            CategoryTreeItemProvider = module.CategoryTreeItemProvider;
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function (module) {
            TreeItemPicker = module["default"];
        }],
        execute: (function () {

            var categoryPicker = exports('default', defineComponent({
              name: "CategoryPicker",
              components: {
                TreeItemPicker
              },
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
              emits: {
                "update:modelValue": _value => true
              },
              setup(props, _ref) {
                var _props$modelValue;
                var emit = _ref.emit;
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
                return {
                  internalValue,
                  itemProvider
                };
              },
              template: "\n<TreeItemPicker v-model=\"internalValue\"\n    formGroupClasses=\"category-picker\"\n    iconCssClass=\"fa fa-folder-open\"\n    :provider=\"itemProvider\"\n    :multiple=\"multiple\"\n/>\n"
            }));

        })
    };
}));
//# sourceMappingURL=categoryPicker.js.map
