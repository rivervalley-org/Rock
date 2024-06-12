System.register(['vue', './utils', '@Obsidian/Controls/treeItemPicker.obs', '@Obsidian/Utility/http', '@Obsidian/Utility/component', '@Obsidian/Utility/booleanUtils'], (function (exports) {
  'use strict';
  var defineComponent, ref, inject, computed, watch, getFieldEditorProps, TreeItemPicker, post, updateRefValue, useVModelPassthrough, asBoolean;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      inject = module.inject;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
    }, function (module) {
      TreeItemPicker = module["default"];
    }, function (module) {
      post = module.post;
    }, function (module) {
      updateRefValue = module.updateRefValue;
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      asBoolean = module.asBoolean;
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

      class UniversalTreeItemProvider {
        constructor(restUrl, context, selectableItemTypes) {
          _defineProperty(this, "selectableItemTypes", null);
          this.restUrl = restUrl;
          this.context = context;
          if (selectableItemTypes) {
            try {
              this.selectableItemTypes = JSON.parse(selectableItemTypes);
            } catch (_unused) {
              console.warn("Unable to decode selectable item types: ".concat(selectableItemTypes));
              this.selectableItemTypes = null;
            }
          }
        }
        getItems(parentValue, expandToValues) {
          var _this = this;
          return _asyncToGenerator(function* () {
            if (!_this.restUrl) {
              return [];
            }
            var options = {
              parentValue: parentValue,
              expandToValues: expandToValues,
              securityGrantToken: _this.securityGrantToken,
              context: _this.context
            };
            var response = yield post(_this.restUrl, {}, options);
            if (response.isSuccess && response.data && typeof response.data === "object" && Array.isArray(response.data)) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems(expandToValues) {
          var _this2 = this;
          return _asyncToGenerator(function* () {
            return yield _this2.getItems(null, expandToValues);
          })();
        }
        getChildItems(item) {
          var _this3 = this;
          return _asyncToGenerator(function* () {
            return _this3.getItems(item.value, null);
          })();
        }
        canSelectItem(item) {
          if (this.selectableItemTypes === null) {
            return true;
          }
          return item.type !== null && item.type !== undefined && this.selectableItemTypes.includes(item.type);
        }
      }
      var EditComponent = exports('EditComponent', defineComponent({
        name: "UniversalTreeItemPickerField.Edit",
        components: {
          TreeItemPicker
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var _inject, _props$configurationV, _props$configurationV2;
          var emit = _ref.emit;
          var internalValue = ref(getModelValue());
          var isRequired = (_inject = inject("isRequired")) !== null && _inject !== void 0 ? _inject : false;
          var itemProvider = new UniversalTreeItemProvider((_props$configurationV = props.configurationValues["rootRestUrl"]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "", (_props$configurationV2 = props.configurationValues["context"]) !== null && _props$configurationV2 !== void 0 ? _props$configurationV2 : null, props.configurationValues["selectableItemTypes"]);
          var iconCssClass = computed(() => {
            var _props$configurationV3;
            return (_props$configurationV3 = props.configurationValues["iconCssClass"]) !== null && _props$configurationV3 !== void 0 ? _props$configurationV3 : "";
          });
          var multiple = computed(() => {
            return asBoolean(props.configurationValues["isMultiple"]);
          });
          var rules = computed(() => {
            return isRequired ? "required" : "";
          });
          function getModelValue() {
            try {
              return JSON.parse(props.modelValue);
            } catch (_unused2) {
              return null;
            }
          }
          watch(internalValue, () => {
            emit("update:modelValue", JSON.stringify(internalValue.value));
          });
          watch(() => props.modelValue, () => {
            updateRefValue(internalValue, getModelValue());
          });
          return {
            iconCssClass,
            internalValue,
            isRequired,
            itemProvider,
            multiple,
            rules
          };
        },
        template: "\n<TreeItemPicker v-model=\"internalValue\"\n                formGroupClasses=\"universal-tree-item-picker\"\n                autoExpand\n                :iconCssClass=\"iconCssClass\"\n                :provider=\"itemProvider\"\n                :multiple=\"multiple\"\n                :rules=\"rules\" />\n"
      }));
      var FilterComponent = exports('FilterComponent', defineComponent({
        name: "UniversalItemTreePickerField.Filter",
        components: {
          EditComponent
        },
        props: getFieldEditorProps(),
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var dataEntryMode = computed(() => props.dataEntryMode);
          var configurationValues = computed(() => {
            var values = _objectSpread2({}, props.configurationValues);
            if (asBoolean(values["isMultiple"])) {
              values["isMultiple"] = "false";
            } else {
              values["isMultiple"] = "true";
            }
            return values;
          });
          return {
            configurationValues,
            dataEntryMode,
            internalValue
          };
        },
        template: "\n<EditComponent v-model=\"internalValue\" :configurationValues=\"configurationValues\" :dataEntryMode=\"dataEntryMode\" />\n"
      }));

    })
  };
}));
//# sourceMappingURL=universalItemTreePickerFieldComponents.js.map
