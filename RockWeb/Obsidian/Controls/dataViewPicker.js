System.register(['@Obsidian/Utility/block', '@Obsidian/Utility/component', 'vue', '@Obsidian/Utility/treeItemProviders', './treeItemPicker.obs'], (function (exports) {
  'use strict';
  var useSecurityGrantToken, useStandardAsyncPickerProps, updateRefValue, standardAsyncPickerProps, defineComponent, ref, watch, DataViewTreeItemProvider, TreeItemPicker;
  return {
    setters: [function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }, function (module) {
      useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
      updateRefValue = module.updateRefValue;
      standardAsyncPickerProps = module.standardAsyncPickerProps;
    }, function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      DataViewTreeItemProvider = module.DataViewTreeItemProvider;
    }, function (module) {
      TreeItemPicker = module["default"];
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

      var dataViewPicker = exports('default', defineComponent({
        name: "DataViewPicker",
        components: {
          TreeItemPicker
        },
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          entityTypeGuid: {
            type: String,
            required: false
          }
        }, standardAsyncPickerProps),
        emits: {
          "update:modelValue": _value => true
        },
        setup(props, _ref) {
          var _props$modelValue;
          var emit = _ref.emit;
          var internalValue = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : null);
          var securityGrantToken = useSecurityGrantToken();
          var standardProps = useStandardAsyncPickerProps(props);
          var itemProvider = ref(new DataViewTreeItemProvider());
          itemProvider.value.entityTypeGuid = props.entityTypeGuid;
          itemProvider.value.securityGrantToken = securityGrantToken.value;
          watch(securityGrantToken, () => {
            itemProvider.value.securityGrantToken = securityGrantToken.value;
          });
          watch(() => props.entityTypeGuid, () => {
            var oldProvider = itemProvider.value;
            var newProvider = new DataViewTreeItemProvider();
            newProvider.securityGrantToken = oldProvider.securityGrantToken;
            newProvider.entityTypeGuid = props.entityTypeGuid;
            itemProvider.value = newProvider;
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue2;
            updateRefValue(internalValue, (_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : null);
          });
          return {
            internalValue,
            itemProvider,
            standardProps
          };
        },
        template: "\n<TreeItemPicker v-model=\"internalValue\"\n    v-bind=\"standardProps\"\n    formGroupClasses=\"category-picker\"\n    iconCssClass=\"fa fa-filter\"\n    :provider=\"itemProvider\"\n    :multiple=\"multiple\"\n    disableFolderSelection\n/>\n"
      }));

    })
  };
}));
//# sourceMappingURL=dataViewPicker.js.map
