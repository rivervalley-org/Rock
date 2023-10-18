System.register(['vue', '@Obsidian/Utility/form', '@Obsidian/Utility/component', './rockValidation'], (function (exports) {
  'use strict';
  var defineComponent, ref, reactive, watch, provideFormState, updateRefValue, RockValidation;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      reactive = module.reactive;
      watch = module.watch;
    }, function (module) {
      provideFormState = module.provideFormState;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      RockValidation = module["default"];
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

      var rockForm = exports('default', defineComponent({
        name: "RockForm",
        components: {
          RockValidation
        },
        props: {
          submit: {
            type: Boolean,
            default: false
          },
          hideErrors: {
            type: Boolean,
            default: false
          },
          formResetKey: {
            type: String,
            default: ""
          }
        },
        emits: {
          "submit": () => true,
          "validationChanged": _errors => true,
          "visibleValidationChanged": _errors => true,
          "update:submit": _value => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var visibleErrors = ref([]);
          var errorValues = ref([]);
          var errors = ref({});
          var submit = ref(props.submit);
          var onInternalSubmit = () => {
            submit.value = true;
          };
          var formState = reactive({
            submitCount: 0,
            setError: (id, name, error) => {
              var newErrors = _objectSpread2({}, errors.value);
              if (error) {
                newErrors[id] = {
                  name,
                  text: error
                };
              } else {
                delete newErrors[id];
              }
              updateRefValue(errors, newErrors);
            }
          });
          provideFormState(formState);
          watch(() => props.submit, () => {
            if (submit.value !== props.submit) {
              submit.value = props.submit;
            }
          });
          watch(submit, () => {
            if (submit.value) {
              formState.submitCount++;
              visibleErrors.value = errorValues.value;
              emit("visibleValidationChanged", visibleErrors.value);
              if (Object.keys(errors.value).length === 0) {
                emit("submit");
              }
              submit.value = false;
            }
            emit("update:submit", submit.value);
          });
          watch(errors, () => {
            var values = [];
            for (var key in errors.value) {
              values.push(errors.value[key]);
            }
            errorValues.value = values;
            emit("validationChanged", errorValues.value);
          });
          watch(() => props.formResetKey, () => {
            formState.submitCount = 0;
            updateRefValue(errors, {});
            updateRefValue(visibleErrors, []);
            emit("visibleValidationChanged", visibleErrors.value);
          });
          return {
            errors,
            visibleErrors,
            onInternalSubmit
          };
        },
        template: "\n<form @submit.prevent.stop=\"onInternalSubmit()\">\n    <RockValidation v-if=\"!hideErrors\" :errors=\"visibleErrors\" />\n    <slot />\n</form>\n"
      }));

    })
  };
}));
//# sourceMappingURL=rockForm.js.map
