System.register(['vue', '@Obsidian/Controls/rockFormField.obs', '@Obsidian/Utility/page', '@Obsidian/Utility/guid', '@Obsidian/Utility/fullscreen', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, onMounted, openBlock, createBlock, unref, withCtx, createElementVNode, createElementBlock, createCommentVNode, normalizeClass, normalizeStyle, setBlockTracking, createTextVNode, toDisplayString, nextTick, RockFormField, loadJavaScriptAsync, newGuid, isFullscreen, exitFullscreen, enterFullscreen, updateRefValue;
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
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      createElementBlock = module.createElementBlock;
      createCommentVNode = module.createCommentVNode;
      normalizeClass = module.normalizeClass;
      normalizeStyle = module.normalizeStyle;
      setBlockTracking = module.setBlockTracking;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      nextTick = module.nextTick;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      loadJavaScriptAsync = module.loadJavaScriptAsync;
    }, function (module) {
      newGuid = module.newGuid;
    }, function (module) {
      isFullscreen = module.isFullscreen;
      exitFullscreen = module.exitFullscreen;
      enterFullscreen = module.enterFullscreen;
    }, function (module) {
      updateRefValue = module.updateRefValue;
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
      var _hoisted_2 = {
        key: 0,
        class: "codeeditor-header margin-b-md clearfix"
      };
      var script = exports('default', defineComponent({
        name: 'codeEditor',
        props: {
          modelValue: {
            type: String,
            default: ""
          },
          theme: {
            type: String,
            default: "rock"
          },
          mode: {
            type: String,
            default: "text"
          },
          noLineWrap: {
            type: Boolean,
            default: false
          },
          editorHeight: {
            type: Number,
            required: false
          },
          mergeFields: {
            type: Array,
            required: false
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var aceScriptPromise = loadJavaScriptAsync("/Scripts/ace/ace.js", () => !!window.ace);
          function getAceTheme(theme) {
            if (!theme || theme.toLowerCase() === "rock") {
              return "github";
            }
            return theme.toLowerCase();
          }
          function getAceMode(mode) {
            if (!mode) {
              return "text";
            }
            return mode.toLowerCase();
          }
          var editor;
          var internalValue = ref(props.modelValue);
          var uniqueId = newGuid();
          var codeEditorClass = computed(() => {
            return "code-editor-container";
          });
          var codeEditorId = computed(() => {
            return "codeeditor-div-".concat(uniqueId);
          });
          var codeEditorStyle = computed(() => {
            return {
              position: "relative",
              height: "".concat(editorHeight.value, "px")
            };
          });
          var hasMergeFields = computed(() => {
            return !!props.mergeFields && props.mergeFields.length > 0;
          });
          var editorHeight = computed(() => {
            var _props$editorHeight;
            var height = (_props$editorHeight = props.editorHeight) !== null && _props$editorHeight !== void 0 ? _props$editorHeight : 200;
            if (hasMergeFields.value) {
              height -= 40;
            }
            return height;
          });
          watch(() => [props.theme, props.mode, props.noLineWrap, props.disabled], () => {
            if (editor) {
              editor.setTheme("ace/theme/".concat(getAceTheme(props.theme)));
              editor.getSession().setMode("ace/mode/".concat(getAceMode(props.mode)));
              editor.getSession().setUseWrapMode(!props.noLineWrap);
              editor.setReadOnly(props.disabled);
            }
          });
          watch(() => props.modelValue, () => {
            updateRefValue(internalValue, props.modelValue);
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          onMounted(_asyncToGenerator(function* () {
            yield aceScriptPromise;
            editor = window.ace.edit(codeEditorId.value);
            editor.setTheme("ace/theme/".concat(getAceTheme(props.theme)));
            editor.getSession().setMode("ace/mode/".concat(getAceMode(props.mode)));
            editor.getSession().setUseWrapMode(!props.noLineWrap);
            editor.setShowPrintMargin(false);
            editor.setReadOnly(props.disabled);
            editor.$blockScrolling = Infinity;
            editor.commands.addCommand({
              name: "Toggle Fullscreen",
              bindKey: "F11",
              exec: function () {
                var _exec = _asyncToGenerator(function* () {
                  if (isFullscreen()) {
                    exitFullscreen();
                  } else {
                    enterFullscreen(editor.container, () => editor.resize());
                  }
                  editor.resize();
                });
                function exec() {
                  return _exec.apply(this, arguments);
                }
                return exec;
              }()
            });
            editor.getSession().on("change", () => {
              updateRefValue(internalValue, editor.getValue());
            });
            nextTick(() => {
              editor.resize();
            });
          }));
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: internalValue.value,
              formGroupClasses: "rock-code-editor",
              name: "codeeditor"
            }, {
              default: withCtx(_ref3 => {
                _ref3.uniqueId;
                  _ref3.field;
                return [createElementVNode("div", _hoisted_1, [unref(hasMergeFields) ? (openBlock(), createElementBlock("div", _hoisted_2)) : createCommentVNode("v-if", true), createElementVNode("div", {
                  class: normalizeClass(unref(codeEditorClass)),
                  style: normalizeStyle(unref(codeEditorStyle))
                }, [_cache[0] || (setBlockTracking(-1), _cache[0] = createElementVNode("pre", {
                  id: unref(codeEditorId),
                  class: "position-absolute inset-0 m-0 ace_editor"
                }, [createTextVNode(toDisplayString(internalValue.value), 1)], 8, ["id"]), setBlockTracking(1), _cache[0])], 6)])];
              }),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/codeEditor.obs";

    })
  };
}));
//# sourceMappingURL=codeEditor.obs.js.map
