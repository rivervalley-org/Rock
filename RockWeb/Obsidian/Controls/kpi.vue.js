System.register(['vue', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/tooltip'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, nextTick, createElementVNode, openBlock, createElementBlock, normalizeClass, createCommentVNode, toDisplayString, asFormattedString, tooltip;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            nextTick = module.nextTick;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            normalizeClass = module.normalizeClass;
            createCommentVNode = module.createCommentVNode;
            toDisplayString = module.toDisplayString;
        }, function (module) {
            asFormattedString = module.asFormattedString;
        }, function (module) {
            tooltip = module.tooltip;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'kpi',
                props: {
                    value: {
                        type: [String, Number],
                        required: false
                    },
                    label: {
                        type: String,
                        required: false
                    },
                    tooltip: {
                        type: String,
                        required: false
                    },
                    iconCssClass: {
                        type: String,
                        required: false
                    },
                    color: {
                        type: String,
                        default: "blue"
                    },
                    colorShade: {
                        type: Number,
                        default: 500
                    },
                    isCard: {
                        type: Boolean,
                        default: false
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const kpiElement = ref(null);
                    const kpiClass = computed(() => {
                        const classes = ["kpi", "has-icon-bg"];
                        if (props.isCard) {
                            classes.push("kpi-card");
                        }
                        classes.push(`text-${props.color}-${props.colorShade}`);
                        if (props.colorShade < 300) {
                            classes.push(`border-${props.color}-${props.colorShade}`);
                        }
                        else {
                            classes.push(`border-${props.color}-${props.colorShade - 200}`);
                        }
                        return classes.join(" ");
                    });
                    const calculatedValue = computed(() => {
                        if (typeof props.value === "number") {
                            return asFormattedString(props.value);
                        }
                        else if (typeof props.value === "string") {
                            return props.value;
                        }
                        else {
                            return "";
                        }
                    });
                    watch([kpiElement], () => {
                        if (kpiElement.value) {
                            tooltip(kpiElement.value);
                        }
                    });
                    watch(() => props.tooltip, () => {
                        nextTick(() => {
                            if (kpiElement.value) {
                                tooltip(kpiElement.value);
                            }
                        });
                    });
                    const __returned__ = { props, kpiElement, kpiClass, calculatedValue, tooltip };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = ["title"];
            const _hoisted_2 = {
                key: 0,
                class: "kpi-icon"
            };
            const _hoisted_3 = createElementVNode("img", {
                class: "svg-placeholder",
                src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'></svg>",
                style: {}
            }, null, -1);
            const _hoisted_4 = { class: "kpi-content" };
            const _hoisted_5 = { class: "kpi-stat" };
            const _hoisted_6 = { class: "kpi-value text-color" };
            const _hoisted_7 = { class: "kpi-label" };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", {
                    ref: "kpiElement",
                    class: normalizeClass($setup.kpiClass),
                    title: $setup.props.tooltip
                }, [
                    ($props.iconCssClass)
                        ? (openBlock(), createElementBlock("div", _hoisted_2, [
                            _hoisted_3,
                            createElementVNode("div", _hoisted_4, [
                                createElementVNode("i", {
                                    class: normalizeClass($props.iconCssClass)
                                }, null, 2)
                            ])
                        ]))
                        : createCommentVNode("v-if", true),
                    createElementVNode("div", _hoisted_5, [
                        createElementVNode("span", _hoisted_6, toDisplayString($setup.calculatedValue), 1),
                        createElementVNode("span", _hoisted_7, toDisplayString($props.label), 1)
                    ])
                ], 10, _hoisted_1));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
