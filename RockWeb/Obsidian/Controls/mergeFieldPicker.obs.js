System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Utility/treeItemProviders', './treeItemPicker.obs', '@Obsidian/Utility/guid', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, mergeProps, isRef, useStandardRockFormFieldProps, useVModelPassthroughWithPropUpdateCheck, standardRockFormFieldProps, MergeFieldTreeItemProvider, TreeItemPicker, emptyGuid, useSecurityGrantToken;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      isRef = module.isRef;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      useVModelPassthroughWithPropUpdateCheck = module.useVModelPassthroughWithPropUpdateCheck;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      MergeFieldTreeItemProvider = module.MergeFieldTreeItemProvider;
    }, function (module) {
      TreeItemPicker = module["default"];
    }, function (module) {
      emptyGuid = module.emptyGuid;
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }],
    execute: (function () {

      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
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
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
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
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
        name: 'mergeFieldPicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          additionalFields: {
            type: String,
            required: true
          },
          multiple: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var standardFieldProps = useStandardRockFormFieldProps(props);
          var _useVModelPassthrough = useVModelPassthroughWithPropUpdateCheck(props, "modelValue", emit),
            _useVModelPassthrough2 = _slicedToArray(_useVModelPassthrough, 2),
            internalValue = _useVModelPassthrough2[0],
            watchModelProp = _useVModelPassthrough2[1];
          var securityGrantToken = useSecurityGrantToken();
          var itemProvider = ref(newItemProvider());
          function newItemProvider() {
            var prov = new MergeFieldTreeItemProvider();
            prov.securityGrantToken = securityGrantToken.value;
            prov.additionalFields = props.additionalFields;
            if (internalValue.value) {
              if (Array.isArray(internalValue.value)) {
                prov.selectedIds = internalValue.value.map(p => {
                  var _p$value;
                  return (_p$value = p === null || p === void 0 ? void 0 : p.value) !== null && _p$value !== void 0 ? _p$value : emptyGuid;
                });
              } else {
                var _internalValue$value$;
                prov.selectedIds = [(_internalValue$value$ = internalValue.value.value) !== null && _internalValue$value$ !== void 0 ? _internalValue$value$ : emptyGuid];
              }
            }
            return prov;
          }
          watch(() => props.additionalFields, () => {
            itemProvider.value = newItemProvider();
          });
          watchModelProp(() => {
            itemProvider.value = newItemProvider();
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(TreeItemPicker), mergeProps(unref(standardFieldProps), {
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              formGroupClasses: "location-item-picker",
              iconCssClass: "fa fa-file",
              provider: itemProvider.value,
              multiple: __props.multiple,
              autoExpand: true
            }), null, 16, ["modelValue", "provider", "multiple"]);
          };
        }
      }));

      script.__file = "Framework/Controls/mergeFieldPicker.obs";

    })
  };
}));
//# sourceMappingURL=mergeFieldPicker.obs.js.map
