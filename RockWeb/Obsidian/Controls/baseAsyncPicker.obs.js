System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Utility/promiseUtils', '@Obsidian/Utility/suspense', '@Obsidian/Enums/Controls/controlLazyMode', './checkBoxList.obs', './dropDownList.obs', './radioButtonList.obs', '@Obsidian/Enums/Controls/pickerDisplayStyle'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, Fragment, unref, createBlock, mergeProps, createSlots, withCtx, renderSlot, createCommentVNode, useStandardRockFormFieldProps, updateRefValue, standardAsyncPickerProps, isPromise, useSuspense, ControlLazyMode, CheckBoxList, DropDownList, RadioButtonList, PickerDisplayStyle;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      unref = module.unref;
      createBlock = module.createBlock;
      mergeProps = module.mergeProps;
      createSlots = module.createSlots;
      withCtx = module.withCtx;
      renderSlot = module.renderSlot;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      updateRefValue = module.updateRefValue;
      standardAsyncPickerProps = module.standardAsyncPickerProps;
    }, function (module) {
      isPromise = module.isPromise;
    }, function (module) {
      useSuspense = module.useSuspense;
    }, function (module) {
      ControlLazyMode = module.ControlLazyMode;
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      PickerDisplayStyle = module.PickerDisplayStyle;
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
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
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

      var script = exports('default', defineComponent({
        name: 'baseAsyncPicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          grouped: {
            type: Boolean,
            default: false
          },
          items: {
            type: Object,
            required: false
          }
        }, standardAsyncPickerProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          function modelValueToInternalValue(value, isMultiple) {
            if (value === undefined || value === null) {
              if (isMultiple && !(isRadioButtonListStyle !== null && isRadioButtonListStyle !== void 0 && isRadioButtonListStyle.value)) {
                return [];
              } else {
                return "";
              }
            } else if (Array.isArray(value)) {
              var valuesAsStrings = value.map(v => {
                var _v$value;
                return (_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "";
              });
              if (isMultiple && !(isRadioButtonListStyle !== null && isRadioButtonListStyle !== void 0 && isRadioButtonListStyle.value)) {
                return valuesAsStrings;
              } else {
                var _valuesAsStrings$;
                return (_valuesAsStrings$ = valuesAsStrings[0]) !== null && _valuesAsStrings$ !== void 0 ? _valuesAsStrings$ : "";
              }
            } else if (value.value) {
              return isMultiple ? [value.value] : value.value;
            } else {
              return isMultiple ? [] : "";
            }
          }
          var internalValue = ref(modelValueToInternalValue(props.modelValue, props.multiple));
          var loadedItems = ref(null);
          var isLoading = ref(false);
          var hasLoadedItems = ref(false);
          var standardProps = useStandardRockFormFieldProps(props);
          var initialItems = computed(() => {
            if (props.multiple) {
              if (Array.isArray(props.modelValue)) {
                return props.modelValue;
              } else if (props.modelValue) {
                return [props.modelValue];
              } else {
                return [];
              }
            } else {
              if (Array.isArray(props.modelValue)) {
                return [props.modelValue[0]];
              } else if (props.modelValue) {
                return [props.modelValue];
              } else {
                return [];
              }
            }
          });
          var actualItems = computed(() => {
            var _loadedItems$value;
            return (_loadedItems$value = loadedItems.value) !== null && _loadedItems$value !== void 0 ? _loadedItems$value : initialItems.value;
          });
          var isDropDownListStyle = computed(() => {
            return props.displayStyle === PickerDisplayStyle.Condensed || props.displayStyle === PickerDisplayStyle.Auto;
          });
          var isCheckBoxListStyle = computed(() => {
            return props.displayStyle === PickerDisplayStyle.List && props.multiple;
          });
          var isRadioButtonListStyle = computed(() => {
            return props.displayStyle === PickerDisplayStyle.List && !props.multiple;
          });
          var isHorizontal = computed(() => {
            return props.columnCount != 1;
          });
          function loadItems(_x) {
            return _loadItems.apply(this, arguments);
          }
          function _loadItems() {
            _loadItems = _asyncToGenerator(function* (eagerLoading) {
              var _props$items;
              var items = (_props$items = props.items) !== null && _props$items !== void 0 ? _props$items : null;
              if (items === null) {
                loadedItems.value = null;
                return;
              }
              if (typeof items === "function") {
                if (!eagerLoading) {
                  return;
                }
                items = items();
              }
              if (isPromise(items)) {
                isLoading.value = true;
                items = yield items;
                isLoading.value = false;
              }
              loadedItems.value = items;
              hasLoadedItems.value = true;
            });
            return _loadItems.apply(this, arguments);
          }
          function onOpen() {
            if (loadedItems.value === null && !isLoading.value) {
              loadItems(true);
            }
          }
          watch(() => props.items, () => {
            loadItems(props.lazyMode !== ControlLazyMode.OnDemand || hasLoadedItems.value);
          });
          watch(() => props.displayStyle, () => {
            if (hasLoadedItems.value) {
              return;
            }
            if (isCheckBoxListStyle.value || isRadioButtonListStyle.value) {
              loadItems(true);
            }
          });
          watch([() => props.modelValue, () => props.multiple], () => {
            updateRefValue(internalValue, modelValueToInternalValue(props.modelValue, props.multiple));
          });
          watch(internalValue, () => {
            if (Array.isArray(internalValue.value)) {
              var selectedValues = internalValue.value;
              var newValue = actualItems.value.filter(o => selectedValues.some(v => v === o.value));
              emit("update:modelValue", newValue);
            } else {
              var selectedValue = internalValue.value;
              var _newValue = actualItems.value.filter(o => selectedValue === o.value);
              emit("update:modelValue", _newValue.length > 0 ? _newValue[0] : null);
            }
          });
          if (Array.isArray(props.items)) {
            loadItems(true);
          } else if (props.lazyMode === ControlLazyMode.Eager || !isDropDownListStyle.value) {
            var suspense = useSuspense();
            if (suspense) {
              suspense.addOperation(loadItems(true));
            } else {
              loadItems(true);
            }
          } else if (props.lazyMode === ControlLazyMode.Lazy) {
            loadItems(true);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [unref(isDropDownListStyle) ? (openBlock(), createBlock(unref(DropDownList), mergeProps({
              key: 0,
              modelValue: internalValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event)
            }, unref(standardProps), {
              disabled: __props.disabled,
              grouped: __props.grouped,
              loading: isLoading.value,
              items: unref(actualItems),
              multiple: _ctx.multiple,
              showBlankItem: _ctx.showBlankItem,
              blankValue: _ctx.blankValue,
              enhanceForLongLists: _ctx.enhanceForLongLists,
              lazyMode: _ctx.lazyMode,
              displayStyle: "auto",
              onOpen: onOpen
            }), createSlots({
              _: 2
            }, [_ctx.$slots.prepend ? {
              name: "prepend",
              fn: withCtx(_ref2 => {
                var isInputGroupSupported = _ref2.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.inputGroupPrepend ? {
              name: "inputGroupPrepend",
              fn: withCtx(_ref3 => {
                var isInputGroupSupported = _ref3.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "inputGroupPrepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.inputGroupAppend ? {
              name: "inputGroupAppend",
              fn: withCtx(_ref4 => {
                var isInputGroupSupported = _ref4.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "inputGroupAppend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.append ? {
              name: "append",
              fn: withCtx(_ref5 => {
                var isInputGroupSupported = _ref5.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined]), 1040, ["modelValue", "disabled", "grouped", "loading", "items", "multiple", "showBlankItem", "blankValue", "enhanceForLongLists", "lazyMode"])) : createCommentVNode("v-if", true), unref(isCheckBoxListStyle) ? (openBlock(), createBlock(unref(CheckBoxList), mergeProps({
              key: 1,
              modelValue: internalValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalValue.value = $event)
            }, unref(standardProps), {
              disabled: __props.disabled,
              horizontal: unref(isHorizontal),
              items: unref(actualItems),
              repeatColumns: _ctx.columnCount
            }), createSlots({
              _: 2
            }, [_ctx.$slots.prepend ? {
              name: "prepend",
              fn: withCtx(_ref6 => {
                var isInputGroupSupported = _ref6.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.append ? {
              name: "append",
              fn: withCtx(_ref7 => {
                var isInputGroupSupported = _ref7.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined]), 1040, ["modelValue", "disabled", "horizontal", "items", "repeatColumns"])) : createCommentVNode("v-if", true), unref(isRadioButtonListStyle) ? (openBlock(), createBlock(unref(RadioButtonList), mergeProps({
              key: 2,
              modelValue: internalValue.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => internalValue.value = $event)
            }, unref(standardProps), {
              disabled: __props.disabled,
              horizontal: unref(isHorizontal),
              items: unref(actualItems),
              repeatColumns: _ctx.columnCount,
              showBlankItem: _ctx.showBlankItem
            }), createSlots({
              _: 2
            }, [_ctx.$slots.prepend ? {
              name: "prepend",
              fn: withCtx(_ref8 => {
                var isInputGroupSupported = _ref8.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.append ? {
              name: "append",
              fn: withCtx(_ref9 => {
                var isInputGroupSupported = _ref9.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined]), 1040, ["modelValue", "disabled", "horizontal", "items", "repeatColumns", "showBlankItem"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "Framework/Controls/baseAsyncPicker.obs";

    })
  };
}));
//# sourceMappingURL=baseAsyncPicker.obs.js.map
