System.register(['vue', './dropDownList', './textBox', '@Obsidian/Utility/guid', '@Obsidian/Utility/component', './rockAttributeFilter'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, DropDownList, TextBox, areEqual, updateRefValue, RockAttributeFilter;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      areEqual = module.areEqual;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      RockAttributeFilter = module["default"];
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

      var FieldFilterRuleRow = exports('FieldFilterRuleRow', defineComponent({
        name: "FieldFilterRuleRow",
        components: {
          DropDownList,
          TextBox,
          RockAttributeFilter
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          sources: {
            type: Array,
            required: true
          }
        },
        emits: ["update:modelValue", "removeRule"],
        setup(props, _ref) {
          var _props$modelValue$val;
          var emit = _ref.emit;
          var internalUpdate = false;
          var attributeGuid = ref(props.modelValue.attributeGuid);
          var comparisonValue = ref({
            comparisonType: props.modelValue.comparisonType,
            value: (_props$modelValue$val = props.modelValue.value) !== null && _props$modelValue$val !== void 0 ? _props$modelValue$val : ""
          });
          var currentAttribute = computed(() => {
            var source = props.sources.find(source => {
              var _attributeGuid$value, _source$attribute$att, _source$attribute;
              return areEqual((_attributeGuid$value = attributeGuid.value) !== null && _attributeGuid$value !== void 0 ? _attributeGuid$value : "", (_source$attribute$att = (_source$attribute = source.attribute) === null || _source$attribute === void 0 ? void 0 : _source$attribute.attributeGuid) !== null && _source$attribute$att !== void 0 ? _source$attribute$att : "");
            }) || props.sources[0];
            return source.attribute;
          });
          var attributeList = computed(() => {
            return props.sources.map(source => {
              var _source$attribute2, _source$attribute3;
              return {
                text: (_source$attribute2 = source.attribute) === null || _source$attribute2 === void 0 ? void 0 : _source$attribute2.name,
                value: (_source$attribute3 = source.attribute) === null || _source$attribute3 === void 0 ? void 0 : _source$attribute3.attributeGuid
              };
            });
          });
          function onRemoveRuleClick() {
            emit("removeRule", props.modelValue);
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$val2;
            internalUpdate = true;
            updateRefValue(attributeGuid, props.modelValue.attributeGuid);
            updateRefValue(comparisonValue, {
              comparisonType: props.modelValue.comparisonType,
              value: (_props$modelValue$val2 = props.modelValue.value) !== null && _props$modelValue$val2 !== void 0 ? _props$modelValue$val2 : ""
            });
            internalUpdate = false;
          });
          watch([attributeGuid, comparisonValue], () => {
            var _comparisonValue$valu;
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeGuid: attributeGuid.value,
              comparisonType: (_comparisonValue$valu = comparisonValue.value.comparisonType) !== null && _comparisonValue$valu !== void 0 ? _comparisonValue$valu : 0,
              value: comparisonValue.value.value
            });
            emit("update:modelValue", newValue);
          });
          watch(currentAttribute, () => {
            if (!internalUpdate) {
              comparisonValue.value = {
                comparisonType: 0,
                value: ""
              };
              attributeGuid.value = currentAttribute.value.attributeGuid;
            }
          });
          return {
            attributeGuid,
            attributeList,
            comparisonValue,
            currentAttribute,
            onRemoveRuleClick
          };
        },
        template: "\n    <div class=\"filter-rule\">\n        <div class=\"filter-rule-fields row form-row\">\n            <div class=\"filter-rule-comparefield col-xs-12 col-md-4\">\n                <DropDownList :items=\"attributeList\" v-model=\"attributeGuid\" :show-blank-item=\"false\"  />\n            </div>\n            <div class=\"filter-rule-fieldfilter col-xs-12 col-md-8\">\n                <RockAttributeFilter :attribute=\"currentAttribute\" v-model=\"comparisonValue\" :filter-mode=\"1\" required />\n            </div>\n        </div>\n        <div class=\"filter-rule-remove\">\n            <button class=\"btn btn-danger btn-square\" @click.prevent=\"onRemoveRuleClick\"><i class=\"fa fa-times\"></i></button>\n        </div>\n    </div>\n    "
      }));

    })
  };
}));
//# sourceMappingURL=fieldFilterRuleRow.js.map
