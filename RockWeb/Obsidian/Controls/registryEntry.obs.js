System.register(['vue', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', './rockFormField', '@Obsidian/ValidationRules'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, computed, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, renderSlot, withDirectives, vModelText, toNumberOrNull, toNumber, useStandardRockFormFieldProps, updateRefValue, standardRockFormFieldProps, RockFormField, normalizeRules;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      renderSlot = module.renderSlot;
      withDirectives = module.withDirectives;
      vModelText = module.vModelText;
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
      toNumber = module.toNumber;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      updateRefValue = module.updateRefValue;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      normalizeRules = module.normalizeRules;
    }],
    execute: (function () {

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "form-control-group row form-row"
      };
      var _hoisted_3 = {
        class: "col-sm-4"
      };
      var _hoisted_4 = ["id"];
      var _hoisted_5 = {
        class: "col-sm-4"
      };
      var _hoisted_6 = ["id"];
      var _hoisted_7 = {
        class: "col-sm-4"
      };
      var _hoisted_8 = ["id"];
      var script = exports('default', defineComponent({
        name: 'registryEntry',
        props: _objectSpread2({
          modelValue: {
            type: String,
            required: true
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var fieldProps = useStandardRockFormFieldProps(props);
          var volume = ref("");
          var page = ref("");
          var line = ref("");
          watch(volume, () => console.log("volume changed", volume.value));
          watch(page, () => console.log("page changed", page.value));
          watch(line, () => console.log("line changed", line.value));
          var internalValue = computed({
            get() {
              console.log("get internal", internalValue);
              return volume.value + "," + page.value + "," + line.value;
            },
            set(value) {
              var _toNumberOrNull$toStr, _toNumberOrNull, _toNumberOrNull$toStr2, _toNumberOrNull2, _toNumberOrNull$toStr3, _toNumberOrNull3;
              console.log("set internal", value);
              var parts = value.split(",");
              volume.value = (_toNumberOrNull$toStr = (_toNumberOrNull = toNumberOrNull(parts[0])) === null || _toNumberOrNull === void 0 ? void 0 : _toNumberOrNull.toString()) !== null && _toNumberOrNull$toStr !== void 0 ? _toNumberOrNull$toStr : "";
              page.value = (_toNumberOrNull$toStr2 = (_toNumberOrNull2 = toNumberOrNull(parts[1])) === null || _toNumberOrNull2 === void 0 ? void 0 : _toNumberOrNull2.toString()) !== null && _toNumberOrNull$toStr2 !== void 0 ? _toNumberOrNull$toStr2 : "";
              line.value = (_toNumberOrNull$toStr3 = (_toNumberOrNull3 = toNumberOrNull(parts[2])) === null || _toNumberOrNull3 === void 0 ? void 0 : _toNumberOrNull3.toString()) !== null && _toNumberOrNull$toStr3 !== void 0 ? _toNumberOrNull$toStr3 : "";
            }
          });
          var fieldRules = computed(() => {
            var rules = normalizeRules(props.rules);
            rules = rules.map(rule => {
              if (rule == "required") {
                return validateRequired;
              }
              return rule;
            });
            rules.push(validateNumeric, validateAllFieldsFilled);
            return rules;
          });
          watch(() => props.modelValue, () => {
            console.log("prop changed", props.modelValue);
            updateRefValue(internalValue, props.modelValue);
          });
          watch(internalValue, () => {
            console.log("internalvalue changes", internalValue.value);
            emit("update:modelValue", internalValue.value);
          });
          function validateRequired() {
            return !!volume.value.trim() && !!page.value.trim() && !!line.value.trim() || "is required.";
          }
          function validateAllFieldsFilled() {
            if ((volume.value.trim() || page.value.trim() || line.value.trim()) && !(volume.value.trim() && page.value.trim() && line.value.trim())) {
              return "is invalid. Please fill out Volume, Page, and Line.";
            }
            return true;
          }
          function validateNumeric() {
            var errs = [];
            console.log("validate volume numberic", !!volume.value.trim(), !toNumberOrNull(volume.value.trim()));
            if (volume.value.trim() && toNumber(volume.value.trim()) == 0) {
              errs.push("Volume");
            }
            console.log("validate page numberic", !!page.value.trim(), !toNumberOrNull(page.value.trim()));
            if (page.value.trim() && toNumber(page.value.trim()) == 0) {
              errs.push("Page");
            }
            console.log("validate line numberic", !!line.value.trim(), !toNumberOrNull(line.value.trim()));
            if (line.value.trim() && toNumber(line.value.trim()) == 0) {
              errs.push("Line");
            }
            if (errs.length == 0) {
              return true;
            }
            return "is invalid. " + errs.join(" and ") + " should be " + (errs.length == 1 ? "a number" : "numbers") + " greater than zero.";
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: unref(internalValue)
            }, unref(fieldProps), {
              formGroupClasses: 'registry-entry ' + _ctx.formGroupClasses,
              rules: unref(fieldRules),
              name: "textbox"
            }), {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId,
                  field = _ref2.field;
                return [createElementVNode("div", _hoisted_1, [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: false
                }), createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [withDirectives(createElementVNode("input", mergeProps({
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => volume.value = $event),
                  id: uniqueId,
                  type: "text",
                  class: "form-control"
                }, field, {
                  placeholder: "Volume",
                  inputmode: "numeric",
                  pattern: "[0-9]*"
                }), null, 16, _hoisted_4), [[vModelText, volume.value]])]), createElementVNode("div", _hoisted_5, [withDirectives(createElementVNode("input", mergeProps({
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => page.value = $event),
                  id: uniqueId + '-page',
                  type: "text",
                  class: "form-control"
                }, field, {
                  placeholder: "Page",
                  inputmode: "numeric",
                  pattern: "[0-9]*"
                }), null, 16, _hoisted_6), [[vModelText, page.value]])]), createElementVNode("div", _hoisted_7, [withDirectives(createElementVNode("input", mergeProps({
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => line.value = $event),
                  id: uniqueId + '-line',
                  type: "text",
                  class: "form-control"
                }, field, {
                  placeholder: "Line",
                  inputmode: "numeric",
                  pattern: "[0-9]*"
                }), null, 16, _hoisted_8), [[vModelText, line.value]])])]), renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: false
                })])];
              }),
              _: 3
            }, 16, ["modelValue", "formGroupClasses", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/registryEntry.obs";

    })
  };
}));
//# sourceMappingURL=registryEntry.obs.js.map
