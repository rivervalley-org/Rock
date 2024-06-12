System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, unref, openBlock, createBlock, withCtx, createCommentVNode, createVNode, createElementVNode, reactive, useConfigurationValues, useInvokeBlockAction, EntityType, Grid, SelectColumn, Column, TextColumn, textValueFilter, DateColumn, dateValueFilter, numberValueFilter;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      unref = module.unref;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      createElementVNode = module.createElementVNode;
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
      TextColumn = module.TextColumn;
      textValueFilter = module.textValueFilter;
      DateColumn = module.DateColumn;
      dateValueFilter = module.dateValueFilter;
      numberValueFilter = module.numberValueFilter;
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

      (function (NavigationUrlKey) {
        NavigationUrlKey["DetailPage"] = "DetailPage";
        return NavigationUrlKey;
      })({});
      var ActionKey = function (ActionKey) {
        ActionKey["Communicate"] = "Communicate";
        ActionKey["MergePerson"] = "Merge Person";
        ActionKey["BulkUpdate"] = "Bulk Update";
        ActionKey["ExcelExport"] = "Excel Export";
        ActionKey["MergeTemplate"] = "Merge Template";
        return ActionKey;
      }({});
      var ColumnKey = function (ColumnKey) {
        ColumnKey["Amount"] = "Amount";
        ColumnKey["DonorAddress"] = "Donor Address";
        ColumnKey["DonorEmail"] = "Donor Email";
        ColumnKey["Participant"] = "Participant";
        return ColumnKey;
      }({});

      var _hoisted_1 = ["innerHTML"];
      var _hoisted_2 = ["innerHTML"];
      var _hoisted_3 = ["innerHTML"];
      var script = exports('default', defineComponent({
        name: 'fundraisingDonationList',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var gridDataSource = ref();
          var gridData;
          var isSelectColumnVisible = computed(() => {
            var _config$options, _config$options$actio, _config$options2, _config$options2$acti, _config$options3, _config$options3$acti, _config$options4, _config$options4$acti, _config$options5, _config$options5$acti;
            return !((_config$options = config.options) !== null && _config$options !== void 0 && (_config$options$actio = _config$options.actionsToHide) !== null && _config$options$actio !== void 0 && _config$options$actio.includes(ActionKey.Communicate)) || !((_config$options2 = config.options) !== null && _config$options2 !== void 0 && (_config$options2$acti = _config$options2.actionsToHide) !== null && _config$options2$acti !== void 0 && _config$options2$acti.includes(ActionKey.MergePerson)) || !((_config$options3 = config.options) !== null && _config$options3 !== void 0 && (_config$options3$acti = _config$options3.actionsToHide) !== null && _config$options3$acti !== void 0 && _config$options3$acti.includes(ActionKey.BulkUpdate)) || !((_config$options4 = config.options) !== null && _config$options4 !== void 0 && (_config$options4$acti = _config$options4.actionsToHide) !== null && _config$options4$acti !== void 0 && _config$options4$acti.includes(ActionKey.ExcelExport)) || !((_config$options5 = config.options) !== null && _config$options5 !== void 0 && (_config$options5$acti = _config$options5.actionsToHide) !== null && _config$options5$acti !== void 0 && _config$options5$acti.includes(ActionKey.MergeTemplate));
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
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$options, _unref$gridDefinition, _unref$options2, _unref$options2$actio, _unref$options3, _unref$options3$actio, _unref$options4, _unref$options4$actio, _unref$options5, _unref$options5$actio, _unref$options6, _unref$options6$actio;
            return (_unref$options = unref(config).options) !== null && _unref$options !== void 0 && _unref$options.isBlockVisible ? (openBlock(), createBlock(unref(Grid), {
              key: 0,
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Fundraising Donations",
              entityTypeGuid: unref(EntityType).FinancialTransactionDetail,
              stickyHeader: "",
              liveUpdates: "",
              showLaunchWorkflow: false,
              showCommunicate: !((_unref$options2 = unref(config).options) !== null && _unref$options2 !== void 0 && (_unref$options2$actio = _unref$options2.actionsToHide) !== null && _unref$options2$actio !== void 0 && _unref$options2$actio.includes(unref(ActionKey).Communicate)),
              showPersonMerge: !((_unref$options3 = unref(config).options) !== null && _unref$options3 !== void 0 && (_unref$options3$actio = _unref$options3.actionsToHide) !== null && _unref$options3$actio !== void 0 && _unref$options3$actio.includes(unref(ActionKey).MergePerson)),
              showBulkUpdate: !((_unref$options4 = unref(config).options) !== null && _unref$options4 !== void 0 && (_unref$options4$actio = _unref$options4.actionsToHide) !== null && _unref$options4$actio !== void 0 && _unref$options4$actio.includes(unref(ActionKey).BulkUpdate)),
              showExport: !((_unref$options5 = unref(config).options) !== null && _unref$options5 !== void 0 && (_unref$options5$actio = _unref$options5.actionsToHide) !== null && _unref$options5$actio !== void 0 && _unref$options5$actio.includes(unref(ActionKey).ExcelExport)),
              showMergeTemplate: !((_unref$options6 = unref(config).options) !== null && _unref$options6 !== void 0 && (_unref$options6$actio = _unref$options6.actionsToHide) !== null && _unref$options6$actio !== void 0 && _unref$options6$actio.includes(unref(ActionKey).MergeTemplate))
            }, {
              default: withCtx(() => {
                var _unref$options7, _unref$options7$colum, _unref$options8, _unref$options8$colum, _unref$options9, _unref$options9$colum, _unref$options10, _unref$options11, _unref$options11$colu;
                return [unref(isSelectColumnVisible) ? (openBlock(), createBlock(unref(SelectColumn), {
                  key: 0
                })) : createCommentVNode("v-if", true), createVNode(unref(Column), {
                  name: "donor",
                  title: "Donor",
                  visiblePriority: "xs"
                }, {
                  format: withCtx(_ref => {
                    var row = _ref.row;
                    return [createElementVNode("div", {
                      innerHTML: row.donor
                    }, null, 8, _hoisted_1)];
                  }),
                  _: 1
                }), !((_unref$options7 = unref(config).options) !== null && _unref$options7 !== void 0 && (_unref$options7$colum = _unref$options7.columnsToHide) !== null && _unref$options7$colum !== void 0 && _unref$options7$colum.includes(unref(ColumnKey).DonorAddress)) ? (openBlock(), createBlock(unref(Column), {
                  key: 1,
                  name: "donorAddress",
                  title: "Donor Address",
                  visiblePriority: "md"
                }, {
                  format: withCtx(_ref2 => {
                    var row = _ref2.row;
                    return [createElementVNode("div", {
                      innerHTML: row.donorAddress
                    }, null, 8, _hoisted_2)];
                  }),
                  _: 1
                })) : createCommentVNode("v-if", true), !((_unref$options8 = unref(config).options) !== null && _unref$options8 !== void 0 && (_unref$options8$colum = _unref$options8.columnsToHide) !== null && _unref$options8$colum !== void 0 && _unref$options8$colum.includes(unref(ColumnKey).DonorEmail)) ? (openBlock(), createBlock(unref(TextColumn), {
                  key: 2,
                  name: "donorEmail",
                  title: "Donor Email",
                  field: "donorEmail",
                  filter: unref(textValueFilter),
                  visiblePriority: "md"
                }, null, 8, ["filter"])) : createCommentVNode("v-if", true), !((_unref$options9 = unref(config).options) !== null && _unref$options9 !== void 0 && (_unref$options9$colum = _unref$options9.columnsToHide) !== null && _unref$options9$colum !== void 0 && _unref$options9$colum.includes(unref(ColumnKey).Participant)) && !((_unref$options10 = unref(config).options) !== null && _unref$options10 !== void 0 && _unref$options10.isContextEntityGroupMember) ? (openBlock(), createBlock(unref(Column), {
                  key: 3,
                  name: "participant",
                  title: "Participant",
                  width: "15%",
                  itemClass: "fundraising-participant-cell",
                  visiblePriority: "xs"
                }, {
                  format: withCtx(_ref3 => {
                    var row = _ref3.row;
                    return [createElementVNode("div", {
                      innerHTML: row.participant
                    }, null, 8, _hoisted_3)];
                  }),
                  _: 1
                })) : createCommentVNode("v-if", true), createVNode(unref(DateColumn), {
                  name: "date",
                  title: "Date",
                  field: "date",
                  filter: unref(dateValueFilter),
                  visiblePriority: "md"
                }, null, 8, ["filter"]), !((_unref$options11 = unref(config).options) !== null && _unref$options11 !== void 0 && (_unref$options11$colu = _unref$options11.columnsToHide) !== null && _unref$options11$colu !== void 0 && _unref$options11$colu.includes(unref(ColumnKey).Amount)) ? (openBlock(), createBlock(unref(TextColumn), {
                  key: 4,
                  name: "amount",
                  title: "Amount",
                  field: "amount",
                  filter: unref(numberValueFilter),
                  visiblePriority: "xs"
                }, null, 8, ["filter"])) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "showCommunicate", "showPersonMerge", "showBulkUpdate", "showExport", "showMergeTemplate"])) : createCommentVNode("v-if", true);
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

      var css_248z = ".fundraising-participant-cell{align-items:stretch!important;flex-direction:column}";
      styleInject(css_248z);

      script.__file = "src/Fundraising/fundraisingDonationList.obs";

    })
  };
}));
//# sourceMappingURL=fundraisingDonationList.obs.js.map
