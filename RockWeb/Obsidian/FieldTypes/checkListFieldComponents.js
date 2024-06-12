System.register(['vue', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/listBox.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/listItems.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', '@Obsidian/Enums/Reporting/comparisonType', '@Obsidian/Core/Reporting/comparisonType', './fieldType', './utils'], (function (exports, module) {
  'use strict';
  var defineComponent, inject, ref, computed, watch, CheckBoxList, ListBox, NumberBox, ListItems, toNumberOrNull, defineAsyncComponent, updateRefValue, getFieldEditorProps, getFieldConfigurationProps;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      inject = module.inject;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      ListBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      ListItems = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      updateRefValue = module.updateRefValue;
    }, function () {}, function () {}, function () {}, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
      getFieldConfigurationProps = module.getFieldConfigurationProps;
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

      var ConfigurationValueKey = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["ListItems"] = "listItems";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./checkListFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./checkListFieldComponents')).FilterComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./checkListFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "CheckListField.Edit",
        components: {
          ListBox,
          CheckBoxList
        },
        props: getFieldEditorProps(),
        setup() {
          return {
            isRequired: inject("isRequired")
          };
        },
        data() {
          return {
            internalValue: []
          };
        },
        computed: {
          options() {
            try {
              var _this$configurationVa;
              var listItems = JSON.parse((_this$configurationVa = this.configurationValues[ConfigurationValueKey.ListItems]) !== null && _this$configurationVa !== void 0 ? _this$configurationVa : "[]");
              return listItems.map(v => {
                return {
                  text: v.value,
                  value: v.key
                };
              });
            } catch (_unused) {
              return [];
            }
          },
          checkBoxListConfigAttributes() {
            var attributes = {};
            var repeatColumnsConfig = this.configurationValues[ConfigurationValueKey.RepeatColumns];
            if (repeatColumnsConfig) {
              attributes["repeatColumns"] = toNumberOrNull(repeatColumnsConfig) || 0;
            }
            return attributes;
          }
        },
        watch: {
          internalValue() {
            this.$emit("update:modelValue", this.internalValue.join(","));
          },
          modelValue: {
            immediate: true,
            handler() {
              var value = this.modelValue || "";
              this.internalValue = value !== "" ? value.split(",") : [];
            }
          }
        },
        template: "\n<CheckBoxList v-model=\"internalValue\" v-bind=\"checkBoxListConfigAttributes\" displayAsCheckList=\"true\" :items=\"options\" />\n"
      }));
      var FilterComponent = exports('FilterComponent', defineComponent({
        name: "CheckListField.Filter",
        components: {
          CheckBoxList
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = ref(props.modelValue.split(",").filter(v => v !== ""));
          var options = computed(() => {
            try {
              var _props$configurationV;
              var providedOptions = JSON.parse((_props$configurationV = props.configurationValues[ConfigurationValueKey.Values]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "[]");
              return providedOptions;
            } catch (_unused2) {
              return [];
            }
          });
          watch(() => props.modelValue, () => {
            updateRefValue(internalValue, props.modelValue.split(",").filter(v => v !== ""));
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value.join(","));
          });
          return {
            internalValue,
            options
          };
        },
        template: "\n<CheckBoxList v-model=\"internalValue\" :items=\"options\" horizontal />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "CheckListField.Configuration",
        components: {
          ListItems,
          NumberBox
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref2) {
          var emit = _ref2.emit;
          var listItems = ref("");
          var repeatColumns = ref(null);
          var maybeUpdateModelValue = () => {
            var _listItems$value, _repeatColumns$value$, _repeatColumns$value, _props$modelValue$Con, _props$modelValue$Con2;
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.ListItems] = (_listItems$value = listItems.value) !== null && _listItems$value !== void 0 ? _listItems$value : "[]";
            newValue[ConfigurationValueKey.RepeatColumns] = (_repeatColumns$value$ = (_repeatColumns$value = repeatColumns.value) === null || _repeatColumns$value === void 0 ? void 0 : _repeatColumns$value.toString()) !== null && _repeatColumns$value$ !== void 0 ? _repeatColumns$value$ : "";
            var anyValueChanged = newValue[ConfigurationValueKey.ListItems] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.ListItems]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "[]") || newValue[ConfigurationValueKey.RepeatColumns] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.RepeatColumns]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "");
            if (anyValueChanged) {
              emit("update:modelValue", newValue);
              return true;
            } else {
              return false;
            }
          };
          var maybeUpdateConfiguration = (key, value) => {
            if (maybeUpdateModelValue()) {
              emit("updateConfigurationValue", key, value);
            }
          };
          watch(() => [props.modelValue, props.configurationProperties], () => {
            var _props$modelValue$Con3;
            listItems.value = (_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.ListItems]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "[]";
            repeatColumns.value = toNumberOrNull(props.modelValue[ConfigurationValueKey.RepeatColumns]);
          }, {
            immediate: true
          });
          watch([listItems], () => {
            if (maybeUpdateModelValue()) {
              emit("updateConfiguration");
            }
          });
          watch(repeatColumns, () => {
            var _repeatColumns$value$2, _repeatColumns$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.RepeatColumns, (_repeatColumns$value$2 = (_repeatColumns$value2 = repeatColumns.value) === null || _repeatColumns$value2 === void 0 ? void 0 : _repeatColumns$value2.toString()) !== null && _repeatColumns$value$2 !== void 0 ? _repeatColumns$value$2 : "");
          });
          return {
            listItems,
            repeatColumns
          };
        },
        template: "\n<div>\n    <ListItems\n        v-model=\"listItems\"\n        label=\"ListItems\"\n        help=\"The list of the values to display.\" />\n\n    <NumberBox\n        v-model=\"repeatColumns\"\n        label=\"Columns\"\n        help=\"Select how many columns the list should use before going to the next row. If blank or 0 then 4 columns will be displayed. There is no enforced upper limit however the block this control is used in might add contraints due to available space.\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=checkListFieldComponents.js.map
