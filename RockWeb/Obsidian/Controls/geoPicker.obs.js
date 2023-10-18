System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Controls/contentDropDownPicker.obs', '@Obsidian/Controls/geoPickerMap.obs', '@Obsidian/Utility/geo', '@Obsidian/SystemGuids/definedValue'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, onBeforeMount, openBlock, createBlock, unref, mergeProps, createSlots, withCtx, createElementVNode, createVNode, renderSlot, standardRockFormFieldProps, useStandardRockFormFieldProps, ContentDropDownPicker, GeoPickerMap, nearAddressForCoordinates, wellKnownToCoordinates, loadMapResources, DefinedValue;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      onBeforeMount = module.onBeforeMount;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      createSlots = module.createSlots;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      renderSlot = module.renderSlot;
    }, function (module) {
      standardRockFormFieldProps = module.standardRockFormFieldProps;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
    }, function (module) {
      ContentDropDownPicker = module["default"];
    }, function (module) {
      GeoPickerMap = module["default"];
    }, function (module) {
      nearAddressForCoordinates = module.nearAddressForCoordinates;
      wellKnownToCoordinates = module.wellKnownToCoordinates;
      loadMapResources = module.loadMapResources;
    }, function (module) {
      DefinedValue = module.DefinedValue;
    }],
    execute: (function () {

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

      var _hoisted_1 = ["innerHTML"];
      var script = exports('default', defineComponent({
        name: 'geoPicker',
        props: _objectSpread2(_objectSpread2({}, standardRockFormFieldProps), {}, {
          modelValue: {
            type: String,
            default: ""
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
          drawingMode: {
            type: String,
            required: true
          }
        }),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var mapValue = ref(props.modelValue);
          var pickerValue = ref(props.modelValue);
          var pickerLabel = ref("");
          var isFullscreen = ref(false);
          var formFieldProps = useStandardRockFormFieldProps(props);
          function getAddress() {
            return _getAddress.apply(this, arguments);
          }
          function _getAddress() {
            _getAddress = _asyncToGenerator(function* () {
              if (pickerValue.value) {
                pickerLabel.value = "<i>Selected</i>";
                var address = yield nearAddressForCoordinates(wellKnownToCoordinates(pickerValue.value, props.drawingMode));
                if (address) {
                  pickerLabel.value = address;
                }
              } else {
                pickerLabel.value = "";
              }
            });
            return _getAddress.apply(this, arguments);
          }
          function select() {
            pickerValue.value = mapValue.value;
          }
          function cancel() {
            mapValue.value = pickerValue.value;
          }
          function clear() {
            pickerValue.value = "";
            pickerLabel.value = "";
          }
          function toggledPopup(isShowing) {
            if (!isShowing) {
              isFullscreen.value = false;
            }
          }
          watch(() => props.modelValue, () => {
            mapValue.value = props.modelValue;
            pickerValue.value = props.modelValue;
          });
          watch(pickerValue, () => {
            emit("update:modelValue", pickerValue.value);
            getAddress();
          });
          onBeforeMount(_asyncToGenerator(function* () {
            yield loadMapResources();
            getAddress();
          }));
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(ContentDropDownPicker), mergeProps(unref(formFieldProps), {
              modelValue: pickerValue.value,
              iconCssClass: "fa fa-map-marker",
              pickerClass: "picker-geography",
              showClear: !!pickerValue.value,
              primaryButtonLabel: "Done",
              isFullscreen: isFullscreen.value,
              "onUpdate:isFullscreen": _cache[1] || (_cache[1] = $event => isFullscreen.value = $event),
              onPrimaryButtonClicked: select,
              onSecondaryButtonClicked: cancel,
              onClearButtonClicked: clear,
              "onUpdate:showPopup": toggledPopup,
              pickerContentBoxHeight: "auto",
              pickerContentHeadingText: "Geography Picker",
              disablePickerContentBoxScroll: "",
              showFullscreenButton: "",
              forceContentReloadOnOpen: ""
            }), createSlots({
              innerLabel: withCtx(() => [createElementVNode("span", {
                class: "selected-names",
                innerHTML: pickerLabel.value
              }, null, 8, _hoisted_1)]),
              default: withCtx(() => [createVNode(unref(GeoPickerMap), {
                class: "geo-picker-map",
                modelValue: mapValue.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => mapValue.value = $event),
                drawingMode: __props.drawingMode,
                isExpanded: isFullscreen.value,
                mapStyleValueGuid: __props.mapStyleValueGuid,
                centerLatitude: __props.centerLatitude,
                centerLongitude: __props.centerLongitude
              }, null, 8, ["modelValue", "drawingMode", "isExpanded", "mapStyleValueGuid", "centerLatitude", "centerLongitude"])]),
              _: 2
            }, [_ctx.$slots.pickerContentSuperHeader ? {
              name: "pickerContentSuperHeader",
              fn: withCtx(() => [renderSlot(_ctx.$slots, "pickerContentSuperHeader")])
            } : undefined, _ctx.$slots.prepend ? {
              name: "prepend",
              fn: withCtx(_ref3 => {
                var isInputGroupSupported = _ref3.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.inputGroupPrepend ? {
              name: "inputGroupPrepend",
              fn: withCtx(_ref4 => {
                var isInputGroupSupported = _ref4.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "inputGroupPrepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.append ? {
              name: "append",
              fn: withCtx(_ref5 => {
                var isInputGroupSupported = _ref5.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined]), 1040, ["modelValue", "showClear", "isFullscreen"]);
          };
        }
      }));

      script.__file = "Framework/Controls/geoPicker.obs";

    })
  };
}));
//# sourceMappingURL=geoPicker.obs.js.map
