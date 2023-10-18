System.register(['vue', './dropDownList', './rockFormField', './textBox'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, DropDownList, RockFormField, TextBox;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }],
        execute: (function () {

            var keyValueList = exports('default', defineComponent({
              name: "KeyValueListField.Edit",
              components: {
                RockFormField,
                DropDownList,
                TextBox
              },
              props: {
                modelValue: {
                  type: Array,
                  required: false
                },
                valueOptions: {
                  type: Array,
                  required: false
                },
                keyPlaceholder: {
                  type: String,
                  required: false
                },
                valuePlaceholder: {
                  type: String,
                  required: false
                },
                displayValueFirst: {
                  type: Boolean,
                  default: false
                }
              },
              emits: {
                "update:modelValue": _value => true
              },
              setup(props, _ref) {
                var _props$modelValue;
                var emit = _ref.emit;
                var internalValues = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : []);
                var options = computed(() => {
                  var _props$valueOptions;
                  return (_props$valueOptions = props.valueOptions) !== null && _props$valueOptions !== void 0 ? _props$valueOptions : [];
                });
                var hasValues = computed(() => options.value.length > 0);
                watch(() => props.modelValue, () => {
                  var _props$modelValue2;
                  internalValues.value = (_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : [];
                });
                watch(() => internalValues.value, () => {
                  emit("update:modelValue", internalValues.value);
                }, {
                  deep: true
                });
                var onAddClick = () => {
                  var defaultValue = "";
                  if (hasValues.value) {
                    var _options$value$0$valu;
                    defaultValue = (_options$value$0$valu = options.value[0].value) !== null && _options$value$0$valu !== void 0 ? _options$value$0$valu : "";
                  }
                  internalValues.value.push({
                    key: "",
                    value: defaultValue
                  });
                };
                var onRemoveClick = index => {
                  internalValues.value.splice(index, 1);
                };
                return {
                  internalValues,
                  hasValues,
                  options,
                  onAddClick,
                  onRemoveClick
                };
              },
              template: "\n<RockFormField\n    :modelValue=\"internalValues\"\n    formGroupClasses=\"key-value-list\"\n    name=\"key-value-list\">\n    <template #default=\"{uniqueId}\">\n        <div class=\"control-wrapper\">\n<span :id=\"uniqueId\" class=\"key-value-list\">\n    <span class=\"key-value-rows\">\n        <div v-for=\"(value, valueIndex) in internalValues\" class=\"controls controls-row form-control-group\">\n            <template v-if=\"!displayValueFirst\">\n                <input v-model=\"value.key\" class=\"key-value-key form-control input-width-md\" type=\"text\" :placeholder=\"keyPlaceholder\">\n\n                <select v-if=\"hasValues\" v-model=\"value.value\" class=\"form-control input-width-lg\">\n                    <option v-for=\"option in options\" :value=\"option.value\" :key=\"option.value\">{{ option.text }}</option>\n                </select>\n                <input v-else v-model=\"value.value\" class=\"key-value-value form-control input-width-md\" type=\"text\" :placeholder=\"valuePlaceholder\">\n            </template>\n            <template v-else>\n                <select v-if=\"hasValues\" v-model=\"value.value\" class=\"form-control input-width-lg\">\n                    <option v-for=\"option in options\" :value=\"option.value\" :key=\"option.value\">{{ option.text }}</option>\n                </select>\n                <input v-else v-model=\"value.value\" class=\"key-value-value form-control input-width-md\" type=\"text\" :placeholder=\"valuePlaceholder\">\n\n                <input v-model=\"value.key\" class=\"key-value-key form-control input-width-md\" type=\"text\" :placeholder=\"keyPlaceholder\">\n            </template>\n\n            <a href=\"#\" @click.prevent=\"onRemoveClick(valueIndex)\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-times\"></i></a>\n        </div>\n    </span>\n    <div class=\"control-actions\">\n        <a class=\"btn btn-action btn-square btn-xs\" href=\"#\" @click.prevent=\"onAddClick\"><i class=\"fa fa-plus-circle\"></i></a>\n    </div>\n</span>\n        </div>\n    </template>\n</RockFormField>\n"
            }));

        })
    };
}));
//# sourceMappingURL=keyValueList.js.map
