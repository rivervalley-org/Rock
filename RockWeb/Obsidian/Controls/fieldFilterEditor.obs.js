System.register(['vue', './dropDownList.obs', '@Obsidian/Core/Reporting/filterExpressionType', '@Obsidian/Utility/guid', '@Obsidian/Utility/component', './fieldFilterRuleRow.obs'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, watch, openBlock, createElementBlock, createVNode, unref, toDisplayString, Fragment, renderList, createBlock, withModifiers, DropDownList, FilterExpressionType, newGuid, areEqual, updateRefValue, FieldFilterRuleRow;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      toDisplayString = module.toDisplayString;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createBlock = module.createBlock;
      withModifiers = module.withModifiers;
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
      FieldFilterRuleRow = module["default"];
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
        class: "filtervisibilityrules-container"
      };
      var _hoisted_2 = {
        class: "filtervisibilityrules-rulesheader"
      };
      var _hoisted_3 = {
        class: "filtervisibilityrules-type form-inline form-inline-all"
      };
      var _hoisted_4 = {
        class: "form-control-static margin-r-sm"
      };
      var _hoisted_5 = {
        class: "filtervisibilityrules-fieldname"
      };
      var _hoisted_6 = createElementVNode("span", {
        class: "filtervisibilityrules-if"
      }, " if", -1);
      var _hoisted_7 = createElementVNode("span", {
        class: "form-control-static"
      }, "of the following match:", -1);
      var _hoisted_8 = {
        class: "filtervisibilityrules-ruleslist"
      };
      var _hoisted_9 = {
        class: "filter-actions"
      };
      var _hoisted_10 = ["onClick"];
      var _hoisted_11 = createElementVNode("i", {
        class: "fa fa-filter"
      }, null, -1);
      var _hoisted_12 = createTextVNode(" Add Criteria");
      var _hoisted_13 = [_hoisted_11, _hoisted_12];
      var script = exports('default', defineComponent({
        name: 'fieldFilterEditor',
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
        setup(__props, _ref) {
          var _props$modelValue$rul;
          var emit = _ref.emit;
          var props = __props;
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
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [createVNode(unref(DropDownList), {
              modelValue: showHide.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => showHide.value = $event),
              items: showHideOptions,
              "show-blank-item": false,
              formControlClasses: "input-width-sm margin-r-sm"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4, [createElementVNode("span", _hoisted_5, toDisplayString(__props.title), 1), _hoisted_6]), createVNode(unref(DropDownList), {
              modelValue: allAny.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => allAny.value = $event),
              items: allAnyOptions,
              "show-blank-item": false,
              formControlClasses: "input-width-sm margin-r-sm"
            }, null, 8, ["modelValue"]), _hoisted_7])]), createElementVNode("div", _hoisted_8, [(openBlock(true), createElementBlock(Fragment, null, renderList(rules.value, rule => {
              return openBlock(), createBlock(unref(FieldFilterRuleRow), {
                key: rule.guid,
                modelValue: rule,
                sources: __props.sources,
                "onUpdate:modelValue": onUpdateRule,
                onRemoveRule: onRemoveRule
              }, null, 8, ["modelValue", "sources"]);
            }), 128))]), createElementVNode("div", _hoisted_9, [createElementVNode("button", {
              class: "btn btn-xs btn-action add-action",
              onClick: withModifiers(onAddRuleClick, ["prevent"])
            }, _hoisted_13, 8, _hoisted_10)])]);
          };
        }
      }));

      script.__file = "Framework/Controls/fieldFilterEditor.obs";

    })
  };
}));
//# sourceMappingURL=fieldFilterEditor.obs.js.map
