System.register(['vue', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, nextTick, openBlock, createElementBlock, Fragment, renderSlot, normalizeClass, normalizeStyle, unref, newGuid;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      nextTick = module.nextTick;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderSlot = module.renderSlot;
      normalizeClass = module.normalizeClass;
      normalizeStyle = module.normalizeStyle;
      unref = module.unref;
    }, function (module) {
      newGuid = module.newGuid;
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

      var _hoisted_1 = createElementVNode("div", {
        class: "arrow"
      }, null, -1);
      var _hoisted_2 = createElementVNode("h3", {
        class: "popover-title",
        style: {
          "display": "none"
        }
      }, null, -1);
      var _hoisted_3 = {
        class: "popover-content"
      };
      var script = exports('default', defineComponent({
        name: 'popOver',
        props: {
          isVisible: {
            type: Boolean,
            default: false
          },
          placement: {
            type: String,
            default: "right"
          },
          trigger: {
            type: String,
            default: "hover"
          },
          anchorY: {
            type: Number,
            required: false
          },
          anchorX: {
            type: Number,
            required: false
          }
        },
        emits: ["update:isVisible"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var activatorEl = ref(null);
          var popOverEl = ref(null);
          var resizeObserver;
          var isPopOverVisible = ref(false);
          var isHovering = ref(false);
          var popOverStyle = ref({
            display: "none"
          });
          var popOverId = "popover-" + newGuid();
          var computedPopOverStyle = computed(() => {
            var styles = _objectSpread2(_objectSpread2({}, popOverStyle.value), getPositionStyles());
            return styles;
          });
          watch(isHovering, isHover => {
            if (props.trigger !== "hover") {
              return;
            }
            if (isHover) {
              setTimeout(() => {
                if (isHovering.value) {
                  isPopOverVisible.value = true;
                }
              }, 50);
            } else {
              setTimeout(() => {
                if (!isHovering.value) {
                  isPopOverVisible.value = false;
                }
              }, 100);
            }
          });
          watch(isPopOverVisible, isVisible => {
            if (isVisible) {
              showPopOver();
              if (window.ResizeObserver) {
                resizeObserver = new ResizeObserver(() => {
                  popOverStyle.value = _objectSpread2({}, popOverStyle.value);
                });
                if (popOverEl.value) {
                  resizeObserver.observe(popOverEl.value);
                }
                if (activatorEl.value) {
                  resizeObserver.observe(activatorEl.value);
                }
              }
            } else {
              var _resizeObserver;
              (_resizeObserver = resizeObserver) === null || _resizeObserver === void 0 ? void 0 : _resizeObserver.disconnect();
              resizeObserver = undefined;
              hidePopOver();
            }
            emit("update:isVisible", isVisible);
          });
          watch(() => props.isVisible, isVisible => {
            isPopOverVisible.value = isVisible;
          }, {
            immediate: true
          });
          watch(activatorEl, manageListeners);
          watch(popOverEl, manageListeners);
          function manageListeners(newEl, oldEl) {
            if (oldEl) {
              oldEl.removeEventListener("mouseenter", onMouseEnter);
              oldEl.removeEventListener("mouseleave", onMouseLeave);
            }
            if (newEl) {
              newEl.addEventListener("mouseenter", onMouseEnter);
              newEl.addEventListener("mouseleave", onMouseLeave);
            }
          }
          function onMouseEnter() {
            isHovering.value = true;
          }
          function onMouseLeave() {
            isHovering.value = false;
          }
          function showPopOver() {
            return _showPopOver.apply(this, arguments);
          }
          function _showPopOver() {
            _showPopOver = _asyncToGenerator(function* () {
              var _activatorEl$value;
              (_activatorEl$value = activatorEl.value) === null || _activatorEl$value === void 0 ? void 0 : _activatorEl$value.setAttribute("aria-describedby", popOverId);
              popOverStyle.value = {
                display: "block",
                opacity: "0"
              };
              yield nextTick();
              popOverStyle.value = _objectSpread2({
                display: "block",
                opacity: "1"
              }, getPositionStyles());
            });
            return _showPopOver.apply(this, arguments);
          }
          function hidePopOver() {
            return _hidePopOver.apply(this, arguments);
          }
          function _hidePopOver() {
            _hidePopOver = _asyncToGenerator(function* () {
              popOverStyle.value = _objectSpread2(_objectSpread2({}, popOverStyle.value), {}, {
                opacity: "0"
              });
              yield nextTick();
              setTimeout(() => {
                if (!isHovering.value) {
                  var _activatorEl$value2;
                  (_activatorEl$value2 = activatorEl.value) === null || _activatorEl$value2 === void 0 ? void 0 : _activatorEl$value2.removeAttribute("aria-describedby");
                  popOverStyle.value = {
                    display: "none"
                  };
                }
              }, 150);
            });
            return _hidePopOver.apply(this, arguments);
          }
          function getPositionStyles() {
            var boxA = getElementBox(activatorEl.value);
            var boxP = getElementBox(popOverEl.value);
            if (props.placement == "top") {
              if (props.anchorX !== undefined && props.anchorY !== undefined) {
                return {
                  left: "".concat(props.anchorX - boxP.width / 2, "px"),
                  top: "".concat(props.anchorY - boxP.height, "px")
                };
              }
              return {
                left: boxA.left + boxA.width / 2 - boxP.width / 2 + "px",
                top: boxA.top - boxP.height + "px"
              };
            }
            if (props.placement == "bottom") {
              if (props.anchorX !== undefined && props.anchorY !== undefined) {
                return {
                  left: "".concat(props.anchorX - boxP.width / 2, "px"),
                  top: "".concat(props.anchorY, "px")
                };
              }
              return {
                left: boxA.left + boxA.width / 2 - boxP.width / 2 + "px",
                top: boxA.top + boxA.height + "px"
              };
            }
            if (props.placement == "left") {
              if (props.anchorX !== undefined && props.anchorY !== undefined) {
                return {
                  left: "".concat(props.anchorX - boxP.width, "px"),
                  top: "".concat(props.anchorY - boxP.height / 2, "px")
                };
              }
              return {
                left: boxA.left - boxP.width + "px",
                top: boxA.top + boxA.height / 2 - boxP.height / 2 + "px"
              };
            }
            if (props.anchorX !== undefined && props.anchorY !== undefined) {
              return {
                left: "".concat(props.anchorX, "px"),
                top: "".concat(props.anchorY - boxP.height / 2, "px")
              };
            }
            return {
              left: boxA.left + boxA.width + "px",
              top: boxA.top + boxA.height / 2 - boxP.height / 2 + "px"
            };
          }
          function getElementBox(el) {
            if (!el) {
              return {
                left: 0,
                top: 0,
                height: 0,
                width: 0
              };
            }
            return {
              left: el.offsetLeft,
              top: el.offsetTop,
              height: el.offsetHeight,
              width: el.offsetWidth
            };
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [renderSlot(_ctx.$slots, "activator", {
              ref_key: "activatorEl",
              ref: activatorEl
            }), createElementVNode("div", {
              class: normalizeClass(['popover fade', __props.placement]),
              role: "tooltip",
              ref_key: "popOverEl",
              ref: popOverEl,
              id: popOverId,
              style: normalizeStyle(unref(computedPopOverStyle))
            }, [_hoisted_1, _hoisted_2, createElementVNode("div", _hoisted_3, [renderSlot(_ctx.$slots, "default")])], 6)], 64);
          };
        }
      }));

      script.__file = "Framework/Controls/popOver.obs";

    })
  };
}));
//# sourceMappingURL=popOver.obs.js.map
