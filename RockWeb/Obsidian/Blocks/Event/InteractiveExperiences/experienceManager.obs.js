System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/kpi.obs', '@Obsidian/Utility/component', '@Obsidian/Controls/inlineCheckBox', '@Obsidian/Controls/rockLabel', '@Obsidian/Enums/Event/interactiveExperienceApprovalStatus', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/Controls/campusPicker.obs', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/panel', '@Obsidian/Utility/realTime'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createElementBlock, Fragment, renderList, normalizeClass, withModifiers, createElementVNode, toDisplayString, createTextVNode, pushScopeId, popScopeId, ref, computed, watch, createVNode, unref, createBlock, withCtx, createCommentVNode, reactive, provide, createSlots, withDirectives, vShow, NotificationBox, DropDownList, Kpi, useVModelPassthrough, InlineCheckBox, RockLabel, InteractiveExperienceApprovalStatus, useInvokeBlockAction, useConfigurationValues, onConfigurationValuesChanged, useReloadBlock, areEqual, CampusPicker, confirm, alert, CheckBoxList, Panel, getTopic;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      withModifiers = module.withModifiers;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      createTextVNode = module.createTextVNode;
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      createVNode = module.createVNode;
      unref = module.unref;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      reactive = module.reactive;
      provide = module.provide;
      createSlots = module.createSlots;
      withDirectives = module.withDirectives;
      vShow = module.vShow;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Kpi = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      InlineCheckBox = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      InteractiveExperienceApprovalStatus = module.InteractiveExperienceApprovalStatus;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      areEqual = module.areEqual;
    }, function (module) {
      CampusPicker = module["default"];
    }, function (module) {
      confirm = module.confirm;
      alert = module.alert;
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      getTopic = module.getTopic;
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
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
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

      var _hoisted_1$4 = ["onClick"];
      var _hoisted_2$4 = {
        class: "action-item-icon"
      };
      var _hoisted_3$4 = {
        class: "icon"
      };
      var _hoisted_4$4 = {
        class: "action-item-content"
      };
      var _hoisted_5$3 = {
        class: "action-item-selected-icon"
      };
      var script$5 = defineComponent({
        name: 'experienceActionButtons.partial',
        props: {
          modelValue: {
            type: String,
            default: null
          },
          actions: {
            type: Array,
            default: []
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          function getActionItemClass(action) {
            return action.value === internalValue.value ? "selected" : "";
          }
          function getActionSelectedIconClass(action) {
            return action.value === internalValue.value ? "fa fa-check-circle" : "fa fa-check-circle-o";
          }
          function onActionClick(action) {
            if (internalValue.value === action.value) {
              internalValue.value = null;
            } else {
              var _action$value;
              internalValue.value = (_action$value = action.value) !== null && _action$value !== void 0 ? _action$value : null;
            }
          }
          return (_ctx, _cache) => {
            return openBlock(true), createElementBlock(Fragment, null, renderList(__props.actions, (action, index) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["action-item", getActionItemClass(action)]),
                href: "#",
                onClick: withModifiers($event => onActionClick(action), ["prevent"])
              }, [createElementVNode("div", _hoisted_2$4, [createElementVNode("span", null, toDisplayString(index + 1), 1), createElementVNode("span", _hoisted_3$4, [createElementVNode("i", {
                class: normalizeClass(action.category)
              }, null, 2)])]), createElementVNode("div", _hoisted_4$4, toDisplayString(action.text), 1), createElementVNode("div", _hoisted_5$3, [createElementVNode("i", {
                class: normalizeClass(getActionSelectedIconClass(action))
              }, null, 2)])], 10, _hoisted_1$4);
            }), 256);
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

      var css_248z$2 = ".action-item[data-v-6d127988]{align-items:stretch;cursor:pointer;display:flex;margin-bottom:12px}.action-item>[data-v-6d127988]{align-items:center;align-self:stretch;background-color:#fff;border-bottom:1px solid #c4c4c4;border-top:1px solid #c4c4c4;color:var(--text-color);display:flex;padding:12px;transition:background-color .25s ease-in-out,border-color .25s ease-in-out}.action-item>[data-v-6d127988]:first-child{border-left:1px solid #c4c4c4;border-radius:8px 0 0 8px;border-right:1px solid #c4c4c4;justify-content:center;min-width:64px;padding-left:8px;padding-right:8px}.action-item>[data-v-6d127988]:last-child{border-radius:0 8px 8px 0;border-right:1px solid #c4c4c4;padding-right:16px}.action-item>.action-item-icon[data-v-6d127988],.action-item>.action-item-selected-icon[data-v-6d127988]{color:#777}.action-item>.action-item-icon>.icon[data-v-6d127988]{margin-left:8px}.action-item>.action-item-content[data-v-6d127988]{flex:1 0}.action-item:hover>[data-v-6d127988]{background-color:rgba(85,150,230,.1)}.action-item.selected>[data-v-6d127988]{background-color:#d9f2fe;border-color:#009ce3;color:#0079b0}.action-item.selected>.action-item-selected-icon[data-v-6d127988]{color:#009ce3}";
      styleInject(css_248z$2);

      script$5.__scopeId = "data-v-6d127988";
      script$5.__file = "src/Event/InteractiveExperiences/ExperienceManager/experienceActionButtons.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["LiveExperiencePage"] = "LiveExperiencePage";
        return NavigationUrlKey;
      }({});

      var _withScopeId = n => (pushScopeId("data-v-6a25026c"), n = n(), popScopeId(), n);
      var _hoisted_1$3 = {
        class: "live-event"
      };
      var _hoisted_2$3 = {
        class: "row"
      };
      var _hoisted_3$3 = {
        class: "col-xs-12 col-md-4 col-lg-3 col-md-4"
      };
      var _hoisted_4$3 = createTextVNode(" This experience event has ended. ");
      var _hoisted_5$2 = {
        class: "col-xs-12 col-md-6 col-lg-7 mb-3 mb-md-0"
      };
      var _hoisted_6$2 = {
        class: "experience-actions-panel panel panel-section h-100 mb-sm-0"
      };
      var _hoisted_7$2 = {
        class: "panel-heading"
      };
      var _hoisted_8$2 = _withScopeId(() => createElementVNode("h4", {
        class: "panel-title"
      }, "Experience Actions", -1));
      var _hoisted_9$2 = ["onClick"];
      var _hoisted_10$2 = {
        class: "panel-body"
      };
      var _hoisted_11$1 = {
        class: "col-xs-12 col-md-6 col-lg-5"
      };
      var _hoisted_12$1 = {
        class: "preview-panel"
      };
      var _hoisted_13$1 = ["src"];
      var _hoisted_14$1 = createTextVNode(" Live experience preview has not been configured. ");
      var _hoisted_15$1 = createTextVNode("Visualizer");
      var _hoisted_16$1 = {
        class: "d-flex"
      };
      var _hoisted_17$1 = {
        class: "mr-3"
      };
      var _hoisted_18$1 = {
        class: "flex-grow-1 overflow-hidden"
      };
      var script$4 = defineComponent({
        name: 'liveEventTab.partial',
        props: {
          occurrenceIdKey: {
            type: String,
            default: null
          },
          realTimeTopic: {
            type: Object,
            default: null
          },
          configuration: {
            type: Object,
            required: true
          },
          initialActionIdKey: {
            type: String,
            required: true
          },
          initialVisualizerActionIdKey: {
            type: String,
            required: true
          }
        },
        setup(__props) {
          var _props$initialActionI, _props$configuration$, _props$initialVisuali;
          var props = __props;
          var isNotificationsEnabled = ref(false);
          var activeAction = ref((_props$initialActionI = props.initialActionIdKey) !== null && _props$initialActionI !== void 0 ? _props$initialActionI : null);
          var participantCount = ref(props.configuration.participantCount);
          var isExperienceInactive = ref(props.configuration.isExperienceInactive);
          var experienceActions = (_props$configuration$ = props.configuration.actions) !== null && _props$configuration$ !== void 0 ? _props$configuration$ : [];
          var isNotificationAvailable = props.configuration.isNotificationAvailable;
          var activeVisualizer = ref((_props$initialVisuali = props.initialVisualizerActionIdKey) !== null && _props$initialVisuali !== void 0 ? _props$initialVisuali : "");
          var isVisualizerAutomatic = ref(true);
          var notificationStateClass = computed(() => {
            return isNotificationsEnabled.value ? "btn btn-info btn-xs" : "btn btn-default btn-xs";
          });
          var notificationStateIconClass = computed(() => {
            return isNotificationsEnabled.value ? "fa fa-fw fa-bell" : "fa fa-fw fa-bell-slash";
          });
          var previewPageUrl = computed(() => {
            var _props$configuration$2, _props$configuration$3;
            return (_props$configuration$2 = (_props$configuration$3 = props.configuration.navigationUrls) === null || _props$configuration$3 === void 0 ? void 0 : _props$configuration$3[NavigationUrlKey.LiveExperiencePage]) !== null && _props$configuration$2 !== void 0 ? _props$configuration$2 : "";
          });
          var visualizerItems = computed(() => {
            var _props$configuration$4;
            return ((_props$configuration$4 = props.configuration.actions) !== null && _props$configuration$4 !== void 0 ? _props$configuration$4 : []).map((a, idx) => ({
              value: a.value,
              text: "".concat(idx + 1, ". ").concat(a.text)
            }));
          });
          function onNotificationStateClick(ev) {
            isNotificationsEnabled.value = !isNotificationsEnabled.value;
            if (ev.target instanceof HTMLElement) {
              ev.target.blur();
            }
          }
          function onPreviewLoad(ev) {
            if (ev.target instanceof HTMLIFrameElement) {
              var _ev$target$contentDoc;
              var adminFooter = (_ev$target$contentDoc = ev.target.contentDocument) === null || _ev$target$contentDoc === void 0 ? void 0 : _ev$target$contentDoc.querySelector("#cms-admin-footer");
              if (adminFooter) {
                adminFooter.style.display = "none";
              }
              ev.target.classList.remove("invisible");
            }
          }
          function onUpdateActiveAction(_x) {
            return _onUpdateActiveAction.apply(this, arguments);
          }
          function _onUpdateActiveAction() {
            _onUpdateActiveAction = _asyncToGenerator(function* (value) {
              if (activeAction.value === value || !props.realTimeTopic || !props.occurrenceIdKey) {
                return;
              }
              activeAction.value = value;
              if (activeAction.value) {
                yield props.realTimeTopic.server.showAction(props.occurrenceIdKey, activeAction.value, isNotificationsEnabled.value);
                if (isVisualizerAutomatic.value) {
                  yield props.realTimeTopic.server.showVisualizer(props.occurrenceIdKey, activeAction.value);
                }
              } else {
                yield props.realTimeTopic.server.clearActions(props.occurrenceIdKey);
                if (isVisualizerAutomatic.value) {
                  yield props.realTimeTopic.server.clearVisualizer(props.occurrenceIdKey);
                }
              }
            });
            return _onUpdateActiveAction.apply(this, arguments);
          }
          function onShowAction(idKey, actionIdKey) {
            if (idKey === props.occurrenceIdKey) {
              activeAction.value = actionIdKey;
            }
          }
          function onClearActions(idKey) {
            if (idKey === props.occurrenceIdKey) {
              activeAction.value = null;
            }
          }
          function onShowVisualizer(idKey, actionIdKey) {
            if (idKey === props.occurrenceIdKey) {
              activeVisualizer.value = actionIdKey;
            }
          }
          function onClearVisualizer(idKey) {
            if (idKey === props.occurrenceIdKey) {
              activeVisualizer.value = "";
            }
          }
          function onUpdateActiveVisualizer(_x2) {
            return _onUpdateActiveVisualizer.apply(this, arguments);
          }
          function _onUpdateActiveVisualizer() {
            _onUpdateActiveVisualizer = _asyncToGenerator(function* (value) {
              var newValue = typeof value === "string" ? value : "";
              if (activeVisualizer.value === newValue) {
                return;
              }
              activeVisualizer.value = newValue;
              if (props.realTimeTopic && props.occurrenceIdKey) {
                if (activeVisualizer.value) {
                  yield props.realTimeTopic.server.showVisualizer(props.occurrenceIdKey, activeVisualizer.value);
                } else {
                  yield props.realTimeTopic.server.clearVisualizer(props.occurrenceIdKey);
                }
              }
            });
            return _onUpdateActiveVisualizer.apply(this, arguments);
          }
          function onUpdateParticipantCountTimer() {
            return _onUpdateParticipantCountTimer.apply(this, arguments);
          }
          function _onUpdateParticipantCountTimer() {
            _onUpdateParticipantCountTimer = _asyncToGenerator(function* () {
              try {
                if (props.realTimeTopic && props.occurrenceIdKey) {
                  participantCount.value = yield props.realTimeTopic.server.getParticipantCount(props.occurrenceIdKey);
                }
              } finally {
                setTimeout(onUpdateParticipantCountTimer, props.configuration.participantCountUpdateInterval * 1000);
              }
            });
            return _onUpdateParticipantCountTimer.apply(this, arguments);
          }
          watch(() => props.realTimeTopic, () => {
            if (props.realTimeTopic) {
              props.realTimeTopic.on("showAction", onShowAction);
              props.realTimeTopic.on("clearActions", onClearActions);
              props.realTimeTopic.on("showVisualizer", onShowVisualizer);
              props.realTimeTopic.on("clearVisualizer", onClearVisualizer);
            }
          });
          watch(() => props.initialActionIdKey, () => {
            activeAction.value = props.initialActionIdKey;
          });
          watch(() => props.initialVisualizerActionIdKey, () => {
            var _props$initialVisuali2;
            activeVisualizer.value = (_props$initialVisuali2 = props.initialVisualizerActionIdKey) !== null && _props$initialVisuali2 !== void 0 ? _props$initialVisuali2 : "";
          });
          setTimeout(onUpdateParticipantCountTimer, props.configuration.participantCountUpdateInterval * 1000);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$3, [createElementVNode("div", _hoisted_2$3, [createElementVNode("div", _hoisted_3$3, [createVNode(unref(Kpi), {
              class: "ml-0",
              color: "blue",
              colorShade: 600,
              value: participantCount.value,
              label: "Current Participants",
              iconCssClass: "fa fa-user",
              isCard: "",
              tooltip: "The number of individuals that are currently participating in the experience."
            }, null, 8, ["value"])])]), isExperienceInactive.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [_hoisted_4$3]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("div", {
              class: normalizeClass(["experience-body row d-flex flex-wrap", {
                inactive: isExperienceInactive.value
              }])
            }, [createElementVNode("div", _hoisted_5$2, [createElementVNode("div", _hoisted_6$2, [createElementVNode("div", _hoisted_7$2, [_hoisted_8$2, unref(isNotificationAvailable) ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: "#",
              class: normalizeClass(unref(notificationStateClass)),
              onClick: withModifiers(onNotificationStateClick, ["prevent"])
            }, [createElementVNode("i", {
              class: normalizeClass(unref(notificationStateIconClass))
            }, null, 2)], 10, _hoisted_9$2)) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_10$2, [createVNode(unref(script$5), {
              modelValue: activeAction.value,
              actions: unref(experienceActions),
              "onUpdate:modelValue": onUpdateActiveAction
            }, null, 8, ["modelValue", "actions"])])])]), createElementVNode("div", _hoisted_11$1, [createElementVNode("div", _hoisted_12$1, [unref(previewPageUrl) ? (openBlock(), createElementBlock("iframe", {
              key: 0,
              class: "invisible",
              src: unref(previewPageUrl),
              onLoad: onPreviewLoad
            }, null, 40, _hoisted_13$1)) : (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "info"
            }, {
              default: withCtx(() => [_hoisted_14$1]),
              _: 1
            })), createElementVNode("div", null, [createVNode(unref(RockLabel), null, {
              default: withCtx(() => [_hoisted_15$1]),
              _: 1
            }), createElementVNode("div", _hoisted_16$1, [createElementVNode("div", _hoisted_17$1, [createVNode(unref(InlineCheckBox), {
              modelValue: isVisualizerAutomatic.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isVisualizerAutomatic.value = $event),
              label: "Automatic"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_18$1, [createVNode(unref(DropDownList), {
              modelValue: activeVisualizer.value,
              "onUpdate:modelValue": onUpdateActiveVisualizer,
              items: unref(visualizerItems),
              showBlankItem: "",
              disabled: isVisualizerAutomatic.value
            }, null, 8, ["modelValue", "items", "disabled"])])])])])])], 2)]);
          };
        }
      });

      var css_248z$1 = ".experience-body.inactive[data-v-6a25026c]{cursor:not-allowed;opacity:.5;pointer-events:none}.experience-actions-panel[data-v-6a25026c]{background-color:var(--panel-heading-bg)}.preview-panel[data-v-6a25026c]{display:flex;flex-direction:column;min-height:480px}.preview-panel iframe[data-v-6a25026c]{border:1px solid #dfe0e1;border-radius:4px;flex-grow:1;overflow:hidden}";
      styleInject(css_248z$1);

      script$4.__scopeId = "data-v-6a25026c";
      script$4.__file = "src/Event/InteractiveExperiences/ExperienceManager/liveEventTab.partial.obs";

      var _hoisted_1$2 = {
        class: "live-questions"
      };
      var _hoisted_2$2 = {
        class: "row d-flex flex-wrap"
      };
      var _hoisted_3$2 = {
        class: "col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-2"
      };
      var _hoisted_4$2 = {
        class: "col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-2 ml-md-auto"
      };
      var _hoisted_5$1 = {
        class: "table-responsive"
      };
      var _hoisted_6$1 = {
        class: "grid-table table table-condensed table-light"
      };
      var _hoisted_7$1 = createElementVNode("thead", null, [createElementVNode("tr", null, [createElementVNode("th", null, "Name"), createElementVNode("th", null, "Campus"), createElementVNode("th", null, "Response")])], -1);
      var _hoisted_8$1 = {
        key: 0
      };
      var _hoisted_9$1 = createElementVNode("td", {
        colspan: "3"
      }, "No matching responses.", -1);
      var _hoisted_10$1 = [_hoisted_9$1];
      var script$3 = defineComponent({
        name: 'liveQuestionsTab.partial',
        props: {
          occurrenceIdKey: {
            type: String,
            default: null
          },
          realTimeTopic: {
            type: Object,
            default: null
          },
          configuration: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var occurrenceAnswers = reactive([]);
          var selectedAction = ref("");
          var selectedCampus = ref(null);
          var filteredAnswers = computed(() => {
            return occurrenceAnswers.filter(a => a.status === InteractiveExperienceApprovalStatus.Approved).filter(a => selectedAction.value === a.actionIdKey).filter(a => !selectedCampus.value || areEqual(selectedCampus.value.value, a.campusGuid)).reverse();
          });
          var actionItems = computed(() => {
            var _props$configuration$;
            return ((_props$configuration$ = props.configuration.actions) !== null && _props$configuration$ !== void 0 ? _props$configuration$ : []).map((a, idx) => ({
              value: a.value,
              text: "".concat(idx + 1, ". ").concat(a.text)
            }));
          });
          function setupTopicListeners() {
            if (props.realTimeTopic) {
              props.realTimeTopic.on("answerSubmitted", onAnswerSubmitted);
              props.realTimeTopic.on("answerUpdated", onAnswerUpdated);
              props.realTimeTopic.on("answerRemoved", onAnswerRemoved);
            }
          }
          function updateAnswer(answer) {
            var answerIndex = occurrenceAnswers.findIndex(a => a.idKey === answer.idKey);
            var actionAnswer = _objectSpread2({}, answer);
            if (answerIndex !== -1) {
              occurrenceAnswers.splice(answerIndex, 1);
            }
            occurrenceAnswers.push(actionAnswer);
          }
          function removeAnswer(answerIdKey) {
            var answerIndex = occurrenceAnswers.findIndex(a => a.idKey === answerIdKey);
            if (answerIndex !== -1) {
              occurrenceAnswers.splice(answerIndex, 1);
            }
          }
          function getAllAnswers() {
            return _getAllAnswers.apply(this, arguments);
          }
          function _getAllAnswers() {
            _getAllAnswers = _asyncToGenerator(function* () {
              occurrenceAnswers.slice();
              var response = yield invokeBlockAction("GetExperienceAnswers", {
                occurrenceKey: props.configuration.occurrenceIdKey
              });
              if (response.isSuccess && response.data) {
                var _iterator = _createForOfIteratorHelper(response.data),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var answer = _step.value;
                    updateAnswer(answer);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            });
            return _getAllAnswers.apply(this, arguments);
          }
          function onAnswerSubmitted(idKey, answer) {
            if (idKey !== props.occurrenceIdKey) {
              return;
            }
            updateAnswer(answer);
          }
          function onAnswerUpdated(idKey, answer) {
            if (idKey !== props.occurrenceIdKey) {
              return;
            }
            updateAnswer(answer);
          }
          function onAnswerRemoved(idKey, answerIdKey) {
            if (idKey !== props.occurrenceIdKey) {
              return;
            }
            removeAnswer(answerIdKey);
          }
          getAllAnswers();
          setupTopicListeners();
          watch(() => props.realTimeTopic, () => setupTopicListeners());
          if (actionItems.value.length > 0 && actionItems.value[0].value) {
            selectedAction.value = actionItems.value[0].value;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$2, [createElementVNode("div", _hoisted_2$2, [createElementVNode("div", _hoisted_3$2, [createVNode(unref(DropDownList), {
              modelValue: selectedAction.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => selectedAction.value = $event),
              showBlankItem: false,
              items: unref(actionItems)
            }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_4$2, [createVNode(unref(CampusPicker), {
              modelValue: selectedCampus.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => selectedCampus.value = $event),
              forceVisible: "",
              showBlankItem: "",
              displayStyle: "condensed"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_5$1, [createElementVNode("table", _hoisted_6$1, [_hoisted_7$1, createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredAnswers), row => {
              return openBlock(), createElementBlock("tr", null, [createElementVNode("td", null, toDisplayString(row.submitterName), 1), createElementVNode("td", null, toDisplayString(row.campusName), 1), createElementVNode("td", null, toDisplayString(row.response), 1)]);
            }), 256)), !unref(filteredAnswers).length ? (openBlock(), createElementBlock("tr", _hoisted_8$1, _hoisted_10$1)) : createCommentVNode("v-if", true)])])])]);
          };
        }
      });

      script$3.__file = "src/Event/InteractiveExperiences/ExperienceManager/liveQuestionsTab.partial.obs";

      var _hoisted_1$1 = {
        class: "moderation"
      };
      var _hoisted_2$1 = {
        class: "well"
      };
      var _hoisted_3$1 = {
        class: "row"
      };
      var _hoisted_4$1 = {
        class: "col-md-6"
      };
      var _hoisted_5 = {
        class: "col-md-6"
      };
      var _hoisted_6 = {
        class: "row"
      };
      var _hoisted_7 = {
        class: "col-md-6"
      };
      var _hoisted_8 = {
        class: "table-responsive"
      };
      var _hoisted_9 = {
        class: "grid-table table table-condensed table-light table-hover"
      };
      var _hoisted_10 = createElementVNode("thead", null, [createElementVNode("tr", null, [createElementVNode("th"), createElementVNode("th", null, "Response"), createElementVNode("th", null, "Campus"), createElementVNode("th", null, "Status"), createElementVNode("th", {
        class: "grid-columncommand"
      }, "Approve"), createElementVNode("th", {
        class: "grid-columncommand"
      }, "Reject"), createElementVNode("th", {
        class: "grid-columncommand"
      })])], -1);
      var _hoisted_11 = {
        style: {
          "width": "1px"
        }
      };
      var _hoisted_12 = {
        class: "badge badge-default"
      };
      var _hoisted_13 = ["innerHTML"];
      var _hoisted_14 = {
        class: "grid-columncommand",
        align: "center"
      };
      var _hoisted_15 = ["onClick"];
      var _hoisted_16 = createElementVNode("i", {
        class: "fa fa-thumbs-up"
      }, null, -1);
      var _hoisted_17 = [_hoisted_16];
      var _hoisted_18 = {
        class: "grid-columncommand",
        align: "center"
      };
      var _hoisted_19 = ["onClick"];
      var _hoisted_20 = createElementVNode("i", {
        class: "fa fa-thumbs-down"
      }, null, -1);
      var _hoisted_21 = [_hoisted_20];
      var _hoisted_22 = {
        class: "grid-columncommand",
        align: "center"
      };
      var _hoisted_23 = ["onClick"];
      var _hoisted_24 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_25 = [_hoisted_24];
      var _hoisted_26 = {
        key: 0,
        align: "left"
      };
      var _hoisted_27 = createElementVNode("td", {
        colspan: "7"
      }, "No matching responses.", -1);
      var _hoisted_28 = [_hoisted_27];
      var script$2 = defineComponent({
        name: 'moderationTab.partial',
        props: {
          occurrenceIdKey: {
            type: String,
            default: null
          },
          realTimeTopic: {
            type: Object,
            default: null
          },
          configuration: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var occurrenceAnswers = reactive([]);
          var filterAction = ref("");
          var filterCampus = ref([]);
          var filterStatus = ref([]);
          var approvedStatus = InteractiveExperienceApprovalStatus.Approved;
          var rejectedStatus = InteractiveExperienceApprovalStatus.Rejected;
          var filterStatusItems = [{
            value: InteractiveExperienceApprovalStatus.Pending.toString(),
            text: "Pending"
          }, {
            value: InteractiveExperienceApprovalStatus.Approved.toString(),
            text: "Approved"
          }, {
            value: InteractiveExperienceApprovalStatus.Rejected.toString(),
            text: "Rejected"
          }];
          var filteredAnswers = computed(() => {
            return occurrenceAnswers.filter(a => !filterAction.value || filterAction.value === a.actionIdKey).filter(a => !filterCampus.value.length || filterCampus.value.some(c => areEqual(c.value, a.campusGuid))).filter(a => !filterStatus.value.length || filterStatus.value.some(s => a.status.toString() === s));
          });
          var filterActionItems = computed(() => {
            var _props$configuration$;
            return ((_props$configuration$ = props.configuration.actions) !== null && _props$configuration$ !== void 0 ? _props$configuration$ : []).map((a, idx) => ({
              value: a.value,
              text: "".concat(idx + 1, ". ").concat(a.text)
            }));
          });
          function setupTopicListeners() {
            if (props.realTimeTopic) {
              props.realTimeTopic.on("answerSubmitted", onAnswerSubmitted);
              props.realTimeTopic.on("answerUpdated", onAnswerUpdated);
              props.realTimeTopic.on("answerRemoved", onAnswerRemoved);
            }
          }
          function getActionIndex(actionId) {
            var _props$configuration$2;
            if (!actionId) {
              return 0;
            }
            var index = ((_props$configuration$2 = props.configuration.actions) !== null && _props$configuration$2 !== void 0 ? _props$configuration$2 : []).findIndex(a => a.value === actionId);
            return index < 0 ? 0 : index + 1;
          }
          function getStatusLabelHtml(status) {
            if (status === InteractiveExperienceApprovalStatus.Approved) {
              return "<span class=\"label label-success\">Approved</span>";
            } else if (status === InteractiveExperienceApprovalStatus.Rejected) {
              return "<span class=\"label label-danger\">Rejected</span>";
            } else {
              return "<span class=\"label label-default\">Pending</span>";
            }
          }
          function updateAnswer(answer) {
            var answerIndex = occurrenceAnswers.findIndex(a => a.idKey === answer.idKey);
            var actionAnswer = _objectSpread2({
              actionIndex: getActionIndex(answer.actionIdKey)
            }, answer);
            if (answerIndex !== -1) {
              occurrenceAnswers.splice(answerIndex, 1, actionAnswer);
            } else {
              occurrenceAnswers.push(actionAnswer);
            }
          }
          function removeAnswer(answerIdKey) {
            var answerIndex = occurrenceAnswers.findIndex(a => a.idKey === answerIdKey);
            if (answerIndex !== -1) {
              occurrenceAnswers.splice(answerIndex, 1);
            }
          }
          function getAllAnswers() {
            return _getAllAnswers.apply(this, arguments);
          }
          function _getAllAnswers() {
            _getAllAnswers = _asyncToGenerator(function* () {
              occurrenceAnswers.slice();
              var response = yield invokeBlockAction("GetExperienceAnswers", {
                occurrenceKey: props.configuration.occurrenceIdKey
              });
              if (response.isSuccess && response.data) {
                var _iterator = _createForOfIteratorHelper(response.data),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var answer = _step.value;
                    updateAnswer(answer);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            });
            return _getAllAnswers.apply(this, arguments);
          }
          function updateAnswerStatus(_x, _x2) {
            return _updateAnswerStatus.apply(this, arguments);
          }
          function _updateAnswerStatus() {
            _updateAnswerStatus = _asyncToGenerator(function* (answerIdKey, status) {
              var response = yield invokeBlockAction("UpdateExperienceAnswerStatus", {
                key: answerIdKey,
                status: status
              });
              if (response.isError) {
                yield alert(response.errorMessage || "Response could not be updated.");
              }
            });
            return _updateAnswerStatus.apply(this, arguments);
          }
          function onAnswerSubmitted(idKey, answer) {
            if (idKey !== props.occurrenceIdKey) {
              return;
            }
            updateAnswer(answer);
          }
          function onAnswerUpdated(idKey, answer) {
            if (idKey !== props.occurrenceIdKey) {
              return;
            }
            updateAnswer(answer);
          }
          function onAnswerRemoved(idKey, answerIdKey) {
            if (idKey !== props.occurrenceIdKey) {
              return;
            }
            removeAnswer(answerIdKey);
          }
          function onApproveAnswer(answer) {
            if (answer.idKey) {
              updateAnswerStatus(answer.idKey, InteractiveExperienceApprovalStatus.Approved);
            }
          }
          function onRejectAnswer(answer) {
            if (answer.idKey) {
              updateAnswerStatus(answer.idKey, InteractiveExperienceApprovalStatus.Rejected);
            }
          }
          function onDeleteAnswer(_x3) {
            return _onDeleteAnswer.apply(this, arguments);
          }
          function _onDeleteAnswer() {
            _onDeleteAnswer = _asyncToGenerator(function* (answer) {
              if (!answer.idKey) {
                return;
              }
              var confirmed = yield confirm("Do you wish to delete< this response?\n\n".concat(answer.response));
              if (!confirmed) {
                return;
              }
              var response = yield invokeBlockAction("DeleteExperienceAnswer", {
                key: answer.idKey
              });
              if (response.isError) {
                yield alert(response.errorMessage || "Response could not be deleted.");
              }
            });
            return _onDeleteAnswer.apply(this, arguments);
          }
          getAllAnswers();
          setupTopicListeners();
          watch(() => props.realTimeTopic, () => setupTopicListeners());
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createElementVNode("div", _hoisted_3$1, [createElementVNode("div", _hoisted_4$1, [createVNode(unref(DropDownList), {
              modelValue: filterAction.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => filterAction.value = $event),
              label: "Action",
              items: unref(filterActionItems)
            }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_5, [createVNode(unref(CampusPicker), {
              modelValue: filterCampus.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => filterCampus.value = $event),
              label: "Campus",
              displayStyle: "condensed",
              forceVisible: "",
              multiple: ""
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_6, [createElementVNode("div", _hoisted_7, [createVNode(unref(CheckBoxList), {
              modelValue: filterStatus.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => filterStatus.value = $event),
              label: "Statuses",
              horizontal: "",
              items: filterStatusItems
            }, null, 8, ["modelValue"])])])]), createElementVNode("div", _hoisted_8, [createElementVNode("table", _hoisted_9, [_hoisted_10, createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredAnswers), row => {
              return openBlock(), createElementBlock("tr", null, [createElementVNode("td", _hoisted_11, [createElementVNode("span", _hoisted_12, toDisplayString(row.actionIndex), 1)]), createElementVNode("td", null, toDisplayString(row.response), 1), createElementVNode("td", null, toDisplayString(row.campusName), 1), createElementVNode("td", {
                innerHTML: getStatusLabelHtml(row.status)
              }, null, 8, _hoisted_13), createElementVNode("td", _hoisted_14, [row.status !== unref(approvedStatus) ? (openBlock(), createElementBlock("a", {
                key: 0,
                class: "btn btn-success btn-sm btn-square grid-approve-button",
                onClick: withModifiers($event => onApproveAnswer(row), ["prevent"])
              }, _hoisted_17, 8, _hoisted_15)) : createCommentVNode("v-if", true)]), createElementVNode("td", _hoisted_18, [row.status !== unref(rejectedStatus) ? (openBlock(), createElementBlock("a", {
                key: 0,
                class: "btn btn-danger btn-sm btn-square grid-reject-button",
                onClick: withModifiers($event => onRejectAnswer(row), ["prevent"])
              }, _hoisted_21, 8, _hoisted_19)) : createCommentVNode("v-if", true)]), createElementVNode("td", _hoisted_22, [createElementVNode("a", {
                class: "btn btn-danger btn-sm btn-square grid-delete-button",
                onClick: withModifiers($event => onDeleteAnswer(row), ["prevent"])
              }, _hoisted_25, 8, _hoisted_23)])]);
            }), 256)), !unref(filteredAnswers).length ? (openBlock(), createElementBlock("tr", _hoisted_26, _hoisted_28)) : createCommentVNode("v-if", true)])])])]);
          };
        }
      });

      script$2.__file = "src/Event/InteractiveExperiences/ExperienceManager/moderationTab.partial.obs";

      var _hoisted_1 = {
        class: "panel-navigation-bar"
      };
      var _hoisted_2 = {
        class: "panel-toolbar panel-toolbar-shadow"
      };
      var _hoisted_3 = {
        class: "nav nav-pills nav-sm"
      };
      var _hoisted_4 = ["onClick"];
      var script$1 = defineComponent({
        name: 'panelNavigationBar.partial',
        props: {
          modelValue: {
            type: String,
            required: false
          },
          items: {
            type: Array,
            default: []
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          function getItemClass(item) {
            if (internalValue.value === item.value) {
              return "active";
            }
            return "";
          }
          function onItemClicked(item) {
            internalValue.value = item.value;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("ul", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, item => {
              return openBlock(), createElementBlock("li", {
                role: "presentation",
                class: normalizeClass(getItemClass(item))
              }, [createElementVNode("a", {
                href: "#",
                onClick: withModifiers($event => onItemClicked(item), ["prevent"])
              }, toDisplayString(item.text), 9, _hoisted_4)], 2);
            }), 256))])])]);
          };
        }
      });

      var css_248z = ".panel-navigation-bar[data-v-57bb485e]{background-color:var(--panel-bg);overflow-x:clip}";
      styleInject(css_248z);

      script$1.__scopeId = "data-v-57bb485e";
      script$1.__file = "src/Event/InteractiveExperiences/ExperienceManager/panelNavigationBar.partial.obs";

      var script = exports('default', defineComponent({
        name: 'experienceManager',
        setup(__props) {
          var _config$tabsToShow;
          var config = useConfigurationValues();
          var availableTabs = (_config$tabsToShow = config.tabsToShow) !== null && _config$tabsToShow !== void 0 ? _config$tabsToShow : ["Live Event", "Moderation", "Live Questions"];
          var isTabBarVisible = availableTabs.length > 1;
          var navigationTabs = (availableTabs !== null && availableTabs !== void 0 ? availableTabs : []).map(s => ({
            value: s,
            text: s
          }));
          var selectedTab = ref(availableTabs[0]);
          var realTimeTopic = ref(null);
          var occurrenceIdKey = ref(null);
          var initialActionIdKey = ref(null);
          var initialVisualizerActionIdKey = ref(null);
          var panelTitle = computed(() => {
            return "".concat(config.experienceName);
          });
          var isLiveEventTab = computed(() => {
            return selectedTab.value === "Live Event";
          });
          var isModerationTab = computed(() => {
            return selectedTab.value === "Moderation";
          });
          var isLiveQuestionsTab = computed(() => {
            return selectedTab.value === "Live Questions";
          });
          function startRealTime() {
            return _startRealTime.apply(this, arguments);
          }
          function _startRealTime() {
            _startRealTime = _asyncToGenerator(function* () {
              var _response$occurrenceI, _response$currentActi, _response$currentVisu;
              if (!config.experienceToken) {
                throw new Error("Missing experience token from server.");
              }
              var topic = yield getTopic("Rock.RealTime.Topics.InteractiveExperienceParticipantTopic");
              topic.onDisconnected(startRealTime);
              var response = yield topic.server.joinExperience(config.experienceToken);
              occurrenceIdKey.value = (_response$occurrenceI = response.occurrenceIdKey) !== null && _response$occurrenceI !== void 0 ? _response$occurrenceI : null;
              initialActionIdKey.value = (_response$currentActi = response.currentActionIdKey) !== null && _response$currentActi !== void 0 ? _response$currentActi : null;
              initialVisualizerActionIdKey.value = (_response$currentVisu = response.currentVisualizerActionIdKey) !== null && _response$currentVisu !== void 0 ? _response$currentVisu : null;
              realTimeTopic.value = topic;
            });
            return _startRealTime.apply(this, arguments);
          }
          onConfigurationValuesChanged(useReloadBlock());
          startRealTime();
          provide("ExperienceManagerRealTimeTopic", realTimeTopic);
          return (_ctx, _cache) => {
            return unref(config).errorMessage ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(config).errorMessage), 1)]),
              _: 1
            })) : (openBlock(), createBlock(unref(Panel), {
              key: 1,
              type: "block",
              title: unref(panelTitle),
              hasFullscreen: ""
            }, createSlots({
              default: withCtx(() => [withDirectives(createVNode(unref(script$4), {
                configuration: unref(config),
                occurrenceIdKey: occurrenceIdKey.value,
                realTimeTopic: realTimeTopic.value,
                initialActionIdKey: initialActionIdKey.value,
                initialVisualizerActionIdKey: initialVisualizerActionIdKey.value
              }, null, 8, ["configuration", "occurrenceIdKey", "realTimeTopic", "initialActionIdKey", "initialVisualizerActionIdKey"]), [[vShow, unref(isLiveEventTab)]]), withDirectives(createVNode(unref(script$2), {
                configuration: unref(config),
                occurrenceIdKey: occurrenceIdKey.value,
                realTimeTopic: realTimeTopic.value
              }, null, 8, ["configuration", "occurrenceIdKey", "realTimeTopic"]), [[vShow, unref(isModerationTab)]]), withDirectives(createVNode(unref(script$3), {
                configuration: unref(config),
                occurrenceIdKey: occurrenceIdKey.value,
                realTimeTopic: realTimeTopic.value
              }, null, 8, ["configuration", "occurrenceIdKey", "realTimeTopic"]), [[vShow, unref(isLiveQuestionsTab)]]), withDirectives(createElementVNode("div", null, null, 512), [[vShow, unref(isLiveQuestionsTab)]])]),
              _: 2
            }, [isTabBarVisible ? {
              name: "preBody",
              fn: withCtx(() => [createVNode(unref(script$1), {
                modelValue: selectedTab.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => selectedTab.value = $event),
                items: unref(navigationTabs)
              }, null, 8, ["modelValue", "items"])])
            } : undefined]), 1032, ["title"]));
          };
        }
      }));

      script.__file = "src/Event/InteractiveExperiences/experienceManager.obs";

    })
  };
}));
//# sourceMappingURL=experienceManager.obs.js.map
