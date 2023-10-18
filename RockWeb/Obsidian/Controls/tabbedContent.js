System.register(['vue'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
        }],
        execute: (function () {

            var tabbedContent = exports('default', defineComponent({
              name: "TabbedContent",
              props: {
                tabList: {
                  type: Array,
                  required: true
                }
              },
              setup(props) {
                var active = ref(0);
                var classes = ref([]);
                var timeout;
                watch(() => props.tabList, () => {
                  active.value = 0;
                  classes.value = props.tabList.map((item, i) => {
                    var list = "tab-pane fade";
                    if (i == active.value) {
                      list += " active in";
                    }
                    return list;
                  });
                }, {
                  immediate: true
                });
                watch(active, (current, previous) => {
                  classes.value[previous] = "tab-pane fade active";
                  clearTimeout(timeout);
                  timeout = setTimeout(() => {
                    classes.value[previous] = "tab-pane fade";
                    classes.value[current] = "tab-pane fade active in";
                  }, 150);
                });
                return {
                  active,
                  classes
                };
              },
              template: "\n<div>\n    <ul class=\"nav nav-tabs margin-b-lg\">\n        <li v-for=\"(item, i) in tabList\" :key=\"i\" @click.prevent=\"active = i\" :class=\"{active: active == i}\">\n            <a href=\"#\" :aria-expanded=\"active == i\">\n                <slot name=\"tab\" :item=\"item\" />\n            </a>\n        </li>\n    </ul>\n\n    <div class=\"tab-content\">\n        <div v-for=\"(item, i) in tabList\" :key=\"i\" :class=\"classes[i]\">\n            <slot name=\"tabpane\" :item=\"item\" />\n        </div>\n    </div>\n</div>\n"
            }));

        })
    };
}));
//# sourceMappingURL=tabbedContent.js.map
