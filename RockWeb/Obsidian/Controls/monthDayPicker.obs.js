System.register(['vue', './datePartsPicker.js', '@Obsidian/ValidationRules', '@Obsidian/Utility/dateKey', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/rockDateTime', './rockFormField.js', '@Obsidian/Utility/component', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js'], (function (exports) {
    'use strict';
    var defineComponent, computed, openBlock, createBlock, getDefaultDatePartsPickerModel, DatePartsPicker;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
        }, function (module) {
            getDefaultDatePartsPickerModel = module.getDefaultDatePartsPickerModel;
            DatePartsPicker = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'monthDayPicker',
                props: {
                    modelValue: {
                        type: Object,
                        default: getDefaultDatePartsPickerModel
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = computed({
                        get() {
                            return Object.assign({}, props.modelValue, { year: 0 });
                        },
                        set(newVal) {
                            const value = {
                                month: newVal.month,
                                day: newVal.day
                            };
                            emit("update:modelValue", value);
                        }
                    });
                    const __returned__ = { props, emit, internalValue, DatePartsPicker };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["DatePartsPicker"], {
                    modelValue: $setup.internalValue,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalValue) = $event)),
                    showYear: false
                }, null, 8, ["modelValue"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
