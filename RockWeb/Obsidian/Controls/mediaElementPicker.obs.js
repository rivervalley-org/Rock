System.register(['tslib', 'vue', '@Obsidian/Utility/component', '@Obsidian/Enums/Controls/controlLazyMode', '@Obsidian/Utility/http', './baseAsyncPicker.js', './rockButton.js', './rockFormField.js', '@Obsidian/Utility/promiseUtils', '@Obsidian/Utility/suspense', './checkBoxList.js', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', './dropDownList.js', 'ant-design-vue', '@Obsidian/Utility/util', './radioButtonList.js', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, watch, nextTick, createElementVNode, openBlock, createBlock, mergeProps, withCtx, createCommentVNode, createSlots, createVNode, withModifiers, standardRockFormFieldProps, standardAsyncPickerProps, useStandardAsyncPickerProps, useStandardRockFormFieldProps, updateRefValue, ControlLazyMode, useHttp, BaseAsyncPicker, RockButton, RockFormField;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            nextTick = module.nextTick;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
            withCtx = module.withCtx;
            createCommentVNode = module.createCommentVNode;
            createSlots = module.createSlots;
            createVNode = module.createVNode;
            withModifiers = module.withModifiers;
        }, function (module) {
            standardRockFormFieldProps = module.standardRockFormFieldProps;
            standardAsyncPickerProps = module.standardAsyncPickerProps;
            useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
            useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
            updateRefValue = module.updateRefValue;
        }, function (module) {
            ControlLazyMode = module.ControlLazyMode;
        }, function (module) {
            useHttp = module.useHttp;
        }, function (module) {
            BaseAsyncPicker = module["default"];
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            RockFormField = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'mediaElementPicker',
                props: Object.assign(Object.assign(Object.assign({}, standardRockFormFieldProps), { account: {
                        type: Object,
                        default: null
                    }, folder: {
                        type: Object,
                        default: null
                    }, modelValue: {
                        type: Object,
                        default: null
                    }, hideAccountPicker: {
                        type: Boolean,
                        default: false
                    }, hideFolderPicker: {
                        type: Boolean,
                        default: false
                    }, hideMediaPicker: {
                        type: Boolean,
                        default: false
                    }, hideRefreshButtons: {
                        type: Boolean,
                        default: false
                    }, mediaElementLabel: {
                        type: String,
                        default: "Media"
                    } }), standardAsyncPickerProps),
                emits: ["update:account", "update:folder", "update:modelValue"],
                setup(__props, { expose, emit }) {
                    var _a, _b, _c;
                    expose();
                    const props = __props;
                    const internalMediaAccount = ref(props.account);
                    const internalMediaFolder = ref(props.folder);
                    const internalMediaElement = ref(props.modelValue);
                    const mediaAccountItems = ref(null);
                    const mediaFolderItems = ref(null);
                    const mediaElementItems = ref(null);
                    const standardProps = useStandardAsyncPickerProps(props);
                    const formFieldProps = useStandardRockFormFieldProps(props);
                    let pauseModelWatching = false;
                    const http = useHttp();
                    function loadItems(apiAction, payload = null) {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            const result = yield http.post("/api/v2/Controls/" + apiAction, undefined, payload);
                            if (result.isSuccess && result.data) {
                                return result.data;
                            }
                            else {
                                console.error((_a = result.errorMessage) !== null && _a !== void 0 ? _a : "Unknown error while loading data.");
                                return [];
                            }
                        });
                    }
                    function loadMediaAccounts() {
                        return __awaiter(this, void 0, void 0, function* () {
                            return loadItems("MediaElementPickerGetMediaAccounts");
                        });
                    }
                    function loadMediaFolders() {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, function* () {
                            const options = {
                                mediaAccountGuid: (_b = (_a = internalMediaAccount.value) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null
                            };
                            return loadItems("MediaElementPickerGetMediaFolders", options);
                        });
                    }
                    function loadMediaElements() {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, function* () {
                            const options = {
                                mediaFolderGuid: (_b = (_a = internalMediaFolder.value) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null
                            };
                            return loadItems("MediaElementPickerGetMediaElements", options);
                        });
                    }
                    function loadFullTree(payload) {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            const result = yield http.post("/api/v2/Controls/MediaElementPickerGetMediaTree", undefined, payload);
                            if (!result.isSuccess || !result.data) {
                                console.error((_a = result.errorMessage) !== null && _a !== void 0 ? _a : "Unknown error while loading data.");
                                return;
                            }
                            const data = result.data;
                            pauseModelWatching = true;
                            if (data.mediaAccounts) {
                                mediaAccountItems.value = data.mediaAccounts;
                            }
                            if (data.mediaFolders) {
                                mediaFolderItems.value = data.mediaFolders;
                            }
                            if (data.mediaElements) {
                                mediaElementItems.value = data.mediaElements;
                            }
                            if (data.mediaAccount) {
                                internalMediaAccount.value = data.mediaAccount;
                            }
                            if (data.mediaFolder) {
                                internalMediaFolder.value = data.mediaFolder;
                            }
                            if (data.mediaElement) {
                                internalMediaElement.value = data.mediaElement;
                            }
                            yield nextTick();
                            pauseModelWatching = false;
                        });
                    }
                    function fetchMediaAccounts() {
                        mediaAccountItems.value = () => loadMediaAccounts();
                    }
                    function fetchMediaFolders() {
                        mediaFolderItems.value = () => loadMediaFolders();
                    }
                    function fetchMediaElements() {
                        mediaElementItems.value = () => loadMediaElements();
                    }
                    const hideAccountPicker = computed(() => {
                        return props.hideAccountPicker && internalMediaAccount.value != null;
                    });
                    const hideFolderPicker = computed(() => {
                        return props.hideFolderPicker && internalMediaFolder.value != null;
                    });
                    watch(internalMediaAccount, () => {
                        emit("update:account", internalMediaAccount.value);
                        if (pauseModelWatching)
                            return;
                        internalMediaFolder.value = null;
                        if (internalMediaAccount.value != null) {
                            fetchMediaFolders();
                        }
                    });
                    watch(internalMediaFolder, () => {
                        emit("update:folder", internalMediaFolder.value);
                        if (pauseModelWatching)
                            return;
                        internalMediaElement.value = null;
                        if (internalMediaFolder.value != null) {
                            fetchMediaElements();
                        }
                    });
                    watch(internalMediaElement, () => {
                        emit("update:modelValue", internalMediaElement.value);
                    });
                    watch(() => props.account, () => {
                        if (updateRefValue(internalMediaAccount, props.account) && internalMediaAccount.value != null) {
                            loadFullTree({ mediaAccountGuid: internalMediaAccount.value.value });
                        }
                    });
                    watch(() => props.folder, () => {
                        if (updateRefValue(internalMediaFolder, props.folder) && internalMediaFolder.value != null) {
                            loadFullTree({ mediaFolderGuid: internalMediaFolder.value.value });
                        }
                    });
                    watch(() => props.modelValue, () => {
                        if (updateRefValue(internalMediaElement, props.modelValue) && internalMediaElement.value != null) {
                            loadFullTree({ mediaElementGuid: internalMediaElement.value.value });
                        }
                    });
                    if ((_a = internalMediaElement.value) === null || _a === void 0 ? void 0 : _a.value) {
                        loadFullTree({ mediaElementGuid: internalMediaElement.value.value });
                    }
                    else if ((_b = internalMediaFolder.value) === null || _b === void 0 ? void 0 : _b.value) {
                        loadFullTree({ mediaFolderGuid: internalMediaFolder.value.value });
                    }
                    else if ((_c = internalMediaAccount.value) === null || _c === void 0 ? void 0 : _c.value) {
                        loadFullTree({ mediaAccountGuid: internalMediaAccount.value.value });
                    }
                    else {
                        fetchMediaAccounts();
                    }
                    const __returned__ = { props, emit, internalMediaAccount, internalMediaFolder, internalMediaElement, mediaAccountItems, mediaFolderItems, mediaElementItems, standardProps, formFieldProps, pauseModelWatching, http, loadItems, loadMediaAccounts, loadMediaFolders, loadMediaElements, loadFullTree, fetchMediaAccounts, fetchMediaFolders, fetchMediaElements, hideAccountPicker, hideFolderPicker, ControlLazyMode, BaseAsyncPicker, RockButton, RockFormField };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "input-group-addon" };
            const _hoisted_2 = createElementVNode("i", { class: "fa fa-refresh" }, null, -1);
            const _hoisted_3 = { class: "input-group-addon" };
            const _hoisted_4 = createElementVNode("i", { class: "fa fa-refresh" }, null, -1);
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["RockFormField"], mergeProps($setup.formFieldProps, {
                    modelValue: $setup.internalMediaElement,
                    name: "media-element-picker"
                }), {
                    default: withCtx(() => [
                        (!$setup.hideAccountPicker)
                            ? (openBlock(), createBlock($setup["BaseAsyncPicker"], mergeProps({
                                key: 0,
                                modelValue: $setup.internalMediaAccount,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalMediaAccount) = $event))
                            }, $setup.standardProps, {
                                label: "Account",
                                multiple: false,
                                items: $setup.mediaAccountItems,
                                showBlankItem: ""
                            }), null, 16, ["modelValue", "items"]))
                            : createCommentVNode("v-if", true),
                        ($setup.internalMediaAccount && !$setup.hideFolderPicker)
                            ? (openBlock(), createBlock($setup["BaseAsyncPicker"], mergeProps({
                                key: 1,
                                modelValue: $setup.internalMediaFolder,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.internalMediaFolder) = $event))
                            }, $setup.standardProps, {
                                label: "Folder",
                                multiple: false,
                                items: $setup.mediaFolderItems,
                                showBlankItem: "",
                                lazyMode: $setup.ControlLazyMode.Eager
                            }), createSlots({ _: 2 }, [
                                (!$props.hideRefreshButtons)
                                    ? {
                                        name: "inputGroupAppend",
                                        fn: withCtx(() => [
                                            createElementVNode("span", _hoisted_1, [
                                                createVNode($setup["RockButton"], {
                                                    isSquare: "",
                                                    onClick: withModifiers($setup.fetchMediaFolders, ["prevent"])
                                                }, {
                                                    default: withCtx(() => [
                                                        _hoisted_2
                                                    ]),
                                                    _: 1
                                                }, 8, ["onClick"])
                                            ])
                                        ])
                                    }
                                    : undefined
                            ]), 1040, ["modelValue", "items", "lazyMode"]))
                            : createCommentVNode("v-if", true),
                        ($setup.internalMediaFolder && !$props.hideMediaPicker)
                            ? (openBlock(), createBlock($setup["BaseAsyncPicker"], mergeProps({
                                key: 2,
                                modelValue: $setup.internalMediaElement,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.internalMediaElement) = $event))
                            }, $setup.standardProps, {
                                label: $props.mediaElementLabel,
                                items: $setup.mediaElementItems,
                                showBlankItem: "",
                                lazyMode: $setup.ControlLazyMode.Eager
                            }), createSlots({ _: 2 }, [
                                (!$props.hideRefreshButtons)
                                    ? {
                                        name: "inputGroupAppend",
                                        fn: withCtx(() => [
                                            createElementVNode("span", _hoisted_3, [
                                                createVNode($setup["RockButton"], {
                                                    isSquare: "",
                                                    onClick: withModifiers($setup.fetchMediaElements, ["prevent"])
                                                }, {
                                                    default: withCtx(() => [
                                                        _hoisted_4
                                                    ]),
                                                    _: 1
                                                }, 8, ["onClick"])
                                            ])
                                        ])
                                    }
                                    : undefined
                            ]), 1040, ["modelValue", "label", "items", "lazyMode"]))
                            : createCommentVNode("v-if", true)
                    ]),
                    _: 1
                }, 16, ["modelValue"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
