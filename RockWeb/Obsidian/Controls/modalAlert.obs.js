System.register(['vue', '@Obsidian/Enums/Controls/modalAlertType', './dialog.obs', './rockButton.obs'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, openBlock, createBlock, unref, withCtx, createVNode, createElementBlock, toDisplayString, createCommentVNode, renderSlot, ModalAlertType, Dialog, RockButton;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      createElementBlock = module.createElementBlock;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      renderSlot = module.renderSlot;
    }, function (module) {
      ModalAlertType = module.ModalAlertType;
    }, function (module) {
      Dialog = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        key: 0
      };
      var _hoisted_2 = createTextVNode("OK");
      var script = exports('default', defineComponent({
        name: 'modalAlert',
        props: {
          modelValue: {
            type: Boolean,
            default: false
          },
          type: {
            type: String,
            default: ModalAlertType.None
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Dialog), {
              modelValue: __props.modelValue,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => emit('update:modelValue', $event))
            }, {
              footer: withCtx(() => [createVNode(unref(RockButton), {
                onClick: _cache[0] || (_cache[0] = $event => emit('update:modelValue', false)),
                btnType: "primary"
              }, {
                default: withCtx(() => [_hoisted_2]),
                _: 1
              })]),
              default: withCtx(() => [__props.type !== unref(ModalAlertType).None ? (openBlock(), createElementBlock("h4", _hoisted_1, toDisplayString(__props.type), 1)) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")]),
              _: 3
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/modalAlert.obs";

    })
  };
}));
//# sourceMappingURL=modalAlert.obs.js.map
