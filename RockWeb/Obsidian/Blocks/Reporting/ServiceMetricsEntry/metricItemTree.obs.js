System.register(['vue', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Utility/tooltip'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createElementBlock, createVNode, unref, ref, computed, onMounted, resolveComponent, createBlock, withCtx, createElementVNode, toDisplayString, Fragment, renderList, NumberBox, Panel, tooltip;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      ref = module.ref;
      computed = module.computed;
      onMounted = module.onMounted;
      resolveComponent = module.resolveComponent;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      Fragment = module.Fragment;
      renderList = module.renderList;
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      tooltip = module.tooltip;
    }],
    execute: (function () {

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }

      var script$1 = defineComponent({
        name: 'metricItem.partial',
        props: {
          item: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false,
            required: false
          }
        },
        setup(__props) {
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [createVNode(unref(NumberBox), {
              modelValue: __props.item.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => __props.item.value = $event),
              disabled: __props.disabled,
              label: __props.item.name
            }, null, 8, ["modelValue", "disabled", "label"])]);
          };
        }
      });

      script$1.__file = "src/Reporting/ServiceMetricsEntry/metricItem.partial.obs";

      var defaultFlattenOptions = {
        excludeRootItems: false
      };
      function getFifoCollection() {
        var items = [];
        return {
          add(item) {
            items.push(item);
          },
          remove() {
            return items.shift();
          },
          getLength() {
            return items.length;
          }
        };
      }
      function flattenBreadthFirst(rootItems, keySelector, childItemsSelector, options) {
        return flatten(getFifoCollection, Array.isArray(rootItems) ? rootItems : [rootItems], keySelector, childItemsSelector, options);
      }
      function flatten(useCollection, rootItems, keySelector, childItemsSelector) {
        var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultFlattenOptions;
        var itemMap = new Map();
        var collection = useCollection();
        var _iterator = _createForOfIteratorHelper(rootItems),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var rootItem = _step.value;
            var _childItems = childItemsSelector(rootItem);
            if (_childItems) {
              var _iterator3 = _createForOfIteratorHelper(_childItems),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _childItem = _step3.value;
                  var _key = keySelector(_childItem);
                  if (!itemMap.has(_key)) {
                    collection.add({
                      item: _childItem,
                      key: _key
                    });
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        while (collection.getLength()) {
          var itemAndKey = collection.remove();
          if (!(itemAndKey !== null && itemAndKey !== void 0 && itemAndKey.item)) {
            continue;
          }
          itemMap.set(itemAndKey.key, itemAndKey.item);
          var childItems = childItemsSelector(itemAndKey.item);
          if (childItems !== null && childItems !== void 0 && childItems.length) {
            var _iterator2 = _createForOfIteratorHelper(childItems),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var childItem = _step2.value;
                var key = keySelector(childItem);
                if (!itemMap.has(key)) {
                  collection.add({
                    item: childItem,
                    key
                  });
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
        if (!options.excludeRootItems) {
          return [...rootItems, ...itemMap.values()];
        } else {
          return [...itemMap.values()];
        }
      }

      var _hoisted_1 = ["title"];
      var script = exports('default', defineComponent({
        name: 'metricItemTree',
        props: {
          items: {
            type: Object,
            required: true
          },
          category: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          areDuplicateMetricsIncludedInCategorySubtotals: {
            type: Boolean,
            required: false,
            default: true
          }
        },
        setup(__props) {
          var props = __props;
          var metricCategoryCountLabel = ref();
          var categorizedMetricItems = computed(() => {
            return filterMetricItemsInCategory(props.items, props.category);
          });
          var descendantMetricCategories = computed(() => {
            var _props$category$child;
            if (!((_props$category$child = props.category.childMetricCategories) !== null && _props$category$child !== void 0 && _props$category$child.length)) {
              return [];
            }
            return flattenBreadthFirst(props.category, c => c.categoryId, c => c.childMetricCategories, {
              excludeRootItems: true
            });
          });
          var allMetricCategories = computed(() => {
            var descendants = descendantMetricCategories.value;
            if (descendants.some(c => c.categoryId === props.category.categoryId)) {
              return descendants;
            } else {
              return [props.category, ...descendants];
            }
          });
          var descendantMetricItems = computed(() => {
            if (props.areDuplicateMetricsIncludedInCategorySubtotals) {
              var metricItems = [];
              var _iterator = _createForOfIteratorHelper(allMetricCategories.value),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var metricCategory = _step.value;
                  var metricItemsInCategory = filterMetricItemsInCategory(props.items, metricCategory);
                  for (var _i = 0, _metricItemsInCategor = metricItemsInCategory; _i < _metricItemsInCategor.length; _i++) {
                    var metricItem = _metricItemsInCategor[_i];
                    metricItems.push(metricItem);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              return metricItems;
            } else {
              var metricIdsToMetricItems = new Map();
              var _iterator2 = _createForOfIteratorHelper(allMetricCategories.value),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _metricCategory = _step2.value;
                  var _metricItems = filterMetricItemsInCategory(props.items, _metricCategory);
                  for (var _i2 = 0, _metricItems2 = _metricItems; _i2 < _metricItems2.length; _i2++) {
                    var _metricItem = _metricItems2[_i2];
                    metricIdsToMetricItems.set(_metricItem.id, _metricItem);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              return [...metricIdsToMetricItems.values()];
            }
          });
          var descendantMetricItemValuesSum = computed(() => {
            return descendantMetricItems.value.map(i => {
              var _i$value;
              return (_i$value = i.value) !== null && _i$value !== void 0 ? _i$value : 0;
            }).reduce((sum, value) => sum + value, 0);
          });
          var metricCategoryCountLabelTooltip = computed(() => {
            var categoryNames = [];
            var itemsInThisCategory = categorizedMetricItems.value;
            var _iterator3 = _createForOfIteratorHelper(itemsInThisCategory),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;
                if (item.name) {
                  categoryNames.push(item.name);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            var _iterator4 = _createForOfIteratorHelper(descendantMetricCategories.value),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var descendantCategory = _step4.value;
                if (descendantCategory.name && areAnyMetricItemsInCategory(props.items, descendantCategory)) {
                  categoryNames.push(descendantCategory.name);
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            return categoryNames.length ? "Sum of ".concat(categoryNames.join(", ")) : "";
          });
          function areAnyMetricItemsInCategory(metricItems, metricCategory) {
            var categoryId = metricCategory.categoryId;
            return metricItems.some(i => i.categoryIds && i.categoryIds.some(c => c === categoryId));
          }
          function filterMetricItemsInCategory(metricItems, metricCategory) {
            var categoryId = metricCategory.categoryId;
            return metricItems.filter(i => i.categoryIds && i.categoryIds.some(c => c === categoryId));
          }
          onMounted(() => {
            if (metricCategoryCountLabel.value) {
              tooltip(metricCategoryCountLabel.value);
            }
          });
          return (_ctx, _cache) => {
            var _props$category$name;
            var _component_metricItemTree = resolveComponent("metricItemTree", true);
            return openBlock(), createBlock(unref(Panel), {
              class: "metric-category",
              hasCollapse: true,
              modelValue: true,
              title: (_props$category$name = __props.category.name) !== null && _props$category$name !== void 0 ? _props$category$name : ''
            }, {
              headerActions: withCtx(() => [createElementVNode("span", {
                class: "label label-default",
                "data-toggle": "tooltip",
                ref_key: "metricCategoryCountLabel",
                ref: metricCategoryCountLabel,
                title: unref(metricCategoryCountLabelTooltip)
              }, toDisplayString(unref(descendantMetricItemValuesSum)), 9, _hoisted_1)]),
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(categorizedMetricItems), item => {
                return openBlock(), createBlock(unref(script$1), {
                  class: "metric-item",
                  disabled: __props.disabled,
                  item: item
                }, null, 8, ["disabled", "item"]);
              }), 256)), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.category.childMetricCategories, childCategory => {
                return openBlock(), createBlock(_component_metricItemTree, {
                  areDuplicateMetricsIncludedInCategorySubtotals: __props.areDuplicateMetricsIncludedInCategorySubtotals,
                  category: childCategory,
                  disabled: __props.disabled,
                  items: __props.items
                }, null, 8, ["areDuplicateMetricsIncludedInCategorySubtotals", "category", "disabled", "items"]);
              }), 256))]),
              _: 1
            }, 8, ["title"]);
          };
        }
      }));

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z = "[data-v-3097fe40] .metric-category{border:none;box-shadow:none;margin-bottom:0}[data-v-3097fe40] .metric-category>.panel-body{padding-bottom:0;padding-left:0;padding-right:0}[data-v-3097fe40] .metric-category .panel-title{max-width:100%;overflow:hidden;text-overflow:ellipsis}[data-v-3097fe40] .metric-category .metric-category{margin-left:8%}.metric-item[data-v-3097fe40]{margin:0}.metric-item+div[data-v-3097fe40]:not(.metric-item){margin-top:18px}";
      styleInject(css_248z);

      script.__scopeId = "data-v-3097fe40";
      script.__file = "src/Reporting/ServiceMetricsEntry/metricItemTree.obs";

    })
  };
}));
//# sourceMappingURL=metricItemTree.obs.js.map
