System.register(['vue', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            var colorPicker = exports('default', defineComponent({
              name: "ColorPicker",
              components: {
                RockFormField
              },
              props: {
                modelValue: {
                  type: String,
                  required: true
                },
                placeholder: {
                  type: String,
                  default: ""
                }
              },
              emits: ["update:modelValue"],
              data: function data() {
                return {
                  internalValue: this.modelValue
                };
              },
              mounted() {
                var $colorPicker = window["$"](this.$refs.colorPicker);
                $colorPicker.colorpicker();
                $colorPicker.find("> input").on("change", () => {
                  this.internalValue = $colorPicker.find("> input").val();
                });
              },
              computed: {},
              watch: {
                internalValue() {
                  this.$emit("update:modelValue", this.internalValue);
                },
                modelValue() {
                  this.internalValue = this.modelValue;
                }
              },
              template: "\n<RockFormField\n    v-model=\"internalValue\"\n    formGroupClasses=\"rock-color-picker\"\n    name=\"colorpicker\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <div ref=\"colorPicker\" class=\"input-group input-width-lg\">\n                <input v-model=\"internalValue\" :id=\"uniqueId\" type=\"text\" class=\"form-control\" v-bind=\"field\" :placeholder=\"placeholder\" />\n                <span class=\"input-group-addon\">\n                    <i></i>\n                </span>\n            </div>\n        </div>\n    </template>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=colorPicker.js.map
