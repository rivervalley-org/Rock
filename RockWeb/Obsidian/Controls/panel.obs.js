System.register(['vue', '@Obsidian/Utility/component', './fullscreen.obs', './transitionVerticalCollapse.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, useSlots, ref, computed, watch, nextTick, onBeforeUpdate, openBlock, createBlock, unref, isRef, normalizeClass, withCtx, createElementBlock, renderSlot, createCommentVNode, mergeProps, Fragment, createTextVNode, toDisplayString, withModifiers, renderList, createVNode, withDirectives, vShow, normalizeStyle, useVModelPassthrough, Fullscreen, TransitionVerticalCollapse;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      useSlots = module.useSlots;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      nextTick = module.nextTick;
      onBeforeUpdate = module.onBeforeUpdate;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
      normalizeClass = module.normalizeClass;
      withCtx = module.withCtx;
      createElementBlock = module.createElementBlock;
      renderSlot = module.renderSlot;
      createCommentVNode = module.createCommentVNode;
      mergeProps = module.mergeProps;
      Fragment = module.Fragment;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      withModifiers = module.withModifiers;
      renderList = module.renderList;
      createVNode = module.createVNode;
      withDirectives = module.withDirectives;
      vShow = module.vShow;
      normalizeStyle = module.normalizeStyle;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      Fullscreen = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
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

      var _hoisted_1 = {
        key: 0,
        class: "panel-sidebar-content"
      };
      var _hoisted_2 = ["tabIndex"];
      var _hoisted_3 = {
        class: "panel-title"
      };
      var _hoisted_4 = ["onClick"];
      var _hoisted_5 = {
        key: 0,
        class: "mr-1 ml-1 panel-action-zoom-control"
      };
      var _hoisted_6 = {
        class: "input-group"
      };
      var _hoisted_7 = createElementVNode("i", {
        class: "fa fa-minus"
      }, null, -1);
      var _hoisted_8 = [_hoisted_7];
      var _hoisted_9 = ["value"];
      var _hoisted_10 = createElementVNode("i", {
        class: "fa fa-plus"
      }, null, -1);
      var _hoisted_11 = [_hoisted_10];
      var _hoisted_12 = createElementVNode("i", {
        class: "fa fa-search-plus"
      }, null, -1);
      var _hoisted_13 = [_hoisted_12];
      var _hoisted_14 = createElementVNode("i", {
        class: "fa fa-question"
      }, null, -1);
      var _hoisted_15 = [_hoisted_14];
      var _hoisted_16 = createElementVNode("i", {
        class: "fa fa-expand"
      }, null, -1);
      var _hoisted_17 = [_hoisted_16];
      var _hoisted_18 = {
        key: 4,
        class: "action panel-action-context clickable",
        style: {
          "position": "relative"
        }
      };
      var _hoisted_19 = {
        class: "dropdown-menu dropdown-menu-right"
      };
      var _hoisted_20 = ["onClick"];
      var _hoisted_21 = {
        key: 0,
        class: "fa fa-chevron-up"
      };
      var _hoisted_22 = {
        key: 1,
        class: "fa fa-chevron-down"
      };
      var _hoisted_23 = {
        key: 1,
        class: "panel-sub-header"
      };
      var _hoisted_24 = {
        class: "panel-sub-header-left"
      };
      var _hoisted_25 = {
        class: "panel-sub-header-right"
      };
      var _hoisted_26 = {
        key: 2,
        class: "panel-help"
      };
      var _hoisted_27 = {
        class: "help-content"
      };
      var _hoisted_28 = {
        class: "drawer-content"
      };
      var _hoisted_29 = {
        key: 0,
        class: "actions"
      };
      var _hoisted_30 = {
        class: "footer-actions"
      };
      var _hoisted_31 = {
        class: "footer-secondary-actions"
      };
      var __default__ = {
        inheritAttrs: false
      };
      var script = exports('default', defineComponent(_objectSpread2(_objectSpread2({}, __default__), {}, {
        name: 'panel',
        props: {
          modelValue: {
            type: Boolean,
            default: false
          },
          isDrawerOpen: {
            type: Boolean,
            default: false
          },
          isFullscreen: {
            type: Boolean,
            default: false
          },
          hasTitle: {
            type: Boolean,
            default: true
          },
          hasCollapse: {
            type: Boolean,
            default: false
          },
          hasZoom: {
            type: Boolean,
            default: false
          },
          hasFullscreen: {
            type: Boolean,
            default: false
          },
          isFullscreenPageOnly: {
            type: Boolean,
            default: false
          },
          type: {
            type: String,
            default: "default"
          },
          title: {
            type: String,
            default: ""
          },
          titleIconCssClass: {
            type: String,
            default: ""
          },
          headerSecondaryActions: {
            type: Array,
            required: false
          }
        },
        emits: ["update:modelValue", "update:isDrawerOpen", "update:isFullscreen"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var slots = useSlots();
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var isDrawerOpen = useVModelPassthrough(props, "isDrawerOpen", emit);
          var isFullscreen = useVModelPassthrough(props, "isFullscreen", emit);
          var panelElement = ref(null);
          var hasCollapseAction = computed(() => props.hasCollapse && !isFullscreen.value);
          var hasHeaderSecondaryActions = computed(() => !!props.headerSecondaryActions && props.headerSecondaryActions.length > 0);
          var isHelpOpen = ref(false);
          var headerSecondaryActionMenu = ref(null);
          var isZoomActive = ref(false);
          var zoomValue = ref(100);
          var isZoomSupported = !/Firefox\/([0-9.]+)(?:\s|$)/.test(navigator.userAgent) && !/FxiOS\/([0-9.]+)/.test(navigator.userAgent);
          var hasSidebar = ref(!!slots.sidebar);
          var fullScreenClass = computed(() => {
            return hasSidebar.value ? ["panel-with-sidebar"] : [];
          });
          var panelClass = computed(() => {
            var classes = ["panel", "panel-flex"];
            classes.push("panel-".concat(props.type));
            if (isFullscreen.value) {
              classes.push("panel-fullscreen");
            }
            if (hasSidebar.value) {
              classes.push("flex-grow-1");
            }
            return classes;
          });
          var panelHeadingClass = computed(() => {
            var classes = ["panel-heading"];
            if (props.hasCollapse) {
              classes.push("cursor-pointer");
            }
            return classes;
          });
          var panelBodyStyle = computed(() => {
            var styles = {};
            if (props.hasZoom && isZoomActive.value) {
              styles["zoom"] = "".concat(zoomValue.value, "%");
            }
            return styles;
          });
          var panelTabIndex = computed(() => isFullscreen.value ? "0" : undefined);
          var isPanelOpen = computed(() => !props.hasCollapse || internalValue.value !== false || isFullscreen.value);
          var getHeaderSecondaryActionIconClass = action => {
            if (action.iconCssClass) {
              var iconClass = action.iconCssClass;
              if (action.type !== "default" && action.type !== "link") {
                iconClass += " text-".concat(action.type);
              }
              return iconClass;
            } else {
              return "";
            }
          };
          var getHeaderSecondaryActionItemClass = action => {
            return action.disabled ? "disabled" : "";
          };
          var onIgnoreClick = () => {};
          var onDrawerPullClick = () => {
            isDrawerOpen.value = !isDrawerOpen.value;
          };
          var onHelpClick = () => {
            isHelpOpen.value = !isHelpOpen.value;
          };
          var onPanelHeadingClick = () => {
            if (props.hasCollapse) {
              internalValue.value = !isPanelOpen.value;
            }
          };
          var onPanelExpandClick = () => {
            if (props.hasCollapse) {
              internalValue.value = !isPanelOpen.value;
            }
          };
          var onPanelKeyDown = ev => {
            if (isFullscreen.value && ev.keyCode === 27) {
              ev.stopImmediatePropagation();
              isFullscreen.value = false;
            }
          };
          var onFullscreenClick = () => {
            if (props.hasFullscreen) {
              isFullscreen.value = !isFullscreen.value;
            }
          };
          var onActionClick = (action, event) => {
            if (action.disabled) {
              return;
            }
            if (headerSecondaryActionMenu.value) {
              $(headerSecondaryActionMenu.value).dropdown("toggle");
            }
            if (action.handler) {
              action.handler(event);
            }
          };
          function onZoomClick() {
            isZoomActive.value = !isZoomActive.value;
          }
          function onZoomIncreaseClick() {
            if (zoomValue.value < 400) {
              zoomValue.value += 25;
            }
          }
          function onZoomDecreaseClick() {
            if (zoomValue.value > 25) {
              zoomValue.value -= 25;
            }
          }
          watch(isFullscreen, () => {
            if (isFullscreen.value) {
              nextTick(() => {
                var _panelElement$value;
                return (_panelElement$value = panelElement.value) === null || _panelElement$value === void 0 ? void 0 : _panelElement$value.focus();
              });
            }
          });
          watch(headerSecondaryActionMenu, () => {
            if (headerSecondaryActionMenu.value) {
              $(headerSecondaryActionMenu.value).dropdown();
            }
          });
          onBeforeUpdate(() => {
            hasSidebar.value = !!slots.sidebar;
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Fullscreen), {
              modelValue: unref(isFullscreen),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(isFullscreen) ? isFullscreen.value = $event : null),
              isPageOnly: __props.isFullscreenPageOnly,
              class: normalizeClass(unref(fullScreenClass))
            }, {
              default: withCtx(() => [_ctx.$slots.sidebar ? (openBlock(), createElementBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, "sidebar")])) : createCommentVNode("v-if", true), createElementVNode("div", mergeProps({
                class: unref(panelClass),
                ref_key: "panelElement",
                ref: panelElement
              }, _ctx.$attrs, {
                tabIndex: unref(panelTabIndex),
                onKeydown: onPanelKeyDown
              }), [__props.hasTitle ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(panelHeadingClass)),
                onClick: onPanelHeadingClick
              }, [createElementVNode("h1", _hoisted_3, [_ctx.$slots.title ? renderSlot(_ctx.$slots, "title", {
                key: 0
              }) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [__props.titleIconCssClass ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass(__props.titleIconCssClass)
              }, null, 2)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(__props.title), 1)], 64))]), createElementVNode("div", {
                class: "panel-header-actions",
                onClick: withModifiers(onIgnoreClick, ["prevent", "stop"])
              }, [renderSlot(_ctx.$slots, "headerActions"), isZoomActive.value && __props.hasZoom ? (openBlock(), createElementBlock("span", _hoisted_5, [createElementVNode("span", _hoisted_6, [createElementVNode("span", {
                class: "input-group-addon"
              }, [createElementVNode("span", {
                class: "btn btn-default",
                type: "button",
                onClick: onZoomDecreaseClick
              }, _hoisted_8)]), createElementVNode("input", {
                class: "form-control text-center",
                type: "text",
                style: {
                  "width": "70px",
                  "pointer-events": "none"
                },
                value: zoomValue.value + '%'
              }, null, 8, _hoisted_9), createElementVNode("span", {
                class: "input-group-addon"
              }, [createElementVNode("span", {
                class: "btn btn-default",
                type: "button",
                onClick: onZoomIncreaseClick
              }, _hoisted_11)])])])) : createCommentVNode("v-if", true), __props.hasZoom && unref(isZoomSupported) ? (openBlock(), createElementBlock("span", {
                key: 1,
                class: normalizeClass(["action panel-action-zoom clickable", {
                  active: isZoomActive.value
                }]),
                onClick: onZoomClick
              }, _hoisted_13, 2)) : createCommentVNode("v-if", true), _ctx.$slots.helpContent ? (openBlock(), createElementBlock("span", {
                key: 2,
                class: "action panel-action-help clickable",
                onClick: onHelpClick
              }, _hoisted_15)) : createCommentVNode("v-if", true), __props.hasFullscreen ? (openBlock(), createElementBlock("span", {
                key: 3,
                class: "action panel-action-fullscreen clickable",
                onClick: onFullscreenClick
              }, _hoisted_17)) : createCommentVNode("v-if", true), unref(hasHeaderSecondaryActions) ? (openBlock(), createElementBlock("span", _hoisted_18, [createElementVNode("i", {
                class: "fa fa-ellipsis-v",
                "data-toggle": "dropdown",
                ref_key: "headerSecondaryActionMenu",
                ref: headerSecondaryActionMenu
              }, null, 512), createElementVNode("ul", _hoisted_19, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.headerSecondaryActions, action => {
                return openBlock(), createElementBlock("li", {
                  class: normalizeClass(getHeaderSecondaryActionItemClass(action))
                }, [createElementVNode("a", {
                  href: "#",
                  onClick: withModifiers($event => onActionClick(action, $event), ["prevent", "stop"])
                }, [createElementVNode("i", {
                  class: normalizeClass(getHeaderSecondaryActionIconClass(action))
                }, null, 2), createTextVNode(" " + toDisplayString(action.title), 1)], 8, _hoisted_20)], 2);
              }), 256))])])) : createCommentVNode("v-if", true), unref(hasCollapseAction) ? (openBlock(), createElementBlock("span", {
                key: 5,
                class: "action clickable",
                onClick: onPanelExpandClick
              }, [unref(isPanelOpen) ? (openBlock(), createElementBlock("i", _hoisted_21)) : (openBlock(), createElementBlock("i", _hoisted_22))])) : createCommentVNode("v-if", true)], 8, _hoisted_4)], 2)) : createCommentVNode("v-if", true), _ctx.$slots.subheaderLeft || _ctx.$slots.subheaderRight ? (openBlock(), createElementBlock("div", _hoisted_23, [createElementVNode("div", _hoisted_24, [renderSlot(_ctx.$slots, "subheaderLeft")]), createElementVNode("div", _hoisted_25, [renderSlot(_ctx.$slots, "subheaderRight")])])) : createCommentVNode("v-if", true), _ctx.$slots.helpContent ? (openBlock(), createElementBlock("div", _hoisted_26, [createVNode(unref(TransitionVerticalCollapse), null, {
                default: withCtx(() => [withDirectives(createElementVNode("div", _hoisted_27, [renderSlot(_ctx.$slots, "helpContent")], 512), [[vShow, isHelpOpen.value]])]),
                _: 3
              })])) : createCommentVNode("v-if", true), _ctx.$slots.drawer ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass(["panel-drawer rock-panel-drawer", unref(isDrawerOpen) ? 'open' : ''])
              }, [createVNode(unref(TransitionVerticalCollapse), null, {
                default: withCtx(() => [withDirectives(createElementVNode("div", _hoisted_28, [renderSlot(_ctx.$slots, "drawer")], 512), [[vShow, unref(isDrawerOpen)]])]),
                _: 3
              }), createElementVNode("div", {
                class: "drawer-pull",
                onClick: onDrawerPullClick
              }, [createElementVNode("i", {
                class: normalizeClass(unref(isDrawerOpen) ? 'fa fa-chevron-up fa-xs' : 'fa fa-chevron-down fa-xs')
              }, null, 2)])], 2)) : createCommentVNode("v-if", true), _ctx.$slots.preBody ? renderSlot(_ctx.$slots, "preBody", {
                key: 4
              }) : createCommentVNode("v-if", true), createVNode(unref(TransitionVerticalCollapse), null, {
                default: withCtx(() => [withDirectives(createElementVNode("div", {
                  class: "panel-body",
                  style: normalizeStyle(unref(panelBodyStyle))
                }, [renderSlot(_ctx.$slots, "default"), _ctx.$slots.footerActions || _ctx.$slots.footerSecondaryActions ? (openBlock(), createElementBlock("div", _hoisted_29, [createElementVNode("div", _hoisted_30, [renderSlot(_ctx.$slots, "footerActions")]), createElementVNode("div", _hoisted_31, [renderSlot(_ctx.$slots, "footerSecondaryActions")])])) : createCommentVNode("v-if", true)], 4), [[vShow, unref(isPanelOpen)]])]),
                _: 3
              })], 16, _hoisted_2)]),
              _: 3
            }, 8, ["modelValue", "isPageOnly", "class"]);
          };
        }
      })));

      script.__file = "Framework/Controls/panel.obs";

    })
  };
}));
//# sourceMappingURL=panel.obs.js.map
