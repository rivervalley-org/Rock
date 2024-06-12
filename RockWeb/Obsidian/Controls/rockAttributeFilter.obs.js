System.register(['vue', '@Obsidian/Utility/fieldTypes', '@Obsidian/Core/Reporting/filterMode', '@Obsidian/Utility/component', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createBlock, resolveDynamicComponent, unref, isRef, getFieldType, FilterMode, useVModelPassthrough, toGuidOrNull, emptyGuid;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      resolveDynamicComponent = module.resolveDynamicComponent;
      unref = module.unref;
      isRef = module.isRef;
    }, function (module) {
      getFieldType = module.getFieldType;
    }, function (module) {
      FilterMode = module.FilterMode;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'rockAttributeFilter',
        props: {
          modelValue: {
            type: Object,
            default: {
              value: ""
            }
          },
          attribute: {
            type: Object,
            required: true
          },
          required: {
            type: Boolean,
            default: false
          },
          filterMode: {
            type: Number,
            default: FilterMode.Simple
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var field = computed(() => {
            var _toGuidOrNull;
            return getFieldType((_toGuidOrNull = toGuidOrNull(props.attribute.fieldTypeGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid);
          });
          var filterComponent = computed(() => {
            var _field$value;
            return (_field$value = field.value) === null || _field$value === void 0 ? void 0 : _field$value.getFilterComponent(configurationValues.value);
          });
          var configurationValues = computed(() => {
            var _props$attribute$conf;
            return (_props$attribute$conf = props.attribute.configurationValues) !== null && _props$attribute$conf !== void 0 ? _props$attribute$conf : {};
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(resolveDynamicComponent(unref(filterComponent)), {
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              configurationValues: unref(configurationValues),
              required: __props.required,
              filterMode: __props.filterMode
            }, null, 8, ["modelValue", "configurationValues", "required", "filterMode"]);
          };
        }
      }));

      script.__file = "Framework/Controls/rockAttributeFilter.obs";

    })
  };
}));
//# sourceMappingURL=rockAttributeFilter.obs.js.map
