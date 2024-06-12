System.register(['vue', './rockFormField.obs', '@Obsidian/Directives/dragDrop', '@Obsidian/Utility/guid', '@Obsidian/Utility/component', '@Obsidian/ValidationRules', '@Obsidian/Utility/stringUtils'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, createElementVNode, defineComponent, ref, watch, computed, openBlock, createBlock, unref, mergeProps, withCtx, withDirectives, createElementBlock, Fragment, renderList, vModelText, withModifiers, RockFormField, useDragReorder, DragSource, DragTarget, newGuid, useStandardRockFormFieldProps, standardRockFormFieldProps, normalizeRules, isNullOrWhiteSpace, containsHtmlTag;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      vModelText = module.vModelText;
      withModifiers = module.withModifiers;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      useDragReorder = module.useDragReorder;
      DragSource = module.DragSource;
      DragTarget = module.DragTarget;
    }, function (module) {
      newGuid = module.newGuid;
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

      var _withScopeId = n => (pushScopeId("data-v-cf202abc"), n = n(), popScopeId(), n);
      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = ["id"];
      var _hoisted_3 = {
        class: "list-items-rows"
      };
      var _hoisted_4 = {
        class: "input-group"
      };
      var _hoisted_5 = _withScopeId(() => createElementVNode("span", {
        class: "reorder-handle input-group-addon"
      }, [createElementVNode("i", {
        class: "fa fa-bars"
      })], -1));
      var _hoisted_6 = ["onUpdate:modelValue", "placeholder"];
      var _hoisted_7 = ["onClick"];
      var _hoisted_8 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1));
      var _hoisted_9 = [_hoisted_8];
      var _hoisted_10 = {
        class: "control-actions"
      };
      var _hoisted_11 = ["onClick"];
      var _hoisted_12 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-plus-circle"
      }, null, -1));
      var _hoisted_13 = [_hoisted_12];
      var script = exports('default', defineComponent({
        name: 'listItems',
        props: _objectSpread2({
          modelValue: {
            type: String,
            default: "[]"
          },
          valuePrompt: {
            type: String,
            default: "Value"
          },
          allowHtml: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          function parseModelValue(modelValue) {
            try {
              return JSON.parse(modelValue !== null && modelValue !== void 0 ? modelValue : "[]");
            } catch (_unused) {
              return [];
            }
          }
          var internalValues = ref(parseModelValue(props.modelValue));
          var fieldProps = useStandardRockFormFieldProps(props);
          watch(() => props.modelValue, () => {
            internalValues.value = parseModelValue(props.modelValue);
          });
          watch(() => internalValues, () => {
            emit("update:modelValue", JSON.stringify(internalValues.value));
          }, {
            deep: true
          });
          var onAddClick = () => {
            var defaultValue = "";
            var defaultGuid = newGuid();
            internalValues.value.push({
              key: defaultGuid,
              value: defaultValue
            });
          };
          var dragOptions = useDragReorder(internalValues);
          var onRemoveClick = index => {
            internalValues.value.splice(index, 1);
          };
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
                    if (containsHtmlTag(value[i])) {
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
              modelValue: internalValues.value
            }, unref(fieldProps), {
              formGroupClasses: "list-items",
              name: "value-list",
              rules: unref(augmentedRules),
              watchDeep: ""
            }), {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("span", {
                  id: uniqueId
                }, [withDirectives((openBlock(), createElementBlock("span", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(internalValues.value, (value, valueIndex) => {
                  var _value$key;
                  return openBlock(), createElementBlock("div", {
                    class: "controls controls-row form-control-group list-item-row",
                    key: (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : ''
                  }, [createElementVNode("div", _hoisted_4, [_hoisted_5, withDirectives(createElementVNode("input", {
                    "onUpdate:modelValue": $event => value.value = $event,
                    class: "key-value-value form-control input-width-lg",
                    type: "text",
                    placeholder: __props.valuePrompt
                  }, null, 8, _hoisted_6), [[vModelText, value.value]])]), createElementVNode("a", {
                    href: "#",
                    onClick: withModifiers($event => onRemoveClick(valueIndex), ["prevent"]),
                    class: "btn btn-sm btn-danger"
                  }, _hoisted_9, 8, _hoisted_7)]);
                }), 128))])), [[unref(DragSource), unref(dragOptions)], [unref(DragTarget), unref(dragOptions)]]), createElementVNode("div", _hoisted_10, [createElementVNode("a", {
                  class: "btn btn-action btn-square btn-xs",
                  href: "#",
                  onClick: withModifiers(onAddClick, ["prevent"])
                }, _hoisted_13, 8, _hoisted_11)])], 8, _hoisted_2)])];
              }),
              _: 1
            }, 16, ["modelValue", "rules"]);
          };
        }
      }));

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z = ".list-item-row .reorder-handle[data-v-cf202abc]{cursor:grab}";
      styleInject(css_248z);

      script.__scopeId = "data-v-cf202abc";
      script.__file = "Framework/Controls/listItems.obs";

    })
  };
}));
//# sourceMappingURL=listItems.obs.js.map
