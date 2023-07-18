System.register(['vue', './locationItemPicker.js', './locationAddressPicker.obs.js', './geoPicker.obs.js', './radioButtonList.js', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Utility/component', './treeItemPicker.obs.js', './treeList.js', 'tslib', '@Obsidian/Utility/promiseUtils', './contentDropDownPicker.obs.js', './rockButton.js', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Controls/fullscreen', './addressControl.obs.js', './dropDownList.js', 'ant-design-vue', '@Obsidian/Utility/util', '@Obsidian/Utility/stringUtils', './textBox.js', '@Obsidian/Enums/Controls/requirementLevel', '@Obsidian/Utility/http', './loading.js', './loadingIndicator.js', './rockValidation.js', './alert.obs.js', '@Obsidian/Enums/Controls/alertType', '@Obsidian/Utility/address', '@Obsidian/Controls/contentDropDownPicker.obs', '@Obsidian/Controls/geoPickerMap.obs', '@Obsidian/Utility/geo', '@Obsidian/SystemGuids/definedValue'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, openBlock, createElementBlock, Fragment, createBlock, createSlots, withCtx, createVNode, renderSlot, createCommentVNode, LocationItemPicker, exportHelper$1, exportHelper$2, RadioButtonList;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            createBlock = module.createBlock;
            createSlots = module.createSlots;
            withCtx = module.withCtx;
            createVNode = module.createVNode;
            renderSlot = module.renderSlot;
            createCommentVNode = module.createCommentVNode;
        }, function (module) {
            LocationItemPicker = module["default"];
        }, function (module) {
            exportHelper$1 = module["default"];
        }, function (module) {
            exportHelper$2 = module["default"];
        }, function (module) {
            RadioButtonList = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'locationPicker',
                props: {
                    modelValue: {
                        type: Object
                    }
                },
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const selectedOption = ref("0");
                    const options = [{
                            text: "Location",
                            value: "0"
                        }, {
                            text: "Address",
                            value: "1"
                        }, {
                            text: "Point",
                            value: "2"
                        }, {
                            text: "Geo-fence",
                            value: "3"
                        }];
                    const itemValue = ref({});
                    const addressValue = ref({});
                    const pointValue = ref("");
                    const fenceValue = ref("");
                    const popupStatus = ref(false);
                    const internalValue = computed(() => {
                        if (selectedOption.value == "0") {
                            return itemValue.value;
                        }
                        if (selectedOption.value == "1") {
                            return addressValue.value;
                        }
                        if (selectedOption.value == "2") {
                            return pointValue.value;
                        }
                        if (selectedOption.value == "3") {
                            return fenceValue.value;
                        }
                        return "";
                    });
                    watch(internalValue, () => emit("update:modelValue", internalValue.value));
                    const __returned__ = { emit, selectedOption, options, itemValue, addressValue, pointValue, fenceValue, popupStatus, internalValue, LocationItemPicker, LocationAddressPicker: exportHelper$1, GeoPicker: exportHelper$2, RadioButtonList };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($setup.selectedOption == '0')
                        ? (openBlock(), createBlock($setup["LocationItemPicker"], {
                            key: 0,
                            modelValue: $setup.itemValue,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.itemValue) = $event)),
                            showPopup: $setup.popupStatus,
                            "onUpdate:showPopup": _cache[2] || (_cache[2] = $event => (($setup.popupStatus) = $event))
                        }, createSlots({
                            pickerContentSuperHeader: withCtx(() => [
                                createVNode($setup["RadioButtonList"], {
                                    modelValue: $setup.selectedOption,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.selectedOption) = $event)),
                                    items: $setup.options,
                                    horizontal: ""
                                }, null, 8, ["modelValue"])
                            ]),
                            _: 2
                        }, [
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
                        ]), 1032, ["modelValue", "showPopup"]))
                        : createCommentVNode("v-if", true),
                    ($setup.selectedOption == '1')
                        ? (openBlock(), createBlock($setup["LocationAddressPicker"], {
                            key: 1,
                            modelValue: $setup.addressValue,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.addressValue) = $event)),
                            showPopup: $setup.popupStatus,
                            "onUpdate:showPopup": _cache[5] || (_cache[5] = $event => (($setup.popupStatus) = $event))
                        }, createSlots({
                            pickerContentSuperHeader: withCtx(() => [
                                createVNode($setup["RadioButtonList"], {
                                    modelValue: $setup.selectedOption,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.selectedOption) = $event)),
                                    items: $setup.options,
                                    horizontal: ""
                                }, null, 8, ["modelValue"])
                            ]),
                            _: 2
                        }, [
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
                        ]), 1032, ["modelValue", "showPopup"]))
                        : createCommentVNode("v-if", true),
                    ($setup.selectedOption == '2')
                        ? (openBlock(), createBlock($setup["GeoPicker"], {
                            key: 2,
                            modelValue: $setup.pointValue,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($setup.pointValue) = $event)),
                            drawingMode: "Point",
                            showPopup: $setup.popupStatus,
                            "onUpdate:showPopup": _cache[8] || (_cache[8] = $event => (($setup.popupStatus) = $event))
                        }, createSlots({
                            pickerContentSuperHeader: withCtx(() => [
                                createVNode($setup["RadioButtonList"], {
                                    modelValue: $setup.selectedOption,
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($setup.selectedOption) = $event)),
                                    items: $setup.options,
                                    horizontal: ""
                                }, null, 8, ["modelValue"])
                            ]),
                            _: 2
                        }, [
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
                        ]), 1032, ["modelValue", "showPopup"]))
                        : createCommentVNode("v-if", true),
                    ($setup.selectedOption == '3')
                        ? (openBlock(), createBlock($setup["GeoPicker"], {
                            key: 3,
                            modelValue: $setup.fenceValue,
                            "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($setup.fenceValue) = $event)),
                            drawingMode: "Polygon",
                            showPopup: $setup.popupStatus,
                            "onUpdate:showPopup": _cache[11] || (_cache[11] = $event => (($setup.popupStatus) = $event))
                        }, createSlots({
                            pickerContentSuperHeader: withCtx(() => [
                                createVNode($setup["RadioButtonList"], {
                                    modelValue: $setup.selectedOption,
                                    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($setup.selectedOption) = $event)),
                                    items: $setup.options,
                                    horizontal: ""
                                }, null, 8, ["modelValue"])
                            ]),
                            _: 2
                        }, [
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
                        ]), 1032, ["modelValue", "showPopup"]))
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
