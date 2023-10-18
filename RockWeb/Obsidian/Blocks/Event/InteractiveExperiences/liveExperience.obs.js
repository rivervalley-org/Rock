System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/rockButton', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Controls/radioButtonList', '@Obsidian/Utility/realTime', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, toDisplayString, withDirectives, vModelText, createBlock, withCtx, createCommentVNode, createVNode, resolveComponent, normalizeStyle, resolveDynamicComponent, NotificationBox, RockButton, BtnType, RadioButtonList, getTopic, useConfigurationValues, onConfigurationValuesChanged, useReloadBlock;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      withDirectives = module.withDirectives;
      vModelText = module.vModelText;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      resolveComponent = module.resolveComponent;
      normalizeStyle = module.normalizeStyle;
      resolveDynamicComponent = module.resolveDynamicComponent;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      getTopic = module.getTopic;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
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

      var actionProps = {
        eventId: {
          type: String,
          required: true
        },
        actionId: {
          type: String,
          required: true
        },
        renderConfiguration: {
          type: Object,
          required: true
        },
        realTimeTopic: {
          type: Object,
          required: true
        }
      };

      var _hoisted_1$2 = {
        class: "question"
      };
      var _hoisted_2$2 = {
        class: "answer"
      };
      var _hoisted_3$2 = {
        class: "form-group"
      };
      var _hoisted_4$2 = ["disabled"];
      var _hoisted_5$1 = {
        class: "submit"
      };
      var _hoisted_6$1 = createTextVNode(" Submit ");
      var script$2 = defineComponent({
        name: 'actionShortAnswer.partial',
        props: actionProps,
        setup(__props) {
          var props = __props;
          var answerText = ref("");
          var isAnswerSubmitted = ref(false);
          var errorMessage = ref("");
          var additionalActionClasses = computed(() => {
            return "experience-action-".concat(props.renderConfiguration.actionId);
          });
          var questionText = computed(() => {
            var _props$renderConfigur, _props$renderConfigur2;
            return (_props$renderConfigur = (_props$renderConfigur2 = props.renderConfiguration.configurationValues) === null || _props$renderConfigur2 === void 0 ? void 0 : _props$renderConfigur2["question"]) !== null && _props$renderConfigur !== void 0 ? _props$renderConfigur : "";
          });
          var isButtonDisabled = computed(() => {
            return !answerText.value;
          });
          var isAnswerDisabled = computed(() => {
            return isAnswerSubmitted.value && !props.renderConfiguration.isMultipleSubmissionAllowed;
          });
          function onSubmitClick() {
            return _onSubmitClick.apply(this, arguments);
          }
          function _onSubmitClick() {
            _onSubmitClick = _asyncToGenerator(function* () {
              var result;
              try {
                result = yield props.realTimeTopic.server.postResponse(props.eventId, props.actionId, answerText.value);
              } catch (error) {
                result = 400;
                console.error(error);
              }
              if (result === 200) {
                answerText.value = "";
                errorMessage.value = "";
                isAnswerSubmitted.value = true;
              } else if (result === 409) {
                answerText.value = "";
                errorMessage.value = "Multiple answers are not allowed and you have previously submitted an answer.";
                isAnswerSubmitted.value = true;
              } else {
                errorMessage.value = "Unable to submit your answer.";
              }
            });
            return _onSubmitClick.apply(this, arguments);
          }
          watch(() => props.actionId, () => {
            isAnswerSubmitted.value = false;
            errorMessage.value = "";
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["experience-action experience-action-type-5ffe1f8f-5f0b-4b34-9c3f-1706d9093210", unref(additionalActionClasses)])
            }, [createElementVNode("div", _hoisted_1$2, toDisplayString(unref(questionText)), 1), createElementVNode("div", _hoisted_2$2, [createElementVNode("div", _hoisted_3$2, [withDirectives(createElementVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => answerText.value = $event),
              class: "form-control",
              type: "text",
              disabled: unref(isAnswerDisabled)
            }, null, 8, _hoisted_4$2), [[vModelText, answerText.value]])])]), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_5$1, [createVNode(unref(RockButton), {
              btnType: unref(BtnType).Primary,
              disabled: unref(isButtonDisabled),
              onClick: onSubmitClick
            }, {
              default: withCtx(() => [_hoisted_6$1]),
              _: 1
            }, 8, ["btnType", "disabled"])])], 2);
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

      var css_248z$2 = ".experience-action-type-5ffe1f8f-5f0b-4b34-9c3f-1706d9093210 .answer:before,.experience-action-type-5ffe1f8f-5f0b-4b34-9c3f-1706d9093210 .question:before{content:\"Q:\";display:block;font-size:3em;font-weight:700;line-height:1.2;margin-bottom:4px}.experience-action-type-5ffe1f8f-5f0b-4b34-9c3f-1706d9093210 .answer:before{content:\"A:\"}.experience-action-type-5ffe1f8f-5f0b-4b34-9c3f-1706d9093210 .answer,.experience-action-type-5ffe1f8f-5f0b-4b34-9c3f-1706d9093210 .submit{margin-top:18px}";
      styleInject(css_248z$2);

      script$2.__file = "src/Event/InteractiveExperiences/LiveExperience/actionShortAnswer.partial.obs";

      var _hoisted_1$1 = {
        class: "question"
      };
      var _hoisted_2$1 = {
        class: "answers"
      };
      var _hoisted_3$1 = {
        class: "submit"
      };
      var _hoisted_4$1 = createTextVNode(" Submit ");
      var script$1 = defineComponent({
        name: 'actionPoll.partial',
        props: actionProps,
        setup(__props) {
          var props = __props;
          var answerText = ref("");
          var isAnswerSubmitted = ref(false);
          var errorMessage = ref("");
          var answerItems = computed(() => {
            var _JSON$parse, _props$renderConfigur, _props$renderConfigur2;
            var answers = (_JSON$parse = JSON.parse((_props$renderConfigur = (_props$renderConfigur2 = props.renderConfiguration.configurationValues) === null || _props$renderConfigur2 === void 0 ? void 0 : _props$renderConfigur2.answers) !== null && _props$renderConfigur !== void 0 ? _props$renderConfigur : "[]")) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
            return answers.map(a => ({
              value: a,
              text: a,
              category: isAnswerSubmitted.value && !props.renderConfiguration.isMultipleSubmissionAllowed ? "disabled" : undefined
            }));
          });
          var additionalActionClasses = computed(() => {
            return "experience-action-".concat(props.renderConfiguration.actionId);
          });
          var questionText = computed(() => {
            var _props$renderConfigur3, _props$renderConfigur4;
            return (_props$renderConfigur3 = (_props$renderConfigur4 = props.renderConfiguration.configurationValues) === null || _props$renderConfigur4 === void 0 ? void 0 : _props$renderConfigur4["question"]) !== null && _props$renderConfigur3 !== void 0 ? _props$renderConfigur3 : "";
          });
          var isButtonDisabled = computed(() => {
            return !answerText.value;
          });
          function onSubmitClick() {
            return _onSubmitClick.apply(this, arguments);
          }
          function _onSubmitClick() {
            _onSubmitClick = _asyncToGenerator(function* () {
              var result;
              try {
                result = yield props.realTimeTopic.server.postResponse(props.eventId, props.actionId, answerText.value);
              } catch (error) {
                result = 400;
                console.error(error);
              }
              if (result === 200) {
                answerText.value = "";
                errorMessage.value = "";
                isAnswerSubmitted.value = true;
              } else if (result === 409) {
                answerText.value = "";
                errorMessage.value = "Multiple answers are not allowed and you have previously submitted an answer.";
                isAnswerSubmitted.value = true;
              } else {
                errorMessage.value = "Unable to submit your answer.";
              }
            });
            return _onSubmitClick.apply(this, arguments);
          }
          watch(() => props.actionId, () => {
            isAnswerSubmitted.value = false;
            errorMessage.value = "";
          });
          return (_ctx, _cache) => {
            var _component_NotificationBox = resolveComponent("NotificationBox");
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["experience-action experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e", unref(additionalActionClasses)])
            }, [createElementVNode("div", _hoisted_1$1, toDisplayString(unref(questionText)), 1), createElementVNode("div", _hoisted_2$1, [createVNode(unref(RadioButtonList), {
              modelValue: answerText.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => answerText.value = $event),
              items: unref(answerItems)
            }, null, 8, ["modelValue", "items"])]), errorMessage.value ? (openBlock(), createBlock(_component_NotificationBox, {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_3$1, [createVNode(unref(RockButton), {
              btnType: unref(BtnType).Primary,
              disabled: unref(isButtonDisabled),
              onClick: onSubmitClick
            }, {
              default: withCtx(() => [_hoisted_4$1]),
              _: 1
            }, 8, ["btnType", "disabled"])])], 2);
          };
        }
      });

      var css_248z$1 = ".experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers:before,.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .question:before{content:\"Q:\";display:block;font-size:3em;font-weight:700;line-height:1.2;margin-bottom:4px}.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers:before{content:\"A:\"}.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers{margin-top:18px}.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers .radio{margin-bottom:12px;padding-left:0}.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers .radio .label-text:after,.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers .radio .label-text:before{display:none}.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers label{display:block}.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers input{display:none}.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers .label-text{border:2px solid var(--experience-action-secondary-btn-bg);border-radius:var(--border-radius-base,4px);display:block;padding:6px 12px;transition:background-color .25s ease-in-out,color .25s ease-in-out}.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .answers input:checked+.label-text{background-color:var(--experience-action-secondary-btn-bg);color:var(--experience-action-secondary-btn-color)}.experience-action-type-9256a5b7-480d-4ffa-86d1-03b8aefc254e .submit{margin-top:18px}";
      styleInject(css_248z$1);

      script$1.__file = "src/Event/InteractiveExperiences/LiveExperience/actionPoll.partial.obs";

      var _hoisted_1 = {
        class: "styled-scroll"
      };
      var _hoisted_2 = {
        key: 0
      };
      var _hoisted_3 = ["innerHTML"];
      var _hoisted_4 = createTextVNode(" This experience has ended. ");
      var _hoisted_5 = {
        key: 1,
        class: "welcome"
      };
      var _hoisted_6 = {
        class: "welcome-header"
      };
      var _hoisted_7 = ["src"];
      var _hoisted_8 = {
        key: 1,
        class: "welcome-title"
      };
      var _hoisted_9 = {
        class: "welcome-message"
      };
      var _hoisted_10 = {
        key: 2,
        class: "no-action"
      };
      var _hoisted_11 = {
        class: "no-action-header"
      };
      var _hoisted_12 = ["src"];
      var _hoisted_13 = {
        key: 1,
        class: "no-action-title"
      };
      var _hoisted_14 = {
        class: "no-action-message"
      };
      var script = exports('default', defineComponent({
        name: 'liveExperience',
        setup(__props) {
          var config = useConfigurationValues();
          var actionTypeLookup = {
            "5ffe1f8f-5f0b-4b34-9c3f-1706d9093210": script$2,
            "9256a5b7-480d-4ffa-86d1-03b8aefc254e": script$1
          };
          var eventId = ref(null);
          var isReady = ref(false);
          var realTimeTopic = ref(null);
          var activeActionId = ref(null);
          var activeActionComponent = ref(null);
          var activeActionRenderConfiguration = ref(null);
          var isExperienceInactive = ref(config.isExperienceInactive);
          var isWelcomeState = ref(!isExperienceInactive.value);
          var experienceStyles = getExperienceStyles();
          var isWelcomeContentVisible = computed(() => {
            return isReady.value && !isExperienceInactive.value && !!realTimeTopic.value && isWelcomeState.value;
          });
          var isNoActionContentVisible = computed(() => {
            return isReady.value && !isExperienceInactive.value && !isWelcomeContentVisible.value && !activeActionComponent.value;
          });
          var welcomeHeaderImageUrl = computed(() => {
            var _config$style$welcome, _config$style, _config$style$welcome2;
            return (_config$style$welcome = (_config$style = config.style) === null || _config$style === void 0 ? void 0 : (_config$style$welcome2 = _config$style.welcome) === null || _config$style$welcome2 === void 0 ? void 0 : _config$style$welcome2.headerImage) !== null && _config$style$welcome !== void 0 ? _config$style$welcome : null;
          });
          var noActionHeaderImageUrl = computed(() => {
            var _config$style$noActio, _config$style2, _config$style2$noActi;
            return (_config$style$noActio = (_config$style2 = config.style) === null || _config$style2 === void 0 ? void 0 : (_config$style2$noActi = _config$style2.noAction) === null || _config$style2$noActi === void 0 ? void 0 : _config$style2$noActi.headerImage) !== null && _config$style$noActio !== void 0 ? _config$style$noActio : null;
          });
          function startRealTime(_x) {
            return _startRealTime.apply(this, arguments);
          }
          function _startRealTime() {
            _startRealTime = _asyncToGenerator(function* (isReconnecting) {
              var _response$occurrenceI;
              var experienceToken = config.experienceToken;
              if (!experienceToken) {
                throw new Error("Missing experience token from server.");
              }
              var topic = yield getTopic("Rock.RealTime.Topics.InteractiveExperienceParticipantTopic");
              topic.onDisconnected(_asyncToGenerator(function* () {
                yield startRealTime(true);
              }));
              var response = yield topic.server.joinExperience(experienceToken);
              eventId.value = (_response$occurrenceI = response.occurrenceIdKey) !== null && _response$occurrenceI !== void 0 ? _response$occurrenceI : null;
              topic.on("showAction", onShowAction);
              topic.on("clearActions", onClearActions);
              realTimeTopic.value = topic;
              isReady.value = true;
              if (response.currentActionIdKey && response.currentActionConfiguration) {
                setupActionComponent(response.currentActionIdKey, response.currentActionConfiguration);
              }
              if (!isReconnecting) {
                setTimeout(onPingTimer, config.keepAliveInterval * 1000);
              }
            });
            return _startRealTime.apply(this, arguments);
          }
          function setupActionComponent(actionId, renderConfiguration) {
            if (!isReady.value || isExperienceInactive.value || !renderConfiguration.actionTypeGuid || !actionTypeLookup[renderConfiguration.actionTypeGuid]) {
              activeActionComponent.value = null;
              activeActionId.value = null;
              activeActionRenderConfiguration.value = null;
              isWelcomeState.value = false;
              return;
            }
            activeActionComponent.value = actionTypeLookup[renderConfiguration.actionTypeGuid];
            activeActionId.value = actionId;
            activeActionRenderConfiguration.value = renderConfiguration;
            isWelcomeState.value = false;
          }
          function getExperienceStyles() {
            var _config$style3, _config$style3$welcom, _config$style4, _config$style4$noActi, _config$style5, _config$style5$action, _config$style6, _config$style6$action, _config$style7, _config$style7$action, _config$style8, _config$style8$action, _config$style9, _config$style9$action, _config$style10, _config$style10$actio, _config$style11, _config$style11$actio;
            var styles = {};
            if ((_config$style3 = config.style) !== null && _config$style3 !== void 0 && (_config$style3$welcom = _config$style3.welcome) !== null && _config$style3$welcom !== void 0 && _config$style3$welcom.headerImage) {
              styles["--welcome-header-image"] = "url('".concat(config.style.welcome.headerImage, "')");
            }
            if ((_config$style4 = config.style) !== null && _config$style4 !== void 0 && (_config$style4$noActi = _config$style4.noAction) !== null && _config$style4$noActi !== void 0 && _config$style4$noActi.headerImage) {
              styles["--no-action-header-image"] = "url('".concat(config.style.noAction.headerImage, "')");
            }
            if ((_config$style5 = config.style) !== null && _config$style5 !== void 0 && (_config$style5$action = _config$style5.action) !== null && _config$style5$action !== void 0 && _config$style5$action.backgroundColor) {
              styles["--experience-action-bg"] = config.style.action.backgroundColor;
            }
            if ((_config$style6 = config.style) !== null && _config$style6 !== void 0 && (_config$style6$action = _config$style6.action) !== null && _config$style6$action !== void 0 && _config$style6$action.backgroundImage) {
              styles["--experience-action-bg-image"] = "url('".concat(config.style.action.backgroundImage, "')");
            }
            if ((_config$style7 = config.style) !== null && _config$style7 !== void 0 && (_config$style7$action = _config$style7.action) !== null && _config$style7$action !== void 0 && _config$style7$action.primaryButtonColor) {
              styles["--experience-action-primary-btn-bg"] = config.style.action.primaryButtonColor;
            } else {
              styles["--experience-action-primary-btn-bg"] = "var(--brand-primary)";
            }
            if ((_config$style8 = config.style) !== null && _config$style8 !== void 0 && (_config$style8$action = _config$style8.action) !== null && _config$style8$action !== void 0 && _config$style8$action.primaryButtonTextColor) {
              styles["--experience-action-primary-btn-color"] = config.style.action.primaryButtonTextColor;
            } else {
              styles["--experience-action-primary-btn-color"] = "#fff";
            }
            if ((_config$style9 = config.style) !== null && _config$style9 !== void 0 && (_config$style9$action = _config$style9.action) !== null && _config$style9$action !== void 0 && _config$style9$action.secondaryButtonColor) {
              styles["--experience-action-secondary-btn-bg"] = config.style.action.secondaryButtonColor;
            } else {
              styles["--experience-action-secondary-btn-bg"] = "var(--brand-info)";
            }
            if ((_config$style10 = config.style) !== null && _config$style10 !== void 0 && (_config$style10$actio = _config$style10.action) !== null && _config$style10$actio !== void 0 && _config$style10$actio.secondaryButtonTextColor) {
              styles["--experience-action-secondary-btn-color"] = config.style.action.secondaryButtonTextColor;
            } else {
              styles["--experience-action-secondary-btn-color"] = "#fff";
            }
            if ((_config$style11 = config.style) !== null && _config$style11 !== void 0 && (_config$style11$actio = _config$style11.action) !== null && _config$style11$actio !== void 0 && _config$style11$actio.textColor) {
              styles["--experience-action-color"] = config.style.action.textColor;
            } else {
              styles["--experience-action-color"] = "var(--text-color)";
            }
            return styles;
          }
          function setupCustomStyles() {
            var _config$style12, _config$style12$actio;
            if ((_config$style12 = config.style) !== null && _config$style12 !== void 0 && (_config$style12$actio = _config$style12.action) !== null && _config$style12$actio !== void 0 && _config$style12$actio.customCss) {
              var styleNode = document.createElement("style");
              styleNode.textContent = config.style.action.customCss;
              document.head.appendChild(styleNode);
            }
          }
          function onShowAction(id, actionId, renderConfiguration) {
            if (eventId.value === id) {
              setupActionComponent(actionId, renderConfiguration);
            }
          }
          function onClearActions(id) {
            if (eventId.value === id) {
              activeActionComponent.value = null;
              activeActionId.value = null;
              activeActionRenderConfiguration.value = null;
            }
          }
          function onPingTimer() {
            return _onPingTimer.apply(this, arguments);
          }
          function _onPingTimer() {
            _onPingTimer = _asyncToGenerator(function* () {
              try {
                if (realTimeTopic.value && eventId.value) {
                  var response = yield realTimeTopic.value.server.pingExperience(eventId.value);
                  if (!response.isActive) {
                    yield realTimeTopic.value.server.leaveExperience(eventId.value);
                    onClearActions(eventId.value);
                    eventId.value = null;
                    isExperienceInactive.value = true;
                    return;
                  }
                }
                setTimeout(onPingTimer, config.keepAliveInterval * 1000);
              } catch (error) {
                console.error(error instanceof Error ? error.message : error);
                setTimeout(onPingTimer, config.keepAliveInterval * 1000);
              }
            });
            return _onPingTimer.apply(this, arguments);
          }
          if (document.querySelector("meta[name='viewport']") === null) {
            var metaNode = document.createElement("meta");
            metaNode.name = "viewport";
            metaNode.content = "width=device-width, initial-scale=1";
            document.head.appendChild(metaNode);
          }
          onConfigurationValuesChanged(useReloadBlock());
          setupCustomStyles();
          startRealTime(false);
          return (_ctx, _cache) => {
            var _unref$style, _unref$style$welcome, _unref$style2, _unref$style2$welcome, _unref$style3, _unref$style3$noActio, _unref$style4, _unref$style4$noActio;
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", {
              class: "live-experience-body",
              style: normalizeStyle(unref(experienceStyles))
            }, [isExperienceInactive.value ? (openBlock(), createElementBlock("div", _hoisted_2, [unref(config).experienceEndedContent ? (openBlock(), createElementBlock("div", {
              key: 0,
              innerHTML: unref(config).experienceEndedContent
            }, null, 8, _hoisted_3)) : (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "warning"
            }, {
              default: withCtx(() => [_hoisted_4]),
              _: 1
            }))])) : createCommentVNode("v-if", true), unref(isWelcomeContentVisible) ? (openBlock(), createElementBlock("div", _hoisted_5, [createElementVNode("div", _hoisted_6, [unref(welcomeHeaderImageUrl) ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: unref(welcomeHeaderImageUrl),
              class: "header-image"
            }, null, 8, _hoisted_7)) : createCommentVNode("v-if", true), (_unref$style = unref(config).style) !== null && _unref$style !== void 0 && (_unref$style$welcome = _unref$style.welcome) !== null && _unref$style$welcome !== void 0 && _unref$style$welcome.title ? (openBlock(), createElementBlock("h1", _hoisted_8, toDisplayString(unref(config).style.welcome.title), 1)) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_9, toDisplayString((_unref$style2 = unref(config).style) === null || _unref$style2 === void 0 ? void 0 : (_unref$style2$welcome = _unref$style2.welcome) === null || _unref$style2$welcome === void 0 ? void 0 : _unref$style2$welcome.message), 1)])) : createCommentVNode("v-if", true), unref(isNoActionContentVisible) ? (openBlock(), createElementBlock("div", _hoisted_10, [createElementVNode("div", _hoisted_11, [unref(noActionHeaderImageUrl) ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: unref(noActionHeaderImageUrl),
              class: "header-image"
            }, null, 8, _hoisted_12)) : createCommentVNode("v-if", true), (_unref$style3 = unref(config).style) !== null && _unref$style3 !== void 0 && (_unref$style3$noActio = _unref$style3.noAction) !== null && _unref$style3$noActio !== void 0 && _unref$style3$noActio.title ? (openBlock(), createElementBlock("h1", _hoisted_13, toDisplayString(unref(config).style.noAction.title), 1)) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_14, toDisplayString((_unref$style4 = unref(config).style) === null || _unref$style4 === void 0 ? void 0 : (_unref$style4$noActio = _unref$style4.noAction) === null || _unref$style4$noActio === void 0 ? void 0 : _unref$style4$noActio.message), 1)])) : createCommentVNode("v-if", true), activeActionComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(activeActionComponent.value), {
              key: 3,
              eventId: eventId.value,
              actionId: activeActionId.value,
              renderConfiguration: activeActionRenderConfiguration.value,
              realTimeTopic: realTimeTopic.value
            }, null, 8, ["eventId", "actionId", "renderConfiguration", "realTimeTopic"])) : createCommentVNode("v-if", true)], 4)]);
          };
        }
      }));

      var css_248z = "body{touch-action:none}.live-experience-body{background-color:var(--experience-action-bg,inherit);background-image:var(--experience-action-bg-image,initial);background-size:cover;bottom:0;color:var(--experience-action-color,inherit);left:0;overflow:auto;padding:18px;position:absolute;right:0;top:0}.live-experience-body .btn-primary,.live-experience-body .btn-primary:focus,.live-experience-body .btn-primary:hover{background-color:var(--experience-action-primary-btn-bg);border-color:var(--experience-action-primary-btn-bg);box-shadow:none;color:var(--experience-action-primary-btn-color)}.live-experience-body .btn-secondary,.live-experience-body .btn-secondary:focus,.live-experience-body .btn-secondary:hover{background-color:var(--experience-action-secondary-btn-bg);border-color:var(--experience-action-secondary-btn-bg);color:var(--experience-action-secondary-btn-color)}.live-experience-body .header-image{display:block;height:auto;max-width:100%}";
      styleInject(css_248z);

      script.__file = "src/Event/InteractiveExperiences/liveExperience.obs";

    })
  };
}));
//# sourceMappingURL=liveExperience.obs.js.map
