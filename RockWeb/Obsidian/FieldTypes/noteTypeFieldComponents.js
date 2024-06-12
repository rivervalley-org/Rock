System.register(['vue', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Utility/component', './fieldType', './utils'], (function (exports, module) {
  'use strict';
  var defineComponent, inject, ref, watch, TextBox, NumberBox, DropDownList, defineAsyncComponent, getFieldEditorProps, getFieldConfigurationProps;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      inject = module.inject;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function (module) {
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
        ConfigurationValueKey["EntityTypeName"] = "entityTypeName";
        ConfigurationValueKey["QualifierColumn"] = "qualifierColumn";
        ConfigurationValueKey["QualifierValue"] = "qualifierValue";
        ConfigurationValueKey["EntityTypes"] = "entityTypes";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./noteTypeFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./noteTypeFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "NoteTypeField.Edit",
        components: {
          DropDownList
        },
        props: getFieldEditorProps(),
        setup() {
          return {
            isRequired: inject("isRequired")
          };
        },
        data() {
          var _this$modelValue;
          return {
            internalValue: (_this$modelValue = this.modelValue) !== null && _this$modelValue !== void 0 ? _this$modelValue : ""
          };
        },
        computed: {
          options() {
            try {
              var _this$configurationVa;
              var valuesConfig = JSON.parse((_this$configurationVa = this.configurationValues[ConfigurationValueKey.Values]) !== null && _this$configurationVa !== void 0 ? _this$configurationVa : "[]");
              return valuesConfig.map(v => {
                return {
                  text: v.text,
                  value: v.value
                };
              });
            } catch (_unused) {
              return [];
            }
          }
        },
        watch: {
          internalValue() {
            this.$emit("update:modelValue", this.internalValue);
          },
          modelValue: {
            immediate: true,
            handler() {
              this.internalValue = this.modelValue || "";
            }
          }
        },
        template: "\n        <DropDownList v-model=\"internalValue\" :items=\"options\" :repeatColumns=\"repeatColumns\" horizontal />\n    "
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "NoteTypeField.Configuration",
        components: {
          TextBox,
          DropDownList,
          NumberBox
        },
        props: getFieldConfigurationProps(),
        computed: {
          options() {
            try {
              var _this$modelValue$Conf;
              var valuesConfig = JSON.parse((_this$modelValue$Conf = this.modelValue[ConfigurationValueKey.EntityTypes]) !== null && _this$modelValue$Conf !== void 0 ? _this$modelValue$Conf : "[]");
              return valuesConfig.map(v => {
                return {
                  text: v.text,
                  value: v.value
                };
              });
            } catch (_unused2) {
              return [];
            }
          }
        },
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref) {
          var _props$modelValue$Con;
          var emit = _ref.emit;
          var entityTypeName = ref((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.EntityTypeName]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : {});
          var qualifierColumn = ref(props.modelValue[ConfigurationValueKey.QualifierColumn]);
          var qualifierValue = ref(props.modelValue[ConfigurationValueKey.QualifierValue]);
          var maybeUpdateModelValue = () => {
            var _entityTypeName$value, _qualifierColumn$valu, _qualifierValue$value, _props$modelValue$Con2, _props$modelValue$Con3, _props$modelValue$Con4;
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.EntityTypeName] = (_entityTypeName$value = entityTypeName.value) !== null && _entityTypeName$value !== void 0 ? _entityTypeName$value : "";
            newValue[ConfigurationValueKey.QualifierColumn] = (_qualifierColumn$valu = qualifierColumn.value) !== null && _qualifierColumn$valu !== void 0 ? _qualifierColumn$valu : "";
            newValue[ConfigurationValueKey.QualifierValue] = (_qualifierValue$value = qualifierValue.value) !== null && _qualifierValue$value !== void 0 ? _qualifierValue$value : "";
            var anyValueChanged = newValue[ConfigurationValueKey.EntityTypeName] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.EntityTypeName]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : "") || newValue[ConfigurationValueKey.QualifierColumn] !== ((_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.QualifierColumn]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "") || newValue[ConfigurationValueKey.QualifierValue] !== ((_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.QualifierValue]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "");
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
              emit("updateConfiguration");
            }
          };
          watch(entityTypeName, () => {
            var _entityTypeName$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.EntityTypeName, (_entityTypeName$value2 = entityTypeName.value) !== null && _entityTypeName$value2 !== void 0 ? _entityTypeName$value2 : "");
          });
          watch(qualifierColumn, () => {
            var _qualifierColumn$valu2;
            return maybeUpdateConfiguration(ConfigurationValueKey.QualifierColumn, (_qualifierColumn$valu2 = qualifierColumn.value) !== null && _qualifierColumn$valu2 !== void 0 ? _qualifierColumn$valu2 : "");
          });
          watch(qualifierValue, () => {
            var _qualifierValue$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.QualifierValue, (_qualifierValue$value2 = qualifierValue.value) !== null && _qualifierValue$value2 !== void 0 ? _qualifierValue$value2 : "");
          });
          return {
            entityTypeName,
            qualifierColumn,
            qualifierValue
          };
        },
        template: "\n<div>\n    <DropDownList v-model=\"entityTypeName\" :items=\"options\" label=\"Entity Type\" help=\"The type of entity to display categories for.\" />\n    <TextBox v-model=\"qualifierColumn\" label=\"Qualifier Column\" help=\"Entity column qualifier.\" />\n    <TextBox v-model=\"qualifierValue\" label=\"Qualifier Value\" help=\"Entity column value.\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=noteTypeFieldComponents.js.map
