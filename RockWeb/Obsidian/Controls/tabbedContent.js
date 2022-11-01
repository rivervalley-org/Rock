System.register(["vue"], function (exports_1, context_1) {
    "use strict";
    var vue_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_1.defineComponent({
                name: "TabbedContent",
                props: {
                    tabList: {
                        type: Array,
                        required: true
                    }
                },
                setup(props) {
                    const active = vue_1.ref(0);
                    const classes = vue_1.ref([]);
                    let timeout;
                    vue_1.watch(() => props.tabList, () => {
                        active.value = 0;
                        classes.value = props.tabList.map((item, i) => {
                            let list = "tab-pane fade";
                            if (i == active.value) {
                                list += " active in";
                            }
                            return list;
                        });
                    }, { immediate: true });
                    vue_1.watch(active, (current, previous) => {
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
                template: `
<div>
    <ul class="nav nav-tabs margin-b-lg">
        <li v-for="(item, i) in tabList" :key="i" @click.prevent="active = i" :class="{active: active == i}">
            <a href="#" :aria-expanded="active == i">
                <slot name="tab" :item="item" />
            </a>
        </li>
    </ul>

    <div class="tab-content">
        <div v-for="(item, i) in tabList" :key="i" :class="classes[i]">
            <slot name="tabpane" :item="item" />
        </div>
    </div>
</div>
`
            }));
        }
    };
});
//# sourceMappingURL=tabbedContent.js.map