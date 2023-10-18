System.register(['./notificationBox.obs', 'vue'], (function (exports) {
    'use strict';
    var NotificationBox, defineComponent, computed;
    return {
        setters: [function (module) {
            NotificationBox = module["default"];
        }, function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }],
        execute: (function () {

            var rockValidation = exports('default', defineComponent({
              name: "RockValidation",
              components: {
                NotificationBox
              },
              props: {
                errors: {
                  type: Array,
                  required: true
                }
              },
              setup(props) {
                var hasErrors = computed(() => props.errors.length > 0);
                return {
                  hasErrors
                };
              },
              template: "\n<NotificationBox v-show=\"hasErrors\" alertType=\"validation\">\n    Please correct the following:\n    <ul>\n        <li v-for=\"error of errors\">\n            <strong>{{error.name}}</strong>\n            {{error.text}}\n        </li>\n    </ul>\n</NotificationBox>\n"
            }));

        })
    };
}));
//# sourceMappingURL=rockValidation.js.map
