System.register(['vue', './datePartsPicker'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createBlock, unref, isRef, getDefaultDatePartsPickerModel, DatePartsPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
    }, function (module) {
      getDefaultDatePartsPickerModel = module.getDefaultDatePartsPickerModel;
      DatePartsPicker = module["default"];
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'monthDayPicker',
        props: {
          modelValue: {
            type: Object,
            default: getDefaultDatePartsPickerModel
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = computed({
            get() {
              return Object.assign({}, props.modelValue, {
                year: 0
              });
            },
            set(newVal) {
              var value = {
                month: newVal.month,
                day: newVal.day
              };
              emit("update:modelValue", value);
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(DatePartsPicker), {
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              showYear: false
            }, null, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/monthDayPicker.obs";

    })
  };
}));
//# sourceMappingURL=monthDayPicker.obs.js.map
