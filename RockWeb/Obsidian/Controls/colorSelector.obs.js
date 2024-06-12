System.register(['vue', './rockFormField.obs', '@Obsidian/Core/Utilities/rockColor', '@Obsidian/Utility/component', '@Obsidian/Utility/stringUtils', '@Obsidian/ValidationRules'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, openBlock, createBlock, unref, withCtx, createElementVNode, createElementBlock, Fragment, renderList, normalizeClass, normalizeStyle, withDirectives, isRef, vModelCheckbox, createTextVNode, toDisplayString, RockFormField, RockColor, useVModelPassthrough, standardRockFormFieldProps, defaultControlCompareValue, normalizeRules;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      normalizeStyle = module.normalizeStyle;
      withDirectives = module.withDirectives;
      isRef = module.isRef;
      vModelCheckbox = module.vModelCheckbox;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      RockColor = module.RockColor;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      defaultControlCompareValue = module.defaultControlCompareValue;
    }, function (module) {
      normalizeRules = module.normalizeRules;
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
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
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
      var _hoisted_2 = ["for"];
      var _hoisted_3 = ["disabled", "id", "name", "value", "onChange"];
      var script = exports('default', defineComponent({
        name: 'colorSelector',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            default: []
          },
          disabled: {
            type: Boolean
          },
          items: {
            type: Object,
            default: []
          },
          compareValue: {
            type: Function,
            default: defaultControlCompareValue
          },
          showInvalidHexColors: {
            type: Boolean,
            default: false
          },
          allowMultiple: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var colorSelectorElement = ref();
          var internalBackgroundColor = computed(() => {
            if (!colorSelectorElement.value) {
              return;
            }
            return getBackgroundColor(colorSelectorElement.value);
          });
          var camouflagedItems = computed(() => {
            var backgroundColor = internalBackgroundColor.value;
            if (!backgroundColor) {
              return [];
            }
            var percentSimilar = .95;
            var camouflaged = [];
            var _iterator = _createForOfIteratorHelper(internalItems.value),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                if (item.color.isSimilarTo(backgroundColor, percentSimilar)) {
                  camouflaged.push(item);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return camouflaged;
          });
          var internalItemsForDisplay = computed(() => {
            var colorItems = internalItems.value;
            if (props.showInvalidHexColors) {
              return colorItems.filter(color => color.hasValue);
            } else {
              return colorItems.filter(color => color.hasValue && color.isValidHexValue);
            }
          });
          var internalItems = computed(() => {
            return props.items.map(rawColor => {
              var rockColor = new RockColor(rawColor);
              return {
                hasValue: !!rawColor,
                isValidHexValue: isValidHexColor(rawColor),
                rawColor: rawColor,
                color: rockColor
              };
            });
          });
          var internalRules = computed(() => {
            var rules = normalizeRules(props.rules);
            if (props.showInvalidHexColors) {
              rules.push(validateHexColor);
            }
            return rules;
          });
          function getBackgroundColor(element) {
            function getComputedBackgroundColor(element) {
              return window.getComputedStyle(element).getPropertyValue("background-color");
            }
            var defaultColor = new RockColor(getComputedBackgroundColor(document.body));
            var elementsToProcess = [element];
            while (elementsToProcess.length) {
              var elementToProcess = elementsToProcess.shift();
              if (!elementToProcess) {
                continue;
              }
              var backgroundColor = new RockColor(getComputedBackgroundColor(elementToProcess));
              if (backgroundColor.alpha !== 0 && backgroundColor.compareTo(defaultColor) !== 0) {
                return backgroundColor;
              } else if (elementToProcess.parentElement) {
                elementsToProcess.push(elementToProcess.parentElement);
              }
            }
            return defaultColor;
          }
          function getCamouflagedClass(item) {
            if (item.color.luma > 0.5) {
              return "camouflaged-light";
            } else {
              return "camouflaged-dark";
            }
          }
          function isCamouflaged(item) {
            return camouflagedItems.value.indexOf(item) !== -1;
          }
          function isChecked(item) {
            return internalValue.value.some(c => props.compareValue(c, item.rawColor));
          }
          function uniqueIdForItem(uniqueId, item) {
            return "".concat(uniqueId, "-").concat(item.rawColor.replace("#", "").replace(" ", "-"));
          }
          function validateHexColor(value) {
            if (!value || !Array.isArray(value) || !value.length) {
              return true;
            }
            var invalidValues = [];
            var _iterator2 = _createForOfIteratorHelper(value),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var color = _step2.value;
                if (!isValidHexColor(color)) {
                  invalidValues.push(color);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            if (!invalidValues.length) {
              return true;
            } else if (invalidValues.length === 1) {
              return "The color '".concat(invalidValues[0], "' is not a valid hex color.");
            } else {
              return "The colors '".concat(invalidValues.join("', '"), "' are not a valid hex colors.");
            }
          }
          function isValidHexColor(value) {
            var regex = /^#(([0-9a-fA-F]{3})|([0-9a-fA-F]{4})|([0-9a-fA-F]{6})|([0-9a-fA-F]{8}))$/gm;
            return regex.test(value);
          }
          function onCheckboxChanged(item) {
            if (!props.allowMultiple) {
              internalValue.value = [item.rawColor];
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: unref(internalValue),
              formGroupClasses: "color-selector",
              label: _ctx.label,
              name: "color-selector",
              rules: unref(internalRules)
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", {
                  class: "color-selector-items",
                  ref_key: "colorSelectorElement",
                  ref: colorSelectorElement
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(internalItemsForDisplay), item => {
                  return openBlock(), createElementBlock("div", {
                    class: normalizeClass(['color-selector-item-container form-control-group', isChecked(item) ? 'checked' : ''])
                  }, [createElementVNode("label", {
                    class: normalizeClass(['color-selector-item', isChecked(item) ? 'checked' : '', isCamouflaged(item) ? getCamouflagedClass(item) : '']),
                    for: uniqueIdForItem(uniqueId, item),
                    style: normalizeStyle({
                      backgroundColor: item.isValidHexValue ? item.rawColor : undefined
                    })
                  }, [withDirectives(createElementVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                    class: "color-selector-item-checkbox form-control",
                    disabled: __props.disabled,
                    id: uniqueIdForItem(uniqueId, item),
                    name: uniqueId,
                    type: "checkbox",
                    value: item.rawColor,
                    onChange: $event => onCheckboxChanged(item)
                  }, null, 40, _hoisted_3), [[vModelCheckbox, unref(internalValue)]]), createTextVNode(" " + toDisplayString(!item.isValidHexValue ? "".concat(item.rawColor, " (invalid)") : ""), 1)], 14, _hoisted_2)], 2);
                }), 256))], 512)])];
              }),
              _: 1
            }, 8, ["modelValue", "label", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/colorSelector.obs";

    })
  };
}));
//# sourceMappingURL=colorSelector.obs.js.map
