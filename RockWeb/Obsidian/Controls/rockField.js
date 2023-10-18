System.register(['@Obsidian/Utility/fieldTypes', 'vue', '@Obsidian/SystemGuids/fieldType'], (function (exports) {
    'use strict';
    var getFieldType, defineComponent, computed, provide, FieldType;
    return {
        setters: [function (module) {
            getFieldType = module.getFieldType;
        }, function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
            provide = module.provide;
        }, function (module) {
            FieldType = module.FieldType;
        }],
        execute: (function () {

            var textField = getFieldType(FieldType.Text);
            var rockField = exports('default', defineComponent({
              name: "RockField",
              props: {
                modelValue: {
                  type: String,
                  required: false
                },
                attribute: {
                  type: Object,
                  required: true
                },
                showEmptyValue: {
                  type: Boolean,
                  default: false
                },
                isEditMode: {
                  type: Boolean,
                  default: false
                },
                showLabel: {
                  type: Boolean,
                  default: true
                },
                isCondensed: {
                  type: Boolean,
                  default: false
                }
              },
              setup(props, _ref) {
                var emit = _ref.emit;
                var field = computed(() => {
                  var _props$attribute$fiel;
                  var fieldType = getFieldType((_props$attribute$fiel = props.attribute.fieldTypeGuid) !== null && _props$attribute$fiel !== void 0 ? _props$attribute$fiel : "");
                  return fieldType !== null && fieldType !== void 0 ? fieldType : textField;
                });
                var showValue = computed(() => {
                  var _field$value, _props$modelValue, _props$attribute$conf;
                  return props.showEmptyValue || ((_field$value = field.value) === null || _field$value === void 0 ? void 0 : _field$value.getTextValue((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : "", (_props$attribute$conf = props.attribute.configurationValues) !== null && _props$attribute$conf !== void 0 ? _props$attribute$conf : {})) !== "";
                });
                var isRequired = computed(() => props.attribute.isRequired);
                var rules = computed(() => isRequired.value ? "required" : "");
                var isEditMode = computed(() => props.isEditMode);
                var label = computed(() => props.attribute.name);
                var helpText = computed(() => props.attribute.description);
                var valueComponent = computed(() => {
                  var _field$value2, _field$value3;
                  return props.isCondensed ? (_field$value2 = field.value) === null || _field$value2 === void 0 ? void 0 : _field$value2.getCondensedFormattedComponent() : (_field$value3 = field.value) === null || _field$value3 === void 0 ? void 0 : _field$value3.getFormattedComponent();
                });
                var editComponent = computed(() => {
                  var _field$value4;
                  return (_field$value4 = field.value) === null || _field$value4 === void 0 ? void 0 : _field$value4.getEditComponent();
                });
                var value = computed({
                  get: () => props.modelValue || "",
                  set(newValue) {
                    emit("update:modelValue", newValue);
                  }
                });
                var configurationValues = computed(() => {
                  var _props$attribute$conf2;
                  return (_props$attribute$conf2 = props.attribute.configurationValues) !== null && _props$attribute$conf2 !== void 0 ? _props$attribute$conf2 : {};
                });
                provide("isRequired", isRequired);
                return {
                  label,
                  showValue,
                  valueComponent,
                  rules,
                  isEditMode,
                  editComponent,
                  value,
                  helpText,
                  configurationValues
                };
              },
              template: "\n<div v-if=\"!isEditMode\">\n    <template v-if=\"showLabel\">\n        <div v-if=\"showValue\" class=\"form-group static-control\">\n            <label class=\"control-label\">\n                {{ label }}\n            </label>\n            <div class=\"control-wrapper\">\n                <div class=\"form-control-static\">\n                    <component :is=\"valueComponent\" :modelValue=\"value\" :configurationValues=\"configurationValues\" />\n                </div>\n            </div>\n        </div>\n    </template>\n    <component v-else :is=\"valueComponent\" :modelValue=\"value\" :configurationValues=\"configurationValues\" />\n</div>\n<div v-else>\n    <component :is=\"editComponent\"\n        v-model=\"value\"\n        :label=\"label\"\n        :help=\"helpText\"\n        :configurationValues=\"configurationValues\"\n        :rules=\"rules\" />\n</div>"
            }));

        })
    };
}));
//# sourceMappingURL=rockField.js.map
