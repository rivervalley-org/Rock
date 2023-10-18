System.register(['vue', './inlineSwitch', './transitionVerticalCollapse', '@Obsidian/Utility/component', './sectionHeader'], (function (exports) {
    'use strict';
    var defineComponent, computed, InlineSwitch, TransitionVerticalCollapse, useVModelPassthrough, SectionHeader;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }, function (module) {
            InlineSwitch = module["default"];
        }, function (module) {
            TransitionVerticalCollapse = module["default"];
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            SectionHeader = module["default"];
        }],
        execute: (function () {

            var sectionContainer = exports('default', defineComponent({
              name: "SectionContainer",
              components: {
                SectionHeader,
                InlineSwitch,
                TransitionVerticalCollapse
              },
              props: {
                modelValue: {
                  type: Boolean,
                  default: false
                },
                toggleText: {
                  type: String,
                  default: ""
                },
                title: {
                  type: String,
                  default: ""
                },
                description: {
                  type: String,
                  default: ""
                }
              },
              emits: ["update:modelValue"],
              setup(props, _ref) {
                var emit = _ref.emit;
                var enabled = useVModelPassthrough(props, "modelValue", emit);
                var showContent = computed(() => enabled.value || !props.toggleText);
                return {
                  enabled,
                  showContent
                };
              },
              template: "\n<div class=\"section-container well\">\n    <div class=\"section-header\">\n        <div class=\"section-header-content\">\n            <SectionHeader :title=\"title\" :description=\"description\" :isSeparatorHidden=\"true\">\n                <template #actions><slot name=\"actions\" /></template>\n            </SectionHeader>\n        </div>\n\n        <div v-if=\"toggleText\" class=\"section-header-toggle align-self-end\">\n            <InlineSwitch v-model=\"enabled\" :label=\"toggleText\" />\n        </div>\n    </div>\n\n    <TransitionVerticalCollapse>\n        <div v-if=\"showContent\">\n            <hr class=\"section-header-hr\">\n            <slot />\n        </div>\n    </TransitionVerticalCollapse>\n</div>\n"
            }));

        })
    };
}));
//# sourceMappingURL=sectionContainer.js.map
