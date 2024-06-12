System.register(['vue', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/stringUtils', './transitionVerticalCollapse.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, onMounted, onUnmounted, openBlock, createElementBlock, withDirectives, isRef, vModelText, unref, normalizeClass, withModifiers, createCommentVNode, createVNode, withCtx, nextTick, toNumberOrNull, padLeft, TransitionVerticalCollapse;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      onMounted = module.onMounted;
      onUnmounted = module.onUnmounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      withDirectives = module.withDirectives;
      isRef = module.isRef;
      vModelText = module.vModelText;
      unref = module.unref;
      normalizeClass = module.normalizeClass;
      withModifiers = module.withModifiers;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      withCtx = module.withCtx;
      nextTick = module.nextTick;
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      padLeft = module.padLeft;
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
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

      var _hoisted_1 = {
        class: "dropdown timepicker-input"
      };
      var _hoisted_2 = {
        class: "bootstrap-timepicker input-group input-width-md"
      };
      var _hoisted_3 = ["disabled"];
      var _hoisted_4 = createElementVNode("i", {
        class: "fa fa-clock-o"
      }, null, -1);
      var _hoisted_5 = [_hoisted_4];
      var _hoisted_6 = ["onClick"];
      var _hoisted_7 = ["onClick"];
      var _hoisted_8 = createElementVNode("span", {
        class: "fa fa-chevron-up"
      }, null, -1);
      var _hoisted_9 = [_hoisted_8];
      var _hoisted_10 = createElementVNode("td", {
        class: "separator"
      }, " ", -1);
      var _hoisted_11 = ["onClick"];
      var _hoisted_12 = createElementVNode("span", {
        class: "fa fa-chevron-up"
      }, null, -1);
      var _hoisted_13 = [_hoisted_12];
      var _hoisted_14 = createElementVNode("td", {
        class: "separator"
      }, " ", -1);
      var _hoisted_15 = ["onClick"];
      var _hoisted_16 = createElementVNode("span", {
        class: "fa fa-chevron-up"
      }, null, -1);
      var _hoisted_17 = [_hoisted_16];
      var _hoisted_18 = createElementVNode("td", {
        class: "separator"
      }, ":", -1);
      var _hoisted_19 = createElementVNode("td", {
        class: "separator"
      }, " ", -1);
      var _hoisted_20 = ["onClick"];
      var _hoisted_21 = createElementVNode("span", {
        class: "fa fa-chevron-down"
      }, null, -1);
      var _hoisted_22 = [_hoisted_21];
      var _hoisted_23 = createElementVNode("td", {
        class: "separator"
      }, null, -1);
      var _hoisted_24 = ["onClick"];
      var _hoisted_25 = createElementVNode("span", {
        class: "fa fa-chevron-down"
      }, null, -1);
      var _hoisted_26 = [_hoisted_25];
      var _hoisted_27 = createElementVNode("td", {
        class: "separator"
      }, " ", -1);
      var _hoisted_28 = ["onClick"];
      var _hoisted_29 = createElementVNode("span", {
        class: "fa fa-chevron-down"
      }, null, -1);
      var _hoisted_30 = [_hoisted_29];
      var script = exports('default', defineComponent({
        name: 'basicTimePicker',
        props: {
          modelValue: {
            type: Object,
            default: {}
          },
          hideClear: {
            type: Boolean,
            default: false
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var isMinuteFieldFocused = ref(false);
          var internalHour = computed({
            get() {
              var _props$modelValue$hou;
              if (props.modelValue.hour != null && props.modelValue.hour > 12) {
                return props.modelValue.hour % 12;
              } else if (props.modelValue.hour === 0) {
                return 12;
              } else if (props.modelValue.hour == null && props.modelValue.minute != null) {
                return 12;
              }
              return (_props$modelValue$hou = props.modelValue.hour) !== null && _props$modelValue$hou !== void 0 ? _props$modelValue$hou : null;
            },
            set(val) {
              var x = toNumberOrNull(val);
              if (x) {
                emitModelUpdates(x, internalMinute.value, internalMeridiem.value);
              }
            }
          });
          var internalMinute = computed({
            get() {
              if (props.modelValue.minute != null) {
                return Math.min(59, Math.max(0, props.modelValue.minute));
              } else if (props.modelValue.minute == null && props.modelValue.hour != null) {
                return 0;
              }
              return null;
            },
            set(val) {
              emitModelUpdates(internalHour.value, val, internalMeridiem.value);
            }
          });
          var internalMeridiem = computed({
            get() {
              return props.modelValue.hour == null || props.modelValue.hour < 12 ? "AM" : "PM";
            },
            set(val) {
              var meridiem = /p/i.test(val) ? "PM" : "AM";
              emitModelUpdates(internalHour.value, internalMinute.value, meridiem);
            }
          });
          var internalValue = computed(() => {
            if (internalHour.value == null) {
              return "";
            }
            return "".concat(internalHour.value, ":").concat(padMinute(), " ").concat(internalMeridiem.value);
          });
          var internalTextMinute = computed({
            get() {
              var _internalMinute$value, _internalMinute$value2;
              return isMinuteFieldFocused.value ? (_internalMinute$value = (_internalMinute$value2 = internalMinute.value) === null || _internalMinute$value2 === void 0 ? void 0 : _internalMinute$value2.toString()) !== null && _internalMinute$value !== void 0 ? _internalMinute$value : "" : padMinute();
            },
            set(val) {
              internalMinute.value = toNumberOrNull(val);
            }
          });
          var showPickerWidget = ref(false);
          var inputEl = ref(null);
          var toggleBtnEl = ref(null);
          var widgetEl = ref(null);
          var highlightedUnit = ref(null);
          watch(highlightedUnit, unit => {
            if (!unit) {
              return;
            }
            highlightUnit(unit);
          });
          function emitModelUpdates(hour, minute, meridiem) {
            var _minute, _hour;
            if (hour == null) {
              return emit("update:modelValue", {});
            }
            minute = Math.min(59, Math.max(0, (_minute = minute) !== null && _minute !== void 0 ? _minute : 0));
            hour = Math.min(12, Math.max(1, (_hour = hour) !== null && _hour !== void 0 ? _hour : 12));
            if (hour == 12 && meridiem == "AM") {
              hour = 0;
            } else if (hour < 12 && meridiem == "PM") {
              hour += 12;
            }
            emit("update:modelValue", {
              hour,
              minute
            });
          }
          function padMinute() {
            return internalMinute.value == null ? "" : padLeft(internalMinute.value.toString(), 2, "0");
          }
          function highlightUnit(unit) {
            setTimeout(() => {
              if (internalHour.value == null || !inputEl.value) {
                return;
              }
              switch (unit) {
                case "hour":
                  internalHour.value < 10 ? inputEl.value.setSelectionRange(0, 1) : inputEl.value.setSelectionRange(0, 2);
                  break;
                case "minute":
                  internalHour.value < 10 ? inputEl.value.setSelectionRange(2, 4) : inputEl.value.setSelectionRange(3, 5);
                  break;
                case "meridiem":
                  internalHour.value < 10 ? inputEl.value.setSelectionRange(5, 7) : inputEl.value.setSelectionRange(6, 8);
              }
            }, 0);
          }
          function parseTimeText(time) {
            var hour, minute, meridiem;
            var timeMode = (/a/i.test(time) ? 1 : 0) + (/p/i.test(time) ? 2 : 0);
            if (timeMode > 2 || time.trim() == "") {
              emit("update:modelValue", {});
              return;
            }
            var timeArray = time.replace(/[^0-9:]/g, "").split(":");
            hour = timeArray[0] ? timeArray[0].toString() : timeArray.toString();
            minute = timeArray[1] ? timeArray[1].toString() : "";
            if (hour.length > 2) {
              minute = hour.slice(-2);
              hour = hour.slice(0, -2);
            }
            if (minute.length > 2) {
              minute = minute.slice(0, -2);
            }
            hour = parseInt(hour, 10);
            minute = parseInt(minute, 10);
            if (isNaN(hour)) {
              hour = 0;
            }
            if (isNaN(minute)) {
              minute = 0;
            }
            if (minute > 59) {
              minute = 59;
            }
            if (hour >= 24) {
              hour = 23;
            }
            if (hour > 12) {
              timeMode = 2;
              hour -= 12;
            }
            if (!timeMode) {
              timeMode = 1;
            }
            if (hour === 0) {
              hour = 12;
            }
            meridiem = timeMode === 1 ? "AM" : "PM";
            emitModelUpdates(hour, minute, meridiem);
          }
          function focusInput() {
            var _inputEl$value$select, _inputEl$value;
            if (internalHour.value == null) {
              highlightedUnit.value = null;
              return;
            }
            var position = (_inputEl$value$select = (_inputEl$value = inputEl.value) === null || _inputEl$value === void 0 ? void 0 : _inputEl$value.selectionStart) !== null && _inputEl$value$select !== void 0 ? _inputEl$value$select : null;
            if (position == null) {
              return;
            }
            if (position >= 0 && position <= 2) {
              highlightedUnit.value = "hour";
            } else if (position >= 3 && position <= 5) {
              highlightedUnit.value = "minute";
            } else if (position >= 6) {
              highlightedUnit.value = "meridiem";
            }
          }
          function highlightNextUnit() {
            if (highlightedUnit.value == "hour") {
              highlightedUnit.value = "minute";
            } else if (highlightedUnit.value == "minute") {
              highlightedUnit.value = "meridiem";
            } else {
              highlightedUnit.value = "hour";
            }
          }
          function highlightPrevUnit() {
            if (highlightedUnit.value == "meridiem") {
              highlightedUnit.value = "minute";
            } else if (highlightedUnit.value == "hour") {
              highlightedUnit.value = "meridiem";
            } else {
              highlightedUnit.value = "hour";
            }
          }
          function incrementHighlightedUnit() {
            switch (highlightedUnit.value) {
              case "hour":
                incrementHour();
                highlightUnit(highlightedUnit.value);
                break;
              case "minute":
                incrementMinute();
                highlightUnit(highlightedUnit.value);
                break;
              case "meridiem":
                toggleMeridiem();
                highlightUnit(highlightedUnit.value);
            }
          }
          function decrementHighlightedUnit() {
            switch (highlightedUnit.value) {
              case "hour":
                decrementHour();
                highlightUnit(highlightedUnit.value);
                break;
              case "minute":
                decrementMinute();
                highlightUnit(highlightedUnit.value);
                break;
              case "meridiem":
                toggleMeridiem();
                highlightUnit(highlightedUnit.value);
            }
          }
          function toggleMeridiem() {
            if (!props.disabled) {
              internalMeridiem.value = internalMeridiem.value === "AM" ? "PM" : "AM";
            }
          }
          function incrementHour() {
            return _incrementHour.apply(this, arguments);
          }
          function _incrementHour() {
            _incrementHour = _asyncToGenerator(function* () {
              var _internalHour$value;
              var currVal = (_internalHour$value = internalHour.value) !== null && _internalHour$value !== void 0 ? _internalHour$value : 0;
              if (currVal === 11) {
                toggleMeridiem();
                yield nextTick();
              } else if (currVal == 12) {
                currVal = 0;
              }
              internalHour.value = currVal + 1;
            });
            return _incrementHour.apply(this, arguments);
          }
          function incrementMinute() {
            return _incrementMinute.apply(this, arguments);
          }
          function _incrementMinute() {
            _incrementMinute = _asyncToGenerator(function* () {
              var _internalMinute$value3;
              var currVal = (_internalMinute$value3 = internalMinute.value) !== null && _internalMinute$value3 !== void 0 ? _internalMinute$value3 : 0;
              if (internalHour.value == null) {
                return emit("update:modelValue", {
                  hour: 0,
                  minute: 0
                });
              }
              if (currVal >= 45) {
                yield incrementHour();
                yield nextTick();
                internalMinute.value = 0;
                return;
              }
              internalMinute.value = currVal + 15 - currVal % 15;
            });
            return _incrementMinute.apply(this, arguments);
          }
          function decrementHour() {
            return _decrementHour.apply(this, arguments);
          }
          function _decrementHour() {
            _decrementHour = _asyncToGenerator(function* () {
              var _internalHour$value2;
              var currVal = (_internalHour$value2 = internalHour.value) !== null && _internalHour$value2 !== void 0 ? _internalHour$value2 : 1;
              if (currVal === 1) {
                currVal = 13;
              } else if (currVal === 0) {
                currVal = 12;
              }
              if (currVal === 12) {
                toggleMeridiem();
                yield nextTick();
              }
              internalHour.value = currVal - 1;
            });
            return _decrementHour.apply(this, arguments);
          }
          function decrementMinute() {
            return _decrementMinute.apply(this, arguments);
          }
          function _decrementMinute() {
            _decrementMinute = _asyncToGenerator(function* () {
              var _internalMinute$value4;
              var currVal = (_internalMinute$value4 = internalMinute.value) !== null && _internalMinute$value4 !== void 0 ? _internalMinute$value4 : 1;
              if (internalHour.value == null) {
                internalHour.value = 0;
                yield nextTick();
              }
              if (currVal <= 0) {
                yield decrementHour();
                yield nextTick();
                currVal = 60;
              }
              internalMinute.value = currVal - (15 - currVal % 15);
            });
            return _decrementMinute.apply(this, arguments);
          }
          function onInputBlur() {
            var _inputEl$value$value, _inputEl$value2;
            highlightedUnit.value = null;
            var text = (_inputEl$value$value = (_inputEl$value2 = inputEl.value) === null || _inputEl$value2 === void 0 ? void 0 : _inputEl$value2.value) !== null && _inputEl$value$value !== void 0 ? _inputEl$value$value : "";
            parseTimeText(text);
          }
          function clearPicker() {
            emit("update:modelValue", {});
            showPickerWidget.value = false;
          }
          function onMainInputKeyDown(e) {
            switch (e.key) {
              case "Escape":
                onInputBlur();
                break;
              case "Tab":
                if (highlightedUnit.value == null) {
                  break;
                } else if (e.shiftKey) {
                  if (highlightedUnit.value == "hour") {
                    showPickerWidget.value = false;
                    break;
                  }
                  highlightPrevUnit();
                } else if (highlightedUnit.value == "meridiem") {
                  showPickerWidget.value = false;
                  break;
                } else {
                  highlightNextUnit();
                }
                e.preventDefault();
                break;
              case "ArrowUp":
                incrementHighlightedUnit();
                break;
              case "ArrowDown":
                decrementHighlightedUnit();
                break;
              case "ArrowLeft":
                highlightPrevUnit();
                break;
              case "ArrowRight":
                highlightNextUnit();
                break;
            }
          }
          function onWidgetInputKeyDown(e, segmentName) {
            console.log(e.key);
            switch (e.key) {
              case "Escape":
                showPickerWidget.value = false;
                break;
              case "Tab":
                if (e.shiftKey && segmentName == "hour" || !e.shiftKey && segmentName == "meridiem") {
                  showPickerWidget.value = false;
                }
                return;
              case "ArrowUp":
                switch (segmentName) {
                  case "hour":
                    incrementHour();
                    break;
                  case "minute":
                    incrementMinute();
                    break;
                  case "meridiem":
                    toggleMeridiem();
                    break;
                }
                break;
              case "ArrowDown":
                switch (segmentName) {
                  case "hour":
                    decrementHour();
                    break;
                  case "minute":
                    decrementMinute();
                    break;
                  case "meridiem":
                    toggleMeridiem();
                    break;
                }
                break;
              case "A":
              case "a":
                if (segmentName == "meridiem") {
                  internalMeridiem.value = "AM";
                }
                break;
              case "P":
              case "p":
                if (segmentName == "meridiem") {
                  internalMeridiem.value = "PM";
                }
                break;
              case "Delete":
              case "Backspace":
              case "ArrowLeft":
              case "ArrowRight":
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                return;
            }
            if ((!e.ctrlKey || e.ctrlKey && e.key.toLowerCase() == "v") && !e.altKey && !e.metaKey) {
              e.preventDefault();
            }
          }
          function onClickOutsideWidget(e) {
            if (!widgetEl.value || !showPickerWidget.value) {
              return;
            }
            if (e.target === widgetEl.value || e.composedPath().includes(widgetEl.value) || e.target == toggleBtnEl.value || e.composedPath().includes(toggleBtnEl.value) || e.target == inputEl.value || e.composedPath().includes(inputEl.value)) {
              return;
            }
            showPickerWidget.value = false;
          }
          onMounted(() => {
            document.addEventListener("mousedown", onClickOutsideWidget);
            document.addEventListener("touchend", onClickOutsideWidget);
          });
          onUnmounted(() => {
            document.removeEventListener("mousedown", onClickOutsideWidget);
            document.removeEventListener("touchend", onClickOutsideWidget);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [withDirectives(createElementVNode("input", {
              class: "form-control",
              type: "text",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              disabled: __props.disabled,
              onFocus: focusInput,
              onClick: focusInput,
              onBlur: onInputBlur,
              onKeydown: onMainInputKeyDown,
              ref_key: "inputEl",
              ref: inputEl
            }, null, 40, _hoisted_3), [[vModelText, unref(internalValue)]]), createElementVNode("span", {
              class: normalizeClass(["input-group-addon", {
                'disabled': __props.disabled
              }]),
              onClick: _cache[1] || (_cache[1] = $event => showPickerWidget.value = !showPickerWidget.value),
              ref_key: "toggleBtnEl",
              ref: toggleBtnEl
            }, _hoisted_5, 2)]), unref(internalValue) && !__props.disabled && !__props.hideClear ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: "fa fa-times js-timepicker-clear",
              onClick: withModifiers(clearPicker, ["prevent"])
            }, null, 8, _hoisted_6)) : createCommentVNode("v-if", true), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [showPickerWidget.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "bootstrap-timepicker-widget dropdown-menu timepicker-orient-left timepicker-orient-top open",
                ref_key: "widgetEl",
                ref: widgetEl
              }, [createElementVNode("table", null, [createElementVNode("tbody", null, [createElementVNode("tr", null, [createElementVNode("td", null, [createElementVNode("a", {
                href: "#",
                onClick: withModifiers(incrementHour, ["prevent"]),
                role: "button"
              }, _hoisted_9, 8, _hoisted_7)]), _hoisted_10, createElementVNode("td", null, [createElementVNode("a", {
                href: "#",
                onClick: withModifiers(incrementMinute, ["prevent"]),
                role: "button"
              }, _hoisted_13, 8, _hoisted_11)]), _hoisted_14, createElementVNode("td", null, [createElementVNode("a", {
                href: "#",
                onClick: withModifiers(toggleMeridiem, ["prevent"]),
                role: "button"
              }, _hoisted_17, 8, _hoisted_15)])]), createElementVNode("tr", null, [createElementVNode("td", null, [withDirectives(createElementVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(internalHour) ? internalHour.value = $event : null),
                class: "bootstrap-timepicker-hour",
                maxlength: "2",
                inputmode: "numeric",
                pattern: "(^\\d$)|(^1[0-2]$)",
                onClick: _cache[3] || (_cache[3] = e => {
                  var _e$target;
                  return (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.select();
                }),
                onKeydown: _cache[4] || (_cache[4] = e => onWidgetInputKeyDown(e, 'hour'))
              }, null, 544), [[vModelText, unref(internalHour)]])]), _hoisted_18, createElementVNode("td", null, [withDirectives(createElementVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(internalTextMinute) ? internalTextMinute.value = $event : null),
                class: "bootstrap-timepicker-minute",
                maxlength: "2",
                inputmode: "numeric",
                pattern: "",
                onClick: _cache[6] || (_cache[6] = e => {
                  var _e$target2;
                  return (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.select();
                }),
                onKeydown: _cache[7] || (_cache[7] = e => onWidgetInputKeyDown(e, 'minute')),
                onFocus: _cache[8] || (_cache[8] = $event => isMinuteFieldFocused.value = true),
                onBlur: _cache[9] || (_cache[9] = $event => isMinuteFieldFocused.value = false)
              }, null, 544), [[vModelText, unref(internalTextMinute)]])]), _hoisted_19, createElementVNode("td", null, [withDirectives(createElementVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isRef(internalMeridiem) ? internalMeridiem.value = $event : null),
                class: "bootstrap-timepicker-meridian",
                maxlength: "2",
                onClick: _cache[11] || (_cache[11] = e => {
                  var _e$target3;
                  return (_e$target3 = e.target) === null || _e$target3 === void 0 ? void 0 : _e$target3.select();
                }),
                onKeydown: _cache[12] || (_cache[12] = e => onWidgetInputKeyDown(e, 'meridiem'))
              }, null, 544), [[vModelText, unref(internalMeridiem)]])])]), createElementVNode("tr", null, [createElementVNode("td", null, [createElementVNode("a", {
                href: "#",
                onClick: withModifiers(decrementHour, ["prevent"]),
                role: "button"
              }, _hoisted_22, 8, _hoisted_20)]), _hoisted_23, createElementVNode("td", null, [createElementVNode("a", {
                href: "#",
                onClick: withModifiers(decrementMinute, ["prevent"]),
                role: "button"
              }, _hoisted_26, 8, _hoisted_24)]), _hoisted_27, createElementVNode("td", null, [createElementVNode("a", {
                href: "#",
                onClick: withModifiers(toggleMeridiem, ["prevent"]),
                role: "button"
              }, _hoisted_30, 8, _hoisted_28)])])])])], 512)) : createCommentVNode("v-if", true)]),
              _: 1
            })]);
          };
        }
      }));

      script.__file = "Framework/Controls/basicTimePicker.obs";

    })
  };
}));
//# sourceMappingURL=basicTimePicker.obs.js.map
