System.register(['vue', '@Obsidian/Controls/alert.obs', '@Obsidian/Utility/block'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, onMounted, openBlock, createElementBlock, Fragment, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, Alert, useConfigurationValues, onConfigurationValuesChanged, useReloadBlock;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            onMounted = module.onMounted;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createTextVNode = module.createTextVNode;
            toDisplayString = module.toDisplayString;
            createCommentVNode = module.createCommentVNode;
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            useConfigurationValues = module.useConfigurationValues;
            onConfigurationValuesChanged = module.onConfigurationValuesChanged;
            useReloadBlock = module.useReloadBlock;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'signUpDetail',
                setup(__props, { expose }) {
                    expose();
                    const config = useConfigurationValues();
                    const signUpDetailElement = ref(null);
                    const blockErrorMessage = computed(() => {
                        return config.errorMessage;
                    });
                    onConfigurationValuesChanged(useReloadBlock());
                    onMounted(() => {
                        if (signUpDetailElement.value && config.signUpDetailHtml) {
                            signUpDetailElement.value.innerHTML = config.signUpDetailHtml;
                        }
                    });
                    const __returned__ = { config, signUpDetailElement, blockErrorMessage, Alert };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = {
                key: 1,
                ref: "signUpDetailElement"
            };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($setup.blockErrorMessage)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 0,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.blockErrorMessage), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    (!$setup.blockErrorMessage)
                        ? (openBlock(), createElementBlock("div", _hoisted_1, null, 512))
                        : createCommentVNode("v-if", true)
                ], 64));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
