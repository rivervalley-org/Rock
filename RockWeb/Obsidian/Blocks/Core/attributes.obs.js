System.register(['vue', '@Obsidian/Controls/grid', '@Obsidian/Controls/attributeEditor.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/rockField.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Utility/block', '@Obsidian/Utility/dialogs', '@Obsidian/Utility/guid', '@Obsidian/Utility/booleanUtils', '@Obsidian/SystemGuids/entityType'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, computed, ref, watch, openBlock, createElementBlock, Fragment, createVNode, unref, createSlots, withCtx, createBlock, createCommentVNode, normalizeClass, createElementVNode, reactive, Grid, ReorderColumn, TextColumn, pickExistingValueFilter, textValueFilter, Column, EditColumn, SecurityColumn, DeleteColumn, AttributeEditor, Modal, RockField, RockButton, DropDownList, TextBox, FieldType, useConfigurationValues, useInvokeBlockAction, usePersonPreferences, onConfigurationValuesChanged, useReloadBlock, alert, emptyGuid, normalize, toGuidOrNull, asBooleanOrNull, EntityType;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createVNode = module.createVNode;
      unref = module.unref;
      createSlots = module.createSlots;
      withCtx = module.withCtx;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      normalizeClass = module.normalizeClass;
      createElementVNode = module.createElementVNode;
      reactive = module.reactive;
    }, function (module) {
      Grid = module["default"];
      ReorderColumn = module.ReorderColumn;
      TextColumn = module.TextColumn;
      pickExistingValueFilter = module.pickExistingValueFilter;
      textValueFilter = module.textValueFilter;
      Column = module.Column;
      EditColumn = module.EditColumn;
      SecurityColumn = module.SecurityColumn;
      DeleteColumn = module.DeleteColumn;
    }, function (module) {
      AttributeEditor = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      RockField = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      FieldType = module.FieldType;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      usePersonPreferences = module.usePersonPreferences;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      alert = module.alert;
    }, function (module) {
      emptyGuid = module.emptyGuid;
      normalize = module.normalize;
      toGuidOrNull = module.toGuidOrNull;
    }, function (module) {
      asBooleanOrNull = module.asBooleanOrNull;
    }, function (module) {
      EntityType = module.EntityType;
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

      var PreferenceKey = function (PreferenceKey) {
        PreferenceKey["FilterEntityTypeGuid"] = "filter-entity-type-guid";
        PreferenceKey["FilterCategories"] = "filter-categories";
        PreferenceKey["FilterActive"] = "filter-active";
        return PreferenceKey;
      }({});

      var _hoisted_1 = {
        class: "form-inline d-flex justify-content-end p-3"
      };
      var _hoisted_2 = {
        key: 0,
        class: "well"
      };
      var _hoisted_3 = {
        class: "row"
      };
      var _hoisted_4 = {
        class: "col-md-6"
      };
      var _hoisted_5 = {
        class: "col-md-6"
      };
      var _hoisted_6 = createTextVNode("Clear Filters");
      var _hoisted_7 = createTextVNode("Apply Filters");
      var script = exports('default', defineComponent({
        name: 'attributes',
        setup(__props) {
          var _gridData3;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var preferences = usePersonPreferences().blockPreferences;
          var showEntityTypePicker = computed(() => {
            var _config$options;
            return !(config !== null && config !== void 0 && (_config$options = config.options) !== null && _config$options !== void 0 && _config$options.entityTypeGuid);
          });
          var entityTypeOptions = computed(() => {
            var _config$options$entit, _config$options2;
            return (_config$options$entit = config === null || config === void 0 ? void 0 : (_config$options2 = config.options) === null || _config$options2 === void 0 ? void 0 : _config$options2.entityTypes) !== null && _config$options$entit !== void 0 ? _config$options$entit : [];
          });
          var showEntityTypeQualifier = computed(() => {
            var _config$options3;
            return !(config !== null && config !== void 0 && (_config$options3 = config.options) !== null && _config$options3 !== void 0 && _config$options3.entityTypeGuid);
          });
          var entityTypeGuidForEditOrEmptyString = ref("");
          var entityTypeQualifierColumn = ref("");
          var entityTypeQualifierValue = ref("");
          var editableAttribute = ref(null);
          var showEditAttributeModal = ref(false);
          var editAttributeModalTitle = computed(() => {
            if (editableAttribute.value) {
              return "Edit ".concat(editableAttribute.value.name);
            }
            return "";
          });
          var usedKeyNames = ref([]);
          var onEditAttribute = function () {
            var _ref = _asyncToGenerator(function* (guid) {
              var _toGuidOrNull, _result$data$entityTy, _result$data$entityTy2, _result$data$entityTy3;
              var request = {
                attributeGuid: (_toGuidOrNull = toGuidOrNull(guid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid
              };
              var result = yield invokeBlockAction("GetEditAttribute", request);
              if (!result.isSuccess || !result.data) {
                var _result$errorMessage;
                return alert((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unable to edit attribute.");
              }
              entityTypeGuidForEditOrEmptyString.value = (_result$data$entityTy = result.data.entityTypeGuid) !== null && _result$data$entityTy !== void 0 ? _result$data$entityTy : entityTypeGuid.value;
              entityTypeQualifierColumn.value = (_result$data$entityTy2 = result.data.entityTypeQualifierColumn) !== null && _result$data$entityTy2 !== void 0 ? _result$data$entityTy2 : "";
              entityTypeQualifierValue.value = (_result$data$entityTy3 = result.data.entityTypeQualifierValue) !== null && _result$data$entityTy3 !== void 0 ? _result$data$entityTy3 : "";
              editableAttribute.value = result.data.attribute;
              showEditAttributeModal.value = true;
            });
            return function onEditAttribute(_x) {
              return _ref.apply(this, arguments);
            };
          }();
          var saveEditAttribute = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var _toGuidOrNull2, _gridData;
              var request = {
                entityTypeGuid: (_toGuidOrNull2 = toGuidOrNull(entityTypeGuidForEditOrEmptyString.value)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : toGuidOrNull(entityTypeGuid.value),
                entityTypeQualifierColumn: entityTypeQualifierColumn.value,
                entityTypeQualifierValue: entityTypeQualifierValue.value,
                attribute: editableAttribute.value
              };
              var result = yield invokeBlockAction("SaveEditAttribute", request);
              if (!result.isSuccess || !result.data) {
                var _result$errorMessage2;
                return alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unable to save attribute.");
              }
              editableAttribute.value = null;
              showEditAttributeModal.value = false;
              if (!((_gridData = gridData) !== null && _gridData !== void 0 && _gridData.rows)) {
                return;
              }
              var index = gridData.rows.findIndex(a => {
                var _result$data;
                return a.guid === ((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.guid);
              });
              var matchesCurrentEntityType = result.data.entityTypeGuid == entityTypeGuid.value;
              var activeFilterVal = asBooleanOrNull(activeFilter.value);
              var matchesCurrentActiveFilter = activeFilterVal === null || result.data.isActive == activeFilterVal;
              if (index !== -1) {
                if (matchesCurrentEntityType && matchesCurrentActiveFilter) {
                  gridData.rows.splice(index, 1, result.data);
                } else {
                  gridData.rows.splice(index, 1);
                }
              } else if (matchesCurrentEntityType) {
                gridData.rows.push(result.data);
              }
            });
            return function saveEditAttribute() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onAddAttribute = () => {
            editableAttribute.value = {
              isActive: true,
              fieldTypeGuid: normalize(FieldType.Text),
              isPublic: false,
              isSystem: false,
              isRequired: false,
              isShowInGrid: false,
              isShowOnBulk: false,
              isAnalytic: false,
              isAllowSearch: false,
              isAnalyticHistory: false,
              isEnableHistory: false,
              isIndexEnabled: false
            };
            showEditAttributeModal.value = true;
            entityTypeGuidForEditOrEmptyString.value = entityTypeGuid.value;
            entityTypeQualifierColumn.value = "";
            entityTypeQualifierValue.value = "";
          };
          var onDeleteAttribute = function () {
            var _ref3 = _asyncToGenerator(function* (key) {
              var _toGuidOrNull3, _gridData2;
              var request = {
                attributeGuid: (_toGuidOrNull3 = toGuidOrNull(key)) !== null && _toGuidOrNull3 !== void 0 ? _toGuidOrNull3 : emptyGuid
              };
              var result = yield invokeBlockAction("DeleteAttribute", request);
              if (!result.isSuccess) {
                return alert(result.errorMessage || "Unable to delete attribute.");
              }
              if (!((_gridData2 = gridData) !== null && _gridData2 !== void 0 && _gridData2.rows)) {
                return;
              }
              var index = gridData.rows.findIndex(a => a.guid === key);
              if (index !== -1) {
                gridData.rows.splice(index, 1);
              }
            });
            return function onDeleteAttribute(_x2) {
              return _ref3.apply(this, arguments);
            };
          }();
          var editAttributeValue = ref("");
          var editAttribute = ref({
            attributeGuid: emptyGuid,
            fieldTypeGuid: emptyGuid,
            isRequired: false,
            order: 0
          });
          var showEditAttributeValueModal = ref(false);
          var editAttributeValueModalTitle = computed(() => {
            if (editAttribute.value) {
              return "".concat(editAttribute.value.name, " Value");
            }
            return "";
          });
          function onEditAttributeValue(_x3) {
            return _onEditAttributeValue.apply(this, arguments);
          }
          function _onEditAttributeValue() {
            _onEditAttributeValue = _asyncToGenerator(function* (key) {
              var _config$options6, _toGuidOrNull4;
              if (!(config !== null && config !== void 0 && (_config$options6 = config.options) !== null && _config$options6 !== void 0 && _config$options6.allowSettingOfValues)) {
                return;
              }
              var request = {
                attributeGuid: (_toGuidOrNull4 = toGuidOrNull(key)) !== null && _toGuidOrNull4 !== void 0 ? _toGuidOrNull4 : emptyGuid
              };
              var result = yield invokeBlockAction("GetEditAttributeValue", request);
              if (!result.isSuccess || !result.data) {
                var _result$errorMessage3;
                return alert((_result$errorMessage3 = result.errorMessage) !== null && _result$errorMessage3 !== void 0 ? _result$errorMessage3 : "Unable to edit attribute value.");
              }
              editAttribute.value = result.data.attribute;
              editAttributeValue.value = result.data.value;
              showEditAttributeValueModal.value = true;
            });
            return _onEditAttributeValue.apply(this, arguments);
          }
          function onOrderChanged(_x4, _x5) {
            return _onOrderChanged.apply(this, arguments);
          }
          function _onOrderChanged() {
            _onOrderChanged = _asyncToGenerator(function* (item, beforeItem) {
              var _beforeItem$idKey;
              var result = yield invokeBlockAction("ReorderItem", {
                key: item["idKey"],
                beforeKey: (_beforeItem$idKey = beforeItem === null || beforeItem === void 0 ? void 0 : beforeItem["idKey"]) !== null && _beforeItem$idKey !== void 0 ? _beforeItem$idKey : null
              });
              return result.isSuccess;
            });
            return _onOrderChanged.apply(this, arguments);
          }
          function saveEditAttributeValue() {
            return _saveEditAttributeValue.apply(this, arguments);
          }
          function _saveEditAttributeValue() {
            _saveEditAttributeValue = _asyncToGenerator(function* () {
              var _toGuidOrNull5, _editAttribute$value, _gridData4;
              var request = {
                attributeGuid: (_toGuidOrNull5 = toGuidOrNull((_editAttribute$value = editAttribute.value) === null || _editAttribute$value === void 0 ? void 0 : _editAttribute$value.attributeGuid)) !== null && _toGuidOrNull5 !== void 0 ? _toGuidOrNull5 : emptyGuid,
                value: editAttributeValue.value
              };
              var result = yield invokeBlockAction("SaveEditAttributeValue", request);
              if (!result.isSuccess || !result.data) {
                var _result$errorMessage4;
                return alert((_result$errorMessage4 = result.errorMessage) !== null && _result$errorMessage4 !== void 0 ? _result$errorMessage4 : "Unable to save attribute value.");
              }
              if ((_gridData4 = gridData) !== null && _gridData4 !== void 0 && _gridData4.rows) {
                var index = gridData.rows.findIndex(a => {
                  var _result$data2;
                  return a.guid === ((_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.guid);
                });
                if (index !== -1) {
                  gridData.rows.splice(index, 1, result.data);
                }
              }
              editAttribute.value = {
                attributeGuid: emptyGuid,
                fieldTypeGuid: emptyGuid,
                isRequired: false,
                order: 0
              };
              editAttributeValue.value = "";
              showEditAttributeValueModal.value = false;
            });
            return _saveEditAttributeValue.apply(this, arguments);
          }
          var entityTypeGuidFilter = ref(preferences.getValue(PreferenceKey.FilterEntityTypeGuid));
          ref(preferences.getValue(PreferenceKey.FilterCategories));
          var activeFilter = ref(preferences.getValue(PreferenceKey.FilterActive));
          var entityTypeGuid = computed(() => {
            var _config$options4;
            return (config === null || config === void 0 ? void 0 : (_config$options4 = config.options) === null || _config$options4 === void 0 ? void 0 : _config$options4.entityTypeGuid) || entityTypeGuidFilter.value;
          });
          var entityTypeSelectionIsValid = computed(() => {
            var _config$options5;
            return !!(config !== null && config !== void 0 && (_config$options5 = config.options) !== null && _config$options5 !== void 0 && _config$options5.entityTypeGuid) || entityTypeGuidFilter.value !== "";
          });
          var showFilterModal = ref(false);
          var activeFilterOptions = [{
            value: "",
            text: "[All]"
          }, {
            value: "true",
            text: "Active"
          }, {
            value: "false",
            text: "Inactive"
          }];
          var hasSettingsFilters = computed(() => {
            return !!activeFilter.value;
          });
          function applyFilters() {
            showFilterModal.value = false;
            saveFilterValues();
          }
          function clearFilters() {
            showFilterModal.value = false;
            activeFilter.value = "";
            saveFilterValues();
          }
          function saveFilterValues() {
            return _saveFilterValues.apply(this, arguments);
          }
          function _saveFilterValues() {
            _saveFilterValues = _asyncToGenerator(function* () {
              preferences.setValue(PreferenceKey.FilterActive, activeFilter.value);
              yield preferences.save();
              gridDataSource.value = loadGridData();
            });
            return _saveFilterValues.apply(this, arguments);
          }
          watch(entityTypeGuidFilter, _asyncToGenerator(function* () {
            preferences.setValue(PreferenceKey.FilterEntityTypeGuid, entityTypeGuidFilter.value);
            yield preferences.save();
            gridDataSource.value = loadGridData();
          }));
          var gridData = undefined;
          var gridDataSource = ref(entityTypeSelectionIsValid.value ? Promise.resolve((_gridData3 = gridData) !== null && _gridData3 !== void 0 ? _gridData3 : {
            rows: []
          }) : Promise.reject("Please select an entity to display attributes for."));
          function loadGridData() {
            return _loadGridData.apply(this, arguments);
          }
          function _loadGridData() {
            _loadGridData = _asyncToGenerator(function* () {
              var _gridData$rows, _gridData5;
              if (!entityTypeGuid.value) {
                gridData = undefined;
                throw "Please select an entity to display attributes for.";
              }
              var result = yield invokeBlockAction("GetGridData");
              if (!result.isSuccess || !result.data) {
                var _result$errorMessage5;
                throw new Error((_result$errorMessage5 = result.errorMessage) !== null && _result$errorMessage5 !== void 0 ? _result$errorMessage5 : "Unknown error while trying to load grid data.");
              }
              gridData = reactive(result.data);
              usedKeyNames.value = ((_gridData$rows = (_gridData5 = gridData) === null || _gridData5 === void 0 ? void 0 : _gridData5.rows) !== null && _gridData$rows !== void 0 ? _gridData$rows : []).map(attr => attr.key);
              return gridData;
            });
            return _loadGridData.apply(this, arguments);
          }
          onConfigurationValuesChanged(useReloadBlock());
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition, _unref2, _unref3, _unref4, _unref4$options;
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Grid), {
              class: "mb-4",
              definition: (_unref$gridDefinition = (_unref2 = unref(config)) === null || _unref2 === void 0 ? void 0 : _unref2.gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "guid",
              itemTerm: "Attribute",
              entityTypeGuid: unref(EntityType).Attribute,
              stickyHeader: "",
              liveUpdates: "",
              markInactiveRows: "",
              gridSettings: "",
              gridSettingsActive: unref(hasSettingsFilters),
              onGridSettingsClick: _cache[1] || (_cache[1] = $event => showFilterModal.value = true),
              onAddItem: (_unref3 = unref(config)) !== null && _unref3 !== void 0 && _unref3.isAddEnabled ? onAddAttribute : undefined,
              onSelectItem: (_unref4 = unref(config)) !== null && _unref4 !== void 0 && (_unref4$options = _unref4.options) !== null && _unref4$options !== void 0 && _unref4$options.allowSettingOfValues ? onEditAttributeValue : undefined
            }, createSlots({
              default: withCtx(() => {
                var _unref$options$hideCo, _unref5, _unref5$options, _unref$options$hideCo2, _unref6, _unref6$options, _unref$options$hideCo3, _unref7, _unref7$options, _unref$options$hideCo4, _unref8, _unref8$options, _unref$options$hideCo5, _unref9, _unref9$options;
                return [!((_unref$options$hideCo = (_unref5 = unref(config)) === null || _unref5 === void 0 ? void 0 : (_unref5$options = _unref5.options) === null || _unref5$options === void 0 ? void 0 : _unref5$options.hideColumns) !== null && _unref$options$hideCo !== void 0 ? _unref$options$hideCo : []).includes('Ordering') ? (openBlock(), createBlock(unref(ReorderColumn), {
                  key: 0,
                  onOrderChanged: onOrderChanged
                })) : createCommentVNode("v-if", true), !((_unref$options$hideCo2 = (_unref6 = unref(config)) === null || _unref6 === void 0 ? void 0 : (_unref6$options = _unref6.options) === null || _unref6$options === void 0 ? void 0 : _unref6$options.hideColumns) !== null && _unref$options$hideCo2 !== void 0 ? _unref$options$hideCo2 : []).includes('Id') ? (openBlock(), createBlock(unref(TextColumn), {
                  key: 1,
                  name: "id",
                  title: "Id",
                  field: "id",
                  width: "80"
                })) : createCommentVNode("v-if", true), !((_unref$options$hideCo3 = (_unref7 = unref(config)) === null || _unref7 === void 0 ? void 0 : (_unref7$options = _unref7.options) === null || _unref7$options === void 0 ? void 0 : _unref7$options.hideColumns) !== null && _unref$options$hideCo3 !== void 0 ? _unref$options$hideCo3 : []).includes('Qualifier') ? (openBlock(), createBlock(unref(TextColumn), {
                  key: 2,
                  name: "qualifier",
                  title: "Qualifier",
                  field: "qualifier",
                  filter: unref(pickExistingValueFilter)
                }, null, 8, ["filter"])) : createCommentVNode("v-if", true), createVNode(unref(TextColumn), {
                  name: "name",
                  title: "Name",
                  field: "name",
                  filter: unref(textValueFilter)
                }, null, 8, ["filter"]), !((_unref$options$hideCo4 = (_unref8 = unref(config)) === null || _unref8 === void 0 ? void 0 : (_unref8$options = _unref8.options) === null || _unref8$options === void 0 ? void 0 : _unref8$options.hideColumns) !== null && _unref$options$hideCo4 !== void 0 ? _unref$options$hideCo4 : []).includes('Category') ? (openBlock(), createBlock(unref(TextColumn), {
                  key: 3,
                  name: "categories",
                  title: "Categories",
                  field: "categories",
                  filter: unref(pickExistingValueFilter)
                }, null, 8, ["filter"])) : createCommentVNode("v-if", true), !((_unref$options$hideCo5 = (_unref9 = unref(config)) === null || _unref9 === void 0 ? void 0 : (_unref9$options = _unref9.options) === null || _unref9$options === void 0 ? void 0 : _unref9$options.hideColumns) !== null && _unref$options$hideCo5 !== void 0 ? _unref$options$hideCo5 : []).includes('Value') ? (openBlock(), createBlock(unref(Column), {
                  key: 4,
                  name: "value",
                  title: "Value",
                  field: "value",
                  filter: unref(textValueFilter),
                  width: "40%"
                }, {
                  format: withCtx(_ref5 => {
                    var row = _ref5.row;
                    return [createVNode(unref(RockField), {
                      class: normalizeClass(!row.value ? 'text-muted' : ''),
                      modelValue: row.value || row.defaultValue,
                      attribute: row.attribute,
                      showLabel: false,
                      isCondensed: "",
                      isEscaped: ""
                    }, null, 8, ["class", "modelValue", "attribute"])];
                  }),
                  _: 1
                }, 8, ["filter"])) : createCommentVNode("v-if", true), createVNode(unref(EditColumn), {
                  onClick: onEditAttribute
                }), createVNode(unref(SecurityColumn)), createVNode(unref(DeleteColumn), {
                  onClick: onDeleteAttribute,
                  rowDisabled: row => !row.isDeleteEnabled
                }, null, 8, ["rowDisabled"])];
              }),
              _: 2
            }, [unref(showEntityTypePicker) ? {
              name: "gridHeaderPrepend",
              fn: withCtx(() => [createElementVNode("div", _hoisted_1, [createVNode(unref(DropDownList), {
                modelValue: entityTypeGuidFilter.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => entityTypeGuidFilter.value = $event),
                label: "Entity Type",
                grouped: "",
                enhanceForLongLists: "",
                items: unref(entityTypeOptions),
                style: {
                  "min-width": "250px"
                }
              }, null, 8, ["modelValue", "items"])])])
            } : undefined]), 1032, ["definition", "data", "entityTypeGuid", "gridSettingsActive", "onAddItem", "onSelectItem"]), createVNode(unref(Modal), {
              modelValue: showEditAttributeValueModal.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => showEditAttributeValueModal.value = $event),
              title: unref(editAttributeValueModalTitle),
              saveText: "Save",
              onSave: saveEditAttributeValue
            }, {
              default: withCtx(() => [createVNode(unref(RockField), {
                modelValue: editAttributeValue.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => editAttributeValue.value = $event),
                attribute: editAttribute.value,
                isEditMode: ""
              }, null, 8, ["modelValue", "attribute"])]),
              _: 1
            }, 8, ["modelValue", "title"]), createVNode(unref(Modal), {
              modelValue: showEditAttributeModal.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => showEditAttributeModal.value = $event),
              title: unref(editAttributeModalTitle),
              saveText: "Save",
              onSave: saveEditAttribute
            }, {
              default: withCtx(() => {
                var _unref10, _unref10$options;
                return [unref(showEntityTypeQualifier) ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(DropDownList), {
                  modelValue: entityTypeGuidForEditOrEmptyString.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => entityTypeGuidForEditOrEmptyString.value = $event),
                  label: "Entity Type",
                  grouped: "",
                  enhanceForLongLists: "",
                  items: unref(entityTypeOptions),
                  rules: "required"
                }, null, 8, ["modelValue", "items"]), createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [createVNode(unref(TextBox), {
                  modelValue: entityTypeQualifierColumn.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => entityTypeQualifierColumn.value = $event),
                  label: "Qualifier Field"
                }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_5, [createVNode(unref(TextBox), {
                  modelValue: entityTypeQualifierValue.value,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => entityTypeQualifierValue.value = $event),
                  label: "Qualifier Value"
                }, null, 8, ["modelValue"])])])])) : createCommentVNode("v-if", true), createVNode(unref(AttributeEditor), {
                  modelValue: editableAttribute.value,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => editableAttribute.value = $event),
                  reservedKeyNames: usedKeyNames.value,
                  isShowInGridVisible: (_unref10 = unref(config)) === null || _unref10 === void 0 ? void 0 : (_unref10$options = _unref10.options) === null || _unref10$options === void 0 ? void 0 : _unref10$options.enableShowInGrid
                }, null, 8, ["modelValue", "reservedKeyNames", "isShowInGridVisible"])];
              }),
              _: 1
            }, 8, ["modelValue", "title"]), createVNode(unref(Modal), {
              modelValue: showFilterModal.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => showFilterModal.value = $event),
              title: "Filter Options",
              onSave: applyFilters
            }, {
              customButtons: withCtx(() => [createVNode(unref(RockButton), {
                type: "button",
                btnType: "default",
                onClick: clearFilters
              }, {
                default: withCtx(() => [_hoisted_6]),
                _: 1
              }), createVNode(unref(RockButton), {
                type: "submit",
                btnType: "primary"
              }, {
                default: withCtx(() => [_hoisted_7]),
                _: 1
              })]),
              default: withCtx(() => [createVNode(unref(DropDownList), {
                modelValue: activeFilter.value,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => activeFilter.value = $event),
                items: activeFilterOptions,
                label: "Active Status"
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["modelValue"])], 64);
          };
        }
      }));

      script.__file = "src/Core/attributes.obs";

    })
  };
}));
//# sourceMappingURL=attributes.obs.js.map
