System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Utility/http', './baseAsyncPicker.obs', './groupTypeGroupPicker.obs', './rockFormField.obs', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules'], (function (exports) {
  'use strict';
  var defineComponent, computed, ref, watch, openBlock, createBlock, unref, mergeProps, withCtx, createVNode, isRef, useStandardAsyncPickerProps, useStandardRockFormFieldProps, useVModelPassthrough, standardAsyncPickerProps, useHttp, BaseAsyncPicker, GroupTypeGroupPicker, RockFormField, PickerDisplayStyle, toGuidOrNull, areEqual, emptyGuid, normalizeRules;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      isRef = module.isRef;
    }, function (module) {
      useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      useVModelPassthrough = module.useVModelPassthrough;
      standardAsyncPickerProps = module.standardAsyncPickerProps;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      BaseAsyncPicker = module["default"];
    }, function (module) {
      GroupTypeGroupPicker = module["default"];
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      PickerDisplayStyle = module.PickerDisplayStyle;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
      emptyGuid = module.emptyGuid;
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
        name: 'groupAndRolePicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: true
          },
          groupType: {
            type: Object,
            default: null
          },
          group: {
            type: Object,
            default: null
          },
          groupLabel: {
            type: String,
            default: "Group"
          },
          disabled: {
            type: Boolean,
            default: false
          }
        }, standardAsyncPickerProps),
        emits: ["update:groupType", "update:group", "update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var standardProps = useStandardAsyncPickerProps(props);
          var fieldProps = useStandardRockFormFieldProps(props);
          var http = useHttp();
          var internalTypeValue = useVModelPassthrough(props, "groupType", emit);
          var internalGroupValue = useVModelPassthrough(props, "group", emit);
          var internalRoleValue = useVModelPassthrough(props, "modelValue", emit);
          var formFieldValue = computed(() => {
            if (internalTypeValue.value && internalGroupValue.value && internalRoleValue.value) {
              return internalRoleValue.value;
            }
            return null;
          });
          var loadedRoleItems = ref(null);
          var actualRoleItems = computed(() => {
            return loadedRoleItems.value || loadRoleItems;
          });
          computed(() => {
            var rules = normalizeRules(props.rules);
            if (rules.includes("required")) {
              return "required";
            }
            return "";
          });
          function loadRoleItems() {
            return _loadRoleItems.apply(this, arguments);
          }
          function _loadRoleItems() {
            _loadRoleItems = _asyncToGenerator(function* () {
              var _internalTypeValue$va;
              var groupTypeGuid = toGuidOrNull((_internalTypeValue$va = internalTypeValue.value) === null || _internalTypeValue$va === void 0 ? void 0 : _internalTypeValue$va.value);
              if (!groupTypeGuid || areEqual(groupTypeGuid, emptyGuid)) {
                return [];
              }
              var options = {
                groupTypeGuid
              };
              var result = yield http.post("/api/v2/Controls/GroupAndRolePickerGetRoles", null, options);
              if (result.isSuccess && result.data) {
                var _result$data, _loadedRoleItems$valu;
                loadedRoleItems.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : null;
                return (_loadedRoleItems$valu = loadedRoleItems.value) !== null && _loadedRoleItems$valu !== void 0 ? _loadedRoleItems$valu : [];
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                loadedRoleItems.value = [];
                return [];
              }
            });
            return _loadRoleItems.apply(this, arguments);
          }
          watch(internalTypeValue, () => {
            loadedRoleItems.value = null;
            loadRoleItems();
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps(unref(fieldProps), {
              modelValue: unref(formFieldValue),
              name: "group-and-role-picker",
              disabled: __props.disabled
            }), {
              default: withCtx(() => [createVNode(unref(GroupTypeGroupPicker), mergeProps(unref(standardProps), {
                modelValue: unref(internalGroupValue),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalGroupValue) ? internalGroupValue.value = $event : null),
                groupType: unref(internalTypeValue),
                "onUpdate:groupType": _cache[1] || (_cache[1] = $event => isRef(internalTypeValue) ? internalTypeValue.value = $event : null),
                label: undefined,
                groupLabel: __props.groupLabel,
                rules: "",
                disabled: __props.disabled
              }), null, 16, ["modelValue", "groupType", "groupLabel", "disabled"]), createVNode(unref(BaseAsyncPicker), mergeProps({
                modelValue: unref(internalRoleValue),
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(internalRoleValue) ? internalRoleValue.value = $event : null)
              }, unref(standardProps), {
                rules: "",
                label: "Role",
                displayStyle: unref(PickerDisplayStyle).Condensed,
                items: unref(actualRoleItems),
                showBlankItem: "",
                multiple: false,
                disabled: __props.disabled
              }), null, 16, ["modelValue", "displayStyle", "items", "disabled"])]),
              _: 1
            }, 16, ["modelValue", "disabled"]);
          };
        }
      }));

      script.__file = "Framework/Controls/groupAndRolePicker.obs";

    })
  };
}));
//# sourceMappingURL=groupAndRolePicker.obs.js.map
