System.register(['vue', '@Obsidian/ValidationRules', './rockFormField.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, withDirectives, vModelText, nextTick, rulesPropType, normalizeRules, RockFormField;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      vModelText = module.vModelText;
      nextTick = module.nextTick;
    }, function (module) {
      rulesPropType = module.rulesPropType;
      normalizeRules = module.normalizeRules;
    }, function (module) {
      RockFormField = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "form-control-group"
      };
      var _hoisted_3 = createElementVNode("span", {
        class: "separator"
      }, "-", -1);
      var _hoisted_4 = createElementVNode("span", {
        class: "separator"
      }, "-", -1);
      var script = exports('default', defineComponent({
        name: 'socialSecurityNumberBox',
        props: {
          rules: rulesPropType,
          modelValue: {
            type: String,
            default: ""
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalArea = ref("");
          var internalGroup = ref("");
          var internalSerial = ref("");
          var internalValue = ref("");
          var area = ref();
          var group = ref();
          var serial = ref();
          var computedRules = computed(() => {
            var rules = normalizeRules(props.rules);
            rules.push("ssn");
            return rules;
          });
          function getValue() {
            var value = "".concat(internalArea.value).concat(internalGroup.value).concat(internalSerial.value);
            return value;
          }
          function keyPress(e) {
            if (/^[0-9]$/.test(e.key) === false) {
              e.preventDefault();
              return false;
            }
            return true;
          }
          function keyUp(e) {
            if (/^[0-9]$/.test(e.key) === false) {
              return true;
            }
            if (area.value === e.target && area.value.selectionStart === 3) {
              nextTick(() => {
                var _group$value, _group$value2;
                (_group$value = group.value) === null || _group$value === void 0 ? void 0 : _group$value.focus();
                (_group$value2 = group.value) === null || _group$value2 === void 0 ? void 0 : _group$value2.setSelectionRange(0, 2);
              });
            } else if (group.value === e.target && group.value.selectionStart === 2) {
              nextTick(() => {
                var _serial$value, _serial$value2;
                (_serial$value = serial.value) === null || _serial$value === void 0 ? void 0 : _serial$value.focus();
                (_serial$value2 = serial.value) === null || _serial$value2 === void 0 ? void 0 : _serial$value2.setSelectionRange(0, 4);
              });
            }
            return true;
          }
          watch(() => props.modelValue, () => {
            var strippedValue = props.modelValue.replace(/[^0-9]/g, "");
            if (strippedValue.length !== 9) {
              internalArea.value = "";
              internalGroup.value = "";
              internalSerial.value = "";
            } else {
              internalArea.value = strippedValue.substring(0, 3);
              internalGroup.value = strippedValue.substring(3, 5);
              internalSerial.value = strippedValue.substring(5, 9);
            }
            internalValue.value = getValue();
          }, {
            immediate: true
          });
          watch([internalArea, internalGroup, internalSerial], () => {
            internalValue.value = getValue();
            if (internalValue.value.length === 0 || internalValue.value.length === 9) {
              emit("update:modelValue", internalValue.value);
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: internalValue.value,
              formGroupClasses: "social-security-number-box",
              name: "social-security-number-box",
              rules: unref(computedRules)
            }, {
              default: withCtx(_ref2 => {
                _ref2.uniqueId;
                  _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [withDirectives(createElementVNode("input", {
                  ref_key: "area",
                  ref: area,
                  class: "form-control ssn-part ssn-area",
                  type: "password",
                  pattern: "[0-9]*",
                  maxlength: "3",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalArea.value = $event),
                  onKeypress: keyPress,
                  onKeyup: keyUp
                }, null, 544), [[vModelText, internalArea.value]]), _hoisted_3, withDirectives(createElementVNode("input", {
                  ref_key: "group",
                  ref: group,
                  class: "form-control ssn-part ssn-group",
                  type: "password",
                  pattern: "[0-9]*",
                  maxlength: "2",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalGroup.value = $event),
                  onKeypress: keyPress,
                  onKeyup: keyUp
                }, null, 544), [[vModelText, internalGroup.value]]), _hoisted_4, withDirectives(createElementVNode("input", {
                  ref_key: "serial",
                  ref: serial,
                  class: "form-control ssn-part ssn-serial",
                  type: "text",
                  pattern: "[0-9]*",
                  maxlength: "4",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => internalSerial.value = $event),
                  onKeypress: keyPress,
                  onKeyup: keyUp
                }, null, 544), [[vModelText, internalSerial.value]])])])];
              }),
              _: 1
            }, 8, ["modelValue", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/socialSecurityNumberBox.obs";

    })
  };
}));
//# sourceMappingURL=socialSecurityNumberBox.obs.js.map
