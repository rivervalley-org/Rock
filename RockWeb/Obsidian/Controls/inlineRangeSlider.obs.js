System.register(['vue', '@Obsidian/Utility/component'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, unref, toDisplayString, createCommentVNode, normalizeStyle, useVModelPassthrough;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      unref = module.unref;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      normalizeStyle = module.normalizeStyle;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }],
    execute: (function () {

      var _hoisted_1 = {
        style: {
          "margin-left": "calc(var(--slider-handle-height) / 2)",
          "margin-right": "calc(var(--slider-handle-height) / 2)"
        }
      };
      var _hoisted_2 = {
        key: 0,
        class: "d-flex align-items-center position-relative justify-content-between mb-1"
      };
      var _hoisted_3 = {
        key: 0,
        class: "text-muted"
      };
      var _hoisted_4 = createElementVNode("span", null, null, -1);
      var _hoisted_5 = {
        key: 1,
        class: "text-muted"
      };
      var _hoisted_6 = {
        class: "d-block position-absolute",
        style: {
          "background": "var(--slider-progress-bg)",
          "border-radius": "3px",
          "padding": "1px 5px",
          "color": "#fff",
          "font-size": "14px",
          "transform": "translateX(-50%)"
        }
      };
      var script = exports('default', defineComponent({
        name: 'inlineRangeSlider',
        props: {
          modelValue: {
            type: Number,
            default: 0
          },
          step: {
            type: Number,
            default: 1
          },
          min: {
            type: Number,
            default: 0
          },
          max: {
            type: Number,
            default: 100
          },
          showValueBar: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var sliderElement = ref(null);
          var thumbStyle = computed(() => {
            return {
              left: "".concat(percentValue.value * 100, "%")
            };
          });
          var max = computed(() => {
            return Math.max(props.min, props.max);
          });
          var percentValue = computed(() => {
            if (props.min < max.value) {
              return (internalValue.value - props.min) / (max.value - props.min);
            }
            return 0;
          });
          var leftSliderStyle = computed(() => {
            var value = Math.round(percentValue.value * 10000);
            return {
              flexBasis: "".concat(value / 100, "%")
            };
          });
          var rightSliderStyle = computed(() => {
            var value = Math.round(percentValue.value * 10000);
            return {
              flexBasis: "".concat(100 - value / 100, "%")
            };
          });
          var showMinValue = computed(() => percentValue.value >= 0.1);
          var showMaxValue = computed(() => percentValue.value <= 0.9);
          watch(() => [props.modelValue, props.max, props.min, props.step], constrainInternalValueAndUpdate);
          function constrainValue(value) {
            if (props.step != 0) {
              var _split$1$length, _split$;
              value = Math.round(value / props.step) * props.step;
              var decimalPlaces = (_split$1$length = (_split$ = ("" + props.step).split(".")[1]) === null || _split$ === void 0 ? void 0 : _split$.length) !== null && _split$1$length !== void 0 ? _split$1$length : 0;
              if (decimalPlaces > 0) {
                value = Math.round(Math.pow(10, decimalPlaces) * value) / Math.pow(10, decimalPlaces);
              }
            }
            if (value < props.min) {
              value = props.min;
            } else if (value > max.value) {
              value = max.value;
            }
            return value;
          }
          function constrainInternalValueAndUpdate() {
            var value = constrainValue(internalValue.value);
            if (value !== internalValue.value) {
              internalValue.value = value;
            }
          }
          function calculateDragValue(clientX) {
            if (sliderElement.value) {
              var rect = sliderElement.value.getBoundingClientRect();
              var xPosition = clientX - rect.left;
              var xConstrained = Math.min(Math.max(xPosition, 0), rect.width);
              var percent = xConstrained / rect.width;
              var valueRange = max.value - props.min;
              var value = constrainValue(valueRange * percent + props.min);
              if (value !== internalValue.value) {
                internalValue.value = value;
              }
            }
          }
          function onMouseDown(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            if (ev.button === 0) {
              calculateDragValue(ev.clientX);
              window.addEventListener("mousemove", onMouseMove);
              window.addEventListener("mouseup", onMouseUp);
            }
          }
          function onTouchDown(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            if (ev.touches.length === 1) {
              calculateDragValue(ev.touches[0].clientX);
              window.addEventListener("touchmove", onTouchMove);
              window.addEventListener("touchup", onTouchUp);
            }
          }
          function onMouseMove(ev) {
            calculateDragValue(ev.clientX);
          }
          function onMouseUp() {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
          }
          function onTouchMove(ev) {
            calculateDragValue(ev.touches[0].clientX);
          }
          function onTouchUp() {
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchup", onTouchUp);
          }
          constrainInternalValueAndUpdate();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [__props.showValueBar ? (openBlock(), createElementBlock("div", _hoisted_2, [unref(showMinValue) ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(__props.min), 1)) : createCommentVNode("v-if", true), _hoisted_4, unref(showMaxValue) ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(unref(max)), 1)) : createCommentVNode("v-if", true), createElementVNode("span", {
              class: "position-absolute top-0",
              style: normalizeStyle(unref(thumbStyle))
            }, [createElementVNode("span", _hoisted_6, toDisplayString(unref(internalValue)), 1)], 4)])) : createCommentVNode("v-if", true), createElementVNode("div", {
              ref_key: "sliderElement",
              ref: sliderElement,
              class: "d-flex",
              style: {
                "height": "var(--slider-handle-height)",
                "align-items": "center",
                "position": "relative"
              },
              onMousedown: onMouseDown,
              onTouchdown: onTouchDown
            }, [createElementVNode("span", {
              class: "flex-grow-1",
              style: normalizeStyle([unref(leftSliderStyle), {
                "background-color": "var(--slider-progress-bg)",
                "height": "var(--slider-height)",
                "border-top-left-radius": "calc(var(--slider-height) / 2)",
                "border-bottom-left-radius": "calc(var(--slider-height) / 2)"
              }])
            }, null, 4), createElementVNode("span", {
              class: "flex-grow-1",
              style: normalizeStyle([unref(rightSliderStyle), {
                "background-color": "var(--slider-bg)",
                "height": "var(--slider-height)",
                "border-top-right-radius": "calc(var(--slider-height) / 2)",
                "border-bottom-right-radius": "calc(var(--slider-height) / 2)"
              }])
            }, null, 4), createElementVNode("span", {
              style: normalizeStyle([unref(thumbStyle), {
                "position": "absolute",
                "width": "var(--slider-handle-height)",
                "height": "var(--slider-handle-height)",
                "margin-left": "calc(0px - calc(var(--slider-handle-height) / 2))",
                "cursor": "pointer",
                "background": "var(--slider-handle-bg)",
                "border": "1px solid var(--slider-handle-border-color)",
                "border-radius": "var(--slider-handle-height)"
              }]),
              onMousedown: onMouseDown,
              onMouseup: onMouseUp
            }, null, 36)], 544)]);
          };
        }
      }));

      script.__file = "Framework/Controls/inlineRangeSlider.obs";

    })
  };
}));
//# sourceMappingURL=inlineRangeSlider.obs.js.map
