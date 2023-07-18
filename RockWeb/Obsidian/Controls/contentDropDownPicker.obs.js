System.register(['vue', './rockButton.js', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', './rockFormField.js', '@Obsidian/Utility/component', '@Obsidian/Utility/guid', '@Obsidian/Controls/fullscreen', 'tslib', '@Obsidian/Utility/promiseUtils', '@Obsidian/Utility/form', '@Obsidian/ValidationRules', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, pushScopeId, popScopeId, createElementVNode, openBlock, createBlock, mergeProps, withCtx, renderSlot, normalizeClass, withModifiers, toDisplayString, createElementBlock, createCommentVNode, withDirectives, normalizeStyle, createVNode, createTextVNode, vShow, RockButton, BtnType, BtnSize, RockFormField, standardRockFormFieldProps, useStandardRockFormFieldProps, useVModelPassthrough, newGuid, Fullscreen;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            pushScopeId = module.pushScopeId;
            popScopeId = module.popScopeId;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
            withCtx = module.withCtx;
            renderSlot = module.renderSlot;
            normalizeClass = module.normalizeClass;
            withModifiers = module.withModifiers;
            toDisplayString = module.toDisplayString;
            createElementBlock = module.createElementBlock;
            createCommentVNode = module.createCommentVNode;
            withDirectives = module.withDirectives;
            normalizeStyle = module.normalizeStyle;
            createVNode = module.createVNode;
            createTextVNode = module.createTextVNode;
            vShow = module.vShow;
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            BtnType = module.BtnType;
        }, function (module) {
            BtnSize = module.BtnSize;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            standardRockFormFieldProps = module.standardRockFormFieldProps;
            useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            newGuid = module.newGuid;
        }, function (module) {
            Fullscreen = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'contentDropDownPicker',
                props: Object.assign(Object.assign({ modelValue: {
                        required: false
                    } }, standardRockFormFieldProps), { innerLabel: {
                        type: String,
                        default: ""
                    }, primaryButtonLabel: {
                        type: String,
                        default: "Select"
                    }, secondaryButtonLabel: {
                        type: String,
                        default: "Cancel"
                    }, hideMainActionButtons: {
                        type: Boolean,
                        default: false
                    }, showClear: {
                        type: Boolean,
                        default: false
                    }, showPopup: {
                        type: Boolean,
                        default: null
                    }, isFullscreen: {
                        type: Boolean,
                        default: false
                    }, iconCssClass: {
                        type: String,
                        default: "fa fa-folder-open"
                    }, pickerContentBoxHeight: {
                        type: String,
                        default: "200px"
                    }, pickerContentBoxWidth: {
                        type: String,
                        default: null
                    }, disablePickerContentBoxScroll: {
                        type: Boolean,
                        default: false
                    }, pickerClass: {
                        type: String,
                        default: null
                    }, disableAutoCloseOnPrimaryAction: {
                        type: Boolean,
                        default: false
                    }, pickerContentHeadingText: {
                        type: String,
                        default: ""
                    }, showFullscreenButton: {
                        type: Boolean,
                        default: false
                    }, forceContentReloadOnOpen: {
                        type: Boolean,
                        default: false
                    }, fullWidth: {
                        type: Boolean,
                        default: false
                    } }),
                emits: ["primaryButtonClicked", "secondaryButtonClicked", "clearButtonClicked", "update:showPopup", "update:isFullscreen"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const fullscreenButtonType = BtnType.Link;
                    const selectButton = {
                        size: BtnSize.ExtraSmall,
                        type: BtnType.Primary
                    };
                    const cancelButton = {
                        size: BtnSize.ExtraSmall,
                        type: BtnType.Link
                    };
                    const id = newGuid();
                    const formFieldProps = useStandardRockFormFieldProps(props);
                    const internalIsFullscreen = useVModelPassthrough(props, "isFullscreen", emit);
                    const internalShowPopup = ref(false);
                    const pickerIconClass = computed(() => `${props.iconCssClass} fa-fw`);
                    const additionalPickerClass = computed(() => {
                        let classes = props.pickerClass ? props.pickerClass : "";
                        if (internalShowPopup.value) {
                            classes += " open";
                        }
                        if (props.showClear) {
                            classes += " picker-show-clear";
                        }
                        if (props.fullWidth) {
                            classes += " picker-full-width";
                        }
                        return classes;
                    });
                    const pickerMenuInnerStyles = computed(() => {
                        let height = internalIsFullscreen.value ? "100%" : props.pickerContentBoxHeight;
                        return `height: ${height}; overflow-x: visible; overflow-y: ${props.disablePickerContentBoxScroll ? "visible" : "auto"};`;
                    });
                    const pickerMenuStyles = computed(() => {
                        if (props.pickerContentBoxWidth) {
                            return `width: ${props.pickerContentBoxWidth};`;
                        }
                        return "";
                    });
                    watch(() => props.showPopup, () => {
                        if (props.showPopup != null) {
                            internalShowPopup.value = props.showPopup;
                        }
                    }, { immediate: true });
                    watch(internalShowPopup, () => emit("update:showPopup", internalShowPopup.value));
                    function togglePickerMenu() {
                        internalShowPopup.value = !internalShowPopup.value;
                    }
                    function onAction(type) {
                        if (type !== "primary" || !props.disableAutoCloseOnPrimaryAction) {
                            internalShowPopup.value = false;
                        }
                        emit(`${type}ButtonClicked`);
                    }
                    const __returned__ = { props, emit, fullscreenButtonType, selectButton, cancelButton, id, formFieldProps, internalIsFullscreen, internalShowPopup, pickerIconClass, additionalPickerClass, pickerMenuInnerStyles, pickerMenuStyles, togglePickerMenu, onAction, RockButton, RockFormField, Fullscreen };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _withScopeId = n => (pushScopeId("data-v-kstlbs4gfsilkjdi4s0dfsr6"), n = n(), popScopeId(), n);
            const _hoisted_1 = { class: "control-wrapper" };
            const _hoisted_2 = ["onClick"];
            const _hoisted_3 = { class: "selected-names" };
            const _hoisted_4 = _withScopeId(() => createElementVNode("b", { class: "fa fa-caret-down pull-right" }, null, -1));
            const _hoisted_5 = {
                key: 0,
                class: "picker-mode-options"
            };
            const _hoisted_6 = {
                key: 1,
                class: "picker-search-header picker-header"
            };
            const _hoisted_7 = _withScopeId(() => createElementVNode("i", { class: "fa fa-expand" }, null, -1));
            const _hoisted_8 = { class: "picker-actions" };
            const _hoisted_9 = {
                key: 1,
                class: "pull-right"
            };
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["RockFormField"], mergeProps({ modelValue: $props.modelValue }, $setup.formFieldProps, {
                    name: 'picker' + $setup.id
                }), {
                    default: withCtx(({ uniqueId, field }) => [
                        createElementVNode("div", _hoisted_1, [
                            renderSlot(_ctx.$slots, "prepend", { isInputGroupSupported: true }, undefined, true),
                            createElementVNode("div", {
                                class: normalizeClass({ 'input-group': _ctx.$slots.inputGroupPrepend || _ctx.$slots.inputGroupAppend })
                            }, [
                                renderSlot(_ctx.$slots, "inputGroupPrepend", { isInputGroupSupported: true }, undefined, true),
                                createElementVNode("div", {
                                    class: normalizeClass(["picker picker-obsidian picker-select rollover-container", $setup.additionalPickerClass])
                                }, [
                                    createElementVNode("a", {
                                        class: normalizeClass(["picker-label", { 'has-ig-prepend': _ctx.$slots.inputGroupPrepend }]),
                                        href: "#",
                                        onClick: withModifiers($setup.togglePickerMenu, ["prevent", "stop"])
                                    }, [
                                        createElementVNode("i", {
                                            class: normalizeClass($setup.pickerIconClass)
                                        }, null, 2),
                                        renderSlot(_ctx.$slots, "innerLabel", {}, () => [
                                            createElementVNode("span", _hoisted_3, toDisplayString($props.innerLabel), 1)
                                        ], true),
                                        _hoisted_4,
                                        ($props.showClear)
                                            ? (openBlock(), createElementBlock("b", {
                                                key: 0,
                                                class: "fa fa-times pull-right",
                                                onClick: _cache[0] || (_cache[0] = withModifiers($event => ($setup.onAction('clear')), ["prevent", "stop"]))
                                            }))
                                            : createCommentVNode("v-if", true)
                                    ], 10, _hoisted_2),
                                    ($setup.internalShowPopup || !$props.forceContentReloadOnOpen)
                                        ? withDirectives((openBlock(), createBlock($setup["Fullscreen"], {
                                            key: 0,
                                            modelValue: $setup.internalIsFullscreen,
                                            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.internalIsFullscreen) = $event)),
                                            class: normalizeClass(["picker-menu", $setup.internalIsFullscreen ? 'is-fullscreen' : 'dropdown-menu']),
                                            style: normalizeStyle($setup.pickerMenuStyles)
                                        }, {
                                            default: withCtx(() => [
                                                createCommentVNode(" Optional \"super header\" area for things such as a means to switch between picker types "),
                                                (_ctx.$slots.pickerContentSuperHeader)
                                                    ? (openBlock(), createElementBlock("div", _hoisted_5, [
                                                        renderSlot(_ctx.$slots, "pickerContentSuperHeader", {}, undefined, true)
                                                    ]))
                                                    : createCommentVNode("v-if", true),
                                                createCommentVNode(" Optional header area for picker header content. If you provide content for the header or enable showing the fullscreen button, this will show "),
                                                (_ctx.$slots.pickerContentHeader || _ctx.$slots.pickerContentHeading || $props.pickerContentHeadingText || $props.showFullscreenButton)
                                                    ? (openBlock(), createElementBlock("div", _hoisted_6, [
                                                        createCommentVNode(" Override entire header area with `pickerContentHeader` slot "),
                                                        renderSlot(_ctx.$slots, "pickerContentHeader", {}, () => [
                                                            createCommentVNode(" Override heading, but keep fullscreen button intact with this `pickerContentHeading` slot, or specify heading text with `pickerContentHeadingText` prop "),
                                                            renderSlot(_ctx.$slots, "pickerContentHeading", {}, () => [
                                                                createElementVNode("h4", null, toDisplayString($props.pickerContentHeadingText), 1)
                                                            ], true),
                                                            createCommentVNode(" Show this fullscreen button in the header if enabled "),
                                                            ($props.showFullscreenButton)
                                                                ? (openBlock(), createBlock($setup["RockButton"], {
                                                                    key: 0,
                                                                    onClick: _cache[1] || (_cache[1] = $event => ($setup.internalIsFullscreen = !$setup.internalIsFullscreen)),
                                                                    btnType: $setup.fullscreenButtonType,
                                                                    class: "ml-auto w-auto",
                                                                    title: "Toggle Fullscreen",
                                                                    "aria-label": "Toggle Fullscreen"
                                                                }, {
                                                                    default: withCtx(() => [
                                                                        _hoisted_7
                                                                    ]),
                                                                    _: 1
                                                                }, 8, ["btnType"]))
                                                                : createCommentVNode("v-if", true)
                                                        ], true)
                                                    ]))
                                                    : createCommentVNode("v-if", true),
                                                createCommentVNode(" Main Picker Content via default slot "),
                                                createElementVNode("div", {
                                                    class: "scrollbar-thin picker-body",
                                                    style: normalizeStyle($setup.pickerMenuInnerStyles)
                                                }, [
                                                    renderSlot(_ctx.$slots, "default", {}, undefined, true)
                                                ], 4),
                                                createCommentVNode(" Actions Buttons "),
                                                createElementVNode("div", _hoisted_8, [
                                                    createCommentVNode(" Main Action Buttons: Overridable via `mainPickerActions` slot, or just configure with props "),
                                                    (!$props.hideMainActionButtons)
                                                        ? renderSlot(_ctx.$slots, "mainPickerActions", { key: 0 }, () => [
                                                            createVNode($setup["RockButton"], {
                                                                btnSize: $setup.selectButton.size,
                                                                btnType: $setup.selectButton.type,
                                                                class: "picker-btn",
                                                                onClick: _cache[2] || (_cache[2] = withModifiers($event => ($setup.onAction('primary')), ["prevent", "stop"]))
                                                            }, {
                                                                default: withCtx(() => [
                                                                    renderSlot(_ctx.$slots, "primaryButtonLabel", {}, () => [
                                                                        createTextVNode(toDisplayString($props.primaryButtonLabel), 1)
                                                                    ], true)
                                                                ]),
                                                                _: 3
                                                            }, 8, ["btnSize", "btnType"]),
                                                            createVNode($setup["RockButton"], {
                                                                btnSize: $setup.cancelButton.size,
                                                                btnType: $setup.cancelButton.type,
                                                                class: "picker-cancel",
                                                                onClick: _cache[3] || (_cache[3] = withModifiers($event => ($setup.onAction('secondary')), ["prevent", "stop"]))
                                                            }, {
                                                                default: withCtx(() => [
                                                                    renderSlot(_ctx.$slots, "secondaryButtonLabel", {}, () => [
                                                                        createTextVNode(toDisplayString($props.secondaryButtonLabel), 1)
                                                                    ], true)
                                                                ]),
                                                                _: 3
                                                            }, 8, ["btnSize", "btnType"])
                                                        ], true)
                                                        : createCommentVNode("v-if", true),
                                                    createCommentVNode(" Custom Action Buttons: `customPickerActions` slot allows you to add additional buttons to the right "),
                                                    (_ctx.$slots.customPickerActions)
                                                        ? (openBlock(), createElementBlock("div", _hoisted_9, [
                                                            renderSlot(_ctx.$slots, "customPickerActions", {}, undefined, true)
                                                        ]))
                                                        : createCommentVNode("v-if", true)
                                                ])
                                            ]),
                                            _: 3
                                        }, 8, ["modelValue", "class", "style"])), [
                                            [vShow, $setup.internalShowPopup]
                                        ])
                                        : createCommentVNode("v-if", true)
                                ], 2)
                            ], 2),
                            renderSlot(_ctx.$slots, "append", { isInputGroupSupported: true }, undefined, true)
                        ])
                    ]),
                    _: 3
                }, 16, ["modelValue", "name"]));
            }
            const __sfc_style = document.createElement("style");
            __sfc_style.textContent = `.scrollbar-thin[data-v-kstlbs4gfsilkjdi4s0dfsr6] {
    scrollbar-width: thin;
}
.scrollbar-thin[data-v-kstlbs4gfsilkjdi4s0dfsr6]::-webkit-scrollbar {
    width: 8px;
    border-radius: 4px;
}
.scrollbar-thin[data-v-kstlbs4gfsilkjdi4s0dfsr6]::-webkit-scrollbar-button {
    display: none;
}
.scrollbar-thin[data-v-kstlbs4gfsilkjdi4s0dfsr6]::-webkit-scrollbar-thumb {
    background-color: #858585;
    border-radius: 4px;
}
.scrollbar-thin[data-v-kstlbs4gfsilkjdi4s0dfsr6]::-webkit-scrollbar-thumb:hover {
    background-color: #6b6b6b;
}
.scrollbar-thin[data-v-kstlbs4gfsilkjdi4s0dfsr6]::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    border-radius: 4px;
}
.picker-menu[data-v-kstlbs4gfsilkjdi4s0dfsr6] {
    --body-background: var(--panel-bg);
    overflow-y: visible;
}
.picker-menu.is-fullscreen[data-v-kstlbs4gfsilkjdi4s0dfsr6] {
    display: flex !important;
    flex-direction: column;
}
.picker-header[data-v-kstlbs4gfsilkjdi4s0dfsr6],
.picker-actions[data-v-kstlbs4gfsilkjdi4s0dfsr6] {
    flex: 0;
}
.picker-body[data-v-kstlbs4gfsilkjdi4s0dfsr6] {
    flex: 1;
}
.has-ig-prepend[data-v-kstlbs4gfsilkjdi4s0dfsr6] {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
}`;
            document.head.appendChild(__sfc_style);
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render], ["__scopeId", "data-v-kstlbs4gfsilkjdi4s0dfsr6"]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
