System.register(['vue'], (function (exports) {
    'use strict';
    var defineComponent;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }],
        execute: (function () {

            var javaScriptAnchor = exports('default', defineComponent({
              name: "JavaScriptAnchor",
              template: "\n<a href=\"javascript:void(0);\"><slot /></a>"
            }));

        })
    };
}));
//# sourceMappingURL=javaScriptAnchor.js.map
