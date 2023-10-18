System.register(['vue', '@Obsidian/Utility/fieldTypes', '@Obsidian/Core/Reporting/filterMode', '@Obsidian/Utility/component'], (function (exports) {
    'use strict';
    var defineComponent, computed, getFieldType, FilterMode, useVModelPassthrough;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }, function (module) {
            getFieldType = module.getFieldType;
        }, function (module) {
            FilterMode = module.FilterMode;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }],
        execute: (function () {

            var rockAttributeFilter = exports('default', defineComponent({
              name: "RockAttributeFilter",
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
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = useVModelPassthrough(props, "modelValue", emit);
                var field = computed(() => {
                  var _props$attribute$fiel;
                  return getFieldType((_props$attribute$fiel = props.attribute.fieldTypeGuid) !== null && _props$attribute$fiel !== void 0 ? _props$attribute$fiel : "");
                });
                var filterComponent = computed(() => {
                  var _field$value;
                  return (_field$value = field.value) === null || _field$value === void 0 ? void 0 : _field$value.getFilterComponent();
                });
                var configurationValues = computed(() => {
                  var _props$attribute$conf;
                  return (_props$attribute$conf = props.attribute.configurationValues) !== null && _props$attribute$conf !== void 0 ? _props$attribute$conf : {};
                });
                return {
                  configurationValues,
                  filterComponent,
                  internalValue
                };
              },
              template: "\n<component :is=\"filterComponent\"\n    v-model=\"internalValue\"\n    :configurationValues=\"configurationValues\"\n    :required=\"required\"\n    :filterMode=\"filterMode\" />\n"
            }));

        })
    };
}));
//# sourceMappingURL=rockAttributeFilter.js.map
