System.register(['vue'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, normalizeClass, unref, toDisplayString;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      toDisplayString = module.toDisplayString;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "numberincrement"
      };
      var _hoisted_2 = ["disabled"];
      var _hoisted_3 = createElementVNode("i", {
        class: "fa fa-minus"
      }, null, -1);
      var _hoisted_4 = [_hoisted_3];
      var _hoisted_5 = {
        class: "numberincrement-value"
      };
      var _hoisted_6 = ["disabled"];
      var _hoisted_7 = createElementVNode("i", {
        class: "fa fa-plus"
      }, null, -1);
      var _hoisted_8 = [_hoisted_7];
      var script = exports('default', defineComponent({
        name: 'numberUpDownBase',
        props: {
          modelValue: {
            type: Number,
            required: true
          },
          min: {
            type: Number,
            default: 1
          },
          max: {
            type: Number,
            default: 10
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref(props.modelValue);
          var isUpDisabled = computed(() => {
            return internalValue.value >= props.max;
          });
          var isDownDisabled = computed(() => {
            return internalValue.value <= props.min;
          });
          function goUp() {
            if (!isUpDisabled.value) {
              internalValue.value++;
            }
          }
          function goDown() {
            if (!isDownDisabled.value) {
              internalValue.value--;
            }
          }
          watch(() => props.modelValue, () => {
            internalValue.value = props.modelValue;
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("a", {
              onClick: goDown,
              class: normalizeClass(["numberincrement-down", {
                disabled: __props.disabled || unref(isDownDisabled)
              }]),
              disabled: __props.disabled || unref(isDownDisabled)
            }, _hoisted_4, 10, _hoisted_2), createElementVNode("span", _hoisted_5, toDisplayString(internalValue.value), 1), createElementVNode("a", {
              onClick: goUp,
              class: normalizeClass(["numberincrement-up", {
                disabled: __props.disabled || unref(isUpDisabled)
              }]),
              disabled: __props.disabled || unref(isUpDisabled)
            }, _hoisted_8, 10, _hoisted_6)]);
          };
        }
      }));

      script.__file = "Framework/Controls/numberUpDownBase.obs";

    })
  };
}));
//# sourceMappingURL=numberUpDownBase.obs.js.map
