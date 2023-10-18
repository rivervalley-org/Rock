System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Utility/guid'], (function (exports) {
    'use strict';
    var defineComponent, computed, useVModelPassthrough, newGuid;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            newGuid = module.newGuid;
        }],
        execute: (function () {

            var inlineSwitch = exports('default', defineComponent({
              name: "InlineSwitch",
              components: {},
              props: {
                modelValue: {
                  type: Boolean,
                  required: true
                },
                label: {
                  type: String,
                  required: true
                },
                isBold: {
                  type: Boolean,
                  default: false
                },
                uniqueId: {
                  type: String,
                  default: ""
                }
              },
              emits: ["update:modelValue"],
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = useVModelPassthrough(props, "modelValue", emit);
                var internalUniqueId = "inline-switch-".concat(newGuid());
                var uniqueId = computed(() => props.uniqueId || internalUniqueId);
                var labelClass = computed(() => {
                  var classes = ["custom-control-label"];
                  if (props.isBold) {
                    classes.push("custom-control-label-bold");
                  }
                  return classes;
                });
                return {
                  labelClass,
                  internalValue,
                  uniqueId
                };
              },
              template: "\n<div class=\"custom-control custom-switch\">\n    <input v-model=\"internalValue\" :id=\"uniqueId\" class=\"custom-control-input\" type=\"checkbox\" />\n    <label :class=\"labelClass\" :for=\"uniqueId\">\n        <template v-if=\"label\">{{ label }}</template>\n        <template v-else>&nbsp;</template>\n    </label>\n</div>\n"
            }));

        })
    };
}));
//# sourceMappingURL=inlineSwitch.js.map
