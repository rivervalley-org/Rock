System.register(['vue', '@Obsidian/Utility/realTime', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/Utility/promiseUtils'], (function (exports) {
  'use strict';
  var defineComponent, ref, openBlock, createElementBlock, unref, getTopic, useConfigurationValues, useInvokeBlockAction, newGuid, isPromise;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      unref = module.unref;
    }, function (module) {
      getTopic = module.getTopic;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      newGuid = module.newGuid;
    }, function (module) {
      isPromise = module.isPromise;
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

      var _hoisted_1 = ["innerHTML"];
      var script = exports('default', defineComponent({
        name: 'realTimeVisualizer',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var realTimeTopics = {};
          var isReconnecting = ref(false);
          var isAutoConnecting = ref(false);
          var isDisconnected = ref(false);
          var contentTemplate = ref(config.pageTemplate);
          var wrappedScriptName = "wrappedScript".concat(newGuid().replace(/-/g, ""));
          var visualizerContainer = ref(null);
          var visualizerId = "visualizer-".concat(newGuid());
          var containerStyles = {};
          var wrappedSetupComplete = false;
          function startConnect(_x) {
            return _startConnect.apply(this, arguments);
          }
          function _startConnect() {
            _startConnect = _asyncToGenerator(function* (reconnecting) {
              if (isAutoConnecting.value) {
                return;
              }
              isAutoConnecting.value = true;
              isReconnecting.value = reconnecting;
              try {
                realTimeTopics = {};
                var _iterator = _createForOfIteratorHelper(config.topics),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var topicIdentifier = _step.value;
                    yield joinTopic(topicIdentifier);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                if (Object.keys(realTimeTopics).length > 0) {
                  var connectionId = realTimeTopics[Object.keys(realTimeTopics)[0]].connectionId;
                  yield invokeBlockAction("Subscribe", {
                    connectionId
                  });
                }
                isAutoConnecting.value = false;
                isReconnecting.value = false;
              } catch (error) {
                console.error(error instanceof Error ? error.message : error);
                isDisconnected.value = true;
              }
            });
            return _startConnect.apply(this, arguments);
          }
          function joinTopic(_x2) {
            return _joinTopic.apply(this, arguments);
          }
          function _joinTopic() {
            _joinTopic = _asyncToGenerator(function* (topicIdentifier) {
              var topic = realTimeTopics[topicIdentifier];
              if (!topic) {
                topic = yield getTopic(topicIdentifier);
                topic.onMessage((message, args) => onMessageReceived(topicIdentifier, message, args));
                topic.onReconnecting(() => isReconnecting.value = true);
                topic.onReconnected(() => isReconnecting.value = false);
                topic.onDisconnected(() => startConnect(true));
                realTimeTopics[topicIdentifier] = topic;
              }
            });
            return _joinTopic.apply(this, arguments);
          }
          function injectScriptTag() {
            var script = "window[\"".concat(wrappedScriptName, "\"] = (function() { ").concat(config.script, "; return { showItem: typeof showItem !== \"undefined\" ? showItem : function () {}, setup: typeof setup !== \"undefined\" ? setup : function() {} }; })();");
            var scriptNode = document.createElement("script");
            scriptNode.type = "text/javascript";
            scriptNode.appendChild(document.createTextNode(script));
            document.body.appendChild(scriptNode);
          }
          function injectStyleTag() {
            var styleNode = document.createElement("style");
            var css = scopeCss(config.style, "#".concat(visualizerId));
            styleNode.appendChild(document.createTextNode(css));
            document.body.appendChild(styleNode);
          }
          function showItem(_x3) {
            return _showItem.apply(this, arguments);
          }
          function _showItem() {
            _showItem = _asyncToGenerator(function* (content) {
              if (visualizerContainer.value) {
                if (!wrappedSetupComplete) {
                  var setupResult = window[wrappedScriptName].setup(visualizerContainer.value, unref(config.settings));
                  if (isPromise(setupResult)) {
                    yield setupResult;
                  }
                  wrappedSetupComplete = true;
                }
                window[wrappedScriptName].showItem(content, visualizerContainer.value, unref(config.settings));
              }
            });
            return _showItem.apply(this, arguments);
          }
          function scopeCss(css, parent) {
            css = css.replace(/([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/g, parent + " $1$2");
            var parentRe = parent.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
            css = css.replace(new RegExp("(" + parentRe + ")\\s*\\1(?=[\\s\\r\\n,{])", "g"), "$1");
            css = css.replace(new RegExp("(" + parentRe + ")\\s*@", "g"), "@");
            css = css.replace(new RegExp("(" + parentRe + ")\\s*:root", "g"), ":root");
            css = css.replace(new RegExp("(" + parentRe + ")\\s*::view-transition-old", "g"), "::view-transition-old");
            var animations = [];
            var animationNameRe = /@keyframes\s+([a-zA-Z0-9_-]+)\s*{/g;
            var match;
            while ((match = animationNameRe.exec(css)) !== null) {
              if (animations.indexOf(match[1]) < 0) {
                animations.push(match[1]);
              }
            }
            var slug = parent.replace(/[^A-Za-z0-9\s]/g, "").trim().replace(/\s+/g, "-");
            animations.forEach(function (name) {
              var newName = "".concat(slug, "-").concat(name);
              css = css.replace(new RegExp("(@keyframes\\s+)" + name + "(\\s*{)", "g"), "$1" + newName + "$2");
              css = css.replace(new RegExp("(animation(?:-name)?\\s*:[^;]*\\s*)" + name + "([\\s;}])", "g"), "$1" + newName + "$2");
            });
            css = css.replace(new RegExp("(" + parentRe + " )(\\s*(?:to|from|[+-]?(?:(?:\\.\\d+)|(?:\\d+(?:\\.\\d*)?))%))(?=[\\s\\r\\n,{])", "g"), "$2");
            return css;
          }
          function onMessageReceived(_x4, _x5, _x6) {
            return _onMessageReceived.apply(this, arguments);
          }
          function _onMessageReceived() {
            _onMessageReceived = _asyncToGenerator(function* (topicIdentifier, message, args) {
              if (config.hasItemTemplate) {
                var result = yield invokeBlockAction("Resolve", {
                  topicIdentifier,
                  message,
                  arguments: args
                });
                if (result.data) {
                  showItem(result.data);
                }
              } else {
                showItem({
                  topic: topicIdentifier,
                  message,
                  arguments: args
                });
              }
            });
            return _onMessageReceived.apply(this, arguments);
          }
          for (var k in config.settings) {
            containerStyles["--".concat(k)] = config.settings[k];
          }
          injectScriptTag();
          injectStyleTag();
          startConnect(false);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              ref_key: "visualizerContainer",
              ref: visualizerContainer,
              id: visualizerId,
              style: containerStyles,
              innerHTML: contentTemplate.value
            }, null, 8, _hoisted_1);
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

      var css_248z = ".realtime-visualizer-container{display:flex;flex-direction:column}.realtime-visualizer-container>.realtime-visualizer-item{height:0}.realtime-visualizer-container>.realtime-visualizer-item.left-in{transform:translateX(calc(var(--animation-translate-size)*-1))}.realtime-visualizer-container>.realtime-visualizer-item.top-in{transform:translateY(calc(var(--animation-translate-size)*-1))}.realtime-visualizer-container>.realtime-visualizer-item.right-in{transform:translateX(var(--animation-translate-size))}.realtime-visualizer-container>.realtime-visualizer-item.bottom-in{transform:translateY(var(--animation-translate-size))}.realtime-visualizer-container>.realtime-visualizer-item.fade-in{opacity:0}.realtime-visualizer-container>.realtime-visualizer-item.bottom-in.in,.realtime-visualizer-container>.realtime-visualizer-item.left-in.in,.realtime-visualizer-container>.realtime-visualizer-item.right-in.in,.realtime-visualizer-container>.realtime-visualizer-item.top-in.in{transform:none}.realtime-visualizer-container>.realtime-visualizer-item.fade-in.in{opacity:1}.realtime-visualizer-container>.realtime-visualizer-item.left-out.out{transform:translateX(calc(var(--animation-translate-size)*-1))}.realtime-visualizer-container>.realtime-visualizer-item.top-out.out{transform:translateY(calc(var(--animation-translate-size)*-1))}.realtime-visualizer-container>.realtime-visualizer-item.right-out.out{transform:translateX(var(--animation-translate-size))}.realtime-visualizer-container>.realtime-visualizer-item.bottom-out.out{transform:translateY(var(--animation-translate-size))}.realtime-visualizer-container>.realtime-visualizer-item.fade-out.out{opacity:0;overflow-y:initial}.realtime-visualizer-container>.realtime-visualizer-item.in{transition:height var(--animation-duration) ease-out,transform var(--animation-duration) ease-out,opacity var(--animation-duration) ease-out}.realtime-visualizer-container>.realtime-visualizer-item.out{transition:opacity var(--animation-duration) ease-in,transform var(--animation-duration) ease-in,height var(--animation-duration) ease-in}";
      styleInject(css_248z);

      script.__file = "src/Utility/realTimeVisualizer.obs";

    })
  };
}));
//# sourceMappingURL=realTimeVisualizer.obs.js.map
