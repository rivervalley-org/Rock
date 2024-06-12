System.register(['vue', './javaScriptAnchor.obs', './rockFormField.obs'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createBlock, unref, withCtx, createElementVNode, normalizeClass, createVNode, renderSlot, createTextVNode, toDisplayString, JavaScriptAnchor, RockFormField;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      normalizeClass = module.normalizeClass;
      createVNode = module.createVNode;
      renderSlot = module.renderSlot;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      JavaScriptAnchor = module["default"];
    }, function (module) {
      RockFormField = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "toggle-container"
      };
      var script = exports('default', defineComponent({
        name: 'toggle',
        props: {
          modelValue: {
            type: Boolean,
            required: true
          },
          trueText: {
            type: String,
            default: "On"
          },
          falseText: {
            type: String,
            default: "Off"
          },
          btnSize: {
            type: String,
            default: ""
          },
          onButtonActiveCssClass: {
            type: String,
            default: ""
          },
          offButtonActiveCssClass: {
            type: String,
            default: ""
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var getButtonGroupClass = computed(() => {
            var classes = ["btn-group", "btn-toggle"];
            if (props.btnSize) {
              classes.push("btn-group-".concat(props.btnSize));
            }
            return classes;
          });
          var onClick = isOn => {
            if (isOn !== props.modelValue) {
              emit("update:modelValue", isOn);
            }
          };
          var selectedClasses = "active btn btn-primary";
          var unselectedClasses = "btn btn-default";
          var onButtonSelectedClasses = "".concat(selectedClasses, " ").concat(props.onButtonActiveCssClass);
          var offButtonSelectedClasses = "".concat(selectedClasses, " ").concat(props.offButtonActiveCssClass);
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: __props.modelValue,
              formGroupClasses: "toggle",
              name: "toggle"
            }, {
              default: withCtx(_ref2 => {
                _ref2.uniqueId;
                  _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", {
                  class: normalizeClass(unref(getButtonGroupClass))
                }, [createVNode(unref(JavaScriptAnchor), {
                  class: normalizeClass(__props.modelValue ? onButtonSelectedClasses : unselectedClasses),
                  onClick: _cache[0] || (_cache[0] = $event => onClick(true))
                }, {
                  default: withCtx(() => [renderSlot(_ctx.$slots, "on", {}, () => [createTextVNode(toDisplayString(__props.trueText), 1)])]),
                  _: 3
                }, 8, ["class"]), createVNode(unref(JavaScriptAnchor), {
                  class: normalizeClass(__props.modelValue ? unselectedClasses : offButtonSelectedClasses),
                  onClick: _cache[1] || (_cache[1] = $event => onClick(false))
                }, {
                  default: withCtx(() => [renderSlot(_ctx.$slots, "off", {}, () => [createTextVNode(toDisplayString(__props.falseText), 1)])]),
                  _: 3
                }, 8, ["class"])], 2)])])];
              }),
              _: 3
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/toggle.obs";

    })
  };
}));
//# sourceMappingURL=toggle.obs.js.map
