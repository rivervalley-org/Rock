System.register(['vue', './datePartsPicker'], (function (exports) {
    'use strict';
    var defineComponent, DatePartsPicker;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            DatePartsPicker = module["default"];
        }],
        execute: (function () {

            var birthdayPicker = exports('default', defineComponent({
              name: "BirthdayPicker",
              components: {
                DatePartsPicker
              },
              template: "\n<DatePartsPicker :allowFutureDates=\"false\" :requireYear=\"false\" />"
            }));

        })
    };
}));
//# sourceMappingURL=birthdayPicker.js.map
