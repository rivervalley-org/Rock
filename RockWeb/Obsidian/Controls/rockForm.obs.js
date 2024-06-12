System.register(['vue', '@Obsidian/Utility/form', '@Obsidian/Utility/component', './rockValidation.obs', '@Obsidian/Utility/promiseUtils'], (function (exports) {
  'use strict';
  var defineComponent, ref, reactive, watch, openBlock, createElementBlock, withModifiers, createBlock, unref, createCommentVNode, renderSlot, provideFormState, updateRefValue, RockValidation, isPromise;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      reactive = module.reactive;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      withModifiers = module.withModifiers;
      createBlock = module.createBlock;
      unref = module.unref;
      createCommentVNode = module.createCommentVNode;
      renderSlot = module.renderSlot;
    }, function (module) {
      provideFormState = module.provideFormState;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      RockValidation = module["default"];
    }, function (module) {
      isPromise = module.isPromise;
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
        name: 'rockForm',
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
          },
          onSubmit: {
            type: Function,
            required: false
          }
        },
        emits: ["validationChanged", "visibleValidationChanged", "update:submit"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
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
          watch(submit, _asyncToGenerator(function* () {
            if (submit.value) {
              formState.submitCount++;
              visibleErrors.value = errorValues.value;
              emit("visibleValidationChanged", visibleErrors.value);
              try {
                if (Object.keys(errors.value).length === 0) {
                  var submitHandler = props.onSubmit;
                  if (submitHandler) {
                    var result = submitHandler();
                    if (isPromise(result)) {
                      yield result;
                    }
                  }
                }
              } finally {
                submit.value = false;
              }
            }
            emit("update:submit", submit.value);
          }));
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
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("form", {
              onSubmit: _cache[0] || (_cache[0] = withModifiers($event => onInternalSubmit(), ["prevent", "stop"]))
            }, [!__props.hideErrors ? (openBlock(), createBlock(unref(RockValidation), {
              key: 0,
              errors: visibleErrors.value
            }, null, 8, ["errors"])) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")], 32);
          };
        }
      }));

      script.__file = "Framework/Controls/rockForm.obs";

    })
  };
}));
//# sourceMappingURL=rockForm.obs.js.map
