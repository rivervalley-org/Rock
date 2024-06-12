System.register(['vue', './utils', '@Obsidian/Controls/baseAsyncPicker.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', '@Obsidian/Utility/booleanUtils', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/Enums/Controls/universalItemValuePickerDisplayStyle'], (function (exports) {
  'use strict';
  var defineComponent, ref, inject, computed, watch, getFieldEditorProps, BaseAsyncPicker, toNumberOrNull, updateRefValue, useVModelPassthrough, asBoolean, PickerDisplayStyle, UniversalItemValuePickerDisplayStyle;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      inject = module.inject;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
    }, function (module) {
      BaseAsyncPicker = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      updateRefValue = module.updateRefValue;
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      asBoolean = module.asBoolean;
    }, function (module) {
      PickerDisplayStyle = module.PickerDisplayStyle;
    }, function (module) {
      UniversalItemValuePickerDisplayStyle = module.UniversalItemValuePickerDisplayStyle;
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

      var EditComponent = exports('EditComponent', defineComponent({
        name: "UniversalItemPickerField.Edit",
        components: {
          BaseAsyncPicker
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var _inject;
          var emit = _ref.emit;
          var internalValue = ref(getModelValue());
          var isRequired = (_inject = inject("isRequired")) !== null && _inject !== void 0 ? _inject : false;
          var items = computed(() => {
            try {
              var _props$configurationV;
              var providedOptions = JSON.parse((_props$configurationV = props.configurationValues["items"]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "[]");
              if (!isMultiple && !isRequired) {
                providedOptions.unshift({
                  text: "None",
                  value: ""
                });
              }
              return providedOptions;
            } catch (_unused) {
              return [];
            }
          });
          var displayStyle = computed(() => {
            var _toNumberOrNull;
            var mode = (_toNumberOrNull = toNumberOrNull(props.configurationValues["displayStyle"])) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : 0;
            if (mode === UniversalItemValuePickerDisplayStyle.List) {
              return PickerDisplayStyle.List;
            } else if (mode === UniversalItemValuePickerDisplayStyle.Condensed) {
              return PickerDisplayStyle.Condensed;
            } else {
              return PickerDisplayStyle.Auto;
            }
          });
          var enhanceForLongLists = computed(() => {
            return asBoolean(props.configurationValues["enhanceForLongLists"]);
          });
          var columnCount = computed(() => {
            var _toNumberOrNull2;
            return (_toNumberOrNull2 = toNumberOrNull(props.configurationValues["columnCount"])) !== null && _toNumberOrNull2 !== void 0 ? _toNumberOrNull2 : 0;
          });
          var isMultiple = computed(() => {
            return asBoolean(props.configurationValues["isMultiple"]);
          });
          function getModelValue() {
            try {
              return JSON.parse(props.modelValue);
            } catch (_unused2) {
              return null;
            }
          }
          watch(internalValue, () => {
            emit("update:modelValue", JSON.stringify(internalValue.value));
          });
          watch(() => props.modelValue, () => {
            updateRefValue(internalValue, getModelValue());
          });
          return {
            columnCount,
            displayStyle,
            enhanceForLongLists,
            internalValue,
            isMultiple,
            isRequired,
            items
          };
        },
        template: "\n<BaseAsyncPicker v-model=\"internalValue\"\n                 :items=\"items\"\n                 :isRequired=\"isRequired\"\n                 :multiple=\"isMultiple\"\n                 :enhanceForLongLists=\"enhanceForLongLists\"\n                 :columnCount=\"columnCount\"\n                 :displayStyle=\"displayStyle\"\n                 showBlankItem />\n"
      }));
      var FilterComponent = exports('FilterComponent', defineComponent({
        name: "UniversalItemPickerField.Filter",
        components: {
          EditComponent
        },
        props: getFieldEditorProps(),
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var dataEntryMode = computed(() => props.dataEntryMode);
          var configurationValues = computed(() => {
            var values = _objectSpread2({}, props.configurationValues);
            if (asBoolean(values["isMultiple"])) {
              values["isMultiple"] = "false";
            } else {
              values["isMultiple"] = "true";
            }
            return values;
          });
          return {
            configurationValues,
            dataEntryMode,
            internalValue
          };
        },
        template: "\n<EditComponent v-model=\"internalValue\" :configurationValues=\"configurationValues\" :dataEntryMode=\"dataEntryMode\" />\n"
      }));

    })
  };
}));
//# sourceMappingURL=universalItemPickerFieldComponents.js.map
