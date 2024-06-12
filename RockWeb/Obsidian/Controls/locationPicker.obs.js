System.register(['vue', './locationItemPicker.obs', './locationAddressPicker.obs', './geoPicker.obs', './radioButtonList.obs', '@Obsidian/Enums/Controls/locationPickerMode', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, Fragment, unref, createBlock, mergeProps, createSlots, withCtx, createVNode, renderSlot, createCommentVNode, LocationItemPicker, LocationAddressPicker, GeoPicker, RadioButtonList, LocationPickerMode, useStandardRockFormFieldProps, standardRockFormFieldProps;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      unref = module.unref;
      createBlock = module.createBlock;
      mergeProps = module.mergeProps;
      createSlots = module.createSlots;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      renderSlot = module.renderSlot;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      LocationItemPicker = module["default"];
    }, function (module) {
      LocationAddressPicker = module["default"];
    }, function (module) {
      GeoPicker = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      LocationPickerMode = module.LocationPickerMode;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
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

      var script = exports('default', defineComponent({
        name: 'locationPicker',
        props: _objectSpread2({
          modelValue: {
            type: Object
          },
          currentPickerMode: {
            type: Number,
            default: () => LocationPickerMode.Named
          },
          allowedPickerModes: {
            type: Number,
            default: () => LocationPickerMode.All
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue", "update:currentPickerMode"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var fieldProps = useStandardRockFormFieldProps(props);
          var selectedMode = ref(props.currentPickerMode.toString());
          var numericSelectedMode = computed(() => Number(selectedMode.value));
          var options = computed(() => {
            var optionList = [];
            if (props.allowedPickerModes & LocationPickerMode.Named) {
              optionList.push({
                text: "Location",
                value: "2"
              });
            }
            if (props.allowedPickerModes & LocationPickerMode.Address) {
              optionList.push({
                text: "Address",
                value: "1"
              });
            }
            if (props.allowedPickerModes & LocationPickerMode.Point) {
              optionList.push({
                text: "Point",
                value: "4"
              });
            }
            if (props.allowedPickerModes & LocationPickerMode.Polygon) {
              optionList.push({
                text: "Geo-fence",
                value: "8"
              });
            }
            return optionList;
          });
          var itemValue = ref(undefined);
          var addressValue = ref({});
          var pointValue = ref("");
          var polygonValue = ref("");
          var popupStatus = ref(false);
          var internalValue = computed(() => {
            if (numericSelectedMode.value === LocationPickerMode.Address) {
              return addressValue.value;
            }
            if (numericSelectedMode.value === LocationPickerMode.Named) {
              return itemValue.value;
            }
            if (numericSelectedMode.value === LocationPickerMode.Point) {
              return pointValue.value;
            }
            if (numericSelectedMode.value === LocationPickerMode.Polygon) {
              return polygonValue.value;
            }
            return "";
          });
          watch(internalValue, () => emit("update:modelValue", internalValue.value));
          watch(numericSelectedMode, () => emit("update:currentPickerMode", numericSelectedMode.value));
          watch(() => props.modelValue, () => {
            if (props.modelValue == internalValue.value) {
              return;
            }
            if (props.modelValue == undefined) {
              if (numericSelectedMode.value === LocationPickerMode.Address) {
                addressValue.value = {};
              }
              if (numericSelectedMode.value === LocationPickerMode.Named) {
                itemValue.value = undefined;
              }
              if (numericSelectedMode.value === LocationPickerMode.Point) {
                pointValue.value = "";
              }
              if (numericSelectedMode.value === LocationPickerMode.Polygon) {
                polygonValue.value = "";
              }
              return;
            }
            if (typeof props.modelValue === "string") {
              if ((props.modelValue.search(/^POINT *\(/) >= 0 || props.modelValue == "") && props.allowedPickerModes & LocationPickerMode.Point) {
                pointValue.value = props.modelValue;
                selectedMode.value = "".concat(LocationPickerMode.Point);
                return;
              } else if ((props.modelValue.search(/^POLYGON *\(\(/) >= 0 || props.modelValue == "") && props.allowedPickerModes & LocationPickerMode.Polygon) {
                polygonValue.value = props.modelValue;
                selectedMode.value = "".concat(LocationPickerMode.Polygon);
                return;
              }
            } else if (typeof props.modelValue === "object") {
              if (props.allowedPickerModes & LocationPickerMode.Address && ("street1" in props.modelValue || "street2" in props.modelValue || "city" in props.modelValue || "state" in props.modelValue || "postalCode" in props.modelValue || "locality" in props.modelValue || "country" in props.modelValue)) {
                addressValue.value = props.modelValue;
                selectedMode.value = "".concat(LocationPickerMode.Address);
                return;
              } else if ("value" in props.modelValue && props.allowedPickerModes & LocationPickerMode.Named) {
                itemValue.value = props.modelValue;
                selectedMode.value = "".concat(LocationPickerMode.Named);
                return;
              }
            }
            emit("update:modelValue", internalValue.value);
            emit("update:currentPickerMode", numericSelectedMode.value);
          }, {
            immediate: true
          });
          watch(() => props.currentPickerMode, () => {
            selectedMode.value = "".concat(props.currentPickerMode);
          });
          watch(() => props.allowedPickerModes, () => {
            if (!(props.allowedPickerModes & numericSelectedMode.value)) {
              selectedMode.value = options.value[0].value;
            }
          }, {
            immediate: true
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [unref(numericSelectedMode) === unref(LocationPickerMode).Named ? (openBlock(), createBlock(unref(LocationItemPicker), mergeProps({
              key: 0,
              modelValue: itemValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => itemValue.value = $event),
              showPopup: popupStatus.value,
              "onUpdate:showPopup": _cache[2] || (_cache[2] = $event => popupStatus.value = $event)
            }, unref(fieldProps)), createSlots({
              _: 2
            }, [unref(options).length > 1 ? {
              name: "pickerContentSuperHeader",
              fn: withCtx(() => [createVNode(unref(RadioButtonList), {
                modelValue: selectedMode.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => selectedMode.value = $event),
                items: unref(options),
                horizontal: ""
              }, null, 8, ["modelValue", "items"])])
            } : undefined, _ctx.$slots.prepend ? {
              name: "prepend",
              fn: withCtx(_ref2 => {
                var isInputGroupSupported = _ref2.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.inputGroupPrepend ? {
              name: "inputGroupPrepend",
              fn: withCtx(_ref3 => {
                var isInputGroupSupported = _ref3.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "inputGroupPrepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.append ? {
              name: "append",
              fn: withCtx(_ref4 => {
                var isInputGroupSupported = _ref4.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined]), 1040, ["modelValue", "showPopup"])) : createCommentVNode("v-if", true), unref(numericSelectedMode) === unref(LocationPickerMode).Address ? (openBlock(), createBlock(unref(LocationAddressPicker), mergeProps({
              key: 1,
              modelValue: addressValue.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => addressValue.value = $event),
              showPopup: popupStatus.value,
              "onUpdate:showPopup": _cache[5] || (_cache[5] = $event => popupStatus.value = $event)
            }, unref(fieldProps)), createSlots({
              _: 2
            }, [unref(options).length > 1 ? {
              name: "pickerContentSuperHeader",
              fn: withCtx(() => [createVNode(unref(RadioButtonList), {
                modelValue: selectedMode.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => selectedMode.value = $event),
                items: unref(options),
                horizontal: ""
              }, null, 8, ["modelValue", "items"])])
            } : undefined, _ctx.$slots.prepend ? {
              name: "prepend",
              fn: withCtx(_ref5 => {
                var isInputGroupSupported = _ref5.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.inputGroupPrepend ? {
              name: "inputGroupPrepend",
              fn: withCtx(_ref6 => {
                var isInputGroupSupported = _ref6.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "inputGroupPrepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.append ? {
              name: "append",
              fn: withCtx(_ref7 => {
                var isInputGroupSupported = _ref7.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined]), 1040, ["modelValue", "showPopup"])) : createCommentVNode("v-if", true), unref(numericSelectedMode) === unref(LocationPickerMode).Point ? (openBlock(), createBlock(unref(GeoPicker), mergeProps({
              key: 2,
              modelValue: pointValue.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => pointValue.value = $event),
              drawingMode: "Point",
              showPopup: popupStatus.value,
              "onUpdate:showPopup": _cache[8] || (_cache[8] = $event => popupStatus.value = $event)
            }, unref(fieldProps)), createSlots({
              _: 2
            }, [unref(options).length > 1 ? {
              name: "pickerContentSuperHeader",
              fn: withCtx(() => [createVNode(unref(RadioButtonList), {
                modelValue: selectedMode.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => selectedMode.value = $event),
                items: unref(options),
                horizontal: ""
              }, null, 8, ["modelValue", "items"])])
            } : undefined, _ctx.$slots.prepend ? {
              name: "prepend",
              fn: withCtx(_ref8 => {
                var isInputGroupSupported = _ref8.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.inputGroupPrepend ? {
              name: "inputGroupPrepend",
              fn: withCtx(_ref9 => {
                var isInputGroupSupported = _ref9.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "inputGroupPrepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.append ? {
              name: "append",
              fn: withCtx(_ref10 => {
                var isInputGroupSupported = _ref10.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined]), 1040, ["modelValue", "showPopup"])) : createCommentVNode("v-if", true), unref(numericSelectedMode) === unref(LocationPickerMode).Polygon ? (openBlock(), createBlock(unref(GeoPicker), mergeProps({
              key: 3,
              modelValue: polygonValue.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => polygonValue.value = $event),
              drawingMode: "Polygon",
              showPopup: popupStatus.value,
              "onUpdate:showPopup": _cache[11] || (_cache[11] = $event => popupStatus.value = $event)
            }, unref(fieldProps)), createSlots({
              _: 2
            }, [unref(options).length > 1 ? {
              name: "pickerContentSuperHeader",
              fn: withCtx(() => [createVNode(unref(RadioButtonList), {
                modelValue: selectedMode.value,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => selectedMode.value = $event),
                items: unref(options),
                horizontal: ""
              }, null, 8, ["modelValue", "items"])])
            } : undefined, _ctx.$slots.prepend ? {
              name: "prepend",
              fn: withCtx(_ref11 => {
                var isInputGroupSupported = _ref11.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.inputGroupPrepend ? {
              name: "inputGroupPrepend",
              fn: withCtx(_ref12 => {
                var isInputGroupSupported = _ref12.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "inputGroupPrepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.append ? {
              name: "append",
              fn: withCtx(_ref13 => {
                var isInputGroupSupported = _ref13.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined]), 1040, ["modelValue", "showPopup"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "Framework/Controls/locationPicker.obs";

    })
  };
}));
//# sourceMappingURL=locationPicker.obs.js.map
