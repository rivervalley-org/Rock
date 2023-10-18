System.register(['vue', './rockButton', '@Obsidian/Utility/page'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, watch, nextTick, RockButton, trackModalState;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            watch = module.watch;
            nextTick = module.nextTick;
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            trackModalState = module.trackModalState;
        }],
        execute: (function () {

            var dialog = exports('default', defineComponent({
              name: "Dialog",
              components: {
                RockButton
              },
              props: {
                modelValue: {
                  type: Boolean,
                  required: true
                },
                dismissible: {
                  type: Boolean,
                  default: true
                }
              },
              emits: {
                "update:modelValue": _v => true
              },
              setup(props, _ref) {
                var emit = _ref.emit,
                  slots = _ref.slots;
                var doShake = ref(false);
                var modalDiv = ref(null);
                var hasHeader = computed(() => !!slots.header);
                var close = () => {
                  emit("update:modelValue", false);
                };
                var shake = () => {
                  if (!doShake.value) {
                    doShake.value = true;
                    setTimeout(() => doShake.value = false, 1000);
                  }
                };
                var centerOnScreen = () => {
                  nextTick(() => {
                    if (!modalDiv.value) {
                      return;
                    }
                    var height = modalDiv.value.offsetHeight;
                    var margin = height / 2;
                    modalDiv.value.style.marginTop = "-".concat(margin, "px");
                  });
                };
                if (props.modelValue) {
                  trackModalState(true);
                }
                watch(() => props.modelValue, () => {
                  trackModalState(props.modelValue);
                  if (props.modelValue) {
                    centerOnScreen();
                  }
                });
                return {
                  centerOnScreen,
                  close,
                  doShake,
                  hasHeader,
                  modalDiv,
                  shake
                };
              },
              template: "\n<teleport to=\"body\" v-if=\"modelValue\">\n        <div class=\"modal-backdrop fade in\" style=\"z-index: 1060;\"></div>\n\n        <div @click=\"shake\" class=\"modal-scrollable\" style=\"z-index: 1060;\">\n            <div @click.stop ref=\"modalDiv\" class=\"modal fade in\" :class=\"{'animated shake': doShake}\" tabindex=\"-1\" role=\"dialog\" style=\"display: block;\">\n                <div class=\"modal-dialog\">\n                    <div class=\"modal-content\">\n                        <div v-if=\"hasHeader\" class=\"modal-header\">\n                            <button v-if=\"dismissible\" @click=\"close\" type=\"button\" class=\"close\" style=\"margin-top: -10px;\">\xD7</button>\n                            <slot name=\"header\" />\n                        </div>\n                        <div class=\"modal-body\">\n                            <button v-if=\"!hasHeader && dismissible\" @click=\"close\" type=\"button\" class=\"close\" style=\"margin-top: -10px;\">\xD7</button>\n                            <slot />\n                        </div>\n                        <div v-if=\"$slots.footer\" class=\"modal-footer\">\n                            <slot name=\"footer\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n</teleport>\n"
            }));

        })
    };
}));
//# sourceMappingURL=dialog.js.map
