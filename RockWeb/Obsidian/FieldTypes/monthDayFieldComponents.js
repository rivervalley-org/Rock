System.register(['vue', './utils', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/monthDayPicker.obs'], (function (exports) {
    'use strict';
    var defineComponent, computed, getFieldEditorProps, toNumber, MonthDayPicker;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            toNumber = module.toNumber;
        }, function (module) {
            MonthDayPicker = module["default"];
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "MonthDayField.Edit",
              components: {
                MonthDayPicker
              },
              props: getFieldEditorProps(),
              emit: {
                "update:modelValue": _value => true
              },
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = computed({
                  get() {
                    var components = (props.modelValue || "").split("/");
                    if (components.length == 2) {
                      return {
                        month: toNumber(components[0]),
                        day: toNumber(components[1])
                      };
                    } else {
                      return undefined;
                    }
                  },
                  set(newVal) {
                    var value = newVal && newVal.month !== 0 && newVal.day !== 0 ? "".concat(newVal.month, "/").concat(newVal.day) : "";
                    emit("update:modelValue", value);
                  }
                });
                return {
                  internalValue
                };
              },
              template: "\n<MonthDayPicker v-model=\"internalValue\" :showYear=\"false\" />\n"
            }));
            var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
              name: "MonthDayField.Configuration",
              template: ""
            }));

        })
    };
}));
//# sourceMappingURL=monthDayFieldComponents.js.map
