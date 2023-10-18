System.register(['@Obsidian/Utility/component', '@Obsidian/Utility/promiseUtils', '@Obsidian/Utility/suspense', '@Obsidian/Enums/Controls/controlLazyMode', 'vue', './checkBoxList', './dropDownList', './radioButtonList', '@Obsidian/Enums/Controls/pickerDisplayStyle'], (function (exports) {
  'use strict';
  var useStandardRockFormFieldProps, updateRefValue, standardAsyncPickerProps, isPromise, useSuspense, ControlLazyMode, defineComponent, ref, computed, watch, CheckBoxList, DropDownList, RadioButtonList, PickerDisplayStyle;
  return {
    setters: [function (module) {
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
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
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

      function modelValueToInternalValue(value, isMultiple) {
        if (value === undefined || value === null) {
          return isMultiple ? [] : "";
        } else if (Array.isArray(value)) {
          return value.map(v => {
            var _v$value;
            return (_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "";
          });
        } else {
          var _value$value;
          return (_value$value = value.value) !== null && _value$value !== void 0 ? _value$value : "";
        }
      }
      var baseAsyncPicker = exports('default', defineComponent({
        name: "BaseAsyncPicker",
        components: {
          CheckBoxList,
          DropDownList,
          RadioButtonList
        },
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
        emits: {
          "update:modelValue": _value => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
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
          var loadItems = function () {
            var _ref2 = _asyncToGenerator(function* (eagerLoading) {
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
            return function loadItems(_x) {
              return _ref2.apply(this, arguments);
            };
          }();
          var onOpen = () => {
            if (loadedItems.value === null && !isLoading.value) {
              loadItems(true);
            }
          };
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
          return {
            actualItems,
            internalValue,
            isCheckBoxListStyle,
            isDropDownListStyle,
            isHorizontal,
            isLoading,
            isRadioButtonListStyle,
            onOpen,
            standardProps
          };
        },
        template: "\n<DropDownList v-if=\"isDropDownListStyle\"\n    v-model=\"internalValue\"\n    v-bind=\"standardProps\"\n    :disabled=\"disabled\"\n    :grouped=\"grouped\"\n    :loading=\"isLoading\"\n    :items=\"actualItems\"\n    :multiple=\"multiple\"\n    :showBlankItem=\"showBlankItem\"\n    :blankValue=\"blankValue\"\n    :enhanceForLongLists=\"enhanceForLongLists\"\n    :lazyMode=\"lazyMode\"\n    displayStyle=\"auto\"\n    @open=\"onOpen\">\n\n    <template #prepend={isInputGroupSupported} v-if=\"$slots.prepend\"><slot name=\"prepend\" :isInputGroupSupported=\"isInputGroupSupported\" /></template>\n    <template #inputGroupPrepend={isInputGroupSupported} v-if=\"$slots.inputGroupPrepend\"><slot name=\"inputGroupPrepend\" :isInputGroupSupported=\"isInputGroupSupported\" /></template>\n    <template #inputGroupAppend={isInputGroupSupported} v-if=\"$slots.inputGroupAppend\"><slot name=\"inputGroupAppend\" :isInputGroupSupported=\"isInputGroupSupported\" /></template>\n    <template #append={isInputGroupSupported} v-if=\"$slots.append\"><slot name=\"append\" :isInputGroupSupported=\"isInputGroupSupported\" /></template>\n\n</DropDownList>\n\n<CheckBoxList v-if=\"isCheckBoxListStyle\"\n    v-model=\"internalValue\"\n    v-bind=\"standardProps\"\n    :disabled=\"disabled\"\n    :horizontal=\"isHorizontal\"\n    :items=\"actualItems\"\n    :repeatColumns=\"columnCount\">\n\n    <template #prepend={isInputGroupSupported} v-if=\"$slots.prepend\"><slot name=\"prepend\" :isInputGroupSupported=\"isInputGroupSupported\" /></template>\n    <template #append={isInputGroupSupported} v-if=\"$slots.append\"><slot name=\"append\" :isInputGroupSupported=\"isInputGroupSupported\" /></template>\n\n</CheckBoxList>\n\n<RadioButtonList v-if=\"isRadioButtonListStyle\"\n    v-model=\"internalValue\"\n    v-bind=\"standardProps\"\n    :disabled=\"disabled\"\n    :horizontal=\"isHorizontal\"\n    :items=\"actualItems\"\n    :repeatColumns=\"columnCount\"\n    :showBlankItem=\"showBlankItem\">\n\n    <template #prepend={isInputGroupSupported} v-if=\"$slots.prepend\"><slot name=\"prepend\" :isInputGroupSupported=\"isInputGroupSupported\" /></template>\n    <template #append={isInputGroupSupported} v-if=\"$slots.append\"><slot name=\"append\" :isInputGroupSupported=\"isInputGroupSupported\" /></template>\n\n</RadioButtonList>\n"
      }));

    })
  };
}));
//# sourceMappingURL=baseAsyncPicker.js.map