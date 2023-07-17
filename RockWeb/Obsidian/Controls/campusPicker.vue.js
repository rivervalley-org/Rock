System.register(['tslib', 'vue', '@Obsidian/Utility/component', '@Obsidian/Utility/guid', '@Obsidian/Utility/http', '@Obsidian/Utility/suspense', '@Obsidian/ValidationRules', './baseAsyncPicker.js', '@Obsidian/Utility/promiseUtils', './checkBoxList.js', './rockFormField.js', '@Obsidian/Utility/form', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Utility/stringUtils', './dropDownList.js', 'ant-design-vue', '@Obsidian/Utility/util', './radioButtonList.js'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, openBlock, createBlock, mergeProps, createCommentVNode, standardAsyncPickerProps, useVModelPassthrough, useStandardAsyncPickerProps, areEqual, useHttp, useSuspense, containsRequiredRule, BaseAsyncPicker;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
            createCommentVNode = module.createCommentVNode;
        }, function (module) {
            standardAsyncPickerProps = module.standardAsyncPickerProps;
            useVModelPassthrough = module.useVModelPassthrough;
            useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
        }, function (module) {
            areEqual = module.areEqual;
        }, function (module) {
            useHttp = module.useHttp;
        }, function (module) {
            useSuspense = module.useSuspense;
        }, function (module) {
            containsRequiredRule = module.containsRequiredRule;
        }, function (module) {
            BaseAsyncPicker = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'campusPicker',
                props: Object.assign({ modelValue: {
                        type: Object,
                        required: false
                    }, forceVisible: {
                        type: Boolean,
                        default: false
                    }, includeInactive: {
                        type: Boolean,
                        default: false
                    }, campusTypeFilter: {
                        type: [String, Array],
                        required: false
                    }, campusStatusFilter: {
                        type: [String, Array],
                        required: false
                    } }, standardAsyncPickerProps),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = useVModelPassthrough(props, "modelValue", emit);
                    const standardProps = useStandardAsyncPickerProps(props);
                    const http = useHttp();
                    const loadedItems = ref(null);
                    const actualItems = computed(() => {
                        if (loadedItems.value) {
                            return filterAndConvertItems(loadedItems.value);
                        }
                        return loadOptions;
                    });
                    const displayStyle = computed(() => {
                        if (standardProps.displayStyle !== "auto") {
                            return standardProps.displayStyle;
                        }
                        return standardProps.multiple ? "list" : "auto";
                    });
                    const isPickerVisible = computed(() => {
                        if (props.forceVisible || calculatedStatusFilters.value.length > 0 || calculatedTypeFilters.value.length > 0) {
                            return true;
                        }
                        if (!loadedItems.value) {
                            return false;
                        }
                        return filterAndConvertItems(loadedItems.value).length > 1;
                    });
                    const calculatedStatusFilters = computed(() => {
                        if (!props.campusStatusFilter) {
                            return [];
                        }
                        else if (Array.isArray(props.campusStatusFilter)) {
                            return [...props.campusStatusFilter];
                        }
                        else {
                            return [props.campusStatusFilter];
                        }
                    });
                    const calculatedTypeFilters = computed(() => {
                        if (!props.campusTypeFilter) {
                            return [];
                        }
                        else if (Array.isArray(props.campusTypeFilter)) {
                            return [...props.campusTypeFilter];
                        }
                        else {
                            return [props.campusTypeFilter];
                        }
                    });
                    function loadOptions() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            const options = {};
                            const result = yield http.post("/api/v2/Controls/CampusPickerGetCampuses", undefined, options);
                            if (result.isSuccess && result.data) {
                                loadedItems.value = result.data;
                                const items = filterAndConvertItems(result.data);
                                const noSelection = !internalValue.value
                                    || (Array.isArray(internalValue.value) && !internalValue.value.length)
                                    || (!Array.isArray(internalValue.value) && !internalValue.value.value);
                                if (noSelection && containsRequiredRule(props.rules) && items.length === 1) {
                                    internalValue.value = items[0];
                                }
                                return items;
                            }
                            else {
                                console.error((_a = result.errorMessage) !== null && _a !== void 0 ? _a : "Unknown error while loading data.");
                                loadedItems.value = [];
                                return [];
                            }
                        });
                    }
                    function filterAndConvertItems(campuses) {
                        return campuses.filter(isCampusIncluded).map(c => ({
                            value: c.value,
                            text: c.text
                        }));
                    }
                    function isCampusIncluded(campus) {
                        let isIncluded = true;
                        const currentValues = !internalValue.value ? [] : (Array.isArray(internalValue.value) ? internalValue.value.map(c => c.value) : [internalValue.value.value]);
                        if (!props.includeInactive && !campus.isActive) {
                            isIncluded = false;
                        }
                        if (calculatedStatusFilters.value.length > 0) {
                            if (!calculatedStatusFilters.value.some(g => areEqual(g, campus.campusStatus))) {
                                isIncluded = false;
                            }
                        }
                        if (calculatedTypeFilters.value.length > 0) {
                            if (!calculatedTypeFilters.value.some(g => areEqual(g, campus.campusType))) {
                                isIncluded = false;
                            }
                        }
                        if (currentValues.some(g => areEqual(g, campus.value))) {
                            isIncluded = true;
                        }
                        return isIncluded;
                    }
                    if (!props.forceVisible && calculatedStatusFilters.value.length === 0 || calculatedTypeFilters.value.length === 0) {
                        const suspense = useSuspense();
                        if (suspense) {
                            suspense.addOperation(loadOptions());
                        }
                        else {
                            loadOptions();
                        }
                    }
                    const __returned__ = { props, emit, internalValue, standardProps, http, loadedItems, actualItems, displayStyle, isPickerVisible, calculatedStatusFilters, calculatedTypeFilters, loadOptions, filterAndConvertItems, isCampusIncluded, BaseAsyncPicker };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return ($setup.isPickerVisible)
                    ? (openBlock(), createBlock($setup["BaseAsyncPicker"], mergeProps({
                        key: 0,
                        modelValue: $setup.internalValue,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalValue) = $event))
                    }, $setup.standardProps, {
                        displayStyle: $setup.displayStyle,
                        items: $setup.actualItems
                    }), null, 16, ["modelValue", "displayStyle", "items"]))
                    : createCommentVNode("v-if", true);
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
