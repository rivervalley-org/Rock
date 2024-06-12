System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, isRef, withCtx, createVNode, createElementVNode, computed, createElementBlock, Fragment, createCommentVNode, reactive, useConfigurationValues, useInvokeBlockAction, usePersonPreferences, EntityType, Grid, TextColumn, textValueFilter, BooleanColumn, AttributeColumns, DeleteColumn, alert, DropDownList, Modal, SectionHeader, useVModelPassthrough, deepEqual;
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
      createCommentVNode = module.createCommentVNode;
      reactive = module.reactive;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      usePersonPreferences = module.usePersonPreferences;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      Grid = module["default"];
      TextColumn = module.TextColumn;
      textValueFilter = module.textValueFilter;
      BooleanColumn = module.BooleanColumn;
      AttributeColumns = module.AttributeColumns;
      DeleteColumn = module.DeleteColumn;
    }, function (module) {
      alert = module.alert;
    }, function (module) {
      DropDownList = module["default"];
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
        return NavigationUrlKey;
      }({});
      var PreferenceKey = function (PreferenceKey) {
        PreferenceKey["FilterSite"] = "filter-site";
        return PreferenceKey;
      }({});

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
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
          siteItems: {
            type: Array,
            required: true
          }
        },
        emits: ["update:modelValue", "update:visible"],
        setup(__props, _ref) {
          var _props$modelValue$sit;
          var emit = _ref.emit;
          var props = __props;
          var site = ref((_props$modelValue$sit = props.modelValue.site) !== null && _props$modelValue$sit !== void 0 ? _props$modelValue$sit : "");
          var isVisible = useVModelPassthrough(props, "visible", emit);
          function onSave() {
            var value = {
              site: site.value
            };
            if (!deepEqual(value, props.modelValue, true)) {
              emit("update:modelValue", value);
            }
            isVisible.value = false;
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$sit2;
            site.value = (_props$modelValue$sit2 = props.modelValue.site) !== null && _props$modelValue$sit2 !== void 0 ? _props$modelValue$sit2 : "";
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isVisible) ? isVisible.value = $event : null),
              title: "Settings",
              saveText: "Save",
              onSave: onSave
            }, {
              default: withCtx(() => [createVNode(unref(SectionHeader), {
                title: "Filters"
              }), createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(DropDownList), {
                modelValue: site.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => site.value = $event),
                label: "Site",
                items: __props.siteItems
              }, null, 8, ["modelValue", "items"])])])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$1.__file = "src/Cms/PageRouteList/gridSettingsModal.partial.obs";

      var script = exports('default', defineComponent({
        name: 'pageRouteList',
        setup(__props) {
          var _config$options$siteI, _config$options;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var preferences = usePersonPreferences().blockPreferences;
          var gridDataSource = ref();
          var gridData;
          var isGridSettingsVisible = ref(false);
          var siteItems = ref((_config$options$siteI = (_config$options = config.options) === null || _config$options === void 0 ? void 0 : _config$options.siteItems) !== null && _config$options$siteI !== void 0 ? _config$options$siteI : []);
          var gridSettings = ref({
            site: preferences.getValue(PreferenceKey.FilterSite)
          });
          var hasSettingsFilters = computed(() => {
            return !!gridSettings.value.site;
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
          function onGridSettingsClick() {
            isGridSettingsVisible.value = true;
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
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete page route.");
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
          watch(gridSettings, _asyncToGenerator(function* () {
            var _gridSettings$value$s;
            preferences.setValue(PreferenceKey.FilterSite, (_gridSettings$value$s = gridSettings.value.site) !== null && _gridSettings$value$s !== void 0 ? _gridSettings$value$s : "");
            yield preferences.save();
            gridDataSource.value = loadGridData();
          }));
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition;
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Route",
              entityTypeGuid: unref(EntityType).PageRoute,
              stickyHeader: "",
              liveUpdates: "",
              gridSettings: "",
              gridSettingsActive: unref(hasSettingsFilters),
              onGridSettingsClick: onGridSettingsClick,
              onAddItem: unref(config).isAddEnabled ? onAddItem : undefined,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => {
                var _unref$gridDefinition2, _unref$gridDefinition3;
                return [createVNode(unref(TextColumn), {
                  name: "route",
                  title: "Route",
                  field: "route",
                  filter: unref(textValueFilter),
                  visiblePriority: "xs"
                }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "siteName",
                  title: "Site",
                  field: "siteName",
                  filter: unref(textValueFilter),
                  visiblePriority: "md"
                }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "pageName",
                  title: "Page Name",
                  field: "pageName",
                  filter: unref(textValueFilter),
                  visiblePriority: "md"
                }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                  name: "pageId",
                  title: "Page Id",
                  field: "pageId",
                  filter: unref(textValueFilter),
                  visiblePriority: "md"
                }, null, 8, ["filter"]), createVNode(unref(BooleanColumn), {
                  name: "isGlobal",
                  title: "Global Route",
                  field: "isGlobal",
                  visiblePriority: "md"
                }), createVNode(unref(BooleanColumn), {
                  name: "isSystem",
                  title: "System",
                  field: "isSystem",
                  visiblePriority: "md"
                }), createVNode(unref(AttributeColumns), {
                  attributes: (_unref$gridDefinition2 = (_unref$gridDefinition3 = unref(config).gridDefinition) === null || _unref$gridDefinition3 === void 0 ? void 0 : _unref$gridDefinition3.attributeFields) !== null && _unref$gridDefinition2 !== void 0 ? _unref$gridDefinition2 : []
                }, null, 8, ["attributes"]), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                  key: 0,
                  onClick: onDeleteClick
                })) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "gridSettingsActive", "onAddItem"]), createVNode(unref(script$1), {
              modelValue: gridSettings.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => gridSettings.value = $event),
              visible: isGridSettingsVisible.value,
              "onUpdate:visible": _cache[1] || (_cache[1] = $event => isGridSettingsVisible.value = $event),
              siteItems: siteItems.value
            }, null, 8, ["modelValue", "visible", "siteItems"])], 64);
          };
        }
      }));

      script.__file = "src/Cms/pageRouteList.obs";

    })
  };
}));
//# sourceMappingURL=pageRouteList.obs.js.map
