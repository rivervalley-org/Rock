System.register(['vue', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            var rating = exports('default', defineComponent({
              name: "Rating",
              components: {
                RockFormField
              },
              props: {
                modelValue: {
                  type: Number,
                  default: 0
                },
                maxRating: {
                  type: Number,
                  default: 5
                }
              },
              setup(props, _ref) {
                var emit = _ref.emit;
                var internalValue = ref(props.modelValue);
                var hoverValue = ref(null);
                var showClear = computed(() => internalValue.value > 0);
                watch(() => props.modelValue, () => internalValue.value = props.modelValue);
                watch(internalValue, () => emit("update:modelValue", internalValue.value));
                var setRating = value => {
                  internalValue.value = value;
                };
                var onClear = e => {
                  e.preventDefault();
                  setRating(0);
                  return false;
                };
                var classForRating = position => {
                  var _hoverValue$value;
                  var filledCount = Math.min(props.maxRating, (_hoverValue$value = hoverValue.value) !== null && _hoverValue$value !== void 0 ? _hoverValue$value : internalValue.value);
                  return position <= filledCount ? "fa fa-rating-selected" : "fa fa-rating-unselected";
                };
                var setHover = position => {
                  hoverValue.value = position;
                };
                var clearHover = () => {
                  hoverValue.value = null;
                };
                return {
                  classForRating,
                  clearHover,
                  hoverValue,
                  internalValue,
                  onClear,
                  setHover,
                  setRating,
                  showClear
                };
              },
              template: "\n<RockFormField\n    :modelValue=\"internalValue\"\n    formGroupClasses=\"rock-rating\"\n    name=\"rock-rating\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <div class=\"rating-input\">\n                <i v-for=\"i in maxRating\" :key=\"i\" :class=\"classForRating(i)\" @click=\"setRating(i)\" @mouseover=\"setHover(i)\" @mouseleave=\"clearHover()\"></i>\n                <a v-if=\"showClear\" class=\"clear-rating\" href=\"#\" v-on:click=\"onClear\" @mouseover=\"setHover(0)\" @mouseleave=\"clearHover()\">\n                    <span class=\"fa fa-remove\"></span>\n                </a>\n            </div>\n        </div>\n    </template>\n</RockFormField>\n"
            }));

        })
    };
}));
//# sourceMappingURL=rating.js.map
