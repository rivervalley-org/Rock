System.register(['vue', './dropDownList.obs', '@Obsidian/Utility/guid', '@Obsidian/Utility/component', './rockAttributeFilter.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, createVNode, unref, withModifiers, DropDownList, areEqual, toGuidOrNull, updateRefValue, RockAttributeFilter;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      withModifiers = module.withModifiers;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      areEqual = module.areEqual;
      toGuidOrNull = module.toGuidOrNull;
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

      var _hoisted_1 = {
        class: "filter-rule"
      };
      var _hoisted_2 = {
        class: "filter-rule-fields row form-row"
      };
      var _hoisted_3 = {
        class: "filter-rule-comparefield col-xs-12 col-md-4"
      };
      var _hoisted_4 = {
        class: "filter-rule-fieldfilter col-xs-12 col-md-8"
      };
      var _hoisted_5 = {
        class: "filter-rule-remove"
      };
      var _hoisted_6 = ["onClick"];
      var _hoisted_7 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_8 = [_hoisted_7];
      var script = exports('default', defineComponent({
        name: 'fieldFilterRuleRow',
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
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$val;
          var emit = _ref.emit;
          var props = __props;
          var internalUpdate = false;
          var attributeGuidOrEmptyString = ref((_props$modelValue$att = props.modelValue.attributeGuid) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : "");
          var comparisonValue = ref({
            comparisonType: props.modelValue.comparisonType,
            value: (_props$modelValue$val = props.modelValue.value) !== null && _props$modelValue$val !== void 0 ? _props$modelValue$val : ""
          });
          var currentAttribute = computed(() => {
            var source = props.sources.find(source => {
              var _source$attribute$att, _source$attribute;
              return areEqual(attributeGuidOrEmptyString.value, (_source$attribute$att = (_source$attribute = source.attribute) === null || _source$attribute === void 0 ? void 0 : _source$attribute.attributeGuid) !== null && _source$attribute$att !== void 0 ? _source$attribute$att : "");
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
            var _props$modelValue$att2, _props$modelValue$val2;
            internalUpdate = true;
            updateRefValue(attributeGuidOrEmptyString, (_props$modelValue$att2 = props.modelValue.attributeGuid) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : "");
            updateRefValue(comparisonValue, {
              comparisonType: props.modelValue.comparisonType,
              value: (_props$modelValue$val2 = props.modelValue.value) !== null && _props$modelValue$val2 !== void 0 ? _props$modelValue$val2 : ""
            });
            internalUpdate = false;
          });
          watch([attributeGuidOrEmptyString, comparisonValue], () => {
            var _comparisonValue$valu;
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeGuid: toGuidOrNull(attributeGuidOrEmptyString.value),
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
              attributeGuidOrEmptyString.value = currentAttribute.value.attributeGuid;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [createVNode(unref(DropDownList), {
              items: unref(attributeList),
              modelValue: attributeGuidOrEmptyString.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => attributeGuidOrEmptyString.value = $event),
              "show-blank-item": false
            }, null, 8, ["items", "modelValue"])]), createElementVNode("div", _hoisted_4, [createVNode(unref(RockAttributeFilter), {
              attribute: unref(currentAttribute),
              modelValue: comparisonValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => comparisonValue.value = $event),
              "filter-mode": 1,
              required: ""
            }, null, 8, ["attribute", "modelValue"])])]), createElementVNode("div", _hoisted_5, [createElementVNode("button", {
              class: "btn btn-danger btn-square",
              onClick: withModifiers(onRemoveRuleClick, ["prevent"])
            }, _hoisted_8, 8, _hoisted_6)])]);
          };
        }
      }));

      script.__file = "Framework/Controls/fieldFilterRuleRow.obs";

    })
  };
}));
//# sourceMappingURL=fieldFilterRuleRow.obs.js.map
