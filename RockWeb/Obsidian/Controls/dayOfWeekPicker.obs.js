System.register(['vue', '@Obsidian/Enums/Controls/dayOfWeek', '@Obsidian/Utility/component', './dropDownList', './checkBoxList'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createBlock, unref, isRef, DayOfWeek, useVModelPassthrough, DropDownList, CheckBoxList;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
    }, function (module) {
      DayOfWeek = module.DayOfWeek;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'dayOfWeekPicker',
        props: {
          modelValue: {
            type: String,
            default: ""
          },
          multiple: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var checkBoxValue = computed({
            get() {
              if (!internalValue.value) {
                return [];
              } else if (Array.isArray(internalValue.value)) {
                return internalValue.value;
              } else {
                return [internalValue.value];
              }
            },
            set(newVal) {
              internalValue.value = newVal;
            }
          });
          var dropDownValue = computed({
            get() {
              if (props.multiple) {
                var _internalValue$value;
                return (_internalValue$value = internalValue.value) !== null && _internalValue$value !== void 0 ? _internalValue$value : [];
              } else {
                var _internalValue$value2;
                return (_internalValue$value2 = internalValue.value) !== null && _internalValue$value2 !== void 0 ? _internalValue$value2 : "";
              }
            },
            set(newVal) {
              internalValue.value = newVal;
            }
          });
          var options = [{
            text: "Sunday",
            value: DayOfWeek.Sunday.toString()
          }, {
            text: "Monday",
            value: DayOfWeek.Monday.toString()
          }, {
            text: "Tuesday",
            value: DayOfWeek.Tuesday.toString()
          }, {
            text: "Wednesday",
            value: DayOfWeek.Wednesday.toString()
          }, {
            text: "Thursday",
            value: DayOfWeek.Thursday.toString()
          }, {
            text: "Friday",
            value: DayOfWeek.Friday.toString()
          }, {
            text: "Saturday",
            value: DayOfWeek.Saturday.toString()
          }];
          return (_ctx, _cache) => {
            return __props.multiple ? (openBlock(), createBlock(unref(CheckBoxList), {
              key: 0,
              modelValue: unref(checkBoxValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(checkBoxValue) ? checkBoxValue.value = $event : null),
              items: options,
              horizontal: ""
            }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(DropDownList), {
              key: 1,
              modelValue: unref(dropDownValue),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(dropDownValue) ? dropDownValue.value = $event : null),
              items: options
            }, null, 8, ["modelValue"]));
          };
        }
      }));

      script.__file = "Framework/Controls/dayOfWeekPicker.obs";

    })
  };
}));
//# sourceMappingURL=dayOfWeekPicker.obs.js.map
