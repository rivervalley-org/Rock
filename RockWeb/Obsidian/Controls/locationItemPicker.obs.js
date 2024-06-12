System.register(['vue', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Utility/component', './treeItemPicker.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, createSlots, withCtx, renderSlot, LocationTreeItemProvider, updateRefValue, TreeItemPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      createSlots = module.createSlots;
      withCtx = module.withCtx;
      renderSlot = module.renderSlot;
    }, function (module) {
      LocationTreeItemProvider = module.LocationTreeItemProvider;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      TreeItemPicker = module["default"];
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'locationItemPicker',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          multiple: {
            type: Boolean,
            default: false
          },
          securityGrantToken: {
            type: String,
            required: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue;
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : null);
          var itemProvider = new LocationTreeItemProvider();
          itemProvider.securityGrantToken = props.securityGrantToken;
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue2;
            updateRefValue(internalValue, (_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : null);
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(TreeItemPicker), {
              modelValue: internalValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event),
              formGroupClasses: "location-item-picker",
              iconCssClass: "fa fa-home",
              provider: unref(itemProvider),
              multiple: __props.multiple
            }, createSlots({
              _: 2
            }, [_ctx.$slots.pickerContentSuperHeader ? {
              name: "pickerContentSuperHeader",
              fn: withCtx(() => [renderSlot(_ctx.$slots, "pickerContentSuperHeader")])
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
            } : undefined]), 1032, ["modelValue", "provider", "multiple"]);
          };
        }
      }));

      script.__file = "Framework/Controls/locationItemPicker.obs";

    })
  };
}));
//# sourceMappingURL=locationItemPicker.obs.js.map
