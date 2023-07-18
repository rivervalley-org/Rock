System.register(['tslib', 'vue', './rockFormField.js', '@Obsidian/Utility/component', '@Obsidian/ValidationRules', '@Obsidian/Utility/phone', './inputGroupDropDown.obs.js', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', './transitionVerticalCollapse.js'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, watch, createElementVNode, openBlock, createBlock, mergeProps, withCtx, normalizeClass, createElementBlock, withDirectives, vModelText, RockFormField, standardRockFormFieldProps, useVModelPassthrough, useStandardRockFormFieldProps, normalizeRules, stripPhoneNumber, formatPhoneNumber, getPhoneNumberConfiguration, exportHelper$1;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            mergeProps = module.mergeProps;
            withCtx = module.withCtx;
            normalizeClass = module.normalizeClass;
            createElementBlock = module.createElementBlock;
            withDirectives = module.withDirectives;
            vModelText = module.vModelText;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            standardRockFormFieldProps = module.standardRockFormFieldProps;
            useVModelPassthrough = module.useVModelPassthrough;
            useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
        }, function (module) {
            normalizeRules = module.normalizeRules;
        }, function (module) {
            stripPhoneNumber = module.stripPhoneNumber;
            formatPhoneNumber = module.formatPhoneNumber;
            getPhoneNumberConfiguration = module.getPhoneNumberConfiguration;
        }, function (module) {
            exportHelper$1 = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'phoneNumberBox',
                props: Object.assign({ modelValue: {
                        type: String,
                        default: ""
                    }, countryCode: {
                        type: String,
                        default: ""
                    }, inputGroupClasses: {
                        type: String,
                        default: ""
                    } }, standardRockFormFieldProps),
                emits: ["update:modelValue", "update:countryCode"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = useVModelPassthrough(props, "modelValue", emit);
                    const countryCode = useVModelPassthrough(props, "countryCode", emit);
                    const formFieldProps = useStandardRockFormFieldProps(props);
                    const configuration = ref(null);
                    const strippedValue = computed(() => {
                        return stripPhoneNumber(internalValue.value);
                    });
                    const formattedValue = computed(() => {
                        return formatPhoneNumber(strippedValue.value, getConfiguredRules());
                    });
                    const rules = computed(() => {
                        const rules = normalizeRules(props.rules);
                        rules.push(validatePhoneNumber);
                        return rules;
                    });
                    const availableCountryCodes = computed(() => {
                        var _a, _b;
                        return Object.keys((_b = (_a = configuration.value) === null || _a === void 0 ? void 0 : _a.rules) !== null && _b !== void 0 ? _b : {});
                    });
                    const availableCountryCodeOptions = computed(() => {
                        if (availableCountryCodes.value.length == 0) {
                            return [{ value: "1", text: "1" }];
                        }
                        return availableCountryCodes.value.map((val) => ({ value: val, text: val }));
                    });
                    function validatePhoneNumber(value) {
                        var _a;
                        const rules = getConfiguredRules();
                        if (!value) {
                            return true;
                        }
                        if (rules.length == 0) {
                            return true;
                        }
                        for (let rule of rules) {
                            const regex = new RegExp((_a = rule.match) !== null && _a !== void 0 ? _a : "");
                            if (regex.test(strippedValue.value)) {
                                return true;
                            }
                        }
                        return `The phone number '${value}' is not a valid phone number.`;
                    }
                    function loadConfiguration() {
                        return __awaiter(this, void 0, void 0, function* () {
                            try {
                                const result = yield getPhoneNumberConfiguration();
                                if (result) {
                                    configuration.value = result;
                                }
                                else {
                                    console.error("Unknown error while loading phone number configuration.");
                                }
                            }
                            catch (e) {
                                console.error(e !== null && e !== void 0 ? e : "Unknown error while loading phone number configuration.");
                            }
                        });
                    }
                    function getConfiguredRules() {
                        var _a, _b, _c;
                        return (_c = (_b = (_a = configuration.value) === null || _a === void 0 ? void 0 : _a.rules) === null || _b === void 0 ? void 0 : _b[countryCode.value]) !== null && _c !== void 0 ? _c : [];
                    }
                    function onChange() {
                        internalValue.value = formattedValue.value;
                    }
                    watch(formattedValue, () => {
                        emit("update:modelValue", formattedValue.value);
                    }, { immediate: true });
                    watch(() => props.modelValue, () => {
                        internalValue.value = formattedValue.value;
                    }, {
                        immediate: true
                    });
                    watch([configuration, availableCountryCodes], () => {
                        if (configuration.value == null || availableCountryCodes.value.length == 0)
                            return;
                        if (countryCode.value == null || !availableCountryCodes.value.includes(countryCode.value)) {
                            countryCode.value = availableCountryCodes.value[0];
                        }
                    });
                    loadConfiguration();
                    const __returned__ = { props, emit, internalValue, countryCode, formFieldProps, configuration, strippedValue, formattedValue, rules, availableCountryCodes, availableCountryCodeOptions, validatePhoneNumber, loadConfiguration, getConfiguredRules, onChange, RockFormField, InputGroupDropDown: exportHelper$1 };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "control-wrapper" };
            const _hoisted_2 = {
                key: 0,
                class: "input-group-addon"
            };
            const _hoisted_3 = createElementVNode("i", { class: "fa fa-phone-square" }, null, -1);
            const _hoisted_4 = [
                _hoisted_3
            ];
            const _hoisted_5 = ["id"];
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["RockFormField"], mergeProps({
                    modelValue: $setup.internalValue,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.internalValue) = $event))
                }, $setup.formFieldProps, {
                    onChange: $setup.onChange,
                    formGroupClasses: "rock-phonenumber-box",
                    rules: $setup.rules,
                    name: "phonenumberbox"
                }), {
                    default: withCtx(({ uniqueId, field }) => [
                        createElementVNode("div", _hoisted_1, [
                            createElementVNode("div", {
                                class: normalizeClass(["input-group phone-number-box", $props.inputGroupClasses])
                            }, [
                                ($setup.availableCountryCodeOptions.length < 2)
                                    ? (openBlock(), createElementBlock("span", _hoisted_2, _hoisted_4))
                                    : (openBlock(), createBlock($setup["InputGroupDropDown"], {
                                        key: 1,
                                        items: $setup.availableCountryCodeOptions,
                                        modelValue: $setup.countryCode,
                                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.countryCode) = $event)),
                                        inputGroupClasses: "input-group-addon"
                                    }, null, 8, ["items", "modelValue"])),
                                withDirectives(createElementVNode("input", mergeProps({
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.internalValue) = $event)),
                                    id: uniqueId,
                                    type: "text",
                                    class: "form-control"
                                }, field), null, 16, _hoisted_5), [
                                    [vModelText, $setup.internalValue]
                                ])
                            ], 2)
                        ])
                    ]),
                    _: 1
                }, 16, ["modelValue", "rules"]));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
