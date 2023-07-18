System.register(['vue', '@Obsidian/Libs/d3'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, onMounted, onBeforeUnmount, watch, openBlock, createElementBlock, normalizeStyle, cloud;
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
        }, function (module) {
            cloud = module.cloud;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
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
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const svgElement = ref(null);
                    const elements = {};
                    let animationStartTime = null;
                    let animationFrame = null;
                    let isUpdateRequested = false;
                    let resizeObserver = null;
                    let lastObserverSize = { width: 0, height: 0 };
                    let lastUpdate = 0;
                    let deferredUpdateTimer = null;
                    const svgStyle = computed(() => {
                        const styles = {};
                        if (typeof props.width === "string") {
                            styles.width = props.width;
                        }
                        else {
                            styles.width = `${props.width}px`;
                        }
                        if (typeof props.height === "string") {
                            styles.height = props.height;
                        }
                        else {
                            styles.height = `${props.height}px`;
                        }
                        return styles;
                    });
                    const constrainedAngleCount = computed(() => {
                        return Math.max(1, Math.min(180, Math.floor(props.angleCount)));
                    });
                    const angles = computed(() => {
                        const angleCount = Math.min(180, constrainedAngleCount.value);
                        if (angleCount <= 1) {
                            return [(props.minimumAngle + props.maximumAngle) / 2];
                        }
                        else if (angleCount === 2) {
                            return [props.minimumAngle, props.maximumAngle];
                        }
                        else {
                            const angleSize = (props.maximumAngle - props.minimumAngle) / (angleCount - 1);
                            const angleList = [];
                            for (let angle = props.minimumAngle; angle <= props.maximumAngle; angle += angleSize) {
                                angleList.push(angle);
                            }
                            return angleList;
                        }
                    });
                    function getWidth() {
                        var _a, _b;
                        return (_b = (_a = svgElement.value) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
                    }
                    function getHeight() {
                        var _a, _b;
                        return (_b = (_a = svgElement.value) === null || _a === void 0 ? void 0 : _a.clientHeight) !== null && _b !== void 0 ? _b : 0;
                    }
                    function createLogScale(outputMin, outputMax, inputMin, inputMax) {
                        const logmin = Math.log(inputMin);
                        const logmax = Math.log(inputMax);
                        const outputRange = outputMax - outputMin;
                        return (value) => {
                            if (value === inputMin && value === inputMax) {
                                return outputMin;
                            }
                            return (((Math.log(value) - logmin) / (logmax - logmin)) * outputRange) + outputMin;
                        };
                    }
                    function createSequentialConsumer(values, seed) {
                        const items = [...values];
                        let index = seed % items.length;
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
                        let progressCurve = progress * progress * (3.0 - 2.0 * progress);
                        return ((endValue - startValue) * progressCurve) + startValue;
                    }
                    function renderWords(words) {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                        if (!svgElement.value) {
                            return;
                        }
                        let g = svgElement.value.firstChild;
                        if (!g) {
                            g = document.createElementNS("http://www.w3.org/2000/svg", "g");
                            svgElement.value.appendChild(g);
                        }
                        g.setAttribute("transform", `translate(${getWidth() / 2}, ${getHeight() / 2})`);
                        if (props.autoClear) {
                            while (g.firstChild) {
                                g.firstChild.remove();
                            }
                        }
                        const colorConsumer = createSequentialConsumer(props.colors, Object.keys(elements).length);
                        for (let index = 0; index < words.length; index += 1) {
                            const word = words[index];
                            if (!word.text) {
                                continue;
                            }
                            let wordElement = elements[word.text];
                            if (!wordElement) {
                                const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
                                textNode.setAttribute("text-anchor", "middle");
                                textNode.style.fontFamily = (_a = word.font) !== null && _a !== void 0 ? _a : "inherit";
                                textNode.style.fill = (_b = colorConsumer()) !== null && _b !== void 0 ? _b : "inherit";
                                textNode.style.transform = "translate(0px, 0px) rotate(0deg)";
                                textNode.textContent = word.text;
                                g.appendChild(textNode);
                                wordElement = {
                                    element: textNode,
                                    previousFontSize: 0,
                                    previousRotation: 0,
                                    previousX: 0,
                                    previousY: 0,
                                    fontSize: (_c = word.size) !== null && _c !== void 0 ? _c : 0,
                                    rotation: (_d = word.rotate) !== null && _d !== void 0 ? _d : 0,
                                    x: (_e = word.x) !== null && _e !== void 0 ? _e : 0,
                                    y: (_f = word.y) !== null && _f !== void 0 ? _f : 0
                                };
                                elements[word.text] = wordElement;
                            }
                            else {
                                wordElement.fontSize = (_g = word.size) !== null && _g !== void 0 ? _g : 0;
                                wordElement.rotation = (_h = word.rotate) !== null && _h !== void 0 ? _h : 0;
                                wordElement.x = (_j = word.x) !== null && _j !== void 0 ? _j : 0;
                                wordElement.y = (_k = word.y) !== null && _k !== void 0 ? _k : 0;
                            }
                        }
                        const existingWords = words.filter(w => w.text).map(w => w.text);
                        for (const wordKey of Object.keys(elements)) {
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
                        const duration = Math.min(time - animationStartTime, props.animationDuration);
                        const progress = duration / props.animationDuration;
                        const isLastFrame = duration === props.animationDuration;
                        for (const word of Object.keys(elements)) {
                            const wordElement = elements[word];
                            const fontSize = mapAnimationValue(wordElement.previousFontSize, wordElement.fontSize, progress);
                            const x = mapAnimationValue(wordElement.previousX, wordElement.x, progress);
                            const y = mapAnimationValue(wordElement.previousY, wordElement.y, progress);
                            const rotation = mapAnimationValue(wordElement.previousRotation, wordElement.rotation, progress);
                            wordElement.element.style.fontSize = `${fontSize}px`;
                            wordElement.element.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
                            if (isLastFrame) {
                                if (wordElement.fontSize === 0) {
                                    wordElement.element.remove();
                                    delete (elements[word]);
                                }
                                else {
                                    wordElement.previousFontSize = wordElement.fontSize;
                                    wordElement.previousX = wordElement.x;
                                    wordElement.previousY = wordElement.y;
                                    wordElement.previousRotation = wordElement.rotation;
                                }
                            }
                        }
                        if (!isLastFrame) {
                            animationFrame = requestAnimationFrame(animateWordsFrame);
                        }
                        else {
                            animationStartTime = null;
                            animationFrame = null;
                            emit("endDraw");
                            if (isUpdateRequested) {
                                processWords();
                            }
                        }
                    }
                    function processWords() {
                        var _a;
                        isUpdateRequested = false;
                        lastUpdate = Date.now();
                        if (!svgElement.value) {
                            return;
                        }
                        emit("beginDraw");
                        if (props.words.length === 0) {
                            return renderWords([]);
                        }
                        const wordLookup = {};
                        for (const word of props.words) {
                            wordLookup[word] = ((_a = wordLookup[word]) !== null && _a !== void 0 ? _a : 0) + 1;
                        }
                        const words = Object.entries(wordLookup)
                            .map(e => ({ text: e[0], size: e[1] }))
                            .sort((a, b) => a.size - b.size);
                        const min = Math.min(...words.map(w => { var _a; return (_a = w.size) !== null && _a !== void 0 ? _a : 0; }));
                        const max = Math.max(...words.map(w => { var _a; return (_a = w.size) !== null && _a !== void 0 ? _a : 0; }));
                        const fontSizeScale = createLogScale(props.minimumFontSize, props.maximumFontSize, min, max);
                        cloud()
                            .size([getWidth(), getHeight()])
                            .timeInterval(25)
                            .spiral("archimedean")
                            .words(words)
                            .padding(5)
                            .rotate(() => angles.value[Math.floor(Math.random() * angles.value.length)])
                            .font(props.fontName)
                            .fontSize(d => { var _a; return Math.floor(fontSizeScale((_a = d.size) !== null && _a !== void 0 ? _a : 0)); })
                            .on("end", renderWords)
                            .start();
                    }
                    function requestUpdate(ignoreSize) {
                        if (!ignoreSize && lastObserverSize.width === getWidth() && lastObserverSize.height === getHeight()) {
                            return;
                        }
                        lastObserverSize = { width: getWidth(), height: getHeight() };
                        if (animationFrame === null) {
                            processWords();
                        }
                        else {
                            isUpdateRequested = true;
                        }
                    }
                    onMounted(() => {
                        if (!svgElement.value) {
                            return;
                        }
                        if (window.ResizeObserver) {
                            lastObserverSize = { width: getWidth(), height: getHeight() };
                            resizeObserver = new ResizeObserver(() => {
                                requestUpdate(false);
                            });
                            resizeObserver.observe(svgElement.value);
                        }
                        requestUpdate(true);
                    });
                    onBeforeUnmount(() => {
                        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
                    });
                    const requestUpdateValues = [
                        () => props.words,
                        () => props.angleCount,
                        () => props.minimumAngle,
                        () => props.maximumAngle,
                        () => props.fontName,
                        () => props.minimumFontSize,
                        () => props.maximumFontSize,
                        () => props.colors,
                        () => props.wordPadding
                    ];
                    watch(requestUpdateValues, () => {
                        if (deferredUpdateTimer) {
                            return;
                        }
                        if (props.minimumUpdateInterval > 0 && lastUpdate > 0 && Object.keys(elements).length > 0) {
                            const period = lastUpdate + props.minimumUpdateInterval - Date.now();
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
                    const __returned__ = { props, emit, svgElement, elements, animationStartTime, animationFrame, isUpdateRequested, resizeObserver, lastObserverSize, lastUpdate, deferredUpdateTimer, svgStyle, constrainedAngleCount, angles, getWidth, getHeight, createLogScale, createSequentialConsumer, mapAnimationValue, renderWords, animateWordsFrame, processWords, requestUpdate, requestUpdateValues };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("svg", {
                    ref: "svgElement",
                    class: "rock-word-cloud",
                    style: normalizeStyle($setup.svgStyle)
                }, null, 4));
            }
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
