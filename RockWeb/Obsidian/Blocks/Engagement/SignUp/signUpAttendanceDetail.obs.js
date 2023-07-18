System.register(['tslib', 'vue', '@Obsidian/Controls/alert.obs', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockForm', '@Obsidian/Utility/block'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, onMounted, createElementVNode, createTextVNode, openBlock, createElementBlock, Fragment, createBlock, withCtx, toDisplayString, createCommentVNode, createVNode, Alert, CheckBoxList, RockButton, RockForm, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            onMounted = module.onMounted;
            createElementVNode = module.createElementVNode;
            createTextVNode = module.createTextVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            toDisplayString = module.toDisplayString;
            createCommentVNode = module.createCommentVNode;
            createVNode = module.createVNode;
        }, function (module) {
            Alert = module["default"];
        }, function (module) {
            CheckBoxList = module["default"];
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            RockForm = module["default"];
        }, function (module) {
            useConfigurationValues = module.useConfigurationValues;
            useInvokeBlockAction = module.useInvokeBlockAction;
            onConfigurationValuesChanged = module.onConfigurationValuesChanged;
            useReloadBlock = module.useReloadBlock;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'signUpAttendanceDetail',
                setup(__props, { expose }) {
                    var _a;
                    expose();
                    const config = useConfigurationValues();
                    const invokeBlockAction = useInvokeBlockAction();
                    const headerElement = ref(null);
                    const selectedAttendees = ref([]);
                    const errorMessage = ref("");
                    const successMessage = ref("");
                    const isSaving = ref(false);
                    const blockErrorMessage = computed(() => {
                        return config.errorMessage;
                    });
                    const attendees = computed(() => {
                        var _a, _b;
                        var listItemBag = (_b = (_a = config.attendees) === null || _a === void 0 ? void 0 : _a.map(a => ({
                            text: a.name,
                            value: a.personAliasId.toString()
                        }))) !== null && _b !== void 0 ? _b : [];
                        return listItemBag;
                    });
                    function onAttendeesUpdated() {
                        var _a;
                        if (!((_a = config.attendees) === null || _a === void 0 ? void 0 : _a.length)) {
                            return;
                        }
                        config.attendees.forEach((a) => a.didAttend = selectedAttendees.value.includes(a.personAliasId.toString()));
                    }
                    function onSubmit() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            isSaving.value = true;
                            errorMessage.value = "";
                            successMessage.value = "";
                            const bag = {
                                attendees: config.attendees
                            };
                            const result = yield invokeBlockAction("SaveAttendance", { bag });
                            isSaving.value = false;
                            if (!result.isSuccess) {
                                errorMessage.value = (_a = result.errorMessage) !== null && _a !== void 0 ? _a : "Unknown error when trying to enter attendance.";
                                return;
                            }
                            successMessage.value = "Successfully entered attendance.";
                        });
                    }
                    onConfigurationValuesChanged(useReloadBlock());
                    if ((_a = config.attendees) === null || _a === void 0 ? void 0 : _a.length) {
                        config.attendees
                            .filter((a) => a.didAttend)
                            .forEach((a) => selectedAttendees.value.push(a.personAliasId.toString()));
                    }
                    onMounted(() => {
                        if (headerElement.value && config.headerHtml) {
                            headerElement.value.innerHTML = config.headerHtml;
                        }
                    });
                    const __returned__ = { config, invokeBlockAction, headerElement, selectedAttendees, errorMessage, successMessage, isSaving, blockErrorMessage, attendees, onAttendeesUpdated, onSubmit, Alert, CheckboxList: CheckBoxList, RockButton, RockForm };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = { key: 3 };
            const _hoisted_2 = { ref: "headerElement" };
            const _hoisted_3 = createElementVNode("hr", null, null, -1);
            const _hoisted_4 = createTextVNode("Save");
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    ($setup.blockErrorMessage)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 0,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.blockErrorMessage), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    ($setup.errorMessage)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 1,
                            alertType: "warning"
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.errorMessage), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    ($setup.successMessage)
                        ? (openBlock(), createBlock($setup["Alert"], {
                            key: 2,
                            alertType: "success",
                            dismissible: true,
                            onDismiss: _cache[0] || (_cache[0] = $event => ($setup.successMessage = ''))
                        }, {
                            default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.successMessage), 1)
                            ]),
                            _: 1
                        }))
                        : createCommentVNode("v-if", true),
                    (!$setup.blockErrorMessage)
                        ? (openBlock(), createElementBlock("div", _hoisted_1, [
                            createElementVNode("div", _hoisted_2, null, 512),
                            _hoisted_3,
                            createVNode($setup["RockForm"], { onSubmit: $setup.onSubmit }, {
                                default: withCtx(() => [
                                    createVNode($setup["CheckboxList"], {
                                        modelValue: $setup.selectedAttendees,
                                        "onUpdate:modelValue": [
                                            _cache[1] || (_cache[1] = $event => (($setup.selectedAttendees) = $event)),
                                            $setup.onAttendeesUpdated
                                        ],
                                        label: "Attendees",
                                        items: $setup.attendees
                                    }, null, 8, ["modelValue", "items"]),
                                    createVNode($setup["RockButton"], {
                                        type: "submit",
                                        disabled: $setup.isSaving
                                    }, {
                                        default: withCtx(() => [
                                            _hoisted_4
                                        ]),
                                        _: 1
                                    }, 8, ["disabled"])
                                ]),
                                _: 1
                            })
                        ]))
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
