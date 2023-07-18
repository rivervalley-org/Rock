System.register(['tslib', 'vue', '@Obsidian/Utility/component', './dropDownList.js', '@Obsidian/Utility/guid', 'ant-design-vue', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Utility/util', '@Obsidian/Utility/stringUtils'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, watch, nextTick, resolveComponent, openBlock, createElementBlock, Fragment, createBlock, mergeProps, createCommentVNode, standardRockFormFieldProps, useStandardRockFormFieldProps, updateRefValue, DropDownList, emptyGuid, newGuid;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            nextTick = module.nextTick;
            resolveComponent = module.resolveComponent;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
            createCommentVNode = module.createCommentVNode;
        }, function (module) {
            standardRockFormFieldProps = module.standardRockFormFieldProps;
            useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
            updateRefValue = module.updateRefValue;
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            emptyGuid = module.emptyGuid;
            newGuid = module.newGuid;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'categorizedValuePickerDropDownLevel',
                props: Object.assign({ modelValue: {
                        type: String,
                        default: ""
                    }, root: {
                        type: Object,
                        required: true
                    }, definedTypeName: {
                        type: String,
                        required: true
                    } }, standardRockFormFieldProps),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    var _a, _b;
                    expose();
                    const props = __props;
                    const internalValue = ref(props.modelValue);
                    const selectedCategory = ref("");
                    const selectedValue = ref((_b = (_a = internalValue.value) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "");
                    const formFieldProps = useStandardRockFormFieldProps(props);
                    let willSkipWatchTriggers = false;
                    const internalRoot = computed(() => {
                        var _a;
                        let root = props.root;
                        if (!root) {
                            return null;
                        }
                        while (root && ((_a = root.childCategories) === null || _a === void 0 ? void 0 : _a.length) == 1 && (!root.childValues || root.childValues.length == 0)) {
                            root = root.childCategories[0];
                        }
                        return root;
                    });
                    const hasCategories = computed(() => {
                        var _a, _b;
                        return (_b = (((_a = internalRoot.value) === null || _a === void 0 ? void 0 : _a.childCategories) && internalRoot.value.childCategories.length > 0)) !== null && _b !== void 0 ? _b : false;
                    });
                    const hasValues = computed(() => {
                        var _a, _b;
                        return (_b = (((_a = internalRoot.value) === null || _a === void 0 ? void 0 : _a.childValues) && internalRoot.value.childValues.length > 0)) !== null && _b !== void 0 ? _b : false;
                    });
                    const categoryOptions = computed(() => {
                        var _a, _b, _c, _d;
                        if (hasValues.value) {
                            return [
                                {
                                    text: "All Categories",
                                    value: emptyGuid
                                },
                                ...(_b = (_a = internalRoot.value) === null || _a === void 0 ? void 0 : _a.childCategories) !== null && _b !== void 0 ? _b : []
                            ];
                        }
                        else {
                            return (_d = (_c = internalRoot.value) === null || _c === void 0 ? void 0 : _c.childCategories) !== null && _d !== void 0 ? _d : [];
                        }
                    });
                    const fullSelectedCategory = computed(() => {
                        var _a, _b, _c;
                        if (selectedCategory.value == "" || selectedCategory.value == emptyGuid) {
                            return null;
                        }
                        else {
                            return (_c = (_b = (_a = internalRoot.value) === null || _a === void 0 ? void 0 : _a.childCategories) === null || _b === void 0 ? void 0 : _b.find(cat => cat.value == selectedCategory.value)) !== null && _c !== void 0 ? _c : null;
                        }
                    });
                    const showValues = computed(() => {
                        return hasValues.value && (selectedCategory.value == emptyGuid || !hasCategories.value);
                    });
                    const showNextLevel = computed(() => {
                        return fullSelectedCategory.value !== null;
                    });
                    watch(selectedCategory, () => {
                        if (willSkipWatchTriggers) {
                            return;
                        }
                        if (selectedValue.value == "" && internalValue.value != null) {
                            internalValue.value = null;
                        }
                        selectedValue.value = "";
                    });
                    watch(selectedValue, () => {
                        var _a, _b;
                        if (willSkipWatchTriggers) {
                            return;
                        }
                        if (!selectedValue.value) {
                            internalValue.value = null;
                        }
                        const fullSelectedValue = (_b = (_a = internalRoot.value) === null || _a === void 0 ? void 0 : _a.childValues) === null || _b === void 0 ? void 0 : _b.find((v) => v.value == selectedValue.value);
                        if (fullSelectedValue) {
                            updateRefValue(internalValue, {
                                text: fullSelectedValue.text,
                                value: fullSelectedValue.value
                            });
                        }
                        else {
                            internalValue.value = null;
                        }
                    });
                    watch(() => props.modelValue, (val) => {
                        if (updateRefValue(internalValue, val)) {
                            setBasedOnModelValue();
                        }
                    });
                    watch(internalValue, () => emit("update:modelValue", internalValue.value));
                    function setBasedOnModelValue() {
                        var _a, _b, _c, _d;
                        const value = internalValue.value != null && ((_b = (_a = internalRoot.value) === null || _a === void 0 ? void 0 : _a.childValues) === null || _b === void 0 ? void 0 : _b.find((v) => { var _a; return v.value == ((_a = internalValue.value) === null || _a === void 0 ? void 0 : _a.value); }));
                        if (value) {
                            selectedCategory.value = emptyGuid;
                            selectedValue.value = value.value;
                            skipWatchTriggers();
                            return;
                        }
                        selectedValue.value = "";
                        if (internalValue.value == null) {
                            return;
                        }
                        let containingCategory = null;
                        for (const category of (_d = (_c = internalRoot.value) === null || _c === void 0 ? void 0 : _c.childCategories) !== null && _d !== void 0 ? _d : []) {
                            if (hasDescendantValue(category, internalValue.value)) {
                                containingCategory = category;
                                break;
                            }
                        }
                        if (containingCategory) {
                            selectedCategory.value = containingCategory.value;
                            skipWatchTriggers();
                            return;
                        }
                    }
                    function hasDescendantValue(base, valToFind) {
                        var _a, _b;
                        const isValFound = (_a = base.childValues) === null || _a === void 0 ? void 0 : _a.find((v) => v.value == valToFind.value);
                        if (isValFound) {
                            return true;
                        }
                        for (const category of (_b = base.childCategories) !== null && _b !== void 0 ? _b : []) {
                            if (hasDescendantValue(category, valToFind)) {
                                return true;
                            }
                        }
                        return false;
                    }
                    function skipWatchTriggers() {
                        return __awaiter(this, void 0, void 0, function* () {
                            willSkipWatchTriggers = true;
                            yield nextTick();
                            willSkipWatchTriggers = false;
                        });
                    }
                    if (internalValue.value && internalValue.value.value) {
                        setBasedOnModelValue();
                    }
                    const __returned__ = { props, emit, internalValue, selectedCategory, selectedValue, formFieldProps, willSkipWatchTriggers, internalRoot, hasCategories, hasValues, categoryOptions, fullSelectedCategory, showValues, showNextLevel, setBasedOnModelValue, hasDescendantValue, skipWatchTriggers, DropDownList, newGuid };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                const _component_CategorizedValuePickerDropDownLevel = resolveComponent("CategorizedValuePickerDropDownLevel", true);
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($setup.hasCategories)
                        ? (openBlock(), createBlock($setup["DropDownList"], mergeProps({ key: 0 }, $setup.formFieldProps, {
                            label: ((_a = $setup.internalRoot) === null || _a === void 0 ? void 0 : _a.text) + ' Category',
                            modelValue: $setup.selectedCategory,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.selectedCategory) = $event)),
                            items: $setup.categoryOptions,
                            showBlankItem: !$setup.hasValues,
                            multiple: false,
                            key: 'cats-of-' + (((_b = $setup.internalRoot) === null || _b === void 0 ? void 0 : _b.value) || ((_c = $setup.internalRoot) === null || _c === void 0 ? void 0 : _c.text))
                        }), null, 16, ["label", "modelValue", "items", "showBlankItem"]))
                        : createCommentVNode("v-if", true),
                    ($setup.showValues)
                        ? (openBlock(), createBlock($setup["DropDownList"], mergeProps({ key: 1 }, $setup.formFieldProps, {
                            label: $props.definedTypeName,
                            modelValue: $setup.selectedValue,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.selectedValue) = $event)),
                            items: (_e = (_d = $setup.internalRoot) === null || _d === void 0 ? void 0 : _d.childValues) !== null && _e !== void 0 ? _e : [],
                            showBlankItem: "",
                            multiple: false,
                            key: 'vals-of-' + (((_f = $setup.internalRoot) === null || _f === void 0 ? void 0 : _f.value) || ((_g = $setup.internalRoot) === null || _g === void 0 ? void 0 : _g.text))
                        }), null, 16, ["label", "modelValue", "items"]))
                        : createCommentVNode("v-if", true),
                    ($setup.showNextLevel)
                        ? (openBlock(), createBlock(_component_CategorizedValuePickerDropDownLevel, mergeProps({ key: 2 }, $setup.formFieldProps, {
                            modelValue: $setup.internalValue,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.internalValue) = $event)),
                            root: $setup.fullSelectedCategory,
                            definedTypeName: $props.definedTypeName,
                            key: (_j = (_h = $setup.fullSelectedCategory) === null || _h === void 0 ? void 0 : _h.value) !== null && _j !== void 0 ? _j : $setup.newGuid()
                        }), null, 16, ["modelValue", "root", "definedTypeName"]))
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
