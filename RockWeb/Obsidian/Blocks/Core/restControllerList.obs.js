System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid'], (function (exports) {
  'use strict';
  var defineComponent, ref, openBlock, createElementBlock, Fragment, createVNode, unref, withCtx, createCommentVNode, createElementVNode, reactive, useConfigurationValues, useInvokeBlockAction, EntityType, Grid, TextColumn, textValueFilter, NumberColumn, numberValueFilter, Column, SecurityColumn;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
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
      NumberColumn = module.NumberColumn;
      numberValueFilter = module.numberValueFilter;
      Column = module.Column;
      SecurityColumn = module.SecurityColumn;
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

      var _hoisted_1 = ["title"];
      var script = exports('default', defineComponent({
        name: 'restControllerList',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var gridDataSource = ref();
          var gridData;
          function refreshControllerList() {
            return _refreshControllerList.apply(this, arguments);
          }
          function _refreshControllerList() {
            _refreshControllerList = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("RefreshControllerList");
              if (result.isSuccess) {
                gridDataSource.value = loadGridData();
              }
            });
            return _refreshControllerList.apply(this, arguments);
          }
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
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition;
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Rest Controller",
              entityTypeGuid: unref(EntityType).RestController,
              stickyHeader: "",
              liveUpdates: "",
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => [createVNode(unref(TextColumn), {
                name: "name",
                title: "Controller Name",
                field: "name",
                filter: unref(textValueFilter),
                visiblePriority: "xs",
                width: "25%"
              }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "className",
                title: "Controller Type",
                field: "className",
                filter: unref(textValueFilter),
                visiblePriority: "xs",
                width: "50%"
              }, null, 8, ["filter"]), createVNode(unref(NumberColumn), {
                name: "actions",
                title: "Actions",
                field: "actions",
                filter: unref(numberValueFilter),
                visiblePriority: "xs",
                width: "1%"
              }, null, 8, ["filter"]), createVNode(unref(Column), {
                name: "actionsWithPublicCachingHeaders",
                title: "",
                field: "actionsWithPublicCachingHeaders",
                width: "1%"
              }, {
                format: withCtx(_ref => {
                  var row = _ref.row;
                  return [row.actionsWithPublicCachingHeaders > 0 ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: "text-success fa fa-tachometer-alt",
                    title: row.actionsWithPublicCachingHeaders,
                    "data-toggle": "tooltip"
                  }, null, 8, _hoisted_1)) : createCommentVNode("v-if", true)];
                }),
                _: 1
              }), createVNode(unref(SecurityColumn), {
                itemTitle: 'name'
              })]),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid"]), createElementVNode("div", {
              class: "actions"
            }, [createElementVNode("button", {
              type: "button",
              class: "btn btn-link",
              onClick: refreshControllerList
            }, "Requery REST Data")])], 64);
          };
        }
      }));

      script.__file = "src/Core/restControllerList.obs";

    })
  };
}));
//# sourceMappingURL=restControllerList.obs.js.map
