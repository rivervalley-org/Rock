System.register(['vue', '@Obsidian/Core/Utilities/rockColor'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, createCommentVNode, toDisplayString, withModifiers, RockColor;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      normalizeStyle = module.normalizeStyle;
      createElementVNode = module.createElementVNode;
      createCommentVNode = module.createCommentVNode;
      toDisplayString = module.toDisplayString;
      withModifiers = module.withModifiers;
    }, function (module) {
      RockColor = module.RockColor;
    }],
    execute: (function () {

      var _hoisted_1 = {
        key: 0,
        class: "tag-icon"
      };
      var _hoisted_2 = ["onClick"];
      var script = exports('default', defineComponent({
        name: 'tag',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["removeTag"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var text = computed(() => {
            var _props$modelValue$nam;
            return (_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "";
          });
          var iconCssClass = computed(() => {
            var _props$modelValue$ico;
            return (_props$modelValue$ico = props.modelValue.iconCssClass) !== null && _props$modelValue$ico !== void 0 ? _props$modelValue$ico : "";
          });
          var tagClass = computed(() => {
            return {
              tag: true,
              personal: props.modelValue.isPersonal,
              disabled: props.disabled
            };
          });
          var tagStyle = computed(() => {
            var styles = {};
            if (props.modelValue.backgroundColor) {
              var color = new RockColor(props.modelValue.backgroundColor);
              var pair = RockColor.calculateColorPair(color);
              styles["background-color"] = pair.backgroundColor.toHex();
              styles["color"] = pair.foregroundColor.toHex();
            }
            return styles;
          });
          var onRemoveTag = () => {
            var _props$modelValue$idK;
            emit("removeTag", (_props$modelValue$idK = props.modelValue.idKey) !== null && _props$modelValue$idK !== void 0 ? _props$modelValue$idK : "");
          };
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("span", {
              class: normalizeClass(unref(tagClass)),
              style: normalizeStyle(unref(tagStyle))
            }, [unref(iconCssClass) ? (openBlock(), createElementBlock("span", _hoisted_1, [createElementVNode("i", {
              class: normalizeClass(unref(iconCssClass))
            }, null, 2)])) : createCommentVNode("v-if", true), createElementVNode("span", null, toDisplayString(unref(text)), 1), !__props.disabled ? (openBlock(), createElementBlock("a", {
              key: 1,
              href: "#",
              title: "Remove tag",
              onClick: withModifiers(onRemoveTag, ["prevent", "stop"])
            }, "x", 8, _hoisted_2)) : createCommentVNode("v-if", true)], 6);
          };
        }
      }));

      script.__file = "Framework/Controls/Internal/tag.obs";

    })
  };
}));
//# sourceMappingURL=tag.obs.js.map
