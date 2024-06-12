System.register(['vue', './rockFormField.obs'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createBlock, unref, withCtx, createElementVNode, toDisplayString, RockFormField;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      RockFormField = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "form-control-static"
      };
      var script = exports('default', defineComponent({
        name: 'staticFormControl',
        props: {
          modelValue: {
            type: String,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: __props.modelValue,
              formGroupClasses: "static-control",
              name: "static-form-control"
            }, {
              default: withCtx(_ref => {
                _ref.uniqueId;
                  _ref.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, toDisplayString(props.modelValue), 1)])];
              }),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/staticFormControl.obs";

    })
  };
}));
//# sourceMappingURL=staticFormControl.obs.js.map
