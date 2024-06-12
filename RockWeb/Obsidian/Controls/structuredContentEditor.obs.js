System.register(['vue', '@Obsidian/Controls/rockFormField.obs', '@Obsidian/Utility/page', '@Obsidian/Utility/util', '@Obsidian/Utility/component', '@Obsidian/Utility/structuredContentEditor', '@Obsidian/Utility/validationRules', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, onMounted, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, RockFormField, loadJavaScriptAsync, debounce, useStandardRockFormFieldProps, standardRockFormFieldProps, getStructuredContentEditorConfiguration, normalizeRules, toGuidOrNull, areEqual;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      loadJavaScriptAsync = module.loadJavaScriptAsync;
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      getStructuredContentEditorConfiguration = module.getStructuredContentEditorConfiguration;
    }, function (module) {
      normalizeRules = module.normalizeRules;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
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

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = ["id"];
      var EditorJsLogLevel = function (EditorJsLogLevel) {
        EditorJsLogLevel["Verbose"] = "VERBOSE";
        EditorJsLogLevel["Info"] = "INFO";
        EditorJsLogLevel["Warn"] = "WARN";
        EditorJsLogLevel["Error"] = "ERROR";
        return EditorJsLogLevel;
      }(EditorJsLogLevel || {});
      var script = exports('default', defineComponent({
        name: 'structuredContentEditor',
        props: _objectSpread2({
          modelValue: {
            type: String,
            required: true,
            default: "{}"
          },
          toolsGuid: {
            type: String,
            required: false,
            default: null
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var editorJsWindow = window;
          var editorjsPromise = loadJavaScriptAsync("/Scripts/Rock/UI/structuredcontenteditor/editor.js", () => {
            var _editorJsWindow$Rock, _editorJsWindow$Rock$, _editorJsWindow$Rock$2;
            return !!((_editorJsWindow$Rock = editorJsWindow.Rock) !== null && _editorJsWindow$Rock !== void 0 && (_editorJsWindow$Rock$ = _editorJsWindow$Rock.UI) !== null && _editorJsWindow$Rock$ !== void 0 && (_editorJsWindow$Rock$2 = _editorJsWindow$Rock$.StructuredContentEditor) !== null && _editorJsWindow$Rock$2 !== void 0 && _editorJsWindow$Rock$2.EditorJS);
          });
          var editorToolsPromise = loadJavaScriptAsync("/Scripts/Rock/UI/structuredcontenteditor/editor-tools.js", () => {
            var _editorJsWindow$Rock2, _editorJsWindow$Rock3, _editorJsWindow$Rock4;
            return !!((_editorJsWindow$Rock2 = editorJsWindow.Rock) !== null && _editorJsWindow$Rock2 !== void 0 && (_editorJsWindow$Rock3 = _editorJsWindow$Rock2.UI) !== null && _editorJsWindow$Rock3 !== void 0 && (_editorJsWindow$Rock4 = _editorJsWindow$Rock3.StructuredContentEditor) !== null && _editorJsWindow$Rock4 !== void 0 && _editorJsWindow$Rock4.EditorTools);
          });
          var fieldProps = useStandardRockFormFieldProps(props);
          var containerRef = ref(null);
          var containerId = computed(() => {
            var _containerRef$value$i, _containerRef$value;
            return (_containerRef$value$i = (_containerRef$value = containerRef.value) === null || _containerRef$value === void 0 ? void 0 : _containerRef$value.id) !== null && _containerRef$value$i !== void 0 ? _containerRef$value$i : "";
          });
          var internalRules = computed(() => {
            var normalizedRules = normalizeRules(props.rules);
            var isRequired = normalizedRules.includes("required");
            if (isRequired) {
              normalizedRules.push(requiredValidator);
            }
            return normalizedRules;
          });
          function requiredValidator(value, _params) {
            var invalidMessage = "is required";
            if (!value || typeof value !== "string") {
              return invalidMessage;
            }
            if (!value.startsWith("{") || !value.endsWith("}")) {
              return invalidMessage;
            }
            var obj = JSON.parse(value);
            if (!obj || !Array.isArray(obj.blocks) || obj.blocks.length === 0) {
              return invalidMessage;
            }
            return true;
          }
          function saferEval(javaScriptValue) {
            return eval === null || eval === void 0 ? void 0 : (0, eval)("\"use strict\";(".concat(javaScriptValue, ")"));
          }
          function getConfiguration() {
            return _getConfiguration.apply(this, arguments);
          }
          function _getConfiguration() {
            _getConfiguration = _asyncToGenerator(function* () {
              try {
                var result = yield getStructuredContentEditorConfiguration({
                  structuredContentToolsValueGuid: props.toolsGuid
                });
                if (result) {
                  return result;
                } else {
                  console.log("Unknown error while loading structured content editor configuration.");
                }
              } catch (e) {
                console.error(e !== null && e !== void 0 ? e : "Unknown error while loading structured content editor configuration.");
              }
            });
            return _getConfiguration.apply(this, arguments);
          }
          function initialize() {
            return _initialize.apply(this, arguments);
          }
          function _initialize() {
            _initialize = _asyncToGenerator(function* () {
              var _editorJsWindow$Rock5, _editorJsWindow$Rock6, _editorJsWindow$Rock7, _editorJsWindow$Rock8, _editorJsWindow$Rock9, _editorJsWindow$Rock10;
              if (containerRef.value) {
                containerRef.value.innerHTML = "";
              }
              var config = yield getConfiguration();
              var EditorJS = (_editorJsWindow$Rock5 = editorJsWindow.Rock) === null || _editorJsWindow$Rock5 === void 0 ? void 0 : (_editorJsWindow$Rock6 = _editorJsWindow$Rock5.UI) === null || _editorJsWindow$Rock6 === void 0 ? void 0 : (_editorJsWindow$Rock7 = _editorJsWindow$Rock6.StructuredContentEditor) === null || _editorJsWindow$Rock7 === void 0 ? void 0 : _editorJsWindow$Rock7.EditorJS;
              if (!EditorJS) {
                throw "EditorJS is not initialized";
              }
              var EditorDragDrop = (_editorJsWindow$Rock8 = editorJsWindow.Rock) === null || _editorJsWindow$Rock8 === void 0 ? void 0 : (_editorJsWindow$Rock9 = _editorJsWindow$Rock8.UI) === null || _editorJsWindow$Rock9 === void 0 ? void 0 : (_editorJsWindow$Rock10 = _editorJsWindow$Rock9.StructuredContentEditor) === null || _editorJsWindow$Rock10 === void 0 ? void 0 : _editorJsWindow$Rock10.EditorDragDrop;
              if (!EditorDragDrop) {
                throw "EditorDragDrop is not initialized";
              }
              var editor = new EditorJS({
                holder: containerId.value,
                tools: config !== null && config !== void 0 && config.toolsScript ? saferEval(config.toolsScript) : undefined,
                defaultBlock: "paragraph",
                data: JSON.parse(props.modelValue || "{}"),
                logLevel: EditorJsLogLevel.Error,
                onReady: function onReady() {
                  new EditorDragDrop(editor);
                },
                onChange: debounce(() => {
                  editor.save().then(function (savedData) {
                    emit("update:modelValue", JSON.stringify(savedData));
                  }).catch(e => {
                    console.log("Saving failed: ", e);
                  });
                }, 100)
              });
            });
            return _initialize.apply(this, arguments);
          }
          watch(() => props.toolsGuid, function () {
            var _ref2 = _asyncToGenerator(function* (newValue, oldValue) {
              newValue = toGuidOrNull(newValue);
              oldValue = toGuidOrNull(oldValue);
              if (!newValue && !oldValue) {
                return;
              }
              if (!newValue || !oldValue || !areEqual(newValue, oldValue)) {
                yield initialize();
              }
            });
            return function (_x, _x2) {
              return _ref2.apply(this, arguments);
            };
          }());
          onMounted(_asyncToGenerator(function* () {
            yield editorjsPromise;
            yield editorToolsPromise;
            yield initialize();
          }));
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps(unref(fieldProps), {
              rules: unref(internalRules),
              formGroupClasses: "structure-content-editor ".concat(unref(fieldProps).formGroupClasses),
              name: "sceContent",
              modelValue: __props.modelValue
            }), {
              default: withCtx(_ref4 => {
                var uniqueId = _ref4.uniqueId;
                  _ref4.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", {
                  class: "structured-content-container",
                  id: uniqueId,
                  ref_key: "containerRef",
                  ref: containerRef
                }, null, 8, _hoisted_2)])];
              }),
              _: 1
            }, 16, ["rules", "formGroupClasses", "modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/structuredContentEditor.obs";

    })
  };
}));
//# sourceMappingURL=structuredContentEditor.obs.js.map
