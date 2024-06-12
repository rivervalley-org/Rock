System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var createTextVNode, createElementVNode, defineComponent, ref, resolveComponent, openBlock, createBlock, unref, withCtx, createVNode, normalizeStyle, toDisplayString, createCommentVNode, reactive, useConfigurationValues, useInvokeBlockAction, EntityType, Grid, textValueFilter, TextColumn, pickExistingValueFilter, BooleanColumn, AttributeColumns, SecurityColumn, DeleteColumn, alert;
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
      normalizeStyle = module.normalizeStyle;
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
      textValueFilter = module.textValueFilter;
      TextColumn = module.TextColumn;
      pickExistingValueFilter = module.pickExistingValueFilter;
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

      var _hoisted_1 = {
        class: "d-flex flex-fill align-items-center"
      };
      var _hoisted_2 = {
        class: "flex-grow-1"
      };
      var _hoisted_3 = createTextVNode();
      var _hoisted_4 = createElementVNode("br", null, null, -1);
      var _hoisted_5 = createElementVNode("div", {
        class: "d-flex flex-fill align-items-center"
      }, [createElementVNode("div", {
        class: "mr-2 flex-shrink-0 skeleton skeleton-xs",
        style: {
          "width": "24px",
          "height": "24px",
          "border-radius": "12px"
        }
      }), createElementVNode("div", {
        class: "skeleton skeleton-text skeleton-sm skeleton-rounded flex-grow-1"
      })], -1);
      var script = exports('default', defineComponent({
        name: 'siteList',
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
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete site.");
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
              itemTerm: "Site",
              entityTypeGuid: unref(EntityType).Site,
              expectedRowCount: (_unref$expectedRowCou = unref(config).expectedRowCount) !== null && _unref$expectedRowCou !== void 0 ? _unref$expectedRowCou : undefined,
              tooltipField: "name",
              stickyHeader: "",
              liveUpdates: "",
              onAddItem: unref(config).isAddEnabled ? onAddItem : undefined,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => {
                var _unref$gridDefinition2, _unref$gridDefinition3;
                return [createVNode(_component_Column, {
                  name: "name",
                  title: "Name",
                  filter: unref(textValueFilter),
                  filterValue: "{{ row.name }}",
                  quickFilterValue: "{{ row.name }}"
                }, {
                  format: withCtx(_ref => {
                    var row = _ref.row;
                    return [createElementVNode("div", _hoisted_1, [createElementVNode("div", {
                      class: "mr-2 flex-shrink-0",
                      style: normalizeStyle({
                        'width': '50px',
                        'height': '50px',
                        'background-image': "url('".concat(row.siteIconUrl, "')"),
                        'background-size': 'cover'
                      })
                    }, null, 4), createElementVNode("div", _hoisted_2, [createElementVNode("b", null, toDisplayString(row.name), 1), _hoisted_3, _hoisted_4, createTextVNode(" " + toDisplayString(row.description), 1)])])];
                  }),
                  skeleton: withCtx(() => [_hoisted_5]),
                  export: withCtx(_ref2 => {
                    var row = _ref2.row;
                    return [createTextVNode(toDisplayString(row.name), 1)];
                  }),
                  _: 1
                }, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "domains",
                  title: "Domains",
                  field: "domains",
                  filter: unref(textValueFilter),
                  visiblePriority: "md"
                }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "theme",
                  title: "Theme",
                  field: "theme",
                  filter: unref(pickExistingValueFilter),
                  visiblePriority: "xs"
                }, null, 8, ["filter"]), createVNode(unref(BooleanColumn), {
                  name: "isSystem",
                  title: "Is System",
                  field: "isSystem",
                  visiblePriority: "xs"
                }), createVNode(unref(AttributeColumns), {
                  attributes: (_unref$gridDefinition2 = (_unref$gridDefinition3 = unref(config).gridDefinition) === null || _unref$gridDefinition3 === void 0 ? void 0 : _unref$gridDefinition3.attributeFields) !== null && _unref$gridDefinition2 !== void 0 ? _unref$gridDefinition2 : []
                }, null, 8, ["attributes"]), createVNode(unref(SecurityColumn)), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                  key: 0,
                  onClick: onDeleteClick
                })) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "expectedRowCount", "onAddItem"]);
          };
        }
      }));

      script.__file = "src/Cms/siteList.obs";

    })
  };
}));
//# sourceMappingURL=siteList.obs.js.map
