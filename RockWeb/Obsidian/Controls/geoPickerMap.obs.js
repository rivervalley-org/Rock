System.register(['tslib', 'vue', '@Obsidian/Utility/geo', '@Obsidian/SystemGuids/definedValue', '@Obsidian/Controls/loading', '@Obsidian/Utility/dialogs'], (function (exports) {
    'use strict';
    var __awaiter, defineComponent, ref, computed, watch, nextTick, onBeforeMount, onMounted, createElementVNode, openBlock, createElementBlock, normalizeClass, createCommentVNode, withDirectives, withModifiers, vShow, createVNode, withCtx, wellKnownToCoordinates, coordinatesToWellKnown, createLatLng, toCoordinate, loadMapResources, DefinedValue, Loading, confirm;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            nextTick = module.nextTick;
            onBeforeMount = module.onBeforeMount;
            onMounted = module.onMounted;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            normalizeClass = module.normalizeClass;
            createCommentVNode = module.createCommentVNode;
            withDirectives = module.withDirectives;
            withModifiers = module.withModifiers;
            vShow = module.vShow;
            createVNode = module.createVNode;
            withCtx = module.withCtx;
        }, function (module) {
            wellKnownToCoordinates = module.wellKnownToCoordinates;
            coordinatesToWellKnown = module.coordinatesToWellKnown;
            createLatLng = module.createLatLng;
            toCoordinate = module.toCoordinate;
            loadMapResources = module.loadMapResources;
        }, function (module) {
            DefinedValue = module.DefinedValue;
        }, function (module) {
            Loading = module["default"];
        }, function (module) {
            confirm = module.confirm;
        }],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'geoPickerMap',
                props: {
                    modelValue: {
                        type: String,
                        default: ""
                    },
                    drawingMode: {
                        type: String,
                        required: true
                    },
                    mapStyleValueGuid: {
                        type: String,
                        default: DefinedValue.MapStyleRock
                    },
                    centerLatitude: {
                        type: Number,
                        default: null
                    },
                    centerLongitude: {
                        type: Number,
                        default: null
                    },
                    isExpanded: {
                        type: Boolean,
                        default: false
                    },
                },
                emits: ["update:modelValue", "update:valueLabel"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const clearButton = ref(null);
                    const mapContainer = ref(null);
                    const isGoogleLoaded = ref(false);
                    const isMounted = ref(false);
                    const isReady = computed(() => isGoogleLoaded.value && isMounted.value);
                    const isClearButtonEnabled = ref(false);
                    let drawingMode = props.drawingMode;
                    let drawingModes = [];
                    let drawingManager = null;
                    let map = null;
                    let centerLatitude = props.centerLatitude;
                    let centerLongitude = props.centerLongitude;
                    let minLat = null;
                    let minLng = null;
                    let maxLat = null;
                    let maxLng = null;
                    let fillColor = "0088cc";
                    let strokeColor = "0088cc";
                    let styles = [];
                    let shape = null;
                    let marker = null;
                    const internalValue = computed({
                        get() {
                            var _a;
                            return wellKnownToCoordinates((_a = props.modelValue) !== null && _a !== void 0 ? _a : "", drawingMode);
                        },
                        set(newValue) {
                            emit("update:modelValue", coordinatesToWellKnown(newValue, drawingMode));
                        }
                    });
                    watch([isReady], initialize);
                    watch(() => props.isExpanded, () => __awaiter(this, void 0, void 0, function* () {
                        if (isReady.value) {
                            yield nextTick();
                            google.maps.event.trigger(map, "resize");
                        }
                    }));
                    function initialize(isReady) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!isReady)
                                return;
                            marker = {
                                path: "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
                                fillColor: "#FE7569",
                                fillOpacity: 1,
                                strokeColor: "#000",
                                strokeWeight: 1,
                                scale: 1,
                                labelOrigin: new google.maps.Point(0, -28)
                            };
                            yield nextTick();
                            drawingModes = [drawingMode == "Polygon" ? google.maps.drawing.OverlayType.POLYGON : google.maps.drawing.OverlayType.MARKER];
                            var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
                            var mapOptions = {
                                center: new google.maps.LatLng(centerLatitude, centerLongitude),
                                zoom: 16,
                                streetViewControl: false,
                                fullscreenControl: false,
                                mapTypeControlOptions: {
                                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"],
                                }
                            };
                            map = new google.maps.Map(mapContainer.value, mapOptions);
                            map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton.value);
                            map.mapTypes.set("map_style", styledMap);
                            map.setMapTypeId("map_style");
                            drawingManager = new google.maps.drawing.DrawingManager({
                                drawingControl: true,
                                drawingControlOptions: {
                                    drawingModes: drawingModes
                                },
                                polygonOptions: {
                                    editable: true,
                                    strokeColor: strokeColor,
                                    fillColor: fillColor,
                                    strokeWeight: 2
                                },
                                markerOptions: {
                                    icon: marker
                                },
                                map
                            });
                            if (internalValue.value && internalValue.value.length > 0) {
                                let shape;
                                if (drawingMode == "Polygon") {
                                    shape = new google.maps.Polygon({
                                        paths: internalValue.value.map((c) => createLatLng(...c)),
                                        clickable: true,
                                        editable: true,
                                        strokeColor: strokeColor,
                                        fillColor: fillColor,
                                        strokeWeight: 2,
                                        map
                                    });
                                }
                                else {
                                    shape = new google.maps.Marker({
                                        position: new google.maps.LatLng(...internalValue.value[0]),
                                        map: map,
                                        clickable: true,
                                        icon: marker
                                    });
                                }
                                setCurrentShape(shape);
                                fitBounds(map);
                            }
                            google.maps.event.addListener(drawingManager, "overlaycomplete", function (e) {
                                setCurrentShape(e.overlay);
                            });
                            google.maps.event.addListener(drawingManager, "drawingmode_changed", deselect);
                            google.maps.event.addListener(map, "click", deselect);
                        });
                    }
                    function setCurrentShape(newShape) {
                        disableDrawing();
                        select(newShape);
                        if (drawingMode == "Polygon") {
                            shape = newShape;
                            setEditable(true);
                            internalValue.value = pathToCoordinates(shape.getPath());
                            google.maps.event.addListener(shape.getPath(), "set_at", () => {
                                updateShape(shape);
                            });
                            google.maps.event.addListener(shape.getPath(), "insert_at", () => {
                                updateShape(shape);
                            });
                            google.maps.event.addListener(shape, "rightclick", (ev) => {
                                if (ev.vertex != null) {
                                    shape.getPath().removeAt(ev.vertex);
                                }
                                updateShape(shape);
                            });
                            google.maps.event.addListener(shape, "click", () => {
                                select(shape);
                            });
                        }
                        else if (drawingMode == "Point") {
                            shape = newShape;
                            let position = shape.getPosition();
                            if (!position) {
                                internalValue.value = [];
                            }
                            else {
                                internalValue.value = [toCoordinate(position)];
                            }
                            google.maps.event.addListener(shape, "click", () => {
                                select(shape);
                            });
                        }
                    }
                    function updateShape(updatedShape) {
                        shape = updatedShape;
                        let path = shape.getPath();
                        if (path.getLength() == 0) {
                            deleteSelectedShape(true);
                            return;
                        }
                        const coordinates = pathToCoordinates(path);
                        internalValue.value = coordinates;
                    }
                    function select(shape) {
                        if (shape == null)
                            return;
                        setEditable(true);
                        isClearButtonEnabled.value = true;
                    }
                    function deselect() {
                        setEditable(false);
                        isClearButtonEnabled.value = false;
                    }
                    function setEditable(isEditable) {
                        if (shape && drawingMode == "Polygon") {
                            shape.setEditable(isEditable);
                        }
                    }
                    function fitBounds(map) {
                        if (!internalValue.value) {
                            const newLatLng = new google.maps.LatLng(centerLatitude, centerLongitude);
                            map.setCenter(newLatLng);
                            return;
                        }
                        const coords = internalValue.value;
                        if (drawingMode == "Point") {
                            map.setCenter(new google.maps.LatLng(...coords[0]));
                            return;
                        }
                        for (let i = 0; i < coords.length; i++) {
                            const [lat, lng] = coords[i];
                            if (minLat == null || lat < minLat) {
                                minLat = lat;
                            }
                            if (maxLat == null || lat > maxLat) {
                                maxLat = lat;
                            }
                            if (minLng == null || lng < minLng) {
                                minLng = lng;
                            }
                            if (maxLng == null || lng > maxLng) {
                                maxLng = lng;
                            }
                        }
                        const southWest = new google.maps.LatLng(minLat !== null && minLat !== void 0 ? minLat : 0, minLng);
                        const northEast = new google.maps.LatLng(maxLat !== null && maxLat !== void 0 ? maxLat : 0, maxLng);
                        const bounds = new google.maps.LatLngBounds(southWest, northEast);
                        map.fitBounds(bounds);
                    }
                    function disableDrawing() {
                        if (!drawingManager) {
                            return;
                        }
                        drawingManager.setDrawingMode(null);
                        drawingManager.setOptions({
                            drawingControlOptions: { drawingModes: [] }
                        });
                    }
                    function enableDrawing() {
                        if (!drawingManager) {
                            return;
                        }
                        drawingManager === null || drawingManager === void 0 ? void 0 : drawingManager.setOptions({
                            drawingControlOptions: { drawingModes: drawingModes }
                        });
                    }
                    function deleteSelectedShape(confirmed = false) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (shape && (confirmed || (yield confirm("Delete selected shape?")))) {
                                deselect();
                                shape.setMap(null);
                                shape = null;
                                internalValue.value = [];
                                enableDrawing();
                            }
                        });
                    }
                    function pathToCoordinates(path) {
                        const coordinates = [];
                        for (let i = 0; i < path.getLength(); i++) {
                            const xy = path.getAt(i);
                            coordinates[i] = toCoordinate(xy);
                        }
                        return coordinates;
                    }
                    onBeforeMount(() => __awaiter(this, void 0, void 0, function* () {
                        var _a, _b, _c;
                        const googleMapSettings = yield loadMapResources({ mapStyleValueGuid: props.mapStyleValueGuid });
                        centerLatitude = (_a = centerLatitude !== null && centerLatitude !== void 0 ? centerLatitude : googleMapSettings.centerLatitude) !== null && _a !== void 0 ? _a : 33.590795;
                        centerLongitude = (_b = centerLongitude !== null && centerLongitude !== void 0 ? centerLongitude : googleMapSettings.centerLongitude) !== null && _b !== void 0 ? _b : -112.126459;
                        try {
                            styles = JSON.parse((_c = googleMapSettings.mapStyle) !== null && _c !== void 0 ? _c : "");
                        }
                        catch (_d) { }
                        fillColor = strokeColor = googleMapSettings.markerColor ? "#" + googleMapSettings.markerColor : "#0088cc";
                        isGoogleLoaded.value = true;
                    }));
                    onMounted(() => {
                        isMounted.value = true;
                    });
                    const __returned__ = { props, emit, clearButton, mapContainer, isGoogleLoaded, isMounted, isReady, isClearButtonEnabled, drawingMode, drawingModes, drawingManager, map, centerLatitude, centerLongitude, minLat, minLng, maxLat, maxLng, fillColor, strokeColor, styles, shape, marker, internalValue, initialize, setCurrentShape, updateShape, select, deselect, setEditable, fitBounds, disableDrawing, enableDrawing, deleteSelectedShape, pathToCoordinates, Loading };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _hoisted_1 = createElementVNode("i", { class: "fa fa-times" }, null, -1);
            const _hoisted_2 = [
                _hoisted_1
            ];
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock("div", {
                    class: normalizeClass(["gm-container", $props.isExpanded ? 'expanded-map-size' : 'static-map-size'])
                }, [
                    createCommentVNode(" Our custom clear button that we add to the map for deleting polygons. "),
                    withDirectives(createElementVNode("button", {
                        type: "button",
                        ref: "clearButton",
                        onClick: _cache[0] || (_cache[0] = withModifiers($event => ($setup.deleteSelectedShape()), ["prevent"])),
                        class: "gm-clear-button",
                        title: "Delete selected shape",
                        "aria-label": "Delete selected shape"
                    }, _hoisted_2, 512), [
                        [vShow, $setup.isClearButtonEnabled]
                    ]),
                    createCommentVNode(" This is where the Google Map (with Drawing Tools) will go. "),
                    createVNode($setup["Loading"], {
                        isLoading: !$setup.isReady,
                        class: normalizeClass($props.isExpanded ? 'expanded-map-size' : 'static-map-size')
                    }, {
                        default: withCtx(() => [
                            createElementVNode("div", {
                                ref: "mapContainer",
                                class: normalizeClass([$props.isExpanded ? 'expanded-map-size' : 'static-map-size', "gm-map"])
                            }, null, 2)
                        ]),
                        _: 1
                    }, 8, ["isLoading", "class"])
                ], 2));
            }
            const __sfc_style = document.createElement("style");
            __sfc_style.textContent = `.gm-container {
    position: relative;
}
.gm-map {
    overflow: hidden;
}
.gm-clear-button {
    z-index: 10;
    position: absolute;
    /* right: 0px; */
    margin-top: 5px;
    line-height: 0;
    overflow: hidden;
    text-align: center;
    color: #8c4b4b;
    background: white;
    padding: 4px;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    border: 0;
    text-align: left;
}
.gm-clear-button:hover {
    background: whitesmoke;
}
.gm-clear-button:disabled {
    color: #aaa;
    background: white;
}
.gm-clear-button i.fa {
    font-size: 16px;
    padding: 0 2.5px;
}
.static-map-size {
    height: 300px;
    width: 500px;
}
.expanded-map-size {
    height: 100%;
    width: 100%;
}`;
            document.head.appendChild(__sfc_style);
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
