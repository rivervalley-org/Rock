System.register(['vue', '@Obsidian/Utility/suspense'], (function (exports) {
    'use strict';
    var defineComponent, ref, computed, onMounted, useSuspense, BasicSuspenseProvider, provideSuspense;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            onMounted = module.onMounted;
        }, function (module) {
            useSuspense = module.useSuspense;
            BasicSuspenseProvider = module.BasicSuspenseProvider;
            provideSuspense = module.provideSuspense;
        }],
        execute: (function () {

            var rockSuspense = exports('default', defineComponent({
              name: "RockSuspense",
              props: {
                delay: {
                  type: Number,
                  default: 500
                },
                timeout: {
                  type: Number,
                  default: 5000
                }
              },
              emits: {
                loaded: () => true,
                ready: () => true,
                timeout: () => true
              },
              setup(props, _ref) {
                var emit = _ref.emit;
                var isContentLoaded = ref(false);
                var hasDelayElapsed = ref(false);
                var hasTimeoutElapsed = ref(false);
                var parentSuspense = useSuspense();
                var suspense = new BasicSuspenseProvider(parentSuspense);
                provideSuspense(suspense);
                var isContentVisible = computed(() => isContentLoaded.value || hasTimeoutElapsed.value);
                var isLoadingVisible = computed(() => !isContentVisible.value && hasDelayElapsed.value);
                setTimeout(() => hasDelayElapsed.value = true, props.delay);
                setTimeout(() => {
                  hasTimeoutElapsed.value = true;
                  emit("timeout");
                  emit("ready");
                }, props.timeout);
                onMounted(() => {
                  if (!suspense.hasPendingOperations()) {
                    isContentLoaded.value = true;
                    emit("loaded");
                    emit("ready");
                  } else {
                    suspense.addFinishedHandler(() => {
                      isContentLoaded.value = true;
                      emit("loaded");
                      emit("ready");
                    });
                  }
                });
                return {
                  isContentVisible,
                  isLoadingVisible
                };
              },
              template: "\n<div v-show=\"isContentVisible\">\n    <slot />\n</div>\n\n<template v-if=\"isLoadingVisible\">\n    <slot name=\"loading\" />\n</template>\n"
            }));

        })
    };
}));
//# sourceMappingURL=rockSuspense.js.map
