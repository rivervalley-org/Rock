System.register(['vue', '@Obsidian/Controls/alert.obs', '@Obsidian/Controls/panel', '@Obsidian/Controls/sectionHeader', '@Obsidian/Utility/block'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, createElementVNode, openBlock, createBlock, withCtx, createTextVNode, toDisplayString, createVNode, createElementBlock, Fragment, renderList, createCommentVNode, Alert, Panel, SectionHeader, useConfigurationValues, onConfigurationValuesChanged, useReloadBlock;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createTextVNode = module.createTextVNode;
            toDisplayString = module.toDisplayString;
            createVNode = module.createVNode;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            renderList = module.renderList;
            createCommentVNode = module.createCommentVNode;
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            Panel = module["default"];
        }, function (module) {
            SectionHeader = module["default"];
        }, function (module) {
            useConfigurationValues = module.useConfigurationValues;
            onConfigurationValuesChanged = module.onConfigurationValuesChanged;
            useReloadBlock = module.useReloadBlock;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'experienceManagerOccurrences',
                setup(__props, { expose }) {
                    expose();
                    const config = useConfigurationValues();
                    const isPanelVisible = ref(true);
                    const blockErrorMessage = computed(() => {
                        return config.errorMessage;
                    });
                    const occurrences = computed(() => {
                        var _a;
                        return (_a = config.occurrences) !== null && _a !== void 0 ? _a : [];
                    });
                    const experienceName = computed(() => {
                        var _a;
                        return (_a = config.experienceName) !== null && _a !== void 0 ? _a : "Experience";
                    });
                    function getOccurrenceLink(occurrence) {
                        var _a;
                        const urlTemplate = (_a = config.navigationUrls) === null || _a === void 0 ? void 0 : _a["ExperienceManagerPage"];
                        if (!urlTemplate || !occurrence.value) {
                            return "#";
                        }
                        return urlTemplate.replace("((Id))", occurrence.value);
                    }
                    if (occurrences.value.length === 1) {
                        isPanelVisible.value = false;
                        window.location.href = getOccurrenceLink(occurrences.value[0]);
                    }
                    onConfigurationValuesChanged(useReloadBlock());
                    const __returned__ = { config, isPanelVisible, blockErrorMessage, occurrences, experienceName, getOccurrenceLink, Alert, Panel, SectionHeader };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = ["href"];
            const _hoisted_2 = createElementVNode("div", { class: "p-2 d-flex align-items-center align-self-stretch bg-info text-white" }, [
                createElementVNode("span", null, [
                    createElementVNode("i", { class: "fa fa-calendar-alt" })
                ])
            ], -1);
            const _hoisted_3 = { class: "p-2 d-flex align-items-center align-self-stretch flex-grow-1 text-body" };
            const _hoisted_4 = createElementVNode("div", { class: "p-2 mr-2 d-flex align-items-center align-self-stretch text-info" }, [
                createElementVNode("span", null, [
                    createElementVNode("i", { class: "fa fa-arrow-circle-right" })
                ])
            ], -1);
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return ($setup.blockErrorMessage)
                    ? (openBlock(), createBlock($setup["Alert"], {
                        key: 0,
                        alertType: "warning"
                    }, {
                        default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.blockErrorMessage), 1)
                        ]),
                        _: 1
                    }))
                    : ($setup.isPanelVisible)
                        ? (openBlock(), createBlock($setup["Panel"], {
                            key: 1,
                            type: "block",
                            title: $setup.experienceName
                        }, {
                            default: withCtx(() => [
                                createVNode($setup["SectionHeader"], { description: "There are multiple experience occurrences happening right now. Please select the one you would like to manage." }),
                                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.occurrences, (occurrence) => {
                                    return (openBlock(), createElementBlock("a", {
                                        class: "d-flex rounded overflow-hidden mb-2 align-items-stretch border border-gray-400",
                                        href: $setup.getOccurrenceLink(occurrence)
                                    }, [
                                        _hoisted_2,
                                        createElementVNode("div", _hoisted_3, toDisplayString(occurrence.text), 1),
                                        _hoisted_4
                                    ], 8, _hoisted_1));
                                }), 256))
                            ]),
                            _: 1
                        }, 8, ["title"]))
                        : createCommentVNode("v-if", true);
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
