System.register(['vue', './rockButton'], (function (exports) {
    'use strict';
    var defineComponent, RockButton;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            RockButton = module["default"];
        }],
        execute: (function () {

            var panelWidget = exports('default', defineComponent({
              name: "PanelWidget",
              components: {
                RockButton
              },
              props: {
                isDefaultOpen: {
                  type: Boolean,
                  default: false
                }
              },
              data() {
                return {
                  isOpen: this.isDefaultOpen
                };
              },
              methods: {
                toggle() {
                  this.isOpen = !this.isOpen;
                }
              },
              template: "\n<section class=\"panel panel-widget rock-panel-widget\">\n    <header class=\"panel-heading clearfix cursor-pointer\" @click=\"toggle\">\n        <div class=\"pull-left\">\n            <slot name=\"header\" />\n        </div>\n        <div class=\"pull-right\">\n            <RockButton btnType=\"link\" btnSize=\"xs\">\n                <i v-if=\"isOpen\" class=\"fa fa-chevron-up\"></i>\n                <i v-else class=\"fa fa-chevron-down\"></i>\n            </RockButton>\n        </div>\n    </header>\n    <div v-if=\"isOpen\" class=\"panel-body\">\n        <slot />\n    </div>\n</section>"
            }));

        })
    };
}));
//# sourceMappingURL=panelWidget.js.map
