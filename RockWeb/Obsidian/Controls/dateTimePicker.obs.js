System.register(['vue', '@Obsidian/Utility/numberUtils', './rockFormField.obs', './textBox.obs', './basicTimePicker.obs', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/rockDateTime'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, onMounted, openBlock, createBlock, unref, withCtx, withDirectives, vModelText, createVNode, createElementBlock, vModelCheckbox, createCommentVNode, toNumber, RockFormField, TextBox, BasicTimePicker, padLeft, RockDateTime;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      vModelText = module.vModelText;
      createVNode = module.createVNode;
      createElementBlock = module.createElementBlock;
      vModelCheckbox = module.vModelCheckbox;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      BasicTimePicker = module["default"];
    }, function (module) {
      padLeft = module.padLeft;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "form-control-group"
      };
      var _hoisted_3 = {
        class: "form-row"
      };
      var _hoisted_4 = {
        class: "input-group input-width-md js-date-picker date"
      };
      var _hoisted_5 = ["id", "disabled"];
      var _hoisted_6 = createElementVNode("span", {
        class: "input-group-addon"
      }, [createElementVNode("i", {
        class: "fa fa-calendar"
      })], -1);
      var _hoisted_7 = {
        key: 0,
        class: "input-group"
      };
      var _hoisted_8 = {
        class: "checkbox"
      };
      var _hoisted_9 = {
        title: ""
      };
      var _hoisted_10 = createElementVNode("span", {
        class: "label-text"
      }, "Current Time", -1);
      var _hoisted_11 = {
        key: 0,
        class: "form-row"
      };
      var script = exports('default', defineComponent({
        name: 'dateTimePicker',
        props: {
          modelValue: {
            type: String,
            default: null
          },
          displayCurrentOption: {
            type: Boolean,
            default: false
          },
          isCurrentDateOffset: {
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
          var input = ref();
          var internalDateValue = ref(null);
          var internalTimeValue = ref({});
          var isCurrent = ref(false);
          var currentDiff = ref("0");
          var skipEmit = false;
          var asRockDateTimeOrNull = computed(() => {
            if (internalDateValue.value) {
              var _internalDateValue$va;
              var dateMatch = /^(\d+)\/(\d+)\/(\d+)/.exec((_internalDateValue$va = internalDateValue.value) !== null && _internalDateValue$va !== void 0 ? _internalDateValue$va : "");
              if (dateMatch === null) {
                return null;
              }
              var date;
              if (internalTimeValue.value.hour !== undefined && internalTimeValue.value.minute !== undefined) {
                date = RockDateTime.fromParts(toNumber(dateMatch[3]), toNumber(dateMatch[1]), toNumber(dateMatch[2]), internalTimeValue.value.hour, internalTimeValue.value.minute);
              } else {
                date = RockDateTime.fromParts(toNumber(dateMatch[3]), toNumber(dateMatch[1]), toNumber(dateMatch[2]));
              }
              if (date === null) {
                return null;
              }
              var year = date.year.toString();
              var month = padLeft(date.month.toString(), 2, "0");
              var day = padLeft(date.day.toString(), 2, "0");
              var hour = padLeft(date.hour.toString(), 2, "0");
              var minute = padLeft(date.minute.toString(), 2, "0");
              var second = padLeft(date.second.toString(), 2, "0");
              var millisecond = padLeft(date.millisecond.toString(), 3, "0");
              return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second, ".").concat(millisecond);
            } else {
              return null;
            }
          });
          var asCurrentDateValue = computed(() => {
            var plusMinus = "".concat(toNumber(currentDiff.value));
            return "CURRENT:".concat(plusMinus);
          });
          var valueToEmit = computed(() => {
            var _asRockDateTimeOrNull;
            if (isCurrent.value) {
              return asCurrentDateValue.value;
            }
            return (_asRockDateTimeOrNull = asRockDateTimeOrNull.value) !== null && _asRockDateTimeOrNull !== void 0 ? _asRockDateTimeOrNull : "";
          });
          var isDisabled = computed(() => {
            return isCurrent.value || props.disabled;
          });
          watch(() => props.isCurrentDateOffset, () => {
            if (!props.isCurrentDateOffset) {
              currentDiff.value = "0";
            }
          }, {
            immediate: true
          });
          watch(valueToEmit, () => {
            if (!skipEmit) {
              emit("update:modelValue", valueToEmit.value);
            }
          });
          watch(() => props.modelValue, () => {
            if (!props.modelValue) {
              internalDateValue.value = null;
              internalTimeValue.value = {};
              isCurrent.value = false;
              currentDiff.value = "0";
              return;
            }
            if (props.modelValue.indexOf("CURRENT") === 0) {
              var parts = props.modelValue.split(":");
              if (parts.length === 2) {
                currentDiff.value = "".concat(toNumber(parts[1]));
              }
              isCurrent.value = true;
              return;
            }
            var date = RockDateTime.parseISO(props.modelValue);
            skipEmit = true;
            if (date === null) {
              internalDateValue.value = null;
              internalTimeValue.value = {};
            } else {
              internalDateValue.value = "".concat(date.month, "/").concat(date.day, "/").concat(date.year);
              internalTimeValue.value = {
                hour: date.hour,
                minute: date.minute
              };
            }
            skipEmit = false;
          }, {
            immediate: true
          });
          watch(() => props.displayCurrentOption, () => {
            if (!props.displayCurrentOption && isCurrent.value) {
              internalDateValue.value = null;
              internalTimeValue.value = {};
              isCurrent.value = false;
              currentDiff.value = "0";
            }
          });
          onMounted(() => {
            var inputElement = input.value;
            if (!inputElement) {
              return;
            }
            window.Rock.controls.datePicker.initialize({
              id: inputElement.id,
              startView: 0,
              showOnFocus: true,
              format: "mm/dd/yyyy",
              todayHighlight: true,
              forceParse: true,
              onChangeScript: () => {
                if (!isCurrent.value) {
                  internalDateValue.value = inputElement.value;
                }
              }
            });
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              formGroupClasses: "date-time-picker",
              name: "datepicker",
              modelValue: internalDateValue.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => internalDateValue.value = $event),
              modelModifiers: {
                lazy: true
              }
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [withDirectives(createElementVNode("input", {
                  ref_key: "input",
                  ref: input,
                  type: "text",
                  id: uniqueId,
                  class: "form-control",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalDateValue.value = $event),
                  disabled: unref(isDisabled)
                }, null, 8, _hoisted_5), [[vModelText, internalDateValue.value, void 0, {
                  lazy: true
                }]]), _hoisted_6]), createVNode(unref(BasicTimePicker), {
                  modelValue: internalTimeValue.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalTimeValue.value = $event),
                  disabled: unref(isDisabled),
                  hideClear: ""
                }, null, 8, ["modelValue", "disabled"]), __props.displayCurrentOption ? (openBlock(), createElementBlock("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [createElementVNode("label", _hoisted_9, [withDirectives(createElementVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isCurrent.value = $event)
                }, null, 512), [[vModelCheckbox, isCurrent.value]]), _hoisted_10])])])) : createCommentVNode("v-if", true)]), isCurrent.value && __props.isCurrentDateOffset ? (openBlock(), createElementBlock("div", _hoisted_11, [createVNode(unref(TextBox), {
                  label: "+- Minutes",
                  modelValue: currentDiff.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => currentDiff.value = $event),
                  inputClasses: "input-width-md",
                  help: "Enter the number of minutes after the current time to use as the date. Use a negative number to specify minutes before."
                }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true)])])];
              }),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/dateTimePicker.obs";

    })
  };
}));
//# sourceMappingURL=dateTimePicker.obs.js.map
