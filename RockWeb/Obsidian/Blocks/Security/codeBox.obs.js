System.register(['vue', '@Obsidian/Controls/rockFormField', '@Obsidian/Utility/component', '@Obsidian/ValidationRules'], (function (exports) {
    'use strict';
    var defineComponent, ref, reactive, computed, nextTick, watch, openBlock, createBlock, withCtx, createElementVNode, normalizeClass, createElementBlock, Fragment, renderList, withDirectives, vModelText, RockFormField, useVModelPassthrough, rulesPropType, normalizeRules;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            reactive = module.reactive;
            computed = module.computed;
            nextTick = module.nextTick;
            watch = module.watch;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createElementVNode = module.createElementVNode;
            normalizeClass = module.normalizeClass;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            renderList = module.renderList;
            withDirectives = module.withDirectives;
            vModelText = module.vModelText;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            rulesPropType = module.rulesPropType;
            normalizeRules = module.normalizeRules;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'codeBox',
                props: {
                    modelValue: {
                        type: String,
                        required: false,
                        default: null
                    },
                    allowedChars: {
                        type: Object,
                        required: false,
                        default: /^[a-zA-Z0-9]$/
                    },
                    disabled: {
                        type: Boolean,
                        required: false,
                        default: false
                    },
                    maxLength: {
                        type: Number,
                        required: true
                    },
                    modelModifiers: {
                        type: Object,
                        required: false,
                        default: null
                    },
                    rules: rulesPropType,
                    updateOnComplete: {
                        type: Boolean,
                        required: false,
                        default: false
                    }
                },
                emits: ["update:modelValue", "complete"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalModelValue = useVModelPassthrough(props, "modelValue", emit);
                    const codeContainer = ref(undefined);
                    const characters = reactive([]);
                    setCharactersFromModelValue();
                    const internalRules = computed(() => normalizeRules(props.rules));
                    const isRequired = computed(() => internalRules.value.includes("required"));
                    function onInput(event, index) {
                        if (!isInputEvent(event)) {
                            return;
                        }
                        const input = getCodeInputAt(index);
                        if (!input || input !== event.target) {
                            return;
                        }
                        const modifiedString = applyModifications(input.value);
                        const modifiedCharacters = modifiedString.split("");
                        let lastFilledIndex = -1;
                        for (let i = 0; i < modifiedCharacters.length; i++) {
                            if (index + i < props.maxLength) {
                                lastFilledIndex = index + i;
                                characters[lastFilledIndex] = modifiedCharacters[i];
                            }
                        }
                        tryEmitCode();
                        nextTick(() => {
                            if (lastFilledIndex !== -1) {
                                const nextInput = lastFilledIndex < props.maxLength - 2 ? getCodeInputAt(lastFilledIndex + 1) : getCodeInputAt(lastFilledIndex);
                                if (nextInput) {
                                    nextInput.focus();
                                }
                            }
                            else if (event.inputType === "deleteContentBackward") {
                                const prevInput = index === 0 ? getCodeInputAt(index) : getCodeInputAt(index - 1);
                                if (prevInput) {
                                    prevInput.focus();
                                }
                            }
                        });
                    }
                    function onFocus(index) {
                        const input = getCodeInputAt(index);
                        if (input) {
                            input.select();
                        }
                    }
                    function applyModifications(codeCharacter) {
                        var _a;
                        if (codeCharacter && ((_a = props.modelModifiers) === null || _a === void 0 ? void 0 : _a.capitalize)) {
                            return codeCharacter.toUpperCase();
                        }
                        return codeCharacter;
                    }
                    function getCodeInputAt(index) {
                        return (codeContainer.value.children)[index];
                    }
                    function isCodeComplete() {
                        for (const character of characters) {
                            if (character == null || character == undefined) {
                                return false;
                            }
                        }
                        return true;
                    }
                    function isInputEvent(event) {
                        return !!event && typeof event === "object" && "inputType" in event;
                    }
                    function setCharactersFromModelValue() {
                        if (!characters.length || props.modelValue != characters.join("")) {
                            if (props.modelValue) {
                                for (let index = 0; index < props.maxLength; index++) {
                                    characters[index] = applyModifications(props.modelValue.charAt(index));
                                }
                                const newModelValue = characters.join("");
                                if (props.modelValue != newModelValue) {
                                    nextTick(() => {
                                        tryEmitCode();
                                    });
                                }
                            }
                            else {
                                for (let index = 0; index < props.maxLength; index++) {
                                    characters[index] = null;
                                }
                            }
                        }
                    }
                    function tryEmitCode() {
                        const isComplete = isCodeComplete();
                        if (!props.updateOnComplete || isComplete) {
                            const code = characters.join("");
                            emit("update:modelValue", code);
                            if (isComplete) {
                                emit("complete", code);
                            }
                            return true;
                        }
                        return false;
                    }
                    watch(() => props.modelValue, () => {
                        setCharactersFromModelValue();
                    });
                    const __returned__ = { props, emit, internalModelValue, codeContainer, characters, internalRules, isRequired, onInput, onFocus, applyModifications, getCodeInputAt, isCodeComplete, isInputEvent, setCharactersFromModelValue, tryEmitCode, RockFormField };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { class: "control-wrapper" };
            const _hoisted_2 = {
                class: "d-flex",
                ref: "codeContainer"
            };
            const _hoisted_3 = ["onUpdate:modelValue", "autofocus", "disabled", "id", "maxlength", "onInput", "onFocus"];
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["RockFormField"], {
                    modelValue: $setup.internalModelValue,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.internalModelValue) = $event)),
                    name: "codebox",
                    rules: $props.rules
                }, {
                    default: withCtx(({ uniqueId, field }) => [
                        createElementVNode("div", {
                            class: normalizeClass(['form-group rock-code-box', $setup.isRequired ? 'required' : ''])
                        }, [
                            createElementVNode("div", _hoisted_1, [
                                createElementVNode("div", _hoisted_2, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.characters, (character, index) => {
                                        return withDirectives((openBlock(), createElementBlock("input", {
                                            "onUpdate:modelValue": $event => (($setup.characters[index]) = $event),
                                            autocomplete: "one-time-code",
                                            autofocus: index === 0,
                                            class: normalizeClass(`form-control flex-grow-1 flex-sm-grow-0 flex-shrink-1 ${index > 0 ? 'ml-1' : ''} h3`),
                                            disabled: $props.disabled,
                                            id: `${uniqueId}-${index}`,
                                            key: index,
                                            maxlength: $props.maxLength,
                                            type: "text",
                                            onInput: $event => ($setup.onInput($event, index)),
                                            onFocus: $event => ($setup.onFocus(index))
                                        }, null, 42, _hoisted_3)), [
                                            [vModelText, $setup.characters[index]]
                                        ]);
                                    }), 128))
                                ], 512)
                            ])
                        ], 2)
                    ]),
                    _: 1
                }, 8, ["modelValue", "rules"]));
            }
            const __sfc_style = document.createElement("style");
            __sfc_style.textContent = `.rock-code-box input[data-v-lld0m2orstjj0q9y6otb7ecg] {
    width: 47px;
    height: 64px;
    text-align: center;
    font-size: 24px;
}`;
            document.head.appendChild(__sfc_style);
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render], ["__scopeId", "data-v-lld0m2orstjj0q9y6otb7ecg"]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
