System.register(['vue', './rockButton.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', './rockFormField.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/guid', '@Obsidian/Controls/fullscreen.obs'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, mergeProps, withCtx, renderSlot, normalizeClass, withModifiers, toDisplayString, createElementBlock, createCommentVNode, withDirectives, isRef, normalizeStyle, createVNode, createTextVNode, vShow, RockButton, BtnType, BtnSize, RockFormField, standardRockFormFieldProps, useStandardRockFormFieldProps, useVModelPassthrough, newGuid, Fullscreen;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      renderSlot = module.renderSlot;
      normalizeClass = module.normalizeClass;
      withModifiers = module.withModifiers;
      toDisplayString = module.toDisplayString;
      createElementBlock = module.createElementBlock;
      createCommentVNode = module.createCommentVNode;
      withDirectives = module.withDirectives;
      isRef = module.isRef;
      normalizeStyle = module.normalizeStyle;
      createVNode = module.createVNode;
      createTextVNode = module.createTextVNode;
      vShow = module.vShow;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      standardRockFormFieldProps = module.standardRockFormFieldProps;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      newGuid = module.newGuid;
    }, function (module) {
      Fullscreen = module["default"];
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

      var _withScopeId = n => (pushScopeId("data-v-3dcc5dd8"), n = n(), popScopeId(), n);
      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = ["onClick"];
      var _hoisted_3 = {
        class: "selected-names"
      };
      var _hoisted_4 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1));
      var _hoisted_5 = [_hoisted_4];
      var _hoisted_6 = _withScopeId(() => createElementVNode("b", {
        class: "fa fa-caret-down"
      }, null, -1));
      var _hoisted_7 = {
        key: 0,
        class: "hidden"
      };
      var _hoisted_8 = {
        key: 0,
        class: "picker-mode-options"
      };
      var _hoisted_9 = {
        key: 1,
        class: "picker-search-header picker-header"
      };
      var _hoisted_10 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-expand"
      }, null, -1));
      var _hoisted_11 = {
        class: "picker-actions"
      };
      var _hoisted_12 = {
        key: 1,
        class: "ml-auto d-flex align-items-center"
      };
      var script = exports('default', defineComponent({
        name: 'contentDropDownPicker',
        props: _objectSpread2(_objectSpread2({
          modelValue: {
            required: false
          }
        }, standardRockFormFieldProps), {}, {
          innerLabel: {
            type: String,
            default: ""
          },
          primaryButtonLabel: {
            type: String,
            default: "Select"
          },
          secondaryButtonLabel: {
            type: String,
            default: "Cancel"
          },
          hideMainActionButtons: {
            type: Boolean,
            default: false
          },
          showClear: {
            type: Boolean,
            default: false
          },
          showPopup: {
            type: Boolean,
            default: null
          },
          isFullscreen: {
            type: Boolean,
            default: false
          },
          iconCssClass: {
            type: String,
            default: "fa fa-folder-open"
          },
          pickerContentBoxHeight: {
            type: String,
            default: "200px"
          },
          pickerContentBoxWidth: {
            type: String,
            default: null
          },
          disablePickerContentBoxScroll: {
            type: Boolean,
            default: false
          },
          pickerClass: {
            type: String,
            default: null
          },
          disableAutoCloseOnPrimaryAction: {
            type: Boolean,
            default: false
          },
          pickerContentHeadingText: {
            type: String,
            default: ""
          },
          showFullscreenButton: {
            type: Boolean,
            default: false
          },
          forceContentReloadOnOpen: {
            type: Boolean,
            default: false
          },
          fullWidth: {
            type: Boolean,
            default: false
          },
          disabled: {
            type: Boolean,
            default: false
          }
        }),
        emits: ["primaryButtonClicked", "secondaryButtonClicked", "clearButtonClicked", "update:showPopup", "update:isFullscreen"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var fullscreenButtonType = BtnType.Link;
          var selectButton = {
            size: BtnSize.ExtraSmall,
            type: BtnType.Primary
          };
          var cancelButton = {
            size: BtnSize.ExtraSmall,
            type: BtnType.Link
          };
          var id = newGuid();
          var formFieldProps = useStandardRockFormFieldProps(props);
          var internalIsFullscreen = useVModelPassthrough(props, "isFullscreen", emit);
          var internalShowPopup = ref(false);
          var pickerIconClass = computed(() => "".concat(props.iconCssClass, " fa-fw"));
          var additionalPickerClass = computed(() => {
            var classes = props.pickerClass ? props.pickerClass : "";
            if (internalShowPopup.value) {
              classes += " open";
            }
            if (props.showClear) {
              classes += " picker-show-clear";
            }
            if (props.fullWidth) {
              classes += " picker-full-width";
            }
            return classes;
          });
          var pickerMenuInnerStyles = computed(() => {
            var height = internalIsFullscreen.value ? "100%" : props.pickerContentBoxHeight;
            return "height: ".concat(height, "; overflow-x: visible; overflow-y: ").concat(props.disablePickerContentBoxScroll ? "visible" : "auto", ";");
          });
          var pickerMenuStyles = computed(() => {
            if (props.pickerContentBoxWidth) {
              return "width: ".concat(props.pickerContentBoxWidth, ";");
            }
            return "";
          });
          var disabledBinding = computed(() => {
            return props.disabled ? {
              disabled: true,
              tabindex: -1,
              onMousedown: e => e.preventDefault()
            } : {};
          });
          watch(() => props.showPopup, () => {
            if (props.showPopup != null) {
              internalShowPopup.value = props.showPopup;
            }
          }, {
            immediate: true
          });
          watch(internalShowPopup, () => emit("update:showPopup", internalShowPopup.value));
          watch(() => props.disabled, () => {
            if (props.disabled) {
              internalShowPopup.value = false;
            }
          });
          function togglePickerMenu() {
            if (props.disabled) {
              internalShowPopup.value = false;
              return;
            }
            internalShowPopup.value = !internalShowPopup.value;
          }
          function onAction(type) {
            if (type !== "primary" || !props.disableAutoCloseOnPrimaryAction) {
              internalShowPopup.value = false;
            }
            emit("".concat(type, "ButtonClicked"));
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: __props.modelValue
            }, unref(formFieldProps), {
              name: 'picker' + unref(id)
            }), {
              default: withCtx(_ref2 => {
                _ref2.uniqueId;
                  _ref2.field;
                return [createElementVNode("div", _hoisted_1, [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: true
                }), createElementVNode("div", {
                  class: normalizeClass({
                    'input-group': _ctx.$slots.inputGroupPrepend || _ctx.$slots.inputGroupAppend
                  })
                }, [renderSlot(_ctx.$slots, "inputGroupPrepend", {
                  isInputGroupSupported: true
                }), createElementVNode("div", {
                  class: normalizeClass(["picker picker-obsidian picker-select rollover-container", unref(additionalPickerClass)])
                }, [createElementVNode("a", mergeProps({
                  class: ["picker-label", {
                    'has-ig-prepend': _ctx.$slots.inputGroupPrepend,
                    'text-gray-400': __props.disabled
                  }],
                  href: "#",
                  onClick: withModifiers(togglePickerMenu, ["prevent", "stop"])
                }, unref(disabledBinding)), [createElementVNode("i", {
                  class: normalizeClass(unref(pickerIconClass))
                }, null, 2), renderSlot(_ctx.$slots, "innerLabel", {}, () => [createElementVNode("span", _hoisted_3, toDisplayString(__props.innerLabel), 1)]), __props.showClear && !__props.disabled ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  role: "button",
                  "aria-label": "Clear selection",
                  class: "btn picker-select-none",
                  onClick: _cache[0] || (_cache[0] = withModifiers($event => onAction('clear'), ["prevent", "stop"]))
                }, _hoisted_5)) : createCommentVNode("v-if", true), _hoisted_6], 16, _hoisted_2), createCommentVNode(" This helps trigger the resize when embedded in auto-resizing controls such as modals. "), internalShowPopup.value ? (openBlock(), createElementBlock("div", _hoisted_7)) : createCommentVNode("v-if", true), internalShowPopup.value || !__props.forceContentReloadOnOpen ? withDirectives((openBlock(), createBlock(unref(Fullscreen), {
                  key: 1,
                  modelValue: unref(internalIsFullscreen),
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(internalIsFullscreen) ? internalIsFullscreen.value = $event : null),
                  class: normalizeClass(["picker-menu", unref(internalIsFullscreen) ? 'is-fullscreen' : 'dropdown-menu']),
                  style: normalizeStyle(unref(pickerMenuStyles))
                }, {
                  default: withCtx(() => [createCommentVNode(" Optional \"super header\" area for things such as a means to switch between picker types "), _ctx.$slots.pickerContentSuperHeader ? (openBlock(), createElementBlock("div", _hoisted_8, [renderSlot(_ctx.$slots, "pickerContentSuperHeader")])) : createCommentVNode("v-if", true), createCommentVNode(" Optional header area for picker header content. If you provide content for the header or enable showing the fullscreen button, this will show "), _ctx.$slots.pickerContentHeader || _ctx.$slots.pickerContentHeading || __props.pickerContentHeadingText || __props.showFullscreenButton ? (openBlock(), createElementBlock("div", _hoisted_9, [createCommentVNode(" Override entire header area with `pickerContentHeader` slot "), renderSlot(_ctx.$slots, "pickerContentHeader", {}, () => [createCommentVNode(" Override heading, but keep fullscreen button intact with this `pickerContentHeading` slot, or specify heading text with `pickerContentHeadingText` prop "), renderSlot(_ctx.$slots, "pickerContentHeading", {}, () => [createElementVNode("h4", null, toDisplayString(__props.pickerContentHeadingText), 1)]), createCommentVNode(" Show this fullscreen button in the header if enabled "), __props.showFullscreenButton ? (openBlock(), createBlock(unref(RockButton), {
                    key: 0,
                    onClick: _cache[1] || (_cache[1] = $event => internalIsFullscreen.value = !unref(internalIsFullscreen)),
                    btnType: unref(fullscreenButtonType),
                    class: "ml-auto w-auto",
                    title: "Toggle Fullscreen",
                    "aria-label": "Toggle Fullscreen"
                  }, {
                    default: withCtx(() => [_hoisted_10]),
                    _: 1
                  }, 8, ["btnType"])) : createCommentVNode("v-if", true)])])) : createCommentVNode("v-if", true), createCommentVNode(" Main Picker Content via default slot "), createElementVNode("div", {
                    class: "scrollbar-thin picker-body",
                    style: normalizeStyle(unref(pickerMenuInnerStyles))
                  }, [renderSlot(_ctx.$slots, "default")], 4), createCommentVNode(" Actions Buttons "), createElementVNode("div", _hoisted_11, [createCommentVNode(" Main Action Buttons: Overridable via `mainPickerActions` slot, or just configure with props "), !__props.hideMainActionButtons ? renderSlot(_ctx.$slots, "mainPickerActions", {
                    key: 0
                  }, () => [createVNode(unref(RockButton), {
                    btnSize: selectButton.size,
                    btnType: selectButton.type,
                    class: "picker-btn",
                    onClick: _cache[2] || (_cache[2] = withModifiers($event => onAction('primary'), ["prevent", "stop"]))
                  }, {
                    default: withCtx(() => [renderSlot(_ctx.$slots, "primaryButtonLabel", {}, () => [createTextVNode(toDisplayString(__props.primaryButtonLabel), 1)])]),
                    _: 3
                  }, 8, ["btnSize", "btnType"]), createVNode(unref(RockButton), {
                    btnSize: cancelButton.size,
                    btnType: cancelButton.type,
                    class: "picker-cancel",
                    onClick: _cache[3] || (_cache[3] = withModifiers($event => onAction('secondary'), ["prevent", "stop"]))
                  }, {
                    default: withCtx(() => [renderSlot(_ctx.$slots, "secondaryButtonLabel", {}, () => [createTextVNode(toDisplayString(__props.secondaryButtonLabel), 1)])]),
                    _: 3
                  }, 8, ["btnSize", "btnType"])]) : createCommentVNode("v-if", true), createCommentVNode(" Custom Action Buttons: `customPickerActions` slot allows you to add additional buttons to the right "), _ctx.$slots.customPickerActions ? (openBlock(), createElementBlock("div", _hoisted_12, [renderSlot(_ctx.$slots, "customPickerActions")])) : createCommentVNode("v-if", true)])]),
                  _: 3
                }, 8, ["modelValue", "class", "style"])), [[vShow, internalShowPopup.value]]) : createCommentVNode("v-if", true)], 2)], 2), renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: true
                })])];
              }),
              _: 3
            }, 16, ["modelValue", "name"]);
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

      var css_248z = ".scrollbar-thin[data-v-3dcc5dd8]{scrollbar-width:thin}.scrollbar-thin[data-v-3dcc5dd8]::-webkit-scrollbar{border-radius:4px;width:8px}.scrollbar-thin[data-v-3dcc5dd8]::-webkit-scrollbar-button{display:none}.scrollbar-thin[data-v-3dcc5dd8]::-webkit-scrollbar-thumb{background-color:#858585;border-radius:4px}.scrollbar-thin[data-v-3dcc5dd8]::-webkit-scrollbar-thumb:hover{background-color:#6b6b6b}.scrollbar-thin[data-v-3dcc5dd8]::-webkit-scrollbar-track{background-color:#f0f0f0;border-radius:4px}.picker-menu[data-v-3dcc5dd8]{--body-background:var(--panel-bg);overflow-y:visible}.picker-menu.is-fullscreen[data-v-3dcc5dd8]{display:flex!important;flex-direction:column}.picker-header[data-v-3dcc5dd8]{flex:0;width:100%}.picker-actions[data-v-3dcc5dd8],.picker-header[data-v-3dcc5dd8]{flex:0}.picker-body[data-v-3dcc5dd8]{flex:1}.has-ig-prepend[data-v-3dcc5dd8]{border-bottom-left-radius:0;border-top-left-radius:0}";
      styleInject(css_248z);

      script.__scopeId = "data-v-3dcc5dd8";
      script.__file = "Framework/Controls/contentDropDownPicker.obs";

    })
  };
}));
//# sourceMappingURL=contentDropDownPicker.obs.js.map
