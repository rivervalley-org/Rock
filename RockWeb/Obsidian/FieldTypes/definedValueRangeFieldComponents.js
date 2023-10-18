System.register(['vue', './utils', '@Obsidian/Controls/rockFormField', '@Obsidian/Utility/component', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/linq', './fieldType'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, computed, watch, inject, getFieldEditorProps, RockFormField, defineAsyncComponent, asBoolean, List;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      inject = module.inject;
    }, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function (module) {
      asBoolean = module.asBoolean;
    }, function (module) {
      List = module.List;
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
        ConfigurationValueKey["DisplayDescription"] = "displaydescription";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./definedValueRangeFieldComponents')).EditComponent;
      }));

      function parseModelValue(modelValue) {
        try {
          var _clientValue$value;
          var clientValue = JSON.parse(modelValue !== null && modelValue !== void 0 ? modelValue : "");
          var splitValue = ((_clientValue$value = clientValue.value) !== null && _clientValue$value !== void 0 ? _clientValue$value : "").split(",");
          if (splitValue.length === 1) {
            return [splitValue[0], ""];
          }
          return splitValue;
        } catch (_unused) {
          return ["", ""];
        }
      }
      function getClientValue(lowerValue, upperValue, valueOptions, showDescription) {
        var _lv$value, _uv$value, _lv$text, _uv$text, _lv$description, _uv$description;
        var options = new List(valueOptions);
        var lv = options.firstOrUndefined(v => v.value === lowerValue);
        var uv = options.firstOrUndefined(v => v.value === upperValue);
        if (!lv && !uv) {
          return {
            value: "",
            text: "",
            description: ""
          };
        }
        return {
          value: "".concat((_lv$value = lv === null || lv === void 0 ? void 0 : lv.value) !== null && _lv$value !== void 0 ? _lv$value : "", ",").concat((_uv$value = uv === null || uv === void 0 ? void 0 : uv.value) !== null && _uv$value !== void 0 ? _uv$value : ""),
          text: "".concat((_lv$text = lv === null || lv === void 0 ? void 0 : lv.text) !== null && _lv$text !== void 0 ? _lv$text : "", " to ").concat((_uv$text = uv === null || uv === void 0 ? void 0 : uv.text) !== null && _uv$text !== void 0 ? _uv$text : ""),
          description: showDescription ? "".concat((_lv$description = lv === null || lv === void 0 ? void 0 : lv.description) !== null && _lv$description !== void 0 ? _lv$description : "", " to ").concat((_uv$description = uv === null || uv === void 0 ? void 0 : uv.description) !== null && _uv$description !== void 0 ? _uv$description : "") : ""
        };
      }
      var EditComponent = exports('EditComponent', defineComponent({
        name: "DefinedValueRangeField.Edit",
        components: {
          RockFormField
        },
        props: getFieldEditorProps(),
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValues = parseModelValue(props.modelValue);
          var internalValue = ref(props.modelValue);
          var lowerValue = ref(internalValues[0]);
          var upperValue = ref(internalValues[1]);
          var valueOptions = computed(() => {
            try {
              var _props$configurationV;
              return JSON.parse((_props$configurationV = props.configurationValues[ConfigurationValueKey.Values]) !== null && _props$configurationV !== void 0 ? _props$configurationV : "[]");
            } catch (_unused2) {
              return [];
            }
          });
          var showDescription = computed(() => {
            return asBoolean(props.configurationValues[ConfigurationValueKey.DisplayDescription]);
          });
          var options = computed(() => {
            var providedOptions = valueOptions.value.map(v => {
              return {
                text: showDescription.value ? v.description : v.text,
                value: v.value
              };
            });
            return providedOptions;
          });
          watch(() => props.modelValue, () => {
            var internalValues = parseModelValue(props.modelValue);
            lowerValue.value = internalValues[0];
            upperValue.value = internalValues[1];
          });
          watch(() => [lowerValue.value, upperValue.value], () => {
            var clientValue = getClientValue(lowerValue.value, upperValue.value, valueOptions.value, showDescription.value);
            emit("update:modelValue", JSON.stringify(clientValue));
          });
          return {
            internalValue,
            lowerValue,
            upperValue,
            isRequired: inject("isRequired"),
            options,
            getKeyForOption(option) {
              var _option$value;
              return (_option$value = option.value) !== null && _option$value !== void 0 ? _option$value : "";
            },
            getTextForOption(option) {
              var _option$text;
              return (_option$text = option.text) !== null && _option$text !== void 0 ? _option$text : "";
            }
          };
        },
        template: "\n<RockFormField\n    v-model=\"internalValue\"\n    formGroupClasses=\"rock-defined-value-range\"\n    name=\"definedvaluerange\"\n    #default=\"{uniqueId}\"\n    :rules=\"computedRules\">\n    <div :id=\"uniqueId\" class=\"form-control-group\">\n        <select class=\"input-width-md form-control\" v-model=\"lowerValue\">\n            <option v-if=\"!isRequired\" value=\"\"></option>\n            <option v-for=\"o in options\" :key=\"o.value\" :value=\"o.value\">{{o.text}}</option>\n        </select>\n        <span class=\"to\"> to </span>\n        <select class=\"input-width-md form-control\" v-model=\"upperValue\">\n            <option v-if=\"!isRequired\" value=\"\"></option>\n            <option v-for=\"o in options\" :key=\"o.value\" :value=\"o.value\">{{o.text}}</option>\n        </select>\n    </div>\n</RockFormField>\n"
      }));

    })
  };
}));
//# sourceMappingURL=definedValueRangeFieldComponents.js.map
