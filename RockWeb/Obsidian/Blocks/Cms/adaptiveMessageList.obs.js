System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var createTextVNode, createElementVNode, defineComponent, ref, resolveComponent, openBlock, createBlock, unref, withCtx, createVNode, toDisplayString, createElementBlock, createCommentVNode, Fragment, renderList, reactive, useConfigurationValues, useInvokeBlockAction, EntityType, Grid, SelectColumn, textValueFilter, NumberColumn, numberValueFilter, DeleteColumn, alert;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      resolveComponent = module.resolveComponent;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      toDisplayString = module.toDisplayString;
      createElementBlock = module.createElementBlock;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      reactive = module.reactive;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      Grid = module["default"];
      SelectColumn = module.SelectColumn;
      textValueFilter = module.textValueFilter;
      NumberColumn = module.NumberColumn;
      numberValueFilter = module.numberValueFilter;
      DeleteColumn = module.DeleteColumn;
    }, function (module) {
      alert = module.alert;
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

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["DetailPage"] = "DetailPage";
        return NavigationUrlKey;
      }({});

      var _hoisted_1 = {
        class: "text-semibold"
      };
      var _hoisted_2 = createTextVNode();
      var _hoisted_3 = {
        class: "text-muted text-xs"
      };
      var _hoisted_4 = {
        key: 0
      };
      var _hoisted_5 = createElementVNode("div", {
        class: "skeleton skeleton-text skeleton-rounded"
      }, null, -1);
      var _hoisted_6 = {
        class: "label label-default margin-l-sm"
      };
      var _hoisted_7 = createElementVNode("div", {
        class: "skeleton skeleton-text skeleton-rounded"
      }, null, -1);
      var _hoisted_8 = {
        class: "flex-grow-1 text-right"
      };
      var _hoisted_9 = {
        class: "flex-grow-1 text-right"
      };
      var script = exports('default', defineComponent({
        name: 'adaptiveMessageList',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var gridDataSource = ref();
          var gridData;
          function loadGridData() {
            return _loadGridData.apply(this, arguments);
          }
          function _loadGridData() {
            _loadGridData = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("GetGridData");
              if (result.isSuccess && result.data) {
                gridData = reactive(result.data);
                return gridData;
              } else {
                var _result$errorMessage;
                throw new Error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to load grid data.");
              }
            });
            return _loadGridData.apply(this, arguments);
          }
          function getRowCategoriesFilterValue(row) {
            var filterValue = "";
            var _iterator = _createForOfIteratorHelper(row.categories),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var category = _step.value;
                filterValue += " ".concat(category, " ?? \"\"}");
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return filterValue;
          }
          function getRowNameFilterValue(row) {
            var _r$description;
            var r = row;
            return "".concat(r.name, " ").concat(r.id, " ").concat((_r$description = r.description) !== null && _r$description !== void 0 ? _r$description : "");
          }
          function onSelectItem(key) {
            var _config$navigationUrl;
            if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.DetailPage]) {
              window.location.href = config.navigationUrls[NavigationUrlKey.DetailPage].replace("((Key))", key);
            }
          }
          function onDeleteClick(_x) {
            return _onDeleteClick.apply(this, arguments);
          }
          function _onDeleteClick() {
            _onDeleteClick = _asyncToGenerator(function* (key) {
              var result = yield invokeBlockAction("Delete", {
                key
              });
              if (result.isSuccess) {
                if (gridData && gridData.rows) {
                  var index = gridData.rows.findIndex(r => r["idKey"] === key);
                  if (index !== -1) {
                    var _gridData$rows;
                    (_gridData$rows = gridData.rows) === null || _gridData$rows === void 0 ? void 0 : _gridData$rows.splice(index, 1);
                  }
                }
              } else {
                var _result$errorMessage2;
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete adaptive message.");
              }
            });
            return _onDeleteClick.apply(this, arguments);
          }
          function onAddItem() {
            var _config$navigationUrl2;
            if ((_config$navigationUrl2 = config.navigationUrls) !== null && _config$navigationUrl2 !== void 0 && _config$navigationUrl2[NavigationUrlKey.DetailPage]) {
              window.location.href = config.navigationUrls[NavigationUrlKey.DetailPage].replace("((Key))", "0");
            }
          }
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition, _unref$expectedRowCou;
            var _component_Column = resolveComponent("Column");
            return openBlock(), createBlock(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Adaptive Message",
              entityTypeGuid: unref(EntityType).AdaptiveMessage,
              expectedRowCount: (_unref$expectedRowCou = unref(config).expectedRowCount) !== null && _unref$expectedRowCou !== void 0 ? _unref$expectedRowCou : undefined,
              tooltipField: "key",
              stickyHeader: "",
              liveUpdates: "",
              onAddItem: unref(config).isAddEnabled ? onAddItem : undefined,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => [createVNode(unref(SelectColumn)), createVNode(_component_Column, {
                name: "name",
                title: "Name",
                filter: unref(textValueFilter),
                filterValue: getRowNameFilterValue,
                quickFilterValue: getRowNameFilterValue,
                visiblePriority: "xs"
              }, {
                format: withCtx(_ref => {
                  var row = _ref.row;
                  return [createElementVNode("div", null, [createElementVNode("div", null, [createElementVNode("span", _hoisted_1, toDisplayString(row.name), 1), _hoisted_2, createElementVNode("span", _hoisted_3, toDisplayString(row.id), 1)]), row.description ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(row.description), 1)) : createCommentVNode("v-if", true)])];
                }),
                skeleton: withCtx(() => [_hoisted_5]),
                _: 1
              }, 8, ["filter"]), createVNode(_component_Column, {
                name: "categories",
                title: "Categories",
                filter: unref(textValueFilter),
                filterValue: getRowCategoriesFilterValue,
                quickFilterValue: getRowCategoriesFilterValue,
                visiblePriority: "lg"
              }, {
                format: withCtx(_ref2 => {
                  var row = _ref2.row;
                  return [(openBlock(true), createElementBlock(Fragment, null, renderList(row.categories, category => {
                    return openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(category), 1);
                  }), 256))];
                }),
                skeleton: withCtx(() => [_hoisted_7]),
                _: 1
              }, 8, ["filter"]), createVNode(unref(NumberColumn), {
                name: "views",
                title: "Views",
                field: "views",
                filter: unref(numberValueFilter),
                visiblePriority: "sm"
              }, {
                format: withCtx(_ref3 => {
                  var row = _ref3.row;
                  return [createElementVNode("div", _hoisted_8, toDisplayString(row.views), 1)];
                }),
                _: 1
              }, 8, ["filter"]), createVNode(unref(NumberColumn), {
                name: "adaptations",
                title: "Adaptations",
                field: "adaptations",
                filter: unref(numberValueFilter),
                visiblePriority: "xs"
              }, {
                format: withCtx(_ref4 => {
                  var row = _ref4.row;
                  return [createElementVNode("div", _hoisted_9, toDisplayString(row.adaptations), 1)];
                }),
                _: 1
              }, 8, ["filter"]), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                key: 0,
                onClick: onDeleteClick
              })) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "expectedRowCount", "onAddItem"]);
          };
        }
      }));

      script.__file = "src/Cms/adaptiveMessageList.obs";

    })
  };
}));
//# sourceMappingURL=adaptiveMessageList.obs.js.map
