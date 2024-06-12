System.register(['vue', '@Obsidian/Utility/guid', './rockFormField.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, onMounted, openBlock, createBlock, unref, withCtx, createElementVNode, withDirectives, mergeProps, createElementBlock, createCommentVNode, Fragment, renderList, toDisplayString, vModelSelect, nextTick, newGuid, RockFormField;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      withDirectives = module.withDirectives;
      mergeProps = module.mergeProps;
      createElementBlock = module.createElementBlock;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      vModelSelect = module.vModelSelect;
      nextTick = module.nextTick;
    }, function (module) {
      newGuid = module.newGuid;
    }, function (module) {
      RockFormField = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = ["id"];
      var _hoisted_3 = ["value"];
      var _hoisted_4 = ["value"];
      var script = exports('default', defineComponent({
        name: 'listBox',
        props: {
          modelValue: {
            type: Array,
            default: []
          },
          items: {
            type: Array,
            default: []
          },
          formControlClasses: {
            type: String,
            default: ""
          },
          enhanceForLongLists: {
            type: Boolean,
            default: false
          },
          showBlankItem: {
            type: Boolean,
            default: false
          },
          blankValue: {
            type: String,
            default: ""
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var uniqueId = "rock-listbox-".concat(newGuid());
          var internalValue = ref([]);
          var theSelect = ref();
          var isMounted = false;
          var compiledFormControlClasses = computed(() => {
            if (props.enhanceForLongLists) {
              return props.formControlClasses + " chosen-select";
            }
            return props.formControlClasses;
          });
          function getChosenJqueryEl() {
            var jquery = window["$"];
            var $chosenDropDown = jquery(theSelect.value);
            if (!$chosenDropDown || !$chosenDropDown.length) {
              $chosenDropDown = jquery("#".concat(uniqueId));
            }
            return $chosenDropDown;
          }
          function createOrDestroyChosen() {
            if (!isMounted) {
              return;
            }
            var $chosenDropDown = getChosenJqueryEl();
            if (props.enhanceForLongLists) {
              $chosenDropDown.chosen({
                width: "100%",
                placeholder_text_multiple: " ",
                placeholder_text_single: " "
              }).change(() => {
                internalValue.value = $chosenDropDown.val();
              });
            } else {
              $chosenDropDown.chosen("destroy");
            }
          }
          function syncValue() {
            if (internalValue.value.length === props.modelValue.length && internalValue.value.every((v, i) => v === props.modelValue[i])) {
              return;
            }
            internalValue.value = props.modelValue;
            if (props.enhanceForLongLists) {
              nextTick(() => {
                var $chosenDropDown = getChosenJqueryEl();
                $chosenDropDown.trigger("chosen:updated");
              });
            }
          }
          watch(() => props.modelValue, () => {
            syncValue();
          }, {
            immediate: true
          });
          watch(() => props.items, () => {
            syncValue();
          }, {
            immediate: true
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          watch(() => props.enhanceForLongLists, () => {
            createOrDestroyChosen();
          });
          onMounted(() => {
            isMounted = true;
            createOrDestroyChosen();
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: internalValue.value,
              formGroupClasses: "rock-drop-down-list",
              name: "dropdownlist"
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [withDirectives(createElementVNode("select", mergeProps({
                  id: uniqueId,
                  class: ["form-control", unref(compiledFormControlClasses)]
                }, field, {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event),
                  ref_key: "theSelect",
                  ref: theSelect,
                  multiple: ""
                }), [__props.showBlankItem ? (openBlock(), createElementBlock("option", {
                  key: 0,
                  value: __props.blankValue
                }, null, 8, _hoisted_3)) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, item => {
                  var _item$value;
                  return openBlock(), createElementBlock("option", {
                    key: (_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : undefined,
                    value: item.value
                  }, toDisplayString(item.text), 9, _hoisted_4);
                }), 128))], 16, _hoisted_2), [[vModelSelect, internalValue.value]])])];
              }),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/listBox.obs";

    })
  };
}));
//# sourceMappingURL=listBox.obs.js.map
