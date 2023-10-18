System.register(['vue', '@Obsidian/Controls/rockFormField', '@Obsidian/Utility/page', '@Obsidian/Utility/guid', '@Obsidian/Utility/fullscreen', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, onMounted, nextTick, RockFormField, loadJavaScriptAsync, newGuid, isFullscreen, exitFullscreen, enterFullscreen, updateRefValue;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      onMounted = module.onMounted;
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
      var codeEditor = exports('default', defineComponent({
        name: "CodeEditor",
        components: {
          RockFormField
        },
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
        emits: {
          "update:modelValue": _value => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
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
            editor = ace.edit(codeEditorId.value);
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
          return {
            codeEditorClass,
            codeEditorId,
            codeEditorStyle,
            editorHeight,
            internalValue,
            hasMergeFields
          };
        },
        template: "\n<RockFormField\n    :modelValue=\"internalValue\"\n    formGroupClasses=\"rock-code-editor\"\n    name=\"codeeditor\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <div v-if=\"hasMergeFields\" class=\"codeeditor-header margin-b-md clearfix\">\n            </div>\n\n            <div :class=\"codeEditorClass\"\n                :style=\"codeEditorStyle\">\n                <pre v-once\n                    :id=\"codeEditorId\"\n                    class=\"position-absolute inset-0 m-0 ace_editor\">{{ internalValue }}</pre>\n            </div>\n        </div>\n    </template>\n</RockFormField>\n"
      }));

    })
  };
}));
//# sourceMappingURL=codeEditor.js.map
