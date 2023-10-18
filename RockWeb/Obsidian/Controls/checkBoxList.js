System.register(['vue', '@Obsidian/Utility/component', './rockFormField', '@Obsidian/Utility/stringUtils'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, updateRefValue, RockFormField, defaultControlCompareValue;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            defaultControlCompareValue = module.defaultControlCompareValue;
        }],
        execute: (function () {

            var checkBoxList = exports('default', defineComponent({
              name: "CheckBoxList",
              components: {
                RockFormField
              },
              props: {
                modelValue: {
                  type: Array,
                  default: []
                },
                disabled: {
                  type: Boolean,
                  required: false,
                  default: false
                },
                items: {
                  type: Array,
                  required: true
                },
                repeatColumns: {
                  type: Number,
                  default: 0
                },
                horizontal: {
                  type: Boolean,
                  default: false
                },
                compareValue: {
                  type: Function,
                  default: defaultControlCompareValue
                }
              },
              emits: {
                "update:modelValue": _value => true
              },
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = ref([...props.modelValue]);
                var valueForItem = item => {
                  var _item$value;
                  return (_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : "";
                };
                var textForItem = item => {
                  var _item$text;
                  return (_item$text = item.text) !== null && _item$text !== void 0 ? _item$text : "";
                };
                var uniqueIdForItem = (uniqueId, item) => {
                  var _item$value2;
                  return "".concat(uniqueId, "-").concat(((_item$value2 = item.value) !== null && _item$value2 !== void 0 ? _item$value2 : "").replace(" ", "-"));
                };
                var containerClasses = computed(() => {
                  var classes = [];
                  if (props.horizontal) {
                    classes.push("rockcheckboxlist-horizontal");
                    if (props.repeatColumns > 0) {
                      classes.push("in-columns in-columns-".concat(props.repeatColumns));
                    }
                  } else {
                    classes.push("rockcheckboxlist-vertical input-group");
                  }
                  return classes.join(" ");
                });
                var syncInternalValue = () => {
                  var value = [...props.modelValue];
                  value = props.items.filter(o => value.some(v => {
                    var _o$value;
                    return props.compareValue(v, (_o$value = o.value) !== null && _o$value !== void 0 ? _o$value : "");
                  })).map(o => {
                    var _o$value2;
                    return (_o$value2 = o.value) !== null && _o$value2 !== void 0 ? _o$value2 : "";
                  });
                  updateRefValue(internalValue, value);
                };
                watch([() => props.modelValue, () => props.items], () => {
                  syncInternalValue();
                });
                watch(internalValue, () => {
                  emit("update:modelValue", internalValue.value);
                });
                syncInternalValue();
                return {
                  containerClasses,
                  internalValue,
                  textForItem,
                  uniqueIdForItem,
                  valueForItem
                };
              },
              template: "\n<RockFormField\n    :modelValue=\"internalValue\"\n    formGroupClasses=\"check-box-list\"\n    name=\"check-box-list\">\n    <template #default=\"{uniqueId}\">\n        <div class=\"control-wrapper\">\n            <slot name=\"prepend\" :isInputGroupSupported=\"false\" />\n            <div class=\"controls rockcheckboxlist\" :class=\"containerClasses\">\n                <template v-if=\"horizontal\">\n                    <label v-for=\"item in items\" class=\"checkbox-inline\" :for=\"uniqueIdForItem(uniqueId, item)\">\n                        <input :disabled=\"disabled\" :id=\"uniqueIdForItem(uniqueId, item)\" :name=\"uniqueId\" type=\"checkbox\" :value=\"valueForItem(item)\" v-model=\"internalValue\" />\n                        <span class=\"label-text\">{{textForItem(item)}}</span>\n                    </label>\n                </template>\n                <template v-else>\n                    <div v-for=\"item in items\" class=\"checkbox\">\n                        <label :for=\"uniqueIdForItem(uniqueId, item)\">\n                            <input :disabled=\"disabled\" :id=\"uniqueIdForItem(uniqueId, item)\" :name=\"uniqueId\" type=\"checkbox\" :value=\"valueForItem(item)\" v-model=\"internalValue\" />\n                            <span class=\"label-text\">{{textForItem(item)}}</span>\n                        </label>\n                    </div>\n                </template>\n            </div>\n            <slot name=\"append\" :isInputGroupSupported=\"false\" />\n        </div>\n    </template>\n</RockFormField>\n"
            }));

        })
    };
}));
//# sourceMappingURL=checkBoxList.js.map
