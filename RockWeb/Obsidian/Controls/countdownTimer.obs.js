System.register(['vue'], (function (exports) {
  'use strict';
  var defineComponent, computed, onMounted, onUnmounted, openBlock, createElementBlock, toDisplayString, unref;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      onMounted = module.onMounted;
      onUnmounted = module.onUnmounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      toDisplayString = module.toDisplayString;
      unref = module.unref;
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'countdownTimer',
        props: {
          modelValue: {
            type: Number,
            required: true
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var handle = null;
          var timeString = computed(() => {
            var minutes = Math.floor(props.modelValue / 60);
            var seconds = Math.floor(props.modelValue % 60);
            return "".concat(minutes, ":").concat(seconds < 10 ? "0" + seconds : seconds);
          });
          function onInterval() {
            if (props.modelValue <= 0) {
              emit("update:modelValue", 0);
              return;
            }
            emit("update:modelValue", Math.floor(props.modelValue - 1));
          }
          onMounted(() => {
            if (handle) {
              clearInterval(handle);
            }
            handle = window.setInterval(() => onInterval(), 1000);
          });
          onUnmounted(() => {
            if (handle) {
              clearInterval(handle);
              handle = null;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("span", null, toDisplayString(unref(timeString)), 1);
          };
        }
      }));

      script.__file = "Framework/Controls/countdownTimer.obs";

    })
  };
}));
//# sourceMappingURL=countdownTimer.obs.js.map
