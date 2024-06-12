System.register(['vue', './rockSuspense.obs', './loadingIndicator.obs', '@Obsidian/Utility/linq', './tabbedContent.obs', './rockField.obs', '@Obsidian/Utility/guid', './itemsWithPreAndPostHtml.obs'], (function (exports) {
  'use strict';
  var defineComponent, computed, ref, watch, openBlock, createBlock, unref, withCtx, createElementBlock, Fragment, renderList, normalizeClass, createVNode, toDisplayString, createCommentVNode, createElementVNode, createSlots, RockSuspense, LoadingIndicator, List, TabbedContent, RockField, emptyGuid, areEqual, ItemsWithPreAndPostHtml;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      createVNode = module.createVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
      createSlots = module.createSlots;
    }, function (module) {
      RockSuspense = module["default"];
    }, function (module) {
      LoadingIndicator = module["default"];
    }, function (module) {
      List = module.List;
    }, function (module) {
      TabbedContent = module["default"];
    }, function (module) {
      RockField = module["default"];
    }, function (module) {
      emptyGuid = module.emptyGuid;
      areEqual = module.areEqual;
    }, function (module) {
      ItemsWithPreAndPostHtml = module["default"];
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
        key: "cat.guid"
      };
      var _hoisted_2 = {
        key: 0
      };
      var _hoisted_3 = {
        key: 1
      };
      var script = exports('default', defineComponent({
        name: 'attributeValuesContainer',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          isEditMode: {
            type: Boolean,
            default: false
          },
          attributes: {
            type: Object,
            required: true
          },
          showEmptyValues: {
            type: Boolean,
            default: true
          },
          showAbbreviatedName: {
            type: Boolean,
            default: false
          },
          displayWithinExistingRow: {
            type: Boolean,
            default: false
          },
          displayAsTabs: {
            type: Boolean,
            default: false
          },
          showCategoryLabel: {
            type: Boolean,
            default: true
          },
          showPrePostHtml: {
            type: Boolean,
            default: true
          },
          numberOfColumns: {
            type: Number,
            default: 1
          },
          entityTypeName: {
            type: String,
            default: ""
          },
          disabled: {
            type: Boolean,
            default: false
          },
          columnBreakpoint: {
            type: String,
            default: "md"
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var validAttributes = computed(() => {
            return new List(Object.values(props.attributes)).orderBy(a => a.order).toArray();
          });
          var values = ref(_objectSpread2({}, props.modelValue));
          var attributeCategories = computed(() => {
            var categoryList = [{
              guid: emptyGuid,
              name: "Attributes",
              order: 0,
              attributes: []
            }];
            validAttributes.value.forEach(attr => {
              var _props$modelValue$att;
              if (!props.showEmptyValues && !props.isEditMode && attr.key && ((_props$modelValue$att = props.modelValue[attr.key]) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : "") == "") {
                return;
              }
              if (attr.categories && attr.categories.length > 0) {
                var categories = [...attr.categories];
                categories.sort((a, b) => a.order - b.order).forEach((cat, i) => {
                  var newCat = _objectSpread2({
                    attributes: []
                  }, cat);
                  if (!categoryList.some(oldCat => oldCat.guid == newCat.guid)) {
                    categoryList.push(newCat);
                  }
                  if (i == 0) {
                    var _categoryList$find;
                    (_categoryList$find = categoryList.find(cat => cat.guid == newCat.guid)) === null || _categoryList$find === void 0 ? void 0 : _categoryList$find.attributes.push(attr);
                  }
                });
              } else {
                categoryList[0].attributes.push(attr);
              }
            });
            return categoryList.filter(cat => cat.attributes.length > 0).sort((a, b) => a.order - b.order);
          });
          var actuallyDisplayAsTabs = computed(() => {
            if (attributeCategories.value.length === 0) {
              return false;
            }
            var hasCategories = attributeCategories.value.length > 1 || attributeCategories.value[0].guid !== emptyGuid;
            return hasCategories && props.displayAsTabs && !props.isEditMode;
          });
          var defaultCategoryHeading = computed(() => {
            if (actuallyDisplayAsTabs.value || !props.entityTypeName) {
              return "Attributes";
            }
            return "".concat(props.entityTypeName, " Attributes");
          });
          var attributeCategoryNames = computed(() => {
            return attributeCategories.value.map(a => {
              var _a$name;
              return (_a$name = a.name) !== null && _a$name !== void 0 ? _a$name : "";
            });
          });
          var columnClass = computed(() => {
            var numColumns = props.numberOfColumns;
            if (numColumns < 1) {
              numColumns = 1;
            } else if (numColumns == 5) {
              numColumns = 4;
            } else if (numColumns > 6 && numColumns < 12) {
              numColumns = 6;
            } else if (numColumns > 12) {
              numColumns = 12;
            }
            return "col-".concat(props.columnBreakpoint, "-").concat(12 / numColumns);
          });
          function getCategoryAttributes(categoryName) {
            var _attributeCategories$, _attributeCategories$2;
            return (_attributeCategories$ = (_attributeCategories$2 = attributeCategories.value.find(c => c.name === categoryName)) === null || _attributeCategories$2 === void 0 ? void 0 : _attributeCategories$2.attributes) !== null && _attributeCategories$ !== void 0 ? _attributeCategories$ : [];
          }
          var onUpdateValue = (key, value) => {
            values.value[key] = value;
            emit("update:modelValue", values.value);
          };
          var prePostHtmlItems = computed(() => {
            var items = {};
            attributeCategories.value.forEach(ac => {
              items[ac.guid] = items[ac.guid] || [];
              ac.attributes.forEach(attr => {
                var _attr$preHtml, _attr$postHtml;
                var preHtml = (_attr$preHtml = attr.preHtml) !== null && _attr$preHtml !== void 0 ? _attr$preHtml : "";
                var postHtml = (_attr$postHtml = attr.postHtml) !== null && _attr$postHtml !== void 0 ? _attr$postHtml : "";
                if (props.numberOfColumns > 1) {
                  preHtml = "<div class=\"".concat(columnClass.value, "\">") + preHtml;
                  postHtml += "</div>";
                }
                items[ac.guid].push({
                  slotName: attr.attributeGuid,
                  preHtml,
                  postHtml
                });
              });
            });
            return items;
          });
          watch(() => props.modelValue, () => {
            values.value = _objectSpread2({}, props.modelValue);
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockSuspense), null, {
              default: withCtx(() => [__props.displayWithinExistingRow ? (openBlock(true), createElementBlock(Fragment, {
                key: 0
              }, renderList(unref(validAttributes), a => {
                return openBlock(), createElementBlock("div", {
                  class: normalizeClass(unref(columnClass)),
                  key: a.attributeGuid
                }, [createVNode(unref(RockField), {
                  isEditMode: __props.isEditMode,
                  attribute: a,
                  modelValue: values.value[a.key],
                  "onUpdate:modelValue": $event => onUpdateValue(a.key, $event),
                  showEmptyValue: __props.showEmptyValues,
                  showAbbreviatedName: __props.showAbbreviatedName
                }, null, 8, ["isEditMode", "attribute", "modelValue", "onUpdate:modelValue", "showEmptyValue", "showAbbreviatedName"])], 2);
              }), 128)) : unref(actuallyDisplayAsTabs) ? (openBlock(), createBlock(unref(TabbedContent), {
                key: 1,
                tabs: unref(attributeCategoryNames)
              }, {
                tabpane: withCtx(_ref2 => {
                  var item = _ref2.item;
                  return [(openBlock(true), createElementBlock(Fragment, null, renderList(getCategoryAttributes(item), a => {
                    return openBlock(), createElementBlock("div", {
                      key: a.attributeGuid
                    }, [createVNode(unref(RockField), {
                      isEditMode: __props.isEditMode,
                      attribute: a,
                      modelValue: values.value[a.key],
                      "onUpdate:modelValue": $event => onUpdateValue(a.key, $event),
                      showEmptyValue: __props.showEmptyValues,
                      showAbbreviatedName: __props.showAbbreviatedName
                    }, null, 8, ["isEditMode", "attribute", "modelValue", "onUpdate:modelValue", "showEmptyValue", "showAbbreviatedName"])]);
                  }), 128))];
                }),
                _: 1
              }, 8, ["tabs"])) : (openBlock(true), createElementBlock(Fragment, {
                key: 2
              }, renderList(unref(attributeCategories), cat => {
                return openBlock(), createElementBlock("div", _hoisted_1, [__props.showCategoryLabel && unref(areEqual)(cat.guid, unref(emptyGuid)) && !__props.isEditMode ? (openBlock(), createElementBlock("h4", _hoisted_2, toDisplayString(unref(defaultCategoryHeading)), 1)) : __props.showCategoryLabel && !unref(areEqual)(cat.guid, unref(emptyGuid)) ? (openBlock(), createElementBlock("h4", _hoisted_3, toDisplayString(cat.name), 1)) : createCommentVNode("v-if", true), createElementVNode("div", {
                  class: normalizeClass({
                    'attribute-value-container-display': true,
                    'row': __props.numberOfColumns > 1
                  })
                }, [__props.isEditMode && __props.showPrePostHtml ? (openBlock(), createBlock(unref(ItemsWithPreAndPostHtml), {
                  key: 0,
                  items: unref(prePostHtmlItems)[cat.guid]
                }, createSlots({
                  _: 2
                }, [renderList(cat.attributes, a => {
                  return {
                    name: a.attributeGuid,
                    fn: withCtx(() => [createVNode(unref(RockField), {
                      isEditMode: __props.isEditMode,
                      attribute: a,
                      modelValue: values.value[a.key],
                      "onUpdate:modelValue": $event => onUpdateValue(a.key, $event),
                      showEmptyValue: __props.showEmptyValues,
                      showAbbreviatedName: __props.showAbbreviatedName
                    }, null, 8, ["isEditMode", "attribute", "modelValue", "onUpdate:modelValue", "showEmptyValue", "showAbbreviatedName"])])
                  };
                })]), 1032, ["items"])) : (openBlock(true), createElementBlock(Fragment, {
                  key: 1
                }, renderList(cat.attributes, a => {
                  return openBlock(), createElementBlock("div", {
                    class: normalizeClass(unref(columnClass)),
                    key: a.attributeGuid
                  }, [createVNode(unref(RockField), {
                    isEditMode: __props.isEditMode,
                    attribute: a,
                    modelValue: values.value[a.key],
                    "onUpdate:modelValue": $event => onUpdateValue(a.key, $event),
                    showEmptyValue: __props.showEmptyValues,
                    showAbbreviatedName: __props.showAbbreviatedName
                  }, null, 8, ["isEditMode", "attribute", "modelValue", "onUpdate:modelValue", "showEmptyValue", "showAbbreviatedName"])], 2);
                }), 128))], 2)]);
              }), 128))]),
              loading: withCtx(() => [createVNode(unref(LoadingIndicator))]),
              _: 1
            });
          };
        }
      }));

      script.__file = "Framework/Controls/attributeValuesContainer.obs";

    })
  };
}));
//# sourceMappingURL=attributeValuesContainer.obs.js.map
