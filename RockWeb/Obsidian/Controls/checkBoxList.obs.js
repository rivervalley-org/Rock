System.register(['vue', '@Obsidian/Utility/component', './rockFormField.obs', '@Obsidian/Utility/stringUtils'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, createElementVNode, renderSlot, normalizeClass, createElementBlock, Fragment, renderList, withDirectives, vModelCheckbox, toDisplayString, updateRefValue, RockFormField, defaultControlCompareValue;
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
      vModelCheckbox = module.vModelCheckbox;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      defaultControlCompareValue = module.defaultControlCompareValue;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = ["for"];
      var _hoisted_3 = ["disabled", "id", "name", "value"];
      var _hoisted_4 = {
        class: "label-text"
      };
      var _hoisted_5 = {
        class: "checkbox"
      };
      var _hoisted_6 = ["for"];
      var _hoisted_7 = ["disabled", "id", "name", "value"];
      var _hoisted_8 = {
        class: "label-text"
      };
      var script = exports('default', defineComponent({
        name: 'checkBoxList',
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
          displayAsCheckList: {
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
            if (props.repeatColumns > 0) {
              classes.push("in-columns in-columns-".concat(props.repeatColumns));
            }
            return classes.join(" ");
          });
          var labelClasses = item => {
            var _item$value3;
            var classes = [];
            if (props.displayAsCheckList && internalValue.value.includes((_item$value3 = item.value) !== null && _item$value3 !== void 0 ? _item$value3 : "")) {
              classes.push("text-linethrough");
            }
            return classes.join(" ");
          };
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
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: internalValue.value,
              formGroupClasses: "check-box-list",
              name: "check-box-list"
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                return [createElementVNode("div", _hoisted_1, [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: false
                }), createElementVNode("div", {
                  class: normalizeClass(["controls rockcheckboxlist", unref(containerClasses)])
                }, [__props.horizontal ? (openBlock(true), createElementBlock(Fragment, {
                  key: 0
                }, renderList(__props.items, item => {
                  return openBlock(), createElementBlock("label", {
                    class: "checkbox-inline",
                    for: uniqueIdForItem(uniqueId, item)
                  }, [withDirectives(createElementVNode("input", {
                    disabled: __props.disabled,
                    id: uniqueIdForItem(uniqueId, item),
                    name: uniqueId,
                    type: "checkbox",
                    value: valueForItem(item),
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event)
                  }, null, 8, _hoisted_3), [[vModelCheckbox, internalValue.value]]), createElementVNode("span", _hoisted_4, toDisplayString(textForItem(item)), 1)], 8, _hoisted_2);
                }), 256)) : (openBlock(true), createElementBlock(Fragment, {
                  key: 1
                }, renderList(__props.items, item => {
                  return openBlock(), createElementBlock("div", _hoisted_5, [createElementVNode("label", {
                    for: uniqueIdForItem(uniqueId, item),
                    class: normalizeClass(labelClasses(item))
                  }, [withDirectives(createElementVNode("input", {
                    disabled: __props.disabled,
                    id: uniqueIdForItem(uniqueId, item),
                    name: uniqueId,
                    type: "checkbox",
                    value: valueForItem(item),
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalValue.value = $event)
                  }, null, 8, _hoisted_7), [[vModelCheckbox, internalValue.value]]), createElementVNode("span", _hoisted_8, toDisplayString(textForItem(item)), 1)], 10, _hoisted_6)]);
                }), 256))], 2), renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: false
                })])];
              }),
              _: 3
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/checkBoxList.obs";

    })
  };
}));
//# sourceMappingURL=checkBoxList.obs.js.map
