System.register(['vue', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Utility/component', './fieldType', './utils'], (function (exports, module) {
  'use strict';
  var defineComponent, inject, CheckBoxList, defineAsyncComponent, getFieldEditorProps;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      inject = module.inject;
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
    }],
    execute: (function () {

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

      var ConfigurationValueKey = function (ConfigurationValueKey) {
        ConfigurationValueKey["Values"] = "values";
        ConfigurationValueKey["RepeatColumns"] = "repeatColumns";
        ConfigurationValueKey["EntityTypeName"] = "entityTypeName";
        ConfigurationValueKey["QualifierColumn"] = "qualifierColumn";
        ConfigurationValueKey["QualifierValue"] = "qualifierValue";
        ConfigurationValueKey["EntityTypes"] = "entityTypes";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./noteTypesFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./noteTypesFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "ConnectionTypesField.Edit",
        components: {
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
            internalValue: this.modelValue ? this.modelValue.split(",") : []
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
          },
          repeatColumns() {
            var _Number;
            return (_Number = Number(this.configurationValues[ConfigurationValueKey.RepeatColumns])) !== null && _Number !== void 0 ? _Number : 1;
          }
        },
        watch: {
          internalValue() {
            this.$emit("update:modelValue", this.internalValue.join(","));
          }
        },
        template: "\n<CheckBoxList v-model=\"internalValue\" :items=\"options\" :repeatColumns=\"repeatColumns\" horizontal />\n"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "ConnectionTypeField.Configuration",
        template: "\n"
      }));

    })
  };
}));
//# sourceMappingURL=connectionTypesFieldComponents.js.map
