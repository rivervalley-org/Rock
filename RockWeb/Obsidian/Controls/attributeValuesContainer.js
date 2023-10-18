System.register(['vue', './rockSuspense', './loadingIndicator', '@Obsidian/Utility/linq', './tabbedContent', './rockField', '@Obsidian/Utility/guid', './itemsWithPreAndPostHtml'], (function (exports) {
  'use strict';
  var defineComponent, computed, ref, watch, RockSuspense, LoadingIndicator, List, TabbedContent, RockField, emptyGuid, ItemsWithPreAndPostHtml;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
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

      var attributeValuesContainer = exports('default', defineComponent({
        name: "AttributeValuesContainer",
        components: {
          RockField,
          LoadingIndicator,
          RockSuspense,
          TabbedContent,
          ItemsWithPreAndPostHtml
        },
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
        setup(props, _ref) {
          var emit = _ref.emit;
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
          var onUpdateValue = (key, value) => {
            values.value[key] = value;
            emit("update:modelValue", values.value);
          };
          var prePostHtmlItems = computed(() => {
            var items = {};
            attributeCategories.value.forEach(ac => {
              var _ac$guid, _ac$guid2;
              items[(_ac$guid = ac.guid) !== null && _ac$guid !== void 0 ? _ac$guid : emptyGuid] = items[(_ac$guid2 = ac.guid) !== null && _ac$guid2 !== void 0 ? _ac$guid2 : emptyGuid] || [];
              ac.attributes.forEach(attr => {
                var _attr$preHtml, _attr$postHtml, _ac$guid3, _attr$attributeGuid;
                var preHtml = (_attr$preHtml = attr.preHtml) !== null && _attr$preHtml !== void 0 ? _attr$preHtml : "";
                var postHtml = (_attr$postHtml = attr.postHtml) !== null && _attr$postHtml !== void 0 ? _attr$postHtml : "";
                if (props.numberOfColumns > 1) {
                  preHtml = "<div class=\"".concat(columnClass.value, "\">") + preHtml;
                  postHtml += "</div>";
                }
                items[(_ac$guid3 = ac.guid) !== null && _ac$guid3 !== void 0 ? _ac$guid3 : emptyGuid].push({
                  slotName: (_attr$attributeGuid = attr.attributeGuid) !== null && _attr$attributeGuid !== void 0 ? _attr$attributeGuid : "",
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
          return {
            onUpdateValue,
            validAttributes,
            values,
            attributeCategories,
            actuallyDisplayAsTabs,
            defaultCategoryHeading,
            columnClass,
            prePostHtmlItems
          };
        },
        template: "\n<RockSuspense>\n    <template #default>\n        <div v-if=\"displayWithinExistingRow\" :class=\"columnClass\" v-for=\"a in validAttributes\" :key=\"a.attributeGuid\">\n            <RockField\n                :isEditMode=\"isEditMode\"\n                :attribute=\"a\"\n                :modelValue=\"values[a.key]\"\n                @update:modelValue=\"onUpdateValue(a.key, $event)\"\n                :showEmptyValue=\"showEmptyValues\"\n                :showAbbreviatedName=\"showAbbreviatedName\"\n            />\n        </div>\n\n        <TabbedContent v-else-if=\"actuallyDisplayAsTabs\" :tabList=\"attributeCategories\">\n            <template #tab=\"{item}\">\n                {{ item.name }}\n            </template>\n            <template #tabpane=\"{item}\">\n                <div v-for=\"a in item.attributes\" :key=\"a.attributeGuid\">\n                    <RockField\n                        :isEditMode=\"isEditMode\"\n                        :attribute=\"a\"\n                        :modelValue=\"values[a.key]\"\n                        @update:modelValue=\"onUpdateValue(a.key, $event)\"\n                        :showEmptyValue=\"showEmptyValues\"\n                        :showAbbreviatedName=\"showAbbreviatedName\"\n                    />\n                </div>\n            </template>\n        </TabbedContent>\n\n        <template v-else>\n            <div v-for=\"cat in attributeCategories\" key=\"cat.guid\">\n                <h4 v-if=\"showCategoryLabel && cat.guid == '0' && !isEditMode\">{{defaultCategoryHeading}}</h4>\n                <h4 v-else-if=\"showCategoryLabel && cat.guid != '0'\">{{cat.name}}</h4>\n\n                <div :class=\"{'attribute-value-container-display': true, 'row': numberOfColumns > 1}\">\n                    <ItemsWithPreAndPostHtml :items=\"prePostHtmlItems[cat.guid]\" v-if=\"isEditMode && showPrePostHtml\" >\n                        <template v-slot:[a.attributeGuid] v-for=\"a in cat.attributes\" :key=\"a.attributeGuid ?? ''\">\n                            <RockField\n                                :isEditMode=\"isEditMode\"\n                                :attribute=\"a\"\n                                :modelValue=\"values[a.key]\"\n                                @update:modelValue=\"onUpdateValue(a.key, $event)\"\n                                :showEmptyValue=\"showEmptyValues\"\n                                :showAbbreviatedName=\"showAbbreviatedName\"\n                            />\n                        </template>\n                    </ItemsWithPreAndPostHtml>\n\n                    <div v-else :class=\"columnClass\" v-for=\"a in cat.attributes\" :key=\"a.attributeGuid\">\n                        <RockField\n                            :isEditMode=\"isEditMode\"\n                            :attribute=\"a\"\n                            :modelValue=\"values[a.key]\"\n                            @update:modelValue=\"onUpdateValue(a.key, $event)\"\n                            :showEmptyValue=\"showEmptyValues\"\n                            :showAbbreviatedName=\"showAbbreviatedName\"\n                        />\n                    </div>\n                </div>\n            </div>\n        </template>\n    </template>\n    <template #loading>\n        <LoadingIndicator />\n    </template>\n</RockSuspense>\n"
      }));

    })
  };
}));
//# sourceMappingURL=attributeValuesContainer.js.map
