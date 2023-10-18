System.register(['vue', '@Obsidian/Templates/block', '@Obsidian/Controls/connectionStatus.obs', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/textBox', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockForm', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/realTime', '@Obsidian/Utility/block', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, defineComponent, computed, unref, openBlock, createElementBlock, createElementVNode, toDisplayString, createTextVNode, ref, createBlock, withCtx, createVNode, Fragment, renderList, normalizeClass, nextTick, Block, ConnectionStatus, DropDownList, TextBox, RockButton, RockForm, BtnType, getTopic, useConfigurationValues, newGuid;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      defineComponent = module.defineComponent;
      computed = module.computed;
      unref = module.unref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      createTextVNode = module.createTextVNode;
      ref = module.ref;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      nextTick = module.nextTick;
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

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
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
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }

      var _withScopeId$1 = n => (pushScopeId("data-v-04d54b56"), n = n(), popScopeId(), n);
      var _hoisted_1$1 = ["src", "alt"];
      var _hoisted_2$1 = {
        key: 1,
        class: "attachment-document"
      };
      var _hoisted_3$1 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-file"
      }, null, -1));
      var _hoisted_4$1 = ["href"];
      var script$1 = defineComponent({
        name: 'attachment.partial',
        props: {
          attachment: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var isImage = computed(() => {
            return props.attachment.url.includes("GetImage.ashx");
          });
          return (_ctx, _cache) => {
            return unref(isImage) ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: __props.attachment.url,
              alt: __props.attachment.fileName,
              class: "img-responsive attachment-image"
            }, null, 8, _hoisted_1$1)) : (openBlock(), createElementBlock("div", _hoisted_2$1, [_hoisted_3$1, createElementVNode("a", {
              href: __props.attachment.url
            }, toDisplayString(__props.attachment.fileName), 9, _hoisted_4$1)]));
          };
        }
      });

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

      var css_248z$1 = ".attachment-image[data-v-04d54b56]{border-radius:6px;max-height:320px}.attachment-document[data-v-04d54b56]{background-color:#fff;border:1px solid #ccc;border-radius:6px;color:var(--text-color);padding:4px 12px}.attachment-document .fa[data-v-04d54b56]{margin-right:12px}";
      styleInject(css_248z$1);

      script$1.__scopeId = "data-v-04d54b56";
      script$1.__file = "src/Utility/SmsTestTransport/attachment.partial.obs";

      var _withScopeId = n => (pushScopeId("data-v-50664e14"), n = n(), popScopeId(), n);
      var _hoisted_1 = {
        class: "d-flex flex-column outer-container"
      };
      var _hoisted_2 = {
        class: "message-bubble"
      };
      var _hoisted_3 = ["onClick"];
      var _hoisted_4 = _withScopeId(() => createElementVNode("br", null, null, -1));
      var _hoisted_5 = _withScopeId(() => createElementVNode("br", null, null, -1));
      var _hoisted_6 = _withScopeId(() => createElementVNode("br", null, null, -1));
      var _hoisted_7 = {
        class: "message-text"
      };
      var _hoisted_8 = {
        class: "footer"
      };
      var _hoisted_9 = {
        class: "d-flex"
      };
      var _hoisted_10 = {
        class: "mr-2"
      };
      var _hoisted_11 = {
        class: "mr-2 flex-grow-1 to-phone-number"
      };
      var _hoisted_12 = {
        class: "mr-2 flex-grow-1 to-pipeline"
      };
      var _hoisted_13 = {
        class: "flex-grow-1 mr-2"
      };
      var _hoisted_14 = {
        style: {
          "margin-top": "26px"
        }
      };
      var _hoisted_15 = createTextVNode("Submit");
      var script = exports('default', defineComponent({
        name: 'smsTestTransport',
        setup(__props) {
          var _config$phoneNumbers$;
          var config = useConfigurationValues();
          var realTimeTopic = ref(null);
          var messages = ref([]);
          var fromNumber = ref("");
          var toNumber = ref(config.phoneNumbers.length > 0 ? (_config$phoneNumbers$ = config.phoneNumbers[0].value) !== null && _config$phoneNumbers$ !== void 0 ? _config$phoneNumbers$ : "" : "");
          var toPipeline = ref("");
          var body = ref("");
          var formResetKey = ref("");
          var isReconnecting = ref(false);
          var isDisconnected = ref(false);
          var scrollContainer = ref(null);
          var isFormDisabled = computed(() => {
            return isReconnecting.value || isDisconnected.value;
          });
          function startReconnect() {
            return _startReconnect.apply(this, arguments);
          }
          function _startReconnect() {
            _startReconnect = _asyncToGenerator(function* () {
              isReconnecting.value = true;
              realTimeTopic.value = null;
              yield nextTick();
              try {
                yield startRealTime();
                isReconnecting.value = false;
              } catch (error) {
                console.error(error instanceof Error ? error.message : error);
                isDisconnected.value = true;
              }
            });
            return _startReconnect.apply(this, arguments);
          }
          function startRealTime() {
            return _startRealTime.apply(this, arguments);
          }
          function _startRealTime() {
            _startRealTime = _asyncToGenerator(function* () {
              var topic = yield getTopic("Rock.RealTime.Topics.TestCommunicationTransportTopic");
              topic.on("smsMessageSent", onSmsMessageSent);
              topic.onReconnecting(() => isReconnecting.value = true);
              topic.onReconnected(() => isReconnecting.value = false);
              topic.onDisconnected(() => startReconnect());
              realTimeTopic.value = topic;
            });
            return _startRealTime.apply(this, arguments);
          }
          function getMessageClass(message) {
            if (message.incoming) {
              return ["message-container", "message-incoming"];
            } else {
              return ["message-container", "message-outgoing"];
            }
          }
          function onSubmitMessage() {
            return _onSubmitMessage.apply(this, arguments);
          }
          function _onSubmitMessage() {
            _onSubmitMessage = _asyncToGenerator(function* () {
              messages.value.push({
                fromNumber: fromNumber.value,
                toNumber: toNumber.value,
                body: body.value,
                incoming: true
              });
              try {
                var _realTimeTopic$value;
                yield (_realTimeTopic$value = realTimeTopic.value) === null || _realTimeTopic$value === void 0 ? void 0 : _realTimeTopic$value.server.messageReceived({
                  fromNumber: fromNumber.value,
                  toNumber: toNumber.value,
                  pipelineGuid: toPipeline.value || undefined,
                  body: body.value
                });
              } catch (error) {
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
            return _onSubmitMessage.apply(this, arguments);
          }
          function onMessageClick(message) {
            if (message.incoming) {
              var _message$fromNumber, _message$toNumber;
              fromNumber.value = (_message$fromNumber = message.fromNumber) !== null && _message$fromNumber !== void 0 ? _message$fromNumber : "";
              toNumber.value = (_message$toNumber = message.toNumber) !== null && _message$toNumber !== void 0 ? _message$toNumber : "";
            } else {
              var _message$toNumber2, _message$fromNumber2;
              fromNumber.value = (_message$toNumber2 = message.toNumber) !== null && _message$toNumber2 !== void 0 ? _message$toNumber2 : "";
              toNumber.value = (_message$fromNumber2 = message.fromNumber) !== null && _message$fromNumber2 !== void 0 ? _message$fromNumber2 : "";
            }
          }
          function onSmsMessageSent(message) {
            var performScroll = scrollContainer.value && scrollContainer.value.scrollHeight - scrollContainer.value.offsetHeight - scrollContainer.value.scrollTop < 10;
            messages.value.push(_objectSpread2(_objectSpread2({}, message), {}, {
              incoming: false
            }));
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
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Block), {
              title: "SMS Test Transport"
            }, {
              preBody: withCtx(() => [createVNode(unref(ConnectionStatus), {
                isReconnecting: isReconnecting.value,
                isDisconnected: isDisconnected.value
              }, null, 8, ["isReconnecting", "isDisconnected"])]),
              default: withCtx(() => [createElementVNode("div", _hoisted_1, [createElementVNode("div", {
                ref_key: "scrollContainer",
                ref: scrollContainer,
                class: "flex-grow-1 messages-container"
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(messages.value, msg => {
                return openBlock(), createElementBlock("div", {
                  class: normalizeClass(getMessageClass(msg))
                }, [createElementVNode("div", _hoisted_2, [createElementVNode("span", {
                  class: "message-numbers",
                  onClick: $event => onMessageClick(msg)
                }, [createTextVNode(" From: " + toDisplayString(msg.fromNumber), 1), _hoisted_4, createTextVNode(" To: " + toDisplayString(msg.toNumber), 1), _hoisted_5], 8, _hoisted_3), _hoisted_6, createElementVNode("div", _hoisted_7, toDisplayString(msg.body), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(msg.attachments, attachment => {
                  return openBlock(), createBlock(unref(script$1), {
                    attachment: attachment
                  }, null, 8, ["attachment"]);
                }), 256))])], 2);
              }), 256))], 512), createElementVNode("div", _hoisted_8, [createVNode(unref(RockForm), {
                onSubmit: onSubmitMessage,
                formResetKey: formResetKey.value
              }, {
                default: withCtx(() => [createElementVNode("div", _hoisted_9, [createElementVNode("div", _hoisted_10, [createVNode(unref(TextBox), {
                  modelValue: fromNumber.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => fromNumber.value = $event),
                  label: "From (Outside Number)",
                  rules: "required",
                  disabled: unref(isFormDisabled)
                }, null, 8, ["modelValue", "disabled"])]), createElementVNode("div", _hoisted_11, [createVNode(unref(DropDownList), {
                  modelValue: toNumber.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => toNumber.value = $event),
                  label: "To (Rock Number)",
                  items: unref(config).phoneNumbers,
                  rules: "required",
                  showBlankItem: false,
                  disabled: unref(isFormDisabled)
                }, null, 8, ["modelValue", "items", "disabled"])]), createElementVNode("div", _hoisted_12, [createVNode(unref(DropDownList), {
                  modelValue: toPipeline.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => toPipeline.value = $event),
                  label: "Pipeline",
                  items: unref(config).pipelines,
                  disabled: unref(isFormDisabled)
                }, null, 8, ["modelValue", "items", "disabled"])]), createElementVNode("div", _hoisted_13, [createVNode(unref(TextBox), {
                  modelValue: body.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => body.value = $event),
                  label: "Body",
                  rules: "required",
                  disabled: unref(isFormDisabled)
                }, null, 8, ["modelValue", "disabled"])]), createElementVNode("div", _hoisted_14, [createVNode(unref(RockButton), {
                  btnType: unref(BtnType).Primary,
                  type: "submit",
                  disabled: unref(isFormDisabled)
                }, {
                  default: withCtx(() => [_hoisted_15]),
                  _: 1
                }, 8, ["btnType", "disabled"])])])]),
                _: 1
              }, 8, ["formResetKey"])])])]),
              _: 1
            });
          };
        }
      }));

      var css_248z = ".outer-container[data-v-50664e14]{bottom:0;left:0;position:absolute;right:0;top:0}.footer[data-v-50664e14]{border-top:1px solid #eee;padding:12px}.to-phone-number[data-v-50664e14]{max-width:300px;min-width:100px}.to-pipeline[data-v-50664e14]{max-width:200px;min-width:100px}.messages-container[data-v-50664e14]{overflow-y:auto;padding:12px}.message-container[data-v-50664e14]{display:flex;margin:0 0 12px}.message-container.message-outgoing[data-v-50664e14]{justify-content:end}.message-bubble[data-v-50664e14]{background-color:#1099f4;border-radius:8px;color:#fff;max-width:75%;padding:8px}.message-incoming .message-bubble[data-v-50664e14]{background:#31b045}.message-numbers[data-v-50664e14]{cursor:pointer}.message-text[data-v-50664e14]{max-width:480px}";
      styleInject(css_248z);

      script.__scopeId = "data-v-50664e14";
      script.__file = "src/Utility/smsTestTransport.obs";

    })
  };
}));
//# sourceMappingURL=smsTestTransport.obs.js.map
