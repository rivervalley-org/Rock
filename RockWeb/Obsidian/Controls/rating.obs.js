System.register(['vue', './rockFormField.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, createElementBlock, Fragment, renderList, normalizeClass, createCommentVNode, RockFormField;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      RockFormField = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "rating-input"
      };
      var _hoisted_3 = ["onClick", "onMouseover"];
      var _hoisted_4 = createElementVNode("span", {
        class: "fa fa-remove"
      }, null, -1);
      var _hoisted_5 = [_hoisted_4];
      var script = exports('default', defineComponent({
        name: 'rating',
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
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref(props.modelValue);
          var hoverValue = ref(null);
          var showClear = computed(() => internalValue.value > 0);
          watch(() => props.modelValue, () => internalValue.value = props.modelValue);
          watch(internalValue, () => emit("update:modelValue", internalValue.value));
          function setRating(value) {
            internalValue.value = value;
          }
          function onClear(e) {
            e.preventDefault();
            setRating(0);
            return false;
          }
          function classForRating(position) {
            var _hoverValue$value;
            var filledCount = Math.min(props.maxRating, (_hoverValue$value = hoverValue.value) !== null && _hoverValue$value !== void 0 ? _hoverValue$value : internalValue.value);
            return position <= filledCount ? "fa fa-rating-selected" : "fa fa-rating-unselected";
          }
          function setHover(position) {
            hoverValue.value = position;
          }
          function clearHover() {
            hoverValue.value = null;
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: internalValue.value,
              formGroupClasses: "rock-rating",
              name: "rock-rating"
            }, {
              default: withCtx(_ref2 => {
                _ref2.uniqueId;
                  _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.maxRating, i => {
                  return openBlock(), createElementBlock("i", {
                    key: i,
                    class: normalizeClass(classForRating(i)),
                    onClick: $event => setRating(i),
                    onMouseover: $event => setHover(i),
                    onMouseleave: _cache[0] || (_cache[0] = $event => clearHover())
                  }, null, 42, _hoisted_3);
                }), 128)), unref(showClear) ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  class: "clear-rating",
                  href: "#",
                  onClick: onClear,
                  onMouseover: _cache[1] || (_cache[1] = $event => setHover(0)),
                  onMouseleave: _cache[2] || (_cache[2] = $event => clearHover())
                }, _hoisted_5, 32)) : createCommentVNode("v-if", true)])])];
              }),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/rating.obs";

    })
  };
}));
//# sourceMappingURL=rating.obs.js.map
