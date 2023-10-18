System.register(['vue', './rockFormField', '@Obsidian/Utility/component', '@Obsidian/Utility/stringUtils'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, RockFormField, updateRefValue, defaultControlCompareValue;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function (module) {
            defaultControlCompareValue = module.defaultControlCompareValue;
        }],
        execute: (function () {

            var radioButtonList = exports('default', defineComponent({
              name: "RadioButtonList",
              components: {
                RockFormField
              },
              props: {
                items: {
                  type: Array,
                  default: []
                },
                modelValue: {
                  type: String,
                  default: ""
                },
                disabled: {
                  type: Boolean,
                  required: false,
                  default: false
                },
                formGroupClasses: {
                  type: String,
                  default: ""
                },
                repeatColumns: {
                  type: Number,
                  default: 0
                },
                horizontal: {
                  type: Boolean,
                  default: false
                },
                showBlankItem: {
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
                var internalValue = ref(props.modelValue);
                var containerClasses = computed(() => {
                  var classes = [];
                  if (props.repeatColumns > 0) {
                    classes.push("in-columns in-columns-".concat(props.repeatColumns));
                  }
                  if (props.horizontal) {
                    classes.push("rockradiobuttonlist-horizontal");
                  } else {
                    classes.push("rockradiobuttonlist-vertical");
                  }
                  return classes.join(" ");
                });
                var actualItems = computed(() => {
                  var items = [...props.items];
                  if (props.showBlankItem) {
                    items.splice(0, 0, {
                      value: "",
                      text: "None"
                    });
                  }
                  return items;
                });
                function isItemDisabled(item) {
                  return item.category === "disabled" || props.disabled;
                }
                var getItemUniqueId = (uniqueId, item) => {
                  var _item$value;
                  var key = ((_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : "").replace(" ", "-");
                  return "".concat(uniqueId, "-").concat(key);
                };
                var syncInternalValue = () => {
                  var value = props.modelValue;
                  if (value) {
                    var selectedOption = props.items.find(o => {
                      var _o$value;
                      return props.compareValue(value, (_o$value = o.value) !== null && _o$value !== void 0 ? _o$value : "");
                    }) || null;
                    if (!selectedOption) {
                      value = "";
                    } else {
                      var _selectedOption$value;
                      value = (_selectedOption$value = selectedOption.value) !== null && _selectedOption$value !== void 0 ? _selectedOption$value : "";
                    }
                  }
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
                  actualItems,
                  containerClasses,
                  getItemUniqueId,
                  internalValue,
                  isItemDisabled
                };
              },
              template: "\n<RockFormField\n    :formGroupClasses=\"'rock-radio-button-list ' + formGroupClasses\"\n     #default=\"{uniqueId}\" name=\"radiobuttonlist\" v-model=\"internalValue\">\n    <div class=\"control-wrapper\">\n        <slot name=\"prepend\" :isInputGroupSupported=\"false\" />\n        <div class=\"controls rockradiobuttonlist\" :class=\"containerClasses\">\n            <span>\n                <template v-if=\"horizontal\">\n                    <label v-for=\"item in actualItems\" class=\"radio-inline\" :for=\"getItemUniqueId(uniqueId, item)\" :key=\"item.value\">\n                        <input :id=\"getItemUniqueId(uniqueId, item)\" :name=\"uniqueId\" type=\"radio\" :value=\"item.value\" v-model=\"internalValue\" :disabled=\"isItemDisabled(item)\" />\n                        <span class=\"label-text\">{{item.text}}</span>\n                    </label>\n                </template>\n                <template v-else>\n                    <div v-for=\"item in actualItems\" class=\"radio\" :key=\"item.value\">\n                        <label :for=\"getItemUniqueId(uniqueId, item)\">\n                            <input :id=\"getItemUniqueId(uniqueId, item)\" :name=\"uniqueId\" type=\"radio\" :value=\"item.value\" v-model=\"internalValue\" :disabled=\"isItemDisabled(item)\" />\n                            <span class=\"label-text\">{{item.text}}</span>\n                        </label>\n                    </div>\n                </template>\n            </span>\n        </div>\n        <slot name=\"append\" :isInputGroupSupported=\"false\" />\n    </div>\n</RockFormField>"
            }));

        })
    };
}));
//# sourceMappingURL=radioButtonList.js.map
