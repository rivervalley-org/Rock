System.register(['vue', '@Obsidian/Core/Core/personPreferences', '@Obsidian/Utility/http', '@Obsidian/PageState', '@Obsidian/Utility/rockDateTime', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', '@Obsidian/FieldTypes/index', '@Obsidian/Utility/suspense', '@Obsidian/Utility/dialogs'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, onErrorCaptured, onMounted, provide, nextTick, h, createApp, markRaw, PersonPreferenceCollection, provideHttp, doApiCall, useStore, RockDateTime, createInvokeBlockAction, provideReloadBlock, providePersonPreferences, provideConfigurationValuesChanged, provideStaticContent, provideBlockGuid, toGuidOrNull, emptyGuid, areEqual, BasicSuspenseProvider, provideSuspense, alert;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      onErrorCaptured = module.onErrorCaptured;
      onMounted = module.onMounted;
      provide = module.provide;
      nextTick = module.nextTick;
      h = module.h;
      createApp = module.createApp;
      markRaw = module.markRaw;
    }, function (module) {
      PersonPreferenceCollection = module.PersonPreferenceCollection;
    }, function (module) {
      provideHttp = module.provideHttp;
      doApiCall = module.doApiCall;
    }, function (module) {
      useStore = module.useStore;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      createInvokeBlockAction = module.createInvokeBlockAction;
      provideReloadBlock = module.provideReloadBlock;
      providePersonPreferences = module.providePersonPreferences;
      provideConfigurationValuesChanged = module.provideConfigurationValuesChanged;
      provideStaticContent = module.provideStaticContent;
      provideBlockGuid = module.provideBlockGuid;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
      areEqual = module.areEqual;
    }, function () {}, function () {}, function (module) {
      BasicSuspenseProvider = module.BasicSuspenseProvider;
      provideSuspense = module.provideSuspense;
    }, function (module) {
      alert = module.alert;
    }],
    execute: (function () {

      exports({
        initializeBlock: initializeBlock,
        initializePage: initializePage,
        initializePageTimings: initializePageTimings,
        showCustomBlockAction: showCustomBlockAction
      });

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

      var store$1 = useStore();
      function addBlockChangedEventListener(blockId, callback) {
        var _document$querySelect;
        function onTriggerClick() {
          var dataElement = document.querySelector("#rock-config-trigger-data");
          if (dataElement.value.toLowerCase().startsWith("block_updated:")) {
            var dataSegments = dataElement.value.toLowerCase().split(":");
            if (dataSegments.length >= 3 && areEqual(dataSegments[2], blockId)) {
              callback();
            }
          }
        }
        (_document$querySelect = document.querySelector("#rock-config-trigger")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", onTriggerClick, true);
        if (Sys) {
          Sys.Application.add_load(() => {
            var _document$querySelect2;
            (_document$querySelect2 = document.querySelector("#rock-config-trigger")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.addEventListener("click", onTriggerClick, true);
          });
        }
      }
      function updateConfigurationBarActions(blockContainerElement, actions) {
        var _blockContent$childre;
        var blockContent = blockContainerElement.closest(".block-content");
        var blockConfiguration = Array.from((_blockContent$childre = blockContent === null || blockContent === void 0 ? void 0 : blockContent.children) !== null && _blockContent$childre !== void 0 ? _blockContent$childre : []).find(el => el.classList.contains("block-configuration"));
        var configurationBar = blockConfiguration === null || blockConfiguration === void 0 ? void 0 : blockConfiguration.querySelector(".block-configuration-bar");
        if (!configurationBar) {
          return;
        }
        var nameElement = Array.from(configurationBar.children).find(el => el.tagName == "SPAN");
        if (!nameElement) {
          return;
        }
        Array.from(configurationBar.querySelectorAll("a")).filter(el => el.dataset["customAction"] === "true").forEach(el => el.remove());
        actions.forEach(action => {
          var _action$title, _action$iconCssClass;
          var hyperlinkElement = document.createElement("a");
          hyperlinkElement.href = "#";
          hyperlinkElement.title = (_action$title = action.title) !== null && _action$title !== void 0 ? _action$title : "";
          hyperlinkElement.dataset["customAction"] = "true";
          hyperlinkElement.addEventListener("click", e => {
            e.preventDefault();
            if (action.handler) {
              action.handler(e);
            }
          });
          var iconElement = document.createElement("i");
          iconElement.className = (_action$iconCssClass = action.iconCssClass) !== null && _action$iconCssClass !== void 0 ? _action$iconCssClass : "fa fa-question";
          hyperlinkElement.appendChild(iconElement);
          nameElement.after(hyperlinkElement);
        });
      }
      var RockBlock = defineComponent({
        name: "RockBlock",
        props: {
          config: {
            type: Object,
            required: true
          },
          blockComponent: {
            type: Object,
            default: null
          },
          startTimeMs: {
            type: Number,
            required: true
          },
          staticContent: {
            type: String,
            required: false
          }
        },
        setup(props) {
          var _toGuidOrNull, _props$config$blockGu;
          var error = ref("");
          var finishTimeMs = ref(null);
          var blockContainerElement = ref(null);
          var configurationValues = ref(props.config.configurationValues);
          var configCustomActions = ref(props.config.customConfigurationActions);
          var customActionComponent = ref(null);
          var currentBlockComponent = ref(props.blockComponent);
          var configBarActions = computed(() => {
            var customActions = [];
            if (configCustomActions.value) {
              var _iterator = _createForOfIteratorHelper(configCustomActions.value),
                _step;
              try {
                var _loop = function _loop() {
                  var cca = _step.value;
                  if (cca.iconCssClass && cca.tooltip && cca.componentFileUrl) {
                    customActions.push({
                      type: "default",
                      title: cca.tooltip,
                      iconCssClass: cca.iconCssClass,
                      handler: function () {
                        var _handler = _asyncToGenerator(function* () {
                          try {
                            var _cca$componentFileUrl, _ref, _module$default;
                            var module$1 = yield module.import((_cca$componentFileUrl = cca.componentFileUrl) !== null && _cca$componentFileUrl !== void 0 ? _cca$componentFileUrl : "");
                            customActionComponent.value = (_ref = (_module$default = module$1 === null || module$1 === void 0 ? void 0 : module$1.default) !== null && _module$default !== void 0 ? _module$default : module$1) !== null && _ref !== void 0 ? _ref : null;
                          } catch (e) {
                            console.error(e);
                          }
                        });
                        function handler() {
                          return _handler.apply(this, arguments);
                        }
                        return handler;
                      }()
                    });
                  }
                };
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            return customActions;
          });
          var httpCall = function () {
            var _ref2 = _asyncToGenerator(function* (method, url) {
              var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
              var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
              return yield doApiCall(method, url, params, data);
            });
            return function httpCall(_x, _x2) {
              return _ref2.apply(this, arguments);
            };
          }();
          var get = function () {
            var _ref3 = _asyncToGenerator(function* (url) {
              var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
              return yield httpCall("GET", url, params);
            });
            return function get(_x3) {
              return _ref3.apply(this, arguments);
            };
          }();
          var post = function () {
            var _ref4 = _asyncToGenerator(function* (url) {
              var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
              var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
              return yield httpCall("POST", url, params, data);
            });
            return function post(_x4) {
              return _ref4.apply(this, arguments);
            };
          }();
          var invokeBlockAction = createInvokeBlockAction(post, store$1.state.pageGuid, (_toGuidOrNull = toGuidOrNull(props.config.blockGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid, store$1.state.pageParameters);
          var reloadBlock = function () {
            var _ref5 = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("RefreshObsidianBlockInitialization");
              if (result.isSuccess && result.data) {
                currentBlockComponent.value = null;
                nextTick(() => {
                  var _result$data, _result$data2;
                  configurationValuesChanged.reset();
                  configurationValues.value = (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.configurationValues;
                  configCustomActions.value = (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.customConfigurationActions;
                  currentBlockComponent.value = props.blockComponent;
                });
              } else {
                console.error("Failed to reload block:", result.errorMessage || "Unknown error");
              }
            });
            return function reloadBlock() {
              return _ref5.apply(this, arguments);
            };
          }();
          function getPreferenceProvider() {
            var _props$config, _props$config$prefere, _props$config$prefere7, _props$config$prefere8, _props$config$prefere9, _props$config$prefere10;
            var timeStampFromSessionData = 0;
            var valuesFromSessionData = [];
            var values = [];
            var sessionStorageKey = "".concat(props.config.rootElementId, "-preferences");
            try {
              var _sessionStorage$getIt, _JSON$parse$timeStamp, _JSON$parse, _JSON$parse$values, _JSON$parse2;
              var sessionStorageDataRaw = (_sessionStorage$getIt = sessionStorage.getItem(sessionStorageKey)) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : "{}";
              timeStampFromSessionData = (_JSON$parse$timeStamp = (_JSON$parse = JSON.parse(sessionStorageDataRaw)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.timeStamp) !== null && _JSON$parse$timeStamp !== void 0 ? _JSON$parse$timeStamp : 0;
              valuesFromSessionData = (_JSON$parse$values = (_JSON$parse2 = JSON.parse(sessionStorageDataRaw)) === null || _JSON$parse2 === void 0 ? void 0 : _JSON$parse2.values) !== null && _JSON$parse$values !== void 0 ? _JSON$parse$values : [];
            } catch (_unused) {}
            if ((_props$config = props.config) !== null && _props$config !== void 0 && (_props$config$prefere = _props$config.preferences) !== null && _props$config$prefere !== void 0 && _props$config$prefere.timeStamp && timeStampFromSessionData <= props.config.preferences.timeStamp) {
              var _props$config$prefere2, _props$config$prefere3, _props$config$prefere4, _props$config$prefere5, _props$config$prefere6;
              var preferenceDataToBeStored = {
                timeStamp: (_props$config$prefere2 = props.config.preferences) === null || _props$config$prefere2 === void 0 ? void 0 : _props$config$prefere2.timeStamp,
                values: (_props$config$prefere3 = (_props$config$prefere4 = props.config.preferences) === null || _props$config$prefere4 === void 0 ? void 0 : _props$config$prefere4.values) !== null && _props$config$prefere3 !== void 0 ? _props$config$prefere3 : []
              };
              sessionStorage.setItem(sessionStorageKey, "".concat(JSON.stringify(preferenceDataToBeStored)));
              values = (_props$config$prefere5 = (_props$config$prefere6 = props.config.preferences) === null || _props$config$prefere6 === void 0 ? void 0 : _props$config$prefere6.values) !== null && _props$config$prefere5 !== void 0 ? _props$config$prefere5 : [];
            } else {
              values = valuesFromSessionData;
            }
            var entityTypeKey = (_props$config$prefere7 = (_props$config$prefere8 = props.config.preferences) === null || _props$config$prefere8 === void 0 ? void 0 : _props$config$prefere8.entityTypeKey) !== null && _props$config$prefere7 !== void 0 ? _props$config$prefere7 : undefined;
            var entityKey = (_props$config$prefere9 = (_props$config$prefere10 = props.config.preferences) === null || _props$config$prefere10 === void 0 ? void 0 : _props$config$prefere10.entityKey) !== null && _props$config$prefere9 !== void 0 ? _props$config$prefere9 : undefined;
            var anonymous = !store$1.state.isAnonymousVisitor && !store$1.state.currentPerson;
            var preferenceProvider = {
              blockPreferences: new PersonPreferenceCollection(entityTypeKey, entityKey, "", anonymous, values),
              getGlobalPreferences() {
                return _asyncToGenerator(function* () {
                  try {
                    var response = yield get("/api/v2/Utilities/PersonPreferences");
                    if (!response.isSuccess || !response.data) {
                      console.error(response.errorMessage || "Unable to retrieve person preferences.");
                      return new PersonPreferenceCollection();
                    }
                    return new PersonPreferenceCollection(undefined, undefined, "", anonymous, response.data);
                  } catch (error) {
                    console.error(error);
                    return new PersonPreferenceCollection();
                  }
                })();
              },
              getEntityPreferences(entityTypeKey, entityKey) {
                return _asyncToGenerator(function* () {
                  try {
                    var response = yield get("/api/v2/Utilities/PersonPreferences/".concat(entityTypeKey, "/").concat(entityKey));
                    if (!response.isSuccess || !response.data) {
                      console.error(response.errorMessage || "Unable to retrieve person preferences.");
                      return new PersonPreferenceCollection();
                    }
                    return new PersonPreferenceCollection(entityTypeKey, entityKey, "", anonymous, response.data);
                  } catch (error) {
                    console.error(error);
                    return new PersonPreferenceCollection();
                  }
                })();
              }
            };
            var onPreferenceSave = prefereneces => {
              var preferenceDataToBeStored = {
                timeStamp: new Date().getTime(),
                values: prefereneces
              };
              sessionStorage.setItem(sessionStorageKey, "".concat(JSON.stringify(preferenceDataToBeStored)));
            };
            preferenceProvider.blockPreferences.on("preferenceSaved", onPreferenceSave);
            return preferenceProvider;
          }
          var onCustomActionClose = () => {
            customActionComponent.value = null;
          };
          watch(configBarActions, () => {
            if (blockContainerElement.value) {
              updateConfigurationBarActions(blockContainerElement.value, configBarActions.value);
            }
          });
          onErrorCaptured(err => {
            var defaultMessage = "An unknown error was caught from the block.";
            if (err instanceof Error) {
              error.value = err.message || defaultMessage;
            } else if (err) {
              error.value = JSON.stringify(err) || defaultMessage;
            } else {
              error.value = defaultMessage;
            }
          });
          onMounted(() => {
            var _props$blockComponent;
            finishTimeMs.value = RockDateTime.now().toMilliseconds();
            var componentName = ((_props$blockComponent = props.blockComponent) === null || _props$blockComponent === void 0 ? void 0 : _props$blockComponent.name) || "";
            var nameParts = componentName.split(".");
            var subtitle = nameParts[0] || "";
            if (subtitle && subtitle.indexOf("(") !== 0) {
              subtitle = "(".concat(subtitle, ")");
            }
            if (nameParts.length) {
              store$1.addPageDebugTiming({
                title: nameParts[1] || "<Unnamed>",
                subtitle: subtitle,
                startTimeMs: props.startTimeMs,
                finishTimeMs: finishTimeMs.value
              });
            }
            if (blockContainerElement.value) {
              updateConfigurationBarActions(blockContainerElement.value, configBarActions.value);
            }
          });
          provideHttp({
            doApiCall,
            get,
            post
          });
          provide("invokeBlockAction", invokeBlockAction);
          provide("configurationValues", configurationValues);
          provideReloadBlock(reloadBlock);
          providePersonPreferences(getPreferenceProvider());
          var configurationValuesChanged = provideConfigurationValuesChanged();
          provideStaticContent(props.staticContent);
          if (props.config.blockGuid) {
            provideBlockGuid(props.config.blockGuid);
          }
          if (props.config.blockGuid) {
            addBlockChangedEventListener(props.config.blockGuid, () => {
              configurationValuesChanged.invoke();
            });
          }
          return {
            blockContainerElement,
            blockFileUrl: props.config.blockFileUrl,
            blockGuid: (_props$config$blockGu = props.config.blockGuid) !== null && _props$config$blockGu !== void 0 ? _props$config$blockGu : emptyGuid,
            currentBlockComponent,
            customActionComponent,
            onCustomActionClose,
            error
          };
        },
        template: "\n<div ref=\"blockContainerElement\" class=\"obsidian-block\">\n    <div v-if=\"!blockComponent\" class=\"alert alert-danger\">\n        <strong>Not Found</strong>\n        Could not find block component: \"{{blockFileUrl}}\"\n    </div>\n\n    <div v-if=\"error\" class=\"alert alert-danger\">\n        <strong>Uncaught Error</strong>\n        {{error}}\n    </div>\n\n    <component :is=\"currentBlockComponent\" :blockGuid=\"blockGuid\" />\n\n    <div style=\"display: none;\">\n        <component :is=\"customActionComponent\" @close=\"onCustomActionClose\" />\n    </div>\n</div>"
      });

      var store = useStore();
      var developerStyle = defineComponent({
        render() {
          return h("style", {}, this.$slots.default ? this.$slots.default() : undefined);
        }
      });
      function initializeBlock(_x) {
        return _initializeBlock.apply(this, arguments);
      }
      function _initializeBlock() {
        _initializeBlock = _asyncToGenerator(function* (config) {
          var blockPath = "".concat(config.blockFileUrl, ".js");
          var blockComponent = null;
          var errorMessage = "";
          if (!config || !config.blockFileUrl || !config.blockGuid || !config.rootElementId) {
            console.error("Invalid block configuration:", config);
            throw "Could not initialize Obsidian block because the configuration is invalid.";
          }
          var rootElement = document.getElementById(config.rootElementId);
          if (!rootElement) {
            throw "Could not initialize Obsidian block because the root element was not found.";
          }
          try {
            var blockComponentModule = yield module.import(blockPath);
            blockComponent = blockComponentModule ? blockComponentModule.default || blockComponentModule : null;
          } catch (e) {
            console.error(e);
            errorMessage = "".concat(e);
          }
          var startTimeMs = RockDateTime.now().toMilliseconds();
          var name = "Root".concat(config.blockFileUrl.replace(/\//g, "."));
          var staticContent = rootElement.innerHTML;
          var app = createApp({
            name,
            components: {
              RockBlock
            },
            setup() {
              var isLoaded = false;
              var suspense = new BasicSuspenseProvider(undefined);
              provideSuspense(suspense);
              var startLoading = () => {
                var _document$body$getAtt;
                var pendingCount = parseInt((_document$body$getAtt = document.body.getAttribute("data-obsidian-pending-blocks")) !== null && _document$body$getAtt !== void 0 ? _document$body$getAtt : "0");
                pendingCount++;
                document.body.setAttribute("data-obsidian-pending-blocks", pendingCount.toString());
              };
              var finishedLoading = () => {
                var _document$body$getAtt2;
                if (isLoaded) {
                  return;
                }
                isLoaded = true;
                rootElement.classList.remove("obsidian-block-loading");
                var pendingCount = parseInt((_document$body$getAtt2 = document.body.getAttribute("data-obsidian-pending-blocks")) !== null && _document$body$getAtt2 !== void 0 ? _document$body$getAtt2 : "0");
                if (pendingCount > 0) {
                  pendingCount--;
                  document.body.setAttribute("data-obsidian-pending-blocks", pendingCount.toString());
                  if (pendingCount === 0) {
                    document.body.classList.remove("obsidian-loading");
                  }
                }
              };
              startLoading();
              setTimeout(finishedLoading, 5000);
              onMounted(() => {
                if (!suspense.hasPendingOperations()) {
                  finishedLoading();
                } else {
                  suspense.addFinishedHandler(() => {
                    finishedLoading();
                  });
                }
              });
              return {
                config: config,
                blockComponent: blockComponent ? markRaw(blockComponent) : null,
                startTimeMs,
                staticContent,
                errorMessage
              };
            },
            template: "\n<div v-if=\"errorMessage\" class=\"alert alert-danger\">\n    <strong>Error Initializing Block</strong>\n    <br />\n    {{errorMessage}}\n</div>\n<RockBlock v-else :config=\"config\" :blockComponent=\"blockComponent\" :startTimeMs=\"startTimeMs\" :staticContent=\"staticContent\" />"
          });
          app.component("v-style", developerStyle);
          app.mount(rootElement);
          return app;
        });
        return _initializeBlock.apply(this, arguments);
      }
      function showCustomBlockAction(_x2, _x3, _x4) {
        return _showCustomBlockAction.apply(this, arguments);
      }
      function _showCustomBlockAction() {
        _showCustomBlockAction = _asyncToGenerator(function* (actionFileUrl, pageGuid, blockGuid) {
          var actionComponent = null;
          try {
            var actionComponentModule = yield module.import(actionFileUrl);
            actionComponent = actionComponentModule ? actionComponentModule.default || actionComponentModule : null;
          } catch (e) {
            console.error(e);
            alert("There was an error trying to show these settings.");
            return;
          }
          var name = "Action".concat(actionFileUrl.replace(/\//g, "."));
          var app = createApp({
            name,
            components: {},
            setup() {
              var suspense = new BasicSuspenseProvider(undefined);
              provideSuspense(suspense);
              var httpCall = function () {
                var _ref = _asyncToGenerator(function* (method, url) {
                  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
                  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
                  return yield doApiCall(method, url, params, data);
                });
                return function httpCall(_x7, _x8) {
                  return _ref.apply(this, arguments);
                };
              }();
              var get = function () {
                var _ref2 = _asyncToGenerator(function* (url) {
                  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
                  return yield httpCall("GET", url, params);
                });
                return function get(_x9) {
                  return _ref2.apply(this, arguments);
                };
              }();
              var post = function () {
                var _ref3 = _asyncToGenerator(function* (url) {
                  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
                  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
                  return yield httpCall("POST", url, params, data);
                });
                return function post(_x10) {
                  return _ref3.apply(this, arguments);
                };
              }();
              var invokeBlockAction = createInvokeBlockAction(post, pageGuid, blockGuid, store.state.pageParameters);
              provideHttp({
                doApiCall,
                get,
                post
              });
              provide("invokeBlockAction", invokeBlockAction);
              provideBlockGuid(blockGuid);
              return {
                actionComponent,
                onCustomActionClose
              };
            },
            template: "<component :is=\"actionComponent\" @close=\"onCustomActionClose\" />"
          });
          function onCustomActionClose() {
            app.unmount();
            rootElement.remove();
          }
          var rootElement = document.createElement("div");
          document.body.append(rootElement);
          app.component("v-style", developerStyle);
          app.mount(rootElement);
        });
        return _showCustomBlockAction.apply(this, arguments);
      }
      function initializePage(_x5) {
        return _initializePage.apply(this, arguments);
      }
      function _initializePage() {
        _initializePage = _asyncToGenerator(function* (pageConfig) {
          yield store.initialize(pageConfig);
        });
        return _initializePage.apply(this, arguments);
      }
      function initializePageTimings(_x6) {
        return _initializePageTimings.apply(this, arguments);
      }
      function _initializePageTimings() {
        _initializePageTimings = _asyncToGenerator(function* (config) {
          var rootElement = document.getElementById(config.elementId);
          if (!rootElement) {
            console.error("Could not show Obsidian debug timings because the HTML element did not resolve.");
            return;
          }
          var pageDebugTimings = (yield module.import('@Obsidian/Controls/Internal/pageDebugTimings.obs')).default;
          var app = createApp({
            name: "PageDebugTimingsRoot",
            components: {
              PageDebugTimings: pageDebugTimings
            },
            data() {
              return {
                viewModels: config.debugTimingViewModels
              };
            },
            template: "<PageDebugTimings :serverViewModels=\"viewModels\" />"
          });
          app.mount(rootElement);
        });
        return _initializePageTimings.apply(this, arguments);
      }

    })
  };
}));
//# sourceMappingURL=rockPage.js.map
