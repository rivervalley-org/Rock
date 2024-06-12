System.register(['vue', 'ant-design-vue', './rockFormField.obs', '@Obsidian/Utility/util', '@Obsidian/Utility/component', '@Obsidian/Utility/stringUtils'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, mergeProps, withCtx, renderSlot, normalizeClass, createVNode, createElementBlock, Select, RockFormField, deepEqual, useStandardRockFormFieldProps, standardRockFormFieldProps, updateRefValue, defaultControlCompareValue;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      renderSlot = module.renderSlot;
      normalizeClass = module.normalizeClass;
      createVNode = module.createVNode;
      createElementBlock = module.createElementBlock;
    }, function (module) {
      Select = module.Select;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      deepEqual = module.deepEqual;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      defaultControlCompareValue = module.defaultControlCompareValue;
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

      var _hoisted_1 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_2 = {
        key: 0,
        class: "fa fa-caret-down"
      };
      var _hoisted_3 = {
        key: 1,
        class: "fa fa-spinner fa-spin"
      };
      var _hoisted_4 = {
        style: {
          "color": "#999"
        }
      };
      var _hoisted_5 = createTextVNode("No Data");
      var _hoisted_6 = {
        key: 0,
        class: "text-center"
      };
      var _hoisted_7 = createElementVNode("i", {
        class: "fa fa-spinner fa-spin"
      }, null, -1);
      var _hoisted_8 = createTextVNode(" Data is loading...");
      var _hoisted_9 = [_hoisted_7, _hoisted_8];
      var script = exports('default', defineComponent({
        name: 'dropDownList',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: true
          },
          items: {
            type: Array,
            default: []
          },
          showBlankItem: {
            type: Boolean,
            default: true
          },
          blankValue: {
            type: String,
            default: ""
          },
          multiple: {
            type: Boolean,
            default: false
          },
          formControlClasses: {
            type: String,
            default: ""
          },
          inputClasses: {
            type: String,
            default: ""
          },
          enhanceForLongLists: {
            type: Boolean,
            default: false
          },
          grouped: {
            type: Boolean,
            default: false
          },
          disabled: {
            type: Boolean,
            default: false
          },
          loading: {
            type: Boolean,
            default: false
          },
          compareValue: {
            type: Function,
            default: defaultControlCompareValue
          }
        }, standardRockFormFieldProps),
        emits: ["open", "update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var vNodes = (_, _ref2) => {
            var attrs = _ref2.attrs;
            return attrs.vnodes;
          };
          var internalValue = ref(props.modelValue ? props.modelValue : null);
          var controlWrapper = ref(null);
          var standardFieldProps = useStandardRockFormFieldProps(props);
          var computedShowBlankItem = computed(() => {
            return !props.multiple && props.showBlankItem;
          });
          var computedOptions = computed(() => {
            if (!props.grouped) {
              return props.items.map(o => {
                var _o$value, _o$text, _o$disabled;
                return {
                  value: (_o$value = o.value) !== null && _o$value !== void 0 ? _o$value : "",
                  label: (_o$text = o.text) !== null && _o$text !== void 0 ? _o$text : "",
                  disabled: (_o$disabled = o.disabled) !== null && _o$disabled !== void 0 ? _o$disabled : false
                };
              });
            }
            var groupedOptions = [];
            var _iterator = _createForOfIteratorHelper(props.items),
              _step;
            try {
              var _loop = function _loop() {
                var o = _step.value;
                if (!o.category) {
                  var _o$value2, _o$text2, _o$disabled2;
                  groupedOptions.push({
                    value: (_o$value2 = o.value) !== null && _o$value2 !== void 0 ? _o$value2 : "",
                    label: (_o$text2 = o.text) !== null && _o$text2 !== void 0 ? _o$text2 : "",
                    disabled: (_o$disabled2 = o.disabled) !== null && _o$disabled2 !== void 0 ? _o$disabled2 : false
                  });
                  return "continue";
                }
                var matchedGroups = groupedOptions.filter(g => g.label === o.category && !!g.options);
                if (matchedGroups.length >= 1 && !!matchedGroups[0].options) {
                  var _o$value3, _o$text3, _o$disabled3;
                  matchedGroups[0].options.push({
                    value: (_o$value3 = o.value) !== null && _o$value3 !== void 0 ? _o$value3 : "",
                    label: (_o$text3 = o.text) !== null && _o$text3 !== void 0 ? _o$text3 : "",
                    disabled: (_o$disabled3 = o.disabled) !== null && _o$disabled3 !== void 0 ? _o$disabled3 : false
                  });
                } else {
                  var _o$value4, _o$text4, _o$disabled4;
                  groupedOptions.push({
                    label: o.category,
                    options: [{
                      value: (_o$value4 = o.value) !== null && _o$value4 !== void 0 ? _o$value4 : "",
                      label: (_o$text4 = o.text) !== null && _o$text4 !== void 0 ? _o$text4 : "",
                      disabled: (_o$disabled4 = o.disabled) !== null && _o$disabled4 !== void 0 ? _o$disabled4 : false
                    }]
                  });
                }
              };
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _ret = _loop();
                if (_ret === "continue") continue;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return groupedOptions;
          });
          var computedLoading = computed(() => {
            return props.loading;
          });
          var mode = computed(() => {
            return props.multiple ? "multiple" : undefined;
          });
          var hasValue = computed(() => {
            if (Array.isArray(internalValue.value)) {
              return internalValue.value.length > 0;
            } else {
              return internalValue.value !== "";
            }
          });
          var isClearable = computed(() => {
            return computedShowBlankItem.value && !computedLoading.value && hasValue.value && internalValue.value !== props.blankValue;
          });
          var isDisabled = computed(() => {
            return props.disabled;
          });
          var syncInternalValue = () => {
            var value = props.modelValue;
            if (props.multiple) {
              if (!Array.isArray(value)) {
                value = value === "" ? [] : [value];
              }
              value = props.items.filter(o => value.some(v => {
                var _o$value5;
                return props.compareValue(v, (_o$value5 = o.value) !== null && _o$value5 !== void 0 ? _o$value5 : "");
              })).map(o => {
                var _o$value6;
                return (_o$value6 = o.value) !== null && _o$value6 !== void 0 ? _o$value6 : "";
              });
            } else {
              if (Array.isArray(value)) {
                value = value.length === 0 ? null : value[0];
              }
              if (value === null) {
                var _props$items$;
                value = computedShowBlankItem.value ? props.blankValue : ((_props$items$ = props.items[0]) === null || _props$items$ === void 0 ? void 0 : _props$items$.value) || props.blankValue;
              }
              var selectedOption = props.items.find(o => {
                var _o$value7;
                return props.compareValue(value, (_o$value7 = o.value) !== null && _o$value7 !== void 0 ? _o$value7 : "");
              }) || null;
              if (!selectedOption) {
                var _props$items$2;
                value = computedShowBlankItem.value ? props.blankValue : ((_props$items$2 = props.items[0]) === null || _props$items$2 === void 0 ? void 0 : _props$items$2.value) || props.blankValue;
              } else {
                var _selectedOption$value;
                value = (_selectedOption$value = selectedOption.value) !== null && _selectedOption$value !== void 0 ? _selectedOption$value : "";
              }
            }
            updateRefValue(internalValue, value);
          };
          var filterItem = (input, option) => {
            return (option.label || "").toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) >= 0;
          };
          var getPopupContainer = () => {
            var _controlWrapper$value;
            return (_controlWrapper$value = controlWrapper.value) !== null && _controlWrapper$value !== void 0 ? _controlWrapper$value : document.body;
          };
          var onDropdownVisibleChange = open => {
            if (open) {
              emit("open");
            }
          };
          watch([() => props.modelValue, computedShowBlankItem, () => props.multiple, () => props.items], () => {
            syncInternalValue();
          });
          watch(internalValue, () => {
            var newValue = internalValue.value;
            if (props.multiple) {
              if (!Array.isArray(newValue)) {
                newValue = newValue === null ? [] : [newValue];
              }
            } else {
              if (Array.isArray(newValue)) {
                newValue = newValue.length === 0 ? null : newValue[0];
              }
              if (newValue === null) {
                var _props$items$3;
                newValue = computedShowBlankItem.value ? props.blankValue : ((_props$items$3 = props.items[0]) === null || _props$items$3 === void 0 ? void 0 : _props$items$3.value) || props.blankValue;
              }
            }
            if (!deepEqual(props.modelValue, newValue, true)) {
              emit("update:modelValue", newValue);
            }
          });
          syncInternalValue();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps(unref(standardFieldProps), {
              modelValue: internalValue.value,
              formGroupClasses: 'rock-drop-down-list ' + _ctx.formGroupClasses,
              name: "dropdownlist"
            }), {
              default: withCtx(_ref3 => {
                _ref3.uniqueId;
                  var field = _ref3.field;
                return [createElementVNode("div", {
                  ref_key: "controlWrapper",
                  ref: controlWrapper,
                  class: "control-wrapper"
                }, [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: true
                }), createElementVNode("div", {
                  class: normalizeClass({
                    'input-group': _ctx.$slots.inputGroupPrepend || _ctx.$slots.inputGroupAppend
                  })
                }, [renderSlot(_ctx.$slots, "inputGroupPrepend", {
                  isInputGroupSupported: true
                }), createVNode(unref(Select), mergeProps({
                  value: internalValue.value,
                  "onUpdate:value": _cache[0] || (_cache[0] = $event => internalValue.value = $event)
                }, field, {
                  class: ["form-control", __props.inputClasses],
                  allowClear: unref(isClearable),
                  loading: unref(computedLoading),
                  disabled: unref(isDisabled),
                  options: unref(computedOptions),
                  showSearch: __props.enhanceForLongLists,
                  filterOption: filterItem,
                  mode: unref(mode),
                  getPopupContainer: getPopupContainer,
                  showArrow: "",
                  virtual: false,
                  onDropdownVisibleChange: onDropdownVisibleChange
                }), {
                  clearIcon: withCtx(() => [_hoisted_1]),
                  suffixIcon: withCtx(() => [!unref(computedLoading) ? (openBlock(), createElementBlock("i", _hoisted_2)) : (openBlock(), createElementBlock("i", _hoisted_3))]),
                  notFoundContent: withCtx(() => [createElementVNode("div", _hoisted_4, [renderSlot(_ctx.$slots, "empty", {}, () => [_hoisted_5])])]),
                  dropdownRender: withCtx(_ref4 => {
                    var menu = _ref4.menuNode;
                    return [unref(computedLoading) ? (openBlock(), createElementBlock("div", _hoisted_6, _hoisted_9)) : (openBlock(), createBlock(vNodes, {
                      key: 1,
                      vnodes: menu
                    }, null, 8, ["vnodes"]))];
                  }),
                  _: 2
                }, 1040, ["value", "class", "allowClear", "loading", "disabled", "options", "showSearch", "mode"]), renderSlot(_ctx.$slots, "inputGroupAppend", {
                  isInputGroupSupported: true
                })], 2), renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: true
                })], 512)];
              }),
              _: 3
            }, 16, ["modelValue", "formGroupClasses"]);
          };
        }
      }));

      script.__file = "Framework/Controls/dropDownList.obs";

    })
  };
}));
//# sourceMappingURL=dropDownList.obs.js.map
