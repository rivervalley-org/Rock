System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Utility/http', './baseAsyncPicker.obs', './rockFormField.obs', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createBlock, unref, mergeProps, withCtx, createCommentVNode, createVNode, nextTick, useStandardRockFormFieldProps, useStandardAsyncPickerProps, updateRefValue, standardAsyncPickerProps, useHttp, BaseAsyncPicker, RockFormField, toGuidOrNull, areEqual, emptyGuid;
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
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      nextTick = module.nextTick;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
      updateRefValue = module.updateRefValue;
      standardAsyncPickerProps = module.standardAsyncPickerProps;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      BaseAsyncPicker = module["default"];
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
      emptyGuid = module.emptyGuid;
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
        name: 'contentChannelItemPicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: true
          },
          excludeContentChannelItems: {
            type: Array
          },
          contentChannelGuid: {
            type: String,
            default: null
          }
        }, standardAsyncPickerProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var standardProps = useStandardRockFormFieldProps(props);
          var standardAsyncProps = useStandardAsyncPickerProps(props);
          var http = useHttp();
          var internalChannelValue = ref(null);
          var loadedTypeItems = ref(null);
          var internalItemValue = ref(props.modelValue);
          var loadedContentChannelItemItems = ref(null);
          var contentChannelGuidValue = computed(() => {
            var _toGuidOrNull, _internalChannelValue;
            return (_toGuidOrNull = toGuidOrNull(props.contentChannelGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : toGuidOrNull((_internalChannelValue = internalChannelValue.value) === null || _internalChannelValue === void 0 ? void 0 : _internalChannelValue.value);
          });
          var actualChannelItems = computed(() => {
            return loadedTypeItems.value || loadTypeOptions;
          });
          var actualItemItems = computed(() => {
            return loadedContentChannelItemItems.value || loadContentChannelItemOptions;
          });
          function loadTypeOptions() {
            return _loadTypeOptions.apply(this, arguments);
          }
          function _loadTypeOptions() {
            _loadTypeOptions = _asyncToGenerator(function* () {
              var result = yield http.post("/api/v2/Controls/ContentChannelItemPickerGetContentChannels");
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
          function loadContentChannelItemOptions() {
            return _loadContentChannelItemOptions.apply(this, arguments);
          }
          function _loadContentChannelItemOptions() {
            _loadContentChannelItemOptions = _asyncToGenerator(function* () {
              var contentChannelGuid = toGuidOrNull(contentChannelGuidValue.value);
              if (!contentChannelGuid || areEqual(contentChannelGuid, emptyGuid)) {
                return [];
              }
              var options = {
                contentChannelGuid,
                excludeContentChannelItems: props.excludeContentChannelItems
              };
              var result = yield http.post("/api/v2/Controls/ContentChannelItemPickerGetContentChannelItems", null, options);
              if (result.isSuccess && result.data) {
                var _result$data2, _loadedContentChannel;
                loadedContentChannelItemItems.value = (_result$data2 = result.data) !== null && _result$data2 !== void 0 ? _result$data2 : null;
                return (_loadedContentChannel = loadedContentChannelItemItems.value) !== null && _loadedContentChannel !== void 0 ? _loadedContentChannel : [];
              } else {
                var _result$errorMessage2;
                console.error((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while loading data.");
                loadedContentChannelItemItems.value = [];
                return [];
              }
            });
            return _loadContentChannelItemOptions.apply(this, arguments);
          }
          function loadContentChannelItemOptionsFromValue() {
            return _loadContentChannelItemOptionsFromValue.apply(this, arguments);
          }
          function _loadContentChannelItemOptionsFromValue() {
            _loadContentChannelItemOptionsFromValue = _asyncToGenerator(function* () {
              var _props$modelValue;
              var options = {
                contentChannelItemGuid: toGuidOrNull((_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.value) || emptyGuid,
                excludeContentChannelItems: props.excludeContentChannelItems
              };
              var result = yield http.post("/api/v2/Controls/ContentChannelItemPickerGetAllForContentChannelItem", null, options);
              if (result.isSuccess && result.data) {
                var _result$data$contentC, _result$data$selected, _result$data$selected2;
                loadedContentChannelItemItems.value = (_result$data$contentC = result.data.contentChannelItems) !== null && _result$data$contentC !== void 0 ? _result$data$contentC : null;
                internalChannelValue.value = (_result$data$selected = result.data.selectedContentChannel) !== null && _result$data$selected !== void 0 ? _result$data$selected : null;
                yield nextTick();
                internalItemValue.value = (_result$data$selected2 = result.data.selectedContentChannelItem) !== null && _result$data$selected2 !== void 0 ? _result$data$selected2 : null;
              } else {
                var _result$errorMessage3;
                console.error((_result$errorMessage3 = result.errorMessage) !== null && _result$errorMessage3 !== void 0 ? _result$errorMessage3 : "Unknown error while loading data.");
                loadedContentChannelItemItems.value = [];
              }
            });
            return _loadContentChannelItemOptionsFromValue.apply(this, arguments);
          }
          watch(() => props.modelValue, () => {
            if (updateRefValue(internalItemValue, props.modelValue)) {
              loadContentChannelItemOptionsFromValue();
            }
          });
          watch(internalItemValue, () => emit("update:modelValue", internalItemValue.value));
          watch([contentChannelGuidValue, () => props.excludeContentChannelItems], () => {
            internalItemValue.value = null;
            loadedContentChannelItemItems.value = null;
            loadContentChannelItemOptions();
          });
          if (props.modelValue) {
            loadContentChannelItemOptionsFromValue();
          } else if (props.contentChannelGuid) {
            loadContentChannelItemOptions();
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: internalItemValue.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => internalItemValue.value = $event),
              name: "content-channel-item"
            }, unref(standardProps)), {
              default: withCtx(() => [!__props.contentChannelGuid ? (openBlock(), createBlock(unref(BaseAsyncPicker), mergeProps({
                key: 0,
                modelValue: internalChannelValue.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalChannelValue.value = $event)
              }, unref(standardAsyncProps), {
                label: "Content Channel",
                displayStyle: _ctx.displayStyle,
                items: unref(actualChannelItems),
                multiple: false,
                rules: "",
                showBlankItem: "",
                enhanceForLongLists: ""
              }), null, 16, ["modelValue", "displayStyle", "items"])) : createCommentVNode("v-if", true), createVNode(unref(BaseAsyncPicker), mergeProps({
                modelValue: internalItemValue.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalItemValue.value = $event)
              }, unref(standardAsyncProps), {
                label: "Content Channel Item",
                displayStyle: _ctx.displayStyle,
                items: unref(actualItemItems),
                multiple: false,
                showBlankItem: "",
                enhanceForLongLists: ""
              }), null, 16, ["modelValue", "displayStyle", "items"])]),
              _: 1
            }, 16, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/contentChannelItemPicker.obs";

    })
  };
}));
//# sourceMappingURL=contentChannelItemPicker.obs.js.map
