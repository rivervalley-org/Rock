System.register(['vue', './numberBox'], (function (exports) {
    'use strict';
    var defineComponent, NumberBox;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            NumberBox = module["default"];
        }],
        execute: (function () {

            var currencyBox = exports('default', defineComponent({
              name: "CurrencyBox",
              components: {
                NumberBox
              },
              props: {
                modelValue: {
                  type: Number,
                  default: null
                },
                minimumValue: {
                  type: Number
                },
                maximumValue: {
                  type: Number
                }
              },
              emits: ["update:modelValue"],
              data: function data() {
                return {
                  internalValue: null
                };
              },
              computed: {
                placeholder() {
                  return "0.00";
                }
              },
              watch: {
                internalValue() {
                  this.$emit("update:modelValue", this.internalValue);
                },
                modelValue: {
                  immediate: true,
                  handler() {
                    if (this.modelValue !== this.internalValue) {
                      this.internalValue = this.modelValue;
                    }
                  }
                }
              },
              template: "\n<NumberBox v-model=\"internalValue\"\n    :placeholder=\"placeholder\"\n    :minimum-value=\"minimumValue\"\n    :maximum-value=\"maximumValue\"\n    :decimal-count=\"2\"\n    rules=\"decimal\">\n    <template v-slot:inputGroupPrepend>\n        <span class=\"input-group-addon\">$</span>\n    </template>\n</NumberBox>\n"
            }));

        })
    };
}));
//# sourceMappingURL=currencyBox.js.map
