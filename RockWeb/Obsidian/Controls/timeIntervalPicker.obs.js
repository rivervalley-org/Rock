System.register(['vue', '@Obsidian/Controls/rockFormField', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/dropDownList', '@Obsidian/Utility/numberUtils', '@Obsidian/Enums/Core/timeIntervalUnit', '@Obsidian/Utility/component'], (function (exports) {
    'use strict';
    var defineComponent, computed, openBlock, createBlock, mergeProps, withCtx, createElementVNode, createVNode, RockFormField, NumberBox, DropDownList, toNumber, TimeIntervalUnit, standardRockFormFieldProps, useStandardRockFormFieldProps;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
            withCtx = module.withCtx;
            createElementVNode = module.createElementVNode;
            createVNode = module.createVNode;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            NumberBox = module["default"];
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            toNumber = module.toNumber;
        }, function (module) {
            TimeIntervalUnit = module.TimeIntervalUnit;
        }, function (module) {
            standardRockFormFieldProps = module.standardRockFormFieldProps;
            useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'timeIntervalPicker',
                props: Object.assign({ modelValue: {
                        type: Object,
                        required: true
                    } }, standardRockFormFieldProps),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = computed({
                        get() {
                            return props.modelValue;
                        },
                        set(newValue) {
                            emit("update:modelValue", newValue);
                        }
                    });
                    const value = computed({
                        get() {
                            return internalValue.value.value;
                        },
                        set(newValue) {
                            internalValue.value = {
                                unit: internalValue.value.unit,
                                value: newValue
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
                        { text: "Secs", value: TimeIntervalUnit.Seconds.toString() },
                        { text: "Mins", value: TimeIntervalUnit.Minutes.toString() },
                        { text: "Hours", value: TimeIntervalUnit.Hours.toString() },
                        { text: "Days", value: TimeIntervalUnit.Days.toString() },
                    ];
                    const standardFieldProps = useStandardRockFormFieldProps(props);
                    const __returned__ = { props, emit, internalValue, value, unit, options, standardFieldProps, RockFormField, NumberBox, DropDownList };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "input-group d-flex" };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["RockFormField"], mergeProps($setup.standardFieldProps, {
                    name: "maxAge",
                    modelValue: $setup.internalValue
                }), {
                    default: withCtx(() => [
                        createElementVNode("div", _hoisted_1, [
                            createVNode($setup["NumberBox"], {
                                modelValue: $setup.value,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.value) = $event)),
                                inputClasses: "input-width-md min-w-0 border-right-0 rounded-left"
                            }, null, 8, ["modelValue"]),
                            createVNode($setup["DropDownList"], {
                                modelValue: $setup.unit,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.unit) = $event)),
                                items: $setup.options,
                                inputClasses: "rounded-0 rounded-right input-width-sm",
                                showBlankItem: false
                            }, null, 8, ["modelValue"])
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
