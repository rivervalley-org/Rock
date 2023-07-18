System.register(['vue', '@Obsidian/Utility/numberUtils', './rockFormField.js', './textBox.js', './datePickerBase.obs.js', '@Obsidian/Utility/component', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, createElementVNode, openBlock, createBlock, withCtx, createElementBlock, createVNode, withDirectives, vModelCheckbox, createCommentVNode, mergeProps, toNumber, RockFormField, TextBox, exportHelper$1;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createElementBlock = module.createElementBlock;
            createVNode = module.createVNode;
            withDirectives = module.withDirectives;
            vModelCheckbox = module.vModelCheckbox;
            createCommentVNode = module.createCommentVNode;
            mergeProps = module.mergeProps;
        }, function (module) {
            toNumber = module.toNumber;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            exportHelper$1 = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'datePicker',
                props: {
                    modelValue: {
                        type: String,
                        default: null
                    },
                    displayCurrentOption: {
                        type: Boolean,
                        default: false
                    },
                    isCurrentDateOffset: {
                        type: Boolean,
                        default: false
                    },
                    disableForceParse: {
                        type: Boolean,
                        default: false
                    },
                    disableShowOnFocus: {
                        type: Boolean,
                        default: false
                    },
                    disableHighlightToday: {
                        type: Boolean,
                        default: false
                    },
                    disallowFutureDateSelection: {
                        type: Boolean,
                        default: false
                    },
                    disallowPastDateSelection: {
                        type: Boolean,
                        default: false
                    },
                    startView: {
                        type: Number,
                        default: 0
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = ref(null);
                    const isCurrent = ref(false);
                    const currentDiff = ref("0");
                    const asCurrentDateValue = computed(() => {
                        const plusMinus = `${toNumber(currentDiff.value)}`;
                        return `CURRENT:${plusMinus}`;
                    });
                    const valueToEmit = computed(() => {
                        if (isCurrent.value) {
                            return asCurrentDateValue.value;
                        }
                        return internalValue.value;
                    });
                    const basePickerProps = computed(() => {
                        return {
                            disableForceParse: props.disableForceParse,
                            disableShowOnFocus: props.disableShowOnFocus,
                            disableHighlightToday: props.disableHighlightToday,
                            disallowFutureDateSelection: props.disallowFutureDateSelection,
                            disallowPastDateSelection: props.disallowPastDateSelection,
                            startView: props.startView,
                        };
                    });
                    watch(() => props.isCurrentDateOffset, () => {
                        if (!props.isCurrentDateOffset) {
                            currentDiff.value = "0";
                        }
                    }, { immediate: true });
                    watch(isCurrent, () => {
                        if (isCurrent.value) {
                            internalValue.value = "Current";
                        }
                        else {
                            internalValue.value = null;
                        }
                    }, { immediate: true });
                    watch(valueToEmit, () => {
                        emit("update:modelValue", valueToEmit.value);
                    });
                    watch(() => props.modelValue, () => {
                        if (!props.modelValue) {
                            internalValue.value = null;
                            isCurrent.value = false;
                            currentDiff.value = "0";
                            return;
                        }
                        if (props.modelValue.indexOf("CURRENT") === 0) {
                            isCurrent.value = true;
                            const parts = props.modelValue.split(":");
                            if (parts.length === 2) {
                                currentDiff.value = `${toNumber(parts[1])}`;
                            }
                            return;
                        }
                        internalValue.value = props.modelValue;
                    }, { immediate: true });
                    watch(() => props.displayCurrentOption, () => {
                        if (!props.displayCurrentOption && isCurrent.value) {
                            internalValue.value = null;
                            isCurrent.value = false;
                            currentDiff.value = "0";
                        }
                    });
                    const __returned__ = { props, emit, internalValue, isCurrent, currentDiff, asCurrentDateValue, valueToEmit, basePickerProps, RockFormField, TextBox, DatePickerBase: exportHelper$1 };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "control-wrapper" };
            const _hoisted_2 = {
                key: 0,
                class: "form-control-group"
            };
            const _hoisted_3 = { class: "form-row" };
            const _hoisted_4 = {
                key: 0,
                class: "input-group"
            };
            const _hoisted_5 = { class: "checkbox" };
            const _hoisted_6 = { title: "" };
            const _hoisted_7 = createElementVNode("span", { class: "label-text" }, "Current Date", -1);
            const _hoisted_8 = {
                key: 0,
                class: "form-row"
            };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["RockFormField"], {
                    formGroupClasses: "date-picker",
                    name: "datepicker",
                    modelValue: $setup.internalValue,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.internalValue) = $event)),
                    modelModifiers: { lazy: true }
                }, {
                    default: withCtx(({ uniqueId }) => [
                        createElementVNode("div", _hoisted_1, [
                            ($props.displayCurrentOption)
                                ? (openBlock(), createElementBlock("div", _hoisted_2, [
                                    createElementVNode("div", _hoisted_3, [
                                        createVNode($setup["DatePickerBase"], {
                                            modelValue: $setup.internalValue,
                                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalValue) = $event)),
                                            modelModifiers: { lazy: true },
                                            id: uniqueId,
                                            disabled: $setup.isCurrent
                                        }, null, 8, ["modelValue", "id", "disabled"]),
                                        ($props.displayCurrentOption || $setup.isCurrent)
                                            ? (openBlock(), createElementBlock("div", _hoisted_4, [
                                                createElementVNode("div", _hoisted_5, [
                                                    createElementVNode("label", _hoisted_6, [
                                                        withDirectives(createElementVNode("input", {
                                                            type: "checkbox",
                                                            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.isCurrent) = $event))
                                                        }, null, 512), [
                                                            [vModelCheckbox, $setup.isCurrent]
                                                        ]),
                                                        _hoisted_7
                                                    ])
                                                ])
                                            ]))
                                            : createCommentVNode("v-if", true)
                                    ]),
                                    ($setup.isCurrent && $props.isCurrentDateOffset)
                                        ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                            createVNode($setup["TextBox"], {
                                                label: "+- Days",
                                                modelValue: $setup.currentDiff,
                                                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.currentDiff) = $event)),
                                                inputClasses: "input-width-md",
                                                help: "Enter the number of days after the current date to use as the date. Use a negative number to specify days before."
                                            }, null, 8, ["modelValue"])
                                        ]))
                                        : createCommentVNode("v-if", true)
                                ]))
                                : (openBlock(), createBlock($setup["DatePickerBase"], mergeProps({
                                    key: 1,
                                    modelValue: $setup.internalValue,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.internalValue) = $event)),
                                    modelModifiers: { lazy: true },
                                    id: uniqueId,
                                    disabled: $setup.isCurrent
                                }, $setup.basePickerProps), null, 16, ["modelValue", "id", "disabled"]))
                        ])
                    ]),
                    _: 1
                }, 8, ["modelValue"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
