System.register(['vue', '@Obsidian/Controls/rockFormField', '@Obsidian/Controls/slider', '@Obsidian/Controls/buttonGroup.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Enums/Core/timeIntervalUnit', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/component'], (function (exports) {
    'use strict';
    var defineComponent, computed, watch, openBlock, createBlock, mergeProps, withCtx, createElementVNode, createVNode, RockFormField, Slider, ButtonGroup, toNumber, TimeIntervalUnit, BtnType, BtnSize, standardRockFormFieldProps, useStandardRockFormFieldProps;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            watch = module.watch;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
            withCtx = module.withCtx;
            createElementVNode = module.createElementVNode;
            createVNode = module.createVNode;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            Slider = module["default"];
        }, function (module) {
            ButtonGroup = module["default"];
        }, function (module) {
            toNumber = module.toNumber;
        }, function (module) {
            TimeIntervalUnit = module.TimeIntervalUnit;
        }, function (module) {
            BtnType = module.BtnType;
        }, function (module) {
            BtnSize = module.BtnSize;
        }, function (module) {
            standardRockFormFieldProps = module.standardRockFormFieldProps;
            useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'intervalPicker',
                props: Object.assign({ modelValue: {
                        type: Object,
                        required: true
                    }, unselectedBtnType: {
                        type: String,
                        default: BtnType.Default
                    }, selectedBtnType: {
                        type: String,
                        default: BtnType.Primary
                    } }, standardRockFormFieldProps),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    function defaultValue() {
                        return { unit: TimeIntervalUnit.Minutes, value: 1 };
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
                    if (props.modelValue == null) {
                        internalValue.value = defaultValue();
                    }
                    const value = computed({
                        get() {
                            var _a;
                            return (_a = internalValue.value.value) !== null && _a !== void 0 ? _a : 1;
                        },
                        set(newValue) {
                            internalValue.value = {
                                unit: internalValue.value.unit,
                                value: newValue !== null && newValue !== void 0 ? newValue : 1
                            };
                        }
                    });
                    const unit = computed({
                        get() {
                            var _a;
                            return `${(_a = internalValue.value.unit) !== null && _a !== void 0 ? _a : TimeIntervalUnit.Minutes}`;
                        },
                        set(newValue) {
                            internalValue.value = {
                                unit: toNumber(newValue),
                                value: internalValue.value.value
                            };
                        }
                    });
                    const options = [
                        { text: "Mins", value: TimeIntervalUnit.Minutes.toString() },
                        { text: "Hours", value: TimeIntervalUnit.Hours.toString() },
                        { text: "Days", value: TimeIntervalUnit.Days.toString() },
                    ];
                    const maxValue = computed(() => {
                        if (unit.value == TimeIntervalUnit.Minutes.toString()) {
                            return 59;
                        }
                        if (unit.value == TimeIntervalUnit.Hours.toString()) {
                            return 23;
                        }
                        return 31;
                    });
                    watch(maxValue, () => {
                        if (value.value > maxValue.value) {
                            value.value = maxValue.value;
                        }
                    });
                    const standardFieldProps = useStandardRockFormFieldProps(props);
                    const __returned__ = { props, emit, defaultValue, internalValue, value, unit, options, maxValue, standardFieldProps, RockFormField, Slider, ButtonGroup, BtnSize };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "form-group range-slider" };
            const _hoisted_2 = { class: "text-right margin-b-md" };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["RockFormField"], mergeProps($setup.standardFieldProps, {
                    name: "maxAge",
                    modelValue: $setup.internalValue
                }), {
                    default: withCtx(() => [
                        createElementVNode("div", _hoisted_1, [
                            createVNode($setup["Slider"], {
                                modelValue: $setup.value,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.value) = $event)),
                                max: $setup.maxValue,
                                showValueBar: "",
                                isIntegerOnly: ""
                            }, null, 8, ["modelValue", "max"])
                        ]),
                        createElementVNode("div", _hoisted_2, [
                            createVNode($setup["ButtonGroup"], {
                                modelValue: $setup.unit,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.unit) = $event)),
                                items: $setup.options,
                                btnSize: $setup.BtnSize.ExtraSmall,
                                unselectedBtnType: $props.unselectedBtnType,
                                selectedBtnType: $props.selectedBtnType
                            }, null, 8, ["modelValue", "btnSize", "unselectedBtnType", "selectedBtnType"])
                        ])
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
