System.register(['vue', '@Obsidian/Controls/tabbedBar.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createElementBlock, createVNode, unref, createElementVNode, Fragment, renderList, normalizeClass, renderSlot, TabbedBar;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      createElementVNode = module.createElementVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      renderSlot = module.renderSlot;
    }, function (module) {
      TabbedBar = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "tab-content mt-4"
      };
      var script = exports('default', defineComponent({
        name: 'tabbedContent',
        props: {
          tabs: {
            type: Array,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var selectedTab = ref(props.tabs.length > 0 ? props.tabs[0] : "");
          var classes = ref([]);
          var timeout;
          watch(() => props.tabs, () => {
            selectedTab.value = props.tabs.length > 0 ? props.tabs[0] : "";
            classes.value = props.tabs.map(item => {
              var list = "tab-pane fade";
              if (item === selectedTab.value) {
                list += " active in";
              }
              return list;
            });
          }, {
            immediate: true
          });
          watch(selectedTab, (current, previous) => {
            var previousIndex = props.tabs.indexOf(previous);
            var currentIndex = props.tabs.indexOf(current);
            classes.value[previousIndex] = "tab-pane fade active";
            clearTimeout(timeout);
            timeout = window.setTimeout(() => {
              classes.value[previousIndex] = "tab-pane fade";
              classes.value[currentIndex] = "tab-pane fade active in";
            }, 150);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [createVNode(unref(TabbedBar), {
              modelValue: selectedTab.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => selectedTab.value = $event),
              tabs: __props.tabs
            }, null, 8, ["modelValue", "tabs"]), createElementVNode("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (item, i) => {
              return openBlock(), createElementBlock("div", {
                key: i,
                class: normalizeClass(classes.value[i])
              }, [renderSlot(_ctx.$slots, "tabpane", {
                item: item
              })], 2);
            }), 128))])]);
          };
        }
      }));

      script.__file = "Framework/Controls/tabbedContent.obs";

    })
  };
}));
//# sourceMappingURL=tabbedContent.obs.js.map
