System.register(['vue', '@Obsidian/Enums/Controls/dayOfWeek', '@Obsidian/Utility/component', './dropDownList.js', './checkBoxList.js', 'ant-design-vue', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Utility/util', '@Obsidian/Utility/stringUtils'], (function (exports) {
    'use strict';
    var defineComponent, computed, openBlock, createBlock, DayOfWeek, useVModelPassthrough, DropDownList, CheckBoxList;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
        }, function (module) {
            DayOfWeek = module.DayOfWeek;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            CheckBoxList = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'dayOfWeekPicker',
                props: {
                    modelValue: {
                        type: String,
                        default: ""
                    },
                    multiple: {
                        type: Boolean,
                        default: false
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = useVModelPassthrough(props, "modelValue", emit);
                    const checkBoxValue = computed({
                        get() {
                            if (!internalValue.value) {
                                return [];
                            }
                            else if (Array.isArray(internalValue.value)) {
                                return internalValue.value;
                            }
                            else {
                                return [internalValue.value];
                            }
                        },
                        set(newVal) {
                            internalValue.value = newVal;
                        }
                    });
                    const dropDownValue = computed({
                        get() {
                            var _a, _b;
                            if (props.multiple) {
                                return (_a = internalValue.value) !== null && _a !== void 0 ? _a : [];
                            }
                            else {
                                return (_b = internalValue.value) !== null && _b !== void 0 ? _b : "";
                            }
                        },
                        set(newVal) {
                            internalValue.value = newVal;
                        }
                    });
                    const options = [
                        { text: "Sunday", value: DayOfWeek.Sunday.toString() },
                        { text: "Monday", value: DayOfWeek.Monday.toString() },
                        { text: "Tuesday", value: DayOfWeek.Tuesday.toString() },
                        { text: "Wednesday", value: DayOfWeek.Wednesday.toString() },
                        { text: "Thursday", value: DayOfWeek.Thursday.toString() },
                        { text: "Friday", value: DayOfWeek.Friday.toString() },
                        { text: "Saturday", value: DayOfWeek.Saturday.toString() }
                    ];
                    const __returned__ = { props, emit, internalValue, checkBoxValue, dropDownValue, options, DropDownList, CheckBoxList };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return ($props.multiple)
                    ? (openBlock(), createBlock($setup["CheckBoxList"], {
                        key: 0,
                        modelValue: $setup.checkBoxValue,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.checkBoxValue) = $event)),
                        items: $setup.options,
                        horizontal: ""
                    }, null, 8, ["modelValue"]))
                    : (openBlock(), createBlock($setup["DropDownList"], {
                        key: 1,
                        modelValue: $setup.dropDownValue,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.dropDownValue) = $event)),
                        items: $setup.options
                    }, null, 8, ["modelValue"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
