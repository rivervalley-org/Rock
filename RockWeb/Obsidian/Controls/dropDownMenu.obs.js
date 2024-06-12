System.register(['vue', '@Obsidian/Utility/promiseUtils'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, defineComponent, ref, computed, watch, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, withModifiers, renderSlot, Fragment, renderList, createCommentVNode, createTextVNode, toDisplayString, isPromise;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      createElementVNode = module.createElementVNode;
      withModifiers = module.withModifiers;
      renderSlot = module.renderSlot;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createCommentVNode = module.createCommentVNode;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      isPromise = module.isPromise;
    }],
    execute: (function () {

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }

      var _withScopeId = n => (pushScopeId("data-v-73800e98"), n = n(), popScopeId(), n);
      var _hoisted_1 = ["onClick"];
      var _hoisted_2 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-ellipsis-v"
      }, null, -1));
      var _hoisted_3 = ["onClick"];
      var _hoisted_4 = {
        key: 1
      };
      var script = exports('default', defineComponent({
        name: 'dropDownMenu',
        props: {
          items: {
            type: Array,
            required: true
          },
          align: {
            type: String,
            default: "left"
          }
        },
        setup(__props) {
          var props = __props;
          var isDropDownOpen = ref(false);
          var dropdownElement = ref();
          var hasAnyIcons = computed(() => {
            return props.items.some(i => !!i.iconCssClass);
          });
          var additionalDropDownClasses = computed(() => {
            return isDropDownOpen.value ? "open" : "";
          });
          var additionalDropDownMenuClasses = computed(() => {
            return "dropdown-menu-".concat(props.align);
          });
          function getActionButtonClasses(action) {
            var classes = "btn-link";
            if (action.type === "danger") {
              classes += " dropdown-item-danger";
            }
            if (action.actionCssClass) {
              classes += " ".concat(action.actionCssClass);
            }
            return classes;
          }
          function getActionItemClasses(action) {
            return action.disabled ? "disabled" : "";
          }
          function onDropDownClick() {
            isDropDownOpen.value = true;
          }
          function onActionClick(_x, _x2) {
            return _onActionClick.apply(this, arguments);
          }
          function _onActionClick() {
            _onActionClick = _asyncToGenerator(function* (action, event) {
              if (action.disabled) {
                return;
              }
              if (action.handler) {
                var result = action.handler(event);
                if (isPromise(result)) {
                  yield result;
                }
              }
              isDropDownOpen.value = false;
            });
            return _onActionClick.apply(this, arguments);
          }
          function onDocumentMouseDown(event) {
            var _dropdownElement$valu;
            if (event.target instanceof HTMLElement && ((_dropdownElement$valu = dropdownElement.value) === null || _dropdownElement$valu === void 0 ? void 0 : _dropdownElement$valu.contains(event.target)) !== true) {
              isDropDownOpen.value = false;
            }
          }
          watch(isDropDownOpen, () => {
            if (isDropDownOpen.value) {
              document.addEventListener("mousedown", onDocumentMouseDown);
            } else {
              document.removeEventListener("mousedown", onDocumentMouseDown);
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              ref_key: "dropdownElement",
              ref: dropdownElement,
              class: normalizeClass(["dropdown", unref(additionalDropDownClasses)])
            }, [createElementVNode("button", {
              class: "btn btn-link btn-overflow",
              type: "button",
              onClick: withModifiers(onDropDownClick, ["prevent"])
            }, [renderSlot(_ctx.$slots, "default", {}, () => [_hoisted_2])], 8, _hoisted_1), createElementVNode("ul", {
              class: normalizeClass(["dropdown-menu", unref(additionalDropDownMenuClasses)])
            }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, action => {
              return openBlock(), createElementBlock("li", {
                class: normalizeClass(getActionItemClasses(action))
              }, [createElementVNode("button", {
                type: "button",
                class: normalizeClass(getActionButtonClasses(action)),
                onClick: withModifiers($event => onActionClick(action, $event), ["prevent", "stop"])
              }, [action.iconCssClass ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass(action.iconCssClass)
              }, null, 2)) : unref(hasAnyIcons) ? (openBlock(), createElementBlock("i", _hoisted_4)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(action.title), 1)], 10, _hoisted_3)], 2);
            }), 256))], 2)], 2);
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

      var css_248z = "li>button>i[data-v-73800e98]{display:inline-block;text-align:center;width:1.25em}li.disabled>button[data-v-73800e98]{cursor:not-allowed;opacity:.5}";
      styleInject(css_248z);

      script.__scopeId = "data-v-73800e98";
      script.__file = "Framework/Controls/dropDownMenu.obs";

    })
  };
}));
//# sourceMappingURL=dropDownMenu.obs.js.map
