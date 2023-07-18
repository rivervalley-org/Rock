System.register(['vue', '@Obsidian/Controls/rockFormField', '@Obsidian/Controls/rockButton', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/component'], (function (exports) {
    'use strict';
    var defineComponent, computed, openBlock, createBlock, mergeProps, withCtx, createElementVNode, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString, RockFormField, RockButton, BtnType, BtnSize, standardRockFormFieldProps, useStandardRockFormFieldProps;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
            withCtx = module.withCtx;
            createElementVNode = module.createElementVNode;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            renderList = module.renderList;
            createTextVNode = module.createTextVNode;
            toDisplayString = module.toDisplayString;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            RockButton = module["default"];
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
                name: 'buttonGroup',
                props: Object.assign({ modelValue: {
                        type: Object,
                        required: true
                    }, items: {
                        type: Array,
                        default: () => []
                    }, unselectedBtnType: {
                        type: String,
                        default: BtnType.Default
                    }, selectedBtnType: {
                        type: String,
                        default: BtnType.Primary
                    }, btnSize: {
                        type: String,
                        default: BtnSize.Default
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
                    function itemButtonType(item) {
                        return item.value == internalValue.value ? props.selectedBtnType : props.unselectedBtnType;
                    }
                    const standardFieldProps = useStandardRockFormFieldProps(props);
                    const __returned__ = { props, emit, internalValue, itemButtonType, standardFieldProps, RockFormField, RockButton };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "btn-group" };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["RockFormField"], mergeProps($setup.standardFieldProps, {
                    name: "maxAge",
                    modelValue: $setup.internalValue
                }), {
                    default: withCtx(() => [
                        createElementVNode("div", _hoisted_1, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
                                return (openBlock(), createBlock($setup["RockButton"], {
                                    onClick: $event => ($setup.internalValue = item.value),
                                    btnSize: $props.btnSize,
                                    btnType: $setup.itemButtonType(item)
                                }, {
                                    default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.text), 1)
                                    ]),
                                    _: 2
                                }, 1032, ["onClick", "btnSize", "btnType"]));
                            }), 256))
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
