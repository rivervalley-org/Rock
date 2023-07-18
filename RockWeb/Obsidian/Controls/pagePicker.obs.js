System.register(['tslib', 'vue', '@Obsidian/Utility/treeItemProviders', './treeItemPicker.obs.js', './rockButton.js', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/PageState', './baseAsyncPicker.js', '@Obsidian/Utility/http', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/Enums/Controls/controlLazyMode', '@Obsidian/Utility/guid', '@Obsidian/Utility/component', '@Obsidian/Utility/dialogs', './treeList.js', '@Obsidian/Utility/promiseUtils', './contentDropDownPicker.obs.js', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Controls/fullscreen', '@Obsidian/Utility/suspense', './checkBoxList.js', '@Obsidian/Utility/stringUtils', './dropDownList.js', 'ant-design-vue', '@Obsidian/Utility/util', './radioButtonList.js'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, watch, createElementVNode, openBlock, createBlock, mergeProps, createSlots, withCtx, withDirectives, createElementBlock, toDisplayString, createVNode, vShow, createCommentVNode, nextTick, PageTreeItemProvider, exportHelper$1, RockButton, BtnType, BtnSize, useStore, BaseAsyncPicker, useHttp, PickerDisplayStyle, ControlLazyMode, emptyGuid, standardRockFormFieldProps, useStandardRockFormFieldProps, Dialogs;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
            createSlots = module.createSlots;
            withCtx = module.withCtx;
            withDirectives = module.withDirectives;
            createElementBlock = module.createElementBlock;
            toDisplayString = module.toDisplayString;
            createVNode = module.createVNode;
            vShow = module.vShow;
            createCommentVNode = module.createCommentVNode;
            nextTick = module.nextTick;
        }, function (module) {
            PageTreeItemProvider = module.PageTreeItemProvider;
        }, function (module) {
            exportHelper$1 = module["default"];
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            BtnType = module.BtnType;
        }, function (module) {
            BtnSize = module.BtnSize;
        }, function (module) {
            useStore = module.useStore;
        }, function (module) {
            BaseAsyncPicker = module["default"];
        }, function (module) {
            useHttp = module.useHttp;
        }, function (module) {
            PickerDisplayStyle = module.PickerDisplayStyle;
        }, function (module) {
            ControlLazyMode = module.ControlLazyMode;
        }, function (module) {
            emptyGuid = module.emptyGuid;
        }, function (module) {
            standardRockFormFieldProps = module.standardRockFormFieldProps;
            useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
        }, function (module) {
            Dialogs = module;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'pagePicker',
                props: Object.assign({ modelValue: {
                        type: Object,
                        required: false
                    }, securityGrantToken: {
                        type: String,
                        required: false
                    }, showSelectCurrentPage: {
                        type: Boolean,
                        default: false
                    }, hidePageGuids: {
                        type: Array,
                        required: false
                    }, promptForPageRoute: {
                        type: Boolean,
                        default: false
                    }, multiple: {
                        type: Boolean,
                        default: false
                    } }, standardRockFormFieldProps),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const http = useHttp();
                    const standardFieldProps = useStandardRockFormFieldProps(props);
                    const open = ref(null);
                    const internalPageValue = computed(() => {
                        if (!props.modelValue) {
                            return null;
                        }
                        if (Array.isArray(props.modelValue)) {
                            if (props.multiple) {
                                return props.modelValue.map(item => item.page);
                            }
                            emit("update:modelValue", { page: props.modelValue[0].page });
                            return props.modelValue[0].page;
                        }
                        return props.modelValue.page;
                    });
                    const pagePickerValue = computed(() => {
                        if (internalRouteValue.value) {
                            const route = internalRouteValue.value;
                            const page = internalPageValue.value;
                            return {
                                value: page.value,
                                text: `${page.text} (${route.text})`
                            };
                        }
                        return internalPageValue.value;
                    });
                    function updatePage(pages) {
                        var _a;
                        if (!pages) {
                            if (props.multiple) {
                                emit("update:modelValue", []);
                            }
                            else {
                                emit("update:modelValue", null);
                            }
                        }
                        else if (props.multiple) {
                            emit("update:modelValue", pages.map(page => ({ page })));
                        }
                        else if (pages.value == ((_a = internalPageValue.value) === null || _a === void 0 ? void 0 : _a.value)) {
                            emit("update:modelValue", { page: internalPageValue.value });
                        }
                        else {
                            emit("update:modelValue", { page: pages });
                        }
                    }
                    const pageStore = useStore();
                    const pageGuid = pageStore.state.pageGuid;
                    let currentPage;
                    function selectCurrentPage() {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (currentPage) {
                                updatePage(props.multiple ? [currentPage] : currentPage);
                                refreshProvider();
                                return;
                            }
                            const options = { pageGuid, securityGrantToken: props.securityGrantToken };
                            const response = yield http.post("/api/v2/Controls/PagePickerGetPageName", {}, options);
                            if (response.isSuccess && response.data) {
                                currentPage = {
                                    text: response.data,
                                    value: pageGuid
                                };
                                updatePage(props.multiple ? [currentPage] : currentPage);
                            }
                            else if (response.statusCode == 401) {
                                Dialogs.alert("Could not determine current page");
                                return;
                            }
                            else {
                                console.error("Error", response.errorMessage);
                                updatePage(props.multiple ? [{ value: pageGuid }] : { value: pageGuid });
                            }
                            yield nextTick();
                            refreshProvider();
                        });
                    }
                    const itemProvider = ref(new PageTreeItemProvider());
                    refreshProvider();
                    function refreshProvider() {
                        var _a;
                        const prov = new PageTreeItemProvider();
                        prov.securityGrantToken = props.securityGrantToken;
                        prov.hidePageGuids = props.hidePageGuids;
                        if (internalPageValue.value) {
                            if (Array.isArray(internalPageValue.value)) {
                                prov.selectedPageGuids = internalPageValue.value.map(p => { var _a; return (_a = p === null || p === void 0 ? void 0 : p.value) !== null && _a !== void 0 ? _a : emptyGuid; });
                            }
                            else {
                                prov.selectedPageGuids = [(_a = internalPageValue.value.value) !== null && _a !== void 0 ? _a : emptyGuid];
                            }
                        }
                        itemProvider.value = prov;
                    }
                    const shouldPromptForRoute = computed(() => !props.multiple && props.promptForPageRoute);
                    const internalRouteValue = computed(() => {
                        if (!props.modelValue || Array.isArray(props.modelValue) || !shouldPromptForRoute.value) {
                            return null;
                        }
                        return props.modelValue.route;
                    });
                    const isRoutePickerVisible = computed(() => {
                        return shouldPromptForRoute.value && !internalRouteValue.value && !!internalPageValue.value;
                    });
                    function updateRoute(route) {
                        if (Array.isArray(route)) {
                            route = route[0];
                        }
                        emit("update:modelValue", {
                            page: internalPageValue.value,
                            route
                        });
                    }
                    const loadedItems = ref(null);
                    const actualRouteItems = computed(() => {
                        return loadedItems.value || loadOptions;
                    });
                    const routeItemsCount = computed(() => {
                        if (Array.isArray(actualRouteItems.value)) {
                            return actualRouteItems.value.length;
                        }
                        return 0;
                    });
                    const routeCountText = computed(() => {
                        if (routeItemsCount.value == 1) {
                            return "( 1 route exists )";
                        }
                        return `( ${routeItemsCount.value} routes exist )`;
                    });
                    const loadOptions = () => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        if (Array.isArray(internalPageValue.value)) {
                            return [];
                        }
                        const options = {
                            pageGuid: internalPageValue.value.value
                        };
                        const result = yield http.post("/api/v2/Controls/PagePickerGetPageRoutes", undefined, options);
                        if (result.isSuccess && result.data) {
                            loadedItems.value = result.data;
                            return result.data;
                        }
                        else {
                            console.error((_a = result.errorMessage) !== null && _a !== void 0 ? _a : "Unknown error while loading data.");
                            loadedItems.value = [];
                            return [];
                        }
                    });
                    watch(internalPageValue, () => {
                        loadedItems.value = null;
                    });
                    const routePickerDisplayStyle = PickerDisplayStyle.Condensed;
                    const isLazy = ControlLazyMode.Eager;
                    const __returned__ = { props, emit, http, standardFieldProps, open, internalPageValue, pagePickerValue, updatePage, pageStore, pageGuid, currentPage, selectCurrentPage, itemProvider, refreshProvider, shouldPromptForRoute, internalRouteValue, isRoutePickerVisible, updateRoute, loadedItems, actualRouteItems, routeItemsCount, routeCountText, loadOptions, routePickerDisplayStyle, isLazy, TreeItemPicker: exportHelper$1, RockButton, BtnType, BtnSize, BaseAsyncPicker };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = createElementVNode("i", { class: "fa fa-file-o" }, null, -1);
            const _hoisted_2 = {
                key: 0,
                class: "input-max-w-xl"
            };
            const _hoisted_3 = { class: "d-block small mt-1 mb-2" };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["TreeItemPicker"], mergeProps($setup.standardFieldProps, {
                    modelValue: $setup.pagePickerValue,
                    "onUpdate:modelValue": $setup.updatePage,
                    formGroupClasses: "location-item-picker",
                    iconCssClass: "fa fa-file",
                    provider: $setup.itemProvider,
                    multiple: $props.multiple,
                    autoExpand: true
                }), createSlots({
                    append: withCtx(() => [
                        ($setup.isRoutePickerVisible)
                            ? withDirectives((openBlock(), createElementBlock("div", _hoisted_2, [
                                createElementVNode("span", _hoisted_3, toDisplayString($setup.routeCountText), 1),
                                createVNode($setup["BaseAsyncPicker"], {
                                    modelValue: $setup.internalRouteValue,
                                    "onUpdate:modelValue": $setup.updateRoute,
                                    showBlankItem: "",
                                    lazyMode: $setup.isLazy,
                                    displayStyle: $setup.routePickerDisplayStyle,
                                    items: $setup.actualRouteItems,
                                    open: $setup.open
                                }, null, 8, ["modelValue", "lazyMode", "displayStyle", "items", "open"])
                            ], 512)), [
                                [vShow, $setup.routeItemsCount > 0]
                            ])
                            : createCommentVNode("v-if", true)
                    ]),
                    _: 2
                }, [
                    ($props.showSelectCurrentPage)
                        ? {
                            name: "customPickerActions",
                            fn: withCtx(() => [
                                createVNode($setup["RockButton"], {
                                    onClick: $setup.selectCurrentPage,
                                    btnSize: $setup.BtnSize.ExtraSmall,
                                    btnType: $setup.BtnType.Link,
                                    title: "Select Current Page"
                                }, {
                                    default: withCtx(() => [
                                        _hoisted_1
                                    ]),
                                    _: 1
                                }, 8, ["btnSize", "btnType"])
                            ])
                        }
                        : undefined
                ]), 1040, ["modelValue", "provider", "multiple"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
