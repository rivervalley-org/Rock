System.register(['vue', './utils', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Utility/component', './fieldType'], (function (exports, module) {
  'use strict';
  var defineComponent, computed, getFieldEditorProps, DropDownList, defineAsyncComponent, useVModelPassthrough;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
    }, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
      useVModelPassthrough = module.useVModelPassthrough;
    }, function () {}],
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
        return (yield module.import('./reminderTypeFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./reminderTypeFieldComponents')).ConfigurationComponent;
      }));

      var EditComponent = exports('EditComponent', defineComponent({
        name: "ReminderTypeField.Edit",
        components: {
          DropDownList
        },
        props: getFieldEditorProps(),
        emits: {
          "update:modelValue": _v => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var options = computed(() => {
            try {
              var _props$configurationV;
              var items = JSON.parse((_props$configurationV = props.configurationValues[ConfigurationValueKey.Values]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "[]");
              return items.map(rt => ({
                value: rt.guid,
                text: "".concat(rt.name, " (").concat(rt.entityTypeName, ")")
              }));
            } catch (_unused) {
              return [];
            }
          });
          return {
            internalValue,
            options
          };
        },
        template: "<DropDownList v-model=\"internalValue\" :items=\"options\" />"
      }));
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "ReminderTypeField.Configuration",
        template: ""
      }));

    })
  };
}));
//# sourceMappingURL=reminderTypeFieldComponents.js.map
