System.register(['vue', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            var checkBox = exports('default', defineComponent({
              name: "CheckBox",
              components: {
                RockFormField
              },
              props: {
                modelValue: {
                  type: Boolean,
                  required: true
                },
                label: {
                  type: String,
                  required: true
                },
                rules: {
                  type: String,
                  default: ""
                },
                text: {
                  type: String,
                  default: ""
                }
              },
              emits: {
                "update:modelValue": _value => true
              },
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = ref(props.modelValue);
                var toggle = () => {
                  internalValue.value = !internalValue.value;
                };
                watch(() => props.modelValue, () => {
                  internalValue.value = props.modelValue;
                });
                watch(internalValue, () => {
                  emit("update:modelValue", internalValue.value);
                });
                return {
                  internalValue,
                  toggle
                };
              },
              template: "\n<RockFormField\n    :modelValue=\"modelValue\"\n    :label=\"label\"\n    formGroupClasses=\"rock-check-box\"\n    name=\"checkbox\">\n    <template #default=\"{uniqueId, field}\">\n    <div class=\"control-wrapper\">\n        <div class=\"checkbox\">\n            <label class=\"rock-checkbox-icon\">\n                <input type=\"checkbox\" v-bind=\"field\" v-model=\"internalValue\" :id=\"uniqueId\" />\n                <span class=\"label-text\">&nbsp;{{ text }}</span>\n            </label>\n        </div>\n    </div>\n    </template>\n</RockFormField>\n"
            }));

        })
    };
}));
//# sourceMappingURL=checkBox.js.map
