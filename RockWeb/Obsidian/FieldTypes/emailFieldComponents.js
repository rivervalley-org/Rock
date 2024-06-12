System.register(['vue', './utils', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/component'], (function (exports) {
    'use strict';
    var defineComponent, getFieldEditorProps, EmailBox, TextBox, useVModelPassthrough;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            EmailBox = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "EmailField.Edit",
              components: {
                EmailBox
              },
              props: getFieldEditorProps(),
              data() {
                return {
                  internalValue: ""
                };
              },
              watch: {
                internalValue() {
                  this.$emit("update:modelValue", this.internalValue);
                },
                modelValue: {
                  immediate: true,
                  handler() {
                    this.internalValue = this.modelValue || "";
                  }
                }
              },
              template: "\n<EmailBox v-model=\"internalValue\" />\n"
            }));
            var FilterComponent = exports('FilterComponent', defineComponent({
              name: "EmailField.Filter",
              components: {
                TextBox
              },
              props: getFieldEditorProps(),
              emits: ["update:modelValue"],
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = useVModelPassthrough(props, "modelValue", emit);
                return {
                  internalValue
                };
              },
              template: "\n<TextBox v-model=\"internalValue\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "EmailField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=emailFieldComponents.js.map
