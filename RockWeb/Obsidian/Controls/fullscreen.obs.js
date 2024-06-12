System.register(['vue'], (function (exports) {
  'use strict';
  var defineComponent, ref, onMounted, onBeforeUnmount, watch, openBlock, createElementBlock, normalizeStyle, renderSlot;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      onMounted = module.onMounted;
      onBeforeUnmount = module.onBeforeUnmount;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeStyle = module.normalizeStyle;
      renderSlot = module.renderSlot;
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

      var FullscreenMode = function (FullscreenMode) {
        FullscreenMode[FullscreenMode["None"] = 0] = "None";
        FullscreenMode[FullscreenMode["Page"] = 1] = "Page";
        FullscreenMode[FullscreenMode["Window"] = 2] = "Window";
        return FullscreenMode;
      }(FullscreenMode || {});
      var script = exports('default', defineComponent({
        name: 'fullscreen',
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
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
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
                return new Promise((resolve, reject) => reject(ex));
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
          var fullscreenMode = ref(FullscreenMode.None);
          var containerElement = ref(null);
          var teleportDisabled = ref(true);
          var containerStyle = ref({});
          function enterFullscreen() {
            return _enterFullscreen.apply(this, arguments);
          }
          function _enterFullscreen() {
            _enterFullscreen = _asyncToGenerator(function* () {
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
            return _enterFullscreen.apply(this, arguments);
          }
          function exitFullscreen() {
            return _exitFullscreen.apply(this, arguments);
          }
          function _exitFullscreen() {
            _exitFullscreen = _asyncToGenerator(function* () {
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
                  var _ref3, _document$fullscreenE2;
                  var fullscreenElement = (_ref3 = (_document$fullscreenE2 = document.fullscreenElement) !== null && _document$fullscreenE2 !== void 0 ? _document$fullscreenE2 : document.mozFullScreenElement) !== null && _ref3 !== void 0 ? _ref3 : document.webkitFullscreenElement;
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
            return _exitFullscreen.apply(this, arguments);
          }
          function onFullscreenChange(ev) {
            var _ref2, _document$fullscreenE;
            var fullscreenElement = (_ref2 = (_document$fullscreenE = document.fullscreenElement) !== null && _document$fullscreenE !== void 0 ? _document$fullscreenE : document.mozFullScreenElement) !== null && _ref2 !== void 0 ? _ref2 : document.webkitFullscreenElement;
            if (ev.target === containerElement.value && fullscreenMode.value !== FullscreenMode.None && !fullscreenElement) {
              exitFullscreen();
            }
          }
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
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              ref_key: "containerElement",
              ref: containerElement,
              style: normalizeStyle(containerStyle.value)
            }, [renderSlot(_ctx.$slots, "default")], 4);
          };
        }
      }));

      script.__file = "Framework/Controls/fullscreen.obs";

    })
  };
}));
//# sourceMappingURL=fullscreen.obs.js.map
