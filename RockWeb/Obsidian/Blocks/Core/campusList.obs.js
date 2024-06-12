System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var defineComponent, ref, openBlock, createBlock, unref, withCtx, createVNode, createCommentVNode, reactive, useConfigurationValues, useInvokeBlockAction, EntityType, Grid, SelectColumn, TextColumn, textValueFilter, PersonColumn, pickExistingValueFilter, BooleanColumn, AttributeColumns, DeleteColumn, alert;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
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
      TextColumn = module.TextColumn;
      textValueFilter = module.textValueFilter;
      PersonColumn = module.PersonColumn;
      pickExistingValueFilter = module.pickExistingValueFilter;
      BooleanColumn = module.BooleanColumn;
      AttributeColumns = module.AttributeColumns;
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
        name: 'campusList',
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
            console.log(config);
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
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete campus.");
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
            var _unref$gridDefinition;
            return openBlock(), createBlock(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Campus",
              entityTypeGuid: unref(EntityType).Campus,
              stickyHeader: "",
              liveUpdates: "",
              onAddItem: unref(config).isAddEnabled ? onAddItem : undefined,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => {
                var _unref$gridDefinition2, _unref$gridDefinition3;
                return [createVNode(unref(SelectColumn)), createVNode(unref(TextColumn), {
                  name: "name",
                  title: "Name",
                  field: "name",
                  filter: unref(textValueFilter),
                  visiblePriority: "xs"
                }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "shortCode",
                  title: "Short Code",
                  field: "shortCode",
                  filter: unref(textValueFilter),
                  visiblePriority: "lg"
                }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "phoneNumber",
                  title: "Phone Number",
                  field: "phoneNumber",
                  filter: unref(textValueFilter),
                  visiblePriority: "sm"
                }, null, 8, ["filter"]), createVNode(unref(PersonColumn), {
                  name: "leader",
                  title: "Campus Leader",
                  field: "leader",
                  filter: unref(pickExistingValueFilter),
                  visiblePriority: "sm"
                }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "campusType",
                  title: "Campus Type",
                  field: "campusType",
                  filter: unref(pickExistingValueFilter),
                  visiblePriority: "md"
                }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "campusStatus",
                  title: "Campus Status",
                  field: "campusStatus",
                  filter: unref(pickExistingValueFilter),
                  visiblePriority: "md"
                }, null, 8, ["filter"]), createVNode(unref(BooleanColumn), {
                  name: "isActive",
                  title: "Is Active",
                  field: "isActive",
                  visiblePriority: "xs"
                }), createVNode(unref(AttributeColumns), {
                  attributes: (_unref$gridDefinition2 = (_unref$gridDefinition3 = unref(config).gridDefinition) === null || _unref$gridDefinition3 === void 0 ? void 0 : _unref$gridDefinition3.attributeFields) !== null && _unref$gridDefinition2 !== void 0 ? _unref$gridDefinition2 : []
                }, null, 8, ["attributes"]), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                  key: 0,
                  onClick: onDeleteClick
                })) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "onAddItem"]);
          };
        }
      }));

      script.__file = "src/Core/campusList.obs";

    })
  };
}));
//# sourceMappingURL=campusList.obs.js.map
