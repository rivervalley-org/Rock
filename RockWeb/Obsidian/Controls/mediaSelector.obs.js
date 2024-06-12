System.register(['vue', './rockFormField.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/stringUtils', '@Obsidian/Enums/Controls/mediaSelectorMode'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, createElementBlock, Fragment, renderList, normalizeClass, normalizeStyle, withDirectives, vModelCheckbox, toDisplayString, createCommentVNode, RockFormField, standardRockFormFieldProps, useStandardRockFormFieldProps, updateRefValue, defaultControlCompareValue, MediaSelectorMode;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      normalizeStyle = module.normalizeStyle;
      withDirectives = module.withDirectives;
      vModelCheckbox = module.vModelCheckbox;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      standardRockFormFieldProps = module.standardRockFormFieldProps;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      defaultControlCompareValue = module.defaultControlCompareValue;
    }, function (module) {
      MediaSelectorMode = module.MediaSelectorMode;
    }],
    execute: (function () {

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }

      var _hoisted_1 = {
        class: "d-flex flex-nowrap js-mediaselector"
      };
      var _hoisted_2 = ["src"];
      var _hoisted_3 = ["src"];
      var _hoisted_4 = {
        class: "custom-control-label align-self-end",
        style: {
          "text-align": "left"
        }
      };
      var _hoisted_5 = {
        class: "checkbox"
      };
      var _hoisted_6 = ["id", "name", "value"];
      var _hoisted_7 = {
        class: "label-text"
      };
      var script = exports('default', defineComponent({
        name: 'mediaSelector',
        props: _objectSpread2(_objectSpread2({
          modelValue: {
            type: Array,
            default: []
          }
        }, standardRockFormFieldProps), {}, {
          mediaItems: {
            type: Array,
            required: true,
            default: []
          },
          itemWidth: {
            type: String,
            required: false
          },
          compareValue: {
            type: Function,
            default: defaultControlCompareValue
          },
          mode: {
            type: Number,
            default: MediaSelectorMode.Image
          }
        }),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref([...props.modelValue]);
          var formFieldProps = useStandardRockFormFieldProps(props);
          var uniqueIdForItem = (uniqueId, item) => {
            var _item$key;
            return "".concat(uniqueId, "-").concat(((_item$key = item.key) !== null && _item$key !== void 0 ? _item$key : "").replace(" ", "-"));
          };
          var valueForItem = item => {
            var _item$value;
            return (_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : "";
          };
          var cssClasses = (value, item) => {
            var _item$key2;
            var classes = "well well-message flex-eq mr-2 p-2 js-media-selector-item";
            if (value.includes((_item$key2 = item.key) !== null && _item$key2 !== void 0 ? _item$key2 : "")) {
              classes += " well-message-danger";
            }
            return classes;
          };
          var syncInternalValue = () => {
            var value = [...props.modelValue];
            var lastItem = value.slice(-1);
            value = props.mediaItems.filter(o => lastItem.some(v => {
              var _o$key;
              return props.compareValue(v, (_o$key = o.key) !== null && _o$key !== void 0 ? _o$key : "");
            })).map(o => {
              var _o$key2;
              return (_o$key2 = o.key) !== null && _o$key2 !== void 0 ? _o$key2 : "";
            });
            updateRefValue(internalValue, value);
          };
          watch([() => props.modelValue, () => props.mediaItems], () => {
            syncInternalValue();
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          syncInternalValue();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: internalValue.value,
              name: "media-selector"
            }, unref(formFieldProps)), {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                return [createElementVNode("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.mediaItems, item => {
                  return openBlock(), createElementBlock(Fragment, null, [item.key && item.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    style: {
                      "display": "grid"
                    },
                    class: normalizeClass(cssClasses(internalValue.value, item))
                  }, [__props.mode == unref(MediaSelectorMode).Image ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: valueForItem(item),
                    alt: "#",
                    class: "img-fluid",
                    style: normalizeStyle({
                      width: __props.itemWidth
                    })
                  }, null, 12, _hoisted_2)) : (openBlock(), createElementBlock("audio", {
                    key: 1,
                    src: valueForItem(item),
                    controls: "",
                    controlslist: "nodownload"
                  }, null, 8, _hoisted_3)), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createElementVNode("label", null, [withDirectives(createElementVNode("input", {
                    id: uniqueIdForItem(uniqueId, item),
                    name: uniqueId,
                    type: "checkbox",
                    value: item.key,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event)
                  }, null, 8, _hoisted_6), [[vModelCheckbox, internalValue.value]]), createElementVNode("span", _hoisted_7, toDisplayString(item.key), 1)])])])], 2)) : createCommentVNode("v-if", true)], 64);
                }), 256))])];
              }),
              _: 1
            }, 16, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/mediaSelector.obs";

    })
  };
}));
//# sourceMappingURL=mediaSelector.obs.js.map
