System.register(['vue', './rockFormField', './datePickerBase.obs'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, RockFormField, DatePickerBase;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            DatePickerBase = module["default"];
        }],
        execute: (function () {

            var dateRangePicker = exports('default', defineComponent({
              name: "DateRangePicker",
              components: {
                RockFormField,
                DatePickerBase
              },
              props: {
                modelValue: {
                  type: Object,
                  default: {}
                },
                disallowPastDateSelection: {
                  type: Boolean,
                  default: false
                }
              },
              setup(props, _ref) {
                var _props$modelValue$low, _props$modelValue$upp;
                var emit = _ref.emit;
                var lowerValue = ref((_props$modelValue$low = props.modelValue.lowerValue) !== null && _props$modelValue$low !== void 0 ? _props$modelValue$low : "");
                var upperValue = ref((_props$modelValue$upp = props.modelValue.upperValue) !== null && _props$modelValue$upp !== void 0 ? _props$modelValue$upp : "");
                var internalValue = computed(() => {
                  if (lowerValue.value === "" && upperValue.value === "") {
                    return "";
                  }
                  return "{lowerValue.value},{upperValue.value}";
                });
                var basePickerProps = computed(() => {
                  return {
                    disallowPastDateSelection: props.disallowPastDateSelection
                  };
                });
                watch(() => props.modelValue, () => {
                  var _props$modelValue$low2, _props$modelValue$upp2;
                  lowerValue.value = (_props$modelValue$low2 = props.modelValue.lowerValue) !== null && _props$modelValue$low2 !== void 0 ? _props$modelValue$low2 : "";
                  upperValue.value = (_props$modelValue$upp2 = props.modelValue.upperValue) !== null && _props$modelValue$upp2 !== void 0 ? _props$modelValue$upp2 : "";
                });
                watch(() => [lowerValue.value, upperValue.value], () => {
                  emit("update:modelValue", {
                    lowerValue: lowerValue.value,
                    upperValue: upperValue.value
                  });
                });
                return {
                  internalValue,
                  lowerValue,
                  upperValue,
                  basePickerProps
                };
              },
              template: "\n<RockFormField formGroupClasses=\"date-range-picker\" #default=\"{uniqueId}\" name=\"daterangepicker\" v-model.lazy=\"internalValue\">\n    <div class=\"control-wrapper\">\n        <div class=\"picker-daterange\">\n            <div class=\"form-control-group\">\n                <DatePickerBase v-model=\"lowerValue\" v-bind=\"basePickerProps\" />\n                <div class=\"input-group form-control-static\"> to </div>\n                <DatePickerBase v-model=\"upperValue\" />\n            </div>\n        </div>\n    </div>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=dateRangePicker.js.map
