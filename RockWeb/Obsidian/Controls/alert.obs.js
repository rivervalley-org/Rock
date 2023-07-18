System.register(['vue', '@Obsidian/Enums/Controls/alertType'], (function (exports) {
    'use strict';
    var defineComponent, computed, createElementVNode, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot, AlertType;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            normalizeClass = module.normalizeClass;
            createCommentVNode = module.createCommentVNode;
            renderSlot = module.renderSlot;
        }, function (module) {
            AlertType = module.AlertType;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'alert',
                props: {
                    dismissible: {
                        type: Boolean,
                        default: false
                    },
                    alertType: {
                        type: String,
                        default: AlertType.Default
                    }
                },
                emits: ["dismiss"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    function onDismiss() {
                        emit("dismiss");
                    }
                    const typeClass = computed(() => `alert alert-${props.alertType}`);
                    const __returned__ = { props, emit, onDismiss, typeClass };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = createElementVNode("span", { "aria-hidden": "true" }, "×", -1);
            const _hoisted_2 = [
                _hoisted_1
            ];
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", {
                    class: normalizeClass($setup.typeClass)
                }, [
                    ($props.dismissible)
                        ? (openBlock(), createElementBlock("button", {
                            key: 0,
                            type: "button",
                            class: "close",
                            onClick: $setup.onDismiss,
                            "aria-label": "Hide Alert"
                        }, _hoisted_2))
                        : createCommentVNode("v-if", true),
                    renderSlot(_ctx.$slots, "default")
                ], 2));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
