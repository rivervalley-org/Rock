System.register(['vue', '@Obsidian/Libs/floating-ui', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, createElementVNode, defineComponent, ref, watch, openBlock, createElementBlock, Fragment, withModifiers, renderSlot, unref, normalizeStyle, createCommentVNode, useFloating, shift, arrow, autoUpdate, useVModelPassthrough;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      withModifiers = module.withModifiers;
      renderSlot = module.renderSlot;
      unref = module.unref;
      normalizeStyle = module.normalizeStyle;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      useFloating = module.useFloating;
      shift = module.shift;
      arrow = module.arrow;
      autoUpdate = module.autoUpdate;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }],
    execute: (function () {

      var _withScopeId = n => (pushScopeId("data-v-3d1ef668"), n = n(), popScopeId(), n);
      var _hoisted_1 = ["onClick"];
      var _hoisted_2 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-ellipsis-v"
      }, null, -1));
      var _hoisted_3 = _withScopeId(() => createElementVNode("path", {
        d: "M0,7L5,0L10,7"
      }, null, -1));
      var _hoisted_4 = [_hoisted_3];
      var _hoisted_5 = {
        class: "body"
      };
      var script = exports('default', defineComponent({
        name: 'dropDownContent',
        props: {
          modelValue: {
            type: Boolean,
            default: false
          },
          showArrow: {
            type: Boolean,
            default: false
          },
          preventCloseOnClickSelectors: {
            type: Object,
            default: [".datepicker"]
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var dropdownElement = ref();
          var arrowElement = ref();
          var anchorElement = ref();
          var isDropDownOpen = useVModelPassthrough(props, "modelValue", emit);
          var _useFloating = useFloating(anchorElement, dropdownElement, {
              middleware: [shift({
                padding: 1
              }), arrow({
                element: arrowElement
              })],
              whileElementsMounted: (r, f, u) => {
                var first = true;
                function delayUpdate() {
                  if (first) {
                    first = false;
                    u();
                  } else {
                    setTimeout(u, 25);
                  }
                }
                return autoUpdate(r, f, delayUpdate);
              }
            }),
            floatingStyles = _useFloating.floatingStyles,
            middlewareData = _useFloating.middlewareData;
          function onAnchorClick() {
            isDropDownOpen.value = !isDropDownOpen.value;
          }
          function onDocumentMouseDown(event) {
            var _dropdownElement$valu;
            if (!(event.target instanceof HTMLElement)) {
              return;
            }
            if (((_dropdownElement$valu = dropdownElement.value) === null || _dropdownElement$valu === void 0 ? void 0 : _dropdownElement$valu.contains(event.target)) === true) {
              return;
            }
            if (props.preventCloseOnClickSelectors.some(selector => Array.from(document.querySelectorAll(selector)).some(element => element.contains(event.target)))) {
              return;
            }
            if (!document.body.contains(event.target)) {
              var _dropdownElement$valu2;
              var positionElement = document.elementFromPoint(event.clientX, event.clientY);
              if (positionElement && ((_dropdownElement$valu2 = dropdownElement.value) === null || _dropdownElement$valu2 === void 0 ? void 0 : _dropdownElement$valu2.contains(positionElement)) === true) {
                return;
              }
            }
            if (anchorElement.value && anchorElement.value.contains(event.target)) {
              return;
            }
            isDropDownOpen.value = false;
          }
          watch(isDropDownOpen, () => {
            if (isDropDownOpen.value) {
              document.addEventListener("mousedown", onDocumentMouseDown);
            } else {
              document.removeEventListener("mousedown", onDocumentMouseDown);
            }
          }, {
            immediate: true
          });
          watch(middlewareData, () => {
            if (middlewareData.value.arrow && arrowElement.value) {
              var _middlewareData$value;
              arrowElement.value.style.left = "".concat((_middlewareData$value = middlewareData.value.arrow.x) !== null && _middlewareData$value !== void 0 ? _middlewareData$value : 0, "px");
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createElementVNode("span", {
              ref_key: "anchorElement",
              ref: anchorElement,
              onClick: withModifiers(onAnchorClick, ["prevent"])
            }, [renderSlot(_ctx.$slots, "anchor", {}, () => [_hoisted_2])], 8, _hoisted_1), unref(isDropDownOpen) ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "dropdownElement",
              ref: dropdownElement,
              style: normalizeStyle(unref(floatingStyles)),
              class: "floating-dropdown"
            }, [__props.showArrow ? (openBlock(), createElementBlock("svg", {
              key: 0,
              ref_key: "arrowElement",
              ref: arrowElement,
              class: "arrow"
            }, _hoisted_4, 512)) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_5, [renderSlot(_ctx.$slots, "default")])], 4)) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z = ".floating-dropdown[data-v-3d1ef668]{filter:drop-shadow(rgba(51,51,51,.533) 0 0 2px);z-index:3}.floating-dropdown>.body[data-v-3d1ef668]{background-color:#fff;border-radius:4px;margin-top:6px;overflow:clip}.floating-dropdown>.arrow[data-v-3d1ef668]{fill:#fff;height:7px;position:absolute;width:10px}";
      styleInject(css_248z);

      script.__scopeId = "data-v-3d1ef668";
      script.__file = "Framework/Controls/dropDownContent.obs";

    })
  };
}));
//# sourceMappingURL=dropDownContent.obs.js.map
