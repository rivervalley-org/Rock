System.register(['tslib', 'vue', '@Obsidian/Templates/block', '@Obsidian/Controls/connectionStatus.obs', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/textBox', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockForm', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/realTime', '@Obsidian/Utility/block', '@Obsidian/Utility/guid'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, computed, pushScopeId, popScopeId, createElementVNode, openBlock, createElementBlock, toDisplayString, ref, nextTick, createTextVNode, createBlock, withCtx, createVNode, Fragment, renderList, normalizeClass, Block, ConnectionStatus, DropDownList, TextBox, RockButton, RockForm, BtnType, getTopic, useConfigurationValues, newGuid;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            pushScopeId = module.pushScopeId;
            popScopeId = module.popScopeId;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            toDisplayString = module.toDisplayString;
            ref = module.ref;
            nextTick = module.nextTick;
            createTextVNode = module.createTextVNode;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createVNode = module.createVNode;
            Fragment = module.Fragment;
            renderList = module.renderList;
            normalizeClass = module.normalizeClass;
        }, function (module) {
            Block = module["default"];
        }, function (module) {
            ConnectionStatus = module["default"];
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            RockForm = module["default"];
        }, function (module) {
            BtnType = module.BtnType;
        }, function (module) {
            getTopic = module.getTopic;
        }, function (module) {
            useConfigurationValues = module.useConfigurationValues;
        }, function (module) {
            newGuid = module.newGuid;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main$1 = defineComponent({
                name: 'attachment.partial',
                props: {
                    attachment: {
                        type: Object,
                        required: true
                    }
                },
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const isImage = computed(() => {
                        return props.attachment.url.includes("GetImage.ashx");
                    });
                    const __returned__ = { props, isImage };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _withScopeId$1 = n => (pushScopeId("data-v-hacym07f9ha0x5oer4d9p9io"), n = n(), popScopeId(), n);
            const _hoisted_1$1 = ["src", "alt"];
            const _hoisted_2$1 = {
                key: 1,
                class: "attachment-document"
            };
            const _hoisted_3$1 = _withScopeId$1(() => createElementVNode("i", { class: "fa fa-file" }, null, -1));
            const _hoisted_4$1 = ["href"];
            function render$1(_ctx, _cache, $props, $setup, $data, $options) {
                return ($setup.isImage)
                    ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        src: $props.attachment.url,
                        alt: $props.attachment.fileName,
                        class: "img-responsive attachment-image"
                    }, null, 8, _hoisted_1$1))
                    : (openBlock(), createElementBlock("div", _hoisted_2$1, [
                        _hoisted_3$1,
                        createElementVNode("a", {
                            href: $props.attachment.url
                        }, toDisplayString($props.attachment.fileName), 9, _hoisted_4$1)
                    ]));
            }
            const __sfc_style$1 = document.createElement("style");
            __sfc_style$1.textContent = `.attachment-image[data-v-hacym07f9ha0x5oer4d9p9io] {
    border-radius: 6px;
    max-height: 320px;
}
.attachment-document[data-v-hacym07f9ha0x5oer4d9p9io] {
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: white;
    color: var(--text-color);
    padding: 4px 12px;
}
.attachment-document .fa[data-v-hacym07f9ha0x5oer4d9p9io] {
    margin-right: 12px;
}`;
            document.head.appendChild(__sfc_style$1);
            const exportHelper$1 = _sfc_main$1;
            for (const [key, val] of [["render", render$1], ["__scopeId", "data-v-hacym07f9ha0x5oer4d9p9io"]]) {
                exportHelper$1[key] = val;
            }

            const _sfc_main = defineComponent({
                name: 'smsTestTransport',
                setup(__props, { expose }) {
                    var _a;
                    expose();
                    const config = useConfigurationValues();
                    const realTimeTopic = ref(null);
                    const messages = ref([]);
                    const fromNumber = ref("");
                    const toNumber = ref(config.phoneNumbers.length > 0 ? (_a = config.phoneNumbers[0].value) !== null && _a !== void 0 ? _a : "" : "");
                    const toPipeline = ref("");
                    const body = ref("");
                    const formResetKey = ref("");
                    const isReconnecting = ref(false);
                    const isDisconnected = ref(false);
                    const scrollContainer = ref(null);
                    const isFormDisabled = computed(() => {
                        return isReconnecting.value || isDisconnected.value;
                    });
                    function startReconnect() {
                        return __awaiter(this, void 0, void 0, function* () {
                            isReconnecting.value = true;
                            realTimeTopic.value = null;
                            yield nextTick();
                            try {
                                yield startRealTime();
                                isReconnecting.value = false;
                            }
                            catch (error) {
                                console.error(error instanceof Error ? error.message : error);
                                isDisconnected.value = true;
                            }
                        });
                    }
                    function startRealTime() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const topic = yield getTopic("Rock.RealTime.Topics.TestCommunicationTransportTopic");
                            topic.on("smsMessageSent", onSmsMessageSent);
                            topic.onReconnecting(() => isReconnecting.value = true);
                            topic.onReconnected(() => isReconnecting.value = false);
                            topic.onDisconnected(() => startReconnect());
                            realTimeTopic.value = topic;
                        });
                    }
                    function getMessageClass(message) {
                        if (message.incoming) {
                            return ["message-container", "message-incoming"];
                        }
                        else {
                            return ["message-container", "message-outgoing"];
                        }
                    }
                    function onSubmitMessage() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            messages.value.push({
                                fromNumber: fromNumber.value,
                                toNumber: toNumber.value,
                                body: body.value,
                                incoming: true
                            });
                            try {
                                yield ((_a = realTimeTopic.value) === null || _a === void 0 ? void 0 : _a.server.messageReceived({
                                    fromNumber: fromNumber.value,
                                    toNumber: toNumber.value,
                                    pipelineGuid: toPipeline.value || undefined,
                                    body: body.value
                                }));
                            }
                            catch (error) {
                                messages.value.pop();
                                throw error;
                            }
                            body.value = "";
                            formResetKey.value = newGuid();
                            setTimeout(() => {
                                if (scrollContainer.value) {
                                    scrollContainer.value.scrollTo(0, scrollContainer.value.scrollHeight);
                                }
                            }, 10);
                        });
                    }
                    function onMessageClick(message) {
                        var _a, _b, _c, _d;
                        if (message.incoming) {
                            fromNumber.value = (_a = message.fromNumber) !== null && _a !== void 0 ? _a : "";
                            toNumber.value = (_b = message.toNumber) !== null && _b !== void 0 ? _b : "";
                        }
                        else {
                            fromNumber.value = (_c = message.toNumber) !== null && _c !== void 0 ? _c : "";
                            toNumber.value = (_d = message.fromNumber) !== null && _d !== void 0 ? _d : "";
                        }
                    }
                    function onSmsMessageSent(message) {
                        const performScroll = scrollContainer.value
                            && scrollContainer.value.scrollHeight - scrollContainer.value.offsetHeight - scrollContainer.value.scrollTop < 10;
                        messages.value.push(Object.assign(Object.assign({}, message), { incoming: false }));
                        setTimeout(() => {
                            if (scrollContainer.value && performScroll) {
                                scrollContainer.value.scroll({
                                    top: scrollContainer.value.scrollHeight,
                                    behavior: "smooth"
                                });
                            }
                        }, 10);
                    }
                    startRealTime();
                    const __returned__ = { config, realTimeTopic, messages, fromNumber, toNumber, toPipeline, body, formResetKey, isReconnecting, isDisconnected, scrollContainer, isFormDisabled, startReconnect, startRealTime, getMessageClass, onSubmitMessage, onMessageClick, onSmsMessageSent, Attachment: exportHelper$1, Block, ConnectionStatus, DropDownList, TextBox, RockButton, RockForm, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _withScopeId = n => (pushScopeId("data-v-gcqsnywcvg9eb0vw64v7oakz"), n = n(), popScopeId(), n);
            const _hoisted_1 = { class: "d-flex flex-column outer-container" };
            const _hoisted_2 = {
                ref: "scrollContainer",
                class: "flex-grow-1 messages-container"
            };
            const _hoisted_3 = { class: "message-bubble" };
            const _hoisted_4 = ["onClick"];
            const _hoisted_5 = _withScopeId(() => createElementVNode("br", null, null, -1));
            const _hoisted_6 = _withScopeId(() => createElementVNode("br", null, null, -1));
            const _hoisted_7 = _withScopeId(() => createElementVNode("br", null, null, -1));
            const _hoisted_8 = { class: "message-text" };
            const _hoisted_9 = { class: "footer" };
            const _hoisted_10 = { class: "d-flex" };
            const _hoisted_11 = { class: "mr-2" };
            const _hoisted_12 = { class: "mr-2 flex-grow-1 to-phone-number" };
            const _hoisted_13 = { class: "mr-2 flex-grow-1 to-pipeline" };
            const _hoisted_14 = { class: "flex-grow-1 mr-2" };
            const _hoisted_15 = { style: { "margin-top": "26px" } };
            const _hoisted_16 = createTextVNode("Submit");
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["Block"], { title: "SMS Test Transport" }, {
                    preBody: withCtx(() => [
                        createVNode($setup["ConnectionStatus"], {
                            isReconnecting: $setup.isReconnecting,
                            isDisconnected: $setup.isDisconnected
                        }, null, 8, ["isReconnecting", "isDisconnected"])
                    ]),
                    default: withCtx(() => [
                        createElementVNode("div", _hoisted_1, [
                            createElementVNode("div", _hoisted_2, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.messages, (msg) => {
                                    return (openBlock(), createElementBlock("div", {
                                        class: normalizeClass($setup.getMessageClass(msg))
                                    }, [
                                        createElementVNode("div", _hoisted_3, [
                                            createElementVNode("span", {
                                                class: "message-numbers",
                                                onClick: $event => ($setup.onMessageClick(msg))
                                            }, [
                                                createTextVNode(" From: " + toDisplayString(msg.fromNumber), 1),
                                                _hoisted_5,
                                                createTextVNode(" To: " + toDisplayString(msg.toNumber), 1),
                                                _hoisted_6
                                            ], 8, _hoisted_4),
                                            _hoisted_7,
                                            createElementVNode("div", _hoisted_8, toDisplayString(msg.body), 1),
                                            (openBlock(true), createElementBlock(Fragment, null, renderList(msg.attachments, (attachment) => {
                                                return (openBlock(), createBlock($setup["Attachment"], { attachment: attachment }, null, 8, ["attachment"]));
                                            }), 256))
                                        ])
                                    ], 2));
                                }), 256))
                            ], 512),
                            createElementVNode("div", _hoisted_9, [
                                createVNode($setup["RockForm"], {
                                    onSubmit: $setup.onSubmitMessage,
                                    formResetKey: $setup.formResetKey
                                }, {
                                    default: withCtx(() => [
                                        createElementVNode("div", _hoisted_10, [
                                            createElementVNode("div", _hoisted_11, [
                                                createVNode($setup["TextBox"], {
                                                    modelValue: $setup.fromNumber,
                                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.fromNumber) = $event)),
                                                    label: "From (Outside Number)",
                                                    rules: "required",
                                                    disabled: $setup.isFormDisabled
                                                }, null, 8, ["modelValue", "disabled"])
                                            ]),
                                            createElementVNode("div", _hoisted_12, [
                                                createVNode($setup["DropDownList"], {
                                                    modelValue: $setup.toNumber,
                                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.toNumber) = $event)),
                                                    label: "To (Rock Number)",
                                                    items: $setup.config.phoneNumbers,
                                                    rules: "required",
                                                    showBlankItem: false,
                                                    disabled: $setup.isFormDisabled
                                                }, null, 8, ["modelValue", "items", "disabled"])
                                            ]),
                                            createElementVNode("div", _hoisted_13, [
                                                createVNode($setup["DropDownList"], {
                                                    modelValue: $setup.toPipeline,
                                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.toPipeline) = $event)),
                                                    label: "Pipeline",
                                                    items: $setup.config.pipelines,
                                                    disabled: $setup.isFormDisabled
                                                }, null, 8, ["modelValue", "items", "disabled"])
                                            ]),
                                            createElementVNode("div", _hoisted_14, [
                                                createVNode($setup["TextBox"], {
                                                    modelValue: $setup.body,
                                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.body) = $event)),
                                                    label: "Body",
                                                    rules: "required",
                                                    disabled: $setup.isFormDisabled
                                                }, null, 8, ["modelValue", "disabled"])
                                            ]),
                                            createElementVNode("div", _hoisted_15, [
                                                createVNode($setup["RockButton"], {
                                                    btnType: $setup.BtnType.Primary,
                                                    type: "submit",
                                                    disabled: $setup.isFormDisabled
                                                }, {
                                                    default: withCtx(() => [
                                                        _hoisted_16
                                                    ]),
                                                    _: 1
                                                }, 8, ["btnType", "disabled"])
                                            ])
                                        ])
                                    ]),
                                    _: 1
                                }, 8, ["formResetKey"])
                            ])
                        ])
                    ]),
                    _: 1
                }));
            }
            const __sfc_style = document.createElement("style");
            __sfc_style.textContent = `.outer-container[data-v-gcqsnywcvg9eb0vw64v7oakz] {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
.footer[data-v-gcqsnywcvg9eb0vw64v7oakz] {
    border-top: 1px solid #eee;
    padding: 12px;
}
.to-phone-number[data-v-gcqsnywcvg9eb0vw64v7oakz] {
    min-width: 100px;
    max-width: 300px;
}
.to-pipeline[data-v-gcqsnywcvg9eb0vw64v7oakz] {
    min-width: 100px;
    max-width: 200px;
}
.messages-container[data-v-gcqsnywcvg9eb0vw64v7oakz] {
    overflow-y: auto;
    padding: 12px;
}
.message-container[data-v-gcqsnywcvg9eb0vw64v7oakz] {
    margin: 0px 0px 12px 0px;
    display: flex;
}
.message-container.message-outgoing[data-v-gcqsnywcvg9eb0vw64v7oakz] {
    justify-content: end;
}
.message-bubble[data-v-gcqsnywcvg9eb0vw64v7oakz] {
    max-width: 75%;
    padding: 8px;
    border-radius: 8px;
    background-color: rgb(16, 153, 244);
    color: white;
}
.message-incoming .message-bubble[data-v-gcqsnywcvg9eb0vw64v7oakz] {
    background: rgb(49, 176, 69);
}
.message-numbers[data-v-gcqsnywcvg9eb0vw64v7oakz] {
    cursor: pointer;
}
.message-text[data-v-gcqsnywcvg9eb0vw64v7oakz] {
    max-width: 480px;
}`;
            document.head.appendChild(__sfc_style);
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render], ["__scopeId", "data-v-gcqsnywcvg9eb0vw64v7oakz"]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
