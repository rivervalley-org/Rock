System.register(['vue', '@Obsidian/Utility/component', './transitionVerticalCollapse.js'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, createElementVNode, openBlock, createElementBlock, normalizeClass, withModifiers, createTextVNode, toDisplayString, createVNode, withCtx, withDirectives, Fragment, renderList, vShow, useVModelPassthrough, TransitionVerticalCollapse;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            normalizeClass = module.normalizeClass;
            withModifiers = module.withModifiers;
            createTextVNode = module.createTextVNode;
            toDisplayString = module.toDisplayString;
            createVNode = module.createVNode;
            withCtx = module.withCtx;
            withDirectives = module.withDirectives;
            Fragment = module.Fragment;
            renderList = module.renderList;
            vShow = module.vShow;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            TransitionVerticalCollapse = module["default"];
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'inputGroupDropDown',
                props: {
                    modelValue: {
                        type: String,
                        default: ""
                    },
                    items: {
                        type: Object,
                        default: []
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = useVModelPassthrough(props, "modelValue", emit);
                    const expanded = ref(false);
                    const selectedText = computed(() => {
                        var _a, _b;
                        return ((_b = (_a = props.items) === null || _a === void 0 ? void 0 : _a.find((i) => i.value === internalValue.value)) === null || _b === void 0 ? void 0 : _b.text) || "";
                    });
                    function select(value) {
                        internalValue.value = value;
                        expanded.value = false;
                    }
                    const __returned__ = { props, emit, internalValue, expanded, selectedText, select, TransitionVerticalCollapse };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = createElementVNode("span", { class: "caret" }, null, -1);
            const _hoisted_2 = { class: "dropdown-menu" };
            const _hoisted_3 = ["onClick"];
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", {
                    class: normalizeClass(["input-group-btn", { open: $setup.expanded }])
                }, [
                    createElementVNode("button", {
                        class: "btn btn-default dropdown-toggle",
                        type: "button",
                        onClick: _cache[0] || (_cache[0] = withModifiers($event => ($setup.expanded = !$setup.expanded), ["prevent"]))
                    }, [
                        createTextVNode(toDisplayString($setup.selectedText) + " ", 1),
                        _hoisted_1
                    ]),
                    createVNode($setup["TransitionVerticalCollapse"], null, {
                        default: withCtx(() => [
                            withDirectives(createElementVNode("ul", _hoisted_2, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
                                    var _a;
                                    return (openBlock(), createElementBlock("li", {
                                        key: (_a = item === null || item === void 0 ? void 0 : item.value) !== null && _a !== void 0 ? _a : index
                                    }, [
                                        createElementVNode("a", {
                                            href: "#",
                                            onClick: withModifiers($event => { var _a; return ($setup.select((_a = item.value) !== null && _a !== void 0 ? _a : '')); }, ["prevent"])
                                        }, toDisplayString(item.text), 9, _hoisted_3)
                                    ]));
                                }), 128))
                            ], 512), [
                                [vShow, $setup.expanded]
                            ])
                        ]),
                        _: 1
                    })
                ], 2));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
