System.register(['@Obsidian/Utility/component', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', 'vue', './rockLabel'], (function (exports) {
  'use strict';
  var standardRockFormFieldProps, useFormState, newGuid, normalizeRules, validateValue, defineComponent, ref, computed, watch, onBeforeUnmount, RockLabel;
  return {
    setters: [function (module) {
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      useFormState = module.useFormState;
    }, function (module) {
      newGuid = module.newGuid;
    }, function (module) {
      normalizeRules = module.normalizeRules;
      validateValue = module.validateValue;
    }, function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      onBeforeUnmount = module.onBeforeUnmount;
    }, function (module) {
      RockLabel = module["default"];
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

      var script = exports('default', defineComponent({
        name: "RockFormField",
        inheritAttrs: false,
        components: {
          RockLabel
        },
        compilerOptions: {
          whitespace: "preserve"
        },
        props: _objectSpread2({
          modelValue: {
            required: true
          },
          name: {
            type: String,
            required: true
          },
          disableLabel: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        setup(props) {
          var formState = useFormState();
          var uniqueId = "rock-".concat(props.name, "-").concat(newGuid());
          var internalValue = ref("");
          var internalRules = computed(() => normalizeRules(props.rules));
          var isRequired = computed(() => internalRules.value.includes("required"));
          var currentError = ref("");
          var errorClasses = computed(() => {
            if (!formState || formState.submitCount < 1) {
              return [];
            }
            return currentError.value !== "" ? ["has-error"] : [];
          });
          var fieldLabel = computed(() => {
            return props.validationTitle || props.label;
          });
          watch(() => [props.modelValue, props.rules], () => {
            internalValue.value = props.modelValue;
            var errors = validateValue(internalValue.value, props.rules);
            if (errors.length > 0) {
              currentError.value = errors[0];
              formState === null || formState === void 0 ? void 0 : formState.setError(uniqueId, fieldLabel.value, currentError.value);
            } else {
              currentError.value = "";
              formState === null || formState === void 0 ? void 0 : formState.setError(uniqueId, fieldLabel.value, "");
            }
          }, {
            immediate: true
          });
          onBeforeUnmount(() => {
            currentError.value = "";
            formState === null || formState === void 0 ? void 0 : formState.setError(uniqueId, fieldLabel.value, "");
          });
          return {
            errorClasses,
            fieldLabel,
            formState,
            isRequired,
            uniqueId
          };
        },
        template: "\n<slot name=\"pre\" />\n<div v-if=\"label || help || disableLabel\" class=\"form-group\" :class=\"[formGroupClasses, isRequired && !isRequiredIndicatorHidden ? 'required' : '', errorClasses]\">\n    <RockLabel :for=\"uniqueId\" :help=\"help\" v-if=\"!disableLabel\">\n        {{label}} <slot name=\"besideLabel\" />\n    </RockLabel>\n    <slot v-bind=\"{field: $attrs, uniqueId, errors, fieldLabel}\" />\n</div>\n<slot v-else v-bind=\"{field: $attrs, uniqueId, errors, fieldLabel}\" />\n<slot name=\"post\" />\n"
      }));

      script.__file = "Framework/Controls/rockFormField.obs";

    })
  };
}));
//# sourceMappingURL=rockFormField.obs.js.map
