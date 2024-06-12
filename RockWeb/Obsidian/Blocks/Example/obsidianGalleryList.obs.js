System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, openBlock, createBlock, unref, withCtx, createVNode, normalizeStyle, toDisplayString, createTextVNode, createCommentVNode, reactive, useConfigurationValues, useInvokeBlockAction, EntityType, Grid, SelectColumn, Column, textValueFilter, DateColumn, dateValueFilter, NumberColumn, numberValueFilter, BooleanColumn, TextColumn, pickExistingValueFilter, LabelColumn, AttributeColumns, EditColumn, SecurityColumn, DeleteColumn, alert;
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
      normalizeStyle = module.normalizeStyle;
      toDisplayString = module.toDisplayString;
      createTextVNode = module.createTextVNode;
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
      Column = module.Column;
      textValueFilter = module.textValueFilter;
      DateColumn = module.DateColumn;
      dateValueFilter = module.dateValueFilter;
      NumberColumn = module.NumberColumn;
      numberValueFilter = module.numberValueFilter;
      BooleanColumn = module.BooleanColumn;
      TextColumn = module.TextColumn;
      pickExistingValueFilter = module.pickExistingValueFilter;
      LabelColumn = module.LabelColumn;
      AttributeColumns = module.AttributeColumns;
      EditColumn = module.EditColumn;
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

      var _hoisted_1 = {
        class: "d-flex flex-fill align-items-center"
      };
      var _hoisted_2 = {
        class: "flex-grow-1"
      };
      var _hoisted_3 = createElementVNode("div", {
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
        name: 'obsidianGalleryList',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var gridDataSource = ref();
          var gridData;
          var customActions = [{
            title: "Custom Action",
            tooltip: "This is an example of a custom block action.",
            iconCssClass: "fa fa-key"
          }];
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
            window.location.href = "/Person/".concat(key);
          }
          function onEditClick(key) {
            window.location.href = "/Person/".concat(key);
          }
          function onDeleteClick(_x) {
            return _onDeleteClick.apply(this, arguments);
          }
          function _onDeleteClick() {
            _onDeleteClick = _asyncToGenerator(function* (key) {
              yield alert("Deleting is not supported for this sample grid, it will only be simulated.");
              if (gridData) {
                var _gridData$rows;
                var index = ((_gridData$rows = gridData.rows) !== null && _gridData$rows !== void 0 ? _gridData$rows : []).findIndex(r => r["guid"] === key);
                if (index !== -1) {
                  var _gridData$rows2;
                  (_gridData$rows2 = gridData.rows) === null || _gridData$rows2 === void 0 ? void 0 : _gridData$rows2.splice(index, 1);
                }
              }
            });
            return _onDeleteClick.apply(this, arguments);
          }
          function onAddItem() {
            window.location.href = "/NewFamily";
          }
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition, _unref$expectedRowCou;
            return openBlock(), createBlock(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "guid",
              personKeyField: "guid",
              itemTerm: "Person",
              tooltipField: "email",
              stickyHeader: "",
              liveUpdates: "",
              entityTypeGuid: unref(EntityType).Person,
              expectedRowCount: (_unref$expectedRowCou = unref(config).expectedRowCount) !== null && _unref$expectedRowCou !== void 0 ? _unref$expectedRowCou : undefined,
              customActions: customActions,
              onAddItem: unref(config).isAddEnabled ? onAddItem : undefined,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => {
                var _unref$gridDefinition2, _unref$gridDefinition3;
                return [createVNode(unref(SelectColumn)), createVNode(unref(Column), {
                  name: "name",
                  title: "Name",
                  sortValue: "{{ row.lastName }} {{ row.nickName }}",
                  filter: unref(textValueFilter),
                  filterValue: "{{ row.nickName }} {{ row.lastName }}",
                  quickFilterValue: "{{ row.nickName }} {{  row.lastName }}"
                }, {
                  format: withCtx(_ref => {
                    var row = _ref.row;
                    return [createElementVNode("div", _hoisted_1, [createElementVNode("div", {
                      class: "mr-2 flex-shrink-0",
                      style: normalizeStyle({
                        'width': '24px',
                        'height': '24px',
                        'border-radius': '12px',
                        'background-image': "url('".concat(row.photoUrl, "')"),
                        'background-size': 'cover'
                      })
                    }, null, 4), createElementVNode("div", _hoisted_2, toDisplayString(row.nickName) + " " + toDisplayString(row.lastName), 1)])];
                  }),
                  skeleton: withCtx(() => [_hoisted_3]),
                  export: withCtx(_ref2 => {
                    var row = _ref2.row;
                    return [createTextVNode(toDisplayString(row.nickName) + " " + toDisplayString(row.lastName), 1)];
                  }),
                  _: 1
                }, 8, ["filter"]), createVNode(unref(DateColumn), {
                  name: "birthDate",
                  title: "Birth Date",
                  field: "birthDate",
                  filter: unref(dateValueFilter),
                  visiblePriority: "md"
                }, null, 8, ["filter"]), createVNode(unref(NumberColumn), {
                  name: "age",
                  title: "Age",
                  field: "age",
                  filter: unref(numberValueFilter),
                  visiblePriority: "lg"
                }, null, 8, ["filter"]), createVNode(unref(BooleanColumn), {
                  name: "isEmailActive",
                  title: "Email Active",
                  field: "isEmailActive",
                  visiblePriority: "sm"
                }), createVNode(unref(TextColumn), {
                  name: "campus",
                  title: "Campus",
                  field: "campus",
                  filter: unref(pickExistingValueFilter),
                  visiblePriority: "sm"
                }, null, 8, ["filter"]), createVNode(unref(LabelColumn), {
                  name: "connectionStatus",
                  title: "Connection Status",
                  field: "connectionStatus",
                  filter: unref(pickExistingValueFilter),
                  visiblePriority: "md"
                }, null, 8, ["filter"]), createVNode(unref(AttributeColumns), {
                  attributes: (_unref$gridDefinition2 = (_unref$gridDefinition3 = unref(config).gridDefinition) === null || _unref$gridDefinition3 === void 0 ? void 0 : _unref$gridDefinition3.attributeFields) !== null && _unref$gridDefinition2 !== void 0 ? _unref$gridDefinition2 : []
                }, null, 8, ["attributes"]), createVNode(unref(EditColumn), {
                  onClick: onEditClick
                }), createVNode(unref(SecurityColumn)), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                  key: 0,
                  onClick: onDeleteClick
                })) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "expectedRowCount", "onAddItem"]);
          };
        }
      }));

      script.__file = "src/Example/obsidianGalleryList.obs";

    })
  };
}));
//# sourceMappingURL=obsidianGalleryList.obs.js.map
