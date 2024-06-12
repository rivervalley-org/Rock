System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Utility/http', './rockFormField.obs', './codeEditor.obs', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, watch, openBlock, createBlock, unref, mergeProps, withCtx, createElementBlock, Fragment, renderList, toDisplayString, withModifiers, createCommentVNode, createVNode, isRef, standardRockFormFieldProps, useVModelPassthrough, useStandardRockFormFieldProps, useHttp, RockFormField, CodeEditor, toGuidOrNull;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      withModifiers = module.withModifiers;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      isRef = module.isRef;
    }, function (module) {
      standardRockFormFieldProps = module.standardRockFormFieldProps;
      useVModelPassthrough = module.useVModelPassthrough;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
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
        key: 0,
        class: "js-template-option-panel"
      };
      var _hoisted_2 = {
        class: "row js-template-row"
      };
      var _hoisted_3 = {
        class: "col-md-2 col-sm-4 template-picker-item"
      };
      var _hoisted_4 = {
        class: "radio"
      };
      var _hoisted_5 = ["name", "value", "onChange", "checked"];
      var _hoisted_6 = {
        class: "label-text"
      };
      var _hoisted_7 = ["src"];
      var _hoisted_8 = {
        class: "actions clearfix"
      };
      var _hoisted_9 = {
        key: 1,
        id: "ctl00_main_ctl35_ctl01_ctl06_mdAttribute_edtAttribute_defaultValue_148_efea8d0ec39c41e9932b490870b7000d_defaultValue_148_efea8d0ec39c41e9932b490870b7000dpnlCustom",
        class: "js-template-custom-panel"
      };
      var _hoisted_10 = {
        class: "radio-inline"
      };
      var _hoisted_11 = ["name"];
      var _hoisted_12 = createElementVNode("span", {
        class: "label-text"
      }, [createElementVNode("b", null, "Custom")], -1);
      var _hoisted_13 = {
        class: "actions clearfix"
      };
      var script = exports('default', defineComponent({
        name: 'blockTemplatePicker',
        props: _objectSpread2(_objectSpread2({}, standardRockFormFieldProps), {}, {
          modelValue: {
            type: String,
            required: true
          },
          templateKey: {
            type: String,
            default: null
          },
          templateBlockValueGuid: {
            type: String,
            default: null
          }
        }),
        emits: ["update:modelValue", "update:templateKey"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var internalkey = useVModelPassthrough(props, "templateKey", emit);
          var formFieldProps = useStandardRockFormFieldProps(props);
          var loadedItems = ref([]);
          var http = useHttp();
          var view = ref(props.templateBlockValueGuid ? "SELECT" : "CUSTOM");
          function loadOptions() {
            return _loadOptions.apply(this, arguments);
          }
          function _loadOptions() {
            _loadOptions = _asyncToGenerator(function* () {
              var options = {
                templateBlockValueGuid: toGuidOrNull(props.templateBlockValueGuid)
              };
              var result = yield http.post("/api/v2/Controls/BlockTemplatePickerGetBlockTemplates", undefined, options);
              if (result.isSuccess && result.data) {
                loadedItems.value = result.data;
                if (result.data.length > 0) {
                  var item = result.data[0];
                  if (view.value == "SELECT") {
                    var _item$template2, _item$guid2;
                    internalValue.value = (_item$template2 = item.template) !== null && _item$template2 !== void 0 ? _item$template2 : "";
                    internalkey.value = (_item$guid2 = item.guid) !== null && _item$guid2 !== void 0 ? _item$guid2 : null;
                  }
                }
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                loadedItems.value = [];
              }
            });
            return _loadOptions.apply(this, arguments);
          }
          function radioSelect(item) {
            internalValue.value = item.template;
            internalkey.value = item.guid;
          }
          watch(() => props.templateBlockValueGuid, () => {
            if (props.templateBlockValueGuid) {
              loadOptions();
            } else {
              loadedItems.value = [];
              view.value = "CUSTOM";
            }
          }, {
            immediate: true
          });
          watch(view, () => {
            if (view.value == "CUSTOM") {
              internalkey.value = null;
            } else {
              var _item$template, _item$guid;
              var item = loadedItems.value[0];
              internalValue.value = (_item$template = item.template) !== null && _item$template !== void 0 ? _item$template : "";
              internalkey.value = (_item$guid = item.guid) !== null && _item$guid !== void 0 ? _item$guid : null;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: unref(internalValue),
              name: "block-template-picker"
            }, unref(formFieldProps)), {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                return [view.value == 'SELECT' ? (openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(loadedItems.value, item => {
                  var _item$iconUrl;
                  return openBlock(), createElementBlock("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [createElementVNode("label", null, [createElementVNode("input", {
                    type: "radio",
                    name: uniqueId,
                    class: "js-template-picker",
                    value: item.guid,
                    onChange: $event => radioSelect(item),
                    checked: item.guid == unref(internalkey)
                  }, null, 40, _hoisted_5), createElementVNode("span", _hoisted_6, [createElementVNode("b", null, toDisplayString(item.name), 1)])])]), createElementVNode("img", {
                    src: (_item$iconUrl = item.iconUrl) !== null && _item$iconUrl !== void 0 ? _item$iconUrl : '',
                    style: {
                      "width": "100%"
                    }
                  }, null, 8, _hoisted_7)]);
                }), 256))]), createElementVNode("div", _hoisted_8, [createElementVNode("button", {
                  type: "button",
                  class: "btn btn-xs btn-link",
                  onClick: _cache[0] || (_cache[0] = withModifiers($event => view.value = 'CUSTOM', ["prevent"]))
                }, "Customize")])])) : (openBlock(), createElementBlock("div", _hoisted_9, [createElementVNode("label", _hoisted_10, [createElementVNode("input", {
                  type: "radio",
                  name: uniqueId,
                  checked: ""
                }, null, 8, _hoisted_11), _hoisted_12]), createElementVNode("div", _hoisted_13, [__props.templateBlockValueGuid ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  class: "btn btn-xs btn-link pull-right",
                  onClick: _cache[1] || (_cache[1] = withModifiers($event => view.value = 'SELECT', ["prevent"]))
                }, "Use Standard Templates")) : createCommentVNode("v-if", true)]), createVNode(unref(CodeEditor), {
                  modelValue: unref(internalValue),
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  mode: "lava"
                }, null, 8, ["modelValue"])]))];
              }),
              _: 1
            }, 16, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/blockTemplatePicker.obs";

    })
  };
}));
//# sourceMappingURL=blockTemplatePicker.obs.js.map
