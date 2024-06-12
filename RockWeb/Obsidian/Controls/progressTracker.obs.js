System.register(['vue', './progressTrackerSegment.obs', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createStaticVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, Fragment, renderList, createBlock, unref, renderSlot, nextTick, ProgressTrackerSegment, newGuid;
  return {
    setters: [function (module) {
      createStaticVNode = module.createStaticVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createBlock = module.createBlock;
      unref = module.unref;
      renderSlot = module.renderSlot;
      nextTick = module.nextTick;
    }, function (module) {
      ProgressTrackerSegment = module["default"];
    }, function (module) {
      newGuid = module.newGuid;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "progress-tracker d-none d-md-flex",
        style: {
          "margin": "20px auto",
          "max-width": "1200px",
          "width": "100%"
        }
      };
      var _hoisted_2 = {
        key: 0,
        class: "progress-step progress-tracker-more"
      };
      var _hoisted_3 = createStaticVNode("<div class=\"progress-step-link\"><i class=\"fas fa-ellipsis-v\"></i></div><div class=\"progress-tracker-arrow\"><svg viewBox=\"0 0 22 80\" fill=\"none\" preserveAspectRatio=\"none\"><path d=\"M0 -2L20 40L0 82\" vector-effect=\"non-scaling-stroke\" stroke=\"currentcolor\" stroke-linejoin=\"round\"></path></svg></div>", 2);
      var _hoisted_5 = [_hoisted_3];
      var script = exports('default', defineComponent({
        name: 'progressTracker',
        props: {
          currentIndex: {
            type: Number,
            required: true
          },
          items: {
            type: Array,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var guid = newGuid();
          var progressTrackerElementId = "progress-tracker-".concat(guid);
          var progressTrackerContainerElementId = "progress-tracker-container-".concat(guid);
          var collapsedIndexes = ref([]);
          function isCollapsed(index) {
            return collapsedIndexes.value.indexOf(index) !== -1;
          }
          var doNotCollapseIndexes = computed(() => {
            return [0, props.currentIndex - 1, props.currentIndex, props.currentIndex + 1, lastIndex.value];
          });
          var lastIndex = computed(() => {
            return props.items.length - 1;
          });
          function expandAndCollapseItemsBecauseOfWidth() {
            collapsedIndexes.value = [];
            nextTick(() => collapseItemsBecauseOfWidth());
          }
          function collapseItemsBecauseOfWidth() {
            var progressTracker = document.getElementById(progressTrackerElementId);
            var progressTrackerContainer = document.getElementById(progressTrackerContainerElementId);
            var containerWidth = progressTrackerContainer === null || progressTrackerContainer === void 0 ? void 0 : progressTrackerContainer.clientWidth;
            var childWidth = progressTracker === null || progressTracker === void 0 ? void 0 : progressTracker.scrollWidth;
            if (!containerWidth || !childWidth || childWidth <= containerWidth) {
              return;
            }
            var midPoint = lastIndex.value / 2;
            if (props.currentIndex > midPoint) {
              for (var i = 0; i <= lastIndex.value; i++) {
                if (doNotCollapseIndexes.value.indexOf(i) !== -1) {
                  continue;
                }
                if (isCollapsed(i)) {
                  continue;
                }
                collapsedIndexes.value.push(i);
                nextTick(() => collapseItemsBecauseOfWidth());
                return;
              }
            } else {
              for (var _i = lastIndex.value; _i >= 0; _i--) {
                if (doNotCollapseIndexes.value.indexOf(_i) !== -1) {
                  continue;
                }
                if (isCollapsed(_i)) {
                  continue;
                }
                collapsedIndexes.value.push(_i);
                nextTick(() => collapseItemsBecauseOfWidth());
                return;
              }
            }
          }
          watch(() => props.currentIndex, () => {
            expandAndCollapseItemsBecauseOfWidth();
          }, {
            immediate: true
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("nav", _hoisted_1, [createElementVNode("div", {
              id: progressTrackerContainerElementId,
              class: "progress-tracker-container"
            }, [createElementVNode("ul", {
              id: progressTrackerElementId,
              class: "progress-steps"
            }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index) => {
              return openBlock(), createElementBlock(Fragment, {
                key: item.key
              }, [isCollapsed(index) ? (openBlock(), createElementBlock("li", _hoisted_2, _hoisted_5)) : (openBlock(), createBlock(unref(ProgressTrackerSegment), {
                key: 1,
                item: item,
                isPast: index < __props.currentIndex,
                isPresent: index === __props.currentIndex,
                isFuture: index > __props.currentIndex,
                isLast: index === unref(lastIndex)
              }, null, 8, ["item", "isPast", "isPresent", "isFuture", "isLast"]))], 64);
            }), 128))])]), renderSlot(_ctx.$slots, "aside")]);
          };
        }
      }));

      script.__file = "Framework/Controls/progressTracker.obs";

    })
  };
}));
//# sourceMappingURL=progressTracker.obs.js.map
