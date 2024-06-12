System.register(['vue', './datePartsPicker.obs'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createBlock, unref, DatePartsPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
    }, function (module) {
      DatePartsPicker = module["default"];
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'birthdayPicker',
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(DatePartsPicker), {
              allowFutureDates: false,
              requireYear: false
            });
          };
        }
      }));

      script.__file = "Framework/Controls/birthdayPicker.obs";

    })
  };
}));
//# sourceMappingURL=birthdayPicker.obs.js.map
