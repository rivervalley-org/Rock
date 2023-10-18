System.register(['vue', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/Utility/component', '@Obsidian/Utility/guid', '@Obsidian/Utility/http', '@Obsidian/Utility/suspense', '@Obsidian/ValidationRules', './baseAsyncPicker'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, unref, openBlock, createBlock, mergeProps, isRef, createCommentVNode, PickerDisplayStyle, useVModelPassthrough, useStandardAsyncPickerProps, standardAsyncPickerProps, areEqual, useHttp, useSuspense, containsRequiredRule, BaseAsyncPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      unref = module.unref;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      mergeProps = module.mergeProps;
      isRef = module.isRef;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      PickerDisplayStyle = module.PickerDisplayStyle;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
      standardAsyncPickerProps = module.standardAsyncPickerProps;
    }, function (module) {
      areEqual = module.areEqual;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      useSuspense = module.useSuspense;
    }, function (module) {
      containsRequiredRule = module.containsRequiredRule;
    }, function (module) {
      BaseAsyncPicker = module["default"];
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
        name: 'campusPicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          forceVisible: {
            type: Boolean,
            default: false
          },
          includeInactive: {
            type: Boolean,
            default: false
          },
          campusTypeFilter: {
            type: [String, Array],
            required: false
          },
          campusStatusFilter: {
            type: [String, Array],
            required: false
          }
        }, standardAsyncPickerProps),
        emits: ["update:modelValue", "isVisible"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var standardProps = useStandardAsyncPickerProps(props);
          var http = useHttp();
          var loadedItems = ref(null);
          var actualItems = computed(() => {
            if (loadedItems.value) {
              return filterAndConvertItems(loadedItems.value);
            }
            return loadOptions;
          });
          var displayStyle = computed(() => {
            if (standardProps.displayStyle !== PickerDisplayStyle.Auto) {
              return standardProps.displayStyle;
            }
            return standardProps.multiple ? PickerDisplayStyle.List : PickerDisplayStyle.Auto;
          });
          var isPickerVisible = computed(() => {
            if (props.forceVisible) {
              emit("isVisible", true);
              return true;
            }
            if (!loadedItems.value) {
              emit("isVisible", false);
              return false;
            }
            var isVisible = filterAndConvertItems(loadedItems.value).length > 1;
            emit("isVisible", isVisible);
            return isVisible;
          });
          var calculatedStatusFilters = computed(() => {
            if (!props.campusStatusFilter) {
              return [];
            } else if (Array.isArray(props.campusStatusFilter)) {
              return [...props.campusStatusFilter];
            } else {
              return [props.campusStatusFilter];
            }
          });
          var calculatedTypeFilters = computed(() => {
            if (!props.campusTypeFilter) {
              return [];
            } else if (Array.isArray(props.campusTypeFilter)) {
              return [...props.campusTypeFilter];
            } else {
              return [props.campusTypeFilter];
            }
          });
          function loadOptions() {
            return _loadOptions.apply(this, arguments);
          }
          function _loadOptions() {
            _loadOptions = _asyncToGenerator(function* () {
              var options = {};
              var result = yield http.post("/api/v2/Controls/CampusPickerGetCampuses", undefined, options);
              if (result.isSuccess && result.data) {
                loadedItems.value = result.data;
                var items = filterAndConvertItems(result.data);
                var noSelection = !internalValue.value || Array.isArray(internalValue.value) && !internalValue.value.length || !Array.isArray(internalValue.value) && !internalValue.value.value;
                if (noSelection && containsRequiredRule(props.rules) && items.length === 1) {
                  internalValue.value = items[0];
                }
                return items;
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                loadedItems.value = [];
                return [];
              }
            });
            return _loadOptions.apply(this, arguments);
          }
          function filterAndConvertItems(campuses) {
            return campuses.filter(isCampusIncluded).map(c => ({
              value: c.value,
              text: c.text
            }));
          }
          function isCampusIncluded(campus) {
            var isIncluded = true;
            var currentValues = !internalValue.value ? [] : Array.isArray(internalValue.value) ? internalValue.value.map(c => c.value) : [internalValue.value.value];
            if (!props.includeInactive && !campus.isActive) {
              isIncluded = false;
            }
            if (calculatedStatusFilters.value.length > 0) {
              if (!calculatedStatusFilters.value.some(g => areEqual(g, campus.campusStatus))) {
                isIncluded = false;
              }
            }
            if (calculatedTypeFilters.value.length > 0) {
              if (!calculatedTypeFilters.value.some(g => areEqual(g, campus.campusType))) {
                isIncluded = false;
              }
            }
            if (currentValues.some(g => areEqual(g, campus.value))) {
              isIncluded = true;
            }
            return isIncluded;
          }
          if (!props.forceVisible) {
            var suspense = useSuspense();
            if (suspense) {
              suspense.addOperation(loadOptions());
            } else {
              loadOptions();
            }
          }
          return (_ctx, _cache) => {
            return unref(isPickerVisible) ? (openBlock(), createBlock(unref(BaseAsyncPicker), mergeProps({
              key: 0,
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null)
            }, unref(standardProps), {
              displayStyle: unref(displayStyle),
              items: unref(actualItems)
            }), null, 16, ["modelValue", "displayStyle", "items"])) : createCommentVNode("v-if", true);
          };
        }
      }));

      script.__file = "Framework/Controls/campusPicker.obs";

    })
  };
}));
//# sourceMappingURL=campusPicker.obs.js.map
