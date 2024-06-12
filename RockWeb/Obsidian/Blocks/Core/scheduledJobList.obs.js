System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/SystemGuids/serviceJob', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, isRef, withCtx, createVNode, createElementVNode, computed, createElementBlock, Fragment, normalizeClass, toDisplayString, withModifiers, createCommentVNode, reactive, useConfigurationValues, useInvokeBlockAction, usePersonPreferences, EntityType, ServiceJob, Grid, TextColumn, textValueFilter, DateTimeColumn, dateValueFilter, Column, BooleanColumn, DeleteColumn, alert, DropDownList, TextBox, Modal, SectionHeader, useVModelPassthrough, deepEqual;
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
      computed = module.computed;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      normalizeClass = module.normalizeClass;
      toDisplayString = module.toDisplayString;
      withModifiers = module.withModifiers;
      createCommentVNode = module.createCommentVNode;
      reactive = module.reactive;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      usePersonPreferences = module.usePersonPreferences;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      ServiceJob = module.ServiceJob;
    }, function (module) {
      Grid = module["default"];
      TextColumn = module.TextColumn;
      textValueFilter = module.textValueFilter;
      DateTimeColumn = module.DateTimeColumn;
      dateValueFilter = module.dateValueFilter;
      Column = module.Column;
      BooleanColumn = module.BooleanColumn;
      DeleteColumn = module.DeleteColumn;
    }, function (module) {
      alert = module.alert;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
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

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["DetailPage"] = "DetailPage";
        NavigationUrlKey["HistoryPage"] = "HistoryPage";
        return NavigationUrlKey;
      }({});
      var PreferenceKey = function (PreferenceKey) {
        PreferenceKey["FilterName"] = "filter-name";
        PreferenceKey["FilterIsActive"] = "filter-is-active";
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
          }
        },
        emits: ["update:modelValue", "update:visible", "close"],
        setup(__props, _ref) {
          var _props$modelValue$nam, _props$modelValue$isA;
          var emit = _ref.emit;
          var props = __props;
          var name = ref((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "");
          var isActive = ref((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : "");
          var isVisible = useVModelPassthrough(props, "visible", emit);
          var isActiveOptions = [{
            text: "[All]",
            value: ""
          }, {
            text: "Active",
            value: "true"
          }, {
            text: "Inactive",
            value: "false"
          }];
          function onSave() {
            var value = {
              name: name.value,
              isActive: isActive.value
            };
            if (!deepEqual(value, props.modelValue, true)) {
              emit("update:modelValue", value);
            }
            isVisible.value = false;
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$nam2, _props$modelValue$isA2;
            name.value = (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "";
            isActive.value = (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : "";
          });
          watch(isVisible, () => {
            if (!isVisible.value) {
              emit("close");
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(isVisible) ? isVisible.value = $event : null),
              title: "Settings",
              saveText: "Save",
              onSave: onSave
            }, {
              default: withCtx(() => [createVNode(unref(SectionHeader), {
                title: "Filters"
              }), createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(TextBox), {
                modelValue: name.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => name.value = $event),
                label: "Name"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(DropDownList), {
                modelValue: isActive.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isActive.value = $event),
                label: "Active",
                items: unref(isActiveOptions)
              }, null, 8, ["modelValue", "items"])])])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$1.__file = "src/Core/ScheduledJobList/gridSettingsModal.partial.obs";

      var _hoisted_1 = createElementVNode("div", {
        class: "skeleton skeleton-text skeleton-rounded"
      }, null, -1);
      var _hoisted_2 = ["innerHTML"];
      var _hoisted_3 = ["onClick"];
      var _hoisted_4 = createElementVNode("i", {
        class: "fa fa-history"
      }, null, -1);
      var _hoisted_5 = [_hoisted_4];
      var _hoisted_6 = ["onClick"];
      var _hoisted_7 = createElementVNode("i", {
        class: "fa fa-play"
      }, null, -1);
      var _hoisted_8 = [_hoisted_7];
      var script = exports('default', defineComponent({
        name: 'scheduledJobList',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var preferences = usePersonPreferences().blockPreferences;
          var gridDataSource = ref();
          var gridData;
          var isGridSettingsVisible = ref(false);
          var gridSettings = ref({
            name: preferences.getValue(PreferenceKey.FilterName),
            isActive: preferences.getValue(PreferenceKey.FilterIsActive)
          });
          var hasSettingsFilters = computed(() => {
            return !!gridSettings.value.name || !!gridSettings.value.isActive;
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
          function getStatusClass(row) {
            var lastStatus = row["lastStatus"] || "";
            switch (lastStatus) {
              case "Success":
                return "label label-success";
              case "Running":
                return "label label-info";
              case "Exception":
                return "label label-danger";
              case "Warning":
                return "label label-warning";
              case "":
                return "";
              default:
                return "label label-warning";
            }
          }
          function getlastStatusMessageFilterValue(row) {
            return row.lastStatusMessage;
          }
          function getlastStatusFilterValue(row) {
            return row.lastStatus;
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
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete service job.");
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
          function onShowHistory(row, event) {
            event.stopPropagation();
            var key = row["idKey"];
            if (key) {
              var _config$navigationUrl3;
              if ((_config$navigationUrl3 = config.navigationUrls) !== null && _config$navigationUrl3 !== void 0 && _config$navigationUrl3[NavigationUrlKey.HistoryPage]) {
                window.location.href = config.navigationUrls[NavigationUrlKey.HistoryPage].replace("((Key))", key);
              }
            }
          }
          function onRunNowClick(_x2, _x3) {
            return _onRunNowClick.apply(this, arguments);
          }
          function _onRunNowClick() {
            _onRunNowClick = _asyncToGenerator(function* (row, event) {
              event.stopPropagation();
              var key = row["idKey"];
              var jobName = row["name"];
              if (key) {
                var result = yield invokeBlockAction("RunNow", {
                  key
                });
                if (result.isSuccess) {
                  yield alert("The '".concat(jobName, "' job has been started."));
                  gridDataSource.value = loadGridData();
                } else {
                  var _result$errorMessage3;
                  yield alert((_result$errorMessage3 = result.errorMessage) !== null && _result$errorMessage3 !== void 0 ? _result$errorMessage3 : "Unknown error while trying to delete service job.");
                }
              }
            });
            return _onRunNowClick.apply(this, arguments);
          }
          function onGridSettingsClick() {
            isGridSettingsVisible.value = true;
          }
          watch(gridSettings, _asyncToGenerator(function* () {
            var _gridSettings$value$n, _gridSettings$value$i;
            preferences.setValue(PreferenceKey.FilterName, (_gridSettings$value$n = gridSettings.value.name) !== null && _gridSettings$value$n !== void 0 ? _gridSettings$value$n : "");
            preferences.setValue(PreferenceKey.FilterIsActive, (_gridSettings$value$i = gridSettings.value.isActive) !== null && _gridSettings$value$i !== void 0 ? _gridSettings$value$i : "");
            yield preferences.save();
            gridDataSource.value = loadGridData();
          }));
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition, _unref$expectedRowCou;
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Service Job",
              entityTypeGuid: unref(EntityType).ServiceJob,
              expectedRowCount: (_unref$expectedRowCou = unref(config).expectedRowCount) !== null && _unref$expectedRowCou !== void 0 ? _unref$expectedRowCou : undefined,
              tooltipField: "description",
              stickyHeader: "",
              liveUpdates: "",
              showLaunchWorkflow: false,
              gridSettings: "",
              gridSettingsActive: unref(hasSettingsFilters),
              onGridSettingsClick: onGridSettingsClick,
              onAddItem: unref(config).isAddEnabled ? onAddItem : undefined,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => [createVNode(unref(TextColumn), {
                name: "name",
                title: "Name",
                field: "name",
                filter: unref(textValueFilter),
                visiblePriority: "xs",
                width: "30%"
              }, null, 8, ["filter"]), createVNode(unref(DateTimeColumn), {
                name: "lastSuccessfulRun",
                title: "Last Successful Run",
                field: "lastSuccessfulRun",
                filter: unref(dateValueFilter),
                visiblePriority: "md"
              }, null, 8, ["filter"]), createVNode(unref(DateTimeColumn), {
                name: "lastRunDateTime",
                title: "Last Run Date",
                field: "lastRunDateTime",
                filter: unref(dateValueFilter),
                visiblePriority: "md"
              }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "lastRunDurationSeconds",
                title: "Last Run Duration",
                field: "lastRunDurationSeconds",
                filter: unref(textValueFilter),
                visiblePriority: "md"
              }, null, 8, ["filter"]), createVNode(unref(Column), {
                name: "lastStatus",
                title: "Last Status",
                visiblePriority: "md",
                filter: unref(textValueFilter),
                filterValue: getlastStatusFilterValue
              }, {
                format: withCtx(_ref2 => {
                  var row = _ref2.row;
                  return [createElementVNode("span", {
                    class: normalizeClass(getStatusClass(row))
                  }, toDisplayString(row.lastStatus === "Exception" ? "Failed" : row.lastStatus), 3)];
                }),
                skeleton: withCtx(() => [_hoisted_1]),
                _: 1
              }, 8, ["filter"]), createVNode(unref(Column), {
                name: "lastStatusMessage",
                title: "Last Status Message",
                width: "20%",
                filter: unref(textValueFilter),
                filterValue: getlastStatusMessageFilterValue,
                visiblePriority: "md"
              }, {
                format: withCtx(_ref3 => {
                  var row = _ref3.row;
                  return [createElementVNode("div", {
                    innerHTML: row.lastStatusMessageAsHtml
                  }, null, 8, _hoisted_2)];
                }),
                _: 1
              }, 8, ["filter"]), createVNode(unref(BooleanColumn), {
                name: "isSystem",
                title: "System",
                field: "isSystem",
                visiblePriority: "md",
                width: "5%"
              }), createVNode(unref(BooleanColumn), {
                name: "isActive",
                title: "Active",
                field: "isActive",
                visiblePriority: "md",
                width: "5%"
              }), createVNode(unref(Column), {
                name: "history",
                width: "52px",
                title: "History",
                itemClass: "grid-columncommand"
              }, {
                format: withCtx(_ref4 => {
                  var row = _ref4.row;
                  return [row.guid !== unref(ServiceJob).JobPulse ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    onClick: withModifiers($event => onShowHistory(row, $event), ["prevent"]),
                    class: "btn btn-sm",
                    title: "History"
                  }, _hoisted_5, 8, _hoisted_3)) : createCommentVNode("v-if", true)];
                }),
                _: 1
              }), createVNode(unref(Column), {
                name: "runJob",
                width: "52px",
                title: "Run Now",
                itemClass: "grid-columncommand"
              }, {
                format: withCtx(_ref5 => {
                  var row = _ref5.row;
                  return [row.guid !== unref(ServiceJob).JobPulse ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    onClick: withModifiers($event => onRunNowClick(row, $event), ["prevent"]),
                    class: "btn btn-sm",
                    title: "Run Now"
                  }, _hoisted_8, 8, _hoisted_6)) : createCommentVNode("v-if", true)];
                }),
                _: 1
              }), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                key: 0,
                onClick: onDeleteClick
              })) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "expectedRowCount", "gridSettingsActive", "onAddItem"]), createVNode(unref(script$1), {
              modelValue: gridSettings.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => gridSettings.value = $event),
              visible: isGridSettingsVisible.value,
              "onUpdate:visible": _cache[1] || (_cache[1] = $event => isGridSettingsVisible.value = $event)
            }, null, 8, ["modelValue", "visible"])], 64);
          };
        }
      }));

      script.__file = "src/Core/scheduledJobList.obs";

    })
  };
}));
//# sourceMappingURL=scheduledJobList.obs.js.map
