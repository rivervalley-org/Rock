System.register(['vue'], (function (exports) {
    'use strict';
    var defineComponent;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }],
        execute: (function () {

            var sectionHeader = exports('default', defineComponent({
              name: "Header",
              props: {
                title: {
                  type: String,
                  default: ""
                },
                description: {
                  type: String,
                  default: ""
                },
                isSeparatorHidden: {
                  type: Boolean,
                  default: false
                }
              },
              emits: ["update:modelValue"],
              setup() {
                return {};
              },
              template: "\n<div class=\"rock-header\">\n    <div class=\"d-flex flex-wrap justify-content-between\">\n        <div>\n            <h3 v-if=\"title\" class=\"title\">{{ title }}</h3>\n            <p v-if=\"description\" class=\"description\">{{ description }}</p>\n        </div>\n        <div v-if=\"$slots.actions\" class=\"section-header-actions align-self-end\">\n            <slot name=\"actions\" />\n        </div>\n    </div>\n\n    <hr v-if=\"!isSeparatorHidden\" class=\"section-header-hr\">\n</div>\n"
            }));

        })
    };
}));
//# sourceMappingURL=sectionHeader.js.map
