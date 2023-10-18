System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Utility/http', './baseAsyncPicker', './groupTypePicker.obs', './rockFormField', '@Obsidian/Enums/Controls/pickerDisplayStyle'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createBlock, unref, mergeProps, withCtx, createVNode, nextTick, useStandardAsyncPickerProps, useStandardRockFormFieldProps, updateRefValue, standardAsyncPickerProps, useHttp, BaseAsyncPicker, GroupTypePicker, RockFormField, PickerDisplayStyle;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      nextTick = module.nextTick;
    }, function (module) {
      useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      updateRefValue = module.updateRefValue;
      standardAsyncPickerProps = module.standardAsyncPickerProps;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      BaseAsyncPicker = module["default"];
    }, function (module) {
      GroupTypePicker = module["default"];
    }, function (module) {
      RockFormField = module["default"];
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
        name: 'groupTypeGroupPicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: true
          },
          groupType: {
            type: Object,
            default: null
          },
          groupLabel: {
            type: String,
            default: "Group"
          }
        }, standardAsyncPickerProps),
        emits: ["update:groupType", "update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var standardProps = useStandardAsyncPickerProps(props);
          var fieldProps = useStandardRockFormFieldProps(props);
          var http = useHttp();
          var internalTypeValue = ref(props.groupType);
          var internalGroupValue = ref(props.modelValue);
          var loadedGroupItems = ref(null);
          var actualGroupItems = computed(() => {
            return loadedGroupItems.value || loadGroupOptions;
          });
          function loadGroupOptions() {
            return _loadGroupOptions.apply(this, arguments);
          }
          function _loadGroupOptions() {
            _loadGroupOptions = _asyncToGenerator(function* () {
              var _internalTypeValue$va;
              if (!internalTypeValue.value) {
                return [];
              }
              var options = {
                groupTypeGuid: (_internalTypeValue$va = internalTypeValue.value) === null || _internalTypeValue$va === void 0 ? void 0 : _internalTypeValue$va.value
              };
              var result = yield http.post("/api/v2/Controls/GroupTypeGroupPickerGetGroups", null, options);
              if (result.isSuccess && result.data) {
                var _result$data, _loadedGroupItems$val;
                loadedGroupItems.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : null;
                return (_loadedGroupItems$val = loadedGroupItems.value) !== null && _loadedGroupItems$val !== void 0 ? _loadedGroupItems$val : [];
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                loadedGroupItems.value = [];
                return [];
              }
            });
            return _loadGroupOptions.apply(this, arguments);
          }
          function loadGroupTypeFromGroup() {
            return _loadGroupTypeFromGroup.apply(this, arguments);
          }
          function _loadGroupTypeFromGroup() {
            _loadGroupTypeFromGroup = _asyncToGenerator(function* () {
              var _props$modelValue;
              var options = {
                groupGuid: (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.value
              };
              var result = yield http.post("/api/v2/Controls/GroupTypeGroupPickerGetGroupTypeOfGroup", null, options);
              if (result.isSuccess && result.data) {
                var _result$data2;
                var currentValue = internalGroupValue.value;
                internalTypeValue.value = (_result$data2 = result.data) !== null && _result$data2 !== void 0 ? _result$data2 : null;
                yield nextTick();
                internalGroupValue.value = currentValue;
              } else {
                var _result$errorMessage2;
                console.error((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while loading data.");
              }
            });
            return _loadGroupTypeFromGroup.apply(this, arguments);
          }
          watch(() => props.modelValue, () => {
            if (updateRefValue(internalGroupValue, props.modelValue)) {
              loadGroupTypeFromGroup();
            }
          });
          watch(() => props.groupType, () => {
            updateRefValue(internalTypeValue, props.groupType);
          });
          watch(internalGroupValue, () => {
            emit("update:modelValue", internalGroupValue.value);
          });
          watch(internalTypeValue, () => {
            emit("update:groupType", internalTypeValue.value);
            internalGroupValue.value = null;
            loadedGroupItems.value = null;
            loadGroupOptions();
          });
          if (props.modelValue) {
            loadGroupTypeFromGroup();
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps(unref(fieldProps), {
              modelValue: internalGroupValue.value,
              name: "group-type-group-picker"
            }), {
              default: withCtx(() => [createVNode(unref(GroupTypePicker), mergeProps(unref(standardProps), {
                modelValue: internalTypeValue.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalTypeValue.value = $event),
                label: "Group Type",
                showBlankItem: "",
                displayStyle: unref(PickerDisplayStyle).Condensed,
                multiple: false,
                rules: "",
                onlyGroupListItems: "",
                formGroupClasses: "mt-0"
              }), null, 16, ["modelValue", "displayStyle"]), createVNode(unref(BaseAsyncPicker), mergeProps({
                modelValue: internalGroupValue.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalGroupValue.value = $event)
              }, unref(standardProps), {
                label: __props.groupLabel,
                displayStyle: _ctx.displayStyle,
                items: unref(actualGroupItems),
                showBlankItem: "",
                multiple: false
              }), null, 16, ["modelValue", "label", "displayStyle", "items"])]),
              _: 1
            }, 16, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/groupTypeGroupPicker.obs";

    })
  };
}));
//# sourceMappingURL=groupTypeGroupPicker.obs.js.map
