System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Templates/block', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/slidingDateRangePicker.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/guid', '@Obsidian/Utility/url'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createElementBlock, Fragment, renderList, unref, toDisplayString, createCommentVNode, normalizeClass, createElementVNode, reactive, normalizeStyle, createBlock, createVNode, Transition, withCtx, ref, resolveComponent, createSlots, createTextVNode, useInvokeBlockAction, useConfigurationValues, RockButton, Block, SectionHeader, RockForm, SlidingDateRangePicker, NumberBox, DropDownList, toDecimalPlaces, emptyGuid, toGuidOrNull, syncRefsWithQueryParams;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      unref = module.unref;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      normalizeClass = module.normalizeClass;
      createElementVNode = module.createElementVNode;
      reactive = module.reactive;
      normalizeStyle = module.normalizeStyle;
      createBlock = module.createBlock;
      createVNode = module.createVNode;
      Transition = module.Transition;
      withCtx = module.withCtx;
      ref = module.ref;
      resolveComponent = module.resolveComponent;
      createSlots = module.createSlots;
      createTextVNode = module.createTextVNode;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      Block = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      SlidingDateRangePicker = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      toDecimalPlaces = module.toDecimalPlaces;
    }, function (module) {
      emptyGuid = module.emptyGuid;
      toGuidOrNull = module.toGuidOrNull;
    }, function (module) {
      syncRefsWithQueryParams = module.syncRefsWithQueryParams;
    }],
    execute: (function () {

      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
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
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
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
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

      var _hoisted_1$2 = {
        key: 0,
        class: "flow-level"
      };
      var _hoisted_2$2 = ["x", "y", "transform"];
      var _hoisted_3$2 = {
        key: 1,
        class: "flow-edges"
      };
      var _hoisted_4$2 = ["d", "onMousemove"];
      var _hoisted_5$2 = {
        class: "flow-sections"
      };
      var _hoisted_6$1 = ["x", "y", "width", "height", "fill", "onMousemove"];
      var script$2 = defineComponent({
        name: 'flowNodeDiagramLevel.partial',
        props: {
          levelData: {
            type: Array,
            required: true
          },
          levelNumber: {
            type: Number,
            required: true
          }
        },
        emits: ["showTooltip"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          function round(num) {
            return toDecimalPlaces(num, 2);
          }
          var visibleNodes = computed(() => {
            return props.levelData.filter(node => node.height > 0);
          });
          function flowPoints(_ref2) {
            var sourcePoint = _ref2.sourcePoint,
              targetPoint = _ref2.targetPoint,
              thickness = _ref2.thickness;
            var oneThirdX = round((targetPoint.x - sourcePoint.x) / 3) + sourcePoint.x;
            var twoThirdsX = round((targetPoint.x - sourcePoint.x) * 2 / 3) + sourcePoint.x;
            var sourceBottom = sourcePoint.y + thickness;
            var targetBottom = targetPoint.y + thickness;
            var start = "M".concat(sourcePoint.x, " ").concat(sourcePoint.y);
            var curve1 = "C".concat(oneThirdX, " ").concat(sourcePoint.y, " ").concat(twoThirdsX, " ").concat(targetPoint.y, " ").concat(targetPoint.x, " ").concat(targetPoint.y);
            var vertical1 = "V".concat(targetBottom);
            var curve2 = "C".concat(twoThirdsX, " ").concat(targetBottom, " ").concat(oneThirdX, " ").concat(sourceBottom, " ").concat(sourcePoint.x, " ").concat(sourceBottom);
            var vertical2 = "V".concat(sourcePoint.y);
            var end = "Z";
            return start + curve1 + vertical1 + curve2 + vertical2 + end;
          }
          function textTransform(_ref3) {
            var x = _ref3.x,
              y = _ref3.y;
            return "rotate(-90, ".concat(x - 6, ", ").concat(y, ")");
          }
          function nodeClass(node) {
            return "node node-".concat(node.id, " level-").concat(props.levelNumber);
          }
          function flowClass(flow) {
            return "edge node-".concat(flow.sourceId, " node-").concat(flow.targetId, " level-").concat(props.levelNumber - 1, " level-").concat(props.levelNumber - 1, "_").concat(props.levelNumber);
          }
          function onHoverFlow(flow, e) {
            var _flow$tooltip;
            emit("showTooltip", (_flow$tooltip = flow.tooltip) !== null && _flow$tooltip !== void 0 ? _flow$tooltip : undefined, e);
          }
          function onHoverNode(node, e) {
            emit("showTooltip", "<strong>".concat(node.name, "</strong><br>Total Steps Taken: ").concat(node.totalUnits), e);
          }
          function onUnHover() {
            emit("showTooltip");
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [__props.levelNumber == 1 ? (openBlock(), createElementBlock("g", _hoisted_1$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(visibleNodes), node => {
              return openBlock(), createElementBlock("text", {
                key: "node.id + 'text'",
                x: node.x - 6,
                y: node.y,
                transform: textTransform(node),
                "font-size": "12",
                "text-anchor": "end"
              }, toDisplayString(node.order), 9, _hoisted_2$2);
            }), 128))])) : createCommentVNode("v-if", true), __props.levelNumber > 1 ? (openBlock(), createElementBlock("g", _hoisted_3$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.levelData, node => {
              return openBlock(), createElementBlock(Fragment, {
                key: "node.id + 'flows'"
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(node.inFlows, (flow, index) => {
                return openBlock(), createElementBlock("path", {
                  key: "node.id + 'flow' + index",
                  d: flowPoints(flow),
                  fill: "rgb(170, 170, 170, 0.6)",
                  onMousemove: $event => onHoverFlow(flow, $event),
                  onMouseout: onUnHover,
                  class: normalizeClass(flowClass(flow))
                }, null, 42, _hoisted_4$2);
              }), 128))], 64);
            }), 128))])) : createCommentVNode("v-if", true), createElementVNode("g", _hoisted_5$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.levelData, node => {
              var _node$color;
              return openBlock(), createElementBlock("rect", {
                key: "node.id",
                x: node.x,
                y: node.y,
                width: node.width,
                height: node.height,
                fill: (_node$color = node.color) !== null && _node$color !== void 0 ? _node$color : undefined,
                class: normalizeClass(nodeClass(node)),
                onMousemove: $event => onHoverNode(node, $event),
                onMouseout: onUnHover
              }, null, 42, _hoisted_6$1);
            }), 128))])], 64);
          };
        }
      });

      script$2.__file = "src/Engagement/Steps/StepFlow/flowNodeDiagramLevel.partial.obs";

      var _hoisted_1$1 = {
        class: "flow-node-diagram-container"
      };
      var _hoisted_2$1 = ["innerHTML"];
      var _hoisted_3$1 = ["width", "height", "viewBox"];
      var _hoisted_4$1 = ["innerHTML"];
      var _hoisted_5$1 = {
        key: 0,
        class: "loadingContainer"
      };
      var _hoisted_6 = createElementVNode("h3", null, "Loading...", -1);
      var _hoisted_7 = [_hoisted_6];
      var script$1 = defineComponent({
        name: 'flowNodeDiagram.partial',
        props: {
          flowNodes: {
            type: Array,
            default: () => []
          },
          flowEdges: {
            type: Array,
            default: () => []
          },
          legendHtml: {
            type: Boolean,
            default: false
          },
          settings: {
            type: Object,
            default: () => ({})
          },
          isLoading: {
            type: Boolean,
            default: false
          }
        },
        setup(__props) {
          var props = __props;
          var defaultSettings = {
            nodeWidth: 12,
            nodeVerticalSpacing: 12,
            chartWidth: 1200,
            chartHeight: 900,
            legendHtml: ""
          };
          function round(num) {
            return toDecimalPlaces(num, 2);
          }
          var tooltip = reactive({
            isShown: false,
            html: "",
            x: 0,
            y: 0,
            side: "left"
          });
          var settings = computed(() => {
            var settings = _objectSpread2({}, defaultSettings);
            Object.entries(props.settings).forEach(_ref => {
              var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];
              if (value !== undefined && value !== null) {
                settings[key] = value;
              }
            });
            return settings;
          });
          var nodeCount = computed(() => props.flowNodes.length);
          var levelsCount = computed(() => props.flowEdges.reduce((count, edge) => Math.max(count, edge.level), 0));
          var chartWidth = computed(() => settings.value.chartWidth);
          var nodeHorizontalSpacing = computed(() => {
            var flowSpace = settings.value.chartWidth - settings.value.nodeWidth * levelsCount.value - 24;
            return flowSpace / (levelsCount.value - 1);
          });
          var chartHeight = computed(() => nodeCount.value > 0 ? settings.value.chartHeight : 50);
          var diagramData = computed(() => {
            var orderedNodes = [...props.flowNodes].sort((nodeA, nodeB) => nodeA.order - nodeB.order);
            if (levelsCount.value == 0) {
              return [];
            }
            var data = [];
            var _settings$value = settings.value,
              nodeWidth = _settings$value.nodeWidth,
              nodeVerticalSpacing = _settings$value.nodeVerticalSpacing,
              chartHeight = _settings$value.chartHeight;
            var totalNodeVerticalGap = nodeVerticalSpacing * (nodeCount.value - 1);
            var previousTotalUnits = 0;
            var useableHeight = chartHeight - totalNodeVerticalGap - 50;
            var previousX = 0;
            var currentX = 24;
            var flowPositionData = [[]];
            var _loop = function _loop(level) {
              flowPositionData.push([]);
              var levelFlows = props.flowEdges.filter(flow => flow.level == level);
              var totalLevelUnits = levelFlows.reduce((tot, _ref3) => {
                var units = _ref3.units;
                return tot + units;
              }, 0);
              if (level > 1) {
                useableHeight = round(totalLevelUnits / previousTotalUnits * useableHeight);
              }
              var currentY = (chartHeight - (useableHeight + totalNodeVerticalGap)) / 2;
              var levelNodes = orderedNodes.map(node => {
                var nodeInFlows = levelFlows.filter(flow => flow.targetId == node.id).sort((flowA, flowB) => {
                  var nodeOrderA = orderedNodes.findIndex(node => node.id == flowA.sourceId);
                  var nodeOrderB = orderedNodes.findIndex(node => node.id == flowB.sourceId);
                  return nodeOrderA - nodeOrderB;
                });
                var totalUnits = nodeInFlows.reduce((total, flow) => total + flow.units, 0);
                var height = round(totalUnits / totalLevelUnits * useableHeight);
                var nodeFlowPosition = {
                  id: node.id,
                  nextLeftY: currentY,
                  nextRightY: currentY
                };
                flowPositionData[level].push(nodeFlowPosition);
                var inFlows = nodeInFlows.map(flow => {
                  var sourcePoint = {
                    x: previousX + nodeWidth,
                    y: 0
                  };
                  var targetPoint = {
                    x: currentX,
                    y: nodeFlowPosition.nextLeftY
                  };
                  var thickness = round(flow.units / totalUnits * height);
                  nodeFlowPosition.nextLeftY += thickness;
                  if (level > 1) {
                    var prevNodeFlowPosition = flowPositionData[level - 1].find(node => node.id == flow.sourceId);
                    if (prevNodeFlowPosition) {
                      sourcePoint.y = prevNodeFlowPosition.nextRightY;
                      prevNodeFlowPosition.nextRightY += thickness;
                    }
                  }
                  return _objectSpread2(_objectSpread2({}, flow), {}, {
                    sourcePoint,
                    targetPoint,
                    thickness
                  });
                });
                var levelNode = _objectSpread2(_objectSpread2({}, node), {}, {
                  x: currentX,
                  y: currentY,
                  width: nodeWidth,
                  height,
                  totalUnits,
                  inFlows
                });
                currentY += height + (height > 0 ? nodeVerticalSpacing : 0);
                return levelNode;
              });
              previousTotalUnits = totalLevelUnits;
              previousX = currentX;
              currentX += nodeWidth + nodeHorizontalSpacing.value;
              data.push(levelNodes);
            };
            for (var level = 1; level <= levelsCount.value; level++) {
              _loop(level);
            }
            return data;
          });
          var tooltipStyles = computed(() => {
            var styles = {};
            if (tooltip.side === "left") {
              styles.left = "".concat(tooltip.x, "px");
            } else {
              styles.right = "".concat(tooltip.x, "px");
            }
            styles.top = "".concat(tooltip.y, "px");
            return styles;
          });
          function showTooltip(html, e) {
            if (html && e) {
              tooltip.isShown = true;
              tooltip.html = html;
              tooltip.x = e.offsetX + 15;
              tooltip.y = e.offsetY + 15;
              if (e.clientX + 250 > document.documentElement.clientWidth) {
                tooltip.x = 0;
                tooltip.side = "right";
              } else {
                tooltip.side = "left";
              }
            } else {
              tooltip.isShown = false;
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$1, [tooltip.isShown ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "flow-tooltip",
              innerHTML: tooltip.html,
              style: normalizeStyle(unref(tooltipStyles))
            }, null, 12, _hoisted_2$1)) : createCommentVNode("v-if", true), (openBlock(), createElementBlock("svg", {
              class: "step-flow-svg mx-auto",
              width: unref(chartWidth),
              height: unref(chartHeight),
              viewBox: '0 0 ' + unref(chartWidth) + ' ' + unref(chartHeight)
            }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(diagramData), (level, levelNum) => {
              return openBlock(), createBlock(unref(script$2), {
                key: 'level' + levelNum,
                levelData: level,
                levelNumber: levelNum + 1,
                onShowTooltip: showTooltip
              }, null, 8, ["levelData", "levelNumber"]);
            }), 128))], 8, _hoisted_3$1)), createElementVNode("div", {
              class: "step-flow-legend",
              innerHTML: unref(settings).legendHtml
            }, null, 8, _hoisted_4$1), createVNode(Transition, {
              name: "fade",
              appear: ""
            }, {
              default: withCtx(() => [__props.isLoading ? (openBlock(), createElementBlock("div", _hoisted_5$1, _hoisted_7)) : createCommentVNode("v-if", true)]),
              _: 1
            })]);
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

      var css_248z = ".flow-node-diagram-container{margin:0 auto;max-width:100%;position:relative;width:max-content}.flow-node-diagram-container .flow-tooltip{background:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);font-size:14px;max-width:260px;padding:8px;position:absolute}.flow-node-diagram-container svg{height:auto;max-width:100%;min-height:50px}.flow-node-diagram-container .loadingContainer{align-items:center;background:hsla(0,0%,100%,.75);bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:0}.flow-node-diagram-container .loadingContainer h3{margin:0}.flow-node-diagram-container .fade-enter-from,.flow-node-diagram-container .fade-leave-to{opacity:0}.flow-node-diagram-container .fade-enter-active,.flow-node-diagram-container .fade-leave-active{transition:opacity .2s ease-in-out}.step-flow-svg .edge:hover{fill:hsla(0,0%,67%,.8)}.step-flow-svg .edge{animation:flow-edges .25s ease-in-out forwards;opacity:0;transform-origin:left center}.step-flow-svg .edge.level-2{animation-delay:.25s}.step-flow-svg .edge.level-3{animation-delay:.5s}.step-flow-svg .edge.level-4{animation-delay:.75s}.step-flow-svg .edge.level-5{animation-delay:1s}.step-flow-svg .edge.level-6{animation-delay:1.25s}@keyframes flow-edges{0%{-webkit-clip-path:inset(0 100% 0 0);clip-path:inset(0 100% 0 0);opacity:0}to{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0);opacity:1}}.flow-legend{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin:20px auto 0;width:100%}.flow-key{align-items:center;display:inline-flex;font-size:12px;line-height:1.1}.flow-key .color{border-radius:3px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08);height:18px;margin-right:4px;width:18px}";
      styleInject(css_248z);

      script$1.__file = "src/Engagement/Steps/StepFlow/flowNodeDiagram.partial.obs";

      var _hoisted_1 = {
        class: "row form-row d-flex align-items-start flex-wrap"
      };
      var _hoisted_2 = {
        class: "col-xs-12 col-lg-3"
      };
      var _hoisted_3 = {
        class: "col flex-grow-0"
      };
      var _hoisted_4 = {
        class: "form-group"
      };
      var _hoisted_5 = createElementVNode("label", {
        class: "control-label"
      }, " ", -1);
      var script = exports('default', defineComponent({
        name: 'stepFlow',
        setup(__props) {
          var _configurationValues$;
          var invokeBlockAction = useInvokeBlockAction();
          var configurationValues = useConfigurationValues();
          var flowNodes = ref([]);
          var flowEdges = ref([]);
          var isLoading = ref(false);
          var dateRange = ref(null);
          var maxLevels = ref(4);
          var campus = ref(emptyGuid);
          syncRefsWithQueryParams({
            dateRange,
            maxLevels,
            campus
          });
          var campusOptions = ref([{
            value: emptyGuid,
            text: "All Campuses",
            category: null
          }, ...((_configurationValues$ = configurationValues.campuses) !== null && _configurationValues$ !== void 0 ? _configurationValues$ : [])]);
          var settings = ref({
            nodeWidth: configurationValues.nodeWidth,
            nodeVerticalSpacing: configurationValues.nodeVerticalSpacing,
            chartWidth: configurationValues.chartWidth,
            chartHeight: configurationValues.chartHeight,
            legendHtml: configurationValues.legendHtml
          });
          function fetchData() {
            return _fetchData.apply(this, arguments);
          }
          function _fetchData() {
            _fetchData = _asyncToGenerator(function* () {
              var _dateRange$value, _dateRange$value2, _toGuidOrNull;
              if (isLoading.value) {
                return;
              }
              isLoading.value = true;
              var startDateString = (((_dateRange$value = dateRange.value) === null || _dateRange$value === void 0 ? void 0 : _dateRange$value.lowerDate) || "").replace(/-/g, "/");
              var startDate = startDateString.length > 0 ? new Date(startDateString).toISOString() : undefined;
              var endDateString = (((_dateRange$value2 = dateRange.value) === null || _dateRange$value2 === void 0 ? void 0 : _dateRange$value2.upperDate) || "").replace(/-/g, "/");
              var endDate = endDateString.length > 0 ? new Date(endDateString).toISOString() : undefined;
              var dateRangeParam = dateRange.value ? _objectSpread2({}, dateRange.value) : {
                rangeType: -1
              };
              dateRangeParam.lowerDate = startDate;
              dateRangeParam.upperDate = endDate;
              var request = {
                dateRange: dateRangeParam,
                maxLevels: maxLevels.value,
                campus: (_toGuidOrNull = toGuidOrNull(campus.value)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid
              };
              var response = yield invokeBlockAction("GetData", request);
              isLoading.value = false;
              if (response.data) {
                var _response$data$edges, _response$data$nodes;
                flowEdges.value = (_response$data$edges = response.data.edges) !== null && _response$data$edges !== void 0 ? _response$data$edges : [];
                flowNodes.value = (_response$data$nodes = response.data.nodes) !== null && _response$data$nodes !== void 0 ? _response$data$nodes : [];
              } else {
                throw new Error(response.errorMessage || "An error occurred");
              }
            });
            return _fetchData.apply(this, arguments);
          }
          fetchData();
          return (_ctx, _cache) => {
            var _component_NotificationBox = resolveComponent("NotificationBox");
            return openBlock(), createBlock(unref(Block), {
              title: "Step Flow"
            }, createSlots({
              _: 2
            }, [unref(configurationValues).programName ? {
              name: "default",
              fn: withCtx(() => [createVNode(unref(SectionHeader), {
                title: unref(configurationValues).programName + ' Path Flow',
                description: 'The flow below shows how individuals move through the ' + unref(configurationValues).stepTypeCount + ' step types in the ' + unref(configurationValues).programName + ' Path program. You can filter the steps shown by date range or the number of levels to limit to.'
              }, null, 8, ["title", "description"]), createVNode(unref(RockForm), {
                onSubmit: fetchData
              }, {
                default: withCtx(() => [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(SlidingDateRangePicker), {
                  modelValue: dateRange.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => dateRange.value = $event),
                  formGroupClasses: "",
                  label: "Step Completion Date Range",
                  help: "Limit steps to those that have been completed in the provided date range."
                }, null, 8, ["modelValue"])]), createVNode(unref(NumberBox), {
                  modelValue: maxLevels.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => maxLevels.value = $event),
                  decimalCount: 0,
                  minimumValue: 2,
                  rules: "required",
                  formGroupClasses: "col",
                  label: "Max Levels to Display",
                  help: "The maximum number of levels to show in the flow. It's possible that an individual could take the same level twice in the course of completing a step program."
                }, null, 8, ["modelValue"]), createVNode(unref(DropDownList), {
                  modelValue: campus.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => campus.value = $event),
                  formGroupClasses: "col",
                  label: "Campus",
                  items: campusOptions.value,
                  showBlankItem: false
                }, null, 8, ["modelValue", "items"]), createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [_hoisted_5, createVNode(unref(RockButton), {
                  class: "btn-square",
                  type: "submit",
                  disabled: isLoading.value
                }, {
                  default: withCtx(() => [createElementVNode("i", {
                    class: normalizeClass(["fa fa-refresh", {
                      'fa-spin': isLoading.value
                    }])
                  }, null, 2)]),
                  _: 1
                }, 8, ["disabled"])])])])]),
                _: 1
              }), createVNode(unref(script$1), {
                flowNodes: flowNodes.value,
                flowEdges: flowEdges.value,
                isLoading: isLoading.value,
                settings: settings.value
              }, null, 8, ["flowNodes", "flowEdges", "isLoading", "settings"])])
            } : {
              name: "default",
              fn: withCtx(() => [createVNode(_component_NotificationBox, {
                "alert-type": "warning"
              }, {
                default: withCtx(() => [createTextVNode("No Step Program ID Provided")]),
                _: 1
              })])
            }]), 1024);
          };
        }
      }));

      script.__file = "src/Engagement/Steps/stepFlow.obs";

    })
  };
}));
//# sourceMappingURL=stepFlow.obs.js.map
