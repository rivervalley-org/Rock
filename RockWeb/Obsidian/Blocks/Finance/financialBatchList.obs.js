System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Utility/dialogs', '@Obsidian/Utility/numberUtils', '@Obsidian/Enums/Finance/batchStatus', '@Obsidian/Controls/accountPicker.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/standardFilterDaysBack.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, isRef, withCtx, createVNode, createElementVNode, createTextVNode, computed, createElementBlock, Fragment, renderList, normalizeClass, toDisplayString, createCommentVNode, useConfigurationValues, useInvokeBlockAction, usePersonPreferences, EntityType, Grid, SelectColumn, DateColumn, dateValueFilter, Column, textValueFilter, TextColumn, pickExistingValueFilter, LabelColumn, CurrencyColumn, numberValueFilter, AttributeColumns, DeleteColumn, RockButton, SectionHeader, alert, confirm, toNumberOrNull, toCurrencyOrNull, BatchStatusDescription, BatchStatus, AccountPicker, DropDownList, Modal, StandardFilterDaysBack, useVModelPassthrough, deepEqual;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      computed = module.computed;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      usePersonPreferences = module.usePersonPreferences;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      Grid = module["default"];
      SelectColumn = module.SelectColumn;
      DateColumn = module.DateColumn;
      dateValueFilter = module.dateValueFilter;
      Column = module.Column;
      textValueFilter = module.textValueFilter;
      TextColumn = module.TextColumn;
      pickExistingValueFilter = module.pickExistingValueFilter;
      LabelColumn = module.LabelColumn;
      CurrencyColumn = module.CurrencyColumn;
      numberValueFilter = module.numberValueFilter;
      AttributeColumns = module.AttributeColumns;
      DeleteColumn = module.DeleteColumn;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
    }, function (module) {
      alert = module.alert;
      confirm = module.confirm;
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
      toCurrencyOrNull = module.toCurrencyOrNull;
    }, function (module) {
      BatchStatusDescription = module.BatchStatusDescription;
      BatchStatus = module.BatchStatus;
    }, function (module) {
      AccountPicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      StandardFilterDaysBack = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      deepEqual = module.deepEqual;
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
      var PreferenceKey = function (PreferenceKey) {
        PreferenceKey["FilterDaysBack"] = "filter-days-back";
        PreferenceKey["FilterContainsSourceType"] = "filter-contains-source";
        PreferenceKey["FilterContainsTransactionType"] = "filter-contains-transaction-type";
        PreferenceKey["FilterAccounts"] = "filter-accounts";
        return PreferenceKey;
      }({});

      var _hoisted_1$1 = {
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-4"
      };
      var _hoisted_3$1 = {
        class: "col-md-4"
      };
      var _hoisted_4$1 = {
        class: "col-md-4"
      };
      var _hoisted_5$1 = {
        class: "col-md-4"
      };
      var script$1 = defineComponent({
        name: 'gridSettingsModal.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          visible: {
            type: Boolean,
            required: true
          },
          transactionTypeItems: {
            type: Array,
            required: true
          },
          sourceItems: {
            type: Array,
            required: true
          }
        },
        emits: ["update:modelValue", "update:visible", "close"],
        setup(__props, _ref) {
          var _props$modelValue$con, _props$modelValue$con2;
          var emit = _ref.emit;
          var props = __props;
          var daysBack = ref(props.modelValue.daysBack);
          var containsTransactionType = ref((_props$modelValue$con = props.modelValue.containsTransactionType) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : "");
          var containsSourceType = ref((_props$modelValue$con2 = props.modelValue.containsSourceType) !== null && _props$modelValue$con2 !== void 0 ? _props$modelValue$con2 : "");
          var accounts = ref(props.modelValue.accounts);
          var isVisible = useVModelPassthrough(props, "visible", emit);
          function onSave() {
            var value = {
              daysBack: daysBack.value,
              containsSourceType: containsSourceType.value,
              containsTransactionType: containsTransactionType.value,
              accounts: accounts.value
            };
            if (!deepEqual(value, props.modelValue, true)) {
              emit("update:modelValue", value);
            }
            isVisible.value = false;
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$con3, _props$modelValue$con4;
            daysBack.value = props.modelValue.daysBack;
            containsSourceType.value = (_props$modelValue$con3 = props.modelValue.containsSourceType) !== null && _props$modelValue$con3 !== void 0 ? _props$modelValue$con3 : "";
            containsTransactionType.value = (_props$modelValue$con4 = props.modelValue.containsTransactionType) !== null && _props$modelValue$con4 !== void 0 ? _props$modelValue$con4 : "";
            accounts.value = props.modelValue.accounts;
          });
          watch(isVisible, () => {
            if (!isVisible.value) {
              emit("close");
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(isVisible) ? isVisible.value = $event : null),
              title: "Settings",
              saveText: "Save",
              onSave: onSave
            }, {
              default: withCtx(() => [createVNode(unref(SectionHeader), {
                title: "Filters"
              }), createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(StandardFilterDaysBack), {
                modelValue: daysBack.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => daysBack.value = $event),
                label: "Date Range"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(DropDownList), {
                modelValue: containsTransactionType.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => containsTransactionType.value = $event),
                label: "Contains Transaction Type",
                items: __props.transactionTypeItems
              }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_4$1, [createVNode(unref(DropDownList), {
                modelValue: containsSourceType.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => containsSourceType.value = $event),
                label: "Contains Source Type",
                items: __props.sourceItems
              }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_5$1, [createVNode(unref(AccountPicker), {
                modelValue: accounts.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => accounts.value = $event),
                label: "Accounts",
                multiple: ""
              }, null, 8, ["modelValue"])])])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$1.__file = "src/Finance/FinancialBatchList/gridSettingsModal.partial.obs";

      var _hoisted_1 = {
        key: 0,
        class: "alert alert-info"
      };
      var _hoisted_2 = {
        class: "text-semibold"
      };
      var _hoisted_3 = createTextVNode();
      var _hoisted_4 = {
        class: "text-muted text-xs"
      };
      var _hoisted_5 = {
        key: 0
      };
      var _hoisted_6 = createElementVNode("div", {
        class: "skeleton skeleton-text skeleton-rounded"
      }, null, -1);
      var _hoisted_7 = {
        class: "text-sm"
      };
      var _hoisted_8 = createElementVNode("div", {
        class: "skeleton skeleton-text skeleton-rounded"
      }, null, -1);
      var _hoisted_9 = {
        key: 0,
        class: "label label-warning"
      };
      var _hoisted_10 = {
        class: "text-sm"
      };
      var _hoisted_11 = ["href", "onclick"];
      var _hoisted_12 = {
        key: 1
      };
      var _hoisted_13 = {
        key: 2,
        class: "ml-1 text-xs"
      };
      var _hoisted_14 = {
        key: 0,
        class: "fa fa-circle text-warning",
        title: "The batch totals do not match the remote settlement amount."
      };
      var _hoisted_15 = {
        key: 1,
        class: "fa fa-circle text-success",
        title: "The batch totals match the remote settlement amount."
      };
      var _hoisted_16 = {
        class: "flex-grow-1 text-right"
      };
      var _hoisted_17 = {
        key: 0,
        class: "d-flex",
        style: {
          "background-color": "#faf7f5",
          "padding": "var(--table-cell-padding-y) 52px var(--table-cell-padding-y) var(--table-cell-padding-x)"
        }
      };
      var _hoisted_18 = createElementVNode("div", {
        class: "flex-grow-1"
      }, null, -1);
      var _hoisted_19 = createTextVNode("Show all");
      var _hoisted_20 = createTextVNode("Show top 5");
      var _hoisted_21 = {
        class: "text-right",
        style: {
          "padding-left": "52px"
        }
      };
      var _hoisted_22 = createElementVNode("td", {
        class: "text-bold"
      }, "Total", -1);
      var _hoisted_23 = {
        class: "text-bold text-right",
        style: {
          "padding-left": "52px"
        }
      };
      var script = exports('default', defineComponent({
        name: 'financialBatchList',
        setup(__props) {
          var _toNumberOrNull;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var preferences = usePersonPreferences().blockPreferences;
          var gridElement = ref();
          var gridDataSource = ref();
          var hasAnySettlementId = ref(false);
          var hasSelectedRows = ref(false);
          var showAllSummaryAccounts = ref(false);
          var accountSummaries = ref([]);
          var summaryTotal = ref(0);
          var isGridSettingsVisible = ref(false);
          var gridSettings = ref({
            daysBack: (_toNumberOrNull = toNumberOrNull(preferences.getValue(PreferenceKey.FilterDaysBack))) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : 180,
            containsSourceType: preferences.getValue(PreferenceKey.FilterContainsSourceType),
            containsTransactionType: preferences.getValue(PreferenceKey.FilterContainsTransactionType),
            accounts: JSON.parse(preferences.getValue(PreferenceKey.FilterAccounts) || "[]")
          });
          var batchLabelColors = {
            [BatchStatusDescription[BatchStatus.Pending]]: "warning",
            [BatchStatusDescription[BatchStatus.Open]]: "info",
            [BatchStatusDescription[BatchStatus.Closed]]: "default"
          };
          var hasSettingsFilters = computed(() => {
            return gridSettings.value.daysBack > 0 || !!gridSettings.value.containsSourceType || !!gridSettings.value.containsTransactionType || gridSettings.value.accounts.length > 0;
          });
          var hasSettingsFilterDate = computed(() => {
            return gridSettings.value.daysBack > 0;
          });
          var customActions = computed(() => {
            return [{
              title: "Open Selected Batches",
              iconCssClass: "fa fa-folder-open",
              disabled: !hasSelectedRows.value,
              handler: onOpenSelectedBatches
            }, {
              title: "Close Selected Batches",
              iconCssClass: "fa fa-folder",
              disabled: !hasSelectedRows.value,
              handler: onCloseSelectedBatches
            }];
          });
          var visibleAccountSummaries = computed(() => {
            if (showAllSummaryAccounts.value) {
              return accountSummaries.value;
            }
            var summaries = [];
            var otherAccount;
            var _iterator = _createForOfIteratorHelper(accountSummaries.value),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var account = _step.value;
                if (summaries.length >= 5) {
                  if (!otherAccount) {
                    otherAccount = {
                      idKey: "",
                      name: "Other",
                      amount: 0,
                      isOtherAccount: true
                    };
                    summaries.push(otherAccount);
                  }
                  otherAccount.amount += account.amount;
                } else {
                  summaries.push(account);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return summaries;
          });
          function loadGridData() {
            return _loadGridData.apply(this, arguments);
          }
          function _loadGridData() {
            _loadGridData = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("GetGridData");
              if (result.isSuccess && result.data) {
                if (result.data.rows) {
                  updateAdditionalRowData(result.data.rows);
                  calculateTotals(result.data.rows);
                  hasAnySettlementId.value = result.data.rows.some(r => !!r.remoteSettlementKey);
                }
                return result.data;
              } else {
                var _result$errorMessage;
                throw new Error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to load grid data.");
              }
            });
            return _loadGridData.apply(this, arguments);
          }
          function setBulkBatchStatus(_x, _x2) {
            return _setBulkBatchStatus.apply(this, arguments);
          }
          function _setBulkBatchStatus() {
            _setBulkBatchStatus = _asyncToGenerator(function* (state, open) {
              if (!state.selectedKeys || state.selectedKeys.length === 0) {
                return;
              }
              var request = {
                keys: state.selectedKeys,
                open
              };
              var result = yield invokeBlockAction("SetBulkBatchStatus", {
                request
              });
              if (result.isSuccess && result.data) {
                var _gridElement$value, _result$data$message2;
                if (!result.data.isSuccess) {
                  var _result$data$message;
                  var msg = (_result$data$message = result.data.message) !== null && _result$data$message !== void 0 ? _result$data$message : "Unknown error while trying to ".concat(open ? "open" : "close", " batches.");
                  if (result.data.errors && result.data.errors.length > 0) {
                    msg += "\n" + result.data.errors.join("\n");
                  }
                  return yield alert(msg);
                }
                var rows = state.rows;
                var _iterator7 = _createForOfIteratorHelper(state.selectedKeys),
                  _step7;
                try {
                  var _loop = function* _loop() {
                    var key = _step7.value;
                    var row = rows.find(r => r.idKey === key);
                    if (row) {
                      row.status = open ? BatchStatus.Open : BatchStatus.Closed;
                    }
                  };
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    yield* _loop();
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
                (_gridElement$value = gridElement.value) === null || _gridElement$value === void 0 ? void 0 : _gridElement$value.rowsUpdated(state.selectedKeys);
                yield alert((_result$data$message2 = result.data.message) !== null && _result$data$message2 !== void 0 ? _result$data$message2 : "Batches have been updated.");
              } else {
                var _result$errorMessage2;
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to ".concat(open ? "open" : "close", " batches."));
              }
            });
            return _setBulkBatchStatus.apply(this, arguments);
          }
          function updateAdditionalRowData(rows) {
            var _iterator2 = _createForOfIteratorHelper(rows),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var row = _step2.value;
                var totalAmount = 0;
                var varianceAmount = 0;
                var varianceCount = 0;
                var _iterator3 = _createForOfIteratorHelper(row.accounts),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var account = _step3.value;
                    totalAmount += account.amount;
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
                row.totalAmount = totalAmount;
                varianceAmount = totalAmount - row.controlAmount;
                varianceCount = row.controlItemCount ? row.transactionCount - row.controlItemCount : 0;
                if (varianceAmount !== 0 || varianceCount !== 0) {
                  row.variance = {
                    amount: varianceAmount,
                    count: varianceCount
                  };
                }
                if (row.remoteSettlementAmount === undefined || row.remoteSettlementAmount === null) {
                  row.remoteSettlementAmountStatus = 0;
                } else if (row.remoteSettlementAmount !== totalAmount) {
                  row.remoteSettlementAmountStatus = 1;
                } else {
                  row.remoteSettlementAmountStatus = 2;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          function calculateTotals(rows) {
            var summaries = new Map();
            summaryTotal.value = 0;
            var _iterator4 = _createForOfIteratorHelper(rows),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var row = _step4.value;
                var _iterator5 = _createForOfIteratorHelper(row.accounts),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var account = _step5.value;
                    var summary = summaries.get(account.idKey);
                    if (!summary) {
                      summary = {
                        idKey: account.idKey,
                        name: account.name,
                        amount: 0,
                        isOtherAccount: false
                      };
                      summaries.set(account.idKey, summary);
                    }
                    summary.amount += account.amount;
                    summaryTotal.value += account.amount;
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            var sortedSummaries = [...summaries.values()];
            sortedSummaries.sort((a, b) => b.amount - a.amount);
            accountSummaries.value = sortedSummaries;
          }
          function getRowNameFilterValue(row) {
            var _r$note;
            var r = row;
            return "".concat(r.name, " ").concat(r.id, " ").concat((_r$note = r.note) !== null && _r$note !== void 0 ? _r$note : "");
          }
          function getRowAccountsFilterValue(row) {
            var filterValue = "";
            var _iterator6 = _createForOfIteratorHelper(row.accounts),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _toCurrencyOrNull, _config$options;
                var account = _step6.value;
                filterValue += " ".concat(account.name, " ").concat((_toCurrencyOrNull = toCurrencyOrNull(account.amount, (_config$options = config.options) === null || _config$options === void 0 ? void 0 : _config$options.currencyInfo)) !== null && _toCurrencyOrNull !== void 0 ? _toCurrencyOrNull : "");
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            return filterValue;
          }
          function getRowVariancesSortValue(row) {
            var r = row;
            if (r.variance) {
              if (r.variance.count != 0) {
                return 2;
              } else {
                return 1;
              }
            }
            return 0;
          }
          function getRowSettlementFilterValue(row) {
            var _remoteSettlementKey;
            return (_remoteSettlementKey = row.remoteSettlementKey) !== null && _remoteSettlementKey !== void 0 ? _remoteSettlementKey : "";
          }
          function onSelectItem(key) {
            var _config$navigationUrl;
            if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.DetailPage]) {
              window.location.href = config.navigationUrls[NavigationUrlKey.DetailPage].replace("((Key))", key);
            }
          }
          function onDeleteClick(_x3, _x4) {
            return _onDeleteClick.apply(this, arguments);
          }
          function _onDeleteClick() {
            _onDeleteClick = _asyncToGenerator(function* (key, state) {
              var row = state.rows.find(r => r["idKey"] === key);
              if (row && row.transactionCount > 0) {
                var reallyConfirmed = yield confirm("This batch has transactions. Are you sure that you want to delete this batch and all of its transactions?");
                if (!reallyConfirmed) {
                  return;
                }
              }
              var result = yield invokeBlockAction("Delete", {
                key
              });
              if (result.isSuccess) {
                if (gridElement.value) {
                  gridElement.value.deleteRow(key);
                }
              } else {
                var _result$errorMessage3;
                yield alert((_result$errorMessage3 = result.errorMessage) !== null && _result$errorMessage3 !== void 0 ? _result$errorMessage3 : "Unknown error while trying to delete financial batch.");
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
          function onFilteredRowsChanged(state) {
            calculateTotals(state.filteredRows);
          }
          function onSelectedKeysChanged(state) {
            hasSelectedRows.value = state.selectedKeys.length > 0;
          }
          function onOpenSelectedBatches(_x5) {
            return _onOpenSelectedBatches.apply(this, arguments);
          }
          function _onOpenSelectedBatches() {
            _onOpenSelectedBatches = _asyncToGenerator(function* (state) {
              setBulkBatchStatus(state, true);
            });
            return _onOpenSelectedBatches.apply(this, arguments);
          }
          function onCloseSelectedBatches(_x6) {
            return _onCloseSelectedBatches.apply(this, arguments);
          }
          function _onCloseSelectedBatches() {
            _onCloseSelectedBatches = _asyncToGenerator(function* (state) {
              setBulkBatchStatus(state, false);
            });
            return _onCloseSelectedBatches.apply(this, arguments);
          }
          function onDeleteRowDisabled(row) {
            return row.status === BatchStatus.Closed;
          }
          watch(gridSettings, _asyncToGenerator(function* () {
            var _gridSettings$value$c, _gridSettings$value$c2;
            preferences.setValue(PreferenceKey.FilterDaysBack, gridSettings.value.daysBack.toString());
            preferences.setValue(PreferenceKey.FilterContainsSourceType, (_gridSettings$value$c = gridSettings.value.containsSourceType) !== null && _gridSettings$value$c !== void 0 ? _gridSettings$value$c : "");
            preferences.setValue(PreferenceKey.FilterContainsTransactionType, (_gridSettings$value$c2 = gridSettings.value.containsTransactionType) !== null && _gridSettings$value$c2 !== void 0 ? _gridSettings$value$c2 : "");
            preferences.setValue(PreferenceKey.FilterAccounts, JSON.stringify(gridSettings.value.accounts));
            yield preferences.save();
            gridDataSource.value = loadGridData();
          }));
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition, _unref$options$transa, _unref$options9, _unref$options$source, _unref$options10;
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Grid), {
              ref_key: "gridElement",
              ref: gridElement,
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              customActions: unref(customActions),
              itemTerm: "Batch",
              entityTypeGuid: unref(EntityType).FinancialBatch,
              stickyHeader: "",
              gridSettings: "",
              gridSettingsActive: unref(hasSettingsFilters),
              onAddItem: unref(config).isAddEnabled ? onAddItem : undefined,
              onSelectItem: onSelectItem,
              onGridSettingsClick: _cache[1] || (_cache[1] = $event => isGridSettingsVisible.value = true),
              onFilteredRowsChanged: onFilteredRowsChanged,
              onSelectedKeysChanged: onSelectedKeysChanged
            }, {
              gridFooterAppend: withCtx(() => {
                var _unref$options2;
                return [accountSummaries.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [_hoisted_18, createElementVNode("div", null, [createVNode(unref(SectionHeader), {
                  title: "Totals"
                }, {
                  actions: withCtx(() => [createVNode(unref(RockButton), {
                    btnType: "link",
                    btnSize: "xs",
                    onClick: _cache[0] || (_cache[0] = $event => showAllSummaryAccounts.value = !showAllSummaryAccounts.value)
                  }, {
                    default: withCtx(() => [!showAllSummaryAccounts.value ? (openBlock(), createElementBlock(Fragment, {
                      key: 0
                    }, [_hoisted_19], 64)) : (openBlock(), createElementBlock(Fragment, {
                      key: 1
                    }, [_hoisted_20], 64))]),
                    _: 1
                  })]),
                  _: 1
                }), createElementVNode("table", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(visibleAccountSummaries), account => {
                  var _unref$options;
                  return openBlock(), createElementBlock("tr", null, [createElementVNode("td", {
                    class: normalizeClass({
                      'font-italic': account.isOtherAccount
                    })
                  }, toDisplayString(account.name), 3), createElementVNode("td", _hoisted_21, toDisplayString(unref(toCurrencyOrNull)(account.amount, (_unref$options = unref(config).options) === null || _unref$options === void 0 ? void 0 : _unref$options.currencyInfo)), 1)]);
                }), 256)), createElementVNode("tr", null, [_hoisted_22, createElementVNode("td", _hoisted_23, toDisplayString(unref(toCurrencyOrNull)(summaryTotal.value, (_unref$options2 = unref(config).options) === null || _unref$options2 === void 0 ? void 0 : _unref$options2.currencyInfo)), 1)])])])])) : createCommentVNode("v-if", true)];
              }),
              default: withCtx(() => {
                var _unref$options3, _unref$options4, _unref$options7, _unref$gridDefinition2, _unref$gridDefinition3;
                return [createVNode(unref(SelectColumn)), createVNode(unref(DateColumn), {
                  name: "date",
                  title: "Date",
                  field: "startDateTime",
                  filter: unref(dateValueFilter),
                  width: "120",
                  visiblePriority: "sm"
                }, {
                  filterPrepend: withCtx(() => [unref(hasSettingsFilterDate) ? (openBlock(), createElementBlock("div", _hoisted_1, " Settings is also limiting the dates shown. ")) : createCommentVNode("v-if", true)]),
                  _: 1
                }, 8, ["filter"]), createVNode(unref(Column), {
                  name: "name",
                  title: "Name",
                  filter: unref(textValueFilter),
                  filterValue: getRowNameFilterValue,
                  quickFilterValue: getRowNameFilterValue,
                  visiblePriority: "xs"
                }, {
                  format: withCtx(_ref2 => {
                    var row = _ref2.row;
                    return [createElementVNode("div", null, [createElementVNode("div", null, [createElementVNode("span", _hoisted_2, toDisplayString(row.name), 1), _hoisted_3, createElementVNode("span", _hoisted_4, toDisplayString(row.id), 1)]), row.note ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(row.note), 1)) : createCommentVNode("v-if", true)])];
                  }),
                  skeleton: withCtx(() => [_hoisted_6]),
                  _: 1
                }, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "accountingSystemCode",
                  title: "Accounting Code",
                  field: "accountingSystemCode",
                  filter: unref(textValueFilter),
                  hideOnScreen: !((_unref$options3 = unref(config).options) !== null && _unref$options3 !== void 0 && _unref$options3.showAccountingSystemCodeColumn),
                  visiblePriority: "lg"
                }, null, 8, ["filter", "hideOnScreen"]), createVNode(unref(Column), {
                  name: "accounts",
                  title: "Accounts",
                  filter: unref(textValueFilter),
                  filterValue: getRowAccountsFilterValue,
                  quickFilterValue: getRowAccountsFilterValue,
                  hideOnScreen: !((_unref$options4 = unref(config).options) !== null && _unref$options4 !== void 0 && _unref$options4.showAccountsColumn),
                  visiblePriority: "lg"
                }, {
                  format: withCtx(_ref3 => {
                    var row = _ref3.row;
                    return [createElementVNode("div", _hoisted_7, [(openBlock(true), createElementBlock(Fragment, null, renderList(row.accounts, account => {
                      var _unref$options5;
                      return openBlock(), createElementBlock("div", null, toDisplayString(account.name) + ": " + toDisplayString(unref(toCurrencyOrNull)(account.amount, (_unref$options5 = unref(config).options) === null || _unref$options5 === void 0 ? void 0 : _unref$options5.currencyInfo)), 1);
                    }), 256))])];
                  }),
                  skeleton: withCtx(() => [_hoisted_8]),
                  _: 1
                }, 8, ["filter", "hideOnScreen"]), createVNode(unref(Column), {
                  name: "variances",
                  title: "Variances",
                  width: "140",
                  sortValue: getRowVariancesSortValue,
                  visiblePriority: "md"
                }, {
                  format: withCtx(_ref4 => {
                    var _unref$options6;
                    var row = _ref4.row;
                    return [row.variance ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(unref(toCurrencyOrNull)(row.variance.amount, (_unref$options6 = unref(config).options) === null || _unref$options6 === void 0 ? void 0 : _unref$options6.currencyInfo)) + " | " + toDisplayString(row.variance.count), 1)) : createCommentVNode("v-if", true)];
                  }),
                  _: 1
                }), createVNode(unref(TextColumn), {
                  name: "campus",
                  title: "Campus",
                  field: "campus",
                  filter: unref(pickExistingValueFilter),
                  hideOnScreen: !((_unref$options7 = unref(config).options) !== null && _unref$options7 !== void 0 && _unref$options7.hasMultipleCampuses),
                  visiblePriority: "lg"
                }, null, 8, ["filter", "hideOnScreen"]), createVNode(unref(LabelColumn), {
                  name: "status",
                  title: "Status",
                  field: "status",
                  filter: unref(pickExistingValueFilter),
                  textSource: unref(BatchStatusDescription),
                  classSource: batchLabelColors,
                  width: "120",
                  visiblePriority: "sm"
                }, null, 8, ["filter", "textSource"]), createVNode(unref(Column), {
                  name: "settlement",
                  title: "Settlement Id",
                  quickFilterValue: getRowSettlementFilterValue,
                  filterValue: getRowSettlementFilterValue,
                  filter: unref(textValueFilter),
                  hideOnScreen: !hasAnySettlementId.value,
                  width: "7%",
                  visiblePriority: "xl"
                }, {
                  format: withCtx(_ref5 => {
                    var row = _ref5.row;
                    return [createElementVNode("div", _hoisted_10, [row.remoteSettlementKey && row.remoteSettlementUrl ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      href: row.remoteSettlementUrl,
                      onclick: e => e.stopPropagation()
                    }, toDisplayString(row.remoteSettlementKey), 9, _hoisted_11)) : (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString(row.remoteSettlementKey), 1)), row.remoteSettlementAmountStatus !== 0 ? (openBlock(), createElementBlock("span", _hoisted_13, [row.remoteSettlementAmountStatus === 1 ? (openBlock(), createElementBlock("i", _hoisted_14)) : (openBlock(), createElementBlock("i", _hoisted_15))])) : createCommentVNode("v-if", true)])];
                  }),
                  _: 1
                }, 8, ["filter", "hideOnScreen"]), createVNode(unref(CurrencyColumn), {
                  name: "totalAmount",
                  title: "Total Amount",
                  field: "totalAmount",
                  filter: unref(numberValueFilter),
                  width: "165",
                  visiblePriority: "md"
                }, {
                  format: withCtx(_ref6 => {
                    var _unref$options8;
                    var row = _ref6.row;
                    return [createElementVNode("div", _hoisted_16, toDisplayString(unref(toCurrencyOrNull)(row.totalAmount, (_unref$options8 = unref(config).options) === null || _unref$options8 === void 0 ? void 0 : _unref$options8.currencyInfo)), 1)];
                  }),
                  _: 1
                }, 8, ["filter"]), createVNode(unref(AttributeColumns), {
                  attributes: (_unref$gridDefinition2 = (_unref$gridDefinition3 = unref(config).gridDefinition) === null || _unref$gridDefinition3 === void 0 ? void 0 : _unref$gridDefinition3.attributeFields) !== null && _unref$gridDefinition2 !== void 0 ? _unref$gridDefinition2 : []
                }, null, 8, ["attributes"]), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                  key: 0,
                  rowDisabled: onDeleteRowDisabled,
                  onClick: onDeleteClick
                })) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }, 8, ["definition", "data", "customActions", "entityTypeGuid", "gridSettingsActive", "onAddItem"]), createVNode(unref(script$1), {
              modelValue: gridSettings.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => gridSettings.value = $event),
              visible: isGridSettingsVisible.value,
              "onUpdate:visible": _cache[3] || (_cache[3] = $event => isGridSettingsVisible.value = $event),
              transactionTypeItems: (_unref$options$transa = (_unref$options9 = unref(config).options) === null || _unref$options9 === void 0 ? void 0 : _unref$options9.transactionTypes) !== null && _unref$options$transa !== void 0 ? _unref$options$transa : [],
              sourceItems: (_unref$options$source = (_unref$options10 = unref(config).options) === null || _unref$options10 === void 0 ? void 0 : _unref$options10.sources) !== null && _unref$options$source !== void 0 ? _unref$options$source : []
            }, null, 8, ["modelValue", "visible", "transactionTypeItems", "sourceItems"])], 64);
          };
        }
      }));

      script.__file = "src/Finance/financialBatchList.obs";

    })
  };
}));
//# sourceMappingURL=financialBatchList.obs.js.map
