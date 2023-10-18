System.register(['vue', './utils', '@Obsidian/Controls/dayOfWeekPicker.obs'], (function (exports) {
    'use strict';
    var defineComponent, computed, getFieldEditorProps, DayOfWeekPicker;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            DayOfWeekPicker = module["default"];
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "DaysOfWeekField.Edit",
              components: {
                DayOfWeekPicker
              },
              props: getFieldEditorProps(),
              emits: {
                "update:modelValue": _value => true
              },
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = computed({
                  get() {
                    var _props$modelValue;
                    var value = (_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : "";
                    return value !== "" ? value.split(",") : [];
                  },
                  set(newVal) {
                    emit("update:modelValue", newVal.sort().join(","));
                  }
                });
                return {
                  internalValue
                };
              },
              template: "\n<DayOfWeekPicker v-model=\"internalValue\" multiple />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "DaysOfWeekField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=daysOfWeekFieldComponents.js.map
