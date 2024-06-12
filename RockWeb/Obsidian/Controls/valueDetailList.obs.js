System.register(['vue'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, unref, openBlock, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString, createCommentVNode;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      unref = module.unref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
    }],
    execute: (function () {

      var _hoisted_1 = {
        key: 0
      };
      var _hoisted_2 = ["innerHTML"];
      var _hoisted_3 = {
        key: 1
      };
      var script = exports('default', defineComponent({
        name: 'valueDetailList',
        props: {
          modelValue: {
            type: Array,
            required: false
          }
        },
        setup(__props) {
          var _props$modelValue;
          var props = __props;
          var values = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : []);
          var hasValues = computed(() => {
            return values.value.length > 0;
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue2;
            values.value = (_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : [];
          });
          return (_ctx, _cache) => {
            return unref(hasValues) ? (openBlock(), createElementBlock("dl", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(values.value, value => {
              return openBlock(), createElementBlock(Fragment, null, [createElementVNode("dt", null, toDisplayString(value.title), 1), value.htmlValue ? (openBlock(), createElementBlock("dd", {
                key: 0,
                innerHTML: value.htmlValue
              }, null, 8, _hoisted_2)) : (openBlock(), createElementBlock("dd", _hoisted_3, toDisplayString(value.textValue), 1))], 64);
            }), 256))])) : createCommentVNode("v-if", true);
          };
        }
      }));

      script.__file = "Framework/Controls/valueDetailList.obs";

    })
  };
}));
//# sourceMappingURL=valueDetailList.obs.js.map
