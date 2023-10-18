System.register(['vue', '@Obsidian/Utility/geo', '@Obsidian/SystemGuids/definedValue', '@Obsidian/Controls/loading', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, nextTick, onBeforeMount, onMounted, openBlock, createElementBlock, normalizeClass, createCommentVNode, withDirectives, withModifiers, vShow, createVNode, unref, withCtx, wellKnownToCoordinates, coordinatesToWellKnown, createLatLng, toCoordinate, loadMapResources, DefinedValue, Loading, confirm;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      nextTick = module.nextTick;
      onBeforeMount = module.onBeforeMount;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      createCommentVNode = module.createCommentVNode;
      withDirectives = module.withDirectives;
      withModifiers = module.withModifiers;
      vShow = module.vShow;
      createVNode = module.createVNode;
      unref = module.unref;
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

      var _hoisted_1 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_2 = [_hoisted_1];
      var script = exports('default', defineComponent({
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
          }
        },
        emits: ["update:modelValue", "update:valueLabel"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var clearButton = ref(null);
          var mapContainer = ref(null);
          var isGoogleLoaded = ref(false);
          var isMounted = ref(false);
          var isReady = computed(() => isGoogleLoaded.value && isMounted.value);
          var isClearButtonEnabled = ref(false);
          var drawingMode = props.drawingMode;
          var drawingModes = [];
          var drawingManager = null;
          var map = null;
          var centerLatitude = props.centerLatitude;
          var centerLongitude = props.centerLongitude;
          var minLat = null;
          var minLng = null;
          var maxLat = null;
          var maxLng = null;
          var fillColor = "0088cc";
          var strokeColor = "0088cc";
          var styles = [];
          var shape = null;
          var marker = null;
          var internalValue = computed({
            get() {
              var _props$modelValue;
              return wellKnownToCoordinates((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : "", drawingMode);
            },
            set(newValue) {
              emit("update:modelValue", coordinatesToWellKnown(newValue, drawingMode));
            }
          });
          watch([isReady], initialize);
          watch(() => props.isExpanded, _asyncToGenerator(function* () {
            if (isReady.value) {
              yield nextTick();
              google.maps.event.trigger(map, "resize");
            }
          }));
          function initialize(_x) {
            return _initialize.apply(this, arguments);
          }
          function _initialize() {
            _initialize = _asyncToGenerator(function* (isReady) {
              if (!isReady) return;
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
              var styledMap = new google.maps.StyledMapType(styles, {
                name: "Styled Map"
              });
              var mapOptions = {
                center: new google.maps.LatLng(centerLatitude, centerLongitude),
                zoom: 16,
                streetViewControl: false,
                fullscreenControl: false,
                mapTypeControlOptions: {
                  mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
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
                var _shape;
                if (drawingMode == "Polygon") {
                  _shape = new google.maps.Polygon({
                    paths: internalValue.value.map(c => createLatLng(...c)),
                    clickable: true,
                    editable: true,
                    strokeColor: strokeColor,
                    fillColor: fillColor,
                    strokeWeight: 2,
                    map
                  });
                } else {
                  _shape = new google.maps.Marker({
                    position: new google.maps.LatLng(...internalValue.value[0]),
                    map: map,
                    clickable: true,
                    icon: marker
                  });
                }
                setCurrentShape(_shape);
                fitBounds(map);
              }
              google.maps.event.addListener(drawingManager, "overlaycomplete", function (e) {
                setCurrentShape(e.overlay);
              });
              google.maps.event.addListener(drawingManager, "drawingmode_changed", deselect);
              google.maps.event.addListener(map, "click", deselect);
            });
            return _initialize.apply(this, arguments);
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
              google.maps.event.addListener(shape, "rightclick", ev => {
                if (ev.vertex != null) {
                  shape.getPath().removeAt(ev.vertex);
                }
                updateShape(shape);
              });
              google.maps.event.addListener(shape, "click", () => {
                select(shape);
              });
            } else if (drawingMode == "Point") {
              shape = newShape;
              var position = shape.getPosition();
              if (!position) {
                internalValue.value = [];
              } else {
                internalValue.value = [toCoordinate(position)];
              }
              google.maps.event.addListener(shape, "click", () => {
                select(shape);
              });
            }
          }
          function updateShape(updatedShape) {
            shape = updatedShape;
            var path = shape.getPath();
            if (path.getLength() == 0) {
              deleteSelectedShape(true);
              return;
            }
            var coordinates = pathToCoordinates(path);
            internalValue.value = coordinates;
          }
          function select(shape) {
            if (shape == null) return;
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
            var _minLat, _maxLat;
            if (!internalValue.value) {
              var newLatLng = new google.maps.LatLng(centerLatitude, centerLongitude);
              map.setCenter(newLatLng);
              return;
            }
            var coords = internalValue.value;
            if (drawingMode == "Point") {
              map.setCenter(new google.maps.LatLng(...coords[0]));
              return;
            }
            for (var i = 0; i < coords.length; i++) {
              var _coords$i = _slicedToArray(coords[i], 2),
                lat = _coords$i[0],
                lng = _coords$i[1];
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
            var southWest = new google.maps.LatLng((_minLat = minLat) !== null && _minLat !== void 0 ? _minLat : 0, minLng);
            var northEast = new google.maps.LatLng((_maxLat = maxLat) !== null && _maxLat !== void 0 ? _maxLat : 0, maxLng);
            var bounds = new google.maps.LatLngBounds(southWest, northEast);
            map.fitBounds(bounds);
          }
          function disableDrawing() {
            if (!drawingManager) {
              return;
            }
            drawingManager.setDrawingMode(null);
            drawingManager.setOptions({
              drawingControlOptions: {
                drawingModes: []
              }
            });
          }
          function enableDrawing() {
            var _drawingManager;
            if (!drawingManager) {
              return;
            }
            (_drawingManager = drawingManager) === null || _drawingManager === void 0 ? void 0 : _drawingManager.setOptions({
              drawingControlOptions: {
                drawingModes: drawingModes
              }
            });
          }
          function deleteSelectedShape() {
            return _deleteSelectedShape.apply(this, arguments);
          }
          function _deleteSelectedShape() {
            _deleteSelectedShape = _asyncToGenerator(function* () {
              var confirmed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              if (shape && (confirmed || (yield confirm("Delete selected shape?")))) {
                deselect();
                shape.setMap(null);
                shape = null;
                internalValue.value = [];
                enableDrawing();
              }
            });
            return _deleteSelectedShape.apply(this, arguments);
          }
          function pathToCoordinates(path) {
            var coordinates = [];
            for (var i = 0; i < path.getLength(); i++) {
              var xy = path.getAt(i);
              coordinates[i] = toCoordinate(xy);
            }
            return coordinates;
          }
          onBeforeMount(_asyncToGenerator(function* () {
            var _ref4, _centerLatitude, _ref5, _centerLongitude;
            var googleMapSettings = yield loadMapResources({
              mapStyleValueGuid: props.mapStyleValueGuid
            });
            centerLatitude = (_ref4 = (_centerLatitude = centerLatitude) !== null && _centerLatitude !== void 0 ? _centerLatitude : googleMapSettings.centerLatitude) !== null && _ref4 !== void 0 ? _ref4 : 33.590795;
            centerLongitude = (_ref5 = (_centerLongitude = centerLongitude) !== null && _centerLongitude !== void 0 ? _centerLongitude : googleMapSettings.centerLongitude) !== null && _ref5 !== void 0 ? _ref5 : -112.126459;
            try {
              var _googleMapSettings$ma;
              styles = JSON.parse((_googleMapSettings$ma = googleMapSettings.mapStyle) !== null && _googleMapSettings$ma !== void 0 ? _googleMapSettings$ma : "");
            } catch (_unused) {}
            fillColor = strokeColor = googleMapSettings.markerColor ? "#" + googleMapSettings.markerColor : "#0088cc";
            isGoogleLoaded.value = true;
          }));
          onMounted(() => {
            isMounted.value = true;
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["gm-container", __props.isExpanded ? 'expanded-map-size' : 'static-map-size'])
            }, [createCommentVNode(" Our custom clear button that we add to the map for deleting polygons. "), withDirectives(createElementVNode("button", {
              type: "button",
              ref_key: "clearButton",
              ref: clearButton,
              onClick: _cache[0] || (_cache[0] = withModifiers($event => deleteSelectedShape(), ["prevent"])),
              class: "gm-clear-button",
              title: "Delete selected shape",
              "aria-label": "Delete selected shape"
            }, _hoisted_2, 512), [[vShow, isClearButtonEnabled.value]]), createCommentVNode(" This is where the Google Map (with Drawing Tools) will go. "), createVNode(unref(Loading), {
              isLoading: !unref(isReady),
              class: normalizeClass(__props.isExpanded ? 'expanded-map-size' : 'static-map-size')
            }, {
              default: withCtx(() => [createElementVNode("div", {
                ref_key: "mapContainer",
                ref: mapContainer,
                class: normalizeClass([__props.isExpanded ? 'expanded-map-size' : 'static-map-size', "gm-map"])
              }, null, 2)]),
              _: 1
            }, 8, ["isLoading", "class"])], 2);
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

      var css_248z = ".gm-container{position:relative}.gm-map{overflow:hidden}.gm-clear-button{background:#fff;border:0;border-radius:2px;box-shadow:0 1px 4px -1px rgba(0,0,0,.3);color:#8c4b4b;line-height:0;margin-top:5px;overflow:hidden;padding:4px;position:absolute;text-align:center;text-align:left;z-index:10}.gm-clear-button:hover{background:#f5f5f5}.gm-clear-button:disabled{background:#fff;color:#aaa}.gm-clear-button i.fa{font-size:16px;padding:0 2.5px}.static-map-size{height:300px;width:500px}.expanded-map-size{height:100%;width:100%}";
      styleInject(css_248z);

      script.__file = "Framework/Controls/geoPickerMap.obs";

    })
  };
}));
//# sourceMappingURL=geoPickerMap.obs.js.map
