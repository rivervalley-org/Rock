System.register(['vue', './utils', '@Obsidian/Controls/phoneNumberBox.obs'], (function (exports) {
    'use strict';
    var defineComponent, getFieldEditorProps, PhoneNumberBox;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            PhoneNumberBox = module["default"];
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "PhoneNumberField.Edit",
              components: {
                PhoneNumberBox
              },
              props: getFieldEditorProps(),
              data() {
                return {
                  internalValue: ""
                };
              },
              computed: {
                configAttributes() {
                  var attributes = {};
                  return attributes;
                }
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
              template: "\n<PhoneNumberBox v-model=\"internalValue\" v-bind=\"configAttributes\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "PhoneNumberField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=phoneNumberFieldComponents.js.map
