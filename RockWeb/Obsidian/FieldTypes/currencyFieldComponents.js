System.register(['vue', './utils', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/currencyBox.obs'], (function (exports) {
    'use strict';
    var defineComponent, getFieldEditorProps, toNumberOrNull, CurrencyBox;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            toNumberOrNull = module.toNumberOrNull;
        }, function (module) {
            CurrencyBox = module["default"];
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "CurrencyField.Edit",
              components: {
                CurrencyBox
              },
              props: getFieldEditorProps(),
              data() {
                return {
                  internalValue: null
                };
              },
              watch: {
                internalValue() {
                  this.$emit("update:modelValue", this.internalValue !== null ? this.internalValue.toString() : "");
                },
                modelValue: {
                  immediate: true,
                  handler() {
                    this.internalValue = toNumberOrNull(this.modelValue || "");
                  }
                }
              },
              template: "\n<CurrencyBox v-model=\"internalValue\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "CurrencyField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=currencyFieldComponents.js.map
