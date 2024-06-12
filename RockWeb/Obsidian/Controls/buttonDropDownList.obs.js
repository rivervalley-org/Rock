System.register(['vue', './rockFormField.obs', './rockButton.obs', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, defineComponent, ref, computed, watch, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, normalizeClass, createVNode, withModifiers, createTextVNode, toDisplayString, createElementBlock, Fragment, renderList, createCommentVNode, RockFormField, RockButton, useStandardRockFormFieldProps, useVModelPassthrough, standardRockFormFieldProps;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      normalizeClass = module.normalizeClass;
      createVNode = module.createVNode;
      withModifiers = module.withModifiers;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      useVModelPassthrough = module.useVModelPassthrough;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }],
    execute: (function () {

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }

      var _withScopeId = n => (pushScopeId("data-v-76af4645"), n = n(), popScopeId(), n);
      var _hoisted_1 = {
        class: "dropdown"
      };
      var _hoisted_2 = _withScopeId(() => createElementVNode("span", {
        class: "fa fa-caret-down"
      }, null, -1));
      var _hoisted_3 = {
        class: "dropdown-menu"
      };
      var _hoisted_4 = ["onClick"];
      var script = exports('default', defineComponent({
        name: 'buttonDropDownList',
        props: _objectSpread2({
          modelValue: {
            type: String,
            default: null
          },
          items: {
            type: Array,
            required: true
          },
          title: {
            type: String,
            default: ""
          },
          selectionStyle: {
            type: String,
            default: "title"
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var isDropDownOpen = ref(false);
          var dropdownElement = ref();
          var fieldProps = useStandardRockFormFieldProps(props);
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var itemsMap = computed(() => {
            return props.items.reduce((map, item) => {
              var _item$value, _item$text;
              map[(_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : ""] = (_item$text = item.text) !== null && _item$text !== void 0 ? _item$text : "";
              return map;
            }, {});
          });
          var selectedText = computed(() => {
            return itemsMap.value[internalValue.value];
          });
          function toggleOpen() {
            isDropDownOpen.value = !isDropDownOpen.value;
          }
          function selectValue(value) {
            internalValue.value = value;
            isDropDownOpen.value = false;
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
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: unref(internalValue)
            }, unref(fieldProps), {
              name: "button-dropdownlist"
            }), {
              default: withCtx(_ref2 => {
                var field = _ref2.field,
                  uniqueId = _ref2.uniqueId;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", {
                  class: normalizeClass({
                    open: isDropDownOpen.value
                  }),
                  ref_key: "dropdownElement",
                  ref: dropdownElement
                }, [createVNode(unref(RockButton), mergeProps({
                  class: "dropdown-toggle",
                  "aria-expanded": isDropDownOpen.value ? 'true' : 'false',
                  onClick: withModifiers(toggleOpen, ["prevent", "stop"]),
                  id: uniqueId
                }, field), {
                  default: withCtx(() => [createTextVNode(toDisplayString(__props.selectionStyle === 'title' && unref(internalValue) ? unref(selectedText) : __props.title) + " ", 1), _hoisted_2]),
                  _: 2
                }, 1040, ["aria-expanded", "onClick", "id"]), createElementVNode("ul", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, item => {
                  var _item$value2;
                  return openBlock(), createElementBlock("li", {
                    key: (_item$value2 = item.value) !== null && _item$value2 !== void 0 ? _item$value2 : 0,
                    onClick: withModifiers($event => {
                      var _item$value3;
                      return selectValue((_item$value3 = item.value) !== null && _item$value3 !== void 0 ? _item$value3 : '');
                    }, ["stop"])
                  }, [createElementVNode("a", null, [__props.selectionStyle === 'checkmark' ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: normalizeClass({
                      'fa fa-fw': true,
                      'fa-check': unref(internalValue) === item.value
                    })
                  }, null, 2)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(item.text), 1)])], 8, _hoisted_4);
                }), 128))])], 2)])];
              }),
              _: 1
            }, 16, ["modelValue"]);
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

      var css_248z = "li>button>i[data-v-76af4645]{display:inline-block;text-align:center;width:1.25em}li.disabled>button[data-v-76af4645]{cursor:not-allowed;opacity:.5}";
      styleInject(css_248z);

      script.__scopeId = "data-v-76af4645";
      script.__file = "Framework/Controls/buttonDropDownList.obs";

    })
  };
}));
//# sourceMappingURL=buttonDropDownList.obs.js.map
