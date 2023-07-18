System.register(['vue'], (function (exports) {
    'use strict';
    var defineComponent, computed, pushScopeId, popScopeId, createElementVNode, openBlock, createElementBlock, normalizeClass, createCommentVNode;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            pushScopeId = module.pushScopeId;
            popScopeId = module.popScopeId;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            normalizeClass = module.normalizeClass;
            createCommentVNode = module.createCommentVNode;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'divider',
                props: {
                    isVertical: {
                        type: Object,
                        required: false,
                        default: () => false
                    },
                    content: {
                        type: Object,
                        required: false,
                        default: () => null
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const isContentVisible = computed(() => !!props.content);
                    const dividerClassRef = computed(() => `rock-divider${props.isVertical ? " rock-divider-vertical" : ""}`);
                    const __returned__ = { props, isContentVisible, dividerClassRef };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _withScopeId = n => (pushScopeId("data-v-hl87eq0uho0x6psdjg85oxcx"), n = n(), popScopeId(), n);
            const _hoisted_1 = _withScopeId(() => createElementVNode("div", { class: "rock-divider-line" }, null, -1));
            const _hoisted_2 = ["innerHTML"];
            const _hoisted_3 = {
                key: 1,
                class: "rock-divider-line"
            };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", {
                    class: normalizeClass($setup.dividerClassRef)
                }, [
                    _hoisted_1,
                    ($setup.isContentVisible)
                        ? (openBlock(), createElementBlock("div", {
                            key: 0,
                            class: "rock-divider-content",
                            innerHTML: $props.content
                        }, null, 8, _hoisted_2))
                        : createCommentVNode("v-if", true),
                    ($setup.isContentVisible)
                        ? (openBlock(), createElementBlock("div", _hoisted_3))
                        : createCommentVNode("v-if", true)
                ], 2));
            }
            const __sfc_style = document.createElement("style");
            __sfc_style.textContent = `*[data-v-hl87eq0uho0x6psdjg85oxcx] {
    --var-divider-color: #a4a4a4;
}
.rock-divider[data-v-hl87eq0uho0x6psdjg85oxcx] {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2rem 0;
}
.rock-divider-line[data-v-hl87eq0uho0x6psdjg85oxcx] {
    flex: 1;
    border-top: 1px solid var(--var-divider-color);
}
.rock-divider-content[data-v-hl87eq0uho0x6psdjg85oxcx] {
    padding: 0 1rem;
    color: var(--var-divider-color);
}
.rock-divider-vertical[data-v-hl87eq0uho0x6psdjg85oxcx] {
    flex-direction: column;
    margin: 0;
}
.rock-divider-vertical .rock-divider-line[data-v-hl87eq0uho0x6psdjg85oxcx] {
    border: 0;
    border-left: 1px solid var(--var-divider-color);
}`;
            document.head.appendChild(__sfc_style);
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render], ["__scopeId", "data-v-hl87eq0uho0x6psdjg85oxcx"]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
