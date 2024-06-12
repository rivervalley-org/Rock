System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/personPicker.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/util', '@Obsidian/Utility/booleanUtils', '@Obsidian/Enums/Controls/mergeTemplateOwnership'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, isRef, withCtx, createVNode, createElementVNode, computed, resolveComponent, createElementBlock, Fragment, toDisplayString, createCommentVNode, reactive, useConfigurationValues, useInvokeBlockAction, usePersonPreferences, EntityType, Grid, TextColumn, textValueFilter, Column, DeleteColumn, alert, PersonPicker, CheckBox, Modal, SectionHeader, useVModelPassthrough, deepEqual, asBoolean, asTrueFalseOrNull, MergeTemplateOwnership;
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
      resolveComponent = module.resolveComponent;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      toDisplayString = module.toDisplayString;
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
      Column = module.Column;
      DeleteColumn = module.DeleteColumn;
    }, function (module) {
      alert = module.alert;
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      deepEqual = module.deepEqual;
    }, function (module) {
      asBoolean = module.asBoolean;
      asTrueFalseOrNull = module.asTrueFalseOrNull;
    }, function (module) {
      MergeTemplateOwnership = module.MergeTemplateOwnership;
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
        PreferenceKey["FilterPerson"] = "filter-person";
        PreferenceKey["FilterShowGlobalTemplates"] = "filter-show-global-templates";
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
          var _props$modelValue$per;
          var emit = _ref.emit;
          var props = __props;
          var person = ref((_props$modelValue$per = props.modelValue.person) !== null && _props$modelValue$per !== void 0 ? _props$modelValue$per : undefined);
          var showGlobalMergeTemplates = ref(asBoolean(props.modelValue.showGlobaltemplates));
          var isVisible = useVModelPassthrough(props, "visible", emit);
          function onSave() {
            var value = {
              person: person.value,
              showGlobaltemplates: asTrueFalseOrNull(showGlobalMergeTemplates.value)
            };
            if (!deepEqual(value, props.modelValue, true)) {
              emit("update:modelValue", value);
            }
            isVisible.value = false;
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$per2;
            person.value = (_props$modelValue$per2 = props.modelValue.person) !== null && _props$modelValue$per2 !== void 0 ? _props$modelValue$per2 : undefined;
            showGlobalMergeTemplates.value = asBoolean(props.modelValue.showGlobaltemplates);
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
              }), createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(PersonPicker), {
                modelValue: person.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => person.value = $event),
                label: "Person"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
                modelValue: showGlobalMergeTemplates.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => showGlobalMergeTemplates.value = $event),
                label: "Show Global Merge Templates",
                text: "Yes"
              }, null, 8, ["modelValue"])])])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$1.__file = "src/Reporting/MergeTemplateList/gridSettingsModal.partial.obs";

      var _hoisted_1 = {
        key: 0
      };
      var _hoisted_2 = ["href"];
      var _hoisted_3 = {
        key: 1
      };
      var script = exports('default', defineComponent({
        name: 'mergeTemplateList',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var preferences = usePersonPreferences().blockPreferences;
          var gridDataSource = ref();
          var gridData;
          var isGridSettingsVisible = ref(false);
          var gridSettings = ref({
            person: JSON.parse(preferences.getValue(PreferenceKey.FilterPerson) || "{}"),
            showGlobaltemplates: preferences.getValue(PreferenceKey.FilterShowGlobalTemplates)
          });
          var hasSettingsFilters = computed(() => {
            var _gridSettings$value$p;
            return !!((_gridSettings$value$p = gridSettings.value.person) !== null && _gridSettings$value$p !== void 0 && _gridSettings$value$p.value) || !!gridSettings.value.showGlobaltemplates;
          });
          var isPersonAndGlobalOwnership = computed(() => {
            var _config$options;
            return ((_config$options = config.options) === null || _config$options === void 0 ? void 0 : _config$options.mergeTemplateOwnership) === MergeTemplateOwnership.PersonalAndGlobal;
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
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete merge template.");
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
          function onGridSettingsClick() {
            isGridSettingsVisible.value = true;
          }
          watch(gridSettings, _asyncToGenerator(function* () {
            var _gridSettings$value$s;
            preferences.setValue(PreferenceKey.FilterPerson, JSON.stringify(gridSettings.value.person));
            preferences.setValue(PreferenceKey.FilterShowGlobalTemplates, (_gridSettings$value$s = gridSettings.value.showGlobaltemplates) !== null && _gridSettings$value$s !== void 0 ? _gridSettings$value$s : "");
            yield preferences.save();
            gridDataSource.value = loadGridData();
          }));
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition;
            var _component_SelectColumn = resolveComponent("SelectColumn");
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Merge Template",
              entityTypeGuid: unref(EntityType).MergeTemplate,
              stickyHeader: "",
              liveUpdates: "",
              showLaunchWorkflow: false,
              gridSettings: unref(isPersonAndGlobalOwnership),
              gridSettingsActive: unref(hasSettingsFilters),
              onGridSettingsClick: onGridSettingsClick,
              onAddItem: unref(config).isAddEnabled ? onAddItem : undefined,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => [createVNode(_component_SelectColumn), createVNode(unref(TextColumn), {
                name: "name",
                title: "Name",
                field: "name",
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), unref(isPersonAndGlobalOwnership) ? (openBlock(), createBlock(unref(Column), {
                key: 0,
                name: "owner",
                title: "Owner",
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, {
                format: withCtx(_ref2 => {
                  var row = _ref2.row;
                  return [row.ownerIdKey ? (openBlock(), createElementBlock("span", _hoisted_1, [createElementVNode("a", {
                    href: "/person/".concat(row.ownerIdKey)
                  }, toDisplayString(row.ownerName), 9, _hoisted_2)])) : (openBlock(), createElementBlock("span", _hoisted_3, "(Global)"))];
                }),
                _: 1
              }, 8, ["filter"])) : createCommentVNode("v-if", true), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                key: 1,
                onClick: onDeleteClick
              })) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "gridSettings", "gridSettingsActive", "onAddItem"]), createVNode(unref(script$1), {
              modelValue: gridSettings.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => gridSettings.value = $event),
              visible: isGridSettingsVisible.value,
              "onUpdate:visible": _cache[1] || (_cache[1] = $event => isGridSettingsVisible.value = $event)
            }, null, 8, ["modelValue", "visible"])], 64);
          };
        }
      }));

      script.__file = "src/Reporting/mergeTemplateList.obs";

    })
  };
}));
//# sourceMappingURL=mergeTemplateList.obs.js.map
