System.register(['vue', './locationItemPicker', './locationAddressPicker.obs', './geoPicker.obs', './radioButtonList'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, Fragment, createBlock, unref, createSlots, withCtx, createVNode, renderSlot, createCommentVNode, LocationItemPicker, LocationAddressPicker, GeoPicker, RadioButtonList;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
      unref = module.unref;
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
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'locationPicker',
        props: {
          modelValue: {
            type: Object
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var selectedOption = ref("0");
          var options = [{
            text: "Location",
            value: "0"
          }, {
            text: "Address",
            value: "1"
          }, {
            text: "Point",
            value: "2"
          }, {
            text: "Geo-fence",
            value: "3"
          }];
          var itemValue = ref({});
          var addressValue = ref({});
          var pointValue = ref("");
          var fenceValue = ref("");
          var popupStatus = ref(false);
          var internalValue = computed(() => {
            if (selectedOption.value == "0") {
              return itemValue.value;
            }
            if (selectedOption.value == "1") {
              return addressValue.value;
            }
            if (selectedOption.value == "2") {
              return pointValue.value;
            }
            if (selectedOption.value == "3") {
              return fenceValue.value;
            }
            return "";
          });
          watch(internalValue, () => emit("update:modelValue", internalValue.value));
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [selectedOption.value == '0' ? (openBlock(), createBlock(unref(LocationItemPicker), {
              key: 0,
              modelValue: itemValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => itemValue.value = $event),
              showPopup: popupStatus.value,
              "onUpdate:showPopup": _cache[2] || (_cache[2] = $event => popupStatus.value = $event)
            }, createSlots({
              pickerContentSuperHeader: withCtx(() => [createVNode(unref(RadioButtonList), {
                modelValue: selectedOption.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => selectedOption.value = $event),
                items: options,
                horizontal: ""
              }, null, 8, ["modelValue"])]),
              _: 2
            }, [_ctx.$slots.prepend ? {
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
            } : undefined]), 1032, ["modelValue", "showPopup"])) : createCommentVNode("v-if", true), selectedOption.value == '1' ? (openBlock(), createBlock(unref(LocationAddressPicker), {
              key: 1,
              modelValue: addressValue.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => addressValue.value = $event),
              showPopup: popupStatus.value,
              "onUpdate:showPopup": _cache[5] || (_cache[5] = $event => popupStatus.value = $event)
            }, createSlots({
              pickerContentSuperHeader: withCtx(() => [createVNode(unref(RadioButtonList), {
                modelValue: selectedOption.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => selectedOption.value = $event),
                items: options,
                horizontal: ""
              }, null, 8, ["modelValue"])]),
              _: 2
            }, [_ctx.$slots.prepend ? {
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
            } : undefined]), 1032, ["modelValue", "showPopup"])) : createCommentVNode("v-if", true), selectedOption.value == '2' ? (openBlock(), createBlock(unref(GeoPicker), {
              key: 2,
              modelValue: pointValue.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => pointValue.value = $event),
              drawingMode: "Point",
              showPopup: popupStatus.value,
              "onUpdate:showPopup": _cache[8] || (_cache[8] = $event => popupStatus.value = $event)
            }, createSlots({
              pickerContentSuperHeader: withCtx(() => [createVNode(unref(RadioButtonList), {
                modelValue: selectedOption.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => selectedOption.value = $event),
                items: options,
                horizontal: ""
              }, null, 8, ["modelValue"])]),
              _: 2
            }, [_ctx.$slots.prepend ? {
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
            } : undefined]), 1032, ["modelValue", "showPopup"])) : createCommentVNode("v-if", true), selectedOption.value == '3' ? (openBlock(), createBlock(unref(GeoPicker), {
              key: 3,
              modelValue: fenceValue.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => fenceValue.value = $event),
              drawingMode: "Polygon",
              showPopup: popupStatus.value,
              "onUpdate:showPopup": _cache[11] || (_cache[11] = $event => popupStatus.value = $event)
            }, createSlots({
              pickerContentSuperHeader: withCtx(() => [createVNode(unref(RadioButtonList), {
                modelValue: selectedOption.value,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => selectedOption.value = $event),
                items: options,
                horizontal: ""
              }, null, 8, ["modelValue"])]),
              _: 2
            }, [_ctx.$slots.prepend ? {
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
            } : undefined]), 1032, ["modelValue", "showPopup"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "Framework/Controls/locationPicker.obs";

    })
  };
}));
//# sourceMappingURL=locationPicker.obs.js.map
