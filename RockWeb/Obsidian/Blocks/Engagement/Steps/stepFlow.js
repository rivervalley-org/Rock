System.register(['@Obsidian/Utility/block', 'vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/rockButton', '@Obsidian/Templates/block', '@Obsidian/Controls/sectionHeader', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/slidingDateRangePicker.obs', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/dropDownList', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/guid', '@Obsidian/Utility/url'], (function (exports) {
  'use strict';
  var useInvokeBlockAction, useConfigurationValues, defineComponent, computed, reactive, ref, NotificationBox, RockButton, Block, SectionHeader, RockForm, SlidingDateRangePicker, NumberBox, DropDownList, toDecimalPlaces, emptyGuid, syncRefsWithQueryParams;
  return {
    setters: [function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
    }, function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      reactive = module.reactive;
      ref = module.ref;
    }, function (module) {
      NotificationBox = module["default"];
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
      var FlowNodeDiagramLevel = defineComponent({
        name: "FlowNodeDiagramLevel",
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
        events: {
          showTooltip: (_html, _e) => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
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
            return "edge node-".concat(flow.sourceId, " node-").concat(flow.targetId, " level-").concat(props.levelNumber - 1, "_").concat(props.levelNumber);
          }
          function onHoverFlow(flow, e) {
            emit("showTooltip", flow.tooltip, e);
          }
          function onHoverNode(node, e) {
            emit("showTooltip", "<strong>".concat(node.name, "</strong><br>Total Steps Taken: ").concat(node.totalUnits), e);
          }
          function onUnHover() {
            emit("showTooltip");
          }
          return {
            visibleNodes,
            flowPoints,
            textTransform,
            nodeClass,
            flowClass,
            onHoverFlow,
            onHoverNode,
            onUnHover
          };
        },
        template: "\n<g v-if=\"levelNumber == 1\">\n    <text v-for=\"node in visibleNodes\" key=\"node.id + 'text'\" :x=\"node.x - 6\" :y=\"node.y\" :transform=\"textTransform(node)\" font-size=\"12\" text-anchor=\"end\">\n        {{ node.order }}\n    </text>\n</g>\n<g v-if=\"levelNumber > 1\">\n    <template v-for=\"node in levelData\" key=\"node.id + 'flows'\">\n        <path\n            v-for=\"(flow, index) in node.inFlows\"\n            key=\"node.id + 'flow' + index\"\n            :d=\"flowPoints(flow)\"\n            fill=\"rgb(170, 170, 170, 0.6)\"\n            @mousemove=\"onHoverFlow(flow, $event)\"\n            @mouseout=\"onUnHover\"\n            :class=\"flowClass(flow)\"\n        ></path>\n    </template>\n</g>\n<g>\n    <rect\n        v-for=\"node in levelData\"\n        key=\"node.id\" :x=\"node.x\"\n        :y=\"node.y\"\n        :width=\"node.width\"\n        :height=\"node.height\"\n        :fill=\"node.color\"\n        :class=\"nodeClass(node)\"\n        @mousemove=\"onHoverNode(node, $event)\"\n        @mouseout=\"onUnHover\"\n    ></rect>\n</g>\n"
      });
      var FlowNodeDiagram = defineComponent({
        name: "FlowNodeDiagram",
        components: {
          FlowNodeDiagramLevel
        },
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
        setup(props) {
          var settings = computed(() => {
            var settings = _objectSpread2({}, defaultSettings);
            Object.entries(props.settings).forEach(_ref4 => {
              var _ref5 = _slicedToArray(_ref4, 2),
                key = _ref5[0],
                value = _ref5[1];
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
              var totalLevelUnits = levelFlows.reduce((tot, _ref6) => {
                var units = _ref6.units;
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
          var tooltip = reactive({
            isShown: false,
            html: "",
            x: 0,
            y: 0,
            side: "left"
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
          return {
            settings,
            nodeCount,
            levelsCount,
            chartWidth,
            chartHeight,
            diagramData,
            tooltip,
            showTooltip
          };
        },
        template: "\n<v-style>\n.flow-node-diagram-container {\n    position: relative;\n    width: max-content;\n    max-width: 100%;\n    margin: 0 auto;\n}\n\n.flow-node-diagram-container .flow-tooltip {\n    position: absolute;\n    background: #fff;\n    {{ tooltip.side }}: {{ tooltip.x }}px;\n    top: {{ tooltip.y }}px;\n    max-width: 260px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 8px;\n    font-size: 14px;\n    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05)\n}\n\n.flow-node-diagram-container svg {\n    width: {{ chartWidth }}px;\n    max-width: 100%;\n    height: auto;\n    min-height: 50px;\n}\n\n.flow-node-diagram-container .loadingContainer {\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba(255,255,255,.75);\n}\n\n.flow-node-diagram-container .loadingContainer h3 {\n    margin: 0;\n}\n\n.flow-node-diagram-container .fade-enter-from,\n.flow-node-diagram-container .fade-leave-to {\n    opacity: 0;\n}\n\n.flow-node-diagram-container .fade-enter-active,\n.flow-node-diagram-container .fade-leave-active {\n    transition: opacity .2s ease-in-out;\n}\n\n.step-flow-svg .edge:hover {\n    fill: rgba(170, 170, 170, 0.8);\n}\n.flow-legend {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin: 20px auto 0;\n    gap: 12px;\n    width: 100%;\n}\n.flow-key {\n    display: inline-flex;\n    align-items: center;\n    font-size: 12px;\n    line-height: 1.1;\n}\n.flow-key .color {\n    width: 18px;\n    height: 18px;\n    margin-right: 4px;\n    border-radius: 3px;\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);\n}\n</v-style>\n\n<div class=\"flow-node-diagram-container\">\n    <div class=\"flow-tooltip\" v-html=\"tooltip.html\" v-if=\"tooltip.isShown\" />\n\n    <svg class=\"step-flow-svg mx-auto\" :width=\"chartWidth\" :height=\"chartHeight\" :viewBox=\"'0 0 ' + chartWidth + ' ' + chartHeight\">\n        <FlowNodeDiagramLevel\n            v-for=\"(level, levelNum) in diagramData\"\n            :key=\"'level' + levelNum\"\n            :levelData=\"level\"\n            :levelNumber=\"levelNum + 1\"\n            @showTooltip=\"showTooltip\"\n        />\n    </svg>\n\n    <div class=\"step-flow-legend\" v-html=\"settings.legendHtml\" />\n\n    <transition name=\"fade\" appear>\n        <div v-if=\"isLoading\" class=\"loadingContainer\">\n            <h3>Loading...</h3>\n        </div>\n    </transition>\n</div>\n"
      });

      var stepFlow = exports('default', defineComponent({
        name: "Steps.StepFlow",
        components: {
          Block,
          NotificationBox,
          RockButton,
          SectionHeader,
          RockForm,
          SlidingDateRangePicker,
          NumberBox,
          DropDownList,
          FlowNodeDiagram
        },
        setup() {
          var _configurationValues$;
          var invokeBlockAction = useInvokeBlockAction();
          var configurationValues = useConfigurationValues();
          var flowNodes = ref([]);
          var flowEdges = ref([]);
          var legendHtml = ref("");
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
              var _dateRange$value, _dateRange$value2;
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
              var response = yield invokeBlockAction("GetData", {
                dateRange: dateRangeParam,
                maxLevels: maxLevels.value,
                campus: campus.value
              });
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
          return {
            flowNodes,
            flowEdges,
            legendHtml,
            isLoading,
            dateRange,
            maxLevels,
            campus,
            campusOptions,
            settings,
            configurationValues,
            fetchData
          };
        },
        template: "\n<Block title=\"Step Flow\">\n    <template v-if=\"configurationValues.programName\" #default>\n        <SectionHeader :title=\"configurationValues.programName + ' Path Flow'\" :description=\"'The flow below shows how individuals move through the ' + configurationValues.stepTypeCount + ' step types in the ' + configurationValues.programName + ' Path program. You can filter the steps shown by date range or the number of levels to limit&nbsp;to.'\" />\n\n        <RockForm @submit=\"fetchData\">\n            <div class=\"row form-row d-flex align-items-start flex-wrap\">\n                <div class=\"col-xs-12 col-lg-3\">\n                    <SlidingDateRangePicker v-model=\"dateRange\" formGroupClasses=\"\" label=\"Step Completion Date Range\" help=\"Limit steps to those that have been completed in the provided date range.\" />\n                </div>\n                <NumberBox v-model=\"maxLevels\" :decimalCount=\"0\" :minimumValue=\"2\" rules=\"required\" formGroupClasses=\"col\" label=\"Max Levels to Display\" help=\"The maximum number of levels to show in the flow. It's possible that an individual could take the same level twice in the course of completing a step program.\" />\n                <DropDownList v-model=\"campus\" formGroupClasses=\"col\" label=\"Campus\" :items=\"campusOptions\" :showBlankItem=\"false\" />\n                <div class=\"col flex-grow-0\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">&nbsp;</label>\n                        <RockButton class=\"btn-square\" type=\"submit\" :disabled=\"isLoading\"><i class=\"fa fa-refresh\" :class=\"{'fa-spin': isLoading}\"></i></RockButton>\n                    </div>\n                </div>\n            </div>\n        </RockForm>\n\n        <FlowNodeDiagram :flowNodes=\"flowNodes\" :flowEdges=\"flowEdges\" :isLoading=\"isLoading\" :settings=\"settings\" />\n    </template>\n\n    <template v-else #default>\n        <NotificationBox alert-type=\"warning\">No Step Program ID Provided</NotificationBox>\n    </template>\n</Block>"
      }));

    })
  };
}));
//# sourceMappingURL=stepFlow.js.map
