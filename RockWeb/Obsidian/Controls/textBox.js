System.register(['vue', '@Obsidian/Utility/component', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, computed, useVModelPassthrough, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            var textBox = exports('default', defineComponent({
              name: "TextBox",
              components: {
                RockFormField
              },
              props: {
                modelValue: {
                  type: String,
                  required: true
                },
                type: {
                  type: String,
                  default: "text"
                },
                maxLength: {
                  type: Number,
                  default: 524288
                },
                showCountDown: {
                  type: Boolean,
                  default: false
                },
                placeholder: {
                  type: String,
                  default: ""
                },
                inputClasses: {
                  type: String,
                  default: ""
                },
                formGroupClasses: {
                  type: String,
                  default: ""
                },
                rows: {
                  type: Number,
                  default: 3
                },
                textMode: {
                  type: String,
                  default: ""
                }
              },
              emits: ["update:modelValue"],
              setup(props, ctx) {
                var internalValue = useVModelPassthrough(props, "modelValue", ctx.emit);
                var isTextarea = computed(() => {
                  var _props$textMode;
                  return ((_props$textMode = props.textMode) === null || _props$textMode === void 0 ? void 0 : _props$textMode.toLowerCase()) === "multiline";
                });
                var charsRemaining = computed(() => {
                  return props.maxLength - internalValue.value.length;
                });
                var countdownClass = computed(() => {
                  if (charsRemaining.value >= 10) {
                    return "badge-default";
                  }
                  if (charsRemaining.value >= 0) {
                    return "badge-warning";
                  }
                  return "badge-danger";
                });
                var isInputGroup = computed(() => {
                  return !!ctx.slots.inputGroupPrepend || !!ctx.slots.inputGroupAppend;
                });
                var controlContainerClass = computed(() => {
                  return isInputGroup.value ? "input-group" : "";
                });
                return {
                  controlContainerClass,
                  internalValue,
                  isTextarea,
                  charsRemaining,
                  countdownClass
                };
              },
              template: "\n<RockFormField\n    v-model=\"internalValue\"\n    :formGroupClasses=\"'rock-text-box ' + formGroupClasses\"\n    name=\"textbox\">\n    <template #pre>\n        <em v-if=\"showCountDown\" class=\"pull-right badge\" :class=\"countdownClass\">\n            {{charsRemaining}}\n        </em>\n    </template>\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <slot name=\"prepend\" :isInputGroupSupported=\"true\" />\n            <div :class=\"controlContainerClass\">\n                <slot name=\"inputGroupPrepend\" :isInputGroupSupported=\"true\" />\n                <textarea v-if=\"isTextarea\" v-model=\"internalValue\" :rows=\"rows\" cols=\"20\" :maxlength=\"maxLength\" :id=\"uniqueId\" class=\"form-control\" v-bind=\"field\"></textarea>\n                <input v-else v-model=\"internalValue\" :id=\"uniqueId\" :type=\"type\" class=\"form-control\" :class=\"inputClasses\" v-bind=\"field\" :maxlength=\"maxLength\" :placeholder=\"placeholder\" />\n                <slot name=\"inputGroupAppend\" :isInputGroupSupported=\"true\" />\n            </div>\n            <slot name=\"append\" :isInputGroupSupported=\"true\" />\n        </div>\n    </template>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=textBox.js.map
