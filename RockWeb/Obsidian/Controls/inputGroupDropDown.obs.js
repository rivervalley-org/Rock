System.register(['vue', '@Obsidian/Utility/component', './transitionVerticalCollapse'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, withModifiers, createTextVNode, toDisplayString, unref, createVNode, withCtx, withDirectives, Fragment, renderList, vShow, useVModelPassthrough, TransitionVerticalCollapse;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      withModifiers = module.withModifiers;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      unref = module.unref;
      createVNode = module.createVNode;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      Fragment = module.Fragment;
      renderList = module.renderList;
      vShow = module.vShow;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = createElementVNode("span", {
        class: "caret"
      }, null, -1);
      var _hoisted_2 = {
        class: "dropdown-menu"
      };
      var _hoisted_3 = ["onClick"];
      var script = exports('default', defineComponent({
        name: 'inputGroupDropDown',
        props: {
          modelValue: {
            type: String,
            default: ""
          },
          items: {
            type: Object,
            default: []
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var expanded = ref(false);
          var selectedText = computed(() => {
            var _props$items, _props$items$find;
            return ((_props$items = props.items) === null || _props$items === void 0 ? void 0 : (_props$items$find = _props$items.find(i => i.value === internalValue.value)) === null || _props$items$find === void 0 ? void 0 : _props$items$find.text) || "";
          });
          function select(value) {
            internalValue.value = value;
            expanded.value = false;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["input-group-btn", {
                open: expanded.value
              }])
            }, [createElementVNode("button", {
              class: "btn btn-default dropdown-toggle",
              type: "button",
              onClick: _cache[0] || (_cache[0] = withModifiers($event => expanded.value = !expanded.value, ["prevent"]))
            }, [createTextVNode(toDisplayString(unref(selectedText)) + " ", 1), _hoisted_1]), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [withDirectives(createElementVNode("ul", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index) => {
                var _item$value;
                return openBlock(), createElementBlock("li", {
                  key: (_item$value = item === null || item === void 0 ? void 0 : item.value) !== null && _item$value !== void 0 ? _item$value : index
                }, [createElementVNode("a", {
                  href: "#",
                  onClick: withModifiers($event => {
                    var _item$value2;
                    return select((_item$value2 = item.value) !== null && _item$value2 !== void 0 ? _item$value2 : '');
                  }, ["prevent"])
                }, toDisplayString(item.text), 9, _hoisted_3)]);
              }), 128))], 512), [[vShow, expanded.value]])]),
              _: 1
            })], 2);
          };
        }
      }));

      script.__file = "Framework/Controls/inputGroupDropDown.obs";

    })
  };
}));
//# sourceMappingURL=inputGroupDropDown.obs.js.map
