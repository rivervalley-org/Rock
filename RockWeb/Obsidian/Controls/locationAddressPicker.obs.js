System.register(['tslib', 'vue', '@Obsidian/Utility/component', './contentDropDownPicker.obs.js', './addressControl.obs.js', './rockValidation.js', '@Obsidian/Utility/address', './loading.js', './rockButton.js', '@Obsidian/Utility/promiseUtils', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', './rockFormField.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Controls/fullscreen', './dropDownList.js', 'ant-design-vue', '@Obsidian/Utility/util', '@Obsidian/Utility/stringUtils', './textBox.js', '@Obsidian/Enums/Controls/requirementLevel', '@Obsidian/Utility/http', './loadingIndicator.js', './alert.obs.js', '@Obsidian/Enums/Controls/alertType'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, watch, createTextVNode, openBlock, createBlock, mergeProps, createSlots, withCtx, createElementVNode, createVNode, renderSlot, standardRockFormFieldProps, useStandardRockFormFieldProps, updateRefValue, exportHelper$1, exportHelper$2, RockValidation, validateAddress, Loading;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
            createTextVNode = module.createTextVNode;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
            createSlots = module.createSlots;
            withCtx = module.withCtx;
            createElementVNode = module.createElementVNode;
            createVNode = module.createVNode;
            renderSlot = module.renderSlot;
        }, function (module) {
            standardRockFormFieldProps = module.standardRockFormFieldProps;
            useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
            updateRefValue = module.updateRefValue;
        }, function (module) {
            exportHelper$1 = module["default"];
        }, function (module) {
            exportHelper$2 = module["default"];
        }, function (module) {
            RockValidation = module["default"];
        }, function (module) {
            validateAddress = module.validateAddress;
        }, function (module) {
            Loading = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'locationAddressPicker',
                props: Object.assign(Object.assign({}, standardRockFormFieldProps), { modelValue: {
                        type: Object,
                        required: true
                    } }),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const controlValue = ref(Object.assign({}, props.modelValue));
                    const pickerValue = ref(Object.assign({}, props.modelValue));
                    const pickerLabel = ref("");
                    const errors = ref([]);
                    const isLoading = ref(false);
                    const showPopup = ref(false);
                    const formFieldProps = useStandardRockFormFieldProps(props);
                    function select() {
                        var _a, _b, _c, _d;
                        return __awaiter(this, void 0, void 0, function* () {
                            isLoading.value = true;
                            const response = yield validateAddress(Object.assign({}, controlValue.value));
                            if (response.isSuccess && response.data) {
                                if (response.data.isValid) {
                                    errors.value = [];
                                    pickerValue.value = Object.assign({}, response.data.address);
                                    controlValue.value = Object.assign({}, response.data.address);
                                    pickerLabel.value = (_a = response.data.addressString) !== null && _a !== void 0 ? _a : "";
                                    showPopup.value = false;
                                }
                                else {
                                    errors.value = [{ name: "Invalid", text: (_b = response.data.errorMessage) !== null && _b !== void 0 ? _b : "Please enter a valid address." }];
                                }
                            }
                            else {
                                console.error((_c = response.errorMessage) !== null && _c !== void 0 ? _c : "Unknown error while validating address.");
                                errors.value = [{ name: "Server", text: (_d = response.errorMessage) !== null && _d !== void 0 ? _d : "An unknown error occurred. Please try again." }];
                            }
                            isLoading.value = false;
                        });
                    }
                    function cancel() {
                        controlValue.value = pickerValue.value;
                    }
                    function clear() {
                        pickerValue.value = {};
                        pickerLabel.value = "";
                    }
                    watch(() => props.modelValue, () => {
                        updateRefValue(controlValue, Object.assign({}, props.modelValue));
                        updateRefValue(pickerValue, Object.assign({}, props.modelValue));
                    });
                    watch(pickerValue, () => {
                        emit("update:modelValue", pickerValue.value);
                    });
                    const __returned__ = { props, emit, controlValue, pickerValue, pickerLabel, errors, isLoading, showPopup, formFieldProps, select, cancel, clear, ContentDropDownPicker: exportHelper$1, AddressControl: exportHelper$2, RockValidation, Loading };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = ["innerHTML"];
            const _hoisted_2 = createTextVNode("Select");
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["ContentDropDownPicker"], mergeProps($setup.formFieldProps, {
                    modelValue: $setup.pickerValue,
                    iconCssClass: "fa fa-map-marker",
                    showClear: !!$setup.pickerValue,
                    onPrimaryButtonClicked: $setup.select,
                    onSecondaryButtonClicked: $setup.cancel,
                    onClearButtonClicked: $setup.clear,
                    pickerContentBoxHeight: "auto",
                    disablePickerContentBoxScroll: "",
                    disableAutoCloseOnPrimaryAction: "",
                    showPopup: $setup.showPopup,
                    "onUpdate:showPopup": _cache[1] || (_cache[1] = $event => (($setup.showPopup) = $event))
                }), createSlots({
                    innerLabel: withCtx(() => [
                        createElementVNode("span", {
                            class: "selected-names",
                            innerHTML: $setup.pickerLabel
                        }, null, 8, _hoisted_1)
                    ]),
                    primaryButtonLabel: withCtx(() => [
                        createVNode($setup["Loading"], { isLoading: $setup.isLoading }, {
                            default: withCtx(() => [
                                _hoisted_2
                            ]),
                            _: 1
                        }, 8, ["isLoading"])
                    ]),
                    default: withCtx(() => [
                        createVNode($setup["RockValidation"], { errors: $setup.errors }, null, 8, ["errors"]),
                        createVNode($setup["AddressControl"], {
                            modelValue: $setup.controlValue,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.controlValue) = $event)),
                            rules: "required"
                        }, null, 8, ["modelValue"])
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
                ]), 1040, ["modelValue", "showClear", "showPopup"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
