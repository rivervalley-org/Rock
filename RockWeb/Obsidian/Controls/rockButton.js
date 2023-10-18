System.register(['vue', '@Obsidian/Utility/promiseUtils', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, isPromise, BtnType, BtnSize;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
    }, function (module) {
      isPromise = module.isPromise;
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
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

      var rockButton = exports('default', defineComponent({
        name: "RockButton",
        props: {
          isLoading: {
            type: Boolean,
            default: false
          },
          loadingText: {
            type: String,
            default: "Loading..."
          },
          type: {
            type: String,
            default: "button"
          },
          disabled: {
            type: Boolean,
            default: false
          },
          btnType: {
            type: String,
            default: BtnType.Default
          },
          btnSize: {
            type: String,
            default: BtnSize.Default
          },
          autoLoading: {
            type: Boolean,
            default: false
          },
          autoDisable: {
            type: Boolean,
            default: false
          },
          onClick: {
            type: Function,
            required: false
          },
          isSquare: {
            type: Boolean,
            default: false
          }
        },
        emits: [],
        setup(props) {
          var isProcessing = ref(false);
          var isButtonDisabled = computed(() => {
            return props.disabled || props.autoDisable && isProcessing.value || props.isLoading;
          });
          var isButtonLoading = computed(() => {
            return props.isLoading || props.autoLoading && isProcessing.value;
          });
          var typeClass = computed(() => {
            return "btn-".concat(props.btnType);
          });
          var sizeClass = computed(() => {
            if (!props.btnSize) {
              return "";
            }
            return "btn-".concat(props.btnSize);
          });
          var cssClass = computed(() => {
            return "btn ".concat(typeClass.value, " ").concat(sizeClass.value, " ").concat(props.isSquare ? "btn-square" : "");
          });
          var onButtonClick = function () {
            var _ref = _asyncToGenerator(function* (event) {
              if (isButtonDisabled.value || isButtonLoading.value) {
                return;
              }
              isProcessing.value = true;
              try {
                var clickHandler = props.onClick;
                if (clickHandler) {
                  var result = clickHandler(event);
                  if (isPromise(result)) {
                    yield result;
                  }
                }
              } finally {
                isProcessing.value = false;
              }
            });
            return function onButtonClick(_x) {
              return _ref.apply(this, arguments);
            };
          }();
          return {
            cssClass,
            isButtonDisabled,
            isButtonLoading,
            onButtonClick
          };
        },
        template: "\n<button :class=\"cssClass\" :disabled=\"isButtonDisabled\" @click=\"onButtonClick\" :type=\"type\">\n    <template v-if=\"isButtonLoading\">\n        {{loadingText}}\n    </template>\n    <slot v-else />\n</button>"
      }));

    })
  };
}));
//# sourceMappingURL=rockButton.js.map
