System.register(['vue', '@Obsidian/Controls/panel'], (function (exports) {
    'use strict';
    var defineComponent, Panel;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            Panel = module["default"];
        }],
        execute: (function () {

            var block = exports('default', defineComponent({
              name: "Block",
              components: {
                Panel
              },
              props: {
                title: {
                  type: String,
                  required: false
                }
              },
              setup() {
                return {};
              },
              template: "\n<Panel type=\"block\" :title=\"title\">\n    <template v-if=\"$slots.headerActions\" #headerActions>\n        <slot name=\"headerActions\" />\n    </template>\n\n    <template v-if=\"$slots.drawer\" #drawer>\n        <slot name=\"drawer\" />\n    </template>\n\n    <template v-if=\"$slots.preBody\" #preBody>\n        <slot name=\"preBody\" />\n    </template>\n\n    <slot />\n</Panel>"
            }));

        })
    };
}));
//# sourceMappingURL=block.js.map
