System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/toggle.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, resolveComponent, openBlock, createBlock, unref, withCtx, createVNode, createElementVNode, toDisplayString, createCommentVNode, reactive, useConfigurationValues, useInvokeBlockAction, EntityType, Grid, SelectColumn, TextColumn, textValueFilter, DateColumn, dateValueFilter, numberValueFilter, AttributeColumns, booleanValueFilter, DeleteColumn, alert, Toggle;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      resolveComponent = module.resolveComponent;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
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
      DateColumn = module.DateColumn;
      dateValueFilter = module.dateValueFilter;
      numberValueFilter = module.numberValueFilter;
      AttributeColumns = module.AttributeColumns;
      booleanValueFilter = module.booleanValueFilter;
      DeleteColumn = module.DeleteColumn;
    }, function (module) {
      alert = module.alert;
    }, function (module) {
      Toggle = module["default"];
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

      var _hoisted_1 = {
        class: "flex-grow-1 text-right"
      };
      var _hoisted_2 = {
        class: "flex-grow-1 text-right"
      };
      var script = exports('default', defineComponent({
        name: 'prayerRequestList',
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
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete prayer request.");
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
            var _component_NumberColumn = resolveComponent("NumberColumn");
            var _component_Column = resolveComponent("Column");
            return openBlock(), createBlock(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Prayer Request",
              entityTypeGuid: unref(EntityType).PrayerRequest,
              stickyHeader: "",
              liveUpdates: "",
              onAddItem: unref(config).isAddEnabled ? onAddItem : undefined,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => {
                var _unref$gridDefinition2, _unref$gridDefinition3;
                return [createVNode(unref(SelectColumn)), createVNode(unref(TextColumn), {
                  name: "fullName",
                  title: "Name",
                  field: "fullName",
                  filter: unref(textValueFilter),
                  visiblePriority: "xs"
                }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "category",
                  title: "Category",
                  field: "category",
                  filter: unref(textValueFilter),
                  visiblePriority: "xs"
                }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "campus",
                  title: "Campus",
                  field: "campus",
                  filter: unref(textValueFilter),
                  visiblePriority: "xs"
                }, null, 8, ["filter"]), createVNode(unref(DateColumn), {
                  name: "enteredDateTime",
                  title: "Entered",
                  field: "enteredDateTime",
                  filter: unref(dateValueFilter),
                  visiblePriority: "md"
                }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "text",
                  title: "Request",
                  field: "text",
                  filter: unref(textValueFilter),
                  visiblePriority: "xs"
                }, null, 8, ["filter"]), createVNode(_component_NumberColumn, {
                  name: "prayerCount",
                  title: "Prayer Count",
                  field: "prayerCount",
                  filter: unref(numberValueFilter),
                  visiblePriority: "sm"
                }, {
                  format: withCtx(_ref => {
                    var row = _ref.row;
                    return [createElementVNode("div", _hoisted_1, toDisplayString(row.prayerCount), 1)];
                  }),
                  _: 1
                }, 8, ["filter"]), createVNode(_component_NumberColumn, {
                  name: "flagCount",
                  title: "Flag Count",
                  field: "flagCount",
                  filter: unref(numberValueFilter),
                  visiblePriority: "sm"
                }, {
                  format: withCtx(_ref2 => {
                    var row = _ref2.row;
                    return [createElementVNode("div", _hoisted_2, toDisplayString(row.flagCount), 1)];
                  }),
                  _: 1
                }, 8, ["filter"]), createVNode(unref(AttributeColumns), {
                  attributes: (_unref$gridDefinition2 = (_unref$gridDefinition3 = unref(config).gridDefinition) === null || _unref$gridDefinition3 === void 0 ? void 0 : _unref$gridDefinition3.attributeFields) !== null && _unref$gridDefinition2 !== void 0 ? _unref$gridDefinition2 : []
                }, null, 8, ["attributes"]), createVNode(_component_Column, {
                  name: "isApproved",
                  title: "Approved?",
                  field: "isApproved",
                  filter: unref(booleanValueFilter)
                }, {
                  format: withCtx(_ref3 => {
                    var row = _ref3.row;
                    return [createVNode(unref(Toggle), {
                      modelValue: row.isApproved,
                      "onUpdate:modelValue": $event => row.isApproved = $event,
                      btnSize: "xs",
                      onButtonActiveCssClass: "btn-success",
                      falseText: "No",
                      trueText: "Yes"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])];
                  }),
                  _: 1
                }, 8, ["filter"]), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                  key: 0,
                  onClick: onDeleteClick
                })) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "onAddItem"]);
          };
        }
      }));

      script.__file = "src/Prayer/prayerRequestList.obs";

    })
  };
}));
//# sourceMappingURL=prayerRequestList.obs.js.map
