System.register(['vue', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Utility/component', './treeItemPicker.obs'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, LocationTreeItemProvider, updateRefValue, TreeItemPicker;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            LocationTreeItemProvider = module.LocationTreeItemProvider;
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function (module) {
            TreeItemPicker = module["default"];
        }],
        execute: (function () {

            var locationItemPicker = exports('default', defineComponent({
              name: "LocationPicker",
              components: {
                TreeItemPicker
              },
              props: {
                modelValue: {
                  type: Object,
                  required: false
                },
                multiple: {
                  type: Boolean,
                  default: false
                },
                securityGrantToken: {
                  type: String,
                  required: false
                }
              },
              emits: {
                "update:modelValue": _value => true
              },
              setup(props, _ref) {
                var _props$modelValue;
                var emit = _ref.emit;
                var internalValue = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : null);
                var itemProvider = new LocationTreeItemProvider();
                itemProvider.securityGrantToken = props.securityGrantToken;
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
              template: "\n<TreeItemPicker v-model=\"internalValue\"\n    formGroupClasses=\"location-item-picker\"\n    iconCssClass=\"fa fa-home\"\n    :provider=\"itemProvider\"\n    :multiple=\"multiple\">\n\n    <template #pickerContentSuperHeader v-if=\"$slots.pickerContentSuperHeader\">\n        <slot name=\"pickerContentSuperHeader\" />\n    </template>\n    <template #prepend=\"{ isInputGroupSupported }\" v-if=\"$slots.prepend\">\n        <slot name=\"prepend\" :isInputGroupSupported=\"isInputGroupSupported\" />\n    </template>\n    <template #inputGroupPrepend=\"{ isInputGroupSupported }\" v-if=\"$slots.inputGroupPrepend\">\n        <slot name=\"inputGroupPrepend\" :isInputGroupSupported=\"isInputGroupSupported\" />\n    </template>\n    <template #append=\"{ isInputGroupSupported }\" v-if=\"$slots.append\">\n        <slot name=\"append\" :isInputGroupSupported=\"isInputGroupSupported\" />\n    </template>\n</TreeItemPicker>\n"
            }));

        })
    };
}));
//# sourceMappingURL=locationItemPicker.js.map
