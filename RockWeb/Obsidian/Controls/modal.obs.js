System.register(['vue', './rockForm', './rockButton', './rockValidation', '@Obsidian/Utility/page'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, watch, onBeforeUnmount, openBlock, createBlock, Teleport, normalizeClass, withModifiers, createElementBlock, Fragment, toDisplayString, createCommentVNode, renderSlot, createVNode, unref, withCtx, createTextVNode, RockForm, RockButton, RockValidation, trackModalState;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      onBeforeUnmount = module.onBeforeUnmount;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      Teleport = module.Teleport;
      normalizeClass = module.normalizeClass;
      withModifiers = module.withModifiers;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      renderSlot = module.renderSlot;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockValidation = module["default"];
    }, function (module) {
      trackModalState = module.trackModalState;
    }],
    execute: (function () {

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }

      var _hoisted_1 = createElementVNode("div", {
        class: "modal-backdrop",
        style: {
          "z-index": "1050"
        }
      }, null, -1);
      var _hoisted_2 = ["onClick"];
      var _hoisted_3 = {
        class: "modal-header"
      };
      var _hoisted_4 = {
        class: "modal-title"
      };
      var _hoisted_5 = {
        key: 0
      };
      var _hoisted_6 = {
        class: "modal-body"
      };
      var _hoisted_7 = {
        key: 0,
        class: "modal-footer"
      };
      var script = exports('default', defineComponent({
        name: 'modal',
        props: {
          modelValue: {
            type: Boolean,
            required: true
          },
          modalWrapperClasses: {
            type: String,
            default: ""
          },
          title: {
            type: String,
            default: ""
          },
          subtitle: {
            type: String,
            default: ""
          },
          cancelText: {
            type: String,
            default: "Cancel"
          },
          saveText: {
            type: String,
            default: ""
          },
          isFooterHidden: {
            type: Boolean,
            default: false
          },
          isSaveButtonDisabled: {
            type: Boolean,
            default: false
          },
          clickBackdropToClose: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue", "closeModal", "save"],
        setup(__props, _ref) {
          var _document$fullscreenE;
          var emit = _ref.emit;
          var props = __props;
          var internalModalVisible = ref(props.modelValue);
          var container = ref((_document$fullscreenE = document.fullscreenElement) !== null && _document$fullscreenE !== void 0 ? _document$fullscreenE : document.body);
          var validationErrors = ref([]);
          var isShaking = ref(false);
          var modalBodyElement = ref(null);
          var modalBodyPaddingElement = ref(null);
          var legacyOverflowTimer;
          var overflowMutationObserver = MutationObserver ? new MutationObserver(onOverflowMutation) : undefined;
          var overflowResizeObserver = ResizeObserver ? new ResizeObserver(onOverflowResize) : undefined;
          function adjustOverflowPadding() {
            if (modalBodyElement.value && modalBodyPaddingElement.value) {
              if (modalBodyElement.value.scrollHeight !== modalBodyElement.value.clientHeight) {
                var existingPadding = 0;
                try {
                  existingPadding = parseFloat(window.getComputedStyle(modalBodyPaddingElement.value, null).getPropertyValue("padding-bottom"));
                } catch (_unused) {
                  existingPadding = 0;
                }
                var totalPadding = modalBodyElement.value.scrollHeight - modalBodyElement.value.clientHeight;
                if (existingPadding !== totalPadding) {
                  modalBodyPaddingElement.value.style.paddingBottom = "".concat(totalPadding, "px");
                }
              } else if (modalBodyPaddingElement.value.style.paddingBottom !== "") {
                modalBodyPaddingElement.value.style.paddingBottom = "";
              }
            }
          }
          function detectLegacyOverflow() {
            adjustOverflowPadding();
            legacyOverflowTimer = window.setTimeout(detectLegacyOverflow, 250);
          }
          function onClose() {
            emit("closeModal");
            internalModalVisible.value = false;
          }
          function onScrollableClick() {
            if (props.clickBackdropToClose) {
              onClose();
              return;
            }
            if (!isShaking.value) {
              isShaking.value = true;
              setTimeout(() => isShaking.value = false, 1000);
            }
          }
          function onSubmit() {
            emit("save");
          }
          function onVisibleValidationChanged(errors) {
            validationErrors.value = errors;
          }
          function onOverflowMutation(mutations) {
            var _iterator = _createForOfIteratorHelper(mutations),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var mutation = _step.value;
                mutation.addedNodes.forEach(node => {
                  if (node instanceof Element) {
                    overflowResizeObserver === null || overflowResizeObserver === void 0 ? void 0 : overflowResizeObserver.observe(node);
                  }
                });
                mutation.removedNodes.forEach(node => {
                  if (node instanceof Element) {
                    overflowResizeObserver === null || overflowResizeObserver === void 0 ? void 0 : overflowResizeObserver.unobserve(node);
                  }
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          function onOverflowResize() {
            adjustOverflowPadding();
          }
          watch(() => props.modelValue, () => {
            if (props.modelValue) {
              container.value = document.fullscreenElement || document.body;
              validationErrors.value = [];
            }
            internalModalVisible.value = props.modelValue;
          });
          watch(internalModalVisible, () => {
            trackModalState(internalModalVisible.value);
            emit("update:modelValue", internalModalVisible.value);
          });
          watch(modalBodyElement, () => {
            if (overflowMutationObserver && overflowResizeObserver) {
              if (modalBodyElement.value) {
                overflowMutationObserver.observe(modalBodyElement.value, {
                  subtree: true,
                  childList: true
                });
                modalBodyElement.value.querySelectorAll("*").forEach(node => {
                  if (node instanceof Element) {
                    overflowResizeObserver.observe(node);
                  }
                });
              } else {
                overflowMutationObserver === null || overflowMutationObserver === void 0 ? void 0 : overflowMutationObserver.disconnect();
                overflowResizeObserver === null || overflowResizeObserver === void 0 ? void 0 : overflowResizeObserver.disconnect();
              }
            } else {
              if (modalBodyElement.value) {
                legacyOverflowTimer = window.setTimeout(detectLegacyOverflow, 250);
              } else if (legacyOverflowTimer) {
                clearTimeout(legacyOverflowTimer);
                legacyOverflowTimer = undefined;
              }
            }
          });
          onBeforeUnmount(() => {
            if (internalModalVisible.value) {
              trackModalState(false);
            }
            if (overflowMutationObserver && overflowResizeObserver) {
              overflowMutationObserver.disconnect();
              overflowResizeObserver.disconnect();
            }
            if (legacyOverflowTimer) {
              clearTimeout(legacyOverflowTimer);
              legacyOverflowTimer = undefined;
            }
          });
          if (internalModalVisible.value) {
            trackModalState(true);
          }
          return (_ctx, _cache) => {
            return __props.modelValue ? (openBlock(), createBlock(Teleport, {
              key: 0,
              to: container.value
            }, [createElementVNode("div", {
              class: normalizeClass(__props.modalWrapperClasses)
            }, [_hoisted_1, createElementVNode("div", {
              onClick: withModifiers(onScrollableClick, ["stop"]),
              class: "modal-scrollable",
              style: {
                "z-index": "1050"
              }
            }, [createElementVNode("div", {
              onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
              class: normalizeClass(["modal container modal-content rock-modal rock-modal-frame modal-overflow", {
                'animated shake': isShaking.value
              }]),
              "aria-hidden": "false",
              tabindex: "-1",
              role: "dialog",
              style: {
                "display": "block",
                "margin-top": "0px"
              }
            }, [createElementVNode("div", _hoisted_3, [createElementVNode("button", {
              onClick: onClose,
              class: "close",
              "aria-hidden": "true",
              type: "button"
            }, "×"), __props.title ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [createElementVNode("h3", _hoisted_4, toDisplayString(__props.title), 1), __props.subtitle ? (openBlock(), createElementBlock("small", _hoisted_5, toDisplayString(__props.subtitle), 1)) : createCommentVNode("v-if", true)], 64)) : renderSlot(_ctx.$slots, "header", {
              key: 1
            })]), createVNode(unref(RockForm), {
              onSubmit: onSubmit,
              hideErrors: "",
              onVisibleValidationChanged: onVisibleValidationChanged
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_6, [createVNode(unref(RockValidation), {
                errors: validationErrors.value
              }, null, 8, ["errors"]), createElementVNode("div", {
                ref_key: "modalBodyElement",
                ref: modalBodyElement
              }, [renderSlot(_ctx.$slots, "default")], 512), createElementVNode("div", {
                ref_key: "modalBodyPaddingElement",
                ref: modalBodyPaddingElement,
                style: {
                  "transition": "0.15s padding-bottom"
                }
              }, null, 512)]), !__props.isFooterHidden ? (openBlock(), createElementBlock("div", _hoisted_7, [createVNode(unref(RockButton), {
                onClick: onClose,
                btnType: "link"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(__props.cancelText), 1)]),
                _: 1
              }), __props.saveText ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                type: "submit",
                btnType: "primary",
                disabled: __props.isSaveButtonDisabled
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(__props.saveText), 1)]),
                _: 1
              }, 8, ["disabled"])) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "customButtons")])) : createCommentVNode("v-if", true)]),
              _: 3
            })], 2)], 8, _hoisted_2)], 2)], 8, ["to"])) : createCommentVNode("v-if", true);
          };
        }
      }));

      script.__file = "Framework/Controls/modal.obs";

    })
  };
}));
//# sourceMappingURL=modal.obs.js.map
