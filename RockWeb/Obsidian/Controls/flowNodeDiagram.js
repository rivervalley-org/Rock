System.register([], (function () {
    'use strict';
    return {
        execute: (function () {

            System.register(["vue", "../Services/number"], function (exports_1, context_1) {
                var vue_1, number_1, defaultSettings, FlowNodeDiagramLevel;
                context_1 && context_1.id;
                function round(num) {
                    return number_1.toDecimalPlaces(num, 2);
                }
                return {
                    setters: [
                        function (vue_1_1) {
                            vue_1 = vue_1_1;
                        },
                        function (number_1_1) {
                            number_1 = number_1_1;
                        }
                    ],
                    execute: function () {
                        defaultSettings = {
                            nodeWidth: 12,
                            nodeVerticalSpacing: 12,
                            nodeHorizontalSpacing: 200,
                            chartHeight: 900
                        };
                        FlowNodeDiagramLevel = vue_1.defineComponent({
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
                            setup(props, { emit }) {
                                function flowPoints({ sourcePoint, targetPoint, thickness }) {
                                    const oneThirdX = round((targetPoint.x - sourcePoint.x) / 3) + sourcePoint.x;
                                    const twoThirdsX = round((targetPoint.x - sourcePoint.x) * 2 / 3) + sourcePoint.x;
                                    const sourceBottom = sourcePoint.y + thickness;
                                    const targetBottom = targetPoint.y + thickness;
                                    const start = `M${sourcePoint.x} ${sourcePoint.y}`;
                                    const curve1 = `C${oneThirdX} ${sourcePoint.y} ${twoThirdsX} ${targetPoint.y} ${targetPoint.x} ${targetPoint.y}`;
                                    const vertical1 = `V${targetBottom}`;
                                    const curve2 = `C${twoThirdsX} ${targetBottom} ${oneThirdX} ${sourceBottom} ${sourcePoint.x} ${sourceBottom}`;
                                    const vertical2 = `V${sourcePoint.y}`;
                                    const end = "Z";
                                    return start + curve1 + vertical1 + curve2 + vertical2 + end;
                                }
                                function textTransform({ x, y }) {
                                    return `rotate(-90, ${x - 6}, ${y})`;
                                }
                                function nodeClass(node) {
                                    return `node node-${node.id} level-${props.levelNumber}`;
                                }
                                function flowClass(flow) {
                                    return `edge node-${flow.sourceId} node-${flow.targetId} level-${props.levelNumber - 1}_${props.levelNumber}`;
                                }
                                function onHover(flow, e) {
                                    emit("showTooltip", flow.tooltip, e);
                                }
                                function onUnHover() {
                                    emit("showTooltip");
                                }
                                return {
                                    flowPoints,
                                    textTransform,
                                    nodeClass,
                                    flowClass,
                                    onHover,
                                    onUnHover
                                };
                            },
                            template: `
<g v-if="levelNumber == 1">
    <text v-for="node in levelData" key="node.id + 'text'" :x="node.x - 6" :y="node.y" :transform="textTransform(node)" dx="-3" font-size="12" text-anchor="end">
        {{ node.name }}
    </text>
</g>
<g v-if="levelNumber > 1">
    <template v-for="node in levelData" key="node.id + 'flows'">
        <path
            v-for="(flow, index) in node.inFlows"
            key="node.id + 'flow' + index"
            :d="flowPoints(flow)"
            fill="#AAAAAA"
            :fill-opacity="0.6"
            @mousemove="onHover(flow, $event)"
            @mouseout="onUnHover"
            :class="flowClass(flow)"
        ></path>
    </template>
</g>
<g>
    <rect
        v-for="node in levelData"
        key="node.id" :x="node.x"
        :y="node.y"
        :width="node.width"
        :height="node.height"
        :fill="node.color"
        :class="nodeClass(node)"
    ></rect>
</g>
`
                        });
                        exports_1("default", vue_1.defineComponent({
                            name: "FlowNodeDiagram",
                            components: { FlowNodeDiagramLevel },
                            props: {
                                flowNodes: {
                                    type: Array,
                                    default: () => []
                                },
                                flowEdges: {
                                    type: Array,
                                    default: () => []
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
                                const settings = vue_1.computed(() => (Object.assign(Object.assign({}, defaultSettings), props.settings)));
                                const nodeCount = vue_1.computed(() => props.flowNodes.length);
                                const levelsCount = vue_1.computed(() => props.flowEdges.reduce((count, edge) => Math.max(count, edge.level), 0));
                                const chartWidth = vue_1.computed(() => {
                                    const calculated = 24 + (settings.value.nodeWidth * nodeCount.value) + (settings.value.nodeHorizontalSpacing * (levelsCount.value - 1));
                                    return Math.max(calculated, 200);
                                });
                                const chartHeight = vue_1.computed(() => nodeCount.value > 0 ? settings.value.chartHeight : 50);
                                const diagramData = vue_1.computed(() => {
                                    const orderedNodes = [...props.flowNodes].sort((nodeA, nodeB) => nodeA.order - nodeB.order);
                                    if (levelsCount.value == 0) {
                                        return [];
                                    }
                                    const data = [];
                                    const { nodeWidth, nodeHorizontalSpacing, nodeVerticalSpacing, chartHeight } = settings.value;
                                    const totalNodeVerticalGap = nodeVerticalSpacing * (nodeCount.value - 1);
                                    let previousTotalUnits = 0;
                                    let useableHeight = chartHeight - totalNodeVerticalGap;
                                    let previousX = 0;
                                    let currentX = 24;
                                    const flowPositionData = [[]];
                                    for (let level = 1; level <= levelsCount.value; level++) {
                                        flowPositionData.push([]);
                                        const levelFlows = props.flowEdges.filter(flow => flow.level == level);
                                        const totalLevelUnits = levelFlows.reduce((tot, { units }) => tot + units, 0);
                                        if (level > 1) {
                                            useableHeight = round(totalLevelUnits / previousTotalUnits * useableHeight);
                                        }
                                        let currentY = (chartHeight - (useableHeight + totalNodeVerticalGap)) / 2;
                                        const levelNodes = orderedNodes.map(node => {
                                            const nodeInFlows = levelFlows.filter(flow => flow.targetId == node.id).sort((flowA, flowB) => {
                                                const nodeOrderA = orderedNodes.findIndex(node => node.id == flowA.sourceId);
                                                const nodeOrderB = orderedNodes.findIndex(node => node.id == flowB.sourceId);
                                                return nodeOrderA - nodeOrderB;
                                            });
                                            const totalUnits = nodeInFlows.reduce((total, flow) => total + flow.units, 0);
                                            const height = round(totalUnits / totalLevelUnits * useableHeight);
                                            const nodeFlowPosition = {
                                                id: node.id,
                                                nextLeftY: currentY,
                                                nextRightY: currentY
                                            };
                                            flowPositionData[level].push(nodeFlowPosition);
                                            const inFlows = nodeInFlows.map(flow => {
                                                const sourcePoint = { x: previousX + nodeWidth, y: 0 };
                                                const targetPoint = { x: currentX, y: nodeFlowPosition.nextLeftY };
                                                const thickness = round(flow.units / totalUnits * height);
                                                nodeFlowPosition.nextLeftY += thickness;
                                                if (level > 1) {
                                                    const prevNodeFlowPosition = flowPositionData[level - 1].find(node => node.id == flow.sourceId);
                                                    if (prevNodeFlowPosition) {
                                                        sourcePoint.y = prevNodeFlowPosition.nextRightY;
                                                        prevNodeFlowPosition.nextRightY += thickness;
                                                    }
                                                }
                                                return Object.assign(Object.assign({}, flow), { sourcePoint,
                                                    targetPoint,
                                                    thickness });
                                            });
                                            const levelNode = Object.assign(Object.assign({}, node), { x: currentX, y: currentY, width: nodeWidth, height,
                                                totalUnits,
                                                inFlows });
                                            currentY += height + nodeVerticalSpacing;
                                            return levelNode;
                                        });
                                        previousTotalUnits = totalLevelUnits;
                                        previousX = currentX;
                                        currentX += nodeWidth + nodeHorizontalSpacing;
                                        data.push(levelNodes);
                                    }
                                    return data;
                                });
                                const tooltip = vue_1.reactive({
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
                                        }
                                        else {
                                            tooltip.side = "left";
                                        }
                                    }
                                    else {
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
                            template: `
<v-style>
.flow-node-diagram-container {
    position: relative;
    width: max-content;
    max-width: 100%;
}

.flow-node-diagram-container .flow-tooltip {
    position: absolute;
    background: white;
    {{ tooltip.side }}: {{ tooltip.x }}px;
    top: {{ tooltip.y }}px;
    width: max-content;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 1rem;
}

.flow-node-diagram-container svg {
    width: {{ chartWidth }}px;
    max-width: 100%;
    height: auto;
    min-height: 50px;
}

.flow-node-diagram-container .loadingContainer {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255,255,255,.75);
}

.flow-node-diagram-container .loadingContainer h3 {
    margin: 0;
}

.flow-node-diagram-container .fade-enter-from,
.flow-node-diagram-container .fade-leave-to {
    opacity: 0;
}

.flow-node-diagram-container .fade-enter-active,
.flow-node-diagram-container .fade-leave-active {
    transition: opacity .2s ease-in-out;
}
</v-style>

<div class="flow-node-diagram-container">
    <div class="flow-tooltip" v-html="tooltip.html" v-if="tooltip.isShown" />

    <svg :width="chartWidth" :height="chartHeight" :viewBox="'0 0 ' + chartWidth + ' ' + chartHeight">
        <FlowNodeDiagramLevel
            v-for="(level, levelNum) in diagramData"
            key="levelNum"
            :levelData="level"
            :levelNumber="levelNum + 1"
            @showTooltip="showTooltip"
        />
    </svg>

    <transition name="fade" appear>
        <div v-if="isLoading" class="loadingContainer">
            <h3>Loading...</h3>
        </div>
    </transition>
</div>
`
                        }));
                    }
                };
            });

        })
    };
}));
