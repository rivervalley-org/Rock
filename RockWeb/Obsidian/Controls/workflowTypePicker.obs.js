System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/treeItemProviders', './treeItemPicker.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, mergeProps, useSecurityGrantToken, useStandardRockFormFieldProps, updateRefValue, standardRockFormFieldProps, WorkflowTypeTreeItemProvider, TreeItemPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      updateRefValue = module.updateRefValue;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      WorkflowTypeTreeItemProvider = module.WorkflowTypeTreeItemProvider;
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

      var script = exports('default', defineComponent({
        name: 'workflowTypePicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          includeInactiveItems: {
            type: Boolean,
            default: false
          },
          multiple: {
            type: Boolean,
            default: false
          },
          disabled: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue;
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : null);
          var securityGrantToken = useSecurityGrantToken();
          var standardProps = useStandardRockFormFieldProps(props);
          var itemProvider = ref(new WorkflowTypeTreeItemProvider());
          itemProvider.value.includeInactiveItems = props.includeInactiveItems;
          itemProvider.value.securityGrantToken = securityGrantToken.value;
          watch(securityGrantToken, () => {
            itemProvider.value.securityGrantToken = securityGrantToken.value;
          });
          watch(() => props.includeInactiveItems, () => {
            var oldProvider = itemProvider.value;
            var newProvider = new WorkflowTypeTreeItemProvider();
            newProvider.securityGrantToken = oldProvider.securityGrantToken;
            newProvider.includeInactiveItems = props.includeInactiveItems;
            itemProvider.value = newProvider;
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue2;
            updateRefValue(internalValue, (_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : null);
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(TreeItemPicker), mergeProps({
              modelValue: internalValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.value = $event)
            }, unref(standardProps), {
              formGroupClasses: 'category-picker ' + _ctx.formGroupClasses,
              iconCssClass: "fa fa-cogs",
              provider: itemProvider.value,
              multiple: __props.multiple,
              disabled: __props.disabled,
              disableFolderSelection: ""
            }), null, 16, ["modelValue", "formGroupClasses", "provider", "multiple", "disabled"]);
          };
        }
      }));

      script.__file = "Framework/Controls/workflowTypePicker.obs";

    })
  };
}));
//# sourceMappingURL=workflowTypePicker.obs.js.map
