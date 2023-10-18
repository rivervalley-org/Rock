System.register(['vue', './dropDownList', '@Obsidian/Core/Reporting/filterExpressionType', '@Obsidian/Utility/guid', '@Obsidian/Utility/component', './fieldFilterRuleRow'], (function (exports) {
  'use strict';
  var defineComponent, TransitionGroup, ref, watch, DropDownList, FilterExpressionType, newGuid, areEqual, updateRefValue, FieldFilterRuleRow;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      TransitionGroup = module.TransitionGroup;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      FilterExpressionType = module.FilterExpressionType;
    }, function (module) {
      newGuid = module.newGuid;
      areEqual = module.areEqual;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      FieldFilterRuleRow = module.FieldFilterRuleRow;
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

      var filterExpressionTypeMap = {
        Show: {
          All: FilterExpressionType.GroupAll,
          Any: FilterExpressionType.GroupAny
        },
        Hide: {
          All: FilterExpressionType.GroupAllFalse,
          Any: FilterExpressionType.GroupAnyFalse
        }
      };
      var filterExpressionToShowHideMap = ["Show", "Show", "Hide", "Hide"];
      var filterExpressionToAllAnyMap = ["All", "Any", "All", "Any"];
      var showHideOptions = [{
        text: "Show",
        value: "Show"
      }, {
        text: "Hide",
        value: "Hide"
      }];
      var allAnyOptions = [{
        text: "All",
        value: "All"
      }, {
        text: "Any",
        value: "Any"
      }];
      var fieldFilterEditor = exports('default', defineComponent({
        name: "FieldVisibilityRulesEditor",
        components: {
          TransitionGroup,
          DropDownList,
          FieldFilterRuleRow
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          sources: {
            type: Array,
            required: true
          },
          title: {
            type: String,
            default: ""
          },
          allowNestedGroups: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(props, _ref) {
          var _props$modelValue$rul;
          var emit = _ref.emit;
          var showHide = ref(filterExpressionToShowHideMap[props.modelValue.expressionType - 1]);
          var allAny = ref(filterExpressionToAllAnyMap[props.modelValue.expressionType - 1]);
          var rules = ref((_props$modelValue$rul = props.modelValue.rules) !== null && _props$modelValue$rul !== void 0 ? _props$modelValue$rul : []);
          watch(() => props.allowNestedGroups, () => {
            if (props.allowNestedGroups === true) {
              console.warn("Nested Filter Groups are not supported yet. Please set `allowNestedGroups` to `false`.");
            }
          });
          function onAddRuleClick() {
            var _props$sources$0$attr;
            rules.value = [...rules.value, {
              guid: newGuid(),
              comparisonType: 0,
              value: "",
              sourceType: 0,
              attributeGuid: (_props$sources$0$attr = props.sources[0].attribute) === null || _props$sources$0$attr === void 0 ? void 0 : _props$sources$0$attr.attributeGuid
            }];
          }
          var onUpdateRule = rule => {
            var newRules = [...rules.value];
            var ruleIndex = newRules.findIndex(r => areEqual(r.guid, rule.guid));
            if (ruleIndex !== -1) {
              newRules.splice(ruleIndex, 1, rule);
              rules.value = newRules;
            }
          };
          function onRemoveRule(rule) {
            rules.value = (rules.value || []).filter(val => !areEqual(val.guid, rule.guid));
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$rul2;
            showHide.value = filterExpressionToShowHideMap[props.modelValue.expressionType - 1];
            allAny.value = filterExpressionToAllAnyMap[props.modelValue.expressionType - 1];
            updateRefValue(rules, (_props$modelValue$rul2 = props.modelValue.rules) !== null && _props$modelValue$rul2 !== void 0 ? _props$modelValue$rul2 : []);
          });
          watch([showHide, allAny, rules], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              expressionType: filterExpressionTypeMap[showHide.value][allAny.value],
              rules: rules.value
            });
            emit("update:modelValue", newValue);
          });
          return {
            allAny,
            allAnyOptions,
            onAddRuleClick,
            onRemoveRule,
            onUpdateRule,
            rules,
            showHide,
            showHideOptions
          };
        },
        template: "\n<div class=\"filtervisibilityrules-container\">\n    <div class=\"filtervisibilityrules-rulesheader\">\n        <div class=\"filtervisibilityrules-type form-inline form-inline-all\">\n            <DropDownList v-model=\"showHide\" :items=\"showHideOptions\" :show-blank-item=\"false\" formControlClasses=\"input-width-sm margin-r-sm\" />\n            <div class=\"form-control-static margin-r-sm\">\n                <span class=\"filtervisibilityrules-fieldname\">{{ title }}</span><span class=\"filtervisibilityrules-if\"> if</span>\n            </div>\n            <DropDownList v-model=\"allAny\" :items=\"allAnyOptions\" :show-blank-item=\"false\" formControlClasses=\"input-width-sm margin-r-sm\" />\n            <span class=\"form-control-static\">of the following match:</span>\n        </div>\n    </div>\n\n    <div class=\"filtervisibilityrules-ruleslist \">\n        <FieldFilterRuleRow v-for=\"rule in rules\" :key=\"rule.guid\" :modelValue=\"rule\" :sources=\"sources\" @update:modelValue=\"onUpdateRule\" @removeRule=\"onRemoveRule\" />\n    </div>\n\n    <div class=\"filter-actions\">\n        <button class=\"btn btn-xs btn-action add-action\" @click.prevent=\"onAddRuleClick\"><i class=\"fa fa-filter\"></i> Add Criteria</button>\n    </div>\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=fieldFilterEditor.js.map
