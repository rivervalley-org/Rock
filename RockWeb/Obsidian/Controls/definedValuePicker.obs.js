System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/http', './baseAsyncPicker.obs', './rockLabel.obs', './rockForm.obs', './attributeValuesContainer.obs', './textBox.obs', './rockButton.obs', './loading.obs', './notificationBox.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createTextVNode, createElementVNode, defineComponent, ref, watch, computed, openBlock, createElementBlock, Fragment, createVNode, unref, withCtx, toDisplayString, createBlock, createCommentVNode, mergeProps, isRef, createSlots, useSecurityGrantToken, useStandardAsyncPickerProps, useVModelPassthrough, standardAsyncPickerProps, useHttp, BaseAsyncPicker, RockLabel, RockForm, AttributeValuesContainer, TextBox, RockButton, Loading, NotificationBox, BtnType, BtnSize, toGuidOrNull, emptyGuid;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      toDisplayString = module.toDisplayString;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      mergeProps = module.mergeProps;
      isRef = module.isRef;
      createSlots = module.createSlots;
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }, function (module) {
      useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
      useVModelPassthrough = module.useVModelPassthrough;
      standardAsyncPickerProps = module.standardAsyncPickerProps;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      BaseAsyncPicker = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
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

      var _hoisted_1 = createTextVNode("Add");
      var _hoisted_2 = createTextVNode("Cancel");
      var _hoisted_3 = createTextVNode("Cancel");
      var _hoisted_4 = {
        class: "input-group-btn"
      };
      var _hoisted_5 = createElementVNode("i", {
        class: "fa fa-plus",
        "aria-hidden": ""
      }, null, -1);
      var _hoisted_6 = createTextVNode("Add Item");
      var script = exports('default', defineComponent({
        name: 'definedValuePicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          definedTypeGuid: {
            type: String,
            required: false
          },
          allowAdd: {
            type: Boolean,
            default: false
          }
        }, standardAsyncPickerProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var http = useHttp();
          var standardProps = useStandardAsyncPickerProps(props);
          var securityGrantToken = useSecurityGrantToken();
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var itemsSource = ref(null);
          function loadItems() {
            return _loadItems.apply(this, arguments);
          }
          function _loadItems() {
            _loadItems = _asyncToGenerator(function* () {
              var _toGuidOrNull;
              var options = {
                definedTypeGuid: (_toGuidOrNull = toGuidOrNull(props.definedTypeGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                securityGrantToken: securityGrantToken.value,
                includeInactive: false
              };
              var url = "/api/v2/Controls/DefinedValuePickerGetDefinedValues";
              var result = yield http.post(url, undefined, options);
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                return [];
              }
            });
            return _loadItems.apply(this, arguments);
          }
          function fetchValues() {
            itemsSource.value = () => loadItems();
          }
          watch(() => props.definedTypeGuid, fetchValues);
          fetchValues();
          var isShowingAddForm = ref(false);
          var isLoading = ref(false);
          var fetchError = ref(false);
          var saveError = ref(false);
          var isAddAllowed = computed(() => {
            return props.allowAdd && !!toGuidOrNull(props.definedTypeGuid);
          });
          function showAddForm() {
            return _showAddForm.apply(this, arguments);
          }
          function _showAddForm() {
            _showAddForm = _asyncToGenerator(function* () {
              if (!isAddAllowed.value) return;
              isShowingAddForm.value = true;
              if (attributes.value == null) {
                var _toGuidOrNull2;
                isLoading.value = true;
                fetchError.value = false;
                saveError.value = false;
                var options = {
                  definedTypeGuid: (_toGuidOrNull2 = toGuidOrNull(props.definedTypeGuid)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : emptyGuid,
                  securityGrantToken: securityGrantToken.value
                };
                var url = "/api/v2/Controls/DefinedValuePickerGetAttributes";
                var result = yield http.post(url, undefined, options);
                if (result.isSuccess && result.data) {
                  attributes.value = result.data.reduce(function (acc, val) {
                    acc[val.key] = val;
                    return acc;
                  }, {});
                } else {
                  attributes.value = null;
                  fetchError.value = "Unable to fetch attribute data.";
                }
                isLoading.value = false;
              }
            });
            return _showAddForm.apply(this, arguments);
          }
          function hideAddForm() {
            isShowingAddForm.value = false;
            fetchError.value = false;
            saveError.value = false;
          }
          function saveNewValue() {
            return _saveNewValue.apply(this, arguments);
          }
          function _saveNewValue() {
            _saveNewValue = _asyncToGenerator(function* () {
              var _toGuidOrNull3;
              isLoading.value = true;
              saveError.value = false;
              var options = {
                definedTypeGuid: (_toGuidOrNull3 = toGuidOrNull(props.definedTypeGuid)) !== null && _toGuidOrNull3 !== void 0 ? _toGuidOrNull3 : emptyGuid,
                securityGrantToken: securityGrantToken.value,
                value: newValue.value,
                description: newDescription.value,
                attributeValues: attributeValues.value
              };
              var url = "/api/v2/Controls/DefinedValuePickerSaveNewValue";
              var result = yield http.post(url, undefined, options);
              if (result.isSuccess && result.data) {
                fetchValues();
                if (props.multiple) {
                  if (Array.isArray(internalValue.value)) {
                    internalValue.value.push(result.data);
                  } else {
                    internalValue.value = [result.data];
                  }
                } else {
                  internalValue.value = result.data;
                }
                hideAddForm();
                newValue.value = "";
                newDescription.value = "";
                attributeValues.value = {};
              } else {
                saveError.value = "Unable to save new Defined Value.";
              }
              isLoading.value = false;
            });
            return _saveNewValue.apply(this, arguments);
          }
          var attributes = ref(null);
          var attributeValues = ref({});
          var newValue = ref("");
          var newDescription = ref("");
          return (_ctx, _cache) => {
            return __props.allowAdd && isShowingAddForm.value ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [createVNode(unref(RockLabel), {
              help: _ctx.help
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(_ctx.label), 1)]),
              _: 1
            }, 8, ["help"]), createVNode(unref(Loading), {
              isLoading: isLoading.value,
              class: "well"
            }, {
              default: withCtx(() => [fetchError.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: "danger"
              }, {
                default: withCtx(() => [createTextVNode("Error: " + toDisplayString(fetchError.value), 1)]),
                _: 1
              })) : saveError.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 1,
                alertType: "danger"
              }, {
                default: withCtx(() => [createTextVNode("Error: " + toDisplayString(saveError.value), 1)]),
                _: 1
              })) : (openBlock(), createBlock(unref(RockForm), {
                key: 2,
                onSubmit: saveNewValue
              }, {
                default: withCtx(() => [createVNode(unref(TextBox), {
                  label: "Value",
                  modelValue: newValue.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => newValue.value = $event),
                  rules: "required"
                }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                  label: "Description",
                  modelValue: newDescription.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => newDescription.value = $event),
                  textMode: "multiline"
                }, null, 8, ["modelValue"]), attributes.value != null ? (openBlock(), createBlock(unref(AttributeValuesContainer), {
                  key: 0,
                  modelValue: attributeValues.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => attributeValues.value = $event),
                  attributes: attributes.value,
                  isEditMode: "",
                  showCategoryLabel: false
                }, null, 8, ["modelValue", "attributes"])) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
                  type: "submit",
                  btnType: unref(BtnType).Primary,
                  btnSize: unref(BtnSize).ExtraSmall
                }, {
                  default: withCtx(() => [_hoisted_1]),
                  _: 1
                }, 8, ["btnType", "btnSize"]), createVNode(unref(RockButton), {
                  btnType: unref(BtnType).Link,
                  btnSize: unref(BtnSize).ExtraSmall,
                  onClick: hideAddForm
                }, {
                  default: withCtx(() => [_hoisted_2]),
                  _: 1
                }, 8, ["btnType", "btnSize"])]),
                _: 1
              })), fetchError.value || saveError.value ? (openBlock(), createBlock(unref(RockButton), {
                key: 3,
                btnType: unref(BtnType).Link,
                btnSize: unref(BtnSize).ExtraSmall,
                onClick: hideAddForm
              }, {
                default: withCtx(() => [_hoisted_3]),
                _: 1
              }, 8, ["btnType", "btnSize"])) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["isLoading"])], 64)) : (openBlock(), createBlock(unref(BaseAsyncPicker), mergeProps({
              key: 1,
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(internalValue) ? internalValue.value = $event : null)
            }, unref(standardProps), {
              items: itemsSource.value,
              disabled: __props.disabled
            }), createSlots({
              _: 2
            }, [__props.allowAdd ? {
              name: "inputGroupAppend",
              fn: withCtx(() => [createElementVNode("span", _hoisted_4, [createVNode(unref(RockButton), {
                onClick: showAddForm,
                disabled: !unref(isAddAllowed),
                btnType: unref(BtnType).Default,
                "aria-label": "Add Item"
              }, {
                default: withCtx(() => [_hoisted_5]),
                _: 1
              }, 8, ["disabled", "btnType"])])])
            } : undefined, __props.allowAdd ? {
              name: "append",
              fn: withCtx(_ref2 => {
                var isInputGroupSupported = _ref2.isInputGroupSupported;
                return [!isInputGroupSupported ? (openBlock(), createBlock(unref(RockButton), {
                  key: 0,
                  onClick: showAddForm,
                  disabled: !unref(isAddAllowed),
                  btnType: unref(BtnType).Link
                }, {
                  default: withCtx(() => [_hoisted_6]),
                  _: 1
                }, 8, ["disabled", "btnType"])) : createCommentVNode("v-if", true)];
              })
            } : undefined]), 1040, ["modelValue", "items", "disabled"]));
          };
        }
      }));

      script.__file = "Framework/Controls/definedValuePicker.obs";

    })
  };
}));
//# sourceMappingURL=definedValuePicker.obs.js.map
