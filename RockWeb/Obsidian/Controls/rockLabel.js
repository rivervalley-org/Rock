System.register(['vue', './helpBlock'], (function (exports) {
    'use strict';
    var defineComponent, HelpBlock;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            HelpBlock = module["default"];
        }],
        execute: (function () {

            var rockLabel = exports('default', defineComponent({
              name: "RockLabel",
              components: {
                HelpBlock
              },
              props: {
                help: {
                  type: String,
                  default: ""
                }
              },
              template: "\n<label class=\"control-label\">\n    <slot />\n    <HelpBlock v-if=\"help\" :text=\"help\" />\n</label>"
            }));

        })
    };
}));
//# sourceMappingURL=rockLabel.js.map
