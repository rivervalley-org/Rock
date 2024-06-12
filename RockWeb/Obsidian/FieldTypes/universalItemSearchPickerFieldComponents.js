System.register(['vue', './utils', '@Obsidian/Controls/Internal/universalItemSearchPicker.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/booleanUtils'], (function (exports) {
    'use strict';
    var defineComponent, ref, inject, computed, watch, getFieldEditorProps, UniversalItemSearchPicker, updateRefValue, asBoolean;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            inject = module.inject;
            computed = module.computed;
            watch = module.watch;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            UniversalItemSearchPicker = module["default"];
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function (module) {
            asBoolean = module.asBoolean;
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "UniversalItemSearchPickerField.Edit",
              components: {
                UniversalItemSearchPicker
              },
              props: getFieldEditorProps(),
              setup(props, _ref) {
                var _inject;
                var emit = _ref.emit;
                var internalValue = ref(getModelValue());
                var isRequired = (_inject = inject("isRequired")) !== null && _inject !== void 0 ? _inject : false;
                var areDetailsAlwaysVisible = computed(() => {
                  return asBoolean(props.configurationValues["areDetailsAlwaysVisible"]);
                });
                var isIncludeInactiveVisible = computed(() => {
                  return asBoolean(props.configurationValues["isIncludeInactiveVisible"]);
                });
                var searchUrl = computed(() => {
                  return props.configurationValues["searchUrl"];
                });
                function getModelValue() {
                  try {
                    return JSON.parse(props.modelValue);
                  } catch (_unused) {
                    return null;
                  }
                }
                watch(internalValue, () => {
                  emit("update:modelValue", JSON.stringify(internalValue.value));
                });
                watch(() => props.modelValue, () => {
                  updateRefValue(internalValue, getModelValue());
                });
                return {
                  areDetailsAlwaysVisible,
                  isIncludeInactiveVisible,
                  internalValue,
                  isRequired,
                  searchUrl
                };
              },
              template: "\n<UniversalItemSearchPicker v-model=\"internalValue\"\n                           :areDetailsAlwaysVisible=\"areDetailsAlwaysVisible\"\n                           :isIncludeInactiveVisible=\"isIncludeInactiveVisible\"\n                           :isRequired=\"isRequired\"\n                           :searchUrl=\"searchUrl\" />\n"
            }));
            var FilterComponent = exports('FilterComponent', EditComponent);

        })
    };
}));
//# sourceMappingURL=universalItemSearchPickerFieldComponents.js.map
