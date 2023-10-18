System.register(['vue', './rockForm', './rockButton', './rockValidation', '@Obsidian/Utility/page'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, onBeforeUnmount, RockForm, RockButton, RockValidation, trackModalState;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      onBeforeUnmount = module.onBeforeUnmount;
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

      var modal = exports('default', defineComponent({
        name: "Modal",
        components: {
          RockButton,
          RockForm,
          RockValidation
        },
        props: {
          modelValue: {
            type: Boolean,
            required: true
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
          saveButtonDisabled: {
            type: Boolean,
            default: false
          }
        },
        emits: {
          "update:modelValue": _value => true,
          save: () => true
        },
        setup(props, _ref) {
          var _document$fullscreenE;
          var emit = _ref.emit;
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
            legacyOverflowTimer = setTimeout(detectLegacyOverflow, 250);
          }
          var onClose = () => {
            internalModalVisible.value = false;
          };
          var onScrollableClick = () => {
            if (!isShaking.value) {
              isShaking.value = true;
              setTimeout(() => isShaking.value = false, 1000);
            }
          };
          var onSubmit = () => {
            emit("save");
          };
          var onVisibleValidationChanged = errors => {
            validationErrors.value = errors;
          };
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
                legacyOverflowTimer = setTimeout(detectLegacyOverflow, 250);
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
          return {
            container,
            internalModalVisible,
            isShaking,
            modalBodyElement,
            modalBodyPaddingElement,
            onClose,
            onScrollableClick,
            onSubmit,
            onVisibleValidationChanged,
            validationErrors
          };
        },
        template: "\n<teleport :to=\"container\" v-if=\"modelValue\">\n    <div>\n        <div class=\"modal-backdrop\" style=\"z-index: 1050;\"></div>\n\n        <div @click.stop=\"onScrollableClick\" class=\"modal-scrollable\" style=\"z-index: 1050;\">\n            <div @click.stop\n                class=\"modal container modal-content rock-modal rock-modal-frame modal-overflow\"\n                :class=\"{'animated shake': isShaking}\"\n                aria-hidden=\"false\"\n                tabindex=\"-1\"\n                role=\"dialog\"\n                style=\"display: block; margin-top: 0px;\">\n                <div class=\"modal-header\">\n                    <button @click=\"onClose\" class=\"close\" aria-hidden=\"true\" type=\"button\">&times;</button>\n                    <template v-if=\"title\">\n                        <h3 class=\"modal-title\">{{ title }}</h3>\n                        <small v-if=\"subtitle\">{{ subtitle }}</small>\n                    </template>\n                    <slot v-else name=\"header\" />\n                </div>\n\n                <RockForm @submit=\"onSubmit\" hideErrors @visibleValidationChanged=\"onVisibleValidationChanged\">\n                    <div class=\"modal-body\">\n                        <RockValidation :errors=\"validationErrors\" />\n\n                        <div ref=\"modalBodyElement\">\n                        <slot />\n                        </div>\n\n                        <div ref=\"modalBodyPaddingElement\" style=\"transition: 0.15s padding-bottom\"></div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <RockButton @click=\"onClose\" btnType=\"link\">{{ cancelText }}</RockButton>\n                        <RockButton v-if=\"saveText\" type=\"submit\" btnType=\"primary\" :disabled=\"saveButtonDisabled\">{{ saveText }}</RockButton>\n                        <slot name=\"customButtons\" />\n                    </div>\n                </RockForm>\n            </div>\n        </div>\n    </div>\n</teleport>\n"
      }));

    })
  };
}));
//# sourceMappingURL=modal.js.map
