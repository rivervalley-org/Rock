System.register(['tslib', 'vue', '@Obsidian/Templates/block', '@Obsidian/Controls/connectionStatus.obs', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/textBox', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockForm', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/realTime', '@Obsidian/Utility/block', '@Obsidian/Utility/guid'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, pushScopeId, popScopeId, createTextVNode, createElementVNode, openBlock, createBlock, withCtx, createVNode, createElementBlock, Fragment, renderList, toDisplayString, createCommentVNode, Block, ConnectionStatus, DropDownList, TextBox, RockButton, RockForm, BtnType, getTopic, useConfigurationValues, useInvokeBlockAction, newGuid;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            pushScopeId = module.pushScopeId;
            popScopeId = module.popScopeId;
            createTextVNode = module.createTextVNode;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createVNode = module.createVNode;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            renderList = module.renderList;
            toDisplayString = module.toDisplayString;
            createCommentVNode = module.createCommentVNode;
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
            useInvokeBlockAction = module.useInvokeBlockAction;
        }, function (module) {
            newGuid = module.newGuid;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'realTimeDebugger',
                setup(__props, { expose }) {
                    var _a;
                    expose();
                    const config = useConfigurationValues();
                    const invokeBlockAction = useInvokeBlockAction();
                    let realTimeTopics = {};
                    const messages = ref([]);
                    const topic = ref(config.topics.length > 0 ? (_a = config.topics[0].value) !== null && _a !== void 0 ? _a : "" : "");
                    const channel = ref("");
                    const formResetKey = ref("");
                    const isReconnecting = ref(false);
                    const isAutoConnecting = ref(false);
                    const isDisconnected = ref(false);
                    const scrollContainer = ref(null);
                    const trackedChannels = [];
                    function startReconnect() {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (isAutoConnecting.value) {
                                return;
                            }
                            isAutoConnecting.value = true;
                            isReconnecting.value = true;
                            try {
                                const reconnectToChannels = [...trackedChannels];
                                trackedChannels.splice(0, trackedChannels.length);
                                realTimeTopics = {};
                                for (const tc of reconnectToChannels) {
                                    yield joinChannel(tc.topic, tc.channel);
                                }
                                isAutoConnecting.value = false;
                                isReconnecting.value = false;
                            }
                            catch (error) {
                                console.error(error instanceof Error ? error.message : error);
                                isDisconnected.value = true;
                            }
                        });
                    }
                    function joinChannel(topicIdentifier, channelName) {
                        return __awaiter(this, void 0, void 0, function* () {
                            let topic = realTimeTopics[topicIdentifier];
                            if (!topic) {
                                topic = yield getTopic(topicIdentifier);
                                topic.onMessage((message, args) => messageReceived(topicIdentifier, message, args));
                                topic.onReconnecting(() => isReconnecting.value = true);
                                topic.onReconnected(() => isReconnecting.value = false);
                                topic.onDisconnected(() => startReconnect());
                                realTimeTopics[topicIdentifier] = topic;
                            }
                            yield invokeBlockAction("JoinChannel", {
                                connectionId: topic.connectionId,
                                topicIdentifier: topicIdentifier,
                                channelName: channelName
                            });
                            messages.value.push({
                                topic: topicIdentifier,
                                message: `Channel "${channelName}" was joined.`
                            });
                            setTimeout(() => {
                                if (scrollContainer.value) {
                                    scrollContainer.value.scroll({
                                        top: scrollContainer.value.scrollHeight,
                                        behavior: "smooth"
                                    });
                                }
                            }, 10);
                        });
                    }
                    function messageReceived(topicIdentifier, message, args) {
                        const performScroll = scrollContainer.value
                            && scrollContainer.value.scrollHeight - scrollContainer.value.offsetHeight - scrollContainer.value.scrollTop < 10;
                        var argsText = syntaxHighlight(JSON.stringify(args, null, 2));
                        messages.value.push({
                            topic: topicIdentifier,
                            message: `Message: ${message}`,
                            arguments: argsText
                        });
                        setTimeout(() => {
                            if (scrollContainer.value && performScroll) {
                                scrollContainer.value.scroll({
                                    top: scrollContainer.value.scrollHeight,
                                    behavior: "smooth"
                                });
                            }
                        }, 10);
                    }
                    function syntaxHighlight(json) {
                        json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
                            var cls = "number";
                            if (/^"/.test(match)) {
                                if (/:$/.test(match)) {
                                    cls = "key";
                                }
                                else {
                                    cls = "string";
                                }
                            }
                            else if (/true|false/.test(match)) {
                                cls = "boolean";
                            }
                            else if (/null/.test(match)) {
                                cls = "null";
                            }
                            return `<span class="${cls}">${match}</span>`;
                        });
                    }
                    function onJoinChannel() {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield joinChannel(topic.value, channel.value);
                            trackedChannels.push({ topic: topic.value, channel: channel.value });
                            channel.value = "";
                            formResetKey.value = newGuid();
                        });
                    }
                    function onClearClick() {
                        messages.value.splice(0, messages.value.length);
                    }
                    const __returned__ = { config, invokeBlockAction, realTimeTopics, messages, topic, channel, formResetKey, isReconnecting, isAutoConnecting, isDisconnected, scrollContainer, trackedChannels, startReconnect, joinChannel, messageReceived, syntaxHighlight, onJoinChannel, onClearClick, Block, ConnectionStatus, DropDownList, TextBox, RockButton, RockForm, BtnType };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _withScopeId = n => (pushScopeId("data-v-m0jq6t8yu5pzpdb0ypyqxdyw"), n = n(), popScopeId(), n);
            const _hoisted_1 = _withScopeId(() => createElementVNode("i", {
                class: "fa fa-eraser",
                title: "Clear message buffer."
            }, null, -1));
            const _hoisted_2 = [
                _hoisted_1
            ];
            const _hoisted_3 = { class: "d-flex flex-column outer-container" };
            const _hoisted_4 = {
                ref: "scrollContainer",
                class: "flex-grow-1 messages-container"
            };
            const _hoisted_5 = { class: "message-container" };
            const _hoisted_6 = { class: "message-bubble" };
            const _hoisted_7 = { class: "message-text" };
            const _hoisted_8 = ["innerHTML"];
            const _hoisted_9 = { class: "footer" };
            const _hoisted_10 = { class: "d-flex" };
            const _hoisted_11 = { class: "mr-2 topic-input" };
            const _hoisted_12 = { class: "flex-grow-1 mr-2" };
            const _hoisted_13 = { style: { "margin-top": "26px" } };
            const _hoisted_14 = createTextVNode("Join");
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createBlock($setup["Block"], { title: "RealTime Debugger" }, {
                    headerActions: withCtx(() => [
                        createElementVNode("span", {
                            class: "action clickable",
                            onClick: $setup.onClearClick
                        }, _hoisted_2)
                    ]),
                    preBody: withCtx(() => [
                        createVNode($setup["ConnectionStatus"], {
                            isReconnecting: $setup.isReconnecting,
                            isDisconnected: $setup.isDisconnected
                        }, null, 8, ["isReconnecting", "isDisconnected"])
                    ]),
                    default: withCtx(() => [
                        createElementVNode("div", _hoisted_3, [
                            createElementVNode("div", _hoisted_4, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.messages, (msg) => {
                                    return (openBlock(), createElementBlock("div", _hoisted_5, [
                                        createElementVNode("div", _hoisted_6, [
                                            createElementVNode("div", _hoisted_7, [
                                                createElementVNode("div", null, "Topic: " + toDisplayString(msg.topic), 1),
                                                createElementVNode("div", null, toDisplayString(msg.message), 1),
                                                (msg.arguments)
                                                    ? (openBlock(), createElementBlock("pre", {
                                                        key: 0,
                                                        innerHTML: msg.arguments
                                                    }, null, 8, _hoisted_8))
                                                    : createCommentVNode("v-if", true)
                                            ])
                                        ])
                                    ]));
                                }), 256))
                            ], 512),
                            createElementVNode("div", _hoisted_9, [
                                createVNode($setup["RockForm"], {
                                    onSubmit: $setup.onJoinChannel,
                                    formResetKey: $setup.formResetKey
                                }, {
                                    default: withCtx(() => [
                                        createElementVNode("div", _hoisted_10, [
                                            createElementVNode("div", _hoisted_11, [
                                                createVNode($setup["DropDownList"], {
                                                    modelValue: $setup.topic,
                                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.topic) = $event)),
                                                    label: "Topic",
                                                    items: $setup.config.topics,
                                                    showBlankItem: false,
                                                    rules: "required"
                                                }, null, 8, ["modelValue", "items"])
                                            ]),
                                            createElementVNode("div", _hoisted_12, [
                                                createVNode($setup["TextBox"], {
                                                    modelValue: $setup.channel,
                                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.channel) = $event)),
                                                    label: "Channel",
                                                    rules: "required"
                                                }, null, 8, ["modelValue"])
                                            ]),
                                            createElementVNode("div", _hoisted_13, [
                                                createVNode($setup["RockButton"], {
                                                    btnType: $setup.BtnType.Primary,
                                                    type: "submit"
                                                }, {
                                                    default: withCtx(() => [
                                                        _hoisted_14
                                                    ]),
                                                    _: 1
                                                }, 8, ["btnType"])
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
            __sfc_style.textContent = `.outer-container[data-v-m0jq6t8yu5pzpdb0ypyqxdyw] {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
.footer[data-v-m0jq6t8yu5pzpdb0ypyqxdyw] {
    border-top: 1px solid #eee;
    padding: 12px;
}
.footer .topic-input[data-v-m0jq6t8yu5pzpdb0ypyqxdyw] {
    flex-grow: 1;
    max-width: 540px;
}
.messages-container[data-v-m0jq6t8yu5pzpdb0ypyqxdyw] {
    overflow-y: auto;
    padding: 12px;
}
.message-container[data-v-m0jq6t8yu5pzpdb0ypyqxdyw] {
    margin: 0px 0px 12px 0px;
    display: flex;
}
.message-bubble[data-v-m0jq6t8yu5pzpdb0ypyqxdyw] {
    padding: 8px;
    border-radius: 8px;
    background-color: rgb(218, 236, 248);
    color: #333;
}
.message-text pre[data-v-m0jq6t8yu5pzpdb0ypyqxdyw] {
    background: inherit;
    border: none;
    color: inherit;
    padding: 0px;
    margin: 0px;
}
.message-text[data-v-m0jq6t8yu5pzpdb0ypyqxdyw] pre .string {
    color: green;
}
.message-text[data-v-m0jq6t8yu5pzpdb0ypyqxdyw] pre .number {
    color: darkorange;
}
.message-text[data-v-m0jq6t8yu5pzpdb0ypyqxdyw] pre .boolean {
    color: blue;
}
.message-text[data-v-m0jq6t8yu5pzpdb0ypyqxdyw] pre .null {
    color: magenta;
}
.message-text[data-v-m0jq6t8yu5pzpdb0ypyqxdyw] pre .key {
    color: red;
}`;
            document.head.appendChild(__sfc_style);
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render], ["__scopeId", "data-v-m0jq6t8yu5pzpdb0ypyqxdyw"]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
