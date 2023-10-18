System.register(['vue', '@Obsidian/Libs/d3'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, onMounted, onBeforeUnmount, watch, openBlock, createElementBlock, normalizeStyle, unref, cloud;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      onMounted = module.onMounted;
      onBeforeUnmount = module.onBeforeUnmount;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeStyle = module.normalizeStyle;
      unref = module.unref;
    }, function (module) {
      cloud = module.cloud;
    }],
    execute: (function () {

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

      var script = exports('default', defineComponent({
        name: 'wordCloud',
        props: {
          words: {
            type: Array,
            default: []
          },
          width: {
            type: [Number, String],
            default: 500
          },
          height: {
            type: [Number, String],
            default: 500
          },
          angleCount: {
            type: Number,
            default: 5
          },
          minimumAngle: {
            type: Number,
            default: -90
          },
          maximumAngle: {
            type: Number,
            default: 90
          },
          fontName: {
            type: String,
            default: "Impact"
          },
          minimumFontSize: {
            type: Number,
            default: 10
          },
          maximumFontSize: {
            type: Number,
            default: 96
          },
          colors: {
            type: Array,
            default: ["#0193B9", "#F2C852", "#1DB82B", "#2B515D", "#ED3223"]
          },
          wordPadding: {
            type: Number,
            default: 5
          },
          autoClear: {
            type: Boolean,
            default: false
          },
          animationDuration: {
            type: Number,
            default: 350
          },
          minimumUpdateInterval: {
            type: Number,
            default: 0
          }
        },
        emits: ["beginDraw", "endDraw"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var svgElement = ref(null);
          var elements = {};
          var animationStartTime = null;
          var animationFrame = null;
          var isUpdateRequested = false;
          var resizeObserver = null;
          var lastObserverSize = {
            width: 0,
            height: 0
          };
          var lastUpdate = 0;
          var deferredUpdateTimer = null;
          var svgStyle = computed(() => {
            var styles = {};
            if (typeof props.width === "string") {
              styles.width = props.width;
            } else {
              styles.width = "".concat(props.width, "px");
            }
            if (typeof props.height === "string") {
              styles.height = props.height;
            } else {
              styles.height = "".concat(props.height, "px");
            }
            return styles;
          });
          var constrainedAngleCount = computed(() => {
            return Math.max(1, Math.min(180, Math.floor(props.angleCount)));
          });
          var angles = computed(() => {
            var angleCount = Math.min(180, constrainedAngleCount.value);
            if (angleCount <= 1) {
              return [(props.minimumAngle + props.maximumAngle) / 2];
            } else if (angleCount === 2) {
              return [props.minimumAngle, props.maximumAngle];
            } else {
              var angleSize = (props.maximumAngle - props.minimumAngle) / (angleCount - 1);
              var angleList = [];
              for (var angle = props.minimumAngle; angle <= props.maximumAngle; angle += angleSize) {
                angleList.push(angle);
              }
              return angleList;
            }
          });
          function getWidth() {
            var _svgElement$value$cli, _svgElement$value;
            return (_svgElement$value$cli = (_svgElement$value = svgElement.value) === null || _svgElement$value === void 0 ? void 0 : _svgElement$value.clientWidth) !== null && _svgElement$value$cli !== void 0 ? _svgElement$value$cli : 0;
          }
          function getHeight() {
            var _svgElement$value$cli2, _svgElement$value2;
            return (_svgElement$value$cli2 = (_svgElement$value2 = svgElement.value) === null || _svgElement$value2 === void 0 ? void 0 : _svgElement$value2.clientHeight) !== null && _svgElement$value$cli2 !== void 0 ? _svgElement$value$cli2 : 0;
          }
          function createLogScale(outputMin, outputMax, inputMin, inputMax) {
            var logmin = Math.log(inputMin);
            var logmax = Math.log(inputMax);
            var outputRange = outputMax - outputMin;
            return value => {
              if (value === inputMin && value === inputMax) {
                return outputMin;
              }
              return (Math.log(value) - logmin) / (logmax - logmin) * outputRange + outputMin;
            };
          }
          function createSequentialConsumer(values, seed) {
            var items = [...values];
            var index = seed % items.length;
            return () => {
              if (items.length === 0) {
                return undefined;
              }
              if (index >= items.length) {
                index = 0;
              }
              return items[index++];
            };
          }
          function mapAnimationValue(startValue, endValue, progress) {
            var progressCurve = progress * progress * (3.0 - 2.0 * progress);
            return (endValue - startValue) * progressCurve + startValue;
          }
          function renderWords(words) {
            if (!svgElement.value) {
              return;
            }
            var g = svgElement.value.firstChild;
            if (!g) {
              g = document.createElementNS("http://www.w3.org/2000/svg", "g");
              svgElement.value.appendChild(g);
            }
            g.setAttribute("transform", "translate(".concat(getWidth() / 2, ", ").concat(getHeight() / 2, ")"));
            if (props.autoClear) {
              while (g.firstChild) {
                g.firstChild.remove();
              }
            }
            var colorConsumer = createSequentialConsumer(props.colors, Object.keys(elements).length);
            for (var index = 0; index < words.length; index += 1) {
              var word = words[index];
              if (!word.text) {
                continue;
              }
              var wordElement = elements[word.text];
              if (!wordElement) {
                var _word$font, _colorConsumer, _word$size, _word$rotate, _word$x, _word$y;
                var textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
                textNode.setAttribute("text-anchor", "middle");
                textNode.style.fontFamily = (_word$font = word.font) !== null && _word$font !== void 0 ? _word$font : "inherit";
                textNode.style.fill = (_colorConsumer = colorConsumer()) !== null && _colorConsumer !== void 0 ? _colorConsumer : "inherit";
                textNode.style.transform = "translate(0px, 0px) rotate(0deg)";
                textNode.textContent = word.text;
                g.appendChild(textNode);
                wordElement = {
                  element: textNode,
                  previousFontSize: 0,
                  previousRotation: 0,
                  previousX: 0,
                  previousY: 0,
                  fontSize: (_word$size = word.size) !== null && _word$size !== void 0 ? _word$size : 0,
                  rotation: (_word$rotate = word.rotate) !== null && _word$rotate !== void 0 ? _word$rotate : 0,
                  x: (_word$x = word.x) !== null && _word$x !== void 0 ? _word$x : 0,
                  y: (_word$y = word.y) !== null && _word$y !== void 0 ? _word$y : 0
                };
                elements[word.text] = wordElement;
              } else {
                var _word$size2, _word$rotate2, _word$x2, _word$y2;
                wordElement.fontSize = (_word$size2 = word.size) !== null && _word$size2 !== void 0 ? _word$size2 : 0;
                wordElement.rotation = (_word$rotate2 = word.rotate) !== null && _word$rotate2 !== void 0 ? _word$rotate2 : 0;
                wordElement.x = (_word$x2 = word.x) !== null && _word$x2 !== void 0 ? _word$x2 : 0;
                wordElement.y = (_word$y2 = word.y) !== null && _word$y2 !== void 0 ? _word$y2 : 0;
              }
            }
            var existingWords = words.filter(w => w.text).map(w => w.text);
            for (var _i = 0, _Object$keys = Object.keys(elements); _i < _Object$keys.length; _i++) {
              var wordKey = _Object$keys[_i];
              if (!existingWords.includes(wordKey)) {
                elements[wordKey].fontSize = 0;
                elements[wordKey].x = 0;
                elements[wordKey].y = 0;
                elements[wordKey].rotation = 0;
              }
            }
            animationFrame = requestAnimationFrame(animateWordsFrame);
          }
          function animateWordsFrame(time) {
            if (animationStartTime === null) {
              animationStartTime = time;
            }
            var duration = Math.min(time - animationStartTime, props.animationDuration);
            var progress = duration / props.animationDuration;
            var isLastFrame = duration === props.animationDuration;
            for (var _i2 = 0, _Object$keys2 = Object.keys(elements); _i2 < _Object$keys2.length; _i2++) {
              var word = _Object$keys2[_i2];
              var wordElement = elements[word];
              var fontSize = mapAnimationValue(wordElement.previousFontSize, wordElement.fontSize, progress);
              var x = mapAnimationValue(wordElement.previousX, wordElement.x, progress);
              var y = mapAnimationValue(wordElement.previousY, wordElement.y, progress);
              var rotation = mapAnimationValue(wordElement.previousRotation, wordElement.rotation, progress);
              wordElement.element.style.fontSize = "".concat(fontSize, "px");
              wordElement.element.style.transform = "translate(".concat(x, "px, ").concat(y, "px) rotate(").concat(rotation, "deg)");
              if (isLastFrame) {
                if (wordElement.fontSize === 0) {
                  wordElement.element.remove();
                  delete elements[word];
                } else {
                  wordElement.previousFontSize = wordElement.fontSize;
                  wordElement.previousX = wordElement.x;
                  wordElement.previousY = wordElement.y;
                  wordElement.previousRotation = wordElement.rotation;
                }
              }
            }
            if (!isLastFrame) {
              animationFrame = requestAnimationFrame(animateWordsFrame);
            } else {
              animationStartTime = null;
              animationFrame = null;
              emit("endDraw");
              if (isUpdateRequested) {
                processWords();
              }
            }
          }
          function processWords() {
            isUpdateRequested = false;
            lastUpdate = Date.now();
            if (!svgElement.value) {
              return;
            }
            emit("beginDraw");
            if (props.words.length === 0) {
              return renderWords([]);
            }
            var wordLookup = {};
            var _iterator = _createForOfIteratorHelper(props.words),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _wordLookup$word;
                var word = _step.value;
                wordLookup[word] = ((_wordLookup$word = wordLookup[word]) !== null && _wordLookup$word !== void 0 ? _wordLookup$word : 0) + 1;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            var words = Object.entries(wordLookup).map(e => ({
              text: e[0],
              size: e[1]
            })).sort((a, b) => a.size - b.size);
            var min = Math.min(...words.map(w => {
              var _w$size;
              return (_w$size = w.size) !== null && _w$size !== void 0 ? _w$size : 0;
            }));
            var max = Math.max(...words.map(w => {
              var _w$size2;
              return (_w$size2 = w.size) !== null && _w$size2 !== void 0 ? _w$size2 : 0;
            }));
            var fontSizeScale = createLogScale(props.minimumFontSize, props.maximumFontSize, min, max);
            cloud().size([getWidth(), getHeight()]).timeInterval(25).spiral("archimedean").words(words).padding(5).rotate(() => angles.value[Math.floor(Math.random() * angles.value.length)]).font(props.fontName).fontSize(d => {
              var _d$size;
              return Math.floor(fontSizeScale((_d$size = d.size) !== null && _d$size !== void 0 ? _d$size : 0));
            }).on("end", renderWords).start();
          }
          function requestUpdate(ignoreSize) {
            if (!ignoreSize && lastObserverSize.width === getWidth() && lastObserverSize.height === getHeight()) {
              return;
            }
            lastObserverSize = {
              width: getWidth(),
              height: getHeight()
            };
            if (animationFrame === null) {
              processWords();
            } else {
              isUpdateRequested = true;
            }
          }
          onMounted(() => {
            if (!svgElement.value) {
              return;
            }
            if (window.ResizeObserver) {
              lastObserverSize = {
                width: getWidth(),
                height: getHeight()
              };
              resizeObserver = new ResizeObserver(() => {
                requestUpdate(false);
              });
              resizeObserver.observe(svgElement.value);
            }
            requestUpdate(true);
          });
          onBeforeUnmount(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) === null || _resizeObserver === void 0 ? void 0 : _resizeObserver.disconnect();
          });
          var requestUpdateValues = [() => props.words, () => props.angleCount, () => props.minimumAngle, () => props.maximumAngle, () => props.fontName, () => props.minimumFontSize, () => props.maximumFontSize, () => props.colors, () => props.wordPadding];
          watch(requestUpdateValues, () => {
            if (deferredUpdateTimer) {
              return;
            }
            if (props.minimumUpdateInterval > 0 && lastUpdate > 0 && Object.keys(elements).length > 0) {
              var period = lastUpdate + props.minimumUpdateInterval - Date.now();
              if (period > 0) {
                deferredUpdateTimer = window.setTimeout(() => {
                  deferredUpdateTimer = null;
                  requestUpdate(true);
                }, period);
                return;
              }
            }
            requestUpdate(true);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("svg", {
              ref_key: "svgElement",
              ref: svgElement,
              class: "rock-word-cloud",
              style: normalizeStyle(unref(svgStyle))
            }, null, 4);
          };
        }
      }));

      script.__file = "Framework/Controls/wordCloud.obs";

    })
  };
}));
//# sourceMappingURL=wordCloud.obs.js.map
