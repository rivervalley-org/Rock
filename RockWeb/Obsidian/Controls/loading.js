System.register(['./loadingIndicator', 'vue'], (function (exports) {
    'use strict';
    var LoadingIndicator, defineComponent;
    return {
        setters: [function (module) {
            LoadingIndicator = module["default"];
        }, function (module) {
            defineComponent = module.defineComponent;
        }],
        execute: (function () {

            var loading = exports('default', defineComponent({
              name: "Loading",
              components: {
                LoadingIndicator
              },
              props: {
                isLoading: {
                  type: Boolean,
                  required: true
                },
                isSmall: {
                  type: Boolean,
                  default: false
                }
              },
              template: "\n<div>\n    <slot v-if=\"!isLoading\" />\n    <LoadingIndicator v-else :isSmall=\"isSmall\" />\n</div>"
            }));

        })
    };
}));
//# sourceMappingURL=loading.js.map
