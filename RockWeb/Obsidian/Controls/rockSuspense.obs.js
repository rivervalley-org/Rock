System.register(['vue', '@Obsidian/Utility/suspense'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, onMounted, openBlock, createElementBlock, Fragment, withDirectives, createElementVNode, renderSlot, vShow, unref, createCommentVNode, useSuspense, BasicSuspenseProvider, provideSuspense;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      withDirectives = module.withDirectives;
      createElementVNode = module.createElementVNode;
      renderSlot = module.renderSlot;
      vShow = module.vShow;
      unref = module.unref;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      useSuspense = module.useSuspense;
      BasicSuspenseProvider = module.BasicSuspenseProvider;
      provideSuspense = module.provideSuspense;
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'rockSuspense',
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
        emits: ["loaded", "ready", "timeout"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
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
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [withDirectives(createElementVNode("div", null, [renderSlot(_ctx.$slots, "default")], 512), [[vShow, unref(isContentVisible)]]), unref(isLoadingVisible) ? renderSlot(_ctx.$slots, "loading", {
              key: 0
            }) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "Framework/Controls/rockSuspense.obs";

    })
  };
}));
//# sourceMappingURL=rockSuspense.obs.js.map
