System.register(['vue', '@Obsidian/Utility/component', './rockButton', './fullscreen', './transitionVerticalCollapse'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, nextTick, useVModelPassthrough, RockButton, Fullscreen, TransitionVerticalCollapse;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            nextTick = module.nextTick;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            Fullscreen = module["default"];
        }, function (module) {
            TransitionVerticalCollapse = module["default"];
        }],
        execute: (function () {

            var panel = exports('default', defineComponent({
              name: "Panel",
              components: {
                Fullscreen,
                RockButton,
                TransitionVerticalCollapse
              },
              inheritAttrs: false,
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
              setup(props, _ref) {
                var emit = _ref.emit;
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
                var panelClass = computed(() => {
                  var classes = ["panel", "panel-flex"];
                  classes.push("panel-".concat(props.type));
                  if (isFullscreen.value) {
                    classes.push("panel-fullscreen");
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
                return {
                  getHeaderSecondaryActionIconClass,
                  getHeaderSecondaryActionItemClass,
                  hasCollapseAction,
                  hasHeaderSecondaryActions,
                  headerSecondaryActionMenu,
                  isDrawerOpen,
                  isFullscreen,
                  isHelpOpen,
                  isPanelOpen,
                  isZoomActive,
                  isZoomSupported,
                  onActionClick,
                  onDrawerPullClick,
                  onFullscreenClick,
                  onHelpClick,
                  onIgnoreClick,
                  onPanelExpandClick,
                  onPanelHeadingClick,
                  onPanelKeyDown,
                  onZoomClick,
                  onZoomDecreaseClick,
                  onZoomIncreaseClick,
                  panelBodyStyle,
                  panelClass,
                  panelElement,
                  panelHeadingClass,
                  panelTabIndex,
                  zoomValue
                };
              },
              template: "\n<Fullscreen v-model=\"isFullscreen\" :isPageOnly=\"isFullscreenPageOnly\">\n    <div :class=\"panelClass\" ref=\"panelElement\" v-bind=\"$attrs\" :tabIndex=\"panelTabIndex\" @keydown=\"onPanelKeyDown\">\n\n        <div :class=\"panelHeadingClass\" @click=\"onPanelHeadingClick\">\n            <h1 class=\"panel-title\">\n                <slot v-if=\"$slots.title\" name=\"title\" />\n                <template v-else>\n                    <i v-if=\"titleIconCssClass\" :class=\"titleIconCssClass\"></i>\n                    {{ title }}\n                </template>\n            </h1>\n\n            <div class=\"panel-header-actions\" @click.prevent.stop=\"onIgnoreClick\">\n                <slot name=\"headerActions\" />\n\n                <span v-if=\"isZoomActive && hasZoom\" class=\"mr-1 ml-1 panel-action-zoom-control\">\n                    <span class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                            <span class=\"btn btn-default\" type=\"button\" @click=\"onZoomDecreaseClick\"><i class=\"fa fa-minus\"></i></span>\n                        </span>\n                        <input class=\"form-control text-center\" type=\"text\" style=\"width: 70px; pointer-events: none;\" :value=\"zoomValue + '%'\" />\n                        <span class=\"input-group-addon\">\n                            <span class=\"btn btn-default\" type=\"button\" @click=\"onZoomIncreaseClick\"><i class=\"fa fa-plus\"></i></span>\n                        </span>\n                    </span>\n                </span>\n\n                <span v-if=\"hasZoom && isZoomSupported\" class=\"action panel-action-zoom clickable\" :class=\"{active: isZoomActive}\" @click=\"onZoomClick\">\n                    <i class=\"fa fa-search-plus\" />\n                </span>\n\n                <span v-if=\"$slots.helpContent\" class=\"action panel-action-help clickable\" @click=\"onHelpClick\">\n                    <i class=\"fa fa-question\"></i>\n                </span>\n\n                <span v-if=\"hasFullscreen\" class=\"action panel-action-fullscreen clickable\" @click=\"onFullscreenClick\">\n                    <i class=\"fa fa-expand\"></i>\n                </span>\n\n                <template v-if=\"hasHeaderSecondaryActions\">\n                    <span class=\"action panel-action-context clickable\" style=\"position: relative;\">\n                        <i class=\"fa fa-ellipsis-v\" data-toggle=\"dropdown\" ref=\"headerSecondaryActionMenu\"></i>\n                        <ul class=\"dropdown-menu dropdown-menu-right\">\n                            <li v-for=\"action in headerSecondaryActions\" :class=\"getHeaderSecondaryActionItemClass(action)\">\n                                <a href=\"#\" @click.prevent.stop=\"onActionClick(action, $event)\">\n                                    <i :class=\"getHeaderSecondaryActionIconClass(action)\"></i>\n                                    {{ action.title }}\n                                </a>\n                            </li>\n                        </ul>\n                    </span>\n                </template>\n\n                <span v-if=\"hasCollapseAction\" class=\"action clickable\" @click=\"onPanelExpandClick\">\n                    <i v-if=\"isPanelOpen\" class=\"fa fa-chevron-up\"></i>\n                    <i v-else class=\"fa fa-chevron-down\"></i>\n                </span>\n            </div>\n        </div>\n\n        <div v-if=\"$slots.subheaderLeft || $slots.subheaderRight\" class=\"panel-sub-header\">\n            <div class=\"panel-sub-header-left\">\n                <slot name=\"subheaderLeft\" />\n            </div>\n\n            <div class=\"panel-sub-header-right\">\n                <slot name=\"subheaderRight\" />\n            </div>\n        </div>\n\n        <div v-if=\"$slots.helpContent\" class=\"panel-help\">\n            <TransitionVerticalCollapse>\n                <div v-show=\"isHelpOpen\" class=\"help-content\">\n                    <slot name=\"helpContent\" />\n                </div>\n            </TransitionVerticalCollapse>\n        </div>\n\n        <div v-if=\"$slots.drawer\" class=\"panel-drawer rock-panel-drawer\" :class=\"isDrawerOpen ? 'open' : ''\">\n            <TransitionVerticalCollapse>\n                <div v-show=\"isDrawerOpen\" class=\"drawer-content\">\n                    <slot name=\"drawer\" />\n                </div>\n            </TransitionVerticalCollapse>\n\n            <div class=\"drawer-pull\" @click=\"onDrawerPullClick\">\n                <i :class=\"isDrawerOpen ? 'fa fa-chevron-up fa-xs' : 'fa fa-chevron-down fa-xs'\"></i>\n            </div>\n        </div>\n\n        <template v-if=\"$slots.preBody\">\n            <slot name=\"preBody\" />\n        </template>\n\n        <TransitionVerticalCollapse>\n            <div v-show=\"isPanelOpen\" class=\"panel-body\" :style=\"panelBodyStyle\">\n                <slot />\n\n                <div v-if=\"$slots.footerActions || $slots.footerSecondaryActions\" class=\"actions\">\n                    <div class=\"footer-actions\">\n                        <slot name=\"footerActions\" />\n                    </div>\n\n                    <div class=\"footer-secondary-actions\">\n                        <slot name=\"footerSecondaryActions\" />\n                    </div>\n                </div>\n            </div>\n        </TransitionVerticalCollapse>\n    </div>\n</Fullscreen>\n"
            }));

        })
    };
}));
//# sourceMappingURL=panel.js.map
