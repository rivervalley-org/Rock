System.register(['vue'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }],
        execute: (function () {

            var inlineCheckBox = exports('default', defineComponent({
              name: "InlineCheckBox",
              components: {},
              emits: ["update:modelValue"],
              props: {
                modelValue: {
                  type: Boolean,
                  required: true
                },
                label: {
                  type: String,
                  required: true
                }
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
                  label: props.label,
                  toggle
                };
              },
              template: "\n<div class=\"checkbox\">\n    <label title=\"\">\n        <input type=\"checkbox\" v-model=\"internalValue\" v-bind=\"$attrs\" />\n        <span class=\"label-text \">{{label}}</span>\n    </label>\n</div>\n"
            }));

        })
    };
}));
//# sourceMappingURL=inlineCheckBox.js.map
