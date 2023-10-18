System.register(['vue', '@Obsidian/Utility/component'], (function (exports) {
    'use strict';
    var defineComponent, useVModelPassthrough;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }],
        execute: (function () {

            var segmentedPicker = exports('default', defineComponent({
              name: "SegmentedPicker",
              props: {
                modelValue: {
                  type: String,
                  default: ""
                },
                items: {
                  type: Array,
                  default: []
                }
              },
              emits: ["update:modelValue"],
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = useVModelPassthrough(props, "modelValue", emit);
                var getButtonClass = item => {
                  return ["btn", item.value === internalValue.value ? "btn-primary" : "btn-default"];
                };
                var onItemClick = item => {
                  var _item$value;
                  internalValue.value = (_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : "";
                };
                return {
                  getButtonClass,
                  internalValue,
                  onItemClick
                };
              },
              template: "\n<div class=\"btn-group btn-group-xs mb-2\" role=\"group\">\n    <button v-for=\"item in items\" :class=\"getButtonClass(item)\" :key=\"item.value\" type=\"button\" @click=\"onItemClick(item)\">{{ item.text }}</button>\n</div>\n"
            }));

        })
    };
}));
//# sourceMappingURL=segmentedPicker.js.map
