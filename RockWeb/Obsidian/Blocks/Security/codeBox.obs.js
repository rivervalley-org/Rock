System.register(['vue', '@Obsidian/Controls/rockFormField', '@Obsidian/Utility/component', '@Obsidian/ValidationRules'], (function (exports) {
  'use strict';
  var defineComponent, ref, onMounted, openBlock, createElementBlock, normalizeClass, computed, createBlock, unref, isRef, withCtx, createElementVNode, Fragment, renderList, RockFormField, useVModelPassthrough, rulesPropType, normalizeRules;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      computed = module.computed;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      rulesPropType = module.rulesPropType;
      normalizeRules = module.normalizeRules;
    }],
    execute: (function () {

      var _hoisted_1$1 = ["value", "autofocus", "disabled", "id", "maxlength"];
      var script$1 = defineComponent({
        name: 'codeBoxCharacter.partial',
        props: {
          modelValue: {
            type: String,
            required: false,
            default: null
          },
          boxIndex: {
            type: Number,
            required: true
          },
          uniqueId: {
            type: String,
            required: true
          },
          allowedChars: {
            type: Object,
            required: false,
            default: /^[a-zA-Z0-9]$/
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          maxLength: {
            type: Number,
            required: true
          }
        },
        emits: ["update:modelValue", "pasteValues", "clear", "move", "complete", "ready"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var inputElement = ref();
          function onPaste(_event) {
            var originalValue = inputElement.value.value;
            inputElement.value.value = "";
            onNextInput(event => {
              var pastedValue = inputElement.value.value;
              inputElement.value.value = originalValue;
              if (pastedValue.length === props.maxLength && pastedValue.split("").every(pastedCharacter => props.allowedChars.test(pastedCharacter))) {
                emit("pasteValues", pastedValue);
                emit("complete");
              }
              event.preventDefault();
              return;
            });
          }
          function onKeydown(event) {
            var value = inputElement.value.value;
            var key = {
              backspace: "Backspace",
              delete: "Delete",
              enter: "Enter"
            };
            var keyCode = {
              backspace: 8,
              delete: 46,
              enter: 13
            };
            var isBackspace = event.key === key.backspace || event.keyCode === keyCode.backspace || event.charCode === keyCode.backspace;
            var isDelete = event.key === key.delete || event.keyCode === keyCode.delete || event.charCode === keyCode.delete;
            var isEnter = event.key === key.enter || event.keyCode === keyCode.enter || event.charCode === keyCode.enter;
            if ((isBackspace || isDelete) && value.length >= 1) {
              onNextInput(() => {
                emit("update:modelValue", inputElement.value.value);
              });
              return;
            }
            if (isBackspace) {
              if (props.boxIndex > 0) {
                emit("clear", props.boxIndex - 1);
                emit("move", props.boxIndex - 1);
              }
              event.preventDefault();
              return;
            }
            if (isEnter) {
              return;
            }
            if (value.length >= 1 && !event.ctrlKey) {
              event.preventDefault();
              return;
            }
            if (!event.ctrlKey) {
              onNextInput(() => {
                emit("update:modelValue", inputElement.value.value);
                if (props.boxIndex < props.maxLength - 1) {
                  emit("move", props.boxIndex + 1);
                } else if (props.boxIndex === props.maxLength - 1) {
                  emit("complete");
                }
              });
            }
          }
          function onInputChanged(event) {
            var pastedValue = event.target.value;
            if (pastedValue.length === props.maxLength && pastedValue.split("").every(pastedCharacter => props.allowedChars.test(pastedCharacter))) {
              emit("pasteValues", pastedValue);
              emit("complete");
            }
          }
          function onNextInput(inputEventListener) {
            function deregisteringInputEventHandler(event) {
              inputElement.value.removeEventListener("input", deregisteringInputEventHandler);
              inputEventListener(event);
            }
            inputElement.value.removeEventListener("input", onInputChanged);
            inputElement.value.addEventListener("input", deregisteringInputEventHandler);
            inputElement.value.addEventListener("input", onInputChanged);
          }
          onMounted(() => {
            inputElement.value.addEventListener("input", onInputChanged);
            emit("ready", {
              focus() {
                inputElement.value.focus();
              },
              clear() {
                emit("update:modelValue", "");
              },
              boxIndex: props.boxIndex
            });
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("input", {
              value: __props.modelValue,
              autocomplete: "one-time-code",
              autofocus: __props.boxIndex === 0,
              class: normalizeClass("rock-code-box-".concat(__props.boxIndex + 1, " form-control flex-grow-1 flex-sm-grow-0 flex-shrink-1 ").concat(__props.boxIndex > 0 ? 'ml-1' : '')),
              disabled: __props.disabled,
              id: "".concat(__props.uniqueId, "-").concat(__props.boxIndex + 1),
              maxlength: __props.maxLength,
              ref_key: "inputElement",
              ref: inputElement,
              type: "text",
              onPaste: onPaste,
              onKeydown: onKeydown
            }, null, 42, _hoisted_1$1);
          };
        }
      });

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z$1 = ".rock-code-box input[data-v-3b81e6fe]{font-size:24px;height:64px;text-align:center;width:47px}";
      styleInject(css_248z$1);

      script$1.__scopeId = "data-v-3b81e6fe";
      script$1.__file = "src/Security/codeBoxCharacter.partial.obs";

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "d-flex"
      };
      var script = exports('default', defineComponent({
        name: 'codeBox',
        props: {
          modelValue: {
            type: String,
            required: false,
            default: null
          },
          allowedChars: {
            type: Object,
            required: false,
            default: /^[a-zA-Z0-9]$/
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          maxLength: {
            type: Number,
            required: true
          },
          modelModifiers: {
            type: Object,
            required: false,
            default: null
          },
          rules: rulesPropType
        },
        emits: ["update:modelValue", "complete"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var codeBoxCharacterControllers = {};
          var internalModelValue = useVModelPassthrough(props, "modelValue", emit);
          var characters = ref(getMaxLengthCharacters(props.modelValue.split("")));
          var internalRules = computed(() => normalizeRules(props.rules));
          var isRequired = computed(() => internalRules.value.includes("required"));
          function onCodeBoxCharacterUpdated(value, boxIndex) {
            var _props$modelModifiers;
            if ((_props$modelModifiers = props.modelModifiers) !== null && _props$modelModifiers !== void 0 && _props$modelModifiers.capitalize) {
              var _value;
              value = (_value = value) === null || _value === void 0 ? void 0 : _value.toLocaleUpperCase();
            }
            characters.value[boxIndex] = value;
            internalModelValue.value = characters.value.join("");
          }
          function onClear(boxIndex) {
            codeBoxCharacterControllers[boxIndex].clear();
          }
          function onMove(boxIndex) {
            codeBoxCharacterControllers[boxIndex].focus();
          }
          function onPasteValues(value) {
            var _props$modelModifiers2;
            if ((_props$modelModifiers2 = props.modelModifiers) !== null && _props$modelModifiers2 !== void 0 && _props$modelModifiers2.capitalize) {
              var _value2;
              value = (_value2 = value) === null || _value2 === void 0 ? void 0 : _value2.toLocaleUpperCase();
            }
            characters.value = getMaxLengthCharacters(value.split(""));
          }
          function onComplete() {
            var code = characters.value.join("");
            internalModelValue.value = code;
            emit("complete", code);
          }
          function onReady(event) {
            codeBoxCharacterControllers[event.boxIndex] = event;
          }
          function getMaxLengthCharacters(source) {
            if (source.length > props.maxLength) {
              return source.slice(0, props.maxLength);
            } else if (source.length < props.maxLength) {
              var result = [...source];
              var charactersToInsert = props.maxLength - result.length;
              for (var i = 0; i < charactersToInsert; i++) {
                result.push("");
              }
              return result;
            } else {
              return [...source];
            }
          }
          onMounted(() => {
            var _codeBoxCharacterCont;
            (_codeBoxCharacterCont = codeBoxCharacterControllers[0]) === null || _codeBoxCharacterCont === void 0 ? void 0 : _codeBoxCharacterCont.focus();
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: unref(internalModelValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalModelValue) ? internalModelValue.value = $event : null),
              name: "codebox",
              rules: __props.rules
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                  _ref2.field;
                return [createElementVNode("div", {
                  class: normalizeClass(['form-group rock-code-box', unref(isRequired) ? 'required' : ''])
                }, [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(characters.value, (character, index) => {
                  return openBlock(), createBlock(unref(script$1), {
                    modelValue: character,
                    allowedChars: __props.allowedChars,
                    boxIndex: index,
                    disabled: __props.disabled,
                    key: index,
                    maxLength: __props.maxLength,
                    modelModifiers: __props.modelModifiers,
                    uniqueId: uniqueId,
                    onClear: onClear,
                    onComplete: onComplete,
                    onMove: onMove,
                    onPasteValues: onPasteValues,
                    onReady: onReady,
                    "onUpdate:modelValue": value => onCodeBoxCharacterUpdated(value, index)
                  }, null, 8, ["modelValue", "allowedChars", "boxIndex", "disabled", "maxLength", "modelModifiers", "uniqueId", "onUpdate:modelValue"]);
                }), 128))])])], 2)];
              }),
              _: 1
            }, 8, ["modelValue", "rules"]);
          };
        }
      }));

      var css_248z = ".rock-code-box input[data-v-388368c2]{font-size:24px;height:64px;text-align:center;width:47px}";
      styleInject(css_248z);

      script.__scopeId = "data-v-388368c2";
      script.__file = "src/Security/codeBox.obs";

    })
  };
}));
//# sourceMappingURL=codeBox.obs.js.map
