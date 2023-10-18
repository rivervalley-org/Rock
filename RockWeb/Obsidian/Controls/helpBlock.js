System.register(['vue', './javaScriptAnchor'], (function (exports) {
    'use strict';
    var defineComponent, JavaScriptAnchor;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            JavaScriptAnchor = module["default"];
        }],
        execute: (function () {

            var HelpBlock = exports('default', defineComponent({
              name: "HelpBlock",
              components: {
                JavaScriptAnchor
              },
              props: {
                text: {
                  type: String,
                  required: true
                }
              },
              mounted() {
                var jquery = window["$"];
                jquery(this.$el).tooltip();
              },
              template: "\n<JavaScriptAnchor class=\"help\" tabindex=\"-1\" data-toggle=\"tooltip\" data-placement=\"auto\" data-container=\"body\" data-html=\"true\" title=\"\" :data-original-title=\"text\">\n    <i class=\"fa fa-info-circle\"></i>\n</JavaScriptAnchor>"
            }));

        })
    };
}));
//# sourceMappingURL=helpBlock.js.map
