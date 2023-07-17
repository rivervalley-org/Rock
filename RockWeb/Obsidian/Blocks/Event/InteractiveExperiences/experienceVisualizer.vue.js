System.register(['tslib', 'vue', '@Obsidian/Controls/alert.vue', '@Obsidian/Libs/chart', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/wordCloud.vue', '@Obsidian/Utility/realTime', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/rockDateTime'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, watch, onMounted, openBlock, createElementBlock, normalizeClass, toDisplayString, createCommentVNode, createElementVNode, createVNode, reactive, createBlock, withCtx, createTextVNode, normalizeStyle, resolveDynamicComponent, Alert, Chart, toNumber, WordCloud, getTopic, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock, updateRefValue, RockDateTime;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            onMounted = module.onMounted;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            normalizeClass = module.normalizeClass;
            toDisplayString = module.toDisplayString;
            createCommentVNode = module.createCommentVNode;
            createElementVNode = module.createElementVNode;
            createVNode = module.createVNode;
            reactive = module.reactive;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createTextVNode = module.createTextVNode;
            normalizeStyle = module.normalizeStyle;
            resolveDynamicComponent = module.resolveDynamicComponent;
        }, function (module) {
            Alert = module["default"];
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
            updateRefValue = module.updateRefValue;
        }, function (module) {
            RockDateTime = module.RockDateTime;
        }],
        execute: (function () {

            exports('render', render);

            const visualizerProps = {
                renderConfiguration: {
                    type: Object,
                    required: true
                },
                responses: {
                    type: Array,
                    required: true
                }
            };

            const _sfc_main$2 = defineComponent({
                name: 'barChart.partial',
                props: visualizerProps,
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const canvasElement = ref(null);
                    const colorConsumer = createSequentialConsumer(getColors(), 0);
                    let chart = null;
                    const additionalVisualizerClasses = computed(() => {
                        return `experience-visualizer-${props.renderConfiguration.actionId}`;
                    });
                    const borderWidth = computed(() => {
                        var _a;
                        const value = toNumber(((_a = props.renderConfiguration.configurationValues) === null || _a === void 0 ? void 0 : _a.borderWidth) || "4");
                        return Math.min(100, Math.max(0, value));
                    });
                    const fillOpacity = computed(() => {
                        var _a;
                        const value = toNumber(((_a = props.renderConfiguration.configurationValues) === null || _a === void 0 ? void 0 : _a.fillOpacity) || "0.5");
                        return Math.min(1.0, Math.max(0, value));
                    });
                    function getColors() {
                        var _a, _b;
                        let barColors = ((_b = (_a = props.renderConfiguration.configurationValues) === null || _a === void 0 ? void 0 : _a.colors) !== null && _b !== void 0 ? _b : "")
                            .split(",")
                            .map(c => c.trim())
                            .filter(c => c !== "");
                        if (barColors.length === 0) {
                            barColors = ["#709ac7", "#80bb7c", "#f26863", "#80afcb", "#e48480", "#c48cb2", "#ea872e", "#f4cf68", "#968e8b", "#489b98", "#b18772", "#d67493"];
                        }
                        return barColors.map(c => parseCssColor(c));
                    }
                    function parseCssColor(str) {
                        var _a;
                        const div = document.createElement("div");
                        document.body.appendChild(div);
                        div.style.color = str;
                        const res = (_a = getComputedStyle(div).color.match(/[.\d]+/g)) === null || _a === void 0 ? void 0 : _a.map(Number);
                        div.remove();
                        if (!res) {
                            return { r: 0, g: 0, b: 0, a: 0 };
                        }
                        return res.length === 3
                            ? { r: res[0], g: res[1], b: res[2], a: 1 }
                            : { r: res[0], g: res[1], b: res[2], a: res[3] };
                    }
                    function createSequentialConsumer(values, seed) {
                        const items = [...values];
                        let index = seed % items.length;
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
                        const ratio = document.body.clientWidth / 1920.0;
                        return baseSize * ratio;
                    }
                    function getStyleValue(style, variableName, defaultValue) {
                        const value = style.getPropertyValue(`--${variableName}`);
                        if (value !== "") {
                            return value;
                        }
                        return defaultValue;
                    }
                    function getStyleFontSize(style, variableName, defaultSize) {
                        const value = style.getPropertyValue(`--${variableName}`);
                        if (value !== "" && !isNaN(parseFloat(value))) {
                            return parseFloat(value);
                        }
                        return getScaledFontSize(defaultSize);
                    }
                    function getResponseData() {
                        const words = {};
                        for (const response of props.responses) {
                            if (!response.response) {
                                continue;
                            }
                            if (typeof words[response.response] === "undefined") {
                                words[response.response] = 1;
                            }
                            else {
                                words[response.response] += 1;
                            }
                        }
                        return Object.keys(words)
                            .map(k => ({ text: k, count: words[k] }))
                            .sort((a, b) => a.text.localeCompare(b.text));
                    }
                    function toCssRgba(color, alphaAdjust) {
                        return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * (alphaAdjust !== null && alphaAdjust !== void 0 ? alphaAdjust : 1)})`;
                    }
                    function getChartData() {
                        const backgroundColors = [];
                        const borderColors = [];
                        const values = [];
                        const labels = [];
                        const words = getResponseData();
                        for (const word of words) {
                            const color = colorConsumer();
                            labels.push(word.text);
                            values.push(word.count);
                            backgroundColors.push(toCssRgba(color, fillOpacity.value));
                            borderColors.push(toCssRgba(color));
                        }
                        const data = {
                            labels: labels,
                            datasets: [
                                {
                                    data: values,
                                    backgroundColor: backgroundColors,
                                    borderColor: borderColors,
                                    borderWidth: fillOpacity.value < 1 ? borderWidth.value : 0
                                }
                            ]
                        };
                        return data;
                    }
                    function getChartConfig(style) {
                        var _a;
                        const axisDefaultColor = getStyleValue(style, "experience-visualizer-primary-color", "#000");
                        const xAxisFontSize = getStyleFontSize(style, "major-axis-font-size", 24);
                        const yAxisFontSize = getStyleFontSize(style, "minor-axis-font-size", 36);
                        const xAxisColor = getStyleValue(style, "major-axis-color", axisDefaultColor);
                        const yAxisColor = getStyleValue(style, "minor-axis-color", axisDefaultColor);
                        const isHorizontal = ((_a = props.renderConfiguration.configurationValues) === null || _a === void 0 ? void 0 : _a.orientation) === "horizontal";
                        const majorScale = {
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
                        const minorScale = {
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
                        const config = {
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
                        const responses = getResponseData();
                        for (const response of responses) {
                            const existingIndex = chart.data.labels.indexOf(response.text);
                            if (existingIndex !== -1) {
                                chart.data.datasets[0].data[existingIndex] = response.count;
                            }
                            else {
                                let insertIndex;
                                const color = colorConsumer();
                                for (insertIndex = 0; insertIndex < chart.data.labels.length; insertIndex++) {
                                    if (response.text.localeCompare(chart.data.labels[insertIndex]) < 0) {
                                        break;
                                    }
                                }
                                chart.data.labels.splice(insertIndex, 0, response.text);
                                chart.data.datasets[0].data.splice(insertIndex, 0, response.count);
                                chart.data.datasets[0].backgroundColor.splice(insertIndex, 0, toCssRgba(color, 0.5));
                                chart.data.datasets[0].borderColor.splice(insertIndex, 0, toCssRgba(color));
                            }
                        }
                        const validResponseTexts = responses.map(r => r.text);
                        for (let index = 0; index < chart.data.labels.length;) {
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
                        const style = window.getComputedStyle(canvasElement.value);
                        chart = new Chart(canvasElement.value, getChartConfig(style));
                    });
                    onResponsesChanged();
                    const __returned__ = { props, canvasElement, colorConsumer, chart, additionalVisualizerClasses, borderWidth, fillOpacity, getColors, parseCssColor, createSequentialConsumer, getScaledFontSize, getStyleValue, getStyleFontSize, getResponseData, toCssRgba, getChartData, getChartConfig, onResponsesChanged };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1$1 = {
                key: 0,
                class: "visualizer-title"
            };
            const _hoisted_2 = { class: "chart-container" };
            const _hoisted_3 = { ref: "canvasElement" };
            function render$2(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", {
                    class: normalizeClass(["experience-visualizer experience-visualizer-type-b1dfd377-9ef7-407f-9097-6206b98aec0d", $setup.additionalVisualizerClasses])
                }, [
                    (_ctx.renderConfiguration.title)
                        ? (openBlock(), createElementBlock("div", _hoisted_1$1, toDisplayString(_ctx.renderConfiguration.title), 1))
                        : createCommentVNode("v-if", true),
                    createElementVNode("div", _hoisted_2, [
                        createElementVNode("canvas", _hoisted_3, null, 512)
                    ])
                ], 2));
            }
            const __sfc_style$2 = document.createElement("style");
            __sfc_style$2.textContent = `.experience-visualizer-type-b1dfd377-9ef7-407f-9097-6206b98aec0d {
    display: flex;
    flex-direction: column;
}
.experience-visualizer-type-b1dfd377-9ef7-407f-9097-6206b98aec0d .visualizer-title {
    margin-bottom: 12px;
    font-size: 36px;
    color: var(--experience-visualizer-primary-color);
    text-align: center;
    font-weight: 700;
}
.experience-visualizer-type-b1dfd377-9ef7-407f-9097-6206b98aec0d .chart-container {
    flex-grow: 1;
}`;
            document.head.appendChild(__sfc_style$2);
            const exportHelper$2 = _sfc_main$2;
            for (const [key, val] of [["render", render$2]]) {
                exportHelper$2[key] = val;
            }

            const _sfc_main$1 = defineComponent({
                name: 'wordCloud.partial',
                props: visualizerProps,
                setup(__props, { expose }) {
                    expose();
                    const props = __props;
                    const responses = ref([]);
                    const additionalVisualizerClasses = computed(() => {
                        return `experience-visualizer-${props.renderConfiguration.actionId}`;
                    });
                    const colors = computed(() => {
                        var _a, _b, _c;
                        const colorStrings = (_c = (_b = (_a = props.renderConfiguration.configurationValues) === null || _a === void 0 ? void 0 : _a.colors) === null || _b === void 0 ? void 0 : _b.split(",").map(c => c.trim()).filter(c => c !== "")) !== null && _c !== void 0 ? _c : [];
                        return colorStrings.length > 0 ? colorStrings : undefined;
                    });
                    const angleCount = computed(() => {
                        var _a;
                        const value = toNumber(((_a = props.renderConfiguration.configurationValues) === null || _a === void 0 ? void 0 : _a.angleCount) || "5");
                        return Math.min(100, Math.max(1, Math.floor(value)));
                    });
                    const fontName = computed(() => {
                        var _a;
                        return ((_a = props.renderConfiguration.configurationValues) === null || _a === void 0 ? void 0 : _a.fontName) || undefined;
                    });
                    const minimumUpdateInterval = computed(() => {
                        var _a, _b;
                        return toNumber((_b = (_a = props.renderConfiguration.configurationValues) === null || _a === void 0 ? void 0 : _a.minimumUpdateInterval) !== null && _b !== void 0 ? _b : 0) * 1000;
                    });
                    function updateResponses() {
                        responses.value = props.responses.filter(r => r.response).map(r => r.response);
                    }
                    watch(() => props.responses, updateResponses);
                    updateResponses();
                    const __returned__ = { props, responses, additionalVisualizerClasses, colors, angleCount, fontName, minimumUpdateInterval, updateResponses, WordCloud };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = {
                key: 0,
                class: "visualizer-title"
            };
            function render$1(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", {
                    class: normalizeClass(["experience-visualizer experience-visualizer-type-dc35f0f7-83e5-47d8-aa27-b448962b60dd", $setup.additionalVisualizerClasses])
                }, [
                    (_ctx.renderConfiguration.title)
                        ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(_ctx.renderConfiguration.title), 1))
                        : createCommentVNode("v-if", true),
                    createVNode($setup["WordCloud"], {
                        words: $setup.responses,
                        angleCount: $setup.angleCount,
                        fontName: $setup.fontName,
                        colors: $setup.colors,
                        minimumUpdateInterval: $setup.minimumUpdateInterval,
                        width: "100%",
                        height: "100%"
                    }, null, 8, ["words", "angleCount", "fontName", "colors", "minimumUpdateInterval"])
                ], 2));
            }
            const __sfc_style$1 = document.createElement("style");
            __sfc_style$1.textContent = `.experience-visualizer-type-dc35f0f7-83e5-47d8-aa27-b448962b60dd {
    display: flex;
    flex-direction: column;
}
.experience-visualizer-type-dc35f0f7-83e5-47d8-aa27-b448962b60dd .visualizer-title {
    margin-bottom: 12px;
    font-size: 36px;
    color: var(--experience-visualizer-primary-color);
    text-align: center;
    font-weight: 700;
}
.experience-visualizer-type-dc35f0f7-83e5-47d8-aa27-b448962b60dd .rock-word-cloud {
    flex-grow: 1;
}`;
            document.head.appendChild(__sfc_style$1);
            const exportHelper$1 = _sfc_main$1;
            for (const [key, val] of [["render", render$1]]) {
                exportHelper$1[key] = val;
            }

            const _sfc_main = defineComponent({
                name: 'experienceVisualizer',
                setup(__props, { expose }) {
                    expose();
                    const config = useConfigurationValues();
                    const invokeBlockAction = useInvokeBlockAction();
                    const actionTypeLookup = {
                        "b1dfd377-9ef7-407f-9097-6206b98aec0d": exportHelper$2,
                        "dc35f0f7-83e5-47d8-aa27-b448962b60dd": exportHelper$1
                    };
                    const experienceToken = ref(null);
                    const experienceStyles = ref(getExperienceStyles(null));
                    const eventId = ref(null);
                    const activeActionId = ref(null);
                    const activeVisualizerComponent = ref(null);
                    const activeRenderConfiguration = ref(null);
                    const occurrenceResponses = reactive([]);
                    const activeResponses = ref([]);
                    let realTimeTopic = null;
                    let occurrenceEndDateTime = null;
                    const styleNode = document.createElement("style");
                    styleNode.textContent = "";
                    document.head.appendChild(styleNode);
                    function startRealTime() {
                        return __awaiter(this, void 0, void 0, function* () {
                            var topic = yield getTopic("Rock.RealTime.Topics.InteractiveExperienceParticipantTopic");
                            topic.onReconnect((server) => __awaiter(this, void 0, void 0, function* () {
                                if (experienceToken.value) {
                                    yield joinExperience(server, experienceToken.value);
                                }
                            }));
                            setupTopicListeners(topic);
                            realTimeTopic = topic;
                            setTimeout(onPingTimer, config.keepAliveInterval * 1000);
                        });
                    }
                    function joinExperience(server, token) {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!realTimeTopic) {
                                return;
                            }
                            try {
                                occurrenceResponses.slice();
                                const response = yield server.joinExperience(token);
                                eventId.value = (_a = response.occurrenceIdKey) !== null && _a !== void 0 ? _a : null;
                                if (response.currentVisualizerActionIdKey && response.currentVisualizerConfiguration) {
                                    setupVisualizerComponent(response.currentVisualizerActionIdKey, response.currentVisualizerConfiguration);
                                }
                                yield getAllAnswers(token);
                            }
                            catch (error) {
                                eventId.value = null;
                                experienceToken.value = null;
                                activeVisualizerComponent.value = null;
                                activeActionId.value = null;
                                activeRenderConfiguration.value = null;
                                throw error;
                            }
                        });
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
                        var _a, _b, _c, _d, _e, _f;
                        const styles = {};
                        if ((_a = style === null || style === void 0 ? void 0 : style.visualizer) === null || _a === void 0 ? void 0 : _a.backgroundColor) {
                            styles["--experience-visualizer-bg"] = style.visualizer.backgroundColor;
                        }
                        if ((_b = style === null || style === void 0 ? void 0 : style.visualizer) === null || _b === void 0 ? void 0 : _b.backgroundImage) {
                            styles["--experience-visualizer-bg-image"] = `url('${style.visualizer.backgroundImage}')`;
                        }
                        if ((_c = style === null || style === void 0 ? void 0 : style.visualizer) === null || _c === void 0 ? void 0 : _c.textColor) {
                            styles["--experience-visualizer-color"] = style.visualizer.textColor;
                        }
                        else {
                            styles["--experience-visualizer-color"] = "var(--text-color)";
                        }
                        if ((_d = style === null || style === void 0 ? void 0 : style.visualizer) === null || _d === void 0 ? void 0 : _d.primaryColor) {
                            styles["--experience-visualizer-primary-bg"] = style.visualizer.primaryColor;
                        }
                        else {
                            styles["--experience-visualizer-primary-bg"] = "var(--brand-primary)";
                        }
                        if ((_e = style === null || style === void 0 ? void 0 : style.visualizer) === null || _e === void 0 ? void 0 : _e.secondaryColor) {
                            styles["--experience-visualizer-secondary-color"] = style.visualizer.secondaryColor;
                        }
                        else {
                            styles["--experience-visualizer-secondary-color"] = "var(--brand-success)";
                        }
                        if ((_f = style === null || style === void 0 ? void 0 : style.visualizer) === null || _f === void 0 ? void 0 : _f.accentColor) {
                            styles["--experience-visualizer-accent-color"] = style.visualizer.accentColor;
                        }
                        else {
                            styles["--experience-visualizer-accent-color"] = "var(--brand-info)";
                        }
                        return styles;
                    }
                    function setupCustomStyles(style) {
                        var _a, _b;
                        styleNode.textContent = (_b = (_a = style === null || style === void 0 ? void 0 : style.visualizer) === null || _a === void 0 ? void 0 : _a.customCss) !== null && _b !== void 0 ? _b : "";
                    }
                    function setupTopicListeners(topic) {
                        topic.on("showVisualizer", onShowVisualizer);
                        topic.on("clearVisualizer", onClearVisualizer);
                        topic.on("answerSubmitted", onAnswerSubmitted);
                        topic.on("answerUpdated", onAnswerUpdated);
                        topic.on("answerRemoved", onAnswerRemoved);
                    }
                    function updateAnswer(answer) {
                        const answerIndex = occurrenceResponses.findIndex(a => a.idKey === answer.idKey);
                        if (answerIndex !== -1) {
                            occurrenceResponses.splice(answerIndex, 1, answer);
                        }
                        else {
                            occurrenceResponses.push(answer);
                        }
                    }
                    function removeAnswer(answerIdKey) {
                        const answerIndex = occurrenceResponses.findIndex(a => a.idKey === answerIdKey);
                        if (answerIndex !== -1) {
                            occurrenceResponses.splice(answerIndex, 1);
                        }
                    }
                    function getAllAnswers(token) {
                        return __awaiter(this, void 0, void 0, function* () {
                            occurrenceResponses.slice();
                            const response = yield invokeBlockAction("GetExperienceAnswers", { token: token });
                            if (response.isSuccess && response.data) {
                                for (const answer of response.data) {
                                    updateAnswer(answer);
                                }
                            }
                        });
                    }
                    function clearExperience() {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (eventId.value && realTimeTopic) {
                                yield realTimeTopic.server.leaveExperience(eventId.value);
                            }
                            experienceToken.value = null;
                            experienceStyles.value = getExperienceStyles(null);
                            occurrenceEndDateTime = null;
                            eventId.value = null;
                            setupVisualizerComponent(null, null);
                        });
                    }
                    function checkForNewOccurrence() {
                        var _a;
                        return __awaiter(this, void 0, void 0, function* () {
                            try {
                                if (occurrenceEndDateTime) {
                                    if (RockDateTime.now().toMilliseconds() < occurrenceEndDateTime.toMilliseconds()) {
                                        return;
                                    }
                                    else {
                                        return clearExperience();
                                    }
                                }
                                const result = yield invokeBlockAction("GetCurrentOccurrence");
                                if (result.isSuccess) {
                                    yield updateOccurrence(result.data);
                                }
                                else {
                                    console.error((_a = result.errorMessage) !== null && _a !== void 0 ? _a : "Unknown error trying to get current occurrence.");
                                }
                            }
                            finally {
                                setTimeout(checkForNewOccurrence, 60000);
                            }
                        });
                    }
                    function updateOccurrence(occurrence) {
                        var _a, _b, _c;
                        return __awaiter(this, void 0, void 0, function* () {
                            if (realTimeTopic == null) {
                                experienceToken.value = (_a = occurrence === null || occurrence === void 0 ? void 0 : occurrence.experienceToken) !== null && _a !== void 0 ? _a : null;
                                experienceStyles.value = getExperienceStyles(occurrence === null || occurrence === void 0 ? void 0 : occurrence.style);
                                occurrenceEndDateTime = RockDateTime.parseISO((_b = occurrence === null || occurrence === void 0 ? void 0 : occurrence.occurrenceEndDateTime) !== null && _b !== void 0 ? _b : "");
                                return;
                            }
                            yield clearExperience();
                            if (!occurrence) {
                                return;
                            }
                            experienceStyles.value = getExperienceStyles(occurrence.style);
                            occurrenceEndDateTime = RockDateTime.parseISO((_c = occurrence.occurrenceEndDateTime) !== null && _c !== void 0 ? _c : "");
                            if (occurrence.experienceToken) {
                                yield joinExperience(realTimeTopic.server, occurrence === null || occurrence === void 0 ? void 0 : occurrence.experienceToken);
                            }
                        });
                    }
                    function startup() {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield startRealTime();
                            yield checkForNewOccurrence();
                        });
                    }
                    function onShowVisualizer(id, actionId, renderConfiguration) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (eventId.value === id) {
                                setupVisualizerComponent(actionId, renderConfiguration);
                            }
                        });
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
                        return __awaiter(this, void 0, void 0, function* () {
                            try {
                                if (realTimeTopic && eventId.value) {
                                    yield realTimeTopic.server.pingExperience(eventId.value);
                                }
                            }
                            finally {
                                setTimeout(onPingTimer, config.keepAliveInterval * 1000);
                            }
                        });
                    }
                    watch([activeActionId, occurrenceResponses], () => {
                        updateRefValue(activeResponses, occurrenceResponses.filter(r => r.actionIdKey === activeActionId.value && r.status === 1));
                    });
                    onConfigurationValuesChanged(useReloadBlock());
                    setupCustomStyles(null);
                    startup();
                    const __returned__ = { config, invokeBlockAction, actionTypeLookup, experienceToken, experienceStyles, eventId, activeActionId, activeVisualizerComponent, activeRenderConfiguration, occurrenceResponses, activeResponses, realTimeTopic, occurrenceEndDateTime, styleNode, startRealTime, joinExperience, setupVisualizerComponent, getExperienceStyles, setupCustomStyles, setupTopicListeners, updateAnswer, removeAnswer, getAllAnswers, clearExperience, checkForNewOccurrence, updateOccurrence, startup, onShowVisualizer, onClearVisualizer, onAnswerSubmitted, onAnswerUpdated, onAnswerRemoved, onPingTimer, Alert };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return ($setup.config.errorMessage)
                    ? (openBlock(), createBlock($setup["Alert"], {
                        key: 0,
                        alertType: "warning"
                    }, {
                        default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.config.errorMessage), 1)
                        ]),
                        _: 1
                    }))
                    : (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: "experience-visualizer-body",
                        style: normalizeStyle($setup.experienceStyles)
                    }, [
                        ($setup.activeVisualizerComponent)
                            ? (openBlock(), createBlock(resolveDynamicComponent($setup.activeVisualizerComponent), {
                                key: 0,
                                renderConfiguration: $setup.activeRenderConfiguration,
                                responses: $setup.activeResponses
                            }, null, 8, ["renderConfiguration", "responses"]))
                            : createCommentVNode("v-if", true)
                    ], 4));
            }
            const __sfc_style = document.createElement("style");
            __sfc_style.textContent = `.experience-visualizer-body {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 18px;
    color: var(--experience-visualizer-color);
    background-color: var(--experience-visualizer-bg, inherit);
    background-image: var(--experience-visualizer-bg-image, initial);
}
.experience-visualizer-body .experience-visualizer {
    width: 100%;
    height: 100%;
}`;
            document.head.appendChild(__sfc_style);
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
