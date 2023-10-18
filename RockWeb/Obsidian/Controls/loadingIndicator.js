System.register(['vue'], (function (exports) {
    'use strict';
    var defineComponent, ref;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
        }],
        execute: (function () {

            var loadingIndicator = exports('default', defineComponent({
              name: "LoadingIndicator",
              props: {
                delay: {
                  type: Number,
                  default: 0
                },
                isSmall: {
                  type: Boolean,
                  default: false
                }
              },
              setup(props) {
                var isShown = ref(!props.delay);
                if (props.delay) {
                  setTimeout(() => isShown.value = true, props.delay);
                }
                return {
                  isShown
                };
              },
              template: "\n<div v-if=\"isShown\" :class=\"['text-center', isSmall ? '' : 'fa-2x']\">\n    <i class=\"fas fa-spinner fa-pulse\"></i>\n</div>"
            }));

        })
    };
}));
//# sourceMappingURL=loadingIndicator.js.map
