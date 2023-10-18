System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Utility/http', './baseAsyncPicker'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, Fragment, createBlock, unref, mergeProps, createCommentVNode, createVNode, nextTick, useStandardAsyncPickerProps, updateRefValue, standardAsyncPickerProps, useHttp, BaseAsyncPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      nextTick = module.nextTick;
    }, function (module) {
      useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
      updateRefValue = module.updateRefValue;
      standardAsyncPickerProps = module.standardAsyncPickerProps;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      BaseAsyncPicker = module["default"];
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
        name: 'groupRolePicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: true
          },
          excludeGroupRoles: {
            type: Array
          },
          groupTypeGuid: {
            type: String,
            default: null
          }
        }, standardAsyncPickerProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var standardProps = useStandardAsyncPickerProps(props);
          var http = useHttp();
          var internalTypeValue = ref(null);
          var loadedTypeItems = ref(null);
          var internalRoleValue = ref(props.modelValue);
          var loadedRoleItems = ref(null);
          var groupTypeGuidValue = computed(() => {
            var _internalTypeValue$va;
            return props.groupTypeGuid || ((_internalTypeValue$va = internalTypeValue.value) === null || _internalTypeValue$va === void 0 ? void 0 : _internalTypeValue$va.value) || null;
          });
          var roleLabel = computed(() => {
            var _internalTypeValue$va2, _internalTypeValue$va3;
            if (props.groupTypeGuid) {
              return props.label;
            }
            return (_internalTypeValue$va2 = internalTypeValue.value) !== null && _internalTypeValue$va2 !== void 0 && _internalTypeValue$va2.text ? ((_internalTypeValue$va3 = internalTypeValue.value) === null || _internalTypeValue$va3 === void 0 ? void 0 : _internalTypeValue$va3.text) + " Role" : "Role";
          });
          var actualTypeItems = computed(() => {
            return loadedTypeItems.value || loadTypeOptions;
          });
          var actualRoleItems = computed(() => {
            return loadedRoleItems.value || loadRoleOptions;
          });
          function loadTypeOptions() {
            return _loadTypeOptions.apply(this, arguments);
          }
          function _loadTypeOptions() {
            _loadTypeOptions = _asyncToGenerator(function* () {
              var result = yield http.post("/api/v2/Controls/GroupRolePickerGetGroupTypes");
              if (result.isSuccess && result.data) {
                var _result$data, _loadedTypeItems$valu;
                loadedTypeItems.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : null;
                return (_loadedTypeItems$valu = loadedTypeItems.value) !== null && _loadedTypeItems$valu !== void 0 ? _loadedTypeItems$valu : [];
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                loadedTypeItems.value = [];
                return [];
              }
            });
            return _loadTypeOptions.apply(this, arguments);
          }
          function loadRoleOptions() {
            return _loadRoleOptions.apply(this, arguments);
          }
          function _loadRoleOptions() {
            _loadRoleOptions = _asyncToGenerator(function* () {
              if (!groupTypeGuidValue.value) {
                return [];
              }
              var options = {
                groupTypeGuid: groupTypeGuidValue.value,
                excludeGroupRoles: props.excludeGroupRoles
              };
              var result = yield http.post("/api/v2/Controls/GroupRolePickerGetGroupRoles", null, options);
              if (result.isSuccess && result.data) {
                var _result$data2, _loadedRoleItems$valu;
                loadedRoleItems.value = (_result$data2 = result.data) !== null && _result$data2 !== void 0 ? _result$data2 : null;
                return (_loadedRoleItems$valu = loadedRoleItems.value) !== null && _loadedRoleItems$valu !== void 0 ? _loadedRoleItems$valu : [];
              } else {
                var _result$errorMessage2;
                console.error((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while loading data.");
                loadedRoleItems.value = [];
                return [];
              }
            });
            return _loadRoleOptions.apply(this, arguments);
          }
          function loadRoleOptionsFromValue() {
            return _loadRoleOptionsFromValue.apply(this, arguments);
          }
          function _loadRoleOptionsFromValue() {
            _loadRoleOptionsFromValue = _asyncToGenerator(function* () {
              var _props$modelValue;
              var options = {
                groupRoleGuid: (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.value,
                excludeGroupRoles: props.excludeGroupRoles
              };
              var result = yield http.post("/api/v2/Controls/GroupRolePickerGetAllForGroupRole", null, options);
              if (result.isSuccess && result.data) {
                var _result$data$groupRol, _result$data$selected, _result$data$selected2;
                loadedRoleItems.value = (_result$data$groupRol = result.data.groupRoles) !== null && _result$data$groupRol !== void 0 ? _result$data$groupRol : null;
                internalTypeValue.value = (_result$data$selected = result.data.selectedGroupType) !== null && _result$data$selected !== void 0 ? _result$data$selected : null;
                yield nextTick();
                internalRoleValue.value = (_result$data$selected2 = result.data.selectedGroupRole) !== null && _result$data$selected2 !== void 0 ? _result$data$selected2 : null;
              } else {
                var _result$errorMessage3;
                console.error((_result$errorMessage3 = result.errorMessage) !== null && _result$errorMessage3 !== void 0 ? _result$errorMessage3 : "Unknown error while loading data.");
                loadedRoleItems.value = [];
              }
            });
            return _loadRoleOptionsFromValue.apply(this, arguments);
          }
          watch(() => props.modelValue, () => {
            if (updateRefValue(internalRoleValue, props.modelValue)) {
              loadRoleOptionsFromValue();
            }
          });
          watch(internalRoleValue, () => emit("update:modelValue", internalRoleValue.value));
          watch([groupTypeGuidValue, () => props.excludeGroupRoles], () => {
            internalRoleValue.value = null;
            loadedRoleItems.value = null;
            loadRoleOptions();
          });
          if (props.modelValue) {
            loadRoleOptionsFromValue();
          } else if (props.groupTypeGuid) {
            loadRoleOptions();
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [!__props.groupTypeGuid ? (openBlock(), createBlock(unref(BaseAsyncPicker), mergeProps({
              key: 0,
              modelValue: internalTypeValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalTypeValue.value = $event)
            }, unref(standardProps), {
              label: _ctx.label,
              displayStyle: _ctx.displayStyle,
              items: unref(actualTypeItems),
              showBlankItem: "",
              multiple: false
            }), null, 16, ["modelValue", "label", "displayStyle", "items"])) : createCommentVNode("v-if", true), createVNode(unref(BaseAsyncPicker), mergeProps({
              modelValue: internalRoleValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalRoleValue.value = $event)
            }, unref(standardProps), {
              label: unref(roleLabel),
              displayStyle: _ctx.displayStyle,
              items: unref(actualRoleItems),
              showBlankItem: "",
              multiple: false
            }), null, 16, ["modelValue", "label", "displayStyle", "items"])], 64);
          };
        }
      }));

      script.__file = "Framework/Controls/groupRolePicker.obs";

    })
  };
}));
//# sourceMappingURL=groupRolePicker.obs.js.map
