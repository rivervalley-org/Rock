System.register(['vue', './utils', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/numberBox'], (function (exports) {
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
              name: "IntegerField.Edit",
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
              template: "\n<NumberBox v-model=\"internalValue\" rules=\"integer\" :decimal-count=\"0\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "IntegerField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=integerFieldComponents.js.map
