System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, openBlock, createBlock, unref, withCtx, createVNode, createElementBlock, Fragment, renderList, toDisplayString, createCommentVNode, reactive, useConfigurationValues, useInvokeBlockAction, Grid, DateTimeColumn, dateValueFilter, TextColumn, textValueFilter, Column, DeleteColumn, alert;
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
      Fragment = module.Fragment;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      reactive = module.reactive;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      Grid = module["default"];
      DateTimeColumn = module.DateTimeColumn;
      dateValueFilter = module.dateValueFilter;
      TextColumn = module.TextColumn;
      textValueFilter = module.textValueFilter;
      Column = module.Column;
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
        NavigationUrlKey["PersonMergePage"] = "PersonMergePage";
        return NavigationUrlKey;
      }({});

      var _hoisted_1 = {
        class: "text-lg"
      };
      var _hoisted_2 = createElementVNode("div", {
        class: "skeleton skeleton-text skeleton-rounded"
      }, null, -1);
      var script = exports('default', defineComponent({
        name: 'personMergeRequestList',
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
          function getMergeRecordsRowFilterValue(row) {
            var filterValue = "";
            for (var _i = 0, _arr = row.mergeRecords; _i < _arr.length; _i++) {
              var mergeRecord = _arr[_i];
              filterValue += mergeRecord;
            }
            return filterValue;
          }
          function onSelectItem(key) {
            var _config$navigationUrl;
            if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.PersonMergePage]) {
              window.location.href = config.navigationUrls[NavigationUrlKey.PersonMergePage].replace("((Key))", key);
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
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete merge request.");
              }
            });
            return _onDeleteClick.apply(this, arguments);
          }
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition;
            return openBlock(), createBlock(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Merge Request",
              stickyHeader: "",
              liveUpdates: "",
              showLaunchWorkflow: false,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => [createVNode(unref(DateTimeColumn), {
                name: "date",
                title: "Date",
                field: "date",
                filter: unref(dateValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "requestor",
                title: "Requestor",
                field: "requestor",
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), createVNode(unref(Column), {
                name: "mergeRecords",
                title: "Merge Records",
                filter: unref(textValueFilter),
                filterValue: getMergeRecordsRowFilterValue,
                visiblePriority: "md"
              }, {
                format: withCtx(_ref => {
                  var row = _ref.row;
                  return [createElementVNode("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(row.mergeRecords, mergeRecord => {
                    return openBlock(), createElementBlock("div", null, toDisplayString(mergeRecord), 1);
                  }), 256))])];
                }),
                skeleton: withCtx(() => [_hoisted_2]),
                _: 1
              }, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "note",
                title: "Note",
                field: "note",
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                key: 0,
                onClick: onDeleteClick
              })) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["definition", "data"]);
          };
        }
      }));

      script.__file = "src/Crm/personMergeRequestList.obs";

    })
  };
}));
//# sourceMappingURL=personMergeRequestList.obs.js.map
