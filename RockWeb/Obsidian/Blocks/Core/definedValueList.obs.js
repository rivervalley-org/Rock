System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/attributeValuesContainer.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, Fragment, unref, createBlock, withCtx, createVNode, createCommentVNode, createElementVNode, toDisplayString, reactive, useConfigurationValues, useInvokeBlockAction, EntityType, Grid, ReorderColumn, TextColumn, textValueFilter, BooleanColumn, AttributeColumns, SecurityColumn, DeleteColumn, alert, Modal, TextBox, CategoryPicker, CheckBox, AttributeValuesContainer;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      unref = module.unref;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      reactive = module.reactive;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      Grid = module["default"];
      ReorderColumn = module.ReorderColumn;
      TextColumn = module.TextColumn;
      textValueFilter = module.textValueFilter;
      BooleanColumn = module.BooleanColumn;
      AttributeColumns = module.AttributeColumns;
      SecurityColumn = module.SecurityColumn;
      DeleteColumn = module.DeleteColumn;
    }, function (module) {
      alert = module.alert;
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      CategoryPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
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

      var script = exports('default', defineComponent({
        name: 'definedValueList',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var gridDataSource = ref();
          var gridData;
          var isModalOpen = ref(false);
          var idKey = ref("");
          var value = ref("");
          var category = ref();
          var description = ref("");
          var isActive = ref(false);
          var attributes = ref({});
          var attributeValues = ref({});
          var itemTerm = computed(() => {
            var _config$options, _config$options2;
            return (_config$options = config.options) !== null && _config$options !== void 0 && _config$options.definedTypeName ? "".concat((_config$options2 = config.options) === null || _config$options2 === void 0 ? void 0 : _config$options2.definedTypeName, " Defined Value") : "Defined Value";
          });
          var modalTitle = computed(() => {
            var _config$options3;
            var operation = idKey.value ? "Edit" : "Add";
            return "".concat(operation, " defined value for ").concat((_config$options3 = config.options) === null || _config$options3 === void 0 ? void 0 : _config$options3.definedTypeName);
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
          function onSelectItem(_x) {
            return _onSelectItem.apply(this, arguments);
          }
          function _onSelectItem() {
            _onSelectItem = _asyncToGenerator(function* (key) {
              var result = yield invokeBlockAction("Edit", {
                key
              });
              if (result.isSuccess && result.data) {
                var _result$data$idKey, _result$data$value, _result$data$descript, _result$data$category, _result$data$attribut, _result$data$attribut2;
                idKey.value = (_result$data$idKey = result.data.idKey) !== null && _result$data$idKey !== void 0 ? _result$data$idKey : "";
                value.value = (_result$data$value = result.data.value) !== null && _result$data$value !== void 0 ? _result$data$value : "";
                description.value = (_result$data$descript = result.data.description) !== null && _result$data$descript !== void 0 ? _result$data$descript : "";
                category.value = (_result$data$category = result.data.category) !== null && _result$data$category !== void 0 ? _result$data$category : {};
                isActive.value = result.data.isActive;
                attributes.value = (_result$data$attribut = result.data.attributes) !== null && _result$data$attribut !== void 0 ? _result$data$attribut : {};
                attributeValues.value = (_result$data$attribut2 = result.data.attributeValues) !== null && _result$data$attribut2 !== void 0 ? _result$data$attribut2 : {};
                isModalOpen.value = true;
              } else {
                var _result$errorMessage2;
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to edit defined value.");
              }
            });
            return _onSelectItem.apply(this, arguments);
          }
          function onDeleteClick(_x2) {
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
                var _result$errorMessage3;
                yield alert((_result$errorMessage3 = result.errorMessage) !== null && _result$errorMessage3 !== void 0 ? _result$errorMessage3 : "Unknown error while trying to delete defined value.");
              }
            });
            return _onDeleteClick.apply(this, arguments);
          }
          function onAddItem() {
            return _onAddItem.apply(this, arguments);
          }
          function _onAddItem() {
            _onAddItem = _asyncToGenerator(function* () {
              yield onSelectItem("");
            });
            return _onAddItem.apply(this, arguments);
          }
          function onOrderChanged(_x3, _x4) {
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
          function onSaveDefinedValue() {
            return _onSaveDefinedValue.apply(this, arguments);
          }
          function _onSaveDefinedValue() {
            _onSaveDefinedValue = _asyncToGenerator(function* () {
              var bag = {
                idKey: idKey.value,
                value: value.value,
                category: category.value,
                description: description.value,
                isActive: isActive.value,
                attributes: attributes.value,
                attributeValues: attributeValues.value
              };
              var result = yield invokeBlockAction("Save", {
                bag
              });
              if (result.isSuccess) {
                gridDataSource.value = loadGridData();
                isModalOpen.value = false;
              } else {
                var _result$errorMessage4;
                yield alert((_result$errorMessage4 = result.errorMessage) !== null && _result$errorMessage4 !== void 0 ? _result$errorMessage4 : "Unknown error while trying to save Defined Value.");
              }
            });
            return _onSaveDefinedValue.apply(this, arguments);
          }
          function resetModal() {
            idKey.value = "";
            value.value = "";
            description.value = "";
            category.value = {};
            isActive.value = false;
            attributes.value = {};
            attributeValues.value = {};
          }
          watch(isModalOpen, () => {
            if (!isModalOpen) {
              resetModal();
            }
          });
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$options, _unref$gridDefinition;
            return openBlock(), createElementBlock(Fragment, null, [(_unref$options = unref(config).options) !== null && _unref$options !== void 0 && _unref$options.isBlockVisible ? (openBlock(), createBlock(unref(Grid), {
              key: 0,
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: unref(itemTerm),
              entityTypeGuid: unref(EntityType).DefinedValue,
              stickyHeader: "",
              liveUpdates: "",
              showLaunchWorkflow: false,
              onAddItem: unref(config).isAddEnabled ? onAddItem : undefined,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => {
                var _unref$options2, _unref$gridDefinition2, _unref$gridDefinition3, _unref$options3;
                return [createVNode(unref(ReorderColumn), {
                  onOrderChanged: onOrderChanged
                }), createVNode(unref(TextColumn), {
                  name: "value",
                  title: "Value",
                  field: "value",
                  filter: unref(textValueFilter),
                  visiblePriority: "xs"
                }, null, 8, ["filter"]), (_unref$options2 = unref(config).options) !== null && _unref$options2 !== void 0 && _unref$options2.isCategorizedValuesEnabled ? (openBlock(), createBlock(unref(TextColumn), {
                  key: 0,
                  name: "category",
                  title: "Category",
                  field: "category",
                  filter: unref(textValueFilter),
                  visiblePriority: "xs"
                }, null, 8, ["filter"])) : createCommentVNode("v-if", true), createVNode(unref(TextColumn), {
                  name: "description",
                  title: "Description",
                  field: "description",
                  filter: unref(textValueFilter),
                  visiblePriority: "xs",
                  width: "45%"
                }, null, 8, ["filter"]), createVNode(unref(BooleanColumn), {
                  name: "isActive",
                  title: "Active",
                  field: "isActive",
                  visiblePriority: "xs"
                }), createVNode(unref(AttributeColumns), {
                  attributes: (_unref$gridDefinition2 = (_unref$gridDefinition3 = unref(config).gridDefinition) === null || _unref$gridDefinition3 === void 0 ? void 0 : _unref$gridDefinition3.attributeFields) !== null && _unref$gridDefinition2 !== void 0 ? _unref$gridDefinition2 : []
                }, null, 8, ["attributes"]), (_unref$options3 = unref(config).options) !== null && _unref$options3 !== void 0 && _unref$options3.isSecurityOnValuesEnabled ? (openBlock(), createBlock(unref(SecurityColumn), {
                  key: 1
                })) : createCommentVNode("v-if", true), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                  key: 2,
                  onClick: onDeleteClick
                })) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }, 8, ["definition", "data", "itemTerm", "entityTypeGuid", "onAddItem"])) : createCommentVNode("v-if", true), createVNode(unref(Modal), {
              modelValue: isModalOpen.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isModalOpen.value = $event),
              title: "Defined Value",
              saveText: "Save",
              onSave: onSaveDefinedValue
            }, {
              default: withCtx(() => {
                var _unref$options4, _unref$options$entity, _unref$options5;
                return [createElementVNode("legend", null, toDisplayString(unref(modalTitle)), 1), createElementVNode("fieldset", null, [createVNode(unref(TextBox), {
                  modelValue: value.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => value.value = $event),
                  label: "Value",
                  rules: "required"
                }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                  modelValue: description.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => description.value = $event),
                  label: "Description",
                  textMode: "multiline"
                }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
                  modelValue: isActive.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isActive.value = $event),
                  label: "Active"
                }, null, 8, ["modelValue"]), (_unref$options4 = unref(config).options) !== null && _unref$options4 !== void 0 && _unref$options4.isCategorizedValuesEnabled ? (openBlock(), createBlock(unref(CategoryPicker), {
                  key: 0,
                  modelValue: category.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => category.value = $event),
                  label: "Category Picker",
                  multiple: false,
                  entityTypeGuid: unref(EntityType).DefinedValue,
                  entityTypeQualifierColumn: "DefinedTypeId",
                  entityTypeQualifierValue: (_unref$options$entity = (_unref$options5 = unref(config).options) === null || _unref$options5 === void 0 ? void 0 : _unref$options5.entityTypeQualifierValue) !== null && _unref$options$entity !== void 0 ? _unref$options$entity : '',
                  help: "The category for the defined value. This will be used for the selection of the defined value."
                }, null, 8, ["modelValue", "entityTypeGuid", "entityTypeQualifierValue"])) : createCommentVNode("v-if", true), createVNode(unref(AttributeValuesContainer), {
                  modelValue: attributeValues.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => attributeValues.value = $event),
                  attributes: attributes.value,
                  showCategoryLabel: false,
                  isEditMode: true
                }, null, 8, ["modelValue", "attributes"])])];
              }),
              _: 1
            }, 8, ["modelValue"])], 64);
          };
        }
      }));

      script.__file = "src/Core/definedValueList.obs";

    })
  };
}));
//# sourceMappingURL=definedValueList.obs.js.map
