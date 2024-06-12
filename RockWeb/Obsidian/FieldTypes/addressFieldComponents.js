System.register(['vue', './utils', '@Obsidian/Controls/addressControl.obs'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, getFieldEditorProps, AddressControl;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            AddressControl = module["default"];
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "AddressField.Edit",
              components: {
                AddressControl
              },
              props: getFieldEditorProps(),
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = ref({});
                var disableFrontEndValidation = computed(() => props.dataEntryMode == "defaultValue");
                var omitDefaultValues = computed(() => props.dataEntryMode == "defaultValue");
                watch(() => props.modelValue, () => {
                  try {
                    internalValue.value = JSON.parse(props.modelValue || "{}");
                  } catch (_unused) {
                    internalValue.value = {};
                  }
                }, {
                  immediate: true
                });
                watch(() => internalValue.value, () => {
                  emit("update:modelValue", JSON.stringify(internalValue.value));
                }, {
                  deep: true
                });
                return {
                  internalValue,
                  disableFrontEndValidation,
                  omitDefaultValues
                };
              },
              template: "\n<AddressControl v-model=\"internalValue\" :disableFrontEndValidation=\"disableFrontEndValidation\" :omitDefaultValues=\"omitDefaultValues\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "AddressField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=addressFieldComponents.js.map
