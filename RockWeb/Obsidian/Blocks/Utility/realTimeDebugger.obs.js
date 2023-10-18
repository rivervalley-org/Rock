System.register(['vue', '@Obsidian/Templates/block', '@Obsidian/Controls/connectionStatus.obs', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/textBox', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockForm', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/realTime', '@Obsidian/Utility/block', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, createTextVNode, defineComponent, ref, openBlock, createBlock, unref, withCtx, createElementVNode, createVNode, createElementBlock, Fragment, renderList, toDisplayString, createCommentVNode, Block, ConnectionStatus, DropDownList, TextBox, RockButton, RockForm, BtnType, getTopic, useConfigurationValues, useInvokeBlockAction, newGuid;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
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

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }

      var _withScopeId = n => (pushScopeId("data-v-27d46402"), n = n(), popScopeId(), n);
      var _hoisted_1 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-eraser",
        title: "Clear message buffer."
      }, null, -1));
      var _hoisted_2 = [_hoisted_1];
      var _hoisted_3 = {
        class: "d-flex flex-column outer-container"
      };
      var _hoisted_4 = {
        class: "message-container"
      };
      var _hoisted_5 = {
        class: "message-bubble"
      };
      var _hoisted_6 = {
        class: "message-text"
      };
      var _hoisted_7 = ["innerHTML"];
      var _hoisted_8 = {
        class: "footer"
      };
      var _hoisted_9 = {
        class: "d-flex"
      };
      var _hoisted_10 = {
        class: "mr-2 topic-input"
      };
      var _hoisted_11 = {
        class: "flex-grow-1 mr-2"
      };
      var _hoisted_12 = {
        style: {
          "margin-top": "26px"
        }
      };
      var _hoisted_13 = createTextVNode("Join");
      var script = exports('default', defineComponent({
        name: 'realTimeDebugger',
        setup(__props) {
          var _config$topics$0$valu;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var realTimeTopics = {};
          var messages = ref([]);
          var topic = ref(config.topics.length > 0 ? (_config$topics$0$valu = config.topics[0].value) !== null && _config$topics$0$valu !== void 0 ? _config$topics$0$valu : "" : "");
          var channel = ref("");
          var formResetKey = ref("");
          var isReconnecting = ref(false);
          var isAutoConnecting = ref(false);
          var isDisconnected = ref(false);
          var scrollContainer = ref(null);
          var trackedChannels = [];
          function startReconnect() {
            return _startReconnect.apply(this, arguments);
          }
          function _startReconnect() {
            _startReconnect = _asyncToGenerator(function* () {
              if (isAutoConnecting.value) {
                return;
              }
              isAutoConnecting.value = true;
              isReconnecting.value = true;
              try {
                var reconnectToChannels = [...trackedChannels];
                trackedChannels.splice(0, trackedChannels.length);
                realTimeTopics = {};
                for (var _i = 0, _reconnectToChannels = reconnectToChannels; _i < _reconnectToChannels.length; _i++) {
                  var tc = _reconnectToChannels[_i];
                  yield joinChannel(tc.topic, tc.channel);
                }
                isAutoConnecting.value = false;
                isReconnecting.value = false;
              } catch (error) {
                console.error(error instanceof Error ? error.message : error);
                isDisconnected.value = true;
              }
            });
            return _startReconnect.apply(this, arguments);
          }
          function joinChannel(_x, _x2) {
            return _joinChannel.apply(this, arguments);
          }
          function _joinChannel() {
            _joinChannel = _asyncToGenerator(function* (topicIdentifier, channelName) {
              var topic = realTimeTopics[topicIdentifier];
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
                message: "Channel \"".concat(channelName, "\" was joined.")
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
            return _joinChannel.apply(this, arguments);
          }
          function messageReceived(topicIdentifier, message, args) {
            var performScroll = scrollContainer.value && scrollContainer.value.scrollHeight - scrollContainer.value.offsetHeight - scrollContainer.value.scrollTop < 10;
            var argsText = syntaxHighlight(JSON.stringify(args, null, 2));
            messages.value.push({
              topic: topicIdentifier,
              message: "Message: ".concat(message),
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
                } else {
                  cls = "string";
                }
              } else if (/true|false/.test(match)) {
                cls = "boolean";
              } else if (/null/.test(match)) {
                cls = "null";
              }
              return "<span class=\"".concat(cls, "\">").concat(match, "</span>");
            });
          }
          function onJoinChannel() {
            return _onJoinChannel.apply(this, arguments);
          }
          function _onJoinChannel() {
            _onJoinChannel = _asyncToGenerator(function* () {
              yield joinChannel(topic.value, channel.value);
              trackedChannels.push({
                topic: topic.value,
                channel: channel.value
              });
              channel.value = "";
              formResetKey.value = newGuid();
            });
            return _onJoinChannel.apply(this, arguments);
          }
          function onClearClick() {
            messages.value.splice(0, messages.value.length);
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Block), {
              title: "RealTime Debugger"
            }, {
              headerActions: withCtx(() => [createElementVNode("span", {
                class: "action clickable",
                onClick: onClearClick
              }, _hoisted_2)]),
              preBody: withCtx(() => [createVNode(unref(ConnectionStatus), {
                isReconnecting: isReconnecting.value,
                isDisconnected: isDisconnected.value
              }, null, 8, ["isReconnecting", "isDisconnected"])]),
              default: withCtx(() => [createElementVNode("div", _hoisted_3, [createElementVNode("div", {
                ref_key: "scrollContainer",
                ref: scrollContainer,
                class: "flex-grow-1 messages-container"
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(messages.value, msg => {
                return openBlock(), createElementBlock("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createElementVNode("div", _hoisted_6, [createElementVNode("div", null, "Topic: " + toDisplayString(msg.topic), 1), createElementVNode("div", null, toDisplayString(msg.message), 1), msg.arguments ? (openBlock(), createElementBlock("pre", {
                  key: 0,
                  innerHTML: msg.arguments
                }, null, 8, _hoisted_7)) : createCommentVNode("v-if", true)])])]);
              }), 256))], 512), createElementVNode("div", _hoisted_8, [createVNode(unref(RockForm), {
                onSubmit: onJoinChannel,
                formResetKey: formResetKey.value
              }, {
                default: withCtx(() => [createElementVNode("div", _hoisted_9, [createElementVNode("div", _hoisted_10, [createVNode(unref(DropDownList), {
                  modelValue: topic.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => topic.value = $event),
                  label: "Topic",
                  items: unref(config).topics,
                  showBlankItem: false,
                  rules: "required"
                }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_11, [createVNode(unref(TextBox), {
                  modelValue: channel.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => channel.value = $event),
                  label: "Channel",
                  rules: "required"
                }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_12, [createVNode(unref(RockButton), {
                  btnType: unref(BtnType).Primary,
                  type: "submit"
                }, {
                  default: withCtx(() => [_hoisted_13]),
                  _: 1
                }, 8, ["btnType"])])])]),
                _: 1
              }, 8, ["formResetKey"])])])]),
              _: 1
            });
          };
        }
      }));

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z = ".outer-container[data-v-27d46402]{bottom:0;left:0;position:absolute;right:0;top:0}.footer[data-v-27d46402]{border-top:1px solid #eee;padding:12px}.footer .topic-input[data-v-27d46402]{flex-grow:1;max-width:540px}.messages-container[data-v-27d46402]{overflow-y:auto;padding:12px}.message-container[data-v-27d46402]{display:flex;margin:0 0 12px}.message-bubble[data-v-27d46402]{background-color:#daecf8;border-radius:8px;color:#333;padding:8px}.message-text pre[data-v-27d46402]{background:inherit;border:none;color:inherit;margin:0;padding:0}.message-text[data-v-27d46402] pre .string{color:green}.message-text[data-v-27d46402] pre .number{color:#ff8c00}.message-text[data-v-27d46402] pre .boolean{color:blue}.message-text[data-v-27d46402] pre .null{color:#f0f}.message-text[data-v-27d46402] pre .key{color:red}";
      styleInject(css_248z);

      script.__scopeId = "data-v-27d46402";
      script.__file = "src/Utility/realTimeDebugger.obs";

    })
  };
}));
//# sourceMappingURL=realTimeDebugger.obs.js.map
