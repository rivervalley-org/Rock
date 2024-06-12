System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, openBlock, createBlock, unref, withCtx, createVNode, createCommentVNode, reactive, useConfigurationValues, useInvokeBlockAction, EntityType, Grid, TextColumn, textValueFilter, DeleteColumn, alert;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
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
      TextColumn = module.TextColumn;
      textValueFilter = module.textValueFilter;
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

      var script = exports('default', defineComponent({
        name: 'savedAccountList',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var gridDataSource = ref();
          var gridData;
          var gridDefinition = computed(() => {
            var _config$gridDefinitio;
            if (config.gridDefinition) {
              config.gridDefinition.actionUrls = null;
            }
            return (_config$gridDefinitio = config.gridDefinition) !== null && _config$gridDefinitio !== void 0 ? _config$gridDefinitio : undefined;
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
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete financial person saved account.");
              }
            });
            return _onDeleteClick.apply(this, arguments);
          }
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Grid), {
              definition: unref(gridDefinition),
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Payment Account",
              entityTypeGuid: unref(EntityType).FinancialPersonSavedAccount,
              stickyHeader: "",
              light: "",
              liveUpdates: ""
            }, {
              default: withCtx(() => [createVNode(unref(TextColumn), {
                name: "name",
                title: "Name",
                field: "name",
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "accountNumber",
                title: "Account Number",
                field: "accountNumber",
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "accountType",
                title: "Account Type",
                field: "accountType",
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                key: 0,
                onClick: onDeleteClick
              })) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid"]);
          };
        }
      }));

      script.__file = "src/Finance/savedAccountList.obs";

    })
  };
}));
//# sourceMappingURL=savedAccountList.obs.js.map
