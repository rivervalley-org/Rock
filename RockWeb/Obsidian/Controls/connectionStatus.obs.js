System.register(['vue', '@Obsidian/Controls/transitionVerticalCollapse'], (function (exports) {
    'use strict';
    var defineComponent, pushScopeId, popScopeId, createTextVNode, createElementVNode, openBlock, createBlock, withCtx, createElementBlock, createCommentVNode, TransitionVerticalCollapse;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            pushScopeId = module.pushScopeId;
            popScopeId = module.popScopeId;
            createTextVNode = module.createTextVNode;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createElementBlock = module.createElementBlock;
            createCommentVNode = module.createCommentVNode;
        }, function (module) {
            TransitionVerticalCollapse = module["default"];
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'connectionStatus',
                props: {
                    isReconnecting: {
                        type: Boolean,
                        default: false
                    },
                    isDisconnected: {
                        type: Boolean,
                        default: false
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const __returned__ = { TransitionVerticalCollapse };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _withScopeId = n => (pushScopeId("data-v-dtc7kabfgekry5bwt0lhtw90"), n = n(), popScopeId(), n);
            const _hoisted_1 = { key: 0 };
            const _hoisted_2 = {
                key: 0,
                class: "connection-status connection-status-disconnected"
            };
            const _hoisted_3 = _withScopeId(() => createElementVNode("i", { class: "fa fa-fw fa-ban" }, null, -1));
            const _hoisted_4 = createTextVNode(" Disconnected ");
            const _hoisted_5 = [
                _hoisted_3,
                _hoisted_4
            ];
            const _hoisted_6 = {
                key: 1,
                class: "connection-status connection-status-reconnecting"
            };
            const _hoisted_7 = _withScopeId(() => createElementVNode("i", { class: "fa fa-fw fa-spin fa-sync" }, null, -1));
            const _hoisted_8 = createTextVNode(" Reconnecting ");
            const _hoisted_9 = [
                _hoisted_7,
                _hoisted_8
            ];
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["TransitionVerticalCollapse"], null, {
                    default: withCtx(() => [
                        ($props.isReconnecting || $props.isDisconnected)
                            ? (openBlock(), createElementBlock("div", _hoisted_1, [
                                ($props.isDisconnected)
                                    ? (openBlock(), createElementBlock("div", _hoisted_2, _hoisted_5))
                                    : ($props.isReconnecting)
                                        ? (openBlock(), createElementBlock("div", _hoisted_6, _hoisted_9))
                                        : createCommentVNode("v-if", true)
                            ]))
                            : createCommentVNode("v-if", true)
                    ]),
                    _: 1
                }));
            }
            const __sfc_style = document.createElement("style");
            __sfc_style.textContent = `.connection-status[data-v-dtc7kabfgekry5bwt0lhtw90] {
    text-align: center;
    padding: 4px 24px;
}
.connection-status-disconnected[data-v-dtc7kabfgekry5bwt0lhtw90] {
    background-color: #fcf2f1;
    color: #e55235;
}
.connection-status-reconnecting[data-v-dtc7kabfgekry5bwt0lhtw90] {
    background-color: #fffae5;
    color: #8a6d3b;
}`;
            document.head.appendChild(__sfc_style);
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render], ["__scopeId", "data-v-dtc7kabfgekry5bwt0lhtw90"]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
