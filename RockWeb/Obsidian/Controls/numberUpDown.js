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

            var NumberUpDownInternal = exports('NumberUpDownInternal', defineComponent({
              name: "NumberUpDownInternal",
              props: {
                modelValue: {
                  type: Number,
                  required: true
                },
                min: {
                  type: Number,
                  default: 1
                },
                max: {
                  type: Number,
                  default: 10
                },
                disabled: {
                  type: Boolean,
                  default: false
                }
              },
              data() {
                return {
                  internalValue: 0
                };
              },
              methods: {
                goUp() {
                  if (!this.isUpDisabled) {
                    this.internalValue++;
                  }
                },
                goDown() {
                  if (!this.isDownDisabled) {
                    this.internalValue--;
                  }
                }
              },
              computed: {
                isUpDisabled() {
                  return this.internalValue >= this.max;
                },
                isDownDisabled() {
                  return this.internalValue <= this.min;
                }
              },
              watch: {
                modelValue: {
                  immediate: true,
                  handler() {
                    this.internalValue = this.modelValue;
                  }
                },
                internalValue() {
                  this.$emit("update:modelValue", this.internalValue);
                }
              },
              template: "\n<div class=\"numberincrement\">\n    <a @click=\"goDown\" class=\"numberincrement-down\" :class=\"{disabled: disabled || isDownDisabled}\" :disabled=\"disabled || isDownDisabled\">\n        <i class=\"fa fa-minus \"></i>\n    </a>\n    <span class=\"numberincrement-value\">{{modelValue}}</span>\n    <a @click=\"goUp\" class=\"numberincrement-up\" :class=\"{disabled: disabled || isUpDisabled}\" :disabled=\"disabled || isUpDisabled\">\n        <i class=\"fa fa-plus \"></i>\n    </a>\n</div>"
            }));
            var numberUpDown = exports('default', defineComponent({
              name: "NumberUpDown",
              components: {
                RockFormField,
                NumberUpDownInternal
              },
              props: {
                modelValue: {
                  type: Number,
                  required: true
                },
                min: {
                  type: Number,
                  default: 1
                },
                max: {
                  type: Number,
                  default: 10
                },
                numberIncrementClasses: {
                  type: String,
                  default: ""
                }
              },
              data() {
                return {
                  internalValue: 0
                };
              },
              watch: {
                modelValue: {
                  immediate: true,
                  handler() {
                    this.internalValue = this.modelValue;
                  }
                },
                internalValue() {
                  this.$emit("update:modelValue", this.internalValue);
                }
              },
              methods: {
                additionalClasses(fieldLabel) {
                  if (fieldLabel !== "") {
                    return "margin-t-sm ".concat(this.numberIncrementClasses);
                  } else {
                    return this.numberIncrementClasses;
                  }
                }
              },
              template: "\n<RockFormField\n    :modelValue=\"internalValue\"\n    formGroupClasses=\"number-up-down\"\n    name=\"numberupdown\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <NumberUpDownInternal v-model=\"internalValue\" :min=\"min\" :max=\"max\" :class=\"additionalClasses(fieldLabel)\" />\n        </div>\n    </template>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=numberUpDown.js.map
