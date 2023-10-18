System.register(['vue', '@Obsidian/PageState'], (function (exports) {
    'use strict';
    var defineComponent, useStore;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            useStore = module.useStore;
        }],
        execute: (function () {

            var store = useStore();
            var secondaryBlock = exports('default', defineComponent({
              name: "SecondaryBlock",
              computed: {
                isVisible() {
                  return store.state.areSecondaryBlocksShown;
                }
              },
              template: "\n<div class=\"secondary-block\">\n    <slot v-if=\"isVisible\" />\n</div>"
            }));

        })
    };
}));
//# sourceMappingURL=secondaryBlock.js.map
