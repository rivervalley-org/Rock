System.register(['vue', '@Obsidian/Utility/guid'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, onMounted, createElementVNode, openBlock, createElementBlock, withDirectives, vModelText, newGuid;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            onMounted = module.onMounted;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            withDirectives = module.withDirectives;
            vModelText = module.vModelText;
        }, function (module) {
            newGuid = module.newGuid;
        }],
        execute: (function () {

            exports('render', render);

            var StartViewOption; exports('StartViewOption', StartViewOption);
            (function (StartViewOption) {
                StartViewOption[StartViewOption["Month"] = 0] = "Month";
                StartViewOption[StartViewOption["Year"] = 1] = "Year";
                StartViewOption[StartViewOption["Decade"] = 2] = "Decade";
            })(StartViewOption || (exports('StartViewOption', StartViewOption = {})));
            const _sfc_main = defineComponent({
                name: 'datePickerBase',
                props: {
                    modelValue: {
                        type: String,
                        default: null
                    },
                    id: {
                        type: String,
                        default: ""
                    },
                    disabled: {
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
                    const defaultId = `datepicker-${newGuid()}`;
                    const inputEl = ref(null);
                    const computedId = computed(() => {
                        return props.id || defaultId;
                    });
                    const asRockDateOrNull = computed(() => {
                        var _a;
                        const match = /^(\d+)\/(\d+)\/(\d+)/.exec((_a = internalValue.value) !== null && _a !== void 0 ? _a : "");
                        if (match !== null) {
                            return `${match[3]}-${match[1]}-${match[2]}`;
                        }
                        else {
                            return null;
                        }
                    });
                    const dateLimiterOptions = computed(() => {
                        const options = {};
                        if (props.disallowFutureDateSelection) {
                            options.endDate = new Date();
                        }
                        if (props.disallowPastDateSelection) {
                            options.startDate = new Date();
                        }
                        return options;
                    });
                    watch(() => props.modelValue, () => {
                        if (!props.modelValue) {
                            internalValue.value = null;
                            return;
                        }
                        const match = /^(\d+)-(\d+)-(\d+)/.exec(props.modelValue);
                        if (match !== null) {
                            internalValue.value = `${match[2]}/${match[3]}/${match[1]}`;
                        }
                        else {
                            internalValue.value = null;
                        }
                    }, { immediate: true });
                    watch(asRockDateOrNull, () => {
                        emit("update:modelValue", asRockDateOrNull.value);
                    });
                    onMounted(() => {
                        const input = inputEl.value;
                        window.Rock.controls.datePicker.initialize(Object.assign(Object.assign({}, (dateLimiterOptions.value)), { id: input.id, startView: props.startView, showOnFocus: !props.disableShowOnFocus, format: "mm/dd/yyyy", todayHighlight: !props.disableHighlightToday, forceParse: !props.disableForceParse, onChangeScript: () => {
                                internalValue.value = input.value;
                            } }));
                    });
                    const __returned__ = { StartViewOption, props, emit, internalValue, defaultId, inputEl, computedId, asRockDateOrNull, dateLimiterOptions };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "input-group input-width-md js-date-picker date" };
            const _hoisted_2 = ["id", "disabled"];
            const _hoisted_3 = createElementVNode("span", { class: "input-group-addon" }, [
                createElementVNode("i", { class: "fa fa-calendar" })
            ], -1);
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", _hoisted_1, [
                    withDirectives(createElementVNode("input", {
                        ref: "inputEl",
                        type: "text",
                        id: $setup.computedId,
                        class: "form-control",
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalValue) = $event)),
                        disabled: $props.disabled
                    }, null, 8, _hoisted_2), [
                        [
                            vModelText,
                            $setup.internalValue,
                            void 0,
                            { lazy: true }
                        ]
                    ]),
                    _hoisted_3
                ]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
