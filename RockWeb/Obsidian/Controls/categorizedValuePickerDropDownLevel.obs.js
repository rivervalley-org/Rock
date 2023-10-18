System.register(['vue', '@Obsidian/Utility/component', './dropDownList', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, resolveComponent, openBlock, createElementBlock, Fragment, unref, createBlock, mergeProps, createCommentVNode, nextTick, useStandardRockFormFieldProps, updateRefValue, standardRockFormFieldProps, DropDownList, emptyGuid, newGuid;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      resolveComponent = module.resolveComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      unref = module.unref;
      createBlock = module.createBlock;
      mergeProps = module.mergeProps;
      createCommentVNode = module.createCommentVNode;
      nextTick = module.nextTick;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      updateRefValue = module.updateRefValue;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      emptyGuid = module.emptyGuid;
      newGuid = module.newGuid;
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
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
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
        name: 'categorizedValuePickerDropDownLevel',
        props: _objectSpread2({
          modelValue: {
            type: String,
            default: ""
          },
          root: {
            type: Object,
            required: true
          },
          definedTypeName: {
            type: String,
            required: true
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _internalValue$value$, _internalValue$value;
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref(props.modelValue);
          var selectedCategory = ref("");
          var selectedValue = ref((_internalValue$value$ = (_internalValue$value = internalValue.value) === null || _internalValue$value === void 0 ? void 0 : _internalValue$value.value) !== null && _internalValue$value$ !== void 0 ? _internalValue$value$ : "");
          var formFieldProps = useStandardRockFormFieldProps(props);
          var willSkipWatchTriggers = false;
          var internalRoot = computed(() => {
            var root = props.root;
            if (!root) {
              return null;
            }
            while (root && ((_root$childCategories = root.childCategories) === null || _root$childCategories === void 0 ? void 0 : _root$childCategories.length) == 1 && (!root.childValues || root.childValues.length == 0)) {
              var _root$childCategories;
              root = root.childCategories[0];
            }
            return root;
          });
          var hasCategories = computed(() => {
            var _ref2, _internalRoot$value;
            return (_ref2 = ((_internalRoot$value = internalRoot.value) === null || _internalRoot$value === void 0 ? void 0 : _internalRoot$value.childCategories) && internalRoot.value.childCategories.length > 0) !== null && _ref2 !== void 0 ? _ref2 : false;
          });
          var hasValues = computed(() => {
            var _ref3, _internalRoot$value2;
            return (_ref3 = ((_internalRoot$value2 = internalRoot.value) === null || _internalRoot$value2 === void 0 ? void 0 : _internalRoot$value2.childValues) && internalRoot.value.childValues.length > 0) !== null && _ref3 !== void 0 ? _ref3 : false;
          });
          var categoryOptions = computed(() => {
            if (hasValues.value) {
              var _internalRoot$value$c, _internalRoot$value3;
              return [{
                text: "All Categories",
                value: emptyGuid
              }, ...((_internalRoot$value$c = (_internalRoot$value3 = internalRoot.value) === null || _internalRoot$value3 === void 0 ? void 0 : _internalRoot$value3.childCategories) !== null && _internalRoot$value$c !== void 0 ? _internalRoot$value$c : [])];
            } else {
              var _internalRoot$value$c2, _internalRoot$value4;
              return (_internalRoot$value$c2 = (_internalRoot$value4 = internalRoot.value) === null || _internalRoot$value4 === void 0 ? void 0 : _internalRoot$value4.childCategories) !== null && _internalRoot$value$c2 !== void 0 ? _internalRoot$value$c2 : [];
            }
          });
          var fullSelectedCategory = computed(() => {
            if (selectedCategory.value == "" || selectedCategory.value == emptyGuid) {
              return null;
            } else {
              var _internalRoot$value$c3, _internalRoot$value5, _internalRoot$value5$;
              return (_internalRoot$value$c3 = (_internalRoot$value5 = internalRoot.value) === null || _internalRoot$value5 === void 0 ? void 0 : (_internalRoot$value5$ = _internalRoot$value5.childCategories) === null || _internalRoot$value5$ === void 0 ? void 0 : _internalRoot$value5$.find(cat => cat.value == selectedCategory.value)) !== null && _internalRoot$value$c3 !== void 0 ? _internalRoot$value$c3 : null;
            }
          });
          var showValues = computed(() => {
            return hasValues.value && (selectedCategory.value == emptyGuid || !hasCategories.value);
          });
          var showNextLevel = computed(() => {
            return fullSelectedCategory.value !== null;
          });
          watch(selectedCategory, () => {
            if (willSkipWatchTriggers) {
              return;
            }
            if (selectedValue.value == "" && internalValue.value != null) {
              internalValue.value = null;
            }
            selectedValue.value = "";
          });
          watch(selectedValue, () => {
            var _internalRoot$value6, _internalRoot$value6$;
            if (willSkipWatchTriggers) {
              return;
            }
            if (!selectedValue.value) {
              internalValue.value = null;
            }
            var fullSelectedValue = (_internalRoot$value6 = internalRoot.value) === null || _internalRoot$value6 === void 0 ? void 0 : (_internalRoot$value6$ = _internalRoot$value6.childValues) === null || _internalRoot$value6$ === void 0 ? void 0 : _internalRoot$value6$.find(v => v.value == selectedValue.value);
            if (fullSelectedValue) {
              updateRefValue(internalValue, {
                text: fullSelectedValue.text,
                value: fullSelectedValue.value
              });
            } else {
              internalValue.value = null;
            }
          });
          watch(() => props.modelValue, val => {
            if (updateRefValue(internalValue, val)) {
              setBasedOnModelValue();
            }
          });
          watch(internalValue, () => emit("update:modelValue", internalValue.value));
          function setBasedOnModelValue() {
            var _internalRoot$value7, _internalRoot$value7$, _internalRoot$value$c4, _internalRoot$value8;
            var value = internalValue.value != null && ((_internalRoot$value7 = internalRoot.value) === null || _internalRoot$value7 === void 0 ? void 0 : (_internalRoot$value7$ = _internalRoot$value7.childValues) === null || _internalRoot$value7$ === void 0 ? void 0 : _internalRoot$value7$.find(v => {
              var _internalValue$value2;
              return v.value == ((_internalValue$value2 = internalValue.value) === null || _internalValue$value2 === void 0 ? void 0 : _internalValue$value2.value);
            }));
            if (value) {
              selectedCategory.value = emptyGuid;
              selectedValue.value = value.value;
              skipWatchTriggers();
              return;
            }
            selectedValue.value = "";
            if (internalValue.value == null) {
              return;
            }
            var containingCategory = null;
            var _iterator = _createForOfIteratorHelper((_internalRoot$value$c4 = (_internalRoot$value8 = internalRoot.value) === null || _internalRoot$value8 === void 0 ? void 0 : _internalRoot$value8.childCategories) !== null && _internalRoot$value$c4 !== void 0 ? _internalRoot$value$c4 : []),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var category = _step.value;
                if (hasDescendantValue(category, internalValue.value)) {
                  containingCategory = category;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            if (containingCategory) {
              selectedCategory.value = containingCategory.value;
              skipWatchTriggers();
              return;
            }
          }
          function hasDescendantValue(base, valToFind) {
            var _base$childValues, _base$childCategories;
            var isValFound = (_base$childValues = base.childValues) === null || _base$childValues === void 0 ? void 0 : _base$childValues.find(v => v.value == valToFind.value);
            if (isValFound) {
              return true;
            }
            var _iterator2 = _createForOfIteratorHelper((_base$childCategories = base.childCategories) !== null && _base$childCategories !== void 0 ? _base$childCategories : []),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var category = _step2.value;
                if (hasDescendantValue(category, valToFind)) {
                  return true;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            return false;
          }
          function skipWatchTriggers() {
            return _skipWatchTriggers.apply(this, arguments);
          }
          function _skipWatchTriggers() {
            _skipWatchTriggers = _asyncToGenerator(function* () {
              willSkipWatchTriggers = true;
              yield nextTick();
              willSkipWatchTriggers = false;
            });
            return _skipWatchTriggers.apply(this, arguments);
          }
          if (internalValue.value && internalValue.value.value) {
            setBasedOnModelValue();
          }
          return (_ctx, _cache) => {
            var _unref2, _unref3, _unref4, _unref$childValues, _unref5, _unref6, _unref7, _unref$value, _unref8;
            var _component_CategorizedValuePickerDropDownLevel = resolveComponent("CategorizedValuePickerDropDownLevel", true);
            return openBlock(), createElementBlock(Fragment, null, [unref(hasCategories) ? (openBlock(), createBlock(unref(DropDownList), mergeProps({
              key: 0
            }, unref(formFieldProps), {
              label: ((_unref2 = unref(internalRoot)) === null || _unref2 === void 0 ? void 0 : _unref2.text) + ' Category',
              modelValue: selectedCategory.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => selectedCategory.value = $event),
              items: unref(categoryOptions),
              showBlankItem: !unref(hasValues),
              multiple: false,
              key: 'cats-of-' + (((_unref3 = unref(internalRoot)) === null || _unref3 === void 0 ? void 0 : _unref3.value) || ((_unref4 = unref(internalRoot)) === null || _unref4 === void 0 ? void 0 : _unref4.text))
            }), null, 16, ["label", "modelValue", "items", "showBlankItem"])) : createCommentVNode("v-if", true), unref(showValues) ? (openBlock(), createBlock(unref(DropDownList), mergeProps({
              key: 1
            }, unref(formFieldProps), {
              label: __props.definedTypeName,
              modelValue: selectedValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => selectedValue.value = $event),
              items: (_unref$childValues = (_unref5 = unref(internalRoot)) === null || _unref5 === void 0 ? void 0 : _unref5.childValues) !== null && _unref$childValues !== void 0 ? _unref$childValues : [],
              showBlankItem: "",
              multiple: false,
              key: 'vals-of-' + (((_unref6 = unref(internalRoot)) === null || _unref6 === void 0 ? void 0 : _unref6.value) || ((_unref7 = unref(internalRoot)) === null || _unref7 === void 0 ? void 0 : _unref7.text))
            }), null, 16, ["label", "modelValue", "items"])) : createCommentVNode("v-if", true), unref(showNextLevel) ? (openBlock(), createBlock(_component_CategorizedValuePickerDropDownLevel, mergeProps({
              key: 2
            }, unref(formFieldProps), {
              modelValue: internalValue.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => internalValue.value = $event),
              root: unref(fullSelectedCategory),
              definedTypeName: __props.definedTypeName,
              key: (_unref$value = (_unref8 = unref(fullSelectedCategory)) === null || _unref8 === void 0 ? void 0 : _unref8.value) !== null && _unref$value !== void 0 ? _unref$value : unref(newGuid)()
            }), null, 16, ["modelValue", "root", "definedTypeName"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "Framework/Controls/categorizedValuePickerDropDownLevel.obs";

    })
  };
}));
//# sourceMappingURL=categorizedValuePickerDropDownLevel.obs.js.map
