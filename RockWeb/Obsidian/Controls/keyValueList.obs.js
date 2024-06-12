System.register(['vue', './rockFormField.obs', '@Obsidian/Utility/component', '@Obsidian/ValidationRules', '@Obsidian/Utility/stringUtils'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, mergeProps, withCtx, createElementBlock, Fragment, renderList, normalizeClass, withDirectives, vModelText, toDisplayString, vModelSelect, withModifiers, RockFormField, useStandardRockFormFieldProps, standardRockFormFieldProps, normalizeRules, isNullOrWhiteSpace, containsHtmlTag;
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
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      withDirectives = module.withDirectives;
      vModelText = module.vModelText;
      toDisplayString = module.toDisplayString;
      vModelSelect = module.vModelSelect;
      withModifiers = module.withModifiers;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      normalizeRules = module.normalizeRules;
    }, function (module) {
      isNullOrWhiteSpace = module.isNullOrWhiteSpace;
      containsHtmlTag = module.containsHtmlTag;
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
        class: "control-wrapper"
      };
      var _hoisted_2 = ["id"];
      var _hoisted_3 = {
        class: "key-value-rows"
      };
      var _hoisted_4 = ["onUpdate:modelValue", "placeholder"];
      var _hoisted_5 = ["onUpdate:modelValue"];
      var _hoisted_6 = ["value"];
      var _hoisted_7 = ["onUpdate:modelValue", "placeholder"];
      var _hoisted_8 = ["onUpdate:modelValue"];
      var _hoisted_9 = ["value"];
      var _hoisted_10 = ["onUpdate:modelValue", "placeholder"];
      var _hoisted_11 = ["onUpdate:modelValue", "placeholder"];
      var _hoisted_12 = ["onClick"];
      var _hoisted_13 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_14 = [_hoisted_13];
      var _hoisted_15 = {
        class: "control-actions"
      };
      var _hoisted_16 = ["onClick"];
      var _hoisted_17 = createElementVNode("i", {
        class: "fa fa-plus-circle"
      }, null, -1);
      var _hoisted_18 = [_hoisted_17];
      var script = exports('default', defineComponent({
        name: 'keyValueList',
        props: _objectSpread2({
          modelValue: {
            type: Array,
            required: false
          },
          valueOptions: {
            type: Array,
            required: false
          },
          keyPlaceholder: {
            type: String,
            required: false
          },
          valuePlaceholder: {
            type: String,
            required: false
          },
          displayValueFirst: {
            type: Boolean,
            default: false
          },
          fullWidth: {
            type: Boolean,
            default: false
          },
          allowHtml: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue;
          var emit = _ref.emit;
          var props = __props;
          var internalValues = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : []);
          var fieldProps = useStandardRockFormFieldProps(props);
          var options = computed(() => {
            var _props$valueOptions;
            return (_props$valueOptions = props.valueOptions) !== null && _props$valueOptions !== void 0 ? _props$valueOptions : [];
          });
          var hasValues = computed(() => options.value.length > 0);
          var rowClasses = computed(() => {
            var classes = "controls controls-row form-control-group";
            if (props.fullWidth) {
              classes += " controls-row-full-width";
            }
            return classes;
          });
          var keyInputClasses = computed(() => {
            var classes = "key-value-key form-control";
            if (!props.fullWidth) {
              classes += " input-width-md";
            }
            return classes;
          });
          var valueInputClasses = computed(() => {
            var classes = "key-value-value form-control";
            if (!props.fullWidth) {
              classes += hasValues.value ? " input-width-lg" : " input-width-md";
            }
            return classes;
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue2;
            internalValues.value = (_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : [];
          });
          watch(() => internalValues.value, () => {
            emit("update:modelValue", internalValues.value);
          }, {
            deep: true
          });
          function onAddClick() {
            var defaultValue = "";
            if (hasValues.value) {
              var _options$value$0$valu;
              defaultValue = (_options$value$0$valu = options.value[0].value) !== null && _options$value$0$valu !== void 0 ? _options$value$0$valu : "";
            }
            internalValues.value.push({
              key: "",
              value: defaultValue
            });
          }
          function onRemoveClick(index) {
            internalValues.value.splice(index, 1);
          }
          var augmentedRules = computed(() => {
            var rules = normalizeRules(props.rules);
            if (!props.allowHtml) {
              rules.push(function (value) {
                var isArr = Array.isArray(value);
                if (isNullOrWhiteSpace(value) || isArr && value.length === 0) {
                  return true;
                }
                if (isArr) {
                  for (var i = 0; i < value.length; i++) {
                    var _ref2 = value[i],
                      k = _ref2.key,
                      v = _ref2.value;
                    if (containsHtmlTag(String(k)) || containsHtmlTag(String(v))) {
                      return "contains invalid characters. Please make sure that your entries do not contain any angle brackets like < or >.";
                    }
                  }
                }
                return true;
              });
            }
            return rules;
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: internalValues.value,
              name: "key-value-list"
            }, unref(fieldProps), {
              formGroupClasses: 'key-value-list ' + _ctx.formGroupClasses,
              rules: unref(augmentedRules),
              watchDeep: ""
            }), {
              default: withCtx(_ref3 => {
                var uniqueId = _ref3.uniqueId;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("span", {
                  id: uniqueId
                }, [createElementVNode("span", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(internalValues.value, (value, valueIndex) => {
                  return openBlock(), createElementBlock("div", {
                    class: normalizeClass(unref(rowClasses))
                  }, [!__props.displayValueFirst ? (openBlock(), createElementBlock(Fragment, {
                    key: 0
                  }, [withDirectives(createElementVNode("input", {
                    "onUpdate:modelValue": $event => value.key = $event,
                    class: normalizeClass(unref(keyInputClasses)),
                    type: "text",
                    placeholder: __props.keyPlaceholder
                  }, null, 10, _hoisted_4), [[vModelText, value.key]]), unref(hasValues) ? withDirectives((openBlock(), createElementBlock("select", {
                    key: 0,
                    "onUpdate:modelValue": $event => value.value = $event,
                    class: normalizeClass(unref(valueInputClasses))
                  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), option => {
                    var _option$value;
                    return openBlock(), createElementBlock("option", {
                      value: option.value,
                      key: (_option$value = option.value) !== null && _option$value !== void 0 ? _option$value : undefined
                    }, toDisplayString(option.text), 9, _hoisted_6);
                  }), 128))], 10, _hoisted_5)), [[vModelSelect, value.value]]) : withDirectives((openBlock(), createElementBlock("input", {
                    key: 1,
                    "onUpdate:modelValue": $event => value.value = $event,
                    class: normalizeClass(unref(valueInputClasses)),
                    type: "text",
                    placeholder: __props.valuePlaceholder
                  }, null, 10, _hoisted_7)), [[vModelText, value.value]])], 64)) : (openBlock(), createElementBlock(Fragment, {
                    key: 1
                  }, [unref(hasValues) ? withDirectives((openBlock(), createElementBlock("select", {
                    key: 0,
                    "onUpdate:modelValue": $event => value.value = $event,
                    class: normalizeClass(unref(valueInputClasses))
                  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), option => {
                    var _option$value2;
                    return openBlock(), createElementBlock("option", {
                      value: option.value,
                      key: (_option$value2 = option.value) !== null && _option$value2 !== void 0 ? _option$value2 : undefined
                    }, toDisplayString(option.text), 9, _hoisted_9);
                  }), 128))], 10, _hoisted_8)), [[vModelSelect, value.value]]) : withDirectives((openBlock(), createElementBlock("input", {
                    key: 1,
                    "onUpdate:modelValue": $event => value.value = $event,
                    class: normalizeClass(unref(valueInputClasses)),
                    type: "text",
                    placeholder: __props.valuePlaceholder
                  }, null, 10, _hoisted_10)), [[vModelText, value.value]]), withDirectives(createElementVNode("input", {
                    "onUpdate:modelValue": $event => value.key = $event,
                    class: normalizeClass(unref(keyInputClasses)),
                    type: "text",
                    placeholder: __props.keyPlaceholder
                  }, null, 10, _hoisted_11), [[vModelText, value.key]])], 64)), createElementVNode("a", {
                    href: "#",
                    onClick: withModifiers($event => onRemoveClick(valueIndex), ["prevent"]),
                    class: "btn btn-sm btn-danger"
                  }, _hoisted_14, 8, _hoisted_12)], 2);
                }), 256))]), createElementVNode("div", _hoisted_15, [createElementVNode("a", {
                  class: "btn btn-action btn-square btn-xs",
                  href: "#",
                  onClick: withModifiers(onAddClick, ["prevent"])
                }, _hoisted_18, 8, _hoisted_16)])], 8, _hoisted_2)])];
              }),
              _: 1
            }, 16, ["modelValue", "formGroupClasses", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/keyValueList.obs";

    })
  };
}));
//# sourceMappingURL=keyValueList.obs.js.map
