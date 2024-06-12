System.register(['vue', './utils', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/numberBox.obs'], (function (exports) {
    'use strict';
    var defineComponent, getFieldEditorProps, toNumberOrNull, NumberBox;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            toNumberOrNull = module.toNumberOrNull;
        }, function (module) {
            NumberBox = module["default"];
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "DecimalField.Edit",
              components: {
                NumberBox
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
              template: "\n<NumberBox v-model=\"internalValue\" rules=\"decimal\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "DecimalField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=decimalFieldComponents.js.map
