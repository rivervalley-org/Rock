System.register(['vue'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
        }],
        execute: (function () {

            var valueDetailList = exports('default', defineComponent({
              name: "ValueDetailList",
              props: {
                modelValue: {
                  type: Array,
                  required: false
                }
              },
              setup(props) {
                var _props$modelValue;
                var values = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : []);
                var hasValues = computed(() => {
                  return values.value.length > 0;
                });
                watch(() => props.modelValue, () => {
                  var _props$modelValue2;
                  values.value = (_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : [];
                });
                return {
                  hasValues,
                  values
                };
              },
              template: "\n<dl v-if=\"hasValues\">\n    <template v-for=\"value in values\">\n        <dt>{{ value.title }}</dt>\n        <dd v-if=\"value.htmlValue\" v-html=\"value.htmlValue\"></dd>\n        <dd v-else>{{ value.textValue }}</dd>\n    </template>\n</dl>\n"
            }));

        })
    };
}));
//# sourceMappingURL=valueDetailList.js.map
