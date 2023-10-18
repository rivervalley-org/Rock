System.register(['vue'], (function (exports) {
  'use strict';
  var defineComponent, ref, onMounted, onBeforeUnmount, watch;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      onMounted = module.onMounted;
      onBeforeUnmount = module.onBeforeUnmount;
      watch = module.watch;
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

      function requestWindowFullscreen(_x) {
        return _requestWindowFullscreen.apply(this, arguments);
      }
      function _requestWindowFullscreen() {
        _requestWindowFullscreen = _asyncToGenerator(function* (element) {
          try {
            if (element.requestFullscreen) {
              yield element.requestFullscreen();
            } else if (element.mozRequestFullscreen) {
              yield element.mozRequestFullscreen();
            } else if (element.webkitRequestFullscreen) {
              yield element.webkitRequestFullscreen();
            } else {
              return false;
            }
            return true;
          } catch (ex) {
            return new Promise((_, reject) => reject(ex));
          }
        });
        return _requestWindowFullscreen.apply(this, arguments);
      }
      function exitWindowFullscreen() {
        return _exitWindowFullscreen.apply(this, arguments);
      }
      function _exitWindowFullscreen() {
        _exitWindowFullscreen = _asyncToGenerator(function* () {
          if (document.exitFullscreen) {
            yield document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            yield document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
        });
        return _exitWindowFullscreen.apply(this, arguments);
      }
      var FullscreenMode = function (FullscreenMode) {
        FullscreenMode[FullscreenMode["None"] = 0] = "None";
        FullscreenMode[FullscreenMode["Page"] = 1] = "Page";
        FullscreenMode[FullscreenMode["Window"] = 2] = "Window";
        return FullscreenMode;
      }(FullscreenMode || {});
      var fullscreen = exports('default', defineComponent({
        name: "Fullscreen",
        props: {
          modelValue: {
            type: Boolean,
            default: false
          },
          isPageOnly: {
            type: Boolean,
            default: true
          }
        },
        emits: ["update:modelValue"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var fullscreenMode = ref(FullscreenMode.None);
          var containerElement = ref(null);
          var teleportDisabled = ref(true);
          var containerStyle = ref({});
          var enterFullscreen = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var body = document.getElementsByTagName("body")[0];
              body.classList.add("is-fullscreen");
              if (body.style.overflowY === "") {
                body.style.overflowY = "hidden";
              }
              if (props.isPageOnly) {
                containerStyle.value = {
                  position: "fixed",
                  left: "0",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  "overflow-y": "auto",
                  "z-index": "1060",
                  "background-color": "var(--body-background)"
                };
                teleportDisabled.value = false;
                fullscreenMode.value = FullscreenMode.Page;
              } else {
                if (containerElement.value) {
                  try {
                    containerStyle.value = {
                      "background-color": "var(--body-background)"
                    };
                    yield requestWindowFullscreen(containerElement.value);
                    fullscreenMode.value = FullscreenMode.Window;
                  } catch (ex) {
                    console.warn(ex);
                  }
                }
              }
            });
            return function enterFullscreen() {
              return _ref2.apply(this, arguments);
            };
          }();
          var exitFullscreen = function () {
            var _ref3 = _asyncToGenerator(function* () {
              var body = document.getElementsByTagName("body")[0];
              if (body.style.overflowY === "hidden") {
                body.style.overflowY = "";
              }
              body.classList.remove("is-fullscreen");
              if (fullscreenMode.value === FullscreenMode.Page) {
                containerStyle.value = {};
                teleportDisabled.value = true;
                fullscreenMode.value = FullscreenMode.None;
              } else if (fullscreenMode.value === FullscreenMode.Window) {
                try {
                  var _ref4, _document$fullscreenE;
                  var fullscreenElement = (_ref4 = (_document$fullscreenE = document.fullscreenElement) !== null && _document$fullscreenE !== void 0 ? _document$fullscreenE : document.mozFullScreenElement) !== null && _ref4 !== void 0 ? _ref4 : document.webkitFullscreenElement;
                  if (fullscreenElement) {
                    yield exitWindowFullscreen();
                  }
                  containerStyle.value = {};
                  fullscreenMode.value = FullscreenMode.None;
                } catch (ex) {
                  console.warn(ex);
                }
              }
            });
            return function exitFullscreen() {
              return _ref3.apply(this, arguments);
            };
          }();
          var onFullscreenChange = ev => {
            var _ref5, _document$fullscreenE2;
            var fullscreenElement = (_ref5 = (_document$fullscreenE2 = document.fullscreenElement) !== null && _document$fullscreenE2 !== void 0 ? _document$fullscreenE2 : document.mozFullScreenElement) !== null && _ref5 !== void 0 ? _ref5 : document.webkitFullscreenElement;
            if (ev.target === containerElement.value && fullscreenMode.value !== FullscreenMode.None && !fullscreenElement) {
              exitFullscreen();
            }
          };
          onMounted(() => {
            document.addEventListener("fullscreenchange", onFullscreenChange);
            document.addEventListener("mozfullscreenchange", onFullscreenChange);
            document.addEventListener("webkitfullscreenchange", onFullscreenChange);
            if (props.modelValue) {
              enterFullscreen();
            }
          });
          onBeforeUnmount(() => {
            if (fullscreenMode.value !== FullscreenMode.None) {
              try {
                exitFullscreen();
              } catch (ex) {
                console.warn(ex);
              }
            }
            document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
            document.removeEventListener("mozfullscreenchange", onFullscreenChange);
            document.removeEventListener("fullscreenchange", onFullscreenChange);
          });
          watch(() => props.modelValue, () => {
            if (!props.modelValue && fullscreenMode.value === FullscreenMode.None) {
              return;
            } else if (props.modelValue && fullscreenMode.value !== FullscreenMode.None) {
              return;
            }
            if (props.modelValue) {
              enterFullscreen();
            } else {
              exitFullscreen();
            }
          });
          watch(fullscreenMode, () => {
            emit("update:modelValue", fullscreenMode.value !== FullscreenMode.None);
          });
          return {
            containerElement,
            containerStyle,
            teleportDisabled
          };
        },
        template: "\n<div ref=\"containerElement\" :style=\"containerStyle\">\n    <slot />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=fullscreen.js.map
