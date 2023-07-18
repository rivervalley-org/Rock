System.register(['tslib', 'vue', '@Obsidian/Controls/alert.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/promiseUtils'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, openBlock, createElementBlock, Fragment, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, Alert, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock, PromiseCompletionSource;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createTextVNode = module.createTextVNode;
            toDisplayString = module.toDisplayString;
            createCommentVNode = module.createCommentVNode;
            createElementVNode = module.createElementVNode;
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            useConfigurationValues = module.useConfigurationValues;
            useInvokeBlockAction = module.useInvokeBlockAction;
            onConfigurationValuesChanged = module.onConfigurationValuesChanged;
            useReloadBlock = module.useReloadBlock;
        }, function (module) {
            PromiseCompletionSource = module.PromiseCompletionSource;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'liveExperienceOccurrences',
                setup(__props, { expose }) {
                    expose();
                    const config = useConfigurationValues();
                    const invokeBlockAction = useInvokeBlockAction();
                    const contentElement = ref(null);
                    const blockErrorMessage = computed(() => {
                        return config.errorMessage;
                    });
                    function getDeviceLocation(alwaysRequest) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!alwaysRequest) {
                                if (navigator.permissions) {
                                    const status = yield navigator.permissions.query({ name: "geolocation" });
                                    if (status.state !== "granted") {
                                        return null;
                                    }
                                }
                            }
                            const completionSource = new PromiseCompletionSource();
                            navigator.geolocation.getCurrentPosition(position => {
                                completionSource.resolve(position.coords);
                            }, () => {
                                completionSource.reject(new Error("Unable to get device location."));
                            });
                            try {
                                return yield completionSource.promise;
                            }
                            catch (error) {
                                console.error(error);
                                return null;
                            }
                        });
                    }
                    function updateContent(alwaysRequestLocation) {
                        var _a, _b, _c;
                        return __awaiter(this, void 0, void 0, function* () {
                            const location = yield getDeviceLocation(alwaysRequestLocation);
                            const result = yield invokeBlockAction("GetContent", {
                                latitude: (_a = location === null || location === void 0 ? void 0 : location.latitude) !== null && _a !== void 0 ? _a : null,
                                longitude: (_b = location === null || location === void 0 ? void 0 : location.longitude) !== null && _b !== void 0 ? _b : null
                            });
                            if (contentElement.value && ((_c = result.data) === null || _c === void 0 ? void 0 : _c.content)) {
                                contentElement.value.innerHTML = result.data.content;
                            }
                        });
                    }
                    onConfigurationValuesChanged(useReloadBlock());
                    if (config.provideLocationKey) {
                        window[config.provideLocationKey] = () => updateContent(true);
                    }
                    updateContent(config.alwaysRequestLocation);
                    const __returned__ = { config, invokeBlockAction, contentElement, blockErrorMessage, getDeviceLocation, updateContent, Alert };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { ref: "contentElement" };
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
                    createElementVNode("div", _hoisted_1, null, 512)
                ], 64));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
