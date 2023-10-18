System.register(['vue'], (function (exports) {
    'use strict';
    var defineComponent, computed;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }],
        execute: (function () {

            var transitionVerticalCollapse = exports('default', defineComponent({
              name: "TransitionVerticalCollapse",
              props: {
                speed: {
                  type: String,
                  default: "normal"
                }
              },
              setup(props) {
                var beforeEnter = element => {
                  var state = {
                    display: element.style.display,
                    computedPaddingTop: getComputedStyle(element).paddingTop,
                    computedPaddingBottom: getComputedStyle(element).paddingBottom
                  };
                  element.dataset.transitionCollapseState = JSON.stringify(state);
                  if (!element.style.height) {
                    element.style.height = "0px";
                  }
                  if (!element.style.paddingTop) {
                    element.style.paddingTop = "0px";
                  }
                  if (!element.style.paddingBottom) {
                    element.style.paddingBottom = "0px";
                  }
                  element.style.display = "";
                };
                var enter = element => {
                  requestAnimationFrame(() => {
                    var _element$dataset$tran;
                    var state = JSON.parse((_element$dataset$tran = element.dataset.transitionCollapseState) !== null && _element$dataset$tran !== void 0 ? _element$dataset$tran : "");
                    var verticalPadding = (parseInt(state.computedPaddingTop) || 0) + (parseInt(state.computedPaddingBottom) || 0);
                    element.style.height = "".concat(element.scrollHeight + verticalPadding, "px");
                    element.style.paddingTop = state.computedPaddingTop;
                    element.style.paddingBottom = state.computedPaddingBottom;
                  });
                };
                var afterEnter = element => {
                  var _element$dataset$tran2;
                  var state = JSON.parse((_element$dataset$tran2 = element.dataset.transitionCollapseState) !== null && _element$dataset$tran2 !== void 0 ? _element$dataset$tran2 : "");
                  element.style.height = "";
                  element.style.paddingTop = "";
                  element.style.paddingBottom = "";
                  element.style.display = state.display !== "none" ? state.display : "";
                  delete element.dataset.transitionCollapseState;
                };
                var beforeLeave = element => {
                  element.style.height = "".concat(element.offsetHeight, "px");
                };
                var leave = element => {
                  requestAnimationFrame(() => {
                    element.style.height = "0px";
                    element.style.paddingTop = "0px";
                    element.style.paddingBottom = "0px";
                  });
                };
                var afterLeave = element => {
                  element.style.height = "";
                  element.style.paddingTop = "";
                  element.style.paddingBottom = "";
                };
                var speed = computed(() => props.speed == "fast" ? "0.2s" : props.speed == "slow" ? "0.6s" : "0.35s");
                return {
                  afterEnter,
                  afterLeave,
                  beforeEnter,
                  beforeLeave,
                  enter,
                  leave,
                  speed
                };
              },
              template: "\n    <v-style>\n        .vertical-collapse-enter-active,\n        .vertical-collapse-leave-active {\n            overflow: hidden;\n            transition-property: height, padding-top, padding-bottom;\n            transition-duration: {{ speed }};\n            transition-timing-function: ease-in-out;\n        }\n    </v-style>\n<transition\n    enter-active-class=\"vertical-collapse-enter-active\"\n    leave-active-class=\"vertical-collapse-leave-active\"\n    @before-enter=\"beforeEnter\"\n    @enter=\"enter\"\n    @after-enter=\"afterEnter\"\n    @before-leave=\"beforeLeave\"\n    @leave=\"leave\"\n    @after-leave=\"afterLeave\">\n    <slot />\n</transition>\n"
            }));

        })
    };
}));
//# sourceMappingURL=transitionVerticalCollapse.js.map
