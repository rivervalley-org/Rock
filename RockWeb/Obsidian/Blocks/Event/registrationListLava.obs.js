System.register(['vue', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var defineComponent, ref, openBlock, createElementBlock, useConfigurationValues;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
    }],
    execute: (function () {

      var _hoisted_1 = ["innerHTML"];
      var script = exports('default', defineComponent({
        name: 'registrationListLava',
        setup(__props) {
          var _config$html;
          var config = useConfigurationValues();
          var registrationsListLavaHTML = ref((_config$html = config === null || config === void 0 ? void 0 : config.html) !== null && _config$html !== void 0 ? _config$html : "");
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              innerHTML: registrationsListLavaHTML.value
            }, null, 8, _hoisted_1);
          };
        }
      }));

      script.__file = "src/Event/registrationListLava.obs";

    })
  };
}));
//# sourceMappingURL=registrationListLava.obs.js.map
