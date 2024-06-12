System.register(['vue', './datePartsPicker.obs'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createBlock, unref, isRef, DatePartsPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
    }, function (module) {
      DatePartsPicker = module["default"];
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'monthYearPicker',
        props: {
          modelValue: {
            type: Object,
            required: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = computed({
            get() {
              if (!props.modelValue) {
                return undefined;
              }
              return Object.assign({}, props.modelValue, {
                day: 0
              });
            },
            set(newVal) {
              if (!newVal) {
                emit("update:modelValue", undefined);
              } else {
                var value = {
                  month: newVal.month,
                  year: newVal.year
                };
                emit("update:modelValue", value);
              }
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(DatePartsPicker), {
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              hideDay: ""
            }, null, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/monthYearPicker.obs";

    })
  };
}));
//# sourceMappingURL=monthYearPicker.obs.js.map
