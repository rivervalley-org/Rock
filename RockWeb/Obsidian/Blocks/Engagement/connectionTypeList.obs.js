System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, resolveComponent, openBlock, createBlock, unref, withCtx, createVNode, createCommentVNode, reactive, useConfigurationValues, useInvokeBlockAction, EntityType, Grid, SelectColumn, ReorderColumn, TextColumn, textValueFilter, numberValueFilter, BooleanColumn, AttributeColumns, SecurityColumn, DeleteColumn, alert;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      resolveComponent = module.resolveComponent;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      createCommentVNode = module.createCommentVNode;
      reactive = module.reactive;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      Grid = module["default"];
      SelectColumn = module.SelectColumn;
      ReorderColumn = module.ReorderColumn;
      TextColumn = module.TextColumn;
      textValueFilter = module.textValueFilter;
      numberValueFilter = module.numberValueFilter;
      BooleanColumn = module.BooleanColumn;
      AttributeColumns = module.AttributeColumns;
      SecurityColumn = module.SecurityColumn;
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

      var script = exports('default', defineComponent({
        name: 'connectionTypeList',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var gridDataSource = ref();
          var gridData;
          var customActions = computed(() => {
            return [{
              title: "Connection Campaigns",
              iconCssClass: "",
              handler: onConnectionCampaignsClick
            }];
          });
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
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete connection type.");
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
          function onOrderChanged(_x2, _x3) {
            return _onOrderChanged.apply(this, arguments);
          }
          function _onOrderChanged() {
            _onOrderChanged = _asyncToGenerator(function* (item, beforeItem) {
              var _beforeItem$idKey;
              var result = yield invokeBlockAction("ReorderItem", {
                key: item["idKey"],
                beforeKey: (_beforeItem$idKey = beforeItem === null || beforeItem === void 0 ? void 0 : beforeItem["idKey"]) !== null && _beforeItem$idKey !== void 0 ? _beforeItem$idKey : null
              });
              return result.isSuccess;
            });
            return _onOrderChanged.apply(this, arguments);
          }
          function onConnectionCampaignsClick() {
            return _onConnectionCampaignsClick.apply(this, arguments);
          }
          function _onConnectionCampaignsClick() {
            _onConnectionCampaignsClick = _asyncToGenerator(function* () {
              window.location.href = "/CampaignConfiguration";
            });
            return _onConnectionCampaignsClick.apply(this, arguments);
          }
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition;
            var _component_NumberColumn = resolveComponent("NumberColumn");
            return openBlock(), createBlock(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Connection Type",
              entityTypeGuid: unref(EntityType).ConnectionType,
              customActions: unref(customActions),
              stickyHeader: "",
              liveUpdates: "",
              onAddItem: unref(config).isAddEnabled ? onAddItem : undefined,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => {
                var _unref$gridDefinition2, _unref$gridDefinition3;
                return [createVNode(unref(SelectColumn)), createVNode(unref(ReorderColumn), {
                  onOrderChanged: onOrderChanged
                }), createVNode(unref(TextColumn), {
                  name: "name",
                  title: "Name",
                  field: "name",
                  filter: unref(textValueFilter),
                  visiblePriority: "lg"
                }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "description",
                  title: "Description",
                  field: "description",
                  filter: unref(textValueFilter),
                  visiblePriority: "lg"
                }, null, 8, ["filter"]), createVNode(_component_NumberColumn, {
                  name: "opportunityCount",
                  title: "Opportunity Count",
                  field: "opportunityCount",
                  filter: unref(numberValueFilter),
                  visiblePriority: "xs"
                }, null, 8, ["filter"]), createVNode(unref(BooleanColumn), {
                  name: "isActive",
                  title: "Is Active",
                  field: "isActive",
                  visiblePriority: "xs"
                }), createVNode(unref(AttributeColumns), {
                  attributes: (_unref$gridDefinition2 = (_unref$gridDefinition3 = unref(config).gridDefinition) === null || _unref$gridDefinition3 === void 0 ? void 0 : _unref$gridDefinition3.attributeFields) !== null && _unref$gridDefinition2 !== void 0 ? _unref$gridDefinition2 : []
                }, null, 8, ["attributes"]), createVNode(unref(SecurityColumn)), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                  key: 0,
                  onClick: onDeleteClick
                })) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "customActions", "onAddItem"]);
          };
        }
      }));

      script.__file = "src/Engagement/connectionTypeList.obs";

    })
  };
}));
//# sourceMappingURL=connectionTypeList.obs.js.map
