System.register(['vue', './rockFormField.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/stringUtils'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, createElementVNode, renderSlot, normalizeClass, createElementBlock, Fragment, renderList, withDirectives, vModelRadio, toDisplayString, RockFormField, updateRefValue, defaultControlCompareValue;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      renderSlot = module.renderSlot;
      normalizeClass = module.normalizeClass;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      withDirectives = module.withDirectives;
      vModelRadio = module.vModelRadio;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      defaultControlCompareValue = module.defaultControlCompareValue;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = ["for"];
      var _hoisted_3 = ["id", "name", "value", "disabled"];
      var _hoisted_4 = {
        class: "label-text"
      };
      var _hoisted_5 = ["for"];
      var _hoisted_6 = ["id", "name", "value", "disabled"];
      var _hoisted_7 = {
        class: "label-text"
      };
      var script = exports('default', defineComponent({
        name: 'radioButtonList',
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
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
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
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              formGroupClasses: 'rock-radio-button-list ' + __props.formGroupClasses,
              name: "radiobuttonlist",
              modelValue: internalValue.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => internalValue.value = $event)
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                return [createElementVNode("div", _hoisted_1, [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: false
                }), createElementVNode("div", {
                  class: normalizeClass(["controls rockradiobuttonlist", unref(containerClasses)])
                }, [createElementVNode("span", null, [__props.horizontal ? (openBlock(true), createElementBlock(Fragment, {
                  key: 0
                }, renderList(unref(actualItems), item => {
                  var _item$value2;
                  return openBlock(), createElementBlock("label", {
                    class: "radio-inline",
                    for: getItemUniqueId(uniqueId, item),
                    key: (_item$value2 = item.value) !== null && _item$value2 !== void 0 ? _item$value2 : undefined
                  }, [withDirectives(createElementVNode("input", {
                    id: getItemUniqueId(uniqueId, item),
                    name: uniqueId,
                    type: "radio",
                    value: item.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event),
                    disabled: isItemDisabled(item)
                  }, null, 8, _hoisted_3), [[vModelRadio, internalValue.value]]), createElementVNode("span", _hoisted_4, toDisplayString(item.text), 1)], 8, _hoisted_2);
                }), 128)) : (openBlock(true), createElementBlock(Fragment, {
                  key: 1
                }, renderList(unref(actualItems), item => {
                  var _item$value3;
                  return openBlock(), createElementBlock("div", {
                    class: "radio",
                    key: (_item$value3 = item.value) !== null && _item$value3 !== void 0 ? _item$value3 : undefined
                  }, [createElementVNode("label", {
                    for: getItemUniqueId(uniqueId, item)
                  }, [withDirectives(createElementVNode("input", {
                    id: getItemUniqueId(uniqueId, item),
                    name: uniqueId,
                    type: "radio",
                    value: item.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalValue.value = $event),
                    disabled: isItemDisabled(item)
                  }, null, 8, _hoisted_6), [[vModelRadio, internalValue.value]]), createElementVNode("span", _hoisted_7, toDisplayString(item.text), 1)], 8, _hoisted_5)]);
                }), 128))])], 2), renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: false
                })])];
              }),
              _: 3
            }, 8, ["formGroupClasses", "modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/radioButtonList.obs";

    })
  };
}));
//# sourceMappingURL=radioButtonList.obs.js.map
