System.register(['vue', './javaScriptAnchor', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, computed, JavaScriptAnchor, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }, function (module) {
            JavaScriptAnchor = module["default"];
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            var toggle = exports('default', defineComponent({
              name: "Toggle",
              components: {
                JavaScriptAnchor,
                RockFormField
              },
              props: {
                modelValue: {
                  type: Boolean,
                  required: true
                },
                trueText: {
                  type: String,
                  default: "On"
                },
                falseText: {
                  type: String,
                  default: "Off"
                },
                btnSize: {
                  type: String,
                  default: ""
                }
              },
              setup(props, _ref) {
                var emit = _ref.emit;
                var getButtonGroupClass = computed(() => {
                  var classes = ["btn-group", "btn-toggle"];
                  if (props.btnSize) {
                    classes.push("btn-group-".concat(props.btnSize));
                  }
                  return classes;
                });
                var onClick = isOn => {
                  if (isOn !== props.modelValue) {
                    emit("update:modelValue", isOn);
                  }
                };
                return {
                  getButtonGroupClass,
                  onClick,
                  selectedClasses: "active btn btn-primary",
                  unselectedClasses: "btn btn-default"
                };
              },
              template: "\n<RockFormField\n    :modelValue=\"modelValue\"\n    formGroupClasses=\"toggle\"\n    name=\"toggle\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <div class=\"toggle-container\">\n                <div :class=\"getButtonGroupClass\">\n                    <JavaScriptAnchor :class=\"modelValue ? unselectedClasses : selectedClasses\" @click=\"onClick(false)\">\n                        <slot name=\"off\">{{falseText}}</slot>\n                    </JavaScriptAnchor>\n                    <JavaScriptAnchor :class=\"modelValue ? selectedClasses : unselectedClasses\" @click=\"onClick(true)\">\n                        <slot name=\"on\">{{trueText}}</slot>\n                    </JavaScriptAnchor>\n                </div>\n            </div>\n        </div>\n    </template>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=toggle.js.map
