System.register(['vue', '@Obsidian/Controls/dropDownMenu.obs', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, defineComponent, ref, computed, watch, nextTick, openBlock, createElementBlock, normalizeClass, createElementVNode, Fragment, renderList, withModifiers, toDisplayString, createVNode, unref, withCtx, createTextVNode, DropDownMenu, useVModelPassthrough;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      nextTick = module.nextTick;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      createElementVNode = module.createElementVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      withModifiers = module.withModifiers;
      toDisplayString = module.toDisplayString;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
    }, function (module) {
      DropDownMenu = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }],
    execute: (function () {

      var _withScopeId = n => (pushScopeId("data-v-28081e07"), n = n(), popScopeId(), n);
      var _hoisted_1 = ["onClick"];
      var _hoisted_2 = {
        class: "more-items"
      };
      var _hoisted_3 = _withScopeId(() => createElementVNode("span", {
        class: "title text-muted"
      }, [createTextVNode("More "), createElementVNode("i", {
        class: "fa fa-chevron-down"
      })], -1));
      var script = exports('default', defineComponent({
        name: 'tabbedBar',
        props: {
          modelValue: {
            type: String,
            required: true
          },
          tabs: {
            type: Array,
            required: true
          },
          type: {
            type: String,
            default: "tabs"
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var toolbarNavElement = ref();
          var selectedTab = useVModelPassthrough(props, "modelValue", emit);
          var overflowTabs = ref([]);
          var resizeObserver;
          var resizeTimer;
          var overflowTabActions = computed(() => {
            return overflowTabs.value.map(tab => {
              return {
                type: "default",
                title: getTabText(tab),
                handler: () => {
                  selectedTab.value = getTabValue(tab);
                }
              };
            });
          });
          function getTabValue(tab) {
            var _tab$value;
            return typeof tab === "object" ? (_tab$value = tab.value) !== null && _tab$value !== void 0 ? _tab$value : "" : tab;
          }
          function getTabText(tab) {
            var _tab$text;
            return typeof tab === "object" ? (_tab$text = tab.text) !== null && _tab$text !== void 0 ? _tab$text : "" : tab;
          }
          function isTabActive(tab) {
            return getTabValue(tab) === selectedTab.value;
          }
          function updateOverflowObserver() {
            if (window.ResizeObserver) {
              if (toolbarNavElement.value && !resizeObserver) {
                resizeObserver = new ResizeObserver(updateOverflowTabs);
                resizeObserver.observe(toolbarNavElement.value);
              } else if (!toolbarNavElement.value && resizeObserver) {
                resizeObserver.disconnect();
                resizeObserver = undefined;
              }
            } else {
              if (toolbarNavElement.value && resizeTimer === undefined) {
                resizeTimer = window.setInterval(updateOverflowTabs, 1000);
              } else if (!toolbarNavElement.value && resizeTimer !== undefined) {
                clearInterval(resizeTimer);
                resizeTimer = undefined;
              }
            }
          }
          function updateOverflowTabs() {
            if (!toolbarNavElement.value) {
              return;
            }
            var elementWidths = [];
            var barWidth = toolbarNavElement.value.getBoundingClientRect().width;
            var requiredWidth = 0;
            for (var i = 0; i < toolbarNavElement.value.children.length; i++) {
              var child = toolbarNavElement.value.children[i];
              var box = child.getBoundingClientRect();
              if (box.width === 0) {
                var clone = child.cloneNode(true);
                clone.style.display = "";
                clone.style.visibility = "hidden";
                clone.style.position = "absolute";
                toolbarNavElement.value.appendChild(clone);
                box = clone.getBoundingClientRect();
                clone.remove();
              }
              elementWidths.push(box.width);
            }
            for (var _i = 0; _i < elementWidths.length - 1; _i++) {
              requiredWidth += elementWidths[_i];
            }
            if (requiredWidth < barWidth) {
              for (var _i2 = 0; _i2 < toolbarNavElement.value.children.length; _i2++) {
                var _child = toolbarNavElement.value.children[_i2];
                _child.style.display = _i2 < toolbarNavElement.value.children.length - 1 ? "" : "none";
              }
            } else {
              var totalWidth = requiredWidth + elementWidths[elementWidths.length - 1];
              var tabsToOverflow = [];
              var selectedTabIndex = props.tabs.findIndex(tab => getTabValue(tab) === selectedTab.value);
              for (var _i3 = elementWidths.length - 1; _i3 >= 0; _i3--) {
                var _child2 = toolbarNavElement.value.children[_i3];
                if (_i3 === elementWidths.length - 1) {
                  _child2.style.display = "";
                  continue;
                }
                if (_i3 === selectedTabIndex) {
                  _child2.style.display = "";
                  continue;
                }
                if (totalWidth <= barWidth) {
                  _child2.style.display = "";
                } else {
                  tabsToOverflow.push(_i3);
                  _child2.style.display = "none";
                  totalWidth -= elementWidths[_i3];
                }
              }
              overflowTabs.value = props.tabs.filter((_, idx) => tabsToOverflow.includes(idx)).map(tab => {
                return typeof tab === "object" ? tab : {
                  text: tab,
                  value: tab
                };
              });
            }
          }
          function onSelectTab(tab) {
            selectedTab.value = getTabValue(tab);
          }
          if (!props.tabs.some(tab => getTabValue(tab) === selectedTab.value)) {
            selectedTab.value = props.tabs.length ? getTabValue(props.tabs[0]) : "";
          }
          watch(toolbarNavElement, updateOverflowObserver);
          watch([selectedTab, () => props.tabs], () => {
            nextTick(updateOverflowTabs);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["tabbed-bar", {
                'pills': props.type === 'pills'
              }])
            }, [createElementVNode("ul", {
              class: "toolbar-nav",
              ref_key: "toolbarNavElement",
              ref: toolbarNavElement
            }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, tab => {
              return openBlock(), createElementBlock("li", {
                class: normalizeClass({
                  active: isTabActive(tab)
                })
              }, [createElementVNode("span", {
                class: "title",
                onClick: withModifiers($event => onSelectTab(tab), ["prevent"])
              }, toDisplayString(getTabText(tab)), 9, _hoisted_1)], 2);
            }), 256)), createElementVNode("li", _hoisted_2, [createVNode(unref(DropDownMenu), {
              items: unref(overflowTabActions),
              align: "right"
            }, {
              default: withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["items"])])], 512)], 2);
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

      var css_248z = ".tabbed-bar[data-v-28081e07]{border-bottom:6px solid #dedede;padding:0 24px}.tabbed-bar>.toolbar-nav[data-v-28081e07]{display:flex;list-style-type:none;margin:0 0 -6px;padding:0}.tabbed-bar>.toolbar-nav>li[data-v-28081e07]{border-bottom:6px solid transparent;display:inline-block;padding:8px 12px;transition:border-bottom-color .25s ease;white-space:nowrap}.tabbed-bar>.toolbar-nav>li[data-v-28081e07]:hover{border-bottom-color:#cecece}.tabbed-bar>.toolbar-nav>li.active[data-v-28081e07]{border-bottom-color:var(--color-primary,#a8a8a8)}.tabbed-bar>.toolbar-nav>li .title[data-v-28081e07]{cursor:pointer;display:inline-block;font-weight:600;padding:4px 6px}.tabbed-bar>.toolbar-nav>li>a[data-v-28081e07]{color:#000}.tabbed-bar>.toolbar-nav>li.more-items[data-v-28081e07]{font-weight:400}.tabbed-bar>.toolbar-nav>li.more-items .fa[data-v-28081e07]{margin-left:8px}.tabbed-bar.pills[data-v-28081e07]{border-bottom:0;margin-bottom:0}.tabbed-bar.pills>.toolbar-nav>li[data-v-28081e07]{border-bottom:0;padding:0 6px}.tabbed-bar.pills>.toolbar-nav>li .title[data-v-28081e07]{border-radius:4px;padding:6px 12px;transition:background-color .25s ease,color .25s ease}.tabbed-bar.pills>.toolbar-nav>li:hover .title[data-v-28081e07]{background-color:#f5f5f5}.tabbed-bar.pills>.toolbar-nav>li.active .title[data-v-28081e07]{background-color:var(--color-primary,#a8a8a8);color:#fff}.tabbed-bar>.toolbar-nav>li.more-items[data-v-28081e07] .btn-overflow{border:0;margin:0;padding:0}";
      styleInject(css_248z);

      script.__scopeId = "data-v-28081e07";
      script.__file = "Framework/Controls/tabbedBar.obs";

    })
  };
}));
//# sourceMappingURL=tabbedBar.obs.js.map
