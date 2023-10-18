System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Libs/chart', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/wordCloud.obs', '@Obsidian/Utility/realTime', '@Obsidian/Utility/block', '@Obsidian/Enums/Event/interactiveExperienceApprovalStatus', '@Obsidian/Utility/component', '@Obsidian/Utility/rockDateTime'], (function (exports) {
  'use strict';
  var defineComponent, shallowRef, computed, watch, onMounted, openBlock, createElementBlock, normalizeClass, unref, toDisplayString, createCommentVNode, createElementVNode, ref, createVNode, reactive, createBlock, withCtx, createTextVNode, normalizeStyle, resolveDynamicComponent, NotificationBox, Chart, toNumber, WordCloud, getTopic, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock, InteractiveExperienceApprovalStatus, updateRefValue, RockDateTime;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      shallowRef = module.shallowRef;
      computed = module.computed;
      watch = module.watch;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
      ref = module.ref;
      createVNode = module.createVNode;
      reactive = module.reactive;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      normalizeStyle = module.normalizeStyle;
      resolveDynamicComponent = module.resolveDynamicComponent;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      Chart = module.Chart;
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      WordCloud = module["default"];
    }, function (module) {
      getTopic = module.getTopic;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      InteractiveExperienceApprovalStatus = module.InteractiveExperienceApprovalStatus;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      RockDateTime = module.RockDateTime;
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

      var visualizerProps = {
        renderConfiguration: {
          type: Object,
          required: true
        },
        responses: {
          type: Array,
          required: true
        }
      };

      var _hoisted_1$1 = {
        key: 0,
        class: "visualizer-title"
      };
      var _hoisted_2 = {
        class: "chart-container"
      };
      var script$2 = defineComponent({
        name: 'barChart.partial',
        props: visualizerProps,
        setup(__props) {
          var props = __props;
          var canvasElement = shallowRef(null);
          var colorConsumer = createSequentialConsumer(getColors(), 0);
          var chart = null;
          var additionalVisualizerClasses = computed(() => {
            return "experience-visualizer-".concat(props.renderConfiguration.actionId);
          });
          var borderWidth = computed(() => {
            var _props$renderConfigur;
            var value = toNumber(((_props$renderConfigur = props.renderConfiguration.configurationValues) === null || _props$renderConfigur === void 0 ? void 0 : _props$renderConfigur.borderWidth) || "4");
            return Math.min(100, Math.max(0, value));
          });
          var fillOpacity = computed(() => {
            var _props$renderConfigur2;
            var value = toNumber(((_props$renderConfigur2 = props.renderConfiguration.configurationValues) === null || _props$renderConfigur2 === void 0 ? void 0 : _props$renderConfigur2.fillOpacity) || "0.5");
            return Math.min(1.0, Math.max(0, value));
          });
          var answerOrder = computed(() => {
            var _props$renderConfigur3;
            if (typeof ((_props$renderConfigur3 = props.renderConfiguration.configurationValues) === null || _props$renderConfigur3 === void 0 ? void 0 : _props$renderConfigur3.answerOrder) !== "string") {
              return [];
            }
            try {
              var value = JSON.parse(props.renderConfiguration.configurationValues.answerOrder);
              if (!Array.isArray(value)) {
                return [];
              }
              return value;
            } catch (_unused) {
              return [];
            }
          });
          function getColors() {
            var _props$renderConfigur4, _props$renderConfigur5;
            var barColors = ((_props$renderConfigur4 = (_props$renderConfigur5 = props.renderConfiguration.configurationValues) === null || _props$renderConfigur5 === void 0 ? void 0 : _props$renderConfigur5.colors) !== null && _props$renderConfigur4 !== void 0 ? _props$renderConfigur4 : "").split(";").map(c => c.trim()).filter(c => c !== "");
            if (barColors.length === 0) {
              barColors = ["#709ac7", "#80bb7c", "#f26863", "#80afcb", "#e48480", "#c48cb2", "#ea872e", "#f4cf68", "#968e8b", "#489b98", "#b18772", "#d67493"];
            }
            return barColors.map(c => parseCssColor(c));
          }
          function parseCssColor(str) {
            var _getComputedStyle$col;
            var div = document.createElement("div");
            document.body.appendChild(div);
            div.style.color = str;
            var res = (_getComputedStyle$col = getComputedStyle(div).color.match(/[.\d]+/g)) === null || _getComputedStyle$col === void 0 ? void 0 : _getComputedStyle$col.map(Number);
            div.remove();
            if (!res) {
              return {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              };
            }
            return res.length === 3 ? {
              r: res[0],
              g: res[1],
              b: res[2],
              a: 1
            } : {
              r: res[0],
              g: res[1],
              b: res[2],
              a: res[3]
            };
          }
          function createSequentialConsumer(values, seed) {
            var items = [...values];
            var index = seed % items.length;
            return () => {
              if (items.length === 0) {
                throw new Error("No values were provided to consumer.");
              }
              if (index >= items.length) {
                index = 0;
              }
              return items[index++];
            };
          }
          function getScaledFontSize(baseSize) {
            var ratio = document.body.clientWidth / 1920.0;
            return baseSize * ratio;
          }
          function getStyleValue(style, variableName, defaultValue) {
            var value = style.getPropertyValue("--".concat(variableName));
            if (value !== "") {
              return value;
            }
            return defaultValue;
          }
          function getStyleFontSize(style, variableName, defaultSize) {
            var value = style.getPropertyValue("--".concat(variableName));
            if (value !== "" && !isNaN(parseFloat(value))) {
              return parseFloat(value);
            }
            return getScaledFontSize(defaultSize);
          }
          function getResponseData() {
            var words = {};
            if (answerOrder.value.length > 0) {
              var _iterator = _createForOfIteratorHelper(answerOrder.value),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var word = _step.value;
                  words[word] = 0;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            var _iterator2 = _createForOfIteratorHelper(props.responses),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var response = _step2.value;
                if (!response.response) {
                  continue;
                }
                if (typeof words[response.response] === "undefined") {
                  words[response.response] = 1;
                } else {
                  words[response.response] += 1;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            if (answerOrder.value.length > 0) {
              return Object.keys(words).map(k => ({
                text: k,
                count: words[k]
              }));
            } else {
              return Object.keys(words).map(k => ({
                text: k,
                count: words[k]
              })).sort((a, b) => a.text.localeCompare(b.text));
            }
          }
          function toCssRgba(color, alphaAdjust) {
            return "rgba(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ", ").concat(color.a * (alphaAdjust !== null && alphaAdjust !== void 0 ? alphaAdjust : 1), ")");
          }
          function getChartData() {
            var backgroundColors = [];
            var borderColors = [];
            var values = [];
            var labels = [];
            var words = getResponseData();
            var _iterator3 = _createForOfIteratorHelper(words),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var word = _step3.value;
                var color = colorConsumer();
                labels.push(word.text);
                values.push(word.count);
                backgroundColors.push(toCssRgba(color, fillOpacity.value));
                borderColors.push(toCssRgba(color));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            var data = {
              labels: labels,
              datasets: [{
                data: values,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: fillOpacity.value < 1 ? borderWidth.value : 0
              }]
            };
            return data;
          }
          function getChartConfig(style) {
            var _props$renderConfigur6;
            var axisDefaultColor = getStyleValue(style, "experience-visualizer-primary-color", "#000");
            var xAxisFontSize = getStyleFontSize(style, "major-axis-font-size", 24);
            var yAxisFontSize = getStyleFontSize(style, "minor-axis-font-size", 36);
            var xAxisColor = getStyleValue(style, "major-axis-color", axisDefaultColor);
            var yAxisColor = getStyleValue(style, "minor-axis-color", axisDefaultColor);
            var isHorizontal = ((_props$renderConfigur6 = props.renderConfiguration.configurationValues) === null || _props$renderConfigur6 === void 0 ? void 0 : _props$renderConfigur6.orientation) === "horizontal";
            var majorScale = {
              grid: {
                display: false
              },
              ticks: {
                color: yAxisColor,
                font: {
                  size: xAxisFontSize
                }
              }
            };
            var minorScale = {
              type: "linear",
              beginAtZero: true,
              grid: {
                display: false
              },
              ticks: {
                color: xAxisColor,
                font: {
                  size: yAxisFontSize
                },
                precision: 0
              }
            };
            var config = {
              type: "bar",
              data: getChartData(),
              options: {
                indexAxis: isHorizontal ? "y" : "x",
                maintainAspectRatio: false,
                responsive: true,
                animation: {
                  duration: 350
                },
                scales: {
                  x: isHorizontal ? minorScale : majorScale,
                  y: isHorizontal ? majorScale : minorScale
                },
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }
            };
            return config;
          }
          function onResponsesChanged() {
            if (!chart || !chart.data.labels) {
              return;
            }
            var responses = getResponseData();
            var _iterator4 = _createForOfIteratorHelper(responses),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var response = _step4.value;
                var existingIndex = chart.data.labels.indexOf(response.text);
                if (existingIndex !== -1) {
                  chart.data.datasets[0].data[existingIndex] = response.count;
                } else {
                  var insertIndex = void 0;
                  var color = colorConsumer();
                  for (insertIndex = 0; insertIndex < chart.data.labels.length; insertIndex++) {
                    if (response.text.localeCompare(chart.data.labels[insertIndex]) < 0) {
                      break;
                    }
                  }
                  chart.data.labels.splice(insertIndex, 0, response.text);
                  chart.data.datasets[0].data.splice(insertIndex, 0, response.count);
                  chart.data.datasets[0].backgroundColor.splice(insertIndex, 0, toCssRgba(color, fillOpacity.value));
                  chart.data.datasets[0].borderColor.splice(insertIndex, 0, toCssRgba(color));
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            var validResponseTexts = responses.map(r => r.text);
            for (var index = 0; index < chart.data.labels.length;) {
              if (validResponseTexts.includes(chart.data.labels[index])) {
                index++;
                continue;
              }
              chart.data.labels.splice(index, 1);
              chart.data.datasets[0].data.splice(index, 1);
              chart.data.datasets[0].backgroundColor.splice(index, 1);
              chart.data.datasets[0].borderColor.splice(index, 1);
            }
            chart.update();
          }
          watch(() => props.responses, onResponsesChanged);
          onMounted(() => {
            if (!canvasElement.value) {
              return;
            }
            var style = window.getComputedStyle(canvasElement.value);
            chart = new Chart(canvasElement.value, getChartConfig(style));
          });
          onResponsesChanged();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["experience-visualizer experience-visualizer-type-b1dfd377-9ef7-407f-9097-6206b98aec0d", unref(additionalVisualizerClasses)])
            }, [_ctx.renderConfiguration.title ? (openBlock(), createElementBlock("div", _hoisted_1$1, toDisplayString(_ctx.renderConfiguration.title), 1)) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_2, [createElementVNode("canvas", {
              ref_key: "canvasElement",
              ref: canvasElement
            }, null, 512)])], 2);
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

      var css_248z$2 = ".experience-visualizer-type-b1dfd377-9ef7-407f-9097-6206b98aec0d{display:flex;flex-direction:column}.experience-visualizer-type-b1dfd377-9ef7-407f-9097-6206b98aec0d .visualizer-title{color:var(--experience-visualizer-primary-color);font-size:36px;font-weight:700;margin-bottom:12px;text-align:center}.experience-visualizer-type-b1dfd377-9ef7-407f-9097-6206b98aec0d .chart-container{flex-grow:1}";
      styleInject(css_248z$2);

      script$2.__file = "src/Event/InteractiveExperiences/ExperienceVisualizer/barChart.partial.obs";

      var _hoisted_1 = {
        key: 0,
        class: "visualizer-title"
      };
      var script$1 = defineComponent({
        name: 'wordCloud.partial',
        props: visualizerProps,
        setup(__props) {
          var props = __props;
          var responses = ref([]);
          var additionalVisualizerClasses = computed(() => {
            return "experience-visualizer-".concat(props.renderConfiguration.actionId);
          });
          var colors = computed(() => {
            var _props$renderConfigur, _props$renderConfigur2, _props$renderConfigur3;
            var colorStrings = (_props$renderConfigur = (_props$renderConfigur2 = props.renderConfiguration.configurationValues) === null || _props$renderConfigur2 === void 0 ? void 0 : (_props$renderConfigur3 = _props$renderConfigur2.colors) === null || _props$renderConfigur3 === void 0 ? void 0 : _props$renderConfigur3.split(",").map(c => c.trim()).filter(c => c !== "")) !== null && _props$renderConfigur !== void 0 ? _props$renderConfigur : [];
            return colorStrings.length > 0 ? colorStrings : undefined;
          });
          var angleCount = computed(() => {
            var _props$renderConfigur4;
            var value = toNumber(((_props$renderConfigur4 = props.renderConfiguration.configurationValues) === null || _props$renderConfigur4 === void 0 ? void 0 : _props$renderConfigur4.angleCount) || "5");
            return Math.min(100, Math.max(1, Math.floor(value)));
          });
          var fontName = computed(() => {
            var _props$renderConfigur5;
            return ((_props$renderConfigur5 = props.renderConfiguration.configurationValues) === null || _props$renderConfigur5 === void 0 ? void 0 : _props$renderConfigur5.fontName) || undefined;
          });
          var minimumUpdateInterval = computed(() => {
            var _props$renderConfigur6, _props$renderConfigur7;
            return toNumber((_props$renderConfigur6 = (_props$renderConfigur7 = props.renderConfiguration.configurationValues) === null || _props$renderConfigur7 === void 0 ? void 0 : _props$renderConfigur7.minimumUpdateInterval) !== null && _props$renderConfigur6 !== void 0 ? _props$renderConfigur6 : 0) * 1000;
          });
          function updateResponses() {
            responses.value = props.responses.filter(r => r.response).map(r => r.response);
          }
          watch(() => props.responses, updateResponses);
          updateResponses();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["experience-visualizer experience-visualizer-type-dc35f0f7-83e5-47d8-aa27-b448962b60dd", unref(additionalVisualizerClasses)])
            }, [_ctx.renderConfiguration.title ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(_ctx.renderConfiguration.title), 1)) : createCommentVNode("v-if", true), createVNode(unref(WordCloud), {
              words: responses.value,
              angleCount: unref(angleCount),
              fontName: unref(fontName),
              colors: unref(colors),
              minimumUpdateInterval: unref(minimumUpdateInterval),
              width: "100%",
              height: "100%"
            }, null, 8, ["words", "angleCount", "fontName", "colors", "minimumUpdateInterval"])], 2);
          };
        }
      });

      var css_248z$1 = ".experience-visualizer-type-dc35f0f7-83e5-47d8-aa27-b448962b60dd{display:flex;flex-direction:column}.experience-visualizer-type-dc35f0f7-83e5-47d8-aa27-b448962b60dd .visualizer-title{color:var(--experience-visualizer-primary-color);font-size:36px;font-weight:700;margin-bottom:12px;text-align:center}.experience-visualizer-type-dc35f0f7-83e5-47d8-aa27-b448962b60dd .rock-word-cloud{flex-grow:1}";
      styleInject(css_248z$1);

      script$1.__file = "src/Event/InteractiveExperiences/ExperienceVisualizer/wordCloud.partial.obs";

      var script = exports('default', defineComponent({
        name: 'experienceVisualizer',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var actionTypeLookup = {
            "b1dfd377-9ef7-407f-9097-6206b98aec0d": script$2,
            "dc35f0f7-83e5-47d8-aa27-b448962b60dd": script$1
          };
          var experienceToken = ref(null);
          var experienceStyles = ref(getExperienceStyles(null));
          var eventId = ref(null);
          var activeActionId = ref(null);
          var activeVisualizerComponent = ref(null);
          var activeRenderConfiguration = ref(null);
          var occurrenceResponses = reactive([]);
          var activeResponses = ref([]);
          var realTimeTopic = null;
          var occurrenceEndDateTime = null;
          var checkForNewOccurrenceTimeout = null;
          var styleNode = document.createElement("style");
          styleNode.textContent = "";
          document.head.appendChild(styleNode);
          function startRealTime(_x) {
            return _startRealTime.apply(this, arguments);
          }
          function _startRealTime() {
            _startRealTime = _asyncToGenerator(function* (isReconnecting) {
              var topic = yield getTopic("Rock.RealTime.Topics.InteractiveExperienceParticipantTopic");
              topic.onDisconnected(_asyncToGenerator(function* () {
                yield startRealTime(true);
                yield clearExperience();
                checkForNewOccurrence();
              }));
              setupTopicListeners(topic);
              realTimeTopic = topic;
              if (!isReconnecting) {
                setTimeout(onPingTimer, config.keepAliveInterval * 1000);
              }
            });
            return _startRealTime.apply(this, arguments);
          }
          function joinExperience(_x2) {
            return _joinExperience.apply(this, arguments);
          }
          function _joinExperience() {
            _joinExperience = _asyncToGenerator(function* (token) {
              if (!realTimeTopic) {
                return;
              }
              try {
                var _response$occurrenceI;
                occurrenceResponses.slice();
                var response = yield realTimeTopic.server.joinExperience(token);
                eventId.value = (_response$occurrenceI = response.occurrenceIdKey) !== null && _response$occurrenceI !== void 0 ? _response$occurrenceI : null;
                if (response.currentVisualizerActionIdKey && response.currentVisualizerConfiguration) {
                  setupVisualizerComponent(response.currentVisualizerActionIdKey, response.currentVisualizerConfiguration);
                }
                yield getAllAnswers(token);
              } catch (error) {
                eventId.value = null;
                experienceToken.value = null;
                activeVisualizerComponent.value = null;
                activeActionId.value = null;
                activeRenderConfiguration.value = null;
                throw error;
              }
            });
            return _joinExperience.apply(this, arguments);
          }
          function setupVisualizerComponent(actionId, renderConfiguration) {
            if (renderConfiguration === null || !renderConfiguration.visualizerTypeGuid || !actionTypeLookup[renderConfiguration.visualizerTypeGuid]) {
              activeVisualizerComponent.value = null;
              activeActionId.value = null;
              activeRenderConfiguration.value = null;
              return;
            }
            activeVisualizerComponent.value = actionTypeLookup[renderConfiguration.visualizerTypeGuid];
            activeActionId.value = actionId;
            activeRenderConfiguration.value = renderConfiguration;
          }
          function getExperienceStyles(style) {
            var _style$visualizer, _style$visualizer2, _style$visualizer3, _style$visualizer4, _style$visualizer5, _style$visualizer6;
            var styles = {};
            if (style !== null && style !== void 0 && (_style$visualizer = style.visualizer) !== null && _style$visualizer !== void 0 && _style$visualizer.backgroundColor) {
              styles["--experience-visualizer-bg"] = style.visualizer.backgroundColor;
            }
            if (style !== null && style !== void 0 && (_style$visualizer2 = style.visualizer) !== null && _style$visualizer2 !== void 0 && _style$visualizer2.backgroundImage) {
              styles["--experience-visualizer-bg-image"] = "url('".concat(style.visualizer.backgroundImage, "')");
            }
            if (style !== null && style !== void 0 && (_style$visualizer3 = style.visualizer) !== null && _style$visualizer3 !== void 0 && _style$visualizer3.textColor) {
              styles["--experience-visualizer-color"] = style.visualizer.textColor;
            } else {
              styles["--experience-visualizer-color"] = "var(--text-color)";
            }
            if (style !== null && style !== void 0 && (_style$visualizer4 = style.visualizer) !== null && _style$visualizer4 !== void 0 && _style$visualizer4.primaryColor) {
              styles["--experience-visualizer-primary-color"] = style.visualizer.primaryColor;
            } else {
              styles["--experience-visualizer-primary-color"] = "var(--brand-primary)";
            }
            if (style !== null && style !== void 0 && (_style$visualizer5 = style.visualizer) !== null && _style$visualizer5 !== void 0 && _style$visualizer5.secondaryColor) {
              styles["--experience-visualizer-secondary-color"] = style.visualizer.secondaryColor;
            } else {
              styles["--experience-visualizer-secondary-color"] = "var(--brand-success)";
            }
            if (style !== null && style !== void 0 && (_style$visualizer6 = style.visualizer) !== null && _style$visualizer6 !== void 0 && _style$visualizer6.accentColor) {
              styles["--experience-visualizer-accent-color"] = style.visualizer.accentColor;
            } else {
              styles["--experience-visualizer-accent-color"] = "var(--brand-info)";
            }
            return styles;
          }
          function setupCustomStyles(style) {
            var _style$visualizer$cus, _style$visualizer7;
            styleNode.textContent = (_style$visualizer$cus = style === null || style === void 0 ? void 0 : (_style$visualizer7 = style.visualizer) === null || _style$visualizer7 === void 0 ? void 0 : _style$visualizer7.customCss) !== null && _style$visualizer$cus !== void 0 ? _style$visualizer$cus : "";
          }
          function setupTopicListeners(topic) {
            topic.on("showVisualizer", onShowVisualizer);
            topic.on("clearVisualizer", onClearVisualizer);
            topic.on("answerSubmitted", onAnswerSubmitted);
            topic.on("answerUpdated", onAnswerUpdated);
            topic.on("answerRemoved", onAnswerRemoved);
          }
          function updateAnswer(answer) {
            var answerIndex = occurrenceResponses.findIndex(a => a.idKey === answer.idKey);
            if (answerIndex !== -1) {
              occurrenceResponses.splice(answerIndex, 1, answer);
            } else {
              occurrenceResponses.push(answer);
            }
          }
          function removeAnswer(answerIdKey) {
            var answerIndex = occurrenceResponses.findIndex(a => a.idKey === answerIdKey);
            if (answerIndex !== -1) {
              occurrenceResponses.splice(answerIndex, 1);
            }
          }
          function getAllAnswers(_x3) {
            return _getAllAnswers.apply(this, arguments);
          }
          function _getAllAnswers() {
            _getAllAnswers = _asyncToGenerator(function* (token) {
              occurrenceResponses.slice();
              var response = yield invokeBlockAction("GetExperienceAnswers", {
                token: token
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
          function clearExperience() {
            return _clearExperience.apply(this, arguments);
          }
          function _clearExperience() {
            _clearExperience = _asyncToGenerator(function* () {
              if (eventId.value && realTimeTopic) {
                try {
                  yield realTimeTopic.server.leaveExperience(eventId.value);
                } catch (_unused) {}
              }
              experienceToken.value = null;
              experienceStyles.value = getExperienceStyles(null);
              occurrenceEndDateTime = null;
              eventId.value = null;
              setupVisualizerComponent(null, null);
            });
            return _clearExperience.apply(this, arguments);
          }
          function checkForNewOccurrence() {
            return _checkForNewOccurrence.apply(this, arguments);
          }
          function _checkForNewOccurrence() {
            _checkForNewOccurrence = _asyncToGenerator(function* () {
              if (checkForNewOccurrenceTimeout) {
                clearTimeout(checkForNewOccurrenceTimeout);
                checkForNewOccurrenceTimeout = null;
              }
              try {
                if (occurrenceEndDateTime) {
                  if (RockDateTime.now().toMilliseconds() < occurrenceEndDateTime.toMilliseconds()) {
                    return;
                  } else {
                    return clearExperience();
                  }
                }
                var result = yield invokeBlockAction("GetCurrentOccurrence");
                if (result.isSuccess) {
                  yield updateOccurrence(result.data);
                } else {
                  var _result$errorMessage;
                  console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error trying to get current occurrence.");
                }
              } finally {
                checkForNewOccurrenceTimeout = setTimeout(checkForNewOccurrence, 60000);
              }
            });
            return _checkForNewOccurrence.apply(this, arguments);
          }
          function updateOccurrence(_x4) {
            return _updateOccurrence.apply(this, arguments);
          }
          function _updateOccurrence() {
            _updateOccurrence = _asyncToGenerator(function* (occurrence) {
              var _occurrence$occurrenc2;
              if (realTimeTopic == null) {
                var _occurrence$experienc, _occurrence$occurrenc;
                experienceToken.value = (_occurrence$experienc = occurrence === null || occurrence === void 0 ? void 0 : occurrence.experienceToken) !== null && _occurrence$experienc !== void 0 ? _occurrence$experienc : null;
                experienceStyles.value = getExperienceStyles(occurrence === null || occurrence === void 0 ? void 0 : occurrence.style);
                occurrenceEndDateTime = RockDateTime.parseISO((_occurrence$occurrenc = occurrence === null || occurrence === void 0 ? void 0 : occurrence.occurrenceEndDateTime) !== null && _occurrence$occurrenc !== void 0 ? _occurrence$occurrenc : "");
                return;
              }
              yield clearExperience();
              if (!occurrence) {
                return;
              }
              experienceStyles.value = getExperienceStyles(occurrence.style);
              setupCustomStyles(occurrence.style);
              occurrenceEndDateTime = RockDateTime.parseISO((_occurrence$occurrenc2 = occurrence.occurrenceEndDateTime) !== null && _occurrence$occurrenc2 !== void 0 ? _occurrence$occurrenc2 : "");
              if (occurrence.experienceToken) {
                yield joinExperience(occurrence.experienceToken);
              }
            });
            return _updateOccurrence.apply(this, arguments);
          }
          function startup() {
            return _startup.apply(this, arguments);
          }
          function _startup() {
            _startup = _asyncToGenerator(function* () {
              yield startRealTime(false);
              yield checkForNewOccurrence();
            });
            return _startup.apply(this, arguments);
          }
          function onShowVisualizer(_x5, _x6, _x7) {
            return _onShowVisualizer.apply(this, arguments);
          }
          function _onShowVisualizer() {
            _onShowVisualizer = _asyncToGenerator(function* (id, actionId, renderConfiguration) {
              if (eventId.value === id) {
                setupVisualizerComponent(actionId, renderConfiguration);
              }
            });
            return _onShowVisualizer.apply(this, arguments);
          }
          function onClearVisualizer(id) {
            if (eventId.value === id) {
              activeVisualizerComponent.value = null;
              activeActionId.value = null;
              activeRenderConfiguration.value = null;
            }
          }
          function onAnswerSubmitted(idKey, answer) {
            if (idKey !== eventId.value) {
              return;
            }
            updateAnswer(answer);
          }
          function onAnswerUpdated(idKey, answer) {
            if (idKey !== eventId.value) {
              return;
            }
            updateAnswer(answer);
          }
          function onAnswerRemoved(idKey, answerIdKey) {
            if (idKey !== eventId.value) {
              return;
            }
            removeAnswer(answerIdKey);
          }
          function onPingTimer() {
            return _onPingTimer.apply(this, arguments);
          }
          function _onPingTimer() {
            _onPingTimer = _asyncToGenerator(function* () {
              try {
                if (realTimeTopic && eventId.value) {
                  yield realTimeTopic.server.pingExperience(eventId.value);
                }
              } catch (error) {
                console.error(error instanceof Error ? error.message : error);
              } finally {
                setTimeout(onPingTimer, config.keepAliveInterval * 1000);
              }
            });
            return _onPingTimer.apply(this, arguments);
          }
          watch([activeActionId, occurrenceResponses], () => {
            updateRefValue(activeResponses, occurrenceResponses.filter(r => r.actionIdKey === activeActionId.value && r.status === InteractiveExperienceApprovalStatus.Approved));
          });
          onConfigurationValuesChanged(useReloadBlock());
          setupCustomStyles(null);
          startup();
          return (_ctx, _cache) => {
            return unref(config).errorMessage ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(config).errorMessage), 1)]),
              _: 1
            })) : (openBlock(), createElementBlock("div", {
              key: 1,
              class: "experience-visualizer-body",
              style: normalizeStyle(experienceStyles.value)
            }, [activeVisualizerComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(activeVisualizerComponent.value), {
              key: 0,
              renderConfiguration: activeRenderConfiguration.value,
              responses: activeResponses.value
            }, null, 8, ["renderConfiguration", "responses"])) : createCommentVNode("v-if", true)], 4));
          };
        }
      }));

      var css_248z = ".experience-visualizer-body{background-color:var(--experience-visualizer-bg,inherit);background-image:var(--experience-visualizer-bg-image,initial);background-position:50%;background-size:cover;bottom:0;color:var(--experience-visualizer-color);left:0;padding:18px;position:absolute;right:0;top:0}.experience-visualizer-body .experience-visualizer{height:100%;width:100%}";
      styleInject(css_248z);

      script.__file = "src/Event/InteractiveExperiences/experienceVisualizer.obs";

    })
  };
}));
//# sourceMappingURL=experienceVisualizer.obs.js.map
