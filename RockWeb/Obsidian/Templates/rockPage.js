System.register(['vue', '@Obsidian/Utility/http', '@Obsidian/PageState', '@Obsidian/Utility/rockDateTime', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', '@Obsidian/FieldTypes/index', '@Obsidian/Utility/suspense'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, onErrorCaptured, onMounted, provide, nextTick, h, createApp, markRaw, provideHttp, doApiCall, useStore, RockDateTime, provideReloadBlock, provideConfigurationValuesChanged, provideBlockGuid, emptyGuid, areEqual, BasicSuspenseProvider, provideSuspense;
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
      provideHttp = module.provideHttp;
      doApiCall = module.doApiCall;
    }, function (module) {
      useStore = module.useStore;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      provideReloadBlock = module.provideReloadBlock;
      provideConfigurationValuesChanged = module.provideConfigurationValuesChanged;
      provideBlockGuid = module.provideBlockGuid;
    }, function (module) {
      emptyGuid = module.emptyGuid;
      areEqual = module.areEqual;
    }, function () {}, function () {}, function (module) {
      BasicSuspenseProvider = module.BasicSuspenseProvider;
      provideSuspense = module.provideSuspense;
    }],
    execute: (function () {

      exports({
        initializeBlock: initializeBlock,
        initializePage: initializePage,
        initializePageTimings: initializePageTimings
      });

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
          }
        },
        setup(props) {
          var _props$config$blockGu;
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
          var invokeBlockAction = function () {
            var _ref5 = _asyncToGenerator(function* (actionName) {
              var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
              return yield post("/api/v2/BlockActions/".concat(store$1.state.pageGuid, "/").concat(props.config.blockGuid, "/").concat(actionName), undefined, _objectSpread2({
                __context: {
                  pageParameters: store$1.state.pageParameters
                }
              }, data));
            });
            return function invokeBlockAction(_x5) {
              return _ref5.apply(this, arguments);
            };
          }();
          var reloadBlock = function () {
            var _ref6 = _asyncToGenerator(function* () {
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
              return _ref6.apply(this, arguments);
            };
          }();
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
          var configurationValuesChanged = provideConfigurationValuesChanged();
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
          var name = "Root".concat(config.blockFileUrl.replace(/\//g, "."));
          var startTimeMs = RockDateTime.now().toMilliseconds();
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
                errorMessage
              };
            },
            template: "\n<div v-if=\"errorMessage\" class=\"alert alert-danger\">\n    <strong>Error Initializing Block</strong>\n    <br />\n    {{errorMessage}}\n</div>\n<RockBlock v-else :config=\"config\" :blockComponent=\"blockComponent\" :startTimeMs=\"startTimeMs\" />"
          });
          app.component("v-style", developerStyle);
          app.mount(rootElement);
          return app;
        });
        return _initializeBlock.apply(this, arguments);
      }
      function initializePage(_x2) {
        return _initializePage.apply(this, arguments);
      }
      function _initializePage() {
        _initializePage = _asyncToGenerator(function* (pageConfig) {
          yield store.initialize(pageConfig);
        });
        return _initializePage.apply(this, arguments);
      }
      function initializePageTimings(_x3) {
        return _initializePageTimings.apply(this, arguments);
      }
      function _initializePageTimings() {
        _initializePageTimings = _asyncToGenerator(function* (config) {
          var rootElement = document.getElementById(config.elementId);
          if (!rootElement) {
            console.error("Could not show Obsidian debug timings because the HTML element did not resolve.");
            return;
          }
          var pageDebugTimings = (yield module.import('@Obsidian/Controls/pageDebugTimings')).default;
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
