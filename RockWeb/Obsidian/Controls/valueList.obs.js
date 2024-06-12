System.register(['vue', './rockFormField.obs', '@Obsidian/Utility/http', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, createElementBlock, Fragment, renderList, normalizeClass, withDirectives, toDisplayString, vModelSelect, vModelText, withModifiers, RockFormField, useHttp, useSecurityGrantToken, updateRefValue, toGuidOrNull, emptyGuid;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      withDirectives = module.withDirectives;
      toDisplayString = module.toDisplayString;
      vModelSelect = module.vModelSelect;
      vModelText = module.vModelText;
      withModifiers = module.withModifiers;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
    }],
    execute: (function () {

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

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = ["id"];
      var _hoisted_3 = {
        class: "key-value-rows"
      };
      var _hoisted_4 = ["onUpdate:modelValue"];
      var _hoisted_5 = ["value"];
      var _hoisted_6 = ["onUpdate:modelValue", "placeholder"];
      var _hoisted_7 = ["onClick"];
      var _hoisted_8 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_9 = [_hoisted_8];
      var _hoisted_10 = {
        class: "control-actions"
      };
      var _hoisted_11 = ["onClick"];
      var _hoisted_12 = createElementVNode("i", {
        class: "fa fa-plus-circle"
      }, null, -1);
      var _hoisted_13 = [_hoisted_12];
      var script = exports('default', defineComponent({
        name: 'valueList',
        props: {
          modelValue: {
            type: Array,
            required: false
          },
          customValues: {
            type: Array,
            required: false
          },
          valuePrompt: {
            type: String,
            default: "Value"
          },
          fullWidth: {
            type: Boolean,
            default: false
          },
          definedTypeGuid: {
            type: String,
            required: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue;
          var emit = _ref.emit;
          var props = __props;
          var internalValues = ref(((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : []).map(v => ({
            value: v
          })));
          var definedValues = ref([]);
          var securityGrantToken = useSecurityGrantToken();
          var http = useHttp();
          var options = computed(() => {
            var _props$customValues;
            return definedValues.value.length ? definedValues.value : (_props$customValues = props.customValues) !== null && _props$customValues !== void 0 ? _props$customValues : [];
          });
          var hasValues = computed(() => options.value.length > 0);
          var rowClasses = computed(() => {
            var classes = "controls controls-row form-control-group";
            if (props.fullWidth) {
              classes += " controls-row-full-width";
            }
            return classes;
          });
          var valueInputClasses = computed(() => {
            var classes = "key-value-value form-control";
            if (!props.fullWidth) {
              classes += " input-width-lg";
            }
            return classes;
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue2;
            updateRefValue(internalValues, ((_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : []).map(v => ({
              value: v
            })));
          });
          watch(internalValues, () => {
            emit("update:modelValue", internalValues.value.map(v => v.value));
          }, {
            deep: true
          });
          watch(() => props.definedTypeGuid, () => {
            if (props.definedTypeGuid) {
              loadDefinedValues();
            } else {
              definedValues.value = [];
            }
          }, {
            immediate: true
          });
          var onAddClick = () => {
            var defaultValue = "";
            if (hasValues.value) {
              var _options$value$0$valu;
              defaultValue = (_options$value$0$valu = options.value[0].value) !== null && _options$value$0$valu !== void 0 ? _options$value$0$valu : "";
            }
            internalValues.value.push({
              value: defaultValue
            });
          };
          function loadDefinedValues() {
            return _loadDefinedValues.apply(this, arguments);
          }
          function _loadDefinedValues() {
            _loadDefinedValues = _asyncToGenerator(function* () {
              var _toGuidOrNull;
              var options = {
                definedTypeGuid: (_toGuidOrNull = toGuidOrNull(props.definedTypeGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                securityGrantToken: securityGrantToken.value,
                includeInactive: false
              };
              var url = "/api/v2/Controls/DefinedValuePickerGetDefinedValues";
              var result = yield http.post(url, undefined, options);
              if (result.isSuccess && result.data) {
                definedValues.value = result.data;
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
              }
            });
            return _loadDefinedValues.apply(this, arguments);
          }
          var onRemoveClick = index => {
            internalValues.value.splice(index, 1);
          };
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: internalValues.value,
              formGroupClasses: "value-list",
              name: "value-list"
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("span", {
                  id: uniqueId
                }, [createElementVNode("span", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(internalValues.value, (value, valueIndex) => {
                  return openBlock(), createElementBlock("div", {
                    class: normalizeClass(unref(rowClasses))
                  }, [unref(hasValues) ? withDirectives((openBlock(), createElementBlock("select", {
                    key: 0,
                    "onUpdate:modelValue": $event => value.value = $event,
                    class: normalizeClass(unref(valueInputClasses))
                  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), option => {
                    var _option$value;
                    return openBlock(), createElementBlock("option", {
                      value: option.value,
                      key: (_option$value = option.value) !== null && _option$value !== void 0 ? _option$value : 0
                    }, toDisplayString(option.text), 9, _hoisted_5);
                  }), 128))], 10, _hoisted_4)), [[vModelSelect, value.value]]) : withDirectives((openBlock(), createElementBlock("input", {
                    key: 1,
                    "onUpdate:modelValue": $event => value.value = $event,
                    class: normalizeClass(unref(valueInputClasses)),
                    type: "text",
                    placeholder: __props.valuePrompt
                  }, null, 10, _hoisted_6)), [[vModelText, value.value]]), createElementVNode("a", {
                    href: "#",
                    onClick: withModifiers($event => onRemoveClick(valueIndex), ["prevent"]),
                    class: "btn btn-sm btn-danger"
                  }, _hoisted_9, 8, _hoisted_7)], 2);
                }), 256))]), createElementVNode("div", _hoisted_10, [createElementVNode("a", {
                  class: "btn btn-action btn-square btn-xs",
                  href: "#",
                  onClick: withModifiers(onAddClick, ["prevent"])
                }, _hoisted_13, 8, _hoisted_11)])], 8, _hoisted_2)])];
              }),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/valueList.obs";

    })
  };
}));
//# sourceMappingURL=valueList.obs.js.map
