System.register(['tslib', 'vue', '@Obsidian/Utility/component', '@Obsidian/Controls/contentDropDownPicker.obs', '@Obsidian/Controls/geoPickerMap.obs', '@Obsidian/Utility/geo', '@Obsidian/SystemGuids/definedValue'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, watch, onBeforeMount, openBlock, createBlock, mergeProps, createSlots, withCtx, createElementVNode, createVNode, renderSlot, standardRockFormFieldProps, useStandardRockFormFieldProps, ContentDropDownPicker, GeoPickerMap, nearAddressForCoordinates, wellKnownToCoordinates, loadMapResources, DefinedValue;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
            onBeforeMount = module.onBeforeMount;
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
        }, function (module) {
            ContentDropDownPicker = module["default"];
        }, function (module) {
            GeoPickerMap = module["default"];
        }, function (module) {
            nearAddressForCoordinates = module.nearAddressForCoordinates;
            wellKnownToCoordinates = module.wellKnownToCoordinates;
            loadMapResources = module.loadMapResources;
        }, function (module) {
            DefinedValue = module.DefinedValue;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'geoPicker',
                props: Object.assign(Object.assign({}, standardRockFormFieldProps), { modelValue: {
                        type: String,
                        default: ""
                    }, mapStyleValueGuid: {
                        type: String,
                        default: DefinedValue.MapStyleRock
                    }, centerLatitude: {
                        type: Number,
                        default: null
                    }, centerLongitude: {
                        type: Number,
                        default: null
                    }, drawingMode: {
                        type: String,
                        required: true
                    } }),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const mapValue = ref(props.modelValue);
                    const pickerValue = ref(props.modelValue);
                    const pickerLabel = ref("");
                    const isFullscreen = ref(false);
                    const formFieldProps = useStandardRockFormFieldProps(props);
                    function getAddress() {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (pickerValue.value) {
                                pickerLabel.value = "<i>Selected</i>";
                                const address = yield nearAddressForCoordinates(wellKnownToCoordinates(pickerValue.value, props.drawingMode));
                                if (address) {
                                    pickerLabel.value = address;
                                }
                            }
                            else {
                                pickerLabel.value = "";
                            }
                        });
                    }
                    function select() {
                        pickerValue.value = mapValue.value;
                    }
                    function cancel() {
                        mapValue.value = pickerValue.value;
                    }
                    function clear() {
                        pickerValue.value = "";
                        pickerLabel.value = "";
                    }
                    function toggledPopup(isShowing) {
                        if (!isShowing) {
                            isFullscreen.value = false;
                        }
                    }
                    watch(() => props.modelValue, () => {
                        mapValue.value = props.modelValue;
                        pickerValue.value = props.modelValue;
                    });
                    watch(pickerValue, () => {
                        emit("update:modelValue", pickerValue.value);
                        getAddress();
                    });
                    onBeforeMount(() => __awaiter(this, void 0, void 0, function* () {
                        yield loadMapResources();
                        getAddress();
                    }));
                    const __returned__ = { props, emit, mapValue, pickerValue, pickerLabel, isFullscreen, formFieldProps, getAddress, select, cancel, clear, toggledPopup, ContentDropDownPicker, GeoPickerMap };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = ["innerHTML"];
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["ContentDropDownPicker"], mergeProps($setup.formFieldProps, {
                    modelValue: $setup.pickerValue,
                    iconCssClass: "fa fa-map-marker",
                    pickerClass: "picker-geography",
                    showClear: !!$setup.pickerValue,
                    primaryButtonLabel: "Done",
                    isFullscreen: $setup.isFullscreen,
                    "onUpdate:isFullscreen": _cache[1] || (_cache[1] = $event => (($setup.isFullscreen) = $event)),
                    onPrimaryButtonClicked: $setup.select,
                    onSecondaryButtonClicked: $setup.cancel,
                    onClearButtonClicked: $setup.clear,
                    "onUpdate:showPopup": $setup.toggledPopup,
                    pickerContentBoxHeight: "auto",
                    pickerContentHeadingText: "Geography Picker",
                    disablePickerContentBoxScroll: "",
                    showFullscreenButton: "",
                    forceContentReloadOnOpen: ""
                }), createSlots({
                    innerLabel: withCtx(() => [
                        createElementVNode("span", {
                            class: "selected-names",
                            innerHTML: $setup.pickerLabel
                        }, null, 8, _hoisted_1)
                    ]),
                    default: withCtx(() => [
                        createVNode($setup["GeoPickerMap"], {
                            class: "geo-picker-map",
                            modelValue: $setup.mapValue,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.mapValue) = $event)),
                            drawingMode: $props.drawingMode,
                            isExpanded: $setup.isFullscreen,
                            mapStyleValueGuid: $props.mapStyleValueGuid,
                            centerLatitude: $props.centerLatitude,
                            centerLongitude: $props.centerLongitude
                        }, null, 8, ["modelValue", "drawingMode", "isExpanded", "mapStyleValueGuid", "centerLatitude", "centerLongitude"])
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
                ]), 1040, ["modelValue", "showClear", "isFullscreen"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
