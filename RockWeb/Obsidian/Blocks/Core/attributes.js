System.register(['vue', '@Obsidian/Controls/attributeEditor', '@Obsidian/Controls/modal', '@Obsidian/Controls/rockField', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/dropDownList', '@Obsidian/Templates/block', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/textBox', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Utility/block', '@Obsidian/Utility/dialogs', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, computed, ref, watch, AttributeEditor, Modal, RockField, RockForm, NotificationBox, DropDownList, Block, RockButton, TextBox, FieldType, useConfigurationValues, useInvokeBlockAction, alert, confirmDelete, normalize;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      AttributeEditor = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      RockField = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Block = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      FieldType = module.FieldType;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      alert = module.alert;
      confirmDelete = module.confirmDelete;
    }, function (module) {
      normalize = module.normalize;
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

      var attributes = exports('default', defineComponent({
        name: "Core.Attributes",
        components: {
          NotificationBox,
          AttributeEditor,
          Block,
          DropDownList,
          Modal,
          RockButton,
          RockField,
          RockForm,
          TextBox
        },
        setup() {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var showEntityTypePicker = computed(() => !config.entityTypeGuid);
          var entityTypeGuid = ref("");
          var entityTypeOptions = computed(() => {
            var _config$entityTypes;
            return (_config$entityTypes = config.entityTypes) !== null && _config$entityTypes !== void 0 ? _config$entityTypes : [];
          });
          var entityTypeSelectionIsValid = computed(() => !!config.entityTypeGuid || entityTypeGuid.value !== "");
          var showEntityTypeQualifier = computed(() => !config.entityTypeGuid);
          var entityTypeQualifierColumn = ref("");
          var entityTypeQualifierValue = ref("");
          var attributes = ref(config.attributes);
          var editableAttribute = ref(null);
          var showEditAttributeModal = ref(false);
          var submitEditAttribute = ref(false);
          var editAttributeModalTitle = computed(() => {
            if (editableAttribute.value) {
              return "Edit ".concat(editableAttribute.value.name);
            }
            return "";
          });
          var onEditAttribute = function () {
            var _ref = _asyncToGenerator(function* (row) {
              var _result$data$entityTy, _result$data$entityTy2;
              var result = yield invokeBlockAction("GetEditAttribute", {
                attributeGuid: row.guid
              });
              if (!result.isSuccess || !result.data) {
                var _result$errorMessage;
                return alert((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unable to edit attribute.");
              }
              entityTypeQualifierColumn.value = (_result$data$entityTy = result.data.entityTypeQualifierColumn) !== null && _result$data$entityTy !== void 0 ? _result$data$entityTy : "";
              entityTypeQualifierValue.value = (_result$data$entityTy2 = result.data.entityTypeQualifierValue) !== null && _result$data$entityTy2 !== void 0 ? _result$data$entityTy2 : "";
              editableAttribute.value = result.data.attribute;
              showEditAttributeModal.value = true;
            });
            return function onEditAttribute(_x) {
              return _ref.apply(this, arguments);
            };
          }();
          var startSaveEditAttribute = () => {
            submitEditAttribute.value = true;
          };
          var saveEditAttribute = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("SaveEditAttribute", {
                entityTypeGuid: entityTypeGuid.value,
                entityTypeQualifierColumn: entityTypeQualifierColumn.value,
                entityTypeQualifierValue: entityTypeQualifierValue.value,
                attribute: editableAttribute.value
              });
              if (!result.isSuccess || !result.data) {
                var _result$errorMessage2;
                return alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unable to save attribute.");
              }
              var index = attributes.value.findIndex(a => {
                var _result$data;
                return a.guid === ((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.guid);
              });
              if (index !== -1) {
                attributes.value.splice(index, 1, result.data);
              } else {
                attributes.value.push(result.data);
              }
              editableAttribute.value = null;
              showEditAttributeModal.value = false;
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
            entityTypeQualifierColumn.value = "";
            entityTypeQualifierValue.value = "";
          };
          var onDeleteAttribute = function () {
            var _ref3 = _asyncToGenerator(function* (row) {
              var status = yield confirmDelete("Attribute");
              if (!status) {
                return;
              }
              var result = yield invokeBlockAction("DeleteAttribute", {
                attributeGuid: row.guid
              });
              if (!result.isSuccess) {
                return alert(result.errorMessage || "Unable to delete attribute.");
              }
              var index = attributes.value.findIndex(a => a.guid === row.guid);
              if (index !== -1) {
                attributes.value.splice(index, 1);
              }
            });
            return function onDeleteAttribute(_x2) {
              return _ref3.apply(this, arguments);
            };
          }();
          var editAttributeValue = ref("");
          var editAttribute = ref(null);
          var showEditAttributeValueModal = ref(false);
          var submitEditAttributeValue = ref(false);
          var editAttributeValueModalTitle = computed(() => {
            if (editAttribute.value) {
              return "".concat(editAttribute.value.name, " Value");
            }
            return "";
          });
          var onEditAttributeValue = function () {
            var _ref4 = _asyncToGenerator(function* (row) {
              if (!config.allowSettingOfValues) {
                return;
              }
              var result = yield invokeBlockAction("GetEditAttributeValue", {
                attributeGuid: row.guid
              });
              if (!result.isSuccess || !result.data) {
                var _result$errorMessage3;
                return alert((_result$errorMessage3 = result.errorMessage) !== null && _result$errorMessage3 !== void 0 ? _result$errorMessage3 : "Unable to edit attribute value.");
              }
              editAttribute.value = result.data.attribute;
              editAttributeValue.value = result.data.value;
              showEditAttributeValueModal.value = true;
            });
            return function onEditAttributeValue(_x3) {
              return _ref4.apply(this, arguments);
            };
          }();
          var startSaveEditAttributeValue = () => {
            submitEditAttributeValue.value = true;
          };
          var saveEditAttributeValue = function () {
            var _ref5 = _asyncToGenerator(function* () {
              var _editAttribute$value;
              var result = yield invokeBlockAction("SaveEditAttributeValue", {
                attributeGuid: (_editAttribute$value = editAttribute.value) === null || _editAttribute$value === void 0 ? void 0 : _editAttribute$value.attributeGuid,
                value: editAttributeValue.value
              });
              if (!result.isSuccess || !result.data) {
                var _result$errorMessage4;
                return alert((_result$errorMessage4 = result.errorMessage) !== null && _result$errorMessage4 !== void 0 ? _result$errorMessage4 : "Unable to save attribute value.");
              }
              var index = attributes.value.findIndex(a => {
                var _result$data2;
                return a.guid === ((_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.guid);
              });
              if (index !== -1) {
                attributes.value.splice(index, 1, result.data);
              }
              editAttribute.value = null;
              editAttributeValue.value = "";
              showEditAttributeValueModal.value = false;
            });
            return function saveEditAttributeValue() {
              return _ref5.apply(this, arguments);
            };
          }();
          var getDeleteButtonClass = row => {
            var classes = ["btn", "btn-danger", "btn-sm", "grid-delete-button"];
            if (!row.isDeleteEnabled) {
              classes.push("disabled");
            }
            return classes;
          };
          var getDataCellClass = _row => {
            if (config.allowSettingOfValues) {
              return ["grid-select-cell"];
            } else {
              return ["grid-cell"];
            }
          };
          watch(entityTypeGuid, _asyncToGenerator(function* () {
            if (entityTypeGuid.value === "") {
              attributes.value = [];
              return;
            }
            var result = yield invokeBlockAction("GetAttributes", {
              entityTypeGuid: entityTypeGuid.value
            });
            if (!result.isSuccess || !result.data) {
              return;
            }
            attributes.value = result.data;
          }));
          return {
            attributes,
            editableAttribute,
            editAttribute,
            editAttributeModalTitle,
            editAttributeValue,
            editAttributeValueModalTitle,
            entityTypeGuid,
            entityTypeOptions,
            entityTypeQualifierColumn,
            entityTypeQualifierValue,
            getDataCellClass,
            getDeleteButtonClass,
            saveEditAttribute,
            saveEditAttributeValue,
            entityTypeSelectionIsValid,
            onAddAttribute,
            onDeleteAttribute,
            onEditAttribute,
            onEditAttributeValue,
            onIgnore: () => {},
            showEditAttributeModal,
            showEditAttributeValueModal,
            showEntityTypeQualifier,
            showEntityTypePicker,
            startSaveEditAttribute,
            startSaveEditAttributeValue,
            submitEditAttribute,
            submitEditAttributeValue
          };
        },
        template: "\n<NotificationBox alertType=\"warning\">\n    This is an experimental block and should not be used in production.\n</NotificationBox>\n\n<Block title=\"Attribute List\">\n    <template #headerActions>\n        <div v-if=\"showEntityTypePicker\" class=\"form-inline panel-labels\">\n            <DropDownList v-model=\"entityTypeGuid\"\n                label=\"Entity Type\"\n                grouped\n                enhanceForLongLists\n                :items=\"entityTypeOptions\" />\n        </div>\n    </template>\n\n    <template #default>\n        <div v-if=\"entityTypeSelectionIsValid\" class=\"grid grid-panel\">\n            <div class=\"grid-actions border-bottom border-panel\">\n                <RockButton class=\"btn-add btn-grid-action\" btnType=\"link\" @click=\"onAddAttribute\"><i class=\"fa fa-plus-circle fa-fw\"></i></RockButton>\n            </div>\n\n            <div class=\"table-responsive\">\n                <table class=\"grid-table table table-bordered table-striped table-hover\">\n                    <thead>\n                        <tr align=\"left\">\n                            <th data-priority=\"1\" scope=\"col\" align=\"right\">Id</th>\n                            <th data-priority=\"1\" scope=\"col\">Qualifier</th>\n                            <th data-priority=\"1\" scope=\"col\">Name</th>\n                            <th data-priority=\"1\" scope=\"col\">Categories</th>\n                            <th data-priority=\"1\" scope=\"col\">Value</th>\n                            <th class=\"grid-columncommand\" data-priority=\"1\" scope=\"col\">&nbsp;</th>\n                            <th class=\"grid-columncommand\" data-priority=\"1\" scope=\"col\">&nbsp;</th>\n                            <th class=\"grid-columncommand\" data-priority=\"1\" scope=\"col\">&nbsp;</th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr v-for=\"attribute in attributes\" :key=\"attribute.id\" align=\"left\" @click.stop=\"onEditAttributeValue(attribute)\">\n                            <td :class=\"getDataCellClass(attribute)\" data-priority=\"1\" style=\"white-space: nowrap;\" align=\"right\">{{ attribute.id }}</td>\n                            <td :class=\"getDataCellClass(attribute)\" data-priority=\"1\" style=\"white-space: nowrap;\">{{ attribute.qualifier }}</td>\n                            <td :class=\"getDataCellClass(attribute)\" data-priority=\"1\">{{ attribute.name }}</td>\n                            <td :class=\"getDataCellClass(attribute)\" data-priority=\"1\">{{ attribute.categories }}</td>\n                            <td :class=\"getDataCellClass(attribute)\" data-priority=\"1\">\n                                <RockField :modelValue=\"attribute.value\" :attribute=\"attribute.attribute\" :showLabel=\"false\" isCondensed />\n                            </td>\n                            <td class=\"grid-columncommand\" data-priority=\"1\" align=\"center\" @click.stop=\"onIgnore\">\n                                <a title=\"Edit\" class=\"btn btn-default btn-sm\" @click.prevent.stop=\"onEditAttribute(attribute)\"><i class=\"fa fa-pencil\"></i></a>\n                            </td>\n                            <td class=\"grid-columncommand\" data-priority=\"1\" align=\"center\" @click.stop=\"onIgnore\">\n                                <a title=\"Security\" class=\"btn btn-security btn-sm disabled\"><i class=\"fa fa-lock\"></i></a>\n                            </td>\n                            <td class=\"grid-columncommand\" data-priority=\"1\" align=\"center\" @click.stop=\"onIgnore\">\n                                <a title=\"Delete\" :class=\"getDeleteButtonClass(attribute)\" @click.prevent.stop=\"onDeleteAttribute(attribute)\"><i class=\"fa fa-times\"></i></a>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <NotificationBox v-else alertType=\"warning\">\n            Please select an entity to display attributes for.\n        </NotificationBox>\n    </template>\n</Block>\n\n<Modal v-model=\"showEditAttributeValueModal\" :title=\"editAttributeValueModalTitle\">\n    <RockForm v-model:submit=\"submitEditAttributeValue\" @submit=\"saveEditAttributeValue\">\n        <RockField v-model=\"editAttributeValue\" :attribute=\"editAttribute\" isEditMode />\n    </RockForm>\n\n    <template #customButtons>\n        <RockButton btnType=\"primary\" @click=\"startSaveEditAttributeValue\">Save</RockButton>\n    </template>\n</Modal>\n\n<Modal v-model=\"showEditAttributeModal\" :title=\"editAttributeModalTitle\">\n    <RockForm v-model:submit=\"submitEditAttribute\" @submit=\"saveEditAttribute\">\n        <div v-if=\"showEntityTypeQualifier\" class=\"well\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <TextBox v-model=\"entityTypeQualifierColumn\" label=\"Qualifier Field\" />\n                </div>\n\n                <div class=\"col-md-6\">\n                    <TextBox v-model=\"entityTypeQualifierValue\" label=\"Qualifier Value\" />\n                </div>\n            </div>\n        </div>\n\n        <AttributeEditor v-model=\"editableAttribute\" />\n    </RockForm>\n\n    <template #customButtons>\n        <RockButton btnType=\"primary\" @click=\"startSaveEditAttribute\">Save</RockButton>\n    </template>\n</Modal>\n"
      }));

    })
  };
}));
//# sourceMappingURL=attributes.js.map
