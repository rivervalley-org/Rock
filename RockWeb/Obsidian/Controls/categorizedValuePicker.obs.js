System.register(['vue', './categorizedValuePickerDropDownLevel.obs', './rockFormField', '@Obsidian/Utility/http', '@Obsidian/Utility/component', './notificationBox.obs', '@Obsidian/Enums/Controls/alertType', './rockButton', './dropDownList'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, watch, openBlock, createBlock, unref, mergeProps, withCtx, createVNode, isRef, CategorizedValuePickerDropDownLevel, RockFormField, useHttp, useVModelPassthrough, useStandardRockFormFieldProps, standardRockFormFieldProps, NotificationBox, AlertType, RockButton, DropDownList;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
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
      CategorizedValuePickerDropDownLevel = module["default"];
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      AlertType = module.AlertType;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      DropDownList = module["default"];
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

      var _hoisted_1 = createTextVNode(" An error occurred while fetching category tree. ");
      var _hoisted_2 = createTextVNode("Retry");
      var script = exports('default', defineComponent({
        name: 'categorizedValuePicker',
        props: _objectSpread2({
          modelValue: {
            type: String,
            default: ""
          },
          definedTypeGuid: {
            type: String,
            required: true
          },
          onlyIncludeGuids: {
            type: Array,
            default: null
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var http = useHttp();
          var loadedItems = ref(null);
          var error = ref(false);
          var definedTypeName = ref("");
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var formFieldProps = useStandardRockFormFieldProps(props);
          function loadTree() {
            return _loadTree.apply(this, arguments);
          }
          function _loadTree() {
            _loadTree = _asyncToGenerator(function* () {
              var _result$errorMessage;
              error.value = false;
              var options = {
                definedTypeGuid: props.definedTypeGuid,
                onlyIncludeGuids: props.onlyIncludeGuids
              };
              var result = yield http.post("/api/v2/Controls/CategorizedValuePickerGetTree", undefined, options);
              if (result.isSuccess && result.data) {
                var _result$data$tree, _result$data$definedT;
                loadedItems.value = (_result$data$tree = result.data.tree) !== null && _result$data$tree !== void 0 ? _result$data$tree : null;
                definedTypeName.value = (_result$data$definedT = result.data.definedType) !== null && _result$data$definedT !== void 0 ? _result$data$definedT : "";
                return;
              }
              console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
              error.value = true;
              loadedItems.value = null;
              definedTypeName.value = "";
            });
            return _loadTree.apply(this, arguments);
          }
          watch(() => props.definedTypeGuid, loadTree, {
            immediate: true
          });
          return (_ctx, _cache) => {
            var _unref$value, _unref2;
            return error.value ? (openBlock(), createBlock(unref(RockFormField), mergeProps({
              key: 0
            }, unref(formFieldProps), {
              modelValue: unref(internalValue),
              name: "cat-val-picker"
            }), {
              default: withCtx(() => [createVNode(unref(NotificationBox), {
                alertType: unref(AlertType).Danger
              }, {
                default: withCtx(() => [_hoisted_1, createVNode(unref(RockButton), {
                  onClick: loadTree
                }, {
                  default: withCtx(() => [_hoisted_2]),
                  _: 1
                })]),
                _: 1
              }, 8, ["alertType"])]),
              _: 1
            }, 16, ["modelValue"])) : loadedItems.value ? (openBlock(), createBlock(unref(RockFormField), mergeProps({
              key: 1
            }, unref(formFieldProps), {
              modelValue: unref(internalValue),
              name: "cat-val-picker"
            }), {
              default: withCtx(() => [createVNode(unref(CategorizedValuePickerDropDownLevel), mergeProps(unref(formFieldProps), {
                root: loadedItems.value,
                modelValue: unref(internalValue),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                definedTypeName: definedTypeName.value,
                key: "root-cat-val-picker"
              }), null, 16, ["root", "modelValue", "definedTypeName"])]),
              _: 1
            }, 16, ["modelValue"])) : (openBlock(), createBlock(unref(DropDownList), mergeProps({
              key: 2
            }, unref(formFieldProps), {
              loading: "",
              modelValue: (_unref$value = (_unref2 = unref(internalValue)) === null || _unref2 === void 0 ? void 0 : _unref2.value) !== null && _unref$value !== void 0 ? _unref$value : ''
            }), null, 16, ["modelValue"]));
          };
        }
      }));

      script.__file = "Framework/Controls/categorizedValuePicker.obs";

    })
  };
}));
//# sourceMappingURL=categorizedValuePicker.obs.js.map
