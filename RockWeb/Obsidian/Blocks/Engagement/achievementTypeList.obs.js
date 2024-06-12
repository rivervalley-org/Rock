System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, openBlock, createBlock, unref, withCtx, createVNode, createElementBlock, normalizeClass, createCommentVNode, reactive, useConfigurationValues, useInvokeBlockAction, EntityType, Grid, Column, TextColumn, textValueFilter, BooleanColumn, booleanValueFilter, DeleteColumn, alert;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      createCommentVNode = module.createCommentVNode;
      reactive = module.reactive;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      Grid = module["default"];
      Column = module.Column;
      TextColumn = module.TextColumn;
      textValueFilter = module.textValueFilter;
      BooleanColumn = module.BooleanColumn;
      booleanValueFilter = module.booleanValueFilter;
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

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["DetailPage"] = "DetailPage";
        return NavigationUrlKey;
      }({});

      var _hoisted_1 = createElementVNode("div", {
        class: "skeleton skeleton-text skeleton-rounded"
      }, null, -1);
      var script = exports('default', defineComponent({
        name: 'achievementTypeList',
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
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete achievement type.");
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
            var _unref$gridDefinition, _unref$options;
            return openBlock(), createBlock(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Achievement Type",
              entityTypeGuid: unref(EntityType).AchievementType,
              stickyHeader: "",
              liveUpdates: "",
              showLaunchWorkflow: false,
              onAddItem: unref(config).isAddEnabled && (_unref$options = unref(config).options) !== null && _unref$options !== void 0 && _unref$options.isAddVisible ? onAddItem : undefined,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => [createVNode(unref(Column), {
                name: "iconCssClass",
                visiblePriority: "xs",
                width: "52"
              }, {
                format: withCtx(_ref => {
                  var row = _ref.row;
                  return [createElementVNode("div", null, [row.iconCssClass ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: normalizeClass(row.iconCssClass)
                  }, null, 2)) : createCommentVNode("v-if", true)])];
                }),
                skeleton: withCtx(() => [_hoisted_1]),
                _: 1
              }), createVNode(unref(TextColumn), {
                name: "name",
                title: "Name",
                field: "name",
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), createVNode(unref(BooleanColumn), {
                name: "isActive",
                title: "Active",
                field: "isActive",
                filter: unref(booleanValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "componentName",
                title: "Achievement Type",
                field: "componentName",
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "sourceName",
                title: "Source",
                field: "sourceName",
                filter: unref(textValueFilter),
                visiblePriority: "md"
              }, null, 8, ["filter"]), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                key: 0,
                onClick: onDeleteClick
              })) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "onAddItem"]);
          };
        }
      }));

      script.__file = "src/Engagement/achievementTypeList.obs";

    })
  };
}));
//# sourceMappingURL=achievementTypeList.obs.js.map
