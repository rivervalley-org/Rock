System.register(['vue', '@Obsidian/Controls/dropDownContent.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Core/Utilities/rockColor', '@Obsidian/Utility/block', '@Obsidian/Utility/dialogs', '@Obsidian/Utility/rockDateTime', '@Obsidian/Enums/Core/notificationMessageActionType', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/slidingDateRangePicker.obs', '@Obsidian/Utility/slidingDateRange', '@Obsidian/Utility/stringUtils'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createBlock, TransitionGroup, withCtx, renderSlot, pushScopeId, popScopeId, computed, createElementBlock, normalizeStyle, unref, createElementVNode, toDisplayString, normalizeClass, createCommentVNode, createVNode, withModifiers, createTextVNode, ref, reactive, watch, nextTick, Fragment, renderList, DropDownContent, DropDownList, RockButton, RockColor, useInvokeBlockAction, useConfigurationValues, onConfigurationValuesChanged, useReloadBlock, alert, confirm, RockDateTime, NotificationMessageActionType, Panel, SlidingDateRangePicker, calculateSlidingDateRange, pluralize;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      TransitionGroup = module.TransitionGroup;
      withCtx = module.withCtx;
      renderSlot = module.renderSlot;
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      computed = module.computed;
      createElementBlock = module.createElementBlock;
      normalizeStyle = module.normalizeStyle;
      unref = module.unref;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      normalizeClass = module.normalizeClass;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      withModifiers = module.withModifiers;
      createTextVNode = module.createTextVNode;
      ref = module.ref;
      reactive = module.reactive;
      watch = module.watch;
      nextTick = module.nextTick;
      Fragment = module.Fragment;
      renderList = module.renderList;
    }, function (module) {
      DropDownContent = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockColor = module.RockColor;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      alert = module.alert;
      confirm = module.confirm;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      NotificationMessageActionType = module.NotificationMessageActionType;
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      SlidingDateRangePicker = module["default"];
    }, function (module) {
      calculateSlidingDateRange = module.calculateSlidingDateRange;
    }, function (module) {
      pluralize = module.pluralize;
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

      var script$2 = defineComponent({
        name: 'listGroupTransition.partial',
        props: {
          disable: {
            type: Boolean,
            default: false
          }
        },
        emits: ["beginAnimation", "endAnimation"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var animationCount = 0;
          function onBeforeLeave(element) {
            animationCount++;
            if (animationCount === 1) {
              emit("beginAnimation");
            }
            if (!(element instanceof HTMLElement)) {
              return;
            }
            element.style.height = "".concat(element.getBoundingClientRect().height, "px");
            element.getBoundingClientRect();
          }
          function onLeave(element, done) {
            if (props.disable) {
              return done();
            }
            function onTransitionEnd() {
              if (!element) {
                return;
              }
              var transitions = element.getAnimations().filter(a => a instanceof CSSTransition);
              if (transitions.length > 0) {
                return;
              }
              done();
              element.removeEventListener("transitionend", onTransitionEnd);
            }
            element.addEventListener("transitionend", onTransitionEnd);
          }
          function onAfterLeave() {
            animationCount--;
            if (animationCount === 0) {
              emit("endAnimation");
            }
          }
          function onLeaveCancelled() {
            animationCount--;
            if (animationCount === 0) {
              emit("endAnimation");
            }
          }
          function onBeforeEnter(element) {
            animationCount++;
            if (animationCount === 1) {
              emit("beginAnimation");
            }
            if (!(element instanceof HTMLElement)) {
              return;
            }
            element.style.height = "0px";
            element.getBoundingClientRect();
          }
          function onEnter(element, done) {
            if (props.disable) {
              return done();
            }
            if (!(element instanceof HTMLElement)) {
              return;
            }
            requestAnimationFrame(() => {
              element.style.height = "".concat(element.scrollHeight, "px");
              function onTransitionEnd() {
                if (!element) {
                  return;
                }
                var transitions = element.getAnimations().filter(a => a instanceof CSSTransition);
                if (transitions.length > 0) {
                  return;
                }
                done();
                element.removeEventListener("transitionend", onTransitionEnd);
              }
              element.addEventListener("transitionend", onTransitionEnd);
            });
          }
          function onAfterEnter(element) {
            animationCount--;
            if (animationCount === 0) {
              emit("endAnimation");
            }
            if (!(element instanceof HTMLElement)) {
              return;
            }
            element.style.height = "";
          }
          function onEnterCancelled() {
            animationCount--;
            if (animationCount === 0) {
              emit("endAnimation");
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(TransitionGroup, {
              name: "list-group-transition",
              css: !__props.disable,
              onBeforeLeave: onBeforeLeave,
              onLeave: onLeave,
              onAfterLeave: onAfterLeave,
              onLeaveCancelled: onLeaveCancelled,
              onBeforeEnter: onBeforeEnter,
              onEnter: onEnter,
              onAfterEnter: onAfterEnter,
              onEnterCancelled: onEnterCancelled
            }, {
              default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
              _: 3
            }, 8, ["css"]);
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

      var css_248z$2 = ".list-group-transition-enter-active,.list-group-transition-leave-active{pointer-events:none}.list-group-transition-enter-active{transition:height .25s ease,opacity .15s ease .2s,transform .15s ease .2s}.list-group-transition-leave-active{transition:opacity .25s ease,transform .25s ease,height .15s ease .2s}.list-group-transition-enter-from,.list-group-transition-leave-to{opacity:0;transform:translateX(30px)}.list-group-transition-leave-to{height:0!important}";
      styleInject(css_248z$2);

      script$2.__file = "src/Core/NotificationMessageList/listGroupTransition.partial.obs";

      var _withScopeId$1 = n => (pushScopeId("data-v-654578c8"), n = n(), popScopeId(), n);
      var _hoisted_1$1 = {
        class: "message-icon"
      };
      var _hoisted_2$1 = ["src"];
      var _hoisted_3$1 = {
        key: 1,
        class: "image no-image"
      };
      var _hoisted_4$1 = {
        key: 2,
        class: "count"
      };
      var _hoisted_5$1 = {
        key: 3,
        class: "count"
      };
      var _hoisted_6$1 = {
        class: "message-body"
      };
      var _hoisted_7$1 = {
        class: "message-content"
      };
      var _hoisted_8$1 = {
        key: 0,
        class: "mr-1"
      };
      var _hoisted_9$1 = {
        key: 0,
        class: "message-date"
      };
      var _hoisted_10 = ["title"];
      var _hoisted_11 = {
        class: "message-actions"
      };
      var _hoisted_12 = {
        class: "mark-as-read-button"
      };
      var _hoisted_13 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-check-square-o"
      }, null, -1));
      var script$1 = defineComponent({
        name: 'message.partial',
        props: {
          message: {
            type: Object,
            required: true
          },
          disableInteraction: {
            type: Boolean,
            default: false
          }
        },
        emits: ["remove"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var relativeTime = computed(() => {
            var _date$localDateTime$h;
            if (!props.message.dateTime) {
              return "";
            }
            var date = RockDateTime.parseISO(props.message.dateTime);
            return (_date$localDateTime$h = date === null || date === void 0 ? void 0 : date.localDateTime.humanizeElapsed()) !== null && _date$localDateTime$h !== void 0 ? _date$localDateTime$h : "";
          });
          var dateTimeText = computed(() => {
            var _date$localDateTime$t;
            if (!props.message.dateTime) {
              return "";
            }
            var date = RockDateTime.parseISO(props.message.dateTime);
            return (_date$localDateTime$t = date === null || date === void 0 ? void 0 : date.localDateTime.toASPString("yyyy-MM-dd h:mm:ss tt")) !== null && _date$localDateTime$t !== void 0 ? _date$localDateTime$t : "";
          });
          var additionalMessageStyles = computed(() => {
            var styles = {};
            if (props.message.color) {
              var color = new RockColor(props.message.color);
              var pair = RockColor.calculateColorPair(color);
              styles["--message-light-color"] = pair.backgroundColor.toRgba();
              styles["--message-dark-color"] = pair.foregroundColor.toRgba();
            }
            return styles;
          });
          var additionalIndicatorClasses = computed(() => {
            return props.message.isRead ? "read" : "";
          });
          function onMessageClick() {
            return _onMessageClick.apply(this, arguments);
          }
          function _onMessageClick() {
            _onMessageClick = _asyncToGenerator(function* () {
              var _result$data, _result$data$action, _result$data$action2;
              if (props.disableInteraction) {
                return;
              }
              var request = {
                idKey: props.message.idKey,
                isRead: true
              };
              var result = yield invokeBlockAction("GetMessageAction", {
                request
              });
              if (!result.isSuccess || !result.data) {
                return yield alert(result.errorMessage || "Unable to interact with the action.");
              }
              props.message.isRead = request.isRead;
              if ((_result$data = result.data) !== null && _result$data !== void 0 && _result$data.isDeleted) {
                emit("remove");
              }
              if (((_result$data$action = result.data.action) === null || _result$data$action === void 0 ? void 0 : _result$data$action.type) === NotificationMessageActionType.ShowMessage) {
                var _result$data$action$m;
                yield alert((_result$data$action$m = result.data.action.message) !== null && _result$data$action$m !== void 0 ? _result$data$action$m : "");
              } else if (((_result$data$action2 = result.data.action) === null || _result$data$action2 === void 0 ? void 0 : _result$data$action2.type) === NotificationMessageActionType.LinkToPage) {
                var _result$data$action$u;
                window.location.href = (_result$data$action$u = result.data.action.url) !== null && _result$data$action$u !== void 0 ? _result$data$action$u : "";
              } else {
                yield alert("This action is not supported.");
              }
            });
            return _onMessageClick.apply(this, arguments);
          }
          function onMarkAsReadClick() {
            return _onMarkAsReadClick.apply(this, arguments);
          }
          function _onMarkAsReadClick() {
            _onMarkAsReadClick = _asyncToGenerator(function* () {
              var _result$data2;
              if (props.disableInteraction) {
                return;
              }
              var request = {
                idKey: props.message.idKey,
                isRead: !props.message.isRead
              };
              var result = yield invokeBlockAction("MarkMessageAsRead", {
                request
              });
              if (!result.isSuccess || !result.data) {
                return yield alert(result.errorMessage || "Unable to mark message as read.");
              }
              props.message.isRead = request.isRead;
              if ((_result$data2 = result.data) !== null && _result$data2 !== void 0 && _result$data2.isDeleted) {
                emit("remove");
              }
            });
            return _onMarkAsReadClick.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: "message",
              style: normalizeStyle(unref(additionalMessageStyles)),
              onClick: onMessageClick
            }, [createElementVNode("div", _hoisted_1$1, [__props.message.photoUrl ? (openBlock(), createElementBlock("img", {
              key: 0,
              class: "image",
              src: __props.message.photoUrl
            }, null, 8, _hoisted_2$1)) : (openBlock(), createElementBlock("div", _hoisted_3$1)), __props.message.count > 1 ? (openBlock(), createElementBlock("div", _hoisted_4$1, toDisplayString(__props.message.count), 1)) : (openBlock(), createElementBlock("div", _hoisted_5$1, [createElementVNode("i", {
              class: normalizeClass(__props.message.iconCssClass)
            }, null, 2)]))]), createElementVNode("div", _hoisted_6$1, [createElementVNode("div", _hoisted_7$1, [__props.message.title ? (openBlock(), createElementBlock("strong", _hoisted_8$1, toDisplayString(__props.message.title), 1)) : createCommentVNode("v-if", true), createElementVNode("span", null, toDisplayString(__props.message.description), 1)]), unref(relativeTime) ? (openBlock(), createElementBlock("div", _hoisted_9$1, [createElementVNode("span", {
              title: unref(dateTimeText)
            }, toDisplayString(unref(relativeTime)), 9, _hoisted_10)])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_11, [createElementVNode("div", _hoisted_12, [createVNode(unref(RockButton), {
              class: "btn btn-default btn-sm",
              type: "button",
              autoDisable: "",
              onClick: withModifiers(onMarkAsReadClick, ["prevent", "stop"])
            }, {
              default: withCtx(() => [_hoisted_13]),
              _: 1
            }, 8, ["onClick"])]), createElementVNode("div", {
              class: normalizeClass(["unread-indicator", unref(additionalIndicatorClasses)])
            }, null, 2)])], 4);
          };
        }
      });

      var css_248z$1 = ".message[data-v-654578c8]{border-radius:6px;cursor:pointer;display:flex;padding:12px;transition:background-color .15s linear}.message[data-v-654578c8]:hover{background-color:#faf7f5}.message-icon[data-v-654578c8]{margin-right:1rem;position:relative}.message-icon>.image[data-v-654578c8]{background:#eee;border-radius:24px;height:48px;margin-bottom:16px;margin-right:16px;width:48px}.message-icon>.count[data-v-654578c8]{background:var(--message-light-color,#009ce3);border:3px solid #fff;border-radius:16px;bottom:0;color:var(--message-dark-color,#fff);height:32px;position:absolute;right:0;text-align:center;width:32px}.message-body[data-v-654578c8]{flex-grow:1}.message-actions[data-v-654578c8]{display:flex;flex-shrink:0}.mark-as-read-button[data-v-654578c8]{margin-left:16px;opacity:0;transition:opacity .15s linear}.message:hover .mark-as-read-button[data-v-654578c8]{opacity:1}.unread-indicator[data-v-654578c8]{align-self:center;background-color:var(--color-danger,#d4442e);border-radius:7px;height:14px;margin-left:16px;transition:opacity .15s linear;width:14px}.unread-indicator.read[data-v-654578c8]{opacity:0}";
      styleInject(css_248z$1);

      script$1.__scopeId = "data-v-654578c8";
      script$1.__file = "src/Core/NotificationMessageList/message.partial.obs";

      var _withScopeId = n => (pushScopeId("data-v-8f5c3446"), n = n(), popScopeId(), n);
      var _hoisted_1 = {
        class: "d-flex"
      };
      var _hoisted_2 = {
        class: "ml-3"
      };
      var _hoisted_3 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-filter"
      }, null, -1));
      var _hoisted_4 = createTextVNode(" Filter ");
      var _hoisted_5 = [_hoisted_3, _hoisted_4];
      var _hoisted_6 = {
        class: "p-3",
        style: {
          "min-width": "320px",
          "max-width": "480px"
        }
      };
      var _hoisted_7 = _withScopeId(() => createElementVNode("span", {
        class: "text-sm"
      }, [createElementVNode("i", {
        class: "fa fa-check"
      }), createTextVNode(" Mark All Read ")], -1));
      var _hoisted_8 = [_hoisted_7];
      var _hoisted_9 = ["data-key"];
      var script = exports('default', defineComponent({
        name: 'notificationMessageList',
        setup(__props) {
          var _config$messages, _config$componentType;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var disableAnimation = ref(false);
          var messagesContainerElement = ref();
          var allMessages = reactive((_config$messages = config.messages) !== null && _config$messages !== void 0 ? _config$messages : []);
          var showReadFilter = ref("");
          var messageComponentFilter = ref([]);
          var messageComponentFilterItems = ref((_config$componentType = config.componentTypes) !== null && _config$componentType !== void 0 ? _config$componentType : []);
          var dateRangeFilter = ref(null);
          var showReadFilterItems = [{
            value: "",
            text: ""
          }, {
            value: "read",
            text: "Read"
          }, {
            value: "unread",
            text: "Unread"
          }];
          var animationRunning = ref(false);
          var visibleMessages = ref([]);
          var disableUpdate = false;
          var isFilterActive = computed(() => {
            return !!showReadFilter.value || messageComponentFilter.value.length > 0 || !!dateRangeDates.value;
          });
          var dateRangeDates = computed(() => {
            if (!dateRangeFilter.value) {
              return null;
            }
            var dates = calculateSlidingDateRange(dateRangeFilter.value);
            if (dates.start === null && dates.end === null) {
              return null;
            }
            return dates;
          });
          function getFilteredMessages() {
            return allMessages.filter(m => {
              if (showReadFilter.value === "read" && !m.isRead) {
                return false;
              } else if (showReadFilter.value === "unread" && m.isRead) {
                return false;
              }
              if (messageComponentFilter.value.length > 0) {
                if (!m.componentIdKey) {
                  return false;
                }
                if (!messageComponentFilter.value.includes(m.componentIdKey)) {
                  return false;
                }
              }
              if (dateRangeDates.value) {
                var _RockDateTime$parseIS, _m$dateTime;
                var md = (_RockDateTime$parseIS = RockDateTime.parseISO((_m$dateTime = m.dateTime) !== null && _m$dateTime !== void 0 ? _m$dateTime : "")) === null || _RockDateTime$parseIS === void 0 ? void 0 : _RockDateTime$parseIS.localDateTime;
                if (!md) {
                  return false;
                }
                if (dateRangeDates.value.start && md.isEarlierThan(dateRangeDates.value.start)) {
                  return false;
                }
                if (dateRangeDates.value.end && md.isLaterThan(dateRangeDates.value.end)) {
                  return false;
                }
              }
              return true;
            });
          }
          function onRemoveMessage(message) {
            var messageIndex = allMessages.findIndex(m => m.idKey === message.idKey);
            if (messageIndex === -1) {
              return;
            }
            allMessages.splice(messageIndex, 1);
          }
          function onMarkAllReadClick() {
            return _onMarkAllReadClick.apply(this, arguments);
          }
          function _onMarkAllReadClick() {
            _onMarkAllReadClick = _asyncToGenerator(function* () {
              var messages = visibleMessages.value.filter(m => !m.isRead);
              var confirmed = yield confirm("Mark ".concat(messages.length, " ").concat(pluralize("notification", messages.length), " as read?"));
              if (!confirmed) {
                return;
              }
              var request = {
                idKeys: messages.map(m => {
                  var _m$idKey;
                  return (_m$idKey = m.idKey) !== null && _m$idKey !== void 0 ? _m$idKey : "";
                }),
                isRead: true
              };
              var result = yield invokeBlockAction("MarkMessagesAsRead", {
                request
              });
              if (!result.isSuccess || !result.data) {
                return yield alert(result.errorMessage || "Unable to mark messages as read.");
              }
              disableUpdate = true;
              var _loop = function* _loop() {
                var key = messages[i].idKey;
                if (key && result.data.isDeleted && result.data.isDeleted[key]) {
                  var messageIndex = allMessages.findIndex(m => m.idKey === key);
                  if (messageIndex === -1) {
                    return "continue";
                  }
                  allMessages.splice(messageIndex, 1);
                } else {
                  messages[i].isRead = true;
                }
              };
              for (var i = 0; i < messages.length; i++) {
                var _ret = yield* _loop();
                if (_ret === "continue") continue;
              }
              disableUpdate = false;
              visibleMessages.value = getFilteredMessages();
            });
            return _onMarkAllReadClick.apply(this, arguments);
          }
          watch([messageComponentFilter, showReadFilter, dateRangeFilter], () => {
            disableAnimation.value = true;
            visibleMessages.value = getFilteredMessages();
            nextTick(() => disableAnimation.value = false);
          });
          watch(allMessages, () => {
            if (disableUpdate) {
              return;
            }
            visibleMessages.value = getFilteredMessages();
          }, {
            deep: true
          });
          visibleMessages.value = getFilteredMessages();
          onConfigurationValuesChanged(useReloadBlock());
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Panel), {
              title: "Notifications"
            }, {
              subheaderRight: withCtx(() => [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(DropDownContent), null, {
                anchor: withCtx(() => [createElementVNode("span", {
                  class: normalizeClass(["clickable text-sm filter-button", {
                    'active': unref(isFilterActive)
                  }])
                }, _hoisted_5, 2)]),
                default: withCtx(() => [createElementVNode("div", _hoisted_6, [messageComponentFilterItems.value.length > 0 ? (openBlock(), createBlock(unref(DropDownList), {
                  key: 0,
                  label: "Message Types",
                  modelValue: messageComponentFilter.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => messageComponentFilter.value = $event),
                  items: messageComponentFilterItems.value,
                  multiple: "",
                  showBlankItem: false
                }, null, 8, ["modelValue", "items"])) : createCommentVNode("v-if", true), createVNode(unref(DropDownList), {
                  label: "Status",
                  modelValue: showReadFilter.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => showReadFilter.value = $event),
                  items: showReadFilterItems,
                  showBlankItem: false
                }, null, 8, ["modelValue"]), createVNode(unref(SlidingDateRangePicker), {
                  label: "Date Range",
                  modelValue: dateRangeFilter.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => dateRangeFilter.value = $event)
                }, null, 8, ["modelValue"])])]),
                _: 1
              })]), createElementVNode("div", {
                class: "ml-3 clickable",
                onClick: onMarkAllReadClick
              }, _hoisted_8)])]),
              default: withCtx(() => [createElementVNode("div", {
                ref_key: "messagesContainerElement",
                ref: messagesContainerElement
              }, [createVNode(unref(script$2), {
                disable: disableAnimation.value,
                onBeginAnimation: _cache[3] || (_cache[3] = $event => animationRunning.value = true),
                onEndAnimation: _cache[4] || (_cache[4] = $event => animationRunning.value = false)
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleMessages.value, message => {
                  return openBlock(), createElementBlock("div", {
                    key: message.idKey,
                    class: "notification-item",
                    "data-key": message.idKey
                  }, [createVNode(unref(script$1), {
                    message: message,
                    disableInteraction: animationRunning.value,
                    onRemove: $event => onRemoveMessage(message)
                  }, null, 8, ["message", "disableInteraction", "onRemove"])], 8, _hoisted_9);
                }), 128))]),
                _: 1
              }, 8, ["disable"])], 512)]),
              _: 1
            });
          };
        }
      }));

      var css_248z = ".notification-item[data-v-8f5c3446]{margin-bottom:18px}.notification-item[data-v-8f5c3446]:last-child{margin-bottom:0}.filter-button[data-v-8f5c3446]{border-radius:4px;padding:2px 8px}.filter-button.active[data-v-8f5c3446]{background-color:#eee}";
      styleInject(css_248z);

      script.__scopeId = "data-v-8f5c3446";
      script.__file = "src/Core/notificationMessageList.obs";

    })
  };
}));
//# sourceMappingURL=notificationMessageList.obs.js.map
