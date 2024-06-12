System.register(['vue', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Utility/component', './fieldType', './utils'], (function (exports, module) {
  'use strict';
  var defineComponent, inject, DropDownList, defineAsyncComponent, getFieldEditorProps;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      inject = module.inject;
    }, function (module) {
      DropDownList = module["default"];
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
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./connectionTypeFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./connectionTypeFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "ConnectionTypeField.Edit",
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
        name: "ConnectionTypeField.Configuration",
        template: "\n"
      }));

    })
  };
}));
//# sourceMappingURL=connectionTypeFieldComponents.js.map
