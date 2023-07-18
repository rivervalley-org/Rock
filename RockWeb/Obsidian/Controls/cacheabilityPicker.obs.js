System.register(['vue', '@Obsidian/Controls/radioButtonList', './timeIntervalPicker.obs.js', '@Obsidian/Utility/numberUtils', '@Obsidian/Enums/Controls/rockCacheabilityType', '@Obsidian/Enums/Core/timeIntervalUnit', '@Obsidian/Controls/rockFormField', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/dropDownList', '@Obsidian/Utility/component'], (function (exports) {
    'use strict';
    var defineComponent, computed, openBlock, createElementBlock, Fragment, createVNode, createBlock, createCommentVNode, RadioButtonList, exportHelper$1, toNumber, RockCacheabilityType, TimeIntervalUnit;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            createVNode = module.createVNode;
            createBlock = module.createBlock;
            createCommentVNode = module.createCommentVNode;
        }, function (module) {
            RadioButtonList = module["default"];
        }, function (module) {
            exportHelper$1 = module["default"];
        }, function (module) {
            toNumber = module.toNumber;
        }, function (module) {
            RockCacheabilityType = module.RockCacheabilityType;
        }, function (module) {
            TimeIntervalUnit = module.TimeIntervalUnit;
        }, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'cacheabilityPicker',
                props: {
                    modelValue: {
                        type: Object,
                        required: true
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    function defaultValue() {
                        return {
                            rockCacheabilityType: 0,
                            maxAge: { unit: TimeIntervalUnit.Minutes, value: null },
                            sharedMaxAge: { unit: TimeIntervalUnit.Minutes, value: null }
                        };
                    }
                    const internalValue = computed({
                        get() {
                            var _a;
                            return (_a = props.modelValue) !== null && _a !== void 0 ? _a : defaultValue();
                        },
                        set(newValue) {
                            emit("update:modelValue", newValue);
                        }
                    });
                    const cacheTypeOptions = [
                        { text: "Public", value: RockCacheabilityType.Public.toString() },
                        { text: "Private", value: RockCacheabilityType.Private.toString() },
                        { text: "No-Cache", value: RockCacheabilityType.NoCache.toString() },
                        { text: "No-Store", value: RockCacheabilityType.NoStore.toString() },
                    ];
                    const cacheType = computed({
                        get() {
                            return internalValue.value.rockCacheabilityType.toString();
                        },
                        set(newValue) {
                            internalValue.value = {
                                rockCacheabilityType: toNumber(newValue),
                                maxAge: internalValue.value.maxAge,
                                sharedMaxAge: internalValue.value.sharedMaxAge
                            };
                        }
                    });
                    const maxAge = computed({
                        get() {
                            return internalValue.value.maxAge;
                        },
                        set(newValue) {
                            internalValue.value = {
                                rockCacheabilityType: internalValue.value.rockCacheabilityType,
                                maxAge: newValue,
                                sharedMaxAge: internalValue.value.sharedMaxAge
                            };
                        }
                    });
                    const sharedMaxAge = computed({
                        get() {
                            return internalValue.value.sharedMaxAge;
                        },
                        set(newValue) {
                            internalValue.value = {
                                rockCacheabilityType: internalValue.value.rockCacheabilityType,
                                maxAge: internalValue.value.maxAge,
                                sharedMaxAge: newValue
                            };
                        }
                    });
                    const shouldAskForMaxAge = computed(() => {
                        const cacheType = internalValue.value.rockCacheabilityType;
                        return cacheType == RockCacheabilityType.Public || cacheType == RockCacheabilityType.Private;
                    });
                    const shouldAskForSharedMaxAge = computed(() => internalValue.value.rockCacheabilityType == RockCacheabilityType.Public);
                    const __returned__ = { props, emit, defaultValue, internalValue, cacheTypeOptions, cacheType, maxAge, sharedMaxAge, shouldAskForMaxAge, shouldAskForSharedMaxAge, RadioButtonList, TimeIntervalPicker: exportHelper$1 };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = {
                key: 0,
                class: "row"
            };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    createVNode($setup["RadioButtonList"], {
                        modelValue: $setup.cacheType,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.cacheType) = $event)),
                        items: $setup.cacheTypeOptions,
                        horizontal: "",
                        label: "Cacheability Type",
                        help: "This determines how the item will be treated in cache.<br /><br>Public - This item can be cached on the browser or any other shared network cache like a CDN.<br /><br>Private - This item can only be cached in the browser.<br /><br>No-Cache - The item will be checked on every load, but if it is deemed to not have changed since the last load it will use a local copy.<br /><br>No-Store - This item will never be stored by the local browser.This is used for sensitive files like check images."
                    }, null, 8, ["modelValue"]),
                    ($setup.shouldAskForMaxAge || $setup.shouldAskForSharedMaxAge)
                        ? (openBlock(), createElementBlock("div", _hoisted_1, [
                            ($setup.shouldAskForMaxAge)
                                ? (openBlock(), createBlock($setup["TimeIntervalPicker"], {
                                    key: 0,
                                    formGroupClasses: "col-md-6",
                                    modelValue: $setup.maxAge,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.maxAge) = $event)),
                                    label: "Max Age",
                                    help: "The maximum amount of time that the item will be cached."
                                }, null, 8, ["modelValue"]))
                                : createCommentVNode("v-if", true),
                            ($setup.shouldAskForSharedMaxAge)
                                ? (openBlock(), createBlock($setup["TimeIntervalPicker"], {
                                    key: 1,
                                    formGroupClasses: "col-md-6",
                                    modelValue: $setup.sharedMaxAge,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.sharedMaxAge) = $event)),
                                    label: "Max Age",
                                    help: "The maximum amount of time the item will be cached in a shared cache (e.g. CDN). If not provided then the Max Age is typically used."
                                }, null, 8, ["modelValue"]))
                                : createCommentVNode("v-if", true)
                        ]))
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
