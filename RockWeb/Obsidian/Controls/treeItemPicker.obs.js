System.register(['vue', './treeList.js', '@Obsidian/Utility/component', './contentDropDownPicker.obs.js', 'tslib', '@Obsidian/Utility/promiseUtils', './rockButton.js', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Controls/fullscreen'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, openBlock, createBlock, createSlots, withCtx, createElementVNode, toDisplayString, createVNode, renderSlot, TreeList, updateRefValue, exportHelper$1;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            createSlots = module.createSlots;
            withCtx = module.withCtx;
            createElementVNode = module.createElementVNode;
            toDisplayString = module.toDisplayString;
            createVNode = module.createVNode;
            renderSlot = module.renderSlot;
        }, function (module) {
            TreeList = module["default"];
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function (module) {
            exportHelper$1 = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'treeItemPicker',
                props: {
                    modelValue: {
                        type: Object,
                        required: false
                    },
                    multiple: {
                        type: Boolean,
                        default: false
                    },
                    items: {
                        type: Array
                    },
                    provider: {
                        type: Object
                    },
                    iconCssClass: {
                        type: String,
                        default: "fa fa-folder-open"
                    },
                    disableFolderSelection: {
                        type: Boolean,
                        default: false
                    },
                    autoExpand: {
                        type: Boolean,
                        default: false
                    },
                    fullWidth: {
                        type: Boolean,
                        default: false
                    }
                },
                emits: ["update:modelValue", "valueSelected"],
                setup(__props, { expose, emit }) {
                    var _a;
                    expose();
                    const props = __props;
                    const internalValues = ref(forceToArray(props.modelValue, props.multiple).map(v => { var _a; return (_a = v.value) !== null && _a !== void 0 ? _a : ""; }));
                    const flatItems = ref(flatten((_a = props.items) !== null && _a !== void 0 ? _a : [], i => { var _a; return (_a = i.children) !== null && _a !== void 0 ? _a : []; }));
                    const showPopup = ref(false);
                    const showClear = computed(() => {
                        return forceToArray(props.modelValue, props.multiple).length > 0;
                    });
                    const selectedNames = computed(() => {
                        return forceToArray(props.modelValue, true).map(v => v.text).join(", ");
                    });
                    const pickerIconClass = computed(() => `${props.iconCssClass} fa-fw`);
                    const updateModelValue = () => {
                        const newModelValue = forceToArray(props.modelValue, true)
                            .filter(v => { var _a; return internalValues.value.includes((_a = v.value) !== null && _a !== void 0 ? _a : ""); });
                        const knownValues = newModelValue.map(v => v.value);
                        const additionalValues = internalValues.value
                            .filter(v => !knownValues.includes(v));
                        for (const v of additionalValues) {
                            const items = flatItems.value.filter(i => i.value === v);
                            if (items.length > 0 && items[0].value && items[0].text) {
                                newModelValue.push({
                                    value: items[0].value,
                                    text: items[0].text
                                });
                            }
                        }
                        if (props.multiple) {
                            emit("update:modelValue", newModelValue);
                        }
                        else {
                            emit("update:modelValue", newModelValue.length > 0 ? newModelValue[0] : null);
                        }
                    };
                    const onUpdateItems = (newItems) => {
                        flatItems.value = flatten(newItems !== null && newItems !== void 0 ? newItems : [], i => { var _a; return (_a = i.children) !== null && _a !== void 0 ? _a : []; });
                    };
                    const onClear = () => {
                        emit("update:modelValue", props.multiple ? [] : null);
                    };
                    const onCancel = () => {
                        showPopup.value = false;
                    };
                    const onSelect = () => {
                        updateModelValue();
                        showPopup.value = false;
                        emit("valueSelected");
                    };
                    watch([() => props.modelValue, () => props.multiple], (oldValues, newValues) => {
                        updateRefValue(internalValues, forceToArray(props.modelValue, props.multiple).map(v => { var _a; return (_a = v.value) !== null && _a !== void 0 ? _a : ""; }));
                        if (newValues[1] !== oldValues[1]) {
                            updateModelValue();
                        }
                    });
                    function flatten(source, childrenSource) {
                        let stack = [...source];
                        const flatArray = [];
                        for (let i = 0; i < stack.length; i++) {
                            const item = stack[i];
                            flatArray.push(item);
                            stack = stack.concat(childrenSource(item));
                        }
                        return flatArray;
                    }
                    function forceToArray(value, multiple) {
                        if (value === undefined || value === null) {
                            return [];
                        }
                        else if (Array.isArray(value)) {
                            if (!multiple && value.length > 1) {
                                return [value[0]];
                            }
                            else {
                                return value;
                            }
                        }
                        else {
                            return [value];
                        }
                    }
                    const __returned__ = { props, emit, internalValues, flatItems, showPopup, showClear, selectedNames, pickerIconClass, updateModelValue, onUpdateItems, onClear, onCancel, onSelect, flatten, forceToArray, TreeList, ContentDropDownPicker: exportHelper$1 };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "selected-names" };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["ContentDropDownPicker"], {
                    onPrimaryButtonClicked: $setup.onSelect,
                    onSecondaryButtonClicked: $setup.onCancel,
                    onClearButtonClicked: $setup.onClear,
                    iconCssClass: $setup.pickerIconClass,
                    showClear: $setup.showClear,
                    modelValue: $setup.internalValues,
                    fullWidth: $props.fullWidth
                }, createSlots({
                    innerLabel: withCtx(() => [
                        createElementVNode("span", _hoisted_1, toDisplayString($setup.selectedNames), 1)
                    ]),
                    default: withCtx(() => [
                        createVNode($setup["TreeList"], {
                            modelValue: $setup.internalValues,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalValues) = $event)),
                            multiple: $props.multiple,
                            items: $props.items,
                            provider: $props.provider,
                            "onUpdate:items": $setup.onUpdateItems,
                            disableFolderSelection: $props.disableFolderSelection,
                            autoExpand: $props.autoExpand
                        }, null, 8, ["modelValue", "multiple", "items", "provider", "disableFolderSelection", "autoExpand"])
                    ]),
                    _: 2
                }, [
                    (_ctx.$slots.pickerContentSuperHeader)
                        ? {
                            name: "pickerContentSuperHeader",
                            fn: withCtx(() => [
                                renderSlot(_ctx.$slots, "pickerContentSuperHeader")
                            ])
                        }
                        : undefined,
                    (_ctx.$slots.pickerContentHeader)
                        ? {
                            name: "pickerContentHeader",
                            fn: withCtx(() => [
                                renderSlot(_ctx.$slots, "pickerContentHeader")
                            ])
                        }
                        : undefined,
                    (_ctx.$slots.pickerContentHeading)
                        ? {
                            name: "pickerContentHeading",
                            fn: withCtx(() => [
                                renderSlot(_ctx.$slots, "pickerContentHeading")
                            ])
                        }
                        : undefined,
                    (_ctx.$slots.mainPickerActions)
                        ? {
                            name: "mainPickerActions",
                            fn: withCtx(() => [
                                renderSlot(_ctx.$slots, "mainPickerActions")
                            ])
                        }
                        : undefined,
                    (_ctx.$slots.primaryButtonLabel)
                        ? {
                            name: "primaryButtonLabel",
                            fn: withCtx(() => [
                                renderSlot(_ctx.$slots, "primaryButtonLabel")
                            ])
                        }
                        : undefined,
                    (_ctx.$slots.secondaryButtonLabel)
                        ? {
                            name: "secondaryButtonLabel",
                            fn: withCtx(() => [
                                renderSlot(_ctx.$slots, "secondaryButtonLabel")
                            ])
                        }
                        : undefined,
                    (_ctx.$slots.customPickerActions)
                        ? {
                            name: "customPickerActions",
                            fn: withCtx(() => [
                                renderSlot(_ctx.$slots, "customPickerActions")
                            ])
                        }
                        : undefined,
                    (_ctx.$slots.prepend)
                        ? {
                            name: "prepend",
                            fn: withCtx(({ isInputGroupSupported }) => [
                                renderSlot(_ctx.$slots, "prepend", { isInputGroupSupported: isInputGroupSupported })
                            ])
                        }
                        : undefined,
                    (_ctx.$slots.inputGroupPrepend)
                        ? {
                            name: "inputGroupPrepend",
                            fn: withCtx(({ isInputGroupSupported }) => [
                                renderSlot(_ctx.$slots, "inputGroupPrepend", { isInputGroupSupported: isInputGroupSupported })
                            ])
                        }
                        : undefined,
                    (_ctx.$slots.append)
                        ? {
                            name: "append",
                            fn: withCtx(({ isInputGroupSupported }) => [
                                renderSlot(_ctx.$slots, "append", { isInputGroupSupported: isInputGroupSupported })
                            ])
                        }
                        : undefined
                ]), 1032, ["iconCssClass", "showClear", "modelValue", "fullWidth"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
